import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { CommonService } from 'src/app/services/common.service';
import { ServiceService } from 'src/app/services/service.service';
import * as moment from 'moment';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit {
  primaryForm: FormGroup;
  codes=['254','255']
  data:any={};
  user:any={};
  passengers=[{"position":"Dev"},{"position":"Eng"}]
  passengers_forms=[]
  constructor(private formBuilder: FormBuilder,public commonService:CommonService,public service:ServiceService,public router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('loggedUser') !=undefined){
      this.user=JSON.parse(sessionStorage.getItem('loggedUser'))
    }else{
    }
    this.commonService.review_info.subscribe((res)=>{
      this.data=res
      if(Object.entries(res).length==0){
        this.router.navigateByUrl('/')
      }
    
    })
    if (window.confirm("Are you travelling?")) {
      if (Object.keys(this.user).length === 0) {
        
      } else {
      this.data.onwardticket.c_email=this.user.email ? this.user.email:'';
      this.data.onwardticket.currencyId=sessionStorage.getItem('currencyId');
      this.data.onwardticket.passenger[0].name = this.user.name;
      this.data.onwardticket.passenger[0].age = parseInt(this.user.age);
      this.data.onwardticket.passenger[0].gender = (this.user.gender == 'male') ? 'M' : 'F';
      this.data.onwardticket.passenger[0].id_no = this.user.identity_number;
      this.data.onwardticket.passenger[0].mobileId = '254';
      this.data.onwardticket.passenger[0].nationality = this.user.nationality;
      this.data.onwardticket.passenger[0].mobile = this.user.phone;
      this.data.onwardticket.selectedSeat=this.getSeatsBooked(this.data.onwardticket.passenger);
      this.data.onwardticket.bookedThrough="Web"
      }
      
    }
  }
  onClickSubmit(){
    delete this.data.onwardticket.fareBreakup
    let token=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 20);
    this.data.onwardticket.passenger.forEach((element,i)=> {
      element.bookedThrough="Web"
      if(this.data.returnticket){
        delete this.data.returnticket.fareBreakup
        this.data.returnticket.c_email=element.c_email ? element.c_email :'';
        this.data.returnticket.currencyId=sessionStorage.getItem('currencyId');
        this.data.returnticket.passenger[i].name =element.name
        this.data.returnticket.passenger[i].age = element.age
        this.data.returnticket.passenger[i].gender = element.gender
        this.data.returnticket.passenger[i].id_no = element.id_no
        this.data.returnticket.passenger[i].mobileId = element.mobileId
        this.data.returnticket.passenger[i].nationality = element.nationality
        this.data.returnticket.passenger[i].mobile = element.mobile
        this.data.returnticket.selectedSeat=this.getSeatsBooked(this.data.returnticket.passenger);
        this.data.returnticket.bookedThrough="Web"
        
      }
    });
    this.unsetNotRequiredParams();
    const key = CryptoJS.enc.Utf8.parse('y(9;d36HtO0QbTaQ');
    const iv = CryptoJS.lib.WordArray.random(16); 
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify({ticketDetail:this.data,bookedThrough:"web"}), key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
    });
    const encryptedData = encrypted.toString();
    const encodedIV = iv.toString(CryptoJS.enc.Base64);
  this.service.bookingTicket({data:encryptedData,iv:encodedIV,token:environment.token}).subscribe((res)=>{
    this.commonService.setToken(token);
    sessionStorage.setItem('time',moment().format('HH:mm:ss a'))
    if(res.isSuccess){
      this.router.navigate(['/payment',res.booking_reference,this.data.onwardticket.passenger[0].mobileId + this.data.onwardticket.passenger[0].mobile,token])
    }
  })
  
  }

  getSeatsBooked(item){
    let  seats =[]
    item.forEach(element => {
      seats.push(element.seat_id)
    });
    return seats
  }

  unsetNotRequiredParams = function () {
    for (var i = 0; i < this.data.onwardticket.passenger.length; i++) {
        delete this.data.onwardticket.passenger[i].left;
        delete this.data.onwardticket.passenger[i].top;
        delete this.data.onwardticket.passenger[i].seat_width;
        delete this.data.onwardticket.passenger[i].seat_height;
        delete this.data.onwardticket.passenger[i].seat_color;
        delete this.data.onwardticket.passenger[i].selection_status;
        delete this.data.onwardticket.passenger[i].discountType;
        delete this.data.onwardticket.passenger[i].selectSeat;
        delete this.data.onwardticket.passenger[i].seat_type_id;
        delete this.data.onwardticket.passenger[i].ticketId;
        delete this.data.onwardticket.passenger[i].discount;
        delete this.data.onwardticket.passenger[i].flatSaleId;
    }
    delete this.data.onwardticket.fareBreakup;
    if (this.data.returnticket) {
        delete this.data.returnticket.fareBreakup;
        if (this.data.returnticket.length > 0) {
            for (var j = 0; j < this.data.returnticket.passenger.length; j++) {
                delete this.data.returnticket.passenger[j].left;
                delete this.data.returnticket.passenger[j].top;
                delete this.data.returnticket.passenger[j].seat_width;
                delete this.data.returnticket.passenger[j].seat_height;
                delete this.data.returnticket.passenger[j].seat_color;
                delete this.data.returnticket.passenger[j].selection_status;
                delete this.data.returnticket.passenger[j].discountType;
                delete this.data.returnticket.passenger[j].selectSeat;
                delete this.data.returnticket.passenger[j].seat_type_id;
                delete this.data.returnticket.passenger[j].ticketId;
                delete this.data.returnticket.passenger[j].discount;
                delete this.data.returnticket.passenger[i].flatSaleId;
            }
        }
    }
};
initPassenger(){
  this.user=this.data.onwardticket.passenger[0]
  this.data.onwardticket.c_email=this.user.email ? this.user.email:'';
  this.data.onwardticket.currencyId=sessionStorage.getItem('currencyId');
  this.data.onwardticket.passenger[0].name = this.user.name;
  this.data.onwardticket.passenger[0].age = parseInt(this.user.age);
  this.data.onwardticket.passenger[0].gender = (this.user.gender == 'male') ? 'M' : 'F';
  this.data.onwardticket.passenger[0].id_no = this.user.id_no;
  this.data.onwardticket.passenger[0].mobileId = '254';
  this.data.onwardticket.passenger[0].nationality = this.user.nationality;
  this.data.onwardticket.passenger[0].mobile = this.user.mobile;
  this.data.onwardticket.selectedSeat=this.getSeatsBooked(this.data.onwardticket.passenger);
  
}
}
