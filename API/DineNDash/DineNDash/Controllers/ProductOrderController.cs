using DineNDash.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DineNDash.Controllers
{
    [Route("api/productOrder")]
    [ApiController]
    public class ProductOrderController : ControllerBase
    {
        ProductOrderRepository _repo;

        public ProductOrderController(ProductOrderRepository repo)
        {
            _repo = repo;
        }

        // Get all Product Orders
        [HttpGet]
        public IActionResult GetAllProductOrders()
        {
            return Ok(_repo.GetAll());
        }

        // Get Single Product Order by Id //
        [HttpGet("{id}")]
        public IActionResult GetProductOrderById(Guid id)
        {
            var prdouctOrder = _repo.GetById(id);

            if (prdouctOrder == null)
            {
                return NotFound($"No Product Order with the Id of {id} was found.");
            }


            return Ok(prdouctOrder);
        }

    }
}
