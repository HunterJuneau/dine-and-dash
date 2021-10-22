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

        internal IEnumerable<ProductOrder> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var productOrders = db.Query<ProductOrder>(@"Select *
                                        From productOrders");

            return productOrders;
        }
    }
}
