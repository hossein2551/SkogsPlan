using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SkogsPlan.Api.Data;
using SkogsPlan.Api.DTOs;
using SkogsPlan.Api.Models;

namespace SkogsPlan.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ForestAreasController : ControllerBase
{
    private readonly AppDbContext _context;

    public ForestAreasController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ForestArea>>> GetForestAreas()
    {
        var forestAreas = await _context.ForestAreas
            .Include(area => area.Activities)
            .ToListAsync();

        return Ok(forestAreas);
    }

   [HttpPost]
public async Task<ActionResult<ForestArea>> CreateForestArea(CreateForestAreaDto dto)
{
    var forestArea = new ForestArea
{
    Name = dto.Name,
    AreaHectares = dto.AreaHectares,
    TreeSpecies = dto.TreeSpecies,
    PlantingYear = dto.PlantingYear,
    Latitude = dto.Latitude,
    Longitude = dto.Longitude
};

    _context.ForestAreas.Add(forestArea);
    await _context.SaveChangesAsync();

    return Ok(forestArea);
}
public async Task<ActionResult<ForestArea>> GetForestArea(int id)
{
    var forestArea = await _context.ForestAreas
        .Include(area => area.Activities)
        .FirstOrDefaultAsync(area => area.Id == id);

    if (forestArea == null)
    {
        return NotFound();
    }

    return Ok(forestArea);
    }

    [HttpPut("{id}")]

    
public async Task<IActionResult> UpdateForestArea(int id, UpdateForestAreaDto updatedArea)
{
    var forestArea = await _context.ForestAreas.FindAsync(id);

    if (forestArea == null)
    {
        return NotFound();
    }

    forestArea.Name = updatedArea.Name;
    forestArea.AreaHectares = updatedArea.AreaHectares;
    forestArea.TreeSpecies = updatedArea.TreeSpecies;
    forestArea.PlantingYear = updatedArea.PlantingYear;
forestArea.Latitude = updatedArea.Latitude;
forestArea.Longitude = updatedArea.Longitude;
    await _context.SaveChangesAsync();

    return NoContent();

}

[HttpDelete("{id}")]
public async Task<IActionResult> DeleteForestArea(int id)
{
    var forestArea = await _context.ForestAreas.FindAsync(id);

    if (forestArea == null)
    {
        return NotFound();
    }

    _context.ForestAreas.Remove(forestArea);
    await _context.SaveChangesAsync();

    return NoContent();
}
}
