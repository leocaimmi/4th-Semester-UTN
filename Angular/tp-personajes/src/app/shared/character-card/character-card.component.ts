import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PersonajeInterface } from '../../interface/personaje-interface';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {

@Input() personsaje: PersonajeInterface= {name:'',alias:'',powers:'',description:''};
@Output() eliminarPersonaje = new EventEmitter<PersonajeInterface>();
@Output() verDetalle = new EventEmitter<PersonajeInterface>();

onEliminar(){
  this.eliminarPersonaje.emit(this.personsaje);
}
onVerDetalle(){
  this.verDetalle.emit(this.personsaje);
}

}
