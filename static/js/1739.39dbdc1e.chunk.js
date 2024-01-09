"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[1739],{87383:function(e,r,t){t.d(r,{Z:function(){return h}});var n=t(1413),a=t(45987),o=t(96015),i=t(94162),s=t(4565),l=t(33888),c=t(46283),d=t(11087),u=t(80184);function m(e){var r=e.link,t=e.activeLast,a=e.disabled,i=r.name,s=r.href,l=r.icon,m=(0,n.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},a&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),p=(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),i]});return s?(0,u.jsx)(c.Z,{component:d.rU,to:s,sx:m,children:p}):(0,u.jsxs)(o.Z,{sx:m,children:[" ",p," "]})}var p=["links","action","heading","moreLink","activeLast","sx"];function h(e){var r=e.links,t=e.action,d=e.heading,h=e.moreLink,x=e.activeLast,v=e.sx,g=(0,a.Z)(e,p),Z=r[r.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,n.Z)({mb:5},v),children:[(0,u.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:d}),!!r.length&&(0,u.jsx)(l.Z,(0,n.Z)((0,n.Z)({separator:(0,u.jsx)(f,{})},g),{},{children:r.map((function(e){return(0,u.jsx)(m,{link:e,activeLast:x,disabled:e.name===Z},e.name||"")}))}))]}),t&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!h&&(0,u.jsx)(o.Z,{sx:{mt:2},children:h.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function f(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},1739:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n=t(74165),a=t(15861),o=t(29439),i=t(6907),s=t(57689),l=t(82388),c=t(72791),d=t(20803),u=t(7055),m=t(46839),p=t(87383),h=t(80184);function f(){var e=(0,m.K$)().themeStretch,r=(0,s.UO)().id,t=(0,s.TH)().state;console.table(t);var f=(0,c.useState)(!0),x=(0,o.Z)(f,2),v=(x[0],x[1]),g=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,l.Z.get("https://jsonplaceholder.typicode.com/comments",{headers:{},params:{}});case 4:r=e.sent,v(!1),k(r.data),console.table(r.data),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),v(!1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){g()}),[]);var Z=(0,c.useState)([]),b=(0,o.Z)(Z,2),j=b[0],k=b[1],y=j.find((function(e){return e.id===r})),w=(0,c.useState)(!1),S=(0,o.Z)(w,2);S[0],S[1];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.ql,{children:(0,h.jsx)("title",{children:" Invoice: View | Minimal UI"})}),(0,h.jsx)(d.Z,{maxWidth:!e&&"lg",children:(0,h.jsx)(p.Z,{heading:"Invoice Details",links:[{name:"Dashboard",href:u.vB.root},{name:"Invoices",href:u.vB.vaccine.root},{name:"INV-".concat(null===y||void 0===y?void 0:y.id)}]})})]})}},33888:function(e,r,t){t.d(r,{Z:function(){return M}});var n=t(93433),a=t(29439),o=t(4942),i=t(87462),s=t(63366),l=t(72791),c=(t(57441),t(28182)),d=t(94419),u=t(60277),m=t(85513),p=t(4565),h=t(12065),f=t(40233),x=t(80184),v=(0,f.Z)((0,x.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),g=t(92842),Z=(0,u.ZP)(g.Z)((function(e){var r=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,h._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,h._4)(r.palette.grey[600],.12)})})})),b=(0,u.ZP)(v)({width:24,height:16});var j=function(e){var r=e;return(0,x.jsx)("li",{children:(0,x.jsx)(Z,(0,i.Z)({focusRipple:!0},e,{ownerState:r,children:(0,x.jsx)(b,{ownerState:r})}))})},k=t(75878),y=t(21217);function w(e){return(0,y.Z)("MuiBreadcrumbs",e)}var S=(0,k.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),C=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],B=(0,u.ZP)(p.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,o.Z)({},"& .".concat(S.li),r.li),r.root]}})({}),I=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),R=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function _(e,r,t,n){return e.reduce((function(a,o,i){return i<e.length-1?a=a.concat(o,(0,x.jsx)(R,{"aria-hidden":!0,className:r,ownerState:n,children:t},"separator-".concat(i))):a.push(o),a}),[])}var M=l.forwardRef((function(e,r){var t=(0,m.Z)({props:e,name:"MuiBreadcrumbs"}),o=t.children,u=t.className,p=t.component,h=void 0===p?"nav":p,f=t.expandText,v=void 0===f?"Show path":f,g=t.itemsAfterCollapse,Z=void 0===g?1:g,b=t.itemsBeforeCollapse,k=void 0===b?1:b,y=t.maxItems,S=void 0===y?8:y,R=t.separator,M=void 0===R?"/":R,L=(0,s.Z)(t,C),N=l.useState(!1),P=(0,a.Z)(N,2),z=P[0],A=P[1],T=(0,i.Z)({},t,{component:h,expanded:z,expandText:v,itemsAfterCollapse:Z,itemsBeforeCollapse:k,maxItems:S,separator:M}),E=function(e){var r=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},w,r)}(T),U=l.useRef(null),V=l.Children.toArray(o).filter((function(e){return l.isValidElement(e)})).map((function(e,r){return(0,x.jsx)("li",{className:E.li,children:e},"child-".concat(r))}));return(0,x.jsx)(B,(0,i.Z)({ref:r,component:h,color:"text.secondary",className:(0,c.Z)(E.root,u),ownerState:T},L,{children:(0,x.jsx)(I,{className:E.ol,ref:U,ownerState:T,children:_(z||S&&V.length<=S?V:function(e){return k+Z>=e.length?e:[].concat((0,n.Z)(e.slice(0,k)),[(0,x.jsx)(j,{"aria-label":v,onClick:function(){A(!0);var e=U.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,n.Z)(e.slice(e.length-Z,e.length)))}(V),E.separator,M,T)})}))}))}}]);
//# sourceMappingURL=1739.39dbdc1e.chunk.js.map