module.exports=function(t){var e={},n={0:0};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.e=function(e){if(0!==n[e]){var r=require("./"+{1:"5d11dc86640476ca5c37",2:"14a900f1c66390db007e"}[e]+".js"),o=r.modules,c=r.ids;for(var l in o)t[l]=o[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},r.p="/_nuxt/",r.oe=function(t){process.nextTick((function(){throw t}))},r(r.s=12)}([function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";function r(t,e,n,r,o,c,l,h){var d,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),c&&(f._scopeId="data-v-"+c),l?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},f._ssrRegister=d):o&&(d=h?function(){o.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:o),d)if(f.functional){f._injectStyles=d;var m=f.render;f.render=function(t,e){return d.call(e),m(t,e)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,d):[d]}return{exports:t,options:f}}n.d(e,"a",(function(){return r}))},function(t,e){t.exports=require("vue-router")},function(t,e,n){var content=n(14);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(8).default;t.exports.__inject__=function(t){r("72daabed",content,!0,t)}},function(t,e,n){var content=n(16);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(8).default;t.exports.__inject__=function(t){r("3191d5ad",content,!0,t)}},function(t,e){t.exports=require("vue-no-ssr")},function(t,e){t.exports=require("vue-client-only")},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var content=function(t,e){var content=t[1]||"",n=t[3];if(!n)return content;if(e&&"function"==typeof btoa){var r=(c=n,l=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(data," */")),o=n.sources.map((function(source){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(source," */")}));return[content].concat(o).concat([r]).join("\n")}var c,l,data;return[content].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(content,"}"):content})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var l=0;l<t.length;l++){var h=[].concat(t[l]);r&&o[h[0]]||(n&&(h[2]?h[2]="".concat(n," and ").concat(h[2]):h[2]=n),e.push(h))}},e}},function(t,e,n){"use strict";function r(t,e,n,r){if(r||"undefined"==typeof __VUE_SSR_CONTEXT__||(r=__VUE_SSR_CONTEXT__),r){r.hasOwnProperty("styles")||(Object.defineProperty(r,"styles",{enumerable:!0,get:function(){return o(r._styles)}}),r._renderStyles=o);var c=r._styles||(r._styles={});e=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],c=o[0],l={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[c]?r[c].parts.push(l):n.push(r[c]={id:c,parts:[l]})}return n}(t,e),n?function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,r=0;r<n.length;r++){var o=n[r],c=o.media||"default",style=t[c];style?style.ids.indexOf(o.id)<0&&(style.ids.push(o.id),style.css+="\n"+o.css):t[c]={ids:[o.id],css:o.css,media:o.media}}}(c,e):function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,r=0;r<n.length;r++){var o=n[r];t[o.id]={ids:[o.id],css:o.css,media:o.media}}}(c,e)}}function o(t){var e="";for(var n in t){var style=t[n];e+='<style data-vue-ssr-id="'+style.ids.join(" ")+'"'+(style.media?' media="'+style.media+'"':"")+">"+style.css+"</style>"}return e}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e){t.exports=require("querystring")},function(t,e){t.exports=require("node-fetch")},function(t,e){t.exports=require("vue-meta")},function(t,e,n){t.exports=n(18)},function(t,e,n){"use strict";n.r(e);var r=n(3),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(e=n(7)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""]),t.exports=e},function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(e=n(7)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""]),t.exports=e},function(t,e,n){t.exports=n.p+"img/ead0d84.svg"},function(t,e,n){"use strict";n.r(e);var r=n(9),o=n(0),c=n.n(o),l=n(10),h=n.n(l);var d={};function f(t){return t.then(t=>t.default||t)}function m(t){return t.options&&t._Ctor===t||(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file)),t}function v(t,e=!1,n="components"){return Array.prototype.concat.apply([],t.matched.map((t,r)=>Object.keys(t[n]).map(o=>(e&&e.push(r),t[n][o]))))}function _(t,e){return Promise.all(function(t,e){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).reduce((r,o)=>(t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r),[])))}(t,async(t,n,r,o)=>("function"!=typeof t||t.options||(t=await t()),r.components[o]=t=m(t),"function"==typeof e?e(t,n,r,o):t)))}async function x(t){if(t)return await _(t),{...t,meta:v(t).map((e,n)=>({...e.options.meta,...(t.matched[n]||{}).meta}))}}async function y(t,e){t.context||(t.context={isStatic:!0,isDev:!1,isHMR:!1,app:t,payload:e.payload,error:e.error,base:"/",env:{base_url:"https://www.kikagaku.co.jp/"}},e.req&&(t.context.req=e.req),e.res&&(t.context.res=e.res),e.ssrContext&&(t.context.ssrContext=e.ssrContext),t.context.redirect=(e,path,n)=>{if(!e)return;t.context._redirected=!0;let r=typeof path;"number"==typeof e||"undefined"!==r&&"object"!==r||(n=path||{},r=typeof(path=e),e=302),"object"===r&&(path=t.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?t.context.next({path:path,query:n,status:e}):(path=function(t,e){let n;const r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));let o,c=t.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");c=path.split("#"),2===c.length&&([path,o]=c);l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(e=>{const n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(t=>[e,"=",t].join("")).join("&"):e+"="+n}).filter(Boolean).join("&")}(e));return l+=o?"#"+o:"",l}(path,n),t.context.next({path:path,status:e}))},t.context.beforeNuxtRender=t=>e.beforeRenderFns.push(t));const[n,r]=await Promise.all([x(e.route),x(e.from)]);e.route&&(t.context.route=n),e.from&&(t.context.from=r),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=!1,t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{}}function w(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():$(t[0],e).then(()=>w(t.slice(1),e))}function $(t,e){let n;return n=2===t.length?new Promise(n=>{t(e,(function(t,data){t&&e.error(t),n(data=data||{})}))}):t(e),n&&n instanceof Promise&&"function"==typeof n.then?n:Promise.resolve(n)}function C(t,e){return function(t,e){const n=new Array(t.length);for(let i=0;i<t.length;i++)"object"==typeof t[i]&&(n[i]=new RegExp("^(?:"+t[i].pattern+")$",O(e)));return function(e,r){let path="";const data=e||{},o=(r||{}).pretty?S:encodeURIComponent;for(let i=0;i<t.length;i++){const e=t[i];if("string"==typeof e){path+=e;continue}const r=data[e.name||"pathMatch"];let c;if(null==r){if(e.optional){e.partial&&(path+=e.prefix);continue}throw new TypeError('Expected "'+e.name+'" to be defined')}if(Array.isArray(r)){if(!e.repeat)throw new TypeError('Expected "'+e.name+'" to not repeat, but received `'+JSON.stringify(r)+"`");if(0===r.length){if(e.optional)continue;throw new TypeError('Expected "'+e.name+'" to not be empty')}for(let t=0;t<r.length;t++){if(c=o(r[t]),!n[i].test(c))throw new TypeError('Expected all "'+e.name+'" to match "'+e.pattern+'", but received `'+JSON.stringify(c)+"`");path+=(0===t?e.prefix:e.delimiter)+c}}else{if(c=e.asterisk?S(r,!0):o(r),!n[i].test(c))throw new TypeError('Expected "'+e.name+'" to match "'+e.pattern+'", but received "'+c+'"');path+=e.prefix+c}}return path}}(function(t,e){const n=[];let r=0,o=0,path="";const c=e&&e.delimiter||"/";let l;for(;null!=(l=j.exec(t));){const e=l[0],h=l[1],d=l.index;if(path+=t.slice(o,d),o=d+e.length,h){path+=h[1];continue}const f=t[o],m=l[2],v=l[3],_=l[4],x=l[5],y=l[6],w=l[7];path&&(n.push(path),path="");const $=null!=m&&null!=f&&f!==m,C="+"===y||"*"===y,k="?"===y||"*"===y,j=l[2]||c,pattern=_||x;n.push({name:v||r++,prefix:m||"",delimiter:j,optional:k,repeat:C,partial:$,asterisk:Boolean(w),pattern:pattern?N(pattern):w?".*":"[^"+E(j)+"]+?"})}o<t.length&&(path+=t.substr(o));path&&n.push(path);return n}(t,e),e)}function k(t){let e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e=`[${t.constructor.name}]`}return{...t,message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}const j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function S(t,e){const n=e?/[?#]/g:/[/?#]/g;return encodeURI(t).replace(n,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())}function E(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function N(t){return t.replace(/([=!:$/()])/g,"\\$1")}function O(t){return t&&t.sensitive?"":"i"}async function T(){if(!this._fetchOnServer)return;try{await this.$options.fetch.call(this)}catch(t){this.$fetchState.error=k(t)}this.$fetchState.pending=!1,this._fetchKey=this.$ssrContext.nuxt.fetch.length;(this.$vnode.data.attrs=this.$vnode.data.attrs||{})["data-fetch-key"]=this._fetchKey,this.$ssrContext.nuxt.fetch.push(this.$fetchState.error?{_error:this.$fetchState.error}:this._data)}var P={beforeCreate(){var t;(t=this).$options&&"function"==typeof t.$options.fetch&&!t.$options.fetch.length&&("function"==typeof this.$options.fetchOnServer?this._fetchOnServer=!1!==this.$options.fetchOnServer.call(this):this._fetchOnServer=!1!==this.$options.fetchOnServer,c.a.util.defineReactive(this,"$fetchState",{pending:!0,error:null,timestamp:Date.now()}),function(t,e,n){t.$options[e]||(t.$options[e]=[]),t.$options[e].includes(n)||t.$options[e].push(n)}(this,"serverPrefetch",T))}},R=n(11),A=n.n(R),M=n(6),L=n.n(M),U=n(5),B=n.n(U),D=n(2),F=n.n(D);const I=()=>{},K=F.a.prototype.push;F.a.prototype.push=function(t,e=I,n){return K.call(this,t,e,n)},c.a.use(F.a);const z={mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,n){let r=!1;const o=v(t);(o.length<2&&o.every(t=>!1!==t.options.scrollToTop)||o.some(t=>t.options.scrollToTop))&&(r={x:0,y:0}),n&&(r=n);const c=window.$nuxt;return t.path===e.path&&t.hash!==e.hash&&c.$nextTick(()=>c.$emit("triggerScroll")),new Promise(e=>{c.$once("triggerScroll",()=>{if(t.hash){let e=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(e="#"+window.CSS.escape(e.substr(1)));try{document.querySelector(e)&&(r={selector:e})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})},routes:[{path:"/mission",component:()=>f(n.e(2).then(n.bind(null,75))),name:"mission"},{path:"/",component:()=>f(n.e(1).then(n.bind(null,74))),name:"index"}],fallback:!1};var H={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(t,{parent:e,data:data,props:n}){const r=e.$createElement;data.nuxtChild=!0;const o=e,c=e.$nuxt.nuxt.transitions,l=e.$nuxt.nuxt.defaultTransition;let h=0;for(;e;)e.$vnode&&e.$vnode.data.nuxtChild&&h++,e=e.$parent;data.nuxtChildDepth=h;const d=c[h]||l,f={};V.forEach(t=>{void 0!==d[t]&&(f[t]=d[t])});const m={};if(J.forEach(t=>{"function"==typeof d[t]&&(m[t]=d[t].bind(o))}),!1===d.css){const t=m.leave;(!t||t.length<2)&&(m.leave=(e,n)=>{t&&t.call(o,e),o.$nextTick(n)})}let v=r("routerView",data);return n.keepAlive&&(v=r("keep-alive",{props:n.keepAliveProps},[v])),r("transition",{props:f,on:m},[v])}};const V=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],J=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var W={name:"NuxtError",props:{error:{type:Object,default:null}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}}},G=n(1);var X=Object(G.a)(W,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[t._ssrNode('<div class="error">',"</div>",[t._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">'+t._ssrEscape(t._s(t.message))+"</div> "),404===t.statusCode?t._ssrNode('<p class="description">',"</p>",[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a></div>')],2)])}),[],!1,(function(t){var e=n(13);e.__inject__&&e.__inject__(t)}),null,"7bfa8ff0").exports,Y={name:"Nuxt",components:{NuxtChild:H,NuxtError:X},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},errorCaptured(t){this.displayingNuxtError&&(this.errorFromNuxtError=t,this.$forceUpdate())},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||C(this.$route.matched[0].path)(this.$route.params);const[t]=this.$route.matched;if(!t)return this.$route.path;const e=t.components.default;if(e&&e.options){const{options:t}=e;if(t.key)return"function"==typeof t.key?t.key(this.$route):t.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(t){return this.nuxt.err?this.errorFromNuxtError?(this.$nextTick(()=>this.errorFromNuxtError=!1),t("div",{},[t("h2","An error occured while showing the error page"),t("p","Unfortunately an error occured and while showing the error page another error occured"),t("p","Error details: "+this.errorFromNuxtError.toString()),t("nuxt-link",{props:{to:"/"}},"Go back to home")])):(this.displayingNuxtError=!0,this.$nextTick(()=>this.displayingNuxtError=!1),t(X,{props:{error:this.nuxt.err}})):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},Q={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get(){return this.percent},increase(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(t){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100||this.percent<=0)&&(this.skipTimerCount=1,this.reversed=!this.reversed))},100)}},render(t){let e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}};var Z=Object(G.a)(Q,void 0,void 0,!1,(function(t){var e=n(15);e.__inject__&&e.__inject__(t)}),null,"44255db8").exports,tt={components:{Header:Object(G.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("header",{staticClass:"header anim anim--scroll anim--top",attrs:{id:"header"}},[this._ssrNode('<div class="header__logo"><a href="index.html" class="opacity"><p><img'+this._ssrAttr("src",n(17))+' alt="キカガク" class="img__fit"></p></a></div> <div id="navigation" class="header__navi"><nav class="navi__container"><div class="navi"><div class="navi__submenu--has"><p><a href="#mission"><span>MISSION</span> <span>ミッション</span></a></p> <div class="submenu-bg"><div class="submenu-wrap"><a href>キカガクの目指す世界</a> <a href>ミッションの背景</a> <a href>チームへのこだわり</a></div></div></div> <div class="navi__submenu--has"><p><span>RESULTS</span> <span>実績</span></p> <div class="submenu-bg"><div class="submenu-wrap"><a href>データで見るキカガク</a> <a href>研修事業実績</a> <a href>コンテンツ作成実績</a> <a href>事業開発支援実績</a> <a href>キカガクが選ばれる理由</a> <a href>研修の雰囲気</a> <a href>キカガクの講義の良さ</a></div></div></div> <div class="navi__submenu--has"><p><span>BUSINESS</span> <span>事業内容</span></p> <div class="submenu-bg"><div class="submenu-wrap"><a href>研修事業について</a> <a href>キカガクが選ばれる理由</a> <a href>キカガクの講義の良さ</a> <a href>資料ダウンロード</a> <a href>短期コース</a> <a href>長期コース</a> <a href>企業研修</a> <a href>事業開発支援</a> <a href>プラットフォーム事業</a></div></div></div> <div class="navi__submenu--has"><p><a href="#"><span>MEMBER</span> <span>メンバー</span></a></p> <div class="submenu-bg"><div class="submenu-wrap"><a href>代表挨拶とその経歴</a> <a href>取締役</a> <a href>執行役員</a> <a href>講師</a> <a href>コーポレート</a></div></div></div> <div><p><a href="#"><span>NEWS</span> <span>ニュース</span></a></p></div> <div class="navi__submenu--has"><p><span>COMPANY</span> <span>会社概要</span></p> <div class="submenu-bg"><div class="submenu-wrap"><a href>概要</a> <a href>沿革</a> <a href>アクセス</a></div></div></div></div></nav></div> <div id="toggle" class="toggle"><span></span> <span></span> <span></span></div>')])}),[],!1,null,null,"4f826dde").exports,Migration:Object(G.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mig__container",attrs:{id:"migration"}},[this._ssrNode('<div class="anim anim--scroll anim--left"><div class="mig__inner"><h2 class="mig__heading">WEBからのお問い合わせ</h2> <div class="btn--mig"><div class="btn--mig__effect"></div> <a href="#">CONTACT</a></div> <p class="mig__time">受付時間：平日9:00 - 18:00</p></div></div> <div class="anim anim--scroll anim--left"><div class="mig__inner"><h2 class="mig__heading">よくあるご質問</h2> <div class="btn--mig"><div class="btn--mig__effect"></div> <a href="#">FAQ</a></div></div></div>')])}),[],!1,null,null,"2612155a").exports,PageFooter:Object(G.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("footer",{staticClass:"footer",attrs:{id:"footer"}},[this._ssrNode('<div class="footer__inner"><div class="footer__navi__container"><div><a href="#" class="footer__navi__main"><span>MISSION</span>ミッション\n        </a> <ul class="footer__navi"><li><a href="#">キカガクの目指す世界</a></li> <li><a href="#">ミッションの背景</a></li> <li><a href="#">チームへのこだわり</a></li></ul></div> <div><a href="#" class="footer__navi__main"><span>RESULTS</span>実績\n        </a> <ul class="footer__navi"><li><a href="#">データで見るキカガク</a></li> <li><a href="#">研修事業実績</a></li> <li><a href="#">コンテンツ作成実績</a></li> <li><a href="#">事業開発支援実績</a></li> <li><a href="#">キカガクが選ばれる理由</a></li> <li><a href="#">研修の雰囲気</a></li> <li><a href="#">キカガクの講義の良さ</a></li></ul></div> <div><a href="#" class="footer__navi__main"><span>BUSINESS</span>事業内容\n        </a> <ul class="footer__navi"><li><a href="#">研修事業について</a></li> <li><a href="#">キカガクが選ばれる理由</a></li> <li><a href="#">キカガクの講義の良さ</a></li> <li><a href="#">資料ダウンロード</a></li> <li><a href="#">短期コース</a></li> <li><a href="#">長期コース</a></li> <li><a href="#">企業研修</a></li> <li><a href="#">事業開発支援</a></li> <li><a href="#">プラットフォーム事業</a></li></ul></div> <div><a href="#" class="footer__navi__main"><span>MEMBER</span>メンバー\n        </a> <ul class="footer__navi"><li><a href="#">代表挨拶とその経歴</a></li> <li><a href="#">取締役</a></li> <li><a href="#">執行役員</a></li> <li><a href="#">講師</a></li> <li><a href="#">コーポレート</a></li></ul></div> <div><a href="#" class="footer__navi__main"><span>COMPANY</span>会社概要\n        </a> <ul class="footer__navi"><li><a href="#">概要</a></li> <li><a href="#">沿革</a></li> <li><a href="#">アクセス</a></li></ul></div> <div><a href="#" class="footer__navi__main"><span>NEWS</span>ニュース\n        </a> <a href="#" class="footer__navi__main"><span>BLOG</span>キカガクブログ\n        </a> <a href="#" class="footer__navi__main"><span>BLOG</span>働き方ブログ\n        </a> <a href="#" class="footer__navi__main"><span>BLOG</span>社長ブログ\n        </a> <a href="#" class="footer__navi__main"><span>RECRUIT</span>採用\n        </a> <a href="#" class="footer__navi__main"><span>CONTACT</span>お問い合わせ\n        </a></div></div></div> <div class="footer__copy"><p>\n      ©\n      <script>\ndocument.write(new Date().getFullYear());\n      <\/script>kikagakaku\n    </p></div>')])}),[],!1,null,null,"0107b32e").exports}};const et={_default:m(Object(G.a)(tt,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header"),this._ssrNode(" "),e("nuxt"),this._ssrNode(" "),e("Migration"),this._ssrNode(" "),e("page-footer")],2)}),[],!1,null,null,"092b7e32").exports)};var nt={render(t,e){const n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(t){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:()=>({isOnline:!0,layout:null,layoutName:"",nbFetching:0}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,this.error=this.nuxt.error,this.context=this.$options.context},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline},isFetching(){return this.nbFetching>0}},methods:{refreshOnlineStatus(){0},async refresh(){const t=function(t,e=!1){return v(t,e,"instances")}(this.$route);if(!t.length)return;this.$loading.start();const e=t.map(t=>{const p=[];if(t.$options.fetch&&t.$options.fetch.length&&p.push($(t.$options.fetch,this.context)),t.$fetch)p.push(t.$fetch());else for(const component of function t(e,n=[]){const r=e.$children||[];for(const e of r)e.$fetch?n.push(e):e.$children&&t(e,n);return n}(t.$vnode.componentInstance))p.push(component.$fetch());return t.$options.asyncData&&p.push($(t.$options.asyncData,this.context).then(e=>{for(const n in e)c.a.set(t.$data,n,e[n])})),Promise.all(p)});try{await Promise.all(e)}catch(t){this.$loading.fail(t),function(t){c.a.config.errorHandler&&c.a.config.errorHandler(t)}(t),this.error(t)}this.$loading.finish()},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(this.nuxt.err),this.$loading.finish&&this.$loading.finish())},setLayout(t){return t&&et["_"+t]||(t="default"),this.layoutName=t,this.layout=et["_"+t],this.layout},loadLayout:t=>(t&&et["_"+t]||(t="default"),Promise.resolve(et["_"+t]))},components:{NuxtLoading:Z}};c.a.component(L.a.name,L.a),c.a.component(B.a.name,{...B.a,render:(t,e)=>B.a.render(t,e)}),c.a.component(H.name,H),c.a.component("NChild",H),c.a.component(Y.name,Y),c.a.use(A.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const at={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function it(t){const e=await new F.a(z),n={head:{title:"株式会社キカガクホームページ",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"My fantastic Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",type:"text/css",href:"https://www.kikagaku.co.jp/css/style.css"},{rel:"stylesheet",type:"text/css",href:"https://www.kikagaku.co.jp/css/lib/swiper.css"}],script:[{src:"https://www.kikagaku.co.jp/js/lib/jquery-3.4.1.js"},{src:"https://www.kikagaku.co.jp/js/lib/countTo.js"},{src:"https://www.kikagaku.co.jp/js/lib/inview.js"},{src:"https://www.kikagaku.co.jp/js/lib/ofi.js"},{src:"https://www.kikagaku.co.jp/js/lib/pf.intrinsic.js"},{src:"https://www.kikagaku.co.jp/js/lib/picturefill.js"},{src:"https://www.kikagaku.co.jp/js/lib/swiper.js"},{src:"https://www.kikagaku.co.jp/js/common.js"},{src:"https://www.kikagaku.co.jp/js/loading.js"},{src:"https://www.kikagaku.co.jp/js/front.js"}],style:[]},router:e,nuxt:{defaultTransition:at,transitions:[at],setTransitions(t){return Array.isArray(t)||(t=[t]),t=t.map(t=>t=t?"string"==typeof t?Object.assign({},at,{name:t}):Object.assign({},at,t):at),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error(e){e=e||null,n.context._errored=Boolean(e),e=e?k(e):null;let r=n.nuxt;return this&&(r=this.nuxt||this.$options.nuxt),r.dateErr=Date.now(),r.err=e,t&&(t.nuxt.error=e),e}},...nt},r=t?t.next:t=>n.router.push(t);let o;if(t)o=e.resolve(t.url).route;else{const path=function(base,t){let path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}(e.options.base,e.options.mode);o=e.resolve(path).route}return await y(n,{route:o,next:r,error:n.nuxt.error.bind(n),payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0,ssrContext:t}),t&&t.url&&await new Promise((r,o)=>{e.push(t.url,r,()=>{const o=e.afterEach(async(e,c,l)=>{t.url=e.fullPath,n.context.route=await x(e),n.context.params=e.params||{},n.context.query=e.query||{},o(),r()})})}),{app:n,router:e}}var st={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{prefetch:{type:Boolean,default:!0},noPrefetch:{type:Boolean,default:!1}}};c.a.config.optionMergeStrategies.serverPrefetch=c.a.config.optionMergeStrategies.created,c.a.__nuxt__fetch__mixin__||(c.a.mixin(P),c.a.__nuxt__fetch__mixin__=!0),c.a.component(st.name,st),c.a.component("NLink",st),global.fetch||(global.fetch=h.a);const ot=()=>new c.a({render:t=>t("div")});const ct=t=>e=>{if(t.redirected=e,!t.res)return void(t.nuxt.serverRendered=!1);e.query=Object(r.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:"");e.path.startsWith("http"),e.path!==t.url?(t.res.writeHead(e.status,{Location:e.path}),t.res.end()):t.redirected=!1};e.default=async t=>{t.redirected=!1,t.next=ct(t),t.beforeRenderFns=[],t.nuxt={layout:"default",data:[],fetch:[],error:null,serverRendered:!0,routePath:""};const{app:e,router:n}=await it(t),r=new c.a(e);t.nuxt.routePath=e.context.route.path,t.meta=r.$meta(),t.asyncData={};const o=async()=>{await Promise.all(t.beforeRenderFns.map(e=>$(e,{Components:f,nuxtState:t.nuxt})))},l=async()=>{const n=(X.options||X).layout,c="function"==typeof n?n.call(X,e.context):n;return t.nuxt.layout=c||"default",await r.loadLayout(c),r.setLayout(c),await o(),r},h=()=>(e.context.error({statusCode:404,path:t.url,message:"This page could not be found"}),l()),f=v(n.match(t.url));let _=[];if(_=_.map(t=>"function"==typeof t?t:("function"!=typeof d[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),d[t])),await w(_,e.context),t.redirected)return ot();if(t.nuxt.error)return l();let x=f.length?f[0].options.layout:X.layout;if("function"==typeof x&&(x=x(e.context)),await r.loadLayout(x),t.nuxt.error)return l();if(x=r.setLayout(x),t.nuxt.layout=r.layoutName,_=[],x=m(x),x.options.middleware&&(_=_.concat(x.options.middleware)),f.forEach(t=>{t.options.middleware&&(_=_.concat(t.options.middleware))}),_=_.map(t=>"function"==typeof t?t:("function"!=typeof d[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),d[t])),await w(_,e.context),t.redirected)return ot();if(t.nuxt.error)return l();let y=!0;try{for(const t of f)if("function"==typeof t.options.validate&&(y=await t.options.validate(e.context),!y))break}catch(t){return e.context.error({statusCode:t.statusCode||"500",message:t.message}),l()}if(!y)return t._generate&&(t.nuxt.serverRendered=!1),h();if(!f.length)return h();const C=await Promise.all(f.map(n=>{const r=[];if(n.options.asyncData&&"function"==typeof n.options.asyncData){const o=$(n.options.asyncData,e.context);o.then(e=>(t.asyncData[n.cid]=e,function(t,e){if(!e&&t.options.__hasNuxtData)return;const n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){const data=n.call(this,this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),{...data,...e}},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}(n),e)),r.push(o)}else r.push(null);return n.options.fetch&&n.options.fetch.length?r.push(n.options.fetch(e.context)):r.push(null),Promise.all(r)}));return t.nuxt.data=C.map(t=>t[0]||{}),t.redirected?ot():t.nuxt.error?l():(await o(),r)}}]);