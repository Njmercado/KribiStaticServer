(function(e){function a(a){for(var t,r,s=a[0],c=a[1],l=a[2],u=0,d=[];u<s.length;u++)r=s[u],o[r]&&d.push(o[r][0]),o[r]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);p&&p(a);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,a=0;a<i.length;a++){for(var n=i[a],t=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(t=!1)}t&&(i.splice(a--,1),e=c(c.s=n[0]))}return e}var t={},r={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ff3864cb","chunk-2d0c0be9":"e043739e","chunk-2d22c334":"b78cd9ff","chunk-2d231032":"d7ff4fd0","chunk-57b87584":"085165c3"}[e]+".js"}function c(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var a=[],n={about:1,"chunk-57b87584":1};r[e]?a.push(r[e]):0!==r[e]&&n[e]&&a.push(r[e]=new Promise(function(a,n){for(var t="css/"+({about:"about"}[e]||e)+"."+{about:"e880ec34","chunk-2d0c0be9":"31d6cfe0","chunk-2d22c334":"31d6cfe0","chunk-2d231032":"31d6cfe0","chunk-57b87584":"58d25154"}[e]+".css",o=c.p+t,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===t||u===o))return a()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===t||u===o)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var t=a&&a.target&&a.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=t,delete r[e],p.parentNode.removeChild(p),n(i)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)}).then(function(){r[e]=0}));var t=o[e];if(0!==t)if(t)a.push(t[2]);else{var i=new Promise(function(a,n){t=o[e]=[a,n]});a.push(t[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e),l=function(a){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var t=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src,i=new Error("Loading chunk "+e+" failed.\n("+t+": "+r+")");i.type=t,i.request=r,n[1](i)}o[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(a)},c.m=e,c.c=t,c.d=function(e,a,n){c.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,a){if(1&a&&(e=c(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)c.d(n,t,function(a){return e[a]}.bind(null,t));return n},c.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(a,"a",a),a},c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"034f":function(e,a,n){"use strict";var t=n("64a9"),r=n.n(t);r.a},"56d7":function(e,a,n){"use strict";n.r(a);n("cadf"),n("551c"),n("f751"),n("097d");var t=n("2b0e"),r=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light",attrs:{id:"nav"}},[n("a",{staticClass:"navbar-brand",staticStyle:{color:"#8c3420"},attrs:{href:"#"}},[e._v("Kribí")]),e._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("div",{staticClass:"navbar-nav"},[n("router-link",{staticClass:"nav-item nav-link",attrs:{id:"router",to:"/"}},[e._v("Inicio")]),n("router-link",{staticClass:"nav-item nav-link",attrs:{id:"router",to:"/diccionario"}},[e._v("Diccionario")]),n("router-link",{staticClass:"nav-item nav-link",attrs:{id:"router",to:"/curso"}},[e._v("Curso")]),n("router-link",{staticClass:"nav-item nav-link",attrs:{id:"router",to:"/chakero",title:"Noticias"}},[e._v("Chakero ")]),n("router-link",{staticClass:"nav-item nav-link",attrs:{id:"router",to:"/bentorriyo",title:"Tienda/Store"}},[e._v("Bentorriyo ")]),n("router-link",{staticClass:"nav-item nav-link",attrs:{id:"router",to:"/creditos"}},[e._v("Creditos ")])],1)])]),n("router-view"),e._m(1)],1)},o=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"row",attrs:{id:"informacion"}},[n("div",{staticClass:"col-sm",attrs:{id:"universidad"}},[n("div",{attrs:{id:"logoUniversidad"}},[n("img",{staticStyle:{height:"100%",width:"12%"},attrs:{src:"https://i.ibb.co/HdbCKKp/Uninorte.png"}})]),n("div",[n("label",[e._v("Universidad del Norte")])]),n("div",[n("label",[e._v("Barranquilla - Colombia")])])]),n("div",{staticClass:"col-sm",attrs:{id:"grupoEstudiantil"}},[n("div",[n("img",{staticStyle:{height:"100%",width:"50%"},attrs:{src:"https://i.ibb.co/StnCxkv/image1.jpg"}})]),n("div",{staticStyle:{"margin-top":"10px"}},[n("label",[e._v("Creador")])])])])}],i={name:"App"},s=i,c=(n("034f"),n("2877")),l=Object(c["a"])(s,r,o,!1,null,null,null),u=l.exports,d=n("8c4f"),p=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"begin"}},[e._m(0),e._m(1),n("div",{attrs:{id:"contenido"}},[n("div",{staticClass:"container",attrs:{id:"contenedor"}},[n("div",{attrs:{id:"texto"}},[n("label",{attrs:{id:"informacion",align:"left"},domProps:{innerHTML:e._s(e.getInformacion)}})])]),n("v-container",{attrs:{fluid:"",id:"tipoDeInformacion"}},[n("v-layout",{attrs:{row:"","justify-center":""}},e._l(e.informationTypeName,function(a,t){return n("v-flex",{key:a,attrs:{"xs-2":"","sm-2":""}},[n("v-btn",{staticClass:"text-capitalize",attrs:{id:"info",color:"#dba238",small:""},on:{click:function(a){e.informationType=t}}},[e._v(e._s(a))]),e.informationType==t?n("div",[n("v-icon",{staticStyle:{"font-size":"8px"},attrs:{color:"#8c3420"}},[e._v("mdi-brightness-1")])],1):e._e()],1)}),1)],1)],1)])},m=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"imagenInicio"}},[n("img",{attrs:{src:"https://i.ibb.co/FzDP6PW/Sin-t-tulo-2.png",alt:"logo kribi"}})])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"container"},[n("div",{attrs:{id:"separacion"}})])}],f={name:"Home",data:function(){return{information:["El Diccionario de la Lengua Palenquera, <span style='font-weight: bold'>Kribí</span>, es un diccionario que responde al momento historio donde las herramientas tecnológicas juegan un papel preponderante en el quehacer diario de las personas como medio para dinamizar procesos.  A través de esta herramienta web se le permite a sus usuarios la búsqueda y práctica en aras a creación de aprendizaje de forma rápida y precisa del léxico palenquero. Por lo tanto, este diccionario digitalizado permite apoyar activamente el avance de los interesados en el uso y desarrollo del intangible de la humanidad que llamamos Lengua Palenquera.","En el sur Continente Americano tenemos “un pedacito de África”. El Caribe colombiano fue escenario de lucha y resistencia de hombres y mujeres de origen africano que tras el Comercio triangular eran privados de su libertad y puestos en calidad de esclavos. Los palenques fueron una de las formas que adoptaron; estos lugares ubicados estrategicamente en medio de la selva, al cual rodeaban con trincheras estacas y zanjas les permitia esconderse y protegerse del enemigo colonizador.</br> En la actualidad se concerva uno de esos maravillosos lugares historicos de libertad llamado San Basilio de Palenque tras el acuerdo de paz firmado en 1713, es un corregimiento del Munición de Mahates en Bolívar que cuenta con al menos tres mil quinientos (3500) habitantes que hablan la Lengua palenquera.</br> Esta lengua ha sido objeto de estudio en innumerables ocasiones, por iniciativa de Cristina De la Hoz Marquez se recopila un corpus de textos y audios que contiene la mayor cantidad de palabras en Palenquero y su significado en Español que brindaron las bases para la creación de un espacio web. El diccionario digital de la lengua Palenquera – Kribi es el resultado; y nace de la cooperación del Grupo Estudiantil Afro Makeda Kahina donde se destacaron aporte de cada uno de sus miembros en especial Esteban Torregrosa, finalmente es desarrollado por Angie Zuñiga Figueroa y Nino Mercado quienes aportan desde se conocimiento de ingeniería de sistema y Aldair Soto desde el diseño todos ellos pilares fundamentales de la herramienta web que responde a la necesidad y practicidad que demandan los interesados en la Lengua Palenquera que hacen parte de la era de la globalización y la inmersión tecnológica. Así bien, es KRIBÍ la guía práctica para búsqueda de palabras, la construcción de oraciones y textos en la Lengua Palenquera que hoy es considerada un intangible invaluable de todos los individuos.","San Basilio de Palenque fue proclamado por la UNESCO Patrimonio Oral e Inmaterial de la Humanidad gracias a la Lengua Palenquera que manejan sus habitantes, propia de este espacio cultural. Esta lengua criolla tiene su origen en la época colonial cuando hombres y mujeres de orígenes africano que se encontraban en calidad de esclavos en lo que hoy conocemos como Caribe Colombiano lograban encontrar en los montes de María, a cincuenta (50) kilómetros de Cartagena. ese lugar donde podían ser libres y practicar sus tradiciones.</br> Si bien, el periodo de Colonización Española en América estuvo enmarcada entre los años 1550 y 1810 para el caso particular de Colombia; indagar la época de formación de la Lengua Palenquera es un dato que ha inquietado a varios autores entre ellos Marianne Dieck, que en el artículo La época de formación de la lengua de Palenque: datos históricos y lingüísticos. Basado en antecedentes escritos argumenta la hipótesis del siglo XVII (1600 - 1699) como periodo surgimiento del criollo palenquero. En ese sentido, se define lengua criolla a todas aquellas que tiene su origen luego de situaciones sociodemográficas abruptas donde hablantes de varias leguas entran en contacto adoptando un sistema lingüístico propio de la unión de diversos componentes que les permita la comunicación entre sí.</br> Aun cuando en 1713 se le concede a San Basilio de Palenque la calidad de pueblo libre, es hasta 1772 que se tiene pruebas escritas de la existencia de una lengua distinta al español a través de la Noticia historial de la provincia de Cartagena de Yindias, año de 1772, escrito por el obispo cartagenero Diego de Paredo. Cabe resaltar que encontrar registros históricos en relación exacto al génesis de la Lengua Palenquera es tan difícil como hallarlos para la creación del pueblo mismo, debido al poco prestigio y valor que les daba en épocas pasadas.</br> Debido a los la escasez de archivos históricos que permitan identificar la época exacta del legua criolla palenquera, Dieck mediante la hipótesis de Bickerton que dicta como fase inicial para la adopción de lo que conocemos como lengua criolla ese momento intrincado donde una lengua dominante es superada en número de hablante por una o varias lenguas diferentes. Para el caso particular de la lengua palenquera, cuando el número de no – europeos supera exponencialmente a los colonizadores.</br> En relación a los datos demográficos que apuntan 1621 como el año de aumento drástico de habitantes negros en el continente americano luego de que en 1605 solo aparecen referenciados 3.000 y año 1619 con 12.000 pobladores afrodescendientes, podemos vislumbrar que coinciden con el padre Alonso Sandoval quien afirma en su obra De instauranda Aethiopum Salute (1627) que para la época se hablaban más de 70 lenguas africanas en Cartagena ubicada geográficamente a tan solo 50 kilómetros de San Basilio de Palenque.</br> En conclusión análoga a la hipótesis de Bickerton, se propone coherente la dilución del Español para la creación de la lengua criolla palenquera como consecuencia del aumento elevado de no hispano hablante a finales del siglo XVI o comienzos del siglo XVII.</br> Ahora bien, ésta propuesta nació como respuesta al momento histórico donde los medios electrónicos, el Internet, y las Tecnologías de la Información y Comunicación (TIC) juegan un papel preponderante en el quehacer diario. En ese mismo sentido, “La omnipresencia de las TICs es al mismo tiempo una oportunidad y un desafío, y nos impone la tarea urgente de encontrar para ellas un sentido y uso que permita desarrollar sociedades más democráticas e inclusivas, que fortalezca la colaboración, la creatividad y la distribución más justa del conocimiento científico y que contribuya a una educación más equitativa y de calidad para todos.” (Oficina Regional de Educación para América Latina y el Caribe (OREALC/UNESCO Santiago), 2013)."],informationType:0,informationTypeName:["Descripción","Origen","Antecedentes"]}},computed:{getInformacion:function(){return console.log(this.informationType),this.information[this.informationType]}}},b=f,g=(n("cccb"),Object(c["a"])(b,p,m,!1,null,null,null)),v=g.exports;t["default"].use(d["a"]);var h=new d["a"]({mode:"history",routes:[{path:"/",name:"Home",component:v},{path:"/diccionario",name:"Diccionario",component:function(){return n.e("about").then(n.bind(null,"1a20"))}},{path:"/curso",name:"Curso",component:function(){return n.e("chunk-57b87584").then(n.bind(null,"9686"))}},{path:"/chakero",name:"Chakero",component:function(){return n.e("chunk-2d0c0be9").then(n.bind(null,"42a6"))}},{path:"/creditos",name:"Creditos",component:function(){return n.e("chunk-2d231032").then(n.bind(null,"ef72"))}},{path:"/bentorriyo",name:"Bentorriyo",component:function(){return n.e("chunk-2d22c334").then(n.bind(null,"f1e8"))}},{path:"*",redirect:"/"}]}),y=n("2f62"),q=n("7cc3");t["default"].use(y["a"]);var k=new y["a"].Store({state:{palabra:"Palabra",definicion:"Definicion",ejemplos:[],listaPalabras:[],letra:""},mutations:{setLetraParaPalabras:function(e,a){a.toLowerCase()!=e.letra.toLowerCase()&&q["a"].getPalabrasPorLetra(a).then(function(a){e.listaPalabras=a})},setPalabra:function(e,a){a.toLowerCase()!=e.palabra.toLowerCase()&&q["a"].buscarPalabra(a).then(function(a){e.palabra=a.palabra,e.definicion=a.definicion,e.ejemplos=a.ejemplos})},setAutoCompletado:function(e,a){a.length>2?q["a"].autoCompletado(a).then(function(a){e.listaPalabras=a}):e.listaPalabras=[]}},getters:{getEjemplos:function(e){return e.ejemplos},getDefinicion:function(e){return e.definicion},getPalabra:function(e){return e.palabra},getPalabrasPorLetra:function(e){return e.listaPalabras},getLetra:function(e){return e.letra}}}),C=n("9483");Object(C["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var w=n("ce5b"),P=n.n(w);n("bf40");t["default"].config.productionTip=!1,t["default"].use(P.a),t["default"].use(y["a"]),new t["default"]({router:h,store:k,render:function(e){return e(u)}}).$mount("#app")},"64a9":function(e,a,n){},"7cc3":function(e,a,n){"use strict";n("96cf");var t=n("3b8d"),r=n("d225"),o=n("b0b4"),i=n("bc3a"),s=n.n(i),c=n("aeb1"),l=n.n(c),u="5cf2e66408166968da3b30b4",d="http://167.71.249.170:5000/",p=function(){function e(){Object(r["a"])(this,e)}return Object(o["a"])(e,null,[{key:"getPalabrasPorLetra",value:function(){var e=Object(t["a"])(regeneratorRuntime.mark(function e(a){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat(d,"buscar/lista_palabras?letra=").concat(a,"&key=").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data.response.map(function(e){return{palabra:e}}));case 4:case"end":return e.stop()}},e)}));function a(a){return e.apply(this,arguments)}return a}()},{key:"buscarPalabra",value:function(){var e=Object(t["a"])(regeneratorRuntime.mark(function e(a){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat(d,"buscar/palabra?palabra=").concat(a,"&key=").concat(u));case 2:return n=e.sent,e.abrupt("return",{definicion:n.data.definicion,ejemplos:n.data.ejemplos,palabra:n.data.palabra});case 4:case"end":return e.stop()}},e)}));function a(a){return e.apply(this,arguments)}return a}()},{key:"descargarCurso",value:function(){var e=Object(t["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:s.a.get("".concat(d,"download/curso?key=").concat(u),{responseType:"blob"}).then(function(e){var a=e.headers["content-type"];l()(e.data,"Curso Lengua Palenque.pdf",a)});case 1:case"end":return e.stop()}},e)}));function a(){return e.apply(this,arguments)}return a}()},{key:"autoCompletado",value:function(){var e=Object(t["a"])(regeneratorRuntime.mark(function e(a){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat(d,"buscar/palabra/autocompletado?palabra=").concat(a,"&key=").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data.response.map(function(e){return{palabra:e}}));case 4:case"end":return e.stop()}},e)}));function a(a){return e.apply(this,arguments)}return a}()}]),e}();a["a"]=p},cccb:function(e,a,n){"use strict";var t=n("d563"),r=n.n(t);r.a},d563:function(e,a,n){}});
//# sourceMappingURL=app.b8b9d1d5.js.map