import{T as d,o as r,c as u,w as i,a,u as s,Z as c,f as p,t as f,g as _,b as t,d as w,n as g,e as y}from"./app--_Q-ABEG.js";import{_ as b}from"./GuestLayout-CxGiITP3.js";import{_ as x,a as h}from"./TextInput-Cal32S4a.js";import{P as k}from"./PrimaryButton-D9PgzVqp.js";import"./ApplicationLogo-Csz94slR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const V=t("div",{class:"mb-4 text-sm text-white"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),v={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=t("p",null,"Email",-1),N={class:"flex items-center justify-end mt-4"},j={__name:"ForgotPassword",props:{status:{type:String}},setup(o){const e=d({email:""}),m=()=>{e.post(route("password.email"))};return(P,l)=>(r(),u(b,null,{default:i(()=>[a(s(c),{title:"Forgot Password"}),V,o.status?(r(),p("div",v,f(o.status),1)):_("",!0),t("form",{onSubmit:y(m,["prevent"])},[t("div",null,[B,a(x,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":l[0]||(l[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(h,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",N,[a(k,{class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:i(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{j as default};
