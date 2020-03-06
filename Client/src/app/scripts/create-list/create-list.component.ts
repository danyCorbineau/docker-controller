import { Component, OnInit } from '@angular/core';
import { CreateScript } from '../../model/create-script';
import {FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CreateListService } from 'src/app/services/create-list.service'

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {
  public script: CreateScript = new CreateScript();
  private myControl = new FormControl();

  constructor(private createScript: CreateListService,
              private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
  }

  saveScript() {
    // this.lieuService.add(this.lieu).subscribe(a => console.log(a));
    this.createScript.add(this.script).subscribe(a => console.log(a));
  }
}
