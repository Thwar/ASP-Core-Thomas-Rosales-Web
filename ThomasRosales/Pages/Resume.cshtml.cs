using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ThomasRosales.Pages
{
    public class Resume : PageModel
    {
        public string Message { get; set; }
        public string CurrentPage { get; set; }

        public void OnGet()
        {
            Message = "Your application description page.";
            CurrentPage = "Resume";
        }
    }
}
