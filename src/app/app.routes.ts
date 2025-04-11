import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
         path: '', redirectTo: '/login', pathMatch: 'full' 
    },
    {
        path: 'login',
        loadComponent() {
            return import('./login/login.component').then((m)=>m.LoginComponent);
        },
    },
    {
        path:'home',
        loadComponent(){
            return import('./home/home.component').then((m)=>m.HomeComponent);
        }
    },
    {
        path:'available-books',
        loadComponent(){
            return import('./components/book-list/book-list.component').then((m)=>m.BookListComponent);
        }
    },
    {
        path:'borrowed-books',
        loadComponent() {
            return import('./components/borrow-books/borrow-books.component').then((m)=>m.BorrowBooksComponent);
        },
    },
    {
        path: 'ebooks',
        loadComponent() {
            return import('./ebook-search/ebook-search.component').then((m)=>m.EbookSearchComponent);
        },
    }
];
