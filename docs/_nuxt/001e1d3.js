(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{631:function(t,e,c){"use strict";c.r(e);var n={name:"BlueDialog",props:["open","title","desc","accept_text"],data:function(){return{dialog:!1}},watch:{open:function(t){this.dialog=t},dialog:function(t){!1===t&&this.$emit("close")}},methods:{accept:function(){this.dialog=!1,this.$emit("accept"),this.dialog=!1}}},o=c(24),l=c(49),r=c.n(l),d=c(498),v=c(216),_=c(97),h=c(514),f=c(518),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[c("v-card",[c("v-card-title",{staticClass:"headline"},[t._v("\n      "+t._s(this.title)+"\n    ")]),t._v(" "),c("v-card-text",[t._v(t._s(this.desc))]),t._v(" "),c("v-card-actions",[c("v-spacer"),t._v(" "),c("v-btn",{attrs:{color:"evo_rojo_coral darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Cancel\n      ")]),t._v(" "),c("v-btn",{attrs:{color:"evo_azul_turquesa darken-1",text:""},on:{click:t.accept}},[t._v("\n        "+t._s(this.accept_text)+"\n      ")])],1)],1)],1)}),[],!1,null,"18fe7240",null);e.default=component.exports;r()(component,{VBtn:d.a,VCard:v.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VDialog:h.a,VSpacer:f.a})}}]);