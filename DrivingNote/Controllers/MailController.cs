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
        private readonly IHostingEnvironment _hostingEnvironment;

        public MailController(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpPost("SendMail")]
        public async Task<IActionResult> SendMail([FromBody] UserInfo userInfo)
        {
            PDFFactory PDFFactory = new PDFFactory(_hostingEnvironment);
            var pdf = PDFFactory.Create(userInfo);

            if (userInfo != null)
            {
                return Ok(new { message = "Created and Sent" });
            }
            else
            {
                return BadRequest(new { message = "Something Went Wrong!" });
            }

        }


    }
}