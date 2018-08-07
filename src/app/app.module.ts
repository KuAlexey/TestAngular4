import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/loginPage/login.component';
import { MapComponent } from './pages/homePage/app-map.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyASO-lw6_AwXm2gjzyXY0nPzPcfOf46rLg'
    }),
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
