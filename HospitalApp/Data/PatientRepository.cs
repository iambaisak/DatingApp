using HospitalApp.DataInterfaces;
using HospitalApp.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace HospitalApp.Data
{
    public class PatientRepository : IPatientRepository
    {
        private readonly DataContext _context;

        public PatientRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<IEnumerable<Patient>> GetPatients()
        {
            var patients = await _context.Patients.Include(x => x.DoctorPatient).ThenInclude(y => y.Doctor).ToListAsync();
            return patients;
        }

        public async Task<IEnumerable<Patient>> GetPatientDoctors(string name)
        {
            var doctors = await _context.Doctors.FirstOrDefaultAsync(u => u.Name == name);
            var patid = await _context.DoctorPatient.FirstOrDefaultAsync(y => y.DoctorId == doctors.DoctorId);
            var patients = _context.Patients.Where(z => z.PatientId == patid.PatientId);

            return await patients.ToListAsync();
        }
        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<Patient> AddPatient(Patient patient)
        {
            await _context.Patients.AddAsync(patient);
            await _context.SaveChangesAsync();

            return patient;
        }
       
    }
}
