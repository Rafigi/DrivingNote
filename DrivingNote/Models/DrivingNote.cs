namespace DrivingNote.Models
{
    public class DrivingNote
    {
        public string Date { get; set; }
        public string StartAddress { get; set; }
        public string EndAddress { get; set; }
        public bool RoundTrip { get; set; }
    }
}
