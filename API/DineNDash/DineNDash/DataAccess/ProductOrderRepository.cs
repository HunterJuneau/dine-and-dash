using DineNDash.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using Dapper;

namespace DineNDash.DataAccess
{
    public class ProductOrderRepository
    {
        readonly string _connectionString;

        public ProductOrderRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("DineAndDash");
        }

        // Get all Product Orders //
        internal IEnumerable<ProductOrder> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var productOrders = db.Query<ProductOrder>(@"Select *
                                        From productOrders");

            return productOrders;
        }

        // Get ProductOrder by Id //
        internal ProductOrder GetById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select *
                        From ProductOrders
                        where id = @id";


            var productOrder = db.QueryFirstOrDefault<ProductOrder>(sql, new { id = id });

            return productOrder;
        }

        // Update User by Id //
        internal ProductOrder UpdateProductOrder(Guid id, ProductOrder productOrder)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"update ProductOrders
                        Set ProductQuantity = @productQuantity
                        output inserted.*
                     Where id = @id";


            productOrder.Id = id;

            var updatedProductOrder = db.QuerySingleOrDefault<ProductOrder>(sql, productOrder);

            return updatedProductOrder;
        }
    }
}
