using System;

namespace API.Models
{
    public class Filme
    {
        public Filme()
        {
            this.CriadoEm = DateTime.Now;
        }
        public int Id { get; set; }
        public string nome { get; set; }
        public string sinopse { get; set; }
        public int duracao { get; set; }
        public string Categoria { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}