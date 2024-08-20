"use strict";(self.webpackChunkunicorn_new_ssr=self.webpackChunkunicorn_new_ssr||[]).push([[942],{2942:(N,h,l)=>{l.r(h),l.d(h,{WatchCategoryModule:()=>U});var m=l(8583),g=l(633),t=l(7716),f=l(2340),v=l(5319),y=l(8002),b=l(690),C=l(9075),x=l(2323),T=l(4036),u=l(3679),w=l(6498),_=l(9783),k=l(4385),Z=l(89);function A(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",22),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).clearAllFilters()}),t._uU(1,"CLEAR ALL"),t.qZA()}}function I(n,a){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",29),t.TgZ(2,"input",30),t.NdJ("ngModelChange",function(r){return t.CHM(e).$implicit.selected=r})("change",function(){return t.CHM(e),t.oxw(3).onAttributesSelectedForFilters()}),t.qZA(),t.TgZ(3,"label",31),t._uU(4),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=a.$implicit;t.xp6(2),t.Q6J("ngModel",e.selected)("id",e.id),t.xp6(1),t.uIk("for",e.id),t.xp6(1),t.Oqu(e.option_name)}}function S(n,a){if(1&n&&(t.TgZ(0,"div",23),t.TgZ(1,"button",24),t.TgZ(2,"span"),t._uU(3),t.qZA(),t.TgZ(4,"span"),t._UZ(5,"i",25),t.qZA(),t.qZA(),t.TgZ(6,"div",26),t.TgZ(7,"div",27),t.YNc(8,I,5,4,"ng-container",28),t.qZA(),t.qZA(),t.qZA()),2&n){const e=a.$implicit,i=a.index;t.xp6(1),t.uIk("data-target","#collapsible_"+i),t.xp6(2),t.Oqu(e.attribute_label),t.xp6(3),t.MGl("id","collapsible_",i,""),t.xp6(2),t.Q6J("ngForOf",e.attribute_options)}}function F(n,a){if(1&n&&(t.TgZ(0,"div",15),t.TgZ(1,"div",16),t.TgZ(2,"div",17),t.TgZ(3,"h4",18),t._uU(4,"Filters"),t.qZA(),t.YNc(5,A,2,0,"button",19),t.qZA(),t.TgZ(6,"div",20),t.YNc(7,S,9,4,"div",21),t.qZA(),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(5),t.Q6J("ngIf",e.isFilterApplied),t.xp6(2),t.Q6J("ngForOf",e.attributesHolder)("ngForTrackBy",e.trackByFunc)}}function E(n,a){if(1&n&&t._UZ(0,"app-image-loader",39),2&n){const e=t.oxw().$implicit,i=t.oxw();t.Q6J("imageLoading",!0)("imageUrl",i.imgUrl+"/medium/"+e.images[0].filename)("imageContainerHeight","218px")}}function M(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",32),t.TgZ(1,"a",33),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw().onClickProduct(o.id,o.name)}),t.YNc(2,E,1,3,"app-image-loader",34),t.qZA(),t.TgZ(3,"a",35),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw().onClickProduct(o.id,o.name)}),t._uU(4),t.qZA(),t.TgZ(5,"div",36),t.TgZ(6,"span",37),t._uU(7,"Starting from : "),t.qZA(),t._UZ(8,"span",38),t.ALo(9,"priceAfterDotSmall"),t.ALo(10,"currency"),t.qZA(),t.qZA()}if(2&n){const e=a.$implicit;t.xp6(1),t.Q6J("routerLink","/type/"+e.slug),t.xp6(1),t.Q6J("ngIf",e.images&&e.images.length>0),t.xp6(1),t.Q6J("routerLink","/type/"+e.slug),t.xp6(1),t.hij(" ",e.name," "),t.xp6(4),t.Q6J("innerHTML",t.lcZ(9,5,t.lcZ(10,7,e.price)),t.oJD)}}const O=[{path:":slug",component:(()=>{class n{constructor(e,i,r,o,c,s){this.route=e,this.router=i,this.commonService=r,this.titleService=o,this.cd=c,this.storageService=s,this.scrollingFinished=new t.vpe,this.imgUrl=f.N.imgUrl,this.categoryAttrHolder=[],this.attributesHolder=[],this.isPriceFilterApplied=!1,this.isFilterApplied=!1,this.minValue=0,this.maxValue=5e6,this.options={floor:0,ceil:5e5},this.subscription=v.w.EMPTY,this.sortOptions=[{label:"Name: A to Z",value:"name"},{label:"Name: Z to A",value:"!name"},{label:"Price: Low to High",value:"saleprice"},{label:"Price: High to Low",value:"!saleprice"}]}ngOnInit(){this.route.paramMap.subscribe(e=>{this.commonService.postRequest(`attribute/get_category/products/${e.params.slug}`,{limit_per_page:"10",order_by:"id",skip:"0",sort:"1",filter_text:"",is_filter:!0}).subscribe(i=>{var r;console.log("Attributes in Category Page : ",i),null!=i.attributes&&this.storageService.setLocalStorageData("attr_type",i.attributes),(null===(r=null==i?void 0:i.data)||void 0===r?void 0:r.primary)?this.router.navigate(["/products/",e.params.slug],{replaceUrl:!0}):(this.categoryAttrHolder=i.data,this.titleService.setTitle(e.params.slug+" | Unicorn Store"))})})}ngAfterViewChecked(){this.cd.detectChanges()}onAttributesSelectedForFilters(){this.attributesHolder&&this.attributesHolder.length>0&&this.storageService.setLocalStorageData("filterable-attributes",this.attributesHolder),this.loadData(this.defaultPaginateEvent)}onPriceChanged(){this.isPriceFilterApplied=!0,this.loadData(this.defaultPaginateEvent)}clearPriceFilters(){this.isPriceFilterApplied=!1,this.minValue=0,this.maxValue=5e6,this.loadData(this.defaultPaginateEvent)}clearAllFilters(){this.storageService.removeLocalStorageData("filterable-attributes"),this.attributesHolder.forEach((e,i)=>{e.attribute_options.forEach((r,o)=>{r.selected&&(this.attributesHolder[i].attribute_options[o].selected=!1)})}),this.clearPriceFilters()}loadData(e){let i=this.storageService.getLocalStorageData("filterable-attributes");i&&i.length>0&&"undefined"!==i?this.attributesHolder=i:this.isFilterApplied=!1,this.defaultPaginateEvent=e;let r={limit_per_page:null==e?void 0:e.rows,order_by:(null==e?void 0:e.sortField)?null==e?void 0:e.sortField:"id",skip:(null==e?void 0:e.first)?null==e?void 0:e.first:0,sort:(null==e?void 0:e.sortOrder)?null==e?void 0:e.sortOrder:1,filter_text:"",is_filter:!0},o=[];this.attributesHolder.forEach(c=>{let s=[],p="";if(c.attribute_options.forEach(d=>{d.selected&&(this.isFilterApplied=!0,p=d.attribute_type,s.push(d.id))}),""!==p&&s.length>0){let d=o.length;0===d?o.push({attribute_type:p,attribute_options:s}):o[d-1].attribute_type===p?o[d-1].attribute_options.push(...s):o.push({attribute_type:p,attribute_options:s})}}),o.length>0&&(r.attributes=[...o]),this.isPriceFilterApplied&&(r.attributes&&r.attributes.length>0?r.attributes.push({attribute_type:"price",attribute_options:[this.minValue,this.maxValue]}):r.attributes=[{attribute_type:"price",attribute_options:[this.minValue,this.maxValue]}]),this.subscription=this.route.paramMap.subscribe(c=>{this.title=c.params.slug,this.commonService.postRequest(`attribute/get_category/products/${c.params.slug}`,r).pipe((0,y.U)(s=>(s.attributes&&s.attributes.forEach(p=>{p.attribute_options.forEach((d,Q)=>{p.attribute_options[Q].selected=!1})}),s))).subscribe(s=>{console.log("attribute/get_category/products : ",s),this.categoryTypeHolder=s.data,i&&i.length>0&&"undefined"!==i||(this.attributesHolder=s.attributes,this.storageService.setLocalStorageData("filterable-attributes",s.attributes)),setTimeout(()=>{Array.isArray(s.attributes)&&this.storageService.setLocalStorageData("attr_type",s.attributes)},1e3),console.log("Attributes Holder : ",s.attributes),this.totalRecords=s.total_count})})}onSortChange(e){let i=e.value;0===i.indexOf("!")?(this.sortOrder=-1,this.sortField=i.substring(1,i.length)):(this.sortOrder=1,this.sortField=i)}ngOnDestroy(){var e;null===(e=this.subscription)||void 0===e||e.unsubscribe()}clearFilter(){this.defaultPaginateEvent={first:0,rows:12,sortField:void 0,sortOrder:void 0},this.sortKey="",this.loadData(this.defaultPaginateEvent)}trackByFunc(e){return e}onClickProduct(e,i){console.log("Click on Product : ",e),window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"select_product",ecommerce:{items:[{item_id:e,item_name:i,item_list_name:i}]}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.gz),t.Y36(g.F0),t.Y36(b.v),t.Y36(C.Dx),t.Y36(t.sBO),t.Y36(x.V))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-watch-category"]],outputs:{scrollingFinished:"scrollingFinished"},decls:20,vars:12,consts:[[1,"container"],[1,"py-2","border-bottom"],[1,"row","align-items-end"],[1,"col-sm"],[1,"breadcrumb","mb-0"],[1,"breadcrumb-item"],["routerLink","/",1,"link"],[1,"breadcrumb-item","active","d-flex","align-items-center"],[1,"col-sm-auto"],["name","sortKey","ngDefaultControl","","placeholder","Sort By","styleClass","pDropdown",3,"options","ngModel","ngModelChange","onChange"],["type","button",1,"btn","btn-sm","btn-danger-alt","ml-2","text-nowrap",3,"disabled","click"],[1,"form-row","justify-content-center"],["class","col-sm-3",4,"ngIf"],["layout","grid","styleClass","flex-grid",3,"value","paginator","rows","lazy","totalRecords","sortField","sortOrder","onLazyLoad"],["pTemplate","gridItem"],[1,"col-sm-3"],[1,"card","border-0","shadow-sm","sticky-top-filters","filters-section"],[1,"card-header","d-flex","align-items-center","justify-content-between"],[1,"heading","mb-0","mt-1"],["type","button","class","btn-link clr-btn",3,"click",4,"ngIf"],[1,"card-body"],["class","filter-box",4,"ngFor","ngForOf","ngForTrackBy"],["type","button",1,"btn-link","clr-btn",3,"click"],[1,"filter-box"],["type","button","data-toggle","collapse","aria-expanded","true",1,"btn-link","filter-btn"],[1,"fa","fa-angle-right","ml-2"],[1,"collapse","show",3,"id"],[1,"mb-2"],[4,"ngFor","ngForOf"],[1,"custom-control","custom-checkbox","pb-1","mb-2"],["type","checkbox","name","opt.selected","ngDefaultControl","",1,"custom-control-input",3,"ngModel","id","ngModelChange","change"],[1,"custom-control-label"],[1,"col-sm-6","text-center","border-odd"],[1,"img-boxes","test",3,"routerLink","click"],[3,"imageLoading","imageUrl","imageContainerHeight",4,"ngIf"],[1,"heading-link","mb-1",3,"routerLink","click"],[1,"price-box","mb-3"],[1,"price-text"],[1,"price",3,"innerHTML"],[3,"imageLoading","imageUrl","imageContainerHeight"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"ol",4),t.TgZ(5,"li",5),t.TgZ(6,"a",6),t._uU(7,"Home"),t.qZA(),t.qZA(),t.TgZ(8,"li",7),t._uU(9),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",8),t.TgZ(11,"p-dropdown",9),t.NdJ("ngModelChange",function(o){return i.sortKey=o})("onChange",function(o){return i.onSortChange(o)}),t.qZA(),t.TgZ(12,"button",10),t.NdJ("click",function(){return i.clearFilter()}),t._uU(13,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",0),t.TgZ(15,"div",11),t.YNc(16,F,8,3,"div",12),t.TgZ(17,"div",3),t.TgZ(18,"p-dataView",13),t.NdJ("onLazyLoad",function(o){return i.loadData(o)}),t.YNc(19,M,11,9,"ng-template",14),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(9),t.Oqu(i.title),t.xp6(2),t.Q6J("options",i.sortOptions)("ngModel",i.sortKey),t.xp6(1),t.Q6J("disabled",!i.sortKey),t.xp6(4),t.Q6J("ngIf",i.categoryTypeHolder),t.xp6(2),t.Q6J("value",i.categoryTypeHolder)("paginator",!0)("rows",10)("lazy",!0)("totalRecords",i.totalRecords)("sortField",i.sortField)("sortOrder",i.sortOrder))},directives:[g.yS,T.Lt,u.Fj,u.JJ,u.On,m.O5,w.VO,_.jx,m.sg,u.Wl,k.g],pipes:[Z.Y,m.H9],styles:[""]}),n})()}];let H=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.Bz.forChild(O)],g.Bz]}),n})();var L=l(4834);let z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez],_.m8]}),n})(),U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,H,L.m,z]]}),n})()}}]);