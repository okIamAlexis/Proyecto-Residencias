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
    public class CuestionarioRepository : ICuestionarioRepository
    {

        private readonly AplicationDbContext _context;


        public CuestionarioRepository(AplicationDbContext context)
        {
            _context = context;
        }

        public async Task CreateCuestionario(Cuestionario cuestionario)
        {
            _context.Add(cuestionario);
            await _context.SaveChangesAsync();

        }

        //Mandamos a llamar a todos los cuestionarios mientras esten activos
        public async Task<List<Cuestionario>> GetListCuestionarioByUser(int idUsuario)
        {
            var listCuestionario = await _context.Cuestionario.Where(x => x.Activo == 1
                                                                     && x.UsuarioId == idUsuario)
                                                                    .ToListAsync();
            return listCuestionario;

        }

        public async Task<Cuestionario> GetCuestionario(int idCuestionario)
        {
            var cuestionario = await _context.Cuestionario.Where(x => x.id == idCuestionario
                                                                 && x.Activo == 1)

                                                                  //Incluye todo las preguntas y respuestas
                                                                  .Include(x => x.listPreguntas)

                                                                  .ThenInclude(x => x.listRespuesta)

                                                                  .FirstOrDefaultAsync();
            return cuestionario;
        }

        //Buscar Cuestionario

        public async Task<Cuestionario> BuscarCuestionario(int idCuestionario, int idUsuario)
        {

            var cuestionario = await _context.Cuestionario.Where(x => x.id == idCuestionario
                                                                 && x.Activo == 1 && x.UsuarioId == idUsuario).FirstOrDefaultAsync();
            return cuestionario;
        }

        //Eliminar Cuestionario

        public async Task EliminarCuestionario(Cuestionario cuestionario)
        {
            cuestionario.Activo = 0;
            _context.Entry(cuestionario).State = EntityState.Modified;
            await _context.SaveChangesAsync();

        }


        //Lista de Cuestionarios
        public async Task<List<Cuestionario>> GetListCuestionarios()
        {
            var listCuestionarios = await _context.Cuestionario.Where(x => x.Activo == 1)
                                                                      .Select(o => new Cuestionario
                                                                      {
                                                                          id = o.id,
                                                                          Nombre = o.Nombre,
                                                                          Descripcion = o.Descripcion,
                                                                          FechaCreacion = o.FechaCreacion,
                                                                          Usuario = new Usuario { NombreUsuario = o.Usuario.NombreUsuario },                                                                          
                                                                          
                                                                      })                      
                                                                      
                                                                      .ToListAsync();

            return listCuestionarios;
        }






        public async Task<List<Cuestionario>> AllCuestionarios()
        {
            var allCuestionarios = await _context.Cuestionario.Include(o => o.listPreguntas)
                                                                .ThenInclude(o => o.listRespuesta).
                                                                    Where(x => x.Activo == 1)
                                                                      .Select(o => new Cuestionario
                                                                      {
                                                                          id = o.id,
                                                                          Nombre = o.Nombre,
                                                                          Descripcion = o.Descripcion,
                                                                          FechaCreacion = o.FechaCreacion,
                                                                          Usuario = new Usuario { NombreUsuario = o.Usuario.NombreUsuario },
                                                                          listPreguntas = o.listPreguntas


                                                                      })

                                                                      .ToListAsync();

            return allCuestionarios;
        }


    }
}