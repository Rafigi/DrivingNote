namespace DrivingNote.Controllers
{
    using DrivingNote.Models;
    using DrivingNote.Utility;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Mvc;
    using SelectPdf;
    using System.Collections.Generic;

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
            // instantiate a html to pdf converter object
            HtmlToPdf converter = new HtmlToPdf();

            // set converter options
            converter.Options.PdfPageSize = PdfPageSize.A4;
            converter.Options.PdfPageOrientation = PdfPageOrientation.Portrait;
            converter.Options.MarginLeft = 10;
            converter.Options.MarginRight = 10;
            converter.Options.MarginTop = 20;
            converter.Options.MarginBottom = 20;

            var HTMLTabel = TemplateGenerator.GetHTMLString(FillInInfo(), _hostingEnvironment);

            // create a new pdf document converting an url
            PdfDocument doc = converter.ConvertHtmlString(HTMLTabel);

            return File(doc.Save(), "application/pdf");
        }

        private UserInfo FillInInfo()
        {
            List<HTMLTable> hTMLTable = new List<HTMLTable>();

            return new UserInfo()
            {
                Name = "Mads",
                LastName = "Illemann",
                AccountNumber = "1234567890",
                Email = "Mads@Illemann.dk",
                Sport = "Gymnastik",
                HTMLTable = hTMLTable
            };
        }
    }
}