namespace DrivingNote.Controllers
{
    using DrivingNote.Actions;
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

        IActionResult SendMail(string drivingNote)
        {
            PDFFactory PDFFactory = new PDFFactory(_hostingEnvironment);
           // var pdf = PDFFactory.Create(drivingNote);
            return Ok();
        }


    }
}