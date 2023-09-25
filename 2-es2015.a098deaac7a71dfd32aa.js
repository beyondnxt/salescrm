(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8/IB":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var a=r("zE9r"),c=(r("H4X+"),r("tomM"),r("LZqa"),r("AJX/"),r("qnbw"),r("fXoL")),i=r("tk/3"),o=r("J9tS");let n=(()=>{class t{constructor(t,e){this.http=t,this.backend=e,this.basicAction="products/"}getProducts(){return this.backend.getAll(this.basicAction+"?_expand=category").map(this.extractData).catch(this.handleError)}getProduct(t){return 0===t?a.a.of(this.initializeProduct()):this.backend.getByQuery(`${this.basicAction}${t}?_expand=category`).map(this.extractData).catch(this.handleError)}deleteProduct(t){return this.backend.delete(`${this.basicAction}${t}`).catch(this.handleError)}saveProduct(t){return 0===t.id?this.createProduct(t):this.updateProduct(t)}getCategories(){return this.backend.getAll("categories/").map(this.extractData).catch(this.handleError)}createProduct(t){return t.id=null,this.backend.create(this.basicAction,t).map(this.extractData).catch(this.handleError)}updateProduct(t){return this.backend.update(`${this.basicAction}${t.id}`,t).map(()=>t).catch(this.handleError)}extractData(t){let e=t.json?t.json():t;return e.data?e.data:e||{}}handleError(t){return console.error(t),a.a.throw(t.json()||"Server error")}initializeProduct(){return{id:0,avatar:null,categoryId:0,productName:null,unitPrice:0,unitInStock:0}}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(i.a),c.Yb(o.b))},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac}),t})()},JiIv:function(t,e,r){"use strict";r.d(e,"a",(function(){return F}));var a=r("fXoL"),c=r("3Pt+"),i=(r("t/4F"),r("Xr5q"),r("6Br6"),r("zE9r")),o=r("WyWZ"),n=r("QEVK"),s=r("0MNC"),u=r("tyNb"),d=r("8/IB"),l=r("Wp6s"),b=r("/t3+"),m=r("bTqV"),h=r("NFeN"),p=r("zkoq"),g=r("kmnG"),f=r("d3UM"),C=r("ofXK"),y=r("qFsG"),T=r("FKr1");function v(t,e){if(1&t&&(a.Ub(0,"mat-option",19),a.Ac(1),a.Tb()),2&t){const t=e.$implicit;a.mc("value",t.id),a.Cb(1),a.Cc(" ",t.categoryName," ")}}function P(t,e){if(1&t&&(a.Ub(0,"mat-error"),a.Ac(1),a.Tb()),2&t){const t=a.gc();a.Cb(1),a.Cc(" ",t.displayMessage.productName," ")}}function U(t,e){if(1&t&&(a.Ub(0,"mat-error"),a.Ac(1),a.Tb()),2&t){const t=a.gc();a.Cb(1),a.Cc(" ",t.displayMessage.unitPrice," ")}}function k(t,e){if(1&t&&(a.Ub(0,"mat-error"),a.Ac(1),a.Tb()),2&t){const t=a.gc();a.Cb(1),a.Cc(" ",t.displayMessage.unitInStock," ")}}function I(t,e){if(1&t&&(a.Ub(0,"div",20),a.Ac(1),a.Tb()),2&t){const t=a.gc();a.Cb(1),a.Bc(t.errorMessage)}}const S=function(){return["/products"]};let F=(()=>{class t{constructor(t,e,r,a,c){this.fb=t,this.route=e,this.router=r,this.productService=a,this.breakpointObserver=c,this.pageTitle="Update Product",this.product={},this.fieldColspan=4,this.displayMessage={},this.validationMessages={product:{required:"Product name is required.",minlength:"Product name must be at least one characters.",maxlength:"Product name cannot exceed 200 characters."},unitPrice:{range:"Price of the product must be between 1 (lowest) and 9999 (highest)."},unitInStock:{range:"Quantity of the product must be between 1 (lowest) and 2000 (highest)."}},c.observe([s.b.HandsetLandscape,s.b.HandsetPortrait]).subscribe(t=>{this.onScreensizeChange()}),this.genericValidator=new n.a(this.validationMessages)}ngOnInit(){this.productForm=this.fb.group({productName:["",[c.r.required,c.r.minLength(3),c.r.maxLength(100)]],unitPrice:["",o.a.range(1,99999)],unitInStock:["",o.a.range(1,2e3)],categoryId:["",o.a.range(1,9999999)]}),this.sub=this.route.params.subscribe(t=>{this.getProduct(+t.id)}),this.getCategories()}ngOnDestroy(){this.sub.unsubscribe()}ngAfterViewInit(){let t=this.formInputElements.map(t=>i.a.fromEvent(t.nativeElement,"blur"));i.a.merge(this.productForm.valueChanges,...t).debounceTime(800).subscribe(()=>{this.displayMessage=this.genericValidator.processMessages(this.productForm)})}getProduct(t){this.productService.getProduct(t).subscribe(t=>this.onProductRetrieved(t),t=>this.errorMessage=t)}getCategories(){this.productService.getCategories().subscribe(t=>this.categories=t,t=>this.errorMessage=t)}onProductRetrieved(t){this.productForm&&this.productForm.reset(),this.product=t,this.pageTitle=0===this.product.id?"Add Product":`Update Product: ${this.product.productName} `,this.productForm.patchValue({productName:this.product.productName,unitPrice:this.product.unitPrice,unitInStock:this.product.unitInStock,categoryId:this.product.categoryId})}deleteProduct(){0===this.product.id?this.onSaveComplete():confirm(`Really delete the product: ${this.product.productName}?`)&&this.productService.deleteProduct(this.product.id).subscribe(()=>this.onSaveComplete(),t=>this.errorMessage=t)}saveProduct(){if(this.productForm.dirty&&this.productForm.valid){let t=Object.assign({},this.product,this.productForm.value);this.productService.saveProduct(t).subscribe(()=>this.onSaveComplete(),t=>this.errorMessage=t)}else this.productForm.dirty||this.onSaveComplete()}onSaveComplete(){this.productForm.reset(),this.router.navigate(["/products"])}onScreensizeChange(){const t=this.breakpointObserver.isMatched("(max-width: 599px)"),e=this.breakpointObserver.isMatched("(max-width: 959px)");console.log(` isLess600  ${t} \n        isLess1000 ${e}  `),this.fieldColspan=e?t?12:6:3}}return t.\u0275fac=function(e){return new(e||t)(a.Ob(c.c),a.Ob(u.a),a.Ob(u.f),a.Ob(d.a),a.Ob(s.a))},t.\u0275cmp=a.Ib({type:t,selectors:[["product-form"]],viewQuery:function(t,e){var r;1&t&&a.Fc(c.d,!0,a.l),2&t&&a.qc(r=a.dc())&&(e.formInputElements=r)},decls:35,vars:15,consts:[["novalidate","",3,"formGroup","ngSubmit"],[2,"background-color","#FFF"],[1,"view-card-title"],[1,"title-spacer"],["mat-mini-fab","","type","submit",1,"primary",2,"margin-right","10px","background-color","darkgray",3,"disabled"],["mat-mini-fab","",1,"",2,"margin-right","10px",3,"routerLink"],[2,"margin","5 0 5 0px"],[1,"form-card"],["cols","12","rowHeight","80px"],[3,"colspan"],["appearance","outline",1,"form-field"],["placeholder","Select Category","formControlName","categoryId",3,"value","valueChange"],["categoryIdId",""],[3,"value",4,"ngFor","ngForOf"],["matInput","","id","productNameId","type","text","placeholder","Product Name (required)","formControlName","productName"],[4,"ngIf"],["matInput","","id","unitPriceId","type","currency","placeholder","Price (required)","formControlName","unitPrice"],["matInput","","id","unitInStockId","type","number","placeholder","Quantity In Stock (required)","formControlName","unitInStock"],["class","has-error",4,"ngIf"],[3,"value"],[1,"has-error"]],template:function(t,e){1&t&&(a.Ub(0,"form",0),a.cc("ngSubmit",(function(){return e.saveProduct()})),a.Ub(1,"mat-card"),a.Ub(2,"mat-toolbar",1),a.Ub(3,"mat-toolbar-row"),a.Ub(4,"span",2),a.Ac(5),a.Tb(),a.Pb(6,"span",3),a.Ub(7,"mat-card-actions"),a.Ub(8,"button",4),a.Ub(9,"mat-icon"),a.Ac(10,"save"),a.Tb(),a.Tb(),a.Ub(11,"button",5),a.Ub(12,"mat-icon"),a.Ac(13,"cancel"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(14,"mat-card-content",6),a.Ub(15,"div",7),a.Ub(16,"mat-grid-list",8),a.Ub(17,"mat-grid-tile",9),a.Ub(18,"mat-form-field",10),a.Ub(19,"mat-select",11,12),a.cc("valueChange",(function(t){return e.product.categoryId=t})),a.zc(21,v,2,2,"mat-option",13),a.Tb(),a.Tb(),a.Tb(),a.Ub(22,"mat-grid-tile",9),a.Ub(23,"mat-form-field",10),a.Pb(24,"input",14),a.zc(25,P,2,1,"mat-error",15),a.Tb(),a.Tb(),a.Ub(26,"mat-grid-tile",9),a.Ub(27,"mat-form-field",10),a.Pb(28,"input",16),a.zc(29,U,2,1,"mat-error",15),a.Tb(),a.Tb(),a.Ub(30,"mat-grid-tile",9),a.Ub(31,"mat-form-field",10),a.Pb(32,"input",17),a.zc(33,k,2,1,"mat-error",15),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.zc(34,I,2,1,"div",18),a.Tb(),a.Tb(),a.Tb()),2&t&&(a.mc("formGroup",e.productForm),a.Cb(5),a.Cc(" ",e.pageTitle,""),a.Cb(3),a.mc("disabled",!e.productForm.valid),a.Cb(3),a.mc("routerLink",a.nc(14,S)),a.Cb(6),a.mc("colspan",e.fieldColspan),a.Cb(2),a.mc("value",e.product.categoryId),a.Cb(2),a.mc("ngForOf",e.categories),a.Cb(1),a.mc("colspan",e.fieldColspan),a.Cb(3),a.mc("ngIf",e.displayMessage.productName),a.Cb(1),a.mc("colspan",e.fieldColspan),a.Cb(3),a.mc("ngIf",e.displayMessage.unitPrice),a.Cb(1),a.mc("colspan",e.fieldColspan),a.Cb(3),a.mc("ngIf",e.displayMessage.unitInStock),a.Cb(1),a.mc("ngIf",e.errorMessage))},directives:[c.s,c.l,c.f,l.a,b.a,b.c,l.b,m.b,h.a,u.g,l.d,p.a,p.c,g.c,f.a,c.k,c.d,C.m,y.b,c.b,C.n,c.o,T.n,g.b],styles:[".title-spacer[_ngcontent-%COMP%] {\n      flex: 1 1 auto;\n    }\n  .form-field[_ngcontent-%COMP%]{\n      width: 100%;\n      margin-left: 20px;\n      margin-right: 20px;\n    }"]}),t})()},nscy:function(t,e,r){"use strict";r.d(e,"a",(function(){return $}));var a=r("M0ag"),c=r("M9IT"),i=r("Dh3D"),o=r("+0xr"),n=r("fXoL"),s=r("8/IB"),u=r("0IaG"),d=r("dNgK"),l=r("Wp6s"),b=r("/t3+"),m=r("bTqV"),h=r("tyNb"),p=r("NFeN"),g=r("kmnG"),f=r("qFsG"),C=r("XhcP"),y=r("MutI"),T=r("3Pt+"),v=r("f0Cb"),P=r("ofXK");function U(t,e){1&t&&(n.Ub(0,"mat-header-cell",35),n.Ac(1," Product Name "),n.Tb())}function k(t,e){if(1&t&&(n.Ub(0,"mat-cell"),n.Ac(1),n.Tb()),2&t){const t=e.$implicit;n.Cb(1),n.Cc(" ",t.productName," ")}}function I(t,e){1&t&&(n.Ub(0,"mat-header-cell",35),n.Ac(1," Price "),n.Tb())}function S(t,e){if(1&t&&(n.Ub(0,"mat-cell"),n.Ac(1),n.hc(2,"currency"),n.Tb()),2&t){const t=e.$implicit;n.Cb(1),n.Cc(" ",n.jc(2,1,t.unitPrice,"AUD")," ")}}function F(t,e){1&t&&(n.Ub(0,"mat-header-cell",35),n.Ac(1," Quantity In Stock "),n.Tb())}function w(t,e){if(1&t&&(n.Ub(0,"mat-cell"),n.Ac(1),n.hc(2,"number"),n.Tb()),2&t){const t=e.$implicit;n.Cb(1),n.Cc(" ",n.jc(2,1,t.unitInStock,"0.0-0")," ")}}function M(t,e){1&t&&(n.Ub(0,"mat-header-cell",35),n.Ac(1," Category "),n.Tb())}function A(t,e){if(1&t&&(n.Ub(0,"mat-cell"),n.Ac(1),n.Tb()),2&t){const t=e.$implicit;n.Cb(1),n.Cc(" ",t.category.categoryName,"")}}function N(t,e){1&t&&n.Pb(0,"mat-header-cell",36)}const x=function(t){return["/products/edit",t]};function D(t,e){if(1&t){const t=n.Vb();n.Ub(0,"mat-cell",36),n.Ub(1,"button",37),n.Ub(2,"mat-icon"),n.Ac(3,"edit"),n.Tb(),n.Tb(),n.Ub(4,"button",38),n.cc("click",(function(){n.tc(t);const r=e.$implicit;return n.gc().openDialog(r.id)})),n.Ub(5,"mat-icon"),n.Ac(6,"delete"),n.Tb(),n.Tb(),n.Tb()}if(2&t){const t=e.$implicit;n.Cb(1),n.mc("routerLink",n.oc(1,x,t.id))}}function O(t,e){1&t&&n.Pb(0,"mat-header-row")}function L(t,e){1&t&&n.Pb(0,"mat-row")}const z=function(){return["/products/edit",0]},q=function(){return[5,10]};let $=(()=>{class t{constructor(t,e,r){this.productService=t,this.dialog=e,this.snackBar=r,this.pageTitle="Products",this.showImage=!1,this.listFilter={},this.displayedColumns=["productName","unitPrice","unitInStock","categoryName","id"],this.dataSource=null,this.pager={},this.searchFilter={}}toggleImage(){this.showImage=!this.showImage}applyFilter(t){t=(t=t.trim()).toLowerCase(),this.dataSource.filter=t}freshDataList(t){this.products=t,this.productList=t.map(t=>{const e=t;return t.categoryName=t.category.categoryName,e}),this.dataSource=new o.k(this.products),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}ngOnInit(){this.productService.getProducts().subscribe(t=>{this.freshDataList(t)},t=>this.errorMessage=t),this.searchFilter={},this.listFilter={}}getProducts(t){this.productService.getProducts().subscribe(t=>{this.freshDataList(t)},t=>this.errorMessage=t)}searchProducts(t){t&&this.productService.getProducts().subscribe(e=>{this.products=e,console.log(this.products.length),this.products=this.products.filter(e=>{let r=!0;return Object.keys(t).forEach(a=>{r=r&&t[a]?e[a]&&e[a].toLocaleLowerCase().indexOf(t[a].toLocaleLowerCase())>-1:r}),r}),this.freshDataList(e)},t=>this.errorMessage=t)}resetListFilter(){this.listFilter={},this.getProducts()}reset(){this.listFilter={},this.searchFilter={},this.getProducts()}resetSearchFilter(t){t.toggle(),this.searchFilter={},this.getProducts()}openSnackBar(t,e){this.snackBar.open(t,e,{duration:1500})}openDialog(t){let e=this.dialog.open(a.a,{data:{title:"Dialog",message:"Are you sure to delete this item?"}});e.disableClose=!0,e.afterClosed().subscribe(r=>{this.selectedOption=r,this.selectedOption===e.componentInstance.ACTION_CONFIRM&&this.productService.deleteProduct(t).subscribe(()=>{this.productService.getProducts().subscribe(t=>{this.freshDataList(t)},t=>this.errorMessage=t),this.openSnackBar("The item has been deleted successfully. ","Close")},t=>{this.errorMessage=t,console.log(this.errorMessage),this.openSnackBar("This item has not been deleted successfully. Please try again.","Close")})})}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(s.a),n.Ob(u.b),n.Ob(d.a))},t.\u0275cmp=n.Ib({type:t,selectors:[["product-list"]],viewQuery:function(t,e){var r;1&t&&(n.Fc(c.a,!0),n.Fc(i.a,!0)),2&t&&(n.qc(r=n.dc())&&(e.paginator=r.first),n.qc(r=n.dc())&&(e.sort=r.first))},features:[n.Bb([a.a])],decls:74,vars:12,consts:[[1,"light",2,"height","100%"],[1,"view-card-title"],["mat-mini-fab","",2,"margin-right","10px","background-color","#e07c9e",3,"routerLink"],["mat-mini-fab","",2,"margin-right","10px","background-color","#a28b6e",3,"click"],["mat-mini-fab","",2,"margin-right","10px","background-color","darkgray",3,"click"],[1,"title-spacer"],["appearance","standard",1,"search-form-fileld"],["matInput","",3,"keyup"],["matSort","",3,"dataSource"],["table",""],["matColumnDef","productName"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","unitPrice"],["matColumnDef","unitInStock"],["matColumnDef","categoryName"],["matColumnDef","id"],["style","justify-content:right;",4,"matHeaderCellDef"],["style","justify-content:right;",4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"pageSize","pageSizeOptions"],["paginator",""],["position","end","dark","","mode","push","opened","false",1,"search-panel"],["sidenav",""],[1,"profile-card"],["mat-card-avatar","",1,"avatar"],[2,"margin-left","20px"],["matInput","","type","text","placeholder","Product Name","name","product",2,"width","200px",3,"ngModel","ngModelChange"],["product",""],["matInput","","type","text","placeholder","Price","name","price",2,"width","200px",3,"ngModel","ngModelChange"],["price",""],["matInput","","type","text","placeholder","Qunantity","name","quantity",2,"width","200px",3,"ngModel","ngModelChange"],["mat-raised-button","",2,"color","lightgrey","background-color","darkgreen","margin","5px",3,"click"],["mat-raised-button","",2,"color","lightgrey","background-color","darkred","margin","5px",3,"click"],["mat-sort-header",""],[2,"justify-content","right"],["mat-mini-fab","",2,"background-color","teal","min-height","30px","margin","5px",3,"routerLink"],["mat-mini-fab","",2,"background-color","lightblue","min-height","30px","margin","5px",3,"click"]],template:function(t,e){if(1&t){const t=n.Vb();n.Ub(0,"mat-card",0),n.Ub(1,"mat-card-header"),n.Ub(2,"mat-card-title",1),n.Ub(3,"h1"),n.Ac(4),n.Tb(),n.Tb(),n.Tb(),n.Ub(5,"mat-toolbar"),n.Ub(6,"mat-toolbar-row"),n.Ub(7,"button",2),n.Ub(8,"mat-icon"),n.Ac(9,"add"),n.Tb(),n.Tb(),n.Ub(10,"button",3),n.cc("click",(function(){return n.tc(t),n.rc(45).toggle()})),n.Ub(11,"mat-icon"),n.Ac(12,"search"),n.Tb(),n.Tb(),n.Ub(13,"button",4),n.cc("click",(function(){return e.reset()})),n.Ub(14,"mat-icon"),n.Ac(15,"refresh"),n.Tb(),n.Tb(),n.Pb(16,"span",5),n.Ub(17,"mat-form-field",6),n.Ub(18,"mat-label"),n.Ac(19,"Filter"),n.Tb(),n.Ub(20,"input",7),n.cc("keyup",(function(t){return e.applyFilter(t.target.value)})),n.Tb(),n.Ub(21,"mat-icon"),n.Ac(22,"filter_list"),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Ub(23,"mat-table",8,9),n.Sb(25,10),n.zc(26,U,2,0,"mat-header-cell",11),n.zc(27,k,2,1,"mat-cell",12),n.Rb(),n.Sb(28,13),n.zc(29,I,2,0,"mat-header-cell",11),n.zc(30,S,3,4,"mat-cell",12),n.Rb(),n.Sb(31,14),n.zc(32,F,2,0,"mat-header-cell",11),n.zc(33,w,3,4,"mat-cell",12),n.Rb(),n.Sb(34,15),n.zc(35,M,2,0,"mat-header-cell",11),n.zc(36,A,2,1,"mat-cell",12),n.Rb(),n.Sb(37,16),n.zc(38,N,1,0,"mat-header-cell",17),n.zc(39,D,7,3,"mat-cell",18),n.Rb(),n.zc(40,O,1,0,"mat-header-row",19),n.zc(41,L,1,0,"mat-row",20),n.Tb(),n.Pb(42,"mat-paginator",21,22),n.Tb(),n.Ub(44,"mat-sidenav",23,24),n.Ub(46,"mat-card",25),n.Ub(47,"mat-card-header"),n.Ub(48,"div",26),n.Ub(49,"mat-icon"),n.Ac(50,"search"),n.Tb(),n.Tb(),n.Ub(51,"mat-card-title"),n.Ac(52," Advanced Search "),n.Tb(),n.Tb(),n.Tb(),n.Ub(53,"mat-nav-list",27),n.Ub(54,"mat-form-field"),n.Ub(55,"input",28,29),n.cc("ngModelChange",(function(t){return e.searchFilter.productName=t})),n.Tb(),n.Tb(),n.Ub(57,"mat-form-field"),n.Ub(58,"input",30,31),n.cc("ngModelChange",(function(t){return e.searchFilter.price=t})),n.Tb(),n.Tb(),n.Ub(60,"mat-form-field"),n.Ub(61,"input",32,31),n.cc("ngModelChange",(function(t){return e.searchFilter.quantity=t})),n.Tb(),n.Tb(),n.Tb(),n.Pb(63,"mat-divider"),n.Ub(64,"mat-card-header"),n.Ub(65,"mat-action-list"),n.Ub(66,"button",33),n.cc("click",(function(){n.tc(t);const r=n.rc(45);return e.searchProducts(e.searchFilter),r.toggle()})),n.Ub(67,"mat-icon"),n.Ac(68,"search"),n.Tb(),n.Ac(69,"Search "),n.Tb(),n.Ub(70,"button",34),n.cc("click",(function(){n.tc(t);const r=n.rc(45);return e.resetSearchFilter(r)})),n.Ub(71,"mat-icon"),n.Ac(72,"refresh"),n.Tb(),n.Ac(73,"Reset "),n.Tb(),n.Tb(),n.Tb(),n.Tb()}2&t&&(n.Cb(4),n.Bc(e.pageTitle),n.Cb(3),n.mc("routerLink",n.nc(10,z)),n.Cb(16),n.mc("dataSource",e.dataSource),n.Cb(17),n.mc("matHeaderRowDef",e.displayedColumns),n.Cb(1),n.mc("matRowDefColumns",e.displayedColumns),n.Cb(1),n.mc("pageSize",10)("pageSizeOptions",n.nc(11,q)),n.Cb(13),n.mc("ngModel",e.searchFilter.productName),n.Cb(3),n.mc("ngModel",e.searchFilter.price),n.Cb(3),n.mc("ngModel",e.searchFilter.quantity))},directives:[l.a,l.e,l.h,b.a,b.c,m.b,h.g,p.a,g.c,g.f,f.b,o.j,i.a,o.c,o.e,o.b,o.g,o.i,c.a,C.a,l.c,y.f,T.b,T.k,T.n,v.a,y.a,o.d,i.b,o.a,o.f,o.h],pipes:[P.d,P.g],styles:["thead[_ngcontent-%COMP%]{color:#337ab7}.title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.search-form-fileld[_ngcontent-%COMP%]{margin-right:20px}"]}),t})()},qvFY:function(t,e,r){"use strict";r.r(e),r.d(e,"ProductModule",(function(){return m}));var a=r("tyNb"),c=r("3Pt+"),i=r("nscy"),o=r("fXoL");let n=(()=>{class t{constructor(t){this.router=t}canActivate(t){let e=+t.url[1].path;return!(isNaN(e)||e<1)||(alert("Invalid product Id"),this.router.navigate(["/products"]),!1)}}return t.\u0275fac=function(e){return new(e||t)(o.Yb(a.f))},t.\u0275prov=o.Kb({token:t,factory:t.\u0275fac}),t})(),s=(()=>{class t{canDeactivate(t){if(t.productForm.dirty){let e=t.productForm.get("productName").value||"New Product";return confirm(`Navigate away and lose all changes to ${e}?`)}return!0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Kb({token:t,factory:t.\u0275fac}),t})();var u=r("JiIv"),d=r("8/IB"),l=r("PCNd"),b=r("5dmV");let m=(()=>{class t{}return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(e){return new(e||t)},providers:[d.a,n,s],imports:[[l.a,c.p,b.a,a.i.forChild([{path:"",component:i.a},{path:"edit/:id",canDeactivate:[s],component:u.a}])]]}),t})()}}]);