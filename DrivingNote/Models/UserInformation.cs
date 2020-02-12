using System.Collections.Generic;

namespace DrivingNote.Models
{
    public class UserInformation
    {
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Sport { get; set; }
        public string AccountNumber { get; set; }
        public List<TableInfomation> TableInfomation { get; set; }
    }
}
