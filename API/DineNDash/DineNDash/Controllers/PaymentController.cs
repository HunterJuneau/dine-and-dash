using DineNDash.DataAccess;
using DineNDash.Models;
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

        // Add Payment //
        [HttpPost]
        public IActionResult AddPayment(Payment payment)
        {
            _repo.AddPayment(payment);

            return Created($"api/payments/{payment.Id}", payment);
        }

        // Update Payment //
        [HttpPut("{id}")]
        public IActionResult UpdateUser(Guid id, Payment payment)
        {
            var paymentToUpdate = _repo.GetPayment(id);

            if (paymentToUpdate == null)
            {
                return NotFound($"The Payment associated with the Id of {id} was not found.");
            }

            var updatedPayment = _repo.UpdatePayment(id, payment);

            return Ok(updatedPayment);
        }
    }
}
