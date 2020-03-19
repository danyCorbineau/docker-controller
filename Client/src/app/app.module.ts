import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxJsonapiModule } from 'ngx-jsonapi';
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
import { ApiService } from './services/api.service';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateListService } from './services/create-list.service';
import {MatTableModule} from '@angular/material/table';

import {MatButtonModule} from '@angular/material/button';
import { ContainerComponent } from './scripts/container/container.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { ListScriptComponent } from './scripts/list-script/list-script.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateListComponent,
    ScriptsComponent,
    ContainerListComponent,
    ContainerComponent,
    ListScriptComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    ReactiveFormsModule,
    NgxJsonapiModule.forRoot({
      url: '//localhost:3000/'
    })
  ],
  providers: [
    CreateListService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
