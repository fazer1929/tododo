(this.webpackJsonptododo=this.webpackJsonptododo||[]).push([[0],{12:function(e,t,a){e.exports={navbar:"Nav_navbar__1rCga",navbarLink:"Nav_navbarLink__3a8o4",active:"Nav_active__bsDO1"}},18:function(e,t,a){e.exports={container:"Todo_container__Q4Hnj",task:"Todo_task__1kBEE",done:"Todo_done__2D7M9"}},24:function(e,t,a){},3:function(e,t,a){e.exports={container:"Quadrant_container__2wC0b",innerContainer:"Quadrant_innerContainer__1Nhi8",row1:"Quadrant_row1__HJAh2",row2:"Quadrant_row2__2NTIW",row3:"Quadrant_row3__2YU0X",dummyBox:"Quadrant_dummyBox__2Da86",verHeading:"Quadrant_verHeading__3cWVR",horiHeading:"Quadrant_horiHeading__2psrp",quad:"Quadrant_quad__38GAQ",todoInputContainer:"Quadrant_todoInputContainer__3-h7i",todoInput:"Quadrant_todoInput__3EeI5",todos:"Quadrant_todos__2cCk7"}},34:function(e,t,a){},35:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(25),i=a.n(s),o=(a(34),a(35),a(13)),r=a(5),d=a(12),j=a.n(d),l=a(1);var u=function(){return Object(l.jsxs)("div",{className:j.a.navbar,children:[Object(l.jsx)("div",{className:j.a.navbarLink,children:Object(l.jsx)(o.b,{to:"/",exact:!0,activeClassName:j.a.active,children:"Time Quadrants"})}),Object(l.jsx)("div",{className:j.a.navbarLink,children:Object(l.jsx)(o.b,{to:"/pomo",activeClassName:j.a.active,children:"Pomodoro"})})]})},b=a(29),x=a(19),O=a(3),h=a.n(O),m=a(11),v=a.n(m),p=a(15),_=a(16),N=a(27),f=a(18),g=a.n(f);var k=function(e){var t=e.task,a=e.completed;return Object(l.jsx)("div",{className:g.a.container,children:Object(l.jsx)("p",{className:v()(g.a.task,Object(N.a)({},g.a.done,a)),children:t})})};var C=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(x.a)(s,2),o=i[0],r=i[1],d=Object(n.useState)(0),j=Object(x.a)(d,2),u=j[0],O=j[1];Object(n.useEffect)((function(){c(JSON.parse(localStorage.getItem("todos"))),console.log(localStorage.getItem("todos"))}),[]);var m=function(e){if(o.length>0){var t=[].concat(Object(b.a)(a),[{task:o,quad:e,completed:!1}]);c(t),r(""),O(0),localStorage.setItem("todos",JSON.stringify(t))}};return Object(l.jsx)("div",{className:h.a.container,children:Object(l.jsxs)("div",{className:h.a.innerContainer,children:[Object(l.jsxs)("div",{className:h.a.row1,children:[Object(l.jsx)("div",{className:h.a.dummyBox}),Object(l.jsx)("div",{className:v()(h.a.heading,h.a.horiHeading),children:Object(l.jsx)("h4",{children:"Urgent"})}),Object(l.jsx)("div",{className:v()(h.a.heading,h.a.horiHeading),children:Object(l.jsx)("h4",{children:"Not Urgent"})})]}),Object(l.jsxs)("div",{className:h.a.row2,children:[Object(l.jsx)("div",{className:v()(h.a.heading,h.a.verHeading),children:Object(l.jsx)("h4",{children:"Important"})}),Object(l.jsxs)("div",{className:h.a.quad,children:[Object(l.jsxs)("div",{className:h.a.addElems,children:[Object(l.jsx)("button",{onClick:function(){return O(1)},children:Object(l.jsx)(p.a,{size:30})}),1==u?Object(l.jsxs)("div",{className:h.a.todoInputContainer,children:[Object(l.jsx)("input",{value:o,onChange:function(e){return r(e.target.value)},className:h.a.todoInput,type:"text",placeholder:"Enter You Task"}),Object(l.jsx)("button",{type:"submit",onClick:function(){return m(1)},children:Object(l.jsx)(_.a,{size:25})})]}):""]}),Object(l.jsx)("div",{className:h.a.todos,children:a.map((function(e,t){if(1==e.quad)return Object(l.jsx)(k,{task:e.task,completed:e.completed},t)}))})]}),Object(l.jsxs)("div",{className:h.a.quad,children:[Object(l.jsxs)("div",{className:h.a.addElems,children:[Object(l.jsx)("button",{onClick:function(){return O(2)},children:Object(l.jsx)(p.a,{size:30})}),2==u?Object(l.jsxs)("div",{className:h.a.todoInputContainer,children:[Object(l.jsx)("input",{value:o,onChange:function(e){return r(e.target.value)},className:h.a.todoInput,type:"text",placeholder:"Enter You Task"}),Object(l.jsx)("button",{type:"submit",onClick:function(){return m(2)},children:Object(l.jsx)(_.a,{size:25})})]}):""]}),Object(l.jsx)("div",{className:h.a.todos,children:a.map((function(e,t){if(2==e.quad)return Object(l.jsx)(k,{task:e.task,completed:e.completed},t)}))})]})]}),Object(l.jsxs)("div",{className:h.a.row3,children:[Object(l.jsx)("div",{className:v()(h.a.heading,h.a.verHeading),children:Object(l.jsx)("h4",{children:"Not Important"})}),Object(l.jsxs)("div",{className:h.a.quad,children:[Object(l.jsxs)("div",{className:h.a.addElems,children:[Object(l.jsx)("button",{onClick:function(){return O(3)},children:Object(l.jsx)(p.a,{size:30})}),3==u?Object(l.jsxs)("div",{className:h.a.todoInputContainer,children:[Object(l.jsx)("input",{className:h.a.todoInput,value:o,onChange:function(e){return r(e.target.value)},type:"text",placeholder:"Enter You Task"}),Object(l.jsx)("button",{type:"submit",onClick:function(){return m(3)},children:Object(l.jsx)(_.a,{size:25})})]}):""]}),Object(l.jsx)("div",{className:h.a.todos,children:a.map((function(e,t){if(3==e.quad)return Object(l.jsx)(k,{task:e.task,completed:e.completed},t)}))})]}),Object(l.jsxs)("div",{className:h.a.quad,children:[Object(l.jsxs)("div",{className:h.a.addElems,children:[Object(l.jsx)("button",{onClick:function(){return O(4)},children:Object(l.jsx)(p.a,{size:30})}),4==u?Object(l.jsxs)("div",{className:h.a.todoInputContainer,children:[Object(l.jsx)("input",{className:h.a.todoInput,value:o,onChange:function(e){return r(e.target.value)},type:"text",placeholder:"Enter You Task"}),Object(l.jsx)("button",{type:"submit",onClick:function(){return m(4)},children:Object(l.jsx)(_.a,{size:25})})]}):""]}),Object(l.jsx)("div",{className:h.a.todos,children:a.map((function(e,t){if(4==e.quad)return Object(l.jsx)(k,{task:e.task,completed:e.completed},t)}))})]})]})]})})},I=(a(45),a(28));var Q=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(I.a,{date:Date.now()+15e5}),","]})},w=a(24),y=a.n(w);var E=function(){return Object(l.jsx)("div",{className:y.a.container,children:Object(l.jsx)("div",{className:y.a.clock,children:Object(l.jsx)(Q,{time:5e3})})})};var q=function(){return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(u,{}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{exact:!0,path:"/pomo",component:E}),Object(l.jsx)(r.a,{exact:!0,path:"",component:C})]})]})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(q,{})}),document.getElementById("root")),T()}},[[46,1,2]]]);
//# sourceMappingURL=main.b114cc1e.chunk.js.map