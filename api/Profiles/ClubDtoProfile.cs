using api.Dtos;
using api.Entities;
using AutoMapper;

namespace api.Profiles
{
  public class ClubDtoProfile : Profile
  {
    public ClubDtoProfile()
    {
      CreateMap<ClubDto, Club>();
    }
  }
}