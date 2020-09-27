import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {RequestService} from './../../../request.service';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent implements OnInit {
  displayedColumns: string[] = ['Id','Nombre', 'Estado', 'Pago', 'Valor'];
  dataSource: any = null;
  showButton = true;
  Id = '';

  @Input() user: any;

  constructor(private requestService: RequestService) { }

  @ViewChild (MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {

    console.log('aaaaaaaaaaa', this.user);

    this.user.status = 'Aprobado';
    this.requestService.get_loans(this.user)
      .subscribe ( resp => {
        if ( resp[0].Estado === 'Aprobado' || resp[0].Estado === 'NoPago')
        {
          console.log('Mostrar boton de pago');
          this.showButton = false;
        }
        this.dataSource = new MatTableDataSource<any>(resp);
        this.dataSource.paginator = this.paginator;
      },
      error => {
      });
  }

  Pagar(): void{
    console.log('Pagar Prestamo: ', this.Id);
    this.requestService.pay_loan({Id: this.Id})
    .subscribe ( resp => {
      this.Reload();
    },
    error => {
    });

  }

  Reload(): void {
    this.requestService.get_loans(this.user)
    .subscribe ( resp => {
      if ( resp[0].Estado === 'Aprobado' || resp[0].Estado === 'NoPago')
      {
        console.log('Mostrar boton de pago');
        this.showButton = false;
      }
      this.dataSource = new MatTableDataSource<any>(resp);
      this.dataSource.paginator = this.paginator;
    },
    error => {
    });

  }

}
