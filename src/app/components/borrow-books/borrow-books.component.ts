import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-borrow-books',
  imports: [CommonModule,DatePipe],
  templateUrl: './borrow-books.component.html',
  styleUrls: ['./borrow-books.component.css']
})
export class BorrowBooksComponent implements OnInit {
  borrowedBooks: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchBorrowedBooks();
  }

  fetchBorrowedBooks(): void {
    this.apiService.getBorrowedBooks().subscribe(
      (data) => {
        this.borrowedBooks = data;
      },
      (error) => {
        console.error("Error fetching borrowed books:", error);
      }
    );
  }
  returnBook(borrowId: number, bookId: number): void {
    this.apiService.returnBook(borrowId, bookId).subscribe(
      res => {
        alert(res.message);
        this.ngOnInit(); // Reload borrow list
      },
      err => {
        console.error("Return failed", err);
        alert("Failed to return the book.");
      }
    );
  }
  
}
