import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonajeInterface } from '../../interface/personaje-interface';
import { PersonajeService } from '../../service/personaje.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.css'
})
export class CharacterFormComponent implements OnInit {
  @Input() textoLegend: string = 'Agregar personaje';
  @Input() name: string = 'name';
  @Input() alias: string = 'alias';
  @Input() powers: string = 'powers';
  @Input() description: string = 'description';
  @Input() textoBoton: string = 'Agregar personaje'

  personaje:PersonajeInterface = {name:'',alias:'',powers:'',description:''};
  personajeServicio: PersonajeService = inject(PersonajeService);
  constructor(private router: Router,private route: ActivatedRoute) {}
  formularioPersonaje = new FormGroup({
    name: new FormControl('', Validators.required),
    alias: new FormControl('', Validators.required),
    powers: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  })
  id:string|null = null;
  ngOnInit(): void {
     this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    if(this.id){
      this.personajeServicio.getPersonajeById(this.id).subscribe({
        next:(response)=>{
          console.log(response);
          this.personaje = response;
          this.formularioPersonaje.setValue({
          name:response.name,
          alias:response.alias,
          powers:response.powers,
          description:response.description
          })
        },error:(error)=>{
          console.error(error);
        }
      })
    }
  }

  obtenerPersonaje() {
    const nameForm = this.formularioPersonaje.get('name')?.value || "";
    const aliasForm = this.formularioPersonaje.get('alias')?.value || "";
    const powersForm = this.formularioPersonaje.get('powers')?.value || "";
    const descriptionForm = this.formularioPersonaje.get('description')?.value || "";

    return {
      name: nameForm,
      alias: aliasForm,
      powers: powersForm,
      description: descriptionForm
    }
  }


  onSubmit() {
    if (this.formularioPersonaje.valid) {
      console.log("ANTES: "+this.personaje.id);


      if(this.personaje.id === this.id){
        //hago un put
        this.personaje= this.obtenerPersonaje();
        this.personaje.id = this.id;
        alert("ENTRE");
        this.personajeServicio.putPersonajeById(this.personaje.id,this.personaje).subscribe({
          next:(response)=>{
            console.log(response);
            this.router.navigate(["/"]);
          },
          error:(error)=>{
            console.error(error);
          }
        })
      }else{
        this.personaje= this.obtenerPersonaje();
        this.personajeServicio.postPersonaje(this.personaje).subscribe({
          next: (response) => {
            console.log(response);
            this.router.navigate(["/"]);
          },
          error: (error) => {
            console.error(error);
          }
        })
      }

    }
  }

}
