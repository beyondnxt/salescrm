function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~customer-customer-module~order-order-module"], {
  /***/
  "./node_modules/rxjs-compat/_esm2015/Observable.js":
  /*!*********************************************************!*\
    !*** ./node_modules/rxjs-compat/_esm2015/Observable.js ***!
    \*********************************************************/

  /*! exports provided: Observable */

  /***/
  function node_modulesRxjsCompat_esm2015ObservableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Observable", function () {
      return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"];
    }); //# sourceMappingURL=Observable.js.map

    /***/

  },

  /***/
  "./src/app/customer/customer-form.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/customer/customer-form.component.ts ***!
    \*****************************************************/

  /*! exports provided: CustomerFormComponent */

  /***/
  function srcAppCustomerCustomerFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerFormComponent", function () {
      return CustomerFormComponent;
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


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _customer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./customer.service */
    "./src/app/customer/customer.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");

    function CustomerFormComponent_img_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "uppercase");
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r0.imageWidth, "px")("height", ctx_r0.imageWidth, "px")("margin", ctx_r0.imageMargin, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.customer.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 8, ctx_r0.customer.firstname));
      }
    }

    function CustomerFormComponent_mat_error_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.displayMessage.firstname, " ");
      }
    }

    function CustomerFormComponent_mat_error_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.displayMessage.lastname, " ");
      }
    }

    function CustomerFormComponent_mat_error_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.displayMessage.email, " ");
      }
    }

    var _c0 = function _c0() {
      return ["/customers"];
    };

    var CustomerFormComponent = /*#__PURE__*/function () {
      function CustomerFormComponent(fb, route, router, customerService, breakpointObserver) {
        var _this = this;

        _classCallCheck(this, CustomerFormComponent);

        this.fb = fb;
        this.route = route;
        this.router = router;
        this.customerService = customerService;
        this.breakpointObserver = breakpointObserver;
        this.pageTitle = 'Update Customer';
        this.customer = {};
        this.imageWidth = 100;
        this.imageMargin = 2;
        this.fieldColspan = 3; // Use with the generic validation message class

        this.displayMessage = {}; // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.

        this.validationMessages = {
          firstname: {
            required: 'Customer first name is required.',
            minlength: 'Customer first name must be at least one characters.',
            maxlength: 'Customer first name cannot exceed 100 characters.'
          },
          lastname: {
            required: 'Customer last name is required.',
            minlength: 'Customer last name must be at least one characters.',
            maxlength: 'Customer last name cannot exceed 100 characters.'
          },
          email: {
            required: 'Customer email is required.',
            minlength: 'Customer email must be at least one characters.',
            maxlength: 'Customer email cannot exceed 200 characters.'
          },
          rewards: {
            range: 'Rewards of the customer must be between 0 (lowest) and 150 (highest).'
          },
          phone: {
            maxlength: 'Customer phone cannot exceed 12 characters.'
          },
          mobile: {
            maxlength: 'Customer mobile cannot exceed 12 characters.'
          }
        };
        breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["Breakpoints"].HandsetLandscape, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["Breakpoints"].HandsetPortrait]).subscribe(function (result) {
          // console.log(result)
          _this.onScreensizeChange(result);
        });
        this.genericValidator = new _shared_generic_validator__WEBPACK_IMPORTED_MODULE_7__["GenericValidator"](this.validationMessages);
      }

      _createClass(CustomerFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.customerForm = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)]],
            rewards: ['', _shared_number_validator__WEBPACK_IMPORTED_MODULE_6__["NumberValidators"].range(0, 150)],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12)],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12)],
            membership: false
          }); // Read the customer Id from the route parameter

          this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];

            _this2.getCustomer(id);
          });
          this.sub.add(null);
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
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].fromEvent(formControl.nativeElement, 'blur');
          }); // Merge the blur event observable with the valueChanges observable

          (_rxjs_Observable__WEB = rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"]).merge.apply(_rxjs_Observable__WEB, [this.customerForm.valueChanges].concat(_toConsumableArray(controlBlurs))).debounceTime(500).subscribe(function (value) {
            _this3.displayMessage = _this3.genericValidator.processMessages(_this3.customerForm);
          });
        }
      }, {
        key: "getCustomer",
        value: function getCustomer(id) {
          var _this4 = this;

          this.customerService.getCustomer(id).subscribe(function (customer) {
            return _this4.onCustomerRetrieved(customer);
          }, function (error) {
            return _this4.errorMessage = error;
          });
        }
      }, {
        key: "onCustomerRetrieved",
        value: function onCustomerRetrieved(customer) {
          if (this.customerForm) {
            this.customerForm.reset();
          }

          this.customer = customer;

          if (this.customer.id === 0) {
            this.pageTitle = 'New Customer';
          } else {
            this.pageTitle = "Customer: ".concat(this.customer.firstname, " ").concat(this.customer.lastname);
          } // Update the data on the form


          this.customerForm.patchValue({
            firstname: this.customer.firstname,
            lastname: this.customer.lastname,
            email: this.customer.email,
            rewards: this.customer.rewards,
            phone: this.customer.phone,
            mobile: this.customer.mobile,
            membership: this.customer.membership
          });
        }
      }, {
        key: "deleteCustomer",
        value: function deleteCustomer() {
          var _this5 = this;

          if (this.customer.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
          } else {
            if (confirm("Really delete the customer: ".concat(this.customer.firstname, "?"))) {
              this.customerService.deleteCustomer(this.customer.id).subscribe(function () {
                return _this5.onSaveComplete();
              }, function (error) {
                return _this5.errorMessage = error;
              });
            }
          }
        }
      }, {
        key: "toggleImage",
        value: function toggleImage() {
          event.preventDefault();
          this.showImage = !this.showImage;
        }
      }, {
        key: "saveCustomer",
        value: function saveCustomer() {
          var _this6 = this;

          if (this.customerForm.dirty && this.customerForm.valid) {
            // Copy the form values over the customer object values
            var customer = Object.assign({}, this.customer, this.customerForm.value);
            this.customerService.saveCustomer(customer).subscribe(function () {
              return _this6.onSaveComplete();
            }, function (error) {
              return _this6.errorMessage = error;
            });
          } else if (!this.customerForm.dirty) {
            this.onSaveComplete();
          }
        }
      }, {
        key: "onSaveComplete",
        value: function onSaveComplete() {
          // Reset the form to clear the flags
          this.customerForm.reset();
          this.router.navigate(['/customers']);
        }
      }, {
        key: "onScreensizeChange",
        value: function onScreensizeChange(result) {
          // debugger
          var isLess600 = this.breakpointObserver.isMatched('(max-width: 599px)');
          var isLess1000 = this.breakpointObserver.isMatched('(max-width: 959px)');
          console.log(" isLess600  ".concat(isLess600, " \n            isLess1000 ").concat(isLess1000, "  "));

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
      }]);

      return CustomerFormComponent;
    }();

    CustomerFormComponent.ɵfac = function CustomerFormComponent_Factory(t) {
      return new (t || CustomerFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_customer_service__WEBPACK_IMPORTED_MODULE_10__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["BreakpointObserver"]));
    };

    CustomerFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomerFormComponent,
      selectors: [["customer-form"]],
      viewQuery: function CustomerFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formInputElements = _t);
        }
      },
      decls: 55,
      vars: 17,
      consts: [["novalidate", "", 3, "formGroup", "ngSubmit"], [2, "background-color", "#FFF"], [1, "view-card-title"], [1, "title-spacer"], ["mat-mini-fab", "", "type", "submit", 1, "primary", 2, "margin-right", "10px", "background-color", "darkgray", 3, "disabled"], ["mat-mini-fab", "", 1, "", 2, "margin-right", "10px", 3, "routerLink"], [2, "margin", "5 0 5 10px"], ["cols", "12", "rowHeight", "120px"], [3, "colspan"], [1, "view-label"], ["mat-card-avatar", "", "class", "center-block img-responsive", 3, "src", "title", "width", "height", "margin", 4, "ngIf"], [1, "form-card"], ["cols", "12", "rowHeight", "80px"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "id", "firstNameId", "type", "text", "placeholder", "First Name (required)", "formControlName", "firstname"], [4, "ngIf"], ["matInput", "", "id", "lastNameId", "type", "text", "placeholder", "Last Name (required)", "formControlName", "lastname"], ["matInput", "", "id", "email", "type", "email", "placeholder", "Email ", "formControlName", "email"], ["matInput", "", "id", "phone", "type", "text", "placeholder", "Phone", "formControlName", "phone"], ["matInput", "", "id", "mobile", "type", "text", "placeholder", "Mobile ", "formControlName", "mobile"], ["matInput", "", "placeholder", "Rewards", "id", "ageId", "type", "number", "formControlName", "rewards"], ["id", "membership", "formControlName", "membership"], ["mat-card-avatar", "", 1, "center-block", "img-responsive", 3, "src", "title"]],
      template: function CustomerFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomerFormComponent_Template_form_ngSubmit_0_listener() {
            return ctx.saveCustomer();
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-grid-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-grid-tile", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CustomerFormComponent_img_18_Template, 2, 10, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-grid-list", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-grid-tile", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CustomerFormComponent_mat_error_26_Template, 2, 1, "mat-error", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-grid-tile", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CustomerFormComponent_mat_error_32_Template, 2, 1, "mat-error", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-grid-tile", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CustomerFormComponent_mat_error_38_Template, 2, 1, "mat-error", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-grid-tile", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-grid-tile", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-grid-tile", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-grid-tile", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-slide-toggle", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Membership");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.customerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pageTitle, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.customerForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.fieldColspan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customer.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.fieldColspan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMessage.firstname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.fieldColspan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMessage.lastname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.fieldColspan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMessage.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.fieldColspan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.fieldColspan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.fieldColspan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.fieldColspan);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridTile"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardAvatar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatError"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["UpperCasePipe"]],
      styles: [".title-spacer[_ngcontent-%COMP%] {\n        flex: 1 1 auto;\n      }\n    .form-field[_ngcontent-%COMP%]{\n        width: 100%;\n        margin-left: 20px;\n        margin-right: 20px;\n    }\n    .avatar-field[_ngcontent-%COMP%] {\n        left: 0;\n        margin: 0 auto;\n        position: absolute;\n        margin-left: 50px;\n    }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'customer-form',
          templateUrl: './customer-form.component.html',
          styles: ["\n    .title-spacer {\n        flex: 1 1 auto;\n      }\n    .form-field{\n        width: 100%;\n        margin-left: 20px;\n        margin-right: 20px;\n    }\n    .avatar-field {\n        left: 0;\n        margin: 0 auto;\n        position: absolute;\n        margin-left: 50px;\n    }\n    "]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _customer_service__WEBPACK_IMPORTED_MODULE_10__["CustomerService"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["BreakpointObserver"]
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
  "./src/app/customer/customer-guard.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/customer/customer-guard.service.ts ***!
    \****************************************************/

  /*! exports provided: CustomerDetailGuard, CustomerEditGuard */

  /***/
  function srcAppCustomerCustomerGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerDetailGuard", function () {
      return CustomerDetailGuard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerEditGuard", function () {
      return CustomerEditGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CustomerDetailGuard = /*#__PURE__*/function () {
      function CustomerDetailGuard(router) {
        _classCallCheck(this, CustomerDetailGuard);

        this.router = router;
      }

      _createClass(CustomerDetailGuard, [{
        key: "canActivate",
        value: function canActivate(route) {
          var id = +route.url[1].path;

          if (isNaN(id) || id < 1) {
            alert('Invalid customer Id'); // start a new navigation to redirect to list page

            this.router.navigate(['/customers']); // abort current navigation

            return false;
          }

          ;
          return true;
        }
      }]);

      return CustomerDetailGuard;
    }();

    CustomerDetailGuard.ɵfac = function CustomerDetailGuard_Factory(t) {
      return new (t || CustomerDetailGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    CustomerDetailGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomerDetailGuard,
      factory: CustomerDetailGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerDetailGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();

    var CustomerEditGuard = /*#__PURE__*/function () {
      function CustomerEditGuard() {
        _classCallCheck(this, CustomerEditGuard);
      }

      _createClass(CustomerEditGuard, [{
        key: "canDeactivate",
        value: function canDeactivate(component) {
          if (component.customerForm.dirty) {
            var customerName = component.customerForm.get('firstname').value || 'New Customer';
            return confirm("Navigate away and lose all changes to ".concat(customerName, "?"));
          }

          return true;
        }
      }]);

      return CustomerEditGuard;
    }();

    CustomerEditGuard.ɵfac = function CustomerEditGuard_Factory(t) {
      return new (t || CustomerEditGuard)();
    };

    CustomerEditGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomerEditGuard,
      factory: CustomerEditGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerEditGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/customer/customer-list.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/customer/customer-list.component.ts ***!
    \*****************************************************/

  /*! exports provided: CustomerListComponent */

  /***/
  function srcAppCustomerCustomerListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function () {
      return CustomerListComponent;
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


    var _customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./customer.service */
    "./src/app/customer/customer.service.ts");
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

    function CustomerListComponent_mat_header_cell_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-cell");
      }
    }

    function CustomerListComponent_mat_cell_27_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "uppercase");
      }

      if (rf & 2) {
        var customer_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r22.imageWidth, "px")("margin", ctx_r22.imageMargin, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", customer_r21.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, customer_r21.firstname));
      }
    }

    function CustomerListComponent_mat_cell_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerListComponent_mat_cell_27_img_1_Template, 2, 8, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customer_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", customer_r21.avatar);
      }
    }

    function CustomerListComponent_mat_header_cell_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomerListComponent_mat_cell_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customer_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", customer_r24.firstname, " ");
      }
    }

    function CustomerListComponent_mat_header_cell_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomerListComponent_mat_cell_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customer_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", customer_r25.lastname, " ");
      }
    }

    function CustomerListComponent_mat_header_cell_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomerListComponent_mat_cell_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customer_r26 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", customer_r26.email, " ");
      }
    }

    function CustomerListComponent_mat_header_cell_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Rewards ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomerListComponent_mat_cell_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customer_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, customer_r27.rewards), " ");
      }
    }

    function CustomerListComponent_mat_header_cell_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Membershiop");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomerListComponent_mat_cell_42_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "check_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomerListComponent_mat_cell_42_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "highlight_off");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomerListComponent_mat_cell_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerListComponent_mat_cell_42_span_1_Template, 3, 0, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerListComponent_mat_cell_42_span_2_Template, 3, 0, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customer_r28 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !customer_r28.membership);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", customer_r28.membership);
      }
    }

    function CustomerListComponent_mat_header_cell_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-cell", 47);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/customers/edit/", a1];
    };

    function CustomerListComponent_mat_cell_45_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerListComponent_mat_cell_45_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var customer_r31 = ctx.$implicit;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.openDialog(customer_r31.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customer_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, customer_r31.id));
      }
    }

    function CustomerListComponent_mat_header_row_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
      }
    }

    function CustomerListComponent_mat_row_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
      }
    }

    var _c1 = function _c1() {
      return ["/customers/edit/", 0];
    };

    var _c2 = function _c2() {
      return [5, 10];
    };

    var CustomerListComponent = /*#__PURE__*/function () {
      function CustomerListComponent(customerService, // private pagerService: PagerService,
      dialog, snackBar) {
        _classCallCheck(this, CustomerListComponent);

        this.customerService = customerService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.pageTitle = 'Customers';
        this.imageWidth = 30;
        this.imageMargin = 2;
        this.showImage = false;
        this.listFilter = {};
        this.displayedColumns = ["avatar", "firstname", "lastname", "rewards", "email", "membership", "id"];
        this.dataSource = null;
        this.pager = {};
        this.searchFilter = {
          firstname: "",
          lastname: "",
          email: ""
        };
      }

      _createClass(CustomerListComponent, [{
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches

          this.dataSource.filter = filterValue;
        }
      }, {
        key: "freshDataList",
        value: function freshDataList(customers) {
          this.customers = customers;
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.customers);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.customerService.getCustomers().subscribe(function (customers) {
            _this7.freshDataList(customers);
          }, function (error) {
            return _this7.errorMessage = error;
          });
          this.searchFilter = {};
          this.listFilter = {};
        }
      }, {
        key: "getCustomers",
        value: function getCustomers(pageNum) {
          var _this8 = this;

          this.customerService.getCustomers().subscribe(function (customers) {
            _this8.freshDataList(customers);
          }, function (error) {
            return _this8.errorMessage = error;
          });
        }
      }, {
        key: "searchCustomers",
        value: function searchCustomers(filters) {
          var _this9 = this;

          if (filters) {
            this.customerService.getCustomers().subscribe(function (customers) {
              _this9.customers = customers;
              console.log(_this9.customers.length);
              _this9.customers = _this9.customers.filter(function (customer) {
                var match = true;
                Object.keys(filters).forEach(function (k) {
                  match = match && filters[k] ? customer[k].toLocaleLowerCase().indexOf(filters[k].toLocaleLowerCase()) > -1 : match;
                });
                return match;
              });

              _this9.freshDataList(customers);
            }, function (error) {
              return _this9.errorMessage = error;
            });
          }
        }
      }, {
        key: "resetListFilter",
        value: function resetListFilter() {
          this.listFilter = {};
          this.getCustomers();
        }
      }, {
        key: "reset",
        value: function reset() {
          this.listFilter = {};
          this.searchFilter = {};
          this.getCustomers();
        }
      }, {
        key: "resetSearchFilter",
        value: function resetSearchFilter(searchPanel) {
          searchPanel.toggle();
          this.searchFilter = {};
          this.getCustomers();
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
          var _this10 = this;

          var dialogRef = this.dialog.open(_shared__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialog"], {
            data: {
              title: 'Dialog',
              message: 'Are you sure to delete this item?'
            }
          });
          dialogRef.disableClose = true;
          dialogRef.afterClosed().subscribe(function (result) {
            _this10.selectedOption = result;

            if (_this10.selectedOption === dialogRef.componentInstance.ACTION_CONFIRM) {
              _this10.customerService.deleteCustomer(id).subscribe(function () {
                _this10.customerService.getCustomers().subscribe(function (customers) {
                  _this10.freshDataList(customers);
                }, function (error) {
                  return _this10.errorMessage = error;
                });

                _this10.openSnackBar("The item has been deleted successfully. ", "Close");
              }, function (error) {
                _this10.errorMessage = error;
                console.log(_this10.errorMessage);

                _this10.openSnackBar("This item has not been deleted successfully. Please try again.", "Close");
              });
            }
          });
        }
      }]);

      return CustomerListComponent;
    }();

    CustomerListComponent.ɵfac = function CustomerListComponent_Factory(t) {
      return new (t || CustomerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]));
    };

    CustomerListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomerListComponent,
      selectors: [["customer-list"]],
      viewQuery: function CustomerListComponent_Query(rf, ctx) {
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
      decls: 85,
      vars: 12,
      consts: [[1, "light", 2, "height", "100%"], [1, "view-card-title"], [1, "primary"], ["mat-mini-fab", "", 2, "margin-right", "10px", "background-color", "#e07c9e", 3, "routerLink"], ["mat-mini-fab", "", 2, "margin-right", "10px", "background-color", "#a28b6e", 3, "click"], ["mat-mini-fab", "", 2, "margin-right", "10px", "background-color", "darkgray", 3, "click"], [1, "title-spacer"], ["appearance", "standard", 1, "search-form-fileld"], ["matInput", "", 3, "keyup"], ["matSort", "", 3, "dataSource"], ["table", ""], ["matColumnDef", "avatar"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "firstname"], ["mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "lastname"], ["matColumnDef", "email"], ["matColumnDef", "rewards"], ["matColumnDef", "membership"], ["matColumnDef", "id"], ["style", "justify-content:right;", 4, "matHeaderCellDef"], ["style", "justify-content:right;", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "pageSize", "pageSizeOptions"], ["paginator", ""], ["position", "end", "dark", "", "mode", "push", "opened", "false", 1, "search-panel"], ["sidenav", ""], [1, "profile-card"], ["mat-card-avatar", "", 1, "avatar"], [2, "margin-left", "50px"], ["appearance", "standard"], ["matInput", "", "appearance", "standard", "placeholder", "First Name", "name", "firstname", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Last Name", "name", "reference", 3, "ngModel", "ngModelChange"], ["reference", ""], ["matInput", "", "appearance", "standard", "placeholder", "Mobile", "name", "amount", 3, "ngModel", "ngModelChange"], ["amount", ""], ["mat-raised-button", "", 2, "color", "lightgrey", "background-color", "darkgreen", "margin", "5px", 3, "click"], ["mat-raised-button", "", 2, "color", "lightgrey", "background-color", "darkred", "margin", "5px", 3, "click"], [3, "src", "title", "width", "margin", 4, "ngIf"], [3, "src", "title"], ["mat-sort-header", ""], ["style", "color:green", 4, "ngIf"], ["style", "color:darkgrey", 4, "ngIf"], [2, "color", "green"], [2, "color", "darkgrey"], [2, "justify-content", "right"], ["mat-mini-fab", "", 2, "background-color", "teal", "min-height", "30px", "margin", "5px", 3, "routerLink"], ["mat-mini-fab", "", 2, "background-color", "lightblue", "min-height", "30px", "margin", "5px", 3, "click"]],
      template: function CustomerListComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerListComponent_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

            return _r18.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerListComponent_Template_button_click_13_listener() {
            return ctx.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CustomerListComponent_Template_input_keyup_20_listener($event) {
            return ctx.applyFilter($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "filter_list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-table", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CustomerListComponent_mat_header_cell_26_Template, 1, 0, "mat-header-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CustomerListComponent_mat_cell_27_Template, 2, 1, "mat-cell", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CustomerListComponent_mat_header_cell_29_Template, 2, 0, "mat-header-cell", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CustomerListComponent_mat_cell_30_Template, 2, 1, "mat-cell", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CustomerListComponent_mat_header_cell_32_Template, 2, 0, "mat-header-cell", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CustomerListComponent_mat_cell_33_Template, 2, 1, "mat-cell", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CustomerListComponent_mat_header_cell_35_Template, 2, 0, "mat-header-cell", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CustomerListComponent_mat_cell_36_Template, 2, 1, "mat-cell", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CustomerListComponent_mat_header_cell_38_Template, 2, 0, "mat-header-cell", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CustomerListComponent_mat_cell_39_Template, 3, 3, "mat-cell", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](40, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CustomerListComponent_mat_header_cell_41_Template, 2, 0, "mat-header-cell", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CustomerListComponent_mat_cell_42_Template, 3, 2, "mat-cell", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](43, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CustomerListComponent_mat_header_cell_44_Template, 1, 0, "mat-header-cell", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CustomerListComponent_mat_cell_45_Template, 7, 3, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CustomerListComponent_mat_header_row_46_Template, 1, 0, "mat-header-row", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CustomerListComponent_mat_row_47_Template, 1, 0, "mat-row", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "mat-paginator", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-sidenav", 27, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Advanced Search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-nav-list", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerListComponent_Template_input_ngModelChange_63_listener($event) {
            return ctx.searchFilter.firstname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-form-field", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 34, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerListComponent_Template_input_ngModelChange_67_listener($event) {
            return ctx.searchFilter.customerDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 36, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerListComponent_Template_input_ngModelChange_72_listener($event) {
            return ctx.searchFilter.customerName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-action-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerListComponent_Template_button_click_77_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

            ctx.searchCustomers(ctx.searchFilter);
            return _r18.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerListComponent_Template_button_click_81_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

            return ctx.resetSearchFilter(_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Reset ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchFilter.firstname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchFilter.customerDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchFilter.customerName);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenav"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardAvatar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatNavList"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatList"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DecimalPipe"]],
      styles: ["thead[_ngcontent-%COMP%] {\n  color: #337AB7;\n}\n\n.title-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.search-form-fileld[_ngcontent-%COMP%]{\n    margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9jdXN0b21lci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aGVhZCB7XG4gIGNvbG9yOiAjMzM3QUI3O1xufVxuXG4udGl0bGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5zZWFyY2gtZm9ybS1maWxlbGR7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'customer-list',
          templateUrl: './customer-list.component.html',
          styleUrls: ['./customer-list.component.css'],
          providers: [_shared__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialog"]]
        }]
      }], function () {
        return [{
          type: _customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]
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
  "./src/app/customer/customer.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/customer/customer.module.ts ***!
    \*********************************************/

  /*! exports provided: CustomerModule */

  /***/
  function srcAppCustomerCustomerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerModule", function () {
      return CustomerModule;
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


    var _customer_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./customer-list.component */
    "./src/app/customer/customer-list.component.ts");
    /* harmony import */


    var _customer_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customer-guard.service */
    "./src/app/customer/customer-guard.service.ts");
    /* harmony import */


    var _customer_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./customer-form.component */
    "./src/app/customer/customer-form.component.ts");
    /* harmony import */


    var _customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./customer.service */
    "./src/app/customer/customer.service.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _shared_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/material.module */
    "./src/app/shared/material.module.ts");

    var CustomerModule = function CustomerModule() {
      _classCallCheck(this, CustomerModule);
    };

    CustomerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CustomerModule
    });
    CustomerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CustomerModule_Factory(t) {
        return new (t || CustomerModule)();
      },
      providers: [_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"], _customer_guard_service__WEBPACK_IMPORTED_MODULE_3__["CustomerDetailGuard"], _customer_guard_service__WEBPACK_IMPORTED_MODULE_3__["CustomerEditGuard"]],
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], // ReactiveFormsModule,
      _shared_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: "",
        component: _customer_list_component__WEBPACK_IMPORTED_MODULE_2__["CustomerListComponent"]
      }, {
        path: "new/",
        canDeactivate: [_customer_guard_service__WEBPACK_IMPORTED_MODULE_3__["CustomerEditGuard"]],
        component: _customer_form_component__WEBPACK_IMPORTED_MODULE_4__["CustomerFormComponent"]
      }, {
        path: "edit/:id",
        canDeactivate: [_customer_guard_service__WEBPACK_IMPORTED_MODULE_3__["CustomerEditGuard"]],
        component: _customer_form_component__WEBPACK_IMPORTED_MODULE_4__["CustomerFormComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomerModule, {
        declarations: [
        /**
         * Components / Directives/ Pipes
         */
        _customer_list_component__WEBPACK_IMPORTED_MODULE_2__["CustomerListComponent"], _customer_form_component__WEBPACK_IMPORTED_MODULE_4__["CustomerFormComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], // ReactiveFormsModule,
        _shared_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_customer_list_component__WEBPACK_IMPORTED_MODULE_2__["CustomerListComponent"], _customer_form_component__WEBPACK_IMPORTED_MODULE_4__["CustomerFormComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], // ReactiveFormsModule,
          _shared_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: "",
            component: _customer_list_component__WEBPACK_IMPORTED_MODULE_2__["CustomerListComponent"]
          }, {
            path: "new/",
            canDeactivate: [_customer_guard_service__WEBPACK_IMPORTED_MODULE_3__["CustomerEditGuard"]],
            component: _customer_form_component__WEBPACK_IMPORTED_MODULE_4__["CustomerFormComponent"]
          }, {
            path: "edit/:id",
            canDeactivate: [_customer_guard_service__WEBPACK_IMPORTED_MODULE_3__["CustomerEditGuard"]],
            component: _customer_form_component__WEBPACK_IMPORTED_MODULE_4__["CustomerFormComponent"]
          }])],
          declarations: [
          /**
           * Components / Directives/ Pipes
           */
          _customer_list_component__WEBPACK_IMPORTED_MODULE_2__["CustomerListComponent"], _customer_form_component__WEBPACK_IMPORTED_MODULE_4__["CustomerFormComponent"]],
          providers: [_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"], _customer_guard_service__WEBPACK_IMPORTED_MODULE_3__["CustomerDetailGuard"], _customer_guard_service__WEBPACK_IMPORTED_MODULE_3__["CustomerEditGuard"]],
          // entryComponents: [MatOption],
          exports: [_customer_list_component__WEBPACK_IMPORTED_MODULE_2__["CustomerListComponent"], _customer_form_component__WEBPACK_IMPORTED_MODULE_4__["CustomerFormComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/customer/customer.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/customer/customer.service.ts ***!
    \**********************************************/

  /*! exports provided: CustomerService */

  /***/
  function srcAppCustomerCustomerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
      return CustomerService;
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

    var CustomerService = /*#__PURE__*/function () {
      function CustomerService(http, backend) {
        _classCallCheck(this, CustomerService);

        this.http = http;
        this.backend = backend;
        this.basicAction = 'customers/';
      }

      _createClass(CustomerService, [{
        key: "getCustomers",
        value: function getCustomers() {
          return this.backend.getAll(this.basicAction).map(this.extractData)["catch"](this.handleError);
        }
      }, {
        key: "getCustomer",
        value: function getCustomer(id) {
          if (id === 0) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].of(this.initializeCustomer());
          }

          ;
          var action = "".concat(this.basicAction).concat(id);
          return this.backend.getById(action).map(this.extractData)["catch"](this.handleError);
        }
      }, {
        key: "deleteCustomer",
        value: function deleteCustomer(id) {
          var action = "".concat(this.basicAction).concat(id);
          return this.backend["delete"](action)["catch"](this.handleError);
        }
      }, {
        key: "saveCustomer",
        value: function saveCustomer(customer) {
          if (customer.id === 0) {
            return this.createCustomer(customer);
          }

          return this.updateCustomer(customer);
        }
      }, {
        key: "createCustomer",
        value: function createCustomer(customer) {
          customer.id = undefined;
          return this.backend.create(this.basicAction, customer).map(this.extractData)["catch"](this.handleError);
        }
      }, {
        key: "updateCustomer",
        value: function updateCustomer(customer) {
          var action = "".concat(this.basicAction).concat(customer.id);
          return this.backend.update(action, customer).map(function () {
            return customer;
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
        key: "initializeCustomer",
        value: function initializeCustomer() {
          // Return an initialized object
          return {
            id: 0,
            avatar: null,
            firstname: null,
            lastname: null,
            rewards: 0,
            email: null,
            membership: false,
            mobile: null,
            phone: null
          };
        }
      }]);

      return CustomerService;
    }();

    CustomerService.ɵfac = function CustomerService_Factory(t) {
      return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_8__["BackendService"]));
    };

    CustomerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomerService,
      factory: CustomerService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerService, [{
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
  "./src/app/shared/generic-validator.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/generic-validator.ts ***!
    \*********************************************/

  /*! exports provided: GenericValidator */

  /***/
  function srcAppSharedGenericValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenericValidator", function () {
      return GenericValidator;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // Generic validator for Reactive forms
    // Implemented as a class, not a service, so it can retain state for multiple forms.


    var GenericValidator = /*#__PURE__*/function () {
      // Provide the set of valid validation messages
      // Stucture:
      // controlName1: {
      //     validationRuleName1: 'Validation Message.',
      //     validationRuleName2: 'Validation Message.'
      // },
      // controlName2: {
      //     validationRuleName1: 'Validation Message.',
      //     validationRuleName2: 'Validation Message.'
      // }
      function GenericValidator(validationMessages) {
        _classCallCheck(this, GenericValidator);

        this.validationMessages = validationMessages;
      } // Processes each control within a FormGroup
      // And returns a set of validation messages to display
      // Structure
      // controlName1: 'Validation Message.',


      _createClass(GenericValidator, [{
        key: "processMessages",
        value: function processMessages(container) {
          var _this11 = this;

          var messages = {};

          var _loop = function _loop(controlKey) {
            if (container.controls.hasOwnProperty(controlKey)) {
              var c = container.controls[controlKey]; // If it is a FormGroup, process its child controls.

              if (c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
                var childMessages = _this11.processMessages(c);

                Object.assign(messages, childMessages);
              } else {
                // Only validate if there are validation messages for the control
                if (_this11.validationMessages[controlKey]) {
                  messages[controlKey] = '';

                  if ((c.dirty || c.touched) && c.errors) {
                    Object.keys(c.errors).map(function (messageKey) {
                      if (_this11.validationMessages[controlKey][messageKey]) {
                        messages[controlKey] += _this11.validationMessages[controlKey][messageKey] + ' ';
                      }
                    });
                  }
                }
              }
            }
          };

          for (var controlKey in container.controls) {
            _loop(controlKey);
          }

          return messages;
        }
      }]);

      return GenericValidator;
    }();
    /***/

  },

  /***/
  "./src/app/shared/index.ts":
  /*!*********************************!*\
    !*** ./src/app/shared/index.ts ***!
    \*********************************/

  /*! exports provided: NumberValidators, GenericValidator, ConfirmDialog, MaterialModule */

  /***/
  function srcAppSharedIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _number_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./number.validator */
    "./src/app/shared/number.validator.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NumberValidators", function () {
      return _number_validator__WEBPACK_IMPORTED_MODULE_0__["NumberValidators"];
    });
    /* harmony import */


    var _generic_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./generic-validator */
    "./src/app/shared/generic-validator.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GenericValidator", function () {
      return _generic_validator__WEBPACK_IMPORTED_MODULE_1__["GenericValidator"];
    });
    /* harmony import */


    var _dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dialog.component */
    "./src/app/shared/dialog.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialog", function () {
      return _dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialog"];
    });
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/shared/material.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"];
    });
    /***/

  },

  /***/
  "./src/app/shared/number.validator.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/number.validator.ts ***!
    \********************************************/

  /*! exports provided: NumberValidators */

  /***/
  function srcAppSharedNumberValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberValidators", function () {
      return NumberValidators;
    });

    var NumberValidators = /*#__PURE__*/function () {
      function NumberValidators() {
        _classCallCheck(this, NumberValidators);
      }

      _createClass(NumberValidators, null, [{
        key: "range",
        value: function range(min, max) {
          return function (c) {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
              return {
                'range': true
              };
            }

            return null;
          };
        }
      }]);

      return NumberValidators;
    }();
    /***/

  }
}]);
//# sourceMappingURL=default~customer-customer-module~order-order-module-es5.js.map