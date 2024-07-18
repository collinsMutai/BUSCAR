import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})



export class BuslistService {
  
  busList = [];
  seatList = [];
  boardingDroppingPoint = [];
  returnBusList = [];
  returnSeatList = [];
  returnBoardingDroppingPoint = [];
 
constructor() { }
setOutwardSeatsList = function (data) {
    this.seatList = data;
};
getOutwardSeatsList = function () {
    return this.seatList;
  };
  setOutwardBoardingDropping = function (data) {
    this.boardingDroppingPoint = data;
};
getOutwardBoardingDropping = function () {
    return this.boardingDroppingPoint;
};
getSeatTypeWisePriceList(selectedseat, vipLimit, bclassLimit, normalLimit) {
    var selectedSeatsData:any = {vipWithFlat: {}, vip: {}, bclassWithFlat: {}, bclass: {}, normalWithFlat: {}, normal: {}};
    selectedseat.forEach(eachseat => {
      if (eachseat.seat_type === "vip") {
        if (vipLimit > 0) {//if flat offer applied & allowed seat is greater than 0
            if (eachseat.flatTicketPrice) {
                eachseat.ticketPrice = eachseat.flatTicketPrice;
            }
            var totalVipSeatWithFlat = selectedSeatsData.vipWithFlat.totalSeat ? selectedSeatsData.vipWithFlat.totalSeat : 0;
            selectedSeatsData.vipWithFlat = {'totalSeat': totalVipSeatWithFlat + 1, ticketFare: eachseat.ticketPrice, currency: eachseat.currency, totalTicketFare: totalVipSeatWithFlat == 0 ? 1 * eachseat.ticketPrice : (parseInt(selectedSeatsData.vipWithFlat.totalSeat) + 1) * eachseat.ticketPrice, type: 'VIP (Flat Offer)', flat: true};
            eachseat.flat_sale = eachseat.flatSaleId;
            vipLimit = vipLimit - 1;
        } else {
            if (eachseat.actualTicketPrice) {
                eachseat.ticketPrice = eachseat.actualTicketPrice;
            }
            eachseat.flat_sale = 0;
            var totalVipSeat = selectedSeatsData.vip.totalSeat ? selectedSeatsData.vip.totalSeat : 0;
            var ticketPrice = eachseat.actualTicketPrice ? eachseat.actualTicketPrice : eachseat.ticketPrice;
            selectedSeatsData.vip = {'totalSeat': totalVipSeat + 1, ticketFare: ticketPrice, currency: eachseat.currency, totalTicketFare: totalVipSeat == 0 ? 1 * ticketPrice : (parseInt(selectedSeatsData.vip.totalSeat) + 1) * ticketPrice, type: 'VIP'};
        }
    }
    if (eachseat.seat_type === "bclass") {
        if (bclassLimit > 0) {//if flat offer applied & allowed seat is greater than 0
            if (eachseat.flatTicketPrice) {
                eachseat.ticketPrice = eachseat.flatTicketPrice;
            }
            eachseat.flat_sale = eachseat.flatSaleId;
            var totalBlcassSeatWithFlat = selectedSeatsData.bclassWithFlat.totalSeat ? selectedSeatsData.bclassWithFlat.totalSeat : 0;
            selectedSeatsData.bclassWithFlat = {'totalSeat': totalBlcassSeatWithFlat + 1, ticketFare: eachseat.ticketPrice, currency: eachseat.currency, totalTicketFare: totalBlcassSeatWithFlat == 0 ? 1 * eachseat.ticketPrice : (parseInt(selectedSeatsData.bclassWithFlat.totalSeat) + 1) * eachseat.ticketPrice, type: 'Business (Flat Offer)', flat: true};
            bclassLimit = bclassLimit - 1;
        } else {
            if (eachseat.actualTicketPrice) {
                eachseat.ticketPrice = eachseat.actualTicketPrice;
            }
            eachseat.flat_sale = 0;
            var totalBclassSeat = selectedSeatsData.bclass.totalSeat ? selectedSeatsData.bclass.totalSeat : 0;
            var bclassTicketPrice = eachseat.actualTicketPrice ? eachseat.actualTicketPrice : eachseat.ticketPrice;
            selectedSeatsData.bclass = {'totalSeat': totalBclassSeat + 1, ticketFare: bclassTicketPrice, currency: eachseat.currency, totalTicketFare: totalBclassSeat == 0 ? 1 * bclassTicketPrice : (parseInt(selectedSeatsData.bclass.totalSeat) + 1) * bclassTicketPrice, type: 'Business'};
        }
    }
    if (eachseat.seat_type === "normal") {
        if (normalLimit > 0) {//if flat offer applied & allowed seat is greater than 0
            if (eachseat.flatTicketPrice) {
                eachseat.ticketPrice = eachseat.flatTicketPrice;
            }
            eachseat.flat_sale = eachseat.flatSaleId;
            var totalNormalSeatWithFlat = selectedSeatsData.normalWithFlat.totalSeat ? selectedSeatsData.normalWithFlat.totalSeat : 0;
            selectedSeatsData.normalWithFlat = {'totalSeat': totalNormalSeatWithFlat + 1, ticketFare: eachseat.ticketPrice, currency: eachseat.currency, totalTicketFare: totalNormalSeatWithFlat == 0 ? 1 * eachseat.ticketPrice : (parseInt(selectedSeatsData.normalWithFlat.totalSeat) + 1) * eachseat.ticketPrice, type: 'Normal (Flat Offer)', flat: true};
            normalLimit = normalLimit - 1;
        } else {
            if (eachseat.actualTicketPrice) {
                eachseat.ticketPrice = eachseat.actualTicketPrice;
            }
            eachseat.flat_sale = 0;
            var totalNormalSeat = selectedSeatsData.normal.totalSeat ? selectedSeatsData.normal.totalSeat : 0;
            var normalTicketPrice = eachseat.actualTicketPrice ? eachseat.actualTicketPrice : eachseat.ticketPrice;
            selectedSeatsData.normal = {'totalSeat': totalNormalSeat + 1, ticketFare: normalTicketPrice, currency: eachseat.currency, totalTicketFare: totalNormalSeat == 0 ? 1 * normalTicketPrice : (parseInt(selectedSeatsData.normal.totalSeat) + 1) * normalTicketPrice, type: 'Normal'};
        }
    }
    });
    
    var data = {"selectedseat": selectedseat, "seatData": selectedSeatsData, "vipLimit": vipLimit, bclassLimit: bclassLimit, normalLimit: normalLimit};
    return data;
  };

  getTotalTicketPrice(selectedSeatsData) {
    let totalTicketPrice = 0;
    Object.entries(selectedSeatsData).forEach(([key, value]) => {
      let eachItem:any=value
      if (eachItem.totalTicketFare) {
        totalTicketPrice +=  eachItem.totalTicketFare;
    }
    });
  console.log('ddd',totalTicketPrice)
    return totalTicketPrice;
};

}

