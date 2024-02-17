import { Component } from '@angular/core';
import { UserPageComponent } from './users/pages/user-page/user-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [UserPageComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {

}
