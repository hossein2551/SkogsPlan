using Microsoft.EntityFrameworkCore;
using SkogsPlan.Api.Models;

namespace SkogsPlan.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<ForestArea> ForestAreas { get; set; }

    public DbSet<ForestActivity> ForestActivities { get; set; }
}
