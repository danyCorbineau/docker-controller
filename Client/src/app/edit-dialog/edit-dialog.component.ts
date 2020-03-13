import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  formModal: FormGroup;
  item: any;
  content: string;

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
              // tslint:disable-next-line:variable-name
              @Inject(MAT_DIALOG_DATA) public data: any, private _formBuilder: FormBuilder) {
    this.content = data.content;
    this.formModal = this._formBuilder.group({content: new FormControl()});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getFormData() {
    this.item = {
      id: this.data.id,
      name: this.data.name,
      ext: this.data.ext,
      content: this.data.content
    };
    return this.item;
  }

  ngOnInit(): void {
  }

}
