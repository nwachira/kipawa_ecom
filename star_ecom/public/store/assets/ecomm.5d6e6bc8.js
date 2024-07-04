import{B as P,E as B,i as I,e as C,f as y,o as t,g as r,j as l,w as i,h as e,t as m,l as f,_ as w,k as T,q as j,G as b,a as v,F as p,n as x,H as V,J as $,K as R,u as A}from"./vendor.c31efe16.js";import{M as N,f as E}from"./index.0cc28251.js";const F={class:"shadow-md rounded-2xl p-4 space-y-2 flex items-start justify-between flex-col"},L=["src"],O={class:"text-base text-gray-800 font-medium mt-2"},S={class:"text-xl font-bold text-gray-900"},q={__name:"ProductCard",props:{product:Object},setup(c){const s=P(),o=B(),n=I("cart");N(),C(!1);function u(){const a=s.params.name;n.items.push({product:a,qty:1}),o.success("Item added to cart!")}return(a,_)=>{const d=y("router-link");return t(),r("div",F,[l(d,{to:{name:"ProductDetailsPage",params:{name:c.product.name}},class:"flex-grow"},{default:i(()=>[e("div",null,[e("img",{src:c.product.preview_image,alt:"Product Preview Image"},null,8,L),e("p",O,m(c.product.name),1)]),e("p",S,m(f(E)(c.product.price,c.product.currency)),1)]),_:1},8,["to"]),l(f(j),{onClick:u,variant:"solid",size:"2xl"},{prefix:i(()=>[l(f(w),{class:"h-5",name:"shopping-cart"})]),default:i(()=>[T(" Add to cart ")]),_:1})])}}},D=e("div",{class:"flex justify-between items-center p-2 border-b border-gray-400 mt-40 mb-8"},[e("h2",{class:"font-semibold text-lg border-b-2 border-blue-700"},"Our Products"),e("h2",null,"View All >")],-1),z={key:0,class:"mt-4 grid grid-cols-1 sm:grid-cols-5 gap-3"},H={__name:"Products",props:{products:Object},setup(c){const s=b({doctype:"Product",fields:["name","preview_image","price","currency"],auto:!0}),o=v(()=>s.list.data?s.list.data:[]);return(n,u)=>(t(),r(p,null,[D,o.value?(t(),r("div",z,[(t(!0),r(p,null,x(o.value,a=>(t(),V(q,{key:a.name,product:a},null,8,["product"]))),128))])):$("",!0)],64))}};const M={class:"m-4 relative"},G={key:0,class:"bg-gray-900 w-full h-80 sm:h-80 rounded sm:rounded-2xl sm:flex sm:justify-between sm:p-20 sm:place-items-center"},J={class:"text-white text-2xl font-extrabold sm:visible text-center"},K={class:"text-white text-8xl font-extrabold flex justify-center px-2 text-center"},Q={class:"text-white text-2xl font-extrabold sm:visible text-center"},U=["src"],W={class:"absolute sm:bottom-30 left-[-20px] top-40"},X={class:"absolute sm:bottom-30 right-[-10px] top-40"},Y={__name:"Top",setup(c){const s=C(0),o=b({doctype:"Slider Hero",fields:["main_title","sub_title","sub_title3","slider_image"],auto:!0}),n=v(()=>o.list.data?o.list.data:[]),u=()=>{s.value<n.value.length-1?s.value++:s.value=0},a=()=>{s.value>0?s.value--:s.value=n.value.length-1};return(_,d)=>{const g=y("Button");return t(),r("div",M,[n.value?(t(),r("div",G,[(t(!0),r(p,null,x(n.value,(h,k)=>(t(),r("div",{class:"space-y-3 p-1 sm:w-1/2",key:k},[e("h1",J,m(h.sub_title),1),e("h1",K,m(h.main_title),1),e("h1",Q,m(h.sub_title3),1)]))),128)),(t(!0),r(p,null,x(n.value,(h,k)=>(t(),r("div",{class:"p-3 place-items-center flex flex-col relative sm:w-1/2",key:k},[e("img",{src:h.slider_image,alt:"",class:"w-40 h-40 rounded sm:w-60 sm:h-60 mt-4 mx-auto"},null,8,U)]))),128)),e("div",W,[l(g,{onClick:a},{default:i(()=>[l(f(w),{class:"bg-white hover:bg-gray-700 text-gray-900 font-bold py-4 px-4 rounded-full",name:"chevron-left"})]),_:1})]),e("div",X,[l(g,{onClick:u},{default:i(()=>[l(f(w),{class:"bg-white hover:bg-gray-700 text-gray-900 font-bold py-4 px-4 rounded-full",name:"chevron-right"})]),_:1})])])):$("",!0)])}}};var Z=R(Y,[["__scopeId","data-v-169f6d6d"]]);const ee=e("div",{class:"flex justify-between items-center border-b border-gray-400 mt-40 mb-8"},[e("h1",{class:"border-b-2 border-blue-700"},"Shop From Top Categories"),e("h1",null,"View All >")],-1),te={class:"grid sm:grid-cols-7 sm:gap-4 mt-8"},se={class:"mt-20 hover:border-blue-700 border rounded-full"},re=["src","alt"],oe={class:"mt-2"},ae={__name:"CategoryCard",setup(c){const s=A(),o=b({doctype:"Product Category",fields:["title","image"],auto:!0}),n=v(()=>o.list.data?o.list.data:[]),u=a=>{s.push(`/category/${a}`)};return(a,_)=>(t(),r("div",null,[ee,e("div",te,[(t(!0),r(p,null,x(n.value,(d,g)=>(t(),r("div",{key:g,class:"flex flex-col items-center"},[e("div",se,[l(f(j),{class:"rounded-full h-40 w-fit",onClick:h=>u(d.title)},{default:i(()=>[e("img",{src:d.image,alt:d.title,class:"w-fit rounded-full"},null,8,re)]),_:2},1032,["onClick"])]),e("h2",oe,m(d.title),1)]))),128))])]))}},le=e("div",{class:"border-b border-gray-400 flex justify-between px-6 mt-40"},[e("h1",null,"Top Brands"),e("h1",null,"View All >")],-1),ce={key:0,class:"flex flex-wrap gap-4 mt-8 px-10"},ne=["src"],de={class:"flex items-center"},ue=["src"],ie={__name:"BrandsCard",setup(c){A();const s=b({doctype:"Brand Card",fields:["brand","product_image","logo","subtitle"],auto:!0}),o=v(()=>s.list.data?s.list.data:[]);return(n,u)=>{const a=y("router-link");return t(),r(p,null,[le,o.value?(t(),r("div",ce,[(t(!0),r(p,null,x(o.value,(_,d)=>(t(),r("div",{key:d,class:"bg-yellow-100 rounded border-2 h-60 w-full sm:w-1/3 p-4 place-items-center flex justify-between"},[l(a,{to:`/brand/${_.brand}`,class:"flex flex-col items-center space-y-4 w-full"},{default:i(()=>[e("h1",null,m(_.brand),1),e("img",{src:_.logo,alt:"Logo",class:"w-20 h-20 rounded-full"},null,8,ne),e("h2",null,m(_.subtitle),1)]),_:2},1032,["to"]),e("div",de,[e("img",{src:_.product_image,alt:"Image",class:"w-full h-40 object-cover"},null,8,ue)])]))),128))])):$("",!0)],64)}}},_e={class:"shadow-md rounded-2xl p-4 space-y-2 flex items-start justify-between flex-col"},me=["src"],pe={class:"text-base text-gray-800 font-medium mt-2"},fe={__name:"EssentialCa",props:{product:Object},setup(c){const s=P(),o=B(),n=I("cart");N(),C(!1);function u(){const a=s.params.name;n.items.push({product:a,qty:1}),o.success("Item added to cart!")}return(a,_)=>{const d=y("router-link");return t(),r("div",_e,[l(d,{to:{name:"ProductDetailsPage",params:{name:c.product.name}}},{default:i(()=>[e("div",null,[e("img",{src:c.product.preview_image,alt:"Product Preview Image"},null,8,me),e("p",pe,m(c.product.name),1)])]),_:1},8,["to"]),l(f(j),{onClick:u,variant:"solid",size:"2xl"},{prefix:i(()=>[l(f(w),{class:"h-5",name:"shopping-cart"})]),default:i(()=>[T(" Add to cart ")]),_:1})])}}},he=e("div",{class:"flex justify-between items-center p-2 border-b border-gray-400 mt-40 mb-8"},[e("h2",{class:"font-semibold text-lg border-b-2 border-blue-700"},"Essential Products"),e("h2",null,"View All >")],-1),xe={key:0,class:"mt-4 grid grid-cols-1 sm:grid-cols-6 gap-3"},be={__name:"Essential",props:{products:Object},setup(c){const s=b({doctype:"Product",fields:["name","preview_image","price","currency"],auto:!0}),o=v(()=>s.list.data?s.list.data:[]);return(n,u)=>(t(),r(p,null,[he,o.value?(t(),r("div",xe,[(t(!0),r(p,null,x(o.value,a=>(t(),V(fe,{key:a.name,product:a},null,8,["product"]))),128))])):$("",!0)],64))}},ve={},ge={class:"bg-blue-800 w-max-content"},ye=e("div",{class:"h-80 mt-24"},[e("h1",{class:"text-white"},"Footer")],-1),we=[ye];function $e(c,s){return t(),r("div",ge,we)}var ke=R(ve,[["render",$e]]);const Ce={class:""},Be={__name:"ecomm",setup(c){return(s,o)=>(t(),r("div",null,[e("div",Ce,[l(Z)]),e("div",null,[l(H)]),e("div",null,[l(ae)]),e("div",null,[l(ie)]),e("div",null,[l(be)]),e("div",null,[l(ke)])]))}};export{Be as default};
