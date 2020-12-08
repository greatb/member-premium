using Portal.Enums;

namespace Portal.Services
{
    public class CalculationService : ICalculationService
    {
        private readonly IOccupationService _occupationService;
        public CalculationService(IOccupationService occupationService)
        {
            _occupationService = occupationService;
        }

        public decimal CalculatePremium(int occupationId, decimal coverAmount, int age)
        {
            var occupationFactor = _occupationService.GetFactor((Occupation)occupationId);

            var deathPremium = (coverAmount * occupationFactor * age) / 1000 * 12;

            return deathPremium;
        }
    }
}
