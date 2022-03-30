using System.ComponentModel.DataAnnotations;

namespace api.Entities
{
  public class Club
  {
    [Key]
    public int Id { get; set; }

    public string Name { get; set; }

    public string FullName { get; set; }

    public string NickName { get; set; } = null;

    public Stadium Stadium { get; set; }

    public int StadiumId { get; set; }

    public Nation Nation { get; set; }
    public int NationId { get; set; }
  }
}