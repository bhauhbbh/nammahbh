import{u as m}from"./asyncData.8b40b368.js";import{M as c,I as p,d as i,a9 as u,r as l,N as e,k as d}from"./entry.2855a6e5.js";import f from"./Ellipsis.8392cf9a.js";import _ from"./ComponentPlaygroundData.11c84a59.js";import"./TabsHeader.7a5b2974.js";import"./ComponentPlaygroundProps.f2af0f06.js";import"./ProseH4.5195c92d.js";import"./ProseCodeInline.47b0eeff.js";import"./Badge.c5d42623.js";import"./MDCSlot.61b49176.js";import"./slot.20a5d087.js";import"./ProseP.9fd21499.js";import"./index.80492ec1.js";import"./ComponentPlaygroundSlots.vue.3e4ebc7b.js";import"./ComponentPlaygroundTokens.vue.61922d0d.js";async function y(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const V=d(g,[["__scopeId","data-v-3653a881"]]);export{V as default};
