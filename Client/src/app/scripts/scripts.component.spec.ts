import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptsComponent } from './scripts.component';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { CreateListComponent } from './create-list/create-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CreateListService } from '../services/create-list.service';
import {MatSnackBarModule} from "@angular/material/snack-bar";

describe('ScriptsComponent', () => {
  let component: ScriptsComponent;
  let fixture: ComponentFixture<ScriptsComponent>;

  beforeEach(async(() => {
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
        MatButtonModule,
        MatSnackBarModule
      ],
      providers: [
        CreateListService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
