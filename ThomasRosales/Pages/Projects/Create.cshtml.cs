using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using ThomasRosales.Models;

namespace ThomasRosales.Pages.Projects
{
    public class CreateModel : PageModel
    {
        private readonly ThomasRosales.Models.ProjectContext _context;

        public CreateModel(ThomasRosales.Models.ProjectContext context)
        {
            CurrentPage = "";
            _context = context;
        }

        public string CurrentPage { get; set; }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public Project Project { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Project.Add(Project);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}