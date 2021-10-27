using Dapper;
using DineNDash.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;

namespace DineNDash.DataAccess
{
    public class PaymentRepository
    {
        readonly string _connectionString;

        public PaymentRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("DineAndDash");
        }

        internal IEnumerable<Payment> GetUserPayments(Guid userId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select * 
                From Payments 
                WHERE userId = @id";

            var payments = db.Query<Payment>(sql, new { id = userId });

            return payments;
        }

        internal Payment GetPayment(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select *
                        From Payments
                        where id = @id";


            var payment = db.QueryFirstOrDefault<Payment>(sql, new { id });

            return payment;
        }

        internal void AddPayment(Payment payment)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"INSERT INTO [dbo].[Payments]
                                       (
                                        [type]
                                       ,[userId]
                                       ,[accountNumber])
	                            output inserted.Id
                                 VALUES
		                            (@type, @userId, @accountNumber)";

            var id = db.ExecuteScalar<Guid>(sql, payment);
            payment.Id = id;
        }

        // Update Payment //
        internal Payment UpdatePayment(Guid id, Payment payment)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"update Payments
                        Set Type = @type,
                            UserId = @userId,
	                        AccountNumber = @accountNumber,
	                        Active = @active
                        output inserted.*
                     Where id = @id";


            payment.Id = id;

            var updatedPayment = db.QuerySingleOrDefault<Payment>(sql, payment);

            return updatedPayment;
        }
    }
}
