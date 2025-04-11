import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalBooks: number = 0;
  borrowedCount: number = 0;
  availableCount: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Get total books
    this.apiService.getAllBooks().subscribe(allBooks => {
      this.totalBooks = allBooks.length;
      this.availableCount = allBooks.filter((b: any) => b.available).length;
    });

    // Get borrowed count
    this.apiService.getBorrowedCount().subscribe(data => {
      this.borrowedCount = data.borrowedCount;
    });
  }
}
