import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from '../_models/doctor';
import { DoctorAppointment } from '../_models/DoctorAppointment';

@Injectable({
  providedIn: 'root'
})
export class DoctorAppointmentServiceService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  GetDoctorAppointment(id): Observable<DoctorAppointment[]>{
    return this.http.get<DoctorAppointment[]>(this.baseUrl + 'appointments/' + id);
  }
}
