import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {ContainerComponent} from '../container/container.component';
import {Container} from '../../model/container';

const ELEMENT_DATA: Container[] = [
  {_id: '123', names: 'abc', image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...'},
  {_id: '456', names: 'def', image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...'},
  {_id: '789', names: 'ghi', image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...'},
  {_id: '101', names: 'klm', image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...'},
  {_id: '112', names: 'nop', image: 'img', state: 'running', ports: ['123:567', '789:1011'], created: 1583508175, status: 'looking for ...'},
];

/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-container-list',
  templateUrl: './container-list.component.html',
  styleUrls: ['./container-list.component.scss']
})
export class ContainerListComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'names', 'state'];
  dataSource = new MatTableDataSource<Container>();
  dialog: MatDialog;

  @ViewChild(MatSort) sort: MatSort;

  constructor(public popup: MatDialog) {
    this.dataSource.data = [];
    this.dialog = popup;
  }

  showDataContainer(row) {
    const dialogRef = this.dialog.open(ContainerComponent, {
      width: '250px',
      data: row,
    });
  }

  loadData() {
    this.dataSource.data = ELEMENT_DATA;
    console.log('LoadData')
  }

  ngOnInit() {
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}

