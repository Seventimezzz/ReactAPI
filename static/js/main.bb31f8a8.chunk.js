(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(13),r=c.n(a),s=c(6),i=c(2),l=c(9),o=c(3),j=c(5),u=c.n(j),b=c(7),m=function(){var e=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(o.a)(r,2),i=s[0],l=s[1];return{loading:c,request:Object(n.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){var c,n,r,s,i,o=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>1&&void 0!==o[1]?o[1]:"GET",n=o.length>2&&void 0!==o[2]?o[2]:null,r=o.length>3&&void 0!==o[3]?o[3]:{"Content-Type":"aplication/json"},a(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:r});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return i=e.sent,a(!1),e.abrupt("return",i);case 17:throw e.prev=17,e.t0=e.catch(4),a(!1),l(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:i,clearError:Object(n.useCallback)((function(){return l(null)}),[])}}(),t=e.loading,c=e.request,a=e.error,r=e.clearError,s="https://gateway.marvel.com:443/v1/public/",i="apikey=e69fc5b0ded42eb55340c401ac49d086",l=function(){var e=Object(b.a)(u.a.mark((function e(){var t,n,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:210,e.next=3,c("".concat(s,"characters?limit=9&offset=").concat(t,"&").concat(i));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(h));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(b.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(s,"characters/").concat(t,"?").concat(i));case 2:return n=e.sent,e.abrupt("return",h(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(b.a)(u.a.mark((function e(){var t,n,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:0,e.next=3,c("".concat(s,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(i));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(b.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(s,"comics/").concat(t,"?").concat(i));case 2:return n=e.sent,e.abrupt("return",O(n.data.request[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},O=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices.price?"".concat(e.prices.price,"$"):"not available"}};return{loading:t,error:a,getAllCharacters:l,getCharacter:j,clearError:r,getAllComics:m,getComics:d}},d=c(0),h=function(){return Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(d.jsx)("g",{transform:"translate(80,50)",children:Object(d.jsx)("g",{transform:"rotate(0)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(d.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(d.jsx)("g",{transform:"rotate(45)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(d.jsx)("g",{transform:"translate(50,80)",children:Object(d.jsx)("g",{transform:"rotate(90)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(d.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(d.jsx)("g",{transform:"rotate(135)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(d.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(d.jsx)("g",{transform:"rotate(180)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(d.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(d.jsx)("g",{transform:"rotate(225)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(d.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(d.jsx)("g",{transform:"rotate(270)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(d.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(d.jsx)("g",{transform:"rotate(315)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},O=c.p+"static/media/error.42292aa1.gif",f=function(){return Object(d.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:O,alt:"Error"})},x=(c(27),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(o.a)(r,2),i=s[0],j=s[1],u=Object(n.useState)(0),b=Object(o.a)(u,2),O=b[0],x=b[1],p=Object(n.useState)(!1),v=Object(o.a)(p,2),g=v[0],_=v[1],y=m(),N=y.loading,k=y.error,C=y.getAllComics;Object(n.useEffect)((function(){w(O,!0)}),[]);var w=function(e,t){j(!t),C(e).then(T)},T=function(e){var t=!1;e.length<8&&(t=!0),a([].concat(Object(l.a)(c),Object(l.a)(e))),j(!1),x(O+8),_(t)};var S=function(e){var t=e.map((function(e,t){return Object(d.jsx)("li",{className:"comics__item",children:Object(d.jsxs)("a",{href:"#",children:[Object(d.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),Object(d.jsx)("div",{className:"comics__item-name",children:e.title}),Object(d.jsx)("div",{className:"comics__item-price",children:e.price})]})},t)}));return Object(d.jsx)("ul",{className:"comics__grid",children:t})}(c),E=k?Object(d.jsx)(f,{}):null,A=N&&!i?Object(d.jsx)(h,{}):null;return Object(d.jsxs)("div",{className:"comics__list",children:[E,A,S,Object(d.jsx)("button",{disabled:i,style:{display:g?"none":"block"},className:"button button__main button__long",onClick:function(){return w(O)},children:Object(d.jsx)("div",{className:"inner",children:"load more"})})]})}),p=(c(28),c.p+"static/media/Avengers.4065c8f9.png"),v=c.p+"static/media/Avengers_logo.9eaf2193.png",g=function(){return Object(d.jsxs)("div",{className:"app__banner",children:[Object(d.jsx)("img",{src:p,alt:"Avengers"}),Object(d.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(d.jsx)("br",{}),"Stay tuned!"]}),Object(d.jsx)("img",{src:v,alt:"Avengers logo"})]})},_=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{}),Object(d.jsx)(x,{})]})},y=(c(29),c.p+"static/media/mjolnir.61f31e18.png"),N=function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i={objectFit:"contain"}),Object(d.jsxs)("div",{className:"randomchar__block",children:[Object(d.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img",style:i}),Object(d.jsxs)("div",{className:"randomchar__info",children:[Object(d.jsx)("p",{className:"randomchar__name",children:c}),Object(d.jsx)("p",{className:"randomchar__descr",children:n}),Object(d.jsxs)("div",{className:"randomchar__btns",children:[Object(d.jsx)("a",{href:r,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:s,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},k=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1],r=m(),s=r.loading,i=r.error,l=r.getCharacter,j=r.clearError;Object(n.useEffect)((function(){return b(),function(){}}),[]);var u=function(e){a(e)},b=function(){j();var e=Math.floor(400*Math.random())+1011e3;l(e).then(u)},O=i?Object(d.jsx)(f,{}):null,x=s?Object(d.jsx)(h,{}):null,p=s||i||!c?null:Object(d.jsx)(N,{char:c});return Object(d.jsxs)("div",{className:"randomchar",children:[O,x,p,Object(d.jsxs)("div",{className:"randomchar__static",children:[Object(d.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(d.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(d.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(d.jsx)("button",{onClick:b,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"try it"})}),Object(d.jsx)("img",{src:y,alt:"mjolnir",className:"randomchar__decoration"})]})]})},C=(c(30),function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(!1),i=Object(o.a)(s,2),j=i[0],u=i[1],b=Object(n.useState)(210),O=Object(o.a)(b,2),x=O[0],p=O[1],v=Object(n.useState)(!1),g=Object(o.a)(v,2),_=g[0],y=g[1],N=m(),k=N.loading,C=N.error,w=N.getAllCharacters;Object(n.useEffect)((function(){T(x,!0)}),[]);var T=function(e,t){u(!t),w(e).then(S)},S=function(e){var t=!1;e.length<9&&(t=!0),r((function(t){return[].concat(Object(l.a)(t),Object(l.a)(e))})),u((function(e){return!1})),p((function(e){return e+9})),y((function(e){return t}))},E=Object(n.useRef)([]),A=function(e){E.current.forEach((function(e){return e.classList.remove("char__item_selected")})),E.current[e].classList.add("char__item_selected"),E.current[e].focus()};var F=function(t){var c=t.map((function(t,c){var n={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(n={objectFit:"unset"}),Object(d.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return E.current[c]=e},onClick:function(){e.onCharSelected(t.id),A(c)},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(e.onCharSelected(t.id),A(c))},children:[Object(d.jsx)("img",{src:t.thumbnail,alt:t.name,style:n}),Object(d.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(d.jsx)("ul",{className:"char__grid",children:c})}(a),I=C?Object(d.jsx)(f,{}):null,M=k&&!j?Object(d.jsx)(h,{}):null;return Object(d.jsxs)("div",{className:"char__list",children:[I,M,F,Object(d.jsx)("button",{className:"button button__main button__long",disabled:j,style:{display:_?"none":"block"},onClick:function(){return T(x)},children:Object(d.jsx)("div",{className:"inner",children:"load more"})})]})}),w=c(11),T=(c(31),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(d.jsxs)("div",{className:"skeleton",children:[Object(d.jsxs)("div",{className:"pulse skeleton__header",children:[Object(d.jsx)("div",{className:"pulse skeleton__circle"}),Object(d.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"})]})]})}),S=(c(32),function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(l={objectFit:"contain"}),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"char__basics",children:[Object(d.jsx)("img",{src:a,style:l,alt:c}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"char__info-name",children:c}),Object(d.jsxs)("div",{className:"char__btns",children:[Object(d.jsx)("a",{href:r,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:s,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(d.jsx)("div",{className:"char__descr",children:n}),Object(d.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(d.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"Not found",i.map((function(e,t){if(!(t>9))return Object(d.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),E=function(e){var t=Object(w.useState)(null),c=Object(o.a)(t,2),n=c[0],a=c[1],r=m(),s=r.loading,i=r.error,l=r.getCharacter,j=r.clearError;Object(w.useEffect)((function(){u()}),[e.charId]);var u=function(){var t=e.charId;t&&(j(),l(t).then(b))},b=function(e){a(e)},O=n||s||i?null:Object(d.jsx)(T,{}),x=i?Object(d.jsx)(f,{}):null,p=s?Object(d.jsx)(h,{}):null,v=s||i||!n?null:Object(d.jsx)(S,{char:n});return Object(d.jsxs)("div",{className:"char__info",children:[O,x,p,v]})},A=c(14),F=c(15),I=c(17),M=c(16),R=function(e){Object(I.a)(c,e);var t=Object(M.a)(c);function c(){var e;Object(A.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={error:!1},e}return Object(F.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(d.jsx)(f,{}):this.props.children}}]),c}(w.Component),q=c.p+"static/media/vision.067d4ae1.png",B=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(R,{children:Object(d.jsx)(k,{})}),Object(d.jsxs)("div",{className:"char__content",children:[Object(d.jsx)(R,{children:Object(d.jsx)(C,{onCharSelected:function(e){a(e)}})}),Object(d.jsx)(R,{children:Object(d.jsx)(E,{charId:c})})]}),Object(d.jsx)("img",{className:"bg-decoration",src:q,alt:"vision"})]})},P=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{}),Object(d.jsx)("p",{style:{"text-Align":"center",fontWeight:"bold",fontSize:"34px"},children:"\u0421\u0442\u0440\u0430\u043d\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"}),Object(d.jsx)(s.b,{style:{marginTop:"30px",textAlign:"center"},to:"/",children:"\u0412\u0435\u043e\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]})},W=(c(33),function(){return Object(d.jsxs)("header",{className:"app__header",children:[Object(d.jsx)("h1",{className:"app__title",children:Object(d.jsxs)(s.b,{to:"/",children:[Object(d.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(d.jsx)("nav",{className:"app__menu",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(s.c,{end:!0,activeStyle:{color:"#9f0013"},style:function(e){return{color:e.isActive?"#9f0013":null}},to:"/",children:"Characters"})}),"/",Object(d.jsx)("li",{children:Object(d.jsx)(s.c,{end:!0,activeStyle:{color:"#9f0013"},style:function(e){return{color:e.isActive?"#9f0013":null}},to:"/comics",children:"Comics"})})]})})]})}),D=function(){return Object(d.jsx)(s.a,{children:Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(W,{}),Object(d.jsx)("main",{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",element:Object(d.jsx)(B,{})}),"ComicsPage",Object(d.jsx)(i.a,{path:"/comics",element:Object(d.jsx)(_,{})}),Object(d.jsx)(i.a,{path:"*",element:Object(d.jsx)(P,{})})]})})]})})};c(34);r.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(D,{}))}},[[35,1,2]]]);
//# sourceMappingURL=main.bb31f8a8.chunk.js.map