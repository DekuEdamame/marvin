import { Component } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import {AppServiceAOne} from './service-a-one/app.service-a-one';
import {AppServiceATwo} from './service-a-two/app.service-a-two';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-service-a',
  templateUrl: './app.service-a.html',
  styleUrls: ['./app.service-a.css']
})
export class AppServiceA {
  

  public appName = "App One";
  public appVersionCheck;
  public appVersionOne;
  public appVersionTwo;

 
  constructor (private appServiceAOne: AppServiceAOne, private appServiceATwo: AppServiceATwo) {}


    ngOnInit() {
    Observable.forkJoin([this.appServiceAOne.getStatus(), this.appServiceATwo.getStatus()])
    .subscribe(
      data => {
        this.appVersionOne = data[0][0].appInfo[0].version;
        this.appVersionTwo = data[1][0].appInfo[0].version;
        if (this.appVersionOne == this.appVersionTwo ) {
          this.appVersionCheck = "Match"
        } else {
          this.appVersionCheck = "Mismatch"
        }
       },
       err => console.error(err),
    );
    }
  }
