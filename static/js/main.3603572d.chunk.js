(this["webpackJsonpnft-exlplorer"]=this["webpackJsonpnft-exlplorer"]||[]).push([[0],{221:function(e,t,n){},222:function(e,t,n){},240:function(e,t){},288:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n(0),c=n.n(a),o=n(79),i=n.n(o),s=n(322),u=(n(221),n(312)),l=(n(222),n(3)),d=n.n(l),f=n(57),b=n(37),j=n(21),p=n(12),h=n(31),O=n(199),m=n(185),y=n.n(m),x={y:"pageYOffset",x:"pageXOffset"},w={y:"scrollTop",x:"scrollLeft"},v=function(e){return window[x[e]]||document.documentElement[w[e]]||document.body[w[e]]||0},g=function(e){var t=e.children,n=e.throttleTime,r=void 0===n?10:n,c=e.isGrid,o=void 0!==c&&c,i=e.listRef,s=Object(a.useRef)(),u=i;Object(a.useEffect)((function(){var e=y()((function(){var e=s.current||{},t=e.offsetTop,n=void 0===t?0:t,r=e.offsetLeft,a=void 0===r?0:r,c=v("y")-n,i=v("x")-a;o&&u.current&&u.current.scrollTo({scrollLeft:i,scrollTop:c}),o||u.current&&u.current.scrollTo(c)}),r);return window.addEventListener("scroll",e),function(){e.cancel(),window.removeEventListener("scroll",e)}}),[o,u,r]);var l=Object(a.useCallback)((function(e){var t=e.scrollLeft,n=e.scrollTop,r=e.scrollOffset;if(e.scrollUpdateWasRequested){var a=v("y"),c=v("x"),i=s.current||{},u=i.offsetTop,l=void 0===u?0:u,d=i.offsetLeft,f=void 0===d?0:d;r+=Math.min(a,l),n+=Math.min(a,l),t+=Math.min(c,f),o||r===a||window.scrollTo(0,r),!o||n===a&&t===c||window.scrollTo(t,n)}}),[o]);return t({ref:u,outerRef:s,style:{width:o?"auto":"100%",height:"100%",display:"inline-block"},onScroll:l})},C=n(310),A=n(309),E=n(311),S=n(313),I=n(325),k=n(326),T=n(186),R=n.n(T),B=n(89),P=[{name:"Pudgy Penguins",address:"0xBd3531dA5CF5857e7CfAA92426877b022e612cf8"},{name:"Cool Cats",address:"0x1A92f7381B9F03921564a437210bB9396471050C"},{name:"Boonji Project",address:"0x4cd0ea8b1bDb5ab9249d96cCF3d8A0d3aDa2Bc76"},{name:"Lazy Lions",address:"0x8943C7bAC1914C9A7ABa750Bf2B6B09Fd21037E0",options:{cors:!0}},{name:"World Of Women",address:"0xe785E82358879F061BC3dcAC6f0444462D4b5330",options:{cors:!0}},{name:"Creature World",address:"0xc92cedDfb8dd984A89fb494c376f9A48b999aAFc",options:{cors:!0}},{name:"DeadFellaz",address:"0x2acAb3DEa77832C09420663b0E1cB386031bA17B",options:{cors:!0}},{name:"Stoner Cats",address:"0xD4d871419714B778eBec2E22C7c53572b573706e",options:{cors:!0}},{name:"Desperate ApeWives",address:"0xF1268733C6FB05EF6bE9cF23d24436Dcd6E0B35E",options:{cors:!0}},{name:"Bored Ape Yacht Club",address:"0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",options:{cors:!0}},{name:"CryptoMories",address:"0x1a2F71468F656E97c2F86541E57189F59951efe7",options:{cors:!0}},{name:"Outlaw Gals",address:"0x62EFd38a5efd7cfDB1c6E1c50F3083Af636D1b40",options:{cors:!0}},{name:"MutantCats",address:"0xaAdBA140Ae5e4c8a9eF0Cc86EA3124b446e3E46A",options:{cors:!0}}],M={dataByContract:{},lastUsedByContract:{},missingUriByContract:{},activeContractAddress:Object.values(P)[Math.floor(Math.random()*Object.values(P).length)].address},_=Object(B.b)({name:"contracts",initialState:M,reducers:{init:function(e,t){if(!e.dataByContract[t.payload.contractAddress]){for(var n={},r=[],a=t.payload.initialValue;a<t.payload.totalSupply+t.payload.initialValue;a++)n[a]={},r.push(a);e.dataByContract[t.payload.contractAddress]=n,e.lastUsedByContract[t.payload.contractAddress]=Date.now(),e.missingUriByContract[t.payload.contractAddress]=r}},setMetadataURI:function(e,t){t.payload.tokens.forEach((function(n){var r=n.tokenId,a=n.uri;e.dataByContract[t.payload.contractAddress][r].uri=a})),e.missingUriByContract[t.payload.contractAddress]=Object.keys(e.dataByContract[t.payload.contractAddress]).filter((function(n){return!e.dataByContract[t.payload.contractAddress][n].uri})).map((function(e){return parseInt(e)}))},setMetadataJSON:function(e,t){t.payload.tokens.forEach((function(n){var r=n.tokenId,a=n.json;e.dataByContract[t.payload.contractAddress][r].json={image:a.image,name:a.name}}))},changeActiveContractAddress:function(e,t){e.activeContractAddress=t.payload,e.lastUsedByContract[t.payload]=Date.now()}}}),L=_.actions,U=L.setMetadataURI,N=L.setMetadataJSON,D=L.changeActiveContractAddress,F=L.init,W=_.reducer,z={corsProxyUrl:"https://e6bp05g0dh.execute-api.us-east-1.amazonaws.com/dev?url=",ipfsGateway:"infura-ipfs.io",itemSize:200},H=Object(B.b)({name:"options",initialState:z,reducers:{setCorsProxyUrl:function(e,t){e.corsProxyUrl=t.payload},setIpfsGateway:function(e,t){e.ipfsGateway=t.payload},setItemSize:function(e,t){e.itemSize=t.payload}}}),G=H.actions,J=G.setCorsProxyUrl,Y=G.setIpfsGateway,V=G.setItemSize,K=H.reducer,q=n(80),X=n(324),Q=n(87),Z=new q.a.utils.Interface(Q.abi),$=function(e){var t,n=null!==(t=Object(X.a)({abi:Z,address:e,method:"totalSupply",args:[]}))&&void 0!==t?t:[];return Object(p.a)(n,1)[0]},ee=new q.a.utils.Interface(Q.abi),te=function(e,t){var n;return null!==(n=Object(X.b)(t.map((function(t){return{abi:ee,address:e,method:"tokenURI",args:[t]}}))))&&void 0!==n?n:null},ne=new q.a.utils.Interface(Q.abi),re=function(e,t){var n;return null!==(n=Object(X.b)(t.map((function(t){return{abi:ne,address:e,method:"tokenByIndex",args:[t]}}))))&&void 0!==n?n:null},ae=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current=e})),t.current},ce=function(){var e=Object(a.useState)(0),t=Object(p.a)(e,2)[1];return function(){return t((function(e){return e+1}))}},oe=Object({NODE_ENV:"production",PUBLIC_URL:"/nft-explorer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ALCHEMY_API:"https://eth-mainnet.alchemyapi.io/v2/tc37MtbC-e0NDrSKLkdGxypf7u3IYtww",REACT_APP_CHAIN_ID:"1",REACT_APP_ETHERSCAN_URL:"https://etherscan.io/",REACT_APP_SITE_URL:"https://github.com/ivanm/nft-explorer/"}),ie=oe.REACT_APP_ALCHEMY_API,se=oe.REACT_APP_CHAIN_ID,ue=oe.REACT_APP_ETHERSCAN_URL,le=oe.REACT_APP_SITE_URL,de="".concat(ie),fe=se?parseInt(se):0,be=("".concat(ue),"".concat(le),n(320)),je=n(11),pe=function(e){var t=e.tokenId,n=e.imgUrl,r=e.onClose;Object(a.useEffect)((function(){return b(),window.addEventListener("resize",(function(){b()})),function(){window.removeEventListener("resize",b)}}),[]);var c=Object(a.useState)({width:window.innerWidth,height:window.innerHeight}),o=Object(p.a)(c,2),i=o[0],s=o[1],u=Object(a.useState)("width"),l=Object(p.a)(u,2),d=l[0],f=l[1],b=function(){window.innerWidth>window.innerHeight?f("height"):f("width"),s({height:window.innerHeight,width:window.innerWidth})};return Object(je.jsxs)(be.a,{isOpen:null!==t,onClose:r,closeOnOverlayClick:!0,motionPreset:"none",size:"full",children:[Object(je.jsx)(be.d,{}),Object(je.jsx)(be.c,{margin:"0",bg:"rgba(0,0,0,0.5)",children:Object(je.jsx)(be.b,{display:"flex",justifyContent:"center",onClick:function(e){var t=e.target;(t.classList.contains("chakra-modal__body")||t.classList.contains("image-container"))&&r()},children:Object(je.jsx)(A.a,{height:"",justify:"center",align:"center",className:"image-container",children:Object(je.jsx)(I.a,{maxWidth:"none",height:"height"===d?"calc(".concat(i.height,"px - 50px)"):"auto",width:"width"===d?"calc(100vw - 50px)":"auto",objectFit:"cover",src:n})})})})]})},he=n(192),Oe=n.n(he),me=function(e,t){var n=e.slice(7);switch(t){case"cloudflare-ipfs.com":case"gateway.pinata.cloud":case"ipfs.io":case"gateway.ipfs.io":case"ravencoinipfs-gateway.com":return"https://".concat(t,"/ipfs/").concat(n);case"dweb.link":case"infura-ipfs.io":var r=n.split("/"),a=new Oe.a(r[0]).toV1().toString("base32");return"https://".concat(a,".ipfs.").concat(t).concat(r[1]?"/".concat(r[1]):"")}return e},ye=function(e,t){return new Promise((function(n,r){var a;return a=setTimeout(n,e),null===t||void 0===t||t.addEventListener("abort",(function(){clearTimeout(a)})),a}))},xe=function(e){var t=e.listRef,n=ce(),c=Object(C.a)().chainId,o=Object(h.b)(),i=Object(h.c)((function(e){return e.contracts.dataByContract})),s=Object(h.c)((function(e){return e.contracts.activeContractAddress})),l=Object(h.c)((function(e){return e.contracts.missingUriByContract})),m=Object(h.c)((function(e){return e.options.corsProxyUrl})),y=Object(h.c)((function(e){return e.options.ipfsGateway})),x=Object(h.c)((function(e){return e.options.itemSize})),w=.9*window.innerWidth,v=c!==fe,T=l[s]&&0===l[s].length,B=Object(a.useState)(null),P=Object(p.a)(B,2),M=P[0],_=P[1],L=Object(a.useState)({width:window.innerWidth,height:window.innerHeight}),D=Object(p.a)(L,2)[1],W=Object(a.useState)([]),z=Object(p.a)(W,2),H=z[0],G=z[1],J=Object(a.useRef)({}),Y=Object(a.useRef)({}),K=Object(a.useRef)({}),q=$(s),X=re(s,[0]),Q=Object(p.a)(X,1)[0],Z=te(s,H),ee=Object(a.useCallback)((function(){window.innerWidth<500?o(V(100)):o(V(200)),D({height:window.innerHeight,width:window.innerWidth})}),[o]);Object(a.useEffect)((function(){return ee(),window.addEventListener("resize",(function(){ee()})),function(){window.removeEventListener("resize",ee)}}),[ee]);var ne=Q?Q[0]:null;Object(a.useEffect)((function(){ne&&q&&!i[s]&&o(F({totalSupply:q.toNumber(),contractAddress:s,initialValue:ne.toNumber()}))}),[o,q,i,s,ne]),Object(a.useEffect)((function(){if(q&&i[s]){var e=l[s].filter((function(e,t){return t<=500}));e.length&&JSON.stringify(e)!==JSON.stringify(H)&&G(e)}}),[G,n,s,o,q,i,l,H]);var oe=JSON.stringify(Z);Object(a.useEffect)((function(){if(q&&i[s]){var e=[],t=[];H.forEach((function(n,r){Z[r]&&!i[s][n].uri&&(e=[].concat(Object(j.a)(e),[{tokenId:n,uri:Z[r][0]}]),t=[].concat(Object(j.a)(t),[n]))})),e.length&&o(U({contractAddress:s,tokens:e}))}}),[s,oe,H,q,i,o,Z]);var ie=ae(s);Object(a.useEffect)((function(){ie!==s&&(Object.values(J.current).forEach((function(e){e&&e.controller&&e.controller.abort()})),Object.values(Y.current).forEach((function(e){e&&e.controller&&e.controller.abort()})),J.current={},Y.current={},K.current={},G([]))}),[s,ie]);var se=Object(a.useCallback)(function(){var e=Object(b.a)(d.a.mark((function e(t,a,c,o){var u,l,b,j,p;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ye(a,c);case 2:return u=null,u=new window.Image,(l=null!==o&&void 0!==o?o:i[s][t].json.image).startsWith("ipfs:")&&(l=me(l,y)),u.src=l,u.onload=function(){if(!c.aborted){K.current=Object(f.a)(Object(f.a)({},K.current),{},Object(r.a)({},t,u.src));var e=Object(f.a)({},J.current);delete e[t],J.current=e,n()}},e.next=10,ye(1e4,c);case 10:u.complete&&u.naturalWidth||(u.src="",c.aborted||(b=new AbortController,j=se(t,0,c,l),(p=Object(f.a)({},J.current))[t]={promise:j,controller:b},J.current=p));case 11:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),[s,i,n,y]),ue=Object(a.useCallback)(function(){var e=Object(b.a)(d.a.mark((function e(t,n){var a,c,u,l,b;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i[s]&&i[s][t]){e.next=2;break}return e.abrupt("return");case 2:return a=i[s][t].uri,e.prev=3,a.startsWith("ipfs:")?a=me(a,y):m&&(a=m+a),e.next=7,fetch(a,{signal:n});case 7:return c=e.sent,e.next=10,c.text();case 10:return u=e.sent,o(N({contractAddress:s,tokens:[{tokenId:t,json:JSON.parse(u)}]})),l=new AbortController,b=se(t,2e3,n,JSON.parse(u).image),J.current=Object(f.a)(Object(f.a)({},J.current),{},Object(r.a)({},t,{promise:b,controller:l})),e.abrupt("return",u);case 18:e.prev=18,e.t0=e.catch(3),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t,n){return e.apply(this,arguments)}}(),[i,s,o,m,y,se]),le=function(e){e.overscanStartIndex,e.overscanStopIndex;var t=e.visibleStartIndex,n=e.visibleStopIndex;Object.values(J.current).forEach((function(e){e&&e.controller&&e.controller.abort()})),Object.values(Y.current).forEach((function(e){e&&e.controller&&e.controller.abort()})),J.current={},Y.current={};var a=Math.floor(w/x),c=t*a,o=n*a+a;o>q.toNumber()&&(o=q.toNumber());for(var u=1,l=c;l<=o;l++){var d=parseInt(Object.keys(i[s])[l]);if(i[s][d]&&(!i[s][d].json||!i[s][d].json.image)&&!Y.current[d]){var b=new AbortController,j=b.signal,p=de(d,1e3*u,j);Y.current=Object(f.a)(Object(f.a)({},Y.current),{},Object(r.a)({},d,{promise:p,controller:b})),u+=1}if(i[s][d]&&i[s][d].json&&i[s][d].json.image&&!J.current[d]&&!K.current[d]){var h=new AbortController,O=h.signal,m=se(d,2e3,O,i[s][d].json.image);J.current=Object(f.a)(Object(f.a)({},J.current),{},Object(r.a)({},d,{promise:m,controller:h})),u+=1}}},de=function(){var e=Object(b.a)(d.a.mark((function e(t,n,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ye(n,r);case 2:ue(t,r);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),be=function(e){var t=e.index,n=e.style,r=(e.ref,Math.floor(w/x)),a=t*r,c=new Array(r).fill({}).filter((function(e,t){return a+t<q.toNumber()}));return Object(je.jsx)(A.a,{direction:"row",justify:"center",style:n,children:c.map((function(e,t){var n=parseInt(Object.keys(i[s])[a+t]);return Object(je.jsx)(E.a,{onClick:function(){K.current[n]&&_(n)},children:Object(je.jsxs)(u.a,{position:"relative",_hover:{background:"blue"},children:[Object(je.jsxs)(A.a,{height:x,width:x,bg:"gray.900",opacity:K.current[n]?0:1,position:"absolute",top:"0",_hover:{opacity:"0.9"},justify:"center",align:"center",direction:"column",children:[Object(je.jsxs)(S.a,{fontSize:{base:18,sm:25,md:40},children:["#",n.toLocaleString()]}),Object(je.jsx)(A.a,{children:Object(je.jsx)(S.a,{ml:2,fontSize:{base:7,sm:8,md:10},children:K.current[n]&&i[s][n].json&&i[s][n].json.name?i[s][n].json.name:J.current[n]||Y.current[n]?i[s][n].json?"LOADING IMAGE":"LOADING METADATA":"\xa0"})})]}),K.current[n]&&i[s][n]&&i[s][n].json&&i[s][n].json.image?Object(je.jsx)(I.a,{boxSize:x,alt:"".concat(n),title:"".concat(n),loading:"lazy",src:K.current[n]}):Object(je.jsx)(A.a,{height:x,width:x})]})},"".concat(n,"-").concat(t))}))})};return Object(je.jsx)(a.Fragment,{children:q&&T?Object(je.jsxs)(a.Fragment,{children:[null!==M?Object(je.jsx)(pe,{tokenId:M,imgUrl:K.current[M],onClose:function(){_(null)}}):null,Object(je.jsx)(A.a,{direction:"column",align:"center",children:Object(je.jsx)(A.a,{wrap:"wrap",justify:"center",children:Object(je.jsx)("div",{id:"virtualContainer",style:{width:w,height:"100%"},children:Object(je.jsx)(g,{listRef:t,children:function(e){var t=e.ref,n=e.outerRef,r=e.style,a=e.onScroll;return Object(je.jsx)(O.a,{style:r,outerRef:n,ref:t,height:window.innerHeight,itemCount:Math.ceil(q.toNumber()/Math.floor(w/x)),itemSize:x,width:window.innerWidth,onScroll:a,onItemsRendered:R()(le,1e3),children:be})}})})})})]}):Object(je.jsxs)(A.a,{p:5,mt:8,align:"center",justify:"center",direction:"column",children:[Object(je.jsx)(u.a,{color:"gray.700",children:Object(je.jsx)(k.a,{})}),Object(je.jsxs)(u.a,{mt:2,children:[Object(je.jsxs)(S.a,{textAlign:"center",children:[" ",v?"Please connect to Ethereum Network":"Loading data from the blockchain, please wait"]}),Object(je.jsx)(S.a,{textAlign:"center",children:q&&!T&&l[s]&&l[s].length<q.toNumber()?"[ ".concat(l[s].length.toLocaleString()," / ").concat(q?q.toNumber().toLocaleString():""," ]"):""})]})]})})},we=n(314),ve=n(315),ge=n(316),Ce=n(323),Ae=n(101),Ee=n(317),Se=[{name:"cloudflare-ipfs.com"},{name:"dweb.link"},{name:"infura-ipfs.io"},{name:"gateway.pinata.cloud"},{name:"ipfs.io"},{name:"gateway.ipfs.io"},{name:"ravencoinipfs-gateway.com"}],Ie=function(){var e=Object(h.c)((function(e){return e.contracts.activeContractAddress})),t=Object(h.c)((function(e){return e.options.corsProxyUrl})),n=Object(h.c)((function(e){return e.options.ipfsGateway})),r=Object(h.b)(),c=Object(a.useState)(e),o=Object(p.a)(c,2),i=o[0],s=o[1],l=Object(a.useState)(n),d=Object(p.a)(l,2),f=d[0],b=d[1],j=Object(a.useState)(n),O=Object(p.a)(j,2),m=O[0],y=O[1],x=Object(a.useState)(P.find((function(t){return t.address===e}))?P.find((function(t){return t.address===e})).address:""),w=Object(p.a)(x,2),v=w[0],g=w[1],C=Object(a.useState)(!1),S=Object(p.a)(C,2),I=S[0],k=S[1],T=Object(a.useState)(null==t?"":t),R=Object(p.a)(T,2),B=R[0],M=R[1],_=Object(a.useState)(null==t?"":t),L=Object(p.a)(_,2),U=L[0],N=L[1],F=P;return F.sort((function(e,t){return e.name.localeCompare(t.name)})),Object(je.jsx)(u.a,{id:"header",as:"header",display:"flex",flexDirection:"column",width:"100%",p:0,alignItems:"center",children:Object(je.jsx)(A.a,{borderRadius:"20px",bg:"gray.600",p:4,m:5,justify:"center",maxWidth:"827px",children:Object(je.jsxs)(A.a,{direction:"column",children:[Object(je.jsx)(we.a,{textAlign:"center",as:"h1",children:"NFT Explorer"}),Object(je.jsxs)(u.a,{pt:5,pb:5,pl:5,pr:5,children:["Enter an",Object(je.jsx)("b",{children:" Ethereum ERC721"})," Contract Address with the",Object(je.jsxs)("b",{children:[" ",Object(je.jsx)(E.a,{href:"https://eips.ethereum.org/EIPS/eip-721",children:"ERC721Enumerable"})]})," ","Extension, or select one of the available Collection presets. Data will be dynamically fetched as you scroll."]}),Object(je.jsxs)(A.a,{justify:"space-around",align:"center",height:"100%",direction:{base:"column",md:"row"},children:[Object(je.jsxs)(ve.a,{width:{base:"100%",md:"180px"},onChange:function(e){var t=e.target.value;g(t),t&&(s(t),r(D(t)))},value:v,children:[F.map((function(e){var t=e.name,n=e.address;return Object(je.jsx)("option",{value:n,children:t},n)})),Object(je.jsx)("option",{value:"",children:"Other"},"other")]}),Object(je.jsx)(ge.a,{mt:{base:2,md:0},ml:"5px",width:{base:"100%",md:"445px"},placeholder:"Address",value:i,onChange:function(e){var t=e.target.value;s(t)}}),Object(je.jsxs)(A.a,{mt:{base:2,md:0},children:[Object(je.jsx)(Ce.a,{ml:"5px",onClick:function(){r(D(i)),g(P.find((function(e){return e.address===i}))?P.find((function(e){return e.address===i})).address:"")},children:"Go"}),Object(je.jsx)(Ce.a,{ml:"5px",onClick:function(){k(!I)},children:"Options"})]})]}),I?Object(je.jsxs)(A.a,{direction:"column",m:4,p:4,borderWidth:"2px",borderRadius:"12px",children:[Object(je.jsxs)(A.a,{direction:"column",children:[Object(je.jsxs)(Ae.a,{id:"corsProxy",children:[Object(je.jsx)(Ee.a,{children:"CORS Proxy"}),Object(je.jsx)(ge.a,{ml:"5px",placeholder:"",value:B,onChange:function(e){var t=e.target.value;M(t)}})]}),Object(je.jsxs)(Ae.a,{id:"ipfsGateway",mt:3,children:[Object(je.jsx)(Ee.a,{children:"IPFS Gateway"}),Object(je.jsx)(ve.a,{value:f,onChange:function(e){var t=e.target.value;b(t)},children:Se.map((function(e){var t=e.name;return Object(je.jsx)("option",{value:t,children:t},t)}))})]})]}),Object(je.jsxs)(A.a,{mt:3,justify:"end",children:[Object(je.jsx)(Ce.a,{onClick:function(){r(J(B)),r(Y(f)),k(!1),y(f),N(B)},isDisabled:U===B&&m===f,children:"Update"}),Object(je.jsx)(Ce.a,{ml:2,isDisabled:z.corsProxyUrl===B&&z.ipfsGateway===f,onClick:function(){M(null==z.corsProxyUrl?"":z.corsProxyUrl),b(z.ipfsGateway),r(J(z.corsProxyUrl)),r(Y(z.ipfsGateway)),k(!1),y(z.ipfsGateway),N(z.corsProxyUrl)},children:"Reset"})]})]}):null]})})})},ke=function(e){var t=e.listRef,n=.9*window.innerWidth,r=Object(a.useState)({width:window.innerWidth,height:window.innerHeight}),c=Object(p.a)(r,2),o=c[0],i=c[1],s=Object(a.useCallback)((function(){i({height:window.innerHeight,width:window.innerWidth})}),[]);Object(a.useEffect)((function(){return s(),window.addEventListener("resize",(function(){s()})),function(){window.removeEventListener("resize",s)}}),[s]);var l=Object(h.c)((function(e){return e.contracts.activeContractAddress})),d=Object(h.c)((function(e){return e.contracts.dataByContract})),f=Object(h.c)((function(e){return e.contracts.missingUriByContract})),b=Object(h.c)((function(e){return e.options.itemSize})),O=$(l),m=re(l,[0]),y=Object(p.a)(m,1)[0],x=y?y[0]:null,w=Object(a.useState)({x:0,y:30}),v=Object(p.a)(w,2),g=v[0],C=v[1],S=Object(a.useState)(0),I=Object(p.a)(S,2),k=I[0],T=I[1];Object(a.useEffect)((function(){var e=function(e){var t=window.scrollY/document.body.offsetHeight*window.innerHeight;T(window.scrollY/document.body.offsetHeight);var n=window.scrollY/document.body.offsetHeight;C({x:g.x,y:t+30-30*n-30*n})};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[g]);var R=[];if(O&&x&&d[l]&&Object.values(d[l]).length){for(var B=Math.floor(O.toNumber()/9),P=[],M=1;M<9;M++)P=[].concat(Object(j.a)(P),[P.length?P[P.length-1]+B:B]);R=[x.toNumber()].concat(Object(j.a)(P),[parseInt(Object.keys(d[l])[Object.keys(d[l]).length-1])])}var _=f[l]&&0===f[l].length&&O&&x&&d[l],L=1e3,U=O?O.toNumber()*k:1;return Object(je.jsxs)(a.Fragment,{children:[Object(je.jsx)(A.a,{position:"fixed",right:"0",top:"0",width:"70px",height:o.height,direction:"column",justify:"space-between",bg:"gray.900",pb:"15px",pt:"15px",pl:"10px",children:_&&R.map((function(e,r){var a=null;return U>=e&&U<e+L?a=0===U?0:(U-e)/L:U<=e&&U>e-L&&(a=(e-U)/L),Object(je.jsx)(u.a,{textAlign:"end",mr:2,fontSize:null!=a?20-10*a:10,children:Object(je.jsx)(E.a,{onClick:function(){var r=Math.floor(n/b),a=Math.floor(e/r);t.current.scrollToItem(a,"start")},children:e.toLocaleString()})},r)}))}),Object(je.jsx)(u.a,{width:"70px",opacity:"0.1",bg:"white",height:"2px",position:"fixed",fontSize:10,right:g.x,top:g.y})]})},Te=function(){var e=Object(a.createRef)();return Object(je.jsxs)(u.a,{pr:"90px",children:[Object(je.jsx)(ke,{listRef:e}),Object(je.jsx)(Ie,{}),Object(je.jsx)(u.a,{as:"main",pt:"10px",children:Object(je.jsx)(xe,{listRef:e})})]})},Re=n(321),Be=n(319),Pe=n(318),Me=Object(Pe.a)({config:{initialColorMode:"dark",useSystemColorMode:!1}}),_e=n(154),Le=Object(B.a)({reducer:{contracts:W,options:K},middleware:[Object(_e.save)({states:["contracts","options"],namespace:"localdata"})],preloadedState:Object(_e.load)({states:["contracts","options"],namespace:"localdata"})}),Ue={readOnlyChainId:fe,readOnlyUrls:Object(r.a)({},fe,de)};i.a.render(Object(je.jsx)(c.a.StrictMode,{children:Object(je.jsx)(s.a,{theme:Me,children:Object(je.jsxs)(Re.a,{config:Ue,children:[Object(je.jsx)(Be.a,{initialColorMode:Me.config.initialColorMode}),Object(je.jsx)(h.a,{store:Le,children:Object(je.jsx)(Te,{})})]})})}),document.getElementById("root"))},87:function(e){e.exports=JSON.parse('{"contractName":"ERC721","abi":[{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true}],"metadata":"","bytecode":"","deployedBytecode":"","immutableReferences":{},"generatedSources":[],"deployedGeneratedSources":[],"sourceMap":"","deployedSourceMap":"","source":"","sourcePath":"","ast":"","legacyAST":{},"compiler":{},"networks":{},"schemaVersion":"3.3.4","updatedAt":"","networkType":"ethereum","devdoc":{},"userdoc":{}}')}},[[288,1,2]]]);
//# sourceMappingURL=main.3603572d.chunk.js.map