"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6286],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=o(t),h=r,g=c["".concat(p,".").concat(h)]||c[h]||u[h]||s;return t?n.createElement(g,l(l({ref:a},m),{},{components:t})):n.createElement(g,l({ref:a},m))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=h;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var o=2;o<s;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},24888:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var n=t(58168),r=(t(96540),t(15680));const s={title:"What's new in the documentation?",description:"Summary of the latest updates to this documentation."},l="What's new in the documentation?",i={unversionedId:"whats-new",id:"whats-new",title:"What's new in the documentation?",description:"Summary of the latest updates to this documentation.",source:"@site/docs/whats-new.md",sourceDirName:".",slug:"/whats-new",permalink:"/add-listen/whats-new",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/docs/whats-new.md",tags:[],version:"current",frontMatter:{title:"What's new in the documentation?",description:"Summary of the latest updates to this documentation."}},p={},o=[{value:"April 2024",id:"april-2024",level:2},{value:"March 2024",id:"march-2024",level:2},{value:"February 2024",id:"february-2024",level:2}],m={toc:o},c="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(c,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"whats-new-in-the-documentation"},"What's new in the documentation?"),(0,r.yg)("p",null,'The latest major MetaMask documentation updates are listed by the month they were added to the documentation.\nFor a comprehensive list of recent product changes, visit the "Release Notes" section at the bottom\nof the ',(0,r.yg)("a",{parentName:"p",href:"https://metamask.io/developer/"},"MetaMask developer page"),"."),(0,r.yg)("h2",{id:"april-2024"},"April 2024"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/wallet/reference/provider-api"},(0,r.yg)("inlineCode",{parentName:"a"},"removeAllListeners"))," method example for tidying event listeners.\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1288"},"#1288"),")"),(0,r.yg)("li",{parentName:"ul"},"Moved Snaps-specific Wallet API methods from the\n",(0,r.yg)("a",{parentName:"li",href:"/wallet/reference/json-rpc-api"},"Wallet JSON-RPC API reference")," to the\n",(0,r.yg)("a",{parentName:"li",href:"/snaps/reference/wallet-api-for-snaps"},"Snaps reference"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1286"},"#1286"),")"),(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/snaps/reference/entry-points/#onkeyringrequest"},"Snaps ",(0,r.yg)("inlineCode",{parentName:"a"},"onKeyringRequest")," entry point"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1258"},"#1258"),")"),(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/snaps/features/data-storage"},"Snaps data storage"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1278"},"#1278"),")"),(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/snaps/how-to/get-allowlisted"},"how to get your Snap allowlisted"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1222"},"#1222"),")"),(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/snaps/features/lifecycle-hooks"},"Snaps lifecycle hooks"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1274"},"#1274"),")"),(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/snaps/features/cron-jobs"},"Snaps cron jobs"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1271"},"#1271"),")"),(0,r.yg)("li",{parentName:"ul"},"Updated ",(0,r.yg)("a",{parentName:"li",href:"/wallet/how-to/connect"},"how to connect to MetaMask")," with vanilla TypeScript and React\nTypeScript instructions.\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1247"},"#1247"),")")),(0,r.yg)("h2",{id:"march-2024"},"March 2024"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/snaps/reference/cli/options/#polyfills"},"Snaps ",(0,r.yg)("inlineCode",{parentName:"a"},"polyfills")," configuration option"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1238"},"#1238"),")"),(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/snaps/features/custom-ui/interactive-ui"},"Snaps interactive UI"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1166"},"#1166"),")"),(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/snaps/features/custom-ui/#image"},"Snaps improved image support"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1236"},"#1236"),")"),(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/snaps/features/signature-insights"},"Snaps signature insights"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1228"},"#1228"),")"),(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1223"},"how to restrict a Snap's RPC API methods"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1223"},"#1223"),")"),(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/snaps/reference/permissions/#snap-defined-timeouts"},"Snap-defined timeouts"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1224"},"#1224")," and\n",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1227"},"#1227"),")"),(0,r.yg)("li",{parentName:"ul"},"Restructured Wallet documentation to emphasize ",(0,r.yg)("a",{parentName:"li",href:"/wallet/how-to/connect"},"connecting using EIP-6963"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1214"},"#1214"),")"),(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/snaps/features/custom-name-resolution"},"Snaps custom name resolution"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/924"},"#924"),")"),(0,r.yg)("li",{parentName:"ul"},"Deprecated ",(0,r.yg)("inlineCode",{parentName:"li"},"snaps-types")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"snaps-ui")," packages and updated\n",(0,r.yg)("a",{parentName:"li",href:"/snaps/learn/tutorials"},"Snaps tutorials")," to match latest tooling.\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1206"},"#1206")," and\n",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1210"},"#1210"),")"),(0,r.yg)("li",{parentName:"ul"},"Documented new ",(0,r.yg)("a",{parentName:"li",href:"/snaps/features/custom-ui"},"Snaps custom UI")," components and improved examples.\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1209"},"#1209")," and\n",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1225"},"#1225"),")"),(0,r.yg)("li",{parentName:"ul"},'Removed "Flask" label from ',(0,r.yg)("a",{parentName:"li",href:"/snaps/reference/entry-points/#onhomepage"},"Snaps home pages")," and\n",(0,r.yg)("a",{parentName:"li",href:"/snaps/reference/snaps-api/#snap_getlocale"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_getLocale")),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1204"},"#1204"),")"),(0,r.yg)("li",{parentName:"ul"},"Restructured ",(0,r.yg)("a",{parentName:"li",href:"/wallet/how-to/use-sdk"},"SDK documentation")," to de-emphasize it as a recommended method.\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1200"},"#1200")," and\n",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1230"},"#1230"),")"),(0,r.yg)("li",{parentName:"ul"},"Deprecated the following ",(0,r.yg)("a",{parentName:"li",href:"/wallet/reference/provider-api"},"provider API")," elements:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"chainId")," property"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"networkVersion")," property"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"selectedAddress")," property"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"networkChanged")," event"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"net_version")," support in ",(0,r.yg)("inlineCode",{parentName:"li"},"send()")))),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("a",{parentName:"li",href:"/snaps/learn/best-practices"},"Snaps best practices section"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1187"},"#1187"),")"),(0,r.yg)("li",{parentName:"ul"},"Updated ",(0,r.yg)("a",{parentName:"li",href:"/snaps/reference/cli"},"Snaps CLI reference")," with Webpack configuration options.\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1178"},"#1178"),")"),(0,r.yg)("li",{parentName:"ul"},"Improved and restructured the ",(0,r.yg)("a",{parentName:"li",href:"/snaps/reference/keyring-api"},"Snaps Keyring API reference"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1170"},"#1170"),")"),(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/wallet/how-to/use-sdk/gaming/unity/connect-and-sign"},"how to connect and sign using the Unity SDK"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1023"},"#1023"),")")),(0,r.yg)("h2",{id:"february-2024"},"February 2024"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/snaps/features/custom-evm-accounts/#account-abstraction-erc-4337"},"account abstraction using ERC-4337"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1167"},"#1167"),")"),(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/snaps/how-to/use-environment-variables"},"how to use Snaps environment variables"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1149"},"#1149"),")"),(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/snaps/features/static-files"},"Snaps static files"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1138"},"#1138"),")"),(0,r.yg)("li",{parentName:"ul"},"Restructured ",(0,r.yg)("a",{parentName:"li",href:"/snaps"},"Snaps documentation")," for improved readability and accessibility.\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1129"},"#1129"),")"),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("a",{parentName:"li",href:"/snaps/learn/about-snaps"},"Snaps architecture diagrams"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1123"},"#1123"),")"),(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/snaps/reference/snaps-api/#snap_managestate"},"Snaps unencrypted state"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1124"},"#1124"),")"),(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/snaps/reference/snaps-api/#snap_getclientstatus"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_getClientStatus")),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1119"},"#1119"),")"),(0,r.yg)("li",{parentName:"ul"},"Restructured and improved ",(0,r.yg)("a",{parentName:"li",href:"/wallet"},"Wallet documentation"),' and introduced "Wallet API" terminology.\n(',(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1114"},"#1114")," and\n",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1125"},"#1125"),")"),(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/wallet/how-to/connect"},"how to detect multiple wallets using EIP-6963"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1094"},"#1094"),")"),(0,r.yg)("li",{parentName:"ul"},"Documented ",(0,r.yg)("a",{parentName:"li",href:"/snaps/how-to/communicate-errors"},"how to communicate errors in Snaps"),".\n(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-docs/pull/1117"},"#1117"),")")))}u.isMDXComponent=!0}}]);