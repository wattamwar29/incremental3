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
 
        [HttpGet]
        [Route("GetPlayer")]
 
        public IActionResult GetPlayers()
        {
            var data=context.Players.ToList();
            return Ok(data);
        }
 
         [HttpGet]
        [Route("GetPlayer/{id}")]
        public IActionResult GetPlayersbyid(int id){
             
             var data=context.Players.Find(id);
             if(data!=null)
             {
                return Ok(data);
             }
             return BadRequest();
 
        }
 
 
       
 
        [HttpPut]
        [Route("EditPlayer")]
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
 
        [HttpDelete]
        [Route("DeletePlayer")]
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
 
        [HttpPost]
        [Route("AddPlayer")]
        public IActionResult Post(Player p)
        {
            if(ModelState.IsValid)
            {
                try{
                    context.Players.Add(p);
                    context.SaveChanges();
                }
                catch(SystemException ex)
                {
                    return BadRequest(ex.InnerException.Message);
                }
            }
 
            return Created("Record Added", p); //
        }
       
       
        ///////////////////////////////////////////////////////////////////////////
 
        [HttpGet]
        [Route("GetTeams")]
        public IActionResult GetTeams(int id)
        {
            var data=context.Teams.ToList();
            return Ok(data);  
        }
 
        [HttpPut]
        [Route("EditTeam")]
        public IActionResult PutTeam(int id, Team t)
        {
            try
            {
 
            if(ModelState.IsValid)
            {
                // Team t = new Team{};
                Team e = context.Teams.Find(id);
                e.TeamName = t.TeamName;
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
 
 
        [HttpDelete]
        [Route("DeleteTeam")]
        public IActionResult DeleteTeam(int id)
        {
            try
            {
                var data = context.Teams.Find(id);
                context.Teams.Remove(data);
                context.SaveChanges();
                return Ok();
            }
            catch(System.Exception ex)
            {
                return BadRequest(ex.Message);
 
            }
        }
 
        [HttpPost]
        [Route("AddTeam")]
        public IActionResult PostTeam(Team t)
        {
            if(ModelState.IsValid)
            {
                try{
                    context.Teams.Add(t);
                    context.SaveChanges();
                }
                catch(SystemException ex)
                {
                    return BadRequest(ex.InnerException.Message);
                }
            }
 
            return Created("Record Added", t); //
        }
 
    }
 
 
}