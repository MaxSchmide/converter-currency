import { Component, Input } from '@angular/core';
import { IRate } from 'src/app/models/rate';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  title = 'converter';
  @Input() rate: IRate[];
}
