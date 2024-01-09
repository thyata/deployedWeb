"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[7616],{71353:function(e,t,n){n.d(t,{SA:function(){return r.SA},ZP:function(){return i.Z}});var r=n(65358),i=n(15152)},42774:function(e,t,n){n.d(t,{cU:function(){return R},i5:function(){return b},A0:function(){return u},ZP:function(){return S}});var r=n(95717),i=n(1413),o=n(60277),a=n(96015),s=n(94162),l=n(80184),c=(0,o.ZP)(a.Z,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var t=e.rounded;return{zIndex:9,display:"flex",alignItems:"center",justifyContent:"center",color:e.theme.palette.primary.main,"& li":{width:18,height:18,opacity:.32,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer","&.slick-active":(0,i.Z)({opacity:1},t&&{"& span":{width:16,borderRadius:6}})}}})),d=(0,o.ZP)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function u(e){var t=(null===e||void 0===e?void 0:e.rounded)||!1,n=null===e||void 0===e?void 0:e.sx;return{appendDots:function(r){return(0,l.jsx)(c,(0,i.Z)((0,i.Z)({component:"ul",rounded:t,sx:n},e),{},{children:r}))},customPaging:function(){return(0,l.jsx)(s.Z,{component:"div",alignItems:"center",justifyContent:"center",sx:{width:1,height:1},children:(0,l.jsx)(d,{sx:{bgcolor:"currentColor"}})})}}}var h=n(45987),x=n(12065),Z=n(74142),p=n(13811),v=n(8523);function f(e){var t=e.icon,n=void 0===t?"eva:arrow-ios-forward-fill":t,r=e.isRTL;return(0,l.jsx)(v.Z,{icon:n,sx:(0,i.Z)({width:20,height:20,transform:" scaleX(-1)"},r&&{transform:" scaleX(1)"})})}function m(e){var t=e.icon,n=void 0===t?"eva:arrow-ios-forward-fill":t,r=e.isRTL;return(0,l.jsx)(v.Z,{icon:n,sx:(0,i.Z)({width:20,height:20},r&&{transform:" scaleX(-1)"})})}var g=["shape","filled","icon","onNext","onPrevious","children","leftButtonProps","rightButtonProps","sx"],j=(0,o.ZP)(p.Z,{shouldForwardProp:function(e){return"filled"!==e&&"hasChildren"!==e&&"shape"!==e}})((function(e){var t=e.filled,n=e.shape,r=e.hasChildren,o=e.theme;return(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({color:"inherit",transition:o.transitions.create("all",{duration:o.transitions.duration.shorter})},"rounded"===n&&{borderRadius:1.5*Number(o.shape.borderRadius)}),!t&&{opacity:.48,"&:hover":{opacity:1}}),t&&{color:(0,x.Fq)(o.palette.common.white,.8),backgroundColor:(0,x.Fq)(o.palette.grey[900],.48),"&:hover":{color:o.palette.common.white,backgroundColor:o.palette.grey[900]}}),r&&{zIndex:9,top:"50%",position:"absolute",marginTop:o.spacing(-2.5)})}));function b(e){var t=e.shape,n=void 0===t?"circular":t,r=e.filled,o=void 0!==r&&r,a=e.icon,c=e.onNext,d=e.onPrevious,u=e.children,x=e.leftButtonProps,p=e.rightButtonProps,v=e.sx,b=(0,h.Z)(e,g),y="rtl"===(0,Z.Z)().direction;return!!u?(0,l.jsxs)(s.Z,(0,i.Z)((0,i.Z)({sx:v},b),{},{children:[(0,l.jsx)(j,(0,i.Z)((0,i.Z)({filled:o,shape:n,hasChildren:!!u,onClick:d},x),{},{sx:(0,i.Z)({left:16},null===x||void 0===x?void 0:x.sx),children:(0,l.jsx)(f,{icon:a,isRTL:y})})),u,(0,l.jsx)(j,(0,i.Z)((0,i.Z)({filled:o,shape:n,hasChildren:!!u,onClick:c},p),{},{sx:(0,i.Z)({right:16},null===p||void 0===p?void 0:p.sx),children:(0,l.jsx)(m,{icon:a,isRTL:y})}))]})):(0,l.jsxs)(s.Z,(0,i.Z)((0,i.Z)({direction:"row",alignItems:"center",display:"inline-flex",sx:v},b),{},{children:[(0,l.jsx)(j,(0,i.Z)((0,i.Z)({filled:o,shape:n,onClick:d},x),{},{children:(0,l.jsx)(f,{icon:a,isRTL:y})})),(0,l.jsx)(j,(0,i.Z)((0,i.Z)({filled:o,shape:n,onClick:c},p),{},{children:(0,l.jsx)(m,{icon:a,isRTL:y})}))]}))}var y=n(4565),w=n(65266),C=["index","total","onNext","onPrevious","icon","sx"],k=(0,o.ZP)(a.Z)((function(e){var t=e.theme;return(0,i.Z)((0,i.Z)({},(0,w.Ls)({opacity:.48,color:t.palette.grey[900]})),{},{zIndex:9,display:"inline-flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),padding:t.spacing(.25),color:t.palette.common.white,borderRadius:t.shape.borderRadius})})),P=(0,o.ZP)(p.Z)({width:28,height:28,padding:0,opacity:.48,"&:hover":{opacity:1}});function R(e){var t=e.index,n=e.total,r=e.onNext,o=e.onPrevious,a=e.icon,s=e.sx,c=(0,h.Z)(e,C),d="rtl"===(0,Z.Z)().direction;return(0,l.jsxs)(k,(0,i.Z)((0,i.Z)({sx:s},c),{},{children:[(0,l.jsx)(P,{color:"inherit",onClick:o,children:(0,l.jsx)(f,{icon:a,isRTL:d})}),(0,l.jsxs)(y.Z,{variant:"subtitle2",component:"span",sx:{mx:.25},children:[t+1,"/",n]}),(0,l.jsx)(P,{color:"inherit",onClick:r,children:(0,l.jsx)(m,{icon:a,isRTL:d})})]}))}var S=r.Z},87383:function(e,t,n){n.d(t,{Z:function(){return Z}});var r=n(1413),i=n(45987),o=n(96015),a=n(94162),s=n(4565),l=n(33888),c=n(46283),d=n(11087),u=n(80184);function h(e){var t=e.link,n=e.activeLast,i=e.disabled,a=t.name,s=t.href,l=t.icon,h=(0,r.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},i&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),a]});return s?(0,u.jsx)(c.Z,{component:d.rU,to:s,sx:h,children:x}):(0,u.jsxs)(o.Z,{sx:h,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function Z(e){var t=e.links,n=e.action,d=e.heading,Z=e.moreLink,v=e.activeLast,f=e.sx,m=(0,i.Z)(e,x),g=t[t.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,r.Z)({mb:5},f),children:[(0,u.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:d}),!!t.length&&(0,u.jsx)(l.Z,(0,r.Z)((0,r.Z)({separator:(0,u.jsx)(p,{})},m),{},{children:t.map((function(e){return(0,u.jsx)(h,{link:e,activeLast:v,disabled:e.name===g},e.name||"")}))}))]}),n&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!Z&&(0,u.jsx)(o.Z,{sx:{mt:2},children:Z.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function p(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},22893:function(e,t,n){n.d(t,{Z:function(){return Z},t:function(){return a}});var r=n(74142),i=n(37306),o=n(12073);function a(e){var t=(0,r.Z)(),n=(0,i.z)(),a=t.breakpoints.up("xl"===n?"lg":n),s=("h1"===e||"h2"===e||"h3"===e||"h4"===e||"h5"===e||"h6"===e)&&t.typography[e][a]?t.typography[e][a]:t.typography[e],l=(0,o.cv)(s.fontSize),c=Number(t.typography[e].lineHeight)*l,d=t.typography[e];return{fontSize:l,lineHeight:c,fontWeight:d.fontWeight,letterSpacing:d.letterSpacing}}var s=n(1413),l=n(45987),c=n(72791),d=n(46283),u=n(4565),h=n(80184),x=["asLink","variant","line","persistent","children","sx"],Z=(0,c.forwardRef)((function(e,t){var n=e.asLink,r=e.variant,i=void 0===r?"body1":r,o=e.line,c=void 0===o?2:o,Z=e.persistent,p=void 0!==Z&&Z,v=e.children,f=e.sx,m=(0,l.Z)(e,x),g=a(i).lineHeight,j=(0,s.Z)((0,s.Z)({overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:c,WebkitBoxOrient:"vertical"},p&&{height:g*c}),f);return n?(0,h.jsx)(d.Z,(0,s.Z)((0,s.Z)({color:"inherit",ref:t,variant:i,sx:(0,s.Z)({},j)},m),{},{children:v})):(0,h.jsx)(u.Z,(0,s.Z)((0,s.Z)({ref:t,variant:i,sx:(0,s.Z)({},j)},m),{},{children:v}))}))},17616:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var r=n(93433),i=n(6907),o=n(96015),a=n(20803),s=n(48928),l=n(16398),c=n(55194),d=n(94162),u=n(16002),h=n(7055),x=n(71353),Z=n(87383),p=n(1413),v=n(29439),f=n(72791),m=n(74142),g=n(43932),j=n(42774),b=n(80184);function y(e){var t=e.data,n=(0,m.Z)(),r=(0,f.useRef)(null),i=(0,f.useState)("rtl"===n.direction?t.length-1:0),o=(0,v.Z)(i,2),a=o[0],l=o[1],c={dots:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===n.direction),beforeChange:function(e,t){return l(t)}};return(0,b.jsxs)(s.Z,{children:[(0,b.jsx)(j.ZP,(0,p.Z)((0,p.Z)({ref:r},c),{},{children:t.map((function(e){return(0,b.jsx)(g.Z,{alt:e.title,src:e.image,ratio:"1/1"},e.id)}))})),(0,b.jsx)(j.cU,{index:a,total:t.length,onNext:function(){var e;null===(e=r.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=r.current)||void 0===e||e.slickPrev()}})]})}var w=n(4565);function C(e){var t=e.data,n=(0,m.Z)(),r=(0,f.useRef)(null),i=(0,f.useState)(2),o=(0,v.Z)(i,2),a=o[0],l=o[1],u={dots:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,initialSlide:a,fade:Boolean("rtl"!==n.direction),rtl:Boolean("rtl"===n.direction),beforeChange:function(e,t){return l(t)}};return(0,b.jsxs)(s.Z,{children:[(0,b.jsx)(j.ZP,(0,p.Z)((0,p.Z)({ref:r},u),{},{children:t.map((function(e){return(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(g.Z,{alt:e.title,src:e.image,ratio:"4/3"}),(0,b.jsxs)(c.Z,{sx:{textAlign:"left"},children:[(0,b.jsx)(w.Z,{variant:"h6",noWrap:!0,gutterBottom:!0,children:e.title}),(0,b.jsx)(w.Z,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:e.description})]})]},e.id)}))})),(0,b.jsx)(j.cU,{index:a,total:t.length,onNext:function(){var e;null===(e=r.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=r.current)||void 0===e||e.slickPrev()},sx:{bottom:120}})]})}function k(e){var t=e.data,n=(0,m.Z)(),r=(0,f.useRef)(null),i=(0,p.Z)({dots:!0,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===n.direction)},(0,j.A0)({rounded:!0,sx:{mt:3}}));return(0,b.jsx)(o.Z,{sx:{position:"relative","& .slick-list":{borderRadius:2,boxShadow:n.customShadows.z16}},children:(0,b.jsx)(j.i5,{filled:!0,shape:"rounded",onNext:function(){var e;null===(e=r.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=r.current)||void 0===e||e.slickPrev()},children:(0,b.jsx)(j.ZP,(0,p.Z)((0,p.Z)({ref:r},i),{},{children:t.map((function(e){return(0,b.jsx)(P,{item:e},e.id)}))}))})})}function P(e){var t=e.item,n=t.image,r=t.title;return(0,b.jsx)(g.Z,{alt:r,src:n,ratio:"1/1"})}var R=n(60277),S=n(12065),T=n(13811),N=n(65266),B=n(8523),L=(0,R.ZP)("div")((function(e){var t=e.theme;return(0,p.Z)((0,p.Z)({},(0,N.Ls)({color:t.palette.grey[900]})),{},{bottom:0,zIndex:9,width:"100%",display:"flex",position:"absolute",alignItems:"center",padding:t.spacing(3),borderBottomLeftRadius:16,borderBottomRightRadius:16,justifyContent:"space-between",flexDirection:"rtl"===t.direction?"row-reverse":"row"})}));function I(e){var t=e.data,n=(0,m.Z)(),r=(0,f.useRef)(null),i={dots:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,fade:Boolean("rtl"!==n.direction),rtl:Boolean("rtl"===n.direction)};return(0,b.jsx)(s.Z,{children:(0,b.jsx)(j.i5,{filled:!0,shape:"rounded",onNext:function(){var e;null===(e=r.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=r.current)||void 0===e||e.slickPrev()},children:(0,b.jsx)(j.ZP,(0,p.Z)((0,p.Z)({ref:r},i),{},{children:t.map((function(e){return(0,b.jsx)(M,{item:e},e.id)}))}))})})}function M(e){var t=e.item,n=t.image,r=t.title;return(0,b.jsxs)(o.Z,{sx:{position:"relative",zIndex:0},children:[(0,b.jsx)(g.Z,{alt:r,src:n,ratio:"1/1"}),(0,b.jsxs)(L,{children:[(0,b.jsx)(w.Z,{variant:"h6",sx:{color:"common.white"},children:t.title}),(0,b.jsx)(T.Z,{onClick:function(){},sx:{color:"common.white","&:hover":{bgcolor:function(e){return(0,S.Fq)(e.palette.common.white,e.palette.action.hoverOpacity)}}},children:(0,b.jsx)(B.Z,{icon:"eva:more-horizontal-fill"})})]})]})}var W=n(67098),z=n(30286),A=n(61091),F=n(83064);function H(e){var t=e.data,n=(0,m.Z)(),r=(0,f.useRef)(null),i=(0,f.useState)("rtl"===n.direction?t.length-1:0),o=(0,v.Z)(i,2),a=o[0],l=o[1],c={speed:800,dots:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===n.direction),beforeChange:function(e,t){return l(t)}};return(0,b.jsxs)(s.Z,{children:[(0,b.jsx)(j.ZP,(0,p.Z)((0,p.Z)({ref:r},c),{},{children:t.map((function(e,t){return(0,b.jsx)(U,{item:e,isActive:t===a},e.id)}))})),(0,b.jsx)(j.cU,{index:a,total:t.length,onNext:function(){var e;null===(e=r.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=r.current)||void 0===e||e.slickPrev()}})]})}function U(e){var t=e.item,n=e.isActive,r=(0,m.Z)(),i=t.image,a=t.title;return(0,b.jsxs)(z.Z,{sx:{position:"relative"},children:[(0,b.jsx)(g.Z,{alt:a,src:i,ratio:"16/9"}),(0,b.jsx)(o.Z,{sx:(0,p.Z)({top:0,width:1,height:1,position:"absolute"},(0,N.v3)({direction:"to top",startColor:"".concat(r.palette.grey[900]," 0%"),endColor:"".concat((0,S.Fq)(r.palette.grey[900],0)," 100%")}))}),(0,b.jsxs)(c.Z,{component:F.NM,animate:n,action:!0,sx:{bottom:0,width:1,maxWidth:720,textAlign:"left",position:"absolute",color:"common.white"},children:[(0,b.jsx)(W.m.div,{variants:(0,F.EU)().inRight,children:(0,b.jsx)(w.Z,{variant:"h3",gutterBottom:!0,children:t.title})}),(0,b.jsx)(W.m.div,{variants:(0,F.EU)().inRight,children:(0,b.jsx)(w.Z,{variant:"body2",noWrap:!0,gutterBottom:!0,children:t.description})}),(0,b.jsx)(W.m.div,{variants:(0,F.EU)().inRight,children:(0,b.jsx)(A.Z,{variant:"contained",sx:{mt:3},children:"View More"})})]})]})}var _=64,q=(0,R.ZP)("div",{shouldForwardProp:function(e){return"length"!==e}})((function(e){var t=e.length,n=e.theme;return(0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)({margin:n.spacing(0,"auto"),position:"relative","& .slick-slide":{opacity:.48,"&.slick-current":{opacity:1},"& > div":{padding:n.spacing(0,.75)}}},1===t&&{maxWidth:80}),2===t&&{maxWidth:160}),(3===t||4===t)&&{maxWidth:240}),t>=5&&{maxWidth:384}),t>2&&{"&:before, &:after":(0,p.Z)((0,p.Z)({},(0,N.v3)({direction:"to left",startColor:"".concat((0,S.Fq)(n.palette.background.default,0)," 0%"),endColor:"".concat(n.palette.background.default," 100%")})),{},{top:0,zIndex:9,content:"''",height:"100%",position:"absolute",width:128/3}),"&:after":{right:0,transform:"scaleX(-1)"}})}));function E(e){var t=e.data,n=(0,f.useState)(0),r=(0,v.Z)(n,2),i=r[0],a=r[1],s=(0,f.useState)(void 0),l=(0,v.Z)(s,2),c=l[0],d=l[1],u=(0,f.useState)(void 0),h=(0,v.Z)(u,2),x=h[0],Z=h[1],m=(0,f.useRef)(null),y=(0,f.useRef)(null),w={dots:!1,arrows:!1,slidesToShow:1,draggable:!1,slidesToScroll:1,adaptiveHeight:!0,beforeChange:function(e,t){return a(t)}},C={dots:!1,arrows:!1,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,variableWidth:!0,centerPadding:"0px",slidesToShow:t.length>3?3:t.length};(0,f.useEffect)((function(){m.current&&d(m.current),y.current&&Z(y.current)}),[]);var k=(0,b.jsxs)(o.Z,{sx:{mb:3,zIndex:0,borderRadius:2,overflow:"hidden",position:"relative"},children:[(0,b.jsx)(j.ZP,(0,p.Z)((0,p.Z)({},w),{},{asNavFor:x,ref:m,children:t.map((function(e){return(0,b.jsx)(g.Z,{alt:e.title,src:e.image,ratio:"16/9"},e.id)}))})),(0,b.jsx)(j.cU,{index:i,total:t.length,onNext:function(){var e;null===(e=y.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=y.current)||void 0===e||e.slickPrev()}})]}),P=(0,b.jsx)(q,{length:t.length,children:(0,b.jsx)(j.ZP,(0,p.Z)((0,p.Z)({},C),{},{asNavFor:c,ref:y,children:t.map((function(e,t){return(0,b.jsx)(g.Z,{disabledEffect:!0,alt:e.title,src:e.image,sx:(0,p.Z)({width:_,height:_,borderRadius:1.5,cursor:"pointer"},i===t&&{border:function(e){return"solid 2px ".concat(e.palette.primary.main)}})},e.id)}))}))});return(0,b.jsxs)(o.Z,{sx:{"& .slick-slide":{float:function(e){return"rtl"===e.direction?"right":"left"}}},children:[k,P]})}var O=n(46283),X=n(22893);function D(e){var t=e.data,n=(0,f.useRef)(null),r=(0,m.Z)(),i={slidesToShow:3,centerMode:!0,centerPadding:"60px",rtl:Boolean("rtl"===r.direction),responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1,centerPadding:"0"}}]};return(0,b.jsx)(o.Z,{sx:{overflow:"hidden",position:"relative"},children:(0,b.jsx)(j.i5,{filled:!0,icon:"noto:rightwards-hand",onNext:function(){var e;null===(e=n.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=n.current)||void 0===e||e.slickPrev()},children:(0,b.jsx)(j.ZP,(0,p.Z)((0,p.Z)({ref:n},i),{},{children:t.map((function(e){return(0,b.jsx)(o.Z,{sx:{px:1},children:(0,b.jsx)(G,{item:e})},e.id)}))}))})})}function G(e){var t=e.item,n=(0,m.Z)(),r=t.image,i=t.title;return(0,b.jsxs)(z.Z,{sx:{borderRadius:2,overflow:"hidden",position:"relative"},children:[(0,b.jsx)(g.Z,{alt:i,src:r,ratio:"3/4"}),(0,b.jsxs)(c.Z,{sx:(0,p.Z)({bottom:0,zIndex:9,width:"100%",textAlign:"left",position:"absolute",color:"common.white"},(0,N.v3)({direction:"to top",startColor:"".concat(n.palette.grey[900]," 25%"),endColor:"".concat((0,S.Fq)(n.palette.grey[900],0)," 100%")})),children:[(0,b.jsx)(X.Z,{variant:"h4",paragraph:!0,children:i}),(0,b.jsxs)(O.Z,{color:"inherit",variant:"overline",sx:{opacity:.72,alignItems:"center",display:"inline-flex",transition:n.transitions.create("opacity"),"&:hover":{opacity:1}},children:["learn More",(0,b.jsx)(B.Z,{icon:"eva:arrow-forward-fill",width:16,sx:{ml:1}})]})]})]})}var V=(0,r.Z)(Array(5)).map((function(e,t){return{id:x.ZP.id(t),title:x.ZP.text.title(t),image:x.ZP.image.cover(t),description:x.ZP.text.description(t)}}));function J(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.ql,{children:(0,b.jsx)("title",{children:" Extra Components: Carousels | Minimal UI"})}),(0,b.jsx)(o.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,b.jsx)(a.Z,{children:(0,b.jsx)(Z.Z,{heading:"Carousel",links:[{name:"Components",href:h.ko.components},{name:"Carousel"}],moreLink:["https://react-slick.neostack.com"]})})}),(0,b.jsxs)(a.Z,{sx:{my:10},children:[(0,b.jsxs)(u.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,b.jsxs)(s.Z,{children:[(0,b.jsx)(l.Z,{title:"Carousel Basic 1"}),(0,b.jsx)(c.Z,{children:(0,b.jsx)(y,{data:V})})]}),(0,b.jsxs)(s.Z,{children:[(0,b.jsx)(l.Z,{title:"Carousel Basic 2"}),(0,b.jsx)(c.Z,{children:(0,b.jsx)(C,{data:V})})]}),(0,b.jsxs)(s.Z,{children:[(0,b.jsx)(l.Z,{title:"Carousel Basic 3"}),(0,b.jsx)(c.Z,{children:(0,b.jsx)(k,{data:V})})]}),(0,b.jsxs)(s.Z,{children:[(0,b.jsx)(l.Z,{title:"Carousel Basic 4"}),(0,b.jsx)(c.Z,{children:(0,b.jsx)(I,{data:V})})]})]}),(0,b.jsxs)(d.Z,{spacing:3,children:[(0,b.jsxs)(s.Z,{children:[(0,b.jsx)(l.Z,{title:"Carousel Thumbnail"}),(0,b.jsx)(c.Z,{children:(0,b.jsx)(E,{data:V})})]}),(0,b.jsxs)(s.Z,{children:[(0,b.jsx)(l.Z,{title:"Carousel Center Mode",subheader:"Customs shape & icon button"}),(0,b.jsx)(c.Z,{children:(0,b.jsx)(D,{data:V})})]}),(0,b.jsxs)(s.Z,{children:[(0,b.jsx)(l.Z,{title:"Carousel Animation"}),(0,b.jsx)(c.Z,{children:(0,b.jsx)(H,{data:V})})]})]})]})]})}},55194:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(87462),i=n(63366),o=n(72791),a=n(28182),s=n(94419),l=n(60277),c=n(85513),d=n(75878),u=n(21217);function h(e){return(0,u.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var x=n(80184),Z=["className","component"],p=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),v=o.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiCardContent"}),o=n.className,l=n.component,d=void 0===l?"div":l,u=(0,i.Z)(n,Z),v=(0,r.Z)({},n,{component:d}),f=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},h,t)}(v);return(0,x.jsx)(p,(0,r.Z)({as:d,className:(0,a.Z)(f.root,o),ownerState:v,ref:t},u))}))},16398:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(4942),i=n(63366),o=n(87462),a=n(72791),s=n(28182),l=n(94419),c=n(4565),d=n(85513),u=n(60277),h=n(75878),x=n(21217);function Z(e){return(0,x.Z)("MuiCardHeader",e)}var p=(0,h.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),v=n(80184),f=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],m=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var n;return(0,o.Z)((n={},(0,r.Z)(n,"& .".concat(p.title),t.title),(0,r.Z)(n,"& .".concat(p.subheader),t.subheader),n),t.root)}})({display:"flex",alignItems:"center",padding:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=a.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiCardHeader"}),r=n.action,a=n.avatar,u=n.className,h=n.component,x=void 0===h?"div":h,p=n.disableTypography,y=void 0!==p&&p,w=n.subheader,C=n.subheaderTypographyProps,k=n.title,P=n.titleTypographyProps,R=(0,i.Z)(n,f),S=(0,o.Z)({},n,{component:x,disableTypography:y}),T=function(e){var t=e.classes;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},Z,t)}(S),N=k;null==N||N.type===c.Z||y||(N=(0,v.jsx)(c.Z,(0,o.Z)({variant:a?"body2":"h5",className:T.title,component:"span",display:"block"},P,{children:N})));var B=w;return null==B||B.type===c.Z||y||(B=(0,v.jsx)(c.Z,(0,o.Z)({variant:a?"body2":"body1",className:T.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:B}))),(0,v.jsxs)(m,(0,o.Z)({className:(0,s.Z)(T.root,u),as:x,ref:t,ownerState:S},R,{children:[a&&(0,v.jsx)(g,{className:T.avatar,ownerState:S,children:a}),(0,v.jsxs)(b,{className:T.content,ownerState:S,children:[N,B]}),r&&(0,v.jsx)(j,{className:T.action,ownerState:S,children:r})]}))}))}}]);
//# sourceMappingURL=7616.730324cf.chunk.js.map