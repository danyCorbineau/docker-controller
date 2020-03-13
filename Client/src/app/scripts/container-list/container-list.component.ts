import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {ContainerComponent} from '../container/container.component';
import {Container} from '../../model/container';
import {ContainerService} from "../../services/container.service";

/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-container-list',
  templateUrl: './container-list.component.html',
  styleUrls: ['./container-list.component.scss']
})
export class ContainerListComponent implements OnInit {
  displayedColumns: string[] = ['unique_id', 'names', 'state'];
  dataSource = new MatTableDataSource<Container>();
  dialog: MatDialog;

  dataloaded: boolean = false;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public popup: MatDialog,
    private containerService: ContainerService,
  ) {
    this.dataSource.data = [];
    this.dialog = popup;
  }

  showDataContainer(row) {
    const dialogRef = this.dialog.open(ContainerComponent, {
      width: '250px',
      data: row,
    });
  }

  async loadData() {
    debugger;
    await new Promise(async r => {
      await this.containerService.all({}).subscribe((data) => {
          // @ts-ignore
          this.dataSource.data = data.data;
        r();
      }
      )});
    this.dataSource.data.forEach((d) => {
      console.log(d.attributes.unique_id)
    })
    console.log(this.dataSource.data);
    console.log('LoadData');
    return;
  }

  async ngOnInit(): Promise<any>{
    await this.loadData();
    this.dataloaded = true;
  }

  // tslint:disable-next-line: use-lifecycle-interface
  async ngAfterViewInit(): Promise<any> {
    await new Promise((r) => {
        setInterval(() => {
          if(this.dataloaded) {
            this.dataSource.sort = this.sort;
            clearInterval();
          }
        }, 50)
      }
    )
  }
}

