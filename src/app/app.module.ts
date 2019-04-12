import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//needed for templating
import { HttpClientModule } from '@angular/common/http';//needed for ajax
import { RouterModule } from '@angular/router';//needed for routing
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';//need for angular material

import {MatExpansionModule } from '@angular/material';//an angular material component we will use in templating
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material';


import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//needed for templating
import { HttpClientModule } from '@angular/common/http';//needed for ajax
import { RouterModule } from '@angular/router';//needed for routing
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';//need for angular material
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {MatExpansionModule } from '@angular/material';//an angular material component we will use in templating
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatInputModule} from '@angular/material';


import { AppComponent } from './app.component';
import { PokemonComponent} from './pokemon/pokemon.component';
import { PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import { LoginComponent} from './login/login.component';
import {TrainerComponent} from './trainer/trainer.component';
import { HostComponent } from './Host/host.component';

//angular routes
const routes = [
  {path:'anime/:id', component: PokemonDetailComponent, children : [
    {path:'details', component: HostComponent }
  ] },
  {path:'trainer', component: TrainerComponent},//new route for trainer info
  {path: "**", redirectTo: '/anime/1'},
  

];

@NgModule({
  imports:[ 
      BrowserModule, 
      FormsModule,
      BrowserAnimationsModule,//dependency for angular material
      MatExpansionModule,//our new ui component
	    HttpClientModule,//import our ajax module
      RouterModule.forRoot(routes),//add our routes to the application
      MatToolbarModule,
      MatGridListModule,//added new module for layout
      MatCardModule,//added card module,
      MatButtonModule,
      MatListModule,
      MatPaginatorModule,
      MatDialogModule,
      MatInputModule
  ],
  entryComponents: [AppComponent, LoginComponent, PokemonDetailComponent],
  declarations: [ 
    AppComponent, 
    PokemonComponent,
    PokemonDetailComponent,
    LoginComponent,
    TrainerComponent,
    HostComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }




