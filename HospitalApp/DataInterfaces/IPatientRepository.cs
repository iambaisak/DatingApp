using HospitalApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalApp.DataInterfaces
{
    public interface IPatientRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<Patient>> GetPatients();
        Task<IEnumerable<Patient>> GetPatientDoctors(string name);
        Task<Patient> AddPatient(Patient patient);
    }
}
