namespace DrivingNote.Factory
{
    using SelectPdf;
    using System.Threading.Tasks;
    public interface IMailFactory
    {
        Task Send(PdfDocument pdf, string fromMail, string fromName);
    }
}
