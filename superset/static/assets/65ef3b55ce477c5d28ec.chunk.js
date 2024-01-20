"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6579],{16579:(t,e,n)=>{n.r(e),n.d(e,{default:()=>v}),n(67294);var s=n(43323),a=n(51995),r=n(15078),l=n.n(r),i=n(45697),o=n.n(i),c=n(61988),p=n(28062),h=n(67190),u=n(45636),d=n(45511);function m(t,e,n){t.each((function(){const t=l().select(this),s=t.text().split(/\s+/);let a=[],r=0;const i=t.attr("x"),o=t.attr("y"),c=parseFloat(t.attr("dy"));let p=t.text(null).append("tspan").attr("x",i).attr("y",o).attr("dy",`${c}em`),h=!1;s.forEach((n=>{a.push(n),p.text(a.join(" ")),p.node().getComputedTextLength()>e&&(r+=1,a.pop(),p.text(a.join(" ")),a=[n],p=t.append("tspan").attr("x",i).attr("y",o).attr("dy",`${1*r+c}em`).text(n),h=!0)})),h||void 0===n||p.attr("y",n)}))}const g={data:o().arrayOf(o().array),width:o().number,height:o().number,colorScheme:o().string,linearColorScheme:o().string,numberFormat:o().string,metrics:o().arrayOf(o().oneOfType([o().string,o().object]))};function y(t){return"string"==typeof t||t instanceof String?t:t.label}function f(t,e){const n=l().select(t),{data:s,width:a,height:r,colorScheme:i,linearColorScheme:o,metrics:g,numberFormat:f,sliceId:b}=e,x=function(t){return t>500?"l":t>200&&t<=500?"m":"s"}(a),$="s"===x;n.attr("class",`superset-legacy-chart-sunburst ${x}`);const v=a,w=r,T=.085*w,N=v-5-5,k=w-10-10-T,A=Math.min(N,k)/2;let C,S,z,P,W,R,I,M=!0;const Z=p.getScale(i);let _;const j=l().layout.partition().size([2*Math.PI,A*A]).value((t=>t.m1)),E=l().svg.arc().startAngle((t=>t.x)).endAngle((t=>t.x+t.dx)).innerRadius((t=>Math.sqrt(t.y))).outerRadius((t=>Math.sqrt(t.y+t.dy))),O=(0,h.JB)(f||u.default.SI_3_DIGIT),U=(0,h.JB)(u.default.PERCENT_3_POINT);n.select("svg").remove();const D=n.append("svg:svg").attr("width",v).attr("height",w);function F(t,e){const n=[];return $?(n.push("0,0"),n.push(`${a},0`),n.push(`${a},0`),n.push(`${a},${S.height}`),n.push(`0,${S.height}`)):(n.push("0,0"),n.push(`${S.width},0`),n.push(`${S.width+S.tipTailWidth},${S.height/2}`),n.push(`${S.width},${S.height}`),n.push(`0,${S.height}`),e>0&&n.push(`${S.tipTailWidth},${S.height/2}`)),n.join(" ")}function L(t){const e=function(t){const e=[];let n=t;for(;n.parent;)e.unshift(n),n=n.parent;return e}(t),n=e[e.length-2]||null,s=(t.m1/z).toPrecision(3),r=n?(t.m1/n.m1).toPrecision(3):null,i=U(s),o=n?U(r):"",p=function(t){return t>500?["0","20","40","60"]:t>200&&t<=500?["0","15","30","45"]:["0","10","20","30"]}(a);let h=0;const u=Math.abs(t.m1-t.m2)<1e-5;I.selectAll("*").remove(),h+=1,I.append("text").attr("class","path-abs-percent").attr("y",p[h]).text(i+" "+(0,c.t)("of total"));const d=(0,c.t)("of parent");o&&(h+=1,I.append("text").attr("class","path-cond-percent").attr("y",p[h]).text(`${o} ${d}`)),h+=1,I.append("text").attr("class","path-metrics").attr("y",p[h]).text(`${y(g[0])}: ${O(t.m1)}${u?"":`, ${y(g[1])}: ${O(t.m2)}`}`),h+=1,I.append("text").attr("class","path-ratio").attr("y",p[h]).text(u?"":`${y(g[1])}/${y(g[0])}: ${U(t.m2/t.m1)}`),R.selectAll("path").style("stroke-width",null).style("stroke",null).style("opacity",.3),R.selectAll("path").filter((t=>e.includes(t))).style("opacity",1).style("stroke","#aaa"),function(t,e){const n=$?a:S.width,s=P.selectAll("g").data(t,(t=>t.name+t.depth)),r=s.enter().append("svg:g");r.append("svg:polygon").attr("points",F).style("fill",(t=>M?Z(t.name,b):_(t.m2/t.m1))),r.append("svg:text").attr("x",(n+S.tipTailWidth)/2).attr("y",S.height/4).attr("dy","0.35em").style("fill",(t=>l().hsl(M?Z(t.name,b):_(t.m2/t.m1)).l<.5?"white":"black")).attr("class","step-label").text((t=>t.name.replace(/_/g," "))).call(m,n,S.height/2),s.attr("transform",((t,e)=>$?`translate(0, ${e*(S.height+S.spacing)})`:`translate(${e*(S.width+S.spacing)}, 0)`)),s.exit().remove(),P.select(".end-label").attr("x",(()=>$?(n+S.tipTailWidth)/2:(t.length+.5)*(S.width+S.spacing))).attr("y",(()=>$?(t.length+1)*S.height:S.height/2)).attr("dy","0.35em").text(e),P.style("visibility",null)}(e,i)}function q(){P.style("visibility","hidden"),I.selectAll("*").remove(),R.selectAll("path").on("mouseenter",null),R.selectAll("path").transition().duration(200).style("opacity",1).style("stroke",null).style("stroke-width",null).each("end",(function(){l().select(this).on("mouseenter",L)}))}var B;B=s[0],C=B.length-2+1,S={width:N/C,height:.8*T,spacing:3,tipTailWidth:10},P=D.append("svg:g").attr("class","breadcrumbs").attr("transform","translate(5,10)"),P.append("svg:text").attr("class","end-label"),function(t){const e=function(t){const e={name:"root",children:[]};return t.forEach((t=>{const n=Number(t[t.length-2]),s=Number(t[t.length-1]),a=t.slice(0,-2);if(Number.isNaN(n))return;let r=e;for(let t=0;t<a.length;t+=1){const e=r.children||[],l=a[t],i=l?l.toString():(0,c.t)("N/A");let o;t>=a.length-1||0===a[t+1]?0!==i&&(o={name:i,m1:n,m2:s},e.push(o)):(o=e.find((e=>e.name===i&&e.level===t)),o||(o={name:i,children:[],level:t},e.push(o)),r=o)}})),function t(e){if(e.children){let n,s=0,a=0;for(let r=0;r<e.children.length;r+=1)n=t(e.children[r]),s+=n[0],a+=n[1];e.m1=s,e.m2=a}return[e.m1,e.m2]}(e),e}(t);C=t[0].length-2,W=D.append("svg:g").attr("class","sunburst-vis").attr("transform",`translate(${5+N/2},${10+($?T*C:T)+k/2})`).on("mouseleave",q),R=W.append("svg:g").attr("id","arcs"),I=W.append("svg:g").attr("class","center-label"),R.append("svg:circle").attr("r",A).style("opacity",0);const n=j.nodes(e).filter((t=>t.dx>.005));if(g[0]!==g[1]&&g[1]){M=!1;const t=l().extent(n,(t=>t.m2/t.m1));_=(0,d.Z)().get(o).createLinearScale(t)}R.selectAll("path").data(n).enter().append("svg:path").attr("display",(t=>t.depth?null:"none")).attr("d",E).attr("fill-rule","evenodd").style("fill",(t=>M?Z(t.name,b):_(t.m2/t.m1))).style("opacity",1).on("mouseenter",L),z=e.value}(s)}f.displayName="Sunburst",f.propTypes=g;const b=f;var x=n(11965);const $=(0,s.Z)(b),v=(0,a.iK)((t=>{let{className:e,...n}=t;return(0,x.tZ)("div",{className:e},(0,x.tZ)($,n))}))`
  ${t=>{let{theme:e}=t;return`\n    .superset-legacy-chart-sunburst text {\n      text-rendering: optimizeLegibility;\n    }\n    .superset-legacy-chart-sunburst path {\n      stroke: ${e.colors.grayscale.light2};\n      stroke-width: 0.5px;\n    }\n    .superset-legacy-chart-sunburst .center-label {\n      text-anchor: middle;\n      fill: ${e.colors.grayscale.dark1};\n      pointer-events: none;\n    }\n    .superset-legacy-chart-sunburst .path-abs-percent {\n      font-size: ${e.typography.sizes.m}px;\n      font-weight: ${e.typography.weights.bold};\n    }\n    .superset-legacy-chart-sunburst .path-cond-percent {\n      font-size: ${e.typography.sizes.s}px;\n    }\n    .superset-legacy-chart-sunburst .path-metrics {\n      color: ${e.colors.grayscale.base};\n    }\n    .superset-legacy-chart-sunburst .path-ratio {\n      color: ${e.colors.grayscale.base};\n    }\n\n    .superset-legacy-chart-sunburst .breadcrumbs text {\n      font-weight: ${e.typography.weights.bold};\n      font-size: ${e.typography.sizes.m}px;\n      text-anchor: middle;\n      fill: ${e.colors.grayscale.dark1};\n    }\n  `}}
`},43323:(t,e,n)=>{n.d(e,{Z:()=>r});var s=n(67294),a=n(11965);function r(t,e){class n extends s.Component{constructor(t){super(t),this.container=void 0,this.setContainerRef=this.setContainerRef.bind(this)}componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,null!=e&&e.componentWillUnmount&&e.componentWillUnmount.bind(this)()}setContainerRef(t){this.container=t}execute(){this.container&&t(this.container,this.props)}render(){const{id:t,className:e}=this.props;return(0,a.tZ)("div",{ref:this.setContainerRef,id:t,className:e})}}const r=n;return t.displayName&&(r.displayName=t.displayName),t.propTypes&&(r.propTypes={...r.propTypes,...t.propTypes}),t.defaultProps&&(r.defaultProps=t.defaultProps),n}}}]);
//# sourceMappingURL=65ef3b55ce477c5d28ec.chunk.js.map