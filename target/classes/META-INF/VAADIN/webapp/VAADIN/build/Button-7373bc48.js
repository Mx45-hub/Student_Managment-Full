var $i=Object.defineProperty;var Fi=(r,t,e)=>t in r?$i(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var _=(r,t,e)=>(Fi(r,typeof t!="symbol"?t+"":t,e),e),At=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var k=(r,t,e)=>(At(r,t,"read from private field"),e?e.call(r):t.get(r)),$=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},Se=(r,t,e,o)=>(At(r,t,"write to private field"),o?o.call(r,e):t.set(r,e),e);var Z=(r,t,e)=>(At(r,t,"access private method"),e);import{h as ve,G as Pi,k as Ui,S as Un,C as zn,a as Hn,Y as Wn,b as zi,Z as Hi,x as se,_ as Wi,$ as Xi,a0 as Ji,a1 as Gi,a2 as Ki,a3 as Qi,a4 as Zi,a5 as ji,a6 as Yi,r as Be,i as le,T as Xn,l as Jn,d as qi,P as Gn,X as Kn,f as er,D as tr,t as nr,u as ir,E as rr,w as Qn,R as Zn,a7 as or}from"./indexhtml-65f00b2e.js";/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ar=ve(r=>class extends Pi(Ui(r)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){!this.focusElement||this.disabled||(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,o){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):o&&this._removeFocusListeners(o)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_shouldRemoveFocus(e){return e.target===this.focusElement}_disabledChanged(e,o){super._disabledChanged(e,o),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){e!==void 0&&this.focusElement&&(this.focusElement.tabIndex=e,e!==-1&&(this.tabindex=void 0)),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sr=ve(r=>class extends r{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(e=>{this._delegateAttribute(e,this[e])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(e=>{this._delegateProperty(e,this[e])})}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach((o,s)=>{this._delegateAttribute(o,e[s])})}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach((o,s)=>{this._delegateProperty(o,e[s])})}_delegateAttribute(e,o){this.stateTarget&&(e==="invalid"&&this._delegateAttribute("aria-invalid",o?"true":!1),typeof o=="boolean"?this.stateTarget.toggleAttribute(e,o):o?this.stateTarget.setAttribute(e,o):this.stateTarget.removeAttribute(e))}_delegateProperty(e,o){this.stateTarget&&(this.stateTarget[e]=o)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jn=ve(r=>class extends r{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=e)}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this._inputElementValue=e??"")}_inputElementChanged(e,o){e?this._addInputListeners(e):o&&this._removeInputListeners(o)}_hasInputValueChanged(e,o){(e||o)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(e){this._setHasInputValue(e),this._onInput(e)}_onInput(e){const o=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=o.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,o){this._toggleHasValue(this._hasValue),!(e===""&&o===void 0)&&(this.__userInput||this._forwardInputValue(e))}_setHasInputValue(e){const o=e.composedPath()[0];this._hasInputValue=o.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class lr extends Un{constructor(t,e){super(t,"input","input",{initializer:(o,s)=>{s.value&&(o.value=s.value),s.type&&o.setAttribute("type",s.type),o.id=this.defaultId,typeof e=="function"&&e(o)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Kt extends Un{constructor(t,e,o,s={}){super(t,e,o,{...s,useUniqueId:!0})}initCustomNode(t){this.__updateNodeId(t),this.__notifyChange(t)}teardownNode(t){const e=this.getSlotChild();e&&e!==this.defaultNode?this.__notifyChange(e):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const t=super.attachDefaultNode();return t&&this.__updateNodeId(t),t}restoreDefaultNode(){}updateDefaultNode(t){this.__notifyChange(t)}observeNode(t){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(e=>{e.forEach(o=>{const s=o.target,c=s===this.node;o.type==="attributes"?c&&this.__updateNodeId(s):(c||s.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(t){return t?t.nodeType===Node.ELEMENT_NODE&&(customElements.get(t.localName)||t.children.length>0)||t.textContent&&t.textContent.trim()!=="":!1}__notifyChange(t){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(t),node:t}}))}__updateNodeId(t){const e=!this.nodes||t===this.nodes[0];t.nodeType===Node.ELEMENT_NODE&&(!this.multiple||e)&&!t.id&&(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class dr extends Kt{constructor(t){super(t,"label","label")}setLabel(t){this.label=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:t}=this;if(t&&t.trim()!==""){const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(t){t&&(t.textContent=this.label),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cr=ve(r=>class extends zn(r){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new dr(this),this._labelController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-label",e.detail.hasContent)})}get _labelId(){const e=this._labelNode;return e&&e.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ur{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("slot-content-changed",o=>{this.__initLabel(o.detail.node)}),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Zo(r){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(r);return}r.querySelector("template")&&console.warn(`WARNING: <template> inside <${r.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ot=new Map;function Qt(r){return Ot.has(r)||Ot.set(r,new WeakMap),Ot.get(r)}function Yn(r,t){r&&r.removeAttribute(t)}function qn(r,t){if(!r||!t)return;const e=Qt(t);if(e.has(r))return;const o=Hi(r.getAttribute(t));e.set(r,new Set(o))}function hr(r,t){if(!r||!t)return;const e=Qt(t),o=e.get(r);!o||o.size===0?r.removeAttribute(t):Hn(r,t,Wn(o)),e.delete(r)}function Lt(r,t,e={newId:null,oldId:null,fromUser:!1}){if(!r||!t)return;const{newId:o,oldId:s,fromUser:c}=e,h=Qt(t),d=h.get(r);if(!c&&d){s&&d.delete(s),o&&d.add(o);return}c&&(d?o||h.delete(r):qn(r,t),Yn(r,t)),zi(r,t,s);const i=o||Wn(d);i&&Hn(r,t,i)}function fr(r,t){qn(r,t),Yn(r,t)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class pr{constructor(t){this.host=t,this.__required=!1}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),this.__labelIdFromUser!=null&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setAriaLabel(t){this.__setAriaLabelToAttribute(t),this.__label=t}setLabelId(t,e=!1){const o=e?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(t,o,e),e?this.__labelIdFromUser=t:this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}__setAriaLabelToAttribute(t){this.__target&&(t?(fr(this.__target,"aria-labelledby"),this.__target.setAttribute("aria-label",t)):this.__label&&(hr(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(t,e,o){Lt(this.__target,"aria-labelledby",{newId:t,oldId:e,fromUser:o})}__setErrorIdToAriaAttribute(t,e){Lt(this.__target,"aria-describedby",{newId:t,oldId:e,fromUser:!1})}__setHelperIdToAriaAttribute(t,e){Lt(this.__target,"aria-describedby",{newId:t,oldId:e,fromUser:!1})}__setAriaRequiredAttribute(t){this.__target&&(["input","textarea"].includes(this.__target.localName)||(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}}const mr=new Map;function gr(r,[t,...e]){return new Map(r).set(t,e)}function jo(r,t){const[e,o]=se.useReducer(gr,mr),s=se.useCallback((...c)=>o(c),[]);return r?[Array.from(e.entries()).map(([c,h])=>Wi.createPortal(t?se.createElement(r,t(h)):r,c)),s]:[]}/*! js-cookie v3.0.5 | MIT */function rt(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)r[o]=e[o]}return r}var vr={read:function(r){return r[0]==='"'&&(r=r.slice(1,-1)),r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(r){return encodeURIComponent(r).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function Wt(r,t){function e(s,c,h){if(!(typeof document>"u")){h=rt({},t,h),typeof h.expires=="number"&&(h.expires=new Date(Date.now()+h.expires*864e5)),h.expires&&(h.expires=h.expires.toUTCString()),s=encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var d="";for(var i in h)h[i]&&(d+="; "+i,h[i]!==!0&&(d+="="+h[i].split(";")[0]));return document.cookie=s+"="+r.write(c,s)+d}}function o(s){if(!(typeof document>"u"||arguments.length&&!s)){for(var c=document.cookie?document.cookie.split("; "):[],h={},d=0;d<c.length;d++){var i=c[d].split("="),l=i.slice(1).join("=");try{var p=decodeURIComponent(i[0]);if(h[p]=r.read(l,p),s===p)break}catch{}}return s?h[s]:h}}return Object.create({set:e,get:o,remove:function(s,c){e(s,"",rt({},c,{expires:-1}))},withAttributes:function(s){return Wt(this.converter,rt({},this.attributes,s))},withConverter:function(s){return Wt(rt({},this.converter,s),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(r)}})}var br=Wt(vr,{path:"/"});function yr({pathname:r}){return r.length>1&&r.endsWith("/")?r.slice(0,-1):r}const _r=br.withAttributes({path:yr(new URL(document.baseURI))});var ei=_r;const wr="X-CSRF-Token",Cr="csrfToken",xr="XSRF-TOKEN";function ti(r){if(r){const t=r.content;if(t&&t.toLowerCase()!=="undefined")return t}}function Sr(r){const t=r.head.querySelector('meta[name="_csrf_header"]');return ti(t)}function Er(r){const t=r.head.querySelector('meta[name="_csrf"]');return ti(t)}function Tr(r){const t=Sr(r);let e=ei.get(xr);(!e||e.length===0)&&(e=Er(r));const o={};return e&&t&&(o._csrf=e,o._csrf_header=t),o}function ni(r){const t={},e=Tr(r);return e._csrf&&e._csrf_header?t[e._csrf_header]=e._csrf:t[wr]=ei.get(Cr)??"",t}var Nt,M;(function(r){r.CONNECTED="connected",r.LOADING="loading",r.RECONNECTING="reconnecting",r.CONNECTION_LOST="connection-lost"})(M||(M={}));class kr{constructor(t){this.stateChangeListeners=new Set,this.loadingCount=0,this.connectionState=t,this.serviceWorkerMessageListener=this.serviceWorkerMessageListener.bind(this),navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this.serviceWorkerMessageListener),navigator.serviceWorker.ready.then(e=>{var o;(o=e==null?void 0:e.active)===null||o===void 0||o.postMessage({method:"Vaadin.ServiceWorker.isConnectionLost",id:"Vaadin.ServiceWorker.isConnectionLost"})}))}addStateChangeListener(t){this.stateChangeListeners.add(t)}removeStateChangeListener(t){this.stateChangeListeners.delete(t)}loadingStarted(){this.state=M.LOADING,this.loadingCount+=1}loadingFinished(){this.decreaseLoadingCount(M.CONNECTED)}loadingFailed(){this.decreaseLoadingCount(M.CONNECTION_LOST)}decreaseLoadingCount(t){this.loadingCount>0&&(this.loadingCount-=1,this.loadingCount===0&&(this.state=t))}get state(){return this.connectionState}set state(t){if(t!==this.connectionState){const e=this.connectionState;this.connectionState=t,this.loadingCount=0;for(const o of this.stateChangeListeners)o(e,this.connectionState)}}get online(){return this.connectionState===M.CONNECTED||this.connectionState===M.LOADING}get offline(){return!this.online}serviceWorkerMessageListener(t){typeof t.data=="object"&&t.data.id==="Vaadin.ServiceWorker.isConnectionLost"&&(t.data.result===!0&&(this.state=M.CONNECTION_LOST),navigator.serviceWorker.removeEventListener("message",this.serviceWorkerMessageListener))}}const Ir=r=>!!(r==="localhost"||r==="[::1]"||r.match(/^127\.\d+\.\d+\.\d+$/)),ot=window;if(!(!((Nt=ot.Vaadin)===null||Nt===void 0)&&Nt.connectionState)){let r;Ir(window.location.hostname)?r=!0:r=navigator.onLine,ot.Vaadin=ot.Vaadin||{},ot.Vaadin.connectionState=new kr(r?M.CONNECTED:M.CONNECTION_LOST)}function H(r,t,e,o){var s=arguments.length,c=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,t,e,o);else for(var d=r.length-1;d>=0;d--)(h=r[d])&&(c=(s<3?h(c):s>3?h(t,e,c):h(t,e))||c);return s>3&&c&&Object.defineProperty(t,e,c),c}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ar=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}},Or=(r,t,e)=>{t.constructor.createProperty(e,r)};function W(r){return(t,e)=>e!==void 0?Or(r,t,e):Ar(r,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Dt;((Dt=window.HTMLSlotElement)===null||Dt===void 0?void 0:Dt.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lr=Xi(class extends Ji{constructor(r){var t;if(super(r),r.type!==Gi.ATTRIBUTE||r.name!=="class"||((t=r.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var e,o;if(this.it===void 0){this.it=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(c=>c!=="")));for(const c in t)t[c]&&!(!((e=this.nt)===null||e===void 0)&&e.has(c))&&this.it.add(c);return this.render(t)}const s=r.element.classList;this.it.forEach(c=>{c in t||(s.remove(c),this.it.delete(c))});for(const c in t){const h=!!t[c];h===this.it.has(c)||!((o=this.nt)===null||o===void 0)&&o.has(c)||(h?(s.add(c),this.it.add(c)):(s.remove(c),this.it.delete(c)))}return Ki}}),Vt="css-loading-indicator";var j;(function(r){r.IDLE="",r.FIRST="first",r.SECOND="second",r.THIRD="third"})(j||(j={}));class L extends Qi{constructor(){super(),this.firstDelay=450,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState=j.IDLE,this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=M.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>{this.expanded=!1},this.expandedDuration)}}static create(){var t,e;const o=window;return!((t=o.Vaadin)===null||t===void 0)&&t.connectionIndicator||(o.Vaadin=o.Vaadin||{},o.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(o.Vaadin.connectionIndicator)),(e=o.Vaadin)===null||e===void 0?void 0:e.connectionIndicator}render(){return Zi`
      <div class="v-loading-indicator ${this.loadingBarState}" style=${this.getLoadingBarStyle()}></div>

      <div
        class="v-status-message ${Lr({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var t;super.connectedCallback();const e=window;!((t=e.Vaadin)===null||t===void 0)&&t.connectionState&&(this.connectionStateStore=e.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(t){t!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=t,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var t;const e=(t=this.connectionStateStore)===null||t===void 0?void 0:t.state;return this.offline=e===M.CONNECTION_LOST,this.reconnecting=e===M.RECONNECTING,this.updateLoading(e===M.LOADING),this.loading?!1:e!==this.lastMessageState?(this.lastMessageState=e,!0):!1}updateLoading(t){this.loading=t,this.loadingBarState=j.IDLE,this.firstTimeout=this.timeoutFor(this.firstTimeout,t,()=>{this.loadingBarState=j.FIRST},this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,t,()=>{this.loadingBarState=j.SECOND},this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,t,()=>{this.loadingBarState=j.THIRD},this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById(Vt)){const t=document.createElement("style");t.id=Vt,t.textContent=this.getDefaultStyle(),document.head.appendChild(t)}}else{const t=document.getElementById(Vt);t&&document.head.removeChild(t)}}getDefaultStyle(){return`
      @keyframes v-progress-start {
        0% {
          width: 0%;
        }
        100% {
          width: 50%;
        }
      }
      @keyframes v-progress-delay {
        0% {
          width: 50%;
        }
        100% {
          width: 90%;
        }
      }
      @keyframes v-progress-wait {
        0% {
          width: 90%;
          height: 4px;
        }
        3% {
          width: 91%;
          height: 7px;
        }
        100% {
          width: 96%;
          height: 7px;
        }
      }
      @keyframes v-progress-wait-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .v-loading-indicator,
      .v-status-message {
        position: fixed;
        z-index: 251;
        left: 0;
        right: auto;
        top: 0;
        background-color: var(--lumo-primary-color, var(--material-primary-color, blue));
        transition: none;
      }
      .v-loading-indicator {
        width: 50%;
        height: 4px;
        opacity: 1;
        pointer-events: none;
        animation: v-progress-start 1000ms 200ms both;
      }
      .v-loading-indicator[style*='none'] {
        display: block !important;
        width: 100%;
        opacity: 0;
        animation: none;
        transition: opacity 500ms 300ms, width 300ms;
      }
      .v-loading-indicator.second {
        width: 90%;
        animation: v-progress-delay 3.8s forwards;
      }
      .v-loading-indicator.third {
        width: 96%;
        animation: v-progress-wait 5s forwards, v-progress-wait-pulse 1s 4s infinite backwards;
      }

      vaadin-connection-indicator[offline] .v-loading-indicator,
      vaadin-connection-indicator[reconnecting] .v-loading-indicator {
        display: none;
      }

      .v-status-message {
        opacity: 0;
        width: 100%;
        max-height: var(--status-height-collapsed, 8px);
        overflow: hidden;
        background-color: var(--status-bg-color-online, var(--lumo-primary-color, var(--material-primary-color, blue)));
        color: var(
          --status-text-color-online,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1;
        transition: all 0.5s;
        padding: 0 0.5em;
      }

      vaadin-connection-indicator[offline] .v-status-message,
      vaadin-connection-indicator[reconnecting] .v-status-message {
        opacity: 1;
        background-color: var(--status-bg-color-offline, var(--lumo-shade, #333));
        color: var(
          --status-text-color-offline,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        background-image: repeating-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0) 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        );
      }

      vaadin-connection-indicator[reconnecting] .v-status-message {
        animation: show-reconnecting-status 2s;
      }

      vaadin-connection-indicator[offline] .v-status-message:hover,
      vaadin-connection-indicator[reconnecting] .v-status-message:hover,
      vaadin-connection-indicator[expanded] .v-status-message {
        max-height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[expanded] .v-status-message {
        opacity: 1;
      }

      .v-status-message span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[reconnecting] .v-status-message span::before {
        content: '';
        width: 1em;
        height: 1em;
        border-top: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-left: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation: v-spin 0.4s linear infinite;
        margin: 0 0.5em;
      }

      @keyframes v-spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `}getLoadingBarStyle(){switch(this.loadingBarState){case j.IDLE:return"display: none";case j.FIRST:case j.SECOND:case j.THIRD:return"display: block";default:return""}}timeoutFor(t,e,o,s){return t!==0&&window.clearTimeout(t),e?window.setTimeout(o,s):0}static get instance(){return L.create()}}H([W({type:Number})],L.prototype,"firstDelay",void 0);H([W({type:Number})],L.prototype,"secondDelay",void 0);H([W({type:Number})],L.prototype,"thirdDelay",void 0);H([W({type:Number})],L.prototype,"expandedDuration",void 0);H([W({type:String})],L.prototype,"onlineText",void 0);H([W({type:String})],L.prototype,"offlineText",void 0);H([W({type:String})],L.prototype,"reconnectingText",void 0);H([W({type:Boolean,reflect:!0})],L.prototype,"offline",void 0);H([W({type:Boolean,reflect:!0})],L.prototype,"reconnecting",void 0);H([W({type:Boolean,reflect:!0})],L.prototype,"expanded",void 0);H([W({type:Boolean,reflect:!0})],L.prototype,"loading",void 0);H([W({type:String})],L.prototype,"loadingBarState",void 0);H([W({type:Boolean})],L.prototype,"applyDefaultTheme",null);customElements.get("vaadin-connection-indicator")===void 0&&customElements.define("vaadin-connection-indicator",L);L.instance;const je=window;je.Vaadin=je.Vaadin||{};je.Vaadin.registrations=je.Vaadin.registrations||[];je.Vaadin.registrations.push({is:"@vaadin/common-frontend",version:"0.0.18"});let Zt=class extends Error{constructor(e,o,s){super(e);_(this,"detail");_(this,"type");this.type=o,this.detail=s}},ii=class extends Zt{constructor(e,o,s){super(e,s,o);_(this,"validationErrorData");_(this,"validationErrorMessage");this.validationErrorMessage=e,this.detail=null,this.validationErrorData=o}},jt=class extends Zt{constructor(e,o){super(e,"EndpointResponseError",o);_(this,"response");this.response=o}get status(){return this.response.status}},Nr=class extends jt{constructor(t,e){super(t,e),this.type="UnauthorizedResponseError"}},Dr=class extends jt{constructor(t,e){super(t,e),this.type="ForbiddenResponseError"}};var ri={exports:{}};(function(r,t){(function(e,o){r.exports=o()})(ji,function(){var e={},o=!1,s=[],c=[],h=0;return e={version:"3.1.3-javascript",onError:function(d){},onClose:function(d){},onOpen:function(d){},onReopen:function(d){},onMessage:function(d){},onReconnect:function(d,i){},onMessagePublished:function(d){},onTransportFailure:function(d,i){},onLocalMessage:function(d){},onFailureToReconnect:function(d,i){},onClientTimeout:function(d){},onOpenAfterResume:function(d){},WebsocketApiAdapter:function(d){var i,l;return d.onMessage=function(p){l.onmessage({data:p.responseBody})},d.onMessagePublished=function(p){l.onmessage({data:p.responseBody})},d.onOpen=function(p){l.onopen(p)},l={close:function(){i.close()},send:function(p){i.push(p)},onmessage:function(p){},onopen:function(p){},onclose:function(p){},onerror:function(p){}},i=new e.subscribe(d),l},AtmosphereRequest:function(d){var i={timeout:3e5,method:"GET",headers:{},contentType:"",callback:null,url:"",data:"",suspend:!0,maxRequest:-1,reconnect:!0,maxStreamingLength:1e7,lastIndex:0,logLevel:"info",requestCount:0,fallbackMethod:"GET",fallbackTransport:"streaming",transport:"long-polling",webSocketImpl:null,webSocketBinaryType:null,dispatchUrl:null,webSocketPathDelimiter:"@@",enableXDR:!1,rewriteURL:!1,attachHeadersAsQueryString:!0,executeCallbackBeforeReconnect:!1,readyState:0,withCredentials:!1,trackMessageLength:!1,messageDelimiter:"|",connectTimeout:-1,reconnectInterval:0,dropHeaders:!0,uuid:0,shared:!1,readResponsesHeaders:!1,maxReconnectOnClose:5,enableProtocol:!0,disableDisconnect:!1,pollingInterval:0,heartbeat:{client:null,server:null},ackInterval:0,reconnectOnServerError:!0,handleOnlineOffline:!0,maxWebsocketErrorRetries:1,curWebsocketErrorRetries:0,unloadBackwardCompat:!navigator.sendBeacon,onError:function(a){},onClose:function(a){},onOpen:function(a){},onMessage:function(a){},onReopen:function(a,n){},onReconnect:function(a,n){},onMessagePublished:function(a){},onTransportFailure:function(a,n){},onLocalMessage:function(a){},onFailureToReconnect:function(a,n){},onClientTimeout:function(a){},onOpenAfterResume:function(a){}},l={status:200,reasonPhrase:"OK",responseBody:"",messages:[],headers:[],state:"messageReceived",transport:"polling",error:null,request:null,partialMessage:"",errorHandled:!1,closedByClientTimeout:!1,ffTryingReconnect:!1},p=null,w=null,S=null,x=null,N=null,K=!0,A=0,oe=0,be="X",F=!1,$e=null,te,X=null,ee=e.util.now(),nt,Ct;an(d);function rn(){K=!0,F=!1,A=0,p=null,w=null,S=null,x=null}function vi(){O(),rn()}function U(a){return a=="debug"?i.logLevel==="debug":a=="info"?i.logLevel==="info"||i.logLevel==="debug":a=="warn"?i.logLevel==="warn"||i.logLevel==="info"||i.logLevel==="debug":a=="error"?i.logLevel==="error"||i.logLevel==="warn"||i.logLevel==="info"||i.logLevel==="debug":!1}function E(a){U("debug")&&e.util.debug(new Date+" Atmosphere: "+a)}function on(a,n){return l.partialMessage===""&&n.transport==="streaming"&&a.responseText.length>n.maxStreamingLength}function xt(){if(i.enableProtocol&&!i.disableDisconnect&&!i.firstMessage){var a="X-Atmosphere-Transport=close&X-Atmosphere-tracking-id="+i.uuid;e.util.each(i.headers,function(m,f){var v=e.util.isFunction(f)?f.call(this,i,i,l):f;v!=null&&(a+="&"+encodeURIComponent(m)+"="+encodeURIComponent(v))});var n=i.url.replace(/([?&])_=[^&]*/,a);n=n+(n===i.url?(/\?/.test(i.url)?"&":"?")+a:"");var u={connected:!1},g=new e.AtmosphereRequest(u);g.connectTimeout=i.connectTimeout,g.attachHeadersAsQueryString=!1,g.dropHeaders=!0,g.url=n,g.contentType="text/plain",g.transport="polling",g.method="GET",g.data="",g.heartbeat=null,i.enableXDR&&(g.enableXDR=i.enableXDR),Ni("",g)}}function de(){E("Closing (AtmosphereRequest._close() called)"),F=!0,i.reconnectId&&(clearTimeout(i.reconnectId),delete i.reconnectId),i.heartbeatTimer&&clearTimeout(i.heartbeatTimer),i.reconnect=!1,l.request=i,l.state="unsubscribe",l.responseBody="",l.status=408,l.partialMessage="",i.curWebsocketErrorRetries=0,Q(),xt(),O()}function O(){l.partialMessage="",i.id&&clearTimeout(i.id),i.heartbeatTimer&&clearTimeout(i.heartbeatTimer),i.reconnectId&&(clearTimeout(i.reconnectId),delete i.reconnectId),x!=null&&(x.close(),x=null),N!=null&&(N.abort(),N=null),S!=null&&(S.abort(),S=null),p!=null&&(p.canSendMessage&&(E("invoking .close() on WebSocket object"),p.close()),p=null),w!=null&&(w.close(),w=null),bi()}function bi(){te!=null&&(clearInterval(nt),document.cookie=Ct+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/",te.signal("close",{reason:"",heir:F?(te.get("children")||[])[0]:ee}),te.close()),X!=null&&X.close()}function an(a){vi(),i=e.util.extend(i,a),i.mrequest=i.reconnect,i.reconnect||(i.reconnect=!0)}function yi(){return i.webSocketImpl!=null||window.WebSocket||window.MozWebSocket}function _i(){var a=e.util.getAbsoluteURL(i.url.toLowerCase()),n=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/.exec(a),u=!!(n&&(n[1]!=window.location.protocol||n[2]!=window.location.hostname||(n[3]||(n[1]==="http:"?80:443))!=(window.location.port||(window.location.protocol==="http:"?80:443))));return window.EventSource&&(!u||!e.util.browser.safari||e.util.browser.vmajor>=7)}function ye(){if(i.shared){if(X=wi(i),X!=null&&(U("debug")&&e.util.debug("Storage service available. All communication will be local"),X.open(i)))return;U("debug")&&e.util.debug("No Storage service available."),X=null}i.firstMessage=h==0,i.isOpen=!1,i.ctime=e.util.now(),i.uuid===0&&(i.uuid=h),l.closedByClientTimeout=!1,i.transport!=="websocket"&&i.transport!=="sse"?Pe(i):i.transport==="websocket"?yi()?Et(!1):_e("Websocket is not supported, using request.fallbackTransport ("+i.fallbackTransport+")"):i.transport==="sse"&&(_i()?St(!1):_e("Server Side Events(SSE) is not supported, using request.fallbackTransport ("+i.fallbackTransport+")"))}function wi(a){var n,u,g,m="atmosphere-"+a.url,f={storage:function(){function b(V){V.key===m&&V.newValue&&y(V.newValue)}if(e.util.storage){var I=window.localStorage,T=function(V){var ue=I.getItem(m+"-"+V);return ue===null?[]:JSON.parse(ue)},B=function(V,ue){I.setItem(m+"-"+V,JSON.stringify(ue))};return{init:function(){return B("children",T("children").concat([ee])),e.util.on(window,"storage",b),T("opened")},signal:function(V,ue){I.setItem(m,JSON.stringify({target:"p",type:V,data:ue}))},close:function(){var V=T("children");e.util.off(window,"storage",b),V&&v(V,a.id)&&B("children",V)}}}},windowref:function(){var b=window.open("",m.replace(/\W/g,""));if(!(!b||b.closed||!b.callbacks))return{init:function(){return b.callbacks.push(y),b.children.push(ee),b.opened},signal:function(I,T){!b.closed&&b.fire&&b.fire(JSON.stringify({target:"p",type:I,data:T}))},close:function(){g||(v(b.callbacks,y),v(b.children,ee))}}}};function v(b,I){var T,B=b.length;for(T=0;T<B;T++)b[T]===I&&b.splice(T,1);return B!==b.length}function y(b){var I=JSON.parse(b),T=I.data;if(I.target==="c")switch(I.type){case"open":D("opening","local",i);break;case"close":g||(g=!0,T.reason==="aborted"?de():T.heir===ee?ye():setTimeout(function(){ye()},100));break;case"message":xe(T,"messageReceived",200,a.transport);break;case"localMessage":fn(T);break}}function C(){var b=new RegExp("(?:^|; )("+encodeURIComponent(m)+")=([^;]*)").exec(document.cookie);if(b)return JSON.parse(decodeURIComponent(b[2]))}if(n=C(),!(!n||e.util.now()-n.ts>1e3)&&(u=f.storage()||f.windowref(),!!u))return{open:function(){var b;return nt=setInterval(function(){var I=n;n=C(),(!n||I.ts===n.ts)&&y(JSON.stringify({target:"c",type:"close",data:{reason:"error",heir:I.heir}}))},1e3),b=u.init(),b&&setTimeout(function(){D("opening","local",a)},50),b},send:function(b){u.signal("send",b)},localSend:function(b){u.signal("localSend",JSON.stringify({id:ee,event:b}))},close:function(){F||(clearInterval(nt),u.signal("close"),u.close())}}}function Ci(){var a,n="atmosphere-"+i.url,u={storage:function(){function f(y){y.key===n&&y.newValue&&g(y.newValue)}if(e.util.storage){var v=window.localStorage;return{init:function(){e.util.on(window,"storage",f)},signal:function(y,C){v.setItem(n,JSON.stringify({target:"c",type:y,data:C}))},get:function(y){return JSON.parse(v.getItem(n+"-"+y))},set:function(y,C){v.setItem(n+"-"+y,JSON.stringify(C))},close:function(){e.util.off(window,"storage",f),v.removeItem(n),v.removeItem(n+"-opened"),v.removeItem(n+"-children")}}}},windowref:function(){var f=n.replace(/\W/g,""),v=document.getElementById(f),y;return v||(v=document.createElement("div"),v.id=f,v.style.display="none",v.innerHTML='<iframe name="'+f+'"></iframe>',document.body.appendChild(v)),y=v.firstChild.contentWindow,{init:function(){y.callbacks=[g],y.fire=function(C){var b;for(b=0;b<y.callbacks.length;b++)y.callbacks[b](C)}},signal:function(C,b){!y.closed&&y.fire&&y.fire(JSON.stringify({target:"c",type:C,data:b}))},get:function(C){return y.closed?null:y[C]},set:function(C,b){y.closed||(y[C]=b)},close:function(){}}}};function g(f){var v=JSON.parse(f),y=v.data;if(v.target==="p")switch(v.type){case"send":Ce(y);break;case"localSend":fn(y);break;case"close":de();break}}$e=function(v){a.signal("message",v)};function m(){document.cookie=Ct+"="+encodeURIComponent(JSON.stringify({ts:e.util.now()+1,heir:(a.get("children")||[])[0]}))+"; path=/"}a=u.storage()||u.windowref(),a.init(),U("debug")&&e.util.debug("Installed StorageService "+a),a.set("children",[]),a.get("opened")!=null&&!a.get("opened")&&a.set("opened",!1),Ct=encodeURIComponent(n),m(),nt=setInterval(m,1e3),te=a}function D(a,n,u){if(i.shared&&n!=="local"&&Ci(),te!=null&&te.set("opened",!0),u.close=function(){de()},A>0&&a==="re-connecting")u.isReopen=!0,Ai(l);else if(!l.error){l.request=u;var g=l.state;l.state=a;var m=l.transport;l.transport=n;var f=l.responseBody;Q(),l.responseBody=f,l.state=g,l.transport=m}}function sn(a){a.transport="jsonp";var n=i,u;a!=null&&typeof a<"u"&&(n=a),N={open:function(){var g="atmosphere"+ ++ee;function m(){n.lastIndex=0,n.openId&&clearTimeout(n.openId),n.heartbeatTimer&&clearTimeout(n.heartbeatTimer),n.reconnect&&A++<n.maxReconnectOnClose?(D("re-connecting",n.transport,n),ce(N,n,a.reconnectInterval),n.openId=setTimeout(function(){Fe(n)},n.reconnectInterval+1e3)):z(0,"maxReconnectOnClose reached")}function f(){var v=n.url;n.dispatchUrl!=null&&(v+=n.dispatchUrl);var y=n.data;n.attachHeadersAsQueryString&&(v=we(n),y!==""&&(v+="&X-Atmosphere-Post-Body="+encodeURIComponent(y)),y="");var C=document.head||document.getElementsByTagName("head")[0]||document.documentElement;u=document.createElement("script"),u.src=v+"&jsonpTransport="+g,u.clean=function(){u.clean=u.onerror=u.onload=u.onreadystatechange=null,u.parentNode&&u.parentNode.removeChild(u),++a.scriptCount===2&&(a.scriptCount=1,m())},u.onload=u.onreadystatechange=function(){E("jsonp.onload"),(!u.readyState||/loaded|complete/.test(u.readyState))&&u.clean()},u.onerror=function(){E("jsonp.onerror"),a.scriptCount=1,u.clean()},C.insertBefore(u,C.firstChild)}window[g]=function(v){if(E("jsonp.window"),a.scriptCount=0,n.reconnect&&n.maxRequest===-1||n.requestCount++<n.maxRequest){if(n.executeCallbackBeforeReconnect||ce(N,n,n.pollingInterval),v!=null&&typeof v!="string")try{v=v.message}catch{}var y=ae(v,n,l);y||xe(l.responseBody,"messageReceived",200,n.transport),n.executeCallbackBeforeReconnect&&ce(N,n,n.pollingInterval),ne(n)}else e.util.log(i.logLevel,["JSONP reconnect maximum try reached "+i.requestCount]),z(0,"maxRequest reached")},setTimeout(function(){f()},50)},abort:function(){u&&u.clean&&u.clean()}},N.open()}function xi(a){return i.webSocketImpl!=null?i.webSocketImpl:window.WebSocket?new WebSocket(a):new MozWebSocket(a)}function Si(){return we(i,e.util.getAbsoluteURL(i.webSocketUrl||i.url)).replace(/^http/,"ws")}function Ei(){var a=we(i);return a}function St(a){l.transport="sse";var n=Ei();if(U("debug")&&(e.util.debug("Invoking executeSSE"),e.util.debug("Using URL: "+n)),a&&!i.reconnect){w!=null&&O();return}try{w=new EventSource(n,{withCredentials:i.withCredentials})}catch(u){z(0,u),_e("SSE failed. Downgrading to fallback transport and resending");return}i.connectTimeout>0&&(i.id=setTimeout(function(){a||O()},i.connectTimeout)),w.onopen=function(){E("sse.onopen"),ne(i),U("debug")&&e.util.debug("SSE successfully opened"),i.enableProtocol?i.isReopen&&(i.isReopen=!1,D("re-opening",i.transport,i)):D(a?"re-opening":"opening","sse",i),a=!0,i.method==="POST"&&(l.state="messageReceived",Ce(i.data))},w.onmessage=function(u){if(E("sse.onmessage"),ne(i),!i.enableXDR&&window.location.host&&u.origin&&u.origin!==window.location.protocol+"//"+window.location.host){e.util.log(i.logLevel,["Origin was not "+window.location.protocol+"//"+window.location.host]);return}l.state="messageReceived",l.status=200,u=u.data;var g=ae(u,i,l);g||(Q(),l.responseBody="",l.messages=[])},w.onerror=function(){if(E("sse.onerror"),clearTimeout(i.id),i.heartbeatTimer&&clearTimeout(i.heartbeatTimer),!l.closedByClientTimeout){if(He(a),O(),F)e.util.log(i.logLevel,["SSE closed normally"]);else if(!a)_e("SSE failed. Downgrading to fallback transport and resending");else if(i.reconnect&&l.transport==="sse")if(A++<i.maxReconnectOnClose){if(D("re-connecting",i.transport,i),i.reconnectInterval>0){var u=i.handleOnlineOffline;i.handleOnlineOffline=!1,i.reconnectId=setTimeout(function(){i.handleOnlineOffline=u,St(!0)},i.reconnectInterval)}else St(!0);l.responseBody="",l.messages=[]}else e.util.log(i.logLevel,["SSE reconnect maximum try reached "+A]),z(0,"maxReconnectOnClose reached")}}}function Et(a){l.transport="websocket";var n=Si(i.url);if(U("debug")&&e.util.debug("Invoking executeWebSocket, using URL: "+n),a&&!i.reconnect){p!=null&&O();return}p=xi(n),i.webSocketBinaryType!=null&&(p.binaryType=i.webSocketBinaryType),i.connectTimeout>0&&(i.id=setTimeout(function(){if(!a){var m={code:1002,reason:"Connection timeout after "+i.connectTimeout+"ms.",wasClean:!1},f=p;try{O()}catch{}f.onclose(m)}},i.connectTimeout)),p.onopen=function(){if(p==null){this.close(),i.transport=="websocket"&&de();return}E("websocket.onopen"),(!i.enableProtocol||i.connectTimeout<=0)&&ne(i),o=!1,U("debug")&&e.util.debug("Websocket successfully opened");var m=a;p.canSendMessage=!0,i.enableProtocol||(a=!0,D(m?"re-opening":"opening","websocket",i)),i.method==="POST"&&(l.state="messageReceived",p.send(i.data))},p.onmessage=function(m){if(p==null){this.close(),i.transport=="websocket"&&de();return}E("websocket.onmessage"),ne(i),i.enableProtocol&&(a=!0),l.state="messageReceived",l.status=200,m=m.data;var f=typeof m=="string";if(f){var v=ae(m,i,l);v||(Q(),l.responseBody="",l.messages=[])}else{if(m=ln(i,m),m==="")return;l.responseBody=m,Q(),l.responseBody=null}},p.onerror=function(){E("websocket.onerror"),clearTimeout(i.id),i.heartbeatTimer&&clearTimeout(i.heartbeatTimer),l.error=!0},p.onclose=function(m){if(E("websocket.onclose"),l.transport==="websocket"&&(clearTimeout(i.id),l.state!=="closed")){var f=m.reason;if(f==="")switch(m.code){case 1e3:f="Normal closure; the connection successfully completed whatever purpose for which it was created.";break;case 1001:f="The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection.";break;case 1002:f="The endpoint is terminating the connection due to a protocol error.";break;case 1003:f="The connection is being terminated because the endpoint received data of a type it cannot accept (for example, a text-only endpoint received binary data).";break;case 1004:f="The endpoint is terminating the connection because a data frame was received that is too large.";break;case 1005:f="Unknown: no status code was provided even though one was expected.";break;case 1006:f="Connection was closed abnormally (that is, with no close frame being sent).";break}if(U("warn")&&e.util.warn("Websocket closed, reason: "+f+" - wasClean: "+m.wasClean),l.closedByClientTimeout||i.handleOnlineOffline&&o){i.reconnectId&&(clearTimeout(i.reconnectId),delete i.reconnectId);return}He(a),l.state="closed",F?e.util.log(i.logLevel,["Websocket closed normally"]):l.error&&i.curWebsocketErrorRetries<i.maxWebsocketErrorRetries&&A+1<i.maxReconnectOnClose?(l.error=!1,i.curWebsocketErrorRetries++,dn()):(l.error||!a||i.maxWebsocketErrorRetries===0)&&i.fallbackTransport!=="websocket"?(l.error=!1,_e("Websocket failed on first connection attempt. Downgrading to "+i.fallbackTransport+" and resending")):i.reconnect&&dn()}};var u=navigator.userAgent.toLowerCase(),g=u.indexOf("android")>-1;g&&p.url===void 0&&p.onclose({reason:"Android 4.1 does not support websockets.",wasClean:!1})}function ln(a,n){var u=n;if(a.transport==="polling")return u;if(a.enableProtocol&&a.firstMessage&&e.util.trim(n).length!==0){var g=a.trackMessageLength?1:0,m=n.split(a.messageDelimiter);if(m.length<=g+1)return u;if(a.firstMessage=!1,a.uuid=e.util.trim(m[g]),m.length<=g+2&&e.util.log("error",["Protocol data not sent by the server. If you enable protocol on client side, be sure to install JavascriptProtocol interceptor on server side.Also note that atmosphere-runtime 2.2+ should be used."]),oe=parseInt(e.util.trim(m[g+1]),10),be=m[g+2],a.transport!=="long-polling"&&Fe(a),h=a.uuid,u="",g=a.trackMessageLength?4:3,m.length>g+1)for(var f=g;f<m.length;f++)u+=m[f],f+1!==m.length&&(u+=a.messageDelimiter);a.ackInterval!==0&&setTimeout(function(){Ce("...ACK...")},a.ackInterval)}else a.enableProtocol&&a.firstMessage&&e.util.browser.msie&&+e.util.browser.version.split(".")[0]<10?e.util.log(i.logLevel,["Receiving unexpected data from IE"]):Fe(a);return u}function ne(a){clearTimeout(a.id),a.timeout>0&&a.transport!=="polling"&&(a.id=setTimeout(function(){Ti(),xt(),O()},a.timeout))}function Ti(a){l.closedByClientTimeout=!0,l.state="closedByClient",l.responseBody="",l.status=408,l.messages=[],Q()}function z(a,n){O(),clearTimeout(i.id),l.state="error",l.reasonPhrase=n,l.responseBody="",l.status=a,l.messages=[],Q()}function ae(a,n,u){if(a=ln(n,a),a.length===0)return!0;if(u.responseBody=a,n.trackMessageLength){a=u.partialMessage+a;var g=[],m=a.indexOf(n.messageDelimiter);if(m!=-1){for(;m!==-1;){var f=a.substring(0,m),v=+f;if(isNaN(v))throw u.partialMessage="",new Error('message length "'+f+'" is not a number');m+=n.messageDelimiter.length,m+v>a.length?m=-1:(g.push(a.substring(m,m+v)),a=a.substring(m+v,a.length),m=a.indexOf(n.messageDelimiter))}return u.partialMessage=a,g.length!==0?(u.responseBody=g.join(n.messageDelimiter),u.messages=g,!1):(u.responseBody="",u.messages=[],!0)}}return u.responseBody=a,u.messages=[a],!1}function dn(){if(O(),A++<i.maxReconnectOnClose)if(D("re-connecting",i.transport,i),i.reconnectInterval>0){var a=i.handleOnlineOffline;i.handleOnlineOffline=!1,i.reconnectId=setTimeout(function(){i.handleOnlineOffline=a,l.responseBody="",l.messages=[],Et(!0)},i.reconnectInterval)}else l.responseBody="",l.messages=[],Et(!0);else e.util.log(i.logLevel,["Websocket reconnect maximum try reached "+A]),z(0,"maxReconnectOnClose reached")}function _e(a){if(e.util.log(i.logLevel,[a]),O(),typeof i.onTransportFailure<"u"?i.onTransportFailure(a,i):typeof e.util.onTransportFailure<"u"&&e.util.onTransportFailure(a,i),i.reconnect&&i.transport!=="none"||i.transport==null)if(i.transport=i.fallbackTransport,i.method=i.fallbackMethod,l.transport=i.fallbackTransport,l.state="",i.fallbackTransport="none",i.reconnectInterval>0){var n=i.handleOnlineOffline;i.handleOnlineOffline=!1,i.reconnectId=setTimeout(function(){i.handleOnlineOffline=n,ye()},i.reconnectInterval)}else ye();else z(500,"Unable to reconnect with fallback transport")}function we(a,n){var u=i;return a!=null&&typeof a<"u"&&(u=a),n==null&&(n=u.url),!u.attachHeadersAsQueryString||n.indexOf("X-Atmosphere-Framework")!==-1||(n+=n.indexOf("?")!==-1?"&":"?",n+="X-Atmosphere-tracking-id="+u.uuid,n+="&X-Atmosphere-Framework="+e.version,n+="&X-Atmosphere-Transport="+u.transport,u.trackMessageLength&&(n+="&X-Atmosphere-TrackMessageSize=true"),u.heartbeat!==null&&u.heartbeat.server!==null&&(n+="&X-Heartbeat-Server="+u.heartbeat.server),u.contentType!==""&&(n+="&Content-Type="+(u.transport==="websocket"?u.contentType:encodeURIComponent(u.contentType))),u.enableProtocol&&(n+="&X-atmo-protocol=true"),e.util.each(u.headers,function(g,m){var f=e.util.isFunction(m)?m.call(this,u,a,l):m;f!=null&&(n+="&"+encodeURIComponent(g)+"="+encodeURIComponent(f))})),n}function Fe(a){if(!a.isOpen)a.isOpen=!0,D("opening",a.transport,a);else if(a.isReopen)a.isReopen=!1,D("re-opening",a.transport,a);else if(l.state==="messageReceived"&&(a.transport==="jsonp"||a.transport==="long-polling"))Oi(l);else return;ki(a)}function ki(a){if(a.heartbeatTimer!=null&&clearTimeout(a.heartbeatTimer),!isNaN(oe)&&oe>0){var n=function(){U("debug")&&e.util.debug("Sending heartbeat"),Ce(be),a.heartbeatTimer=setTimeout(n,oe)};a.heartbeatTimer=setTimeout(n,oe)}}function Pe(a){var n=i;if((a!=null||typeof a<"u")&&(n=a),n.lastIndex=0,n.readyState=0,n.transport==="jsonp"||n.enableXDR&&e.util.checkCORSSupport()){sn(n);return}if(e.util.browser.msie&&+e.util.browser.version.split(".")[0]<10){if(n.transport==="streaming"){n.enableXDR&&window.XDomainRequest?Ue(n):ze(n);return}if(n.enableXDR&&window.XDomainRequest){Ue(n);return}}var u=function(v){if(n.lastIndex=0,A++,v||n.reconnect&&A<=n.maxReconnectOnClose){var y=v?0:a.reconnectInterval;l.ffTryingReconnect=!0,D("re-connecting",a.transport,a),ce(f,n,y)}else z(0,"maxReconnectOnClose reached")},g=function(v){e._beforeUnloadState?(e.util.debug(new Date+" Atmosphere: reconnectF: execution delayed due to _beforeUnloadState flag"),setTimeout(function(){u(v)},5e3)):u(v)},m=function(){l.errorHandled=!0,O(),g(!1)};if(n.force||n.reconnect&&(n.maxRequest===-1||n.requestCount++<n.maxRequest)){n.force=!1;var f=e.util.xhr();f.hasData=!1,Ii(f,n,!0),n.suspend&&(S=f),n.transport!=="polling"&&(l.transport=n.transport,f.onabort=function(){E("ajaxrequest.onabort"),He(!0)},f.onerror=function(){E("ajaxrequest.onerror"),l.error=!0,l.ffTryingReconnect=!0;try{l.status=XMLHttpRequest.status}catch{l.status=500}l.status||(l.status=500),l.errorHandled||(O(),g(!1))}),f.onreadystatechange=function(){if(E("ajaxRequest.onreadystatechange, new state: "+f.readyState),F){E("onreadystatechange has been ignored due to _abortingConnection flag");return}l.error=!1;var v=!1,y=!1;if(n.transport==="streaming"&&n.readyState>2&&f.readyState===4){O(),g(!1);return}if(n.readyState=f.readyState,(n.transport==="streaming"&&f.readyState>=3||n.transport==="long-polling"&&f.readyState===4)&&(y=!0),ne(i),n.transport!=="polling"){var C=200;if(f.readyState===4&&(C=f.status>1e3?0:f.status),!n.reconnectOnServerError&&C>=300&&C<600){z(C,f.statusText);return}if(C>=300||C===0){!n.isOpen&&U("warn")&&e.util.warn(n.transport+" connection failed with status: "+C+" "+(f.statusText||"Unable to connect")),m();return}(!n.enableProtocol||!a.firstMessage)&&(f.readyState===2||f.readyState>2&&!n.isOpen)&&(e.util.browser.mozilla&&l.ffTryingReconnect?(l.ffTryingReconnect=!1,setTimeout(function(){l.ffTryingReconnect||Fe(n)},500)):Fe(n))}else f.readyState===4&&(y=!0);if(y){var b=f.responseText;if(l.errorHandled=!1,n.transport==="long-polling"&&e.util.trim(b).length===0){f.hasData?f.hasData=!1:g(!0);return}if(f.hasData=!0,kt(f,i),n.transport==="streaming")if(e.util.browser.opera)e.util.iterate(function(){if(l.status!==500&&f.responseText.length>n.lastIndex){try{l.status=f.status,l.headers=e.util.parseHeaders(f.getAllResponseHeaders()),kt(f,i)}catch{l.status=404}ne(i),l.state="messageReceived";var V=f.responseText.substring(n.lastIndex);if(n.lastIndex=f.responseText.length,v=ae(V,n,l),v||Q(),on(f,n)){cn(f,n);return}}else if(l.status>400)return n.lastIndex=f.responseText.length,!1},0);else{var I=b.substring(n.lastIndex,b.length);if(v=ae(I,n,l),n.lastIndex=b.length,v)return}else v=ae(b,n,l);var T=on(f,n);try{l.status=f.status,l.headers=e.util.parseHeaders(f.getAllResponseHeaders()),kt(f,n)}catch{l.status=404}n.suspend?l.state=l.status===0?"closed":"messageReceived":l.state="messagePublished";var B=!T&&a.transport!=="streaming"&&a.transport!=="polling";B&&!n.executeCallbackBeforeReconnect&&ce(f,n,n.pollingInterval),l.responseBody.length!==0&&!v&&Q(),B&&n.executeCallbackBeforeReconnect&&ce(f,n,n.pollingInterval),T&&cn(f,n)}};try{f.send(n.data),K=!0}catch(v){e.util.log(n.logLevel,["Unable to connect to "+n.url]),z(0,v)}}else n.logLevel==="debug"&&e.util.log(n.logLevel,["Max re-connection reached."]),z(0,"maxRequest reached")}function cn(a,n){l.messages=[],n.isReopen=!0,de(),F=!1,ce(a,n,500)}function Ii(a,n,u){var g=n.url;n.dispatchUrl!=null&&n.method==="POST"&&(g+=n.dispatchUrl),g=we(n,g),g=e.util.prepareURL(g),u&&(a.open(n.method,g,!0),n.connectTimeout>0&&(n.id=setTimeout(function(){n.requestCount===0&&(O(),xe("Connect timeout","closed",200,n.transport))},n.connectTimeout))),i.withCredentials&&i.transport!=="websocket"&&"withCredentials"in a&&(a.withCredentials=!0),i.dropHeaders||(a.setRequestHeader("X-Atmosphere-Framework",e.version),a.setRequestHeader("X-Atmosphere-Transport",n.transport),n.heartbeat!==null&&n.heartbeat.server!==null&&a.setRequestHeader("X-Heartbeat-Server",a.heartbeat.server),n.trackMessageLength&&a.setRequestHeader("X-Atmosphere-TrackMessageSize","true"),a.setRequestHeader("X-Atmosphere-tracking-id",n.uuid),e.util.each(n.headers,function(m,f){var v=e.util.isFunction(f)?f.call(this,a,n,u,l):f;v!=null&&a.setRequestHeader(m,v)})),n.contentType!==""&&a.setRequestHeader("Content-Type",n.contentType)}function ce(a,n,u){if(!l.closedByClientTimeout&&(n.reconnect||n.suspend&&K)){var g=0;if(a&&a.readyState>1&&(g=a.status>1e3?0:a.status),l.status=g===0?204:g,l.reason=g===0?"Server resumed the connection or down.":"OK",clearTimeout(n.id),n.reconnectId&&(clearTimeout(n.reconnectId),delete n.reconnectId),u>0){var m=i.handleOnlineOffline;i.handleOnlineOffline=!1,i.reconnectId=setTimeout(function(){i.handleOnlineOffline=m,Pe(n)},u)}else Pe(n)}}function Ai(a){a.state="re-connecting",It(a)}function Oi(a){a.state="openAfterResume",It(a),a.state="messageReceived"}function Ue(a){a.transport!=="polling"?(x=un(a),x.open()):un(a).open()}function un(a){var n=i;a!=null&&typeof a<"u"&&(n=a);var u=n.transport,g=0,m=new window.XDomainRequest,f=function(){n.transport==="long-polling"&&n.reconnect&&(n.maxRequest===-1||n.requestCount++<n.maxRequest)&&(m.status=200,Ue(n))},v=n.rewriteURL||function(C){var b=/(?:^|;\s*)(JSESSIONID|PHPSESSID)=([^;]*)/.exec(document.cookie);switch(b&&b[1]){case"JSESSIONID":return C.replace(/;jsessionid=[^\?]*|(\?)|$/,";jsessionid="+b[2]+"$1");case"PHPSESSID":return C.replace(/\?PHPSESSID=[^&]*&?|\?|$/,"?PHPSESSID="+b[2]+"&").replace(/&$/,"")}return C};m.onprogress=function(){y(m)},m.onerror=function(){n.transport!=="polling"&&(O(),A++<n.maxReconnectOnClose?n.reconnectInterval>0?n.reconnectId=setTimeout(function(){D("re-connecting",a.transport,a),Ue(n)},n.reconnectInterval):(D("re-connecting",a.transport,a),Ue(n)):z(0,"maxReconnectOnClose reached"))},m.onload=function(){};var y=function(C){clearTimeout(n.id);var b=C.responseText;if(b=b.substring(g),g+=b.length,u!=="polling"){ne(n);var I=ae(b,n,l);if(u==="long-polling"&&e.util.trim(b).length===0)return;n.executeCallbackBeforeReconnect&&f(),I||xe(l.responseBody,"messageReceived",200,u),n.executeCallbackBeforeReconnect||f()}};return{open:function(){var C=n.url;n.dispatchUrl!=null&&(C+=n.dispatchUrl),C=we(n,C),m.open(n.method,v(C)),n.method==="GET"?m.send():m.send(n.data),n.connectTimeout>0&&(n.id=setTimeout(function(){n.requestCount===0&&(O(),xe("Connect timeout","closed",200,n.transport))},n.connectTimeout))},close:function(){m.abort()}}}function ze(a){x=Li(a),x.open()}function Li(a){var n=i;a!=null&&typeof a<"u"&&(n=a);var u,g=new window.ActiveXObject("htmlfile");g.open(),g.close();var m=n.url;return n.dispatchUrl!=null&&(m+=n.dispatchUrl),n.transport!=="polling"&&(l.transport=n.transport),{open:function(){var f=g.createElement("iframe");m=we(n),n.data!==""&&(m+="&X-Atmosphere-Post-Body="+encodeURIComponent(n.data)),m=e.util.prepareURL(m),f.src=m,g.body.appendChild(f);var v=f.contentDocument||f.contentWindow.document;u=e.util.iterate(function(){try{if(!v.firstChild)return;var y=v.body?v.body.lastChild:v;y.omgThisIsBroken;var C=function(){var T=y.cloneNode(!0);T.appendChild(v.createTextNode("."));var B=T.innerText;return B=B.substring(0,B.length-1),B};if(!v.body||!v.body.firstChild||v.body.firstChild.nodeName.toLowerCase()!=="pre"){var b=v.head||v.getElementsByTagName("head")[0]||v.documentElement||v,I=v.createElement("script");I.text="document.write('<plaintext>')",b.insertBefore(I,b.firstChild),b.removeChild(I),y=v.body.lastChild}return n.closed&&(n.isReopen=!0),u=e.util.iterate(function(){var T=C();if(T.length>n.lastIndex){ne(i),l.status=200,l.error=!1,y.innerText="";var B=ae(T,n,l);if(B)return"";xe(l.responseBody,"messageReceived",200,n.transport)}if(n.lastIndex=0,v.readyState==="complete")return He(!0),D("re-connecting",n.transport,n),n.reconnectInterval>0?n.reconnectId=setTimeout(function(){ze(n)},n.reconnectInterval):ze(n),!1},null),!1}catch{return l.error=!0,D("re-connecting",n.transport,n),A++<n.maxReconnectOnClose?n.reconnectInterval>0?n.reconnectId=setTimeout(function(){ze(n)},n.reconnectInterval):ze(n):z(0,"maxReconnectOnClose reached"),g.execCommand("Stop"),g.close(),!1}})},close:function(){u&&u(),g.execCommand("Stop"),He(!0)}}}function Ce(a){X!=null?Di(a):S!=null||w!=null?it(a):x!=null?Mi(a):N!=null?Ri(a):p!=null?Bi(a):(z(0,"No suspended connection available"),e.util.error("No suspended connection available. Make sure atmosphere.subscribe has been called and request.onOpen invoked before trying to push data"))}function Ni(a,n){n||(n=Tt(a)),n.transport="polling",n.method="GET",n.withCredentials=!1,n.reconnect=!1,n.force=!0,n.suspend=!1,n.timeout=1e3,i.unloadBackwardCompat?Pe(n):navigator.sendBeacon(n.url,n.data)}function Di(a){X.send(a)}function Vi(a){if(a.length!==0)try{X?X.localSend(a):te&&te.signal("localMessage",JSON.stringify({id:ee,event:a}))}catch(n){e.util.error(n)}}function it(a){var n=Tt(a);Pe(n)}function Mi(a){if(i.enableXDR&&e.util.checkCORSSupport()){var n=Tt(a);n.reconnect=!1,sn(n)}else it(a)}function Ri(a){it(a)}function hn(a){var n=a;return typeof n=="object"&&(n=a.data),n}function Tt(a){var n=hn(a),u={connected:!1,timeout:6e4,method:"POST",url:i.url,contentType:i.contentType,headers:i.headers,reconnect:!0,callback:null,data:n,suspend:!1,maxRequest:-1,logLevel:"info",requestCount:0,withCredentials:i.withCredentials,transport:"polling",isOpen:!0,attachHeadersAsQueryString:!0,enableXDR:i.enableXDR,uuid:i.uuid,dispatchUrl:i.dispatchUrl,enableProtocol:!1,messageDelimiter:"|",trackMessageLength:i.trackMessageLength,maxReconnectOnClose:i.maxReconnectOnClose,heartbeatTimer:i.heartbeatTimer,heartbeat:i.heartbeat};return typeof a=="object"&&(u=e.util.extend(u,a)),u}function Bi(a){var n=e.util.isBinary(a)?a:hn(a),u;try{if(i.dispatchUrl!=null?u=i.webSocketPathDelimiter+i.dispatchUrl+i.webSocketPathDelimiter+n:u=n,!p.canSendMessage){e.util.error("WebSocket not connected.");return}p.send(u)}catch{p.onclose=function(){},O(),_e("Websocket failed. Downgrading to "+i.fallbackTransport+" and resending "+a),it(a)}}function fn(a){var n=JSON.parse(a);n.id!==ee&&(typeof i.onLocalMessage<"u"?i.onLocalMessage(n.event):typeof e.util.onLocalMessage<"u"&&e.util.onLocalMessage(n.event))}function xe(a,n,u,g){l.responseBody=a,l.transport=g,l.status=u,l.state=n,Q()}function kt(a,n){if(!n.readResponsesHeaders)n.enableProtocol||(n.uuid=ee);else try{var u=a.getResponseHeader("X-Atmosphere-tracking-id");u&&u!=null&&(n.uuid=u.split(" ").pop())}catch{}}function It(a){pn(a,i),pn(a,e.util)}function pn(a,n){switch(a.state){case"messageReceived":E("Firing onMessage"),A=0,typeof n.onMessage<"u"&&n.onMessage(a),typeof n.onmessage<"u"&&n.onmessage(a);break;case"error":var u=typeof a.reasonPhrase<"u"?a.reasonPhrase:"n/a";E("Firing onError, reasonPhrase: "+u),typeof n.onError<"u"&&n.onError(a),typeof n.onerror<"u"&&n.onerror(a);break;case"opening":delete i.closed,E("Firing onOpen"),typeof n.onOpen<"u"&&n.onOpen(a),typeof n.onopen<"u"&&n.onopen(a);break;case"messagePublished":E("Firing messagePublished"),typeof n.onMessagePublished<"u"&&n.onMessagePublished(a);break;case"re-connecting":E("Firing onReconnect"),typeof n.onReconnect<"u"&&n.onReconnect(i,a);break;case"closedByClient":E("Firing closedByClient"),typeof n.onClientTimeout<"u"&&n.onClientTimeout(i);break;case"re-opening":delete i.closed,E("Firing onReopen"),typeof n.onReopen<"u"&&n.onReopen(i,a);break;case"fail-to-reconnect":E("Firing onFailureToReconnect"),typeof n.onFailureToReconnect<"u"&&n.onFailureToReconnect(i,a);break;case"unsubscribe":case"closed":var g=typeof i.closed<"u"?i.closed:!1;g?E("Request already closed, not firing onClose ("+a.state+" case)"):(E("Firing onClose ("+a.state+" case)"),typeof n.onClose<"u"&&n.onClose(a),typeof n.onclose<"u"&&n.onclose(a)),i.closed=!0;break;case"openAfterResume":typeof n.onOpenAfterResume<"u"&&n.onOpenAfterResume(i);break}}function He(a){l.state!=="closed"&&(l.state="closed",l.responseBody="",l.messages=[],l.status=a?200:501,Q())}function Q(){var a=function(m,f){f(l)};X==null&&$e!=null&&$e(l.responseBody),i.reconnect=i.mrequest;for(var n=typeof l.responseBody=="string",u=n&&i.trackMessageLength?l.messages.length>0?l.messages:[""]:new Array(l.responseBody),g=0;g<u.length;g++)if(!(u.length>1&&u[g].length===0)){if(l.responseBody=n?e.util.trim(u[g]):u[g],X==null&&$e!=null&&$e(l.responseBody),l.state==="messageReceived"){if(l.responseBody.length===0)continue;if(n&&be===l.responseBody){A=0;continue}}if(It(l),c.length>0){U("debug")&&e.util.debug("Invoking "+c.length+" global callbacks: "+l.state);try{e.util.each(c,a)}catch(m){e.util.log(i.logLevel,["Callback exception"+m])}}if(typeof i.callback=="function"){U("debug")&&e.util.debug("Invoking request callbacks");try{i.callback(l)}catch(m){e.util.log(i.logLevel,["Callback exception"+m])}}}}this.subscribe=function(a){an(a),ye()},this.execute=function(){ye()},this.close=function(){de()},this.disconnect=function(){xt()},this.getUrl=function(){return i.url},this.push=function(a,n){if(n!=null){var u=i.dispatchUrl;i.dispatchUrl=n,Ce(a),i.dispatchUrl=u}else Ce(a)},this.getUUID=function(){return i.uuid},this.pushLocal=function(a){Vi(a)},this.enableProtocol=function(){return i.enableProtocol},this.init=function(){rn()},this.request=i,this.response=l}},e.subscribe=function(d,i,l){typeof i=="function"&&e.addCallback(i),typeof d!="string"?l=d:l.url=d,h=typeof l<"u"&&typeof l.uuid<"u"?l.uuid:0;var p=new e.AtmosphereRequest(l);return p.execute(),s[s.length]=p,p},e.unsubscribe=function(){if(s.length>0)for(var d=[].concat(s),i=0;i<d.length;i++){var l=d[i];l.close(),clearTimeout(l.response.request.id),l.heartbeatTimer&&clearTimeout(l.heartbeatTimer)}s=[],c=[]},e.unsubscribeUrl=function(d){var i=-1;if(s.length>0)for(var l=0;l<s.length;l++){var p=s[l];if(p.getUrl()===d){p.close(),clearTimeout(p.response.request.id),p.heartbeatTimer&&clearTimeout(p.heartbeatTimer),i=l;break}}i>=0&&s.splice(i,1)},e.addCallback=function(d){e.util.inArray(d,c)===-1&&c.push(d)},e.removeCallback=function(d){var i=e.util.inArray(d,c);i!==-1&&c.splice(i,1)},e.util={browser:{},parseHeaders:function(d){for(var i,l=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,p={};i=l.exec(d);)p[i[1]]=i[2];return p},now:function(){return new Date().getTime()},isArray:function(d){return Object.prototype.toString.call(d)==="[object Array]"},inArray:function(d,i){if(!Array.prototype.indexOf){for(var l=i.length,p=0;p<l;++p)if(i[p]===d)return p;return-1}return i.indexOf(d)},isBinary:function(d){return/^\[object\s(?:Blob|ArrayBuffer|.+Array)\]$/.test(Object.prototype.toString.call(d))},isFunction:function(d){return Object.prototype.toString.call(d)==="[object Function]"},getAbsoluteURL:function(d){if(typeof document.createElement>"u")return d;var i=document.createElement("div");i.innerHTML='<a href="'+d+'"></a>';var l=window.navigator.userAgent;return l.indexOf("MSIE ")>0||l.indexOf("Trident/")>0||l.indexOf("Edge/")>0?e.util.fixedEncodeURI(decodeURI(i.firstChild.href)):i.firstChild.href},fixedEncodeURI:function(d){return encodeURI(d).replace(/%5B/g,"[").replace(/%5D/g,"]")},prepareURL:function(d){var i=e.util.now(),l=d.replace(/([?&])_=[^&]*/,"$1_="+i);return l+(l===d?(/\?/.test(d)?"&":"?")+"_="+i:"")},trim:function(d){return String.prototype.trim?d.toString().trim():d.toString().replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,"").replace(/\s+/g," ")},param:function(d){var i,l=[];function p(S,x){x=e.util.isFunction(x)?x():x??"",l.push(encodeURIComponent(S)+"="+encodeURIComponent(x))}function w(S,x){var N;if(e.util.isArray(x))e.util.each(x,function(K,A){/\[\]$/.test(S)?p(S,A):w(S+"["+(typeof A=="object"?K:"")+"]",A)});else if(Object.prototype.toString.call(x)==="[object Object]")for(N in x)w(S+"["+N+"]",x[N]);else p(S,x)}for(i in d)w(i,d[i]);return l.join("&").replace(/%20/g,"+")},storage:function(){try{return!!(window.localStorage&&window.StorageEvent)}catch{return!1}},iterate:function(d,i){var l;return i=i||0,function p(){l=setTimeout(function(){d()!==!1&&p()},i)}(),function(){clearTimeout(l)}},each:function(d,i,l){if(d){var p,w=0,S=d.length,x=e.util.isArray(d);if(l){if(x)for(;w<S&&(p=i.apply(d[w],l),p!==!1);w++);else for(w in d)if(p=i.apply(d[w],l),p===!1)break}else if(x)for(;w<S&&(p=i.call(d[w],w,d[w]),p!==!1);w++);else for(w in d)if(p=i.call(d[w],w,d[w]),p===!1)break;return d}},extend:function(d){var i,l,p;for(i=1;i<arguments.length;i++)if((l=arguments[i])!=null)for(p in l)d[p]=l[p];return d},on:function(d,i,l){d.addEventListener?d.addEventListener(i,l,!1):d.attachEvent&&d.attachEvent("on"+i,l)},off:function(d,i,l){d.removeEventListener?d.removeEventListener(i,l,!1):d.detachEvent&&d.detachEvent("on"+i,l)},log:function(d,i){if(window.console){var l=window.console[d];typeof l=="function"&&l.apply(window.console,i)}},warn:function(){e.util.log("warn",arguments)},info:function(){e.util.log("info",arguments)},debug:function(){e.util.log("debug",arguments)},error:function(){e.util.log("error",arguments)},xhr:function(){try{return new window.XMLHttpRequest}catch{try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch{}}},checkCORSSupport:function(){if(e.util.browser.msie&&!window.XDomainRequest&&+e.util.browser.version.split(".")[0]<11)return!0;if(e.util.browser.opera&&+e.util.browser.version.split(".")<12)return!0;if(e.util.trim(navigator.userAgent).slice(0,16)==="KreaTVWebKit/531")return!0;if(e.util.trim(navigator.userAgent).slice(-7).toLowerCase()==="kreatel")return!0;var d=navigator.userAgent.toLowerCase(),i=d.match(/.+android ([0-9]{1,2})/i),l=parseInt(i&&i[0]||-1,10);return!isNaN(l)&&l>-1&&l<3}},e.util.now(),function(){var d=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(d)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(d)||/(msie) ([\w.]+)/.exec(d)||/(trident)(?:.*? rv:([\w.]+)|)/.exec(d)||d.indexOf("android")<0&&/version\/(.+) (safari)/.exec(d)||d.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(d)||[];i[2]==="safari"&&(i[2]=i[1],i[1]="safari"),e.util.browser[i[1]||""]=!0,e.util.browser.version=i[2]||"0",e.util.browser.vmajor=e.util.browser.version.split(".")[0],e.util.browser.trident&&(e.util.browser.msie=!0),(e.util.browser.msie||e.util.browser.mozilla&&+e.util.browser.version.split(".")[0]==1)&&(e.util.storage=!1)}(),e.callbacks={unload:function(){e.util.debug(new Date+" Atmosphere: unload event"),e.unsubscribe()},beforeUnload:function(){e.util.debug(new Date+" Atmosphere: beforeunload event"),e._beforeUnloadState=!0,setTimeout(function(){e.util.debug(new Date+" Atmosphere: beforeunload event timeout reached. Reset _beforeUnloadState flag"),e._beforeUnloadState=!1},5e3)},offline:function(){if(e.util.debug(new Date+" Atmosphere: offline event"),o=!0,s.length>0)for(var d=[].concat(s),i=0;i<d.length;i++){var l=d[i];l.request.handleOnlineOffline&&(l.close(),clearTimeout(l.response.request.id),l.heartbeatTimer&&clearTimeout(l.heartbeatTimer))}},online:function(){if(e.util.debug(new Date+" Atmosphere: online event"),s.length>0)for(var d=0;d<s.length;d++)s[d].request.handleOnlineOffline&&(s[d].init(),s[d].execute());o=!1}},e.bindEvents=function(){e.util.on(window,"unload",e.callbacks.unload),e.util.on(window,"beforeunload",e.callbacks.beforeUnload),e.util.on(window,"offline",e.callbacks.offline),e.util.on(window,"online",e.callbacks.online)},e.unbindEvents=function(){e.util.off(window,"unload",e.callbacks.unload),e.util.off(window,"beforeunload",e.callbacks.beforeUnload),e.util.off(window,"offline",e.callbacks.offline),e.util.off(window,"online",e.callbacks.online)},e.bindEvents(),e})})(ri);var Vr=ri.exports,Mr=Vr;const Mt=Yi(Mr);function Rr(r){return r!=null&&typeof r=="object"&&"@type"in r}var Br=(r=>(r.ACTIVE="active",r.INACTIVE="inactive",r))(Br||{}),ge,Ye,Ae,Oe,Le,Ne,qe,bt,oi,yt,ai,De,ht,Ve,ft,et,Xt,Mn;let $r=(Mn=class extends EventTarget{constructor(e){super();$(this,bt);$(this,yt);$(this,De);$(this,Ve);$(this,et);_(this,"state","inactive");$(this,ge,new Map);$(this,Ye,0);$(this,Ae,new Map);$(this,Oe,new Map);$(this,Le,new Map);$(this,Ne,[]);$(this,qe,void 0);Z(this,bt,oi).call(this,e.replace("/connect","").replace(/^connect/u,""))}subscribe(e,o,s){const c=k(this,Ye).toString();Se(this,Ye,k(this,Ye)+1);const h=s??[],d={"@type":"subscribe",endpointName:e,id:c,methodName:o,params:h},i=`${e}.${o}(${JSON.stringify(h)})`;Z(this,Ve,ft).call(this,d),k(this,ge).set(c,i);const l={cancel:()=>{if(!k(this,ge).has(c))return;const p={"@type":"unsubscribe",id:c};Z(this,Ve,ft).call(this,p),Z(this,De,ht).call(this,c)},context(p){return p.addController({hostDisconnected(){l.cancel()}}),l},onComplete:p=>(k(this,Ae).set(c,p),l),onError:p=>(k(this,Oe).set(c,p),l),onNext:p=>(k(this,Le).set(c,p),l)};return l}},ge=new WeakMap,Ye=new WeakMap,Ae=new WeakMap,Oe=new WeakMap,Le=new WeakMap,Ne=new WeakMap,qe=new WeakMap,bt=new WeakSet,oi=function(e){var s;const o=ni(document);Se(this,qe,(s=Mt.subscribe)==null?void 0:s.call(Mt,{contentType:"application/json; charset=UTF-8",enableProtocol:!0,fallbackTransport:"long-polling",headers:o,maxReconnectOnClose:1e7,onClose:c=>{this.state==="active"&&(this.state="inactive",this.dispatchEvent(new CustomEvent("state-changed",{detail:{active:!1}})))},onError:c=>{console.error("error in push communication",c)},onMessage:c=>{c.responseBody&&Z(this,yt,ai).call(this,JSON.parse(c.responseBody))},onOpen:c=>{this.state==="inactive"&&(this.state="active",this.dispatchEvent(new CustomEvent("state-changed",{detail:{active:!0}})),Z(this,et,Xt).call(this))},onReopen:c=>{this.state==="inactive"&&(this.state="active",this.dispatchEvent(new CustomEvent("state-changed",{detail:{active:!0}})),Z(this,et,Xt).call(this))},reconnectInterval:5e3,timeout:-1,trackMessageLength:!0,transport:"websocket",url:e?`${e}/HILLA/push`:"HILLA/push"}))},yt=new WeakSet,ai=function(e){var o;if(Rr(e)){const{id:s}=e,c=k(this,ge).get(s)??"unknown";if(e["@type"]==="update"){const h=k(this,Le).get(s);h&&h(e.item)}else if(e["@type"]==="complete")(o=k(this,Ae).get(s))==null||o(),Z(this,De,ht).call(this,s);else{const h=k(this,Oe).get(s);if(h&&h(),Z(this,De,ht).call(this,s),!h)throw new Error(`Error in ${c}: ${e.message}`)}}else throw new Error(`Unknown message from server: ${String(e)}`)},De=new WeakSet,ht=function(e){k(this,Le).delete(e),k(this,Ae).delete(e),k(this,Oe).delete(e),k(this,ge).delete(e)},Ve=new WeakSet,ft=function(e){var o,s;this.state==="inactive"?k(this,Ne).push(e):(s=(o=k(this,qe))==null?void 0:o.push)==null||s.call(o,JSON.stringify(e))},et=new WeakSet,Xt=function(){k(this,Ne).forEach(e=>Z(this,Ve,ft).call(this,e)),Se(this,Ne,[])},Mn);const P=window;var Rn;P.Vaadin??(P.Vaadin={}),(Rn=P.Vaadin).registrations??(Rn.registrations=[]),P.Vaadin.registrations.push({is:"endpoint"});const Fr=async r=>{if(!r.ok){const t=await r.text();let e;try{e=JSON.parse(t)}catch{e=null}const o=(e==null?void 0:e.message)??t.length>0?t:`expected "200 OK" response, but got ${r.status} ${r.statusText}`,s=e==null?void 0:e.type;if(e!=null&&e.validationErrorData)throw new ii(o,e.validationErrorData,s);if(s)throw new Zt(o,s,e==null?void 0:e.detail);switch(r.status){case 401:throw new Nr(o,r);case 403:throw new Dr(o,r);default:throw new jt(o,r)}}};function mn(){var r,t,e;return((e=(t=(r=P.Vaadin)==null?void 0:r.Flow)==null?void 0:t.clients)==null?void 0:e.TypeScript)!==void 0}var Me;class Pr{constructor(t={}){_(this,"middlewares",[]);_(this,"prefix","/connect");$(this,Me,void 0);t.prefix&&(this.prefix=t.prefix),t.middlewares&&(this.middlewares=t.middlewares),L.create(),addEventListener("online",()=>{var e;!mn()&&((e=P.Vaadin)!=null&&e.connectionState)&&(P.Vaadin.connectionState.state=M.CONNECTED)}),addEventListener("offline",()=>{var e;!mn()&&((e=P.Vaadin)!=null&&e.connectionState)&&(P.Vaadin.connectionState.state=M.CONNECTION_LOST)})}get fluxConnection(){return k(this,Me)||Se(this,Me,new $r(this.prefix)),k(this,Me)}async call(t,e,o,s){if(arguments.length<2)throw new TypeError(`2 arguments required, but got only ${arguments.length}`);const c={Accept:"application/json","Content-Type":"application/json",...ni(document)},h=new Request(`${this.prefix}/${t}/${e}`,{body:o!==void 0?JSON.stringify(o,(p,w)=>w===void 0?null:w):void 0,headers:c,method:"POST"}),d={endpoint:t,method:e,params:o,request:h};async function i(p,w){const S=await w(p);await Fr(S);const x=await S.text();return JSON.parse(x,(N,K)=>K===null?void 0:K)}async function l(p){var w,S,x,N,K,A,oe,be;(S=(w=P.Vaadin)==null?void 0:w.connectionState)==null||S.loadingStarted();try{const F=await fetch(p.request,{signal:s==null?void 0:s.signal});return(N=(x=P.Vaadin)==null?void 0:x.connectionState)==null||N.loadingFinished(),F}catch(F){return F instanceof Error&&F.name==="AbortError"?(A=(K=P.Vaadin)==null?void 0:K.connectionState)==null||A.loadingFinished():(be=(oe=P.Vaadin)==null?void 0:oe.connectionState)==null||be.loadingFailed(),Promise.reject(F)}}return[i,...this.middlewares].reduceRight((p,w)=>async S=>typeof w=="function"?w(S,p):w.invoke(S,p),l)(d)}subscribe(t,e,o){return this.fluxConnection.subscribe(t,e,o?Object.values(o):[])}}Me=new WeakMap;const We=window;var Bn;We.Vaadin??(We.Vaadin={}),(Bn=We.Vaadin).registrations??(Bn.registrations=[]),We.Vaadin.registrations.push({is:"@hilla/frontend",version:"2.2.0"});const Ur=new Pr({prefix:"connect"}),_t=Ur;async function ra(r,t){return _t.call("StudentService","deletestu",{studentcode:r},t)}async function oa(r){return _t.call("StudentService","findAll",{},r)}async function aa(r,t,e,o,s,c,h){return _t.call("StudentService","saveStudent",{StudentName:r,Studentsurname:t,Studentage:e,grade:o,availablility:s,course:c},h)}async function sa(r,t,e,o,s,c,h,d){return _t.call("StudentService","updatestuden",{code:r,StudentName:t,Studentsurname:e,Studentage:o,grade:s,availablility:c,course:h},d)}/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const la=r=>class extends r{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(e,o){if(!o||e===void 0)return;const{classList:s}=o;if(this.__initialClasses||(this.__initialClasses=new Set(s)),Array.isArray(this.__previousClasses)){const h=this.__previousClasses.filter(d=>!this.__initialClasses.has(d));h.length>0&&s.remove(...h)}const c=typeof e=="string"?e.split(" "):[];c.length>0&&s.add(...c),this.__previousClasses=c}};Be("vaadin-input-container",le`
    :host {
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--_input-container-radius) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
      border-radius:
        /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#syntax */
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius));
      /* Fallback */
      --_input-container-radius: var(--vaadin-input-field-border-radius, var(--lumo-border-radius-m));
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([dir='rtl']) {
      border-radius:
        /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius));
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class gn extends Xn(qi(Gn)){static get is(){return"vaadin-input-container"}static get template(){return Jn`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
          border-radius:
            /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
            var(--vaadin-input-field-top-start-radius, var(--__border-radius))
            var(--vaadin-input-field-top-end-radius, var(--__border-radius))
            var(--vaadin-input-field-bottom-end-radius, var(--__border-radius))
            var(--vaadin-input-field-bottom-start-radius, var(--__border-radius));
          --_border-radius: var(--vaadin-input-field-border-radius, 0px);
          --_input-border-width: var(--vaadin-input-field-border-width, 0);
          --_input-border-color: var(--vaadin-input-field-border-color, transparent);
          box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
        }

        :host([dir='rtl']) {
          border-radius:
            /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
            var(--vaadin-input-field-top-end-radius, var(--_border-radius))
            var(--vaadin-input-field-top-start-radius, var(--_border-radius))
            var(--vaadin-input-field-bottom-start-radius, var(--_border-radius))
            var(--vaadin-input-field-bottom-end-radius, var(--_border-radius));
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",t=>{t.target===this&&t.preventDefault()}),this.addEventListener("click",t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(e=>e.focus&&e.focus())})}}customElements.define(gn.is,gn);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const si=le`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;Be("",si,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zr=le`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const li=le`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    /* As a workaround for diacritics being cut off, add a top padding and a 
    negative margin to compensate */
    padding-top: 0.25em;
    margin-top: -0.25em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '\\2022');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;Be("",li,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hr=le`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Read-only style */
  :host([readonly]) {
    --vaadin-input-field-border-color: transparent;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
    --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid]) {
    --vaadin-input-field-border-color: var(--lumo-error-color);
  }

  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,di=[li,si,zr,Hr];Be("",di,{moduleId:"lumo-input-field-shared-styles"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Be("vaadin-text-field",di,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wr=le`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '\\2715';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xr=le`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }

  @media (forced-colors: active) {
    :host(:not([readonly])) [part='input-field'] {
      outline: 1px solid;
      outline-offset: -1px;
    }
    :host([focused]) [part='input-field'] {
      outline-width: 2px;
    }
    :host([disabled]) [part='input-field'] {
      outline-color: GrayText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jr=le`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gr=[Xr,Jr,Wr];/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kr=r=>class extends jn(Kn(r)){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&(this.clearElement.addEventListener("mousedown",e=>this._onClearButtonMouseDown(e)),this.clearElement.addEventListener("click",e=>this._onClearButtonClick(e)))}_onClearButtonClick(e){e.preventDefault(),this._onClearAction()}_onClearButtonMouseDown(e){e.preventDefault(),er||this.inputElement.focus()}_onEscape(e){super._onEscape(e),this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._onClearAction())}_onClearAction(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Qr extends Kt{constructor(t){super(t,"error-message","div")}setErrorMessage(t){this.errorMessage=t,this.updateDefaultNode(this.node)}setInvalid(t){this.invalid=t,this.updateDefaultNode(this.node)}initAddedNode(t){t!==this.defaultNode&&this.initCustomNode(t)}initNode(t){this.updateDefaultNode(t)}initCustomNode(t){t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),super.initCustomNode(t)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(t){const{errorMessage:e,invalid:o}=this,s=!!(o&&e&&e.trim()!=="");t&&(t.textContent=s?e:"",t.hidden=!s,s?t.setAttribute("role","alert"):t.removeAttribute("role")),super.updateDefaultNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Zr extends Kt{constructor(t){super(t,"helper",null)}setHelperText(t){this.helperText=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:t}=this;if(t&&t.trim()!==""){this.tagName="div";const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(t){t&&(t.textContent=this.helperText),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ci=ve(r=>class extends r{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const e=this.checkValidity();return this._setInvalid(!e),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:e}})),e}checkValidity(){return!this.required||!!this.value}_setInvalid(e){this._shouldSetInvalid(e)&&(this.invalid=e)}_shouldSetInvalid(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jr=r=>class extends ci(cr(zn(r))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new pr(this),this._helperController=new Zr(this),this._errorController=new Qr(this),this._errorController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-error-message",e.detail.hasContent)}),this._labelController.addEventListener("slot-content-changed",e=>{const{hasContent:o,node:s}=e.detail;this.__labelChanged(o,s)}),this._helperController.addEventListener("slot-content-changed",e=>{const{hasContent:o,node:s}=e.detail;this.toggleAttribute("has-helper",o),this.__helperChanged(o,s)})}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(e,o){e?this._fieldAriaController.setHelperId(o.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(e){this._fieldAriaController.setAriaLabel(e)}_accessibleNameRefChanged(e){this._fieldAriaController.setLabelId(e,!0)}__labelChanged(e,o){e?this._fieldAriaController.setLabelId(o.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(e){this._errorController.setErrorMessage(e)}_helperTextChanged(e){this._helperController.setHelperText(e)}_ariaTargetChanged(e){e&&this._fieldAriaController.setTarget(e)}_requiredChanged(e){this._fieldAriaController.setRequired(e)}_invalidChanged(e){this._errorController.setInvalid(e),setTimeout(()=>{if(e){const o=this._errorNode;this._fieldAriaController.setErrorId(o&&o.id)}else this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yr=ve(r=>class extends sr(ci(jn(r))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(e=>this[e]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(e){return e.some(o=>this.__isValidConstraint(o))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(e,...o){if(!e)return;const s=this._hasValidConstraints(o),c=this.__previousHasConstraints&&!s;(this._hasValue||this.invalid)&&s?this.validate():c&&this._setInvalid(!1),this.__previousHasConstraints=s}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__isValidConstraint(e){return!!e||e===0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rt=new WeakMap;function qr(r){return Rt.has(r)||Rt.set(r,new Set),Rt.get(r)}function eo(r,t){const e=document.createElement("style");e.textContent=r,t===document?document.head.appendChild(e):t.insertBefore(e,t.firstChild)}const to=ve(r=>class extends r{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const e=this.getRootNode(),o=qr(e);this.slotStyles.forEach(s=>{o.has(s)||(eo(s,e),o.add(s))})}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const no=r=>class extends to(ar(Yr(jr(Kr(Kn(r)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}_onFocus(e){super._onFocus(e),this.autoselect&&this.inputElement&&this.inputElement.select()}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(e){super._onKeyDown(e),this.allowedCharPattern&&!this.__shouldAcceptKey(e)&&(e.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=tr.debounce(this._preventInputDebouncer,nr.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||e.key.length!==1||this.__allowedCharRegExp.test(e.key)}_onPaste(e){if(this.allowedCharPattern){const o=e.clipboardData.getData("text");this.__allowedTextRegExp.test(o)||(e.preventDefault(),this._markInputPrevented())}}_onDrop(e){if(this.allowedCharPattern){const o=e.dataTransfer.getData("text");this.__allowedTextRegExp.test(o)||(e.preventDefault(),this._markInputPrevented())}}_onBeforeInput(e){this.allowedCharPattern&&e.data&&!this.__allowedTextRegExp.test(e.data)&&(e.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(e){if(e)try{this.__allowedCharRegExp=new RegExp(`^${e}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${e}*$`,"u")}catch(o){console.error(o)}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const io=r=>class extends no(r){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.value&&e.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),e.value=""),this.value&&(e.value=this.value))}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this.validate()}_onInput(e){super._onInput(e),this.invalid&&this.validate()}_valueChanged(e,o){super._valueChanged(e,o),o!==void 0&&this.invalid&&this.validate()}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ro=r=>class extends io(r){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new lr(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new ur(this.inputElement,this._labelController))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Be("vaadin-text-field",Gr,{moduleId:"vaadin-text-field-styles"});let Jt=class extends ro(Xn(rr(Gn))){static get is(){return"vaadin-text-field"}static get template(){return Jn`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}ready(){super.ready(),this._tooltipController=new ir(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}};customElements.define(Jt.is,Jt);function pt(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pt=function(e){return typeof e}:pt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pt(r)}function oo(r){var t=typeof r=="string"||r instanceof String;if(!t){var e=pt(r);throw r===null?e="null":e==="object"&&(e=r.constructor.name),new TypeError("Expected a string but received a ".concat(e))}}var R={"en-US":".",ar:"٫"},vn=["AU","GB","HK","IN","NZ","ZA","ZM"];for(var bn,Bt=0;Bt<vn.length;Bt++)bn="en-".concat(vn[Bt]),R[bn]=R["en-US"];var yn=["AE","BH","DZ","EG","IQ","JO","KW","LB","LY","MA","QM","QA","SA","SD","SY","TN","YE"];for(var _n,$t=0;$t<yn.length;$t++)_n="ar-".concat(yn[$t]),R[_n]=R.ar;var wn=["IR","AF"];for(var Cn,Ft=0;Ft<wn.length;Ft++)Cn="fa-".concat(wn[Ft]),R[Cn]=R.ar;var xn=["BD","IN"];for(var Sn,Pt=0;Pt<xn.length;Pt++)Sn="bn-".concat(xn[Pt]),R[Sn]=R["en-US"];var En=["ar-EG","ar-LB","ar-LY"],Tn=["bg-BG","cs-CZ","da-DK","de-DE","el-GR","en-ZM","es-ES","fr-CA","fr-FR","id-ID","it-IT","ku-IQ","hi-IN","hu-HU","nb-NO","nn-NO","nl-NL","pl-PL","pt-PT","ru-RU","kk-KZ","si-LK","sl-SI","sr-RS@latin","sr-RS","sv-SE","tr-TR","uk-UA","vi-VN"];for(var Ut=0;Ut<En.length;Ut++)R[En[Ut]]=R["en-US"];for(var zt=0;zt<Tn.length;zt++)R[Tn[zt]]=",";R["pt-BR"]=R["pt-PT"];R["pl-Pl"]=R["pl-PL"];var ao=/^[0-9]+$/;function ui(r,t){return oo(r),t&&t.no_symbols?ao.test(r):new RegExp("^[+-]?([0-9]*[".concat((t||{}).locale?R[t.locale]:".","])?[0-9]+$")).test(r)}class wt{constructor(t){_(this,"message","invalid");_(this,"impliesRequired",!1);t!=null&&t.message&&(this.message=t.message)}}let Yt=class extends wt{constructor(){super(...arguments);_(this,"impliesRequired",!0)}validate(e){return typeof e=="string"||Array.isArray(e)?e.length>0:typeof e=="number"?Number.isFinite(e):e!==void 0}},so=class extends wt{validate(t){return ui(String(t))}},lo=class extends so{constructor(e,o){super({message:"must be a number",...o});_(this,"optional");this.optional=e}validate(e){return this.optional&&e==null||super.validate(e)}},co=class extends wt{constructor(t){super({message:"must be null",...t})}validate(t){return t==null}},uo=class extends Yt{constructor(t){super({message:"must not be null",...t})}validate(t){return!new co().validate(t)}};class Sa extends Yt{constructor(t){super({message:"must not be empty",...t})}validate(t){return super.validate(t)&&new uo().validate(t)&&(t.length??0)>0}}class ho extends wt{constructor(){super();_(this,"message","")}validate(){return!1}}const mt=Symbol("ItemModel"),pe=Symbol("parent"),Y=Symbol("key"),tt=Symbol("fromString"),q=Symbol("validators"),Qe=Symbol("binderNode"),J=Symbol("getPropertyModel"),at=Symbol("properties"),Gt=Symbol("optional");function ie(r){return r[Qe]||(r[Qe]=new hi(r)),r[Qe]}function fo(r){return tt in r}var So,Eo,To,ko,Io;class me{constructor(t,e,o,...s){_(this,So);_(this,Eo);_(this,To);_(this,ko);_(this,Io);this[pe]=t,this[Y]=e,this[Gt]=o,this[q]=s}static createEmptyValue(){}toString(){return String(this.valueOf())}valueOf(){const{value:t}=ie(this);if(t===void 0)throw new TypeError("Value is undefined");return t}}So=pe,Eo=q,To=Gt,ko=Qe,Io=Y;let qt=class extends me{};class en extends qt{[tt](t){return["true","1","yes"].includes(t.toLowerCase())}}_(en,"createEmptyValue",Boolean);class ke extends qt{constructor(t,e,o,...s){super(t,e,o,new lo(o),...s)}[tt](t){if(t!=="")return ui(t)?Number.parseFloat(t):NaN}}_(ke,"createEmptyValue",Number);var Ao;class fe extends qt{constructor(){super(...arguments);_(this,Ao,String)}}Ao=tt,_(fe,"createEmptyValue",String);var Oo;class re extends me{constructor(){super(...arguments);_(this,Oo,{})}static*getOwnAndParentGetters(e){for(let o=Object.getPrototypeOf(e);o!==re.prototype;o=Object.getPrototypeOf(o)){const s=Object.getOwnPropertyDescriptors(o);for(const[c,{get:h}]of Object.entries(s))h&&(yield[c,h])}}static createEmptyValue(){const e=new this({value:void 0},"value",!1),o={};for(const[s,c]of this.getOwnAndParentGetters(e)){const h=c.call(e);o[s]=h[Gt]?void 0:h.constructor.createEmptyValue()}return o}[(Oo=at,J)](e,o,s){return this[at][e]===void 0&&(this[at][e]=new o(this,e,...s)),this[at][e]}}var Lo;let Ie=class extends me{constructor(e,o,s,c,h,...d){super(e,o,s,...d);_(this,Lo);_(this,"itemModelArgs");_(this,"itemModels",[]);this[mt]=c,this.itemModelArgs=h}static createEmptyValue(){return[]}*[(Lo=mt,Symbol.iterator)](){const e=this.valueOf(),o=this[mt];e.length!==this.itemModels.length&&(this.itemModels.length=e.length);for(const s of e.keys()){let c=this.itemModels[s];c===void 0&&(c=new o(this,s,...this.itemModelArgs),this.itemModels[s]=c),yield ie(c)}}};const Ke=Symbol("validity"),kn={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},Ee=Symbol("ownErrorsSymbol"),he=Symbol("visited");function In(r){return typeof r.property=="string"?r.property:ie(r.property).name}const An=new WeakMap,Ht=r=>{const t=An;if(t.has(r))return An.get(r);const e=r.model[mt].createEmptyValue();return t.set(r,e),e};function On(r,t,e,o){if(r instanceof re)return{...t,[e]:o};if(o===void 0)throw new TypeError("Unexpected undefined value");if(r instanceof Ie){const s=t.slice();return s[e]=o,s}throw new TypeError(`Unknown model type ${r.constructor.name}`)}const G=new Event("binder-node-changed");var No,Do,Vo,Mo,$n;let hi=($n=class extends EventTarget{constructor(e){super();_(this,"model");_(this,No);_(this,Do,!1);_(this,Vo);_(this,Mo);_(this,"validityStateValidator");this.model=e,e[Qe]=this,this.validityStateValidator=new ho,this[q]=e[q],this.initializeValue()}get parent(){const e=this.model[pe];return e instanceof me?ie(e):void 0}get binder(){return this.parent?this.parent.binder:this}get name(){let e=this.model;const o=[];for(;e[pe]instanceof me;)o.unshift(String(e[Y])),e=e[pe];return o.join(".")}get value(){this.parent.value===void 0&&this.parent.initializeValue(!0);const e=this.model[Y];return this.parent.value[e]}set value(e){this.initializeValue(),this.setValueState(e,void 0)}get defaultValue(){const e=this.model[Y],o=this.parent.defaultValue;return this.isArrayItem()&&!(e in o)?Ht(this.parent.asArray()):o[e]}get dirty(){return this.value!==this.defaultValue}get validators(){return this[q]}set validators(e){this[q]=e,this.dispatchEvent(G)}get visited(){return this[he]}set visited(e){this[he]!==e&&(this[he]=e,this.updateValidation().catch(()=>{}),this.dispatchEvent(G))}get errors(){return[...this.getChildBinderNodes()].reduce((e,o)=>[...e,...o.errors],[]).concat(this.ownErrors)}get ownErrors(){return this[Ee]?this[Ee]:[]}get invalid(){return this.errors.length>0}get required(){return this[q].some(e=>e.impliesRequired)}for(e){const o=ie(e);if(o.binder!==this.binder)throw new Error("Unknown binder");return o}async validate(){const e=(await Promise.all([...this.requestValidationOfDescendants(),...this.requestValidationWithAncestors()])).flat();return this.setErrorsWithDescendants(e.length?e:void 0),this.update(),e}addValidator(e){this.validators=[...this[q],e],this.dispatchEvent(G)}appendItem(e){const o=this.asArray(),s=e??Ht(o),c=[...o.value??[],s],h=[...o.defaultValue??[],s];this.setValueState(c,h)}prependItem(e){const o=this.asArray(),s=e??Ht(o),c=[s,...o.value??[]],h=[s,...o.defaultValue??[]];this.setValueState(c,h)}removeSelf(){const e=this.asArrayItem(),o=this.model[Y],s=e.parent,c=(s.value??[]).filter((d,i)=>i!==o),h=(s.value??[]).filter((d,i)=>i!==o);this.parent.setValueState(c,h)}clearValidation(){this[he]&&(this[he]=!1,this.dispatchEvent(G));let e=!1;return this[Ee]&&(this[Ee]=void 0,e=!0,this.dispatchEvent(G)),[...this.getChildBinderNodes()].filter(o=>o.clearValidation()).length>0&&(e=!0),e}async updateValidation(){this[he]?await this.validate():(this.dirty||this.invalid)&&await Promise.all([...this.getChildBinderNodes()].map(async e=>e.updateValidation()))}update(e){this.parent&&this.parent.update()}setErrorsWithDescendants(e){const{name:o}=this,s=e?e.filter(h=>In(h)===o):void 0,c=e?e.filter(h=>In(h).startsWith(o)):void 0;this[Ee]=s;for(const h of this.getChildBinderNodes())h.setErrorsWithDescendants(c);this.dispatchEvent(G)}*getChildBinderNodes(){if(this.value!==void 0){if(this.model instanceof re){if(this.defaultValue)for(const[,e]of re.getOwnAndParentGetters(this.model)){const o=e.call(this.model);o instanceof me&&o[Y]in this.defaultValue&&(yield ie(o))}}else if(this.model instanceof Ie)for(const e of this.model)yield e}}runOwnValidators(){return this[Ke]&&!this[Ke].valid?this[Ke].badInput?[this.binder.requestValidation(this.model,this.validityStateValidator)]:[...this[q],this.validityStateValidator].map(async e=>this.binder.requestValidation(this.model,e)):this[q].map(async e=>this.binder.requestValidation(this.model,e))}requestValidationOfDescendants(){return[...this.getChildBinderNodes()].reduce((e,o)=>[...e,...o.runOwnValidators(),...o.requestValidationOfDescendants()],[])}requestValidationWithAncestors(){return[...this.runOwnValidators(),...this.parent?this.parent.requestValidationWithAncestors():[]]}initializeValue(e=!1){this.parent&&(this.parent.value===void 0||this.parent.defaultValue===void 0)&&this.parent.initializeValue(!0);const o=this.model[Y];let s=this.parent?this.parent.value[this.model[Y]]:void 0;const c=this.parent?this.parent.defaultValue[this.model[Y]]:void 0;s===void 0&&(e||!this.parent?(s=this.model.constructor.createEmptyValue(),this.setValueState(s,c===void 0?s:c)):this.parent.model instanceof re&&!(o in(this.parent.value||{}))&&this.setValueState(void 0,c===void 0?s:c))}setValueState(e,o){var c,h;const s=this.model[pe];if(s instanceof me){const d=this.model[Y],i=On(s,this.parent.value,d,e);if(e===o&&((c=this.parent)==null?void 0:c.value)===((h=this.parent)==null?void 0:h.defaultValue))this.parent.setValueState(i,i);else if(o!==void 0){const l=On(s,this.parent.defaultValue,d,e);this.parent.setValueState(i,l)}else this.parent.setValueState(i,void 0)}else{const d=s;d.value=e,o!==void 0&&(d.defaultValue=o)}}isArray(){return this.model instanceof Ie}asArray(){if(!this.isArray())throw new TypeError("Model is not array");return this}isArrayItem(){var e;return((e=this.parent)==null?void 0:e.model)instanceof Ie}asArrayItem(){if(!this.isArrayItem())throw new TypeError("Model is not an array item");return this}},No=Ke,Do=he,Vo=q,Mo=Ee,$n);const po=["required","invalid","errorMessage","value","validity","checkValidity"];function mo(r){return po.some(t=>t in r)}let fi=class{constructor(t,e){_(this,"model");_(this,"_element");_(this,"_validityFallback",kn);this._element=t,this.model=e}get element(){return this._element}set element(t){this._element=t}get value(){return this.element.value}set value(t){this.element.value=t}set errorMessage(t){}get validity(){return this.element.validity??this._validityFallback}checkValidity(){if(!this.element.checkValidity)return!0;const t=this.element.checkValidity();return this._validityFallback={...kn,valid:t,...t?{}:this._detectValidityError()},t}setAttribute(t,e){e?this.element.setAttribute(t,""):this.element.removeAttribute(t)}removeEventListeners(){}_detectValidityError(){if(!("inputElement"in this.element))return{customError:!0};const t=this.element.inputElement;return this.element.value===""?t.value===""?{valueMissing:!0}:{badInput:!0}:{customError:!0}}},tn=class extends fi{constructor(e,o){super(e,o);_(this,"_invalid",!1);_(this,"_boundOnValidated",this._onValidated.bind(this));e.addEventListener("validated",this._boundOnValidated)}set required(e){this.element.required=e}set invalid(e){this._invalid=e,this.element.invalid=e}set errorMessage(e){this.element.errorMessage=e}removeEventListeners(){this.element.removeEventListener("validated",this._boundOnValidated)}_onValidated(e){if(!(e instanceof CustomEvent)||typeof e.detail!="object")return;const o=!e.detail.valid;this._invalid!==o&&(this.element.invalid=this._invalid)}},vt=class extends fi{set required(t){this.setAttribute("required",t)}set invalid(t){this.setAttribute("invalid",t)}},Ln=class extends vt{get value(){return this.model instanceof en?this.element.checked:this.element.checked?this.element.value:void 0}set value(t){this.element.checked=/^(true|on)$/iu.test(String(t))}};class go extends tn{get value(){if(this.model&&(this.model instanceof re||this.model instanceof Ie)){const{selectedItem:t}=this.element;return t===null?void 0:t}return super.value}set value(t){this.model instanceof re||this.model instanceof Ie?this.element.selectedItem=t===void 0?null:t:super.value=t}}class vo extends tn{get value(){return this.element.selectedItems}set value(t){this.element.selectedItems=t}}class bo extends vt{get value(){return this.element.selected}set value(t){this.element.selected=t}}function pi(r,t){switch(r.localName){case"vaadin-checkbox":case"vaadin-radio-button":return new Ln(r,t);case"vaadin-combo-box":return new go(r,t);case"vaadin-list-box":return new bo(r,t);case"vaadin-multi-select-combo-box":return new vo(r,t);case"vaadin-rich-text-editor":return new vt(r,t);default:return r.localName==="input"&&/^(checkbox|radio)$/u.test(r.type)?new Ln(r,t):r.constructor.version?new tn(r,t):new vt(r,t)}}class Nn extends Error{constructor(e){super(["There are validation errors in the form.",...e.map(o=>`${o.property.toString()} - ${o.validator.constructor.name}${o.message?`: ${o.message}`:""}`)].join(`
 - `));_(this,"errors");this.errors=e,this.name=this.constructor.name}}class yo{constructor(t){_(this,"message");_(this,"validate",()=>!1);this.message=t}}function Dn(r,t){return typeof t.property=="string"&&r.length>0&&(t.property=`${r}.${t.property}`),t}async function _o(r,t,e){const o=ie(r),s=o.value,c=h=>e?e(h,t,o):h;return!o.required&&!new Yt().validate(s)&&!(r instanceof ke)?[]:(async()=>t.validate(s,o.binder))().catch(h=>(console.error(`${o.name} - Validator ${t.constructor.name} threw an error:`,h),[{message:"Validator threw an error",property:o.name,validator:t,value:s}])).then(h=>h===!1?[{message:c(t.message),property:o.name,validator:t,value:s}]:h===!0||Array.isArray(h)&&h.length===0?[]:Array.isArray(h)?h.map(d=>({message:c(t.message),...Dn(o.name,d),validator:t,value:s})):[{message:c(t.message),...Dn(o.name,h),validator:t,value:s}])}const st=Symbol("submitting"),lt=Symbol("defaultValue"),Xe=Symbol("value"),dt=Symbol("emptyValue"),ct=Symbol("config"),Te=Symbol("validations"),ut=Symbol("validating"),Je=Symbol("validationRequest");var Ro,Bo,$o,Fo,Po,Uo,zo,Ho,Re;const nn=class extends hi{constructor(e,o){const s={value:void 0};super(new e(s,"value",!1));_(this,Ro);_(this,Bo);_(this,$o);_(this,Fo,!1);_(this,Po,!1);_(this,Uo);_(this,zo);_(this,Ho,new Map);$(this,Re,this);this[dt]=s.value,this.model[pe]=this,Se(this,Re,(o==null?void 0:o.context)??this),this[ct]=o,this.read(this[dt])}get defaultValue(){return this[lt]}set defaultValue(e){this[lt]=e,this.dispatchEvent(G)}get value(){return this[Xe]}set value(e){if(e===this[Xe])return;const o=this[Xe];this[Xe]=e,this.update(o),this.updateValidation().catch(()=>{})}get submitting(){return this[st]}get validating(){return this[ut]}read(e){if(e==null){this.clear();return}this.defaultValue=e,this.value&&this.clearValidation()&&this.value===e&&this.update(this.value),this.value=this.defaultValue}reset(){this.read(this[lt])}clear(){this.read(this[dt])}async submit(){var o;const e=(o=this[ct])==null?void 0:o.onSubmit;if(e)return this.submitTo(e)}async submitTo(e){const o=await this.validate();if(o.length)throw new Nn(o);this[st]=!0,this.update(this.value),this.dispatchEvent(G);try{return await e.call(k(this,Re),this.value)}catch(s){if(s instanceof ii&&s.validationErrorData.length){const c=[];throw s.validationErrorData.forEach(h=>{const d=/Object of type '(.+)' has invalid property '(.+)' with value '(.+)', validation error: '(.+)'/u.exec(h.message),[i,l,p]=d?d.splice(2):[h.parameterName??"",void 0,h.message];c.push({message:p,property:i,validator:new yo(p),value:l})}),this.setErrorsWithDescendants(c),new Nn(c)}throw s}finally{this[st]=!1,this.defaultValue=this.value,this.update(this.value)}}async requestValidation(e,o){let s;if(this[Te].has(e)?s=this[Te].get(e):(s=new Map,this[Te].set(e,s)),await this.performValidation(),s.has(o))return s.get(o);const c=_o(e,o,nn.interpolateMessageCallback);s.set(o,c);const h=await c;return s.delete(o),s.size===0&&this[Te].delete(e),this[Te].size===0&&this.completeValidation(),h}getFieldStrategy(e,o){return pi(e,o)}performValidation(){return this[Je]||(this[ut]=!0,this.dispatchEvent(G),this[Je]=Promise.resolve().then(()=>{this[Je]=void 0})),this[Je]}completeValidation(){this[ut]=!1,this.dispatchEvent(G)}update(e){var s;const o=(s=this[ct])==null?void 0:s.onChange;o&&o.call(k(this,Re),e),this.dispatchEvent(G)}};let gt=nn;Ro=lt,Bo=Xe,$o=dt,Fo=st,Po=ut,Uo=Je,zo=ct,Ho=Te,Re=new WeakMap,_(gt,"interpolateMessageCallback");const Ge=window;var Fn;Ge.Vaadin??(Ge.Vaadin={}),(Fn=Ge.Vaadin).registrations??(Fn.registrations=[]),Ge.Vaadin.registrations.push({is:"@hilla/form",version:"2.2.0"});const Ze=window;Ze.Vaadin??(Ze.Vaadin={});var Pn;(Pn=Ze.Vaadin).registrations??(Pn.registrations=[]);Ze.Vaadin.registrations.push({is:"@hilla/react-form",version:"2.3.0-alpha6"});function wo(){const[r,t]=se.useReducer(e=>e+1,0);return t}function Vn(r,t){return typeof t=="string"&&fo(r)?r[tt](t):t}function mi(r){return{addValidator:r.addValidator.bind(r),defaultValue:r.defaultValue,dirty:r.dirty,errors:r.errors,invalid:r.invalid,model:r.model,name:r.name,ownErrors:r.ownErrors,required:r.required,setValidators(t){r.validators=t},setValue(t){r.value=t},setVisited(t){r.visited=t},validate:r.validate.bind(r),validators:r.validators,value:r.value,visited:r.visited}}function gi(r){return se.useMemo(()=>{const t=new WeakMap;return e=>{const o=ie(e);o.initializeValue(!0);const s=t.get(e)??{element:void 0,errorMessage:"",invalid:!1,markVisited:()=>{o.visited=!0},ref(c){var h,d,i,l;if(!c){(h=s.element)==null||h.removeEventListener("change",s.updateValue),(d=s.element)==null||d.removeEventListener("input",s.updateValue),(i=s.element)==null||i.removeEventListener("blur",s.markVisited),(l=s.strategy)==null||l.removeEventListeners(),s.element=void 0,s.strategy=void 0;return}if(!mo(c))throw new TypeError(`Element '${c.localName}' is not a form element`);s.element!==c&&(s.element=c,s.element.addEventListener("change",s.updateValue),s.element.addEventListener("input",s.updateValue),s.element.addEventListener("blur",s.markVisited),s.strategy=pi(c,e))},required:!1,strategy:void 0,updateValue:()=>{s.strategy&&(s.strategy.invalid=!1,s.strategy.checkValidity(),s.strategy.validity.badInput||(s.value=s.strategy.value),o[Ke]=s.strategy.validity,o.value=Vn(e,s.value))},value:void 0};if(t.has(e)||t.set(e,s),s.strategy){const c=Vn(e,s.value);c!==o.value&&!(Number.isNaN(o.value)&&Number.isNaN(c))&&(s.value=o.value,s.strategy.value=o.value),s.required!==o.required&&(s.required=o.required,s.strategy.required=o.required);const h=o.ownErrors.at(0),d=(h==null?void 0:h.message)??"";s.errorMessage!==d&&(s.errorMessage=d,s.strategy.errorMessage=d),s.invalid=o.invalid,s.strategy.invalid=o.invalid}return{name:o.name,ref:s.ref}}},[r])}function Na(r,t){const e=se.useRef({});e.current.onSubmit=t==null?void 0:t.onSubmit,e.current.onChange=t==null?void 0:t.onChange;const o=wo(),s=se.useMemo(()=>new gt(r,e.current),[r]),c=gi(s);return se.useEffect(()=>{s.addEventListener(G.type,o)},[s]),{...mi(s),clear:s.clear.bind(s),field:c,read:s.read.bind(s),reset:s.reset.bind(s),setDefaultValue:h=>{s.defaultValue=h},setValue:h=>{s.value=h},submit:s.submit.bind(s),value:s.value}}function Da(r){const t=ie(r),e=gi(t);return{...mi(t),field:e}}class Va extends re{get StudentName(){return this[J]("StudentName",fe,[!0])}get Studentage(){return this[J]("Studentage",ke,[!1])}get Studentsurname(){return this[J]("Studentsurname",fe,[!0])}get availablility(){return this[J]("availablility",en,[!1])}get course(){return this[J]("course",fe,[!0])}get grade(){return this[J]("grade",ke,[!1])}get id(){return this[J]("id",ke,[!0])}get studentName(){return this[J]("studentName",fe,[!0])}get studentage(){return this[J]("studentage",ke,[!1])}get studentcode(){return this[J]("studentcode",fe,[!0])}get studentsurname(){return this[J]("studentsurname",fe,[!0])}}const Co={onValidated:"validated",onChange:"change",onInput:"input",onInvalidChanged:"invalid-changed",onValueChanged:"value-changed"},Ma=Qn({elementClass:Jt,events:Co,react:Zn,tagName:"vaadin-text-field"}),xo={},Ra=Qn({elementClass:or,events:xo,react:Zn,tagName:"vaadin-button"});export{Ra as B,sr as D,jn as I,cr as L,la as O,Va as S,Ma as T,jo as a,Da as b,sa as c,ra as d,ar as e,oa as f,lr as g,ur as h,di as i,Yr as j,Sa as k,no as l,Gr as m,Zo as p,aa as s,Na as u};
