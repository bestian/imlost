webpackJsonp([1],{"8BJh":function(e,a){},NHnr:function(e,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("7+uW"),o={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},o,!1,function(e){s("mVYm")},null,null).exports,n=s("/ocq"),t={render:function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"hello"},[s("h3",{staticClass:"no-print"},[e._v("老少兩用走失聯絡卡，可友善列印")]),e._v(" "),s("div",{staticClass:"print-only",attrs:{id:"show"}},[s("h1",[e._v("我走失了")]),e._v(" "),s("h3",[e._v("請幫忙聯絡我的主要照顧者")]),e._v(" "),s("div",[e._v("我叫："+e._s(e.myName))]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isChild,expression:"isChild"}]},[e._v("子女手機：\n      "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.showNumber,expression:"showNumber"}]},[e._v(e._s(e.childPhone))]),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:e.showQR,expression:"showQR"}],attrs:{src:"https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl="+e.childPhone+"&choe=UTF-8"}})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isCare,expression:"isCare"}]},[e._v("看顧手機：\n      "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.showNumber,expression:"showNumber"}]},[e._v(e._s(e.carePhone))]),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:e.showQR,expression:"showQR"}],attrs:{src:"https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl="+e.carePhone+"&choe=UTF-8"}})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isMama,expression:"isMama"}]},[e._v("媽媽手機：\n      "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.showNumber,expression:"showNumber"}]},[e._v(e._s(e.mamaPhone))]),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:e.showQR,expression:"showQR"}],attrs:{src:"https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl="+e.mamaPhone+"&choe=UTF-8"}})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isBaba,expression:"isBaba"}]},[e._v("爸爸手機：\n      "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.showNumber,expression:"showNumber"}]},[e._v(e._s(e.babaPhone))]),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:e.showQR,expression:"showQR"}],attrs:{src:"https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl="+e.babaPhone+"&choe=UTF-8"}})])]),e._v(" "),s("div",{staticClass:"no-print",attrs:{id:"main"}},[s("div",{attrs:{id:"config"}},[e._v("\n      主要照顧者：\n      "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.isChild,expression:"isChild"}],attrs:{type:"checkbox",name:"isChild"},domProps:{checked:Array.isArray(e.isChild)?e._i(e.isChild,null)>-1:e.isChild},on:{change:function(a){var s=e.isChild,i=a.target,o=!!i.checked;if(Array.isArray(s)){var r=e._i(s,null);i.checked?r<0&&(e.isChild=s.concat([null])):r>-1&&(e.isChild=s.slice(0,r).concat(s.slice(r+1)))}else e.isChild=o}}}),e._v("子女\n      "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.isCare,expression:"isCare"}],attrs:{type:"checkbox",name:"isCare"},domProps:{checked:Array.isArray(e.isCare)?e._i(e.isCare,null)>-1:e.isCare},on:{change:function(a){var s=e.isCare,i=a.target,o=!!i.checked;if(Array.isArray(s)){var r=e._i(s,null);i.checked?r<0&&(e.isCare=s.concat([null])):r>-1&&(e.isCare=s.slice(0,r).concat(s.slice(r+1)))}else e.isCare=o}}}),e._v("看護\n      "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.isMama,expression:"isMama"}],attrs:{type:"checkbox",name:"isMama"},domProps:{checked:Array.isArray(e.isMama)?e._i(e.isMama,null)>-1:e.isMama},on:{change:function(a){var s=e.isMama,i=a.target,o=!!i.checked;if(Array.isArray(s)){var r=e._i(s,null);i.checked?r<0&&(e.isMama=s.concat([null])):r>-1&&(e.isMama=s.slice(0,r).concat(s.slice(r+1)))}else e.isMama=o}}}),e._v("媽媽\n      "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.isBaba,expression:"isBaba"}],attrs:{type:"checkbox",name:"isBaba"},domProps:{checked:Array.isArray(e.isBaba)?e._i(e.isBaba,null)>-1:e.isBaba},on:{change:function(a){var s=e.isBaba,i=a.target,o=!!i.checked;if(Array.isArray(s)){var r=e._i(s,null);i.checked?r<0&&(e.isBaba=s.concat([null])):r>-1&&(e.isBaba=s.slice(0,r).concat(s.slice(r+1)))}else e.isBaba=o}}}),e._v("爸爸\n    ")]),e._v(" "),s("div",{attrs:{id:"config2"}},[e._v("\n      顯示：\n      "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.showNumber,expression:"showNumber"}],attrs:{type:"checkbox",name:"showNumber"},domProps:{checked:Array.isArray(e.showNumber)?e._i(e.showNumber,null)>-1:e.showNumber},on:{change:function(a){var s=e.showNumber,i=a.target,o=!!i.checked;if(Array.isArray(s)){var r=e._i(s,null);i.checked?r<0&&(e.showNumber=s.concat([null])):r>-1&&(e.showNumber=s.slice(0,r).concat(s.slice(r+1)))}else e.showNumber=o}}}),e._v("手機號碼\n      "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.showQR,expression:"showQR"}],attrs:{type:"checkbox",name:"showQR"},domProps:{checked:Array.isArray(e.showQR)?e._i(e.showQR,null)>-1:e.showQR},on:{change:function(a){var s=e.showQR,i=a.target,o=!!i.checked;if(Array.isArray(s)){var r=e._i(s,null);i.checked?r<0&&(e.showQR=s.concat([null])):r>-1&&(e.showQR=s.slice(0,r).concat(s.slice(r+1)))}else e.showQR=o}}}),e._v("QR碼\n    ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.myName,expression:"myName"}],staticClass:"block",attrs:{type:"text",name:"name",placeholder:"請輸入當事人的稱呼"},domProps:{value:e.myName},on:{input:function(a){a.target.composing||(e.myName=a.target.value)}}}),e._v(" "),s("input",{directives:[{name:"show",rawName:"v-show",value:e.isChild,expression:"isChild"},{name:"model",rawName:"v-model",value:e.childPhone,expression:"childPhone"}],staticClass:"block",attrs:{type:"text",name:"childPhone",placeholder:"請輸入子女的手機號碼"},domProps:{value:e.childPhone},on:{input:function(a){a.target.composing||(e.childPhone=a.target.value)}}}),e._v(" "),s("input",{directives:[{name:"show",rawName:"v-show",value:e.isCare,expression:"isCare"},{name:"model",rawName:"v-model",value:e.carePhone,expression:"carePhone"}],staticClass:"block",attrs:{type:"text",name:"carePhone",placeholder:"請輸入看護的手機號碼"},domProps:{value:e.carePhone},on:{input:function(a){a.target.composing||(e.carePhone=a.target.value)}}}),e._v(" "),s("input",{directives:[{name:"show",rawName:"v-show",value:e.isMama,expression:"isMama"},{name:"model",rawName:"v-model",value:e.mamaPhone,expression:"mamaPhone"}],staticClass:"block",attrs:{type:"text",name:"babaphone",placeholder:"請輸入媽媽的手機號碼"},domProps:{value:e.mamaPhone},on:{input:function(a){a.target.composing||(e.mamaPhone=a.target.value)}}}),e._v(" "),s("input",{directives:[{name:"show",rawName:"v-show",value:e.isBaba,expression:"isBaba"},{name:"model",rawName:"v-model",value:e.babaPhone,expression:"babaPhone"}],staticClass:"block",attrs:{type:"text",name:"babaphone",placeholder:"請輸入爸爸的手機號碼"},domProps:{value:e.babaPhone},on:{input:function(a){a.target.composing||(e.babaPhone=a.target.value)}}})]),e._v(" "),s("a",{staticClass:"button3",attrs:{onclick:"window.print()"}},[e._v("友善列印")])])},staticRenderFns:[]};var c=s("VU/8")({name:"HelloWorld",data:function(){return{myName:null,isBaba:!1,isMama:!1,isChild:!0,isCare:!1,babaPhone:"",mamaPhone:"",childPhone:"",carePhone:"",showNumber:!0,showQR:!1}}},t,!1,function(e){s("8BJh")},"data-v-09443c87",null).exports;i.a.use(n.a);var h=new n.a({routes:[{path:"/",name:"HelloWorld",component:c}]}),l=s("Z3T5");i.a.use(l.a,{config:{id:"UA-26178243-15"}}),i.a.config.productionTip=!1,new i.a({el:"#app",router:h,components:{App:r},template:"<App/>"})},mVYm:function(e,a){}},["NHnr"]);
//# sourceMappingURL=app.ea8a7ed5dab4ba584d77.js.map