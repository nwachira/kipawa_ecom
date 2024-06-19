import{N as f,q as I,D,V as h,f as d,o as m,g as c,Q as _,R as v,S as y,j as n,w as s,h as r,t as w,G as C,k as u,F as k}from"./vendor.55c097ca.js";const S={name:"InsertImage",props:["editor"],expose:["openDialog"],data(){return{addImageDialog:{url:"",file:null,show:!1}}},components:{Button:I,Dialog:D},methods:{openDialog(){this.addImageDialog.show=!0},onImageSelect(t){let e=t.target.files[0];!e||(this.addImageDialog.file=e,h(e).then(i=>{this.addImageDialog.url=i}))},addImage(t){this.editor.chain().focus().setImage({src:t}).run(),this.reset()},reset(){this.addImageDialog=this.$options.data().addImageDialog}}},V={class:"relative cursor-pointer rounded-lg bg-gray-100 py-1 focus-within:bg-gray-200 hover:bg-gray-200"},b={class:"absolute inset-0 select-none px-2 py-1 text-base"},x=["src"];function B(t,e,i,N,a,o){const g=d("Button"),p=d("Dialog");return m(),c(k,null,[_(t.$slots,"default",v(y({onClick:o.openDialog}))),n(p,{options:{title:"Add Image"},modelValue:a.addImageDialog.show,"onUpdate:modelValue":e[2]||(e[2]=l=>a.addImageDialog.show=l),onAfterLeave:o.reset},{"body-content":s(()=>[r("label",V,[r("input",{type:"file",class:"w-full opacity-0",onChange:e[0]||(e[0]=(...l)=>o.onImageSelect&&o.onImageSelect(...l)),accept:"image/*"},null,32),r("span",b,w(a.addImageDialog.file?"Select another image":"Select an image"),1)]),a.addImageDialog.url?(m(),c("img",{key:0,src:a.addImageDialog.url,class:"mt-2 w-full rounded-lg"},null,8,x)):C("",!0)]),actions:s(()=>[n(g,{variant:"solid",onClick:e[1]||(e[1]=l=>o.addImage(a.addImageDialog.url))},{default:s(()=>[u(" Insert Image ")]),_:1}),n(g,{onClick:o.reset},{default:s(()=>[u(" Cancel ")]),_:1},8,["onClick"])]),_:1},8,["modelValue","onAfterLeave"])],64)}var j=f(S,[["render",B]]);export{j as default};
