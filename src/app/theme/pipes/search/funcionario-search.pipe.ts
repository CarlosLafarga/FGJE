import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'FuncionarioSearchPipe', pure: false })
export class FuncionarioSearchPipe implements PipeTransform {

  // transform(value, args?): Array<any> {
  //   let buscarFuncionario = new RegExp(args, 'ig');
  //   if (value) {
  //     return value.filter(funcionario => {
  //       if (funcionario.cNombreFuncionario) {
  //         return funcionario.cNombreFuncionario.search(buscarFuncionario) !== -1;
  //       }
  //       else{
  //         return funcionario.cApellidoPaternoFuncionario.search(buscarFuncionario) !== -1;
  //       }
  //     });
  //   }
  // }

  transform(funciAgencia: any, buscarFuncionario: string, defaultFilter: boolean): Array<any> {
    if (!buscarFuncionario){
      return funciAgencia;
    }

    if (!Array.isArray(funciAgencia)){
      return funciAgencia;
    }

    if (buscarFuncionario && Array.isArray( funciAgencia )) {
      let filterKeys = Object.keys( buscarFuncionario );

      if (defaultFilter) {
        return funciAgencia.filter( item =>
            filterKeys.reduce(( x, keyName ) =>
                (x && new RegExp( buscarFuncionario[keyName], 'gi' ).test( item[keyName] )) || buscarFuncionario[keyName] == "", true));
      }
      else {
        return funciAgencia.filter( it => {
          return filterKeys.some(( key ) => {
            return new RegExp( buscarFuncionario[key], 'gi' ).test( it[key] ) || buscarFuncionario[key] == "";
          });
        });
      }
    }
  }

}