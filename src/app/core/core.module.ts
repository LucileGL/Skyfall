import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { UiModule } from '../ui/ui.module';
import { TemplatesModule } from '../templates/templates.module';



@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiModule,
    TemplatesModule,
    FooterComponent,
    NavComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
