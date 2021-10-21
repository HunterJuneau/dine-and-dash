using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DineNDash.Models
{
    public class CreateOrderCommand
    {
        
       //public decimal TotalCost { get; set; }
       //public bool Completed { get; set; }
        public Guid UserId { get; set; }
        public Guid PaymentId { get; set; }
        //public double Price { get; set; }
    }
}
