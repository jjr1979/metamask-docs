"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,g=m["".concat(p,".").concat(c)]||m[c]||k[c]||i;return n?a.createElement(g,l(l({ref:t},o),{},{components:n})):a.createElement(g,l({ref:t},o))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[m]="string"==typeof e?e:r,l[1]=d;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},l="Class: KeyringClient",d={unversionedId:"reference/keyring-api/classes/KeyringClient",id:"reference/keyring-api/classes/KeyringClient",title:"Class: KeyringClient",description:"Extended By",source:"@site/snaps/reference/keyring-api/classes/KeyringClient.md",sourceDirName:"reference/keyring-api/classes",slug:"/reference/keyring-api/classes/KeyringClient",permalink:"/android-sdk/snaps/reference/keyring-api/classes/KeyringClient",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/classes/KeyringClient.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"API",permalink:"/android-sdk/snaps/reference/keyring-api/exports"},next:{title:"Class: KeyringSnapControllerClient",permalink:"/android-sdk/snaps/reference/keyring-api/classes/KeyringSnapControllerClient"}},p={},s=[{value:"Extended By",id:"extended-by",level:2},{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new KeyringClient(sender)",id:"new-keyringclientsender",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Source",id:"source",level:4},{value:"Properties",id:"properties",level:2},{value:"#sender",id:"sender",level:3},{value:"Source",id:"source-1",level:4},{value:"Methods",id:"methods",level:2},{value:"#send()",id:"send",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source-2",level:4},{value:"approveRequest()",id:"approverequest",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Source",id:"source-3",level:4},{value:"createAccount()",id:"createaccount",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Source",id:"source-4",level:4},{value:"deleteAccount()",id:"deleteaccount",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Source",id:"source-5",level:4},{value:"filterAccountChains()",id:"filteraccountchains",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Implementation of",id:"implementation-of-3",level:4},{value:"Source",id:"source-6",level:4},{value:"getAccount()",id:"getaccount",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Implementation of",id:"implementation-of-4",level:4},{value:"Source",id:"source-7",level:4},{value:"getRequest()",id:"getrequest",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Implementation of",id:"implementation-of-5",level:4},{value:"Source",id:"source-8",level:4},{value:"listAccounts()",id:"listaccounts",level:3},{value:"Implementation of",id:"implementation-of-6",level:4},{value:"Source",id:"source-9",level:4},{value:"listRequests()",id:"listrequests",level:3},{value:"Implementation of",id:"implementation-of-7",level:4},{value:"Source",id:"source-10",level:4},{value:"rejectRequest()",id:"rejectrequest",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Implementation of",id:"implementation-of-8",level:4},{value:"Source",id:"source-11",level:4},{value:"submitRequest()",id:"submitrequest",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Implementation of",id:"implementation-of-9",level:4},{value:"Source",id:"source-12",level:4},{value:"updateAccount()",id:"updateaccount",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Implementation of",id:"implementation-of-10",level:4},{value:"Source",id:"source-13",level:4}],o={toc:s},m="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-keyringclient"},"Class: KeyringClient"),(0,r.kt)("h2",{id:"extended-by"},"Extended By"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/android-sdk/snaps/reference/keyring-api/classes/KeyringSnapControllerClient"},(0,r.kt)("inlineCode",{parentName:"a"},"KeyringSnapControllerClient"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/android-sdk/snaps/reference/keyring-api/classes/KeyringSnapRpcClient"},(0,r.kt)("inlineCode",{parentName:"a"},"KeyringSnapRpcClient")))),(0,r.kt)("h2",{id:"implements"},"Implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/android-sdk/snaps/reference/keyring-api/type-aliases/Keyring"},(0,r.kt)("inlineCode",{parentName:"a"},"Keyring")))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"new-keyringclientsender"},"new KeyringClient(sender)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"new KeyringClient(sender): KeyringClient\n")),(0,r.kt)("p",null,"Create a new instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyringClient"),"."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sender")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/android-sdk/snaps/reference/keyring-api/type-aliases/Sender"},(0,r.kt)("inlineCode",{parentName:"a"},"Sender"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"Sender")," instance to use to send requests to the snap.")))),(0,r.kt)("h4",{id:"source"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-client.ts#L40"},"external/keyring-api/src/keyring-client.ts:40")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"sender"},"#sender"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"private #sender: Sender;\n")),(0,r.kt)("h4",{id:"source-1"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-client.ts#L33"},"external/keyring-api/src/keyring-client.ts:33")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"send"},"#send()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'private #send(partial): Promise<\n  | null\n  | string[]\n  | {\n  address: string;\n  id: string;\n  name: string;\n  options: null | Record<string, Json>;\n  supportedMethods: (\n     | "personal_sign"\n     | "eth_sendTransaction"\n     | "eth_sign"\n     | "eth_signTransaction"\n     | "eth_signTypedData"\n     | "eth_signTypedData_v1"\n     | "eth_signTypedData_v2"\n     | "eth_signTypedData_v3"\n     | "eth_signTypedData_v4")[];\n  type: "eip155:eoa" | "eip155:erc4337";\n  }\n  | {\n  account: string;\n  request: { id: string; jsonrpc: "2.0"; method: string; } | { id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json> | Json[]; };\n  scope: string;\n  }\n  | {\n  pending: true;\n  }\n  | {\n  pending: false;\n  result: Json;\n  }\n  | {\n  address: string;\n  id: string;\n  name: string;\n  options: null | Record<string, Json>;\n  supportedMethods: (\n     | "personal_sign"\n     | "eth_sendTransaction"\n     | "eth_sign"\n     | "eth_signTransaction"\n     | "eth_signTypedData"\n     | "eth_signTypedData_v1"\n     | "eth_signTypedData_v2"\n     | "eth_signTypedData_v3"\n     | "eth_signTypedData_v4")[];\n  type: "eip155:eoa" | "eip155:erc4337";\n  }[]\n  | {\n  account: string;\n  request: { id: string; jsonrpc: "2.0"; method: string; } | { id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json> | Json[]; };\n  scope: string;\n}[]>\n')),(0,r.kt)("p",null,"Send a request to the snap and return the response."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"partial")),(0,r.kt)("td",{parentName:"tr",align:"left"},"|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Omit"),"<","{","   ",(0,r.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"keyring_listAccounts"'),";   }, ",(0,r.kt)("inlineCode",{parentName:"td"},'"id"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"jsonrpc"'),">","   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Omit"),"<","{","   ",(0,r.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"keyring_getAccount"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," id: string; };   }, ",(0,r.kt)("inlineCode",{parentName:"td"},'"id"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"jsonrpc"'),">","   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Omit"),"<","{","   ",(0,r.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"keyring_createAccount"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," name: string; options: Record<string, Json",">"," ","|"," null; };   }, ",(0,r.kt)("inlineCode",{parentName:"td"},'"id"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"jsonrpc"'),">","   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Omit"),"<","{","   ",(0,r.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"keyring_filterAccountChains"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," id: string; chains: string[]; };   }, ",(0,r.kt)("inlineCode",{parentName:"td"},'"id"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"jsonrpc"'),">","   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Omit"),"<","{","   ",(0,r.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"keyring_updateAccount"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," account: ","{"," id: string; name: string; address: string; options: Record<string, Json",">"," ","|",' null; supportedMethods: ("personal',"_",'sign" ',"|",' "eth',"_",'sendTransaction" ',"|",' "eth',"_",'sign" ',"|",' "eth',"_",'signTransaction" ',"|",' "eth',"_",'signTypedData" ',"|",' "eth',"_","signTypedData","_",'v1" ',"|",' "eth',"_","signTypedData","_",'v2" ',"|",' "eth',"_","signTypedData","_",'v3" ',"|",' "eth',"_","signTypedData","_",'v4")[]; type: "eip155:eoa" ',"|",' "eip155:erc4337"; }; };   }, ',(0,r.kt)("inlineCode",{parentName:"td"},'"id"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"jsonrpc"'),">","   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Omit"),"<","{","   ",(0,r.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"keyring_deleteAccount"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," id: string; };   }, ",(0,r.kt)("inlineCode",{parentName:"td"},'"id"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"jsonrpc"'),">","   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Omit"),"<","{","   ",(0,r.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"keyring_listRequests"'),";   }, ",(0,r.kt)("inlineCode",{parentName:"td"},'"id"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"jsonrpc"'),">","   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Omit"),"<","{","   ",(0,r.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"keyring_getRequest"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," id: string; };   }, ",(0,r.kt)("inlineCode",{parentName:"td"},'"id"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"jsonrpc"'),">","   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Omit"),"<","{","   ",(0,r.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"keyring_submitRequest"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," account: string; scope: string; request: ","{",' id: string; jsonrpc: "2.0"; method: string; } ',"|"," ","{",' id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json',">"," ","|"," Json[]; }; };   }, ",(0,r.kt)("inlineCode",{parentName:"td"},'"id"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"jsonrpc"'),">","   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Omit"),"<","{","   ",(0,r.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"keyring_approveRequest"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," id: string; };   }, ",(0,r.kt)("inlineCode",{parentName:"td"},'"id"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"jsonrpc"'),">","   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Omit"),"<","{","   ",(0,r.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"keyring_rejectRequest"'),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," id: string; };   }, ",(0,r.kt)("inlineCode",{parentName:"td"},'"id"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"jsonrpc"'),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Partial internal request (method and params).")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,"A promise that resolves to the response to the request."),(0,r.kt)("h4",{id:"source-2"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-client.ts#L50"},"external/keyring-api/src/keyring-client.ts:50")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"approverequest"},"approveRequest()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"approveRequest(id): Promise<void>\n")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,r.kt)("p",null,"Keyring.approveRequest"),(0,r.kt)("h4",{id:"source-3"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-client.ts#L151"},"external/keyring-api/src/keyring-client.ts:151")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"createaccount"},"createAccount()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'createAccount(name, options): Promise<{\n  address: string;\n  id: string;\n  name: string;\n  options: null | Record<string, Json>;\n  supportedMethods: (\n     | "personal_sign"\n     | "eth_sendTransaction"\n     | "eth_sign"\n     | "eth_signTransaction"\n     | "eth_signTypedData"\n     | "eth_signTypedData_v1"\n     | "eth_signTypedData_v2"\n     | "eth_signTypedData_v3"\n     | "eth_signTypedData_v4")[];\n  type: "eip155:eoa" | "eip155:erc4337";\n}>\n')),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Json"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null"))))),(0,r.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,r.kt)("p",null,"Keyring.createAccount"),(0,r.kt)("h4",{id:"source-4"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-client.ts#L79"},"external/keyring-api/src/keyring-client.ts:79")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"deleteaccount"},"deleteAccount()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"deleteAccount(id): Promise<void>\n")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,r.kt)("p",null,"Keyring.deleteAccount"),(0,r.kt)("h4",{id:"source-5"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-client.ts#L112"},"external/keyring-api/src/keyring-client.ts:112")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"filteraccountchains"},"filterAccountChains()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"filterAccountChains(id, chains): Promise<string[]>\n")),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"chains")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"),"[]")))),(0,r.kt)("h4",{id:"implementation-of-3"},"Implementation of"),(0,r.kt)("p",null,"Keyring.filterAccountChains"),(0,r.kt)("h4",{id:"source-6"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-client.ts#L92"},"external/keyring-api/src/keyring-client.ts:92")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getaccount"},"getAccount()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'getAccount(id): Promise<{\n  address: string;\n  id: string;\n  name: string;\n  options: null | Record<string, Json>;\n  supportedMethods: (\n     | "personal_sign"\n     | "eth_sendTransaction"\n     | "eth_sign"\n     | "eth_signTransaction"\n     | "eth_signTypedData"\n     | "eth_signTypedData_v1"\n     | "eth_signTypedData_v2"\n     | "eth_signTypedData_v3"\n     | "eth_signTypedData_v4")[];\n  type: "eip155:eoa" | "eip155:erc4337";\n}>\n')),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"implementation-of-4"},"Implementation of"),(0,r.kt)("p",null,"Keyring.getAccount"),(0,r.kt)("h4",{id:"source-7"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-client.ts#L69"},"external/keyring-api/src/keyring-client.ts:69")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getrequest"},"getRequest()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'getRequest(id): Promise<{\n  account: string;\n  request: { id: string; jsonrpc: "2.0"; method: string; } | { id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json> | Json[]; };\n  scope: string;\n}>\n')),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"implementation-of-5"},"Implementation of"),(0,r.kt)("p",null,"Keyring.getRequest"),(0,r.kt)("h4",{id:"source-8"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-client.ts#L131"},"external/keyring-api/src/keyring-client.ts:131")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"listaccounts"},"listAccounts()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'listAccounts(): Promise<{\n  address: string;\n  id: string;\n  name: string;\n  options: null | Record<string, Json>;\n  supportedMethods: (\n     | "personal_sign"\n     | "eth_sendTransaction"\n     | "eth_sign"\n     | "eth_signTransaction"\n     | "eth_signTypedData"\n     | "eth_signTypedData_v1"\n     | "eth_signTypedData_v2"\n     | "eth_signTypedData_v3"\n     | "eth_signTypedData_v4")[];\n  type: "eip155:eoa" | "eip155:erc4337";\n}[]>\n')),(0,r.kt)("h4",{id:"implementation-of-6"},"Implementation of"),(0,r.kt)("p",null,"Keyring.listAccounts"),(0,r.kt)("h4",{id:"source-9"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-client.ts#L60"},"external/keyring-api/src/keyring-client.ts:60")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"listrequests"},"listRequests()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'listRequests(): Promise<{\n  account: string;\n  request: { id: string; jsonrpc: "2.0"; method: string; } | { id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json> | Json[]; };\n  scope: string;\n}[]>\n')),(0,r.kt)("h4",{id:"implementation-of-7"},"Implementation of"),(0,r.kt)("p",null,"Keyring.listRequests"),(0,r.kt)("h4",{id:"source-10"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-client.ts#L122"},"external/keyring-api/src/keyring-client.ts:122")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"rejectrequest"},"rejectRequest()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"rejectRequest(id): Promise<void>\n")),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"implementation-of-8"},"Implementation of"),(0,r.kt)("p",null,"Keyring.rejectRequest"),(0,r.kt)("h4",{id:"source-11"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-client.ts#L161"},"external/keyring-api/src/keyring-client.ts:161")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"submitrequest"},"submitRequest()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"submitRequest(request): Promise<{\n  pending: true;\n  } | {\n  pending: false;\n  result: Json;\n}>\n")),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"request")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{","   ",(0,r.kt)("inlineCode",{parentName:"td"},"account"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"request"),": ","{",' id: string; jsonrpc: "2.0"; method: string; } ',"|"," ","{",' id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json',">"," ","|"," Json[]; };   ",(0,r.kt)("inlineCode",{parentName:"td"},"scope"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   }"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"request.account")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Account ID (UUIDv4).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"request.request")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{",' id: string; jsonrpc: "2.0"; method: string; } ',"|"," ","{",' id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json',">"," ","|"," Json[]; }"),(0,r.kt)("td",{parentName:"tr",align:"left"},"JSON-RPC request sent by the client application.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Note: The request ID must be a string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"request.scope")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Request's scope (CAIP-2 chain ID).")))),(0,r.kt)("h4",{id:"implementation-of-9"},"Implementation of"),(0,r.kt)("p",null,"Keyring.submitRequest"),(0,r.kt)("h4",{id:"source-12"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-client.ts#L141"},"external/keyring-api/src/keyring-client.ts:141")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"updateaccount"},"updateAccount()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"updateAccount(account): Promise<void>\n")),(0,r.kt)("h4",{id:"parameters-10"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"account")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{","   ",(0,r.kt)("inlineCode",{parentName:"td"},"address"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"options"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Json"),">",";   ",(0,r.kt)("inlineCode",{parentName:"td"},"supportedMethods"),": (      ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"personal_sign"'),"      ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_sendTransaction"'),"      ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_sign"'),"      ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTransaction"'),"      ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData"'),"      ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData_v1"'),"      ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData_v2"'),"      ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData_v3"'),"      ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData_v4"'),")[];   ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"eip155:eoa"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eip155:erc4337"'),";   }"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"account.address")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Account address or next receive address (UTXO).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"account.id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Account ID (UUIDv4).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"account.name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"User-chosen account name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"account.options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Json"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Keyring-dependent account options.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"account.supportedMethods")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"personal_sign"'),"   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_sendTransaction"'),"   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_sign"'),"   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTransaction"'),"   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData"'),"   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData_v1"'),"   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData_v2"'),"   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData_v3"'),"   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData_v4"'),")[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Account supported methods.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"account.type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"eip155:eoa"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eip155:erc4337"')),(0,r.kt)("td",{parentName:"tr",align:"left"},"Account type.")))),(0,r.kt)("h4",{id:"implementation-of-10"},"Implementation of"),(0,r.kt)("p",null,"Keyring.updateAccount"),(0,r.kt)("h4",{id:"source-13"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-client.ts#L102"},"external/keyring-api/src/keyring-client.ts:102")))}k.isMDXComponent=!0}}]);