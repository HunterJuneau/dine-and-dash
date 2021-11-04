using DineNDash.DataAccess;
using DineNDash.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DineNDash.Controllers
{
    [Route("api/order")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        OrderRepository _orderRepository;
        PaymentRepository _paymentRepository;
        UserRepository _userRepository;
        ProductOrderRepository _productOrderRepository;

        public OrderController(PaymentRepository paymentRepo, UserRepository userRepo, OrderRepository orderRepo, ProductOrderRepository productOrderRepo)
        {
            _userRepository = userRepo;
            _paymentRepository = paymentRepo;
            _orderRepository = orderRepo;
            _productOrderRepository = productOrderRepo;

        }

        [HttpGet]
        public IActionResult GetAllOrders()
        {
            return Ok(_orderRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetSingleOrder(Guid id)
        {
            return Ok(_orderRepository.GetById(id));
        }

        //[HttpPost]
        //public IActionResult AddAnOrder(Order newOrder)
        //{
        //    _orderRepository.Add(newOrder);
        //    return Created($"/api/orders/{newOrder.Id}", newOrder);
        //}

        [HttpPost]
        public IActionResult CreateOrder(CreateOrderCommand command)
        {
            var user = _userRepository.GetById(command.UserId);
            var payment = _paymentRepository.GetById(command.PaymentId);


            if (user == null)
                return NotFound("There was no matching user in the database.");

            if (payment == null)
                return NotFound("There was no matching payment in the database");

            var order = new Order
            {
                User = user,
                Payment = payment,
                Completed = command.Completed,
                TotalCost = command.TotalCost,
            };

            _orderRepository.Add(order);

            return Created($"/api/orders/{order.Id}", order);
        }


        [HttpPut("{id}")]
        public IActionResult UpdateOrder(Guid id, Order order)
        {
            var orderToUpdate = _orderRepository.GetById(id);

            if (orderToUpdate == null)
            {
                return NotFound($"Could not find an order with id {id} for updating");
            }

            var updatedOrder = _orderRepository.Update(id, order);
            return Ok(updatedOrder);

        }

        [HttpDelete("{id}")]
        public IActionResult DeleteOrder(Guid id)
        {
            _productOrderRepository.Remove(id);
            _orderRepository.Remove(id);

            return Ok();
        }
    }
}
