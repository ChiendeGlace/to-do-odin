(()=>{"use strict";var e={528:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(81),o=n.n(a),r=n(645),s=n.n(r)()(o());s.push([e.id,'.homepage{padding:2em 4em}.homepage h2{font-size:1.75rem;font-family:"Oswald",sans-serif}.homepage .project-body{display:flex;flex-direction:column;gap:16px}.homepage .project-body .project-tasks{display:flex;flex-direction:column;gap:16px}.homepage .project-body .project-tasks .task-box{background-color:#fff;align-items:center;padding:1em;display:flex;justify-content:space-between;border-radius:5px;gap:8px}.homepage .project-body .project-tasks .task-box .task-text{width:80%;display:flex;flex-direction:column;gap:8px}.homepage .project-body .project-tasks .task-box .task-text .task-title-holder{display:flex;align-items:center;gap:8px}.homepage .project-body .project-tasks .task-box .task-text .task-title{font-size:1.125rem}.homepage .project-body .project-tasks .task-box .task-text input{width:500px}.homepage .project-body .project-tasks .task-box .task-info{display:flex;gap:16px}.homepage .project-body .task-adder{display:flex;gap:8px;cursor:pointer}.task-form{padding:1em;border-radius:5px;background-color:#fff;display:flex;gap:8px;flex-direction:column;width:500px}.task-form div{display:flex;gap:16px}.task-functionals{display:flex;flex-direction:column;align-items:center;gap:8px}.blue-one{background-color:#bae6fd}@media screen and (max-width: 700px){.task-box{flex-direction:column}.task-functionals{flex-direction:row;width:100%}.task-text{width:100%;align-self:flex-start}.task-info{width:100%;align-items:center;justify-content:space-between}.task-form{width:100%}}header{background-color:#fcfcd4;padding:1em 4em;display:flex;justify-content:space-between;align-items:center;grid-column:1/3;box-shadow:0px 3px 1px 1px rgba(0,0,0,.25)}header i{font-size:1.5rem;cursor:pointer}header h1{font-size:2.5rem;font-family:"Oswald",sans-serif}footer{padding:1em 4em;display:flex;justify-content:center;gap:8px;background-color:#fcfcd4;grid-column:1/3}footer p{font-size:1rem}footer i{font-size:1rem;cursor:pointer}.sidebar{padding:2em 4em;display:flex;flex-direction:column;gap:32px;background-color:#bae6fd;box-shadow:3px 3px 1px 1px rgba(0,0,0,.25)}.sidebar .sidebar-default{display:flex;flex-direction:column;gap:16px}.sidebar .sidebar-default div{display:flex;align-items:center;justify-content:flex-start;gap:8px}.sidebar .sidebar-default div p{cursor:pointer}.sidebar .sidebar-projects{display:flex;flex-direction:column;gap:16px}.sidebar .sidebar-projects h2{font-size:1.25rem;font-family:"Oswald",sans-serif}.sidebar .sidebar-projects .sidebar-projects-adder{display:flex;align-items:center;justify-content:flex-start;gap:8px;cursor:pointer}.sidebar .sidebar-projects .sidebar-project-box{display:flex;gap:16px;align-items:center}.project-form{background-color:#fff;padding:1em;border-radius:5px;display:flex;gap:8px;width:200px;flex-direction:column}.project-form div{display:flex;flex-direction:column;gap:16px}@media screen and (max-width: 1000px){.sidebar{flex-direction:row;align-items:flex-start;justify-content:space-between;box-shadow:0px 3px 1px 1px rgba(0,0,0,.25)}}*{box-sizing:border-box;padding:0;margin:0;font-size:16px;font-family:"Montserrat",sans-serif}input{border:none;border-bottom:1px solid rgba(0,0,0,.25);padding:.25em 1em}button{background-color:#fcfcd4;padding:.5em 1em;border:none;box-shadow:0px 0px 1px 1px rgba(0,0,0,.25);font-weight:500}.container{min-height:100vh;display:grid;grid-template-columns:1fr 6fr;grid-template-rows:75px auto 50px;background-color:#bae6fd}section{grid-column:1/3;grid-row:2/3;display:grid;grid-template-columns:2fr 9fr}.homepage-only{grid-template-columns:1fr}@media screen and (max-width: 1000px){section{grid-template-columns:1fr}}',""]);const c=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(s[d]=!0)}for(var l=0;l<e.length;l++){var i=[].concat(e[l]);a&&s[i[0]]||(void 0!==r&&(void 0===i[5]||(i[1]="@layer".concat(i[5].length>0?" ".concat(i[5]):""," {").concat(i[1],"}")),i[5]=r),n&&(i[2]?(i[1]="@media ".concat(i[2]," {").concat(i[1],"}"),i[2]=n):i[2]=n),o&&(i[4]?(i[1]="@supports (".concat(i[4],") {").concat(i[1],"}"),i[4]=o):i[4]="".concat(o)),t.push(i))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},s=[],c=0;c<e.length;c++){var d=e[c],l=a.base?d[0]+a.base:d[0],i=r[l]||0,p="".concat(l," ").concat(i);r[l]=i+1;var m=n(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var f=o(u,a);a.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var c=n(r[s]);t[c].references--}for(var d=a(e,o),l=0;l<r.length;l++){var i=n(r[l]);0===t[i].references&&(t[i].updater(),t.splice(i,1))}r=d}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var a={};(()=>{n.d(a,{q:()=>Je});var e=n(379),t=n.n(e),o=n(795),r=n.n(o),s=n(569),c=n.n(s),d=n(565),l=n.n(d),i=n(216),p=n.n(i),m=n(589),u=n.n(m),f=n(528),g={};g.styleTagTransform=u(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=p(),t()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const x=document.createElement("div");x.classList.add("sidebar");const h=document.createElement("div");h.classList.add("sidebar-default");const b=document.createElement("div"),v=document.createElement("i");v.classList.add("fa-solid"),v.classList.add("fa-inbox");const S=document.createElement("p");S.textContent="Inbox",b.append(v,S);const y=document.createElement("div"),k=document.createElement("i");k.classList.add("fa-solid"),k.classList.add("fa-calendar-day");const I=document.createElement("p");I.textContent="Today",y.append(k,I);const C=document.createElement("div"),E=document.createElement("i");E.classList.add("fa-solid"),E.classList.add("fa-calendar-week");const L=document.createElement("p");L.textContent="This week",C.append(E,L),h.append(b,y,C);const N=document.createElement("div");N.classList.add("sidebar-projects");const O=document.createElement("h2");O.textContent="Projects";const J=document.createElement("div");J.classList.add("sidebar-projects-adder");const w=document.createElement("i");w.classList.add("fa-solid"),w.classList.add("fa-plus");const j=document.createElement("p");j.textContent="Add project",J.append(w,j);const T=document.createElement("div"),$=document.createElement("div");N.append(O,T,J,$);const F=()=>(x.append(h,N),T.textContent="",V(),x),q=document.querySelector("#header-i"),M=document.querySelector("section");q.addEventListener("click",(e=>{2==M.childElementCount?(M.textContent="",Ee.textContent="",M.appendChild(Ne(he)),M.classList.add("homepage-only")):(M.textContent="",M.appendChild(F()),Ee.textContent="",M.appendChild(Ne(he)),M.classList.remove("homepage-only"))}));const z=e=>{const t=e.target.textContent;Ee.textContent="",Je.textContent="",Je.appendChild(F()),Je.appendChild(Ne(t)),T.textContent="",V()},A=e=>{const t=e,n=JSON.parse(localStorage.getItem(e))||[];return localStorage.setItem(`${t}`,JSON.stringify(n)),n},P=document.createElement("form");P.classList.add("project-form");const D=document.createElement("input");D.minLength="3",D.placeholder="Project Name",D.required="true";const U=document.createElement("div"),Z=document.createElement("button");Z.type="submit",Z.textContent="Submit";const H=document.createElement("button");H.textContent="Cancel",U.append(Z,H);const R=e=>{$.textContent=""},Y=document.createElement("div"),_=document.createElement("p");_.textContent="Are you sure you want to delete the project?";const B=document.createElement("button");B.textContent="No";const G=document.createElement("button");G.textContent="Yes";const K=document.createElement("div");K.append(G,B),Y.append(_,K);const Q=e=>{let t;const n=JSON.parse(localStorage.getItem("Sidebar"))||[];for(let a=0;a<n.length;a++)n[a]==e&&(t=a);n.splice(t,1),localStorage.setItem("Sidebar",JSON.stringify(n)),localStorage.removeItem(`${e}`),T.textContent="",V()},V=()=>{const e=JSON.parse(localStorage.getItem("Sidebar"))||[];if(e.length>0)for(let t=0;t<e.length;t++){const n=document.createElement("div");n.classList.add("sidebar-project-box");const a=document.createElement("i");a.classList.add("fa-solid"),a.classList.add("fa-folder");const o=document.createElement("p");o.style.cursor="pointer",o.textContent=e[t];const r=document.createElement("i");r.style.cursor="pointer",r.classList.add("fa-solid"),r.classList.add("fa-xmark"),n.append(a,o,r),T.appendChild(n),o.addEventListener("click",z),r.addEventListener("click",(()=>{return(e=n).textContent="",void e.appendChild(Y);var e})),G.addEventListener("click",(()=>Q(o.textContent)))}},W=document.createElement("input");W.classList.add("blue-one"),W.minLength="3",W.placeholder="Project Name",W.required="true";const X=e=>{let t,n;const a=JSON.parse(localStorage.getItem(he)),o=JSON.parse(localStorage.getItem("Sidebar"))||[];Ie.textContent="",Ie.appendChild(W);for(let e=0;e<localStorage.length;e++)localStorage.key(e)==he&&(t=e);for(let e=0;e<o.length;e++)o[e]==he&&(n=e);W.addEventListener("change",(()=>{W.value.length>=3&&(localStorage.setItem(`${W.value}`,JSON.stringify(a)),localStorage.removeItem(he),o[n]=W.value,localStorage.setItem("Sidebar",JSON.stringify(o)),T.textContent="",V(),he=W.value,Ie.textContent="",Ce.textContent=W.value,Ie.appendChild(Ce))})),W.addEventListener("mouseout",(()=>{setTimeout((()=>{Ie.textContent="",Ie.appendChild(Ce)}),"250")}))};J.addEventListener("click",(e=>{$.appendChild((P.append(D,U),P))})),H.addEventListener("click",R),P.addEventListener("submit",(e=>{e.preventDefault(),A(D.value);const t=JSON.parse(localStorage.getItem("Sidebar"))||[];t.push(D.value),localStorage.setItem("Sidebar",JSON.stringify(t)),V(),R()})),B.addEventListener("click",(e=>{T.textContent="",V()}));const ee=document.createElement("form");ee.classList.add("task-form");const te=document.createElement("input");te.minLength="5",te.placeholder="Title: Shopping",te.required="true";const ne=document.createElement("input");ne.placeholder="Details: e.g. do shopping tomorrow 6pm",ne.classList.add("task-form-description"),ne.required="true";const ae=document.createElement("input");ae.required="true";const oe=new Date;let re=oe.getUTCMonth()+1,se=oe.getUTCDate(),ce=oe.getUTCFullYear()+"-"+re+"-"+se;ae.type="date",ae.min="2022-01-01",ae.value=ce;const de=document.createElement("div"),le=document.createElement("button");le.type="submit",le.textContent="Submit";const ie=document.createElement("button");ie.textContent="Cancel",de.append(le,ie);const pe=e=>{ke.appendChild((ee.append(te,ne,ae,de),ee))},me=e=>{let t,n,a=e.taskName;const o=JSON.parse(localStorage.getItem(he));if("Inbox"==he){t=o[e.taskIndex].whereFrom,n=JSON.parse(localStorage.getItem(t));for(let e=0;e<n.length;e++)a==n[e].title&&n.splice(e,1);localStorage.setItem(`${t}`,JSON.stringify(n))}if("Inbox"!==he){const e=JSON.parse(localStorage.getItem("Inbox"));for(let t=0;t<e.length;t++)a==e[t].title&&e.splice(t,1);localStorage.setItem("Inbox",JSON.stringify(e))}for(let e=0;e<o.length;e++)a==o[e].title&&o.splice(e,1);localStorage.setItem(`${he}`,JSON.stringify(o)),Ee.textContent="",Je.textContent="",Je.appendChild(F()),Je.appendChild(Ne(he))},ue=(e,t,n,a,o)=>{let r,s;const c=JSON.parse(localStorage.getItem(he));t.textContent="",t.append(ae,a),ae.addEventListener("change",(()=>{if(c[o.taskIndex].date=ae.value,"Inbox"==he){r=c[o.taskIndex].whereFrom,s=JSON.parse(localStorage.getItem(r));for(let e=0;e<s.length;e++)o.taskName==s[e].title&&(s[e].date=ae.value);localStorage.setItem(`${r}`,JSON.stringify(s))}if("Inbox"!==he){const e=JSON.parse(localStorage.getItem("Inbox"));for(let t=0;t<e.length;t++)o.taskName==e[t].title&&(e[t].date=ae.value);localStorage.setItem("Inbox",JSON.stringify(e))}localStorage.setItem(`${he}`,JSON.stringify(c)),Ee.textContent="",Je.textContent="",Je.appendChild(F()),Je.appendChild(Ne(he))})),document.addEventListener("click",(o=>{o.target!==e.target&&o.target!==ae&&setTimeout((()=>{t.textContent="",t.append(n,a)}),"250")}))},fe=(e,t,n,a,o)=>{let r,s;const c=JSON.parse(localStorage.getItem(he));t.textContent="",t.append(te,a),te.addEventListener("change",(()=>{if(c[o.taskIndex].title=te.value,"Inbox"==he){r=c[o.taskIndex].whereFrom,s=JSON.parse(localStorage.getItem(r));for(let e=0;e<s.length;e++)o.taskName==s[e].title&&(s[e].title=te.value);localStorage.setItem(`${r}`,JSON.stringify(s))}if("Inbox"!==he){const e=JSON.parse(localStorage.getItem("Inbox"));for(let t=0;t<e.length;t++)o.taskName==e[t].title&&(e[t].title=te.value);localStorage.setItem("Inbox",JSON.stringify(e))}localStorage.setItem(`${he}`,JSON.stringify(c)),Ee.textContent="",Je.textContent="",Je.appendChild(F()),Je.appendChild(Ne(he))})),document.addEventListener("click",(o=>{o.target!==e.target&&o.target!==te&&setTimeout((()=>{t.textContent="",t.append(n,a)}),"250")}))},ge=(e,t,n,a,o)=>{let r,s;const c=JSON.parse(localStorage.getItem(he));t.textContent="",t.append(a,ne),ne.addEventListener("change",(()=>{if(c[o.taskIndex].description=ne.value,"Inbox"==he){r=c[o.taskIndex].whereFrom,s=JSON.parse(localStorage.getItem(r));for(let e=0;e<s.length;e++)o.taskName==s[e].title&&(s[e].description=ne.value);localStorage.setItem(`${r}`,JSON.stringify(s))}if("Inbox"!==he){const e=JSON.parse(localStorage.getItem("Inbox"));for(let t=0;t<e.length;t++)o.taskName==e[t].title&&(e[t].description=ne.value);localStorage.setItem("Inbox",JSON.stringify(e))}localStorage.setItem(`${he}`,JSON.stringify(c)),Ee.textContent="",Je.textContent="",Je.appendChild(F()),Je.appendChild(Ne(he))})),document.addEventListener("click",(o=>{o.target!==e.target&&o.target!==ne&&setTimeout((()=>{t.textContent="",t.append(a,n)}),"250")}))},xe=(e,t)=>{if("Inbox"==t){let t,n;const a=JSON.parse(localStorage.getItem("Inbox"));t=a[e.taskIndex].whereFrom,n=JSON.parse(localStorage.getItem(t)),a[e.taskIndex].completed?a[e.taskIndex].completed=!1:a[e.taskIndex].completed=!0;for(let e=0;e<n.length;e++)n[e].completed?n[e].completed=!1:n[e].completed=!0;localStorage.setItem("Inbox",JSON.stringify(a)),localStorage.setItem(`${t}`,JSON.stringify(n))}else{const t=JSON.parse(localStorage.getItem(he)),n=JSON.parse(localStorage.getItem("Inbox"));t[e.taskIndex].completed?t[e.taskIndex].completed=!1:t[e.taskIndex].completed=!0;for(let e=0;e<n.length;e++)n[e].completed?n[e].completed=!1:n[e].completed=!0;localStorage.setItem(`${he}`,JSON.stringify(t)),localStorage.setItem("Inbox",JSON.stringify(n))}};let he;ee.addEventListener("submit",(e=>{e.preventDefault();const t=JSON.parse(localStorage.getItem(he)),n={title:te.value,description:ne.value,date:ae.value,priority:!1,completed:!1};t.push(n),localStorage.setItem(`${he}`,JSON.stringify(t)),Ee.textContent="",Oe()}));const be=document.createElement("div");be.classList.add("homepage"),A("Inbox"),A("Today"),A("This week");const ve=document.createElement("div");ve.classList.add("task-adder");const Se=document.createElement("i");Se.classList.add("fa-solid"),Se.classList.add("fa-plus");const ye=document.createElement("p");ye.textContent="Add task",ve.append(Se,ye);const ke=document.createElement("div");ke.classList.add("project-body");const Ie=document.createElement("div"),Ce=document.createElement("h2");Ie.appendChild(Ce);const Ee=document.createElement("div");Ee.classList.add("project-tasks");const Le=e=>{ke.contains(ee)&&ke.removeChild(ee),he=e;const t=JSON.parse(localStorage.getItem(e));if(ke.append(Ie,Ee,ve),"Inbox"==e){ke.removeChild(ve);let e=JSON.parse(localStorage.getItem("Inbox"));e=[];for(let t=0;t<localStorage.length;t++){if("Sidebar"!=localStorage.key(t)&&"Inbox"!=localStorage.key(t)){const n=JSON.parse(localStorage.getItem(localStorage.key(t)));n.forEach((e=>e.whereFrom=localStorage.key(t))),e=e.concat(...n)}localStorage.setItem("Inbox",JSON.stringify(e))}}return Ce.textContent=e,"Inbox"==e||"Today"==e||"This week"==e?Ce.removeEventListener("click",X):(Ce.addEventListener("click",X),Ce.style.cursor="pointer"),ve.addEventListener("click",pe),((e,t)=>{if(!e==[])for(let n=0;n<e.length;n++){const a=document.createElement("div");a.classList.add("task-box");const o=document.createElement("p");o.classList.add("task-title");const r=document.createElement("i");r.classList.add("fa-solid"),r.classList.add("fa-xmark");const s=document.createElement("p"),c=document.createElement("p");o.textContent=e[n].title,o.style.cursor="pointer",s.textContent=e[n].description,s.style.cursor="pointer",c.textContent=e[n].date,c.style.cursor="pointer";const d=document.createElement("div"),l=document.createElement("div");l.classList.add("task-text");const i=document.createElement("div");i.appendChild(o),i.classList.add("task-title-holder");const p=document.createElement("div");p.classList.add("task-functionals");const m=document.createElement("i");m.classList.add("fa-regular"),m.classList.add("fa-star"),m.style.cursor="pointer";const u=document.createElement("i");if(u.classList.add("fa-regular"),u.classList.add("fa-circle-check"),u.style.cursor="pointer",p.append(m,u),"Inbox"==t){const t=document.createElement("p");t.textContent=`(From: ${e[n].whereFrom})`,i.appendChild(t)}l.append(i,s),d.classList.add("task-info"),d.append(c,r),a.append(p,l,d),r.style.cursor="pointer",Ee.appendChild(a);const f={taskName:o.textContent,projectName:e,taskIndex:n};r.addEventListener("click",(()=>me(f))),o.addEventListener("click",(e=>{fe(e,l,i,s,f)})),c.addEventListener("click",(e=>{ue(e,d,c,r,f)})),s.addEventListener("click",(e=>{ge(e,l,s,i,f)})),u.addEventListener("click",(()=>{xe(f,t)}))}})(t,e),ke},Ne=e=>(be.appendChild(Le(e)),be),Oe=e=>{ke.textContent="",Ee.textContent="",be.appendChild(Le(he))};ie.addEventListener("click",Oe);const Je=document.querySelector("section");Je.appendChild(F()),Je.appendChild(Ne("Inbox")),A("Sidebar"),I.addEventListener("click",z),S.addEventListener("click",z),L.addEventListener("click",z)})()})();