import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'AgenciaSearchPipe', pure: false })
export class AgenciaSearchPipe implements PipeTransform {

  transform(funcionarios: any, searchAgencia: string, defaultFilter: boolean): Array<any> {
    if (!searchAgencia){
      return funcionarios;
    }

    if (!Array.isArray(funcionarios)){
      return funcionarios;
    }

    if (searchAgencia && Array.isArray( funcionarios )) {
      let filterKeys = Object.keys( searchAgencia );

      if (defaultFilter) {
        return funcionarios.filter( item =>
            filterKeys.reduce(( x, keyName ) =>
                (x && new RegExp( searchAgencia[keyName], 'gi' ).test( item[keyName] )) || searchAgencia[keyName] == "", true));
      }
      else {
        return funcionarios.filter( it => {
          return filterKeys.some(( key ) => {
            return new RegExp( searchAgencia[key], 'gi' ).test( it[key] ) || searchAgencia[key] == "";
          });
        });
      }
    }
  }

}
