import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlankComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() { }

  ngOnDestroy() {
    console.log("onDestroy blank");
  }

}
