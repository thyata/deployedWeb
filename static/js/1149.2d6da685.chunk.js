"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[1149],{87383:function(e,r,t){t.d(r,{Z:function(){return f}});var o=t(1413),n=t(45987),a=t(96015),i=t(94162),l=t(4565),s=t(33888),c=t(46283),d=t(11087),u=t(80184);function m(e){var r=e.link,t=e.activeLast,n=e.disabled,i=r.name,l=r.href,s=r.icon,m=(0,o.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},n&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),p=(0,u.jsxs)(u.Fragment,{children:[s&&(0,u.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),i]});return l?(0,u.jsx)(c.Z,{component:d.rU,to:l,sx:m,children:p}):(0,u.jsxs)(a.Z,{sx:m,children:[" ",p," "]})}var p=["links","action","heading","moreLink","activeLast","sx"];function f(e){var r=e.links,t=e.action,d=e.heading,f=e.moreLink,v=e.activeLast,Z=e.sx,x=(0,n.Z)(e,p),g=r[r.length-1].name;return(0,u.jsxs)(a.Z,{sx:(0,o.Z)({mb:5},Z),children:[(0,u.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(a.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:d}),!!r.length&&(0,u.jsx)(s.Z,(0,o.Z)((0,o.Z)({separator:(0,u.jsx)(h,{})},x),{},{children:r.map((function(e){return(0,u.jsx)(m,{link:e,activeLast:v,disabled:e.name===g},e.name||"")}))}))]}),t&&(0,u.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!f&&(0,u.jsx)(a.Z,{sx:{mt:2},children:f.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function h(){return(0,u.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},81149:function(e,r,t){t.r(r),t.d(r,{default:function(){return j}});var o=t(29439),n=t(72791),a=t(6907),i=t(96015),l=t(20803),s=t(61091),c=t(4407),d=t(4565),u=t(81898),m=t(50120),p=t(97265),f=t(72900),h=t(7226),v=t(7055),Z=t(87383),x=t(22734),g=t(26052),b=t(80184),y={display:"flex",alignItems:"center",justifyContent:"center"};function j(){var e=(0,n.useState)(null),r=(0,o.Z)(e,2),t=r[0],j=r[1],C=(0,n.useState)(null),S=(0,o.Z)(C,2),w=S[0],k=S[1],M=(0,n.useState)(null),R=(0,o.Z)(M,2),N=R[0],P=R[1],B=(0,n.useState)("top-left"),F=(0,o.Z)(B,2),L=F[0],T=F[1],W=function(){k(null)};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a.ql,{children:(0,b.jsx)("title",{children:" MUI Components: Popover | Minimal UI"})}),(0,b.jsx)(i.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,b.jsx)(l.Z,{children:(0,b.jsx)(Z.Z,{heading:"Popover",links:[{name:"Components",href:v.ko.components},{name:"Popover"}],moreLink:["https://mui.com/components/popover"]})})}),(0,b.jsxs)(l.Z,{sx:{my:10},children:[(0,b.jsxs)(i.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{mb:3},children:[(0,b.jsxs)(g.g,{title:"Click",sx:y,children:[(0,b.jsx)(s.Z,{variant:"contained",onClick:function(e){j(e.currentTarget)},children:"Open Popover"}),(0,b.jsx)(c.ZP,{open:Boolean(t),anchorEl:t,onClose:function(){j(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:(0,b.jsxs)(i.Z,{sx:{p:2,maxWidth:280},children:[(0,b.jsx)(d.Z,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),(0,b.jsx)(d.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]}),(0,b.jsxs)(g.g,{title:"Hover",sx:y,children:[(0,b.jsx)(d.Z,{"aria-owns":w?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(e){k(e.currentTarget)},onMouseLeave:W,children:"Hover with a Popover."}),(0,b.jsx)(c.ZP,{id:"mouse-over-popover",open:Boolean(w),anchorEl:w,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:W,disableRestoreFocus:!0,sx:{pointerEvents:"none"},children:(0,b.jsxs)(i.Z,{sx:{p:2,maxWidth:280},children:[(0,b.jsx)(d.Z,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),(0,b.jsx)(d.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]})]}),(0,b.jsxs)(g.g,{title:"Customized",sx:y,children:[(0,b.jsx)(s.Z,{variant:"contained",onClick:function(e){P(e.currentTarget)},sx:{mr:5},children:"Open Customized"}),(0,b.jsxs)(u.Z,{children:[(0,b.jsx)(m.Z,{sx:{typography:"body2"},children:"Arrow"}),(0,b.jsx)(p.Z,{value:L,onChange:function(e){return T(e.target.value)},children:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","left-top","left-center","left-bottom","right-top","right-center","right-bottom"].map((function(e){return(0,b.jsx)(f.Z,{value:e,control:(0,b.jsx)(h.Z,{}),label:e},e)}))})]}),(0,b.jsx)(x.Z,{open:N,onClose:function(){P(null)},arrow:L,children:(0,b.jsxs)(i.Z,{sx:{p:2,maxWidth:280},children:[(0,b.jsx)(d.Z,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),(0,b.jsx)(d.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]})]})]})}},26052:function(e,r,t){t.d(r,{_:function(){return u},g:function(){return d}});var o=t(1413),n=t(12065),a=t(30286),i=t(16398),l=t(96015),s=t(4565),c=t(80184);function d(e){var r=e.title,t=e.sx,s=e.children;return(0,c.jsxs)(a.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,n.Fq)(e.palette.grey[500],.04)}},children:[r&&(0,c.jsx)(i.Z,{title:r}),(0,c.jsx)(l.Z,{sx:(0,o.Z)({p:5,minHeight:180},t),children:s})]})}function u(e){var r=e.title;return(0,c.jsx)(s.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:r})}},33888:function(e,r,t){t.d(r,{Z:function(){return B}});var o=t(93433),n=t(29439),a=t(4942),i=t(87462),l=t(63366),s=t(72791),c=(t(57441),t(28182)),d=t(94419),u=t(60277),m=t(85513),p=t(4565),f=t(12065),h=t(40233),v=t(80184),Z=(0,h.Z)((0,v.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),x=t(92842),g=(0,u.ZP)(x.Z)((function(e){var r=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,f._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,f._4)(r.palette.grey[600],.12)})})})),b=(0,u.ZP)(Z)({width:24,height:16});var y=function(e){var r=e;return(0,v.jsx)("li",{children:(0,v.jsx)(g,(0,i.Z)({focusRipple:!0},e,{ownerState:r,children:(0,v.jsx)(b,{ownerState:r})}))})},j=t(75878),C=t(21217);function S(e){return(0,C.Z)("MuiBreadcrumbs",e)}var w=(0,j.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),k=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],M=(0,u.ZP)(p.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,a.Z)({},"& .".concat(w.li),r.li),r.root]}})({}),R=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),N=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function P(e,r,t,o){return e.reduce((function(n,a,i){return i<e.length-1?n=n.concat(a,(0,v.jsx)(N,{"aria-hidden":!0,className:r,ownerState:o,children:t},"separator-".concat(i))):n.push(a),n}),[])}var B=s.forwardRef((function(e,r){var t=(0,m.Z)({props:e,name:"MuiBreadcrumbs"}),a=t.children,u=t.className,p=t.component,f=void 0===p?"nav":p,h=t.expandText,Z=void 0===h?"Show path":h,x=t.itemsAfterCollapse,g=void 0===x?1:x,b=t.itemsBeforeCollapse,j=void 0===b?1:b,C=t.maxItems,w=void 0===C?8:C,N=t.separator,B=void 0===N?"/":N,F=(0,l.Z)(t,k),L=s.useState(!1),T=(0,n.Z)(L,2),W=T[0],q=T[1],z=(0,i.Z)({},t,{component:f,expanded:W,expandText:Z,itemsAfterCollapse:g,itemsBeforeCollapse:j,maxItems:w,separator:B}),E=function(e){var r=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},S,r)}(z),H=s.useRef(null),I=s.Children.toArray(a).filter((function(e){return s.isValidElement(e)})).map((function(e,r){return(0,v.jsx)("li",{className:E.li,children:e},"child-".concat(r))}));return(0,v.jsx)(M,(0,i.Z)({ref:r,component:f,color:"text.secondary",className:(0,c.Z)(E.root,u),ownerState:z},F,{children:(0,v.jsx)(R,{className:E.ol,ref:H,ownerState:z,children:P(W||w&&I.length<=w?I:function(e){return j+g>=e.length?e:[].concat((0,o.Z)(e.slice(0,j)),[(0,v.jsx)(y,{"aria-label":Z,onClick:function(){q(!0);var e=H.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,o.Z)(e.slice(e.length-g,e.length)))}(I),E.separator,B,z)})}))}))},16398:function(e,r,t){t.d(r,{Z:function(){return j}});var o=t(4942),n=t(63366),a=t(87462),i=t(72791),l=t(28182),s=t(94419),c=t(4565),d=t(85513),u=t(60277),m=t(75878),p=t(21217);function f(e){return(0,p.Z)("MuiCardHeader",e)}var h=(0,m.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),v=t(80184),Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],x=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,r){var t;return(0,a.Z)((t={},(0,o.Z)(t,"& .".concat(h.title),r.title),(0,o.Z)(t,"& .".concat(h.subheader),r.subheader),t),r.root)}})({display:"flex",alignItems:"center",padding:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,r){return r.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,r){return r.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,r){return r.content}})({flex:"1 1 auto"}),j=i.forwardRef((function(e,r){var t=(0,d.Z)({props:e,name:"MuiCardHeader"}),o=t.action,i=t.avatar,u=t.className,m=t.component,p=void 0===m?"div":m,h=t.disableTypography,j=void 0!==h&&h,C=t.subheader,S=t.subheaderTypographyProps,w=t.title,k=t.titleTypographyProps,M=(0,n.Z)(t,Z),R=(0,a.Z)({},t,{component:p,disableTypography:j}),N=function(e){var r=e.classes;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},f,r)}(R),P=w;null==P||P.type===c.Z||j||(P=(0,v.jsx)(c.Z,(0,a.Z)({variant:i?"body2":"h5",className:N.title,component:"span",display:"block"},k,{children:P})));var B=C;return null==B||B.type===c.Z||j||(B=(0,v.jsx)(c.Z,(0,a.Z)({variant:i?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},S,{children:B}))),(0,v.jsxs)(x,(0,a.Z)({className:(0,l.Z)(N.root,u),as:p,ref:r,ownerState:R},M,{children:[i&&(0,v.jsx)(g,{className:N.avatar,ownerState:R,children:i}),(0,v.jsxs)(y,{className:N.content,ownerState:R,children:[P,B]}),o&&(0,v.jsx)(b,{className:N.action,ownerState:R,children:o})]}))}))},81898:function(e,r,t){t.d(r,{Z:function(){return y}});var o=t(29439),n=t(63366),a=t(87462),i=t(72791),l=t(28182),s=t(94419),c=t(85513),d=t(60277),u=t(7272),m=t(49853),p=t(56258),f=t(51211),h=t(75878),v=t(21217);function Z(e){return(0,v.Z)("MuiFormControl",e)}(0,h.Z)("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);var x=t(80184),g=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],b=(0,d.ZP)("div",{name:"MuiFormControl",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return(0,a.Z)({},r.root,r["margin".concat((0,m.Z)(t.margin))],t.fullWidth&&r.fullWidth)}})((function(e){var r=e.ownerState;return(0,a.Z)({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},"normal"===r.margin&&{marginTop:16,marginBottom:8},"dense"===r.margin&&{marginTop:8,marginBottom:4},r.fullWidth&&{width:"100%"})})),y=i.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiFormControl"}),d=t.children,h=t.className,v=t.color,y=void 0===v?"primary":v,j=t.component,C=void 0===j?"div":j,S=t.disabled,w=void 0!==S&&S,k=t.error,M=void 0!==k&&k,R=t.focused,N=t.fullWidth,P=void 0!==N&&N,B=t.hiddenLabel,F=void 0!==B&&B,L=t.margin,T=void 0===L?"none":L,W=t.required,q=void 0!==W&&W,z=t.size,E=void 0===z?"medium":z,H=t.variant,I=void 0===H?"outlined":H,_=(0,n.Z)(t,g),A=(0,a.Z)({},t,{color:y,component:C,disabled:w,error:M,fullWidth:P,hiddenLabel:F,margin:T,required:q,size:E,variant:I}),O=function(e){var r=e.classes,t=e.margin,o=e.fullWidth,n={root:["root","none"!==t&&"margin".concat((0,m.Z)(t)),o&&"fullWidth"]};return(0,s.Z)(n,Z,r)}(A),U=i.useState((function(){var e=!1;return d&&i.Children.forEach(d,(function(r){if((0,p.Z)(r,["Input","Select"])){var t=(0,p.Z)(r,["Select"])?r.props.input:r;t&&(0,u.B7)(t.props)&&(e=!0)}})),e})),D=(0,o.Z)(U,2),V=D[0],G=D[1],J=i.useState((function(){var e=!1;return d&&i.Children.forEach(d,(function(r){(0,p.Z)(r,["Input","Select"])&&(0,u.vd)(r.props,!0)&&(e=!0)})),e})),K=(0,o.Z)(J,2),Q=K[0],X=K[1],Y=i.useState(!1),$=(0,o.Z)(Y,2),ee=$[0],re=$[1];w&&ee&&re(!1);var te,oe=void 0===R||w?ee:R,ne=i.useMemo((function(){return{adornedStart:V,setAdornedStart:G,color:y,disabled:w,error:M,filled:Q,focused:oe,fullWidth:P,hiddenLabel:F,size:E,onBlur:function(){re(!1)},onEmpty:function(){X(!1)},onFilled:function(){X(!0)},onFocus:function(){re(!0)},registerEffect:te,required:q,variant:I}}),[V,y,w,M,Q,oe,P,F,te,q,E,I]);return(0,x.jsx)(f.Z.Provider,{value:ne,children:(0,x.jsx)(b,(0,a.Z)({as:C,ownerState:A,className:(0,l.Z)(O.root,h),ref:r},_,{children:d}))})}))},50120:function(e,r,t){var o=t(4942),n=t(63366),a=t(87462),i=t(72791),l=t(28182),s=t(94419),c=t(50040),d=t(66155),u=t(49853),m=t(85513),p=t(60277),f=t(89155),h=t(80184),v=["children","className","color","component","disabled","error","filled","focused","required"],Z=(0,p.ZP)("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return(0,a.Z)({},r.root,"secondary"===t.color&&r.colorSecondary,t.filled&&r.filled)}})((function(e){var r,t=e.theme,n=e.ownerState;return(0,a.Z)({color:(t.vars||t).palette.text.secondary},t.typography.body1,(r={lineHeight:"1.4375em",padding:0,position:"relative"},(0,o.Z)(r,"&.".concat(f.Z.focused),{color:(t.vars||t).palette[n.color].main}),(0,o.Z)(r,"&.".concat(f.Z.disabled),{color:(t.vars||t).palette.text.disabled}),(0,o.Z)(r,"&.".concat(f.Z.error),{color:(t.vars||t).palette.error.main}),r))})),x=(0,p.ZP)("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:function(e,r){return r.asterisk}})((function(e){var r=e.theme;return(0,o.Z)({},"&.".concat(f.Z.error),{color:(r.vars||r).palette.error.main})})),g=i.forwardRef((function(e,r){var t=(0,m.Z)({props:e,name:"MuiFormLabel"}),o=t.children,i=t.className,p=t.component,g=void 0===p?"label":p,b=(0,n.Z)(t,v),y=(0,d.Z)(),j=(0,c.Z)({props:t,muiFormControl:y,states:["color","required","focused","disabled","error","filled"]}),C=(0,a.Z)({},t,{color:j.color||"primary",component:g,disabled:j.disabled,error:j.error,filled:j.filled,focused:j.focused,required:j.required}),S=function(e){var r=e.classes,t=e.color,o=e.focused,n=e.disabled,a=e.error,i=e.filled,l=e.required,c={root:["root","color".concat((0,u.Z)(t)),n&&"disabled",a&&"error",i&&"filled",o&&"focused",l&&"required"],asterisk:["asterisk",a&&"error"]};return(0,s.Z)(c,f.M,r)}(C);return(0,h.jsxs)(Z,(0,a.Z)({as:g,ownerState:C,className:(0,l.Z)(S.root,i),ref:r},b,{children:[o,j.required&&(0,h.jsxs)(x,{ownerState:C,"aria-hidden":!0,className:S.asterisk,children:["\u2009","*"]})]}))}));r.Z=g},89155:function(e,r,t){t.d(r,{M:function(){return a}});var o=t(75878),n=t(21217);function a(e){return(0,n.Z)("MuiFormLabel",e)}var i=(0,o.Z)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]);r.Z=i},56258:function(e,r,t){t.d(r,{Z:function(){return n}});var o=t(72791);var n=function(e,r){return o.isValidElement(e)&&-1!==r.indexOf(e.type.muiName)}}}]);
//# sourceMappingURL=1149.2d6da685.chunk.js.map