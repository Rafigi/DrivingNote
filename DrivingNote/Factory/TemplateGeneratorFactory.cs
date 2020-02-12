namespace DrivingNote.Factory
{
    using DrivingNote.Models;
    using Microsoft.AspNetCore.Hosting;
    using System;
    using System.Collections.Generic;
    using System.Text;
    public class TemplateGeneratorFactory : ITemplateGeneratorFactory
    {
        private readonly IHostingEnvironment _hostingEnvironment;
        public TemplateGeneratorFactory(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }
        public string GetHTMLString(UserInformation userInformation)
        {
            if (!IsUserInformationValid(userInformation) || !IsTableInformationValid(userInformation.TableInfomation))
            {
                return string.Empty;
            }

            return CreateHTMLTableString(userInformation.TableInfomation);
        }

        private bool IsTableInformationValid(List<TableInfomation> tableInfomations)
        {
            foreach (var tableInfomation in tableInfomations)
            {
                if (
                  string.IsNullOrWhiteSpace(tableInfomation.StartAddress) &&
                  string.IsNullOrWhiteSpace(tableInfomation.EndAddress) &&
                  string.IsNullOrWhiteSpace(tableInfomation.Date) &&
                  string.IsNullOrWhiteSpace(tableInfomation.RoundTrip) &&
                  string.IsNullOrWhiteSpace(tableInfomation.Distance)
                  )
                {
                    return false;
                }
            }

            return true;
        }

        private bool IsUserInformationValid(UserInformation userInformation)
        {
            if (
                !string.IsNullOrWhiteSpace(userInformation.Name) &&
                !string.IsNullOrWhiteSpace(userInformation.LastName) &&
                !string.IsNullOrWhiteSpace(userInformation.Sport) &&
                !string.IsNullOrWhiteSpace(userInformation.AccountNumber) &&
                !string.IsNullOrWhiteSpace(userInformation.Email)
                )
            {
                return true;
            }

            return false;
        }

        private string CreateHTMLTableString(List<TableInfomation> tableInfomation)
        {
            //Getting the Style for the HTML in the wwwroot folder.
            string webRootPath = _hostingEnvironment.WebRootPath + @"/CSS/table.css";
            var builder = new StringBuilder();
            builder.Append("<html> <head>");
            builder.Append("<link rel=\"stylesheet\" type=\"text/css\"  href=\" " + webRootPath + "\"/>");
            builder.Append("</head>");
            builder.Append("<body>");

            builder.Append("<table id=\"customers\">");
            builder.Append("<thead>");
            builder.Append("<tr>");
            builder.Append("<th>Dato</th>");
            builder.Append("<th>Start Adresse</th>");
            builder.Append("<th>Slut Adresse</th>");
            builder.Append("<th>Tur/retur</th>");
            builder.Append("<th>Distance</th>");
            builder.Append("</tr>");
            builder.Append("</thead>");

            builder.Append("<tbody>");
            foreach (var item in tableInfomation)
            {

                builder.Append("<tr>");
                builder.Append("<td>");
                builder.Append(item.Date);
                builder.Append("</td>");
                builder.Append("<td>");
                builder.Append(item.StartAddress);
                builder.Append("</td>");
                builder.Append("<td>");
                builder.Append(item.EndAddress);
                builder.Append("</td>");
                builder.Append("<td>");
                builder.Append(item.RoundTrip);
                builder.Append("</td>");
                builder.Append("<td>");
                builder.Append(item.Distance);
                builder.Append("</td>");
                builder.Append("</tr>");
            }

            builder.Append("</tbody>");

            builder.Append("</table>");
            builder.Append(@"</body>");
            builder.Append(@"</html>");

            return builder.ToString();
        }
    }
}
