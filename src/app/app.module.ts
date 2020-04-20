import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { utilities } from './utilities/utilities.module'
import {routing} from './app.route'
import { AppComponent } from './app.component';
import { PandemicMapComponent } from './pandemic-map/pandemic-map.component';
import {HttpClientModule} from '@angular/common/http'
import { UsMapModule } from 'angular-us-map';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {UtilitiesModule} from './utilities/utilities.module'
@NgModule({
  declarations: [
    AppComponent,
    PandemicMapComponent
  ],
  imports: [
    routing,
    MatToolbarModule,
    UtilitiesModule,
    MatIconModule,
    UsMapModule, 
    HttpClientModule,
    BrowserModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
