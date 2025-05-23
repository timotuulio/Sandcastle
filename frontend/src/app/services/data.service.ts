import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000/api/example'; // Backend URL

  constructor(private http: HttpClient) {}

  // Method to fetch data from backend
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
