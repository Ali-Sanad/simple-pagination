(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(40)},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),s=a.n(c),l=a(3),o=a.n(l),i=a(14),u=a(2),m=function(e){var t=e.posts;return e.loading?r.a.createElement("h2",null,"Loading..."):r.a.createElement("ul",{className:"list-group mb-4"},t.map(function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item "},e.id," - ",e.title)}))},p=function(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.paginate,c=[],s=1;s<=Math.ceil(a/t);s++)c.push(s);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},c.map(function(e){return r.a.createElement("li",{key:e,className:"page-item"},r.a.createElement("a",{onClick:function(){return n(e)},href:"!#",className:"page-link"},e))})))},f=a(15),d=a.n(f),g=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),l=Object(u.a)(s,2),f=l[0],g=l[1],E=Object(n.useState)(1),b=Object(u.a)(E,2),h=b[0],v=b[1],j=Object(n.useState)(10),O=Object(u.a)(j,1)[0];Object(n.useEffect)(function(){!function(){var e=Object(i.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,d.a.get("https://jsonplaceholder.typicode.com/posts");case 3:t=e.sent,c(t.data),g(!1);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var w=h*O,N=w-O,k=a.slice(N,w);return r.a.createElement("div",{className:"container vh-100"},r.a.createElement("div",{className:"d-flex flex-column align-items-center "},r.a.createElement("h1",{className:"text-primary mb-3"},"My Posts"),r.a.createElement(m,{posts:k,loading:f}),r.a.createElement(p,{postsPerPage:O,totalPosts:a.length,paginate:function(e){return v(e)}})))};s.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.466a917c.chunk.js.map