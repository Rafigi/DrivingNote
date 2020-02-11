using DrivingNote.Models;
using Microsoft.AspNetCore.Hosting;
using System.Collections.Generic;
using System.Text;

namespace DrivingNote.Utility
{
    public static class TemplateGenerator
    {

        public static string GetHTMLString(UserInfo userInfo, IHostingEnvironment hostingEnvironment)
        {
            return CreateHTMLstring(userInfo.HTMLTable, hostingEnvironment);
        }

        private static string CreateHTMLstring(List<HTMLTable> htmlTabel, IHostingEnvironment hostingEnvironment)
        {
            string webRootPath = hostingEnvironment.WebRootPath + @"/CSS/tabel.css";
            var builder = new StringBuilder();
            builder.Append(@"<html> <head>");
            builder.Append("<link rel=\"stylesheet\" type=\"text/css\"  href=\" " + webRootPath + "\"/>");
            builder.Append(@"</head>");
            builder.Append(@"<body>");

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
            foreach (var item in htmlTabel)
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

        //private static string CreateHTMLstring(List<HTMLTable> htmlTabel, IHostingEnvironment hostingEnvironment)
        //{
        //    string webRootPath = hostingEnvironment.WebRootPath + @"/CSS/table.css";
        //    var builder = new StringBuilder();
        //    builder.Append(@"<html> <head>");
        //    // builder.Append("<link rel=\"stylesheet\" type=\"text/css\"  href=\" " + webRootPath + "\"/>");
        //    builder.Append(@"</head>");
        //    builder.Append(@"<body>");

        //    builder.Append("<table #data class='table col-lg-12'>");
        //    builder.Append("<thead>");
        //    builder.Append("<tr>");
        //    builder.Append("<th scope='col' class='text-center'>Dato</th>");
        //    builder.Append("<th scope='col' class='text-center'>Start Adresse</th>");
        //    builder.Append("<th scope='col' class='text-center'>Slut Adresse</th>");
        //    builder.Append("<th scope='col' class='text-center'>Tur/retur</th>");
        //    builder.Append("<th scope='col' class='text-center'>Distance</th>");
        //    builder.Append("</tr>");
        //    builder.Append("</thead>");

        //    builder.Append("<tbody class='_infoRow col-lg-12'>");
        //    foreach (var item in htmlTabel)
        //    {

        //        builder.Append("<tr>");
        //        builder.Append("<td class='text-lg-center'>");
        //        builder.Append(item.Date);
        //        builder.Append("</td>");
        //        builder.Append("<td class='text-lg-center'>");
        //        builder.Append(item.StartAddress);
        //        builder.Append("</td>");
        //        builder.Append("<td class='text-lg-center'>");
        //        builder.Append(item.EndAddress);
        //        builder.Append("</td>");
        //        builder.Append("<td class='text-lg-center'>");
        //        builder.Append(item.RoundTrip);
        //        builder.Append("</td>");
        //        builder.Append("<td class='text-lg-center'>");
        //        builder.Append(item.Distance);
        //        builder.Append("</td>");
        //        builder.Append("</tr>");
        //    }

        //    builder.Append("</tbody>");

        //    builder.Append("</table>");
        //    builder.Append(@"</body>");
        //    builder.Append(@"</html>");

        //    return builder.ToString();
        //}
    }
}
