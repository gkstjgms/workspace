/*! For license information please see main.864737e3.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-server"]=this["webpackJsonpmy-server"]||[]).push([[0],{38:function(t,e,n){t.exports=n(69)},43:function(t,e,n){},44:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),a=n(30),i=n.n(a),c=n(6),u=n(35),l=n(2),s=(n(43),n(5)),f=n(31);var h=o.a.memo((function(){var t=Object(r.useState)(""),e=Object(s.a)(t,2),n=(e[0],e[1]),a=Object(r.useState)(""),i=Object(s.a)(a,2),c=(i[0],i[1]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"login-head-block"},o.a.createElement("h1",null,"Login")),o.a.createElement("div",{className:"login-insert-form"},o.a.createElement("h2",null,"Id"),o.a.createElement("form",{className:"input-id"},o.a.createElement("input",{className:"login-input",placeholder:"Id",onChange:function(t){return n(t.target.value)}})),o.a.createElement("h2",null,"Password"),o.a.createElement("form",{className:"insert-pw"},o.a.createElement("input",{className:"login-input",type:"password",placeholder:"Password",onChange:function(t){return c(t.target.value)}}))),o.a.createElement("button",{className:"login-button"},o.a.createElement(f.a,null)))}));var p=function(){return o.a.createElement("div",{className:"login-template"},o.a.createElement(h,null))},d=(n(44),n(34)),v=n(8),m=n(18),y=n(11),g=n.n(y);function b(){b=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(N){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return k()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var s={};function f(){}function h(){}function p(){}var d={};c(d,o,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(L([])));m&&m!==e&&n.call(m,o)&&(d=m);var y=p.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=p,c(y,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(E.prototype),c(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}function E(){return(E=Object(v.a)(b().mark((function t(e){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.post("/addTodo",{text:e.text});case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function w(){return x.apply(this,arguments)}function x(){return(x=Object(v.a)(b().mark((function t(){var e;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get("/getTodo",{});case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function O(){return(O=Object(v.a)(b().mark((function t(e){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.put("/putTodo",{id:e.id,done:1===e.done?0:1});case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function j(){return(j=Object(v.a)(b().mark((function t(e){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.delete("/deleteTodo",{data:{id:e.id}});case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function L(){L=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(N){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return k()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var s={};function f(){}function h(){}function p(){}var d={};c(d,o,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(j([])));m&&m!==e&&n.call(m,o)&&(d=m);var y=p.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=p,c(y,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(b.prototype),c(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new b(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var k=Object(r.createContext)(null),N=Object(r.createContext)(null),_=Object(r.createContext)(null);function S(t,e){switch(e.type){case"CREATE":return function(t){E.apply(this,arguments)}(e.todo),t.concat(e.todo);case"REPLACE":return e.array;case"TOGGLE":return function(t){O.apply(this,arguments)}(t.filter((function(t){return t.id===e.id}))[0]),t.map((function(t){return t.id===e.id?Object(m.a)(Object(m.a)({},t),{},{done:!t.done}):t}));case"REMOVE":return function(t){j.apply(this,arguments)}(t.filter((function(t){return t.id===e.id}))[0]),t.filter((function(t){return t.id!==e.id}));default:return t}}var G=[{id:1,text:"sample",done:!1},{id:2,text:"page",done:!0}];function P(t){var e,n=t.children,a=Object(r.useReducer)(S,G),i=Object(s.a)(a,2),c=i[0],u=i[1],l=Object(r.useState)(3),f=Object(s.a)(l,2),h=f[0],p=f[1];function d(){return(d=Object(v.a)(L().mark((function t(){var n;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:e=t.sent,n=e[e.length-1].id,p(n+1),u({type:"REPLACE",array:e});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),o.a.createElement(k.Provider,{value:c},o.a.createElement(N.Provider,{value:u},o.a.createElement(_.Provider,{value:h},n)))}function T(){return Object(r.useContext)(k)}function C(){return Object(r.useContext)(N)}var F,I,R,A,z,Y,M=function(){var t=new Date,e=t.toLocaleString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),n=t.toLocaleString("ko-KR",{weekday:"long"}),r=T().filter((function(t){return!t.done}));return o.a.createElement("div",{className:"head-block"},o.a.createElement("h1",null,e),o.a.createElement("div",{className:"day"},n),o.a.createElement("div",{className:"tasks-left"},"\ud560 \uc77c ",r.length,"\uac1c \ub0a8\uc74c"))},D=n(7),J=n(10),K=D.c.div(F||(F=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #dee2e6;\n  font-size: 24px;\n  cursor: pointer;\n  &:hover {\n    color: #ff6b6b;\n  }\n  display: none;\n"]))),V=D.c.div(I||(I=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  &:hover {\n    "," {\n      display: initial;\n    }\n  }\n"])),K),B=D.c.div(R||(R=Object(c.a)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 16px;\n  border: 1px solid #ced4da;\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n  cursor: pointer;\n  ","\n"])),(function(t){return t.done&&Object(D.b)(A||(A=Object(c.a)(["\n      border: 1px solid #3866d9;\n      color: #3866d9;\n    "])))})),q=D.c.div(z||(z=Object(c.a)(["\n  flex: 1;\n  font-size: 21px;\n  color: #495057;\n  ","\n"])),(function(t){return t.done&&Object(D.b)(Y||(Y=Object(c.a)(["\n      color: #ced4da;\n    "])))}));var H=o.a.memo((function(t){var e=t.id,n=t.done,r=t.text,a=C();return o.a.createElement(V,null,o.a.createElement(B,{done:n,onClick:function(){a({type:"TOGGLE",id:e})}},1===n&&o.a.createElement(J.c,null)),o.a.createElement(q,{done:n},r),o.a.createElement(K,{onClick:function(){a({type:"REMOVE",id:e})}},o.a.createElement(J.b,null)))}));var Q,U,W=function(){var t=T();return o.a.createElement("div",{className:"list-block"},t.map((function(t){return o.a.createElement(H,{id:t.id,text:t.text,done:t.done,key:t.id})})))},X=D.c.button(Q||(Q=Object(c.a)(["\n  background: #3866d9;\n  &:hover {\n    background: #6382e6;\n  }\n  &:active {\n    background: #2050c9;\n  }\n\n  z-index: 5;\n  cursor: pointer;\n  width: 80px;\n  height: 80px;\n  display: block;\n  align-items: center;\n  justify-content: center;\n  font-size: 60px;\n  position: absolute;\n  left: 50%;\n  bottom: 0px;\n  transform: translate(-50%, 50%);\n  color: white;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  transition: 0.125s all ease-in;\n  ","\n"])),(function(t){return t.open&&Object(D.b)(U||(U=Object(c.a)(["\n      background: #ff6b6b;\n      &:hover {\n        background: #ff8787;\n      }\n      &:active {\n        background: #fa5252;\n      }\n      transform: translate(-50%, 50%) rotate(45deg);\n    "])))}));var Z,$=o.a.memo((function(){var t=Object(r.useState)(!1),e=Object(s.a)(t,2),n=e[0],a=e[1],i=Object(r.useState)(""),c=Object(s.a)(i,2),u=c[0],l=c[1],f=C(),h=Object(r.useContext)(_);return o.a.createElement(o.a.Fragment,null,n&&o.a.createElement("div",{className:"insert-form-positioner"},o.a.createElement("form",{className:"insert-form",onSubmit:function(t){t.preventDefault(),f({type:"CREATE",todo:{id:h||h.current,text:u,done:!1}}),a(!1),l("")}},o.a.createElement("input",{className:"input",autoFocus:!0,onChange:function(t){return l(t.target.value)},value:u,placeholder:"\ud560 \uc77c\uc744 \uc785\ub825 \ud6c4, Enter \ub97c \ub204\ub974\uc138\uc694"}))),o.a.createElement(X,{onClick:function(){return a(!n)},open:n},o.a.createElement(J.a,null)))})),tt=function(){return o.a.createElement("div",{className:"template-block"},o.a.createElement("button",{className:"circle-button"},o.a.createElement(d.a,null)),o.a.createElement(M,null),o.a.createElement(W,null),o.a.createElement($,null))},et=Object(D.a)(Z||(Z=Object(c.a)(["\n  body {\n    background: #e9ecef\n  }\n"]))),nt=function(){return o.a.createElement(u.a,null,o.a.createElement(P,null,o.a.createElement(et,null),o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/",element:o.a.createElement(p,null)}),o.a.createElement(l.a,{path:"/main",element:o.a.createElement(tt,null)}))))};i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(nt,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.864737e3.chunk.js.map