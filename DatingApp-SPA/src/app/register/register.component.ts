import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authservice: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  register(): void{
    this.authservice.register(this.model).subscribe(() => {
      this.alertify.success('registration successful');
    }, error => {
      this.alertify.error('Unable to register');
    });
  }

  cancel(): void{
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
