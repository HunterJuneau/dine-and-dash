using DineNDash.Models;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;

namespace DineNDash.DataAccess
{
    public class UserRepository
    {


        const string _connectionString = "Server=localhost;Database=DineAndDash;Trusted_Connection=True;";


        // Get All Users //
        internal IEnumerable<User> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var users = db.Query<User>(@"Select *
                                        From Users");

            return users;
        }

        // Add new User //
        internal void Add(User newUser)
        {

            using var db = new SqlConnection(_connectionString);

            var sql = @"insert into users(FirstName, LastName, CustomerCreated, ContactEmail)
                        output inserted.Id
                        values (@FirstName, @LastName, @CustomerCreated, @ContactEmail)";

            var id = db.ExecuteScalar<Guid>(sql, newUser);

            //var date = db.ExecuteScalar<DateTime>(sql, newUser);


            newUser.Id = id;
            //newUser.CustomerCreated = date;

        }

        internal User GetById(Guid userId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select *
                        From Users
                        where id = @id";


            var user = db.QueryFirst<User>(sql, new { id = userId });

            return user;
        }

        internal void DeleteUserById(Guid userId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Delete 
                         From Users
                         Where Id = @userID";

            db.Execute(sql, new { userId = userId });
        }
    }
}
