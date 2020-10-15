import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServelistComponent } from './Servelist/Servelist.component';
import { DoctorsComponent } from './doctorss/doctors/doctors.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { appRoutes } from './routes';
import { DoctorCardComponent } from './doctorss/doctor-card/doctor-card.component';

@NgModule({
  declarations:  [
    AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ServelistComponent,
      DoctorsComponent,
      AppointmentsComponent,
      DoctorCardComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter:() => {
          return localStorage.getItem('token');
        },
        allowedDomains: ['localhost:5000'],
        disallowedRoutes: ['localhost:5000/api/auth']
      }
    })
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {  }