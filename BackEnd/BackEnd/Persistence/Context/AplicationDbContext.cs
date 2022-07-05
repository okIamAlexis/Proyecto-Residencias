using BackEnd.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Persistence.Context
{
    public class AplicationDbContext: DbContext
    {

        //Login
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<UsuarioEgr> UsuarioEgr { get; set; }
        public DbSet<UsuarioEmp>  UsuarioEmp { get; set; }


        //Tablas Cuestionarios
        public DbSet<Pregunta> Pregunta { get; set; }
        public DbSet<Cuestionario> Cuestionario { get; set; }
        public DbSet<Respuesta> Respuesta { get; set; }


        //Tablas cuestionario de todos los Cuestionarios
        public DbSet<cuestionarioFinal> cuestionarioFinal { get; set; }
        public DbSet<cuestionarioCliente> cuestionarioCliente { get; set; }
        public DbSet<preguntasCli> preguntasCli { get; set; }
        public DbSet<respuestasCli> respuestasCli { get; set; }


        //Tabla de Respuestas

        public DbSet<RespuestaCuestionario> RespuestaCuestionarios { get; set; }
        public DbSet<RespuestaCuestionarioDetalle> RespuestaCuestionarioDetalles { get; set; }


        public AplicationDbContext(DbContextOptions<AplicationDbContext> options): base(options)
        {

        }
    }
}
