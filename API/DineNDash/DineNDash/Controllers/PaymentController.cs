using DineNDash.DataAccess;
using Microsoft.AspNetCore.Mvc;
using System;

namespace DineNDash.Controllers
{
    [Route("api/payment")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        PaymentRepository _repo;

        public PaymentController(PaymentRepository repo)
        {
            _repo = repo;
        }

        // Get User's Payments //
        [HttpGet("{userId}")]
        public IActionResult GetUserPayments(Guid userId)
        {
            return Ok(_repo.GetPayments(userId));
        }
    }
}
