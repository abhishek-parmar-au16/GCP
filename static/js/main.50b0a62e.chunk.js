(this.webpackJsonptut=this.webpackJsonptut||[]).push([[0],[,,,,,,,,function(e,t,l){},function(e,t,l){},,function(e,t,l){},function(e,t,l){},function(e,t,l){},function(e,t,l){"use strict";l.r(t);var c=l(1),i=l.n(c),n=l(3),s=l.n(n),a=(l(8),l(9),l(0));var o=function(e){let{currentPage:t}=e;return Object(a.jsx)("header",{children:Object(a.jsxs)("h1",{children:[t.toUpperCase()," Page"]})})};l(11);var r=function(e){let{handlePageChange:t}=e;const[l,i]=Object(c.useState)(""),[n,s]=Object(c.useState)(""),[o,r]=Object(c.useState)("");return Object(a.jsxs)("div",{className:"login-container",children:[Object(a.jsx)("h2",{children:"Login"}),Object(a.jsx)("input",{type:"text",placeholder:"Username",value:l,onChange:e=>i(e.target.value)}),Object(a.jsx)("input",{type:"password",placeholder:"Password",value:n,onChange:e=>s(e.target.value)}),Object(a.jsx)("button",{onClick:()=>{"admin"===l&&"password"===n?t("upload"):r("Invalid username or password")},children:"Login"}),o&&Object(a.jsx)("p",{className:"error-message",children:o})]})},j=(l(12),l(16));l(13);var d=function(e){let{handlePageChange:t,setAllFile:l,AllFile:i}=e;const[n,s]=Object(c.useState)("");return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Vedio Name"}),Object(a.jsx)("th",{children:"Type"}),Object(a.jsx)("th",{children:"File Name"}),Object(a.jsx)("th",{children:"File Size"}),Object(a.jsx)("th",{children:"Option"})]})}),Object(a.jsx)("tbody",{children:i.map((e=>Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.Name}),Object(a.jsx)("td",{children:e.Type}),Object(a.jsx)("td",{children:e.File.name}),Object(a.jsxs)("td",{children:[Math.round(e.File.size/1048576)," MB"]}),Object(a.jsxs)("td",{children:[Object(a.jsx)("button",{onClick:()=>{return t=e,console.log("Play item:",URL.createObjectURL(null===t||void 0===t?void 0:t.File)),void s(URL.createObjectURL(null===t||void 0===t?void 0:t.File));var t},children:"Play"})," ",Object(a.jsx)("button",{onClick:()=>{return t=e,console.log("Delete item:",t),void l(i.filter((e=>e.id!==t.id)));var t},children:"Delete"})," "]})]},e.id)))})]})}),Object(a.jsx)("div",{className:"vedio",children:Object(a.jsxs)("video",{controls:!0,autoPlay:!0,children:[Object(a.jsx)("source",{src:"https://www.youtube.com/watch?v=iu-LBY7NXD4",type:n.type}),"Your browser does not support the video tag."]})}),Object(a.jsx)("div",{className:"button-container",children:Object(a.jsx)("button",{className:"button",onClick:()=>{t("upload")},children:"Upload New"})})]})};var b=function(e){let{handlePageChange:t,setAllFile:l,AllFile:i}=e;const[n,s]=Object(c.useState)(""),[o,r]=Object(c.useState)(null),[d,b]=Object(c.useState)(""),[h,u]=Object(c.useState)(""),[x,O]=Object(c.useState)(0);return Object(a.jsxs)("div",{className:"upload-container",children:[Object(a.jsx)("h2",{children:"Upload Video"}),Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{style:{display:"flex"},children:[Object(a.jsx)("p",{style:{width:"calc(60% - 90px)"},children:"Video Name : "}),Object(a.jsx)("input",{type:"text",placeholder:"Video Name",value:n,onChange:e=>s(e.target.value)})]}),Object(a.jsxs)("div",{style:{display:"flex"},children:[Object(a.jsx)("p",{style:{width:"calc(60% - 90px)"},children:"Type : "}),Object(a.jsxs)("select",{value:h,name:"Select Type",onChange:e=>u(e.target.value),children:[Object(a.jsx)("option",{value:"Poetic",children:"Select"}),Object(a.jsx)("option",{value:"Poetic",children:"Poetic"}),Object(a.jsx)("option",{value:"Expository",children:"Expository"}),Object(a.jsx)("option",{value:"Observational",children:"Observational"}),Object(a.jsx)("option",{value:"Participatary",children:"Participatary"}),Object(a.jsx)("option",{value:"Performative",children:"Performative"}),Object(a.jsx)("option",{value:"Reflexive",children:"Reflexive"})]})]}),Object(a.jsxs)("div",{style:{display:"flex"},children:[Object(a.jsx)("p",{style:{width:"calc(60% - 90px)"},children:"File : "}),Object(a.jsx)("input",{type:"file",accept:"video/*",onChange:e=>(e=>{console.log("ee",e),e.target.files[0].size>209715200?b("File size exceeds the limit of 200MB"):r(e.target.files[0])})(e)})]}),Object(a.jsx)("button",{type:"button",onClick:()=>{if(n)if(o){const e={Name:n,Type:h,File:o,id:Object(j.a)()};console.log(n,h,o),l((t=>[...t,e])),console.log(i),s(""),r(null),u("")}else b("Please select a video file");else b("Please enter a video name")},children:"Upload"})]}),Object(a.jsxs)("div",{style:{display:"flex",marginTop:"13px"},children:[Object(a.jsx)("button",{type:"button",onClick:()=>{t("login")},style:{marginRight:"5px"},children:"Back"}),Object(a.jsx)("button",{type:"button",onClick:()=>{t("list")},children:"Next"})]}),d&&Object(a.jsx)("p",{className:"error-message",children:d}),x>0&&Object(a.jsx)("div",{className:"progress",children:Object(a.jsx)("div",{className:"progress-bar",style:{width:"".concat(x,"%")}})})]})};var h=function(){const[e,t]=Object(c.useState)("login"),[l,i]=Object(c.useState)([]),n=e=>{t(e)};return Object(a.jsxs)("div",{children:[Object(a.jsx)(o,{currentPage:e}),"login"===e&&Object(a.jsx)(r,{handlePageChange:n}),"upload"===e&&Object(a.jsx)(b,{handlePageChange:n,AllFile:l,setAllFile:i}),"list"===e&&Object(a.jsx)(d,{handlePageChange:n,AllFile:l,setAllFile:i})]})};var u=e=>{e&&e instanceof Function&&l.e(3).then(l.bind(null,17)).then((t=>{let{getCLS:l,getFID:c,getFCP:i,getLCP:n,getTTFB:s}=t;l(e),c(e),i(e),n(e),s(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),u()}],[[14,1,2]]]);
//# sourceMappingURL=main.50b0a62e.chunk.js.map