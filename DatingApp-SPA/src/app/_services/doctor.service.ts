import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from '../_models/doctor';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.baseUrl + 'doctors');
  }
}
