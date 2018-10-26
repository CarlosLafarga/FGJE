import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ActivosSearchPipe', pure: false })
export class ActivosSearchPipe implements PipeTransform {

  transform(value, args?): Array<any> {
    let searchActivos = new RegExp(args, 'ig');
    if (value) {
      return value.filter(funcionario => {
        if (funcionario.bEsActivo) { console.log(funcionario);
          return funcionario.bEsActivo.search(searchActivos) !== -1;
        }
        else{
          return funcionario.cNombreFuncionario.search(searchActivos) !== -1;
        }
      });
    }
  }

}