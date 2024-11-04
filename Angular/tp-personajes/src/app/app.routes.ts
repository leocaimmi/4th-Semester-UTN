import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterFormComponent } from './components/character-form/character-form.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

export const routes: Routes = [
  {
    path:"characters",
    component:CharacterListComponent
  },
  {
    path:"characters/:id",
    component:CharacterDetailComponent
  },
  {
    path:"add-character",
    component:CharacterFormComponent
  },
  {
    path:"add-character/:id",
    component:CharacterFormComponent
  },
  {
    path:"**",
    component:CharacterListComponent
  }];
