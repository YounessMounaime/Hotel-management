using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace Gestion_Hotel.Models
{
    public class SalleReunion
    {
        [Key]
        public int NumeroSalle { get; set; }
        public int NumeroEtage { get; set; }
        public int Capacite { get; set; }
        public string UrlImage { get; set; }
        public float prix_SR { get; set; }
        public ICollection<Reservation> Reservations { get; set; }
    }


    public static class SalleReunionEndpoints
    {
        public static void MapSalleReunionEndpoints(this IEndpointRouteBuilder routes)
        {
            var group = routes.MapGroup("/api/SalleReunion").WithTags(nameof(SalleReunion));

            group.MapGet("/", async (ApplicationDbContext db) =>
            {
                return await db.SallesReunion.ToListAsync();
            })
            .WithName("GetAllSalleReunions")
            .WithOpenApi();

            group.MapGet("/{id}", async Task<Results<Ok<SalleReunion>, NotFound>> (int numerosalle, ApplicationDbContext db) =>
            {
                return await db.SallesReunion.AsNoTracking()
                    .FirstOrDefaultAsync(model => model.NumeroSalle == numerosalle)
                    is SalleReunion model
                        ? TypedResults.Ok(model)
                        : TypedResults.NotFound();
            })
            .WithName("GetSalleReunionById")
            .WithOpenApi();

            group.MapPut("/{id}", async Task<Results<Ok, NotFound>> (int numerosalle, SalleReunion salleReunion, ApplicationDbContext db) =>
            {
                var affected = await db.SallesReunion
                    .Where(model => model.NumeroSalle == numerosalle)
                    .ExecuteUpdateAsync(setters => setters
                        .SetProperty(m => m.NumeroEtage, salleReunion.NumeroEtage)
                        .SetProperty(m => m.Capacite, salleReunion.Capacite)
                        .SetProperty(m => m.UrlImage, salleReunion.UrlImage)
                          .SetProperty(m => m.prix_SR, salleReunion.prix_SR)
                    );
                return affected == 1 ? TypedResults.Ok() : TypedResults.NotFound();
            })
            .WithName("UpdateSalleReunion")
            .WithOpenApi();

            group.MapPost("/", async (SalleReunion salleReunion, ApplicationDbContext db) =>
            {
                db.SallesReunion.Add(salleReunion);
                await db.SaveChangesAsync();
                return TypedResults.Created($"/api/SalleReunion/{salleReunion.NumeroSalle}", salleReunion);
            })
            .WithName("CreateSalleReunion")
            .WithOpenApi();

            group.MapDelete("/{id}", async Task<Results<Ok, NotFound>> (int numerosalle, ApplicationDbContext db) =>
            {
                var affected = await db.SallesReunion
                    .Where(model => model.NumeroSalle == numerosalle)
                    .ExecuteDeleteAsync();
                return affected == 1 ? TypedResults.Ok() : TypedResults.NotFound();
            })
            .WithName("DeleteSalleReunion")
            .WithOpenApi();
        }
    }
}