"use strict";const t=50,e=10,n=10,o=10;function r(t,e=!1){const n=t.attributes?[...t.attributes]:[],o={};return n.forEach((({nodeName:t,nodeValue:e})=>{o[t]=e})),console.log(o),o}const a=(t,e)=>{let n;const o=JSON.stringify(t.attributes),r=JSON.stringify(e.attributes);if(t.tagName==e.tagName&&o===r)n=10;else if(t.tagName==e.tagName&&o!=r)n=5;else if(o===r){const o=((t,e)=>{let n;return n=t==e?10:"DIV"==t&&"SPAN"==e||"SPAN"==t&&"DIV"==e?7:"LINK"==t&&"BUTTON"==e||"BUTTON"==t&&"LINK"==e?5:0,n})(t.tagName,e.tagName);n=o>=5?5:0}return n},i=(t,e)=>{const n=document.body.getBoundingClientRect(),o=t.getBoundingClientRect(),r=o.left-n.left,a=o.top-n.top,i=e.position.x,l=e.position.y,s=Math.abs(a-l),c=Math.abs(r-i);let g;return g=r==i&&a==l?10:r==i&&a!=l?s>200?2:7:r!=i&&a==l?c>200?2:7:c>500&&s>500?0:2,g},l=(t,e)=>{let n;return n=t==e?10:"DIV"==t&&"SPAN"==e||"SPAN"==t&&"DIV"==e?7:"LINK"==t&&"BUTTON"==e||"BUTTON"==t&&"LINK"==e?5:0,n},s=(t,e)=>{const n=t.children.length,{children:o}=e;return o===n?100:0},c=(r,c)=>{const u={weight:n,score:a(r,c)},N={weight:e,score:i(r,c)},d={weight:t,score:l(r.tagName,c.tagName)},m={weight:o,score:s(r,c)};return g([u,N,d,m])},g=t=>{let e=0;return t.forEach((t=>{const n=t.weight,o=t.score;e+=u(n,o)})),e},u=(t,e)=>e*t/100,N=t=>{t.style.border="1px solid red"};(()=>{const t=document.querySelector("img[src='images/5.webp']").parentElement,e=document.body.getBoundingClientRect(),n=t.getBoundingClientRect(),o=n.left-e.left,a=n.top-e.top,i=[...t.childNodes].filter((t=>t.nodeType===Node.TEXT_NODE)).map((t=>t.textContent)).join(""),l=(t=>{let e=t.getAttribute("id");for(;!e;)e=(t=t.parentElement).getAttribute("id");return e})(t),s={tagName:t.tagName,parent:{tag:t.parentElement.tagName,attributes:r(t.parentElement)},attributes:r(t),children:t.children.length,content:i,position:{x:o,y:a},contextId:l};localStorage.setItem("Errors",JSON.stringify([s]))})();JSON.parse(localStorage.getItem("Errors")).forEach((t=>{(t=>{const e=document.querySelectorAll(`#${t.contextId} *`);let n;for(let o of e)c(o,t)>0&&(n=o);console.log("Found element: ",n),n&&N(n)})(t)}));
//# sourceMappingURL=index.js.map
