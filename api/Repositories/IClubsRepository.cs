using System.Collections;
using api.Entities;

namespace Api.Repositories
{
  public interface IClubsRepository
  {
    Task<IEnumerable<Club>> GetClubs();
    Club GetClub(int id);
  }
}