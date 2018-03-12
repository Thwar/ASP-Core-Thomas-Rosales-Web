using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ThomasRosales.Pages
{
    public class ResourcesModel : PageModel
    {
        public string Message { get; set; }
        public string CurrentPage { get; set; }

        public void OnGet()
        {
            Message = "Your application description page.";
            CurrentPage = "Resources";
        }
    }
}
