import{u as l,f as r,j as s}from"./index-Bow_T6ex.js";import{H as d}from"./index-7D8SVgS6.js";import{M as a}from"./index-CgMtr9dy.js";import{b as m}from"./index-DuX66PFr.js";/* empty css             */const p="_title_1gspf_1",u="_content_1gspf_6",g="_img_1gspf_18",n={title:p,content:u,img:g};function x(){var i;const{data:e}=l("http://localhost:1337/api/faq?populate=questionAnswered.img,questionAnswered.questionAnsweredTexts",r),t=(i=e==null?void 0:e.data)==null?void 0:i.questionAnswered;return s.jsx("section",{className:n.faqAnswered+" section",children:s.jsxs("div",{className:n.container+" container",children:[s.jsx("h2",{className:n.title+" blackTitle",children:t==null?void 0:t.title}),s.jsxs("div",{className:n.content,children:[s.jsx(a,{posts:t==null?void 0:t.questionAnsweredTexts}),s.jsx(m.LazyLoadImage,{src:t==null?void 0:t.img.url,alt:t==null?void 0:t.img.url,className:n.img+" img",effect:"blur",wrapperProps:{style:{transitionDelay:"300ms"}}})]})]})})}const h="_title_1gspf_1",j="_content_1gspf_6",_="_img_1gspf_18",c={title:h,content:j,img:_};function N(){var i;const{data:e}=l("http://localhost:1337/api/faq?populate=relatedQuestions.img,relatedQuestions.relatedQuestionsTexts",r),t=(i=e==null?void 0:e.data)==null?void 0:i.relatedQuestions;return s.jsx("section",{className:c.faqRelated+" section",children:s.jsxs("div",{className:c.container+" container",children:[s.jsx("h3",{className:c.title+" blackTitle",children:t==null?void 0:t.title}),s.jsxs("div",{className:c.content,children:[s.jsx(m.LazyLoadImage,{className:c.img+" img",src:t==null?void 0:t.img.url,alt:t==null?void 0:t.img.url,effect:"blur",wrapperProps:{style:{transitionDelay:"300ms"}}}),s.jsx(a,{posts:t==null?void 0:t.relatedQuestionsTexts})]})]})})}function k(){var i,o;const{data:e}=l("http://localhost:1337/api/faq?populate=hero.background",r),t=(i=e==null?void 0:e.data)==null?void 0:i.hero;return s.jsxs(s.Fragment,{children:[s.jsx(d,{title:t==null?void 0:t.title,background:(o=t==null?void 0:t.background)==null?void 0:o.url}),s.jsx(x,{}),s.jsx(N,{})]})}export{k as default};
