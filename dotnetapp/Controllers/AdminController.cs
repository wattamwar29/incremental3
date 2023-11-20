using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
 
namespace dotnetapp.Controllers
{
 
   
    [ApiController]
    [Route("/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly ApplicationDbContext context;
    //    ApplicationDbContext context = new ApplicationDbContext();
 
        public AdminController(ApplicationDbContext _context)
        {
            context = _context;
        }
 
 
        public IActionResult GetPlayers()
        {
            var data=context.Players.ToList();
            return Ok(data);
        }
 
        public IActionResult GetTeams(int id)
        {
            var data=context.Teams.ToList();
            return Ok(data);  
        }
 
 
 
        public IActionResult PutPlayer(int id, Player player)
        {
            try
            {
 
            if(ModelState.IsValid)
            {
                Player p = new Player{};
                Player e = context.Players.Find(id);
                e.Name = player.Name;
                e.Age = player.Age;
                e.Category = player.Category;
                e.BiddingPrice = player.BiddingPrice;
                context.SaveChanges();
                return Ok();
            }
            }
            catch(System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
 
            return BadRequest("Unable to Edit Record");
        }
 
 
 
        public IActionResult DeletePlayer(int id)
        {
            try
            {
                var data = context.Players.Find(id);
                context.Players.Remove(data);
                context.SaveChanges();
                return Ok();
            }
            catch(System.Exception ex)
            {
                return BadRequest(ex.Message);
 
            }
        }
    }
 
}