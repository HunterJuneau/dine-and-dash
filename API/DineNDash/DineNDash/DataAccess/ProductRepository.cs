using Dapper;
using DineNDash.Models;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DineNDash.DataAccess
{
    public class ProductRepository
    {
        readonly string _connectionString = "Server=localhost;Database=DineAndDash;Trusted_Connection=True;";
        internal object GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var products = db.Query<Product>(@"Select * From Products");

            return products;
        }

        internal object GetById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select *
                        From Products
                        Where Id = @id";

            var singleProduct = db.QueryFirstOrDefault<Product>(sql, new { id });

            return singleProduct;
        }
        internal IEnumerable<Product> GetByType(ProductType type)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @" Select *
                         From Products
                         Where Type = @type";
            var products = db.Query<Product>(sql, new { type });
            return products;

        }

        internal IEnumerable<Product> GetForSale(string sale)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select *
                        From Products
                        Where forSale = @sale";

            var productsForSale = db.Query<Product>(sql, new { sale });

            return productsForSale;

        }

        internal object GetAvailable()
        {
            throw new NotImplementedException();
        }

        internal void Add(Product product)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"INSERT INTO [dbo].[Products]
                                       (
                                        [type]
                                       ,[productName]
                                       ,[productDescription]
                                       ,[price]
                                       ,[quantity]
                                       ,[forSale])
	                            output inserted.Id
                                 VALUES
		                            (@type, @productName, @productDescription, @price, @quantity, @forSale)";

            var id = db.ExecuteScalar<Guid>(sql, product);
            product.Id = id;
        }

        internal object Update(Guid id, Product product)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"UPDATE [dbo].[Products]
                           SET Type = @type,
                               ProductName = @productName,
                               ProductDescription = @productDescription,
                               Price = @price,
                               Quantity = @quantity,
                               ForSale = @forSale
                           Output inserted.*
                           WHERE Id = @id";
            product.Id = id;
            var updatedProduct = db.QuerySingleOrDefault<Product>(sql, product);

            return updatedProduct;
        }
        internal void Remove(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Delete 
                        From [dbo].[Products]
                        Where Id = @id";

            db.Execute(sql, new { id });
        }

    }
}
