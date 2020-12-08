import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SelectOption } from '../_models/selectOption';


@Injectable({
    providedIn: 'root'
  })
  export class OccupationService {
  
    constructor(private http: HttpClient) {
    }
  
    getAllOccupation() {
      return this.http.get<SelectOption[]>(`${environment.apiBase}/occupations`);
  
    }
}
  