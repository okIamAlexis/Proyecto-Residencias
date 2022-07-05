using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Domain.Models
{
    public class Respuesta
    {
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public String Descripcion { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public int EsCorrecta { get; set; }

        public int PreguntaId { get; set; }
        public Pregunta Pregunta { get; set; }
    }
}
