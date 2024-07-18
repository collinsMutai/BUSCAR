import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { CommonService } from 'src/app/services/common.service';
import { ServiceService } from 'src/app/services/service.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[DatePipe]
})
export class HeaderComponent implements OnInit {
  loginForm: FormGroup;
  type='1'
  codes=['254','255']
  registerForm: FormGroup;
  user:any={};
  @Input() open=false;
  date = new Date();
  max_date = this.date.setFullYear(this.date.getFullYear()-18);
  authenticated=false;
  device_number = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  @ViewChild('loginModal', { static: false }) loginModal: ModalDirective;
  @ViewChild('otpModal', { static: false }) otpModal: ModalDirective;
  otpForm: FormGroup;
  constructor(private formBuilder: FormBuilder,public commoService:CommonService,public service:ServiceService,private spinner: NgxSpinnerService,public toastr:ToastrService,public datePipe:DatePipe) {
    if(sessionStorage.getItem('loggedUser')!=undefined){
      this.authenticated = true
      this.user = JSON.parse(sessionStorage.getItem('loggedUser'))
    }
   }
  ngOnInit(): void {
    this.commoService.login_modal.subscribe((res)=>{
      if(res){
        this.loginModal.show();
      }
    })
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password:['', Validators.required],
      gcm_token:[''] ,
      country_code:['254', Validators.required]
    });

    this.otpForm = this.formBuilder.group({
      code: ['', Validators.required],
    });

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      password:['', Validators.required],
      phone:['', Validators.required],
      country_code:['', Validators.required]
    });


  }
login(){
  this.spinner.show();
  this.service.login(this.loginForm.value).subscribe((res)=>{
    if(res.isSuccess){
      this.spinner.hide();
      sessionStorage.setItem("loggedUser",JSON.stringify(res.data));
      this.user=res.data;
      this.toastr.success("login successfull",'Success')
      this.authenticated=true;
      this.commoService.authenticated.next(true);
      this.loginForm.reset();
      this.loginModal.hide()
    }else{
      this.toastr.error('Incorrect Credentials','Login Failed');
      this.spinner.hide();
    }
  })
}
register(){
this.spinner.show();
let data = this.registerForm.value
data.device_number=this.device_number
data.date_of_birth=this.datePipe.transform(data.dob,'yyyy-MM-dd')
delete data.dob
this.service.sigup(data).subscribe((res)=>{
  this.spinner.hide();
  if(res.isSuccess){
    this.loginModal.hide()
    this.toastr.success("Registeration successfull",'Success');
    this.otpModal.show();
  }else{
    this.toastr.error('Registration failed','Request Failed');

  }
})
}
onOtp(){
  this.spinner.show();
  let data = {
    "otp_number": this.otpForm.get('code').value,
    "device_number":this.device_number,
    "gcm_token": "",
}
this.service.otpVerification(data).subscribe((res)=>{
  if(res.isSuccess){
    this.otpModal.hide();
    this.spinner.hide();
    this.toastr.success("Successfully verified","Success");
  }else{
    this.spinner.hide();
    this.toastr.error(res.errors.otp[0],"Failed");
  }
})
}
logout(){
  sessionStorage.clear();
  this.authenticated=false;
  this.commoService.authenticated.next(false);

}
}
