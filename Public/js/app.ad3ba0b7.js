(function(t){function e(e){for(var a,r,c=e[0],s=e[1],l=e[2],u=0,d=[];u<c.length;u++)r=c[u],o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0dee7b":"bb59bbc2","chunk-2d231032":"c3ede0f5","chunk-57b87584":"2e34906f"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-57b87584":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2d0dee7b":"31d6cfe0","chunk-2d231032":"31d6cfe0","chunk-57b87584":"066d78bb"}[t]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){r[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"0e55":function(t,e,n){},"22d7":function(t,e,n){"use strict";var a=n("0e55"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("NavBar",{attrs:{routes:t.links}}),n("router-view",{staticStyle:{"margin-top":"6em"}}),n("v-footer",{attrs:{height:"auto",color:"#562011",dark:""}},[n("v-container",{attrs:{"grid-list-lg":"","grid-list-md":""}},[n("v-row",[n("v-col",t._l(t.socialmedias,function(e,a){return n("v-btn",{key:a,staticClass:"btn",attrs:{text:"",icon:"",href:e.link,target:"_blank"}},[n("v-icon",{attrs:{color:"#dba238"}},[t._v("\n              "+t._s(e.icon)+" \n            ")])],1)}),1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",align:"center",md:"3",sm:"8",lg:"4"}},[n("v-img",{staticStyle:{"border-radius":"calc(.5vw + .5vh)"},attrs:{src:"https://i.ibb.co/KmGG4H8/Logo-Uninorte-Bquilla.jpg","max-width":"50%","max-height":"100%"}})],1),n("v-col",{staticStyle:{"margin-top":"25px"},attrs:{cols:"12",align:"center",md:"3",sm:"8",lg:"4"}},[n("v-img",{staticStyle:{"border-radius":"calc(.5vw + .5vh)"},attrs:{src:"https://i.ibb.co/StnCxkv/image1.jpg","max-width":"80%","max-height":"100%"}})],1)],1)],1)],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{dark:"",app:"",src:"https://i.ibb.co/zQGmWnT/Captura-de-pantalla-de-2019-10-04-23-44-25.png"},scopedSlots:t._u([{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"background-color":"transparent","v-if":t.openCloseSideBar}},t._l(t.routes,function(e,a){return n("v-tab",{key:a,staticClass:"text-capitalize hidden-sm-and-down",attrs:{to:e.to,title:e.title}},[t._v("\n          "+t._s(e.name)+"\n        ")])}),1)]},proxy:!0}])},[n("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up btn",on:{click:function(e){t.openCloseSideBar=!t.openCloseSideBar}}}),n("v-spacer"),n("v-toolbar-title",[n("v-img",{attrs:{src:"https://i.ibb.co/FzDP6PW/Sin-t-tulo-2.png",width:"15vw"}})],1),n("v-spacer")],1),t.openCloseSideBar?n("SideBar",{attrs:{routes:t.routes,openCloseSideBar:t.openCloseSideBar},on:{"update:openCloseSideBar":function(e){t.openCloseSideBar=e},"update:open-close-side-bar":function(e){t.openCloseSideBar=e}}}):t._e()],1)},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{absolute:"",temporary:"",value:t.openCloseSideBar}},[n("v-list",{attrs:{nav:"",dense:"",rounded:""}},[n("v-list-item-group",{staticClass:"adjust-font",attrs:{"active-class":"brown--text \n                      text--accent-4"},model:{value:t.items,callback:function(e){t.items=e},expression:"items"}},[n("v-img",{staticStyle:{margin:"30px auto 30px auto"},attrs:{src:"https://i.ibb.co/Bg3xkB0/icono.png","max-width":"64","max-height":"64"}}),t._l(t.routes,function(e){return n("v-list-item",{key:e.name,attrs:{to:e.to}},[n("v-list-item-icon",[n("v-icon",[t._v("\n              "+t._s(e.icon)+"\n            ")])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-capitalize"},[t._v("\n              "+t._s(e.name)+"\n            ")])],1)],1)})],2)],1)],1)],1)},l=[],u={name:"SideBar",props:["openCloseSideBar","routes"],data:function(){return{items:null}},watch:{items:function(){this.$emit("update:openCloseSideBar",!this.openCloseSideBar)}}},d=u,p=n("2877"),f=Object(p["a"])(d,s,l,!1,null,null,null),v=f.exports,m={name:"NavBar",props:["routes"],data:function(){return{openCloseSideBar:!1}},computed:{scrollTags:function(){var t=this;return this.routes.filter(function(e,n){return n<t.routes.length-2})},buttons:function(){var t=this;return this.routes.filter(function(e,n){return n>t.routes.length})}},components:{SideBar:v}},b=m,h=Object(p["a"])(b,i,c,!1,null,null,null),g=h.exports,w={name:"App",data:function(){return{socialmedias:[{link:"https://www.instagram.com/kribicultura/",icon:"mdi-instagram"},{link:"",icon:"mdi-facebook"},{link:"",icon:"mdi-twitter"}],links:[{name:"Inicio",to:"/",icon:"mdi-home",title:""},{name:"Curso",to:"/curso",icon:"mdi-teach",title:""},{name:"Bentorriyo",to:"/bentorriyo",icon:"mdi-cart",title:"Tienda / Store"},{to:"/chakero",name:"Chakero",title:"Noticias",icon:"mdi-newspaper"},{to:"/creditos",name:"Creditos",title:"",icon:"mdi-account-group"}]}},components:{NavBar:g}},y=w,k=(n("034f"),Object(p["a"])(y,r,o,!1,null,null,null)),_=k.exports,C=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"begin"}},[t._m(0),n("div",{attrs:{id:"contenido"}},[t._m(1),n("v-row",{staticStyle:{"background-color":"#562011","padding-top":"2vh","padding-bottom":"2vh"},attrs:{row:"",wrap:"",justify:"center"}},t._l(t.letras,function(e,a){return n("v-col",{key:a},[n("v-btn",{staticClass:"btn",staticStyle:{"font-size":"calc(1vh + 1vw)",cursor:"pointer","font-weight":"bold"},attrs:{fab:"",dark:"",small:"",color:"brown darken-2"},on:{click:function(n){t.letraSeleccionada=e}}},[t._v("\n            "+t._s(e)+"\n          ")])],1)}),1),n("v-container",{attrs:{id:"diccionario",fluid:"","grid-list-md":"","grid-list-lg":""}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{align:"center",cols:"6",sm:"6",xs:"6",md:"2",lg:"2"}},[n("v-card",{staticStyle:{"font-weight":"bold","font-size":"calc(3vh + 3vw)"},attrs:{color:"#562011",dark:"",width:"12vw"}},[n("div",[t._v("\n                "+t._s(t.letraSeleccionada)+"\n              ")])])],1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"8",xs:"4",md:"4"}},[n("v-text-field",{attrs:{label:"consultar",solo:"",rounded:"",dense:"","append-icon":"mdi-send-circle",placeholder:"consultar",color:"#562011"},on:{keyup:function(e){return t.setAutoCompletado(t.valueTextField)}},model:{value:t.valueTextField,callback:function(e){t.valueTextField=e},expression:"valueTextField"}})],1)],1)],1),n("v-container",[n("v-row",{attrs:{justify:"center"}},t._l(t.getPalabrasPorLetra,function(e,a){return n("v-col",{key:a,attrs:{md:"3",xs:"6",sm:"4"}},[n("v-btn",{staticClass:"btn",staticStyle:{color:"#562011","font-weight":"bold"},attrs:{color:"#E09518"},on:{click:function(n){return t.mostrarModal(e.palabra)}}},[t._v("\n              "+t._s(e.palabra)+"\n            ")])],1)}),1)],1)],1),n("Modal",{attrs:{open:t.openModal}})],1)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"imagenInicio"}},[a("img",{attrs:{src:n("d084"),alt:"logo kribi"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contenedor"}},[n("div",{staticStyle:{"margin-bottom":"5vh"},attrs:{id:"texto"}},[n("label",{staticClass:"tituloDescripcion"},[t._v("DICCIONARIO PALENQUERO")]),n("div",[n("label",{staticClass:"contenidoDescripcion"},[t._v("\n            El diccionario virtual de la Lengua Palenquera "),n("span",{staticStyle:{"font-weight":"bold"}},[t._v('"Kribí"')]),t._v("\n            es una herramienta Web, la cual permite a sus usuarios la búsqueda y práctica para el aprendizaje\n            de forma rapida y precisa del léxico Palenquero\n          ")])])])])}],S=n("cebc"),P=n("2f62"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"60vw"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-icon",t._g({ref:"activate"},a))]}}])},[n("v-card",[n("v-card-title",{staticClass:"titulo"},[n("v-col",{attrs:{justify:"center"}},[n("div",{staticClass:"white--text",attrs:{id:"titulo"}},[t._v("\n          "+t._s(t.getPalabra)+"\n        ")])])],1),n("v-card-text",[n("v-container",[n("v-row",{staticClass:"white--text definicion",attrs:{justify:"center",align:"center",wrap:""}},[t._v("\n          "+t._s(t.getDefinicion)+"\n        ")]),t._l(t.getEjemplos,function(e,a){return n("v-row",{key:a,staticClass:"white--text ejemplo",attrs:{justify:"center",align:"center"}},[t._v("\n          "+t._s(e.ejemplo)+"\n        ")])})],2)],1)],1)],1)},B=[],E={name:"Modal",props:["open"],watch:{open:function(t){this.$refs.activate.$el.click()}},computed:Object(S["a"])({},Object(P["b"])(["getPalabra","getDefinicion","getEjemplos"]))},L=E,T=(n("22d7"),Object(p["a"])(L,O,B,!1,null,null,null)),A=T.exports,N={name:"Home",data:function(){return{letras:["A","B","CH","D","E","F","G","I","J","K","L","M","N","Ñ","O","P","R","S","T","U"],openModal:!1,letra:"A",valueTextField:""}},computed:Object(S["a"])({getInformacion:function(){return console.log(this.informationType),this.information[this.informationType]},letraSeleccionada:{get:function(){return this.letra},set:function(t){this.letra=t,this.setLetraParaPalabras(t)}}},Object(P["b"])(["getPalabrasPorLetra","getAutoCompletado"])),methods:Object(S["a"])({},Object(P["c"])(["setLetraParaPalabras","setPalabra","setAutoCompletado"]),{mostrarModal:function(t){this.setPalabra(t),this.openModal=!this.openModal}}),components:{Modal:A}},M=N,D=(n("cccb"),Object(p["a"])(M,x,j,!1,null,null,null)),R=D.exports;a["default"].use(C["a"]);var $=new C["a"]({mode:"history",routes:[{path:"/",name:"Home",component:R},{path:"/curso",name:"Curso",component:function(){return n.e("chunk-57b87584").then(n.bind(null,"9686"))}},{path:"/chakero",name:"Chakero",component:function(){return n.e("chunk-2d0dee7b").then(n.bind(null,"8849"))}},{path:"/creditos",name:"Creditos",component:function(){return n.e("chunk-2d231032").then(n.bind(null,"ef72"))}},{path:"/bentorriyo",name:"Bentorriyo",component:function(){return n.e("chunk-2d0dee7b").then(n.bind(null,"8849"))}}]}),F=n("7cc3");a["default"].use(P["a"]);var q=new P["a"].Store({state:{palabra:"Palabra",definicion:"Definicion",ejemplos:[],listaPalabras:[],letra:""},mutations:{setLetraParaPalabras:function(t,e){e.toLowerCase()!=t.letra.toLowerCase()&&F["a"].getPalabrasPorLetra(e).then(function(e){t.listaPalabras=e})},setPalabra:function(t,e){e.toLowerCase()!=t.palabra.toLowerCase()&&F["a"].buscarPalabra(e).then(function(e){t.palabra=e.palabra,t.definicion=e.definicion,t.ejemplos=e.ejemplos})},setAutoCompletado:function(t,e){e.length>2?F["a"].autoCompletado(e).then(function(e){t.listaPalabras=e}):t.listaPalabras=[]}},getters:{getEjemplos:function(t){return t.ejemplos},getDefinicion:function(t){return t.definicion},getPalabra:function(t){return t.palabra},getPalabrasPorLetra:function(t){return t.listaPalabras},getLetra:function(t){return t.letra}}}),I=n("9483");Object(I["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var z=n("ce5b"),H=n.n(z);n("bf40");a["default"].config.productionTip=!1;var G={};a["default"].use(H.a),a["default"].use(P["a"]),new a["default"]({router:$,store:q,render:function(t){return t(_)},vuetify:new H.a(G)}).$mount("#app")},"64a9":function(t,e,n){},"7cc3":function(t,e,n){"use strict";n("96cf");var a=n("3b8d"),r=n("d225"),o=n("b0b4"),i=n("bc3a"),c=n.n(i),s=n("aeb1"),l=n.n(s),u="5cf2e66408166968da3b30b4",d="http://167.71.249.170:5000/",p=function(){function t(){Object(r["a"])(this,t)}return Object(o["a"])(t,null,[{key:"getPalabrasPorLetra",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("".concat(d,"buscar/lista_palabras?letra=").concat(e,"&key=").concat(u));case 2:return n=t.sent,t.abrupt("return",n.data.response.map(function(t){return{palabra:t}}));case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"buscarPalabra",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("".concat(d,"buscar/palabra?palabra=").concat(e,"&key=").concat(u));case 2:return n=t.sent,t.abrupt("return",{definicion:n.data.definicion,ejemplos:n.data.ejemplos,palabra:n.data.palabra});case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"descargarCurso",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:c.a.get("".concat(d,"download/curso?key=").concat(u),{responseType:"blob"}).then(function(t){var e=t.headers["content-type"];l()(t.data,"Curso Lengua Palenque.pdf",e)});case 1:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"autoCompletado",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("".concat(d,"buscar/palabra/autocompletado?palabra=").concat(e,"&key=").concat(u));case 2:return n=t.sent,t.abrupt("return",n.data.response.map(function(t){return{palabra:t}}));case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()}]),t}();e["a"]=p},cccb:function(t,e,n){"use strict";var a=n("d563"),r=n.n(a);r.a},d084:function(t,e,n){t.exports=n.p+"img/portada.b1afbdcb.jpg"},d563:function(t,e,n){}});
//# sourceMappingURL=app.ad3ba0b7.js.map