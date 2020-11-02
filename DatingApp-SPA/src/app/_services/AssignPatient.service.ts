import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from '../_models/doctor';
import { Patient } from '../_models/Patient';

@Injectable({
  providedIn: 'root'
})
export class AssignPatientService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) {}
getPatientDoctors(name): Observable<Patient[]>{
  return this.http.get<Patient[]>(this.baseUrl + 'doctors/' + name);
}
}