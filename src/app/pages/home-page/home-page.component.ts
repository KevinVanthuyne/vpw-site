import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as Vivus from "vivus";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    new Vivus('globe-svg', {
      duration: 100,
      animTimingFunction: Vivus.EASE,
      file: '/assets/img/globe_5.svg',
      onReady: (myVivus) => {
        console.log("LETS GO")
        // `el` property is the SVG element
        myVivus.el.setAttribute('height', '100%');

      }
    });
  }
}
