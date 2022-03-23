using api.Data;
using api.Entities;
using Microsoft.EntityFrameworkCore;

namespace Api.Repositories
{
  public class ClubsRepository : IClubsRepository
  {
    private readonly ApiDbContext _context;

    public ClubsRepository(ApiDbContext ctx)
    {
      {
        _context = ctx;
      }
    }
    public async Task<IEnumerable<Club>> GetClubs()
    {

      return await _context.Clubs.Include(c => c.Nation).Include(c => c.Stadium).ToListAsync();
    }
  }
}