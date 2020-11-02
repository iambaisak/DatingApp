using HospitalApp.DataInterfaces;
using HospitalApp.Dtos;
using HospitalApp.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace HospitalApp.Data
{
    public class AppointmentRepository : IAppointmentRepository
    {
        private readonly DataContext _context;

        public AppointmentRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<Appointments> AddAppointment(Appointments appointment)
        {
            if (appointment != null)
            {
               
                    var check = _context.DoctorPatient.Where(a => a.DoctorId == appointment.DoctorId);
                    var count = check.Count(b => b.PatientId == appointment.PatientId);
                    if (count == 0)
                    {
                        DoctorPatient dp = new DoctorPatient
                        {
                            DoctorId = appointment.DoctorId,
                            PatientId = appointment.PatientId
                        };
                        _context.DoctorPatient.Add(dp);
                        _context.SaveChanges();
                    }
                var app = _context.Appointments.Where(d => d.DoctorId == appointment.DoctorId);
                var ap = app.Where(e => e.Timeslot == appointment.Timeslot).First();
                ap.PatientId = appointment.PatientId;
                await _context.SaveChangesAsync();

            }
            return appointment;
        }

        public async Task<IEnumerable<DoctorAppointmentDto>> GetDoctorAppointments(int id)
        {
            //var appointments =await _context.Appointments.Where(z => z.DoctorId == id).ToListAsync();
            var result =  (from e in _context.Appointments
                          join mf in _context.Patients on e.PatientId equals mf.PatientId
                          where e.DoctorId == id

                          select new DoctorAppointmentDto
                          {
                              PatientName = mf.Name,
                              TimeSlot = e.Timeslot
                          });

            return await result.ToListAsync();
        }
    }
}
