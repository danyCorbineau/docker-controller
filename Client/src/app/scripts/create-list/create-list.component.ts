import { Component, OnInit } from '@angular/core';
import { CreateScript } from '../../model/create-script';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {
  public script: CreateScript;

  constructor() { }

  ngOnInit() {
  }

}
