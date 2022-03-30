using api.Dtos;
using api.Entities;

namespace api.Extensions
{
  public static class Extensions
  {
    public static ClubDto AsDto(this Club club)
    {
      return new ClubDto
      {
        Name = club.Name,
        FullName = club.FullName,
        NickName = club.NickName,
        Stadium = club.Stadium,
        Nation = club.Nation
      };
    }
  }
}