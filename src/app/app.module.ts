import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesUtilitairesComponent } from './pages-utilitaires/pages-utilitaires.component';
import { PageAccueilComponent } from './pages-utilitaires/page-accueil/page-accueil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './pages-utilitaires/page-not-found/page-not-found.component';
import { PageInitialeComponent } from './pages-utilitaires/page-initiale/page-initiale.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { LivresComponent } from './livres/livres.component';
import { ListeLivresComponent } from './livres/liste-livres/liste-livres.component';
import { AjouterLivresComponent } from './livres/ajouter-livres/ajouter-livres.component';
import { SupprimerLivresComponent } from './livres/supprimer-livres/supprimer-livres.component';
import { AchatComponent } from './achat/achat.component';
import { PageAchatComponent } from './achat/page-achat/page-achat.component';
import { LivresDisponiblesComponent } from './achat/livres-disponibles/livres-disponibles.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesUtilitairesComponent,
    PageAccueilComponent,
    PageNotFoundComponent,
    PageInitialeComponent,
    LivresComponent,
    ListeLivresComponent,
    AjouterLivresComponent,
    SupprimerLivresComponent,
    AchatComponent,
    PageAchatComponent,
    LivresDisponiblesComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
