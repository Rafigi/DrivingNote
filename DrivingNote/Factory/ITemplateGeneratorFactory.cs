namespace DrivingNote.Factory
{
    using DrivingNote.Models;
    public interface ITemplateGeneratorFactory
    {
        string GetHTMLString(UserInformation userInformation);
    }
}
