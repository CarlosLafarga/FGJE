import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'NombreSearchPipe', pure: false })
export class NombreSearchPipe implements PipeTransform {

  public removeAccents(str): string {
    // return str.replace(/[^\u0000-\u007E]/g, function(a) {
    //   return this.AccentsMap[a] || a;
    // }.bind(this));

    return str.normalize('NFD')
           .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
           .normalize();
  }

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
                (x && new RegExp( this.removeAccents(searchNombre[keyName]), 'gi' ).test( this.removeAccents( item[keyName] ) )) || searchNombre[keyName] == "", true));
      }
      else {
        return funcionarios.filter( it => {
          return filterKeys.some(( key ) => {
            return new RegExp( this.removeAccents(searchNombre[key]), 'gi' ).test( this.removeAccents( it[key] ) ) || searchNombre[key] == "";
          });
        });
      }
    }
  }

}
