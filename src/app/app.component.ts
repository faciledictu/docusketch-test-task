import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

const iconNames = Object.keys(fas);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  timeout = 3000;

  buttonTitle = 'Show icon';

  icon!: IconProp;

  changeIcon(): void {
    setTimeout(() => {
      const i = Math.floor(Math.random() * iconNames.length);
      this.icon = fas[iconNames[i]];
    }, this.timeout);
  }
}
