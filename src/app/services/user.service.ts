import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  User,
  UsersResponse,
  CreateUserRequest,
  CreateUserResponse
} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = 'https://peticiones.online/api/users';

  constructor(private http: HttpClient) { }

  // Obtener todos los usuarios
  getUsers(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(this.apiUrl);
  }

  // Obtener un usuario específico por ID
  getUserById(id: number): Observable<User> {
    return this.getUsers().pipe(
      map(response => {
        const user = response.results.find(u => u.id === id);
        if (!user) {
          throw new Error(`Usuario con ID ${id} no encontrado`);
        }
        return user;
      })
    );
  }

  // Crear un nuevo usuario
  createUser(userData: CreateUserRequest): Observable<CreateUserResponse> {
    return this.http.post<CreateUserResponse>(this.apiUrl, userData);
  }

  // Actualizar un usuario existente
  updateUser(id: number, userData: CreateUserRequest): Observable<CreateUserResponse> {
    return this.http.put<CreateUserResponse>(`${this.apiUrl}/${id}`, userData);
  }

  // Eliminar un usuario
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
