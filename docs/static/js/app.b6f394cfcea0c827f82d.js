webpackJsonp([1],{"L+Z4":function(e,a){},NHnr:function(e,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("7+uW"),r={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var o=s("VU/8")({name:"App"},r,!1,function(e){s("L+Z4")},null,null).exports,n=s("/ocq"),t={name:"HelloWorld",data:function(){return{myName:void 0,isBaba:!1,isMama:!1,isChild:!1,isCare:!1,babaPhone:"",mamaPhone:"",childPhone:"",carePhone:"",showNumber:!0,showQR:!1,preview:!0}},methods:{pri:function(e){this.$gtag.event("action",{event_category:"print",event_action:e,event_label:e,value:e}),window.print()}}},c={render:function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"hello"},[s("h3",{staticClass:"no-print"},[e._v("老少兩用迷路聯絡卡，可友善列印")]),e._v(" "),s("div",{staticClass:"print-only",attrs:{id:"show"}},[s("h1",[e._v("我迷路了")]),e._v(" "),s("h3",[e._v("請幫忙聯絡我的主要照顧者")]),e._v(" "),s("div",[e._v("我叫："+e._s(e.myName||"[未命名]"))]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isChild,expression:"isChild"}]},[e._v("子女手機：\n      "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.showNumber,expression:"showNumber"}]},[e._v(e._s(e.childPhone))]),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:e.showQR,expression:"showQR"}],attrs:{src:"https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl="+e.childPhone+"&choe=UTF-8"}})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isCare,expression:"isCare"}]},[e._v("看顧手機：\n      "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.showNumber,expression:"showNumber"}]},[e._v(e._s(e.carePhone))]),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:e.showQR,expression:"showQR"}],attrs:{src:"https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl="+e.carePhone+"&choe=UTF-8"}})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isMama,expression:"isMama"}]},[e._v("媽媽手機：\n      "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.showNumber,expression:"showNumber"}]},[e._v(e._s(e.mamaPhone))]),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:e.showQR,expression:"showQR"}],attrs:{src:"https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl="+e.mamaPhone+"&choe=UTF-8"}})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isBaba,expression:"isBaba"}]},[e._v("爸爸手機：\n      "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.showNumber,expression:"showNumber"}]},[e._v(e._s(e.babaPhone))]),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:e.showQR,expression:"showQR"}],attrs:{src:"https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl="+e.babaPhone+"&choe=UTF-8"}})])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.preview,expression:"preview"}],staticClass:"no-print",attrs:{id:"preview"}},[s("h1",[e._v("我迷路了")]),e._v(" "),s("h3",[e._v("請幫忙聯絡我的主要照顧者")]),e._v(" "),s("div",[e._v("我叫："+e._s(e.myName||"[未命名]"))]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isChild,expression:"isChild"}]},[e._v("子女手機：\n      "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.showNumber,expression:"showNumber"}]},[e._v(e._s(e.childPhone))]),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:e.showQR,expression:"showQR"}],attrs:{src:"https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl="+e.childPhone+"&choe=UTF-8"}})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isCare,expression:"isCare"}]},[e._v("看顧手機：\n      "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.showNumber,expression:"showNumber"}]},[e._v(e._s(e.carePhone))]),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:e.showQR,expression:"showQR"}],attrs:{src:"https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl="+e.carePhone+"&choe=UTF-8"}})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isMama,expression:"isMama"}]},[e._v("媽媽手機：\n      "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.showNumber,expression:"showNumber"}]},[e._v(e._s(e.mamaPhone))]),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:e.showQR,expression:"showQR"}],attrs:{src:"https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl="+e.mamaPhone+"&choe=UTF-8"}})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isBaba,expression:"isBaba"}]},[e._v("爸爸手機：\n      "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.showNumber,expression:"showNumber"}]},[e._v(e._s(e.babaPhone))]),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:e.showQR,expression:"showQR"}],attrs:{src:"https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl="+e.babaPhone+"&choe=UTF-8"}})])]),e._v(" "),s("div",{staticClass:"no-print",attrs:{id:"main"}},[s("div",{attrs:{id:"config"}},[e._v("\n      主要照顧者：\n      "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.isChild,expression:"isChild"}],attrs:{type:"checkbox",name:"isChild"},domProps:{checked:Array.isArray(e.isChild)?e._i(e.isChild,null)>-1:e.isChild},on:{change:function(a){var s=e.isChild,i=a.target,r=!!i.checked;if(Array.isArray(s)){var o=e._i(s,null);i.checked?o<0&&(e.isChild=s.concat([null])):o>-1&&(e.isChild=s.slice(0,o).concat(s.slice(o+1)))}else e.isChild=r}}}),e._v("子女\n      "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.isCare,expression:"isCare"}],attrs:{type:"checkbox",name:"isCare"},domProps:{checked:Array.isArray(e.isCare)?e._i(e.isCare,null)>-1:e.isCare},on:{change:function(a){var s=e.isCare,i=a.target,r=!!i.checked;if(Array.isArray(s)){var o=e._i(s,null);i.checked?o<0&&(e.isCare=s.concat([null])):o>-1&&(e.isCare=s.slice(0,o).concat(s.slice(o+1)))}else e.isCare=r}}}),e._v("看護\n      "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.isMama,expression:"isMama"}],attrs:{type:"checkbox",name:"isMama"},domProps:{checked:Array.isArray(e.isMama)?e._i(e.isMama,null)>-1:e.isMama},on:{change:function(a){var s=e.isMama,i=a.target,r=!!i.checked;if(Array.isArray(s)){var o=e._i(s,null);i.checked?o<0&&(e.isMama=s.concat([null])):o>-1&&(e.isMama=s.slice(0,o).concat(s.slice(o+1)))}else e.isMama=r}}}),e._v("媽媽\n      "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.isBaba,expression:"isBaba"}],attrs:{type:"checkbox",name:"isBaba"},domProps:{checked:Array.isArray(e.isBaba)?e._i(e.isBaba,null)>-1:e.isBaba},on:{change:function(a){var s=e.isBaba,i=a.target,r=!!i.checked;if(Array.isArray(s)){var o=e._i(s,null);i.checked?o<0&&(e.isBaba=s.concat([null])):o>-1&&(e.isBaba=s.slice(0,o).concat(s.slice(o+1)))}else e.isBaba=r}}}),e._v("爸爸\n    ")]),e._v(" "),s("div",{attrs:{id:"config2"}},[e._v("\n      顯示：\n      "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.showNumber,expression:"showNumber"}],attrs:{type:"checkbox",name:"showNumber"},domProps:{checked:Array.isArray(e.showNumber)?e._i(e.showNumber,null)>-1:e.showNumber},on:{change:function(a){var s=e.showNumber,i=a.target,r=!!i.checked;if(Array.isArray(s)){var o=e._i(s,null);i.checked?o<0&&(e.showNumber=s.concat([null])):o>-1&&(e.showNumber=s.slice(0,o).concat(s.slice(o+1)))}else e.showNumber=r}}}),e._v("手機號碼\n      "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.showQR,expression:"showQR"}],attrs:{type:"checkbox",name:"showQR"},domProps:{checked:Array.isArray(e.showQR)?e._i(e.showQR,null)>-1:e.showQR},on:{change:function(a){var s=e.showQR,i=a.target,r=!!i.checked;if(Array.isArray(s)){var o=e._i(s,null);i.checked?o<0&&(e.showQR=s.concat([null])):o>-1&&(e.showQR=s.slice(0,o).concat(s.slice(o+1)))}else e.showQR=r}}}),e._v("QR碼\n    ")]),e._v(" "),s("div",{attrs:{id:"config2"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.preview,expression:"preview"}],attrs:{type:"checkbox",name:"preview"},domProps:{checked:Array.isArray(e.preview)?e._i(e.preview,null)>-1:e.preview},on:{change:function(a){var s=e.preview,i=a.target,r=!!i.checked;if(Array.isArray(s)){var o=e._i(s,null);i.checked?o<0&&(e.preview=s.concat([null])):o>-1&&(e.preview=s.slice(0,o).concat(s.slice(o+1)))}else e.preview=r}}}),e._v("顯示預覽\n    ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.myName,expression:"myName"},{name:"autofocus",rawName:"v-autofocus"}],staticClass:"block",attrs:{type:"text",name:"name",autofocus:"",placeholder:"請輸入當事人的稱呼"},domProps:{value:e.myName},on:{input:function(a){a.target.composing||(e.myName=a.target.value)}}}),e._v(" "),s("input",{directives:[{name:"show",rawName:"v-show",value:e.isChild,expression:"isChild"},{name:"model",rawName:"v-model",value:e.childPhone,expression:"childPhone"}],staticClass:"block",attrs:{type:"text",name:"childPhone",placeholder:"請輸入子女的手機號碼"},domProps:{value:e.childPhone},on:{input:function(a){a.target.composing||(e.childPhone=a.target.value)}}}),e._v(" "),s("input",{directives:[{name:"show",rawName:"v-show",value:e.isCare,expression:"isCare"},{name:"model",rawName:"v-model",value:e.carePhone,expression:"carePhone"}],staticClass:"block",attrs:{type:"text",name:"carePhone",placeholder:"請輸入看護的手機號碼"},domProps:{value:e.carePhone},on:{input:function(a){a.target.composing||(e.carePhone=a.target.value)}}}),e._v(" "),s("input",{directives:[{name:"show",rawName:"v-show",value:e.isMama,expression:"isMama"},{name:"model",rawName:"v-model",value:e.mamaPhone,expression:"mamaPhone"}],staticClass:"block",attrs:{type:"text",name:"babaphone",placeholder:"請輸入媽媽的手機號碼"},domProps:{value:e.mamaPhone},on:{input:function(a){a.target.composing||(e.mamaPhone=a.target.value)}}}),e._v(" "),s("input",{directives:[{name:"show",rawName:"v-show",value:e.isBaba,expression:"isBaba"},{name:"model",rawName:"v-model",value:e.babaPhone,expression:"babaPhone"}],staticClass:"block",attrs:{type:"text",name:"babaphone",placeholder:"請輸入爸爸的手機號碼"},domProps:{value:e.babaPhone},on:{input:function(a){a.target.composing||(e.babaPhone=a.target.value)}}})]),e._v(" "),s("a",{staticClass:"button3",on:{click:function(a){return e.pri(e.myName)}}},[e._v("友善列印")]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("footer",{staticClass:"no-print",attrs:{id:"foot"}},[a("a",{attrs:{href:"http://www.github.com/bestian/imlost",target:"_blank"}},[this._v("原始碼 on Github")])])}]};var h=s("VU/8")(t,c,!1,function(e){s("kxRG")},"data-v-c36de3a2",null).exports;i.a.use(n.a);var v=new n.a({routes:[{path:"/",name:"HelloWorld",component:h}]}),m=s("Z3T5"),l=s("vVk6"),w=s.n(l);i.a.directive("autofocus",w.a),i.a.use(m.a,{config:{id:"UA-26178243-15"}}),i.a.config.productionTip=!1,new i.a({el:"#app",router:v,components:{App:o},template:"<App/>"})},kxRG:function(e,a){}},["NHnr"]);
//# sourceMappingURL=app.b6f394cfcea0c827f82d.js.map