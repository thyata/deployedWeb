(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[1395],{72745:function(t,n,r){"use strict";r.d(n,{i4:function(){return Z},n6:function(){return f},ZE:function(){return u},M2:function(){return o}});var e=r(80184);var i=r(1413),a=r(36459),s=r(45953),c=r(91441),l=r(96015);function o(t){var n=Object.assign({},((0,a.Z)(t),t));return(0,e.jsxs)(s.ZP,(0,i.Z)((0,i.Z)({item:!0,xs:12,sm:6,md:3},n),{},{children:[(0,e.jsx)(c.Z,{variant:"rectangular",width:"100%",sx:{height:200,borderRadius:2}}),(0,e.jsxs)(l.Z,{sx:{display:"flex",mt:1.5},children:[(0,e.jsx)(c.Z,{variant:"circular",sx:{width:40,height:40}}),(0,e.jsx)(c.Z,{variant:"text",sx:{mx:1,flexGrow:1}})]})]}))}function u(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(c.Z,{width:"100%",height:560,variant:"rectangular",sx:{borderRadius:2}}),(0,e.jsxs)(l.Z,{sx:{mt:3,display:"flex",alignItems:"center"},children:[(0,e.jsx)(c.Z,{variant:"circular",width:64,height:64}),(0,e.jsxs)(l.Z,{sx:{flexGrow:1,ml:2},children:[(0,e.jsx)(c.Z,{variant:"text",height:20}),(0,e.jsx)(c.Z,{variant:"text",height:20}),(0,e.jsx)(c.Z,{variant:"text",height:20})]})]})]})}var x=r(45987),h=r(94162),d=["sx"];function f(t){var n=t.sx,r=(0,x.Z)(t,d);return(0,e.jsxs)(h.Z,(0,i.Z)((0,i.Z)({spacing:1,direction:"row",alignItems:"center",sx:(0,i.Z)({px:3,py:1},n)},r),{},{children:[(0,e.jsx)(c.Z,{variant:"circular",width:32,height:32}),(0,e.jsx)(c.Z,{variant:"text",sx:{width:.5,height:16}})]}))}var v=["sx"];function Z(t){var n=t.sx,r=(0,x.Z)(t,v);return(0,e.jsxs)(h.Z,(0,i.Z)((0,i.Z)({spacing:1,direction:"row",alignItems:"center",sx:(0,i.Z)({px:3,py:1.5},n)},r),{},{children:[(0,e.jsx)(c.Z,{variant:"circular",width:48,height:48}),(0,e.jsxs)(h.Z,{spacing:.5,sx:{flexGrow:1},children:[(0,e.jsx)(c.Z,{variant:"text",sx:{width:.5,height:16}}),(0,e.jsx)(c.Z,{variant:"text",sx:{width:.25,height:12}})]})]}))}},77686:function(t,n,r){"use strict";r.r(n),r.d(n,{default:function(){return _}});var e=r(93433),i=r(74165),a=r(15861),s=r(29439),c=r(45812),l=r.n(c),o=r(6907),u=r(11087),x=r(72791),h=r(20803),d=r(61091),f=r(94162),v=r(45953),Z=r(92033),g=r(7055),p=r(8523),j=r(72745),m=r(46839),w=r(87383),b=r(65894),k=r(80184),y=[{value:"latest",label:"Latest"},{value:"popular",label:"Popular"},{value:"oldest",label:"Oldest"}];function _(){var t=(0,m.K$)().themeStretch,n=(0,x.useState)([]),r=(0,s.Z)(n,2),c=r[0],l=r[1],_=(0,x.useState)("latest"),A=(0,s.Z)(_,2),B=A[0],I=A[1],O=P(c,B),S=(0,x.useCallback)((0,a.Z)((0,i.Z)().mark((function t(){var n;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Z.Z.get("/api/blog/posts");case 3:n=t.sent,l(n.data.posts),console.log("DATA",JSON.stringify(n.data.posts,null,2)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),[]);(0,x.useEffect)((function(){S()}),[S]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(o.ql,{children:(0,k.jsx)("title",{children:" Blog: Posts | Minimal UI"})}),(0,k.jsxs)(h.Z,{maxWidth:!t&&"lg",children:[(0,k.jsx)(w.Z,{heading:"Blog",links:[{name:"Dashboard"},{name:"Blog",href:g.vB.blog.root},{name:"Posts"}],action:(0,k.jsx)(d.Z,{component:u.rU,to:g.vB.blog.new,variant:"contained",startIcon:(0,k.jsx)(p.Z,{icon:"eva:plus-fill"}),children:"New Post"})}),(0,k.jsxs)(f.Z,{mb:5,direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,k.jsx)(b.x5,{}),(0,k.jsx)(b.cO,{sortBy:B,sortOptions:y,onSort:function(t){I(t.target.value)}})]}),(0,k.jsx)(v.ZP,{container:!0,spacing:3,children:(c.length?O:(0,e.Z)(Array(12))).map((function(t,n){return t?(0,k.jsx)(v.ZP,{item:!0,xs:12,sm:6,md:0===n?6:3,children:(0,k.jsx)(b.Gg,{post:t,index:n})},t.id):(0,k.jsx)(j.M2,{},n)}))})]})]})}var P=function(t,n){return"latest"===n?l()(t,["createdAt"],["desc"]):"oldest"===n?l()(t,["createdAt"],["asc"]):"popular"===n?l()(t,["view"],["desc"]):t}},53849:function(t,n,r){var e=r(87927),i=r(21473);t.exports=function(t,n){var r=-1,a=i(t)?Array(t.length):[];return e(t,(function(t,e,i){a[++r]=n(t,e,i)})),a}},93226:function(t,n,r){var e=r(68950),i=r(98667),a=r(56025),s=r(53849),c=r(19179),l=r(16194),o=r(94480),u=r(2100),x=r(93629);t.exports=function(t,n,r){n=n.length?e(n,(function(t){return x(t)?function(n){return i(n,1===t.length?t[0]:t)}:t})):[u];var h=-1;n=e(n,l(a));var d=s(t,(function(t,r,i){return{criteria:e(n,(function(n){return n(t)})),index:++h,value:t}}));return c(d,(function(t,n){return o(t,n,r)}))}},19179:function(t){t.exports=function(t,n){var r=t.length;for(t.sort(n);r--;)t[r]=t[r].value;return t}},88558:function(t,n,r){var e=r(70152);t.exports=function(t,n){if(t!==n){var r=void 0!==t,i=null===t,a=t===t,s=e(t),c=void 0!==n,l=null===n,o=n===n,u=e(n);if(!l&&!u&&!s&&t>n||s&&c&&o&&!l&&!u||i&&c&&o||!r&&o||!a)return 1;if(!i&&!s&&!u&&t<n||u&&r&&a&&!i&&!s||l&&r&&a||!c&&a||!o)return-1}return 0}},94480:function(t,n,r){var e=r(88558);t.exports=function(t,n,r){for(var i=-1,a=t.criteria,s=n.criteria,c=a.length,l=r.length;++i<c;){var o=e(a[i],s[i]);if(o)return i>=l?o:o*("desc"==r[i]?-1:1)}return t.index-n.index}},45812:function(t,n,r){var e=r(93226),i=r(93629);t.exports=function(t,n,r,a){return null==t?[]:(i(n)||(n=null==n?[]:[n]),i(r=a?void 0:r)||(r=null==r?[]:[r]),e(t,n,r))}}}]);
//# sourceMappingURL=1395.4da3f756.chunk.js.map