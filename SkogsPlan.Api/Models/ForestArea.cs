namespace SkogsPlan.Api.Models;

public class ForestArea
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public double AreaHectares { get; set; }

    public string TreeSpecies { get; set; } = string.Empty;

    public int PlantingYear { get; set; }

    public List<ForestActivity> Activities { get; set; } = new();
}
