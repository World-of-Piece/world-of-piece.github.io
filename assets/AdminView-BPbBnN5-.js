import{d,u as x,o as g,c as w,a as s,b as i,w as m,n as o,e,f as r,g as b,r as p,h,i as l}from"./index-NKYrk6m7.js";const C=d({__name:"AdminView",setup(v){const a=b(),n=x();return g(()=>{(!n.isAuthenticated||!n.isStaff)&&(console.log("Not authenticated or not staff"),a.push({name:"login"}))}),(_,t)=>{const u=p("router-link"),c=p("router-view");return h(),w("div",{class:o(e(l)(`
        flex items-center
        size-full
        bg-[#060606]
      `))},[s("div",{class:o(e(l)(`
          flex flex-col items-center
          p-3 gap-3
          w-1/5 h-full
          min-w-[200px] max-w-[300px]
          bg-[#27272a]
        `))},[i(u,{to:{name:"admin-users"},class:o(e(l)(`
            flex items-center
            px-4 py-2 gap-3
            rounded-xl
            w-full
            ${e(a).currentRoute.value.name==="admin-users"?"text-black bg-white":"text-white bg-[#333]"}

            hover:bg-white/50
          `))},{default:m(()=>t[1]||(t[1]=[s("i",{class:"pi pi-users"},null,-1),r(" Usuários ")])),_:1},8,["class"]),i(u,{to:{name:"admin-items"},class:o(e(l)(`
            flex items-center
            px-4 py-2 gap-3
            rounded-xl
            w-full
            ${e(a).currentRoute.value.name==="admin-items"?"text-black bg-white":"text-white bg-[#333]"}

            hover:bg-white/50
          `))},{default:m(()=>t[2]||(t[2]=[s("i",{class:"pi pi-box"},null,-1),r(" Itens ")])),_:1},8,["class"]),s("a",{href:"#",onClick:t[0]||(t[0]=(...f)=>e(n).logout&&e(n).logout(...f)),class:o(e(l)(`
            flex items-center
            mt-auto px-4 py-2 gap-3
            rounded-xl
            w-full
            text-white bg-red-800

            hover:bg-red-700/50
          `))},t[3]||(t[3]=[s("i",{class:"pi pi-sign-out"},null,-1),r(" Sair ")]),2)],2),s("div",{class:o(e(l)(`
          flex items-center
          size-full
        `))},[i(c)],2)],2)}}});export{C as default};
