using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using api.Entities;

namespace api.Data
{
  public class ApiDbContext : IdentityDbContext
  {
    public virtual DbSet<Club> Clubs { get; set; }
    public virtual DbSet<Nation> Nation { get; set; }
    public virtual DbSet<Stadium> Stadium { get; set; }

    public ApiDbContext(DbContextOptions<ApiDbContext> opt) : base(opt)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);

    }
  }
}