"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[3187],{3187:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var r=n(74165),i=n(15861),o=n(29439),a=n(6907),s=n(72791),c=n(57689),l=n(74142),u=n(20803),d=n(48928),f=n(94162),h=n(81872),v=n(69963),m=n(75814),x=n(13811),Z=n(21680),p=n(19773),g=n(61091),S=n(7055),j=n(8523),k=n(53512),w=n(7456),y=n(87383),b=n(46839),C=n(54278),P=n(12065),D=n(96580),F=n(4565),N=n(96015),I=n(50289),R=n(80184);function B(e){var t=e.title,n=e.total,r=e.icon,i=e.color,o=e.percent,a=e.price;return(0,R.jsxs)(f.Z,{direction:"row",alignItems:"center",justifyContent:"center",sx:{width:1,minWidth:200},children:[(0,R.jsxs)(f.Z,{alignItems:"center",justifyContent:"center",sx:{position:"relative"},children:[(0,R.jsx)(j.Z,{icon:r,width:24,sx:{color:i,position:"absolute"}}),(0,R.jsx)(D.Z,{variant:"determinate",value:o,size:56,thickness:4,sx:{color:i,opacity:.48}}),(0,R.jsx)(D.Z,{variant:"determinate",value:100,size:56,thickness:4,sx:{top:0,left:0,opacity:.48,position:"absolute",color:function(e){return(0,P.Fq)(e.palette.grey[500],.16)}}})]}),(0,R.jsxs)(f.Z,{spacing:.5,sx:{ml:2},children:[(0,R.jsx)(F.Z,{variant:"h6",children:t}),(0,R.jsxs)(F.Z,{variant:"subtitle2",children:[(0,I.v1)(n)," ",(0,R.jsx)(N.Z,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"votants"})]}),(0,R.jsx)(F.Z,{variant:"subtitle2",sx:{color:i},children:(0,I.e_)(a)})]})]})}var A=n(57374),M=n(65317),_=[{id:"NNI",label:"NNI",align:"left"},{id:"Nom",label:"Nom",align:"left"},{id:"Point focal",label:"Point focal",align:"left"},{id:"Bureau",label:"Bureau",align:"left"},{id:"Date",label:"Date",align:"left"},{}];function O(){var e=(0,l.Z)(),t=(0,b.K$)().themeStretch,n=(0,c.s0)(),P=(0,C.x6)({defaultOrderBy:"createDate"}),D=P.dense,F=P.page,N=P.order,I=P.orderBy,O=P.rowsPerPage,z=P.setPage,E=P.selected,T=P.onSelectRow,W=P.onSort,K=P.onChangeDense,L=P.onChangePage,q=P.onChangeRowsPerPage,V=(0,s.useState)([]),$=(0,o.Z)(V,2),G=$[0],J=$[1],Q=(0,s.useState)([]),U=(0,o.Z)(Q,2),H=(U[0],U[1]),X=(0,s.useState)(""),Y=(0,o.Z)(X,2),ee=Y[0],te=Y[1],ne=(0,s.useState)(!1),re=(0,o.Z)(ne,2),ie=re[0],oe=re[1],ae=(0,s.useState)(""),se=(0,o.Z)(ae,2),ce=se[0],le=(se[1],(0,s.useState)("")),ue=(0,o.Z)(le,2),de=ue[0],fe=ue[1],he=(0,s.useState)(5),ve=(0,o.Z)(he,2),me=(ve[0],ve[1],(0,s.useState)(1)),xe=(0,o.Z)(me,2),Ze=(xe[0],xe[1],(0,s.useState)("")),pe=(0,o.Z)(Ze,2),ge=pe[0],Se=pe[1],je=(0,s.useState)(null),ke=(0,o.Z)(je,2),we=ke[0],ye=ke[1],be=(0,s.useState)(null),Ce=(0,o.Z)(be,2),Pe=Ce[0],De=Ce[1],Fe=(0,s.useState)(""),Ne=(0,o.Z)(Fe,2),Ie=(Ne[0],Ne[1]),Re=(0,s.useState)(""),Be=(0,o.Z)(Re,2),Ae=(Be[0],Be[1]),Me=(0,s.useState)(!1),_e=(0,o.Z)(Me,2),Oe=_e[0],ze=(_e[1],(0,s.useCallback)(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=M.Z.getListMembers(),J(i);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[])),Ee=(0,s.useCallback)(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n,i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M.Z.getAllActes(t,n,i).then((function(e){var t=e.data.content;J(t),console.log("Get Actes by NNI From API :OK",t)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),[]),Te=(0,s.useCallback)(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n,i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M.Z.filterActesByVaccine(t,n,i).then((function(e){var t=e.data.content;J(t),console.log("Get Actes ByVaccine From API :OK",t)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),[]),We=(0,s.useCallback)(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n,i,o){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M.Z.filterActesByDate(t,n,i,o).then((function(e){var t=e.data.content;J(t),console.log("Data filterByDate From API :OK",JSON.stringify(t,null,2))})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r,i){return e.apply(this,arguments)}}(),[]);(0,s.useEffect)((function(){if(!ee)return Pe&&we?(console.log("from : ",Pe.toISOString().split("T")[0]),console.log("to : ",we.toISOString().split("T")[0]),void We(0,10,we.toISOString().split("T")[0],Pe.toISOString().split("T")[0])):void ze(0,10);Ee(0,10,ee)}),[ze,We,ee,Pe,we,Ee]),(0,s.useEffect)((function(){if(G)G.map((function(e){return e}))}),[G,H]),(0,s.useEffect)((function(){Oe&&Te(0,10,ce)}),[Oe,Te,ce]);var Ke=D?56:76,Le=""!==de||""!==ge||""!==ee||!!Pe&&!!we,qe=function(){oe(!1)};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(a.ql,{children:(0,R.jsx)("title",{children:" Campagnes: List | Minimal UI"})}),(0,R.jsxs)(u.Z,{maxWidth:!t&&"lg",children:[(0,R.jsx)(y.Z,{heading:"Adherants",links:[{name:"Tableaux de bord",href:""},{name:"Liste des adherants",href:S.vB.vaccinCamp.list},{name:"Liste"}]}),(0,R.jsx)(d.Z,{sx:{mb:5},children:(0,R.jsx)(k.Z,{children:(0,R.jsxs)(f.Z,{direction:"row",divider:(0,R.jsx)(h.Z,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),sx:{py:2},children:[(0,R.jsx)(B,{title:"Total votants",total:100,percent:70,price:0,icon:"ic:people",color:e.palette.info.main}),(0,R.jsx)(B,{title:"Total restants",total:900,percent:50,price:0,icon:"eva:checkmark-circle-2-fill",color:e.palette.success.main}),(0,R.jsx)(B,{title:"En attentes",total:500,percent:30,price:0,icon:"eva:clock-fill",color:e.palette.warning.main})]})})}),(0,R.jsxs)(d.Z,{children:[(0,R.jsx)(h.Z,{}),(0,R.jsx)(A.N,{isFiltered:Le,filterName:ee,filterWillaya:de,filterMougataa:ge,onFilterName:function(e){z(0),te(e.target.value)},onResetFilter:function(){te(""),Se(""),fe(""),Ae(""),Ie(""),ye(null),De(null)},onFilterWillaya:function(e){z(0),fe(e.target.value)},onFilterMoughataa:function(e){z(0),Se(e.target.value)},onFilterStartDate:function(e){De(e)},onFilterEndDate:function(e){ye(e)},filterStartDate:void 0,filterEndDate:void 0}),(0,R.jsxs)(v.Z,{sx:{position:"relative",overflow:"unset"},children:[(0,R.jsx)(C.Z4,{dense:D,numSelected:E.length,rowCount:1,onSelectAllRows:function(){return null},action:(0,R.jsxs)(f.Z,{direction:"row",children:[(0,R.jsx)(m.Z,{title:"Sent",children:(0,R.jsx)(x.Z,{color:"primary",children:(0,R.jsx)(j.Z,{icon:"ic:round-send"})})}),(0,R.jsx)(m.Z,{title:"Download",children:(0,R.jsx)(x.Z,{color:"primary",children:(0,R.jsx)(j.Z,{icon:"eva:download-outline"})})}),(0,R.jsx)(m.Z,{title:"Print",children:(0,R.jsx)(x.Z,{color:"primary",children:(0,R.jsx)(j.Z,{icon:"eva:printer-fill"})})}),(0,R.jsx)(m.Z,{title:"Delete",children:(0,R.jsx)(x.Z,{color:"primary",onClick:function(){oe(!0)},children:(0,R.jsx)(j.Z,{icon:"eva:trash-2-outline"})})})]})}),(0,R.jsx)(k.Z,{children:(0,R.jsxs)(Z.Z,{size:D?"small":"medium",sx:{minWidth:800},children:[(0,R.jsx)(C.K,{order:N,orderBy:I,headLabel:_,rowCount:1,numSelected:E.length,onSort:W,onSelectAllRows:function(){return null}}),(0,R.jsxs)(p.Z,{children:[G.slice(F*O,F*O+O).map((function(e){return(0,R.jsx)(A.D,{row:e,selected:E.includes(e.id.toString()),onSelectRow:function(){return T(e.id.toString())},onViewRow:function(){return t=e.id.toString(),void n(S.vB.invoice.view(t));var t},onEditRow:function(){return t=e.id.toString(),void n(S.vB.invoice.edit(t));var t},onDeleteRow:function(){e.id.toString()}},e.id)})),(0,R.jsx)(C.$W,{height:Ke,emptyRows:(0,C.fQ)(F,O,G.length)}),(0,R.jsx)(C.et,{isNotFound:!1})]})]})})]}),(0,R.jsx)(C.S_,{count:1,page:F,rowsPerPage:O,onPageChange:L,onRowsPerPageChange:q,dense:D,onChangeDense:K})]})]}),(0,R.jsx)(w.Z,{open:ie,onClose:qe,title:"Delete",content:(0,R.jsxs)(R.Fragment,{children:["\xcates-vous s\xfbr que vous souhaitez supprimer ",(0,R.jsxs)("strong",{children:[" ",E.length," "]})," actes?"]}),action:(0,R.jsx)(g.Z,{variant:"contained",color:"error",onClick:function(){qe()},children:"Supprimer"})})]})}},50289:function(e,t,n){n.d(t,{FK:function(){return o},e_:function(){return a},f2:function(){return s},oe:function(){return l},v1:function(){return c}});var r=n(26098),i=n.n(r);function o(e){return i()(e).format()}function a(e){return u(e?i()(e).format("$0,0.00"):"",".00")}function s(e){return u(e?i()(Number(e)/100).format("0.0%"):"",".0")}function c(e){return u(e?i()(e).format("0.00a"):"",".00")}function l(e){return u(e?i()(e).format("0.0 b"):"",".0")}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".00",n=e.includes(t);return n?e.replace(t,""):e}},96580:function(e,t,n){n.d(t,{Z:function(){return R}});var r=n(30168),i=n(63366),o=n(87462),a=n(72791),s=n(28182),c=n(94419),l=n(38125),u=n(49853),d=n(85513),f=n(60277),h=n(75878),v=n(21217);function m(e){return(0,v.Z)("MuiCircularProgress",e)}(0,h.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var x,Z,p,g,S,j,k,w,y=n(80184),b=["className","color","disableShrink","size","style","thickness","value","variant"],C=44,P=(0,l.F4)(S||(S=x||(x=(0,r.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),D=(0,l.F4)(j||(j=Z||(Z=(0,r.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),F=(0,f.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["color".concat((0,u.Z)(n.color))]]}})((function(e){var t=e.ownerState,n=e.theme;return(0,o.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:n.transitions.create("transform")},"inherit"!==t.color&&{color:(n.vars||n).palette[t.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,l.iv)(k||(k=p||(p=(0,r.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),P)})),N=(0,f.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,t){return t.svg}})({display:"block"}),I=(0,f.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,t){var n=e.ownerState;return[t.circle,t["circle".concat((0,u.Z)(n.variant))],n.disableShrink&&t.circleDisableShrink]}})((function(e){var t=e.ownerState,n=e.theme;return(0,o.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var t=e.ownerState;return"indeterminate"===t.variant&&!t.disableShrink&&(0,l.iv)(w||(w=g||(g=(0,r.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),D)})),R=a.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiCircularProgress"}),r=n.className,a=n.color,l=void 0===a?"primary":a,f=n.disableShrink,h=void 0!==f&&f,v=n.size,x=void 0===v?40:v,Z=n.style,p=n.thickness,g=void 0===p?3.6:p,S=n.value,j=void 0===S?0:S,k=n.variant,w=void 0===k?"indeterminate":k,P=(0,i.Z)(n,b),D=(0,o.Z)({},n,{color:l,disableShrink:h,size:x,thickness:g,value:j,variant:w}),R=function(e){var t=e.classes,n=e.variant,r=e.color,i=e.disableShrink,o={root:["root",n,"color".concat((0,u.Z)(r))],svg:["svg"],circle:["circle","circle".concat((0,u.Z)(n)),i&&"circleDisableShrink"]};return(0,c.Z)(o,m,t)}(D),B={},A={},M={};if("determinate"===w){var _=2*Math.PI*((C-g)/2);B.strokeDasharray=_.toFixed(3),M["aria-valuenow"]=Math.round(j),B.strokeDashoffset="".concat(((100-j)/100*_).toFixed(3),"px"),A.transform="rotate(-90deg)"}return(0,y.jsx)(F,(0,o.Z)({className:(0,s.Z)(R.root,r),style:(0,o.Z)({width:x,height:x},A,Z),ownerState:D,ref:t,role:"progressbar"},M,P,{children:(0,y.jsx)(N,{className:R.svg,ownerState:D,viewBox:"".concat(22," ").concat(22," ").concat(C," ").concat(C),children:(0,y.jsx)(I,{className:R.circle,style:B,ownerState:D,cx:C,cy:C,r:(C-g)/2,fill:"none",strokeWidth:g})})}))}))}}]);
//# sourceMappingURL=3187.897b7ba0.chunk.js.map