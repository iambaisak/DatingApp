import {Routes} from '@angular/router';
import { AddPatientComponent } from './AddPatient/AddPatient.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AssignPatientComponent } from './AssignPatient/AssignPatient.component';
import { DoctorsComponent } from './doctorss/doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { ServelistComponent } from './Servelist/Servelist.component';
import { ServiceDepartmentComponent } from './ServiceDepartment/ServiceDepartment.component';
import { ViewAppointmentsComponent } from './ViewAppointments/ViewAppointments.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'servelist', component: ServelistComponent},
            { path: 'servelist/:department', component: ServiceDepartmentComponent},
            { path: 'appointments', component: AppointmentsComponent},
            { path: 'doctors', component: DoctorsComponent},
            { path: 'patients', component: PatientsComponent},
            { path: 'doctors/:name', component: AssignPatientComponent},
            { path: 'patients/add', component: AddPatientComponent},
            { path: 'appointments/:id', component: ViewAppointmentsComponent}
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];