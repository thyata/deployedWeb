(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[5621],{57226:function(e,t,r){"use strict";r.d(t,{mu:function(){return ue},q7:function(){return ve},OP:function(){return A},H$:function(){return $},mE:function(){return ne},mb:function(){return be},wz:function(){return ae},E0:function(){return b},BB:function(){return p},xq:function(){return xe}});var n=r(1413),i=r(45987),o=r(74142),s=r(94162),a=r(96015),l=r(4565),c=r(50289),d=r(8523),u=r(11633),h=r(80184),x=["title","total","icon","color","chart","sx"];function p(e){var t=e.title,r=e.total,p=e.icon,f=e.color,Z=void 0===f?"primary":f,v=e.chart,m=e.sx,j=(0,i.Z)(e,x),g=(0,o.Z)(),b=v.series,w=v.options,y=(0,u.Q8)((0,n.Z)({colors:[g.palette[Z].light],chart:{sparkline:{enabled:!0}},legend:{show:!1},plotOptions:{radialBar:{hollow:{size:"78%"},track:{margin:0},dataLabels:{name:{show:!1},value:{offsetY:6,color:g.palette.common.white,fontSize:g.typography.subtitle2.fontSize}}}}},w));return(0,h.jsxs)(s.Z,(0,n.Z)((0,n.Z)({direction:"row",alignItems:"center",sx:(0,n.Z)({p:3,borderRadius:2,overflow:"hidden",position:"relative",color:"common.white",bgcolor:"".concat(Z,".dark")},m)},j),{},{children:[(0,h.jsx)(u.ZP,{type:"radialBar",series:[b],options:y,width:86,height:86}),(0,h.jsxs)(a.Z,{sx:{ml:3},children:[(0,h.jsxs)(l.Z,{variant:"h4",children:[" ",(0,c.FK)(r)]}),(0,h.jsx)(l.Z,{variant:"body2",sx:{opacity:.72},children:t})]}),(0,h.jsx)(d.Z,{icon:p,sx:{width:120,height:120,opacity:.12,position:"absolute",right:g.spacing(-3)}})]}))}var f=r(4942),Z=r(60277),v=r(65266),m=["title","description","action","img"],j=(0,Z.ZP)("div")((function(e){var t=e.theme;return(0,f.Z)({height:"100%",display:"flex",overflow:"hidden",position:"relative",color:t.palette.primary.darker,borderRadius:2*Number(t.shape.borderRadius),flexDirection:"column"},t.breakpoints.up("md"),{flexDirection:"row"})})),g=(0,Z.ZP)("div")((function(e){var t=e.theme;return{top:0,left:0,zIndex:-1,width:"100%",height:"100%",position:"absolute",backgroundColor:t.palette.common.white,"&:before":(0,n.Z)({top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:-2,content:'""',opacity:.2},(0,v.v3)({direction:"135deg",startColor:t.palette.primary.light,endColor:t.palette.primary.main}))}}));function b(e){var t=e.title,r=e.description,o=e.action,a=e.img,c=(0,i.Z)(e,m);return(0,h.jsxs)(j,(0,n.Z)((0,n.Z)({},c),{},{children:[(0,h.jsxs)(s.Z,{flexGrow:1,justifyContent:"center",alignItems:{xs:"center",md:"flex-start"},sx:{pl:5,py:{xs:5,md:0},pr:{xs:5,md:0},textAlign:{xs:"center",md:"left"}},children:[(0,h.jsx)(l.Z,{paragraph:!0,variant:"h4",sx:{whiteSpace:"pre-line"},children:t}),(0,h.jsx)(l.Z,{variant:"body2",sx:{opacity:.8,mb:{xs:3,xl:5}},children:r}),o&&o]}),a&&a,(0,h.jsx)(g,{})]}))}var w=r(29439),y=r(67098),k=r(72791),I=r(12065),C=r(48928),P=r(46283),F=r(43932),R=r(83064),S=r(42774),_=["list"],z=(0,Z.ZP)("div")((function(e){var t=e.theme;return{top:0,left:0,right:0,bottom:0,zIndex:8,position:"absolute",backgroundColor:(0,I.Fq)(t.palette.grey[900],.64)}}));function A(e){var t=e.list,r=(0,i.Z)(e,_),s=(0,o.Z)(),a=(0,k.useRef)(null),l=(0,k.useState)("rtl"===s.direction?t.length-1:0),c=(0,w.Z)(l,2),d=c[0],u=c[1],x=(0,n.Z)({speed:800,dots:!0,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===s.direction),beforeChange:function(e,t){return u(t)}},(0,S.A0)({sx:{top:20,left:20,position:"absolute"}}));return(0,h.jsxs)(C.Z,(0,n.Z)((0,n.Z)({},r),{},{children:[(0,h.jsx)(S.ZP,(0,n.Z)((0,n.Z)({ref:a},x),{},{children:t.map((function(e,t){return(0,h.jsx)(E,{item:e,isActive:t===d},e.id)}))})),(0,h.jsx)(S.i5,{onNext:function(){var e;null===(e=a.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=a.current)||void 0===e||e.slickPrev()},sx:{top:8,right:8,position:"absolute",color:"common.white"}})]}))}function E(e){var t=e.item,r=e.isActive,n=t.image,i=t.title,o=t.description;return(0,h.jsxs)(R.NM,{action:!0,animate:r,sx:{position:"relative"},children:[(0,h.jsxs)(s.Z,{spacing:1,sx:{p:3,width:1,bottom:0,zIndex:9,textAlign:"left",position:"absolute",color:"common.white"},children:[(0,h.jsx)(y.m.div,{variants:(0,R.EU)().inRight,children:(0,h.jsx)(l.Z,{variant:"overline",component:"div",sx:{opacity:.48},children:"Featured App"})}),(0,h.jsx)(y.m.div,{variants:(0,R.EU)().inRight,children:(0,h.jsx)(P.Z,{color:"inherit",underline:"none",children:(0,h.jsx)(l.Z,{variant:"h5",noWrap:!0,children:i})})}),(0,h.jsx)(y.m.div,{variants:(0,R.EU)().inRight,children:(0,h.jsx)(l.Z,{variant:"body2",noWrap:!0,children:o})})]}),(0,h.jsx)(z,{}),(0,h.jsx)(F.Z,{alt:i,src:n,sx:{height:{xs:280,xl:320}}})]})}var D=r(81260),W=r(16398),q=r(69963),O=r(21680),T=r(19773),K=r(81872),N=r(61091),L=r(60807),B=r(24390),G=r(13811),Q=r(35702),U=r(35922),H=r(53512),M=r(22734),V=r(54278),Y=["title","subheader","tableData","tableLabels"];function $(e){var t=e.title,r=e.subheader,o=e.tableData,s=e.tableLabels,l=(0,i.Z)(e,Y);return(0,h.jsxs)(C.Z,(0,n.Z)((0,n.Z)({},l),{},{children:[(0,h.jsx)(W.Z,{title:t,subheader:r,sx:{mb:3}}),(0,h.jsx)(q.Z,{sx:{overflow:"unset"},children:(0,h.jsx)(H.Z,{children:(0,h.jsxs)(O.Z,{sx:{minWidth:720},children:[(0,h.jsx)(V.K,{headLabel:s}),(0,h.jsx)(T.Z,{children:o.map((function(e){return(0,h.jsx)(J,{row:e},e.id)}))})]})})}),(0,h.jsx)(K.Z,{}),(0,h.jsx)(a.Z,{sx:{p:2,textAlign:"right"},children:(0,h.jsx)(N.Z,{size:"small",color:"inherit",endIcon:(0,h.jsx)(d.Z,{icon:"eva:arrow-ios-forward-fill"}),children:"View All"})})]}))}function J(e){var t=e.row,r=(0,k.useState)(null),n=(0,w.Z)(r,2),i=n[0],o=n[1],s=function(){o(null)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(L.Z,{children:[(0,h.jsx)(B.Z,{children:"INV-".concat(t.id)}),(0,h.jsx)(B.Z,{children:t.category}),(0,h.jsx)(B.Z,{children:(0,c.e_)(t.price)}),(0,h.jsx)(B.Z,{children:(0,h.jsx)(U.Z,{variant:"soft",color:("in_progress"===t.status?"warning":"out_of_date"===t.status&&"error")||"success",children:(0,D.G)(t.status)})}),(0,h.jsx)(B.Z,{align:"right",children:(0,h.jsx)(G.Z,{color:i?"inherit":"default",onClick:function(e){o(e.currentTarget)},children:(0,h.jsx)(d.Z,{icon:"eva:more-vertical-fill"})})})]}),(0,h.jsxs)(M.Z,{open:i,onClose:s,arrow:"right-top",sx:{width:160},children:[(0,h.jsxs)(Q.Z,{onClick:function(){s(),console.log("DOWNLOAD",t.id)},children:[(0,h.jsx)(d.Z,{icon:"eva:download-fill"}),"Download"]}),(0,h.jsxs)(Q.Z,{onClick:function(){s(),console.log("PRINT",t.id)},children:[(0,h.jsx)(d.Z,{icon:"eva:printer-fill"}),"Print"]}),(0,h.jsxs)(Q.Z,{onClick:function(){s(),console.log("SHARE",t.id)},children:[(0,h.jsx)(d.Z,{icon:"eva:share-fill"}),"Share"]}),(0,h.jsx)(K.Z,{sx:{borderStyle:"dashed"}}),(0,h.jsxs)(Q.Z,{onClick:function(){s(),console.log("DELETE",t.id)},sx:{color:"error.main"},children:[(0,h.jsx)(d.Z,{icon:"eva:trash-2-outline"}),"Delete"]})]})]})}var X=r(45812),ee=r.n(X),te=r(83423),re=["title","subheader","list"];function ne(e){var t=e.title,r=e.subheader,o=e.list,a=(0,i.Z)(e,re);return(0,h.jsxs)(C.Z,(0,n.Z)((0,n.Z)({},a),{},{children:[(0,h.jsx)(W.Z,{title:t,subheader:r}),(0,h.jsx)(s.Z,{spacing:3,sx:{p:3},children:ee()(o,["favourite"],["desc"]).map((function(e,t){return(0,h.jsx)(ie,{author:e,index:t},e.id)}))})]}))}function ie(e){var t=e.author,r=e.index;return(0,h.jsxs)(s.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,h.jsx)(te.Z,{alt:t.name,src:t.avatar}),(0,h.jsxs)(a.Z,{sx:{flexGrow:1},children:[(0,h.jsx)(l.Z,{variant:"subtitle2",children:t.name}),(0,h.jsxs)(l.Z,{variant:"caption",sx:{mt:.5,display:"flex",alignItems:"center",color:"text.secondary"},children:[(0,h.jsx)(d.Z,{icon:"eva:heart-fill",width:16,sx:{mr:.5}}),(0,c.v1)(t.favourite)]})]}),(0,h.jsx)(d.Z,{icon:"ant-design:trophy-filled",sx:(0,n.Z)((0,n.Z)({p:1,width:40,height:40,borderRadius:"50%",color:"primary.main",bgcolor:function(e){return(0,I.Fq)(e.palette.primary.main,.08)}},1===r&&{color:"info.main",bgcolor:function(e){return(0,I.Fq)(e.palette.info.main,.08)}}),2===r&&{color:"error.main",bgcolor:function(e){return(0,I.Fq)(e.palette.error.main,.08)}})})]})}var oe=r(38447),se=["title","subheader","list"];function ae(e){var t=e.title,r=e.subheader,o=e.list,a=(0,i.Z)(e,se);return(0,h.jsxs)(C.Z,(0,n.Z)((0,n.Z)({},a),{},{children:[(0,h.jsx)(W.Z,{title:t,subheader:r}),(0,h.jsx)(H.Z,{children:(0,h.jsx)(s.Z,{spacing:3,sx:{p:3,pr:0},children:o.map((function(e){return(0,h.jsx)(le,{app:e},e.id)}))})})]}))}function le(e){var t=e.app,r=t.shortcut,n=t.system,i=t.price,o=t.rating,u=t.review,x=t.name;return(0,h.jsxs)(s.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,h.jsx)(a.Z,{sx:{width:48,height:48,flexShrink:0,display:"flex",borderRadius:1.5,alignItems:"center",justifyContent:"center",bgcolor:"background.neutral"},children:(0,h.jsx)(a.Z,{component:"img",src:r,sx:{width:24,height:24}})}),(0,h.jsxs)(a.Z,{sx:{flexGrow:1,minWidth:160},children:[(0,h.jsx)(l.Z,{variant:"subtitle2",children:x}),(0,h.jsxs)(s.Z,{direction:"row",alignItems:"center",sx:{mt:.5,color:"text.secondary"},children:[(0,h.jsx)(d.Z,{width:16,icon:"Mac"===n?"ant-design:apple-filled":"ant-design:windows-filled"}),(0,h.jsx)(l.Z,{variant:"caption",sx:{ml:.5,mr:1},children:n}),(0,h.jsx)(U.Z,{variant:"soft",color:0===i?"success":"error",children:0===i?"Free":(0,c.e_)(i)})]})]}),(0,h.jsxs)(s.Z,{alignItems:"flex-end",sx:{pr:3},children:[(0,h.jsx)(oe.Z,{readOnly:!0,size:"small",precision:.5,name:"reviews",value:o}),(0,h.jsxs)(l.Z,{variant:"caption",sx:{mt:.5,color:"text.secondary"},children:[(0,c.v1)(u)," reviews"]})]})]})}var ce=r(17786),de=["title","subheader","chart"];function ue(e){var t=e.title,r=e.subheader,o=e.chart,s=(0,i.Z)(e,de),l=o.colors,c=o.categories,d=o.series,x=o.options,p=(0,k.useState)("2019"),f=(0,w.Z)(p,2),Z=f[0],v=f[1],m=(0,u.Q8)((0,n.Z)({colors:l,xaxis:{categories:c}},x));return(0,h.jsxs)(C.Z,(0,n.Z)((0,n.Z)({},s),{},{children:[(0,h.jsx)(W.Z,{title:t,subheader:r,action:(0,h.jsx)(ce.fY,{value:Z,onChange:function(e){return v(e.target.value)},children:d.map((function(e){return(0,h.jsx)("option",{value:e.year,children:e.year},e.year)}))})}),d.map((function(e){return(0,h.jsx)(a.Z,{sx:{mt:3,mx:3},dir:"ltr",children:e.year===Z&&(0,h.jsx)(u.ZP,{type:"line",series:e.data,options:m,height:364})},e.year)}))]}))}var he=["title","percent","total","chart","sx"];function xe(e){var t=e.title,r=e.percent,o=e.total,s=e.chart,d=e.sx,x=(0,i.Z)(e,he),p=s.colors,f=s.series,Z=s.options,v=(0,n.Z)({colors:p,chart:{sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"68%",borderRadius:2}},tooltip:{x:{show:!1},y:{formatter:function(e){return(0,c.FK)(e)},title:{formatter:function(){return""}}},marker:{show:!1}}},Z);return(0,h.jsxs)(C.Z,(0,n.Z)((0,n.Z)({sx:(0,n.Z)({display:"flex",alignItems:"center",p:3},d)},x),{},{children:[(0,h.jsxs)(a.Z,{sx:{flexGrow:1},children:[(0,h.jsx)(l.Z,{variant:"subtitle2",children:t}),(0,h.jsx)(pe,{percent:r}),(0,h.jsx)(l.Z,{variant:"h3",children:(0,c.FK)(o)})]}),(0,h.jsx)(u.ZP,{type:"bar",series:[{data:f}],options:v,width:60,height:36})]}))}function pe(e){var t=e.percent;return(0,h.jsxs)(s.Z,{direction:"row",alignItems:"center",sx:{mt:2,mb:1},children:[(0,h.jsx)(d.Z,{icon:t<0?"eva:trending-down-fill":"eva:trending-up-fill",sx:(0,n.Z)({mr:1,p:.5,width:24,height:24,borderRadius:"50%",color:"success.main",bgcolor:function(e){return(0,I.Fq)(e.palette.success.main,.16)}},t<0&&{color:"error.main",bgcolor:function(e){return(0,I.Fq)(e.palette.error.main,.16)}})}),(0,h.jsxs)(l.Z,{component:"div",variant:"subtitle2",children:[t>0&&"+",(0,c.f2)(t)]})]})}var fe=["title","subheader","chart"],Ze=(0,Z.ZP)("div")((function(e){var t=e.theme;return{height:400,marginTop:t.spacing(5),"& .apexcharts-canvas svg":{height:400},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(328,"px) !important")}}}));function ve(e){var t=e.title,r=e.subheader,s=e.chart,a=(0,i.Z)(e,fe),l=(0,o.Z)(),d=s.colors,x=s.series,p=s.options,f=x.map((function(e){return e.value})),Z=(0,u.Q8)((0,n.Z)({chart:{sparkline:{enabled:!0}},colors:d,labels:x.map((function(e){return e.label})),stroke:{colors:[l.palette.background.paper]},legend:{floating:!0,horizontalAlign:"center"},tooltip:{fillSeriesColor:!1,y:{formatter:function(e){return(0,c.FK)(e)},title:{formatter:function(e){return"".concat(e)}}}},plotOptions:{pie:{donut:{size:"90%",labels:{value:{formatter:function(e){return(0,c.FK)(e)}},total:{formatter:function(e){var t=e.globals.seriesTotals.reduce((function(e,t){return e+t}),0);return(0,c.FK)(t)}}}}}}},p));return(0,h.jsxs)(C.Z,(0,n.Z)((0,n.Z)({},a),{},{children:[(0,h.jsx)(W.Z,{title:t,subheader:r}),(0,h.jsx)(Ze,{dir:"ltr",children:(0,h.jsx)(u.ZP,{type:"donut",series:f,options:Z,height:280})})]}))}var me=["title","subheader","list"],je=(0,Z.ZP)((function(e){return(0,h.jsx)(s.Z,(0,n.Z)({direction:"row",alignItems:"center"},e))}))({minWidth:72,flex:"1 1"}),ge=(0,Z.ZP)(d.Z)((function(e){var t=e.theme;return{width:16,height:16,marginRight:t.spacing(.5),color:t.palette.text.disabled}}));function be(e){var t=e.title,r=e.subheader,o=e.list,a=(0,i.Z)(e,me);return(0,h.jsxs)(C.Z,(0,n.Z)((0,n.Z)({},a),{},{children:[(0,h.jsx)(W.Z,{title:t,subheader:r}),(0,h.jsx)(H.Z,{children:(0,h.jsx)(s.Z,{spacing:3,sx:{p:3},children:o.map((function(e){return(0,h.jsx)(we,{country:e},e.id)}))})})]}))}function we(e){var t=e.country;return(0,h.jsxs)(s.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,h.jsxs)(je,{sx:{minWidth:120},children:[(0,h.jsx)(F.Z,{disabledEffect:!0,alt:t.name,src:t.flag,sx:{width:28,mr:1}}),(0,h.jsx)(l.Z,{variant:"subtitle2",children:t.name})]}),(0,h.jsxs)(je,{children:[(0,h.jsx)(ge,{icon:"ant-design:android-filled"}),(0,h.jsx)(l.Z,{variant:"body2",children:(0,c.v1)(t.android)})]}),(0,h.jsxs)(je,{children:[(0,h.jsx)(ge,{icon:"ant-design:windows-filled"}),(0,h.jsx)(l.Z,{variant:"body2",children:(0,c.v1)(t.windows)})]}),(0,h.jsxs)(je,{sx:{minWidth:88},children:[(0,h.jsx)(ge,{icon:"ant-design:apple-filled"}),(0,h.jsx)(l.Z,{variant:"body2",children:(0,c.v1)(t.windows)})]})]})}},95573:function(e,t){"use strict";t.Z={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"}},53849:function(e,t,r){var n=r(87927),i=r(21473);e.exports=function(e,t){var r=-1,o=i(e)?Array(e.length):[];return n(e,(function(e,n,i){o[++r]=t(e,n,i)})),o}},93226:function(e,t,r){var n=r(68950),i=r(98667),o=r(56025),s=r(53849),a=r(19179),l=r(16194),c=r(94480),d=r(2100),u=r(93629);e.exports=function(e,t,r){t=t.length?n(t,(function(e){return u(e)?function(t){return i(t,1===e.length?e[0]:e)}:e})):[d];var h=-1;t=n(t,l(o));var x=s(e,(function(e,r,i){return{criteria:n(t,(function(t){return t(e)})),index:++h,value:e}}));return a(x,(function(e,t){return c(e,t,r)}))}},19179:function(e){e.exports=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}},88558:function(e,t,r){var n=r(70152);e.exports=function(e,t){if(e!==t){var r=void 0!==e,i=null===e,o=e===e,s=n(e),a=void 0!==t,l=null===t,c=t===t,d=n(t);if(!l&&!d&&!s&&e>t||s&&a&&c&&!l&&!d||i&&a&&c||!r&&c||!o)return 1;if(!i&&!s&&!d&&e<t||d&&r&&o&&!i&&!s||l&&r&&o||!a&&o||!c)return-1}return 0}},94480:function(e,t,r){var n=r(88558);e.exports=function(e,t,r){for(var i=-1,o=e.criteria,s=t.criteria,a=o.length,l=r.length;++i<a;){var c=n(o[i],s[i]);if(c)return i>=l?c:c*("desc"==r[i]?-1:1)}return e.index-t.index}},45812:function(e,t,r){var n=r(93226),i=r(93629);e.exports=function(e,t,r,o){return null==e?[]:(i(t)||(t=null==t?[]:[t]),i(r=o?void 0:r)||(r=null==r?[]:[r]),n(e,t,r))}}}]);
//# sourceMappingURL=5621.593a963b.chunk.js.map