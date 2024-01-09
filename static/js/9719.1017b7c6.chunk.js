"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[9719],{71353:function(e,t,n){n.d(t,{SA:function(){return r.SA},ZP:function(){return a.Z}});var r=n(65358),a=n(15152)},42393:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(74142),a=n(1413),i=(0,n(60277).ZP)("span")((function(e){var t=e.theme,n=e.ownerState,r=n.status,i=n.size;return(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({width:10,height:10,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center","&:before, &:after":{content:"''",borderRadius:1,backgroundColor:t.palette.common.white}},"small"===i&&{width:8,height:8}),"large"===i&&{width:12,height:12}),"offline"===r&&{backgroundColor:"transparent"}),"away"===r&&{backgroundColor:t.palette.warning.main,"&:before":{width:2,height:4,transform:"translateX(1px) translateY(-1px)"},"&:after":{width:2,height:4,transform:"translateY(1px) rotate(125deg)"}}),"busy"===r&&{backgroundColor:t.palette.error.main,"&:before":{width:6,height:2}}),"online"===r&&{backgroundColor:t.palette.success.main}),"invisible"===r&&{backgroundColor:t.palette.text.disabled,"&:before":{width:6,height:6,borderRadius:"50%"}}),"unread"===r&&{backgroundColor:t.palette.info.main})})),s=n(80184);function o(e){var t=e.size,n=void 0===t?"medium":t,a=e.status,o=void 0===a?"offline":a,l=e.sx,c=(0,r.Z)();return(0,s.jsx)(i,{sx:l,theme:c,ownerState:{status:o,size:n}})}},87383:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(1413),a=n(45987),i=n(96015),s=n(94162),o=n(4565),l=n(33888),c=n(46283),d=n(11087),u=n(80184);function h(e){var t=e.link,n=e.activeLast,a=e.disabled,s=t.name,o=t.href,l=t.icon,h=(0,r.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},a&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),m=(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),s]});return o?(0,u.jsx)(c.Z,{component:d.rU,to:o,sx:h,children:m}):(0,u.jsxs)(i.Z,{sx:h,children:[" ",m," "]})}var m=["links","action","heading","moreLink","activeLast","sx"];function x(e){var t=e.links,n=e.action,d=e.heading,x=e.moreLink,f=e.activeLast,g=e.sx,v=(0,a.Z)(e,m),Z=t[t.length-1].name;return(0,u.jsxs)(i.Z,{sx:(0,r.Z)({mb:5},g),children:[(0,u.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(i.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:d}),!!t.length&&(0,u.jsx)(l.Z,(0,r.Z)((0,r.Z)({separator:(0,u.jsx)(p,{})},v),{},{children:t.map((function(e){return(0,u.jsx)(h,{link:e,activeLast:f,disabled:e.name===Z},e.name||"")}))}))]}),n&&(0,u.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!x&&(0,u.jsx)(i.Z,{sx:{mt:2},children:x.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function p(){return(0,u.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},19719:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(6907),a=n(74142),i=n(96015),s=n(20803),o=n(75814),l=n(16002),c=n(7055),d=n(71353),u=n(8523),h=n(42393),m=n(87383),x=n(37782),p=n(26052),f=n(80184),g=["default","primary","secondary","info","success","warning","error"],v=["tiny","small","medium","large"],Z=["circular","rounded","square"],j=["online","away","busy","invisible"];function y(){var e=(0,a.Z)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r.ql,{children:(0,f.jsx)("title",{children:" MUI Components: Avatar | Minimal UI"})}),(0,f.jsx)(i.Z,{sx:{pt:6,pb:1,bgcolor:"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,f.jsx)(s.Z,{children:(0,f.jsx)(m.Z,{heading:"Avatar",links:[{name:"Components",href:c.ko.components},{name:"Avatar"}],moreLink:["https://mui.com/components/avatars"]})})}),(0,f.jsx)(s.Z,{sx:{my:10},children:(0,f.jsxs)(l.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,f.jsx)(p.g,{title:"Image avatars",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[1,2,3,4,5].map((function(e,t){return(0,f.jsx)(x.z,{alt:"Remy Sharp",src:d.ZP.image.avatar(t+1)},t)}))}),(0,f.jsx)(p.g,{title:"Letter avatars",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:g.map((function(e,t){return(0,f.jsx)(o.Z,{title:e,children:(0,f.jsx)(x.z,{name:d.ZP.name.fullName(t)})},e)}))}),(0,f.jsx)(p.g,{title:"Icon avatars",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:g.map((function(e){return(0,f.jsx)(x.z,{color:e,children:(0,f.jsx)(u.Z,{icon:"eva:folder-add-outline",width:24})},e)}))}),(0,f.jsx)(p.g,{title:"Variant",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:Z.map((function(e){return(0,f.jsx)(x.z,{variant:e,color:"primary",children:(0,f.jsx)(u.Z,{icon:"eva:folder-add-outline",width:24})},e)}))}),(0,f.jsxs)(p.g,{title:"Grouped",sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[v.map((function(e){return(0,f.jsx)(o.Z,{title:e,children:(0,f.jsx)(x._,{size:e,children:g.map((function(e,t){return(0,f.jsx)(x.z,{alt:"Remy Sharp",src:d.ZP.image.avatar(t+1)},e)}))},e)},e)})),(0,f.jsx)(o.Z,{title:"compact",children:(0,f.jsx)(x._,{compact:!0,sx:{width:48,height:48},children:g.slice(0,2).map((function(e,t){return(0,f.jsx)(x.z,{alt:"Remy Sharp",src:d.ZP.image.avatar(t+1)},e)}))})})]}),(0,f.jsxs)(p.g,{title:"With badge",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[(0,f.jsx)(x.z,{alt:"Travis Howard",src:d.ZP.image.avatar(1),BadgeProps:{badgeContent:(0,f.jsx)(x.z,{alt:"Travis Howard",src:d.ZP.image.avatar(7),sx:{width:24,height:24,border:"solid 2px ".concat(e.palette.background.paper)}})}}),j.map((function(e,t){return(0,f.jsx)(x.z,{alt:"Travis Howard",src:d.ZP.image.avatar(t+1),BadgeProps:{badgeContent:(0,f.jsx)(h.Z,{status:e,size:"large"})}},e)}))]}),(0,f.jsx)(p.g,{title:"Sizes",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[24,32,48,56,64,80,128].map((function(e,t){return(0,f.jsx)(x.z,{alt:"Travis Howard",src:d.ZP.image.avatar(t+4),sx:{width:e,height:e}},e)}))})]})})]})}},26052:function(e,t,n){n.d(t,{_:function(){return u},g:function(){return d}});var r=n(1413),a=n(12065),i=n(30286),s=n(16398),o=n(96015),l=n(4565),c=n(80184);function d(e){var t=e.title,n=e.sx,l=e.children;return(0,c.jsxs)(i.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,a.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,c.jsx)(s.Z,{title:t}),(0,c.jsx)(o.Z,{sx:(0,r.Z)({p:5,minHeight:180},n),children:l})]})}function u(e){var t=e.title;return(0,c.jsx)(l.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},16398:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(4942),a=n(63366),i=n(87462),s=n(72791),o=n(28182),l=n(94419),c=n(4565),d=n(85513),u=n(60277),h=n(75878),m=n(21217);function x(e){return(0,m.Z)("MuiCardHeader",e)}var p=(0,h.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),f=n(80184),g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var n;return(0,i.Z)((n={},(0,r.Z)(n,"& .".concat(p.title),t.title),(0,r.Z)(n,"& .".concat(p.subheader),t.subheader),n),t.root)}})({display:"flex",alignItems:"center",padding:16}),Z=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),b=s.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiCardHeader"}),r=n.action,s=n.avatar,u=n.className,h=n.component,m=void 0===h?"div":h,p=n.disableTypography,b=void 0!==p&&p,w=n.subheader,C=n.subheaderTypographyProps,k=n.title,P=n.titleTypographyProps,z=(0,a.Z)(n,g),R=(0,i.Z)({},n,{component:m,disableTypography:b}),I=function(e){var t=e.classes;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},x,t)}(R),S=k;null==S||S.type===c.Z||b||(S=(0,f.jsx)(c.Z,(0,i.Z)({variant:s?"body2":"h5",className:I.title,component:"span",display:"block"},P,{children:S})));var H=w;return null==H||H.type===c.Z||b||(H=(0,f.jsx)(c.Z,(0,i.Z)({variant:s?"body2":"body1",className:I.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:H}))),(0,f.jsxs)(v,(0,i.Z)({className:(0,o.Z)(I.root,u),as:m,ref:t,ownerState:R},z,{children:[s&&(0,f.jsx)(Z,{className:I.avatar,ownerState:R,children:s}),(0,f.jsxs)(y,{className:I.content,ownerState:R,children:[S,H]}),r&&(0,f.jsx)(j,{className:I.action,ownerState:R,children:r})]}))}))}}]);
//# sourceMappingURL=9719.1017b7c6.chunk.js.map