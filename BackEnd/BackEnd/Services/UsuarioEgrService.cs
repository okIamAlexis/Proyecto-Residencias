using BackEnd.Domain.IRepositories;
using BackEnd.Domain.IServices;
using BackEnd.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Services
{
    public class UsuarioEgrService: IUsuarioEgrService
    {
        private readonly IUsuarioEgrRepository _usuarioRepository;
        public UsuarioEgrService(IUsuarioEgrRepository usuarioEgrRepository)
        {
            _usuarioRepository = usuarioEgrRepository;
        }

        public async Task SaveUser(UsuarioEgr usuarioEgr)
        {
            await _usuarioRepository.SaveUser(usuarioEgr);
        }

        public async Task<bool> ValidateExistence(UsuarioEgr usuarioEgr)
        {
            return await _usuarioRepository.ValidateExistence(usuarioEgr);
        }
    }
}
