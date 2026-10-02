using Microsoft.EntityFrameworkCore;
using SkogsPlan.Api.Controllers;
using SkogsPlan.Api.Data;
using SkogsPlan.Api.DTOs;
using SkogsPlan.Api.Models;

namespace SkogsPlan.Api.Tests;

public class ForestActivitiesControllerTests
{
    [Fact]
    public async Task CreateForestActivity_ShouldSaveActivityToDatabase()
    {
        // Arrange - skapa en tillfällig databas
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
            .Options;

        using var context = new AppDbContext(options);

        // Aktiviteten måste tillhöra ett skogsområde
        var forestArea = new ForestArea
        {
            Name = "Testskogen",
            AreaHectares = 20,
            TreeSpecies = "Gran",
            PlantingYear = 2015
        };

        context.ForestAreas.Add(forestArea);
        await context.SaveChangesAsync();

        var controller = new ForestActivitiesController(context);

        var dto = new CreateForestActivityDto
        {
            Type = "Gallring",
            PlannedDate = new DateTime(2027, 5, 10),
            Status = "Planned",
            Notes = "Testaktivitet",
            ForestAreaId = forestArea.Id
        };

        // Act
        await controller.CreateForestActivity(dto);

        // Assert
        var savedActivity = await context.ForestActivities.FirstOrDefaultAsync();

        Assert.NotNull(savedActivity);
        Assert.Equal("Gallring", savedActivity.Type);
        Assert.Equal("Planned", savedActivity.Status);
        Assert.Equal("Testaktivitet", savedActivity.Notes);
        Assert.Equal(forestArea.Id, savedActivity.ForestAreaId);
    }
}