import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

constructor(private fb: FormBuilder,private router:Router,private auth:AuthService) { }
  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(form: FormGroup) {
    if(!form.valid){
      alert("please fill the form properly;")
      return;
    }

    this.auth.getuser().subscribe((users) => {
     if(users.length > 0){
      if(users[0].email === this.myForm.value.email && users[0].password === this.myForm.value.password){
          this.router.navigate(['shop']);
          return;
        
      }
      else{
        alert("Invalid credentials")
      return;
      }
     }
     
      
    })

  
  }

}
