using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThomasRosales.Models
{
    public class Project
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string ShortDescription { get; set; }
        public string ImageUrl { get; set; }
        public string Link { get; set; }
        public string Category { get; set; }

        public string Technologies { get; set; }
    }
}
