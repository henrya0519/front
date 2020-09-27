import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-createruser',
  templateUrl: './createruser.component.html',
  styleUrls: ['./createruser.component.scss']
})
export class CreateruserComponent implements OnInit {
  @Output() newUser: EventEmitter <object> = new EventEmitter();

  onSubmit(createUser: NgForm): void {
    this.newUser.emit(createUser.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
