import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'UserSearchPipe', pure: false })
export class UserSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(funcionario => {
        if (funcionario.cNombreFuncionario) {
          return funcionario.cNombreFuncionario.search(searchText) !== -1;
        }
        else{
          return funcionario.cNombreFuncionario.search(searchText) !== -1;
        }
      });
    }
  }
}