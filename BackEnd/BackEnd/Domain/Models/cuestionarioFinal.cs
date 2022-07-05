using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Domain.Models
{
    public class cuestionarioFinal
    {
        
        public int id { get; set; }

        [Required]
        [Column(TypeName = "varchar(150)")]
        public string Descripcion { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int Activo { get; set; }

        public int usuarioId { get; set; }
        public Usuario Usuario { get; set; }

        public List<cuestionarioCliente> listCuestionarios { get; set; }
    }
}
