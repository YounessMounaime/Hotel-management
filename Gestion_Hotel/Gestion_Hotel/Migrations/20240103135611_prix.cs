using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Gestion_Hotel.Migrations
{
    /// <inheritdoc />
    public partial class prix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<float>(
                name: "prix_SR",
                table: "SallesReunion",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "prix_chambre",
                table: "Chambres",
                type: "real",
                nullable: false,
                defaultValue: 0f);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "prix_SR",
                table: "SallesReunion");

            migrationBuilder.DropColumn(
                name: "prix_chambre",
                table: "Chambres");
        }
    }
}
