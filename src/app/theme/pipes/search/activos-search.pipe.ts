import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ActivosSearchPipe', pure: false })
export class ActivosSearchPipe implements PipeTransform {

  // transform(funcionarios, args?): Array<any> {
  //   let searchActivos = new RegExp(args, 'ig');
  //   if (funcionarios) {
  //     return funcionarios.filter(funcionario => {
  //       if (funcionario.bEsActivo) { 
  //         return funcionario.bEsActivo.search(searchActivos) !== -1;
  //       }
  //       else{
  //         return funcionario.bEsActivo.search(searchActivos) !== -1;
  //       }
  //     });
  //   }
  // }

  transform(funcionarios: any, searchActivos: string, defaultFilter: boolean): Array<any> {
    if (!searchActivos){
      return funcionarios;
    }

    if (!Array.isArray(funcionarios)){
      return funcionarios;
    }

    if (searchActivos && Array.isArray( funcionarios )) {
      let filterKeys = Object.keys( searchActivos );

      if (defaultFilter) {
        return funcionarios.filter( item =>
            filterKeys.reduce(( x, keyName ) =>
                (x && new RegExp( searchActivos[keyName], 'gi' ).test( item[keyName] )) || searchActivos[keyName] == "", true));
      }
      else {
        return funcionarios.filter( it => {
          return filterKeys.some(( key ) => {
            return new RegExp( searchActivos[key], 'gi' ).test( it[key] ) || searchActivos[key] == "";
          });
        });
      }
    }
  }

}