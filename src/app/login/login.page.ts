import { FormGroup, FormControl } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Device, DeviceInfo } from "@capacitor/device";
import { Component } from '@angular/core';
import { LoginService } from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  userInfo = null;
  inputValue: String = "";

  constructor(private router: Router, private loginService: LoginService) {
    this.inputValue = this.loginService.data;
   }


  logChange() {
    let email: NavigationExtras = {
      state : {
        name: "bachir"
      }
    };
    this.router.navigate(['home'], email);
  }

  async googleSignup() {
    try {
      const deviceInfo = await Device.getInfo();

      if ((deviceInfo as unknown as DeviceInfo).platform === "web") {
        GoogleAuth.init();
      }
      const googleUser = await GoogleAuth.signIn();
      this.userInfo = "Hello " + googleUser['givenName'];
      let navigationExtras: NavigationExtras = {
        state: {
          user: this.userInfo
        }
      };
      this.router.navigate(['home'], navigationExtras);
    } catch (e) {
      console.log(e);
    } 
  }
}
