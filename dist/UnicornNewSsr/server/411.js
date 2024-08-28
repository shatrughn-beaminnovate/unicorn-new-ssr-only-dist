"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=411,exports.ids=[411],exports.modules={4385:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>ImageLoaderComponent});var rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5917),rxjs_operators__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8002),rxjs_operators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5304),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7716),_angular_common_http__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1841),_angular_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8583);class ImageLoaderComponent{constructor(cd,http){this.cd=cd,this.http=http,this.imageLoading=!0,this.imageLoaded=!1,this.imageUrl="",this.imageLoadingUrl="assets/img/loader/3.gif",this.noImageUrl="assets/img/not-found/no-image-found.png",this.alt="Image Not Available",this.imageId="",this.imageClass="",this.imageContainerHeight="",this.imageContainerWidth="",this.imageContainerClass="",this.isLoadingImageExists=!0}ngOnInit(){this.checkAppFileExists(this.imageLoadingUrl).subscribe(exists=>{this.isLoadingImageExists=exists})}checkAppFileExists(filePath){return this.http.get(filePath,{responseType:"text"}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.U)(response=>!0),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.K)(error=>(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(!1)))}onImageLoaded(){this.imageLoading=!1}handleEmptyImage(){this.imageLoading=!1,this.isLoadingImageExists&&(this.imageUrl=this.noImageUrl)}}__name(ImageLoaderComponent,"ImageLoaderComponent"),ImageLoaderComponent.\u0275fac=__name(function(t){return new(t||ImageLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.Y36(_angular_core__WEBPACK_IMPORTED_MODULE_3__.sBO),_angular_core__WEBPACK_IMPORTED_MODULE_3__.Y36(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.eN))},"ImageLoaderComponent_Factory"),ImageLoaderComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_3__.Xpm({type:ImageLoaderComponent,selectors:[["app-image-loader"]],inputs:{imageLoading:"imageLoading",imageLoaded:"imageLoaded",imageUrl:"imageUrl",imageLoadingUrl:"imageLoadingUrl",noImageUrl:"noImageUrl",alt:"alt",imageId:"imageId",imageClass:"imageClass",imageContainerHeight:"imageContainerHeight",imageContainerWidth:"imageContainerWidth",imageContainerClass:"imageContainerClass",id:"id"},decls:2,vars:10,consts:[[1,"image-container",3,"ngClass"],["loading","lazy",1,"img-fluid",3,"src","alt","id","ngClass","load","error"]],template:__name(function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_3__.TgZ(0,"div",0),_angular_core__WEBPACK_IMPORTED_MODULE_3__.TgZ(1,"img",1),_angular_core__WEBPACK_IMPORTED_MODULE_3__.NdJ("load",__name(function(){return ctx.onImageLoaded()},"ImageLoaderComponent_Template_img_load_1_listener"))("error",__name(function(){return ctx.handleEmptyImage()},"ImageLoaderComponent_Template_img_error_1_listener")),_angular_core__WEBPACK_IMPORTED_MODULE_3__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_3__.qZA()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_3__.Udp("height",ctx.imageContainerHeight)("width",ctx.imageContainerWidth),_angular_core__WEBPACK_IMPORTED_MODULE_3__.Q6J("ngClass",ctx.imageContainerClass),_angular_core__WEBPACK_IMPORTED_MODULE_3__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_3__.Q6J("src",ctx.imageLoading?ctx.imageLoadingUrl:ctx.imageUrl,_angular_core__WEBPACK_IMPORTED_MODULE_3__.LSH)("alt",ctx.alt)("id",ctx.imageId)("ngClass",ctx.imageClass),_angular_core__WEBPACK_IMPORTED_MODULE_3__.uIk("id",ctx.id))},"ImageLoaderComponent_Template"),directives:[_angular_common__WEBPACK_IMPORTED_MODULE_5__.mk],styles:[".image-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;overflow:hidden}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%;width:auto}"]})},3411:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WatchCategoryModule:()=>WatchCategoryModule});var common=__webpack_require__(8583),router=__webpack_require__(633),core=__webpack_require__(7716),environment=__webpack_require__(2340),Subscription=__webpack_require__(5319),map=__webpack_require__(8002),common_service=__webpack_require__(690),platform_browser=__webpack_require__(9075),storage_service=__webpack_require__(2323),primeng_dropdown=__webpack_require__(4036),fesm2015_forms=__webpack_require__(3679),primeng_dataview=__webpack_require__(6498),primeng_api=__webpack_require__(9783),image_loader_component=__webpack_require__(4385),price_after_dot_small_pipe=__webpack_require__(89);function WatchCategoryComponent_div_16_button_5_Template(rf,ctx){if(1&rf){const _r5=core.EpF();core.TgZ(0,"button",22),core.NdJ("click",__name(function(){return core.CHM(_r5),core.oxw(2).clearAllFilters()},"WatchCategoryComponent_div_16_button_5_Template_button_click_0_listener")),core._uU(1,"CLEAR ALL"),core.qZA()}}function WatchCategoryComponent_div_16_div_7_ng_container_8_Template(rf,ctx){if(1&rf){const _r11=core.EpF();core.ynx(0),core.TgZ(1,"div",29),core.TgZ(2,"input",30),core.NdJ("ngModelChange",__name(function($event){return core.CHM(_r11).$implicit.selected=$event},"WatchCategoryComponent_div_16_div_7_ng_container_8_Template_input_ngModelChange_2_listener"))("change",__name(function(){return core.CHM(_r11),core.oxw(3).onAttributesSelectedForFilters()},"WatchCategoryComponent_div_16_div_7_ng_container_8_Template_input_change_2_listener")),core.qZA(),core.TgZ(3,"label",31),core._uU(4),core.qZA(),core.qZA(),core.BQk()}if(2&rf){const opt_r9=ctx.$implicit;core.xp6(2),core.Q6J("ngModel",opt_r9.selected)("id",opt_r9.id),core.xp6(1),core.uIk("for",opt_r9.id),core.xp6(1),core.Oqu(opt_r9.option_name)}}function WatchCategoryComponent_div_16_div_7_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",23),core.TgZ(1,"button",24),core.TgZ(2,"span"),core._uU(3),core.qZA(),core.TgZ(4,"span"),core._UZ(5,"i",25),core.qZA(),core.qZA(),core.TgZ(6,"div",26),core.TgZ(7,"div",27),core.YNc(8,WatchCategoryComponent_div_16_div_7_ng_container_8_Template,5,4,"ng-container",28),core.qZA(),core.qZA(),core.qZA()),2&rf){const attr_r6=ctx.$implicit,i_r7=ctx.index;core.xp6(1),core.uIk("data-target","#collapsible_"+i_r7),core.xp6(2),core.Oqu(attr_r6.attribute_label),core.xp6(3),core.MGl("id","collapsible_",i_r7,""),core.xp6(2),core.Q6J("ngForOf",attr_r6.attribute_options)}}function WatchCategoryComponent_div_16_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",15),core.TgZ(1,"div",16),core.TgZ(2,"div",17),core.TgZ(3,"h4",18),core._uU(4,"Filters"),core.qZA(),core.YNc(5,WatchCategoryComponent_div_16_button_5_Template,2,0,"button",19),core.qZA(),core.TgZ(6,"div",20),core.YNc(7,WatchCategoryComponent_div_16_div_7_Template,9,4,"div",21),core.qZA(),core.qZA(),core.qZA()),2&rf){const ctx_r0=core.oxw();core.xp6(5),core.Q6J("ngIf",ctx_r0.isFilterApplied),core.xp6(2),core.Q6J("ngForOf",ctx_r0.attributesHolder)("ngForTrackBy",ctx_r0.trackByFunc)}}function WatchCategoryComponent_ng_template_19_app_image_loader_2_Template(rf,ctx){if(1&rf&&core._UZ(0,"app-image-loader",39),2&rf){const item_r13=core.oxw().$implicit,ctx_r14=core.oxw();core.Q6J("imageLoading",!0)("imageUrl",ctx_r14.imgUrl+"/medium/"+item_r13.images[0].filename)("imageContainerHeight","218px")}}function WatchCategoryComponent_ng_template_19_Template(rf,ctx){if(1&rf){const _r17=core.EpF();core.TgZ(0,"div",32),core.TgZ(1,"a",33),core.NdJ("click",__name(function(){const item_r13=core.CHM(_r17).$implicit;return core.oxw().onClickProduct(item_r13.id,item_r13.name)},"WatchCategoryComponent_ng_template_19_Template_a_click_1_listener")),core.YNc(2,WatchCategoryComponent_ng_template_19_app_image_loader_2_Template,1,3,"app-image-loader",34),core.qZA(),core.TgZ(3,"a",35),core.NdJ("click",__name(function(){const item_r13=core.CHM(_r17).$implicit;return core.oxw().onClickProduct(item_r13.id,item_r13.name)},"WatchCategoryComponent_ng_template_19_Template_a_click_3_listener")),core._uU(4),core.qZA(),core.TgZ(5,"div",36),core.TgZ(6,"span",37),core._uU(7,"Starting from : "),core.qZA(),core._UZ(8,"span",38),core.ALo(9,"priceAfterDotSmall"),core.ALo(10,"currency"),core.qZA(),core.qZA()}if(2&rf){const item_r13=ctx.$implicit;core.xp6(1),core.Q6J("routerLink","/type/"+item_r13.slug),core.xp6(1),core.Q6J("ngIf",item_r13.images&&item_r13.images.length>0),core.xp6(1),core.Q6J("routerLink","/type/"+item_r13.slug),core.xp6(1),core.hij(" ",item_r13.name," "),core.xp6(4),core.Q6J("innerHTML",core.lcZ(9,5,core.lcZ(10,7,item_r13.price)),core.oJD)}}__name(WatchCategoryComponent_div_16_button_5_Template,"WatchCategoryComponent_div_16_button_5_Template"),__name(WatchCategoryComponent_div_16_div_7_ng_container_8_Template,"WatchCategoryComponent_div_16_div_7_ng_container_8_Template"),__name(WatchCategoryComponent_div_16_div_7_Template,"WatchCategoryComponent_div_16_div_7_Template"),__name(WatchCategoryComponent_div_16_Template,"WatchCategoryComponent_div_16_Template"),__name(WatchCategoryComponent_ng_template_19_app_image_loader_2_Template,"WatchCategoryComponent_ng_template_19_app_image_loader_2_Template"),__name(WatchCategoryComponent_ng_template_19_Template,"WatchCategoryComponent_ng_template_19_Template");class WatchCategoryComponent{constructor(route,router2,commonService,titleService,cd,storageService){this.route=route,this.router=router2,this.commonService=commonService,this.titleService=titleService,this.cd=cd,this.storageService=storageService,this.scrollingFinished=new core.vpe,this.imgUrl=environment.N.imgUrl,this.categoryAttrHolder=[],this.attributesHolder=[],this.isPriceFilterApplied=!1,this.isFilterApplied=!1,this.minValue=0,this.maxValue=5e6,this.options={floor:0,ceil:5e5},this.subscription=Subscription.w.EMPTY,this.sortOptions=[{label:"Name: A to Z",value:"name"},{label:"Name: Z to A",value:"!name"},{label:"Price: Low to High",value:"saleprice"},{label:"Price: High to Low",value:"!saleprice"}]}ngOnInit(){this.route.paramMap.subscribe(resp=>{this.commonService.postRequest(`attribute/get_category/products/${resp.params.slug}`,{limit_per_page:"10",order_by:"id",skip:"0",sort:"1",filter_text:"",is_filter:!0}).subscribe(result=>{var _a;null!=result.attributes&&this.storageService.setLocalStorageData("attr_type",result.attributes),(null===(_a=null==result?void 0:result.data)||void 0===_a?void 0:_a.primary)?this.router.navigate(["/products/",resp.params.slug],{replaceUrl:!0}):(this.categoryAttrHolder=result.data,this.titleService.setTitle(resp.params.slug+" | Unicorn Store"))})})}ngAfterViewChecked(){this.cd.detectChanges()}onAttributesSelectedForFilters(){this.attributesHolder&&this.attributesHolder.length>0&&this.storageService.setLocalStorageData("filterable-attributes",this.attributesHolder),this.loadData(this.defaultPaginateEvent)}onPriceChanged(){this.isPriceFilterApplied=!0,this.loadData(this.defaultPaginateEvent)}clearPriceFilters(){this.isPriceFilterApplied=!1,this.minValue=0,this.maxValue=5e6,this.loadData(this.defaultPaginateEvent)}clearAllFilters(){this.storageService.removeLocalStorageData("filterable-attributes"),this.attributesHolder.forEach((item,i)=>{item.attribute_options.forEach((opt,j)=>{opt.selected&&(this.attributesHolder[i].attribute_options[j].selected=!1)})}),this.clearPriceFilters()}loadData(event){let filterableAttrHolder=this.storageService.getLocalStorageData("filterable-attributes");filterableAttrHolder&&filterableAttrHolder.length>0&&"undefined"!==filterableAttrHolder?this.attributesHolder=filterableAttrHolder:this.isFilterApplied=!1,this.defaultPaginateEvent=event;let convertedEvent={limit_per_page:null==event?void 0:event.rows,order_by:(null==event?void 0:event.sortField)?null==event?void 0:event.sortField:"id",skip:(null==event?void 0:event.first)?null==event?void 0:event.first:0,sort:(null==event?void 0:event.sortOrder)?null==event?void 0:event.sortOrder:1,filter_text:"",is_filter:!0},attributesArr=[];this.attributesHolder.forEach(item=>{let optionsIds=[],attrType="";if(item.attribute_options.forEach(opt=>{opt.selected&&(this.isFilterApplied=!0,attrType=opt.attribute_type,optionsIds.push(opt.id))}),""!==attrType&&optionsIds.length>0){let count=attributesArr.length;0===count?attributesArr.push({attribute_type:attrType,attribute_options:optionsIds}):attributesArr[count-1].attribute_type===attrType?attributesArr[count-1].attribute_options.push(...optionsIds):attributesArr.push({attribute_type:attrType,attribute_options:optionsIds})}}),attributesArr.length>0&&(convertedEvent.attributes=[...attributesArr]),this.isPriceFilterApplied&&(convertedEvent.attributes&&convertedEvent.attributes.length>0?convertedEvent.attributes.push({attribute_type:"price",attribute_options:[this.minValue,this.maxValue]}):convertedEvent.attributes=[{attribute_type:"price",attribute_options:[this.minValue,this.maxValue]}]),this.subscription=this.route.paramMap.subscribe(resp=>{this.title=resp.params.slug,this.commonService.postRequest(`attribute/get_category/products/${resp.params.slug}`,convertedEvent).pipe((0,map.U)(resp2=>(resp2.attributes&&resp2.attributes.forEach(item=>{item.attribute_options.forEach((opt,index)=>{item.attribute_options[index].selected=!1})}),resp2))).subscribe(result=>{this.categoryTypeHolder=result.data,filterableAttrHolder&&filterableAttrHolder.length>0&&"undefined"!==filterableAttrHolder||(this.attributesHolder=result.attributes,this.storageService.setLocalStorageData("filterable-attributes",result.attributes)),setTimeout(()=>{Array.isArray(result.attributes)&&this.storageService.setLocalStorageData("attr_type",result.attributes)},1e3),this.totalRecords=result.total_count})})}onSortChange(event){let value=event.value;0===value.indexOf("!")?(this.sortOrder=-1,this.sortField=value.substring(1,value.length)):(this.sortOrder=1,this.sortField=value)}ngOnDestroy(){var _a;null===(_a=this.subscription)||void 0===_a||_a.unsubscribe()}clearFilter(){this.defaultPaginateEvent={first:0,rows:12,sortField:void 0,sortOrder:void 0},this.sortKey="",this.loadData(this.defaultPaginateEvent)}trackByFunc(index){return index}onClickProduct(Id,name){window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"select_product",ecommerce:{items:[{item_id:Id,item_name:name,item_list_name:name}]}})}}__name(WatchCategoryComponent,"WatchCategoryComponent"),WatchCategoryComponent.\u0275fac=__name(function(t){return new(t||WatchCategoryComponent)(core.Y36(router.gz),core.Y36(router.F0),core.Y36(common_service.v),core.Y36(platform_browser.Dx),core.Y36(core.sBO),core.Y36(storage_service.V))},"WatchCategoryComponent_Factory"),WatchCategoryComponent.\u0275cmp=core.Xpm({type:WatchCategoryComponent,selectors:[["app-watch-category"]],outputs:{scrollingFinished:"scrollingFinished"},decls:20,vars:12,consts:[[1,"container"],[1,"py-2","border-bottom"],[1,"row","align-items-end"],[1,"col-sm"],[1,"breadcrumb","mb-0"],[1,"breadcrumb-item"],["routerLink","/",1,"link"],[1,"breadcrumb-item","active","d-flex","align-items-center"],[1,"col-sm-auto"],["name","sortKey","ngDefaultControl","","placeholder","Sort By","styleClass","pDropdown",3,"options","ngModel","ngModelChange","onChange"],["type","button",1,"btn","btn-sm","btn-danger-alt","ml-2","text-nowrap",3,"disabled","click"],[1,"form-row","justify-content-center"],["class","col-sm-3",4,"ngIf"],["layout","grid","styleClass","flex-grid",3,"value","paginator","rows","lazy","totalRecords","sortField","sortOrder","onLazyLoad"],["pTemplate","gridItem"],[1,"col-sm-3"],[1,"card","border-0","shadow-sm","sticky-top-filters","filters-section"],[1,"card-header","d-flex","align-items-center","justify-content-between"],[1,"heading","mb-0","mt-1"],["type","button","class","btn-link clr-btn",3,"click",4,"ngIf"],[1,"card-body"],["class","filter-box",4,"ngFor","ngForOf","ngForTrackBy"],["type","button",1,"btn-link","clr-btn",3,"click"],[1,"filter-box"],["type","button","data-toggle","collapse","aria-expanded","true",1,"btn-link","filter-btn"],[1,"fa","fa-angle-right","ml-2"],[1,"collapse","show",3,"id"],[1,"mb-2"],[4,"ngFor","ngForOf"],[1,"custom-control","custom-checkbox","pb-1","mb-2"],["type","checkbox","name","opt.selected","ngDefaultControl","",1,"custom-control-input",3,"ngModel","id","ngModelChange","change"],[1,"custom-control-label"],[1,"col-sm-6","text-center","border-odd"],[1,"img-boxes","test",3,"routerLink","click"],[3,"imageLoading","imageUrl","imageContainerHeight",4,"ngIf"],[1,"heading-link","mb-1",3,"routerLink","click"],[1,"price-box","mb-3"],[1,"price-text"],[1,"price",3,"innerHTML"],[3,"imageLoading","imageUrl","imageContainerHeight"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"div",0),core.TgZ(1,"div",1),core.TgZ(2,"div",2),core.TgZ(3,"div",3),core.TgZ(4,"ol",4),core.TgZ(5,"li",5),core.TgZ(6,"a",6),core._uU(7,"Home"),core.qZA(),core.qZA(),core.TgZ(8,"li",7),core._uU(9),core.qZA(),core.qZA(),core.qZA(),core.TgZ(10,"div",8),core.TgZ(11,"p-dropdown",9),core.NdJ("ngModelChange",__name(function($event){return ctx.sortKey=$event},"WatchCategoryComponent_Template_p_dropdown_ngModelChange_11_listener"))("onChange",__name(function($event){return ctx.onSortChange($event)},"WatchCategoryComponent_Template_p_dropdown_onChange_11_listener")),core.qZA(),core.TgZ(12,"button",10),core.NdJ("click",__name(function(){return ctx.clearFilter()},"WatchCategoryComponent_Template_button_click_12_listener")),core._uU(13,"Clear"),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.TgZ(14,"div",0),core.TgZ(15,"div",11),core.YNc(16,WatchCategoryComponent_div_16_Template,8,3,"div",12),core.TgZ(17,"div",3),core.TgZ(18,"p-dataView",13),core.NdJ("onLazyLoad",__name(function($event){return ctx.loadData($event)},"WatchCategoryComponent_Template_p_dataView_onLazyLoad_18_listener")),core.YNc(19,WatchCategoryComponent_ng_template_19_Template,11,9,"ng-template",14),core.qZA(),core.qZA(),core.qZA(),core.qZA()),2&rf&&(core.xp6(9),core.Oqu(ctx.title),core.xp6(2),core.Q6J("options",ctx.sortOptions)("ngModel",ctx.sortKey),core.xp6(1),core.Q6J("disabled",!ctx.sortKey),core.xp6(4),core.Q6J("ngIf",ctx.categoryTypeHolder),core.xp6(2),core.Q6J("value",ctx.categoryTypeHolder)("paginator",!0)("rows",10)("lazy",!0)("totalRecords",ctx.totalRecords)("sortField",ctx.sortField)("sortOrder",ctx.sortOrder))},"WatchCategoryComponent_Template"),directives:[router.yS,primeng_dropdown.Lt,fesm2015_forms.Fj,fesm2015_forms.JJ,fesm2015_forms.On,common.O5,primeng_dataview.VO,primeng_api.jx,common.sg,fesm2015_forms.Wl,image_loader_component.g],pipes:[price_after_dot_small_pipe.Y,common.H9],styles:[""]});const routes=[{path:":slug",component:WatchCategoryComponent}];class WatchCategoryRoutingModule{}__name(WatchCategoryRoutingModule,"WatchCategoryRoutingModule"),WatchCategoryRoutingModule.\u0275fac=__name(function(t){return new(t||WatchCategoryRoutingModule)},"WatchCategoryRoutingModule_Factory"),WatchCategoryRoutingModule.\u0275mod=core.oAB({type:WatchCategoryRoutingModule}),WatchCategoryRoutingModule.\u0275inj=core.cJS({imports:[[router.Bz.forChild(routes)],router.Bz]});var shared_module=__webpack_require__(8769),animations=__webpack_require__(7238),primeng_dom=__webpack_require__(5730),primeng_utils=__webpack_require__(5921);const _c0=["mask"];function Image_div_2_ng_container_1_ng_container_1_Template(rf,ctx){1&rf&&core.GkF(0)}function Image_div_2_ng_container_1_Template(rf,ctx){if(1&rf&&(core.ynx(0),core.YNc(1,Image_div_2_ng_container_1_ng_container_1_Template,1,0,"ng-container",7),core.BQk()),2&rf){const ctx_r2=core.oxw(2);core.xp6(1),core.Q6J("ngTemplateOutlet",ctx_r2.indicatorTemplate)}}function Image_div_2_ng_template_2_Template(rf,ctx){1&rf&&core._UZ(0,"i",8)}function Image_div_2_Template(rf,ctx){if(1&rf){const _r7=core.EpF();core.TgZ(0,"div",4),core.NdJ("click",__name(function(){return core.CHM(_r7),core.oxw().onImageClick()},"Image_div_2_Template_div_click_0_listener")),core.YNc(1,Image_div_2_ng_container_1_Template,2,1,"ng-container",5),core.YNc(2,Image_div_2_ng_template_2_Template,1,0,"ng-template",null,6,core.W1O),core.qZA()}if(2&rf){const _r3=core.MAs(3),ctx_r0=core.oxw();core.xp6(1),core.Q6J("ngIf",ctx_r0.indicatorTemplate)("ngIfElse",_r3)}}__name(Image_div_2_ng_container_1_ng_container_1_Template,"Image_div_2_ng_container_1_ng_container_1_Template"),__name(Image_div_2_ng_container_1_Template,"Image_div_2_ng_container_1_Template"),__name(Image_div_2_ng_template_2_Template,"Image_div_2_ng_template_2_Template"),__name(Image_div_2_Template,"Image_div_2_Template");const _c1=__name(function(a0,a1){return{showTransitionParams:a0,hideTransitionParams:a1}},"_c1"),_c2=__name(function(a1){return{value:"visible",params:a1}},"_c2");function Image_div_3_div_13_Template(rf,ctx){if(1&rf){const _r11=core.EpF();core.TgZ(0,"div"),core.NdJ("@animation.start",__name(function($event){return core.CHM(_r11),core.oxw(2).onAnimationStart($event)},"Image_div_3_div_13_Template_div_animation_animation_start_0_listener"))("@animation.done",__name(function($event){return core.CHM(_r11),core.oxw(2).onAnimationEnd($event)},"Image_div_3_div_13_Template_div_animation_animation_done_0_listener")),core.TgZ(1,"img",21),core.NdJ("click",__name(function(){return core.CHM(_r11),core.oxw(2).onPreviewImageClick()},"Image_div_3_div_13_Template_img_click_1_listener")),core.qZA(),core.qZA()}if(2&rf){const ctx_r9=core.oxw(2);core.Q6J("@animation",core.VKq(6,_c2,core.WLB(3,_c1,ctx_r9.showTransitionOptions,ctx_r9.hideTransitionOptions))),core.xp6(1),core.Q6J("ngStyle",ctx_r9.imagePreviewStyle()),core.uIk("src",ctx_r9.src,core.LSH)}}function Image_div_3_Template(rf,ctx){if(1&rf){const _r15=core.EpF();core.TgZ(0,"div",9,10),core.NdJ("click",__name(function(){return core.CHM(_r15),core.oxw().onMaskClick()},"Image_div_3_Template_div_click_0_listener")),core.TgZ(2,"div",11),core.TgZ(3,"button",12),core.NdJ("click",__name(function(){return core.CHM(_r15),core.oxw().rotateRight()},"Image_div_3_Template_button_click_3_listener")),core._UZ(4,"i",13),core.qZA(),core.TgZ(5,"button",12),core.NdJ("click",__name(function(){return core.CHM(_r15),core.oxw().rotateLeft()},"Image_div_3_Template_button_click_5_listener")),core._UZ(6,"i",14),core.qZA(),core.TgZ(7,"button",15),core.NdJ("click",__name(function(){return core.CHM(_r15),core.oxw().zoomOut()},"Image_div_3_Template_button_click_7_listener")),core._UZ(8,"i",16),core.qZA(),core.TgZ(9,"button",15),core.NdJ("click",__name(function(){return core.CHM(_r15),core.oxw().zoomIn()},"Image_div_3_Template_button_click_9_listener")),core._UZ(10,"i",17),core.qZA(),core.TgZ(11,"button",18),core._UZ(12,"i",19),core.qZA(),core.qZA(),core.YNc(13,Image_div_3_div_13_Template,2,8,"div",20),core.qZA()}if(2&rf){const ctx_r1=core.oxw();core.xp6(7),core.Q6J("disabled",ctx_r1.zoomDisabled()),core.xp6(2),core.Q6J("disabled",ctx_r1.zoomDisabled()),core.xp6(4),core.Q6J("ngIf",ctx_r1.previewVisible)}}__name(Image_div_3_div_13_Template,"Image_div_3_div_13_Template"),__name(Image_div_3_Template,"Image_div_3_Template");class Image{constructor(config,cd){this.config=config,this.cd=cd,this.preview=!1,this.showTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.onShow=new core.vpe,this.onHide=new core.vpe,this.maskVisible=!1,this.previewVisible=!1,this.rotate=0,this.scale=1,this.previewClick=!1}ngAfterContentInit(){this.templates.forEach(item=>{switch(item.getType()){case"indicator":default:this.indicatorTemplate=item.template}})}onImageClick(){this.preview&&(this.maskVisible=!0,this.previewVisible=!0)}onMaskClick(){this.previewClick||(this.previewVisible=!1,this.rotate=0,this.scale=1),this.previewClick=!1}onPreviewImageClick(){this.previewClick=!0}rotateRight(){this.rotate+=90,this.previewClick=!0}rotateLeft(){this.rotate-=90,this.previewClick=!0}zoomIn(){this.scale=this.scale+.1,this.previewClick=!0}zoomOut(){this.scale=this.scale-.1,this.previewClick=!0}zoomDisabled(){return this.scale<=.5||this.scale>=1.5}onAnimationStart(event){switch(event.toState){case"visible":this.container=event.element,this.wrapper=this.container.parentElement,this.appendContainer(),this.moveOnTop();break;case"void":primeng_dom.p.addClass(this.wrapper,"p-component-overlay-leave")}}onAnimationEnd(event){switch(event.toState){case"void":primeng_utils.P9.clear(this.container),this.maskVisible=!1,this.container=null,this.wrapper=null,this.cd.markForCheck(),this.onHide.emit({});break;case"visible":this.onShow.emit({})}}moveOnTop(){primeng_utils.P9.set("modal",this.container,this.config.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1)}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.wrapper):primeng_dom.p.appendChild(this.wrapper,this.appendTo))}imagePreviewStyle(){return{transform:"rotate("+this.rotate+"deg) scale("+this.scale+")"}}containerClass(){return{"p-image p-component":!0,"p-image-preview-container":this.preview}}}__name(Image,"Image"),Image.\u0275fac=__name(function(t){return new(t||Image)(core.Y36(primeng_api.b4),core.Y36(core.sBO))},"Image_Factory"),Image.\u0275cmp=core.Xpm({type:Image,selectors:[["p-image"]],contentQueries:__name(function(rf,ctx,dirIndex){if(1&rf&&core.Suo(dirIndex,primeng_api.jx,4),2&rf){let _t;core.iGM(_t=core.CRH())&&(ctx.templates=_t)}},"Image_ContentQueries"),viewQuery:__name(function(rf,ctx){if(1&rf&&core.Gf(_c0,5),2&rf){let _t;core.iGM(_t=core.CRH())&&(ctx.mask=_t.first)}},"Image_Query"),hostAttrs:[1,"p-element"],inputs:{imageClass:"imageClass",imageStyle:"imageStyle",styleClass:"styleClass",style:"style",src:"src",alt:"alt",width:"width",height:"height",appendTo:"appendTo",preview:"preview",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},decls:4,vars:13,consts:[[3,"ngClass","ngStyle"],[3,"ngStyle"],["class","p-image-preview-indicator",3,"click",4,"ngIf"],["class","p-image-mask p-component-overlay p-component-overlay-enter",3,"click",4,"ngIf"],[1,"p-image-preview-indicator",3,"click"],[4,"ngIf","ngIfElse"],["defaultTemplate",""],[4,"ngTemplateOutlet"],[1,"p-image-preview-icon","pi","pi-eye"],[1,"p-image-mask","p-component-overlay","p-component-overlay-enter",3,"click"],["mask",""],[1,"p-image-toolbar"],["type","button",1,"p-image-action","p-link",3,"click"],[1,"pi","pi-refresh"],[1,"pi","pi-undo"],["type","button",1,"p-image-action","p-link",3,"disabled","click"],[1,"pi","pi-search-minus"],[1,"pi","pi-search-plus"],["type","button",1,"p-image-action","p-link"],[1,"pi","pi-times"],[4,"ngIf"],[1,"p-image-preview",3,"ngStyle","click"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"span",0),core._UZ(1,"img",1),core.YNc(2,Image_div_2_Template,4,2,"div",2),core.YNc(3,Image_div_3_Template,14,3,"div",3),core.qZA()),2&rf&&(core.Tol(ctx.styleClass),core.Q6J("ngClass",ctx.containerClass())("ngStyle",ctx.style),core.xp6(1),core.Tol(ctx.imageClass),core.Q6J("ngStyle",ctx.imageStyle),core.uIk("src",ctx.src,core.LSH)("alt",ctx.alt)("width",ctx.width)("height",ctx.height),core.xp6(1),core.Q6J("ngIf",ctx.preview),core.xp6(1),core.Q6J("ngIf",ctx.maskVisible))},"Image_Template"),directives:[common.mk,common.PC,common.O5,common.tP],styles:[".p-image-mask{display:flex;align-items:center;justify-content:center}.p-image-preview-container{position:relative;display:inline-block}.p-image-preview-indicator{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}.p-image-preview-icon{font-size:1.5rem}.p-image-preview-container:hover>.p-image-preview-indicator{opacity:1;cursor:pointer}.p-image-preview-container>img{cursor:pointer}.p-image-toolbar{position:absolute;top:0;right:0;display:flex}.p-image-action.p-link{display:flex;justify-content:center;align-items:center}.p-image-preview{transition:transform .15s;max-width:100vw;max-height:100vh}\n"],encapsulation:2,data:{animation:[(0,animations.X$)("animation",[(0,animations.eR)("void => visible",[(0,animations.oB)({transform:"scale(0.7)",opacity:0}),(0,animations.jt)("{{showTransitionParams}}")]),(0,animations.eR)("visible => void",[(0,animations.jt)("{{hideTransitionParams}}",(0,animations.oB)({transform:"scale(0.7)",opacity:0}))])])]},changeDetection:0});class ImageModule{}__name(ImageModule,"ImageModule"),ImageModule.\u0275fac=__name(function(t){return new(t||ImageModule)},"ImageModule_Factory"),ImageModule.\u0275mod=core.oAB({type:ImageModule}),ImageModule.\u0275inj=core.cJS({imports:[[common.ez],primeng_api.m8]});class WatchCategoryModule{}__name(WatchCategoryModule,"WatchCategoryModule"),WatchCategoryModule.\u0275fac=__name(function(t){return new(t||WatchCategoryModule)},"WatchCategoryModule_Factory"),WatchCategoryModule.\u0275mod=core.oAB({type:WatchCategoryModule}),WatchCategoryModule.\u0275inj=core.cJS({imports:[[common.ez,WatchCategoryRoutingModule,shared_module.m,ImageModule]]})}};