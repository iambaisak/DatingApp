import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../_models/doctor';
import { AlertifyService } from '../../_services/alertify.service';
import { DoctorService } from '../../_services/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors: Doctor[];
  search;
  constructor(private doctorService: DoctorService, private alertify: AlertifyService, private route: ActivatedRoute) { }


  ngOnInit() {
        this.loadDoctors();
  }

  loadDoctors(){
    this.doctorService.getDoctors().subscribe((doctors: Doctor[]) => {
      this.doctors = doctors;
    }, error => {
      this.alertify.error(error);
    });
  }
}