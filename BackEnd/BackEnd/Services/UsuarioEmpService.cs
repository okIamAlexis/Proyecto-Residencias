using BackEnd.Domain.IRepositories;
using BackEnd.Domain.IServices;
using BackEnd.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Services
{
    public class UsuarioEmpService : IUsuarioEmpService
    {
        private readonly IUsuarioEmpRepository _usuarioRepository;
        public UsuarioEmpService(IUsuarioEmpRepository usuarioEmpRepository)
        {
            _usuarioRepository = usuarioEmpRepository;
        }

        public async Task SaveUser(UsuarioEmp usuarioEmp)
        {
            await _usuarioRepository.SaveUser(usuarioEmp);
        }

        public async Task<bool> ValidateExistence(UsuarioEmp usuarioEmp)
        {
            return await _usuarioRepository.ValidateExistence(usuarioEmp);
        }
    }

}
