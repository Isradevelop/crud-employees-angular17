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
  moreDetails = false;

  changeMoreDetails() {
    this.moreDetails = !this.moreDetails;
  }

}
