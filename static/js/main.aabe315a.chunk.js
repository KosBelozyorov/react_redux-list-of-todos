(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(38)},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),s=n.n(o),c=n(3),i=n(7),l=n(11),u=n(14),d=n(4),p=n(15);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var b="https://jsonplaceholder.typicode.com",y={todos:[],users:[],preparedTodos:[],sortMethod:"default",isLoading:!1};var h="START_DATA_LOADING",O="SET_DATA_TO-STORE",E="SORT_TYPE",v=function(e){return{type:h,payload:e}},g=function(e){return{type:E,payload:e}},j=function(){return function(e){N.dispatch(v()),Promise.all([fetch("".concat(b,"/todos")),fetch("".concat(b,"/users"))]).then(function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];return Promise.all([n.json(),a.json()])}).then(function(e){var t,n=Object(l.a)(e,2),a=n[0],r=n[1];N.dispatch(function(e,t){return{type:O,payload:{data:e,users:t}}}((t=r,a.map(function(e){return f({},e,{user:t.find(function(t){return t.id===e.userId})})})),r)),N.dispatch(v())})}},T=function(e,t,n){switch(n){case"title":return Object(i.a)(e).sort(function(e,t){return e.title.localeCompare(t.title)});case"status":return Object(i.a)(e).sort(function(e,t){return e.completed-t.completed});case"user":return Object(i.a)(e).sort(function(e,t){return e.user.name.localeCompare(t.user.name)});default:return t}},N=Object(d.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return f({},e,{isLoading:!e.isLoading});case O:return f({},e,{todos:t.payload.data,users:t.payload.users,preparedTodos:t.payload.data});case E:var n=e.todos,a=e.preparedTodos;return f({},e,{sortMethod:t.payload,todos:T(n,a,t.payload)});default:return e}},Object(d.a)(p.a)),w=N,D=(n(31),n(1)),P=n.n(D),_=(P.a.string.isRequired,P.a.shape({name:P.a.string}).isRequired),k=(P.a.string.isRequired,P.a.shape({title:P.a.string,completed:P.a.bool,id:P.a.number,user:_}).isRequired,P.a.arrayOf(P.a.shape({title:P.a.string,completed:P.a.bool,id:P.a.number,user:_}).isRequired).isRequired,n(32),function(e){var t=e.text,n=e.listOfTodos,a=e.onClick;return r.a.createElement("button",{className:"btn btn-primary btn--start",type:"button",onClick:function(){return a(n)}},t)}),L=n(16),R=n(17),A=n(19),C=n(18),M=n(20),S=n(6),q=n.n(S),x=(n(33),function(e){function t(){var e,n;Object(L.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(A.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).buttons=[{name:"default",label:"Default"},{name:"title",label:"Title"},{name:"status",label:"Status"},{name:"user",label:"User"}],n}return Object(M.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){var e=this.props,t=e.sortMethod,n=e.sortType,a=this.buttons.map(function(e){var a=e.name,o=e.label,s=t===a,c=q()({"btn-info":s,"btn-outline-secondary":!s});return r.a.createElement("button",{type:"button",className:"btn ".concat(c),key:a,onClick:function(){return n(a)}},o)});return r.a.createElement("div",{className:"btn-group"},a)}}]),t}(a.Component)),I={sortType:g},J=Object(c.b)(function(e){return{sortMethod:e.sortMethod}},I)(x),U=(n(34),function(e){var t=e.user;return r.a.createElement("span",{className:"todo-list-item__user"},t.name)}),B=(n(35),function(e){var t=e.todo,n=t.title,a=t.completed,o=void 0!==a&&a,s=t.user,c=t.id,i=q()({"todo-list-item":!0,"todo-list-item todo-list-item--done":o});return r.a.createElement("span",{className:i},r.a.createElement("span",{className:"todo-list-item__id"},c),r.a.createElement(U,{user:s}),r.a.createElement("span",{className:"todo-list-item__name"},n))}),G=(n(36),function(e){return r.a.createElement("ul",{className:"list-group todo-list"},e.todos.map(function(e){return r.a.createElement("li",{className:"list-group-item",key:e.id},r.a.createElement(B,{todo:e}))}))}),Y=Object(c.b)(function(e){return{todos:e.todos}},{sortTodos:T})(G),z=(n(37),function(e){var t=e.todos,n=e.users,a=e.isLoading,o=e.loadData;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Dynamic list of todos"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content"},0===t.length?r.a.createElement("div",null,a?r.a.createElement("button",{className:"btn btn-primary",type:"button",disabled:!0},r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Loading...")):"",r.a.createElement("div",null,r.a.createElement(k,{className:"btn--start",text:"Load",onClick:o}))):r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",null,"Todos: "),t.length),r.a.createElement("p",null,r.a.createElement("span",null,"Users: "),n.length),r.a.createElement(J,null),r.a.createElement(Y,null)))))}),F=Object(c.b)(function(e){return{todos:e.todos,preparedTodos:e.preparedTodos,users:e.users,isLoading:e.isLoading,sortMethod:e.sortMethod}},function(e){return{loadData:function(){return e(j())},sortType:function(t){return e(g(t))},sortTodos:function(){return e(T())}}})(z);s.a.render(r.a.createElement(c.a,{store:w},r.a.createElement(F,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.aabe315a.chunk.js.map