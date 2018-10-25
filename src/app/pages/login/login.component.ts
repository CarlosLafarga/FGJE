import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { loginServices} from './login.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[loginServices],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  public router: Router;
  public form: FormGroup;
  public usuario: AbstractControl;
  public password: AbstractControl;
  error = '';

  constructor(router:Router, fb:FormBuilder, private loginservices:loginServices) {
      this.router = router;
      
      this.form = fb.group({
          'usuario': ['', Validators.compose([Validators.required, Validators.nullValidator])],
          'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
      });

      this.usuario = this.form.controls['usuario'];
      this.password = this.form.controls['password'];
  }

   onSubmit() {
      
          this.loginservices.userAuth(this.form.value['usuario'],this.form.value['password']).subscribe(data =>  {
          
           this.loginservices.setLoggedIn(true);
           this.router.navigate(['/pages/membership']);
           
           
          
          },
          error =>{
            this.error = error;
            swal({
                title:"Error",
                text: "Usuario o Contraseña incorrecta",
                type: "error"
                }).then(() =>{
                
                 this.form.reset();
                });
          });
         
      
  }

    

  ngAfterViewInit(){
      document.getElementById('preloader').classList.add('hide');                 
  }

}
