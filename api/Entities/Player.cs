namespace api.Entities
{
  public class Player
  {
    public int PlayerId { get; set; }
    public string FirstName { get; set; }

    public string LastName { get; set; }

    public int ShirtNumber { get; set; }

    public Club Club { get; set; }

    public int ClubId { get; set; }

  }
}