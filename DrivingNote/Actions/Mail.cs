using SelectPdf;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace DrivingNote.Actions
{
    public class Mail
    {
        public Mail()
        {

        }

        //private async Task SendMail(string html)
        //{

        //    PdfDocument doc = converter.ConvertHtmlString(html);

        //    MemoryStream pdfStream = new MemoryStream();
        //    doc.Save(pdfStream);

        //    pdfStream.Position = 0;
        //    MailMessage mm = new MailMessage("", "");
        //    mm.Subject = "Kørsel PDF fra " + Bruger.Navn;
        //    mm.Body = "Denne mail er sendt fra en hjemmesiden www.illemads.dk/map";
        //    mm.Attachments.Add(new Attachment(pdfStream, "Kørselsseddel.pdf"));
        //    mm.IsBodyHtml = true;
        //    SmtpClient smtp = new SmtpClient();
        //    smtp.UseDefaultCredentials = false;
        //    smtp.Host = "smtp.office365.com";
        //    smtp.EnableSsl = true;
        //    smtp.Port = 587;
        //    NetworkCredential NetworkCred = new NetworkCredential();
        //    smtp.Credentials = NetworkCred;
        //    NetworkCred.UserName = "";
        //    NetworkCred.Password = "";

        //    await smtp.SendMailAsync(mm);
        //    doc.Close();
        //}
    }
}
