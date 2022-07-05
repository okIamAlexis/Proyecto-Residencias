using BackEnd.Domain.IServices;
using BackEnd.Domain.Models;
using BackEnd.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginEgrController : ControllerBase
    {
        private readonly ILoginEgrService _loginEgrService;
        private readonly IConfiguration _config;
        public LoginEgrController(ILoginEgrService loginEgrService, IConfiguration config)
        {
            _loginEgrService = loginEgrService;
            _config = config;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] UsuarioEgr usuarioEgr)
        {
            try
            {
                usuarioEgr.PasswordControl = Encriptar.EncriptarPassword(usuarioEgr.PasswordControl);
                var user = await _loginEgrService.ValidateUser(usuarioEgr);
                if(user == null)
                {
                    return BadRequest(new { message = "Usuario o contraseña invalidos" });
                }
                string tokenString = JwtConfigurator.GetTokenEgr(user, _config);
                return Ok(new { tokenEgr = tokenString });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

    }
}
