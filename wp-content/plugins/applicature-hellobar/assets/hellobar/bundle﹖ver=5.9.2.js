!function(o){var n={};function r(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=o,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,o){},function(e,t,o){"use strict";o.r(t);o(0);function s(e){return function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}window.addEventListener("load",function(){var t=window.location.href,e=window.localStorage,o=document.body,n=document.querySelector(".top-bar"),r=document.querySelector(".fixed-top"),l=s(document.querySelectorAll(".main-href")),i=Number(o.dataset.hellobar_delay)||0,c=function(){document.querySelector(".top-bar .btn-close")&&(s(document.querySelectorAll(".top-bar .close")).forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),n.classList.add("top-bar-close"),o.classList.remove("hello-bar-is-active"),r&&(r.style.top="-1px",r.style.position="fixed"),o.classList.contains("hello-bar-fixed")&&o.classList.remove("hello-bar-fixed")})}),document.querySelector(".close-forever")&&document.querySelector(".close-forever").addEventListener("click",function(){e.setItem("helloBar","false")})),!o.classList.contains("hello-bar-fixed")&&o.classList.contains("hello-bar-is-active")&&window.addEventListener("scroll",function(){var e={scrollTop:window.pageYOffset||document.documentElement.scrollTop},t=n.clientHeight;document.querySelector(".fixed-top")&&o.classList.contains("hello-bar-is-active")&&(r.style.transition="none",r.style.position=t<e?(r.style.top="-1px","fixed"):(r.style.top="".concat(t,"px"),"absolute"))})},a=!1;if(l.forEach(function(e){e.href===t&&(a=!0)}),("false"===e.helloBar||a)&&o.classList.contains("hello-bar-fixed"))return o.classList.remove("hello-bar-fixed"),null;setTimeout(function(){o.classList.add("hello-bar-is-active"),n.classList.add("open"),c()},i)})}]);