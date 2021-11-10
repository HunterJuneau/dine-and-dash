using System;

namespace DineNDash.Models
{
    public class ProductOrder
    {
        public Guid Id { get; set; }
        public Guid OrderId { get; set; }
        public Guid ProductId { get; set; }
        public int ProductQuantity { get; set; }
        public decimal TotalCost { get; set; }

    }
}