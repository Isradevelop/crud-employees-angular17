import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.css'
})

export class UserSearchComponent {
  @Output() wordToSearchEvent = new EventEmitter<string>();
  wordToSearch: string = '';


  emitWord() {
    this.wordToSearchEvent.emit(this.wordToSearch);
    this.wordToSearch = '';
  }
}
