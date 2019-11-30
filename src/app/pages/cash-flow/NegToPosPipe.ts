import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'negToPos'
  })
  export class NegToPosPipe implements PipeTransform {
    transform(val: number): number {
      return Math.abs(val);
    }
  }