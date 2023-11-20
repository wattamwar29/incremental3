﻿using System.Collections.Generic;
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
    
 
        public AdminController(ApplicationDbContext _context)
        {
            context = _context;
        }
 
        public IActionResult GetPlayers()
        {
            var data=context.Players.ToList();
            return Ok(data);
        }
 
        public IActionResult GetTeams()
        {
            var data=context.Teams.ToList();
            return Ok(data);
           
        }
       
        [HttpPut]
        [Route("EditPlayer/{id}")]
        public IActionResult PutPlayer(int id, Player p)
        {
            Player pl=context.Players.Find(id);
            if(ModelState.IsValid){
                var player = new Player
            {
                Id=1,
                Name = "John Doe",
                Age=34,
                BiddingPrice=25,
                Category="adb"
            };
        }
            return Ok();           
    }
        [HttpDelete]
        [Route("DeletePlayer/{id}")]
        public IActionResult DeletePlayer(int id,Player p)
        {
 
                var data=context.Players.Find(id);
                context.Players.Remove(data);
                context.SaveChanges();
                return Ok();        
        }
 
    }
}
