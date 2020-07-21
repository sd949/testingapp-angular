import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allownewserver=false;
  serverstatus='not clicked yet';
  serverName='some';

  constructor() {
    setTimeout(()=>{
      this.allownewserver=true;
    },2000)
    
   }

  ngOnInit(): void {
  }
onclickserver(){
  this.serverstatus='now it is clicked and server name is '+ this.serverName;
}
onUpdateServerName(event:Event){
this.serverName=(<HTMLInputElement>event.target).value;
}
}
