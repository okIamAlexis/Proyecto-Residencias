using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Domain.Models
{
    public class UsuarioEmp
    {
        
        public int Id { get; set; }
        
        [Required]
        [Column(TypeName ="varchar(20)")]
        public string EmpUsuario { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string passwordControl { get; set; }

        
        [Column(TypeName = "varchar(50)")]
        public string nombre { get; set; }

        
        [Column(TypeName = "varchar(50)")]
        public string emp_apaterno { get; set; }

        
        [Column(TypeName = "varchar(50)")]
        public string emp_amaterno { get; set; }

        
        [Column(TypeName = "varchar(100)")]
        public string emp_correo { get; set; }
    }
}
