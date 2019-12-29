namespace DrivingNote.Controllers
{
    using DrivingNote.Models;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    [ApiController]
    public class MailController : ControllerBase
    {
        public MailController()
        {

        }



        IActionResult SendMail(DrivingNote drivingNote)
        {

            return Ok();
        }


    }
}