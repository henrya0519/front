import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';

import {
  Router,
  ActivatedRoute,
  Params
} from '@angular/router';
import {
  RequestService
} from './../../../request.service';




@Component({
  selector: 'app-homelogin',
  templateUrl: './homelogin.component.html',
  styleUrls: ['./homelogin.component.scss']
})
export class HomeloginComponent implements OnInit {

  show = 'login';
  user: any = {};
  prestamo: any = {};

  constructor(private router: Router, private requestService: RequestService) {
    console.log('prestamooo:', this.prestamo);
    this.prestamo = this.router.getCurrentNavigation().extras.state;
    this.getuserlogin();
  }

  ngOnInit(): void {

  }

  getuserlogin(): void {

    console.log(this.prestamo);
    this.requestService.getlogin(this.prestamo)
    .subscribe( resp => {
      if(resp){
      console.log('Resy get login: ', resp);
      this.user = resp;
      this.show = 'loan';
      }
    },
    error => {

    });
  
  }



  getuser(data: any): void {
      console.log('dataaa: ', data);
      this.user.Correo = data.data.Correo;
      this.user.Contraseña = data.data.Contraseña;
      if (data.status === null) {
          this.show = 'create';
      } else {
          this.user = data.status;
          this.show = 'loan';

      }
  }

  newUser(user: any): void {

      this.user.Nombre = user.Nombre;
      this.user.Apellidos = user.Apellidos;
      this.user.Celular = user.Celular;
      this.user.Cedula = user.Cedula;
      console.log('Crear usuario: ', this.user);
      this.requestService.createUser(this.user)
          .subscribe(resp => {
                  this.show = 'loan';

              },
              error => {

                  console.log(error);
              });

  }

  solicitarPrestamo(): void {

      this.requestService.sendPost(this.user)
          .subscribe(resp => {
                  console.log('respuesta find user:', resp);
                  this.user = resp;
                  this.router.navigate(['home'], {
                      state: resp
                  });

              },
              error => {

              });

  }




}