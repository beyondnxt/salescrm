function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"], {
  /***/
  "./src/app/customer/index.ts":
  /*!***********************************!*\
    !*** ./src/app/customer/index.ts ***!
    \***********************************/

  /*! exports provided: CustomerListComponent, CustomerFormComponent, CustomerService, CustomerModule */

  /***/
  function srcAppCustomerIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _customer_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./customer-list.component */
    "./src/app/customer/customer-list.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function () {
      return _customer_list_component__WEBPACK_IMPORTED_MODULE_0__["CustomerListComponent"];
    });
    /* harmony import */


    var _customer_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./customer-form.component */
    "./src/app/customer/customer-form.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CustomerFormComponent", function () {
      return _customer_form_component__WEBPACK_IMPORTED_MODULE_1__["CustomerFormComponent"];
    });
    /* harmony import */


    var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./customer.service */
    "./src/app/customer/customer.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
      return _customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"];
    });
    /* harmony import */


    var _customer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customer.module */
    "./src/app/customer/customer.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CustomerModule", function () {
      return _customer_module__WEBPACK_IMPORTED_MODULE_3__["CustomerModule"];
    });
    /***/

  },

  /***/
  "./src/app/order/order-form.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/order/order-form.component.ts ***!
    \***********************************************/

  /*! exports provided: OrderFormComponent */

  /***/
  function srcAppOrderOrderFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderFormComponent", function () {
      return OrderFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/debounceTime */
    "./node_modules/rxjs-compat/_esm2015/add/operator/debounceTime.js");
    /* harmony import */


    var rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/observable/fromEvent */
    "./node_modules/rxjs-compat/_esm2015/add/observable/fromEvent.js");
    /* harmony import */


    var rxjs_add_observable_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/observable/merge */
    "./node_modules/rxjs-compat/_esm2015/add/observable/merge.js");
    /* harmony import */


    var rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/Observable */
    "./node_modules/rxjs-compat/_esm2015/Observable.js");
    /* harmony import */


    var _shared_number_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/number.validator */
    "./src/app/shared/number.validator.ts");
    /* harmony import */


    var _shared_generic_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/generic-validator */
    "./src/app/shared/generic-validator.ts");
    /* harmony import */


    var _product_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./product-dialog.component */
    "./src/app/order/product-dialog.component.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _order_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./order.service */
    "./src/app/order/order.service.ts");
    /* harmony import */


    var _customer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../customer */
    "./src/app/customer/index.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");

    function OrderFormComponent_mat_option_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customer_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", customer_r13.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", customer_r13.firstname, " ", customer_r13.lastname, " ");
      }
    }

    function OrderFormComponent_mat_error_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.displayMessage.reference, " ");
      }
    }

    function OrderFormComponent_mat_error_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.displayMessage.amount, " ");
      }
    }

    function OrderFormComponent_mat_error_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.displayMessage.quantity, " ");
      }
    }

    function OrderFormComponent_mat_error_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.displayMessage.address, " ");
      }
    }

    function OrderFormComponent_mat_error_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.displayMessage.city, " ");
      }
    }

    function OrderFormComponent_mat_error_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.displayMessage.country, " ");
      }
    }

    function OrderFormComponent_mat_error_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.displayMessage.zipcode, " ");
      }
    }

    function OrderFormComponent_mat_list_65_mat_list_item_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "folder");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderFormComponent_mat_list_65_mat_list_item_3_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var product_r15 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.openDialog(product_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r15.productName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" AUD $", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 2, product_r15.unitPrice, "0.00"), " ");
      }
    }

    function OrderFormComponent_mat_list_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Products");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderFormComponent_mat_list_65_mat_list_item_3_Template, 11, 5, "mat-list-item", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.order.products);
      }
    }

    function OrderFormComponent_div_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.errorMessage);
      }
    }

    var _c0 = function _c0() {
      return ["/orders"];
    };

    var OrderFormComponent = /*#__PURE__*/function () {
      function OrderFormComponent(fb, route, router, orderService, customerService, dialog, breakpointObserver) {
        var _this = this;

        _classCallCheck(this, OrderFormComponent);

        this.fb = fb;
        this.route = route;
        this.router = router;
        this.orderService = orderService;
        this.customerService = customerService;
        this.dialog = dialog;
        this.breakpointObserver = breakpointObserver;
        this.pageTitle = "Update Order";
        this.order = {};
        this.fieldColspan = 4; // Use with the generic validation messcustomerId class

        this.displayMessage = {};
        this.validationMessages = {
          reference: {
            required: "Order reference is required.",
            minlength: "Order reference must be at least one characters.",
            maxlength: "Order reference cannot exceed 100 characters."
          },
          amount: {
            required: "Order amount is required.",
            range: "Amount of the order must be between 1 (lowest) and 9999 (highest)."
          },
          quantity: {
            required: "Order quantity is required.",
            range: "Quantity of the order must be between 1 (lowest) and 20 (highest)."
          },
          customerId: {
            required: "Customer is required."
          }
        };
        breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["Breakpoints"].HandsetLandscape, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["Breakpoints"].HandsetPortrait]).subscribe(function (result) {
          _this.onScreensizeChange();
        });
        this.genericValidator = new _shared_generic_validator__WEBPACK_IMPORTED_MODULE_7__["GenericValidator"](this.validationMessages);
      }

      _createClass(OrderFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.orderForm = this.fb.group({
            reference: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            amount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_number_validator__WEBPACK_IMPORTED_MODULE_6__["NumberValidators"].range(1, 99999)]],
            quantity: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_number_validator__WEBPACK_IMPORTED_MODULE_6__["NumberValidators"].range(1, 20)]],
            orderDate: [""],
            shippedDate: [""],
            address: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            zipcode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            customerId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            products: this.fb.array([]),
            membership: false
          }); // Read the order Id from the route parameter

          this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];

            _this2.getOrder(id);
          });
          this.getCustomers();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _rxjs_Observable__WEB,
              _this3 = this;

          // Watch for the blur event from any input element on the form.
          var controlBlurs = this.formInputElements.map(function (formControl) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].fromEvent(formControl.nativeElement, "blur");
          }); // Merge the blur event observable with the valueChanges observable

          (_rxjs_Observable__WEB = rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"]).merge.apply(_rxjs_Observable__WEB, [this.orderForm.valueChanges].concat(_toConsumableArray(controlBlurs))).debounceTime(800).subscribe(function () {
            _this3.displayMessage = _this3.genericValidator.processMessages(_this3.orderForm);
          });
        }
      }, {
        key: "getOrder",
        value: function getOrder(id) {
          var _this4 = this;

          this.orderService.getOrder(id).subscribe(function (order) {
            return _this4.onOrderRetrieved(order);
          }, function (error) {
            return _this4.errorMessage = error;
          });
        }
      }, {
        key: "getCustomers",
        value: function getCustomers() {
          var _this5 = this;

          this.customerService.getCustomers().subscribe(function (customers) {
            _this5.customers = customers;
          }, function (error) {
            return _this5.errorMessage = error;
          });
        }
      }, {
        key: "onOrderRetrieved",
        value: function onOrderRetrieved(order) {
          var _this6 = this;

          if (this.orderForm) {
            this.orderForm.reset();
          }

          this.order = order;

          if (this.order.id === 0) {
            this.pageTitle = "Add Order";
          } else {
            this.pageTitle = "Update Order: ".concat(this.order.reference, " ");
          } // Update the data on the form


          this.orderForm.patchValue({
            reference: this.order.reference,
            amount: this.order.amount,
            quantity: this.order.products.length,
            orderDate: new Date(this.order.orderDate),
            shippedDate: new Date(this.order.shippedDate),
            address: this.order.shipAddress.address,
            city: this.order.shipAddress.city,
            country: this.order.shipAddress.country,
            zipcode: this.order.shipAddress.zipcode,
            customerId: this.order.customerId,
            membership: this.order.membership
          });
          var products = this.order.products.map(function (product) {
            return _this6.fb.group({
              productName: [product.productName],
              price: [product.unitPrice]
            });
          });
          var productList = this.fb.array(products);
          this.orderForm.setControl("products", productList);
        }
      }, {
        key: "saveOrder",
        value: function saveOrder() {
          var _this7 = this;

          if (this.orderForm.dirty && this.orderForm.valid) {
            // Copy the form values over the order object values
            var order = Object.assign({}, this.order, this.orderForm.value);
            this.orderService.saveOrder(order).subscribe(function () {
              return _this7.onSaveComplete();
            }, function (error) {
              return _this7.errorMessage = error;
            });
          } else if (!this.orderForm.dirty && this.orderForm.valid) {
            this.onSaveComplete();
          }
        }
      }, {
        key: "onSaveComplete",
        value: function onSaveComplete() {
          // Reset the form to clear the flags
          this.orderForm.reset();
          this.router.navigate(["/orders"]);
        }
      }, {
        key: "addProduct",
        value: function addProduct(event) {
          var dialogRef = this.dialog.open(_product_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ProductDialogComponent"], {
            height: "400px",
            width: "600px",
            data: {
              title: "Dialog"
            } // message: "Are you sure to add this item?" }

          });
          dialogRef.disableClose = true;
          dialogRef.afterClosed().subscribe(function (result) {
            // this.selectedOption = result;
            if (result === dialogRef.componentInstance.ACTION_SAVE) {//     this.orderService.deleteOrder(id).subscribe(
              //         () => {
              //             this.orderService.getOrders()
              //                 .subscribe(orders => {
              //                     this.orders = orders;
              //                     this.setPage(1);
              //                 },
              //                 error => this.errorMessage = <any>error);
              //         },
              //         (error: any) => {
              //             this.errorMessage = <any>error;
              //             console.log(this.errorMessage);
              //             this.openSnackBar("This item has not been deleted successfully. Please try again.", "Close");
              //         }
              //     );
            }
          });
          event.preventDefault();
        }
      }, {
        key: "openDialog",
        value: function openDialog(product) {
          var dialogRef = this.dialog.open(_shared__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialog"], {
            data: {
              title: "Dialog",
              message: "Are you sure to delete this item?"
            }
          });
          dialogRef.disableClose = true;
          dialogRef.afterClosed().subscribe(function () {// this.selectedOption = result;
            // if (this.selectedOption === dialogRef.componentInstance.ACTION_CONFIRM) {
            //   this.orderService.deleteOrder(id).subscribe(
            //     () => {
            //       this.orderService.getOrders().subscribe(orders => {
            //         this.freshDataList(orders);
            //       }, error => (this.errorMessage = <any>error));
            //       this.openSnackBar("The item has been deleted successfully. ", "Close");
            //     },
            //     (error: any) => {
            //       this.errorMessage = <any>error;
            //       console.log(this.errorMessage);
            //       this.openSnackBar(
            //         "This item has not been deleted successfully. Please try again.",
            //         "Close"
            //       );
            //     }
            //   );
            // }
          });
        }
      }, {
        key: "onScreensizeChange",
        value: function onScreensizeChange() {
          // debugger
          var isLess600 = this.breakpointObserver.isMatched('(max-width: 599px)');
          var isLess1000 = this.breakpointObserver.isMatched('(max-width: 959px)');
          console.log(" isLess600  ".concat(isLess600, " \n        isLess1000 ").concat(isLess1000, "  "));

          if (isLess1000) {
            if (isLess600) {
              this.fieldColspan = 12;
            } else {
              this.fieldColspan = 6;
            }
          } else {
            this.fieldColspan = 3;
          }
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct() {}
      }]);

      return OrderFormComponent;
    }();

    OrderFormComponent.ɵfac = function OrderFormComponent_Factory(t) {
      return new (t || OrderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_order_service__WEBPACK_IMPORTED_MODULE_12__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_customer__WEBPACK_IMPORTED_MODULE_13__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"]));
    };

    OrderFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderFormComponent,
      selectors: [["order-form"]],
      viewQuery: function OrderFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formInputElements = _t);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_product_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ProductDialogComponent"]])],
      decls: 67,
      vars: 32,
      consts: [["novalidate", "", 3, "formGroup", "ngSubmit"], [2, "background-color", "#FFF"], [1, "view-card-title"], [1, "title-spacer"], ["mat-mini-fab", "", "type", "submit", 1, "primary", 2, "margin-right", "10px", "background-color", "darkgray", 3, "disabled"], ["mat-mini-fab", "", 1, "", 2, "margin-right", "10px", 3, "routerLink"], ["mat-mini-fab", "", 1, "accent", 2, "margin-right", "10px", "background-color", "#e07c9e", 3, "click"], [2, "margin", "5 0 5 0px"], [1, "form-card"], ["cols", "12", "rowHeight", "80px"], [3, "colspan"], ["appearance", "outline", 1, "form-field"], ["placeholder", "Select Customer", "formControlName", "customerId", 3, "value", "valueChange"], ["customerIdId", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Reference No", "id", "referenceId", "type", "text", "placeholder", "Reference No. (required)", "formControlName", "reference"], [4, "ngIf"], ["matInput", "", "placeholder", "Amount", "id", "amountId", "type", "number", "placeholder", "Price (required)", "formControlName", "amount"], ["matInput", "", "placeholder", "Quantity", "id", "quantityId", "type", "number", "placeholder", "Quantity (required)", "formControlName", "quantity"], ["matInput", "", "placeholder", "Order date", 3, "matDatepicker", "value"], ["matSuffix", "", 3, "for"], ["orderpickerId", ""], ["matInput", "", "placeholder", "Shipped date", 3, "matDatepicker", "value"], ["shippedDateId", ""], ["matInput", "", "placeholder", "Address", "id", "addressId", "type", "text", "formControlName", "address", "disabled", ""], ["class", "help-block", 4, "ngIf"], ["matInput", "", "placeholder", "City", "id", "cityId", "type", "text", "formControlName", "city"], ["matInput", "", "placeholder", "Country", "id", "countryId", "type", "text", "formControlName", "country"], ["matInput", "", "placeholder", "Zipcode", "id", "zipcodeId", "type", "text", "formControlName", "zipcode"], ["class", "has-error", 4, "ngIf"], [3, "value"], [1, "help-block"], ["mat-subheader", ""], ["style", "background-color:#e7ecf7; padding-bottom:2px; margin-bottom:5px;", 4, "ngFor", "ngForOf"], [2, "background-color", "#e7ecf7", "padding-bottom", "2px", "margin-bottom", "5px"], ["mat-list-icon", ""], ["mat-line", ""], ["mat-mini-fab", "", 2, "background-color", "lightgrey", "float", "right", 3, "click"], [1, "has-error"]],
      template: function OrderFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function OrderFormComponent_Template_form_ngSubmit_0_listener() {
            return ctx.saveOrder();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderFormComponent_Template_button_click_14_listener($event) {
            return ctx.addProduct($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-content", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-grid-list", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-grid-tile", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function OrderFormComponent_Template_mat_select_valueChange_22_listener($event) {
            return ctx.order.customerId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OrderFormComponent_mat_option_24_Template, 2, 3, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-grid-tile", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, OrderFormComponent_mat_error_28_Template, 2, 1, "mat-error", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-grid-tile", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, OrderFormComponent_mat_error_32_Template, 2, 1, "mat-error", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-grid-tile", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, OrderFormComponent_mat_error_36_Template, 2, 1, "mat-error", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-grid-tile", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-datepicker-toggle", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-datepicker", null, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-grid-tile", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "mat-datepicker-toggle", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "mat-datepicker", null, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-grid-tile", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, OrderFormComponent_mat_error_52_Template, 2, 1, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-grid-tile", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, OrderFormComponent_mat_error_56_Template, 2, 1, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-grid-tile", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, OrderFormComponent_mat_error_60_Template, 2, 1, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-grid-tile", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, OrderFormComponent_mat_error_64_Template, 2, 1, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, OrderFormComponent_mat_list_65_Template, 4, 1, "mat-list", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, OrderFormComponent_div_66_Template, 2, 1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.orderForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pageTitle, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.orderForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.fieldColspan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.order.customerId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.fieldColspan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMessage.reference);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.fieldColspan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMessage.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.fieldColspan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMessage.quantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.fieldColspan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r5)("value", ctx.order.orderDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.fieldColspan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r6)("value", ctx.order.shippedDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.fieldColspan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMessage.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.fieldColspan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMessage.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.fieldColspan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMessage.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.fieldColspan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMessage.zipcode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.order != null && ctx.order.products != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardContent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridTile"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepicker"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatError"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatLine"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__["DecimalPipe"]],
      styles: [".title-spacer[_ngcontent-%COMP%] {\n      flex: 1 1 auto;\n    }\n  .form-field[_ngcontent-%COMP%]{\n      width: 100%;\n      margin-left: 20px;\n      margin-right: 20px;\n    }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'order-form',
          templateUrl: "./order-form.component.html",
          styles: ["\n  .title-spacer {\n      flex: 1 1 auto;\n    }\n  .form-field{\n      width: 100%;\n      margin-left: 20px;\n      margin-right: 20px;\n    }\n    "],
          providers: [_product_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ProductDialogComponent"]]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }, {
          type: _order_service__WEBPACK_IMPORTED_MODULE_12__["OrderService"]
        }, {
          type: _customer__WEBPACK_IMPORTED_MODULE_13__["CustomerService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"]
        }];
      }, {
        formInputElements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/order/order-guard.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/order/order-guard.service.ts ***!
    \**********************************************/

  /*! exports provided: OrderDetailGuard, OrderEditGuard */

  /***/
  function srcAppOrderOrderGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetailGuard", function () {
      return OrderDetailGuard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderEditGuard", function () {
      return OrderEditGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var OrderDetailGuard = /*#__PURE__*/function () {
      function OrderDetailGuard(router) {
        _classCallCheck(this, OrderDetailGuard);

        this.router = router;
      }

      _createClass(OrderDetailGuard, [{
        key: "canActivate",
        value: function canActivate(route) {
          var id = +route.url[1].path;

          if (isNaN(id) || id < 1) {
            alert("Invalid order Id"); // start a new navigation to redirect to list pcustomerId

            this.router.navigate(["/orders"]); // abort current navigation

            return false;
          }

          return true;
        }
      }]);

      return OrderDetailGuard;
    }();

    OrderDetailGuard.ɵfac = function OrderDetailGuard_Factory(t) {
      return new (t || OrderDetailGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    OrderDetailGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OrderDetailGuard,
      factory: OrderDetailGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDetailGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();

    var OrderEditGuard = /*#__PURE__*/function () {
      function OrderEditGuard() {
        _classCallCheck(this, OrderEditGuard);
      }

      _createClass(OrderEditGuard, [{
        key: "canDeactivate",
        value: function canDeactivate(component) {
          if (component.orderForm.dirty) {
            var orderName = component.orderForm.get("reference").value || "New Order";
            return confirm("Navigate away and lose all changes to ".concat(orderName, "?"));
          }

          return true;
        }
      }]);

      return OrderEditGuard;
    }();

    OrderEditGuard.ɵfac = function OrderEditGuard_Factory(t) {
      return new (t || OrderEditGuard)();
    };

    OrderEditGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OrderEditGuard,
      factory: OrderEditGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderEditGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/order/order-list.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/order/order-list.component.ts ***!
    \***********************************************/

  /*! exports provided: OrderListComponent */

  /***/
  function srcAppOrderOrderListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderListComponent", function () {
      return OrderListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./order.service */
    "./src/app/order/order.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function OrderListComponent_mat_header_cell_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reference No. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderListComponent_mat_cell_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r23.reference, " ");
      }
    }

    function OrderListComponent_mat_header_cell_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Quantity ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderListComponent_mat_cell_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r24.products.length, " ");
      }
    }

    function OrderListComponent_mat_header_cell_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Amount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderListComponent_mat_cell_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r25.amount, " ");
      }
    }

    function OrderListComponent_mat_header_cell_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Customer ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderListComponent_mat_cell_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r26 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r26.customerName, " ");
      }
    }

    function OrderListComponent_mat_header_cell_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Order Date ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderListComponent_mat_cell_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, order_r27.orderDate), " ");
      }
    }

    function OrderListComponent_mat_header_cell_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Shipped Date ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderListComponent_mat_cell_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r28 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, order_r28.shippedDate), " ");
      }
    }

    function OrderListComponent_mat_header_cell_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-cell", 40);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/orders/edit/", a1];
    };

    function OrderListComponent_mat_cell_45_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderListComponent_mat_cell_45_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var order_r29 = ctx.$implicit;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.openDialog(order_r29.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, order_r29.id));
      }
    }

    function OrderListComponent_mat_header_row_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
      }
    }

    function OrderListComponent_mat_row_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
      }
    }

    var _c1 = function _c1() {
      return ["/orders/edit/", 0];
    };

    var _c2 = function _c2() {
      return [5, 10];
    };

    var OrderListComponent = /*#__PURE__*/function () {
      function OrderListComponent(orderService, dialog, snackBar) {
        _classCallCheck(this, OrderListComponent);

        this.orderService = orderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.pageTitle = "Orders";
        this.showImage = false;
        this.listFilter = {};
        this.displayedColumns = ["reference", "quantity", "amount", "customerName", "orderDate", "shippedDate", "id"];
        this.dataSource = null; // new MatTableDataSource<Element>(ELEMENT_DATA);

        this.pager = {};
        this.searchFilter = {
          reference: "",
          amount: "",
          quantity: ""
        };
      }

      _createClass(OrderListComponent, [{
        key: "toggleImage",
        value: function toggleImage() {
          this.showImage = !this.showImage;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches

          this.dataSource.filter = filterValue;
        }
      }, {
        key: "freshDataList",
        value: function freshDataList(orders) {
          this.orders = orders;
          this.orderList = orders.map(function (e) {
            var order = e;
            e["customerName"] = e.customer.firstname + " " + e.customer.lastname;
            return order;
          });
          this.totalAmount = this.orders.length;
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.orderList);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.orderService.getOrders().subscribe(function (orders) {
            _this8.freshDataList(orders);
          }, function (error) {
            return _this8.errorMessage = error;
          });
          this.searchFilter = {};
          this.listFilter = {};
        }
      }, {
        key: "getOrders",
        value: function getOrders(pageNum) {
          var _this9 = this;

          this.orderService.getOrders().subscribe(function (orders) {
            _this9.freshDataList(orders);
          }, function (error) {
            return _this9.errorMessage = error;
          });
        }
      }, {
        key: "searchOrders",
        value: function searchOrders(filters) {
          var _this10 = this;

          if (filters) {
            this.orderService.getOrders().subscribe(function (orders) {
              _this10.orders = orders;
              console.log(_this10.orders.length);
              _this10.orders = _this10.orders.filter(function (order) {
                var match = true;
                Object.keys(filters).forEach(function (k) {
                  match = match && filters[k] ? order[k].toLocaleLowerCase().indexOf(filters[k].toLocaleLowerCase()) > -1 : match;
                });

                _this10.freshDataList(orders);

                return match;
              });
            }, function (error) {
              return _this10.errorMessage = error;
            });
          }
        }
      }, {
        key: "resetListFilter",
        value: function resetListFilter() {
          this.listFilter = {};
          this.getOrders();
        }
      }, {
        key: "reset",
        value: function reset() {
          this.listFilter = {};
          this.searchFilter = {};
          this.getOrders();
        }
      }, {
        key: "resetSearchFilter",
        value: function resetSearchFilter(searchPanel) {
          searchPanel.toggle();
          this.searchFilter = {};
          this.getOrders();
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          this.snackBar.open(message, action, {
            duration: 1500
          });
        }
      }, {
        key: "openDialog",
        value: function openDialog(id) {
          var _this11 = this;

          var dialogRef = this.dialog.open(_shared__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialog"], {
            data: {
              title: "Dialog",
              message: "Are you sure to delete this item?"
            }
          });
          dialogRef.disableClose = true;
          dialogRef.afterClosed().subscribe(function (result) {
            _this11.selectedOption = result;

            if (_this11.selectedOption === dialogRef.componentInstance.ACTION_CONFIRM) {
              _this11.orderService.deleteOrder(id).subscribe(function () {
                _this11.orderService.getOrders().subscribe(function (orders) {
                  _this11.freshDataList(orders);
                }, function (error) {
                  return _this11.errorMessage = error;
                });

                _this11.openSnackBar("The item has been deleted successfully. ", "Close");
              }, function (error) {
                _this11.errorMessage = error;
                console.log(_this11.errorMessage);

                _this11.openSnackBar("This item has not been deleted successfully. Please try again.", "Close");
              });
            }
          });
        }
      }]);

      return OrderListComponent;
    }();

    OrderListComponent.ɵfac = function OrderListComponent_Factory(t) {
      return new (t || OrderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]));
    };

    OrderListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderListComponent,
      selectors: [["order-list"]],
      viewQuery: function OrderListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialog"]])],
      decls: 83,
      vars: 14,
      consts: [[1, "light", 2, "height", "100%"], [1, "view-card-title"], ["mat-mini-fab", "", 2, "margin-right", "10px", "background-color", "#e07c9e", 3, "routerLink"], ["mat-mini-fab", "", 2, "margin-right", "10px", "background-color", "#a28b6e", 3, "click"], ["mat-mini-fab", "", 2, "margin-right", "10px", "background-color", "darkgray", 3, "click"], [1, "title-spacer"], ["appearance", "standard", 1, "search-form-fileld"], ["matInput", "", 3, "keyup"], ["matSort", "", 3, "dataSource"], ["table", ""], ["matColumnDef", "reference"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "quantity"], ["matColumnDef", "amount"], ["matColumnDef", "customerName"], ["matColumnDef", "orderDate"], ["matColumnDef", "shippedDate"], ["matColumnDef", "id"], ["style", "justify-content:right;", 4, "matHeaderCellDef"], ["style", "justify-content:right;", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "pageSize", "pageSizeOptions", "length"], ["paginator", ""], ["position", "end", "position", "end", "dark", "", "mode", "push", "opened", "false", 1, "search-panel"], ["sidenav", ""], [1, "profile-card"], ["mat-card-avatar", "", 1, "avatar"], [2, "margin-left", "20px"], ["matInput", "", "type", "text", "placeholder", "Reference No.", "name", "reference", 3, "ngModel", "ngModelChange"], ["reference", ""], ["matInput", "", "type", "text", "placeholder", "Order Date", "name", "reference", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "Customer", "name", "amount", 3, "ngModel", "ngModelChange"], ["amount", ""], ["matInput", "", "type", "text", "placeholder", "Customer Email", "name", "quantity", 3, "ngModel", "ngModelChange"], ["quantity", ""], ["mat-raised-button", "", 2, "color", "lightgrey", "background-color", "darkgreen", "margin", "5px", 3, "click"], ["mat-raised-button", "", 2, "color", "lightgrey", "background-color", "darkred", "margin", "5px", 3, "click"], ["mat-sort-header", ""], [2, "justify-content", "right"], ["mat-mini-fab", "", 2, "background-color", "teal", "min-height", "30px", "margin", "5px", 3, "routerLink"], ["mat-mini-fab", "", 2, "background-color", "lightblue", "min-height", "30px", "margin", "5px", 3, "click"]],
      template: function OrderListComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderListComponent_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

            return _r18.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderListComponent_Template_button_click_13_listener() {
            return ctx.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function OrderListComponent_Template_input_keyup_20_listener($event) {
            return ctx.applyFilter($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "filter_list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-table", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, OrderListComponent_mat_header_cell_26_Template, 2, 0, "mat-header-cell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, OrderListComponent_mat_cell_27_Template, 2, 1, "mat-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, OrderListComponent_mat_header_cell_29_Template, 2, 0, "mat-header-cell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, OrderListComponent_mat_cell_30_Template, 2, 1, "mat-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, OrderListComponent_mat_header_cell_32_Template, 2, 0, "mat-header-cell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, OrderListComponent_mat_cell_33_Template, 2, 1, "mat-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, OrderListComponent_mat_header_cell_35_Template, 2, 0, "mat-header-cell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, OrderListComponent_mat_cell_36_Template, 2, 1, "mat-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, OrderListComponent_mat_header_cell_38_Template, 2, 0, "mat-header-cell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, OrderListComponent_mat_cell_39_Template, 3, 3, "mat-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](40, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, OrderListComponent_mat_header_cell_41_Template, 2, 0, "mat-header-cell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, OrderListComponent_mat_cell_42_Template, 3, 3, "mat-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](43, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, OrderListComponent_mat_header_cell_44_Template, 1, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, OrderListComponent_mat_cell_45_Template, 7, 3, "mat-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, OrderListComponent_mat_header_row_46_Template, 1, 0, "mat-header-row", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, OrderListComponent_mat_row_47_Template, 1, 0, "mat-row", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "mat-paginator", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-sidenav", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Advanced Search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-nav-list", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderListComponent_Template_input_ngModelChange_61_listener($event) {
            return ctx.searchFilter.reference = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 32, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderListComponent_Template_input_ngModelChange_64_listener($event) {
            return ctx.searchFilter.orderDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 33, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderListComponent_Template_input_ngModelChange_67_listener($event) {
            return ctx.searchFilter.customerName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 35, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderListComponent_Template_input_ngModelChange_70_listener($event) {
            return ctx.searchFilter.customerEmail = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-action-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderListComponent_Template_button_click_75_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

            ctx.searchOrders(ctx.searchFilter);
            return _r18.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderListComponent_Template_button_click_79_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

            return ctx.resetSearchFilter(_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Reset ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2))("length", ctx.totalAmount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchFilter.reference);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchFilter.orderDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchFilter.customerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchFilter.customerEmail);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenav"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardAvatar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatNavList"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatList"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"]],
      styles: ["thead[_ngcontent-%COMP%] {\n  color: #337ab7;\n}\n\n.title-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.search-form-fileld[_ngcontent-%COMP%]{\n    margin-right: 20px;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.filter-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoZWFkIHtcbiAgY29sb3I6ICMzMzdhYjc7XG59XG5cbi50aXRsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnNlYXJjaC1mb3JtLWZpbGVsZHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cbi5tYXQtdGFibGUge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmZpbHRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDIwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'order-list',
          templateUrl: "./order-list.component.html",
          styleUrls: ["./order-list.component.css"],
          providers: [_shared__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialog"]]
        }]
      }], function () {
        return [{
          type: _order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
        }];
      }, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/order/order.module.ts":
  /*!***************************************!*\
    !*** ./src/app/order/order.module.ts ***!
    \***************************************/

  /*! exports provided: OrderModule */

  /***/
  function srcAppOrderOrderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderModule", function () {
      return OrderModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _order_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./order-list.component */
    "./src/app/order/order-list.component.ts");
    /* harmony import */


    var _order_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-guard.service */
    "./src/app/order/order-guard.service.ts");
    /* harmony import */


    var _order_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./order-form.component */
    "./src/app/order/order-form.component.ts");
    /* harmony import */


    var _product_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-dialog.component */
    "./src/app/order/product-dialog.component.ts");
    /* harmony import */


    var _order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./order.service */
    "./src/app/order/order.service.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _shared_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/material.module */
    "./src/app/shared/material.module.ts");
    /* harmony import */


    var _customer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../customer */
    "./src/app/customer/index.ts");
    /* harmony import */


    var _product__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../product */
    "./src/app/product/index.ts");

    var OrderModule = function OrderModule() {
      _classCallCheck(this, OrderModule);
    };

    OrderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OrderModule
    });
    OrderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OrderModule_Factory(t) {
        return new (t || OrderModule)();
      },
      providers: [_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"], _order_guard_service__WEBPACK_IMPORTED_MODULE_3__["OrderDetailGuard"], _order_guard_service__WEBPACK_IMPORTED_MODULE_3__["OrderEditGuard"], _customer__WEBPACK_IMPORTED_MODULE_9__["CustomerService"], _product__WEBPACK_IMPORTED_MODULE_10__["ProductService"]],
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: "",
        component: _order_list_component__WEBPACK_IMPORTED_MODULE_2__["OrderListComponent"]
      }, {
        path: "edit/:id",
        canDeactivate: [_order_guard_service__WEBPACK_IMPORTED_MODULE_3__["OrderEditGuard"]],
        component: _order_form_component__WEBPACK_IMPORTED_MODULE_4__["OrderFormComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderModule, {
        declarations: [_order_list_component__WEBPACK_IMPORTED_MODULE_2__["OrderListComponent"], _order_form_component__WEBPACK_IMPORTED_MODULE_4__["OrderFormComponent"], _product_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ProductDialogComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_order_list_component__WEBPACK_IMPORTED_MODULE_2__["OrderListComponent"], _order_form_component__WEBPACK_IMPORTED_MODULE_4__["OrderFormComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: "",
            component: _order_list_component__WEBPACK_IMPORTED_MODULE_2__["OrderListComponent"]
          }, {
            path: "edit/:id",
            canDeactivate: [_order_guard_service__WEBPACK_IMPORTED_MODULE_3__["OrderEditGuard"]],
            component: _order_form_component__WEBPACK_IMPORTED_MODULE_4__["OrderFormComponent"]
          }])],
          declarations: [_order_list_component__WEBPACK_IMPORTED_MODULE_2__["OrderListComponent"], _order_form_component__WEBPACK_IMPORTED_MODULE_4__["OrderFormComponent"], _product_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ProductDialogComponent"]],
          providers: [_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"], _order_guard_service__WEBPACK_IMPORTED_MODULE_3__["OrderDetailGuard"], _order_guard_service__WEBPACK_IMPORTED_MODULE_3__["OrderEditGuard"], _customer__WEBPACK_IMPORTED_MODULE_9__["CustomerService"], _product__WEBPACK_IMPORTED_MODULE_10__["ProductService"]],
          exports: [_order_list_component__WEBPACK_IMPORTED_MODULE_2__["OrderListComponent"], _order_form_component__WEBPACK_IMPORTED_MODULE_4__["OrderFormComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/order/order.service.ts":
  /*!****************************************!*\
    !*** ./src/app/order/order.service.ts ***!
    \****************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppOrderOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/Observable */
    "./node_modules/rxjs-compat/_esm2015/Observable.js");
    /* harmony import */


    var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/do */
    "./node_modules/rxjs-compat/_esm2015/add/operator/do.js");
    /* harmony import */


    var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/catch */
    "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
    /* harmony import */


    var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/observable/throw */
    "./node_modules/rxjs-compat/_esm2015/add/observable/throw.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/add/observable/of */
    "./node_modules/rxjs-compat/_esm2015/add/observable/of.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../_services */
    "./src/app/_services/index.ts");

    var OrderService = /*#__PURE__*/function () {
      function OrderService(http, backend) {
        _classCallCheck(this, OrderService);

        this.http = http;
        this.backend = backend;
        this.basicAction = 'orders/';
      }

      _createClass(OrderService, [{
        key: "getOrders",
        value: function getOrders() {
          // return this.http.get(this.basicAction)
          var action = "".concat(this.basicAction, "?_expand=customer");
          return this.backend.getAll(action).map(this.extractData)["catch"](this.handleError);
        }
      }, {
        key: "getOrder",
        value: function getOrder(id) {
          if (id === 0) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].of(this.initializeOrder());
          }

          ;
          var action = "".concat(this.basicAction).concat(id, "?_expand=customer");
          return this.backend.getById(action).map(this.extractData)["do"](function (data) {
            return console.log('getOrder: ' + JSON.stringify(data));
          })["catch"](this.handleError);
        }
      }, {
        key: "deleteOrder",
        value: function deleteOrder(id) {
          var action = "".concat(this.basicAction).concat(id);
          return this.backend["delete"](action)["catch"](this.handleError);
        }
      }, {
        key: "saveOrder",
        value: function saveOrder(order) {
          if (order.id === 0) {
            return this.createOrder(order);
          }

          return this.updateOrder(order);
        }
      }, {
        key: "createOrder",
        value: function createOrder(order) {
          order.id = undefined;
          return this.backend.create(this.basicAction, order).map(this.extractData)["catch"](this.handleError);
        }
      }, {
        key: "updateOrder",
        value: function updateOrder(order) {
          var action = "".concat(this.basicAction).concat(order.id);
          return this.backend.update(action, order).map(function () {
            return order;
          })["catch"](this.handleError);
        }
      }, {
        key: "extractData",
        value: function extractData(response) {
          var body = response.json ? response.json() : response;
          return body.data ? body.data : body || {};
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          // in a real world app, we may send the server to some remote logging infrastructure
          // instead of just logging it to the console
          console.error(error);
          return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]["throw"](error.json() || 'Server error');
        }
      }, {
        key: "initializeOrder",
        value: function initializeOrder() {
          // Return an initialized object
          return {
            id: 0,
            avatar: null,
            reference: null,
            amount: 0,
            products: Array(),
            orderDate: null,
            shippedDate: null,
            shipAddress: {},
            customerId: 0,
            quantity: 0,
            membership: false,
            customer: null
          };
        }
      }]);

      return OrderService;
    }();

    OrderService.ɵfac = function OrderService_Factory(t) {
      return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_8__["BackendService"]));
    };

    OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OrderService,
      factory: OrderService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_8__["BackendService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/order/product-dialog.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/order/product-dialog.component.ts ***!
    \***************************************************/

  /*! exports provided: ProductDialogComponent */

  /***/
  function srcAppOrderProductDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDialogComponent", function () {
      return ProductDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/debounceTime */
    "./node_modules/rxjs-compat/_esm2015/add/operator/debounceTime.js");
    /* harmony import */


    var rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/observable/fromEvent */
    "./node_modules/rxjs-compat/_esm2015/add/observable/fromEvent.js");
    /* harmony import */


    var rxjs_add_observable_merge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/add/observable/merge */
    "./node_modules/rxjs-compat/_esm2015/add/observable/merge.js");
    /* harmony import */


    var rxjs_Observable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/Observable */
    "./node_modules/rxjs-compat/_esm2015/Observable.js");
    /* harmony import */


    var _shared_number_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/number.validator */
    "./src/app/shared/number.validator.ts");
    /* harmony import */


    var _shared_generic_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/generic-validator */
    "./src/app/shared/generic-validator.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _product__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../product */
    "./src/app/product/index.ts");
    /* harmony import */


    var _customer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../customer */
    "./src/app/customer/index.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ProductDialogComponent_mat_error_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.displayMessage.product, " ");
      }
    }

    function ProductDialogComponent_mat_error_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.displayMessage.price, " ");
      }
    }

    function ProductDialogComponent_mat_error_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.displayMessage.quantity, " ");
      }
    }

    var ProductDialogComponent = /*#__PURE__*/function () {
      function ProductDialogComponent(fb, route, router, productService, customerService, data, dialogRef) {
        _classCallCheck(this, ProductDialogComponent);

        this.fb = fb;
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.customerService = customerService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.ACTION_CANCEL = "CANCEL";
        this.ACTION_SAVE = "SAVE";
        this.pageTitle = 'Add product to order'; // Use with the generic validation messcustomerId class

        this.displayMessage = {}; // Defines all of the validation messcustomerIds for the form.
        // These could instead be retrieved from a file or database.

        this.validationMessages = {
          product: {
            required: 'Product first name is required.',
            minlength: 'Product first name must be at least one characters.',
            maxlength: 'Product first name cannot exceed 100 characters.'
          },
          price: {
            range: 'Rewards of the product must be between 1 (lowest) and 9999 (highest).'
          },
          quantity: {
            range: 'Rewards of the product must be between 1 (lowest) and 20 (highest).'
          },
          customerId: {
            range: 'Rewards of the product must be between 1 (lowest) and 99999 (highest).'
          }
        };
        this.genericValidator = new _shared_generic_validator__WEBPACK_IMPORTED_MODULE_8__["GenericValidator"](this.validationMessages);
      }

      _createClass(ProductDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.productForm = this.fb.group({
            product: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            price: ['', _shared_number_validator__WEBPACK_IMPORTED_MODULE_7__["NumberValidators"].range(1, 99999)],
            quantity: ['', _shared_number_validator__WEBPACK_IMPORTED_MODULE_7__["NumberValidators"].range(1, 20)],
            customerId: ['', _shared_number_validator__WEBPACK_IMPORTED_MODULE_7__["NumberValidators"].range(1, 9999999)],
            membership: false
          }); // Read the product Id from the route parameter

          this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];

            _this12.getProduct(id);
          });
          this.getCustomers();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _rxjs_Observable__WEB2,
              _this13 = this;

          // Watch for the blur event from any input element on the form.
          var controlBlurs = this.formInputElements.map(function (formControl) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_6__["Observable"].fromEvent(formControl.nativeElement, 'blur');
          }); // Merge the blur event observable with the valueChanges observable

          (_rxjs_Observable__WEB2 = rxjs_Observable__WEBPACK_IMPORTED_MODULE_6__["Observable"]).merge.apply(_rxjs_Observable__WEB2, [this.productForm.valueChanges].concat(_toConsumableArray(controlBlurs))).debounceTime(800).subscribe(function () {
            _this13.displayMessage = _this13.genericValidator.processMessages(_this13.productForm);
          });
        }
      }, {
        key: "getProduct",
        value: function getProduct(id) {
          var _this14 = this;

          this.productService.getProduct(id).subscribe(function (product) {
            return _this14.onProductRetrieved(product);
          }, function (error) {
            return _this14.errorMessage = error;
          });
        }
      }, {
        key: "getCustomers",
        value: function getCustomers() {
          var _this15 = this;

          this.customerService.getCustomers().subscribe(function (customers) {
            _this15.customers = customers;
          }, function (error) {
            return _this15.errorMessage = error;
          });
        }
      }, {
        key: "onProductRetrieved",
        value: function onProductRetrieved(product) {
          if (this.productForm) {
            this.productForm.reset();
          }

          this.product = product;

          if (this.product.id === 0) {
            this.pageTitle = 'Add Product';
          } else {
            this.pageTitle = "Edit Product: ".concat(this.product.productName, " ").concat(this.product.unitPrice);
          } // Update the data on the form


          this.productForm.patchValue({
            product: this.product.productName,
            price: this.product.unitPrice,
            quantity: this.product.unitInStock
          });
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct() {
          var _this16 = this;

          if (this.product.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
          } else {
            if (confirm("Really delete the product: ".concat(this.product.productName, "?"))) {
              this.productService.deleteProduct(this.product.id).subscribe(function () {
                return _this16.onSaveComplete();
              }, function (error) {
                return _this16.errorMessage = error;
              });
            }
          }
        }
      }, {
        key: "saveProduct",
        value: function saveProduct() {
          var _this17 = this;

          if (this.productForm.dirty && this.productForm.valid) {
            // Copy the form values over the product object values
            var p = Object.assign({}, this.product, this.productForm.value);
            this.productService.saveProduct(p).subscribe(function () {
              return _this17.onSaveComplete();
            }, function (error) {
              return _this17.errorMessage = error;
            });
          } else if (!this.productForm.dirty) {
            this.onSaveComplete();
          }
        }
      }, {
        key: "onSaveComplete",
        value: function onSaveComplete() {
          // Reset the form to clear the flags
          this.productForm.reset();
          this.router.navigate(['/products']);
        }
      }]);

      return ProductDialogComponent;
    }();

    ProductDialogComponent.ɵfac = function ProductDialogComponent_Factory(t) {
      return new (t || ProductDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product__WEBPACK_IMPORTED_MODULE_10__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_customer__WEBPACK_IMPORTED_MODULE_11__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]));
    };

    ProductDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductDialogComponent,
      selectors: [["ng-component"]],
      viewQuery: function ProductDialogComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formInputElements = _t);
        }
      },
      decls: 20,
      vars: 7,
      consts: [["mat-dialog-title", ""], ["novalidate", "", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "dialog-field"], ["matInput", "", "type", "text", "placeholder", "Product (required)", "formControlName", "product"], ["productId", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Amount", "id", "priceId", "type", "number", "placeholder", "Price (required)", "formControlName", "price"], ["matInput", "", "placeholder", "Quantity", "id", "quantityId", "type", "number", "placeholder", "Quantity (required)", "formControlName", "quantity"], ["mat-raised-button", "", 3, "mat-dialog-close"]],
      template: function ProductDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProductDialogComponent_Template_form_ngSubmit_3_listener() {
            return ctx.saveProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductDialogComponent_mat_error_7_Template, 2, 1, "mat-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductDialogComponent_mat_error_10_Template, 2, 1, "mat-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductDialogComponent_mat_error_13_Template, 2, 1, "mat-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Confirm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ">");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pageTitle, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.productForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMessage.product);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMessage.price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMessage.quantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.ACTION_SAVE);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.ACTION_CANCEL);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './product-dialog.component.html'
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _product__WEBPACK_IMPORTED_MODULE_10__["ProductService"]
        }, {
          type: _customer__WEBPACK_IMPORTED_MODULE_11__["CustomerService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }];
      }, {
        formInputElements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/product/index.ts":
  /*!**********************************!*\
    !*** ./src/app/product/index.ts ***!
    \**********************************/

  /*! exports provided: ProductListComponent, ProductFormComponent, ProductService, ProductModule */

  /***/
  function srcAppProductIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./product-list.component */
    "./src/app/product/product-list.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return _product_list_component__WEBPACK_IMPORTED_MODULE_0__["ProductListComponent"];
    });
    /* harmony import */


    var _product_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./product-form.component */
    "./src/app/product/product-form.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function () {
      return _product_form_component__WEBPACK_IMPORTED_MODULE_1__["ProductFormComponent"];
    });
    /* harmony import */


    var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./product.service */
    "./src/app/product/product.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"];
    });
    /* harmony import */


    var _product_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product.module */
    "./src/app/product/product.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProductModule", function () {
      return _product_module__WEBPACK_IMPORTED_MODULE_3__["ProductModule"];
    });
    /***/

  }
}]);
//# sourceMappingURL=order-order-module-es5.js.map