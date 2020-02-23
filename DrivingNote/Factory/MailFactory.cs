namespace DrivingNote.Factory
{
    using DrivingNote.Models;
    using Microsoft.AspNetCore.Hosting;
    using Newtonsoft.Json;
    using SelectPdf;
    using System.IO;
    using System.Net;
    using System.Net.Mail;
    using System.Threading.Tasks;
    public class MailFactory : IMailFactory
    {
        private readonly IHostingEnvironment _hostingEnvironment;
        private MailInformation _mailInformation = new MailInformation();

        public MailFactory(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }
        public Task Send(PdfDocument doc, string fromMail, string fromName)
        {
            ReadSettingsForMail();

            MemoryStream pdfStream = new MemoryStream();
            doc.Save(pdfStream);

            byte[] bytes = pdfStream.ToArray();

            pdfStream.Close();

            MailMessage mm = new MailMessage("drivingnote@illemads.dk", _mailInformation.ToMail);
            mm.Subject = $"Kørselsseddel fra {fromName}";
            mm.Body = $"Dette er en mail sendt fra {fromName}, med en kørselsseddel vedhæftet. \n Afsenderens mail: {fromMail}";
            mm.Attachments.Add(new Attachment(new MemoryStream(bytes), _mailInformation.NameOfAttachedFile));
            mm.IsBodyHtml = true;

            var smtp =  new SmtpClient()
            {
                UseDefaultCredentials = false,
                Host = "asmtp.onlinemail.io",
                EnableSsl = true,
                Port = 587
            };

            NetworkCredential NetworkCred = new NetworkCredential();
            smtp.Credentials = NetworkCred;
            NetworkCred.UserName = "drivingnote@illemads.dk";
            NetworkCred.Password = "Driving2020";

            smtp.Send(mm);
            return Task.CompletedTask;
        }

        void ReadSettingsForMail()
        {
            string webRootPath = _hostingEnvironment.WebRootPath + @"/mailInformation.json";
            var JSON = File.ReadAllText(webRootPath);
            _mailInformation = JsonConvert.DeserializeObject<MailInformation>(JSON);
        }
    }
}
