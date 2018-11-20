import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ApmaternoSearchPipe', pure: false })
export class ApmaternoSearchPipe implements PipeTransform {

  public removeAccents(str): string {
    // return str.replace(/[^\u0000-\u007E]/g, function(a) {
    //   return this.AccentsMap[a] || a;
    // }.bind(this));

    return str.normalize('NFD')
           .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
           .normalize();
  }

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
                (x && new RegExp( this.removeAccents(searchApMaterno[keyName]), 'gi' ).test( this.removeAccents(item[keyName])  )) || searchApMaterno[keyName] == "", true));
      }
      else {
        return funcionarios.filter( it => {
          return filterKeys.some(( key ) => {
            return new RegExp( this.removeAccents(searchApMaterno[key]), 'gi' ).test( this.removeAccents(it[key])  ) || searchApMaterno[key] == "";
          });
        });
      }
    }
  }

}
