namespace DrivingNote.Actions
{
    using System;
    using System.Text;
    using Microsoft.AspNetCore.Hosting;
    using SelectPdf;
    using DrivingNote.Models;
    using System.IO;

    public class PDFFactory
    {
        private readonly IHostingEnvironment _hostingEnvironment;
        HtmlToPdf converter;

        public PDFFactory(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
            converter = new HtmlToPdf();
        }

        public PdfDocument Create(UserInfo userInfo)
        {
            PdfDocument doc = converter.ConvertHtmlString(HTMLBuilder());
            doc.DocumentInformation.CreationDate = DateTime.Now;
            var file = doc.Save();
            return File(file, "application/pdf");
        }


        private string HTMLBuilder()
        {
            string webRootPath = _hostingEnvironment.WebRootPath + @"/´CSS/PDFStyle.css";

            StringBuilder sb = new StringBuilder();
            sb.Append(@"<html> <head>");
            sb.Append("<link rel=\"stylesheet\" type=\"text/css\"  href=\" " + webRootPath + "\"/>");
            sb.Append(@"</head> <body>");

            sb.Append("</body ></html> ");

            return sb.ToString();

        }
    }
}
