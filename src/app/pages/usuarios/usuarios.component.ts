import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  encapsulation: ViewEncapsulation.None
})
export class UsuariosComponent implements OnInit {
  public data = [];
  public settings = {
    selectMode: 'single',  // single|multi
    hideHeader: false,
    hideSubHeader: false,
    actions: {
      columnTitle: 'Actions',
      add: true,
      edit: true,
      delete: true,
      custom: [],
      position: 'right' // left|right
    },
    add: {
      addButtonContent: '<h4 class="mb-1"><i class="fa fa-plus ml-3 text-success"></i></h4>',
      createButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
      cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
    },
    edit: {
      editButtonContent: '<i class="fa fa-pencil mr-3 text-primary"></i>',
      saveButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
      cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash-o text-danger"></i>',
      confirmDelete: true
    },
    noDataMessage: 'No data found',
    columns: {
      usuario_id: {
        title: 'ID',
        editable: false,
        width: '60px',
        type: 'html',
        valuePrepareFunction: (value) => { return '<div class="text-center">' + value + '</div>'; }
      },
      cClaveUsuario: {
        title: 'Usuario',
        type: 'string',
        filter: true
      },
      cPalabraSecreta: {
        title: 'Palabra Secreta',
        editable: false,
        type: 'string'
      },
      iClaveFuncionario: {
        title: 'Clave Funcionario',
        editable: false,
        type: 'number'
      },
      password: {
        title: 'Password',
        editable: false,
        type: 'string'
      },
      cllave: {
        title: 'Key',
        editable: false,
        type: 'string'
      }
    },
    pager: {
      display: true,
      perPage: 15
    }
  };
  constructor(
    private usuariosService: UsuariosService
  ) {
    this.getData((data) => {
      this.data = data;
    });
  }
  public getData(data) {
    const req = new XMLHttpRequest();
    req.open('GET', this.usuariosService.API_URL + '/Usuarios');
    req.onload = () => {
      data(JSON.parse(req.response));
      console.log(req.response);
    };
    req.send();
  }

  public onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  public onRowSelect(event) {
    console.log(event);
  }

  public onUserRowSelect(event) {
    console.log(event);   //this select return only one page rows
  }

  public onRowHover(event) {
    // console.log(event);
  }

  ngOnInit() {

  }

}
