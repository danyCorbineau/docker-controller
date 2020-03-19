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
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

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
    fixture = TestBed.createComponent(CreateListComponent);
    component = fixture.componentInstance;
    createService = TestBed.inject(CreateListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not send script',  async (done) => {
    const newScript: CreateScript = {title: '', extension: '', content: ''};
    newScript.title = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    newScript.extension = 'json';
    newScript.content = '';
    await new Promise((resolve, reject) => {
      createService.add(newScript).subscribe( (res: any) => {
        done.fail(new Error('Should not sucess'));
        resolve();
      }, (error) => {
        expect(error).toBeDefined();
        expect(error.status).toEqual(403);
        expect(error.error.error).toEqual('Invalid extension');
        done();
      });
    });
  });

  it('should send script',  async (done) => {
    const title = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const newScript: CreateScript = {title, extension: 'py', content: 'function(){}'};
    console.log('should send', newScript);
    try {
      await new Promise(async (resolve, reject) => {
        await new Promise((r) => setTimeout(r, 500));
        const observable = createService.add(newScript);
        observable.subscribe( (res: any) => {
          expect(res.data.id).toBeDefined();
          expect(res.data.attributes.name).toEqual(newScript.title);
          done();
          resolve();
        });
      });
    }  catch (e) {
      console.log('Error on observer');
      done.fail(e);
    }

  });
});

