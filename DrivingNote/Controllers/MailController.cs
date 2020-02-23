namespace DrivingNote.Controllers
{
    using DrivingNote.Factory;
    using DrivingNote.Models;
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Mvc;
    using SelectPdf;

    [EnableCors("CORS")]
    [Route("api/[controller]")]
    [ApiController]
    public class MailController : ControllerBase
    {
        private readonly ITemplateGeneratorFactory _templateGeneratorFactory;
        private readonly IMailFactory _mailFactory;

        public MailController(ITemplateGeneratorFactory templateGeneratorFactory, IMailFactory mailFactory)
        {
            _templateGeneratorFactory = templateGeneratorFactory;
            _mailFactory = mailFactory;
        }

        [HttpPost("SendMail")]
        public IActionResult SendMail([FromBody] UserInformation userInformation)
        {
            HtmlToPdf options = OptionsForPDF();
            var HTML = _templateGeneratorFactory.GetHTMLString(userInformation);

            if (string.IsNullOrEmpty(HTML))
            {
                return NotFound();
            }


            PdfDocument pdfToSend = options.ConvertHtmlString(HTML);
            _mailFactory.Send(pdfToSend, userInformation.Email, $"{userInformation.Name} {userInformation.LastName}");

            PdfDocument doc = options.ConvertHtmlString(HTML);

            return File(doc.Save(), "application/pdf");
        }



        private HtmlToPdf OptionsForPDF()
        {
            HtmlToPdf htmlToPdf = new HtmlToPdf();

            // set converter options
            htmlToPdf.Options.PdfPageSize = PdfPageSize.A4;
            htmlToPdf.Options.PdfPageOrientation = PdfPageOrientation.Portrait;
            htmlToPdf.Options.MarginLeft = 10;
            htmlToPdf.Options.MarginRight = 10;
            htmlToPdf.Options.MarginTop = 20;
            htmlToPdf.Options.MarginBottom = 20;

            return htmlToPdf;
        }
    }
}