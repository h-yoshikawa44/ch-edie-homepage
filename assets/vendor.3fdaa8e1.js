var T=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};(function(v,c){(function(h,l){l()})(T,function(){function h(d){var y=!0,m=!1,g=null,N={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(r){return!!(r&&r!==document&&r.nodeName!=="HTML"&&r.nodeName!=="BODY"&&"classList"in r&&"contains"in r.classList)}function t(r){var L=r.type,p=r.tagName;return!!(p==="INPUT"&&N[L]&&!r.readOnly||p==="TEXTAREA"&&!r.readOnly||r.isContentEditable)}function e(r){r.classList.contains("focus-visible")||(r.classList.add("focus-visible"),r.setAttribute("data-focus-visible-added",""))}function n(r){!r.hasAttribute("data-focus-visible-added")||(r.classList.remove("focus-visible"),r.removeAttribute("data-focus-visible-added"))}function i(r){r.metaKey||r.altKey||r.ctrlKey||(s(d.activeElement)&&e(d.activeElement),y=!0)}function o(r){y=!1}function f(r){!s(r.target)||(y||t(r.target))&&e(r.target)}function u(r){!s(r.target)||(r.target.classList.contains("focus-visible")||r.target.hasAttribute("data-focus-visible-added"))&&(m=!0,window.clearTimeout(g),g=window.setTimeout(function(){m=!1},100),n(r.target))}function b(r){document.visibilityState==="hidden"&&(m&&(y=!0),_())}function _(){document.addEventListener("mousemove",a),document.addEventListener("mousedown",a),document.addEventListener("mouseup",a),document.addEventListener("pointermove",a),document.addEventListener("pointerdown",a),document.addEventListener("pointerup",a),document.addEventListener("touchmove",a),document.addEventListener("touchstart",a),document.addEventListener("touchend",a)}function E(){document.removeEventListener("mousemove",a),document.removeEventListener("mousedown",a),document.removeEventListener("mouseup",a),document.removeEventListener("pointermove",a),document.removeEventListener("pointerdown",a),document.removeEventListener("pointerup",a),document.removeEventListener("touchmove",a),document.removeEventListener("touchstart",a),document.removeEventListener("touchend",a)}function a(r){r.target.nodeName&&r.target.nodeName.toLowerCase()==="html"||(y=!1,E())}document.addEventListener("keydown",i,!0),document.addEventListener("mousedown",o,!0),document.addEventListener("pointerdown",o,!0),document.addEventListener("touchstart",o,!0),document.addEventListener("visibilitychange",b,!0),_(),d.addEventListener("focus",f,!0),d.addEventListener("blur",u,!0),d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host?d.host.setAttribute("data-js-focus-visible",""):d.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if(typeof window!="undefined"&&typeof document!="undefined"){window.applyFocusVisiblePolyfill=h;var l;try{l=new CustomEvent("focus-visible-polyfill-ready")}catch{l=document.createEvent("CustomEvent"),l.initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(l)}typeof document!="undefined"&&h(document)})})();var w=function(){function v(c,h){for(var l=0;l<h.length;l++){var d=h[l];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(c,d.key,d)}}return function(c,h,l){return h&&v(c.prototype,h),l&&v(c,l),c}}();function I(v,c){if(!(v instanceof c))throw new TypeError("Cannot call a class as a function")}(function(){if(typeof window=="undefined")return;var v=Array.prototype.slice,c=Element.prototype.matches||Element.prototype.msMatchesSelector,h=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),l=function(){function s(t,e){I(this,s),this._inertManager=e,this._rootElement=t,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}return w(s,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(this._savedAriaHidden!==null?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach(function(e){this._unmanageNode(e.node)},this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(e){var n=this;m(e,function(u){return n._visitNode(u)});var i=document.activeElement;if(!document.body.contains(e)){for(var o=e,f=void 0;o;){if(o.nodeType===Node.DOCUMENT_FRAGMENT_NODE){f=o;break}o=o.parentNode}f&&(i=f.activeElement)}e.contains(i)&&(i.blur(),i===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(e){if(e.nodeType===Node.ELEMENT_NODE){var n=e;n!==this._rootElement&&n.hasAttribute("inert")&&this._adoptInertRoot(n),(c.call(n,h)||n.hasAttribute("tabindex"))&&this._manageNode(n)}}},{key:"_manageNode",value:function(e){var n=this._inertManager.register(e,this);this._managedNodes.add(n)}},{key:"_unmanageNode",value:function(e){var n=this._inertManager.deregister(e,this);n&&this._managedNodes.delete(n)}},{key:"_unmanageSubtree",value:function(e){var n=this;m(e,function(i){return n._unmanageNode(i)})}},{key:"_adoptInertRoot",value:function(e){var n=this._inertManager.getInertRoot(e);n||(this._inertManager.setInert(e,!0),n=this._inertManager.getInertRoot(e)),n.managedNodes.forEach(function(i){this._manageNode(i.node)},this)}},{key:"_onMutation",value:function(e,n){e.forEach(function(i){var o=i.target;if(i.type==="childList")v.call(i.addedNodes).forEach(function(u){this._makeSubtreeUnfocusable(u)},this),v.call(i.removedNodes).forEach(function(u){this._unmanageSubtree(u)},this);else if(i.type==="attributes"){if(i.attributeName==="tabindex")this._manageNode(o);else if(o!==this._rootElement&&i.attributeName==="inert"&&o.hasAttribute("inert")){this._adoptInertRoot(o);var f=this._inertManager.getInertRoot(o);this._managedNodes.forEach(function(u){o.contains(u.node)&&f._manageNode(u.node)})}}},this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return this._savedAriaHidden!==null}},{key:"savedAriaHidden",set:function(e){this._savedAriaHidden=e},get:function(){return this._savedAriaHidden}}]),s}(),d=function(){function s(t,e){I(this,s),this._node=t,this._overrodeFocusMethod=!1,this._inertRoots=new Set([e]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}return w(s,[{key:"destructor",value:function(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){var e=this._node;this._savedTabIndex!==null?e.setAttribute("tabindex",this._savedTabIndex):e.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete e.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){if(this.node.nodeType===Node.ELEMENT_NODE){var e=this.node;if(c.call(e,h)){if(e.tabIndex===-1&&this.hasSavedTabIndex)return;e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex),e.setAttribute("tabindex","-1"),e.nodeType===Node.ELEMENT_NODE&&(e.focus=function(){},this._overrodeFocusMethod=!0)}else e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex,e.removeAttribute("tabindex"))}}},{key:"addInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.add(e)}},{key:"removeInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.delete(e),this._inertRoots.size===0&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return this._savedTabIndex!==null}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(e){this._throwIfDestroyed(),this._savedTabIndex=e},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),s}(),y=function(){function s(t){if(I(this,s),!t)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=t,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),g(t.head||t.body||t.documentElement),t.readyState==="loading"?t.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}return w(s,[{key:"setInert",value:function(e,n){if(n){if(this._inertRoots.has(e))return;var i=new l(e,this);if(e.setAttribute("inert",""),this._inertRoots.set(e,i),!this._document.body.contains(e))for(var o=e.parentNode;o;)o.nodeType===11&&g(o),o=o.parentNode}else{if(!this._inertRoots.has(e))return;var f=this._inertRoots.get(e);f.destructor(),this._inertRoots.delete(e),e.removeAttribute("inert")}}},{key:"getInertRoot",value:function(e){return this._inertRoots.get(e)}},{key:"register",value:function(e,n){var i=this._managedNodes.get(e);return i!==void 0?i.addInertRoot(n):i=new d(e,n),this._managedNodes.set(e,i),i}},{key:"deregister",value:function(e,n){var i=this._managedNodes.get(e);return i?(i.removeInertRoot(n),i.destroyed&&this._managedNodes.delete(e),i):null}},{key:"_onDocumentLoaded",value:function(){var e=v.call(this._document.querySelectorAll("[inert]"));e.forEach(function(n){this.setInert(n,!0)},this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(e,n){var i=this;e.forEach(function(o){switch(o.type){case"childList":v.call(o.addedNodes).forEach(function(b){if(b.nodeType===Node.ELEMENT_NODE){var _=v.call(b.querySelectorAll("[inert]"));c.call(b,"[inert]")&&_.unshift(b),_.forEach(function(E){this.setInert(E,!0)},i)}},i);break;case"attributes":if(o.attributeName!=="inert")return;var f=o.target,u=f.hasAttribute("inert");i.setInert(f,u);break}},this)}}]),s}();function m(s,t,e){if(s.nodeType==Node.ELEMENT_NODE){var n=s;t&&t(n);var i=n.shadowRoot;if(i){m(i,t);return}if(n.localName=="content"){for(var o=n,f=o.getDistributedNodes?o.getDistributedNodes():[],u=0;u<f.length;u++)m(f[u],t);return}if(n.localName=="slot"){for(var b=n,_=b.assignedNodes?b.assignedNodes({flatten:!0}):[],E=0;E<_.length;E++)m(_[E],t);return}}for(var a=s.firstChild;a!=null;)m(a,t),a=a.nextSibling}function g(s){if(!s.querySelector("style#inert-style, link#inert-style")){var t=document.createElement("style");t.setAttribute("id","inert-style"),t.textContent=`
[inert] {
  pointer-events: none;
  cursor: default;
}

[inert], [inert] * {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`,s.appendChild(t)}}if(!Element.prototype.hasOwnProperty("inert")){var N=new y(document);Object.defineProperty(Element.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(t){N.setInert(this,t)}})}})();
