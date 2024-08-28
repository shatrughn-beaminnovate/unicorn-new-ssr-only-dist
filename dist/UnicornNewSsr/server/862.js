"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=862,exports.ids=[862],exports.modules={4385:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>ImageLoaderComponent});var rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5917),rxjs_operators__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8002),rxjs_operators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5304),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7716),_angular_common_http__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1841),_angular_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8583);class ImageLoaderComponent{constructor(cd,http){this.cd=cd,this.http=http,this.imageLoading=!0,this.imageLoaded=!1,this.imageUrl="",this.imageLoadingUrl="assets/img/loader/3.gif",this.noImageUrl="assets/img/not-found/no-image-found.png",this.alt="Image Not Available",this.imageId="",this.imageClass="",this.imageContainerHeight="",this.imageContainerWidth="",this.imageContainerClass="",this.isLoadingImageExists=!0}ngOnInit(){this.checkAppFileExists(this.imageLoadingUrl).subscribe(exists=>{this.isLoadingImageExists=exists})}checkAppFileExists(filePath){return this.http.get(filePath,{responseType:"text"}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.U)(response=>!0),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.K)(error=>(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(!1)))}onImageLoaded(){this.imageLoading=!1}handleEmptyImage(){this.imageLoading=!1,this.isLoadingImageExists&&(this.imageUrl=this.noImageUrl)}}__name(ImageLoaderComponent,"ImageLoaderComponent"),ImageLoaderComponent.\u0275fac=__name(function(t){return new(t||ImageLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.Y36(_angular_core__WEBPACK_IMPORTED_MODULE_3__.sBO),_angular_core__WEBPACK_IMPORTED_MODULE_3__.Y36(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.eN))},"ImageLoaderComponent_Factory"),ImageLoaderComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_3__.Xpm({type:ImageLoaderComponent,selectors:[["app-image-loader"]],inputs:{imageLoading:"imageLoading",imageLoaded:"imageLoaded",imageUrl:"imageUrl",imageLoadingUrl:"imageLoadingUrl",noImageUrl:"noImageUrl",alt:"alt",imageId:"imageId",imageClass:"imageClass",imageContainerHeight:"imageContainerHeight",imageContainerWidth:"imageContainerWidth",imageContainerClass:"imageContainerClass",id:"id"},decls:2,vars:10,consts:[[1,"image-container",3,"ngClass"],["loading","lazy",1,"img-fluid",3,"src","alt","id","ngClass","load","error"]],template:__name(function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_3__.TgZ(0,"div",0),_angular_core__WEBPACK_IMPORTED_MODULE_3__.TgZ(1,"img",1),_angular_core__WEBPACK_IMPORTED_MODULE_3__.NdJ("load",__name(function(){return ctx.onImageLoaded()},"ImageLoaderComponent_Template_img_load_1_listener"))("error",__name(function(){return ctx.handleEmptyImage()},"ImageLoaderComponent_Template_img_error_1_listener")),_angular_core__WEBPACK_IMPORTED_MODULE_3__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_3__.qZA()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_3__.Udp("height",ctx.imageContainerHeight)("width",ctx.imageContainerWidth),_angular_core__WEBPACK_IMPORTED_MODULE_3__.Q6J("ngClass",ctx.imageContainerClass),_angular_core__WEBPACK_IMPORTED_MODULE_3__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_3__.Q6J("src",ctx.imageLoading?ctx.imageLoadingUrl:ctx.imageUrl,_angular_core__WEBPACK_IMPORTED_MODULE_3__.LSH)("alt",ctx.alt)("id",ctx.imageId)("ngClass",ctx.imageClass),_angular_core__WEBPACK_IMPORTED_MODULE_3__.uIk("id",ctx.id))},"ImageLoaderComponent_Template"),directives:[_angular_common__WEBPACK_IMPORTED_MODULE_5__.mk],styles:[".image-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;overflow:hidden}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%;width:auto}"]})},862:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CategoriesModule:()=>CategoriesModule});var router=__webpack_require__(633),Subscription=__webpack_require__(5319),environment=__webpack_require__(2340),map=__webpack_require__(8002),core=__webpack_require__(7716),common_service=__webpack_require__(690),primeng_api=__webpack_require__(9783),data_layer_service=__webpack_require__(1630),storage_service=__webpack_require__(2323),seo_service=__webpack_require__(6228),common=__webpack_require__(8583),angular_slider_ngx_slider=__webpack_require__(2554),fesm2015_forms=__webpack_require__(3679),image_loader_component=__webpack_require__(4385),price_component=__webpack_require__(5889);function CategoriesComponent_div_2_button_5_Template(rf,ctx){if(1&rf){const _r7=core.EpF();core.TgZ(0,"button",26),core.NdJ("click",__name(function(){return core.CHM(_r7),core.oxw(2).clearAllFilters()},"CategoriesComponent_div_2_button_5_Template_button_click_0_listener")),core._uU(1,"CLEAR ALL"),core.qZA()}}function CategoriesComponent_div_2_button_11_Template(rf,ctx){if(1&rf){const _r9=core.EpF();core.TgZ(0,"button",26),core.NdJ("click",__name(function(){return core.CHM(_r9),core.oxw(2).clearPriceFilters()},"CategoriesComponent_div_2_button_11_Template_button_click_0_listener")),core._uU(1,"CLEAR"),core.qZA()}}function CategoriesComponent_div_2_ng_container_35_ng_container_9_Template(rf,ctx){if(1&rf){const _r15=core.EpF();core.ynx(0),core.TgZ(1,"div",33),core.TgZ(2,"input",34),core.NdJ("ngModelChange",__name(function($event){return core.CHM(_r15).$implicit.selected=$event},"CategoriesComponent_div_2_ng_container_35_ng_container_9_Template_input_ngModelChange_2_listener"))("change",__name(function(){return core.CHM(_r15),core.oxw(3).onAttributesSelectedForFilters()},"CategoriesComponent_div_2_ng_container_35_ng_container_9_Template_input_change_2_listener")),core.qZA(),core.TgZ(3,"label",35),core._uU(4),core.qZA(),core.qZA(),core.BQk()}if(2&rf){const opt_r13=ctx.$implicit;core.xp6(2),core.Q6J("ngModel",opt_r13.selected)("id",opt_r13.id),core.xp6(1),core.uIk("for",opt_r13.id),core.xp6(1),core.Oqu(opt_r13.option_name)}}function CategoriesComponent_div_2_ng_container_35_Template(rf,ctx){if(1&rf&&(core.ynx(0),core.TgZ(1,"div",27),core.TgZ(2,"button",28),core.TgZ(3,"span"),core._uU(4),core.qZA(),core.TgZ(5,"span"),core._UZ(6,"i",29),core.qZA(),core.qZA(),core.TgZ(7,"div",30),core.TgZ(8,"div",31),core.YNc(9,CategoriesComponent_div_2_ng_container_35_ng_container_9_Template,5,4,"ng-container",32),core.qZA(),core.qZA(),core.qZA(),core.BQk()),2&rf){const attr_r10=ctx.$implicit,i_r11=ctx.index;core.xp6(2),core.uIk("data-target","#collapsible_"+i_r11),core.xp6(2),core.Oqu(attr_r10.attribute_label),core.xp6(3),core.MGl("id","collapsible_",i_r11,""),core.xp6(2),core.Q6J("ngForOf",attr_r10.attribute_options)}}function CategoriesComponent_div_2_Template(rf,ctx){if(1&rf){const _r18=core.EpF();core.TgZ(0,"div",7),core.TgZ(1,"div",8),core.TgZ(2,"div",9),core.TgZ(3,"h4",10),core._uU(4,"Filters"),core.qZA(),core.YNc(5,CategoriesComponent_div_2_button_5_Template,2,0,"button",11),core.qZA(),core.TgZ(6,"div",12),core.TgZ(7,"div",13),core.TgZ(8,"div",14),core.TgZ(9,"h5",15),core._uU(10,"PRICE "),core.qZA(),core.YNc(11,CategoriesComponent_div_2_button_11_Template,2,0,"button",11),core.qZA(),core.TgZ(12,"ngx-slider",16),core.NdJ("valueChange",__name(function($event){core.CHM(_r18);return core.oxw().minValue=$event},"CategoriesComponent_div_2_Template_ngx_slider_valueChange_12_listener"))("mouseup",__name(function(){return core.CHM(_r18),core.oxw().onPriceChanged()},"CategoriesComponent_div_2_Template_ngx_slider_mouseup_12_listener"))("highValueChange",__name(function($event){core.CHM(_r18);return core.oxw().maxValue=$event},"CategoriesComponent_div_2_Template_ngx_slider_highValueChange_12_listener")),core.qZA(),core.TgZ(13,"div",17),core.TgZ(14,"div",18),core.TgZ(15,"label"),core._uU(16,"Min Price"),core.qZA(),core.TgZ(17,"div",19),core.TgZ(18,"div",20),core.TgZ(19,"span",21),core._UZ(20,"i",22),core.qZA(),core.qZA(),core.TgZ(21,"input",23),core.NdJ("ngModelChange",__name(function($event){core.CHM(_r18);return core.oxw().minValue=$event},"CategoriesComponent_div_2_Template_input_ngModelChange_21_listener"))("change",__name(function(){return core.CHM(_r18),core.oxw().onPriceChanged()},"CategoriesComponent_div_2_Template_input_change_21_listener")),core.qZA(),core.qZA(),core.qZA(),core.TgZ(22,"span",24),core.TgZ(23,"label"),core._uU(24,"\xa0"),core.qZA(),core._UZ(25,"br"),core._uU(26,"to"),core.qZA(),core.TgZ(27,"div",18),core.TgZ(28,"label"),core._uU(29,"Max Price"),core.qZA(),core.TgZ(30,"div",19),core.TgZ(31,"div",20),core.TgZ(32,"span",21),core._UZ(33,"i",22),core.qZA(),core.qZA(),core.TgZ(34,"input",23),core.NdJ("ngModelChange",__name(function($event){core.CHM(_r18);return core.oxw().maxValue=$event},"CategoriesComponent_div_2_Template_input_ngModelChange_34_listener"))("change",__name(function(){return core.CHM(_r18),core.oxw().onPriceChanged()},"CategoriesComponent_div_2_Template_input_change_34_listener")),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.YNc(35,CategoriesComponent_div_2_ng_container_35_Template,10,4,"ng-container",25),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const ctx_r0=core.oxw();core.xp6(5),core.Q6J("ngIf",ctx_r0.isFilterApplied),core.xp6(6),core.Q6J("ngIf",ctx_r0.isPriceFilterApplied),core.xp6(1),core.Q6J("value",ctx_r0.minValue)("highValue",ctx_r0.maxValue)("options",ctx_r0.options),core.xp6(9),core.Q6J("ngModel",ctx_r0.minValue),core.xp6(13),core.Q6J("ngModel",ctx_r0.maxValue),core.xp6(1),core.Q6J("ngForOf",ctx_r0.attributesHolder)("ngForTrackBy",ctx_r0.trackByFunc)}}__name(CategoriesComponent_div_2_button_5_Template,"CategoriesComponent_div_2_button_5_Template"),__name(CategoriesComponent_div_2_button_11_Template,"CategoriesComponent_div_2_button_11_Template"),__name(CategoriesComponent_div_2_ng_container_35_ng_container_9_Template,"CategoriesComponent_div_2_ng_container_35_ng_container_9_Template"),__name(CategoriesComponent_div_2_ng_container_35_Template,"CategoriesComponent_div_2_ng_container_35_Template"),__name(CategoriesComponent_div_2_Template,"CategoriesComponent_div_2_Template");const _c0=__name(function(a1){return["/type",a1]},"_c0");function CategoriesComponent_div_5_a_1_Template(rf,ctx){if(1&rf){const _r31=core.EpF();core.TgZ(0,"a",38),core.NdJ("click",__name(function(){core.CHM(_r31);const item_r25=core.oxw().$implicit;return core.oxw().setMetaData(item_r25)},"CategoriesComponent_div_5_a_1_Template_a_click_0_listener")),core._UZ(1,"app-image-loader",39),core.TgZ(2,"h3",40),core._uU(3),core.qZA(),core._UZ(4,"app-price",41),core.qZA()}if(2&rf){const item_r25=core.oxw().$implicit,ctx_r26=core.oxw();core.Q6J("routerLink",core.VKq(5,_c0,item_r25.slug)),core.xp6(1),core.Q6J("imageUrl",ctx_r26.imgUrl+"/medium/"+item_r25.image)("imageLoading",!0),core.xp6(2),core.Oqu(item_r25.name),core.xp6(1),core.Q6J("price",item_r25.min_saleprice)}}__name(CategoriesComponent_div_5_a_1_Template,"CategoriesComponent_div_5_a_1_Template");const _c1=__name(function(a1){return["/accessories",a1]},"_c1");function CategoriesComponent_div_5_a_2_Template(rf,ctx){if(1&rf){const _r35=core.EpF();core.TgZ(0,"a",38),core.NdJ("click",__name(function(){core.CHM(_r35);const item_r25=core.oxw().$implicit;return core.oxw().setMetaData(item_r25)},"CategoriesComponent_div_5_a_2_Template_a_click_0_listener")),core._UZ(1,"app-image-loader",39),core.TgZ(2,"h3",40),core._uU(3),core.qZA(),core._UZ(4,"app-price",41),core.qZA()}if(2&rf){const item_r25=core.oxw().$implicit,ctx_r27=core.oxw();core.Q6J("routerLink",core.VKq(5,_c1,item_r25.slug)),core.xp6(1),core.Q6J("imageUrl",ctx_r27.imgUrl+"/medium/"+item_r25.image)("imageLoading",!0),core.xp6(2),core.Oqu(item_r25.name),core.xp6(1),core.Q6J("price",item_r25.min_saleprice)}}__name(CategoriesComponent_div_5_a_2_Template,"CategoriesComponent_div_5_a_2_Template");const _c2=__name(function(a1){return["/category",a1]},"_c2");function CategoriesComponent_div_5_a_3_Template(rf,ctx){if(1&rf){const _r39=core.EpF();core.TgZ(0,"a",38),core.NdJ("click",__name(function(){core.CHM(_r39);const item_r25=core.oxw().$implicit;return core.oxw().setMetaData(item_r25)},"CategoriesComponent_div_5_a_3_Template_a_click_0_listener")),core._UZ(1,"app-image-loader",39),core.TgZ(2,"h3",40),core._uU(3),core.qZA(),core._UZ(4,"app-price",41),core.qZA()}if(2&rf){const item_r25=core.oxw().$implicit,ctx_r28=core.oxw();core.Q6J("routerLink",core.VKq(5,_c2,item_r25.slug)),core.xp6(1),core.Q6J("imageUrl",ctx_r28.imgUrl+"/medium/"+item_r25.image)("imageLoading",!0),core.xp6(2),core.Oqu(item_r25.name),core.xp6(1),core.Q6J("price",item_r25.min_saleprice)}}function CategoriesComponent_div_5_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",36),core.YNc(1,CategoriesComponent_div_5_a_1_Template,5,7,"a",37),core.YNc(2,CategoriesComponent_div_5_a_2_Template,5,7,"a",37),core.YNc(3,CategoriesComponent_div_5_a_3_Template,5,7,"a",37),core.qZA()),2&rf){const item_r25=ctx.$implicit;core.xp6(1),core.Q6J("ngIf",item_r25.childrens&&0===item_r25.childrens.length&&"configurable"===item_r25.category_type),core.xp6(1),core.Q6J("ngIf",item_r25.childrens&&0===item_r25.childrens.length&&"simple"===item_r25.category_type),core.xp6(1),core.Q6J("ngIf",item_r25.childrens&&item_r25.childrens.length>0)}}function CategoriesComponent_div_6_Template(rf,ctx){1&rf&&(core.TgZ(0,"div",42),core.TgZ(1,"h4",43),core._uU(2,"Categories Not Available"),core.qZA(),core.qZA())}__name(CategoriesComponent_div_5_a_3_Template,"CategoriesComponent_div_5_a_3_Template"),__name(CategoriesComponent_div_5_Template,"CategoriesComponent_div_5_Template"),__name(CategoriesComponent_div_6_Template,"CategoriesComponent_div_6_Template");class CategoriesComponent{constructor(route,router2,commonService,cd,messageService,dataLayerService,storageService,seoService){this.route=route,this.router=router2,this.commonService=commonService,this.cd=cd,this.messageService=messageService,this.dataLayerService=dataLayerService,this.storageService=storageService,this.seoService=seoService,this.imgUrl=environment.N.imgUrl,this.categoryAttrHolder=[],this.attributesHolder=[],this.isPriceFilterApplied=!1,this.isFilterApplied=!1,this.minValue=0,this.maxValue=5e6,this.options={floor:0,ceil:5e5},this.subscription=Subscription.w.EMPTY,this.sortOptions=[{label:"Name: A to Z",value:"name"},{label:"Name: Z to A",value:"!name"},{label:"Price: Low to High",value:"saleprice"},{label:"Price: High to Low",value:"!saleprice"}]}ngOnInit(){this.commonService.baseUrls$.subscribe(result=>{var _a,_b;this.imgUrl=(null===(_a=null==result?void 0:result.asset_url)||void 0===_a?void 0:_a.s3_link)||(null===(_b=null==result?void 0:result.asset_url)||void 0===_b?void 0:_b.fallback)||environment.N.imgUrl},()=>{this.imgUrl=environment.N.imgUrl}),this.route.paramMap.subscribe(resp=>{this.getCategoryBySlug(resp.params.slug)}),setTimeout(()=>{this.seoService.setTitle(this.storageService.getLocalStorageData("meta-title")),this.seoService.setMetaTags(this.storageService.getLocalStorageData("meta-tags"))},1e3)}setMetaData(item){const metaArray=this.seoService.parseMetaTags(item.meta);this.storageService.setLocalStorageData("meta-tags",metaArray),this.storageService.setLocalStorageData("meta-title",item.seo_title)}getCategoryBySlug(slug){this.commonService.postRequestWithSlug(slug,{view:"tree"}).subscribe(result=>{var _a;this.categoryType=null===(_a=null==result?void 0:result.category)||void 0===_a?void 0:_a.category_type,this.categoryAttrHolder=result,this.handleCategoryListGA4(slug)})}ngAfterViewChecked(){this.cd.detectChanges()}getCategory(slug){this.commonService.getRequest(`attribute/get_category/${slug}`).subscribe(result=>{var _a;if(window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"view_item_list",ecommerce:{value:result.data.length,items:result.data.map((item,index)=>({item_id:item.id,item_name:item.name,index:index-1}))}}),result.status){if(null!=result.attributes&&this.storageService.setLocalStorageData("attr_type",result.attributes),null===(_a=null==result?void 0:result.data)||void 0===_a?void 0:_a.primary)return void this.router.navigate(["products",slug],{replaceUrl:!0});this.categoryAttrHolder=result.data,this.handleCategoryListGA4(slug)}else this.messageService.add({severity:"error",detail:result.message})})}handleCategoryListGA4(slug){let items=[];this.categoryAttrHolder.forEach((item,index)=>{items.push({item_id:item.id,item_name:item.name})}),this.dataLayerService.push({event:"view_item_list",ecommerce:{item_list_id:"from_main_menu",item_list_name:"From Main Menu",items}})}onClickCategoryItem(slug){var _a;null===(_a=this.commonService.getRequest(`attribute/get_category/${slug}`))||void 0===_a||_a.subscribe(result=>{result.status?result.attributes&&result.attributes.length>0?this.router.navigate(["type",slug]):"simple"===result.product_type?this.router.navigate(["accessories",slug]):this.getCategory(slug):this.messageService.add({severity:"error",detail:result.message})})}onAttributesSelectedForFilters(){this.attributesHolder&&this.storageService.setLocalStorageData("filterable-attributes",this.attributesHolder),this.loadData(this.defaultPaginateEvent)}onPriceChanged(){this.isPriceFilterApplied=!0,this.loadData(this.defaultPaginateEvent)}clearPriceFilters(){this.isPriceFilterApplied=!1,this.minValue=0,this.maxValue=5e6,this.loadData(this.defaultPaginateEvent)}clearAllFilters(){this.storageService.removeLocalStorageData("filterable-attributes"),this.attributesHolder.forEach((item,i)=>{item.attribute_options.forEach((opt,j)=>{opt.selected&&(this.attributesHolder[i].attribute_options[j].selected=!1)})}),this.clearPriceFilters()}loadData(event){this.storageService.getLocalStorageData("filterable-attributes")&&"undefined"!==this.storageService.getLocalStorageData("filterable-attributes")?this.attributesHolder=this.storageService.getLocalStorageData("filterable-attributes"):this.isFilterApplied=!1,this.defaultPaginateEvent=event;let convertedEvent={limit_per_page:null==event?void 0:event.rows,order_by:null==event?void 0:event.sortField,skip:null==event?void 0:event.first,sort:null==event?void 0:event.sortOrder,filter_text:""},attributesArr=[];this.attributesHolder.forEach((item,i)=>{let optionsIds=[],attrType="";if(item.attribute_options.forEach(opt=>{opt.selected&&(this.isFilterApplied=!0,attrType=opt.attribute_type,optionsIds.push(opt.id))}),""!==attrType&&optionsIds.length>0){let count=attributesArr.length;0===count?attributesArr.push({attribute_type:attrType,attribute_options:optionsIds}):attributesArr[count-1].attribute_type===attrType?attributesArr[count-1].attribute_options.push(...optionsIds):attributesArr.push({attribute_type:attrType,attribute_options:optionsIds})}}),attributesArr.length>0&&(convertedEvent.attributes=[...attributesArr]),this.isPriceFilterApplied&&(convertedEvent.attributes&&convertedEvent.attributes.length>0?convertedEvent.attributes.push({attribute_type:"price",attribute_options:[this.minValue,this.maxValue]}):convertedEvent.attributes=[{attribute_type:"price",attribute_options:[this.minValue,this.maxValue]}]),this.subscription=this.route.paramMap.subscribe(resp=>{this.title=resp.params.slug,this.commonService.postRequest(`attribute/get_category/products/${resp.params.slug}`,convertedEvent).pipe((0,map.U)(resp2=>(resp2.attributes&&resp2.attributes.forEach(item=>{item.attribute_options.forEach((opt,index)=>{item.attribute_options[index].selected=!1})}),resp2))).subscribe(result=>{this.categoryTypeHolder=result.data,setTimeout(()=>{Array.isArray(result.attributes)&&this.storageService.setLocalStorageData("attr_type",result.attributes)},1e3),this.storageService.getLocalStorageData("filterable-attributes")?"undefined"!==this.storageService.getLocalStorageData("filterable-attributes")&&(this.attributesHolder=this.storageService.getLocalStorageData("filterable-attributes")):(this.attributesHolder=result.attributes,this.storageService.setLocalStorageData("filterable-attributes",result.attributes)),this.totalRecords=result.total_count})})}onSortChange(event){let value=event.value;0===value.indexOf("!")?(this.sortOrder=-1,this.sortField=value.substring(1,value.length)):(this.sortOrder=1,this.sortField=value)}ngOnDestroy(){var _a;null===(_a=this.subscription)||void 0===_a||_a.unsubscribe()}clearFilter(){this.defaultPaginateEvent={first:0,rows:12,sortField:void 0,sortOrder:void 0},this.sortKey="",this.loadData(this.defaultPaginateEvent)}trackByFunc(index){return index}onClickProduct(Id,name){this.dataLayerService.push({ecommerce:null}),this.dataLayerService.push({event:"select_item",ecommerce:{item_list_id:name,item_list_name:name,items:[{item_id:Id,item_name:name}]}})}}__name(CategoriesComponent,"CategoriesComponent"),CategoriesComponent.\u0275fac=__name(function(t){return new(t||CategoriesComponent)(core.Y36(router.gz),core.Y36(router.F0),core.Y36(common_service.v),core.Y36(core.sBO),core.Y36(primeng_api.ez),core.Y36(data_layer_service.n),core.Y36(storage_service.V),core.Y36(seo_service.v))},"CategoriesComponent_Factory"),CategoriesComponent.\u0275cmp=core.Xpm({type:CategoriesComponent,selectors:[["app-categories"]],decls:7,vars:3,consts:[[1,"container"],[1,"form-row","justify-content-center"],["class","col-sm-3 d-none",4,"ngIf"],[1,"col-sm-12"],[1,"row","pt-2","pb-3","justify-content-center","text-center"],["class","col-sm-3 cg-4",4,"ngFor","ngForOf"],["class","col-sm",4,"ngIf"],[1,"col-sm-3","d-none"],[1,"card","border-0","shadow-sm","sticky-top-filters","filters-section"],[1,"card-header","d-flex","align-items-center","justify-content-between"],[1,"heading","mb-0","mt-1"],["type","button","class","btn-link clr-btn",3,"click",4,"ngIf"],[1,"card-body"],[1,"filter-box","mb-4"],[1,"d-flex","align-items-center","justify-content-between","mb-3"],[1,"filter-label"],[3,"value","highValue","options","valueChange","mouseup","highValueChange"],[1,"d-flex","align-items-center","justify-content-between","mt-2"],[1,"form-groups"],[1,"input-group","input-group-xs"],[1,"input-group-prepend"],[1,"input-group-text","rounded-0"],[1,"fa","fa-rupee-sign"],["type","text",1,"form-control","form-control-xs","rounded-0",3,"ngModel","ngModelChange","change"],[1,"px-2"],[4,"ngFor","ngForOf","ngForTrackBy"],["type","button",1,"btn-link","clr-btn",3,"click"],[1,"filter-box"],["type","button","data-toggle","collapse","aria-expanded","true",1,"btn-link","filter-btn"],[1,"fa","fa-angle-right","ml-2"],[1,"collapse","show",3,"id"],[1,"mb-2"],[4,"ngFor","ngForOf"],[1,"custom-control","custom-checkbox"],["type","checkbox",1,"custom-control-input",3,"ngModel","id","ngModelChange","change"],[1,"custom-control-label"],[1,"col-sm-3","cg-4"],["class","product-list-box",3,"routerLink","click",4,"ngIf"],[1,"product-list-box",3,"routerLink","click"],["noImageUrl","assets/img/not-found/no-image-found.png","imageContainerHeight","11rem","alt","Image Not Available",3,"imageUrl","imageLoading"],[1,"heading","mt-3","mb-2"],["priceLabel","Starting From",3,"price"],[1,"col-sm"],[1,"heading","text-danger","m-0","py-5"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"div",0),core.TgZ(1,"div",1),core.YNc(2,CategoriesComponent_div_2_Template,36,9,"div",2),core.TgZ(3,"div",3),core.TgZ(4,"div",4),core.YNc(5,CategoriesComponent_div_5_Template,4,3,"div",5),core.YNc(6,CategoriesComponent_div_6_Template,3,0,"div",6),core.qZA(),core.qZA(),core.qZA(),core.qZA()),2&rf&&(core.xp6(2),core.Q6J("ngIf",ctx.categoryTypeHolder),core.xp6(3),core.Q6J("ngForOf",ctx.categoryAttrHolder),core.xp6(1),core.Q6J("ngIf",0===(null==ctx.categoryTypeHolder?null:ctx.categoryTypeHolder.length)))},"CategoriesComponent_Template"),directives:[common.O5,common.sg,angular_slider_ngx_slider.w5,fesm2015_forms.Fj,fesm2015_forms.JJ,fesm2015_forms.On,fesm2015_forms.Wl,router.yS,image_loader_component.g,price_component.C],styles:[".filter-bg[_ngcontent-%COMP%]{background-color:#f2f2f2}.filter-col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#0070c9}.custom-control-label.starlight[_ngcontent-%COMP%]:before{background-color:#dcd2c9}.custom-control-label.midnight[_ngcontent-%COMP%]:before{background-color:#3c3d42}.custom-control-label.green[_ngcontent-%COMP%]:before{background-color:#496149}.custom-control-label.productred[_ngcontent-%COMP%]:before{background-color:#c33647}.col-sm-4[_ngcontent-%COMP%]:nth-child(3n){border-right:0!important}.product-list-box[_ngcontent-%COMP%]{width:100%;display:flex;background-color:#fbfbfb;border-radius:10px;padding:20px;height:100%;flex-direction:column;flex-wrap:wrap;justify-content:flex-end;align-items:center}.cg-4[_ngcontent-%COMP%]{margin-bottom:30px}"]});const routes=[{path:":slug",component:CategoriesComponent}];class CategoriesRoutingModule{}__name(CategoriesRoutingModule,"CategoriesRoutingModule"),CategoriesRoutingModule.\u0275fac=__name(function(t){return new(t||CategoriesRoutingModule)},"CategoriesRoutingModule_Factory"),CategoriesRoutingModule.\u0275mod=core.oAB({type:CategoriesRoutingModule}),CategoriesRoutingModule.\u0275inj=core.cJS({imports:[[router.Bz.forChild(routes)],router.Bz]});var shared_module=__webpack_require__(8769);class CategoriesModule{}__name(CategoriesModule,"CategoriesModule"),CategoriesModule.\u0275fac=__name(function(t){return new(t||CategoriesModule)},"CategoriesModule_Factory"),CategoriesModule.\u0275mod=core.oAB({type:CategoriesModule}),CategoriesModule.\u0275inj=core.cJS({imports:[[CategoriesRoutingModule,shared_module.m]]})}};