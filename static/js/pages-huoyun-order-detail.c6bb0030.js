(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-huoyun-order-detail"],{"69d7":function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.info.status?e("v-uni-view",{staticClass:"flex flex-column vh100 w100"},[e("v-uni-view",{staticClass:"u-flex-1 w100"},[e("v-uni-map",{staticStyle:{width:"100%",height:"100%",position:"relative"},attrs:{scale:12,latitude:t.latitude,longitude:t.longitude,markers:t.covers,polyline:t.polyline}},[e("v-uni-cover-image",{staticClass:"navigation",attrs:{src:n("c83f")},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toNav.apply(void 0,arguments)}}})],1)],1),0==t.info.status||-2==t.info.status?e("paidui",{staticClass:"w100",attrs:{huoyun:!0,info:t.info},on:{update:function(i){arguments[0]=i=t.$handleEvent(i),t.update.apply(void 0,arguments)},init:function(i){arguments[0]=i=t.$handleEvent(i),t.init.apply(void 0,arguments)}}}):t._e(),-1==t.info.status?e("dtQuxiao",{staticClass:"w100",attrs:{huoyun:!0,refund_id:t.refund_id,info:t.info}}):t._e(),t.arr3.includes(1*t.info.status)&&!t.ispay?e("dtSiji",{staticClass:"w100",attrs:{huoyun:!0,info:t.info},on:{pay:function(i){arguments[0]=i=t.$handleEvent(i),t.ispay=!0}}}):t._e()],1):t._e()},a=[]},"6d1e":function(t,i,n){"use strict";n.r(i);var e=n("69d7"),a=n("a679");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(o);n("e690");var s=n("f0c5"),d=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"665577d8",null,!1,e["a"],void 0);i["default"]=d.exports},"6e5d":function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 颜色变量 */\n/* 边框border */.navigation[data-v-665577d8]{position:fixed;right:%?10?%;top:%?100?%;width:%?100?%;height:%?100?%}',""]),t.exports=i},"9c33":function(t,i,n){var e=n("6e5d");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("a54e06fe",e,!0,{sourceMap:!1,shadowMode:!1})},a679:function(t,i,n){"use strict";n.r(i);var e=n("f763"),a=n.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=a.a},c83f:function(t,i){t.exports="data:image/png;base64,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"},e690:function(t,i,n){"use strict";var e=n("9c33"),a=n.n(e);a.a},f763:function(t,i,n){"use strict";n("7a82");var e=n("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("caad"),n("2532"),n("d3b7"),n("159b"),n("14d9"),n("acd8");var a=e(n("6a06")),o={data:function(){return{id:"",info:{},timer1:null,arr1:[0,1,2,4,5,3],arr2:[-2,-1,99],arr3:[1,2,3,4,5,99],ispay:!1,latitude:"",longitude:"",polyline:[],covers:[],refund_id:""}},computed:{},onLoad:function(t){this.id=t.id,t.refund_id&&(this.refund_id=t.refund_id)},onShow:function(){this.init()},onUnload:function(){clearInterval(this.timer1)},onHide:function(){clearInterval(this.timer1)},methods:{init:function(){var t=this,i=this;this.$http("/addons/ddrive/hyorder/info",{order_id:this.id},"POST").then((function(n){t.info=n,uni.setNavigationBarTitle({title:t.info.status_text}),t.arr1.includes(1*t.info.status)&&(t.timer1=setInterval((function(){t.update()}),5e3)),uni.getLocation({type:"gcj02",success:function(t){console.log("当前位置的经度1："+t.longitude),console.log("当前位置的纬度1："+t.latitude),i.longitude=t.longitude,i.latitude=t.latitude,i.covers=[{id:1,latitude:i.latitude,longitude:i.longitude,iconPath:"../../static/now.png",title:"当前位置",width:25,height:25},{id:2,latitude:i.info.start_latitude,longitude:i.info.start_longitude,iconPath:"../../static/start.png",title:"起点位置",width:40,height:40}],i.info.shaddress.forEach((function(t,n){i.covers.push({id:3+n,latitude:t.end_latitude,longitude:t.end_longitude,iconPath:"../../static/end.png",title:"终点位置",width:40,height:40})})),i.polyline=[],i.getLine()}})}))},update:function(){var t=this;this.$http("/addons/ddrive/hyorder/info",{order_id:this.id},"POST").then((function(i){t.info=i,t.arr2.includes(1*t.info.status)&&clearInterval(t.timer1)}))},getLine:function(){var t=this,i=new a.default.AMapWX({key:"4212e2ed80856520bc1a2e44153333fc"}),n=[];this.info.shaddress.forEach((function(t){n.push(t.end_longitude+","+t.end_latitude)})),console.log(22222222,n),this.lineData(i,this.longitude+","+this.latitude,this.info.start_longitude+","+this.info.start_latitude,"#ffb04e"),this.lineData(i,this.info.start_longitude+","+this.info.start_latitude,n[0],"#ff4b4e"),n.length>1&&n.forEach((function(e,a){t.lineData(i,n[a],n[a+1],"#28d32e")}))},lineData:function(t,i,n,e){var a=this;t.getDrivingRoute({origin:i,destination:n,success:function(t){if(t.paths&&t.paths[0]&&t.paths[0].steps)for(var i=t.paths[0].steps,n=[],o=0;o<i.length;o++)for(var s=i[o].polyline.split(";"),d=0;d<s.length;d++)n.push({longitude:parseFloat(s[d].split(",")[0]),latitude:parseFloat(s[d].split(",")[1])});a.polyline.push({points:n,color:e,width:10,arrowLine:!0})},fail:function(t){console.log(444444,t)}})},toNav:function(t){var i=this;uni.getSystemInfo({success:function(t){console.log(t.platform),"android"==t.platform?plus.runtime.openURL("androidamap://navi?sourceApplication=appname&lat="+i.info.shaddress[i.info.shaddress.length-1].end_latitude+"&lon="+i.info.shaddress[i.info.shaddress.length-1].end_longitude+"&dev=0&style=2"):"ios"==t.platform&&plus.runtime.openURL("iosamap://navi?sourceApplication=appname&lat="+i.info.shaddress[i.info.shaddress.length-1].end_latitude+"&lon="+i.info.shaddress[i.info.shaddress.length-1].end_longitude+"&dev=0&style=2")}})},toAnquan:function(){uni.navigateTo({url:"/pages/home/security"})}}};i.default=o}}]);