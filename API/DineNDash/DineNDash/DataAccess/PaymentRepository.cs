using Dapper;
using DineNDash.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DineNDash.DataAccess
{
    public class PaymentRepository
    {
        readonly string _connectionString;

        public PaymentRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("DineAndDash");
        }

        internal Payment GetById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var orderSql = @"SELECT * 
                             FROM Payments 
                             WHERE Id = @id";

            var order = db.QueryFirstOrDefault<Payment>(orderSql, new { id = id });

            if (order == null) return null;

            return order;
        }
    }
}
