using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DineNDash.Models
{
    public class OrderProductOrdersCommand
    {
        public Guid ProductOrderId { get; set; }
        public Guid OrderId { get; set; }

        public int Productquantity { get; set; }
        public string ProductName { get; set; }

    }
}
