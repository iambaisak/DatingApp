using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalApp.Dtos
{
    public class DoctorAppointmentDto
    {
        public string PatientName { get; set; }
        public int TimeSlot { get; set; }
    }
}
