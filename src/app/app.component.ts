import { Component } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed: boolean;
 }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortafolioProyecto';

  isSidenavCollapsed = false;
  screenWidth =0;
  onToggleSideNav(data: SideNavToggle):void{
    this.screenWidth=data.screenWidth;
    this.isSidenavCollapsed=data.collapsed;
  }
  ngOnInit(){
    
  }
}
