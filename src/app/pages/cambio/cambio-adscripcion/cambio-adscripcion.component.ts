import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-cambio-adscripcion',
  templateUrl: './cambio-adscripcion.component.html',
  styleUrls: ['./cambio-adscripcion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CambioAdscripcionComponent {

  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor() { }

}
