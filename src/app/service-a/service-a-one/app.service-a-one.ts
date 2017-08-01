import { Component } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-service-a-one',
  templateUrl: './app.service-a-one.html',
  styleUrls: ['./app.service-a-one.css']
})
export class AppServiceAOne {
  
  public appName;
  public appVersion;
  public appStatus;
  public appUptime;
  public appMsgIn;
  public appMsgOut;
 
  public doughnutChartLabels:string[] = ['Messages In', 'Messages Out'];
  public doughnutChartData:number[] = [315, 256];
  public doughnutChartType:string = 'doughnut';


  constructor(private http: Http) { }

    ngOnInit() {
    this.setStatus();
  }
 
  getStatus() {
    return this.http.get('/app/appAOne')
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
          console.log(this.appMsgIn)
          console.log(this.doughnutChartData)
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
