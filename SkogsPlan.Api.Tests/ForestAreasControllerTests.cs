using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SkogsPlan.Api.Controllers;
using SkogsPlan.Api.Data;
using SkogsPlan.Api.DTOs;
using SkogsPlan.Api.Models;

namespace SkogsPlan.Api.Tests;

public class ForestAreasControllerTests
{
    [Fact]
    public async Task CreateForestArea_ShouldSaveAreaToDatabase()
    {
        // Arrange - skapa en tillfällig databas
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
            .Options;

        using var context = new AppDbContext(options);
        var controller = new ForestAreasController(context);

        var dto = new CreateForestAreaDto
        {
            Name = "Testskogen",
            AreaHectares = 25.5,
            TreeSpecies = "Gran",
            PlantingYear = 2020
        };

        
        var result = await controller.CreateForestArea(dto);

        var savedArea = await context.ForestAreas.FirstOrDefaultAsync();

        Assert.NotNull(savedArea);
        Assert.Equal("Testskogen", savedArea.Name);
        Assert.Equal(25.5, savedArea.AreaHectares);
        Assert.Equal("Gran", savedArea.TreeSpecies);
        Assert.Equal(2020, savedArea.PlantingYear);
    }
}