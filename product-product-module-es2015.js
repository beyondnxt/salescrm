(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./node_modules/rxjs-compat/_esm2015/Observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/Observable.js ***!
  \*********************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });


//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./src/app/shared/generic-validator.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/generic-validator.ts ***!
  \*********************************************/
/*! exports provided: GenericValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericValidator", function() { return GenericValidator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

// Generic validator for Reactive forms
// Implemented as a class, not a service, so it can retain state for multiple forms.
class GenericValidator {
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
    constructor(validationMessages) {
        this.validationMessages = validationMessages;
    }
    // Processes each control within a FormGroup
    // And returns a set of validation messages to display
    // Structure
    // controlName1: 'Validation Message.',
    processMessages(container) {
        let messages = {};
        for (let controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
                let c = container.controls[controlKey];
                // If it is a FormGroup, process its child controls.
                if (c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
                    let childMessages = this.processMessages(c);
                    Object.assign(messages, childMessages);
                }
                else {
                    // Only validate if there are validation messages for the control
                    if (this.validationMessages[controlKey]) {
                        messages[controlKey] = '';
                        if ((c.dirty || c.touched) && c.errors) {
                            Object.keys(c.errors).map(messageKey => {
                                if (this.validationMessages[controlKey][messageKey]) {
                                    messages[controlKey] += this.validationMessages[controlKey][messageKey] + ' ';
                                }
                            });
                        }
                    }
                }
            }
        }
        return messages;
    }
}


/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: NumberValidators, GenericValidator, ConfirmDialog, MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.validator */ "./src/app/shared/number.validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberValidators", function() { return _number_validator__WEBPACK_IMPORTED_MODULE_0__["NumberValidators"]; });

/* harmony import */ var _generic_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic-validator */ "./src/app/shared/generic-validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenericValidator", function() { return _generic_validator__WEBPACK_IMPORTED_MODULE_1__["GenericValidator"]; });

/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.component */ "./src/app/shared/dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialog", function() { return _dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialog"]; });

/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]; });







/***/ }),

/***/ "./src/app/shared/number.validator.ts":
/*!********************************************!*\
  !*** ./src/app/shared/number.validator.ts ***!
  \********************************************/
/*! exports provided: NumberValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValidators", function() { return NumberValidators; });
class NumberValidators {
    static range(min, max) {
        return (c) => {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { 'range': true };
            }
            return null;
        };
    }
}


/***/ })

}]);
//# sourceMappingURL=product-product-module-es2015.js.map