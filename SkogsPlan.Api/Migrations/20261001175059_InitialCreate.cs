using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SkogsPlan.Api.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ForestAreas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AreaHectares = table.Column<double>(type: "float", nullable: false),
                    TreeSpecies = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PlantingYear = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ForestAreas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ForestActivities",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PlannedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ForestAreaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ForestActivities", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ForestActivities_ForestAreas_ForestAreaId",
                        column: x => x.ForestAreaId,
                        principalTable: "ForestAreas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ForestActivities_ForestAreaId",
                table: "ForestActivities",
                column: "ForestAreaId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ForestActivities");

            migrationBuilder.DropTable(
                name: "ForestAreas");
        }
    }
}
