import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day19',
  templateUrl: './day19.component.html',
  styleUrls: ['./day19.component.scss']
})
export class Day19Component implements OnInit {
  activeClass = ''

  constructor() { }

  ngOnInit(): void {
  }

  changePosition(index: number) {
    const content = document.querySelector('.day19');

    if (content) {
      if (this.activeClass !== '') content?.classList.remove(this.activeClass)
      if (index !== 1) {
        content?.classList.add(`position-${index}`)
        this.activeClass = `position-${index}`
      }
    }
  }
}
