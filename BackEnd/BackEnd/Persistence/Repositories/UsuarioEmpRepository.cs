using BackEnd.Domain.IRepositories;
using BackEnd.Domain.Models;
using BackEnd.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Persistence.Repositories
{
    public class UsuarioEmpRepository : IUsuarioEmpRepository
    {
        private readonly AplicationDbContext _context;
        public UsuarioEmpRepository(AplicationDbContext context)
        {
            _context = context;
        }

        public async Task SaveUser(UsuarioEmp usuarioEmp)
        {
            _context.Add(usuarioEmp);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> ValidateExistence(UsuarioEmp usuarioEmp)
        {
            var validateExistence = await _context.UsuarioEmp.AnyAsync(x => x.EmpUsuario == usuarioEmp.EmpUsuario);
            return validateExistence;
        }
    }
    
    }
