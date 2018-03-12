using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using ThomasRosales.Models;

namespace ThomasRosales.Pages.Projects
{
    public class IndexModel : PageModel
    {
        private readonly ThomasRosales.Models.ProjectContext _context;
        public string CurrentPage { get; set; }

        public IndexModel(ThomasRosales.Models.ProjectContext context)
        {
            _context = context;
        }

        public IList<Project> Project { get;set; }

        public async Task OnGetAsync()
        {
            CurrentPage = "Projects";
            Project = await _context.Project.ToListAsync();
        }
    }
}
