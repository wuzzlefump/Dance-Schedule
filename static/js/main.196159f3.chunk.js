(this["webpackJsonpdance-schedule"]=this["webpackJsonpdance-schedule"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),l=n(17),o=n.n(l),s=(n(26),n(12)),r=(n(27),n(6)),i=n.n(r),u=n(20),d=(n(28),n(19)),j=n(1);function h(){var e=c.useState(new Date),t=Object(u.a)(e,2),n=t[0],a=t[1];return c.useEffect((function(){var e=setInterval((function(){return a(new Date)}),1e3);return function(){clearInterval(e)}}),[]),Object(j.jsx)(d.a,{size:50,value:n})}var b=n(7);function x(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("nav",{className:i.a.layoutNav,children:[Object(j.jsx)(h,{}),window.location.href.includes("todo")?Object(j.jsx)(b.b,{style:{textDecoration:"none"},to:"/",children:Object(j.jsx)("span",{className:i.a.linkItem,children:"Schedule"})}):Object(j.jsx)(b.b,{style:{textDecoration:"none"},to:"/todo",children:Object(j.jsx)("span",{className:i.a.linkItem,children:"To Do List"})})]}),Object(j.jsxs)("main",{className:i.a.layoutSchedule,children:[Object(j.jsx)("h1",{children:"Daily Work Schedule"}),Object(j.jsx)("div",{className:i.a.schedule,children:e.children})]})]})}var O=n(3),m=c.lazy((function(){return Promise.all([n.e(4),n.e(5)]).then(n.bind(null,81))})),f=c.lazy((function(){return Promise.all([n.e(2),n.e(6)]).then(n.bind(null,82))}));var y=function(){var e=[{path:"/",title:"Schedule",comp:Object(j.jsx)(m,{}),Layout:x,Route:O.a},{path:"/todo",title:"Todo",comp:Object(j.jsx)(f,{}),Layout:x,Route:O.a}];return Object(j.jsx)(b.a,{basename:"/dance-schedule",children:Object(j.jsx)(O.c,{children:e.map((function(e,t){var n=e.Route;return Object(j.jsx)(n,{exact:!0,path:e.path,children:Object(j.jsx)(e.Layout,Object(s.a)(Object(s.a)({},e.layoutProps),{},{children:Object(j.jsx)(c.Suspense,{fallback:"Loading",children:e.comp})}))},t)}))})})},p=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,80)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),l(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),p()},6:function(e,t,n){e.exports={layoutNav:"style_layoutNav__2nIux",linkItem:"style_linkItem__3Bglm",layoutSchedule:"style_layoutSchedule__2_yrG"}}},[[34,1,3]]]);
//# sourceMappingURL=main.196159f3.chunk.js.map