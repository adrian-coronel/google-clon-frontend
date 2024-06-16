import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  searchText: string = ''

  constructor(private router: Router) {}

  search() {
    const query = encodeURIComponent(this.searchText)
    this.router.navigate(['/search', query])
  }

}
