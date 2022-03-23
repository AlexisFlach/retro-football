using api.Dtos;
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
    public async Task<IActionResult> GetClubs()
    {
      var clubs = await _repo.GetClubs();

      var clubDtos = _mapper.Map<IEnumerable<ClubDto>>(clubs);
      return Ok(clubs);
    }
  }
}