using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/filme")]
    public class FilmeController : ControllerBase
    {
        private readonly DataContext _context;
        public FilmeController(DataContext context){
            _context = context;
        }

        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Filme filme){
            _context.TabelaFilmes.Add(filme);
            _context.SaveChanges();
            return Created("", filme);
        }

        [HttpGet]
        [Route("list")]
        public IActionResult List(){
            return Ok(_context.TabelaFilmes.ToList());
        }

        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById([FromRoute] int id){
            Filme filme = _context.TabelaFilmes.Find(id);
            if(filme == null){
                return NotFound();
            }
            return Ok(filme);
        }

        [HttpDelete]
        [Route("delete/{id}")]
        public IActionResult Delete([FromRoute] int id){
            Filme filme = _context.TabelaFilmes.FirstOrDefault(
                filme => filme.Id == id
            );
            if(filme == null){
                return NotFound();
            }
            _context.TabelaFilmes.Remove(filme);
            _context.SaveChanges();
            return Ok(filme);
        }

        [HttpPost]
        [Route("update")]
        public IActionResult Update([FromBody] Filme filme){
            _context.TabelaFilmes.Update(filme);
            if(filme == null){
                return NotFound();
            }
            _context.SaveChanges();
            return Ok(filme);
        }
    }
}