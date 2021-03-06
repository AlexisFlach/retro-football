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

    public async Task<Club> GetClub(int id)
    {

      var clubs = _context.Clubs.FirstOrDefault(c => c.ClubId == id);
      return clubs;

    }

    public Task<List<Player>> GetClubPlayers(int id)
    {
      var players = _context.Players.Where(p => p.Club.ClubId == id).ToListAsync();
      return players;
    }
    public async Task<IEnumerable<Club>> GetClubs()
    {
      return await _context.Clubs.Include(c => c.Nation).Include(c => c.Stadium).ToListAsync();
    }
  }
}