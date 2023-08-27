import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  constructor(private aus: AuthuserService, private router: Router){

  }

  register(f: any){
    let data = f.value
    this.aus.register(data).subscribe(data => {
        this.router.navigate(['/login'])
        // console.log(data)
      }
    )
  }

}
