using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Domain.Models
{
    public class respuestasCli
    {
        public int Id { get; set; }

        public int idRespuestaxPregunta { get; set; }

        [Required]
        [Column(TypeName = "varchar(150)")]
        public string Descripcion { get; set; }

        [Required]
        [Column(TypeName = "varchar(150)")]
        public string esCorrecta { get; set; }


        public preguntasCli preguntasCli { get; set; }
    }
}
