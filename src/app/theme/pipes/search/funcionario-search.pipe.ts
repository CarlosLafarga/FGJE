import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'UserSearchPipe', pure: false })
export class FuncionarioSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(funcionario => {
        if (funcionario.nombre) {
          return funcionario.nombre.search(searchText) !== -1;
        }
        else{
          return funcionario.nombre.search(searchText) !== -1;
        }
      });
    }
  }
}