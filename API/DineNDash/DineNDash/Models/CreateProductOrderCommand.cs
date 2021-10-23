using System;

namespace DineNDash.Models
{
    public class CreateProductOrderCommand
    {
        public Guid OrderId { get; set; }
        public Guid ProductId { get; set; }
        public int ProductOrderQuantity { get; set; }
    }
}
