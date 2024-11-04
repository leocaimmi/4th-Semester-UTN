import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajeService } from '../../service/personaje.service';
import { PersonajeInterface } from '../../interface/personaje-interface';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute,private ruta:Router) { }

  personaje:PersonajeInterface = {name:'',alias:'',powers:'',description:''};
  personajeService:PersonajeService = inject(PersonajeService);
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.personajeService.getPersonajeById(id).subscribe({
        next:(response) =>{
          console.log(response);
          this.personaje = response;
        },
        error:(error) =>{
          console.error(error);
        }
      })
    }
  }

  volverAlMenu(){
    this.ruta.navigate(["/"]);
  }
  editarPersonaje(){
    this.ruta.navigate([`/add-character/${this.personaje.id}`]);
  }
}
