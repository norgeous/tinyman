(this.webpackJsonptinyman=this.webpackJsonptinyman||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},26:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=26},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(2),i=n.n(r),s=n(11),a=n.n(s),l=(n(22),n(23),n(6)),o=n(4),u=n.n(o),j=n(7),d=n(3),b=n(8),O=n.n(b),v=function(e){var t=e.title;return Object(c.jsx)("header",{children:Object(c.jsx)("h2",{className:"title",children:t})})},h=n(12),f=n.n(h),x=(n(25),n(13)),p=n(14),m=function(e){var t=e.status,n=e.children,i=Object(r.useState)(!1),s=Object(d.a)(i,2),a=s[0],l=s[1],o={default:Object(c.jsx)(c.Fragment,{children:t}),loading:Object(c.jsx)(x.a,{size:"20"}),error:Object(c.jsx)("div",{style:{color:"red",fontWeight:"bold"},children:"error"})};return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"status",children:o[t]||o.default}),Object(c.jsx)("div",{className:"controls",children:Object(c.jsx)("button",{onClick:function(){return l(!a)},children:Object(c.jsx)(p.a,{size:"20"})})}),Object(c.jsx)(f.a,{isFlipped:a,children:n})]})},y=n(5),E=n.n(y),N=n(15),S=function(e){e.label;var t=e.value,n=e.total;return Object(c.jsx)(N.PieChart,{style:{width:50,height:50},startAngle:270,label:function(){return"".concat(Math.round(t/n*100),"%")},labelPosition:0,labelStyle:{fontSize:20,fontFamily:"sans-serif",fill:"#0ff"},lineWidth:20,totalValue:n,data:[{value:t,color:"#0FF"},{value:n-t,color:"#0FF3"}]})},_=function(e){var t=e;t>90&&(t=90),t<20&&(t=20);var n=80-60*((t-20)/70);return Math.floor(n)},T=function(e){var t=e.value;return Object(c.jsxs)("svg",{style:{width:50,height:50},viewBox:"0 0 100 100",children:[Object(c.jsx)("defs",{children:Object(c.jsxs)("mask",{id:"myMask",maskUnits:"userSpaceOnUse",children:[Object(c.jsx)("rect",{x:"0",y:"0",width:"100",height:"100",fill:"white"}),Object(c.jsx)("circle",{cx:50,cy:80,r:20,fill:"black"})]})}),Object(c.jsx)("circle",{cx:50,cy:80,r:20,fill:"#0ff3"}),Object(c.jsx)("line",{x1:"50",y1:"15",x2:"50",y2:"80",stroke:"#0ff3",strokeWidth:"25",strokeLinecap:"round",mask:"url(#myMask)"}),Object(c.jsx)("circle",{cx:50,cy:80,r:10,fill:"#0ff"}),Object(c.jsx)("line",{x1:"50",y1:_(t),x2:"50",y2:80,stroke:"#0ff",strokeWidth:"8",strokeLinecap:"round"})]})},g=(n(27),function(e){var t=e.numerator,n=e.denominator;return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"numerator",children:t}),Object(c.jsx)("div",{className:"denominator",children:n})]})}),k=(n(28),function(e){var t=e.header,n=e.CPU_USAGE,r=e.CPU_PROCESSES,i=e.CPU_TEMPERATURE,s=e.GPU_TEMPERATURE,a=e.RAM_USAGE,l=e.RAM_TOTAL,o=e.GPU_RAM_USAGE,u=e.GPU_RAM_TOTAL,j=e.DISK_USAGE,d=e.DISK_TOTAL;return Object(c.jsxs)("div",{className:"card-front",children:[t,Object(c.jsxs)("main",{children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"tile",children:[Object(c.jsx)("h3",{children:"CPU"}),Object(c.jsx)(S,{value:n,total:100}),Object(c.jsxs)("div",{children:[r," proc"]})]}),Object(c.jsxs)("div",{className:"tile",children:[Object(c.jsx)("h3",{children:"CPU"}),Object(c.jsx)(T,{value:i}),Object(c.jsxs)("div",{children:[i,"\xb0C"]})]}),Object(c.jsxs)("div",{className:"tile",children:[Object(c.jsx)("h3",{children:"GFX"}),Object(c.jsx)(T,{value:s}),Object(c.jsxs)("div",{children:[s,"\xb0C"]})]})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"tile",children:[Object(c.jsx)("h3",{children:"SYS RAM"}),Object(c.jsx)(S,{value:a,total:l}),Object(c.jsx)(g,{numerator:E()(a,10),denominator:E()(l,10)})]}),Object(c.jsxs)("div",{className:"tile",children:[Object(c.jsx)("h3",{children:"GFX RAM"}),Object(c.jsx)(S,{value:o,total:u}),Object(c.jsx)(g,{numerator:E()(o,10),denominator:E()(u,10)})]}),Object(c.jsxs)("div",{className:"tile",children:[Object(c.jsx)("h3",{children:"DISK"}),Object(c.jsx)(S,{value:j,total:d}),Object(c.jsx)(g,{numerator:E()(j,10),denominator:E()(d,10)})]})]})]})]})}),w=n(16),A=function(e){var t=e.ip,n=Object(r.useState)([]),i=Object(d.a)(n,2),s=i[0],a=i[1];if(Object(r.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O()("http://".concat(t,":9009/list"));case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,console.log(c),Array.isArray(c)&&a(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),0===s.length)return Object(c.jsx)(c.Fragment,{children:"[ no controls ]"});var l=function(){var e=Object(j.a)(u.a.mark((function e(n){var c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O()("http://".concat(t,":9009/").concat(n));case 3:return c=e.sent,e.next=6,c.text();case 6:r=e.sent,alert(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return s.map((function(e){return Object(c.jsx)("button",{onClick:function(){return l(e)},children:e},e)}))},M=(n(29),function(e){var t=e.header,n=e.RAM_TOTAL,r=e.GPU_RAM_TOTAL,i=e.NET_LOCAL_IP,s=e.PI_VERSION,a=e.HOST_OS_PRETTY_NAME,l=e.HOST_KERNEL,o=e.HOST_START,u=e.HOST_USERS,j=e.NET_OPEN_PORTS,d=e.ENUM_TIME,b=e.NODE_V,O=e.NPM_V,v=e.NET_ETH_TX,h=e.NET_ETH_RX,f=e.NET_WLAN_TX,x=e.NET_WLAN_RX,p=e.DISK_READ,m=e.DISK_WRITTEN,y=e.ip;return Object(c.jsxs)("div",{className:"card-back",children:[t,Object(c.jsxs)("footer",{children:[Object(c.jsx)("div",{children:i}),Object(c.jsxs)("div",{children:["Raspberry Pi ",s]}),Object(c.jsxs)("div",{children:["total RAM: ",E()(n+r,10)]}),Object(c.jsx)(A,{ip:y}),Object(c.jsx)("div",{children:a}),Object(c.jsxs)("div",{children:["kernel: ",l]}),Object(c.jsx)("div",{children:o}),Object(c.jsxs)("div",{children:["(started ",w.DateTime.fromFormat(o,"yyyy-MM-dd HH:mm:ss").toRelative(),")"]}),Object(c.jsxs)("div",{children:[u," user(s)"]}),Object(c.jsxs)("div",{children:["open ports: ",j]}),Object(c.jsxs)("div",{children:["last enum: ",d]}),b?Object(c.jsxs)("div",{children:["node: ",b,", npm: ",O]}):null,v||h?Object(c.jsxs)("div",{className:"tile",children:[Object(c.jsxs)("div",{children:["ETHERNET \u2b06\ufe0f ",E()(v,10)]}),Object(c.jsxs)("div",{children:["ETHERNET \u2b07\ufe0f ",E()(h,10)]})]}):null,f||x?Object(c.jsxs)("div",{className:"tile",children:[Object(c.jsxs)("div",{children:["WIFI \u2b06\ufe0f ",E()(f,10)]}),Object(c.jsxs)("div",{children:["WIFI \u2b07\ufe0f ",E()(x,10)]})]}):null,Object(c.jsxs)("div",{children:["read: ",p?E()(p,10):"?"]}),Object(c.jsxs)("div",{children:["written: ",m?E()(m,10):"?"]})]})]})}),I=function(e){var t=e.ip,n=Object(r.useState)(0),i=Object(d.a)(n,2),s=i[0],a=i[1],o=Object(r.useState)(0),b=Object(d.a)(o,2),h=b[0],f=b[1],x=Object(r.useState)(null),p=Object(d.a)(x,2),y=p[0],E=p[1],N=Object(r.useState)(null),S=Object(d.a)(N,2),_=S[0],T=S[1];Object(r.useEffect)((function(){if("error"!==y){var e=setInterval((function(){a(Date.now())}),80);return function(){return clearInterval(e)}}}),[y]),Object(r.useEffect)((function(){["error","loading","offline"].includes(y)||(s>h?function(){var e=Object(j.a)(u.a.mark((function e(){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E("loading"),e.next=4,O()("http://".concat(t,":9009/sysinfo"));case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,T(c),f(Date.now()+(1e3*(null===c||void 0===c?void 0:c.ENUM_TIME)||0)+1e4),E("done"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),E("offline");case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}()():E("".concat(Math.ceil(h-Date.now()),"ms")))}),[t,s]);var g=Object(c.jsx)(v,{title:(null===_||void 0===_?void 0:_.HOST_NAME)||t});return Object(c.jsx)(m,{status:y,children:_?[Object(c.jsx)(k,Object(l.a)({header:g},_),"1"),Object(c.jsx)(M,Object(l.a)(Object(l.a)({header:g},_),{},{ip:t}),"2")]:[Object(c.jsxs)("div",{className:"card-front",children:[g,"no data"]},"1"),Object(c.jsxs)("div",{className:"card-front",children:[g,"no data"]},"2")]})},R=n(9),C=function(e){var t=e.value,n=e.onChange,r=e.onRelease,i=function(e){r(e.target.value)};return Object(c.jsx)("div",{style:{padding:"0 20px"},children:Object(c.jsx)("input",{type:"range",min:"0",max:"100",value:t,onChange:function(e){n(e.target.value)},onMouseUp:i,onTouchEnd:i,step:"1",style:{width:"100%"}})})},P=function(e){var t=e.state,n=e.buttons;return Object(c.jsx)(c.Fragment,{children:n[t]})},U=function(e){return e.split(":").reduce((function(e,t){return 60*e+ +t}))},D=function(e){return new Date(1e3*e).toISOString().substr(11,8)},F=function(e){var t=e.ip,n=Object(r.useState)(0),i=Object(d.a)(n,2),s=i[0],a=i[1],o=Object(r.useState)(0),b=Object(d.a)(o,2),h=b[0],f=b[1],x=Object(r.useState)(null),p=Object(d.a)(x,2),y=p[0],E=p[1],N=Object(r.useState)({elapsed:0,total:0}),S=Object(d.a)(N,2),_=S[0],T=S[1];Object(r.useEffect)((function(){if("error"!==y){var e=setInterval((function(){a(Date.now())}),80);return function(){return clearInterval(e)}}}),[y]),Object(r.useEffect)((function(){["error","loading","offline"].includes(y)||(s>h?function(){var e=Object(j.a)(u.a.mark((function e(){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E("loading"),e.next=4,O()("http://192.168.0.40:9009/chromecast?ip=".concat(t,"&action=status"));case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,T(Object(l.a)(Object(l.a)(Object(l.a)({},c),(null===c||void 0===c?void 0:c.time)&&{elapsed:U(null===c||void 0===c?void 0:c.time.split(" ")[0])}),(null===c||void 0===c?void 0:c.time)&&{total:U(null===c||void 0===c?void 0:c.time.split(" ")[2])})),f(Date.now()+(1e3*(null===c||void 0===c?void 0:c.ENUM_TIME)||0)+1e4),E("done"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),E("offline");case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}()():E("".concat(Math.ceil(h-Date.now()),"ms")))}),[t,s]);var g=function(){var e=Object(j.a)(u.a.mark((function e(n,c,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c&&T((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(R.a)({},c,"LOADING"))})),e.next=4,O()("http://192.168.0.40:9009/chromecast?ip=".concat(t,"&action=").concat(n));case 4:c&&T((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(R.a)({},c,r))})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,c){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O()("http://192.168.0.40:9009/chromecast?ip=".concat(t,"&action=set-volume&volume=").concat(n));case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),w=Object(c.jsx)(v,{title:"chromecast: ".concat((null===_||void 0===_?void 0:_.name)||t)});return Object(c.jsxs)(m,{status:y,children:[Object(c.jsxs)("div",{style:{background:"#f0f"},children:[w,Object(c.jsx)("div",{children:null===_||void 0===_?void 0:_.display_name}),(null===_||void 0===_?void 0:_.player_state)?Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:null===_||void 0===_?void 0:_.title}),Object(c.jsx)("div",{children:null===_||void 0===_?void 0:_.time}),(null===_||void 0===_?void 0:_.elapsed)&&(null===_||void 0===_?void 0:_.total)&&Object(c.jsxs)("div",{children:[D(null===_||void 0===_?void 0:_.elapsed)," / ",D(null===_||void 0===_?void 0:_.total)," (",Math.round((null===_||void 0===_?void 0:_.elapsed)/(null===_||void 0===_?void 0:_.total)*100),"%)"]}),Object(c.jsx)("button",{onClick:function(){return g("rewind")},children:"rewind by 30 sec"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return g("mute")},children:"mute"}),Object(c.jsx)("button",{onClick:function(){return g("unmute")},children:"unmute"})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:["volume: ",null===_||void 0===_?void 0:_.volume,"%"]}),Object(c.jsx)(C,{value:(null===_||void 0===_?void 0:_.volume)||0,onChange:function(e){return T((function(t){return Object(l.a)(Object(l.a)({},t),{},{volume:e})}))},onRelease:k}),Object(c.jsxs)("div",{children:["muted: ","True"===(null===_||void 0===_?void 0:_.volume_muted)?"yes":"no"]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(P,{state:null===_||void 0===_?void 0:_.player_state,buttons:{LOADING:Object(c.jsx)("button",{onClick:function(){},children:"Loading"}),PLAYING:Object(c.jsx)("button",{onClick:function(){return g("pause","player_state","PAUSED")},children:"pause"}),PAUSED:Object(c.jsx)("button",{onClick:function(){return g("play","player_state","PLAYING")},children:"play"})}}),Object(c.jsx)("button",{onClick:function(){return g("stop")},children:"stop"})]})]}):null,Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(){return g("cast")},children:"cast"})})]}),Object(c.jsxs)("div",{children:[w,Object(c.jsx)("pre",{children:JSON.stringify(_,null,"  ")})]})]})},L=function(e){var t=e.ip,n=Object(r.useState)(0),i=Object(d.a)(n,2),s=i[0],a=i[1],l=Object(r.useState)(0),o=Object(d.a)(l,2),b=o[0],h=o[1],f=Object(r.useState)(null),x=Object(d.a)(f,2),p=x[0],y=x[1],E=Object(r.useState)(null),N=Object(d.a)(E,2),S=N[0],_=N[1];Object(r.useEffect)((function(){if("error"!==p){var e=setInterval((function(){a(Date.now())}),80);return function(){return clearInterval(e)}}}),[p]),Object(r.useEffect)((function(){["error","loading","offline"].includes(p)||(s>b?function(){var e=Object(j.a)(u.a.mark((function e(){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y("loading"),e.next=4,O()("http://192.168.0.40:9009/sonoff?ip=".concat(t,"&action=status"));case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,_(c),h(Date.now()+(1e3*(null===c||void 0===c?void 0:c.ENUM_TIME)||0)+1e4),y("done"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),y("offline");case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}()():y("".concat(Math.ceil(b-Date.now()),"ms")))}),[t,s]);var T=Object(c.jsx)(v,{title:"sonoff: ".concat((null===S||void 0===S?void 0:S.Status.FriendlyName[0])||t)});return Object(c.jsxs)(m,{status:p,children:[Object(c.jsxs)("div",{className:"card-front",children:[T,"no data"]},"1"),Object(c.jsxs)("div",{className:"card-front",children:[T,Object(c.jsx)("pre",{children:JSON.stringify(S,null,"  ")})]},"2")]})},G=function(e){var t=e.type,n=e.ip;return{default:Object(c.jsxs)(c.Fragment,{children:["unknown type ",t," for ",n]}),"pi/tinyman":Object(c.jsx)(I,{ip:n}),chromecast:Object(c.jsx)(F,{ip:n}),sonoff:Object(c.jsx)(L,{ip:n})}[t]||t.default},H=[{type:"chromecast",ip:"192.168.0.243"},{type:"sonoff",ip:"192.168.0.202"},{type:"pi/tinyman",ip:"192.168.0.100"},{type:"pi/tinyman",ip:"192.168.0.40"},{type:"pi/tinyman",ip:"192.168.0.13"},{type:"pi/tinyman",ip:"192.168.0.150"},{type:"pi/tinyman",ip:"192.168.0.200"},{type:"pi/tinyman",ip:"192.168.0.190"}],W=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("h1",{children:"tinyman"})}),Object(c.jsx)("main",{className:"App-main",children:H.map((function(e){var t=e.type,n=e.ip;return Object(c.jsx)(G,{type:t,ip:n},"".concat(t,"@").concat(n))}))})]})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(W,{})}),document.getElementById("root")),K()}},[[30,1,2]]]);
//# sourceMappingURL=main.407d3042.chunk.js.map