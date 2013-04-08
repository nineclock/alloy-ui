AUI.add("aui-tree-view",function(ad){var V=ad.Lang,at=V.isBoolean,ay=V.isString,au=ad.UA,r="boundingBox",e="children",a="container",aa="content",t="contentBox",T=".",aq="file",C="hitarea",R="icon",b="invalid",ah="label",P="lastSelected",aw="leaf",q="node",X="ownerTree",H="root",U="selectOnToggle",s=" ",g="tree",D="tree-node",N="tree-view",f="type",z="view",az=function(){return Array.prototype.slice.call(arguments).join(s);},am=function(A){return(A instanceof ad.TreeNode);},B=ad.getClassName,ap=B(g,C),y=B(g,R),j=B(g,ah),w=B(g,q,aa),u=B(g,q,aa,b),m=B(g,H,a),ai=B(g,z,aa);var Q=ad.Component.create({NAME:N,ATTRS:{type:{value:aq,validator:ay},lastSelected:{value:null,validator:am},lazyLoad:{validator:at,value:true},selectOnToggle:{validator:at,value:false}},AUGMENTS:[ad.TreeData,ad.TreeViewPaginator,ad.TreeViewIO],prototype:{CONTENT_TEMPLATE:"<ul></ul>",initializer:function(){var A=this;var L=A.get(r);L.setData(N,A);},bindUI:function(){var A=this;A.after("childrenChange",ad.bind(A._afterSetChildren,A));A._delegateDOM();},createNodes:function(L){var A=this;ad.Array.each(ad.Array(L),function(aC){var aB=A.createNode(aC);A.appendChild(aB);});A._syncPaginatorUI(L);},renderUI:function(){var A=this;A._renderElements();},_afterSetChildren:function(L){var A=this;A._syncPaginatorUI();},_createFromHTMLMarkup:function(L){var A=this;L.all("> li").each(function(aF){var aE=aF.one("> *").remove();var aD=aE.outerHTML();var aC=aF.one("> ul");var aG=new ad.TreeNode({boundingBox:aF,container:aC,label:aD,leaf:!aC,ownerTree:A});if(aC){aG.render();A._createFromHTMLMarkup(aC);}else{aG.render();}var aB=aF.get(d).get(d);var aH=aB.getData(D);if(!ad.instanceOf(aH,ad.TreeNode)){aH=aB.getData(N);}aH.appendChild(aG);});},_createNodeContainer:function(){var A=this;var L=A.get(t);A.set(a,L);return L;},_renderElements:function(){var A=this;var L=A.get(t);var aB=A.get(e);var aC=A.get(f);var aD=B(g,aC);L.addClass(ai);L.addClass(az(aD,m));if(!aB.length){A._createFromHTMLMarkup(L);}},_delegateDOM:function(){var A=this;var L=A.get(r);L.delegate("click",ad.bind(A._onClickNodeEl,A),T+w);L.delegate("dblclick",ad.bind(A._onClickHitArea,A),T+y);L.delegate("dblclick",ad.bind(A._onClickHitArea,A),T+j);L.delegate("mouseenter",ad.bind(A._onMouseEnterNodeEl,A),T+w);L.delegate("mouseleave",ad.bind(A._onMouseLeaveNodeEl,A),T+w);},_onClickNodeEl:function(L){var A=this;var aC=A.getNodeByChild(L.currentTarget);if(aC){if(L.target.test(T+ap)){if(aC.hasChildNodes()){aC.toggle();}if(!A.get(U)){return;}}if(!aC.isSelected()){var aB=A.get(P);if(aB){aB.unselect();}aC.select();}}},_onMouseEnterNodeEl:function(L){var A=this;var aB=A.getNodeByChild(L.currentTarget);if(aB){aB.over();}},_onMouseLeaveNodeEl:function(L){var A=this;var aB=A.getNodeByChild(L.currentTarget);if(aB){aB.out();}},_onClickHitArea:function(L){var A=this;var aB=A.getNodeByChild(L.currentTarget);if(aB){aB.toggle();}}}});ad.TreeView=Q;var M=V.isNumber,ae="above",c="append",ag="below",ao="block",aj="body",ax="clearfix",ac="default",v="display",al="down",x="drag",n="draggable",Z="dragCursor",ar="dragNode",i="expanded",o="helper",av="insert",F="offsetHeight",d="parentNode",aA="scrollDelay",O="state",ak="tree-drag-drop",an="up",K=ad.DD.DDM,af=B(o,ax),k=B(R),ab=B(g,x,o),p=B(g,x,o,aa),J=B(g,x,o,ah),G=B(g,x,av,ae),Y=B(g,x,av,c),I=B(g,x,av,ag),l=B(g,x,O,c),S=B(g,x,O,av,ae),W=B(g,x,O,av,ag),E='<div class="'+ab+'">'+'<div class="'+[p,af].join(s)+'">'+'<span class="'+k+'"></span>'+'<span class="'+J+'"></span>'+"</div>"+"</div>";var h=ad.Component.create({NAME:ak,ATTRS:{helper:{value:null},scrollDelay:{value:100,validator:M}},EXTENDS:ad.TreeView,prototype:{direction:ag,dropAction:null,lastY:0,node:null,nodeContent:null,destructor:function(){var A=this;var L=A.get(o);if(L){L.remove(true);}if(A.ddDelegate){A.ddDelegate.destroy();}},bindUI:function(){var A=this;ad.TreeViewDD.superclass.bindUI.apply(this,arguments);A._bindDragDrop();},renderUI:function(){var A=this;ad.TreeViewDD.superclass.renderUI.apply(this,arguments);var L=ad.Node.create(E).hide();ad.one(aj).append(L);A.set(o,L);K.set(Z,ac);},_bindDragDrop:function(){var A=this,aB=A.get(r),L=null;A._createDragInitHandler=function(){A.ddDelegate=new ad.DD.Delegate({bubbleTargets:A,container:aB,invalid:T+u,nodes:T+w,target:true});var aC=A.ddDelegate.dd;aC.plug(ad.Plugin.DDProxy,{moveOnEnd:false,positionProxy:false,borderStyle:null}).plug(ad.Plugin.DDNodeScroll,{scrollDelay:A.get(aA),node:aB});aC.removeInvalid("a");if(L){L.detach();}};if(!au.touch){L=aB.on(["focus","mousedown","mousemove"],A._createDragInitHandler);}else{A._createDragInitHandler();}A.on("drag:align",A._onDragAlign);A.on("drag:start",A._onDragStart);A.on("drop:exit",A._onDropExit);A.after("drop:hit",A._afterDropHit);A.on("drop:hit",A._onDropHit);A.on("drop:over",A._onDropOver);},_appendState:function(L){var A=this;A.dropAction=c;A.get(o).addClass(l);L.addClass(Y);},_goingDownState:function(L){var A=this;A.dropAction=ag;A.get(o).addClass(W);L.addClass(I);},_goingUpState:function(L){var A=this;A.dropAction=ae;A.get(o).addClass(S);L.addClass(G);},_resetState:function(L){var A=this;var aB=A.get(o);aB.removeClass(l);aB.removeClass(S);aB.removeClass(W);if(L){L.removeClass(G);L.removeClass(Y);L.removeClass(I);}},_updateNodeState:function(A){var aK=this;var aG=A.drag;var aD=A.drop;var L=aD.get(q);var aJ=L.get(d);var aF=aG.get(q).get(d);var aC=aJ.getData(D);aK._resetState(aK.nodeContent);if(!aF.contains(aJ)){var aL=L.get(F)/3;var aB=L.getY();var aI=aB+aL;var aH=aB+aL*2;var aE=aG.mouseXY[1];if((aE>aB)&&(aE<aI)){aK._goingUpState(L);}else{if(aE>aH){aK._goingDownState(L);}else{if((aE>aI)&&(aE<aH)){if(aC&&!aC.isLeaf()){aK._appendState(L);}else{if(aK.direction===an){aK._goingUpState(L);}else{aK._goingDownState(L);}}}}}}aK.nodeContent=L;},_afterDropHit:function(aD){var A=this;var aF=A.dropAction;var aE=aD.drag.get(q).get(d);var aB=aD.drop.get(q).get(d);var aG=aB.getData(D);var aC=aE.getData(D);var L=A.getEventOutputMap(A);L.tree.dropNode=aG;L.tree.dragNode=aC;if(aF===ae){aG.insertBefore(aC);A.bubbleEvent("dropInsert",L);
}else{if(aF===ag){aG.insertAfter(aC);A.bubbleEvent("dropInsert",L);}else{if(aF===c){if(aG&&!aG.isLeaf()){aG.appendChild(aC);if(!aG.get(i)){aG.expand();}A.bubbleEvent("dropAppend",L);}}}}A._resetState(A.nodeContent);A.bubbleEvent("drop",L);A.dropAction=null;},_onDragAlign:function(aB){var A=this;var L=A.lastY;var aC=aB.target.lastXY[1];if(aC!==L){A.direction=(aC<L)?an:al;}A.lastY=aC;},_onDragStart:function(aE){var A=this;var aC=aE.target;var aG=aC.get(q).get(d);var aB=aG.getData(D);var aF=A.get(P);if(aF){aF.unselect();}aB.select();var aD=A.get(o);var L=aD.one(T+J);aD.setStyle(v,ao).show();L.html(aB.get(ah));aC.set(ar,aD);},_onDropOver:function(L){var A=this;A._updateNodeState(L);},_onDropHit:function(L){var A=L.drop.get(q).get(d);var aB=A.getData(D);if(!am(aB)){L.preventDefault();}},_onDropExit:function(){var A=this;A.dropAction=null;A._resetState(A.nodeContent);}}});ad.TreeViewDD=h;},"@VERSION@",{skinnable:true,requires:["aui-tree-node","aui-tree-paginator","aui-tree-io","dd-delegate","dd-proxy"]});