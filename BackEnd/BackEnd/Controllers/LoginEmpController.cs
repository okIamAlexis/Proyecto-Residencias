using BackEnd.Domain.IServices;
using BackEnd.Domain.Models;
using BackEnd.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginEmpController : ControllerBase
    {
        private readonly ILoginEmpService _loginEmpService;
        public LoginEmpController(ILoginEmpService loginEmpService)
        {
            _loginEmpService = loginEmpService;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] UsuarioEmp usuarioEmp)
        {
            try
            {
                usuarioEmp.passwordControl = Encriptar.EncriptarPassword(usuarioEmp.passwordControl);
                var user = await _loginEmpService.ValidateUser(usuarioEmp);
                if (user == null)
                {
                    return BadRequest(new { message = "Usuario o contraseña invalidos" });
                }

                return Ok(new { usuarioEmp = user.EmpUsuario /*+ " " +user.nombre + " " + user.egr_apaterno + " " + user.egr_amaterno*/});
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}
