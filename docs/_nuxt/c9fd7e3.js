(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{524:function(e,n,t){"use strict";t.r(n);t(71),t(3),t(11),t(32),t(34);var o={name:"KyberMap",props:["items","mapId","current_x","current_y"],data:function(){return{mymap:null,current:null,comerceIcon:null,userIcon:null,currentIcon:null,level_1:null,level_2:null,level_3:null}},watch:{current_x:function(e){console.log("change!!!",e),this.mymap.setView([e,this.current_y],17),L.marker([e,this.current_y],{icon:this.currentIcon}).addTo(this.mymap)},current_y:function(e){this.mymap.setView([this.current_x,e],17),L.marker([this.current_x,e],{icon:this.currentIcon}).addTo(this.mymap)},items:function(e){console.log("ITEMS"),this.reloadItems(e)}},mounted:function(){this.mymap=L.map("map-wrap_component_".concat(this.mapId)).setView([this.current_x,this.current_y],17),L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',tileSize:512,maxZoom:18,zoomOffset:-1,id:"mapbox/streets-v11",accessToken:"pk.eyJ1IjoibmFjaG9hbSIsImEiOiJja3dnenE4eWQwdHNkMnFuc2Nyamg1amxkIn0.uo9JTabPMLxc9lyKQL1Cvg"}).addTo(this.mymap);var e=.4,n=L.Icon.extend({options:{iconUrl:"comerce_icon.png",iconSize:[56,70.4]}}),t=L.Icon.extend({options:{iconUrl:"user_icon.png",iconSize:[55.6,69.2]}}),o=L.Icon.extend({options:{iconUrl:"current.png",iconSize:[32,101*e]}}),c=L.Icon.extend({options:{iconUrl:"level_1_icon.png",iconSize:[53.2,131*e]}}),r=L.Icon.extend({options:{iconUrl:"level_2_icon.png",iconSize:[53.2,131*e]}}),l=L.Icon.extend({options:{iconUrl:"level_3_icon.png",iconSize:[53.2,131*e]}});this.level_1=new c,this.level_2=new r,this.level_3=new l,this.comerceIcon=new n,this.userIcon=new t,this.currentIcon=new o,this.current=L.marker([this.current_x,this.current_y],{icon:this.currentIcon}).addTo(this.mymap),this.items&&this.reloadItems(this.items),console.log(this.items)},methods:{reloadItems:function(e){var n=this;e.forEach((function(e){var t=L.marker(e.coordinates,{icon:"1"===e.type?n.level_1:"2"===e.type?n.level_2:n.level_3}).addTo(n.mymap).bindPopup('<span style="font-weight: bold;font-size: 15px;">'.concat(e.name,"</span><br/><br/><span>").concat(e.time,"</span>"));t.on("click",(function(o){t.openPopup(),n.$emit("click_item",e)}))}))}}},c=t(24),component=Object(c.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"map-wrap_component_"+this.mapId}})}),[],!1,null,"b15629c0",null);n.default=component.exports}}]);