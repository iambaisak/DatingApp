import {Routes} from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DoctorsComponent } from './doctorss/doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { ServelistComponent } from './Servelist/Servelist.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'servelist', component: ServelistComponent},
            { path: 'appointments', component: AppointmentsComponent},
            { path: 'doctors', component: DoctorsComponent},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];