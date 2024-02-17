import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offcanvas-edit',
  standalone: true,
  imports: [],
  templateUrl: './offcanvas-edit.component.html',
  styleUrl: './offcanvas-edit.component.css'
})
export class OffcanvasEditComponent {
  @Input() selectedUser: any;
}
