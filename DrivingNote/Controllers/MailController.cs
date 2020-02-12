namespace DrivingNote.Controllers
{
    using DrivingNote.Factory;
    using DrivingNote.Models;
    using Microsoft.AspNetCore.Mvc;
    using SelectPdf;

    [Route("api/[controller]")]
    [ApiController]
    public class MailController : ControllerBase
    {
        private readonly ITemplateGeneratorFactory _templateGeneratorFactory;

        public MailController(ITemplateGeneratorFactory templateGeneratorFactory)
        {
            _templateGeneratorFactory = templateGeneratorFactory;
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