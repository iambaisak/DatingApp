import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from '../_models/doctor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Servelist',
  templateUrl: './Servelist.component.html',
  styleUrls: ['./Servelist.component.css']
})
export class ServelistComponent implements OnInit {
  @Input() doctor: Doctor;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
