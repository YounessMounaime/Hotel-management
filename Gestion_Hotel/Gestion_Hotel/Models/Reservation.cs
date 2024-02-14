using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;

namespace Gestion_Hotel.Models
{

    public class Reservation
    {
        [Key]
        public int NumeroReservation { get; set; }
        public DateTime DateDebut { get; set; }
        public DateTime DateFin { get; set; }
    

        // Clés étrangères

        [ForeignKey("NumeroChambre")]
        public int? NumeroChambre { get; set; }
        public  Chambre? Chambre { get; set; }

        [ForeignKey("NumeroSalle")]       
        public int? NumeroSalle { get; set; }
        public  SalleReunion? SalleReunion { get; set; }

        [ForeignKey("NumeroUser")]
     
       
        public int? NumeroUser { get; set; }
        public Utilisateur? Utilisateur { get; set; }
    }

    public static class ReservationEndpoints
    {
        public static void MapReservationEndpoints(this IEndpointRouteBuilder routes)
        {
            var group = routes.MapGroup("/api/Reservation").WithTags(nameof(Reservation));

            group.MapGet("/", async (ApplicationDbContext db) =>
            {
                var reservations = await db.Reservations.ToListAsync();
                return Results.Ok(reservations);
            })
            .WithName("GetAllReservations")
            .WithOpenApi();

            group.MapGet("/{id}", async (int numeroReservation, ApplicationDbContext db) =>
            {
                var reservation = await db.Reservations
                    .AsNoTracking()
                    .FirstOrDefaultAsync(m => m.NumeroReservation == numeroReservation);

                return reservation != null ? Results.Ok(reservation) : Results.NotFound();
            })
            .WithName("GetReservationById")
            .WithOpenApi();

            group.MapPut("/{id}", async (int numeroReservation, Reservation reservation, ApplicationDbContext db) =>
            {
                // Vérifier si l'utilisateur existe
                var userExists = await db.Utilisateurs.AnyAsync(u => u.NumeroUser == reservation.NumeroUser);
                if (!userExists)
                {
                    return Results.NotFound("L'utilisateur n'existe pas.");
                }

                // Vérifier si la réservation existe
                var existingReservation = await db.Reservations.FindAsync(numeroReservation);
                if (existingReservation == null)
                {
                    return Results.NotFound("La réservation n'existe pas.");
                }

                // Vérifier si la salle ou la chambre existe avant de mettre à jour la réservation
                if (reservation.NumeroSalle != null)
                {
                    var salleExists = await db.SallesReunion.AnyAsync(s => s.NumeroSalle == reservation.NumeroSalle);
                    if (!salleExists)
                    {
                        return Results.NotFound("La salle n'existe pas.");
                    }

                    // Vérifier si la salle est disponible pour la réservation à la date spécifiée
                    var salleIsAvailable = await db.Reservations
                        .Where(r => r.NumeroSalle == reservation.NumeroSalle &&
                                    r.NumeroReservation != numeroReservation &&
                                    ((r.DateDebut <= reservation.DateDebut && r.DateFin >= reservation.DateDebut) ||
                                     (r.DateDebut <= reservation.DateFin && r.DateFin >= reservation.DateFin) ||
                                     (r.DateDebut >= reservation.DateDebut && r.DateFin <= reservation.DateFin)))
                        .CountAsync() == 0;

                    if (!salleIsAvailable)
                    {
                        return Results.BadRequest("La salle n'est pas disponible à la date spécifiée.");
                    }
                }
                else if (reservation.NumeroChambre != null)
                {
                    var chambreExists = await db.Chambres.AnyAsync(c => c.NumeroChambre == reservation.NumeroChambre);
                    if (!chambreExists)
                    {
                        return Results.NotFound("La chambre n'existe pas.");
                    }

                    // Vérifier si la chambre est disponible pour la réservation à la date spécifiée
                    var chambreIsAvailable = await db.Reservations
                        .Where(r => r.NumeroChambre == reservation.NumeroChambre &&
                                    r.NumeroReservation != numeroReservation &&
                                    ((r.DateDebut <= reservation.DateDebut && r.DateFin >= reservation.DateDebut) ||
                                     (r.DateDebut <= reservation.DateFin && r.DateFin >= reservation.DateFin) ||
                                     (r.DateDebut >= reservation.DateDebut && r.DateFin <= reservation.DateFin)))
                        .CountAsync() == 0;

                    if (!chambreIsAvailable)
                    {
                        return Results.BadRequest("La chambre n'est pas disponible à la date spécifiée.");
                    }
                }

                // Mettre à jour les autres propriétés de la réservation
                existingReservation.DateDebut = reservation.DateDebut;
                existingReservation.DateFin = reservation.DateFin;
                existingReservation.NumeroChambre = reservation.NumeroChambre;
                existingReservation.NumeroSalle = reservation.NumeroSalle;
                existingReservation.NumeroUser = reservation.NumeroUser;

                await db.SaveChangesAsync();

                return Results.Ok();
            })
     .WithName("UpdateReservation")
     .WithOpenApi();

            group.MapPost("/", async (Reservation reservation, ApplicationDbContext db) =>
            {
                bool isReservationForSalle = reservation.NumeroSalle.HasValue && reservation.NumeroSalle != 0;
                bool isReservationForChambre = reservation.NumeroChambre.HasValue && reservation.NumeroChambre != 0;

                // Vérifier si l'utilisateur existe
                var userExists = await db.Utilisateurs.AnyAsync(u => u.NumeroUser == reservation.NumeroUser);
                if (!userExists)
                {
                    return Results.NotFound("L'utilisateur n'existe pas.");
                }

                // Vérifier si la salle ou la chambre existe avant d'ajouter la réservation
                if (isReservationForSalle)
                {
                    var salleExists = await db.SallesReunion.AnyAsync(s => s.NumeroSalle == reservation.NumeroSalle);
                    if (!salleExists)
                    {
                        return Results.NotFound("La salle n'existe pas.");
                    }

                    // Vérifier si la salle est disponible pour la réservation à la date spécifiée
                    var salleIsAvailable = await db.Reservations
                        .Where(r => r.NumeroSalle == reservation.NumeroSalle &&
                                    ((r.DateDebut <= reservation.DateDebut && r.DateFin >= reservation.DateDebut) ||
                                     (r.DateDebut <= reservation.DateFin && r.DateFin >= reservation.DateFin) ||
                                     (r.DateDebut >= reservation.DateDebut && r.DateFin <= reservation.DateFin)))
                        .CountAsync() == 0;

                    if (!salleIsAvailable)
                    {
                        return Results.BadRequest("La salle n'est pas disponible à la date spécifiée.");
                    }
                }
                else if (isReservationForChambre)
                {
                    var chambreExists = await db.Chambres.AnyAsync(c => c.NumeroChambre == reservation.NumeroChambre);
                    if (!chambreExists)
                    {
                        return Results.NotFound("La chambre n'existe pas.");
                    }

                    // Vérifier si la chambre est disponible pour la réservation à la date spécifiée
                    var chambreIsAvailable = await db.Reservations
                        .Where(r => r.NumeroChambre == reservation.NumeroChambre &&
                                    ((r.DateDebut <= reservation.DateDebut && r.DateFin >= reservation.DateDebut) ||
                                     (r.DateDebut <= reservation.DateFin && r.DateFin >= reservation.DateFin) ||
                                     (r.DateDebut >= reservation.DateDebut && r.DateFin <= reservation.DateFin)))
                        .CountAsync() == 0;

                    if (!chambreIsAvailable)
                    {
                        return Results.BadRequest("La chambre n'est pas disponible à la date spécifiée.");
                    }
                }
                else
                {
                    // Ni salle ni chambre spécifiée dans la réservation
                    return Results.BadRequest("Veuillez spécifier une salle ou une chambre pour la réservation.");
                }

            

                db.Reservations.Add(reservation);
                await db.SaveChangesAsync();
                return Results.Created($"/api/Reservation/{reservation.NumeroReservation}", reservation);
            })
      .WithName("CreateReservation")
      .WithOpenApi();





            group.MapDelete("/{id}", async (int numeroReservation, ApplicationDbContext db) =>
            {
                var affected = await db.Reservations
                    .Where(m => m.NumeroReservation == numeroReservation)
                    .ExecuteDeleteAsync();

                return affected == 1 ? Results.Ok() : Results.NotFound();
            })
            .WithName("DeleteReservation")
            .WithOpenApi();



            group.MapGet("/user/{userId}", async (int userId, ApplicationDbContext db) =>
            {
                var reservations = await db.Reservations
                    .Where(r => r.NumeroUser == userId)
                    .ToListAsync();

                return Results.Ok(reservations);
            })
      .WithName("GetUserReservationsById")
      .WithOpenApi();

           
        




    }
    }

}



