var E=(a,t,c)=>new Promise((o,e)=>{var r=n=>{try{d(c.next(n))}catch(m){e(m)}},s=n=>{try{d(c.throw(n))}catch(m){e(m)}},d=n=>n.done?o(n.value):Promise.resolve(n.value).then(r,s);d((c=c.apply(a,t)).next())});import{c as k,r as I,a as R,b as D,d as j,u as q,i as V,e as A,f as $,o as h,g as v,h as p,j as i,w as y,k as P,l,_ as U,t as L,m as F,F as C,n as B,p as J,q as O,D as T,s as z,v as H,x as W,y as G,C as K,I as Q,z as Y,A as M}from"./vendor.c31efe16.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}};X();const Z="modulepreload",N={},ee="/assets/star_ecom/store/",S=function(t,c){return!c||c.length===0?t():Promise.all(c.map(o=>{if(o=`${ee}${o}`,o in N)return;N[o]=!0;const e=o.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":Z,e||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),e)return new Promise((d,n)=>{s.addEventListener("load",d),s.addEventListener("error",n)})})).then(()=>t())},w=k({url:"frappe.auth.get_logged_user",cache:"User",onError(a){a&&a.exc_type==="AuthenticationError"&&_.push({name:"LoginPage"})}});function b(){let t=new URLSearchParams(document.cookie.split("; ").join("&")).get("user_id");return t==="Guest"&&(t=null),t}const f=I({login:k({url:"login",makeParams({email:a,password:t}){return{usr:a,pwd:t}},onSuccess(a){w.reload(),f.user=b(),f.login.reset(),_.replace(a.default_route||"/")}}),logout:k({url:"logout",onSuccess(){w.reset(),f.user=b(),_.replace({name:"Login"})}}),user:b(),isLoggedIn:R(()=>!!f.user)}),te=[{path:"/",name:"Home",redirect:{name:"ProductsListPage"}},{path:"/products",name:"ProductsListPage",component:()=>S(()=>import("./ecomm.5d6e6bc8.js"),["assets/ecomm.5d6e6bc8.js","assets/ecomm.84652aeb.css","assets/vendor.c31efe16.js","assets/vendor.c1730d53.css","assets/index.0cc28251.js"])},{path:"/products/:name",name:"ProductDetailsPage",component:()=>S(()=>import("./ProductDetails.f1ed7bfd.js"),["assets/ProductDetails.f1ed7bfd.js","assets/index.0cc28251.js","assets/vendor.c31efe16.js","assets/vendor.c1730d53.css"])},{path:"/checkout",name:"CheckoutPage",component:()=>S(()=>import("./Checkout.85d8e93e.js"),["assets/Checkout.85d8e93e.js","assets/vendor.c31efe16.js","assets/vendor.c1730d53.css"]),meta:{requiresLogin:!0}}];let _=D({history:j("/store"),routes:te});_.beforeEach((a,t,c)=>E(void 0,null,function*(){let o=f.isLoggedIn;try{yield w.promise}catch(e){o=!1}a.meta.requiresLogin&&!o&&(window.location.href="/login?redirect-to=/store"),c()}));const oe={class:"p-4 flex items-center justify-between"},re={class:"space-y-3"},se={__name:"Navbar",setup(a){const t=q(),c=V("cart"),o=A(!1);function e(r){c.items.splice(r,1)}return(r,s)=>{const d=$("router-link");return h(),v(C,null,[p("div",null,[p("nav",oe,[i(d,{to:{name:"ProductsListPage"},class:"text-2xl font-bold text-gray-800"},{default:y(()=>[P(" \u2728 Star Store \u2728 ")]),_:1}),p("button",{onClick:s[0]||(s[0]=n=>o.value=!0),class:"flex flex-start"},[i(l(U),{class:"h-8",name:"shopping-cart"}),i(l(F),{variant:"solid"},{default:y(()=>[P(L(l(c).items.length),1)]),_:1})])])]),i(l(T),{options:{title:"Your Cart",size:"3xl",actions:[{label:"Proceed to checkout",variant:"solid",onClick:n=>{n(),l(t).push({name:"CheckoutPage"})}}]},modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=n=>o.value=n)},{"body-content":y(()=>[p("ul",re,[(h(!0),v(C,null,B(l(c).items,(n,m)=>(h(),v("li",null,[P(" #"+L(m+1)+" - "+L(n.product)+" ",1),i(l(J),{modelValue:n.qty,"onUpdate:modelValue":x=>n.qty=x,type:"number",placeholder:"Qty"},null,8,["modelValue","onUpdate:modelValue"]),i(l(O),{onClick:x=>e(m),class:"mt-2",variant:"outline",theme:"red"},{default:y(()=>[P("Remove")]),_:2},1032,["onClick"])]))),256))])]),_:1},8,["options","modelValue"])],64)}}},ne={class:"m-3"},ae={__name:"App",setup(a){const t=V("cart");return z(t.items,()=>{console.log("watcher works!"),localStorage.setItem("cart",JSON.stringify(t))}),(c,o)=>{const e=$("router-view");return h(),v(C,null,[i(se),p("div",ne,[i(e)])],64)}}};let u=H(ae),g=localStorage.getItem("cart");if(g)g=JSON.parse(g);else{const a=JSON.stringify({items:[]});localStorage.setItem("cart",a),g={items:[]}}const ce=I(g);u.provide("cart",ce);W("resourceFetcher",M);u.use(_);u.use(G);u.component("Button",O);u.component("Card",K);u.component("Input",Q);const ie={};u.use(Y,ie);u.mount("#app");
