namespace Portal.Enums
{
    public class OccupationRating
    {
        public const decimal Professional = 1.00m;
        public const decimal WhiteCollar = 1.25m;
        public const decimal LightManual = 1.50m;
        public const decimal HeavyManual = 1.75m;
    }

    public class OccupationRatingMapping
    {
        public Occupation OccupationType { get; set; }
        public decimal OccupationRating { get; set; }
    }

    public enum Occupation
    {
        Cleaner = 1,
        Doctor = 2,
        Author = 3,
        Farmer = 4,
        Mechanic = 5,
        Florist = 6
    }
}