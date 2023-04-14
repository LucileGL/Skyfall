import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterAuteurComponent } from './auteur/ajouter-auteur/ajouter-auteur.component';
import { RechercherAuteurComponent } from './auteur/rechercher-auteur/rechercher-auteur.component';
import { PageAccueilComponent } from './pages-utilitaires/page-accueil/page-accueil.component';
import { PageNotFoundComponent } from './pages-utilitaires/page-not-found/page-not-found.component';
import { PageInitialeComponent } from './pages-utilitaires/page-initiale/page-initiale.component';
import { ListeAuteurComponent } from './auteur/liste-auteur/liste-auteur.component';
import { SupprimerLivresComponent } from './livres/supprimer-livres/supprimer-livres.component';
import { AjouterLivresComponent } from './livres/ajouter-livres/ajouter-livres.component';
import { ListeLivresComponent } from './livres/liste-livres/liste-livres.component';
import { LivresDisponiblesComponent } from './achat/livres-disponibles/livres-disponibles.component';
import { PageAchatComponent } from './achat/page-achat/page-achat.component';

const routes: Routes = [
  {path: '', component: PageInitialeComponent },
  {path: 'bienvenue', component: PageAccueilComponent },

  // Routes auteur
  {path: 'liste-auteur', component: ListeAuteurComponent },
  {path: 'ajouter-auteur', component: AjouterAuteurComponent },
  {path: 'rechercher-auteur', component: RechercherAuteurComponent},

  // Routes livres
  {path: 'ajouter-livre', component: AjouterLivresComponent},
  {path: 'liste-livre', component: ListeLivresComponent },
  {path: 'supprimer-livre', component: SupprimerLivresComponent},

  // Routes achat
  {path: 'livres-disponibles', component: LivresDisponiblesComponent},
  {path: 'panier', component: PageAchatComponent},

  // Route 404
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
