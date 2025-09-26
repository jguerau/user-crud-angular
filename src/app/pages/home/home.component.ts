import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  loading = true;
  error = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    console.log('Iniciando carga de usuarios...');
    this.loading = true;
    this.error = '';

    this.userService.getUsers().subscribe({
      next: (response) => {
        console.log('Respuesta de la API:', response);
        this.users = response.results; // Cambié data por results
        this.loading = false;
        console.log('Usuarios cargados:', this.users);
      },
      error: (error) => {
        console.error('Error al cargar usuarios:', error);
        this.error = 'Error al cargar usuarios';
        this.loading = false;
      }
    });
  }

  deleteUser(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          console.log('Usuario eliminado, recargando lista...');
          this.loadUsers(); // Recargar la lista después de eliminar
        },
        error: (error) => {
          console.error('Error al eliminar usuario:', error);
          alert('Error al eliminar el usuario');
        }
      });
    }
  }
}
