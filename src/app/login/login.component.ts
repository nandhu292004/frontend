import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule,CommonModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const payload = { email: this.email, password: this.password };
    this.http.post<any>('http://localhost:5000/login', payload).subscribe(
      (res) => {
        // You can store token or student info here if needed
        localStorage.setItem('studentId', res.student_id);
        this.router.navigate(['/home']);
      },
      (err) => {
        this.errorMessage = 'Invalid email or password';
      }
    );
  }
}
