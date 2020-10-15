using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalApp.Models
{
    public class Patient
    {
        public int PatientId { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public string City { get; set; }
        [ForeignKey("PatientId")]
        public virtual ICollection<DoctorPatient> DoctorPatient { get; set; }

    }
}
