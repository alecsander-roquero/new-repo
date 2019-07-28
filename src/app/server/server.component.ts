import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverID = 10;
  serverStatus = 'offline';
  constructor() {
    setTimeout(()=>{
    this.allowNewServer = true;
  },2000)  }

  ngOnInit() {
  }
    onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
    }
}
