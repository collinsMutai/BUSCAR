import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  passwordForm: FormGroup;

  displayedColumns: string[] = ['position', 'name', 'amount', 'status','comment'];
  tripColumns: string[] = ['date', 'route', 'boarding', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  trips = new MatTableDataSource([])
  @ViewChild(MatPaginator) paginator: MatPaginator;
  registerForm: FormGroup;
  codes=['254']
  user:any={};
  i={ "userId": "222950", "username": "", "email": "paul@gmail.com", "api_token": "vPZBSfUwUTzfKiNKVSXiOVsWO52Fn1BJVyB3W02H8NrmWeS6jk_1665804977", "country_code": "254", "phone": "799442437", "age": "22", "name": "Paul Obiero", "last_name": "Obiero", "gender": "male", "currencyId": "0", "identity_number": "0121975" }
  constructor(private formBuilder: FormBuilder,public toastr:ToastrService,public service:ServiceService,public spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.user=JSON.parse(sessionStorage.getItem('loggedUser'));
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      phone:['', Validators.required],
      country_code:['', Validators.required]
    });
    this.passwordForm = this.formBuilder.group({
      current: ['', Validators.required],
      password:['', Validators.required],
      confirm:['', Validators.required],
    });
   this.registerForm.patchValue({name:this.user.name,country_code:this.user.country_code,gender:this.user.gender,phone:this.user.phone})
   console.log(this.registerForm.value);
  }
  changePassword(){
  this.spinner.show();
  let data = this.passwordForm.value
  if(data.password !=data.confirm){
    this.toastr.info("Password didn't match","Password Mismatch")
    return
  }
  this.service.changePassword({"newPassword":data.password,"confirmPassword":data.confirm,"oldPassword":data.current,"country_code":this.user.country_code,"sourcetype": "web"}).subscribe((res)=>{
    if(res.isSuccess){
      this.spinner.hide();
      this.toastr.success("Password Succefully changed","Success");
      this.passwordForm.reset();
    }else{
      this.spinner.hide();
      this.toastr.error(res.msg,"Failed")
    }
  })
}
}
const ELEMENT_DATA = [
];
