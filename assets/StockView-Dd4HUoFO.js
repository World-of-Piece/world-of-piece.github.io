import{d as A,c as u,K as M,n,e,h as i,i as r,av as U,a,D as S,z as $,F as D,L as V,b as k,w as C,f as P,s as h,t as y,O as K,u as Z,o as W,x as Y,p as H,y as J,q as F,g as Q}from"./index-NKYrk6m7.js";import{a as T,b as N}from"./index-DXuOIeD-.js";import{s as X}from"./index-jlWVAZ64.js";const O=["Armamentos","Autômatos","Akuma no Mi","Consumíveis","Criaturas","Cômodos","Diversos","Equipamentos","Transportes","Receitas","Permissões","Profissões"],ee=A({__name:"Button",props:{class:{}},setup(o){const l=o;return(s,c)=>(i(),u("button",{class:n(e(r)(`
          flex-shrink-0
          flex items-center justify-center
          mt-2
          rounded-md
          font-noto-sans text-lg font-bold
          w-full h-11
          text-black bg-[#e71e1d]
          transition-all duration-200
          select-none

          hover:bg-[#e71e1d]/80

          active:scale-90
        `,l.class))},[M(s.$slots,"default")],2))}}),q=["armamento","automato","akuma_no_mi","consumivel","criatura","comodo","diverso","equipamento","transporte","receita","permissao","profissao"],z=U("stock",{state:()=>({isLoading:!1,selectedItemIndex:0,selectedCategory:null,showActivateDialog:!1}),actions:{setIsLoading(o){this.isLoading=o},setSelectedItemIndex(o){this.selectedItemIndex=o},setSelectedCategory(o){if(o<0||o>=q.length){this.selectedCategory=null;return}this.selectedCategory=q[o]},setShowActivateDialog(o){this.showActivateDialog=o}}}),te=A({__name:"ItemDisplay",props:{name:{},category:{},description:{},image_url:{}},setup(o){const l=z(),s=()=>{l.setShowActivateDialog(!0)};return(c,d)=>(i(),u("div",{class:n(e(r)(`
        p-3
        rounded-3xl
        w-2/5 h-full
        bg-[#e71e1d]/30
      `))},[a("div",{class:n(e(r)(`
          flex flex-col items-center
          p-5 gap-3
          rounded-xl
          size-full
          bg-black/60
        `))},[a("div",{class:n(e(r)(`
            flex-shrink-0
            mt-4
            w-[70%] aspect-square
            bg-contain bg-center bg-no-repeat
          `)),style:S({"background-image":`url(${c.image_url||""})`})},null,6),a("h1",{class:n(e(r)(`
            flex-shrink-0
            mt-2
            font-inknut text-2xl font-black
            text-center
            w-full
            text-[#e71e1d]
          `))},$(c.name),3),a("div",{class:n(e(r)(`
            flex-shrink
            flex flex-col
            px-3 gap-1
            font-noto-sans text-xs text-justify
            w-full
            text-white
            overflow-y-auto
          `))},[(i(!0),u(D,null,V(c.description.split(`
`),g=>(i(),u("p",null,$(g),1))),256))],2),k(ee,{class:"mt-auto",onClick:s},{default:C(()=>d[0]||(d[0]=[P("Ativar Item")])),_:1})],2)],2))}}),se=A({__name:"GridItem",props:{idx:{},data:{}},setup(o){const l=o,s=z(),c=h(null),d=y(()=>s.selectedItemIndex===l.idx),g=()=>{var f;(f=c.value)==null||f.scrollIntoView({behavior:"smooth",block:"center"}),s.setSelectedItemIndex(l.idx)};return(f,p)=>(i(),u("div",{ref_key:"$el",ref:c,class:n(["GridItem",e(r)(`
        flex flex-col
        border-white/20 border-4
        aspect-square
        cursor-pointer
        transition-all duration-200

        hover:border-transparent
        hover:bg-transparent

        ${d.value?"selected":""}
      `)]),onClick:g},[a("div",{class:n(["image",e(r)(`
          aspect-square
          bg-center bg-no-repeat
        `)]),style:S({"background-image":`url(${l.data.image_url})`,"background-size":"80% 80%"})},null,6)],2))}}),ae=(o,l)=>{const s=o.__vccOpts||o;for(const[c,d]of l)s[c]=d;return s},le=ae(se,[["__scopeId","data-v-2ba78e40"]]),oe=["onClick"],ne={key:0,class:"flex items-center justify-center h-full bg-black/60"},re={key:1,class:"flex items-center justify-center gap-3 h-full bg-black/60"},ie=A({__name:"ItemGrid",props:{items:{}},setup(o){const l=z(),s=h(!1),c=h(-1),d=y(()=>l.selectedCategory),g=y(()=>d.value===null?"Todos os Itens":O[c.value]),f=p=>{l.setSelectedCategory(p),c.value=p,s.value=!1};return(p,b)=>(i(),u("div",{class:n(e(r)(`
        flex flex-col
        size-full
      `))},[a("div",{class:n(e(r)(`
          p-3 pb-0
          rounded-t-3xl
          w-fit h-11
          bg-[#e71e1d]/30
        `))},[a("div",{class:n(e(r)(`
            relative
            font-noto-sans text-sm
            font-medium
          `))},[a("button",{class:n(e(r)(`
              flex items-center justify-center
              px-5 py-1
              rounded-full
              text-black bg-[#e71e1d]
              w-40
              transition-all duration-200
              cursor-pointer

              hover:bg-[#e71e1d]/80
            `)),role:"combobox","aria-label":"select button","aria-haspopup":"listbox","aria-expanded":"false","aria-controls":"select-dropdown",onClick:b[0]||(b[0]=I=>s.value=!s.value)},$(g.value),3),a("ul",{class:n(e(r)(`
              z-10
              absolute
              p-3 mt-1
              rounded-xl
              list-none
              w-full
              bg-[#e71e1d]
              origin-top
              scale-y-0 opacity-0
              transition-all duration-200 ease-in-out
              overflow-y-hidden

              ${s.value&&"scale-y-100 opacity-100"}
            `)),role:"listbox",id:"select-dropdown"},[a("li",{class:n(e(r)(`
                px-2 py-1
                rounded-md
                cursor-pointer
                select-none

                hover:font-bold
                hover:text-[#e71e1d] hover:bg-black

                ${d.value===null&&"font-bold text-[#e71e1d] bg-black"}
              `)),role:"option",onClick:b[1]||(b[1]=()=>f(-1))}," Todos os Itens ",2),(i(!0),u(D,null,V(e(q),(I,x)=>(i(),u("li",{key:x,class:n(e(r)(`
                px-2 py-1
                rounded-md
                cursor-pointer
                select-none
                text-black

                hover:font-bold
                hover:text-[#e71e1d] hover:bg-black

                ${d.value===I&&"font-bold text-[#e71e1d] bg-black"}
              `)),role:"option",onClick:()=>f(x)},$(e(O)[x]),11,oe))),128))],2)],2)],2),a("div",{class:n(e(r)(`
          p-3
          rounded-tr-3xl rounded-b-3xl
          h-[calc(100%-2.75rem)]
          bg-[#e71e1d]/30
        `))},[p.items.length===0&&!e(l).isLoading?(i(),u("div",ne,b[2]||(b[2]=[a("i",null,"Nenhum item encontrado.",-1)]))):e(l).isLoading?(i(),u("div",re,b[3]||(b[3]=[a("i",{class:"pi pi-spin pi-spinner"},null,-1),a("i",null,"Carregando...",-1)]))):(i(),u("div",{key:2,class:n(e(r)(`
            grid grid-cols-5 content-start
            p-3 gap-2
            rounded-xl
            h-full
            bg-black/60
            overflow-y-auto
          `))},[(i(!0),u(D,null,V(p.items,(I,x)=>(i(),K(le,{key:x,idx:x,data:I},null,8,["idx","data"]))),128))],2))],2)],2))}}),ce="/assets/banner-VNM4M5uZ.png",ue="/assets/pattern-DVRZsIF5.png",de="/assets/title-DEpCl2WS.png",me={key:0,href:"/admin",class:"z-20 fixed bottom-3 right-3 flex items-center justify-center size-12 rounded-lg text-black bg-white hover:bg-white/80",title:"Painel do Admin"},pe={class:"flex items-center justify-center w-full"},fe={key:0,class:"flex items-center justify-center w-full aspect-square"},ve={key:1,class:"flex flex-col gap-6"},ke=A({__name:"StockView",setup(o){const l=Z(),s=z(),c=h(null),d=h([]),g=h(!1),f=h(""),p=h(""),b=y(()=>l.isStaff),I=y(()=>p.value!==""),x=y(()=>s.showActivateDialog),B=y(()=>{const m=s.selectedItemIndex,t=_.value[m];return t?`Ativar ${t.name}`:"Ativar Item"}),_=y(()=>s.selectedCategory===null?d.value:d.value.filter(m=>m.category===s.selectedCategory)),w=y(()=>_.value[s.selectedItemIndex]||{name:"",category:"",description:"",image_url:""}),G=async()=>{g.value=!0;try{const m=F();console.log("activating item with id",w.value.id,": ",w.value.name);const t=await m.items.activateItem({user_id:parseInt(l.user_id),item_id:w.value.id,notes:f.value});if(!t.success){console.error("Failed to activate item",t.message),p.value=`Erro ao ativar item: ${t.message}`;return}}catch(m){console.error("Failed to activate item",m),p.value=`Erro interno ao ativar item: ${m==null?void 0:m.toString()}`;return}p.value="Item ativado com sucesso!",R(),E(),g.value=!1,f.value=""},E=()=>{s.setShowActivateDialog(!1),f.value=""},R=async()=>{s.setIsLoading(!0);const m=F(),t=await m.users.findOneUser(parseInt(l.user_id));if(!t.success||!t.result){console.error("Failed to fetch user data");return}if(c.value=t.result,c.value.owned_items.length===0){d.value=[],s.setIsLoading(!1);return}const v=await m.items.getListItems({ids:t.result.owned_items});if(!v.success){console.error("Failed to fetch items data");return}d.value=c.value.owned_items.filter(L=>v.result.findIndex(j=>j.id===L)>-1).map(L=>v.result.find(j=>j.id===L)),s.setIsLoading(!1)};return W(async()=>{s.setIsLoading(!0),l.isAuthenticated||Q().push({name:"login"}),R()}),Y(_,()=>{s.selectedItemIndex>=_.value.length&&s.setSelectedItemIndex(_.value.length-1)}),(m,t)=>(i(),u(D,null,[a("div",{class:n(e(r)(`
        relative
        flex flex-col justify-between items-center
        size-full
        bg-black
      `)),style:S({backgroundImage:`url(${e(ue)})`})},[b.value?(i(),u("a",me,t[5]||(t[5]=[a("i",{class:"pi pi-cog"},null,-1)]))):H("",!0),a("a",{href:"#",class:"z-20 fixed top-8 right-8 flex items-center justify-center size-12 rounded-lg text-black bg-[#f0330b] hover:bg-[#f0330b]/80",title:"Sair",onClick:t[0]||(t[0]=(...v)=>e(l).logout&&e(l).logout(...v))},t[6]||(t[6]=[a("i",{class:"pi pi-power-off"},null,-1)])),a("div",{class:"z-0 relative w-full max-w-screen-xl h-[30%] bg-cover bg-center bg-no-repeat",style:S({backgroundImage:`url(${e(ce)})`,"box-shadow":"0px 20px 20px 0px black"})},[t[7]||(t[7]=a("div",{class:"absolute bottom-0 w-full h-2/4",style:{background:"linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 1.0))"}},null,-1)),a("div",{class:"size-full bg-cover bg-center bg-no-repeat",style:S({backgroundImage:`url(${e(de)})`})},null,4)],4),a("div",{class:n(e(r)(`
          z-10
          flex
          gap-4
          mb-8
          w-full h-4/6
          max-w-screen-xl
          bg-black
        `)),style:{"box-shadow":"0px 0px 20px 20px rgba(0,0,0,0.75)"}},[k(ie,{items:_.value},null,8,["items"]),k(te,{name:w.value.name,category:w.value.category,description:w.value.description,image_url:w.value.image_url},null,8,["name","category","description","image_url"])],2)],6),k(e(N),{class:"w-[450px]",header:"Aviso",closable:!1,modal:!0,visible:I.value,"onUpdate:visible":t[2]||(t[2]=v=>I.value=v)},{footer:C(()=>[k(e(T),{label:"OK",icon:"pi pi-check",onClick:t[1]||(t[1]=v=>p.value="")})]),default:C(()=>[a("div",pe,[a("span",null,$(p.value),1)])]),_:1},8,["visible"]),k(e(N),{class:"w-[450px]",header:B.value,closable:!1,modal:!0,visible:x.value,"onUpdate:visible":t[4]||(t[4]=v=>x.value=v)},J({default:C(()=>[g.value?(i(),u("div",fe,t[8]||(t[8]=[a("i",{class:"pi pi-spin pi-spinner"},null,-1)]))):(i(),u("div",ve,[t[9]||(t[9]=a("i",null," Tem certeza de que deseja ativar este item? Esta ação não pode ser desfeita. ",-1)),k(e(X),{placeholder:"Se necessário, escreva aqui detalhes da ativação (para especificar um personagem, por exemplo).",fluid:"",modelValue:f.value,"onUpdate:modelValue":t[3]||(t[3]=v=>f.value=v)},null,8,["modelValue"])]))]),_:2},[g.value?void 0:{name:"footer",fn:C(()=>[k(e(T),{label:"Confirmar",icon:"pi pi-check",onClick:G}),k(e(T),{label:"Cancelar",icon:"pi pi-times",text:"",onClick:E})]),key:"0"}]),1032,["header","visible"])],64))}});export{ke as default};
