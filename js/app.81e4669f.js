(function(t){function e(e){for(var r,i,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"min-h-screen bg-gray-300 flex flex-col",attrs:{id:"app"}},[t._m(0),a("main",{staticClass:"px-4 sm:px-6 lg:px-8 py-6"},[a("div",{staticClass:"max-w-6xl mx-auto"},[a("FilterTable")],1)]),a("footer",{staticClass:"mt-auto px-4 sm:px-6 lg:px-8 py-6"},[a("div",{staticClass:"max-w-6xl mx-auto"},[t._v(" "+t._s((new Date).getFullYear())+" ")])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"bg-white shadow px-4 sm:px-6 lg:px-8"},[a("div",{staticClass:"max-w-6xl mx-auto py-6 "},[a("h1",{staticClass:"text-3xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"},[t._v(" Seznam knih ")])])])}],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.items.length>0,expression:"items.length > 0"}],staticClass:"my-4 flex justify-between md:items-center flex-col md:flex-row"},[a("div",{staticClass:"flex-1 md:pr-4"},[a("div",{staticClass:"relative md:w-1/3 mb-4 md:mb-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTermProxy,expression:"searchTermProxy"}],staticClass:"w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium",attrs:{type:"search",placeholder:"Hledat"},domProps:{value:t.searchTermProxy},on:{input:function(e){e.target.composing||(t.searchTermProxy=e.target.value)}}}),a("div",{staticClass:"absolute top-0 left-0 inline-flex items-center p-2"},[a("svg",{staticClass:"w-6 h-6 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[a("rect",{attrs:{x:"0",y:"0",width:"24",height:"24",stroke:"none"}}),a("circle",{attrs:{cx:"10",cy:"10",r:"7"}}),a("line",{attrs:{x1:"21",y1:"21",x2:"15",y2:"15"}})])])])]),a("div",[a("nav",{staticClass:"inline-flex",attrs:{role:"navigation","aria-label":"pagination"}},[a("button",{staticClass:"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",class:{"cursor-not-allowed opacity-50":t.pagination.currentPage<=1},attrs:{"aria-label":"Předchozí stránka",disabled:t.pagination.currentPage<=1},on:{click:function(e){t.pagination.currentPage--}}},[t._v(" « ")]),a("button",{staticClass:"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",class:{"cursor-not-allowed opacity-50":t.pagination.currentPage>=t.pagesCount},attrs:{"aria-label":"Další stránka",disabled:t.pagination.currentPage>=t.pagesCount},on:{click:function(e){t.pagination.currentPage++}}},[t._v(" » ")])]),a("span",{staticClass:"ml-3"},[t._v("s. "+t._s(t.pagination.currentPage)+"/"+t._s(t.pagesCount))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.items.length>0,expression:"items.length > 0"}],staticClass:"overflow-x-auto"},[a("div",{staticClass:"py-2 align-middle inline-block min-w-full"},[a("div",{staticClass:"shadow overflow-hidden border-b border-gray-300 rounded-lg"},[a("table",{staticClass:"min-w-full divide-y divide-gray-300"},[a("thead",[a("tr",t._l(t.columns,(function(e,r){return a("th",{key:r,staticClass:"px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"},[t._v(" "+t._s(e)+" ")])})),0)]),a("tbody",{staticClass:"bg-white divide-y divide-gray-300 divide-dashed"},t._l(t.filteredItems.slice(t.currentItems.start,t.currentItems.end),(function(e){return a("tr",{key:e.id,staticClass:"even:bg-gray-100 hover:bg-purple-200"},[a("td",{staticClass:"px-6 py-4 text-sm leading-5 text-gray-800"},[t._v(" "+t._s(e.title)+" ")]),a("td",{staticClass:"px-6 py-4 text-sm leading-5 text-gray-800"},[t._v(" "+t._s(e.author)+" ")]),a("td",{staticClass:"px-6 py-4 text-sm leading-5 text-gray-800"},[t._v(" "+t._s(e.genre)+" ")]),a("td",{staticClass:"px-6 py-4 text-sm leading-5 text-gray-800"},[t._v(" "+t._s(e.id)+" ")])])})),0)])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.items.length>0,expression:"items.length > 0"}],staticClass:"my-2"},[t._v(" Celkový počet záznamů: "+t._s(t.items.length)+", zobrazeno: "+t._s(t.filteredItems.length)+" ")]),a("LoadingIndicator",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),a("AlertMessage",{directives:[{name:"show",rawName:"v-show",value:t.error.length>0,expression:"error.length > 0"}],attrs:{message:t.error}})],1)},o=[],l=(a("99af"),a("4de4"),a("d81d"),a("0d03"),a("d3b7"),a("25f0"),a("498a"),a("bc3a")),c=a.n(l),u=a("b047"),d=a.n(u),p=a("4caa"),g=a.n(p),m=a("8a30"),h=a.n(m),f=a("3092"),v=a.n(f),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inline-flex items-center px-4 py-2 text-black"},[a("svg",{staticClass:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[a("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"#222","stroke-width":"4"}}),a("path",{staticClass:"opacity-75",attrs:{fill:"#222",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]),t._v(" Načítám ")])},w=[],y={name:"LoadingIndicator"},b=y,C=a("2877"),_=Object(C["a"])(b,x,w,!1,null,null,null),P=_.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex items-center bg-orange-100 text-orange-700 text-sm font-bold px-4 py-3 rounded",attrs:{role:"alert"}},[a("svg",{staticClass:"fill-current w-4 h-4 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[a("path",{attrs:{d:"M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"}})]),a("p",[t._v(t._s(t.message[0]))])])},j=[],O={name:"AlertMessage",props:{message:{required:!0,type:Array}}},T=O,z=Object(C["a"])(T,k,j,!1,null,null,null),I=z.exports,M={name:"FilterTable",components:{AlertMessage:I,LoadingIndicator:P},data:function(){return{awaitingSearch:!1,columns:["Název","Autor","Žánr","Inv. číslo"],error:[],items:[],loading:!1,pagination:{currentPage:1,itemsPerPage:10},searchTerm:"",searchTermProxy:""}},computed:{filteredItems:function(){var t=this,e=this.normalize(this.searchTerm);return this.items.filter((function(a){return v()(a,(function(a){return h()(t.normalize(a),e)}))}))},pagesCount:function(){return Math.ceil(this.filteredItems.length/this.pagination.itemsPerPage)},currentItems:function(){var t=this.pagination.currentPage-1;return t*=this.pagination.itemsPerPage,{start:t,end:t+this.pagination.itemsPerPage}}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;t.loading=!0,c.a.get("./data/data.json").then((function(e){e.data.map((function(e){t.items.push({author:"".concat(e.last_name,", ").concat(e.first_name),genre:e.genre,id:e.number,title:e.title})}))}))["catch"]((function(e){t.error.push(e.message)})).then((function(){t.loading=!1}))},normalize:function(t){return g()(t.toString().trim().toLowerCase())}},watch:{searchTermProxy:d()((function(t){this.pagination.currentPage=1,this.searchTerm=t}),500)}},N=M,S=Object(C["a"])(N,i,o,!1,null,null,null),A=S.exports,$={name:"App",components:{FilterTable:A}},E=$,D=(a("85b4"),Object(C["a"])(E,n,s,!1,null,null,null)),F=D.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(F)}}).$mount("#app")},"85b4":function(t,e,a){"use strict";a("afec")},afec:function(t,e,a){}});
//# sourceMappingURL=app.81e4669f.js.map