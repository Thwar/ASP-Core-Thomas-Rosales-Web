using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ThomasRosales.Models
{
    public class ProjectContext : DbContext
    {
        public ProjectContext()
        {
        }

        public ProjectContext(DbContextOptions<ProjectContext> options)
            : base(options)
        {
        }

        public DbSet<Project> Project { get; set; }
    }
}
