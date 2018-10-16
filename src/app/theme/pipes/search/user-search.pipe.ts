import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'UserSearchPipe', pure: false })
export class UserSearchPipe implements PipeTransform {

  // transform(value, args?): Array<any> {
  //   let searchText = new RegExp(args, 'ig');

  //   if (value) {
  //     return value.filter(funcionario => {
  //       if (funcionario.cNombreFuncionario) {
  //         return funcionario.cNombreFuncionario.search(searchText) !== -1;
  //       }
  //       else{
  //         return funcionario.cNombreFuncionario.search(searchText) !== -1;
  //       }
  //     });
  //   }

  // }

  transform(funcionarios: any, searchText: string, defaultFilter: boolean): Array<any> {
    if (!searchText){
      return funcionarios;
    }

    if (!Array.isArray(funcionarios)){
      return funcionarios;
    }

    if (searchText && Array.isArray( funcionarios )) {
      let filterKeys = Object.keys( searchText );

      if (defaultFilter) {
        return funcionarios.filter( item =>
            filterKeys.reduce(( x, keyName ) =>
                (x && new RegExp( searchText[keyName], 'gi' ).test( item[keyName] )) || searchText[keyName] == "", true));
      }
      else {
        return funcionarios.filter( it => {
          return filterKeys.some(( key ) => {
            return new RegExp( searchText[key], 'gi' ).test( it[key] ) || searchText[key] == "";
          });
        });
      }
    }
  }

}