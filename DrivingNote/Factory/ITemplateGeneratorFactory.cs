namespace DrivingNote.Factory
{
    using DrivingNote.Models;
    public interface ITemplateGeneratorFactory
    {
        /// <summary>
        /// Will return null if userInformation isn't filled out properly.
        /// </summary>
        /// <param name="userInformation"></param>
        /// <returns>Return the created HTML string</returns>
        string GetHTMLString(UserInformation userInformation);
    }
}
