using DineNDash.DataAccess;
using DineNDash.Models;
using Microsoft.AspNetCore.Mvc;
using System;


namespace DineNDash.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        UserRepository _repo;

        public UserController(UserRepository repo)
        {
            _repo = repo;
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


        // Delete User by Id //
        
        [HttpDelete]
        public IActionResult DeleteUser(Guid userId)
        {
            _repo.DeleteUserById(userId);

            return Ok("You have successfully deleted this User from the Database.");
        }

        //Update User //

       [HttpPut("{id}")]


        public IActionResult UpdateUser(Guid userId, User user)
        {

            var userToUpdate = _repo.GetById(userId);

            if (userToUpdate == null)
            {
                return NotFound($"The User associated with the Id of {userId} could not be located ");
            }

            var updatedUser = _repo.UpdateUser(userId, user);

            return Ok(updatedUser);


        }

    }
}
