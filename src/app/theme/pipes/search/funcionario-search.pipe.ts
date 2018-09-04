import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'FuncionarioSearchPipe', pure: false })
export class FuncionarioSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let buscaFuncionario = new RegExp(args, 'ig');
    if (value) {
      return value.filter(funagen => {
        if (funagen.cNombreFuncionario) {
          return funagen.cNombreFuncionario.search(buscaFuncionario) !== -1;
        }
        else{
          return funagen.cNombreFuncionario.search(buscaFuncionario) !== -1;
        }
      });
    }
  }
}