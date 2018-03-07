using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ThomasRosales.Pages
{
    public class IndexModel : PageModel
    {
        public string CurrentPage { get; set; }

        public void OnGet()
        {
            CurrentPage = "Home";
        }
    }
}
