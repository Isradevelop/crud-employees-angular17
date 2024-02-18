import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offcanvas-info',
  standalone: true,
  imports: [],
  templateUrl: './offcanvas-info.component.html',
  styleUrl: './offcanvas-info.component.css'
})
export class OffcanvasInfoComponent {
  @Input() selectedUser: any;
  @Input() moreDetails: any;
}
