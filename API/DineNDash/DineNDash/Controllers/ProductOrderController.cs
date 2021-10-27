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
    [Route("api/productOrder")]
    [ApiController]
    public class ProductOrderController : ControllerBase
    {
        ProductOrderRepository _productOrderRepository;
        OrderRepository _orderRepository;
        ProductRepository _productRepository;

        public ProductOrderController(ProductOrderRepository productOrderRepo, OrderRepository orderRepo, ProductRepository productRepo)
        {
            _productOrderRepository = productOrderRepo;
            _orderRepository = orderRepo;
            _productRepository = productRepo;
        }

        // Get all Product Orders
        [HttpGet]
        public IActionResult GetAllProductOrders()
        {
            return Ok(_productOrderRepository.GetAll());
        }

        // Get Single Product Order by Id //
        [HttpGet("{id}")]
        public IActionResult GetProductOrderById(Guid id)
        {
            var prdouctOrder = _productOrderRepository.GetById(id);

            if (prdouctOrder == null)
            {
                return NotFound($"No Product Order with the Id of {id} was found.");
            }


            return Ok(prdouctOrder);
        }

        // Update ProductOrder by Id //
        [HttpPut]

        public IActionResult UpdateProductOrder(Guid id, ProductOrder productOrder)
        {

            var productOrdertoUpdate = _productOrderRepository.GetById(id);

            if (productOrdertoUpdate == null)
            {
                return NotFound($"The Product Order associated with the Id of {id} could not be located ");
            }

            var updatedProductOrder = _productOrderRepository.UpdateProductOrder(id, productOrder);

            return Ok(updatedProductOrder);

        }
        [HttpPost]
        //Create(Add) Product Order //
        public IActionResult CreateProductOrder(CreateProductOrderCommand command)
        {
            var productToOrder = _productRepository.GetById(command.ProductId);
            var orderToCreate = _orderRepository.GetById(command.OrderId);

            
            if (productToOrder == null) // Change to check if we have a product order in order to create //
                return NotFound("There was no matching Product in the database.");

            if (orderToCreate == null)
                return NotFound("There was no matching Order in the database");

            var newProductOrder = new ProductOrder
            {
                ProductId = productToOrder.Id,
                OrderId = orderToCreate.Id,
                ProductQuantity = command.ProductOrderQuantity
            };

            _productOrderRepository.Add(newProductOrder);
            // use productToOrder
            // differenceVariable: subtract productToOrder.quantity - command productOrderQuantity
            var difference = productToOrder.Quantity - command.ProductOrderQuantity;
            //make call to update that product with new differenceVariable

            _productRepository.Update(command.ProductId, productToOrder);

            return Created($"/api/orders/{newProductOrder.Id}", newProductOrder);

        }


        // Delete Product Order //
        [HttpDelete("{id}")]
        public IActionResult DeleteProductOrder(Guid id)
        {
            _productOrderRepository.Remove(id);

            return Ok();
        }
    }
}
