import {Component, OnInit, ViewChild} from '@angular/core';
// import {MatSort} from '@angular/material/sort';
// import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  _id: string;
  names: string;
  state: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {_id:'aaa', names: 'c1, c2, c3', state: 'exited / running'},
  {_id:'aaa', names: 'c1, c2, c3', state: 'exited / running'},
  {_id:'aaa', names: 'c1, c2, c3', state: 'exited / running'},
  {_id:'aaa', names: 'c1, c2, c3', state: 'exited / running'},
  {_id:'aaa', names: 'c1, c2, c3', state: 'exited / running'},
  {_id:'aaa', names: 'c1, c2, c3', state: 'exited / running'},
  {_id:'aaa', names: 'c1, c2, c3', state: 'exited / running'},
  {_id:'aaa', names: 'c1, c2, c3', state: 'exited / running'},
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
  dataSource = ELEMENT_DATA;

  ngOnInit() {
  }
}

