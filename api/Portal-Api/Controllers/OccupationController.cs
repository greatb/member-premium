using Microsoft.AspNetCore.Mvc;
using Portal.Models;
using Portal.Services;
using System.Collections.Generic;

namespace Portal.Controllers
{
    [ApiController]
    [Route("api/occupations")]
    public class OccupationController : ControllerBase
    {
        private readonly IOccupationService _occupationService;

        public OccupationController(IOccupationService occupationService)
        {
            _occupationService = occupationService;
        }

        [HttpGet("")]
        public IList<SelectOption> GetOccupations()
        {
            return _occupationService.GetOccupation();
        }
    }
}
