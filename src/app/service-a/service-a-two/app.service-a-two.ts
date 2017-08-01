import { Component } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-service-a-two',
  templateUrl: './app.service-a-two.html',
  styleUrls: ['./app.service-a-two.css']
})
export class AppServiceATwo {
  
  public appName;
  public appVersion;
  public appStatus;
  public appUptime;
  public appMsgIn;
  public appMsgOut;
 
  public doughnutChartLabels:string[] = ['Messages In', 'Messages Out'];
  public doughnutChartData:number[] = [700, 180];
  public doughnutChartType:string = 'doughnut';


  constructor(private http: Http) { }

    ngOnInit() {
    this.setStatus();
  }
 
  getStatus() {
    return this.http.get('/app/appATwo')
      .map(res => res.json().data);
  }

  setStatus() {
    this.getStatus()
    .subscribe(
        data => {
          this.appName = data[0].appInfo[0].name;
          this.appVersion = data[0].appInfo[0].version;
          this.appStatus = data[0].appInfo[0].status;
          this.appUptime = data[0].appInfo[0].uptime;
          this.appMsgIn = data[0].workInfo[0].messages_received;
          this.appMsgOut = data[0].workInfo[0].messages_send;
        },
        err => console.error(err),
        );
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


}
