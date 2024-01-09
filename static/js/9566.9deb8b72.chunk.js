"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[9566],{72745:function(t,e,s){s.d(e,{i4:function(){return j},n6:function(){return Z},ZE:function(){return h},M2:function(){return l}});var r=s(80184);var n=s(1413),i=s(36459),a=s(45953),x=s(91441),c=s(96015);function l(t){var e=Object.assign({},((0,i.Z)(t),t));return(0,r.jsxs)(a.ZP,(0,n.Z)((0,n.Z)({item:!0,xs:12,sm:6,md:3},e),{},{children:[(0,r.jsx)(x.Z,{variant:"rectangular",width:"100%",sx:{height:200,borderRadius:2}}),(0,r.jsxs)(c.Z,{sx:{display:"flex",mt:1.5},children:[(0,r.jsx)(x.Z,{variant:"circular",sx:{width:40,height:40}}),(0,r.jsx)(x.Z,{variant:"text",sx:{mx:1,flexGrow:1}})]})]}))}function h(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.Z,{width:"100%",height:560,variant:"rectangular",sx:{borderRadius:2}}),(0,r.jsxs)(c.Z,{sx:{mt:3,display:"flex",alignItems:"center"},children:[(0,r.jsx)(x.Z,{variant:"circular",width:64,height:64}),(0,r.jsxs)(c.Z,{sx:{flexGrow:1,ml:2},children:[(0,r.jsx)(x.Z,{variant:"text",height:20}),(0,r.jsx)(x.Z,{variant:"text",height:20}),(0,r.jsx)(x.Z,{variant:"text",height:20})]})]})]})}var o=s(45987),d=s(94162),u=["sx"];function Z(t){var e=t.sx,s=(0,o.Z)(t,u);return(0,r.jsxs)(d.Z,(0,n.Z)((0,n.Z)({spacing:1,direction:"row",alignItems:"center",sx:(0,n.Z)({px:3,py:1},e)},s),{},{children:[(0,r.jsx)(x.Z,{variant:"circular",width:32,height:32}),(0,r.jsx)(x.Z,{variant:"text",sx:{width:.5,height:16}})]}))}var m=["sx"];function j(t){var e=t.sx,s=(0,o.Z)(t,m);return(0,r.jsxs)(d.Z,(0,n.Z)((0,n.Z)({spacing:1,direction:"row",alignItems:"center",sx:(0,n.Z)({px:3,py:1.5},e)},s),{},{children:[(0,r.jsx)(x.Z,{variant:"circular",width:48,height:48}),(0,r.jsxs)(d.Z,{spacing:.5,sx:{flexGrow:1},children:[(0,r.jsx)(x.Z,{variant:"text",sx:{width:.5,height:16}}),(0,r.jsx)(x.Z,{variant:"text",sx:{width:.25,height:12}})]})]}))}},62986:function(t,e,s){s.r(e),s.d(e,{default:function(){return k}});var r=s(74165),n=s(15861),i=s(29439),a=s(6907),x=s(72791),c=s(57689),l=s(20803),h=s(94162),o=s(4565),d=s(81872),u=s(19987),Z=s(96015),m=s(7055),j=s(92033),p=s(25087),v=s(87383),g=s(46839),f=s(72745),w=s(65894),b=s(80184);function k(){var t=(0,g.K$)().themeStretch,e=(0,c.UO)().title,s=(0,x.useState)([]),k=(0,i.Z)(s,2),y=k[0],_=k[1],S=(0,x.useState)(null),C=(0,i.Z)(S,2),M=C[0],L=C[1],P=(0,x.useState)(!0),z=(0,i.Z)(P,2),B=z[0],E=z[1],F=(0,x.useState)(null),G=(0,i.Z)(F,2),I=G[0],R=G[1],D=(0,x.useCallback)((0,n.Z)((0,r.Z)().mark((function t(){var s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.Z.get("/api/blog/post",{params:{title:e}});case 3:s=t.sent,L(s.data.post),E(!1),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),E(!1),R(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,8]])}))),[e]),O=(0,x.useCallback)((0,n.Z)((0,r.Z)().mark((function t(){var s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.Z.get("/api/blog/posts/recent",{params:{title:e}});case 3:s=t.sent,_(s.data.recentPosts),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e]);return(0,x.useEffect)((function(){O()}),[O]),(0,x.useEffect)((function(){e&&D()}),[D,e]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a.ql,{children:(0,b.jsx)("title",{children:"Blog: ".concat((null===M||void 0===M?void 0:M.title)||""," | Minimal UI")})}),(0,b.jsxs)(l.Z,{maxWidth:!t&&"lg",children:[(0,b.jsx)(v.Z,{heading:"Post Details",links:[{name:"Dashboard",href:m.vB.root},{name:"Blog",href:m.vB.blog.root},{name:null===M||void 0===M?void 0:M.title}]}),M&&(0,b.jsxs)(h.Z,{sx:{borderRadius:2,boxShadow:function(t){return{md:t.customShadows.card}}},children:[(0,b.jsx)(w.pi,{post:M}),(0,b.jsx)(o.Z,{variant:"h6",sx:{py:5,px:{md:5}},children:M.description}),(0,b.jsx)(p.Z,{children:M.body,sx:{px:{md:5}}}),(0,b.jsxs)(h.Z,{spacing:3,sx:{py:5,px:{md:5}},children:[(0,b.jsx)(d.Z,{}),(0,b.jsx)(w.j6,{post:M}),(0,b.jsx)(d.Z,{})]}),(0,b.jsxs)(h.Z,{sx:{px:{md:5}},children:[(0,b.jsxs)(h.Z,{direction:"row",sx:{mb:3},children:[(0,b.jsx)(o.Z,{variant:"h4",children:"Comments"}),(0,b.jsxs)(o.Z,{variant:"subtitle2",sx:{color:"text.disabled"},children:["(",M.comments.length,")"]})]}),(0,b.jsx)(w.fV,{}),(0,b.jsx)(d.Z,{sx:{mt:5,mb:2}})]}),(0,b.jsxs)(h.Z,{sx:{px:{md:5}},children:[(0,b.jsx)(w.bt,{comments:M.comments}),(0,b.jsx)(u.Z,{count:8,sx:{my:5,ml:"auto",mr:{xs:"auto",md:0}}})]})]}),I&&!B&&(0,b.jsxs)(o.Z,{variant:"h6",children:["404 ",I]}),B&&(0,b.jsx)(f.ZE,{}),!!y.length&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o.Z,{variant:"h4",sx:{my:5},children:"Recent posts"}),(0,b.jsx)(Z.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(4, 1fr)"},children:y.slice(y.length-4).map((function(t){return(0,b.jsx)(w.Gg,{post:t},t.id)}))})]})]})]})}},68840:function(t,e,s){s(72791);var r=s(40233),n=s(80184);e.Z=(0,r.Z)((0,n.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage")},19458:function(t,e,s){s(72791);var r=s(40233),n=s(80184);e.Z=(0,r.Z)((0,n.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage")}}]);
//# sourceMappingURL=9566.9deb8b72.chunk.js.map