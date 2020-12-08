import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class CalculationService {
  
    constructor(private http: HttpClient) {
    }
  
    calculatePremium(occupationId: number, coverAmount: number, age: number) {
      return this.http.get<number>(`${environment.apiBase}/calculations/premium?occupationId=${occupationId}&coverAmount=${coverAmount}&age=${age}`);
    }
}
  