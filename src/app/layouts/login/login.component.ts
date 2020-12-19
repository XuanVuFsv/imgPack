import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;


  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  Login(): void {
    const loginInfor = {
      email: this.email.nativeElement.value,
      password: this.password.nativeElement.value
    };
    console.log(loginInfor);

    this.loginService.RequestLogin(loginInfor).subscribe(data => {
      console.log(data.user.token);
      localStorage.setItem('accessToken', data.user.token);
  });
  }
}
