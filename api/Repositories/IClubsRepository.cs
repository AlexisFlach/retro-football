using System.Collections;
using api.Entities;

namespace Api.Repositories
{
  public interface IClubsRepository
  {
    Task<IEnumerable<Club>> GetClubs();
    Task<Club> GetClub(int id);
    Task<List<Player>> GetClubPlayers(int id);
  }
}