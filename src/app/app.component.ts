
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-angular';
  configuration = {
    c: 4,
    f: 6,
  }

  buttonClicked(event: number) {
    alert(event);
  }
}
