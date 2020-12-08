using System;

namespace Portal.Models
{
    public class MemberViewResponse
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int OccupationId { get; set; }
        public decimal DeathSumInsured { get; set; }
        public decimal DeathPremium { get; set; }
    }
}
