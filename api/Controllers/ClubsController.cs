using api.Dtos;
using api.Entities;
using Api.Repositories;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
  [Route("api/[controller]")]
  [ApiController]

  public class ClubsController : ControllerBase
  {
    public readonly IClubsRepository _repo;
    private readonly IMapper _mapper;

    public ClubsController(IClubsRepository repo, IMapper mapper)
    {
      _repo = repo;
      _mapper = mapper;
    }

    [HttpGet]

    public async Task<ActionResult<IEnumerable<ClubDto[]>>> GetClubs()
    {
      System.Console.WriteLine($"--> Hit Clubs");
      var clubs = await _repo.GetClubs();
      var clubDtos = _mapper.Map<IEnumerable<ClubDto>>(clubs);
      return Ok(clubs);
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<Club>> GetClubById(int id)
    {

      var club = await _repo.GetClub(id);
      if (club != null)
      {
        return Ok(club);
      }
      return NotFound();
    }
    [Route("{id:int}/players")]
    public async Task<ActionResult<List<Player>>> GetClubPlayers(int id)
    {
      var players = await _repo.GetClubPlayers(id);
      return Ok(players);
    }
  }
}