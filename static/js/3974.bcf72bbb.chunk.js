"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[3974],{87383:function(e,n,t){t.d(n,{Z:function(){return h}});var i=t(1413),a=t(45987),r=t(96015),s=t(94162),o=t(4565),l=t(33888),c=t(46283),d=t(11087),u=t(80184);function x(e){var n=e.link,t=e.activeLast,a=e.disabled,s=n.name,o=n.href,l=n.icon,x=(0,i.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},a&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),m=(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)(r.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),s]});return o?(0,u.jsx)(c.Z,{component:d.rU,to:o,sx:x,children:m}):(0,u.jsxs)(r.Z,{sx:x,children:[" ",m," "]})}var m=["links","action","heading","moreLink","activeLast","sx"];function h(e){var n=e.links,t=e.action,d=e.heading,h=e.moreLink,f=e.activeLast,Z=e.sx,j=(0,a.Z)(e,m),g=n[n.length-1].name;return(0,u.jsxs)(r.Z,{sx:(0,i.Z)({mb:5},Z),children:[(0,u.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(r.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(l.Z,(0,i.Z)((0,i.Z)({separator:(0,u.jsx)(p,{})},j),{},{children:n.map((function(e){return(0,u.jsx)(x,{link:e,activeLast:f,disabled:e.name===g},e.name||"")}))}))]}),t&&(0,u.jsxs)(r.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!h&&(0,u.jsx)(r.Z,{sx:{mt:2},children:h.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function p(){return(0,u.jsx)(r.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},45692:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var i=t(1413),a=t(45987),r=t(29439),s=t(72791),o=t(6907),l=t(96015),c=t(20803),d=t(38447),u=t(16002),x=t(7055),m=t(8523),h=t(87383),p=t(26052),f=t(80184),Z=["value"],j={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"},g={1:{icon:(0,f.jsx)(m.Z,{icon:"ic:round-sentiment-very-dissatisfied"}),label:"Very Dissatisfied"},2:{icon:(0,f.jsx)(m.Z,{icon:"ic:round-sentiment-dissatisfied"}),label:"Dissatisfied"},3:{icon:(0,f.jsx)(m.Z,{icon:"ic:round-sentiment-neutral"}),label:"Neutral"},4:{icon:(0,f.jsx)(m.Z,{icon:"ic:round-sentiment-satisfied"}),label:"Satisfied"},5:{icon:(0,f.jsx)(m.Z,{icon:"ic:round-sentiment-very-satisfied"}),label:"Very Satisfied"}},v={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}};function b(){var e=(0,s.useState)(2),n=(0,r.Z)(e,2),t=n[0],i=n[1],a=(0,s.useState)(-1),Z=(0,r.Z)(a,2),b=Z[0],k=Z[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.ql,{children:(0,f.jsx)("title",{children:" MUI Components: Rating | Minimal UI"})}),(0,f.jsx)(l.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,f.jsx)(c.Z,{children:(0,f.jsx)(h.Z,{heading:"Rating",links:[{name:"Components",href:x.ko.components},{name:"Rating"}],moreLink:["https://mui.com/components/rating"]})})}),(0,f.jsx)(c.Z,{sx:{my:10},children:(0,f.jsxs)(u.ZP,{columns:{xs:1,sm:2,md:3},spacing:3,children:[(0,f.jsx)(p.g,{title:"Controlled",sx:v,children:(0,f.jsx)(d.Z,{name:"simple-controlled",value:t,onChange:function(e,n){i(n)}})}),(0,f.jsx)(p.g,{title:"Read only",sx:v,children:(0,f.jsx)(d.Z,{name:"read-only",value:t,readOnly:!0})}),(0,f.jsx)(p.g,{title:"Disabled",sx:v,children:(0,f.jsx)(d.Z,{name:"disabled",value:t,disabled:!0})}),(0,f.jsx)(p.g,{title:"Pristine",sx:v,children:(0,f.jsx)(d.Z,{name:"pristine",value:null})}),(0,f.jsx)(p.g,{title:"Custom empty icon",sx:v,children:(0,f.jsx)(d.Z,{name:"customized-empty",defaultValue:2,precision:.5})}),(0,f.jsx)(p.g,{title:"Custom icon and color",sx:v,children:(0,f.jsx)(d.Z,{name:"customized-color",defaultValue:2,getLabelText:function(e){return"".concat(e," Heart").concat(1!==e?"s":"")},precision:.5,icon:(0,f.jsx)(m.Z,{icon:"eva:heart-fill"}),emptyIcon:(0,f.jsx)(m.Z,{icon:"eva:heart-fill"}),sx:{color:"info.main","&:hover":{color:"info.dark"}}})}),(0,f.jsx)(p.g,{title:"10 stars",sx:v,children:(0,f.jsx)(d.Z,{name:"customized-10",defaultValue:2,max:10})}),(0,f.jsx)(p.g,{title:"Custom icon set",sx:v,children:(0,f.jsx)(d.Z,{name:"customized-icons",defaultValue:2,getLabelText:function(e){return g[e].label},IconContainerComponent:y})}),(0,f.jsxs)(p.g,{title:"Hover feedback",sx:v,children:[(0,f.jsx)(d.Z,{name:"hover-feedback",value:t,precision:.5,onChange:function(e,n){i(n)},onChangeActive:function(e,n){k(n)}}),null!==t&&(0,f.jsx)(l.Z,{sx:{ml:2},children:j[-1!==b?b:t]})]}),(0,f.jsxs)(p.g,{title:"Half ratings",sx:v,children:[(0,f.jsx)(d.Z,{name:"half-rating",defaultValue:2.5,precision:.5}),(0,f.jsx)("br",{}),(0,f.jsx)(d.Z,{name:"half-rating-read",defaultValue:2.5,precision:.5,readOnly:!0})]}),(0,f.jsxs)(p.g,{title:"Sizes",sx:v,children:[(0,f.jsx)(d.Z,{name:"size-small",defaultValue:2,size:"small"}),(0,f.jsx)("br",{}),(0,f.jsx)(d.Z,{name:"size-medium",defaultValue:2}),(0,f.jsx)("br",{}),(0,f.jsx)(d.Z,{name:"size-large",defaultValue:2,size:"large"})]})]})})]})}function y(e){var n=e.value,t=(0,a.Z)(e,Z);return(0,f.jsx)("span",(0,i.Z)((0,i.Z)({},t),{},{children:g[n].icon}))}},26052:function(e,n,t){t.d(n,{_:function(){return u},g:function(){return d}});var i=t(1413),a=t(12065),r=t(30286),s=t(16398),o=t(96015),l=t(4565),c=t(80184);function d(e){var n=e.title,t=e.sx,l=e.children;return(0,c.jsxs)(r.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,a.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,c.jsx)(s.Z,{title:n}),(0,c.jsx)(o.Z,{sx:(0,i.Z)({p:5,minHeight:180},t),children:l})]})}function u(e){var n=e.title;return(0,c.jsx)(l.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:n})}},16398:function(e,n,t){t.d(n,{Z:function(){return y}});var i=t(4942),a=t(63366),r=t(87462),s=t(72791),o=t(28182),l=t(94419),c=t(4565),d=t(85513),u=t(60277),x=t(75878),m=t(21217);function h(e){return(0,m.Z)("MuiCardHeader",e)}var p=(0,x.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),f=t(80184),Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,n){var t;return(0,r.Z)((t={},(0,i.Z)(t,"& .".concat(p.title),n.title),(0,i.Z)(t,"& .".concat(p.subheader),n.subheader),t),n.root)}})({display:"flex",alignItems:"center",padding:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,n){return n.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,n){return n.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,n){return n.content}})({flex:"1 1 auto"}),y=s.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiCardHeader"}),i=t.action,s=t.avatar,u=t.className,x=t.component,m=void 0===x?"div":x,p=t.disableTypography,y=void 0!==p&&p,k=t.subheader,C=t.subheaderTypographyProps,w=t.title,R=t.titleTypographyProps,P=(0,a.Z)(t,Z),S=(0,r.Z)({},t,{component:m,disableTypography:y}),H=function(e){var n=e.classes;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,n)}(S),V=w;null==V||V.type===c.Z||y||(V=(0,f.jsx)(c.Z,(0,r.Z)({variant:s?"body2":"h5",className:H.title,component:"span",display:"block"},R,{children:V})));var z=k;return null==z||z.type===c.Z||y||(z=(0,f.jsx)(c.Z,(0,r.Z)({variant:s?"body2":"body1",className:H.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:z}))),(0,f.jsxs)(j,(0,r.Z)({className:(0,o.Z)(H.root,u),as:m,ref:n,ownerState:S},P,{children:[s&&(0,f.jsx)(g,{className:H.avatar,ownerState:S,children:s}),(0,f.jsxs)(b,{className:H.content,ownerState:S,children:[V,z]}),i&&(0,f.jsx)(v,{className:H.action,ownerState:S,children:i})]}))}))},95573:function(e,n){n.Z={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"}}}]);
//# sourceMappingURL=3974.bcf72bbb.chunk.js.map