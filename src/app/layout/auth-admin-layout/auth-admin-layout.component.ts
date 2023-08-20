import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css']
})
export class AuthAdminLayoutComponent {

  dataReceived: any

  constructor(private ads: AuthadminService, private route: Router){

    // console.log(this.ads.isLogin)

  }

  loginadmin(f: any){

    let data = f.value

    this.ads.login(data).subscribe(
      // response => console.log(response),
      (response) =>{

        this.dataReceived = response
        this.ads.saveData(this.dataReceived.token, this.dataReceived.username,
          this.dataReceived.role)
          // console.log(response)
          // console.log(this.dataReceived)
          // console.log(this.ads.profileAdmin.username)
          // console.log(this.ads.profileAdmin.role)
          this.route.navigate(['/admin/dashboard'])

      },
      err => console.log(err)
    )

  }

}
