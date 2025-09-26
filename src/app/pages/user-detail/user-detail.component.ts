import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  standalone: true
})
export class UserDetailComponent implements OnInit {
  user: User | null = null;
  loading = true;
  error = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.loadUser(id);
    }
  }

  loadUser(id: number) {
    this.loading = true;
    this.error = '';

    this.userService.getUserById(id).subscribe({
      next: (response) => {
        this.user = response.data;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Error al cargar el usuario';
        this.loading = false;
      }
    });
  }

  deleteUser() {
    if (this.user && confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.userService.deleteUser(this.user.id).subscribe({
        next: () => {
          window.location.href = '/home';
        },
        error: (error) => {
          console.error('Error al eliminar usuario:', error);
        }
      });
    }
  }
}
