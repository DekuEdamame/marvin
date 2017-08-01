import { Component } from '@angular/core';
import { Http, URLSearchParams, Headers  } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-jwt-generator',
  templateUrl: './app.jwt-gen.html',
  styleUrls: ['./app.jwt-gen.css']
})
export class JwtGenerator {


  jsonWebToken;
  subject;
  expiration;
  name;
  scope;
  signature;
  url;

 constructor(private http: Http) {}



  getToken(subject: string, expiration: string, name: string, scope: string, signature: string){
    
    this.subject = subject;
    this.expiration = expiration;
    this.name = name;
    this.scope = scope;
    this.signature = signature;
    
    this.url = "http://localhost:8080/tokenhandler?subject=" + this.subject + "&expiration=" + this.expiration + "&name=" + this.name + "&scope=" + this.scope + "&signature=" + this.signature;

    this.setStatus();
  }



    getStatus() {

    return this.http.get(this.url)
    .map(response => response.text())

  }

  setStatus() {
    this.getStatus()
    .subscribe(
        data => { this.jsonWebToken = data },
        err => console.error(err),
        );
  }



  

}
