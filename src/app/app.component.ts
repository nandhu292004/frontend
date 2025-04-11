import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // ✅ Import HttpClientModule
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Standalone mode
  imports: [CommonModule, HttpClientModule, HeaderComponent,RouterOutlet], // ✅ Add HttpClientModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-management';
}
