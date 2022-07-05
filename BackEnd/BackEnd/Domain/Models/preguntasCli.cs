using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Domain.Models
{
    public class preguntasCli
    {
        public int Id { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string Descripcion { get; set; }

        public cuestionarioCliente CuestionarioCliente { get; set; }

        public List<respuestasCli> listRespuestas { get; set; }
    }

}
