(this["webpackJsonpspecial-funicular"]=this["webpackJsonpspecial-funicular"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),o=n.n(i),l=(n(9),n(1)),c=(n(10),["items/banana.png","items/blue-shell.png","items/lightning.png","items/mushroom.png","items/red-shell.png","items/star.png"]),s=function(){var e=Object(a.useState)("items/item-box.png"),t=Object(l.a)(e,2),n=t[0],i=t[1],o=r.a.useRef();return Object(a.useEffect)((function(){return o.current=requestAnimationFrame((function(){!function e(){i(c[Math.floor(Math.random()*c.length)]),o.current=requestAnimationFrame(e)}()})),function(){o.current&&cancelAnimationFrame(o.current)}})),r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:n,width:"400",height:"400",alt:"item"}))},m=["items/banana.png","items/lightning.png"],u=["items/blue-shell.png","items/mushroom.png","items/red-shell.png"],h=["items/blue-shell.png","items/lightning.png","items/star.png"];var g=function(){var e=Object(a.useState)("items/item-box.png"),t=Object(l.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(!1),c=Object(l.a)(o,2),g=c[0],d=c[1],f=r.a.createRef(),b=function(e){var t,n;null===(t=f.current)||void 0===t||t.load(),null===(n=f.current)||void 0===n||n.play().then((function(){d(!0),setTimeout((function(){i(e),d(!1)}),3300)}))};return r.a.createElement("div",{className:"App"},r.a.createElement("audio",{src:"roulette.opus",autoPlay:!1,ref:f}),r.a.createElement("div",null,g?r.a.createElement(s,null):r.a.createElement("img",{src:n,width:"400",height:"400",alt:"item"})),r.a.createElement("div",{className:"mt-4"},r.a.createElement("button",{className:"btn btn-dark mx-2",onClick:function(){b(m[Math.floor(Math.random()*m.length)])},disabled:g},"Leader"),r.a.createElement("button",{className:"btn btn-dark mx-2",onClick:function(){b(u[Math.floor(Math.random()*u.length)])},disabled:g},"Mid Pack"),r.a.createElement("button",{className:"btn btn-dark mx-2",onClick:function(){return b(h[Math.floor(Math.random()*h.length)])},disabled:g},"Bottom Two")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.b46b5531.chunk.js.map