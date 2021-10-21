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
    public class OrderRepository
    {
        readonly string _connectionString;

        public OrderRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("DineAndDash");
        }
        // GET ALL ORDERS
        internal IEnumerable<Order> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"select *
                        from Orders o
	                        join Users u 
		                        on u.Id = o.UserId
                            join Payments p
                                on p.Id = o.PaymentId
	                       ";

            var results = db.Query<Order, User, Payment, Order>(sql, Map, splitOn: "Id");

            return results;
        }

        // GET ORDER BY ID
        internal Order GetById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var orderSql = @"select *
                        from Orders o
	                        join Users u 
		                        on u.Id = o.UserId
                            join Payments p
                                on p.Id = o.PaymentId
                            WHERE o.id = @id
	                       ";

            var order = db.Query<Order, User, Payment, Order>(orderSql, Map, new { id = id }, splitOn: "id");

            //if (order == null) return null;

            return order.FirstOrDefault();
        }
        // ADD AN ORDER
        internal void Add(Order newOrder)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"INSERT INTO [dbo].[Orders]
                                       (
                                         [UserId]
                                        ,[Completed]
                                        ,[PaymentId]
                                        ,[TotalCost])
	                            output inserted.Id
                                 VALUES
		                            (@userId, @paymentId, @completed, @totalCost)";

            var parameters = new
            {
                //TotalCost = newOrder.TotalCost,
               // Completed = newOrder.Completed,
                UserId = newOrder.User.Id,
                PaymentId = newOrder.Payment.Id

            };

            var id = db.ExecuteScalar<Guid>(sql, parameters);
            newOrder.Id = id;
        }

        internal Order Update(Guid id, Order order)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"update Orders set
                                        userId = @userId, 
                                        totalCost = @totalCost,
                                        paymentId = @paymentId,
                                        completed = @completed
                                       
                                     
                                     output inserted.Id
                                     Where id = @id";

            order.Id = id;
            var updatedOrder = db.QuerySingleOrDefault<Order>(sql, order);
            return updatedOrder;
            //db.Execute(sql, order);

        }

        internal void Remove(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Delete 
                        From Orders 
                        Where Id = @id";

            db.Execute(sql, new { id });
        }


        Order Map(Order order, User user, Payment payment)
        {
            order.User = user;
            order.Payment = payment;
            return order;
        }

    }
}
