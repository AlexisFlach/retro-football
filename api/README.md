dotnet new webapi

install packages

dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore --version 6.0.3
dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection
migrate

dotnet ef migrations add InitialCreate

dotnet ef database update