function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"], {
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
          var _this = this;

          var messages = {};

          var _loop = function _loop(controlKey) {
            if (container.controls.hasOwnProperty(controlKey)) {
              var c = container.controls[controlKey]; // If it is a FormGroup, process its child controls.

              if (c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
                var childMessages = _this.processMessages(c);

                Object.assign(messages, childMessages);
              } else {
                // Only validate if there are validation messages for the control
                if (_this.validationMessages[controlKey]) {
                  messages[controlKey] = '';

                  if ((c.dirty || c.touched) && c.errors) {
                    Object.keys(c.errors).map(function (messageKey) {
                      if (_this.validationMessages[controlKey][messageKey]) {
                        messages[controlKey] += _this.validationMessages[controlKey][messageKey] + ' ';
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
//# sourceMappingURL=product-product-module-es5.js.map