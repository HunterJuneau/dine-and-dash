using System;

namespace DineNDash.Models
{
    public class Payment
    {
        public Guid Id { get; set; }
        public string Type { get; set; }
        public Guid UserId { get; set; }
        public string AccountNumber { get; set; }
    }
}
