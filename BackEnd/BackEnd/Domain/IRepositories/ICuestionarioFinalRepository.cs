using BackEnd.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Domain.IRepositories
{
    public interface ICuestionarioFinalRepository
    {
        //Parte del Cliente
        Task CreateCuestionario(cuestionarioFinal CuestionarioFinal);

        Task<List<cuestionarioFinal>> GetListCuestionarioByUser(int idUsuario);

        Task<cuestionarioFinal> GetCuestionarioFinal(int idCuestionarioFinal);

        Task<cuestionarioFinal> BuscarCuestionario(int idCuestioanrioFinal, int idUsuario);

        Task EliminarCuestionario(cuestionarioFinal CuestionarioFinal);

        Task<List<cuestionarioFinal>> GetListCuestionarios();

    }
}
