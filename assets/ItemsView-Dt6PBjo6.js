import{d as te,s as r,t as ie,v as oe,x as se,c as m,a as t,b as i,y as R,w as u,n as q,e as a,F as ue,h as v,f as re,z as S,i as M,p as f,D as H,A as j,C as K,q as A}from"./index-tp0nBNZk.js";import{a as c,b as D}from"./index-qJ7m-cQz.js";import{s as ne,a as de,b,c as me,d as x,e as Q,f as L,g as ve}from"./index-NDMN7G6_.js";import{s as W}from"./index-Bd0xhCYp.js";const ce={class:"flex justify-between gap-4 p-2"},pe=["src"],fe=["title"],be={class:"flex items-center justify-center w-full"},ge={class:"flex items-center justify-center w-full"},ye={key:0,class:"flex items-center justify-center w-full aspect-square"},ke={key:1,class:"flex flex-col gap-6"},we={key:0,class:"text-red-500"},xe={key:0,class:"text-red-500"},Ve={class:"flex items-center gap-2"},Ie={key:0,class:"text-red-500"},Ce={class:"mt-6"},_e={key:0,class:"flex items-center justify-center w-full aspect-square"},Ue={key:1,class:"flex flex-col gap-6"},$e={key:0,class:"text-red-500"},Ne={key:0,class:"text-red-500"},Ee={class:"flex items-center gap-2"},Se={key:0,class:"text-red-500"},Ae={class:"mt-6"},je=te({__name:"ItemsView",setup(De){const V=[{label:"Armamento",value:"armamento"},{label:"Autômato",value:"automato"},{label:"Akuma no Mi",value:"akuma_no_mi"},{label:"Consumível",value:"consumivel"},{label:"Criatura",value:"criatura"},{label:"Cômodo",value:"comodo"},{label:"Diverso",value:"diverso"},{label:"Equipamento",value:"equipamento"},{label:"Transporte",value:"transporte"},{label:"Receita",value:"receita"},{label:"Permissão",value:"permissao"},{label:"Profissão",value:"profissao"}],T={global:{value:null,matchMode:j.CONTAINS},name:{operator:K.AND,constraints:[{value:null,matchMode:j.STARTS_WITH}]},category:{operator:K.AND,constraints:[{value:null,matchMode:j.EQUALS}]}},g=r([]),y=r(T),I=r(0),J=r(["id","name","category"]),F=r(!1),C=r(10),z=r(0),d=r(""),k=r(!1),_=r(!1),s=r({name:"",description:"",category:"armamento",image_url:"",submitted:!1}),U=r(!1),$=r(!1),o=r({id:-1,name:"",description:"",category:"",image_url:"",submitted:!1}),O=ie(()=>d.value!==""),N=r(!1),P=r(""),p=r(null),E=async()=>{F.value=!0;const e=await A().items.getPagedItems({page:I.value/C.value+1,size:C.value});return F.value=!1,e.success?(z.value=e.total,e.result):(console.error("Failed to fetch items",e.message),[])},B=()=>{y.value=T},X=()=>{_.value=!0},h=()=>{_.value=!1,s.value={name:"",description:"",category:"armamento",image_url:"",submitted:!1}},Y=async()=>{if(s.value.submitted=!0,!s.value.name||!s.value.description||!s.value.category||!s.value.image_url)return;k.value=!0;const n=A();try{const e=await n.items.createItem({name:s.value.name,description:s.value.description,category:s.value.category,image_url:s.value.image_url});!e.success||!e.id?(console.error("Failed to create item",e.message),d.value=`Erro ao criar item: ${e.message}`):(d.value="Item criado com sucesso!",g.value=await E())}catch(e){console.error("Failed to create item",e),k.value=!1,d.value=`Erro interno ao criar item: ${e==null?void 0:e.toString()}`;return}h(),k.value=!1,s.value={name:"",description:"",category:"armamento",image_url:"",submitted:!1}},Z=n=>{o.value={id:n.id,name:n.name,description:n.description,category:n.category,image_url:n.image_url,submitted:!1},$.value=!0},G=()=>{$.value=!1,o.value={id:-1,name:"",description:"",category:"",image_url:"",submitted:!1}},ee=async()=>{if(o.value.submitted=!0,!o.value.name||!o.value.description||!o.value.category||!o.value.image_url)return;U.value=!0;const n=A();try{const e=await n.items.updateItem({id:o.value.id,name:o.value.name,description:o.value.description,category:o.value.category,image_url:o.value.image_url});e.success?(d.value="Item salvo com sucesso!",g.value=await E()):(console.error("Failed to update item",e.message),d.value=`Erro ao salvar item: ${e.message}`)}catch(e){console.error("Failed to update item",e),d.value=`Erro interno ao salvar item: ${e==null?void 0:e.toString()}`}G(),U.value=!1,o.value={id:-1,name:"",description:"",category:"",image_url:"",submitted:!1}},le=async n=>{if(P.value=`Deseja excluir o item "${n.name}"?`,N.value=!0,await new Promise(e=>{const l=setInterval(()=>{p.value!==null&&(clearInterval(l),e())},100)}),N.value=!1,!p.value){p.value=null;return}p.value=null;try{await A().items.removeItem(n.id),d.value="Item excluído com sucesso!",g.value=await E()}catch(e){console.error("Failed to delete item",e==null?void 0:e.toString()),d.value=`Erro ao excluir item: ${e==null?void 0:e.toString()}`}},ae=n=>{const e=V.find(l=>l.value===n);return e?e.label:"???"};return oe(()=>{B()}),se([I,C],async()=>{console.log("Fetching items..."),g.value=await E(),console.log("Done fetching items")},{immediate:!0}),(n,e)=>(v(),m(ue,null,[t("div",{class:q(a(M)(`
        flex flex-col items-center justify-center
        size-full
      `))},[i(a(ve),{value:g.value,size:"small","data-key":"id","filter-display":"menu","global-filter-fields":J.value,"sort-field":"id","sort-order":1,"table-class":"min-w-[60rem]",class:q(a(M)(`
          p-8
          rounded-xl
          bg-[#18181b]
        `)),filters:y.value,"onUpdate:filters":e[3]||(e[3]=l=>y.value=l)},R({header:u(()=>[t("div",ce,[i(a(c),{label:"Novo Item",icon:"pi pi-plus",onClick:X}),i(a(c),{class:"mr-auto",type:"button",icon:"pi pi-filter-slash",label:"Limpar filtros",outlined:"",onClick:e[0]||(e[0]=l=>B())}),i(a(ne),{class:"ml-auto"},{default:u(()=>[i(a(de),null,{default:u(()=>e[19]||(e[19]=[t("i",{class:"pi pi-search"},null,-1)])),_:1}),i(a(b),{placeholder:"Pesquisar",modelValue:y.value.global.value,"onUpdate:modelValue":e[1]||(e[1]=l=>y.value.global.value=l)},null,8,["modelValue"])]),_:1})])]),footer:u(()=>[i(a(me),{rows:C.value,totalRecords:z.value,first:I.value,"onUpdate:first":e[2]||(e[2]=l=>I.value=l)},null,8,["rows","totalRecords","first"])]),default:u(()=>[i(a(x),{field:"image_url",header:"Imagem"},{body:u(({data:l})=>[t("img",{src:l.image_url,alt:"Imagem",class:"w-12 h-12 object-contain"},null,8,pe)]),_:1}),i(a(x),{field:"name",header:"Nome",sortable:""},{body:u(({data:l})=>[re(S(l.name),1)]),filter:u(({filterModel:l})=>[i(a(b),{type:"text",placeholder:"...",modelValue:l.value,"onUpdate:modelValue":w=>l.value=w},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),i(a(x),{field:"description",header:"Descrição"},{body:u(({data:l})=>[t("span",{title:l.description},S(l.description.length>30?l.description.slice(0,30)+"...":l.description),9,fe)]),_:1}),i(a(x),{field:"category",header:"Categoria",sortable:""},{body:u(({data:l})=>[i(a(Q),{value:ae(l.category),severity:"contrast"},null,8,["value"])]),filter:u(({filterModel:l})=>[i(a(L),{options:V,placeholder:"Selecione uma","option-label":"label","option-value":"value","show-clear":"",modelValue:l.value,"onUpdate:modelValue":w=>l.value=w},{option:u(w=>[i(a(Q),{value:w.option.label,severity:"contrast"},null,8,["value"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),i(a(x),{class:"max-w-52"},{body:u(({data:l})=>[t("div",{class:q(a(M)(`
                flex items-center justify-end
                gap-3
                h-12
              `))},[i(a(c),{type:"button",size:"small",severity:"primary",icon:"pi pi-pencil",label:"Editar",raised:"",onClick:()=>Z(l)},null,8,["onClick"]),i(a(c),{type:"button",size:"small",severity:"danger",icon:"pi pi-trash",label:"Excluir",raised:"",onClick:()=>le(l)},null,8,["onClick"])],2)]),_:1})]),_:2},[F.value?{name:"empty",fn:u(()=>[e[20]||(e[20]=t("div",{class:"flex items-center justify-center gap-2 p-3"},[t("i",{class:"pi pi-spin pi-spinner"}),t("i",null,"Carregando dados...")],-1))]),key:"0"}:{name:"empty",fn:u(()=>[e[21]||(e[21]=t("div",{class:"flex items-center justify-center p-3"},[t("i",null,"Nenhum item encontrado.")],-1))]),key:"1"}]),1032,["value","global-filter-fields","class","filters"])],2),i(a(D),{class:"w-[450px]",header:"Aviso",closable:!1,modal:!0,visible:O.value,"onUpdate:visible":e[5]||(e[5]=l=>O.value=l)},{footer:u(()=>[i(a(c),{label:"OK",icon:"pi pi-check",onClick:e[4]||(e[4]=l=>d.value="")})]),default:u(()=>[t("div",be,[t("span",null,S(d.value),1)])]),_:1},8,["visible"]),i(a(D),{class:"w-[450px]",header:"Confirmação",closable:!1,modal:!0,visible:N.value,"onUpdate:visible":e[8]||(e[8]=l=>N.value=l)},{footer:u(()=>[i(a(c),{label:"Sim",icon:"pi pi-check",onClick:e[6]||(e[6]=l=>p.value=!0)}),i(a(c),{label:"Não",icon:"pi pi-times",text:"",onClick:e[7]||(e[7]=l=>p.value=!1)})]),default:u(()=>[t("div",ge,[t("span",null,S(P.value),1)])]),_:1},8,["visible"]),i(a(D),{class:"w-[450px]",header:"Criar um Novo Item",closable:!1,modal:!0,visible:_.value,"onUpdate:visible":e[13]||(e[13]=l=>_.value=l)},R({default:u(()=>[k.value?(v(),m("div",ye,e[22]||(e[22]=[t("i",{class:"pi pi-spin pi-spinner"},null,-1)]))):(v(),m("div",ke,[t("div",null,[e[23]||(e[23]=t("label",{for:"name",class:"block font-bold mb-3"},"Nome",-1)),i(a(b),{id:"name",required:!0,autofocus:"",invalid:s.value.submitted&&!s.value.name,modelValue:s.value.name,"onUpdate:modelValue":e[9]||(e[9]=l=>s.value.name=l),modelModifiers:{trim:!0},fluid:""},null,8,["invalid","modelValue"]),s.value.submitted&&!s.value.name?(v(),m("small",we," O nome é obrigatório. ")):f("",!0)]),t("div",null,[e[24]||(e[24]=t("label",{for:"description",class:"block font-bold mb-3"}," Descrição ",-1)),i(a(W),{id:"description",required:!0,autofocus:"",invalid:s.value.submitted&&!s.value.description,modelValue:s.value.description,"onUpdate:modelValue":e[10]||(e[10]=l=>s.value.description=l),modelModifiers:{trim:!0},fluid:""},null,8,["invalid","modelValue"]),s.value.submitted&&!s.value.description?(v(),m("small",xe," A descrição é obrigatória. ")):f("",!0)]),t("div",null,[e[25]||(e[25]=t("label",{for:"image_url",class:"block font-bold mb-3"}," URL da Imagem ",-1)),t("div",Ve,[i(a(b),{id:"image_url",required:!0,autofocus:"",invalid:s.value.submitted&&!s.value.image_url,modelValue:s.value.image_url,"onUpdate:modelValue":e[11]||(e[11]=l=>s.value.image_url=l),modelModifiers:{trim:!0},fluid:""},null,8,["invalid","modelValue"]),t("div",{class:"flex-shrink-0 w-12 h-12 bg-center bg-contain bg-no-repeat",style:H({"background-image":`url(${s.value.image_url})`})},null,4)]),s.value.submitted&&!s.value.image_url?(v(),m("small",Ie," O URL da imagem é obrigatório. ")):f("",!0)]),t("div",null,[e[26]||(e[26]=t("label",{for:"category",class:"block font-bold mb-3"},"Categoria",-1)),i(a(L),{id:"category",name:"category",options:V,"option-label":"label","option-value":"value",modelValue:s.value.category,"onUpdate:modelValue":e[12]||(e[12]=l=>s.value.category=l)},null,8,["modelValue"])])]))]),_:2},[k.value?void 0:{name:"footer",fn:u(()=>[t("div",Ce,[i(a(c),{label:"Salvar",icon:"pi pi-check",onClick:Y}),i(a(c),{label:"Cancelar",icon:"pi pi-times",text:"",onClick:h})])]),key:"0"}]),1032,["visible"]),i(a(D),{class:"w-[450px]",header:"Editar Item",closable:!1,modal:!0,visible:$.value,"onUpdate:visible":e[18]||(e[18]=l=>$.value=l)},R({default:u(()=>[U.value?(v(),m("div",_e,e[27]||(e[27]=[t("i",{class:"pi pi-spin pi-spinner"},null,-1)]))):(v(),m("div",Ue,[t("div",null,[e[28]||(e[28]=t("label",{for:"name",class:"block font-bold mb-3"},"Nome",-1)),i(a(b),{id:"name",required:!0,autofocus:"",invalid:o.value.submitted&&!o.value.name,modelValue:o.value.name,"onUpdate:modelValue":e[14]||(e[14]=l=>o.value.name=l),modelModifiers:{trim:!0},fluid:""},null,8,["invalid","modelValue"]),o.value.submitted&&!o.value.name?(v(),m("small",$e," O nome é obrigatório. ")):f("",!0)]),t("div",null,[e[29]||(e[29]=t("label",{for:"description",class:"block font-bold mb-3"}," Descrição ",-1)),i(a(W),{id:"description",required:!0,autofocus:"",invalid:o.value.submitted&&!o.value.description,modelValue:o.value.description,"onUpdate:modelValue":e[15]||(e[15]=l=>o.value.description=l),modelModifiers:{trim:!0},fluid:""},null,8,["invalid","modelValue"]),o.value.submitted&&!o.value.description?(v(),m("small",Ne," A descrição é obrigatória. ")):f("",!0)]),t("div",null,[e[30]||(e[30]=t("label",{for:"image_url",class:"block font-bold mb-3"}," URL da Imagem ",-1)),t("div",Ee,[i(a(b),{id:"image_url",required:!0,autofocus:"",invalid:o.value.submitted&&!o.value.image_url,modelValue:o.value.image_url,"onUpdate:modelValue":e[16]||(e[16]=l=>o.value.image_url=l),modelModifiers:{trim:!0},fluid:""},null,8,["invalid","modelValue"]),t("div",{class:"flex-shrink-0 w-12 h-12 bg-center bg-contain bg-no-repeat",style:H({"background-image":`url(${o.value.image_url})`})},null,4)]),o.value.submitted&&!o.value.image_url?(v(),m("small",Se," O URL da imagem é obrigatório. ")):f("",!0)]),t("div",null,[e[31]||(e[31]=t("label",{for:"category",class:"block font-bold mb-3"},"Categoria",-1)),i(a(L),{id:"category",name:"category",options:V,"option-label":"label","option-value":"value",modelValue:o.value.category,"onUpdate:modelValue":e[17]||(e[17]=l=>o.value.category=l)},null,8,["modelValue"])])]))]),_:2},[U.value?void 0:{name:"footer",fn:u(()=>[t("div",Ae,[i(a(c),{label:"Salvar",icon:"pi pi-check",onClick:ee}),i(a(c),{label:"Cancelar",icon:"pi pi-times",text:"",onClick:G})])]),key:"0"}]),1032,["visible"])],64))}});export{je as default};
