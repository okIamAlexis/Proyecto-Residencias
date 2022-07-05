using BackEnd.Domain.IRepositories;
using BackEnd.Domain.IServices;
using BackEnd.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Services
{
    public class LoginEmpService : ILoginEmpService
    {
        private readonly ILoginEmpRepository _loginEmpRepository;
        public LoginEmpService(ILoginEmpRepository loginEmpRepository)
        {
            _loginEmpRepository = loginEmpRepository;

        }

        public async Task<UsuarioEmp> ValidateUser(UsuarioEmp usuarioEmp)
        {
            return await _loginEmpRepository.ValidateUser(usuarioEmp);
        }
    }

}
