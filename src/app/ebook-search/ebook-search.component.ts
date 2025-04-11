import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule,CommonModule],
  selector: 'app-ebook-search',
  templateUrl: './ebook-search.component.html',
  styleUrls: ['./ebook-search.component.css']
})
export class EbookSearchComponent {
  searchQuery: string = '';
  results: any[] = [];

  constructor(private http: HttpClient) {}

  searchBooks() {
    if (!this.searchQuery.trim()) return;

    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${this.searchQuery}`;
    this.http.get(apiUrl).subscribe((res: any) => {
      this.results = res.items || [];
    });
  }
}
