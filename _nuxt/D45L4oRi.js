import{d,z as m,D as f,ap as b,ae as g,c as x,ai as v,w as n,h as o,E as e,bd as y,n as s,f as _,t as i,be as h,bf as C,af as S,ab as k}from"./dYYSBBpr.js";import"./CtCqOGNl.js";import{r as w}from"./ByvZhaXA.js";import"./BneCoJRQ.js";const z=d({__name:"Collapsible",props:{name:{type:String,default:"properties"},openText:{type:String,default:"Show"},closeText:{type:String,default:"Hide"}},setup(a){const c=m(),l=f(()=>({button:{base:"flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{name:c.ui.icons.chevron,base:"w-4 h-4 transform transition-transform duration-200",active:"",inactive:"-rotate-90"}},panel:"mt-4 ml-2 py-2.5 pl-4 border-l border-gray-200 dark:border-gray-800 [&>div]:!mt-0"})),{ui:t}=b("content.collapsible",void 0,l,void 0,!0);return g(()=>S("$IO7FKPou4A")),(p,I)=>{const u=k;return x(),v(e(C),{as:"div"},{default:n(({open:r})=>[o(e(y),{class:s(e(t).button.base)},{default:n(()=>[o(u,{name:e(t).button.icon.name,class:s([e(t).button.icon.base,r?e(t).button.icon.active:e(t).button.icon.inactive])},null,8,["name","class"]),_("span",null,i(r?a.closeText:a.openText)+" "+i(a.name),1)]),_:2},1032,["class"]),o(e(h),{class:s(e(t).panel)},{default:n(()=>[w(p.$slots,"default",{unwrap:"p"})]),_:3},8,["class"])]),_:3})}}});export{z as default};
