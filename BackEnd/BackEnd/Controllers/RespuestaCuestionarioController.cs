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
    public class RespuestaCuestionarioController : ControllerBase
    {
        private readonly IRespuestaCuestiorioService _respuestaCuestiorioService;
        private readonly ICuestionarioService _cuestionarioService;
        public RespuestaCuestionarioController(IRespuestaCuestiorioService respuestaCuestiorioService, ICuestionarioService cuestionarioService)
        {
            _respuestaCuestiorioService = respuestaCuestiorioService;
            _cuestionarioService = cuestionarioService;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] RespuestaCuestionario respuestaCuestionario)
        {
            try
            {
                await _respuestaCuestiorioService.SaveRespuestaCuestionario(respuestaCuestionario);
                return Ok();

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);

            }
        }

        [HttpGet("{idCuestionario}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Get(int idCuestionario)
        {
            try
            {
                var identity = HttpContext.User.Identity as ClaimsIdentity;
                int IdUsuario = JwtConfigurator.GetTokenIdUsuario(identity);

                var listRespuestasCuestionario = await _respuestaCuestiorioService.ListRespuestaCuestionario(idCuestionario, IdUsuario);

                if(listRespuestasCuestionario == null)
                {
                    return BadRequest(new { message = "Error al buscar el listado de respuestas" });
                }
                
                return Ok(listRespuestasCuestionario);
                
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }


        [HttpDelete("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var identity = HttpContext.User.Identity as ClaimsIdentity;
                int IdUsuario = JwtConfigurator.GetTokenIdUsuario(identity);

                var respuestaCuestionario = await _respuestaCuestiorioService.BuscarRespuestaCuestionario(id, IdUsuario);
                if(respuestaCuestionario == null)
                {
                    return BadRequest(new { message = "Error al buscar la respuesta al cuestionario" });
                }

                await _respuestaCuestiorioService.EliminarRespuestaCuestionario(respuestaCuestionario);
                return Ok(new { message = "La respuesta del cuestionario fue eliminada cone exito!" });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }
        [Route("GetCuestionarioByIdRespuesta/{idRespuesta}")]
        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> GetCuestionarioByIdRespuesta(int idRespuesta)
        {
            try
            {
                //Para obtener el idCuestionario dado un idRespuesta
                int idCuestionario = await _respuestaCuestiorioService.GetIdCuestionarioByIdRespuesta(idRespuesta);

                //Buscaremos el cuestionario
                var cuestionario = _cuestionarioService.GetCuestionario(idCuestionario);

                //Buscaremos las respuestas seleccionadas un idRespuestas

                var listRespuestas = await _respuestaCuestiorioService.GetListRespuestas(idRespuesta);
                return Ok(new { cuestionario = cuestionario, respuestas = listRespuestas });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        } 

    }

}
