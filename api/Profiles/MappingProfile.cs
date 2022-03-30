using api.Dtos;
using api.Entities;
using AutoMapper;

namespace api.Profiles
{
  public class MappingProfile : Profile
  {
    public MappingProfile()
    {
      CreateMap<Club, ClubDto>();

    }
  }

}