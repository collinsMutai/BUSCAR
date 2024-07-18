import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { BookingService } from './booking.service';
import { BuslistService } from './buslist.service';
import { CommonService } from './common.service';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class ReturnService {
  selectedseat:BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  totalTicketPrice:BehaviorSubject<any> = new BehaviorSubject(0);
  defaultTripPriceList: any=[];
  selectedBoarding:BehaviorSubject<any> = new BehaviorSubject({});
  selectedDropping:BehaviorSubject<any> = new BehaviorSubject({});
  selectedTripData:BehaviorSubject<any> = new BehaviorSubject({});
  seatList: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  params:any={}
  seatPriceNotAviable: string='';
  notAviablePrice: string='';
  seatLoading: boolean;
  priceList: any;
  normalRemainingSeatLimit: number=0;
  vipRemainingSeatLimit: number=0;
  bclassRemainingSeatLimit: number=0;
  selectedSeatsData:BehaviorSubject<any> = new BehaviorSubject({});
  exceedSeatLimit = false;
  boardingPoint: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  droppingPoint: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  bookingdata:BehaviorSubject<any> = new BehaviorSubject({});
  seats= this.seatList.asObservable()
  trip_data= this.selectedTripData.asObservable()
  bording_points= this.boardingPoint.asObservable()
  dropping_points= this.droppingPoint.asObservable()
  total=this.totalTicketPrice.asObservable();
  selectedseatdata=this.selectedSeatsData.asObservable();
  selected_seats=this.selectedseat.asObservable()
  review_info=this.bookingdata.asObservable();
  selectSeatName: any[];
  constructor(public service:ServiceService,public busListService:BuslistService,public bookingService:BookingService,public commonService:CommonService) { }
  toggleBusDetail(eachbusdetail) {
    this.selectedseat.next([]);
    this.totalTicketPrice.next(0);
    this.defaultTripPriceList = [];
    this.selectedBoarding.next({});
    this.selectedDropping.next({});
    if (this.selectedTripData.value.bus_id == eachbusdetail.bus_id && this.selectedTripData.value.delayedDate == eachbusdetail.delayedDate) {
        this.selectedTripData.next({});
        this.seatList.next([]);
    } else {
        this.selectedTripData.next(eachbusdetail);
        this.getseatType();
        this.fetchSeatDetails(eachbusdetail);
        this.getEachTripBoradingDropping(eachbusdetail.bus_id);
        this.seatList.next([]);
    }
}

fetchSeatDetails(busDetails: any) {
  this.defaultTripPriceList = busDetails.defaultTripPriceList;
  // this.seatLoading = true;
  var params = {
      source_city_id: this.params.source_city_id,
      destination_city_id:this.params.destination_city_id,
      travel_date:this.params.travel_date,
      bus_id: busDetails.bus_id,
      delayedFlag:this.selectedTripData.value.delayedFlag,
      delayedDate: this.selectedTripData.value.delayedDate,
  };
  this.service.getSeats(params).subscribe((res)=>{
    this.calculateSeatsData(res);
    this.busListService.setOutwardSeatsList(res);
})

}

calculateSeatsData(data) {
 this.seatPriceNotAviable = "";
 this.notAviablePrice = "";
 this.seatLoading = false;
 this.seatList.next(data.data);
 console.log()
 this.priceList = data.priceList;
  for (var i = 0; i <this.seatList.value.length; i++) {
      for (var j = 0; j <this.defaultTripPriceList.length; j++) {
          if (this.seatList.value[i].seat_type ==this.defaultTripPriceList[j].seatType) {
             this.seatList.value[i].ticketPrice =this.defaultTripPriceList[j].amount;
             this.seatList.value[i].flatTicketPrice =this.defaultTripPriceList[j].amount;
             this.seatList.value[i].flatSaleId =this.defaultTripPriceList[j].flatSaleId;
             this.seatList.value[i].actualTicketPrice =this.defaultTripPriceList[j].originalFare;
             this.seatList.value[i].currency =this.defaultTripPriceList[j].currencyCode;
          }
      }
  }
}


getEachTripBoradingDropping(id) {
  var param = {
      "source":this.params.source_city_id ,
      "destination":this.params.destination_city_id,
      "trip": id,
      "booking_date":this.params.return_date,
      "delayedFlag": this.selectedTripData.value.delayedFlag,
      "delayedDate": this.selectedTripData.value.delayedDate,
  };
  this.service.getBoardingDroping(param).subscribe((data)=>{
    if (data) {
      this.busListService.setOutwardBoardingDropping(data);
      this.assignBoardingDroppingPoint(data);
  }

})
  
};
assignBoardingDroppingPoint(data) {
this.boardingPoint.next(data.boarding);
this.droppingPoint.next(data.dropping);
}
setBookingParams(data){
  this.params=data;
}

calculateSeatLimit() {
  this.normalRemainingSeatLimit = this.selectedTripData.value.normalallowedCount ? this.selectedTripData.value.normalallowedCount - this.selectedTripData.value.normalconsumedCount : 0;
  this.vipRemainingSeatLimit = this.selectedTripData.value.vipallowedCount ? this.selectedTripData.value.vipallowedCount - this.selectedTripData.value.vipconsumedCount : 0;
  this.bclassRemainingSeatLimit = this.selectedTripData.value.bclassallowedCount ? this.selectedTripData.value.bclassallowedCount - this.selectedTripData.value.bclassconsumedCount : 0;
}
 getseatType() {
  this.selectedSeatsData.next({});
  this.calculateSeatLimit();
  var data = this.busListService.getSeatTypeWisePriceList(this.selectedseat.value, this.vipRemainingSeatLimit, this.bclassRemainingSeatLimit, this.normalRemainingSeatLimit);
  if (data) {
      this.selectedseat.next(data.selectedseat);
      this.selectedSeatsData.next(data.seatData);
      this.vipRemainingSeatLimit = data.vipLimit;
      this.bclassRemainingSeatLimit = data.bclassLimit;
      this.normalRemainingSeatLimit = data.normalLimit;
  }
  this.getTotalTicketPrice();
}
getTotalTicketPrice() {

  this.totalTicketPrice.next(this.busListService.getTotalTicketPrice(this.selectedSeatsData.value));
}
changeDropping(item) {
  this.selectedDropping.next(item);
};
changeBoarding(item) {
  this.selectedBoarding.next(item);
};

selectSeat(eachseat) {
  if (eachseat.ticketPrice > 0) {
      if (!this.notAviablePrice) {
          if (eachseat.seat_type.toLowerCase().trim() === "staff" || eachseat.seat_name.toLowerCase().trim() === "staff" || eachseat.seat_type.toLowerCase().trim() === "1a" || eachseat.seat_name.toLowerCase().trim() === "1a") {
              console.log("This.is staff seat");
          } else {
              if (!eachseat.selection_status) {
                  var seatLimit = this.selectedTripData.value.isPromotional ? this.selectedTripData.value.seatSelectionLimit : 6;
                  if (this.checkSeatAlreadyExits(eachseat.seat_id)) {
                      if (this.selectedTripData.value.isPromotional && this.selectedTripData.value.seatSelectionLimit === 0) {
                          this.exceedSeatLimit = false;
                          this.selectedseat.value.push(eachseat);
                          this.getseatType();
                      } else if (this.selectedseat.value.length + 1 > seatLimit) {
                          alert("You can not select more than" + " " + seatLimit + " " + "seat");
                          this.exceedSeatLimit = true;
                      } else {
                          this.exceedSeatLimit = false;
                          this.selectedseat.value.push(eachseat);
                          this.getseatType();
                      }
                  }
                  this.checkSelectedSeats(eachseat.seat_id, "fromselect");
              }
          }
      }
  } else {
      if (eachseat.seat_type.toLowerCase().trim() === "driver" || eachseat.seat_name.toLowerCase().trim() === "door") {
          return false;
      } else if (eachseat.seat_type.toLowerCase().trim() === "staff" || eachseat.seat_name.toLowerCase().trim() === "staff") {
          console.log("This is staff seat");
      } else {
          console.log("Seat price not available for selected seat");
      }
  }
};

checkSeatAlreadyExits(seat_id) {
  for (var i = 0; i < this.selectedseat.value.length; i++) {
      if (this.selectedseat.value[i].seat_id == seat_id) {
          if (this.selectedseat.value[i].flat_sale == 1) {
              this.selectedseat.value[i].flat_sale = 0;
          }
          this.selectedseat.value.splice(this.selectedseat.value.indexOf(this.selectedseat[i]), 1);
          this.getseatType();
          return false;
      }
  }
  return true;
}
checkSelectedSeats(seatId, value) {
  this.seatList.value.forEach(eachSeatList => {
    if (eachSeatList.seat_id == seatId) {
      if (value == 'fromAlreadyBookedSeat') {
          eachSeatList.selection_status = true;
          eachSeatList.selectSeat = false;
      } else {
          if (eachSeatList.selectSeat) {
              eachSeatList.selectSeat = false;
          } else {
              if (!this.exceedSeatLimit) {
                  eachSeatList.selectSeat = true;
              }
          }
      }
  }
  });

}

saveReturn() {
  let booking = {
    booking_date: this.params.travel_date,
    pickup_id: this.params.source_city_id,
    return_id: this.params.destination_city_id,
    source_city:this.params.source_city,
    dest_city:this.params.dest_city,
    bus_title: this.selectedTripData.value.trip_code,
    company_logo: this.selectedTripData.value.company_logo,
    company_name: this.selectedTripData.value.company_name,
    currency: '254',
    departure_time: this.selectedTripData.value.departure_time,
    boardingPointId: (this.selectedBoarding.value) ? this.selectedBoarding.value.id : "",
    droppingPointId: (this.selectedDropping.value) ? this.selectedDropping.value.id : "",
    boardingPointname: (this.selectedBoarding.value) ? this.selectedBoarding.value.name : "",
    droppingPointname: (this.selectedDropping.value) ? this.selectedDropping.value.name : "",
    bus_id: this.selectedTripData.value.bus_id,
    currencyId:'KES',
    ticket_cnt: this.selectedseat.value.length,
    bs_number_of_seats: this.selectedTripData.value.available_seat_count,
    available_Seats: 'f',
    sub_total: this.totalTicketPrice.value,
    is_flat_offer: this.selectedTripData.value.flatOffer ? this.selectedTripData.value.flatOffer : false,
    tax: '0.00',
    total: this.totalTicketPrice.value,
    is_luggage: false,
    c_address: "",
    c_city: "",
    c_state: "",
    c_zip: "",
    c_country: "",
    fareBreakup: this.selectedSeatsData.value,
    route_id: this.selectedTripData.value.route_id,
    isPromotional: this.selectedTripData.value.isPromotional,
    promotionalTripMsg: this.selectedTripData.value.isPromotional ? this.selectedTripData.value.message : "",
    seatSelectionLimit: this.selectedTripData.value.seatSelectionLimit,
    delayedFlag: this.selectedTripData.value.delayedFlag,
    delayedDate: this.selectedTripData.value.delayedDate,
    passenger: this.selectedseat.value
};
this.bookingdata.next(booking);
let data:any={}
this.bookingService.review_info.subscribe((res)=>{
data=res;
data.returnticket=booking
data.totalTicketPrice = this.totalTicketPrice.value + res.totalTicketPrice;
this.commonService.setBooking(data);
})
this.getAllSelectSeatName();
};
setBoadingDropping(){
 let booking = this.bookingdata.value
 booking.boardingPointId= (this.selectedBoarding.value) ? this.selectedBoarding.value.id : "",
 booking.droppingPointId= (this.selectedDropping.value) ? this.selectedDropping.value.id : "",
 booking.boardingPointname=(this.selectedBoarding.value) ? this.selectedBoarding.value.name : "",
 booking.droppingPointname=(this.selectedDropping.value) ? this.selectedDropping.value.name : ""
 this.bookingdata.next(booking);
}
getAllSelectSeatName () {
this.selectSeatName = [];
  for (var i = 0; i < this.selectedseat.value.length; i++) {
    this.selectSeatName.push(this.selectedseat.value[i].seat_name);
  }
};

reset(){
  this.bookingdata.next({});
  this.selectedseat.next([]);
  this.selectedSeatsData.next({});
  this.selectedTripData.next({});
  this.commonService.bookingdata.next({});
  this.commonService.setBooking({});
  this.totalTicketPrice.next(0)
}

}
