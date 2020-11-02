import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddpatientService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

AddPatient(model: any){
  return this.http.post(this.baseUrl + 'patients/' + 'add', model);
}
}
