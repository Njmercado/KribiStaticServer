(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0dee7b":"960da10c","chunk-3ca4e394":"75b331ea","chunk-577d78ab":"13b9d6fa","chunk-a129ddb8":"13e63323"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-3ca4e394":1,"chunk-577d78ab":1,"chunk-a129ddb8":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0dee7b":"31d6cfe0","chunk-3ca4e394":"36801223","chunk-577d78ab":"2cfcdbd5","chunk-a129ddb8":"d21b6671"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],p.parentNode.removeChild(p),n(i)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"0e55":function(e,t,n){},"1e3b":function(e,t,n){"use strict";var a=n("4c88"),r=n.n(a);r.a},"22d7":function(e,t,n){"use strict";var a=n("0e55"),r=n.n(a);r.a},"3ff2":function(e,t,n){},"4c88":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("NavBar",{attrs:{routes:e.links}}),n("transition",{attrs:{name:"component-fade",mode:"out-in"}},[n("router-view",{staticStyle:{margin:"calc(8vh + 3vw) auto",height:"100%"}})],1),n("Footer")],1)},o=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app-bar",{attrs:{src:"https://i.ibb.co/zQGmWnT/Captura-de-pantalla-de-2019-10-04-23-44-25.png",dark:"",app:"","hide-on-scroll":"",dense:""},scopedSlots:e._u([{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"background-color":"red darken-4"}},[n("v-row",{attrs:{justify:"center"}},e._l(e.routes,(function(t,a){return n("v-col",{key:a},[n("v-btn",{key:a,staticClass:"text-capitalize",staticStyle:{"text-decoration":"none","font-weight":"bold"},attrs:{to:t.to,title:t.title,small:"",text:""}},[e._v("\n              "+e._s(t.name)+"\n            ")])],1)})),1)],1)]},proxy:!0}])},[n("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up btn",on:{click:function(t){t.stopPropagation(),e.openCloseSideBar=!e.openCloseSideBar}}}),n("v-spacer"),n("v-toolbar-title",[n("v-img",{attrs:{src:"https://i.ibb.co/FzDP6PW/Sin-t-tulo-2.png",width:"6em"}})],1),n("v-spacer")],1),n("SideBar",{attrs:{routes:e.routes,open:e.openCloseSideBar}})],1)},c=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.openClose,callback:function(t){e.openClose=t},expression:"openClose"}},[n("v-list",{attrs:{nav:"",dense:"",rounded:""}},[n("v-list-item-group",{staticClass:"adjust-font",attrs:{"active-class":"brown--text text--accent-4"},model:{value:e.items,callback:function(t){e.items=t},expression:"items"}},[n("v-img",{staticStyle:{margin:"30px auto 30px auto"},attrs:{src:"https://i.ibb.co/Bg3xkB0/icono.png","max-width":"64","max-height":"64"}}),e._l(e.routes,(function(t){return n("v-list-item",{key:t.name,attrs:{to:t.to}},[n("v-list-item-icon",[n("v-icon",[e._v("\n             "+e._s(t.icon)+"\n           ")])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-capitalize"},[e._v("\n             "+e._s(t.name)+"\n           ")])],1)],1)}))],2)],1)],1)},u=[],d={name:"SideBar",props:["open","routes"],data:function(){return{items:null,openClose:!1}},watch:{open:function(e){this.openClose=e||!0}}},p=d,m=n("2877"),f=Object(m["a"])(p,l,u,!1,null,null,null),v=f.exports,b={name:"NavBar",props:["routes"],data:function(){return{openCloseSideBar:!1}},mounted:function(){var e="undefined"!==typeof window.orientation||-1!==navigator.userAgent.indexOf("IEMobile");if(e){var t=document.querySelector("div.v-toolbar__extension");t.style.height="0px"}},computed:{scrollTags:function(){var e=this;return this.routes.filter((function(t,n){return n<e.routes.length-2}))},buttons:function(){var e=this;return this.routes.filter((function(t,n){return n>e.routes.length}))}},components:{SideBar:v}},g=b,h=Object(m["a"])(g,s,c,!1,null,null,null),y=h.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{attrs:{height:"auto",color:"#562011",dark:""}},[n("v-container",{attrs:{"grid-list-lg":"","grid-list-md":""}},[n("v-row",[n("v-col",e._l(e.socialmedias,(function(t,a){return n("v-btn",{key:a,staticClass:"btn",attrs:{href:t.link,target:"_blank",text:"",icon:""}},[n("v-icon",{attrs:{color:"#dba238"}},[e._v(e._s(t.icon))])],1)})),1)],1),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{align:"center"}},[n("v-img",{staticStyle:{"border-radius":"8px"},attrs:{src:"https://i.ibb.co/StnCxkv/image1.jpg","max-width":"16em"}})],1)],1)],1)],1)},j=[],O={name:"",data:function(){return{socialmedias:[{link:"https://www.instagram.com/kribicultura/",icon:"mdi-instagram"},{link:"",icon:"mdi-facebook"},{link:"",icon:"mdi-twitter"}]}},props:[],watch:{},methods:{},components:{}},k=O,x=Object(m["a"])(k,w,j,!1,null,null,null),P=x.exports,C=n("2f62");function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A={name:"App",data:function(){return{links:[{name:"Inicio",to:"/",icon:"mdi-home",title:""},{name:"Juegos",to:"/juegos",icon:"mdi-teach",title:""},{name:"Bentorriyo",to:"/bentorriyo",icon:"mdi-cart",title:"Tienda / Store"},{to:"/chakero",name:"Chakero",title:"Noticias",icon:"mdi-newspaper"},{to:"/creditos",name:"Creditos",title:"",icon:"mdi-account-group"}],news:[]}},computed:S({},Object(C["b"])(["getArticles"])),methods:S({},Object(C["c"])(["setArticles"])),components:{NavBar:y,Footer:P}},E=A,L=(n("034f"),Object(m["a"])(E,r,o,!1,null,null,null)),T=L.exports,z=n("8c4f"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticStyle:{"margin-top":"-8vh"}},[n("CarrouselNews",{attrs:{news:e.news}})],1),n("v-row",[n("v-row",{staticClass:"description",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"11"}},[n("label",{staticClass:"tituloDescripcion"},[e._v("DICCIONARIO PALENQUERO")]),n("br"),n("label",{staticClass:"contenidoDescripcion"},[e._v("\n          El diccionario virtual de la Lengua Palenquera, "),n("kbd",{staticStyle:{"background-color":"#c1000c"}},[e._v("Kribí")]),e._v(",\n          es una herramienta Web la cual permite a sus usuarios la búsqueda y práctica para el aprendizaje\n          de forma rapida y precisa del léxico Palenquero.\n        ")])])],1),n("v-row",{staticStyle:{"background-color":"var(--kribi-brown)",padding:"0 .8em 0 .8em"},attrs:{justify:"center"}},e._l(e.letras,(function(t,a){return n("v-col",{key:a},[n("v-btn",{staticClass:"btn letter",attrs:{color:"brown darken-2",fab:"",dark:"",small:""},on:{click:function(n){n.stopPropagation(),e.letra=t,e.someLetterButtonHasBeenPressed=!0}}},[e._v("\n          "+e._s(t)+"\n        ")])],1)})),1),n("v-container",{attrs:{fluid:"","grid-list-md":"","grid-list-lg":""}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{align:"center",cols:"6",xs:"6",sm:"6",md:"2",lg:"2"}},[n("v-avatar",{staticStyle:{"font-weight":"bold","font-size":"calc(3vh + 3vw)",color:"white"},attrs:{size:"116",color:"#562011"}},[e._v("\n            "+e._s(e.letra)+"\n          ")])],1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"8",xs:"4",md:"4"}},[n("v-text-field",{attrs:{label:"consultar",placeholder:"consultar",color:"#562011","append-icon":"mdi-send-circle",solo:"",rounded:"",dense:""},on:{keyup:function(t){e.setAutoCompletado(e.valueTextField),e.someLetterButtonHasBeenPressed=!1}},model:{value:e.valueTextField,callback:function(t){e.valueTextField=t},expression:"valueTextField"}})],1)],1)],1),n("v-container",[n("v-row",{attrs:{justify:"space-around",align:"center"}},e._l(e.getPalabrasPorLetra,(function(t,a){return n("v-col",{key:a,attrs:{cols:"12",xs:"12",sm:"12",md:"auto",lg:"auto",xl:"auto"},on:{click:function(n){return e.mostrarModal(t)}}},[n("Word",{attrs:{word:t,size:"16"}})],1)})),1),e.someLetterButtonHasBeenPressed?n("v-row",{staticStyle:{"margin-bottom":"-100px","margin-top":"96px"},attrs:{justify:"center"}},[n("v-btn",{staticStyle:{"margin-right":"8px"},attrs:{color:"#E09518",small:""},on:{click:function(t){return e.changePageOnWordsList(-1)}}},[n("v-icon",{attrs:{dark:""}},[e._v("arrow_left")])],1),n("v-chip",[e._v(e._s(e.listWordsPage))]),n("v-btn",{staticStyle:{"margin-left":"8px"},attrs:{color:"#E09518",small:"",disabled:e.isThereMoreWords},on:{click:function(t){return e.changePageOnWordsList(1)}}},[n("v-icon",{attrs:{dark:""}},[e._v("\n              arrow_right\n            ")])],1)],1):e._e()],1)],1),n("Modal",{attrs:{open:e.openModal,palabra:e.getPalabra,ejemplos:e.getEjemplos,definicion:e.getDefinicion,idioma:e.getIdioma}})],1)},B=[],D=(n("96cf"),n("3b8d")),R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"60em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-icon",e._g({ref:"activate"},a))]}}])},[n("v-card",[n("div",{staticClass:"idioma"},[n("kbd",{staticStyle:{"background-color":"#d99b29"}},[e._v(e._s(e.idioma))])]),n("v-card-title",{staticClass:"titulo"},[n("v-row",{attrs:{justify:"center"}},[n("div",{staticClass:"white--text",staticStyle:{"font-size":"1.2em"},attrs:{id:"titulo"}},[e._v("\n          "+e._s(e.palabra)+"\n        ")])])],1),n("v-card-text",[n("v-container",[e._l(e.definicion,(function(t,a){return n("v-chip",{key:a,staticClass:"ma-2",attrs:{color:"#d99b29",dark:""}},[e._v("\n          "+e._s(t)+"\n        ")])})),e.definicion.lenght>0&&e.ejemplos.length>0?n("v-divider"):e._e(),e._l(e.ejemplos,(function(t,a){return n("v-row",{key:a,staticClass:"white--text ejemplo",attrs:{justify:"center",align:"center"}},[e._v("\n          "+e._s(t)+"\n        ")])}))],2)],1)],1)],1)},N=[],M={name:"Modal",props:["open","ejemplos","definicion","palabra","idioma"],watch:{open:function(e){this.$refs.activate.$el.click()}}},q=M,W=(n("22d7"),Object(m["a"])(q,R,N,!1,null,null,null)),U=W.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticStyle:{cursor:"pointer",color:"#562011",margin:".8em","border-radius":"16px"},attrs:{color:"#E09518"}},[n("v-card-title",[n("label",{staticClass:"center-x",style:e.fontSize},[e._v(e._s(e.word))])])],1)},$=[],G={name:"Word",props:["word","size"],data:function(){return{fontSize:""}},created:function(){this.fontSize="font-size: ".concat(this.size,"px; font-weight: bold; cursor: pointer")}},H=G,J=(n("c959"),Object(m["a"])(H,F,$,!1,null,null,null)),K=J.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-carousel",{attrs:{height:"600",cycle:"","hide-delimiter-background":"","show-arrows-on-hover":""}},e._l(e.news,(function(t,a){return n("v-carousel-item",{key:a},[n("v-sheet",[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-img",{staticClass:"subheading",attrs:{src:t.photo,height:"100vh"}},[t.cover?e._e():n("v-row",{staticStyle:{height:"100vh",margin:"4em 4em 0 0"},attrs:{justify:"end",align:"center"}},[n("v-card",{staticStyle:{"border-radius":"8px"},attrs:{width:"16em",color:"grey darken-2"}},[n("v-card-title",{staticClass:"center",staticStyle:{"font-size":"1.2em"}},[e._v(e._s(t.title))]),n("v-card-text",{staticStyle:{"background-color":"grey","text-align":"start"}},[e._v(e._s(t.description))]),n("v-card-actions",{staticStyle:{"background-color":"grey"}},[n("v-btn",{staticClass:"btn text-lowercase",attrs:{color:"green darken-2",small:""},on:{click:function(n){return e.openNews(t.title)}}},[e._v("leer")])],1)],1)],1)],1)],1)],1)],1)})),1)},Q=[],Y=(n("28a5"),{name:"CarrouselNews",data:function(){return{openNew:!1,data:""}},props:["news"],watch:{},methods:{openNews:function(e){e=e.toLowerCase().split(" ").join("-"),this.$router.push("/chakero/".concat(e))}},components:{}}),Z=Y,X=(n("67d0"),Object(m["a"])(Z,V,Q,!1,null,null,null)),ee=X.exports;function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae={name:"Home",data:function(){return{letras:["A","B","CH","D","E","F","G","I","J","K","L","M","N","Ñ","O","P","R","S","T","U"],openModal:!1,letra:"A",valueTextField:"",news:[{photo:"https://res.cloudinary.com/kribi/image/upload/v1580701399/dictionary/introductory_dictionary_img.jpg",title:"Palenque",description:"Niños en palenque",link:"/",cover:!0}],listWordsPage:0,someLetterButtonHasBeenPressed:!1}},mounted:function(){var e=this;setTimeout((function(){e.getArticles.forEach((function(t){return e.news.push(t)}))}),1e3)},computed:ne({},Object(C["b"])(["getPalabrasPorLetra","getAutoCompletado","getPalabra","getDefinicion","getEjemplos","getIdioma","getArticles"]),{isThereMoreWords:function(){return!this.getPalabrasPorLetra.length>0}}),watch:{letra:function(e){this.setLetraParaPalabras({letra:e,page:0})}},methods:ne({},Object(C["c"])(["setLetraParaPalabras","setPalabra","setAutoCompletado","setArticles"]),{mostrarModal:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.setPalabra(t);case 2:return e.next=4,!this.openModal;case 4:this.openModal=e.sent;case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),changePageOnWordsList:function(e){this.listWordsPage=this.listWordsPage+e<0?0:this.listWordsPage+e,this.setLetraParaPalabras({letra:this.letra,page:this.listWordsPage})}}),components:{Modal:U,Word:K,CarrouselNews:ee}},re=ae,oe=(n("1e3b"),Object(m["a"])(re,I,B,!1,null,null,null)),ie=oe.exports,se=n("d225"),ce=n("b0b4"),le=n("bc3a"),ue=n.n(le),de="5cf2e66408166968da3b30b4",pe="https://dicapi.kribi.com.co/",me=function(){function e(){Object(se["a"])(this,e)}return Object(ce["a"])(e,null,[{key:"getPalabrasPorLetra",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ue.a.get("".concat(pe,"words/list/").concat(t,"/").concat(n),{headers:{"x-authorization-server":"Basic ".concat(de)}});case 2:return a=e.sent,e.abrupt("return",a.data.response);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"buscarPalabra",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ue.a.get("".concat(pe,"words/info/").concat(t),{headers:{"x-authorization-server":"Basic ".concat(de)}});case 2:return n=e.sent,n=n.data[0],e.abrupt("return",{definicion:n.definicion.split("/"),ejemplos:n.ejemplos,palabra:n.palabra,idioma:n.idioma});case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"autoCompletado",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ue.a.get("".concat(pe,"words/byWord/").concat(t),{headers:{"x-authorization-server":"Basic ".concat(de)}});case 2:return n=e.sent,e.abrupt("return",n.data.response);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"palabrasRandom",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ue.a.get("".concat(pe,"buscar/random?cantidad=").concat(t),{headers:{"x-authorization-server":"Basic ".concat(de)}});case 2:return n=e.sent,e.abrupt("return",n.data.response);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getArticles",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.a.get("".concat(pe,"articles"),{headers:{"x-authorization-server":"Basic ".concat(de)}});case 3:return t=e.sent,e.abrupt("return",t.data.data);case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0.response;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),fe=me,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"7",lg:"7",xs:"11",sm:"11"}},[n("v-card",{staticStyle:{"border-radius":"1em"}},[n("v-img",{attrs:{src:e.articleImage,"aspect-ratio":"3",height:"20em"}})],1)],1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"7",lg:"7",xs:"11",sm:"11"}},[n("div",{staticStyle:{"text-align":"start","font-size":"1.1em",padding:"0 8px"},domProps:{innerHTML:e._s(e.configMarked())}})])],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"7",lg:"7",xl:"7",xs:"11",sm:"11"}},[n("v-card",{staticStyle:{"border-radius":"1em"}},[n("div",{staticStyle:{"text-align":"start",padding:"1em"}},[n("v-avatar",{attrs:{size:"96",color:"#562011"}},[n("img",{attrs:{src:e.authorImage}})]),n("strong",{staticStyle:{"margin-left":"16px"}},[e._v(" "+e._s(e.author)+" ")])],1)])],1)],1)],1)},be=[];n("7514");function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ye=n("e0c1"),we={data:function(){return{data:"",author:"",authorImage:"",articleImage:"",timeToWaitAccordingToInternetSpeed:3e3}},props:["id"],computed:he({},Object(C["b"])(["getArticles"])),created:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.hasArticlesGottenFromServer()){e.next=7;break}return e.next=3,this.getArticlesFromServer();case 3:return e.t0=this.timeToWaitAccordingToInternetSpeed,e.next=6,navigator.connection.downlink;case 6:this.timeToWaitAccordingToInternetSpeed=e.t0/=e.sent;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),mounted:function(){var e=this;setTimeout((function(){var t=e.getArticleRoute();e.data=n("b47b")("./".concat(t.title.toLowerCase().split(" ").join("-"),".js")),e.author=t.author,e.authorImage=t.authorImage,e.articleImage=t.photo}),this.timeToWaitAccordingToInternetSpeed)},methods:he({configMarked:function(){return ye(this.data)},getArticleRoute:function(){var e=this;return this.getArticles.find((function(t){return t.title.toLowerCase().split(" ").join("-")===e.id}))},hasArticlesGottenFromServer:function(){return this.getArticles.lenght>0},getArticlesFromServer:function(){var e=this;fe.getArticles().then((function(t){e.setArticles(t)}))}},Object(C["c"])(["setArticles"]))},je=we,Oe=Object(m["a"])(je,ve,be,!1,null,null,null),ke=Oe.exports;a["default"].use(C["a"]);var xe=new C["a"].Store({state:{palabra:"Palabra",definicion:"Definicion",ejemplos:[],idioma:"Espanol",listaPalabras:[],letra:"",randomWords:"",articles:[]},mutations:{setLetraParaPalabras:function(e,t){t.letra.toLowerCase()!==e.letra.toLowerCase()&&fe.getPalabrasPorLetra(t.letra,t.page).then((function(t){e.listaPalabras=t}))},setPalabra:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.toLowerCase()===t.palabra.toLowerCase()){e.next=3;break}return e.next=3,fe.buscarPalabra(n).then((function(e){t.palabra=e.palabra,t.definicion=e.definicion,t.ejemplos=e.ejemplos,t.idioma=e.idioma}));case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),setAutoCompletado:function(e,t){t.length>2?fe.autoCompletado(t).then((function(t){e.listaPalabras=t})):e.listaPalabras=[]},setRandomWords:function(e,t){fe.palabrasRandom(t).then((function(t){e.randomWords=t.map((function(e){return{palabra:e.palabra.toLowerCase(),definicion:e.definicion.toLowerCase()}}))}))},setArticles:function(e,t){e.articles=t}},getters:{getEjemplos:function(e){return e.ejemplos},getDefinicion:function(e){return e.definicion},getPalabra:function(e){return e.palabra},getIdioma:function(e){return e.idioma},getPalabrasPorLetra:function(e){return e.listaPalabras},getLetra:function(e){return e.letra},getRandomWords:function(e){return e.randomWords},getArticles:function(e){return e.articles}}});(function(){fe.getArticles().then((function(e){xe.commit("setArticles",e)}))})(),a["default"].use(z["a"]);var Pe=[{path:"/",name:"Home",component:ie},{path:"/juegos",name:"Juegos",component:function(){return n.e("chunk-577d78ab").then(n.bind(null,"decf"))}},{path:"/chakero",name:"Chakero",component:function(){return n.e("chunk-a129ddb8").then(n.bind(null,"42a6"))}},{path:"/creditos",name:"Creditos",component:function(){return n.e("chunk-3ca4e394").then(n.bind(null,"ef72"))}},{path:"/bentorriyo",name:"Bentorriyo",component:function(){return n.e("chunk-2d0dee7b").then(n.bind(null,"8849"))}},{path:"/chakero/:id",name:"articulo",props:!0,component:ke}],Ce=new z["a"]({mode:"history",routes:Pe}),_e=n("9483");Object(_e["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Se=n("ce5b"),Ae=n.n(Se);n("bf40");a["default"].config.productionTip=!1;var Ee={};a["default"].use(Ae.a),a["default"].use(C["a"]),new a["default"]({router:Ce,store:xe,render:function(e){return e(T)},vuetify:new Ae.a(Ee)}).$mount("#app")},"64a9":function(e,t,n){},"67d0":function(e,t,n){"use strict";var a=n("3ff2"),r=n.n(a);r.a},"8fc9":function(e,t,n){},b47b:function(e,t,n){var a={"./jóvenes-con-visión-2020.js":"eee3","./una-ministra-cientifica.js":"c229"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="b47b"},c229:function(e,t){var n="\n# Una ministra científica\n<br/>\n<br/>\n\nUna de las apuesta más ambiciosas por parte del gobierno nacional de Colombia es la\ncreación del Ministerio de Ciencia, Tecnología e Innovación, por medio de la ley 1951 de\n2019. Esta nueva dependencia del ejecutivo, además de formular y desarrollar políticas\npúblicas dirigidas a la promoción y fortalecimiento del conocimiento científico y tecnológico,\ngenera altas expectativas sobre la inserción del país en los campos de la investigación e\ninnovación como también lo será el impacto en el crecimiento de la productividad,\ncompetitividad, calidad de la educación y la reducción de la desigualdad, principalmente en\nlas regiones de Colombia.  \n<br/>\n\nEste ministerio entrará en funcionamiento a partir del 24 de enero de 2020 con un\npresupuesto estimado en $393.000 millones de pesos colombianos. A partir de esa fecha\nreemplazará al Departamento Administrativo de Ciencias, Tecnología e Innovación\n(Colciencias), creado en 1968.  \n<br/>\n\nAdemás del anuncio de la creación del nuevo ministerio, llamó la atención el nombramiento\nde quien estará a cargo de la cartera, Mabel Gisela Torres Torres, una científica\nafrocolombiana originaria del municipio de Bahía Solano en el departamento del Chocó. Y\nno era para menos, se trata de la primera mujer y primer afrocolombiana en liderar un\nministerio desde su creación.  \n<br/>\n\nTorres es bióloga química de profesión, tiene un máster en microbiología (Universidad del\nValle), máster en innovación y emprendimiento (Universidad de Barcelona) y un doctorado\nen ciencias biológicas (Universidad de Guadalajara). Gran parte de su trayectoria ha estado\ndirigida a la investigación en la Universidad Tecnológica del Chocó “Diego Luis Córdoba”.\nTambién se ha destacado como directora de innovación y desarrollo en Selvaceútica y\ncomo directora y ejecutiva de Bioinnova. Durante los últimos meses, participó en la\ndenominada Misión Internacional de Sabio, abordando temáticas como el medio ambiente,\nla biotecnología y la bioeconomía.  \n<br/>\n\nEl nombramiento de Torres podría interpretarse como una manifestación de interés en el\nsector científico y tecnológico por parte del gobierno nacional. También es importante\ndestacar que su nombramiento no respondería a cuotas burocráticas con los partidos de\ncoalición debido a que la Ministra Torres no milita en ningún partido político. Lo anterior, da\nmuestra de que el ministerio está liderado por un equipo mayoritariamente técnico con\nexperiencia en los temas que son de su competencia. \n<br/>\n\nA pesar de las intenciones del gobierno por mejorar los indicadores en materia de ciencia,\ntecnología e innovación, Colombia aún tiene un enorme reto, comenzando con la inversión\npública en estas áreas que son fundamentales para el desarrollo de cualquier Estado.\nSegún datos del Banco Mundial, Colombia invirtió el 0,24% de su PIB en proyectos e\niniciativas de ciencias y tecnologías en 2017. Mientras que en países como Estados Unidos,\nBrasil, Chile y Japón, la inversión en este campo fue del 2,74%; 1,27%; 0,36% y 3,14%,\nrespectivamente. \n";e.exports=n},c959:function(e,t,n){"use strict";var a=n("8fc9"),r=n.n(a);r.a},eee3:function(e,t){var n="\n## Jóvenes con visión 2020\n<br/>\n\nEl futuro de una sociedad está determinado en cómo configure su presente. Los\ngrandes creadores de nuevas formas e ideologías religiosas, políticas, económicas,\nartísticas, científicas y tecnológicas en su mayoría fueron jóvenes que identificaron desde\nde su cosmovisión del mundo oportunidades. En los últimos meses, jóvenes de diferentes\nlugares del mundo han decidido alzar sus voces y exigir la inclusión en los espacios, en\ndonde la gerontocracia es evidente. Tal es el caso de Colombia, donde la constitución y las\nleyes son incluyentes. Las propuestas están encaminadas a garantizar no solo la\nparticipación de la juventud sino también a las diferentes ideológicas, brindando\nrepresentatividad de la diversidad y las diferentes expresiones sociales.\n<br/>\n\nEn el día 21 de diciembre, en el salón Galería de la Plaza de la Paz en la ciudad de\nBarranquilla se llevó a cabo la Asamblea para la Elección y Conformación de la Comisión\nConsultiva Departamental de las Comunidades Negras, Afrocolombianas, Raizales y\nPalenqueras. En el evento jóvenes líderes de procesos sociales y culturales manifestaron\nsu interés en abanderar procesos sin desconocer la experiencia de otras generaciones, sino\npidiendo un voto de confianza como el acompañamiento para aprender y trabajar juntos de\nla mano en el construir de un mejor país.\n<br/>\n\nLa apertura a la intervención de diferentes sectores sociales permite evitar el\ndescontento ante la organización amañada de pocos dirigentes comunitarios y abolir la\nrepresión participativa. Últimamente es claro que los jóvenes donde más cómodos se\nsienten, más se expresan y participan es en las calles. _Reclamando justamente espacios\nmás amplios de participación donde sean efectivamente escuchados y puedan expresar sus\nopiniones con fuerza, sin coacciones, sin límites_. (Rodríguez, 2016).\n<br/>\n\nHoy la tarea de los jóvenes es activar su intervención en toma de decisiones y\nacciones comunitarias a través de la organización legal. Alvarez, (2013) Afirma que,\n\n**_Las organizaciones juveniles pueden ser una primera instancia de inserción\ndel sujeto al colectivo social. Un espacio social tan importante como la familia y la\nescuela, son espacios que potencian el sentido de lo colectivo y donde se ejercita la\ndinámica transformadora del sujeto y de la realidad. Estas instituciones son la base\npara desarrollar actitudes y capacidades de participación democrática en diferentes\nescenarios de lo social y el puente para integrar otro tipo de organizaciones. Por\ntanto, los procesos de formación en cultura política que se logren desarrollar con\nactores sociales como los jóvenes son fundamentales._** (p.71)\n<br/>\n\nlo anterior, proclive al empoderamiento en aras a dar respuesta a lo que dicta la Carta\nMagna Colombiana. El Estado y la sociedad garantizan la participación activa de los\njóvenes en los organismos públicos y privados que tengan a cargo la protección, educación\ny progreso de la juventud. (Art. 45 Constitución Política de Colombia, 1991). Esta directriz\nse ratifica en la Ley 375 de 1997 y el Decreto 0089 de Febrero 2 de 2000 por el cual se\nreglamenta la organización y el funcionamiento de los Consejos de Juventud y se dictan\notras disposiciones entre ellas la dada en el artículo 2, literal 4. Fomentar la creación de\norganizaciones y movimientos juveniles, en la respectiva jurisdicción.\n<br/>\n\nEn conclusión, los jóvenes desde siempre han hecho parte de las grandes\ntransformaciones sociales, su cosmovisión fomentan una cultura de la participación,\nasumiendo responsabilidad de liderazgo y recreando un mundo con visión amplia, integral y\nhumanista. Dentro de las grandes ventajas que brinda la nueva generación de la juventud\nencontramos el compromiso con el presente y el futuro, seres autónomos y críticos con su\npropia perspectiva social y política.\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n\nReferencias\n\nRodríguez, E. (2016). LA PARTICIPACIÓN DE LOS JÓVENES EN LAS POLÍTICAS\nPÚBLICAS DIRIGIDAS A ELLOS. Disponible en:\n\nhttp://www.publicaciones.siteal.iipe.unesco.org/eventos-del-siteal/22/la-participacion-\nde-los-jovenes-en-las-politicas-publicas-dirigidas-ellos\n\nÁlvarez, M. (2013). LAS ORGANIZACIONES JUVENILES, UN CAMINO PARA LA\nCONSTRUCCIÓN DE CULTURA POLÍTICA DEMOCRÁTICA EN EL MUNICIPIO DE\nGUACARÍ, COLOMBIA. [online] Latinoamericana.ucaldas.edu.co. Disponible en:\nhttp://latinoamericana.ucaldas.edu.co/downloads/Latinoamericana9(2)_4.pdf\n[Accessed 23 Dec. 2019].\n";e.exports=n}});
//# sourceMappingURL=app.771069c8.js.map