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
    public class LoginEgrRepository: ILoginEgrRepository
    {
        private readonly AplicationDbContext _context;
        public LoginEgrRepository(AplicationDbContext context)
        {
            _context = context;
        }

        public async Task<UsuarioEgr> ValidateUser(UsuarioEgr usuarioEgr)
        {
            var user = await _context.UsuarioEgr.Where(x => x.EgrUsuario == usuarioEgr.EgrUsuario 
                                                        && x.PasswordControl == usuarioEgr.PasswordControl).FirstOrDefaultAsync();

            return user;
        }
    }
}
