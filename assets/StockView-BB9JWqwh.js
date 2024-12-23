import{d as A,c as u,K as M,n,e,h as i,i as r,av as U,a,D as S,z as $,F as D,L as j,b as y,w as C,f as P,s as k,t as h,O as K,u as Z,o as W,x as Y,p as H,y as J,q as F,g as Q}from"./index-tp0nBNZk.js";import{a as V,b as N}from"./index-qJ7m-cQz.js";import{s as X}from"./index-Bd0xhCYp.js";const O=["Armamentos","Autômatos","Akuma no Mi","Consumíveis","Criaturas","Cômodos","Diversos","Equipamentos","Transportes","Receitas","Permissões","Profissões"],ee=A({__name:"Button",props:{class:{}},setup(l){const o=l;return(s,c)=>(i(),u("button",{class:n(e(r)(`
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
        `,o.class))},[M(s.$slots,"default")],2))}}),q=["armamento","automato","akuma_no_mi","consumivel","criatura","comodo","diverso","equipamento","transporte","receita","permissao","profissao"],L=U("stock",{state:()=>({isLoading:!1,selectedItemIndex:0,selectedCategory:null,showActivateDialog:!1}),actions:{setIsLoading(l){this.isLoading=l},setSelectedItemIndex(l){this.selectedItemIndex=l},setSelectedCategory(l){if(l<0||l>=q.length){this.selectedCategory=null;return}this.selectedCategory=q[l]},setShowActivateDialog(l){this.showActivateDialog=l}}}),te=A({__name:"ItemDisplay",props:{name:{},category:{},description:{},image_url:{}},setup(l){const o=L(),s=()=>{o.setShowActivateDialog(!0)};return(c,d)=>(i(),u("div",{class:n(e(r)(`
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
          `))},[(i(!0),u(D,null,j(c.description.split(`
`),f=>(i(),u("p",null,$(f),1))),256))],2),y(ee,{class:"mt-auto",onClick:s},{default:C(()=>d[0]||(d[0]=[P("Ativar Item")])),_:1})],2)],2))}}),se=A({__name:"GridItem",props:{idx:{},data:{}},setup(l){const o=l,s=L(),c=k(null),d=h(()=>s.selectedItemIndex===o.idx),f=()=>{var v;(v=c.value)==null||v.scrollIntoView({behavior:"smooth",block:"center"}),s.setSelectedItemIndex(o.idx)};return(v,p)=>(i(),u("div",{ref_key:"$el",ref:c,class:n(["GridItem",e(r)(`
        flex flex-col
        border-white/20 border-4
        aspect-square
        cursor-pointer
        transition-all duration-200

        hover:border-transparent
        hover:bg-transparent

        ${d.value?"selected":""}
      `)]),onClick:f},[a("div",{class:n(["image",e(r)(`
          aspect-square
          bg-center bg-no-repeat
        `)]),style:S({"background-image":`url(${o.data.image_url})`,"background-size":"80% 80%"})},null,6)],2))}}),ae=(l,o)=>{const s=l.__vccOpts||l;for(const[c,d]of o)s[c]=d;return s},le=ae(se,[["__scopeId","data-v-2ba78e40"]]),oe=["onClick"],ne={key:0,class:"flex items-center justify-center h-full bg-black/60"},re={key:1,class:"flex items-center justify-center gap-3 h-full bg-black/60"},ie=A({__name:"ItemGrid",props:{items:{}},setup(l){const o=L(),s=k(!1),c=k(-1),d=h(()=>o.selectedCategory),f=h(()=>d.value===null?"Todos os Itens":O[c.value]),v=p=>{o.setSelectedCategory(p),c.value=p,s.value=!1};return(p,g)=>(i(),u("div",{class:n(e(r)(`
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
            `)),role:"combobox","aria-label":"select button","aria-haspopup":"listbox","aria-expanded":"false","aria-controls":"select-dropdown",onClick:g[0]||(g[0]=I=>s.value=!s.value)},$(f.value),3),a("ul",{class:n(e(r)(`
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
              `)),role:"option",onClick:g[1]||(g[1]=()=>v(-1))}," Todos os Itens ",2),(i(!0),u(D,null,j(e(q),(I,x)=>(i(),u("li",{key:x,class:n(e(r)(`
                px-2 py-1
                rounded-md
                cursor-pointer
                select-none
                text-black

                hover:font-bold
                hover:text-[#e71e1d] hover:bg-black

                ${d.value===I&&"font-bold text-[#e71e1d] bg-black"}
              `)),role:"option",onClick:()=>v(x)},$(e(O)[x]),11,oe))),128))],2)],2)],2),a("div",{class:n(e(r)(`
          p-3
          rounded-tr-3xl rounded-b-3xl
          h-[calc(100%-2.75rem)]
          bg-[#e71e1d]/30
        `))},[p.items.length===0&&!e(o).isLoading?(i(),u("div",ne,g[2]||(g[2]=[a("i",null,"Nenhum item encontrado.",-1)]))):e(o).isLoading?(i(),u("div",re,g[3]||(g[3]=[a("i",{class:"pi pi-spin pi-spinner"},null,-1),a("i",null,"Carregando...",-1)]))):(i(),u("div",{key:2,class:n(e(r)(`
            grid grid-cols-5 content-start
            p-3 gap-2
            rounded-xl
            h-full
            bg-black/60
            overflow-y-auto
          `))},[(i(!0),u(D,null,j(p.items,(I,x)=>(i(),K(le,{key:x,idx:x,data:I},null,8,["idx","data"]))),128))],2))],2)],2))}}),ce="/assets/banner-VNM4M5uZ.png",ue="/assets/pattern-DVRZsIF5.png",de="/assets/title-DEpCl2WS.png",me={key:0,href:"/admin",class:"z-20 fixed bottom-3 right-3 flex items-center justify-center size-12 rounded-lg text-black bg-white hover:bg-white/80",title:"Painel do Admin"},pe={class:"flex items-center justify-center w-full"},ve={key:0,class:"flex items-center justify-center w-full aspect-square"},fe={key:1,class:"flex flex-col gap-6"},ye=A({__name:"StockView",setup(l){const o=Z(),s=L(),c=k(null),d=k([]),f=k(!1),v=k(""),p=k(""),g=h(()=>o.isStaff),I=h(()=>p.value!==""),x=h(()=>s.showActivateDialog),B=h(()=>{const m=s.selectedItemIndex,t=_.value[m];return t?`Ativar ${t.name}`:"Ativar Item"}),_=h(()=>s.selectedCategory===null?d.value:d.value.filter(m=>m.category===s.selectedCategory)),w=h(()=>_.value[s.selectedItemIndex]||{name:"",category:"",description:"",image_url:""}),G=async()=>{f.value=!0;try{const m=F();console.log("activating item with id",w.value.id,": ",w.value.name);const t=await m.items.activateItem({user_id:parseInt(o.user_id),item_id:w.value.id,notes:v.value});if(!t.success){console.error("Failed to activate item",t.message),p.value=`Erro ao ativar item: ${t.message}`;return}}catch(m){console.error("Failed to activate item",m),p.value=`Erro interno ao ativar item: ${m==null?void 0:m.toString()}`;return}p.value="Item ativado com sucesso!",R(),E(),f.value=!1,v.value=""},E=()=>{s.setShowActivateDialog(!1),v.value=""},R=async()=>{s.setIsLoading(!0);const m=F(),t=await m.users.findOneUser(parseInt(o.user_id));if(!t.success||!t.result){console.error("Failed to fetch user data");return}if(c.value=t.result,c.value.owned_items.length===0){d.value=[],s.setIsLoading(!1);return}const b=await m.items.getListItems({ids:t.result.owned_items});if(!b.success){console.error("Failed to fetch items data");return}d.value=c.value.owned_items.filter(z=>b.result.findIndex(T=>T.id===z)>-1).map(z=>b.result.find(T=>T.id===z)),s.setIsLoading(!1)};return W(async()=>{s.setIsLoading(!0),o.isAuthenticated||Q().push({name:"login"}),R()}),Y(_,()=>{s.selectedItemIndex>=_.value.length&&s.setSelectedItemIndex(_.value.length-1)}),(m,t)=>(i(),u(D,null,[a("div",{class:n(e(r)(`
        relative
        flex flex-col justify-between items-center
        size-full
        bg-[#060606]
      `)),style:S({backgroundImage:`url(${e(ue)})`})},[g.value?(i(),u("a",me,t[4]||(t[4]=[a("i",{class:"pi pi-cog"},null,-1)]))):H("",!0),a("div",{class:"z-0 relative w-full max-w-screen-xl h-[30%] bg-cover bg-center bg-no-repeat",style:S({backgroundImage:`url(${e(ce)})`,"box-shadow":"0px 20px 20px 0px black"})},[t[5]||(t[5]=a("div",{class:"absolute bottom-0 w-full h-2/4",style:{background:"linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 1.0))"}},null,-1)),a("div",{class:"size-full bg-cover bg-center bg-no-repeat",style:S({backgroundImage:`url(${e(de)})`})},null,4)],4),a("div",{class:n(e(r)(`
          z-10
          flex
          gap-4
          mb-8
          w-full h-4/6
          max-w-screen-xl
          bg-[#060606]
        `)),style:{"box-shadow":"0px 0px 20px 20px rgba(0,0,0,0.75)"}},[y(ie,{items:_.value},null,8,["items"]),y(te,{name:w.value.name,category:w.value.category,description:w.value.description,image_url:w.value.image_url},null,8,["name","category","description","image_url"])],2)],6),y(e(N),{class:"w-[450px]",header:"Aviso",closable:!1,modal:!0,visible:I.value,"onUpdate:visible":t[1]||(t[1]=b=>I.value=b)},{footer:C(()=>[y(e(V),{label:"OK",icon:"pi pi-check",onClick:t[0]||(t[0]=b=>p.value="")})]),default:C(()=>[a("div",pe,[a("span",null,$(p.value),1)])]),_:1},8,["visible"]),y(e(N),{class:"w-[450px]",header:B.value,closable:!1,modal:!0,visible:x.value,"onUpdate:visible":t[3]||(t[3]=b=>x.value=b)},J({default:C(()=>[f.value?(i(),u("div",ve,t[6]||(t[6]=[a("i",{class:"pi pi-spin pi-spinner"},null,-1)]))):(i(),u("div",fe,[t[7]||(t[7]=a("i",null," Tem certeza de que deseja ativar este item? Esta ação não pode ser desfeita. ",-1)),y(e(X),{placeholder:"Se necessário, escreva aqui detalhes da ativação (para especificar um personagem, por exemplo).",fluid:"",modelValue:v.value,"onUpdate:modelValue":t[2]||(t[2]=b=>v.value=b)},null,8,["modelValue"])]))]),_:2},[f.value?void 0:{name:"footer",fn:C(()=>[y(e(V),{label:"Confirmar",icon:"pi pi-check",onClick:G}),y(e(V),{label:"Cancelar",icon:"pi pi-times",text:"",onClick:E})]),key:"0"}]),1032,["header","visible"])],64))}});export{ye as default};
