"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1733],{15680:(e,n,a)=>{a.d(n,{xA:()=>m,yg:()=>d});var s=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,s,t=function(e,n){if(null==e)return{};var a,s,t={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=s.createContext({}),l=function(e){var n=s.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},m=function(e){var n=l(e.components);return s.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},f=s.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=l(a),f=t,d=c["".concat(p,".").concat(f)]||c[f]||u[f]||r;return a?s.createElement(d,i(i({ref:n},m),{},{components:a})):s.createElement(d,i({ref:n},m))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=f;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:t,i[1]=o;for(var l=2;l<r;l++)i[l]=a[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}f.displayName="MDXCreateElement"},65291:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=a(58168),t=(a(96540),a(15680));const r={description:"Request permissions in a manifest file.",sidebar_position:1},i="Request permissions",o={unversionedId:"how-to/request-permissions",id:"how-to/request-permissions",title:"Request permissions",description:"Request permissions in a manifest file.",source:"@site/snaps/how-to/request-permissions.md",sourceDirName:"how-to",slug:"/how-to/request-permissions",permalink:"/1262-snaps-storage/snaps/how-to/request-permissions",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/request-permissions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Request permissions in a manifest file.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"How to",permalink:"/1262-snaps-storage/snaps/how-to"},next:{title:"Communicate errors",permalink:"/1262-snaps-storage/snaps/how-to/communicate-errors"}},p={},l=[{value:"Request permissions from a Snap",id:"request-permissions-from-a-snap",level:2},{value:"Snaps API methods",id:"snaps-api-methods",level:3},{value:"Endowments",id:"endowments",level:3},{value:"Dynamic permissions",id:"dynamic-permissions",level:3},{value:"Request permissions from a dapp",id:"request-permissions-from-a-dapp",level:2}],m={toc:l},c="wrapper";function u(e){let{components:n,...a}=e;return(0,t.yg)(c,(0,s.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"request-permissions"},"Request permissions"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"#request-permissions-from-a-snap"},"Snaps must request permission")," to access certain powerful\nJavaScript globals or API methods.\n",(0,t.yg)("a",{parentName:"p",href:"#request-permissions-from-a-dapp"},"Dapps must also request permission")," to access certain API methods\nto communicate with Snaps."),(0,t.yg)("p",null,"Snaps and dapps follow the ",(0,t.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255 wallet permissions specification"),"."),(0,t.yg)("h2",{id:"request-permissions-from-a-snap"},"Request permissions from a Snap"),(0,t.yg)("h3",{id:"snaps-api-methods"},"Snaps API methods"),(0,t.yg)("p",null,"Request permission to call ",(0,t.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/snaps-api"},"Snaps API methods")," in the\n",(0,t.yg)("inlineCode",{parentName:"p"},"initialPermissions")," field of the Snap ",(0,t.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/learn/about-snaps/files#manifest-file"},"manifest file"),".\nFor example, to request to call ",(0,t.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/snaps-api#snap_dialog"},(0,t.yg)("inlineCode",{parentName:"a"},"snap_dialog")),", add the\nfollowing to the manifest file:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "snap_dialog": {}\n}\n')),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"All Snaps API methods except the following interactive UI methods require requesting permission in\nthe manifest file:"),(0,t.yg)("ul",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/1262-snaps-storage/snaps/reference/snaps-api#snap_createinterface"},(0,t.yg)("inlineCode",{parentName:"a"},"snap_createInterface"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/1262-snaps-storage/snaps/reference/snaps-api#snap_getinterfacestate"},(0,t.yg)("inlineCode",{parentName:"a"},"snap_getInterfaceState"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/1262-snaps-storage/snaps/reference/snaps-api#snap_updateInterface"},(0,t.yg)("inlineCode",{parentName:"a"},"snap_updateInterface"))))),(0,t.yg)("h3",{id:"endowments"},"Endowments"),(0,t.yg)("p",null,"Endowments are a type of permission.\nRequest endowments in the ",(0,t.yg)("inlineCode",{parentName:"p"},"initialPermissions")," field of the Snap\n",(0,t.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/learn/about-snaps/files#manifest-file"},"manifest file"),".\nSee the ",(0,t.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/permissions"},"Snaps permissions reference")," for the full list of endowments."),(0,t.yg)("p",null,"For example, to request the ",(0,t.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/permissions#endowmentnetwork-access"},(0,t.yg)("inlineCode",{parentName:"a"},"endowment:network-access")),"\npermission, add the following to the manifest file:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:network-access": {}\n}\n')),(0,t.yg)("h3",{id:"dynamic-permissions"},"Dynamic permissions"),(0,t.yg)("p",null,"Dynamic permissions are not requested in the manifest file.\nInstead, your Snap can acquire dynamic permissions during its lifecycle."),(0,t.yg)("p",null,"For example, request permission to call the ",(0,t.yg)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,t.yg)("inlineCode",{parentName:"a"},"eth_accounts")),"\nMetaMask JSON-RPC API method by calling ",(0,t.yg)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,t.yg)("inlineCode",{parentName:"a"},"eth_requestAccounts")),".\nSee the ",(0,t.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/permissions#eth_accounts"},(0,t.yg)("inlineCode",{parentName:"a"},"eth_accounts")," dynamic permission")," for more information."),(0,t.yg)("h2",{id:"request-permissions-from-a-dapp"},"Request permissions from a dapp"),(0,t.yg)("p",null,"Dapps that communicate with Snaps using ",(0,t.yg)("a",{parentName:"p",href:"/wallet/reference/wallet_snap"},(0,t.yg)("inlineCode",{parentName:"a"},"wallet_snap"))," and ",(0,t.yg)("a",{parentName:"p",href:"/wallet/reference/wallet_invokesnap"},(0,t.yg)("inlineCode",{parentName:"a"},"wallet_invokeSnap"))," must request permission to do so by calling the\n",(0,t.yg)("a",{parentName:"p",href:"/wallet/reference/wallet_requestsnaps"},(0,t.yg)("inlineCode",{parentName:"a"},"wallet_requestSnaps"))," MetaMask JSON-RPC API method."),(0,t.yg)("p",null,"The following example calls ",(0,t.yg)("inlineCode",{parentName:"p"},"wallet_requestSnaps")," to request permission to connect to the ",(0,t.yg)("inlineCode",{parentName:"p"},"hello-snap")," Snap, then calls ",(0,t.yg)("inlineCode",{parentName:"p"},"wallet_invokeSnap")," to invoke the ",(0,t.yg)("inlineCode",{parentName:"p"},"hello")," JSON-RPC method exposed by the Snap:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'// If the Snap is not already installed, the user will be prompted to install it.\nawait window.ethereum.request({\n  method: "wallet_requestSnaps",\n  params: {\n    // Assuming the Snap is published to npm using the package name "hello-snap".\n    "npm:hello-snap": {},\n  },\n});\n\n// Invoke the "hello" JSON-RPC method exposed by the Snap.\nconst response = await window.ethereum.request({\n  method: "wallet_invokeSnap",\n  params: { snapId: "npm:hello-snap", request: { method: "hello" } },\n});\n\nconsole.log(response); // "world!"\n')),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"Learn more about implementing ",(0,t.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/learn/about-snaps/apis#custom-json-rpc-apis"},"custom JSON-RPC APIs")," in a Snap.")))}u.isMDXComponent=!0}}]);