import { Component } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  template: '',
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        height: 100%;
        border: 1px dashed var(--color-primary);
        border-radius: 6px;
      }
    `,
  ],
})
export class PlaceholderComponent {}
