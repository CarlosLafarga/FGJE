import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'FuncionarioSearchPipe', pure: false })
export class FuncionarioSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let buscarFuncionario = new RegExp(args, 'ig');
    if (value) {
      return value.filter(funcionario => {
        if (funcionario.cNombreFuncionario) {
          return funcionario.cNombreFuncionario.search(buscarFuncionario) !== -1;
        }
        else{
          return funcionario.cApellidoPaternoFuncionario.search(buscarFuncionario) !== -1;
        }
      });
    }
  }
}