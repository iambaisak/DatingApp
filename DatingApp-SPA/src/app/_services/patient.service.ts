import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../_models/Patient';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) {
 }

getPatients(): Observable<Patient[]>{
  return this.http.get<Patient[]>(this.baseUrl + 'patients');
}

}
