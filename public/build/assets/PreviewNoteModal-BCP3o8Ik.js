import{d as x}from"./index-DOvf4NZi.js";import{o as i,f as r,b as l,e as p,i as u,m as c,g as m,k as f,h,t as g}from"./app--_Q-ABEG.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";const _={props:{modelValue:{type:Boolean,required:!0}},data(){return{title:"",content:""}},methods:{closeModal(){console.log("closing modal"),this.$emit("update:modelValue",!1),this.title="",this.content=""},saveDraft(){console.log("saving draft"),this.$emit("update:modelValue",!1)},submitJournal(){console.log("submitting journal"),x.Inertia.post(route("journals.store"),{title:this.title,content:this.content}),this.closeModal()}}},j={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-5 py-10"},C={class:"bg-black text-white p-5 rounded-lg shadow-lg w-2/3 h-full flex flex-col space-y-5 items-center"},M=l("h3",null,"New Journal",-1),V={class:"mt-4 w-full flex justify-between"},D={class:"space-x-2"},J=l("button",{type:"submit",class:"bg-white text-black hover:bg-lavender font-bold py-2 px-4 rounded"}," Save ",-1);function S(s,e,d,o,a,n){return d.modelValue?(i(),r("div",j,[l("div",C,[M,l("form",{onSubmit:e[4]||(e[4]=p((...t)=>n.submitJournal&&n.submitJournal(...t),["prevent"])),class:"w-full h-full flex flex-col"},[u(l("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>a.title=t),class:"w-full p-2 border mb-4 bg-mediumgrey text-white rounded-lg",placeholder:"Title",maxlength:"50"},null,512),[[c,a.title]]),u(l("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>a.content=t),class:"w-full h-full p-2 border bg-mediumgrey text-white rounded-lg",placeholder:"Write your notes here..."},null,512),[[c,a.content]]),l("div",V,[l("button",{type:"button",onClick:e[2]||(e[2]=(...t)=>n.closeModal&&n.closeModal(...t)),class:"bg-black text-white font-bold hover:bg-red hover:text-black py-2 px-4 rounded"}," Cancel "),l("div",D,[l("button",{type:"button",onClick:e[3]||(e[3]=(...t)=>n.saveDraft&&n.saveDraft(...t)),class:"bg-black text-white font-bold hover:bg-lavender hover:text-black py-2 px-4 rounded"}," Draft "),J])])],32)])])):m("",!0)}const G=v(_,[["render",S]]),T={props:{modelValue:{type:Boolean,required:!0},journal:{type:Object,default:()=>({title:"",content:"",id:null,created_at:""})}},setup(s,{emit:e}){const d=f(!1),o=h(()=>s.journal.title),a=h(()=>s.journal.content),n=f(s.journal.title),t=f(s.journal.content);function b(){e("update:modelValue",!1),d.value=!1}function y(){n.value=o.value,t.value=a.value,d.value=!0}function w(){x.Inertia.put(route("journals.update",s.journal.id),{title:n.value,content:t.value},{onSuccess:()=>b()})}function k(){confirm("Are you sure you want to delete this journal?")&&x.Inertia.delete(route("journals.destroy",s.journal.id),{onSuccess:()=>{b()}})}return{computedTitle:o,computedContent:a,editableTitle:n,editableContent:t,isEdit:d,closeModal:b,editMode:y,saveChanges:w,deleteJournal:k}}},N={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-5 py-10"},B={class:"bg-black text-white p-5 rounded-lg shadow-lg w-2/3 h-full flex flex-col justify-between space-y-5"},E={key:0,class:"flex flex-col h-full space-y-5 p-4"},U={class:"font-bold"},I={key:1,class:"h-full space-y-5 p-4"},q=l("button",{type:"submit",class:"w-fit bg-black text-white font-bold hover:bg-lavender hover:text-black py-2 px-4 rounded"}," Save ",-1),P={class:"w-full flex justify-between"},A={class:"flex flex-row space-x-4"};function O(s,e,d,o,a,n){return d.modelValue?(i(),r("div",N,[l("div",B,[o.isEdit?(i(),r("div",I,[l("form",{onSubmit:e[2]||(e[2]=p((...t)=>o.saveChanges&&o.saveChanges(...t),["prevent"])),class:"flex flex-col space-y-2"},[u(l("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.editableTitle=t),class:"w-full p-2 mb-4 bg-grey text-white rounded-lg",maxlength:"50"},null,512),[[c,o.editableTitle]]),u(l("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>o.editableContent=t),class:"w-full h-full p-2 bg-grey text-white rounded-lg"},null,512),[[c,o.editableContent]]),q],32)])):(i(),r("div",E,[l("h3",U,g(o.computedTitle),1),l("p",null,g(o.computedContent),1)])),l("div",P,[l("div",A,[l("button",{onClick:e[3]||(e[3]=(...t)=>o.closeModal&&o.closeModal(...t)),class:"bg-black text-white font-bold hover:bg-white hover:text-black py-2 px-4 rounded"}," Close "),l("button",{onClick:e[4]||(e[4]=(...t)=>o.deleteJournal&&o.deleteJournal(...t)),class:"bg-black text-white font-bold hover:bg-red hover:text-black py-2 px-4 rounded"}," Delete ")]),o.isEdit?m("",!0):(i(),r("button",{key:0,onClick:e[5]||(e[5]=(...t)=>o.editMode&&o.editMode(...t)),class:"bg-black text-white font-bold hover:bg-white hover:text-black py-2 px-4 rounded"}," Edit "))])])])):m("",!0)}const H=v(T,[["render",O]]);export{G as N,H as P};
