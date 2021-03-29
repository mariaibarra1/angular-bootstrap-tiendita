import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { ComponetsModule } from './Components/componets.module';
import { CanastaComponent } from './pages/canasta/canasta.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CanastaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ComponetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
