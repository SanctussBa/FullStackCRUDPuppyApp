using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace puppiesApp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PuppiesController : ControllerBase
{
    private readonly DataContext _context;

    public PuppiesController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Puppy>>> GetAllPuppies()
    {
        return Ok(await _context.Puppies.ToListAsync());
    }

    [HttpGet("{puppyId}")]
    public async Task<ActionResult<Puppy>> GetPuppyById(string puppyId)
    {
        var puppy = await _context.Puppies.FirstOrDefaultAsync(p => p.PuppyId == puppyId);
        if (puppy == null)
        {
            return BadRequest($"Puppy by id '{puppyId}' does not exist");
        }
        return Ok(puppy);
    }

    [HttpPost]
    public async Task<ActionResult<List<Puppy>>> AddNewPuppy(Puppy newPuppy)
    {
        _context.Puppies.Add(newPuppy);
        await _context.SaveChangesAsync();
        return Ok(await _context.Puppies.ToListAsync());

    }

    [HttpPut("{puppyId}")]
    public async Task<ActionResult<List<Puppy>>> UpdatePuppy(Puppy updatedPuppy)
    {
        var puppy = await _context.Puppies.FirstOrDefaultAsync(p => p.PuppyId == updatedPuppy.PuppyId);
        if (puppy == null)
        {
            return BadRequest($"Puppy with id '{updatedPuppy.PuppyId}' does not exist ");
        }
        
        puppy.PuppyId = updatedPuppy.PuppyId;
        puppy.Breed = updatedPuppy.Breed;
        puppy.Name = updatedPuppy.Name;
        puppy.BirthDate = updatedPuppy.BirthDate;

        await _context.SaveChangesAsync();
        return Ok(await _context.Puppies.ToListAsync());

    }

    [HttpDelete("{puppyId}")]
    public async Task<ActionResult<List<Puppy>>> DeletePuppy(string puppyId)
    {
        var puppy = await _context.Puppies.FirstOrDefaultAsync(p => p.PuppyId == puppyId);
        if (puppy == null)
        {
            return BadRequest($"Puppy by id '{puppyId}' does not exist");
        }
        _context.Puppies.Remove(puppy);
        await _context.SaveChangesAsync();
        return Ok(await _context.Puppies.ToListAsync());
    }

}
