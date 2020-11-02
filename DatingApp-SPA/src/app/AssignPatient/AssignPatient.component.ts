import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../_models/Patient';
import { AlertifyService } from '../_services/alertify.service';
import { AssignPatientService } from '../_services/AssignPatient.service';


@Component({
  selector: 'app-AssignPatient',
  templateUrl: './AssignPatient.component.html',
  styleUrls: ['./AssignPatient.component.css']
})
export class AssignPatientComponent implements OnInit {

  patients: Patient[];

  constructor(private assignPatientService: AssignPatientService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadDoctors();
  }
  loadDoctors(){
    // tslint:disable-next-line: deprecation
    const key = 'name';
    this.assignPatientService.getPatientDoctors(this.route.snapshot.params[key]).subscribe((patients: Patient[]) => {
      this.patients = patients;
    }, error => {
      this.alertify.error(error);
    })
  }

}
