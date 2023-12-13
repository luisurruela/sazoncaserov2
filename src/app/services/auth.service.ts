import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  login(username: string, password: string): boolean {
    // Lógica de autenticación, por ejemplo, verificar en una base de datos
    // Aquí puedes usar servicios HTTP para enviar credenciales al servidor
    // y recibir una respuesta de autenticación.

    // Si la autenticación es exitosa, establece isLoggedIn en true.
    // De lo contrario, mantenlo en false.

    this.isLoggedIn = true; // Cambia esto según tu lógica de autenticación.
    return this.isLoggedIn;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}