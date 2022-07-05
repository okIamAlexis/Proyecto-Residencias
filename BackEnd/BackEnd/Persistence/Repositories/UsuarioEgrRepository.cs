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
    public class UsuarioEgrRepository : IUsuarioEgrRepository
    {
        private readonly AplicationDbContext _context;
        public UsuarioEgrRepository(AplicationDbContext context)
        {
            _context = context;
        }

        public async Task SaveUser(UsuarioEgr usuarioEgr)
        {
            _context.Add(usuarioEgr);
            await _context.SaveChangesAsync();
        }
        
        public async Task<bool> ValidateExistence(UsuarioEgr usuarioEgr)
        {
            var validateExistence = await _context.UsuarioEgr.AnyAsync(x => x.EgrUsuario == usuarioEgr.EgrUsuario);
            return validateExistence;
        }
    }
}
