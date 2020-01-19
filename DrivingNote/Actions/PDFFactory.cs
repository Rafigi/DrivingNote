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

        //public PdfDocument Create(DrivingNote drivingNote)
        //{
        //    PdfDocument doc = converter.ConvertHtmlString(HTMLBuilder());
        //    doc.DocumentInformation.CreationDate = DateTime.Now;
        //    var file = doc.Save();
        //    return null; //File(file, "application/pdf");
        //}


        //private string HTMLBuilder()
        //{
        //    string webRootPath = _hostingEnvironment.WebRootPath + @"/css/PDFStyle.css";

        //    string th = "<th>";
        //    StringBuilder sb = new StringBuilder();
        //    sb.Append(@"<html> <head>");
        //    sb.Append("<link rel=\"stylesheet\" type=\"text/css\"  href=\" " + webRootPath + "\"/>");
        //    sb.Append(@"</head> <body>");
        //    //Generate brugerinformation
        //    #region Brugerinformationer
        //    sb.Append("<form class='Box'>");
        //    sb.Append("<section class='BoxOne'>");
        //    sb.Append("<p><label> Navn </label>");
        //    sb.Append("<input value='" + Bruger.Navn + "'></p>");
        //    sb.Append("<br/>");
        //    sb.Append("<p><label> Adresse </label>");
        //    sb.Append("<input value='" + Bruger.Adresse + "'></p>");
        //    sb.Append("<br/>");
        //    sb.Append("<p><label> Postnr/By </label>");
        //    sb.Append("<input value='" + Bruger.PostBy + "'></p>");
        //    sb.Append("<br/>");
        //    sb.Append("<p><label> Afdeling </label>");
        //    sb.Append("<input value='" + Bruger.Afdeling + "'></p>");
        //    sb.Append("</section>");

        //    sb.Append("<section class='BoxOne'>");
        //    sb.Append("<p><label> Mail </label>");
        //    sb.Append("<input value='" + Bruger.Mail + "'></p>");
        //    sb.Append("<br/>");
        //    sb.Append("<p><label> Bank Regnr </label>");
        //    sb.Append("<input value='" + Bruger.BankRegnr + "'></p>");
        //    sb.Append("<br/>");
        //    sb.Append("<p><label> Bank Kontonr </label>");
        //    sb.Append("<input value='" + Bruger.BankKontoNr + "'></p>");
        //    sb.Append("</section>");
        //    sb.Append("</form>");
        //    #endregion


        //    //Generate table
        //    #region Generate table
        //    sb.Append("<table class='table'>");
        //    sb.Append(@"<tr>");
        //    sb.Append(th);
        //    sb.Append("Dato");
        //    sb.Append(@"</th>");
        //    sb.Append(th);
        //    sb.Append(@"Start Adresse");
        //    sb.Append(@"</th>");
        //    sb.Append(th);
        //    sb.Append(@"Slut Adresse");
        //    sb.Append(@"</th>");
        //    sb.Append(th);
        //    sb.Append(@"Tur/Retur");
        //    sb.Append("</th>");
        //    sb.Append(th);
        //    sb.Append(@"Gentagelser");
        //    sb.Append(@"</th>");
        //    sb.Append(th);
        //    sb.Append(@"KM");
        //    sb.Append(@"</th>");
        //    sb.Append(@"<tr>");
        //    #endregion

        //    foreach (var item in WebMaps.Models.BrugerInformationer.KørselListe)
        //    {
        //        sb.Append(@"<tr>");
        //        sb.Append(@"<td>");
        //        sb.Append(item.Dato.Value.ToShortDateString());
        //        sb.Append(@"</td>");
        //        sb.Append(@"<td>");
        //        sb.Append(item.StartAdresse);
        //        sb.Append(@"</td>");
        //        sb.Append(@"<td>");
        //        sb.Append(item.SlutAdresse);
        //        sb.Append(@"</td>");
        //        sb.Append(@"<td>");
        //        sb.Append(item.TurRetur);
        //        sb.Append(@"</td>");
        //        sb.Append(@"<td>");
        //        sb.Append(item.Gentagelser);
        //        sb.Append(@"</td>");
        //        sb.Append(@"<td>");
        //        sb.Append(item.KM);
        //        sb.Append(@"</td>");
        //        sb.Append(@"</tr>");
        //    }

        //    sb.Append(@"</table>");
        //    sb.Append("</body ></html> ");

        //    return sb.ToString();

        //}
    }
}
