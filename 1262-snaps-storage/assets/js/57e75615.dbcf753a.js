"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3692],{15680:(e,r,n)=>{n.d(r,{xA:()=>l,yg:()=>h});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},l=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?t.createElement(h,s(s({ref:r},l),{},{components:n})):t.createElement(h,s({ref:r},l))}));function h(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57504:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=n(58168),a=(n(96540),n(15680));const o={description:"Communicate errors from your Snap without crashing it.",sidebar_position:2},s="Communicate errors",i={unversionedId:"how-to/communicate-errors",id:"how-to/communicate-errors",title:"Communicate errors",description:"Communicate errors from your Snap without crashing it.",source:"@site/snaps/how-to/communicate-errors.md",sourceDirName:"how-to",slug:"/how-to/communicate-errors",permalink:"/1262-snaps-storage/snaps/how-to/communicate-errors",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/communicate-errors.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Communicate errors from your Snap without crashing it.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Request permissions",permalink:"/1262-snaps-storage/snaps/how-to/request-permissions"},next:{title:"Use environment variables",permalink:"/1262-snaps-storage/snaps/how-to/use-environment-variables"}},p={},c=[{value:"Import and throw errors",id:"import-and-throw-errors",level:2},{value:"Pass data with the error",id:"pass-data-with-the-error",level:3},{value:"Detect known errors in dapps",id:"detect-known-errors-in-dapps",level:2},{value:"Example",id:"example",level:2}],l={toc:c},m="wrapper";function u(e){let{components:r,...n}=e;return(0,a.yg)(m,(0,t.A)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"communicate-errors"},"Communicate errors"),(0,a.yg)("p",null,"The Snaps SDK exposes a set of known errors that can be thrown from your Snap code without crashing\nthe Snap.\nSee the ",(0,a.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/known-errors"},"Snaps known errors reference")," for the full list of errors."),(0,a.yg)("h2",{id:"import-and-throw-errors"},"Import and throw errors"),(0,a.yg)("p",null,"To throw these known errors, first import them from the\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/snaps-sdk"},(0,a.yg)("inlineCode",{parentName:"a"},"@metamask/snaps-sdk"))," package,\nthen throw them where needed.\nFor example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnRpcRequestHandler } from "@metamask/snaps-sdk";\nimport { MethodNotFoundError } from "@metamask/snaps-sdk";\n\nexport const onRpcRequest: OnRpcRequestHandler = async ({ request }) => {\n  switch (request.method) {\n    case "hello":\n      return "Hello World!";\n  default:\n    // Throw a known error to avoid crashing the Snap.\n    throw new MethodNotFoundError();\n  }\n};\n')),(0,a.yg)("h3",{id:"pass-data-with-the-error"},"Pass data with the error"),(0,a.yg)("p",null,"The error class constructors exported by ",(0,a.yg)("inlineCode",{parentName:"p"},"@metamask/snaps-sdk")," have the following signature:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"class SnapJsonRpcError extends SnapError {\n  new (message?: string, data?: Record<string, Json>)\n}\n")),(0,a.yg)("p",null,"Both parameters are optional.\nIf you don't pass ",(0,a.yg)("inlineCode",{parentName:"p"},"message"),", then a pre-determined message is used.\nIf you don't pass ",(0,a.yg)("inlineCode",{parentName:"p"},"data"),", then an empty object is passed."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"data")," can be any JSON-serializable object."),(0,a.yg)("h2",{id:"detect-known-errors-in-dapps"},"Detect known errors in dapps"),(0,a.yg)("p",null,"Known errors are thrown back to the caller as JSON-RPC errors.\nThey have a numeric ",(0,a.yg)("inlineCode",{parentName:"p"},"code"),", a ",(0,a.yg)("inlineCode",{parentName:"p"},"message")," string, and a ",(0,a.yg)("inlineCode",{parentName:"p"},"data")," object."),(0,a.yg)("p",null,"The ",(0,a.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/known-errors"},"Snaps known errors reference")," lists all the known errors with\ntheir codes and intended usage."),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"See the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/errors"},(0,a.yg)("inlineCode",{parentName:"a"},"@metamask/error-example-snap")),"\npackage for a full example of communicating errors."))}u.isMDXComponent=!0}}]);