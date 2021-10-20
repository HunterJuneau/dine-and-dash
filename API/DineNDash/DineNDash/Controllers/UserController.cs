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


        // Get User by Id // 
        [HttpGet("{id}")]
        public IActionResult GetUserById(Guid id)
        {
            var user = _repo.GetById(id);

            if (user == null)
            {
                return NotFound($"No User with the Id of {id} was found.");
            }


            return Ok(user);
        }


        // Add User //
        [HttpPost]

        public IActionResult AddUser(User newUser)
        {
            if (string.IsNullOrEmpty(newUser.FirstName) || string.IsNullOrEmpty(newUser.LastName) || string.IsNullOrEmpty(newUser.ContactEmail))
            {
                return BadRequest("First Name, Last Name and Contact Email are required fields");
            }

            _repo.Add(newUser);

            return Created($"/api/users/{newUser.Id}", newUser);
        }

        
    }
}
