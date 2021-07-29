import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data: String;

  constructor() {
    this.data = "victor";
  }
}
