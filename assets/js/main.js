!function(e,t,n,i,a,o,r){e.GoogleAnalyticsObject=a,e[a]=e[a]||function(){(e[a].q=e[a].q||[]).push(arguments)},e[a].l=1*new Date,o=t.createElement(n),r=t.getElementsByTagName(n)[0],o.async=1,o.src=i,r.parentNode.insertBefore(o,r)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-59938499-2","auto"),ga("send","pageview"),$(document).ready(function(){echo.init({offset:100,throttle:250,unload:!1}),$(document).on("click",".mfp-iframe",function(e){e.preventDefault(),$(this).magnificPopup({type:"iframe"}).magnificPopup("open")}),inphinity("#main").set({navSelector:"p.pagination",nextSelector:"p.pagination a.older",itemSelector:"#main div.lectures",loader:!1}),smoothScroll.init({updateURL:!1})}),$(function(){$(".nav-category").click(function(){$(".sub-menu").toggle()})}),function(e,t){"function"==typeof define&&define.amd?define(function(){return t(e)}):"object"==typeof exports?module.exports=t:e.echo=t(e)}(this,function(e){"use strict";var t,n,i,a,o,r={},s=function(){},l=function(e){return null===e.offsetParent},c=function(e,t){if(l(e))return!1;var n=e.getBoundingClientRect();return n.right>=t.l&&n.bottom>=t.t&&n.left<=t.r&&n.top<=t.b},u=function(){(a||!n)&&(clearTimeout(n),n=setTimeout(function(){r.render(),n=null},i))};return r.init=function(n){n=n||{};var l=n.offset||0,c=n.offsetVertical||l,d=n.offsetHorizontal||l,h=function(e,t){return parseInt(e||t,10)};t={t:h(n.offsetTop,c),b:h(n.offsetBottom,c),l:h(n.offsetLeft,d),r:h(n.offsetRight,d)},i=h(n.throttle,250),a=n.debounce!==!1,o=!!n.unload,s=n.callback||s,r.render(),document.addEventListener?(e.addEventListener("scroll",u,!1),e.addEventListener("load",u,!1)):(e.attachEvent("onscroll",u),e.attachEvent("onload",u))},r.render=function(){for(var n,i,a=document.querySelectorAll("img[data-echo], [data-echo-background]"),l=a.length,u={l:0-t.l,t:0-t.t,b:(e.innerHeight||document.documentElement.clientHeight)+t.b,r:(e.innerWidth||document.documentElement.clientWidth)+t.r},d=0;l>d;d++)i=a[d],c(i,u)?(o&&i.setAttribute("data-echo-placeholder",i.src),null!==i.getAttribute("data-echo-background")?i.style.backgroundImage="url("+i.getAttribute("data-echo-background")+")":i.src=i.getAttribute("data-echo"),o||(i.removeAttribute("data-echo"),i.removeAttribute("data-echo-background")),s(i,"load")):o&&(n=i.getAttribute("data-echo-placeholder"))&&(null!==i.getAttribute("data-echo-background")?i.style.backgroundImage="url("+n+")":i.src=n,i.removeAttribute("data-echo-placeholder"),s(i,"unload"));l||r.detach()},r.detach=function(){document.removeEventListener?e.removeEventListener("scroll",u):e.detachEvent("onscroll",u),clearTimeout(n)},r});var inphinity=function(){return this.loading=!1,this.debug=!1,this.url="",this.currentPage=1,this.itemSelector="div.post",this.nextSelector="div.navigation a:first",this.navSelector="div.navigation",this.basePath=!1,this.path=!1,this.dataType="html",this.bag=!1,this.bagClassName=!1,this.loader=!0,this.trustedRequest=!1,this.defaults={finishedMsg:"<em>That's all folks!</em>",loadingMsg:"Loading more...",animationSpeed:500},this.scroller=function(e){if(this.loading!==!0){var t=this.element.offsetTop+this.element.offsetHeight,n=t-e;750>=n&&(this.loading=!0,this.request())}},this.getPath=function(){var e=this.basePath;if(e.match(/^(.*?)\b2\b(.*?$)/))e=e.match(/^(.*?)\b2\b(.*?$)/).slice(1);else if(e.match(/^(.*?)2(.*?$)/)){if(e.match(/^(.*?page=)2(\/.*|$)/))return e=e.match(/^(.*?page=)2(\/.*|$)/).slice(1);e=e.match(/^(.*?)2(.*?$)/).slice(1)}else{if(e.match(/^(.*?page=)1(\/.*|$)/))return e=e.match(/^(.*?page=)1(\/.*|$)/).slice(1);this.currentPage=e.match(/\d+/)[0]-1,e=[this.path,""]}return e},this.getUrlPath=function(){var e=document.querySelector(this.nextSelector).href.split("/");return e[e.length-1]},this.createBag=function(){var e=document.createElement("div");e.style.display="none",this.bagClassName=this.bagClassName||"ph-bag",e.className=this.bagClassName,document.querySelector("body").appendChild(e),this.bag=document.querySelector("."+this.bagClassName)},this.createLoader=function(){var e=document.createElement("div");e.style.display="none",e.className="ph-loader",this.defaults.loadingMsg&&(e.innerHTML=this.defaults.loadingMsg),this.element.appendChild(e),this.loader=document.querySelector(".ph-loader")},this.updateLoader=function(){this.element.removeChild(this.loader),this.createLoader()},this.loaderToggle=function(e,t){return this.loader?(this.loader.style.display="block",void(e===!0?this.animation().fadeIn(this.loader,t):e===!1&&this.animation().fadeOut(this.loader,t))):void("function"==typeof t&&t())},this.request=function(){var e=this,t=e.path+""+(e.currentPage+1),n=new XMLHttpRequest;window.location.pathname.indexOf(e.path)>-1&&(t="../"+t),e.loaderToggle(!0),n.open("GET",encodeURI(t)),n.onload=function(){if(200===n.status||e.trustedRequest){var t=/<body[^>]*>((.|[\n\r])*)<\/body>/im.exec(n.responseText).slice(1)[0];e.trustedRequest=!0,e.loaderToggle(!1,e.render.bind(e,t))}else e._debug("Request failed. Returned status of "+n.status)},n.send()},this.render=function(e,t){var n=this;n.bag.innerHTML=e;var i=n.bag.querySelectorAll(n.itemSelector);if(!i.length)return n.finished();if(t!==!0){var a=document.querySelector(n.navSelector);return n.animation().fadeOut(a,function(){return n.render(e,!0)})}for(var o=0;o<i.length;o++)n.element.appendChild(i[o]);n.toNext()},this.toNext=function(){this.loader&&this.updateLoader(),this.currentPage=this.currentPage+1,this.loading=!1},this.finished=function(){var e=document.createElement("div");e.className="ph-end",e.innerHTML=this.defaults.finishedMsg,this.element.appendChild(e)},this.on=function(e){return this.sel=e,this.element=document.querySelector(e),this},this.set=function(e){e.navSelector&&(this.navSelector=e.navSelector),e.nextSelector&&(this.nextSelector=e.nextSelector),e.itemSelector&&(this.itemSelector=e.itemSelector),e.path&&(this.path=e.path),e.basePath&&(this.basePath=e.basePath),e.loader===!1&&(this.loader=e.loader),e.loadingMsg&&(this.defaults.loadingMsg=e.loadingMsg),e.finishedMsg&&(this.defaults.finishedMsg=e.finishedMsg),e.animationSpeed&&(this.defaults.animationSpeed=e.animationSpeed,"slow"===e.animationSpeed&&(this.defaults.animationSpeed=800),"normal"===e.animationSpeed&&(this.defaults.animationSpeed=500),"fast"===e.animationSpeed&&(this.defaults.animationSpeed=300)),document.querySelector(e.navSelector)&&this.init()},this.init=function(){this.basePath=this.basePath||this.getUrlPath(),this.path=this.path||this.getPath()[0]||"page",this.loader&&this.createLoader(),this.createBag(),this.setEventScroll()},this.setEventScroll=function(){var e=this;window.addEventListener("scroll",function(t){e.scroller(window.scrollY||t.target.activeElement.scrollTop)})},this._debug=function(e){console.log("Inphinity: ",e)},this.animation=function(){var e=this;return{fadeOut:function(t,n){t.style.opacity=1;var i=+new Date,a=function(){if(t.style.opacity=+t.style.opacity-(new Date-i)/e.defaults.animationSpeed,i=+new Date,+t.style.opacity>0)window.requestAnimationFrame&&requestAnimationFrame(a)||setTimeout(a,16);else{if(t.style.display="none","undefined"==typeof n)return!0;n()}};a()},fadeIn:function(t,n){t.style.opacity=0;var i=+new Date,a=function(){if(t.style.opacity=+t.style.opacity+(new Date-i)/e.defaults.animationSpeed,i=+new Date,+t.style.opacity<1)window.requestAnimationFrame&&requestAnimationFrame(a)||setTimeout(a,16);else{if("undefined"==typeof n)return!0;n()}};a()}}},this.on.bind(this)}();!function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t,n,i,a,o={},r="querySelector"in document&&"addEventListener"in e,s={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},l=function(){var e={},t=!1,n=0,i=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var a=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=l(!0,e[i],n[i]):e[i]=n[i])};i>n;n++){var o=arguments[n];a(o)}return e},c=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},u=function(e,t){var n,i,a=t.charAt(0),o="classList"in document.documentElement;for("["===a&&(t=t.substr(1,t.length-2),n=t.split("="),n.length>1&&(i=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,"")));e&&e!==document;e=e.parentNode){if("."===a)if(o){if(e.classList.contains(t.substr(1)))return e}else if(new RegExp("(^|\\s)"+t.substr(1)+"(\\s|$)").test(e.className))return e;if("#"===a&&e.id===t.substr(1))return e;if("["===a&&e.hasAttribute(n[0])){if(!i)return e;if(e.getAttribute(n[0])===n[1])return e}if(e.tagName.toLowerCase()===t)return e}return null},d=function(e){for(var t,n=String(e),i=n.length,a=-1,o="",r=n.charCodeAt(0);++a<i;){if(t=n.charCodeAt(a),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");o+=t>=1&&31>=t||127==t||0===a&&t>=48&&57>=t||1===a&&t>=48&&57>=t&&45===r?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(a):"\\"+n.charAt(a)}return o},h=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},f=function(e,t,n){var i=0;if(e.offsetParent)do i+=e.offsetTop,e=e.offsetParent;while(e);return i=i-t-n,i>=0?i:0},m=function(){return Math.max(e.document.body.scrollHeight,e.document.documentElement.scrollHeight,e.document.body.offsetHeight,e.document.documentElement.offsetHeight,e.document.body.clientHeight,e.document.documentElement.clientHeight)},g=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},p=function(t,n){e.history.pushState&&(n||"true"===n)&&"file:"!==e.location.protocol&&e.history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))},v=function(e){return null===e?0:c(e)+e.offsetTop};o.animateScroll=function(t,n,o){var r=g(t?t.getAttribute("data-options"):null),c=l(c||s,o||{},r);n="#"+d(n.substr(1));var u="#"===n?e.document.documentElement:e.document.querySelector(n),b=e.pageYOffset;i||(i=e.document.querySelector(c.selectorHeader)),a||(a=v(i));var y,S,w,E=f(u,a,parseInt(c.offset,10)),L=E-b,q=m(),A=0;p(n,c.updateURL);var O=function(i,a,o){var r=e.pageYOffset;(i==a||r==a||e.innerHeight+r>=q)&&(clearInterval(o),u.focus(),c.callback(t,n))},T=function(){A+=16,S=A/parseInt(c.speed,10),S=S>1?1:S,w=b+L*h(c.easing,S),e.scrollTo(0,Math.floor(w)),O(w,E,y)},I=function(){y=setInterval(T,16)};0===e.pageYOffset&&e.scrollTo(0,0),I()};var b=function(e){var n=u(e.target,t.selector);n&&"a"===n.tagName.toLowerCase()&&(e.preventDefault(),o.animateScroll(n,n.hash,t))},y=function(e){n||(n=setTimeout(function(){n=null,a=v(i)},66))};return o.destroy=function(){t&&(e.document.removeEventListener("click",b,!1),e.removeEventListener("resize",y,!1),t=null,n=null,i=null,a=null)},o.init=function(n){r&&(o.destroy(),t=l(s,n||{}),i=e.document.querySelector(t.selectorHeader),a=v(i),e.document.addEventListener("click",b,!1),i&&e.addEventListener("resize",y,!1))},o});