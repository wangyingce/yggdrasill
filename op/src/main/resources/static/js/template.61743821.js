(function(t){function e(e){for(var i,o,a=e[0],l=e[1],c=e[2],f=0,d=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var l=n[a];0!==s[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={template:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;r.push([1,"chunk-vendors"]),n()})({1:function(t,e,n){t.exports=n("3c97")},"3c97":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i,s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.isShow&&t.isLogin?n("AddTemplate"):t._e()],1)},o=[],a=(n("ac1f"),n("841c"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"tags"},[n("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"100%"}},[n("div",{staticStyle:{flex:"1"}},[n("el-button",{staticClass:"button-new-tag",attrs:{type:"primary",size:"small"},on:{click:function(e){return t.open1()}}},[t._v("新建节点")]),n("el-button",{staticClass:"button-new-tag",staticStyle:{"margin-right":"20px"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.open2()}}},[t._v("新建连线")]),t._l(t.tags,(function(e,i){return n("el-tag",{key:i,staticStyle:{"margin-left":"10px",cursor:"pointer"},attrs:{type:"info",size:"mini",effect:"dark",color:e.style.fill}},[t._v(t._s(e.type))])}))],2),n("div",[n("el-button",{staticClass:"button-new-tag",attrs:{type:"success",size:"small"},on:{click:function(e){return t.open3()}}},[t._v("保存模板")])],1)])]),n("div",{ref:"svgDiv",class:t.svgFocus?"cfocus":"",attrs:{id:"svg"}}),n("el-dialog",{staticClass:"dialog-index",attrs:{visible:t.visible,title:"节点信息","close-on-click-modal":!1,"destroy-on-close":"",width:"500px"},on:{close:t.close}},[n("el-form",{ref:"tagform",attrs:{"label-width":"100px",model:t.tagform,rules:t.tagRules,size:"mini"}},[n("el-form-item",{attrs:{label:"节点名",prop:"type"}},[n("el-input",{attrs:{maxlength:"50",placeholder:"请输入节点名"},on:{blur:t.setColor},model:{value:t.tagform.type,callback:function(e){t.$set(t.tagform,"type",e)},expression:"tagform.type"}})],1),n("el-row",[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"properties",prop:"properties"}},[n("input-prop",{ref:"inputProp",attrs:{showPropList:!1},model:{value:t.tagform.properties,callback:function(e){t.$set(t.tagform,"properties",e)},expression:"tagform.properties"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"填充颜色",prop:"fill"}},[n("el-color-picker",{staticStyle:{width:"100%"},attrs:{predefine:t.predefineColors},model:{value:t.tagform.fill,callback:function(e){t.$set(t.tagform,"fill",e)},expression:"tagform.fill"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"描边颜色",prop:"stroke"}},[n("el-color-picker",{staticStyle:{width:"100%"},model:{value:t.tagform.stroke,callback:function(e){t.$set(t.tagform,"stroke",e)},expression:"tagform.stroke"}})],1)],1)],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(e){return t.close()}}},[t._v("取 消")]),t.tagform.id?n("el-button",{attrs:{size:"small"},on:{click:function(e){return t.delNode()}}},[t._v("删 除")]):t._e(),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.ok()}}},[t._v("保 存")])],1)],1),n("el-dialog",{staticClass:"dialog-index",attrs:{visible:t.visible2,title:"连线信息","close-on-click-modal":!1,"destroy-on-close":"",width:"500px"},on:{close:t.close2}},[n("div",[t._l(t.tempLinks,(function(e,i){return n("el-row",{key:i,attrs:{gutter:8}},[n("el-col",{attrs:{span:7}},[n("el-select",{attrs:{size:"mini",placeholder:"source"},model:{value:e.source,callback:function(n){t.$set(e,"source",n)},expression:"v.source"}},t._l(t.nodes,(function(t,e){return n("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),1)],1),n("el-col",{attrs:{span:6}},[n("el-input",{attrs:{maxlength:"50",size:"mini",placeholder:"关系描述"},model:{value:e.type,callback:function(n){t.$set(e,"type",n)},expression:"v.type"}})],1),n("el-col",{attrs:{span:7}},[n("el-select",{attrs:{size:"mini",placeholder:"target"},model:{value:e.target,callback:function(n){t.$set(e,"target",n)},expression:"v.target"}},t._l(t.nodes,(function(t,e){return n("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),1)],1),n("el-col",{attrs:{span:2}},[n("el-color-picker",{staticStyle:{width:"100%"},attrs:{size:"mini"},model:{value:e.color,callback:function(n){t.$set(e,"color",n)},expression:"v.color"}})],1),n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){return t.delLink(i)}}},[t._v("删除")])],1)],1)})),n("div",[n("el-button",{attrs:{type:"text",size:"small"},on:{click:t.addLink}},[t._v("新增连线")])],1)],2),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(e){return t.close2()}}},[t._v("取 消")]),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.ok2()}}},[t._v("保 存")])],1)])],1)}),l=[],c=(n("cb29"),n("4de4"),n("caad"),n("c975"),n("d81d"),n("a434"),n("b0c0"),n("4d63"),n("25f0"),n("466d"),n("d32f")),u=n("bc3a"),f=n.n(u),d=n("4b2a");function h(t,e){var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i");e=e||window.location.search;var i=e.substr(1).match(n);return null!=i?unescape(i[2]):null}var p=1,g=0,m={name:"AddTemplate",inject:["reload"],components:{InputProp:d["a"]},data:function(){return{visible:!1,visible2:!1,nodes:[],links:[],tempLinks:[],predefineColors:["#ffcf3c","#c990c0","#f79767","#57c7e3","#f16667","#d9c8ae","#8dcc93","#ecb5c9","#4c8eda","#ffc454","#da7194","#569480"],tagform:{id:null,properties:{},size:"",fill:"",stroke:"",type:""},tagRules:{type:[{required:!0,message:"请输入节点名",trigger:"blur"}],fill:[{required:!0,message:"请选择一个填充颜色",trigger:"change"}],stroke:[{required:!0,message:"请选择一个描边颜色",trigger:"change"}]},svgFocus:!1,d:null}},computed:{tags:function(){var t=[],e=[];if(this.nodes)for(var n=0;n<this.nodes.length;n++){var i=this.nodes[n];e.includes(i.type)||(t.push(i),e.push(i.type))}return t}},methods:{getPredefineColors:function(){return this.predefineColors[g++]},open1:function(t){t=t||{},this.tagform={id:t.id||null,name:t.name||"",properties:t.properties||{name:""},size:t.size||"",fill:(t.style||{}).fill||this.getPredefineColors(),stroke:(t.style||{}).stroke||"#FFFFFF",type:t.type||""},g>=this.predefineColors.length&&(g=0),this.visible=!0},close:function(){this.visible=!1},delNode:function(){var t=this,e=this.tagform;this.$confirm("确定删除节点"+e.name+"和相关连线的吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.nodes=t.nodes.filter((function(t){return t.id!=e.id})),t.links=t.links.filter((function(t){return t.target!=e.id&&t.source!=e.id})),t.close(),t.updateD3()})).catch((function(){}))},ok:function(){var t=this;this.$refs.tagform.validate((function(e){if(e){var n=t.tagform;if(/^\d+/.test(n.type))return void t.$message.warning("节点名不能以数字为开头");if(t.$refs.inputProp.emitInput())return;t.$nextTick((function(){var e="",i=n.properties||{};for(var s in i)Object.hasOwnProperty.call(i,s)&&i[s]&&(e=i[s]);if(e){for(var r,o=0;o<t.nodes.length;o++){var a=t.nodes[o];a.id==n.id&&(r=o),a.type==t.tagform.type&&(a.style={fill:n.fill,stroke:n.stroke})}var l={id:n.id||p+++"",name:e,style:{fill:n.fill,stroke:n.stroke},type:n.type,size:"20",properties:n.properties};void 0!=r?t.nodes[r]=l:t.nodes.push(l),t.nodes.push(),t.close(),t.updateD3()}else t.$message.warning("properties至少需要录入一条内容")}))}}))},setColor:function(){if(this.tagform.type)for(var t=0;t<this.nodes.length;t++){var e=this.nodes[t];if(e.type==this.tagform.type){this.tagform.fill=e.style.fill,this.tagform.stroke=e.style.stroke;break}}},open2:function(){this.tempLinks=JSON.parse(JSON.stringify(this.links)),this.visible2=!0},close2:function(){this.visible2=!1},ok2:function(){for(var t=[],e=0;e<this.tempLinks.length;e++){var n=this.tempLinks[e];if(!n.target||!n.source||!n.type)return void this.$message.warning("请补全信息！");if(/^\d+/.test(n.type))return this.$message.warning("关系描述不能以数字为开头"),!0;if(!n.color)return void this.$message.warning("请选择颜色！");if(n.source==n.target)return void this.$message.warning("source和target不能为同一个节点！");if(t.includes(n.source+n.target))return void this.$message.warning("有重复的连线！");t.push(n.source+n.target)}this.links=this.tempLinks,this.close2(),this.updateD3()},updateD3:function(){this.d.update({nodes:JSON.parse(JSON.stringify(this.nodes)),links:JSON.parse(JSON.stringify(this.links))})},addLink:function(){this.tempLinks.push({id:p+++"",source:"",size:"1",color:"#545454",type:"",target:""})},delLink:function(t){this.tempLinks.splice(t,1)},startD3:function(t,e){this.d=c["a"].init("svg",{width:window.document.body.offsetWidth,height:window.document.body.offsetHeight,nodes:t,links:e,svgClick:this.svgClick,textClick:this.open2})},reset:function(){this.$refs.svgDiv.innerHTML=""},open3:function(){var t=this;if(this.nodes&&this.nodes.length>1){for(var e=this.nodes.map((function(t){return t.id})),n=0;n<this.links.length;n++){var i=this.links[n],s=e.indexOf(i.target);s>-1&&e.splice(s,1);var r=e.indexOf(i.source);r>-1&&e.splice(r,1)}if(e.length>0)return void this.$message.warning("所有节点都需要添加连接，请检查！");this.$prompt("请输入模板名","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/.{0,50}?/,inputErrorMessage:"模板名格式不正确"}).then((function(e){var n=e.value,i={userc:t.$cookies.get("ygg1412"),modelname:n,nodes:t.nodes,edges:t.links};console.log(i),f.a.get("/saveModel?modelString="+encodeURIComponent(JSON.stringify(i))).then((function(t){this.$message.success("保存成功"),console.log(t)})).catch((function(t){console.log(t)}))})).catch((function(){}))}else this.$message.warning("至少需要两个节点！")},windowResize:function(){var t=this;i&&clearTimeout(i),i=setTimeout((function(){t.reset(),i=void 0,t.startD3(t.nodes,t.links)}),300)},svgClick:function(t){t&&this.open1(t),this.d.highlightObject(),this.svgFocus=!1},setData:function(){this.nodes=[],this.links=[],this.startD3(this.nodes,this.links)},initData:function(t){var e=this;f.a.get("/getModelData?mid="+t).then((function(t){if(200!=t.status||t.data.error)e.$message.error(t.data.error||t.statusText);else{var n=t.data;e.nodes=n.nodes||[],e.links=n.links||[],e.startD3(e.nodes,e.links)}})).catch((function(t){console.log(t)}))}},created:function(){var t=h("mid",location.search);t&&this.initData(t)},mounted:function(){this.setData(),window.addEventListener("resize",this.windowResize)},destroyed:function(){window.removeEventListener("resize",this.windowResize)}},v=m,k=(n("9447"),n("2877")),y=Object(k["a"])(v,a,l,!1,null,"e2cb3a06",null),b=y.exports,x=n("8c1b"),w={name:"app",components:{AddTemplate:b},provide:function(){return{reload:this.reload}},methods:{reload:function(){var t=this;this.isShow=!1,this.$nextTick((function(){t.isShow=!0}))},goIndex:function(){"/login.html"!=location.pathname&&(location.href="/login.html")}},data:function(){return{isLogin:!1,isShow:!0,search:""}},created:function(){var t=this,e=this,n=this.$cookies.get("ygg1412");x["a"].isLogin(n,(function(n,i){!1===n?(e.goIndex(),e.$message.error(i)):(t.isLogin=!0,console.log(n))})),this.search=location.search}},$=w,S=(n("c94a"),Object(k["a"])($,r,o,!1,null,null,null)),_=S.exports,O=(n("7378"),n("2b27")),C=n.n(O);s["default"].config.productionTip=!1,s["default"].use(C.a),new s["default"]({render:function(t){return t(_)}}).$mount("#app")},4937:function(t,e,n){},"4b2a":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.values,(function(e,i){return n("el-row",{key:i},[n("el-col",{attrs:{span:6}},[t.showPropList?n("el-select",{attrs:{placeholder:"key",filterable:""},model:{value:e.key,callback:function(n){t.$set(e,"key",n)},expression:"v.key"}},t._l(t.propList,(function(t,e){return n("el-option",{key:e,attrs:{label:t.label[0],value:t.label[0]}})})),1):n("el-input",{attrs:{placeholder:"key"},model:{value:e.key,callback:function(n){t.$set(e,"key",n)},expression:"v.key"}})],1),n("el-col",{attrs:{span:16}},[n("el-input",{attrs:{placeholder:"请输入value"},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"v.value"}})],1),n("el-col",{staticStyle:{"text-align":"right"},attrs:{span:2}},[n("el-button",{staticStyle:{"margin-left":"5px"},attrs:{disabled:t.values.length<2,type:"text"},on:{click:function(e){return t.del(i)}}},[t._v("删除")])],1)],1)})),n("el-row",{style:{paddingTop:t.values.length>0?"8px":"0"}},[n("el-col",{attrs:{span:20}},[n("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"text"},on:{click:t.add}},[t._v("增加")])],1)],1),n("div",{staticStyle:{padding:"8px"}})],2)},s=[],r=(n("a434"),n("d3b7"),n("ddb0"),{name:"input-prop",props:{value:Object,showPropList:{type:Boolean,default:!0},propList:{type:Array,default:function(){return[]}}},data:function(){return{values:[]}},watch:{value:function(t){t&&this.setValues(t)}},mounted:function(){this.setValues(this.value)},methods:{setValues:function(t){var e=[];for(var n in t)if(Object.hasOwnProperty.call(t,n)){var i=t[n];e.push({key:n,value:i})}this.values=e},emitInput:function(){for(var t={},e=0;e<this.values.length;e++){var n=this.values[e];if(!n.key)return this.$message.error("key不能为空"),!0;if(/^\d+/.test(n.key))return this.$message.warning("key不能以数字为开头"),!0;if(!n.value)return this.$message.error("value不能为空"),!0;if(void 0!=t[n.key])return this.$message.error("key不能重复"),!0;t[n.key]=n.value}this.$emit("input",t)},add:function(){this.values.push({key:"",value:""})},del:function(t){this.values.splice(t,1)}}}),o=r,a=n("2877"),l=Object(a["a"])(o,i,s,!1,null,null,null);e["a"]=l.exports},7378:function(t,e,n){"use strict";n("9e1f"),n("450d");var i=n("6ed5"),s=n.n(i),r=(n("0fb7"),n("f529")),o=n.n(r),a=(n("a586"),n("7464")),l=n.n(a),c=(n("2986"),n("14e9")),u=n.n(c),f=(n("eca7"),n("3787")),d=n.n(f),h=(n("425f"),n("4105")),p=n.n(h),g=(n("a7cc"),n("df33")),m=n.n(g),v=(n("cbb5"),n("8bbc")),k=n.n(v),y=(n("6611"),n("e772")),b=n.n(y),x=(n("1f1a"),n("4e4b")),w=n.n(x),$=(n("10cb"),n("f3ad")),S=n.n($),_=(n("1951"),n("eedf")),O=n.n(_),C=(n("f4f9"),n("c2cc")),L=n.n(C),z=(n("7a0f"),n("0f6c")),j=n.n(z),T=n("2b0e");T["default"].use(j.a),T["default"].use(L.a),T["default"].use(O.a),T["default"].use(S.a),T["default"].use(w.a),T["default"].use(b.a),T["default"].use(k.a),T["default"].use(m.a),T["default"].use(p.a),T["default"].use(d.a),T["default"].use(u.a),T["default"].use(l.a),T["default"].prototype.$message=o.a,T["default"].prototype.$msgbox=s.a,T["default"].prototype.$alert=s.a.alert,T["default"].prototype.$confirm=s.a.confirm,T["default"].prototype.$prompt=s.a.prompt},"8c1b":function(t,e,n){"use strict";var i=n("bc3a"),s=n.n(i),r="查询用户信息失败";e["a"]={isLogin:function(t,e){if(t){var n=new FormData;n.append("property",t),s.a.post("/initUserInfo",n).then((function(t){var n=t.data||{};200==t.status?null!=n.sus?e(n,n.sus):e(!1,n.error||r):e(n.error||r)})).catch((function(){e(!1,r)}))}else e(!1,"未登录")}}},9447:function(t,e,n){"use strict";n("b3ec")},b3ec:function(t,e,n){},c94a:function(t,e,n){"use strict";n("4937")},d32f:function(t,e,n){"use strict";n("99af"),n("cb29"),n("4de4"),n("4160"),n("c975"),n("b0c0"),n("159b");var i=n("5530"),s=n("5698");function r(t){function e(e){e.active||t.alphaTarget(.1).restart(),e.subject.fx=e.subject.x,e.subject.fy=e.subject.y}function n(t){t.subject.fx=t.x,t.subject.fy=t.y}function i(e){e.active||t.alphaTarget(0),e.subject.fx=null,e.subject.fy=null}return s.drag().on("start",e).on("drag",n).on("end",i)}function o(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))}function a(t,e,n){var i;return e.x>t.x?e.y>t.y?i=Math.asin((e.y-t.y)/n):(i=Math.asin((t.y-e.y)/n),i=-i):e.y>t.y?(i=Math.asin((e.y-t.y)/n),i=Math.PI-i):(i=Math.asin((t.y-e.y)/n),i-=Math.PI),i*=180/Math.PI,"translate("+t.x+","+t.y+")rotate("+i+")"}e["a"]={config:{width:300,height:300,nodes:[],links:[],isScale:!0,scaleExtent:[.1,4],chargeStrength:400,collide:70,r:30,linkColor:"#bad4ed",markerColor:"steelblue",rectFill:"blue",textFill:"#c2c2c2",strokeWidth:2,svgClick:null},nodeData:null,id:null,simulation:null,SVG:null,defs:null,marker:null,relMap_g:null,links:null,edges:null,circles:null,texts:null,markerWidth:10,init:function(t,e){var n=this;this.id=t,this.nodeData=null,this.config=Object(i["a"])(Object(i["a"])({},this.config),e);var r=this;return this.simulation=s.forceSimulation(this.config.nodes).force("link",s.forceLink(this.config.links).id((function(t){return t.id}))).force("center",s.forceCenter(this.config.width/2+150,this.config.height/2)).force("charge",s.forceManyBody().strength(this.config.chargeStrength).distanceMax(100)).force("collide",s.forceCollide(this.config.collide).strength(.2).iterations(5)).alphaDecay(.2),this.SVG=s.select("#"+t).append("svg").attr("width",this.config.width).attr("height",this.config.height).call(s.zoom().scaleExtent(this.config.scaleExtent).on("zoom",(function(t){n.config.isScale&&r.relMap_g.attr("transform",t.transform)}))).on("click",(function(t){"circle"!=t.target.tagName&&"CIRCLE"!=t.target.tagName&&(n.nodeData=null),n.config.svgClick&&n.config.svgClick(n.nodeData)})).on("dblclick.zoom",null),this.defs=this.SVG.append("defs"),this.marker=this.defs.append("marker").attr("id","marker").attr("markerWidth",this.markerWidth).attr("markerHeight",this.markerWidth).attr("refX",this.config.r+6+this.config.strokeWidth).attr("refY",4).attr("orient","auto").attr("markerUnits","userSpaceOnUse").append("path").attr("d","M 0 0 8 4 0 8Z").attr("fill",this.config.markerColor),this.setPatterns(),this.relMap_g=this.SVG.append("g").attr("class","relMap_g").attr("width",this.config.width).attr("height",this.config.height),this.gedges=this.relMap_g.append("g").attr("class","edges"),this.setEdges(),this.setCircles(),this.simulationTick(),this},setPatterns:function(){var t=this;this.defs.selectAll("pattern.patternclass").remove();var e=this.defs.selectAll("pattern.patternclass").data(this.config.nodes),n=e.enter().append("pattern").attr("class","patternclass").attr("id",(function(e){return"avatar"+t.id+e.id})).attr("width","1").attr("height","1");n.append("rect").attr("x","0").attr("y",0).attr("width",2*this.config.r).attr("height",2*this.config.r).attr("fill",(function(e){return e.style.fill||t.config.rectFill})),n.append("text").attr("x",this.config.r).attr("y",1.14*this.config.r).attr("text-anchor","middle").attr("fill","#fff").style("font-size",this.config.r/3).text((function(t){return t.name}))},setEdges:function(){var t=this,e=this;this.gedges.selectAll("g.edge").remove();var n=this.gedges.selectAll("g.edge").data(this.config.links),i=n.enter().append("g").attr("class","edge");i.append("path").attr("class","links").attr("id",(function(t){return"path"+e.id+t.id})).attr("d",(function(t){return"M"+(e.config.r+e.markerWidth)+",0 L"+o(t.source,t.target)+",0"})).style("marker-end","url(#marker)").attr("stroke",(function(t){var n=t.color?t.color:e.config.linkColor;return n})),i.append("text").attr("class","texts").attr("y",-2).attr("fill",this.config.textFill).attr("text-anchor","end").style("cursor","pointer").style("font-size",8).text((function(t){return t.type})).on("mouseover",(function(){s.select(this).attr("fill","#ffffff").style("font-size",10)})).on("mouseout",(function(){s.select(this).attr("fill",e.config.textFill).style("font-size",8)})).on("click",(function(){t.config.textClick&&t.config.textClick()})),this.edges=this.gedges.selectAll("g.edge"),this.links=this.gedges.selectAll("path.links"),this.texts=this.gedges.selectAll("text.texts")},setCircles:function(){var t=this;this.relMap_g.selectAll("circle.circleclass").remove();var e=this.relMap_g.selectAll("circle.circleclass").data(this.config.nodes);e.enter().append("circle").attr("class",(function(t){return"circleclass i"+t.typeKey})).style("cursor","pointer").attr("fill",(function(e){return"url(#avatar"+t.id+e.id+")"})).attr("stroke",(function(t){return t.style.stroke||"#ccf1fc"})).attr("stroke-width",this.config.strokeWidth).attr("r",this.config.r).on("mouseover",(function(){s.select(this).attr("stroke-width","4"),s.select(this).attr("stroke","#a3e5f9")})).on("mouseout",(function(){s.select(this).attr("stroke-width",t.config.strokeWidth),s.select(this).attr("stroke",(function(t){return t.style.stroke||"#ccf1fc"}))})).on("click",(function(e,n){t.nodeData=n})).on("dblclick",(function(e,n){t.highlightObject(n)})).call(r(this.simulation)),this.circles=this.relMap_g.selectAll("circle.circleclass")},simulationTick:function(){var t=this,e=this.config.r+this.markerWidth;this.simulation.on("tick",(function(){t.edges.attr("transform",(function(t){return a(t.source,t.target,o(t.source,t.target))})),t.links.attr("d",(function(e){return"M"+(t.config.r+t.markerWidth)+",0 L"+o(e.source,e.target)+",0"})),t.texts.attr("x",(function(t){return t.target.x>t.source.x?o(t.source,t.target)-e:e})).attr("text-anchor",(function(t){return t.source.x>t.target.x?"start":"end"})).attr("transform",(function(t){if(t.target.x<t.source.x){var e=o(t.source,t.target)/2;return"rotate(180 "+e+" 0)"}return"rotate(0)"})),t.circles.attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y}))}))},update:function(t){var e=this;this.config=Object(i["a"])(Object(i["a"])({},this.config),t),this.simulation.nodes(this.config.nodes).force("link",s.forceLink(this.config.links).id((function(t){return t.id}))).alphaTarget(.2).restart(),setTimeout((function(){e.simulation.alphaTarget(0)}),200),this.setPatterns(),this.setEdges(),this.setCircles()},search:function(t,e){if(!t)return[];var n=[];return this.config.nodes.forEach((function(i){for(var s=0;s<e.length;s++){var r=e[s];if(i[r]&&i[r].indexOf(t)>-1)return void n.push(i)}})),n},highlighted:null,dependsNode:[],dependsLinkAndText:[],highlightObject:function(t){var e=this;if(t){var n=t.index;e.dependsNode=e.dependsNode.concat([n]),e.dependsLinkAndText=e.dependsLinkAndText.concat([n]),e.config.links.forEach((function(t){n==t["source"]["index"]?e.dependsNode=e.dependsNode.concat([t.target.index]):n==t["target"]["index"]&&(e.dependsNode=e.dependsNode.concat([t.source.index]))})),e.SVG.selectAll("circle").filter((function(t){return-1==e.dependsNode.indexOf(t.index)})).transition().style("opacity",.1),e.SVG.selectAll(".edge").filter((function(t){return-1==e.dependsLinkAndText.indexOf(t.source.index)&&-1==e.dependsLinkAndText.indexOf(t.target.index)})).transition().style("opacity",.1)}else e.SVG.selectAll("circle").transition().style("opacity",1),e.SVG.selectAll(".edge").transition().style("opacity",1),e.highlighted=null,e.dependsNode=[],e.dependsLinkAndText=[]}}}});