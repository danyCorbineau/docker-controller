import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerListComponent } from './container-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import {OverlayModule} from "@angular/cdk/overlay";
import {ContainerService} from "../../services/container.service";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";

async function timeout(ms)
{
  return new Promise((r) => setTimeout(r, ms));
}

describe('ContainerListComponent', () => {
  let component: ContainerListComponent;
  let fixture: ComponentFixture<ContainerListComponent>;

  const CONTAINERS = [
    // tslint:disable-next-line: max-line-length
    {_id: 'EFGH', names: 'Beta', image: 'A', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...'},
    // tslint:disable-next-line: max-line-length
    {_id: 'ABCD', names: 'Alpha', image: 'Z', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...'},];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        OverlayModule,
        MatDialogModule,
        MatSortModule,
        BrowserAnimationsModule,
        MatButtonModule],
      declarations: [ ContainerListComponent ],
      providers: [ContainerService]
    })
    .compileComponents();
    let containerService = TestBed.get(ContainerService);
    spyOn(containerService, 'getContainers').and.returnValue(Promise.resolve(CONTAINERS));
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(ContainerListComponent);
    component = fixture.componentInstance;
    spyOn(component, 'showDataContainer');
    await timeout(200);
    fixture.detectChanges();
    await timeout(200);
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });

  it('test first element in list is ', async () => {
      let row = fixture.debugElement.nativeElement.querySelector('tr[mat-row]');
      row.click();
      await timeout(500);
    expect(component.showDataContainer).toHaveBeenCalled();
  });
});
