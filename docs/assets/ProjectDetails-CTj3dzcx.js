import{u as i,f as r,j as e,a as p}from"./index-Bow_T6ex.js";import{H as x}from"./index-7D8SVgS6.js";const d="_wrapper_1cxsd_1",u="_label_1cxsd_15",m="_input_1cxsd_25",h="_content_1cxsd_34",j="_title_1cxsd_38",b="_bg_1cxsd_42",N="_iconButton_1cxsd_52",_="_icon_1cxsd_52",s={wrapper:d,label:u,input:m,content:h,title:j,bg:b,iconButton:N,icon:_};function g({title:a,id:c}){var n;const{data:t}=i(`https://smart-splendor-b3ed527c30.strapiapp.com/api/project-page?populate=${a}.img`,r);if(!t)return;const l=(n=t==null?void 0:t.data)==null?void 0:n[a].find(o=>+o.id==+c);return e.jsx("section",{className:s.projectInfo+" section",children:e.jsxs("div",{className:s.container+" container",children:[e.jsxs("div",{className:s.wrapper,children:[e.jsxs("ul",{className:s.list+" list-reset",children:[e.jsx("li",{className:s.item,children:e.jsxs("label",{className:s.label,children:["Client",e.jsx("input",{className:s.input+" input-reset",type:"text",placeholder:"Your client name"})]})}),e.jsx("li",{className:s.item,children:e.jsxs("label",{className:s.label,children:["Category",e.jsx("input",{className:s.input+" input-reset",type:"text",placeholder:"VIP"})]})}),e.jsx("li",{className:s.item,children:e.jsxs("label",{className:s.label,children:["Tags",e.jsx("input",{className:s.input+" input-reset",type:"text",placeholder:"VIP, Home"})]})}),e.jsx("li",{className:s.item,children:e.jsxs("label",{className:s.label,children:["Date",e.jsx("input",{className:s.input+" input-reset",type:"text",placeholder:"Date 23,02, 2022"})]})}),e.jsx("li",{className:s.item,children:e.jsxs("label",{className:s.label,children:["Link",e.jsx("input",{className:s.input+" input-reset",type:"url",placeholder:"Link example.com"})]})})]}),e.jsxs("div",{className:s.content,children:[e.jsx("h2",{className:s.title+" blackTitle",children:l==null?void 0:l.title}),e.jsx("p",{className:s.text+" blackText",children:l==null?void 0:l.text})]})]}),e.jsx("div",{className:s.bg,style:{backgroundImage:`url(${l==null?void 0:l.img.url})`},children:e.jsx("button",{className:s.iconButton+" button-reset",type:"button",children:e.jsx("svg",{className:s.icon,children:e.jsx("use",{xlinkHref:"/img/svg/sprite.svg#search"})})})})]})})}function k(){const{title:a,id:c}=p(),{data:t}=i("http://localhost:3000/projectDetails",r);return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:t==null?void 0:t.title,background:t==null?void 0:t.background}),e.jsx(g,{title:a,id:c})]})}export{k as default};
