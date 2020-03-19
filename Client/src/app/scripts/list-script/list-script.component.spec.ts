import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { ListScriptComponent } from './list-script.component';
import {MatTableModule} from '@angular/material/table';
import {OverlayModule} from '@angular/cdk/overlay';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CreateListService} from '../../services/create-list.service';
import {EditDialogComponent} from '../../edit-dialog/edit-dialog.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';

async function timeout(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

describe('ListScriptComponent', () => {
  let component: ListScriptComponent;
  let fixture: ComponentFixture<ListScriptComponent>;
  let service: CreateListService;
  let dialog: MatDialog;

  const items = [
    {
      id: '5e6a4c99c9241d2698c649b5',
      name: 'Test name',
      ext: 'py',
      content: 'Super script'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        OverlayModule,
        MatDialogModule,
        MatSortModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatSnackBarModule
      ],
      declarations: [ ListScriptComponent, EditDialogComponent ],
      providers: [HttpClient, CreateListService,
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: items[0]},
        FormBuilder],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
    service = TestBed.inject(CreateListService);
    dialog = TestBed.inject(MatDialog);
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(ListScriptComponent);
    component = fixture.componentInstance;
    component.dataSource.data = items;
    spyOn(component, 'openDialog');
    spyOn(component, 'deleteScript');
    spyOn(component, 'openSnackBar');
    await timeout(200);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return scripts ', async (done) => {
    await timeout(1000);
    const table = fixture.debugElement.nativeElement.querySelector('table[data-type="scripts"]');
    expect(table).toBeDefined();
    await timeout(1000);
    fixture.detectChanges();
    done();
  });

  it('should click on row item', async (done) => {
    const row = fixture.debugElement.nativeElement.querySelector('tr[mat-row]');
    if (row !== null) {
      console.log(row);
      row.click();
      // component.openDialog(items[0]);
      await timeout(500);
      fixture.detectChanges();
      expect(component.openDialog).toHaveBeenCalled();
      done();
    } else {
      setInterval(async () => {
        console.log(row);
        if (row !== null) {
          // component.openDialog(items[0]);
          row.click();
          await timeout(200);
          fixture.detectChanges();
          expect(component.openDialog).toHaveBeenCalled();
          clearInterval();
          done();
        }
      }, 50);
    }
  });
  it('should be deleted', async () => {
    const btn = fixture.debugElement.nativeElement.querySelector('.btn-delete');
    btn.click();
    await timeout(200);
    fixture.detectChanges();
    expect(component.deleteScript).toHaveBeenCalledWith(new MouseEvent('click'), '5e6a4c99c9241d2698c649b5');
    expect(component.openSnackBar).toHaveBeenCalledWith('Le script a été supprimé', 'OK');
  });

  /*describe('Test modal functions', () => {
    let componentDialog: EditDialogComponent;
    let fixtureDialog: ComponentFixture<EditDialogComponent>;

    beforeEach(async () => {
      /!*TestBed.configureTestingModule({
        imports: [
          OverlayModule,
          MatDialogModule,
        ],
        declarations: [EditDialogComponent],
        providers: [MatDialogRef]
      }).compileComponents();*!/
      fixtureDialog = TestBed.createComponent(EditDialogComponent);
      componentDialog = fixtureDialog.componentInstance;
      spyOn(componentDialog, 'getFormData');
      await timeout(200);
      fixture.detectChanges();
    });

    it('should not update script ', async (done) => {
      const cancel = fixture.debugElement.nativeElement.querySelector('.cancel');
      console.log(cancel);
      cancel.click();
      await timeout(500);
      await expect(service.update).not.toHaveBeenCalled();
      done();
    });

    it('should update script ', async (done) => {
      const confirm = fixture.debugElement.nativeElement.querySelector('.valid');
      confirm.click();
      await timeout(500);
      expect(service.update).toHaveBeenCalled();
      done();
    });
  });*/
});
