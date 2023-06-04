"use strict";(self.webpackChunkqcefviewdoc=self.webpackChunkqcefviewdoc||[]).push([[748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1},o="Building Instruction",l={unversionedId:"intros/buiding",id:"intros/buiding",title:"Building Instruction",description:"Prerequisites",source:"@site/docs/intros/buiding.md",sourceDirName:"intros",slug:"/intros/buiding",permalink:"/QCefView/docs/intros/buiding",draft:!1,editUrl:"https://github.com/CefView/QCefViewDoc/tree/master/docs/intros/buiding.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"default",previous:{title:"Getting Started",permalink:"/QCefView/docs/intros/"},next:{title:"Change CEF version",permalink:"/QCefView/docs/intros/change-cef-ver"}},u={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. CMake",id:"1-cmake",level:3},{value:"2. Qt",id:"2-qt",level:3},{value:"Build",id:"build",level:2},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Linux",id:"linux",level:3}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"building-instruction"},"Building Instruction"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("h3",{id:"1-cmake"},"1. CMake"),(0,i.kt)("p",null,"QCefView project is managed with ",(0,i.kt)("a",{parentName:"p",href:"https://cmake.org/"},"CMake"),", thus you need to install CMake first. The minimum supported CMake version is 3.19.1, but the latest version is recommended."),(0,i.kt)("h3",{id:"2-qt"},"2. Qt"),(0,i.kt)("p",null,"QCefView is based on Qt framework\uff0cboth Qt 5.x or 6.x are supported. After installation, please add the environment variable ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"QTDIR"))," to point to the Qt location, for example:"),(0,i.kt)("p",null,"On Windows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bat"},"set QTDIR=C:\\Qt\\6.2.2\\msvc2019_64\n")),(0,i.kt)("p",null,"On macOS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export QTDIR=/usr/local/Cellar/qt5/5.4.1/clang_64\n")),(0,i.kt)("p",null,"On Linux:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export QTDIR=/usr/share/Qt/6.2.2/gcc_64\n")),(0,i.kt)("h2",{id:"build"},"Build"),(0,i.kt)("p",null,"Just check out the repo from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CefView/QCefView"},"https://github.com/CefView/QCefView"),", then init the submodule. This repo depends on the submodule ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CefView/CefViewCore"},"https://github.com/CefView/CefViewCore"),". "),(0,i.kt)("p",null,"You can clone the code using the following git command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone --recursive https://github.com/CefView/QCefView.git\n")),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate VS projects\ngenerate-win-x86_64.bat\n\n# Build from cmake\ncmake --build .build/windows.x86_64\n")),(0,i.kt)("p",null,"Find the project file in folder .build /windows.x86_64, you can also open the project with Visual Studio and build it."),(0,i.kt)("h3",{id:"macos"},"macOS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate Xcode project\n./generate-mac-x86_64.sh\n\n# Build from cmake \ncmake --build ./build/macos.x86_64\n")),(0,i.kt)("p",null,"Find the project file in folder .build /macos.x86_64, you can also open the project with Xcode and build it."),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate Unix Make file project\n./generate-linux-x86_64.sh\n\n# Build from cmake \ncmake --build ./build/linux-x86_64\n")),(0,i.kt)("p",null,"On Linux platform, Qt Creator is recommended as the IDE."))}d.isMDXComponent=!0}}]);