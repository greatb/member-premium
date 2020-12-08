using Portal.Enums;
using Portal.Extensions;
using Portal.Models;
using System.Collections.Generic;
using System.Linq;

namespace Portal.Services
{
    public class OccupationService : IOccupationService
    {
        private IList<OccupationRatingMapping> occupations = new List<OccupationRatingMapping>();
        public OccupationService()
        {
            occupations.Add(new OccupationRatingMapping() { OccupationType = Occupation.Cleaner, OccupationRating = OccupationRating.LightManual });
            occupations.Add(new OccupationRatingMapping() { OccupationType = Occupation.Doctor, OccupationRating = OccupationRating.Professional });
            occupations.Add(new OccupationRatingMapping() { OccupationType = Occupation.Author, OccupationRating = OccupationRating.WhiteCollar });
            occupations.Add(new OccupationRatingMapping() { OccupationType = Occupation.Farmer, OccupationRating = OccupationRating.HeavyManual });
            occupations.Add(new OccupationRatingMapping() { OccupationType = Occupation.Mechanic, OccupationRating = OccupationRating.HeavyManual });
            occupations.Add(new OccupationRatingMapping() { OccupationType = Occupation.Florist, OccupationRating = OccupationRating.LightManual });
        }

        public IList<SelectOption> GetOccupation()
        {
            return Occupation.Author.ToDescripDictionary().ToOptionList();
        }

        public decimal GetFactor(Occupation occupation)
        {
            return occupations.Where(x => x.OccupationType == occupation).FirstOrDefault().OccupationRating;
        }
    }
}