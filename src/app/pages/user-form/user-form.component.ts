import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  standalone: true
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  isEditMode = false;
  userId: number | null = null;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Crear formulario reactivo con validaciones
    this.userForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(2)]],
      last_name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      image: ['', [Validators.required, Validators.pattern('https?://.+')]]
    });
  }

  ngOnInit() {
    // Verificar si estamos en modo edición
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.userId = Number(id);
      this.loadUserData();
    }
  }

  loadUserData() {
    if (this.userId) {
      this.loading = true;
      this.userService.getUserById(this.userId).subscribe({
        next: (response) => {
          const user = response;
          this.userForm.patchValue({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            image: user.image
          });
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Error al cargar los datos del usuario';
          this.loading = false;
        }
      });
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.loading = true;
      this.error = '';

      const userData = this.userForm.value;

      if (this.isEditMode && this.userId) {
        // Actualizar usuario existente
        this.userService.updateUser(this.userId, userData).subscribe({
          next: (response) => {
            this.loading = false;
            this.router.navigate(['/home']);
          },
          error: (error) => {
            this.error = 'Error al actualizar el usuario';
            this.loading = false;
          }
        });
      } else {
        // Crear nuevo usuario
        this.userService.createUser(userData).subscribe({
          next: (response) => {
            this.loading = false;
            this.router.navigate(['/home']);
          },
          error: (error) => {
            this.error = 'Error al crear el usuario';
            this.loading = false;
          }
        });
      }
    } else {
      // Marcar todos los campos como touched para mostrar errores
      this.userForm.markAllAsTouched();
    }
  }

  // Método para obtener errores de un campo específico
  getFieldError(fieldName: string): string {
    const field = this.userForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors['required']) {
        return `${fieldName.replace('_', ' ')} es obligatorio`;
      }
      if (field.errors['email']) {
        return 'Email no válido';
      }
      if (field.errors['minlength']) {
        return `Mínimo ${field.errors['minlength'].requiredLength} caracteres`;
      }
      if (field.errors['pattern']) {
        return 'URL de imagen no válida';
      }
    }
    return '';
  }

  // Verificar si un campo tiene errores
  hasFieldError(fieldName: string): boolean {
    const field = this.userForm.get(fieldName);
    return !!(field && field.errors && field.touched);
  }

  cancel() {
    this.router.navigate(['/home']);
  }
}
