import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandingsService } from './services/standings.service';
import { DetailStandingsComponent } from './standings/detail-standings/detail-standings.component';
import { StandingsComponent } from './standings/standings/standings.component';
import { HeaderComponent } from './header/header/header.component';
import { ImgResizerDirective } from './directives/img-resizer.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StandingsComponent,
    DetailStandingsComponent,
    ImgResizerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StandingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
