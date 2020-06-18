(this["webpackJsonpyesorno-app"]=this["webpackJsonpyesorno-app"]||[]).push([[0],{14:function(e,n,t){e.exports=t(22)},22:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(9),u=t.n(c),o=t(5),i=t.n(o),l=t(10),s=t(3),m=t(1),f=t(2);function b(){var e=Object(m.a)([""]);return b=function(){return e},e}function d(){var e=Object(m.a)([""]);return d=function(){return e},e}function h(){var e=Object(m.a)(["\n  margin-top: 1rem;\n  width: 3rem;\n  height: 3rem;\n"]);return h=function(){return e},e}function v(){var e=Object(m.a)([""]);return v=function(){return e},e}var p=f.b.div(v()),g=f.b.img(h()),j=f.b.h3(d()),E=f.b.img(b());function O(e){var n=e.questionInput,t=Object(r.useState)(!1),c=Object(s.a)(t,2),u=c[0],o=c[1],m=Object(r.useState)([]),f=Object(s.a)(m,2),b=f[0],d=f[1],h=function(){var e=Object(l.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://yesno.wtf/api");case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,d(t),o(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){h()}),[]),a.a.createElement(a.a.Fragment,null,u?a.a.createElement(p,null,a.a.createElement(j,null,"Question: ",n),a.a.createElement(j,null,"Answer: ",b.answer," "),a.a.createElement(E,{src:b.image,alt:"$'answer img'"})):a.a.createElement(p,null,a.a.createElement(g,{src:"https://media.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif"})))}var w=O;O.defaultProps={questionInput:""};var y=w;function x(){var e=Object(m.a)(["\n  background-color: rgba(0, 0, 0, 0.75);\n  color: #fff;\n  padding: 1.1rem 2rem;\n  margin-left: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.75);\n  border-radius: 20px;\n  font-size: 1.4rem;\n  cursor: pointer;\n  transition: background-color 250ms;\n  max-width: 20vw;\n  text-align: center;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.85);\n  }\n"]);return x=function(){return e},e}function k(){var e=Object(m.a)(["\n  font-size: 1.6rem;\n  padding: 0.5rem 2rem;\n  line-height: 2.8rem;\n  border-radius: 20px;\n  border: 1px solid #ddd;\n  max-width: 80vw;\n  outline: none;\n"]);return k=function(){return e},e}function S(){var e=Object(m.a)([""]);return S=function(){return e},e}function q(){var e=Object(m.a)(["\n  max-width: 100vw;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return q=function(){return e},e}var I=f.b.div(q()),F=f.b.form(S()),A=f.b.input(k()),B=f.b.button(x());var z=function(){var e=Object(r.useState)(""),n=Object(s.a)(e,2),t=n[0],c=n[1],u=Object(r.useState)(""),o=Object(s.a)(u,2),i=o[0],l=o[1],m=Object(r.useState)(!1),f=Object(s.a)(m,2),b=f[0],d=f[1],h=Object(r.useState)(!0),v=Object(s.a)(h,2),p=v[0],g=v[1],j=b?a.a.createElement("h4",null,"This section cannot be blank..."):p?"":a.a.createElement("h4",null,"It seems you did not ask a question with the correct way. ",a.a.createElement("br",null),"Please add a question mark at the end of the sentence and try it again(?)");return a.a.createElement(a.a.Fragment,null,a.a.createElement(I,null,j,a.a.createElement(F,{onSubmit:function(e){e.preventDefault();var n=0!==t.length?d(!1):d(!0),r=t.trimEnd();return n||"?"===r.charAt(r.length-1)?(g(!0),l(t)):g(!1)}},a.a.createElement(A,{className:"input",type:"text",name:"query",placeholder:"Ask Me",value:t,onChange:function(e){c(e.target.value),d(!1),g(!0),l("")}}),a.a.createElement(B,{type:"submit"},"Search"))),a.a.createElement(I,null,""!==i?a.a.createElement(y,{questionInput:i}):""))};function C(){var e=Object(m.a)([""]);return C=function(){return e},e}function D(){var e=Object(m.a)([""]);return D=function(){return e},e}function J(){var e=Object(m.a)(["\n  font-family: sans-serif;\n  text-align: center;\n"]);return J=function(){return e},e}function N(){var e=Object(m.a)(["\n  min-height: 100vh;\n"]);return N=function(){return e},e}function P(){var e=Object(m.a)(["\n  body {\n    background: #fafafa;\n  }\n"]);return P=function(){return e},e}var T=Object(f.a)(P()),W=f.b.div(N()),$=f.b.div(J()),G=f.b.h1(D()),H=f.b.h2(C());var L=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(W,null,a.a.createElement($,null,a.a.createElement(G,null,"Yes or No Game"),a.a.createElement(H,null,"Type your question below"),a.a.createElement(z,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(a.a.Fragment,null,a.a.createElement(T,null),a.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.ec376cff.chunk.js.map