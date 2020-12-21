import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './login.service';

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

    console.log(Math.random()*100);
    // this.loginService.RequestLogin({
    //   email: "thanhan@gmail.com",
    //   password: "123456"
    // }).subscribe(data => {
    //   console.log(data);
    // });
  }

  Login(): void {
    const loginInfor = {
      email: this.email.nativeElement.value,
      password: this.password.nativeElement.value
    };
    console.log(loginInfor);

    this.loginService.RequestLogin(loginInfor).subscribe(data => {
      console.log(data.user);
  });
  }
}
