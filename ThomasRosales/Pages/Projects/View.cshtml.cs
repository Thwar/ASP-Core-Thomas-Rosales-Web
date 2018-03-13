using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using ThomasRosales.Models;
using Microsoft.AspNetCore.Authentication;
    using Microsoft.AspNetCore.Http;

namespace ThomasRosales.Pages.Projects
{
    public class ViewModel : PageModel
    {
        private readonly ThomasRosales.Models.ProjectContext _context;
        public string CurrentPage { get; set; }

        public ViewModel(ThomasRosales.Models.ProjectContext context)
        {
            _context = context;
        }

        public IList<Project> Project { get; set; }

        //public async Task OnGetAsync()
        //{
        //   // CurrentPage = "Projects";
        //  //  Project = await _context.Project.ToListAsync();
        //}

        public void OnGet()
        {
            CurrentPage = "Projects";
            Project = _context.Project.ToList();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            CurrentPage = "Projects";
            Project = _context.Project.ToList();
            await HttpContext.SignOutAsync();
            return RedirectToPage("Index");
        }

    }
}
