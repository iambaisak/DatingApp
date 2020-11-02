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
    public class AppointmentsController : ControllerBase
    {
        private readonly IAppointmentRepository _repo;

        public AppointmentsController(IAppointmentRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        public async Task<IActionResult> AddAppointment(Appointments appointment)
        {
            await _repo.AddAppointment(appointment);
            return StatusCode(201);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPatientDoctors(int id)
        {
            var appointments = await _repo.GetDoctorAppointments(id);
            return Ok(appointments);
        }
    }
}
