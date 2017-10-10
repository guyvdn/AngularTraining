import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'price' })
export class PricePipe implements PipeTransform {
  public transform(
    value: number,
    currencySymbol: string,
    precision: number
  ): string {
    if (!currencySymbol) {
      currencySymbol = '€';
    }

    if (!precision) {
      precision = 2;
    }

    return currencySymbol + ' ' + value.toFixed(precision);
  }
}
