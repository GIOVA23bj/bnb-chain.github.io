"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[1595],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=s(a),h=r,k=c["".concat(p,".").concat(h)]||c[h]||m[h]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},19369:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>o,toc:()=>p,default:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_label:"Governance of BSC",sidebar_position:2,hide_table_of_contents:!1},i="Governance of BSC",o={unversionedId:"learn/bsc-gov",id:"learn/bsc-gov",isDocsHomePage:!1,title:"Governance of BSC",description:"Motivation",source:"@site/docs/learn/bsc-gov.md",sourceDirName:"learn",slug:"/learn/bsc-gov",permalink:"/docs/learn/bsc-gov",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/learn/bsc-gov.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Governance of BSC",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Oracle Relayer",permalink:"/docs/learn/oracle-relayer"},next:{title:"Tools",permalink:"/docs/learn/ecosystem"}},p=[{value:"Motivation",id:"motivation",children:[],level:2},{value:"Design Principles",id:"design-principles",children:[],level:2},{value:"Workflow",id:"workflow",children:[],level:2},{value:"Contract Interface",id:"contract-interface",children:[],level:2},{value:"Gov Contract",id:"gov-contract",children:[],level:2},{value:"Parameters that control the behavior of BSC",id:"parameters-that-control-the-behavior-of-bsc",children:[],level:2},{value:"Fee Table",id:"fee-table",children:[{value:"Global Parameters",id:"global-parameters",children:[],level:3}],level:2},{value:"Commands",id:"commands",children:[{value:"Query side chain proposals",id:"query-side-chain-proposals",children:[],level:3},{value:"Query side chain proposal",id:"query-side-chain-proposal",children:[],level:3},{value:"Query side chain parameters",id:"query-side-chain-parameters",children:[],level:3},{value:"Submit cross chain param change proposal.",id:"submit-cross-chain-param-change-proposal",children:[],level:3},{value:"Submit cross chain channel management proposal.",id:"submit-cross-chain-channel-management-proposal",children:[],level:3},{value:"Submit side chain module param change proposal.",id:"submit-side-chain-module-param-change-proposal",children:[],level:3},{value:"Vote for side chain proposal",id:"vote-for-side-chain-proposal",children:[],level:3},{value:"Deposit for side chain proposal",id:"deposit-for-side-chain-proposal",children:[],level:3}],level:2}],s={toc:p};function d(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"governance-of-bsc"},"Governance of BSC"),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"There are many system parameters to control the behavior of the BSC:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All these parameters of BSC system contracts should be flexible: slashing threshold, cross-chain transfer fees, relayer reward amount and so on.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"params of Staking/Slash/Oracle modules on BC"))),(0,r.kt)("p",null,"All these parameters will be determined by BSC Validator Set together through a proposal-vote process based on their staking. Such the process will be carried on BC, and the new parameter values will be picked up by corresponding system contracts via cross-chain communication if needed."),(0,r.kt)("h2",{id:"design-principles"},"Design Principles"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For BC:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Codebase reuse: Reuse most of the structure of proposal and vote, and the logic about propose and vote.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cross chain package Available at once: The cross-chain package should be available once the proposal passed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Native params change take place at breath block: The param change of Staking/Slash/Oracle modules on BC take place at breath block after the proposal passed."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For BSC:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Uniform interface. The contracts who are interested in these parameters only need to implement the same interface.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Extensible. When adding a new system contract, there is no need to modify any other contracts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Failure toleration. Validators could vote to skip false proposals and go on.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Multiplexing. Now we have only parameters gov, but in the future, there will be more governance functions."))),(0,r.kt)("h2",{id:"workflow"},"Workflow"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(66625).Z})),(0,r.kt)("h2",{id:"contract-interface"},"Contract Interface"),(0,r.kt)("p",null,"Every contract that wants to subscribe param change event, should implement the following interface: ",(0,r.kt)("strong",{parentName:"p"},"function updateParam(string key, bytes calldata value) external")),(0,r.kt)("p",null,"Some following check must be done inside the interface:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The msg sender must be the gov contract."),(0,r.kt)("li",{parentName:"ul"},"Basic check of value. (length, value range)")),(0,r.kt)("p",null,"An example implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'modifier onlyGov() {\n    require(msg.sender == GOV_CONTRACT_ADDR, "the msg sender must be the gov contract");\n    _;\n}\n\nfunction updateParam(string key, bytes calldata value) external onlyGov{\n    if (key == "relayerReward"){\n        require(value.length == 32, "the length of value is not 32 when update relayer_reward param");\n        uint256 memory paramValue = TypesToBytes.ToUint256(0, value);\n        require(paramValue >= MIN_RELAYER_REWARD, "the relayerReward is smaller than the minimum value");\n        require(paramValue <= MAX_RELAYER_REWARD, "the relayerReward is bigger than the maximal value");\n        relayerReward = paramValue\uff1b\n    }else{\n        require(false, "receive unknown param");\n    }\n}\n')),(0,r.kt)("h2",{id:"gov-contract"},"Gov Contract"),(0,r.kt)("p",null,"Implement the cross chain contract interface: ",(0,r.kt)("strong",{parentName:"p"},"handlePackage(bytes calldata msgBytes, bytes calldata proof, uint64 height, uint64 packageSequence)")),(0,r.kt)("p",null,"And do the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Basic check. Sequence check, Relayer sender check, block header sync check, merkel proof check."),(0,r.kt)("li",{parentName:"ul"},"Check the msg type according to the first byte of msgBytes, only param change msg type is supported for now. Check and parse the msg bytes."),(0,r.kt)("li",{parentName:"ul"},"Use a fixed gas to invoke the  updateParam interface of target contract. Catch any exception and emit fail event if necessary, but let the process go on."),(0,r.kt)("li",{parentName:"ul"},"Claim reward for the relayer and increase sequence.")),(0,r.kt)("h2",{id:"parameters-that-control-the-behavior-of-bsc"},"Parameters that control the behavior of BSC"),(0,r.kt)("p",null," There are many system parameters to control the behavior of the BSC:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All these parameters of BSC system contracts should be flexible: slashing threshold, cross-chain transfer fees, relayer reward amount and so on.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"params of Staking/Slash/Oracle/IBC modules on BC"))),(0,r.kt)("p",null,"All these parameters will be determined by BSC Validator Set together through a proposal-vote process based on their staking. Such processes will be carried on BC, and the new parameter values will be picked up by corresponding system contracts via cross-chain communication when needed."),(0,r.kt)("h2",{id:"fee-table"},"Fee Table"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Transaction Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Fee"),(0,r.kt)("th",{parentName:"tr",align:null},"Fee For"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submit Smart Chain Proposal"),(0,r.kt)("td",{parentName:"tr",align:null},"10 BNBs"),(0,r.kt)("td",{parentName:"tr",align:null},"Proposer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Smart Chain Proposal Deposit"),(0,r.kt)("td",{parentName:"tr",align:null},"0.00125 BNB"),(0,r.kt)("td",{parentName:"tr",align:null},"Proposer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Smart Chain Proposal Vote"),(0,r.kt)("td",{parentName:"tr",align:null},"1 BNB"),(0,r.kt)("td",{parentName:"tr",align:null},"Proposer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Relayer reward"),(0,r.kt)("td",{parentName:"tr",align:null},"0.001 BNB"),(0,r.kt)("td",{parentName:"tr",align:null},"system reward pool")))),(0,r.kt)("h3",{id:"global-parameters"},"Global Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min-deposit"),": The threshold for submitting a proposal is ",(0,r.kt)("strong",{parentName:"li"},"2000BNB"),".")),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("h3",{id:"query-side-chain-proposals"},"Query side chain proposals"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--chan-id"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"the chain id of binance  chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"chapel"),(0,r.kt)("td",{parentName:"tr",align:null},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--status"),(0,r.kt)("td",{parentName:"tr",align:null},"passed"),(0,r.kt)("td",{parentName:"tr",align:null},"filter proposals by proposal status, status: deposit_period/voting_period/passed/rejected"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--voter"),(0,r.kt)("td",{parentName:"tr",align:null},"bnb1h9ymecpakr8p8lhchtah2xxx7x4xq099umclqu"),(0,r.kt)("td",{parentName:"tr",align:null},"filter by proposals voted on by voted"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\n./bnbcli gov  query-proposals --side-chain-id  bsc --trust-node --chain-id Binance-Chain-Tigris\n\n## testnet\n./tbnbcli gov  query-proposals --side-chain-id  chapel --trust-node --chain-id Binance-Chain-Ganges\n")),(0,r.kt)("h3",{id:"query-side-chain-proposal"},"Query side chain proposal"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--chan-id"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"the chain id of binance  chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"chapel"),(0,r.kt)("td",{parentName:"tr",align:null},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--proposal-id"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"proposalID of proposal being queried"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\n./bnbcli gov  query-proposal  --proposal-id  1  --side-chain-id  bsc --trust-node --chain-id Binance-Chain-Tigris\n\n## testnet\n./tbnbcli gov  query-proposal  --proposal-id  1  --side-chain-id  chapel --trust-node --chain-id Binance-Chain-Ganges\n")),(0,r.kt)("h3",{id:"query-side-chain-parameters"},"Query side chain parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"chapel"),(0,r.kt)("td",{parentName:"tr",align:null},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\n ./bnbcli params side-params --side-chain-id bsc  --trust-node\n\n## testnet\n ./tbnbcli params side-params --side-chain-id chapel  --trust-node\n")),(0,r.kt)("h3",{id:"submit-cross-chain-param-change-proposal"},"Submit cross chain param change proposal."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--chan-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the chain id of binance  chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"chapel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--deposit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"200000000000:BNB"),(0,r.kt)("td",{parentName:"tr",align:"left"},"deposit of proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--from"),(0,r.kt)("td",{parentName:"tr",align:"left"},"alice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name or address of private key with which to sign"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"felonyThreshold"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the parameter name on the side chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--target"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0x0000000000000000000000000000000000001001"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the address of the contract on side chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--title"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"test csc change"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"title of proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0x000000000000000000000000000000000000000000000000000000000000001b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the specified value of the parameter on side chain, should encoded in hex"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--voting-period"),(0,r.kt)("td",{parentName:"tr",align:"left"},"604800"),(0,r.kt)("td",{parentName:"tr",align:"left"},"voting period in seconds (default 604800)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'## mainet\n./bnbcli params  submit-bscParam-change-proposal  --key "felonyThreshold" --value "0x000000000000000000000000000000000000000000000000000000000000001b"   --target 0x0000000000000000000000000000000000001001   --deposit 200000000000:BNB     --voting-period 100   --side-chain-id  bsc  --title "test csc change"  --from alice  --trust-node   --chain-id Binance-Chain-Tigris\n\n## testnet\n./tbnbcli params  submit-bscParam-change-proposal  --key "felonyThreshold" --value "0x000000000000000000000000000000000000000000000000000000000000001b"   --target 0x0000000000000000000000000000000000001001   --deposit 200000000000:BNB     --voting-period 100   --side-chain-id  chapel  --title "test csc change"  --from alice  --trust-node   --chain-id Binance-Chain-Ganges\n')),(0,r.kt)("h3",{id:"submit-cross-chain-channel-management-proposal"},"Submit cross chain channel management proposal."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--chan-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the chain id of binance  chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"chapel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--deposit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"200000000000:BNB"),(0,r.kt)("td",{parentName:"tr",align:"left"},"deposit of proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--from"),(0,r.kt)("td",{parentName:"tr",align:"left"},"alice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name or address of private key with which to sign"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--channel-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the the channel id that want to manage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--enable"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enable the channel or not (default true)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--title"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"test csc change"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"title of proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--voting-period"),(0,r.kt)("td",{parentName:"tr",align:"left"},"604800"),(0,r.kt)("td",{parentName:"tr",align:"left"},"voting period in seconds (default 604800)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'## mainnet\n./bnbcli side-chain  submit-channel-manage-proposal  --channel-id  2 --enable=true  --deposit 200000000000:BNB     --voting-period 100   --side-chain-id  bsc  --title "test csc change"  --from alice  --trust-node   --chain-id Binance-Chain-Tigris\n\n## testnet\n./tbnbcli side-chain  submit-channel-manage-proposal  --channel-id  2 --enable=true  --deposit 200000000000:BNB     --voting-period 100   --side-chain-id  chapel  --title "test csc change"  --from alice  --trust-node   --chain-id Binance-Chain-Ganges\n')),(0,r.kt)("h3",{id:"submit-side-chain-module-param-change-proposal"},"Submit side chain module param change proposal."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--chan-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the chain id of binance  chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"chapel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--deposit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"200000000000:BNB"),(0,r.kt)("td",{parentName:"tr",align:"left"},"deposit of proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--from"),(0,r.kt)("td",{parentName:"tr",align:"left"},"alice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name or address of private key with which to sign"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--title"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"test csc change"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"title of proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--sc-param-file"),(0,r.kt)("td",{parentName:"tr",align:"left"},"param.json"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the file of Side Chain params (json format)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--voting-period"),(0,r.kt)("td",{parentName:"tr",align:"left"},"604800"),(0,r.kt)("td",{parentName:"tr",align:"left"},"voting period in seconds (default 604800)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'## mainnet\n./bnbcli params  submit-sc-change-proposal  --sc-param-file param.json  --deposit 200000000000:BNB  --voting-period 100   --side-chain-id  bsc  --title "test proposal"  --from delegator1  --trust-node  --chain-id Binance-Chain-Tigris\n\n## testnet\n./tbnbcli params  submit-sc-change-proposal  --sc-param-file param.json  --deposit 200000000000:BNB  --voting-period 100   --side-chain-id  chapel  --title "test proposal"  --from delegator1  --trust-node  --chain-id Binance-Chain-Ganges\n')),(0,r.kt)("h3",{id:"vote-for-side-chain-proposal"},"Vote for side chain proposal"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--chan-id"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"the chain id of binance  chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"chapel"),(0,r.kt)("td",{parentName:"tr",align:null},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--proposal-id"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"proposalID of proposal being queried"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--option"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"vote option {yes, no, no_with_veto, abstain}"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\n ./bnbcli gov vote --from alice   --side-chain-id  bsc    --proposal-id 1 --option Yes  --chain-id Binance-Chain-Tigris\n\n## testnet\n ./tbnbcli gov vote --from alice   --side-chain-id  chapel    --proposal-id 1 --option Yes  --chain-id Binance-Chain-Ganges\n")),(0,r.kt)("h3",{id:"deposit-for-side-chain-proposal"},"Deposit for side chain proposal"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--chan-id"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"the chain id of binance  chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"chapel"),(0,r.kt)("td",{parentName:"tr",align:null},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--proposal-id"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"proposalID of proposal being queried"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--deposit"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"amount of deposit"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\n ./bnbcli gov deposit --from alice   --side-chain-id  bsc    --proposal-id 1 --deposit 1000000000:BNB --chain-id Binance-Chain-Tigris\n\n## testnet\n ./tbnbcli gov deposit --from alice   --side-chain-id  chapel    --proposal-id 1 --deposit 1000000000:BNB --chain-id Binance-Chain-Ganges\n")))}d.isMDXComponent=!0},66625:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/gov-workflow-3ace668548c226931960bb8bed8d984f.png"}}]);