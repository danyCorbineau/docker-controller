import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateListComponent } from './scripts/create-list/create-list.component';
import { ContainerListComponent } from './scripts/container-list/container-list.component';
import { ScriptsComponent } from './scripts/scripts.component';

// materielAngular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateListService } from './services/create-list.service';
// import {MatSort} from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';

import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateListComponent,
    ScriptsComponent,
    ContainerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // MatSort,
    // MatTableDataSource,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule


  ],
  providers: [
    CreateListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
