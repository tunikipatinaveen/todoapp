(this.webpackJsonptodotest=this.webpackJsonptodotest||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(7),a=n.n(s),r=(n(12),n(6)),i=n(2),d=n(0);function u(e){var t=e.data,n=e.index,c=e.deleteMe;return Object(d.jsxs)("div",{className:"flex w-full justify-between mt-2 border-b border-gray-200 ",children:[Object(d.jsx)("div",{children:n+1}),Object(d.jsx)("div",{children:t.title}),Object(d.jsx)("div",{children:t.message}),Object(d.jsx)("div",{onClick:function(){return e=n,o=t.id,fetch("https://60d2c4ae858b410017b2e2e2.mockapi.io/todos/".concat(o),{method:"DELETE",headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),void c(e);var e,o},className:"cursor-pointer py-2 px-2 bg-red-500 text-white rounded",children:"Delete"})]})}function l(e){var t=e.todos,n=e.refreshTodos,c=e.pageNum,o=e.changePageNum,s=function(e){t.splice(e,1),n(t)},a=t.map((function(e,t){return Object(d.jsx)(u,{deleteMe:s,index:t,data:e},e.id)}));return Object(d.jsxs)("div",{children:[a,Object(d.jsxs)("div",{className:"mt-5 flex items-center justify-center w-full",children:[Object(d.jsx)("button",{className:"font-semibold py-3 px-4 text-xs bg-gray-200",onClick:function(){return o(c-1)},children:"previous"}),Object(d.jsx)("span",{className:"px-3",children:c}),Object(d.jsx)("button",{className:"font-semibold py-3 px-4 text-xs bg-gray-200",onClick:function(){return o(c+1)},children:"Next"})]})]})}var j=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(!1),a=Object(i.a)(s,2),u=a[0],j=a[1],b=Object(c.useState)(1),p=Object(i.a)(b,2),h=p[0],x=p[1],f=Object(c.useState)(""),m=Object(i.a)(f,2),O=m[0],g=m[1],y=Object(c.useState)(""),v=Object(i.a)(y,2),N=v[0],k=v[1];return Object(c.useEffect)((function(){j(!0),fetch("https://60d2c4ae858b410017b2e2e2.mockapi.io/todos/?page=".concat(h,"&limit=").concat(10)).then((function(e){return e.json()})).then((function(e){j(!1),o(e)}))}),[h]),Object(d.jsxs)("div",{className:"container mx-auto bg-gray-100 h-screen p-7",children:[Object(d.jsx)("h1",{className:"text-center text-3xl my-2",children:"Todos web App"}),Object(d.jsxs)("section",{className:"pt-5 flex w-full justify-center",children:[Object(d.jsx)("input",{value:O,onChange:function(e){return g(e.target.value)},className:"px-2 focus:outline-none border border-gray-200 py-2",type:"text",placeholder:"Add To Do"}),Object(d.jsx)("input",{value:N,onChange:function(e){return k(e.target.value)},className:"px-2 focus:outline-none border border-gray-200 py-2 mx-2",type:"text",placeholder:"Message"}),Object(d.jsx)("button",{onClick:function(){return function(){var e={title:O,message:N};fetch("https://60d2c4ae858b410017b2e2e2.mockapi.io/todos",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log("added todo:",e),k(""),g(""),o([e].concat(Object(r.a)(n)))}))}()},className:"ml-2 bg-blue-500 py-1 px-2 focus:outline-none text-white rounded",children:"Add Todo"})]}),Object(d.jsx)("div",{className:"p-8 mt-3",children:u?"loading....":Object(d.jsx)(l,{pageNum:h,changePageNum:function(e){0!==e&&x(e)},refreshTodos:function(e){o(Object(r.a)(e))},todos:n})})]})};a.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.72566885.chunk.js.map