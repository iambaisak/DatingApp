import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../_models/Patient';
import { AlertifyService } from '../_services/alertify.service';
import { PatientService } from '../_services/patient.service';

@Component({
  selector: 'app-Patients',
  templateUrl: './Patients.component.html',
  styleUrls: ['./Patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[];


  constructor(private patientService: PatientService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadPatients();
  }

  loadPatients(){
    this.patientService.getPatients().subscribe((patients: Patient[]) => {
      this.patients = patients;
    }, error => {
      this.alertify.error(error);
    });
  }
}
