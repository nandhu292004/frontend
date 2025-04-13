import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // ✅ Ensures this service is available globally
})
export class ApiService {
  private apiUrl = 'https://backend-lib-nine.vercel.app/'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/books`);
  }

  borrowBook(studentId: number, bookId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/borrow`,  { student_id: studentId, book_id: bookId } );
  }
  getBorrowedBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/borrowed-books`);
  }
  
  returnBook(borrowId: number, bookId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/return`, { borrow_id: borrowId, book_id: bookId });
  }
  
  getAllBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all-books`);
  }
  
  getBorrowedCount(): Observable<any> {
    return this.http.get(`${this.apiUrl}/borrowed-count`);
  }
  
  
}
