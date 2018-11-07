import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'NumeroempSearchPipe', pure: false })
export class NumeroempSearchPipe implements PipeTransform {

  transform(funcionarios: any, searchNumero: string, defaultFilter: boolean): Array<any> {
    if (!searchNumero){
      return funcionarios;
    }

    if (!Array.isArray(funcionarios)){
      return funcionarios;
    }

    if (searchNumero && Array.isArray( funcionarios )) {
      let filterKeys = Object.keys( searchNumero );

      if (defaultFilter) {
        return funcionarios.filter( item =>
            filterKeys.reduce(( x, keyName ) =>
                (x && new RegExp( searchNumero[keyName], 'gi' ).test( item[keyName] )) || searchNumero[keyName] == "", true));
      }
      else {
        return funcionarios.filter( it => {
          return filterKeys.some(( key ) => {
            return new RegExp( searchNumero[key], 'gi' ).test( it[key] ) || searchNumero[key] == "";
          });
        });
      }
    }
  }

}