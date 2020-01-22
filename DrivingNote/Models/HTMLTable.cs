using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrivingNote.Models
{
    public class HTMLTable
    {
        public int Id { get; set; }
        public string Date { get; set; }
        public string StartAddress { get; set; }
        public string EndAddress { get; set; }
        public string RoundTrip { get; set; }
        public string Distance { get; set; }
    }
}
