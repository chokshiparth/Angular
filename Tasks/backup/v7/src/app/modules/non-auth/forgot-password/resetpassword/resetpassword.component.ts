import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { _navigate } from 'src/app/core/interface/navigate';
import { _urls } from 'src/app/core/interface/url';
import { ConnectionService } from 'src/app/core/services/connection.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  public email              !: any;
  public resetPassword : FormGroup = new FormGroup({
    newpassword : new FormControl('',Validators.required),
    confirmpassword : new FormControl('',Validators.required)
  })
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private connectionProvider : ConnectionService
  ) { }

  ngOnInit(): void {
    this.email = this.activeRoute.snapshot.queryParamMap.get('id')?.toString();
  }


  
  /**
   * @description used to change password.
   */
  changePassword(){
    alert("Hoya");
    let newPasswordInfo = {
      email : this.email,
      password : this.resetPassword.get('newpassword')?.value
    }
    this.connectionProvider.goPost(_urls.UPDATE_PASSWORD,newPasswordInfo).subscribe(response=>{
      this.router.navigate([_navigate.login_page]);
    })
  }
}
