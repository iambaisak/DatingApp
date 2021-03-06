﻿using HospitalApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalApp.DataInterfaces
{
    public interface IDoctorRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<Doctor>> GetDoctors();
        Task<IEnumerable<Doctor>> Search(string name);
        Task<Doctor> GetDoctor(int id);
        Task<IEnumerable<Doctor>> GetDepDoctors(string department);
        

    }
}
