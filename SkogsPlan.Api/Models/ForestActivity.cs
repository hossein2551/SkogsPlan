namespace SkogsPlan.Api.Models;

public class ForestActivity
{
    public int Id { get; set; }

    public string Type { get; set; } = string.Empty;

    public DateTime PlannedDate { get; set; }

    public string Status { get; set; } = "Planned";

    public string? Notes { get; set; }

    public int ForestAreaId { get; set; }
}
