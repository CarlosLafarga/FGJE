import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pendientes-cat',
  templateUrl: './pendientes-cat.component.html',
  styleUrls: ['./pendientes-cat.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PendientesCatComponent implements OnInit {

  public formPendientesCat: FormGroup;
  public funcionariosAgencia1: any[] = [];

  messages = {
    emptyMessage: 'No se encontraron datos',
    totalMessage: 'total'
  }

  constructor(
    private fbPendientesCat: FormBuilder
  ) { }

  ngOnInit() {

    this.formPendientesCat = this.fbPendientesCat.group({
      catDiscriminanteAnt: ['', Validators.required],
      iclaveFuncionarioAsign: ['', Validators.required],
      rolesFAsign: ['', Validators.required],
      iclaveFuncionarioDestino: ['', Validators.required],
      justificacion: ['', Validators.required]
    });

  }

  onSubmitExpPendCat(): void {
    if (this.formPendientesCat.valid) {
      console.log(this.formPendientesCat.value);
    } else {
      console.log(this.formPendientesCat.value)
    }
  }

  resetForm(): void {
    // this.formPendientesCat.reset();
    this.formPendientesCat.controls['catDiscriminanteAnt'].setValue('');
    this.formPendientesCat.controls['iclaveFuncionarioAsign'].setValue('');
    this.formPendientesCat.controls['rolesFAsign'].setValue('');
    this.formPendientesCat.controls['iclaveFuncionarioDestino'].setValue('');
    this.formPendientesCat.controls['justificacion'].setValue('');
  }

}
