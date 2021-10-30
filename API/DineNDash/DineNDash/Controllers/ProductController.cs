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
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private ProductRepository _repo;

        public ProductController(ProductRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllProducts()
        {
            return Ok(_repo.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetProductById(Guid id)
        {
            var product = _repo.GetById(id);

            if (product == null) return NotFound($"No Product with the {id} exists");

            return Ok(product);
        }

        [HttpGet("types/{type}")]
        public IActionResult GetProductByType(ProductType type)
        {
            return Ok(_repo.GetByType(type));
        }

        [HttpGet("forSale")]
        public IActionResult GetForSaleProducts(string sale)
        {
            return Ok(_repo.GetForSale(sale));
        
        }

        [HttpGet("available")]
        public IActionResult GetAllAvailableProducts(string status)
        {
            return Ok(_repo.GetAvailable(status));
        }

        [HttpPost]
        public IActionResult AddProduct(Product product)
        {
            _repo.Add(product);

            return Created($"api/products/{product.Id}", product);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(Guid id, Product product)
        {
            var productToUpdate = _repo.GetById(id);
            if (productToUpdate == null) NotFound($"Could Not find Product with the id {id} to update");

            var updateProduct = _repo.Update(id, product);
            return Ok(updateProduct);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(Guid id)
        {
            _repo.Remove(id);
            return Ok();
        }

    }
}
