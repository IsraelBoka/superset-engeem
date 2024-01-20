"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7001],{81788:(e,t,a)=>{a.d(t,{B8:()=>d,TZ:()=>o,mf:()=>l,u7:()=>r});var s=a(31069),n=a(68492);const i=(e,t,a)=>{let s=`api/v1/dashboard/${e}/filter_state`;return t&&(s=s.concat(`/${t}`)),a&&(s=s.concat(`?tab_id=${a}`)),s},o=(e,t,a,o)=>s.Z.put({endpoint:i(e,a,o),jsonPayload:{value:t}}).then((e=>e.json.message)).catch((e=>(n.Z.error(e),null))),r=(e,t,a)=>s.Z.post({endpoint:i(e,void 0,a),jsonPayload:{value:t}}).then((e=>e.json.key)).catch((e=>(n.Z.error(e),null))),d=(e,t)=>s.Z.get({endpoint:i(e,t)}).then((e=>{let{json:t}=e;return JSON.parse(t.value)})).catch((e=>(n.Z.error(e),null))),l=e=>s.Z.get({endpoint:`/api/v1/dashboard/permalink/${e}`}).then((e=>{let{json:t}=e;return t})).catch((e=>(n.Z.error(e),null)))},57001:(e,t,a)=>{a.r(t),a.d(t,{DashboardPage:()=>ie,DashboardPageIdContext:()=>ae,default:()=>oe});var s=a(67294),n=a(11965),i=a(16550),o=a(51995),r=a(78161),d=a(28062),l=a(61988),c=a(28216),u=a(14114),p=a(38703),h=a(67417),g=a(4305),m=a(50810),f=a(14505),v=a(61337),b=a(27600),y=a(23525),w=a(9467),_=a(81788),S=a(14890),E=a(45697),x=a.n(E),D=a(93185),C=a(14278),j=a(20292),$=a(81255);function I(e){return Object.values(e).reduce(((e,t)=>(t&&t.type===$.dW&&t.meta&&t.meta.chartId&&e.push(t.meta.chartId),e)),[])}var F=a(2275),O=a(3741),R=a(99543),U=a(56967);const T=[$.dW,$.xh,$.t];function Z(e){return!Object.values(e).some((e=>{let{type:t}=e;return t&&T.includes(t)}))}const k={actions:x().shape({addSliceToDashboard:x().func.isRequired,removeSliceFromDashboard:x().func.isRequired,triggerQuery:x().func.isRequired,logEvent:x().func.isRequired,clearDataMaskState:x().func.isRequired}).isRequired,dashboardInfo:F.$X.isRequired,dashboardState:F.DZ.isRequired,slices:x().objectOf(F.Rw).isRequired,activeFilters:x().object.isRequired,chartConfiguration:x().object,datasources:x().object.isRequired,ownDataCharts:x().object.isRequired,layout:x().object.isRequired,impressionId:x().string.isRequired,initMessages:x().array,timeout:x().number,userId:x().string};class q extends s.PureComponent{static onBeforeUnload(e){e?window.addEventListener("beforeunload",q.unload):window.removeEventListener("beforeunload",q.unload)}static unload(){const e=(0,l.t)("You have unsaved changes.");return window.event.returnValue=e,e}constructor(e){var t,a;super(e),this.appliedFilters=null!=(t=e.activeFilters)?t:{},this.appliedOwnDataCharts=null!=(a=e.ownDataCharts)?a:{},this.onVisibilityChange=this.onVisibilityChange.bind(this)}componentDidMount(){const e=(0,j.Z)(),{dashboardState:t,layout:a}=this.props,s={is_soft_navigation:O.Yd.timeOriginOffset>0,is_edit_mode:t.editMode,mount_duration:O.Yd.getTimestamp(),is_empty:Z(a),is_published:t.isPublished,bootstrap_data_length:e.length},n=(0,U.Z)();n&&(s.target_id=n),this.props.actions.logEvent(O.Wl,s),"hidden"===document.visibilityState&&(this.visibilityEventData={start_offset:O.Yd.getTimestamp(),ts:(new Date).getTime()}),window.addEventListener("visibilitychange",this.onVisibilityChange),this.applyCharts()}componentDidUpdate(){this.applyCharts()}UNSAFE_componentWillReceiveProps(e){const t=I(this.props.layout),a=I(e.layout);this.props.dashboardInfo.id===e.dashboardInfo.id&&(t.length<a.length?a.filter((e=>-1===t.indexOf(e))).forEach((t=>{return this.props.actions.addSliceToDashboard(t,(a=e.layout,s=t,Object.values(a).find((e=>e&&e.type===$.dW&&e.meta&&e.meta.chartId===s))));var a,s})):t.length>a.length&&t.filter((e=>-1===a.indexOf(e))).forEach((e=>this.props.actions.removeSliceFromDashboard(e))))}applyCharts(){const{hasUnsavedChanges:e,editMode:t}=this.props.dashboardState,{appliedFilters:a,appliedOwnDataCharts:s}=this,{activeFilters:n,ownDataCharts:i,chartConfiguration:o}=this.props;(0,D.cr)(D.TT.DASHBOARD_CROSS_FILTERS)&&!o||(t||(0,R.JB)(s,i,{ignoreUndefined:!0})&&(0,R.JB)(a,n,{ignoreUndefined:!0})||this.applyFilters(),e?q.onBeforeUnload(!0):q.onBeforeUnload(!1))}componentWillUnmount(){window.removeEventListener("visibilitychange",this.onVisibilityChange),this.props.actions.clearDataMaskState()}onVisibilityChange(){if("hidden"===document.visibilityState)this.visibilityEventData={start_offset:O.Yd.getTimestamp(),ts:(new Date).getTime()};else if("visible"===document.visibilityState){const e=this.visibilityEventData.start_offset;this.props.actions.logEvent(O.Ev,{...this.visibilityEventData,duration:O.Yd.getTimestamp()-e})}}applyFilters(){const{appliedFilters:e}=this,{activeFilters:t,ownDataCharts:a}=this.props,s=Object.keys(t),n=Object.keys(e),i=new Set(s.concat(n)),o=((e,t)=>{const a=Object.keys(e),s=Object.keys(t),n=(i=a,o=s,[...i.filter((e=>!o.includes(e))),...o.filter((e=>!i.includes(e)))]).filter((a=>e[a]||t[a]));var i,o;return new Set([...a,...s]).forEach((a=>{(0,R.JB)(e[a],t[a])||n.push(a)})),[...new Set(n)]})(a,this.appliedOwnDataCharts);[...i].forEach((a=>{if(!s.includes(a)&&n.includes(a))o.push(...e[a].scope);else if(n.includes(a)){if((0,R.JB)(e[a].values,t[a].values,{ignoreUndefined:!0})||o.push(...t[a].scope),!(0,R.JB)(e[a].scope,t[a].scope)){const s=(t[a].scope||[]).concat(e[a].scope||[]);o.push(...s)}}else o.push(...t[a].scope)})),this.refreshCharts([...new Set(o)]),this.appliedFilters=t,this.appliedOwnDataCharts=a}refreshCharts(e){e.forEach((e=>{this.props.actions.triggerQuery(!0,e)}))}render(){return this.context.loading?(0,n.tZ)(p.Z,null):this.props.children}}q.contextType=C.Zn,q.propTypes=k,q.defaultProps={initMessages:[],timeout:60,userId:""};const M=q;var L=a(52256),P=a(97381),B=a(43399),J=a(87915),Y=a(74599);const N=(0,c.$j)((function(e){var t,a,s,n,i;const{datasources:o,sliceEntities:r,dataMask:d,dashboardInfo:l,dashboardState:c,dashboardLayout:u,impressionId:p,nativeFilters:h}=e;return{initMessages:null==(t=l.common)?void 0:t.flash_messages,timeout:null==(a=l.common)||null==(s=a.conf)?void 0:s.SUPERSET_WEBSERVER_TIMEOUT,userId:l.userId,dashboardInfo:l,dashboardState:c,datasources:o,activeFilters:{...(0,B.De)(),...(0,J.g)({chartConfiguration:null==(n=l.metadata)?void 0:n.chart_configuration,nativeFilters:h.filters,dataMask:d,allSliceIds:c.sliceIds})},chartConfiguration:null==(i=l.metadata)?void 0:i.chart_configuration,ownDataCharts:(0,J.U)(d,"ownState"),slices:r.slices,layout:u.present,impressionId:p}}),(function(e){return{actions:(0,S.DE)({setDatasources:m.Fy,clearDataMaskState:Y.sh,addSliceToDashboard:w.Pi,removeSliceFromDashboard:w.rL,triggerQuery:L.triggerQuery,logEvent:P.logEvent},e)}}))(M);var V=a(14670),Q=a.n(V);const z=e=>n.iv`
  body {
    h1 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.xxl}px;
      letter-spacing: -0.2px;
      margin-top: ${3*e.gridUnit}px;
      margin-bottom: ${3*e.gridUnit}px;
    }

    h2 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.xl}px;
      margin-top: ${3*e.gridUnit}px;
      margin-bottom: ${2*e.gridUnit}px;
    }

    h3,
    h4,
    h5,
    h6 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.l}px;
      letter-spacing: 0.2px;
      margin-top: ${2*e.gridUnit}px;
      margin-bottom: ${e.gridUnit}px;
    }
  }
`,W=e=>n.iv`
  .filter-card-popover {
    width: 240px;
    padding: 0;
    border-radius: 4px;

    &.ant-popover-placement-bottom {
      padding-top: ${e.gridUnit}px;
    }

    &.ant-popover-placement-left {
      padding-right: ${3*e.gridUnit}px;
    }

    .ant-popover-inner {
      box-shadow: 0 0 8px rgb(0 0 0 / 10%);
    }

    .ant-popover-inner-content {
      padding: ${4*e.gridUnit}px;
    }

    .ant-popover-arrow {
      display: none;
    }
  }

  .filter-card-tooltip {
    &.ant-tooltip-placement-bottom {
      padding-top: 0;
      & .ant-tooltip-arrow {
        top: -13px;
      }
    }
  }
`,A=e=>n.iv`
  .ant-dropdown-menu.chart-context-menu {
    min-width: ${43*e.gridUnit}px;
  }
  .ant-dropdown-menu-submenu.chart-context-submenu {
    max-width: ${60*e.gridUnit}px;
    min-width: ${40*e.gridUnit}px;
  }
`;var K=a(78718),X=a.n(K);const H={},G=()=>{const e=(0,v.rV)(v.dR.dashboard__explore_context,{});return Object.fromEntries(Object.entries(e).filter((e=>{let[,t]=e;return!t.isRedundant})))},ee=(e,t)=>{const a=G();(0,v.LS)(v.dR.dashboard__explore_context,{...a,[e]:t})},te=e=>{let{dashboardPageId:t}=e;const a=(0,c.v9)((e=>{var a,s,n;let{dashboardInfo:i,dashboardState:o,nativeFilters:r,dataMask:d}=e;return{labelColors:(null==(a=i.metadata)?void 0:a.label_colors)||H,sharedLabelColors:(null==(s=i.metadata)?void 0:s.shared_label_colors)||H,colorScheme:null==o?void 0:o.colorScheme,chartConfiguration:(null==(n=i.metadata)?void 0:n.chart_configuration)||H,nativeFilters:Object.entries(r.filters).reduce(((e,t)=>{let[a,s]=t;return{...e,[a]:X()(s,["chartsInScope"])}}),{}),dataMask:d,dashboardId:i.id,filterBoxFilters:(0,B.De)(),dashboardPageId:t}}),c.wU);return(0,s.useEffect)((()=>(ee(t,a),()=>{ee(t,{...a,isRedundant:!0})})),[a,t]),null},ae=s.createContext(""),se=s.lazy((()=>Promise.all([a.e(1216),a.e(9612),a.e(876),a.e(981),a.e(9258),a.e(5640),a.e(3197),a.e(95),a.e(868),a.e(1880),a.e(8149),a.e(4717),a.e(452)]).then(a.bind(a,45297)))),ne=document.title,ie=e=>{let{idOrSlug:t}=e;const a=(0,o.Fg)(),S=(0,c.I0)(),E=(0,i.k6)(),x=(0,s.useMemo)((()=>Q().generate()),[]),D=(0,c.v9)((e=>{let{dashboardInfo:t}=e;return t&&Object.keys(t).length>0})),{addDangerToast:C}=(0,u.e1)(),{result:j,error:$}=(0,h.QU)(t),{result:I,error:F}=(0,h.Es)(t),{result:O,error:R,status:U}=(0,h.JL)(t),T=(0,s.useRef)(!1),Z=$||F,k=Boolean(j&&I),{dashboard_title:q,css:M,metadata:L,id:P=0}=j||{};if((0,s.useEffect)((()=>{const e=()=>{const e=G();(0,v.LS)(v.dR.dashboard__explore_context,{...e,[x]:{...e[x],isRedundant:!0}})};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[x]),(0,s.useEffect)((()=>{S((0,w.sL)(U))}),[S,U]),(0,s.useEffect)((()=>{P&&async function(){const e=(0,y.eY)(b.KD.permalinkKey),t=(0,y.eY)(b.KD.nativeFiltersKey),a=(0,y.eY)(b.KD.nativeFilters);let s,n=t||{};if(e){const t=await(0,_.mf)(e);t&&({dataMask:n,activeTabs:s}=t.state)}else t&&(n=await(0,_.B8)(P,t));a&&(n=a),k&&(T.current||(T.current=!0),S((0,g.Y)({history:E,dashboard:j,charts:I,activeTabs:s,dataMask:n})))}()}),[k]),(0,s.useEffect)((()=>(q&&(document.title=q),()=>{document.title=ne})),[q]),(0,s.useEffect)((()=>"string"==typeof M?(0,f.Z)(M):()=>{}),[M]),(0,s.useEffect)((()=>{const e=(0,r.ZP)();return e.source=r.Ag.dashboard,()=>{d.getNamespace(null==L?void 0:L.color_namespace).resetColors(),e.clear()}}),[null==L?void 0:L.color_namespace]),(0,s.useEffect)((()=>{R?C((0,l.t)("Error loading chart datasources. Filters may not work correctly.")):S((0,m.Fy)(O))}),[C,O,R,S]),Z)throw Z;return k&&D?(0,n.tZ)(s.Fragment,null,(0,n.tZ)(n.xB,{styles:[W(a),z(a),A(a),"",""]}),(0,n.tZ)(te,{dashboardPageId:x}),(0,n.tZ)(ae.Provider,{value:x},(0,n.tZ)(N,null,(0,n.tZ)(se,null)))):(0,n.tZ)(p.Z,null)},oe=ie},87915:(e,t,a)=>{a.d(t,{U:()=>s,g:()=>n});const s=(e,t)=>Object.values(e).filter((e=>e[t])).reduce(((e,a)=>({...e,[a.id]:t?a[t]:a})),{}),n=e=>{let{chartConfiguration:t,nativeFilters:a,dataMask:s,allSliceIds:n}=e;const i={};return Object.values(s).forEach((e=>{var s,o,r,d,l,c;let{id:u,extraFormData:p}=e;const h=null!=(s=null!=(o=null!=(r=null==a||null==(d=a[u])?void 0:d.chartsInScope)?r:null==t||null==(l=t[u])||null==(c=l.crossFilters)?void 0:c.chartsInScope)?o:n)?s:[];i[u]={scope:h,values:p}})),i}},14505:(e,t,a)=>{function s(e){const t="CssEditor-css",a=document.head||document.getElementsByTagName("head")[0],s=document.querySelector(`.${t}`)||function(e){const t=document.createElement("style");return t.className=e,t.type="text/css",t}(t);return"styleSheet"in s?s.styleSheet.cssText=e:s.innerHTML=e,a.appendChild(s),function(){s.remove()}}a.d(t,{Z:()=>s})},67417:(e,t,a)=>{a.d(t,{schemaEndpoints:()=>h.Kt,CN:()=>s.CN,tableEndpoints:()=>p.QD,hb:()=>d,QU:()=>l,Es:()=>c,JL:()=>u,L8:()=>m,Xx:()=>h.Xx,SJ:()=>p.SJ,uY:()=>p.uY,zA:()=>p.zA});var s=a(45673),n=a(42190),i=a(15926);function o(e){let{owners:t}=e;return t?t.map((e=>`${e.first_name} ${e.last_name}`)):null}const r=a.n(i)().encode({columns:["owners.first_name","owners.last_name"],keys:["none"]});function d(e){return(0,n.l6)((0,n.s_)(`/api/v1/chart/${e}?q=${r}`),o)}const l=e=>(0,n.l6)((0,n.s_)(`/api/v1/dashboard/${e}`),(e=>({...e,metadata:e.json_metadata&&JSON.parse(e.json_metadata)||{},position_data:e.position_json&&JSON.parse(e.position_json),owners:e.owners||[]}))),c=e=>(0,n.s_)(`/api/v1/dashboard/${e}/charts`),u=e=>(0,n.s_)(`/api/v1/dashboard/${e}/datasets`);var p=a(23936),h=a(69279);const g=a(10362).h.injectEndpoints({endpoints:e=>({queryValidations:e.query({providesTags:["QueryValidations"],query:e=>{let{dbId:t,schema:a,sql:s,templateParams:n}=e,i=n;try{i=JSON.parse(n||"")}catch(e){i=void 0}const o={schema:a,sql:s,...i&&{template_params:i}};return{method:"post",endpoint:`/api/v1/database/${t}/validate_sql/`,headers:{"Content-Type":"application/json"},body:JSON.stringify(o),transformResponse:e=>{let{json:t}=e;return t.result}}}})})}),{useQueryValidationsQuery:m}=g}}]);
//# sourceMappingURL=d9e9e505ebb94cbe8cb4.chunk.js.map