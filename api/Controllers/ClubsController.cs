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
    public ActionResult<Club> GetClubById(int id)
    {
      System.Console.WriteLine($"--> Hit Club: {id}");
      var club = _repo.GetClub(id);
      if (club != null)
      {
        return Ok(club);
      }
      return NotFound();
    }
  }
}