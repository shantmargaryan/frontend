import{j as s,u as l,f as r,r as m}from"./index-Bow_T6ex.js";import{b as x}from"./index-DuX66PFr.js";/* empty css             */const _="_item_11bo8_1",h="_img_11bo8_7",u="_iconBox_11bo8_12",p="_name_11bo8_19",d="_country_11bo8_26",e={item:_,img:h,iconBox:u,name:p,country:d};function j({img:o="",name:t="",country:c="",text:n=""}){return s.jsxs("li",{className:e.item,children:[s.jsxs("div",{className:e.iconBox,children:[s.jsx(x.LazyLoadImage,{className:e.img+" img",src:o,alt:t,effect:"blur",wrapperProps:{style:{transitionDelay:"300ms"}}}),s.jsxs("div",{className:e.nameBox,children:[s.jsx("span",{className:e.name,children:t}),s.jsx("span",{className:e.country,children:c})]})]}),s.jsx("p",{className:e.text+" blackText",children:n})]})}const b="_container_4he6a_1",N="_titleBox_4he6a_8",g="_title_4he6a_8",y="_list_4he6a_19",i={container:b,titleBox:N,title:g,list:y};function E(){var c,n;const{data:o}=l("http://localhost:1337/api/home-page?populate=aboutUs.aboutUsItems.img",r),t=(c=o==null?void 0:o.data)==null?void 0:c.aboutUs;return s.jsx("section",{className:i.about+" section",children:s.jsxs("div",{className:i.container+" container",children:[s.jsx("div",{className:i.titleBox,children:s.jsx("h3",{className:i.title+" title",children:t==null?void 0:t.title})}),s.jsx("ul",{className:i.list+" list-reset",children:(n=t==null?void 0:t.aboutUsItems)==null?void 0:n.map(a=>m.createElement(j,{...a,img:a.img.url,key:a.id}))})]})})}export{E as A};
