(window.webpackJsonp=window.webpackJsonp||[]).push([[89,3,4,5,6,7,8,9,11,35,36,42,44],{404:function(t,e,n){var o=n(18),l="["+n(405)+"]",c=RegExp("^"+l+l+"*"),r=RegExp(l+l+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},405:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},406:function(t,e,n){"use strict";n.r(e);var o={props:{classes:String}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn",class:t.classes},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(406).default})},407:function(t,e,n){"use strict";var o=n(10),l=n(4),c=n(82),r=n(14),d=n(12),f=n(36),v=n(163),h=n(60),m=n(5),_=n(62),C=n(61).f,x=n(26).f,y=n(13).f,w=n(404).trim,T="Number",k=l.Number,S=k.prototype,E=f(_(S))==T,I=function(t){var e,n,o,l,c,r,d,code,f=h(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=w(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:o=2,l=49;break;case 79:case 111:o=8,l=55;break;default:return+f}for(r=(c=f.slice(2)).length,d=0;d<r;d++)if((code=c.charCodeAt(d))<48||code>l)return NaN;return parseInt(c,o)}return+f};if(c(T,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var O,A=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof A&&(E?m((function(){S.valueOf.call(n)})):f(n)!=T)?v(new k(I(e)),n,A):I(e)},N=o?C(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;N.length>M;M++)d(k,O=N[M])&&!d(A,O)&&y(A,O,x(k,O));A.prototype=S,S.constructor=A,r(l,T,A)}},408:function(t,e,n){"use strict";n.r(e);n(40),n(407),n(22),n(39),n(63),n(114),n(37),n(38),n(164),n(47),n(162),n(83),n(48);var o={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},409:function(t,e,n){n(410)},410:function(t,e,n){"use strict";var o=n(2),l=n(18),c=n(84),r=n(85),d=n(165),f=n(3),v=n(23),h=f("replace"),m=RegExp.prototype,_=Math.max,C=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};o({target:"String",proto:!0},{replaceAll:function(t,e){var n,o,f,x,y,w,T,k,S=l(this),E=0,I=0,O="";if(null!=t){if((n=c(t))&&!~String(l("flags"in m?t.flags:r.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(o=t[h]))return o.call(t,S,e);if(v&&n)return String(S).replace(t,e)}for(f=String(S),x=String(t),(y="function"==typeof e)||(e=String(e)),w=x.length,T=_(1,w),E=C(f,x,0);-1!==E;)k=y?String(e(x,E,f)):d(x,f,E,[],void 0,e),O+=f.slice(I,E)+k,I=E+w,E=C(f,x,E+T);return I<f.length&&(O+=f.slice(I)),O}})},411:function(t,e,n){"use strict";var o=n(2),l=n(404).trim;o({target:"String",proto:!0,forced:n(412)("trim")},{trim:function(){return l(this)}})},412:function(t,e,n){var o=n(5),l=n(405);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!="​᠎"[t]()||l[t].name!==t}))}},413:function(t,e,n){"use strict";n.r(e);n(409),n(411),n(114);var o={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var o,l=new Array(1+n++).join("  "),c=new Array(n-1).join("  "),i=0;i<e.children.length;i++)o=document.createTextNode("\n"+l),e.insertBefore(o,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(o=document.createTextNode("\n"+c),e.appendChild(o));return e}var e,div;void 0!==this.$refs.component&&(this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",t(div,0).innerHTML))}},mounted:function(){this.setSrc()}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(408).default})},414:function(t,e,n){"use strict";n.r(e);var o={props:["data"]},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"overflow-x-auto mt-6"},[n("table",{staticClass:"table table-compact w-full"},[n("thead",[n("tr",[n("th",[t._v("Class name")]),t._v(" "),!1!==t.data.showType?n("th",[t._v("Type")]):t._e(),t._v(" "),!0===t.data.showColors?n("th"):t._e(),t._v(" "),n("th")])]),t._v(" "),n("tbody",[t._l(t.data.components,(function(e,o){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-success w-20"},[t._v("Component")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])})),t._v(" "),t._l(t.data.utilities,(function(e,o){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-info w-20"},[t._v("Utility")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])}))],2)])]),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"divider"}):t._e(),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"text-xl font-bold mt-6"},[t._v("Examples")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},416:function(t,e,n){"use strict";n.r(e);var o=n(6),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("progress",{staticClass:"progress"})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Progress:n(416).default})},418:function(t,e,n){"use strict";n.r(e);var o={props:{classes:String}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"navbar",class:t.classes},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},419:function(t,e,n){"use strict";n.r(e);var o=n(6),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"badge"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},420:function(t,e,n){"use strict";n.r(e);var o=n(6),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},421:function(t,e,n){"use strict";n.r(e);var o={props:{classes:String}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"alert",class:t.classes},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},422:function(t,e,n){"use strict";n.r(e);var o={props:{classes:String}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{staticClass:"toggle",class:t.classes,attrs:{type:"checkbox",checked:""}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Input:n(86).default})},423:function(t,e,n){"use strict";n.r(e);var o={props:{classes:String}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{staticClass:"checkbox",class:t.classes,attrs:{type:"checkbox",checked:""}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Input:n(86).default})},425:function(t,e,n){"use strict";n.r(e);var o={props:{classes:String}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"avatar"},[n("div",{class:t.classes},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},454:function(t,e,n){"use strict";var o=n(2),l=n(41),c=n(455),r=n(166),d=n(5),f=1..toFixed,v=Math.floor,h=function(t,e,n){return 0===e?n:e%2==1?h(t,e-1,n*t):h(t*t,e/2,n)},m=function(data,t,e){for(var n=-1,o=e;++n<6;)o+=t*data[n],data[n]=o%1e7,o=v(o/1e7)},_=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=v(n/t),n=n%t*1e7},C=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+r.call("0",7-e.length)+e}return s};o({target:"Number",proto:!0,forced:f&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d((function(){f.call({})}))},{toFixed:function(t){var e,n,o,d,f=c(this),v=l(t),data=[0,0,0,0,0,0],x="",y="0";if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(f!=f)return"NaN";if(f<=-1e21||f>=1e21)return String(f);if(f<0&&(x="-",f=-f),f>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(f*h(2,69,1))-69)<0?f*h(2,-e,1):f/h(2,e,1),n*=4503599627370496,(e=52-e)>0){for(m(data,0,n),o=v;o>=7;)m(data,1e7,0),o-=7;for(m(data,h(10,o,1),0),o=e-1;o>=23;)_(data,1<<23),o-=23;_(data,1<<o),m(data,1,1),_(data,2),y=C(data)}else m(data,0,n),m(data,1<<-e,0),y=C(data)+r.call("0",v);return y=v>0?x+((d=y.length)<=v?"0."+r.call("0",v-d)+y:y.slice(0,d-v)+"."+y.slice(d-v)):x+y}})},455:function(t,e,n){var o=n(36);t.exports=function(t){if("number"!=typeof t&&"Number"!=o(t))throw TypeError("Incorrect invocation");return+t}},493:function(t,e,n){"use strict";n.r(e);n(38),n(47),n(454);var o={data:function(){return{activeTab:"colors",showCustomThemeTogglerSwitch:!1,applyCustomThemeToSite:!1,colorValues:{p:{hsl:"259 94% 51%",hex:"#570df8",name:"primary"},pf:{hsl:"259 94% 41%",hex:"#4506cb",name:"primary-focus"},pc:{hsl:"0 0% 100%",hex:"#ffffff",name:"primary-content"},s:{hsl:"314 100% 47%",hex:"#f000b8",name:"secondary"},sf:{hsl:"314 100% 37%",hex:"#bd0091",name:"secondary-focus"},sc:{hsl:"0 0% 100%",hex:"#ffffff",name:"secondary-content"},a:{hsl:"174 60% 51%",hex:"#37cdbe",name:"accent"},af:{hsl:"174 60% 41%",hex:"#2aa79b",name:"accent-focus"},ac:{hsl:"0 0% 100%",hex:"#ffffff",name:"accent-content"},n:{hsl:"219 14% 28%",hex:"#3d4451",name:"neutral"},nf:{hsl:"222 13% 19%",hex:"#2a2e37",name:"neutral-focus"},nc:{hsl:"0 0% 100%",hex:"#ffffff",name:"neutral-content"},b1:{hsl:"0 0% 100%",hex:"#ffffff",name:"base-100"},b2:{hsl:"210 20% 98%",hex:"#f9fafb",name:"base-200"},b3:{hsl:"216 12% 84%",hex:"#d1d5db",name:"base-300"},bc:{hsl:"215 28% 17%",hex:"#1f2937",name:"base-content"},in:{hsl:"207 90% 54%",hex:"#2094f3",name:"info"},su:{hsl:"174 100% 29%",hex:"#009485",name:"success"},wa:{hsl:"36 100% 50%",hex:"#ff9900",name:"warning"},er:{hsl:"14 100% 57%",hex:"#ff5724",name:"error"}},colors:{primary:[{title:"primary",name:"p",class:"bg-primary"},{title:"primary-focus",name:"pf",class:"bg-primary-focus"},{title:"primary-content",name:"pc",class:"bg-primary-content"}],secondary:[{title:"secondary",name:"s",class:"bg-secondary"},{title:"secondary-focus",name:"sf",class:"bg-secondary-focus"},{title:"secondary-content",name:"sc",class:"bg-secondary-content"}],accent:[{title:"accent",name:"a",class:"bg-accent"},{title:"accent-focus",name:"af",class:"bg-accent-focus"},{title:"accent-content",name:"ac",class:"bg-accent-content"}],neutral:[{title:"neutral",name:"n",class:"bg-neutral"},{title:"neutral-focus",name:"nf",class:"bg-neutral-focus"},{title:"neutral-content",name:"nc",class:"bg-neutral-content"}],base:[{title:"base-100",name:"b1",class:"bg-base-100"},{title:"base-200",name:"b2",class:"bg-base-200"},{title:"base-300",name:"b3",class:"bg-base-300"},{title:"base-content",name:"bc",class:"bg-base-content"}],state:[{title:"info",name:"in",class:"bg-info"},{title:"success",name:"su",class:"bg-success"},{title:"warning",name:"wa",class:"bg-warning"},{title:"error",name:"er",class:"bg-error"}]}}},methods:{onInputColorHexChange:function(t,e){this.colorValues[t].hex=e.replace(/^#*/,"#"),this.onColorChange(t)},onColorChange:function(t){this.hexToHsl(t),this.applyCustomThemeToSite=!0,this.showCustomThemeTogglerSwitch=!0},hexToHsl:function(t){var e=this.colorValues[t].hex;if(/^#([\da-f]{3}){1,2}$/i.test(e)){var n=0,g=0,b=0;4==e.length?(n="0x"+e[1]+e[1],g="0x"+e[2]+e[2],b="0x"+e[3]+e[3]):7==e.length&&(n="0x"+e[1]+e[2],g="0x"+e[3]+e[4],b="0x"+e[5]+e[6]),n/=255,g/=255,b/=255;var o=Math.min(n,g,b),l=Math.max(n,g,b),c=l-o,r=0,s=0,d=0;r=0==c?0:l==n?(g-b)/c%6:l==g?(b-n)/c+2:(n-g)/c+4,(r=Math.round(60*r))<0&&(r+=360),d=(l+o)/2,s=+(100*(s=0==c?0:c/(1-Math.abs(2*d-1)))).toFixed(1),d=+(100*d).toFixed(1),this.colorValues[t].hsl=Math.floor(r)+" "+Math.floor(s)+"% "+Math.floor(d)+"%"}else console.log("er")}},head:function(){return{title:"daisyUI — Colors",meta:[{hid:"description",name:"description",content:"daisyUI color scheme generator. Tailwind CSS theme generator"}]}}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"text-base-content"},[n("Wrapper",{attrs:{nocode:""}},[n("div",{staticClass:"text-xl font-bold text-base-content"},[t._v("Read the documents")]),t._v(" "),n("p",[t._v("Read everything about DaisyUI colors and theming:")]),t._v(" "),n("p",{staticClass:"mt-4"},[n("NuxtLink",{staticClass:"link",attrs:{to:"/docs/default-themes"}},[t._v("How to use themes?")]),t._v(" "),n("br"),t._v(" "),n("NuxtLink",{staticClass:"link",attrs:{to:"/docs/add-themes"}},[t._v("How to add new theme?")])],1)])],1),t._v(" "),n("div",{staticClass:"mt-10 mb-6 tabs"},[n("button",{staticClass:"tab tab-lifted tab-lg",class:{"tab-active":"colors"==t.activeTab},on:{click:function(e){t.activeTab="colors"}}},[t._v("Customize")]),t._v(" "),n("button",{staticClass:"tab tab-lifted tab-lg",class:{"tab-active":"preview"==t.activeTab},on:{click:function(e){t.activeTab="preview"}}},[t._v("Preview")]),t._v(" "),n("button",{staticClass:"tab tab-lifted tab-lg",class:{"tab-active":"output"==t.activeTab},on:{click:function(e){t.activeTab="output"}}},[t._v("Result")]),t._v(" "),n("span",{staticClass:"flex-grow hidden cursor-default tab tab-lifted tab-lg sm:block"})]),t._v(" "),n("div",{class:{hidden:"colors"!=t.activeTab},attrs:{id:"colors"}},[n("div",{staticClass:"text-xl font-bold text-base-content"},[t._v("Edit colors")]),t._v(" "),n("div",{staticClass:"mb-6"},[t._v("Choose your own colors")]),t._v(" "),t.showCustomThemeTogglerSwitch?n("div",{staticClass:"w-56 card"},[n("div",{staticClass:"form-control"},[n("label",{staticClass:"cursor-pointer label"},[n("span",{staticClass:"label-text"},[t._v("Show customized colors")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.applyCustomThemeToSite,expression:"applyCustomThemeToSite"}],staticClass:"toggle toggle-primary",attrs:{type:"checkbox",checked:"checked"},domProps:{checked:Array.isArray(t.applyCustomThemeToSite)?t._i(t.applyCustomThemeToSite,null)>-1:t.applyCustomThemeToSite},on:{change:function(e){var n=t.applyCustomThemeToSite,o=e.target,l=!!o.checked;if(Array.isArray(n)){var c=t._i(n,null);o.checked?c<0&&(t.applyCustomThemeToSite=n.concat([null])):c>-1&&(t.applyCustomThemeToSite=n.slice(0,c).concat(n.slice(c+1)))}else t.applyCustomThemeToSite=l}}})])])]):t._e(),t._v(" "),n("Wrapper",{attrs:{classes:"grid grid-cols-1 md:grid-cols-6 gap-6",nocode:""}},t._l(t.colors,(function(e,o){return n("div",{staticClass:"block mb-4"},[n("div",{staticClass:"mb-4 text-xs uppercase opacity-50"},[t._v(t._s(o))]),t._v(" "),n("div",{staticClass:"grid rounded"},[n("div",{staticClass:"flex flex-col col-start-1 row-start-1"},t._l(e,(function(o,l){return n("div",{staticClass:"relative col-start-1 row-start-1"},[n("label",{class:"flex flex-col justify-between items-start w-full h-20 transform transition-all cursor-pointer shadow hover:shadow-lg hover:-translate-y-1 "+o.class+(0===l?" rounded-t ":"")+(l===e.length-1?" rounded-b ":""),attrs:{for:o.name}},[n("div",{staticClass:"w-full px-1 text-sm text-white bg-black rounded bg-opacity-20"},[n("input",{class:"w-full rounded bg-opacity-20 "+o.class+" outline-none",attrs:{type:"text"},domProps:{value:t.colorValues[o.name].hex},on:{input:function(e){return t.onInputColorHexChange(o.name,e.target.value)}}})]),t._v(" "),n("div",{staticClass:"px-1 m-1 text-xs text-white bg-black rounded bg-opacity-20"},[t._v("\n                .bg-"+t._s(o.title)+"\n              ")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.colorValues[o.name].hex,expression:"colorValues[color.name]['hex']"}],staticClass:"absolute top-0 invisible opacity-0",attrs:{type:"color",id:o.name},domProps:{value:t.colorValues[o.name].hex},on:{change:function(e){return t.onColorChange(o.name)},input:function(e){e.target.composing||t.$set(t.colorValues[o.name],"hex",e.target.value)}}})])})),0)])])})),0)],1),t._v(" "),n("div",{class:{hidden:"preview"!=t.activeTab},attrs:{id:"preview"}},[n("div",{staticClass:"text-xl font-bold text-base-content"},[t._v("Preview components")]),t._v(" "),n("div",{staticClass:"mb-6"},[t._v("See how components will look like using you color palette")]),t._v(" "),n("div",[n("div",{staticClass:"grid grid-cols-1 gap-6 lg:p-10 xl:grid-cols-3 lg:bg-base-200 rounded-box"},[n("Navbar",{staticClass:"col-span-1 shadow-lg xl:col-span-3 bg-neutral-focus text-neutral-content rounded-box"},[n("div",{staticClass:"flex-none"},[n("Button",{attrs:{classes:"btn-square btn-ghost"}},[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"menu"}})],1)],1),t._v(" "),n("div",{staticClass:"flex-none px-2 mx-2"},[n("span",{staticClass:"text-lg font-bold"},[t._v("\n          DaisyUI\n        ")])]),t._v(" "),n("div",{staticClass:"flex justify-center flex-1 px-2 mx-2"},[n("div",{staticClass:"items-stretch hidden lg:flex"},[n("a",{staticClass:"btn btn-ghost btn-sm rounded-btn"},[t._v("\n            Home\n          ")]),t._v(" "),n("a",{staticClass:"btn btn-ghost btn-sm rounded-btn"},[t._v("\n            Portfolio\n          ")]),t._v(" "),n("a",{staticClass:"btn btn-ghost btn-sm rounded-btn"},[t._v("\n            About\n          ")]),t._v(" "),n("a",{staticClass:"btn btn-ghost btn-sm rounded-btn"},[t._v("\n            Contact\n          ")])])]),t._v(" "),n("div",{staticClass:"flex-none"},[n("Button",{attrs:{classes:"btn-square btn-ghost"}},[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"bell"}})],1)],1),t._v(" "),n("div",{staticClass:"flex-none"},[n("Button",{attrs:{classes:"btn-square btn-ghost"}},[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"search"}})],1)],1)]),t._v(" "),n("Card",{staticClass:"shadow-lg compact side bg-base-100"},[n("div",{staticClass:"flex-row items-center space-x-4 card-body"},[n("div",[n("Avatar",{attrs:{classes:"rounded-full w-14 h-14 shadow"}},[n("img",{attrs:{src:"https://i.pravatar.cc/500?img=32"}})])],1),t._v(" "),n("div",{},[n("h2",{staticClass:"card-title"},[t._v("Janis Johnson")]),t._v(" "),n("p",{staticClass:"text-base-content text-opacity-40"},[t._v("Accounts Agent")])])])]),t._v(" "),n("Card",{staticClass:"shadow-lg compact side bg-base-100"},[n("div",{staticClass:"flex-row items-center space-x-4 card-body"},[n("div",{staticClass:"flex-1"},[n("h2",{staticClass:"card-title"},[t._v("Meredith Mayer")]),t._v(" "),n("p",{staticClass:"text-base-content text-opacity-40"},[t._v("Data Liaison")])]),t._v(" "),n("div",{staticClass:"flex-0"},[n("Button",{attrs:{classes:"btn-sm"}},[t._v("Follow")])],1)])]),t._v(" "),n("Card",{staticClass:"row-span-3 shadow-lg compact bg-base-100"},[n("figure",[n("img",{attrs:{src:"https://picsum.photos/id/1005/600/400"}})]),t._v(" "),n("div",{staticClass:"flex-row items-center space-x-4 card-body"},[n("div",{},[n("h2",{staticClass:"card-title"},[t._v("Karolann Collins")]),t._v(" "),n("p",{staticClass:"text-base-content text-opacity-40"},[t._v("Direct Interactions Liaison")])])])]),t._v(" "),n("Card",{staticClass:"shadow-lg compact side bg-base-100"},[n("div",{staticClass:"flex-row items-center space-x-4 card-body"},[n("div",{staticClass:"flex-1"},[n("h2",{staticClass:"card-title text-primary"},[t._v("4,600")]),t._v(" "),n("p",{staticClass:"text-base-content text-opacity-40"},[t._v("Page views")])]),t._v(" "),n("div",{staticClass:"flex space-x-2 flex-0"},[n("Button",{attrs:{classes:"btn-sm btn-square"}},[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"eye"}})],1),t._v(" "),n("Button",{attrs:{classes:"btn-sm btn-square"}},[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"dots"}})],1)],1)])]),t._v(" "),n("Card",{staticClass:"shadow-lg compact side bg-base-100"},[n("div",{staticClass:"flex-row items-center space-x-4 card-body"},[n("label",{staticClass:"flex-0"},[n("Toggle",{attrs:{classes:"toggle-primary"}})],1),t._v(" "),n("div",{staticClass:"flex-1"},[n("h2",{staticClass:"card-title"},[t._v("Enable Notifications")]),t._v(" "),n("p",{staticClass:"text-base-content text-opacity-40"},[t._v("To get latest updates")])])])]),t._v(" "),n("Card",{staticClass:"col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-100"},[n("div",{staticClass:"card-body"},[n("h2",{staticClass:"my-4 text-4xl font-bold card-title"},[t._v("Top 10 UI Components")]),t._v(" "),n("div",{staticClass:"mb-4 space-x-2 card-actions"},[n("Badge",{staticClass:"badge-ghost"},[t._v("Colors")]),t._v(" "),n("Badge",{staticClass:"badge-ghost"},[t._v("UI Design")]),t._v(" "),n("Badge",{staticClass:"badge-ghost"},[t._v("Creativity")])],1),t._v(" "),n("p",[t._v("Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.")]),t._v(" "),n("div",{staticClass:"justify-end space-x-2 card-actions"},[n("Button",{attrs:{classes:"btn-primary"}},[t._v("Login")]),t._v(" "),n("Button",{attrs:{classes:""}},[t._v("Register")])],1)])]),t._v(" "),n("Card",{staticClass:"shadow-lg compact side bg-base-100"},[n("div",{staticClass:"flex-row items-center space-x-4 card-body"},[n("div",{staticClass:"flex-1"},[n("h2",{staticClass:"flex card-title"},[n("button",{staticClass:"btn btn-ghost btn-sm btn-circle loading"}),t._v("\n              Downloading...\n            ")]),t._v(" "),n("progress",{staticClass:"progress progress-secondary",attrs:{value:"70",max:"100"}})]),t._v(" "),n("div",{staticClass:"flex-0"},[n("button",{staticClass:"btn btn-circle"},[n("svg",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])])]),t._v(" "),n("Card",{staticClass:"shadow-lg compact side bg-base-100"},[n("div",{staticClass:"flex-row items-center space-x-4 card-body"},[n("label",{staticClass:"cursor-pointer label"},[n("Checkbox",{attrs:{classes:"checkbox-accent",checked:""}}),t._v(" "),n("span",{staticClass:"mx-4 label-text"},[t._v("Enable Autosave")])],1)])]),t._v(" "),n("Menu",{staticClass:"row-span-3 p-4 shadow-lg bg-base-100 rounded-box"},[n("MenuItem",{staticClass:"menu-title"},[n("span",[t._v("\n            Menu Title\n          ")])]),t._v(" "),n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-5 h-5 mr-2 stroke-current",attrs:{glyph:"eye"}}),t._v("\n            Item with icon\n          ")],1)]),t._v(" "),n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-5 h-5 mr-2 stroke-current",attrs:{glyph:"code"}}),t._v("\n            Item with icon\n          ")],1)]),t._v(" "),n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-5 h-5 mr-2 stroke-current",attrs:{glyph:"folder"}}),t._v("\n            Item with icon\n          ")],1)])],1),t._v(" "),n("Alert",{staticClass:"col-span-1 xl:col-span-2 bg-base-100"},[n("div",{staticClass:"flex-1"},[n("label",{staticClass:"mx-3"},[t._v("Lorem ipsum dolor sit amet, consectetur adip!")])]),t._v(" "),n("div",{staticClass:"flex-none"},[n("Button",{attrs:{classes:"btn-sm btn-ghost mr-2"}},[t._v("Cancel")]),t._v(" "),n("Button",{attrs:{classes:"btn-sm btn-primary"}},[t._v("Apply")])],1)]),t._v(" "),n("Alert",{staticClass:"col-span-1 xl:col-span-2 alert-info"},[n("div",{staticClass:"flex-1"},[n("Icon",{staticClass:"w-6 h-6 mx-2 stroke-current",attrs:{glyph:"info"}}),t._v(" "),n("label",[t._v("Lorem ipsum dolor sit amet, consectetur adip!")])],1)]),t._v(" "),n("Alert",{staticClass:"col-span-1 xl:col-span-2 alert-success"},[n("div",{staticClass:"flex-1"},[n("Icon",{staticClass:"w-6 h-6 mx-2 stroke-current",attrs:{glyph:"folder"}}),t._v(" "),n("label",[t._v("Lorem ipsum dolor sit amet, consectetur adip!")])],1)])],1)])]),t._v(" "),n("div",{class:{hidden:"output"!=t.activeTab},attrs:{id:"output"}},[n("div",{staticClass:"text-xl font-bold text-base-content"},[t._v("Theme config")]),t._v(" "),n("div",{staticClass:"mb-6"},[t._v("This is your custom color theme. Add it to tailwind.config.js")]),t._v(" "),n("div",{staticClass:"w-full max-w-2xl my-2"},[n("div",{staticClass:"text-sm shadow-lg mockup-code"},[n("pre",[n("code",[t._v("daisyui: {\n    themes: [\n      {\n        'mytheme': {\n        "),t._l(t.colorValues,(function(e,n){return[t._v("  '"+t._s(e.name)+"': '"+t._s(e.hex)+"',\n        ")]})),t._v("},\n      },\n    ],\n  },")],2)])])]),t._v(" "),t._l(t.colorValues,(function(e,o){return t.applyCustomThemeToSite?n("style",{key:o,tag:"component"},[t._v("\n:root {\n  --"+t._s(o)+": "+t._s(e.hsl)+";\n}\n")]):t._e()}))],2),t._v(" "),t._m(1),t._v(" "),n("ClassTable",{attrs:{data:{showTitle:!1,showType:!1,showColors:!0,utilities:[{class:"bg-primary",color:"bg-primary",desc:"Primary color"},{class:"bg-primary-focus",color:"bg-primary-focus",desc:"Primary color - focused"},{class:"bg-primary-content",color:"bg-primary-content",desc:"Foreground content color to use on primary color"},{class:"bg-secondary",color:"bg-secondary",desc:"Secondary color"},{class:"bg-secondary-focus",color:"bg-secondary-focus",desc:"Secondary color - focused"},{class:"bg-secondary-content",color:"bg-secondary-content",desc:"Foreground content color to use on secondary color"},{class:"bg-accent",color:"bg-accent",desc:"Accent color"},{class:"bg-accent-focus",color:"bg-accent-focus",desc:"Accent color - focused"},{class:"bg-accent-content",color:"bg-accent-content",desc:"Foreground content color to use on accent color"},{class:"bg-neutral",color:"bg-neutral",desc:"Neutral color"},{class:"bg-neutral-focus",color:"bg-neutral-focus",desc:"Neutral color - focused"},{class:"bg-neutral-content",color:"bg-neutral-content",desc:"Foreground content color to use on neutral color"},{class:"bg-base-100",color:"bg-base-100",desc:"Base color of page, used for blank backgrounds"},{class:"bg-base-200",color:"bg-base-200",desc:"Base color, a little darker"},{class:"bg-base-300",color:"bg-base-300",desc:"Base color, even more darker"},{class:"bg-base-content",color:"bg-base-content",desc:"Foreground content color to use on base color"},{class:"bg-info",color:"bg-info",desc:"Info color"},{class:"bg-success",color:"bg-success",desc:"Success color"},{class:"bg-warning",color:"bg-warning",desc:"Warning color"},{class:"bg-error",color:"bg-error",desc:"Error color"}]}}}),t._v(" "),n("div",{staticClass:"flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200"},[n("NuxtLink",{staticClass:"text-xs btn-lg btn lg:text-lg",attrs:{to:"/core/layout"}},[t._v("\n        Next: layout\n        "),n("Icon",{staticClass:"inline-block w-6 h-6 ml-2 stroke-current",attrs:{glyph:"arrow"}})],1)],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"my-6 text-5xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Colors")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-20"},[t._v("\n      You can use color names in utility classes just like Tailwind's color names.border-opacity-20\n      "),n("br"),t._v("\n      These are default utility classes that use color names:\n\n      "),n("div",{staticClass:"mt-6 text-sm shadow-lg mockup-code"},[n("pre",[t._v("  "),n("code",[t._v("bg-"),n("span",{staticClass:"text-info"},[t._v("{COLOR_NAME}")]),t._v("\n    text-"),n("span",{staticClass:"text-info"},[t._v("{COLOR_NAME}")]),t._v("\n    border-"),n("span",{staticClass:"text-info"},[t._v("{COLOR_NAME}")]),t._v("\n    from-"),n("span",{staticClass:"text-info"},[t._v("{COLOR_NAME}")]),t._v("\n    via-"),n("span",{staticClass:"text-info"},[t._v("{COLOR_NAME}")]),t._v("\n    to-"),n("span",{staticClass:"text-info"},[t._v("{COLOR_NAME}")]),t._v("\n    placeholder-"),n("span",{staticClass:"text-info"},[t._v("{COLOR_NAME}")]),t._v("\n    divide-"),n("span",{staticClass:"text-info"},[t._v("{COLOR_NAME}")]),t._v("\n    ring-"),n("span",{staticClass:"text-info"},[t._v("{COLOR_NAME}")]),t._v("\n    ring-offset-"),n("span",{staticClass:"text-info"},[t._v("{COLOR_NAME}")])])])]),t._v(" "),n("br"),t._v("\n      For example these are all the background colors:\n    ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Wrapper:n(413).default,Button:n(406).default,Input:n(86).default,Icon:n(115).default,Button:n(406).default,Navbar:n(418).default,Avatar:n(425).default,Card:n(420).default,Toggle:n(422).default,Badge:n(419).default,Progress:n(416).default,Checkbox:n(423).default,MenuItem:n(116).default,Menu:n(117).default,Alert:n(421).default,ClassTable:n(414).default})}}]);