using BackEnd.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Domain.IRepositories
{
    public interface IUsuarioEmpRepository
    {
        //Salve Usuario Egresado
        Task SaveUser(UsuarioEmp usuarioEmp);

        Task<bool> ValidateExistence(UsuarioEmp usuarioEmp);
    }
}
