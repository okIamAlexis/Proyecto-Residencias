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
//using Random = BackEnd.Utils.Random;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CuestionarioController : ControllerBase
    {
        private readonly ICuestionarioService _cuestioonarioService;
        public CuestionarioController(ICuestionarioService cuestionarioService)
        {
            _cuestioonarioService = cuestionarioService;
        }


        //Guardar Cuestionario

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Post([FromBody] Cuestionario cuestionario)
        {

            try
            {


                var identity = HttpContext.User.Identity as ClaimsIdentity;
                int IdUsuario = JwtConfigurator.GetTokenIdUsuario(identity);
                
                cuestionario.UsuarioId = IdUsuario;
                cuestionario.Activo = 1;
                cuestionario.FechaCreacion = DateTime.Now;

                cuestionario.numPreguntas = cuestionario.listPreguntas.Count;

        
                await _cuestioonarioService.CreateCuestionario(cuestionario);

                return Ok(new { message = "Se agrego el cuestionario exitosamnete" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }
        }




        [Route("GetListCuestionarioByUser")]
        [HttpGet]

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> GetListCuestionarioByUser()
        {

            try
            {

                var identity = HttpContext.User.Identity as ClaimsIdentity;

                int IdUsuario = JwtConfigurator.GetTokenIdUsuario(identity);



                var listCuestionario = await _cuestioonarioService.GetListCuestionarioByUser(IdUsuario);

                return Ok(listCuestionario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }
        }


        //Lista de Preguntas y Lista de Respuestas


        [HttpGet("{idCuestionario}")]
        public async Task<IActionResult> Get(int idCuestionario)
        {

            try
            {
                var cuestionario = await _cuestioonarioService.GetCuestionario(idCuestionario);

                return Ok(cuestionario);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }


        }



        //Borrar Cuestionario

        [HttpDelete("{idCuestionario}")]

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Delete(int idCuestionario)
        {
            try
            {


                var identity = HttpContext.User.Identity as ClaimsIdentity;

                int IdUsuario = JwtConfigurator.GetTokenIdUsuario(identity);

                var cuestionario = await _cuestioonarioService.BuscarCuestionario(idCuestionario, IdUsuario);


                if (cuestionario == null)
                {
                    return BadRequest(new { message = "No se encontro ningun cuestionario" });
                }

                await _cuestioonarioService.EliminarCuestionario(cuestionario);
                return Ok(new { message = "El cuestionario fue eliminado con exito" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        //Lista de todos los cuestionarios

        [Route("GetListCuestionarios")]
        [HttpGet]
        public async Task<IActionResult> GetListCuestionarios()
        {

            try
            {

                var listCuestionarios = await _cuestioonarioService.GetListCuestionarios();
                return Ok(listCuestionarios);

            }
            catch (Exception ex)

            {
                return BadRequest(ex.Message);

            }
        }

        //Mostrar todos los cuestionarios y preguntas y Respuestas
        [Route("AllCuestionarios")]
        [HttpGet]
        public async Task<IActionResult> AllCuestionarios()
        {
            try
            {

                //var rand = new Random();
                //Console.WriteLine("five random integers between 0 and 100:");
                //for (int ctr = 0; ctr <= 4; ctr++)
                //    Console.Write("{0,8:n0}", rand.Next(11));
                //Console.WriteLine();

                var listCuestionarios = await _cuestioonarioService.AllCuestionarios();
                return Ok(listCuestionarios);

            }
            catch (Exception ex)

            {
                return BadRequest(ex.Message);

            }
        }
    }
}

