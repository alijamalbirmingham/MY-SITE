"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3085],{6416:function(e,a,n){n.r(a),n.d(a,{default:function(){return o}});var t=n(7294),l=n(6010),i=n(2600),c=n(8976),s=n(1575),m=n(5979),r="mdxPageWrapper_zHyg";function o(e){var a=e.content,n=a.metadata,o=n.title,d=n.description,u=n.frontMatter,v=u.wrapperClassName,f=u.hide_table_of_contents;return t.createElement(m.FG,{className:(0,l.Z)(null!=v?v:m.kM.wrapper.mdxPages,m.kM.page.mdxPage)},t.createElement(m.d,{title:o,description:d}),t.createElement(i.Z,null,t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,l.Z)("row",r)},t.createElement("div",{className:(0,l.Z)("col",!f&&"col--8")},t.createElement(c.Z,null,t.createElement(a,null))),!f&&a.toc&&t.createElement("div",{className:"col col--2"},t.createElement(s.Z,{toc:a.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},5002:function(e,a,n){n.d(a,{Z:function(){return r}});var t=n(7462),l=n(3366),i=n(7294),c=n(5979),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function m(e){var a=e.toc,n=e.className,t=e.linkClassName,l=e.isChild;return a.length?i.createElement("ul",{className:l?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(m,{isChild:!0,toc:e.children,className:n,linkClassName:t}))}))):null}function r(e){var a=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,u=e.linkActiveClassName,v=void 0===u?void 0:u,f=e.minHeadingLevel,N=e.maxHeadingLevel,g=(0,l.Z)(e,s),_=(0,c.LU)(),k=null!=f?f:_.tableOfContents.minHeadingLevel,C=null!=N?N:_.tableOfContents.maxHeadingLevel,E=(0,c.b9)({toc:a,minHeadingLevel:k,maxHeadingLevel:C}),b=(0,i.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:k,maxHeadingLevel:C}}),[d,v,k,C]);return(0,c.Si)(b),i.createElement(m,(0,t.Z)({toc:E,className:r,linkClassName:d},g))}},1575:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(7462),l=n(3366),i=n(7294),c=n(6010),s=n(5002),m="tableOfContents_cNA8",r=["className"];function o(e){var a=e.className,n=(0,l.Z)(e,r);return i.createElement("div",{className:(0,c.Z)(m,"thin-scrollbar",a)},i.createElement(s.Z,(0,t.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}}}]);