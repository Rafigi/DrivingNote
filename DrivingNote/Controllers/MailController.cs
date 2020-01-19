namespace DrivingNote.Controllers
{
    using DrivingNote.Actions;
    using DrivingNote.Models;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Mvc;

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
        public IActionResult SendMail([FromBody] UserInfo userInfo)
        {
            PDFFactory PDFFactory = new PDFFactory(_hostingEnvironment);
           // var pdf = PDFFactory.Create(drivingNote);
            return Ok();
        }


    }
}