using Microsoft.EntityFrameworkCore;

namespace Gestion_Hotel.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Utilisateur> Utilisateurs { get; set; }
        public DbSet<Chambre> Chambres { get; set; }
        public DbSet<SalleReunion> SallesReunion { get; set; }
        public DbSet<Reservation> Reservations { get; set; }

    }
}
