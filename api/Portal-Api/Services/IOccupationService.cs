using Portal.Models;
using System.Collections.Generic;

namespace Portal.Services
{
    public interface IOccupationService
    {
        IList<SelectOption> GetOccupation();
    }
}