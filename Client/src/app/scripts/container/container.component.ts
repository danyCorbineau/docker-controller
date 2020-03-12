import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Container } from '../../model/container';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  container: Container;

  constructor(
    public dialogRef: MatDialogRef<ContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Container) {
      this.container = data;
      console.log(data);
    }

  ngOnInit(): void {
  }

}
