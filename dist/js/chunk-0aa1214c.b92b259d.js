(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0aa1214c"],{2333:function(t,n,e){"use strict";e("4fbb")},"4fbb":function(t,n,e){},e6e6:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.ready?e("div",{staticClass:"page-container"},[e("div",{staticClass:"content"},[e("a-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[e("a-col",{attrs:{xs:22,sm:22,md:20,lg:18,xl:16,xxl:14}},[e("div",{staticClass:"col-container"},[e("div",{staticClass:"title logo"},[e("span",[t._v(t._s(t.info.title))]),e("span",{staticClass:"dark",on:{click:function(n){return t.darkAction()}}},[e("c-icon",{attrs:{type:"icon-dark"}})],1)]),e("div",{staticClass:"color-row bg-grey slogan"},[t._v(" "+t._s(t.info.slogan)+" ")]),e("div",{staticClass:"color-row bg-light-grey nav"},t._l(t.info.nav.items,(function(n){return e("span",{key:n.id,on:{click:function(e){return t.$router.push({path:n.value})}}},[t._v(" "+t._s(n.extend?n.extend.name:n.code)+" ")])})),0),e("div",{staticClass:"color-row bg-grey site"},t._l(t.info.site.items,(function(n){return e("span",{key:n.id,on:{click:function(e){return t.turnUrl(n.value)}}},[t._v(" "+t._s(n.extend?n.extend.name:n.code)+" ")])})),0),e("div",{staticClass:"color-row bg-light-grey social"},t._l(t.info.social.items,(function(n){return e("span",{key:n.id,attrs:{title:"item.code"},on:{click:function(e){return t.turnUrl(n.value)}}},[e("c-icon",{attrs:{type:"icon-"+n.extend.icon}})],1)})),0),e("div",{staticClass:"info"},[e("div",{staticClass:"beian"},[e("svg",{attrs:{width:"200",height:"11.52"},on:{click:function(n){return t.turnUrl("https://beian.miit.gov.cn/")}}},[e("text",{attrs:{"dominant-baseline":"baseline","font-size":"10",y:"9.52",x:"200","text-anchor":"end"}},[t._v(" "+t._s(t.$config.beian)+" ")])])]),e("div",{staticClass:"beian"},[e("svg",{attrs:{width:"200",height:"11.52"},on:{click:function(n){return t.turnUrl("http://www.beian.gov.cn/portal/registerSystemInfo?recordcode="+t.$config.policeBeianNum)}}},[e("text",{attrs:{"dominant-baseline":"baseline","font-size":"10",y:"9.52",x:"200","text-anchor":"end"}},[t._v(" "+t._s(t.$config.policeBeian)+" ")])])]),e("div",{staticClass:"run-time"},[e("svg",{attrs:{width:"300",height:"11.52"}},[e("text",{attrs:{"dominant-baseline":"baseline","font-size":"10",y:"9.52",x:"300","text-anchor":"end"}},[t._v(" CODE && DESIGN BY CONTEMAN ©"+t._s(t.$config.siteCreateTime)+"-"+t._s(t.$dayjs().format("YYYY"))+" ")])])])])])])],1)],1)]):t._e()},a=[],s=e("5530"),c=(e("b64b"),e("ac0d")),o=e("2f62"),r=e("9fb0"),l={name:"Landpage",mixins:[c["b"]],data:function(){return{spaceSize:20}},computed:{ready:function(){return Object.keys(this.info).length>0}},methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])("app",{darkAction:r["c"]})),{},{turnUrl:function(t){return window.location.href=t,!0}})},d=l,u=(e("2333"),e("2877")),f=Object(u["a"])(d,i,a,!1,null,"3847b853",null),b=f.exports;n["default"]=b}}]);