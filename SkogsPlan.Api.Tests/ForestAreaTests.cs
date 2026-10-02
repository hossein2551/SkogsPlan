using SkogsPlan.Api.Models;

namespace SkogsPlan.Api.Tests;

public class ForestAreaTests
{
    [Fact]
    public void ForestArea_ShouldStoreCorrectValues()
    {
        // Arrange
        var forestArea = new ForestArea
        {
            Name = "Norra skiftet",
            AreaHectares = 12.5,
            TreeSpecies = "Gran",
            PlantingYear = 2015
        };

        // Assert
        Assert.Equal("Norra skiftet", forestArea.Name);
        Assert.Equal(12.5, forestArea.AreaHectares);
        Assert.Equal("Gran", forestArea.TreeSpecies);
        Assert.Equal(2015, forestArea.PlantingYear);
    }
}