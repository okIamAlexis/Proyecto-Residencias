using BackEnd.Domain.IServices;
using BackEnd.Domain.Models;
using BackEnd.Utils;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CuestionarioFinalController : ControllerBase
    {
        private readonly ICuestionarioFinalService _cuestionarioFinalService;
        public CuestionarioFinalController(ICuestionarioFinalService cuestionarioFinalService)
        {
            _cuestionarioFinalService = cuestionarioFinalService;
        }
        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Post([FromBody]cuestionarioFinal CuestionarioFinal) 
        {
            try
            {
                var identity = HttpContext.User.Identity as ClaimsIdentity;
                int IdUsuario = JwtConfigurator.GetTokenIdUsuario(identity);

                CuestionarioFinal.usuarioId = IdUsuario;
                CuestionarioFinal.Activo = 1;
                CuestionarioFinal.FechaCreacion = DateTime.Now;
                
                await _cuestionarioFinalService.CreateCuestionario(CuestionarioFinal);

                return Ok(new { message = "Se agrego el cuestionario exitosamente" });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.InnerException.Message);
                return BadRequest(ex.Message);
            }
        }

        [Route("GetListCuestionarioFinalByUser")]
        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> GetListCuestionarioFinalByUser()
        {
            try
            {
                var identity = HttpContext.User.Identity as ClaimsIdentity;
                int idUsuario = JwtConfigurator.GetTokenIdUsuario(identity);
                var listCuestionario = await _cuestionarioFinalService.GetListCuestionarioByUser(idUsuario);
                return Ok(listCuestionario);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{idCuestionarioFinal}")]
        public async Task<IActionResult> Get(int idCuestionarioFinal)
        {
            try
            {
                var custionario = await _cuestionarioFinalService.GetCuestionarioFinal(idCuestionarioFinal);
                return Ok(custionario);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{idCuestionarioFinal}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Delete(int idCuestionarioFinal)
        {
            try
            {
                var identity = HttpContext.User.Identity as ClaimsIdentity;
                int idUsuario = JwtConfigurator.GetTokenIdUsuario(identity);

                var cuestionarioFinal = await _cuestionarioFinalService.BuscarCuestionario(idCuestionarioFinal, idUsuario);
                if(cuestionarioFinal == null)
                {
                    return BadRequest(new { message = "No se encontro ningun cuestionario" });
                }
                await _cuestionarioFinalService.EliminarCuestionario(cuestionarioFinal);
                return Ok(new { message = "El cuestionario fue eliminado con exito!" });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [Route("GetAllListCuestioarios")]
        [HttpGet]
        public async Task<IActionResult> GetListCuestionarios()
        {

            try
            {
                var listCuestionario = await _cuestionarioFinalService.GetListCuestionarios();
                return Ok(listCuestionario);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}
