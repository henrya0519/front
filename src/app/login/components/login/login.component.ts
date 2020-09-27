import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import {Router, ActivatedRoute, Params} from '@angular/router';
import {RequestService} from './../../../request.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() sendUser: EventEmitter <object> = new EventEmitter();


  onSubmit(login: NgForm): void {

    this.requestService.sendPost(login.value)
    .subscribe( resp => {
      console.log('respuesta find user:', resp);
      this.sendUser.emit({data: login.value, status: resp});
    },
    error => {

    });
  }

  constructor(
    private requestService: RequestService,
    private router: Router
    ) { }


  ngOnInit(): void {

  }

}
