import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BookappointmentService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

AddAppointment(model: any){
  return this.http.post(this.baseUrl + 'appointments/', model);
}

}
