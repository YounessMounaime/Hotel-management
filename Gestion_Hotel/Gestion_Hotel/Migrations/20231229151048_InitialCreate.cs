using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Gestion_Hotel.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Chambres",
                columns: table => new
                {
                    NumeroChambre = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Etat = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TypeChambre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Capacite = table.Column<int>(type: "int", nullable: false),
                    NumeroTel = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NumeroEtage = table.Column<int>(type: "int", nullable: false),
                    UrlImage = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Chambres", x => x.NumeroChambre);
                });

            migrationBuilder.CreateTable(
                name: "SallesReunion",
                columns: table => new
                {
                    NumeroSalle = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NumeroEtage = table.Column<int>(type: "int", nullable: false),
                    Capacite = table.Column<int>(type: "int", nullable: false),
                    UrlImage = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SallesReunion", x => x.NumeroSalle);
                });

            migrationBuilder.CreateTable(
                name: "Utilisateurs",
                columns: table => new
                {
                    NumeroUser = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomUser = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PrenomUser = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TelUser = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AdresseUser = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Utilisateurs", x => x.NumeroUser);
                });

            migrationBuilder.CreateTable(
                name: "Reservations",
                columns: table => new
                {
                    NumeroReservation = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DateDebut = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateFin = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateReser = table.Column<DateTime>(type: "datetime2", nullable: false),
                    NumeroChambre = table.Column<int>(type: "int", nullable: false),
                    ChambreNumeroChambre = table.Column<int>(type: "int", nullable: false),
                    NumeroSalle = table.Column<int>(type: "int", nullable: false),
                    SalleReunionNumeroSalle = table.Column<int>(type: "int", nullable: false),
                    NumeroUser = table.Column<int>(type: "int", nullable: false),
                    UtilisateurNumeroUser = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reservations", x => x.NumeroReservation);
                    table.ForeignKey(
                        name: "FK_Reservations_Chambres_ChambreNumeroChambre",
                        column: x => x.ChambreNumeroChambre,
                        principalTable: "Chambres",
                        principalColumn: "NumeroChambre",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Reservations_SallesReunion_SalleReunionNumeroSalle",
                        column: x => x.SalleReunionNumeroSalle,
                        principalTable: "SallesReunion",
                        principalColumn: "NumeroSalle",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Reservations_Utilisateurs_UtilisateurNumeroUser",
                        column: x => x.UtilisateurNumeroUser,
                        principalTable: "Utilisateurs",
                        principalColumn: "NumeroUser",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_ChambreNumeroChambre",
                table: "Reservations",
                column: "ChambreNumeroChambre");

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_SalleReunionNumeroSalle",
                table: "Reservations",
                column: "SalleReunionNumeroSalle");

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_UtilisateurNumeroUser",
                table: "Reservations",
                column: "UtilisateurNumeroUser");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Reservations");

            migrationBuilder.DropTable(
                name: "Chambres");

            migrationBuilder.DropTable(
                name: "SallesReunion");

            migrationBuilder.DropTable(
                name: "Utilisateurs");
        }
    }
}
