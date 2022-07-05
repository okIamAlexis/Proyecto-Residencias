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
    public class LoginEmpRepository: ILoginEmpRepository
    {
        private readonly AplicationDbContext _context;
        public LoginEmpRepository(AplicationDbContext context)
        {
            _context = context;
        }

        public async Task<UsuarioEmp> ValidateUser(UsuarioEmp usuarioEmp)
        {
            var user = await _context.UsuarioEmp.Where(x => x.EmpUsuario == usuarioEmp.EmpUsuario
                                                        && x.passwordControl == usuarioEmp.passwordControl).FirstOrDefaultAsync();

            return user;
        }
    }
}

