import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonajeInterface } from '../interface/personaje-interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  private urlBase = "http://localhost:3000/personajes";
  private http = inject(HttpClient);

  getPersonajes():Observable<PersonajeInterface[]>{
    return this.http.get<PersonajeInterface[]>(this.urlBase);
  }
  getPersonajeById(idPersonaje:string):Observable<PersonajeInterface>{
    return this.http.get<PersonajeInterface>(`${this.urlBase}/${idPersonaje}`);
  }

  postPersonaje(personaje:PersonajeInterface):Observable<PersonajeInterface>{
    return this.http.post<PersonajeInterface>(this.urlBase,personaje);
  }

  putPersonajeById(idPersonaje:string,personaje:PersonajeInterface):Observable<PersonajeInterface>{
    return this.http.put<PersonajeInterface>(`${this.urlBase}/${idPersonaje}`,personaje);
  }
  deletePersonajeById(idPersonaje:string,):Observable<PersonajeInterface>{
    return this.http.delete<PersonajeInterface>(`${this.urlBase}/${idPersonaje}`);
  }

}
