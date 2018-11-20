import { Pipe, PipeTransform } from '@angular/core';
import { FuncionariosData } from 'app/pages/membership/membership.model';
import { timingSafeEqual } from 'crypto';

@Pipe({ name: 'AgenciaSearchPipe', pure: false })
export class AgenciaSearchPipe implements PipeTransform {

  public removeAccents(str): string {
    // return str.replace(/[^\u0000-\u007E]/g, function(a) {
    //   return this.AccentsMap[a] || a;
    // }.bind(this));

    return str.normalize('NFD')
           .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
           .normalize();

    // return str
    //         .replace(/á/g, 'a')            
    //         .replace(/é/g, 'e')
    //         .replace(/í/g, 'i')
    //         .replace(/ó/g, 'o')
    //         .replace(/ú/g, 'u')
    //         .replace(/Ú/g, 'U');
  }

  transform(funcionarios: any[], searchAgencia: string, defaultFilter: boolean): Array<any> {
    if (!searchAgencia){
      return funcionarios;
    }

    if (!Array.isArray(funcionarios)){
      return funcionarios;
    }

    if (searchAgencia && Array.isArray( funcionarios )) {
      let filtrados = Object.keys( searchAgencia );

      if(defaultFilter) {
        return funcionarios.filter( it => {
          filtrados.reduce(( x, nombre ) => 
          (x && new RegExp( this.removeAccents(searchAgencia[nombre]), 'gi' ).test( this.removeAccents( it[nombre] ) )) || searchAgencia[nombre] == "", true );
        });
      } else {
        return funcionarios.filter( it => {
          return filtrados.some(( key ) => {
            return new RegExp( this.removeAccents(searchAgencia[key]), 'gi' ).test( this.removeAccents( it[key] ) ) || searchAgencia[key] == "";
          });
        });
      }
    }
  }

  // transform(funcionarios: any[], searchAgencia: string, defaultFilter: boolean): Array<any> {
  //   if (!searchAgencia){
  //     return funcionarios;
  //   }

  //   if (!Array.isArray(funcionarios)){
  //     return funcionarios;
  //   }

  //   if (searchAgencia && Array.isArray( funcionarios )) {
  //     let filtrados = Object.keys( searchAgencia );

  //     if(defaultFilter) {
  //       return funcionarios.filter( it => {
  //         filtrados.reduce(( x, nombre ) => 
  //         (x && new RegExp( searchAgencia[nombre], 'giy' ).test( it[nombre] )) || searchAgencia[nombre] == "", true );
  //       });
  //     } else {
  //       return funcionarios.filter( it => {
  //         return filtrados.some(( key ) => {
  //           return new RegExp( searchAgencia[key], 'giy' ).test(  it[key]  ) || searchAgencia[key] == "";
  //         });
  //       });
  //     }
  //   }
  // }

}
