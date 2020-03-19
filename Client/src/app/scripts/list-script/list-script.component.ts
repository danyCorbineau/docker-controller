import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreateListService} from '../../services/create-list.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {EditDialogComponent} from '../../edit-dialog/edit-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-script',
  templateUrl: './list-script.component.html',
  styleUrls: ['./list-script.component.scss']
})
export class ListScriptComponent implements OnInit {

  scripts: [];
  noScripts: boolean;
  displayedColumns: string[] = ['n', 'id', 'name', 'ext', 'content', 'delete'];
  dataSource = new MatTableDataSource<any>();
  dialog: MatDialog;

  durationInSeconds = 5;

  @ViewChild(MatSort) sort: MatSort;
  constructor(public popup: MatDialog, public scriptService: CreateListService, private snackBar: MatSnackBar) {
    this.noScripts = true;
    this.dataSource.data = [];
    this.dialog = popup;
  }

  /*showDataContainer(row) {
  @todo create component dialog;
    const dialogRef = this.dialog.open(ContainerComponent, {
      width: '250px',
      data: row,
    });
  }*/

  async loadData() {
    this.scriptService.getAll().subscribe((res: any) => {
      // let data = [];
      this.scripts = res.data;
      this.dataSource.data = [];
      // data = new Deserializer().deserialize(this.scripts);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.scripts.length; i++) {
        const {id, attributes} = this.scripts[i];
        const {name, ext, content} = attributes;
        // @ts-ignore
        const item = {n: i + 1, id, name, ext, content};
        this.dataSource.data.push(item);
      }
      console.log('Data loaded');
    });
  }

  openDialog(row): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.scriptService.update(result);
      console.log(result);
    });
  }

  deleteScript(e, id) {
    e.stopPropagation();
    this.scriptService.delete(id).subscribe(async (res: any) => {
      console.log('res: ', res);
      if (res.data.id === id) {
        this.openSnackBar('Le script a été supprimé', 'OK');
      }
      await this.loadData();
    }, (error) => {
      console.error(error);
      this.openSnackBar('Error : ' + error.error.error, 'OK');
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: this.durationInSeconds * 1000,
    });
  }

  async ngOnInit() {
    await this.loadData();
    this.noScripts = false;
  }

  // tslint:disable-next-line:use-lifecycle-interface
  async ngAfterViewInit() {
    await new Promise((r) => {
        setInterval(() => {
          if (!this.noScripts) {
            this.dataSource.sort = this.sort;
            clearInterval();
          }
        }, 50);
      }
    );
  }
}
