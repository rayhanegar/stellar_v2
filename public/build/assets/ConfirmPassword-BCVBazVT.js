import{T as l,o as m,c as d,w as r,a,u as o,Z as c,b as e,d as p,n as u,e as f}from"./app--_Q-ABEG.js";import{_}from"./GuestLayout-CxGiITP3.js";import{_ as w,a as b}from"./TextInput-Cal32S4a.js";import{P as h}from"./PrimaryButton-D9PgzVqp.js";import"./ApplicationLogo-Csz94slR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x=e("div",{class:"mb-4 text-sm text-white"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),P=e("p",null,"Password",-1),V={class:"flex justify-end mt-4"},$={__name:"ConfirmPassword",setup(g){const s=l({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(y,t)=>(m(),d(_,null,{default:r(()=>[a(o(c),{title:"Confirm Password"}),x,e("form",{onSubmit:f(i,["prevent"])},[e("div",null,[P,a(w,{id:"password",type:"password",class:"mt-1 block w-full text-black",modelValue:o(s).password,"onUpdate:modelValue":t[0]||(t[0]=n=>o(s).password=n),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(b,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",V,[a(h,{class:u(["ms-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:r(()=>[p(" Confirm ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{$ as default};