(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-set-phone-change"],{"210f":function(t,e,i){"use strict";i.r(e);var n=i("dfaf"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"2ffa":function(t,e,i){"use strict";i.r(e);var n=i("96da"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"3e2a":function(t,e,i){"use strict";var n=i("6e38"),a=i.n(n);a.a},"62cc":function(t,e,i){"use strict";var n=i("da31"),a=i.n(n);a.a},"6e38":function(t,e,i){var n=i("d77f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("19cdef75",n,!0,{sourceMap:!1,shadowMode:!1})},"713c":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 颜色变量 */\n/* 边框border */[data-v-b97ccfd0] .u-field{padding:13px 0!important}[data-v-b97ccfd0] .u-btn{height:%?96?%!important}[data-v-b97ccfd0] .u-primary-hover{background:linear-gradient(90deg,#00b6b4,#00d496)!important}[data-v-b97ccfd0] .u-btn--primary--disabled{background-color:#bbb!important}.code[data-v-b97ccfd0]{margin-top:%?10?%;padding-top:%?14?%;padding-bottom:%?15?%;border-bottom:%?1?% solid #f5f6f7}.code uni-input[data-v-b97ccfd0]{margin-left:%?8?%;font-size:%?26?%}.code .code1[data-v-b97ccfd0]{width:%?180?%;height:%?70?%;font-size:%?26?%;line-height:%?70?%;background:#00c28e}',""]),t.exports=e},"87b8":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uField:i("b4fe").default,uButton:i("93c3").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{"border-top":"1rpx solid #f8f8f8"}},[i("v-uni-view",{staticClass:"mlr-36 mt-30"},[t._v("更改手机号码后，下次登录可使用新手机号码登录。当前手机号码："+t._s(t.userInfo.mobile))]),i("v-uni-view",{staticClass:"mlr-36 mt-40"},[i("u-field",{attrs:{trim:!0,"label-width":"0",placeholder:"请输入手机号"},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}})],1),i("v-uni-view",{staticClass:"code mlr-36 flex"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),i("v-uni-view",{staticClass:"code1 white text-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getcode.apply(void 0,arguments)}}},[t._v(t._s(t.vscode))])],1),i("v-uni-view",{staticClass:"fixed-bottom plr-36 pb-80"},[i("u-button",{attrs:{type:"primary",disabled:!t.tel||!t.code},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)},o=[]},"96da":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("498a");var n={name:"u-field",props:{icon:String,rightIcon:String,required:Boolean,label:String,password:Boolean,clearable:{type:Boolean,default:!0},labelWidth:{type:[Number,String],default:130},labelAlign:{type:String,default:"left"},inputAlign:{type:String,default:"left"},iconColor:{type:String,default:"#606266"},autoHeight:{type:Boolean,default:!0},errorMessage:{type:[String,Boolean],default:""},placeholder:String,placeholderStyle:String,focus:Boolean,fixed:Boolean,value:[Number,String],type:{type:String,default:"text"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},labelPosition:{type:String,default:"left"},fieldStyle:{type:Object,default:function(){return{}}},clearSize:{type:[Number,String],default:30},iconStyle:{type:Object,default:function(){return{}}},borderTop:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},trim:{type:Boolean,default:!0}},data:function(){return{focused:!1,itemIndex:0}},computed:{inputWrapStyle:function(){var t={};return t.textAlign=this.inputAlign,"left"==this.labelPosition?t.margin="0 8rpx":t.marginRight="8rpx",t},rightIconStyle:function(){var t={};return"top"==this.arrowDirection&&(t.transform="roate(-90deg)"),"bottom"==this.arrowDirection?t.transform="roate(90deg)":t.transform="roate(0deg)",t},labelStyle:function(){var t={};return"left"==this.labelAlign&&(t.justifyContent="flext-start"),"center"==this.labelAlign&&(t.justifyContent="center"),"right"==this.labelAlign&&(t.justifyContent="flext-end"),t},justifyContent:function(){return"left"==this.labelAlign?"flex-start":"center"==this.labelAlign?"center":"right"==this.labelAlign?"flex-end":void 0},inputMaxlength:function(){return Number(this.maxlength)},fieldInnerStyle:function(){var t={};return"left"==this.labelPosition?t.flexDirection="row":t.flexDirection="column",t}},methods:{onInput:function(t){var e=t.detail.value;this.trim&&(e=this.$u.trim(e)),this.$emit("input",e)},onFocus:function(t){this.focused=!0,this.$emit("focus",t)},onBlur:function(t){var e=this;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",t)},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},rightIconClick:function(){this.$emit("right-icon-click"),this.$emit("click")},fieldClick:function(){this.$emit("click")}}};e.default=n},b4fe:function(t,e,i){"use strict";i.r(e);var n=i("c476"),a=i("2ffa");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("3e2a");var l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"57096f1c",null,!1,n["a"],void 0);e["default"]=r.exports},c476:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uIcon:i("10a6").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-field",class:{"u-border-top":t.borderTop,"u-border-bottom":t.borderBottom}},[i("v-uni-view",{staticClass:"u-field-inner",class:["textarea"==t.type?"u-textarea-inner":"","u-label-postion-"+t.labelPosition]},[i("v-uni-view",{staticClass:"u-label",class:[t.required?"u-required":""],style:{justifyContent:t.justifyContent,flex:"left"==t.labelPosition?"0 0 "+t.labelWidth+"rpx":"1"}},[t.icon?i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{staticClass:"u-icon",attrs:{size:"32","custom-style":t.iconStyle,name:t.icon,color:t.iconColor}})],1):t._e(),t._t("icon"),i("v-uni-text",{staticClass:"u-label-text",class:[this.$slots.icon||t.icon?"u-label-left-gap":""]},[t._v(t._s(t.label))])],2),i("v-uni-view",{staticClass:"fild-body"},[i("v-uni-view",{staticClass:"u-flex-1 u-flex",style:[t.inputWrapStyle]},["textarea"==t.type?i("v-uni-textarea",{staticClass:"u-flex-1 u-textarea-class",style:[t.fieldStyle],attrs:{value:t.value,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,focus:t.focus,autoHeight:t.autoHeight,fixed:t.fixed},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.fieldClick.apply(void 0,arguments)}}}):i("v-uni-input",{staticClass:"u-flex-1 u-field__input-wrap",style:[t.fieldStyle],attrs:{type:t.type,value:t.value,password:t.password||"password"===this.type,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.fieldClick.apply(void 0,arguments)}}})],1),t.clearable&&""!=t.value&&t.focused?i("u-icon",{staticClass:"u-clear-icon",attrs:{size:t.clearSize,name:"close-circle-fill",color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}}):t._e(),i("v-uni-view",{staticClass:"u-button-wrap"},[t._t("right")],2),t.rightIcon?i("u-icon",{staticClass:"u-arror-right",style:[t.rightIconStyle],attrs:{name:t.rightIcon,color:"#c0c4cc",size:"26"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightIconClick.apply(void 0,arguments)}}}):t._e()],1)],1),!1!==t.errorMessage&&""!=t.errorMessage?i("v-uni-view",{staticClass:"u-error-message",style:{paddingLeft:t.labelWidth+"rpx"}},[t._v(t._s(t.errorMessage))]):t._e()],1)},o=[]},d77f:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 颜色变量 */\n/* 边框border */.u-field[data-v-57096f1c]{font-size:%?28?%;padding:%?20?% %?28?%;text-align:left;position:relative;color:#303133}.u-field-inner[data-v-57096f1c]{display:flex;flex-direction:row;align-items:center}.u-textarea-inner[data-v-57096f1c]{align-items:flex-start}.u-textarea-class[data-v-57096f1c]{min-height:%?96?%;width:auto;font-size:%?28?%}.fild-body[data-v-57096f1c]{display:flex;flex-direction:row;flex:1;align-items:center}.u-arror-right[data-v-57096f1c]{margin-left:%?8?%}.u-label-text[data-v-57096f1c]{display:inline-flex}.u-label-left-gap[data-v-57096f1c]{margin-left:%?6?%}.u-label-postion-top[data-v-57096f1c]{flex-direction:column;align-items:flex-start}.u-label[data-v-57096f1c]{width:%?130?%;flex:1 1 %?130?%;text-align:left;position:relative;display:flex;flex-direction:row;align-items:center}.u-required[data-v-57096f1c]::before{content:"*";position:absolute;left:%?-16?%;font-size:14px;color:#fa3534;height:9px;line-height:1}.u-field__input-wrap[data-v-57096f1c]{position:relative;overflow:hidden;font-size:%?28?%;height:%?48?%;flex:1;width:auto}.u-clear-icon[data-v-57096f1c]{display:flex;flex-direction:row;align-items:center}.u-error-message[data-v-57096f1c]{color:#fa3534;font-size:%?26?%;text-align:left}.placeholder-style[data-v-57096f1c]{color:#969799}.u-input-class[data-v-57096f1c]{font-size:%?28?%}.u-button-wrap[data-v-57096f1c]{margin-left:%?8?%}',""]),t.exports=e},da31:function(t,e,i){var n=i("713c");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("72e7453f",n,!0,{sourceMap:!1,shadowMode:!1})},dfaf:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac1f"),i("00b4");var a=n(i("5530")),o=i("26cb"),l={data:function(){return{tel:"",code:"",vscode:"获取验证码",countNum:60,countDownTimer:null,submitbtn:!0}},computed:(0,a.default)({},(0,o.mapState)(["userInfo"])),methods:{getcode:function(){var t=this;/^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/.test(this.tel)?"获取验证码"!=this.vscode&&"重新发送"!=this.vscode||(this.countNum=60,this.countDownTimer=setInterval((function(){if(t.countNum<1)return clearInterval(t.countDownTimer),void(t.vscode="重新发送");t.countNum--,t.vscode=t.countNum+"秒重发"}),1e3),this.$http("/api/sms/send",{mobile:this.tel,event:"changemobile"},"POST").then((function(t){uni.showToast({title:"短信已发送，请注意查收",icon:"none"})}))):uni.showToast({title:"请输入手机号",icon:"none"})},submit:function(){var t=this;1==this.submitbtn&&(this.submitbtn=!1,this.$http("/addons/ddrive/user/changemobile",{mobile:this.tel,captcha:this.code},"POST").then((function(e){t.$store.dispatch("updateUserInfo"),uni.showToast({title:"修改手机号成功",icon:"none"}),setTimeout((function(){uni.navigateBack({})}),1e3)})).catch((function(e){t.submitbtn=!0})))}}};e.default=l},e20e:function(t,e,i){"use strict";i.r(e);var n=i("87b8"),a=i("210f");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("62cc");var l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"b97ccfd0",null,!1,n["a"],void 0);e["default"]=r.exports}}]);