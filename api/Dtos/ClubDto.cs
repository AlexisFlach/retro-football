using api.Entities;

namespace api.Dtos
{
  public class ClubDto
  {
    public string Name { get; set; }
    public string FullName { get; set; }
    public string NickName { get; set; }

    public Stadium Stadium { get; set; }
    public Nation Nation { get; set; }

  }
}
