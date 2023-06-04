"use strict";(self.webpackChunkqcefviewdoc=self.webpackChunkqcefviewdoc||[]).push([[885],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=o(a),f=r,k=p["".concat(d,".").concat(f)]||p[f]||m[f]||c;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,l=new Array(c);l[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var o=2;o<c;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3646:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const c={title:"QCefEvent"},l="class QCefEvent",i={unversionedId:"reference/QCefEvent",id:"reference/QCefEvent",title:"QCefEvent",description:"classqcef_event}",source:"@site/docs/reference/QCefEvent.md",sourceDirName:"reference",slug:"/reference/QCefEvent",permalink:"/QCefView/docs/reference/QCefEvent",draft:!1,editUrl:"https://github.com/CefView/QCefViewDoc/tree/master/docs/reference/QCefEvent.md",tags:[],version:"current",frontMatter:{title:"QCefEvent"},sidebar:"default",previous:{title:"QCefDownloadItem",permalink:"/QCefView/docs/reference/QCefDownloadItem"},next:{title:"QCefQuery",permalink:"/QCefView/docs/reference/QCefQuery"}},d={},o=[{value:"Summary",id:"summary",level:2},{value:"Members",id:"members",level:2},{value:"<code>public  </code><code>QCefEvent</code><code>()</code>",id:"class_q_cef_event_1ab444dcc856db38dcc679db326ef22bf5",level:3},{value:"<code>public  </code><code>QCefEvent</code><code>(const QString &amp; name)</code>",id:"class_q_cef_event_1a2b2b8bacbfebefe302cd1fab91cd5e8c",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>public  </code><code>QCefEvent</code><code>(const </code><code>QCefEvent</code><code> &amp; other)</code>",id:"class_q_cef_event_1a357d5cb242977682523e69d501c673d4",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>public </code><code>QCefEvent</code><code>&amp;</code><code>operator=</code><code>(const </code><code>QCefEvent</code><code> &amp; other)</code>",id:"class_q_cef_event_1a95e2f8c582270de0f9501945a6e063ee",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>public  </code><code>~QCefEvent</code><code>()</code>",id:"class_q_cef_event_1a5c0e38242fa1ba823f1664232966787c",level:3},{value:"<code>public void </code><code>setEventName</code><code>(const QString &amp; name)</code>",id:"class_q_cef_event_1a5db1273fdda416900f5b7b26a119c85a",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"<code>public const QString </code><code>eventName</code><code>() const</code>",id:"class_q_cef_event_1a5a970c76a348788b15a040c8c405a103",level:3},{value:"Returns",id:"returns",level:4},{value:"<code>public void </code><code>setArguments</code><code>(const QVariantList &amp; args)</code>",id:"class_q_cef_event_1ac84ba1292bcf56abdc5c6c4245aa6c04",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"<code>public QVariantList &amp; </code><code>arguments</code><code>()</code>",id:"class_q_cef_event_1a4cf70fa60235d723b9e578cded919327",level:3},{value:"Returns",id:"returns-1",level:4},{value:"<code>private QScopedPointer&lt; QCefEventPrivate &gt; </code><code>d_ptr</code>",id:"class_q_cef_event_1aa4e043ac8c5d7c5d75ca878ca75ab017",level:3}],s={toc:o},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class_q_cef_event"},"class ",(0,r.kt)("inlineCode",{parentName:"h1"},"QCefEvent")),(0,r.kt)("p",null,"Represents the event sent from native context(C/C++ code) to the web context(javascript)"),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Members"),(0,r.kt)("th",{parentName:"tr",align:null},"Descriptions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public  "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_event_1ab444dcc856db38dcc679db326ef22bf5"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,r.kt)("inlineCode",{parentName:"td"},"()")),(0,r.kt)("td",{parentName:"tr",align:null},"Constructs an event instance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public  "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a2b2b8bacbfebefe302cd1fab91cd5e8c"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,r.kt)("inlineCode",{parentName:"td"},"(const QString & name)")),(0,r.kt)("td",{parentName:"tr",align:null},"Constructs an event instance with name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public  "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a357d5cb242977682523e69d501c673d4"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,r.kt)("inlineCode",{parentName:"td"},"(const "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_event"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,r.kt)("inlineCode",{parentName:"td"}," & other)")),(0,r.kt)("td",{parentName:"tr",align:null},"Constructs an event instance from existing one.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_event"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,r.kt)("inlineCode",{parentName:"td"},"&"),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a95e2f8c582270de0f9501945a6e063ee"},(0,r.kt)("inlineCode",{parentName:"a"},"operator=")),(0,r.kt)("inlineCode",{parentName:"td"},"(const "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_event"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,r.kt)("inlineCode",{parentName:"td"}," & other)")),(0,r.kt)("td",{parentName:"tr",align:null},"Assigns an existing event instance to current.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public  "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a5c0e38242fa1ba823f1664232966787c"},(0,r.kt)("inlineCode",{parentName:"a"},"~QCefEvent")),(0,r.kt)("inlineCode",{parentName:"td"},"()")),(0,r.kt)("td",{parentName:"tr",align:null},"Destructs the event instance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public void "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a5db1273fdda416900f5b7b26a119c85a"},(0,r.kt)("inlineCode",{parentName:"a"},"setEventName")),(0,r.kt)("inlineCode",{parentName:"td"},"(const QString & name)")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the event name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public const QString "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a5a970c76a348788b15a040c8c405a103"},(0,r.kt)("inlineCode",{parentName:"a"},"eventName")),(0,r.kt)("inlineCode",{parentName:"td"},"() const")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the event name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public void "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_event_1ac84ba1292bcf56abdc5c6c4245aa6c04"},(0,r.kt)("inlineCode",{parentName:"a"},"setArguments")),(0,r.kt)("inlineCode",{parentName:"td"},"(const QVariantList & args)")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the argument list.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public QVariantList & "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a4cf70fa60235d723b9e578cded919327"},(0,r.kt)("inlineCode",{parentName:"a"},"arguments")),(0,r.kt)("inlineCode",{parentName:"td"},"()")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the argument list.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"private QScopedPointer< QCefEventPrivate > "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_event_1aa4e043ac8c5d7c5d75ca878ca75ab017"},(0,r.kt)("inlineCode",{parentName:"a"},"d_ptr"))),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"members"},"Members"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_event_1ab444dcc856db38dcc679db326ef22bf5"},(0,r.kt)("inlineCode",{parentName:"h3"},"public  "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1ab444dcc856db38dcc679db326ef22bf5"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,r.kt)("inlineCode",{parentName:"h3"},"()")),(0,r.kt)("p",null,"Constructs an event instance."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_event_1a2b2b8bacbfebefe302cd1fab91cd5e8c"},(0,r.kt)("inlineCode",{parentName:"h3"},"public  "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a2b2b8bacbfebefe302cd1fab91cd5e8c"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,r.kt)("inlineCode",{parentName:"h3"},"(const QString & name)")),(0,r.kt)("p",null,"Constructs an event instance with name."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," The event name")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_event_1a357d5cb242977682523e69d501c673d4"},(0,r.kt)("inlineCode",{parentName:"h3"},"public  "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a357d5cb242977682523e69d501c673d4"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,r.kt)("inlineCode",{parentName:"h3"},"(const "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_event"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,r.kt)("inlineCode",{parentName:"h3"}," & other)")),(0,r.kt)("p",null,"Constructs an event instance from existing one."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"other")," The other event instance")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_event_1a95e2f8c582270de0f9501945a6e063ee"},(0,r.kt)("inlineCode",{parentName:"h3"},"public "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_event"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,r.kt)("inlineCode",{parentName:"h3"},"&"),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a95e2f8c582270de0f9501945a6e063ee"},(0,r.kt)("inlineCode",{parentName:"a"},"operator=")),(0,r.kt)("inlineCode",{parentName:"h3"},"(const "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_event"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,r.kt)("inlineCode",{parentName:"h3"}," & other)")),(0,r.kt)("p",null,"Assigns an existing event instance to current."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"other")," The other event instance")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_event_1a5c0e38242fa1ba823f1664232966787c"},(0,r.kt)("inlineCode",{parentName:"h3"},"public  "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a5c0e38242fa1ba823f1664232966787c"},(0,r.kt)("inlineCode",{parentName:"a"},"~QCefEvent")),(0,r.kt)("inlineCode",{parentName:"h3"},"()")),(0,r.kt)("p",null,"Destructs the event instance."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_event_1a5db1273fdda416900f5b7b26a119c85a"},(0,r.kt)("inlineCode",{parentName:"h3"},"public void "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a5db1273fdda416900f5b7b26a119c85a"},(0,r.kt)("inlineCode",{parentName:"a"},"setEventName")),(0,r.kt)("inlineCode",{parentName:"h3"},"(const QString & name)")),(0,r.kt)("p",null,"Sets the event name."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," The name to be set")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_event_1a5a970c76a348788b15a040c8c405a103"},(0,r.kt)("inlineCode",{parentName:"h3"},"public const QString "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a5a970c76a348788b15a040c8c405a103"},(0,r.kt)("inlineCode",{parentName:"a"},"eventName")),(0,r.kt)("inlineCode",{parentName:"h3"},"() const")),(0,r.kt)("p",null,"Gets the event name."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,"The event name"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_event_1ac84ba1292bcf56abdc5c6c4245aa6c04"},(0,r.kt)("inlineCode",{parentName:"h3"},"public void "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1ac84ba1292bcf56abdc5c6c4245aa6c04"},(0,r.kt)("inlineCode",{parentName:"a"},"setArguments")),(0,r.kt)("inlineCode",{parentName:"h3"},"(const QVariantList & args)")),(0,r.kt)("p",null,"Sets the argument list."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"args")," The argument list")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_event_1a4cf70fa60235d723b9e578cded919327"},(0,r.kt)("inlineCode",{parentName:"h3"},"public QVariantList & "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a4cf70fa60235d723b9e578cded919327"},(0,r.kt)("inlineCode",{parentName:"a"},"arguments")),(0,r.kt)("inlineCode",{parentName:"h3"},"()")),(0,r.kt)("p",null,"Gets the argument list."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"The argument list"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_event_1aa4e043ac8c5d7c5d75ca878ca75ab017"},(0,r.kt)("inlineCode",{parentName:"h3"},"private QScopedPointer< QCefEventPrivate > "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1aa4e043ac8c5d7c5d75ca878ca75ab017"},(0,r.kt)("inlineCode",{parentName:"a"},"d_ptr"))))}m.isMDXComponent=!0}}]);