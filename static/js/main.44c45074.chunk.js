(this["webpackJsonpreact-meditation-gong"]=this["webpackJsonpreact-meditation-gong"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(0),a=n.n(i),r=n(5),o=n.n(r),s=(n(12),n(2)),u=n(6),b=n(3),l=(n(13),n.p+"static/media/bells.5e9dbdeb.wav"),j=function(){var t,e,n=Object(u.a)(l),a=Object(s.a)(n,1)[0],r=Object(i.useState)(!1),o=Object(s.a)(r,2),j=o[0],d=o[1],m=Object(i.useState)(300),O=Object(s.a)(m,2),f=O[0],v=O[1],h=Object(i.useState)(!1),x=Object(s.a)(h,2),p=x[0],g=x[1],N=function(){j||(a(),d(!0))};return Object(i.useEffect)((function(){var t=null;return f<=0&&(g(!1),N()),p?t=setInterval((function(){v((function(t){return t-1}))}),1e3):p||0===f||clearInterval(t),function(){return clearInterval(t)}}),[p,f,N]),Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)("div",{className:"time",children:Object(c.jsxs)("div",{className:"timer-circle ".concat(p?"timer-circle-grow":""),children:[Math.floor(f/60),":",(t=f%60,e=2,String(t).padStart(e,"0"))]})}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("button",{className:"circle-button button-primary-".concat(p?"active":"inactive"),onClick:function(){g(!p),d(!1)},children:p?Object(c.jsx)(b.b,{}):Object(c.jsx)(b.c,{})}),Object(c.jsx)("button",{className:"circle-button button-primary-inactive",onClick:function(){v(300),g(!1),d(!1)},children:Object(c.jsx)(b.d,{})}),Object(c.jsx)("button",{className:"circle-button button-primary-inactive",onClick:function(){return a()},children:Object(c.jsx)(b.a,{})}),Object(c.jsx)("button",{className:"circle-button button-primary-inactive",onClick:function(){return v((function(t){return Math.max(0,t+300)}))},children:"+5min"}),Object(c.jsx)("button",{className:"circle-button button-primary-inactive",onClick:function(){return v((function(t){return Math.max(0,t-60)}))},children:"-1min"}),Object(c.jsx)("div",{})]})]})},d=function(t){t&&t instanceof Function&&n.e(4).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),a(t),r(t)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),d()}},[[14,1,2]]]);
//# sourceMappingURL=main.44c45074.chunk.js.map