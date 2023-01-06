using System.ComponentModel.DataAnnotations;

public class Puppy
{
    [Key]
    public int Id { get; set; }
    public string? PuppyId { get; set; } 
    public string? Breed { get; set; }
    public string? Name { get; set; }
    public DateTime BirthDate { get; set; }
}