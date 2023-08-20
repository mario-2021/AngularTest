import { Component } from '@angular/core';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {

  username: any = 'MeroSH'

  constructor(private asd: AuthadminService){
    // this.username = localStorage.getItem('username')
    // this.username = asd.getUsername()
    // console.log(this.asd.loggedIn())
  }

}
