"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[9793],{87383:function(e,n,r){r.d(n,{Z:function(){return g}});var t=r(1413),i=r(45987),a=r(96015),s=r(94162),l=r(4565),o=r(33888),c=r(46283),d=r(11087),h=r(80184);function u(e){var n=e.link,r=e.activeLast,i=e.disabled,s=n.name,l=n.href,o=n.icon,u=(0,t.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},i&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,h.jsxs)(h.Fragment,{children:[o&&(0,h.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:o}),s]});return l?(0,h.jsx)(c.Z,{component:d.rU,to:l,sx:u,children:x}):(0,h.jsxs)(a.Z,{sx:u,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function g(e){var n=e.links,r=e.action,d=e.heading,g=e.moreLink,m=e.activeLast,j=e.sx,f=(0,i.Z)(e,x),p=n[n.length-1].name;return(0,h.jsxs)(a.Z,{sx:(0,t.Z)({mb:5},j),children:[(0,h.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,h.jsxs)(a.Z,{sx:{flexGrow:1},children:[d&&(0,h.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,h.jsx)(o.Z,(0,t.Z)((0,t.Z)({separator:(0,h.jsx)(Z,{})},f),{},{children:n.map((function(e){return(0,h.jsx)(u,{link:e,activeLast:m,disabled:e.name===p},e.name||"")}))}))]}),r&&(0,h.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!g&&(0,h.jsx)(a.Z,{sx:{mt:2},children:g.map((function(e){return(0,h.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function Z(){return(0,h.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},14133:function(e,n,r){r.d(n,{Z:function(){return d}});var t=r(1413),i=r(45987),a=r(94162),s=r(4565),l=r(43932),o=r(80184),c=["title","description","img","sx"];function d(e){var n=e.title,r=e.description,d=e.img,h=e.sx,u=(0,i.Z)(e,c);return(0,o.jsxs)(a.Z,(0,t.Z)((0,t.Z)({alignItems:"center",justifyContent:"center",sx:(0,t.Z)({height:1,textAlign:"center",p:function(e){return e.spacing(8,2)}},h)},u),{},{children:[(0,o.jsx)(l.Z,{disabledEffect:!0,alt:"empty content",src:d||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,o.jsx)(s.Z,{variant:"h5",gutterBottom:!0,children:n}),r&&(0,o.jsx)(s.Z,{variant:"body2",sx:{color:"text.secondary"},children:r})]}))}},54278:function(e,n,r){function t(e,n,r){return e>0?Math.max(0,(1+e)*n-r):0}function i(e,n,r){return n[r]<e[r]?-1:n[r]>e[r]?1:0}function a(e,n){return"desc"===e?function(e,r){return i(e,r,n)}:function(e,r){return-i(e,r,n)}}r.d(n,{$W:function(){return Z},K:function(){return v},et:function(){return x},S_:function(){return F},Z4:function(){return P},fQ:function(){return t},sQ:function(){return a},x6:function(){return o}});var s=r(29439),l=r(72791);function o(e){var n=(0,l.useState)(!(null===e||void 0===e||!e.defaultDense)),r=(0,s.Z)(n,2),t=r[0],i=r[1],a=(0,l.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),o=(0,s.Z)(a,2),c=o[0],d=o[1],h=(0,l.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),u=(0,s.Z)(h,2),x=u[0],g=u[1],Z=(0,l.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),m=(0,s.Z)(Z,2),j=m[0],f=m[1],p=(0,l.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),b=(0,s.Z)(p,2),v=b[0],w=b[1],C=(0,l.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),S=(0,s.Z)(C,2),y=S[0],P=S[1],k=(0,l.useCallback)((function(e){""!==e&&(g(c===e&&"asc"===x?"desc":"asc"),d(e))}),[x,c]),R=(0,l.useCallback)((function(e){var n=y.indexOf(e),r=[];-1===n?r=r.concat(y,e):0===n?r=r.concat(y.slice(1)):n===y.length-1?r=r.concat(y.slice(0,-1)):n>0&&(r=r.concat(y.slice(0,n),y.slice(n+1))),P(r)}),[y]),I=(0,l.useCallback)((function(e,n){P(e?n:[])}),[]),D=(0,l.useCallback)((function(e,n){f(n)}),[]),F=(0,l.useCallback)((function(e){f(0),w(parseInt(e.target.value,10)),console.log("onChangeRowsPerPage Is Here",e.target.value)}),[]),W=(0,l.useCallback)((function(e){i(e.target.checked)}),[]);return{dense:t,order:x,page:j,orderBy:c,rowsPerPage:v,selected:y,onSelectRow:R,onSelectAllRows:I,onSort:k,onChangePage:D,onChangeDense:W,onChangeRowsPerPage:F,setPage:f,setDense:i,setOrder:g,setOrderBy:d,setSelected:P,setRowsPerPage:w}}var c=r(60807),d=r(24390),h=r(14133),u=r(80184);function x(e){var n=e.isNotFound;return(0,u.jsx)(c.Z,{children:n?(0,u.jsx)(d.Z,{colSpan:12,children:(0,u.jsx)(h.Z,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,u.jsx)(d.Z,{colSpan:12,sx:{p:0}})})}var g=r(1413);function Z(e){var n=e.emptyRows,r=e.height;return n?(0,u.jsx)(c.Z,{sx:(0,g.Z)({},r&&{height:r*n}),children:(0,u.jsx)(d.Z,{colSpan:9})}):null}var m=r(9827),j=r(45473),f=r(53769),p=r(96015),b={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function v(e){var n=e.order,r=e.orderBy,t=e.rowCount,i=void 0===t?0:t,a=e.headLabel,s=e.numSelected,l=void 0===s?0:s,o=e.onSort,h=e.onSelectAllRows,x=e.sx;return(0,u.jsx)(m.Z,{sx:x,children:(0,u.jsxs)(c.Z,{children:[h&&(0,u.jsx)(d.Z,{padding:"checkbox",children:(0,u.jsx)(j.Z,{indeterminate:l>0&&l<i,checked:i>0&&l===i,onChange:function(e){return h(e.target.checked)}})}),a.map((function(e){return(0,u.jsx)(d.Z,{align:e.align||"left",sortDirection:r===e.id&&n,sx:{width:e.width,minWidth:e.minWidth},children:o?(0,u.jsxs)(f.Z,{hideSortIcon:!0,active:r===e.id,direction:r===e.id?n:"asc",onClick:function(){return o(e.id)},sx:{textTransform:"capitalize"},children:[e.label,r===e.id?(0,u.jsx)(p.Z,{sx:(0,g.Z)({},b),children:"desc"===n?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var w=r(45987),C=r(94162),S=r(4565),y=["dense","action","rowCount","numSelected","onSelectAllRows","sx"];function P(e){var n=e.dense,r=e.action,t=e.rowCount,i=e.numSelected,a=e.onSelectAllRows,s=e.sx,l=(0,w.Z)(e,y);return i?(0,u.jsxs)(C.Z,(0,g.Z)((0,g.Z)({direction:"row",alignItems:"center",sx:(0,g.Z)((0,g.Z)({pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter"},n&&{height:38}),s)},l),{},{children:[(0,u.jsx)(j.Z,{indeterminate:i>0&&i<t,checked:t>0&&i===t,onChange:function(e){return a(e.target.checked)}}),(0,u.jsxs)(S.Z,{variant:"subtitle1",sx:(0,g.Z)({ml:2,flexGrow:1,color:"primary.main"},n&&{ml:3}),children:[i," s\xe9lectionn\xe9"]}),r&&r]})):null}var k=r(27561),R=r(72900),I=r(71770),D=["dense","onChangeDense","rowsPerPageOptions","sx"];function F(e){var n=e.dense,r=e.onChangeDense,t=e.rowsPerPageOptions,i=void 0===t?[5,10,20,25]:t,a=e.sx,s=(0,w.Z)(e,D);return(0,u.jsxs)(p.Z,{sx:(0,g.Z)({position:"relative"},a),children:[(0,u.jsx)(k.Z,(0,g.Z)({rowsPerPageOptions:i,component:"div"},s)),r&&(0,u.jsx)(R.Z,{label:"Dense",control:(0,u.jsx)(I.Z,{checked:n,onChange:r}),sx:{pl:2,py:1.5,top:0,position:{md:"absolute"}}})]})}},39793:function(e,n,r){r.r(n),r.d(n,{default:function(){return Q}});var t=r(6907),i=r(96015),a=r(20803),s=r(94162),l=r(48928),o=r(16398),c=r(7055),d=r(87383),h=r(69963),u=r(21680),x=r(19773),g=r(60807),Z=r(24390),m=r(53512),j=r(54278),f=r(80184);function p(e,n,r,t,i){return{name:e,calories:n,fat:r,carbs:t,protein:i}}var b=[p("Frozen yoghurt",159,6,24,4),p("Ice cream sandwich",237,9,37,4.3),p("Eclair",262,16,24,6),p("Cupcake",305,3.7,67,4.3),p("Gingerbread",356,16,49,3.9)],v=[{id:"dessert",label:"Dessert (100g serving)"},{id:"calories",label:"Calories",align:"right"},{id:"fat",label:"Fat (g)",align:"right"},{id:"carbs",label:"Carbs (g)",align:"right"},{id:"protein",label:"Protein (g)",align:"right"}];function w(){return(0,f.jsx)(h.Z,{sx:{mt:3,overflow:"unset"},children:(0,f.jsx)(m.Z,{children:(0,f.jsxs)(u.Z,{sx:{minWidth:800},children:[(0,f.jsx)(j.K,{headLabel:v}),(0,f.jsx)(x.Z,{children:b.map((function(e){return(0,f.jsxs)(g.Z,{children:[(0,f.jsx)(Z.Z,{children:e.name}),(0,f.jsx)(Z.Z,{align:"right",children:e.calories}),(0,f.jsx)(Z.Z,{align:"right",children:e.fat}),(0,f.jsx)(Z.Z,{align:"right",children:e.carbs}),(0,f.jsx)(Z.Z,{align:"right",children:e.protein})]},e.name)}))})]})})})}var C=r(9827);function S(e,n,r,t,i,a){return{name:e,calories:n,fat:r,carbs:t,protein:i,price:a,history:[{date:"2020-01-05",customerId:"11091700",amount:3},{date:"2020-01-02",customerId:"Anonymous",amount:1}]}}var y=r(1413),P=r(29439),k=r(72791),R=r(13811),I=r(74244),D=r(30286),F=r(4565),W=r(8523);function B(e){var n=e.row,r=(0,k.useState)(!1),t=(0,P.Z)(r,2),i=t[0],a=t[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(g.Z,{children:[(0,f.jsx)(Z.Z,{children:(0,f.jsx)(R.Z,{size:"small",color:i?"inherit":"default",onClick:function(){return a(!i)},children:(0,f.jsx)(W.Z,{icon:i?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"})})}),(0,f.jsx)(Z.Z,{component:"th",scope:"row",children:n.name}),(0,f.jsx)(Z.Z,{align:"right",children:n.calories}),(0,f.jsx)(Z.Z,{align:"right",children:n.fat}),(0,f.jsx)(Z.Z,{align:"right",children:n.carbs}),(0,f.jsx)(Z.Z,{align:"right",children:n.protein})]}),(0,f.jsx)(g.Z,{children:(0,f.jsx)(Z.Z,{sx:{py:0},colSpan:6,children:(0,f.jsx)(I.Z,{in:i,unmountOnExit:!0,children:(0,f.jsxs)(D.Z,{variant:"outlined",sx:(0,y.Z)({py:2,borderRadius:1.5},i&&{boxShadow:function(e){return e.customShadows.z20}}),children:[(0,f.jsx)(F.Z,{variant:"h6",sx:{m:2,mt:0},children:"History"}),(0,f.jsxs)(u.Z,{size:"small","aria-label":"purchases",children:[(0,f.jsx)(C.Z,{children:(0,f.jsxs)(g.Z,{children:[(0,f.jsx)(Z.Z,{children:"Date"}),(0,f.jsx)(Z.Z,{children:"Customer"}),(0,f.jsx)(Z.Z,{align:"right",children:"Amount"}),(0,f.jsx)(Z.Z,{align:"right",children:"Total price ($)"})]})}),(0,f.jsx)(x.Z,{children:n.history.map((function(e){return(0,f.jsxs)(g.Z,{children:[(0,f.jsx)(Z.Z,{component:"th",scope:"row",children:e.date}),(0,f.jsx)(Z.Z,{children:e.customerId}),(0,f.jsx)(Z.Z,{align:"right",children:e.amount}),(0,f.jsx)(Z.Z,{align:"right",children:Math.round(e.amount*n.price*100)/100})]},e.date)}))})]})]})})})})]})}var _=[S("Frozen yoghurt",159,6,24,4,3.99),S("Ice cream sandwich",237,9,37,4.3,4.99),S("Eclair",262,16,24,6,3.79),S("Cupcake",305,3.7,67,4.3,2.5),S("Gingerbread",356,16,49,3.9,1.5)];function z(){return(0,f.jsx)(h.Z,{sx:{mt:3,overflow:"unset"},children:(0,f.jsx)(m.Z,{children:(0,f.jsxs)(u.Z,{sx:{minWidth:800},children:[(0,f.jsx)(C.Z,{children:(0,f.jsxs)(g.Z,{children:[(0,f.jsx)(Z.Z,{}),(0,f.jsx)(Z.Z,{children:"Dessert (100g serving)"}),(0,f.jsx)(Z.Z,{align:"right",children:"Calories"}),(0,f.jsx)(Z.Z,{align:"right",children:"Fat\xa0(g)"}),(0,f.jsx)(Z.Z,{align:"right",children:"Carbs\xa0(g)"}),(0,f.jsx)(Z.Z,{align:"right",children:"Protein\xa0(g)"})]})}),(0,f.jsx)(x.Z,{children:_.map((function(e){return(0,f.jsx)(B,{row:e},e.name)}))})]})})})}var A=r(75814),L=r(45473);function O(){return(0,f.jsxs)(s.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3},children:[(0,f.jsx)(F.Z,{variant:"h6",children:"Sorting & Selecting"}),(0,f.jsx)(A.Z,{title:"Filter list",children:(0,f.jsx)(R.Z,{children:(0,f.jsx)(W.Z,{icon:"ic:round-filter-list"})})})]})}function U(e,n,r,t,i){return{name:e,calories:n,fat:r,carbs:t,protein:i}}var E=[U("Cupcake",305,3.7,67,4.3),U("Donut",452,25,51,4.9),U("Eclair",262,16,24,6),U("Frozen yoghurt",159,6,24,4),U("Gingerbread",356,16,49,3.9),U("Honeycomb",408,3.2,87,6.5),U("Ice cream sandwich",237,9,37,4.3),U("Jelly Bean",375,0,94,0),U("KitKat",518,26,65,7),U("Lollipop",392,.2,98,0),U("Marshmallow",318,0,81,2),U("Nougat",360,19,9,37)],G=[{id:"name",label:"Dessert\xa0(100g serving)",align:"left"},{id:"calories",label:"Calories",align:"center"},{id:"fat",label:"Fat\xa0(g)",align:"center"},{id:"carbs",label:"Carbs\xa0(g)",align:"center"},{id:"protein",label:"Protein\xa0(g)",align:"center"}];function M(){var e=(0,j.x6)({defaultOrderBy:"calories"}),n=e.dense,r=e.page,t=e.order,i=e.orderBy,a=e.rowsPerPage,s=e.selected,l=e.onSelectRow,o=e.onSelectAllRows,c=e.onSort,d=e.onChangeDense,p=e.onChangePage,b=e.onChangeRowsPerPage,v=(0,k.useState)([]),w=(0,P.Z)(v,2),C=w[0],S=w[1];(0,k.useEffect)((function(){S(E)}),[]);var y=function(e){var n=e.inputData,r=e.comparator,t=n.map((function(e,n){return[e,n]}));return t.sort((function(e,n){var t=r(e[0],n[0]);return 0!==t?t:e[1]-n[1]})),n=t.map((function(e){return e[0]}))}({inputData:C,comparator:(0,j.sQ)(t,i)}),I=n?34:54;return(0,f.jsxs)("div",{children:[(0,f.jsx)(O,{}),(0,f.jsxs)(h.Z,{sx:{position:"relative",overflow:"unset"},children:[(0,f.jsx)(j.Z4,{dense:n,numSelected:s.length,rowCount:C.length,onSelectAllRows:function(e){return o(e,C.map((function(e){return e.name})))},action:(0,f.jsx)(A.Z,{title:"Delete",children:(0,f.jsx)(R.Z,{color:"primary",children:(0,f.jsx)(W.Z,{icon:"eva:trash-2-outline"})})})}),(0,f.jsx)(m.Z,{children:(0,f.jsxs)(u.Z,{size:n?"small":"medium",sx:{minWidth:800},children:[(0,f.jsx)(j.K,{order:t,orderBy:i,headLabel:G,rowCount:C.length,numSelected:s.length,onSort:c,onSelectAllRows:function(e){return o(e,C.map((function(e){return e.name})))}}),(0,f.jsxs)(x.Z,{children:[y.slice(r*a,r*a+a).map((function(e){return(0,f.jsxs)(g.Z,{hover:!0,onClick:function(){return l(e.name)},selected:s.includes(e.name),children:[(0,f.jsx)(Z.Z,{padding:"checkbox",children:(0,f.jsx)(L.Z,{checked:s.includes(e.name)})}),(0,f.jsxs)(Z.Z,{children:[" ",e.name," "]}),(0,f.jsx)(Z.Z,{align:"center",children:e.calories}),(0,f.jsx)(Z.Z,{align:"center",children:e.fat}),(0,f.jsx)(Z.Z,{align:"center",children:e.carbs}),(0,f.jsx)(Z.Z,{align:"center",children:e.protein})]},e.name)})),(0,f.jsx)(j.$W,{height:I,emptyRows:(0,j.fQ)(r,a,C.length)})]})]})})]}),(0,f.jsx)(j.S_,{count:y.length,page:r,rowsPerPage:a,onPageChange:p,onRowsPerPageChange:b,dense:n,onChangeDense:d})]})}function N(e,n,r,t){return{name:e,code:n,population:r,size:t,density:r/t}}var T=[N("India","IN",1324171354,3287263),N("China","CN",1403500365,9596961),N("Italy","IT",60483973,301340),N("United States","US",327167434,9833520),N("Canada","CA",37602103,9984670),N("Australia","AU",25475400,7692024),N("Germany","DE",83019200,357578),N("Ireland","IE",4857e3,70273),N("Mexico","MX",126577691,1972550),N("Japan","JP",126317e3,377973),N("France","FR",67022e3,640679),N("United Kingdom","GB",67545757,242495),N("Russia","RU",146793744,17098246),N("Nigeria","NG",200962417,923768),N("Brazil","BR",210147125,8515767)],H=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO\xa0Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"size",label:"Size\xa0(km\xb2)",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"density",label:"Density",minWidth:170,align:"right",format:function(e){return e.toFixed(2)}}];function K(){var e=(0,j.x6)({defaultRowsPerPage:10}),n=e.page,r=e.rowsPerPage,t=e.onChangePage,i=e.onChangeRowsPerPage;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h.Z,{sx:{overflow:"unset"},children:(0,f.jsx)(m.Z,{sx:{maxHeight:400},children:(0,f.jsxs)(u.Z,{stickyHeader:!0,sx:{minWidth:800},children:[(0,f.jsxs)(C.Z,{children:[(0,f.jsxs)(g.Z,{children:[(0,f.jsx)(Z.Z,{align:"center",colSpan:2,sx:{background:function(e){return e.palette.background.paper}},children:"Country"}),(0,f.jsx)(Z.Z,{align:"center",colSpan:3,sx:{background:function(e){return e.palette.background.paper}},children:"Details"})]}),(0,f.jsx)(g.Z,{children:H.map((function(e){return(0,f.jsx)(Z.Z,{align:e.align,style:{top:56,minWidth:e.minWidth},children:e.label},e.id)}))})]}),(0,f.jsx)(x.Z,{children:T.slice(n*r,n*r+r).map((function(e){return(0,f.jsx)(g.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:H.map((function(n){var r=e[n.id];return(0,f.jsx)(Z.Z,{align:n.align,children:n.format&&"number"===typeof r?n.format(r):r},n.id)}))},e.code)}))})]})})}),(0,f.jsx)(j.S_,{count:T.length,page:n,rowsPerPage:r,onPageChange:t,onRowsPerPageChange:i})]})}function Q(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.ql,{children:(0,f.jsx)("title",{children:" MUI Components: Table | Minimal UI"})}),(0,f.jsx)(i.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,f.jsx)(a.Z,{children:(0,f.jsx)(d.Z,{heading:"Table",links:[{name:"Components",href:c.ko.components},{name:"Table"}],moreLink:["https://mui.com/components/tables"]})})}),(0,f.jsx)(a.Z,{sx:{my:10},children:(0,f.jsxs)(s.Z,{spacing:3,children:[(0,f.jsxs)(l.Z,{children:[(0,f.jsx)(o.Z,{title:"Basic Table"}),(0,f.jsx)(w,{})]}),(0,f.jsx)(l.Z,{children:(0,f.jsx)(M,{})}),(0,f.jsxs)(l.Z,{children:[(0,f.jsx)(o.Z,{title:"Grouping & FixedHeader"}),(0,f.jsx)(K,{})]}),(0,f.jsxs)(l.Z,{children:[(0,f.jsx)(o.Z,{title:"Collapsible Table"}),(0,f.jsx)(z,{})]})]})})]})}}}]);
//# sourceMappingURL=9793.8b3071bd.chunk.js.map