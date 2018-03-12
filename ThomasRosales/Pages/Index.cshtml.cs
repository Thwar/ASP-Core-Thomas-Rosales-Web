using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using ThomasRosales.Models;

namespace ThomasRosales.Pages
{
    public class IndexModel : PageModel
    {
        public string CurrentPage { get; set; }
        
        private readonly ProjectContext _context;
        public IList<Models.Project> Project { get; set; }

        public IndexModel(ProjectContext context)
        {
            _context = context;
        }

        public void OnGet()
        {
            CurrentPage = "Home";
            Project = _context.Project.OrderBy(x=> Guid.NewGuid()).ToList(); //randommize project
        }



    }
}
