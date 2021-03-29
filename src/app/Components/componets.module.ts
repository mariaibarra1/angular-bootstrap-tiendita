import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports:[HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,RouterModule.forRoot([]), AppRoutingModule
  ]
})
export class ComponetsModule { }
