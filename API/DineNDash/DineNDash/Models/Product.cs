using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DineNDash.Models
{
    public class Product
    {
        public Guid Id { get; set; }
        public ProductType Type { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public bool ForSale { get; set; }
        public string Image { get; set; }
        public bool Status { get; set; } = true;
    }

    public enum ProductType
    {
        Truck,
        Accessory
    }
}
