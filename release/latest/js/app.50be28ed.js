(function(e){function t(t){for(var o,l,i=t[0],r=t[1],c=t[2],m=0,u=[];m<i.length;m++)l=i[m],n[l]&&u.push(n[l][0]),n[l]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);d&&d(t);while(u.length)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],o=!0,i=1;i<a.length;i++){var r=a[i];0!==n[r]&&(o=!1)}o&&(s.splice(t--,1),e=l(l.s=a[0]))}return e}var o={},n={app:0},s=[];function l(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=o,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(a,o,function(t){return e[t]}.bind(null,o));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=r;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var o=a("1356"),n=a.n(o);n.a},1356:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var o=a("2b0e"),n=a("bb71");a("da64");o["a"].use(n["a"],{iconfont:"md"});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("div",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[e._v("メモペ")]),a("v-spacer"),a("v-snackbar",{attrs:{"multi-line":e.mode,timeout:e.timeout,top:e.y},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n          "+e._s(e.text)+"\n          "),a("v-btn",{attrs:{color:"blue",flat:""},on:{click:function(t){e.snackbar=!1}}},[e._v("\n            Close\n          ")])],1),a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-btn",{staticClass:"mb-2",attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[e._v("メモ追加")]),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"#"},model:{value:e.editedItem.rowNo,callback:function(t){e.$set(e.editedItem,"rowNo",t)},expression:"editedItem.rowNo"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"A列"},model:{value:e.editedItem.columnA,callback:function(t){e.$set(e.editedItem,"columnA",t)},expression:"editedItem.columnA"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"B列"},model:{value:e.editedItem.columnB,callback:function(t){e.$set(e.editedItem,"columnB",t)},expression:"editedItem.columnB"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"C列"},model:{value:e.editedItem.columnC,callback:function(t){e.$set(e.editedItem,"columnC",t)},expression:"editedItem.columnC"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"D列"},model:{value:e.editedItem.columnD,callback:function(t){e.$set(e.editedItem,"columnD",t)},expression:"editedItem.columnD"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){return e.close(t)}}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){return e.save(t)}}},[e._v("Save")])],1)],1)],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,search:e.search,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.rowNo))]),a("td",{staticClass:"text-xs"},[a("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.item.columnA,expression:"props.item.columnA",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],attrs:{flat:"",small:""}},[e._v("\n              "+e._s(t.item.columnA)+"\n            ")])],1),a("td",{staticClass:"text-xs"},[a("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.item.columnB,expression:"props.item.columnB",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],attrs:{flat:"",small:""}},[e._v("\n              "+e._s(t.item.columnB)+"\n            ")])],1),a("td",{staticClass:"text-xs"},[a("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.item.columnC,expression:"props.item.columnC",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],attrs:{flat:"",small:""}},[e._v("\n              "+e._s(t.item.columnC)+"\n            ")])],1),a("td",{staticClass:"text-xs"},[a("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.item.columnD,expression:"props.item.columnD",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],attrs:{flat:"",small:""}},[e._v("\n              "+e._s(t.item.columnD)+"\n            ")])],1),a("td",{staticClass:"justify-center layout px-0"},[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){e.editItem(t.item)}}},[e._v("\n              edit\n            ")]),a("v-icon",{attrs:{small:""},on:{click:function(a){e.deleteItem(t.item)}}},[e._v("\n              delete\n            ")])],1)]}}])},[a("template",{slot:"no-data"},[a("v-btn",{attrs:{color:"normal"},on:{click:e.initialize}},[e._v("Reset")])],1)],2)],1)])],1)},l=[],i={name:"App",data:()=>({dialog:!1,search:"",headers:[{text:"#",align:"right",sortable:!0,value:"rowNo"},{text:"A",value:"columnA"},{text:"B",value:"columnB"},{text:"C",value:"columnC"},{text:"D",value:"columnD"},{text:"アクション",value:"name",sortable:!1}],items:[],editedIndex:-1,editedItem:{rowNo:"",columnA:"",columnB:"",columnC:"",columnD:""},defaultItem:{rowNo:"",columnA:"",columnB:"",columnC:"",columnD:""},snackbar:!1,y:"top",x:null,mode:!1,timeout:2e3,text:"コピーしました！"}),computed:{formTitle(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog(e){e||this.close()}},created(){this.initialize()},methods:{initialize(){var e=localStorage.getItem("memo1");this.items=e?JSON.parse(e):[{rowNo:"1",columnA:"入力した文字を",columnB:"クリックすると",columnC:"クリップボードに",columnD:"コピーされます"},{rowNo:"2",columnA:"電車賃メモ",columnB:"恵比寿駅 ->",columnC:"銀座駅",columnD:"195円"},{rowNo:"3",columnA:"URLメモ",columnB:"https://google.com/",columnC:"https://amazon.co.jp/",columnD:"http://kakaku.com/"}]},editItem(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem(e){const t=this.items.indexOf(e);confirm("Are you sure you want to delete this item?")&&this.items.splice(t,1),this._saveToLocalStorage(this.items)},close(){this.dialog=!1,setTimeout(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1},300)},save(){this.editedIndex>-1?Object.assign(this.items[this.editedIndex],this.editedItem):this.items.push(this.editedItem),this._saveToLocalStorage(this.items),this.close()},_saveToLocalStorage(e){var t=JSON.stringify(e);localStorage.setItem("memo1",t)},onCopy:function(){this.snackbar=!0}}},r=i,c=(a("034f"),a("2877")),d=a("6544"),m=a.n(d),u=a("7496"),p=a("8336"),v=a("b0af"),f=a("99d9"),b=a("12b2"),x=a("a523"),h=a("8fea"),g=a("169a"),y=a("0e8f"),C=a("132d"),I=a("a722"),_=a("2db4"),w=a("9910"),k=a("2677"),N=a("71d9"),A=a("2a7f"),O=Object(c["a"])(r,s,l,!1,null,null,null);O.options.__file="App.vue";var S=O.exports;m()(O,{VApp:u["a"],VBtn:p["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:b["a"],VContainer:x["a"],VDataTable:h["a"],VDialog:g["a"],VFlex:y["a"],VIcon:C["a"],VLayout:I["a"],VSnackbar:_["a"],VSpacer:w["a"],VTextField:k["a"],VToolbar:N["a"],VToolbarTitle:A["a"]});var V=a("4eb5"),D=a.n(V);o["a"].use(D.a),o["a"].config.productionTip=!1,new o["a"]({render:e=>e(S)}).$mount("#app")}});
//# sourceMappingURL=app.50be28ed.js.map