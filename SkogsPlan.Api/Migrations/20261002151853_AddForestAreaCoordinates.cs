using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SkogsPlan.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddForestAreaCoordinates : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Latitude",
                table: "ForestAreas",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Longitude",
                table: "ForestAreas",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "ForestAreas");

            migrationBuilder.DropColumn(
                name: "Longitude",
                table: "ForestAreas");
        }
    }
}
