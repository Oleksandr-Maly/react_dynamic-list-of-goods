(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(8),a=n.n(r),c=n(2),o=n(7),s=n(1),u=n.n(s),i=n(3),l=(n(15),n(16),n(0)),p=function(t){var e=t.goods;return Object(l.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(t){var e=t.id,n=t.color,r=t.name;return Object(l.jsx)("li",{"data-cy":"good",style:{color:n},children:r},e)}))})},d=n(9),f="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json";function b(){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(f);case 2:if((e=t.sent).ok){t.next=5;break}return t.abrupt("return",Promise.reject(new Error("Can`t load Goods")));case 5:return t.abrupt("return",e.json());case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var v=function(){var t=Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:return e=t.sent,t.abrupt("return",Object(d.a)(e).sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:return e=t.sent,t.abrupt("return",e.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(i.useState)(null),e=Object(o.a)(t,2),n=e[0],r=e[1],a=Object(i.useState)(!1),s=Object(o.a)(a,2),d=s[0],f=s[1],j=function(){var t=Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b();case 3:e=t.sent,f(!1),r(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),f(!0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v();case 3:e=t.sent,f(!1),r(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),f(!0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h();case 3:e=t.sent,f(!1),r(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),f(!0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"App section",children:[Object(l.jsx)("h1",{className:"title",children:"Dynamic list of Goods"}),Object(l.jsx)("button",{className:"button",type:"button","data-cy":"all-button",onClick:j,children:"Load all goods"}),Object(l.jsx)("button",{className:"button",type:"button","data-cy":"first-five-button",onClick:m,children:"Load 5 first goods"}),Object(l.jsx)("button",{className:"button",type:"button","data-cy":"red-button",onClick:x,children:"Load red goods"}),d?Object(l.jsx)("p",{children:"Could`t load data from server"}):Object(l.jsx)(p,{goods:n})]})};a.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.769f890d.chunk.js.map