using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Domain.Models
{
    public class UsuarioEgr
    {
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(20)")]
        public string EgrUsuario { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string PasswordControl { get; set; }

        
        [Column(TypeName = "varchar(50)")]
        public string nombre { get; set; }

        
        [Column(TypeName = "varchar(50)")]
        public string egr_apaterno { get; set; }

        
        [Column(TypeName = "varchar(50)")]
        public string egr_amaterno { get; set; }

       
        [Column(TypeName = "varchar(100)")]
        public string egr_correo { get; set; }


    }
}
