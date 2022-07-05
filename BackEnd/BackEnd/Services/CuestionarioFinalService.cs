using BackEnd.Domain.IRepositories;
using BackEnd.Domain.IServices;
using BackEnd.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Services
{
    public class CuestionarioFinalService: ICuestionarioFinalService
    {
        private readonly ICuestionarioFinalRepository _cuestionarioFinalRepository;
        public CuestionarioFinalService(ICuestionarioFinalRepository cuestionarioFinalRepository)
        {
            _cuestionarioFinalRepository = cuestionarioFinalRepository;
        }

        public async Task CreateCuestionario(cuestionarioFinal CuestionarioFinal)
        {
            await _cuestionarioFinalRepository.CreateCuestionario(CuestionarioFinal);
        }

        public async Task<List<cuestionarioFinal>> GetListCuestionarioByUser(int idUsuario)
        {
            return await _cuestionarioFinalRepository.GetListCuestionarioByUser(idUsuario);
        }

        public async Task<cuestionarioFinal> GetCuestionarioFinal(int idCuestionarioFinal)
        {
            return await _cuestionarioFinalRepository.GetCuestionarioFinal(idCuestionarioFinal);
        }

        public async Task<cuestionarioFinal> BuscarCuestionario(int idCuestionarioFinal, int idUsuario)
        {
            return await _cuestionarioFinalRepository.BuscarCuestionario(idCuestionarioFinal, idUsuario);
        }

        public async Task EliminarCuestionario(cuestionarioFinal CuestionarioFinal)
        {
           await _cuestionarioFinalRepository.EliminarCuestionario(CuestionarioFinal);
        }

        public async Task<List<cuestionarioFinal>> GetListCuestionarios()
        {
            return await _cuestionarioFinalRepository.GetListCuestionarios();
        }
    }
}
