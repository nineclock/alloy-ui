AUI.add("aui-tree-node",function(ag){var V=ag.Lang,aJ=V.isString,aA=V.isBoolean,aS="alwaysShowHitArea",R="",t="boundingBox",g="children",aF="clearfix",y="collapsed",a="container",ae="content",w="contentBox",n="draggable",j="expanded",q="helper",Y="hidden",f="hitAreaEl",K="hitarea",W="icon",aR="iconEl",c="invalid",au="id",al="label",Z="labelEl",U="lastSelected",aE="leaf",r="node",an="over",ab="ownerTree",e="parentNode",ay="radio",aP="rendered",aD="selected",u=" ",h="tree",L="tree-node",aN=function(){return Array.prototype.slice.call(arguments).join(u);},aq=function(A){return(A instanceof ag.TreeNode);},aL=function(A){return(A instanceof ag.TreeView);},J=ag.getClassName,ai=J(q,aF),C=J(h,y),b=J(h,a),az=J(h,w),aT=J(h,j),v=J(h,Y),av=J(h,K),I=J(h,W),k=J(h,al),aB=J(h,r),H=J(h,r,ae),D=J(h,r,ae,c),aw=J(h,r,Y,K),i=J(h,r,aE),aI=J(h,r,an),M=J(h,r,aD),af='<div class="'+av+'"></div>',s='<div class="'+I+'"></div>',d='<div class="'+k+'"></div>',aQ="<ul></ul>",x='<li class="'+aB+'"></li>',ac='<div class="'+aN(ai,H)+'"></div>';var P=ag.Component.create({NAME:L,ATTRS:{alwaysShowHitArea:{validator:aA,value:true},boundingBox:{valueFn:function(){return ag.Node.create(x);}},contentBox:{valueFn:function(){return ag.Node.create(ac);}},draggable:{validator:aA,value:true},expanded:{validator:aA,value:false},hitAreaEl:{setter:ag.one,valueFn:function(){return ag.Node.create(af);}},iconEl:{setter:ag.one,valueFn:function(){return ag.Node.create(s);}},id:{validator:aJ,valueFn:function(){return ag.guid();}},label:{validator:aJ,value:R},labelEl:{setter:ag.one,valueFn:function(){var A=this;var aW=A.get(al);return ag.Node.create(d).html(aW).unselectable();}},leaf:{setter:function(aW){var A=this;if(aW&&A.get(g).length){return false;}return aW;},validator:aA,value:true},nextSibling:{getter:"_getSibling",validator:aq,value:null},ownerTree:{value:null},parentNode:{validator:function(A){return aq(A)||aL(A);},value:null},prevSibling:{getter:"_getSibling",validator:aq,value:null},rendered:{validator:aA,value:false},tabIndex:{value:null}},AUGMENTS:[ag.TreeData],EXTENDS:ag.Base,prototype:{BOUNDING_TEMPLATE:x,CONTENT_TEMPLATE:ac,initializer:function(){var A=this;A.get(t).setData(L,A);A._syncTreeNodeBBId();A._uiSetDraggable(A.get(n));A._uiSetExpanded(A.get(j));A._uiSetLeaf(A.get(aE));},bindUI:function(){var A=this;A.after("childrenChange",ag.bind(A._afterSetChildren,A));A.after("draggableChange",ag.bind(A._afterDraggableChange,A));A.after("expandedChange",ag.bind(A._afterExpandedChange,A));A.after("idChange",A._afterSetId,A);A.after("leafChange",ag.bind(A._afterLeafChange,A));},render:function(aX){var aW=this;if(!aW.get(aP)){aW.renderUI();aW.bindUI();aW.syncUI();aW.set(aP,true);}if(aX){var aY=aW.get(t);var A=aW.get(e);aY.appendTo(aX);if(A){var aZ=A.get(ak);if(aZ){aY.insertBefore(aZ.element,null);}}}},renderUI:function(){var A=this;A._renderBoundingBox();A._renderContentBox();},syncUI:function(){var A=this;A._syncHitArea(A.get(g));},appendChild:function(){var A=this;if(!A.isLeaf()){ag.TreeNode.superclass.appendChild.apply(A,arguments);}},collapse:function(){var A=this;A.set(j,false);},collapseAll:function(){var A=this;ag.TreeNode.superclass.collapseAll.apply(A,arguments);A.collapse();},contains:function(aW){var A=this;return aW.isAncestor(A);},expand:function(){var A=this;A.set(j,true);},expandAll:function(){var A=this;ag.TreeNode.superclass.expandAll.apply(A,arguments);A.expand();},getDepth:function(){var aW=this;var aX=0;var A=aW.get(e);while(A){++aX;A=A.get(e);}return aX;},hasChildNodes:function(){var A=this;return(!A.isLeaf()&&ag.TreeNode.superclass.hasChildNodes.apply(A,arguments));},hideHitArea:function(){var A=this;A.get(f).addClass(aw);},isAncestor:function(aX){var aW=this;var A=aW.get(e);while(A){if(A===aX){return true;}A=A.get(e);}return false;},isLeaf:function(){var A=this;return A.get(aE);},isSelected:function(){var A=this;return A.get(w).hasClass(M);},out:function(){var A=this;A.get(w).removeClass(aI);},over:function(){var A=this;A.get(w).addClass(aI);},toggle:function(){var A=this;if(A.get(j)){A.collapse();}else{A.expand();}},select:function(){var A=this;var aW=A.get(ab);if(aW){aW.set(U,A);}A.get(w).addClass(M);A.fire("select");},showHitArea:function(){var A=this;A.get(f).removeClass(aw);},unselect:function(){var A=this;A.get(w).removeClass(M);A.fire("unselect");},_afterDraggableChange:function(aW){var A=this;A._uiSetDraggable(aW.newVal);},_afterExpandedChange:function(aW){var A=this;A._uiSetExpanded(aW.newVal);},_afterLeafChange:function(aW){var A=this;A._uiSetLeaf(aW.newVal);},_afterSetChildren:function(aW){var A=this;A._syncHitArea(aW.newVal);},_createNodeContainer:function(){var A=this;var aW=A.get(a)||ag.Node.create(aQ);aW.addClass(b);A.set(a,aW);return aW;},_getSibling:function(aZ,aW){var A=this;var aY="_"+aW;var aX=A[aY];if(aX!==null&&!aq(aX)){aX=null;A[aY]=aX;}return aX;},_renderBoundingBox:function(){var A=this;var aX=A.get(t);var aW=A.get(w);aW.append(A.get(aR));aW.append(A.get(Z));aX.append(aW);var aY=A.get(a);if(aY){if(!A.get(j)){aY.addClass(v);}aX.append(aY);}return aX;},_renderContentBox:function(aY){var A=this;var aW=A.get(w);if(!A.isLeaf()){var aX=A.get(j);aW.addClass(aX?aT:C);if(aX){A.expand();}}return aW;},_syncHitArea:function(aW){var A=this;if(A.get(aS)||aW.length){A.showHitArea();}else{A.hideHitArea();A.collapse();}},_syncTreeNodeBBId:function(aW){var A=this;A.get(t).attr(au,A.get(au));},_uiSetDraggable:function(aW){var A=this;A.get(w).toggleClass(D,!aW);},_uiSetExpanded:function(aY){var A=this;if(!A.isLeaf()){var aX=A.get(a);var aW=A.get(w);if(aY){aW.replaceClass(C,aT);if(aX){aX.removeClass(v);}}else{aW.replaceClass(aT,C);if(aX){aX.addClass(v);}}}},_uiSetLeaf:function(aX){var A=this;var aW=A.get(w);if(aX){A.get(a).remove();A.get(f).remove();}else{aW.prepend(A.get(f));A._createNodeContainer();A._uiSetExpanded(A.get(j));}aW.toggleClass(i,aX);}}});ag.TreeNode=P;var ax=V.isFunction,aK="cache",am="io",aO="loaded",aU="loading",ak="paginator",at="tree-node-io",B=J(h,r,am,aU);var O=ag.Component.create({NAME:at,ATTRS:{cache:{validator:aA,value:true},leaf:{validator:aA,value:false},loaded:{validator:aA,value:false},loading:{validator:aA,value:false}},AUGMENTS:[ag.TreeViewPaginator,ag.TreeViewIO],EXTENDS:ag.TreeNode,prototype:{bindUI:function(){var A=this;
ag.TreeNodeIO.superclass.bindUI.apply(A,arguments);A.on("ioRequestSuccess",A._onIOSuccess,A);},syncUI:function(){var A=this;ag.TreeNodeIO.superclass.syncUI.apply(A,arguments);},createNodes:function(aW){var A=this;ag.Array.each(ag.Array(aW),function(aX){A.appendChild(A.createNode(aX));});A._syncPaginatorUI(aW);},expand:function(){var A=this;var aW=A.get(aK);var aZ=A.get(am);var aX=A.get(aO);var aY=A.get(aU);if(!aW){A.set(aO,false);}if(aZ&&!aX&&!aY&&!A.hasChildNodes()){if(!aW){A.empty();}A.initIO();}else{ag.TreeNodeIO.superclass.expand.apply(A,arguments);}},_inheritOwnerTreeAttrs:function(){var A=this;var aW=A.get(ab);if(aW){if(!A.get(am)){var aZ=ag.clone(aW.get(am),true,function(a1,a0){if(ax(a1)&&(a1.defaultFn||a1.wrappedFn)){return false;}return true;});A.set(am,aZ);}if(!A.get(ak)){var aX=aW.get(ak);var aY=ag.clone(aX);if(aY&&aY.element){aY.element=aX.element.clone();}A.set(ak,aY);}}},_onIOSuccess:function(aW){var A=this;A.expand();}}});ag.TreeNodeIO=O;var l="checkbox",p="checked",ad="checkContainerEl",aG="checkEl",Q="checkName",aa=".",m="name",E="tree-node-check",aj=J(h,r,l),ap=J(h,r,l,a),ar=J(h,r,p),T='<div class="'+ap+'"></div>',ao='<input class="'+aj+'" type="checkbox" />';var aC=ag.Component.create({NAME:E,ATTRS:{checked:{validator:aA,value:false},checkContainerEl:{setter:ag.one,valueFn:function(){return ag.Node.create(T);}},checkEl:{setter:ag.one,valueFn:function(){var A=this;var aY=A.get(Q);var aZ=A.get(au);var aX=aZ+"Checkbox";var aW={ID:aX,NAME:aY};return ag.Node.create(ao).attr(aW);}},checkName:{validator:aJ,value:E}},EXTENDS:ag.TreeNodeIO,prototype:{initializer:function(){var A=this;A._uiSetChecked(A.get(p));},renderUI:function(){var aW=this;ag.TreeNodeCheck.superclass.renderUI.apply(aW,arguments);var A=aW.get(aG);var aX=aW.get(ad);A.hide();aX.append(A);aW.get(Z).placeBefore(aX);if(aW.isChecked()){aW.check();}},bindUI:function(){var A=this;var aW=A.get(w);ag.TreeNodeCheck.superclass.bindUI.apply(A,arguments);A.after("checkedChange",ag.bind(A._afterCheckedChange,A));aW.delegate("click",ag.bind(A.toggleCheck,A),aa+ap);aW.delegate("click",ag.bind(A.toggleCheck,A),aa+k);A.get(Z).swallowEvent("dblclick");},check:function(aW){var A=this;A.set(p,true,{originalTarget:aW});},isChecked:function(){var A=this;return A.get(p);},toggleCheck:function(){var A=this;var aW=A.get(aG).attr(p);if(!aW){A.check();}else{A.uncheck();}},uncheck:function(aW){var A=this;A.set(p,false,{originalTarget:aW});},_afterCheckedChange:function(aW){var A=this;A._uiSetChecked(aW.newVal);},_uiSetChecked:function(aY){var aW=this;var A=aW.get(aG);var aX=aW.get(w);if(aY){aX.addClass(ar);A.attr(p,p);}else{aX.removeClass(ar);A.attr(p,R);}}}});ag.TreeNodeCheck=aC;var F="child",S="tree-node-task",N="unchecked",aH=function(A){return A instanceof ag.TreeNodeCheck;},ah=J(h,r,F,N);var aV=ag.Component.create({NAME:S,EXTENDS:ag.TreeNodeCheck,prototype:{check:function(aW){var A=this;aW=aW||A;if(!A.isLeaf()){A.eachChildren(function(aX){if(aH(aX)){aX.check(aW);}});}A.eachParent(function(aX){if(aH(aX)&&!aX.isChecked()){aX.get(w).addClass(ah);}});A.get(w).removeClass(ah);ag.TreeNodeTask.superclass.check.call(A,aW);},uncheck:function(aW){var A=this;aW=aW||A;if(!A.isLeaf()){A.eachChildren(function(aX){if(aX instanceof ag.TreeNodeCheck){aX.uncheck(aW);}});}A.eachParent(function(aX){if(aH(aX)&&!aX.isChecked()){aX.get(w).removeClass(ah);}});A.get(w).removeClass(ah);ag.TreeNodeTask.superclass.uncheck.call(A,aW);}}});ag.TreeNodeTask=aV;var G="tree-node-radio",o=function(A){return A instanceof ag.TreeNodeRadio;},z=J(h,r,ay),X=J(h,r,ay,p);var aM=ag.Component.create({NAME:G,EXTENDS:ag.TreeNodeTask,prototype:{renderUI:function(){var A=this;ag.TreeNodeRadio.superclass.renderUI.apply(A,arguments);A.get(w).addClass(z);},check:function(){var A=this;A._uncheckNodesRadio();ag.TreeNodeRadio.superclass.check.apply(A,arguments);},_uncheckNodesRadio:function(aY){var A=this;var aX;if(aY){aX=aY.get(g);}else{var aW=A.get(ab);if(aW){aX=aW.get(g);}else{return;}}ag.Array.each(aX,function(a0,aZ,a1){if(!a0.isLeaf()){A._uncheckNodesRadio(a0);}if(o(a0)){a0.uncheck();}});},_uiSetChecked:function(aY){var aW=this;var A=aW.get(aG);var aX=aW.get(w);if(aY){aX.addClass(X);A.attr(p,p);}else{aX.removeClass(X);A.attr(p,R);}}}});ag.TreeNodeRadio=aM;ag.TreeNode.nodeTypes={check:ag.TreeNodeCheck,io:ag.TreeNodeIO,node:ag.TreeNode,radio:ag.TreeNodeRadio,task:ag.TreeNodeTask};},"@VERSION@",{skinnable:false,requires:["aui-tree-data","aui-tree-io","aui-tree-paginator","json","querystring-stringify"]});