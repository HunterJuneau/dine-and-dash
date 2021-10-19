using DineNDash.DataAccess;
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
        OrderRepository _repo;

         public OrderController(OrderRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllOrders()
        {
            return Ok(_repo.GetAll());
        }

        //[HttpGet("{id}")]
        //public IActionResult GetSingleOrder(Guid id)
        //{
        //    return Ok(_repo.GetById(id));
        //}
    }
}
