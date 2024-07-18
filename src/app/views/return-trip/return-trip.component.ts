import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { BookingService } from 'src/app/services/booking.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-return-trip',
  templateUrl: './return-trip.component.html',
  styleUrls: ['./return-trip.component.scss']
})
export class ReturnTripComponent implements OnInit {
 
  modify=false;
  params:any={};
  selected="onward"

  constructor(public service:ServiceService,public activated:ActivatedRoute,private formBuilder: FormBuilder,public bookingService:BookingService,public commonService:CommonService) { }
  ngOnInit() {
   this.activated.paramMap.subscribe((res)=>{  
    this.params.source_city_id=res.get('id1')
    this.params.destination_city_id=res.get('id2')
    this.params.travel_date =res.get('id3')
    this.params.source_city=res.get('id4');
    this.params.dest_city=res.get('id5');
    this.params.return_date =res.get('id6')
    this.bookingService.setBookingParams(this.params)
   })
  }



countinueReturn(value){
  if(value){
    this.selected='return'
  }
}

}
