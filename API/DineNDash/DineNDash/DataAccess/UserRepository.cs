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
    public class UserRepository
    {
        readonly string _connectionString;

        public UserRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("DineAndDash");
        }

        internal User GetById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var orderSql = @"SELECT * 
                             FROM Users 
                             WHERE Id = @id";

            var order = db.QueryFirstOrDefault<User>(orderSql, new { id = id });

            if (order == null) return null;

            return order;
        }
    }
}
