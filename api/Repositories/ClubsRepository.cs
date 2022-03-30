using api.Data;
using api.Dtos;
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

    public Club GetClub(int id)
    {
      return _context.Clubs.FirstOrDefault(p => p.Id == id);

    }
    public async Task<IEnumerable<Club>> GetClubs()
    {

      return await _context.Clubs.Include(c => c.Nation).Include(c => c.Stadium).ToListAsync();
    }
  }
}