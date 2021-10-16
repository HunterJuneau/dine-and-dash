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
        ProductOrderRepository _repo = new ProductOrderRepository();
    }
}
