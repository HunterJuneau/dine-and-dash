using DineNDash.DataAccess;
using DineNDash.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Dapper;


namespace DineNDash.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        UserRepository _repo;

        public UserController()
        {
            _repo = new UserRepository();
        }

        // Get all Users // 
       [HttpGet]
        public IActionResult GetAllUsers()
        {
            return Ok(_repo.GetAll());
        }


        // Add User //
        [HttpPost]

        public IActionResult AddUser(User newUser)
        {
            _repo.Add(newUser);

            return Created($"/api/users/{newUser.Id}", newUser);
        }
    }
}
