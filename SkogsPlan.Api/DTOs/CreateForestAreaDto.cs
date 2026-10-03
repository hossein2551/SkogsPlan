using System.ComponentModel.DataAnnotations;

namespace SkogsPlan.Api.DTOs;

public class CreateForestAreaDto
{
    [Required]
    [StringLength(100)]
    public string Name { get; set; } = string.Empty;

    [Range(0.1, 100000)]
    public double AreaHectares { get; set; }

    [Required]
    [StringLength(50)]
    public string TreeSpecies { get; set; } = string.Empty;

    [Range(1800, 2100)]
    public int PlantingYear { get; set; }
    [Range(-90, 90)]
    public double Latitude { get; set; }

    [Range(-180, 180)]
    public double Longitude { get; set; }
}