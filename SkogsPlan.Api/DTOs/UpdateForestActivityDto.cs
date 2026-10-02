using System.ComponentModel.DataAnnotations;

namespace SkogsPlan.Api.DTOs;

public class UpdateForestActivityDto
{
    [Required]
    [StringLength(100)]
    public string Type { get; set; } = string.Empty;

    [Required]
    public DateTime PlannedDate { get; set; }

    [Required]
    [StringLength(50)]
    public string Status { get; set; } = "Planned";

    [StringLength(500)]
    public string? Notes { get; set; }

    [Range(1, int.MaxValue)]
    public int ForestAreaId { get; set; }
}