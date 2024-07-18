(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+0wo":
/*!************************************************************!*\
  !*** ./src/app/views/trip-review/trip-review.component.ts ***!
  \************************************************************/
/*! exports provided: TripReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripReviewComponent", function() { return TripReviewComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "OlR4");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



















function TripReviewComponent_div_17_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Primary Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TripReviewComponent_div_17_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Co-Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TripReviewComponent_div_17_b_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](", ", ctx_r13.data.returnticket.passenger[index_r10].seat_name, "");
} }
function TripReviewComponent_div_17_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", code_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", code_r16, " ");
} }
function TripReviewComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TripReviewComponent_div_17_p_3_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TripReviewComponent_div_17_p_4_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Seat :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, TripReviewComponent_div_17_b_9_Template, 2, 1, "b", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TripReviewComponent_div_17_Template_input_ngModelChange_14_listener($event) { const item_r9 = ctx.$implicit; return item_r9.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TripReviewComponent_div_17_Template_input_ngModelChange_19_listener($event) { const item_r9 = ctx.$implicit; return item_r9.age = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TripReviewComponent_div_17_Template_mat_select_ngModelChange_24_listener($event) { const item_r9 = ctx.$implicit; return item_r9.mobileId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, TripReviewComponent_div_17_mat_option_25_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TripReviewComponent_div_17_Template_input_ngModelChange_30_listener($event) { const item_r9 = ctx.$implicit; return item_r9.mobile = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-radio-group", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TripReviewComponent_div_17_Template_mat_radio_group_ngModelChange_32_listener($event) { const item_r9 = ctx.$implicit; return item_r9.gender = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-radio-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Female ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-radio-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Nationality");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TripReviewComponent_div_17_Template_input_ngModelChange_44_listener($event) { const item_r9 = ctx.$implicit; return item_r9.nationality = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "National ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TripReviewComponent_div_17_Template_input_ngModelChange_49_listener($event) { const item_r9 = ctx.$implicit; return item_r9.id_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const index_r10 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", index_r10 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", index_r10 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r9.seat_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.data == null ? null : ctx_r1.data.returnticket == null ? null : ctx_r1.data.returnticket.passenger);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "seat", item_r9.seat_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", item_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "age", item_r9.seat_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", item_r9.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "mobileId", item_r9.seat_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", item_r9.mobileId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.codes);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "phone", item_r9.seat_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", item_r9.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "gender", item_r9.seat_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", item_r9.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "nationality", item_r9.seat_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", item_r9.nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "id_no", item_r9.seat_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", item_r9.id_no);
} }
function TripReviewComponent_div_18_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", eachseat_r25.seat_name, "", ctx_r24.$last ? "" : ", ", "");
} }
function TripReviewComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Outbound Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Seat(s):");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, TripReviewComponent_div_18_span_18_Template, 2, 2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Depart");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Arrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Dropping");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](69, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r2.data.onwardticket.source_city, " to ", ctx_r2.data.onwardticket.dest_city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" | ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](14, 11, ctx_r2.data.onwardticket.booking_date, "dd MMM yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.data.onwardticket.passenger);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.data.onwardticket.company_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.data.onwardticket.bus_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.data.onwardticket.source_city);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.data.onwardticket.boardingPointname);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.data.onwardticket.dest_city);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.data.onwardticket.droppingPointname);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](69, 14, ctx_r2.data.onwardticket.total), "");
} }
function TripReviewComponent_div_19_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r27 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", eachseat_r27.seat_name, "", ctx_r26.$last ? "" : ", ", "");
} }
function TripReviewComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Return Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Seat(s):");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, TripReviewComponent_div_19_span_18_Template, 2, 2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Depart");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Arrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Dropping");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](69, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r3.data.returnticket.source_city, " to ", ctx_r3.data.returnticket.dest_city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" | ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](14, 11, ctx_r3.data.returnticket.booking_date, "dd MMM yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.data.returnticket.passenger);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.data.returnticket.company_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.data.returnticket.bus_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.data.returnticket.source_city);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.data.returnticket.boardingPointname);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.data.returnticket.dest_city);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.data.returnticket.droppingPointname);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](69, 14, ctx_r3.data.returnticket.total), "");
} }
function TripReviewComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Booking Ref No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.ref_no);
} }
function TripReviewComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Return Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TripReviewComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, ctx_r6.data == null ? null : ctx_r6.data.returnticket == null ? null : ctx_r6.data.returnticket.total, "1.2-2"), " ");
} }
function TripReviewComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " TZS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TripReviewComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " KSH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class TripReviewComponent {
    constructor(formBuilder, commonService, service, router, toastr, spinner) {
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.spinner = spinner;
        this.codes = ['254', '255'];
        this.data = {};
        this.user = {};
        this.panelOpenState = false;
        this.passengers = [{ "position": "Dev" }, { "position": "Eng" }];
        this.passengers_forms = [];
        this.ref_no = '';
        this.pay = false;
        this.active_method = "";
        this.currency = sessionStorage.getItem("currencyId");
        this.unsetNotRequiredParams = function () {
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
    }
    ngOnInit() {
        this.paymentForm = this.formBuilder.group({
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            country_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.tigoForm = this.formBuilder.group({
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            country_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.vodacomForm = this.formBuilder.group({
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            country_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        if (this.currency == "1") {
            this.paymentForm.patchValue({ country_code: "254" });
        }
        else {
            this.vodacomForm.patchValue({ country_code: "255" });
            this.tigoForm.patchValue({ country_code: "255" });
        }
        this.minutes = 10;
        this.seconds = 0;
        const timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        timer.subscribe(() => {
            if (this.seconds > 0) {
                this.seconds--;
            }
            else {
                if (this.minutes > 0) {
                    this.minutes--;
                    this.seconds = 59;
                }
            }
        });
        if (sessionStorage.getItem('loggedUser') != undefined) {
            this.user = JSON.parse(sessionStorage.getItem('loggedUser'));
            if (window.confirm("Are you travelling?")) {
                if (Object.keys(this.user).length === 0) {
                }
                else {
                    this.data.onwardticket.c_email = this.user.email ? this.user.email : '';
                    this.data.onwardticket.currencyId = sessionStorage.getItem('currencyId');
                    this.data.onwardticket.passenger[0].name = this.user.name;
                    this.data.onwardticket.passenger[0].age = parseInt(this.user.age);
                    this.data.onwardticket.passenger[0].gender = (this.user.gender == 'male') ? 'M' : 'F';
                    this.data.onwardticket.passenger[0].id_no = this.user.identity_number;
                    this.data.onwardticket.passenger[0].mobileId = '254';
                    this.data.onwardticket.passenger[0].nationality = this.user.nationality;
                    this.data.onwardticket.passenger[0].mobile = this.user.phone;
                    this.data.onwardticket.selectedSeat = this.getSeatsBooked(this.data.onwardticket.passenger);
                    this.data.onwardticket.bookedThrough = "Web";
                    this.data.onwardticket.paymentMethod = "tigo";
                }
            }
        }
        else {
        }
        // if(localStorage.getItem('booking_info') !=undefined){
        //   this.data = JSON.parse(localStorage.getItem('booking_info'))
        //   if(this.data.returnticket){
        //     this.data.totalTicketPrice = this.data.onwardticket.total + this.data.returnticket.total
        //   }else{
        //     this.data.totalTicketPrice = this.data.onwardticket.total 
        //   }
        // }
        this.commonService.review_info.subscribe((res) => {
            this.data = res;
            if (Object.entries(res).length == 0) {
                this.router.navigateByUrl('/');
            }
        });
    }
    method(text) {
        this.active_method = text;
        console.log(this.active_method);
    }
    onClickSubmit() {
        // this.spinner.show();
        this.initPassenger();
        delete this.data.onwardticket.fareBreakup;
        let token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 20);
        this.data.onwardticket.paymentMethod = "tigo";
        this.data.onwardticket.currency = "TZS";
        this.data.onwardticket.bookedThrough = "web";
        this.data.onwardticket.passenger.forEach((element, i) => {
            if (this.data.returnticket) {
                delete this.data.returnticket.fareBreakup;
                this.data.returnticket.c_email = element.c_email ? element.c_email : '';
                this.data.returnticket.currencyId = sessionStorage.getItem('currencyId');
                this.data.returnticket.passenger[i].name = element.name;
                this.data.returnticket.passenger[i].age = element.age;
                this.data.returnticket.passenger[i].gender = element.gender;
                this.data.returnticket.passenger[i].id_no = element.id_no;
                this.data.returnticket.passenger[i].mobileId = element.mobileId;
                this.data.returnticket.passenger[i].nationality = element.nationality;
                this.data.returnticket.passenger[i].mobile = element.mobile;
                this.data.returnticket.selectedSeat = this.getSeatsBooked(this.data.returnticket.passenger);
                this.data.returnticket.bookedThrough = "web";
                this.data.returnticket.paymentMethod = "tigo";
            }
        });
        this.unsetNotRequiredParams();
        const key = crypto_js__WEBPACK_IMPORTED_MODULE_3__["enc"].Utf8.parse('y(9;d36HtO0QbTaQ');
        const iv = crypto_js__WEBPACK_IMPORTED_MODULE_3__["lib"].WordArray.random(16);
        const encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_3__["AES"].encrypt(JSON.stringify({ ticketDetail: this.data, bookedThrough: "web" }), key, {
            iv: iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_3__["mode"].CBC,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_3__["pad"].Pkcs7
        });
        const encryptedData = encrypted.toString();
        const encodedIV = iv.toString(crypto_js__WEBPACK_IMPORTED_MODULE_3__["enc"].Base64);
        this.service.bookingTicket({ data: encryptedData, iv: encodedIV, token: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].token }).subscribe((res) => {
            this.commonService.setToken(token);
            sessionStorage.setItem('time', moment__WEBPACK_IMPORTED_MODULE_1__().format('HH:mm:ss a'));
            if (res.isSuccess) {
                this.spinner.hide();
                this.router.navigate(['/payment', res.booking_reference, this.data.onwardticket.passenger[0].mobileId + this.data.onwardticket.passenger[0].mobile, token]);
            }
            else {
                this.spinner.hide();
            }
        });
    }
    submitPayment() {
        if (this.selectedMethod === 'tigo') {
            console.log('Tigo payment selected');
        }
        else if (this.selectedMethod === 'vodafone') {
            console.log('Vodafone payment selected');
        }
        else {
            // No payment method selected
            console.log('Please select a payment method');
        }
    }
    getSeatsBooked(item) {
        let seats = [];
        item.forEach(element => {
            seats.push(element.seat_id);
        });
        return seats;
    }
    initPassenger() {
        this.user = this.data.onwardticket.passenger[0];
        if (this.user.mobileId == '254') {
            sessionStorage.setItem("currencyId", "1");
        }
        else {
            sessionStorage.setItem("currencyId", "3");
        }
        this.data.onwardticket.c_email = this.user.email ? this.user.email : '';
        this.data.onwardticket.currencyId = sessionStorage.getItem("currencyId");
        this.data.onwardticket.passenger[0].name = this.user.name;
        this.data.onwardticket.passenger[0].age = parseInt(this.user.age);
        this.data.onwardticket.passenger[0].gender = (this.user.gender == 'male') ? 'M' : 'F';
        this.data.onwardticket.passenger[0].id_no = this.user.id_no;
        this.data.onwardticket.passenger[0].nationality = this.user.nationality;
        this.data.onwardticket.passenger[0].mobile = this.user.mobile;
        this.data.onwardticket.selectedSeat = this.getSeatsBooked(this.data.onwardticket.passenger);
    }
}
TripReviewComponent.ɵfac = function TripReviewComponent_Factory(t) { return new (t || TripReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"])); };
TripReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TripReviewComponent, selectors: [["app-trip-review"]], decls: 50, vars: 18, consts: [[1, "section", "container"], [1, "row"], [1, "col-sm-12"], [1, "fa-solid", "fa-chevron-left"], [1, "col-sm-7"], [1, "row", "mt-2"], [1, "card"], [1, "card-body"], ["passegerForm", "ngForm"], ["class", "row", 4, "ngFor", "ngForOf"], ["class", "col-sm-12 mt-3", 4, "ngIf"], [1, "col-sm-5"], ["class", "col-sm-12", 4, "ngIf"], [1, "col-sm-6"], [1, "col-sm-6", 2, "text-align", "right", "font-weight", "600", "font-size", "22px"], ["class", "col-sm-6", 4, "ngIf"], ["class", "col-sm-6", "style", "text-align: right;font-weight:600;font-size: 22px;", 4, "ngIf"], [2, "border-top", "dotted 1px"], [1, "col-sm-6", 2, "text-align", "right"], [4, "ngIf"], [1, "col-sm-12", "mt-3"], ["value", "submit", 1, "btn", 2, "float", "right", "background-color", "rgb(230,23,115)", "color", "white", 3, "disabled", "click"], ["bdColor", "rgba(0, 0, 0, 0)", "size", "medium", "color", "#ffe716", "type", "pacman", 3, "fullScreen"], [2, "color", "white"], [1, "col-sm-8"], ["class", "modalpassenger", "style", "color:blue", 4, "ngIf"], ["class", "modalpassenger", "style", "color:orange", 4, "ngIf"], [1, "col-sm-4", 2, "text-align", "right"], ["appearance", "outline"], ["matInput", "", "placeholder", "Name", "required", "", 3, "name", "ngModel", "ngModelChange"], [1, "col-sm-4"], ["matInput", "", "placeholder", "Age", "required", "", 3, "name", "ngModel", "ngModelChange"], ["required", "", 3, "name", "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Phone", 3, "name", "ngModel", "ngModelChange"], [1, "col-sm-12", 2, "margin-bottom", "10px"], [3, "name", "ngModel", "ngModelChange"], [1, "col-sm-3", "col-6"], ["selected", "", "value", "F"], ["value", "M"], ["matInput", "", "type", "text", "required", "", "placeholder", "Nationality", 3, "name", "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "required", "", "placeholder", "ID Number", 3, "name", "ngModel", "ngModelChange"], [1, "modalpassenger", 2, "color", "blue"], [1, "modalpassenger", 2, "color", "orange"], [3, "value"], [1, "row", 2, "margin-top", "10px"], [1, "row", 2, "font-size", "15px", "font-weight", "600", "margin-bottom", "10px"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-12", "padding-0"], [1, "crossBorderSpan", 2, "background-color", "#cbffcb", "font-size", "12px"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-12", 2, "text-align", "right"], [2, "padding-right", "5px"], [4, "ngFor", "ngForOf"], [1, "row", 2, "margin-top", "10px", "padding-bottom", "5px", "display", "flex", "flex-wrap", "wrap"], [1, "col-lg-2", "col-md-2", "col-sm-4", "col-xs-4", "padding-left-0", "sameHeightColumn", 2, "text-align", "center"], ["src", "assets/img/bus.svg", "alt", "bus", 2, "width", "65px", "opacity", "0.4"], [1, "col-lg-3", "col-md-3", "col-sm-6", "col-xs-6", "sameHeightColumn", "padding-left-0"], [1, "reviewPadding"], [2, "font-size", "15px"], [1, "col-lg-2", "col-md-2", "col-sm-4", "col-xs-4", "sameHeightColumn", 2, "padding-right", "0"], [1, "col-lg-2", "col-md-2", "col-sm-4", "col-xs-3", "sameHeightColumn", 2, "padding-right", "0"], [1, "col-lg-3", "col-md-3", "col-sm-6", "col-xs-7", "sameHeightColumn"], [1, "row", 2, "padding", "5px 0"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4", "padding-0", 2, "font-size", "16px"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-8", 2, "text-align", "right", "font-size", "16px", "padding-left", "0"], [1, "crossBorderSpan", 2, "background-color", "#ffe7fe", "font-size", "12px"]], template: function TripReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Modify Trip");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Passengers");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "form", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, TripReviewComponent_div_17_Template, 50, 19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, TripReviewComponent_div_18_Template, 70, 16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, TripReviewComponent_div_19_Template, 70, 16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Trip Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, TripReviewComponent_div_24_Template, 8, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Onward Trip");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, TripReviewComponent_div_31_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, TripReviewComponent_div_32_Template, 3, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Total(inc.VAT)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, TripReviewComponent_span_40_Template, 2, 0, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, TripReviewComponent_span_41_Template, 2, 0, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](43, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TripReviewComponent_Template_button_click_45_listener() { return ctx.onClickSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Make Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "ngx-spinner", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Please wait... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.onwardticket == null ? null : ctx.data.onwardticket.passenger);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data.onwardticket);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data.returnticket);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pay);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](30, 12, ctx.data == null ? null : ctx.data.onwardticket == null ? null : ctx.data.onwardticket.total, "1.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data.returnticket);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data.returnticket);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currency == "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currency != "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](43, 15, ctx.data.totalTicketPrice, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullScreen", true);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]], styles: [".mat-tab-label {\n  padding: 0px !important;\n  justify-content: left !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix {\n  padding: 0.6em 0px !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix > span.mat-form-field-label-wrapper {\n  top: -1.3em !important;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75) !important;\n  width: 133.33333% !important;\n}\n\n.connection-line[_ngcontent-%COMP%] {\n  position: relative;\n  width: 2px;\n  background-color: #000;\n  \n  height: 30px;\n  \n  margin: 0 auto;\n  \n}\n\n.connection-line[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 10px;\n  height: 10px;\n  background-color: #000;\n  \n  border-radius: 50%;\n}\n\n.payment-methods[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.method[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.radio-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.name[_ngcontent-%COMP%] {\n  background-color: darkgray;\n  color: white;\n  padding: 20px;\n}\n\n.name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.logo[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.total[_ngcontent-%COMP%] {\n  background-color: darkgray;\n  color: white;\n  padding: 20px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.main[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n#logo[_ngcontent-%COMP%] {\n  background-color: black;\n  width: 50%;\n}\n\n#logo[_ngcontent-%COMP%], #pay[_ngcontent-%COMP%] {\n  display: inline;\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RyaXAtcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksdUJBQUE7RUFDQSxnQ0FBQTtBQURKOztBQUtBO0VBQ0ksNkJBQUE7QUFGSjs7QUFLQTtFQUNJLHNCQUFBO0FBRko7O0FBS0E7RUFDSSxvREFBQTtFQUNBLDRCQUFBO0FBRko7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUF3QixxQ0FBQTtFQUN4QixZQUFBO0VBQWMsdURBQUE7RUFDZCxjQUFBO0VBQWdCLGtDQUFBO0FBRXBCOztBQUNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFBd0IsdUNBQUE7RUFDeEIsa0JBQUE7QUFHSjs7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQUU7RUFDRSxtQkFBQTtBQUdKOztBQUFFO0VBQ0UsaUJBQUE7QUFHSjs7QUFBQTtFQUNJLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFHSjs7QUFESTtFQUNJLFlBQUE7QUFHUjs7QUFBQTtFQUNJLGFBQUE7QUFHSjs7QUFEQTtFQUNJLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFJSjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUZBO0VBQ0ksYUFBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtBQU1KOztBQUpBO0VBQ0ksbUJBQUE7QUFPSjs7QUFMQTtFQUNJLHVCQUFBO0VBQ0EsVUFBQTtBQVFKOztBQU5BO0VBRUksZUFBQTtFQUNBLHFCQUFBO0FBUUoiLCJmaWxlIjoidHJpcC1yZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuXG46Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lPmRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyPmRpdi5tYXQtZm9ybS1maWVsZC1mbGV4PmRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogMC42ZW0gMHB4ICFpbXBvcnRhbnRcbn1cblxuOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZT5kaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlcj5kaXYubWF0LWZvcm0tZmllbGQtZmxleD5kaXYubWF0LWZvcm0tZmllbGQtaW5maXg+c3Bhbi5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICB0b3A6IC0xLjNlbSAhaW1wb3J0YW50XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEzMy4zMzMzMyUgIWltcG9ydGFudDtcbn1cbi5jb25uZWN0aW9uLWxpbmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IC8qIFNldCB5b3VyIGRlc2lyZWQgbGluZSBjb2xvciBoZXJlICovXG4gICAgaGVpZ2h0OiAzMHB4OyAvKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgbGluZSBhY2NvcmRpbmcgdG8geW91ciBuZWVkcyAqL1xuICAgIG1hcmdpbjogMCBhdXRvOyAvKiBDZW50ZXJzIHRoZSBsaW5lIGhvcml6b250YWxseSAqL1xuICB9XG4gIFxuICAuY29ubmVjdGlvbi1saW5lOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IC8qIFNldCB5b3VyIGRlc2lyZWQgY2lyY2xlIGNvbG9yIGhlcmUgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAucGF5bWVudC1tZXRob2RzIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLm1ldGhvZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLnJhZGlvLWxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICBcbi5uYW1le1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgXG4gICAgc3Ryb25ne1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG59XG4ubG9nb3tcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLnRvdGFse1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHhcbiAgICBcbn1cbi5oZWFkaW5ne1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbi5tYWlue1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5pbWd7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLm1hdC1jYXJke1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4jbG9nb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogNTAlO1xufVxuI2xvZ28sICNwYXlcbntcbiAgICBkaXNwbGF5OmlubGluZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59Il19 */"] });


/***/ }),

/***/ "+yPM":
/*!******************************************************!*\
  !*** ./src/app/views/payments/payments.component.ts ***!
  \******************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "OlR4");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "QibW");


















const _c0 = ["paymentModal"];
function PaymentsComponent_div_34_div_3_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 48);
} if (rf & 2) {
    const method_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("alt", "", method_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", method_r6.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function PaymentsComponent_div_34_div_3_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 49);
} if (rf & 2) {
    const method_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", method_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", method_r6.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function PaymentsComponent_div_34_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-radio-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PaymentsComponent_div_34_div_3_Template_mat_radio_button_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const method_r6 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r11.selectPaymentMethod(method_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PaymentsComponent_div_34_div_3_img_2_Template, 1, 2, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PaymentsComponent_div_34_div_3_img_3_Template, 1, 2, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const method_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", method_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", method_r6 != "tigo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", method_r6 == "tigo");
} }
function PaymentsComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-radio-group", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PaymentsComponent_div_34_div_3_Template, 4, 3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.paymentMethods);
} }
function PaymentsComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Fetching your payment status. Please wait ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.seconds, " s ..");
} }
function PaymentsComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Proceed To pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "You will be prompted to enter your MPESA pin to authorize your payment request of KES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Choose MPESA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ol", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Go to your sim toolkit enter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Enter 4121511 as your business number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Enter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " as account No");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Enter KES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Enter PIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.data == null ? null : ctx_r2.data.totalTicketPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.ref_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.ref_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.data == null ? null : ctx_r2.data.totalTicketPrice);
} }
function PaymentsComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Proceed To pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "You will be prompted to enter your MPESA pin to authorize your payment request of KES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Choose MPESA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ol", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Go to your sim toolkit enter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Use account number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Enter 009009 as your business number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Enter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Enter KES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Enter PIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.data == null ? null : ctx_r3.data.totalTicketPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.ref_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.ref_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.ref_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.data == null ? null : ctx_r3.data.totalTicketPrice);
} }
const _c1 = function (a0, a1) { return { "active": a0, "show": a1 }; };
const _c2 = function (a0) { return { "active": a0 }; };
const _c3 = function () { return { backdrop: "static" }; };
class PaymentsComponent {
    constructor(service, formBuilder, commonService, toastr, spinner, activated, router) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.activated = activated;
        this.router = router;
        this.payments = [];
        this.user = {};
        this.data = {};
        this.selected = 0;
        this.seconds = 20;
        this.ref_no = '';
        this.method = 'Tigo';
        this.time = {};
        this.currency = "";
        this.paymentMethods = [
            {
                name: 'vodacom',
                logoUrl: 'assets/img/Vodacom-logo.png'
            },
            {
                name: 'tigo',
                logoUrl: 'assets/img/tigo.png'
            },
        ];
    }
    ngOnInit() {
        this.currency = sessionStorage.getItem('currencyId');
        console.log(this.currency);
        this.paymentForm = this.formBuilder.group({
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            country_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.activated.paramMap.subscribe((res) => {
            this.ref_no = res.get('reference');
        });
        this.commonService.review_info.subscribe((res) => {
            if (Object.keys(res).length != 0) {
                localStorage.setItem('transline.paymentDetail', JSON.stringify(res));
            }
        });
        this.data = JSON.parse(localStorage.getItem('transline.paymentDetail'));
        if (sessionStorage.getItem('loggedUser') != undefined) {
            this.user = JSON.parse(sessionStorage.getItem('loggedUser'));
            this.paymentForm.patchValue({ country_code: this.user.country_code, mobile: this.user.phone });
        }
        else {
            let info = this.data.onwardticket.passenger[0];
            this.paymentForm.patchValue({ country_code: info.mobileId, mobile: info.mobile });
        }
        this.service.paymentMethods({}).subscribe((res) => {
            Object.entries(res).forEach(([key, value]) => {
                if (value) {
                    this.payments.push(key);
                }
            });
        });
        this.tickerTimer();
    }
    selectPaymentMethod(paymentMethod) {
        this.selectedPaymentMethod = paymentMethod;
    }
    makePayment() {
        this.spinner.show();
        let formData = this.paymentForm.value;
        let data = {
            "bookingRef": this.ref_no,
            "queryoption": 1,
            "queryvalue": formData.country_code + '' + formData.mobile,
            "requestType": "ticket",
            "paymentMethod": this.currency == '3' ? "vodacom" : "mpesa",
            "isWalletApply": false,
            "additionalInfo": {
                "onward": { "sponsorTrip": false, "discountId": 0 },
                "return": { "sponsorTrip": false, "discountId": 0 }
            },
            "token": _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].token
        };
        const key = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse('y(9;d36HtO0QbTaQ');
        const iv = crypto_js__WEBPACK_IMPORTED_MODULE_2__["lib"].WordArray.random(16);
        const encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(JSON.stringify(data), key, {
            iv: iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_2__["mode"].CBC,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_2__["pad"].Pkcs7
        });
        const encryptedData = encrypted.toString();
        const encodedIV = iv.toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Base64);
        this.service.makePayment({ data: encryptedData, iv: encodedIV, token: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].token }).subscribe((res) => {
            this.spinner.hide();
            this.paymentModal.hide();
            if (res.isSuccess) {
                localStorage.setItem("payment_status", 'initiated');
                this.toastr.success("Successfully initiated", "Success");
                this.payments.push("Mpesa Confirmation");
                this.selected = 1;
                this.timer();
            }
        }, (err) => {
            this.spinner.hide();
        });
    }
    timer() {
        this.id = setInterval(() => {
            --this.seconds;
            if (this.seconds < 1) {
                clearInterval(this.id);
                this.checkMpesaPayment();
            }
        }, 1000);
    }
    tickerTimer() {
        this.id1 = setInterval(() => {
            let start = moment__WEBPACK_IMPORTED_MODULE_1__(sessionStorage.getItem('time'), 'HH:mm:ss a');
            let end = moment__WEBPACK_IMPORTED_MODULE_1__();
            let duration = moment__WEBPACK_IMPORTED_MODULE_1__["duration"](end.diff(start));
            this.time = duration._data;
            if (this.time.minutes == 10) {
                clearInterval(this.id1);
                localStorage.clear();
                this.router.navigateByUrl('/');
            }
        }, 1000);
    }
    setIndex(index) {
        this.selected = index;
    }
    checkMpesaPayment() {
        this.spinner.show();
        let formData = this.paymentForm.value;
        let data = {
            "bookingRef": this.ref_no,
            "queryoption": this.data.totalTicketPrice,
            "queryvalue": formData.country_code + '' + formData.mobile,
            "originalBookingRef": this.ref_no,
            "uuid": this.ref_no,
            "requestType": "ticket",
        };
        this.service.checkMpesaPayment(data).subscribe((res) => {
            if (res.isSuccess) {
                this.spinner.hide();
            }
            else {
                this.payments.push("Paybill Option");
                this.selected = 2;
                this.toastr.error("No Transaction Found", "Transaction");
                this.spinner.hide();
            }
        }, (err) => {
            this.payments.push("Paybill Option");
            this.selected = 2;
            this.toastr.error("No Transaction Found", "Transaction");
            this.spinner.hide();
        });
    }
    openModal() {
        this.paymentModal.show();
    }
    canLeavePage($event) {
        if (confirm('You data is loading. Are you sure you want to leave?')) {
            $event.preventDefault();
            return;
        }
    }
}
PaymentsComponent.ɵfac = function PaymentsComponent_Factory(t) { return new (t || PaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
PaymentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PaymentsComponent, selectors: [["app-payments"]], viewQuery: function PaymentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paymentModal = _t.first);
    } }, hostBindings: function PaymentsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("beforeunload", function PaymentsComponent_beforeunload_HostBindingHandler($event) { return ctx.canLeavePage($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    } }, decls: 94, vars: 28, consts: [[1, "section", "container", "p-0", "pt-4"], [1, "row"], [1, "col-sm-12"], [1, "cols-m-12"], ["role", "alert", 1, "alert", "alert-danger"], [2, "color", "black"], [1, "text-danger"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "mb-3"], ["role", "presentation", 1, "nav-item"], ["id", "pills-mpesa-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-mpesa", "type", "button", "role", "tab", "aria-controls", "pills-mpesa", "aria-selected", "true", 1, "nav-link", "active", 3, "ngClass"], ["id", "pills-paybill-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-paybill", "type", "button", "role", "tab", "aria-controls", "pills-paybill", "aria-selected", "false", 1, "nav-link", 3, "ngClass"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-mpesa", "role", "tabpanel", "aria-labelledby", "pills-mpesa-tab", "tabindex", "0", 1, "tab-pane", 3, "ngClass"], [1, "", 2, "margin-top", "10px"], ["class", "row", 4, "ngIf"], [1, "col-sm-7"], [3, "formGroup", "ngSubmit"], [1, "col-sm-3", "col-12"], ["appearance", "outline"], ["matInput", "", "readonly", "", "formControlName", "country_code", "placeholder", "code"], [1, "col-sm-6", "col-12"], ["matInput", "", "formControlName", "mobile", "placeholder", "Mobile"], [1, "col-sm-9"], [1, "btn", 2, "float", "right", "background-color", "rgb(230,23,115)", "color", "white", 3, "disabled"], ["id", "pills-paybill", "role", "tabpanel", "aria-labelledby", "pills-paybill-tab", "tabindex", "0", 1, "tab-pane", "fade", 3, "ngClass"], [1, "row", "mb-2"], ["class", "col-sm-12", 4, "ngIf"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-static-name", 1, "modal", "fade", 3, "config"], ["paymentModal", "bs-modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-static-name", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [1, "col-sm-12", 2, "font-size", "14px"], [1, "col-sm-4"], [1, "col-sm-8"], [1, "btn", "btn-black", 2, "float", "right", 3, "disabled"], ["bdColor", "rgba(0, 0, 0, 0)", "size", "medium", "color", "#ffe716", "type", "pacman", 3, "fullScreen"], [2, "color", "white"], ["aria-label", "Select an option"], ["class", "col-sm-3", 4, "ngFor", "ngForOf"], [1, "col-sm-3"], [3, "value", "change"], ["style", "width:220px;", 3, "src", "alt", 4, "ngIf"], ["style", "width:220px;margin-left:300px !important;", 3, "src", "alt", 4, "ngIf"], [2, "width", "220px", 3, "src", "alt"], [2, "width", "220px", "margin-left", "300px !important", 3, "src", "alt"], [1, "text-success", 2, "font-size", "20px", "font-family", "600"], [1, "text-warning"], [2, "margin-left", "15px"], [2, "list-style", "upper-roman"]], template: function PaymentsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Tickets Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Please complete payment within ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "10:00 Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " .Your seat will be release to others if you do not pay within 10:00 minutes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "To complete the payment you will receive a prompt from Mpesa on the mobile number below");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Mpesa");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Paybill");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, PaymentsComponent_div_34_Template, 4, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function PaymentsComponent_Template_form_ngSubmit_36_listener() { return ctx.makePayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Make Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, PaymentsComponent_div_56_Template, 5, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, PaymentsComponent_div_59_Template, 29, 4, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, PaymentsComponent_div_60_Template, 32, 5, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "New Payment Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PaymentsComponent_Template_button_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](62); return _r4.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, " For sending new payment request you can use the same phone number or use another phone number. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function PaymentsComponent_Template_form_ngSubmit_75_listener() { return ctx.makePayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](86, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "New Payment Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "ngx-spinner", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Please wait... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](93, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", 9 - ctx.time.minutes, " Minutes : ", 60 - ctx.time.seconds, " Seconds ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](16, _c1, ctx.selected == 0 || ctx.selected == 1, ctx.selected == 0 || ctx.selected == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](19, _c2, ctx.selected == 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](21, _c1, ctx.selected == 0 || ctx.selected == 1, ctx.selected == 0 || ctx.selected == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currency == "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.paymentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.paymentForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selected == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](24, _c1, ctx.selected == 2, ctx.selected == 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currency == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currency == "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](27, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.paymentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.paymentForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fullScreen", true);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalDirective"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioButton"]], styles: [".nav-tabs {\n  border-bottom: 1px solid #e20613 !important;\n}\n\n  .nav-tabs .nav-link.active {\n  color: black !important;\n  font-weight: 500;\n  background-color: #fff;\n  border-color: #e20613 #e20613 #fff;\n}\n\n.breakup[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.details[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 400;\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n  .mat-tab-label {\n  text-transform: capitalize;\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.view-seats[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid #e20613;\n  font-size: 13px;\n  padding: 6px 10px;\n  text-transform: capitalize;\n  color: black;\n  margin-top: 5px;\n  font-weight: 700;\n  background-color: #e20613;\n  border-radius: 20px;\n}\n\n  .mat-tab-label {\n  padding: 0px !important;\n  justify-content: left !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix {\n  padding: 0.6em 0px !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix > span.mat-form-field-label-wrapper {\n  top: -1.3em !important;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75) !important;\n  width: 133.33333% !important;\n}\n\n.fw-normal[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 12px;\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n*[_ngcontent-%COMP%] {\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  color: #0d6efd;\n  background-color: white;\n  border-bottom: 2px solid #0d6efd;\n}\n\n.nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  color: black;\n  background-color: white;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n  border-radius: 0;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  text-transform: capitalize;\n}\n\n.nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  background: 0 0;\n  border: 0;\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BheW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksMkNBQUE7QUFGSjs7QUFJQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0FBREo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFDSjs7QUFFQTtFQUVJLDBCQUFBO0VBQ0EsbUVBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxtRUFBQTtBQUFKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFHQTtFQUNJLDZCQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtBQUFKOztBQUdBO0VBQ0ksb0RBQUE7RUFDQSw0QkFBQTtBQUFKOztBQUVBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUVBQUE7QUFDQTs7QUFDQTtFQUNJLG1FQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FBR0o7O0FBQUE7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBSUoiLCJmaWxlIjoicGF5bWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuaGVyby1zZWN0aW9uIHtcbi8vICAgICBtaW4taGVpZ2h0OiAwcHg7XG4vLyB9XG46Om5nLWRlZXAgLm5hdi10YWJzIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyMDYxMyAhaW1wb3J0YW50O1xuICAgfVxuOjpuZy1kZWVwIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBjb2xvcjpibGFjayAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICNlMjA2MTMgI2UyMDYxMyAjZmZmO1xufVxuLmJyZWFrdXB7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZGV0YWlsc3tcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIixcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG59XG5cbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCB7XG5cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xuXG59XG5zcGFue1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmOyAgXG59XG4udmlldy1zZWF0cyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMjA2MTM7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjA2MTM7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuXG46Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lPmRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyPmRpdi5tYXQtZm9ybS1maWVsZC1mbGV4PmRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogMC42ZW0gMHB4ICFpbXBvcnRhbnRcbn1cblxuOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZT5kaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlcj5kaXYubWF0LWZvcm0tZmllbGQtZmxleD5kaXYubWF0LWZvcm0tZmllbGQtaW5maXg+c3Bhbi5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICB0b3A6IC0xLjNlbSAhaW1wb3J0YW50XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEzMy4zMzMzMyUgIWltcG9ydGFudDtcbn1cbi5mdy1ub3JtYWx7XG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuZm9udC1zaXplOiAxMnB4O1xuZm9udC1mYW1pbHk6IFwiTGF0b1wiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjsgIFxufVxuKntcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmOyAgXG59XG5cbi5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSwgLm5hdi1waWxscyAuc2hvdz4ubmF2LWxpbmsge1xuICAgIGNvbG9yOiMwZDZlZmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMGQ2ZWZkO1xufVxuLm5hdi1waWxscyAubmF2LWxpbmsgLCAubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGluayB7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbn1cblxuLm5hdi10YWJzIC5uYXYtbGluayB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBwYWRkaW5nLXRvcDogLjI1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubmF2LXBpbGxzIC5uYXYtbGluayB7XG4gICAgYmFja2dyb3VuZDogMCAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/davi/Documents/projects/george/bus template/travel/src/main.ts */"zUnb");


/***/ }),

/***/ "0HjG":
/*!****************************************************!*\
  !*** ./src/app/views/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");





class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const textWrapper = document.querySelector('.an-1');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({ loop: true })
            .add({
            targets: '.an-1 .letter',
            scale: [4, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 70 * i
        }).add({
            targets: '.an-1',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 3000
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 91, vars: 0, consts: [[1, "hero-section", "section", "pt-0"], [1, "container", "pt-5"], [1, "blog-section", "section", "container"], [1, "row"], [1, "col-sm-8", "offset-lg-2"], [1, "col-md-6"], [1, "col-sm-12"], ["appearance", "outline"], ["matInput", "", "placeholder", "Name"], [1, "col-sm-6"], ["matInput", "", "placeholder", "Contry Code"], ["matInput", "", "placeholder", "Phone"], ["matInput", "", "placeholder", "Email"], ["matInput", "", "placeholder", "Subject"], ["matInput", "", "placeholder", "Message"], [1, "btn", "btn-success"], [2, "list-style", "none"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Country Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Head Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "KidiaOneExpress.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Tanzania,Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Email Us : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "info@kidiaoneexpress.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Head Office: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "(+255) 784377027/(+255) 693440568");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Shekilango: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "(+255) 757575740");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Basihaya: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "(+255) 748700005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Kariakoo: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "(+255) 747000019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Moshi: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "(+255) 744636365");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Arusha: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "(+255) 757575786");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Dodoma: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "(+255) 762232323");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Mwanza: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "(+255) 42228383");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".mat-tab-label {\n  padding: 0px !important;\n  justify-content: left !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix {\n  padding: 0.6em 0px !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix > span.mat-form-field-label-wrapper {\n  top: -1.3em !important;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75) !important;\n  width: 133.33333% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx1QkFBQTtFQUNBLGdDQUFBO0FBQUo7O0FBSUE7RUFDSSw2QkFBQTtBQURKOztBQUlBO0VBQ0ksc0JBQUE7QUFESjs7QUFJQTtFQUNJLG9EQUFBO0VBQ0EsNEJBQUE7QUFESiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWwge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdCAhaW1wb3J0YW50O1xufVxuXG5cbjo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmU+ZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXI+ZGl2Lm1hdC1mb3JtLWZpZWxkLWZsZXg+ZGl2Lm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAwLjZlbSAwcHggIWltcG9ydGFudFxufVxuXG46Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lPmRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyPmRpdi5tYXQtZm9ybS1maWVsZC1mbGV4PmRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeD5zcGFuLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICAgIHRvcDogLTEuM2VtICFpbXBvcnRhbnRcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSkgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTMzLjMzMzMzJSAhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4XPS":
/*!******************************************************!*\
  !*** ./src/app/views/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ "OlR4");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");















const _c0 = ["otpModal"];
function RegisterComponent_div_0_div_9_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", code_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", code_r5, " ");
} }
function RegisterComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_div_0_div_9_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RegisterComponent_div_0_div_9_mat_option_8_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.codes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.loginForm.invalid);
} }
function RegisterComponent_div_0_div_10_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", code_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", code_r10, " ");
} }
function RegisterComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegisterComponent_div_0_div_10_mat_option_13_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-datepicker-toggle", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-datepicker", null, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Female ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Male ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_div_0_div_10_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.register(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "REGISTER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " OR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_div_0_div_10_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.guest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "CONTINUE AS GUEST");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.registerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.codes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r3.max_date)("matDatepicker", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.registerForm.invalid);
} }
function RegisterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-group", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_div_0_Template_mat_radio_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SIGN IN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "REGISTER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegisterComponent_div_0_div_9_Template, 22, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RegisterComponent_div_0_div_10_Template, 54, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.type == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.type == "2");
} }
function RegisterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_div_1_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onOtp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enter Otp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Verify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.otpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.otpForm.invalid);
} }
class RegisterComponent {
    constructor(formBuilder, commoService, service, spinner, toastr, datePipe) {
        this.formBuilder = formBuilder;
        this.commoService = commoService;
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.type = '2';
        this.codes = ['254', '255'];
        this.user = {};
        this.otp = false;
        this.open = false;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.date = new Date();
        this.max_date = this.date.setFullYear(this.date.getFullYear() - 18);
        this.authenticated = false;
        this.device_number = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        if (sessionStorage.getItem('loggedUser') != undefined) {
            this.authenticated = true;
            this.user = JSON.parse(sessionStorage.getItem('loggedUser'));
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gcm_token: [''],
            country_code: ['254', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.otpForm = this.formBuilder.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    login() {
        this.spinner.show();
        this.service.login(this.loginForm.value).subscribe((res) => {
            if (res.isSuccess) {
                this.spinner.hide();
                sessionStorage.setItem("loggedUser", JSON.stringify(res.data));
                this.user = res.data;
                this.toastr.success("login successfull", 'Success');
                this.authenticated = true;
                this.commoService.authenticated.next(true);
                this.loginForm.reset();
                this.action.emit('success');
            }
            else {
                this.toastr.error('Incorrect Credentials', 'Login Failed');
                this.spinner.hide();
            }
        });
    }
    register() {
        this.spinner.show();
        let data = this.registerForm.value;
        data.device_number = this.device_number;
        sessionStorage.setItem('device_number', this.device_number);
        data.date_of_birth = this.datePipe.transform(data.dob, 'yyyy-MM-dd');
        delete data.dob;
        this.service.sigup(data).subscribe((res) => {
            this.spinner.hide();
            if (res.isSuccess) {
                this.toastr.success("Registeration successfull", 'Success');
                this.otp = true;
            }
            else {
                this.toastr.error('Registration failed', 'Request Failed');
            }
        }, (err) => {
            console.log(err.error);
            this.spinner.hide();
        });
    }
    onOtp() {
        this.spinner.show();
        let data = {
            "otp_number": this.otpForm.get('code').value,
            "device_number": this.device_number,
            "gcm_token": "",
        };
        this.service.otpVerification(data).subscribe((res) => {
            if (res.isSuccess) {
                this.spinner.hide();
                this.toastr.success("Successfully verified", "Success");
                this.action.emit('success');
                sessionStorage.setItem("loggedUser", JSON.stringify(res.data));
                this.otp = false;
                this.type = '1';
            }
            else {
                this.spinner.hide();
                this.toastr.error(res.errors.otp[0], "Failed");
            }
        });
    }
    logout() {
        sessionStorage.clear();
        this.authenticated = false;
        this.commoService.authenticated.next(false);
    }
    guest() {
        this.action.emit('guest');
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], viewQuery: function RegisterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.otpModal = _t.first);
    } }, inputs: { open: "open" }, outputs: { action: "action" }, decls: 5, vars: 3, consts: [["class", "", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#ffe716", "type", "pacman", 3, "fullScreen"], [2, "color", "white"], [1, ""], [3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-sm-3", "col-6"], ["selected", "", "value", "1"], ["value", "2"], ["style", "margin-top: 20px;", 4, "ngIf"], ["class", "", "style", "margin-top: 20px;", 4, "ngIf"], [2, "margin-top", "20px"], [3, "formGroup", "ngSubmit"], [1, "col-sm-4"], ["appearance", "outline"], ["formControlName", "country_code"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-8"], ["matInput", "", "formControlName", "username", "placeholder", "Username"], [1, "col-sm-12"], ["matInput", "", "type", "password", "formControlName", "password", "placeholder", "Password"], [1, "btn", "view-seats", 2, "float", "right", 3, "disabled"], [3, "value"], [1, "", 2, "margin-top", "20px"], [3, "formGroup"], ["matInput", "", "formControlName", "name", "placeholder", "Name"], ["matInput", "", "formControlName", "phone", "placeholder", "Phone"], [1, "col-sm-6"], ["matInput", "", "formControlName", "dob", "placeholder", "Date", 3, "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["formControlName", "gender"], ["value", "Female"], ["value", "Male"], [1, "col-sm-7"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "Email"], [1, "col-sm-5"], [1, "btn", "btn-black", 2, "float", "right", "width", "100% !important", 3, "disabled", "click"], [1, "col-sm-12", "text-center", "mb-1", "mt-1"], [1, "btn", "btn-success", 2, "float", "right", "width", "100% !important", 3, "click"], ["matInput", "", "type", "password", "formControlName", "code", "placeholder", "Otp Code"], [1, "btn", "btn-primary", 2, "float", "right", 3, "disabled"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RegisterComponent_div_0_Template, 11, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_1_Template, 11, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please wait... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.otp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"]], styles: [".bg-dark[_ngcontent-%COMP%] {\n  background-color: #ffe716 !important;\n  color: black !important;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .navbar-nav[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  color: #ffe716;\n}\n\n  .mat-form-field-wrapper {\n  margin-bottom: -0.65em !important;\n}\n\n.view-seats[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid #ffe716;\n  font-size: 13px;\n  padding: 6px 10px;\n  text-transform: capitalize;\n  color: black;\n  margin-top: 5px;\n  font-weight: 700;\n  background-color: #ffe716;\n  border-radius: 20px;\n}\n\n.offcanvas[_ngcontent-%COMP%], .offcanvas-lg[_ngcontent-%COMP%], .offcanvas-md[_ngcontent-%COMP%], .offcanvas-sm[_ngcontent-%COMP%], .offcanvas-xl[_ngcontent-%COMP%], .offcanvas-xxl[_ngcontent-%COMP%] {\n  width: 280px !important;\n}\n\n  .cdk-overlay-container {\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtBQUVKOztBQUFBO0VBQ0ksaUNBQUE7QUFHSjs7QUFBQTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSx1QkFBQTtBQUlKOztBQURBO0VBQ0ksYUFBQTtBQUlKIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWRhcmt7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTcxNiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XG59XG4ubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlLCAubmF2YmFyLW5hdiAuc2hvdz4ubmF2LWxpbmsge1xuICAgIGNvbG9yOiNmZmU3MTY7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XG4gICAgbWFyZ2luLWJvdHRvbTogLTAuNjVlbSAhaW1wb3J0YW50O1xuIH1cblxuLnZpZXctc2VhdHMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZlNzE2O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBjb2xvcjpibGFjaztcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNzE2O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4ub2ZmY2FudmFzLCAub2ZmY2FudmFzLWxnLCAub2ZmY2FudmFzLW1kLCAub2ZmY2FudmFzLXNtLCAub2ZmY2FudmFzLXhsLCAub2ZmY2FudmFzLXh4bCB7XG4gICAgd2lkdGg6IDI4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgICB6LWluZGV4OiA5OTk5O1xufVxuIl19 */"] });


/***/ }),

/***/ "7wzR":
/*!************************************************!*\
  !*** ./src/app/views/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");



class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 11, vars: 0, consts: [[1, "about-section", "section", "container"], [1, "row"], [1, "col-md-6"], ["src", "../../../assets/img/KidiaOne bus.png", "alt", "team svg", 1, "img-fluid"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Kidia One Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "We provide scheduled daily bus transportation from Dar es Salaam Tanzania to Moshi Tanzania, Arusha Tanzania, Namanga Border and Nairobi Kenya and from these Countries and regions to Dar es Salaam Tanzania daily. Our booking Bus Offices are in Dar es Salaam Tanzania, Moshi Tanzania, Arusha Tanzania, Namanga Border and Nairobi Kenya. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "AtJV":
/*!*********************************************!*\
  !*** ./src/app/services/buslist.service.ts ***!
  \*********************************************/
/*! exports provided: BuslistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuslistService", function() { return BuslistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BuslistService {
    constructor() {
        this.busList = [];
        this.seatList = [];
        this.boardingDroppingPoint = [];
        this.returnBusList = [];
        this.returnSeatList = [];
        this.returnBoardingDroppingPoint = [];
        this.setOutwardSeatsList = function (data) {
            this.seatList = data;
        };
        this.getOutwardSeatsList = function () {
            return this.seatList;
        };
        this.setOutwardBoardingDropping = function (data) {
            this.boardingDroppingPoint = data;
        };
        this.getOutwardBoardingDropping = function () {
            return this.boardingDroppingPoint;
        };
    }
    getSeatTypeWisePriceList(selectedseat, vipLimit, bclassLimit, normalLimit) {
        var selectedSeatsData = { vipWithFlat: {}, vip: {}, bclassWithFlat: {}, bclass: {}, normalWithFlat: {}, normal: {} };
        selectedseat.forEach(eachseat => {
            if (eachseat.seat_type === "vip") {
                if (vipLimit > 0) { //if flat offer applied & allowed seat is greater than 0
                    if (eachseat.flatTicketPrice) {
                        eachseat.ticketPrice = eachseat.flatTicketPrice;
                    }
                    var totalVipSeatWithFlat = selectedSeatsData.vipWithFlat.totalSeat ? selectedSeatsData.vipWithFlat.totalSeat : 0;
                    selectedSeatsData.vipWithFlat = { 'totalSeat': totalVipSeatWithFlat + 1, ticketFare: eachseat.ticketPrice, currency: eachseat.currency, totalTicketFare: totalVipSeatWithFlat == 0 ? 1 * eachseat.ticketPrice : (parseInt(selectedSeatsData.vipWithFlat.totalSeat) + 1) * eachseat.ticketPrice, type: 'VIP (Flat Offer)', flat: true };
                    eachseat.flat_sale = eachseat.flatSaleId;
                    vipLimit = vipLimit - 1;
                }
                else {
                    if (eachseat.actualTicketPrice) {
                        eachseat.ticketPrice = eachseat.actualTicketPrice;
                    }
                    eachseat.flat_sale = 0;
                    var totalVipSeat = selectedSeatsData.vip.totalSeat ? selectedSeatsData.vip.totalSeat : 0;
                    var ticketPrice = eachseat.actualTicketPrice ? eachseat.actualTicketPrice : eachseat.ticketPrice;
                    selectedSeatsData.vip = { 'totalSeat': totalVipSeat + 1, ticketFare: ticketPrice, currency: eachseat.currency, totalTicketFare: totalVipSeat == 0 ? 1 * ticketPrice : (parseInt(selectedSeatsData.vip.totalSeat) + 1) * ticketPrice, type: 'VIP' };
                }
            }
            if (eachseat.seat_type === "bclass") {
                if (bclassLimit > 0) { //if flat offer applied & allowed seat is greater than 0
                    if (eachseat.flatTicketPrice) {
                        eachseat.ticketPrice = eachseat.flatTicketPrice;
                    }
                    eachseat.flat_sale = eachseat.flatSaleId;
                    var totalBlcassSeatWithFlat = selectedSeatsData.bclassWithFlat.totalSeat ? selectedSeatsData.bclassWithFlat.totalSeat : 0;
                    selectedSeatsData.bclassWithFlat = { 'totalSeat': totalBlcassSeatWithFlat + 1, ticketFare: eachseat.ticketPrice, currency: eachseat.currency, totalTicketFare: totalBlcassSeatWithFlat == 0 ? 1 * eachseat.ticketPrice : (parseInt(selectedSeatsData.bclassWithFlat.totalSeat) + 1) * eachseat.ticketPrice, type: 'Business (Flat Offer)', flat: true };
                    bclassLimit = bclassLimit - 1;
                }
                else {
                    if (eachseat.actualTicketPrice) {
                        eachseat.ticketPrice = eachseat.actualTicketPrice;
                    }
                    eachseat.flat_sale = 0;
                    var totalBclassSeat = selectedSeatsData.bclass.totalSeat ? selectedSeatsData.bclass.totalSeat : 0;
                    var bclassTicketPrice = eachseat.actualTicketPrice ? eachseat.actualTicketPrice : eachseat.ticketPrice;
                    selectedSeatsData.bclass = { 'totalSeat': totalBclassSeat + 1, ticketFare: bclassTicketPrice, currency: eachseat.currency, totalTicketFare: totalBclassSeat == 0 ? 1 * bclassTicketPrice : (parseInt(selectedSeatsData.bclass.totalSeat) + 1) * bclassTicketPrice, type: 'Business' };
                }
            }
            if (eachseat.seat_type === "normal") {
                if (normalLimit > 0) { //if flat offer applied & allowed seat is greater than 0
                    if (eachseat.flatTicketPrice) {
                        eachseat.ticketPrice = eachseat.flatTicketPrice;
                    }
                    eachseat.flat_sale = eachseat.flatSaleId;
                    var totalNormalSeatWithFlat = selectedSeatsData.normalWithFlat.totalSeat ? selectedSeatsData.normalWithFlat.totalSeat : 0;
                    selectedSeatsData.normalWithFlat = { 'totalSeat': totalNormalSeatWithFlat + 1, ticketFare: eachseat.ticketPrice, currency: eachseat.currency, totalTicketFare: totalNormalSeatWithFlat == 0 ? 1 * eachseat.ticketPrice : (parseInt(selectedSeatsData.normalWithFlat.totalSeat) + 1) * eachseat.ticketPrice, type: 'Normal (Flat Offer)', flat: true };
                    normalLimit = normalLimit - 1;
                }
                else {
                    if (eachseat.actualTicketPrice) {
                        eachseat.ticketPrice = eachseat.actualTicketPrice;
                    }
                    eachseat.flat_sale = 0;
                    var totalNormalSeat = selectedSeatsData.normal.totalSeat ? selectedSeatsData.normal.totalSeat : 0;
                    var normalTicketPrice = eachseat.actualTicketPrice ? eachseat.actualTicketPrice : eachseat.ticketPrice;
                    selectedSeatsData.normal = { 'totalSeat': totalNormalSeat + 1, ticketFare: normalTicketPrice, currency: eachseat.currency, totalTicketFare: totalNormalSeat == 0 ? 1 * normalTicketPrice : (parseInt(selectedSeatsData.normal.totalSeat) + 1) * normalTicketPrice, type: 'Normal' };
                }
            }
        });
        var data = { "selectedseat": selectedseat, "seatData": selectedSeatsData, "vipLimit": vipLimit, bclassLimit: bclassLimit, normalLimit: normalLimit };
        return data;
    }
    ;
    getTotalTicketPrice(selectedSeatsData) {
        let totalTicketPrice = 0;
        Object.entries(selectedSeatsData).forEach(([key, value]) => {
            let eachItem = value;
            if (eachItem.totalTicketFare) {
                totalTicketPrice += eachItem.totalTicketFare;
            }
        });
        console.log('ddd', totalTicketPrice);
        return totalTicketPrice;
    }
    ;
}
BuslistService.ɵfac = function BuslistService_Factory(t) { return new (t || BuslistService)(); };
BuslistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BuslistService, factory: BuslistService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    token: '11065004-E295-494E-BD39-02264082B68E'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DiR1":
/*!************************************************************!*\
  !*** ./src/app/views/onward-trip/onward-trip.component.ts ***!
  \************************************************************/
/*! exports provided: OnwardTripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnwardTripComponent", function() { return OnwardTripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_booking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/booking.service */ "p7Zy");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");


















const _c0 = ["reviewModal"];
function OnwardTripComponent_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function OnwardTripComponent_form_5_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Return Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-datepicker-toggle", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-datepicker", null, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.searchForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r0.return_min)("matDatepicker", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r4);
} }
function OnwardTripComponent_div_6_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r13.city_name, " ");
} }
function OnwardTripComponent_div_6_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r14.city_name, " ");
} }
function OnwardTripComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function OnwardTripComponent_div_6_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-autocomplete", null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OnwardTripComponent_div_6_mat_option_11_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-autocomplete", null, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OnwardTripComponent_div_6_mat_option_20_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-datepicker-toggle", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-datepicker", null, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Return Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-datepicker-toggle", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-datepicker", null, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.searchForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 10, ctx_r1.filteredOptions));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 12, ctx_r1.destOptions));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r1.return_min)("matDatepicker", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r12);
} }
function OnwardTripComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sorry, we can not find any seat available on the date you have requested on route ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " .");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Please try another date combination. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.params.source_city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.params.dest_city, " ");
} }
function OnwardTripComponent_div_8_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", class_r24.seatType, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, class_r24.amount, "1.0-0"), " ");
} }
const _c1 = function (a0, a1, a2) { return { "orange-color": a0, "green-color": a1, "blue-color": a2 }; };
function OnwardTripComponent_div_8_div_24_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachSeatType_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c1, eachSeatType_r31.seatType == "vip", eachSeatType_r31.seatType == "bclass", eachSeatType_r31.seatType == "normal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", eachSeatType_r31.seatType, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachSeatType_r31.currencyCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachSeatType_r31.amount, "");
} }
function OnwardTripComponent_div_8_div_24_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a0, a1, a2) { return { "width": a0, "height": a1, "line-height": a2, "border": "2px dashed #cacaca", "text-align": "center", "font-size": "18px", "color": "#cacaca", "text-transform": "uppercase" }; };
const _c3 = function (a0) { return { "font-size": a0 }; };
function OnwardTripComponent_div_8_div_24_div_40_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c2, eachseat_r32.seat_height, eachseat_r32.seat_width, eachseat_r32.seat_height + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, eachseat_r32.seat_width > 50 ? "18px" : "14px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachseat_r32.seat_name, "");
} }
function OnwardTripComponent_div_8_div_24_div_40_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "STF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OnwardTripComponent_div_8_div_24_div_40_div_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachseat_r32.seat_name);
} }
const _c4 = function (a0, a1) { return { alreadySelectedSeat: a0, alreayBooked: a1 }; };
const _c5 = function (a0, a1) { return { selectedSeat: a0, alreayBooked: a1 }; };
const _c6 = function (a0, a2) { return { "background-color": a0, "border-color": "#000", "border-left": a2 }; };
const _c7 = function (a0, a2) { return { "background-color": a0, "border-color": "#000", "border-bottom": a2 }; };
const _c8 = function (a0, a2) { return { "background-color": a0, "border-color": "#000", "border-top": a2 }; };
function OnwardTripComponent_div_8_div_24_div_40_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OnwardTripComponent_div_8_div_24_div_40_div_3_span_2_Template, 2, 0, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OnwardTripComponent_div_8_div_24_div_40_div_3_span_3_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c4, eachseat_r32.selectSeat, eachseat_r32.selection_status || eachseat_r32.seat_type.toLowerCase().trim() == "staff" || eachseat_r32.seat_name.toLowerCase().trim() == "staff"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eachseat_r32.seat_type.toLowerCase().trim() == "staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eachseat_r32.seat_type.toLowerCase().trim() != "staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c5, eachseat_r32.selectSeat, eachseat_r32.selection_status || eachseat_r32.seat_type.toLowerCase().trim() == "staff" || eachseat_r32.seat_name.toLowerCase().trim() == "staff"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c6, eachseat_r32.seat_color, eachseat_r32.seat_color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c5, eachseat_r32.selectSeat, eachseat_r32.selection_status || eachseat_r32.seat_type.toLowerCase().trim() == "staff" || eachseat_r32.seat_name.toLowerCase().trim() == "staff"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c7, eachseat_r32.seat_color, eachseat_r32.seat_color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c5, eachseat_r32.selectSeat, eachseat_r32.selection_status || eachseat_r32.seat_type.toLowerCase().trim() == "staff" || eachseat_r32.seat_name.toLowerCase().trim() == "staff"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c8, eachseat_r32.seat_color, eachseat_r32.seat_color));
} }
const _c9 = function (a1, a2) { return { "position": "absolute", "right": a1, "top": a2 }; };
function OnwardTripComponent_div_8_div_24_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnwardTripComponent_div_8_div_24_div_40_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const eachseat_r32 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r41.selectSeat(eachseat_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OnwardTripComponent_div_8_div_24_div_40_div_1_Template, 2, 0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OnwardTripComponent_div_8_div_24_div_40_div_2_Template, 4, 9, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OnwardTripComponent_div_8_div_24_div_40_div_3_Template, 7, 30, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c9, eachseat_r32.top + "px", eachseat_r32.left + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eachseat_r32.seat_type.toLowerCase() == "driver");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eachseat_r32.seat_type.toLowerCase() == "door");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eachseat_r32.seat_type != "driver" && eachseat_r32.seat_type != "door");
} }
function OnwardTripComponent_div_8_div_24_mat_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const boarding_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", boarding_r43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", boarding_r43.name, " ");
} }
function OnwardTripComponent_div_8_div_24_mat_option_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dropping_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dropping_r44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dropping_r44.name, " ");
} }
function OnwardTripComponent_div_8_div_24_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const seat_r45 = ctx.$implicit;
    const last_r46 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", seat_r45.seat_name, " ", last_r46 ? "" : ", ", " ");
} }
function OnwardTripComponent_div_8_div_24_div_65_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r47.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", data_r47.value.totalSeat, " X ", data_r47.value.ticketFare, " = ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", data_r47.value.currency, " ", data_r47.value.totalTicketFare, "");
} }
function OnwardTripComponent_div_8_div_24_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OnwardTripComponent_div_8_div_24_div_65_span_1_Template, 8, 5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, data_r47.value) != "{}");
} }
function OnwardTripComponent_div_8_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnwardTripComponent_div_8_div_24_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.getSeats(item_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, OnwardTripComponent_div_8_div_24_div_36_Template, 7, 8, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, OnwardTripComponent_div_8_div_24_div_40_Template, 4, 7, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "form", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Boarding Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-select", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function OnwardTripComponent_div_8_div_24_Template_mat_select_selectionChange_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r53.selectBoarding(ctx_r53.boardingForm.get("boarding").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, OnwardTripComponent_div_8_div_24_mat_option_52_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Dropping Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-select", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OnwardTripComponent_div_8_div_24_Template_mat_select_change_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r54.selectDropping(ctx_r54.boardingForm.get("dropping").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, OnwardTripComponent_div_8_div_24_mat_option_58_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, OnwardTripComponent_div_8_div_24_span_64_Template, 2, 2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, OnwardTripComponent_div_8_div_24_div_65_Template, 3, 3, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-icon", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnwardTripComponent_div_8_div_24_Template_button_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "CONTINUE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r17.defaultTripPriceList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.seatList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r20.boardingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.boarding_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.dropping_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.seats);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 10, ctx_r20.selectedData));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx_r20.seats.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" FARE: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](72, 12, ctx_r20.total, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r20.seats.length || ctx_r20.boardingForm.invalid);
} }
function OnwardTripComponent_div_8_p_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", class_r57.seatType, ":");
} }
function OnwardTripComponent_div_8_p_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", class_r58.currencyCode, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, class_r58.amount, "1.0-0"), "");
} }
function OnwardTripComponent_div_8_div_63_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachSeatType_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c1, eachSeatType_r65.seatType == "vip", eachSeatType_r65.seatType == "bclass", eachSeatType_r65.seatType == "normal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", eachSeatType_r65.seatType, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachSeatType_r65.currencyCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachSeatType_r65.amount, "");
} }
function OnwardTripComponent_div_8_div_63_div_48_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c10 = function (a0, a1, a2) { return { "width": a0, "height": a1, "line-height": a2, "border": "2px dashed #e8e8e8", "text-align": "center", "font-size": "18px", "color": "#e8e8e8", "text-transform": "uppercase" }; };
function OnwardTripComponent_div_8_div_63_div_48_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c10, eachseat_r66.seat_width, eachseat_r66.seat_height, eachseat_r66.seat_height + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachseat_r66.seat_name, "");
} }
function OnwardTripComponent_div_8_div_63_div_48_div_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "STF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OnwardTripComponent_div_8_div_63_div_48_div_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachseat_r66.seat_name);
} }
function OnwardTripComponent_div_8_div_63_div_48_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OnwardTripComponent_div_8_div_63_div_48_div_4_span_2_Template, 2, 0, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OnwardTripComponent_div_8_div_63_div_48_div_4_span_3_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c4, eachseat_r66.selectSeat, eachseat_r66.selection_status || eachseat_r66.seat_type.toLowerCase().trim() == "staff" || eachseat_r66.seat_name.toLowerCase().trim() == "staff"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eachseat_r66.seat_type.toLowerCase().trim() == "staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eachseat_r66.seat_type.toLowerCase().trim() != "staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c5, eachseat_r66.selectSeat, eachseat_r66.selection_status || eachseat_r66.seat_type.toLowerCase().trim() == "staff" || eachseat_r66.seat_name.toLowerCase().trim() == "staff"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c6, eachseat_r66.seat_color, eachseat_r66.seat_color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c5, eachseat_r66.selectSeat, eachseat_r66.selection_status || eachseat_r66.seat_type.toLowerCase().trim() == "staff" || eachseat_r66.seat_name.toLowerCase().trim() == "staff"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c7, eachseat_r66.seat_color, eachseat_r66.seat_color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c5, eachseat_r66.selectSeat, eachseat_r66.selection_status || eachseat_r66.seat_type.toLowerCase().trim() == "staff" || eachseat_r66.seat_name.toLowerCase().trim() == "staff"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c8, eachseat_r66.seat_color, eachseat_r66.seat_color));
} }
const _c11 = function (a1, a2) { return { "position": "absolute", "top": a1, "left": a2 }; };
function OnwardTripComponent_div_8_div_63_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnwardTripComponent_div_8_div_63_div_48_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const eachseat_r66 = ctx.$implicit; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r75.selectSeat(eachseat_r66); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OnwardTripComponent_div_8_div_63_div_48_div_2_Template, 2, 0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OnwardTripComponent_div_8_div_63_div_48_div_3_Template, 3, 6, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OnwardTripComponent_div_8_div_63_div_48_div_4_Template, 7, 30, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r66 = ctx.$implicit;
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r60.tooltip(eachseat_r66, item_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c11, eachseat_r66.top + "px", eachseat_r66.left + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eachseat_r66.seat_type.toLowerCase() == "driver");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eachseat_r66.seat_type.toLowerCase() == "door");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eachseat_r66.seat_type.toLowerCase() != "driver" && eachseat_r66.seat_type.toLowerCase() != "door");
} }
function OnwardTripComponent_div_8_div_63_mat_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const boarding_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", boarding_r78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", boarding_r78.name, " ");
} }
function OnwardTripComponent_div_8_div_63_mat_option_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dropping_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dropping_r79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dropping_r79.name, " ");
} }
function OnwardTripComponent_div_8_div_63_span_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const seat_r80 = ctx.$implicit;
    const last_r81 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", seat_r80.seat_name, " ", last_r81 ? "" : ", ", " ");
} }
function OnwardTripComponent_div_8_div_63_div_73_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r82.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", data_r82.value.totalSeat, " X ", data_r82.value.ticketFare, " = ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", data_r82.value.currency, " ", data_r82.value.totalTicketFare, "");
} }
function OnwardTripComponent_div_8_div_63_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OnwardTripComponent_div_8_div_63_div_73_span_1_Template, 8, 5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, data_r82.value) != "{}");
} }
function OnwardTripComponent_div_8_div_63_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Customise your journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnwardTripComponent_div_8_div_63_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.getSeats(item_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OnwardTripComponent_div_8_div_63_div_9_Template, 7, 8, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Available Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Selected seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Booked seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, OnwardTripComponent_div_8_div_63_div_48_Template, 5, 8, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "form", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Boarding Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-select", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function OnwardTripComponent_div_8_div_63_Template_mat_select_selectionChange_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r88.selectBoarding(ctx_r88.boardingForm.get("boarding").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, OnwardTripComponent_div_8_div_63_mat_option_60_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Dropping Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-select", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function OnwardTripComponent_div_8_div_63_Template_mat_select_selectionChange_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r89.selectDropping(ctx_r89.boardingForm.get("dropping").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, OnwardTripComponent_div_8_div_63_mat_option_66_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, OnwardTripComponent_div_8_div_63_span_72_Template, 2, 2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, OnwardTripComponent_div_8_div_63_div_73_Template, 3, 3, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-icon", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnwardTripComponent_div_8_div_63_Template_button_click_82_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r90.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "CONTINUE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r17.defaultTripPriceList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.seatList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r23.boardingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.boarding_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.dropping_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.seats);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 10, ctx_r23.selectedData));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx_r23.seats.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" FARE: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](80, 12, ctx_r23.total, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r23.seats.length || ctx_r23.boardingForm.invalid);
} }
function OnwardTripComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, OnwardTripComponent_div_8_tr_21_Template, 6, 5, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnwardTripComponent_div_8_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const item_r17 = ctx.$implicit; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.getSeats(item_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "view seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OnwardTripComponent_div_8_div_24_Template, 77, 15, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "RATING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, OnwardTripComponent_div_8_p_55_Template, 2, 1, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, OnwardTripComponent_div_8_p_57_Template, 3, 5, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnwardTripComponent_div_8_Template_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const item_r17 = ctx.$implicit; const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.getSeats(item_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "view seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, OnwardTripComponent_div_8_div_63_Template, 85, 15, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r17.trip_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r17.departure_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r17.defaultTripPriceList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.selectedTripData.bus_id == item_r17.bus_id && ctx_r3.selectedTripData.delayedDate == item_r17.delayedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r17.trip_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r17.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r17.departure_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r17.arrival_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r17.defaultTripPriceList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r17.defaultTripPriceList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r17.available_seat_count, " seats available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.selectedTripData.bus_id == item_r17.bus_id && ctx_r3.selectedTripData.delayedDate == item_r17.delayedDate);
} }
class OnwardTripComponent {
    constructor(service, activated, formBuilder, bookingService, route, datePipe) {
        this.service = service;
        this.activated = activated;
        this.formBuilder = formBuilder;
        this.bookingService = bookingService;
        this.route = route;
        this.datePipe = datePipe;
        this.show = false;
        this.returnTicket = false;
        this.buses = [];
        this.seats = [];
        this.boarding_points = [];
        this.dropping_points = [];
        this.dropping = {};
        this.boarding = {};
        this.params = {};
        this.obj = {};
        this.seatList = [];
        this.total = 0;
        this.bus = {};
        this.selectedTripData = {};
        this.selectedData = {};
        this.reviewInfo = {};
        this.cities = [];
        this.destinations = [];
        this.loading = false;
        this.proceed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.modify = false;
    }
    ngOnInit() {
        this.bookingService.reset();
        this.searchForm = this.formBuilder.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sourceCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            returnDate: [''],
            city_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            destCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dest_id: ['',],
        });
        this.returnForm = this.formBuilder.group({
            returnDate: [''],
        });
        this.initParams();
        this.bookingService.review_info.subscribe((res) => {
            this.reviewInfo = res;
        });
        this.bookingService.selectedseatdata.subscribe((res) => {
            this.selectedData = res;
        });
        this.bookingService.selected_seats.subscribe((res) => {
            this.seats = res;
        });
        this.bookingService.total.subscribe((res) => {
            this.total = res;
        });
        this.bookingService.bording_points.subscribe((res) => {
            this.boarding_points = res;
        });
        this.bookingService.dropping_points.subscribe((res) => {
            this.dropping_points = res;
        });
        this.bookingService.seats.subscribe((res) => {
            this.seatList = res;
        });
        this.bookingService.trip_data.subscribe((res) => {
            this.selectedTripData = res;
        });
        this.boardingForm = this.formBuilder.group({
            dropping: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            boarding: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.initForm();
        this.getCities();
        this.filteredOptions = this.searchForm.get('sourceCity').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => {
            if (value.id) {
                this.searchForm.patchValue({ "city_id": value.id, "sourceCity": value.city_name });
                this.destination();
            }
            const name = typeof value === 'string' ? value : value === null || value === void 0 ? void 0 : value.city_name;
            return name ? this._filter(name) : this.cities.slice();
        }));
        this.destOptions = this.searchForm.get('destCity').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => {
            if (value.id) {
                this.searchForm.patchValue({ "dest_id": value.id, "destCity": value.city_name });
            }
            const name = typeof value === 'string' ? value : value === null || value === void 0 ? void 0 : value.city_name;
            return name ? this._filterDestinations(name) : this.destinations.slice();
        }));
    }
    initParams() {
        this.activated.paramMap.subscribe((res) => {
            this.params.source_city_id = res.get('id1');
            this.params.destination_city_id = res.get('id2');
            this.params.travel_date = res.get('id3');
            this.params.source_city = res.get('id4');
            this.params.dest_city = res.get('id5');
            this.params.return_date = res.get('id6');
            this.bookingService.setBookingParams(this.params);
            let data = {
                "source_city_id": res.get('id1'),
                "destination_city_id": res.get('id2'),
                "travel_date": res.get('id3'),
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
            };
            this.service.getTrips(data).subscribe((res) => {
                this.buses = res.data;
                this.loading = true;
            });
        });
    }
    initForm() {
        if (this.params.return_date) {
            this.searchForm.patchValue(({ date: new Date(this.params.travel_date), sourceCity: this.params.source_city, destCity: this.params.dest_city, dest_id: this.params.destination_city_id, city_id: this.params.source_city_id, returnDate: new Date(this.params.return_date) }));
        }
        else {
            this.searchForm.patchValue(({ date: new Date(this.params.travel_date), sourceCity: this.params.source_city, destCity: this.params.dest_city, dest_id: this.params.destination_city_id, city_id: this.params.source_city_id }));
        }
    }
    onSubmit() {
        let data = this.searchForm.value;
        this.modify = false;
        this.route.navigate(['buslist', data.city_id, data.dest_id, this.datePipe.transform(data.date, 'yyyy-MM-dd'), data.sourceCity, data.destCity, this.datePipe.transform(data.returnDate, 'yyyy-MM-dd')]);
    }
    getSeats(item) {
        this.bus = item;
        this.bookingService.toggleBusDetail(item);
    }
    getCities() {
        this.service.getCities().subscribe((res) => {
            this.cities = res.data;
        });
    }
    _filter(name) {
        const filterValue = name.toLowerCase();
        return this.cities.filter(option => option.city_name.toLowerCase().includes(filterValue));
    }
    _filterDestinations(name) {
        const filterValue = name.toLowerCase();
        return this.destinations.filter(option => option.city_name.toLowerCase().includes(filterValue));
    }
    destination() {
        this.service.getDestinations(this.searchForm.get('city_id').value).subscribe((res) => {
            this.destinations = res.data;
        });
    }
    tooltip(item, bus) {
        if (item.seat_type == 'normal' || item.seat_type == 'bclass' || item.seat_type == 'vip') {
            let obj = bus.defaultTripPriceList.find(ob => ob.seatType == item.seat_type);
            return item.seat_name + '| ' + item.seat_type.charAt(0).toUpperCase() + item.seat_type.slice(1) + '|' + obj.currencyCode + ' ' + obj.amount;
        }
        else {
            return item.seat_name + '| ' + item.seat_type.charAt(0).toUpperCase() + item.seat_type.slice(1);
        }
    }
    selectSeat(item) {
        this.bookingService.selectSeat(item);
    }
    selectBoarding(item) {
        this.bookingService.changeBoarding(item);
    }
    selectDropping(item) {
        this.bookingService.changeDropping(item);
    }
    save() {
        this.bookingService.saveOutward();
        this.proceed.emit(true);
    }
}
OnwardTripComponent.ɵfac = function OnwardTripComponent_Factory(t) { return new (t || OnwardTripComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_booking_service__WEBPACK_IMPORTED_MODULE_6__["BookingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"])); };
OnwardTripComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnwardTripComponent, selectors: [["app-onward-trip"]], viewQuery: function OnwardTripComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.reviewModal = _t.first);
    } }, inputs: { modify: "modify" }, outputs: { proceed: "proceed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])], decls: 9, vars: 4, consts: [[1, "results-section", "container", 2, "margin-top", "-40px", "padding-top", "4em", "padding-bottom", "0 !important"], [1, "section-body"], [1, "text-center"], [1, "row", 2, "margin-top", "15px"], [1, "col-sm-5"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "row", "style", "margin-top:15px;", 4, "ngIf"], [4, "ngIf"], ["class", "", 4, "ngFor", "ngForOf"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-8"], ["appearance", "outline"], ["matInput", "", "formControlName", "returnDate", "placeholder", "Return Date", 3, "min", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "col-md-2"], [1, "pull-right", "btn", "btn-sm", "view-seats"], [1, "col-sm-12"], [1, "col-md-3"], ["matInput", "", "formControlName", "sourceCity", "placeholder", "From", 3, "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "destCity", "placeholder", "Destination", 3, "matAutocomplete"], ["dest", "matAutocomplete"], ["matInput", "", "formControlName", "date", "placeholder", "Date", 3, "matDatepicker"], ["picker1", ""], [1, "col-md-1"], [1, "pull-right", "btn", "view-seats"], [1, "fa-solid", "fa-magnifying-glass"], [3, "value"], ["src", "assets/img/no_bus.png", "alt", "No Bus"], [2, "font-size", "30px", "font-weight", "400"], [2, "font-size", "20px", "font-weight", "600"], [1, "fa-solid", "fa-chevron-right"], [1, ""], [1, "row", "align-items-start", "py-2", "container-fluid", "px-0", "px-md-3", "result-row"], [1, "col-4", "d-block", "d-md-none"], ["src", "https://cdn-icons-png.flaticon.com/512/1819/1819543.png", "alt", "bus icon", "height", "40", "width", "40"], [1, "mb-0", "fw-bold", "small"], [1, "col-3", "d-block", "d-md-none"], [1, "mb-0", 2, "font-size", "13px !important"], [1, "far", "fa-star", "fa-xs"], ["title", "a/c available", 1, "fas", "fa-fan", "fa-xs"], ["title", "free wifi", 1, "fas", "fa-wifi", "fa-xs"], ["title", "charging point", 1, "fas", "fa-bolt", "fa-xs"], [1, "col-5", "d-block", "d-md-none"], [1, "table", "table-sm", "table-borderless", "mb-0"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "view-seats", "float-end", 3, "click"], ["class", "col-sm-12 pb-2 d-block d-md-none", "style", "margin-top: 15px;background-color:#f8f3c1;border-radius:5px", 4, "ngIf"], [1, "row", "align-items-start", "border-bottom", "py-2", "py-md-3", "container-fluid", "px-0", "px-md-3", "result-row"], [1, "col-1", "d-none", "d-md-block"], ["src", "https://cdn-icons-png.flaticon.com/512/1819/1819543.png", "alt", "bus icon", "height", "50", "width", "50"], [1, "col-3", "d-none", "d-md-block"], [1, "mb-0", "fw-bold"], [1, "d-flex", "gap-3", "mt-2"], ["title", "a/c available", 1, "fas", "fa-fan"], ["title", "free wifi", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "data-bs-title", "free wifi", 1, "fas", "fa-wifi"], ["title", "charging point", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "data-bs-title", "charging point", 1, "fas", "fa-bolt"], [1, "text-center", "col-2", "d-none", "d-md-flex", "align-items-center"], ["src", "https://cdn-icons-png.flaticon.com/512/581/581838.png", "alt", "", "height", "40"], [1, "fw-bold"], [1, "mb-0"], [1, "col-2", "d-none", "d-md-block"], [1, "d-flex"], [1, "fa-solid", "fa-star", "star"], [1, "col-4", "d-none", "d-md-flex", "justify-content-between"], [1, "text-end"], ["class", "mb-0", "style", "text-transform: capitalize;", 4, "ngFor", "ngForOf"], ["class", "mb-0", 4, "ngFor", "ngForOf"], [1, "mb-1", "primary"], [1, "btn", "btn-sm", "view-seats", 3, "click"], ["class", "col-sm-12 pb-2 d-none d-md-block", "style", "margin-top: 15px;background-color:#f8f3c1;border-radius:5px", 4, "ngIf"], [1, "small", 2, "text-transform", "capitalize"], [1, "small", "fw-bold"], [1, "col-sm-12", "pb-2", "d-block", "d-md-none", 2, "margin-top", "15px", "background-color", "#f8f3c1", "border-radius", "5px"], [1, "row", "pt-2"], [1, "col-sm-12", "ustify-content-right"], [1, "fa-regular", "fa-circle-xmark", "text-danger", 2, "float", "right", "font-size", "24px", 3, "click"], [1, "d-flex", "gap-2", "justify-content-center"], [1, "col-md-4", "col-lg-4", "col-sm-4", "col-xs-4", 2, "position", "relative", "text-align", "left"], [2, "position", "relative", "width", "31px", "height", "24px"], [1, "static-seat-mob"], [1, "static-right-mob"], [1, "static-top-mob"], [1, "static-bottom-mob"], [2, "padding-top", "5px"], [1, "col-md-4", "col-lg-4", "col-sm-4", "col-xs-4", "padding-right-none", 2, "position", "relative", "text-align", "left"], [1, "static-seat-mob", 2, "background-color", "#9a2718"], [1, "static-right-mob", 2, "background-color", "#9a2718"], [1, "static-top-mob", 2, "background-color", "#9a2718"], [1, "static-bottom-mob", 2, "background-color", "#9a2718"], [1, "static-seat-mob", 2, "background-color", "#ada9a9"], [1, "static-right-mob", 2, "background-color", "#ada9a9"], [1, "static-top-mob", 2, "background-color", "#ada9a9"], [1, "static-bottom-mob", 2, "background-color", "#ada9a9"], ["class", "col-sm-12", "style", "font-size: 1px;", 4, "ngFor", "ngForOf"], [1, "col-sm-8"], [1, "hidden-xs", "mobileSeatLayout"], [3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "col-sm-4"], [1, "card"], [1, "card-body"], [3, "formGroup"], ["formControlName", "boarding", 3, "selectionChange"], ["formControlName", "dropping", 3, "change"], ["class", "col-sm-12", 4, "ngFor", "ngForOf"], [1, "card-footer", 2, "background-color", "black", "color", "white", "font-weight", "600", "font-size", "13px"], [3, "matBadge"], [2, "float", "right", "font-size", "12px"], [1, "btn", "search-seats", 2, "margin-right", "5px", "float", "right", 3, "disabled", "click"], [1, "col-sm-12", 2, "font-size", "1px"], [1, "fa-solid", "fa-circle", 3, "ngClass"], [2, "text-transform", "capitalize", "margin-left", "5px"], [2, "font-weight", "700"], [3, "ngStyle", "click"], ["class", "default-cursor", 4, "ngIf"], ["style", "position: relative;width:37px;height:37px;cursor:pointer", 4, "ngIf"], [1, "default-cursor"], ["src", "assets/img/driver.png", "alt", "Driver", 1, "driver"], [3, "ngStyle"], [1, "word-break", 3, "ngStyle"], [2, "position", "relative", "width", "37px", "height", "37px", "cursor", "pointer"], [1, "chair-seat-mob", 2, "text-align", "center", 3, "ngClass"], ["style", "padding-right: 10px;", 4, "ngIf"], [1, "chair-right-mob", 3, "ngClass", "ngStyle"], [1, "chair-left-mob", 3, "ngClass", "ngStyle"], [1, "chair-bottom-mob", 3, "ngClass", "ngStyle"], [2, "padding-right", "10px"], [2, "text-transform", "capitalize"], [2, "float", "right"], [2, "font-weight", "600"], [1, "mb-0", 2, "text-transform", "capitalize"], [1, "col-sm-12", "pb-2", "d-none", "d-md-block", 2, "margin-top", "15px", "background-color", "#f8f3c1", "border-radius", "5px"], [1, "row", "pt-1"], [2, "font-size", "14px", "font-weight", "700", "text-transform", "capitalize"], [1, "row", "pt-3"], [1, "col-md-6", "col-xs-6", "col-sm-6", "col-lg-6", "padding-0", "fs-13", "pt-12"], ["class", "col-md-4 padding-0", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-xs-6", "col-sm-6", "col-lg-6", "padding-0", "text-center"], [1, "col-md-4", "row", "padding-right-none", 2, "position", "relative"], [1, "col-lg-4", "col-md-4"], [2, "position", "absolute", "top", "0", "left", "32px"], [1, "chair-seat", 2, "text-align", "center", "background-color", "#fff", "width", "26px", "height", "27px"], [1, "chair-right", 2, "background-color", "#fff", "height", "29px", "width", "7px", "left", "24px", "top", "-1px"], [1, "chair-top", 2, "background-color", "#fff", "height", "7px", "left", "10px", "width", "15px", "top", "-1px"], [1, "chair-bottom", 2, "background-color", "#fff", "top", "21px", "height", "7px", "left", "10px", "width", "15px"], [1, "col-lg-8", "col-md-8", "padding-0", 2, "line-height", "39px"], [1, "chair-seat", 2, "text-align", "center", "background-color", "#9a2718", "width", "26px", "height", "27px", "color", "#fff"], [1, "chair-right", 2, "background-color", "#9a2718", "height", "29px", "width", "7px", "left", "24px", "top", "-1px"], [1, "chair-top", 2, "background-color", "#9a2718", "height", "7px", "left", "10px", "width", "15px", "top", "-1px"], [1, "chair-bottom", 2, "background-color", "#9a2718", "top", "21px", "height", "7px", "left", "10px", "width", "15px"], [2, "position", "absolute", "top", "0", "left", "38px"], [1, "chair-seat", 2, "text-align", "center", "background-color", "#ada9a9", "width", "26px", "height", "27px"], [1, "chair-right", 2, "background-color", "#ada9a9", "height", "29px", "width", "7px", "left", "24px", "top", "-1px"], [1, "chair-top", 2, "background-color", "#ada9a9", "height", "7px", "left", "10px", "width", "15px", "top", "-1px"], [1, "chair-bottom", 2, "background-color", "#ada9a9", "top", "21px", "height", "7px", "left", "10px", "width", "15px"], [1, "hidden-xs", "seatLayout"], ["data-toggle", "tooltip", "data-placement", "bottom", 3, "ngStyle", "title", "click", 4, "ngFor", "ngForOf"], ["formControlName", "dropping", 3, "selectionChange"], [1, "col-md-4", "padding-0"], ["data-toggle", "tooltip", "data-placement", "bottom", 3, "ngStyle", "title", "click"], [2, "position", "relative", "width", "50px", "height", "45px"], ["style", "position: relative;width:50px;height:45px;", 4, "ngIf"], [1, "chair-seat", 2, "text-align", "center", "padding-right", "8px", "padding-top", "5px", 3, "ngClass"], [1, "chair-right", 3, "ngClass", "ngStyle"], [1, "chair-top", 3, "ngClass", "ngStyle"], [1, "chair-bottom", 3, "ngClass", "ngStyle"]], template: function OnwardTripComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OnwardTripComponent_form_5_Template, 13, 4, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OnwardTripComponent_div_6_Template, 42, 14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OnwardTripComponent_div_7_Template, 12, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OnwardTripComponent_div_8_Template, 64, 12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modify);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.buses.length && ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buses);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepicker"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocomplete"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadge"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: [".hero-section[_ngcontent-%COMP%] {\n  min-height: 0px;\n}\n\n.departure[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #1f1309;\n  margin-bottom: 15px;\n}\n\n.view-seats[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid #e20613;\n  font-size: 13px;\n  padding: 6px 10px;\n  text-transform: capitalize;\n  color: black;\n  margin-top: 5px;\n  font-weight: 700;\n  background-color: #e20613;\n  border-radius: 20px;\n}\n\n.search-seats[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid black;\n  font-size: 13px;\n  padding: 6px 10px;\n  text-transform: capitalize;\n  color: white;\n  margin-top: 5px;\n  font-weight: 700;\n  background-color: black;\n  border-radius: 20px;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.primary[_ngcontent-%COMP%] {\n  color: black !important;\n  font-weight: 600;\n}\n\n.star[_ngcontent-%COMP%] {\n  color: #e20613 !important;\n}\n\ndiv[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n\n  .mat-tab-label {\n  padding: 0px !important;\n  justify-content: left !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix {\n  padding: 0.6em 0px !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix > span.mat-form-field-label-wrapper {\n  top: -1.3em !important;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75) !important;\n  width: 133.33333% !important;\n}\n\n.mat-badge-content[_ngcontent-%COMP%] {\n  background: red !important;\n  color: blue !important;\n}\n\n.identifiedType[_ngcontent-%COMP%] {\n  padding: 0px 8px;\n  border-radius: 50px;\n  margin-right: 5px;\n}\n\n.orange-color[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.green-color[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.blue-color[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n  .mat-form-field-wrapper {\n  margin-bottom: -0.65em !important;\n  margin-top: -0.15em !important;\n}\n\n.mobileSeatLayout[_ngcontent-%COMP%] {\n  height: 700px;\n  margin: 0 auto;\n  position: relative;\n  background-color: #fff;\n  box-shadow: 0 1px 8px #ccc;\n  cursor: pointer;\n  width: 300px;\n}\n\n.chair-seat-mob[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin: 0px 3px;\n  width: 30px;\n  height: 25px;\n  border-width: 2px;\n  border-color: #aaa;\n  border-top-left-radius: 5px;\n  align-items: center;\n  justify-content: center;\n  border-top-right-radius: 5px;\n  border-style: solid;\n  border-bottom: solid 1px black !important;\n}\n\n.chair-bottom-mob[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5px;\n  left: 1px;\n  right: 0;\n  width: 34px;\n  height: 7px;\n  border-width: 2px;\n  border-style: solid;\n  border-left-width: 3px !important;\n  border-left-style: solid !important;\n  border: solid 1px !important;\n  z-index: 1;\n  border-top: 0 !important;\n}\n\n.chair-left-mob[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 1px;\n  width: 8px;\n  height: 18px;\n  border-width: 2px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  top: 11px;\n  border-style: solid;\n  border-right: 0;\n  border-top-width: 3px !important;\n  border-top-style: solid !important;\n  border: solid 1px !important;\n}\n\n.chair-right-mob[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2px;\n  width: 8px;\n  height: 18px;\n  border-width: 2px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  top: 11px;\n  border-bottom-width: 8px !important;\n  border-bottom-style: solid !important;\n  border: solid 1px !important;\n}\n\n.static-top-mob[_ngcontent-%COMP%] {\n  background-color: #fff;\n  height: 21px;\n  left: 0px;\n  width: 7px;\n  top: 9px;\n  position: absolute;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-width: 8px !important;\n  border-bottom-style: solid !important;\n  border: solid 1px !important;\n}\n\n.static-bottom-mob[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-top: solid 1px !important;\n  top: 23px;\n  width: 31px;\n  left: 0;\n  position: absolute;\n  bottom: 9px;\n  right: 0;\n  height: 7px;\n  border-width: 2px;\n  border-style: solid;\n  border-left-width: 3px !important;\n  border-left-style: solid !important;\n  border: solid 1px !important;\n  z-index: 1;\n}\n\n.static-right-mob[_ngcontent-%COMP%] {\n  background-color: #fff;\n  height: 21px;\n  left: 24px;\n  border: solid 1px !important;\n  position: absolute;\n  right: 6px;\n  width: 7px;\n  border-width: 2px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  top: 9px;\n  border-bottom-style: solid !important;\n}\n\n.static-seat-mob[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin: 0px 3px;\n  width: 26px;\n  height: 27px;\n  border-width: 2px;\n  border-color: #aaa;\n  border-top-left-radius: 5px;\n  align-items: center;\n  justify-content: center;\n  border-top-right-radius: 5px;\n  border-style: solid;\n  border-bottom: solid 1px black !important;\n  text-align: center;\n  padding-top: 3px;\n}\n\n.selectedSeat[_ngcontent-%COMP%] {\n  background-color: #990000 !important;\n}\n\n.alreadySelectedSeat[_ngcontent-%COMP%] {\n  background-color: #990000 !important;\n  color: #fff;\n  border-color: #990000;\n}\n\n.alreayBooked[_ngcontent-%COMP%] {\n  background-color: #ada9a9 !important;\n  pointer-events: none;\n  border-color: #888888;\n}\n\n.hd[_ngcontent-%COMP%] {\n  padding: 0 0 0;\n  margin-top: 0;\n}\n\n.onward-return-tab[_ngcontent-%COMP%] {\n  background-color: #F0E68C;\n  color: black;\n}\n\n.enable[_ngcontent-%COMP%] {\n  background-color: #FDDA0D;\n}\n\n.disable[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29ud2FyZC10cmlwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0FBR0o7O0FBREE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBQUE7RUFDQyx5QkFBQTtBQUdEOztBQURBO0VBQ0ksMEJBQUE7QUFJSjs7QUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUFHQTs7QUFDQTtFQUErSiw2QkFBQTtBQUcvSjs7QUFGQTtFQUFrTSxzQkFBQTtBQU1sTTs7QUFKQTtFQUNBLG9EQUFBO0VBQ0EsNEJBQUE7QUFPQTs7QUFKQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUFPQTs7QUFIQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQU1KOztBQUhBO0VBQ0ksYUFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtBQU9KOztBQUxBO0VBQ0ksV0FBQTtBQVFKOztBQU5BO0VBQ0ksaUNBQUE7RUFDQSw4QkFBQTtBQVNKOztBQUxDO0VBQ0csYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVFKOztBQUhDO0VBQ0csc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQU9KOztBQUxBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQVFKOztBQU5BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0FBU0o7O0FBUEE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7QUFVSjs7QUFSQTtFQUNJLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0FBV0o7O0FBVEE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsUUFBQTtFQUNBLHFDQUFBO0FBWUo7O0FBVkE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBYUo7O0FBVkE7RUFDSSxvQ0FBQTtBQWFKOztBQVhBO0VBQ0ksb0NBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFjSjs7QUFaQTtFQUNJLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQWVKOztBQVZBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUFhSjs7QUFWQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQWFKOztBQVhBO0VBQ0kseUJBQUE7QUFjSjs7QUFaQTtFQUNJLG9CQUFBO0FBZUoiLCJmaWxlIjoib253YXJkLXRyaXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVyby1zZWN0aW9uIHtcbiAgICBtaW4taGVpZ2h0OiAwcHg7XG59XG5cbi5kZXBhcnR1cmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgY29sb3I6ICMxZjEzMDk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnZpZXctc2VhdHMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTIwNjEzO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBjb2xvcjpibGFjaztcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIwNjEzO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uc2VhcmNoLXNlYXRzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5wcmltYXJ5IHtcbiAgICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cblxuLnN0YXJ7XG4gY29sb3I6I2UyMDYxMyAhaW1wb3J0YW50O1xufVxuZGl2e1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG5cbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCB7XG5wYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbmp1c3RpZnktY29udGVudDogbGVmdCAhaW1wb3J0YW50O1xufVxuXG5cbjo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgPiBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciA+IGRpdi5tYXQtZm9ybS1maWVsZC1mbGV4ID4gZGl2Lm1hdC1mb3JtLWZpZWxkLWluZml4ICB7IHBhZGRpbmc6IDAuNmVtIDBweCAhaW1wb3J0YW50IH1cbjo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgPiBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciA+IGRpdi5tYXQtZm9ybS1maWVsZC1mbGV4ID4gZGl2Lm1hdC1mb3JtLWZpZWxkLWluZml4ID4gc3Bhbi5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHsgdG9wOiAtMS4zZW0gIWltcG9ydGFudCB9XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSkgIWltcG9ydGFudDtcbndpZHRoOiAxMzMuMzMzMzMlICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtYmFkZ2UtY29udGVudCB7XG5iYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcbmNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XG59XG5cblxuLmlkZW50aWZpZWRUeXBle1xuICAgIHBhZGRpbmc6IDBweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLm9yYW5nZS1jb2xvcntcbiAgICBjb2xvcjogb3JhbmdlXG59XG4uZ3JlZW4tY29sb3J7XG4gICAgY29sb3I6IGdyZWVuXG59XG4uYmx1ZS1jb2xvcntcbiAgICBjb2xvcjogYmx1ZVxufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjY1ZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAtMC4xNWVtICFpbXBvcnRhbnQ7XG4gfVxuXG5cbiAubW9iaWxlU2VhdExheW91dCB7XG4gICAgaGVpZ2h0OiA3MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDFweCA4cHggI2NjYztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIC8vIG1hcmdpbjogMCBhdXRvO1xufVxuXG5cbiAuY2hhaXItc2VhdC1tb2Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAwcHggM3B4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItY29sb3I6ICNhYWE7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjayAhaW1wb3J0YW50O1xufVxuLmNoYWlyLWJvdHRvbS1tb2Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDVweDtcbiAgICBsZWZ0OiAxcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDM0cHg7XG4gICAgaGVpZ2h0OiA3cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci10b3A6IDAgIWltcG9ydGFudDtcbn1cbi5jaGFpci1sZWZ0LW1vYiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAxcHg7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgdG9wOiAxMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDNweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIWltcG9ydGFudDtcbn1cbi5jaGFpci1yaWdodC1tb2Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMnB4O1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIHRvcDogMTFweDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiA4cHggIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICFpbXBvcnRhbnQ7XG59XG4uc3RhdGljLXRvcC1tb2J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiA3cHg7XG4gICAgdG9wOiA5cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDhweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIWltcG9ydGFudDtcbn1cbi5zdGF0aWMtYm90dG9tLW1vYntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAhaW1wb3J0YW50O1xuICAgIHRvcDogMjNweDtcbiAgICB3aWR0aDogMzFweDtcbiAgICBsZWZ0OiAwOyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA5cHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA3cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAxO1xufVxuLnN0YXRpYy1yaWdodC1tb2J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgbGVmdDogMjRweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNnB4O1xuICAgIHdpZHRoOiA3cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgdG9wOiA5cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQgIWltcG9ydGFudDtcbn1cbi5zdGF0aWMtc2VhdC1tb2J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDBweCAzcHg7XG4gICAgd2lkdGg6IDI2cHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci1jb2xvcjogI2FhYTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG59XG5cbi5zZWxlY3RlZFNlYXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5MDAwMCAhaW1wb3J0YW50O1xufVxuLmFscmVhZHlTZWxlY3RlZFNlYXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5MDAwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjOTkwMDAwO1xufVxuLmFscmVheUJvb2tlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRhOWE5ICFpbXBvcnRhbnQ7XG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcbiAgICBib3JkZXItY29sb3I6ICM4ODg4ODg7XG59XG5cblxuXG4uaGQge1xuICAgIHBhZGRpbmc6IDAgMCAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5vbndhcmQtcmV0dXJuLXRhYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjBFNjhDO1xuICAgIGNvbG9yOmJsYWNrO1xufVxuLmVuYWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkREQTBEO1xufVxuLmRpc2FibGV7XG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "FPq/":
/*!**************************************************!*\
  !*** ./src/app/views/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 91, vars: 0, consts: [[2, "background-color", "#0e6ba8", "color", "white"], [1, "container-fluid", "top"], [1, "container"], [1, "row", "mt-3"], [1, "col", "col-md-6", "col-lg-3"], [2, "font-weight", "bold"], [1, "row", "text-center", "top", "p-1", 2, "width", "100vw"], [2, "font-size", "small"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Head Office KidiaOneExpress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tanzania,Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email Us : info@kidiaoneexpress.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Head Office: (+255) 784377027/(+255) 693440568");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Shekilango: (+255) 757575740");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Basihaya: (+255) 748700005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Kariakoo: (+255) 747000019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Basihaya: (+255) 748700005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Shekilango: (+255) 757575740");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Basihaya: (+255) 748700005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Shekilango: (+255) 757575740");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Basihaya: (+255) 748700005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Shekilango: (+255) 757575740");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Basihaya: (+255) 748700005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Kidia One Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Shekilango Dsm +255757575740 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Kariakoo mtaa wa Msimbazi na Nyamwe Dsm +255747000019 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Boko Basihaya Dsm +255748700005 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Moshi opp puma petroli station,Kilimanjaro +255744636365 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Arusha, NhcMakao mapya +255757575786 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Dodoma Standi +255762232323 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Nyegezi ,Mwanza +255742228383 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Magufuli Bius Terminal Room No. A12 +255748700004 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Kidia One Hotel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Plot No 80, Block D,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Msamvu Round about Morogoro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Phone:+255658565600 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "hotel@kidiaone.co.tz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Map | Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Kidia One Trucks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "P. O. Box 12981 Dar es Salaam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Phone: 0719766088 or 0753683480 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "info@kidiaone.co.tz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "info@kidiaonepress.co.tz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "All rights reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-fluid[_ngcontent-%COMP%] {\n  padding: 1rem;\n  color: white;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  min-height: 100px;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: small;\n  color: white !important;\n}\n.top[_ngcontent-%COMP%] {\n  background-color: #0e6ba8;\n}\n.top[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.top[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.top[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n.bottom[_ngcontent-%COMP%] {\n  background-color: #0a2472;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBQ0o7QUFJUTtFQUNJLGlCQUFBO0FBRlo7QUFHWTtFQUNJLGdCQUFBO0FBRGhCO0FBR2dCO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtBQURwQjtBQVVBO0VBQ0kseUJBQUE7QUFQSjtBQVNJO0VBQ0ksZUFBQTtBQVBSO0FBVUk7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQVJSO0FBV1E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFUWjtBQWNBO0VBQ0kseUJBQUE7QUFYSiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuXG5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIC5jb2wge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG59XG5cbi50b3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTZiYTg7XG5cbiAgICBsaSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuaWNvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDFyZW07XG5cblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJvdHRvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMjQ3MjtcbiAgICBcbn0iXX0= */"] });


/***/ }),

/***/ "GF8S":
/*!**************************************************!*\
  !*** ./src/app/views/return/return.component.ts ***!
  \**************************************************/
/*! exports provided: ReturnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnComponent", function() { return ReturnComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_return_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/return.service */ "j0re");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "OlR4");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../register/register.component */ "4XPS");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");






















const _c0 = ["reviewModal"];
const _c1 = ["loginModal"];
function ReturnComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r12.city_name, " ");
} }
function ReturnComponent_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r13.city_name, " ");
} }
function ReturnComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Sorry, we can not find any seat available on the date you have requested on route ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " .");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Please try another date combination. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.params.source_city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.params.dest_city, " ");
} }
function ReturnComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Return Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ReturnComponent_div_46_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", class_r21.seatType, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 2, class_r21.amount, "1.0-0"), " ");
} }
const _c2 = function (a0, a1, a2) { return { "orange-color": a0, "green-color": a1, "blue-color": a2 }; };
function ReturnComponent_div_46_div_24_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachSeatType_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](4, _c2, eachSeatType_r28.seatType == "vip", eachSeatType_r28.seatType == "bclass", eachSeatType_r28.seatType == "normal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", eachSeatType_r28.seatType, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](eachSeatType_r28.currencyCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", eachSeatType_r28.amount, "");
} }
function ReturnComponent_div_46_div_24_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c3 = function (a0, a1, a2) { return { "width": a0, "height": a1, "line-height": a2, "border": "2px dashed #cacaca", "text-align": "center", "font-size": "18px", "color": "#cacaca", "text-transform": "uppercase" }; };
const _c4 = function (a0) { return { "font-size": a0 }; };
function ReturnComponent_div_46_div_24_div_40_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](3, _c3, eachseat_r29.seat_height, eachseat_r29.seat_width, eachseat_r29.seat_height + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c4, eachseat_r29.seat_width > 50 ? "18px" : "14px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", eachseat_r29.seat_name, "");
} }
function ReturnComponent_div_46_div_24_div_40_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "STF");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ReturnComponent_div_46_div_24_div_40_div_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](eachseat_r29.seat_name);
} }
const _c5 = function (a0, a1) { return { alreadySelectedSeat: a0, alreayBooked: a1 }; };
const _c6 = function (a0, a1) { return { selectedSeat: a0, alreayBooked: a1 }; };
const _c7 = function (a0, a2) { return { "background-color": a0, "border-color": "#000", "border-left": a2 }; };
const _c8 = function (a0, a2) { return { "background-color": a0, "border-color": "#000", "border-bottom": a2 }; };
const _c9 = function (a0, a2) { return { "background-color": a0, "border-color": "#000", "border-top": a2 }; };
function ReturnComponent_div_46_div_24_div_40_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ReturnComponent_div_46_div_24_div_40_div_3_span_2_Template, 2, 0, "span", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ReturnComponent_div_46_div_24_div_40_div_3_span_3_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](9, _c5, eachseat_r29.selectSeat, eachseat_r29.selection_status || eachseat_r29.seat_type.toLowerCase().trim() == "staff" || eachseat_r29.seat_name.toLowerCase().trim() == "staff"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r29.seat_type.toLowerCase().trim() == "staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r29.seat_type.toLowerCase().trim() != "staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](12, _c6, eachseat_r29.selectSeat, eachseat_r29.selection_status || eachseat_r29.seat_type.toLowerCase().trim() == "staff" || eachseat_r29.seat_name.toLowerCase().trim() == "staff"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](15, _c7, eachseat_r29.seat_color, eachseat_r29.seat_color));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](18, _c6, eachseat_r29.selectSeat, eachseat_r29.selection_status || eachseat_r29.seat_type.toLowerCase().trim() == "staff" || eachseat_r29.seat_name.toLowerCase().trim() == "staff"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](21, _c8, eachseat_r29.seat_color, eachseat_r29.seat_color));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](24, _c6, eachseat_r29.selectSeat, eachseat_r29.selection_status || eachseat_r29.seat_type.toLowerCase().trim() == "staff" || eachseat_r29.seat_name.toLowerCase().trim() == "staff"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](27, _c9, eachseat_r29.seat_color, eachseat_r29.seat_color));
} }
const _c10 = function (a1, a2) { return { "position": "absolute", "right": a1, "top": a2 }; };
function ReturnComponent_div_46_div_24_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReturnComponent_div_46_div_24_div_40_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const eachseat_r29 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r38.selectSeat(eachseat_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReturnComponent_div_46_div_24_div_40_div_1_Template, 2, 0, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ReturnComponent_div_46_div_24_div_40_div_2_Template, 4, 9, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ReturnComponent_div_46_div_24_div_40_div_3_Template, 7, 30, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](4, _c10, eachseat_r29.top + "px", eachseat_r29.left + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r29.seat_type.toLowerCase() == "driver");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r29.seat_type.toLowerCase() == "door");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r29.seat_type != "driver" && eachseat_r29.seat_type != "door");
} }
function ReturnComponent_div_46_div_24_mat_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const boarding_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", boarding_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", boarding_r40.name, " ");
} }
function ReturnComponent_div_46_div_24_mat_option_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dropping_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", dropping_r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", dropping_r41.name, " ");
} }
function ReturnComponent_div_46_div_24_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const seat_r42 = ctx.$implicit;
    const last_r43 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", seat_r42.seat_name, " ", last_r43 ? "" : ", ", " ");
} }
function ReturnComponent_div_46_div_24_div_65_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r44.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", data_r44.value.totalSeat, " X ", data_r44.value.ticketFare, " = ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", data_r44.value.currency, " ", data_r44.value.totalTicketFare, "");
} }
function ReturnComponent_div_46_div_24_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReturnComponent_div_46_div_24_div_65_span_1_Template, 8, 5, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, data_r44.value) != "{}");
} }
function ReturnComponent_div_46_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReturnComponent_div_46_div_24_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49); const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r47.getSeats(item_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ReturnComponent_div_46_div_24_div_36_Template, 7, 8, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, ReturnComponent_div_46_div_24_div_40_Template, 4, 7, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "form", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Boarding Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-select", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function ReturnComponent_div_46_div_24_Template_mat_select_selectionChange_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r50.selectBoarding(ctx_r50.boardingForm.get("boarding").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, ReturnComponent_div_46_div_24_mat_option_52_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Dropping Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-select", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function ReturnComponent_div_46_div_24_Template_mat_select_selectionChange_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r51.selectDropping(ctx_r51.boardingForm.get("dropping").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, ReturnComponent_div_46_div_24_mat_option_58_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, ReturnComponent_div_46_div_24_span_64_Template, 2, 2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, ReturnComponent_div_46_div_24_div_65_Template, 3, 3, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](66, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "mat-icon", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](72, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReturnComponent_div_46_div_24_Template_button_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r52.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "CONTINUE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r14.defaultTripPriceList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r17.seatList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r17.boardingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r17.boarding_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r17.dropping_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r17.seats);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](66, 10, ctx_r17.selectedData));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matBadge", ctx_r17.seats.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" FARE: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](72, 12, ctx_r17.total, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r17.seats.length || ctx_r17.boardingForm.invalid);
} }
function ReturnComponent_div_46_p_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", class_r54.seatType, ":");
} }
function ReturnComponent_div_46_p_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", class_r55.currencyCode, " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 2, class_r55.amount, "1.0-0"), "");
} }
function ReturnComponent_div_46_div_63_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachSeatType_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](4, _c2, eachSeatType_r62.seatType == "vip", eachSeatType_r62.seatType == "bclass", eachSeatType_r62.seatType == "normal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", eachSeatType_r62.seatType, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](eachSeatType_r62.currencyCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", eachSeatType_r62.amount, "");
} }
function ReturnComponent_div_46_div_63_div_48_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c11 = function (a0, a1, a2) { return { "width": a0, "height": a1, "line-height": a2, "border": "2px dashed #e8e8e8", "text-align": "center", "font-size": "14px", "color": "#e8e8e8", "text-transform": "capitalize" }; };
function ReturnComponent_div_46_div_63_div_48_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c11, eachseat_r63.seat_width, eachseat_r63.seat_height, eachseat_r63.seat_height + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", eachseat_r63.seat_name, " ");
} }
const _c12 = function (a0, a1, a2) { return { "width": a0, "height": a1, "line-height": a2, "border": "2px dashed #e8e8e8", "text-align": "center", "font-size": "14px", "color": "#e8e8e8" }; };
function ReturnComponent_div_46_div_63_div_48_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c12, eachseat_r63.seat_width, eachseat_r63.seat_height, eachseat_r63.seat_height + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", eachseat_r63.seat_name, " ");
} }
function ReturnComponent_div_46_div_63_div_48_div_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "STF");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ReturnComponent_div_46_div_63_div_48_div_5_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](eachseat_r63.seat_name);
} }
function ReturnComponent_div_46_div_63_div_48_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ReturnComponent_div_46_div_63_div_48_div_5_span_2_Template, 2, 0, "span", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ReturnComponent_div_46_div_63_div_48_div_5_span_3_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](9, _c5, eachseat_r63.selectSeat, eachseat_r63.selection_status || eachseat_r63.seat_type.toLowerCase().trim() == "staff" || eachseat_r63.seat_name.toLowerCase().trim() == "staff"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r63.seat_type.toLowerCase().trim() == "staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r63.seat_type.toLowerCase().trim() != "staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](12, _c6, eachseat_r63.selectSeat, eachseat_r63.selection_status || eachseat_r63.seat_type.toLowerCase().trim() == "staff" || eachseat_r63.seat_name.toLowerCase().trim() == "staff"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](15, _c7, eachseat_r63.seat_color, eachseat_r63.seat_color));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](18, _c6, eachseat_r63.selectSeat, eachseat_r63.selection_status || eachseat_r63.seat_type.toLowerCase().trim() == "staff" || eachseat_r63.seat_name.toLowerCase().trim() == "staff"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](21, _c8, eachseat_r63.seat_color, eachseat_r63.seat_color));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](24, _c6, eachseat_r63.selectSeat, eachseat_r63.selection_status || eachseat_r63.seat_type.toLowerCase().trim() == "staff" || eachseat_r63.seat_name.toLowerCase().trim() == "staff"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](27, _c9, eachseat_r63.seat_color, eachseat_r63.seat_color));
} }
const _c13 = function (a1, a2) { return { "position": "absolute", "top": a1, "left": a2 }; };
function ReturnComponent_div_46_div_63_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReturnComponent_div_46_div_63_div_48_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r75); const eachseat_r63 = ctx.$implicit; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r74.selectSeat(eachseat_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ReturnComponent_div_46_div_63_div_48_div_2_Template, 2, 0, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ReturnComponent_div_46_div_63_div_48_div_3_Template, 3, 6, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ReturnComponent_div_46_div_63_div_48_div_4_Template, 3, 6, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ReturnComponent_div_46_div_63_div_48_div_5_Template, 7, 30, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r63 = ctx.$implicit;
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx_r57.tooltip(eachseat_r63, item_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c13, eachseat_r63.top + "px", eachseat_r63.left + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r63.seat_type.toLowerCase() == "driver");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r63.seat_type.toLowerCase() == "door" || eachseat_r63.seat_type.toLowerCase() == "main-door");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r63.seat_type.toLowerCase() == "fridge" || eachseat_r63.seat_type.toLowerCase() == "toilet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r63.seat_type.toLowerCase() != "driver" && eachseat_r63.seat_type.toLowerCase() != "door" && eachseat_r63.seat_type.toLowerCase() != "toilet" && eachseat_r63.seat_type.toLowerCase() != "fridge" && eachseat_r63.seat_type.toLowerCase() != "main-door");
} }
function ReturnComponent_div_46_div_63_mat_option_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const boarding_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", boarding_r77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", boarding_r77.name, " ");
} }
function ReturnComponent_div_46_div_63_mat_option_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dropping_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", dropping_r78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", dropping_r78.name, " ");
} }
function ReturnComponent_div_46_div_63_span_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const seat_r79 = ctx.$implicit;
    const last_r80 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", seat_r79.seat_name, " ", last_r80 ? "" : ", ", " ");
} }
function ReturnComponent_div_46_div_63_div_76_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r81.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", data_r81.value.totalSeat, " X ", data_r81.value.ticketFare, " = ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", data_r81.value.currency, " ", data_r81.value.totalTicketFare, "");
} }
function ReturnComponent_div_46_div_63_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReturnComponent_div_46_div_63_div_76_span_1_Template, 8, 5, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, data_r81.value) != "{}");
} }
function ReturnComponent_div_46_div_63_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Customise your journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReturnComponent_div_46_div_63_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r84.getSeats(item_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ReturnComponent_div_46_div_63_div_9_Template, 7, 8, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Available Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Selected seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Booked seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, ReturnComponent_div_46_div_63_div_48_Template, 6, 9, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "i", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " Boarding & Dropping ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "form", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Boarding Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "mat-select", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function ReturnComponent_div_46_div_63_Template_mat_select_selectionChange_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r87.selectBoarding(ctx_r87.boardingForm.get("boarding").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, ReturnComponent_div_46_div_63_mat_option_63_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Dropping Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "mat-select", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function ReturnComponent_div_46_div_63_Template_mat_select_selectionChange_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r88.selectDropping(ctx_r88.boardingForm.get("dropping").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, ReturnComponent_div_46_div_63_mat_option_69_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, ReturnComponent_div_46_div_63_span_75_Template, 2, 2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, ReturnComponent_div_46_div_63_div_76_Template, 3, 3, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](77, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "mat-icon", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](83, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReturnComponent_div_46_div_63_Template_button_click_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r89.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "CONTINUE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r14.defaultTripPriceList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r20.seatList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r20.boardingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r20.boarding_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r20.dropping_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r20.seats);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](77, 10, ctx_r20.selectedData));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matBadge", ctx_r20.seats.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" FARE: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](83, 12, ctx_r20.total, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r20.seats.length || ctx_r20.boardingForm.invalid);
} }
function ReturnComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "table", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ReturnComponent_div_46_tr_21_Template, 6, 5, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReturnComponent_div_46_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r92); const item_r14 = ctx.$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r91.getSeats(item_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "view seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ReturnComponent_div_46_div_24_Template, 77, 15, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "RATING");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, ReturnComponent_div_46_p_55_Template, 2, 1, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, ReturnComponent_div_46_p_57_Template, 3, 5, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReturnComponent_div_46_Template_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r92); const item_r14 = ctx.$implicit; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r93.getSeats(item_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "view seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, ReturnComponent_div_46_div_63_Template, 88, 15, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r14.trip_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r14.departure_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r14.defaultTripPriceList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.selectedTripData.bus_id == item_r14.bus_id && ctx_r7.selectedTripData.delayedDate == item_r14.delayedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r14.trip_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r14.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r14.departure_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r14.arrival_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r14.defaultTripPriceList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r14.defaultTripPriceList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r14.available_seat_count, " seats available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.selectedTripData.bus_id == item_r14.bus_id && ctx_r7.selectedTripData.delayedDate == item_r14.delayedDate);
} }
function ReturnComponent_span_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r94 = ctx.$implicit;
    const last_r95 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", eachseat_r94.seat_name, "", last_r95 ? "" : ", ", "");
} }
function ReturnComponent_div_123_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r97 = ctx.$implicit;
    const last_r98 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", eachseat_r97.seat_name, "", last_r98 ? "" : ",", "");
} }
function ReturnComponent_div_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Seat(s):");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ReturnComponent_div_123_span_16_Template, 2, 2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Depart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Arrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Dropping");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r10.reviewInfo.returnticket.source_city, " to ", ctx_r10.reviewInfo.returnticket.dest_city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](12, 11, ctx_r10.reviewInfo.returnticket.booking_date, "dd MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r10.reviewInfo.returnticket.passenger);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.reviewInfo.returnticket.company_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.reviewInfo.returnticket.bus_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.reviewInfo.returnticket.source_city);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.reviewInfo.returnticket.boardingPointname);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.reviewInfo.returnticket.dest_city);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.reviewInfo.returnticket.droppingPointname);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.reviewInfo.returnticket.total);
} }
const _c14 = function () { return { backdrop: "static" }; };
class ReturnComponent {
    constructor(service, activated, formBuilder, returnService, commonService, route, datePipe) {
        this.service = service;
        this.activated = activated;
        this.formBuilder = formBuilder;
        this.returnService = returnService;
        this.commonService = commonService;
        this.route = route;
        this.datePipe = datePipe;
        this.buses = [];
        this.seats = [];
        this.boarding_points = [];
        this.dropping_points = [];
        this.dropping = {};
        this.boarding = {};
        this.params = {};
        this.obj = {};
        this.seatList = [];
        this.total = 0;
        this.cities = [];
        this.bus = {};
        this.selectedTripData = {};
        this.selectedData = {};
        this.reviewInfo = {};
        this.continue = false;
        this.loading = false;
        this.destinations = [];
        this.modify = false;
        this.user = {};
        this.date = new Date();
        this.returnService.reset();
    }
    ngOnInit() {
        this.user = JSON.parse(sessionStorage.getItem('loggedUser'));
        this.searchForm = this.formBuilder.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            sourceCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            city_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            destCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            dest_id: ['',],
        });
        this.commonService.review_info.subscribe((res) => {
            this.reviewInfo = res;
        });
        this.returnService.selectedseatdata.subscribe((res) => {
            this.selectedData = res;
        });
        this.returnService.selected_seats.subscribe((res) => {
            this.seats = res;
        });
        this.returnService.total.subscribe((res) => {
            this.total = res;
        });
        this.returnService.bording_points.subscribe((res) => {
            this.boarding_points = res;
        });
        this.returnService.dropping_points.subscribe((res) => {
            this.dropping_points = res;
        });
        this.returnService.seats.subscribe((res) => {
            this.seatList = res;
        });
        this.returnService.trip_data.subscribe((res) => {
            this.selectedTripData = res;
        });
        this.activated.paramMap.subscribe((res) => {
            this.params.source_city_id = res.get('id2');
            this.params.destination_city_id = res.get('id1');
            this.params.travel_date = res.get('id6');
            this.params.source_city = res.get('id5');
            this.params.dest_city = res.get('id4');
            this.params.return_date = res.get('id6');
            this.returnService.setBookingParams(this.params);
        });
        this.getBuses();
        this.searchForm.patchValue(({ date: new Date(this.params.travel_date), sourceCity: this.params.source_city, destCity: this.params.dest_city, dest_id: this.params.destination_city_id, city_id: this.params.source_city_id }));
        this.return_min = new Date(this.params.travel_date);
        this.return_min.setDate(this.return_min.getDate() + 1);
        this.boardingForm = this.formBuilder.group({
            dropping: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            boarding: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.filteredOptions = this.searchForm.get('sourceCity').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => {
            if (value.id) {
                this.searchForm.patchValue({ "city_id": value.id, "sourceCity": value.city_name });
                this.destination();
            }
            const name = typeof value === 'string' ? value : value === null || value === void 0 ? void 0 : value.city_name;
            return name ? this._filter(name) : this.cities.slice();
        }));
        this.destOptions = this.searchForm.get('destCity').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => {
            if (value.id) {
                this.searchForm.patchValue({ "dest_id": value.id, "destCity": value.city_name });
            }
            const name = typeof value === 'string' ? value : value === null || value === void 0 ? void 0 : value.city_name;
            return name ? this._filterDestinations(name) : this.destinations.slice();
        }));
    }
    _filterDestinations(name) {
        const filterValue = name.toLowerCase();
        return this.destinations.filter(option => option.city_name.toLowerCase().includes(filterValue));
    }
    destination() {
        this.service.getDestinations(this.searchForm.get('city_id').value).subscribe((res) => {
            this.destinations = res.data;
        });
    }
    _filter(name) {
        const filterValue = name.toLowerCase();
        return this.cities.filter(option => option.city_name.toLowerCase().includes(filterValue));
    }
    getBuses() {
        this.loading = false;
        let data = {
            "source_city_id": this.params.source_city_id,
            "destination_city_id": this.params.destination_city_id,
            "travel_date": this.params.return_date,
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
            "currencyId": sessionStorage.getItem('currencyId'),
        };
        this.service.getTrips(data).subscribe((res) => {
            this.buses = res.data;
            this.loading = true;
        });
    }
    getSeats(item) {
        this.bus = item;
        this.returnService.toggleBusDetail(item);
    }
    tooltip(item, bus) {
        if (item.seat_type == 'normal' || item.seat_type == 'bclass' || item.seat_type == 'vip') {
            let obj = bus.defaultTripPriceList.find(ob => ob.seatType == item.seat_type);
            return item.seat_name + '| ' + item.seat_type.charAt(0).toUpperCase() + item.seat_type.slice(1) + '|' + obj.currencyCode + ' ' + obj.amount;
        }
        else {
            return item.seat_name + '| ' + item.seat_type.charAt(0).toUpperCase() + item.seat_type.slice(1);
        }
    }
    selectSeat(item) {
        if (this.reviewInfo.hasOwnProperty('returnticket') && Object.keys(this.reviewInfo.returnticket).length != 0 && this.reviewInfo.returnticket.passenger.length != 0) {
            if (this.reviewInfo.onwardticket.passenger.length < this.reviewInfo.returnticket.passenger.length) {
                alert("You can only select " + this.reviewInfo.onwardticket.passenger.length + "  seats");
            }
            else if (this.reviewInfo.returnticket.passenger.length == this.reviewInfo.onwardticket.passenger.length) {
                alert("You can only select " + this.reviewInfo.onwardticket.passenger.length + "  seats");
            }
            else {
                this.returnService.selectSeat(item);
                this.returnService.saveReturn();
            }
        }
        else {
            this.returnService.selectSeat(item);
            this.returnService.saveReturn();
        }
    }
    selectBoarding(item) {
        this.returnService.changeBoarding(item);
    }
    selectDropping(item) {
        this.returnService.changeDropping(item);
    }
    save() {
        this.returnService.setBoadingDropping();
        if (this.reviewInfo.returnticket.passenger.length != this.reviewInfo.onwardticket.passenger.length) {
            alert("Please  select " + this.reviewInfo.onwardticket.passenger.length + "  seats");
        }
        else {
            this.continueBooking();
        }
    }
    continueBooking() {
        // this.reviewModal.hide();
        // if(this.user !=undefined){
        //   this.route.navigateByUrl('/passengers')
        // }else{
        //   this.commonService.loginModal.next(true);
        //   this.checkLoginEvent();
        if (this.user != undefined) {
            this.route.navigateByUrl('/trip-review');
        }
        else {
            // this.commonService.loginModal.next(true);
            // this.checkLoginEvent();
            this.loginModal.show();
        }
    }
    onSubmit() {
        let date = this.searchForm.get('returnDate').value;
        this.params.return_date = this.datePipe.transform(date, 'yyyy-MM-dd');
        let data = this.params;
        this.route.navigate(['buslist', data.destination_city_id, data.source_city_id, this.datePipe.transform(data.travel_date, 'yyyy-MM-dd'), data.dest_city, data.source_city, this.datePipe.transform(date, 'yyyy-MM-dd')]);
        // this.ngOnInit();
    }
    checkLoginEvent() {
        this.commonService.auth.subscribe((res) => {
            if (res) {
                this.route.navigateByUrl('/trip-review');
            }
        });
    }
    onActivity($event) {
        this.loginModal.hide();
        if ($event == 'guest') {
            this.route.navigateByUrl('/trip-review');
        }
        else {
            this.route.navigateByUrl('/trip-review');
        }
    }
}
ReturnComponent.ɵfac = function ReturnComponent_Factory(t) { return new (t || ReturnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_return_service__WEBPACK_IMPORTED_MODULE_6__["ReturnService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"])); };
ReturnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ReturnComponent, selectors: [["app-return"]], viewQuery: function ReturnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.reviewModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.loginModal = _t.first);
    } }, inputs: { modify: "modify" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])], decls: 149, vars: 37, consts: [[1, "results-section", "container", 2, "margin-top", "-40px", "padding-top", "4em", "padding-bottom", "0 !important"], [1, "section-body"], [1, "text-center"], [1, "card", "custom-card"], [1, "card-header", 2, "font-weight", "800"], [1, "fa-solid", "fa-chevron-right"], [1, "pull-right"], [1, "fas", "fa-calendar-day", "mx-2", "text-success"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-4"], ["appearance", "outline"], ["matInput", "", "formControlName", "sourceCity", "placeholder", "From", 3, "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "destCity", "placeholder", "Destination", 3, "matAutocomplete"], ["dest", "matAutocomplete"], ["matInput", "", "formControlName", "date", "placeholder", "Date", 3, "min", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], [1, "col-md-12", 2, "text-align", "right"], ["type", "submit", 1, "btn", "btn-custom"], [4, "ngIf"], ["class", "mt-2", 4, "ngIf"], ["class", "", 4, "ngFor", "ngForOf"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-static-name", 1, "modal", "fade", 3, "config"], ["reviewModal", "bs-modal"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-static-name", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], ["ng-if", "reviewInfo.onwardticket", 1, "row", 2, "padding-bottom", "5px"], [1, "row", 2, "font-size", "15px", "font-weight", "600", "margin-bottom", "10px"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-12", "padding-0"], [1, "crossBorderSpan", 2, "background-color", "#cbffcb"], [2, "font-size", "18px"], [1, "ng-binding"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-12", 2, "text-align", "right"], [2, "padding-right", "5px"], [4, "ngFor", "ngForOf"], [1, "row", "disableBorder", 2, "display", "flex", "flex-wrap", "wrap"], [1, "col-lg-2", "col-md-2", "col-sm-4", "col-xs-4", "padding-left-0", "sameHeightColumn", 2, "text-align", "center"], ["src", "assets/img/bus.svg", "alt", "bus", 2, "width", "65px", "opacity", "0.4"], [1, "col-lg-3", "col-md-3", "col-sm-6", "col-xs-6", "padding-left-0", "sameHeightColumn"], [1, "reviewPadding"], [1, "hidden-xs", 2, "font-size", "15px"], [1, "ng-binding", 2, "font-size", "15px"], [2, "font-size", "15px"], [1, "col-lg-2", "col-md-2", "col-sm-4", "col-xs-6", "row", "sameHeightColumn", 2, "padding-right", "0"], [1, "col-lg-3", "col-md-3", "col-sm-6", "col-xs-7", "sameHeightColumn"], [1, "row", 2, "padding", "5px 0"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4", "padding-0", 2, "font-size", "16px"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-8", 2, "text-align", "right", "font-size", "16px", "padding-left", "0"], ["class", "row", "style", "margin-top:10px", 4, "ngIf"], [1, "row", "reviewPayable"], [1, "col-lg-6", "col-md-6", "col-xs-6", "col-sm-6"], [1, "col-lg-6", "col-md-6", "col-xs-6", "col-sm-6", "ng-binding", 2, "text-align", "right"], [1, "ng-binding", 2, "padding-left", "5px"], [1, "row", 2, "text-align", "right"], [1, "col-lg-12", "col-md-12", "col-xs-12", "col-sm-12"], [1, "btn", "view-seats", 2, "margin-right", "0px !important", "float", "right", 3, "click"], ["loginModal", "bs-modal"], [1, "modal-dialog", "modal-md"], [1, "modal-body", "mb-2"], [3, "action"], [3, "value"], ["src", "assets/img/no_bus.png", "alt", "No Bus"], [2, "font-size", "20px", "font-weight", "400"], [2, "font-size", "15px", "font-weight", "800", "color", "#e20613"], [1, "mt-2"], [1, "col-sm-8"], [2, "font-weight", "600", "color", "#0F70B7"], [1, ""], [1, "row", "align-items-start", "py-2", "container-fluid", "px-0", "px-md-3", "result-row"], [1, "col-4", "d-block", "d-md-none"], ["src", "https://cdn-icons-png.flaticon.com/512/1819/1819543.png", "alt", "bus icon", "height", "40", "width", "40"], [1, "mb-0", "fw-bold", "small"], [1, "col-3", "d-block", "d-md-none"], [1, "mb-0", 2, "font-size", "13px !important"], [1, "far", "fa-star", "fa-xs"], ["title", "a/c available", 1, "fas", "fa-fan", "fa-xs"], ["title", "free wifi", 1, "fas", "fa-wifi", "fa-xs"], ["title", "charging point", 1, "fas", "fa-bolt", "fa-xs"], [1, "col-5", "d-block", "d-md-none"], [1, "table", "table-sm", "table-borderless", "mb-0"], [1, "btn", "btn-sm", "view-seats", "float-end", 3, "click"], ["class", "col-sm-12 pb-2 d-block d-md-none", "style", "margin-top: 15px;background-color:#f8f3c1;border-radius:5px", 4, "ngIf"], [1, "row", "align-items-start", "border-bottom", "py-2", "py-md-3", "container-fluid", "px-0", "px-md-3", "result-row"], [1, "col-1", "d-none", "d-md-block"], ["src", "https://cdn-icons-png.flaticon.com/512/1819/1819543.png", "alt", "bus icon", "height", "50", "width", "50"], [1, "col-3", "d-none", "d-md-block"], [1, "mb-0", "fw-bold"], [1, "d-flex", "gap-3", "mt-2"], ["title", "a/c available", 1, "fas", "fa-fan"], ["title", "free wifi", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "data-bs-title", "free wifi", 1, "fas", "fa-wifi"], ["title", "charging point", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "data-bs-title", "charging point", 1, "fas", "fa-bolt"], [1, "text-center", "col-2", "d-none", "d-md-flex", "align-items-center"], ["src", "https://cdn-icons-png.flaticon.com/512/581/581838.png", "alt", "", "height", "40"], [1, "fw-bold"], [1, "mb-0"], [1, "col-2", "d-none", "d-md-block"], [1, "d-flex"], [1, "fa-solid", "fa-star", "star"], [1, "col-4", "d-none", "d-md-flex", "justify-content-between"], [1, "text-end"], ["class", "mb-0", "style", "text-transform: capitalize;", 4, "ngFor", "ngForOf"], ["class", "mb-0", 4, "ngFor", "ngForOf"], [1, "mb-1", "primary"], [1, "btn", "btn-sm", "view-seats", 3, "click"], ["class", "col-sm-12 pb-2 d-none d-md-block", "style", "margin-top: 15px;background-color:#f8f3c1;border-radius:5px", 4, "ngIf"], [1, "small", 2, "text-transform", "capitalize"], [1, "small", "fw-bold"], [1, "col-sm-12", "pb-2", "d-block", "d-md-none", 2, "margin-top", "15px", "background-color", "#f8f3c1", "border-radius", "5px"], [1, "row", "pt-2"], [1, "col-sm-12", "ustify-content-right"], [1, "fa-regular", "fa-circle-xmark", "text-danger", 2, "float", "right", "font-size", "24px", 3, "click"], [1, "col-sm-12"], [1, "d-flex", "gap-2", "justify-content-center"], [1, "col-md-4", "col-lg-4", "col-sm-4", "col-xs-4", 2, "position", "relative", "text-align", "left"], [2, "position", "relative", "width", "31px", "height", "24px"], [1, "static-seat-mob"], [1, "static-right-mob"], [1, "static-top-mob"], [1, "static-bottom-mob"], [2, "padding-top", "5px"], [1, "col-md-4", "col-lg-4", "col-sm-4", "col-xs-4", "padding-right-none", 2, "position", "relative", "text-align", "left"], [1, "static-seat-mob", 2, "background-color", "#9a2718"], [1, "static-right-mob", 2, "background-color", "#9a2718"], [1, "static-top-mob", 2, "background-color", "#9a2718"], [1, "static-bottom-mob", 2, "background-color", "#9a2718"], [1, "static-seat-mob", 2, "background-color", "#ada9a9"], [1, "static-right-mob", 2, "background-color", "#ada9a9"], [1, "static-top-mob", 2, "background-color", "#ada9a9"], [1, "static-bottom-mob", 2, "background-color", "#ada9a9"], ["class", "col-sm-12", "style", "font-size: 1px;", 4, "ngFor", "ngForOf"], [1, "hidden-xs", "mobileSeatLayout"], [3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "col-sm-4"], [1, "card"], [3, "formGroup"], ["formControlName", "boarding", 3, "selectionChange"], ["formControlName", "dropping", 3, "selectionChange"], ["class", "col-sm-12", 4, "ngFor", "ngForOf"], [1, "card-footer", 2, "background-color", "black", "color", "white", "font-weight", "600", "font-size", "13px"], [3, "matBadge"], [2, "float", "right", "font-size", "12px"], [1, "btn", "search-seats", 2, "margin-right", "5px", "float", "right", 3, "disabled", "click"], [1, "col-sm-12", 2, "font-size", "1px"], [1, "fa-solid", "fa-circle", 3, "ngClass"], [2, "text-transform", "capitalize", "margin-left", "5px"], [2, "font-weight", "700"], [3, "ngStyle", "click"], ["class", "default-cursor", 4, "ngIf"], ["style", "position: relative;width:37px;height:37px;cursor:pointer", 4, "ngIf"], [1, "default-cursor"], ["src", "assets/img/driver.png", "alt", "Driver", 1, "driver"], [3, "ngStyle"], [1, "word-break", 3, "ngStyle"], [2, "position", "relative", "width", "37px", "height", "37px", "cursor", "pointer"], [1, "chair-seat-mob", 2, "text-align", "center", 3, "ngClass"], ["style", "padding-right: 10px;", 4, "ngIf"], [1, "chair-right-mob", 3, "ngClass", "ngStyle"], [1, "chair-left-mob", 3, "ngClass", "ngStyle"], [1, "chair-bottom-mob", 3, "ngClass", "ngStyle"], [2, "padding-right", "10px"], [2, "text-transform", "capitalize"], [2, "float", "right"], [2, "font-weight", "600"], [1, "mb-0", 2, "text-transform", "capitalize"], [1, "col-sm-12", "pb-2", "d-none", "d-md-block", 2, "margin-top", "15px", "background-color", "#f8f3c1", "border-radius", "5px"], [1, "row", "pt-1"], [2, "font-size", "14px", "font-weight", "700", "text-transform", "capitalize"], [1, "row", "pt-3"], [1, "col-md-6", "col-xs-6", "col-sm-6", "col-lg-6", "padding-0", "fs-13", "pt-12"], ["class", "col-md-4 padding-0", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-xs-6", "col-sm-6", "col-lg-6", "padding-0", "text-center"], [1, "col-md-4", "row", "padding-right-none", 2, "position", "relative"], [1, "col-lg-4", "col-md-4"], [2, "position", "absolute", "top", "0", "left", "32px"], [1, "chair-seat", 2, "text-align", "center", "background-color", "#fff", "width", "26px", "height", "27px"], [1, "chair-right", 2, "background-color", "#fff", "height", "29px", "width", "7px", "left", "24px", "top", "-1px"], [1, "chair-top", 2, "background-color", "#fff", "height", "7px", "left", "10px", "width", "15px", "top", "-1px"], [1, "chair-bottom", 2, "background-color", "#fff", "top", "21px", "height", "7px", "left", "10px", "width", "15px"], [1, "col-lg-8", "col-md-8", "padding-0", 2, "line-height", "39px"], [1, "chair-seat", 2, "text-align", "center", "background-color", "#9a2718", "width", "26px", "height", "27px", "color", "#fff"], [1, "chair-right", 2, "background-color", "#9a2718", "height", "29px", "width", "7px", "left", "24px", "top", "-1px"], [1, "chair-top", 2, "background-color", "#9a2718", "height", "7px", "left", "10px", "width", "15px", "top", "-1px"], [1, "chair-bottom", 2, "background-color", "#9a2718", "top", "21px", "height", "7px", "left", "10px", "width", "15px"], [2, "position", "absolute", "top", "0", "left", "38px"], [1, "chair-seat", 2, "text-align", "center", "background-color", "#ada9a9", "width", "26px", "height", "27px"], [1, "chair-right", 2, "background-color", "#ada9a9", "height", "29px", "width", "7px", "left", "24px", "top", "-1px"], [1, "chair-top", 2, "background-color", "#ada9a9", "height", "7px", "left", "10px", "width", "15px", "top", "-1px"], [1, "chair-bottom", 2, "background-color", "#ada9a9", "top", "21px", "height", "7px", "left", "10px", "width", "15px"], [1, "hidden-xs", "seatLayout"], ["data-toggle", "tooltip", "data-placement", "bottom", 3, "ngStyle", "title", "click", 4, "ngFor", "ngForOf"], [1, "card-header", "bg-success", "text-white"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], [1, "col-md-4", "padding-0"], ["data-toggle", "tooltip", "data-placement", "bottom", 3, "ngStyle", "title", "click"], [2, "position", "relative", "width", "50px", "height", "45px"], ["style", "position: relative;width:50px;height:45px;", 4, "ngIf"], [1, "chair-seat", 2, "text-align", "center", "padding-right", "8px", "padding-top", "5px", 3, "ngClass"], [1, "chair-right", 3, "ngClass", "ngStyle"], [1, "chair-top", 3, "ngClass", "ngStyle"], [1, "chair-bottom", 3, "ngClass", "ngStyle"], [1, "row", 2, "margin-top", "10px"], [1, "crossBorderSpan", 2, "background-color", "#ffe7fe"], [1, "row", 2, "margin-top", "10px", "padding-bottom", "5px", "display", "flex", "flex-wrap", "wrap"], [1, "col-lg-3", "col-md-3", "col-sm-6", "col-xs-6", "sameHeightColumn", "padding-left-0"], [1, "col-lg-2", "col-md-2", "col-sm-4", "col-xs-4", "sameHeightColumn", 2, "padding-right", "0"], [1, "col-lg-2", "col-md-2", "col-sm-4", "col-xs-3", "sameHeightColumn", 2, "padding-right", "0"]], template: function ReturnComponent_Template(rf, ctx) { if (rf & 1) {
        const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ReturnComponent_Template_form_ngSubmit_13_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-autocomplete", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ReturnComponent_mat_option_22_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-autocomplete", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ReturnComponent_mat_option_31_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "mat-datepicker-toggle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "mat-datepicker", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Modify Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, ReturnComponent_div_44_Template, 12, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, ReturnComponent_div_45_Template, 5, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, ReturnComponent_div_46_Template, 64, 12, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Trip Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReturnComponent_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r99); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](48); return _r8.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Onward");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Seat(s):");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](72, ReturnComponent_span_72_Template, 2, 2, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Bus");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Depart");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Boarding");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Arrive");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Dropping");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Total: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](123, ReturnComponent_div_123_Template, 67, 14, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Grand Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](130, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReturnComponent_Template_button_click_133_listener() { return ctx.continueBooking(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "CONTINUE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](135, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 26, 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "Join Kidia One Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReturnComponent_Template_button_click_143_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r99); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](137); return _r11.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "app-register", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("action", function ReturnComponent_Template_app_register_action_147_listener($event) { return ctx.onActivity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](148, "app-footer");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](30);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.params.source_city, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.params.dest_city, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.params.travel_date, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 29, ctx.filteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 31, ctx.destOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", ctx.date)("matDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.buses.length && ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.buses.length && ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.buses);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](35, _c14));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" | ", ctx.reviewInfo.onwardticket == null ? null : ctx.reviewInfo.onwardticket.source_city, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.reviewInfo.onwardticket == null ? null : ctx.reviewInfo.onwardticket.dest_city, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.reviewInfo == null ? null : ctx.reviewInfo.onwardticket == null ? null : ctx.reviewInfo.onwardticket.booking_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.reviewInfo == null ? null : ctx.reviewInfo.onwardticket == null ? null : ctx.reviewInfo.onwardticket.passenger);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.reviewInfo == null ? null : ctx.reviewInfo.onwardticket == null ? null : ctx.reviewInfo.onwardticket.company_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.reviewInfo == null ? null : ctx.reviewInfo.onwardticket == null ? null : ctx.reviewInfo.onwardticket.bus_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.reviewInfo == null ? null : ctx.reviewInfo.onwardticket == null ? null : ctx.reviewInfo.onwardticket.source_city);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.reviewInfo == null ? null : ctx.reviewInfo.onwardticket == null ? null : ctx.reviewInfo.onwardticket.boardingPointname);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.reviewInfo == null ? null : ctx.reviewInfo.onwardticket == null ? null : ctx.reviewInfo.onwardticket.dest_city);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.reviewInfo == null ? null : ctx.reviewInfo.onwardticket == null ? null : ctx.reviewInfo.onwardticket.droppingPointname);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.reviewInfo == null ? null : ctx.reviewInfo.onwardticket == null ? null : ctx.reviewInfo.onwardticket.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reviewInfo.returnticket);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](130, 33, ctx.reviewInfo == null ? null : ctx.reviewInfo.totalTicketPrice));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](36, _c14));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalDirective"], _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadge"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".hero-section[_ngcontent-%COMP%] {\n  min-height: 0px;\n}\n\n.departure[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #1f1309;\n  margin-bottom: 15px;\n}\n\n.view-seats[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid #e61773;\n  font-size: 13px;\n  padding: 6px 10px;\n  text-transform: capitalize;\n  color: black;\n  margin-top: 5px;\n  font-weight: 700;\n  background-color: #e61773;\n}\n\n.search-seats[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid black;\n  font-size: 13px;\n  padding: 6px 10px;\n  text-transform: capitalize;\n  color: white;\n  margin-top: 5px;\n  font-weight: 700;\n  background-color: black;\n  border-radius: 20px;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.primary[_ngcontent-%COMP%] {\n  color: black !important;\n  font-weight: 600;\n}\n\n.star[_ngcontent-%COMP%] {\n  color: #e20613 !important;\n}\n\ndiv[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n\n  .mat-tab-label {\n  padding: 0px !important;\n  justify-content: left !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix {\n  padding: 0.6em 0px !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix > span.mat-form-field-label-wrapper {\n  top: -1.3em !important;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75) !important;\n  width: 133.33333% !important;\n}\n\n.mat-badge-content[_ngcontent-%COMP%] {\n  background: red !important;\n  color: blue !important;\n}\n\n.identifiedType[_ngcontent-%COMP%] {\n  padding: 0px 8px;\n  border-radius: 50px;\n  margin-right: 5px;\n}\n\n.orange-color[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.green-color[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.blue-color[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n  .mat-form-field-wrapper {\n  margin-bottom: -0.65em !important;\n  margin-top: -0.15em !important;\n}\n\n.mobileSeatLayout[_ngcontent-%COMP%] {\n  height: 700px;\n  margin: 0 auto;\n  position: relative;\n  background-color: #fff;\n  box-shadow: 0 1px 8px #ccc;\n  cursor: pointer;\n  width: 300px;\n}\n\n.chair-seat-mob[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin: 0px 3px;\n  width: 30px;\n  height: 25px;\n  border-width: 2px;\n  border-color: #aaa;\n  border-top-left-radius: 5px;\n  align-items: center;\n  justify-content: center;\n  border-top-right-radius: 5px;\n  border-style: solid;\n  border-bottom: solid 1px black !important;\n}\n\n.chair-bottom-mob[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5px;\n  left: 1px;\n  right: 0;\n  width: 34px;\n  height: 7px;\n  border-width: 2px;\n  border-style: solid;\n  border-left-width: 3px !important;\n  border-left-style: solid !important;\n  border: solid 1px !important;\n  z-index: 1;\n  border-top: 0 !important;\n}\n\n.chair-left-mob[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 1px;\n  width: 8px;\n  height: 18px;\n  border-width: 2px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  top: 11px;\n  border-style: solid;\n  border-right: 0;\n  border-top-width: 3px !important;\n  border-top-style: solid !important;\n  border: solid 1px !important;\n}\n\n.chair-right-mob[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2px;\n  width: 8px;\n  height: 18px;\n  border-width: 2px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  top: 11px;\n  border-bottom-width: 8px !important;\n  border-bottom-style: solid !important;\n  border: solid 1px !important;\n}\n\n.static-top-mob[_ngcontent-%COMP%] {\n  background-color: #fff;\n  height: 21px;\n  left: 0px;\n  width: 7px;\n  top: 9px;\n  position: absolute;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-width: 8px !important;\n  border-bottom-style: solid !important;\n  border: solid 1px !important;\n}\n\n.static-bottom-mob[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-top: solid 1px !important;\n  top: 23px;\n  width: 31px;\n  left: 0;\n  position: absolute;\n  bottom: 9px;\n  right: 0;\n  height: 7px;\n  border-width: 2px;\n  border-style: solid;\n  border-left-width: 3px !important;\n  border-left-style: solid !important;\n  border: solid 1px !important;\n  z-index: 1;\n}\n\n.static-right-mob[_ngcontent-%COMP%] {\n  background-color: #fff;\n  height: 21px;\n  left: 24px;\n  border: solid 1px !important;\n  position: absolute;\n  right: 6px;\n  width: 7px;\n  border-width: 2px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  top: 9px;\n  border-bottom-style: solid !important;\n}\n\n.static-seat-mob[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin: 0px 3px;\n  width: 26px;\n  height: 27px;\n  border-width: 2px;\n  border-color: #aaa;\n  border-top-left-radius: 5px;\n  align-items: center;\n  justify-content: center;\n  border-top-right-radius: 5px;\n  border-style: solid;\n  border-bottom: solid 1px black !important;\n  text-align: center;\n  padding-top: 3px;\n}\n\n.selectedSeat[_ngcontent-%COMP%] {\n  background-color: #990000 !important;\n}\n\n.alreadySelectedSeat[_ngcontent-%COMP%] {\n  background-color: #990000 !important;\n  color: #fff;\n  border-color: #990000;\n}\n\n.alreayBooked[_ngcontent-%COMP%] {\n  background-color: #ada9a9 !important;\n  pointer-events: none;\n  border-color: #888888;\n}\n\n.hd[_ngcontent-%COMP%] {\n  padding: 0 0 0;\n  margin-top: 0;\n}\n\n.onward-return-tab[_ngcontent-%COMP%] {\n  background-color: #F0E68C;\n  color: black;\n}\n\n.enable[_ngcontent-%COMP%] {\n  background-color: #FDDA0D;\n}\n\n.disable[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JldHVybi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFDQTtFQUNDLHlCQUFBO0FBRUQ7O0FBQUE7RUFDSSwwQkFBQTtBQUdKOztBQUNBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQUVBOztBQUVBO0VBQStKLDZCQUFBO0FBRS9KOztBQURBO0VBQWtNLHNCQUFBO0FBS2xNOztBQUhBO0VBQ0Esb0RBQUE7RUFDQSw0QkFBQTtBQU1BOztBQUhBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQU1BOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBS0o7O0FBRkE7RUFDSSxhQUFBO0FBS0o7O0FBSEE7RUFDSSxZQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxpQ0FBQTtFQUNBLDhCQUFBO0FBUUo7O0FBSkM7RUFDRyxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBT0o7O0FBRkM7RUFDRyxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0FBT0o7O0FBTEE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7QUFRSjs7QUFOQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtBQVNKOztBQVBBO0VBQ0ksc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUFVSjs7QUFSQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxRQUFBO0VBQ0EscUNBQUE7QUFXSjs7QUFUQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFZSjs7QUFUQTtFQUNJLG9DQUFBO0FBWUo7O0FBVkE7RUFDSSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQWFKOztBQVhBO0VBQ0ksb0NBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBY0o7O0FBVEE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQVlKOztBQVRBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBWUo7O0FBVkE7RUFDSSx5QkFBQTtBQWFKOztBQVhBO0VBQ0ksb0JBQUE7QUFjSiIsImZpbGUiOiJyZXR1cm4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVyby1zZWN0aW9uIHtcbiAgICBtaW4taGVpZ2h0OiAwcHg7XG59XG5cbi5kZXBhcnR1cmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgY29sb3I6ICMxZjEzMDk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnZpZXctc2VhdHMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjMwLDIzLDExNSk7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsMjMsMTE1KTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLnNlYXJjaC1zZWF0cyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ucHJpbWFyeSB7XG4gICAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5cbi5zdGFye1xuIGNvbG9yOiNlMjA2MTMgIWltcG9ydGFudDtcbn1cbmRpdntcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWwge1xucGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG5qdXN0aWZ5LWNvbnRlbnQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuXG46Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lID4gZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgPiBkaXYubWF0LWZvcm0tZmllbGQtZmxleCA+IGRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeCAgeyBwYWRkaW5nOiAwLjZlbSAwcHggIWltcG9ydGFudCB9XG46Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lID4gZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgPiBkaXYubWF0LWZvcm0tZmllbGQtZmxleCA+IGRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeCA+IHNwYW4ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7IHRvcDogLTEuM2VtICFpbXBvcnRhbnQgfVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpICFpbXBvcnRhbnQ7XG53aWR0aDogMTMzLjMzMzMzJSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWJhZGdlLWNvbnRlbnQge1xuYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XG5jb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xufVxuXG5cbi5pZGVudGlmaWVkVHlwZXtcbiAgICBwYWRkaW5nOiAwcHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5vcmFuZ2UtY29sb3J7XG4gICAgY29sb3I6IG9yYW5nZVxufVxuLmdyZWVuLWNvbG9ye1xuICAgIGNvbG9yOiBncmVlblxufVxuLmJsdWUtY29sb3J7XG4gICAgY29sb3I6IGJsdWVcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcbiAgICBtYXJnaW4tYm90dG9tOiAtMC42NWVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogLTAuMTVlbSAhaW1wb3J0YW50O1xuIH1cblxuXG4gLm1vYmlsZVNlYXRMYXlvdXQge1xuICAgIGhlaWdodDogNzAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4ICNjY2M7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICAvLyBtYXJnaW46IDAgYXV0bztcbn1cblxuXG4gLmNoYWlyLXNlYXQtbW9iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMHB4IDNweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjYWFhO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2sgIWltcG9ydGFudDtcbn1cbi5jaGFpci1ib3R0b20tbW9iIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgbGVmdDogMXB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAzNHB4O1xuICAgIGhlaWdodDogN3B4O1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDNweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItdG9wOiAwICFpbXBvcnRhbnQ7XG59XG4uY2hhaXItbGVmdC1tb2Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMXB4O1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIHRvcDogMTFweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAzcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICFpbXBvcnRhbnQ7XG59XG4uY2hhaXItcmlnaHQtbW9iIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDJweDtcbiAgICB3aWR0aDogOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICB0b3A6IDExcHg7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogOHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAhaW1wb3J0YW50O1xufVxuLnN0YXRpYy10b3AtbW9ie1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogN3B4O1xuICAgIHRvcDogOXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiA4cHggIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICFpbXBvcnRhbnQ7XG59XG4uc3RhdGljLWJvdHRvbS1tb2J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggIWltcG9ydGFudDtcbiAgICB0b3A6IDIzcHg7XG4gICAgd2lkdGg6IDMxcHg7XG4gICAgbGVmdDogMDsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogOXB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogN3B4O1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDNweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMTtcbn1cbi5zdGF0aWMtcmlnaHQtbW9ie1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIGxlZnQ6IDI0cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDZweDtcbiAgICB3aWR0aDogN3B4O1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIHRvcDogOXB4O1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG59XG4uc3RhdGljLXNlYXQtbW9ie1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAwcHggM3B4O1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGhlaWdodDogMjdweDtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItY29sb3I6ICNhYWE7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjayAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xufVxuXG4uc2VsZWN0ZWRTZWF0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTAwMDAgIWltcG9ydGFudDtcbn1cbi5hbHJlYWR5U2VsZWN0ZWRTZWF0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTAwMDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjojZmZmO1xuICAgIGJvcmRlci1jb2xvcjogIzk5MDAwMDtcbn1cbi5hbHJlYXlCb29rZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FkYTlhOSAhaW1wb3J0YW50O1xuICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjODg4ODg4O1xufVxuXG5cblxuLmhkIHtcbiAgICBwYWRkaW5nOiAwIDAgMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ub253YXJkLXJldHVybi10YWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6I0YwRTY4QztcbiAgICBjb2xvcjpibGFjaztcbn1cbi5lbmFibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6I0ZEREEwRDtcbn1cbi5kaXNhYmxle1xuICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XG4gIH0iXX0= */"] });


/***/ }),

/***/ "IG16":
/*!****************************************************!*\
  !*** ./src/app/views/buslist/buslist.component.ts ***!
  \****************************************************/
/*! exports provided: BuslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuslistComponent", function() { return BuslistComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_booking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/booking.service */ "p7Zy");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "OlR4");
/* harmony import */ var src_app_services_return_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/return.service */ "j0re");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../register/register.component */ "4XPS");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");























const _c0 = ["reviewModal"];
const _c1 = ["loginModal"];
function BuslistComponent_mat_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r14.city_name, " ");
} }
function BuslistComponent_mat_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r15.city_name, " ");
} }
function BuslistComponent_form_67_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function BuslistComponent_form_67_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.onReturnSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Return Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "mat-datepicker-toggle", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "mat-datepicker", null, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r6.returnForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", ctx_r6.return_min)("matDatepicker", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r16);
} }
function BuslistComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Sorry, we can not find any seat available on the date you have requested on route ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " .");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Please try another date combination. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.params.source_city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.params.dest_city, " ");
} }
function BuslistComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Outbound Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function BuslistComponent_div_70_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", class_r26.seatType, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 2, class_r26.amount, "1.0-0"), " ");
} }
const _c2 = function (a0, a1, a2) { return { "orange-color": a0, "green-color": a1, "blue-color": a2 }; };
function BuslistComponent_div_70_div_24_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachSeatType_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](4, _c2, eachSeatType_r33.seatType == "vip", eachSeatType_r33.seatType == "bclass", eachSeatType_r33.seatType == "normal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", eachSeatType_r33.seatType, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](eachSeatType_r33.currencyCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", eachSeatType_r33.amount, "");
} }
function BuslistComponent_div_70_div_24_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c3 = function (a0, a1, a2) { return { "width": a0, "height": a1, "line-height": a2, "border": "2px dashed #cacaca", "text-align": "center", "font-size": "18px", "color": "#cacaca", "text-transform": "uppercase" }; };
const _c4 = function (a0) { return { "font-size": a0 }; };
function BuslistComponent_div_70_div_24_div_40_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](3, _c3, eachseat_r34.seat_height, eachseat_r34.seat_width, eachseat_r34.seat_height + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c4, eachseat_r34.seat_width > 50 ? "18px" : "14px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", eachseat_r34.seat_name, "");
} }
function BuslistComponent_div_70_div_24_div_40_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "STF");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function BuslistComponent_div_70_div_24_div_40_div_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](eachseat_r34.seat_name);
} }
const _c5 = function (a0, a1) { return { alreadySelectedSeat: a0, alreayBooked: a1 }; };
const _c6 = function (a0, a1) { return { selectedSeat: a0, alreayBooked: a1 }; };
const _c7 = function (a0, a2) { return { "background-color": a0, "border-color": "#000", "border-left": a2 }; };
const _c8 = function (a0, a2) { return { "background-color": a0, "border-color": "#000", "border-bottom": a2 }; };
const _c9 = function (a0, a2) { return { "background-color": a0, "border-color": "#000", "border-top": a2 }; };
function BuslistComponent_div_70_div_24_div_40_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BuslistComponent_div_70_div_24_div_40_div_3_span_2_Template, 2, 0, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BuslistComponent_div_70_div_24_div_40_div_3_span_3_Template, 2, 1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](9, _c5, eachseat_r34.selectSeat, eachseat_r34.selection_status || eachseat_r34.seat_type.toLowerCase().trim() == "staff" || eachseat_r34.seat_name.toLowerCase().trim() == "staff"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r34.seat_type.toLowerCase().trim() == "staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r34.seat_type.toLowerCase().trim() != "staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](12, _c6, eachseat_r34.selectSeat, eachseat_r34.selection_status || eachseat_r34.seat_type.toLowerCase().trim() == "staff" || eachseat_r34.seat_name.toLowerCase().trim() == "staff"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](15, _c7, eachseat_r34.seat_color, eachseat_r34.seat_color));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](18, _c6, eachseat_r34.selectSeat, eachseat_r34.selection_status || eachseat_r34.seat_type.toLowerCase().trim() == "staff" || eachseat_r34.seat_name.toLowerCase().trim() == "staff"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](21, _c8, eachseat_r34.seat_color, eachseat_r34.seat_color));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](24, _c6, eachseat_r34.selectSeat, eachseat_r34.selection_status || eachseat_r34.seat_type.toLowerCase().trim() == "staff" || eachseat_r34.seat_name.toLowerCase().trim() == "staff"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](27, _c9, eachseat_r34.seat_color, eachseat_r34.seat_color));
} }
const _c10 = function (a1, a2) { return { "position": "absolute", "right": a1, "top": a2 }; };
function BuslistComponent_div_70_div_24_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuslistComponent_div_70_div_24_div_40_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44); const eachseat_r34 = ctx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r43.selectSeat(eachseat_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BuslistComponent_div_70_div_24_div_40_div_1_Template, 2, 0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BuslistComponent_div_70_div_24_div_40_div_2_Template, 4, 9, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BuslistComponent_div_70_div_24_div_40_div_3_Template, 7, 30, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](4, _c10, eachseat_r34.top + "px", eachseat_r34.left + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r34.seat_type.toLowerCase() == "driver");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r34.seat_type.toLowerCase() == "door");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r34.seat_type != "driver" && eachseat_r34.seat_type != "door");
} }
function BuslistComponent_div_70_div_24_mat_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const boarding_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", boarding_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", boarding_r45.name, " ");
} }
function BuslistComponent_div_70_div_24_mat_option_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dropping_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", dropping_r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", dropping_r46.name, " ");
} }
function BuslistComponent_div_70_div_24_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const seat_r47 = ctx.$implicit;
    const last_r48 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", seat_r47.seat_name, " ", last_r48 ? "" : ", ", " ");
} }
function BuslistComponent_div_70_div_24_div_65_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r49.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", data_r49.value.totalSeat, " X ", data_r49.value.ticketFare, " = ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", data_r49.value.currency, " ", data_r49.value.totalTicketFare, "");
} }
function BuslistComponent_div_70_div_24_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BuslistComponent_div_70_div_24_div_65_span_1_Template, 8, 5, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, data_r49.value) != "{}");
} }
function BuslistComponent_div_70_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuslistComponent_div_70_div_24_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r54); const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r52.getSeats(item_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, BuslistComponent_div_70_div_24_div_36_Template, 7, 8, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, BuslistComponent_div_70_div_24_div_40_Template, 4, 7, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "form", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Boarding Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-select", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function BuslistComponent_div_70_div_24_Template_mat_select_selectionChange_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r55.selectBoarding(ctx_r55.boardingForm.get("boarding").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, BuslistComponent_div_70_div_24_mat_option_52_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Dropping Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-select", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function BuslistComponent_div_70_div_24_Template_mat_select_selectionChange_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r54); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r56.selectDropping(ctx_r56.boardingForm.get("dropping").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, BuslistComponent_div_70_div_24_mat_option_58_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, BuslistComponent_div_70_div_24_span_64_Template, 2, 2, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, BuslistComponent_div_70_div_24_div_65_Template, 3, 3, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](66, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "mat-icon", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](72, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuslistComponent_div_70_div_24_Template_button_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r54); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r57.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "CONTINUE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r19.defaultTripPriceList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r22.seatList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r22.boardingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r22.boarding_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r22.dropping_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r22.seats);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](66, 10, ctx_r22.selectedData));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matBadge", ctx_r22.seats.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" FARE: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](72, 12, ctx_r22.total, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r22.seats.length || ctx_r22.boardingForm.invalid);
} }
function BuslistComponent_div_70_p_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", class_r59.seatType, ":");
} }
function BuslistComponent_div_70_p_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", class_r60.currencyCode, " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 2, class_r60.amount, "1.0-0"), "");
} }
function BuslistComponent_div_70_div_63_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachSeatType_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](4, _c2, eachSeatType_r67.seatType == "vip", eachSeatType_r67.seatType == "bclass", eachSeatType_r67.seatType == "normal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", eachSeatType_r67.seatType, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](eachSeatType_r67.currencyCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", eachSeatType_r67.amount, "");
} }
function BuslistComponent_div_70_div_63_div_48_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c11 = function (a0, a1, a2) { return { "width": a0, "height": a1, "line-height": a2, "border": "2px dashed #e8e8e8", "text-align": "center", "font-size": "18px", "color": "#e8e8e8", "text-transform": "uppercase" }; };
function BuslistComponent_div_70_div_63_div_48_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Door ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](1, _c11, eachseat_r68.seat_width, eachseat_r68.seat_height, eachseat_r68.seat_height + "px"));
} }
function BuslistComponent_div_70_div_63_div_48_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c11, eachseat_r68.seat_width, eachseat_r68.seat_height, eachseat_r68.seat_height + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](eachseat_r68.seat_name);
} }
function BuslistComponent_div_70_div_63_div_48_div_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "STF");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function BuslistComponent_div_70_div_63_div_48_div_5_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](eachseat_r68.seat_name);
} }
function BuslistComponent_div_70_div_63_div_48_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BuslistComponent_div_70_div_63_div_48_div_5_span_2_Template, 2, 0, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BuslistComponent_div_70_div_63_div_48_div_5_span_3_Template, 2, 1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](9, _c5, eachseat_r68.selectSeat, eachseat_r68.selection_status || eachseat_r68.seat_type.toLowerCase().trim() == "staff" || eachseat_r68.seat_name.toLowerCase().trim() == "staff"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r68.seat_type.toLowerCase().trim() == "staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r68.seat_type.toLowerCase().trim() != "staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](12, _c6, eachseat_r68.selectSeat, eachseat_r68.selection_status || eachseat_r68.seat_type.toLowerCase().trim() == "staff" || eachseat_r68.seat_name.toLowerCase().trim() == "staff"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](15, _c7, eachseat_r68.seat_color, eachseat_r68.seat_color));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](18, _c6, eachseat_r68.selectSeat, eachseat_r68.selection_status || eachseat_r68.seat_type.toLowerCase().trim() == "staff" || eachseat_r68.seat_name.toLowerCase().trim() == "staff"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](21, _c8, eachseat_r68.seat_color, eachseat_r68.seat_color));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](24, _c6, eachseat_r68.selectSeat, eachseat_r68.selection_status || eachseat_r68.seat_type.toLowerCase().trim() == "staff" || eachseat_r68.seat_name.toLowerCase().trim() == "staff"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](27, _c9, eachseat_r68.seat_color, eachseat_r68.seat_color));
} }
const _c12 = function (a1, a2) { return { "position": "absolute", "top": a1, "left": a2 }; };
function BuslistComponent_div_70_div_63_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuslistComponent_div_70_div_63_div_48_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r80); const eachseat_r68 = ctx.$implicit; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r79.selectSeat(eachseat_r68); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BuslistComponent_div_70_div_63_div_48_div_2_Template, 2, 0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BuslistComponent_div_70_div_63_div_48_div_3_Template, 3, 5, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BuslistComponent_div_70_div_63_div_48_div_4_Template, 4, 6, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, BuslistComponent_div_70_div_63_div_48_div_5_Template, 7, 30, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r68 = ctx.$implicit;
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx_r62.tooltip(eachseat_r68, item_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c12, eachseat_r68.top + "px", eachseat_r68.left + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r68.seat_type.toLowerCase() == "driver");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r68.seat_type.toLowerCase() == "door" || eachseat_r68.seat_type.toLowerCase() == "main-door");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r68.seat_type.toLowerCase() == "toilet" || eachseat_r68.seat_type.toLowerCase() == "fridge");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", eachseat_r68.seat_type.toLowerCase() != "driver" && eachseat_r68.seat_type.toLowerCase() != "door" && eachseat_r68.seat_type.toLowerCase() != "toilet" && eachseat_r68.seat_type.toLowerCase() != "fridge" && eachseat_r68.seat_type.toLowerCase() != "main-door");
} }
function BuslistComponent_div_70_div_63_mat_option_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const boarding_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", boarding_r82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", boarding_r82.name, " ");
} }
function BuslistComponent_div_70_div_63_mat_option_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dropping_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", dropping_r83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", dropping_r83.name, " ");
} }
function BuslistComponent_div_70_div_63_span_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const seat_r84 = ctx.$implicit;
    const last_r85 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", seat_r84.seat_name, " ", last_r85 ? "" : ", ", " ");
} }
function BuslistComponent_div_70_div_63_div_76_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r86.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", data_r86.value.totalSeat, " X ", data_r86.value.ticketFare, " = ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", data_r86.value.currency, " ", data_r86.value.totalTicketFare, "");
} }
function BuslistComponent_div_70_div_63_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BuslistComponent_div_70_div_63_div_76_span_1_Template, 8, 5, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, data_r86.value) != "{}");
} }
function BuslistComponent_div_70_div_63_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Customise your journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuslistComponent_div_70_div_63_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r91); const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r89.getSeats(item_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, BuslistComponent_div_70_div_63_div_9_Template, 7, 8, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Available Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Selected seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Booked seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, BuslistComponent_div_70_div_63_div_48_Template, 6, 9, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "i", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " Boarding & Dropping ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "form", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Boarding Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "mat-select", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function BuslistComponent_div_70_div_63_Template_mat_select_selectionChange_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r91); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r92.selectBoarding(ctx_r92.boardingForm.get("boarding").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, BuslistComponent_div_70_div_63_mat_option_63_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Dropping Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "mat-select", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function BuslistComponent_div_70_div_63_Template_mat_select_change_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r91); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r93.selectDropping(ctx_r93.boardingForm.get("dropping").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, BuslistComponent_div_70_div_63_mat_option_69_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, BuslistComponent_div_70_div_63_span_75_Template, 2, 2, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, BuslistComponent_div_70_div_63_div_76_Template, 3, 3, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](77, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "mat-icon", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](83, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuslistComponent_div_70_div_63_Template_button_click_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r91); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r94.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "CONTINUE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r19.defaultTripPriceList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r25.seatList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r25.boardingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r25.boarding_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r25.dropping_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r25.seats);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](77, 10, ctx_r25.selectedData));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matBadge", ctx_r25.seats.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" FARE: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](83, 12, ctx_r25.total, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r25.seats.length || ctx_r25.boardingForm.invalid);
} }
function BuslistComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "table", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, BuslistComponent_div_70_tr_21_Template, 6, 5, "tr", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuslistComponent_div_70_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r97); const item_r19 = ctx.$implicit; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r96.getSeats(item_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "view seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, BuslistComponent_div_70_div_24_Template, 77, 15, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "RATING");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, BuslistComponent_div_70_p_55_Template, 2, 1, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, BuslistComponent_div_70_p_57_Template, 3, 5, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuslistComponent_div_70_Template_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r97); const item_r19 = ctx.$implicit; const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r98.getSeats(item_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "View seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, BuslistComponent_div_70_div_63_Template, 88, 15, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r19.trip_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r19.departure_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r19.defaultTripPriceList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.selectedTripData.bus_id == item_r19.bus_id && ctx_r9.selectedTripData.delayedDate == item_r19.delayedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r19.trip_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r19.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r19.departure_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r19.arrival_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r19.defaultTripPriceList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r19.defaultTripPriceList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r19.available_seat_count, " seats available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.selectedTripData.bus_id == item_r19.bus_id && ctx_r9.selectedTripData.delayedDate == item_r19.delayedDate);
} }
function BuslistComponent_div_82_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r100 = ctx.$implicit;
    const last_r101 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", eachseat_r100.seat_name, "", last_r101 ? "" : ", ", "");
} }
function BuslistComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Onward");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Seat(s):");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, BuslistComponent_div_82_span_13_Template, 2, 2, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Depart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Arrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Dropping");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "b", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](64, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" | ", ctx_r11.reviewInfo.onwardticket == null ? null : ctx_r11.reviewInfo.onwardticket.source_city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r11.reviewInfo.onwardticket == null ? null : ctx_r11.reviewInfo.onwardticket.dest_city, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r11.reviewInfo == null ? null : ctx_r11.reviewInfo.onwardticket == null ? null : ctx_r11.reviewInfo.onwardticket.passenger);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.reviewInfo == null ? null : ctx_r11.reviewInfo.onwardticket == null ? null : ctx_r11.reviewInfo.onwardticket.company_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.reviewInfo == null ? null : ctx_r11.reviewInfo.onwardticket == null ? null : ctx_r11.reviewInfo.onwardticket.bus_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.reviewInfo == null ? null : ctx_r11.reviewInfo.onwardticket == null ? null : ctx_r11.reviewInfo.onwardticket.source_city);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.reviewInfo == null ? null : ctx_r11.reviewInfo.onwardticket == null ? null : ctx_r11.reviewInfo.onwardticket.boardingPointname);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.reviewInfo == null ? null : ctx_r11.reviewInfo.onwardticket == null ? null : ctx_r11.reviewInfo.onwardticket.dest_city);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.reviewInfo == null ? null : ctx_r11.reviewInfo.onwardticket == null ? null : ctx_r11.reviewInfo.onwardticket.droppingPointname);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](64, 10, ctx_r11.reviewInfo == null ? null : ctx_r11.reviewInfo.totalTicketPrice));
} }
function BuslistComponent_div_83_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachseat_r103 = ctx.$implicit;
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", eachseat_r103.seat_name, "", ctx_r102.$last ? "" : ", ", "");
} }
function BuslistComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Seat(s):");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, BuslistComponent_div_83_span_16_Template, 2, 2, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Depart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Arrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Dropping");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r12.reviewInfo.returnticket.source_city, " to ", ctx_r12.reviewInfo.returnticket.dest_city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](12, 12, ctx_r12.reviewInfo.returnticket.booking_date, "dd MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r12.reviewInfo.returnticket.passenger);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r12.reviewInfo.returnticket.company_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r12.reviewInfo.returnticket.bus_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r12.reviewInfo.returnticket.source_city);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r12.reviewInfo.returnticket.boardingPointname);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r12.reviewInfo.returnticket.dest_city);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r12.reviewInfo.returnticket.droppingPointname);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r12.reviewInfo.returnticket.currency, " ", ctx_r12.reviewInfo.returnticket.total, "");
} }
const _c13 = function () { return { backdrop: "static" }; };
class BuslistComponent {
    constructor(service, activated, formBuilder, bookingService, route, datePipe, commonService, returnService) {
        this.service = service;
        this.activated = activated;
        this.formBuilder = formBuilder;
        this.bookingService = bookingService;
        this.route = route;
        this.datePipe = datePipe;
        this.commonService = commonService;
        this.returnService = returnService;
        this.modify = false;
        this.show = false;
        this.returnTicket = false;
        this.buses = [];
        this.seats = [];
        this.boarding_points = [];
        this.dropping_points = [];
        this.dropping = {};
        this.boarding = {};
        this.params = {};
        this.obj = {};
        this.seatList = [];
        this.total = 0;
        this.bus = {};
        this.selectedTripData = {};
        this.selectedData = {};
        this.reviewInfo = {};
        this.cities = [];
        this.open = false;
        this.destinations = [];
        this.loading = false;
        this.user = {};
        this.date = new Date();
        this.currency = "";
    }
    ngOnInit() {
        this.returnService.reset();
        this.bookingService.reset();
        this.initParams();
        this.currency = sessionStorage.getItem('currencyId');
        this.user = JSON.parse(sessionStorage.getItem('loggedUser'));
        this.searchForm = this.formBuilder.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            sourceCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            return_date: [''],
            city_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            destCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            dest_id: ['',],
        });
        this.boardingForm = this.formBuilder.group({
            dropping: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            boarding: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.returnForm = this.formBuilder.group({
            returnDate: [''],
        });
        this.bookingService.review_info.subscribe((res) => {
            this.reviewInfo = res;
        });
        this.bookingService.selectedseatdata.subscribe((res) => {
            this.selectedData = res;
        });
        this.bookingService.selected_seats.subscribe((res) => {
            this.seats = res;
        });
        this.bookingService.total.subscribe((res) => {
            this.total = res;
        });
        this.bookingService.bording_points.subscribe((res) => {
            this.boarding_points = res;
        });
        this.bookingService.dropping_points.subscribe((res) => {
            this.dropping_points = res;
        });
        this.bookingService.seats.subscribe((res) => {
            this.seatList = res;
        });
        this.bookingService.trip_data.subscribe((res) => {
            this.selectedTripData = res;
        });
        this.addressForm = this.formBuilder.group({
            boarding_point: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            dropping_point: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.initForm();
        this.getCities();
        this.filteredOptions = this.searchForm.get('sourceCity').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => {
            if (value.id) {
                this.searchForm.patchValue({ "city_id": value.id, "sourceCity": value.city_name });
                this.destination();
            }
            const name = typeof value === 'string' ? value : value === null || value === void 0 ? void 0 : value.city_name;
            return name ? this._filter(name) : this.cities.slice();
        }));
        this.destOptions = this.searchForm.get('destCity').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => {
            if (value.id) {
                this.searchForm.patchValue({ "dest_id": value.id, "destCity": value.city_name });
            }
            const name = typeof value === 'string' ? value : value === null || value === void 0 ? void 0 : value.city_name;
            return name ? this._filterDestinations(name) : this.destinations.slice();
        }));
    }
    initParams() {
        this.activated.paramMap.subscribe((res) => {
            console.log('d', res);
            this.params.source_city_id = res.get('id1');
            this.params.destination_city_id = res.get('id2');
            this.params.travel_date = res.get('id3');
            this.params.source_city = res.get('id4');
            this.params.dest_city = res.get('id5');
            this.params.return_date = res.get('id6');
            if (this.params.return_date != "") {
                this.returnTicket = true;
            }
            sessionStorage.setItem('params', JSON.stringify(this.params));
            this.bookingService.setBookingParams(this.params);
            let data = {
                "source_city_id": res.get('id1'),
                "destination_city_id": res.get('id2'),
                "travel_date": res.get('id3'),
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
                "currencyId": sessionStorage.getItem('currencyId'),
            };
            this.return_min = new Date(this.params.travel_date);
            this.return_min.setDate(this.return_min.getDate() + 1);
            this.service.getTrips(data).subscribe((res) => {
                this.loading = true;
                this.buses = res.data;
            });
        });
    }
    initForm() {
        if (this.returnTicket) {
            this.searchForm.patchValue(({ date: new Date(this.params.travel_date), sourceCity: this.params.source_city, destCity: this.params.dest_city, dest_id: this.params.destination_city_id, city_id: this.params.source_city_id, return_date: new Date(this.params.return_date) }));
        }
        else {
            this.searchForm.patchValue(({ date: new Date(this.params.travel_date), sourceCity: this.params.source_city, destCity: this.params.dest_city, dest_id: this.params.destination_city_id, city_id: this.params.source_city_id }));
        }
    }
    onSubmit() {
        let data = this.searchForm.value;
        this.modify = false;
        if (this.returnTicket) {
            this.route.navigate(['return', data.city_id, data.dest_id, this.datePipe.transform(data.date, 'yyyy-MM-dd'), data.sourceCity, data.destCity, this.datePipe.transform(data.return_date, 'yyyy-MM-dd')]);
        }
        else {
            this.route.navigate(['/buslist', data.city_id, data.dest_id, this.datePipe.transform(data.date, 'yyyy-MM-dd'), data.sourceCity, data.destCity, '']);
        }
    }
    getSeats(item) {
        this.bus = item;
        this.bookingService.toggleBusDetail(item);
    }
    getCities() {
        this.service.getCities().subscribe((res) => {
            this.cities = res.data;
        });
    }
    _filter(name) {
        const filterValue = name.toLowerCase();
        return this.cities.filter(option => option.city_name.toLowerCase().includes(filterValue));
    }
    _filterDestinations(name) {
        const filterValue = name.toLowerCase();
        return this.destinations.filter(option => option.city_name.toLowerCase().includes(filterValue));
    }
    destination() {
        this.service.getDestinations(this.searchForm.get('city_id').value).subscribe((res) => {
            this.destinations = res.data;
        });
    }
    tooltip(item, bus) {
        if (item.seat_type == 'normal' || item.seat_type == 'bclass' || item.seat_type == 'vip') {
            let obj = bus.defaultTripPriceList.find(ob => ob.seatType == item.seat_type);
            return item.seat_name + '| ' + item.seat_type.charAt(0).toUpperCase() + item.seat_type.slice(1) + '|' + (obj === null || obj === void 0 ? void 0 : obj.currencyCode) + ' ' + (obj === null || obj === void 0 ? void 0 : obj.amount);
        }
        else {
            return item.seat_name + '| ' + item.seat_type.charAt(0).toUpperCase() + item.seat_type.slice(1);
        }
    }
    onReturnSearch() {
        let data = this.searchForm.value;
        this.route.navigate(['return', data.city_id, data.dest_id, this.datePipe.transform(data.date, 'yyyy-MM-dd'), data.sourceCity, data.destCity, this.datePipe.transform(data.return_date, 'yyyy-MM-dd')]);
    }
    selectSeat(item) {
        this.bookingService.selectSeat(item);
    }
    selectBoarding(item) {
        this.bookingService.changeBoarding(item);
    }
    selectDropping(item) {
        this.bookingService.changeDropping(item);
    }
    save() {
        this.bookingService.saveOutward();
        if (this.returnTicket) {
            let data = this.searchForm.value;
            this.route.navigate(['return', data.city_id, data.dest_id, this.datePipe.transform(data.date, 'yyyy-MM-dd'), data.sourceCity, data.destCity, this.datePipe.transform(data.return_date, 'yyyy-MM-dd')]);
        }
        else {
            this.continue();
        }
    }
    continue() {
        this.reviewModal.hide();
        if (this.user != undefined) {
            this.route.navigateByUrl('/trip-review');
        }
        else {
            // this.commonService.loginModal.next(true);
            // this.checkLoginEvent();
            this.loginModal.show();
        }
    }
    checkLoginEvent() {
        this.commonService.auth.subscribe((res) => {
            if (res) {
                this.route.navigateByUrl('/passengers');
            }
        });
    }
    onActivity($event) {
        this.loginModal.hide();
        if ($event == 'guest') {
            this.route.navigateByUrl('/trip-review');
        }
        else {
            this.route.navigateByUrl('/trip-review');
        }
    }
    ngAfterViewInit() {
        const textWrapper = document.querySelector('.an-1');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({ loop: true })
            .add({
            targets: '.an-1 .letter',
            scale: [4, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 70 * i
        }).add({
            targets: '.an-1',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 3000
        });
    }
    onCurrency(event) {
        sessionStorage.setItem('currencyId', event.value);
        this.ngOnInit();
    }
}
BuslistComponent.ɵfac = function BuslistComponent_Factory(t) { return new (t || BuslistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_booking_service__WEBPACK_IMPORTED_MODULE_6__["BookingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_return_service__WEBPACK_IMPORTED_MODULE_8__["ReturnService"])); };
BuslistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BuslistComponent, selectors: [["app-buslist"]], viewQuery: function BuslistComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.reviewModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.loginModal = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])], decls: 110, vars: 31, consts: [[1, "container", 2, "margin-top", "-40px", "padding-top", "5em", "padding-bottom", "0 !important"], [1, "row", "mb-2"], [1, "col-sm-3"], [2, "font-weight", "800"], [1, "card", "custom-card"], [1, "card-body"], [1, "row"], [1, "col-sm-10"], [1, "col-sm-2"], ["appearance", "outline"], [3, "ngModel", "ngModelChange", "selectionChange"], ["value", "3"], ["value", "1"], [3, "formGroup", "ngSubmit"], [1, "col-md-3"], ["matInput", "", "formControlName", "sourceCity", "placeholder", "From", 3, "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "destCity", "placeholder", "Destination", 3, "matAutocomplete"], ["dest", "matAutocomplete"], ["matInput", "", "formControlName", "date", "placeholder", "Date", 3, "min", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "formControlName", "return_date", "placeholder", "Return Date", 3, "min", "matDatepicker"], ["picker", ""], [1, "col-md-12", 2, "text-align", "right"], ["type", "submit", 1, "btn", "btn-custom"], [1, "section-body"], [1, "text-center"], [1, "row", 2, "margin-top", "15px"], [1, "col-sm-5"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [4, "ngIf"], ["class", "mt-2", 4, "ngIf"], ["class", "custom-card mb-2", 4, "ngFor", "ngForOf"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-static-name", 1, "modal", "fade", 3, "config"], ["reviewModal", "bs-modal"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-static-name", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], ["class", "row", "style", "padding-bottom: 5px", 4, "ngIf"], ["class", "row", "style", "margin-top:10px", 4, "ngIf"], [1, "row", "reviewPayable"], [1, "col-lg-6", "col-md-6", "col-xs-6", "col-sm-6"], [1, "col-lg-6", "col-md-6", "col-xs-6", "col-sm-6", "ng-binding", 2, "text-align", "right"], [1, "ng-binding", 2, "padding-left", "5px"], [1, "row", 2, "text-align", "right"], [1, "col-lg-12", "col-md-12", "col-xs-12", "col-sm-12"], [1, "btn", "view-seats", 2, "margin-right", "0px !important", "float", "right", 3, "click"], [1, "fa-solid", "fa-chevron-right"], ["loginModal", "bs-modal"], [1, "modal-dialog", "modal-md"], [1, "modal-body", "mb-2"], [3, "action"], [3, "value"], [1, "col-md-8"], ["matInput", "", "formControlName", "returnDate", "placeholder", "Return Date", 3, "min", "matDatepicker"], [1, "col-md-2"], [1, "pull-right", "btn", "btn-sm", "view-seats"], ["src", "assets/img/no_bus.png", "alt", "No Bus"], [2, "font-size", "30px", "font-weight", "400"], [2, "font-size", "20px", "font-weight", "600"], [1, "mt-2"], [1, "col-sm-8"], [2, "font-weight", "600", "color", "#0F70B7"], [1, "custom-card", "mb-2"], [1, "row", "align-items-start", "py-2", "container-fluid", "px-0", "px-md-3", "result-row"], [1, "col-4", "d-block", "d-md-none"], ["src", "https://cdn-icons-png.flaticon.com/512/1819/1819543.png", "alt", "bus icon", "height", "40", "width", "40"], [1, "mb-0", "fw-bold", "small"], [1, "col-3", "d-block", "d-md-none"], [1, "mb-0", 2, "font-size", "13px !important"], [1, "far", "fa-star", "fa-xs"], [1, ""], ["title", "a/c available", 1, "fas", "fa-fan", "fa-xs"], ["title", "free wifi", 1, "fas", "fa-wifi", "fa-xs"], ["title", "charging point", 1, "fas", "fa-bolt", "fa-xs"], [1, "col-5", "d-block", "d-md-none"], [1, "table", "table-sm", "table-borderless", "mb-0"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "float-end", 2, "color", "rgb(230,23,115)", 3, "click"], ["class", "col-sm-12 pb-2 d-block d-md-none", "style", "margin-top: 15px;background-color:#f8f3c1;border-radius:5px", 4, "ngIf"], [1, "row", "align-items-start", "border-bottom", "py-2", "py-md-3", "container-fluid", "px-0", "px-md-3", "result-row"], [1, "col-1", "d-none", "d-md-block"], ["src", "https://cdn-icons-png.flaticon.com/512/1819/1819543.png", "alt", "bus icon", "height", "50", "width", "50"], [1, "col-3", "d-none", "d-md-block"], [1, "mb-0", "fw-bold"], [1, "d-flex", "gap-3", "mt-2"], ["title", "a/c available", 1, "fas", "fa-fan"], ["title", "free wifi", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "data-bs-title", "free wifi", 1, "fas", "fa-wifi"], ["title", "charging point", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "data-bs-title", "charging point", 1, "fas", "fa-bolt"], [1, "text-center", "col-2", "d-none", "d-md-flex", "align-items-center"], ["src", "https://cdn-icons-png.flaticon.com/512/581/581838.png", "alt", "", "height", "40"], [1, "fw-bold"], [1, "mb-0"], [1, "col-2", "d-none", "d-md-block"], [1, "d-flex"], [1, "fa-solid", "fa-star", "star"], [1, "col-4", "d-none", "d-md-flex", "justify-content-between"], [1, "text-end"], ["class", "mb-0", "style", "text-transform: capitalize;", 4, "ngFor", "ngForOf"], ["class", "mb-0", 4, "ngFor", "ngForOf"], [1, "mb-1", "primary"], [1, "btn", "btn-sm", 2, "background-color", "rgb(230,23,115)", "color", "white", 3, "click"], ["class", "col-sm-12 pb-2 d-none d-md-block", "style", "margin-top: 15px;background-color:#f8f3c1;border-radius:5px", 4, "ngIf"], [1, "small", 2, "text-transform", "capitalize"], [1, "small", "fw-bold"], [1, "col-sm-12", "pb-2", "d-block", "d-md-none", 2, "margin-top", "15px", "background-color", "#f8f3c1", "border-radius", "5px"], [1, "row", "pt-2"], [1, "col-sm-12", "ustify-content-right"], [1, "fa-regular", "fa-circle-xmark", "text-danger", 2, "float", "right", "font-size", "24px", 3, "click"], [1, "col-sm-12"], [1, "d-flex", "gap-2", "justify-content-center"], [1, "col-md-4", "col-lg-4", "col-sm-4", "col-xs-4", 2, "position", "relative", "text-align", "left"], [2, "position", "relative", "width", "31px", "height", "24px"], [1, "static-seat-mob"], [1, "static-right-mob"], [1, "static-top-mob"], [1, "static-bottom-mob"], [2, "padding-top", "5px"], [1, "col-md-4", "col-lg-4", "col-sm-4", "col-xs-4", "padding-right-none", 2, "position", "relative", "text-align", "left"], [1, "static-seat-mob", 2, "background-color", "#9a2718"], [1, "static-right-mob", 2, "background-color", "#9a2718"], [1, "static-top-mob", 2, "background-color", "#9a2718"], [1, "static-bottom-mob", 2, "background-color", "#9a2718"], [1, "static-seat-mob", 2, "background-color", "#ada9a9"], [1, "static-right-mob", 2, "background-color", "#ada9a9"], [1, "static-top-mob", 2, "background-color", "#ada9a9"], [1, "static-bottom-mob", 2, "background-color", "#ada9a9"], ["class", "col-sm-12", "style", "font-size: 1px;", 4, "ngFor", "ngForOf"], [1, "hidden-xs", "mobileSeatLayout"], [3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "col-sm-4", "col-12"], [1, "card"], [3, "formGroup"], ["formControlName", "boarding", 3, "selectionChange"], ["formControlName", "dropping", 3, "selectionChange"], [1, "col-sm-4"], ["class", "col-sm-12", 4, "ngFor", "ngForOf"], [1, "card-footer", 2, "background-color", "black", "color", "white", "font-weight", "600", "font-size", "13px"], [3, "matBadge"], [2, "float", "right", "font-size", "12px"], [1, "btn", "search-seats", 2, "margin-right", "5px", "float", "right", 3, "disabled", "click"], [1, "col-sm-12", 2, "font-size", "1px"], [1, "fa-solid", "fa-circle", 3, "ngClass"], [2, "text-transform", "capitalize", "margin-left", "5px"], [2, "font-weight", "700"], [3, "ngStyle", "click"], ["class", "default-cursor", 4, "ngIf"], ["style", "position: relative;width:37px;height:37px;cursor:pointer", 4, "ngIf"], [1, "default-cursor"], ["src", "assets/img/driver.png", "alt", "Driver", 1, "driver"], [3, "ngStyle"], [1, "word-break", 3, "ngStyle"], [2, "position", "relative", "width", "37px", "height", "37px", "cursor", "pointer"], [1, "chair-seat-mob", 2, "text-align", "center", 3, "ngClass"], ["style", "padding-right: 10px;", 4, "ngIf"], [1, "chair-right-mob", 3, "ngClass", "ngStyle"], [1, "chair-left-mob", 3, "ngClass", "ngStyle"], [1, "chair-bottom-mob", 3, "ngClass", "ngStyle"], [2, "padding-right", "10px"], [2, "text-transform", "capitalize"], [2, "float", "right"], [2, "font-weight", "600"], [1, "mb-0", 2, "text-transform", "capitalize"], [1, "col-sm-12", "pb-2", "d-none", "d-md-block", 2, "margin-top", "15px", "background-color", "#f8f3c1", "border-radius", "5px"], [1, "row", "pt-1"], [2, "font-size", "14px", "font-weight", "700", "text-transform", "capitalize"], [1, "row", "pt-3"], [1, "col-md-6", "col-xs-6", "col-sm-6", "col-lg-6", "padding-0", "fs-13", "pt-12"], ["class", "col-md-4 padding-0", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-xs-6", "col-sm-6", "col-lg-6", "padding-0", "text-center"], [1, "col-md-4", "row", "padding-right-none", 2, "position", "relative"], [1, "col-lg-4", "col-md-4"], [2, "position", "absolute", "top", "0", "left", "32px"], [1, "chair-seat", 2, "text-align", "center", "background-color", "#fff", "width", "26px", "height", "27px"], [1, "chair-right", 2, "background-color", "#fff", "height", "29px", "width", "7px", "left", "24px", "top", "-1px"], [1, "chair-top", 2, "background-color", "#fff", "height", "7px", "left", "10px", "width", "15px", "top", "-1px"], [1, "chair-bottom", 2, "background-color", "#fff", "top", "21px", "height", "7px", "left", "10px", "width", "15px"], [1, "col-lg-8", "col-md-8", "padding-0", 2, "line-height", "39px"], [1, "chair-seat", 2, "text-align", "center", "background-color", "#9a2718", "width", "26px", "height", "27px", "color", "#fff"], [1, "chair-right", 2, "background-color", "#9a2718", "height", "29px", "width", "7px", "left", "24px", "top", "-1px"], [1, "chair-top", 2, "background-color", "#9a2718", "height", "7px", "left", "10px", "width", "15px", "top", "-1px"], [1, "chair-bottom", 2, "background-color", "#9a2718", "top", "21px", "height", "7px", "left", "10px", "width", "15px"], [2, "position", "absolute", "top", "0", "left", "38px"], [1, "chair-seat", 2, "text-align", "center", "background-color", "#ada9a9", "width", "26px", "height", "27px"], [1, "chair-right", 2, "background-color", "#ada9a9", "height", "29px", "width", "7px", "left", "24px", "top", "-1px"], [1, "chair-top", 2, "background-color", "#ada9a9", "height", "7px", "left", "10px", "width", "15px", "top", "-1px"], [1, "chair-bottom", 2, "background-color", "#ada9a9", "top", "21px", "height", "7px", "left", "10px", "width", "15px"], [1, "hidden-xs", "seatLayout"], ["data-toggle", "tooltip", "data-placement", "bottom", 3, "ngStyle", "title", "click", 4, "ngFor", "ngForOf"], [1, "card-header", "text-white", 2, "background-color", "rgb(230,23,115)"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], ["formControlName", "dropping", 3, "change"], [1, "card-footer", 2, "color", "rgb(230,23,115)", "font-weight", "600", "font-size", "13px"], ["color", "accent", 3, "matBadge"], [1, "col-md-4", "padding-0"], ["data-toggle", "tooltip", "data-placement", "bottom", 3, "ngStyle", "title", "click"], [2, "position", "relative", "width", "50px", "height", "45px"], ["style", "position: relative;width:50px;height:45px;", 4, "ngIf"], [2, "color", "rgb(230,23,115)", "font-size", "10px"], [1, "chair-seat", 2, "text-align", "center", "padding-right", "8px", "padding-top", "5px", 3, "ngClass"], [1, "chair-right", 3, "ngClass", "ngStyle"], [1, "chair-top", 3, "ngClass", "ngStyle"], [1, "chair-bottom", 3, "ngClass", "ngStyle"], [1, "row", 2, "padding-bottom", "5px"], [1, "row", 2, "font-size", "15px", "font-weight", "600", "margin-bottom", "10px"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-12", "padding-0"], [1, "crossBorderSpan", 2, "background-color", "#cbffcb"], [2, "font-size", "18px"], [1, "ng-binding"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-12", 2, "text-align", "right"], [2, "padding-right", "5px"], [1, "row", "disableBorder", 2, "display", "flex", "flex-wrap", "wrap"], [1, "col-lg-2", "col-md-2", "col-sm-4", "col-xs-4", "padding-left-0", "sameHeightColumn", 2, "text-align", "center"], ["src", "assets/img/bus.svg", "alt", "bus", 2, "width", "65px", "opacity", "0.4"], [1, "col-lg-3", "col-md-3", "col-sm-6", "col-xs-6", "padding-left-0", "sameHeightColumn"], [1, "reviewPadding"], [1, "hidden-xs", 2, "font-size", "15px"], [1, "ng-binding", 2, "font-size", "15px"], [2, "font-size", "15px"], [1, "col-lg-2", "col-md-2", "col-sm-4", "col-xs-6", "row", "sameHeightColumn", 2, "padding-right", "0"], [1, "col-lg-3", "col-md-3", "col-sm-4", "col-xs-7", "sameHeightColumn"], [1, "row", "reviewPadding"], [1, "col-lg-4", "col-md-4", "col-sm-6", "col-xs-4", "padding-0", 2, "font-size", "16px"], [1, "col-lg-8", "col-md-4", "col-sm-6", "col-xs-8", 2, "text-align", "right", "font-size", "16px", "padding-left", "0"], [1, "row", 2, "margin-top", "10px"], [1, "crossBorderSpan", 2, "background-color", "#ffe7fe"], [1, "row", 2, "margin-top", "10px", "padding-bottom", "5px", "display", "flex", "flex-wrap", "wrap"], ["src", "../assets/bus.svg", "alt", "bus", 2, "width", "65px", "opacity", "0.4"], [1, "col-lg-3", "col-md-3", "col-sm-6", "col-xs-6", "sameHeightColumn", "padding-left-0"], [1, "col-lg-2", "col-md-2", "col-sm-4", "col-xs-4", "sameHeightColumn", 2, "padding-right", "0"], [1, "col-lg-2", "col-md-2", "col-sm-4", "col-xs-3", "sameHeightColumn", 2, "padding-right", "0"], [1, "col-lg-3", "col-md-3", "col-sm-6", "col-xs-7", "sameHeightColumn"], [1, "row", 2, "padding", "5px 0"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4", "padding-0", 2, "font-size", "16px"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-8", 2, "text-align", "right", "font-size", "16px", "padding-left", "0"]], template: function BuslistComponent_Template(rf, ctx) { if (rf & 1) {
        const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " From ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BuslistComponent_Template_mat_select_ngModelChange_19_listener($event) { return ctx.currency = $event; })("selectionChange", function BuslistComponent_Template_mat_select_selectionChange_19_listener($event) { return ctx.onCurrency($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "TZS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "KES");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function BuslistComponent_Template_form_ngSubmit_24_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-autocomplete", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, BuslistComponent_mat_option_33_Template, 2, 2, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-autocomplete", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, BuslistComponent_mat_option_42_Template, 2, 2, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](43, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "mat-datepicker-toggle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "mat-datepicker", null, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Return Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "mat-datepicker-toggle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "mat-datepicker", null, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Modify Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, BuslistComponent_form_67_Template, 13, 4, "form", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, BuslistComponent_div_68_Template, 12, 2, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, BuslistComponent_div_69_Template, 5, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, BuslistComponent_div_70_Template, 64, 12, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "h4", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Trip Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuslistComponent_Template_button_click_78_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r104); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](72); return _r10.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](82, BuslistComponent_div_82_Template, 65, 12, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](83, BuslistComponent_div_83_Template, 67, 15, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Grand Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "KES");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](91, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuslistComponent_Template_button_click_94_listener() { return ctx.continue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "CONTINUE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](96, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 35, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "h4", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "Join Kidiaone");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuslistComponent_Template_button_click_104_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r104); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](98); return _r13.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "app-register", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("action", function BuslistComponent_Template_app_register_action_108_listener($event) { return ctx.onActivity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](109, "app-footer");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](32);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](41);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](51);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.params.source_city, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.params.dest_city);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](34, 23, ctx.filteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](43, 25, ctx.destOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", ctx.date)("matDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", ctx.return_min)("matDatepicker", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.buses.length && ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.buses.length && ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.buses);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](29, _c13));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reviewInfo.onwardticket);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reviewInfo.returnticket);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](91, 27, ctx.reviewInfo == null ? null : ctx.reviewInfo.totalTicketPrice));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](30, _c13));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__["ModalDirective"], _register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__["MatBadge"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".hero-section[_ngcontent-%COMP%] {\n  min-height: 100px !important;\n}\n\n.departure[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #1f1309;\n  margin-bottom: 15px;\n}\n\n.view-seats[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid #e20613;\n  font-size: 13px;\n  padding: 6px 10px;\n  text-transform: capitalize;\n  color: white;\n  margin-top: 5px;\n  font-weight: 700;\n  background-color: #e20613;\n  border-radius: 20px;\n}\n\n.search-seats[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid black;\n  font-size: 13px;\n  padding: 6px 10px;\n  text-transform: capitalize;\n  color: white;\n  margin-top: 5px;\n  font-weight: 700;\n  background-color: black;\n  border-radius: 20px;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.primary[_ngcontent-%COMP%] {\n  color: black !important;\n  font-weight: 600;\n}\n\n.star[_ngcontent-%COMP%] {\n  color: #0F70B7 !important;\n}\n\ndiv[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n\n  .mat-tab-label {\n  padding: 0px !important;\n  justify-content: left !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix {\n  padding: 0.6em 0px !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix > span.mat-form-field-label-wrapper {\n  top: -1.3em !important;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75) !important;\n  width: 133.33333% !important;\n}\n\n.mat-badge-content[_ngcontent-%COMP%] {\n  background: red !important;\n  color: blue !important;\n}\n\n.identifiedType[_ngcontent-%COMP%] {\n  padding: 0px 8px;\n  border-radius: 50px;\n  margin-right: 5px;\n}\n\n.orange-color[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.green-color[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.blue-color[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n  .mat-form-field-wrapper {\n  margin-bottom: -0.65em !important;\n  margin-top: -0.15em !important;\n}\n\n.mobileSeatLayout[_ngcontent-%COMP%] {\n  height: 700px;\n  margin: 0 auto;\n  position: relative;\n  background-color: #fff;\n  box-shadow: 0 1px 8px #ccc;\n  cursor: pointer;\n  width: 300px;\n}\n\n.chair-seat-mob[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin: 0px 3px;\n  width: 30px;\n  height: 25px;\n  border-width: 2px;\n  border-color: #aaa;\n  border-top-left-radius: 5px;\n  align-items: center;\n  justify-content: center;\n  border-top-right-radius: 5px;\n  border-style: solid;\n  border-bottom: solid 1px black !important;\n}\n\n.chair-bottom-mob[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5px;\n  left: 1px;\n  right: 0;\n  width: 34px;\n  height: 7px;\n  border-width: 2px;\n  border-style: solid;\n  border-left-width: 3px !important;\n  border-left-style: solid !important;\n  border: solid 1px !important;\n  z-index: 1;\n  border-top: 0 !important;\n}\n\n.chair-left-mob[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 1px;\n  width: 8px;\n  height: 18px;\n  border-width: 2px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  top: 11px;\n  border-style: solid;\n  border-right: 0;\n  border-top-width: 3px !important;\n  border-top-style: solid !important;\n  border: solid 1px !important;\n}\n\n.chair-right-mob[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2px;\n  width: 8px;\n  height: 18px;\n  border-width: 2px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  top: 11px;\n  border-bottom-width: 8px !important;\n  border-bottom-style: solid !important;\n  border: solid 1px !important;\n}\n\n.static-top-mob[_ngcontent-%COMP%] {\n  background-color: #fff;\n  height: 21px;\n  left: 0px;\n  width: 7px;\n  top: 9px;\n  position: absolute;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-width: 8px !important;\n  border-bottom-style: solid !important;\n  border: solid 1px !important;\n}\n\n.static-bottom-mob[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-top: solid 1px !important;\n  top: 23px;\n  width: 31px;\n  left: 0;\n  position: absolute;\n  bottom: 9px;\n  right: 0;\n  height: 7px;\n  border-width: 2px;\n  border-style: solid;\n  border-left-width: 3px !important;\n  border-left-style: solid !important;\n  border: solid 1px !important;\n  z-index: 1;\n}\n\n.static-right-mob[_ngcontent-%COMP%] {\n  background-color: #fff;\n  height: 21px;\n  left: 24px;\n  border: solid 1px !important;\n  position: absolute;\n  right: 6px;\n  width: 7px;\n  border-width: 2px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  top: 9px;\n  border-bottom-style: solid !important;\n}\n\n.static-seat-mob[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin: 0px 3px;\n  width: 26px;\n  height: 27px;\n  border-width: 2px;\n  border-color: #aaa;\n  border-top-left-radius: 5px;\n  align-items: center;\n  justify-content: center;\n  border-top-right-radius: 5px;\n  border-style: solid;\n  border-bottom: solid 1px black !important;\n  text-align: center;\n  padding-top: 3px;\n}\n\n.selectedSeat[_ngcontent-%COMP%] {\n  background-color: #990000 !important;\n}\n\n.alreadySelectedSeat[_ngcontent-%COMP%] {\n  background-color: #990000 !important;\n  color: #fff;\n  border-color: #990000;\n}\n\n.alreayBooked[_ngcontent-%COMP%] {\n  background-color: #ada9a9 !important;\n  pointer-events: none;\n  border-color: #888888;\n}\n\n.hd[_ngcontent-%COMP%] {\n  padding: 0 0 0;\n  margin-top: 0;\n}\n\n.onward-return-tab[_ngcontent-%COMP%] {\n  background-color: #F0E68C;\n  color: black;\n}\n\n.enable[_ngcontent-%COMP%] {\n  background-color: #FDDA0D;\n}\n\n.disable[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.custom-card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0px 6px 8px 8px rgba(0, 0, 0, 0.1);\n}\n\n.custom-list[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0px 6px 8px 8px rgba(0, 1, 0, 0.1);\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1c2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw0QkFBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0FBR0o7O0FBREE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBQUE7RUFDQyx5QkFBQTtBQUdEOztBQURBO0VBQ0ksMEJBQUE7QUFJSjs7QUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUFHQTs7QUFDQTtFQUErSiw2QkFBQTtBQUcvSjs7QUFGQTtFQUFrTSxzQkFBQTtBQU1sTTs7QUFKQTtFQUNBLG9EQUFBO0VBQ0EsNEJBQUE7QUFPQTs7QUFKQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUFPQTs7QUFIQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQU1KOztBQUhBO0VBQ0ksYUFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtBQU9KOztBQUxBO0VBQ0ksV0FBQTtBQVFKOztBQU5BO0VBQ0ksaUNBQUE7RUFDQSw4QkFBQTtBQVNKOztBQUxDO0VBQ0csYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVFKOztBQUhDO0VBQ0csc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQU9KOztBQUxBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQVFKOztBQU5BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0FBU0o7O0FBUEE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7QUFVSjs7QUFSQTtFQUNJLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0FBV0o7O0FBVEE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsUUFBQTtFQUNBLHFDQUFBO0FBWUo7O0FBVkE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBYUo7O0FBVkE7RUFDSSxvQ0FBQTtBQWFKOztBQVhBO0VBQ0ksb0NBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFjSjs7QUFaQTtFQUNJLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQWVKOztBQVZBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUFhSjs7QUFWQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQWFKOztBQVhBO0VBQ0kseUJBQUE7QUFjSjs7QUFaQTtFQUNJLG9CQUFBO0FBZUo7O0FBYkU7RUFDRSxZQUFBO0VBQ0EsOENBQUE7QUFnQko7O0FBZEU7RUFDRSxZQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtBQWlCSiIsImZpbGUiOiJidXNsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaGVyby1zZWN0aW9ue1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG4uZGVwYXJ0dXJlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGNvbG9yOiAjMWYxMzA5O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi52aWV3LXNlYXRzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyMDYxMztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyMDYxMztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLnNlYXJjaC1zZWF0cyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ucHJpbWFyeSB7XG4gICAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5cbi5zdGFye1xuIGNvbG9yOiMwRjcwQjchaW1wb3J0YW50O1xufVxuZGl2e1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG5cbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCB7XG5wYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbmp1c3RpZnktY29udGVudDogbGVmdCAhaW1wb3J0YW50O1xufVxuXG5cbjo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgPiBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciA+IGRpdi5tYXQtZm9ybS1maWVsZC1mbGV4ID4gZGl2Lm1hdC1mb3JtLWZpZWxkLWluZml4ICB7IHBhZGRpbmc6IDAuNmVtIDBweCAhaW1wb3J0YW50IH1cbjo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgPiBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciA+IGRpdi5tYXQtZm9ybS1maWVsZC1mbGV4ID4gZGl2Lm1hdC1mb3JtLWZpZWxkLWluZml4ID4gc3Bhbi5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHsgdG9wOiAtMS4zZW0gIWltcG9ydGFudCB9XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSkgIWltcG9ydGFudDtcbndpZHRoOiAxMzMuMzMzMzMlICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtYmFkZ2UtY29udGVudCB7XG5iYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcbmNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XG59XG5cblxuLmlkZW50aWZpZWRUeXBle1xuICAgIHBhZGRpbmc6IDBweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLm9yYW5nZS1jb2xvcntcbiAgICBjb2xvcjogb3JhbmdlXG59XG4uZ3JlZW4tY29sb3J7XG4gICAgY29sb3I6IGdyZWVuXG59XG4uYmx1ZS1jb2xvcntcbiAgICBjb2xvcjogYmx1ZVxufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjY1ZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAtMC4xNWVtICFpbXBvcnRhbnQ7XG4gfVxuXG5cbiAubW9iaWxlU2VhdExheW91dCB7XG4gICAgaGVpZ2h0OiA3MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDFweCA4cHggI2NjYztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIC8vIG1hcmdpbjogMCBhdXRvO1xufVxuXG5cbiAuY2hhaXItc2VhdC1tb2Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAwcHggM3B4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItY29sb3I6ICNhYWE7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjayAhaW1wb3J0YW50O1xufVxuLmNoYWlyLWJvdHRvbS1tb2Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDVweDtcbiAgICBsZWZ0OiAxcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDM0cHg7XG4gICAgaGVpZ2h0OiA3cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci10b3A6IDAgIWltcG9ydGFudDtcbn1cbi5jaGFpci1sZWZ0LW1vYiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAxcHg7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgdG9wOiAxMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDNweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIWltcG9ydGFudDtcbn1cbi5jaGFpci1yaWdodC1tb2Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMnB4O1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIHRvcDogMTFweDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiA4cHggIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICFpbXBvcnRhbnQ7XG59XG4uc3RhdGljLXRvcC1tb2J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiA3cHg7XG4gICAgdG9wOiA5cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDhweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIWltcG9ydGFudDtcbn1cbi5zdGF0aWMtYm90dG9tLW1vYntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAhaW1wb3J0YW50O1xuICAgIHRvcDogMjNweDtcbiAgICB3aWR0aDogMzFweDtcbiAgICBsZWZ0OiAwOyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA5cHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA3cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAxO1xufVxuLnN0YXRpYy1yaWdodC1tb2J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgbGVmdDogMjRweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNnB4O1xuICAgIHdpZHRoOiA3cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgdG9wOiA5cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQgIWltcG9ydGFudDtcbn1cbi5zdGF0aWMtc2VhdC1tb2J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDBweCAzcHg7XG4gICAgd2lkdGg6IDI2cHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci1jb2xvcjogI2FhYTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG59XG5cbi5zZWxlY3RlZFNlYXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5MDAwMCAhaW1wb3J0YW50O1xufVxuLmFscmVhZHlTZWxlY3RlZFNlYXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5MDAwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjOTkwMDAwO1xufVxuLmFscmVheUJvb2tlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRhOWE5ICFpbXBvcnRhbnQ7XG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcbiAgICBib3JkZXItY29sb3I6ICM4ODg4ODg7XG59XG5cblxuXG4uaGQge1xuICAgIHBhZGRpbmc6IDAgMCAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5vbndhcmQtcmV0dXJuLXRhYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjBFNjhDO1xuICAgIGNvbG9yOmJsYWNrO1xufVxuLmVuYWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkREQTBEO1xufVxuLmRpc2FibGV7XG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcbiAgfVxuICAuY3VzdG9tLWNhcmQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDhweCA4cHggcmdiYSgwLjEsIDAuMSwgMCwgMC4xKTtcbiAgfVxuICAuY3VzdG9tLWxpc3Qge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDhweCA4cHggcmdiYSgwLjEsIDEsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9Il19 */"] });


/***/ }),

/***/ "MR1q":
/*!**************************************************!*\
  !*** ./src/app/views/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ "OlR4");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");

















const _c0 = ["loginModal"];
const _c1 = ["otpModal"];
function HeaderComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_li_25_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31); return _r2.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Sign In/Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "PROFILE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_li_26_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "SIGN OUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.user.name, " ");
} }
function HeaderComponent_div_49_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r11, " ");
} }
function HeaderComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function HeaderComponent_div_49_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HeaderComponent_div_49_mat_option_9_Template, 2, 2, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r3.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.codes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.loginForm.invalid);
} }
function HeaderComponent_div_50_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r16, " ");
} }
function HeaderComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function HeaderComponent_div_50_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.register(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, HeaderComponent_div_50_mat_option_14_Template, 2, 2, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "mat-datepicker-toggle", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "mat-datepicker", null, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Female ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Male ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r4.registerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.codes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", ctx_r4.max_date)("matDatepicker", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r15);
} }
const _c2 = function () { return ["/"]; };
const _c3 = function () { return { exact: true }; };
const _c4 = function () { return ["/about"]; };
const _c5 = function () { return ["/contact"]; };
const _c6 = function () { return ["/print-ticket"]; };
const _c7 = function () { return ["/privacy"]; };
const _c8 = function () { return { backdrop: "static" }; };
class HeaderComponent {
    constructor(formBuilder, commoService, service, spinner, toastr, datePipe) {
        this.formBuilder = formBuilder;
        this.commoService = commoService;
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.type = '1';
        this.codes = ['254', '255'];
        this.user = {};
        this.open = false;
        this.date = new Date();
        this.max_date = this.date.setFullYear(this.date.getFullYear() - 18);
        this.authenticated = false;
        this.device_number = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        if (sessionStorage.getItem('loggedUser') != undefined) {
            this.authenticated = true;
            this.user = JSON.parse(sessionStorage.getItem('loggedUser'));
        }
    }
    ngOnInit() {
        this.commoService.login_modal.subscribe((res) => {
            if (res) {
                this.loginModal.show();
            }
        });
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            gcm_token: [''],
            country_code: ['254', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.otpForm = this.formBuilder.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            country_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    login() {
        this.spinner.show();
        this.service.login(this.loginForm.value).subscribe((res) => {
            if (res.isSuccess) {
                this.spinner.hide();
                sessionStorage.setItem("loggedUser", JSON.stringify(res.data));
                this.user = res.data;
                this.toastr.success("login successfull", 'Success');
                this.authenticated = true;
                this.commoService.authenticated.next(true);
                this.loginForm.reset();
                this.loginModal.hide();
            }
            else {
                this.toastr.error('Incorrect Credentials', 'Login Failed');
                this.spinner.hide();
            }
        });
    }
    register() {
        this.spinner.show();
        let data = this.registerForm.value;
        data.device_number = this.device_number;
        data.date_of_birth = this.datePipe.transform(data.dob, 'yyyy-MM-dd');
        delete data.dob;
        this.service.sigup(data).subscribe((res) => {
            this.spinner.hide();
            if (res.isSuccess) {
                this.loginModal.hide();
                this.toastr.success("Registeration successfull", 'Success');
                this.otpModal.show();
            }
            else {
                this.toastr.error('Registration failed', 'Request Failed');
            }
        });
    }
    onOtp() {
        this.spinner.show();
        let data = {
            "otp_number": this.otpForm.get('code').value,
            "device_number": this.device_number,
            "gcm_token": "",
        };
        this.service.otpVerification(data).subscribe((res) => {
            if (res.isSuccess) {
                this.otpModal.hide();
                this.spinner.hide();
                this.toastr.success("Successfully verified", "Success");
            }
            else {
                this.spinner.hide();
                this.toastr.error(res.errors.otp[0], "Failed");
            }
        });
    }
    logout() {
        sessionStorage.clear();
        this.authenticated = false;
        this.commoService.authenticated.next(false);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.loginModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.otpModal = _t.first);
    } }, inputs: { open: "open" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])], decls: 76, vars: 32, consts: [[1, "navbar", "navbar-expand-lg", "bg-light", "rounded", "sticky-top", "shadow", "p-2", "p-lg-0"], [1, "container", "px-0", "ps-3"], ["href", "#", 1, "navbar-brand"], ["src", "assets/img/kidia.png", "height", "50px", "width", "50px", "alt", ""], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasNavbar", "aria-controls", "offcanvasNavbar", 1, "navbar-toggler"], [1, "navbar-toggler-icon", 2, "color", "black"], ["tabindex", "-1", "id", "offcanvasNavbar", "aria-labelledby", "offcanvasNavbarLabel", 1, "offcanvas", "offcanvas-start"], [1, "offcanvas-header"], ["id", "offcanvasNavbarLabel", 1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close"], [1, "offcanvas-body"], [1, "navbar-nav", "ms-auto", "my-2", "my-lg-0", "align-items-start", "align-items-lg-center", "navbar-nav-scroll", "pe-3"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", "routerLink", "/about", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", "routerLink", "/contact", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", "routerLink", "/print-ticket", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], ["class", "nav-item", 3, "click", 4, "ngIf"], ["class", "nav-item dropdown", 4, "ngIf"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-static-name", 1, "modal", "fade", 3, "config"], ["loginModal", "bs-modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-static-name", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-sm-3", "col-6"], ["selected", "", "value", "1"], ["value", "2"], ["class", "row", "style", "margin-top: 10px;", 4, "ngIf"], ["otpModal", "bs-modal"], [3, "formGroup", "ngSubmit"], [1, "col-sm-12"], ["appearance", "outline"], ["matInput", "", "type", "password", "formControlName", "code", "placeholder", "Otp Code"], [1, "btn", "btn-primary", 2, "float", "right", 3, "disabled"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#ffe716", "type", "pacman", 3, "fullScreen"], [2, "color", "white"], [1, "nav-item", 3, "click"], [1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fa-solid", "fa-user-tie"], [1, "dropdown-menu"], ["routerLink", "/profile", 1, "dropdown-item"], [1, "dropdown-item", 3, "click"], [1, "row", 2, "margin-top", "10px"], [1, "col-sm-4"], ["formControlName", "country_code"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-8"], ["matInput", "", "formControlName", "username", "placeholder", "Username"], ["matInput", "", "type", "password", "formControlName", "password", "placeholder", "Password"], [1, "btn", "view-seats", 2, "float", "right", 3, "disabled"], [3, "value"], ["matInput", "", "formControlName", "name", "placeholder", "Name"], ["matInput", "", "formControlName", "phone", "placeholder", "Phone"], [1, "col-sm-6"], ["matInput", "", "formControlName", "dob", "placeholder", "Date", 3, "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["formControlName", "gender"], ["value", "Female"], ["value", "Male"], [1, "col-sm-7"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "Email"], [1, "col-sm-5"], [1, "btn", "btn-success", 2, "float", "right"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Print Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, HeaderComponent_li_25_Template, 3, 0, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, HeaderComponent_li_26_Template, 11, 1, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "JOIN Kidia One Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31); return _r2.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-radio-group", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_mat_radio_group_ngModelChange_41_listener($event) { return ctx.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-radio-button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "SIGN IN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-radio-button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "REGISTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, HeaderComponent_div_49_Template, 23, 3, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, HeaderComponent_div_50_Template, 50, 5, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 19, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Enter OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](52); return _r5.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "form", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function HeaderComponent_Template_form_ngSubmit_63_listener() { return ctx.onOtp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "mat-form-field", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Enter Otp");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Verify ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "ngx-spinner", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Please wait... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](20, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](22, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](23, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](24, _c5))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](25, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](26, _c6))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](27, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](28, _c7))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](29, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](30, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type == "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](31, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.otpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.otpForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullScreen", true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepicker"]], styles: [".bg-dark[_ngcontent-%COMP%] {\n  background-color: #e20613 !important;\n  color: black !important;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .navbar-nav[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  color: #e20613;\n}\n\n  .mat-form-field-wrapper {\n  margin-bottom: -0.65em !important;\n}\n\n.view-seats[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid #e20613;\n  font-size: 13px;\n  padding: 6px 10px;\n  text-transform: capitalize;\n  color: black;\n  margin-top: 5px;\n  font-weight: 700;\n  background-color: #e20613;\n  border-radius: 20px;\n}\n\n.offcanvas[_ngcontent-%COMP%], .offcanvas-lg[_ngcontent-%COMP%], .offcanvas-md[_ngcontent-%COMP%], .offcanvas-sm[_ngcontent-%COMP%], .offcanvas-xl[_ngcontent-%COMP%], .offcanvas-xxl[_ngcontent-%COMP%] {\n  width: 280px !important;\n}\n\n  .cdk-overlay-container {\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLGlDQUFBO0FBR0o7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksdUJBQUE7QUFJSjs7QUFEQTtFQUNJLGFBQUE7QUFJSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctZGFya3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIwNjEzICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6YmxhY2sgIWltcG9ydGFudDtcbn1cbi5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUsIC5uYXZiYXItbmF2IC5zaG93Pi5uYXYtbGluayB7XG4gICAgY29sb3I6I2UyMDYxMztcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcbiAgICBtYXJnaW4tYm90dG9tOiAtMC42NWVtICFpbXBvcnRhbnQ7XG4gfVxuXG4udmlldy1zZWF0cyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMjA2MTM7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjA2MTM7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5vZmZjYW52YXMsIC5vZmZjYW52YXMtbGcsIC5vZmZjYW52YXMtbWQsIC5vZmZjYW52YXMtc20sIC5vZmZjYW52YXMteGwsIC5vZmZjYW52YXMteHhsIHtcbiAgICB3aWR0aDogMjgwcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICAgIHotaW5kZXg6IDk5OTk7XG59XG4iXX0= */"] });


/***/ }),

/***/ "OlR4":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CommonService {
    constructor() {
        this.bookingdata = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        this.token = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this.review_info = this.bookingdata.asObservable();
        this.loginModal = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.login_modal = this.loginModal.asObservable();
        this.booking_token = this.token.asObservable();
        this.authenticated = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.auth = this.authenticated.asObservable();
    }
    openLoginModal() {
        this.loginModal.next(true);
    }
    setBooking(data) {
        this.bookingdata.next(data);
        localStorage.setItem('booking_info', JSON.stringify(data));
    }
    setToken(text) {
        this.token.next(text);
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PYdw":
/*!****************************************************!*\
  !*** ./src/app/views/privacy/privacy.component.ts ***!
  \****************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");



class PrivacyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyComponent.ɵfac = function PrivacyComponent_Factory(t) { return new (t || PrivacyComponent)(); };
PrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyComponent, selectors: [["app-privacy"]], decls: 86, vars: 0, consts: [[1, "hero-section", "section", "pt-0"], [1, "container", "pt-5"], [1, "section", "container"], [1, "row"], [1, "col-12", "col-lg-12"]], template: function PrivacyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " The Internet is an amazing tool. It has the power to change the way we live, and we're starting to see that potential today. With only a few mouse-clicks, you can follow the news, look up facts, buy goods and services, and communicate with others from around the world. It's important to COAST BUS to help our customers retain their privacy when they take advantage of all the Internet has to offer. We believe your business is no one else's. Your privacy is important to you and to us. So we'll protect the information you share with us. To protect your privacy, COAST BUS follows different principles in accordance with worldwide practices for customer privacy and data protection. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "We won\u2019t sell or give away your name, mail address, phone number, email address or any other information to anyone.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "We\u2019ll use state-of-the-art security measures to protect your information from unauthorized users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "NOTICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " We will ask you when we need information that personally identifies you (personal information) or allows us to contact you. Generally, this information is requested when you create a Registration ID on the site or when you download free software, enter a contest, order email newsletters or join a limited-access premium site. We use your Personal Information for four primary purposes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "To make the site easier for you to use by not having to enter information more than once");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "To help you quickly find software, services or information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "To help us create content most relevant to you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "To alert you to product upgrades, special offers, updated information and other new services from COAST BUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "CONSENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " If you choose not to register or provide personal information, you can still use most of http://coastbus.co.ke. But you will not be able to access areas that require registration. COAST BUS occasionally allows other companies to offer our registered customers information about their products and services, using postal mail only. If you do not want to receive these offers, you may select the option stating that you do not wish to receive marketing materials from third parties. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "ACCESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " We will provide you with the means to ensure that your personal information is correct and current. You may review and update this information at any time at the Visitor Center. There, you can: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "View and edit personal information you have already given us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Tell us whether you want us to send you marketing information, or whether you want third parties to send you their offers by postal mail.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Sign up for electronic newsletters about our services and products.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Register. Once you register, you won't need to do it again. Wherever you go on http://coastbus.co.ke, your information stays with you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "SECURITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " COAST BUS has taken strong measures to protect the security of your personal information and to ensure that your choices for its intended use are honored. We take strong precautions to protect your data from loss, misuse, unauthorized access or disclosure, alteration, or destruction. We guarantee your e-commerce transactions to be 100% safe and secure. When you place orders or access your personal account information, you're utilizing secure server software SSL, which encrypts your personal information before it's sent over the Internet. SSL is one of the safest encryption technologies available. COAST BUS strictly protects the security of your personal information and honors your choices for its intended use. We carefully protect your data from loss, misuse, unauthorized access or disclosure, alteration, or destruction. Your personal information is never shared outside the company without your permission, except under conditions explained above. Inside the company, data is stored in password-controlled servers with limited access. Your information may be stored and processed in Kenya or any other country where COAST BUS, its subsidiaries, affiliates or agents are located. You also have a significant role in protecting your information. No one can see or edit your personal information without knowing your user name and password, so do not share these with others. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "NOTICE TO PARENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Parents or guardians: we want to help you guard your children's privacy. We encourage you to talk to your children about safe and responsible use of their Personal Information while using the Internet. The COAST BUS site does not publish content that is targeted to children. However, if you are concerned about your children providing COAST BUS any personal information without your consent, COAST BUS offers a Kids account. It allows parents to give parental consent for the collection, use and sharing of children\u2019s (ages 12 and under) personal information online. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "ENFORCEMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "If for some reason you believe COAST BUS has not adhered to these principles, please notify us by email at coast@coastbus.com, and we will do our best to determine and correct the problem promptly. Be certain the words Privacy Policy are in the Subject line.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "ELECTRONIC PRODUCT REGISTRATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " When you buy and install a new product, we may ask you to register your purchase electronically. When you do, we merge your registration information with any information you've already left with us (we call that information your personal profile). If you haven't previously registered with us, we create a personal profile for you from your product registration information. If you ever want to review or update that information, you can visit the Profile Center, click on Update Profile, and edit any of the Personal Information in your profile. If you haven't already created a Registration ID, we will ask you to do so. This ensures that only you can access your information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "CUSTOMER PROFILES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " As mentioned above, every registered customer has a unique personal profile. Each profile is assigned a unique personal identification number, which helps us ensure that only you can access your profile. When you register, we create your profile, assign a personal identification number, then send this personal identification number back to your hard drive in the form of a cookie, which is a very small bit of code. This code is uniquely yours. It is your passport to seamless travel across [http://coastbus.co.ke], allowing you to download free software, order free newsletters, and visit premium sites without having to fill out registration forms with information you've already provided. Even if you switch computers, you won't have to re-register just use your Registration ID to identify yourself. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "WHAT WE DO WITH THE INFORMATION YOU SHARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " When you join us, you provide us with your contact information, including Names, Phone Numbers, Age, Sex, ID Number and email address. We use this information to send you updates about your order, questionnaires to measure your satisfaction with our service and announcements about new and exciting services that we offer. When you order from us, we ask for your credit card number and billing address. We use this information only to bill you for the product(s) you order at that time. For your convenience, we do save billing information in case you want to order from us again, but we don't use this information again without your permission.\nWe occasionally hire other companies to provide limited services on our behalf, including packaging, mailing and delivering purchases, answering customer questions about products or services, sending postal mail and processing event registration. We will only provide those companies the information they need to deliver the service, and they are prohibited from using that information for any other purpose.\nCOAST BUS will disclose your personal information, without notice, only if required to do so by law or in the good faith belief that such action is necessary to: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Conform to the edicts of the law or comply with legal process served on COAST BUS or the site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Protect and defend the rights or property of COAST BUS and its family of Websites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Act in urgent circumstances to protect the personal safety of users of COAST BUS, its Websites, or the public.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YWN5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "QlPV":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















function HomeComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r7.city_name, " ");
} }
function HomeComponent_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r8.city_name, " ");
} }
class HomeComponent {
    constructor(formBuilder, datePipe, route, service, http) {
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.route = route;
        this.service = service;
        this.http = http;
        this.cities = [];
        this.date = new Date();
        this.destinations = [];
    }
    ngOnInit() {
        this.getLocation();
        this.searchForm = this.formBuilder.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            returnDate: [''],
            sourceCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            destCity: ['',],
            dest_id: ['',],
            type: ['1'],
        });
        this.getCities();
        this.filteredOptions = this.searchForm.get('sourceCity').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => {
            if (value.id) {
                this.searchForm.patchValue({ "city_id": value.id, "sourceCity": value.city_name });
                this.destination();
            }
            const name = typeof value === 'string' ? value : value === null || value === void 0 ? void 0 : value.city_name;
            return name ? this._filter(name) : this.cities.slice();
        }));
        this.destOptions = this.searchForm.get('destCity').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => {
            if (value.id) {
                this.searchForm.patchValue({ "dest_id": value.id, "destCity": value.city_name });
            }
            const name = typeof value === 'string' ? value : value === null || value === void 0 ? void 0 : value.city_name;
            return name ? this._filterDestinations(name) : this.destinations.slice();
        }));
    }
    get f() { return this.searchForm.controls; }
    onSubmit() {
        let data = this.searchForm.value;
        if (!data.returnDate) {
            this.route.navigate(['buslist', data.city_id, data.dest_id, this.datePipe.transform(data.date, 'yyyy-MM-dd'), data.sourceCity, data.destCity, '']);
        }
        else {
            this.route.navigate(['buslist', data.city_id, data.dest_id, this.datePipe.transform(data.date, 'yyyy-MM-dd'), data.sourceCity, data.destCity, this.datePipe.transform(data.returnDate, 'yyyy-MM-dd')]);
            // this.route.navigate(['buslist',data.city_id,data.dest_id,this.datePipe.transform(data.date,'yyyy-MM-dd'),data.sourceCity,data.destCity,this.datePipe.transform(data.returnDate,'yyyy-MM-dd')])
        }
    }
    getCities() {
        this.service.getCities().subscribe((res) => {
            this.cities = res.data;
        });
    }
    _filter(name) {
        const filterValue = name.toLowerCase();
        return this.cities.filter(option => option.city_name.toLowerCase().includes(filterValue));
    }
    _filterDestinations(name) {
        const filterValue = name.toLowerCase();
        return this.destinations.filter(option => option.city_name.toLowerCase().includes(filterValue));
    }
    destination() {
        this.service.getDestinations(this.searchForm.get('city_id').value).subscribe((res) => {
            this.destinations = res.data;
        });
    }
    setDate(item) {
        this.return_min = new Date(item);
        this.return_min.setDate(this.return_min.getDate());
    }
    getLocation() {
        this.http.get('http://ip-api.com/json').subscribe((response) => {
            if (response.country == 'Kenya') {
                sessionStorage.setItem("currencyId", "1");
            }
            else {
                sessionStorage.setItem("currencyId", "3");
            }
        });
    }
    ngAfterViewInit() {
        const textWrapper = document.querySelector('.an-1');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({ loop: true })
            .add({
            targets: '.an-1 .letter',
            scale: [4, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 70 * i
        }).add({
            targets: '.an-1',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 3000
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]])], decls: 178, vars: 15, consts: [["data-bs-ride", "carousel", "data-bs-config", "{\"wrap\":true}", 1, "carousel", "slide"], ["carousel", ""], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../../assets/img/bg2.png", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "../../../assets/img/bg1.png", "alt", "...", 1, "d-block", "w-100"], ["src", "../../../assets/img/bg3.png", "alt", "...", 1, "d-block", "w-100"], ["src", "../../../assets/img/bg4.png", "alt", "...", 1, "d-block", "w-100"], [1, "section", "container"], [1, "card", "border-0", "shadow", "p-lg-4"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-3"], ["appearance", "outline"], ["matInput", "", "formControlName", "sourceCity", "placeholder", "From", 3, "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "destCity", "placeholder", "Destination", 3, "matAutocomplete"], ["dest", "matAutocomplete"], ["matInput", "", "formControlName", "date", "placeholder", "Date", 3, "min", "matDatepicker", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "formControlName", "returnDate", "placeholder", "Return Date", 3, "min", "matDatepicker"], ["picker", ""], [1, "col-md-12"], [1, "btn", "pull-right", 2, "background-color", "rgb(230,23,115)", "color", "white"], [1, "fa-solid", "fa-search"], [1, "container", 2, "bottom", "3rem", "position", "relative", "margin-top", "40px"], [1, "feature-custom", "text-center", "hidden-xs", "ng-scope", 2, "background-color", "#0e6ba8"], [1, "col-ld-3", "col-md-3", "col-sm-3", "text-center", 2, "padding", "0", "border-right", "solid 1px white"], [1, "feature-icon"], ["src", "../../assets/img/display1.png", 2, "width", "60px"], [2, "font-size", "16px", "font-weight", "bold", "color", "white"], ["src", "../../assets/img/display2.png", 2, "width", "60px"], ["src", "../../assets/img/display3.png", 2, "width", "60px"], [1, "col-ld-3", "col-md-3", "col-sm-3", "text-center", 2, "padding", "0"], ["src", "../../assets/img/display4.png", 2, "width", "60px"], [1, "container"], [1, "section-body"], [1, "row", "row-cols-1", "row-cols-md-2", "g-2"], [1, "col"], ["src", "../../../assets/img/kidiaslide1.png", 1, "d-block", "w-100"], ["id", "carouselExampleSlidesOnly", "data-bs-ride", "carousel", 1, "carousel", "slide"], ["src", "../../../assets/img/kidiaslide2.png", 1, "d-block", "w-100"], ["src", "../../../assets/img/kidiaslide3.png", 1, "d-block", "w-100"], [1, "stats-section", "section", "container"], [1, "row", "align-items-stretch", "h-100"], [1, "col-12", "col-lg-12"], ["align", "center"], [1, "row", "g-4", "row-cols-1", "row-cols-lg-3"], [1, "card", "border-0", "shadow"], ["src", "assets/img/save.png", "alt", "", 1, "center", 2, "height", "165px"], [1, "fs-4"], ["src", "assets/img/routes.png", "alt", "", 1, "center"], ["src", "assets/img/credits.png", "alt", "", 1, "center"], [1, "display-6", "fw-normal"], [1, "row", "row-cols-1", "row-cols-md-3", "g-4"], ["src", "../../../assets/img/delivery.png", "alt", "..."], [1, "card-img-overlay"], [1, "badge", "text-bg-light"], [1, "card-title"], [1, "card-text"], ["src", "../../../assets/img/fleet.png", "alt", "...", 2, "height", "250px"], ["src", "../../../assets/img/map.png", "alt", "...", 2, "height", "250px"], [1, "blog-section", "section", "container"], [1, "col-12", "col-md-4"], [1, "col-sm-6"], ["src", "../../../assets/img/playstore.png", "alt", "", 2, "width", "100%", "object-fit", "cover"], ["src", "../../../assets/img/appstore.png", "alt", "", 2, "width", "100%", "object-fit", "cover"], [1, "col-sm-8", "col-8"], [1, "col-sm-4"], ["src", "../../../assets/img/boss.png", "alt", "", 2, "width", "100%", "object-fit", "cover"], [1, "col-sm-2"], ["src", "../../../assets/img/voltic.svg", "alt", "", 2, "width", "100%", "object-fit", "cover"], [3, "value"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_17_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-autocomplete", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, HomeComponent_mat_option_26_Template, 2, 2, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-autocomplete", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, HomeComponent_mat_option_35_Template, 2, 2, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_41_listener() { return ctx.setDate(ctx.f.date.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "mat-datepicker-toggle", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "mat-datepicker", null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Return Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "mat-datepicker-toggle", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "mat-datepicker", null, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, " Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "VIP Treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "On Board Wifi Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Power Outlets");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Extra Legroom");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "h2", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Why Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "h3", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "Pay less when using our new Mobile App. You can save up to 25% of your Promo Cash balance in a single purchase.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "h3", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Multiple Routes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "We cover multiple routes and the widest connectivity in Kenya,");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](119, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "h3", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Earn Credits");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Receive more credit during promotional periods which will be added into your Promo Cash account.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](131, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "Parcel Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "h5", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Parcel Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "We deliver parcels to all major towns in the country.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](142, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "Fleet Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "h5", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "Fleet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "Our has VIP Treatment ,Onboard Wifi Available,Power Outlets and Extra Legroom");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](153, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](156, "Routes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "h5", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "Routes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "We operate in Tanzania,Kenya and we provide the best Customer Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](167, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](169, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](172, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](174, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](176, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](177, "app-footer");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](25);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](34);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](44);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 11, ctx.filteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 13, ctx.destOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", ctx.date)("matDatepicker", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", ctx.return_min)("matDatepicker", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r6);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepicker"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["AsyncPipe"]], styles: [".mat-tab-label {\n  padding: 0px !important;\n  justify-content: left !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix {\n  padding: 0.6em 0px !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix > span.mat-form-field-label-wrapper {\n  top: -1.3em !important;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75) !important;\n  width: 133.33333% !important;\n}\n\n.center[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.feature-custom[_ngcontent-%COMP%] {\n  text-align: center;\n  border-radius: 200px;\n  background: #fff;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n  padding: 20px 0;\n  list-style: none;\n  color: white;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBR0k7RUFBK0osNkJBQUE7QUFDbks7O0FBQUk7RUFBa00sc0JBQUE7QUFJdE07O0FBRkk7RUFDQSxvREFBQTtFQUNBLDRCQUFBO0FBS0o7O0FBRk07RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFLUjs7QUFETTtFQUNFLGtCQUFBO0VBQ0Ysb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUlOIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICBcbiAgICA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lID4gZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgPiBkaXYubWF0LWZvcm0tZmllbGQtZmxleCA+IGRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeCAgeyBwYWRkaW5nOiAwLjZlbSAwcHggIWltcG9ydGFudCB9XG4gICAgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSA+IGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyID4gZGl2Lm1hdC1mb3JtLWZpZWxkLWZsZXggPiBkaXYubWF0LWZvcm0tZmllbGQtaW5maXggPiBzcGFuLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgeyB0b3A6IC0xLjNlbSAhaW1wb3J0YW50IH1cbiAgICBcbiAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjFlbSkgc2NhbGUoLjc1KSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMzMuMzMzMzMlICFpbXBvcnRhbnQ7XG4gICAgfVxuICBcbiAgICAgIC5jZW50ZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cblxuXG4gICAgICAuZmVhdHVyZS1jdXN0b217XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9Il19 */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'travel';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Ukjy":
/*!**************************************************!*\
  !*** ./src/app/views/ticket/ticket.component.ts ***!
  \**************************************************/
/*! exports provided: TicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketComponent", function() { return TicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");





class TicketComponent {
    constructor() { }
    ngOnInit() {
    }
}
TicketComponent.ɵfac = function TicketComponent_Factory(t) { return new (t || TicketComponent)(); };
TicketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketComponent, selectors: [["app-ticket"]], decls: 31, vars: 0, consts: [[1, "hero-section", "section", "pt-0"], [1, "container", "pt-5"], [1, "blog-section", "section", "container"], [1, "text-primary", 2, "text-align", "center", "font-size", "90px"], [1, "fa-solid", "fa-receipt"], [2, "text-align", "center"], [1, "row"], [1, "col-md-4", "offset-md-4"], [1, "col-sm-12"], ["appearance", "outline"], ["matInput", "", "placeholder", "Ticket No"], [1, "col-sm-6"], ["matInput", "", "placeholder", "Contry Code"], ["matInput", "", "placeholder", "Phone"], [1, "btn", "btn-success"], [1, "fa-solid", "fa-print"]], template: function TicketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Print Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ticket No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Country Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".mat-tab-label {\n  padding: 0px !important;\n  justify-content: left !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix {\n  padding: 0.6em 0px !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix > span.mat-form-field-label-wrapper {\n  top: -1.3em !important;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75) !important;\n  width: 133.33333% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RpY2tldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHVCQUFBO0VBQ0EsZ0NBQUE7QUFBSjs7QUFJQTtFQUNJLDZCQUFBO0FBREo7O0FBSUE7RUFDSSxzQkFBQTtBQURKOztBQUlBO0VBQ0ksb0RBQUE7RUFDQSw0QkFBQTtBQURKIiwiZmlsZSI6InRpY2tldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuXG46Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lPmRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyPmRpdi5tYXQtZm9ybS1maWVsZC1mbGV4PmRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogMC42ZW0gMHB4ICFpbXBvcnRhbnRcbn1cblxuOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZT5kaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlcj5kaXYubWF0LWZvcm0tZmllbGQtZmxleD5kaXYubWF0LWZvcm0tZmllbGQtaW5maXg+c3Bhbi5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICB0b3A6IC0xLjNlbSAhaW1wb3J0YW50XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEzMy4zMzMzMyUgIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _views_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/header/header.component */ "MR1q");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/footer/footer.component */ "FPq/");
/* harmony import */ var _views_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/about/about.component */ "7wzR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _views_ticket_ticket_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/ticket/ticket.component */ "Ukjy");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _views_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/contact/contact.component */ "0HjG");
/* harmony import */ var _views_buslist_buslist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/buslist/buslist.component */ "IG16");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _backend_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./backend.interceptor */ "qyK6");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _views_return_trip_return_trip_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/return-trip/return-trip.component */ "ehcn");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var stepper_library__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! stepper-library */ "v1tt");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./views/profile/profile.component */ "wF9P");
/* harmony import */ var _views_payments_payments_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./views/payments/payments.component */ "+yPM");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _views_return_return_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./views/return/return.component */ "GF8S");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _views_passengers_passengers_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./views/passengers/passengers.component */ "lWMQ");
/* harmony import */ var _views_onward_trip_onward_trip_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./views/onward-trip/onward-trip.component */ "DiR1");
/* harmony import */ var _views_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./views/privacy/privacy.component */ "PYdw");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./views/register/register.component */ "4XPS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _views_trip_review_trip_review_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./views/trip-review/trip-review.component */ "+0wo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/core */ "fXoL");

















































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HTTP_INTERCEPTORS"], useClass: _backend_interceptor__WEBPACK_IMPORTED_MODULE_21__["BackendInterceptor"], multi: true },
        _angular_common__WEBPACK_IMPORTED_MODULE_42__["DatePipe"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__["MatBadgeModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_27__["ModalModule"].forRoot(),
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
            stepper_library__WEBPACK_IMPORTED_MODULE_30__["StepsetModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_31__["TabsModule"].forRoot(),
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_36__["NgxSpinnerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_43__["ClipboardModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_37__["ToastrModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _views_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _views_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _views_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _views_ticket_ticket_component__WEBPACK_IMPORTED_MODULE_12__["TicketComponent"],
        _views_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
        _views_buslist_buslist_component__WEBPACK_IMPORTED_MODULE_15__["BuslistComponent"],
        _views_return_trip_return_trip_component__WEBPACK_IMPORTED_MODULE_28__["ReturnTripComponent"],
        _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_32__["ProfileComponent"],
        _views_payments_payments_component__WEBPACK_IMPORTED_MODULE_33__["PaymentsComponent"],
        _views_return_return_component__WEBPACK_IMPORTED_MODULE_35__["ReturnComponent"],
        _views_passengers_passengers_component__WEBPACK_IMPORTED_MODULE_38__["PassengersComponent"],
        _views_onward_trip_onward_trip_component__WEBPACK_IMPORTED_MODULE_39__["OnwardTripComponent"],
        _views_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_40__["PrivacyComponent"],
        _views_register_register_component__WEBPACK_IMPORTED_MODULE_41__["RegisterComponent"],
        _views_trip_review_trip_review_component__WEBPACK_IMPORTED_MODULE_44__["TripReviewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__["MatBadgeModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_27__["ModalModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
        stepper_library__WEBPACK_IMPORTED_MODULE_30__["StepsetModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_31__["TabsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_36__["NgxSpinnerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_43__["ClipboardModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_37__["ToastrModule"]] }); })();


/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    token: '11065004-E295-494E-BD39-02264082B68E'
};


/***/ }),

/***/ "ehcn":
/*!************************************************************!*\
  !*** ./src/app/views/return-trip/return-trip.component.ts ***!
  \************************************************************/
/*! exports provided: ReturnTripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnTripComponent", function() { return ReturnTripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_booking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/booking.service */ "p7Zy");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "OlR4");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");
/* harmony import */ var _onward_trip_onward_trip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../onward-trip/onward-trip.component */ "DiR1");
/* harmony import */ var _return_return_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../return/return.component */ "GF8S");











function ReturnTripComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-onward-trip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("proceed", function ReturnTripComponent_div_31_Template_app_onward_trip_proceed_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.countinueReturn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modify", ctx_r0.modify);
} }
function ReturnTripComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-return", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modify", ctx_r1.modify);
} }
const _c0 = function (a0, a1, a2) { return { enable: a0, disable: a1, "text-muted": a2 }; };
class ReturnTripComponent {
    constructor(service, activated, formBuilder, bookingService, commonService) {
        this.service = service;
        this.activated = activated;
        this.formBuilder = formBuilder;
        this.bookingService = bookingService;
        this.commonService = commonService;
        this.modify = false;
        this.params = {};
        this.selected = "onward";
    }
    ngOnInit() {
        this.activated.paramMap.subscribe((res) => {
            this.params.source_city_id = res.get('id1');
            this.params.destination_city_id = res.get('id2');
            this.params.travel_date = res.get('id3');
            this.params.source_city = res.get('id4');
            this.params.dest_city = res.get('id5');
            this.params.return_date = res.get('id6');
            this.bookingService.setBookingParams(this.params);
        });
    }
    countinueReturn(value) {
        if (value) {
            this.selected = 'return';
        }
    }
}
ReturnTripComponent.ɵfac = function ReturnTripComponent_Factory(t) { return new (t || ReturnTripComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_booking_service__WEBPACK_IMPORTED_MODULE_4__["BookingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"])); };
ReturnTripComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReturnTripComponent, selectors: [["app-return-trip"]], decls: 34, vars: 21, consts: [[1, "hero-section", "section", "pt-0"], [1, "container", "pt-5"], [1, "row"], [1, "col-sm-6", "onward-return-tab", "switch-nav", 3, "ngClass"], [1, "col-sm-12"], [1, "btn", 2, "float", "right", "margin-right", "5px", "background-color", "black", "border-radius", "5px", "color", "white", 3, "disabled", "click"], [1, "fa-solid", "fa-magnifying-glass"], [1, "col-sm-12", "col-12"], [1, "fa-solid", "fa-chevron-right"], [1, "fas", "fa-calendar-day", "mx-2"], [1, "col-sm-6", "switch-nav", "onward-return-tab", 3, "ngClass"], [1, "", 3, "ngSwitch"], [4, "ngSwitchCase"], [3, "modify", "proceed"], [3, "modify"]], template: function ReturnTripComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " ONWARD JOURNEY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnTripComponent_Template_button_click_8_listener() { return ctx.modify = !ctx.modify; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Modify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " RETURN JOURNEY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnTripComponent_Template_button_click_21_listener() { return ctx.modify = !ctx.modify; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Modify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ReturnTripComponent_div_31_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ReturnTripComponent_div_32_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](13, _c0, ctx.selected == "onward", ctx.selected != "onward", ctx.selected != "onward"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selected != "onward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.params.source_city, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.params.dest_city, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.params.travel_date, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](17, _c0, ctx.selected == "return", ctx.selected != "return", ctx.selected != "return"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selected != "return");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.params.dest_city, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.params.source_city, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.params.return_date, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "onward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "return");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _onward_trip_onward_trip_component__WEBPACK_IMPORTED_MODULE_9__["OnwardTripComponent"], _return_return_component__WEBPACK_IMPORTED_MODULE_10__["ReturnComponent"]], styles: [".hd[_ngcontent-%COMP%] {\n  padding: 0 0 0 0;\n  margin-top: 0;\n}\n\n.onward-return-tab[_ngcontent-%COMP%] {\n  background-color: #ee6a71;\n  color: white;\n}\n\n.enable[_ngcontent-%COMP%] {\n  background-color: #e51f2b;\n}\n\n.disable[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.switch-nav[_ngcontent-%COMP%] {\n  padding-left: 2em;\n  padding-top: 1em;\n  padding-bottom: 0.9em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JldHVybi10cmlwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxvQkFBQTtBQUVKOztBQUFBO0VBQ0ksc0JBQUE7QUFHSjs7QUFEQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUlKIiwiZmlsZSI6InJldHVybi10cmlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaGQge1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm9ud2FyZC1yZXR1cm4tdGFiIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZTZhNzE7XG4gICAgY29sb3I6d2hpdGU7XG59XG4uZW5hYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlNTFmMmI7XG59XG4uZGlzYWJsZXtcbiAgICBwb2ludGVyLWV2ZW50czpub25lO1xuICB9XG4uY29udGFpbmVyLWZsdWlke1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG4uc3dpdGNoLW5hdntcbiAgICBwYWRkaW5nLWxlZnQ6MmVtO1xuICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuOWVtO1xufSJdfQ== */"] });


/***/ }),

/***/ "j0re":
/*!********************************************!*\
  !*** ./src/app/services/return.service.ts ***!
  \********************************************/
/*! exports provided: ReturnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnService", function() { return ReturnService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service.service */ "rRxC");
/* harmony import */ var _buslist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buslist.service */ "AtJV");
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking.service */ "p7Zy");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common.service */ "OlR4");






class ReturnService {
    constructor(service, busListService, bookingService, commonService) {
        this.service = service;
        this.busListService = busListService;
        this.bookingService = bookingService;
        this.commonService = commonService;
        this.selectedseat = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.totalTicketPrice = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
        this.defaultTripPriceList = [];
        this.selectedBoarding = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        this.selectedDropping = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        this.selectedTripData = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        this.seatList = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.params = {};
        this.seatPriceNotAviable = '';
        this.notAviablePrice = '';
        this.normalRemainingSeatLimit = 0;
        this.vipRemainingSeatLimit = 0;
        this.bclassRemainingSeatLimit = 0;
        this.selectedSeatsData = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        this.exceedSeatLimit = false;
        this.boardingPoint = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.droppingPoint = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.bookingdata = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        this.seats = this.seatList.asObservable();
        this.trip_data = this.selectedTripData.asObservable();
        this.bording_points = this.boardingPoint.asObservable();
        this.dropping_points = this.droppingPoint.asObservable();
        this.total = this.totalTicketPrice.asObservable();
        this.selectedseatdata = this.selectedSeatsData.asObservable();
        this.selected_seats = this.selectedseat.asObservable();
        this.review_info = this.bookingdata.asObservable();
    }
    toggleBusDetail(eachbusdetail) {
        this.selectedseat.next([]);
        this.totalTicketPrice.next(0);
        this.defaultTripPriceList = [];
        this.selectedBoarding.next({});
        this.selectedDropping.next({});
        if (this.selectedTripData.value.bus_id == eachbusdetail.bus_id && this.selectedTripData.value.delayedDate == eachbusdetail.delayedDate) {
            this.selectedTripData.next({});
            this.seatList.next([]);
        }
        else {
            this.selectedTripData.next(eachbusdetail);
            this.getseatType();
            this.fetchSeatDetails(eachbusdetail);
            this.getEachTripBoradingDropping(eachbusdetail.bus_id);
            this.seatList.next([]);
        }
    }
    fetchSeatDetails(busDetails) {
        this.defaultTripPriceList = busDetails.defaultTripPriceList;
        // this.seatLoading = true;
        var params = {
            source_city_id: this.params.source_city_id,
            destination_city_id: this.params.destination_city_id,
            travel_date: this.params.travel_date,
            bus_id: busDetails.bus_id,
            delayedFlag: this.selectedTripData.value.delayedFlag,
            delayedDate: this.selectedTripData.value.delayedDate,
        };
        this.service.getSeats(params).subscribe((res) => {
            this.calculateSeatsData(res);
            this.busListService.setOutwardSeatsList(res);
        });
    }
    calculateSeatsData(data) {
        this.seatPriceNotAviable = "";
        this.notAviablePrice = "";
        this.seatLoading = false;
        this.seatList.next(data.data);
        console.log();
        this.priceList = data.priceList;
        for (var i = 0; i < this.seatList.value.length; i++) {
            for (var j = 0; j < this.defaultTripPriceList.length; j++) {
                if (this.seatList.value[i].seat_type == this.defaultTripPriceList[j].seatType) {
                    this.seatList.value[i].ticketPrice = this.defaultTripPriceList[j].amount;
                    this.seatList.value[i].flatTicketPrice = this.defaultTripPriceList[j].amount;
                    this.seatList.value[i].flatSaleId = this.defaultTripPriceList[j].flatSaleId;
                    this.seatList.value[i].actualTicketPrice = this.defaultTripPriceList[j].originalFare;
                    this.seatList.value[i].currency = this.defaultTripPriceList[j].currencyCode;
                }
            }
        }
    }
    getEachTripBoradingDropping(id) {
        var param = {
            "source": this.params.source_city_id,
            "destination": this.params.destination_city_id,
            "trip": id,
            "booking_date": this.params.return_date,
            "delayedFlag": this.selectedTripData.value.delayedFlag,
            "delayedDate": this.selectedTripData.value.delayedDate,
        };
        this.service.getBoardingDroping(param).subscribe((data) => {
            if (data) {
                this.busListService.setOutwardBoardingDropping(data);
                this.assignBoardingDroppingPoint(data);
            }
        });
    }
    ;
    assignBoardingDroppingPoint(data) {
        this.boardingPoint.next(data.boarding);
        this.droppingPoint.next(data.dropping);
    }
    setBookingParams(data) {
        this.params = data;
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
    }
    ;
    changeBoarding(item) {
        this.selectedBoarding.next(item);
    }
    ;
    selectSeat(eachseat) {
        if (eachseat.ticketPrice > 0) {
            if (!this.notAviablePrice) {
                if (eachseat.seat_type.toLowerCase().trim() === "staff" || eachseat.seat_name.toLowerCase().trim() === "staff" || eachseat.seat_type.toLowerCase().trim() === "1a" || eachseat.seat_name.toLowerCase().trim() === "1a") {
                    console.log("This.is staff seat");
                }
                else {
                    if (!eachseat.selection_status) {
                        var seatLimit = this.selectedTripData.value.isPromotional ? this.selectedTripData.value.seatSelectionLimit : 6;
                        if (this.checkSeatAlreadyExits(eachseat.seat_id)) {
                            if (this.selectedTripData.value.isPromotional && this.selectedTripData.value.seatSelectionLimit === 0) {
                                this.exceedSeatLimit = false;
                                this.selectedseat.value.push(eachseat);
                                this.getseatType();
                            }
                            else if (this.selectedseat.value.length + 1 > seatLimit) {
                                alert("You can not select more than" + " " + seatLimit + " " + "seat");
                                this.exceedSeatLimit = true;
                            }
                            else {
                                this.exceedSeatLimit = false;
                                this.selectedseat.value.push(eachseat);
                                this.getseatType();
                            }
                        }
                        this.checkSelectedSeats(eachseat.seat_id, "fromselect");
                    }
                }
            }
        }
        else {
            if (eachseat.seat_type.toLowerCase().trim() === "driver" || eachseat.seat_name.toLowerCase().trim() === "door") {
                return false;
            }
            else if (eachseat.seat_type.toLowerCase().trim() === "staff" || eachseat.seat_name.toLowerCase().trim() === "staff") {
                console.log("This is staff seat");
            }
            else {
                console.log("Seat price not available for selected seat");
            }
        }
    }
    ;
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
                }
                else {
                    if (eachSeatList.selectSeat) {
                        eachSeatList.selectSeat = false;
                    }
                    else {
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
            source_city: this.params.source_city,
            dest_city: this.params.dest_city,
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
            currencyId: 'KES',
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
        let data = {};
        this.bookingService.review_info.subscribe((res) => {
            data = res;
            data.returnticket = booking;
            data.totalTicketPrice = this.totalTicketPrice.value + res.totalTicketPrice;
            this.commonService.setBooking(data);
        });
        this.getAllSelectSeatName();
    }
    ;
    setBoadingDropping() {
        let booking = this.bookingdata.value;
        booking.boardingPointId = (this.selectedBoarding.value) ? this.selectedBoarding.value.id : "",
            booking.droppingPointId = (this.selectedDropping.value) ? this.selectedDropping.value.id : "",
            booking.boardingPointname = (this.selectedBoarding.value) ? this.selectedBoarding.value.name : "",
            booking.droppingPointname = (this.selectedDropping.value) ? this.selectedDropping.value.name : "";
        this.bookingdata.next(booking);
    }
    getAllSelectSeatName() {
        this.selectSeatName = [];
        for (var i = 0; i < this.selectedseat.value.length; i++) {
            this.selectSeatName.push(this.selectedseat.value[i].seat_name);
        }
    }
    ;
    reset() {
        this.bookingdata.next({});
        this.selectedseat.next([]);
        this.selectedSeatsData.next({});
        this.selectedTripData.next({});
        this.commonService.bookingdata.next({});
        this.commonService.setBooking({});
        this.totalTicketPrice.next(0);
    }
}
ReturnService.ɵfac = function ReturnService_Factory(t) { return new (t || ReturnService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_buslist_service__WEBPACK_IMPORTED_MODULE_3__["BuslistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_booking_service__WEBPACK_IMPORTED_MODULE_4__["BookingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"])); };
ReturnService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ReturnService, factory: ReturnService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "lWMQ":
/*!**********************************************************!*\
  !*** ./src/app/views/passengers/passengers.component.ts ***!
  \**********************************************************/
/*! exports provided: PassengersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassengersComponent", function() { return PassengersComponent; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "OlR4");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















function PassengersComponent_div_13_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Primary Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PassengersComponent_div_13_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Co-Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PassengersComponent_div_13_b_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](", ", ctx_r6.data.returnticket.passenger[index_r3].seat_name, "");
} }
function PassengersComponent_div_13_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", code_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", code_r9, " ");
} }
function PassengersComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PassengersComponent_div_13_p_3_Template, 2, 0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PassengersComponent_div_13_p_4_Template, 2, 0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Seat :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, PassengersComponent_div_13_b_9_Template, 2, 1, "b", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PassengersComponent_div_13_Template_input_ngModelChange_14_listener($event) { const item_r2 = ctx.$implicit; return item_r2.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PassengersComponent_div_13_Template_input_ngModelChange_19_listener($event) { const item_r2 = ctx.$implicit; return item_r2.age = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PassengersComponent_div_13_Template_mat_select_ngModelChange_24_listener($event) { const item_r2 = ctx.$implicit; return item_r2.mobileId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, PassengersComponent_div_13_mat_option_25_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PassengersComponent_div_13_Template_input_ngModelChange_30_listener($event) { const item_r2 = ctx.$implicit; return item_r2.mobile = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-radio-group", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PassengersComponent_div_13_Template_mat_radio_group_ngModelChange_32_listener($event) { const item_r2 = ctx.$implicit; return item_r2.gender = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-radio-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Female ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-radio-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Nationality");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PassengersComponent_div_13_Template_input_ngModelChange_44_listener($event) { const item_r2 = ctx.$implicit; return item_r2.nationality = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "National ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PassengersComponent_div_13_Template_input_ngModelChange_49_listener($event) { const item_r2 = ctx.$implicit; return item_r2.id_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", index_r3 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", index_r3 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.seat_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.data == null ? null : ctx_r1.data.returnticket == null ? null : ctx_r1.data.returnticket.passenger);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "seat", item_r2.seat_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "age", item_r2.seat_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "mobileId", item_r2.seat_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r2.mobileId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.codes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "phone", item_r2.seat_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "gender", item_r2.seat_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r2.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "nationality", item_r2.seat_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r2.nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "id_no", item_r2.seat_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r2.id_no);
} }
class PassengersComponent {
    constructor(formBuilder, commonService, service, router) {
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.service = service;
        this.router = router;
        this.codes = ['254', '255'];
        this.data = {};
        this.user = {};
        this.passengers = [{ "position": "Dev" }, { "position": "Eng" }];
        this.passengers_forms = [];
        this.unsetNotRequiredParams = function () {
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
    }
    ngOnInit() {
        if (sessionStorage.getItem('loggedUser') != undefined) {
            this.user = JSON.parse(sessionStorage.getItem('loggedUser'));
        }
        else {
        }
        this.commonService.review_info.subscribe((res) => {
            this.data = res;
            if (Object.entries(res).length == 0) {
                this.router.navigateByUrl('/');
            }
        });
        if (window.confirm("Are you travelling?")) {
            if (Object.keys(this.user).length === 0) {
            }
            else {
                this.data.onwardticket.c_email = this.user.email ? this.user.email : '';
                this.data.onwardticket.currencyId = sessionStorage.getItem('currencyId');
                this.data.onwardticket.passenger[0].name = this.user.name;
                this.data.onwardticket.passenger[0].age = parseInt(this.user.age);
                this.data.onwardticket.passenger[0].gender = (this.user.gender == 'male') ? 'M' : 'F';
                this.data.onwardticket.passenger[0].id_no = this.user.identity_number;
                this.data.onwardticket.passenger[0].mobileId = '254';
                this.data.onwardticket.passenger[0].nationality = this.user.nationality;
                this.data.onwardticket.passenger[0].mobile = this.user.phone;
                this.data.onwardticket.selectedSeat = this.getSeatsBooked(this.data.onwardticket.passenger);
                this.data.onwardticket.bookedThrough = "Web";
            }
        }
    }
    onClickSubmit() {
        delete this.data.onwardticket.fareBreakup;
        let token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 20);
        this.data.onwardticket.passenger.forEach((element, i) => {
            element.bookedThrough = "Web";
            if (this.data.returnticket) {
                delete this.data.returnticket.fareBreakup;
                this.data.returnticket.c_email = element.c_email ? element.c_email : '';
                this.data.returnticket.currencyId = sessionStorage.getItem('currencyId');
                this.data.returnticket.passenger[i].name = element.name;
                this.data.returnticket.passenger[i].age = element.age;
                this.data.returnticket.passenger[i].gender = element.gender;
                this.data.returnticket.passenger[i].id_no = element.id_no;
                this.data.returnticket.passenger[i].mobileId = element.mobileId;
                this.data.returnticket.passenger[i].nationality = element.nationality;
                this.data.returnticket.passenger[i].mobile = element.mobile;
                this.data.returnticket.selectedSeat = this.getSeatsBooked(this.data.returnticket.passenger);
                this.data.returnticket.bookedThrough = "Web";
            }
        });
        this.unsetNotRequiredParams();
        const key = crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8.parse('y(9;d36HtO0QbTaQ');
        const iv = crypto_js__WEBPACK_IMPORTED_MODULE_1__["lib"].WordArray.random(16);
        const encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].encrypt(JSON.stringify({ ticketDetail: this.data, bookedThrough: "web" }), key, {
            iv: iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_1__["mode"].CBC,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_1__["pad"].Pkcs7
        });
        const encryptedData = encrypted.toString();
        const encodedIV = iv.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Base64);
        this.service.bookingTicket({ data: encryptedData, iv: encodedIV, token: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].token }).subscribe((res) => {
            this.commonService.setToken(token);
            sessionStorage.setItem('time', moment__WEBPACK_IMPORTED_MODULE_0__().format('HH:mm:ss a'));
            if (res.isSuccess) {
                this.router.navigate(['/payment', res.booking_reference, this.data.onwardticket.passenger[0].mobileId + this.data.onwardticket.passenger[0].mobile, token]);
            }
        });
    }
    getSeatsBooked(item) {
        let seats = [];
        item.forEach(element => {
            seats.push(element.seat_id);
        });
        return seats;
    }
    initPassenger() {
        this.user = this.data.onwardticket.passenger[0];
        this.data.onwardticket.c_email = this.user.email ? this.user.email : '';
        this.data.onwardticket.currencyId = sessionStorage.getItem('currencyId');
        this.data.onwardticket.passenger[0].name = this.user.name;
        this.data.onwardticket.passenger[0].age = parseInt(this.user.age);
        this.data.onwardticket.passenger[0].gender = (this.user.gender == 'male') ? 'M' : 'F';
        this.data.onwardticket.passenger[0].id_no = this.user.id_no;
        this.data.onwardticket.passenger[0].mobileId = '254';
        this.data.onwardticket.passenger[0].nationality = this.user.nationality;
        this.data.onwardticket.passenger[0].mobile = this.user.mobile;
        this.data.onwardticket.selectedSeat = this.getSeatsBooked(this.data.onwardticket.passenger);
    }
}
PassengersComponent.ɵfac = function PassengersComponent_Factory(t) { return new (t || PassengersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_6__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
PassengersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PassengersComponent, selectors: [["app-passengers"]], decls: 17, vars: 2, consts: [[1, "hero-section", "section", "pt-0"], [1, "container", "pt-5"], [1, "container", "h-100", "text-white"], [1, "section", "container"], [1, "row"], [1, "col-md-6", "offset-lg-3"], [1, "col-sm-12"], ["align", "center"], ["passegerForm", "ngForm"], ["class", "row", 4, "ngFor", "ngForOf"], ["type", "submit", "value", "submit", 1, "btn", "view-seats", "btn-sm", 2, "float", "right", 3, "disabled", "click"], [1, "col-sm-8"], ["class", "modalpassenger", "style", "color:blue", 4, "ngIf"], ["class", "modalpassenger", "style", "color:orange", 4, "ngIf"], [1, "col-sm-4", 2, "text-align", "right"], [4, "ngIf"], ["appearance", "outline"], ["matInput", "", "placeholder", "Name", "required", "", 3, "name", "ngModel", "ngModelChange"], [1, "col-sm-4"], ["matInput", "", "placeholder", "Age", "required", "", 3, "name", "ngModel", "ngModelChange"], [1, "col-sm-6"], ["required", "", 3, "name", "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Phone", 3, "name", "ngModel", "ngModelChange"], [1, "col-sm-12", 2, "margin-bottom", "10px"], [3, "name", "ngModel", "ngModelChange"], [1, "col-sm-3", "col-6"], ["selected", "", "value", "F"], ["value", "M"], ["matInput", "", "type", "text", "required", "", "placeholder", "Nationality", 3, "name", "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "required", "", "placeholder", "ID Number", 3, "name", "ngModel", "ngModelChange"], [1, "modalpassenger", 2, "color", "blue"], [1, "modalpassenger", 2, "color", "orange"], [3, "value"]], template: function PassengersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Passenger Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, PassengersComponent_div_13_Template, 50, 19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PassengersComponent_Template_button_click_14_listener() { ctx.initPassenger(); return ctx.onClickSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "PROCEED TO PAY");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "app-footer");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.onwardticket == null ? null : ctx.data.onwardticket.passenger);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]], styles: [".mat-tab-label {\n  padding: 0px !important;\n  justify-content: left !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix {\n  padding: 0.6em 0px !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix > span.mat-form-field-label-wrapper {\n  top: -1.3em !important;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75) !important;\n  width: 133.33333% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Bhc3NlbmdlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx1QkFBQTtFQUNBLGdDQUFBO0FBREo7O0FBS0E7RUFDSSw2QkFBQTtBQUZKOztBQUtBO0VBQ0ksc0JBQUE7QUFGSjs7QUFLQTtFQUNJLG9EQUFBO0VBQ0EsNEJBQUE7QUFGSiIsImZpbGUiOiJwYXNzZW5nZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cblxuOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZT5kaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlcj5kaXYubWF0LWZvcm0tZmllbGQtZmxleD5kaXYubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6IDAuNmVtIDBweCAhaW1wb3J0YW50XG59XG5cbjo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmU+ZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXI+ZGl2Lm1hdC1mb3JtLWZpZWxkLWZsZXg+ZGl2Lm1hdC1mb3JtLWZpZWxkLWluZml4PnNwYW4ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gICAgdG9wOiAtMS4zZW0gIWltcG9ydGFudFxufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjFlbSkgc2NhbGUoLjc1KSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMzMuMzMzMzMlICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ "p7Zy":
/*!*********************************************!*\
  !*** ./src/app/services/booking.service.ts ***!
  \*********************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service.service */ "rRxC");
/* harmony import */ var _buslist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buslist.service */ "AtJV");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common.service */ "OlR4");





class BookingService {
    constructor(service, busListService, commonService) {
        this.service = service;
        this.busListService = busListService;
        this.commonService = commonService;
        this.selectedseat = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.totalTicketPrice = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
        this.defaultTripPriceList = [];
        this.selectedBoarding = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        this.selectedDropping = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        this.selectedTripData = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        this.seatList = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.params = {};
        this.seatPriceNotAviable = '';
        this.notAviablePrice = '';
        this.normalRemainingSeatLimit = 0;
        this.vipRemainingSeatLimit = 0;
        this.bclassRemainingSeatLimit = 0;
        this.selectedSeatsData = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        this.exceedSeatLimit = false;
        this.boardingPoint = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.droppingPoint = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.bookingdata = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        this.seats = this.seatList.asObservable();
        this.trip_data = this.selectedTripData.asObservable();
        this.bording_points = this.boardingPoint.asObservable();
        this.dropping_points = this.droppingPoint.asObservable();
        this.total = this.totalTicketPrice.asObservable();
        this.selectedseatdata = this.selectedSeatsData.asObservable();
        this.selected_seats = this.selectedseat.asObservable();
        this.review_info = this.bookingdata.asObservable();
    }
    toggleBusDetail(eachbusdetail) {
        this.selectedseat.next([]);
        this.totalTicketPrice.next(0);
        this.defaultTripPriceList = [];
        this.selectedBoarding.next({});
        this.selectedDropping.next({});
        if (this.selectedTripData.value.bus_id == eachbusdetail.bus_id && this.selectedTripData.value.delayedDate == eachbusdetail.delayedDate) {
            this.selectedTripData.next({});
            this.seatList.next([]);
        }
        else {
            this.selectedTripData.next(eachbusdetail);
            this.getseatType();
            this.fetchSeatDetails(eachbusdetail);
            this.getEachTripBoradingDropping(eachbusdetail.bus_id);
            this.seatList.next([]);
        }
    }
    fetchSeatDetails(busDetails) {
        this.defaultTripPriceList = busDetails.defaultTripPriceList;
        // this.seatLoading = true;
        var params = {
            source_city_id: this.params.source_city_id,
            destination_city_id: this.params.destination_city_id,
            travel_date: this.params.travel_date,
            bus_id: busDetails.bus_id,
            delayedFlag: this.selectedTripData.value.delayedFlag,
            delayedDate: this.selectedTripData.value.delayedDate,
        };
        this.service.getSeats(params).subscribe((res) => {
            this.calculateSeatsData(res);
            this.busListService.setOutwardSeatsList(res);
        });
    }
    calculateSeatsData(data) {
        this.seatPriceNotAviable = "";
        this.notAviablePrice = "";
        this.seatLoading = false;
        this.seatList.next(data.data);
        console.log();
        this.priceList = data.priceList;
        for (var i = 0; i < this.seatList.value.length; i++) {
            for (var j = 0; j < this.defaultTripPriceList.length; j++) {
                if (this.seatList.value[i].seat_type == this.defaultTripPriceList[j].seatType) {
                    this.seatList.value[i].ticketPrice = this.defaultTripPriceList[j].amount;
                    this.seatList.value[i].flatTicketPrice = this.defaultTripPriceList[j].amount;
                    this.seatList.value[i].flatSaleId = this.defaultTripPriceList[j].flatSaleId;
                    this.seatList.value[i].actualTicketPrice = this.defaultTripPriceList[j].originalFare;
                    this.seatList.value[i].currency = this.defaultTripPriceList[j].currencyCode;
                }
            }
        }
    }
    getEachTripBoradingDropping(id) {
        var param = {
            "source": this.params.source_city_id,
            "destination": this.params.destination_city_id,
            "trip": id,
            "booking_date": this.params.travel_date,
            "delayedFlag": this.selectedTripData.value.delayedFlag,
            "delayedDate": this.selectedTripData.value.delayedDate,
        };
        this.service.getBoardingDroping(param).subscribe((data) => {
            if (data) {
                this.busListService.setOutwardBoardingDropping(data);
                this.assignBoardingDroppingPoint(data);
            }
        });
    }
    ;
    assignBoardingDroppingPoint(data) {
        this.boardingPoint.next(data.boarding);
        this.droppingPoint.next(data.dropping);
    }
    setBookingParams(data) {
        this.params = data;
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
    }
    ;
    changeBoarding(item) {
        this.selectedBoarding.next(item);
    }
    ;
    selectSeat(eachseat) {
        if (eachseat.ticketPrice > 0) {
            if (!this.notAviablePrice) {
                if (eachseat.seat_type.toLowerCase().trim() === "staff" || eachseat.seat_name.toLowerCase().trim() === "staff" || eachseat.seat_type.toLowerCase().trim() === "1a" || eachseat.seat_name.toLowerCase().trim() === "1a") {
                    console.log("This.is staff seat");
                }
                else {
                    if (!eachseat.selection_status) {
                        var seatLimit = this.selectedTripData.value.isPromotional ? this.selectedTripData.value.seatSelectionLimit : 6;
                        if (this.checkSeatAlreadyExits(eachseat.seat_id)) {
                            if (this.selectedTripData.value.isPromotional && this.selectedTripData.value.seatSelectionLimit === 0) {
                                this.exceedSeatLimit = false;
                                this.selectedseat.value.push(eachseat);
                                this.getseatType();
                            }
                            else if (this.selectedseat.value.length + 1 > seatLimit) {
                                alert("You can not select more than" + " " + seatLimit + " " + "seat");
                                this.exceedSeatLimit = true;
                            }
                            else {
                                this.exceedSeatLimit = false;
                                this.selectedseat.value.push(eachseat);
                                this.getseatType();
                            }
                        }
                        this.checkSelectedSeats(eachseat.seat_id, "fromselect");
                    }
                }
            }
        }
        else {
            if (eachseat.seat_type.toLowerCase().trim() === "driver" || eachseat.seat_name.toLowerCase().trim() === "door") {
                return false;
            }
            else if (eachseat.seat_type.toLowerCase().trim() === "staff" || eachseat.seat_name.toLowerCase().trim() === "staff") {
                console.log("This is staff seat");
            }
            else {
                console.log("Seat price not available for selected seat");
            }
        }
    }
    ;
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
                }
                else {
                    if (eachSeatList.selectSeat) {
                        eachSeatList.selectSeat = false;
                    }
                    else {
                        if (!this.exceedSeatLimit) {
                            eachSeatList.selectSeat = true;
                        }
                    }
                }
            }
        });
    }
    saveOutward() {
        if (!this.selectedBoarding.value && !this.selectedDropping.value) {
            alert("Please select boarding & dropping point");
        }
        else if (!this.selectedDropping) {
            alert("Please select Dropping point");
        }
        else if (!this.selectedBoarding) {
            alert("Please select Boarding point");
        }
        else {
            let booking = {
                booking_date: this.params.travel_date,
                pickup_id: this.params.source_city_id,
                return_id: this.params.destination_city_id,
                source_city: this.params.source_city,
                dest_city: this.params.dest_city,
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
                currencyId: sessionStorage.getItem('currencyId'),
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
            let data = {};
            data.onwardticket = booking;
            data.totalTicketPrice = booking.total;
            this.bookingdata.next(data);
            this.commonService.setBooking(data);
            this.getAllSelectSeatName();
        }
    }
    ;
    getAllSelectSeatName() {
        this.selectSeatName = [];
        for (var i = 0; i < this.selectedseat.value.length; i++) {
            this.selectSeatName.push(this.selectedseat.value[i].seat_name);
        }
    }
    ;
    reset() {
        this.bookingdata.next({});
        this.selectedseat.next([]);
        this.selectedSeatsData.next({});
        this.selectedTripData.next({});
        this.totalTicketPrice.next(0);
        this.commonService.setBooking({});
    }
}
BookingService.ɵfac = function BookingService_Factory(t) { return new (t || BookingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_buslist_service__WEBPACK_IMPORTED_MODULE_3__["BuslistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"])); };
BookingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BookingService, factory: BookingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qyK6":
/*!****************************************!*\
  !*** ./src/app/backend.interceptor.ts ***!
  \****************************************/
/*! exports provided: BackendInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendInterceptor", function() { return BackendInterceptor; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BackendInterceptor {
    constructor() { }
    intercept(request, next) {
        let data = request.body;
        if (request.url.endsWith('ChangePassword')) {
            data.token = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].token;
            request = request.clone({ headers: request.headers.set('Authorization', JSON.parse(sessionStorage.getItem('loggedUser')).api_token), body: data });
        }
        else if (request.url.endsWith('json')) {
        }
        else {
            data.token = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].token;
            request = request.clone({ headers: request.headers.set('Authorization', '4F5D3QC5-C94A-CFD5-87C1-4E2903311DF0'), body: data });
        }
        return next.handle(request);
    }
}
BackendInterceptor.ɵfac = function BackendInterceptor_Factory(t) { return new (t || BackendInterceptor)(); };
BackendInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BackendInterceptor, factory: BackendInterceptor.ɵfac });


/***/ }),

/***/ "rRxC":
/*!*********************************************!*\
  !*** ./src/app/services/service.service.ts ***!
  \*********************************************/
/*! exports provided: endpoint, ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




// export const endpoint='http://api.ma3app.com/appApi';
// export const endpoint='http://bossapi.99synergy.com/appApi';
const endpoint = 'https://api.iabiri.com/appApiV1';
class ServiceService {
    constructor(http) {
        this.http = http;
    }
    extractData(res) {
        const body = res;
        return body || {};
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
        };
    }
    getCities() {
        return this.http.post(endpoint + '/common/getCity', { "city_id": 0, "city_type": "source", "token": "FA992334-76E3-44AD-BB4E-062FD0266D71" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getDestinations(id) {
        return this.http.post(endpoint + '/common/getCity', { "city_id": id, "city_type": "destination", "token": "FA992334-76E3-44AD-BB4E-062FD0266D71" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getTrips(data) {
        return this.http.post(endpoint + '/booking/filterBuses', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getSeats(data) {
        return this.http.post(endpoint + '/booking/getTripSeatsPrice', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getBoardingDroping(data) {
        return this.http.post(endpoint + '/booking/getBoardingDroppingPoints', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    bookingTicket(data) {
        return this.http.post(endpoint + '/booking/save', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    login(data) {
        return this.http.post(endpoint + '/AppUser/LoginUsers', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    otpVerification(data) {
        return this.http.post(endpoint + '/AppUser/UserOTPVerification', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    sigup(data) {
        return this.http.post(endpoint + '/AppUser/RegisterUsers', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    changePassword(data) {
        return this.http.post(endpoint + '/AppUser/ChangePassword', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    paymentMethods(data) {
        return this.http.post(endpoint + '/booking/paymentMethod', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    makePayment(data) {
        return this.http.post(endpoint + '/paymentGateway/init', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    checkMpesaPayment(data) {
        return this.http.post(endpoint + '/paymentGateway/checkMpesaPayment', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
}
ServiceService.ɵfac = function ServiceService_Factory(t) { return new (t || ServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ServiceService, factory: ServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/about/about.component */ "7wzR");
/* harmony import */ var _views_buslist_buslist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/buslist/buslist.component */ "IG16");
/* harmony import */ var _views_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/contact/contact.component */ "0HjG");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _views_passengers_passengers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/passengers/passengers.component */ "lWMQ");
/* harmony import */ var _views_payments_payments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/payments/payments.component */ "+yPM");
/* harmony import */ var _views_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/privacy/privacy.component */ "PYdw");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/profile/profile.component */ "wF9P");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/register/register.component */ "4XPS");
/* harmony import */ var _views_ticket_ticket_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/ticket/ticket.component */ "Ukjy");
/* harmony import */ var _views_return_return_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/return/return.component */ "GF8S");
/* harmony import */ var _views_trip_review_trip_review_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/trip-review/trip-review.component */ "+0wo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















const routes = [
    {
        path: '',
        component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'about',
        component: _views_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]
    },
    {
        path: 'register',
        component: _views_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]
    },
    {
        path: 'privacy',
        component: _views_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyComponent"]
    },
    {
        path: 'payment/:reference/:mobile/:token',
        component: _views_payments_payments_component__WEBPACK_IMPORTED_MODULE_6__["PaymentsComponent"]
    },
    {
        path: 'passengers',
        component: _views_passengers_passengers_component__WEBPACK_IMPORTED_MODULE_5__["PassengersComponent"]
    },
    {
        path: 'profile',
        component: _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]
    },
    {
        path: 'print-ticket',
        component: _views_ticket_ticket_component__WEBPACK_IMPORTED_MODULE_10__["TicketComponent"]
    },
    {
        path: 'contact',
        component: _views_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    },
    {
        path: 'trip-review',
        component: _views_trip_review_trip_review_component__WEBPACK_IMPORTED_MODULE_12__["TripReviewComponent"]
    },
    {
        path: 'onward-trip/:id1/:id2/:id3/:id4/:id5',
        component: _views_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    },
    {
        path: 'buslist/:id1/:id2/:id3/:id4/:id5/:id6',
        component: _views_buslist_buslist_component__WEBPACK_IMPORTED_MODULE_2__["BuslistComponent"]
    },
    {
        path: 'return/:id1/:id2/:id3/:id4/:id5/:id6',
        component: _views_return_return_component__WEBPACK_IMPORTED_MODULE_11__["ReturnComponent"]
    },
    {
        path: '**',
        component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wF9P":
/*!****************************************************!*\
  !*** ./src/app/views/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















function ProfileComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 48);
} }
function ProfileComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 49);
} }
function ProfileComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Profile ");
} }
function ProfileComponent_mat_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", code_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", code_r32, " ");
} }
function ProfileComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " My Trips ");
} }
function ProfileComponent_th_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " S/N ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProfileComponent_td_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r33.position, " ");
} }
function ProfileComponent_th_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProfileComponent_td_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r34.date, " ");
} }
function ProfileComponent_th_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "ROUTE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProfileComponent_td_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r35.route, " ");
} }
function ProfileComponent_th_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "BOARDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProfileComponent_td_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " {{element.boarding} ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProfileComponent_th_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProfileComponent_td_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r37.status, " ");
} }
function ProfileComponent_tr_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 53);
} }
function ProfileComponent_tr_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 54);
} }
function ProfileComponent_ng_template_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Wallet ");
} }
function ProfileComponent_th_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " S/N ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProfileComponent_td_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r39.position, " ");
} }
function ProfileComponent_th_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " NAME ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProfileComponent_td_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r40.name, " ");
} }
function ProfileComponent_th_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProfileComponent_td_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r41.amount, " ");
} }
function ProfileComponent_th_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "COMMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProfileComponent_td_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r42.comment, " ");
} }
function ProfileComponent_th_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProfileComponent_td_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r43.status, " ");
} }
function ProfileComponent_tr_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 53);
} }
function ProfileComponent_tr_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 54);
} }
function ProfileComponent_ng_template_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Change Password ");
} }
class ProfileComponent {
    constructor(formBuilder, toastr, service, spinner) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.service = service;
        this.spinner = spinner;
        this.displayedColumns = ['position', 'name', 'amount', 'status', 'comment'];
        this.tripColumns = ['date', 'route', 'boarding', 'status'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.trips = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        this.codes = ['254'];
        this.user = {};
        this.i = { "userId": "222950", "username": "", "email": "paul@gmail.com", "api_token": "vPZBSfUwUTzfKiNKVSXiOVsWO52Fn1BJVyB3W02H8NrmWeS6jk_1665804977", "country_code": "254", "phone": "799442437", "age": "22", "name": "Paul Obiero", "last_name": "Obiero", "gender": "male", "currencyId": "0", "identity_number": "0121975" };
    }
    ngOnInit() {
        this.user = JSON.parse(sessionStorage.getItem('loggedUser'));
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            country_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.passwordForm = this.formBuilder.group({
            current: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.registerForm.patchValue({ name: this.user.name, country_code: this.user.country_code, gender: this.user.gender, phone: this.user.phone });
        console.log(this.registerForm.value);
    }
    changePassword() {
        this.spinner.show();
        let data = this.passwordForm.value;
        if (data.password != data.confirm) {
            this.toastr.info("Password didn't match", "Password Mismatch");
            return;
        }
        this.service.changePassword({ "newPassword": data.password, "confirmPassword": data.confirm, "oldPassword": data.current, "country_code": this.user.country_code, "sourcetype": "web" }).subscribe((res) => {
            if (res.isSuccess) {
                this.spinner.hide();
                this.toastr.success("Password Succefully changed", "Success");
                this.passwordForm.reset();
            }
            else {
                this.spinner.hide();
                this.toastr.error(res.msg, "Failed");
            }
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], viewQuery: function ProfileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 131, vars: 18, consts: [[1, "section", "container"], [1, "row"], [1, "col-sm-8", "offset-lg-2"], [1, "col-sm-2", "col-4"], ["src", "assets/img/female.png", "width", "100", "height", "100", "alt", "", 4, "ngIf"], ["src", "assets/img/user.png", "width", "100", "height", "100", "alt", "", 4, "ngIf"], [1, "col-sm-4", "col-8"], [1, "col-sm-12"], [1, "details", 2, "font-weight", "500"], [1, "text-success", 2, "font-weight", "600"], [2, "font-weight", "900"], ["mat-tab-label", ""], [2, "margin-top", "10px", 3, "formGroup"], [1, "row", "container-small"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", "placeholder", "Name"], [1, "col-sm-4"], ["formControlName", "country_code"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-8"], ["matInput", "", "formControlName", "phone", "placeholder", "Phone"], [1, "col-sm-6"], ["matInput", "", "formControlName", "dob", "placeholder", "Date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["formControlName", "gender"], ["value", "female"], ["value", "male"], [1, "btn", "btn-primary", "save-btn", "pull-right"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "date"], ["matColumnDef", "route"], ["matColumnDef", "boarding"], ["matColumnDef", "status"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "name"], ["matColumnDef", "amount"], ["matColumnDef", "comment"], [2, "margin-top", "10px", 3, "formGroup", "ngSubmit"], ["matInput", "", "type", "password", "formControlName", "current", "placeholder", " Current Password"], ["matInput", "", "type", "password", "formControlName", "password", "placeholder", "New Password"], ["matInput", "", "type", "password", "formControlName", "confirm", "placeholder", "Confirm Password"], [1, "col-sm-12", "pb-2"], [1, "btn", "save-btn", 2, "float", "right", 3, "disabled"], ["src", "assets/img/female.png", "width", "100", "height", "100", "alt", ""], ["src", "assets/img/user.png", "width", "100", "height", "100", "alt", ""], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ProfileComponent_img_6_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ProfileComponent_img_7_Template, 1, 0, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Contact: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Age: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ProfileComponent_ng_template_31_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, ProfileComponent_mat_option_44_Template, 2, 2, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Date of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "mat-datepicker-toggle", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "mat-datepicker", null, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "mat-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " Female ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, " Male ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Save Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, ProfileComponent_ng_template_71_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "table", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](73, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, ProfileComponent_th_74_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, ProfileComponent_td_75_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](76, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](77, ProfileComponent_th_77_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](78, ProfileComponent_td_78_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](79, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, ProfileComponent_th_80_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](81, ProfileComponent_td_81_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](82, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](83, ProfileComponent_th_83_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](84, ProfileComponent_td_84_Template, 2, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](85, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](86, ProfileComponent_th_86_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](87, ProfileComponent_td_87_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](88, ProfileComponent_tr_88_Template, 1, 0, "tr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](89, ProfileComponent_tr_89_Template, 1, 0, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](91, ProfileComponent_ng_template_91_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "table", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](93, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](94, ProfileComponent_th_94_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](95, ProfileComponent_td_95_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](96, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](97, ProfileComponent_th_97_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](98, ProfileComponent_td_98_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](99, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](100, ProfileComponent_th_100_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](101, ProfileComponent_td_101_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](102, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](103, ProfileComponent_th_103_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](104, ProfileComponent_td_104_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](105, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](106, ProfileComponent_th_106_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](107, ProfileComponent_td_107_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](108, ProfileComponent_tr_108_Template, 1, 0, "tr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](109, ProfileComponent_tr_109_Template, 1, 0, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](111, ProfileComponent_ng_template_111_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "form", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_112_listener() { return ctx.changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Current Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](117, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](127, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "Update Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user.gender == "female");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user.gender == "male");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.user.country_code, "", ctx.user.phone, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.user.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.codes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.trips);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.tripColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.tripColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.passwordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.passwordForm.invalid);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepicker"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".hero-section[_ngcontent-%COMP%] {\n  min-height: 0px;\n}\n\n.section[_ngcontent-%COMP%] {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n\n  .mat-form-field-wrapper {\n  margin-bottom: -0.65em !important;\n}\n\n.view-seats[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid #ffe716;\n  font-size: 13px;\n  padding: 6px 10px;\n  text-transform: capitalize;\n  color: black;\n  margin-top: 5px;\n  font-weight: 700;\n  background-color: #ffe716;\n  border-radius: 20px;\n}\n\n  .mat-tab-label {\n  padding: 0px !important;\n  justify-content: left !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix {\n  padding: 0.6em 0px !important;\n}\n\n  mat-form-field.mat-form-field.mat-form-field-appearance-outline > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-infix > span.mat-form-field-label-wrapper {\n  top: -1.3em !important;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75) !important;\n  width: 133.33333% !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  .mat-tab-label {\n  padding: 0px !important;\n  justify-content: left !important;\n}\n\n  .mat-tab-label {\n  text-transform: capitalize;\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.div[_ngcontent-%COMP%] {\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.mat-tab-body-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.container-small[_ngcontent-%COMP%] {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n.save-btn[_ngcontent-%COMP%] {\n  border: 1px solid #ffe716;\n  text-transform: capitalize;\n  color: black;\n  font-weight: 500;\n  background-color: #ffe716;\n  border-radius: 20px;\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\ntable[_ngcontent-%COMP%] {\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\nth[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\ninput[_ngcontent-%COMP%] {\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\ninput[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.details[_ngcontent-%COMP%] {\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQ0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFHQTtFQUNJLHVCQUFBO0VBQ0EsZ0NBQUE7QUFBSjs7QUFJSTtFQUErSiw2QkFBQTtBQUFuSzs7QUFDSTtFQUFrTSxzQkFBQTtBQUd0TTs7QUFESTtFQUNBLG9EQUFBO0VBQ0EsNEJBQUE7QUFJSjs7QUFGSTtFQUNJLFdBQUE7QUFLUjs7QUFEQTtFQUNJLHVCQUFBO0VBQ0EsZ0NBQUE7QUFJSjs7QUFEQTtFQUVJLDBCQUFBO0VBQ0EsbUVBQUE7QUFHSjs7QUFBQTtFQUNJLG1FQUFBO0FBR0o7O0FBREE7RUFBd0IsWUFBQTtBQUt4Qjs7QUFIQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUFNSjs7QUFIQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUVBQUE7QUFNSjs7QUFKQTtFQUNJLG1FQUFBO0FBT0o7O0FBTEE7RUFDSSxnQkFBQTtBQVFKOztBQU5BO0VBQ0ksbUVBQUE7QUFTSjs7QUFQQTtFQUNJLG1FQUFBO0FBVUo7O0FBUkE7RUFDSSxtRUFBQTtBQVdKIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVyby1zZWN0aW9uIHtcbiAgICBtaW4taGVpZ2h0OiAwcHg7XG59XG5cbi5zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcbiAgICBtYXJnaW4tYm90dG9tOiAtMC42NWVtICFpbXBvcnRhbnQ7XG4gfVxuXG4udmlldy1zZWF0cyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmU3MTY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmU3MTY7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWwge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICBcbiAgICA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lID4gZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgPiBkaXYubWF0LWZvcm0tZmllbGQtZmxleCA+IGRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeCAgeyBwYWRkaW5nOiAwLjZlbSAwcHggIWltcG9ydGFudCB9XG4gICAgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSA+IGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyID4gZGl2Lm1hdC1mb3JtLWZpZWxkLWZsZXggPiBkaXYubWF0LWZvcm0tZmllbGQtaW5maXggPiBzcGFuLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgeyB0b3A6IC0xLjNlbSAhaW1wb3J0YW50IH1cbiAgICBcbiAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjFlbSkgc2NhbGUoLjc1KSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMzMuMzMzMzMlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cblxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIHtcblxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIixcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG5cbn1cbi5kaXYge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIixcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG59XG4ubWF0LXRhYi1ib2R5LWNvbnRlbnQgeyBoZWlnaHQ6IDEwMCU7IH1cblxuLmNvbnRhaW5lci1zbWFsbHtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc2F2ZS1idG4ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmU3MTY7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNzE2O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcbn1cbnRhYmxle1xuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIixcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG59XG50aHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuaW5wdXR7XG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcbn1cbmlucHV0IDo6cGxhY2Vob2xkZXIgeyBcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xufVxuLmRldGFpbHN7XG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcbn0iXX0= */"] });
const ELEMENT_DATA = [];


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map