using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HospitalApp.Data;
using HospitalApp.DataInterfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HospitalApp.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ServeListController : ControllerBase
    {
        private readonly IDoctorRepository _repo;

        public ServeListController(IDoctorRepository repo)
        {
            _repo = repo;
        }
        [HttpGet("{department}")]
        public async Task<IActionResult> GetDepDoctors(string department)
        {
            var doctors = await _repo.GetDepDoctors(department);
            return Ok(doctors);
        }
    }
}
