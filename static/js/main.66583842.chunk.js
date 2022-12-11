(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{131:function(t,e,n){},132:function(t,e,n){},157:function(t,e,n){"use strict";n.r(e);var a,c,i=n(0),r=n.n(i),s=n(34),o=n.n(s),l=(n(131),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,227)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),i(t),r(t)}))}),u=(n(132),n(29)),d=n(17),j=n(19),b=n(18),O=n(3),f=n(16),h=n(49),p=n.n(h),m=p.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"7660ed7e-f677-4d6b-a08d-94c2433a5da0"}}),v=function(t){return m.post("/auth/login",t)},T=function(){return m.get("/auth/me")},g=function(){return m.delete("/auth/login")},x=function(){return m.get("todo-lists")},k=function(t){return m.post("todo-lists",{title:t})},I=function(t){return m.delete("todo-lists/".concat(t))},S=function(t,e){return m.put("todo-lists/".concat(t),{title:e})},E=function(t){return m.get("todo-lists/".concat(t,"/tasks"))},C=function(t,e){return m.delete("todo-lists/".concat(t,"/tasks/").concat(e))},y=function(t,e){return m.post("todo-lists/".concat(t,"/tasks"),{title:e})},A=function(t,e,n){return m.put("todo-lists/".concat(t,"/tasks/").concat(e),n)};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var w=function(t,e){t.messages.length?e(R(t.messages[0])):e(R("Some error occurred")),e(M("failed"))},L=function(t,e){e(R(t.message?t.message:"Some error occurred")),e(M("failed"))},D={isLoggedIn:!1},P=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},F={email:null,status:"idle",error:null,isInitialized:!1},N=function(t){return{type:"APP/SET-EMAIL",email:t}},R=function(t){return{type:"APP/SET-ERROR",error:t}},M=function(t){return{type:"APP/SET-STATUS",status:t}},G=function(t){return{type:"APP/SET-IS-INITIALIZED",value:t}},K=function(){return function(){var t=Object(j.a)(Object(d.a)().mark((function t(e){var n;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T();case 3:0===(n=t.sent).data.resultCode&&(e(N(n.data.data.email)),e(P(!0)),e(G(!0))),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),p.a.isAxiosError(t.t0)&&L(t.t0,e);case 10:return t.prev=10,e(G(!0)),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(e){return t.apply(this,arguments)}}()},H={},U=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}},V=function(t,e,n){return function(a,c){var i=c().tasks[n].find((function(e){return e.id===t}));if(i){var r=Object(f.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);A(n,t,r).then((function(c){if(0===c.data.resultCode){var i=function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n);a(i)}else w(c.data,a)})).catch((function(t){L(t,a)}))}else console.warn("task not found in the state")}},Z=[],q=n(75),z=n(104),B=Object(q.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(f.a)(Object(f.a)({},t),{},Object(O.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(f.a)(Object(f.a)({},t),{},Object(O.a)({},e.task.todoListId,[e.task].concat(Object(b.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(f.a)(Object(f.a)({},t),{},Object(O.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(f.a)(Object(f.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(f.a)(Object(f.a)({},t),{},Object(O.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(f.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(f.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(f.a)(Object(f.a)({},t),{},Object(O.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(f.a)(Object(f.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(b.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(f.a)(Object(f.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(f.a)(Object(f.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(f.a)(Object(f.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(f.a)(Object(f.a)({},t),{},{filter:"all",entityStatus:"idle"})}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(f.a)(Object(f.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(f.a)(Object(f.a)({},t),{},{error:e.error});case"APP/SET-IS-INITIALIZED":return Object(f.a)(Object(f.a)({},t),{},{isInitialized:e.value});case"APP/SET-EMAIL":return Object(f.a)(Object(f.a)({},t),{},{email:e.email});default:return Object(f.a)({},t)}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;return"login/SET-IS-LOGGED-IN"===e.type?Object(f.a)(Object(f.a)({},t),{},{isLoggedIn:e.value}):t}}),Y=Object(q.c)(B,Object(q.a)(z.a)),J=u.c;window.store=Y;var _=n(217),$=n(222),Q=n(9),W=n(208),X=n(223),tt=n(205),et=n(2),nt=r.a.memo((function(t){var e=t.addItem,n=t.disabled,a=void 0!==n&&n,c=Object(i.useState)(""),r=Object(Q.a)(c,2),s=r[0],o=r[1],l=Object(i.useState)(null),u=Object(Q.a)(l,2),d=u[0],j=u[1],b=function(){""!==s.trim()?(e(s),o("")):j("Title is required")};return Object(et.jsxs)("div",{children:[Object(et.jsx)(W.a,{variant:"outlined",disabled:a,error:!!d,value:s,onChange:function(t){o(t.currentTarget.value)},onKeyDown:function(t){null!==d&&j(null),13===t.charCode&&b()},label:"Title",helperText:d}),Object(et.jsx)(X.a,{color:"primary",onClick:b,disabled:a,children:Object(et.jsx)(tt.a,{})})]})})),at=n(110),ct=r.a.memo((function(t){var e=Object(i.useState)(!1),n=Object(Q.a)(e,2),a=n[0],c=n[1],r=Object(i.useState)(t.value),s=Object(Q.a)(r,2),o=s[0],l=s[1];return a?Object(et.jsx)(W.a,{value:o,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.onChange(o)}}):Object(et.jsx)("span",{onDoubleClick:function(){c(!0),l(t.value)},children:t.value})})),it=n(215),rt=n(206),st=n(210),ot=r.a.memo((function(t){var e=J((function(t){return t.app.status})),n=Object(i.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),c=Object(i.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),r=Object(i.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(et.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(et.jsx)(st.a,{checked:t.task.status===a.Completed,color:"primary",onChange:c}),Object(et.jsx)(ct,{value:t.task.title,onChange:r}),Object(et.jsx)(X.a,{onClick:n,disabled:"loading"===e,children:Object(et.jsx)(rt.a,{})})]},t.task.id)})),lt=["demo"],ut=r.a.memo((function(t){t.demo;var e=Object(at.a)(t,lt),n=J((function(t){return t.app.status})),c=Object(u.b)(),r=Object(i.useCallback)((function(t){e.addTask(t,e.todolist.id)}),[e.addTask,e.todolist.id]),s=Object(i.useCallback)((function(t){e.changeTodolistTitle(e.todolist.id,t)}),[e.todolist.id,e.changeTodolistTitle]),o=Object(i.useCallback)((function(){return e.changeFilter("all",e.todolist.id)}),[e.todolist.id,e.changeFilter]),l=Object(i.useCallback)((function(){return e.changeFilter("active",e.todolist.id)}),[e.todolist.id,e.changeFilter]),d=Object(i.useCallback)((function(){return e.changeFilter("completed",e.todolist.id)}),[e.todolist.id,e.changeFilter]),j=e.tasks;return"active"===e.todolist.filter&&(j=e.tasks.filter((function(t){return t.status===a.New}))),"completed"===e.todolist.filter&&(j=e.tasks.filter((function(t){return t.status===a.Completed}))),Object(i.useEffect)((function(){setTimeout((function(){return c((t=e.todolist.id,function(e){e(M("loading")),E(t).then((function(n){var a=n.data.items;e(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(a,t)),e(M("succeeded"))}))}));var t}),0)}),[]),Object(et.jsxs)("div",{children:[Object(et.jsxs)("h3",{children:[Object(et.jsx)(ct,{value:e.todolist.title,onChange:s}),Object(et.jsx)(X.a,{onClick:function(){e.removeTodolist(e.todolist.id)},disabled:"loading"===n,children:Object(et.jsx)(rt.a,{})})]}),Object(et.jsx)(nt,{addItem:r,disabled:"loading"===n}),Object(et.jsx)("div",{children:j.map((function(t){return Object(et.jsx)(ot,{task:t,todolistId:e.todolist.id,removeTask:e.removeTask,changeTaskTitle:e.changeTaskTitle,changeTaskStatus:e.changeTaskStatus},t.id)}))}),Object(et.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(et.jsx)(it.a,{variant:"all"===e.todolist.filter?"outlined":"text",onClick:o,color:"inherit",children:"All"}),Object(et.jsx)(it.a,{variant:"active"===e.todolist.filter?"outlined":"text",onClick:l,color:"primary",children:"Active"}),Object(et.jsx)(it.a,{variant:"completed"===e.todolist.filter?"outlined":"text",onClick:d,color:"secondary",children:"Completed"})]})]})})),dt=n(13),jt=function(){var t=Object(u.c)((function(t){return t.todolists})),e=Object(u.c)((function(t){return t.tasks})),n=J((function(t){return t.auth.isLoggedIn})),a=Object(u.b)(),c=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(){var n=Object(j.a)(Object(d.a)().mark((function n(a){return Object(d.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(M("loading")),n.prev=1,n.next=4,C(e,t);case 4:a(U(t,e)),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(1);case 9:return n.prev=9,a(M("succeeded")),n.finish(9);case 12:case"end":return n.stop()}}),n,null,[[1,7,9,12]])})));return function(t){return n.apply(this,arguments)}}()}(t,e);a(n)}),[]),r=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){n(M("loading")),y(e,t).then((function(t){if(0===t.data.resultCode){var e={type:"ADD-TASK",task:t.data.data.item};n(e),n(M("succeeded"))}else w(t.data,n)})).catch((function(t){L(t,n)}))}}(t,e);a(n)}),[]),s=Object(i.useCallback)((function(t,e,n){var c=V(t,{status:e},n);a(c)}),[]),o=Object(i.useCallback)((function(t,e,n){var c=V(t,{title:e},n);a(c)}),[]),l=Object(i.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};a(n)}),[]),b=Object(i.useCallback)((function(t){var e,n=(e=t,function(t){t(M("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),I(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(M("succeeded"))}))});a(n)}),[]),O=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){S(t,e).then((function(a){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);a(n)}),[]),f=Object(i.useCallback)((function(t){var e=function(t){return function(e){e(M("loading")),k(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(M("succeeded"))}))}}(t);a(e)}),[a]);return Object(i.useEffect)((function(){n&&a((function(t){t(M("loading")),x().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(M("succeeded"))}))}))}),[]),Object(i.useEffect)((function(){a(K())}),[]),n?Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(_.a,{container:!0,style:{padding:"20px"},children:Object(et.jsx)(nt,{addItem:f})}),Object(et.jsx)(_.a,{container:!0,spacing:3,children:t.map((function(t){var n=e[t.id];return Object(et.jsx)(_.a,{item:!0,children:Object(et.jsx)($.a,{style:{padding:"10px"},children:Object(et.jsx)(ut,{todolist:t,tasks:n,removeTask:c,changeFilter:l,addTask:r,changeTaskStatus:s,removeTodolist:b,changeTaskTitle:o,changeTodolistTitle:O})})},t.id)}))})]}):Object(et.jsx)(dt.a,{to:"/login"})},bt=n(219),Ot=n(220),ft=n(218),ht=n(216),pt=n(221),mt=n(212),vt=n(211),Tt=r.a.forwardRef((function(t,e){return Object(et.jsx)(vt.a,Object(f.a)({elevation:6,ref:e,variant:"filled"},t))}));function gt(){var t=Object(u.c)((function(t){return t.app.error})),e=Object(u.b)(),n=function(t,n){"clickaway"!==n&&e(R(null))};return Object(et.jsx)(mt.a,{open:null!==t,autoHideDuration:6e3,onClose:n,children:Object(et.jsx)(Tt,{onClose:n,severity:"error",sx:{width:"100%"},children:t})})}var xt=n(213),kt=n(225),It=n(224),St=n(203),Et=n(113),Ct=function(){var t=J((function(t){return t.auth.isLoggedIn})),e=Object(u.b)(),n=Object(Et.a)({initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){var a;e((a=t,function(){var t=Object(j.a)(Object(d.a)().mark((function t(e){var n;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e(M("loading")),t.next=4,v(a);case 4:n=t.sent,console.log(n),0===n.data.resultCode?e(P(!0)):w(n.data,e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),p.a.isAxiosError(t.t0)&&L(t.t0,e);case 12:return t.prev=12,e(M("idle")),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(e){return t.apply(this,arguments)}}())),n.resetForm()},validate:function(t){var e,n={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(n.email="Invalid email address"):n.email="Field email is required",t.password?(null===(e=t.password)||void 0===e?void 0:e.length)<2&&(n.password="Password length must be more than 2 symbols"):n.password="Password is required",n}});return t?Object(et.jsx)(dt.a,{to:"/"}):Object(et.jsx)(_.a,{container:!0,justifyContent:"center",children:Object(et.jsx)(_.a,{item:!0,justifyContent:"center",children:Object(et.jsx)("form",{onSubmit:n.handleSubmit,children:Object(et.jsxs)(xt.a,{children:[Object(et.jsxs)(St.a,{children:[Object(et.jsxs)("p",{children:["To log in get registered",Object(et.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(et.jsx)("p",{children:"or use common test account credentials:"}),Object(et.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(et.jsx)("p",{children:"Password: free"})]}),Object(et.jsxs)(It.a,{children:[Object(et.jsx)(W.a,Object(f.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),n.errors.email&&n.touched.email&&Object(et.jsx)("div",{style:{color:"red"},children:n.errors.email}),Object(et.jsx)(W.a,Object(f.a)(Object(f.a)({type:"password"},n.getFieldProps("password")),{},{label:"Password",margin:"normal"})),n.errors.password&&n.touched.password&&Object(et.jsx)("div",{style:{color:"red"},children:n.errors.password}),Object(et.jsx)(kt.a,Object(f.a)(Object(f.a)({label:"Remember me"},n.getFieldProps("rememberMe")),{},{control:Object(et.jsx)(st.a,{checked:n.values.rememberMe})})),Object(et.jsx)(it.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})},yt=function(){return Object(et.jsx)("h1",{style:{textAlign:"center"},children:"Page is not found. Please check url address"})},At=n(226);var wt=function(){var t=J((function(t){return t.app.isInitialized})),e=J((function(t){return t.app.status})),n=J((function(t){return t.auth.isLoggedIn})),a=Object(u.b)(),c=J((function(t){return t.app.email}));return console.log("userEmail : ",c),console.log("status : ",e),Object(i.useEffect)((function(){a(K())}),[a]),t?Object(et.jsxs)("div",{className:"App",children:[Object(et.jsx)(gt,{}),c&&Object(et.jsxs)(bt.a,{style:{display:"flex",alignItems:"flex-start"},position:"static",children:[Object(et.jsxs)(Ot.a,{children:[Object(et.jsx)(ft.a,{style:{marginRight:"10px",color:"gold"},variant:"h6",children:c}),n&&Object(et.jsx)(it.a,{onClick:function(){a(function(){var t=Object(j.a)(Object(d.a)().mark((function t(e){var n;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(M("loading")),t.next=3,g();case 3:n=t.sent;try{0===n.data.resultCode?(e(N(null)),e(P(!1)),e(M("succeeded"))):w(n.data,e)}catch(a){p.a.isAxiosError(a)&&L(a,e)}case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},color:"inherit",children:"Log out"})]}),"loading"===e&&Object(et.jsx)(pt.a,{})]}),Object(et.jsx)(ht.a,{fixed:!0,children:Object(et.jsxs)(dt.d,{children:[Object(et.jsx)(dt.b,{path:"/",element:Object(et.jsx)(jt,{})}),Object(et.jsx)(dt.b,{path:"/login",element:Object(et.jsx)(Ct,{})}),Object(et.jsx)(dt.b,{path:"/404",element:Object(et.jsx)(yt,{})}),Object(et.jsx)(dt.b,{path:"*",element:Object(et.jsx)(dt.a,{to:"/404"})})]})})]}):Object(et.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(et.jsx)(At.a,{})})},Lt=n(56);o.a.render(Object(et.jsx)(Lt.a,{children:Object(et.jsx)(u.a,{store:Y,children:Object(et.jsx)(wt,{})})}),document.getElementById("root")),l()}},[[157,1,2]]]);
//# sourceMappingURL=main.66583842.chunk.js.map