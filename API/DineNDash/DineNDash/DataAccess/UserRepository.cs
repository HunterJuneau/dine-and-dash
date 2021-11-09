using DineNDash.Models;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using Dapper;
using Microsoft.Extensions.Configuration;

namespace DineNDash.DataAccess
{
    public class UserRepository
    {


        readonly string _connectionString;

        public UserRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("DineAndDash");
        }
        // Get All Users //
        internal IEnumerable<User> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var users = db.Query<User>(@"Select *
                                        From Users
                                        Order By lastName");

            return users;
        }

        // Get by Active or Inactive Users //
        internal IEnumerable<User> GetAllActive(string status)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select *
                        From Users
                        Where Status = @status";
            var users = db.Query<User>(sql, new { status });
            return users;
        }

        // Add new User //
        internal void Add(User newUser)
        {

            using var db = new SqlConnection(_connectionString);

            var sql = @"insert into users(FirstName, LastName, ContactEmail, Status)
                        output inserted.Id
                        values (@FirstName, @LastName, @ContactEmail, @Status)";

            var id = db.ExecuteScalar<Guid>(sql, newUser);


            newUser.Id = id;

        }

        // Get User by Id //
        internal User GetById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select *
                        From Users
                        where id = @id";


            var user = db.QueryFirstOrDefault<User>(sql, new { id });

            return user;
        }

        // Delete user by Id //
        internal void DeleteUserById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Delete 
                         From Users
                         Where id = @id";

            db.Execute(sql, new { id = id });
        }

        // Update User by Id //
        internal User UpdateUser(Guid id, User user)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"update Users
                        Set FirstName = @firstName,
	                    LastName = @lastName,
	                    ContactEmail = @contactEmail,
                        Status = @status
                        output inserted.*
                     Where id = @id";


            user.Id = id;

            var updatedUser = db.QuerySingleOrDefault<User>(sql, user);

            return updatedUser;
        }
    }
}
