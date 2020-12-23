import { Router } from '@angular/router';
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
  @ViewChild('errorMessage') errorMessage: ElementRef;


  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    if (!window.localStorage.getItem('accessToken')) {
      this.router.navigate(['/login']);
    }
    else
    {
      this.router.navigate(['/homepage']);
    }
  }

  Login(): void {
    const loginInfor = {
      email: this.email.nativeElement.value,
      password: this.password.nativeElement.value
    };
    console.log(loginInfor);

    this.loginService.RequestLogin(loginInfor).subscribe(data => {
      localStorage.setItem('accessToken', data.user.token);
      this.router.navigate(['/homepage']);
    },
      error => {
        this.errorMessage.nativeElement.innerHTML = '*The email and/or password you entered are incorrect. Please try again.';
      });
  }
}
