import{j as m,c as I,r as G,s as we,b as Oe,R as Ee,u as re,f as ae,a as Se}from"./index-Bow_T6ex.js";import{H as De}from"./index-7D8SVgS6.js";import{C as Re}from"./index-BG3_cjAX.js";import{b as je}from"./index-DuX66PFr.js";/* empty css             */import{T as Ae}from"./index-B6u28bP4.js";import{M as Ce}from"./index-CgMtr9dy.js";const Ie="_container_suxpx_1",Be="_title_suxpx_12",Pe="_position_suxpx_16",Ne="_text_suxpx_28",Le="_img_suxpx_32",$={container:Ie,title:Be,position:Pe,text:Ne,img:Le};function ze({name:t="",text:a="",position:i="",img:e=""}){return m.jsx("section",{className:$.teamSigleInfo+" section",children:m.jsxs("div",{className:$.container+" container",children:[m.jsxs("div",{className:$.content,children:[m.jsx("h2",{className:$.title+" blackTitle",children:t}),m.jsx("span",{className:$.position,children:i}),m.jsx("p",{className:$.text+" blackText",children:a}),m.jsx(Re,{})]}),m.jsx(je.LazyLoadImage,{className:$.img+" img",effect:"blur",wrapperProps:{style:{transitionDelay:"300ms"}},src:e,alt:e})]})})}const Fe="_title_87zce_1",Ve="_text_87zce_6",Ue="_content_87zce_10",We="_rangeBox_87zce_22",Xe="_smallTitle_87zce_26",Ke="_smallText_87zce_31",Ye="_accordionBox_87zce_35",$e="_teamList_87zce_41",B={title:Fe,text:Ve,content:Ue,rangeBox:We,smallTitle:Xe,smallText:Ke,accordionBox:Ye,teamList:$e},Ze="_track_111jy_1",qe="_thumb_111jy_5",Ge="_count_111jy_18",He="_position_111jy_28",N={track:Ze,thumb:qe,count:Ge,position:He};var Z={},oe={},se={},H={};Object.defineProperty(H,"__esModule",{value:!0});H.Direction=void 0;var ve;(function(t){t.Right="to right",t.Left="to left",t.Down="to bottom",t.Up="to top"})(ve||(H.Direction=ve={}));(function(t){var a=I&&I.__spreadArray||function(o,s,h){if(h||arguments.length===2)for(var y=0,T=s.length,b;y<T;y++)(b||!(y in s))&&(b||(b=Array.prototype.slice.call(s,0,y)),b[y]=s[y]);return o.concat(b||Array.prototype.slice.call(s))};Object.defineProperty(t,"__esModule",{value:!0}),t.isIOS=t.useThumbOverlap=t.assertUnreachable=t.voidFn=t.getTrackBackground=t.replaceAt=t.schd=t.translate=t.getClosestThumbIndex=t.translateThumbs=t.getPaddingAndBorder=t.getMargin=t.checkInitialOverlap=t.checkValuesAgainstBoundaries=t.checkBoundaries=t.isVertical=t.relativeValue=t.normalizeValue=t.isStepDivisible=t.isTouchEvent=t.getStepDecimals=void 0;var i=G,e=H,n=function(o){var s=o.toString().split(".")[1];return s?s.length:0};t.getStepDecimals=n;function r(o){return o.touches&&o.touches.length||o.changedTouches&&o.changedTouches.length}t.isTouchEvent=r;function u(o,s,h){var y=(s-o)/h,T=8,b=Number(y.toFixed(T));return parseInt(b.toString(),10)===b}t.isStepDivisible=u;function d(o,s,h,y,T,b,M){var _=1e11;if(o=Math.round(o*_)/_,!b){var R=M[s-1],w=M[s+1];if(R&&R>o)return R;if(w&&w<o)return w}if(o>y)return y;if(o<h)return h;var F=Math.floor(o*_-h*_)%Math.floor(T*_),C=Math.floor(o*_-Math.abs(F)),V=F===0?o:C/_,D=Math.abs(F/_)<T/2?V:V+T,U=(0,t.getStepDecimals)(T);return parseFloat(D.toFixed(U))}t.normalizeValue=d;function v(o,s,h){return(o-s)/(h-s)}t.relativeValue=v;function c(o){return o===e.Direction.Up||o===e.Direction.Down}t.isVertical=c;function l(o,s,h){if(s>=h)throw new RangeError("min (".concat(s,") is equal/bigger than max (").concat(h,")"));if(o<s)throw new RangeError("value (".concat(o,") is smaller than min (").concat(s,")"));if(o>h)throw new RangeError("value (".concat(o,") is bigger than max (").concat(h,")"))}t.checkBoundaries=l;function g(o,s,h){return o<s?s:o>h?h:o}t.checkValuesAgainstBoundaries=g;function p(o){if(!(o.length<2)&&!o.slice(1).every(function(s,h){return o[h]<=s}))throw new RangeError("values={[".concat(o,"]} needs to be sorted when allowOverlap={false}"))}t.checkInitialOverlap=p;function x(o){var s=window.getComputedStyle(o);return{top:parseInt(s["margin-top"],10),bottom:parseInt(s["margin-bottom"],10),left:parseInt(s["margin-left"],10),right:parseInt(s["margin-right"],10)}}t.getMargin=x;function f(o){var s=window.getComputedStyle(o);return{top:parseInt(s["padding-top"],10)+parseInt(s["border-top-width"],10),bottom:parseInt(s["padding-bottom"],10)+parseInt(s["border-bottom-width"],10),left:parseInt(s["padding-left"],10)+parseInt(s["border-left-width"],10),right:parseInt(s["padding-right"],10)+parseInt(s["border-right-width"],10)}}t.getPaddingAndBorder=f;function O(o,s,h){var y=h?-1:1;o.forEach(function(T,b){return X(T,y*s[b].x,s[b].y)})}t.translateThumbs=O;function L(o,s,h,y){for(var T=0,b=z(o[0],s,h,y),M=1;M<o.length;M++){var _=z(o[M],s,h,y);_<b&&(b=_,T=M)}return T}t.getClosestThumbIndex=L;function X(o,s,h){o.style.transform="translate(".concat(s,"px, ").concat(h,"px)")}t.translate=X;var W=function(o){var s=[],h=null,y=function(){for(var T=[],b=0;b<arguments.length;b++)T[b]=arguments[b];s=T,!h&&(h=requestAnimationFrame(function(){h=null,o.apply(void 0,s)}))};return y};t.schd=W;function S(o,s,h){var y=o.slice(0);return y[s]=h,y}t.replaceAt=S;function A(o){var s=o.values,h=o.colors,y=o.min,T=o.max,b=o.direction,M=b===void 0?e.Direction.Right:b,_=o.rtl,R=_===void 0?!1:_;R&&M===e.Direction.Right?M=e.Direction.Left:R&&e.Direction.Left&&(M=e.Direction.Right);var w=s.slice(0).sort(function(C,V){return C-V}).map(function(C){return(C-y)/(T-y)*100}),F=w.reduce(function(C,V,D){return"".concat(C,", ").concat(h[D]," ").concat(V,"%, ").concat(h[D+1]," ").concat(V,"%")},"");return"linear-gradient(".concat(M,", ").concat(h[0]," 0%").concat(F,", ").concat(h[h.length-1]," 100%)")}t.getTrackBackground=A;function K(){}t.voidFn=K;function P(o){throw new Error("Didn't expect to get here")}t.assertUnreachable=P;var j=function(o,s,h,y,T){T===void 0&&(T=function(M){return M});var b=Math.ceil(a([o],Array.from(o.children),!0).reduce(function(M,_){var R=Math.ceil(_.getBoundingClientRect().width);if(_.innerText&&_.innerText.includes(h)&&_.childElementCount===0){var w=_.cloneNode(!0);w.innerHTML=T(s.toFixed(y)),w.style.visibility="hidden",document.body.appendChild(w),R=Math.ceil(w.getBoundingClientRect().width),document.body.removeChild(w)}return R>M?R:M},o.getBoundingClientRect().width));return b},Q=function(o,s,h,y,T,b,M){M===void 0&&(M=function(w){return w});var _=[],R=function(w){var F=j(h[w],y[w],T,b,M),C=s[w].x;s.forEach(function(V,D){var U=V.x,Y=j(h[D],y[D],T,b,M);w!==D&&(C>=U&&C<=U+Y||C+F>=U&&C+F<=U+Y)&&(_.includes(D)||(_.push(w),_.push(D),_=a(a([],_,!0),[w,D],!1),R(D)))})};return R(o),Array.from(new Set(_.sort()))},J=function(o,s,h,y,T,b){y===void 0&&(y=.1),T===void 0&&(T=" - "),b===void 0&&(b=function(D){return D});var M=(0,t.getStepDecimals)(y),_=(0,i.useState)({}),R=_[0],w=_[1],F=(0,i.useState)(b(s[h].toFixed(M))),C=F[0],V=F[1];return(0,i.useEffect)(function(){if(o){var D=o.getThumbs();if(D.length<1)return;var U={},Y=o.getOffsets(),ee=Q(h,Y,D,s,T,M,b),ce=b(s[h].toFixed(M));if(ee.length){var te=ee.reduce(function(q,de,he,fe){return q.length?a(a([],q,!0),[Y[fe[he]].x],!1):[Y[fe[he]].x]},[]);if(Math.min.apply(Math,te)===Y[h].x){var ue=[];ee.forEach(function(q){ue.push(s[q].toFixed(M))}),ce=Array.from(new Set(ue.sort(function(q,de){return parseFloat(q)-parseFloat(de)}))).map(b).join(T);var xe=Math.min.apply(Math,te),le=Math.max.apply(Math,te),Me=D[ee[te.indexOf(le)]].getBoundingClientRect().width;U.left="".concat(Math.abs(xe-(le+Me))/2,"px"),U.transform="translate(-50%, 0)"}else U.visibility="hidden"}V(ce),w(U)}},[o,s]),[C,R]};t.useThumbOverlap=J;function z(o,s,h,y){var T=o.getBoundingClientRect(),b=T.left,M=T.top,_=T.width,R=T.height;return c(y)?Math.abs(h-(M+R/2)):Math.abs(s-(b+_/2))}var _e=function(){var o,s=((o=navigator.userAgentData)===null||o===void 0?void 0:o.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(s)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};t.isIOS=_e})(se);var Je=I&&I.__extends||function(){var t=function(a,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])},t(a,i)};return function(a,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");t(a,i);function e(){this.constructor=a}a.prototype=i===null?Object.create(i):(e.prototype=i.prototype,new e)}}(),Qe=I&&I.__createBinding||(Object.create?function(t,a,i,e){e===void 0&&(e=i);var n=Object.getOwnPropertyDescriptor(a,i);(!n||("get"in n?!a.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return a[i]}}),Object.defineProperty(t,e,n)}:function(t,a,i,e){e===void 0&&(e=i),t[e]=a[i]}),et=I&&I.__setModuleDefault||(Object.create?function(t,a){Object.defineProperty(t,"default",{enumerable:!0,value:a})}:function(t,a){t.default=a}),tt=I&&I.__importStar||function(t){if(t&&t.__esModule)return t;var a={};if(t!=null)for(var i in t)i!=="default"&&Object.prototype.hasOwnProperty.call(t,i)&&Qe(a,t,i);return et(a,t),a},ge=I&&I.__spreadArray||function(t,a,i){if(i||arguments.length===2)for(var e=0,n=a.length,r;e<n;e++)(r||!(e in a))&&(r||(r=Array.prototype.slice.call(a,0,e)),r[e]=a[e]);return t.concat(r||Array.prototype.slice.call(a))};Object.defineProperty(oe,"__esModule",{value:!0});var ne=tt(G),k=se,E=H,nt=["ArrowRight","ArrowUp","k","PageUp"],rt=["ArrowLeft","ArrowDown","j","PageDown"],at=function(t){Je(a,t);function a(i){var e=t.call(this,i)||this;if(e.trackRef=ne.createRef(),e.thumbRefs=[],e.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(e.props.values.length).fill(0).map(function(n,r){return r}),isChanged:!1,markOffsets:[]},e.getOffsets=function(){var n=e.props,r=n.direction,u=n.values,d=n.min,v=n.max,c=e.trackRef.current;if(!c)return console.warn("No track element found."),[];var l=c.getBoundingClientRect(),g=(0,k.getPaddingAndBorder)(c);return e.getThumbs().map(function(p,x){var f={x:0,y:0},O=p.getBoundingClientRect(),L=(0,k.getMargin)(p);switch(r){case E.Direction.Right:return f.x=(L.left+g.left)*-1,f.y=((O.height-l.height)/2+g.top)*-1,f.x+=l.width*(0,k.relativeValue)(u[x],d,v)-O.width/2,f;case E.Direction.Left:return f.x=(L.right+g.right)*-1,f.y=((O.height-l.height)/2+g.top)*-1,f.x+=l.width-l.width*(0,k.relativeValue)(u[x],d,v)-O.width/2,f;case E.Direction.Up:return f.x=((O.width-l.width)/2+L.left+g.left)*-1,f.y=-g.left,f.y+=l.height-l.height*(0,k.relativeValue)(u[x],d,v)-O.height/2,f;case E.Direction.Down:return f.x=((O.width-l.width)/2+L.left+g.left)*-1,f.y=-g.left,f.y+=l.height*(0,k.relativeValue)(u[x],d,v)-O.height/2,f;default:return(0,k.assertUnreachable)(r)}})},e.getThumbs=function(){return e.trackRef&&e.trackRef.current?Array.from(e.trackRef.current.children).filter(function(n){return n.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},e.getTargetIndex=function(n){return e.getThumbs().findIndex(function(r){return r===n.target||r.contains(n.target)})},e.addTouchEvents=function(n){document.addEventListener("touchmove",e.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",e.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",e.schdOnEnd,{passive:!1})},e.addMouseEvents=function(n){document.addEventListener("mousemove",e.schdOnMouseMove),document.addEventListener("mouseup",e.schdOnEnd)},e.onMouseDownTrack=function(n){var r;if(!(n.button!==0||(0,k.isIOS)()))if(n.persist(),n.preventDefault(),e.addMouseEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(d){var v;return(v=d.current)===null||v===void 0?void 0:v.contains(n.target)}))return;e.setState({draggedTrackPos:[n.clientX,n.clientY]},function(){return e.onMove(n.clientX,n.clientY)})}else{var u=(0,k.getClosestThumbIndex)(e.thumbRefs.map(function(d){return d.current}),n.clientX,n.clientY,e.props.direction);(r=e.thumbRefs[u].current)===null||r===void 0||r.focus(),e.setState({draggedThumbIndex:u},function(){return e.onMove(n.clientX,n.clientY)})}},e.onResize=function(){(0,k.translateThumbs)(e.getThumbs(),e.getOffsets(),e.props.rtl),e.calculateMarkOffsets()},e.onTouchStartTrack=function(n){var r;if(n.persist(),e.addTouchEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(d){var v;return(v=d.current)===null||v===void 0?void 0:v.contains(n.target)}))return;e.setState({draggedTrackPos:[n.touches[0].clientX,n.touches[0].clientY]},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}else{var u=(0,k.getClosestThumbIndex)(e.thumbRefs.map(function(d){return d.current}),n.touches[0].clientX,n.touches[0].clientY,e.props.direction);(r=e.thumbRefs[u].current)===null||r===void 0||r.focus(),e.setState({draggedThumbIndex:u},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}},e.onMouseOrTouchStart=function(n){if(!e.props.disabled){var r=(0,k.isTouchEvent)(n);if(!(!r&&n.button!==0)){var u=e.getTargetIndex(n);u!==-1&&(r?e.addTouchEvents(n):e.addMouseEvents(n),e.setState({draggedThumbIndex:u,thumbZIndexes:e.state.thumbZIndexes.map(function(d,v){return v===u?Math.max.apply(Math,e.state.thumbZIndexes):d<=e.state.thumbZIndexes[u]?d:d-1})}))}}},e.onMouseMove=function(n){n.preventDefault(),e.onMove(n.clientX,n.clientY)},e.onTouchMove=function(n){n.preventDefault(),e.onMove(n.touches[0].clientX,n.touches[0].clientY)},e.onKeyDown=function(n){var r=e.props,u=r.values,d=r.onChange,v=r.step,c=r.rtl,l=r.direction,g=e.state.isChanged,p=e.getTargetIndex(n.nativeEvent),x=c||l===E.Direction.Left||l===E.Direction.Down?-1:1;p!==-1&&(nt.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:p,isChanged:!0}),d((0,k.replaceAt)(u,p,e.normalizeValue(u[p]+x*(n.key==="PageUp"?v*10:v),p)))):rt.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:p,isChanged:!0}),d((0,k.replaceAt)(u,p,e.normalizeValue(u[p]-x*(n.key==="PageDown"?v*10:v),p)))):n.key==="Tab"?e.setState({draggedThumbIndex:-1},function(){g&&e.fireOnFinalChange()}):g&&e.fireOnFinalChange())},e.onKeyUp=function(n){var r=e.state.isChanged;e.setState({draggedThumbIndex:-1},function(){r&&e.fireOnFinalChange()})},e.onMove=function(n,r){var u=e.state,d=u.draggedThumbIndex,v=u.draggedTrackPos,c=e.props,l=c.direction,g=c.min,p=c.max,x=c.onChange,f=c.values,O=c.step,L=c.rtl;if(d===-1&&v[0]===-1&&v[1]===-1)return null;var X=e.trackRef.current;if(!X)return null;var W=X.getBoundingClientRect(),S=(0,k.isVertical)(l)?W.height:W.width;if(v[0]!==-1&&v[1]!==-1){var A=n-v[0],K=r-v[1],P=0;switch(l){case E.Direction.Right:case E.Direction.Left:P=A/S*(p-g);break;case E.Direction.Down:case E.Direction.Up:P=K/S*(p-g);break;default:(0,k.assertUnreachable)(l)}if(L&&(P*=-1),Math.abs(P)>=O/2){for(var j=0;j<e.thumbRefs.length;j++){if(f[j]===p&&Math.sign(P)===1||f[j]===g&&Math.sign(P)===-1)return;var Q=f[j]+P;Q>p?P=p-f[j]:Q<g&&(P=g-f[j])}for(var J=f.slice(0),j=0;j<e.thumbRefs.length;j++)J=(0,k.replaceAt)(J,j,e.normalizeValue(f[j]+P,j));e.setState({draggedTrackPos:[n,r]}),x(J)}}else{var z=0;switch(l){case E.Direction.Right:z=(n-W.left)/S*(p-g)+g;break;case E.Direction.Left:z=(S-(n-W.left))/S*(p-g)+g;break;case E.Direction.Down:z=(r-W.top)/S*(p-g)+g;break;case E.Direction.Up:z=(S-(r-W.top))/S*(p-g)+g;break;default:(0,k.assertUnreachable)(l)}L&&(z=p+g-z),Math.abs(f[d]-z)>=O/2&&x((0,k.replaceAt)(f,d,e.normalizeValue(z,d)))}},e.normalizeValue=function(n,r){var u=e.props,d=u.min,v=u.max,c=u.step,l=u.allowOverlap,g=u.values;return(0,k.normalizeValue)(n,r,d,v,c,l,g)},e.onEnd=function(n){if(n.preventDefault(),document.removeEventListener("mousemove",e.schdOnMouseMove),document.removeEventListener("touchmove",e.schdOnTouchMove),document.removeEventListener("mouseup",e.schdOnEnd),document.removeEventListener("touchend",e.schdOnEnd),document.removeEventListener("touchcancel",e.schdOnEnd),e.state.draggedThumbIndex===-1&&e.state.draggedTrackPos[0]===-1&&e.state.draggedTrackPos[1]===-1)return null;e.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){e.fireOnFinalChange()})},e.fireOnFinalChange=function(){e.setState({isChanged:!1});var n=e.props,r=n.onFinalChange,u=n.values;r&&r(u)},e.updateMarkRefs=function(n){if(!n.renderMark){e.numOfMarks=void 0,e.markRefs=void 0;return}e.numOfMarks=(n.max-n.min)/e.props.step,e.markRefs=[];for(var r=0;r<e.numOfMarks+1;r++)e.markRefs[r]=ne.createRef()},e.calculateMarkOffsets=function(){if(!(!e.props.renderMark||!e.trackRef||!e.numOfMarks||!e.markRefs||e.trackRef.current===null)){for(var n=window.getComputedStyle(e.trackRef.current),r=parseInt(n.width,10),u=parseInt(n.height,10),d=parseInt(n.paddingLeft,10),v=parseInt(n.paddingTop,10),c=[],l=0;l<e.numOfMarks+1;l++){var g=9999,p=9999;if(e.markRefs[l].current){var x=e.markRefs[l].current.getBoundingClientRect();g=x.height,p=x.width}e.props.direction===E.Direction.Left||e.props.direction===E.Direction.Right?c.push([Math.round(r/e.numOfMarks*l+d-p/2),-Math.round((g-u)/2)]):c.push([Math.round(u/e.numOfMarks*l+v-g/2),-Math.round((p-r)/2)])}e.setState({markOffsets:c})}},i.step===0)throw new Error('"step" property should be a positive number');return e.schdOnMouseMove=(0,k.schd)(e.onMouseMove),e.schdOnTouchMove=(0,k.schd)(e.onTouchMove),e.schdOnEnd=(0,k.schd)(e.onEnd),e.thumbRefs=i.values.map(function(){return ne.createRef()}),e.updateMarkRefs(i),e}return a.prototype.componentDidMount=function(){var i=this,e=this.props,n=e.values,r=e.min,u=e.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",i.onResize)},unobserve:function(){return window.removeEventListener("resize",i.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,k.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(d){return(0,k.checkBoundaries)(d,i.props.min,i.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,k.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),n.forEach(function(d){(0,k.isStepDivisible)(r,d,u)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},a.prototype.componentDidUpdate=function(i,e){var n=this.props,r=n.max,u=n.min,d=n.step,v=n.values,c=n.rtl;(i.max!==r||i.min!==u||i.step!==d)&&this.updateMarkRefs(this.props),(0,k.translateThumbs)(this.getThumbs(),this.getOffsets(),c),(i.max!==r||i.min!==u||i.step!==d||e.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),v.forEach(function(l){(0,k.isStepDivisible)(u,l,d)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},a.prototype.componentWillUnmount=function(){var i={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,i),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},a.prototype.render=function(){var i=this,e=this.props,n=e.label,r=e.labelledBy,u=e.renderTrack,d=e.renderThumb,v=e.renderMark,c=v===void 0?function(){return null}:v,l=e.values,g=e.min,p=e.max,x=e.allowOverlap,f=e.disabled,O=this.state,L=O.draggedThumbIndex,X=O.thumbZIndexes,W=O.markOffsets;return u({props:{style:{transform:"scale(1)",cursor:L>-1?"grabbing":this.props.draggableTrack?(0,k.isVertical)(this.props.direction)?"ns-resize":"ew-resize":l.length===1&&!f?"pointer":"inherit"},onMouseDown:f?k.voidFn:this.onMouseDownTrack,onTouchStart:f?k.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:f,children:ge(ge([],W.map(function(S,A,K){return c({props:{style:i.props.direction===E.Direction.Left||i.props.direction===E.Direction.Right?{position:"absolute",left:"".concat(S[0],"px"),marginTop:"".concat(S[1],"px")}:{position:"absolute",top:"".concat(S[0],"px"),marginLeft:"".concat(S[1],"px")},key:"mark".concat(A),ref:i.markRefs[A]},index:A})}),!0),l.map(function(S,A){var K=i.state.draggedThumbIndex===A;return d({index:A,value:S,isDragged:K,props:{style:{position:"absolute",zIndex:X[A],cursor:f?"inherit":K?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:A,tabIndex:f?void 0:0,"aria-valuemax":x?p:l[A+1]||p,"aria-valuemin":x?g:l[A-1]||g,"aria-valuenow":S,draggable:!1,ref:i.thumbRefs[A],"aria-label":n,"aria-labelledby":r,role:"slider",onKeyDown:f?k.voidFn:i.onKeyDown,onKeyUp:f?k.voidFn:i.onKeyUp}})}),!0)})},a.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:E.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},a}(ne.Component);oe.default=at;(function(t){var a=I&&I.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(t,"__esModule",{value:!0}),t.checkValuesAgainstBoundaries=t.relativeValue=t.useThumbOverlap=t.Direction=t.getTrackBackground=t.Range=void 0;var i=a(oe);t.Range=i.default;var e=se;Object.defineProperty(t,"getTrackBackground",{enumerable:!0,get:function(){return e.getTrackBackground}}),Object.defineProperty(t,"useThumbOverlap",{enumerable:!0,get:function(){return e.useThumbOverlap}}),Object.defineProperty(t,"relativeValue",{enumerable:!0,get:function(){return e.relativeValue}}),Object.defineProperty(t,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return e.checkValuesAgainstBoundaries}});var n=H;Object.defineProperty(t,"Direction",{enumerable:!0,get:function(){return n.Direction}})})(Z);var it={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const me=t=>{let a;const i=new Set,e=(l,g)=>{const p=typeof l=="function"?l(a):l;if(!Object.is(p,a)){const x=a;a=g??(typeof p!="object"||p===null)?p:Object.assign({},a,p),i.forEach(f=>f(a,x))}},n=()=>a,v={setState:e,getState:n,getInitialState:()=>c,subscribe:l=>(i.add(l),()=>i.delete(l)),destroy:()=>{(it?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),i.clear()}},c=a=t(e,n,v);return v},ot=t=>t?me(t):me;var ye={exports:{}},Te={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie=G,st=we;function ct(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var ut=typeof Object.is=="function"?Object.is:ct,lt=st.useSyncExternalStore,dt=ie.useRef,ht=ie.useEffect,ft=ie.useMemo,vt=ie.useDebugValue;Te.useSyncExternalStoreWithSelector=function(t,a,i,e,n){var r=dt(null);if(r.current===null){var u={hasValue:!1,value:null};r.current=u}else u=r.current;r=ft(function(){function v(x){if(!c){if(c=!0,l=x,x=e(x),n!==void 0&&u.hasValue){var f=u.value;if(n(f,x))return g=f}return g=x}if(f=g,ut(l,x))return f;var O=e(x);return n!==void 0&&n(f,O)?f:(l=x,g=O)}var c=!1,l,g,p=i===void 0?null:i;return[function(){return v(a())},p===null?void 0:function(){return v(p())}]},[a,i,e,n]);var d=lt(t,r[0],r[1]);return ht(function(){u.hasValue=!0,u.value=d},[d]),vt(d),d};ye.exports=Te;var gt=ye.exports;const mt=Oe(gt);var ke={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{useDebugValue:pt}=Ee,{useSyncExternalStoreWithSelector:bt}=mt;let pe=!1;const yt=t=>t;function Tt(t,a=yt,i){(ke?"production":void 0)!=="production"&&i&&!pe&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),pe=!0);const e=bt(t.subscribe,t.getState,t.getServerState||t.getInitialState,a,i);return pt(e),e}const be=t=>{(ke?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const a=typeof t=="function"?ot(t):t,i=(e,n)=>Tt(a,e,n);return Object.assign(i,a),i},kt=t=>t?be(t):be,_t=kt(t=>({values:[65],setValues:a=>t({values:a}),secondValues:[95],setSecondValues:a=>t({secondValues:a}),thirdValues:[75],setThirdValues:a=>t({thirdValues:a})}));function xt(){const{values:e,setValues:n,secondValues:r,setSecondValues:u,thirdValues:d,setThirdValues:v}=_t();return m.jsxs(m.Fragment,{children:[m.jsx("span",{className:N.position,children:"Project Design"}),m.jsx(Z.Range,{min:0,max:100,values:e,onChange:c=>n(c),renderTrack:({props:c,children:l})=>m.jsx("div",{className:N.track,onMouseDown:c.onMouseDown,onTouchStart:c.onTouchStart,ref:c.ref,style:{height:"5px",width:"100%",borderRadius:"4px",background:Z.getTrackBackground({values:e,colors:["#CDA274","#F4F0EC"],min:0,max:100,rtl:!1})},children:l}),renderThumb:({props:c})=>G.createElement("div",{className:N.thumb,...c,key:c.key,style:{...c.style,height:"20px",width:"20px",backgroundColor:"#CDA274",outline:"none",borderRadius:"50%"}},m.jsx("span",{className:N.count,children:e}))}),m.jsx("span",{className:N.position,children:"Team Management"}),m.jsx(Z.Range,{min:0,max:100,values:r,onChange:c=>u(c),renderTrack:({props:c,children:l})=>m.jsx("div",{className:N.track,onMouseDown:c.onMouseDown,onTouchStart:c.onTouchStart,ref:c.ref,style:{height:"5px",width:"100%",borderRadius:"4px",background:Z.getTrackBackground({values:r,colors:["#CDA274","#F4F0EC"],min:0,max:100})},children:l}),renderThumb:({props:c})=>G.createElement("div",{className:N.thumb,...c,key:c.key,style:{...c.style,height:"20px",width:"20px",backgroundColor:"#CDA274",outline:"none",borderRadius:"50%"}},m.jsx("span",{className:N.count,children:r}))}),m.jsx("span",{className:N.position,children:"Client Satisfaction"}),m.jsx(Z.Range,{min:0,max:100,values:d,onChange:c=>v(c),renderTrack:({props:c,children:l})=>m.jsx("div",{className:N.track,onMouseDown:c.onMouseDown,onTouchStart:c.onTouchStart,ref:c.ref,style:{height:"5px",width:"100%",borderRadius:"4px",background:Z.getTrackBackground({values:d,colors:["#CDA274","#F4F0EC"],min:0,max:100})},children:l}),renderThumb:({props:c})=>G.createElement("div",{className:N.thumb,...c,key:c.key,style:{...c.style,height:"20px",width:"20px",backgroundColor:"#CDA274",outline:"none",borderRadius:"50%"}},m.jsx("span",{className:N.count,children:d}))})]})}function Mt(){var n;const{data:t}=re("http://localhost:1337/api/team-single-page?populate=teamInfo.teamInfoAccartion",ae),{data:a}=re("http://localhost:1337/api/team-items?populate=*&pagination[limit]=4",ae),i=a==null?void 0:a.data,e=(n=t==null?void 0:t.data)==null?void 0:n.teamInfo;return m.jsx("section",{className:B.teamSingleBiography+" section",children:m.jsxs("div",{className:B.container+" container",children:[m.jsx("h2",{className:B.title+" blackTitle",children:e==null?void 0:e.title}),m.jsx("p",{className:B.text+" blackText",children:e==null?void 0:e.text}),m.jsxs("div",{className:B.content,children:[m.jsxs("div",{className:B.rangeBox,children:[m.jsx("h3",{className:B.smallTitle+" blackTitle",children:e==null?void 0:e.secoundTitle}),m.jsx("p",{className:B.text+" blackText",children:e==null?void 0:e.secoundText}),m.jsx(xt,{})]}),m.jsxs("div",{className:B.accordionBox,children:[m.jsxs("div",{className:B.qustion,children:[m.jsx("h3",{className:B.smallTitle+" blackTitle",children:e==null?void 0:e.thirdTitle}),m.jsx("p",{className:B.text+" blackText",children:e==null?void 0:e.thirdText})]}),m.jsx(Ce,{posts:e==null?void 0:e.teamInfoAccartion})]})]}),m.jsx("ul",{className:B.teamList+" list-reset",children:i==null?void 0:i.map(r=>m.jsx(Ae,{...r,img:r.img.url},r.id))})]})})}function At(){var n,r,u;const{id:t}=Se(),{data:a}=re(`http://localhost:1337/api/team-items/${t}?populate=*`,ae),{data:i}=re("http://localhost:1337/api/team-single-page?populate=teamSingleHero.background",ae),e=(n=i==null?void 0:i.data)==null?void 0:n.teamSingleHero;return m.jsxs(m.Fragment,{children:[m.jsx(De,{title:e==null?void 0:e.title,background:e==null?void 0:e.background.url}),m.jsx(ze,{...a==null?void 0:a.data,img:(u=(r=a==null?void 0:a.data)==null?void 0:r.img)==null?void 0:u.url}),m.jsx(Mt,{})]})}export{At as default};
