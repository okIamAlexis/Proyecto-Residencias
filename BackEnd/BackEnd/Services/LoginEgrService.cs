using BackEnd.Domain.IRepositories;
using BackEnd.Domain.IServices;
using BackEnd.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Services
{
    public class LoginEgrService: ILoginEgrService
    {
        private readonly ILoginEgrRepository _loginEgrRepository;
        public LoginEgrService(ILoginEgrRepository loginEgrRepository)
        {
            _loginEgrRepository = loginEgrRepository;

        }

        public async Task<UsuarioEgr> ValidateUser(UsuarioEgr usuarioEgr)
        {
            return await _loginEgrRepository.ValidateUser(usuarioEgr);
        }
    }
}
