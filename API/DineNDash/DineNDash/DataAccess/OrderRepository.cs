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

            var orders = db.Query<Order>(@"SELECT *
                                           FROM Orders");

            return orders;
        }


        internal Order GetById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var orderSql = @"SELECT * 
                             FROM Orders 
                             WHERE Id = @id";

            var order = db.QueryFirstOrDefault<Order>(orderSql, new { id = id });

            if (order == null) return null;

            return order;
        }

    }
}
