using HospitalApp.Dtos;
using HospitalApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalApp.DataInterfaces
{
    public interface IAppointmentRepository
    {
        Task<Appointments> AddAppointment(Appointments appointment);
        Task<IEnumerable<DoctorAppointmentDto>> GetDoctorAppointments(int id);
    }
}
