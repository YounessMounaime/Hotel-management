using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace Gestion_Hotel.Models
{
    public class Chambre
    {
        [Key]
        public int NumeroChambre { get; set; }
        public string Etat { get; set; }
        public string TypeChambre { get; set; }
        public int Capacite { get; set; }
        public string NumeroTel { get; set; }
        public int NumeroEtage { get; set; }
        public float prix_chambre { get; set; }
        public string UrlImage { get; set; }
        public ICollection<Reservation> Reservations { get; set; }
    }


    public static class ChambreEndpoints
    {
        public static void MapChambreEndpoints(this IEndpointRouteBuilder routes)
        {
            var group = routes.MapGroup("/api/Chambre").WithTags(nameof(Chambre));

            group.MapGet("/", async (ApplicationDbContext db) =>
            {
                return await db.Chambres.ToListAsync();
            })
            .WithName("GetAllChambres")
            .WithOpenApi();

            group.MapGet("/{id}", async Task<Results<Ok<Chambre>, NotFound>> (int numerochambre, ApplicationDbContext db) =>
            {
                return await db.Chambres.AsNoTracking()
                    .FirstOrDefaultAsync(model => model.NumeroChambre == numerochambre)
                    is Chambre model
                        ? TypedResults.Ok(model)
                        : TypedResults.NotFound();
            })
            .WithName("GetChambreById")
            .WithOpenApi();

            group.MapPut("/{id}", async Task<Results<Ok, NotFound>> (int numerochambre, Chambre chambre, ApplicationDbContext db) =>
            {
                var affected = await db.Chambres
                    .Where(model => model.NumeroChambre == numerochambre)
                    .ExecuteUpdateAsync(setters => setters
                        .SetProperty(m => m.Etat, chambre.Etat)
                        .SetProperty(m => m.TypeChambre, chambre.TypeChambre)
                        .SetProperty(m => m.Capacite, chambre.Capacite)
                        .SetProperty(m => m.NumeroTel, chambre.NumeroTel)
                        .SetProperty(m => m.NumeroEtage, chambre.NumeroEtage)
                        .SetProperty(m => m.UrlImage, chambre.UrlImage)
                          .SetProperty(m => m.prix_chambre, chambre.prix_chambre)
                    );
                return affected == 1 ? TypedResults.Ok() : TypedResults.NotFound();
            })
            .WithName("UpdateChambre")
            .WithOpenApi();

            group.MapPost("/", async (Chambre chambre, ApplicationDbContext db) =>
            {
                db.Chambres.Add(chambre);
                await db.SaveChangesAsync();
                return TypedResults.Created($"/api/Chambre/{chambre.NumeroChambre}", chambre);
            })
            .WithName("CreateChambre")
            .WithOpenApi();

            group.MapDelete("/{id}", async Task<Results<Ok, NotFound>> (int numerochambre, ApplicationDbContext db) =>
            {
                var affected = await db.Chambres
                    .Where(model => model.NumeroChambre == numerochambre)
                    .ExecuteDeleteAsync();
                return affected == 1 ? TypedResults.Ok() : TypedResults.NotFound();
            })
            .WithName("DeleteChambre")
            .WithOpenApi();
        }
    }
}