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

        // Get All Active Users //
        [HttpGet("status/{status}")]
        public IActionResult GetAllActiveUsers(string status)
        {
            return Ok(_repo.GetAllActive(status));
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

        // Get User by fbUid //
        [HttpGet("auth/{fbUid}")]
        public IActionResult GetAuthUser(string fbUid)
        {
            var user = _repo.GetUserByFbUid(fbUid);

            if (user == null)
            {
                return Ok(false);
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


        public IActionResult UpdateUser(Guid id, User user)
        {

            var userToUpdate = _repo.GetById(id);

            if (userToUpdate == null)
            {
                return NotFound($"The User associated with the Id of {id} could not be located ");
            }

            var updatedUser = _repo.UpdateUser(id, user);

            return Ok(updatedUser);


        }



    }
}
