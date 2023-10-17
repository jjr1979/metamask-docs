"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8778],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50525:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),i=a(85162);const s={sidebar_label:"Subcommands",sidebar_position:2},o="Snaps subcommands",u={unversionedId:"reference/cli/subcommands",id:"reference/cli/subcommands",title:"Snaps subcommands",description:"b, build",source:"@site/snaps/reference/cli/subcommands.md",sourceDirName:"reference/cli",slug:"/reference/cli/subcommands",permalink:"/android-sdk/snaps/reference/cli/subcommands",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/cli/subcommands.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Subcommands",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Options",permalink:"/android-sdk/snaps/reference/cli/options"},next:{title:"Keyring API",permalink:"/android-sdk/snaps/reference/keyring-api/"}},c={},p=[{value:"b, build",id:"b-build",level:2},{value:"e, eval",id:"e-eval",level:2},{value:"i, init",id:"i-init",level:2},{value:"m, manifest",id:"m-manifest",level:2},{value:"s, serve",id:"s-serve",level:2},{value:"w, watch",id:"w-watch",level:2}],m={toc:p},d="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snaps-subcommands"},"Snaps subcommands"),(0,r.kt)("h2",{id:"b-build"},"b, build"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap build [options]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap b -s lib/index.js -d out -n snap.js\n")))),(0,r.kt)("p",null,"Builds a Snap from source."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"b")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"build"),"."),(0,r.kt)("h2",{id:"e-eval"},"e, eval"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap eval [options]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap e -b out/snap.js\n")))),(0,r.kt)("p",null,"Attempts to evaluate the Snap bundle in SES."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"e")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"eval"),"."),(0,r.kt)("h2",{id:"i-init"},"i, init"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap init [directory]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap i my-snap\n")))),(0,r.kt)("p",null,"Initializes a Snap project in the specified directory.\nIf no directory is specified, the Snap project is initialized in the current directory."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"i")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"init"),"."),(0,r.kt)("h2",{id:"m-manifest"},"m, manifest"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap manifest [options]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap m --fix false\n")))),(0,r.kt)("p",null,"Validates the Snap ",(0,r.kt)("a",{parentName:"p",href:"/android-sdk/snaps/concepts/anatomy#manifest-file"},"manifest file"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"m")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest"),"."),(0,r.kt)("h2",{id:"s-serve"},"s, serve"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap serve [options]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap s -r out -p 9000\n")))),(0,r.kt)("p",null,"Locally serves Snap files for testing."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"s")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"serve"),"."),(0,r.kt)("h2",{id:"w-watch"},"w, watch"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap watch [options]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap w -s lib/index.js -d out\n")))),(0,r.kt)("p",null,"Rebuilds a Snap from source upon changes to the files in the parent and child directories of the\nsource directory."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All files in the parent and child directories of sthe source directory are watched for changes, except:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Files in the ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," directory."),(0,r.kt)("li",{parentName:"ul"},"Files in the ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"tests")," directories."),(0,r.kt)("li",{parentName:"ul"},"Any files named ",(0,r.kt)("inlineCode",{parentName:"li"},"test.js")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"test.ts"),"."),(0,r.kt)("li",{parentName:"ul"},"Files in the ",(0,r.kt)("inlineCode",{parentName:"li"},"dist")," directory, or the directory specified using ",(0,r.kt)("a",{parentName:"li",href:"/android-sdk/snaps/reference/cli/options#d-dist"},(0,r.kt)("inlineCode",{parentName:"a"},"--dist")),"."),(0,r.kt)("li",{parentName:"ul"},"Dotfiles."))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"w")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"watch"),"."))}b.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),s=a(70989),o=a(72389);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==s&&(m(t),o(n))},b=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:b,onClick:d},i,{className:(0,l.Z)("tabs__item",u.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function p(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function m(e){const t=(0,s.Y)(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",u.tabList)},r.createElement(c,(0,n.Z)({},e,t)),r.createElement(p,(0,n.Z)({},e,t)))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},70989:(e,t,a)=>{a.d(t,{Y:()=>m});var n=a(67294),r=a(16550),l=a(91980),i=a(67392),s=a(50012);function o(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??o(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const i=(0,r.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=u(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[m,d]=p({queryString:a,groupId:r}),[b,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,s.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),k=(()=>{const e=m??b;return c({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,l]),tabValues:l}}}}]);