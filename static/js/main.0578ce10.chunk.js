(this["webpackJsonpspecial-funicular"]=this["webpackJsonpspecial-funicular"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(3),c=n.n(r),l=(n(9),n(1)),o=(n(10),["items/banana.png","items/blue-shell.png","items/lightning.png","items/mushroom.png","items/red-shell.png","items/star.png"].map((function(e){return"/special-funicular/"+e}))),u=function(){var e=Object(a.useState)("items/item-box.png"),t=Object(l.a)(e,2),n=t[0],r=t[1],c=i.a.useRef();return Object(a.useEffect)((function(){return c.current=requestAnimationFrame((function(){!function e(){r(o[Math.floor(Math.random()*o.length)]),c.current=requestAnimationFrame(e)}()})),function(){c.current&&cancelAnimationFrame(c.current)}})),i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:n,width:"400",height:"400",alt:"item"}))},s=["items/banana.png","items/lightning.png"].map((function(e){return"/special-funicular/"+e})),m=["items/blue-shell.png","items/mushroom.png","items/red-shell.png"].map((function(e){return"/special-funicular/"+e})),f=["items/blue-shell.png","items/lightning.png","items/star.png"].map((function(e){return"/special-funicular/"+e}));var h=function(){var e=Object(a.useState)("/special-funicular/items/item-box.png"),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),o=Object(l.a)(c,2),h=o[0],p=o[1],g=i.a.createRef(),d=function(e){var t,n;null===(t=g.current)||void 0===t||t.load(),null===(n=g.current)||void 0===n||n.play().then((function(){p(!0),setTimeout((function(){r(e),p(!1)}),3300)}))};return i.a.createElement("div",{className:"App"},i.a.createElement("audio",{src:"/special-funicular/roulette.opus",autoPlay:!1,ref:g}),i.a.createElement("div",null,h?i.a.createElement(u,null):i.a.createElement("img",{src:n,width:"400",height:"400",alt:"item"})),i.a.createElement("div",{className:"mt-4"},i.a.createElement("button",{className:"btn btn-dark mx-2",onClick:function(){d(s[Math.floor(Math.random()*s.length)])},disabled:h},"Leader"),i.a.createElement("button",{className:"btn btn-dark mx-2",onClick:function(){d(m[Math.floor(Math.random()*m.length)])},disabled:h},"Mid Pack"),i.a.createElement("button",{className:"btn btn-dark mx-2",onClick:function(){return d(f[Math.floor(Math.random()*f.length)])},disabled:h},"Bottom Two")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.0578ce10.chunk.js.map