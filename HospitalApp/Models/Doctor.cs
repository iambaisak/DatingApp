using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalApp.Models
{
    public class Doctor
    {
        public int DoctorId { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public string City { get; set; }
        public string Department { get; set; }
        public string PhotoUrl { get; set; }
        [ForeignKey("DoctorId")]
        public virtual ICollection<DoctorPatient> DoctorPatient { get; set; }
    }
}
