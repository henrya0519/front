import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';

import {Router,} from '@angular/router';
import {RequestService} from './../../../request.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  value = 'Clear me';
  constructor(
    private requestService: RequestService,
    private router: Router
    ) { }

  @Output() sendUser: EventEmitter <object> = new EventEmitter();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  onSubmit(login: NgForm): void {
    console.log(login.value);

    this.requestService.sendPost(login.value)
    .subscribe( resp => {
      console.log('respuesta find user:', resp);
      this.sendUser.emit({data: login.value, status: resp});
    },
    error => {

    });
  }


  ngOnInit(): void {

  }

}
