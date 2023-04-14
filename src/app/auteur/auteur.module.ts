import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuteurRoutingModule } from './auteur-routing.module';
import { AjouterAuteurComponent } from './ajouter-auteur/ajouter-auteur.component';
import { SupprimerAuteurComponent } from './supprimer-auteur/supprimer-auteur.component';
import { ListeAuteurComponent } from './liste-auteur/liste-auteur.component';
import { RechercherAuteurComponent } from './rechercher-auteur/rechercher-auteur.component';


@NgModule({
  declarations: [
    AjouterAuteurComponent,
    SupprimerAuteurComponent,
    ListeAuteurComponent,
    RechercherAuteurComponent
  ],
  imports: [
    CommonModule,
    AuteurRoutingModule
  ]
})
export class AuteurModule { }
