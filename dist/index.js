"use strict";const t=50,e=10,n=10,r=10,a=10,o=10,s=(t,e)=>{let n=0;const r=t.attributes?[...t.attributes]:[];return n=l(r,e),n},l=(t,e)=>{let n,r;const a=75/t.length,o=25/t.length,{attributes:s}=e,l=a*t.length+o*t.length;return t.forEach(((t,e)=>{if(s.find(t)){const l="class"===t.name?o:a;n+=o,i(t,s[e])&&(r+=l),n+=l}})),(n+r)/l},i=(t,e)=>t.value===e.value,g=(t,e)=>{let n;const r=JSON.stringify(t.attributes),a=JSON.stringify(e.attributes);if(t.tagName==e.tagName&&r===a)n=10;else if(t.tagName==e.tagName&&r!=a)n=5;else if(r===a){const r=((t,e)=>{let n;return n=t==e?10:"DIV"==t&&"SPAN"==e||"SPAN"==t&&"DIV"==e?7:"LINK"==t&&"BUTTON"==e||"BUTTON"==t&&"LINK"==e?5:0,n})(t.tagName,e.tagName);n=r>=5?5:0}return n},c=(t,e)=>{const n=document.body.getBoundingClientRect(),r=t.getBoundingClientRect(),a=r.left-n.left,o=r.top-n.top,s=Math.abs(o-e.absY),l=Math.abs(a-e.absX);let i;return i=a==e.absX&&o==e.absY?10:a==e.absX&&o!=e.absY?s>200?2:7:a!=e.absX&&o==e.absY?l>200?2:7:l>500&&s>500?0:2,i},h=(t,e)=>{let n;return n=t==e?10:"DIV"==t&&"SPAN"==e||"SPAN"==t&&"DIV"==e?7:"LINK"==t&&"BUTTON"==e||"BUTTON"==t&&"LINK"==e?5:0,n},N=(t,e)=>{const n=t.children.length,{children:r}=e;return r===n?100:0},u=(t,e)=>{const{content:n}=e,r=[...t.childNodes].filter((t=>t.nodeType===Node.TEXT_NODE)).map((t=>t.textContent)).join("");return score=100*m(n,r),score},m=(t,e)=>{var n=t,r=e;t.length<e.length&&(n=e,r=t);var a=n.length;return 0==a?1:(a-((t,e)=>{e=(t=t&&t.toLowerCase())&&e.toLowerCase();for(var n=new Array,r=0;r<=t.length;r++){for(var a=r,o=0;o<=e.length;o++)if(0==r)n[o]=o;else if(o>0){var s=n[o-1];t.charAt(r-1)!=e.charAt(o-1)&&(s=Math.min(Math.min(s,a),n[o])+1),n[o-1]=a,a=s}r>0&&(n[e.length]=a)}return n[e.length]})(n,r))/parseFloat(a)},d=(l,i)=>{const m={weight:n,score:s(l,i)},d={weight:r,score:g(l,i)},f={weight:e,score:c(l,i)},p={weight:t,score:h(l.tagName,i.tagName)},T={weight:a,score:N(l,i)},E={weight:o,score:u(l,i)};return b([m,d,f,p,T,E])},b=t=>{let e=0;return t.forEach((t=>{const n=t.weight,r=t.score;e+=f(n,r)})),e},f=(t,e)=>e*t/100,p=t=>{t.style.border="1px solid red"};(()=>{const t=document.querySelector("img[src='images/5.webp']").parentElement,e=document.body.getBoundingClientRect(),n=t.getBoundingClientRect(),r=n.left-e.left,a=n.top-e.top,o=[...t.childNodes].filter((t=>t.nodeType===Node.TEXT_NODE)).map((t=>t.textContent)).join(""),s={tagName:t.tagName,parent:{tag:t.parentElement.tagName,attributes:t.parentElement.attributes},attributes:[...t.attributes],children:t.children.length,content:o,position:{x:r,y:a}};localStorage.setItem("Errors",JSON.stringify([s]))})();JSON.parse(localStorage.getItem("Errors")).forEach((t=>{(t=>{const e=document.getElementsByTagName(t?.tagName.toLowerCase());let n;for(let r of e)d(r,t)>0&&(n=r);console.log("Found element: ",n),n&&p(n)})(t)}));
//# sourceMappingURL=index.js.map
