import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { BookappointmentService } from '../_services/bookappointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  @Output() cancelAdd = new EventEmitter();
  model: any = {};

  constructor(private alertify: AlertifyService, private bookappointmentservice: BookappointmentService) { }

  ngOnInit() {
  }
  AddAppointment(){
    this.bookappointmentservice.AddAppointment(this.model).subscribe(() => {
      this.alertify.success('Appointment Added');
    },
    error => {
      this.alertify.error('Unable to add');
  });

}
  cancel(): void{
    this.cancelAdd.emit(false);
    console.log('cancelled');
  }

}
