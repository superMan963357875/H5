(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-complaints-index"],{2935:function(t,e,i){"use strict";i.r(e);var l=i("9e6f"),a=i("af31");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);var r=i("f0c5"),o=Object(r["a"])(a["default"],l["b"],l["c"],!1,null,"19158c5e",null,!1,l["a"],void 0);e["default"]=o.exports},"4e5c":function(t,e,i){"use strict";var l=i("5835"),a=i.n(l);a.a},"52cb":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return l}));var l={uIcon:i("10a6").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-cell",class:{"u-border-bottom":t.borderBottom,"u-border-top":t.borderTop,"u-col-center":t.center,"u-cell--required":t.required},style:{backgroundColor:t.bgColor},attrs:{"hover-stay-time":"150","hover-class":t.hoverClass},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t.icon?i("u-icon",{staticClass:"u-cell__left-icon-wrap",attrs:{size:t.iconSize,name:t.icon,"custom-style":t.iconStyle}}):i("v-uni-view",{staticClass:"u-flex"},[t._t("icon")],2),i("v-uni-view",{staticClass:"u-cell_title",style:[{width:t.titleWidth?t.titleWidth+"rpx":"auto"},t.titleStyle]},[t.title?[t._v(t._s(t.title))]:t._t("title"),t.label||t.$slots.label?i("v-uni-view",{staticClass:"u-cell__label",style:[t.labelStyle]},[t.label?[t._v(t._s(t.label))]:t._t("label")],2):t._e()],2),i("v-uni-view",{staticClass:"u-cell__value",style:[t.valueStyle]},[t.value?[t._v(t._s(t.value))]:t._t("default")],2),t.$slots["right-icon"]?i("v-uni-view",{staticClass:"u-flex u-cell_right"},[t._t("right-icon")],2):t._e(),t.arrow?i("u-icon",{staticClass:"u-icon-wrap u-cell__right-icon-wrap",style:[t.arrowStyle],attrs:{name:"arrow-right"}}):t._e()],1)},n=[]},5835:function(t,e,i){var l=i("c261");l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);var a=i("4f06").default;a("356082d4",l,!0,{sourceMap:!1,shadowMode:!1})},"7b33":function(t,e,i){"use strict";i.r(e);var l=i("ee6d"),a=i.n(l);for(var n in l)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return l[t]}))}(n);e["default"]=a.a},"8e11":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l={data:function(){return{orderId:"",sf_type:"",info:{},list:[]}},onLoad:function(t){this.orderId=t.id,this.sf_type=t.sf_type,this.init()},methods:{goDetail:function(t,e){uni.navigateTo({url:"/pages/my/complaints/lost?id="+t+"&orderId="+this.orderId+"&title="+e+"&sf_type="+this.sf_type})},goPro:function(){uni.navigateTo({url:"/pages/my/complaints/progress"})},call:function(){this.$http("/addons/ddrive/user/consumer_hotline",{},"POST").then((function(t){uni.makePhoneCall({phoneNumber:t.tel})}))},init:function(){var t=this;this.$http("/addons/ddrive/user/complaint_category",{order_id:this.orderId,sf_type:this.sf_type},"POST").then((function(e){console.log(e),t.info=e.order_info,t.list=e.list})).catch((function(){setTimeout((function(){uni.navigateBack({})}),500)}))}}};e.default=l},"9e6f":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return l}));var l={uCellItem:i("d829").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"plr-36 ptb-30 bb"},[i("v-uni-view",{staticClass:"size-34 bold"},[t._v("我的行程")]),i("v-uni-view",{staticClass:"mt-30"},[t._v(t._s(1==t.sf_type?"顺风车":2==t.sf_type?"货运":"代驾")+" "+t._s(t.info.createtime)),i("v-uni-text",{staticClass:"gray-2 ptb-2 plr-10 ml-10",staticStyle:{background:"#eee"}},[t._v("已完成")])],1),i("v-uni-view",{staticClass:"mt-30 flex1 flex-middle"},[i("v-uni-view",{staticClass:"bg-green",staticStyle:{width:"16rpx",height:"16rpx","border-radius":"50%"}}),i("v-uni-text",{staticClass:"ml-20"},[t._v(t._s(t.info.start_address))])],1),2!=t.sf_type?i("v-uni-view",{staticClass:"mt-30 flex1 flex-middle"},[i("v-uni-view",{staticClass:"bg-orange",staticStyle:{width:"16rpx",height:"16rpx","border-radius":"50%"}}),i("v-uni-text",{staticClass:"ml-20"},[t._v(t._s(t.info.end_address))])],1):t._e(),t._l(t.info.end_address,(function(e,l){return 2==t.sf_type?i("v-uni-view",{key:l,staticClass:"mt-30 flex1 flex-middle"},[i("v-uni-view",{staticClass:"bg-orange",staticStyle:{width:"16rpx",height:"16rpx","border-radius":"50%"}}),i("v-uni-text",{staticClass:"ml-20"},[t._v(t._s(e.end_address))])],1):t._e()}))],2),i("v-uni-view",{staticClass:"mt-30 mb-10 plr-36 size-34 bold"},[t._v("投诉类型")]),t._l(t.list,(function(e,l){return i("u-cell-item",{key:l,attrs:{title:e.name},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e.id,e.name)}}})})),i("v-uni-view",{staticClass:"mt-30 mb-10 plr-36 size-34 bold"},[t._v("其他功能")]),i("u-cell-item",{attrs:{title:"查询处理进度"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPro.apply(void 0,arguments)}}}),i("u-cell-item",{attrs:{title:"联系客服"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.call.apply(void 0,arguments)}}})],2)},n=[]},af31:function(t,e,i){"use strict";i.r(e);var l=i("8e11"),a=i.n(l);for(var n in l)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return l[t]}))}(n);e["default"]=a.a},c261:function(t,e,i){var l=i("24fb");e=l(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 颜色变量 */\n/* 边框border */.u-cell[data-v-5cc6c9a2]{display:flex;flex-direction:row;align-items:center;position:relative;box-sizing:border-box;width:100%;padding:%?26?% %?32?%;font-size:%?28?%;line-height:%?54?%;color:#606266;background-color:#fff;text-align:left}.u-cell_title[data-v-5cc6c9a2]{font-size:%?28?%}.u-cell__left-icon-wrap[data-v-5cc6c9a2]{margin-right:%?10?%;font-size:%?32?%}.u-cell__right-icon-wrap[data-v-5cc6c9a2]{margin-left:%?10?%;color:#969799;font-size:%?28?%}.u-cell__left-icon-wrap[data-v-5cc6c9a2],\n.u-cell__right-icon-wrap[data-v-5cc6c9a2]{display:flex;flex-direction:row;align-items:center;height:%?48?%}.u-cell-border[data-v-5cc6c9a2]:after{position:absolute;box-sizing:border-box;content:" ";pointer-events:none;border-bottom:1px solid #e4e7ed;right:0;left:0;top:0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.u-cell-border[data-v-5cc6c9a2]{position:relative}.u-cell__label[data-v-5cc6c9a2]{margin-top:%?6?%;font-size:%?26?%;line-height:%?36?%;color:#909399;word-wrap:break-word}.u-cell__value[data-v-5cc6c9a2]{overflow:hidden;text-align:right;vertical-align:middle;color:#909399;font-size:%?26?%}.u-cell__title[data-v-5cc6c9a2],\n.u-cell__value[data-v-5cc6c9a2]{flex:1}.u-cell--required[data-v-5cc6c9a2]{overflow:visible;display:flex;flex-direction:row;align-items:center}.u-cell--required[data-v-5cc6c9a2]:before{position:absolute;content:"*";left:8px;margin-top:%?4?%;font-size:14px;color:#fa3534}.u-cell_right[data-v-5cc6c9a2]{line-height:1}',""]),t.exports=e},d829:function(t,e,i){"use strict";i.r(e);var l=i("52cb"),a=i("7b33");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("4e5c");var r=i("f0c5"),o=Object(r["a"])(a["default"],l["b"],l["c"],!1,null,"5cc6c9a2",null,!1,l["a"],void 0);e["default"]=o.exports},ee6d:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var l={name:"u-cell-item",props:{icon:{type:String,default:""},title:{type:[String,Number],default:""},value:{type:[String,Number],default:""},label:{type:[String,Number],default:""},borderBottom:{type:Boolean,default:!0},borderTop:{type:Boolean,default:!1},hoverClass:{type:String,default:"u-cell-hover"},arrow:{type:Boolean,default:!0},center:{type:Boolean,default:!1},required:{type:Boolean,default:!1},titleWidth:{type:[Number,String],default:""},arrowDirection:{type:String,default:"right"},titleStyle:{type:Object,default:function(){return{}}},valueStyle:{type:Object,default:function(){return{}}},labelStyle:{type:Object,default:function(){return{}}},bgColor:{type:String,default:"transparent"},index:{type:[String,Number],default:""},useLabelSlot:{type:Boolean,default:!1},iconSize:{type:[Number,String],default:34},iconStyle:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{arrowStyle:function(){var t={};return"up"==this.arrowDirection?t.transform="rotate(-90deg)":"down"==this.arrowDirection?t.transform="rotate(90deg)":t.transform="rotate(0deg)",t}},methods:{click:function(){this.$emit("click",this.index)}}};e.default=l}}]);