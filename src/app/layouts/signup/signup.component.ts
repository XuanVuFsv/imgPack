import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data){
    this.http.post('https://imgpack.herokuapp.com/api/v1/sign-up',data)
    .subscribe((result)=>{
      console.log("result",result)
    })
    console.log(data);
    alert('Sign Up Success !');
    
  }

}
