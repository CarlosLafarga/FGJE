import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ApmaternoSearchPipe', pure: false })
export class ApmaternoSearchPipe implements PipeTransform {

  transform(funcionarios: any, searchApMaterno: string, defaultFilter: boolean): Array<any> {
    if (!searchApMaterno){
      return funcionarios;
    }

    if (!Array.isArray(funcionarios)){
      return funcionarios;
    }

    if (searchApMaterno && Array.isArray( funcionarios )) {
      let filterKeys = Object.keys( searchApMaterno );

      if (defaultFilter) {
        return funcionarios.filter( item =>
            filterKeys.reduce(( x, keyName ) =>
                (x && new RegExp( searchApMaterno[keyName], 'gi' ).test( item[keyName] )) || searchApMaterno[keyName] == "", true));
      }
      else {
        return funcionarios.filter( it => {
          return filterKeys.some(( key ) => {
            return new RegExp( searchApMaterno[key], 'gi' ).test( it[key] ) || searchApMaterno[key] == "";
          });
        });
      }
    }
  }

}
