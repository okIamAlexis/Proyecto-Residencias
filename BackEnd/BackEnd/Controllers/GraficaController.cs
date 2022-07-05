using BackEnd.Domain.IServices;
using BackEnd.Utils;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GraficaController : ControllerBase
    {

        private readonly IRespuestaCuestiorioService _respuestaCuestiorioService;
        private readonly ICuestionarioService _cuestionarioService;
        public GraficaController(IRespuestaCuestiorioService respuestaCuestiorioService, ICuestionarioService cuestionarioService)
        {
            _respuestaCuestiorioService = respuestaCuestiorioService;
            _cuestionarioService = cuestionarioService;
        }

        
        [HttpGet("{idCuestionario}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Get(int idCuestionario)
        {
            try
            {
                var identity = HttpContext.User.Identity as ClaimsIdentity;
                int IdUsuario = JwtConfigurator.GetTokenIdUsuario(identity);

                var listRespuestasCuestionario = await _respuestaCuestiorioService.Respuestas(idCuestionario, IdUsuario);
                List<float> Resultados = new List<float>();
                List<float> Resultado = new List<float>();

                listRespuestasCuestionario.ForEach((element) => Resultados.Add(element.Resultado));

                var Total = Resultados.Count;

                if (listRespuestasCuestionario == null)
                {
                    return BadRequest(new { message = "Error al buscar el listado de respuestas" });
                }

                foreach (float result in Resultados)
                {
                    if (result > 40)
                    {
                        Resultado.Add(result);

                    }
                }

                var check = Resultado.Count;


                return Ok(check);

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }

    }
}
