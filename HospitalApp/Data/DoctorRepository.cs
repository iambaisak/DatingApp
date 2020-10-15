using HospitalApp.DataInterfaces;
using HospitalApp.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<Doctor> GetDoctor(int id)
        {
            var doctor = await _context.Doctors.FirstOrDefaultAsync(u => u.DoctorId == id);

            return doctor;
        }

        public async Task<IEnumerable<Doctor>> GetDoctors()
        {
            var doctors = await _context.Doctors.ToListAsync();
            return doctors;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
