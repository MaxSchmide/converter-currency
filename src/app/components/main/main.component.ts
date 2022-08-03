import { Component, Input } from '@angular/core';
import { IRate } from 'src/app/models/rate';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  primaryInput: number;
  secondaryInput: number;
  @Input() rate: IRate[];
  inputHandler(event: any, primSelect: any, secSelect: any) {
    event.preventDefault;
    this.rate.map((item) => {
      primSelect == item.currencyCodeA && secSelect == item.currencyCodeB
        ? event.target.name == 'primary'
          ? (this.secondaryInput = this.primaryInput * item.rateBuy)
          : (this.primaryInput = this.secondaryInput / item.rateBuy)
        : secSelect == item.currencyCodeA && primSelect == item.currencyCodeB
        ? event.target.name == 'primary'
          ? (this.secondaryInput = this.primaryInput / item.rateBuy)
          : (this.primaryInput = this.secondaryInput * item.rateBuy)
        : '';
    });
  }
  selectHandler(event: any, primSelect: any, secSelect: any) {
    event.preventDefault;
    console.log(primSelect);

    this.rate.map((item: any) => {
      primSelect == item.currencyCodeA && secSelect == item.currencyCodeB
        ? event.target.name == 'primary'
          ? (this.primaryInput = this.secondaryInput / item.rateBuy)
          : (this.secondaryInput = this.primaryInput * item.rateBuy)
        : secSelect == item.currencyCodeA && primSelect == item.currencyCodeB
        ? event.target.name == 'primary'
          ? (this.primaryInput = this.secondaryInput * item.rateBuy)
          : (this.secondaryInput = this.primaryInput / item.rateBuy)
        : '';
    });
  }
}
