(this["webpackJsonpdance-schedule"]=this["webpackJsonpdance-schedule"]||[]).push([[6],{52:function(t,e,n){t.exports={inputContainer:"style_inputContainer__J49bz",todoContainer:"style_todoContainer__2JJnm"}},81:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return j}));var c=n(76),a=n(0),o=n(52),r=n.n(o),s=n(42),i=n(74),u=n(77),l=n(75),d=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).list=[],t.currentInputValue="",t}return n}(s.Model),p=n(1);function j(){var t=d.use(),e=t.list,n=t.currentInputValue,o=t.set,i=null!==JSON.parse(localStorage.getItem("todos"))?JSON.parse(localStorage.getItem("todos")):[];return a.useEffect((function(){return o.list=null!==i?i:[]}),[]),Object(p.jsx)(s.Provider,{of:d,list:e,currentInputValue:n,children:Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:r.a.todoContainer,children:e.map((function(t,n){return Object(p.jsxs)("span",{children:[Object(p.jsx)("input",{onFocus:function(){var n=e;n.pop(t),o.list=Object(c.a)(n),localStorage.setItem("todos",JSON.stringify(Object(c.a)(n)))},type:"checkbox"}),Object(p.jsx)("span",{children:t})]})}))}),Object(p.jsxs)("div",{className:r.a.inputContainer,children:[Object(p.jsx)("input",{onChange:function(t){o.currentInputValue=t.target.value},name:"newToDo",value:n}),Object(p.jsx)("button",{onClick:function(t){!function(t){if(t.preventDefault(),e.includes(n))return null;o.list=[].concat(Object(c.a)(e),[n]),localStorage.setItem("todos",JSON.stringify([].concat(Object(c.a)(e),[n])))}(t)},children:"+"})]})]})})}}}]);
//# sourceMappingURL=6.8d028618.chunk.js.map