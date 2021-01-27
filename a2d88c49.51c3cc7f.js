(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=(n(0),n(85));const a={id:"hook",title:"Check permissions in the frontend",sidebar_label:"Check permissions in the frontend",slug:"/hook"},i={unversionedId:"hook",id:"hook",isDocsHomePage:!1,title:"Check permissions in the frontend",description:"If you need to validate a rule in the frontend we got'chu.",source:"@site/docs/hook.md",slug:"/hook",permalink:"/blitz-guard/docs/hook",editUrl:"https://github.com/ntgussoni/blitz-guard/edit/main/docs/docs/hook.md",version:"current",sidebar_label:"Check permissions in the frontend",sidebar:"someSidebar",previous:{title:"How to secure your endpoints",permalink:"/blitz-guard/docs/secure-your-endpoints"},next:{title:"Developer middleware",permalink:"/blitz-guard/docs/middleware"}},c=[],u={toc:c};function l({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you need to validate a rule in the frontend we got'chu.\nJust use the predefined ",Object(o.b)("inlineCode",{parentName:"p"},"Guard.getAbility")," query with a regular useQuery hook."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import { useQuery } from "blitz"\nimport Guard from "app/guard/ability"\n\nconst [[canCreateComment, canDeleteComment], { isLoading }] = useQuery(Guard.getAbility, [\n  ["create", "comment"],\n  ["delete", "comment" /* args */],\n])\n\nconsole.log(canDeleteComment) // true\nconsole.log(canDeleteComment) // false\n')))}l.isMDXComponent=!0},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);