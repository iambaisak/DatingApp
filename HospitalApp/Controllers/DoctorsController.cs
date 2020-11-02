using HospitalApp.DataInterfaces;
using HospitalApp.Dtos;
using HospitalApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalApp.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorsController : ControllerBase
    {
        private readonly IDoctorRepository _repo;
        private readonly IPatientRepository _rep;

        public DoctorsController(IDoctorRepository repo, IPatientRepository rep)
        {
            _repo = repo;
            _rep = rep;
        }

        //[HttpGet("{search}/{name}")]
       // public async Task<IActionResult> Search(string name)
        //{
          //  var result = await _repo.Search(name);
            //return Ok(result);
        //}

        [HttpGet]
        public async Task<IActionResult> GetDoctors()
        {
            var doctors = await _repo.GetDoctors();
            return Ok(doctors);
        }

        [HttpGet("{name}")]
        public async Task<IActionResult> GetPatientDoctors(string name)
        {
            var doctors = await _rep.GetPatientDoctors(name);
            return Ok(doctors);
        }
    }
}
