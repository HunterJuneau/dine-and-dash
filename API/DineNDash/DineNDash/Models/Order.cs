using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DineNDash.Models
{
    public class Order
    {
        public Guid Id { get; set; }
        public User User { get; set; }
        public decimal TotalCost { get; set; }
        public Payment Payment { get; set; }
        public bool Completed { get; set; }

    }



}
