"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[7178],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=d(a),h=r,k=c["".concat(o,".").concat(h)]||c[h]||s[h]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4298:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>p,toc:()=>o,default:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={},i="Governance of BSC",p={unversionedId:"learn/bsc-gov-workflow",id:"learn/bsc-gov-workflow",isDocsHomePage:!1,title:"Governance of BSC",description:"There are many system parameters to control the behavior of the BSC:",source:"@site/docs/learn/bsc-gov-workflow.md",sourceDirName:"learn",slug:"/learn/bsc-gov-workflow",permalink:"/docs/learn/bsc-gov-workflow",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/learn/bsc-gov-workflow.md",tags:[],version:"current",frontMatter:{}},o=[{value:"Fee Table",id:"fee-table",children:[{value:"Global Parameters",id:"global-parameters",children:[],level:3}],level:2},{value:"Commands",id:"commands",children:[{value:"Query side chain proposals",id:"query-side-chain-proposals",children:[],level:3},{value:"Query side chain proposal",id:"query-side-chain-proposal",children:[],level:3},{value:"Query side chain parameters",id:"query-side-chain-parameters",children:[],level:3},{value:"Submit cross chain param change proposal.",id:"submit-cross-chain-param-change-proposal",children:[],level:3},{value:"Submit cross chain channel management proposal.",id:"submit-cross-chain-channel-management-proposal",children:[],level:3},{value:"Submit side chain module param change proposal.",id:"submit-side-chain-module-param-change-proposal",children:[],level:3},{value:"Vote for side chain proposal",id:"vote-for-side-chain-proposal",children:[],level:3},{value:"Deposit for side chain proposal",id:"deposit-for-side-chain-proposal",children:[],level:3}],level:2}],d={toc:o};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"governance-of-bsc"},"Governance of BSC"),(0,r.kt)("p",null,"There are many system parameters to control the behavior of the BSC:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All these parameters of BSC system contracts should be flexible: slashing threshold, cross-chain transfer fees, relayer reward amount and so on.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"params of Staking/Slash/Oracle/IBC modules on BC"))),(0,r.kt)("p",null,"All these parameters will be determined by BSC Validator Set together through a proposal-vote process based on their staking. Such process will be carried on BC, and the new parameter values will be picked up by corresponding system contracts via cross-chain communication when needed."),(0,r.kt)("h2",{id:"fee-table"},"Fee Table"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Transaction Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Fee"),(0,r.kt)("th",{parentName:"tr",align:null},"Fee For"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submit Smart Chain Proposal"),(0,r.kt)("td",{parentName:"tr",align:null},"10 BNBs"),(0,r.kt)("td",{parentName:"tr",align:null},"Proposer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Smart Chain Proposal Deposit"),(0,r.kt)("td",{parentName:"tr",align:null},"0.00125 BNB"),(0,r.kt)("td",{parentName:"tr",align:null},"Proposer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Smart Chain Proposal Vote"),(0,r.kt)("td",{parentName:"tr",align:null},"1 BNB"),(0,r.kt)("td",{parentName:"tr",align:null},"Proposer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Relayer reward"),(0,r.kt)("td",{parentName:"tr",align:null},"0.001 BNB"),(0,r.kt)("td",{parentName:"tr",align:null},"system reward pool")))),(0,r.kt)("h3",{id:"global-parameters"},"Global Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min-deposit"),": The threshold for submitting a proposal is ",(0,r.kt)("strong",{parentName:"li"},"2000BNB"),".")),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("h3",{id:"query-side-chain-proposals"},"Query side chain proposals"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--chan-id"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"the chain id of binance  chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"chapel"),(0,r.kt)("td",{parentName:"tr",align:null},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--status"),(0,r.kt)("td",{parentName:"tr",align:null},"passed"),(0,r.kt)("td",{parentName:"tr",align:null},"filter proposals by proposal status, status: deposit_period/voting_period/passed/rejected"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--voter"),(0,r.kt)("td",{parentName:"tr",align:null},"bnb1h9ymecpakr8p8lhchtah2xxx7x4xq099umclqu"),(0,r.kt)("td",{parentName:"tr",align:null},"filter by proposals voted on by voted"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\n./bnbcli gov  query-proposals --side-chain-id  bsc --trust-node --chain-id Binance-Chain-Tigris\n\n## testnet\n./tbnbcli gov  query-proposals --side-chain-id  chapel --trust-node --chain-id Binance-Chain-Ganges\n")),(0,r.kt)("h3",{id:"query-side-chain-proposal"},"Query side chain proposal"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--chan-id"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"the chain id of binance  chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"chapel"),(0,r.kt)("td",{parentName:"tr",align:null},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--proposal-id"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"proposalID of proposal being queried"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\n./bnbcli gov  query-proposal  --proposal-id  1  --side-chain-id  bsc --trust-node --chain-id Binance-Chain-Tigris\n\n## testnet\n./tbnbcli gov  query-proposal  --proposal-id  1  --side-chain-id  chapel --trust-node --chain-id Binance-Chain-Ganges\n")),(0,r.kt)("h3",{id:"query-side-chain-parameters"},"Query side chain parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"chapel"),(0,r.kt)("td",{parentName:"tr",align:null},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\n ./bnbcli params side-params --side-chain-id bsc  --trust-node\n\n## testnet\n ./tbnbcli params side-params --side-chain-id chapel  --trust-node\n")),(0,r.kt)("h3",{id:"submit-cross-chain-param-change-proposal"},"Submit cross chain param change proposal."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--chan-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the chain id of binance  chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"chapel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--deposit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"200000000000:BNB"),(0,r.kt)("td",{parentName:"tr",align:"left"},"deposit of proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--from"),(0,r.kt)("td",{parentName:"tr",align:"left"},"alice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name or address of private key with which to sign"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"felonyThreshold"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the parameter name on the side chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--target"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0x0000000000000000000000000000000000001001"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the address of the contract on side chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--title"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"test csc change"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"title of proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0x000000000000000000000000000000000000000000000000000000000000001b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the specified value of the parameter on side chain, should encoded in hex"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--voting-period"),(0,r.kt)("td",{parentName:"tr",align:"left"},"604800"),(0,r.kt)("td",{parentName:"tr",align:"left"},"voting period in seconds (default 604800)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'## mainet\n./bnbcli params  submit-bscParam-change-proposal  --key "felonyThreshold" --value "0x000000000000000000000000000000000000000000000000000000000000001b"   --target 0x0000000000000000000000000000000000001001   --deposit 200000000000:BNB     --voting-period 100   --side-chain-id  bsc  --title "test csc change"  --from alice  --trust-node   --chain-id Binance-Chain-Tigris\n\n## testnet\n./tbnbcli params  submit-bscParam-change-proposal  --key "felonyThreshold" --value "0x000000000000000000000000000000000000000000000000000000000000001b"   --target 0x0000000000000000000000000000000000001001   --deposit 200000000000:BNB     --voting-period 100   --side-chain-id  chapel  --title "test csc change"  --from alice  --trust-node   --chain-id Binance-Chain-Ganges\n')),(0,r.kt)("h3",{id:"submit-cross-chain-channel-management-proposal"},"Submit cross chain channel management proposal."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--chan-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the chain id of binance  chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"chapel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--deposit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"200000000000:BNB"),(0,r.kt)("td",{parentName:"tr",align:"left"},"deposit of proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--from"),(0,r.kt)("td",{parentName:"tr",align:"left"},"alice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name or address of private key with which to sign"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--channel-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the the channel id that want to manage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--enable"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enable the channel or not (default true)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--title"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"test csc change"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"title of proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--voting-period"),(0,r.kt)("td",{parentName:"tr",align:"left"},"604800"),(0,r.kt)("td",{parentName:"tr",align:"left"},"voting period in seconds (default 604800)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'## mainnet\n./bnbcli side-chain  submit-channel-manage-proposal  --channel-id  2 --enable=true  --deposit 200000000000:BNB     --voting-period 100   --side-chain-id  bsc  --title "test csc change"  --from alice  --trust-node   --chain-id Binance-Chain-Tigris\n\n## testnet\n./tbnbcli side-chain  submit-channel-manage-proposal  --channel-id  2 --enable=true  --deposit 200000000000:BNB     --voting-period 100   --side-chain-id  chapel  --title "test csc change"  --from alice  --trust-node   --chain-id Binance-Chain-Ganges\n')),(0,r.kt)("h3",{id:"submit-side-chain-module-param-change-proposal"},"Submit side chain module param change proposal."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--chan-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the chain id of binance  chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"chapel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--deposit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"200000000000:BNB"),(0,r.kt)("td",{parentName:"tr",align:"left"},"deposit of proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--from"),(0,r.kt)("td",{parentName:"tr",align:"left"},"alice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name or address of private key with which to sign"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--title"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"test csc change"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"title of proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--sc-param-file"),(0,r.kt)("td",{parentName:"tr",align:"left"},"param.json"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the file of Side Chain params (json format)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--voting-period"),(0,r.kt)("td",{parentName:"tr",align:"left"},"604800"),(0,r.kt)("td",{parentName:"tr",align:"left"},"voting period in seconds (default 604800)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'## mainnet\n./bnbcli params  submit-sc-change-proposal  --sc-param-file param.json  --deposit 200000000000:BNB  --voting-period 100   --side-chain-id  bsc  --title "test proposal"  --from delegator1  --trust-node  --chain-id Binance-Chain-Tigris\n\n## testnet\n./tbnbcli params  submit-sc-change-proposal  --sc-param-file param.json  --deposit 200000000000:BNB  --voting-period 100   --side-chain-id  chapel  --title "test proposal"  --from delegator1  --trust-node  --chain-id Binance-Chain-Ganges\n')),(0,r.kt)("h3",{id:"vote-for-side-chain-proposal"},"Vote for side chain proposal"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--chan-id"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"the chain id of binance  chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"chapel"),(0,r.kt)("td",{parentName:"tr",align:null},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--proposal-id"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"proposalID of proposal being queried"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--option"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"vote option {yes, no, no_with_veto, abstain}"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\n ./bnbcli gov vote --from alice   --side-chain-id  bsc    --proposal-id 1 --option Yes  --chain-id Binance-Chain-Tigris\n\n## testnet\n ./tbnbcli gov vote --from alice   --side-chain-id  chapel    --proposal-id 1 --option Yes  --chain-id Binance-Chain-Ganges\n")),(0,r.kt)("h3",{id:"deposit-for-side-chain-proposal"},"Deposit for side chain proposal"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--chan-id"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"the chain id of binance  chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"chapel"),(0,r.kt)("td",{parentName:"tr",align:null},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--proposal-id"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"proposalID of proposal being queried"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--deposit"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"amount of deposit"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\n ./bnbcli gov deposit --from alice   --side-chain-id  bsc    --proposal-id 1 --deposit 1000000000:BNB --chain-id Binance-Chain-Tigris\n\n## testnet\n ./tbnbcli gov deposit --from alice   --side-chain-id  chapel    --proposal-id 1 --deposit 1000000000:BNB --chain-id Binance-Chain-Ganges\n")))}m.isMDXComponent=!0}}]);