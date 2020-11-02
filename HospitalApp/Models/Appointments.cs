using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Policy;

namespace HospitalApp.Models
{
    public class Appointments
    {
        [Key]
        public int Appid { get; set; }
        public int DoctorId { get; set; }
        public int Timeslot { get; set; }
        public int PatientId { get; set; }

    }
}
