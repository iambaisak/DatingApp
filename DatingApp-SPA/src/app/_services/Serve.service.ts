import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from '../_models/doctor';

@Injectable({
  providedIn: 'root'
})
export class ServeService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) {}

getDepDoctors(department): Observable<Doctor[]>{
  return this.http.get<Doctor[]>(this.baseUrl + 'servelist/' + department);
}

}
