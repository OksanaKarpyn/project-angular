import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMenuItem } from 'src/app/models/menu';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

  @Input()
  config: any;
  @Output()
  action = new EventEmitter();

  mainMenu: Array<IMenuItem> = [
    { name: 'Home', icon: 'home', routerLink: '' },
    { name: 'About', icon: 'about', routerLink: 'about' },
    { name: 'Contact', routerLink: 'contact' },


  ]
}
