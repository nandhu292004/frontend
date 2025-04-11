import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getBooks().subscribe((data) => {
      this.books = data;
    }, (error) => {
      console.error('Error fetching books:', error);
    });
  }

  borrowBook(bookId: number): void {
    const studentId = 1;  // Replace with the actual student ID from authentication

    console.log("Sending student_id:", studentId);
    console.log("Sending book_id:", bookId);

    this.apiService.borrowBook(studentId, bookId).subscribe(
      (response) => {
        alert(response.message);
        this.ngOnInit(); // Refresh book list
      },
      (error) => {
        console.error("Error borrowing book:", error);
        alert("Failed to borrow the book. Please try again.");
      }
    );
} 
}
