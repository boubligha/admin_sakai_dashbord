import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sakai-admin';
  sidebarVisible = true;
  currentPage = 'Dashboard';
  
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects;
      if (url.includes('/employees')) {
        this.currentPage = 'Employee Management';
      } else if (url.includes('/dashboard') || url === '/') {
        this.currentPage = 'Dashboard';
      }
    });
  }
  
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
  
  getPageTitle(): string {
    return this.currentPage;
  }
}
