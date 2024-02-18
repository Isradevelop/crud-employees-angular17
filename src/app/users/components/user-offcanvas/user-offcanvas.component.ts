import { Component, Input } from '@angular/core';
import { OffcanvasInfoComponent } from '../offcanvas-info/offcanvas-info.component';
import { OffcanvasEditComponent } from '../offcanvas-edit/offcanvas-edit.component';

@Component({
  selector: 'app-user-offcanvas',
  standalone: true,
  imports: [OffcanvasInfoComponent, OffcanvasEditComponent],
  templateUrl: './user-offcanvas.component.html',
  styleUrl: './user-offcanvas.component.css'
})

export class UserOffcanvasComponent {
  @Input() selectedUser: any;
  isEdit = false;
  moreDetails = false;

  changeMoreDetails() {
    this.moreDetails = !this.moreDetails;
  }
  changeIsEdit() {
    this.isEdit = !this.isEdit;
  }
}
