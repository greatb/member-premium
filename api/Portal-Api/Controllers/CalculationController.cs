using Microsoft.AspNetCore.Mvc;
using Portal.Services;

namespace Portal.Controllers
{
    [ApiController]
    [Route("api/calculations")]
    public class CalculationController
    {
        private readonly ICalculationService _calculationService;
        public CalculationController(ICalculationService calculationService)
        {
            _calculationService = calculationService;
        }

        [HttpGet("premium")]
        public decimal CalculatePremium(int occupationId, decimal coverAmount, int age)
        {
            return _calculationService.CalculatePremium(occupationId, coverAmount, age);
        }
    }
}
