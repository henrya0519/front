import { Component, OnInit,} from '@angular/core';
import {Router} from '@angular/router';
import {RequestService} from './../../../request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  show = 'amount';
  user: any = {
  };
  amount = 0;

  listenEvent(data: any): void{

    
    this.user.Valor = data.Prestamo;
    this.user.Fecha = data.Fecha;
    this.requestService.apply_for_loan(this.user)
    .subscribe (resp => {
      console.log('resp loan: ', resp);
      this.router.navigate(['login'], {state: resp});
    },
    error =>{
       console.log('error: ', error);
    }
    );
  }


  constructor(private router: Router, private requestService: RequestService) {
    this.user = this.router.getCurrentNavigation().extras.state;

  }

  ngOnInit(): void {
  }

}
