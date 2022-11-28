(()=>{"use strict";var e={528:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(81),o=n.n(a),r=n(645),d=n.n(r)()(o());d.push([e.id,".homepage{padding:2em 4em}.homepage h2{font-size:1.75rem}.homepage .project-body{display:flex;flex-direction:column;gap:16px}.homepage .project-body .project-tasks{display:flex;flex-direction:column;gap:16px}.homepage .project-body .project-tasks .task-box{align-items:center;border:1px solid #000;padding:1em;display:flex;justify-content:space-between;gap:8px}.homepage .project-body .project-tasks .task-box .task-text{width:80%;display:flex;flex-direction:column;gap:8px}.homepage .project-body .project-tasks .task-box .task-text .task-title-holder{display:flex;align-items:center;gap:8px}.homepage .project-body .project-tasks .task-box .task-text .task-title{font-size:1.125rem}.homepage .project-body .project-tasks .task-box .task-text input{width:500px}.homepage .project-body .project-tasks .task-box .task-info{display:flex;gap:16px}.homepage .project-body .task-adder{display:flex;gap:8px;cursor:pointer}.task-form{padding:1em;border:1px solid #000;display:flex;gap:8px;flex-direction:column;width:500px}.task-form div{display:flex;gap:16px}header{background-color:#60a5fa;padding:1em 4em;display:flex;justify-content:space-between;align-items:center;grid-column:1/3}header i{font-size:1.5rem;cursor:pointer}header h1{font-size:2.5rem}footer{padding:1em 4em;display:flex;justify-content:center;gap:8px;background-color:gray;color:#fff;grid-column:1/3}footer p{font-size:1.25rem}footer i{font-size:1.25rem;cursor:pointer}.sidebar{padding:2em 4em;display:flex;flex-direction:column;gap:32px;background-color:#d3d3d3}.sidebar .sidebar-default{display:flex;flex-direction:column;gap:16px}.sidebar .sidebar-default div{display:flex;align-items:center;justify-content:flex-start;gap:8px}.sidebar .sidebar-default div p{cursor:pointer}.sidebar .sidebar-projects{display:flex;flex-direction:column;gap:16px}.sidebar .sidebar-projects h2{font-size:1.25rem}.sidebar .sidebar-projects .sidebar-projects-adder{display:flex;align-items:center;justify-content:flex-start;gap:8px;cursor:pointer}.sidebar .sidebar-projects .sidebar-project-box{display:flex;gap:8px;align-items:center}*{box-sizing:border-box;padding:0;margin:0;font-size:16px}.container{height:100vh;display:grid;grid-template-columns:1fr 6fr;grid-template-rows:75px auto 50px}section{grid-column:1/3;grid-row:2/3;display:grid;grid-template-columns:1fr 7fr}.homepage-only{grid-template-columns:1fr}input{padding:.25em 1em}",""]);const s=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(d[c]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);a&&d[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},d=[],s=0;s<e.length;s++){var c=e[s],i=a.base?c[0]+a.base:c[0],l=r[i]||0,p="".concat(i," ").concat(l);r[i]=l+1;var m=n(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var f=o(u,a);a.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}d.push(p)}return d}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var d=0;d<r.length;d++){var s=n(r[d]);t[s].references--}for(var c=a(e,o),i=0;i<r.length;i++){var l=n(r[i]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=c}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var a={};(()=>{n.d(a,{q:()=>je});var e=n(379),t=n.n(e),o=n(795),r=n.n(o),d=n(569),s=n.n(d),c=n(565),i=n.n(c),l=n(216),p=n.n(l),m=n(589),u=n.n(m),f=n(528),g={};g.styleTagTransform=u(),g.setAttributes=i(),g.insert=s().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=p(),t()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const x=document.createElement("div");x.classList.add("sidebar");const v=document.createElement("div");v.classList.add("sidebar-default");const h=document.createElement("div"),C=document.createElement("i");C.classList.add("fa-solid"),C.classList.add("fa-inbox");const b=document.createElement("p");b.textContent="Inbox",h.append(C,b);const y=document.createElement("div"),E=document.createElement("i");E.classList.add("fa-solid"),E.classList.add("fa-calendar-day");const S=document.createElement("p");S.textContent="Today",y.append(E,S);const k=document.createElement("div"),L=document.createElement("i");L.classList.add("fa-solid"),L.classList.add("fa-calendar-week");const I=document.createElement("p");I.textContent="This week",k.append(L,I),v.append(h,y,k);const j=document.createElement("div");j.classList.add("sidebar-projects");const N=document.createElement("h2");N.textContent="Projects";const O=document.createElement("div");O.classList.add("sidebar-projects-adder");const J=document.createElement("i");J.classList.add("fa-solid"),J.classList.add("fa-plus");const w=document.createElement("p");w.textContent="Add project",O.append(J,w);const T=document.createElement("div"),q=document.createElement("div");j.append(N,T,O,q);const z=()=>(x.append(v,j),T.textContent="",V(),x),M=document.querySelector("#header-i"),$=document.querySelector("section");M.addEventListener("click",(e=>{2==$.childElementCount?($.textContent="",Se.textContent="",$.appendChild(Le(ge)),$.classList.add("homepage-only")):($.textContent="",$.appendChild(z()),Se.textContent="",$.appendChild(Le(ge)),$.classList.remove("homepage-only"))}));const A=e=>{const t=e.target.textContent;Se.textContent="",je.textContent="",je.appendChild(z()),je.appendChild(Le(t)),T.textContent="",V()},P=e=>{const t=e,n=JSON.parse(localStorage.getItem(e))||[];return localStorage.setItem(`${t}`,JSON.stringify(n)),n},D=document.createElement("form"),F=document.createElement("input");F.minLength="3",F.placeholder="Enter Project Name",F.required="true";const U=document.createElement("div"),Z=document.createElement("button");Z.type="submit",Z.textContent="Submit";const H=document.createElement("button");H.textContent="Cancel",U.append(Z,H);const R=e=>{q.textContent=""},Y=document.createElement("div"),_=document.createElement("p");_.textContent="Are you sure you want to delete the project?";const B=document.createElement("button");B.textContent="No";const G=document.createElement("button");G.textContent="Yes";const K=document.createElement("div");K.append(G,B),Y.append(_,K);const Q=e=>{let t;const n=JSON.parse(localStorage.getItem("Sidebar"))||[];for(let a=0;a<n.length;a++)n[a]==e&&(t=a);n.splice(t,1),localStorage.setItem("Sidebar",JSON.stringify(n)),localStorage.removeItem(`${e}`),T.textContent="",V()},V=()=>{const e=JSON.parse(localStorage.getItem("Sidebar"))||[];if(e.length>0)for(let t=0;t<e.length;t++){const n=document.createElement("div");n.classList.add("sidebar-project-box");const a=document.createElement("i");a.classList.add("fa-solid"),a.classList.add("fa-folder");const o=document.createElement("p");o.textContent=e[t];const r=document.createElement("i");r.classList.add("fa-solid"),r.classList.add("fa-xmark"),n.append(a,o,r),T.appendChild(n),o.addEventListener("click",A),r.addEventListener("click",(()=>{return(e=n).textContent="",void e.appendChild(Y);var e})),G.addEventListener("click",(()=>Q(o.textContent)))}},W=e=>{let t,n;const a=JSON.parse(localStorage.getItem(ge)),o=JSON.parse(localStorage.getItem("Sidebar"))||[];ye.textContent="",ye.appendChild(F);for(let e=0;e<localStorage.length;e++)localStorage.key(e)==ge&&(t=e);for(let e=0;e<o.length;e++)o[e]==ge&&(n=e);F.addEventListener("change",(()=>{F.value.length>=3&&(localStorage.setItem(`${F.value}`,JSON.stringify(a)),localStorage.removeItem(ge),o[n]=F.value,localStorage.setItem("Sidebar",JSON.stringify(o)),T.textContent="",V(),ge=F.value,ye.textContent="",Ee.textContent=F.value,ye.appendChild(Ee))})),F.addEventListener("mouseout",(()=>{setTimeout((()=>{ye.textContent="",ye.appendChild(Ee)}),"250")}))};O.addEventListener("click",(e=>{q.appendChild((D.append(F,U),D))})),H.addEventListener("click",R),D.addEventListener("submit",(e=>{e.preventDefault(),P(F.value);const t=JSON.parse(localStorage.getItem("Sidebar"))||[];t.push(F.value),localStorage.setItem("Sidebar",JSON.stringify(t)),V(),R()})),B.addEventListener("click",(e=>{T.textContent="",V()}));const X=document.createElement("form");X.classList.add("task-form");const ee=document.createElement("input");ee.minLength="5",ee.placeholder="Title: Shopping",ee.required="true";const te=document.createElement("input");te.placeholder="Details: e.g. do shopping tomorrow 6pm",te.required="true";const ne=document.createElement("input");ne.required="true";const ae=new Date;let oe=ae.getUTCMonth()+1,re=ae.getUTCDate(),de=ae.getUTCFullYear()+"-"+oe+"-"+re;ne.type="date",ne.min="2022-01-01",ne.value=de;const se=document.createElement("div"),ce=document.createElement("button");ce.type="submit",ce.textContent="Submit";const ie=document.createElement("button");ie.textContent="Cancel",se.append(ce,ie);const le=e=>{be.appendChild((X.append(ee,te,ne,se),X))},pe=e=>{const t=e.target.parentNode.parentNode.firstChild.firstChild,n=JSON.parse(localStorage.getItem(ge));for(let e=0;e<n.length;e++)t.textContent==n[e].title&&n.splice(e,1);localStorage.setItem(`${ge}`,JSON.stringify(n)),Se.textContent="",je.textContent="",je.appendChild(z()),je.appendChild(Le(ge))},me=(e,t,n,a)=>{const o=JSON.parse(localStorage.getItem(ge));e.textContent="",e.append(ne,n),ne.addEventListener("change",(()=>{o[a.taskIndex].date=ne.value,localStorage.setItem(`${ge}`,JSON.stringify(o)),Se.textContent="",je.textContent="",je.appendChild(z()),je.appendChild(Le(ge))})),ne.addEventListener("mouseout",(()=>{setTimeout((()=>{e.textContent="",e.append(t,n)}),"250")}))},ue=(e,t,n,a)=>{const o=JSON.parse(localStorage.getItem(ge));e.textContent="",e.append(ee,n),ee.addEventListener("change",(()=>{o[a.taskIndex].title=ee.value,localStorage.setItem(`${ge}`,JSON.stringify(o)),Se.textContent="",je.textContent="",je.appendChild(z()),je.appendChild(Le(ge))})),ee.addEventListener("mouseout",(()=>{setTimeout((()=>{e.textContent="",e.append(t,n)}),"250")}))},fe=(e,t,n,a)=>{const o=JSON.parse(localStorage.getItem(ge));e.textContent="",e.append(n,te),te.addEventListener("change",(()=>{o[a.taskIndex].description=te.value,localStorage.setItem(`${ge}`,JSON.stringify(o)),Se.textContent="",je.textContent="",je.appendChild(z()),je.appendChild(Le(ge))})),te.addEventListener("mouseout",(()=>{setTimeout((()=>{e.textContent="",e.append(n,t)}),"250")}))};let ge;X.addEventListener("submit",(e=>{e.preventDefault();const t=JSON.parse(localStorage.getItem(ge)),n={title:ee.value,description:te.value,date:ne.value};t.push(n),localStorage.setItem(`${ge}`,JSON.stringify(t)),Se.textContent="",Ie()}));const xe=document.createElement("div");xe.classList.add("homepage"),P("Inbox"),P("Today"),P("This week");const ve=document.createElement("div");ve.classList.add("task-adder");const he=document.createElement("i");he.classList.add("fa-solid"),he.classList.add("fa-plus");const Ce=document.createElement("p");Ce.textContent="Add task",ve.append(he,Ce);const be=document.createElement("div");be.classList.add("project-body");const ye=document.createElement("div"),Ee=document.createElement("h2");ye.appendChild(Ee);const Se=document.createElement("div");Se.classList.add("project-tasks");const ke=e=>{be.contains(X)&&be.removeChild(X),ge=e;const t=JSON.parse(localStorage.getItem(e));if(be.append(ye,Se,ve),"Inbox"==e){be.removeChild(ve);let e=JSON.parse(localStorage.getItem("Inbox"));e=[];for(let t=0;t<localStorage.length;t++){if("Sidebar"!=localStorage.key(t)&&"Inbox"!=localStorage.key(t)){const n=JSON.parse(localStorage.getItem(localStorage.key(t)));n.forEach((e=>e.whereFrom=localStorage.key(t))),e=e.concat(...n)}localStorage.setItem("Inbox",JSON.stringify(e))}}return Ee.textContent=e,"Inbox"==e||"Today"==e||"This week"==e?Ee.removeEventListener("click",W):Ee.addEventListener("click",W),ve.addEventListener("click",le),((e,t)=>{if(!e==[])for(let n=0;n<e.length;n++){const a=document.createElement("div");a.classList.add("task-box");const o=document.createElement("p");o.classList.add("task-title");const r=document.createElement("i");r.classList.add("fa-solid"),r.classList.add("fa-xmark");const d=document.createElement("p"),s=document.createElement("p");o.textContent=e[n].title,d.textContent=e[n].description,s.textContent=e[n].date;const c=document.createElement("div"),i=document.createElement("div");i.classList.add("task-text");const l=document.createElement("div");if(l.appendChild(o),l.classList.add("task-title-holder"),"Inbox"==t){const t=document.createElement("p");t.textContent=`(Project: ${e[n].whereFrom})`,l.appendChild(t)}i.append(l,d),c.classList.add("task-info"),c.append(s,r),a.append(i,c),Se.appendChild(a);const p={projectName:e,taskIndex:n};r.addEventListener("click",pe),o.addEventListener("click",(()=>{ue(i,o,d,p)})),s.addEventListener("click",(()=>{me(c,s,r,p)})),d.addEventListener("click",(()=>{fe(i,d,o,p)}))}})(t,e),be},Le=e=>(xe.appendChild(ke(e)),xe),Ie=e=>{be.textContent="",Se.textContent="",xe.appendChild(ke(ge))};ie.addEventListener("click",Ie);const je=document.querySelector("section");je.appendChild(z()),je.appendChild(Le("Inbox")),P("Sidebar"),S.addEventListener("click",A),b.addEventListener("click",A),I.addEventListener("click",A)})()})();