"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={description:"Integrate your JavaScript dapp with MetaMask.",sidebar_position:1},s="JavaScript quickstart",c={unversionedId:"quickstart/javascript",id:"quickstart/javascript",title:"JavaScript quickstart",description:"Integrate your JavaScript dapp with MetaMask.",source:"@site/wallet/quickstart/javascript.md",sourceDirName:"quickstart",slug:"/quickstart/javascript",permalink:"/1089-get-started-revamp/wallet/quickstart/javascript",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/quickstart/javascript.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Integrate your JavaScript dapp with MetaMask.",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Quickstart",permalink:"/1089-get-started-revamp/wallet/quickstart"},next:{title:"React quickstart",permalink:"/1089-get-started-revamp/wallet/quickstart/react"}},i={},l=[{value:"Connect to the MetaMask browser extension",id:"connect-to-the-metamask-browser-extension",level:2},{value:"Connect to the MetaMask extension and MetaMask Mobile",id:"connect-to-the-metamask-extension-and-metamask-mobile",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"javascript-quickstart"},"JavaScript quickstart"),(0,r.kt)("p",null,"This page provides code samples to quickly connect to your users' MetaMask accounts from a\nJavaScript dapp.\nYou can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#connect-to-the-metamask-browser-extension"},"Connect to the MetaMask browser extension")," directly\nusing the MetaMask APIs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#connect-to-the-metamask-extension-and-metamask-mobile"},"Connect to the MetaMask extension and MetaMask Mobile"),"\nusing the SDK.")),(0,r.kt)("h2",{id:"connect-to-the-metamask-browser-extension"},"Connect to the MetaMask browser extension"),(0,r.kt)("p",null,"Connect to the MetaMask browser extension directly using the\n",(0,r.kt)("a",{parentName:"p",href:"/1089-get-started-revamp/wallet/concepts/apis"},"MetaMask Ethereum provider API"),".\nYou must ",(0,r.kt)("a",{parentName:"p",href:"/wallet/how-to/detect-wallet"},"detect MetaMask")," in the user's browser, then\n",(0,r.kt)("a",{parentName:"p",href:"/1089-get-started-revamp/wallet/how-to/access-accounts"},"access the user's accounts")," by prompting them to connect to MetaMask."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/detect-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/detect-provider"))," module in\nyour project directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/detect-provider\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the following code to your project file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"// Detect the MetaMask Ethereum provider\n\nimport detectEthereumProvider from '@metamask/detect-provider';\n\nconst provider = await detectEthereumProvider();\n\nif (provider) {\n  startApp(provider);\n} else {\n  console.log('Please install MetaMask!');\n}\n\nfunction startApp(provider) {\n  if (provider !== window.ethereum) {\n    console.error('Do you have multiple wallets installed?');\n  }\n}\n\n// Prompt users to connect to MetaMask\n\nconst ethereumButton = document.querySelector('.enableEthereumButton');\nconst showAccount = document.querySelector('.showAccount');\n\nethereumButton.addEventListener('click', () => {\n  getAccount();\n});\n\nasync function getAccount() {\n  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })\n    .catch((err) => {\n      if (err.code === 4001) {\n        console.log('Please connect to MetaMask.');\n      } else {\n        console.error(err);\n      }\n    });\n  const account = accounts[0];\n  showAccount.innerHTML = account;\n}\n")))),(0,r.kt)("h2",{id:"connect-to-the-metamask-extension-and-metamask-mobile"},"Connect to the MetaMask extension and MetaMask Mobile"),(0,r.kt)("p",null,"Connect to the MetaMask browser extension and MetaMask Mobile using ",(0,r.kt)("a",{parentName:"p",href:"/1089-get-started-revamp/wallet/concepts/sdk/"},"MetaMask SDK"),".\nThe SDK automatically detects MetaMask in the user's browsers, and enables them to seamlessly\nconnect to the extension or mobile wallet.\nBy integrating your dapp using the SDK, millions of MetaMask Mobile users can connect to their\npreferred MetaMask client."),(0,r.kt)("admonition",{title:"note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The SDK uses the ",(0,r.kt)("a",{parentName:"p",href:"/1089-get-started-revamp/wallet/concepts/apis#ethereum-provider-api"},"Ethereum provider"),", so you can use the\nSDK as a wrapper around an existing JavaScript dapp and call\n",(0,r.kt)("a",{parentName:"p",href:"/1089-get-started-revamp/wallet/reference/provider-api"},"MetaMask Ethereum provider API methods")," from your dapp as normal.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the ",(0,r.kt)("a",{parentName:"p",href:"/1089-get-started-revamp/wallet/how-to/use-sdk/javascript/"},"MetaMask JavaScript SDK")," in your project directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/sdk\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the following code to your project file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"import { MetaMaskSDK } from '@metamask/sdk';\n\n// Initialize the SDK\n\nconst MMSDK = new MetaMaskSDK(\n  dappMetadata: {\n    name: \"Example JavaScript Dapp\",\n    url: window.location.host,\n  }\n);\n\nconst ethereum = MMSDK.getProvider();\n\n// Prompt users to connect to MetaMask\n\nconst ethereumButton = document.querySelector('.enableEthereumButton');\nconst showAccount = document.querySelector('.showAccount');\n\nethereumButton.addEventListener('click', () => {\n  getAccount();\n});\n\nasync function getAccount() {\n  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })\n    .catch((err) => {\n      if (err.code === 4001) {\n        console.log('Please connect to MetaMask.');\n      } else {\n        console.error(err);\n      }\n    });\n  const account = accounts[0];\n  showAccount.innerHTML = account;\n}\n")))))}m.isMDXComponent=!0}}]);