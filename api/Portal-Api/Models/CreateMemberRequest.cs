using System;

namespace Portal.Models
{
    public class CreateMemberRequest
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int OccupationId { get; set; }
        public decimal DeathSumInsured { get; set; }
    }
}
