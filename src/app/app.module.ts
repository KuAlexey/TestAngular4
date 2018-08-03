import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './loginPage/login.component';
import { MapComponent } from './homePage/app-map';
import { FormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
//import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA3jd636bBrRo6a8IZ5LnHtKpjE1aFnmQM'
    }),
   // HttpClientModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
