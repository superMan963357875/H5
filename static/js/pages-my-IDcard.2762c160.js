(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-IDcard"],{"0463":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("0f9d"),a={data:function(){return{name:"",idcard:"",img1:"../../static/IDcard-1.png",imgurl1:"",img2:"../../static/IDcard-2.png",imgurl2:"",submitbtn:!0}},methods:{chooseImg1:function(){var t=this;console.log(111111111),(0,n.upload)().then((function(e){t.img1=e[0].img1,t.imgurl1=e[0].img2}))},chooseImg2:function(){var t=this;(0,n.upload)().then((function(e){t.img2=e[0].img1,t.imgurl2=e[0].img2}))},submit:function(){var t=this;1==this.submitbtn&&(this.submitbtn=!1,this.$http("/addons/ddrive/user/verified",{type:1,truename:this.name,idcard:this.idcard,front_card_image:this.imgurl1,back_card_image:this.imgurl2,sign_areas:"",areas:"",driver_license:"",driver_front_image:"",driver_back_image:"",card_brand:"",card_type:"",number_plate:"",card_front_image:"",card_back_image:""},"POST").then((function(e){t.$store.dispatch("updateUserInfo"),uni.showToast({title:"提交成功,请耐心等待",icon:"none"}),setTimeout((function(){uni.navigateBack({})}),1e3)})).catch((function(e){t.submitbtn=!0})))}}};e.default=a},"0f9d":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.upvideo=e.upload=e.changeTime=void 0,i("d3b7"),i("159b"),i("14d9"),i("99af"),i("e25e");var a=n(i("4478")),l=n(i("2909")),o=(i("dbd8"),i("910e")),r="undefined"===typeof arguments?void 0:arguments,u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;r.length>0&&void 0!==r[0]&&r[0];return console.log(t),new Promise((function(e,i){uni.chooseImage({count:t,sizeType:["original","compressed"],success:function(t){uni.showLoading({title:"上传中"});var i=t.tempFilePaths,n=[];i.forEach((function(t){uni.uploadFile({url:o.baseUrl+"/api/common/upload",filePath:t,name:"file",success:function(t){uni.hideLoading();var a={img1:JSON.parse(t.data).data.fullurl,img2:JSON.parse(t.data).data.url};n.push(a),n.length==i.length&&e(n)},fail:function(){uni.showToast({title:"上传失败",icon:"none"})}})}))}})}))};e.upload=u;var c=function(){return new Promise((function(t,e){uni.chooseVideo({count:1,success:function(e){uni.showLoading({title:"上传中"});var i=e.tempFilePath;uni.uploadFile({url:o.baseUrl+"/api/common/uploadali",filePath:i,name:"file",success:function(e){if(uni.hideLoading(),console.log("ffffffffffff",e.data),"4001"==JSON.parse(e.data).code)uni.showToast({title:JSON.parse(e.data).msg,icon:"none"});else{var i={video1:JSON.parse(e.data).data.fullurl,video2:JSON.parse(e.data).data.url};t(i)}},fail:function(){uni.showToast({title:"上传失败",icon:"none"})}})}})}))};e.upvideo=c;var s=function(t){var e=(0,a.default)(Date,[t.split(" ")[0].split("-")[0],t.split(" ")[0].split("-")[1]-1,t.split(" ")[0].split("-")[2]].concat((0,l.default)(t.split(" ")[1].split(":")),["00"])),i=parseInt(e.getTime()/1e3);return i};e.changeTime=s},2909:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,n.default)(t)||(0,a.default)(t)||(0,l.default)(t)||(0,o.default)()};var n=r(i("6005")),a=r(i("db90")),l=r(i("06c5")),o=r(i("3427"));function r(t){return t&&t.__esModule?t:{default:t}}},"2ffa":function(t,e,i){"use strict";i.r(e);var n=i("96da"),a=i.n(n);for(var l in n)["default"].indexOf(l)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(l);e["default"]=a.a},"310c":function(t,e,i){"use strict";var n=i("e562"),a=i.n(n);a.a},3427:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},i("d9e2"),i("d401")},"3e2a":function(t,e,i){"use strict";var n=i("6e38"),a=i.n(n);a.a},4478:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o,i("4ae1"),i("d3b7"),i("f8c9"),i("14d9");var n=l(i("b380")),a=l(i("d967"));function l(t){return t&&t.__esModule?t:{default:t}}function o(t,i,l){return(0,a.default)()?e.default=o=Reflect.construct.bind():e.default=o=function(t,e,i){var a=[null];a.push.apply(a,e);var l=Function.bind.apply(t,a),o=new l;return i&&(0,n.default)(o,i.prototype),o},o.apply(null,arguments)}},6005:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(Array.isArray(t))return(0,n.default)(t)};var n=function(t){return t&&t.__esModule?t:{default:t}}(i("6b75"))},"669f":function(t,e,i){"use strict";i.r(e);var n=i("0463"),a=i.n(n);for(var l in n)["default"].indexOf(l)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(l);e["default"]=a.a},"6e38":function(t,e,i){var n=i("d77f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("19cdef75",n,!0,{sourceMap:!1,shadowMode:!1})},"863f":function(t,e,i){"use strict";i.r(e);var n=i("c46b"),a=i("669f");for(var l in a)["default"].indexOf(l)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(l);i("310c");var o=i("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"44b0bd5e",null,!1,n["a"],void 0);e["default"]=r.exports},"96da":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("498a");var n={name:"u-field",props:{icon:String,rightIcon:String,required:Boolean,label:String,password:Boolean,clearable:{type:Boolean,default:!0},labelWidth:{type:[Number,String],default:130},labelAlign:{type:String,default:"left"},inputAlign:{type:String,default:"left"},iconColor:{type:String,default:"#606266"},autoHeight:{type:Boolean,default:!0},errorMessage:{type:[String,Boolean],default:""},placeholder:String,placeholderStyle:String,focus:Boolean,fixed:Boolean,value:[Number,String],type:{type:String,default:"text"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},labelPosition:{type:String,default:"left"},fieldStyle:{type:Object,default:function(){return{}}},clearSize:{type:[Number,String],default:30},iconStyle:{type:Object,default:function(){return{}}},borderTop:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},trim:{type:Boolean,default:!0}},data:function(){return{focused:!1,itemIndex:0}},computed:{inputWrapStyle:function(){var t={};return t.textAlign=this.inputAlign,"left"==this.labelPosition?t.margin="0 8rpx":t.marginRight="8rpx",t},rightIconStyle:function(){var t={};return"top"==this.arrowDirection&&(t.transform="roate(-90deg)"),"bottom"==this.arrowDirection?t.transform="roate(90deg)":t.transform="roate(0deg)",t},labelStyle:function(){var t={};return"left"==this.labelAlign&&(t.justifyContent="flext-start"),"center"==this.labelAlign&&(t.justifyContent="center"),"right"==this.labelAlign&&(t.justifyContent="flext-end"),t},justifyContent:function(){return"left"==this.labelAlign?"flex-start":"center"==this.labelAlign?"center":"right"==this.labelAlign?"flex-end":void 0},inputMaxlength:function(){return Number(this.maxlength)},fieldInnerStyle:function(){var t={};return"left"==this.labelPosition?t.flexDirection="row":t.flexDirection="column",t}},methods:{onInput:function(t){var e=t.detail.value;this.trim&&(e=this.$u.trim(e)),this.$emit("input",e)},onFocus:function(t){this.focused=!0,this.$emit("focus",t)},onBlur:function(t){var e=this;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",t)},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},rightIconClick:function(){this.$emit("right-icon-click"),this.$emit("click")},fieldClick:function(){this.$emit("click")}}};e.default=n},"982f":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 颜色变量 */\n/* 边框border */[data-v-44b0bd5e] .u-field{padding:13px 0!important}[data-v-44b0bd5e] .u-btn{height:%?96?%!important}[data-v-44b0bd5e] .u-primary-hover{background:linear-gradient(90deg,#00b6b4,#00d496)!important}[data-v-44b0bd5e] .u-btn--primary--disabled{background-color:#bbb!important}.img uni-image[data-v-44b0bd5e]{width:%?398?%;height:%?254?%}',""]),t.exports=e},b380:function(t,e,i){"use strict";function n(t,i){return e.default=n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,i)}i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,i("131a")},b4fe:function(t,e,i){"use strict";i.r(e);var n=i("c476"),a=i("2ffa");for(var l in a)["default"].indexOf(l)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(l);i("3e2a");var o=i("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"57096f1c",null,!1,n["a"],void 0);e["default"]=r.exports},c46b:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return l})),i.d(e,"a",(function(){return n}));var n={uField:i("b4fe").default,uButton:i("93c3").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"plr-40 mt-30"},[t._v("以上信息用于核实您的真实身份")]),i("v-uni-view",{staticClass:"plr-40 mt-10 size-26 gray-2"},[t._v("实名认证可能会影响您的叫车服务，请认真填写")]),i("v-uni-view",{staticClass:"mlr-36"},[i("u-field",{attrs:{"label-width":"0",placeholder:"请输入真实姓名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),i("u-field",{attrs:{"label-width":"0",placeholder:"请输入身份证号码"},model:{value:t.idcard,callback:function(e){t.idcard=e},expression:"idcard"}})],1),i("v-uni-view",{staticClass:"mlr-36"},[i("v-uni-view",{staticClass:"img text-center mt-50"},[i("v-uni-image",{attrs:{src:t.img1,mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImg1.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"size-28 text-center mt-10"},[t._v("点击上传"),i("v-uni-text",{staticClass:"ml-10",staticStyle:{color:"#FF5C50"}},[t._v("人像面")])],1),i("v-uni-view",{staticClass:"img text-center mt-60"},[i("v-uni-image",{attrs:{src:t.img2,mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImg2.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"size-28 text-center mt-10"},[t._v("点击上传"),i("v-uni-text",{staticClass:"ml-10",staticStyle:{color:"#FF5C50"}},[t._v("国徽面")])],1)],1),i("v-uni-view",{staticClass:"pd-40"},[i("u-button",{staticClass:"mt-60",attrs:{type:"primary",disabled:!t.name||!t.idcard||!t.imgurl1||!t.imgurl2},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)},l=[]},c476:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return l})),i.d(e,"a",(function(){return n}));var n={uIcon:i("10a6").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-field",class:{"u-border-top":t.borderTop,"u-border-bottom":t.borderBottom}},[i("v-uni-view",{staticClass:"u-field-inner",class:["textarea"==t.type?"u-textarea-inner":"","u-label-postion-"+t.labelPosition]},[i("v-uni-view",{staticClass:"u-label",class:[t.required?"u-required":""],style:{justifyContent:t.justifyContent,flex:"left"==t.labelPosition?"0 0 "+t.labelWidth+"rpx":"1"}},[t.icon?i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{staticClass:"u-icon",attrs:{size:"32","custom-style":t.iconStyle,name:t.icon,color:t.iconColor}})],1):t._e(),t._t("icon"),i("v-uni-text",{staticClass:"u-label-text",class:[this.$slots.icon||t.icon?"u-label-left-gap":""]},[t._v(t._s(t.label))])],2),i("v-uni-view",{staticClass:"fild-body"},[i("v-uni-view",{staticClass:"u-flex-1 u-flex",style:[t.inputWrapStyle]},["textarea"==t.type?i("v-uni-textarea",{staticClass:"u-flex-1 u-textarea-class",style:[t.fieldStyle],attrs:{value:t.value,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,focus:t.focus,autoHeight:t.autoHeight,fixed:t.fixed},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.fieldClick.apply(void 0,arguments)}}}):i("v-uni-input",{staticClass:"u-flex-1 u-field__input-wrap",style:[t.fieldStyle],attrs:{type:t.type,value:t.value,password:t.password||"password"===this.type,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.fieldClick.apply(void 0,arguments)}}})],1),t.clearable&&""!=t.value&&t.focused?i("u-icon",{staticClass:"u-clear-icon",attrs:{size:t.clearSize,name:"close-circle-fill",color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}}):t._e(),i("v-uni-view",{staticClass:"u-button-wrap"},[t._t("right")],2),t.rightIcon?i("u-icon",{staticClass:"u-arror-right",style:[t.rightIconStyle],attrs:{name:t.rightIcon,color:"#c0c4cc",size:"26"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightIconClick.apply(void 0,arguments)}}}):t._e()],1)],1),!1!==t.errorMessage&&""!=t.errorMessage?i("v-uni-view",{staticClass:"u-error-message",style:{paddingLeft:t.labelWidth+"rpx"}},[t._v(t._s(t.errorMessage))]):t._e()],1)},l=[]},d77f:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 颜色变量 */\n/* 边框border */.u-field[data-v-57096f1c]{font-size:%?28?%;padding:%?20?% %?28?%;text-align:left;position:relative;color:#303133}.u-field-inner[data-v-57096f1c]{display:flex;flex-direction:row;align-items:center}.u-textarea-inner[data-v-57096f1c]{align-items:flex-start}.u-textarea-class[data-v-57096f1c]{min-height:%?96?%;width:auto;font-size:%?28?%}.fild-body[data-v-57096f1c]{display:flex;flex-direction:row;flex:1;align-items:center}.u-arror-right[data-v-57096f1c]{margin-left:%?8?%}.u-label-text[data-v-57096f1c]{display:inline-flex}.u-label-left-gap[data-v-57096f1c]{margin-left:%?6?%}.u-label-postion-top[data-v-57096f1c]{flex-direction:column;align-items:flex-start}.u-label[data-v-57096f1c]{width:%?130?%;flex:1 1 %?130?%;text-align:left;position:relative;display:flex;flex-direction:row;align-items:center}.u-required[data-v-57096f1c]::before{content:"*";position:absolute;left:%?-16?%;font-size:14px;color:#fa3534;height:9px;line-height:1}.u-field__input-wrap[data-v-57096f1c]{position:relative;overflow:hidden;font-size:%?28?%;height:%?48?%;flex:1;width:auto}.u-clear-icon[data-v-57096f1c]{display:flex;flex-direction:row;align-items:center}.u-error-message[data-v-57096f1c]{color:#fa3534;font-size:%?26?%;text-align:left}.placeholder-style[data-v-57096f1c]{color:#969799}.u-input-class[data-v-57096f1c]{font-size:%?28?%}.u-button-wrap[data-v-57096f1c]{margin-left:%?8?%}',""]),t.exports=e},d967:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},i("d3b7"),i("f8c9"),i("4ae1")},db90:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630")},e562:function(t,e,i){var n=i("982f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("45e9cd62",n,!0,{sourceMap:!1,shadowMode:!1})}}]);