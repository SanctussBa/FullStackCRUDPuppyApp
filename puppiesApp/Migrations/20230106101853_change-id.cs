using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace puppiesApp.Migrations
{
    /// <inheritdoc />
    public partial class changeid : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PuppyId",
                table: "Puppies",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PuppyId",
                table: "Puppies");
        }
    }
}
