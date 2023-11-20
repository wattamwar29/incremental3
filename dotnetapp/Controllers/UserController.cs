using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
 
namespace dotnetapp.Controllers
{
   
 
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext context;
 
        public UserController(ApplicationDbContext _context)
        {
            context = _context;
        }
        public IActionResult Register(User u)
        {
            context.Users.Add(u);
            context.SaveChanges();
            return Ok(data);
        }
        public IActionResult Login(User u) {
            if(ModelState.IsValid)
            {
                var data=context.Users.FirstOrDefault(u=>u.Name==U.Name && u.password==U.password);
                return RedirectToAction("Login",U);
            }
            return Ok();
        }
       
    }
}