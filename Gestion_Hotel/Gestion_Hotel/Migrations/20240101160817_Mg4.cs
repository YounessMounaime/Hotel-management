using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Gestion_Hotel.Migrations
{
    /// <inheritdoc />
    public partial class Mg4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_Chambres_ChambreNumeroChambre",
                table: "Reservations");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_SallesReunion_SalleReunionNumeroSalle",
                table: "Reservations");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_Utilisateurs_UtilisateurNumeroUser",
                table: "Reservations");

            migrationBuilder.AlterColumn<int>(
                name: "UtilisateurNumeroUser",
                table: "Reservations",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "SalleReunionNumeroSalle",
                table: "Reservations",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ChambreNumeroChambre",
                table: "Reservations",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_Chambres_ChambreNumeroChambre",
                table: "Reservations",
                column: "ChambreNumeroChambre",
                principalTable: "Chambres",
                principalColumn: "NumeroChambre");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_SallesReunion_SalleReunionNumeroSalle",
                table: "Reservations",
                column: "SalleReunionNumeroSalle",
                principalTable: "SallesReunion",
                principalColumn: "NumeroSalle");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_Utilisateurs_UtilisateurNumeroUser",
                table: "Reservations",
                column: "UtilisateurNumeroUser",
                principalTable: "Utilisateurs",
                principalColumn: "NumeroUser");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_Chambres_ChambreNumeroChambre",
                table: "Reservations");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_SallesReunion_SalleReunionNumeroSalle",
                table: "Reservations");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_Utilisateurs_UtilisateurNumeroUser",
                table: "Reservations");

            migrationBuilder.AlterColumn<int>(
                name: "UtilisateurNumeroUser",
                table: "Reservations",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "SalleReunionNumeroSalle",
                table: "Reservations",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ChambreNumeroChambre",
                table: "Reservations",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_Chambres_ChambreNumeroChambre",
                table: "Reservations",
                column: "ChambreNumeroChambre",
                principalTable: "Chambres",
                principalColumn: "NumeroChambre",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_SallesReunion_SalleReunionNumeroSalle",
                table: "Reservations",
                column: "SalleReunionNumeroSalle",
                principalTable: "SallesReunion",
                principalColumn: "NumeroSalle",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_Utilisateurs_UtilisateurNumeroUser",
                table: "Reservations",
                column: "UtilisateurNumeroUser",
                principalTable: "Utilisateurs",
                principalColumn: "NumeroUser",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
