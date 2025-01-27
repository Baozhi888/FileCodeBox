import{c as G,B as se,r as z,o as ae,w as xe,p as U,b as F,d as a,_ as ie,u as le,a as be,n as h,e as l,g as J,f as M,j as N,i as q,t as $,h as K,v as Z,T as O,C as me,F as ee,x as te,k as V,X as we,q as _e,y as Ce,z as Ae,A as re,m as Me}from"./index-BMgmatCO.js";import{g as Se,u as Be,S as Te,C as Ie,a as ke,Q as Ue,E as Fe}from"./_commonjsHelpers-CRVxHcaM.js";import{F as oe}from"./file-C8d0agNl.js";import{H as ze,T as $e}from"./trash-BsECra8n.js";/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=G("ClipboardCopyIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=G("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=G("CloudUploadIcon",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=G("SendIcon",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]),Re=se({__name:"BorderProgressBar",props:{progress:{}},setup(S){const D=S,k=z(null),u=z(null);let f=null;const A=()=>{if(!f||!u.value||!k.value)return;const x=k.value.clientWidth,m=k.value.clientHeight;u.value.width=x,u.value.height=m;const y=4,c=8;f.lineWidth=y;const _=f.createLinearGradient(0,0,x,m);_.addColorStop(0,"#4f46e5"),_.addColorStop(.5,"#7c3aed"),_.addColorStop(1,"#db2777"),f.strokeStyle="rgba(229, 231, 235, 0.2)",b(f,y/2,y/2,x-y,m-y,c),f.stroke();const I=((x+m)*2-8*c+2*Math.PI*c)*D.progress/100;f.strokeStyle=_,f.lineCap="round",f.lineJoin="round",f.beginPath();let v=I;const w=y/2,g=x-y,s=m-y;if(v>0){const n=Math.min(g-2*c,v);f.moveTo(c+w,w),f.lineTo(n+c+w,w),v-=n}if(v>0){const n=Math.min(Math.PI/2,v/c);f.arc(g-c+w,c+w,c,-Math.PI/2,n-Math.PI/2,!1),v-=n*c}if(v>0){const n=Math.min(s-2*c,v);f.lineTo(g+w,n+c+w),v-=n}if(v>0){const n=Math.min(Math.PI/2,v/c);f.arc(g-c+w,s-c+w,c,0,n,!1),v-=n*c}if(v>0){const n=Math.min(g-2*c,v);f.lineTo(g-n-c+w,s+w),v-=n}if(v>0){const n=Math.min(Math.PI/2,v/c);f.arc(c+w,s-c+w,c,Math.PI/2,Math.PI/2+n,!1),v-=n*c}if(v>0){const n=Math.min(s-2*c,v);f.lineTo(w,s-n-c+w),v-=n}if(v>0){const n=Math.min(Math.PI/2,v/c);f.arc(c+w,c+w,c,Math.PI,Math.PI+n,!1)}f.stroke()};function b(x,m,y,c,_,C){x.beginPath(),x.moveTo(m+C,y),x.lineTo(m+c-C,y),x.arcTo(m+c,y,m+c,y+C,C),x.lineTo(m+c,y+_-C),x.arcTo(m+c,y+_,m+c-C,y+_,C),x.lineTo(m+C,y+_),x.arcTo(m,y+_,m,y+_-C,C),x.lineTo(m,y+C),x.arcTo(m,y,m+C,y,C),x.closePath()}return ae(()=>{u.value&&(f=u.value.getContext("2d"),A())}),xe(()=>D.progress,A),(x,m)=>(U(),F("div",{class:"border-progress-container",ref_key:"container",ref:k},[a("canvas",{ref_key:"canvas",ref:u,class:"border-progress-canvas"},null,512)],512))}}),Ve=ie(Re,[["__scopeId","data-v-2fbf5085"]]);var ue={exports:{}};(function(S,D){(function(k){S.exports=k()})(function(k){var u=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function f(s,n){var t=s[0],e=s[1],o=s[2],r=s[3];t+=(e&o|~e&r)+n[0]-680876936|0,t=(t<<7|t>>>25)+e|0,r+=(t&e|~t&o)+n[1]-389564586|0,r=(r<<12|r>>>20)+t|0,o+=(r&t|~r&e)+n[2]+606105819|0,o=(o<<17|o>>>15)+r|0,e+=(o&r|~o&t)+n[3]-1044525330|0,e=(e<<22|e>>>10)+o|0,t+=(e&o|~e&r)+n[4]-176418897|0,t=(t<<7|t>>>25)+e|0,r+=(t&e|~t&o)+n[5]+1200080426|0,r=(r<<12|r>>>20)+t|0,o+=(r&t|~r&e)+n[6]-1473231341|0,o=(o<<17|o>>>15)+r|0,e+=(o&r|~o&t)+n[7]-45705983|0,e=(e<<22|e>>>10)+o|0,t+=(e&o|~e&r)+n[8]+1770035416|0,t=(t<<7|t>>>25)+e|0,r+=(t&e|~t&o)+n[9]-1958414417|0,r=(r<<12|r>>>20)+t|0,o+=(r&t|~r&e)+n[10]-42063|0,o=(o<<17|o>>>15)+r|0,e+=(o&r|~o&t)+n[11]-1990404162|0,e=(e<<22|e>>>10)+o|0,t+=(e&o|~e&r)+n[12]+1804603682|0,t=(t<<7|t>>>25)+e|0,r+=(t&e|~t&o)+n[13]-40341101|0,r=(r<<12|r>>>20)+t|0,o+=(r&t|~r&e)+n[14]-1502002290|0,o=(o<<17|o>>>15)+r|0,e+=(o&r|~o&t)+n[15]+1236535329|0,e=(e<<22|e>>>10)+o|0,t+=(e&r|o&~r)+n[1]-165796510|0,t=(t<<5|t>>>27)+e|0,r+=(t&o|e&~o)+n[6]-1069501632|0,r=(r<<9|r>>>23)+t|0,o+=(r&e|t&~e)+n[11]+643717713|0,o=(o<<14|o>>>18)+r|0,e+=(o&t|r&~t)+n[0]-373897302|0,e=(e<<20|e>>>12)+o|0,t+=(e&r|o&~r)+n[5]-701558691|0,t=(t<<5|t>>>27)+e|0,r+=(t&o|e&~o)+n[10]+38016083|0,r=(r<<9|r>>>23)+t|0,o+=(r&e|t&~e)+n[15]-660478335|0,o=(o<<14|o>>>18)+r|0,e+=(o&t|r&~t)+n[4]-405537848|0,e=(e<<20|e>>>12)+o|0,t+=(e&r|o&~r)+n[9]+568446438|0,t=(t<<5|t>>>27)+e|0,r+=(t&o|e&~o)+n[14]-1019803690|0,r=(r<<9|r>>>23)+t|0,o+=(r&e|t&~e)+n[3]-187363961|0,o=(o<<14|o>>>18)+r|0,e+=(o&t|r&~t)+n[8]+1163531501|0,e=(e<<20|e>>>12)+o|0,t+=(e&r|o&~r)+n[13]-1444681467|0,t=(t<<5|t>>>27)+e|0,r+=(t&o|e&~o)+n[2]-51403784|0,r=(r<<9|r>>>23)+t|0,o+=(r&e|t&~e)+n[7]+1735328473|0,o=(o<<14|o>>>18)+r|0,e+=(o&t|r&~t)+n[12]-1926607734|0,e=(e<<20|e>>>12)+o|0,t+=(e^o^r)+n[5]-378558|0,t=(t<<4|t>>>28)+e|0,r+=(t^e^o)+n[8]-2022574463|0,r=(r<<11|r>>>21)+t|0,o+=(r^t^e)+n[11]+1839030562|0,o=(o<<16|o>>>16)+r|0,e+=(o^r^t)+n[14]-35309556|0,e=(e<<23|e>>>9)+o|0,t+=(e^o^r)+n[1]-1530992060|0,t=(t<<4|t>>>28)+e|0,r+=(t^e^o)+n[4]+1272893353|0,r=(r<<11|r>>>21)+t|0,o+=(r^t^e)+n[7]-155497632|0,o=(o<<16|o>>>16)+r|0,e+=(o^r^t)+n[10]-1094730640|0,e=(e<<23|e>>>9)+o|0,t+=(e^o^r)+n[13]+681279174|0,t=(t<<4|t>>>28)+e|0,r+=(t^e^o)+n[0]-358537222|0,r=(r<<11|r>>>21)+t|0,o+=(r^t^e)+n[3]-722521979|0,o=(o<<16|o>>>16)+r|0,e+=(o^r^t)+n[6]+76029189|0,e=(e<<23|e>>>9)+o|0,t+=(e^o^r)+n[9]-640364487|0,t=(t<<4|t>>>28)+e|0,r+=(t^e^o)+n[12]-421815835|0,r=(r<<11|r>>>21)+t|0,o+=(r^t^e)+n[15]+530742520|0,o=(o<<16|o>>>16)+r|0,e+=(o^r^t)+n[2]-995338651|0,e=(e<<23|e>>>9)+o|0,t+=(o^(e|~r))+n[0]-198630844|0,t=(t<<6|t>>>26)+e|0,r+=(e^(t|~o))+n[7]+1126891415|0,r=(r<<10|r>>>22)+t|0,o+=(t^(r|~e))+n[14]-1416354905|0,o=(o<<15|o>>>17)+r|0,e+=(r^(o|~t))+n[5]-57434055|0,e=(e<<21|e>>>11)+o|0,t+=(o^(e|~r))+n[12]+1700485571|0,t=(t<<6|t>>>26)+e|0,r+=(e^(t|~o))+n[3]-1894986606|0,r=(r<<10|r>>>22)+t|0,o+=(t^(r|~e))+n[10]-1051523|0,o=(o<<15|o>>>17)+r|0,e+=(r^(o|~t))+n[1]-2054922799|0,e=(e<<21|e>>>11)+o|0,t+=(o^(e|~r))+n[8]+1873313359|0,t=(t<<6|t>>>26)+e|0,r+=(e^(t|~o))+n[15]-30611744|0,r=(r<<10|r>>>22)+t|0,o+=(t^(r|~e))+n[6]-1560198380|0,o=(o<<15|o>>>17)+r|0,e+=(r^(o|~t))+n[13]+1309151649|0,e=(e<<21|e>>>11)+o|0,t+=(o^(e|~r))+n[4]-145523070|0,t=(t<<6|t>>>26)+e|0,r+=(e^(t|~o))+n[11]-1120210379|0,r=(r<<10|r>>>22)+t|0,o+=(t^(r|~e))+n[2]+718787259|0,o=(o<<15|o>>>17)+r|0,e+=(r^(o|~t))+n[9]-343485551|0,e=(e<<21|e>>>11)+o|0,s[0]=t+s[0]|0,s[1]=e+s[1]|0,s[2]=o+s[2]|0,s[3]=r+s[3]|0}function A(s){var n=[],t;for(t=0;t<64;t+=4)n[t>>2]=s.charCodeAt(t)+(s.charCodeAt(t+1)<<8)+(s.charCodeAt(t+2)<<16)+(s.charCodeAt(t+3)<<24);return n}function b(s){var n=[],t;for(t=0;t<64;t+=4)n[t>>2]=s[t]+(s[t+1]<<8)+(s[t+2]<<16)+(s[t+3]<<24);return n}function x(s){var n=s.length,t=[1732584193,-271733879,-1732584194,271733878],e,o,r,B,P,j;for(e=64;e<=n;e+=64)f(t,A(s.substring(e-64,e)));for(s=s.substring(e-64),o=s.length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<o;e+=1)r[e>>2]|=s.charCodeAt(e)<<(e%4<<3);if(r[e>>2]|=128<<(e%4<<3),e>55)for(f(t,r),e=0;e<16;e+=1)r[e]=0;return B=n*8,B=B.toString(16).match(/(.*?)(.{0,8})$/),P=parseInt(B[2],16),j=parseInt(B[1],16)||0,r[14]=P,r[15]=j,f(t,r),t}function m(s){var n=s.length,t=[1732584193,-271733879,-1732584194,271733878],e,o,r,B,P,j;for(e=64;e<=n;e+=64)f(t,b(s.subarray(e-64,e)));for(s=e-64<n?s.subarray(e-64):new Uint8Array(0),o=s.length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<o;e+=1)r[e>>2]|=s[e]<<(e%4<<3);if(r[e>>2]|=128<<(e%4<<3),e>55)for(f(t,r),e=0;e<16;e+=1)r[e]=0;return B=n*8,B=B.toString(16).match(/(.*?)(.{0,8})$/),P=parseInt(B[2],16),j=parseInt(B[1],16)||0,r[14]=P,r[15]=j,f(t,r),t}function y(s){var n="",t;for(t=0;t<4;t+=1)n+=u[s>>t*8+4&15]+u[s>>t*8&15];return n}function c(s){var n;for(n=0;n<s.length;n+=1)s[n]=y(s[n]);return s.join("")}c(x("hello")),typeof ArrayBuffer<"u"&&!ArrayBuffer.prototype.slice&&function(){function s(n,t){return n=n|0||0,n<0?Math.max(n+t,0):Math.min(n,t)}ArrayBuffer.prototype.slice=function(n,t){var e=this.byteLength,o=s(n,e),r=e,B,P,j,W;return t!==k&&(r=s(t,e)),o>r?new ArrayBuffer(0):(B=r-o,P=new ArrayBuffer(B),j=new Uint8Array(P),W=new Uint8Array(this,o,B),j.set(W),P)}}();function _(s){return/[\u0080-\uFFFF]/.test(s)&&(s=unescape(encodeURIComponent(s))),s}function C(s,n){var t=s.length,e=new ArrayBuffer(t),o=new Uint8Array(e),r;for(r=0;r<t;r+=1)o[r]=s.charCodeAt(r);return n?o:e}function I(s){return String.fromCharCode.apply(null,new Uint8Array(s))}function v(s,n,t){var e=new Uint8Array(s.byteLength+n.byteLength);return e.set(new Uint8Array(s)),e.set(new Uint8Array(n),s.byteLength),e}function w(s){var n=[],t=s.length,e;for(e=0;e<t-1;e+=2)n.push(parseInt(s.substr(e,2),16));return String.fromCharCode.apply(String,n)}function g(){this.reset()}return g.prototype.append=function(s){return this.appendBinary(_(s)),this},g.prototype.appendBinary=function(s){this._buff+=s,this._length+=s.length;var n=this._buff.length,t;for(t=64;t<=n;t+=64)f(this._hash,A(this._buff.substring(t-64,t)));return this._buff=this._buff.substring(t-64),this},g.prototype.end=function(s){var n=this._buff,t=n.length,e,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r;for(e=0;e<t;e+=1)o[e>>2]|=n.charCodeAt(e)<<(e%4<<3);return this._finish(o,t),r=c(this._hash),s&&(r=w(r)),this.reset(),r},g.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},g.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},g.prototype.setState=function(s){return this._buff=s.buff,this._length=s.length,this._hash=s.hash,this},g.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},g.prototype._finish=function(s,n){var t=n,e,o,r;if(s[t>>2]|=128<<(t%4<<3),t>55)for(f(this._hash,s),t=0;t<16;t+=1)s[t]=0;e=this._length*8,e=e.toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(e[2],16),r=parseInt(e[1],16)||0,s[14]=o,s[15]=r,f(this._hash,s)},g.hash=function(s,n){return g.hashBinary(_(s),n)},g.hashBinary=function(s,n){var t=x(s),e=c(t);return n?w(e):e},g.ArrayBuffer=function(){this.reset()},g.ArrayBuffer.prototype.append=function(s){var n=v(this._buff.buffer,s),t=n.length,e;for(this._length+=s.byteLength,e=64;e<=t;e+=64)f(this._hash,b(n.subarray(e-64,e)));return this._buff=e-64<t?new Uint8Array(n.buffer.slice(e-64)):new Uint8Array(0),this},g.ArrayBuffer.prototype.end=function(s){var n=this._buff,t=n.length,e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],o,r;for(o=0;o<t;o+=1)e[o>>2]|=n[o]<<(o%4<<3);return this._finish(e,t),r=c(this._hash),s&&(r=w(r)),this.reset(),r},g.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},g.ArrayBuffer.prototype.getState=function(){var s=g.prototype.getState.call(this);return s.buff=I(s.buff),s},g.ArrayBuffer.prototype.setState=function(s){return s.buff=C(s.buff,!0),g.prototype.setState.call(this,s)},g.ArrayBuffer.prototype.destroy=g.prototype.destroy,g.ArrayBuffer.prototype._finish=g.prototype._finish,g.ArrayBuffer.hash=function(s,n){var t=m(new Uint8Array(s)),e=c(t);return n?w(e):e},g})})(ue);var He=ue.exports;const Ee=Se(He),ce=async(S,D={})=>{const{successMsg:k="复制成功",errorMsg:u="复制失败，请手动复制",showMsg:f=!0}=D,A=le();try{if(navigator.clipboard&&navigator.clipboard.writeText)return await navigator.clipboard.writeText(S),f&&A.showAlert(k,"success"),!0;const b=document.createElement("textarea");b.value=S,b.style.position="fixed",b.style.opacity="0",document.body.appendChild(b),b.select();const x=document.execCommand("copy");if(document.body.removeChild(b),x)return f&&A.showAlert(k,"success"),!0;throw new Error("execCommand copy failed")}catch(b){return console.error("复制失败:",b),f&&A.showAlert(u,"error"),!1}},ne=async S=>{const D=`${window.location.origin}/#/?code=${S}`;return ce(D,{successMsg:"取件链接已复制到剪贴板",errorMsg:"复制失败，请手动复制取件链接"})},Ne=async S=>ce(S,{successMsg:"取件码已复制到剪贴板",errorMsg:"复制失败，请手动复制取件码"}),qe=S=>S>=1024*1024*1024?Math.round(S/(1024*1024*1024))+"GB":S>=1024*1024?Math.round(S/(1024*1024))+"MB":Math.round(S/1024)+"KB",We={class:"min-h-screen flex items-center justify-center p-4 overflow-hidden transition-colors duration-300"},Ge={class:"p-8"},Qe={class:"flex justify-center space-x-4 mb-6"},Je={key:"file",class:"grid grid-cols-1 gap-8"},Ke={key:0,class:"absolute inset-0 w-full h-full"},Oe={class:"block truncate"},Xe={key:"text",class:"grid grid-cols-1 gap-8"},Ye={key:0,class:"flex flex-col"},Ze={class:"flex flex-col space-y-4"},et=["value"],tt={key:0,class:"flex items-center space-x-2"},rt={class:"relative flex-grow"},ot=["placeholder"],nt={type:"submit",class:"w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-4 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group"},st={class:"relative z-10 flex items-center justify-center text-lg"},at={class:"mt-6 text-center"},it={class:"flex-grow overflow-y-auto p-6"},lt={class:"flex-shrink-0 mr-4"},ut={class:"flex-grow min-w-0 mr-4"},ct={class:"flex-shrink-0 flex space-x-2"},dt=["onClick"],ft=["onClick"],ht=["onClick"],gt={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},pt={class:"space-y-4"},yt={class:"flex items-center"},vt={class:"flex items-center"},xt={class:"flex items-center"},bt={class:"flex items-center"},mt={class:"mt-6 flex justify-between items-center"},wt={class:"flex flex-col items-center w-1/2 pr-2"},_t={class:"text-2xl font-bold text-indigo-600"},Ct={class:"flex flex-col items-center w-1/2 pl-2"},At={class:"bg-white p-2 rounded-lg shadow-md"},Mt=se({__name:"SendFileView",setup(S){const D=JSON.parse(localStorage.getItem("config")||"{}");console.log(D);const k=Ce(),u=Ae("isDarkMode"),f=Be(),A=z("file"),b=z(null),x=z(""),m=z(null),y=z("day"),c=z("1"),_=z(0),C=z(!1),I=z(null),v=le(),w=be(()=>f.shareData),g=z(""),s=z(new Set),n=()=>{var d;(d=m.value)==null||d.click()},t=async d=>{const i=d.target;i.files&&i.files.length>0&&(b.value=i.files[0],g.value=await o(b.value))},e=async d=>{var i;(i=d.dataTransfer)!=null&&i.files&&d.dataTransfer.files.length>0&&(b.value=d.dataTransfer.files[0],g.value=await o(b.value),r())},o=async d=>new Promise(i=>{const p=new Ee.ArrayBuffer,T=new FileReader;let R=0;const H=Math.ceil(d.size/2097152);T.onload=E=>{p.append(E.target.result),R++,R<H?Y():i(p.end())};const Y=()=>{const E=R*2097152,ve=E+2097152>=d.size?d.size:E+2097152;T.readAsArrayBuffer(d.slice(E,ve))};Y()}),r=async()=>{if(!b.value)return;const d=1024*1024,i=Math.ceil(b.value.size/d),{uploadedList:L}=await B(g.value);s.value=new Set(L);for(let p=0;p<i;p++){if(s.value.has(p)){console.log(`切片 ${p} 已上传,跳过`);continue}const T=p*d,R=Math.min(T+d,b.value.size),H=b.value.slice(T,R);await P(H,p,i),_.value=(s.value.size+1)/i*100}await j(g.value,i),v.showAlert("文件上传完成","success")},B=async d=>(console.log(d),new Promise(i=>{setTimeout(()=>{i({uploadedList:[]})},500)})),P=async(d,i,L)=>new Promise(p=>{setTimeout(()=>{console.log(`上传切片 ${i+1}/${L}`),s.value.add(i),p()},500)}),j=async(d,i)=>{console.log(`请求合并文件切片, fileHash: ${d}, totalChunks: ${i}`)},W=(d=y.value)=>{switch(d){case"day":return"输入天数";case"hour":return"输入小时数";case"minute":return"输入分钟数";case"count":return"输入查看次数";case"forever":return"永久";default:return"输入值"}},Q=(d=y.value)=>{switch(d){case"day":return"天";case"hour":return"小时";case"minute":return"分钟";case"count":return"次";case"forever":return"永久";default:return""}},de=async()=>{if(A.value==="file"&&!b.value){v.showAlert("请选择要上传的文件","error");return}if(A.value==="text"&&!x.value.trim()){v.showAlert("请输入要发送的文本","error");return}if(y.value!=="forever"&&!c.value){v.showAlert("请输入过期值","error");return}try{let d;const i=new FormData,L=A.value==="file";L?i.append("file",b.value):i.append("text",x.value),y.value!=="forever"&&i.append("expire_value",c.value),i.append("expire_style",y.value);const p={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:T=>{const R=Math.round(T.loaded*100/T.total);_.value=R}};if(L?d=await re.post("/share/file/",i,p):d=await re.post("/share/text/",i,p),d&&d.code===200){const T=d.detail.code,R=d.detail.name,H={id:Date.now(),filename:R,date:new Date().toISOString().split("T")[0],size:A.value==="text"?`${(x.value.length/1024).toFixed(2)} KB`:`${(b.value.size/(1024*1024)).toFixed(1)} MB`,expiration:y.value==="forever"?"永久":`${c.value}${Q()}后过期`,retrieveCode:T};f.addShareData(H),v.showAlert(`文件发送成功！取件码：${T}`,"success"),b.value=null,x.value="",c.value="",_.value=0,C.value=!0,await ne(T)}else throw new Error("服务器响应异常")}catch(d){console.error("发送失败:",d),d.response.data.detail?v.showAlert(d.response.data.detail,"error"):v.showAlert("发送失败,请稍后重试","error")}finally{_.value=0}},fe=()=>{k.push("/")},X=()=>{C.value=!C.value},he=d=>{I.value=d},ge=d=>{const i=f.shareData.findIndex(L=>L.id===d);i!==-1&&f.deleteShareData(i)},pe=window.location.origin+"/#/",ye=d=>`${pe}?code=${d.retrieveCode}`;return ae(()=>{console.log("SendFileView mounted")}),(d,i)=>{const L=Me("router-link");return U(),F("div",We,[a("div",{class:h(["rounded-3xl shadow-2xl overflow-hidden border w-full max-w-md transition-colors duration-300",[l(u)?"bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl border-gray-700":"bg-white border-gray-200"]])},[a("div",Ge,[a("h2",{class:h(["text-3xl font-extrabold text-center mb-8 cursor-pointer transition-colors duration-300",[l(u)?"text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300":"text-indigo-600"]]),onClick:fe}," FileCodeBox ",2),a("form",{onSubmit:J(de,["prevent"]),class:"space-y-8"},[a("div",Qe,[a("button",{type:"button",onClick:i[0]||(i[0]=p=>A.value="file"),class:h(["px-4 py-2 rounded-lg",A.value==="file"?"bg-indigo-600 text-white":"bg-gray-700 text-gray-300"])}," 发送文件 ",2),a("button",{type:"button",onClick:i[1]||(i[1]=p=>A.value="text"),class:h(["px-4 py-2 rounded-lg",A.value==="text"?"bg-indigo-600 text-white":"bg-gray-700 text-gray-300"])}," 发送文本 ",2)]),M(O,{name:"fade",mode:"out-in"},{default:N(()=>[A.value==="file"?(U(),F("div",Je,[a("div",{class:h(["rounded-xl p-8 flex flex-col items-center justify-center border-2 border-dashed transition-all duration-300 group cursor-pointer relative",[l(u)?"bg-gray-800 bg-opacity-50 border-gray-600 hover:border-indigo-500":"bg-gray-100 border-gray-300 hover:border-indigo-500"]]),onClick:n,onDragover:i[2]||(i[2]=J(()=>{},["prevent"])),onDrop:J(e,["prevent"])},[a("input",{id:"file-upload",type:"file",class:"hidden",onChange:t,ref_key:"fileInput",ref:m},null,544),_.value>0?(U(),F("div",Ke,[M(Ve,{progress:_.value},null,8,["progress"])])):q("",!0),M(l(Le),{class:h(["w-16 h-16 transition-colors duration-300",l(u)?"text-gray-400 group-hover:text-indigo-400":"text-gray-600 group-hover:text-indigo-600"])},null,8,["class"]),a("p",{class:h(["mt-4 text-sm transition-colors duration-300 w-full text-center",l(u)?"text-gray-400 group-hover:text-indigo-400":"text-gray-600 group-hover:text-indigo-600"])},[a("span",Oe,$(b.value?b.value.name:"点击或拖放文件到此处上传"),1)],2),a("p",{class:h(["mt-2 text-xs",l(u)?"text-gray-500":"text-gray-400"])}," 支持各种常见格式，最大"+$(l(qe)(l(D).uploadSize)),3)],34)])):(U(),F("div",Xe,[A.value==="text"?(U(),F("div",Ye,[K(a("textarea",{id:"text-content","onUpdate:modelValue":i[3]||(i[3]=p=>x.value=p),rows:"7",class:h(["flex-grow px-4 py-3 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 resize-none",l(u)?"bg-gray-800 bg-opacity-50 text-white":"bg-white text-gray-900 border border-gray-300"]),placeholder:"在此输入要发送的文本..."},null,2),[[Z,x.value]])])):q("",!0)]))]),_:1}),a("div",Ze,[a("label",{class:h(["text-sm font-medium",l(u)?"text-gray-300":"text-gray-700"])}," 过期方式 ",2),K(a("select",{"onUpdate:modelValue":i[4]||(i[4]=p=>y.value=p),class:h(["px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500",l(u)?"bg-gray-800 bg-opacity-50 text-white":"bg-white text-gray-900 border border-gray-300"])},[(U(!0),F(ee,null,te(l(D).expireStyle,p=>(U(),F("option",{value:p,key:p},$(Q(p)),9,et))),128))],2),[[me,y.value]]),y.value!=="forever"?(U(),F("div",tt,[a("div",rt,[K(a("input",{"onUpdate:modelValue":i[5]||(i[5]=p=>c.value=p),type:"number",placeholder:W(),class:h(["w-full px-4 py-2 pr-16 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500",l(u)?"bg-gray-800 bg-opacity-50 text-white":"bg-white text-gray-900 border border-gray-300"])},null,10,ot),[[Z,c.value]]),a("span",{class:h(["absolute right-3 top-1/2 transform -translate-y-1/2",l(u)?"text-gray-300":"text-gray-700"])},$(Q()),3)])])):q("",!0)]),a("button",nt,[i[9]||(i[9]=a("span",{class:"absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"},null,-1)),a("span",st,[M(l(je),{class:"w-6 h-6 mr-2"}),i[8]||(i[8]=a("span",null,"安全寄送",-1))])])],32),a("div",at,[M(L,{to:"/",class:"text-indigo-400 hover:text-indigo-300 transition duration-300"},{default:N(()=>i[10]||(i[10]=[V(" 需要取件？点击这里 ")])),_:1})])]),a("div",{class:h(["px-8 py-4 bg-opacity-50 flex justify-between items-center",[l(u)?"bg-gray-800":"bg-gray-100"]])},[a("span",{class:h(["text-sm flex items-center",[l(u)?"text-gray-300":"text-gray-800"]])},[M(l(Te),{class:"w-4 h-4 mr-1 text-green-400"}),i[11]||(i[11]=V(" 安全加密 "))],2),a("button",{onClick:X,class:h(["text-sm hover:text-indigo-300 transition duration-300 flex items-center",[l(u)?"text-indigo-400":"text-indigo-600"]])},[i[12]||(i[12]=V(" 发件记录 ")),M(l(Ie),{class:"w-4 h-4 ml-1"})],2)],2)],2),M(O,{name:"drawer"},{default:N(()=>[C.value?(U(),F("div",{key:0,class:h(["fixed inset-y-0 right-0 w-full sm:w-120 bg-opacity-70 backdrop-filter backdrop-blur-xl shadow-2xl z-50 overflow-hidden flex flex-col",[l(u)?"bg-gray-900":"bg-white"]])},[a("div",{class:h(["flex justify-between items-center p-6 border-b",[l(u)?"border-gray-700":"border-gray-200"]])},[a("h3",{class:h(["text-2xl font-bold",[l(u)?"text-white":"text-gray-800"]])}," 发件记录 ",2),a("button",{onClick:X,class:h(["hover:text-white transition duration-300",[l(u)?"text-gray-400":"text-gray-800"]])},[M(l(we),{class:"w-6 h-6"})],2)],2),a("div",it,[M(_e,{name:"list",tag:"div",class:"space-y-4"},{default:N(()=>[(U(!0),F(ee,null,te(w.value,p=>(U(),F("div",{key:p.id,class:h(["bg-opacity-50 rounded-lg p-4 flex items-center shadow-md hover:shadow-lg transition duration-300 transform hover:scale-102",[l(u)?"bg-gray-800 hover:bg-gray-700":"bg-gray-100 hover:bg-white"]])},[a("div",lt,[M(l(oe),{class:h(["w-10 h-10",[l(u)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"])]),a("div",ut,[a("p",{class:h(["font-medium text-lg truncate",[l(u)?"text-white":"text-gray-800"]])},$(p.filename?p.filename:"Text"),3),a("p",{class:h(["text-sm truncate",[l(u)?"text-gray-400":"text-gray-600"]])},$(p.date)+" · "+$(p.size),3)]),a("div",ct,[a("button",{onClick:T=>l(ne)(p.retrieveCode),class:h(["p-2 rounded-full hover:bg-opacity-20 transition duration-300",[l(u)?"hover:bg-blue-400 text-blue-400":"hover:bg-blue-100 text-blue-600"]])},[M(l(De),{class:"w-5 h-5"})],10,dt),a("button",{onClick:T=>he(p),class:h(["p-2 rounded-full hover:bg-opacity-20 transition duration-300",[l(u)?"hover:bg-green-400 text-green-400":"hover:bg-green-100 text-green-600"]])},[M(l(Fe),{class:"w-5 h-5"})],10,ft),a("button",{onClick:T=>ge(p.id),class:h(["p-2 rounded-full hover:bg-opacity-20 transition duration-300",[l(u)?"hover:bg-red-400 text-red-400":"hover:bg-red-100 text-red-600"]])},[M(l($e),{class:"w-5 h-5"})],10,ht)])],2))),128))]),_:1})])],2)):q("",!0)]),_:1}),M(O,{name:"fade"},{default:N(()=>[I.value?(U(),F("div",gt,[a("div",{class:h(["p-8 rounded-2xl max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300 ease-out backdrop-filter backdrop-blur-lg bg-opacity-70",[l(u)?"bg-gray-800":"bg-white"]])},[a("h3",{class:h(["text-2xl font-bold mb-6",[l(u)?"text-white":"text-gray-800"]])}," 文件详情 ",2),a("div",pt,[a("div",yt,[M(l(oe),{class:h(["w-6 h-6 mr-3",[l(u)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"]),a("p",{class:h([l(u)?"text-gray-300":"text-gray-800"])},[i[13]||(i[13]=a("span",{class:"font-medium"},"文件名：",-1)),V($(I.value.filename),1)],2)]),a("div",vt,[M(l(ke),{class:h(["w-6 h-6 mr-3",[l(u)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"]),a("p",{class:h([l(u)?"text-gray-300":"text-gray-800"])},[i[14]||(i[14]=a("span",{class:"font-medium"},"发送日期：",-1)),V($(I.value.date),1)],2)]),a("div",xt,[M(l(ze),{class:h(["w-6 h-6 mr-3",[l(u)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"]),a("p",{class:h([l(u)?"text-gray-300":"text-gray-800"])},[i[15]||(i[15]=a("span",{class:"font-medium"},"文件大小：",-1)),V($(I.value.size),1)],2)]),a("div",bt,[M(l(Pe),{class:h(["w-6 h-6 mr-3",[l(u)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"]),a("p",{class:h([l(u)?"text-gray-300":"text-gray-800"])},[i[16]||(i[16]=a("span",{class:"font-medium"},"过期时间：",-1)),V($(I.value.expiration),1)],2)])]),a("div",mt,[a("div",wt,[a("h4",{class:h(["text-lg font-semibold mb-3",[l(u)?"text-white":"text-gray-800"]])}," 取件码 ",2),a("div",{class:"bg-gray-100 p-3 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition-colors duration-300 w-full text-center",onClick:i[6]||(i[6]=p=>l(Ne)(I.value.retrieveCode))},[a("p",_t,$(I.value.retrieveCode),1)]),a("p",{class:h(["mt-2 text-sm",[l(u)?"text-gray-400":"text-gray-600"]])}," 点击复制取件码 ",2)]),a("div",Ct,[a("h4",{class:h(["text-lg font-semibold mb-3",[l(u)?"text-white":"text-gray-800"]])}," 二维码 ",2),a("div",At,[M(Ue,{value:ye(I.value),size:128,level:"M"},null,8,["value"])]),a("p",{class:h(["mt-2 text-sm",[l(u)?"text-gray-400":"text-gray-600"]])}," 扫描二维码快速取件 ",2)])]),a("button",{onClick:i[7]||(i[7]=p=>I.value=null),class:"mt-8 w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105"}," 关闭 ")],2)])):q("",!0)]),_:1})])}}}),kt=ie(Mt,[["__scopeId","data-v-f88861ef"]]);export{kt as default};
