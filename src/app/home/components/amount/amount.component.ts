import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss']
})
export class AmountComponent implements OnInit {

  @Output() changeView: EventEmitter<object> =  new EventEmitter();

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 2000000;
  min = 200000;
  showTicks = false;
  step = 200000;
  thumbLabel = false;
  value = 200000;
  vertical = false;
  tickInterval = 1;
  Fecha = '';


  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  Solicitar(): void {
    console.log('Solicitar',this.Fecha, this.value);
    this.changeView.emit({ Prestamo: this.value, Fecha: this.Fecha});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
