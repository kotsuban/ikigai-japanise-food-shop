(this["webpackJsonpikigai-japanise-food"]=this["webpackJsonpikigai-japanise-food"]||[]).push([[0],{48:function(e,t,s){},54:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){"use strict";s.r(t);var c,a,i=s(0),r=s.n(i),n=s(17),l=s.n(n),o=s(10),d=s(3),j=(s(48),s(49),s(22)),b=s(23),h=s(1);const m=b.b.button(c||(c=Object(j.a)(["\n  background-color: transparent;\n  border: ","px solid\n    "," !important;\n  border-radius: 30px;\n  cursor: "," !important;\n  transition: 0.3s ease-in-out;\n  height: ",";\n  &:hover {\n    background-color: ",";\n  }\n\n  ","\n"])),(e=>e.borderWidth||1),(e=>e.color||"#FF4344"),(e=>e.defaultCursor?"auto":"pointer"),(e=>e.height||"auto"),(e=>e.hoverColor||"#FF4344"),(e=>e.primary&&Object(b.a)(a||(a=Object(j.a)(["\n      background-color: ",";\n    "])),e.color||"#FF4344")));var u,p=e=>Object(h.jsx)(m,{color:e.color,hoverColor:e.hoverColor,primary:e.primary,height:e.height,borderWidth:e.borderWidth,onClick:e.onClick,defaultCursor:e.defaultCursor,children:e.children}),O=(s(54),s.p+"static/media/top-icon.5c837732.svg");const x=["title","titleId"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var c in s)({}).hasOwnProperty.call(s,c)&&(e[c]=s[c])}return e},v.apply(null,arguments)}function g(e,t){let{title:s,titleId:c}=e,a=function(e,t){if(null==e)return{};var s,c,a=function(e,t){if(null==e)return{};var s={};for(var c in e)if({}.hasOwnProperty.call(e,c)){if(t.includes(c))continue;s[c]=e[c]}return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)s=i[c],t.includes(s)||{}.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}(e,x);return i.createElement("svg",v({width:12,height:12,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},a),s?i.createElement("title",{id:c},s):null,u||(u=i.createElement("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"#FF4344"})))}const f=i.forwardRef(g);s.p;var k=s.p+"static/media/plus.989288ee.svg",N=s.p+"static/media/minus.10f2e6b9.svg",y=s(11),C=s(14),F=s(41),w=s.n(F);const _=Object(C.b)("dishes/fetchDishes",(async()=>(await w.a.get("/db.json")).data.dishes)),P=e=>e.reduce(((e,t)=>t.price+e),0),I=(e,t)=>Object.values(e).reduce(((e,s)=>{const c=((e,t)=>{const[s,...c]=t.split(".");return c.reduce(((e,t)=>e[t]),e[s])})(s,t);return e+c}),0),E=Object(C.c)({name:"dishes",initialState:{entities:[],basket:{items:{},totalCount:0,totalPrice:0},status:"idle",error:null},reducers:{addToBasket(e,t){const{dishObj:s}=t.payload,c=e.basket.items[s.id]?[...e.basket.items[s.id].items,s]:[s],a=Object(y.a)(Object(y.a)({},e.basket.items),{},{[s.id]:{items:c,totalPrice:P(c)}});e.basket.items=a,e.basket.totalCount++,e.basket.totalPrice=e.basket.totalPrice+s.price},clearBasket(e){e.basket.items={},e.basket.totalCount=0,e.basket.totalPrice=0},deleteBasketItem(e,t){const{dishId:s}=t.payload,c=Object(y.a)({},e.basket.items),a=c[s].totalPrice,i=c[s].items.length;delete c[s],e.basket.items=c,e.basket.totalCount=e.basket.totalCount-i,e.basket.totalPrice=e.basket.totalPrice-a},plusCardItem(e,t){const{dishId:s}=t.payload,c=[...e.basket.items[s].items,e.basket.items[s].items[0]],a=Object(y.a)(Object(y.a)({},e.basket.items),{},{[s]:{items:c,totalPrice:P(c)}}),i=I(a,"items.length"),r=I(a,"totalPrice");e.basket.items=a,e.basket.totalCount=i,e.basket.totalPrice=r},minusCardItem(e,t){const{dishId:s}=t.payload,c=e.basket.items[s].items,a=c.length>1?e.basket.items[s].items.slice(1):c,i=Object(y.a)(Object(y.a)({},e.basket.items),{},{[s]:{items:a,totalPrice:P(a)}}),r=I(i,"items.length"),n=I(i,"totalPrice");e.basket.items=i,e.basket.totalCount=r,e.basket.totalPrice=n}},extraReducers:e=>{e.addCase(_.pending,((e,t)=>{e.status="loading"})),e.addCase(_.fulfilled,((e,t)=>{e.entities=e.entities.concat(t.payload),e.status="succeeded"})),e.addCase(_.rejected,((e,t)=>{e.error=t.payload,e.status="failed"}))}}),{addToBasket:B,clearBasket:L,deleteBasketItem:S,minusCardItem:D,plusCardItem:W}=E.actions;var H=E.reducer,R=s(16);const T=()=>Object(R.b)(),M=R.c;var V=e=>{let{dish:t,id:s,popular:c,isNew:a,picture:i,title:n,description:l,price:o}=e;const d=T(),{items:j}=M((e=>e.dishes.basket));return Object(h.jsx)(r.a.Fragment,{children:Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsxs)("div",{className:"card-top",children:[a&&Object(h.jsx)("div",{className:"card-new-item",children:Object(h.jsx)(p,{color:"#FF4344",hoverColor:"#FF4344",primary:!0,height:"33px",defaultCursor:!0,children:Object(h.jsx)("span",{children:"New"})})}),c&&Object(h.jsx)("div",{className:"card-best-item",children:Object(h.jsx)("img",{src:O,alt:""})})]}),Object(h.jsxs)("div",{className:"card-info",children:[Object(h.jsx)("div",{className:"card-image",children:Object(h.jsx)("img",{src:i,alt:""})}),Object(h.jsx)("div",{className:"card-name",children:n}),Object(h.jsx)("div",{className:"card-description",children:l})]}),Object(h.jsxs)("div",{className:"card-bottom",children:[Object(h.jsxs)("div",{className:"card-price",children:[o," \u20b4"]}),j[s]&&j[s].items.length>=1?Object(h.jsxs)("div",{className:"basket-item__amount card-button",children:[Object(h.jsx)(p,{color:"#FF4344",hoverColor:"#FF434424",primary:!1,height:"32px",borderWidth:2,onClick:()=>d(W({dishId:s})),children:Object(h.jsx)("img",{src:k,alt:""})}),Object(h.jsx)("span",{children:j[s].items.length}),Object(h.jsx)(p,{color:"#FF4344",hoverColor:"#FF434424",primary:!1,height:"32px",borderWidth:2,onClick:()=>d(D({dishId:s})),children:Object(h.jsx)("img",{src:N,alt:""})})]}):Object(h.jsx)("div",{className:"card-button",children:Object(h.jsx)(p,{color:"#FF4344",hoverColor:"#FF4344",primary:!1,height:"40px",onClick:()=>d(B({dishObj:t})),children:Object(h.jsxs)("div",{className:"card-button__inner",children:[Object(h.jsx)(f,{className:"mr-2 add-icon"}),Object(h.jsx)("p",{children:"\u0414\u043e\u0434\u0430\u0442\u0438"})]})})})]})]},s)})},z=(s(74),s(89));var Z=()=>{const e=M((e=>e.dishes.entities)),t=M((e=>e.dishes.status)),s=M((e=>e.sort.category)),c=M((e=>e.sort.sortBy.type)),a=M((e=>e.dishes.error));let i,n;return"loading"===t?i=Object(h.jsx)(z.a,{fluid:!0,className:"cards-container cards-container-loading",children:i=Array(12).fill(0).map(((e,t)=>Object(h.jsx)(ue,{},t)))}):"succeeded"===t?(i=e.map(((e,t)=>Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)("div",{className:"selected-menu-item",children:e.dishName}),Object(h.jsx)(z.a,{fluid:!0,className:"cards-container",children:e.dishList.slice().sort(((e,t)=>t[c]-e[c])).map(((e,t)=>Object(h.jsx)(V,{dish:e,id:e.id,popular:e.popular,isNew:e.new,picture:e.picture,title:e.title,description:e.description,price:e.price},"".concat(e,"_").concat(t))))})]},"".concat(e,"_").concat(t)))),n=i.filter((e=>e.props.children[0].props.children.toLowerCase().includes(s.toLowerCase())))):"failed"===t&&(i=a),Object(h.jsx)(r.a.Fragment,{children:i&&"\u0412\u0441\u0435"===s?i:n})};s(75);const J=Object(C.c)({name:"sort",initialState:{category:"\u0412\u0441\u0435",sortBy:{name:"\u0446\u0456\u043d\u0456",type:"price"}},reducers:{changeCategory(e,t){e.category=t.payload},changeSort(e,t){e.sortBy.name=t.payload.name,e.sortBy.type=t.payload.type}}}),{changeCategory:A,changeSort:G}=J.actions;var Y=J.reducer,q=s.p+"static/media/arrow.be57f998.svg";var K=()=>{const[e,t]=Object(i.useState)(!1),s=M((e=>e.dishes.entities)),c=M((e=>e.sort.sortBy.name)),a=r.a.useRef(null),n=T(),l=e=>{(e.path||e.composedPath&&e.composedPath()).includes(a.current)||t(!1)};return r.a.useEffect((()=>{document.body.addEventListener("click",l)}),[]),Object(h.jsx)(d.a,{path:"/",exact:!0,children:Object(h.jsxs)("div",{className:"menu-container",children:[Object(h.jsxs)("div",{className:"menu-buttons",id:"menu-scrollbar",children:[Object(h.jsx)("div",{className:"menu-button",children:Object(h.jsx)(p,{color:"#15171F",hoverColor:"#F9F9F9",primary:!0,height:"48px",onClick:()=>n(A("\u0412\u0441\u0435")),children:Object(h.jsx)("p",{className:"menu-button-text",children:"\u0412\u0441\u0435"})})}),s&&s.map(((e,t)=>Object(h.jsx)("div",{className:"menu-button",children:Object(h.jsx)(p,{color:"#15171F",hoverColor:"#F9F9F9",primary:!0,height:"48px",onClick:()=>n(A(e.dishName)),children:Object(h.jsx)("p",{className:"menu-button-text",children:e.dishName})})},"".concat(e,"_").concat(t))))]}),Object(h.jsxs)("div",{className:"menu-sort",ref:a,children:[Object(h.jsxs)("div",{className:"menu-sort-button",onClick:()=>{t(!e)},children:[Object(h.jsx)("img",{className:"mr-1 ".concat(e?"menu-sort-arrow--active":"menu-sort-arrow"),src:q,alt:""}),Object(h.jsx)("p",{className:"mr-2",children:"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u043f\u043e:"}),Object(h.jsx)("span",{children:c})]}),e&&Object(h.jsx)("div",{className:"menu-sort-panel",children:[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442i",type:"popular"},{name:"\u0446\u0456\u043d\u0456",type:"price"},{name:"\u043d\u043e\u0432\u0438\u0437\u043d\u0456",type:"new"}].map(((e,s)=>{return Object(h.jsx)("div",{className:"menu-sort-item",onClick:(c=e,e=>{n(G(c)),t(!1)}),children:e.name},"".concat(e,"_").concat(s));var c}))})]})]})})};s(81);function Q(){const{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}}var U=s.p+"static/media/header-lamp.bfd3ea39.svg",X=s.p+"static/media/discount-icon.52e66ec8.svg",$=s.p+"static/media/info-icon.7894a89b.svg",ee=s.p+"static/media/shopping-cart2.1ac365c1.svg";var te=()=>{const{width:e}=function(){const[e,t]=Object(i.useState)(Q());return Object(i.useEffect)((()=>{function e(){t(Q())}return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),e}(),{totalCount:t,totalPrice:s}=M((e=>e.dishes.basket));return Object(h.jsx)(r.a.Fragment,{children:Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)(o.b,{to:"/",children:Object(h.jsxs)("div",{className:"header-logo",children:["\u751f\u304d\u304c\u3044 ",Object(h.jsx)("img",{src:U,alt:""}),Object(h.jsx)("span",{children:"ikigai japanise food"})]})}),Object(h.jsxs)("div",{className:"header-menu",children:[Object(h.jsxs)(d.a,{path:e<=586?"/basket":"/",children:[Object(h.jsx)("div",{className:"header-discount-button",children:Object(h.jsx)(p,{color:"#FF4344",hoverColor:"#FF43449D",primary:!0,height:"48px",children:Object(h.jsx)("img",{className:"header-icon",src:X,alt:""})})}),Object(h.jsx)(o.b,{to:"/info",children:Object(h.jsx)("div",{className:"header-info-button",children:Object(h.jsx)(p,{color:"#FF4344",hoverColor:"#FF43449D",primary:!0,height:"48px",children:Object(h.jsx)("img",{className:"header-icon",src:$,alt:""})})})})]}),Object(h.jsx)(d.a,{path:"/",exact:!0,children:Object(h.jsx)("div",{className:"header-order-status",children:Object(h.jsx)(o.b,{to:"/basket",children:Object(h.jsx)(p,{color:"#FF4344",hoverColor:"#FF43449D",primary:!0,height:"48px",children:Object(h.jsxs)("div",{className:"header-order-status__inner",children:[Object(h.jsxs)("div",{className:"header-order-status__price",children:[s," \u20b4"]}),Object(h.jsx)("div",{className:"header-order-status__line"}),Object(h.jsxs)("div",{className:"header-order-status__amount",children:[Object(h.jsx)("img",{className:"mr-1",src:ee,alt:""})," ",Object(h.jsx)("p",{children:t})]})]})})})})})]})]})})};s(82);var se,ce,ae,ie=()=>Object(h.jsx)("footer",{className:"footer"});s(83);const re=["title","titleId"];function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var c in s)({}).hasOwnProperty.call(s,c)&&(e[c]=s[c])}return e},ne.apply(null,arguments)}function le(e,t){let{title:s,titleId:c}=e,a=function(e,t){if(null==e)return{};var s,c,a=function(e,t){if(null==e)return{};var s={};for(var c in e)if({}.hasOwnProperty.call(e,c)){if(t.includes(c))continue;s[c]=e[c]}return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)s=i[c],t.includes(s)||{}.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}(e,re);return i.createElement("svg",ne({width:19,height:18,viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},a),s?i.createElement("title",{id:c},s):null,se||(se=i.createElement("path",{d:"M6.75284 16.3333C7.54713 16.3333 8.19104 15.7364 8.19104 15C8.19104 14.2636 7.54713 13.6667 6.75284 13.6667C5.95854 13.6667 5.31464 14.2636 5.31464 15C5.31464 15.7364 5.95854 16.3333 6.75284 16.3333Z",stroke:"white",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),ce||(ce=i.createElement("path",{d:"M15.382 16.3333C16.1763 16.3333 16.8202 15.7364 16.8202 15C16.8202 14.2636 16.1763 13.6667 15.382 13.6667C14.5877 13.6667 13.9438 14.2636 13.9438 15C13.9438 15.7364 14.5877 16.3333 15.382 16.3333Z",stroke:"white",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),ae||(ae=i.createElement("path",{d:"M5.07732 5H17.5393L16.3312 10.5933C16.2655 10.9003 16.0854 11.176 15.8225 11.3722C15.5595 11.5684 15.2305 11.6727 14.893 11.6667H7.29215C6.941 11.6694 6.6009 11.553 6.33597 11.3393C6.07103 11.1256 5.89959 10.8295 5.85395 10.5067L4.76091 2.82667C4.71559 2.50616 4.54621 2.21183 4.28429 1.99845C4.02238 1.78506 3.68577 1.66716 3.33709 1.66667H1.71912",stroke:"white",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})))}const oe=i.forwardRef(le);s.p;var de=s.p+"static/media/left-arrow.fc29ec73.svg",je=s.p+"static/media/trash-can-icon.1359343d.svg";var be=()=>{const{totalPrice:e,items:t}=M((e=>e.dishes.basket)),s=T(),c=Object.keys(t).map((e=>t[e].items[0]));return Object(h.jsxs)("div",{className:"basket",children:[Object(h.jsxs)("div",{className:"basket-top",children:[Object(h.jsxs)("div",{className:"basket-name",children:[Object(h.jsx)(oe,{className:"mr-2 basket-image",height:"29",width:"29"}),"\u041a\u043e\u0448\u0438\u043a"]}),Object(h.jsxs)("div",{className:"basket-clear",onClick:()=>s(L()),children:[Object(h.jsx)("img",{src:je,alt:""})," \u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043a\u043e\u0448\u0438\u043a"]})]}),Object(h.jsx)("div",{className:"basket-content",children:Object.keys(t).length>=1?c.map((e=>Object(h.jsx)(me,{id:e.id,title:e.title,description:e.description,price:e.price,picture:e.picture,itemTotalCount:t[e.id].items.length,itemTotalPrice:t[e.id].totalPrice},e.title))):Object(h.jsx)(xe,{})}),Object(h.jsxs)("div",{className:"basket-statistics",children:[Object(h.jsxs)("div",{className:"basket-product-amount",children:["\u0412\u0441\u044c\u043e\u0433\u043e \u0442\u043e\u0432\u0430\u0440\u0456\u0432: ",Object(h.jsx)("strong",{children:c.length})]}),Object(h.jsxs)("div",{className:"basket-product-price",children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f: ",Object(h.jsxs)("span",{children:[" ",e," \u20b4"]})]})]}),Object(h.jsxs)("div",{className:"basket-buttons",children:[Object(h.jsx)("div",{className:"basket-back-button",children:Object(h.jsx)(o.b,{to:"/",children:Object(h.jsx)(p,{color:"#FF4344",hoverColor:"#FF43449D",primary:!0,height:"48px",children:Object(h.jsxs)("span",{children:[Object(h.jsx)("img",{className:"mr-2",src:de,alt:""})," \u0412\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044c \u043d\u0430\u0437\u0430\u0434"]})})})}),Object(h.jsx)("div",{className:"basket-pay-button",children:Object(h.jsx)(p,{color:"#FF4344",hoverColor:"#FF43449D",primary:!0,height:"48px",children:Object(h.jsx)("strong",{children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u0438 \u0437\u0430\u0440\u0430\u0437"})})})]})]})},he=(s(84),s.p+"static/media/cross.8b9378c1.svg");var me=e=>{let{id:t,title:s,description:c,price:a,picture:i,itemTotalCount:r,itemTotalPrice:n}=e;const l=T();return Object(h.jsxs)("div",{className:"basket-item",children:[Object(h.jsxs)("div",{className:"basket-item__info",children:[Object(h.jsx)("div",{className:"basket-item__photo",children:Object(h.jsx)("img",{src:i,alt:""})}),Object(h.jsxs)("div",{className:"basket-item__text",children:[Object(h.jsx)("p",{className:"basket-item__name",children:s}),Object(h.jsx)("p",{className:"basket-item__description",children:c})]})]}),Object(h.jsxs)("div",{className:"basket-item__statistics",children:[Object(h.jsxs)("div",{className:"basket-item__amount",children:[Object(h.jsx)(p,{color:"#FF4344",hoverColor:"#FF434424",primary:!1,height:"32px",borderWidth:2,onClick:()=>l(W({dishId:t})),children:Object(h.jsx)("img",{src:k,alt:""})}),Object(h.jsx)("span",{children:r}),Object(h.jsx)(p,{color:"#FF4344",hoverColor:"#FF434424",primary:!1,height:"32px",borderWidth:2,onClick:()=>l(D({dishId:t})),children:Object(h.jsx)("img",{src:N,alt:""})})]}),Object(h.jsxs)("div",{className:"basket-item__price",children:[n," \u20b4"]}),Object(h.jsx)("div",{className:"basket-item__delete",children:Object(h.jsx)(p,{color:"#D7D7D7",hoverColor:"#D7D7D718",primary:!1,height:"32px",borderWidth:2,onClick:()=>l(S({dishId:t})),children:Object(h.jsx)("img",{src:he,alt:""})})})]})]})};var ue=()=>Object(h.jsx)("div",{className:"card-container"}),pe=(s(85),s.p+"static/media/sakura.1d3a9c4c.svg");var Oe,xe=()=>Object(h.jsxs)("div",{className:"empty-basket-container",children:[Object(h.jsx)("object",{className:"empty-basket-sakura",style:{width:"450px",height:"450px"},type:"image/svg+xml",data:pe,children:"svg-animation"}),Object(h.jsxs)("div",{className:"empty-basket-text",children:[Object(h.jsxs)("h2",{className:"",children:["\u041a\u043e\u0448\u0438\u043a \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u0439 ",Object(h.jsx)("span",{children:":("})]}),Object(h.jsxs)("p",{className:"",children:["\u0429\u043e\u0431 \u0437\u0430\u043c\u043e\u0432\u0438\u0442\u0438 \u0449\u043e\u0441\u044c \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c"," ",Object(h.jsx)(o.b,{to:"/",className:"empty-basket-button",children:"\u0441\u044e\u0434\u0438"})]})]})]});s(86);const ve=["title","titleId"];function ge(){return ge=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var c in s)({}).hasOwnProperty.call(s,c)&&(e[c]=s[c])}return e},ge.apply(null,arguments)}function fe(e,t){let{title:s,titleId:c}=e,a=function(e,t){if(null==e)return{};var s,c,a=function(e,t){if(null==e)return{};var s={};for(var c in e)if({}.hasOwnProperty.call(e,c)){if(t.includes(c))continue;s[c]=e[c]}return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)s=i[c],t.includes(s)||{}.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}(e,ve);return i.createElement("svg",ge({enableBackground:"#ff4344",height:512,viewBox:"0 0 24 24",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},a),s?i.createElement("title",{id:c},s):null,Oe||(Oe=i.createElement("path",{d:"m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z",fill:"#ff4344"})))}const ke=i.forwardRef(fe);s.p;var Ne=()=>Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("h2",{className:"info-title",children:[Object(h.jsx)("span",{className:"info-shop-title",children:"ikigai japanise food"})," - online food shop, created with ",Object(h.jsx)("span",{className:"info-react",children:"React"})," &"," ",Object(h.jsx)("span",{className:"info-redux",children:"Redux"})]}),Object(h.jsxs)("p",{className:"info-description",children:["You can check my other projects here:"," ",Object(h.jsxs)("a",{href:"https://github.com/kotsuban",children:[Object(h.jsx)(ke,{className:"ml-3",width:"22",height:"22",fill:"#ff4344"})," ","Github"]})]})]});var ye=function(){const e=T(),t=M((e=>e.dishes.status));return r.a.useEffect((()=>{"idle"===t&&e(_())}),[e,t]),Object(h.jsx)(r.a.Fragment,{children:Object(h.jsxs)(o.a,{children:[Object(h.jsxs)("div",{className:"main-container",children:[Object(h.jsx)(te,{}),Object(h.jsx)(K,{}),Object(h.jsx)(d.a,{path:"/",exact:!0,children:Object(h.jsx)(Z,{})}),Object(h.jsx)(d.a,{path:"/info",exact:!0,children:Object(h.jsx)(Ne,{})}),Object(h.jsx)(d.a,{path:"/basket",exact:!0,children:Object(h.jsx)(be,{})})]}),Object(h.jsx)(ie,{})]})})};const Ce=Object(C.a)({reducer:{dishes:H,sort:Y}});l.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(R.a,{store:Ce,children:Object(h.jsx)(ye,{})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.d859c0ce.chunk.js.map