import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import swal from 'sweetalert2';

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
      add: false,
      edit: true,
      delete: false,
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
      cancelButtonContent: '<i class="fa fa-times text-danger"></i>',
      confirmSave:true
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash-o text-danger"></i>',
      confirmDelete: true
    },
    noDataMessage: 'No hay registros que mostrar.',
    
    columns: {
      usuario_id: {
        title: 'ID Usuario',
        editable: false,
        width: '200px',
        type: 'html',
        valuePrepareFunction: (value) => {
          return '<div class="text-center">' + value + '</div>';
        }
      },
      cClaveUsuario: {
        title: 'Usuario',
        type: 'string',
        filter: true
      },
      cNombreFuncionario: {
        title: 'Nombre',
        editable: false,
        type: 'string'
      },
      cApellidoPaternoFuncionario: {
        title: 'Apellido Paterno',
        editable: false,
        type: 'string'
      },
      cApellidoMaternoFuncionario: {
        title: 'Apellido Paterno',
        editable: false,
        type: 'string'
      },
      iClaveFuncionario: {
        title: 'Clave Funcionario',
        editable: false,
        type: 'number',
        filter: true
      },
      bEsActivo: {
        title: 'Activo',
        editable: false,
        type: 'html',
        filter: false,
        valuePrepareFunction: (value) => { 
          if( value == 0 )
            {return '<i class="fa fa-user mr-2 text-danger" [ngbTooltip]="Inactivo" placement="bottom" ></i>'}
          else
            { return '<i  class="fa fa-user mr-2 text-success" [ngbTooltip]="Inactivo" placement="bottom" ></i>'}
        }
      },
      
    },
    pager: {
      display: true,
      perPage: 20
    }
  };
  constructor( private usuarioService : UsuariosService) {
    this.getData((data) => {
      this.data = data;
    });
  }
  public getData(data) {
    const req = new XMLHttpRequest();
    req.open('GET', this.usuarioService.API_URL + '/GetUsuario');
    req.onload = () => {
      data(JSON.parse(req.response));
      
    };
    req.send();
  }

  public onDeleteConfirm(event): void {
    
    if(event.data.bEsActivo == 1){
    swal({
      title: 'Desactivar Usuario ',
      text: '¿Esta seguro que desea desactivar al usuario?',
      type: 'warning',
      html: '<b>¿Esta seguro que desea desactivar al usuario?</b><br><label><b>Justificacion:</b></label>',
      showCancelButton: true,
      confirmButtonText: 'Desactivar',
      cancelButtonText: 'Cancelar'

     }).then((result) => {

      if (result.value) {
        
        console.log(event.data);

      } else if (result.dismiss === swal.DismissReason.cancel) {
        
      }
    });
  }else{
    swal({
      title:"Cuidado",
      text: "Usuario ya se encentra desactivado.",
      type: "warning"
      }).then(() =>{
      
      // location.reload();
      });
  }
  }

  public onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
      console.log("event newData",event.newData);

      this.usuarioService.actualizarUsuario(event.newData.usuario_id,event.newData).subscribe(resp =>{
        console.log(resp);
        alert("Usuario acualizado con exito!");
      },err =>{
        console.log(err);
        alert(err.message);
      });
      
    } else {
      event.confirm.reject();
    }

    // swal({
    //   title: 'Actualizar Usuario',
    //   text: '¿Esta seguro que desea Actualizar al usuario   '+event.data.cClaveUsuario+'?',
    //   type: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Desactivar',
    //   cancelButtonText: 'Cancelar'

    //  }).then((result) => {

    //   if (result.value) {
        
    //     console.log("aceptar",result.value);
    //     console.log("evento",event);
    //     event.confirm.resolve(event.data);
    //     console.log(event.data);
    //     console.log(event.newData);

    //   } else if (result.dismiss === swal.DismissReason.cancel) {
    //     console.log("cancelar",result.dismiss)
    //     event.confirm.reject();
    //   }
    // });

    
  }

  // public onRowSelect(event) {
  //   //console.log(event);
  // }

  // public onUserRowSelect(event) {
  //   // console.log(event);   //this select return only one page rows
  // }

  // public onRowHover(event) {
  //   // console.log(event);
  // }

  

  ngOnInit() {
   
  }

}
