using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Domain.Models
{
    public class cuestionarioCliente
    {
    
        public int Id { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string Nombre { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string Descripcion { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string Atributo { get; set; }

        public DateTime FechaCreacion { get; set; }

        
        public cuestionarioFinal cuestionarioFinal { get; set; }

        public List<preguntasCli> listPreguntas { get; set; }
    }
}
