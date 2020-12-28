(this.webpackJsonptinyman=this.webpackJsonptinyman||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},26:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=26},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(2),s=n.n(r),i=n(10),a=n.n(i),l=(n(22),n(23),n(6)),j=n(5),o=n.n(j),d=n(7),u=n(4),O=n(8),b=n.n(O),h=(n(16),n(11)),x=n.n(h),v=(n(25),n(12)),f=n(13),m=function(e){var t=e.status,n=e.children,s=Object(r.useState)(!1),i=Object(u.a)(s,2),a=i[0],l=i[1],j={default:Object(c.jsx)(c.Fragment,{children:t}),loading:Object(c.jsx)(v.a,{size:"20"}),error:Object(c.jsx)("div",{style:{color:"red",fontWeight:"bold"},children:"error"})};return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"status",children:j[t]||j.default}),Object(c.jsx)("div",{className:"controls",children:Object(c.jsx)("button",{onClick:function(){return l(!a)},children:Object(c.jsx)(f.a,{size:"20"})})}),Object(c.jsx)(x.a,{isFlipped:a,children:n})]})},p=n(3),E=n.n(p),T=n(14),N=function(e){e.label;var t=e.value,n=e.total;return Object(c.jsx)(T.PieChart,{style:{width:50,height:50},startAngle:270,label:function(){return"".concat(Math.round(t/n*100),"%")},labelPosition:0,labelStyle:{fontSize:20,fontFamily:"sans-serif",fill:"#0ff"},lineWidth:20,totalValue:n,data:[{value:t,color:"#0FF"},{value:n-t,color:"#0FF3"}]})},_=function(e){var t=e;t>90&&(t=90),t<20&&(t=20);var n=80-60*((t-20)/70);return Math.floor(n)},S=function(e){var t=e.value;return Object(c.jsxs)("svg",{style:{width:50,height:50},viewBox:"0 0 100 100",children:[Object(c.jsx)("defs",{children:Object(c.jsxs)("mask",{id:"myMask",maskUnits:"userSpaceOnUse",children:[Object(c.jsx)("rect",{x:"0",y:"0",width:"100",height:"100",fill:"white"}),Object(c.jsx)("circle",{cx:50,cy:80,r:20,fill:"black"})]})}),Object(c.jsx)("circle",{cx:50,cy:80,r:20,fill:"#0ff3"}),Object(c.jsx)("line",{x1:"50",y1:"15",x2:"50",y2:"80",stroke:"#0ff3",strokeWidth:"25",strokeLinecap:"round",mask:"url(#myMask)"}),Object(c.jsx)("circle",{cx:50,cy:80,r:10,fill:"#0ff"}),Object(c.jsx)("line",{x1:"50",y1:_(t),x2:"50",y2:80,stroke:"#0ff",strokeWidth:"8",strokeLinecap:"round"})]})},A=(n(27),function(e){var t=e.numerator,n=e.denominator;return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"numerator",children:t}),Object(c.jsx)("div",{className:"denominator",children:n})]})}),y=(n(28),function(e){var t=e.header,n=e.CPU_USAGE,r=e.CPU_PROCESSES,s=e.CPU_TEMPERATURE,i=e.GPU_TEMPERATURE,a=e.RAM_USAGE,l=e.RAM_TOTAL,j=e.GPU_RAM_USAGE,o=e.GPU_RAM_TOTAL,d=e.DISK_USAGE,u=e.DISK_TOTAL;return Object(c.jsxs)("div",{className:"card-front",children:[t,Object(c.jsxs)("main",{children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"tile",children:[Object(c.jsx)("h3",{children:"CPU"}),Object(c.jsx)(N,{value:n,total:100}),Object(c.jsxs)("div",{children:[r,"p"]})]}),Object(c.jsxs)("div",{className:"tile",children:[Object(c.jsx)("h3",{children:"CPU"}),Object(c.jsx)(S,{value:s}),Object(c.jsxs)("div",{children:[s,"\xb0C"]})]}),Object(c.jsxs)("div",{className:"tile",children:[Object(c.jsx)("h3",{children:"GFX"}),Object(c.jsx)(S,{value:i}),Object(c.jsxs)("div",{children:[i,"\xb0C"]})]})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"tile",children:[Object(c.jsx)("h3",{children:"SYS RAM"}),Object(c.jsx)(N,{value:a,total:l}),Object(c.jsx)(A,{numerator:E()(a,10),denominator:E()(l,10)})]}),Object(c.jsxs)("div",{className:"tile",children:[Object(c.jsx)("h3",{children:"GFX RAM"}),Object(c.jsx)(N,{value:j,total:o}),Object(c.jsx)(A,{numerator:E()(j,10),denominator:E()(o,10)})]}),Object(c.jsxs)("div",{className:"tile",children:[Object(c.jsx)("h3",{children:"DISK"}),Object(c.jsx)(N,{value:d,total:u}),Object(c.jsx)(A,{numerator:E()(d,10),denominator:E()(u,10)})]})]})]})]})}),R=n(15),M=function(e){var t=e.endpoint,n=Object(r.useState)([]),s=Object(u.a)(n,2),i=s[0],a=s[1];if(Object(r.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()("".concat(t,":64646/list"));case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,console.log(c),a(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),0===i.length)return Object(c.jsx)(c.Fragment,{children:"[ no controls ]"});var l=function(){var e=Object(d.a)(o.a.mark((function e(n){var c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()("".concat(t,":64646/").concat(n));case 3:return c=e.sent,e.next=6,c.text();case 6:r=e.sent,alert(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return i.map((function(e){return Object(c.jsx)("button",{onClick:function(){return l(e)},children:e},e)}))},k=(n(29),function(e){var t=e.header,n=e.RAM_TOTAL,r=e.GPU_RAM_TOTAL,s=e.NET_LOCAL_IP,i=e.PI_VERSION,a=e.HOST_OS_PRETTY_NAME,l=e.HOST_KERNEL,j=e.HOST_START,o=e.HOST_USERS,d=e.NET_OPEN_PORTS,u=e.ENUM_TIME,O=e.NODE_V,b=e.NPM_V,h=e.NET_ETH_TX,x=e.NET_ETH_RX,v=e.NET_WLAN_TX,f=e.NET_WLAN_RX,m=e.DISK_READ,p=e.DISK_WRITTEN,T=e.endpoint;return Object(c.jsxs)("div",{className:"card-back",children:[t,Object(c.jsxs)("footer",{children:[Object(c.jsx)("div",{children:s}),Object(c.jsxs)("div",{children:["Raspberry Pi ",i]}),Object(c.jsxs)("div",{children:["total RAM: ",E()(n+r,10)]}),Object(c.jsx)(M,{endpoint:T}),Object(c.jsx)("div",{children:a}),Object(c.jsxs)("div",{children:["kernel: ",l]}),Object(c.jsx)("div",{children:j}),Object(c.jsxs)("div",{children:["(started ",R.DateTime.fromFormat(j,"yyyy-MM-dd HH:mm:ss").toRelative(),")"]}),Object(c.jsxs)("div",{children:[o," user(s)"]}),Object(c.jsxs)("div",{children:["open ports: ",d]}),Object(c.jsxs)("div",{children:["last enum: ",u]}),O?Object(c.jsxs)("div",{children:["node: ",O,", npm: ",b]}):null,h||x?Object(c.jsxs)("div",{className:"tile",children:[Object(c.jsxs)("div",{children:["ETHERNET \u2b06\ufe0f ",E()(h,10)]}),Object(c.jsxs)("div",{children:["ETHERNET \u2b07\ufe0f ",E()(x,10)]})]}):null,v||f?Object(c.jsxs)("div",{className:"tile",children:[Object(c.jsxs)("div",{children:["WIFI \u2b06\ufe0f ",E()(v,10)]}),Object(c.jsxs)("div",{children:["WIFI \u2b07\ufe0f ",E()(f,10)]})]}):null,Object(c.jsxs)("div",{children:["read: ",m?E()(m,10):"?"]}),Object(c.jsxs)("div",{children:["written: ",p?E()(p,10):"?"]})]})]})}),P=function(e){var t=e.endpoint,n=Object(r.useState)(0),s=Object(u.a)(n,2),i=s[0],a=s[1],j=Object(r.useState)(0),O=Object(u.a)(j,2),h=O[0],x=O[1],v=Object(r.useState)(null),f=Object(u.a)(v,2),p=f[0],E=f[1],T=Object(r.useState)(null),N=Object(u.a)(T,2),_=N[0],S=N[1];Object(r.useEffect)((function(){if("error"!==p){var e=setInterval((function(){a(Date.now())}),80);return function(){return clearInterval(e)}}}),[p]),Object(r.useEffect)((function(){["error","loading","offline"].includes(p)||(i>h?function(){var e=Object(d.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E("loading"),e.next=4,b()("".concat(t,":9009/"));case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,S(c),x(Date.now()+(1e3*(null===c||void 0===c?void 0:c.ENUM_TIME)||0)+1e4),E("done"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),E("offline");case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}()():E("".concat(Math.ceil(h-Date.now()),"ms")))}),[t,i]);var A=Object(c.jsx)("header",{children:Object(c.jsx)("h2",{className:"title",children:(null===_||void 0===_?void 0:_.HOST_NAME)||t})});return Object(c.jsx)(m,{status:p,children:_?[Object(c.jsx)(y,Object(l.a)({header:A},_)),Object(c.jsx)(k,Object(l.a)(Object(l.a)({header:A},_),{},{endpoint:t}))]:[Object(c.jsxs)("div",{className:"card-front",children:[A,"no data"]}),Object(c.jsxs)("div",{className:"card-front",children:[A,"no data"]})]})},g=["//192.168.0.100","//192.168.0.40","//192.168.0.13","//192.168.0.150","//192.168.0.200","//192.168.0.190"],U=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("h1",{children:"tinyman"})}),Object(c.jsx)("main",{className:"App-main",children:g.map((function(e){return Object(c.jsx)(P,{endpoint:e},e)}))})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(U,{})}),document.getElementById("root")),w()}},[[30,1,2]]]);
//# sourceMappingURL=main.ac97559e.chunk.js.map