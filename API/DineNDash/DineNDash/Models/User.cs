using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DineNDash.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime CustomerCreated { get; set; }
        public string ContactEmail { get; set; }
        public bool Status { get; set; } = true;

    }
}
