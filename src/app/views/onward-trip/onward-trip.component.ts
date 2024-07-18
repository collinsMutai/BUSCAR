import { Component, OnInit, ViewChild,EventEmitter,Output,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { BookingService } from 'src/app/services/booking.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { City } from '../home/home.component';

@Component({
  selector: 'app-onward-trip',
  templateUrl: './onward-trip.component.html',
  styleUrls: ['./onward-trip.component.scss'],
  providers:[DatePipe]
})
export class OnwardTripComponent implements OnInit {
  show=false;
  returnTicket=false;
  buses=[]
  seats=[];
  boarding_points=[];
  dropping_points=[];
  dropping:any={};
  boarding:any={};
  params:any={};
  obj:any={}
  seatList=[]
  total=0
  bus:any={}
  selectedTripData:any={}
  selectedData={}
  reviewInfo:any={};
  cities=[];
  destinations=[];
  filteredOptions: Observable<City[]>;
  destOptions: Observable<City[]>;
  loading=false;
  @ViewChild('reviewModal', { static: false }) public reviewModal: ModalDirective;
  @Output() proceed:EventEmitter<boolean>=new EventEmitter<boolean>();
  @Input() modify=false;
  searchForm: FormGroup;
  returnForm: FormGroup;
  boardingForm: FormGroup;
  constructor(public service:ServiceService,public activated:ActivatedRoute,private formBuilder: FormBuilder,public bookingService:BookingService,public route:Router,public datePipe:DatePipe) {
   
   }
  ngOnInit() {
    this.bookingService.reset();
    this.searchForm = this.formBuilder.group({
      date: ['', Validators.required],
      sourceCity:['', Validators.required],
      returnDate: [''],
      city_id:['', Validators.required],
      destCity:['',Validators.required],
      dest_id:['',],
    });

    this.returnForm = this.formBuilder.group({
      returnDate: [''],
     
    });

    this.initParams();
    this.bookingService.review_info.subscribe((res)=>{
     this.reviewInfo=res;
    })
    this.bookingService.selectedseatdata.subscribe((res)=>{
      this.selectedData=res
    })
    this.bookingService.selected_seats.subscribe((res)=>{
      this.seats=res;
    })
    this.bookingService.total.subscribe((res)=>{
      this.total=res;
    })
    this.bookingService.bording_points.subscribe((res)=>{
      this.boarding_points=res;
    })
    this.bookingService.dropping_points.subscribe((res)=>{
      this.dropping_points=res;
    })
    this.bookingService.seats.subscribe((res)=>{
      this.seatList=res
    })
    this.bookingService.trip_data.subscribe((res)=>{
      this.selectedTripData=res;
    })
  
    this.boardingForm = this.formBuilder.group({
      dropping:['', Validators.required],
      boarding:['', Validators.required],
    });
    this.initForm();
    this.getCities();
   this.filteredOptions = this.searchForm.get('sourceCity').valueChanges.pipe(
    startWith(''),
    map(value => {
       if(value.id){
        this.searchForm.patchValue({"city_id":value.id,"sourceCity":value.city_name})
        this.destination()
      }
      const name = typeof value === 'string' ? value : value?.city_name;
     
      return name ? this._filter(name as string) : this.cities.slice();
    }),
  );


  this.destOptions = this.searchForm.get('destCity').valueChanges.pipe(
    startWith(''),
    map(value => {
       if(value.id){
        this.searchForm.patchValue({"dest_id":value.id,"destCity":value.city_name})
      }
      const name = typeof value === 'string' ? value : value?.city_name;
     
      return name ? this._filterDestinations(name as string) : this.destinations.slice();
    }),
  );

  }
  initParams(){
    this.activated.paramMap.subscribe((res)=>{  
      this.params.source_city_id=res.get('id1')
      this.params.destination_city_id=res.get('id2')
      this.params.travel_date =res.get('id3')
      this.params.source_city=res.get('id4');
      this.params.dest_city=res.get('id5');
      this.params.return_date=res.get('id6');
      this.bookingService.setBookingParams(this.params)
      let data= {
        "source_city_id":res.get('id1'),
        "destination_city_id":res.get('id2'),
        "travel_date":res.get('id3'),
        "avg_rating": null,
        "departure_time": null,
        "fare": null,
        "seat_type": "",
        "travels": "",
        "boarding_points": [],
        "dropping_points": [],
        "bus_with_amenities": [],
        "high_rating": true,
        "bus_with_live_tracking": false,
        "cabs": false,
        "hot_deals": false,
        "on_time": false,
        "bus_type": [],
        "time_range": [],
        "record_type": "data",
        "currencyId": "1",
    }
    this.service.getTrips(data).subscribe((res)=>{
     this.buses = res.data;
     this.loading=true;
    })
     })
  }

  initForm(){
    if(this.params.return_date){
      this.searchForm.patchValue(({date:new Date(this.params.travel_date),sourceCity:this.params.source_city,destCity:this.params.dest_city,dest_id:this.params.destination_city_id,city_id:this.params.source_city_id,returnDate:new Date(this.params.return_date)}))
    }else{
      this.searchForm.patchValue(({date:new Date(this.params.travel_date),sourceCity:this.params.source_city,destCity:this.params.dest_city,dest_id:this.params.destination_city_id,city_id:this.params.source_city_id}))
    }
  }
  onSubmit(){
    let data=this.searchForm.value
    this.modify=false;
    this.route.navigate(['buslist',data.city_id,data.dest_id,this.datePipe.transform(data.date,'yyyy-MM-dd'),data.sourceCity,data.destCity,this.datePipe.transform(data.returnDate,'yyyy-MM-dd')])
  }
  getSeats(item){
    this.bus=item;
    this.bookingService.toggleBusDetail(item);
  
  }
 
  getCities(){
    this.service.getCities().subscribe((res)=>{
       this.cities = res.data
      })
  }
  
  private _filter(name: string){
    const filterValue = name.toLowerCase();
    return this.cities.filter(option => option.city_name.toLowerCase().includes(filterValue));
  }
  private _filterDestinations(name: string){
    const filterValue = name.toLowerCase();
    return this.destinations.filter(option => option.city_name.toLowerCase().includes(filterValue));
  }

  
  destination(){
    this.service.getDestinations(this.searchForm.get('city_id').value).subscribe((res)=>{
      this.destinations= res.data
    })
  }

  tooltip(item,bus){
    if(item.seat_type =='normal' || item.seat_type =='bclass' || item.seat_type =='vip'){
      let obj=bus.defaultTripPriceList.find(ob=>ob.seatType == item.seat_type)
      return item.seat_name+'| '+item.seat_type.charAt(0).toUpperCase() + item.seat_type.slice(1) +'|'+obj.currencyCode +' '+obj.amount
    }else{
      return item.seat_name+'| '+ item.seat_type.charAt(0).toUpperCase() + item.seat_type.slice(1) 
    }
   
  }

selectSeat(item){
   this.bookingService.selectSeat(item);
}
selectBoarding(item){
this.bookingService.changeBoarding(item);
}
selectDropping(item){
  this.bookingService.changeDropping(item);
}
save(){
  this.bookingService.saveOutward();
  this.proceed.emit(true)
}

}
