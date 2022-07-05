﻿using BackEnd.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Domain.IServices
{
    public interface IRespuestaCuestiorioService
    {
        Task SaveRespuestaCuestionario(RespuestaCuestionario respuestaCuestionario);
        Task<List<RespuestaCuestionario>> ListRespuestaCuestionario(int idCuestionario, int idUsuario);
        Task<List<RespuestaCuestionario>> Respuestas(int idCuestionario, int idUsuario);

        Task<RespuestaCuestionario> BuscarRespuestaCuestionario(int idRtaCuestionario, int idUsuario);

        Task EliminarRespuestaCuestionario(RespuestaCuestionario respuestaCuestionario);
        Task<int> GetIdCuestionarioByIdRespuesta(int idRespuestaCuestionario);

        Task<List<RespuestaCuestionarioDetalle>> GetListRespuestas(int idRespuestaCuestionario);
    }
}
