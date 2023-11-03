import { Component } from '@angular/core';
import { IMenuItem } from 'src/app/models/menu';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  mainMenu: Array<IMenuItem> = [
    { name: 'Home', icon: 'Home', routerLink: '#' },
    { name: 'Home1', icon: 'Home1', routerLink: '#1' },
    { name: 'Home1', routerLink: '#1' },


  ]
}
