import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveForm';

  constructor(private fb : FormBuilder){}
  // creating a new FormGroup
  variable = this.fb.group(
    {
      email : ['',[Validators.required,Validators.pattern("^[a-z0-9.%]+@[a-z0-9.-]+\.[a-z]{2,4}")]],
      pswd : ['',[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$')]]
    }
  )


  check(){
    console.log(this.variable.controls.email.status)
  }
}
