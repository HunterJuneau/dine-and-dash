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
        [HttpGet("users/{userId}")]
        public IActionResult GetUserPayments(Guid userId)
        {
            return Ok(_repo.GetUserPayments(userId));
        }

        // Get A Payment //
        [HttpGet("{id}")]
        public IActionResult GetPayment(Guid id)
        {
            var payment = _repo.GetPayment(id);

            if (payment == null)
            {
                return NotFound($"No Payment with the Id of {id} was found.");
            }


            return Ok(payment);
        }
    }
}
