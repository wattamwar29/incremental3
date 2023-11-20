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
    //    ApplicationDbContext context = new ApplicationDbContext();
 
        public AdminController(ApplicationDbContext _context)
        {
            context = _context;
        }
 
        [HttpGet]
 
        [Route("ListTeam")]
        public IActionResult Get()
        {
            var data=from m in context.Teams select m;
            return Ok(data);
        }
 
        [HttpGet]
 
        [Route("ListTeam/{id}")]
        public IActionResult Get(int id)
        {
            // var data=context.Teams.ToList();
            if(id==null)
            {
                return BadRequest("Id cannot be null");
            }
            var data=(from m in context.Teams where m.TeamId==id select m).FirstOrDefault();
            // var data=context.Teams.Find(id);
            if(data==null)
            {
                return NotFound($"Movie {id} not found");
            }
            return Ok(data);
           
        }
        [HttpPost]
        [Route("AddTeam")]
        public IActionResult Post(Team Team)
        {
            if(ModelState.IsValid)
            {
                try{
                    context.Teams.Add(Team);
                    context.SaveChanges();
 
                }
                catch(System.Exception ex){
                    return BadRequest(ex.InnerException.Message);
 
                }
            }
            return Created("Record Added",Team);
 
        }
        [HttpPut]
        [Route("EditTeam/{id}")]
        public IActionResult Put(int id, Team Team)
        {
            if(ModelState.IsValid)
            {
                Team mv = context.Teams.Find(id);
                mv.TeamName = Team.TeamName;
                context.SaveChanges();
                return Ok();
               
 
 
 
            }
            return BadRequest("Unable to Edit Record");
        }
        [HttpDelete]
        [Route("DeleteTeam/{id}")]
        public IActionResult Delete(int id)
        {
 
                var data=context.Teams.Find(id);
                context.Teams.Remove(data);
                context.SaveChanges();
                return Ok();
 
           
        }
 
    }
}
