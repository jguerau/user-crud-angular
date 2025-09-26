// src/app/interfaces/user.interface.ts

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  image: string;
  username: string;
}

export interface UsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  results: User[]; 
}

export interface SingleUserResponse {
  data: User;
}

export interface CreateUserRequest {
  first_name: string;
  last_name: string;
  email: string;
  image?: string;
}

export interface CreateUserResponse {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  image?: string;
  createdAt: string;
}
