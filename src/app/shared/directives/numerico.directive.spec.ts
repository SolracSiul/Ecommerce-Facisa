import { NumericoDirective } from './numerico.directive';
import { ElementRef } from '@angular/core';


it('should convert string to number', () => {
  const directive = new NumericoDirective(new ElementRef<HTMLInputElement>(document.createElement('input')));
  const input = new Event('input');

  directive.onKeyUp({target: {value: '12345'}, preventDefault: () => {}, stopPropagation: () => {}});

  expect(directive.el.nativeElement.value).toEqual(12345);
});
