import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverID = 10;
  serverStatus = 'offline';
  constructor() {
    setTimeout(()=>{
    this.allowNewServer = true;
  },2000)  }

  ngOnInit() {
  }

}
