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
                                        From productOrders
                                        Order By orderId");

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

        // Update Product Order by Id //
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

        // Get All ProductOrders with associated OrderId //
        internal IEnumerable<ProductOrder> GetAssociatedProductOrders(Guid orderId)
        {
            using var db = new SqlConnection(_connectionString);

            var productOrderSql = @"select *
                        from ProductOrders po

                            join Orders o

                                on o.id = po.orderId

                            join Products pr

                                on pr.id = po.productId
                            join Payments p
                                on p.id = o.paymentId

                                where po.orderId = @id";

            //var productOrder = db.Query<Order, Product, Order, Payment,  ProductOrder>(productOrderSql, Map, new { id = orderId }, splitOn: "id");

            //return productOrder;

            var results = db.Query<ProductOrder>(productOrderSql, new { id = orderId });

            return results;
        }

         //Delete Product Order by Id //
        internal void Remove(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Delete 
                        From productOrders 
                        Where orderId = @id";

            db.Execute(sql, new { id });
        }

        internal void Add(ProductOrder newProductOrder)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"INSERT INTO [dbo].[ProductOrders]
                                       ( [orderId]
                                        ,[productId]
                                        ,[productQuantity])
                             output inserted.Id
                                 VALUES
                              (@orderId, @productId, @productQuantity)";

            var parameters = new
            {
                OrderId = newProductOrder.OrderId,
                ProductId = newProductOrder.ProductId,
                ProductQuantity = newProductOrder.ProductQuantity

            };

            var id = db.ExecuteScalar<Guid>(sql, parameters);
            newProductOrder.Id = id;
        }

        //ProductOrder Map(ProductOrder productOrder, Product product, Order order, Payment payment)
        //{
        //    order.Id = productOrder.OrderId;
        //    product.Id = productOrder.ProductId;
        //    product.Quantity = productOrder.ProductQuantity;
        //    return productOrder;
        //}

    }
}
