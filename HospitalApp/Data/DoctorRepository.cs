using HospitalApp.DataInterfaces;
using HospitalApp.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Mapping;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace HospitalApp.Data
{
    public class DoctorRepository : IDoctorRepository
    {
        private readonly DataContext _context;

        public DoctorRepository(DataContext context)
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

        public async Task<IEnumerable<Doctor>> GetDepDoctors(string department)
        {
            var doctorsp= await _context.Doctors.Where(x => x.Department == department).ToListAsync();
            return doctorsp;
        }

        public async Task<Doctor> GetDoctor(int id)
        {
            var doctor = await _context.Doctors.FirstOrDefaultAsync(u => u.DoctorId == id);

            return doctor;
        }

        public async Task<IEnumerable<Doctor>> GetDoctors()
        {
            var doctors = await _context.Doctors.Include(x=>x.DoctorPatient).ThenInclude(y=>y.Patient).ToListAsync();
            return doctors;
        }

        

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<IEnumerable<Doctor>> Search(string name)
        {
            IQueryable<Doctor> query = _context.Doctors;
            if (!string.IsNullOrEmpty(name))
            {
                query = query.Where(e => e.Name.Contains(name));
            }

            return await query.ToListAsync();
        }
    }
}
