import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { ModalDirective } from 'ngx-bootstrap/modal';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment.prod';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  @ViewChild('paymentModal', { static: false }) paymentModal?: ModalDirective;
  payments=[];
  paymentForm: FormGroup;
  user: any={};
  data:any={};
  selected=0;
  seconds=20;
  ref_no='';
  id;
  id1;
  selectedPaymentMethod;
  method='Tigo';
  time: any={};
  currency=""
  paymentMethods= [
    {
      name: 'vodacom',
      logoUrl: 'assets/img/Vodacom-logo.png'
    },
    {
      name: 'tigo',
      logoUrl: 'assets/img/tigo.png'
    },
    // Add more payment methods as needed
  ];
  constructor(public service:ServiceService,private formBuilder: FormBuilder,public commonService:CommonService,public toastr:ToastrService,public spinner:NgxSpinnerService,public activated:ActivatedRoute,public router:Router) { }
  ngOnInit(): void {
    this.currency=sessionStorage.getItem('currencyId')
    console.log(this.currency);
    this.paymentForm = this.formBuilder.group({
      mobile: ['', Validators.required],
      country_code:['', Validators.required]
    });
    this.activated.paramMap.subscribe((res)=>{
      this.ref_no=res.get('reference');
    })
    this.commonService.review_info.subscribe((res)=>{
      if(Object.keys(res).length != 0){
          localStorage.setItem('transline.paymentDetail',JSON.stringify(res))
      }
    })
    this.data=JSON.parse(localStorage.getItem('transline.paymentDetail'))
    if(sessionStorage.getItem('loggedUser') !=undefined){
      this.user=JSON.parse(sessionStorage.getItem('loggedUser'))
      this.paymentForm.patchValue({country_code:this.user.country_code,mobile:this.user.phone});
      
    }else{
      let info = this.data.onwardticket.passenger[0]
      this.paymentForm.patchValue({country_code:info.mobileId,mobile:info.mobile})
    }
  

    
    this.service.paymentMethods({}).subscribe((res)=>{
      Object.entries(res).forEach(([key, value]) => {
        if(value){
          this.payments.push(key)
        }
      });
    })
   this.tickerTimer();
  }

  selectPaymentMethod(paymentMethod) {
    this.selectedPaymentMethod = paymentMethod;
  }

  makePayment(){
    this.spinner.show();
    let formData=this.paymentForm.value
    let data ={
      "bookingRef": this.ref_no,
      "queryoption":1,
      "queryvalue": formData.country_code+''+formData.mobile,
      "requestType": "ticket",
      "paymentMethod":this.currency=='3' ? "vodacom":"mpesa" ,
      "isWalletApply": false,
      "additionalInfo": {
        "onward": {"sponsorTrip": false, "discountId": 0},
        "return": {"sponsorTrip": false, "discountId": 0}
      },
      "token":environment.token
    }
  
    const key = CryptoJS.enc.Utf8.parse('y(9;d36HtO0QbTaQ');
    const iv = CryptoJS.lib.WordArray.random(16); 
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
    });
    const encryptedData = encrypted.toString();
    const encodedIV = iv.toString(CryptoJS.enc.Base64);
    this.service.makePayment({data:encryptedData,iv:encodedIV,token:environment.token}).subscribe((res)=>{
      this.spinner.hide();
      this.paymentModal.hide();
      if(res.isSuccess){
        localStorage.setItem("payment_status",'initiated');
        this.toastr.success("Successfully initiated","Success")
        this.payments.push("Mpesa Confirmation")
        this.selected=1;
        this.timer();
      }
    },(err)=>{
      this.spinner.hide();
    })
  }
timer(){
  this.id = setInterval(() => {
    --this.seconds
    if(this.seconds < 1){
      clearInterval(this.id);
      this.checkMpesaPayment()
    }
   }, 1000); 
}


tickerTimer(){
  this.id1 = setInterval(() => {
    let start= moment(sessionStorage.getItem('time'), 'HH:mm:ss a')
    let end=moment(); 
    let duration:any = moment.duration(end.diff(start));
    this.time=duration._data
    if(this.time.minutes==10){
      clearInterval(this.id1);
      localStorage.clear();
      this.router.navigateByUrl('/')
    }
   }, 1000); 
}
setIndex(index){
this.selected=index;
}
checkMpesaPayment(){
  this.spinner.show();
  let formData=this.paymentForm.value
  let data ={
    "bookingRef": this.ref_no,
    "queryoption":this.data.totalTicketPrice,
    "queryvalue": formData.country_code+''+formData.mobile,
    "originalBookingRef": this.ref_no,
    "uuid":this.ref_no,
    "requestType": "ticket",
  }
  this.service.checkMpesaPayment(data).subscribe((res)=>{
    if(res.isSuccess){
      this.spinner.hide()
    }else{
      this.payments.push("Paybill Option");
      this.selected=2;
      this.toastr.error("No Transaction Found","Transaction")
      this.spinner.hide();
    }
  },(err)=>{
    this.payments.push("Paybill Option");
    this.selected=2;
    this.toastr.error("No Transaction Found","Transaction")
    this.spinner.hide()
  })
}
openModal(){
  this.paymentModal.show();
}

@HostListener('window:beforeunload', ['$event'])
canLeavePage($event: any): Observable<void> {
  if(confirm('You data is loading. Are you sure you want to leave?')) {
    $event.preventDefault();
    return
  }
}
}
