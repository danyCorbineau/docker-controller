import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListComponent } from './create-list.component';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { ScriptsComponent } from '../scripts.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CreateListService } from 'src/app/services/create-list.service';
import {CreateScript} from '../../model/create-script';

describe('CreateListComponent', () => {
  let component: CreateListComponent;
  let fixture: ComponentFixture<CreateListComponent>;
  let createService: CreateListService;

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
        MatButtonModule
      ],
      providers: [
        CreateListService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateListComponent);
    component = fixture.componentInstance;
    createService = TestBed.get(CreateListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not send script',  async (done) => {
    const newScript: CreateScript = {title: '', extension: '', content: ''};
    newScript.title = 'Title false test';
    newScript.extension = 'json';
    newScript.content = '';
    await new Promise((resolve, reject) => {
      createService.add(newScript).subscribe( (res: any) => {
        done.fail(new Error('Should not sucess'))
        console.log(res);
        resolve();
      }, (error) => {
        console.log(error);
        expect(error).toBeDefined();
        expect(error.status).toEqual(403);
        expect(error.error.error).toEqual('Invalid extension');
        done();
      });
    });
  });

  it('should send script',  async (done) => {
    const newScript: CreateScript = new CreateScript();
    newScript.title = 'Title test';
    newScript.extension = 'py';
    newScript.content = 'function(){}';
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
      createService.add(newScript).subscribe( (res: any) => {
        expect(res.data.id).toBeDefined();
        expect(res.data.attributes.name).toEqual(newScript.title);
        done();
      });
    });
  });
});

