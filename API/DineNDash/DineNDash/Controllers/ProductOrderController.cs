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

        // Get Single Produc Order by Id //
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

        // Get Orders's ProductOrders by Order Id //
        [HttpGet("order/{orderId}")]
        public IActionResult GetProductOdersByOrderId(Guid orderId)
        {
            return Ok(_productOrderRepository.GetAssociatedProductOrders(orderId));
        }

        // Get User's Orders //
        [HttpGet("user/{userId}")]
        public IActionResult GetAllUserOrders(Guid userId)
        {
            return Ok(_orderRepository.GetUserOrders(userId));
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

            
            if (productToOrder == null) 
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

            var currentProductQauntity = productToOrder.Quantity;

            var difference = productToOrder.Quantity - command.ProductOrderQuantity;

            var subtractProductOrder = new Product
            {
                ProductName = productToOrder.ProductName,
                Id = productToOrder.Id,
                Quantity = difference,
                ProductDescription = productToOrder.ProductDescription,
                Price = productToOrder.Price,
            };


            // Will return if item is not in stock //
            if (currentProductQauntity <= 0)
            {
                return NotFound($"{subtractProductOrder.ProductName} is not in stock. Please choose another product.");
            }

            // Will return if the user tries to order a larger quantity of a product than what is available in stock //
            if (subtractProductOrder.Quantity < 0)
            {
                return NotFound($"There are only {currentProductQauntity} {productToOrder.ProductName} in stock. You added {newProductOrder.ProductQuantity} to your cart. Please add {currentProductQauntity} or less to you order.");
            }


            // Subtracts the quantity chosen for the productOrder from the product quantity //
            _productRepository.Update(command.ProductId, subtractProductOrder);


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
