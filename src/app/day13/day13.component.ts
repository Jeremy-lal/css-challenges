import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day13',
  templateUrl: './day13.component.html',
  styleUrls: ['./day13.component.scss']
})
export class Day13Component implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  closeDetails() {
    const element = document.querySelector('.details');
    if (element) element.classList.remove('open');
  }

  openDetails() {
    const element = document.querySelector('.details');
    if (element) element.classList.add('open');
  }
}
