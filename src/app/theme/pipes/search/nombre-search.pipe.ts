import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'NombreSearchPipe', pure: false })
export class NombreSearchPipe implements PipeTransform {

  transform(funcionarios: any, searchNombre: string, defaultFilter: boolean): Array<any> {
    if (!searchNombre){
      return funcionarios;
    }

    if (!Array.isArray(funcionarios)){
      return funcionarios;
    }

    if (searchNombre && Array.isArray( funcionarios )) {
      let filterKeys = Object.keys( searchNombre );

      if (defaultFilter) {
        return funcionarios.filter( item =>
            filterKeys.reduce(( x, keyName ) =>
                (x && new RegExp( searchNombre[keyName], 'gi' ).test( item[keyName] )) || searchNombre[keyName] == "", true));
      }
      else {
        return funcionarios.filter( it => {
          return filterKeys.some(( key ) => {
            return new RegExp( searchNombre[key], 'gi' ).test( it[key] ) || searchNombre[key] == "";
          });
        });
      }
    }
  }

}
