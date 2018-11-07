import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'AppaternoSearchPipe', pure: false })
export class AppaternoSearchPipe implements PipeTransform {

  transform(funcionarios: any, searchApPaterno: string, defaultFilter: boolean): Array<any> {
    if (!searchApPaterno){
      return funcionarios;
    }

    if (!Array.isArray(funcionarios)){
      return funcionarios;
    }

    if (searchApPaterno && Array.isArray( funcionarios )) {
      let filterKeys = Object.keys( searchApPaterno );

      if (defaultFilter) {
        return funcionarios.filter( item =>
            filterKeys.reduce(( x, keyName ) =>
                (x && new RegExp( searchApPaterno[keyName], 'gi' ).test( item[keyName] )) || searchApPaterno[keyName] == "", true));
      }
      else {
        return funcionarios.filter( it => {
          return filterKeys.some(( key ) => {
            return new RegExp( searchApPaterno[key], 'gi' ).test( it[key] ) || searchApPaterno[key] == "";
          });
        });
      }
    }
  }

}
