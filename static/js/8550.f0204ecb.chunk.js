"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[8550],{87383:function(n,e,t){t.d(e,{Z:function(){return m}});var r=t(1413),a=t(45987),i=t(96015),o=t(94162),l=t(4565),s=t(33888),u=t(46283),d=t(11087),c=t(80184);function h(n){var e=n.link,t=n.activeLast,a=n.disabled,o=e.name,l=e.href,s=e.icon,h=(0,r.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},a&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,c.jsxs)(c.Fragment,{children:[s&&(0,c.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),o]});return l?(0,c.jsx)(u.Z,{component:d.rU,to:l,sx:h,children:x}):(0,c.jsxs)(i.Z,{sx:h,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function m(n){var e=n.links,t=n.action,d=n.heading,m=n.moreLink,p=n.activeLast,j=n.sx,g=(0,a.Z)(n,x),f=e[e.length-1].name;return(0,c.jsxs)(i.Z,{sx:(0,r.Z)({mb:5},j),children:[(0,c.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,c.jsxs)(i.Z,{sx:{flexGrow:1},children:[d&&(0,c.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:d}),!!e.length&&(0,c.jsx)(s.Z,(0,r.Z)((0,r.Z)({separator:(0,c.jsx)(Z,{})},g),{},{children:e.map((function(n){return(0,c.jsx)(h,{link:n,activeLast:p,disabled:n.name===f},n.name||"")}))}))]}),t&&(0,c.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!m&&(0,c.jsx)(i.Z,{sx:{mt:2},children:m.map((function(n){return(0,c.jsx)(u.Z,{noWrap:!0,href:n,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:n},n)}))})]})}function Z(){return(0,c.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},46990:function(n,e,t){t.d(e,{Z:function(){return M},w:function(){return d}});var r=t(29439),a=t(72791),i=t(39579),o=t(82599),l=t(54690),s=t(85375),u=t(65734);function d(n,e){var t=(0,a.useState)(!1),d=(0,r.Z)(t,2),c=d[0],h=d[1],x=(0,a.useState)(e),m=(0,r.Z)(x,2),Z=m[0],p=m[1],j=(0,a.useState)(n),g=(0,r.Z)(j,2),f=g[0],v=g[1],C=f&&Z&&(0,i.Z)(new Date(Z),new Date(f))||!1,D=(new Date).getFullYear(),b=f?(0,o.Z)(f):null,y=Z?(0,o.Z)(Z):null,M=D===b&&D===y,w=!(!f||!Z)&&(0,l.Z)(new Date(f),new Date(Z)),k=!(!f||!Z)&&(0,s.Z)(new Date(f),new Date(Z)),I="".concat((0,u.Mu)(f)," - ").concat((0,u.Mu)(Z));return{startDate:f,endDate:Z,onChangeStartDate:function(n){v(n)},onChangeEndDate:function(n){C&&p(null),p(n)},open:c,onOpen:function(){return h(!0)},onClose:function(){return h(!1)},onReset:function(){v(null),p(null)},isSelected:!!f&&!!Z,isError:C,label:I||"",shortLabel:(M?k?w?(0,u.Mu)(Z,"dd MMM yy"):"".concat((0,u.Mu)(f,"dd")," - ").concat((0,u.Mu)(Z,"dd MMM yy")):"".concat((0,u.Mu)(f,"dd MMM")," - ").concat((0,u.Mu)(Z,"dd MMM yy")):"".concat((0,u.Mu)(f,"dd MMM yy")," - ").concat((0,u.Mu)(Z,"dd MMM yy")))||"",setStartDate:v,setEndDate:p}}var c=t(1413),h=t(58195),x=t(40464),m=t(8440),Z=t(94162),p=t(30286),j=t(59911),g=t(37924),f=t(77248),v=t(61091),C=t(15608),D=t(53106),b=t(37306),y=t(80184);function M(n){var e=n.title,t=void 0===e?"Select date range":e,r=n.variant,a=void 0===r?"input":r,i=n.startDate,o=n.endDate,l=n.onChangeStartDate,s=n.onChangeEndDate,u=n.open,d=n.onClose,M=n.isError,w=(0,b.Z)("up","md"),k="calendar"===a;return(0,y.jsxs)(h.Z,{fullWidth:!0,maxWidth:!k&&"xs",open:u,onClose:d,PaperProps:{sx:(0,c.Z)({},k&&{maxWidth:720})},children:[(0,y.jsx)(x.Z,{sx:{pb:2},children:t}),(0,y.jsxs)(m.Z,{sx:(0,c.Z)({},k&&w&&{overflow:"unset"}),children:[(0,y.jsx)(Z.Z,{spacing:k?3:2,direction:k&&w?"row":"column",justifyContent:"center",sx:{pt:1,"& .MuiCalendarPicker-root":(0,c.Z)({},!w&&{width:"auto"})},children:k?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p.Z,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:(0,y.jsx)(C.h,{date:i,onChange:l})}),(0,y.jsx)(p.Z,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:(0,y.jsx)(C.h,{date:o,onChange:s})})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(D.M,{label:"Start date",value:i,onChange:l,renderInput:function(n){return(0,y.jsx)(j.Z,(0,c.Z)({},n))}}),(0,y.jsx)(D.M,{label:"End date",value:o,onChange:s,renderInput:function(n){return(0,y.jsx)(j.Z,(0,c.Z)({},n))}})]})}),M&&(0,y.jsx)(g.Z,{error:!0,sx:{px:2},children:"End date must be later than start date"})]}),(0,y.jsxs)(f.Z,{children:[(0,y.jsx)(v.Z,{variant:"outlined",color:"inherit",onClick:d,children:"Cancel"}),(0,y.jsx)(v.Z,{disabled:M,variant:"contained",onClick:d,children:"Apply"})]})]})}},58550:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r=t(29439),a=t(72791),i=t(6907),o=t(96015),l=t(20803),s=t(88375),u=t(90166),d=t(7055),c=t(87383),h=t(1413),x=t(72680),m=t(59911),Z=t(16002),p=t(21193),j=t(47140),g=t(15302),f=t(53106),v=t(26052),C=t(80184);function D(){var n=(0,a.useState)(new Date),e=(0,r.Z)(n,2),t=e[0],i=e[1];return(0,C.jsxs)(Z.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,C.jsxs)(v.g,{title:"Basic",children:[(0,C.jsx)(p.$,{label:"For desktop",value:t,minDate:new Date("2017-01-01"),onChange:function(n){i(n)},renderInput:function(n){return(0,C.jsx)(m.Z,(0,h.Z)((0,h.Z)({fullWidth:!0},n),{},{margin:"normal"}))}}),(0,C.jsx)(j.O,{orientation:"portrait",label:"For mobile",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,C.jsx)(m.Z,(0,h.Z)((0,h.Z)({fullWidth:!0},n),{},{margin:"normal"}))}})]}),(0,C.jsx)(v.g,{title:"Static mode",children:(0,C.jsx)(g.w,{orientation:"landscape",openTo:"day",value:t,shouldDisableDate:x.Z,onChange:function(n){i(n)},renderInput:function(n){return(0,C.jsx)(m.Z,(0,h.Z)({},n))}})}),(0,C.jsxs)(v.g,{title:"Views playground",children:[(0,C.jsx)(f.M,{views:["year"],label:"Year only",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,C.jsx)(m.Z,(0,h.Z)((0,h.Z)({},n),{},{fullWidth:!0,margin:"normal",helperText:null}))}}),(0,C.jsx)(f.M,{views:["year","month"],label:"Year and Month",minDate:new Date("2012-03-01"),maxDate:new Date("2023-06-01"),value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,C.jsx)(m.Z,(0,h.Z)((0,h.Z)({},n),{},{fullWidth:!0,margin:"normal",helperText:null}))}}),(0,C.jsx)(f.M,{openTo:"year",views:["year","month","day"],label:"Year, month and date",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,C.jsx)(m.Z,(0,h.Z)((0,h.Z)({},n),{},{fullWidth:!0,margin:"normal",helperText:null}))}}),(0,C.jsx)(f.M,{views:["day","month","year"],label:"Invert the order of views",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,C.jsx)(m.Z,(0,h.Z)((0,h.Z)({},n),{},{fullWidth:!0,margin:"normal",helperText:null}))}}),(0,C.jsx)(f.M,{views:["day"],label:"Just date",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,C.jsx)(m.Z,(0,h.Z)((0,h.Z)({},n),{},{fullWidth:!0,margin:"normal",helperText:null}))}})]})]})}var b=t(94162),y=t(35811),M=t(86778),w=t(72777),k=t(33448);function I(){var n=(0,a.useState)(new Date),e=(0,r.Z)(n,2),t=e[0],i=e[1];return(0,C.jsxs)(Z.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,C.jsxs)(v.g,{title:"Basic",children:[(0,C.jsx)(y.j,{label:"12 hours",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,C.jsx)(m.Z,(0,h.Z)((0,h.Z)({fullWidth:!0},n),{},{margin:"normal"}))}}),(0,C.jsx)(y.j,{ampm:!1,label:"24 hours",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,C.jsx)(m.Z,(0,h.Z)((0,h.Z)({fullWidth:!0},n),{},{margin:"normal"}))}})]}),(0,C.jsxs)(v.g,{title:"Responsiveness",children:[(0,C.jsx)(M.d,{orientation:"portrait",label:"For mobile",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,C.jsx)(m.Z,(0,h.Z)((0,h.Z)({},n),{},{fullWidth:!0,margin:"normal"}))}}),(0,C.jsx)(w.k,{label:"For desktop",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,C.jsx)(m.Z,(0,h.Z)((0,h.Z)({},n),{},{margin:"normal",fullWidth:!0}))}}),(0,C.jsx)(y.j,{value:t,onChange:i,renderInput:function(n){return(0,C.jsx)(m.Z,(0,h.Z)((0,h.Z)({},n),{},{margin:"normal",fullWidth:!0}))}})]}),(0,C.jsx)(v.g,{title:"Static mode",children:(0,C.jsxs)(b.Z,{spacing:3,children:[(0,C.jsx)(k.K,{orientation:"portrait",displayStaticWrapperAs:"mobile",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,C.jsx)(m.Z,(0,h.Z)({},n))}}),(0,C.jsx)(k.K,{ampm:!0,orientation:"landscape",openTo:"minutes",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,C.jsx)(m.Z,(0,h.Z)({},n))}})]})})]})}var S=t(32746),W=t(11074),E=t(82576);function T(){var n=(0,a.useState)(new Date),e=(0,r.Z)(n,2),t=e[0],i=e[1],o=(0,a.useState)(new Date("2018-01-01T00:00:00.000Z")),l=(0,r.Z)(o,2),s=l[0],u=l[1];return(0,C.jsxs)(b.Z,{spacing:3,direction:{xs:"column",md:"row"},children:[(0,C.jsx)(v.g,{title:"Basic",children:(0,C.jsx)(S.x,{renderInput:function(n){return(0,C.jsx)(m.Z,(0,h.Z)((0,h.Z)({},n),{},{fullWidth:!0}))},label:"DateTimePicker",value:t,onChange:i})}),(0,C.jsxs)(v.g,{title:"Responsiveness",children:[(0,C.jsx)(W.W,{value:s,onChange:function(n){u(n)},renderInput:function(n){return(0,C.jsx)(m.Z,(0,h.Z)((0,h.Z)({},n),{},{fullWidth:!0,margin:"normal"}))}}),(0,C.jsx)(E.h,{value:s,onChange:function(n){u(n)},renderInput:function(n){return(0,C.jsx)(m.Z,(0,h.Z)((0,h.Z)({},n),{},{margin:"normal",fullWidth:!0}))}}),(0,C.jsx)(S.x,{value:s,onChange:function(n){u(n)},renderInput:function(n){return(0,C.jsx)(m.Z,(0,h.Z)((0,h.Z)({},n),{},{margin:"normal",fullWidth:!0}))}})]})]})}var F=t(46283),_=t(61091),L=t(46990),R=t(65734);function P(){var n=(0,L.w)(new Date,new Date),e=(0,L.w)(new Date,null);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(b.Z,{sx:{typography:"body2",mb:3,color:"text.secondary"},children:[(0,C.jsx)("div",{children:"This is the custom component from minimal."}),(0,C.jsx)("div",{children:"You can use more advanced components by MUI."}),(0,C.jsxs)(F.Z,{href:"https://mui.com/x/react-date-pickers/date-range-picker/",children:["https://mui.com/x/react-date-pickers/date-range-picker/"," "]})]}),(0,C.jsxs)(o.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[(0,C.jsxs)(v.g,{title:"Input",children:[(0,C.jsx)(_.Z,{variant:"contained",onClick:n.onOpen,children:"Click me!"}),(0,C.jsxs)(b.Z,{sx:{typography:"body2",mt:3},children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("strong",{children:"Start:"})," ",(0,R.Mu)(n.startDate)]}),(0,C.jsxs)("div",{children:[(0,C.jsx)("strong",{children:"End:"})," ",(0,R.Mu)(n.endDate)]})]}),(0,C.jsx)(L.Z,{open:n.open,startDate:n.startDate,endDate:n.endDate,onChangeStartDate:n.onChangeStartDate,onChangeEndDate:n.onChangeEndDate,onClose:n.onClose,isError:n.isError})]}),(0,C.jsxs)(v.g,{title:"Calendar",children:[(0,C.jsx)(_.Z,{variant:"contained",onClick:e.onOpen,children:"Click me!"}),(0,C.jsxs)(b.Z,{sx:{typography:"body2",mt:3},children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("strong",{children:"Start:"})," ",(0,R.Mu)(e.startDate)]}),(0,C.jsxs)("div",{children:[(0,C.jsx)("strong",{children:"End:"})," ",(0,R.Mu)(e.endDate)]})]}),(0,C.jsx)(L.Z,{variant:"calendar",open:e.open,startDate:e.startDate,endDate:e.endDate,onChangeStartDate:e.onChangeStartDate,onChangeEndDate:e.onChangeEndDate,onClose:e.onClose,isError:e.isError})]})]})]})}var B=[{value:"date",label:"Date",component:(0,C.jsx)(D,{})},{value:"datetime",label:"DateTime",component:(0,C.jsx)(T,{})},{value:"time",label:"Time",component:(0,C.jsx)(I,{})},{value:"range",label:"Range",component:(0,C.jsx)(P,{})}];function Y(){var n=(0,a.useState)("date"),e=(0,r.Z)(n,2),t=e[0],h=e[1];return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(i.ql,{children:(0,C.jsx)("title",{children:" MUI Components: Pickers | Minimal UI"})}),(0,C.jsx)(o.Z,{sx:{pt:6,pb:1,bgcolor:function(n){return"light"===n.palette.mode?"grey.200":"grey.800"}},children:(0,C.jsx)(l.Z,{children:(0,C.jsx)(c.Z,{heading:"Date / Time pickers",links:[{name:"Components",href:d.ko.components},{name:"Date / Time pickers"}],moreLink:["https://mui.com/components/pickers","https://mui.com/x/react-date-pickers/getting-started/"]})})}),(0,C.jsxs)(l.Z,{sx:{my:10},children:[(0,C.jsx)(s.Z,{value:t,onChange:function(n,e){return h(e)},children:B.map((function(n){return(0,C.jsx)(u.Z,{value:n.value,label:n.label},n.value)}))}),B.map((function(n){return n.value===t&&(0,C.jsx)(o.Z,{sx:{mt:5},children:n.component},n.value)}))]})]})}},26052:function(n,e,t){t.d(e,{_:function(){return c},g:function(){return d}});var r=t(1413),a=t(12065),i=t(30286),o=t(16398),l=t(96015),s=t(4565),u=t(80184);function d(n){var e=n.title,t=n.sx,s=n.children;return(0,u.jsxs)(i.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(n){return(0,a.Fq)(n.palette.grey[500],.04)}},children:[e&&(0,u.jsx)(o.Z,{title:e}),(0,u.jsx)(l.Z,{sx:(0,r.Z)({p:5,minHeight:180},t),children:s})]})}function c(n){var e=n.title;return(0,u.jsx)(s.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:e})}}}]);
//# sourceMappingURL=8550.f0204ecb.chunk.js.map