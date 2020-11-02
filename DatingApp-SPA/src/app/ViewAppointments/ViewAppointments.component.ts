import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorAppointment } from '../_models/DoctorAppointment';
import { AlertifyService } from '../_services/alertify.service';
import { DoctorAppointmentServiceService } from '../_services/DoctorAppointmentService.service';

@Component({
  selector: 'app-ViewAppointments',
  templateUrl: './ViewAppointments.component.html',
  styleUrls: ['./ViewAppointments.component.css']
})
export class ViewAppointmentsComponent implements OnInit {
  doctorappointments: DoctorAppointment[];

  constructor(private doctorappointmentservice: DoctorAppointmentServiceService, 
    private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.GetDoctorAppointment();
  }


  GetDoctorAppointment(){
    // tslint:disable-next-line: deprecation
    const key = 'id';
    this.doctorappointmentservice.GetDoctorAppointment(this.route.snapshot.params[key])
    .subscribe((doctorappointments: DoctorAppointment[]) => {
      this.doctorappointments = doctorappointments;
    }, error => {
      this.alertify.error(error);
    })
  }

}
