(this["webpackJsonponline-school"]=this["webpackJsonponline-school"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(5),c=t.n(o),i=(t(12),t(13),t(14),t(6)),l=t(3),s=[{id:0,name:"JavaScript Basic Course",price:1119,photo:"https://i.imgur.com/ApvsCXS.png"},{id:1,name:"Graphic Design Course",price:19,photo:"https://i.imgur.com/EOTeRlJ.png"},{id:2,name:"Home Made English Course",price:11,photo:"https://i.imgur.com/qiXxaDK.png"},{id:3,name:"Learn Presentation",price:111,photo:"https://i.imgur.com/Muz54jq.png"},{id:4,name:"Content Creation Course",price:12,photo:"https://i.imgur.com/EBgLMWX.png"},{id:5,name:"Affiliate Marketing",price:544,photo:"https://i.imgur.com/Io5A9zD.png"},{id:6,name:"Digital marketing",price:21,photo:"https://i.imgur.com/3jXdRCQ.png"},{id:7,name:"Node.js Basic Course",price:1e3,photo:"https://i.imgur.com/fFTlOBc.png"},{id:8,name:"Angular Basic Course",price:911,photo:"https://i.imgur.com/HDHrCUV.png"},{id:9,name:"HTML Basic Course",price:121,photo:"https://i.imgur.com/55nW46J.png"},{id:10,name:"React Basic Course",price:121,photo:"https://i.imgur.com/gJzrsxY.png"},{id:11,name:"CSS Basic Course",price:8,photo:"https://i.imgur.com/bD2raK5.png"},{id:12,name:"HTML Basic Course",price:101,photo:"https://i.imgur.com/55nW46J.png"},{id:13,name:"Complete Web development Course With Jhanakar Mahbub",price:101,photo:"https://i.imgur.com/ELnaiau.png"}],m=(t(15),function(e){var a=e.course,t=a.name,n=a.photo,o=a.price;return r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"product-image"},r.a.createElement("img",{src:n,alt:""})),r.a.createElement("div",{className:"align-Items"},r.a.createElement("h4",null,"Course Title: ",t),r.a.createElement("p",null,"Price: $",o),r.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.handleEnrollButton(e.course)}},"  Enroll Now")))}),u=function(e){var a=e.amount;console.log(a);var t=a.reduce((function(e,a){return e+a.price}),0),n=0;t>1e3?n=100:t>500?n=50:t>200&&(n=10);var o=n+t;return r.a.createElement("div",null,r.a.createElement("h4",null,"Order Summery"),r.a.createElement("h3",null,"Items Ordered: ",a.length),r.a.createElement("p",null,"Product Price : $",t),r.a.createElement("small",null,"Internet Charge: $",n.toFixed(0)),r.a.createElement("h3",null,"Total Amount : ",o))},p=(t(16),function(){var e=s.slice(0,12),a=Object(n.useState)(e),t=Object(l.a)(a,2),o=t[0],c=(t[1],Object(n.useState)([])),p=Object(l.a)(c,2),d=p[0],g=p[1],h=function(e){var a=[].concat(Object(i.a)(d),[e]);g(a)};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-6 border"},o.map((function(e){return r.a.createElement(m,{course:e,handleEnrollButton:h})}))),r.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-6"},r.a.createElement(u,{amount:d}))))}),d=(t(17),function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header-size"},r.a.createElement("div",null,r.a.createElement("h3",{className:"container"},"Hi! Welcome to 1 Minute Programming School :D"))),r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{class:"navbar-brand",href:"#"},"Our Courses"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{class:"navbar-nav font-weight-bold"},r.a.createElement("a",{class:"nav-item nav-link active",href:"#"},"Home ",r.a.createElement("span",{class:"sr-only"},"(current)")),r.a.createElement("a",{class:"nav-item nav-link active",href:"#"},"Facebook"),r.a.createElement("a",{class:"nav-item nav-link active",href:"#"},"YouTube ")))))});var g=function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(d,null),r.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(18);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.ab54f397.chunk.js.map