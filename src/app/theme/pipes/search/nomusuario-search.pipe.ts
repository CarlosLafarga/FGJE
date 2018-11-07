import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'NomusuarioSearchPipe', pure: false })
export class NomusuarioSearchPipe implements PipeTransform {

  transform(funcionarios: any, searchUsuario: string, defaultFilter: boolean): Array<any> {
    if (!searchUsuario){
      return funcionarios;
    }

    if (!Array.isArray(funcionarios)){
      return funcionarios;
    }

    if (searchUsuario && Array.isArray( funcionarios )) {
      let filterKeys = Object.keys( searchUsuario );

      if (defaultFilter) {
        return funcionarios.filter( item =>
            filterKeys.reduce(( x, keyName ) =>
                (x && new RegExp( searchUsuario[keyName], 'gi' ).test( item[keyName] )) || searchUsuario[keyName] == "", true));
      }
      else {
        return funcionarios.filter( it => {
          return filterKeys.some(( key ) => {
            return new RegExp( searchUsuario[key], 'gi' ).test( it[key] ) || searchUsuario[key] == "";
          });
        });
      }
    }
  }

}
