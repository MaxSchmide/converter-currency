import { Component, OnInit } from '@angular/core';
import { IRate } from './models/rate';
import { RateService } from './services/rate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  rate: IRate[] = [];
  loading = true;
  constructor(private fetchData: RateService) {}
  ngOnInit(): void {
    this.loading = true;
    this.fetchData.getData().subscribe((data) => {
      this.rate = data;
      this.loading = false;
    });
  }
}
