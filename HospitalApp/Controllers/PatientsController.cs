using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HospitalApp.DataInterfaces;
using HospitalApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HospitalApp.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
        private readonly IPatientRepository _repo;

        public PatientsController(IPatientRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        public async Task<IActionResult> GetPatients()
        {
            var patients = await _repo.GetPatients();
            return Ok(patients);
        }
        [HttpPost("add")]
        public async Task<IActionResult> AddPatient(Patient patient)
        {
            await _repo.AddPatient(patient);
            return StatusCode(201);
        }
    }
}
