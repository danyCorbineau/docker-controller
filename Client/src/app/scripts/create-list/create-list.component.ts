import { Component, OnInit } from '@angular/core';
import { CreateScript } from '../../model/create-script';
import {FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CreateListService } from 'src/app/services/create-list.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {
  public script: CreateScript = new CreateScript();
  private myControl = new FormControl();

  durationInSeconds = 5;

  constructor(private createScript: CreateListService,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar) { }
  ngOnInit() {
  }

  saveScript() {
    // this.lieuService.add(this.lieu).subscribe(a => console.log(a));
    this.createScript.add(this.script).subscribe((a: any) => {
      console.log(a);
      if (a.data.id) {
        this.openSnackBar('Le script a été enregistré', 'OK');
      }
    }, (error) => {
      console.log(error);
      this.openSnackBar('Error : ' + error.error.error, 'OK');
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
