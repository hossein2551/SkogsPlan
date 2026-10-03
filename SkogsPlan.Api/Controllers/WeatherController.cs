using Microsoft.AspNetCore.Mvc;

namespace SkogsPlan.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WeatherController : ControllerBase
{
    private readonly HttpClient _httpClient;

    public WeatherController(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    [HttpGet]
    public async Task<IActionResult> GetWeather(
        double latitude,
        double longitude)
    {
        var url =
            $"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current=temperature_2m,precipitation,wind_speed_10m";

        var response = await _httpClient.GetAsync(url);

        if (!response.IsSuccessStatusCode)
        {
            return StatusCode(502, "Kunde inte hämta väderdata.");
        }

        var weather = await response.Content.ReadAsStringAsync();

        return Content(weather, "application/json");
    }
}