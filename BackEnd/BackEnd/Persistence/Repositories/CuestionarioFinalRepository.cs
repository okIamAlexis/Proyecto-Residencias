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
    public class CuestionarioFinalRepository : ICuestionarioFinalRepository
    {
        private readonly AplicationDbContext _context;
        public CuestionarioFinalRepository(AplicationDbContext context)
        {
            _context = context;

        }

        public async Task CreateCuestionario(cuestionarioFinal cuestionarioFinal)
        {
            _context.Add(cuestionarioFinal);
            await _context.SaveChangesAsync();
        }

        public async Task<List<cuestionarioFinal>> GetListCuestionarioByUser(int idUsuario)
        {
            var listCuestionarioFinal = await _context.cuestionarioFinal.Where(x => x.Activo == 1 && x.usuarioId == idUsuario).ToListAsync();

            return listCuestionarioFinal;
        }

        public async Task<cuestionarioFinal> GetCuestionarioFinal(int idCuestionarioFinal)
        {
            var cuestionarioFinal = await _context.cuestionarioFinal.Where(x => x.id == idCuestionarioFinal && x.Activo == 1)
                                                                            .Include(x => x.listCuestionarios)
                                                                            .ThenInclude(x => x.listPreguntas)
                                                                            .ThenInclude(x => x.listRespuestas)
                                                
                                                                        .FirstOrDefaultAsync();
            return cuestionarioFinal;
        }

        public async Task<cuestionarioFinal> BuscarCuestionario(int idCuestionarioFinal, int idUsuario)
        {
            var cuestionarioFinal = await _context.cuestionarioFinal.Where(x => x.id == idCuestionarioFinal && x.Activo == 1 && x.usuarioId == idUsuario).FirstOrDefaultAsync();

            return cuestionarioFinal;
        }

        public async Task EliminarCuestionario(cuestionarioFinal CuestionarioFinal)
        {
            CuestionarioFinal.Activo = 0;
            _context.Entry(CuestionarioFinal).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task<List<cuestionarioFinal>> GetListCuestionarios()
        {
            var listCuestionarios = await _context.cuestionarioFinal.Where(x => x.Activo == 1)
                                                                    .Select(o => new cuestionarioFinal 
                                                                    { 
                                                                        id = o.id,
                                                                        Descripcion = o.Descripcion,
                                                                        FechaCreacion= o.FechaCreacion,
                                                                        Usuario = new Usuario { NombreUsuario = o.Usuario.NombreUsuario}
                                                                    })
                                                                    .ToListAsync();
            return listCuestionarios;
        }

    }
}
