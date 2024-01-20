(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[665],{45578:(e,t,a)=>{var l=a(67206),r=a(45652);e.exports=function(e,t){return e&&e.length?r(e,l(t,2)):[]}},51794:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var l=a(67294);const r=(e,t)=>{var a,r;const[n,s]=(0,l.useState)(0),[i,o]=(0,l.useState)(!1),d=(0,l.useRef)({scrollWidth:0,parentElementWidth:0,plusRefWidth:0});return(0,l.useLayoutEffect)((()=>{var a;const l=e.current,r=null==t?void 0:t.current;if(!l)return;const{scrollWidth:n,clientWidth:i,childNodes:u}=l,c=d.current,p=(null==(a=l.parentElement)?void 0:a.clientWidth)||0,h=(null==r?void 0:r.offsetWidth)||0;if(d.current={scrollWidth:n,parentElementWidth:p,plusRefWidth:h},c.parentElementWidth!==p||c.scrollWidth!==n||c.plusRefWidth!==h)if(n>i){const e=6,t=(null==r?void 0:r.offsetWidth)||0,a=i-e,l=u.length;let n=0,d=0;for(let r=0;r<l;r+=1)a-e-n-t<=0&&(d+=1),n+=u[r].offsetWidth;l>1&&d?(o(!0),s(d)):(o(!1),s(1))}else o(!1),s(0)}),[null==(a=e.current)?void 0:a.offsetWidth,null==(r=e.current)?void 0:r.clientWidth,e]),[n,i]}},54070:(e,t,a)=>{"use strict";a.d(t,{w:()=>i}),a(67294);var l=a(58593),r=a(83379),n=a(61988),s=a(11965);const i=e=>{let{user:t,date:a}=e;const i=(0,s.tZ)("span",{className:"no-wrap"},a);if(t){const e=(0,r.Z)(t),a=(0,n.t)("Modified by: %s",e);return(0,s.tZ)(l.u,{title:a,placement:"bottom"},i)}return i}},27989:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var l=a(67294),r=a(51995),n=a(61988),s=a(35932),i=a(74069),o=a(4715),d=a(34858),u=a(60972),c=a(11965);const p=r.iK.div`
  display: block;
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
`,h=r.iK.div`
  padding-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  padding-top: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;

  & > div {
    margin: ${e=>{let{theme:t}=e;return t.gridUnit}}px 0;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .confirm-overwrite {
    margin-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  .input-container {
    display: flex;
    align-items: center;

    label {
      display: flex;
      margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    }

    i {
      margin: 0 ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${e=>{let{theme:t}=e;return 1.5*t.gridUnit}}px
      ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    border-style: none;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }

    &[name='sqlalchemy_uri'] {
      margin-right: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
    }
  }
`,m=e=>{let{resourceName:t,resourceLabel:a,passwordsNeededMessage:r,confirmOverwriteMessage:m,onModelImport:g,show:f,onHide:y,passwordFields:b=[],setPasswordFields:v=(()=>{}),sshTunnelPasswordFields:Z=[],setSSHTunnelPasswordFields:w=(()=>{}),sshTunnelPrivateKeyFields:_=[],setSSHTunnelPrivateKeyFields:S=(()=>{}),sshTunnelPrivateKeyPasswordFields:T=[],setSSHTunnelPrivateKeyPasswordFields:k=(()=>{})}=e;const[x,C]=(0,l.useState)(!0),[N,$]=(0,l.useState)({}),[E,P]=(0,l.useState)(!1),[F,H]=(0,l.useState)(!1),[M,A]=(0,l.useState)([]),[I,D]=(0,l.useState)(!1),[R,L]=(0,l.useState)(),[W,O]=(0,l.useState)({}),[U,z]=(0,l.useState)({}),[K,B]=(0,l.useState)({}),q=()=>{A([]),v([]),$({}),P(!1),H(!1),D(!1),L(""),w([]),S([]),k([]),O({}),z({}),B({})},{state:{alreadyExists:V,passwordsNeeded:j,sshPasswordNeeded:Y,sshPrivateKeyNeeded:G,sshPrivateKeyPasswordNeeded:X},importResource:J}=(0,d.PW)(t,a,(e=>{L(e)}));(0,l.useEffect)((()=>{v(j),j.length>0&&D(!1)}),[j,v]),(0,l.useEffect)((()=>{P(V.length>0),V.length>0&&D(!1)}),[V,P]),(0,l.useEffect)((()=>{w(Y),Y.length>0&&D(!1)}),[Y,w]),(0,l.useEffect)((()=>{S(G),G.length>0&&D(!1)}),[G,S]),(0,l.useEffect)((()=>{k(X),X.length>0&&D(!1)}),[X,k]);return x&&f&&C(!1),(0,c.tZ)(i.default,{name:"model",className:"import-model-modal",disablePrimaryButton:0===M.length||E&&!F||I,onHandledPrimaryAction:()=>{var e;(null==(e=M[0])?void 0:e.originFileObj)instanceof File&&(D(!0),J(M[0].originFileObj,N,W,U,K,F).then((e=>{e&&(q(),g())})))},onHide:()=>{C(!0),y(),q()},primaryButtonName:E?(0,n.t)("Overwrite"):(0,n.t)("Import"),primaryButtonType:E?"danger":"primary",width:"750px",show:f,title:(0,c.tZ)("h4",null,(0,n.t)("Import %s",a))},(0,c.tZ)(h,null,(0,c.tZ)(o.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:M,onChange:e=>{A([{...e.file,status:"done"}])},onRemove:e=>(A(M.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:I},(0,c.tZ)(s.Z,{loading:I},(0,n.t)("Select file")))),R&&(0,c.tZ)(u.Z,{errorMessage:R,showDbInstallInstructions:b.length>0||Z.length>0||_.length>0||T.length>0}),(()=>{if(0===b.length&&0===Z.length&&0===_.length&&0===T.length)return null;const e=[...new Set([...b,...Z,..._,...T])];return(0,c.tZ)(l.Fragment,null,(0,c.tZ)("h5",null,(0,n.t)("Database passwords")),(0,c.tZ)(p,null,r),e.map((e=>(0,c.tZ)(l.Fragment,null,(null==b?void 0:b.indexOf(e))>=0&&(0,c.tZ)(h,{key:`password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,n.t)("%s PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:N[e],onChange:t=>$({...N,[e]:t.target.value})})),(null==Z?void 0:Z.indexOf(e))>=0&&(0,c.tZ)(h,{key:`ssh_tunnel_password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,n.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`ssh_tunnel_password-${e}`,autoComplete:`ssh_tunnel_password-${e}`,type:"password",value:W[e],onChange:t=>O({...W,[e]:t.target.value})})),(null==_?void 0:_.indexOf(e))>=0&&(0,c.tZ)(h,{key:`ssh_tunnel_private_key-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,n.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("textarea",{name:`ssh_tunnel_private_key-${e}`,autoComplete:`ssh_tunnel_private_key-${e}`,value:U[e],onChange:t=>z({...U,[e]:t.target.value})})),(null==T?void 0:T.indexOf(e))>=0&&(0,c.tZ)(h,{key:`ssh_tunnel_private_key_password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,n.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`ssh_tunnel_private_key_password-${e}`,autoComplete:`ssh_tunnel_private_key_password-${e}`,type:"password",value:K[e],onChange:t=>B({...K,[e]:t.target.value})}))))))})(),E?(0,c.tZ)(l.Fragment,null,(0,c.tZ)(h,null,(0,c.tZ)("div",{className:"confirm-overwrite"},m),(0,c.tZ)("div",{className:"control-label"},(0,n.t)('Type "%s" to confirm',(0,n.t)("OVERWRITE"))),(0,c.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const l=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";H(l.toUpperCase()===(0,n.t)("OVERWRITE"))}}))):null)}},83556:(e,t,a)=>{"use strict";a.d(t,{P:()=>c});var l=a(67294),r=a(51995),n=a(59361),s=a(58593),i=a(11965);const o=(0,r.iK)(n.Z)`
  ${e=>{let{theme:t}=e;return`\n  margin-top: ${t.gridUnit}px;\n  margin-bottom: ${t.gridUnit}px;\n  font-size: ${t.typography.sizes.s}px;\n  `}};
`,d=e=>{let{name:t,id:a,index:r,onDelete:n,editable:d=!1,onClick:u,toolTipTitle:c=t}=e;const p=(0,l.useMemo)((()=>t.length>20),[t])?`${t.slice(0,20)}...`:t;return(0,i.tZ)(l.Fragment,null,d?(0,i.tZ)(s.u,{title:c,key:c},(0,i.tZ)(o,{key:a,closable:d,onClose:()=>r?null==n?void 0:n(r):null,color:"blue"},p)):(0,i.tZ)(s.u,{title:c,key:c},(0,i.tZ)(o,{role:"link",key:a,onClick:u},a?(0,i.tZ)("a",{href:`/superset/all_entities/?id=${a}`,target:"_blank",rel:"noreferrer"},p):p)))},u=r.iK.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,c=e=>{let{tags:t,editable:a=!1,onDelete:r,maxTags:n}=e;const[s,o]=(0,l.useState)(n),c=e=>{null==r||r(e)},p=(0,l.useMemo)((()=>s?t.length>s:null),[t.length,s]),h=(0,l.useMemo)((()=>"number"==typeof s?t.length-s+1:null),[p,t.length,s]);return(0,i.tZ)(u,{className:"tag-list"},p&&"number"==typeof s?(0,i.tZ)(l.Fragment,null,t.slice(0,s-1).map(((e,t)=>(0,i.tZ)(d,{id:e.id,key:e.id,name:e.name,index:t,onDelete:c,editable:a}))),t.length>s?(0,i.tZ)(d,{name:`+${h}...`,onClick:()=>o(void 0),toolTipTitle:t.map((e=>e.name)).join(", ")}):null):(0,i.tZ)(l.Fragment,null,t.map(((e,t)=>(0,i.tZ)(d,{id:e.id,key:e.id,name:e.name,index:t,onDelete:c,editable:a}))),n&&t.length>n?(0,i.tZ)(d,{name:"...",onClick:()=>o(n)}):null))}},33320:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ee});var l=a(45578),r=a.n(l),n=a(51995),s=a(61988),i=a(11064),o=a(31069),d=a(93185),u=a(55786),c=a(67294),p=a(15926),h=a.n(p),m=a(28216),g=a(40768),f=a(34858),y=a(32228),b=a(19259),v=a(83556),Z=a(86074),w=a(36674),_=a(16550),S=a(73727),T=a(93139),k=a(51794),x=a(58593),C=a(11965);const N=n.iK.div`
  .link {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
    display: block;
    text-decoration: underline;
  }
`;function $(e){let{children:t,crossLinks:a=[],moreItems:l,show:r=!1}=e;return(0,C.tZ)(x.u,{placement:"top",title:r&&(0,C.tZ)(N,null,a.map((e=>(0,C.tZ)(S.rU,{className:"link",key:e.to,to:e.to,target:"_blank",rel:"noreferer noopener"},e.title))),l&&(0,C.tZ)("span",null,(0,s.t)("+ %s more",l)))},t)}const E=n.iK.div`
  ${e=>{let{theme:t}=e;return`\n    & > span {\n      width: 100%;\n      display: flex;\n\n      .ant-tooltip-open {\n        display: inline;\n      }\n\n      .truncated {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        display: inline-block;\n        width: 100%;\n        vertical-align: bottom;\n      }\n\n      .count {\n        cursor: pointer;\n        color: ${t.colors.grayscale.base};\n        font-weight: ${t.typography.weights.bold};\n      }\n    }\n  `}}
`;function P(e){let{crossLinks:t,maxLinks:a=20,linkPrefix:l="/superset/dashboard/"}=e;const r=(0,c.useRef)(null),n=(0,c.useRef)(null),[s,i]=(0,k.Z)(r,n),o=(0,c.useMemo)((()=>t.length>a?t.length-a:void 0),[t,a]),d=(0,c.useMemo)((()=>(0,C.tZ)("span",{className:"truncated",ref:r},t.map(((e,t)=>(0,C.tZ)(S.rU,{key:e.id,to:l+e.id,target:"_blank",rel:"noreferer noopener"},0===t?e.title:`, ${e.title}`))))),[t]),u=(0,c.useMemo)((()=>t.slice(0,a).map((e=>({title:e.title,to:l+e.id})))),[t,a]);return(0,C.tZ)(E,null,(0,C.tZ)($,{moreItems:o,crossLinks:u,show:!!s},d,i&&(0,C.tZ)("span",{ref:n,className:"count"},"+",s)))}var F=a(38703),H=a(61337),M=a(14114),A=a(83673),I=a(27989),D=a(70707),R=a(1510),L=a(8272),W=a(79789),O=a(85931),U=a(60718),z=a(34581),K=a(8494),B=a(12617),q=a(54070),V=a(12);const j=n.iK.div`
  align-items: center;
  display: flex;

  a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.2;
  }

  svg {
    margin-right: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,Y=(0,s.t)('The passwords for the databases below are needed in order to import them together with the charts. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),G=(0,s.t)("You are importing one or more charts that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),X=(0,i.Z)(),J=async function(e,t,a){var l;void 0===e&&(e="");const n=e?{filters:[{col:"table_name",opr:"sw",value:e}]}:{},s=h().encode({columns:["datasource_name","datasource_id"],keys:["none"],order_column:"table_name",order_direction:"asc",page:t,page_size:a,...n}),{json:i={}}=await o.Z.get({endpoint:`/api/v1/dataset/?q=${s}`}),d=null==i||null==(l=i.result)?void 0:l.map((e=>{let{table_name:t,id:a}=e;return{label:t,value:a}}));return{data:r()(d,"value"),totalCount:null==i?void 0:i.count}},Q=n.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`,ee=(0,M.ZP)((function(e){const{addDangerToast:t,addSuccessToast:a,user:{userId:l}}=e,n=(0,_.k6)(),{state:{loading:i,resourceCount:p,resourceCollection:k,bulkSelectEnabled:N},setResourceCollection:$,hasPerm:E,fetchData:M,toggleBulkSelect:ee,refreshData:te}=(0,f.Yi)("chart",(0,s.t)("chart"),t),ae=(0,c.useMemo)((()=>k.map((e=>e.id))),[k]),{roles:le}=(0,m.v9)((e=>e.user)),re=(0,B.R)("can_read","Tag",le),[ne,se]=(0,f.NE)("chart",ae,t),{sliceCurrentlyEditing:ie,handleChartUpdated:oe,openChartEditModal:de,closeChartEditModal:ue}=(0,f.fF)($,k),[ce,pe]=(0,c.useState)(!1),[he,me]=(0,c.useState)([]),[ge,fe]=(0,c.useState)(!1),[ye,be]=(0,c.useState)([]),[ve,Ze]=(0,c.useState)([]),[we,_e]=(0,c.useState)([]),Se=(0,H.OH)(null==l?void 0:l.toString(),null),Te=E("can_write"),ke=E("can_write"),xe=E("can_write"),Ce=E("can_export")&&(0,d.cr)(d.TT.VERSIONED_EXPORT),Ne=[{id:"changed_on_delta_humanized",desc:!0}],$e=e=>{const t=e.map((e=>{let{id:t}=e;return t}));(0,y.Z)("chart",t,(()=>{fe(!1)})),fe(!0)},Ee=async function(e,a,l){var n,i,d;void 0===e&&(e="");const u=e?{filters:[{col:"dashboard_title",opr:T.p.startsWith,value:e}]}:{},c=h().encode({columns:["dashboard_title","id"],keys:["none"],order_column:"dashboard_title",order_direction:"asc",page:a,page_size:l,...u}),p=await o.Z.get({endpoint:`/api/v1/dashboard/?q=${c}`}).catch((()=>t((0,s.t)("An error occurred while fetching dashboards")))),m=null==p||null==(n=p.json)||null==(i=n.result)?void 0:i.map((e=>{let{dashboard_title:t,id:a}=e;return{label:t,value:a}}));return{data:r()(m,"value"),totalCount:null==p||null==(d=p.json)?void 0:d.count}},Pe=(0,c.useMemo)((()=>[{Cell:e=>{let{row:{original:{id:t}}}=e;return l&&(0,C.tZ)(w.Z,{itemId:t,saveFaveStar:ne,isStarred:se[t]})},Header:"",id:"id",disableSortBy:!0,size:"xs",hidden:!l},{Cell:e=>{let{row:{original:{url:t,slice_name:a,certified_by:l,certification_details:r,description:n}}}=e;return(0,C.tZ)(j,null,(0,C.tZ)(S.rU,{to:t},l&&(0,C.tZ)(c.Fragment,null,(0,C.tZ)(W.Z,{certifiedBy:l,details:r})," "),a),n&&(0,C.tZ)(L.Z,{tooltip:n}))},Header:(0,s.t)("Name"),accessor:"slice_name"},{Cell:e=>{var t;let{row:{original:{viz_type:a}}}=e;return(null==(t=X.get(a))?void 0:t.name)||a},Header:(0,s.t)("Type"),accessor:"viz_type",size:"xxl"},{Cell:e=>{let{row:{original:{datasource_name_text:t,datasource_url:a}}}=e;return(0,C.tZ)(O.m,{to:a},t)},Header:(0,s.t)("Dataset"),accessor:"datasource_id",disableSortBy:!0,size:"xl"},{Cell:e=>{let{row:{original:{dashboards:t}}}=e;return(0,C.tZ)(P,{crossLinks:(0,u.Z)(t).map((e=>({title:e.dashboard_title,id:e.id})))})},Header:(0,s.t)("Dashboards added to"),accessor:"dashboards",disableSortBy:!0,size:"xxl",hidden:!0},{Cell:e=>{let{row:{original:{tags:t=[]}}}=e;return(0,C.tZ)(v.P,{tags:t.filter((e=>!e.type||1===e.type||"TagTypes.custom"===e.type)),maxTags:3})},Header:(0,s.t)("Tags"),accessor:"tags",disableSortBy:!0,hidden:!(0,d.cr)(d.TT.TAGGING_SYSTEM)},{Cell:e=>{let{row:{original:{owners:t=[]}}}=e;return(0,C.tZ)(z.Z,{users:t})},Header:(0,s.t)("Owners"),accessor:"owners",disableSortBy:!0,size:"xl"},{Cell:e=>{let{row:{original:{changed_on_delta_humanized:t,changed_by:a}}}=e;return(0,C.tZ)(q.w,{date:t,user:a})},Header:(0,s.t)("Last modified"),accessor:"last_saved_at",size:"xl"},{Cell:e=>{let{row:{original:l}}=e;return ke||xe||Ce?(0,C.tZ)(Q,{className:"actions"},xe&&(0,C.tZ)(b.Z,{title:(0,s.t)("Please confirm"),description:(0,C.tZ)(c.Fragment,null,(0,s.t)("Are you sure you want to delete")," ",(0,C.tZ)("b",null,l.slice_name),"?"),onConfirm:()=>(0,g.Gm)(l,a,t,te)},(e=>(0,C.tZ)(x.u,{id:"delete-action-tooltip",title:(0,s.t)("Delete"),placement:"bottom"},(0,C.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,C.tZ)(D.Z.Trash,null))))),Ce&&(0,C.tZ)(x.u,{id:"export-action-tooltip",title:(0,s.t)("Export"),placement:"bottom"},(0,C.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>$e([l])},(0,C.tZ)(D.Z.Share,null))),ke&&(0,C.tZ)(x.u,{id:"edit-action-tooltip",title:(0,s.t)("Edit"),placement:"bottom"},(0,C.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>de(l)},(0,C.tZ)(D.Z.EditAlt,null)))):null},Header:(0,s.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!ke&&!xe},{accessor:V.J.changed_by,hidden:!0}]),[l,ke,xe,Ce,ne,se,te,a,t]),Fe=(0,c.useMemo)((()=>({Header:(0,s.t)("Favorite"),key:"favorite",id:"id",urlDisplay:"favorite",input:"select",operator:T.p.chartIsFav,unfilteredLabel:(0,s.t)("Any"),selects:[{label:(0,s.t)("Yes"),value:!0},{label:(0,s.t)("No"),value:!1}]})),[]),He=(0,c.useMemo)((()=>[{Header:(0,s.t)("Name"),key:"search",id:"slice_name",input:"search",operator:T.p.chartAllText},{Header:(0,s.t)("Type"),key:"viz_type",id:"viz_type",input:"select",operator:T.p.equals,unfilteredLabel:(0,s.t)("All"),selects:X.keys().filter((e=>{var t;return(0,R.X3)((null==(t=X.get(e))?void 0:t.behaviors)||[])})).map((e=>{var t;return{label:(null==(t=X.get(e))?void 0:t.name)||e,value:e}})).sort(((e,t)=>e.label&&t.label?e.label>t.label?1:e.label<t.label?-1:0:0))},{Header:(0,s.t)("Dataset"),key:"dataset",id:"datasource_id",input:"select",operator:T.p.equals,unfilteredLabel:(0,s.t)("All"),fetchSelects:J,paginate:!0},...(0,d.cr)(d.TT.TAGGING_SYSTEM)&&re?[{Header:(0,s.t)("Tag"),key:"tags",id:"tags",input:"select",operator:T.p.chartTags,unfilteredLabel:(0,s.t)("All"),fetchSelects:U.m}]:[],{Header:(0,s.t)("Owner"),key:"owner",id:"owners",input:"select",operator:T.p.relationManyMany,unfilteredLabel:(0,s.t)("All"),fetchSelects:(0,g.tm)("chart","owners",(0,g.v$)((e=>t((0,s.t)("An error occurred while fetching chart owners values: %s",e)))),e.user),paginate:!0},{Header:(0,s.t)("Dashboard"),key:"dashboards",id:"dashboards",input:"select",operator:T.p.relationManyMany,unfilteredLabel:(0,s.t)("All"),fetchSelects:Ee,paginate:!0},...l?[Fe]:[],{Header:(0,s.t)("Certified"),key:"certified",id:"id",urlDisplay:"certified",input:"select",operator:T.p.chartIsCertified,unfilteredLabel:(0,s.t)("Any"),selects:[{label:(0,s.t)("Yes"),value:!0},{label:(0,s.t)("No"),value:!1}]},{Header:(0,s.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:T.p.relationOneMany,unfilteredLabel:(0,s.t)("All"),fetchSelects:(0,g.tm)("chart","changed_by",(0,g.v$)((e=>(0,s.t)("An error occurred while fetching dataset datasource values: %s",e))),e.user),paginate:!0}]),[t,Fe,e.user]),Me=[{desc:!1,id:"slice_name",label:(0,s.t)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:(0,s.t)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:(0,s.t)("Least recently modified"),value:"least_recently_modified"}],Ae=(0,c.useCallback)((e=>(0,C.tZ)(K.Z,{chart:e,showThumbnails:Se?Se.thumbnails:(0,d.cr)(d.TT.THUMBNAILS),hasPerm:E,openChartEditModal:de,bulkSelectEnabled:N,addDangerToast:t,addSuccessToast:a,refreshData:te,userId:l,loading:i,favoriteStatus:se[e.id],saveFavoriteStatus:ne,handleBulkChartExport:$e})),[t,a,N,se,E,i]),Ie=[];return(xe||Ce)&&Ie.push({name:(0,s.t)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:ee}),Te&&(Ie.push({name:(0,C.tZ)(c.Fragment,null,(0,C.tZ)("i",{className:"fa fa-plus"})," ",(0,s.t)("Chart")),buttonStyle:"primary",onClick:()=>{n.push("/chart/add")}}),(0,d.cr)(d.TT.VERSIONED_EXPORT)&&Ie.push({name:(0,C.tZ)(x.u,{id:"import-tooltip",title:(0,s.t)("Import charts"),placement:"bottomRight"},(0,C.tZ)(D.Z.Import,null)),buttonStyle:"link",onClick:()=>{pe(!0)}})),(0,C.tZ)(c.Fragment,null,(0,C.tZ)(Z.Z,{name:(0,s.t)("Charts"),buttons:Ie}),ie&&(0,C.tZ)(A.Z,{onHide:ue,onSave:oe,show:!0,slice:ie}),(0,C.tZ)(b.Z,{title:(0,s.t)("Please confirm"),description:(0,s.t)("Are you sure you want to delete the selected charts?"),onConfirm:function(e){o.Z.delete({endpoint:`/api/v1/chart/?q=${h().encode(e.map((e=>{let{id:t}=e;return t})))}`}).then((e=>{let{json:t={}}=e;te(),a(t.message)}),(0,g.v$)((e=>t((0,s.t)("There was an issue deleting the selected charts: %s",e)))))}},(e=>{const l=[];return xe&&l.push({key:"delete",name:(0,s.t)("Delete"),type:"danger",onSelect:e}),Ce&&l.push({key:"export",name:(0,s.t)("Export"),type:"primary",onSelect:$e}),(0,C.tZ)(T.Z,{bulkActions:l,bulkSelectEnabled:N,cardSortSelectOptions:Me,className:"chart-list-view",columns:Pe,count:p,data:k,disableBulkSelect:ee,refreshData:te,fetchData:M,filters:He,initialSort:Ne,loading:i,pageSize:25,renderCard:Ae,enableBulkTag:!0,bulkTagResourceName:"chart",addSuccessToast:a,addDangerToast:t,showThumbnails:Se?Se.thumbnails:(0,d.cr)(d.TT.THUMBNAILS),defaultViewMode:(0,d.cr)(d.TT.LISTVIEWS_DEFAULT_CARD_VIEW)?"card":"table"})})),(0,C.tZ)(I.Z,{resourceName:"chart",resourceLabel:(0,s.t)("chart"),passwordsNeededMessage:Y,confirmOverwriteMessage:G,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{pe(!1),te(),a((0,s.t)("Chart imported"))},show:ce,onHide:()=>{pe(!1)},passwordFields:he,setPasswordFields:me,sshTunnelPasswordFields:ye,setSSHTunnelPasswordFields:be,sshTunnelPrivateKeyFields:ve,setSSHTunnelPrivateKeyFields:Ze,sshTunnelPrivateKeyPasswordFields:we,setSSHTunnelPrivateKeyPasswordFields:_e}),ge&&(0,C.tZ)(F.Z,null))}))},83379:(e,t,a)=>{"use strict";function l(e){return e?`${e.first_name} ${e.last_name}`:""}a.d(t,{Z:()=>l})}}]);
//# sourceMappingURL=3083ada82f09a58f8429.chunk.js.map