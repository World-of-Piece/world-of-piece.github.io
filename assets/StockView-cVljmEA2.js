import{d as A,c as m,K as N,n as o,e,h as c,i as n,av as M,a,D as S,z as $,F as D,L as E,b as x,w as C,f as U,s as k,t as h,O as P,u as K,o as Z,x as W,y as Y,q as F,g as H}from"./index-BQJKxePs.js";import{a as q,b as O}from"./index-CqMLXgxX.js";import{s as J}from"./index-BfISoU6R.js";const B=["Armamentos","Autômatos","Akuma no Mi","Consumíveis","Criaturas","Cômodos","Diversos","Equipamentos","Transportes","Receitas","Permissões","Profissões"],Q=A({__name:"Button",props:{class:{}},setup(l){const r=l;return(t,i)=>(c(),m("button",{class:o(e(n)(`
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
        `,r.class))},[N(t.$slots,"default")],2))}}),R=["armamento","automato","akuma_no_mi","consumivel","criatura","comodo","diverso","equipamento","transporte","receita","permissao","profissao"],L=M("stock",{state:()=>({isLoading:!1,selectedItemIndex:0,selectedCategory:null,showActivateDialog:!1}),actions:{setIsLoading(l){this.isLoading=l},setSelectedItemIndex(l){this.selectedItemIndex=l},setSelectedCategory(l){if(l<0||l>=R.length){this.selectedCategory=null;return}this.selectedCategory=R[l]},setShowActivateDialog(l){this.showActivateDialog=l}}}),X=A({__name:"ItemDisplay",props:{name:{},category:{},description:{},image_url:{}},setup(l){const r=L(),t=()=>{r.setShowActivateDialog(!0)};return(i,u)=>(c(),m("div",{class:o(e(n)(`
        p-3
        rounded-3xl
        w-2/5 h-full
        bg-[#e71e1d]/30
      `))},[a("div",{class:o(e(n)(`
          flex flex-col items-center
          p-5 gap-3
          rounded-xl
          size-full
          bg-black/60
        `))},[a("div",{class:o(e(n)(`
            flex-shrink-0
            mt-4
            w-[70%] aspect-square
            bg-contain bg-center bg-no-repeat
          `)),style:S({"background-image":`url(${i.image_url||""})`})},null,6),a("h1",{class:o(e(n)(`
            flex-shrink-0
            mt-2
            font-inknut text-2xl font-black
            text-center
            w-full
            text-[#e71e1d]
          `))},$(i.name),3),a("div",{class:o(e(n)(`
            flex-shrink
            flex flex-col
            px-3 gap-1
            font-noto-sans text-xs text-justify
            w-full
            text-white
            overflow-y-auto
          `))},[(c(!0),m(D,null,E(i.description.split(`
`),g=>(c(),m("p",null,$(g),1))),256))],2),x(Q,{class:"mt-auto",onClick:t},{default:C(()=>u[0]||(u[0]=[U("Ativar Item")])),_:1})],2)],2))}}),ee=A({__name:"GridItem",props:{idx:{},data:{}},setup(l){const r=l,t=L(),i=k(null),u=h(()=>t.selectedItemIndex===r.idx),g=()=>{var v;(v=i.value)==null||v.scrollIntoView({behavior:"smooth",block:"center"}),t.setSelectedItemIndex(r.idx)};return(v,p)=>(c(),m("div",{ref_key:"$el",ref:i,class:o(["GridItem",e(n)(`
        flex flex-col
        border-white/20 border-4
        aspect-square
        cursor-pointer
        transition-all duration-200

        hover:border-transparent
        hover:bg-transparent

        ${u.value?"selected":""}
      `)]),onClick:g},[a("div",{class:o(["image",e(n)(`
          aspect-square
          bg-center bg-no-repeat
        `)]),style:S({"background-image":`url(${r.data.image_url})`,"background-size":"80% 80%"})},null,6)],2))}}),te=(l,r)=>{const t=l.__vccOpts||l;for(const[i,u]of r)t[i]=u;return t},se=te(ee,[["__scopeId","data-v-2ba78e40"]]),ae=["onClick"],le={key:0,class:"flex items-center justify-center h-full bg-black/60"},oe={key:1,class:"flex items-center justify-center gap-3 h-full bg-black/60"},ne=A({__name:"ItemGrid",props:{items:{}},setup(l){const r=L(),t=k(!1),i=k(-1),u=h(()=>r.selectedCategory),g=h(()=>u.value===null?"Todos os Itens":B[i.value]),v=p=>{r.setSelectedCategory(p),i.value=p,t.value=!1};return(p,f)=>(c(),m("div",{class:o(e(n)(`
        flex flex-col
        size-full
      `))},[a("div",{class:o(e(n)(`
          p-3 pb-0
          rounded-t-3xl
          w-fit h-11
          bg-[#e71e1d]/30
        `))},[a("div",{class:o(e(n)(`
            relative
            font-noto-sans text-sm
            font-medium
          `))},[a("button",{class:o(e(n)(`
              flex items-center justify-center
              px-5 py-1
              rounded-full
              text-black bg-[#e71e1d]
              w-40
              transition-all duration-200
              cursor-pointer

              hover:bg-[#e71e1d]/80
            `)),role:"combobox","aria-label":"select button","aria-haspopup":"listbox","aria-expanded":"false","aria-controls":"select-dropdown",onClick:f[0]||(f[0]=I=>t.value=!t.value)},$(g.value),3),a("ul",{class:o(e(n)(`
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

              ${t.value&&"scale-y-100 opacity-100"}
            `)),role:"listbox",id:"select-dropdown"},[a("li",{class:o(e(n)(`
                px-2 py-1
                rounded-md
                cursor-pointer
                select-none

                hover:font-bold
                hover:text-[#e71e1d] hover:bg-black

                ${u.value===null&&"font-bold text-[#e71e1d] bg-black"}
              `)),role:"option",onClick:f[1]||(f[1]=()=>v(-1))}," Todos os Itens ",2),(c(!0),m(D,null,E(e(R),(I,y)=>(c(),m("li",{key:y,class:o(e(n)(`
                px-2 py-1
                rounded-md
                cursor-pointer
                select-none
                text-black

                hover:font-bold
                hover:text-[#e71e1d] hover:bg-black

                ${u.value===I&&"font-bold text-[#e71e1d] bg-black"}
              `)),role:"option",onClick:()=>v(y)},$(e(B)[y]),11,ae))),128))],2)],2)],2),a("div",{class:o(e(n)(`
          p-3
          rounded-tr-3xl rounded-b-3xl
          h-[calc(100%-2.75rem)]
          bg-[#e71e1d]/30
        `))},[p.items.length===0&&!e(r).isLoading?(c(),m("div",le,f[2]||(f[2]=[a("i",null,"Nenhum item encontrado.",-1)]))):e(r).isLoading?(c(),m("div",oe,f[3]||(f[3]=[a("i",{class:"pi pi-spin pi-spinner"},null,-1),a("i",null,"Carregando...",-1)]))):(c(),m("div",{key:2,class:o(e(n)(`
            grid grid-cols-5 content-start
            p-3 gap-2
            rounded-xl
            h-full
            bg-black/60
            overflow-y-auto
          `))},[(c(!0),m(D,null,E(p.items,(I,y)=>(c(),P(se,{key:y,idx:y,data:I},null,8,["idx","data"]))),128))],2))],2)],2))}}),re="/assets/banner-VNM4M5uZ.png",ie="/assets/pattern-DVRZsIF5.png",ce="/assets/title-DEpCl2WS.png",ue={class:"flex items-center justify-center w-full"},de={key:0,class:"flex items-center justify-center w-full aspect-square"},me={key:1,class:"flex flex-col gap-6"},ge=A({__name:"StockView",setup(l){const r=K(),t=L(),i=k(null),u=k([]),g=k(!1),v=k(""),p=k(""),f=h(()=>p.value!==""),I=h(()=>t.showActivateDialog),y=h(()=>{const d=t.selectedItemIndex,s=_.value[d];return s?`Ativar ${s.name}`:"Ativar Item"}),_=h(()=>t.selectedCategory===null?u.value:u.value.filter(d=>d.category===t.selectedCategory)),w=h(()=>_.value[t.selectedItemIndex]||{name:"",category:"",description:"",image_url:""}),G=async()=>{g.value=!0;try{const d=F();console.log("activating item with id",w.value.id,": ",w.value.name);const s=await d.items.activateItem({user_id:parseInt(r.user_id),item_id:w.value.id,notes:v.value});if(!s.success){console.error("Failed to activate item",s.message),p.value=`Erro ao ativar item: ${s.message}`;return}}catch(d){console.error("Failed to activate item",d),p.value=`Erro interno ao ativar item: ${d==null?void 0:d.toString()}`;return}p.value="Item ativado com sucesso!",j(),V(),g.value=!1,v.value=""},V=()=>{t.setShowActivateDialog(!1),v.value=""},j=async()=>{t.setIsLoading(!0);const d=F(),s=await d.users.findOneUser(parseInt(r.user_id));if(!s.success||!s.result){console.error("Failed to fetch user data");return}if(i.value=s.result,i.value.owned_items.length===0){u.value=[],t.setIsLoading(!1);return}const b=await d.items.getListItems({ids:s.result.owned_items});if(!b.success){console.error("Failed to fetch items data");return}u.value=i.value.owned_items.filter(z=>b.result.findIndex(T=>T.id===z)>-1).map(z=>b.result.find(T=>T.id===z)),t.setIsLoading(!1)};return Z(async()=>{t.setIsLoading(!0),r.isAuthenticated||H().push({name:"login"}),j()}),W(_,()=>{t.selectedItemIndex>=_.value.length&&t.setSelectedItemIndex(_.value.length-1)}),(d,s)=>(c(),m(D,null,[a("div",{class:o(e(n)(`
        flex flex-col justify-between items-center
        size-full
        bg-[#060606]
      `)),style:S({backgroundImage:`url(${e(ie)})`})},[a("div",{class:"z-0 relative w-full max-w-screen-xl h-[30%] bg-cover bg-center bg-no-repeat",style:S({backgroundImage:`url(${e(re)})`,"box-shadow":"0px 20px 20px 0px black"})},[s[4]||(s[4]=a("div",{class:"absolute bottom-0 w-full h-2/4",style:{background:"linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 1.0))"}},null,-1)),a("div",{class:"size-full bg-cover bg-center bg-no-repeat",style:S({backgroundImage:`url(${e(ce)})`})},null,4)],4),a("div",{class:o(e(n)(`
          z-10
          flex
          gap-4
          mb-8
          w-full h-4/6
          max-w-screen-xl
          bg-[#060606]
        `)),style:{"box-shadow":"0px 0px 20px 20px rgba(0,0,0,0.75)"}},[x(ne,{items:_.value},null,8,["items"]),x(X,{name:w.value.name,category:w.value.category,description:w.value.description,image_url:w.value.image_url},null,8,["name","category","description","image_url"])],2)],6),x(e(O),{class:"w-[450px]",header:"Aviso",closable:!1,modal:!0,visible:f.value,"onUpdate:visible":s[1]||(s[1]=b=>f.value=b)},{footer:C(()=>[x(e(q),{label:"OK",icon:"pi pi-check",onClick:s[0]||(s[0]=b=>p.value="")})]),default:C(()=>[a("div",ue,[a("span",null,$(p.value),1)])]),_:1},8,["visible"]),x(e(O),{class:"w-[450px]",header:y.value,closable:!1,modal:!0,visible:I.value,"onUpdate:visible":s[3]||(s[3]=b=>I.value=b)},Y({default:C(()=>[g.value?(c(),m("div",de,s[5]||(s[5]=[a("i",{class:"pi pi-spin pi-spinner"},null,-1)]))):(c(),m("div",me,[s[6]||(s[6]=a("i",null," Tem certeza de que deseja ativar este item? Esta ação não pode ser desfeita. ",-1)),x(e(J),{placeholder:"Se necessário, escreva aqui detalhes da ativação (para especificar um personagem, por exemplo).",fluid:"",modelValue:v.value,"onUpdate:modelValue":s[2]||(s[2]=b=>v.value=b)},null,8,["modelValue"])]))]),_:2},[g.value?void 0:{name:"footer",fn:C(()=>[x(e(q),{label:"Confirmar",icon:"pi pi-check",onClick:G}),x(e(q),{label:"Cancelar",icon:"pi pi-times",text:"",onClick:V})]),key:"0"}]),1032,["header","visible"])],64))}});export{ge as default};
