namespace Portal.Services
{
    public interface ICalculationService
    {
        decimal CalculatePremium(int occupationId, decimal coverAmount, int age);
    }
}