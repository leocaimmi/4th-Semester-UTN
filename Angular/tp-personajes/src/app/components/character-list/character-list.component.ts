import { Component, inject, OnInit } from '@angular/core';
import { PersonajeInterface } from '../../interface/personaje-interface';
import { PersonajeService } from '../../service/personaje.service';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from '../../shared/character-card/character-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {

  ngOnInit(): void {
    this.listarPersonajes();
  }
  constructor(private router: Router) {}
  personajes:PersonajeInterface[] = [];//los personajes van aca
  personajeServicio:PersonajeService = inject(PersonajeService);
  listarPersonajes(){
    this.personajeServicio.getPersonajes().subscribe({
      next:(response) =>{
        this.personajes = [...response];
      },
      error:(error) =>{
        console.error(error);
      }
    })
  }
  agregarPersonaje(){
    this.router.navigate(['/add-character'])
  }

  personajeService:PersonajeService = inject(PersonajeService);
  eliminarPersonaje(personaje:PersonajeInterface){
    console.log("Eliminar"+personaje);
    this.personajeService.deletePersonajeById(personaje.id!).subscribe({
      next:(response) =>{
        console.log(response);
        this.listarPersonajes();
      },
      error:(error) =>{
        console.error(error);
      }
    })
  }
  verDetallePersonaje(personaje:PersonajeInterface){
    this.router.navigate(['/characters', personaje.id]);
    console.log("Detalle"+personaje);
  }
}
