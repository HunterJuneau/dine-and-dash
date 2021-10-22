using DineNDash.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using Dapper;
using System.Linq;
using System.Threading.Tasks;

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
    }
}
