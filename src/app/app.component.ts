import { Component, OnInit } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  remoteComponent: any; 
  ngOnInit(): void {
 
  }
  title = 'host_angular';


}
