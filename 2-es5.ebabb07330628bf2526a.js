function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8/IB":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var a=r("zE9r"),c=(r("H4X+"),r("tomM"),r("LZqa"),r("AJX/"),r("qnbw"),r("fXoL")),n=r("tk/3"),i=r("J9tS"),o=function(){var t=function(){function t(e,r){_classCallCheck(this,t),this.http=e,this.backend=r,this.basicAction="products/"}return _createClass(t,[{key:"getProducts",value:function(){return this.backend.getAll(this.basicAction+"?_expand=category").map(this.extractData).catch(this.handleError)}},{key:"getProduct",value:function(t){return 0===t?a.a.of(this.initializeProduct()):this.backend.getByQuery("".concat(this.basicAction).concat(t,"?_expand=category")).map(this.extractData).catch(this.handleError)}},{key:"deleteProduct",value:function(t){return this.backend.delete("".concat(this.basicAction).concat(t)).catch(this.handleError)}},{key:"saveProduct",value:function(t){return 0===t.id?this.createProduct(t):this.updateProduct(t)}},{key:"getCategories",value:function(){return this.backend.getAll("categories/").map(this.extractData).catch(this.handleError)}},{key:"createProduct",value:function(t){return t.id=null,this.backend.create(this.basicAction,t).map(this.extractData).catch(this.handleError)}},{key:"updateProduct",value:function(t){return this.backend.update("".concat(this.basicAction).concat(t.id),t).map((function(){return t})).catch(this.handleError)}},{key:"extractData",value:function(t){var e=t.json?t.json():t;return e.data?e.data:e||{}}},{key:"handleError",value:function(t){return console.error(t),a.a.throw(t.json()||"Server error")}},{key:"initializeProduct",value:function(){return{id:0,avatar:null,categoryId:0,productName:null,unitPrice:0,unitInStock:0}}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.Yb(n.a),c.Yb(i.b))},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac}),t}()},JiIv:function(t,e,r){"use strict";r.d(e,"a",(function(){return A}));var a=r("fXoL"),c=r("3Pt+"),n=(r("t/4F"),r("Xr5q"),r("6Br6"),r("zE9r")),i=r("WyWZ"),o=r("QEVK"),u=r("0MNC"),s=r("tyNb"),l=r("8/IB"),d=r("Wp6s"),b=r("/t3+"),m=r("bTqV"),f=r("NFeN"),h=r("zkoq"),p=r("kmnG"),g=r("d3UM"),v=r("ofXK"),y=r("qFsG"),C=r("FKr1");function k(t,e){if(1&t&&(a.Ub(0,"mat-option",19),a.Ac(1),a.Tb()),2&t){var r=e.$implicit;a.mc("value",r.id),a.Cb(1),a.Cc(" ",r.categoryName," ")}}function T(t,e){if(1&t&&(a.Ub(0,"mat-error"),a.Ac(1),a.Tb()),2&t){var r=a.gc();a.Cb(1),a.Cc(" ",r.displayMessage.productName," ")}}function P(t,e){if(1&t&&(a.Ub(0,"mat-error"),a.Ac(1),a.Tb()),2&t){var r=a.gc();a.Cb(1),a.Cc(" ",r.displayMessage.unitPrice," ")}}function U(t,e){if(1&t&&(a.Ub(0,"mat-error"),a.Ac(1),a.Tb()),2&t){var r=a.gc();a.Cb(1),a.Cc(" ",r.displayMessage.unitInStock," ")}}function I(t,e){if(1&t&&(a.Ub(0,"div",20),a.Ac(1),a.Tb()),2&t){var r=a.gc();a.Cb(1),a.Bc(r.errorMessage)}}var S=function(){return["/products"]},A=function(){var t=function(){function t(e,r,a,c,n){var i=this;_classCallCheck(this,t),this.fb=e,this.route=r,this.router=a,this.productService=c,this.breakpointObserver=n,this.pageTitle="Update Product",this.product={},this.fieldColspan=4,this.displayMessage={},this.validationMessages={product:{required:"Product name is required.",minlength:"Product name must be at least one characters.",maxlength:"Product name cannot exceed 200 characters."},unitPrice:{range:"Price of the product must be between 1 (lowest) and 9999 (highest)."},unitInStock:{range:"Quantity of the product must be between 1 (lowest) and 2000 (highest)."}},n.observe([u.b.HandsetLandscape,u.b.HandsetPortrait]).subscribe((function(t){i.onScreensizeChange()})),this.genericValidator=new o.a(this.validationMessages)}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.productForm=this.fb.group({productName:["",[c.r.required,c.r.minLength(3),c.r.maxLength(100)]],unitPrice:["",i.a.range(1,99999)],unitInStock:["",i.a.range(1,2e3)],categoryId:["",i.a.range(1,9999999)]}),this.sub=this.route.params.subscribe((function(e){t.getProduct(+e.id)})),this.getCategories()}},{key:"ngOnDestroy",value:function(){this.sub.unsubscribe()}},{key:"ngAfterViewInit",value:function(){var t,e=this,r=this.formInputElements.map((function(t){return n.a.fromEvent(t.nativeElement,"blur")}));(t=n.a).merge.apply(t,[this.productForm.valueChanges].concat(_toConsumableArray(r))).debounceTime(800).subscribe((function(){e.displayMessage=e.genericValidator.processMessages(e.productForm)}))}},{key:"getProduct",value:function(t){var e=this;this.productService.getProduct(t).subscribe((function(t){return e.onProductRetrieved(t)}),(function(t){return e.errorMessage=t}))}},{key:"getCategories",value:function(){var t=this;this.productService.getCategories().subscribe((function(e){return t.categories=e}),(function(e){return t.errorMessage=e}))}},{key:"onProductRetrieved",value:function(t){this.productForm&&this.productForm.reset(),this.product=t,this.pageTitle=0===this.product.id?"Add Product":"Update Product: ".concat(this.product.productName," "),this.productForm.patchValue({productName:this.product.productName,unitPrice:this.product.unitPrice,unitInStock:this.product.unitInStock,categoryId:this.product.categoryId})}},{key:"deleteProduct",value:function(){var t=this;0===this.product.id?this.onSaveComplete():confirm("Really delete the product: ".concat(this.product.productName,"?"))&&this.productService.deleteProduct(this.product.id).subscribe((function(){return t.onSaveComplete()}),(function(e){return t.errorMessage=e}))}},{key:"saveProduct",value:function(){var t=this;if(this.productForm.dirty&&this.productForm.valid){var e=Object.assign({},this.product,this.productForm.value);this.productService.saveProduct(e).subscribe((function(){return t.onSaveComplete()}),(function(e){return t.errorMessage=e}))}else this.productForm.dirty||this.onSaveComplete()}},{key:"onSaveComplete",value:function(){this.productForm.reset(),this.router.navigate(["/products"])}},{key:"onScreensizeChange",value:function(){var t=this.breakpointObserver.isMatched("(max-width: 599px)"),e=this.breakpointObserver.isMatched("(max-width: 959px)");console.log(" isLess600  ".concat(t," \n        isLess1000 ").concat(e,"  ")),this.fieldColspan=e?t?12:6:3}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Ob(c.c),a.Ob(s.a),a.Ob(s.f),a.Ob(l.a),a.Ob(u.a))},t.\u0275cmp=a.Ib({type:t,selectors:[["product-form"]],viewQuery:function(t,e){var r;1&t&&a.Fc(c.d,!0,a.l),2&t&&a.qc(r=a.dc())&&(e.formInputElements=r)},decls:35,vars:15,consts:[["novalidate","",3,"formGroup","ngSubmit"],[2,"background-color","#FFF"],[1,"view-card-title"],[1,"title-spacer"],["mat-mini-fab","","type","submit",1,"primary",2,"margin-right","10px","background-color","darkgray",3,"disabled"],["mat-mini-fab","",1,"",2,"margin-right","10px",3,"routerLink"],[2,"margin","5 0 5 0px"],[1,"form-card"],["cols","12","rowHeight","80px"],[3,"colspan"],["appearance","outline",1,"form-field"],["placeholder","Select Category","formControlName","categoryId",3,"value","valueChange"],["categoryIdId",""],[3,"value",4,"ngFor","ngForOf"],["matInput","","id","productNameId","type","text","placeholder","Product Name (required)","formControlName","productName"],[4,"ngIf"],["matInput","","id","unitPriceId","type","currency","placeholder","Price (required)","formControlName","unitPrice"],["matInput","","id","unitInStockId","type","number","placeholder","Quantity In Stock (required)","formControlName","unitInStock"],["class","has-error",4,"ngIf"],[3,"value"],[1,"has-error"]],template:function(t,e){1&t&&(a.Ub(0,"form",0),a.cc("ngSubmit",(function(){return e.saveProduct()})),a.Ub(1,"mat-card"),a.Ub(2,"mat-toolbar",1),a.Ub(3,"mat-toolbar-row"),a.Ub(4,"span",2),a.Ac(5),a.Tb(),a.Pb(6,"span",3),a.Ub(7,"mat-card-actions"),a.Ub(8,"button",4),a.Ub(9,"mat-icon"),a.Ac(10,"save"),a.Tb(),a.Tb(),a.Ub(11,"button",5),a.Ub(12,"mat-icon"),a.Ac(13,"cancel"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(14,"mat-card-content",6),a.Ub(15,"div",7),a.Ub(16,"mat-grid-list",8),a.Ub(17,"mat-grid-tile",9),a.Ub(18,"mat-form-field",10),a.Ub(19,"mat-select",11,12),a.cc("valueChange",(function(t){return e.product.categoryId=t})),a.zc(21,k,2,2,"mat-option",13),a.Tb(),a.Tb(),a.Tb(),a.Ub(22,"mat-grid-tile",9),a.Ub(23,"mat-form-field",10),a.Pb(24,"input",14),a.zc(25,T,2,1,"mat-error",15),a.Tb(),a.Tb(),a.Ub(26,"mat-grid-tile",9),a.Ub(27,"mat-form-field",10),a.Pb(28,"input",16),a.zc(29,P,2,1,"mat-error",15),a.Tb(),a.Tb(),a.Ub(30,"mat-grid-tile",9),a.Ub(31,"mat-form-field",10),a.Pb(32,"input",17),a.zc(33,U,2,1,"mat-error",15),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.zc(34,I,2,1,"div",18),a.Tb(),a.Tb(),a.Tb()),2&t&&(a.mc("formGroup",e.productForm),a.Cb(5),a.Cc(" ",e.pageTitle,""),a.Cb(3),a.mc("disabled",!e.productForm.valid),a.Cb(3),a.mc("routerLink",a.nc(14,S)),a.Cb(6),a.mc("colspan",e.fieldColspan),a.Cb(2),a.mc("value",e.product.categoryId),a.Cb(2),a.mc("ngForOf",e.categories),a.Cb(1),a.mc("colspan",e.fieldColspan),a.Cb(3),a.mc("ngIf",e.displayMessage.productName),a.Cb(1),a.mc("colspan",e.fieldColspan),a.Cb(3),a.mc("ngIf",e.displayMessage.unitPrice),a.Cb(1),a.mc("colspan",e.fieldColspan),a.Cb(3),a.mc("ngIf",e.displayMessage.unitInStock),a.Cb(1),a.mc("ngIf",e.errorMessage))},directives:[c.s,c.l,c.f,d.a,b.a,b.c,d.b,m.a,f.a,s.g,d.d,h.a,h.c,p.c,g.a,c.k,c.d,v.m,y.b,c.b,v.n,c.o,C.n,p.b],styles:[".title-spacer[_ngcontent-%COMP%] {\n      flex: 1 1 auto;\n    }\n  .form-field[_ngcontent-%COMP%]{\n      width: 100%;\n      margin-left: 20px;\n      margin-right: 20px;\n    }"]}),t}()},nscy:function(t,e,r){"use strict";r.d(e,"a",(function(){return q}));var a=r("M0ag"),c=r("M9IT"),n=r("Dh3D"),i=r("+0xr"),o=r("fXoL"),u=r("8/IB"),s=r("0IaG"),l=r("dNgK"),d=r("Wp6s"),b=r("/t3+"),m=r("bTqV"),f=r("tyNb"),h=r("NFeN"),p=r("kmnG"),g=r("qFsG"),v=r("XhcP"),y=r("MutI"),C=r("3Pt+"),k=r("f0Cb"),T=r("ofXK");function P(t,e){1&t&&(o.Ub(0,"mat-header-cell",35),o.Ac(1," Product Name "),o.Tb())}function U(t,e){if(1&t&&(o.Ub(0,"mat-cell"),o.Ac(1),o.Tb()),2&t){var r=e.$implicit;o.Cb(1),o.Cc(" ",r.productName," ")}}function I(t,e){1&t&&(o.Ub(0,"mat-header-cell",35),o.Ac(1," Price "),o.Tb())}function S(t,e){if(1&t&&(o.Ub(0,"mat-cell"),o.Ac(1),o.hc(2,"currency"),o.Tb()),2&t){var r=e.$implicit;o.Cb(1),o.Cc(" ",o.jc(2,1,r.unitPrice,"AUD")," ")}}function A(t,e){1&t&&(o.Ub(0,"mat-header-cell",35),o.Ac(1," Quantity In Stock "),o.Tb())}function w(t,e){if(1&t&&(o.Ub(0,"mat-cell"),o.Ac(1),o.hc(2,"number"),o.Tb()),2&t){var r=e.$implicit;o.Cb(1),o.Cc(" ",o.jc(2,1,r.unitInStock,"0.0-0")," ")}}function F(t,e){1&t&&(o.Ub(0,"mat-header-cell",35),o.Ac(1," Category "),o.Tb())}function M(t,e){if(1&t&&(o.Ub(0,"mat-cell"),o.Ac(1),o.Tb()),2&t){var r=e.$implicit;o.Cb(1),o.Cc(" ",r.category.categoryName,"")}}function N(t,e){1&t&&o.Pb(0,"mat-header-cell",36)}var x=function(t){return["/products/edit",t]};function _(t,e){if(1&t){var r=o.Vb();o.Ub(0,"mat-cell",36),o.Ub(1,"button",37),o.Ub(2,"mat-icon"),o.Ac(3,"edit"),o.Tb(),o.Tb(),o.Ub(4,"button",38),o.cc("click",(function(){o.tc(r);var t=e.$implicit;return o.gc().openDialog(t.id)})),o.Ub(5,"mat-icon"),o.Ac(6,"delete"),o.Tb(),o.Tb(),o.Tb()}if(2&t){var a=e.$implicit;o.Cb(1),o.mc("routerLink",o.oc(1,x,a.id))}}function O(t,e){1&t&&o.Pb(0,"mat-header-row")}function D(t,e){1&t&&o.Pb(0,"mat-row")}var L=function(){return["/products/edit",0]},z=function(){return[5,10]},q=function(){var t=function(){function t(e,r,a){_classCallCheck(this,t),this.productService=e,this.dialog=r,this.snackBar=a,this.pageTitle="Products",this.showImage=!1,this.listFilter={},this.displayedColumns=["productName","unitPrice","unitInStock","categoryName","id"],this.dataSource=null,this.pager={},this.searchFilter={}}return _createClass(t,[{key:"toggleImage",value:function(){this.showImage=!this.showImage}},{key:"applyFilter",value:function(t){t=(t=t.trim()).toLowerCase(),this.dataSource.filter=t}},{key:"freshDataList",value:function(t){this.products=t,this.productList=t.map((function(t){var e=t;return t.categoryName=t.category.categoryName,e})),this.dataSource=new i.k(this.products),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}},{key:"ngOnInit",value:function(){var t=this;this.productService.getProducts().subscribe((function(e){t.freshDataList(e)}),(function(e){return t.errorMessage=e})),this.searchFilter={},this.listFilter={}}},{key:"getProducts",value:function(t){var e=this;this.productService.getProducts().subscribe((function(t){e.freshDataList(t)}),(function(t){return e.errorMessage=t}))}},{key:"searchProducts",value:function(t){var e=this;t&&this.productService.getProducts().subscribe((function(r){e.products=r,console.log(e.products.length),e.products=e.products.filter((function(e){var r=!0;return Object.keys(t).forEach((function(a){r=r&&t[a]?e[a]&&e[a].toLocaleLowerCase().indexOf(t[a].toLocaleLowerCase())>-1:r})),r})),e.freshDataList(r)}),(function(t){return e.errorMessage=t}))}},{key:"resetListFilter",value:function(){this.listFilter={},this.getProducts()}},{key:"reset",value:function(){this.listFilter={},this.searchFilter={},this.getProducts()}},{key:"resetSearchFilter",value:function(t){t.toggle(),this.searchFilter={},this.getProducts()}},{key:"openSnackBar",value:function(t,e){this.snackBar.open(t,e,{duration:1500})}},{key:"openDialog",value:function(t){var e=this,r=this.dialog.open(a.a,{data:{title:"Dialog",message:"Are you sure to delete this item?"}});r.disableClose=!0,r.afterClosed().subscribe((function(a){e.selectedOption=a,e.selectedOption===r.componentInstance.ACTION_CONFIRM&&e.productService.deleteProduct(t).subscribe((function(){e.productService.getProducts().subscribe((function(t){e.freshDataList(t)}),(function(t){return e.errorMessage=t})),e.openSnackBar("The item has been deleted successfully. ","Close")}),(function(t){e.errorMessage=t,console.log(e.errorMessage),e.openSnackBar("This item has not been deleted successfully. Please try again.","Close")}))}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Ob(u.a),o.Ob(s.b),o.Ob(l.a))},t.\u0275cmp=o.Ib({type:t,selectors:[["product-list"]],viewQuery:function(t,e){var r;1&t&&(o.Fc(c.a,!0),o.Fc(n.a,!0)),2&t&&(o.qc(r=o.dc())&&(e.paginator=r.first),o.qc(r=o.dc())&&(e.sort=r.first))},features:[o.Bb([a.a])],decls:74,vars:12,consts:[[1,"light",2,"height","100%"],[1,"view-card-title"],["mat-mini-fab","",2,"margin-right","10px","background-color","#e07c9e",3,"routerLink"],["mat-mini-fab","",2,"margin-right","10px","background-color","#a28b6e",3,"click"],["mat-mini-fab","",2,"margin-right","10px","background-color","darkgray",3,"click"],[1,"title-spacer"],["appearance","standard",1,"search-form-fileld"],["matInput","",3,"keyup"],["matSort","",3,"dataSource"],["table",""],["matColumnDef","productName"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","unitPrice"],["matColumnDef","unitInStock"],["matColumnDef","categoryName"],["matColumnDef","id"],["style","justify-content:right;",4,"matHeaderCellDef"],["style","justify-content:right;",4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"pageSize","pageSizeOptions"],["paginator",""],["position","end","dark","","mode","push","opened","false",1,"search-panel"],["sidenav",""],[1,"profile-card"],["mat-card-avatar","",1,"avatar"],[2,"margin-left","20px"],["matInput","","type","text","placeholder","Product Name","name","product",2,"width","200px",3,"ngModel","ngModelChange"],["product",""],["matInput","","type","text","placeholder","Price","name","price",2,"width","200px",3,"ngModel","ngModelChange"],["price",""],["matInput","","type","text","placeholder","Qunantity","name","quantity",2,"width","200px",3,"ngModel","ngModelChange"],["mat-raised-button","",2,"color","lightgrey","background-color","darkgreen","margin","5px",3,"click"],["mat-raised-button","",2,"color","lightgrey","background-color","darkred","margin","5px",3,"click"],["mat-sort-header",""],[2,"justify-content","right"],["mat-mini-fab","",2,"background-color","teal","min-height","30px","margin","5px",3,"routerLink"],["mat-mini-fab","",2,"background-color","lightblue","min-height","30px","margin","5px",3,"click"]],template:function(t,e){if(1&t){var r=o.Vb();o.Ub(0,"mat-card",0),o.Ub(1,"mat-card-header"),o.Ub(2,"mat-card-title",1),o.Ub(3,"h1"),o.Ac(4),o.Tb(),o.Tb(),o.Tb(),o.Ub(5,"mat-toolbar"),o.Ub(6,"mat-toolbar-row"),o.Ub(7,"button",2),o.Ub(8,"mat-icon"),o.Ac(9,"add"),o.Tb(),o.Tb(),o.Ub(10,"button",3),o.cc("click",(function(){return o.tc(r),o.rc(45).toggle()})),o.Ub(11,"mat-icon"),o.Ac(12,"search"),o.Tb(),o.Tb(),o.Ub(13,"button",4),o.cc("click",(function(){return e.reset()})),o.Ub(14,"mat-icon"),o.Ac(15,"refresh"),o.Tb(),o.Tb(),o.Pb(16,"span",5),o.Ub(17,"mat-form-field",6),o.Ub(18,"mat-label"),o.Ac(19,"Filter"),o.Tb(),o.Ub(20,"input",7),o.cc("keyup",(function(t){return e.applyFilter(t.target.value)})),o.Tb(),o.Ub(21,"mat-icon"),o.Ac(22,"filter_list"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(23,"mat-table",8,9),o.Sb(25,10),o.zc(26,P,2,0,"mat-header-cell",11),o.zc(27,U,2,1,"mat-cell",12),o.Rb(),o.Sb(28,13),o.zc(29,I,2,0,"mat-header-cell",11),o.zc(30,S,3,4,"mat-cell",12),o.Rb(),o.Sb(31,14),o.zc(32,A,2,0,"mat-header-cell",11),o.zc(33,w,3,4,"mat-cell",12),o.Rb(),o.Sb(34,15),o.zc(35,F,2,0,"mat-header-cell",11),o.zc(36,M,2,1,"mat-cell",12),o.Rb(),o.Sb(37,16),o.zc(38,N,1,0,"mat-header-cell",17),o.zc(39,_,7,3,"mat-cell",18),o.Rb(),o.zc(40,O,1,0,"mat-header-row",19),o.zc(41,D,1,0,"mat-row",20),o.Tb(),o.Pb(42,"mat-paginator",21,22),o.Tb(),o.Ub(44,"mat-sidenav",23,24),o.Ub(46,"mat-card",25),o.Ub(47,"mat-card-header"),o.Ub(48,"div",26),o.Ub(49,"mat-icon"),o.Ac(50,"search"),o.Tb(),o.Tb(),o.Ub(51,"mat-card-title"),o.Ac(52," Advanced Search "),o.Tb(),o.Tb(),o.Tb(),o.Ub(53,"mat-nav-list",27),o.Ub(54,"mat-form-field"),o.Ub(55,"input",28,29),o.cc("ngModelChange",(function(t){return e.searchFilter.productName=t})),o.Tb(),o.Tb(),o.Ub(57,"mat-form-field"),o.Ub(58,"input",30,31),o.cc("ngModelChange",(function(t){return e.searchFilter.price=t})),o.Tb(),o.Tb(),o.Ub(60,"mat-form-field"),o.Ub(61,"input",32,31),o.cc("ngModelChange",(function(t){return e.searchFilter.quantity=t})),o.Tb(),o.Tb(),o.Tb(),o.Pb(63,"mat-divider"),o.Ub(64,"mat-card-header"),o.Ub(65,"mat-action-list"),o.Ub(66,"button",33),o.cc("click",(function(){o.tc(r);var t=o.rc(45);return e.searchProducts(e.searchFilter),t.toggle()})),o.Ub(67,"mat-icon"),o.Ac(68,"search"),o.Tb(),o.Ac(69,"Search "),o.Tb(),o.Ub(70,"button",34),o.cc("click",(function(){o.tc(r);var t=o.rc(45);return e.resetSearchFilter(t)})),o.Ub(71,"mat-icon"),o.Ac(72,"refresh"),o.Tb(),o.Ac(73,"Reset "),o.Tb(),o.Tb(),o.Tb(),o.Tb()}2&t&&(o.Cb(4),o.Bc(e.pageTitle),o.Cb(3),o.mc("routerLink",o.nc(10,L)),o.Cb(16),o.mc("dataSource",e.dataSource),o.Cb(17),o.mc("matHeaderRowDef",e.displayedColumns),o.Cb(1),o.mc("matRowDefColumns",e.displayedColumns),o.Cb(1),o.mc("pageSize",10)("pageSizeOptions",o.nc(11,z)),o.Cb(13),o.mc("ngModel",e.searchFilter.productName),o.Cb(3),o.mc("ngModel",e.searchFilter.price),o.Cb(3),o.mc("ngModel",e.searchFilter.quantity))},directives:[d.a,d.e,d.h,b.a,b.c,m.a,f.g,h.a,p.c,p.f,g.b,i.j,n.a,i.c,i.e,i.b,i.g,i.i,c.a,v.a,d.c,y.f,C.b,C.k,C.n,k.a,y.a,i.d,n.b,i.a,i.f,i.h],pipes:[T.d,T.g],styles:["thead[_ngcontent-%COMP%]{color:#337ab7}.title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.search-form-fileld[_ngcontent-%COMP%]{margin-right:20px}"]}),t}()},qvFY:function(t,e,r){"use strict";r.r(e),r.d(e,"ProductModule",(function(){return p}));var a,c,n,i=r("tyNb"),o=r("3Pt+"),u=r("nscy"),s=r("fXoL"),l=((c=function(){function t(e){_classCallCheck(this,t),this.router=e}return _createClass(t,[{key:"canActivate",value:function(t){var e=+t.url[1].path;return!(isNaN(e)||e<1)||(alert("Invalid product Id"),this.router.navigate(["/products"]),!1)}}]),t}()).\u0275fac=function(t){return new(t||c)(s.Yb(i.f))},c.\u0275prov=s.Kb({token:c,factory:c.\u0275fac}),c),d=((a=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"canDeactivate",value:function(t){if(t.productForm.dirty){var e=t.productForm.get("productName").value||"New Product";return confirm("Navigate away and lose all changes to ".concat(e,"?"))}return!0}}]),t}()).\u0275fac=function(t){return new(t||a)},a.\u0275prov=s.Kb({token:a,factory:a.\u0275fac}),a),b=r("JiIv"),m=r("8/IB"),f=r("PCNd"),h=r("5dmV"),p=((n=function t(){_classCallCheck(this,t)}).\u0275mod=s.Mb({type:n}),n.\u0275inj=s.Lb({factory:function(t){return new(t||n)},providers:[m.a,l,d],imports:[[f.a,o.p,h.a,i.i.forChild([{path:"",component:u.a},{path:"edit/:id",canDeactivate:[d],component:b.a}])]]}),n)}}]);