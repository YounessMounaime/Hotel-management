using System.ComponentModel.DataAnnotations;
using Gestion_Hotel.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Http.HttpResults;

namespace Gestion_Hotel.Models
{
    public class Utilisateur
    {
        [Key]
        public int NumeroUser { get; set; }
        public string NomUser { get; set; }
        public string PrenomUser { get; set; }
        public string TelUser { get; set; }
        public string AdresseUser { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public ICollection<Reservation> Reservations { get; set; }
    }


public static class UtilisateurEndpoints
{
	public static void MapUtilisateurEndpoints (this IEndpointRouteBuilder routes)
    {
        var group = routes.MapGroup("/api/Utilisateur").WithTags(nameof(Utilisateur));

        group.MapGet("/", async (ApplicationDbContext db) =>
        {
            return await db.Utilisateurs.ToListAsync();
        })
        .WithName("GetAllUtilisateurs")
        .WithOpenApi();

        group.MapGet("/{id}", async Task<Results<Ok<Utilisateur>, NotFound>> (int numerouser, ApplicationDbContext db) =>
        {
            return await db.Utilisateurs.AsNoTracking()
                .FirstOrDefaultAsync(model => model.NumeroUser == numerouser)
                is Utilisateur model
                    ? TypedResults.Ok(model)
                    : TypedResults.NotFound();
        })
        .WithName("GetUtilisateurById")
        .WithOpenApi();

        group.MapPut("/{id}", async Task<Results<Ok, NotFound>> (int numerouser, Utilisateur utilisateur, ApplicationDbContext db) =>
        {
            var affected = await db.Utilisateurs
                .Where(model => model.NumeroUser == numerouser)
                .ExecuteUpdateAsync(setters => setters
                 // .SetProperty(m => m.NumeroUser, utilisateur.NumeroUser)
                  .SetProperty(m => m.NomUser, utilisateur.NomUser)
                  .SetProperty(m => m.PrenomUser, utilisateur.PrenomUser)
                  .SetProperty(m => m.TelUser, utilisateur.TelUser)
                  .SetProperty(m => m.AdresseUser, utilisateur.AdresseUser)
                  .SetProperty(m => m.Email, utilisateur.Email)
                  .SetProperty(m => m.Password, utilisateur.Password)
                  .SetProperty(m => m.Role, utilisateur.Role)
                  );
            return affected == 1 ? TypedResults.Ok() : TypedResults.NotFound();
        })
        .WithName("UpdateUtilisateur")
        .WithOpenApi();


        group.MapPost("/", async (Utilisateur utilisateur, ApplicationDbContext db) =>
        {
            db.Utilisateurs.Add(utilisateur);
            await db.SaveChangesAsync();
            return TypedResults.Created($"/api/Utilisateur/{utilisateur.NumeroUser}",utilisateur);
        })
        .WithName("CreateUtilisateur")
        .WithOpenApi();

        group.MapDelete("/{id}", async Task<Results<Ok, NotFound>> (int numerouser, ApplicationDbContext db) =>
        {
            var affected = await db.Utilisateurs
                .Where(model => model.NumeroUser == numerouser)
                .ExecuteDeleteAsync();
            return affected == 1 ? TypedResults.Ok() : TypedResults.NotFound();
        })
        .WithName("DeleteUtilisateur")
        .WithOpenApi();


            group.MapPost("/login", async Task<Results<Ok<Utilisateur>, NotFound>> (string email, string password, ApplicationDbContext db) =>
            {
                var user = await db.Utilisateurs
                    .FirstOrDefaultAsync(u => u.Email == email && u.Password == password);

                if (user != null)
                {
                    string userRole = user.Role;

                    if (userRole == "Admin")
                    {
                        return TypedResults.Ok(user);
                    }
                    else
                    {
                        return TypedResults.NotFound(); 
                    }
                }
                else
                {
                    return TypedResults.NotFound();
                }
            })
            .WithName("UserLogin")
            .WithOpenApi();


            group.MapPost("/loginClt", async Task<Results<Ok<Utilisateur>, NotFound>> (string email, string password, ApplicationDbContext db) =>
            {
                var user = await db.Utilisateurs
                    .FirstOrDefaultAsync(u => u.Email == email && u.Password == password);

                if (user != null)
                {
                    string userRole = user.Role;

                    if (userRole != "Admin")
                    {
                        return TypedResults.Ok(user);
                    }
                    else
                    {
                        return TypedResults.NotFound();
                    }
                }
                else
                {
                    return TypedResults.NotFound();
                }
            })
        .WithName("UserLoginclt")
        .WithOpenApi();




        }




    }
}
