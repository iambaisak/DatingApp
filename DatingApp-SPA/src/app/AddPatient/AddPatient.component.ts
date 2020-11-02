import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddpatientService } from '../_services/addpatient.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-AddPatient',
  templateUrl: './AddPatient.component.html',
  styleUrls: ['./AddPatient.component.css']
})
export class AddPatientComponent implements OnInit {
  @Output() cancelAdd = new EventEmitter();
  model: any = {};

  constructor(private alertify: AlertifyService, private addpatientservice: AddpatientService) { }

  ngOnInit() {
  }

  addPatient(){
    this.addpatientservice.AddPatient(this.model).subscribe(() => {
      this.alertify.success('Patient Added');
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
