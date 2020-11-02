import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../_models/doctor';
import { AlertifyService } from '../_services/alertify.service';
import { ServeService } from '../_services/Serve.service';

@Component({
  selector: 'app-ServiceDepartment',
  templateUrl: './ServiceDepartment.component.html',
  styleUrls: ['./ServiceDepartment.component.css']
})
export class ServiceDepartmentComponent implements OnInit {
  doctors: Doctor[];

  constructor(private serveService: ServeService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadDoctors();
  }


  loadDoctors(){
    // tslint:disable-next-line: deprecation
    const key = 'department';
    this.serveService.getDepDoctors(this.route.snapshot.params[key]).subscribe((doctors: Doctor[]) => {
      this.doctors = doctors;
    }, error => {
      this.alertify.error(error);
    })
  }

}
