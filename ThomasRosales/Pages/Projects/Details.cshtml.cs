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
    public class DetailsModel : PageModel
    {
        private readonly ThomasRosales.Models.ProjectContext _context;

        public DetailsModel(ThomasRosales.Models.ProjectContext context)
        {
            CurrentPage = "";
            _context = context;
        }

        public string CurrentPage { get; set; }

        public Project Project { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Project = await _context.Project.SingleOrDefaultAsync(m => m.ID == id);

            if (Project == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
