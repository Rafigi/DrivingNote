namespace DrivingNote.Controllers
{
    using DrivingNote.Actions;
    using DrivingNote.Models;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;

    [Route("api/[controller]")]
    [ApiController]
    public class MailController : ControllerBase
    {
        public MailController()
        {
        }

        [HttpPost("SendMail")]
        public IActionResult SendMail([FromBody] UserInfo userInfo)
        {
            return Ok();
        }
    }
}