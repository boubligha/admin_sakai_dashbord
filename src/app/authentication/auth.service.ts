import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private router: Router) { }

  login(email: string, password: string): Observable<boolean> {
    // For demo purposes, accept any valid email/password
    if (email && password && password.length >= 6) {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      return of(true);
    }
    return of(false);
  }

  register(email: string, password: string, firstName: string, lastName: string): Observable<boolean> {
    // For demo purposes, just pretend to register
    return of(true);
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

  checkAuthStatus(): boolean {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    return this.isLoggedIn;
  }
}