using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SkogsPlan.Api.Data;
using SkogsPlan.Api.DTOs;
using SkogsPlan.Api.Models;

namespace SkogsPlan.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ForestActivitiesController : ControllerBase
{
    private readonly AppDbContext _context;

    public ForestActivitiesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ForestActivity>>> GetForestActivities()
    {
        var activities = await _context.ForestActivities.ToListAsync();

        return Ok(activities);
    }
    [HttpPost]
public async Task<ActionResult<ForestActivity>> CreateForestActivity(CreateForestActivityDto dto)
{
    var forestAreaExists = await _context.ForestAreas
        .AnyAsync(area => area.Id == dto.ForestAreaId);

    if (!forestAreaExists)
    {
        return BadRequest("Forest area does not exist.");
    }

    var activity = new ForestActivity
    {
        Type = dto.Type,
        PlannedDate = dto.PlannedDate,
        Status = dto.Status,
        Notes = dto.Notes,
        ForestAreaId = dto.ForestAreaId
    };

    _context.ForestActivities.Add(activity);
    await _context.SaveChangesAsync();

    return Ok(activity);
}
[HttpGet("{id}")]
public async Task<ActionResult<ForestActivity>> GetForestActivity(int id)
{
    var activity = await _context.ForestActivities.FindAsync(id);

    if (activity == null)
    {
        return NotFound();
    }

    return Ok(activity);
}
[HttpPut("{id}")]
public async Task<IActionResult> UpdateForestActivity(int id, UpdateForestActivityDto updatedActivity)
{
    var activity = await _context.ForestActivities.FindAsync(id);

    if (activity == null)
    {
        return NotFound();
    }

    activity.Type = updatedActivity.Type;
    activity.PlannedDate = updatedActivity.PlannedDate;
    activity.Status = updatedActivity.Status;
    activity.Notes = updatedActivity.Notes;
    activity.ForestAreaId = updatedActivity.ForestAreaId;

    await _context.SaveChangesAsync();

    return NoContent();
}
[HttpDelete("{id}")]
public async Task<IActionResult> DeleteForestActivity(int id)
{
    var activity = await _context.ForestActivities.FindAsync(id);

    if (activity == null)
    {
        return NotFound();
    }

    _context.ForestActivities.Remove(activity);
    await _context.SaveChangesAsync();

    return NoContent();
}
}