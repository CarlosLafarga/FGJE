import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'AppaternoSearchPipe', pure: false })
export class AppaternoSearchPipe implements PipeTransform {

  public removeAccents(str): string {
    // return str.replace(/[^\u0000-\u007E]/g, function(a) {
    //   return this.AccentsMap[a] || a;
    // }.bind(this));

    if (str) {
      return str.normalize('NFD')
           .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
           .normalize();
    }
    
  }

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
                (x && new RegExp( this.removeAccents(searchApPaterno[keyName]), 'gi' ).test( this.removeAccents(item[keyName])  )) || searchApPaterno[keyName] == "", true));
      }
      else {
        return funcionarios.filter( it => {
          return filterKeys.some(( key ) => {
            return new RegExp( this.removeAccents(searchApPaterno[key]), 'gi' ).test( this.removeAccents(it[key])  ) || searchApPaterno[key] == "";
          });
        });
      }
    }
  }

}
