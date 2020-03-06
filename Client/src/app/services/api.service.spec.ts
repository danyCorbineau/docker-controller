import { TestBed } from '@angular/core/testing';
import { CreateScript } from '../model/create-script';

import { ApiService } from './api.service';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { CreateListComponent } from '../scripts/create-list/create-list.component';
import { ScriptsComponent } from '../scripts/scripts.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CreateListService } from './create-list.service';

describe('ApiService', () => {
  let service: ApiService<CreateScript>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        CreateListComponent,
        ScriptsComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule
      ],
      providers: [
        CreateListService
      ],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
