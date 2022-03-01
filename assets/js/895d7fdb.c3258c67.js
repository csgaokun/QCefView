"use strict";(self.webpackChunkqcefviewdoc=self.webpackChunkqcefviewdoc||[]).push([[332],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=d(n),m=r,u=f["".concat(l,".").concat(m)]||f[m]||s[m]||i;return n?a.createElement(u,c(c({ref:t},p),{},{components:n})):a.createElement(u,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var d=2;d<i;d++)c[d]=n[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2266:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),c=["components"],o={title:"QCefContext"},l='class `QCefContext` <a id="class_q_cef_context" class="anchor"></a>',d={unversionedId:"reference/QCefContext",id:"reference/QCefContext",title:"QCefContext",description:"Represents the CEF context",source:"@site/docs/reference/QCefContext.md",sourceDirName:"reference",slug:"/reference/QCefContext",permalink:"/QCefView/docs/reference/QCefContext",editUrl:"https://github.com/CefView/QCefViewDoc/tree/master/docs/reference/QCefContext.md",tags:[],version:"current",frontMatter:{title:"QCefContext"},sidebar:"default",previous:{title:"QCefConfig",permalink:"/QCefView/docs/reference/QCefConfig"},next:{title:"QCefEvent",permalink:"/QCefView/docs/reference/QCefEvent"}},p=[{value:"Summary",id:"summary",children:[],level:2},{value:"Members",id:"members",children:[{value:'<code>public  </code>QCefContext<code>(QCoreApplication * app,const </code>QCefConfig<code> * config)</code> <a id="class_q_cef_context_1a3ab6dba50c5a1db89a55631a0ffa06af" class="anchor"></a>',id:"public--qcefcontextqcoreapplication--appconst-qcefconfig--config-",children:[{value:"Parameters",id:"parameters",children:[],level:4}],level:3},{value:'<code>public  </code>~QCefContext<code>()</code> <a id="class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d" class="anchor"></a>',id:"public--qcefcontext-",children:[],level:3},{value:'<code>public void </code>addLocalFolderResource<code>(const QString &amp; path,const QString &amp; url,int priority)</code> <a id="class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454" class="anchor"></a>',id:"public-void-addlocalfolderresourceconst-qstring--pathconst-qstring--urlint-priority-",children:[{value:"Parameters",id:"parameters-1",children:[],level:4}],level:3},{value:'<code>public void </code>addArchiveResource<code>(const QString &amp; path,const QString &amp; url,const QString &amp; password,int priority)</code> <a id="class_q_cef_context_1aba9c70a84379190d151bdc4b634367e6" class="anchor"></a>',id:"public-void-addarchiveresourceconst-qstring--pathconst-qstring--urlconst-qstring--passwordint-priority-",children:[{value:"Parameters",id:"parameters-2",children:[],level:4}],level:3},{value:'<code>public bool </code>addCookie<code>(const QString &amp; name,const QString &amp; value,const QString &amp; domain,const QString &amp; url)</code> <a id="class_q_cef_context_1a6d2e90de7fb5fcf2b7e7a6581d26e62c" class="anchor"></a>',id:"public-bool-addcookieconst-qstring--nameconst-qstring--valueconst-qstring--domainconst-qstring--url-",children:[{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4}],level:3},{value:'<code>protected bool </code>init<code>(const </code>QCefConfig<code> * config)</code> <a id="class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6" class="anchor"></a>',id:"protected-bool-initconst-qcefconfig--config-",children:[{value:"Parameters",id:"parameters-4",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4}],level:3},{value:'<code>protected void </code>uninit<code>()</code> <a id="class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b" class="anchor"></a>',id:"protected-void-uninit-",children:[],level:3},{value:'<code>public static </code>QCefContext<code>*</code>instance<code>()</code> <a id="class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b" class="anchor"></a>',id:"public-static-qcefcontextinstance-",children:[{value:"Returns",id:"returns-2",children:[],level:4}],level:3}],level:2}],s={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-qcefcontext-"},"class ",(0,i.kt)("inlineCode",{parentName:"h1"},"QCefContext")," ",(0,i.kt)("a",{id:"class_q_cef_context",class:"anchor"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"class QCefContext\n  : public QObject\n")),(0,i.kt)("p",null,"Represents the CEF context"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Members"),(0,i.kt)("th",{parentName:"tr",align:null},"Descriptions"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"public  "),(0,i.kt)("a",{parentName:"td",href:"#class_q_cef_context_1a3ab6dba50c5a1db89a55631a0ffa06af"},(0,i.kt)("inlineCode",{parentName:"a"},"QCefContext")),(0,i.kt)("inlineCode",{parentName:"td"},"(QCoreApplication * app,const "),(0,i.kt)("a",{parentName:"td",href:"/QCefView/docs/reference/QCefConfig#class_q_cef_config"},(0,i.kt)("inlineCode",{parentName:"a"},"QCefConfig")),(0,i.kt)("inlineCode",{parentName:"td"}," * config)")),(0,i.kt)("td",{parentName:"tr",align:null},"Constructs the CEF context")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"public  "),(0,i.kt)("a",{parentName:"td",href:"#class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d"},(0,i.kt)("inlineCode",{parentName:"a"},"~QCefContext")),(0,i.kt)("inlineCode",{parentName:"td"},"()")),(0,i.kt)("td",{parentName:"tr",align:null},"Destructs the CEF context")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"public void "),(0,i.kt)("a",{parentName:"td",href:"#class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454"},(0,i.kt)("inlineCode",{parentName:"a"},"addLocalFolderResource")),(0,i.kt)("inlineCode",{parentName:"td"},"(const QString & path,const QString & url,int priority)")),(0,i.kt)("td",{parentName:"tr",align:null},"Adds a url mapping item with local web resource directory")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"public void "),(0,i.kt)("a",{parentName:"td",href:"#class_q_cef_context_1aba9c70a84379190d151bdc4b634367e6"},(0,i.kt)("inlineCode",{parentName:"a"},"addArchiveResource")),(0,i.kt)("inlineCode",{parentName:"td"},"(const QString & path,const QString & url,const QString & password,int priority)")),(0,i.kt)("td",{parentName:"tr",align:null},"Adds a url mapping item with local archive (.zip) file which contains the web resource")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"public bool "),(0,i.kt)("a",{parentName:"td",href:"#class_q_cef_context_1a6d2e90de7fb5fcf2b7e7a6581d26e62c"},(0,i.kt)("inlineCode",{parentName:"a"},"addCookie")),(0,i.kt)("inlineCode",{parentName:"td"},"(const QString & name,const QString & value,const QString & domain,const QString & url)")),(0,i.kt)("td",{parentName:"tr",align:null},"Adds a cookie to the CEF context, this cookie is accessible from all browsers created with this context")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"protected bool "),(0,i.kt)("a",{parentName:"td",href:"#class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6"},(0,i.kt)("inlineCode",{parentName:"a"},"init")),(0,i.kt)("inlineCode",{parentName:"td"},"(const "),(0,i.kt)("a",{parentName:"td",href:"/QCefView/docs/reference/QCefConfig#class_q_cef_config"},(0,i.kt)("inlineCode",{parentName:"a"},"QCefConfig")),(0,i.kt)("inlineCode",{parentName:"td"}," * config)")),(0,i.kt)("td",{parentName:"tr",align:null},"Initialize the CEF context")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"protected void "),(0,i.kt)("a",{parentName:"td",href:"#class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b"},(0,i.kt)("inlineCode",{parentName:"a"},"uninit")),(0,i.kt)("inlineCode",{parentName:"td"},"()")),(0,i.kt)("td",{parentName:"tr",align:null},"Uninitialize the CEF context")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"public static "),(0,i.kt)("a",{parentName:"td",href:"#class_q_cef_context"},(0,i.kt)("inlineCode",{parentName:"a"},"QCefContext")),(0,i.kt)("inlineCode",{parentName:"td"},"*"),(0,i.kt)("a",{parentName:"td",href:"#class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b"},(0,i.kt)("inlineCode",{parentName:"a"},"instance")),(0,i.kt)("inlineCode",{parentName:"td"},"()")),(0,i.kt)("td",{parentName:"tr",align:null},"Gets the unique default instance")))),(0,i.kt)("h2",{id:"members"},"Members"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"public--qcefcontextqcoreapplication--appconst-qcefconfig--config-"},(0,i.kt)("inlineCode",{parentName:"h3"},"public  "),(0,i.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1a3ab6dba50c5a1db89a55631a0ffa06af"},(0,i.kt)("inlineCode",{parentName:"a"},"QCefContext")),(0,i.kt)("inlineCode",{parentName:"h3"},"(QCoreApplication * app,const "),(0,i.kt)("a",{parentName:"h3",href:"/QCefView/docs/reference/QCefConfig#class_q_cef_config"},(0,i.kt)("inlineCode",{parentName:"a"},"QCefConfig")),(0,i.kt)("inlineCode",{parentName:"h3"}," * config)")," ",(0,i.kt)("a",{id:"class_q_cef_context_1a3ab6dba50c5a1db89a55631a0ffa06af",class:"anchor"})),(0,i.kt)("p",null,"Constructs the CEF context"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"app")," The application")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"config")," The ",(0,i.kt)("a",{parentName:"p",href:"/QCefView/docs/reference/QCefConfig#class_q_cef_config"},"QCefConfig")," instance"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"public--qcefcontext-"},(0,i.kt)("inlineCode",{parentName:"h3"},"public  "),(0,i.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d"},(0,i.kt)("inlineCode",{parentName:"a"},"~QCefContext")),(0,i.kt)("inlineCode",{parentName:"h3"},"()")," ",(0,i.kt)("a",{id:"class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d",class:"anchor"})),(0,i.kt)("p",null,"Destructs the CEF context"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"public-void-addlocalfolderresourceconst-qstring--pathconst-qstring--urlint-priority-"},(0,i.kt)("inlineCode",{parentName:"h3"},"public void "),(0,i.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454"},(0,i.kt)("inlineCode",{parentName:"a"},"addLocalFolderResource")),(0,i.kt)("inlineCode",{parentName:"h3"},"(const QString & path,const QString & url,int priority)")," ",(0,i.kt)("a",{id:"class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454",class:"anchor"})),(0,i.kt)("p",null,"Adds a url mapping item with local web resource directory"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"path")," The path to the local resource directory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"url")," The url to be mapped to")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"priority")," The priority"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"public-void-addarchiveresourceconst-qstring--pathconst-qstring--urlconst-qstring--passwordint-priority-"},(0,i.kt)("inlineCode",{parentName:"h3"},"public void "),(0,i.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1aba9c70a84379190d151bdc4b634367e6"},(0,i.kt)("inlineCode",{parentName:"a"},"addArchiveResource")),(0,i.kt)("inlineCode",{parentName:"h3"},"(const QString & path,const QString & url,const QString & password,int priority)")," ",(0,i.kt)("a",{id:"class_q_cef_context_1aba9c70a84379190d151bdc4b634367e6",class:"anchor"})),(0,i.kt)("p",null,"Adds a url mapping item with local archive (.zip) file which contains the web resource"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"path")," The path to the local archive file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"url")," The url to be mapped to")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"password")," The password of the archive")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"priority")," The priority"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"public-bool-addcookieconst-qstring--nameconst-qstring--valueconst-qstring--domainconst-qstring--url-"},(0,i.kt)("inlineCode",{parentName:"h3"},"public bool "),(0,i.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1a6d2e90de7fb5fcf2b7e7a6581d26e62c"},(0,i.kt)("inlineCode",{parentName:"a"},"addCookie")),(0,i.kt)("inlineCode",{parentName:"h3"},"(const QString & name,const QString & value,const QString & domain,const QString & url)")," ",(0,i.kt)("a",{id:"class_q_cef_context_1a6d2e90de7fb5fcf2b7e7a6581d26e62c",class:"anchor"})),(0,i.kt)("p",null,"Adds a cookie to the CEF context, this cookie is accessible from all browsers created with this context"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name")," The cookie item name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"value")," The cookie item value")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"domain")," The applicable domain name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"url")," The applicable url"))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,"True on success; otherwise false"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"protected-bool-initconst-qcefconfig--config-"},(0,i.kt)("inlineCode",{parentName:"h3"},"protected bool "),(0,i.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6"},(0,i.kt)("inlineCode",{parentName:"a"},"init")),(0,i.kt)("inlineCode",{parentName:"h3"},"(const "),(0,i.kt)("a",{parentName:"h3",href:"/QCefView/docs/reference/QCefConfig#class_q_cef_config"},(0,i.kt)("inlineCode",{parentName:"a"},"QCefConfig")),(0,i.kt)("inlineCode",{parentName:"h3"}," * config)")," ",(0,i.kt)("a",{id:"class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6",class:"anchor"})),(0,i.kt)("p",null,"Initialize the CEF context"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config")," The ",(0,i.kt)("a",{parentName:"li",href:"/QCefView/docs/reference/QCefConfig#class_q_cef_config"},"QCefConfig")," instance")),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,"True on success; otherwise false"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"protected-void-uninit-"},(0,i.kt)("inlineCode",{parentName:"h3"},"protected void "),(0,i.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b"},(0,i.kt)("inlineCode",{parentName:"a"},"uninit")),(0,i.kt)("inlineCode",{parentName:"h3"},"()")," ",(0,i.kt)("a",{id:"class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b",class:"anchor"})),(0,i.kt)("p",null,"Uninitialize the CEF context"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"public-static-qcefcontextinstance-"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static "),(0,i.kt)("a",{parentName:"h3",href:"#class_q_cef_context"},(0,i.kt)("inlineCode",{parentName:"a"},"QCefContext")),(0,i.kt)("inlineCode",{parentName:"h3"},"*"),(0,i.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b"},(0,i.kt)("inlineCode",{parentName:"a"},"instance")),(0,i.kt)("inlineCode",{parentName:"h3"},"()")," ",(0,i.kt)("a",{id:"class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b",class:"anchor"})),(0,i.kt)("p",null,"Gets the unique default instance"),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,"The default instance"))}f.isMDXComponent=!0}}]);