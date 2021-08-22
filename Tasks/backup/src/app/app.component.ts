import { Component } from '@angular/core';
import {animate, animation, state, style, transition, trigger} from "@angular/animations";
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //public readonly imgPath = 'src/assets/images/background/background.jpg';
  title = 'UserListV6';
}
