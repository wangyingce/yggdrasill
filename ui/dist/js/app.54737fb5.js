(function(t){function e(e){for(var s,o,a=e[0],l=e[1],c=e[2],d=0,f=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],s=!0,a=1;a<i.length;a++){var l=i[a];0!==n[l]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},n={app:0},r=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"097b":function(t,e,i){"use strict";i("d4b2")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t.isShow?["#/template"==t.hash?i("AddTemplate"):i("IndexPage")]:t._e()],2)},r=[],o=(i("ac1f"),i("841c"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("div",{staticClass:"tags"},[i("div",{staticStyle:{display:"flex","align-items":"center"}},t._l(t.tags,(function(e,s){return i("el-tag",{key:s,staticStyle:{"margin-left":"10px",cursor:"pointer"},attrs:{type:"info",size:"mini",effect:"dark",color:e[0].style.fill},on:{click:function(i){return t.tagClick(e)}}},[t._v(t._s(s)+"("+t._s(e.length)+")")])})),1)]),i("div",{staticClass:"left-content"},[i("div",{staticStyle:{height:"100%"}},[i("el-scrollbar",{staticStyle:{height:"100%"},attrs:{"wrap-style":"overflow-x: hidden;","view-style":"overflow-x: hidden;"}},[i("div",{staticClass:"header"},[t._v("知识图谱")]),i("div",{staticClass:"pdtop15"},[i("el-input",{attrs:{size:"mini",placeholder:"搜索",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}},[i("el-button",{attrs:{slot:"append",type:"primary",size:"mini"},on:{click:t.search},slot:"append"},[t._v("搜索")])],1)],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.dataList&&t.dataList.length>0,expression:"dataList && dataList.length > 0"}],staticClass:"pdtop15"},[i("div",{staticClass:"title1"},[t._v("查询结果：")]),i("div",{staticStyle:{height:"180px"}},[i("el-scrollbar",{staticStyle:{height:"100%"},attrs:{"wrap-style":"overflow-x: hidden;","view-style":"overflow-x: hidden;"}},t._l(t.dataList,(function(e,s){return i("div",{key:s,class:"data-list-row"+(t.activeI==s?" active":""),on:{click:function(e){return t.selectRow(s)}}},[t._v("name: "+t._s(e.name))])})),0)],1)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.tooltip,expression:"tooltip"}],staticClass:"pdtop15"},[i("div",{staticClass:"title1"},[t._v("properties：")]),t._l(t.tooltip||{},(function(e,s){return i("div",{key:s,staticStyle:{"padding-left":"8px"}},[t._v(t._s(s)+"："+t._s(e))])})),i("div",{staticClass:"pdtop15"},[i("el-button",{attrs:{size:"mini"},on:{click:t.modify}},[t._v("修改节点")])],1)],2)])],1)]),i("div",{ref:"svgDiv",class:t.svgFocus?"cfocus":"",attrs:{id:"svg"}}),t.dialogVisible?i("NodeDialog",{attrs:{title:t.title,formData:t.formData,propertiesList:t.propertiesList,disabled:!1},on:{close:t.nodeDialogClose,ok:t.nodeDialogOk}}):t._e()],1)}),a=[],l=(i("4160"),i("b64b"),i("159b"),i("99af"),i("cb29"),i("4de4"),i("c975"),i("b0c0"),i("5530")),c=i("5698"),u={config:{width:300,height:300,nodes:[],links:[],isScale:!0,scaleExtent:[.1,4],chargeStrength:400,collide:70,r:30,linkColor:"#bad4ed",markerColor:"steelblue",rectFill:"blue",textFill:"#c2c2c2",strokeWidth:2,svgClick:null},nodeData:null,id:null,simulation:null,SVG:null,defs:null,marker:null,relMap_g:null,links:null,edges:null,circles:null,texts:null,markerWidth:10,init:function(t,e){var i=this;this.id=t,this.nodeData=null,this.config=Object(l["a"])(Object(l["a"])({},this.config),e);var s=this;return this.simulation=c.forceSimulation(this.config.nodes).force("link",c.forceLink(this.config.links).id((function(t){return t.id}))).force("center",c.forceCenter(this.config.width/2+150,this.config.height/2)).force("charge",c.forceManyBody().strength(this.config.chargeStrength).distanceMax(100)).force("collide",c.forceCollide(this.config.collide).strength(.2).iterations(5)).alphaDecay(.2),this.SVG=c.select("#"+t).append("svg").attr("width",this.config.width).attr("height",this.config.height).call(c.zoom().scaleExtent(this.config.scaleExtent).on("zoom",(function(t){i.config.isScale&&s.relMap_g.attr("transform",t.transform)}))).on("click",(function(t){"circle"!=t.target.tagName&&"CIRCLE"!=t.target.tagName&&(i.nodeData=null),i.config.svgClick&&i.config.svgClick(i.nodeData)})).on("dblclick.zoom",null),this.defs=this.SVG.append("defs"),this.marker=this.defs.append("marker").attr("id","marker").attr("markerWidth",this.markerWidth).attr("markerHeight",this.markerWidth).attr("refX",this.config.r+6+this.config.strokeWidth).attr("refY",4).attr("orient","auto").attr("markerUnits","userSpaceOnUse").append("path").attr("d","M 0 0 8 4 0 8Z").attr("fill",this.config.markerColor),this.setPatterns(),this.relMap_g=this.SVG.append("g").attr("class","relMap_g").attr("width",this.config.width).attr("height",this.config.height),this.gedges=this.relMap_g.append("g").attr("class","edges"),this.setEdges(),this.setCircles(),this.simulationTick(),this},setPatterns:function(){var t=this;this.defs.selectAll("pattern.patternclass").remove();var e=this.defs.selectAll("pattern.patternclass").data(this.config.nodes),i=e.enter().append("pattern").attr("class","patternclass").attr("id",(function(e){return"avatar"+t.id+e.id})).attr("width","1").attr("height","1");i.append("rect").attr("x","0").attr("y",0).attr("width",2*this.config.r).attr("height",2*this.config.r).attr("fill",(function(e){return e.style.fill||t.config.rectFill})),i.append("text").attr("x",this.config.r).attr("y",1.14*this.config.r).attr("text-anchor","middle").attr("fill","#fff").style("font-size",this.config.r/3).text((function(t){return t.name}))},setEdges:function(){var t=this,e=this;this.gedges.selectAll("g.edge").remove();var i=this.gedges.selectAll("g.edge").data(this.config.links),s=i.enter().append("g").attr("class","edge");s.append("path").attr("class","links").attr("id",(function(t){return"path"+e.id+t.id})).attr("d",(function(t){return"M"+(e.config.r+e.markerWidth)+",0 L"+f(t.source,t.target)+",0"})).style("marker-end","url(#marker)").attr("stroke",(function(t){var i=t.color?t.color:e.config.linkColor;return i})),s.append("text").attr("class","texts").attr("y",-2).attr("fill",this.config.textFill).attr("text-anchor","end").style("cursor","pointer").style("font-size",8).text((function(t){return t.type})).on("mouseover",(function(){c.select(this).attr("fill","#ffffff").style("font-size",10)})).on("mouseout",(function(){c.select(this).attr("fill",e.config.textFill).style("font-size",8)})).on("click",(function(){t.config.textClick&&t.config.textClick()})),this.edges=this.gedges.selectAll("g.edge"),this.links=this.gedges.selectAll("path.links"),this.texts=this.gedges.selectAll("text.texts")},setCircles:function(){var t=this;this.relMap_g.selectAll("circle.circleclass").remove();var e=this.relMap_g.selectAll("circle.circleclass").data(this.config.nodes);e.enter().append("circle").attr("class",(function(t){return"circleclass i"+t.typeKey})).style("cursor","pointer").attr("fill",(function(e){return"url(#avatar"+t.id+e.id+")"})).attr("stroke",(function(t){return t.style.stroke||"#ccf1fc"})).attr("stroke-width",this.config.strokeWidth).attr("r",this.config.r).on("mouseover",(function(){c.select(this).attr("stroke-width","4"),c.select(this).attr("stroke","#a3e5f9")})).on("mouseout",(function(){c.select(this).attr("stroke-width",t.config.strokeWidth),c.select(this).attr("stroke",(function(t){return t.style.stroke||"#ccf1fc"}))})).on("click",(function(e,i){t.nodeData=i})).on("dblclick",(function(e,i){t.highlightObject(i)})).call(d(this.simulation)),this.circles=this.relMap_g.selectAll("circle.circleclass")},simulationTick:function(){var t=this,e=this.config.r+this.markerWidth;this.simulation.on("tick",(function(){t.edges.attr("transform",(function(t){return p(t.source,t.target,f(t.source,t.target))})),t.links.attr("d",(function(e){return"M"+(t.config.r+t.markerWidth)+",0 L"+f(e.source,e.target)+",0"})),t.texts.attr("x",(function(t){return t.target.x>t.source.x?f(t.source,t.target)-e:e})).attr("text-anchor",(function(t){return t.source.x>t.target.x?"start":"end"})).attr("transform",(function(t){if(t.target.x<t.source.x){var e=f(t.source,t.target)/2;return"rotate(180 "+e+" 0)"}return"rotate(0)"})),t.circles.attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y}))}))},update:function(t){var e=this;this.config=Object(l["a"])(Object(l["a"])({},this.config),t),this.simulation.nodes(this.config.nodes).force("link",c.forceLink(this.config.links).id((function(t){return t.id}))).alphaTarget(.2).restart(),setTimeout((function(){e.simulation.alphaTarget(0)}),200),this.setPatterns(),this.setEdges(),this.setCircles()},search:function(t,e){if(!t)return[];var i=[];return this.config.nodes.forEach((function(s){for(var n=0;n<e.length;n++){var r=e[n];if(s[r]&&s[r].indexOf(t)>-1)return void i.push(s)}})),i},highlighted:null,dependsNode:[],dependsLinkAndText:[],highlightObject:function(t){var e=this;if(t){var i=t.index;e.dependsNode=e.dependsNode.concat([i]),e.dependsLinkAndText=e.dependsLinkAndText.concat([i]),e.config.links.forEach((function(t){i==t["source"]["index"]?e.dependsNode=e.dependsNode.concat([t.target.index]):i==t["target"]["index"]&&(e.dependsNode=e.dependsNode.concat([t.source.index]))})),e.SVG.selectAll("circle").filter((function(t){return-1==e.dependsNode.indexOf(t.index)})).transition().style("opacity",.1),e.SVG.selectAll(".edge").filter((function(t){return-1==e.dependsLinkAndText.indexOf(t.source.index)&&-1==e.dependsLinkAndText.indexOf(t.target.index)})).transition().style("opacity",.1)}else e.SVG.selectAll("circle").transition().style("opacity",1),e.SVG.selectAll(".edge").transition().style("opacity",1),e.highlighted=null,e.dependsNode=[],e.dependsLinkAndText=[]}};function d(t){function e(e){e.active||t.alphaTarget(.1).restart(),e.subject.fx=e.subject.x,e.subject.fy=e.subject.y}function i(t){t.subject.fx=t.x,t.subject.fy=t.y}function s(e){e.active||t.alphaTarget(0),e.subject.fx=null,e.subject.fy=null}return c.drag().on("start",e).on("drag",i).on("end",s)}function f(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))}function p(t,e,i){var s;return e.x>t.x?e.y>t.y?s=Math.asin((e.y-t.y)/i):(s=Math.asin((t.y-e.y)/i),s=-s):e.y>t.y?(s=Math.asin((e.y-t.y)/i),s=Math.PI-s):(s=Math.asin((t.y-e.y)/i),s-=Math.PI),s*=180/Math.PI,"translate("+t.x+","+t.y+")rotate("+s+")"}var h,g,m=i("bc3a"),v=i.n(m),y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{staticClass:"dialog-index",attrs:{visible:"",title:t.title,"close-on-click-modal":!1,"destroy-on-close":"",width:"500px"},on:{close:t.close}},[i("el-form",{ref:"form",attrs:{"label-position":"top","label-width":"100px",model:t.form,rules:t.rules,size:"mini"}},[i("el-form-item",{attrs:{label:"properties",prop:"properties"}},[i("input-prop",{ref:"inputProp",attrs:{propList:t.propertiesList},model:{value:t.form.properties,callback:function(e){t.$set(t.form,"properties",e)},expression:"form.properties"}})],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.close()}}},[t._v("取 消")]),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.save()}}},[t._v("保 存")])],1)],1)],1)},k=[],b=(i("caad"),i("2532"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._l(t.values,(function(e,s){return i("el-row",{key:s},[i("el-col",{attrs:{span:6}},[t.showPropList?i("el-select",{attrs:{placeholder:"key",filterable:""},model:{value:e.key,callback:function(i){t.$set(e,"key",i)},expression:"v.key"}},t._l(t.propList,(function(t,e){return i("el-option",{key:e,attrs:{label:t.label[0],value:t.label[0]}})})),1):i("el-input",{attrs:{placeholder:"key"},model:{value:e.key,callback:function(i){t.$set(e,"key",i)},expression:"v.key"}})],1),i("el-col",{attrs:{span:16}},[i("el-input",{attrs:{placeholder:"请输入value"},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"v.value"}})],1),i("el-col",{staticStyle:{"text-align":"right"},attrs:{span:2}},[i("el-button",{staticStyle:{"margin-left":"5px"},attrs:{disabled:t.values.length<2,type:"text"},on:{click:function(e){return t.del(s)}}},[t._v("删除")])],1)],1)})),i("el-row",{style:{paddingTop:t.values.length>0?"8px":"0"}},[i("el-col",{attrs:{span:20}},[i("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"text"},on:{click:t.add}},[t._v("增加")])],1)],1),i("div",{staticStyle:{padding:"8px"}})],2)}),x=[],w=(i("a434"),i("d3b7"),i("ddb0"),{name:"input-prop",props:{value:Object,showPropList:{type:Boolean,default:!0},propList:{type:Array,default:function(){return[]}}},data:function(){return{values:[]}},watch:{value:function(t){t&&this.setValues(t)}},mounted:function(){this.setValues(this.value)},methods:{setValues:function(t){var e=[];for(var i in t)if(Object.hasOwnProperty.call(t,i)){var s=t[i];e.push({key:i,value:s})}this.values=e},emitInput:function(){for(var t={},e=0;e<this.values.length;e++){var i=this.values[e];if(!i.key)return this.$message.error("key不能为空"),!0;if(/^\d+/.test(i.key))return this.$message.warning("key不能以数字为开头"),!0;if(!i.value)return this.$message.error("value不能为空"),!0;if(void 0!=t[i.key])return this.$message.error("key不能重复"),!0;t[i.key]=i.value}this.$emit("input",t)},add:function(){this.values.push({key:"",value:""})},del:function(t){this.values.splice(t,1)}}}),_=w,C=i("2877"),O=Object(C["a"])(_,b,x,!1,null,null,null),L=O.exports,S={components:{InputProp:L},props:{title:String,formData:Object,propertiesList:Array,disabled:Boolean},inject:["reload"],data:function(){return{form:{id:"",name:"",type:"",color:"",properties:{}},rules:{name:[{required:!0,message:"请输入name",trigger:"blur"}],type:[{required:!0,message:"请输入type",trigger:"blur"}],color:[{required:!0,message:"请输入color",trigger:"change"}],properties:[]}}},methods:{getKey:function(t){for(var e=0;e<this.propertiesList.length;e++){var i=this.propertiesList[e];if(i.label.includes(t))return i.key}return t},close:function(){this.$emit("close")},save:function(){var t=this,e=this;this.$refs.form.validate((function(i){if(i){if(t.$refs.inputProp.emitInput())return;t.$nextTick((function(){e.dialogVisible=!1;var t={};for(var i in e.form.properties)Object.hasOwnProperty.call(e.form.properties,i)&&(t[e.getKey(i)]=e.form.properties[i]);v.a.get("/updateNode",{params:Object(l["a"])({id:e.form.id},t)}).then((function(){e.reload()})).catch((function(){e.reload()}))}))}}))}},mounted:function(){var t=this.formData||{};this.form=Object(l["a"])(Object(l["a"])({},t),{},{properties:Object(l["a"])({},t.properties||{})})}},$=S,j=Object(C["a"])($,y,k,!1,null,null,null),z=j.exports,D={name:"IndexPage",components:{NodeDialog:z},inject:["reload"],data:function(){return{nodes:[],links:[],tags:{},propertiesList:[{key:"name",label:["name"]},{key:"identNum",label:["身份证"]},{key:"policyNum",label:["保单","保单号"]},{key:"stard",label:["起期","保险起期"]},{key:"endd",label:["止期","保险止期"]},{key:"accd",label:["出险","出险时间"]},{key:"payNum",label:["银行卡"]},{key:"reportD",label:["报案","报案时间"]},{key:"reportNum",label:["报案电话"]}],input1:"",dataList:[],nodeData:null,tooltip:null,activeI:"",svgFocus:!1,dialogVisible:!1,title:"",d:null}},methods:{nodeDialogClose:function(){this.dialogVisible=!1},nodeDialogOk:function(){this.nodeDialogClose()},modify:function(){this.formData=this.nodeData||{},this.title="修改节点",this.dialogVisible=!0},tagClick:function(t){this.svgFocus=!0,this.selectRow("null"),this.removeTagHighlight();for(var e=document.getElementsByClassName("i"+t[0].id),i=e.length-1;i>-1;i--)e[i].classList.add("tagHighlight")},removeTagHighlight:function(){for(var t=document.getElementsByClassName("tagHighlight"),e=t.length-1;e>-1;e--)t[e].classList.remove("tagHighlight")},search:function(){if(this.d){if(!this.input1)return this.dataList=[],void this.selectRow("null");this.dataList=this.d.search(this.input1,["name"]),this.selectRow(this.dataList.length?0:"null")}},selectRow:function(t){var e=this.d,i=this.dataList;this.activeI=null,e.highlightObject(),i&&i[t]&&(e.highlightObject(i[t]),e.nodeData=i[t],this.drawTooltip(e.nodeData,"selectRow"),this.activeI=t)},drawTooltip:function(t){this.nodeData=t,t&&t.properties&&Object.keys(t.properties).length>0?this.tooltip=t.properties:this.tooltip=null},svgClick:function(t){this.d.highlightObject(),this.drawTooltip(t),this.svgFocus=!1,this.selectRow("null")},startD3:function(t,e){this.d=u.init("svg",{width:window.document.body.offsetWidth,height:window.document.body.offsetHeight,nodes:t,links:e,svgClick:this.svgClick})},reset:function(){this.dataList=[],this.tooltip=null,this.$refs.svgDiv.innerHTML=""},windowResize:function(){var t=this;h&&clearTimeout(h),h=setTimeout((function(){t.reset(),h=void 0,t.startD3(t.nodes,t.links,t.tags)}),300)},initData:function(){var t=this;v.a.get("/visionAllData"+location.search).then((function(e){if(200!=e.status||e.data.error)alert(e.data.error||e.statusText);else{var i=e.data;t.setData(i)}})).catch((function(t){console.log(t)}))},setData:function(t){var e=this,i=t.nodes||[],s=t.edges||[],n={};i.forEach((function(t){t.type&&(n[t.type]=n[t.type]||[],n[t.type].push(t),t.typeKey=n[t.type][0].id)})),e.nodes=i,e.links=s,e.tags=n,e.startD3(i,s,n)}},mounted:function(){this.initData(),window.addEventListener("resize",this.windowResize)},destroyed:function(){window.removeEventListener("resize",this.windowResize)}},T=D,N=(i("5900"),Object(C["a"])(T,o,a,!1,null,"c50d830e",null)),P=N.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("div",{staticClass:"tags"},[i("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"100%"}},[i("div",{staticStyle:{flex:"1"}},[i("el-button",{staticClass:"button-new-tag",attrs:{type:"primary",size:"small"},on:{click:function(e){return t.open1()}}},[t._v("新建节点")]),i("el-button",{staticClass:"button-new-tag",staticStyle:{"margin-right":"20px"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.open2()}}},[t._v("新建连线")]),t._l(t.tags,(function(e,s){return i("el-tag",{key:s,staticStyle:{"margin-left":"10px",cursor:"pointer"},attrs:{type:"info",size:"mini",effect:"dark",color:e.style.fill}},[t._v(t._s(e.type))])}))],2),i("div",[i("el-button",{staticClass:"button-new-tag",attrs:{type:"success",size:"small"},on:{click:function(e){return t.open3()}}},[t._v("保存模板")])],1)])]),i("div",{ref:"svgDiv",class:t.svgFocus?"cfocus":"",attrs:{id:"svg"}}),i("el-dialog",{staticClass:"dialog-index",attrs:{visible:t.visible,title:"节点信息","close-on-click-modal":!1,"destroy-on-close":"",width:"500px"},on:{close:t.close}},[i("el-form",{ref:"tagform",attrs:{"label-width":"100px",model:t.tagform,rules:t.tagRules,size:"mini"}},[i("el-form-item",{attrs:{label:"节点名",prop:"type"}},[i("el-input",{attrs:{maxlength:"50",placeholder:"请输入节点名"},on:{blur:t.setColor},model:{value:t.tagform.type,callback:function(e){t.$set(t.tagform,"type",e)},expression:"tagform.type"}})],1),i("el-row",[i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"properties",prop:"properties"}},[i("input-prop",{ref:"inputProp",attrs:{showPropList:!1},model:{value:t.tagform.properties,callback:function(e){t.$set(t.tagform,"properties",e)},expression:"tagform.properties"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"填充颜色",prop:"fill"}},[i("el-color-picker",{staticStyle:{width:"100%"},attrs:{predefine:t.predefineColors},model:{value:t.tagform.fill,callback:function(e){t.$set(t.tagform,"fill",e)},expression:"tagform.fill"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"描边颜色",prop:"stroke"}},[i("el-color-picker",{staticStyle:{width:"100%"},model:{value:t.tagform.stroke,callback:function(e){t.$set(t.tagform,"stroke",e)},expression:"tagform.stroke"}})],1)],1)],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.close()}}},[t._v("取 消")]),t.tagform.id?i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.delNode()}}},[t._v("删 除")]):t._e(),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.ok()}}},[t._v("保 存")])],1)],1),i("el-dialog",{staticClass:"dialog-index",attrs:{visible:t.visible2,title:"连线信息","close-on-click-modal":!1,"destroy-on-close":"",width:"500px"},on:{close:t.close2}},[i("div",[t._l(t.tempLinks,(function(e,s){return i("el-row",{key:s,attrs:{gutter:8}},[i("el-col",{attrs:{span:7}},[i("el-select",{attrs:{size:"mini",placeholder:"source"},model:{value:e.source,callback:function(i){t.$set(e,"source",i)},expression:"v.source"}},t._l(t.nodes,(function(t,e){return i("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),1)],1),i("el-col",{attrs:{span:6}},[i("el-input",{attrs:{maxlength:"50",size:"mini",placeholder:"关系描述"},model:{value:e.type,callback:function(i){t.$set(e,"type",i)},expression:"v.type"}})],1),i("el-col",{attrs:{span:7}},[i("el-select",{attrs:{size:"mini",placeholder:"target"},model:{value:e.target,callback:function(i){t.$set(e,"target",i)},expression:"v.target"}},t._l(t.nodes,(function(t,e){return i("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),1)],1),i("el-col",{attrs:{span:2}},[i("el-color-picker",{staticStyle:{width:"100%"},attrs:{size:"mini"},model:{value:e.color,callback:function(i){t.$set(e,"color",i)},expression:"v.color"}})],1),i("el-col",{attrs:{span:2}},[i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){return t.delLink(s)}}},[t._v("删除")])],1)],1)})),i("div",[i("el-button",{attrs:{type:"text",size:"small"},on:{click:t.addLink}},[t._v("新增连线")])],1)],2),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.close2()}}},[t._v("取 消")]),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.ok2()}}},[t._v("保 存")])],1)])],1)},A=[],E=(i("d81d"),1),F=0,I={name:"AddTemplate",inject:["reload"],components:{InputProp:L},data:function(){return{visible:!1,visible2:!1,nodes:[],links:[],tempLinks:[],predefineColors:["#ffcf3c","#c990c0","#f79767","#57c7e3","#f16667","#d9c8ae","#8dcc93","#ecb5c9","#4c8eda","#ffc454","#da7194","#569480"],tagform:{id:null,properties:{},size:"",fill:"",stroke:"",type:""},tagRules:{type:[{required:!0,message:"请输入节点名",trigger:"blur"}],fill:[{required:!0,message:"请选择一个填充颜色",trigger:"change"}],stroke:[{required:!0,message:"请选择一个描边颜色",trigger:"change"}]},svgFocus:!1,d:null}},computed:{tags:function(){var t=[],e=[];if(this.nodes)for(var i=0;i<this.nodes.length;i++){var s=this.nodes[i];e.includes(s.type)||(t.push(s),e.push(s.type))}return t}},methods:{getPredefineColors:function(){return this.predefineColors[F++]},open1:function(t){t=t||{},this.tagform={id:t.id||null,name:t.name||"",properties:t.properties||{name:""},size:t.size||"",fill:(t.style||{}).fill||this.getPredefineColors(),stroke:(t.style||{}).stroke||"#FFFFFF",type:t.type||""},F>=this.predefineColors.length&&(F=0),this.visible=!0},close:function(){this.visible=!1},delNode:function(){var t=this,e=this.tagform;this.$confirm("确定删除节点"+e.name+"和相关连线的吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.nodes=t.nodes.filter((function(t){return t.id!=e.id})),t.links=t.links.filter((function(t){return t.target!=e.id&&t.source!=e.id})),t.close(),t.updateD3()})).catch((function(){}))},ok:function(){var t=this;this.$refs.tagform.validate((function(e){if(e){var i=t.tagform;if(/^\d+/.test(i.type))return void t.$message.warning("节点名不能以数字为开头");if(t.$refs.inputProp.emitInput())return;t.$nextTick((function(){var e="",s=i.properties||{};for(var n in s)Object.hasOwnProperty.call(s,n)&&s[n]&&(e=s[n]);if(e){for(var r,o=0;o<t.nodes.length;o++){var a=t.nodes[o];a.id==i.id&&(r=o),a.type==t.tagform.type&&(a.style={fill:i.fill,stroke:i.stroke})}var l={id:i.id||E+++"",name:e,style:{fill:i.fill,stroke:i.stroke},type:i.type,size:"20",properties:i.properties};void 0!=r?t.nodes[r]=l:t.nodes.push(l),t.close(),t.updateD3()}else t.$message.warning("properties至少需要录入一条内容")}))}}))},setColor:function(){if(this.tagform.type)for(var t=0;t<this.nodes.length;t++){var e=this.nodes[t];if(e.type==this.tagform.type){this.tagform.fill=e.style.fill,this.tagform.stroke=e.style.stroke;break}}},open2:function(){this.tempLinks=JSON.parse(JSON.stringify(this.links)),this.visible2=!0},close2:function(){this.visible2=!1},ok2:function(){for(var t=[],e=0;e<this.tempLinks.length;e++){var i=this.tempLinks[e];if(!i.target||!i.source||!i.type)return void this.$message.warning("请补全信息！");if(/^\d+/.test(i.type))return this.$message.warning("关系描述不能以数字为开头"),!0;if(!i.color)return void this.$message.warning("请选择颜色！");if(i.source==i.target)return void this.$message.warning("source和target不能为同一个节点！");if(t.includes(i.source+i.target))return void this.$message.warning("有重复的连线！");t.push(i.source+i.target)}this.links=this.tempLinks,this.close2(),this.updateD3()},updateD3:function(){this.d.update({nodes:JSON.parse(JSON.stringify(this.nodes)),links:JSON.parse(JSON.stringify(this.links))})},addLink:function(){this.tempLinks.push({id:E+++"",source:"",size:"1",color:"#545454",type:"",target:""})},delLink:function(t){this.tempLinks.splice(t,1)},startD3:function(t,e){this.d=u.init("svg",{width:window.document.body.offsetWidth,height:window.document.body.offsetHeight,nodes:t,links:e,svgClick:this.svgClick,textClick:this.open2})},reset:function(){this.$refs.svgDiv.innerHTML=""},open3:function(){var t=this;if(this.nodes&&this.nodes.length>1){for(var e=this.nodes.map((function(t){return t.id})),i=0;i<this.links.length;i++){var s=this.links[i],n=e.indexOf(s.target);n>-1&&e.splice(n,1);var r=e.indexOf(s.source);r>-1&&e.splice(r,1)}if(e.length>0)return void this.$message.warning("所有节点都需要添加连接，请检查！");this.$prompt("请输入模板名","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/.{0,50}?/,inputErrorMessage:"模板名格式不正确"}).then((function(e){var i=e.value,s={modelname:i,nodes:t.nodes,edges:t.links};v.a.get("/saveModel?modelString="+encodeURIComponent(JSON.stringify(s))).then((function(t){this.$message.success("保存成功"),console.log(t)})).catch((function(t){console.log(t)}))})).catch((function(){}))}else this.$message.warning("至少需要两个节点！")},windowResize:function(){var t=this;g&&clearTimeout(g),g=setTimeout((function(){t.reset(),g=void 0,t.startD3(t.nodes,t.links)}),300)},svgClick:function(t){t&&this.open1(t),this.d.highlightObject(),this.svgFocus=!1},setData:function(){this.nodes=[],this.links=[],this.startD3(this.nodes,this.links)}},mounted:function(){this.setData(),window.addEventListener("resize",this.windowResize)},destroyed:function(){window.removeEventListener("resize",this.windowResize)}},R=I,V=(i("097b"),Object(C["a"])(R,M,A,!1,null,"bd5007dc",null)),W=V.exports,H={name:"app",components:{IndexPage:P,AddTemplate:W},provide:function(){return{reload:this.reload}},methods:{reload:function(){var t=this;this.isShow=!1,this.$nextTick((function(){t.isShow=!0}))}},data:function(){return{isShow:!0,hash:"",search:""}},created:function(){this.hash=location.hash,this.search=location.search}},B=H,J=(i("034f"),Object(C["a"])(B,n,r,!1,null,null,null)),G=J.exports,q=(i("9e1f"),i("450d"),i("6ed5")),K=i.n(q),U=(i("0fb7"),i("f529")),X=i.n(U),Y=(i("a586"),i("7464")),Z=i.n(Y),Q=(i("2986"),i("14e9")),tt=i.n(Q),et=(i("eca7"),i("3787")),it=i.n(et),st=(i("425f"),i("4105")),nt=i.n(st),rt=(i("a7cc"),i("df33")),ot=i.n(rt),at=(i("cbb5"),i("8bbc")),lt=i.n(at),ct=(i("6611"),i("e772")),ut=i.n(ct),dt=(i("1f1a"),i("4e4b")),ft=i.n(dt),pt=(i("10cb"),i("f3ad")),ht=i.n(pt),gt=(i("1951"),i("eedf")),mt=i.n(gt),vt=(i("f4f9"),i("c2cc")),yt=i.n(vt),kt=(i("7a0f"),i("0f6c")),bt=i.n(kt);s["default"].use(bt.a),s["default"].use(yt.a),s["default"].use(mt.a),s["default"].use(ht.a),s["default"].use(ft.a),s["default"].use(ut.a),s["default"].use(lt.a),s["default"].use(ot.a),s["default"].use(nt.a),s["default"].use(it.a),s["default"].use(tt.a),s["default"].use(Z.a),s["default"].prototype.$message=X.a,s["default"].prototype.$msgbox=K.a,s["default"].prototype.$alert=K.a.alert,s["default"].prototype.$confirm=K.a.confirm,s["default"].prototype.$prompt=K.a.prompt,s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(G)}}).$mount("#app")},5900:function(t,e,i){"use strict";i("a400")},"85ec":function(t,e,i){},a400:function(t,e,i){},d4b2:function(t,e,i){}});