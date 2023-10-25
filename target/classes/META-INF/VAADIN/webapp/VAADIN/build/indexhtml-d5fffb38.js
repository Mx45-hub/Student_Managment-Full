function Ip(t,e){for(var a=0;a<e.length;a++){const n=e[a];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in t)){const i=Object.getOwnPropertyDescriptor(n,r);i&&Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};window.Vaadin.featureFlags.exampleFeatureFlag=!1;window.Vaadin.featureFlags.collaborationEngineBackend=!1;window.Vaadin.featureFlags.sideNavComponent=!0;var X7=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Z2={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),Up=Symbol.for("react.portal"),jp=Symbol.for("react.fragment"),Bp=Symbol.for("react.strict_mode"),Hp=Symbol.for("react.profiler"),Vp=Symbol.for("react.provider"),Wp=Symbol.for("react.context"),Yp=Symbol.for("react.forward_ref"),Kp=Symbol.for("react.suspense"),Gp=Symbol.for("react.memo"),Qp=Symbol.for("react.lazy"),Rh=Symbol.iterator;function qp(t){return t===null||typeof t!="object"?null:(t=Rh&&t[Rh]||t["@@iterator"],typeof t=="function"?t:null)}var tc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ec=Object.assign,ac={};function N1(t,e,a){this.props=t,this.context=e,this.refs=ac,this.updater=a||tc}N1.prototype.isReactComponent={};N1.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};N1.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nc(){}nc.prototype=N1.prototype;function so(t,e,a){this.props=t,this.context=e,this.refs=ac,this.updater=a||tc}var co=so.prototype=new nc;co.constructor=so;ec(co,N1.prototype);co.isPureReactComponent=!0;var Lh=Array.isArray,rc=Object.prototype.hasOwnProperty,uo={current:null},ic={key:!0,ref:!0,__self:!0,__source:!0};function lc(t,e,a){var n,r={},i=null,l=null;if(e!=null)for(n in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(i=""+e.key),e)rc.call(e,n)&&!ic.hasOwnProperty(n)&&(r[n]=e[n]);var o=arguments.length-2;if(o===1)r.children=a;else if(1<o){for(var h=Array(o),s=0;s<o;s++)h[s]=arguments[s+2];r.children=h}if(t&&t.defaultProps)for(n in o=t.defaultProps,o)r[n]===void 0&&(r[n]=o[n]);return{$$typeof:Ka,type:t,key:i,ref:l,props:r,_owner:uo.current}}function Xp(t,e){return{$$typeof:Ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function po(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ka}function Jp(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var Dh=/\/+/g;function Xr(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Jp(""+t.key):e.toString(36)}function En(t,e,a,n,r){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Ka:case Up:l=!0}}if(l)return l=t,r=r(l),t=n===""?"."+Xr(l,0):n,Lh(r)?(a="",t!=null&&(a=t.replace(Dh,"$&/")+"/"),En(r,e,a,"",function(s){return s})):r!=null&&(po(r)&&(r=Xp(r,a+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(Dh,"$&/")+"/")+t)),e.push(r)),1;if(l=0,n=n===""?".":n+":",Lh(t))for(var o=0;o<t.length;o++){i=t[o];var h=n+Xr(i,o);l+=En(i,e,a,h,r)}else if(h=qp(t),typeof h=="function")for(t=h.call(t),o=0;!(i=t.next()).done;)i=i.value,h=n+Xr(i,o++),l+=En(i,e,a,h,r);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function rn(t,e,a){if(t==null)return t;var n=[],r=0;return En(t,n,"","",function(i){return e.call(a,i,r++)}),n}function Zp(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var U0={current:null},Cn={transition:null},t3={ReactCurrentDispatcher:U0,ReactCurrentBatchConfig:Cn,ReactCurrentOwner:uo};W.Children={map:rn,forEach:function(t,e,a){rn(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return rn(t,function(){e++}),e},toArray:function(t){return rn(t,function(e){return e})||[]},only:function(t){if(!po(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=N1;W.Fragment=jp;W.Profiler=Hp;W.PureComponent=so;W.StrictMode=Bp;W.Suspense=Kp;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t3;W.cloneElement=function(t,e,a){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=ec({},t.props),r=t.key,i=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,l=uo.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(h in e)rc.call(e,h)&&!ic.hasOwnProperty(h)&&(n[h]=e[h]===void 0&&o!==void 0?o[h]:e[h])}var h=arguments.length-2;if(h===1)n.children=a;else if(1<h){o=Array(h);for(var s=0;s<h;s++)o[s]=arguments[s+2];n.children=o}return{$$typeof:Ka,type:t.type,key:r,ref:i,props:n,_owner:l}};W.createContext=function(t){return t={$$typeof:Wp,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Vp,_context:t},t.Consumer=t};W.createElement=lc;W.createFactory=function(t){var e=lc.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:Yp,render:t}};W.isValidElement=po;W.lazy=function(t){return{$$typeof:Qp,_payload:{_status:-1,_result:t},_init:Zp}};W.memo=function(t,e){return{$$typeof:Gp,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=Cn.transition;Cn.transition={};try{t()}finally{Cn.transition=e}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(t,e){return U0.current.useCallback(t,e)};W.useContext=function(t){return U0.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return U0.current.useDeferredValue(t)};W.useEffect=function(t,e){return U0.current.useEffect(t,e)};W.useId=function(){return U0.current.useId()};W.useImperativeHandle=function(t,e,a){return U0.current.useImperativeHandle(t,e,a)};W.useInsertionEffect=function(t,e){return U0.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return U0.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return U0.current.useMemo(t,e)};W.useReducer=function(t,e,a){return U0.current.useReducer(t,e,a)};W.useRef=function(t){return U0.current.useRef(t)};W.useState=function(t){return U0.current.useState(t)};W.useSyncExternalStore=function(t,e,a){return U0.current.useSyncExternalStore(t,e,a)};W.useTransition=function(){return U0.current.useTransition()};W.version="18.2.0";Z2.exports=W;var A=Z2.exports;const e3=Fp(A),w1=Ip({__proto__:null,default:e3},[A]);var oc={exports:{}},et={},hc={exports:{}},sc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,$){var R=N.length;N.push($);t:for(;0<R;){var X=R-1>>>1,r0=N[X];if(0<r(r0,$))N[X]=$,N[R]=r0,R=X;else break t}}function a(N){return N.length===0?null:N[0]}function n(N){if(N.length===0)return null;var $=N[0],R=N.pop();if(R!==$){N[0]=R;t:for(var X=0,r0=N.length,xt=r0>>>1;X<xt;){var z0=2*(X+1)-1,Xt=N[z0],ct=z0+1,nt=N[ct];if(0>r(Xt,R))ct<r0&&0>r(nt,Xt)?(N[X]=nt,N[ct]=R,X=ct):(N[X]=Xt,N[z0]=R,X=z0);else if(ct<r0&&0>r(nt,R))N[X]=nt,N[ct]=R,X=ct;else break t}}return $}function r(N,$){var R=N.sortIndex-$.sortIndex;return R!==0?R:N.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,o=l.now();t.unstable_now=function(){return l.now()-o}}var h=[],s=[],c=1,d=null,p=3,g=!1,z=!1,M=!1,m=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(N){for(var $=a(s);$!==null;){if($.callback===null)n(s);else if($.startTime<=N)n(s),$.sortIndex=$.expirationTime,e(h,$);else break;$=a(s)}}function y(N){if(M=!1,f(N),!z)if(a(h)!==null)z=!0,_t(x);else{var $=a(s);$!==null&&Ot(y,$.startTime-N)}}function x(N,$){z=!1,M&&(M=!1,v(P),P=-1),g=!0;var R=p;try{for(f($),d=a(h);d!==null&&(!(d.expirationTime>$)||N&&!c0());){var X=d.callback;if(typeof X=="function"){d.callback=null,p=d.priorityLevel;var r0=X(d.expirationTime<=$);$=t.unstable_now(),typeof r0=="function"?d.callback=r0:d===a(h)&&n(h),f($)}else n(h);d=a(h)}if(d!==null)var xt=!0;else{var z0=a(s);z0!==null&&Ot(y,z0.startTime-$),xt=!1}return xt}finally{d=null,p=R,g=!1}}var k=!1,C=null,P=-1,q=5,F=-1;function c0(){return!(t.unstable_now()-F<q)}function b0(){if(C!==null){var N=t.unstable_now();F=N;var $=!0;try{$=C(!0,N)}finally{$?$0():(k=!1,C=null)}}else k=!1}var $0;if(typeof u=="function")$0=function(){u(b0)};else if(typeof MessageChannel<"u"){var G0=new MessageChannel,E0=G0.port2;G0.port1.onmessage=b0,$0=function(){E0.postMessage(null)}}else $0=function(){m(b0,0)};function _t(N){C=N,k||(k=!0,$0())}function Ot(N,$){P=m(function(){N(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){z||g||(z=!0,_t(x))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return a(h)},t.unstable_next=function(N){switch(p){case 1:case 2:case 3:var $=3;break;default:$=p}var R=p;p=$;try{return N()}finally{p=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,$){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var R=p;p=N;try{return $()}finally{p=R}},t.unstable_scheduleCallback=function(N,$,R){var X=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?X+R:X):R=X,N){case 1:var r0=-1;break;case 2:r0=250;break;case 5:r0=1073741823;break;case 4:r0=1e4;break;default:r0=5e3}return r0=R+r0,N={id:c++,callback:$,priorityLevel:N,startTime:R,expirationTime:r0,sortIndex:-1},R>X?(N.sortIndex=R,e(s,N),a(h)===null&&N===a(s)&&(M?(v(P),P=-1):M=!0,Ot(y,R-X))):(N.sortIndex=r0,e(h,N),z||g||(z=!0,_t(x))),N},t.unstable_shouldYield=c0,t.unstable_wrapCallback=function(N){var $=p;return function(){var R=p;p=$;try{return N.apply(this,arguments)}finally{p=R}}}})(sc);hc.exports=sc;var a3=hc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cc=A,tt=a3;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dc=new Set,Ma={};function je(t,e){_1(t,e),_1(t+"Capture",e)}function _1(t,e){for(Ma[t]=e,t=0;t<e.length;t++)dc.add(e[t])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hi=Object.prototype.hasOwnProperty,n3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$h={},Ih={};function r3(t){return Hi.call(Ih,t)?!0:Hi.call($h,t)?!1:n3.test(t)?Ih[t]=!0:($h[t]=!0,!1)}function i3(t,e,a,n){if(a!==null&&a.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function l3(t,e,a,n){if(e===null||typeof e>"u"||i3(t,e,a,n))return!0;if(n)return!1;if(a!==null)switch(a.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function j0(t,e,a,n,r,i,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=r,this.mustUseProperty=a,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=l}var T0={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){T0[t]=new j0(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];T0[e]=new j0(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){T0[t]=new j0(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){T0[t]=new j0(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){T0[t]=new j0(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){T0[t]=new j0(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){T0[t]=new j0(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){T0[t]=new j0(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){T0[t]=new j0(t,5,!1,t.toLowerCase(),null,!1,!1)});var vo=/[\-:]([a-z])/g;function fo(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vo,fo);T0[e]=new j0(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vo,fo);T0[e]=new j0(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vo,fo);T0[e]=new j0(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){T0[t]=new j0(t,1,!1,t.toLowerCase(),null,!1,!1)});T0.xlinkHref=new j0("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){T0[t]=new j0(t,1,!1,t.toLowerCase(),null,!0,!0)});function mo(t,e,a,n){var r=T0.hasOwnProperty(e)?T0[e]:null;(r!==null?r.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(l3(e,a,r,n)&&(a=null),n||r===null?r3(e)&&(a===null?t.removeAttribute(e):t.setAttribute(e,""+a)):r.mustUseProperty?t[r.propertyName]=a===null?r.type===3?!1:"":a:(e=r.attributeName,n=r.attributeNamespace,a===null?t.removeAttribute(e):(r=r.type,a=r===3||r===4&&a===!0?"":""+a,n?t.setAttributeNS(n,e,a):t.setAttribute(e,a))))}var Qt=cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ln=Symbol.for("react.element"),Xe=Symbol.for("react.portal"),Je=Symbol.for("react.fragment"),go=Symbol.for("react.strict_mode"),Vi=Symbol.for("react.profiler"),uc=Symbol.for("react.provider"),pc=Symbol.for("react.context"),zo=Symbol.for("react.forward_ref"),Wi=Symbol.for("react.suspense"),Yi=Symbol.for("react.suspense_list"),Mo=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),vc=Symbol.for("react.offscreen"),Fh=Symbol.iterator;function U1(t){return t===null||typeof t!="object"?null:(t=Fh&&t[Fh]||t["@@iterator"],typeof t=="function"?t:null)}var h0=Object.assign,Jr;function ea(t){if(Jr===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Jr=e&&e[1]||""}return`
`+Jr+t}var Zr=!1;function ti(t,e){if(!t||Zr)return"";Zr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(s){var n=s}Reflect.construct(t,[],e)}else{try{e.call()}catch(s){n=s}t.call(e.prototype)}else{try{throw Error()}catch(s){n=s}t()}}catch(s){if(s&&n&&typeof s.stack=="string"){for(var r=s.stack.split(`
`),i=n.stack.split(`
`),l=r.length-1,o=i.length-1;1<=l&&0<=o&&r[l]!==i[o];)o--;for(;1<=l&&0<=o;l--,o--)if(r[l]!==i[o]){if(l!==1||o!==1)do if(l--,o--,0>o||r[l]!==i[o]){var h=`
`+r[l].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=l&&0<=o);break}}}finally{Zr=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ea(t):""}function o3(t){switch(t.tag){case 5:return ea(t.type);case 16:return ea("Lazy");case 13:return ea("Suspense");case 19:return ea("SuspenseList");case 0:case 2:case 15:return t=ti(t.type,!1),t;case 11:return t=ti(t.type.render,!1),t;case 1:return t=ti(t.type,!0),t;default:return""}}function Ki(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Je:return"Fragment";case Xe:return"Portal";case Vi:return"Profiler";case go:return"StrictMode";case Wi:return"Suspense";case Yi:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pc:return(t.displayName||"Context")+".Consumer";case uc:return(t._context.displayName||"Context")+".Provider";case zo:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mo:return e=t.displayName||null,e!==null?e:Ki(t.type)||"Memo";case Zt:e=t._payload,t=t._init;try{return Ki(t(e))}catch{}}return null}function h3(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ki(e);case 8:return e===go?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function s3(t){var e=fc(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(l){n=""+l,i.call(this,l)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function on(t){t._valueTracker||(t._valueTracker=s3(t))}function mc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=fc(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function jn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gi(t,e){var a=e.checked;return h0({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Uh(t,e){var a=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;a=fe(e.value!=null?e.value:a),t._wrapperState={initialChecked:n,initialValue:a,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gc(t,e){e=e.checked,e!=null&&mo(t,"checked",e,!1)}function Qi(t,e){gc(t,e);var a=fe(e.value),n=e.type;if(a!=null)n==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qi(t,e.type,a):e.hasOwnProperty("defaultValue")&&qi(t,e.type,fe(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jh(t,e,a){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,a||e===t.value||(t.value=e),t.defaultValue=e}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function qi(t,e,a){(e!=="number"||jn(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var aa=Array.isArray;function d1(t,e,a,n){if(t=t.options,e){e={};for(var r=0;r<a.length;r++)e["$"+a[r]]=!0;for(a=0;a<t.length;a++)r=e.hasOwnProperty("$"+t[a].value),t[a].selected!==r&&(t[a].selected=r),r&&n&&(t[a].defaultSelected=!0)}else{for(a=""+fe(a),e=null,r=0;r<t.length;r++){if(t[r].value===a){t[r].selected=!0,n&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Xi(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return h0({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bh(t,e){var a=e.value;if(a==null){if(a=e.children,e=e.defaultValue,a!=null){if(e!=null)throw Error(b(92));if(aa(a)){if(1<a.length)throw Error(b(93));a=a[0]}e=a}e==null&&(e=""),a=e}t._wrapperState={initialValue:fe(a)}}function zc(t,e){var a=fe(e.value),n=fe(e.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),e.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),n!=null&&(t.defaultValue=""+n)}function Hh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Mc(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ji(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Mc(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var hn,yc=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,a,n,r){MSApp.execUnsafeLocalFunction(function(){return t(e,a,n,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(hn=hn||document.createElement("div"),hn.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hn.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ya(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},c3=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(t){c3.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oa[e]=oa[t]})});function wc(t,e,a){return e==null||typeof e=="boolean"||e===""?"":a||typeof e!="number"||e===0||oa.hasOwnProperty(t)&&oa[t]?(""+e).trim():e+"px"}function _c(t,e){t=t.style;for(var a in e)if(e.hasOwnProperty(a)){var n=a.indexOf("--")===0,r=wc(a,e[a],n);a==="float"&&(a="cssFloat"),n?t.setProperty(a,r):t[a]=r}}var d3=h0({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zi(t,e){if(e){if(d3[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function tl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var el=null;function yo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var al=null,u1=null,p1=null;function Vh(t){if(t=qa(t)){if(typeof al!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Sr(e),al(t.stateNode,t.type,e))}}function xc(t){u1?p1?p1.push(t):p1=[t]:u1=t}function Sc(){if(u1){var t=u1,e=p1;if(p1=u1=null,Vh(t),e)for(t=0;t<e.length;t++)Vh(e[t])}}function bc(t,e){return t(e)}function Ec(){}var ei=!1;function Cc(t,e,a){if(ei)return t(e,a);ei=!0;try{return bc(t,e,a)}finally{ei=!1,(u1!==null||p1!==null)&&(Ec(),Sc())}}function wa(t,e){var a=t.stateNode;if(a===null)return null;var n=Sr(a);if(n===null)return null;a=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(b(231,e,typeof a));return a}var nl=!1;if(Vt)try{var j1={};Object.defineProperty(j1,"passive",{get:function(){nl=!0}}),window.addEventListener("test",j1,j1),window.removeEventListener("test",j1,j1)}catch{nl=!1}function u3(t,e,a,n,r,i,l,o,h){var s=Array.prototype.slice.call(arguments,3);try{e.apply(a,s)}catch(c){this.onError(c)}}var ha=!1,Bn=null,Hn=!1,rl=null,p3={onError:function(t){ha=!0,Bn=t}};function v3(t,e,a,n,r,i,l,o,h){ha=!1,Bn=null,u3.apply(p3,arguments)}function f3(t,e,a,n,r,i,l,o,h){if(v3.apply(this,arguments),ha){if(ha){var s=Bn;ha=!1,Bn=null}else throw Error(b(198));Hn||(Hn=!0,rl=s)}}function Be(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function kc(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wh(t){if(Be(t)!==t)throw Error(b(188))}function m3(t){var e=t.alternate;if(!e){if(e=Be(t),e===null)throw Error(b(188));return e!==t?null:t}for(var a=t,n=e;;){var r=a.return;if(r===null)break;var i=r.alternate;if(i===null){if(n=r.return,n!==null){a=n;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===a)return Wh(r),t;if(i===n)return Wh(r),e;i=i.sibling}throw Error(b(188))}if(a.return!==n.return)a=r,n=i;else{for(var l=!1,o=r.child;o;){if(o===a){l=!0,a=r,n=i;break}if(o===n){l=!0,n=r,a=i;break}o=o.sibling}if(!l){for(o=i.child;o;){if(o===a){l=!0,a=i,n=r;break}if(o===n){l=!0,n=i,a=r;break}o=o.sibling}if(!l)throw Error(b(189))}}if(a.alternate!==n)throw Error(b(190))}if(a.tag!==3)throw Error(b(188));return a.stateNode.current===a?t:e}function Pc(t){return t=m3(t),t!==null?Ac(t):null}function Ac(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ac(t);if(e!==null)return e;t=t.sibling}return null}var Tc=tt.unstable_scheduleCallback,Yh=tt.unstable_cancelCallback,g3=tt.unstable_shouldYield,z3=tt.unstable_requestPaint,p0=tt.unstable_now,M3=tt.unstable_getCurrentPriorityLevel,wo=tt.unstable_ImmediatePriority,Nc=tt.unstable_UserBlockingPriority,Vn=tt.unstable_NormalPriority,y3=tt.unstable_LowPriority,Oc=tt.unstable_IdlePriority,yr=null,Pt=null;function w3(t){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(yr,t,void 0,(t.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:S3,_3=Math.log,x3=Math.LN2;function S3(t){return t>>>=0,t===0?32:31-(_3(t)/x3|0)|0}var sn=64,cn=4194304;function na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wn(t,e){var a=t.pendingLanes;if(a===0)return 0;var n=0,r=t.suspendedLanes,i=t.pingedLanes,l=a&268435455;if(l!==0){var o=l&~r;o!==0?n=na(o):(i&=l,i!==0&&(n=na(i)))}else l=a&~r,l!==0?n=na(l):i!==0&&(n=na(i));if(n===0)return 0;if(e!==0&&e!==n&&!(e&r)&&(r=n&-n,i=e&-e,r>=i||r===16&&(i&4194240)!==0))return e;if(n&4&&(n|=a&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)a=31-zt(e),r=1<<a,n|=t[a],e&=~r;return n}function b3(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function E3(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,r=t.expirationTimes,i=t.pendingLanes;0<i;){var l=31-zt(i),o=1<<l,h=r[l];h===-1?(!(o&a)||o&n)&&(r[l]=b3(o,e)):h<=e&&(t.expiredLanes|=o),i&=~o}}function il(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rc(){var t=sn;return sn<<=1,!(sn&4194240)&&(sn=64),t}function ai(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Ga(t,e,a){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zt(e),t[e]=a}function C3(t,e){var a=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<a;){var r=31-zt(a),i=1<<r;e[r]=0,n[r]=-1,t[r]=-1,a&=~i}}function _o(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-zt(a),r=1<<n;r&e|t[n]&e&&(t[n]|=e),a&=~r}}var J=0;function Lc(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Dc,xo,$c,Ic,Fc,ll=!1,dn=[],le=null,oe=null,he=null,_a=new Map,xa=new Map,ee=[],k3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kh(t,e){switch(t){case"focusin":case"focusout":le=null;break;case"dragenter":case"dragleave":oe=null;break;case"mouseover":case"mouseout":he=null;break;case"pointerover":case"pointerout":_a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(e.pointerId)}}function B1(t,e,a,n,r,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[r]},e!==null&&(e=qa(e),e!==null&&xo(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function P3(t,e,a,n,r){switch(e){case"focusin":return le=B1(le,t,e,a,n,r),!0;case"dragenter":return oe=B1(oe,t,e,a,n,r),!0;case"mouseover":return he=B1(he,t,e,a,n,r),!0;case"pointerover":var i=r.pointerId;return _a.set(i,B1(_a.get(i)||null,t,e,a,n,r)),!0;case"gotpointercapture":return i=r.pointerId,xa.set(i,B1(xa.get(i)||null,t,e,a,n,r)),!0}return!1}function Uc(t){var e=be(t.target);if(e!==null){var a=Be(e);if(a!==null){if(e=a.tag,e===13){if(e=kc(a),e!==null){t.blockedOn=e,Fc(t.priority,function(){$c(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kn(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=ol(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);el=n,a.target.dispatchEvent(n),el=null}else return e=qa(a),e!==null&&xo(e),t.blockedOn=a,!1;e.shift()}return!0}function Gh(t,e,a){kn(t)&&a.delete(e)}function A3(){ll=!1,le!==null&&kn(le)&&(le=null),oe!==null&&kn(oe)&&(oe=null),he!==null&&kn(he)&&(he=null),_a.forEach(Gh),xa.forEach(Gh)}function H1(t,e){t.blockedOn===e&&(t.blockedOn=null,ll||(ll=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,A3)))}function Sa(t){function e(r){return H1(r,t)}if(0<dn.length){H1(dn[0],t);for(var a=1;a<dn.length;a++){var n=dn[a];n.blockedOn===t&&(n.blockedOn=null)}}for(le!==null&&H1(le,t),oe!==null&&H1(oe,t),he!==null&&H1(he,t),_a.forEach(e),xa.forEach(e),a=0;a<ee.length;a++)n=ee[a],n.blockedOn===t&&(n.blockedOn=null);for(;0<ee.length&&(a=ee[0],a.blockedOn===null);)Uc(a),a.blockedOn===null&&ee.shift()}var v1=Qt.ReactCurrentBatchConfig,Yn=!0;function T3(t,e,a,n){var r=J,i=v1.transition;v1.transition=null;try{J=1,So(t,e,a,n)}finally{J=r,v1.transition=i}}function N3(t,e,a,n){var r=J,i=v1.transition;v1.transition=null;try{J=4,So(t,e,a,n)}finally{J=r,v1.transition=i}}function So(t,e,a,n){if(Yn){var r=ol(t,e,a,n);if(r===null)ui(t,e,n,Kn,a),Kh(t,n);else if(P3(r,t,e,a,n))n.stopPropagation();else if(Kh(t,n),e&4&&-1<k3.indexOf(t)){for(;r!==null;){var i=qa(r);if(i!==null&&Dc(i),i=ol(t,e,a,n),i===null&&ui(t,e,n,Kn,a),i===r)break;r=i}r!==null&&n.stopPropagation()}else ui(t,e,n,null,a)}}var Kn=null;function ol(t,e,a,n){if(Kn=null,t=yo(n),t=be(t),t!==null)if(e=Be(t),e===null)t=null;else if(a=e.tag,a===13){if(t=kc(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Kn=t,null}function jc(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(M3()){case wo:return 1;case Nc:return 4;case Vn:case y3:return 16;case Oc:return 536870912;default:return 16}default:return 16}}var re=null,bo=null,Pn=null;function Bc(){if(Pn)return Pn;var t,e=bo,a=e.length,n,r="value"in re?re.value:re.textContent,i=r.length;for(t=0;t<a&&e[t]===r[t];t++);var l=a-t;for(n=1;n<=l&&e[a-n]===r[i-n];n++);return Pn=r.slice(t,1<n?1-n:void 0)}function An(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function un(){return!0}function Qh(){return!1}function at(t){function e(a,n,r,i,l){this._reactName=a,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(a=t[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?un:Qh,this.isPropagationStopped=Qh,this}return h0(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=un)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=un)},persist:function(){},isPersistent:un}),e}var O1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eo=at(O1),Qa=h0({},O1,{view:0,detail:0}),O3=at(Qa),ni,ri,V1,wr=h0({},Qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Co,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==V1&&(V1&&t.type==="mousemove"?(ni=t.screenX-V1.screenX,ri=t.screenY-V1.screenY):ri=ni=0,V1=t),ni)},movementY:function(t){return"movementY"in t?t.movementY:ri}}),qh=at(wr),R3=h0({},wr,{dataTransfer:0}),L3=at(R3),D3=h0({},Qa,{relatedTarget:0}),ii=at(D3),$3=h0({},O1,{animationName:0,elapsedTime:0,pseudoElement:0}),I3=at($3),F3=h0({},O1,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U3=at(F3),j3=h0({},O1,{data:0}),Xh=at(j3),B3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W3(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=V3[t])?!!e[t]:!1}function Co(){return W3}var Y3=h0({},Qa,{key:function(t){if(t.key){var e=B3[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=An(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?H3[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Co,charCode:function(t){return t.type==="keypress"?An(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?An(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),K3=at(Y3),G3=h0({},wr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jh=at(G3),Q3=h0({},Qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Co}),q3=at(Q3),X3=h0({},O1,{propertyName:0,elapsedTime:0,pseudoElement:0}),J3=at(X3),Z3=h0({},wr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),t4=at(Z3),e4=[9,13,27,32],ko=Vt&&"CompositionEvent"in window,sa=null;Vt&&"documentMode"in document&&(sa=document.documentMode);var a4=Vt&&"TextEvent"in window&&!sa,Hc=Vt&&(!ko||sa&&8<sa&&11>=sa),Zh=String.fromCharCode(32),ts=!1;function Vc(t,e){switch(t){case"keyup":return e4.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ze=!1;function n4(t,e){switch(t){case"compositionend":return Wc(e);case"keypress":return e.which!==32?null:(ts=!0,Zh);case"textInput":return t=e.data,t===Zh&&ts?null:t;default:return null}}function r4(t,e){if(Ze)return t==="compositionend"||!ko&&Vc(t,e)?(t=Bc(),Pn=bo=re=null,Ze=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hc&&e.locale!=="ko"?null:e.data;default:return null}}var i4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function es(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!i4[t.type]:e==="textarea"}function Yc(t,e,a,n){xc(n),e=Gn(e,"onChange"),0<e.length&&(a=new Eo("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var ca=null,ba=null;function l4(t){nd(t,0)}function _r(t){var e=a1(t);if(mc(e))return t}function o4(t,e){if(t==="change")return e}var Kc=!1;if(Vt){var li;if(Vt){var oi="oninput"in document;if(!oi){var as=document.createElement("div");as.setAttribute("oninput","return;"),oi=typeof as.oninput=="function"}li=oi}else li=!1;Kc=li&&(!document.documentMode||9<document.documentMode)}function ns(){ca&&(ca.detachEvent("onpropertychange",Gc),ba=ca=null)}function Gc(t){if(t.propertyName==="value"&&_r(ba)){var e=[];Yc(e,ba,t,yo(t)),Cc(l4,e)}}function h4(t,e,a){t==="focusin"?(ns(),ca=e,ba=a,ca.attachEvent("onpropertychange",Gc)):t==="focusout"&&ns()}function s4(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _r(ba)}function c4(t,e){if(t==="click")return _r(e)}function d4(t,e){if(t==="input"||t==="change")return _r(e)}function u4(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yt=typeof Object.is=="function"?Object.is:u4;function Ea(t,e){if(yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var r=a[n];if(!Hi.call(e,r)||!yt(t[r],e[r]))return!1}return!0}function rs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function is(t,e){var a=rs(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=rs(a)}}function Qc(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qc(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function qc(){for(var t=window,e=jn();e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=jn(t.document)}return e}function Po(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function p4(t){var e=qc(),a=t.focusedElem,n=t.selectionRange;if(e!==a&&a&&a.ownerDocument&&Qc(a.ownerDocument.documentElement,a)){if(n!==null&&Po(a)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in a)a.selectionStart=e,a.selectionEnd=Math.min(t,a.value.length);else if(t=(e=a.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=a.textContent.length,i=Math.min(n.start,r);n=n.end===void 0?i:Math.min(n.end,r),!t.extend&&i>n&&(r=n,n=i,i=r),r=is(a,i);var l=is(a,n);r&&l&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),i>n?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=a;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<e.length;a++)t=e[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var v4=Vt&&"documentMode"in document&&11>=document.documentMode,t1=null,hl=null,da=null,sl=!1;function ls(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sl||t1==null||t1!==jn(n)||(n=t1,"selectionStart"in n&&Po(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),da&&Ea(da,n)||(da=n,n=Gn(hl,"onSelect"),0<n.length&&(e=new Eo("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=t1)))}function pn(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var e1={animationend:pn("Animation","AnimationEnd"),animationiteration:pn("Animation","AnimationIteration"),animationstart:pn("Animation","AnimationStart"),transitionend:pn("Transition","TransitionEnd")},hi={},Xc={};Vt&&(Xc=document.createElement("div").style,"AnimationEvent"in window||(delete e1.animationend.animation,delete e1.animationiteration.animation,delete e1.animationstart.animation),"TransitionEvent"in window||delete e1.transitionend.transition);function xr(t){if(hi[t])return hi[t];if(!e1[t])return t;var e=e1[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Xc)return hi[t]=e[a];return t}var Jc=xr("animationend"),Zc=xr("animationiteration"),td=xr("animationstart"),ed=xr("transitionend"),ad=new Map,os="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ge(t,e){ad.set(t,e),je(e,[t])}for(var si=0;si<os.length;si++){var ci=os[si],f4=ci.toLowerCase(),m4=ci[0].toUpperCase()+ci.slice(1);ge(f4,"on"+m4)}ge(Jc,"onAnimationEnd");ge(Zc,"onAnimationIteration");ge(td,"onAnimationStart");ge("dblclick","onDoubleClick");ge("focusin","onFocus");ge("focusout","onBlur");ge(ed,"onTransitionEnd");_1("onMouseEnter",["mouseout","mouseover"]);_1("onMouseLeave",["mouseout","mouseover"]);_1("onPointerEnter",["pointerout","pointerover"]);_1("onPointerLeave",["pointerout","pointerover"]);je("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));je("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));je("onBeforeInput",["compositionend","keypress","textInput","paste"]);je("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));je("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));je("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g4=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function hs(t,e,a){var n=t.type||"unknown-event";t.currentTarget=a,f3(n,e,void 0,t),t.currentTarget=null}function nd(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],r=n.event;n=n.listeners;t:{var i=void 0;if(e)for(var l=n.length-1;0<=l;l--){var o=n[l],h=o.instance,s=o.currentTarget;if(o=o.listener,h!==i&&r.isPropagationStopped())break t;hs(r,o,s),i=h}else for(l=0;l<n.length;l++){if(o=n[l],h=o.instance,s=o.currentTarget,o=o.listener,h!==i&&r.isPropagationStopped())break t;hs(r,o,s),i=h}}}if(Hn)throw t=rl,Hn=!1,rl=null,t}function a0(t,e){var a=e[vl];a===void 0&&(a=e[vl]=new Set);var n=t+"__bubble";a.has(n)||(rd(e,t,2,!1),a.add(n))}function di(t,e,a){var n=0;e&&(n|=4),rd(a,t,n,e)}var vn="_reactListening"+Math.random().toString(36).slice(2);function Ca(t){if(!t[vn]){t[vn]=!0,dc.forEach(function(a){a!=="selectionchange"&&(g4.has(a)||di(a,!1,t),di(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vn]||(e[vn]=!0,di("selectionchange",!1,e))}}function rd(t,e,a,n){switch(jc(e)){case 1:var r=T3;break;case 4:r=N3;break;default:r=So}a=r.bind(null,e,a,t),r=void 0,!nl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),n?r!==void 0?t.addEventListener(e,a,{capture:!0,passive:r}):t.addEventListener(e,a,!0):r!==void 0?t.addEventListener(e,a,{passive:r}):t.addEventListener(e,a,!1)}function ui(t,e,a,n,r){var i=n;if(!(e&1)&&!(e&2)&&n!==null)t:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var o=n.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(l===4)for(l=n.return;l!==null;){var h=l.tag;if((h===3||h===4)&&(h=l.stateNode.containerInfo,h===r||h.nodeType===8&&h.parentNode===r))return;l=l.return}for(;o!==null;){if(l=be(o),l===null)return;if(h=l.tag,h===5||h===6){n=i=l;continue t}o=o.parentNode}}n=n.return}Cc(function(){var s=i,c=yo(a),d=[];t:{var p=ad.get(t);if(p!==void 0){var g=Eo,z=t;switch(t){case"keypress":if(An(a)===0)break t;case"keydown":case"keyup":g=K3;break;case"focusin":z="focus",g=ii;break;case"focusout":z="blur",g=ii;break;case"beforeblur":case"afterblur":g=ii;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=L3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=q3;break;case Jc:case Zc:case td:g=I3;break;case ed:g=J3;break;case"scroll":g=O3;break;case"wheel":g=t4;break;case"copy":case"cut":case"paste":g=U3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Jh}var M=(e&4)!==0,m=!M&&t==="scroll",v=M?p!==null?p+"Capture":null:p;M=[];for(var u=s,f;u!==null;){f=u;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,v!==null&&(y=wa(u,v),y!=null&&M.push(ka(u,y,f)))),m)break;u=u.return}0<M.length&&(p=new g(p,z,null,a,c),d.push({event:p,listeners:M}))}}if(!(e&7)){t:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&a!==el&&(z=a.relatedTarget||a.fromElement)&&(be(z)||z[Wt]))break t;if((g||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,g?(z=a.relatedTarget||a.toElement,g=s,z=z?be(z):null,z!==null&&(m=Be(z),z!==m||z.tag!==5&&z.tag!==6)&&(z=null)):(g=null,z=s),g!==z)){if(M=qh,y="onMouseLeave",v="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(M=Jh,y="onPointerLeave",v="onPointerEnter",u="pointer"),m=g==null?p:a1(g),f=z==null?p:a1(z),p=new M(y,u+"leave",g,a,c),p.target=m,p.relatedTarget=f,y=null,be(c)===s&&(M=new M(v,u+"enter",z,a,c),M.target=f,M.relatedTarget=m,y=M),m=y,g&&z)e:{for(M=g,v=z,u=0,f=M;f;f=Ye(f))u++;for(f=0,y=v;y;y=Ye(y))f++;for(;0<u-f;)M=Ye(M),u--;for(;0<f-u;)v=Ye(v),f--;for(;u--;){if(M===v||v!==null&&M===v.alternate)break e;M=Ye(M),v=Ye(v)}M=null}else M=null;g!==null&&ss(d,p,g,M,!1),z!==null&&m!==null&&ss(d,m,z,M,!0)}}t:{if(p=s?a1(s):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var x=o4;else if(es(p))if(Kc)x=d4;else{x=s4;var k=h4}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=c4);if(x&&(x=x(t,s))){Yc(d,x,a,c);break t}k&&k(t,p,s),t==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&qi(p,"number",p.value)}switch(k=s?a1(s):window,t){case"focusin":(es(k)||k.contentEditable==="true")&&(t1=k,hl=s,da=null);break;case"focusout":da=hl=t1=null;break;case"mousedown":sl=!0;break;case"contextmenu":case"mouseup":case"dragend":sl=!1,ls(d,a,c);break;case"selectionchange":if(v4)break;case"keydown":case"keyup":ls(d,a,c)}var C;if(ko)t:{switch(t){case"compositionstart":var P="onCompositionStart";break t;case"compositionend":P="onCompositionEnd";break t;case"compositionupdate":P="onCompositionUpdate";break t}P=void 0}else Ze?Vc(t,a)&&(P="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(P="onCompositionStart");P&&(Hc&&a.locale!=="ko"&&(Ze||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ze&&(C=Bc()):(re=c,bo="value"in re?re.value:re.textContent,Ze=!0)),k=Gn(s,P),0<k.length&&(P=new Xh(P,t,null,a,c),d.push({event:P,listeners:k}),C?P.data=C:(C=Wc(a),C!==null&&(P.data=C)))),(C=a4?n4(t,a):r4(t,a))&&(s=Gn(s,"onBeforeInput"),0<s.length&&(c=new Xh("onBeforeInput","beforeinput",null,a,c),d.push({event:c,listeners:s}),c.data=C))}nd(d,e)})}function ka(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Gn(t,e){for(var a=e+"Capture",n=[];t!==null;){var r=t,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=wa(t,a),i!=null&&n.unshift(ka(t,i,r)),i=wa(t,e),i!=null&&n.push(ka(t,i,r))),t=t.return}return n}function Ye(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ss(t,e,a,n,r){for(var i=e._reactName,l=[];a!==null&&a!==n;){var o=a,h=o.alternate,s=o.stateNode;if(h!==null&&h===n)break;o.tag===5&&s!==null&&(o=s,r?(h=wa(a,i),h!=null&&l.unshift(ka(a,h,o))):r||(h=wa(a,i),h!=null&&l.push(ka(a,h,o)))),a=a.return}l.length!==0&&t.push({event:e,listeners:l})}var z4=/\r\n?/g,M4=/\u0000|\uFFFD/g;function cs(t){return(typeof t=="string"?t:""+t).replace(z4,`
`).replace(M4,"")}function fn(t,e,a){if(e=cs(e),cs(t)!==e&&a)throw Error(b(425))}function Qn(){}var cl=null,dl=null;function ul(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pl=typeof setTimeout=="function"?setTimeout:void 0,y4=typeof clearTimeout=="function"?clearTimeout:void 0,ds=typeof Promise=="function"?Promise:void 0,w4=typeof queueMicrotask=="function"?queueMicrotask:typeof ds<"u"?function(t){return ds.resolve(null).then(t).catch(_4)}:pl;function _4(t){setTimeout(function(){throw t})}function pi(t,e){var a=e,n=0;do{var r=a.nextSibling;if(t.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(n===0){t.removeChild(r),Sa(e);return}n--}else a!=="$"&&a!=="$?"&&a!=="$!"||n++;a=r}while(a);Sa(e)}function se(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function us(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}var R1=Math.random().toString(36).slice(2),kt="__reactFiber$"+R1,Pa="__reactProps$"+R1,Wt="__reactContainer$"+R1,vl="__reactEvents$"+R1,x4="__reactListeners$"+R1,S4="__reactHandles$"+R1;function be(t){var e=t[kt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Wt]||a[kt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=us(t);t!==null;){if(a=t[kt])return a;t=us(t)}return e}t=a,a=t.parentNode}return null}function qa(t){return t=t[kt]||t[Wt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function a1(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Sr(t){return t[Pa]||null}var fl=[],n1=-1;function ze(t){return{current:t}}function n0(t){0>n1||(t.current=fl[n1],fl[n1]=null,n1--)}function e0(t,e){n1++,fl[n1]=t.current,t.current=e}var me={},D0=ze(me),W0=ze(!1),Re=me;function x1(t,e){var a=t.type.contextTypes;if(!a)return me;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in a)r[i]=e[i];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Y0(t){return t=t.childContextTypes,t!=null}function qn(){n0(W0),n0(D0)}function ps(t,e,a){if(D0.current!==me)throw Error(b(168));e0(D0,e),e0(W0,a)}function id(t,e,a){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return a;n=n.getChildContext();for(var r in n)if(!(r in e))throw Error(b(108,h3(t)||"Unknown",r));return h0({},a,n)}function Xn(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||me,Re=D0.current,e0(D0,t),e0(W0,W0.current),!0}function vs(t,e,a){var n=t.stateNode;if(!n)throw Error(b(169));a?(t=id(t,e,Re),n.__reactInternalMemoizedMergedChildContext=t,n0(W0),n0(D0),e0(D0,t)):n0(W0),e0(W0,a)}var Ft=null,br=!1,vi=!1;function ld(t){Ft===null?Ft=[t]:Ft.push(t)}function b4(t){br=!0,ld(t)}function Me(){if(!vi&&Ft!==null){vi=!0;var t=0,e=J;try{var a=Ft;for(J=1;t<a.length;t++){var n=a[t];do n=n(!0);while(n!==null)}Ft=null,br=!1}catch(r){throw Ft!==null&&(Ft=Ft.slice(t+1)),Tc(wo,Me),r}finally{J=e,vi=!1}}return null}var r1=[],i1=0,Jn=null,Zn=0,rt=[],it=0,Le=null,Ut=1,jt="";function xe(t,e){r1[i1++]=Zn,r1[i1++]=Jn,Jn=t,Zn=e}function od(t,e,a){rt[it++]=Ut,rt[it++]=jt,rt[it++]=Le,Le=t;var n=Ut;t=jt;var r=32-zt(n)-1;n&=~(1<<r),a+=1;var i=32-zt(e)+r;if(30<i){var l=r-r%5;i=(n&(1<<l)-1).toString(32),n>>=l,r-=l,Ut=1<<32-zt(e)+r|a<<r|n,jt=i+t}else Ut=1<<i|a<<r|n,jt=t}function Ao(t){t.return!==null&&(xe(t,1),od(t,1,0))}function To(t){for(;t===Jn;)Jn=r1[--i1],r1[i1]=null,Zn=r1[--i1],r1[i1]=null;for(;t===Le;)Le=rt[--it],rt[it]=null,jt=rt[--it],rt[it]=null,Ut=rt[--it],rt[it]=null}var Z0=null,J0=null,i0=!1,gt=null;function hd(t,e){var a=lt(5,null,null,0);a.elementType="DELETED",a.stateNode=e,a.return=t,e=t.deletions,e===null?(t.deletions=[a],t.flags|=16):e.push(a)}function fs(t,e){switch(t.tag){case 5:var a=t.type;return e=e.nodeType!==1||a.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Z0=t,J0=se(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Z0=t,J0=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(a=Le!==null?{id:Ut,overflow:jt}:null,t.memoizedState={dehydrated:e,treeContext:a,retryLane:1073741824},a=lt(18,null,null,0),a.stateNode=e,a.return=t,t.child=a,Z0=t,J0=null,!0):!1;default:return!1}}function ml(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gl(t){if(i0){var e=J0;if(e){var a=e;if(!fs(t,e)){if(ml(t))throw Error(b(418));e=se(a.nextSibling);var n=Z0;e&&fs(t,e)?hd(n,a):(t.flags=t.flags&-4097|2,i0=!1,Z0=t)}}else{if(ml(t))throw Error(b(418));t.flags=t.flags&-4097|2,i0=!1,Z0=t}}}function ms(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Z0=t}function mn(t){if(t!==Z0)return!1;if(!i0)return ms(t),i0=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ul(t.type,t.memoizedProps)),e&&(e=J0)){if(ml(t))throw sd(),Error(b(418));for(;e;)hd(t,e),e=se(e.nextSibling)}if(ms(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(e===0){J0=se(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++}t=t.nextSibling}J0=null}}else J0=Z0?se(t.stateNode.nextSibling):null;return!0}function sd(){for(var t=J0;t;)t=se(t.nextSibling)}function S1(){J0=Z0=null,i0=!1}function No(t){gt===null?gt=[t]:gt.push(t)}var E4=Qt.ReactCurrentBatchConfig;function ft(t,e){if(t&&t.defaultProps){e=h0({},e),t=t.defaultProps;for(var a in t)e[a]===void 0&&(e[a]=t[a]);return e}return e}var tr=ze(null),er=null,l1=null,Oo=null;function Ro(){Oo=l1=er=null}function Lo(t){var e=tr.current;n0(tr),t._currentValue=e}function zl(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function f1(t,e){er=t,Oo=l1=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(V0=!0),t.firstContext=null)}function ht(t){var e=t._currentValue;if(Oo!==t)if(t={context:t,memoizedValue:e,next:null},l1===null){if(er===null)throw Error(b(308));l1=t,er.dependencies={lanes:0,firstContext:t}}else l1=l1.next=t;return e}var Ee=null;function Do(t){Ee===null?Ee=[t]:Ee.push(t)}function cd(t,e,a,n){var r=e.interleaved;return r===null?(a.next=a,Do(e)):(a.next=r.next,r.next=a),e.interleaved=a,Yt(t,n)}function Yt(t,e){t.lanes|=e;var a=t.alternate;for(a!==null&&(a.lanes|=e),a=t,t=t.return;t!==null;)t.childLanes|=e,a=t.alternate,a!==null&&(a.childLanes|=e),a=t,t=t.return;return a.tag===3?a.stateNode:null}var te=!1;function $o(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ce(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,K&2){var r=n.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),n.pending=e,Yt(t,a)}return r=n.interleaved,r===null?(e.next=e,Do(n)):(e.next=r.next,r.next=e),n.interleaved=e,Yt(t,a)}function Tn(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,_o(t,a)}}function gs(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var r=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var l={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};i===null?r=i=l:i=i.next=l,a=a.next}while(a!==null);i===null?r=i=e:i=i.next=e}else r=i=e;a={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:n.shared,effects:n.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}function ar(t,e,a,n){var r=t.updateQueue;te=!1;var i=r.firstBaseUpdate,l=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var h=o,s=h.next;h.next=null,l===null?i=s:l.next=s,l=h;var c=t.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==l&&(o===null?c.firstBaseUpdate=s:o.next=s,c.lastBaseUpdate=h))}if(i!==null){var d=r.baseState;l=0,c=s=h=null,o=i;do{var p=o.lane,g=o.eventTime;if((n&p)===p){c!==null&&(c=c.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});t:{var z=t,M=o;switch(p=e,g=a,M.tag){case 1:if(z=M.payload,typeof z=="function"){d=z.call(g,d,p);break t}d=z;break t;case 3:z.flags=z.flags&-65537|128;case 0:if(z=M.payload,p=typeof z=="function"?z.call(g,d,p):z,p==null)break t;d=h0({},d,p);break t;case 2:te=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else g={eventTime:g,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(s=c=g,h=d):c=c.next=g,l|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(1);if(c===null&&(h=d),r.baseState=h,r.firstBaseUpdate=s,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do l|=r.lane,r=r.next;while(r!==e)}else i===null&&(r.shared.lanes=0);$e|=l,t.lanes=l,t.memoizedState=d}}function zs(t,e,a){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],r=n.callback;if(r!==null){if(n.callback=null,n=a,typeof r!="function")throw Error(b(191,r));r.call(n)}}}var ud=new cc.Component().refs;function Ml(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:h0({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Er={isMounted:function(t){return(t=t._reactInternals)?Be(t)===t:!1},enqueueSetState:function(t,e,a){t=t._reactInternals;var n=F0(),r=ue(t),i=Bt(n,r);i.payload=e,a!=null&&(i.callback=a),e=ce(t,i,r),e!==null&&(Mt(e,t,r,n),Tn(e,t,r))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=F0(),r=ue(t),i=Bt(n,r);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=ce(t,i,r),e!==null&&(Mt(e,t,r,n),Tn(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=F0(),n=ue(t),r=Bt(a,n);r.tag=2,e!=null&&(r.callback=e),e=ce(t,r,n),e!==null&&(Mt(e,t,n,a),Tn(e,t,n))}};function Ms(t,e,a,n,r,i,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,i,l):e.prototype&&e.prototype.isPureReactComponent?!Ea(a,n)||!Ea(r,i):!0}function pd(t,e,a){var n=!1,r=me,i=e.contextType;return typeof i=="object"&&i!==null?i=ht(i):(r=Y0(e)?Re:D0.current,n=e.contextTypes,i=(n=n!=null)?x1(t,r):me),e=new e(a,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Er,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=i),e}function ys(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&Er.enqueueReplaceState(e,e.state,null)}function yl(t,e,a,n){var r=t.stateNode;r.props=a,r.state=t.memoizedState,r.refs=ud,$o(t);var i=e.contextType;typeof i=="object"&&i!==null?r.context=ht(i):(i=Y0(e)?Re:D0.current,r.context=x1(t,i)),r.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Ml(t,e,i,a),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Er.enqueueReplaceState(r,r.state,null),ar(t,a,r,n),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function W1(t,e,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(b(309));var n=a.stateNode}if(!n)throw Error(b(147,t));var r=n,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(l){var o=r.refs;o===ud&&(o=r.refs={}),l===null?delete o[i]:o[i]=l},e._stringRef=i,e)}if(typeof t!="string")throw Error(b(284));if(!a._owner)throw Error(b(290,t))}return t}function gn(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ws(t){var e=t._init;return e(t._payload)}function vd(t){function e(v,u){if(t){var f=v.deletions;f===null?(v.deletions=[u],v.flags|=16):f.push(u)}}function a(v,u){if(!t)return null;for(;u!==null;)e(v,u),u=u.sibling;return null}function n(v,u){for(v=new Map;u!==null;)u.key!==null?v.set(u.key,u):v.set(u.index,u),u=u.sibling;return v}function r(v,u){return v=pe(v,u),v.index=0,v.sibling=null,v}function i(v,u,f){return v.index=f,t?(f=v.alternate,f!==null?(f=f.index,f<u?(v.flags|=2,u):f):(v.flags|=2,u)):(v.flags|=1048576,u)}function l(v){return t&&v.alternate===null&&(v.flags|=2),v}function o(v,u,f,y){return u===null||u.tag!==6?(u=wi(f,v.mode,y),u.return=v,u):(u=r(u,f),u.return=v,u)}function h(v,u,f,y){var x=f.type;return x===Je?c(v,u,f.props.children,y,f.key):u!==null&&(u.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Zt&&ws(x)===u.type)?(y=r(u,f.props),y.ref=W1(v,u,f),y.return=v,y):(y=$n(f.type,f.key,f.props,null,v.mode,y),y.ref=W1(v,u,f),y.return=v,y)}function s(v,u,f,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=_i(f,v.mode,y),u.return=v,u):(u=r(u,f.children||[]),u.return=v,u)}function c(v,u,f,y,x){return u===null||u.tag!==7?(u=Ne(f,v.mode,y,x),u.return=v,u):(u=r(u,f),u.return=v,u)}function d(v,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=wi(""+u,v.mode,f),u.return=v,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ln:return f=$n(u.type,u.key,u.props,null,v.mode,f),f.ref=W1(v,null,u),f.return=v,f;case Xe:return u=_i(u,v.mode,f),u.return=v,u;case Zt:var y=u._init;return d(v,y(u._payload),f)}if(aa(u)||U1(u))return u=Ne(u,v.mode,f,null),u.return=v,u;gn(v,u)}return null}function p(v,u,f,y){var x=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return x!==null?null:o(v,u,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ln:return f.key===x?h(v,u,f,y):null;case Xe:return f.key===x?s(v,u,f,y):null;case Zt:return x=f._init,p(v,u,x(f._payload),y)}if(aa(f)||U1(f))return x!==null?null:c(v,u,f,y,null);gn(v,f)}return null}function g(v,u,f,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return v=v.get(f)||null,o(u,v,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ln:return v=v.get(y.key===null?f:y.key)||null,h(u,v,y,x);case Xe:return v=v.get(y.key===null?f:y.key)||null,s(u,v,y,x);case Zt:var k=y._init;return g(v,u,f,k(y._payload),x)}if(aa(y)||U1(y))return v=v.get(f)||null,c(u,v,y,x,null);gn(u,y)}return null}function z(v,u,f,y){for(var x=null,k=null,C=u,P=u=0,q=null;C!==null&&P<f.length;P++){C.index>P?(q=C,C=null):q=C.sibling;var F=p(v,C,f[P],y);if(F===null){C===null&&(C=q);break}t&&C&&F.alternate===null&&e(v,C),u=i(F,u,P),k===null?x=F:k.sibling=F,k=F,C=q}if(P===f.length)return a(v,C),i0&&xe(v,P),x;if(C===null){for(;P<f.length;P++)C=d(v,f[P],y),C!==null&&(u=i(C,u,P),k===null?x=C:k.sibling=C,k=C);return i0&&xe(v,P),x}for(C=n(v,C);P<f.length;P++)q=g(C,v,P,f[P],y),q!==null&&(t&&q.alternate!==null&&C.delete(q.key===null?P:q.key),u=i(q,u,P),k===null?x=q:k.sibling=q,k=q);return t&&C.forEach(function(c0){return e(v,c0)}),i0&&xe(v,P),x}function M(v,u,f,y){var x=U1(f);if(typeof x!="function")throw Error(b(150));if(f=x.call(f),f==null)throw Error(b(151));for(var k=x=null,C=u,P=u=0,q=null,F=f.next();C!==null&&!F.done;P++,F=f.next()){C.index>P?(q=C,C=null):q=C.sibling;var c0=p(v,C,F.value,y);if(c0===null){C===null&&(C=q);break}t&&C&&c0.alternate===null&&e(v,C),u=i(c0,u,P),k===null?x=c0:k.sibling=c0,k=c0,C=q}if(F.done)return a(v,C),i0&&xe(v,P),x;if(C===null){for(;!F.done;P++,F=f.next())F=d(v,F.value,y),F!==null&&(u=i(F,u,P),k===null?x=F:k.sibling=F,k=F);return i0&&xe(v,P),x}for(C=n(v,C);!F.done;P++,F=f.next())F=g(C,v,P,F.value,y),F!==null&&(t&&F.alternate!==null&&C.delete(F.key===null?P:F.key),u=i(F,u,P),k===null?x=F:k.sibling=F,k=F);return t&&C.forEach(function(b0){return e(v,b0)}),i0&&xe(v,P),x}function m(v,u,f,y){if(typeof f=="object"&&f!==null&&f.type===Je&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ln:t:{for(var x=f.key,k=u;k!==null;){if(k.key===x){if(x=f.type,x===Je){if(k.tag===7){a(v,k.sibling),u=r(k,f.props.children),u.return=v,v=u;break t}}else if(k.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Zt&&ws(x)===k.type){a(v,k.sibling),u=r(k,f.props),u.ref=W1(v,k,f),u.return=v,v=u;break t}a(v,k);break}else e(v,k);k=k.sibling}f.type===Je?(u=Ne(f.props.children,v.mode,y,f.key),u.return=v,v=u):(y=$n(f.type,f.key,f.props,null,v.mode,y),y.ref=W1(v,u,f),y.return=v,v=y)}return l(v);case Xe:t:{for(k=f.key;u!==null;){if(u.key===k)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){a(v,u.sibling),u=r(u,f.children||[]),u.return=v,v=u;break t}else{a(v,u);break}else e(v,u);u=u.sibling}u=_i(f,v.mode,y),u.return=v,v=u}return l(v);case Zt:return k=f._init,m(v,u,k(f._payload),y)}if(aa(f))return z(v,u,f,y);if(U1(f))return M(v,u,f,y);gn(v,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(a(v,u.sibling),u=r(u,f),u.return=v,v=u):(a(v,u),u=wi(f,v.mode,y),u.return=v,v=u),l(v)):a(v,u)}return m}var b1=vd(!0),fd=vd(!1),Xa={},At=ze(Xa),Aa=ze(Xa),Ta=ze(Xa);function Ce(t){if(t===Xa)throw Error(b(174));return t}function Io(t,e){switch(e0(Ta,e),e0(Aa,t),e0(At,Xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ji(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ji(e,t)}n0(At),e0(At,e)}function E1(){n0(At),n0(Aa),n0(Ta)}function md(t){Ce(Ta.current);var e=Ce(At.current),a=Ji(e,t.type);e!==a&&(e0(Aa,t),e0(At,a))}function Fo(t){Aa.current===t&&(n0(At),n0(Aa))}var l0=ze(0);function nr(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fi=[];function Uo(){for(var t=0;t<fi.length;t++)fi[t]._workInProgressVersionPrimary=null;fi.length=0}var Nn=Qt.ReactCurrentDispatcher,mi=Qt.ReactCurrentBatchConfig,De=0,o0=null,y0=null,x0=null,rr=!1,ua=!1,Na=0,C4=0;function O0(){throw Error(b(321))}function jo(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!yt(t[a],e[a]))return!1;return!0}function Bo(t,e,a,n,r,i){if(De=i,o0=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nn.current=t===null||t.memoizedState===null?T4:N4,t=a(n,r),ua){i=0;do{if(ua=!1,Na=0,25<=i)throw Error(b(301));i+=1,x0=y0=null,e.updateQueue=null,Nn.current=O4,t=a(n,r)}while(ua)}if(Nn.current=ir,e=y0!==null&&y0.next!==null,De=0,x0=y0=o0=null,rr=!1,e)throw Error(b(300));return t}function Ho(){var t=Na!==0;return Na=0,t}function Et(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return x0===null?o0.memoizedState=x0=t:x0=x0.next=t,x0}function st(){if(y0===null){var t=o0.alternate;t=t!==null?t.memoizedState:null}else t=y0.next;var e=x0===null?o0.memoizedState:x0.next;if(e!==null)x0=e,y0=t;else{if(t===null)throw Error(b(310));y0=t,t={memoizedState:y0.memoizedState,baseState:y0.baseState,baseQueue:y0.baseQueue,queue:y0.queue,next:null},x0===null?o0.memoizedState=x0=t:x0=x0.next=t}return x0}function Oa(t,e){return typeof e=="function"?e(t):e}function gi(t){var e=st(),a=e.queue;if(a===null)throw Error(b(311));a.lastRenderedReducer=t;var n=y0,r=n.baseQueue,i=a.pending;if(i!==null){if(r!==null){var l=r.next;r.next=i.next,i.next=l}n.baseQueue=r=i,a.pending=null}if(r!==null){i=r.next,n=n.baseState;var o=l=null,h=null,s=i;do{var c=s.lane;if((De&c)===c)h!==null&&(h=h.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),n=s.hasEagerState?s.eagerState:t(n,s.action);else{var d={lane:c,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};h===null?(o=h=d,l=n):h=h.next=d,o0.lanes|=c,$e|=c}s=s.next}while(s!==null&&s!==i);h===null?l=n:h.next=o,yt(n,e.memoizedState)||(V0=!0),e.memoizedState=n,e.baseState=l,e.baseQueue=h,a.lastRenderedState=n}if(t=a.interleaved,t!==null){r=t;do i=r.lane,o0.lanes|=i,$e|=i,r=r.next;while(r!==t)}else r===null&&(a.lanes=0);return[e.memoizedState,a.dispatch]}function zi(t){var e=st(),a=e.queue;if(a===null)throw Error(b(311));a.lastRenderedReducer=t;var n=a.dispatch,r=a.pending,i=e.memoizedState;if(r!==null){a.pending=null;var l=r=r.next;do i=t(i,l.action),l=l.next;while(l!==r);yt(i,e.memoizedState)||(V0=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,n]}function gd(){}function zd(t,e){var a=o0,n=st(),r=e(),i=!yt(n.memoizedState,r);if(i&&(n.memoizedState=r,V0=!0),n=n.queue,Vo(wd.bind(null,a,n,t),[t]),n.getSnapshot!==e||i||x0!==null&&x0.memoizedState.tag&1){if(a.flags|=2048,Ra(9,yd.bind(null,a,n,r,e),void 0,null),S0===null)throw Error(b(349));De&30||Md(a,e,r)}return r}function Md(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=o0.updateQueue,e===null?(e={lastEffect:null,stores:null},o0.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function yd(t,e,a,n){e.value=a,e.getSnapshot=n,_d(e)&&xd(t)}function wd(t,e,a){return a(function(){_d(e)&&xd(t)})}function _d(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!yt(t,a)}catch{return!0}}function xd(t){var e=Yt(t,1);e!==null&&Mt(e,t,1,-1)}function _s(t){var e=Et();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},e.queue=t,t=t.dispatch=A4.bind(null,o0,t),[e.memoizedState,t]}function Ra(t,e,a,n){return t={tag:t,create:e,destroy:a,deps:n,next:null},e=o0.updateQueue,e===null?(e={lastEffect:null,stores:null},o0.updateQueue=e,e.lastEffect=t.next=t):(a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t)),t}function Sd(){return st().memoizedState}function On(t,e,a,n){var r=Et();o0.flags|=t,r.memoizedState=Ra(1|e,a,void 0,n===void 0?null:n)}function Cr(t,e,a,n){var r=st();n=n===void 0?null:n;var i=void 0;if(y0!==null){var l=y0.memoizedState;if(i=l.destroy,n!==null&&jo(n,l.deps)){r.memoizedState=Ra(e,a,i,n);return}}o0.flags|=t,r.memoizedState=Ra(1|e,a,i,n)}function xs(t,e){return On(8390656,8,t,e)}function Vo(t,e){return Cr(2048,8,t,e)}function bd(t,e){return Cr(4,2,t,e)}function Ed(t,e){return Cr(4,4,t,e)}function Cd(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function kd(t,e,a){return a=a!=null?a.concat([t]):null,Cr(4,4,Cd.bind(null,e,t),a)}function Wo(){}function Pd(t,e){var a=st();e=e===void 0?null:e;var n=a.memoizedState;return n!==null&&e!==null&&jo(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function Ad(t,e){var a=st();e=e===void 0?null:e;var n=a.memoizedState;return n!==null&&e!==null&&jo(e,n[1])?n[0]:(t=t(),a.memoizedState=[t,e],t)}function Td(t,e,a){return De&21?(yt(a,e)||(a=Rc(),o0.lanes|=a,$e|=a,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,V0=!0),t.memoizedState=a)}function k4(t,e){var a=J;J=a!==0&&4>a?a:4,t(!0);var n=mi.transition;mi.transition={};try{t(!1),e()}finally{J=a,mi.transition=n}}function Nd(){return st().memoizedState}function P4(t,e,a){var n=ue(t);if(a={lane:n,action:a,hasEagerState:!1,eagerState:null,next:null},Od(t))Rd(e,a);else if(a=cd(t,e,a,n),a!==null){var r=F0();Mt(a,t,n,r),Ld(a,e,n)}}function A4(t,e,a){var n=ue(t),r={lane:n,action:a,hasEagerState:!1,eagerState:null,next:null};if(Od(t))Rd(e,r);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var l=e.lastRenderedState,o=i(l,a);if(r.hasEagerState=!0,r.eagerState=o,yt(o,l)){var h=e.interleaved;h===null?(r.next=r,Do(e)):(r.next=h.next,h.next=r),e.interleaved=r;return}}catch{}finally{}a=cd(t,e,r,n),a!==null&&(r=F0(),Mt(a,t,n,r),Ld(a,e,n))}}function Od(t){var e=t.alternate;return t===o0||e!==null&&e===o0}function Rd(t,e){ua=rr=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Ld(t,e,a){if(a&4194240){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,_o(t,a)}}var ir={readContext:ht,useCallback:O0,useContext:O0,useEffect:O0,useImperativeHandle:O0,useInsertionEffect:O0,useLayoutEffect:O0,useMemo:O0,useReducer:O0,useRef:O0,useState:O0,useDebugValue:O0,useDeferredValue:O0,useTransition:O0,useMutableSource:O0,useSyncExternalStore:O0,useId:O0,unstable_isNewReconciler:!1},T4={readContext:ht,useCallback:function(t,e){return Et().memoizedState=[t,e===void 0?null:e],t},useContext:ht,useEffect:xs,useImperativeHandle:function(t,e,a){return a=a!=null?a.concat([t]):null,On(4194308,4,Cd.bind(null,e,t),a)},useLayoutEffect:function(t,e){return On(4194308,4,t,e)},useInsertionEffect:function(t,e){return On(4,2,t,e)},useMemo:function(t,e){var a=Et();return e=e===void 0?null:e,t=t(),a.memoizedState=[t,e],t},useReducer:function(t,e,a){var n=Et();return e=a!==void 0?a(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=P4.bind(null,o0,t),[n.memoizedState,t]},useRef:function(t){var e=Et();return t={current:t},e.memoizedState=t},useState:_s,useDebugValue:Wo,useDeferredValue:function(t){return Et().memoizedState=t},useTransition:function(){var t=_s(!1),e=t[0];return t=k4.bind(null,t[1]),Et().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,a){var n=o0,r=Et();if(i0){if(a===void 0)throw Error(b(407));a=a()}else{if(a=e(),S0===null)throw Error(b(349));De&30||Md(n,e,a)}r.memoizedState=a;var i={value:a,getSnapshot:e};return r.queue=i,xs(wd.bind(null,n,i,t),[t]),n.flags|=2048,Ra(9,yd.bind(null,n,i,a,e),void 0,null),a},useId:function(){var t=Et(),e=S0.identifierPrefix;if(i0){var a=jt,n=Ut;a=(n&~(1<<32-zt(n)-1)).toString(32)+a,e=":"+e+"R"+a,a=Na++,0<a&&(e+="H"+a.toString(32)),e+=":"}else a=C4++,e=":"+e+"r"+a.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},N4={readContext:ht,useCallback:Pd,useContext:ht,useEffect:Vo,useImperativeHandle:kd,useInsertionEffect:bd,useLayoutEffect:Ed,useMemo:Ad,useReducer:gi,useRef:Sd,useState:function(){return gi(Oa)},useDebugValue:Wo,useDeferredValue:function(t){var e=st();return Td(e,y0.memoizedState,t)},useTransition:function(){var t=gi(Oa)[0],e=st().memoizedState;return[t,e]},useMutableSource:gd,useSyncExternalStore:zd,useId:Nd,unstable_isNewReconciler:!1},O4={readContext:ht,useCallback:Pd,useContext:ht,useEffect:Vo,useImperativeHandle:kd,useInsertionEffect:bd,useLayoutEffect:Ed,useMemo:Ad,useReducer:zi,useRef:Sd,useState:function(){return zi(Oa)},useDebugValue:Wo,useDeferredValue:function(t){var e=st();return y0===null?e.memoizedState=t:Td(e,y0.memoizedState,t)},useTransition:function(){var t=zi(Oa)[0],e=st().memoizedState;return[t,e]},useMutableSource:gd,useSyncExternalStore:zd,useId:Nd,unstable_isNewReconciler:!1};function C1(t,e){try{var a="",n=e;do a+=o3(n),n=n.return;while(n);var r=a}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:r,digest:null}}function Mi(t,e,a){return{value:t,source:null,stack:a??null,digest:e??null}}function wl(t,e){try{console.error(e.value)}catch(a){setTimeout(function(){throw a})}}var R4=typeof WeakMap=="function"?WeakMap:Map;function Dd(t,e,a){a=Bt(-1,a),a.tag=3,a.payload={element:null};var n=e.value;return a.callback=function(){or||(or=!0,Tl=n),wl(t,e)},a}function $d(t,e,a){a=Bt(-1,a),a.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var r=e.value;a.payload=function(){return n(r)},a.callback=function(){wl(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(a.callback=function(){wl(t,e),typeof n!="function"&&(de===null?de=new Set([this]):de.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),a}function Ss(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new R4;var r=new Set;n.set(e,r)}else r=n.get(e),r===void 0&&(r=new Set,n.set(e,r));r.has(a)||(r.add(a),t=G4.bind(null,t,e,a),e.then(t,t))}function bs(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Es(t,e,a,n,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(e=Bt(-1,1),e.tag=2,ce(a,e,1))),a.lanes|=1),t)}var L4=Qt.ReactCurrentOwner,V0=!1;function I0(t,e,a,n){e.child=t===null?fd(e,null,a,n):b1(e,t.child,a,n)}function Cs(t,e,a,n,r){a=a.render;var i=e.ref;return f1(e,r),n=Bo(t,e,a,n,i,r),a=Ho(),t!==null&&!V0?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Kt(t,e,r)):(i0&&a&&Ao(e),e.flags|=1,I0(t,e,n,r),e.child)}function ks(t,e,a,n,r){if(t===null){var i=a.type;return typeof i=="function"&&!Zo(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(e.tag=15,e.type=i,Id(t,e,i,n,r)):(t=$n(a.type,null,n,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&r)){var l=i.memoizedProps;if(a=a.compare,a=a!==null?a:Ea,a(l,n)&&t.ref===e.ref)return Kt(t,e,r)}return e.flags|=1,t=pe(i,n),t.ref=e.ref,t.return=e,e.child=t}function Id(t,e,a,n,r){if(t!==null){var i=t.memoizedProps;if(Ea(i,n)&&t.ref===e.ref)if(V0=!1,e.pendingProps=n=i,(t.lanes&r)!==0)t.flags&131072&&(V0=!0);else return e.lanes=t.lanes,Kt(t,e,r)}return _l(t,e,a,n,r)}function Fd(t,e,a){var n=e.pendingProps,r=n.children,i=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},e0(h1,q0),q0|=a;else{if(!(a&1073741824))return t=i!==null?i.baseLanes|a:a,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,e0(h1,q0),q0|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:a,e0(h1,q0),q0|=n}else i!==null?(n=i.baseLanes|a,e.memoizedState=null):n=a,e0(h1,q0),q0|=n;return I0(t,e,r,a),e.child}function Ud(t,e){var a=e.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(e.flags|=512,e.flags|=2097152)}function _l(t,e,a,n,r){var i=Y0(a)?Re:D0.current;return i=x1(e,i),f1(e,r),a=Bo(t,e,a,n,i,r),n=Ho(),t!==null&&!V0?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Kt(t,e,r)):(i0&&n&&Ao(e),e.flags|=1,I0(t,e,a,r),e.child)}function Ps(t,e,a,n,r){if(Y0(a)){var i=!0;Xn(e)}else i=!1;if(f1(e,r),e.stateNode===null)Rn(t,e),pd(e,a,n),yl(e,a,n,r),n=!0;else if(t===null){var l=e.stateNode,o=e.memoizedProps;l.props=o;var h=l.context,s=a.contextType;typeof s=="object"&&s!==null?s=ht(s):(s=Y0(a)?Re:D0.current,s=x1(e,s));var c=a.getDerivedStateFromProps,d=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==n||h!==s)&&ys(e,l,n,s),te=!1;var p=e.memoizedState;l.state=p,ar(e,n,l,r),h=e.memoizedState,o!==n||p!==h||W0.current||te?(typeof c=="function"&&(Ml(e,a,c,n),h=e.memoizedState),(o=te||Ms(e,a,o,n,p,h,s))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=h),l.props=n,l.state=h,l.context=s,n=o):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{l=e.stateNode,dd(t,e),o=e.memoizedProps,s=e.type===e.elementType?o:ft(e.type,o),l.props=s,d=e.pendingProps,p=l.context,h=a.contextType,typeof h=="object"&&h!==null?h=ht(h):(h=Y0(a)?Re:D0.current,h=x1(e,h));var g=a.getDerivedStateFromProps;(c=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==d||p!==h)&&ys(e,l,n,h),te=!1,p=e.memoizedState,l.state=p,ar(e,n,l,r);var z=e.memoizedState;o!==d||p!==z||W0.current||te?(typeof g=="function"&&(Ml(e,a,g,n),z=e.memoizedState),(s=te||Ms(e,a,s,n,p,z,h)||!1)?(c||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,z,h),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,z,h)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=z),l.props=n,l.state=z,l.context=h,n=s):(typeof l.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),n=!1)}return xl(t,e,a,n,i,r)}function xl(t,e,a,n,r,i){Ud(t,e);var l=(e.flags&128)!==0;if(!n&&!l)return r&&vs(e,a,!1),Kt(t,e,i);n=e.stateNode,L4.current=e;var o=l&&typeof a.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&l?(e.child=b1(e,t.child,null,i),e.child=b1(e,null,o,i)):I0(t,e,o,i),e.memoizedState=n.state,r&&vs(e,a,!0),e.child}function jd(t){var e=t.stateNode;e.pendingContext?ps(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ps(t,e.context,!1),Io(t,e.containerInfo)}function As(t,e,a,n,r){return S1(),No(r),e.flags|=256,I0(t,e,a,n),e.child}var Sl={dehydrated:null,treeContext:null,retryLane:0};function bl(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bd(t,e,a){var n=e.pendingProps,r=l0.current,i=!1,l=(e.flags&128)!==0,o;if((o=l)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),e0(l0,r&1),t===null)return gl(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=n.children,t=n.fallback,i?(n=e.mode,i=e.child,l={mode:"hidden",children:l},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ar(l,n,0,null),t=Ne(t,n,a,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=bl(a),e.memoizedState=Sl,t):Yo(e,l));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return D4(t,e,l,n,o,r,a);if(i){i=n.fallback,l=e.mode,r=t.child,o=r.sibling;var h={mode:"hidden",children:n.children};return!(l&1)&&e.child!==r?(n=e.child,n.childLanes=0,n.pendingProps=h,e.deletions=null):(n=pe(r,h),n.subtreeFlags=r.subtreeFlags&14680064),o!==null?i=pe(o,i):(i=Ne(i,l,a,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,n=i,i=e.child,l=t.child.memoizedState,l=l===null?bl(a):{baseLanes:l.baseLanes|a,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=t.childLanes&~a,e.memoizedState=Sl,n}return i=t.child,t=i.sibling,n=pe(i,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=a),n.return=e,n.sibling=null,t!==null&&(a=e.deletions,a===null?(e.deletions=[t],e.flags|=16):a.push(t)),e.child=n,e.memoizedState=null,n}function Yo(t,e){return e=Ar({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function zn(t,e,a,n){return n!==null&&No(n),b1(e,t.child,null,a),t=Yo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function D4(t,e,a,n,r,i,l){if(a)return e.flags&256?(e.flags&=-257,n=Mi(Error(b(422))),zn(t,e,l,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=n.fallback,r=e.mode,n=Ar({mode:"visible",children:n.children},r,0,null),i=Ne(i,r,l,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,e.mode&1&&b1(e,t.child,null,l),e.child.memoizedState=bl(l),e.memoizedState=Sl,i);if(!(e.mode&1))return zn(t,e,l,null);if(r.data==="$!"){if(n=r.nextSibling&&r.nextSibling.dataset,n)var o=n.dgst;return n=o,i=Error(b(419)),n=Mi(i,n,void 0),zn(t,e,l,n)}if(o=(l&t.childLanes)!==0,V0||o){if(n=S0,n!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(n.suspendedLanes|l)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,Yt(t,r),Mt(n,t,r,-1))}return Jo(),n=Mi(Error(b(421))),zn(t,e,l,n)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Q4.bind(null,t),r._reactRetry=e,null):(t=i.treeContext,J0=se(r.nextSibling),Z0=e,i0=!0,gt=null,t!==null&&(rt[it++]=Ut,rt[it++]=jt,rt[it++]=Le,Ut=t.id,jt=t.overflow,Le=e),e=Yo(e,n.children),e.flags|=4096,e)}function Ts(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),zl(t.return,e,a)}function yi(t,e,a,n,r){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:r}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=a,i.tailMode=r)}function Hd(t,e,a){var n=e.pendingProps,r=n.revealOrder,i=n.tail;if(I0(t,e,n.children,a),n=l0.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ts(t,a,e);else if(t.tag===19)Ts(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(e0(l0,n),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(a=e.child,r=null;a!==null;)t=a.alternate,t!==null&&nr(t)===null&&(r=a),a=a.sibling;a=r,a===null?(r=e.child,e.child=null):(r=a.sibling,a.sibling=null),yi(e,!1,r,a,i);break;case"backwards":for(a=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&nr(t)===null){e.child=r;break}t=r.sibling,r.sibling=a,a=r,r=t}yi(e,!0,a,null,i);break;case"together":yi(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rn(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kt(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),$e|=e.lanes,!(a&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,a=pe(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=pe(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function $4(t,e,a){switch(e.tag){case 3:jd(e),S1();break;case 5:md(e);break;case 1:Y0(e.type)&&Xn(e);break;case 4:Io(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,r=e.memoizedProps.value;e0(tr,n._currentValue),n._currentValue=r;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(e0(l0,l0.current&1),e.flags|=128,null):a&e.child.childLanes?Bd(t,e,a):(e0(l0,l0.current&1),t=Kt(t,e,a),t!==null?t.sibling:null);e0(l0,l0.current&1);break;case 19:if(n=(a&e.childLanes)!==0,t.flags&128){if(n)return Hd(t,e,a);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),e0(l0,l0.current),n)break;return null;case 22:case 23:return e.lanes=0,Fd(t,e,a)}return Kt(t,e,a)}var Vd,El,Wd,Yd;Vd=function(t,e){for(var a=e.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};El=function(){};Wd=function(t,e,a,n){var r=t.memoizedProps;if(r!==n){t=e.stateNode,Ce(At.current);var i=null;switch(a){case"input":r=Gi(t,r),n=Gi(t,n),i=[];break;case"select":r=h0({},r,{value:void 0}),n=h0({},n,{value:void 0}),i=[];break;case"textarea":r=Xi(t,r),n=Xi(t,n),i=[];break;default:typeof r.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Qn)}Zi(a,n);var l;a=null;for(s in r)if(!n.hasOwnProperty(s)&&r.hasOwnProperty(s)&&r[s]!=null)if(s==="style"){var o=r[s];for(l in o)o.hasOwnProperty(l)&&(a||(a={}),a[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ma.hasOwnProperty(s)?i||(i=[]):(i=i||[]).push(s,null));for(s in n){var h=n[s];if(o=r!=null?r[s]:void 0,n.hasOwnProperty(s)&&h!==o&&(h!=null||o!=null))if(s==="style")if(o){for(l in o)!o.hasOwnProperty(l)||h&&h.hasOwnProperty(l)||(a||(a={}),a[l]="");for(l in h)h.hasOwnProperty(l)&&o[l]!==h[l]&&(a||(a={}),a[l]=h[l])}else a||(i||(i=[]),i.push(s,a)),a=h;else s==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,o=o?o.__html:void 0,h!=null&&o!==h&&(i=i||[]).push(s,h)):s==="children"?typeof h!="string"&&typeof h!="number"||(i=i||[]).push(s,""+h):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Ma.hasOwnProperty(s)?(h!=null&&s==="onScroll"&&a0("scroll",t),i||o===h||(i=[])):(i=i||[]).push(s,h))}a&&(i=i||[]).push("style",a);var s=i;(e.updateQueue=s)&&(e.flags|=4)}};Yd=function(t,e,a,n){a!==n&&(e.flags|=4)};function Y1(t,e){if(!i0)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function R0(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var r=t.child;r!==null;)a|=r.lanes|r.childLanes,n|=r.subtreeFlags&14680064,n|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)a|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function I4(t,e,a){var n=e.pendingProps;switch(To(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return R0(e),null;case 1:return Y0(e.type)&&qn(),R0(e),null;case 3:return n=e.stateNode,E1(),n0(W0),n0(D0),Uo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(mn(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gt!==null&&(Rl(gt),gt=null))),El(t,e),R0(e),null;case 5:Fo(e);var r=Ce(Ta.current);if(a=e.type,t!==null&&e.stateNode!=null)Wd(t,e,a,n,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(b(166));return R0(e),null}if(t=Ce(At.current),mn(e)){n=e.stateNode,a=e.type;var i=e.memoizedProps;switch(n[kt]=e,n[Pa]=i,t=(e.mode&1)!==0,a){case"dialog":a0("cancel",n),a0("close",n);break;case"iframe":case"object":case"embed":a0("load",n);break;case"video":case"audio":for(r=0;r<ra.length;r++)a0(ra[r],n);break;case"source":a0("error",n);break;case"img":case"image":case"link":a0("error",n),a0("load",n);break;case"details":a0("toggle",n);break;case"input":Uh(n,i),a0("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},a0("invalid",n);break;case"textarea":Bh(n,i),a0("invalid",n)}Zi(a,i),r=null;for(var l in i)if(i.hasOwnProperty(l)){var o=i[l];l==="children"?typeof o=="string"?n.textContent!==o&&(i.suppressHydrationWarning!==!0&&fn(n.textContent,o,t),r=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&fn(n.textContent,o,t),r=["children",""+o]):Ma.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&a0("scroll",n)}switch(a){case"input":on(n),jh(n,i,!0);break;case"textarea":on(n),Hh(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=Qn)}n=r,e.updateQueue=n,n!==null&&(e.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Mc(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=l.createElement(a,{is:n.is}):(t=l.createElement(a),a==="select"&&(l=t,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):t=l.createElementNS(t,a),t[kt]=e,t[Pa]=n,Vd(t,e,!1,!1),e.stateNode=t;t:{switch(l=tl(a,n),a){case"dialog":a0("cancel",t),a0("close",t),r=n;break;case"iframe":case"object":case"embed":a0("load",t),r=n;break;case"video":case"audio":for(r=0;r<ra.length;r++)a0(ra[r],t);r=n;break;case"source":a0("error",t),r=n;break;case"img":case"image":case"link":a0("error",t),a0("load",t),r=n;break;case"details":a0("toggle",t),r=n;break;case"input":Uh(t,n),r=Gi(t,n),a0("invalid",t);break;case"option":r=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},r=h0({},n,{value:void 0}),a0("invalid",t);break;case"textarea":Bh(t,n),r=Xi(t,n),a0("invalid",t);break;default:r=n}Zi(a,r),o=r;for(i in o)if(o.hasOwnProperty(i)){var h=o[i];i==="style"?_c(t,h):i==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&yc(t,h)):i==="children"?typeof h=="string"?(a!=="textarea"||h!=="")&&ya(t,h):typeof h=="number"&&ya(t,""+h):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ma.hasOwnProperty(i)?h!=null&&i==="onScroll"&&a0("scroll",t):h!=null&&mo(t,i,h,l))}switch(a){case"input":on(t),jh(t,n,!1);break;case"textarea":on(t),Hh(t);break;case"option":n.value!=null&&t.setAttribute("value",""+fe(n.value));break;case"select":t.multiple=!!n.multiple,i=n.value,i!=null?d1(t,!!n.multiple,i,!1):n.defaultValue!=null&&d1(t,!!n.multiple,n.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Qn)}switch(a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return R0(e),null;case 6:if(t&&e.stateNode!=null)Yd(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(b(166));if(a=Ce(Ta.current),Ce(At.current),mn(e)){if(n=e.stateNode,a=e.memoizedProps,n[kt]=e,(i=n.nodeValue!==a)&&(t=Z0,t!==null))switch(t.tag){case 3:fn(n.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fn(n.nodeValue,a,(t.mode&1)!==0)}i&&(e.flags|=4)}else n=(a.nodeType===9?a:a.ownerDocument).createTextNode(n),n[kt]=e,e.stateNode=n}return R0(e),null;case 13:if(n0(l0),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i0&&J0!==null&&e.mode&1&&!(e.flags&128))sd(),S1(),e.flags|=98560,i=!1;else if(i=mn(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(b(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(b(317));i[kt]=e}else S1(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;R0(e),i=!1}else gt!==null&&(Rl(gt),gt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=a,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||l0.current&1?w0===0&&(w0=3):Jo())),e.updateQueue!==null&&(e.flags|=4),R0(e),null);case 4:return E1(),El(t,e),t===null&&Ca(e.stateNode.containerInfo),R0(e),null;case 10:return Lo(e.type._context),R0(e),null;case 17:return Y0(e.type)&&qn(),R0(e),null;case 19:if(n0(l0),i=e.memoizedState,i===null)return R0(e),null;if(n=(e.flags&128)!==0,l=i.rendering,l===null)if(n)Y1(i,!1);else{if(w0!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=nr(t),l!==null){for(e.flags|=128,Y1(i,!1),n=l.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=a,a=e.child;a!==null;)i=a,t=n,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,t=l.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return e0(l0,l0.current&1|2),e.child}t=t.sibling}i.tail!==null&&p0()>k1&&(e.flags|=128,n=!0,Y1(i,!1),e.lanes=4194304)}else{if(!n)if(t=nr(l),t!==null){if(e.flags|=128,n=!0,a=t.updateQueue,a!==null&&(e.updateQueue=a,e.flags|=4),Y1(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!i0)return R0(e),null}else 2*p0()-i.renderingStartTime>k1&&a!==1073741824&&(e.flags|=128,n=!0,Y1(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(a=i.last,a!==null?a.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=p0(),e.sibling=null,a=l0.current,e0(l0,n?a&1|2:a&1),e):(R0(e),null);case 22:case 23:return Xo(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?q0&1073741824&&(R0(e),e.subtreeFlags&6&&(e.flags|=8192)):R0(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function F4(t,e){switch(To(e),e.tag){case 1:return Y0(e.type)&&qn(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return E1(),n0(W0),n0(D0),Uo(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fo(e),null;case 13:if(n0(l0),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));S1()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return n0(l0),null;case 4:return E1(),null;case 10:return Lo(e.type._context),null;case 22:case 23:return Xo(),null;case 24:return null;default:return null}}var Mn=!1,L0=!1,U4=typeof WeakSet=="function"?WeakSet:Set,O=null;function o1(t,e){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(n){s0(t,e,n)}else a.current=null}function Cl(t,e,a){try{a()}catch(n){s0(t,e,n)}}var Ns=!1;function j4(t,e){if(cl=Yn,t=qc(),Po(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var r=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var l=0,o=-1,h=-1,s=0,c=0,d=t,p=null;e:for(;;){for(var g;d!==a||r!==0&&d.nodeType!==3||(o=l+r),d!==i||n!==0&&d.nodeType!==3||(h=l+n),d.nodeType===3&&(l+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===t)break e;if(p===a&&++s===r&&(o=l),p===i&&++c===n&&(h=l),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}a=o===-1||h===-1?null:{start:o,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(dl={focusedElem:t,selectionRange:a},Yn=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var z=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var M=z.memoizedProps,m=z.memoizedState,v=e.stateNode,u=v.getSnapshotBeforeUpdate(e.elementType===e.type?M:ft(e.type,M),m);v.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=e.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(y){s0(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return z=Ns,Ns=!1,z}function pa(t,e,a){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&t)===t){var i=r.destroy;r.destroy=void 0,i!==void 0&&Cl(e,a,i)}r=r.next}while(r!==n)}}function kr(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var a=e=e.next;do{if((a.tag&t)===t){var n=a.create;a.destroy=n()}a=a.next}while(a!==e)}}function kl(t){var e=t.ref;if(e!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof e=="function"?e(t):e.current=t}}function Kd(t){var e=t.alternate;e!==null&&(t.alternate=null,Kd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kt],delete e[Pa],delete e[vl],delete e[x4],delete e[S4])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Gd(t){return t.tag===5||t.tag===3||t.tag===4}function Os(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Gd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pl(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.nodeType===8?a.parentNode.insertBefore(t,e):a.insertBefore(t,e):(a.nodeType===8?(e=a.parentNode,e.insertBefore(t,a)):(e=a,e.appendChild(t)),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Qn));else if(n!==4&&(t=t.child,t!==null))for(Pl(t,e,a),t=t.sibling;t!==null;)Pl(t,e,a),t=t.sibling}function Al(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(Al(t,e,a),t=t.sibling;t!==null;)Al(t,e,a),t=t.sibling}var P0=null,mt=!1;function Jt(t,e,a){for(a=a.child;a!==null;)Qd(t,e,a),a=a.sibling}function Qd(t,e,a){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(yr,a)}catch{}switch(a.tag){case 5:L0||o1(a,e);case 6:var n=P0,r=mt;P0=null,Jt(t,e,a),P0=n,mt=r,P0!==null&&(mt?(t=P0,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):P0.removeChild(a.stateNode));break;case 18:P0!==null&&(mt?(t=P0,a=a.stateNode,t.nodeType===8?pi(t.parentNode,a):t.nodeType===1&&pi(t,a),Sa(t)):pi(P0,a.stateNode));break;case 4:n=P0,r=mt,P0=a.stateNode.containerInfo,mt=!0,Jt(t,e,a),P0=n,mt=r;break;case 0:case 11:case 14:case 15:if(!L0&&(n=a.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){r=n=n.next;do{var i=r,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Cl(a,e,l),r=r.next}while(r!==n)}Jt(t,e,a);break;case 1:if(!L0&&(o1(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=a.memoizedProps,n.state=a.memoizedState,n.componentWillUnmount()}catch(o){s0(a,e,o)}Jt(t,e,a);break;case 21:Jt(t,e,a);break;case 22:a.mode&1?(L0=(n=L0)||a.memoizedState!==null,Jt(t,e,a),L0=n):Jt(t,e,a);break;default:Jt(t,e,a)}}function Rs(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new U4),e.forEach(function(n){var r=q4.bind(null,t,n);a.has(n)||(a.add(n),n.then(r,r))})}}function vt(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var r=a[n];try{var i=t,l=e,o=l;t:for(;o!==null;){switch(o.tag){case 5:P0=o.stateNode,mt=!1;break t;case 3:P0=o.stateNode.containerInfo,mt=!0;break t;case 4:P0=o.stateNode.containerInfo,mt=!0;break t}o=o.return}if(P0===null)throw Error(b(160));Qd(i,l,r),P0=null,mt=!1;var h=r.alternate;h!==null&&(h.return=null),r.return=null}catch(s){s0(r,e,s)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qd(e,t),e=e.sibling}function qd(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vt(e,t),bt(t),n&4){try{pa(3,t,t.return),kr(3,t)}catch(M){s0(t,t.return,M)}try{pa(5,t,t.return)}catch(M){s0(t,t.return,M)}}break;case 1:vt(e,t),bt(t),n&512&&a!==null&&o1(a,a.return);break;case 5:if(vt(e,t),bt(t),n&512&&a!==null&&o1(a,a.return),t.flags&32){var r=t.stateNode;try{ya(r,"")}catch(M){s0(t,t.return,M)}}if(n&4&&(r=t.stateNode,r!=null)){var i=t.memoizedProps,l=a!==null?a.memoizedProps:i,o=t.type,h=t.updateQueue;if(t.updateQueue=null,h!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&gc(r,i),tl(o,l);var s=tl(o,i);for(l=0;l<h.length;l+=2){var c=h[l],d=h[l+1];c==="style"?_c(r,d):c==="dangerouslySetInnerHTML"?yc(r,d):c==="children"?ya(r,d):mo(r,c,d,s)}switch(o){case"input":Qi(r,i);break;case"textarea":zc(r,i);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?d1(r,!!i.multiple,g,!1):p!==!!i.multiple&&(i.defaultValue!=null?d1(r,!!i.multiple,i.defaultValue,!0):d1(r,!!i.multiple,i.multiple?[]:"",!1))}r[Pa]=i}catch(M){s0(t,t.return,M)}}break;case 6:if(vt(e,t),bt(t),n&4){if(t.stateNode===null)throw Error(b(162));r=t.stateNode,i=t.memoizedProps;try{r.nodeValue=i}catch(M){s0(t,t.return,M)}}break;case 3:if(vt(e,t),bt(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Sa(e.containerInfo)}catch(M){s0(t,t.return,M)}break;case 4:vt(e,t),bt(t);break;case 13:vt(e,t),bt(t),r=t.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(Qo=p0())),n&4&&Rs(t);break;case 22:if(c=a!==null&&a.memoizedState!==null,t.mode&1?(L0=(s=L0)||c,vt(e,t),L0=s):vt(e,t),bt(t),n&8192){if(s=t.memoizedState!==null,(t.stateNode.isHidden=s)&&!c&&t.mode&1)for(O=t,c=t.child;c!==null;){for(d=O=c;O!==null;){switch(p=O,g=p.child,p.tag){case 0:case 11:case 14:case 15:pa(4,p,p.return);break;case 1:o1(p,p.return);var z=p.stateNode;if(typeof z.componentWillUnmount=="function"){n=p,a=p.return;try{e=n,z.props=e.memoizedProps,z.state=e.memoizedState,z.componentWillUnmount()}catch(M){s0(n,a,M)}}break;case 5:o1(p,p.return);break;case 22:if(p.memoizedState!==null){Ds(d);continue}}g!==null?(g.return=p,O=g):Ds(d)}c=c.sibling}t:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,s?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=d.stateNode,h=d.memoizedProps.style,l=h!=null&&h.hasOwnProperty("display")?h.display:null,o.style.display=wc("display",l))}catch(M){s0(t,t.return,M)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=s?"":d.memoizedProps}catch(M){s0(t,t.return,M)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break t;for(;d.sibling===null;){if(d.return===null||d.return===t)break t;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:vt(e,t),bt(t),n&4&&Rs(t);break;case 21:break;default:vt(e,t),bt(t)}}function bt(t){var e=t.flags;if(e&2){try{t:{for(var a=t.return;a!==null;){if(Gd(a)){var n=a;break t}a=a.return}throw Error(b(160))}switch(n.tag){case 5:var r=n.stateNode;n.flags&32&&(ya(r,""),n.flags&=-33);var i=Os(t);Al(t,i,r);break;case 3:case 4:var l=n.stateNode.containerInfo,o=Os(t);Pl(t,o,l);break;default:throw Error(b(161))}}catch(h){s0(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function B4(t,e,a){O=t,Xd(t)}function Xd(t,e,a){for(var n=(t.mode&1)!==0;O!==null;){var r=O,i=r.child;if(r.tag===22&&n){var l=r.memoizedState!==null||Mn;if(!l){var o=r.alternate,h=o!==null&&o.memoizedState!==null||L0;o=Mn;var s=L0;if(Mn=l,(L0=h)&&!s)for(O=r;O!==null;)l=O,h=l.child,l.tag===22&&l.memoizedState!==null?$s(r):h!==null?(h.return=l,O=h):$s(r);for(;i!==null;)O=i,Xd(i),i=i.sibling;O=r,Mn=o,L0=s}Ls(t)}else r.subtreeFlags&8772&&i!==null?(i.return=r,O=i):Ls(t)}}function Ls(t){for(;O!==null;){var e=O;if(e.flags&8772){var a=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:L0||kr(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!L0)if(a===null)n.componentDidMount();else{var r=e.elementType===e.type?a.memoizedProps:ft(e.type,a.memoizedProps);n.componentDidUpdate(r,a.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&zs(e,i,n);break;case 3:var l=e.updateQueue;if(l!==null){if(a=null,e.child!==null)switch(e.child.tag){case 5:a=e.child.stateNode;break;case 1:a=e.child.stateNode}zs(e,l,a)}break;case 5:var o=e.stateNode;if(a===null&&e.flags&4){a=o;var h=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&a.focus();break;case"img":h.src&&(a.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var s=e.alternate;if(s!==null){var c=s.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Sa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}L0||e.flags&512&&kl(e)}catch(p){s0(e,e.return,p)}}if(e===t){O=null;break}if(a=e.sibling,a!==null){a.return=e.return,O=a;break}O=e.return}}function Ds(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}function $s(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var a=e.return;try{kr(4,e)}catch(h){s0(e,a,h)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var r=e.return;try{n.componentDidMount()}catch(h){s0(e,r,h)}}var i=e.return;try{kl(e)}catch(h){s0(e,i,h)}break;case 5:var l=e.return;try{kl(e)}catch(h){s0(e,l,h)}}}catch(h){s0(e,e.return,h)}if(e===t){O=null;break}var o=e.sibling;if(o!==null){o.return=e.return,O=o;break}O=e.return}}var H4=Math.ceil,lr=Qt.ReactCurrentDispatcher,Ko=Qt.ReactCurrentOwner,ot=Qt.ReactCurrentBatchConfig,K=0,S0=null,g0=null,A0=0,q0=0,h1=ze(0),w0=0,La=null,$e=0,Pr=0,Go=0,va=null,H0=null,Qo=0,k1=1/0,Dt=null,or=!1,Tl=null,de=null,yn=!1,ie=null,hr=0,fa=0,Nl=null,Ln=-1,Dn=0;function F0(){return K&6?p0():Ln!==-1?Ln:Ln=p0()}function ue(t){return t.mode&1?K&2&&A0!==0?A0&-A0:E4.transition!==null?(Dn===0&&(Dn=Rc()),Dn):(t=J,t!==0||(t=window.event,t=t===void 0?16:jc(t.type)),t):1}function Mt(t,e,a,n){if(50<fa)throw fa=0,Nl=null,Error(b(185));Ga(t,a,n),(!(K&2)||t!==S0)&&(t===S0&&(!(K&2)&&(Pr|=a),w0===4&&ae(t,A0)),K0(t,n),a===1&&K===0&&!(e.mode&1)&&(k1=p0()+500,br&&Me()))}function K0(t,e){var a=t.callbackNode;E3(t,e);var n=Wn(t,t===S0?A0:0);if(n===0)a!==null&&Yh(a),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(a!=null&&Yh(a),e===1)t.tag===0?b4(Is.bind(null,t)):ld(Is.bind(null,t)),w4(function(){!(K&6)&&Me()}),a=null;else{switch(Lc(n)){case 1:a=wo;break;case 4:a=Nc;break;case 16:a=Vn;break;case 536870912:a=Oc;break;default:a=Vn}a=iu(a,Jd.bind(null,t))}t.callbackPriority=e,t.callbackNode=a}}function Jd(t,e){if(Ln=-1,Dn=0,K&6)throw Error(b(327));var a=t.callbackNode;if(m1()&&t.callbackNode!==a)return null;var n=Wn(t,t===S0?A0:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=sr(t,n);else{e=n;var r=K;K|=2;var i=tu();(S0!==t||A0!==e)&&(Dt=null,k1=p0()+500,Te(t,e));do try{Y4();break}catch(o){Zd(t,o)}while(1);Ro(),lr.current=i,K=r,g0!==null?e=0:(S0=null,A0=0,e=w0)}if(e!==0){if(e===2&&(r=il(t),r!==0&&(n=r,e=Ol(t,r))),e===1)throw a=La,Te(t,0),ae(t,n),K0(t,p0()),a;if(e===6)ae(t,n);else{if(r=t.current.alternate,!(n&30)&&!V4(r)&&(e=sr(t,n),e===2&&(i=il(t),i!==0&&(n=i,e=Ol(t,i))),e===1))throw a=La,Te(t,0),ae(t,n),K0(t,p0()),a;switch(t.finishedWork=r,t.finishedLanes=n,e){case 0:case 1:throw Error(b(345));case 2:Se(t,H0,Dt);break;case 3:if(ae(t,n),(n&130023424)===n&&(e=Qo+500-p0(),10<e)){if(Wn(t,0)!==0)break;if(r=t.suspendedLanes,(r&n)!==n){F0(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=pl(Se.bind(null,t,H0,Dt),e);break}Se(t,H0,Dt);break;case 4:if(ae(t,n),(n&4194240)===n)break;for(e=t.eventTimes,r=-1;0<n;){var l=31-zt(n);i=1<<l,l=e[l],l>r&&(r=l),n&=~i}if(n=r,n=p0()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*H4(n/1960))-n,10<n){t.timeoutHandle=pl(Se.bind(null,t,H0,Dt),n);break}Se(t,H0,Dt);break;case 5:Se(t,H0,Dt);break;default:throw Error(b(329))}}}return K0(t,p0()),t.callbackNode===a?Jd.bind(null,t):null}function Ol(t,e){var a=va;return t.current.memoizedState.isDehydrated&&(Te(t,e).flags|=256),t=sr(t,e),t!==2&&(e=H0,H0=a,e!==null&&Rl(e)),t}function Rl(t){H0===null?H0=t:H0.push.apply(H0,t)}function V4(t){for(var e=t;;){if(e.flags&16384){var a=e.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var n=0;n<a.length;n++){var r=a[n],i=r.getSnapshot;r=r.value;try{if(!yt(i(),r))return!1}catch{return!1}}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ae(t,e){for(e&=~Go,e&=~Pr,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var a=31-zt(e),n=1<<a;t[a]=-1,e&=~n}}function Is(t){if(K&6)throw Error(b(327));m1();var e=Wn(t,0);if(!(e&1))return K0(t,p0()),null;var a=sr(t,e);if(t.tag!==0&&a===2){var n=il(t);n!==0&&(e=n,a=Ol(t,n))}if(a===1)throw a=La,Te(t,0),ae(t,e),K0(t,p0()),a;if(a===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Se(t,H0,Dt),K0(t,p0()),null}function qo(t,e){var a=K;K|=1;try{return t(e)}finally{K=a,K===0&&(k1=p0()+500,br&&Me())}}function Ie(t){ie!==null&&ie.tag===0&&!(K&6)&&m1();var e=K;K|=1;var a=ot.transition,n=J;try{if(ot.transition=null,J=1,t)return t()}finally{J=n,ot.transition=a,K=e,!(K&6)&&Me()}}function Xo(){q0=h1.current,n0(h1)}function Te(t,e){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,y4(a)),g0!==null)for(a=g0.return;a!==null;){var n=a;switch(To(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&qn();break;case 3:E1(),n0(W0),n0(D0),Uo();break;case 5:Fo(n);break;case 4:E1();break;case 13:n0(l0);break;case 19:n0(l0);break;case 10:Lo(n.type._context);break;case 22:case 23:Xo()}a=a.return}if(S0=t,g0=t=pe(t.current,null),A0=q0=e,w0=0,La=null,Go=Pr=$e=0,H0=va=null,Ee!==null){for(e=0;e<Ee.length;e++)if(a=Ee[e],n=a.interleaved,n!==null){a.interleaved=null;var r=n.next,i=a.pending;if(i!==null){var l=i.next;i.next=r,n.next=l}a.pending=n}Ee=null}return t}function Zd(t,e){do{var a=g0;try{if(Ro(),Nn.current=ir,rr){for(var n=o0.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}rr=!1}if(De=0,x0=y0=o0=null,ua=!1,Na=0,Ko.current=null,a===null||a.return===null){w0=1,La=e,g0=null;break}t:{var i=t,l=a.return,o=a,h=e;if(e=A0,o.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var s=h,c=o,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=bs(l);if(g!==null){g.flags&=-257,Es(g,l,o,i,e),g.mode&1&&Ss(i,s,e),e=g,h=s;var z=e.updateQueue;if(z===null){var M=new Set;M.add(h),e.updateQueue=M}else z.add(h);break t}else{if(!(e&1)){Ss(i,s,e),Jo();break t}h=Error(b(426))}}else if(i0&&o.mode&1){var m=bs(l);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Es(m,l,o,i,e),No(C1(h,o));break t}}i=h=C1(h,o),w0!==4&&(w0=2),va===null?va=[i]:va.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var v=Dd(i,h,e);gs(i,v);break t;case 1:o=h;var u=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(de===null||!de.has(f)))){i.flags|=65536,e&=-e,i.lanes|=e;var y=$d(i,o,e);gs(i,y);break t}}i=i.return}while(i!==null)}au(a)}catch(x){e=x,g0===a&&a!==null&&(g0=a=a.return);continue}break}while(1)}function tu(){var t=lr.current;return lr.current=ir,t===null?ir:t}function Jo(){(w0===0||w0===3||w0===2)&&(w0=4),S0===null||!($e&268435455)&&!(Pr&268435455)||ae(S0,A0)}function sr(t,e){var a=K;K|=2;var n=tu();(S0!==t||A0!==e)&&(Dt=null,Te(t,e));do try{W4();break}catch(r){Zd(t,r)}while(1);if(Ro(),K=a,lr.current=n,g0!==null)throw Error(b(261));return S0=null,A0=0,w0}function W4(){for(;g0!==null;)eu(g0)}function Y4(){for(;g0!==null&&!g3();)eu(g0)}function eu(t){var e=ru(t.alternate,t,q0);t.memoizedProps=t.pendingProps,e===null?au(t):g0=e,Ko.current=null}function au(t){var e=t;do{var a=e.alternate;if(t=e.return,e.flags&32768){if(a=F4(a,e),a!==null){a.flags&=32767,g0=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{w0=6,g0=null;return}}else if(a=I4(a,e,q0),a!==null){g0=a;return}if(e=e.sibling,e!==null){g0=e;return}g0=e=t}while(e!==null);w0===0&&(w0=5)}function Se(t,e,a){var n=J,r=ot.transition;try{ot.transition=null,J=1,K4(t,e,a,n)}finally{ot.transition=r,J=n}return null}function K4(t,e,a,n){do m1();while(ie!==null);if(K&6)throw Error(b(327));a=t.finishedWork;var r=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var i=a.lanes|a.childLanes;if(C3(t,i),t===S0&&(g0=S0=null,A0=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||yn||(yn=!0,iu(Vn,function(){return m1(),null})),i=(a.flags&15990)!==0,a.subtreeFlags&15990||i){i=ot.transition,ot.transition=null;var l=J;J=1;var o=K;K|=4,Ko.current=null,j4(t,a),qd(a,t),p4(dl),Yn=!!cl,dl=cl=null,t.current=a,B4(a),z3(),K=o,J=l,ot.transition=i}else t.current=a;if(yn&&(yn=!1,ie=t,hr=r),i=t.pendingLanes,i===0&&(de=null),w3(a.stateNode),K0(t,p0()),e!==null)for(n=t.onRecoverableError,a=0;a<e.length;a++)r=e[a],n(r.value,{componentStack:r.stack,digest:r.digest});if(or)throw or=!1,t=Tl,Tl=null,t;return hr&1&&t.tag!==0&&m1(),i=t.pendingLanes,i&1?t===Nl?fa++:(fa=0,Nl=t):fa=0,Me(),null}function m1(){if(ie!==null){var t=Lc(hr),e=ot.transition,a=J;try{if(ot.transition=null,J=16>t?16:t,ie===null)var n=!1;else{if(t=ie,ie=null,hr=0,K&6)throw Error(b(331));var r=K;for(K|=4,O=t.current;O!==null;){var i=O,l=i.child;if(O.flags&16){var o=i.deletions;if(o!==null){for(var h=0;h<o.length;h++){var s=o[h];for(O=s;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:pa(8,c,i)}var d=c.child;if(d!==null)d.return=c,O=d;else for(;O!==null;){c=O;var p=c.sibling,g=c.return;if(Kd(c),c===s){O=null;break}if(p!==null){p.return=g,O=p;break}O=g}}}var z=i.alternate;if(z!==null){var M=z.child;if(M!==null){z.child=null;do{var m=M.sibling;M.sibling=null,M=m}while(M!==null)}}O=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,O=l;else t:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:pa(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,O=v;break t}O=i.return}}var u=t.current;for(O=u;O!==null;){l=O;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,O=f;else t:for(l=u;O!==null;){if(o=O,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:kr(9,o)}}catch(x){s0(o,o.return,x)}if(o===l){O=null;break t}var y=o.sibling;if(y!==null){y.return=o.return,O=y;break t}O=o.return}}if(K=r,Me(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(yr,t)}catch{}n=!0}return n}finally{J=a,ot.transition=e}}return!1}function Fs(t,e,a){e=C1(a,e),e=Dd(t,e,1),t=ce(t,e,1),e=F0(),t!==null&&(Ga(t,1,e),K0(t,e))}function s0(t,e,a){if(t.tag===3)Fs(t,t,a);else for(;e!==null;){if(e.tag===3){Fs(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(de===null||!de.has(n))){t=C1(a,t),t=$d(e,t,1),e=ce(e,t,1),t=F0(),e!==null&&(Ga(e,1,t),K0(e,t));break}}e=e.return}}function G4(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),e=F0(),t.pingedLanes|=t.suspendedLanes&a,S0===t&&(A0&a)===a&&(w0===4||w0===3&&(A0&130023424)===A0&&500>p0()-Qo?Te(t,0):Go|=a),K0(t,e)}function nu(t,e){e===0&&(t.mode&1?(e=cn,cn<<=1,!(cn&130023424)&&(cn=4194304)):e=1);var a=F0();t=Yt(t,e),t!==null&&(Ga(t,e,a),K0(t,a))}function Q4(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),nu(t,a)}function q4(t,e){var a=0;switch(t.tag){case 13:var n=t.stateNode,r=t.memoizedState;r!==null&&(a=r.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(b(314))}n!==null&&n.delete(e),nu(t,a)}var ru;ru=function(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps||W0.current)V0=!0;else{if(!(t.lanes&a)&&!(e.flags&128))return V0=!1,$4(t,e,a);V0=!!(t.flags&131072)}else V0=!1,i0&&e.flags&1048576&&od(e,Zn,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;Rn(t,e),t=e.pendingProps;var r=x1(e,D0.current);f1(e,a),r=Bo(null,e,n,t,r,a);var i=Ho();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Y0(n)?(i=!0,Xn(e)):i=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,$o(e),r.updater=Er,e.stateNode=r,r._reactInternals=e,yl(e,n,t,a),e=xl(null,e,n,!0,i,a)):(e.tag=0,i0&&i&&Ao(e),I0(null,e,r,a),e=e.child),e;case 16:n=e.elementType;t:{switch(Rn(t,e),t=e.pendingProps,r=n._init,n=r(n._payload),e.type=n,r=e.tag=J4(n),t=ft(n,t),r){case 0:e=_l(null,e,n,t,a);break t;case 1:e=Ps(null,e,n,t,a);break t;case 11:e=Cs(null,e,n,t,a);break t;case 14:e=ks(null,e,n,ft(n.type,t),a);break t}throw Error(b(306,n,""))}return e;case 0:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:ft(n,r),_l(t,e,n,r,a);case 1:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:ft(n,r),Ps(t,e,n,r,a);case 3:t:{if(jd(e),t===null)throw Error(b(387));n=e.pendingProps,i=e.memoizedState,r=i.element,dd(t,e),ar(e,n,null,a);var l=e.memoizedState;if(n=l.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){r=C1(Error(b(423)),e),e=As(t,e,n,a,r);break t}else if(n!==r){r=C1(Error(b(424)),e),e=As(t,e,n,a,r);break t}else for(J0=se(e.stateNode.containerInfo.firstChild),Z0=e,i0=!0,gt=null,a=fd(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(S1(),n===r){e=Kt(t,e,a);break t}I0(t,e,n,a)}e=e.child}return e;case 5:return md(e),t===null&&gl(e),n=e.type,r=e.pendingProps,i=t!==null?t.memoizedProps:null,l=r.children,ul(n,r)?l=null:i!==null&&ul(n,i)&&(e.flags|=32),Ud(t,e),I0(t,e,l,a),e.child;case 6:return t===null&&gl(e),null;case 13:return Bd(t,e,a);case 4:return Io(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=b1(e,null,n,a):I0(t,e,n,a),e.child;case 11:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:ft(n,r),Cs(t,e,n,r,a);case 7:return I0(t,e,e.pendingProps,a),e.child;case 8:return I0(t,e,e.pendingProps.children,a),e.child;case 12:return I0(t,e,e.pendingProps.children,a),e.child;case 10:t:{if(n=e.type._context,r=e.pendingProps,i=e.memoizedProps,l=r.value,e0(tr,n._currentValue),n._currentValue=l,i!==null)if(yt(i.value,l)){if(i.children===r.children&&!W0.current){e=Kt(t,e,a);break t}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){l=i.child;for(var h=o.firstContext;h!==null;){if(h.context===n){if(i.tag===1){h=Bt(-1,a&-a),h.tag=2;var s=i.updateQueue;if(s!==null){s=s.shared;var c=s.pending;c===null?h.next=h:(h.next=c.next,c.next=h),s.pending=h}}i.lanes|=a,h=i.alternate,h!==null&&(h.lanes|=a),zl(i.return,a,e),o.lanes|=a;break}h=h.next}}else if(i.tag===10)l=i.type===e.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(b(341));l.lanes|=a,o=l.alternate,o!==null&&(o.lanes|=a),zl(l,a,e),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===e){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}I0(t,e,r.children,a),e=e.child}return e;case 9:return r=e.type,n=e.pendingProps.children,f1(e,a),r=ht(r),n=n(r),e.flags|=1,I0(t,e,n,a),e.child;case 14:return n=e.type,r=ft(n,e.pendingProps),r=ft(n.type,r),ks(t,e,n,r,a);case 15:return Id(t,e,e.type,e.pendingProps,a);case 17:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:ft(n,r),Rn(t,e),e.tag=1,Y0(n)?(t=!0,Xn(e)):t=!1,f1(e,a),pd(e,n,r),yl(e,n,r,a),xl(null,e,n,!0,t,a);case 19:return Hd(t,e,a);case 22:return Fd(t,e,a)}throw Error(b(156,e.tag))};function iu(t,e){return Tc(t,e)}function X4(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(t,e,a,n){return new X4(t,e,a,n)}function Zo(t){return t=t.prototype,!(!t||!t.isReactComponent)}function J4(t){if(typeof t=="function")return Zo(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zo)return 11;if(t===Mo)return 14}return 2}function pe(t,e){var a=t.alternate;return a===null?(a=lt(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function $n(t,e,a,n,r,i){var l=2;if(n=t,typeof t=="function")Zo(t)&&(l=1);else if(typeof t=="string")l=5;else t:switch(t){case Je:return Ne(a.children,r,i,e);case go:l=8,r|=8;break;case Vi:return t=lt(12,a,e,r|2),t.elementType=Vi,t.lanes=i,t;case Wi:return t=lt(13,a,e,r),t.elementType=Wi,t.lanes=i,t;case Yi:return t=lt(19,a,e,r),t.elementType=Yi,t.lanes=i,t;case vc:return Ar(a,r,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case uc:l=10;break t;case pc:l=9;break t;case zo:l=11;break t;case Mo:l=14;break t;case Zt:l=16,n=null;break t}throw Error(b(130,t==null?t:typeof t,""))}return e=lt(l,a,e,r),e.elementType=t,e.type=n,e.lanes=i,e}function Ne(t,e,a,n){return t=lt(7,t,n,e),t.lanes=a,t}function Ar(t,e,a,n){return t=lt(22,t,n,e),t.elementType=vc,t.lanes=a,t.stateNode={isHidden:!1},t}function wi(t,e,a){return t=lt(6,t,null,e),t.lanes=a,t}function _i(t,e,a){return e=lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Z4(t,e,a,n,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ai(0),this.expirationTimes=ai(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ai(0),this.identifierPrefix=n,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function th(t,e,a,n,r,i,l,o,h){return t=new Z4(t,e,a,o,h),e===1?(e=1,i===!0&&(e|=8)):e=0,i=lt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:n,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$o(i),t}function tv(t,e,a){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xe,key:n==null?null:""+n,children:t,containerInfo:e,implementation:a}}function lu(t){if(!t)return me;t=t._reactInternals;t:{if(Be(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break t;case 1:if(Y0(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var a=t.type;if(Y0(a))return id(t,a,e)}return e}function ou(t,e,a,n,r,i,l,o,h){return t=th(a,n,!0,t,r,i,l,o,h),t.context=lu(null),a=t.current,n=F0(),r=ue(a),i=Bt(n,r),i.callback=e??null,ce(a,i,r),t.current.lanes=r,Ga(t,r,n),K0(t,n),t}function Tr(t,e,a,n){var r=e.current,i=F0(),l=ue(r);return a=lu(a),e.context===null?e.context=a:e.pendingContext=a,e=Bt(i,l),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=ce(r,e,l),t!==null&&(Mt(t,r,l,i),Tn(t,r,l)),l}function cr(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Us(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function eh(t,e){Us(t,e),(t=t.alternate)&&Us(t,e)}function ev(){return null}var hu=typeof reportError=="function"?reportError:function(t){console.error(t)};function ah(t){this._internalRoot=t}Nr.prototype.render=ah.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Tr(t,e,null,null)};Nr.prototype.unmount=ah.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ie(function(){Tr(null,t,null,null)}),e[Wt]=null}};function Nr(t){this._internalRoot=t}Nr.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ic();t={blockedOn:null,target:t,priority:e};for(var a=0;a<ee.length&&e!==0&&e<ee[a].priority;a++);ee.splice(a,0,t),a===0&&Uc(t)}};function nh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Or(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function js(){}function av(t,e,a,n,r){if(r){if(typeof n=="function"){var i=n;n=function(){var s=cr(l);i.call(s)}}var l=ou(e,n,t,0,null,!1,!1,"",js);return t._reactRootContainer=l,t[Wt]=l.current,Ca(t.nodeType===8?t.parentNode:t),Ie(),l}for(;r=t.lastChild;)t.removeChild(r);if(typeof n=="function"){var o=n;n=function(){var s=cr(h);o.call(s)}}var h=th(t,0,!1,null,null,!1,!1,"",js);return t._reactRootContainer=h,t[Wt]=h.current,Ca(t.nodeType===8?t.parentNode:t),Ie(function(){Tr(e,h,a,n)}),h}function Rr(t,e,a,n,r){var i=a._reactRootContainer;if(i){var l=i;if(typeof r=="function"){var o=r;r=function(){var h=cr(l);o.call(h)}}Tr(e,l,t,r)}else l=av(a,e,t,r,n);return cr(l)}Dc=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var a=na(e.pendingLanes);a!==0&&(_o(e,a|1),K0(e,p0()),!(K&6)&&(k1=p0()+500,Me()))}break;case 13:Ie(function(){var n=Yt(t,1);if(n!==null){var r=F0();Mt(n,t,1,r)}}),eh(t,1)}};xo=function(t){if(t.tag===13){var e=Yt(t,134217728);if(e!==null){var a=F0();Mt(e,t,134217728,a)}eh(t,134217728)}};$c=function(t){if(t.tag===13){var e=ue(t),a=Yt(t,e);if(a!==null){var n=F0();Mt(a,t,e,n)}eh(t,e)}};Ic=function(){return J};Fc=function(t,e){var a=J;try{return J=t,e()}finally{J=a}};al=function(t,e,a){switch(e){case"input":if(Qi(t,a),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var r=Sr(n);if(!r)throw Error(b(90));mc(n),Qi(n,r)}}}break;case"textarea":zc(t,a);break;case"select":e=a.value,e!=null&&d1(t,!!a.multiple,e,!1)}};bc=qo;Ec=Ie;var nv={usingClientEntryPoint:!1,Events:[qa,a1,Sr,xc,Sc,qo]},K1={findFiberByHostInstance:be,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rv={bundleType:K1.bundleType,version:K1.version,rendererPackageName:K1.rendererPackageName,rendererConfig:K1.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pc(t),t===null?null:t.stateNode},findFiberByHostInstance:K1.findFiberByHostInstance||ev,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wn.isDisabled&&wn.supportsFiber)try{yr=wn.inject(rv),Pt=wn}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nv;et.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nh(e))throw Error(b(200));return tv(t,e,null,a)};et.createRoot=function(t,e){if(!nh(t))throw Error(b(299));var a=!1,n="",r=hu;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=th(t,1,!1,null,null,a,!1,n,r),t[Wt]=e.current,Ca(t.nodeType===8?t.parentNode:t),new ah(e)};et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=Pc(e),t=t===null?null:t.stateNode,t};et.flushSync=function(t){return Ie(t)};et.hydrate=function(t,e,a){if(!Or(e))throw Error(b(200));return Rr(null,t,e,!0,a)};et.hydrateRoot=function(t,e,a){if(!nh(t))throw Error(b(405));var n=a!=null&&a.hydratedSources||null,r=!1,i="",l=hu;if(a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(l=a.onRecoverableError)),e=ou(e,null,t,1,a??null,r,!1,i,l),t[Wt]=e.current,Ca(t),n)for(t=0;t<n.length;t++)a=n[t],r=a._getVersion,r=r(a._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[a,r]:e.mutableSourceEagerHydrationData.push(a,r);return new Nr(e)};et.render=function(t,e,a){if(!Or(e))throw Error(b(200));return Rr(null,t,e,!1,a)};et.unmountComponentAtNode=function(t){if(!Or(t))throw Error(b(40));return t._reactRootContainer?(Ie(function(){Rr(null,null,t,!1,function(){t._reactRootContainer=null,t[Wt]=null})}),!0):!1};et.unstable_batchedUpdates=qo;et.unstable_renderSubtreeIntoContainer=function(t,e,a,n){if(!Or(a))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Rr(t,e,a,!1,n)};et.version="18.2.0-next-9e3b772b8-20220608";function su(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(su)}catch(t){console.error(t)}}su(),oc.exports=et;var iv=oc.exports,cu,Bs=iv;cu=Bs.createRoot,Bs.hydrateRoot;var du={exports:{}},Lr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv=A,ov=Symbol.for("react.element"),hv=Symbol.for("react.fragment"),sv=Object.prototype.hasOwnProperty,cv=lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dv={key:!0,ref:!0,__self:!0,__source:!0};function uu(t,e,a){var n,r={},i=null,l=null;a!==void 0&&(i=""+a),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(l=e.ref);for(n in e)sv.call(e,n)&&!dv.hasOwnProperty(n)&&(r[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)r[n]===void 0&&(r[n]=e[n]);return{$$typeof:ov,type:t,key:i,ref:l,props:r,_owner:cv.current}}Lr.Fragment=hv;Lr.jsx=uu;Lr.jsxs=uu;du.exports=Lr;var f0=du.exports;const uv="modulepreload",pv=function(t,e){return new URL(t,e).href},Hs={},rh=function(e,a,n){if(!a||a.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(a.map(i=>{if(i=pv(i,n),i in Hs)return;Hs[i]=!0;const l=i.endsWith(".css"),o=l?'[rel="stylesheet"]':"";if(!!n)for(let c=r.length-1;c>=0;c--){const d=r[c];if(d.href===i&&(!l||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${o}`))return;const s=document.createElement("link");if(s.rel=l?"stylesheet":uv,l||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),l)return new Promise((c,d)=>{s.addEventListener("load",c),s.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class vv extends HTMLElement{static get version(){return"24.1.11"}}customElements.define("vaadin-lumo-styles",vv);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const In=window,ih=In.ShadowRoot&&(In.ShadyCSS===void 0||In.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lh=Symbol(),Vs=new WeakMap;let oh=class{constructor(e,a,n){if(this._$cssResult$=!0,n!==lh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=a}get styleSheet(){let e=this.o;const a=this.t;if(ih&&e===void 0){const n=a!==void 0&&a.length===1;n&&(e=Vs.get(a)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Vs.set(a,e))}return e}toString(){return this.cssText}};const pu=t=>new oh(typeof t=="string"?t:t+"",void 0,lh),Z=(t,...e)=>{const a=t.length===1?t[0]:e.reduce((n,r,i)=>n+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]);return new oh(a,t,lh)},fv=(t,e)=>{ih?t.adoptedStyleSheets=e.map(a=>a instanceof CSSStyleSheet?a:a.styleSheet):e.forEach(a=>{const n=document.createElement("style"),r=In.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=a.cssText,t.appendChild(n)})},Ws=ih?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let a="";for(const n of e.cssRules)a+=n.cssText;return pu(a)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xi;const dr=window,Ys=dr.trustedTypes,mv=Ys?Ys.emptyScript:"",Ks=dr.reactiveElementPolyfillSupport,Ll={toAttribute(t,e){switch(e){case Boolean:t=t?mv:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let a=t;switch(e){case Boolean:a=t!==null;break;case Number:a=t===null?null:Number(t);break;case Object:case Array:try{a=JSON.parse(t)}catch{a=null}}return a}},vu=(t,e)=>e!==t&&(e==e||t==t),Si={attribute:!0,type:String,converter:Ll,reflect:!1,hasChanged:vu},Dl="finalized";let qe=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var a;this.finalize(),((a=this.h)!==null&&a!==void 0?a:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((a,n)=>{const r=this._$Ep(n,a);r!==void 0&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,a=Si){if(a.state&&(a.attribute=!1),this.finalize(),this.elementProperties.set(e,a),!a.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,a);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,a,n){return{get(){return this[a]},set(r){const i=this[e];this[a]=r,this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Si}static finalize(){if(this.hasOwnProperty(Dl))return!1;this[Dl]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const a=this.properties,n=[...Object.getOwnPropertyNames(a),...Object.getOwnPropertySymbols(a)];for(const r of n)this.createProperty(r,a[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const a=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)a.unshift(Ws(r))}else e!==void 0&&a.push(Ws(e));return a}static _$Ep(e,a){const n=a.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(a=>this.enableUpdating=a),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(a=>a(this))}addController(e){var a,n;((a=this._$ES)!==null&&a!==void 0?a:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var a;(a=this._$ES)===null||a===void 0||a.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,a)=>{this.hasOwnProperty(a)&&(this._$Ei.set(a,this[a]),delete this[a])})}createRenderRoot(){var e;const a=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return fv(a,this.constructor.elementStyles),a}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(a=>{var n;return(n=a.hostConnected)===null||n===void 0?void 0:n.call(a)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(a=>{var n;return(n=a.hostDisconnected)===null||n===void 0?void 0:n.call(a)})}attributeChangedCallback(e,a,n){this._$AK(e,n)}_$EO(e,a,n=Si){var r;const i=this.constructor._$Ep(e,n);if(i!==void 0&&n.reflect===!0){const l=(((r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?n.converter:Ll).toAttribute(a,n.type);this._$El=e,l==null?this.removeAttribute(i):this.setAttribute(i,l),this._$El=null}}_$AK(e,a){var n;const r=this.constructor,i=r._$Ev.get(e);if(i!==void 0&&this._$El!==i){const l=r.getPropertyOptions(i),o=typeof l.converter=="function"?{fromAttribute:l.converter}:((n=l.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?l.converter:Ll;this._$El=i,this[i]=o.fromAttribute(a,l.type),this._$El=null}}requestUpdate(e,a,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||vu)(this[e],a)?(this._$AL.has(e)||this._$AL.set(e,a),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(a){Promise.reject(a)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,i)=>this[i]=r),this._$Ei=void 0);let a=!1;const n=this._$AL;try{a=this.shouldUpdate(n),a?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var i;return(i=r.hostUpdate)===null||i===void 0?void 0:i.call(r)}),this.update(n)):this._$Ek()}catch(r){throw a=!1,this._$Ek(),r}a&&this._$AE(n)}willUpdate(e){}_$AE(e){var a;(a=this._$ES)===null||a===void 0||a.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((a,n)=>this._$EO(n,this[n],a)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};qe[Dl]=!0,qe.elementProperties=new Map,qe.elementStyles=[],qe.shadowRootOptions={mode:"open"},Ks==null||Ks({ReactiveElement:qe}),((xi=dr.reactiveElementVersions)!==null&&xi!==void 0?xi:dr.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bi;const ur=window,P1=ur.trustedTypes,Gs=P1?P1.createPolicy("lit-html",{createHTML:t=>t}):void 0,$l="$lit$",ne=`lit$${(Math.random()+"").slice(9)}$`,fu="?"+ne,gv=`<${fu}>`,Fe=document,Da=()=>Fe.createComment(""),$a=t=>t===null||typeof t!="object"&&typeof t!="function",mu=Array.isArray,zv=t=>mu(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Ei=`[ 	
\f\r]`,G1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qs=/-->/g,qs=/>/g,we=RegExp(`>|${Ei}(?:([^\\s"'>=/]+)(${Ei}*=${Ei}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xs=/'/g,Js=/"/g,gu=/^(?:script|style|textarea|title)$/i,zu=t=>(e,...a)=>({_$litType$:t,strings:e,values:a}),tm=zu(1),Mv=zu(2),Ue=Symbol.for("lit-noChange"),v0=Symbol.for("lit-nothing"),Zs=new WeakMap,ke=Fe.createTreeWalker(Fe,129,null,!1);function Mu(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Gs!==void 0?Gs.createHTML(e):e}const yv=(t,e)=>{const a=t.length-1,n=[];let r,i=e===2?"<svg>":"",l=G1;for(let o=0;o<a;o++){const h=t[o];let s,c,d=-1,p=0;for(;p<h.length&&(l.lastIndex=p,c=l.exec(h),c!==null);)p=l.lastIndex,l===G1?c[1]==="!--"?l=Qs:c[1]!==void 0?l=qs:c[2]!==void 0?(gu.test(c[2])&&(r=RegExp("</"+c[2],"g")),l=we):c[3]!==void 0&&(l=we):l===we?c[0]===">"?(l=r??G1,d=-1):c[1]===void 0?d=-2:(d=l.lastIndex-c[2].length,s=c[1],l=c[3]===void 0?we:c[3]==='"'?Js:Xs):l===Js||l===Xs?l=we:l===Qs||l===qs?l=G1:(l=we,r=void 0);const g=l===we&&t[o+1].startsWith("/>")?" ":"";i+=l===G1?h+gv:d>=0?(n.push(s),h.slice(0,d)+$l+h.slice(d)+ne+g):h+ne+(d===-2?(n.push(void 0),o):g)}return[Mu(t,i+(t[a]||"<?>")+(e===2?"</svg>":"")),n]};class Ia{constructor({strings:e,_$litType$:a},n){let r;this.parts=[];let i=0,l=0;const o=e.length-1,h=this.parts,[s,c]=yv(e,a);if(this.el=Ia.createElement(s,n),ke.currentNode=this.el.content,a===2){const d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(r=ke.nextNode())!==null&&h.length<o;){if(r.nodeType===1){if(r.hasAttributes()){const d=[];for(const p of r.getAttributeNames())if(p.endsWith($l)||p.startsWith(ne)){const g=c[l++];if(d.push(p),g!==void 0){const z=r.getAttribute(g.toLowerCase()+$l).split(ne),M=/([.?@])?(.*)/.exec(g);h.push({type:1,index:i,name:M[2],strings:z,ctor:M[1]==="."?_v:M[1]==="?"?Sv:M[1]==="@"?bv:Dr})}else h.push({type:6,index:i})}for(const p of d)r.removeAttribute(p)}if(gu.test(r.tagName)){const d=r.textContent.split(ne),p=d.length-1;if(p>0){r.textContent=P1?P1.emptyScript:"";for(let g=0;g<p;g++)r.append(d[g],Da()),ke.nextNode(),h.push({type:2,index:++i});r.append(d[p],Da())}}}else if(r.nodeType===8)if(r.data===fu)h.push({type:2,index:i});else{let d=-1;for(;(d=r.data.indexOf(ne,d+1))!==-1;)h.push({type:7,index:i}),d+=ne.length-1}i++}}static createElement(e,a){const n=Fe.createElement("template");return n.innerHTML=e,n}}function A1(t,e,a=t,n){var r,i,l,o;if(e===Ue)return e;let h=n!==void 0?(r=a._$Co)===null||r===void 0?void 0:r[n]:a._$Cl;const s=$a(e)?void 0:e._$litDirective$;return(h==null?void 0:h.constructor)!==s&&((i=h==null?void 0:h._$AO)===null||i===void 0||i.call(h,!1),s===void 0?h=void 0:(h=new s(t),h._$AT(t,a,n)),n!==void 0?((l=(o=a)._$Co)!==null&&l!==void 0?l:o._$Co=[])[n]=h:a._$Cl=h),h!==void 0&&(e=A1(t,h._$AS(t,e.values),h,n)),e}class wv{constructor(e,a){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var a;const{el:{content:n},parts:r}=this._$AD,i=((a=e==null?void 0:e.creationScope)!==null&&a!==void 0?a:Fe).importNode(n,!0);ke.currentNode=i;let l=ke.nextNode(),o=0,h=0,s=r[0];for(;s!==void 0;){if(o===s.index){let c;s.type===2?c=new Ja(l,l.nextSibling,this,e):s.type===1?c=new s.ctor(l,s.name,s.strings,this,e):s.type===6&&(c=new Ev(l,this,e)),this._$AV.push(c),s=r[++h]}o!==(s==null?void 0:s.index)&&(l=ke.nextNode(),o++)}return ke.currentNode=Fe,i}v(e){let a=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,a),a+=n.strings.length-2):n._$AI(e[a])),a++}}class Ja{constructor(e,a,n,r){var i;this.type=2,this._$AH=v0,this._$AN=void 0,this._$AA=e,this._$AB=a,this._$AM=n,this.options=r,this._$Cp=(i=r==null?void 0:r.isConnected)===null||i===void 0||i}get _$AU(){var e,a;return(a=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&a!==void 0?a:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=a.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,a=this){e=A1(this,e,a),$a(e)?e===v0||e==null||e===""?(this._$AH!==v0&&this._$AR(),this._$AH=v0):e!==this._$AH&&e!==Ue&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):zv(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==v0&&$a(this._$AH)?this._$AA.nextSibling.data=e:this.$(Fe.createTextNode(e)),this._$AH=e}g(e){var a;const{values:n,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Ia.createElement(Mu(r.h,r.h[0]),this.options)),r);if(((a=this._$AH)===null||a===void 0?void 0:a._$AD)===i)this._$AH.v(n);else{const l=new wv(i,this),o=l.u(this.options);l.v(n),this.$(o),this._$AH=l}}_$AC(e){let a=Zs.get(e.strings);return a===void 0&&Zs.set(e.strings,a=new Ia(e)),a}T(e){mu(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let n,r=0;for(const i of e)r===a.length?a.push(n=new Ja(this.k(Da()),this.k(Da()),this,this.options)):n=a[r],n._$AI(i),r++;r<a.length&&(this._$AR(n&&n._$AB.nextSibling,r),a.length=r)}_$AR(e=this._$AA.nextSibling,a){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,a);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var a;this._$AM===void 0&&(this._$Cp=e,(a=this._$AP)===null||a===void 0||a.call(this,e))}}class Dr{constructor(e,a,n,r,i){this.type=1,this._$AH=v0,this._$AN=void 0,this.element=e,this.name=a,this._$AM=r,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v0}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,a=this,n,r){const i=this.strings;let l=!1;if(i===void 0)e=A1(this,e,a,0),l=!$a(e)||e!==this._$AH&&e!==Ue,l&&(this._$AH=e);else{const o=e;let h,s;for(e=i[0],h=0;h<i.length-1;h++)s=A1(this,o[n+h],a,h),s===Ue&&(s=this._$AH[h]),l||(l=!$a(s)||s!==this._$AH[h]),s===v0?e=v0:e!==v0&&(e+=(s??"")+i[h+1]),this._$AH[h]=s}l&&!r&&this.j(e)}j(e){e===v0?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class _v extends Dr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v0?void 0:e}}const xv=P1?P1.emptyScript:"";class Sv extends Dr{constructor(){super(...arguments),this.type=4}j(e){e&&e!==v0?this.element.setAttribute(this.name,xv):this.element.removeAttribute(this.name)}}class bv extends Dr{constructor(e,a,n,r,i){super(e,a,n,r,i),this.type=5}_$AI(e,a=this){var n;if((e=(n=A1(this,e,a,0))!==null&&n!==void 0?n:v0)===Ue)return;const r=this._$AH,i=e===v0&&r!==v0||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,l=e!==v0&&(r===v0||i);i&&this.element.removeEventListener(this.name,this,r),l&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var a,n;typeof this._$AH=="function"?this._$AH.call((n=(a=this.options)===null||a===void 0?void 0:a.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Ev{constructor(e,a,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=a,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){A1(this,e)}}const t2=ur.litHtmlPolyfillSupport;t2==null||t2(Ia,Ja),((bi=ur.litHtmlVersions)!==null&&bi!==void 0?bi:ur.litHtmlVersions=[]).push("2.7.5");const Cv=(t,e,a)=>{var n,r;const i=(n=a==null?void 0:a.renderBefore)!==null&&n!==void 0?n:e;let l=i._$litPart$;if(l===void 0){const o=(r=a==null?void 0:a.renderBefore)!==null&&r!==void 0?r:null;i._$litPart$=l=new Ja(e.insertBefore(Da(),o),o,void 0,a??{})}return l._$AI(t),l};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ci,ki;let Fn=class extends qe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,a;const n=super.createRenderRoot();return(e=(a=this.renderOptions).renderBefore)!==null&&e!==void 0||(a.renderBefore=n.firstChild),n}update(e){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Cv(a,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Ue}};Fn.finalized=!0,Fn._$litElement$=!0,(Ci=globalThis.litElementHydrateSupport)===null||Ci===void 0||Ci.call(globalThis,{LitElement:Fn});const e2=globalThis.litElementPolyfillSupport;e2==null||e2({LitElement:Fn});((ki=globalThis.litElementVersions)!==null&&ki!==void 0?ki:globalThis.litElementVersions=[]).push("3.3.2");/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kv=t=>class extends t{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(a,n,r){super.attributeChangedCallback(a,n,r),a==="theme"&&this._set_theme(r)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yu=[];function wu(t){return t&&Object.prototype.hasOwnProperty.call(t,"__themes")}function Pv(t){return wu(customElements.get(t))}function Av(t=[]){return[t].flat(1/0).filter(e=>e instanceof oh?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function wt(t,e,a={}){t&&Pv(t)&&console.warn(`The custom element definition for "${t}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),e=Av(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(t,e,a):yu.push({themeFor:t,styles:e,include:a.include,moduleId:a.moduleId})}function Il(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():yu}function Tv(t,e){return(t||"").split(" ").some(a=>new RegExp(`^${a.split("*").join(".*")}$`,"u").test(e))}function Nv(t=""){let e=0;return t.startsWith("lumo-")||t.startsWith("material-")?e=1:t.startsWith("vaadin-")&&(e=2),e}function _u(t){const e=[];return t.include&&[].concat(t.include).forEach(a=>{const n=Il().find(r=>r.moduleId===a);n?e.push(..._u(n),...n.styles):console.warn(`Included moduleId ${a} not found in style registry`)},t.styles),e}function Ov(t,e){const a=document.createElement("style");a.innerHTML=t.map(n=>n.cssText).join(`
`),e.content.appendChild(a)}function Rv(t){const e=`${t}-default-theme`,a=Il().filter(n=>n.moduleId!==e&&Tv(n.themeFor,t)).map(n=>({...n,styles:[..._u(n),...n.styles],includePriority:Nv(n.moduleId)})).sort((n,r)=>r.includePriority-n.includePriority);return a.length>0?a:Il().filter(n=>n.moduleId===e)}const hh=t=>class extends kv(t){static finalize(){if(super.finalize(),this.elementStyles)return;const a=this.prototype._template;!a||wu(this)||Ov(this.getStylesForThis(),a)}static finalizeStyles(a){const n=this.getStylesForThis();return a?[...super.finalizeStyles(a),...n]:n}static getStylesForThis(){const a=Object.getPrototypeOf(this.prototype),n=(a?a.constructor.__themes:[])||[];this.__themes=[...n,...Rv(this.is)];const r=this.__themes.flatMap(i=>i.styles);return r.filter((i,l)=>l===r.lastIndexOf(i))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lv=(t,...e)=>{const a=document.createElement("style");a.id=t,a.textContent=e.map(n=>n.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",a)},Tt=(t,...e)=>{Lv(`lumo-${t}`,e)};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dv=Z`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;Tt("color-props",Dv);const sh=Z`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;wt("",sh,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xu=Z`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;Tt("spacing-props",xu);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $v=Z`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,ch=Z`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;wt("",ch,{moduleId:"lumo-typography"});Tt("typography-props",$v);wt("vaadin-app-layout",Z`
    [part='navbar'],
    [part='drawer'] {
      background-color: var(--lumo-base-color);
      background-clip: padding-box;
    }

    [part='navbar'] {
      min-height: var(--lumo-size-xl);
      border-bottom: 1px solid var(--lumo-contrast-10pct);
    }

    [part='navbar'][bottom] {
      border-bottom: none;
      border-top: 1px solid var(--lumo-contrast-10pct);
    }

    [part='drawer'] {
      border-inline-end: 1px solid var(--lumo-contrast-10pct);
    }

    :host([overlay]) [part='drawer'] {
      border-inline-end: none;
      box-shadow: var(--lumo-box-shadow-s);
    }

    :host([primary-section='navbar']) [part='navbar'] {
      border: none;
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    }

    :host([primary-section='drawer']:not([overlay])) [part='drawer'] {
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
    }

    [part='backdrop'] {
      background-color: var(--lumo-shade-20pct);
      opacity: 1;
    }

    [part] ::slotted(h2),
    [part] ::slotted(h3),
    [part] ::slotted(h4) {
      margin-top: var(--lumo-space-xs) !important;
      margin-bottom: var(--lumo-space-xs) !important;
    }
  `,{moduleId:"lumo-app-layout"});const Su=document.createElement("template");Su.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(Su.content);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $r=t=>t.test(navigator.userAgent),Fl=t=>t.test(navigator.platform),Iv=t=>t.test(navigator.vendor),rm=$r(/Android/u),im=$r(/Chrome/u)&&Iv(/Google Inc/u),lm=$r(/Firefox/u),Fv=Fl(/^iPad/u)||Fl(/^Mac/u)&&navigator.maxTouchPoints>1,Uv=Fl(/^iPhone/u),jv=Uv||Fv,om=$r(/^((?!chrome|android).)*safari/iu),hm=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function bu(){if(jv){const t=window.innerHeight,a=window.innerWidth>t,n=document.documentElement.clientHeight;a&&n>t?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",`${n-t}px`):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}bu();window.addEventListener("resize",bu);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Q1(t,e,a){return{index:t,removed:e,addedCount:a}}const Eu=0,Cu=1,Ul=2,jl=3;function Bv(t,e,a,n,r,i){let l=i-r+1,o=a-e+1,h=new Array(l);for(let s=0;s<l;s++)h[s]=new Array(o),h[s][0]=s;for(let s=0;s<o;s++)h[0][s]=s;for(let s=1;s<l;s++)for(let c=1;c<o;c++)if(dh(t[e+c-1],n[r+s-1]))h[s][c]=h[s-1][c-1];else{let d=h[s-1][c]+1,p=h[s][c-1]+1;h[s][c]=d<p?d:p}return h}function Hv(t){let e=t.length-1,a=t[0].length-1,n=t[e][a],r=[];for(;e>0||a>0;){if(e==0){r.push(Ul),a--;continue}if(a==0){r.push(jl),e--;continue}let i=t[e-1][a-1],l=t[e-1][a],o=t[e][a-1],h;l<o?h=l<i?l:i:h=o<i?o:i,h==i?(i==n?r.push(Eu):(r.push(Cu),n=i),e--,a--):h==l?(r.push(jl),e--,n=l):(r.push(Ul),a--,n=o)}return r.reverse(),r}function Vv(t,e,a,n,r,i){let l=0,o=0,h,s=Math.min(a-e,i-r);if(e==0&&r==0&&(l=Wv(t,n,s)),a==t.length&&i==n.length&&(o=Yv(t,n,s-l)),e+=l,r+=l,a-=o,i-=o,a-e==0&&i-r==0)return[];if(e==a){for(h=Q1(e,[],0);r<i;)h.removed.push(n[r++]);return[h]}else if(r==i)return[Q1(e,[],a-e)];let c=Hv(Bv(t,e,a,n,r,i));h=void 0;let d=[],p=e,g=r;for(let z=0;z<c.length;z++)switch(c[z]){case Eu:h&&(d.push(h),h=void 0),p++,g++;break;case Cu:h||(h=Q1(p,[],0)),h.addedCount++,p++,h.removed.push(n[g]),g++;break;case Ul:h||(h=Q1(p,[],0)),h.addedCount++,p++;break;case jl:h||(h=Q1(p,[],0)),h.removed.push(n[g]),g++;break}return h&&d.push(h),d}function Wv(t,e,a){for(let n=0;n<a;n++)if(!dh(t[n],e[n]))return n;return a}function Yv(t,e,a){let n=t.length,r=e.length,i=0;for(;i<a&&dh(t[--n],e[--r]);)i++;return i}function Kv(t,e){return Vv(t,0,t.length,e,0,e.length)}function dh(t,e){return t===e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Gv=0,ku=0,g1=[],Qv=0,Bl=!1,Pu=document.createTextNode("");new window.MutationObserver(qv).observe(Pu,{characterData:!0});function qv(){Bl=!1;const t=g1.length;for(let e=0;e<t;e++){let a=g1[e];if(a)try{a()}catch(n){setTimeout(()=>{throw n})}}g1.splice(0,t),ku+=t}const Au={run(t){return Bl||(Bl=!0,Pu.textContent=Qv++),g1.push(t),Gv++},cancel(t){const e=t-ku;if(e>=0){if(!g1[e])throw new Error("invalid async handle: "+t);g1[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const X0=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ke(t){return t.localName==="slot"}let ma=class{static getFlattenedNodes(t){const e=X0(t);return Ke(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(a=>Ke(a)?(a=a,X0(a).assignedNodes({flatten:!0})):[a]).reduce((a,n)=>a.concat(n),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Ke(this._target)?this._listenSlots([this._target]):X0(this._target).children&&(this._listenSlots(X0(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Ke(this._target)?this._unlistenSlots([this._target]):X0(this._target).children&&(this._unlistenSlots(X0(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Au.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let a=t[e];a.addedNodes&&this._listenSlots(a.addedNodes),a.removedNodes&&this._unlistenSlots(a.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),a=Kv(e,this._effectiveNodes);for(let r=0,i;r<a.length&&(i=a[r]);r++)for(let l=0,o;l<i.removed.length&&(o=i.removed[l]);l++)t.removedNodes.push(o);for(let r=0,i;r<a.length&&(i=a[r]);r++)for(let l=i.index;l<i.index+i.addedCount;l++)t.addedNodes.push(e[l]);this._effectiveNodes=e;let n=!1;return(t.addedNodes.length||t.removedNodes.length)&&(n=!0,this.callback.call(this._target,t)),n}_listenSlots(t){for(let e=0;e<t.length;e++){let a=t[e];Ke(a)&&a.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let a=t[e];Ke(a)&&a.removeEventListener("slotchange",this._boundSchedule)}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let pr=!1,Tu=[],Nu=[];function Ou(){pr=!0,requestAnimationFrame(function(){pr=!1,Xv(Tu),setTimeout(function(){Jv(Nu)})})}function Xv(t){for(;t.length;)Ru(t.shift())}function Jv(t){for(let e=0,a=t.length;e<a;e++)Ru(t.shift())}function Ru(t){const e=t[0],a=t[1],n=t[2];try{a.apply(e,n)}catch(r){setTimeout(()=>{throw r})}}function Zv(t,e,a){pr||Ou(),Tu.push([t,e,a])}function t5(t,e,a){pr||Ou(),Nu.push([t,e,a])}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let e5=/(url\()([^)]*)(\))/g,a5=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,_n,Q0;function ga(t,e){if(t&&a5.test(t)||t==="//")return t;if(_n===void 0){_n=!1;try{const a=new URL("b","http://a");a.pathname="c%20d",_n=a.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),_n)try{return new URL(t,e).href}catch{return t}return Q0||(Q0=document.implementation.createHTMLDocument("temp"),Q0.base=Q0.createElement("base"),Q0.head.appendChild(Q0.base),Q0.anchor=Q0.createElement("a"),Q0.body.appendChild(Q0.anchor)),Q0.base.href=e,Q0.anchor.href=t,Q0.anchor.href||t}function uh(t,e){return t.replace(e5,function(a,n,r,i){return n+"'"+ga(r.replace(/["']/g,""),e)+"'"+i})}function ph(t){return t.substring(0,t.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const n5=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const r5=n5&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch{return!1}})();let i5=window.Polymer&&window.Polymer.rootPath||ph(document.baseURI||window.location.href),vr=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Hl=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,l5=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,o5=window.Polymer&&window.Polymer.legacyOptimizations||!1,h5=window.Polymer&&window.Polymer.legacyWarnings||!1,s5=window.Polymer&&window.Polymer.syncInitialRender||!1,Vl=window.Polymer&&window.Polymer.legacyUndefined||!1,c5=window.Polymer&&window.Polymer.orderedComputed||!1,a2=window.Polymer&&window.Polymer.removeNestedTemplates||!1,d5=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let u5=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let p5=0;const Nt=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let a=p5++;function n(r){let i=r.__mixinSet;if(i&&i[a])return r;let l=e,o=l.get(r);if(!o){o=t(r),l.set(r,o);let h=Object.create(o.__mixinSet||i||null);h[a]=!0,o.__mixinSet=h}return o}return n};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let vh={},Lu={};function n2(t,e){vh[t]=Lu[t.toLowerCase()]=e}function r2(t){return vh[t]||Lu[t.toLowerCase()]}function v5(t){t.querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}class Fa extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,a){if(e){let n=r2(e);return n&&a?n.querySelector(a):n}return null}attributeChangedCallback(e,a,n,r){a!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,a=ga(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=ph(a)}return this.__assetpath}register(e){if(e=e||this.id,e){if(Hl&&r2(e)!==void 0)throw n2(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,n2(e,this),v5(this)}}}Fa.prototype.modules=vh;customElements.define("dom-module",Fa);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const f5="link[rel=import][type~=css]",m5="include",i2="shady-unscoped";function Du(t){return Fa.import(t)}function l2(t){let e=t.body?t.body:t;const a=uh(e.textContent,t.baseURI),n=document.createElement("style");return n.textContent=a,n}function g5(t){const e=t.trim().split(/\s+/),a=[];for(let n=0;n<e.length;n++)a.push(...z5(e[n]));return a}function z5(t){const e=Du(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(e._styles===void 0){const a=[];a.push(...Iu(e));const n=e.querySelector("template");n&&a.push(...$u(n,e.assetpath)),e._styles=a}return e._styles}function $u(t,e){if(!t._styles){const a=[],n=t.content.querySelectorAll("style");for(let r=0;r<n.length;r++){let i=n[r],l=i.getAttribute(m5);l&&a.push(...g5(l).filter(function(o,h,s){return s.indexOf(o)===h})),e&&(i.textContent=uh(i.textContent,e)),a.push(i)}t._styles=a}return t._styles}function M5(t){let e=Du(t);return e?Iu(e):[]}function Iu(t){const e=[],a=t.querySelectorAll(f5);for(let n=0;n<a.length;n++){let r=a[n];if(r.import){const i=r.import,l=r.hasAttribute(i2);if(l&&!i._unscopedStyle){const o=l2(i);o.setAttribute(i2,""),i._unscopedStyle=o}else i._style||(i._style=l2(i));e.push(l?i._unscopedStyle:i._style)}}return e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Wl(t){return t.indexOf(".")>=0}function He(t){let e=t.indexOf(".");return e===-1?t:t.slice(0,e)}function y5(t,e){return t.indexOf(e+".")===0}function fr(t,e){return e.indexOf(t+".")===0}function mr(t,e,a){return e+a.slice(t.length)}function ia(t){if(Array.isArray(t)){let e=[];for(let a=0;a<t.length;a++){let n=t[a].toString().split(".");for(let r=0;r<n.length;r++)e.push(n[r])}return e.join(".")}else return t}function Fu(t){return Array.isArray(t)?ia(t).split("."):t.toString().split(".")}function B0(t,e,a){let n=t,r=Fu(e);for(let i=0;i<r.length;i++){if(!n)return;let l=r[i];n=n[l]}return a&&(a.path=r.join(".")),n}function o2(t,e,a){let n=t,r=Fu(e),i=r[r.length-1];if(r.length>1){for(let l=0;l<r.length-1;l++){let o=r[l];if(n=n[o],!n)return}n[i]=a}else n[e]=a;return r.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const gr={},w5=/-[a-z]/g,_5=/([A-Z])/g;function Uu(t){return gr[t]||(gr[t]=t.indexOf("-")<0?t:t.replace(w5,e=>e[1].toUpperCase()))}function Ir(t){return gr[t]||(gr[t]=t.replace(_5,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const x5=Au,ju=Nt(t=>{class e extends t{static createProperties(n){const r=this.prototype;for(let i in n)i in r||r._createPropertyAccessor(i)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,r){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,r))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let r=this.__dataAttributes[n];return r||(r=this.constructor.attributeNameForProperty(n),this.__dataAttributes[r]=n),r}_definePropertyAccessor(n,r){Object.defineProperty(this,n,{get(){return this.__data[n]},set:r?function(){}:function(i){this._setPendingProperty(n,i,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,r){this._setPendingProperty(n,r)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,r,i){let l=this.__data[n],o=this._shouldPropertyChange(n,r,l);return o&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=l),this.__data[n]=r,this.__dataPending[n]=r),o}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,x5.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const n=this.__data,r=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(n,r,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,r,i)),this.__dataCounter--}_shouldPropertiesChange(n,r,i){return!!r}_propertiesChanged(n,r,i){}_shouldPropertyChange(n,r,i){return i!==r&&(i===i||r===r)}attributeChangedCallback(n,r,i,l){r!==i&&this._attributeToProperty(n,i),super.attributeChangedCallback&&super.attributeChangedCallback(n,r,i,l)}_attributeToProperty(n,r,i){if(!this.__serializing){const l=this.__dataAttributes,o=l&&l[n]||n;this[o]=this._deserializeValue(r,i||this.constructor.typeForProperty(o))}}_propertyToAttribute(n,r,i){this.__serializing=!0,i=arguments.length<3?this[n]:i,this._valueToNodeAttribute(this,i,r||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,r,i){const l=this._serializeValue(r);(i==="class"||i==="name"||i==="slot")&&(n=X0(n)),l===void 0?n.removeAttribute(i):n.setAttribute(i,l===""&&window.trustedTypes?window.trustedTypes.emptyScript:l)}_serializeValue(n){switch(typeof n){case"boolean":return n?"":void 0;default:return n!=null?n.toString():void 0}}_deserializeValue(n,r){switch(r){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Bu={};let xn=HTMLElement.prototype;for(;xn;){let t=Object.getOwnPropertyNames(xn);for(let e=0;e<t.length;e++)Bu[t[e]]=!0;xn=Object.getPrototypeOf(xn)}const S5=(()=>window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1)();function b5(t,e){if(!Bu[e]){let a=t[e];a!==void 0&&(t.__data?t._setPendingProperty(e,a):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=a))}}const E5=Nt(t=>{const e=ju(t);class a extends e{static createPropertiesForAttributes(){let r=this.observedAttributes;for(let i=0;i<r.length;i++)this.prototype._createPropertyAccessor(Uu(r[i]))}static attributeNameForProperty(r){return Ir(r)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(r){for(let i in r)this._setProperty(i,r[i])}_ensureAttribute(r,i){const l=this;l.hasAttribute(r)||this._valueToNodeAttribute(l,i,r)}_serializeValue(r){switch(typeof r){case"object":if(r instanceof Date)return r.toString();if(r){if(S5(r))return r;try{return JSON.stringify(r)}catch{return""}}default:return super._serializeValue(r)}}_deserializeValue(r,i){let l;switch(i){case Object:try{l=JSON.parse(r)}catch{l=r}break;case Array:try{l=JSON.parse(r)}catch{l=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${r}`)}break;case Date:l=isNaN(r)?String(r):Number(r),l=new Date(l);break;default:l=super._deserializeValue(r,i);break}return l}_definePropertyAccessor(r,i){b5(this,r),super._definePropertyAccessor(r,i)}_hasAccessor(r){return this.__dataHasAccessor&&this.__dataHasAccessor[r]}_isPropertyPending(r){return!!(this.__dataPending&&r in this.__dataPending)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const C5={"dom-if":!0,"dom-repeat":!0};let h2=!1,s2=!1;function k5(){if(!h2){h2=!0;const t=document.createElement("textarea");t.placeholder="a",s2=t.placeholder===t.textContent}return s2}function P5(t){k5()&&t.localName==="textarea"&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const A5=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,a,n)=>{const r=a.getAttribute(n);if(t&&n.startsWith("on-")){e.setAttribute(n,t.createScript(r,n));return}e.setAttribute(n,r)}})();function T5(t){let e=t.getAttribute("is");if(e&&C5[e]){let a=t;for(a.removeAttribute("is"),t=a.ownerDocument.createElement(e),a.parentNode.replaceChild(t,a),t.appendChild(a);a.attributes.length;){const{name:n}=a.attributes[0];A5(t,a,n),a.removeAttribute(n)}}return t}function Hu(t,e){let a=e.parentInfo&&Hu(t,e.parentInfo);if(a){for(let n=a.firstChild,r=0;n;n=n.nextSibling)if(e.parentIndex===r++)return n}else return t}function N5(t,e,a,n){n.id&&(e[n.id]=a)}function O5(t,e,a){if(a.events&&a.events.length)for(let n=0,r=a.events,i;n<r.length&&(i=r[n]);n++)t._addMethodEventListenerToNode(e,i.name,i.value,t)}function R5(t,e,a,n){a.templateInfo&&(e._templateInfo=a.templateInfo,e._parentTemplateInfo=n)}function L5(t,e,a){return t=t._methodHost||t,function(r){t[a]?t[a](r,r.detail):console.warn("listener method `"+a+"` not defined")}}const D5=Nt(t=>{class e extends t{static _parseTemplate(n,r){if(!n._templateInfo){let i=n._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=!!r,i.stripWhiteSpace=r&&r.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,i,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,r,i){return this._parseTemplateNode(n.content,r,i)}static _parseTemplateNode(n,r,i){let l=!1,o=n;return o.localName=="template"&&!o.hasAttribute("preserve-content")?l=this._parseTemplateNestedTemplate(o,r,i)||l:o.localName==="slot"&&(r.hasInsertionPoint=!0),P5(o),o.firstChild&&this._parseTemplateChildNodes(o,r,i),o.hasAttributes&&o.hasAttributes()&&(l=this._parseTemplateNodeAttributes(o,r,i)||l),l||i.noted}static _parseTemplateChildNodes(n,r,i){if(!(n.localName==="script"||n.localName==="style"))for(let l=n.firstChild,o=0,h;l;l=h){if(l.localName=="template"&&(l=T5(l)),h=l.nextSibling,l.nodeType===Node.TEXT_NODE){let c=h;for(;c&&c.nodeType===Node.TEXT_NODE;)l.textContent+=c.textContent,h=c.nextSibling,n.removeChild(c),c=h;if(r.stripWhiteSpace&&!l.textContent.trim()){n.removeChild(l);continue}}let s={parentIndex:o,parentInfo:i};this._parseTemplateNode(l,r,s)&&(s.infoIndex=r.nodeInfoList.push(s)-1),l.parentNode&&o++}}static _parseTemplateNestedTemplate(n,r,i){let l=n,o=this._parseTemplate(l,r);return(o.content=l.content.ownerDocument.createDocumentFragment()).appendChild(l.content),i.templateInfo=o,!0}static _parseTemplateNodeAttributes(n,r,i){let l=!1,o=Array.from(n.attributes);for(let h=o.length-1,s;s=o[h];h--)l=this._parseTemplateNodeAttribute(n,r,i,s.name,s.value)||l;return l}static _parseTemplateNodeAttribute(n,r,i,l,o){return l.slice(0,3)==="on-"?(n.removeAttribute(l),i.events=i.events||[],i.events.push({name:l.slice(3),value:o}),!0):l==="id"?(i.id=o,!0):!1}static _contentForTemplate(n){let r=n._templateInfo;return r&&r.content||n.content}_stampTemplate(n,r){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),r=r||this.constructor._parseTemplate(n);let i=r.nodeInfoList,l=r.content||n.content,o=document.importNode(l,!0);o.__noInsertionPoint=!r.hasInsertionPoint;let h=o.nodeList=new Array(i.length);o.$={};for(let s=0,c=i.length,d;s<c&&(d=i[s]);s++){let p=h[s]=Hu(o,d);N5(this,o.$,p,d),R5(this,p,d,r),O5(this,p,d)}return o=o,o}_addMethodEventListenerToNode(n,r,i,l){l=l||n;let o=L5(l,r,i);return this._addEventListenerToNode(n,r,o),o}_addEventListenerToNode(n,r,i){n.addEventListener(r,i)}_removeEventListenerFromNode(n,r,i){n.removeEventListener(r,i)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Ua=0;const ja=[],G={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Vu="__computeInfo",$5=/[A-Z]/;function Pi(t,e,a){let n=t[e];if(!n)n=t[e]={};else if(!t.hasOwnProperty(e)&&(n=t[e]=Object.create(t[e]),a))for(let r in n){let i=n[r],l=n[r]=Array(i.length);for(let o=0;o<i.length;o++)l[o]=i[o]}return n}function la(t,e,a,n,r,i){if(e){let l=!1;const o=Ua++;for(let h in a){let s=r?He(h):h,c=e[s];if(c)for(let d=0,p=c.length,g;d<p&&(g=c[d]);d++)(!g.info||g.info.lastRun!==o)&&(!r||fh(h,g.trigger))&&(g.info&&(g.info.lastRun=o),g.fn(t,h,a,n,g.info,r,i),l=!0)}return l}return!1}function I5(t,e,a,n,r,i,l,o){let h=!1,s=l?He(n):n,c=e[s];if(c)for(let d=0,p=c.length,g;d<p&&(g=c[d]);d++)(!g.info||g.info.lastRun!==a)&&(!l||fh(n,g.trigger))&&(g.info&&(g.info.lastRun=a),g.fn(t,n,r,i,g.info,l,o),h=!0);return h}function fh(t,e){if(e){let a=e.name;return a==t||!!(e.structured&&y5(a,t))||!!(e.wildcard&&fr(a,t))}else return!0}function c2(t,e,a,n,r){let i=typeof r.method=="string"?t[r.method]:r.method,l=r.property;i?i.call(t,t.__data[l],n[l]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function F5(t,e,a,n,r){let i=t[G.NOTIFY],l,o=Ua++;for(let s in e)e[s]&&(i&&I5(t,i,o,s,a,n,r)||r&&U5(t,s,a))&&(l=!0);let h;l&&(h=t.__dataHost)&&h._invalidateProperties&&h._invalidateProperties()}function U5(t,e,a){let n=He(e);if(n!==e){let r=Ir(n)+"-changed";return Wu(t,r,a[e],e),!0}return!1}function Wu(t,e,a,n){let r={value:a,queueProperty:!0};n&&(r.path=n),X0(t).dispatchEvent(new CustomEvent(e,{detail:r}))}function j5(t,e,a,n,r,i){let o=(i?He(e):e)!=e?e:null,h=o?B0(t,o):t.__data[e];o&&h===void 0&&(h=a[e]),Wu(t,r.eventName,h,o)}function B5(t,e,a,n,r){let i,l=t.detail,o=l&&l.path;o?(n=mr(a,n,o),i=l&&l.value):i=t.currentTarget[a],i=r?!i:i,(!e[G.READ_ONLY]||!e[G.READ_ONLY][n])&&e._setPendingPropertyOrPath(n,i,!0,!!o)&&(!l||!l.queueProperty)&&e._invalidateProperties()}function H5(t,e,a,n,r){let i=t.__data[e];vr&&(i=vr(i,r.attrName,"attribute",t)),t._propertyToAttribute(e,r.attrName,i)}function V5(t,e,a,n){let r=t[G.COMPUTE];if(r)if(c5){Ua++;const i=Y5(t),l=[];for(let h in e)d2(h,r,l,i,n);let o;for(;o=l.shift();)Yu(t,"",e,a,o)&&d2(o.methodInfo,r,l,i,n);Object.assign(a,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let i=e;for(;la(t,r,i,a,n);)Object.assign(a,t.__dataOld),Object.assign(e,t.__dataPending),i=t.__dataPending,t.__dataPending=null}}const W5=(t,e,a)=>{let n=0,r=e.length-1,i=-1;for(;n<=r;){const l=n+r>>1,o=a.get(e[l].methodInfo)-a.get(t.methodInfo);if(o<0)n=l+1;else if(o>0)r=l-1;else{i=l;break}}i<0&&(i=r+1),e.splice(i,0,t)},d2=(t,e,a,n,r)=>{const i=r?He(t):t,l=e[i];if(l)for(let o=0;o<l.length;o++){const h=l[o];h.info.lastRun!==Ua&&(!r||fh(t,h.trigger))&&(h.info.lastRun=Ua,W5(h.info,a,n))}};function Y5(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const a=t[G.COMPUTE];let{counts:n,ready:r,total:i}=K5(t),l;for(;l=r.shift();){e.set(l,e.size);const o=a[l];o&&o.forEach(h=>{const s=h.info.methodInfo;--i,--n[s]===0&&r.push(s)})}i!==0&&console.warn(`Computed graph for ${t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}function K5(t){const e=t[Vu],a={},n=t[G.COMPUTE],r=[];let i=0;for(let l in e){const o=e[l];i+=a[l]=o.args.filter(h=>!h.literal).length+(o.dynamicFn?1:0)}for(let l in n)e[l]||r.push(l);return{counts:a,ready:r,total:i}}function Yu(t,e,a,n,r){let i=Yl(t,e,a,n,r);if(i===ja)return!1;let l=r.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[l]?t._setPendingProperty(l,i,!0):(t[l]=i,!1)}function G5(t,e,a){let n=t.__dataLinkedPaths;if(n){let r;for(let i in n){let l=n[i];fr(i,e)?(r=mr(i,l,e),t._setPendingPropertyOrPath(r,a,!0,!0)):fr(l,e)&&(r=mr(l,i,e),t._setPendingPropertyOrPath(r,a,!0,!0))}}}function Ai(t,e,a,n,r,i,l){a.bindings=a.bindings||[];let o={kind:n,target:r,parts:i,literal:l,isCompound:i.length!==1};if(a.bindings.push(o),Z5(o)){let{event:s,negate:c}=o.parts[0];o.listenerEvent=s||Ir(r)+"-changed",o.listenerNegate=c}let h=e.nodeInfoList.length;for(let s=0;s<o.parts.length;s++){let c=o.parts[s];c.compoundIndex=s,Q5(t,e,o,c,h)}}function Q5(t,e,a,n,r){if(!n.literal)if(a.kind==="attribute"&&a.target[0]==="-")console.warn("Cannot set attribute "+a.target+' because "-" is not a valid attribute starting character');else{let i=n.dependencies,l={index:r,binding:a,part:n,evaluator:t};for(let o=0;o<i.length;o++){let h=i[o];typeof h=="string"&&(h=Gu(h),h.wildcard=!0),t._addTemplatePropertyEffect(e,h.rootProperty,{fn:q5,info:l,trigger:h})}}}function q5(t,e,a,n,r,i,l){let o=l[r.index],h=r.binding,s=r.part;if(i&&s.source&&e.length>s.source.length&&h.kind=="property"&&!h.isCompound&&o.__isPropertyEffectsClient&&o.__dataHasAccessor&&o.__dataHasAccessor[h.target]){let c=a[e];e=mr(s.source,h.target,e),o._setPendingPropertyOrPath(e,c,!1,!0)&&t._enqueueClient(o)}else{let c=r.evaluator._evaluateBinding(t,s,e,a,n,i);c!==ja&&X5(t,o,h,s,c)}}function X5(t,e,a,n,r){if(r=J5(e,r,a,n),vr&&(r=vr(r,a.target,a.kind,e)),a.kind=="attribute")t._valueToNodeAttribute(e,r,a.target);else{let i=a.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[i]?(!e[G.READ_ONLY]||!e[G.READ_ONLY][i])&&e._setPendingProperty(i,r)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,i,r)}}function J5(t,e,a,n){if(a.isCompound){let r=t.__dataCompoundStorage[a.target];r[n.compoundIndex]=e,e=r.join("")}return a.kind!=="attribute"&&(a.target==="textContent"||a.target==="value"&&(t.localName==="input"||t.localName==="textarea"))&&(e=e??""),e}function Z5(t){return!!t.target&&t.kind!="attribute"&&t.kind!="text"&&!t.isCompound&&t.parts[0].mode==="{"}function t6(t,e){let{nodeList:a,nodeInfoList:n}=e;if(n.length)for(let r=0;r<n.length;r++){let i=n[r],l=a[r],o=i.bindings;if(o)for(let h=0;h<o.length;h++){let s=o[h];e6(l,s),a6(l,t,s)}l.__dataHost=t}}function e6(t,e){if(e.isCompound){let a=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),n=e.parts,r=new Array(n.length);for(let l=0;l<n.length;l++)r[l]=n[l].literal;let i=e.target;a[i]=r,e.literal&&e.kind=="property"&&(i==="className"&&(t=X0(t)),t[i]=e.literal)}}function a6(t,e,a){if(a.listenerEvent){let n=a.parts[0];t.addEventListener(a.listenerEvent,function(r){B5(r,e,a.target,n.source,n.negate)})}}function u2(t,e,a,n,r,i){i=e.static||i&&(typeof i!="object"||i[e.methodName]);let l={methodName:e.methodName,args:e.args,methodInfo:r,dynamicFn:i};for(let o=0,h;o<e.args.length&&(h=e.args[o]);o++)h.literal||t._addPropertyEffect(h.rootProperty,a,{fn:n,info:l,trigger:h});return i&&t._addPropertyEffect(e.methodName,a,{fn:n,info:l}),l}function Yl(t,e,a,n,r){let i=t._methodHost||t,l=i[r.methodName];if(l){let o=t._marshalArgs(r.args,e,a);return o===ja?ja:l.apply(i,o)}else r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const n6=[],Ku="(?:[a-zA-Z_$][\\w.:$\\-*]*)",r6="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",i6="(?:'(?:[^'\\\\]|\\\\.)*')",l6='(?:"(?:[^"\\\\]|\\\\.)*")',o6="(?:"+i6+"|"+l6+")",p2="(?:("+Ku+"|"+r6+"|"+o6+")\\s*)",h6="(?:"+p2+"(?:,\\s*"+p2+")*)",s6="(?:\\(\\s*(?:"+h6+"?)\\)\\s*)",c6="("+Ku+"\\s*"+s6+"?)",d6="(\\[\\[|{{)\\s*",u6="(?:]]|}})",p6="(?:(!)\\s*)?",v6=d6+p6+c6+u6,v2=new RegExp(v6,"g");function f2(t){let e="";for(let a=0;a<t.length;a++){let n=t[a].literal;e+=n||""}return e}function Ti(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let n={methodName:e[1],static:!0,args:n6};if(e[2].trim()){let r=e[2].replace(/\\,/g,"&comma;").split(",");return f6(r,n)}else return n}return null}function f6(t,e){return e.args=t.map(function(a){let n=Gu(a);return n.literal||(e.static=!1),n},this),e}function Gu(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),a={name:e,value:"",literal:!1},n=e[0];switch(n==="-"&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':a.value=e.slice(1,-1),a.literal=!0;break;case"#":a.value=Number(e),a.literal=!0;break}return a.literal||(a.rootProperty=He(e),a.structured=Wl(e),a.structured&&(a.wildcard=e.slice(-2)==".*",a.wildcard&&(a.name=e.slice(0,-2)))),a}function m2(t,e,a){let n=B0(t,a);return n===void 0&&(n=e[a]),n}function Qu(t,e,a,n){const r={indexSplices:n};Vl&&!t._overrideLegacyUndefined&&(e.splices=r),t.notifyPath(a+".splices",r),t.notifyPath(a+".length",e.length),Vl&&!t._overrideLegacyUndefined&&(r.indexSplices=[])}function q1(t,e,a,n,r,i){Qu(t,e,a,[{index:n,addedCount:r,removed:i,object:e,type:"splice"}])}function m6(t){return t[0].toUpperCase()+t.substring(1)}const g6=Nt(t=>{const e=D5(E5(t));class a extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return G}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(X1.length){let r=X1[X1.length-1];r._enqueueClient(this),this.__dataHost=r}}_initializeProtoProperties(r){this.__data=Object.create(r),this.__dataPending=Object.create(r),this.__dataOld={}}_initializeInstanceProperties(r){let i=this[G.READ_ONLY];for(let l in r)(!i||!i[l])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[l]=this.__dataPending[l]=r[l])}_addPropertyEffect(r,i,l){this._createPropertyAccessor(r,i==G.READ_ONLY);let o=Pi(this,i,!0)[r];o||(o=this[i][r]=[]),o.push(l)}_removePropertyEffect(r,i,l){let o=Pi(this,i,!0)[r],h=o.indexOf(l);h>=0&&o.splice(h,1)}_hasPropertyEffect(r,i){let l=this[i];return!!(l&&l[r])}_hasReadOnlyEffect(r){return this._hasPropertyEffect(r,G.READ_ONLY)}_hasNotifyEffect(r){return this._hasPropertyEffect(r,G.NOTIFY)}_hasReflectEffect(r){return this._hasPropertyEffect(r,G.REFLECT)}_hasComputedEffect(r){return this._hasPropertyEffect(r,G.COMPUTE)}_setPendingPropertyOrPath(r,i,l,o){if(o||He(Array.isArray(r)?r[0]:r)!==r){if(!o){let h=B0(this,r);if(r=o2(this,r,i),!r||!super._shouldPropertyChange(r,i,h))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(r,i,l))return G5(this,r,i),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[r])return this._setPendingProperty(r,i,l);this[r]=i}return!1}_setUnmanagedPropertyToNode(r,i,l){(l!==r[i]||typeof l=="object")&&(i==="className"&&(r=X0(r)),r[i]=l)}_setPendingProperty(r,i,l){let o=this.__dataHasPaths&&Wl(r),h=o?this.__dataTemp:this.__data;return this._shouldPropertyChange(r,i,h[r])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),r in this.__dataOld||(this.__dataOld[r]=this.__data[r]),o?this.__dataTemp[r]=i:this.__data[r]=i,this.__dataPending[r]=i,(o||this[G.NOTIFY]&&this[G.NOTIFY][r])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[r]=l),!0):!1}_setProperty(r,i){this._setPendingProperty(r,i,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(r){this.__dataPendingClients=this.__dataPendingClients||[],r!==this&&this.__dataPendingClients.push(r)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let r=this.__dataPendingClients;if(r){this.__dataPendingClients=null;for(let i=0;i<r.length;i++){let l=r[i];l.__dataEnabled?l.__dataPending&&l._flushProperties():l._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(r,i){for(let l in r)(i||!this[G.READ_ONLY]||!this[G.READ_ONLY][l])&&this._setPendingPropertyOrPath(l,r[l],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(r,i,l){let o=this.__dataHasPaths;this.__dataHasPaths=!1;let h;V5(this,i,l,o),h=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(i,l,o),this._flushClients(),la(this,this[G.REFLECT],i,l,o),la(this,this[G.OBSERVE],i,l,o),h&&F5(this,h,i,l,o),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(r,i,l){this[G.PROPAGATE]&&la(this,this[G.PROPAGATE],r,i,l),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,r,i,l)}_runEffectsForTemplate(r,i,l,o){const h=(s,c)=>{la(this,r.propertyEffects,s,l,c,r.nodeList);for(let d=r.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,s,l,c)};r.runEffects?r.runEffects(h,i,o):h(i,o)}linkPaths(r,i){r=ia(r),i=ia(i),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[r]=i}unlinkPaths(r){r=ia(r),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[r]}notifySplices(r,i){let l={path:""},o=B0(this,r,l);Qu(this,o,l.path,i)}get(r,i){return B0(i||this,r)}set(r,i,l){l?o2(l,r,i):(!this[G.READ_ONLY]||!this[G.READ_ONLY][r])&&this._setPendingPropertyOrPath(r,i,!0)&&this._invalidateProperties()}push(r,...i){let l={path:""},o=B0(this,r,l),h=o.length,s=o.push(...i);return i.length&&q1(this,o,l.path,h,i.length,[]),s}pop(r){let i={path:""},l=B0(this,r,i),o=!!l.length,h=l.pop();return o&&q1(this,l,i.path,l.length,0,[h]),h}splice(r,i,l,...o){let h={path:""},s=B0(this,r,h);i<0?i=s.length-Math.floor(-i):i&&(i=Math.floor(i));let c;return arguments.length===2?c=s.splice(i):c=s.splice(i,l,...o),(o.length||c.length)&&q1(this,s,h.path,i,o.length,c),c}shift(r){let i={path:""},l=B0(this,r,i),o=!!l.length,h=l.shift();return o&&q1(this,l,i.path,0,0,[h]),h}unshift(r,...i){let l={path:""},o=B0(this,r,l),h=o.unshift(...i);return i.length&&q1(this,o,l.path,0,i.length,[]),h}notifyPath(r,i){let l;if(arguments.length==1){let o={path:""};i=B0(this,r,o),l=o.path}else Array.isArray(r)?l=ia(r):l=r;this._setPendingPropertyOrPath(l,i,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(r,i){this._addPropertyEffect(r,G.READ_ONLY),i&&(this["_set"+m6(r)]=function(l){this._setProperty(r,l)})}_createPropertyObserver(r,i,l){let o={property:r,method:i,dynamicFn:!!l};this._addPropertyEffect(r,G.OBSERVE,{fn:c2,info:o,trigger:{name:r}}),l&&this._addPropertyEffect(i,G.OBSERVE,{fn:c2,info:o,trigger:{name:i}})}_createMethodObserver(r,i){let l=Ti(r);if(!l)throw new Error("Malformed observer expression '"+r+"'");u2(this,l,G.OBSERVE,Yl,null,i)}_createNotifyingProperty(r){this._addPropertyEffect(r,G.NOTIFY,{fn:j5,info:{eventName:Ir(r)+"-changed",property:r}})}_createReflectedProperty(r){let i=this.constructor.attributeNameForProperty(r);i[0]==="-"?console.warn("Property "+r+" cannot be reflected to attribute "+i+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(r,G.REFLECT,{fn:H5,info:{attrName:i}})}_createComputedProperty(r,i,l){let o=Ti(i);if(!o)throw new Error("Malformed computed expression '"+i+"'");const h=u2(this,o,G.COMPUTE,Yu,r,l);Pi(this,Vu)[r]=h}_marshalArgs(r,i,l){const o=this.__data,h=[];for(let s=0,c=r.length;s<c;s++){let{name:d,structured:p,wildcard:g,value:z,literal:M}=r[s];if(!M)if(g){const m=fr(d,i),v=m2(o,l,m?i:d);z={path:m?i:d,value:v,base:m?B0(o,d):v}}else z=p?m2(o,l,d):o[d];if(Vl&&!this._overrideLegacyUndefined&&z===void 0&&r.length>1)return ja;h[s]=z}return h}static addPropertyEffect(r,i,l){this.prototype._addPropertyEffect(r,i,l)}static createPropertyObserver(r,i,l){this.prototype._createPropertyObserver(r,i,l)}static createMethodObserver(r,i){this.prototype._createMethodObserver(r,i)}static createNotifyingProperty(r){this.prototype._createNotifyingProperty(r)}static createReadOnlyProperty(r,i){this.prototype._createReadOnlyProperty(r,i)}static createReflectedProperty(r){this.prototype._createReflectedProperty(r)}static createComputedProperty(r,i,l){this.prototype._createComputedProperty(r,i,l)}static bindTemplate(r){return this.prototype._bindTemplate(r)}_bindTemplate(r,i){let l=this.constructor._parseTemplate(r),o=this.__preBoundTemplateInfo==l;if(!o)for(let h in l.propertyEffects)this._createPropertyAccessor(h);if(i)if(l=Object.create(l),l.wasPreBound=o,!this.__templateInfo)this.__templateInfo=l;else{const h=r._parentTemplateInfo||this.__templateInfo,s=h.lastChild;l.parent=h,h.lastChild=l,l.previousSibling=s,s?s.nextSibling=l:h.firstChild=l}else this.__preBoundTemplateInfo=l;return l}static _addTemplatePropertyEffect(r,i,l){let o=r.hostProps=r.hostProps||{};o[i]=!0;let h=r.propertyEffects=r.propertyEffects||{};(h[i]=h[i]||[]).push(l)}_stampTemplate(r,i){i=i||this._bindTemplate(r,!0),X1.push(this);let l=super._stampTemplate(r,i);if(X1.pop(),i.nodeList=l.nodeList,!i.wasPreBound){let o=i.childNodes=[];for(let h=l.firstChild;h;h=h.nextSibling)o.push(h)}return l.templateInfo=i,t6(this,i),this.__dataClientsReady&&(this._runEffectsForTemplate(i,this.__data,null,!1),this._flushClients()),l}_removeBoundDom(r){const i=r.templateInfo,{previousSibling:l,nextSibling:o,parent:h}=i;l?l.nextSibling=o:h&&(h.firstChild=o),o?o.previousSibling=l:h&&(h.lastChild=l),i.nextSibling=i.previousSibling=null;let s=i.childNodes;for(let c=0;c<s.length;c++){let d=s[c];X0(X0(d).parentNode).removeChild(d)}}static _parseTemplateNode(r,i,l){let o=e._parseTemplateNode.call(this,r,i,l);if(r.nodeType===Node.TEXT_NODE){let h=this._parseBindings(r.textContent,i);h&&(r.textContent=f2(h)||" ",Ai(this,i,l,"text","textContent",h),o=!0)}return o}static _parseTemplateNodeAttribute(r,i,l,o,h){let s=this._parseBindings(h,i);if(s){let c=o,d="property";$5.test(o)?d="attribute":o[o.length-1]=="$"&&(o=o.slice(0,-1),d="attribute");let p=f2(s);return p&&d=="attribute"&&(o=="class"&&r.hasAttribute("class")&&(p+=" "+r.getAttribute(o)),r.setAttribute(o,p)),d=="attribute"&&c=="disable-upgrade$"&&r.setAttribute(o,""),r.localName==="input"&&c==="value"&&r.setAttribute(c,""),r.removeAttribute(c),d==="property"&&(o=Uu(o)),Ai(this,i,l,d,o,s,p),!0}else return e._parseTemplateNodeAttribute.call(this,r,i,l,o,h)}static _parseTemplateNestedTemplate(r,i,l){let o=e._parseTemplateNestedTemplate.call(this,r,i,l);const h=r.parentNode,s=l.templateInfo,c=h.localName==="dom-if",d=h.localName==="dom-repeat";a2&&(c||d)&&(h.removeChild(r),l=l.parentInfo,l.templateInfo=s,l.noted=!0,o=!1);let p=s.hostProps;if(d5&&c)p&&(i.hostProps=Object.assign(i.hostProps||{},p),a2||(l.parentInfo.noted=!0));else{let g="{";for(let z in p){let M=[{mode:g,source:z,dependencies:[z],hostProp:!0}];Ai(this,i,l,"property","_host_"+z,M)}}return o}static _parseBindings(r,i){let l=[],o=0,h;for(;(h=v2.exec(r))!==null;){h.index>o&&l.push({literal:r.slice(o,h.index)});let s=h[1][0],c=!!h[2],d=h[3].trim(),p=!1,g="",z=-1;s=="{"&&(z=d.indexOf("::"))>0&&(g=d.substring(z+2),d=d.substring(0,z),p=!0);let M=Ti(d),m=[];if(M){let{args:v,methodName:u}=M;for(let y=0;y<v.length;y++){let x=v[y];x.literal||m.push(x)}let f=i.dynamicFns;(f&&f[u]||M.static)&&(m.push(u),M.dynamicFn=!0)}else m.push(d);l.push({source:d,mode:s,negate:c,customEvent:p,signature:M,dependencies:m,event:g}),o=v2.lastIndex}if(o&&o<r.length){let s=r.substring(o);s&&l.push({literal:s})}return l.length?l:null}static _evaluateBinding(r,i,l,o,h,s){let c;return i.signature?c=Yl(r,l,o,h,i.signature):l!=i.source?c=B0(r,i.source):s&&Wl(l)?c=B0(r,l):c=r.__data[l],i.negate&&(c=!c),c}}return a}),X1=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function z6(t){const e={};for(let a in t){const n=t[a];e[a]=typeof n=="function"?{type:n}:n}return e}const M6=Nt(t=>{const e=ju(t);function a(i){const l=Object.getPrototypeOf(i);return l.prototype instanceof r?l:null}function n(i){if(!i.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",i))){let l=null;if(i.hasOwnProperty(JSCompiler_renameProperty("properties",i))){const o=i.properties;o&&(l=z6(o))}i.__ownProperties=l}return i.__ownProperties}class r extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const l=this._properties;this.__observedAttributes=l?Object.keys(l).map(o=>this.prototype._addPropertyToAttributeMap(o)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const l=a(this);l&&l.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const l=n(this);l&&this.createProperties(l)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const l=a(this);this.__properties=Object.assign({},l&&l._properties,n(this))}return this.__properties}static typeForProperty(l){const o=this._properties[l];return o&&o.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const y6="3.5.1",g2=window.ShadyCSS&&window.ShadyCSS.cssBuild,w6=Nt(t=>{const e=M6(g6(t));function a(h){if(!h.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",h))){h.__propertyDefaults=null;let s=h._properties;for(let c in s){let d=s[c];"value"in d&&(h.__propertyDefaults=h.__propertyDefaults||{},h.__propertyDefaults[c]=d)}}return h.__propertyDefaults}function n(h){return h.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",h))||(h.__ownObservers=h.hasOwnProperty(JSCompiler_renameProperty("observers",h))?h.observers:null),h.__ownObservers}function r(h,s,c,d){c.computed&&(c.readOnly=!0),c.computed&&(h._hasReadOnlyEffect(s)?console.warn(`Cannot redefine computed property '${s}'.`):h._createComputedProperty(s,c.computed,d)),c.readOnly&&!h._hasReadOnlyEffect(s)?h._createReadOnlyProperty(s,!c.computed):c.readOnly===!1&&h._hasReadOnlyEffect(s)&&console.warn(`Cannot make readOnly property '${s}' non-readOnly.`),c.reflectToAttribute&&!h._hasReflectEffect(s)?h._createReflectedProperty(s):c.reflectToAttribute===!1&&h._hasReflectEffect(s)&&console.warn(`Cannot make reflected property '${s}' non-reflected.`),c.notify&&!h._hasNotifyEffect(s)?h._createNotifyingProperty(s):c.notify===!1&&h._hasNotifyEffect(s)&&console.warn(`Cannot make notify property '${s}' non-notify.`),c.observer&&h._createPropertyObserver(s,c.observer,d[c.observer]),h._addPropertyToAttributeMap(s)}function i(h,s,c,d){if(!g2){const p=s.content.querySelectorAll("style"),g=$u(s),z=M5(c),M=s.content.firstElementChild;for(let v=0;v<z.length;v++){let u=z[v];u.textContent=h._processStyleText(u.textContent,d),s.content.insertBefore(u,M)}let m=0;for(let v=0;v<g.length;v++){let u=g[v],f=p[m];f!==u?(u=u.cloneNode(!0),f.parentNode.insertBefore(u,f)):m++,u.textContent=h._processStyleText(u.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(s,c),u5&&g2&&r5){const p=s.content.querySelectorAll("style");if(p){let g="";Array.from(p).forEach(z=>{g+=z.textContent,z.parentNode.removeChild(z)}),h._styleSheet=new CSSStyleSheet,h._styleSheet.replaceSync(g)}}}function l(h){let s=null;if(h&&(!Hl||l5)&&(s=Fa.import(h,"template"),Hl&&!s))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${h}`);return s}class o extends e{static get polymerElementVersion(){return y6}static _finalizeClass(){e._finalizeClass.call(this);const s=n(this);s&&this.createObservers(s,this._properties),this._prepareTemplate()}static _prepareTemplate(){let s=this.template;s&&(typeof s=="string"?(console.error("template getter must return HTMLTemplateElement"),s=null):o5||(s=s.cloneNode(!0))),this.prototype._template=s}static createProperties(s){for(let c in s)r(this.prototype,c,s[c],s)}static createObservers(s,c){const d=this.prototype;for(let p=0;p<s.length;p++)d._createMethodObserver(s[p],c)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let s=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof s=="function"&&(s=s()),this._template=s!==void 0?s:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&l(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(s){this._template=s}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const s=this.importMeta;if(s)this._importPath=ph(s.url);else{const c=Fa.import(this.is);this._importPath=c&&c.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=i5,this.importPath=this.constructor.importPath;let s=a(this.constructor);if(s)for(let c in s){let d=s[c];if(this._canApplyPropertyDefault(c)){let p=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(c)?this._setPendingProperty(c,p,!0):this[c]=p}}}_canApplyPropertyDefault(s){return!this.hasOwnProperty(s)}static _processStyleText(s,c){return uh(s,c)}static _finalizeTemplate(s){const c=this.prototype._template;if(c&&!c.__polymerFinalized){c.__polymerFinalized=!0;const d=this.importPath,p=d?ga(d):"";i(this,c,s,p),this.prototype._bindTemplate(c)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(s){const c=X0(this);if(c.attachShadow)return s?(c.shadowRoot||(c.attachShadow({mode:"open",shadyUpgradeFragment:s}),c.shadowRoot.appendChild(s),this.constructor._styleSheet&&(c.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),s5&&window.ShadyDOM&&window.ShadyDOM.flushInitial(c.shadowRoot),c.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(s){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,s)}resolveUrl(s,c){return!c&&this.importPath&&(c=ga(this.importPath)),ga(s,c)}static _parseTemplateContent(s,c,d){return c.dynamicFns=c.dynamicFns||this._properties,e._parseTemplateContent.call(this,s,c,d)}static _addTemplatePropertyEffect(s,c,d){return h5&&!(c in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!s.nestedTemplate&&console.warn(`Property '${c}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,s,c,d)}}return o});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const z2=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});class qu{constructor(e,a){Ju(e,a);const n=a.reduce((r,i,l)=>r+Xu(i)+e[l+1],e[0]);this.value=n.toString()}toString(){return this.value}}function Xu(t){if(t instanceof qu)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}function _6(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof qu)return Xu(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}const Fr=function(e,...a){Ju(e,a);const n=document.createElement("template");let r=a.reduce((i,l,o)=>i+_6(l)+e[o+1],e[0]);return z2&&(r=z2.createHTML(r)),n.innerHTML=r,n},Ju=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ur=w6(HTMLElement);/**
 * @license
 * Copyright (c) 2017 Anton Korzunov
 * SPDX-License-Identifier: MIT
 */let Ge=new WeakMap,Sn=new WeakMap,bn={},Ni=0;const M2=t=>t&&t.nodeType===Node.ELEMENT_NODE,Oi=(...t)=>{console.error(`Error: ${t.join(" ")}. Skip setting aria-hidden.`)},x6=(t,e)=>M2(t)?e.map(a=>{if(!M2(a))return Oi(a,"is not a valid element"),null;let n=a;for(;n&&n!==t;){if(t.contains(n))return a;n=n.getRootNode().host}return Oi(a,"is not contained inside",t),null}).filter(a=>!!a):(Oi(t,"is not a valid element"),[]),S6=(t,e,a,n)=>{const r=x6(e,Array.isArray(t)?t:[t]);bn[a]||(bn[a]=new WeakMap);const i=bn[a],l=[],o=new Set,h=new Set(r),s=d=>{if(!d||o.has(d))return;o.add(d);const p=d.assignedSlot;p&&s(p),s(d.parentNode||d.host)};r.forEach(s);const c=d=>{if(!d||h.has(d))return;const p=d.shadowRoot;(p?[...d.children,...p.children]:[...d.children]).forEach(z=>{if(!["template","script","style"].includes(z.localName))if(o.has(z))c(z);else{const M=z.getAttribute(n),m=M!==null&&M!=="false",v=(Ge.get(z)||0)+1,u=(i.get(z)||0)+1;Ge.set(z,v),i.set(z,u),l.push(z),v===1&&m&&Sn.set(z,!0),u===1&&z.setAttribute(a,"true"),m||z.setAttribute(n,"true")}})};return c(e),o.clear(),Ni+=1,()=>{l.forEach(d=>{const p=Ge.get(d)-1,g=i.get(d)-1;Ge.set(d,p),i.set(d,g),p||(Sn.has(d)?Sn.delete(d):d.removeAttribute(n)),g||d.removeAttribute(a)}),Ni-=1,Ni||(Ge=new WeakMap,Ge=new WeakMap,Sn=new WeakMap,bn={})}},b6=(t,e=document.body,a="data-aria-hidden")=>{const n=Array.from(Array.isArray(t)?t:[t]);return e&&n.push(...Array.from(e.querySelectorAll("[aria-live]"))),S6(n,e,a,"aria-hidden")};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class E6{constructor(e,a){this.host=e,this.callback=typeof a=="function"?a:()=>e}showModal(){const e=this.callback();this.__showOthers=b6(e)}close(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let mh=!1;window.addEventListener("keydown",()=>{mh=!0},{capture:!0});window.addEventListener("mousedown",()=>{mh=!1},{capture:!0});function sm(){let t=document.activeElement||document.body;for(;t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}function C6(){return mh}function Zu(t){const e=t.style;if(e.visibility==="hidden"||e.display==="none")return!0;const a=window.getComputedStyle(t);return a.visibility==="hidden"||a.display==="none"}function k6(t,e){const a=Math.max(t.tabIndex,0),n=Math.max(e.tabIndex,0);return a===0||n===0?n>a:a>n}function P6(t,e){const a=[];for(;t.length>0&&e.length>0;)k6(t[0],e[0])?a.push(e.shift()):a.push(t.shift());return a.concat(t,e)}function Kl(t){const e=t.length;if(e<2)return t;const a=Math.ceil(e/2),n=Kl(t.slice(0,a)),r=Kl(t.slice(a));return P6(n,r)}function cm(t){return t.offsetParent===null&&t.clientWidth===0&&t.clientHeight===0?!0:Zu(t)}function A6(t){return t.matches('[tabindex="-1"]')?!1:t.matches("input, select, textarea, button, object")?t.matches(":not([disabled])"):t.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function T6(t){return t.getRootNode().activeElement===t}function N6(t){if(!A6(t))return-1;const e=t.getAttribute("tabindex")||0;return Number(e)}function tp(t,e){if(t.nodeType!==Node.ELEMENT_NODE||Zu(t))return!1;const a=t,n=N6(a);let r=n>0;n>=0&&e.push(a);let i=[];return a.localName==="slot"?i=a.assignedNodes({flatten:!0}):i=(a.shadowRoot||a).children,[...i].forEach(l=>{r=tp(l,e)||r}),r}function O6(t){const e=[];return tp(t,e)?Kl(e):e}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ri=[];class R6{constructor(e){this.host=e,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return O6(this.__trapNode)}get __focusedElementIndex(){const e=this.__focusableElements;return e.indexOf(e.filter(T6).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(e){if(this.__trapNode=e,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");Ri.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,Ri.pop()}__onKeyDown(e){if(this.__trapNode&&this===Array.from(Ri).pop()&&e.key==="Tab"){e.preventDefault();const a=e.shiftKey;this.__focusNextElement(a)}}__focusNextElement(e=!1){const a=this.__focusableElements,n=e?-1:1,r=this.__focusedElementIndex,i=(a.length+r+n)%a.length,l=a[i];l.focus(),l.localName==="input"&&l.select()}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ep=Nt(t=>class extends t{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(a=>{a.hostConnected&&a.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(a=>{a.hostDisconnected&&a.hostDisconnected()})}addController(a){this.__controllers.add(a),this.$!==void 0&&this.isConnected&&a.hostConnected&&a.hostConnected()}removeController(a){this.__controllers.delete(a)}}),L6=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Un=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function D6(){function t(){return!0}return ap(t)}function $6(){try{return I6()?!0:F6()?Un?!U6():!D6():!1}catch{return!1}}function I6(){return localStorage.getItem("vaadin.developmentmode.force")}function F6(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function U6(){return!!(Un&&Object.keys(Un).map(e=>Un[e]).filter(e=>e.productionMode).length>0)}function ap(t,e){if(typeof t!="function")return;const a=L6.exec(t.toString());if(a)try{t=new Function(a[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return t(e)}window.Vaadin=window.Vaadin||{};const y2=function(t,e){if(window.Vaadin.developmentMode)return ap(t,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=$6());function j6(){}const B6=function(){if(typeof y2=="function")return y2(j6)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let w2=0,np=0;const z1=[];let Gl=!1;function H6(){Gl=!1;const t=z1.length;for(let e=0;e<t;e++){const a=z1[e];if(a)try{a()}catch(n){setTimeout(()=>{throw n})}}z1.splice(0,t),np+=t}const um={after(t){return{run(e){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}}},run(t,e){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}},pm={run(t){return window.requestAnimationFrame(t)},cancel(t){window.cancelAnimationFrame(t)}},V6={run(t){return window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16)},cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},W6={run(t){Gl||(Gl=!0,queueMicrotask(()=>H6())),z1.push(t);const e=w2;return w2+=1,e},cancel(t){const e=t-np;if(e>=0){if(!z1[e])throw new Error(`invalid async handle: ${t}`);z1[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ba=new Set;class zr{static debounce(e,a,n){return e instanceof zr?e._cancelAsync():e=new zr,e.setConfig(a,n),e}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,a){this._asyncModule=e,this._callback=a,this._timer=this._asyncModule.run(()=>{this._timer=null,Ba.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Ba.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}function Y6(t){Ba.add(t)}function K6(){const t=!!Ba.size;return Ba.forEach(e=>{try{e.flush()}catch(a){setTimeout(()=>{throw a})}}),t}const vm=()=>{let t;do t=K6();while(t)};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lt=[];function Ql(t,e,a=t.getAttribute("dir")){e?t.setAttribute("dir",e):a!=null&&t.removeAttribute("dir")}function ql(){return document.documentElement.getAttribute("dir")}function G6(){const t=ql();Lt.forEach(e=>{Ql(e,t)})}const Q6=new MutationObserver(G6);Q6.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const q6=t=>class extends t{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:a=>a||"",toAttribute:a=>a===""?null:a}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),Ql(this,ql(),null))}attributeChangedCallback(a,n,r){if(super.attributeChangedCallback(a,n,r),a!=="dir")return;const i=ql(),l=r===i&&Lt.indexOf(this)===-1,o=!r&&n&&Lt.indexOf(this)===-1;l||o?(this.__subscribe(),Ql(this,i,r)):r!==i&&n===i&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=Lt.includes(this),this.__unsubscribe()}_valueToNodeAttribute(a,n,r){r==="dir"&&n===""&&!a.hasAttribute("dir")||super._valueToNodeAttribute(a,n,r)}_attributeToProperty(a,n,r){a==="dir"&&!n?this.dir="":super._attributeToProperty(a,n,r)}__subscribe(){Lt.includes(this)||Lt.push(this)}__unsubscribe(){Lt.includes(this)&&Lt.splice(Lt.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){B6()};let Li;const _2=new Set,jr=t=>class extends q6(t){static get version(){return"24.1.11"}static finalize(){super.finalize();const{is:a}=this;a&&!_2.has(a)&&(window.Vaadin.registrations.push(this),_2.add(a),window.Vaadin.developmentModeCallback&&(Li=zr.debounce(Li,V6,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Y6(Li)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Xl=class extends jr(hh(ep(Ur))){static get template(){return Fr`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          --vaadin-app-layout-transition: 200ms;
          transition: padding var(--vaadin-app-layout-transition);
          --vaadin-app-layout-touch-optimized: false;
          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
          padding-block: var(--vaadin-app-layout-navbar-offset-top) var(--vaadin-app-layout-navbar-offset-bottom);
          padding-inline-start: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([hidden]),
        [hidden] {
          display: none !important;
        }

        :host([no-anim]) {
          --vaadin-app-layout-transition: none !important;
        }

        :host([drawer-opened]) {
          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
        }

        :host([overlay]) {
          --vaadin-app-layout-drawer-offset-left: 0;
          --vaadin-app-layout-navbar-offset-left: 0;
        }

        :host(:not([no-scroll])) [content] {
          overflow: auto;
        }

        [content] {
          height: 100%;
        }

        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
          :host {
            --vaadin-app-layout-touch-optimized: true;
          }
        }

        [part='navbar'] {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          inset-inline: 0;
          transition: inset-inline-start var(--vaadin-app-layout-transition);
          padding-top: var(--safe-area-inset-top);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
          z-index: 1;
        }

        :host([primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          inset-inline-start: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([primary-section='drawer']) [part='drawer'] {
          top: 0;
        }

        [part='navbar'][bottom] {
          top: auto;
          bottom: 0;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        [part='drawer'] {
          overflow: auto;
          position: fixed;
          top: var(--vaadin-app-layout-navbar-offset-top, 0);
          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
          inset-inline: var(--vaadin-app-layout-navbar-offset-left, 0) auto;
          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: 16em;
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
          visibility: hidden;
          display: flex;
          flex-direction: column;
        }

        :host([drawer-opened]) [part='drawer'] {
          /* The drawer should be accessible by the tabbing navigation when it is opened. */
          visibility: visible;
          transform: translateX(0%);
          touch-action: manipulation;
        }

        [part='backdrop'] {
          background-color: #000;
          opacity: 0.3;
        }

        :host(:not([drawer-opened])) [part='backdrop'] {
          opacity: 0;
        }

        :host([overlay]) [part='backdrop'] {
          position: fixed;
          inset: 0;
          pointer-events: none;
          transition: opacity var(--vaadin-app-layout-transition);
          -webkit-tap-highlight-color: transparent;
        }

        :host([overlay]) [part='drawer'] {
          top: 0;
          bottom: 0;
        }

        :host([overlay]) [part='drawer'],
        :host([overlay]) [part='backdrop'] {
          z-index: 2;
        }

        :host([drawer-opened][overlay]) [part='backdrop'] {
          pointer-events: auto;
          touch-action: manipulation;
        }

        :host([dir='rtl']) [part='drawer'] {
          transform: translateX(100%);
        }

        :host([dir='rtl'][drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
        }

        :host([drawer-opened]:not([overlay])) {
          padding-inline-start: var(--vaadin-app-layout-drawer-offset-left);
        }

        @media (max-width: 800px), (max-height: 600px) {
          :host {
            --vaadin-app-layout-drawer-overlay: true;
          }

          [part='drawer'] {
            width: 20em;
          }
        }

        /* If a vaadin-scroller is used in the drawer, allow it to take all remaining space and contain scrolling */
        [part='drawer'] ::slotted(vaadin-scroller) {
          flex: 1;
          overscroll-behavior: contain;
        }
      </style>
      <div part="navbar" id="navbarTop">
        <slot name="navbar"></slot>
      </div>
      <div part="backdrop" on-click="_onBackdropClick" on-touchend="_onBackdropTouchend"></div>
      <div part="drawer" id="drawer">
        <slot name="drawer" id="drawerSlot"></slot>
      </div>
      <div content>
        <slot></slot>
      </div>
      <div part="navbar" id="navbarBottom" bottom hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden><slot id="touchSlot" name="navbar touch-optimized"></slot></div>
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__onDrawerKeyDown=this.__onDrawerKeyDown.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__ariaModalController=new E6(this,()=>[...this.querySelectorAll('vaadin-drawer-toggle, [slot="drawer"]')]),this.__focusTrapController=new R6(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),Zv(this,this._afterFirstRender),this._updateTouchOptimizedMode();const e=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new ma(e,()=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new ma(this.$.touchSlot,()=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new ma(this.$.drawerSlot,()=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),this._navbarSizeObserver=new ResizeObserver(()=>{requestAnimationFrame(()=>{this.__isDrawerAnimating?this.__updateOffsetSizePending=!0:this._updateOffsetSize()})}),this._navbarSizeObserver.observe(this.$.navbarTop),this._navbarSizeObserver.observe(this.$.navbarBottom),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener),window.addEventListener("keydown",this.__onDrawerKeyDown)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded(),this.$.drawer.addEventListener("transitionstart",()=>{this.__isDrawerAnimating=!0}),this.$.drawer.addEventListener("transitionend",()=>{this.__updateOffsetSizePending&&(this.__updateOffsetSizePending=!1,this._updateOffsetSize()),requestAnimationFrame(()=>{this.__isDrawerAnimating=!1})})}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener),window.removeEventListener("keydown",this.__onDrawerKeyDown)}__primarySectionChanged(e){["navbar","drawer"].includes(e)||this.set("primarySection","navbar")}__drawerOpenedChanged(e,a){this.overlay&&(e?this.__trapFocusInDrawer():a&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(e){e.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const e=this.querySelector("vaadin-drawer-toggle");e&&e.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const e=this.querySelectorAll("[slot=drawer]").length,a=this.$.drawer;e===0?a.setAttribute("hidden",""):a.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const a=this.$.navbarTop.getBoundingClientRect(),r=this.$.navbarBottom.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${a.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${r.height}px`);const l=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${l.width}px`)}_updateOverlayMode(){const e=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&e&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(e),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const e=this.$.drawer;this.overlay?(e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label",this.i18n.drawer)):(e.removeAttribute("role"),e.removeAttribute("aria-modal"),e.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(e=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){e();return}this.$.drawer.addEventListener("transitionend",e,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__ariaModalController.close(),this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const e=this.querySelector("vaadin-drawer-toggle");e&&(e.focus(),e.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(e){e.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(e,a){a&&window.removeEventListener(a,this.__closeOverlayDrawerListener),e&&window.addEventListener(e,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(e){e.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(e){return(getComputedStyle(this).getPropertyValue(e)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const e=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")==="true",a=this.querySelectorAll('[slot*="navbar"]');a.length>0&&Array.from(a).forEach(n=>{n.getAttribute("slot").indexOf("touch-optimized")>-1&&(n.__touchOptimized=!0),e&&n.__touchOptimized?n.setAttribute("slot","navbar-bottom"):n.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),this.$.navbarBottom.querySelector("[name=navbar-bottom]").assignedNodes().length===0?this.$.navbarBottom.setAttribute("hidden",""):this.$.navbarBottom.removeAttribute("hidden"),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),t5(this,()=>{this.removeAttribute("no-anim")})}};customElements.define(Xl.is,Xl);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X6=new Set(["children","localName","ref","style","className"]),x2=new WeakMap,J6=(t,e,a,n,r)=>{const i=r==null?void 0:r[e];i===void 0||a===n?a==null&&e in HTMLElement.prototype?t.removeAttribute(e):t[e]=a:((l,o,h)=>{let s=x2.get(l);s===void 0&&x2.set(l,s=new Map);let c=s.get(o);h!==void 0?c===void 0?(s.set(o,c={handleEvent:h}),l.addEventListener(o,c)):c.handleEvent=h:c!==void 0&&(s.delete(o),l.removeEventListener(o,c))})(t,i,a)};function Z6(t=window.React,e,a,n,r){let i,l,o;if(e===void 0){const g=t;({tagName:l,elementClass:o,events:n,displayName:r}=g),i=g.react}else i=t,o=a,l=e;const h=i.Component,s=i.createElement,c=new Set(Object.keys(n??{}));class d extends h{constructor(){super(...arguments),this.o=null}t(z){if(this.o!==null)for(const M in this.i)J6(this.o,M,this.props[M],z?z[M]:void 0,n)}componentDidMount(){this.t()}componentDidUpdate(z){this.t(z)}render(){const{_$Gl:z,...M}=this.props;this.h!==z&&(this.u=v=>{z!==null&&((u,f)=>{typeof u=="function"?u(f):u.current=f})(z,v),this.o=v,this.h=z}),this.i={};const m={ref:this.u};for(const[v,u]of Object.entries(M))X6.has(v)?m[v==="className"?"class":v]=u:c.has(v)||v in o.prototype?this.i[v]=u:m[v]=u;return s(l,m)}}d.displayName=r??o.name;const p=i.forwardRef((g,z)=>s(d,{...g,_$Gl:z},g==null?void 0:g.children));return p.displayName=d.displayName,p}const Ha=window;Ha.Vaadin=Ha.Vaadin||{};Ha.Vaadin.registrations=Ha.Vaadin.registrations||[];Ha.Vaadin.registrations.push({is:"@hilla/react-components",version:"2.1.11"});function gh(t){const{elementClass:e}=t;return Z6("_properties"in e?{...t,elementClass:{name:e.name,prototype:e._properties}}:t)}const tf={onPrimarySectionChanged:"primary-section-changed",onDrawerOpenedChanged:"drawer-opened-changed",onOverlayChanged:"overlay-changed"},ef=gh({elementClass:Xl,events:tf,react:w1,tagName:"vaadin-app-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const af=Z`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-dropdown: '\\ea18';
    --lumo-icons-edit: '\\ea19';
    --lumo-icons-error: '\\ea1a';
    --lumo-icons-eye: '\\ea1b';
    --lumo-icons-eye-disabled: '\\ea1c';
    --lumo-icons-menu: '\\ea1d';
    --lumo-icons-minus: '\\ea1e';
    --lumo-icons-ordered-list: '\\ea1f';
    --lumo-icons-phone: '\\ea20';
    --lumo-icons-photo: '\\ea21';
    --lumo-icons-play: '\\ea22';
    --lumo-icons-plus: '\\ea23';
    --lumo-icons-redo: '\\ea24';
    --lumo-icons-reload: '\\ea25';
    --lumo-icons-search: '\\ea26';
    --lumo-icons-undo: '\\ea27';
    --lumo-icons-unordered-list: '\\ea28';
    --lumo-icons-upload: '\\ea29';
    --lumo-icons-user: '\\ea2a';
  }
`;Tt("font-icons",af);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nf=Z`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;Tt("sizing-props",nf);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rf=Z`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;Z`
  html {
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
  }
`;Tt("style-props",rf);const rp=Z`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex-shrink: 0;
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;wt("vaadin-button",rp,{moduleId:"lumo-button"});const lf=Z`
  :host {
    width: var(--lumo-size-l);
    height: var(--lumo-size-l);
    min-width: auto;
    margin: 0 var(--lumo-space-s);
    padding: 0;
    background: transparent;
  }

  [part='icon'],
  [part='icon']::after,
  [part='icon']::before {
    position: inherit;
    height: auto;
    width: auto;
    background: transparent;
    top: auto;
  }

  [part='icon']::before {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    content: var(--lumo-icons-menu);
  }

  :host([slot~='navbar']) {
    color: var(--lumo-secondary-text-color);
  }
`;wt("vaadin-drawer-toggle",[rp,lf],{moduleId:"lumo-drawer-toggle"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function zm(t){const e=[];for(;t;){if(t.nodeType===Node.DOCUMENT_NODE){e.push(t);break}if(t.nodeType===Node.DOCUMENT_FRAGMENT_NODE){e.push(t),t=t.host;continue}if(t.assignedSlot){t=t.assignedSlot;continue}t=t.parentNode}return e}function of(t,e){return e?e.closest(t)||of(t,e.getRootNode().host):null}function ip(t){return t?new Set(t.split(" ")):new Set}function lp(t){return t?[...t].join(" "):""}function Mm(t,e,a){const n=ip(t.getAttribute(e));n.add(a),t.setAttribute(e,lp(n))}function ym(t,e,a){const n=ip(t.getAttribute(e));if(n.delete(a),n.size===0){t.removeAttribute(e);return}t.setAttribute(e,lp(n))}function op(t){return t.nodeType===Node.TEXT_NODE&&t.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let hf=0;function sf(){return hf++}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class cf extends EventTarget{static generateId(e,a){return`${a||"default"}-${e.localName}-${sf()}`}constructor(e,a,n,r={}){super();const{initializer:i,multiple:l,observe:o,useUniqueId:h}=r;this.host=e,this.slotName=a,this.tagName=n,this.observe=typeof o=="boolean"?o:!0,this.multiple=typeof l=="boolean"?l:!1,this.slotInitializer=i,l&&(this.nodes=[]),h&&(this.defaultId=this.constructor.generateId(e,a))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let e=this.getSlotChild();e?(this.node=e,this.initAddedNode(e)):(e=this.attachDefaultNode(),this.initNode(e))}initMultiple(){const e=this.getSlotChildren();if(e.length===0){const a=this.attachDefaultNode();this.nodes=[a],this.initNode(a)}else this.nodes=e,e.forEach(a=>{this.initAddedNode(a)})}attachDefaultNode(){const{host:e,slotName:a,tagName:n}=this;let r=this.defaultNode;return!r&&n&&(r=document.createElement(n),r instanceof Element&&(a!==""&&r.setAttribute("slot",a),this.node=r,this.defaultNode=r)),r&&e.appendChild(r),r}getSlotChildren(){const{slotName:e}=this;return Array.from(this.host.childNodes).filter(a=>a.nodeType===Node.ELEMENT_NODE&&a.slot===e||a.nodeType===Node.TEXT_NODE&&a.textContent.trim()&&e==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(e){const{slotInitializer:a}=this;a&&a(e,this.host)}initCustomNode(e){}teardownNode(e){}initAddedNode(e){e!==this.defaultNode&&(this.initCustomNode(e),this.initNode(e))}observeSlot(){const{slotName:e}=this,a=e===""?"slot:not([name])":`slot[name=${e}]`,n=this.host.shadowRoot.querySelector(a);this.__slotObserver=new ma(n,r=>{const i=this.multiple?this.nodes:[this.node],l=r.addedNodes.filter(o=>!op(o)&&!i.includes(o));r.removedNodes.length&&r.removedNodes.forEach(o=>{this.teardownNode(o)}),l&&l.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...i,...l].filter(o=>o!==this.defaultNode),l.forEach(o=>{this.initAddedNode(o)})):(this.node&&this.node.remove(),this.node=l[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class df extends cf{constructor(e){super(e,"tooltip"),this.setTarget(e)}initCustomNode(e){e.target=this.target,this.context!==void 0&&(e.context=this.context),this.manual!==void 0&&(e.manual=this.manual),this.opened!==void 0&&(e.opened=this.opened),this.position!==void 0&&(e._position=this.position),this.shouldShow!==void 0&&(e.shouldShow=this.shouldShow)}setContext(e){this.context=e;const a=this.node;a&&(a.context=e)}setManual(e){this.manual=e;const a=this.node;a&&(a.manual=e)}setOpened(e){this.opened=e;const a=this.node;a&&(a.opened=e)}setPosition(e){this.position=e;const a=this.node;a&&(a._position=e)}setShouldShow(e){this.shouldShow=e;const a=this.node;a&&(a.shouldShow=e)}setTarget(e){this.target=e;const a=this.node;a&&(a.target=e)}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const uf=Z`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Aligns the button with form fields when placed on the same line.
  Note, to make it work, the form fields should have the same "::before" pseudo-element. */
  .vaadin-button-container::before {
    content: '\\2003';
    display: inline-block;
    width: 0;
    max-height: 100%;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='prefix'],
  [part='suffix'] {
    flex: none;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (forced-colors: active) {
    :host {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([focused]) {
      outline-width: 2px;
    }

    :host([disabled]) {
      outline-color: GrayText;
    }
  }
`,pf=t=>t`
  <div class="vaadin-button-container">
    <span part="prefix" aria-hidden="true">
      <slot name="prefix"></slot>
    </span>
    <span part="label">
      <slot></slot>
    </span>
    <span part="suffix" aria-hidden="true">
      <slot name="suffix"></slot>
    </span>
  </div>
  <slot name="tooltip"></slot>
`;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const vf=!1,ff=t=>t,zh=typeof document.head.style.touchAction=="string",Jl="__polymerGestures",Di="__polymerGesturesHandled",Zl="__polymerGesturesTouchAction",S2=25,b2=5,mf=2,gf=["mousedown","mousemove","mouseup","click"],zf=[0,1,4,2],Mf=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Mh(t){return gf.indexOf(t)>-1}let hp=!1;(function(){try{const t=Object.defineProperty({},"passive",{get(){hp=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}})();function yf(t){if(!(Mh(t)||t==="touchend")&&zh&&hp&&vf)return{passive:!0}}const wf=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),_f={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Oe(t){const e=t.type;if(!Mh(e))return!1;if(e==="mousemove"){let n=t.buttons===void 0?1:t.buttons;return t instanceof window.MouseEvent&&!Mf&&(n=zf[t.which]||0),!!(n&1)}return(t.button===void 0?0:t.button)===0}function xf(t){if(t.type==="click"){if(t.detail===0)return!0;const e=ve(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const a=e.getBoundingClientRect(),n=t.pageX,r=t.pageY;return!(n>=a.left&&n<=a.right&&r>=a.top&&r<=a.bottom)}return!1}const $t={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Sf(t){let e="auto";const a=cp(t);for(let n=0,r;n<a.length;n++)if(r=a[n],r[Zl]){e=r[Zl];break}return e}function sp(t,e,a){t.movefn=e,t.upfn=a,document.addEventListener("mousemove",e),document.addEventListener("mouseup",a)}function M1(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}const cp=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],yh={},Pe=[];function bf(t,e){let a=document.elementFromPoint(t,e),n=a;for(;n&&n.shadowRoot&&!window.ShadyDOM;){const r=n;if(n=n.shadowRoot.elementFromPoint(t,e),r===n)break;n&&(a=n)}return a}function ve(t){const e=cp(t);return e.length>0?e[0]:t.target}function Ef(t){const e=t.type,n=t.currentTarget[Jl];if(!n)return;const r=n[e];if(!r)return;if(!t[Di]&&(t[Di]={},e.startsWith("touch"))){const l=t.changedTouches[0];if(e==="touchstart"&&t.touches.length===1&&($t.touch.id=l.identifier),$t.touch.id!==l.identifier)return;zh||(e==="touchstart"||e==="touchmove")&&Cf(t)}const i=t[Di];if(!i.skip){for(let l=0,o;l<Pe.length;l++)o=Pe[l],r[o.name]&&!i[o.name]&&o.flow&&o.flow.start.indexOf(t.type)>-1&&o.reset&&o.reset();for(let l=0,o;l<Pe.length;l++)o=Pe[l],r[o.name]&&!i[o.name]&&(i[o.name]=!0,o[e](t))}}function Cf(t){const e=t.changedTouches[0],a=t.type;if(a==="touchstart")$t.touch.x=e.clientX,$t.touch.y=e.clientY,$t.touch.scrollDecided=!1;else if(a==="touchmove"){if($t.touch.scrollDecided)return;$t.touch.scrollDecided=!0;const n=Sf(t);let r=!1;const i=Math.abs($t.touch.x-e.clientX),l=Math.abs($t.touch.y-e.clientY);t.cancelable&&(n==="none"?r=!0:n==="pan-x"?r=l>i:n==="pan-y"&&(r=i>l)),r?t.preventDefault():Mr("track")}}function E2(t,e,a){return yh[e]?(kf(t,e,a),!0):!1}function kf(t,e,a){const n=yh[e],r=n.deps,i=n.name;let l=t[Jl];l||(t[Jl]=l={});for(let o=0,h,s;o<r.length;o++)h=r[o],!(wf&&Mh(h)&&h!=="click")&&(s=l[h],s||(l[h]=s={_count:0}),s._count===0&&t.addEventListener(h,Ef,yf(h)),s[i]=(s[i]||0)+1,s._count=(s._count||0)+1);t.addEventListener(e,a),n.touchAction&&Af(t,n.touchAction)}function wh(t){Pe.push(t),t.emits.forEach(e=>{yh[e]=t})}function Pf(t){for(let e=0,a;e<Pe.length;e++){a=Pe[e];for(let n=0,r;n<a.emits.length;n++)if(r=a.emits[n],r===t)return a}return null}function Af(t,e){zh&&t instanceof HTMLElement&&W6.run(()=>{t.style.touchAction=e}),t[Zl]=e}function _h(t,e,a){const n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=a,ff(t).dispatchEvent(n),n.defaultPrevented){const r=a.preventer||a.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function Mr(t){const e=Pf(t);e.info&&(e.info.prevent=!0)}wh({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){M1(this.info)},mousedown(t){if(!Oe(t))return;const e=ve(t),a=this,n=i=>{Oe(i)||(J1("up",e,i),M1(a.info))},r=i=>{Oe(i)&&J1("up",e,i),M1(a.info)};sp(this.info,n,r),J1("down",e,t)},touchstart(t){J1("down",ve(t),t.changedTouches[0],t)},touchend(t){J1("up",ve(t),t.changedTouches[0],t)}});function J1(t,e,a,n){e&&_h(e,t,{x:a.clientX,y:a.clientY,sourceEvent:a,preventer:n,prevent(r){return Mr(r)}})}wh({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(t){this.moves.length>mf&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,M1(this.info)},mousedown(t){if(!Oe(t))return;const e=ve(t),a=this,n=i=>{const l=i.clientX,o=i.clientY;C2(a.info,l,o)&&(a.info.state=a.info.started?i.type==="mouseup"?"end":"track":"start",a.info.state==="start"&&Mr("tap"),a.info.addMove({x:l,y:o}),Oe(i)||(a.info.state="end",M1(a.info)),e&&$i(a.info,e,i),a.info.started=!0)},r=i=>{a.info.started&&n(i),M1(a.info)};sp(this.info,n,r),this.info.x=t.clientX,this.info.y=t.clientY},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove(t){const e=ve(t),a=t.changedTouches[0],n=a.clientX,r=a.clientY;C2(this.info,n,r)&&(this.info.state==="start"&&Mr("tap"),this.info.addMove({x:n,y:r}),$i(this.info,e,a),this.info.state="track",this.info.started=!0)},touchend(t){const e=ve(t),a=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:a.clientX,y:a.clientY}),$i(this.info,e,a))}});function C2(t,e,a){if(t.prevent)return!1;if(t.started)return!0;const n=Math.abs(t.x-e),r=Math.abs(t.y-a);return n>=b2||r>=b2}function $i(t,e,a){if(!e)return;const n=t.moves[t.moves.length-2],r=t.moves[t.moves.length-1],i=r.x-t.x,l=r.y-t.y;let o,h=0;n&&(o=r.x-n.x,h=r.y-n.y),_h(e,"track",{state:t.state,x:a.clientX,y:a.clientY,dx:i,dy:l,ddx:o,ddy:h,sourceEvent:a,hover(){return bf(a.clientX,a.clientY)}})}wh({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(t){Oe(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click(t){Oe(t)&&k2(this.info,t)},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend(t){k2(this.info,t.changedTouches[0],t)}});function k2(t,e,a){const n=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y),i=ve(a||e);!i||_f[i.localName]&&i.hasAttribute("disabled")||(isNaN(n)||isNaN(r)||n<=S2&&r<=S2||xf(e))&&(t.prevent||_h(i,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:a}))}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dp=Nt(t=>class extends t{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(a){this._setAriaDisabled(a)}_setAriaDisabled(a){a?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tf=Nt(t=>class extends t{ready(){super.ready(),this.addEventListener("keydown",a=>{this._onKeyDown(a)}),this.addEventListener("keyup",a=>{this._onKeyUp(a)})}_onKeyDown(a){switch(a.key){case"Enter":this._onEnter(a);break;case"Escape":this._onEscape(a);break}}_onKeyUp(a){}_onEnter(a){}_onEscape(a){}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nf=t=>class extends dp(Tf(t)){get _activeKeys(){return[" "]}ready(){super.ready(),E2(this,"down",a=>{this._shouldSetActive(a)&&this._setActive(!0)}),E2(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(a){return!this.disabled}_onKeyDown(a){super._onKeyDown(a),this._shouldSetActive(a)&&this._activeKeys.includes(a.key)&&(this._setActive(!0),document.addEventListener("keyup",n=>{this._activeKeys.includes(n.key)&&this._setActive(!1)},{once:!0}))}_setActive(a){this.toggleAttribute("active",a)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Of=Nt(t=>class extends t{get _keyboardActive(){return C6()}ready(){this.addEventListener("focusin",a=>{this._shouldSetFocus(a)&&this._setFocused(!0)}),this.addEventListener("focusout",a=>{this._shouldRemoveFocus(a)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(a){this.toggleAttribute("focused",a),this.toggleAttribute("focus-ring",a&&this._keyboardActive)}_shouldSetFocus(a){return!0}_shouldRemoveFocus(a){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rf=t=>class extends dp(t){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(a,n){super._disabledChanged(a,n),a?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):n&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(a){this.disabled&&a!==-1&&(this._lastTabIndex=a,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lf=t=>class extends Nf(Rf(Of(t))){static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(a){super._onKeyDown(a),!(a.altKey||a.shiftKey||a.ctrlKey||a.metaKey)&&this._activeKeys.includes(a.key)&&(a.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */wt("vaadin-button",uf,{moduleId:"vaadin-button-styles"});class to extends Lf(jr(hh(ep(Ur)))){static get is(){return"vaadin-button"}static get template(){return pf(Fr)}ready(){super.ready(),this._tooltipController=new df(this),this.addController(this._tooltipController)}}customElements.define(to.is,to);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */wt("vaadin-drawer-toggle",Z`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: default;
      position: relative;
      outline: none;
      height: 24px;
      width: 24px;
      padding: 4px;
    }

    [part='icon'],
    [part='icon']::after,
    [part='icon']::before {
      position: absolute;
      top: 8px;
      height: 3px;
      width: 24px;
      background-color: #000;
    }

    [part='icon']::after,
    [part='icon']::before {
      content: '';
    }

    [part='icon']::after {
      top: 6px;
    }

    [part='icon']::before {
      top: 12px;
    }
  `,{moduleId:"vaadin-drawer-toggle-styles"});let eo=class extends to{static get template(){return Fr`
      <slot id="slot">
        <div part="icon"></div>
      </slot>
      <div part="icon" hidden$="[[!_showFallbackIcon]]"></div>
      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-drawer-toggle"}static get properties(){return{ariaLabel:{type:String,value:"Toggle navigation panel",reflectToAttribute:!0},_showFallbackIcon:{type:Boolean,value:!1}}}constructor(){super(),this.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}ready(){super.ready(),this._observer=new ma(this,()=>{this._toggleFallbackIcon()})}_toggleFallbackIcon(){const e=this.$.slot.assignedNodes();this._showFallbackIcon=e.length>0&&e.every(a=>op(a))}};customElements.define(eo.is,eo);const Df={},$f=gh({elementClass:eo,events:Df,react:w1,tagName:"vaadin-drawer-toggle"});wt("vaadin-progress-bar",Z`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,{moduleId:"lumo-progress-bar"});const up=document.createElement("template");up.innerHTML=`
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
`;document.head.appendChild(up.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const If=Z`
  :host {
    display: block;
    width: 100%; /* prevent collapsing inside non-stretching column flex */
    height: 8px;
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='bar'] {
    height: 100%;
  }

  [part='value'] {
    height: 100%;
    transform-origin: 0 50%;
    transform: scaleX(var(--vaadin-progress-value));
  }

  :host([dir='rtl']) [part='value'] {
    transform-origin: 100% 50%;
  }

  @media (forced-colors: active) {
    [part='bar'] {
      outline: 1px solid;
    }

    [part='value'] {
      background-color: AccentColor !important;
      forced-color-adjust: none;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ff=t=>class extends t{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(a,n,r){const i=this._normalizeValue(a,n,r);this.style.setProperty("--vaadin-progress-value",i)}_valueChanged(a){this.setAttribute("aria-valuenow",a)}_minChanged(a){this.setAttribute("aria-valuemin",a)}_maxChanged(a){this.setAttribute("aria-valuemax",a)}_normalizeValue(a,n,r){let i;return!a&&a!==0?i=0:n>=r?i=1:(i=(a-n)/(r-n),i=Math.min(Math.max(i,0),1)),i}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */wt("vaadin-progress-bar",If,{moduleId:"vaadin-progress-bar-styles"});let ao=class extends jr(hh(Ff(Ur))){static get is(){return"vaadin-progress-bar"}static get template(){return Fr`
      <div part="bar">
        <div part="value"></div>
      </div>
    `}};customElements.define(ao.is,ao);const Uf={},jf=gh({elementClass:ao,events:Uf,react:w1,tagName:"vaadin-progress-bar"});function Bf(){return f0.jsx(jf,{indeterminate:!0,className:"m-0"})}/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Y(){return Y=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},Y.apply(this,arguments)}var m0;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(m0||(m0={}));const P2="popstate";function Hf(t){t===void 0&&(t={});function e(n,r){let{pathname:i,search:l,hash:o}=n.location;return Va("",{pathname:i,search:l,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function a(n,r){return typeof r=="string"?r:Gt(r)}return Wf(e,a,null,t)}function V(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function T1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Vf(){return Math.random().toString(36).substr(2,8)}function A2(t,e){return{usr:t.state,key:t.key,idx:e}}function Va(t,e,a,n){return a===void 0&&(a=null),Y({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?qt(e):e,{state:a,key:e&&e.key||n||Vf()})}function Gt(t){let{pathname:e="/",search:a="",hash:n=""}=t;return a&&a!=="?"&&(e+=a.charAt(0)==="?"?a:"?"+a),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function qt(t){let e={};if(t){let a=t.indexOf("#");a>=0&&(e.hash=t.substr(a),t=t.substr(0,a));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function Wf(t,e,a,n){n===void 0&&(n={});let{window:r=document.defaultView,v5Compat:i=!1}=n,l=r.history,o=m0.Pop,h=null,s=c();s==null&&(s=0,l.replaceState(Y({},l.state,{idx:s}),""));function c(){return(l.state||{idx:null}).idx}function d(){o=m0.Pop;let m=c(),v=m==null?null:m-s;s=m,h&&h({action:o,location:M.location,delta:v})}function p(m,v){o=m0.Push;let u=Va(M.location,m,v);a&&a(u,m),s=c()+1;let f=A2(u,s),y=M.createHref(u);try{l.pushState(f,"",y)}catch{r.location.assign(y)}i&&h&&h({action:o,location:M.location,delta:1})}function g(m,v){o=m0.Replace;let u=Va(M.location,m,v);a&&a(u,m),s=c();let f=A2(u,s),y=M.createHref(u);l.replaceState(f,"",y),i&&h&&h({action:o,location:M.location,delta:0})}function z(m){let v=r.location.origin!=="null"?r.location.origin:r.location.href,u=typeof m=="string"?m:Gt(m);return V(v,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,v)}let M={get action(){return o},get location(){return t(r,l)},listen(m){if(h)throw new Error("A history only accepts one active listener");return r.addEventListener(P2,d),h=m,()=>{r.removeEventListener(P2,d),h=null}},createHref(m){return e(r,m)},createURL:z,encodeLocation(m){let v=z(m);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:g,go(m){return l.go(m)}};return M}var M0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(M0||(M0={}));const Yf=new Set(["lazy","caseSensitive","path","id","index","children"]);function Kf(t){return t.index===!0}function pp(t,e,a,n){return a===void 0&&(a=[]),n===void 0&&(n={}),t.map((r,i)=>{let l=[...a,i],o=typeof r.id=="string"?r.id:l.join("-");if(V(r.index!==!0||!r.children,"Cannot specify children on an index route"),V(!n[o],'Found a route id collision on id "'+o+`".  Route id's must be globally unique within Data Router usages`),Kf(r)){let h=Y({},r,{hasErrorBoundary:e(r),id:o});return n[o]=h,h}else{let h=Y({},r,{id:o,hasErrorBoundary:e(r),children:void 0});return n[o]=h,r.children&&(h.children=pp(r.children,e,l,n)),h}})}function s1(t,e,a){a===void 0&&(a="/");let n=typeof e=="string"?qt(e):e,r=Za(n.pathname||"/",a);if(r==null)return null;let i=vp(t);Gf(i);let l=null;for(let o=0;l==null&&o<i.length;++o)l=n8(i[o],l8(r));return l}function vp(t,e,a,n){e===void 0&&(e=[]),a===void 0&&(a=[]),n===void 0&&(n="");let r=(i,l,o)=>{let h={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};h.relativePath.startsWith("/")&&(V(h.relativePath.startsWith(n),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(n.length));let s=Ht([n,h.relativePath]),c=a.concat(h);i.children&&i.children.length>0&&(V(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),vp(i.children,e,c,s)),!(i.path==null&&!i.index)&&e.push({path:s,score:e8(s,i.index),routesMeta:c})};return t.forEach((i,l)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))r(i,l);else for(let h of fp(i.path))r(i,l,h)}),e}function fp(t){let e=t.split("/");if(e.length===0)return[];let[a,...n]=e,r=a.endsWith("?"),i=a.replace(/\?$/,"");if(n.length===0)return r?[i,""]:[i];let l=fp(n.join("/")),o=[];return o.push(...l.map(h=>h===""?i:[i,h].join("/"))),r&&o.push(...l),o.map(h=>t.startsWith("/")&&h===""?"/":h)}function Gf(t){t.sort((e,a)=>e.score!==a.score?a.score-e.score:a8(e.routesMeta.map(n=>n.childrenIndex),a.routesMeta.map(n=>n.childrenIndex)))}const Qf=/^:\w+$/,qf=3,Xf=2,Jf=1,Zf=10,t8=-2,T2=t=>t==="*";function e8(t,e){let a=t.split("/"),n=a.length;return a.some(T2)&&(n+=t8),e&&(n+=Xf),a.filter(r=>!T2(r)).reduce((r,i)=>r+(Qf.test(i)?qf:i===""?Jf:Zf),n)}function a8(t,e){return t.length===e.length&&t.slice(0,-1).every((n,r)=>n===e[r])?t[t.length-1]-e[e.length-1]:0}function n8(t,e){let{routesMeta:a}=t,n={},r="/",i=[];for(let l=0;l<a.length;++l){let o=a[l],h=l===a.length-1,s=r==="/"?e:e.slice(r.length)||"/",c=r8({path:o.relativePath,caseSensitive:o.caseSensitive,end:h},s);if(!c)return null;Object.assign(n,c.params);let d=o.route;i.push({params:n,pathname:Ht([r,c.pathname]),pathnameBase:c8(Ht([r,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(r=Ht([r,c.pathnameBase]))}return i}function r8(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[a,n]=i8(t.path,t.caseSensitive,t.end),r=e.match(a);if(!r)return null;let i=r[0],l=i.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:n.reduce((s,c,d)=>{if(c==="*"){let p=o[d]||"";l=i.slice(0,i.length-p.length).replace(/(.)\/+$/,"$1")}return s[c]=o8(o[d]||"",c),s},{}),pathname:i,pathnameBase:l,pattern:t}}function i8(t,e,a){e===void 0&&(e=!1),a===void 0&&(a=!0),T1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let n=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,o)=>(n.push(o),"/([^\\/]+)"));return t.endsWith("*")?(n.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),n]}function l8(t){try{return decodeURI(t)}catch(e){return T1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function o8(t,e){try{return decodeURIComponent(t)}catch(a){return T1(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+a+").")),t}}function Za(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let a=e.endsWith("/")?e.length-1:e.length,n=t.charAt(a);return n&&n!=="/"?null:t.slice(a)||"/"}function h8(t,e){e===void 0&&(e="/");let{pathname:a,search:n="",hash:r=""}=typeof t=="string"?qt(t):t;return{pathname:a?a.startsWith("/")?a:s8(a,e):e,search:d8(n),hash:u8(r)}}function s8(t,e){let a=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?a.length>1&&a.pop():r!=="."&&a.push(r)}),a.length>1?a.join("/"):"/"}function Ii(t,e,a,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Br(t){return t.filter((e,a)=>a===0||e.route.path&&e.route.path.length>0)}function xh(t,e,a,n){n===void 0&&(n=!1);let r;typeof t=="string"?r=qt(t):(r=Y({},t),V(!r.pathname||!r.pathname.includes("?"),Ii("?","pathname","search",r)),V(!r.pathname||!r.pathname.includes("#"),Ii("#","pathname","hash",r)),V(!r.search||!r.search.includes("#"),Ii("#","search","hash",r)));let i=t===""||r.pathname==="",l=i?"/":r.pathname,o;if(n||l==null)o=a;else{let d=e.length-1;if(l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),d-=1;r.pathname=p.join("/")}o=d>=0?e[d]:"/"}let h=h8(r,o),s=l&&l!=="/"&&l.endsWith("/"),c=(i||l===".")&&a.endsWith("/");return!h.pathname.endsWith("/")&&(s||c)&&(h.pathname+="/"),h}const Ht=t=>t.join("/").replace(/\/\/+/g,"/"),c8=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),d8=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,u8=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Sh{constructor(e,a,n,r){r===void 0&&(r=!1),this.status=e,this.statusText=a||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function mp(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const gp=["post","put","patch","delete"],p8=new Set(gp),v8=["get",...gp],f8=new Set(v8),m8=new Set([301,302,303,307,308]),g8=new Set([307,308]),Fi={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},z8={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},N2={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},zp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",M8=!Mp,y8=t=>!!t.hasErrorBoundary;function w8(t){V(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let e=t.detectErrorBoundary||y8,a={},n=pp(t.routes,e,void 0,a),r,i=Y({v7_normalizeFormMethod:!1},t.future),l=null,o=new Set,h=null,s=null,c=null,d=t.hydrationData!=null,p=s1(n,t.history.location,t.basename),g=null;if(p==null){let w=Ct(404,{pathname:t.history.location.pathname}),{matches:_,route:S}=F2(n);p=_,g={[S.id]:w}}let z=!p.some(w=>w.route.lazy)&&(!p.some(w=>w.route.loader)||t.hydrationData!=null),M,m={historyAction:t.history.action,location:t.history.location,matches:p,initialized:z,navigation:Fi,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||g,fetchers:new Map,blockers:new Map},v=m0.Pop,u=!1,f,y=!1,x=!1,k=[],C=[],P=new Map,q=0,F=-1,c0=new Map,b0=new Set,$0=new Map,G0=new Map,E0=new Map,_t=!1;function Ot(){return l=t.history.listen(w=>{let{action:_,location:S,delta:L}=w;if(_t){_t=!1;return}T1(E0.size===0||L!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let D=Th({currentLocation:m.location,nextLocation:S,historyAction:_});if(D&&L!=null){_t=!0,t.history.go(L*-1),nn(D,{state:"blocked",location:S,proceed(){nn(D,{state:"proceeding",proceed:void 0,reset:void 0,location:S}),t.history.go(L)},reset(){D1(D),R({blockers:new Map(M.state.blockers)})}});return}return z0(_,S)}),m.initialized||z0(m0.Pop,m.location),M}function N(){l&&l(),o.clear(),f&&f.abort(),m.fetchers.forEach((w,_)=>Wr(_)),m.blockers.forEach((w,_)=>D1(_))}function $(w){return o.add(w),()=>o.delete(w)}function R(w){m=Y({},m,w),o.forEach(_=>_(m))}function X(w,_){var S,L;let D=m.actionData!=null&&m.navigation.formMethod!=null&&It(m.navigation.formMethod)&&m.navigation.state==="loading"&&((S=w.state)==null?void 0:S._isRedirect)!==!0,U;_.actionData?Object.keys(_.actionData).length>0?U=_.actionData:U=null:D?U=m.actionData:U=null;let j=_.loaderData?I2(m.loaderData,_.loaderData,_.matches||[],_.errors):m.loaderData;for(let[I]of E0)D1(I);let B=u===!0||m.navigation.formMethod!=null&&It(m.navigation.formMethod)&&((L=w.state)==null?void 0:L._isRedirect)!==!0;r&&(n=r,r=void 0),R(Y({},_,{actionData:U,loaderData:j,historyAction:v,location:w,initialized:!0,navigation:Fi,revalidation:"idle",restoreScrollPosition:Nh(w,_.matches||m.matches),preventScrollReset:B,blockers:new Map(m.blockers)})),y||v===m0.Pop||(v===m0.Push?t.history.push(w,w.state):v===m0.Replace&&t.history.replace(w,w.state)),v=m0.Pop,u=!1,y=!1,x=!1,k=[],C=[]}async function r0(w,_){if(typeof w=="number"){t.history.go(w);return}let{path:S,submission:L,error:D}=O2(w,i,_),U=m.location,j=Va(m.location,S,_&&_.state);j=Y({},j,t.history.encodeLocation(j));let B=_&&_.replace!=null?_.replace:void 0,I=m0.Push;B===!0?I=m0.Replace:B===!1||L!=null&&It(L.formMethod)&&L.formAction===m.location.pathname+m.location.search&&(I=m0.Replace);let t0=_&&"preventScrollReset"in _?_.preventScrollReset===!0:void 0,Q=Th({currentLocation:U,nextLocation:j,historyAction:I});if(Q){nn(Q,{state:"blocked",location:j,proceed(){nn(Q,{state:"proceeding",proceed:void 0,reset:void 0,location:j}),r0(w,_)},reset(){D1(Q),R({blockers:new Map(m.blockers)})}});return}return await z0(I,j,{submission:L,pendingError:D,preventScrollReset:t0,replace:_&&_.replace})}function xt(){if(u0(),R({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){z0(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}z0(v||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation})}}async function z0(w,_,S){f&&f.abort(),f=null,v=w,y=(S&&S.startUninterruptedRevalidation)===!0,Op(m.location,m.matches),u=(S&&S.preventScrollReset)===!0;let L=r||n,D=S&&S.overrideNavigation,U=s1(L,_,t.basename);if(!U){let _0=Ct(404,{pathname:_.pathname}),{matches:k0,route:ut}=F2(L);Yr(),X(_,{matches:k0,loaderData:{},errors:{[ut.id]:_0}});return}if(E8(m.location,_)&&!(S&&S.submission&&It(S.submission.formMethod))){X(_,{matches:U});return}f=new AbortController;let j=ta(t.history,_,f.signal,S&&S.submission),B,I;if(S&&S.pendingError)I={[c1(U).route.id]:S.pendingError};else if(S&&S.submission&&It(S.submission.formMethod)){let _0=await Xt(j,_,S.submission,U,{replace:S.replace});if(_0.shortCircuited)return;B=_0.pendingActionData,I=_0.pendingActionError,D=Y({state:"loading",location:_},S.submission),j=new Request(j.url,{signal:j.signal})}let{shortCircuited:t0,loaderData:Q,errors:dt}=await ct(j,_,U,D,S&&S.submission,S&&S.fetcherSubmission,S&&S.replace,B,I);t0||(f=null,X(_,Y({matches:U},B?{actionData:B}:{},{loaderData:Q,errors:dt})))}async function Xt(w,_,S,L,D){u0();let U=Y({state:"submitting",location:_},S);R({navigation:U});let j,B=no(L,_);if(!B.route.action&&!B.route.lazy)j={type:M0.error,error:Ct(405,{method:w.method,pathname:_.pathname,routeId:B.route.id})};else if(j=await Z1("action",w,B,L,a,e,M.basename),w.signal.aborted)return{shortCircuited:!0};if(y1(j)){let I;return D&&D.replace!=null?I=D.replace:I=j.location===m.location.pathname+m.location.search,await d0(m,j,{submission:S,replace:I}),{shortCircuited:!0}}if(za(j)){let I=c1(L,B.route.id);return(D&&D.replace)!==!0&&(v=m0.Push),{pendingActionData:{},pendingActionError:{[I.route.id]:j.error}}}if(Ae(j))throw Ct(400,{type:"defer-action"});return{pendingActionData:{[B.route.id]:j.data}}}async function ct(w,_,S,L,D,U,j,B,I){let t0=L;t0||(t0=Y({state:"loading",location:_,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},D));let Q=D||U?D||U:t0.formMethod&&t0.formAction&&t0.formData&&t0.formEncType?{formMethod:t0.formMethod,formAction:t0.formAction,formData:t0.formData,formEncType:t0.formEncType}:void 0,dt=r||n,[_0,k0]=R2(t.history,m,S,Q,_,x,k,C,$0,dt,t.basename,B,I);if(Yr(N0=>!(S&&S.some(pt=>pt.route.id===N0))||_0&&_0.some(pt=>pt.route.id===N0)),_0.length===0&&k0.length===0)return X(_,Y({matches:S,loaderData:{},errors:I||null},B?{actionData:B}:{})),{shortCircuited:!0};if(!y){k0.forEach(pt=>{let ye=m.fetchers.get(pt.key),F1={state:"loading",data:ye&&ye.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(pt.key,F1)});let N0=B||m.actionData;R(Y({navigation:t0},N0?Object.keys(N0).length===0?{actionData:null}:{actionData:N0}:{},k0.length>0?{fetchers:new Map(m.fetchers)}:{}))}F=++q,k0.forEach(N0=>P.set(N0.key,f));let{results:ut,loaderResults:$1,fetcherResults:Kr}=await C0(m.matches,S,_0,k0,w);if(w.signal.aborted)return{shortCircuited:!0};k0.forEach(N0=>P.delete(N0.key));let I1=U2(ut);if(I1)return await d0(m,I1,{replace:j}),{shortCircuited:!0};let{loaderData:We,errors:Gr}=$2(m,S,_0,$1,I,k0,Kr,G0);G0.forEach((N0,pt)=>{N0.subscribe(ye=>{(ye||N0.done)&&G0.delete(pt)})}),Ap();let Qr=Ah(F);return Y({loaderData:We,errors:Gr},Qr||k0.length>0?{fetchers:new Map(m.fetchers)}:{})}function nt(w){return m.fetchers.get(w)||z8}function E(w,_,S,L){if(M8)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");P.has(w)&&an(w);let U=s1(r||n,S,t.basename);if(!U){St(w,_,Ct(404,{pathname:S}));return}let{path:j,submission:B}=O2(S,i,L,!0),I=no(U,j);if(u=(L&&L.preventScrollReset)===!0,B&&It(B.formMethod)){T(w,_,j,I,U,B);return}$0.set(w,{routeId:_,path:j}),H(w,_,j,I,U,B)}async function T(w,_,S,L,D,U){if(u0(),$0.delete(w),!L.route.action&&!L.route.lazy){let Rt=Ct(405,{method:U.formMethod,pathname:S,routeId:_});St(w,_,Rt);return}let j=m.fetchers.get(w),B=Y({state:"submitting"},U,{data:j&&j.data," _hasFetcherDoneAnything ":!0});m.fetchers.set(w,B),R({fetchers:new Map(m.fetchers)});let I=new AbortController,t0=ta(t.history,S,I.signal,U);P.set(w,I);let Q=await Z1("action",t0,L,D,a,e,M.basename);if(t0.signal.aborted){P.get(w)===I&&P.delete(w);return}if(y1(Q)){P.delete(w),b0.add(w);let Rt=Y({state:"loading"},U,{data:void 0," _hasFetcherDoneAnything ":!0});return m.fetchers.set(w,Rt),R({fetchers:new Map(m.fetchers)}),d0(m,Q,{submission:U,isFetchActionRedirect:!0})}if(za(Q)){St(w,_,Q.error);return}if(Ae(Q))throw Ct(400,{type:"defer-action"});let dt=m.navigation.location||m.location,_0=ta(t.history,dt,I.signal),k0=r||n,ut=m.navigation.state!=="idle"?s1(k0,m.navigation.location,t.basename):m.matches;V(ut,"Didn't find any matches after fetcher action");let $1=++q;c0.set(w,$1);let Kr=Y({state:"loading",data:Q.data},U,{" _hasFetcherDoneAnything ":!0});m.fetchers.set(w,Kr);let[I1,We]=R2(t.history,m,ut,U,dt,x,k,C,$0,k0,t.basename,{[L.route.id]:Q.data},void 0);We.filter(Rt=>Rt.key!==w).forEach(Rt=>{let qr=Rt.key,Oh=m.fetchers.get(qr),$p={state:"loading",data:Oh&&Oh.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(qr,$p),P.set(qr,I)}),R({fetchers:new Map(m.fetchers)});let{results:Gr,loaderResults:Qr,fetcherResults:N0}=await C0(m.matches,ut,I1,We,_0);if(I.signal.aborted)return;c0.delete(w),P.delete(w),We.forEach(Rt=>P.delete(Rt.key));let pt=U2(Gr);if(pt)return d0(m,pt);let{loaderData:ye,errors:F1}=$2(m,m.matches,I1,Qr,void 0,We,N0,G0),Lp={state:"idle",data:Q.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(w,Lp);let Dp=Ah($1);m.navigation.state==="loading"&&$1>F?(V(v,"Expected pending action"),f&&f.abort(),X(m.navigation.location,{matches:ut,loaderData:ye,errors:F1,fetchers:new Map(m.fetchers)})):(R(Y({errors:F1,loaderData:I2(m.loaderData,ye,ut,F1)},Dp?{fetchers:new Map(m.fetchers)}:{})),x=!1)}async function H(w,_,S,L,D,U){let j=m.fetchers.get(w),B=Y({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},U,{data:j&&j.data," _hasFetcherDoneAnything ":!0});m.fetchers.set(w,B),R({fetchers:new Map(m.fetchers)});let I=new AbortController,t0=ta(t.history,S,I.signal);P.set(w,I);let Q=await Z1("loader",t0,L,D,a,e,M.basename);if(Ae(Q)&&(Q=await xp(Q,t0.signal,!0)||Q),P.get(w)===I&&P.delete(w),t0.signal.aborted)return;if(y1(Q)){await d0(m,Q);return}if(za(Q)){let _0=c1(m.matches,_);m.fetchers.delete(w),R({fetchers:new Map(m.fetchers),errors:{[_0.route.id]:Q.error}});return}V(!Ae(Q),"Unhandled fetcher deferred data");let dt={state:"idle",data:Q.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(w,dt),R({fetchers:new Map(m.fetchers)})}async function d0(w,_,S){var L;let{submission:D,replace:U,isFetchActionRedirect:j}=S===void 0?{}:S;_.revalidate&&(x=!0);let B=Va(w.location,_.location,Y({_isRedirect:!0},j?{_isFetchActionRedirect:!0}:{}));if(V(B,"Expected a location on the redirect navigation"),zp.test(_.location)&&Mp&&typeof((L=window)==null?void 0:L.location)<"u"){let k0=t.history.createURL(_.location),ut=Za(k0.pathname,t.basename||"/")==null;if(window.location.origin!==k0.origin||ut){U?window.location.replace(_.location):window.location.assign(_.location);return}}f=null;let I=U===!0?m0.Replace:m0.Push,{formMethod:t0,formAction:Q,formEncType:dt,formData:_0}=w.navigation;!D&&t0&&Q&&_0&&dt&&(D={formMethod:t0,formAction:Q,formEncType:dt,formData:_0}),g8.has(_.status)&&D&&It(D.formMethod)?await z0(I,B,{submission:Y({},D,{formAction:_.location}),preventScrollReset:u}):j?await z0(I,B,{overrideNavigation:{state:"loading",location:B,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:D,preventScrollReset:u}):await z0(I,B,{overrideNavigation:{state:"loading",location:B,formMethod:D?D.formMethod:void 0,formAction:D?D.formAction:void 0,formEncType:D?D.formEncType:void 0,formData:D?D.formData:void 0},preventScrollReset:u})}async function C0(w,_,S,L,D){let U=await Promise.all([...S.map(I=>Z1("loader",D,I,_,a,e,M.basename)),...L.map(I=>I.matches&&I.match?Z1("loader",ta(t.history,I.path,D.signal),I.match,I.matches,a,e,M.basename):{type:M0.error,error:Ct(404,{pathname:I.path})})]),j=U.slice(0,S.length),B=U.slice(S.length);return await Promise.all([j2(w,S,j,D.signal,!1,m.loaderData),j2(w,L.map(I=>I.match),B,D.signal,!0)]),{results:U,loaderResults:j,fetcherResults:B}}function u0(){x=!0,k.push(...Yr()),$0.forEach((w,_)=>{P.has(_)&&(C.push(_),an(_))})}function St(w,_,S){let L=c1(m.matches,_);Wr(w),R({errors:{[L.route.id]:S},fetchers:new Map(m.fetchers)})}function Wr(w){P.has(w)&&an(w),$0.delete(w),c0.delete(w),b0.delete(w),m.fetchers.delete(w)}function an(w){let _=P.get(w);V(_,"Expected fetch controller: "+w),_.abort(),P.delete(w)}function Ph(w){for(let _ of w){let L={state:"idle",data:nt(_).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(_,L)}}function Ap(){let w=[];for(let _ of b0){let S=m.fetchers.get(_);V(S,"Expected fetcher: "+_),S.state==="loading"&&(b0.delete(_),w.push(_))}Ph(w)}function Ah(w){let _=[];for(let[S,L]of c0)if(L<w){let D=m.fetchers.get(S);V(D,"Expected fetcher: "+S),D.state==="loading"&&(an(S),c0.delete(S),_.push(S))}return Ph(_),_.length>0}function Tp(w,_){let S=m.blockers.get(w)||N2;return E0.get(w)!==_&&E0.set(w,_),S}function D1(w){m.blockers.delete(w),E0.delete(w)}function nn(w,_){let S=m.blockers.get(w)||N2;V(S.state==="unblocked"&&_.state==="blocked"||S.state==="blocked"&&_.state==="blocked"||S.state==="blocked"&&_.state==="proceeding"||S.state==="blocked"&&_.state==="unblocked"||S.state==="proceeding"&&_.state==="unblocked","Invalid blocker state transition: "+S.state+" -> "+_.state),m.blockers.set(w,_),R({blockers:new Map(m.blockers)})}function Th(w){let{currentLocation:_,nextLocation:S,historyAction:L}=w;if(E0.size===0)return;E0.size>1&&T1(!1,"A router only supports one blocker at a time");let D=Array.from(E0.entries()),[U,j]=D[D.length-1],B=m.blockers.get(U);if(!(B&&B.state==="proceeding")&&j({currentLocation:_,nextLocation:S,historyAction:L}))return U}function Yr(w){let _=[];return G0.forEach((S,L)=>{(!w||w(L))&&(S.cancel(),_.push(L),G0.delete(L))}),_}function Np(w,_,S){if(h=w,c=_,s=S||(L=>L.key),!d&&m.navigation===Fi){d=!0;let L=Nh(m.location,m.matches);L!=null&&R({restoreScrollPosition:L})}return()=>{h=null,c=null,s=null}}function Op(w,_){if(h&&s&&c){let S=_.map(D=>B2(D,m.loaderData)),L=s(w,S)||w.key;h[L]=c()}}function Nh(w,_){if(h&&s&&c){let S=_.map(U=>B2(U,m.loaderData)),L=s(w,S)||w.key,D=h[L];if(typeof D=="number")return D}return null}function Rp(w){r=w}return M={get basename(){return t.basename},get state(){return m},get routes(){return n},initialize:Ot,subscribe:$,enableScrollRestoration:Np,navigate:r0,fetch:E,revalidate:xt,createHref:w=>t.history.createHref(w),encodeLocation:w=>t.history.encodeLocation(w),getFetcher:nt,deleteFetcher:Wr,dispose:N,getBlocker:Tp,deleteBlocker:D1,_internalFetchControllers:P,_internalActiveDeferreds:G0,_internalSetRoutes:Rp},M}function _8(t){return t!=null&&"formData"in t}function O2(t,e,a,n){n===void 0&&(n=!1);let r=typeof t=="string"?t:Gt(t);if(!a||!_8(a))return{path:r};if(a.formMethod&&!P8(a.formMethod))return{path:r,error:Ct(405,{method:a.formMethod})};let i;if(a.formData){let h=a.formMethod||"get";if(i={formMethod:e.v7_normalizeFormMethod?h.toUpperCase():h.toLowerCase(),formAction:_p(r),formEncType:a&&a.formEncType||"application/x-www-form-urlencoded",formData:a.formData},It(i.formMethod))return{path:r,submission:i}}let l=qt(r),o=wp(a.formData);return n&&l.search&&Sp(l.search)&&o.append("index",""),l.search="?"+o,{path:Gt(l),submission:i}}function x8(t,e){let a=t;if(e){let n=t.findIndex(r=>r.route.id===e);n>=0&&(a=t.slice(0,n))}return a}function R2(t,e,a,n,r,i,l,o,h,s,c,d,p){let g=p?Object.values(p)[0]:d?Object.values(d)[0]:void 0,z=t.createURL(e.location),M=t.createURL(r),m=i||z.toString()===M.toString()||z.search!==M.search,v=p?Object.keys(p)[0]:void 0,f=x8(a,v).filter((x,k)=>{if(x.route.lazy)return!0;if(x.route.loader==null)return!1;if(S8(e.loaderData,e.matches[k],x)||l.some(q=>q===x.route.id))return!0;let C=e.matches[k],P=x;return L2(x,Y({currentUrl:z,currentParams:C.params,nextUrl:M,nextParams:P.params},n,{actionResult:g,defaultShouldRevalidate:m||yp(C,P)}))}),y=[];return h.forEach((x,k)=>{if(!a.some(F=>F.route.id===x.routeId))return;let C=s1(s,x.path,c);if(!C){y.push(Y({key:k},x,{matches:null,match:null}));return}let P=no(C,x.path);if(o.includes(k)){y.push(Y({key:k,matches:C,match:P},x));return}L2(P,Y({currentUrl:z,currentParams:e.matches[e.matches.length-1].params,nextUrl:M,nextParams:a[a.length-1].params},n,{actionResult:g,defaultShouldRevalidate:m}))&&y.push(Y({key:k,matches:C,match:P},x))}),[f,y]}function S8(t,e,a){let n=!e||a.route.id!==e.route.id,r=t[a.route.id]===void 0;return n||r}function yp(t,e){let a=t.route.path;return t.pathname!==e.pathname||a!=null&&a.endsWith("*")&&t.params["*"]!==e.params["*"]}function L2(t,e){if(t.route.shouldRevalidate){let a=t.route.shouldRevalidate(e);if(typeof a=="boolean")return a}return e.defaultShouldRevalidate}async function D2(t,e,a){if(!t.lazy)return;let n=await t.lazy();if(!t.lazy)return;let r=a[t.id];V(r,"No route found in manifest");let i={};for(let l in n){let h=r[l]!==void 0&&l!=="hasErrorBoundary";T1(!h,'Route "'+r.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!h&&!Yf.has(l)&&(i[l]=n[l])}Object.assign(r,i),Object.assign(r,{hasErrorBoundary:e(Y({},r)),lazy:void 0})}async function Z1(t,e,a,n,r,i,l,o,h,s){l===void 0&&(l="/"),o===void 0&&(o=!1),h===void 0&&(h=!1);let c,d,p,g=m=>{let v,u=new Promise((f,y)=>v=y);return p=()=>v(),e.signal.addEventListener("abort",p),Promise.race([m({request:e,params:a.params,context:s}),u])};try{let m=a.route[t];if(a.route.lazy)if(m)d=(await Promise.all([g(m),D2(a.route,i,r)]))[0];else if(await D2(a.route,i,r),m=a.route[t],m)d=await g(m);else{if(t==="action")throw Ct(405,{method:e.method,pathname:new URL(e.url).pathname,routeId:a.route.id});return{type:M0.data,data:void 0}}else V(m,"Could not find the "+t+' to run on the "'+a.route.id+'" route'),d=await g(m);V(d!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+a.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(m){c=M0.error,d=m}finally{p&&e.signal.removeEventListener("abort",p)}if(k8(d)){let m=d.status;if(m8.has(m)){let f=d.headers.get("Location");if(V(f,"Redirects returned/thrown from loaders/actions must have a Location header"),zp.test(f)){if(!o){let y=new URL(e.url),x=f.startsWith("//")?new URL(y.protocol+f):new URL(f),k=Za(x.pathname,l)!=null;x.origin===y.origin&&k&&(f=x.pathname+x.search+x.hash)}}else{let y=n.slice(0,n.indexOf(a)+1),x=Br(y).map(C=>C.pathnameBase),k=xh(f,x,new URL(e.url).pathname);if(V(Gt(k),"Unable to resolve redirect location: "+f),l){let C=k.pathname;k.pathname=C==="/"?l:Ht([l,C])}f=Gt(k)}if(o)throw d.headers.set("Location",f),d;return{type:M0.redirect,status:m,location:f,revalidate:d.headers.get("X-Remix-Revalidate")!==null}}if(h)throw{type:c||M0.data,response:d};let v,u=d.headers.get("Content-Type");return u&&/\bapplication\/json\b/.test(u)?v=await d.json():v=await d.text(),c===M0.error?{type:c,error:new Sh(m,d.statusText,v),headers:d.headers}:{type:M0.data,data:v,statusCode:d.status,headers:d.headers}}if(c===M0.error)return{type:c,error:d};if(C8(d)){var z,M;return{type:M0.deferred,deferredData:d,statusCode:(z=d.init)==null?void 0:z.status,headers:((M=d.init)==null?void 0:M.headers)&&new Headers(d.init.headers)}}return{type:M0.data,data:d}}function ta(t,e,a,n){let r=t.createURL(_p(e)).toString(),i={signal:a};if(n&&It(n.formMethod)){let{formMethod:l,formEncType:o,formData:h}=n;i.method=l.toUpperCase(),i.body=o==="application/x-www-form-urlencoded"?wp(h):h}return new Request(r,i)}function wp(t){let e=new URLSearchParams;for(let[a,n]of t.entries())e.append(a,n instanceof File?n.name:n);return e}function b8(t,e,a,n,r){let i={},l=null,o,h=!1,s={};return a.forEach((c,d)=>{let p=e[d].route.id;if(V(!y1(c),"Cannot handle redirect results in processLoaderData"),za(c)){let g=c1(t,p),z=c.error;n&&(z=Object.values(n)[0],n=void 0),l=l||{},l[g.route.id]==null&&(l[g.route.id]=z),i[p]=void 0,h||(h=!0,o=mp(c.error)?c.error.status:500),c.headers&&(s[p]=c.headers)}else Ae(c)?(r.set(p,c.deferredData),i[p]=c.deferredData.data):i[p]=c.data,c.statusCode!=null&&c.statusCode!==200&&!h&&(o=c.statusCode),c.headers&&(s[p]=c.headers)}),n&&(l=n,i[Object.keys(n)[0]]=void 0),{loaderData:i,errors:l,statusCode:o||200,loaderHeaders:s}}function $2(t,e,a,n,r,i,l,o){let{loaderData:h,errors:s}=b8(e,a,n,r,o);for(let c=0;c<i.length;c++){let{key:d,match:p}=i[c];V(l!==void 0&&l[c]!==void 0,"Did not find corresponding fetcher result");let g=l[c];if(za(g)){let z=c1(t.matches,p==null?void 0:p.route.id);s&&s[z.route.id]||(s=Y({},s,{[z.route.id]:g.error})),t.fetchers.delete(d)}else if(y1(g))V(!1,"Unhandled fetcher revalidation redirect");else if(Ae(g))V(!1,"Unhandled fetcher deferred data");else{let z={state:"idle",data:g.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};t.fetchers.set(d,z)}}return{loaderData:h,errors:s}}function I2(t,e,a,n){let r=Y({},e);for(let i of a){let l=i.route.id;if(e.hasOwnProperty(l)?e[l]!==void 0&&(r[l]=e[l]):t[l]!==void 0&&i.route.loader&&(r[l]=t[l]),n&&n.hasOwnProperty(l))break}return r}function c1(t,e){return(e?t.slice(0,t.findIndex(n=>n.route.id===e)+1):[...t]).reverse().find(n=>n.route.hasErrorBoundary===!0)||t[0]}function F2(t){let e=t.find(a=>a.index||!a.path||a.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Ct(t,e){let{pathname:a,routeId:n,method:r,type:i}=e===void 0?{}:e,l="Unknown Server Error",o="Unknown @remix-run/router error";return t===400?(l="Bad Request",r&&a&&n?o="You made a "+r+' request to "'+a+'" but '+('did not provide a `loader` for route "'+n+'", ')+"so there is no way to handle the request.":i==="defer-action"&&(o="defer() is not supported in actions")):t===403?(l="Forbidden",o='Route "'+n+'" does not match URL "'+a+'"'):t===404?(l="Not Found",o='No route matches URL "'+a+'"'):t===405&&(l="Method Not Allowed",r&&a&&n?o="You made a "+r.toUpperCase()+' request to "'+a+'" but '+('did not provide an `action` for route "'+n+'", ')+"so there is no way to handle the request.":r&&(o='Invalid request method "'+r.toUpperCase()+'"')),new Sh(t||500,l,new Error(o),!0)}function U2(t){for(let e=t.length-1;e>=0;e--){let a=t[e];if(y1(a))return a}}function _p(t){let e=typeof t=="string"?qt(t):t;return Gt(Y({},e,{hash:""}))}function E8(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash!==e.hash}function Ae(t){return t.type===M0.deferred}function za(t){return t.type===M0.error}function y1(t){return(t&&t.type)===M0.redirect}function C8(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function k8(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function P8(t){return f8.has(t.toLowerCase())}function It(t){return p8.has(t.toLowerCase())}async function j2(t,e,a,n,r,i){for(let l=0;l<a.length;l++){let o=a[l],h=e[l];if(!h)continue;let s=t.find(d=>d.route.id===h.route.id),c=s!=null&&!yp(s,h)&&(i&&i[h.route.id])!==void 0;Ae(o)&&(r||c)&&await xp(o,n,r).then(d=>{d&&(a[l]=d||a[l])})}}async function xp(t,e,a){if(a===void 0&&(a=!1),!await t.deferredData.resolveData(e)){if(a)try{return{type:M0.data,data:t.deferredData.unwrappedData}}catch(r){return{type:M0.error,error:r}}return{type:M0.data,data:t.deferredData.data}}}function Sp(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function B2(t,e){let{route:a,pathname:n,params:r}=t;return{id:a.id,pathname:n,params:r,data:e[a.id],handle:a.handle}}function no(t,e){let a=typeof e=="string"?qt(e).search:e.search;if(t[t.length-1].route.index&&Sp(a||""))return t[t.length-1];let n=Br(t);return n[n.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function A8(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const T8=typeof Object.is=="function"?Object.is:A8,{useState:N8,useEffect:O8,useLayoutEffect:R8,useDebugValue:L8}=w1;function D8(t,e,a){const n=e(),[{inst:r},i]=N8({inst:{value:n,getSnapshot:e}});return R8(()=>{r.value=n,r.getSnapshot=e,Ui(r)&&i({inst:r})},[t,n,e]),O8(()=>(Ui(r)&&i({inst:r}),t(()=>{Ui(r)&&i({inst:r})})),[t]),L8(n),n}function Ui(t){const e=t.getSnapshot,a=t.value;try{const n=e();return!T8(a,n)}catch{return!0}}function $8(t,e,a){return e()}const I8=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",F8=!I8,U8=F8?$8:D8,j8="useSyncExternalStore"in w1?(t=>t.useSyncExternalStore)(w1):U8,bh=A.createContext(null),Hr=A.createContext(null),L1=A.createContext(null),Vr=A.createContext(null),Ve=A.createContext({outlet:null,matches:[]}),bp=A.createContext(null);function ro(){return ro=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},ro.apply(this,arguments)}function B8(t,e){let{relative:a}=e===void 0?{}:e;tn()||V(!1);let{basename:n,navigator:r}=A.useContext(L1),{hash:i,pathname:l,search:o}=Eh(t,{relative:a}),h=l;return n!=="/"&&(h=l==="/"?n:Ht([n,l])),r.createHref({pathname:h,search:o,hash:i})}function tn(){return A.useContext(Vr)!=null}function en(){return tn()||V(!1),A.useContext(Vr).location}function H8(){tn()||V(!1);let{basename:t,navigator:e}=A.useContext(L1),{matches:a}=A.useContext(Ve),{pathname:n}=en(),r=JSON.stringify(Br(a).map(o=>o.pathnameBase)),i=A.useRef(!1);return A.useEffect(()=>{i.current=!0}),A.useCallback(function(o,h){if(h===void 0&&(h={}),!i.current)return;if(typeof o=="number"){e.go(o);return}let s=xh(o,JSON.parse(r),n,h.relative==="path");t!=="/"&&(s.pathname=s.pathname==="/"?t:Ht([t,s.pathname])),(h.replace?e.replace:e.push)(s,h.state,h)},[t,e,r,n])}const V8=A.createContext(null);function W8(t){let e=A.useContext(Ve).outlet;return e&&A.createElement(V8.Provider,{value:t},e)}function Eh(t,e){let{relative:a}=e===void 0?{}:e,{matches:n}=A.useContext(Ve),{pathname:r}=en(),i=JSON.stringify(Br(n).map(l=>l.pathnameBase));return A.useMemo(()=>xh(t,JSON.parse(i),r,a==="path"),[t,i,r,a])}function Y8(t,e){tn()||V(!1);let{navigator:a}=A.useContext(L1),n=A.useContext(Hr),{matches:r}=A.useContext(Ve),i=r[r.length-1],l=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let h=en(),s;if(e){var c;let M=typeof e=="string"?qt(e):e;o==="/"||(c=M.pathname)!=null&&c.startsWith(o)||V(!1),s=M}else s=h;let d=s.pathname||"/",p=o==="/"?d:d.slice(o.length)||"/",g=s1(t,{pathname:p}),z=q8(g&&g.map(M=>Object.assign({},M,{params:Object.assign({},l,M.params),pathname:Ht([o,a.encodeLocation?a.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?o:Ht([o,a.encodeLocation?a.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),r,n||void 0);return e&&z?A.createElement(Vr.Provider,{value:{location:ro({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:m0.Pop}},z):z}function K8(){let t=t7(),e=mp(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),a?A.createElement("pre",{style:r},a):null,i)}class G8 extends A.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,a){return a.location!==e.location?{error:e.error,location:e.location}:{error:e.error||a.error,location:a.location}}componentDidCatch(e,a){console.error("React Router caught the following error during render",e,a)}render(){return this.state.error?A.createElement(Ve.Provider,{value:this.props.routeContext},A.createElement(bp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Q8(t){let{routeContext:e,match:a,children:n}=t,r=A.useContext(bh);return r&&r.static&&r.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=a.route.id),A.createElement(Ve.Provider,{value:e},n)}function q8(t,e,a){if(e===void 0&&(e=[]),t==null)if(a!=null&&a.errors)t=a.matches;else return null;let n=t,r=a==null?void 0:a.errors;if(r!=null){let i=n.findIndex(l=>l.route.id&&(r==null?void 0:r[l.route.id]));i>=0||V(!1),n=n.slice(0,Math.min(n.length,i+1))}return n.reduceRight((i,l,o)=>{let h=l.route.id?r==null?void 0:r[l.route.id]:null,s=null;a&&(l.route.ErrorBoundary?s=A.createElement(l.route.ErrorBoundary,null):l.route.errorElement?s=l.route.errorElement:s=A.createElement(K8,null));let c=e.concat(n.slice(0,o+1)),d=()=>{let p=i;return h?p=s:l.route.Component?p=A.createElement(l.route.Component,null):l.route.element&&(p=l.route.element),A.createElement(Q8,{match:l,routeContext:{outlet:i,matches:c},children:p})};return a&&(l.route.ErrorBoundary||l.route.errorElement||o===0)?A.createElement(G8,{location:a.location,component:s,error:h,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var H2;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(H2||(H2={}));var Wa;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Wa||(Wa={}));function Ep(t){let e=A.useContext(Hr);return e||V(!1),e}function X8(t){let e=A.useContext(Ve);return e||V(!1),e}function J8(t){let e=X8(),a=e.matches[e.matches.length-1];return a.route.id||V(!1),a.route.id}function Z8(){let{matches:t,loaderData:e}=Ep(Wa.UseMatches);return A.useMemo(()=>t.map(a=>{let{pathname:n,params:r}=a;return{id:a.route.id,pathname:n,params:r,data:e[a.route.id],handle:a.route.handle}}),[t,e])}function t7(){var t;let e=A.useContext(bp),a=Ep(Wa.UseRouteError),n=J8(Wa.UseRouteError);return e||((t=a.errors)==null?void 0:t[n])}function e7(t){let{fallbackElement:e,router:a}=t,n=A.useCallback(()=>a.state,[a]),r=j8(a.subscribe,n,n),i=A.useMemo(()=>({createHref:a.createHref,encodeLocation:a.encodeLocation,go:h=>a.navigate(h),push:(h,s,c)=>a.navigate(h,{state:s,preventScrollReset:c==null?void 0:c.preventScrollReset}),replace:(h,s,c)=>a.navigate(h,{replace:!0,state:s,preventScrollReset:c==null?void 0:c.preventScrollReset})}),[a]),l=a.basename||"/",o=A.useMemo(()=>({router:a,navigator:i,static:!1,basename:l}),[a,i,l]);return A.createElement(A.Fragment,null,A.createElement(bh.Provider,{value:o},A.createElement(Hr.Provider,{value:r},A.createElement(r7,{basename:a.basename,location:a.state.location,navigationType:a.state.historyAction,navigator:i},a.state.initialized?A.createElement(i7,null):e))),null)}function a7(t){return W8(t.context)}function n7(t){V(!1)}function r7(t){let{basename:e="/",children:a=null,location:n,navigationType:r=m0.Pop,navigator:i,static:l=!1}=t;tn()&&V(!1);let o=e.replace(/^\/*/,"/"),h=A.useMemo(()=>({basename:o,navigator:i,static:l}),[o,i,l]);typeof n=="string"&&(n=qt(n));let{pathname:s="/",search:c="",hash:d="",state:p=null,key:g="default"}=n,z=A.useMemo(()=>{let M=Za(s,o);return M==null?null:{location:{pathname:M,search:c,hash:d,state:p,key:g},navigationType:r}},[o,s,c,d,p,g,r]);return z==null?null:A.createElement(L1.Provider,{value:h},A.createElement(Vr.Provider,{children:a,value:z}))}function i7(t){let{children:e,location:a}=t,n=A.useContext(bh),r=n&&!e?n.router.routes:io(e);return Y8(r,a)}var V2;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(V2||(V2={}));new Promise(()=>{});function io(t,e){e===void 0&&(e=[]);let a=[];return A.Children.forEach(t,(n,r)=>{if(!A.isValidElement(n))return;let i=[...e,r];if(n.type===A.Fragment){a.push.apply(a,io(n.props.children,i));return}n.type!==n7&&V(!1),!n.props.index||!n.props.children||V(!1);let l={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=io(n.props.children,i)),a.push(l)}),a}function l7(t){return!!t.ErrorBoundary||!!t.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ya(){return Ya=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},Ya.apply(this,arguments)}function Cp(t,e){if(t==null)return{};var a={},n=Object.keys(t),r,i;for(i=0;i<n.length;i++)r=n[i],!(e.indexOf(r)>=0)&&(a[r]=t[r]);return a}function o7(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function h7(t,e){return t.button===0&&(!e||e==="_self")&&!o7(t)}const s7=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],c7=["aria-current","caseSensitive","className","end","style","to","children"];function d7(t,e){return w8({basename:e==null?void 0:e.basename,future:e==null?void 0:e.future,history:Hf({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||u7(),routes:t,detectErrorBoundary:l7}).initialize()}function u7(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Ya({},e,{errors:p7(e.errors)})),e}function p7(t){if(!t)return null;let e=Object.entries(t),a={};for(let[n,r]of e)if(r&&r.__type==="RouteErrorResponse")a[n]=new Sh(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){let i=new Error(r.message);i.stack="",a[n]=i}else a[n]=r;return a}const v7=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",f7=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,m7=A.forwardRef(function(e,a){let{onClick:n,relative:r,reloadDocument:i,replace:l,state:o,target:h,to:s,preventScrollReset:c}=e,d=Cp(e,s7),{basename:p}=A.useContext(L1),g,z=!1;if(typeof s=="string"&&f7.test(s)&&(g=s,v7)){let u=new URL(window.location.href),f=s.startsWith("//")?new URL(u.protocol+s):new URL(s),y=Za(f.pathname,p);f.origin===u.origin&&y!=null?s=y+f.search+f.hash:z=!0}let M=B8(s,{relative:r}),m=g7(s,{replace:l,state:o,target:h,preventScrollReset:c,relative:r});function v(u){n&&n(u),u.defaultPrevented||m(u)}return A.createElement("a",Ya({},d,{href:g||M,onClick:z||i?n:v,ref:a,target:h}))}),ji=A.forwardRef(function(e,a){let{"aria-current":n="page",caseSensitive:r=!1,className:i="",end:l=!1,style:o,to:h,children:s}=e,c=Cp(e,c7),d=Eh(h,{relative:c.relative}),p=en(),g=A.useContext(Hr),{navigator:z}=A.useContext(L1),M=z.encodeLocation?z.encodeLocation(d).pathname:d.pathname,m=p.pathname,v=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;r||(m=m.toLowerCase(),v=v?v.toLowerCase():null,M=M.toLowerCase());let u=m===M||!l&&m.startsWith(M)&&m.charAt(M.length)==="/",f=v!=null&&(v===M||!l&&v.startsWith(M)&&v.charAt(M.length)==="/"),y=u?n:void 0,x;typeof i=="function"?x=i({isActive:u,isPending:f}):x=[i,u?"active":null,f?"pending":null].filter(Boolean).join(" ");let k=typeof o=="function"?o({isActive:u,isPending:f}):o;return A.createElement(m7,Ya({},c,{"aria-current":y,className:x,ref:a,style:k,to:h}),typeof s=="function"?s({isActive:u,isPending:f}):s)});var W2;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(W2||(W2={}));var Y2;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Y2||(Y2={}));function g7(t,e){let{target:a,replace:n,state:r,preventScrollReset:i,relative:l}=e===void 0?{}:e,o=H8(),h=en(),s=Eh(t,{relative:l});return A.useCallback(c=>{if(h7(c,a)){c.preventDefault();let d=n!==void 0?n:Gt(h)===Gt(s);o(t,{replace:d,state:r,preventScrollReset:i,relative:l})}},[h,o,s,n,r,a,t,i,l])}function z7(){const t=Z8(),e=t[t.length-1];return e==null?void 0:e.handle}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M7={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},y7=t=>(...e)=>({_$litDirective$:t,values:e});class w7{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,a,n){this._$Ct=e,this._$AM=a,this._$Ci=n}_$AS(e,a){return this.update(e,a)}update(e,a){return this.render(...a)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lo extends w7{constructor(e){if(super(e),this.et=v0,e.type!==M7.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===v0||e==null)return this.ft=void 0,this.et=e;if(e===Ue)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const a=[e];return a.raw=a,this.ft={_$litType$:this.constructor.resultType,strings:a,values:[]}}}lo.directiveName="unsafeHTML",lo.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class oo extends lo{}oo.directiveName="unsafeSVG",oo.resultType=2;const _7=y7(oo);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function K2(t){let e=v0;if(t){const a=t.cloneNode(!0);a.removeAttribute("id"),e=Mv`${_7(a.outerHTML)}`}return e}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _e={},G2=new Set;function kp(t,e){return(t||"").replace(`${e}:`,"")}function Q2(t){return t?t.split(":")[0]||"vaadin":void 0}function q2(t,e){t._icons=[...t.querySelectorAll("[id]")].reduce((a,n)=>{const r=kp(n.id,e);return a[r]=n,a},{})}class ho extends jr(Ur){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static get attachedIcons(){return G2}static getIconset(e){return _e[e]}static getIconSvg(e,a){const n=a||Q2(e),r=this.getIconset(n);if(!e||!r)return{svg:K2(null)};const i=kp(e,n),l=r._icons[i];return{preserveAspectRatio:l?l.getAttribute("preserveAspectRatio"):null,svg:K2(l),size:r.size,viewBox:l?l.getAttribute("viewBox"):null}}static register(e,a,n){if(!_e[e]){const r=document.createElement("vaadin-iconset");r.appendChild(n.content.cloneNode(!0)),_e[e]=r,q2(r,e),r.size=a,r.name=e,r.__nameChanged(e)}}connectedCallback(){super.connectedCallback(),this.style.display="none";const{name:e}=this;_e[e]=this,q2(this,e),this.__updateIcons(e)}__updateIcons(e){G2.forEach(a=>{e===Q2(a.icon)&&a._applyIcon()})}__nameChanged(e,a){a&&(_e[e]=_e[a],delete _e[a]),e&&this.__updateIcons(e)}}customElements.define(ho.is,ho);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pp=document.createElement("template");Pp.innerHTML=`<svg><defs>
<g id="vaadin:abacus"><path d="M0 0v16h16v-16h-16zM14 2v3h-0.1c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-3.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.1v-3h12zM13.9 10c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-0.2c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-3.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.1v-4h0.1c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h3.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.1l-0.1 4zM2 14v-3h0.1c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h3.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.1v3h-12z"></path></g>
<g id="vaadin:absolute-position"><path d="M0 0v16h16v-16h-16zM15 15h-14v-6h3v1l3-2-3-2v1h-3v-6h6v3h-1l2 3 2-3h-1v-3h6v14z"></path></g>
<g id="vaadin:academy-cap"><path d="M15.090 12.79c0.235-0.185 0.385-0.469 0.385-0.789 0-0.358-0.188-0.672-0.471-0.849l-0.004-5.822-1 0.67v5.15c-0.283 0.18-0.468 0.492-0.468 0.847 0 0.316 0.147 0.598 0.376 0.782l-0.378 0.502c-0.323 0.41-0.521 0.931-0.53 1.498l-0 1.222h0.81c0.002 0 0.004 0 0.005 0 0.411 0 0.757-0.282 0.853-0.664l0.331-1.336v2h1v-1.21c-0.009-0.569-0.207-1.090-0.534-1.505z"></path><path d="M8 0l-8 4 8 5 8-5-8-4z"></path><path d="M8 10l-5-3.33v1.71c0 0.91 2.94 3.62 5 3.62s5-2.71 5-3.62v-1.71z"></path></g>
<g id="vaadin:accessibility"><path d="M10.4 10h-0.5c0.1 0.3 0.1 0.7 0.1 1 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-2.1 1.6-3.8 3.7-4l-0.2-1c-2.6 0.4-4.5 2.4-4.5 5 0 2.8 2.2 5 5 5 2.4 0 4.4-1.7 4.9-3.9l-0.5-2.1z"></path><path d="M13.1 13l-1.1-5h-4.1l-0.2-1h3.3v-1h-3.5l-0.6-2.5c0.9-0.1 1.6-0.8 1.6-1.7 0-1-0.8-1.8-1.8-1.8s-1.7 0.8-1.7 1.8c0 0.6 0.3 1.2 0.8 1.5l1.3 5.7h4.1l1.2 5h2.6v-1h-1.9z"></path></g>
<g id="vaadin:accordion-menu"><path d="M0 4v8h16v-8h-16zM15 11h-14v-4h14v4z"></path><path d="M0 0h16v3h-16v-3z"></path><path d="M0 13h16v3h-16v-3z"></path></g>
<g id="vaadin:add-dock"><path d="M0 11v5h16v-5h-16zM12 15h-3v-3h3v3z"></path><path d="M12 7v-2c0-5-8-5-8-5s5 0 5 5v2h-2l3.5 3 3.5-3h-2z"></path></g>
<g id="vaadin:adjust"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM2 8c0-3.3 2.7-6 6-6v12c-3.3 0-6-2.7-6-6z"></path></g>
<g id="vaadin:adobe-flash"><path d="M0 0v16h16v-16h-16zM13 4.4c-3 0-3.3 2.6-3.3 2.6h1.3v2h-2.4c-1.8 5.8-5.6 5-5.6 5v-2.5c0 0 2.5 0.6 3.9-4 1.8-6.1 6.1-5.5 6.1-5.5v2.4z"></path></g>
<g id="vaadin:airplane"><path d="M12.3 6.5c0.5-0.5 0.9-0.8 1.2-1.1 1.6-1.6 3.2-4.1 2.2-5.1s-3.4 0.6-5 2.2c-0.3 0.3-0.6 0.7-1.1 1.2l-7-3.2c-0.7-0.3-1.5-0.2-2 0.3l-0.6 0.5 6.6 5.7c-1.3 1.6-2.7 3.1-3.4 4l-1.1-0.6c-0.5-0.3-1.2-0.3-1.6 0.2l-0.3 0.3 2.8 2.1 2 2.8 0.3-0.3c0.4-0.4 0.5-1.1 0.2-1.6l-0.5-1.1c0.9-0.7 2.4-2.1 4-3.4l5.7 6.6 0.5-0.5c0.5-0.5 0.6-1.3 0.3-2l-3.2-7z"></path></g>
<g id="vaadin:alarm"><path d="M8 5h-1v5h4v-1l-2.93 0.070-0.070-4.070z"></path><path d="M5.46 0.87c-0.387-0.522-1-0.856-1.692-0.856-0.41 0-0.793 0.118-1.117 0.321l-0.991 0.765c-0.41 0.384-0.666 0.929-0.666 1.534 0 0.496 0.172 0.951 0.459 1.31z"></path><path d="M14.34 1.1l-1-0.77c-0.315-0.198-0.698-0.316-1.108-0.316-0.692 0-1.305 0.334-1.688 0.85l3.996 3.076c0.287-0.356 0.46-0.813 0.46-1.312 0-0.602-0.253-1.145-0.659-1.528z"></path><path d="M12.87 14c1.308-1.268 2.122-3.038 2.13-4.998-0.028-3.856-3.145-6.973-6.997-7.002-3.857 0.028-6.975 3.145-7.003 6.997 0.008 1.965 0.822 3.735 2.128 5.001l-0.938 0.942c-0.075 0.102-0.12 0.231-0.12 0.37 0 0.348 0.282 0.63 0.63 0.63 0.139 0 0.268-0.045 0.372-0.122l0.998-0.999c1.092 0.758 2.446 1.211 3.905 1.211s2.813-0.453 3.928-1.226l0.977 1.015c0.102 0.075 0.231 0.12 0.37 0.12 0.348 0 0.63-0.282 0.63-0.63 0-0.139-0.045-0.268-0.122-0.372zM2.87 9c0.028-2.822 2.308-5.102 5.127-5.13 2.825 0.028 5.105 2.308 5.133 5.127-0.028 2.825-2.308 5.105-5.127 5.133-2.825-0.028-5.105-2.308-5.133-5.127z"></path></g>
<g id="vaadin:align-center"><path d="M5 0h6v3h-6v-3z"></path><path d="M1 4h14v3h-14v-3z"></path><path d="M3 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:align-justify"><path d="M0 0h16v3h-16v-3z"></path><path d="M0 4h16v3h-16v-3z"></path><path d="M0 12h16v3h-16v-3z"></path><path d="M0 8h16v3h-16v-3z"></path></g>
<g id="vaadin:align-left"><path d="M0 0h11v3h-11v-3z"></path><path d="M0 4h15v3h-15v-3z"></path><path d="M0 8h13v3h-13v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:align-right"><path d="M5 0h11v3h-11v-3z"></path><path d="M1 4h15v3h-15v-3z"></path><path d="M3 8h13v3h-13v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:alt-a"><path d="M14 7v-1h-1v-1h-1v1h-0.5v1h0.5v3.56c0 1 0.56 1.44 2 1.44v-1c-0.055 0.012-0.119 0.019-0.185 0.019-0.359 0-0.669-0.21-0.813-0.514l-0.002-3.505h1z"></path><path d="M9 3h1v9h-1v-9z"></path><path d="M3 12l0.57-2h2.82l0.61 2h1l-2.27-8h-1.46l-2.27 8h1zM5 5.1l1.11 3.9h-2.22z"></path></g>
<g id="vaadin:alt"><path d="M3.89 9h2.22l-1.11-3.9-1.11 3.9z"></path><path d="M0 0v16h16v-16h-16zM7 12l-0.61-2h-2.78l-0.61 2h-1l2.27-8h1.46l2.27 8h-1zM10 12h-1v-9h1v9zM14 7h-1v3.5s0 0.5 1 0.5v1c-1 0-2-0.44-2-1.44v-3.56h-0.5v-1h0.5v-1h1v1h1v1z"></path></g>
<g id="vaadin:ambulance"><path d="M6.18 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M14 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M5 6h-1v1h-1v1h1v1h1v-1h1v-1h-1v-1z"></path><path d="M15.76 8.64l-3-4.53c-0.455-0.673-1.215-1.11-2.078-1.11-0.008 0-0.015 0-0.023 0l-2.659-0v-1c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h-4.5c-0.828 0-1.5 0.672-1.5 1.5v8.5h1.37c0.474-1.135 1.546-1.931 2.812-2 1.278 0.072 2.345 0.868 2.81 1.978l2.188 0.021c0.474-1.135 1.546-1.931 2.812-2 1.303 0.003 2.405 0.827 2.822 1.979l1.187 0.021v-3.57c-0.001-0.294-0.090-0.568-0.243-0.795zM6.92 8.12c-0.266 1.117-1.255 1.935-2.435 1.935-1.381 0-2.5-1.119-2.5-2.5 0-1.18 0.818-2.17 1.918-2.432 0.195-0.049 0.399-0.075 0.609-0.075 1.37 0 2.48 1.11 2.48 2.48 0 0.21-0.026 0.414-0.075 0.609zM10 8v-3h0.85c0.003-0 0.006-0 0.009-0 0.777 0 1.461 0.394 1.866 0.992l1.325 2.008z"></path></g>
<g id="vaadin:anchor"><path d="M13 9v2c0 0-0.8 1.7-4 1.9v-6.9h2.2c0.2 0.3 0.5 0.5 0.8 0.5 0.6 0 1-0.4 1-1s-0.4-1-1-1c-0.4 0-0.7 0.2-0.8 0.5h-2.2v-1.3c0.6-0.3 1-1 1-1.7 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v1.3h-2.2c-0.1-0.3-0.4-0.5-0.8-0.5-0.6 0-1 0.4-1 1s0.4 1 1 1c0.4 0 0.7-0.2 0.8-0.5h2.2v7c-3.3-0.3-4-2-4-2v-2h-3c0 0 2.8 7 8 7 5 0 8-7 8-7h-3zM8 1c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1 0.4-1 1-1z"></path></g>
<g id="vaadin:angle-double-down"><path d="M3 2v2l5 5 5-5v-2l-5 5z"></path><path d="M3 7v2l5 5 5-5v-2l-5 5z"></path></g>
<g id="vaadin:angle-double-left"><path d="M14 3h-2l-5 5 5 5h2l-5-5z"></path><path d="M9 3h-2l-5 5 5 5h2l-5-5z"></path></g>
<g id="vaadin:angle-double-right"><path d="M2 13h2l5-5-5-5h-2l5 5z"></path><path d="M7 13h2l5-5-5-5h-2l5 5z"></path></g>
<g id="vaadin:angle-double-up"><path d="M13 14v-2l-5-5-5 5v2l5-5z"></path><path d="M13 9v-2l-5-5-5 5v2l5-5z"></path></g>
<g id="vaadin:angle-down"><path d="M13 4v2l-5 5-5-5v-2l5 5z"></path></g>
<g id="vaadin:angle-left"><path d="M12 13h-2l-5-5 5-5h2l-5 5z"></path></g>
<g id="vaadin:angle-right"><path d="M4 13h2l5-5-5-5h-2l5 5z"></path></g>
<g id="vaadin:angle-up"><path d="M3 12v-2l5-5 5 5v2l-5-5z"></path></g>
<g id="vaadin:archive"><path d="M0 1h16v3h-16v-3z"></path><path d="M1 5v11h14v-11h-14zM11 9h-6v-2h6v2z"></path></g>
<g id="vaadin:archives"><path d="M11 2h-6v4h6v-4zM9 4h-2v-1h2v1z"></path><path d="M3 0v16h2v-1h6v1h2v-16h-10zM12 14h-8v-6h8v6zM12 7h-8v-6h8v6z"></path><path d="M11 9h-6v4h6v-4zM9 11h-2v-1h2v1z"></path></g>
<g id="vaadin:area-select"><path d="M7.9 7.9l2.1 7.5 1.7-2.6 3.2 3.2 1.1-1.1-3.3-3.2 2.7-1.6z"></path><path d="M8 12h-7v-9h12v5.4l1 0.2v-6.6h-14v11h8.2z"></path></g>
<g id="vaadin:arrow-backward"><path d="M0 7.9l6-4.9v3c0 0 1.1 0 2 0 8 0 8 8 8 8s-1-4-7.8-4c-1.1 0-1.8 0-2.2 0v2.9l-6-5z"></path></g>
<g id="vaadin:arrow-circle-down-o"><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path><path d="M9 9.6l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8v-6.6h2v6.6z"></path></g>
<g id="vaadin:arrow-circle-down"><path d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8c-4.4 0-8 3.6-8 8zM9 9.6l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8v-6.6h2v6.6z"></path></g>
<g id="vaadin:arrow-circle-left-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6.4 9l1.8 1.8-1.4 1.4-4.2-4.2 4.2-4.2 1.4 1.4-1.8 1.8h6.6v2h-6.6z"></path></g>
<g id="vaadin:arrow-circle-left"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6.4 9l1.8 1.8-1.4 1.4-4.2-4.2 4.2-4.2 1.4 1.4-1.8 1.8h6.6v2h-6.6z"></path></g>
<g id="vaadin:arrow-circle-right-o"><path d="M8 15c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zM8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8v0z"></path><path d="M9.6 7l-1.8-1.8 1.4-1.4 4.2 4.2-4.2 4.2-1.4-1.4 1.8-1.8h-6.6v-2h6.6z"></path></g>
<g id="vaadin:arrow-circle-right"><path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM9.6 7l-1.8-1.8 1.4-1.4 4.2 4.2-4.2 4.2-1.4-1.4 1.8-1.8h-6.6v-2h6.6z"></path></g>
<g id="vaadin:arrow-circle-up-o"><path d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4.4 3.6 8 8 8s8-3.6 8-8v0z"></path><path d="M7 6.4l-1.8 1.8-1.4-1.4 4.2-4.2 4.2 4.2-1.4 1.4-1.8-1.8v6.6h-2v-6.6z"></path></g>
<g id="vaadin:arrow-circle-up"><path d="M16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zM7 6.4l-1.8 1.8-1.4-1.4 4.2-4.2 4.2 4.2-1.4 1.4-1.8-1.8v6.6h-2v-6.6z"></path></g>
<g id="vaadin:arrow-down"><path d="M12.5 8.6l-3.5 3.6v-12.2h-2v12.2l-3.5-3.6-1.4 1.5 5.9 5.9 5.9-5.9z"></path></g>
<g id="vaadin:arrow-forward"><path d="M16 7.9l-6-4.9v3c-0.5 0-1.1 0-2 0-8 0-8 8-8 8s1-4 7.8-4c1.1 0 1.8 0 2.2 0v2.9l6-5z"></path></g>
<g id="vaadin:arrow-left"><path d="M7.4 12.5l-3.6-3.5h12.2v-2h-12.2l3.6-3.5-1.5-1.4-5.9 5.9 5.9 5.9z"></path></g>
<g id="vaadin:arrow-long-down"><path d="M7 1h2v11h2l-3 3-3-3h2z"></path></g>
<g id="vaadin:arrow-long-left"><path d="M15 7v2h-11v2l-3-3 3-3v2z"></path></g>
<g id="vaadin:arrow-right"><path d="M8.6 3.5l3.5 3.5h-12.1v2h12.1l-3.5 3.5 1.4 1.4 6-5.9-6-5.9z"></path></g>
<g id="vaadin:arrow-up"><path d="M3.4 7.4l3.6-3.6v12.2h2v-12.2l3.5 3.6 1.4-1.5-5.9-5.9-6 5.9z"></path></g>
<g id="vaadin:arrows-cross"><path d="M15 5v-4h-4l1.3 1.3-4.3 4.3-4.3-4.3 1.3-1.3h-4v4l1.3-1.3 4.3 4.3-4.3 4.3-1.3-1.3v4h4l-1.3-1.3 4.3-4.3 4.3 4.3-1.3 1.3h4v-4l-1.3 1.3-4.3-4.3 4.3-4.3z"></path></g>
<g id="vaadin:arrows-long-h"><path d="M16 8l-3-3v2h-10v-2l-3 3 3 3v-2h10v2z"></path></g>
<g id="vaadin:arrows-long-right"><path d="M1 9v-2h11v-2l3 3-3 3v-2z"></path></g>
<g id="vaadin:arrows-long-up"><path d="M9 15h-2v-11h-2l3-3 3 3h-2z"></path></g>
<g id="vaadin:arrows-long-v"><path d="M9 3h2l-3-3-3 3h2v10h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:arrows"><path d="M16 8l-3-3v2h-4v-4h2l-3-3-3 3h2v4h-4v-2l-3 3 3 3v-2h4v4h-2l3 3 3-3h-2v-4h4v2z"></path></g>
<g id="vaadin:asterisk"><path d="M15.9 5.7l-2-3.4-3.9 2.2v-4.5h-4v4.5l-4-2.2-2 3.4 3.9 2.3-3.9 2.3 2 3.4 4-2.2v4.5h4v-4.5l3.9 2.2 2-3.4-4-2.3z"></path></g>
<g id="vaadin:at"><path d="M7.5 12.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2c0.1 2.3-1.9 4.2-4.2 4.2zM7.5 5.2c-1.5 0-2.7 1.3-2.7 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.4-2.8-2.9-2.8z"></path><path d="M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8c0 1.5-0.4 3-1.2 4.2-0.3 0.5-1.1 1.2-2.3 1.2-0.8 0-1.3-0.3-1.6-0.6-0.7-0.7-0.6-1.8-0.6-1.9v-6.9h1.5v7c0 0.2 0 0.6 0.2 0.8 0 0 0.2 0.2 0.5 0.2 0.7 0 1.1-0.5 1.1-0.5 0.6-1 1-2.2 1-3.4 0-3.6-2.9-6.5-6.5-6.5s-6.6 2.8-6.6 6.4 2.9 6.5 6.5 6.5c0.7 0 1.3-0.1 1.9-0.3l0.4 1.4c-0.7 0.3-1.5 0.4-2.3 0.4z"></path></g>
<g id="vaadin:automation"><path d="M14 12c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M11.7 16v0c-0.8 0-1.6-0.2-2.3-0.7l-6.2-3.3c-0.5-0.4-0.9-0.6-1.3-1-1.2-1.2-1.9-2.9-1.9-4.6s0.7-3.3 1.9-4.5c1.2-1.2 2.8-1.9 4.5-1.9s3.3 0.7 4.6 1.9c0.4 0.4 0.6 0.7 1 1.2l3.5 6.4c1 1.7 0.7 3.8-0.7 5.2-0.9 0.9-1.9 1.3-3.1 1.3zM6.4 1c-1.4 0-2.8 0.6-3.8 1.6s-1.6 2.4-1.6 3.8c0 1.5 0.6 2.8 1.6 3.8 0.3 0.3 0.6 0.5 1.1 0.8l6.3 3.4c0.6 0.4 1.2 0.5 1.8 0.5v0c0.9 0 1.7-0.3 2.3-1 1.1-1.1 1.3-2.7 0.5-4l-3.5-6.4c-0.3-0.4-0.5-0.7-0.8-1-1.1-0.9-2.4-1.5-3.9-1.5z"></path><path d="M11 7v-1l-1.4-0.5c-0.1-0.2-0.1-0.3-0.2-0.5l0.6-1.3-0.7-0.7-1.3 0.6c-0.2-0.1-0.3-0.1-0.5-0.2l-0.5-1.4h-1l-0.5 1.4c-0.2 0.1-0.3 0.1-0.5 0.2l-1.3-0.6-0.7 0.7 0.6 1.3c-0.1 0.2-0.1 0.3-0.2 0.5l-1.4 0.5v1l1.4 0.5c0.1 0.2 0.1 0.3 0.2 0.5l-0.6 1.3 0.7 0.7 1.3-0.6c0.2 0.1 0.3 0.2 0.5 0.2l0.5 1.4h1l0.5-1.4c0.2-0.1 0.3-0.1 0.5-0.2l1.3 0.6 0.7-0.7-0.6-1.3c0.1-0.2 0.2-0.3 0.2-0.5l1.4-0.5zM6.5 8c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z"></path></g>
<g id="vaadin:backspace-a"><path d="M5 12l-5-4 5-4v2h11v4h-11v2z"></path></g>
<g id="vaadin:backspace"><path d="M0 2v12h16v-12h-16zM13 9h-7v2l-3-3 3-3v2h7v2z"></path></g>
<g id="vaadin:backwards"><path d="M16 15v-14l-8 7z"></path><path d="M8 15v-14l-8 7z"></path></g>
<g id="vaadin:ban"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 2c1.3 0 2.5 0.4 3.5 1.1l-8.4 8.4c-0.7-1-1.1-2.2-1.1-3.5 0-3.3 2.7-6 6-6zM8 14c-1.3 0-2.5-0.4-3.5-1.1l8.4-8.4c0.7 1 1.1 2.2 1.1 3.5 0 3.3-2.7 6-6 6z"></path></g>
<g id="vaadin:bar-chart-h"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M2 8h4v6h-4v-6z"></path><path d="M7 2h4v12h-4v-12z"></path><path d="M12 6h4v8h-4v-8z"></path></g>
<g id="vaadin:bar-chart-v"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M8 0v4h-6v-4h6z"></path><path d="M14 5v4h-12v-4h12z"></path><path d="M10 10v4h-8v-4h8z"></path></g>
<g id="vaadin:bar-chart"><path d="M0 15h15v1h-15v-1z"></path><path d="M0 11h3v3h-3v-3z"></path><path d="M4 9h3v5h-3v-5z"></path><path d="M8 5h3v9h-3v-9z"></path><path d="M12 0h3v14h-3v-14z"></path></g>
<g id="vaadin:barcode"><path d="M0 3h1v10h-1v-10z"></path><path d="M8 3h2v10h-2v-10z"></path><path d="M11 3h1v10h-1v-10z"></path><path d="M13 3h1v10h-1v-10z"></path><path d="M15 3h1v10h-1v-10z"></path><path d="M2 3h3v10h-3v-10z"></path><path d="M6 3h1v10h-1v-10z"></path></g>
<g id="vaadin:bed"><path d="M4.28 7h2.72l-1.15-1.68c-0.542-0.725-1.36-1.216-2.295-1.319l-0.555-0.001v1.54c-0.011 0.063-0.018 0.136-0.018 0.211 0 0.69 0.56 1.25 1.25 1.25 0.017 0 0.034-0 0.050-0.001z"></path><path d="M13 7v-0.28c0-0.003 0-0.007 0-0.010 0-0.934-0.749-1.693-1.678-1.71l-4.692-0c0.5 0.62 1.37 2 1.37 2h5z"></path><path d="M15 5.1c-0.552 0-1 0.448-1 1v1.9h-12v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v9h2v-2h12v2h2v-6.9c0-0.552-0.448-1-1-1z"></path></g>
<g id="vaadin:bell-o"><path d="M12.7 11.4c-0.5-0.2-0.7-0.7-0.7-1.2v-5.2c0 0 0-2.4-3-2.9v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-3 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v2h4c0 0-0.1 2 2 2s2-2 2-2h4v-2l-1.3-0.6zM13 13h-10v-0.4l0.7-0.4c0.8-0.3 1.3-1.1 1.3-2v-5.2c0-0.1 0-1.6 2.2-1.9l0.8-0.2 0.8 0.1c2 0.4 2.2 1.7 2.2 2v5.2c0 0.9 0.5 1.7 1.3 2.1l0.7 0.4v0.3z"></path></g>
<g id="vaadin:bell-slash-o"><path d="M15.2 0l-3.6 3.6c-0.4-0.6-1.2-1.3-2.6-1.5v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-3 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1.3l-2 2v0.7h0.7l15.3-15.4v-0.6h-0.8zM5 10.3c0-0.1 0-0.1 0 0v-5.3c0-0.1 0.1-1.6 2.2-1.9l0.8-0.2 0.8 0.1c1.2 0.2 1.8 0.8 2 1.3l-5.8 6z"></path><path d="M12 10.2v-4.6l-1 1v3.5c0 0.9 0.5 1.7 1.3 2.1l0.7 0.4v0.4h-8.3l-1 1h2.4c0 0-0.1 2 2 2s2-2 2-2h3.9v-2l-1.3-0.6c-0.4-0.3-0.7-0.7-0.7-1.2z"></path></g>
<g id="vaadin:bell-slash"><path d="M15.2 0l-3.6 3.6c-0.5-0.6-1.2-1.3-2.6-1.5v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-2.8 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1h0.3l-2.3 2.3v0.7h0.7l15.3-15.4v-0.6h-0.8zM6 4.8v4.5l-1 1v-5.3c0 0 0-0.8 0.7-1.4 0.7-0.7 1.3-0.6 1.3-0.6s-1 0.7-1 1.8z"></path><path d="M8 16c2.1 0 2-2 2-2h-4c0 0-0.1 2 2 2z"></path><path d="M12 10.2v-4.6l-6 6-0.3 0.4-1 1h9.3v-1l-1.3-0.6c-0.4-0.3-0.7-0.7-0.7-1.2z"></path></g>
<g id="vaadin:bell"><path d="M6 14h4c0 0 0.1 2-2 2s-2-2-2-2z"></path><path d="M12.7 11.4c-0.5-0.2-0.7-0.7-0.7-1.2v-5.2c0 0-0.2-2.4-3-2.9v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-2.8 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1h12v-1l-1.3-0.6zM6 4.8v7.2h-2c0.8 0 1-1 1-1v-6c0 0 0-0.8 0.7-1.4 0.7-0.7 1.3-0.6 1.3-0.6s-1 0.7-1 1.8z"></path></g>
<g id="vaadin:boat"><path d="M1.5 9.6c1.1 0.7 2.5 1.9 2.5 3.3 0 0.4 0 0.7 0 1.1 0 0 0.1 0 0.1 0s0.9 0 2-1c1 1 2 1 2 1s1 0 2-1c1 1 1.9 1 1.9 1s0.1 0 0.1 0c0-0.3 0-0.7 0-1.1 0-1.4 1.4-2.6 2.5-3.3 0.6-0.4 0.5-1.2-0.2-1.4l-1.4-0.4v-3.8h-1v-1h-3v-2h-2v2h-3v1h-1v3.8l-1.3 0.4c-0.8 0.2-0.8 1-0.2 1.4zM4 5h1v-1h6v1h1v2.5l-3.3-1c-0.5-0.1-1-0.1-1.5 0l-3.2 1v-2.5z"></path><path d="M14 14c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1v1h16v-1c0 0-1 0-2-1z"></path></g>
<g id="vaadin:bold"><path d="M11 7.5c0 0 2-0.8 2-3.6 0-4.1-5.1-3.9-7-3.9h-4v16h4c3.7 0 8 0 8-4.4 0-3.8-3-4.1-3-4.1zM9 4.4c0 1.8-1.5 1.6-3 1.6v-3c1.8 0 3 0.1 3 1.4zM6 13v-4c1.8 0 4-0.3 4 2.2 0 1.9-2.5 1.8-4 1.8z"></path></g>
<g id="vaadin:bolt"><path d="M7.99 0l-7.010 9.38 6.020-0.42-4.96 7.040 12.96-10-7.010 0.47 7.010-6.47h-7.010z"></path></g>
<g id="vaadin:bomb"><path d="M12 1h1v1h-1v-1z"></path><path d="M12 5h1v1h-1v-1z"></path><path d="M14 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M14.6 2.1l0.7-0.7-0.7-0.7-1.4 1.4 0.7 0.7z"></path><path d="M13.9 4.2l-0.7 0.7 1.4 1.4 0.7-0.7-0.7-0.7z"></path><path d="M11.1 2.8l0.7-0.7-1.4-1.4-0.7 0.7 0.7 0.7z"></path><path d="M10.4 6.4l2-2-0.7-0.7-2 2-0.7-0.7-0.7 0.8c-0.8-0.5-1.8-0.8-2.8-0.8-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5c0-1-0.3-1.9-0.7-2.8l0.7-0.7-0.6-0.6zM6 7.2c-2 0-3.4 1.8-3.4 2.8h-1c0-2 2.4-3.8 4.4-3.8v1z"></path></g>
<g id="vaadin:book-dollar"><path d="M12.9 2.5c-1.6-1.2-1.4-2.5-1.4-2.5h-9.5v12.5c0 1.9 2.1 3.5 4 3.5h8v-13c0 0-0.8-0.2-1.1-0.5zM7 6.3c-0.9-0.3-2.3-0.8-2.3-1.9 0.1-0.8 1.3-1.4 1.3-1.6v-0.8h1v0.7c1 0.1 1.8 0.4 1.9 0.4l-0.3 0.9c0 0-0.7-0.3-1.5-0.3-0.7 0-1.1 0.3-1.2 0.8 0 0.3 0.5 0.6 1.3 0.9 1.5 0.5 1.9 1.1 1.9 1.9 0 0.7-0.1 1.6-2.1 1.8v0.9h-1v-0.8c0-0.1-1.4-0.5-1.5-0.5l0.5-0.9c0 0 1.1 0.5 2 0.4s1.3-0.6 1.3-1c0.1-0.3-0.4-0.6-1.3-0.9zM13 15h-7c-1 0-1.8-0.6-2-1.3-0.1-0.3 0-0.7 0.4-0.7h6.6v-10.3c1 0.6 2 1.1 2 1.3v11z"></path></g>
<g id="vaadin:book-percent"><path d="M12.6 2.5c-1.6-1.2-1.6-2.5-1.6-2.5h-9v12.5c0 1.9 1.6 3.5 3.5 3.5h8.5v-13c0 0-1-0.2-1.4-0.5zM5.5 3.2c0.8 0 1.5 0.7 1.5 1.6s-0.7 1.4-1.5 1.4-1.5-0.6-1.5-1.4 0.7-1.6 1.5-1.6zM9 3h1l-5 7h-1l5-7zM10 8.5c0 0.8-0.7 1.5-1.5 1.5s-1.5-0.7-1.5-1.5 0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5zM13 15h-7.5c-1 0-1.8-0.6-2-1.3-0.1-0.4 0-0.7 0.4-0.7h7.1v-10.3c0 0.6 1 1.1 2 1.3v11z"></path><path d="M9 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path><path d="M6 4.8c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></g>
<g id="vaadin:book"><path d="M12.6 2.5c-1.6-1.2-1.6-2.5-1.6-2.5h-9v12.5c0 1.9 1.6 3.5 3.5 3.5h8.5v-13c0 0-1-0.2-1.4-0.5zM4 2h5v2h-5v-2zM13 15h-7.5c-1 0-1.8-0.6-2-1.3-0.1-0.4 0-0.7 0.4-0.7h7.1v-10.3c0.4 0.6 1.2 1.1 2 1.3v11z"></path></g>
<g id="vaadin:bookmark-o"><path d="M3 0v16l5-5 5 5v-16h-10zM12 13.7l-4-3.9-4 3.9v-10.7h8v10.7zM12 2h-8v-1h8v1z"></path></g>
<g id="vaadin:bookmark"><path d="M3 0v0 1h10l0.1-1z"></path><path d="M3 2h10v14l-5-5-5 5z"></path></g>
<g id="vaadin:briefcase"><path d="M11 3v-2h-6v2h-5v12h16v-12h-5zM10 3h-4v-1h4v1z"></path></g>
<g id="vaadin:browser"><path d="M15 1v-1h-15v15h1v1h15v-15h-1zM3 1h9v1h-9v-1zM1 1h1v1h-1v-1zM1 3h13v11h-13v-11z"></path></g>
<g id="vaadin:bug-o"><path d="M13 8v-1c1.216-1.124 1.981-2.721 2-4.497 0-0.28-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c-0.018 1.112-0.431 2.125-1.105 2.906-0.876 0.978-2.15 1.594-3.569 1.594-0.020 0-0.040-0-0.059-0l-2.537 0c-0.022 0-0.049 0.001-0.075 0.001-1.414 0-2.684-0.612-3.561-1.586-0.669-0.781-1.079-1.793-1.094-2.901-0-0.279-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c0.022 1.776 0.786 3.368 1.996 4.486l0.004 1.004c-3 0.060-3 1.42-3 3.47 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.72 0-2.4 2-2.47 0.031 1.11 0.245 2.161 0.612 3.136-0.383 0.006-0.696 0.176-0.942 0.414-0.445 0.624-0.711 1.402-0.711 2.242 0 0.2 0.015 0.397 0.044 0.589l-0.003 0.118c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c-0.022-0.144-0.035-0.311-0.035-0.48 0-0.587 0.154-1.139 0.424-1.616 0.165-0.152 0.401-0.257 0.66-0.264 0.681 1.007 1.714 1.731 2.92 1.994l0.031-0.994h2v1c1.237-0.269 2.271-0.993 2.939-1.983 0.013-0.017 0.016-0.017 0.019-0.017 0.254 0 0.486 0.095 0.663 0.251 0.262 0.462 0.418 1.015 0.418 1.605 0 0.178-0.014 0.352-0.041 0.522l0.002 0.121c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c0.025-0.165 0.039-0.356 0.039-0.551 0-0.839-0.266-1.616-0.717-2.251-0.238-0.226-0.551-0.396-0.9-0.466 0.336-0.917 0.55-1.975 0.578-3.080 2-0.012 2 0.708 2 2.458 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.030 0-3.39-3-3.47zM6 13.5c-0.44-0.253-0.805-0.589-1.083-0.989l-0.247-0.411-0.15-0.39c-0.302-0.802-0.49-1.73-0.52-2.697l-0-0.013v-1.65c0.578 0.326 1.254 0.556 1.973 0.647l0.027 5.573zM9 13h-2v-1h2v1zM9 11h-2v-1h2v1zM9 9h-2v-1h2v1zM12 9c-0.030 0.98-0.218 1.908-0.54 2.77l-0.13 0.33-0.24 0.4c-0.285 0.411-0.65 0.747-1.074 0.992l-0.016-5.492c0.743-0.081 1.421-0.297 2.029-0.624l-0.029 1.624z"></path><path d="M8 6.2c1.433-0.018 2.767-0.429 3.903-1.129 0.046-0.036 0.098-0.126 0.098-0.229 0-0.008-0-0.016-0.001-0.023-0.066-1.142-0.781-2.103-1.781-2.522-0.137-0.050-0.219-0.16-0.219-0.29 0-0.002 0-0.005 0-0.008v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.2c0 0.166-0.134 0.3-0.3 0.3 0 0 0 0 0 0h-1.4c-0.166 0-0.3-0.134-0.3-0.3v-1.2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5c-0.006 0.125-0.086 0.229-0.198 0.269-1.026 0.43-1.744 1.4-1.802 2.544-0.001 0.014-0.001 0.021-0.001 0.029 0 0.102 0.051 0.193 0.13 0.247 0.959 0.703 2.161 1.125 3.462 1.125 0.144 0 0.287-0.005 0.428-0.015zM10 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM6 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></path></g>
<g id="vaadin:bug"><path d="M8 6.2c1.433-0.018 2.767-0.429 3.903-1.129 0.046-0.036 0.098-0.126 0.098-0.229 0-0.008-0-0.016-0.001-0.023-0.066-1.142-0.781-2.103-1.781-2.522-0.137-0.050-0.219-0.16-0.219-0.29 0-0.002 0-0.005 0-0.008v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.2c0 0.166-0.134 0.3-0.3 0.3 0 0 0 0 0 0h-1.4c-0.166 0-0.3-0.134-0.3-0.3v-1.2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5c-0.006 0.125-0.086 0.229-0.198 0.269-1.026 0.43-1.744 1.4-1.802 2.544-0.001 0.014-0.001 0.021-0.001 0.029 0 0.102 0.051 0.193 0.13 0.247 0.959 0.703 2.161 1.125 3.462 1.125 0.144 0 0.287-0.005 0.428-0.015zM10 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM6 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></path><path d="M13 8v-1c1.216-1.124 1.981-2.721 2-4.497 0-0.28-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c-0.018 1.112-0.431 2.125-1.105 2.906-0.876 0.978-2.15 1.594-3.569 1.594-0.020 0-0.040-0-0.059-0l-2.537 0c-0.022 0-0.049 0.001-0.075 0.001-1.414 0-2.684-0.612-3.561-1.586-0.669-0.781-1.079-1.793-1.094-2.901-0-0.279-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c0.022 1.776 0.786 3.368 1.996 4.486l0.004 1.004c-3 0.060-3 1.42-3 3.47 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.72 0-2.4 2-2.47 0.031 1.11 0.245 2.161 0.612 3.136-0.383 0.006-0.696 0.176-0.942 0.414-0.445 0.624-0.711 1.402-0.711 2.242 0 0.2 0.015 0.397 0.044 0.589l-0.003 0.118c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c-0.022-0.144-0.035-0.311-0.035-0.48 0-0.587 0.154-1.139 0.424-1.616 0.165-0.152 0.401-0.257 0.66-0.264 0.588 1.095 1.667 1.859 2.934 1.998l0.017-0.998h2v1c1.284-0.141 2.364-0.905 2.94-1.98 0.012-0.020 0.015-0.020 0.018-0.020 0.254 0 0.486 0.095 0.663 0.251 0.262 0.462 0.418 1.015 0.418 1.605 0 0.178-0.014 0.352-0.041 0.522l0.002 0.121c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c0.025-0.165 0.039-0.356 0.039-0.551 0-0.839-0.266-1.616-0.717-2.251-0.238-0.226-0.551-0.396-0.9-0.466 0.336-0.917 0.55-1.975 0.578-3.080 2-0.012 2 0.708 2 2.458 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.030 0-3.39-3-3.47zM9 13h-2v-1h2v1zM9 11h-2v-1h2v1zM9 9h-2v-1h2v1z"></path></g>
<g id="vaadin:building-o"><path d="M2 0v16h12v-16h-12zM13 15h-4v-3h-2v3h-4v-14h10v14z"></path><path d="M4 9h2v2h-2v-2z"></path><path d="M7 9h2v2h-2v-2z"></path><path d="M10 9h2v2h-2v-2z"></path><path d="M4 6h2v2h-2v-2z"></path><path d="M7 6h2v2h-2v-2z"></path><path d="M10 6h2v2h-2v-2z"></path><path d="M4 3h2v2h-2v-2z"></path><path d="M7 3h2v2h-2v-2z"></path><path d="M10 3h2v2h-2v-2z"></path></g>
<g id="vaadin:building"><path d="M3 0v16h4v-3h2v3h4v-16h-10zM6 12h-2v-2h2v2zM6 9h-2v-2h2v2zM6 6h-2v-2h2v2zM6 3h-2v-2h2v2zM9 12h-2v-2h2v2zM9 9h-2v-2h2v2zM9 6h-2v-2h2v2zM9 3h-2v-2h2v2zM12 12h-2v-2h2v2zM12 9h-2v-2h2v2zM12 6h-2v-2h2v2zM12 3h-2v-2h2v2z"></path></g>
<g id="vaadin:bullets"><path d="M0 2.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M0 7.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M0 12.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M5 1h11v3h-11v-3z"></path><path d="M5 6h11v3h-11v-3z"></path><path d="M5 11h11v3h-11v-3z"></path></g>
<g id="vaadin:bullseye"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 14.9c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z"></path><path d="M8 2.3c-3.2 0-5.7 2.5-5.7 5.7s2.6 5.7 5.7 5.7 5.7-2.6 5.7-5.7-2.5-5.7-5.7-5.7zM8 12.6c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6c0 2.5-2.1 4.6-4.6 4.6z"></path><path d="M8 4.6c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4c1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4z"></path></g>
<g id="vaadin:bus"><path d="M14.67 4h-0.67v-2c0-1.105-0.895-2-2-2h-8c-1.105 0-2 0.895-2 2v2h-0.68c-0 0-0 0-0 0-0.177 0-0.32 0.143-0.32 0.32 0 0.004 0 0.007 0 0.011l-0 2.339c-0 0.003-0 0.006-0 0.010 0 0.177 0.143 0.32 0.32 0.32 0 0 0 0 0 0h0.68v6c0 0.55 0 1 1 1v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5h4v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5c1 0 1-0.45 1-1v-6h0.67c0.182 0 0.33-0.148 0.33-0.33s-0.148-0.33-0.33-0.33c-0.182 0-0.33 0.148-0.33 0.33s0.148 0.33 0.33 0.33c0.182 0 0.33-0.148 0.33-0.33v-2.34c0-0.182-0.148-0.33-0.33-0.33 0 0 0 0 0 0zM6 1h4v1h-4v-1zM4 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM3 8v-5h10v5h-10zM12 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:button"><path d="M15.7 5.3l-1-1c-0.2-0.2-0.4-0.3-0.7-0.3h-13c-0.6 0-1 0.4-1 1v5c0 0.3 0.1 0.6 0.3 0.7l1 1c0.2 0.2 0.4 0.3 0.7 0.3h13c0.6 0 1-0.4 1-1v-5c0-0.3-0.1-0.5-0.3-0.7zM14 10h-13v-5h13v5z"></path></g>
<g id="vaadin:calc-book"><path d="M11.9 0c-1.3 0-2 0.4-2.4 0.8-0.4-0.4-1.1-0.8-2.5-0.8-3.4 0-4 2-4 2v0 0 4h-3v10h7v-4.6l1.5-0.2c0 0 0.2-0.3 0.3 0.7h1.3c0.1-1 0.4-0.7 0.4-0.7l5.5 0.7v-9.8c0 0-0.6-2.1-4.1-2.1zM1 7h5v2h-5v-2zM6 10v1h-1v-1h1zM4 10v1h-1v-1h1zM2 15h-1v-1h1v1zM2 13h-1v-1h1v1zM2 11h-1v-1h1v1zM4 15h-1v-1h1v1zM4 13h-1v-1h1v1zM6 15h-1v-1h1v1zM6 13h-1v-1h1v1zM9 9.5c-0.9-0.1-1.3-0.3-2-0.3v-3.2h-3v-3.9c0-0.4 0.8-1.5 3-1.5 1.8 0 1.9 0.8 1.9 1 0 0 0 0 0 0v7.9zM15 9.9c-1-0.4-1.1-0.7-2.5-0.7-0.1 0-0.2 0-0.2 0-1 0-1.3 0.2-2.3 0.4v-7.6c0 0 0-0.1 0-0.1s0-0.1 0-0.1c0-0.2 0.2-1.1 1.9-1.1 2.3 0 3.1 0.9 3.1 1.4v7.8z"></path></g>
<g id="vaadin:calc"><path d="M9 3h6v2h-6v-2z"></path><path d="M9 11h6v2h-6v-2z"></path><path d="M5 1h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path><path d="M7 10.4l-1.4-1.4-1.6 1.6-1.6-1.6-1.4 1.4 1.6 1.6-1.6 1.6 1.4 1.4 1.6-1.6 1.6 1.6 1.4-1.4-1.6-1.6z"></path><path d="M13 14.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M13 9.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:calendar-briefcase"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M13 1v3h-3v-3h-5v3h-3v-3h-2v14h5v-1h-4v-8h13v3h1v-8z"></path><path d="M13 10v-2h-4v2h-3v6h10v-6h-3zM10 9h2v1h-2v-1z"></path></g>
<g id="vaadin:calendar-clock"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M6.6 14h-5.6v-8h13v0.6c0.4 0.2 0.7 0.4 1 0.7v-6.3h-2v3h-3v-3h-5v3h-3v-3h-2v14h7.3c-0.3-0.3-0.5-0.6-0.7-1z"></path><path d="M14 12h-3v-3h1v2h2z"></path><path d="M11.5 8c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5zM11.5 7c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5v0z"></path></g>
<g id="vaadin:calendar-envelope"><path d="M3 0h1v2h-1v-2z"></path><path d="M9 0h1v2h-1v-2z"></path><path d="M13 7v-6h-2v2h-3v-2h-3v2h-3v-2h-2v12h4v3h12v-9h-3zM4 12h-3v-7h11v2h-8v5zM5 10.2l2.6 1.5-2.6 2.6v-4.1zM5.7 15l2.8-2.8 1.5 0.9 1.5-0.8 2.8 2.8h-8.6zM15 14.3l-2.6-2.6 2.6-1.4v4zM15 9.2l-5 2.7-5-2.9v-1h10v1.2zM15.4 9.6v0 0 0z"></path></g>
<g id="vaadin:calendar-o"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM15 15h-14v-9h14v9z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path></g>
<g id="vaadin:calendar-user"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M9 14.1c0-0.1 0-0.1 0 0l-8-0.1v-8h13v1.2c0.4 0.1 0.7 0.3 1 0.6v-6.8h-2v3h-3v-3h-5v3h-3v-3h-2v14h9v-0.9z"></path><path d="M15 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M13.9 12h-1.8c-1.1 0-2.1 0.9-2.1 2.1v1.9h6v-1.9c0-1.2-0.9-2.1-2.1-2.1z"></path></g>
<g id="vaadin:calendar"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM3 15h-2v-2h2v2zM3 12h-2v-2h2v2zM3 9h-2v-2h2v2zM6 15h-2v-2h2v2zM6 12h-2v-2h2v2zM6 9h-2v-2h2v2zM9 15h-2v-2h2v2zM9 12h-2v-2h2v2zM9 9h-2v-2h2v2zM12 15h-2v-2h2v2zM12 12h-2v-2h2v2zM12 9h-2v-2h2v2zM15 15h-2v-2h2v2zM15 12h-2v-2h2v2zM15 9h-2v-2h2v2z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path></g>
<g id="vaadin:camera"><path d="M11 9c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path><path d="M11 4v-3h-6v3h-5v9h5c0.8 0.6 1.9 1 3 1s2.2-0.4 3-1h5v-9h-5zM6 2h4v2h-4v-2zM8 13c-2.2 0-4-1.8-4-4s1.8-4 4-4c2.2 0 4 1.8 4 4s-1.8 4-4 4zM15 6h-2v-1h2v1z"></path></g>
<g id="vaadin:car"><path d="M15 6.1l-1.4-2.9c-0.4-0.7-1.1-1.2-1.9-1.2h-7.4c-0.8 0-1.5 0.5-1.9 1.2l-1.4 2.9c-0.6 0.1-1 0.6-1 1.1v3.5c0 0.6 0.4 1.1 1 1.2v2c0 0.6 0.5 1.1 1.1 1.1h0.9c0.5 0 1-0.5 1-1.1v-1.9h8v1.9c0 0.6 0.5 1.1 1.1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-2c0.6-0.1 1-0.6 1-1.2v-3.5c-0.1-0.5-0.5-1-1.1-1.1zM4 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8zM10 11h-4v-1h4v1zM2.1 6l1.2-2.4c0.2-0.4 0.6-0.6 1-0.6h7.4c0.4 0 0.8 0.2 1 0.6l1.2 2.4h-11.8zM15 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8z"></path></g>
<g id="vaadin:caret-down"><path d="M3 4h10l-5 7z"></path></g>
<g id="vaadin:caret-left"><path d="M11 3v10l-7-5z"></path></g>
<g id="vaadin:caret-right"><path d="M5 13v-10l7 5z"></path></g>
<g id="vaadin:caret-square-down-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M4 6h8l-4 5z"></path></g>
<g id="vaadin:caret-square-left-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M10 4v8l-5-4z"></path></g>
<g id="vaadin:caret-square-right-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M5.9 12v-8l5 4z"></path></g>
<g id="vaadin:caret-square-up-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M12 10h-8l4-5z"></path></g>
<g id="vaadin:caret-up"><path d="M13 12h-10l5-7z"></path></g>
<g id="vaadin:cart-o"><path d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4 0.9-1.2-4.9z"></path></g>
<g id="vaadin:cart"><path d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4z"></path></g>
<g id="vaadin:cash"><path d="M16 14h-14v-1h13v-7h1v8z"></path><path d="M13 4v7h-12v-7h12zM14 3h-14v9h14v-9z"></path><path d="M3 6h-1v3h1v1h4c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5h-4v1z"></path><path d="M11 6v-1h-4c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5h4v-1h1v-3h-1z"></path></g>
<g id="vaadin:chart-3d"><path d="M12 4v-2l-4-2-4 2v1l-4 2v5l12 6 4-2v-8zM4 10.88l-3-1.5v-3.3l3 1.53v3.27zM4 6.49l-2.34-1.2 2.34-1.17v2.37zM8 12.88l-3-1.5v-8.31l3 1.54v8.27zM5.66 2.29l2.34-1.17 2.34 1.17-2.34 1.2zM12 14.88l-3-1.5v-6.31l3 1.54v6.27zM12 7.49l-2.34-1.2 2.34-1.17 2.34 1.17z"></path></g>
<g id="vaadin:chart-grid"><path d="M0 9v7h16v-7h-16zM5 15h-4v-1h4v1zM5 13h-4v-1h4v1zM5 11h-4v-1h4v1zM10 15h-4v-1h4v1zM10 13h-4v-1h4v1zM10 11h-4v-1h4v1zM15 15h-4v-1h4v1zM15 13h-4v-1h4v1zM15 11h-4v-1h4v1z"></path><path d="M16 8h-16v-8h1v7h15v1z"></path><path d="M15 1.57l-5.020 2.86-3.96-1.98-4.020 1.61v1.080l3.98-1.59 4.040 2.020 4.98-2.85v-1.15z"></path></g>
<g id="vaadin:chart-line"><path d="M0 16h16v-16h-1v2.6l-4 3.4v-6h-1v6.4l-4-0.9v-5.5h-1v5.7l-4 2.9v-8.6h-1zM5 14h-4v-1.7l4-2.9v4.6zM10 14h-4v-5.3l0.1-0.1 3.9 0.9v4.5zM15 14h-4v-4.3h0.1l3.9-3.2v7.5z"></path></g>
<g id="vaadin:chart-timeline"><path d="M16 13v-1h-15v-12h-1v13h5v2h-5v1h16v-1h-5v-2h5z"></path><path d="M9 7l-3-3-4 4v3h14v-11l-7 7z"></path></g>
<g id="vaadin:chart"><path d="M0 15h16v1h-16v-1z"></path><path d="M0 0h1v16h-1v-16z"></path><path d="M9 8l-2.9-3-4.1 4v5h14v-13.1z"></path></g>
<g id="vaadin:chat"><path d="M14 14.2c0 0 0 0 0 0 0-0.6 2-1.8 2-3.1 0-1.5-1.4-2.7-3.1-3.2 0.7-0.8 1.1-1.7 1.1-2.8 0-2.8-2.9-5.1-6.6-5.1-3.5 0-7.4 2.1-7.4 5.1 0 2.1 1.6 3.6 2.3 4.2-0.1 1.2-0.6 1.7-0.6 1.7l-1.2 1h1.5c1.6 0 2.9-0.5 3.7-1.1 0 0.1 0 0.1 0 0.2 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0.1-0.1-0.7-0.5-0.7-1.9zM7.4 1c3.1 0 5.6 1.9 5.6 4.1s-2.6 4.1-5.8 4.1c-0.2 0-0.6 0-0.8 0h-0.3l-0.1 0.2c-0.3 0.4-1.5 1.2-3.1 1.5 0.1-0.4 0.1-1 0.1-1.8v-0.3c-1-0.8-2.1-2.2-2.1-3.6 0-2.2 3.2-4.2 6.5-4.2z"></path></g>
<g id="vaadin:check-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7.1 11.7l-4.2-4.1 1.4-1.4 2.8 2.7 4.9-4.9 1.4 1.4z"></path></g>
<g id="vaadin:check-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7.1 11.7l-4.2-4.1 1.4-1.4 2.7 2.7 5-4.9 1.4 1.4-6.3 6.3z"></path></g>
<g id="vaadin:check-square-o"><path d="M14 6.2v7.8h-12v-12h10.5l1-1h-12.5v14h14v-9.8z"></path><path d="M7.9 10.9l-4.2-4.2 1.5-1.4 2.7 2.8 6.7-6.7 1.4 1.4z"></path></g>
<g id="vaadin:check-square"><path d="M13 0.9l-1 1.1h-12v14h14v-10.5l1.7-2-2.7-2.6zM6.5 11.7l-4.2-4.2 1.4-1.4 2.7 2.7 6.6-6.6 1.4 1.4-7.9 8.1z"></path></g>
<g id="vaadin:check"><path d="M7.3 14.2l-7.1-5.2 1.7-2.4 4.8 3.5 6.6-8.5 2.3 1.8z"></path></g>
<g id="vaadin:chevron-circle-down-o"><path d="M13 6.6l-5 5-5-5 1.4-1.4 3.6 3.6 3.6-3.6z"></path><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path></g>
<g id="vaadin:chevron-circle-down"><path d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8zM11.6 5.2l1.4 1.4-5 5-5-5 1.4-1.4 3.6 3.6 3.6-3.6z"></path></g>
<g id="vaadin:chevron-circle-left-o"><path d="M9.4 13l-5-5 5-5 1.4 1.4-3.6 3.6 3.6 3.6z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:chevron-circle-left"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM10.8 11.6l-1.4 1.4-5-5 5-5 1.4 1.4-3.6 3.6 3.6 3.6z"></path></g>
<g id="vaadin:chevron-circle-right-o"><path d="M6.6 13l5-5-5-5-1.4 1.4 3.6 3.6-3.6 3.6z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:chevron-circle-right"><path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM5.2 4.4l1.4-1.4 5 5-5 5-1.4-1.4 3.6-3.6-3.6-3.6z"></path></g>
<g id="vaadin:chevron-circle-up-o"><path d="M3 9.4l5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path><path d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8v0z"></path></g>
<g id="vaadin:chevron-circle-up"><path d="M16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zM4.4 10.8l-1.4-1.4 5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path></g>
<g id="vaadin:chevron-down-small"><path d="M8 12l-6.32-6.32 1.67-1.68 4.65 4.65 4.65-4.65 1.67 1.68-6.32 6.32z"></path></g>
<g id="vaadin:chevron-down"><path d="M8 13.1l-8-8 2.1-2.2 5.9 5.9 5.9-5.9 2.1 2.2z"></path></g>
<g id="vaadin:chevron-left-small"><path d="M4 8l6.32-6.32 1.68 1.67-4.65 4.65 4.65 4.65-1.68 1.67-6.32-6.32z"></path></g>
<g id="vaadin:chevron-left"><path d="M2.9 8l8-8 2.2 2.1-5.9 5.9 5.9 5.9-2.2 2.1z"></path></g>
<g id="vaadin:chevron-right-small"><path d="M12 8l-6.32-6.32-1.68 1.67 4.65 4.65-4.65 4.65 1.68 1.67 6.32-6.32z"></path></g>
<g id="vaadin:chevron-right"><path d="M13.1 8l-8 8-2.2-2.1 5.9-5.9-5.9-5.9 2.2-2.1z"></path></g>
<g id="vaadin:chevron-up-small"><path d="M8 4l-6.32 6.32 1.67 1.68 4.65-4.65 4.65 4.65 1.67-1.68-6.32-6.32z"></path></g>
<g id="vaadin:chevron-up"><path d="M8 2.9l8 8-2.1 2.2-5.9-5.9-5.9 5.9-2.1-2.2z"></path></g>
<g id="vaadin:child"><path d="M10 5c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M12.79 10.32l-2.6-2.63c-0.421-0.426-1.004-0.69-1.65-0.69h-1.070c-0 0-0 0-0.001 0-0.648 0-1.235 0.264-1.659 0.69l-2.6 2.63c-0.216 0.129-0.358 0.362-0.358 0.628 0 0.403 0.327 0.73 0.73 0.73 0.266 0 0.499-0.142 0.626-0.355l1.792-1.793v6.47h1.5v-4h1v4h1.5v-6.47l1.75 1.8c0.135 0.175 0.344 0.287 0.58 0.287 0.403 0 0.73-0.327 0.73-0.73 0-0.228-0.105-0.432-0.269-0.566z"></path></g>
<g id="vaadin:circle-thin"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"></path></g>
<g id="vaadin:clipboard-check"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M7.39 12.47l-3-2.73 1.35-1.48 1.58 1.44 2.87-2.9 1.42 1.4-4.22 4.27z"></path></g>
<g id="vaadin:clipboard-cross"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M11 8h-2v-2h-2v2h-2v2h2v2h2v-2h2z"></path></g>
<g id="vaadin:clipboard-heart"><path d="M9.5 7c0 0 0 0 0 0-0.6 0-1.1 0.6-1.5 1-0.4-0.4-0.9-1-1.5-1 0 0 0 0 0 0-1.5 0-2.1 1.9-1 2.9l2.5 2.1 2.5-2.1c1.1-1 0.5-2.9-1-2.9z"></path><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clipboard-pulse"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M9.3 13c0 0 0 0 0 0-0.2 0-0.3-0.1-0.4-0.3l-0.8-4.8-0.7 3.1c0 0.1-0.1 0.2-0.3 0.3-0.1 0-0.3 0-0.4-0.1l-1-1.3h-1.3c-0.2 0-0.4-0.2-0.4-0.4s0.2-0.4 0.4-0.4h1.6c0.1 0 0.2 0.1 0.3 0.1l0.6 0.8 0.9-4.3c0-0.2 0.2-0.3 0.4-0.3 0 0 0 0 0 0 0.2 0 0.3 0.2 0.3 0.4l0.9 5.3 0.6-1.7c0.1-0.1 0.2-0.2 0.3-0.2h1.3c0.2 0 0.4 0.2 0.4 0.4s-0.2 0.4-0.4 0.4h-1l-1 2.9c0 0-0.2 0.1-0.3 0.1z"></path></g>
<g id="vaadin:clipboard-text"><path d="M4 6h8v1h-8v-1z"></path><path d="M4 8h8v1h-8v-1z"></path><path d="M4 10h5v1h-5v-1z"></path><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clipboard-user"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M8 6c-2.5 0-1.3 3.2-1.3 3.2 0.3 0.4 0.7 0.4 0.7 0.6 0 0.3-0.3 0.3-0.6 0.4-0.5 0.1-0.9-0.1-1.4 0.8-0.3 0.4-0.4 2-0.4 2h6c0 0-0.1-1.6-0.4-2-0.4-0.8-0.9-0.7-1.4-0.8-0.3 0-0.6-0.1-0.6-0.4s0.3-0.2 0.6-0.6c0.1 0 1.3-3.2-1.2-3.2z"></path></g>
<g id="vaadin:clipboard"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clock"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M8 3h-1v6h5v-1h-4z"></path></g>
<g id="vaadin:close-big"><path d="M16 0l-1 0.010-7 6.99-7-6.99-1-0.010v1l7 7-7 7v1h1l7-7 7 7h1v-1l-7-7 7-7v-1z"></path></g>
<g id="vaadin:close-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M12.2 10.8l-2.8-2.8 2.8-2.8-1.4-1.4-2.8 2.8-2.8-2.8-1.4 1.4 2.8 2.8-2.8 2.8 1.4 1.4 2.8-2.8 2.8 2.8z"></path></g>
<g id="vaadin:close-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM12.2 10.8l-1.4 1.4-2.8-2.8-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8z"></path></g>
<g id="vaadin:close-small"><path d="M12.96 4.46l-1.42-1.42-3.54 3.55-3.54-3.55-1.42 1.42 3.55 3.54-3.55 3.54 1.42 1.42 3.54-3.55 3.54 3.55 1.42-1.42-3.55-3.54 3.55-3.54z"></path></g>
<g id="vaadin:close"><path d="M15.1 3.1l-2.2-2.2-4.9 5-4.9-5-2.2 2.2 5 4.9-5 4.9 2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9z"></path></g>
<g id="vaadin:cloud-download-o"><path d="M14.1 9.8c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.3 0.1-0.6 0.1-0.9 0.1v-3h-2v2.4c-0.4-0.3-0.9-0.4-1.3-0.4-1.6 0-2.9 1.3-2.9 2.9 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.6 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.5 2.4-2.7s-0.8-2.3-1.9-2.5zM13.6 14h-10.3c-1.2 0-2.3-1.3-2.3-2.6s1.1-2.6 2.3-2.6c0.1 0 0.3 0 0.4 0l1.4 0.2-0.9-1c-0.2-0.3-0.4-0.7-0.4-1.2 0-1 0.8-1.8 1.8-1.8 0.5 0 1 0.2 1.3 0.6v2.4h-1.9l3 4 3-4h-2v-1.9c0.3-0.1 0.6-0.1 0.9-0.1 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6 0.8 0.1c0.7 0 1.4 0.7 1.4 1.5 0 0.7-0.6 1.6-1.4 1.6z"></path></g>
<g id="vaadin:cloud-download"><path d="M14 10c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-2.2-1.8-4-4-4v-4h-4v3.1c-0.2-0.1-0.3-0.1-0.5-0.1-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-0.9 2-2s-0.9-2-2-2zM8 11.4l-2.9-3.4h1.9v-6h2v6h1.9l-2.9 3.4z"></path></g>
<g id="vaadin:cloud-o"><path d="M14.1 8.9c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.6 0-1.2 0.1-1.8 0.4-0.5-0.7-1.5-1.2-2.4-1.2-1.6 0-2.9 1.2-2.9 2.8 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.5 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.4 2.4-2.6s-0.8-2.2-1.9-2.5zM13.6 13h-10.3c-1.2 0-2.3-1.2-2.3-2.5s1.1-2.5 2.3-2.5c0.1 0 0.3 0 0.4 0l1.3 0.3-0.8-1.2c-0.2-0.3-0.4-0.7-0.4-1.1 0-1 0.8-1.8 1.8-1.8 0.8 0 1.5 0.5 1.7 1.2l0.3 0.6 0.5-0.3c0.5-0.3 1.1-0.5 1.8-0.5 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6h0.8c0.7 0 1.4 0.7 1.4 1.5 0 0.6-0.6 1.5-1.4 1.5z"></path></g>
<g id="vaadin:cloud-upload-o"><path d="M14.1 10.9c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.3 0-0.6 0-0.9 0.1v-2.1h2l-3-4-3 4h2v1.5c-0.4-0.2-0.9-0.3-1.3-0.3-1.6 0-2.9 1.2-2.9 2.8 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.5 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.4 2.4-2.6s-0.8-2.2-1.9-2.5zM13.6 15h-10.3c-1.2 0-2.3-1.2-2.3-2.5s1.1-2.5 2.3-2.5c0.1 0 0.3 0 0.4 0l1.3 0.3-0.8-1.2c-0.2-0.3-0.4-0.7-0.4-1.1 0-1 0.8-1.8 1.8-1.8 0.5 0 1 0.2 1.3 0.6v3.2h2v-2.8c0.3-0.1 0.6-0.1 0.9-0.1 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6h0.8c0.7 0 1.4 0.7 1.4 1.5 0.1 0.7-0.5 1.6-1.3 1.6z"></path></g>
<g id="vaadin:cloud-upload"><path d="M14 10c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-1.6-1-3-2.4-3.6l-3.6-4.4-2.5 3c-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-0.9 2-2s-0.9-2-2-2zM9 6v6h-2v-6h-1.9l2.9-3.4 2.9 3.4h-1.9z"></path></g>
<g id="vaadin:cloud"><path d="M14 13c1.1 0 2-0.9 2-2s-0.9-2-2-2c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-2.2-1.8-4-4-4-0.8 0-1.5 0.2-2.2 0.6-0.3-0.9-1.2-1.6-2.3-1.6-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11z"></path></g>
<g id="vaadin:cluster"><path d="M14 12c-0.372 0.011-0.716 0.121-1.008 0.305l-2.212-2.155c0.434-0.547 0.708-1.239 0.74-1.993l1.57-0.157c0.225 0.556 0.76 0.941 1.385 0.941 0.823 0 1.49-0.667 1.49-1.49s-0.667-1.49-1.49-1.49c-0.749 0-1.368 0.552-1.474 1.271l-1.591 0.128c-0.224-1.136-0.973-2.060-1.978-2.521l0.308-0.839h0.26c1.099-0.008 1.986-0.9 1.986-2 0-1.105-0.895-2-2-2s-2 0.895-2 2c0 0.742 0.404 1.39 1.004 1.735l-0.27 0.855c-0.227-0.054-0.487-0.084-0.754-0.084-0.83 0-1.59 0.296-2.181 0.789l-2.994-3.004c0.141-0.224 0.225-0.497 0.225-0.79 0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5c0 0.823 0.663 1.492 1.484 1.5 0.281-0.001 0.544-0.079 0.767-0.214l2.993 3.004c-0.474 0.588-0.76 1.344-0.76 2.168 0 0.015 0 0.030 0 0.045-0 0.058-0 0.108-0 0.158l-0.66 0.11c-0.313-0.72-1.019-1.214-1.839-1.214-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2 0-0.020-0-0.039-0.001-0.059l0.63-0.097c0.242 0.843 0.768 1.538 1.466 1.992l-0.556 1.188c-0.161-0.049-0.347-0.078-0.539-0.080-0.006-0-0.012-0-0.017-0-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2 0-0.64-0.301-1.211-0.769-1.577l0.566-1.153c0.364 0.146 0.787 0.231 1.229 0.231 0.847 0 1.621-0.311 2.216-0.824l2.176 2.124c-0.25 0.33-0.4 0.748-0.4 1.2 0 1.105 0.895 2 2 2s2-0.895 2-2c0-1.105-0.895-2-2-2 0 0 0 0 0 0zM5 15c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM8 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5z"></path></g>
<g id="vaadin:code"><path d="M5.2 14l4.5-12h1.1l-4.5 12z"></path><path d="M11.1 13h1.2l3.7-5-3.7-5h-1.3l3.8 5z"></path><path d="M4.9 13h-1.2l-3.7-5 3.7-5h1.3l-3.8 5z"></path></g>
<g id="vaadin:coffee"><path d="M14 13l-4 1h-6l-4-1v-1h14z"></path><path d="M14.7 3h-1.7v-1h-12v5c0 1.5 0.8 2.8 2 3.4v0.6h8v-0.6c0.9-0.5 1.6-1.4 1.9-2.4 0 0 0.1 0 0.1 0 2.3 0 2.9-2 3-3.5 0.1-0.8-0.5-1.5-1.3-1.5zM13 7v-3h1.7c0.1 0 0.2 0.1 0.2 0.1s0.1 0.1 0.1 0.3c-0.2 2.6-1.6 2.6-2 2.6z"></path></g>
<g id="vaadin:cog-o"><path d="M15.2 6l-1.1-0.2c-0.1-0.2-0.1-0.4-0.2-0.6l0.6-0.9 0.5-0.7-2.6-2.6-0.7 0.5-0.9 0.6c-0.2-0.1-0.4-0.1-0.6-0.2l-0.2-1.1-0.2-0.8h-3.6l-0.2 0.8-0.2 1.1c-0.2 0.1-0.4 0.1-0.6 0.2l-0.9-0.6-0.7-0.4-2.5 2.5 0.5 0.7 0.6 0.9c-0.2 0.2-0.2 0.4-0.3 0.6l-1.1 0.2-0.8 0.2v3.6l0.8 0.2 1.1 0.2c0.1 0.2 0.1 0.4 0.2 0.6l-0.6 0.9-0.5 0.7 2.6 2.6 0.7-0.5 0.9-0.6c0.2 0.1 0.4 0.1 0.6 0.2l0.2 1.1 0.2 0.8h3.6l0.2-0.8 0.2-1.1c0.2-0.1 0.4-0.1 0.6-0.2l0.9 0.6 0.7 0.5 2.6-2.6-0.5-0.7-0.6-0.9c0.1-0.2 0.2-0.4 0.2-0.6l1.1-0.2 0.8-0.2v-3.6l-0.8-0.2zM15 9l-1.7 0.3c-0.1 0.5-0.3 1-0.6 1.5l0.9 1.4-1.4 1.4-1.4-0.9c-0.5 0.3-1 0.5-1.5 0.6l-0.3 1.7h-2l-0.3-1.7c-0.5-0.1-1-0.3-1.5-0.6l-1.4 0.9-1.4-1.4 0.9-1.4c-0.3-0.5-0.5-1-0.6-1.5l-1.7-0.3v-2l1.7-0.3c0.1-0.5 0.3-1 0.6-1.5l-1-1.4 1.4-1.4 1.4 0.9c0.5-0.3 1-0.5 1.5-0.6l0.4-1.7h2l0.3 1.7c0.5 0.1 1 0.3 1.5 0.6l1.4-0.9 1.4 1.4-0.9 1.4c0.3 0.5 0.5 1 0.6 1.5l1.7 0.3v2z"></path><path d="M8 4.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zM8 10.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:cog"><path d="M16 9v-2l-1.7-0.6c-0.2-0.6-0.4-1.2-0.7-1.8l0.8-1.6-1.4-1.4-1.6 0.8c-0.5-0.3-1.1-0.6-1.8-0.7l-0.6-1.7h-2l-0.6 1.7c-0.6 0.2-1.2 0.4-1.7 0.7l-1.6-0.8-1.5 1.5 0.8 1.6c-0.3 0.5-0.5 1.1-0.7 1.7l-1.7 0.6v2l1.7 0.6c0.2 0.6 0.4 1.2 0.7 1.8l-0.8 1.6 1.4 1.4 1.6-0.8c0.5 0.3 1.1 0.6 1.8 0.7l0.6 1.7h2l0.6-1.7c0.6-0.2 1.2-0.4 1.8-0.7l1.6 0.8 1.4-1.4-0.8-1.6c0.3-0.5 0.6-1.1 0.7-1.8l1.7-0.6zM8 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path><path d="M10.6 7.9c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5z"></path></g>
<g id="vaadin:cogs"><path d="M12 7v-2l-1.2-0.4c-0.1-0.3-0.2-0.7-0.4-1l0.6-1.2-1.5-1.3-1.1 0.5c-0.3-0.2-0.6-0.3-1-0.4l-0.4-1.2h-2l-0.4 1.2c-0.3 0.1-0.7 0.2-1 0.4l-1.1-0.5-1.4 1.4 0.6 1.2c-0.2 0.3-0.3 0.6-0.4 1l-1.3 0.3v2l1.2 0.4c0.1 0.3 0.2 0.7 0.4 1l-0.5 1.1 1.4 1.4 1.2-0.6c0.3 0.2 0.6 0.3 1 0.4l0.3 1.3h2l0.4-1.2c0.3-0.1 0.7-0.2 1-0.4l1.2 0.6 1.4-1.4-0.6-1.2c0.2-0.3 0.3-0.6 0.4-1l1.2-0.4zM3 6c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.7-1.3 3-3 3s-3-1.3-3-3z"></path><path d="M7.5 6c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M16 3v-1h-0.6c0-0.2-0.1-0.4-0.2-0.5l0.4-0.4-0.7-0.7-0.4 0.4c-0.2-0.1-0.3-0.2-0.5-0.2v-0.6h-1v0.6c-0.2 0-0.4 0.1-0.5 0.2l-0.4-0.4-0.7 0.7 0.4 0.4c-0.1 0.2-0.2 0.3-0.2 0.5h-0.6v1h0.6c0 0.2 0.1 0.4 0.2 0.5l-0.4 0.4 0.7 0.7 0.4-0.4c0.2 0.1 0.3 0.2 0.5 0.2v0.6h1v-0.6c0.2 0 0.4-0.1 0.5-0.2l0.4 0.4 0.7-0.7-0.4-0.4c0.1-0.2 0.2-0.3 0.2-0.5h0.6zM13.5 3.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1z"></path><path d="M15.4 11.8c-0.1-0.3-0.2-0.6-0.4-0.9l0.3-0.6-0.7-0.7-0.5 0.4c-0.3-0.2-0.6-0.3-0.9-0.4l-0.2-0.6h-1l-0.2 0.6c-0.3 0.1-0.6 0.2-0.9 0.4l-0.6-0.3-0.7 0.7 0.3 0.6c-0.2 0.3-0.3 0.6-0.4 0.9l-0.5 0.1v1l0.6 0.2c0.1 0.3 0.2 0.6 0.4 0.9l-0.3 0.6 0.7 0.7 0.6-0.3c0.3 0.2 0.6 0.3 0.9 0.4l0.1 0.5h1l0.2-0.6c0.3-0.1 0.6-0.2 0.9-0.4l0.6 0.3 0.7-0.7-0.4-0.5c0.2-0.3 0.3-0.6 0.4-0.9l0.6-0.2v-1l-0.6-0.2zM12.5 14c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z"></path></g>
<g id="vaadin:coin-piles"><path d="M10.5 0c-3.040 0-5.5 0.88-5.5 2 0 0 0 0 0 0v2c-3 0.1-5 0.94-5 2 0 0 0 0 0 0v2s0 0 0 0v2s0 0 0 0v2c0 1.090 2.46 2 5.5 2 0.020 0 0.043 0 0.067 0 0.732 0 1.45-0.055 2.153-0.16 0.698 1.305 2.094 2.158 3.69 2.158 2.017 0 3.715-1.363 4.224-3.217 0.209-0.199 0.344-0.442 0.367-0.717l0-2.064v-8c0-1.12-2.46-2-5.5-2zM5.5 5c2.5 0 4.5 0.45 4.5 1s-2 1-4.5 1-4.5-0.45-4.5-1 2-1 4.5-1zM5.5 13c-2.71 0-4.25-0.71-4.5-1v-0.8c1.199 0.512 2.595 0.809 4.060 0.809 0.155 0 0.309-0.003 0.462-0.010 0.508-0.001 1.030-0.030 1.544-0.085-0.043 0.371 0.022 0.712 0.123 1.037-0.452 0.021-0.967 0.051-1.488 0.051-0.070 0-0.141-0.001-0.211-0.002zM7.070 10.91c-0.467 0.057-1.008 0.090-1.556 0.090-0.005 0-0.010 0-0.014 0-2.709 0-4.249-0.71-4.499-1v-0.84c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.632-0.001 1.271-0.044 1.897-0.128-0.197 0.306-0.291 0.654-0.342 1.015zM5.5 9c-2.71 0-4.25-0.71-4.5-1v-0.9c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.088 0.004 0.212 0.006 0.337 0.006 1.498 0 2.923-0.311 4.214-0.872l-0.068 0.366c-0.777 0.265-1.432 0.717-1.935 1.304-0.752 0.165-1.611 0.256-2.491 0.256-0.026 0-0.052-0-0.077-0zM11.41 15c-1.883 0-3.41-1.527-3.41-3.41s1.527-3.41 3.41-3.41c1.883 0 3.41 1.527 3.41 3.41s-1.527 3.41-3.41 3.41zM15 8c-0.175 0.167-0.385 0.3-0.617 0.386-0.288-0.244-0.6-0.46-0.938-0.634 0.575-0.153 1.101-0.352 1.593-0.61l-0.038 0.858zM15 6c-0.24 0.31-1.61 0.94-4 1v-1c0.003 0 0.007 0 0.011 0 1.443 0 2.814-0.305 4.053-0.855l-0.064 0.855zM15 4c-0.25 0.33-1.79 1-4.5 1h-0.23c-1.213-0.63-2.648-1-4.169-1-0.014 0-0.029 0-0.043 0l-0.058-0v-0.9c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.088 0.004 0.212 0.006 0.337 0.006 1.498 0 2.923-0.311 4.214-0.872l-0.068 0.926zM10.5 3c-2.5 0-4.5-0.45-4.5-1s2-1 4.5-1 4.5 0.45 4.5 1-2 1-4.5 1z"></path><path d="M10.5 11h0.5v3h1v-5h-0.5l-1 2z"></path></g>
<g id="vaadin:coins"><path d="M11.5 0c-2.485 0-4.5 2.015-4.5 4.5 0.004 0.261 0.029 0.513 0.074 0.758-0.479-0.176-1.025-0.261-1.591-0.261-3.043 0-5.51 2.467-5.51 5.51s2.467 5.51 5.51 5.51c3.043 0 5.51-2.467 5.51-5.51 0-0.566-0.085-1.112-0.244-1.626 0.23 0.077 0.484 0.099 0.742 0.099 2.48 0 4.49-2.010 4.49-4.49 0-2.477-2.005-4.485-4.481-4.49zM10 10.5c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5c0-2.485 2.015-4.5 4.5-4.5 2.483 0.006 4.494 2.017 4.5 4.499zM12.5 7h-2v-0.5h0.5v-3h-0.5l1-1.5h0.5v4.5h0.5v0.5z"></path><path d="M5.63 8c0.033-0.003 0.072-0.005 0.111-0.005 0.696 0 1.26 0.564 1.26 1.26 0 0.016-0 0.031-0.001 0.047 0 1.698-1.86 2.698-1.86 2.698h1.37v-0.5h0.49v1.5h-3v-1s2-1.27 2-2.33c0-0.37 0-0.67-0.42-0.67-0.69 0-0.65 1-0.65 1h-0.93s-0.23-2 1.63-2z"></path></g>
<g id="vaadin:combobox"><path d="M15 4h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1zM10 11h-9v-6h9v6zM13 8.4l-2-1.4h4l-2 1.4z"></path><path d="M2 6h1v4h-1v-4z"></path></g>
<g id="vaadin:comment-ellipsis-o"><path d="M3 11.2c0 0.1 0 0.1 0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0z"></path><path d="M8.3 1c-4.4 0-8.3 2.6-8.3 5.6 0 2 1.1 3.7 3 4.7 0 0 0 0 0 0s0 0.1 0 0.1c-0.1 1.3-0.9 1.7-0.9 1.7l-1.8 0.9h2c2.5 0 4.3-1.1 5.1-1.9 0.3 0 0.6 0 0.8 0 4.3 0 7.8-2.5 7.8-5.6s-3.4-5.5-7.7-5.5zM8.2 11.1c-0.3 0-0.7 0-0.9 0h-0.2l-0.2 0.2c-0.5 0.5-1.6 1.4-3.3 1.7 0.3-0.5 0.5-1.1 0.5-2v-0.3l-0.3-0.1c-1.8-0.9-2.8-2.3-2.8-4 0-2.4 3.5-4.6 7.3-4.6 3.7 0 6.7 2 6.7 4.6 0 2.4-3.1 4.5-6.8 4.5z"></path><path d="M6 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M9 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M12 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:comment-ellipsis"><path d="M8 1c-4.4 0-8 2.5-8 5.5 0 2 2 3.8 4 4.8 0 0 0 0 0 0 0 2.1-2 2.8-2 2.8 2.8 0 4.4-1.3 5.1-2.1 0.3 0 0.6 0 0.9 0 4.4 0 8-2.5 8-5.5s-3.6-5.5-8-5.5zM5 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM8 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM11 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1z"></path></g>
<g id="vaadin:comment-o"><path d="M3 11.2c0 0.1 0 0.1 0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0z"></path><path d="M8.3 1c-4.4 0-8.3 2.6-8.3 5.6 0 2 1.1 3.7 3 4.7 0 0 0 0 0 0s0 0.1 0 0.1c-0.1 1.3-0.9 1.7-0.9 1.7l-1.8 0.9h2c2.5 0 4.3-1.1 5.1-1.9 0.3 0 0.5 0 0.8 0 4.3 0 7.8-2.5 7.8-5.6s-3.4-5.5-7.7-5.5zM8.2 11.1c-0.3 0-0.7 0-0.9 0h-0.3l-0.2 0.2c-0.5 0.5-1.6 1.4-3.3 1.7 0.3-0.5 0.5-1.1 0.5-2v-0.3l-0.3-0.1c-1.8-0.9-2.7-2.3-2.7-4 0-2.4 3.5-4.6 7.3-4.6 3.7 0 6.7 2 6.7 4.6 0 2.4-3.1 4.5-6.8 4.5z"></path></g>
<g id="vaadin:comment"><path d="M8 1c-4.4 0-8 2.5-8 5.5 0 2 2 3.8 4 4.8 0 0 0 0 0 0 0 2.1-2 2.8-2 2.8 2.8 0 4.4-1.3 5.1-2.1 0.3 0 0.6 0 0.9 0 4.4 0 8-2.5 8-5.5s-3.6-5.5-8-5.5z"></path></g>
<g id="vaadin:comments-o"><path d="M14.2 14c0.6-0.5 1.8-1.6 1.8-3.2 0-1.4-1.2-2.6-2.8-3.3 0.5-0.6 0.8-1.5 0.8-2.4 0-2.8-2.9-5.1-6.6-5.1-3.5 0-7.4 2.1-7.4 5.1 0 2.1 1.6 3.6 2.3 4.2-0.1 1.2-0.6 1.7-0.6 1.7l-1.2 1h1.5c1.2 0 2.2-0.3 3-0.7 0.3 1.9 2.5 3.4 5.3 3.4 0.1 0 0.3 0 0.5 0 0.6 0.5 1.8 1.3 3.5 1.3h1.4l-1.1-0.9c0 0-0.3-0.3-0.4-1.1zM10.3 13.7c-2.3 0-4.3-1.3-4.3-2.8 0-0.1 0-0.1 0-0.2 0.2-0.2 0.4-0.3 0.5-0.5 0.2 0 0.5 0 0.7 0 2.1 0 4-0.7 5.2-1.9 1.5 0.5 2.6 1.5 2.6 2.5s-0.9 2-1.7 2.5l-0.3 0.2v0.3c0 0.5 0.2 0.8 0.3 1.1-1-0.2-1.7-0.7-1.9-1l-0.1-0.2h-0.2c-0.3 0-0.6 0-0.8 0zM7.4 1c3.1 0 5.6 1.9 5.6 4.1s-2.6 4.1-5.8 4.1c-0.2 0-0.6 0-0.8 0h-0.3l-0.1 0.2c-0.3 0.4-1.5 1.2-3.1 1.5 0.1-0.4 0.1-1 0.1-1.8v-0.3c-1-0.8-2.1-2.2-2.1-3.6 0-2.2 3.2-4.2 6.5-4.2z"></path></g>
<g id="vaadin:comments"><path d="M16 11.1c0-1.5-1.5-2.8-3.2-3.3-1.3 1.5-3.9 2.4-6.4 2.4-0.1 0-0.3 0-0.4 0 0 0 0 0-0.1 0-0.1 0.3-0.1 0.5-0.1 0.8 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0 0-0.8-0.4-0.8-1.8 0 0 0 0 0 0 0-0.6 2-1.8 2-3.1z"></path><path d="M13 4.6c0-2.5-2.8-4.6-6.4-4.6s-6.6 2.1-6.6 4.6c0 1.7 2 3.2 3 4 0 0 0 0 0 0 0 1.8-1.4 2.4-1.4 2.4 2.3 0 3.6-1.1 4.2-1.8 0.2 0 0.5 0 0.8 0 3.5 0.1 6.4-2 6.4-4.6z"></path></g>
<g id="vaadin:compile"><path d="M1 12h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path><path d="M11 12h4v4h-4v-4z"></path><path d="M1 7h4v4h-4v-4z"></path><path d="M1 2h4v4h-4v-4z"></path><path d="M6 7h4v4h-4v-4z"></path><path d="M7 1h4v4h-4v-4z"></path><path d="M11 7h4v4h-4v-4z"></path><path d="M13 0h3v3h-3v-3z"></path></g>
<g id="vaadin:compress-square"><path d="M12 0h-12v12l1-1v-10h10z"></path><path d="M4 16h12v-12l-1 1v10h-10z"></path><path d="M7 9h-5l1.8 1.8-3.8 3.8 1.4 1.4 3.8-3.8 1.8 1.8z"></path><path d="M16 1.4l-1.4-1.4-3.8 3.8-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:compress"><path d="M5.3 9.3l-5 5 1.4 1.4 5-5 1.3 1.3v-4h-4z"></path><path d="M15.7 1.7l-1.4-1.4-4 4-1.3-1.3v4h4l-1.3-1.3z"></path></g>
<g id="vaadin:connect-o"><path d="M12.5 9c-1 0-1.8 0.4-2.4 1l-3.2-1.7c0.1-0.3 0.1-0.5 0.1-0.8 0-0.2 0-0.3 0-0.4l2.9-1.3c0.6 0.7 1.5 1.2 2.6 1.2 1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5c0 0.2 0 0.3 0 0.4l-2.9 1.3c-0.6-0.7-1.5-1.2-2.6-1.2-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5c1 0 1.8-0.4 2.4-1l3.1 1.7c0 0.3 0 0.5 0 0.8 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM12.5 1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5c0-1.4 1.1-2.5 2.5-2.5zM3.5 10c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5zM12.5 15c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:connect"><path d="M12 10c-0.8 0-1.4 0.3-2 0.8l-3.2-1.8c0.1-0.3 0.2-0.7 0.2-1s-0.1-0.7-0.2-1l3.2-1.8c0.6 0.5 1.2 0.8 2 0.8 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 0.2 0 0.3 0 0.5l-3.5 1.9c-0.4-0.2-0.9-0.4-1.5-0.4-1.6 0-3 1.3-3 3v0c0 1.6 1.4 3 3 3 0.6 0 1.1-0.2 1.5-0.4l3.5 1.9c0 0.2 0 0.3 0 0.5 0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3z"></path></g>
<g id="vaadin:controller"><path d="M5.951 0.249l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M8.877 14.966l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M0.055 9.071l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M14.773 6.145l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M11.471 1.897l0.556-0.831 0.831 0.556-0.556 0.831-0.831-0.556z"></path><path d="M3.139 14.441l0.56-0.83 0.83 0.56-0.56 0.83-0.83-0.56z"></path><path d="M1.069 3.989l0.56-0.83 0.83 0.56-0.56 0.83-0.83-0.56z"></path><path d="M13.547 12.299l0.556-0.831 0.831 0.556-0.556 0.831-0.831-0.556z"></path><path d="M8.875 1.039l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M5.953 15.745l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M0.061 6.931l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M14.767 9.854l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M3.139 1.628l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M11.477 14.101l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M1.071 12.033l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M13.539 3.63l0.83-0.56 0.56 0.83-0.83 0.56-0.56-0.83z"></path><path d="M14 8c-0.003-1.895-0.884-3.583-2.258-4.681l-3.322 4.991-0.84-0.59 3.32-5c-0.836-0.47-1.836-0.747-2.9-0.747-3.314 0-6 2.686-6 6s2.686 6 6 6c3.304 0 5.984-2.671 6-5.971z"></path></g>
<g id="vaadin:copy-o"><path d="M13 3h-3l-3-3h-7v13h6v3h10v-10l-3-3zM7 1l2 2h-2v-2zM1 12v-11h5v3h3v8h-8zM15 15h-8v-2h3v-9h2v3h3v8zM13 6v-2l2 2h-2z"></path></g>
<g id="vaadin:copy"><path d="M6 0v3h3z"></path><path d="M9 4h-4v-4h-5v12h9z"></path><path d="M13 4v3h3z"></path><path d="M12 4h-2v9h-3v3h9v-8h-4z"></path></g>
<g id="vaadin:copyright"><path d="M8 1.5c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M9.9 10.3c-0.5 0.4-1.2 0.7-1.9 0.7-1.7 0-3-1.3-3-3s1.3-3 3-3c0.8 0 1.6 0.3 2.1 0.9l1.1-1.1c-0.8-0.8-2-1.3-3.2-1.3-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.1 0 2-0.4 2.8-1l-0.9-1.2z"></path></g>
<g id="vaadin:corner-lower-left"><path d="M16 16l-16-16v16z"></path></g>
<g id="vaadin:corner-lower-right"><path d="M16 16h-16l16-16z"></path></g>
<g id="vaadin:corner-upper-left"><path d="M0 16l16-16h-16z"></path></g>
<g id="vaadin:corner-upper-right"><path d="M16 16l-16-16h16z"></path></g>
<g id="vaadin:credit-card"><path d="M0 2v12h16v-12h-16zM15 13h-14v-5h14v5zM15 5h-14v-2h14v2z"></path><path d="M10 11h3v1h-3v-1z"></path><path d="M2 11h6v1h-6v-1z"></path></g>
<g id="vaadin:crop"><path d="M16 0.7v-0.7h-0.7l-3 3h-7.3v-3h-2v3h-3v2h3v8h8v3h2v-3h3v-2h-3v-7.3l3-3zM5 5h5.3l-5.3 5.3v-5.3zM11 11h-5.3l5.3-5.3v5.3z"></path></g>
<g id="vaadin:cross-cutlery"><path d="M10.9 8.6c0 0 0 0 0 0 0.6-0.1 1.2-0.4 1.6-0.9l3.1-3.1c0.4-0.4 0.4-1 0-1.4l-0.1-0.2-3 3c-0.2 0.2-0.6 0.2-0.9 0s-0.2-0.6 0-0.9l2.6-2.6c0.2-0.2 0.2-0.6 0-0.9-0.2-0.2-0.6-0.2-0.9 0l-2.6 2.6c-0.2 0.2-0.6 0.2-0.9 0-0.2-0.2-0.2-0.6 0-0.9l3-3-0.1-0.1c-0.4-0.4-1-0.4-1.4 0l-3.1 3.3c-0.4 0.4-0.7 1-0.8 1.6l-4.9-4.8c-0.4-0.4-1-0.3-1.3 0l-0.2 0.2c-1.4 1.4-0.9 4.2 1.5 6.6l0.8 0.8c0.4 0.4 0.9 0.7 1.5 0.8-0.5 0.4-0.8 0.8-0.8 0.8l-3.4 3.4c-0.7 0.7-0.7 1.9 0 2.6s1.9 0.7 2.6 0l3.3-3.5c0.2-0.2 0.7-0.8 1.3-1.5 0.3 0.4 0.5 0.6 0.5 0.6l4.3 4.3c0.7 0.7 1.9 0.7 2.6 0s0.7-1.9 0-2.6l-4.3-4.2z"></path></g>
<g id="vaadin:crosshairs"><path d="M7.5 0h1v4l-0.5 2-0.5-2v-4z"></path><path d="M8.5 16h-1v-4l0.5-2 0.5 2v4z"></path><path d="M16 7.5v1h-4l-2-0.5 2-0.5h4z"></path><path d="M0 8.5v-1h4l2 0.5-2 0.5h-4z"></path><path d="M8 2.5c3.038 0 5.5 2.462 5.5 5.5s-2.462 5.5-5.5 5.5c-3.038 0-5.5-2.462-5.5-5.5 0.006-3.035 2.465-5.494 5.499-5.5zM8 1c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7s-3.134-7-7-7v0z"></path></g>
<g id="vaadin:css"><path d="M4.1 11c1.4 0 1.9-1 1.9-1l-0.8-0.5c0 0-0.3 0.5-1 0.5s-1.2-0.9-1.2-2.2c0-1.2 0.6-1.8 1.2-1.8 0.5 0 0.9 0.4 0.9 0.4l0.8-0.6c0 0-0.7-0.8-1.7-0.8-1.1 0-2.2 0.9-2.2 2.8s0.9 3.2 2.1 3.2zM8.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM12.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM0 0v16h16v-16h-16zM15 15h-14v-14h14v14z"></path></g>
<g id="vaadin:ctrl-a"><path d="M9 7v-1h-1v-1h-1v1h-0.5v1h0.5v3.56c0.176 0.835 0.907 1.453 1.783 1.453 0.077 0 0.152-0.005 0.226-0.014l-0.009-0.999c-0.055 0.012-0.119 0.019-0.185 0.019-0.359 0-0.669-0.21-0.813-0.514l-0.002-3.505h1z"></path><path d="M14 3h1v9h-1v-9z"></path><path d="M13 6c-0.025-0.001-0.055-0.001-0.085-0.001-0.773 0-1.462 0.358-1.911 0.917l-0.004-0.915h-1v6h1v-3c-0.003-0.037-0.004-0.080-0.004-0.124 0-1.038 0.842-1.88 1.88-1.88 0.044 0 0.087 0.001 0.13 0.004l-0.006-1z"></path><path d="M4.19 12c-2.030 0-3.19-1.46-3.19-4s1.16-4 3.19-4c0.009-0 0.019-0 0.029-0 0.539 0 1.052 0.114 1.515 0.32l-0.424 0.901c-0.319-0.139-0.69-0.22-1.080-0.22-0.014 0-0.028 0-0.042 0-1.808-0-2.188 1.63-2.188 3s0.38 3 2.19 3c0.497-0.013 0.96-0.145 1.366-0.368l0.444 0.898c-0.524 0.285-1.146 0.458-1.806 0.47z"></path></g>
<g id="vaadin:ctrl"><path d="M0 0v16h16v-16h-16zM4.19 12c-2.030 0-3.19-1.46-3.19-4s1.16-4 3.19-4c0.009-0 0.019-0 0.029-0 0.539 0 1.052 0.114 1.515 0.32l-0.424 0.901c-0.319-0.139-0.69-0.22-1.080-0.22-0.014 0-0.028 0-0.042 0-1.808-0-2.188 1.63-2.188 3s0.38 3 2.19 3c0.497-0.013 0.96-0.145 1.366-0.368l0.444 0.898c-0.524 0.285-1.146 0.458-1.806 0.47zM9 7h-1v3.5c0.147 0.309 0.457 0.519 0.815 0.519 0.065 0 0.129-0.007 0.19-0.020l-0.006 1.001c-0.065 0.008-0.141 0.013-0.217 0.013-0.875 0-1.606-0.618-1.781-1.441l-0.002-3.572h-0.51v-1h0.51v-1h1v1h1v1zM11 9v3h-1v-6h1v0.92c0.453-0.564 1.142-0.921 1.915-0.921 0.030 0 0.060 0.001 0.090 0.002l-0.004 1c-0.037-0.003-0.080-0.004-0.124-0.004-1.038 0-1.88 0.842-1.88 1.88 0 0.044 0.001 0.087 0.004 0.13zM15 12h-1v-9h1v9z"></path></g>
<g id="vaadin:cube"><path d="M8 0l-8 2v10l8 4 8-4v-10l-8-2zM14.4 2.6l-5.9 2.2-6.6-2.2 6.1-1.6 6.4 1.6zM1 11.4v-8.1l7 2.4v9.2l-7-3.5z"></path></g>
<g id="vaadin:cubes"><path d="M12 6v-4l-4-2-4 2v4l-4 2v5l4 2 4-2 4 2 4-2v-5zM8.090 1.12l2.91 1.44-2.6 1.3-2.91-1.44zM5 2.78l3 1.5v3.6l-3-1.5v-3.6zM4 13.88l-3-1.5v-3.6l3 1.5v3.6zM4.28 9.88l-2.88-1.46 2.6-1.3 2.88 1.44zM12 13.88l-3-1.5v-3.6l3 1.5v3.6zM12.28 9.88l-2.88-1.46 2.6-1.3 2.88 1.44z"></path></g>
<g id="vaadin:curly-brackets"><path d="M2.1 3.1c0.2 1.3 0.4 1.6 0.4 2.9 0 0.8-1.5 1.5-1.5 1.5v1c0 0 1.5 0.7 1.5 1.5 0 1.3-0.2 1.6-0.4 2.9-0.3 2.1 0.8 3.1 1.8 3.1s2.1 0 2.1 0v-2c0 0-1.8 0.2-1.8-1 0-0.9 0.2-0.9 0.4-2.9 0.1-0.9-0.5-1.6-1.1-2.1 0.6-0.5 1.2-1.1 1.1-2-0.3-2-0.4-2-0.4-2.9 0-1.2 1.8-1.1 1.8-1.1v-2c0 0-1 0-2.1 0s-2.1 1-1.8 3.1z"></path><path d="M13.9 3.1c-0.2 1.3-0.4 1.6-0.4 2.9 0 0.8 1.5 1.5 1.5 1.5v1c0 0-1.5 0.7-1.5 1.5 0 1.3 0.2 1.6 0.4 2.9 0.3 2.1-0.8 3.1-1.8 3.1s-2.1 0-2.1 0v-2c0 0 1.8 0.2 1.8-1 0-0.9-0.2-0.9-0.4-2.9-0.1-0.9 0.5-1.6 1.1-2.1-0.6-0.5-1.2-1.1-1.1-2 0.2-2 0.4-2 0.4-2.9 0-1.2-1.8-1.1-1.8-1.1v-2c0 0 1 0 2.1 0s2.1 1 1.8 3.1z"></path></g>
<g id="vaadin:cursor-o"><path d="M5 2.6l5.75 6.4h-2.46l0.63 1.41 1.8 4-0.91 0.34-1.88-4.3-0.5-1.11-1 0.71-1.43 1.020v-8.47zM4 0v13l3-2.14 2.26 5.14 2.8-1-2.23-5h3.17l-9-10z"></path></g>
<g id="vaadin:cursor"><path d="M4 0v13l3.31-3.47 2.69 6.47 1.37-0.63-2.72-6.37h4.35l-9-9z"></path></g>
<g id="vaadin:cutlery"><path d="M13 0.8c0-0.5-0.4-0.8-0.8-0.8h-0.2c-1.7 0-3 1.9-3 4.7v0.9c0 1 0.5 1.9 1.4 2.4-0.3 1.2-0.4 2.5-0.4 2.5v4c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-4c0-0.4-0.1-1.4-0.3-2.3 0.2-0.2 0.3-0.4 0.3-0.7v-6.7z"></path><path d="M7.2 0h-0.2v3.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3c0-0.3-0.2-0.5-0.5-0.5s-0.5 0.2-0.5 0.5v3c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3.5h-0.2c-0.4 0-0.8 0.4-0.8 0.8v3.7c0 1 0.6 1.9 1.5 2.3-0.4 1.6-0.5 3.7-0.5 3.7v4c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-4c0-0.5-0.1-2.3-0.4-3.7 0.8-0.4 1.4-1.3 1.4-2.3v-3.7c0-0.4-0.4-0.8-0.8-0.8z"></path></g>
<g id="vaadin:dashboard"><path d="M16 10.1c0-4.4-3.6-8.1-8-8.1s-8 3.7-8 8.1c0 1.4 0.3 2.9 0.9 3.9h4.9c0.5 0.6 1.3 1 2.2 1s1.7-0.4 2.2-1h4.9c0.6-1 0.9-2.5 0.9-3.9zM14 7v1l-4.1 3.5c0 0.1 0.1 0.3 0.1 0.5 0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2c0.3 0 0.6 0.1 0.8 0.2l4.2-3.2h1zM10 4h1v1h-1v-1zM5 4h1v1h-1v-1zM2 12h-1v-1h1v1zM3 8h-1v-1h1v1zM15 12h-1v-1h1v1z"></path><path d="M9 12c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:database"><path d="M14 2.5c0 0.828-2.686 1.5-6 1.5s-6-0.672-6-1.5c0-0.828 2.686-1.5 6-1.5s6 0.672 6 1.5z"></path><path d="M8 5c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path><path d="M8 9c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path><path d="M8 13c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path></g>
<g id="vaadin:date-input"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM15 15h-14v-9h14v9z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path><path d="M3 8h1v5h-1v-5z"></path></g>
<g id="vaadin:deindent"><path d="M4 10.5v-6l-4 3z"></path><path d="M0 0h16v3h-16v-3z"></path><path d="M6 4h10v3h-10v-3z"></path><path d="M6 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:del-a"><path d="M14 3h1v9h-1v-9z"></path><path d="M3 12h-2v-9h2c2.23 0.051 4.019 1.871 4.019 4.109 0 0.138-0.007 0.274-0.020 0.408 0.013 0.1 0.020 0.236 0.020 0.374 0 2.238-1.788 4.058-4.014 4.109zM2 11h1c0.31 0 3-0.12 3-3.5s-2.88-3.5-3-3.5h-1v7z"></path><path d="M13 9v-0.5c-0.017-0.77-0.31-1.468-0.783-2.003-0.419-0.412-0.999-0.668-1.638-0.668-0.031 0-0.063 0.001-0.094 0.002-0.013-0.001-0.034-0.001-0.054-0.001-0.594 0-1.132 0.241-1.521 0.631-0.566 0.685-0.91 1.572-0.91 2.54 0 0.003-0 0.006-0 0.009 0 0.881 0.322 1.686 0.854 2.306 0.43 0.429 1.030 0.697 1.692 0.697 0.030 0 0.059-0.001 0.089-0.002 0.861-0.026 1.642-0.372 2.228-0.922l-0.712-0.708c-0.401 0.368-0.931 0.603-1.515 0.63-0.026 0.001-0.051 0.002-0.076 0.002-0.385 0-0.734-0.153-0.99-0.402-0.355-0.435-0.57-0.997-0.57-1.61l4-0zM10.5 6.8c0.020-0.001 0.043-0.002 0.066-0.002 0.362 0 0.691 0.141 0.935 0.372 0.209 0.224 0.361 0.505 0.427 0.818l-2.778 0.011c0.11-0.661 0.661-1.165 1.337-1.2z"></path></g>
<g id="vaadin:del"><path d="M0 0v16h16v-16h-16zM3 12h-2v-9h2c2.23 0.051 4.019 1.871 4.019 4.109 0 0.138-0.007 0.274-0.020 0.408 0.013 0.1 0.020 0.236 0.020 0.374 0 2.238-1.788 4.058-4.014 4.109zM13 9h-4c-0 0.004-0 0.008-0 0.012 0 0.607 0.211 1.164 0.564 1.603 0.252 0.244 0.601 0.397 0.986 0.397 0.025 0 0.049-0.001 0.074-0.002 0.586-0.027 1.115-0.261 1.518-0.631l0.708 0.712c-0.584 0.548-1.364 0.893-2.225 0.92-0.030 0.001-0.060 0.002-0.090 0.002-0.662 0-1.261-0.268-1.696-0.702-0.522-0.613-0.84-1.414-0.84-2.289 0-0.007 0-0.014 0-0.022-0-0.005-0-0.012-0-0.019 0-0.968 0.344-1.855 0.915-2.547 0.384-0.383 0.922-0.624 1.516-0.624 0.021 0 0.041 0 0.062 0.001 0.024-0.001 0.055-0.002 0.086-0.002 0.639 0 1.219 0.256 1.641 0.672 0.47 0.532 0.762 1.23 0.78 1.996l0 0.524zM15 12h-1v-9h1v9z"></path><path d="M3 4h-1v7h1c0.31 0 3-0.12 3-3.5s-2.88-3.5-3-3.5z"></path><path d="M10.49 6.8c-0.679 0.035-1.23 0.539-1.339 1.192l2.779 0.008c-0.069-0.324-0.22-0.606-0.431-0.831-0.242-0.229-0.571-0.371-0.934-0.371-0.027 0-0.053 0.001-0.079 0.002z"></path></g>
<g id="vaadin:dental-chair"><path d="M11.5 8.2c-0.3-0.1-0.6-0.2-0.8-0.2h-2.7v-1h3c0-0.6-0.4-1-1-1h-4c0 0.6 0.4 1 1 1v1c-0.5 0-1-0.2-1.2-0.6l-1.1-1.8c-0.3-0.4-0.7-0.6-1.1-0.6h-0.6v-0.7c0-0.3-0.1-0.5-0.2-0.8l-0.3-0.7c-0.3-0.5-0.9-0.8-1.5-0.8h-1l5 7c0.4 0.6 1.1 1 1.8 1h1.2v1h-1v2h-0.6c-0.9 0-1.8 0.4-2.4 1v0h-1v1h11v-1h-1c-0.6-0.6-1.5-1-2.4-1h-0.6v-2h-1v-1h1.6c0.2 0 0.5 0.1 0.7 0.2l1.7 0.9c0.9 0.5 2 0.5 2.9 0h0.1l-4.5-2.9z"></path></g>
<g id="vaadin:desktop"><path d="M16 0h-16v13h6v2h-2v1h8v-1h-2v-2h6v-13zM9 12h-2v-1h2v1zM15 10h-14v-8.9c0-0.1 0-0.1 0-0.1h14c0 0 0 0 0 0.1v8.9z"></path></g>
<g id="vaadin:diamond-o"><path d="M13 2h-10l-3 3.5 8 9.5 8-9.5zM4.64 5h-2.89l1.52-1.78zM6.42 5l1.58-1.84 1.58 1.84h-3.16zM10 6l-2 6.68-2-6.68h4zM5.26 6l1.89 6.44-5.42-6.44h3.53zM10.75 6h3.53l-5.43 6.44zM11.37 5l1.37-1.78 1.51 1.78h-2.9zM12 3l-1.44 1.81-1.46-1.81h2.9zM5.43 4.83l-1.43-1.83h2.9z"></path></g>
<g id="vaadin:diamond"><path d="M0 6h4l3 8.6-7-8.6z"></path><path d="M16 6h-4l-3 8.6 7-8.6z"></path><path d="M8 15l-3-9h6l-3 9z"></path><path d="M4 5h-4l2-3 2 3z"></path><path d="M16 5h-4l2-3 2 3z"></path><path d="M10 5h-4l2-3 2 3z"></path><path d="M3.34 2h3.66l-2 3-1.66-3z"></path><path d="M9 2h4l-2 3-2-3z"></path></g>
<g id="vaadin:diploma-scroll"><path d="M12.61 8.41c-0.53-0.079-1.008-0.223-1.454-0.424 2.104-1.876 4.424-3.536 4.454-3.556l0.1-0.070 0.060-0.11c0.177-0.367 0.281-0.797 0.281-1.252 0-0.901-0.407-1.707-1.046-2.244-0.523-0.482-1.219-0.776-1.983-0.776-0.538 0-1.043 0.146-1.476 0.4l-0.126 0.133c-1.578 2.181-3.182 4.099-4.908 5.899-1.836 1.638-3.87 3.195-6.018 4.592l-0.394 0.248v0.23c-0.077 0.314-0.122 0.675-0.122 1.046 0 0.97 0.304 1.87 0.822 2.609 0.507 0.53 1.237 0.87 2.045 0.87 0.055 0 0.109-0.002 0.162-0.005 0.026 0.002 0.065 0.003 0.104 0.003 0.701 0 1.317-0.36 1.674-0.905 0.245-0.308 2.065-2.608 4.005-4.708 0.268 0.464 0.476 1.003 0.594 1.575 0.032 0.249 0.046 0.496 0.046 0.747 0 0.823-0.158 1.61-0.445 2.331l1.685-2.043 1.33 1c-0.041-1.174-0.243-2.286-0.584-3.336-0.227-0.416-0.542-0.845-0.915-1.214 0.406 0.346 0.871 0.643 1.372 0.874 0.94 0.338 1.989 0.572 3.076 0.672l-0.949-1.266 2-1.73c-0.83 0.273-1.785 0.431-2.777 0.431-0.216 0-0.43-0.007-0.642-0.022zM12.16 1.18c0.246-0.123 0.536-0.194 0.842-0.194 0.506 0 0.966 0.196 1.309 0.516 0.441 0.356 0.721 0.897 0.721 1.504 0 0.242-0.045 0.474-0.126 0.688-0.486 0.307-2.346 1.717-4.146 3.307-0.055-0.521-0.302-0.975-0.668-1.298-0.28-0.239-0.643-0.384-1.039-0.384-0.068 0-0.135 0.004-0.201 0.012 1.568-1.771 2.978-3.691 3.308-4.151zM2.7 11.81c0.073-0.051 0.164-0.082 0.262-0.082 0.014 0 0.027 0.001 0.040 0.002l0.068-0c0.179 0.052 0.334 0.142 0.461 0.261l-0.871 0.719c-0.081-0.165-0.128-0.358-0.128-0.563 0-0.052 0.003-0.103 0.009-0.153 0.027-0.077 0.084-0.144 0.158-0.183zM4 14.5c-0.175 0.306-0.499 0.508-0.871 0.508-0.046 0-0.090-0.003-0.134-0.009-0.046 0.006-0.106 0.008-0.167 0.008-0.515 0-0.981-0.209-1.318-0.548-0.365-0.54-0.583-1.206-0.583-1.922 0-0.251 0.027-0.495 0.077-0.73l0.706-0.457c-0.094 0.14-0.164 0.304-0.199 0.481-0.007 0.076-0.010 0.154-0.010 0.234 0 0.642 0.202 1.237 0.545 1.724l0.354 0.44 1.7-1.4c0.066 0.209 0.104 0.45 0.104 0.7 0 0.351-0.075 0.685-0.21 0.985zM4.86 12.050c-0.345-0.6-0.889-1.053-1.54-1.274-0.071-0.012-0.13-0.016-0.19-0.016s-0.119 0.004-0.177 0.010c-0.046-0.007-0.106-0.011-0.168-0.011s-0.122 0.004-0.182 0.011c1.489-1.018 2.766-2.003 3.988-3.052 0.398 0.071 0.812 0.25 1.131 0.533 0.297 0.313 0.48 0.739 0.48 1.209 0 0.032-0.001 0.063-0.002 0.094-1.14 1.226-2.25 2.536-3 3.506-0.054-0.379-0.177-0.719-0.357-1.023z"></path></g>
<g id="vaadin:diploma"><path d="M14 10.58c0.024-0.048 0.038-0.105 0.038-0.165s-0.014-0.117-0.039-0.167l-0.479-0.698c-0.009-0.013-0.014-0.028-0.014-0.045s0.005-0.032 0.014-0.045l0.48-0.7c0.024-0.048 0.038-0.105 0.038-0.165s-0.014-0.117-0.039-0.167c-0.040-0.11-0.127-0.196-0.236-0.237l-0.823-0.301c-0.031-0.011-0.054-0.037-0.060-0.069l-0-0.841c-0.007-0.125-0.072-0.233-0.169-0.299-0.066-0.045-0.145-0.071-0.231-0.071-0.004 0-0.007 0-0.011 0l-0.159-0-0.85 0.22c-0.010 0.004-0.022 0.007-0.035 0.007s-0.025-0.003-0.036-0.007l-0.549-0.65c-0.079-0.085-0.191-0.137-0.315-0.137s-0.236 0.053-0.315 0.137l-0.55 0.65c-0.010 0.004-0.022 0.007-0.035 0.007s-0.025-0.003-0.036-0.007l0.001 0-0.9-0.23h-0.1c-0.002-0-0.005-0-0.008-0-0.087 0-0.167 0.026-0.234 0.071-0.096 0.066-0.161 0.174-0.168 0.298l-0 0.841c-0.006 0.033-0.029 0.059-0.059 0.070l-0.821 0.3c-0.134 0.023-0.245 0.11-0.299 0.228-0.025 0.051-0.039 0.107-0.039 0.167s0.014 0.117 0.039 0.167l0.479 0.698c0.009 0.013 0.014 0.028 0.014 0.045s-0.005 0.032-0.014 0.045l-0.48 0.7c-0.024 0.048-0.038 0.105-0.038 0.165s0.014 0.117 0.039 0.167c0.040 0.11 0.127 0.196 0.236 0.237l0.823 0.301c0.031 0.011 0.054 0.037 0.060 0.069l0 0.841c0.007 0.125 0.072 0.233 0.169 0.299 0.067 0.045 0.147 0.071 0.234 0.071 0.003 0 0.005-0 0.008-0h0.16l0.31-0.070v3.69l1.53-2 1.47 2v-3.69l0.31 0.080h0.11c0.002 0 0.005 0 0.008 0 0.087 0 0.167-0.026 0.234-0.071 0.096-0.066 0.161-0.174 0.168-0.298l0-0.841c0.006-0.033 0.029-0.059 0.059-0.070l0.821-0.3c0.13-0.026 0.236-0.112 0.289-0.227z"></path><path d="M0 1v12h8l-0.11-0.050c-0.282-0.195-0.469-0.508-0.49-0.867l-0-0.083h-6.4v-10h14v10h-1.43v0.080c-0.021 0.361-0.208 0.675-0.486 0.868l-0.084 0.052h3v-12h-16z"></path><path d="M7.43 6.91c0.007-0.377 0.198-0.708 0.486-0.908 0.016-0.005 0.030-0.006 0.044-0.006s0.028 0.001 0.041 0.004l-5.001-0v1h4.43v-0.090z"></path><path d="M6.42 8h-3.42v1h3.36c-0.074-0.136-0.117-0.298-0.117-0.47 0-0.13 0.025-0.253 0.070-0.367 0.014-0.063 0.054-0.122 0.107-0.163z"></path><path d="M3 4h10v1h-10v-1z"></path></g>
<g id="vaadin:disc"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM15 8c0 1.1-0.2 2.1-0.7 3l-2.7-1.2c0.2-0.6 0.4-1.2 0.4-1.8 0-2.2-1.8-4-4-4-0.5 0-0.9 0.1-1.4 0.3l-1.2-2.8c0.6-0.2 1.2-0.4 1.8-0.5l0.3 3h0.5v-3c3.9 0 7 3.1 7 7zM8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zM1 8c0-1.1 0.2-2.1 0.7-3l2.7 1.2c-0.2 0.6-0.4 1.2-0.4 1.8 0 2.2 1.8 4 4 4 0.5 0 0.9-0.1 1.4-0.3l1.2 2.8c-0.6 0.2-1.2 0.4-1.8 0.5l-0.3-3h-0.5v3c-3.9 0-7-3.1-7-7z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:doctor-briefcase"><path d="M16 12l-1.4-6.7c-0.2-0.7-0.9-1.3-1.7-1.3h-1.9v-1.2c0-1-0.8-1.8-1.8-1.8h-2.4c-1 0-1.8 0.8-1.8 1.8v1.2h-1.9c-0.8 0-1.5 0.6-1.7 1.3l-1.4 6.7c-0.2 1 0.6 2 1.7 2h12.5c1.2 0 2-1 1.8-2zM6 2.8c0-0.4 0.4-0.8 0.8-0.8h2.4c0.4 0 0.8 0.4 0.8 0.8v1.2h-4v-1.2zM11 10h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z"></path></g>
<g id="vaadin:doctor"><path d="M14 11.3c-1-1.9-2-1.6-3.1-1.7 0.1 0.3 0.1 0.6 0.1 1 1.6 0.4 2 2.3 2 3.4v1h-2v-1h1c0 0 0-2.5-1.5-2.5s-1.5 2.4-1.5 2.5h1v1h-2v-1c0-1.1 0.4-3.1 2-3.4 0-0.6-0.1-1.1-0.2-1.3-0.2-0.1-0.4-0.3-0.4-0.6 0-0.6 0.8-0.4 1.4-1.5 0 0 0.9-2.3 0.6-4.3h-1c0-0.2 0.1-0.3 0.1-0.5s0-0.3-0.1-0.5h0.8c-0.3-1-1.3-1.9-3.2-1.9 0 0 0 0 0 0s0 0 0 0 0 0 0 0c-1.9 0-2.9 0.9-3.3 2h0.8c0 0.2-0.1 0.3-0.1 0.5s0 0.3 0.1 0.5h-1c-0.2 2 0.6 4.3 0.6 4.3 0.6 1 1.4 0.8 1.4 1.5 0 0.5-0.5 0.7-1.1 0.8-0.2 0.2-0.4 0.6-0.4 1.4 0 0.4 0 0.8 0 1.2 0.6 0.2 1 0.8 1 1.4 0 0.7-0.7 1.4-1.5 1.4s-1.5-0.7-1.5-1.5c0-0.7 0.4-1.2 1-1.4 0-0.3 0-0.7 0-1.2s0.1-0.9 0.2-1.3c-0.7 0.1-1.5 0.4-2.2 1.7-0.6 1.1-0.9 4.7-0.9 4.7h13.7c0.1 0-0.2-3.6-0.8-4.7zM6.5 2.5c0-0.8 0.7-1.5 1.5-1.5s1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5-1.5-0.7-1.5-1.5z"></path><path d="M5 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></g>
<g id="vaadin:dollar"><path d="M8.2 6.8c-0.1 0-0.1-0.1-0.2-0.1v-3.1c1.2 0.1 2.2 0.6 2.2 0.6l0.9-1.8c-0.1 0-1.5-0.8-3.1-0.8v-1.6h-1v1.6c-0.8 0.2-1.4 0.5-2 0.9-0.6 0.6-1 1.4-1 2.3 0 0.7 0.2 2.3 3 3.6v3.9c-0.9-0.2-2-0.7-2.4-0.9l-1 1.7c0.2 0.1 1.8 1 3.4 1.2v1.7h1v-1.7c0 0 0 0 0 0 2.3-0.3 3.6-2.1 3.6-3.8 0-1.5-1-2.7-3.4-3.7zM7 6.2c-0.8-0.5-1-1-1-1.3 0-0.4 0.1-0.7 0.4-0.9 0.2-0.1 0.4-0.2 0.6-0.3v2.5zM8 12.3v-3.4c1.1 0.5 1.6 1.1 1.6 1.6 0 0.6-0.3 1.6-1.6 1.8z"></path></g>
<g id="vaadin:dot-circle"><path d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:download-alt"><path d="M0 14h16v2h-16v-2z"></path><path d="M8 13l5-5h-3v-8h-4v8h-3z"></path></g>
<g id="vaadin:download"><path d="M16 10h-5.5l-2.5 2.5-2.5-2.5h-5.5v6h16v-6zM4 14h-2v-2h2v2z"></path><path d="M10 6v-6h-4v6h-3l5 5 5-5z"></path></g>
<g id="vaadin:drop"><path d="M8 0c0 0-5 8.2-5 11s2.2 5 5 5 5-2.2 5-5-5-11-5-11zM8.9 14.9l-0.2-1c1.4-0.3 2.4-1.7 2.4-3.2 0-0.3-0.1-1.1-0.8-2.6l0.9-0.4c0.6 1.4 0.8 2.4 0.8 3 0 2-1.3 3.8-3.1 4.2z"></path></g>
<g id="vaadin:edit"><path d="M16 4c0 0 0-1-1-2s-1.9-1-1.9-1l-1.1 1.1v-2.1h-12v16h12v-8l4-4zM6.3 11.4l-0.6-0.6 0.3-1.1 1.5 1.5-1.2 0.2zM7.2 9.5l-0.6-0.6 5.2-5.2c0.2 0.1 0.4 0.3 0.6 0.5zM14.1 2.5l-0.9 1c-0.2-0.2-0.4-0.3-0.6-0.5l0.9-0.9c0.1 0.1 0.3 0.2 0.6 0.4zM11 15h-10v-14h10v2.1l-5.9 5.9-1.1 4.1 4.1-1.1 2.9-3v6z"></path></g>
<g id="vaadin:eject"><path d="M1 11h14l-7-10z"></path><path d="M1 12h14v3h-14v-3z"></path></g>
<g id="vaadin:elastic"><path d="M4.7 16v0c-1.7 0-3.1-0.8-4-2.1-1.1-1.7-0.9-4 0.4-5.8 0.9-1.3 2.1-2.1 3.6-2.4 1.2-0.3 2.2-1.1 2.5-2.2 0.2-0.8 0.7-1.5 1.3-2 0.9-1 2.2-1.5 3.5-1.5 1.1 0 2.2 0.4 2.9 1.2 1.5 1.6 1.5 4.2-0.1 6-0.5 0.6-1.2 1.1-2 1.4-1.2 0.5-2.2 1.6-2.6 3-0.3 1-0.8 1.9-1.5 2.6-1.1 1.2-2.6 1.8-4 1.8zM12 1c-1 0-2 0.4-2.8 1.2-0.5 0.5-0.8 1-1 1.6-0.5 1.5-1.8 2.5-3.3 2.9-1.2 0.2-2.2 0.9-3 2-1.1 1.5-1.2 3.3-0.3 4.7 0.6 1 1.8 1.6 3.1 1.6v0c1.2 0 2.4-0.5 3.3-1.4 0.6-0.6 1.1-1.4 1.3-2.2 0.4-1.7 1.6-3 3.2-3.6 0.6-0.2 1.2-0.7 1.6-1.2 1.2-1.4 1.3-3.5 0.1-4.7-0.6-0.6-1.4-0.9-2.2-0.9z"></path></g>
<g id="vaadin:ellipsis-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M4 7h2v2h-2v-2z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M10 7h2v2h-2v-2z"></path></g>
<g id="vaadin:ellipsis-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6 9h-2v-2h2v2zM9 9h-2v-2h2v2zM12 9h-2v-2h2v2z"></path></g>
<g id="vaadin:ellipsis-dots-h"><path d="M4 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M16 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:ellipsis-dots-v"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:ellipsis-h"><path d="M0 6h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M12 6h4v4h-4v-4z"></path></g>
<g id="vaadin:ellipsis-v"><path d="M6 0h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path></g>
<g id="vaadin:enter-arrow"><path d="M0 9l7 4v-3h9v-7l-3 2v2h-6v-3l-7 5z"></path></g>
<g id="vaadin:enter"><path d="M4 0v6h-3v10h14v-16h-11zM12 11h-5v2l-3-2.5 3-2.5v2h4v-3h1v4z"></path></g>
<g id="vaadin:envelope-o"><path d="M0 3v11h16v-11h-16zM1 7.1l3.9 2-3.9 3.4v-5.4zM1.9 13l4-3.5 2.1 1.1 2.1-1.1 4 3.5h-12.2zM15 12.5l-3.9-3.5 3.9-2v5.5zM15 5.9l-7 3.5-7-3.5v-1.9h14v1.9z"></path></g>
<g id="vaadin:envelope-open-o"><path d="M14 3.7v-0.7h-1.5l-4.5-3-4.6 3h-1.4v0.7l-2 1.3v11h16v-10.9l-2-1.4zM8 1.2l2.7 1.8h-5.5l2.8-1.8zM3 4h10v3.7l-3.5 1.7-1.5-1.3-1.5 1.4-3.5-1.7v-3.8zM1 5.5l1-0.7v2.4l-1-0.4v-1.3zM1 7.9l4.6 2.3-4.6 4v-6.3zM1.9 15l6.1-5.3 6.1 5.3h-12.2zM15 14.2l-4.7-4.1 4.7-2.3v6.4zM15 6.7l-1 0.5v-2.3l1 0.7v1.1z"></path></g>
<g id="vaadin:envelope-open"><path d="M14 3.7v3.7l2-1v-1.4z"></path><path d="M2 3.8l-2 1.2v1.5l2 1z"></path><path d="M11.2 2l-3.2-2-3.2 2z"></path><path d="M13 3h-10v4.9l3.4 1.7 1.6-1.2 1.6 1.2 3.4-1.7z"></path><path d="M16 7.6l-5.5 2.7 5.5 4.4z"></path><path d="M8 9.6l-8 6.4h16z"></path><path d="M5.5 10.3l-5.5-2.7v7.1z"></path></g>
<g id="vaadin:envelope"><path d="M0 3h16v2.4l-8 4-8-4z"></path><path d="M0 14l5.5-4.8 2.5 1.4 2.5-1.4 5.5 4.8z"></path><path d="M4.6 8.8l-4.6-2.3v6.5z"></path><path d="M11.4 8.8l4.6-2.3v6.5z"></path></g>
<g id="vaadin:envelopes-o"><path d="M14 2h-14v10h14v-10zM5.71 8l1.29 0.55 1.29-0.55 4.71 3h-12zM1 9.83v-4l3.64 1.63zM9.36 7.46l3.64-1.68v4zM13 3v1.68l-6 2.77-6-2.77v-1.68h12z"></path><path d="M15 4v9h-13v1h14v-10h-1z"></path></g>
<g id="vaadin:envelopes"><path d="M16 14h-14v-1h13v-9h1v10z"></path><path d="M14 10.77v-5.48l-4.68 2.18 4.68 3.3z"></path><path d="M8.28 7.96l-1.28 0.59-1.28-0.59-5.72 4.030v0.010l14-0.010-5.72-4.030z"></path><path d="M7 7.45l7-3.27v-2.18h-14v2.18l7 3.27z"></path><path d="M4.68 7.47l-4.68-2.18v5.48l4.68-3.3z"></path></g>
<g id="vaadin:eraser"><path d="M8.1 14l6.4-7.2c0.6-0.7 0.6-1.8-0.1-2.5l-2.7-2.7c-0.3-0.4-0.8-0.6-1.3-0.6h-1.8c-0.5 0-1 0.2-1.4 0.6l-6.7 7.6c-0.6 0.7-0.6 1.9 0.1 2.5l2.7 2.7c0.3 0.4 0.8 0.6 1.3 0.6h11.4v-1h-7.9zM6.8 13.9c0 0 0-0.1 0 0l-2.7-2.7c-0.4-0.4-0.4-0.9 0-1.3l3.4-3.9h-1l-3 3.3c-0.6 0.7-0.6 1.7 0.1 2.4l2.3 2.3h-1.3c-0.2 0-0.4-0.1-0.6-0.2l-2.8-2.8c-0.3-0.3-0.3-0.8 0-1.1l3.5-3.9h1.8l3.5-4h1l-3.5 4 3.1 3.7-3.5 4c-0.1 0.1-0.2 0.1-0.3 0.2z"></path></g>
<g id="vaadin:esc-a"><path d="M8 12c-0.726-0.029-1.409-0.177-2.043-0.425l0.403-0.915c0.435 0.202 0.945 0.319 1.482 0.319 0.326 0 0.643-0.043 0.943-0.125 0.121-0.109 0.215-0.285 0.215-0.484 0-0 0-0 0-0 0.070-0.43-0.22-0.62-1.17-1-0.83-0.29-2.040-0.76-1.83-2.080 0.072-0.594 0.46-1.082 0.989-1.296 0.223-0.053 0.466-0.081 0.715-0.081 0.724 0 1.393 0.235 1.934 0.633l-0.569 0.754c-0.366-0.248-0.817-0.396-1.302-0.396-0.123 0-0.243 0.009-0.361 0.028-0.215 0.084-0.377 0.296-0.387 0.547-0.080 0.401 0.14 0.581 1.15 1.001 0.85 0.33 2 0.77 1.8 2.080-0.067 0.511-0.364 0.94-0.782 1.186-0.323 0.163-0.696 0.256-1.090 0.256-0.034 0-0.069-0.001-0.103-0.002z"></path><path d="M13.71 12c-0.027 0.001-0.058 0.001-0.089 0.001-0.583 0-1.124-0.18-1.57-0.488-0.646-0.548-1.059-1.37-1.059-2.289 0-0.079 0.003-0.157 0.009-0.235-0.011-0.079-0.016-0.183-0.016-0.288 0-0.899 0.413-1.701 1.060-2.228 0.5-0.282 1.091-0.446 1.72-0.446 0.443 0 0.868 0.081 1.259 0.23l-0.374 0.922c-0.276-0.111-0.595-0.176-0.93-0.176-0.388 0-0.756 0.087-1.086 0.242-0.395 0.361-0.652 0.893-0.652 1.485 0 0.095 0.007 0.188 0.019 0.279-0.010 0.063-0.016 0.148-0.016 0.234 0 0.599 0.255 1.138 0.663 1.514 0.346 0.177 0.754 0.28 1.185 0.28 0.292 0 0.573-0.047 0.835-0.134l0.331 0.905c-0.383 0.121-0.823 0.19-1.279 0.19-0.004 0-0.008 0-0.012-0z"></path><path d="M5 4v-1h-4v9h4v-1h-3v-3h3v-1h-3v-3h3z"></path></g>
<g id="vaadin:esc"><path d="M0 0v16h16v-16h-16zM5 4h-3v3h3v1h-3v3h3v1h-4v-9h4v1zM10 10.54c-0.067 0.511-0.364 0.94-0.782 1.186-0.333 0.175-0.719 0.276-1.129 0.276-0.031 0-0.062-0.001-0.093-0.002-0.722-0.029-1.405-0.177-2.038-0.425l0.403-0.915c0.435 0.202 0.945 0.319 1.482 0.319 0.326 0 0.643-0.043 0.943-0.125 0.121-0.109 0.215-0.285 0.215-0.484 0-0 0-0 0-0 0.070-0.43-0.22-0.62-1.17-1-0.83-0.29-2.040-0.76-1.83-2.080 0.072-0.594 0.46-1.082 0.989-1.296 0.223-0.053 0.466-0.081 0.715-0.081 0.724 0 1.393 0.235 1.934 0.633l-0.569 0.754c-0.366-0.248-0.817-0.396-1.302-0.396-0.123 0-0.243 0.009-0.361 0.028-0.215 0.084-0.377 0.296-0.387 0.547-0.080 0.401 0.14 0.581 1.15 1.001 0.83 0.3 2.020 0.75 1.83 2.060zM12.67 10.72c0.345 0.176 0.752 0.279 1.183 0.279 0.292 0 0.573-0.047 0.835-0.134l0.311 0.945c-0.383 0.121-0.823 0.19-1.279 0.19-0 0-0.001 0-0.001 0-0.027 0.001-0.058 0.001-0.089 0.001-0.583 0-1.124-0.18-1.57-0.488-0.651-0.548-1.069-1.374-1.069-2.297 0-0.076 0.003-0.152 0.008-0.227-0.010-0.079-0.016-0.183-0.016-0.288 0-0.899 0.413-1.701 1.060-2.228 0.5-0.282 1.091-0.446 1.72-0.446 0.443 0 0.868 0.081 1.259 0.23l-0.374 0.922c-0.276-0.111-0.595-0.176-0.93-0.176-0.388 0-0.756 0.087-1.086 0.242-0.395 0.361-0.652 0.893-0.652 1.485 0 0.095 0.007 0.188 0.019 0.279-0.008 0.055-0.013 0.13-0.013 0.206 0 0.592 0.25 1.126 0.65 1.502z"></path></g>
<g id="vaadin:euro"><path d="M10.89 3c1.166 0.009 2.244 0.383 3.127 1.011l-0.017-2.321c-0.918-0.433-1.994-0.686-3.129-0.686-3.606 0-6.616 2.551-7.323 5.947l-1.548 0.049v1h1.41c0 0.17 0 0.33 0 0.5-0.005 0.075-0.008 0.162-0.008 0.25s0.003 0.175 0.008 0.262l-1.411-0.012v1h1.54c0.882 3.353 3.805 5.818 7.331 5.999 1.149-0.002 2.218-0.256 3.175-0.708l-0.045-2.291c-0.866 0.617-1.944 0.991-3.108 1-2.461-0.128-4.512-1.744-5.28-3.959l6.388-0.041v-1h-6.59c-0.006-0.075-0.009-0.162-0.009-0.25s0.003-0.175 0.010-0.261c-0.001-0.159-0.001-0.319-0.001-0.489h6.59v-1h-6.4c0.678-2.325 2.788-3.996 5.29-4z"></path></g>
<g id="vaadin:exchange"><path d="M16 5v2h-13v2l-3-3 3-3v2z"></path><path d="M0 12v-2h13v-2l3 3-3 3v-2z"></path></g>
<g id="vaadin:exclamation-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 3h2v7h-2v-7z"></path><path d="M7 11h2v2h-2v-2z"></path></g>
<g id="vaadin:exclamation-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM9 13h-2v-2h2v2zM9 10h-2v-7h2v7z"></path></g>
<g id="vaadin:exclamation"><path d="M6 0h4v4l-1 7h-2l-1-7z"></path><path d="M10 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:exit-o"><path d="M10 0c1.1 0 2 0.9 2 2 0 0.9-0.6 1.7-1.5 1.9 0 0 0 0.1 0 0.1 0.4 0 0.7 0.2 1 0.5l1.3 1.3c0.1 0.1 0.3 0.2 0.5 0.2h1.7v-6h-5z"></path><path d="M11.8 14.5l-3.8-4.5v2.5c0 0.8-0.7 1.5-1.5 1.5h-3.5c-0.6 0-1-0.4-1-1s0.4-1 1-1h2.5c0.3 0 0.5-0.2 0.5-0.5v-2c0-0.7 0.1-1.3 0.4-2l0.7-1.5h-0.8c-0.5 0-0.9 0.2-1.2 0.6l-0.5 0.7c-0.2 0.4-0.7 0.5-1.2 0.3-0.4-0.3-0.6-0.9-0.2-1.3l0.6-0.8c0.7-1 1.9-1.5 3.1-1.5h2l0.1-0.3c-0.6-0.3-1-1-1-1.7 0-1.1 0.9-2 2-2h-7v4.9l-0.6 0.8c-0.3 0.4-0.5 0.9-0.4 1.5 0.1 0.5 0.4 1 0.9 1.3 0 0 0 0 0 0v2.5c-1.1 0-2 0.9-2 2s0.9 2 2 2v1h11.6c-1.1 0-2.1-0.6-2.7-1.5z"></path><path d="M11.4 7.3l-0.7-0.8-0.6 1.5c-0.2 0.5-0.3 0.9 0 1.3l4.9 6.1v-7.4h-2.1c-0.6 0-1.1-0.2-1.5-0.7z"></path></g>
<g id="vaadin:exit"><path d="M14 6h-1.7c-0.2 0-0.4-0.1-0.6-0.2l-1.3-1.3c-0.2-0.3-0.6-0.5-1.1-0.5h-0.3c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7l-0.2 0.3h-2c-1.1 0-2.3 0.5-3 1.5l-0.6 0.8c-0.4 0.4-0.2 1 0.2 1.3 0.4 0.2 0.9 0.1 1.2-0.3l0.5-0.7c0.3-0.4 0.7-0.6 1.2-0.6h0.8l-0.7 1.6c-0.3 0.6-0.4 1.2-0.4 1.9v2c0 0.3-0.2 0.5-0.5 0.5h-2.5c-0.6 0-1 0.4-1 1s0.4 1 1 1h3.5c0.8 0 1.5-0.7 1.5-1.5v-2.5l3.8 4.5c0.6 0.9 1.7 1.5 2.8 1.5h0.9l-5.4-6.7c-0.3-0.4-0.2-0.8 0-1.3l0.6-1.5 0.7 0.8c0.4 0.4 1 0.7 1.6 0.7h2c0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path></g>
<g id="vaadin:expand-full"><path d="M5.3 6.7l1.4-1.4-3-3 1.3-1.3h-4v4l1.3-1.3z"></path><path d="M6.7 10.7l-1.4-1.4-3 3-1.3-1.3v4h4l-1.3-1.3z"></path><path d="M10.7 9.3l-1.4 1.4 3 3-1.3 1.3h4v-4l-1.3 1.3z"></path><path d="M11 1l1.3 1.3-3 3 1.4 1.4 3-3 1.3 1.3v-4z"></path></g>
<g id="vaadin:expand-square"><path d="M11 2h-9v9l1-1v-7h7z"></path><path d="M5 14h9v-9l-1 1v7h-7z"></path><path d="M16 0h-5l1.8 1.8-4.5 4.5 1.4 1.4 4.5-4.5 1.8 1.8z"></path><path d="M7.7 9.7l-1.4-1.4-4.5 4.5-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:expand"><path d="M15 1h-4l1.3 1.3-4.5 4.5 1.4 1.4 4.5-4.5 1.3 1.3z"></path><path d="M6.8 7.8l-4.5 4.5-1.3-1.3v4h4l-1.3-1.3 4.5-4.5z"></path></g>
<g id="vaadin:external-browser"><path d="M11 10l-2.9-3.2-3.3 3.2h2.2v1.8c0 1.7-0.9 4.2-4 4.2 4.8 0 6-1.4 6-4.3v-1.7h2z"></path><path d="M0 0v13h6v-1h-5v-9h14v9h-5v1h6v-13h-16zM2 2h-1v-1h1v1zM13 2h-10v-1h10v1z"></path></g>
<g id="vaadin:external-link"><path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"></path><path d="M16 0h-5l1.8 1.8-6.8 6.8 1.4 1.4 6.8-6.8 1.8 1.8z"></path></g>
<g id="vaadin:eye-slash"><path d="M12.9 5.2l-0.8 0.8c1.7 0.9 2.5 2.3 2.8 3-0.7 0.9-2.8 3.1-7 3.1-0.7 0-1.2-0.1-1.8-0.2l-0.8 0.8c0.8 0.3 1.7 0.4 2.6 0.4 5.7 0 8.1-4 8.1-4s-0.6-2.4-3.1-3.9z"></path><path d="M12 7.1c0-0.3 0-0.6-0.1-0.8l-4.8 4.7c0.3 0 0.6 0.1 0.9 0.1 2.2 0 4-1.8 4-4z"></path><path d="M15.3 0l-4.4 4.4c-0.8-0.2-1.8-0.4-2.9-0.4-6.7 0-8 5.1-8 5.1s1 1.8 3.3 3l-3.3 3.2v0.7h0.7l15.3-15.3v-0.7h-0.7zM4 11.3c-1.6-0.7-2.5-1.8-2.9-2.3 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 1.1 0.5 2.2 1.3 2.9l-1.3 1.3zM6.2 7.9l-1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.5 0.4-1.5 0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.7c-0.1 0.7 0.1 1.1 0.1 1.1z"></path></g>
<g id="vaadin:eye"><path d="M8 3.9c-6.7 0-8 5.1-8 5.1s2.2 4.1 7.9 4.1 8.1-4 8.1-4-1.3-5.2-8-5.2zM5.3 5.4c0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.6c0 0.7 0.2 1.1 0.2 1.1l-1.1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.4 0.4-1.4zM7.9 12.1c-4.1 0-6.2-2.3-6.8-3.2 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 2.2 1.8 4 4 4s4-1.8 4-4c0-0.5-0.1-0.9-0.2-1.3 2 0.9 2.8 2.5 3.1 3.2-0.7 0.9-2.8 3.2-7 3.2z"></path></g>
<g id="vaadin:eyedropper"><path d="M15 1c-1.8-1.8-3.7-0.7-4.6 0.1-0.4 0.4-0.7 0.9-0.7 1.5v0c0 1.1-1.1 1.8-2.1 1.5l-0.1-0.1-0.7 0.8 0.7 0.7-6 6-0.8 2.3-0.7 0.7 1.5 1.5 0.8-0.8 2.3-0.8 6-6 0.7 0.7 0.7-0.6-0.1-0.2c-0.3-1 0.4-2.1 1.5-2.1v0c0.6 0 1.1-0.2 1.4-0.6 0.9-0.9 2-2.8 0.2-4.6zM3.9 13.6l-2 0.7-0.2 0.1 0.1-0.2 0.7-2 5.8-5.8 1.5 1.5-5.9 5.7z"></path></g>
<g id="vaadin:facebook-square"><path d="M0 0v16h16v-16h-16zM12.9 8.4h-2.1v5.6h-2.1v-5.6h-1.5v-2h1.5c0 0 0-0.8 0-1.7 0-1.5 0.9-2.7 2.9-2.7 0.8 0 1.4 0.1 1.4 0.1v1.9c0 0-0.6 0-1.3 0s-0.8 0.3-0.8 0.9c0 0.1 0 0.1 0 0.1 0 0.2 0 0.5 0 1.4h2.1l-0.1 2z"></path></g>
<g id="vaadin:facebook"><path d="M7.2 16v-7.5h-2v-2.7h2c0 0 0-1.1 0-2.3 0-1.8 1.2-3.5 3.9-3.5 1.1 0 1.9 0.1 1.9 0.1l-0.1 2.5c0 0-0.8 0-1.7 0-1 0-1.1 0.4-1.1 1.2 0 0.6 0-1.3 0 2h2.9l-0.1 2.7h-2.8v7.5h-2.9z"></path></g>
<g id="vaadin:factory"><path d="M4.4 1.3c-0.6 0.3-0.8 1.1-0.4 1.5 0.5-0.9 1.3-0.6 2.5 0.4 0.8 0.7 1.9 0.1 1.9 0.1s0.2 1.2 1.7 1.4c1.7 0.2 2.3-0.8 2.3-0.8s0.4 1 1.9 0.4c1.1-0.4 0.7-1.1 0.7-1.1s1 0 1-0.7c0-0.9-1.1-0.8-1.1-0.8s0.2-1-0.9-1.1c-1-0.1-1.3 0.5-1.3 0.5s-0.3-1.1-1.8-1.1c-1.4 0-1.9 1.3-1.9 1.3s-0.4-0.6-1.6-0.6c-0.9 0-1.3 0.7-1.3 0.7s-1.1-0.5-1.7-0.1z"></path><path d="M12 12.1v-2.1l-4 2.1v-2.1h-2.4l-0.6-7h-2l-0.6 7h-2.4v6h16v-6l-4 2.1zM6 14h-4v-2h4v2z"></path></g>
<g id="vaadin:family"><path d="M9.5 7.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M14.27 4h-2.54c0 0 0 0 0 0-0.955 0-1.73 0.775-1.73 1.73v3.27c0 0.552 0.448 1 1 1v6h4v-6c0.552 0 1-0.448 1-1v-3.27c0-0.955-0.775-1.73-1.73-1.73 0 0 0 0 0 0z"></path><path d="M15 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M4.27 5h-2.54c-0.955 0-1.73 0.775-1.73 1.73s0.775 1.73 1.73 1.73c0.955 0 1.73-0.775 1.73-1.73s-0.775-1.73-1.73-1.73c-0.955 0-1.73 0.775-1.73 1.73v2.27c0 0.552 0.448 1 1 1l-1 3h1v3h4v-3h1l-1-3c0.552 0 1-0.448 1-1v-2.27c0-0.955-0.775-1.73-1.73-1.73 0 0 0 0 0 0z"></path><path d="M5 3c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M7 13v3h2v-3c0.552 0 1-0.448 1-1v-1.54c0-0.806-0.654-1.46-1.46-1.46 0 0 0 0 0 0h-1.080c-0.806 0-1.46 0.654-1.46 1.46 0 0 0 0 0 0v1.54c0 0.552 0.448 1 1 1z"></path></g>
<g id="vaadin:fast-backward"><path d="M16 15v-14l-7 7z"></path><path d="M9 15v-14l-7 7z"></path><path d="M0 1h2v14h-2v-14z"></path></g>
<g id="vaadin:fast-forward"><path d="M0 1v14l7-7z"></path><path d="M7 1v14l7-7z"></path><path d="M14 1h2v14h-2v-14z"></path></g>
<g id="vaadin:female"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8v-1.5l1.8 1.8c0.3 0.3 0.7 0.3 1 0s0.3-0.8 0-1l-2.6-2.6c-0.4-0.5-1-0.7-1.7-0.7h-1c-0.7 0-1.3 0.2-1.7 0.7l-2.6 2.6c-0.3 0.3-0.3 0.8 0 1 0.3 0.3 0.7 0.3 1 0l1.8-1.8v1.5l-4 5h4v3h4v-3h4l-4-5z"></path></g>
<g id="vaadin:file-add"><path d="M12 15h-10v-14h6v4h4v1h1v-2l-4-4h-8v16h12v-2h-1v1zM9 1l3 3h-3v-3z"></path><path d="M13 7h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path></g>
<g id="vaadin:file-code"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M6.2 13h-0.7l-2-2.5 2-2.5h0.7l-2 2.5z"></path><path d="M9.8 13h0.7l2-2.5-2-2.5h-0.7l2 2.5z"></path><path d="M6.7 14h0.6l2.1-7h-0.8z"></path></g>
<g id="vaadin:file-font"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M5 7v2h2v5h2v-5h2v-2z"></path></g>
<g id="vaadin:file-movie"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M10 10v-2h-6v5h6v-2l2 2v-5z"></path></g>
<g id="vaadin:file-o"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path></g>
<g id="vaadin:file-picture"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 11.5v2.5h8v-1.7c0 0 0.1-1.3-1.3-1.5-1.3-0.2-1.5 0.4-2.5 0.5-0.8 0-0.6-1.3-2.2-1.3-1.2 0-2 1.5-2 1.5z"></path><path d="M12 8.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></g>
<g id="vaadin:file-presentation"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M9 6h-2v1h-3v6h2v1h1v-1h2v1h1v-1h2v-6h-3v-1zM11 8v4h-6v-4h6z"></path><path d="M7 9v2l2-1z"></path></g>
<g id="vaadin:file-process"><path d="M12 0h-7v6h0.7l0.2 0.7 0.1 0.1v-5.8h5v4h4v9h-6l0.3 0.5-0.5 0.5h7.2v-11l-4-4zM12 4v-3l3 3h-3z"></path><path d="M5.5 11.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M7.9 12.4l1.1-0.4v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.2 0.3-0.5 0.4-0.8zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:file-refresh"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M4.7 7.7l-0.7-0.7v3h3l-1.2-1.2c0.4-0.8 1.3-1.3 2.2-1.3 1.4 0 2.5 1.1 2.5 2.5h1.5c0-2.2-1.8-4-4-4-1.3 0-2.5 0.7-3.3 1.7z"></path><path d="M9.8 11.8c-0.5 0.5-1.1 0.8-1.8 0.7-1 0-1.9-0.6-2.3-1.5h-1.6c0.4 1.7 2 3 3.8 3 1.1 0 2.1-0.5 2.8-1.2l1.3 1.2v-3h-3l0.8 0.8z"></path></g>
<g id="vaadin:file-remove"><path d="M12 15h-10v-14h6v4h4v2.59l1-1v-2.59l-4-4h-8v16h12v-2.59l-1-1v2.59zM9 1l3 3h-3v-3z"></path><path d="M15 8l-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2z"></path></g>
<g id="vaadin:file-search"><path d="M12 13.47v1.53h-10v-14h6v4h4v0.56c0.386 0.229 0.716 0.504 0.996 0.825l0.004-2.385-4-4h-8v16h12v-1.53zM9 1l3 3h-3v-3z"></path><path d="M14.78 12.72l-1.92-1.92c-0.089-0.085-0.201-0.148-0.325-0.179 0.292-0.458 0.468-1.018 0.468-1.618 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3 0.6 0 1.16-0.176 1.629-0.48 0.020 0.136 0.083 0.248 0.169 0.337l1.92 1.92c0.134 0.125 0.313 0.201 0.511 0.201 0.414 0 0.75-0.336 0.75-0.75 0-0.198-0.077-0.378-0.202-0.512zM10 11c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path></g>
<g id="vaadin:file-sound"><path d="M11.4 10.5c0 1.2-0.4 2.2-1 3l0.4 0.5c0.7-0.9 1.2-2.1 1.2-3.5s-0.5-2.6-1.2-3.5l-0.4 0.5c0.6 0.8 1 1.9 1 3z"></path><path d="M9.9 8l-0.4 0.5c0.4 0.5 0.7 1.2 0.7 2s-0.3 1.5-0.7 2l0.4 0.5c0.5-0.6 0.8-1.5 0.8-2.5s-0.3-1.8-0.8-2.5z"></path><path d="M9.1 9l-0.4 0.5c0.2 0.3 0.3 0.6 0.3 1s-0.1 0.7-0.3 1l0.4 0.5c0.3-0.4 0.5-0.9 0.5-1.5s-0.2-1.1-0.5-1.5z"></path><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M6 9h-2v3h2l2 2v-7z"></path></g>
<g id="vaadin:file-start"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M5 6v6l6-3z"></path></g>
<g id="vaadin:file-table"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 7v6h8v-6h-8zM6 12h-1v-1h1v1zM6 10h-1v-1h1v1zM9 12h-2v-1h2v1zM9 10h-2v-1h2v1zM11 12h-1v-1h1v1zM11 10h-1v-1h1v1z"></path></g>
<g id="vaadin:file-text-o"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 7h8v1h-8v-1z"></path><path d="M4 9h8v1h-8v-1z"></path><path d="M4 11h8v1h-8v-1z"></path></g>
<g id="vaadin:file-text"><path d="M10 0v4h4z"></path><path d="M9 0h-7v16h12v-11h-5v-5zM12 12h-8v-1h8v1zM12 10h-8v-1h8v1zM12 7v1h-8v-1h8z"></path></g>
<g id="vaadin:file-tree-small"><path d="M5 12v2h11v-5h-11v2h-2v-4h9v-5h-12v5h2v5z"></path></g>
<g id="vaadin:file-tree-sub"><path d="M8 11v1h-1v-2h5v-4h-8v1h-1v-2h6v-4h-9v4h2v3h2v2h2v3h2v2h8v-4z"></path></g>
<g id="vaadin:file-tree"><path d="M16 10v-4h-11v1h-2v-3h9v-4h-12v4h2v10h3v2h11v-4h-11v1h-2v-5h2v2z"></path></g>
<g id="vaadin:file-zip"><path d="M10 0h-8v16h12v-12l-4-4zM9 15h-4v-2.8l0.7-2.2h2.4l0.9 2.2v2.8zM13 15h-3v-3l-1-3h-2v-1h-2v1l-1 3v3h-1v-14h4v1h2v1h-2v1h2v1h4v10zM10 4v-3l3 3h-3z"></path><path d="M5 6h2v1h-2v-1z"></path><path d="M5 2h2v1h-2v-1z"></path><path d="M5 4h2v1h-2v-1z"></path><path d="M7 5h2v1h-2v-1z"></path><path d="M7 7h2v1h-2v-1z"></path><path d="M6 12h2v2h-2v-2z"></path></g>
<g id="vaadin:file"><path d="M9 5h5v11h-12v-16h7v5zM10 4v-4l4 4h-4z"></path></g>
<g id="vaadin:fill"><path d="M13 14.5c0.468-2.207 0.985-4.050 1.604-5.846 0.411 1.796 0.928 3.638 1.337 5.521 0.059 1.153-0.612 1.825-1.441 1.825s-1.5-0.672-1.5-1.5z"></path><path d="M8 1l-1.44 1.44-2-2c-0.276-0.262-0.649-0.423-1.060-0.423s-0.784 0.161-1.061 0.423c-0.27 0.271-0.438 0.645-0.438 1.059s0.168 0.789 0.439 1.060l2 2-4.44 4.44 7 7 8-8zM8 2.41l5.59 5.59h-11.18l2.75-2.75c0.071 0.042 0.156 0.067 0.247 0.067 0.271 0 0.49-0.219 0.49-0.49 0-0.091-0.025-0.176-0.068-0.249l0.721-0.718 1.54 1.53c0.091 0.091 0.216 0.147 0.355 0.147 0.277 0 0.502-0.225 0.502-0.502 0-0.139-0.056-0.264-0.147-0.355l-1.53-1.53zM3.15 1.85c-0.091-0.091-0.148-0.216-0.148-0.355s0.057-0.264 0.148-0.355c0.092-0.089 0.217-0.144 0.355-0.144s0.263 0.055 0.355 0.144l2 2-0.71 0.71z"></path></g>
<g id="vaadin:film"><path d="M0 0v16h1v-1h1v1h12v-1h1v1h1v-16h-16zM2 14h-1v-1h1v1zM2 12h-1v-1h1v1zM2 10h-1v-1h1v1zM2 8h-1v-1h1v1zM2 6h-1v-1h1v1zM2 4h-1v-1h1v1zM2 2h-1v-1h1v1zM13 15h-10v-6h10v6zM13 7h-10v-6h10v6zM15 14h-1v-1h1v1zM15 12h-1v-1h1v1zM15 10h-1v-1h1v1zM15 8h-1v-1h1v1zM15 6h-1v-1h1v1zM15 4h-1v-1h1v1zM15 2h-1v-1h1v1z"></path></g>
<g id="vaadin:filter"><path d="M1 2h14v2l-6 5v7l-2-2v-5l-6-5v-2z"></path><path d="M1 0h14v1h-14v-1z"></path></g>
<g id="vaadin:fire"><path d="M4.9 15.8c0 0-3.9-0.4-3.9-5.7 0-4.1 3.1-6.5 3.1-6.5s1.3 1.4 2.3 1.9c1 0.6 1.4-5.5 1.4-5.5s7.2 3.9 7.2 9.8c0 6.1-4 5.9-4 5.9s1.8-2.4 1.8-5.2c0-3-3.9-6.7-3.9-6.7s-0.5 4.4-2.1 5c-1.6-0.9-2.5-2.3-2.5-2.3s-3.7 5.8 0.6 9.3z"></path><path d="M8.2 16.1c-2-0.1-3.7-1.4-3.7-3.2s0.7-2.6 0.7-2.6 0.5 1 1.1 1.5 1.8 0.8 2.4 0.1c0.6-0.6 0.8-2.3 0.8-2.3s1.4 1.1 1.2 3c-0.1 2-0.9 3.5-2.5 3.5z"></path></g>
<g id="vaadin:flag-checkered"><path d="M2 0c-1.1 0-2 0.9-2 2 0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7 0-1.1-0.9-2-2-2z"></path><path d="M12 2c-2.1 0-1.8-1-4.4-1s-3.6 3-3.6 3v8c0 0 0.7-2 3-2 2.7 0 2.8 1 5 1 3.3 0 4-2 4-2v-8c0 0-1.6 1-4 1zM15 4.5c-0.2 0.2-0.8 0.4-2 0.6v-2.2c0.8-0.1 1.5-0.2 2-0.4v2zM5 7.9v-2.6c0.4-0.6 1.1-1.1 2-1.1v-2.1c0.2-0.1 0.4-0.1 0.6-0.1 1.2 0 1.6 0.2 2.1 0.4 0.1 0.1 0.2 0.2 0.3 0.2v2.2c0.5 0.2 1.1 0.4 2 0.4 0.4 0 0.7 0 1-0.1v2.6c-0.3 0-0.6 0.1-1 0.1-1.1 0-1.5-0.2-2-0.5v2.3c-0.7-0.3-1.5-0.6-3-0.6v-2.2c-0.9 0.2-1.5 0.6-2 1.1zM13 9.9v-2.2c1.1-0.2 1.7-0.6 2-0.8v1.8c-0.2 0.3-0.7 1-2 1.2z"></path><path d="M10 7.2v-2.4c0 0-1.2-0.6-3-0.6v2.6c1.7-0.4 3 0.4 3 0.4z"></path></g>
<g id="vaadin:flag-o"><path d="M4 2c0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7z"></path><path d="M7.6 2c1.2 0 1.6 0.2 2.1 0.4 0.5 0.3 1.1 0.6 2.3 0.6s2.2-0.2 3-0.5v6.3c-0.2 0.3-0.9 1.2-3 1.2-0.9 0-1.3-0.2-1.9-0.4-0.7-0.3-1.5-0.6-3.1-0.6-0.8 0-1.5 0.2-2 0.5v-5.3c0.2-0.5 1-2.2 2.6-2.2zM16 1c0 0-1.6 1-4 1-2.1 0-1.8-1-4.4-1s-3.6 3-3.6 3v8c0 0 0.7-2 3-2 2.7 0 2.8 1 5 1 3.3 0 4-2 4-2v-8z"></path></g>
<g id="vaadin:flag"><path d="M4 2c0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7z"></path><path d="M4 4c0 0 1-3 3.6-3 2.7 0 2.3 1 4.4 1 2.4 0 4-1 4-1v8c0 0-0.7 2-4 2-2.2 0-2.3-1-5-1-2.3 0-3 2-3 2v-8z"></path></g>
<g id="vaadin:flash"><path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6z"></path></g>
<g id="vaadin:flask"><path d="M2 16h12l-4-8v-7h1v-1h-6v1h1v7l-4 8zM9 1v7.2l1.9 3.8h-5.8l1.9-3.8v-7.2h2z"></path></g>
<g id="vaadin:flight-landing"><path d="M13.64 7c-0.71-0.2-1.89-0.43-3.23-0.67l-3.82-4.24c-0.209-0.23-0.462-0.416-0.746-0.544l-1.194-0.546c-0.090 0-0.15 0-0.1 0.11s1.45 2.89 2.29 4.59c-1.84-0.29-3.5-0.53-4.23-0.63-0.258-0.047-0.474-0.198-0.608-0.406l-0.722-1.074c-0.115-0.168-0.28-0.294-0.474-0.358l-0.806-0.232 0.61 3.26c0.067 0.34 0.318 0.609 0.644 0.699 1.326 0.381 4.816 1.341 7.526 1.921 6 1.28 6.8 1.28 7.12 0.91s-0.67-2.38-2.26-2.79z"></path><path d="M0 13h16v1h-16v-1z"></path></g>
<g id="vaadin:flight-takeoff"><path d="M12.57 2.26c-0.65 0.29-1.66 0.85-2.8 1.5l-5.46-0.76c-0.093-0.014-0.2-0.022-0.309-0.022-0.211 0-0.414 0.030-0.607 0.086l-1.185 0.336c-0.1 0-0.1 0.1 0 0.14l4.56 2c-1.54 0.92-2.91 1.76-3.51 2.14-0.13 0.082-0.288 0.13-0.458 0.13-0.094 0-0.184-0.015-0.268-0.042l-1.194-0.378c-0.086-0.031-0.186-0.049-0.29-0.049s-0.204 0.018-0.296 0.051l-0.754 0.308 2.52 2.1c0.152 0.127 0.349 0.205 0.565 0.205 0.129 0 0.251-0.028 0.361-0.077 1.204-0.538 4.374-1.998 6.734-3.228 5.24-2.78 5.82-3.26 5.82-3.7 0-0.69-2-1.4-3.43-0.74z"></path><path d="M0 13h16v1h-16v-1z"></path></g>
<g id="vaadin:flip-h"><path d="M0 15l6-5-6-4.9z"></path><path d="M9 10.1l6 4.9v-10l-6 5.1zM14 12.9l-3.4-2.8 3.4-3v5.8z"></path><path d="M7 5h1v1h-1v-1z"></path><path d="M7 3h1v1h-1v-1z"></path><path d="M7 7h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M7.5 1v0c1.3 0 2.6 0.7 3.6 1.9l-1.1 1.1h3v-3l-1.2 1.2c-1.2-1.4-2.7-2.2-4.3-2.2 0 0 0 0 0 0-1.9 0-3.6 1-4.9 2.9l0.8 0.6c1.1-1.6 2.5-2.5 4.1-2.5z"></path></g>
<g id="vaadin:flip-v"><path d="M1 1l5 6 4.94-6h-9.94z"></path><path d="M5.94 10l-4.94 6h10zM3.12 15l2.83-3.44 3 3.44h-5.83z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path><path d="M6 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M15 8.47v0c-0.059 1.485-0.782 2.789-1.879 3.632l-1.121-1.102v3h3l-1.18-1.18c1.293-1.031 2.128-2.588 2.18-4.342l0-0.008c-0.092-2.083-1.223-3.883-2.884-4.905l-0.596 0.805c1.423 0.857 2.383 2.357 2.479 4.087z"></path></g>
<g id="vaadin:folder-add"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v11h14v-1h-13v-9h0.62l1-2h2.57l1.19 2h6.62v1h1z"></path><path d="M14 7h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path></g>
<g id="vaadin:folder-o"><path d="M7 4l-1-2h-4l-1 2h-1v11h16v-11h-9zM15 14h-14v-9h0.6l1-2h2.6l1.2 2h8.6v9z"></path></g>
<g id="vaadin:folder-open-o"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v11h14l2-9h-2zM14.9 7l-1.6 7-11.9-0.1 2.3-6.9h11.2zM1 5h0.6l1-2h2.6l1.2 2h6.6v1h-10l-2 5.9v-6.9z"></path></g>
<g id="vaadin:folder-open"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v9.5l3-7.5z"></path><path d="M3.7 7l-3.2 8h12.8l2.5-8z"></path></g>
<g id="vaadin:folder-remove"><path d="M13 12.41v1.59h-12v-9h0.62l1-2h2.57l1.19 2h6.62v2.59l1-1v-2.59h-7l-1-2h-4l-1 2h-1v11h14v-1.59l-1-1z"></path><path d="M16 8l-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2z"></path></g>
<g id="vaadin:folder-search"><path d="M13 13.47v0.53h-12v-9h0.62l1-2h2.57l1.19 2h6.62v0.91c0.385 0.179 0.716 0.407 1.001 0.681l-0.001-2.591h-7l-1-2h-4l-1 2h-1v11h14v-0.53z"></path><path d="M15.78 12.72l-1.92-1.92c-0.089-0.085-0.201-0.148-0.325-0.179 0.292-0.458 0.468-1.018 0.468-1.618 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3 0.6 0 1.16-0.176 1.629-0.48 0.020 0.136 0.083 0.248 0.169 0.337l1.92 1.92c0.134 0.125 0.313 0.201 0.511 0.201 0.414 0 0.75-0.336 0.75-0.75 0-0.198-0.077-0.378-0.202-0.512zM11 11c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path></g>
<g id="vaadin:folder"><path d="M16 15h-16v-11h1l1-2h4l1 2h9z"></path></g>
<g id="vaadin:font"><path d="M12 16h3l-6-16h-2l-6 16h3l1.9-5h4.2l1.9 5zM6.7 9l1.3-3.6 1.3 3.6h-2.6z"></path></g>
<g id="vaadin:form"><path d="M15 2v2h-9v-2h9zM16 1h-11v4h11v-4z"></path><path d="M0 1h4v4h-4v-4z"></path><path d="M15 7v2h-9v-2h9zM16 6h-11v4h11v-4z"></path><path d="M0 6h4v4h-4v-4z"></path><path d="M15 12v2h-9v-2h9zM16 11h-11v4h11v-4z"></path><path d="M0 11h4v4h-4v-4z"></path></g>
<g id="vaadin:forward"><path d="M0 1v14l8-7z"></path><path d="M8 1v14l8-7z"></path></g>
<g id="vaadin:frown-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11.3 12.3c-0.7-1.1-2-1.8-3.3-1.8s-2.6 0.7-3.3 1.8l-0.8-0.6c0.9-1.4 2.4-2.2 4.1-2.2s3.2 0.8 4.1 2.2l-0.8 0.6z"></path></g>
<g id="vaadin:function"><path d="M10 0c0 0-2.1 0-2.7 3l-0.4 2h-1.9l-0.5 1h2.2l-1.4 7c-0.4 2-1.9 2-1.9 2h-1l-0.4 1h3c0 0 2.1 0 2.7-3l1.4-7h2.4l0.5-1h-2.7l0.4-2c0.4-2 1.8-2 1.8-2h1l0.5-1h-3z"></path></g>
<g id="vaadin:funnel"><path d="M6 11h4v4h-4v-4z"></path><path d="M13.6 5l2.4-4h-16l2.4 4h11.2z"></path><path d="M3 6l2.4 4h5.2l2.4-4h-10z"></path></g>
<g id="vaadin:gamepad"><path d="M12.16 2c-1.215 0.603-2.641 0.968-4.149 1-1.53-0.032-2.956-0.397-4.229-1.026-2.611 0.026-3.781 1.196-3.781 3.866v6c0.017 1.197 0.991 2.16 2.19 2.16 0 0 0 0 0 0h0.23c0 0 0.001 0 0.002 0 0.963 0 1.78-0.621 2.074-1.485 0.305-0.915 1.145-2.515 2.085-2.515h2.84c0.94 0 1.78 1.6 2.080 2.5 0.298 0.879 1.116 1.5 2.078 1.5 0.001 0 0.001 0 0.002 0h0.23c1.21 0 2.19-0.98 2.19-2.19v-6c0-2.64-1.17-3.81-3.84-3.81zM5 7h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1zM10.060 8.11c-0.585 0-1.060-0.475-1.060-1.060s0.475-1.060 1.060-1.060c0.585 0 1.060 0.475 1.060 1.060s-0.475 1.060-1.060 1.060zM13 8c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:gavel"><path d="M6.4 4.1v0c-0.4-0.4-0.4-0.9-0.1-1.2l2.6-2.6c0.3-0.3 0.8-0.3 1.2 0l0.1 0.1c0.3 0.3 0.3 0.8 0 1.2l-2.6 2.5c-0.3 0.3-0.9 0.3-1.2 0z"></path><path d="M12 9.7v0c-0.4-0.4-0.4-0.9-0.1-1.3l2.6-2.6c0.3-0.3 0.8-0.3 1.2 0l0.1 0.1c0.3 0.3 0.3 0.8 0 1.2l-2.6 2.6c-0.4 0.3-0.9 0.3-1.2 0z"></path><path d="M10 7.7l-1.7-1.7c-0.4-0.4-0.4-1 0-1.4l2.3-2.3c0.4-0.4 1-0.4 1.4 0l1.7 1.7c0.4 0.4 0.4 1 0 1.4l-2.3 2.3c-0.4 0.4-1 0.4-1.4 0z"></path><path d="M4 14.2c0.6-0.6 4-5.6 4.5-5.3 0.4 0.2 1-0.5 1-0.5l-1.9-1.9c0 0-0.7 0.6-0.5 1 0.3 0.5-4.7 3.9-5.3 4.5 0 0-2.8 2.2-1.4 3.6s3.6-1.4 3.6-1.4z"></path></g>
<g id="vaadin:gift"><path d="M10.1 5c2-0.3 3.9-1.1 2.2-3.6-0.7-1-1.4-1.4-2-1.4-1 0-1.7 1.1-2.3 2.2-0.6-1.1-1.3-2.2-2.3-2.2-0.6 0-1.3 0.4-2 1.4-1.8 2.5 0.2 3.3 2.2 3.6h-5.9v3h16v-3h-5.9zM10.3 1c0.1 0 0.5 0.1 1.2 1 0.5 0.7 0.6 1.1 0.5 1.3-0.2 0.3-1.3 0.7-3.3 0.8 0-0.2-0.1-0.4-0.2-0.6 0.6-1.4 1.3-2.5 1.8-2.5zM4 3.3c-0.1-0.2 0-0.6 0.5-1.3 0.7-0.9 1.1-1 1.2-1 0.5 0 1.2 1.1 1.8 2.5-0.1 0.2-0.2 0.4-0.2 0.6-2-0.1-3.1-0.5-3.3-0.8zM7 7v-2h2v2h-2z"></path><path d="M9 15h-2v-6h-6v7h14v-7h-6z"></path></g>
<g id="vaadin:glass"><path d="M11 15h-2v-8l6-7h-15l6 7v8h-2c-2 0-2 1-2 1h11c0 0 0-1-2-1zM12.9 1l-1.8 2h-7.2l-1.7-2h10.7zM7 15v-8h1v8h-1z"></path></g>
<g id="vaadin:glasses"><path d="M15.5 7h-0.5c-0.1 0-0.1 0-0.2 0-0.4-1.2-1.5-2-2.8-2s-2.4 0.9-2.8 2.1c-0.3-0.4-0.7-0.6-1.2-0.6s-0.9 0.2-1.2 0.6c-0.4-1.2-1.5-2.1-2.8-2.1s-2.4 0.9-2.8 2c-0.1 0-0.1 0-0.2 0h-0.5c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5h0.5c0 1.7 1.3 3 3 3 1.5 0 2.7-1.1 3-2.5 0 0 0 0 0 0 0.3 0 0.5-0.2 0.5-0.5s0.2-0.5 0.5-0.5 0.5 0.2 0.5 0.5c0 0.3 0.2 0.5 0.5 0.5 0 0 0 0 0 0 0.2 1.4 1.5 2.5 3 2.5 1.7 0 3-1.3 3-3h0.5c0.3 0 0.5-0.2 0.5-0.5s-0.2-0.5-0.5-0.5zM4 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zM12 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"></path></g>
<g id="vaadin:globe-wire"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM14.8 9.5c0 0.5-0.7 0.66-2 1 0.124-0.589 0.206-1.277 0.229-1.98l2.001-0.020c0 0.36-0.080 0.5-0.16 1v0zM1.2 9.5v0c-0.1-0.5-0.15-0.64-0.2-1h2c0.024 0.723 0.106 1.411 0.244 2.079-1.344-0.419-2.044-0.579-2.044-1.079zM1.2 6.5c0-0.5 0.7-0.66 2-1-0.115 0.594-0.187 1.284-0.2 1.989l-2 0.011c0-0.36 0.080-0.5 0.16-1v0zM8.5 5c1.13 0.013 2.226 0.107 3.298 0.277 0.047 0.643 0.165 1.41 0.201 2.199l-3.499 0.025v-2.5zM8.5 4v-2.94c1.17 0.27 2.2 1.47 2.84 3.15-0.836-0.116-1.819-0.192-2.817-0.21zM7.5 1.060v2.94c-1.017 0.015-2.001 0.087-2.968 0.214 0.768-1.684 1.798-2.884 2.968-3.154zM7.5 5v2.5h-3.5c0.031-0.806 0.142-1.571 0.326-2.307 0.932-0.080 2.035-0.177 3.158-0.193zM4 8.5h3.5v2.5c-1.13-0.013-2.226-0.107-3.298-0.277-0.047-0.643-0.165-1.41-0.201-2.199zM7.5 12v2.94c-1.17-0.27-2.2-1.47-2.84-3.15 0.836 0.116 1.819 0.192 2.817 0.21zM8.5 14.94v-2.94c1.017-0.015 2.001-0.087 2.968-0.214-0.768 1.684-1.798 2.884-2.968 3.154zM8.5 11v-2.5h3.5c-0.031 0.806-0.142 1.571-0.326 2.307-0.932 0.080-2.035 0.177-3.158 0.193zM15 7.5h-2c-0.024-0.723-0.106-1.411-0.244-2.079 1.354 0.399 2.014 0.559 2.014 1.079v0c0.13 0.5 0.18 0.64 0.23 1zM14.3 4.91c-0.506-0.204-1.106-0.38-1.726-0.5-0.361-1.019-0.809-1.898-1.389-2.672 1.355 0.726 2.413 1.811 3.067 3.131zM4.84 1.76c-0.568 0.752-1.019 1.631-1.305 2.581-0.699 0.189-1.299 0.365-1.874 0.593 0.751-1.39 1.823-2.475 3.139-3.156zM1.73 11.090c0.506 0.204 1.106 0.38 1.726 0.5 0.361 1.019 0.809 1.898 1.389 2.672-1.367-0.722-2.436-1.807-3.097-3.131zM11.17 14.24c0.564-0.753 1.012-1.631 1.295-2.581 0.699-0.189 1.299-0.365 1.874-0.593-0.751 1.39-1.823 2.475-3.139 3.156z"></path></g>
<g id="vaadin:globe"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13.2 5.3c0.4 0 0.7 0.3 1.1 0.3-0.3 0.4-1.6 0.4-2-0.1 0.3-0.1 0.5-0.2 0.9-0.2zM1 8c0-0.4 0-0.8 0.1-1.3 0.1 0 0.2 0.1 0.3 0.1 0 0 0.1 0.1 0.1 0.2 0 0.3 0.3 0.5 0.5 0.5 0.8 0.1 1.1 0.8 1.8 1 0.2 0.1 0.1 0.3 0 0.5-0.6 0.8-0.1 1.4 0.4 1.9 0.5 0.4 0.5 0.8 0.6 1.4 0 0.7 0.1 1.5 0.4 2.2-2.5-1.2-4.2-3.6-4.2-6.5zM8 15c-0.7 0-1.5-0.1-2.1-0.3-0.1-0.2-0.1-0.4 0-0.6 0.4-0.8 0.8-1.5 1.3-2.2 0.2-0.2 0.4-0.4 0.4-0.7 0-0.2 0.1-0.5 0.2-0.7 0.3-0.5 0.2-0.8-0.2-0.9-0.8-0.2-1.2-0.9-1.8-1.2s-1.2-0.5-1.7-0.2c-0.2 0.1-0.5 0.2-0.5-0.1 0-0.4-0.5-0.7-0.4-1.1-0.1 0-0.2 0-0.3 0.1s-0.2 0.2-0.4 0.1c-0.2-0.2-0.1-0.4-0.1-0.6 0.1-0.2 0.2-0.3 0.4-0.4 0.4-0.1 0.8-0.1 1 0.4 0.3-0.9 0.9-1.4 1.5-1.8 0 0 0.8-0.7 0.9-0.7s0.2 0.2 0.4 0.3c0.2 0 0.3 0 0.3-0.2 0.1-0.5-0.2-1.1-0.6-1.2 0-0.1 0.1-0.1 0.1-0.1 0.3-0.1 0.7-0.3 0.6-0.6 0-0.4-0.4-0.6-0.8-0.6-0.2 0-0.4 0-0.6 0.1-0.4 0.2-0.9 0.4-1.5 0.4 1.1-0.8 2.5-1.2 3.9-1.2 0.3 0 0.5 0 0.8 0-0.6 0.1-1.2 0.3-1.6 0.5 0.6 0.1 0.7 0.4 0.5 0.9-0.1 0.2 0 0.4 0.2 0.5s0.4 0.1 0.5-0.1c0.2-0.3 0.6-0.4 0.9-0.5 0.4-0.1 0.7-0.3 1-0.7 0-0.1 0.1-0.1 0.2-0.2 0.6 0.2 1.2 0.6 1.8 1-0.1 0-0.1 0.1-0.2 0.1-0.2 0.2-0.5 0.3-0.2 0.7 0.1 0.2 0 0.3-0.1 0.4-0.2 0.1-0.3 0-0.4-0.1s-0.1-0.3-0.4-0.3c-0.1 0.2-0.4 0.3-0.4 0.6 0.5 0 0.4 0.4 0.5 0.7-0.6 0.1-0.8 0.4-0.5 0.9 0.1 0.2-0.1 0.3-0.2 0.4-0.4 0.6-0.8 1-0.8 1.7s0.5 1.4 1.3 1.3c0.9-0.1 0.9-0.1 1.2 0.7 0 0.1 0.1 0.2 0.1 0.3 0.1 0.2 0.2 0.4 0.1 0.6-0.3 0.8 0.1 1.4 0.4 2 0.1 0.2 0.2 0.3 0.3 0.4-1.3 1.4-3 2.2-5 2.2z"></path></g>
<g id="vaadin:golf"><path d="M7 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M9.8 1.8c-0.2-0.5-1.7-0.1-2 0.5-0.2 0.3-0.2 1.2-1.2 1.9-0.8 0.5-1.6 0.5-1.6 0.5-0.3 0.6-0.1 1.1 0.2 1.6 0.5 0.9 0.6 1.8 0.7 2.8 0.1 1.3-0.5 2.4-2.3 3.2-0.8 0.3-1.3 0.9-1 1.9 0 0 2-0.3 3.1-1.2 1.5-1.2 1.8-2.3 1.8-2.3s0.1 0.7 0 1.9c-0.1 1-0.2 1.5-0.4 2.2s0.3 1.2 0.9 1.2 1-0.4 1-1l0.3-1.9c0.3-2.1 0-4.3-0.8-6.3 0-0.1-0.1-0.1-0.1-0.2-0.6-1.6 0.2-2.6 0.6-3 0.3-0.4 1.2-1.2 0.8-1.8z"></path><path d="M12 0v10h1v-6l3-2z"></path><path d="M16 10c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M1 8.4l3.7-3.7-0.7-0.3-3.8 3.6c0 0-0.4 0.7 0.1 1.7s1.6 0.3 1.6 0.3c0.4-0.2 0.2-0.4 0-0.6s-0.9-1-0.9-1z"></path></g>
<g id="vaadin:google-plus-square"><path d="M5 3.4c-0.8 0-1.3 0.8-1.2 1.8 0.1 1.1 0.9 1.9 1.7 2 0.8 0 1.3-0.8 1.2-1.9-0.1-1-0.9-1.9-1.7-1.9z"></path><path d="M5.4 9.3c-1.2 0-2.3 0.7-2.3 1.6s0.9 1.7 2.1 1.7c1.7 0 2.3-0.7 2.3-1.6 0-0.1 0-0.2 0-0.3-0.1-0.5-0.6-0.8-1.3-1.2-0.2-0.2-0.5-0.2-0.8-0.2z"></path><path d="M0 0v16h16v-16h-16zM7.9 5.3c0 0.7-0.4 1.2-0.9 1.6s-0.6 0.6-0.6 0.9c0 0.3 0.5 0.8 0.8 1 0.8 0.6 1.1 1.1 1.1 2 0 1.1-1.1 2.3-3.1 2.3-1.7 0-3.2-0.7-3.2-1.8 0-1.2 1.3-2.3 3.1-2.3 0.2 0 0.4 0 0.5 0-0.2-0.3-0.4-0.6-0.4-0.9 0-0.2 0.1-0.4 0.2-0.6-0.1 0-0.2 0-0.3 0-1.4 0-2.4-1-2.4-2.3 0-1.2 1.3-2.3 2.7-2.3 0.8 0 3.1 0 3.1 0l-0.7 0.6h-1c0.7 0.2 1.1 1 1.1 1.8zM14 5.5h-2.1v2h-0.5v-2h-2v-0.5h2v-2h0.5v2h2.1v0.5z"></path></g>
<g id="vaadin:google-plus"><path d="M16 3.9h-2.8v-2.6h-0.6v2.6h-2.7v0.8h2.7v2.6h0.6v-2.6h2.8z"></path><path d="M6.9 9c-0.4-0.2-1.1-0.9-1.1-1.3s0.1-0.7 0.8-1.2c0.7-0.5 1.2-1.2 1.2-2.1 0-1.1-0.5-2.1-1.3-2.4h1.3l0.9-0.7c0 0-3.1 0-4.2 0-1.9 0-3.6 1.4-3.6 3.1s1.3 3 3.2 3c0.1 0 0.3 0 0.4 0-0.2 0.2-0.2 0.4-0.2 0.7 0 0.5 0.3 0.8 0.6 1.2-0.2 0-0.5 0-0.7 0-2.3 0-4.1 1.5-4.1 3s2 2.5 4.3 2.5c2.6 0 4.1-1.5 4.1-3-0.1-1.3-0.5-2-1.6-2.8zM4.7 6.9c-1.1 0-2.1-1.2-2.3-2.6s0.5-2.5 1.6-2.5c1.1 0 2.1 1.2 2.3 2.6s-0.5 2.6-1.6 2.5zM4.3 14.1c-1.6 0-2.8-1-2.8-2.2s1.4-2.2 3-2.2c0.4 0 0.7 0.1 1 0.2 0.9 0.6 1.5 0.9 1.7 1.6 0 0.1 0.1 0.3 0.1 0.4 0 1.2-0.8 2.2-3 2.2z"></path></g>
<g id="vaadin:grab"><path d="M12.6 4c-0.2 0-0.4 0-0.6 0 0-0.2-0.2-0.6-0.4-0.8s-0.5-0.4-1.1-0.4c-0.2 0-0.4 0-0.6 0.1-0.1-0.2-0.2-0.3-0.3-0.5-0.2-0.2-0.5-0.4-1.1-0.4-0.8 0-1.2 0.5-1.4 1-0.1 0-0.3-0.1-0.5-0.1-0.5 0-0.8 0.2-1.1 0.4-0.5 0.6-0.5 1.4-0.5 1.5v0.4c-0.6 0-1.1 0.2-1.4 0.5-0.6 0.7-0.6 1.6-0.6 2.8 0 0.2 0 0.5 0 0.7 0 1.4 0.7 2.1 1.4 2.8l0.3 0.4c1.3 1.2 2.5 1.6 5.1 1.6 2.9 0 4.2-1.6 4.2-5.1v-2.5c0-0.7-0.2-2.1-1.4-2.4zM10.5 3.8c0.4 0 0.5 0.4 0.5 0.6v0.8c0 0.3 0.2 0.5 0.4 0.5 0.3 0 0.5-0.1 0.5-0.4 0 0 0-0.4 0.4-0.3 0.6 0.2 0.7 1.1 0.7 1.3 0 0 0 0 0 0v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.3-4.3-1.3-0.1-0.1-0.2-0.2-0.4-0.4-0.7-0.7-1.1-1.1-1.1-2.1 0-0.2 0-0.3 0-0.6 0-1 0-1.8 0.3-2.1 0.1-0.2 0.4-0.3 0.7-0.3v0.8l-0.3 1.2c0 0.1 0 0.1 0.1 0.1 0.1 0.1 0.2 0 0.2 0l1-1.2c0 0 0-0.1 0-0.1v-2c0-0.1 0-0.6 0.2-0.8 0.1-0.1 0.2-0.2 0.4-0.2 0.3 0 0.4 0.2 0.4 0.4v0.4c0 0.2 0.2 0.5 0.5 0.5s0.5-0.3 0.5-0.5v-1.3c0-0.1 0-0.5 0.5-0.5 0.3 0 0.5 0.2 0.5 0.5v1.2c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-0.5c0-0.3 0.2-0.5 0.5-0.5z"></path></g>
<g id="vaadin:grid-bevel"><path d="M14 2v-1h-13v13h1v1h13v-13h-1zM5 13h-3v-3h3v3zM5 9h-3v-3h3v3zM5 5h-3v-3h3v3zM9 13h-3v-3h3v3zM9 9h-3v-3h3v3zM9 5h-3v-3h3v3zM13 13h-3v-3h3v3zM13 9h-3v-3h3v3zM13 5h-3v-3h3v3z"></path></g>
<g id="vaadin:grid-big-o"><path d="M0 7h7v-7h-7v7zM1 1h5v5h-5v-5z"></path><path d="M9 0v7h7v-7h-7zM15 6h-5v-5h5v5z"></path><path d="M0 16h7v-7h-7v7zM1 10h5v5h-5v-5z"></path><path d="M9 16h7v-7h-7v7zM10 10h5v5h-5v-5z"></path></g>
<g id="vaadin:grid-big"><path d="M0 0h7v7h-7v-7z"></path><path d="M9 0h7v7h-7v-7z"></path><path d="M0 9h7v7h-7v-7z"></path><path d="M9 9h7v7h-7v-7z"></path></g>
<g id="vaadin:grid-h"><path d="M0 0v16h16v-16h-16zM5 15h-4v-14h4v14zM10 15h-4v-14h4v14zM15 15h-4v-14h4v14z"></path></g>
<g id="vaadin:grid-small-o"><path d="M0 4h4v-4h-4v4zM1 1h2v2h-2v-2z"></path><path d="M0 10h4v-4h-4v4zM1 7h2v2h-2v-2z"></path><path d="M0 16h4v-4h-4v4zM1 13h2v2h-2v-2z"></path><path d="M6 4h4v-4h-4v4zM7 1h2v2h-2v-2z"></path><path d="M6 10h4v-4h-4v4zM7 7h2v2h-2v-2z"></path><path d="M6 16h4v-4h-4v4zM7 13h2v2h-2v-2z"></path><path d="M12 0v4h4v-4h-4zM15 3h-2v-2h2v2z"></path><path d="M12 10h4v-4h-4v4zM13 7h2v2h-2v-2z"></path><path d="M12 16h4v-4h-4v4zM13 13h2v2h-2v-2z"></path></g>
<g id="vaadin:grid-small"><path d="M0 0h4v4h-4v-4z"></path><path d="M0 6h4v4h-4v-4z"></path><path d="M0 12h4v4h-4v-4z"></path><path d="M6 0h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path><path d="M12 0h4v4h-4v-4z"></path><path d="M12 6h4v4h-4v-4z"></path><path d="M12 12h4v4h-4v-4z"></path></g>
<g id="vaadin:grid-v"><path d="M16 0h-16v16h16v-16zM1 5v-4h14v4h-14zM1 10v-4h14v4h-14zM1 15v-4h14v4h-14z"></path></g>
<g id="vaadin:grid"><path d="M0 0v16h16v-16h-16zM5 15h-4v-4h4v4zM5 10h-4v-4h4v4zM5 5h-4v-4h4v4zM10 15h-4v-4h4v4zM10 10h-4v-4h4v4zM10 5h-4v-4h4v4zM15 15h-4v-4h4v4zM15 10h-4v-4h4v4zM15 5h-4v-4h4v4z"></path></g>
<g id="vaadin:group"><path d="M5 16v-5.3c-0.6-0.3-1-1-1-1.7v-4c0-0.7 0.4-1.3 1-1.7 0-0.1 0-0.2 0-0.3 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 1.1 0.9 2 2 2h-2c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v5h4z"></path><path d="M15 5h-2c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2c0 0.1 0 0.2 0 0.3 0.6 0.4 1 1 1 1.7v4c0 0.7-0.4 1.4-1 1.7v5.3h4v-5c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 4h-4c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v6h4v-6c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path></g>
<g id="vaadin:hammer"><path d="M6 2l7 7 3-3-4.48-4.48s-2.97 1.030-4.52-0.52z"></path><path d="M8.8 5.79l-8.53 8.52c-0.165 0.178-0.267 0.417-0.267 0.68s0.101 0.502 0.267 0.681c0.181 0.183 0.433 0.297 0.711 0.297 0.253 0 0.484-0.094 0.66-0.248l8.569-8.519z"></path></g>
<g id="vaadin:hand"><path d="M13.5 2.4c-0.4-0.4-1-0.5-1.5-0.3 0-0.3-0.1-0.6-0.4-0.9-0.2-0.2-0.6-0.4-1.1-0.4-0.3 0-0.5 0.1-0.7 0.1 0-0.2-0.1-0.3-0.2-0.5-0.5-0.6-1.5-0.6-2 0-0.2 0.2-0.4 0.4-0.4 0.6-0.2 0-0.4-0.1-0.6-0.1-0.5 0-0.8 0.2-1.1 0.5-0.5 0.5-0.5 1.3-0.5 1.3v3.8c-0.3-0.3-0.8-0.8-1.5-0.8-0.2 0-0.5 0.1-0.7 0.2-0.4 0.2-0.6 0.5-0.7 0.9-0.3 1 0.6 2.4 0.6 2.5 0.1 0.1 1.2 2.7 2.2 3.8 1 1.2 2.1 1.9 4.9 1.9 2.9 0 4.2-1.6 4.2-5.1v-5.5c0-0.1 0.1-1.3-0.5-2zM8 2c0-0.3-0.1-1 0.5-1 0.5 0 0.5 0.5 0.5 1v4c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5v-3.8c0 0 0-0.4 0.5-0.4 0.6 0 0.5 0.9 0.5 0.9v3.3c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5v-2.4c0-0.1 0-0.6 0.5-0.6s0.5 1 0.5 1v5.9c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.5-4.1-1.6-0.9-1-2.1-3.6-2.1-3.7-0.3-0.3-0.7-1.2-0.6-1.6 0-0.1 0.1-0.2 0.2-0.3 0.1 0 0.2-0.1 0.2-0.1 0.4 0 0.8 0.5 0.9 0.7l0.6 0.9c0.1 0.2 0.4 0.3 0.6 0.2 0.4 0 0.5-0.2 0.5-0.4v-5.2c0-0.4 0-1 0.5-1 0.4 0 0.5 0.3 0.5 0.8v3.3c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5z"></path></g>
<g id="vaadin:handle-corner"><path d="M6.7 16l9.3-9.3v-1.4l-10.7 10.7z"></path><path d="M9.7 16l6.3-6.3v-1.4l-7.7 7.7z"></path><path d="M12.7 16l3.3-3.3v-1.4l-4.7 4.7z"></path><path d="M15.7 16l0.3-0.3v-1.4l-1.7 1.7z"></path></g>
<g id="vaadin:hands-up"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M6 16h1.5v-5h1v5h1.5v-9c-0-0.016-0.001-0.034-0.001-0.052 0-0.521 0.194-0.997 0.513-1.36l3.278-3.318c0.216-0.129 0.358-0.362 0.358-0.628 0-0.403-0.327-0.73-0.73-0.73-0.266 0-0.499 0.142-0.626 0.355l-2.362 2.383c-0.212 0.216-0.508 0.35-0.835 0.35-0.002 0-0.004 0-0.006-0h-3.18c-0.002 0-0.004 0-0.005 0-0.327 0-0.622-0.134-0.834-0.35l-2.32-2.39c-0.129-0.216-0.362-0.358-0.628-0.358-0.403 0-0.73 0.327-0.73 0.73 0 0.266 0.142 0.499 0.355 0.626l3.243 3.332c0.317 0.361 0.511 0.836 0.511 1.358 0 0.018-0 0.037-0.001 0.055l0 8.997z"></path></g>
<g id="vaadin:handshake"><path d="M13 3c-0.538 0.515-1.185 0.92-1.902 1.178-0.748 0.132-2.818-0.828-3.838 0.152-0.17 0.17-0.38 0.34-0.6 0.51-0.48-0.21-1.22-0.53-1.76-0.84s-1.9-1-1.9-1l-3 3.5s0.74 1 1.2 1.66c0.3 0.44 0.67 1.11 0.91 1.56l-0.34 0.4c-0.058 0.115-0.093 0.25-0.093 0.393 0 0.235 0.092 0.449 0.243 0.607 0.138 0.103 0.311 0.165 0.5 0.165s0.362-0.062 0.502-0.167c-0.094 0.109-0.149 0.249-0.149 0.402 0 0.193 0.088 0.365 0.226 0.479 0.144 0.085 0.317 0.135 0.501 0.135s0.357-0.050 0.505-0.137c-0.112 0.139-0.177 0.313-0.177 0.503s0.065 0.364 0.174 0.502c0.099 0.035 0.214 0.056 0.334 0.056 0.207 0 0.399-0.063 0.558-0.17-0.043 0.095-0.065 0.203-0.065 0.317 0 0.234 0.096 0.445 0.252 0.595 0.13 0.059 0.283 0.093 0.443 0.093 0.226 0 0.437-0.068 0.611-0.185l0.516-0.467c0.472 0.47 1.123 0.761 1.842 0.761 0.020 0 0.041-0 0.061-0.001 0.494-0.042 0.908-0.356 1.094-0.791 0.146 0.056 0.312 0.094 0.488 0.094 0.236 0 0.455-0.068 0.64-0.185 0.585-0.387 0.445-0.687 0.445-0.687 0.125 0.055 0.27 0.087 0.423 0.087 0.321 0 0.61-0.142 0.806-0.366 0.176-0.181 0.283-0.427 0.283-0.697 0-0.19-0.053-0.367-0.145-0.518 0.008 0.005 0.015 0.005 0.021 0.005 0.421 0 0.787-0.232 0.978-0.574 0.068-0.171 0.105-0.363 0.105-0.563 0-0.342-0.11-0.659-0.296-0.917l0.003 0.005c0.82-0.16 0.79-0.57 1.19-1.17 0.384-0.494 0.852-0.902 1.387-1.208zM12.95 10.060c-0.44 0.44-0.78 0.25-1.53-0.32s-2.24-1.64-2.24-1.64c0.061 0.305 0.202 0.57 0.401 0.781 0.319 0.359 1.269 1.179 1.719 1.599 0.28 0.26 1 0.78 0.58 1.18s-0.75 0-1.44-0.56-2.23-1.94-2.23-1.94c-0.001 0.018-0.002 0.038-0.002 0.059 0 0.258 0.104 0.491 0.272 0.661 0.17 0.2 1.12 1.12 1.52 1.54s0.75 0.67 0.41 1-1.030-0.19-1.41-0.58c-0.59-0.57-1.76-1.63-1.76-1.63-0.001 0.016-0.001 0.034-0.001 0.053 0 0.284 0.098 0.544 0.263 0.75 0.288 0.378 0.848 0.868 1.188 1.248s0.54 0.7 0 1-1.34-0.44-1.69-0.8c0-0.001 0-0.001 0-0.002 0-0.103-0.038-0.197-0.1-0.269-0.159-0.147-0.374-0.238-0.609-0.238-0.104 0-0.204 0.018-0.297 0.050 0.128-0.114 0.204-0.274 0.204-0.452s-0.076-0.338-0.198-0.45c-0.126-0.095-0.284-0.152-0.455-0.152s-0.33 0.057-0.457 0.153c0.117-0.113 0.189-0.268 0.189-0.441 0-0.213-0.109-0.4-0.274-0.509-0.153-0.097-0.336-0.153-0.532-0.153-0.244 0-0.468 0.088-0.642 0.233 0.095-0.114 0.151-0.26 0.151-0.42 0-0.195-0.085-0.37-0.219-0.491-0.178-0.165-0.417-0.266-0.679-0.266-0.185 0-0.358 0.050-0.507 0.138l-0.665-1.123c-0.46-0.73-1-1.49-1-1.49l2.28-2.77s0.81 0.5 1.48 0.88c0.33 0.19 0.9 0.44 1.33 0.64-0.68 0.51-1.25 1-1.080 1.34 0.297 0.214 0.668 0.343 1.069 0.343 0.376 0 0.726-0.113 1.018-0.307 0.373-0.251 0.84-0.403 1.343-0.403 0.347 0 0.677 0.072 0.976 0.203 0.554 0.374 1.574 1.294 2.504 1.874v0c1.17 0.85 1.4 1.4 1.12 1.68z"></path></g>
<g id="vaadin:harddrive-o"><path d="M2 12h1v1h-1v-1z"></path><path d="M4 12h3v1h-3v-1z"></path><path d="M13 1h-10l-3 9v5h16v-5l-3-9zM3.7 2h8.6l2.7 8h-13.9l2.6-8zM1 14v-3h14v3h-14z"></path></g>
<g id="vaadin:harddrive"><path d="M13 1h-10l-2.7 8h15.4z"></path><path d="M0 10v5h16v-5h-16zM3 13h-1v-1h1v1zM7 13h-3v-1h3v1z"></path></g>
<g id="vaadin:hash"><path d="M15 6v-2h-2.6l0.6-2.8-2-0.4-0.7 3.2h-3l0.7-2.8-2-0.4-0.7 3.2h-3.3v2h2.9l-0.9 4h-3v2h2.6l-0.6 2.8 2 0.4 0.7-3.2h3l-0.7 2.8 2 0.4 0.7-3.2h3.3v-2h-2.9l0.9-4h3zM9 10h-3l1-4h3l-1 4z"></path></g>
<g id="vaadin:header"><path d="M11 0v7h-6v-7h-3v16h3v-7h6v7h3v-16z"></path></g>
<g id="vaadin:headphones"><path d="M14 8.3v-2.3c0-3.3-2.7-6-6-6s-6 2.7-6 6v2.3c-1.2 0.5-2 1.7-2 3.1v1.2c0 1.8 1.3 3.2 3 3.4h2v-8h-1v-2c0-2.2 1.8-4 4-4s4 1.8 4 4v2h-1v8h2c1.7-0.2 3-1.7 3-3.4v-1.2c0-1.4-0.8-2.6-2-3.1zM4 15h-1v-6h1v6zM13 15h-1v-6h1v6z"></path></g>
<g id="vaadin:headset"><path d="M14.82 8c-0.309-0.851-0.969-1.511-1.799-1.813l-0.021-1.687c0-2.5-2.47-4.5-5.5-4.5s-5.5 2-5.5 4.5v1.68c-1.173 0.423-1.996 1.525-2 2.82v1c0 1.657 1.343 3 3 3h1v-7h-1v-1.5c0-1.93 2-3.5 4.5-3.5s4.5 1.57 4.5 3.5v1.5h-1v7h1c1.657 0 3-1.343 3-3v1.73c0 1.806-1.464 3.27-3.27 3.27h-1.73c0-0.552-0.448-1-1-1h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.73c2.358 0 4.27-1.912 4.27-4.27v-3.73h-1.18z"></path></g>
<g id="vaadin:health-card"><path d="M15 3v10h-14v-10h14zM16 2h-16v12h16v-12z"></path><path d="M9 5h5v1h-5v-1z"></path><path d="M9 7h5v1h-5v-1z"></path><path d="M9 9h2v1h-2v-1z"></path><path d="M6.5 5c0 0 0 0 0 0-0.6 0-1.1 0.6-1.5 1-0.4-0.4-0.9-1-1.5-1 0 0 0 0 0 0-1.5 0-2.1 1.9-1 2.9l2.5 2.1 2.5-2.1c1.1-1 0.5-2.9-1-2.9z"></path></g>
<g id="vaadin:heart-o"><path d="M11.7 2c-0.9 0-2.7 0.5-3.7 2.1-1-1.6-2.8-2.1-3.8-2.1-2.3 0-4.2 1.9-4.2 4.2 0 4 7.4 8.5 7.7 8.7l0.3 0.2 0.3-0.2c0.3-0.2 7.7-4.8 7.7-8.7 0-2.3-1.9-4.2-4.3-4.2zM8 13.9c-2.2-1.4-7-5-7-7.7 0-1.8 1.5-3.2 3.2-3.2 0.1 0 2.5 0.1 3.3 2.4l0.5 1.4 0.5-1.4c0.8-2.3 3.2-2.4 3.3-2.4 1.7 0 3.2 1.4 3.2 3.2 0 2.7-4.8 6.3-7 7.7z"></path></g>
<g id="vaadin:heart"><path d="M12 2c0 0-3 0-4 3-1-3-4-3-4-3-2.2 0-4 1.8-4 4 0 4.1 8 9 8 9s8-5 8-9c0-2.2-1.8-4-4-4z"></path></g>
<g id="vaadin:home-o"><path d="M16 6.6l-8-5.2-2 1.3v-1.7h-2v3l-4 2.6 1.9 2.7 0.1-0.1v5.8h5v-4h2v4h5v-5.8l0.1 0.1 1.9-2.7zM1.4 6.9l6.6-4.3 6.6 4.3-0.7 1-5.9-3.9-5.9 3.9-0.7-1zM13 14h-3v-4h-4v4h-3v-5.4l5-3.3 5 3.3v5.4z"></path></g>
<g id="vaadin:home"><path d="M8 1.4l-2 1.3v-1.7h-2v3l-4 2.6 0.6 0.8 7.4-4.8 7.4 4.8 0.6-0.8z"></path><path d="M8 4l-6 4v7h5v-3h2v3h5v-7z"></path></g>
<g id="vaadin:hospital"><path d="M15 4v-4h-7v4h-8v12h6v-3h4v3h6v-12h-1zM4 11h-2v-2h2v2zM4 8h-2v-2h2v2zM7 11h-2v-2h2v2zM7 8h-2v-2h2v2zM10 3v-1h1v-1h1v1h1v1h-1v1h-1v-1h-1zM11 11h-2v-2h2v2zM11 8h-2v-2h2v2zM14 11h-2v-2h2v2zM14 8h-2v-2h2v2z"></path></g>
<g id="vaadin:hourglass-empty"><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-8v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass-end"><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-1s-1.62-3.5-3-3.5-3 3.5-3 3.5h-1v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass-start"><path d="M6.16 4.6c1.114 0.734 1.84 1.979 1.84 3.394 0 0.002 0 0.004 0 0.006v-0c0-0.002 0-0.004 0-0.006 0-1.415 0.726-2.66 1.825-3.384 0.573-0.385 0.984-0.939 1.17-1.589l-5.995-0.020c0.191 0.67 0.603 1.225 1.15 1.594z"></path><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-8v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass"><path d="M6.16 4.6c1.114 0.734 1.84 1.979 1.84 3.394 0 0.002 0 0.004 0 0.006v-0c0-0.002 0-0.004 0-0.006 0-1.415 0.726-2.66 1.825-3.384 0.23-0.199 0.426-0.395 0.609-0.602l-4.874-0.007c0.19 0.214 0.386 0.41 0.593 0.594z"></path><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-1.77c-0.7-0.87-1.71-2-2.23-2s-1.53 1.13-2.23 2h-1.77v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:inbox"><path d="M10 6v-6h-4v6h-2l4 5 4-5z"></path><path d="M13 1h-2v1h1.3l2.6 8h-3.9v2h-6v-2h-3.9l2.6-8h1.3v-1h-2l-3 9v5h16v-5z"></path></g>
<g id="vaadin:indent"><path d="M0 0h16v3h-16v-3z"></path><path d="M6 4h10v3h-10v-3z"></path><path d="M6 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path><path d="M0 4.5v6l4-3z"></path></g>
<g id="vaadin:info-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6h2v7h-2v-7z"></path><path d="M7 3h2v2h-2v-2z"></path></g>
<g id="vaadin:info-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM9 13h-2v-7h2v7zM9 5h-2v-2h2v2z"></path></g>
<g id="vaadin:info"><path d="M6 5h4v11h-4v-11z"></path><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:input"><path d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z"></path><path d="M2 6h1v4h-1v-4z"></path></g>
<g id="vaadin:insert"><path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"></path><path d="M16 1.4l-1.4-1.4-6.8 6.8-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:institution"><path d="M8 0l-8 3v2h16v-2z"></path><path d="M0 14h16v2h-16v-2z"></path><path d="M16 7v-1h-16v1h1v5h-1v1h16v-1h-1v-5h1zM4 12h-1v-5h1v5zM7 12h-1v-5h1v5zM10 12h-1v-5h1v5zM13 12h-1v-5h1v5z"></path></g>
<g id="vaadin:invoice"><path d="M4.4 10.2c-0.6 0.1-1.4-0.3-1.7-0.4l-0.5 0.9c0 0 0.9 0.4 1.7 0.5v0.8h1v-0.9c0.9-0.3 1.4-1.1 1.5-1.8 0-0.8-0.6-1.4-1.9-1.9-0.4-0.2-1.1-0.5-1.1-0.9 0-0.5 0.4-0.8 1-0.8 0.7 0 1.4 0.3 1.4 0.3l0.4-0.9c0 0-0.5-0.2-1.2-0.4v-0.7h-1v0.7c-0.9 0.2-1.5 0.8-1.6 1.7 0 1.2 1.3 1.7 1.8 1.9 0.6 0.2 1.3 0.6 1.3 0.9 0 0.4-0.4 0.9-1.1 1z"></path><path d="M0 2v12h16v-12h-16zM15 13h-14v-10h14v10z"></path><path d="M8 5h6v1h-6v-1z"></path><path d="M8 7h6v1h-6v-1z"></path><path d="M8 9h3v1h-3v-1z"></path></g>
<g id="vaadin:italic"><path d="M8 0h3l-3 16h-3z"></path></g>
<g id="vaadin:key-o"><path d="M13 0l-7 6.1c-0.3-0.1-0.6-0.1-1-0.1-2.8 0-5 2.2-5 5s2.3 5 5 5 5-2.2 5-5c0-0.3 0-0.6-0.1-0.9l1.1-1.1v-2h2v-2h2l1-1v-4h-3zM12 6h-1.7l1.7-1.4v1.4zM15 3.6l-0.4 0.4h-1.9l2.3-2v1.6zM7.3 7.6l0.7 0.4 2-1.7v2.3l-0.8 0.8-0.3 0.4 0.1 0.5c0 0.2 0.1 0.5 0.1 0.7 0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c0.3 0 0.5 0 0.8 0.1l0.5 0.1 0.4-0.3 6.6-5.9h1.6l-7.7 6.6z"></path><path d="M6 11.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></g>
<g id="vaadin:key"><path d="M8.1 7c-0.2-0.1-0.4-0.2-0.6-0.3l7.5-6.7h-2l-7 6.1c-0.3-0.1-0.6-0.1-1-0.1-2.8 0-5 2.2-5 5s2.3 5 5 5 5-2.2 5-5c0-0.6-0.1-1.2-0.3-1.7l1.3-1.3v-2h2v-2h2l1-1v-3l-7.9 7zM4 13.2c-0.7 0-1.2-0.6-1.2-1.2s0.6-1.2 1.2-1.2 1.2 0.6 1.2 1.2-0.5 1.2-1.2 1.2z"></path></g>
<g id="vaadin:keyboard-o"><path d="M15 5v7h-14v-7h14zM16 4h-16v9h16v-9z"></path><path d="M4 10h8v1h-8v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M13 10h1v1h-1v-1z"></path><path d="M11 8h1v1h-1v-1z"></path><path d="M9 8h1v1h-1v-1z"></path><path d="M7 8h1v1h-1v-1z"></path><path d="M5 8h1v1h-1v-1z"></path><path d="M3 8h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M12 6v1h1v2h1v-3z"></path><path d="M8 6h1v1h-1v-1z"></path><path d="M6 6h1v1h-1v-1z"></path><path d="M4 6h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path></g>
<g id="vaadin:keyboard"><path d="M0 4v9h16v-9h-16zM10 6h1v1h-1v-1zM8 6h1v1h-1v-1zM10 8v1h-1v-1h1zM6 6h1v1h-1v-1zM8 8v1h-1v-1h1zM4 6h1v1h-1v-1zM6 8v1h-1v-1h1zM2 6h1v1h-1v-1zM3 11h-1v-1h1v1zM3 8h1v1h-1v-1zM12 11h-8v-1h8v1zM12 9h-1v-1h1v1zM14 11h-1v-1h1v1zM14 9h-1v-2h-1v-1h2v3z"></path></g>
<g id="vaadin:laptop"><path d="M14 11v-9h-12v9h-2v2h16v-2h-2zM10 12h-4v-1h4v1zM13 10h-10v-7h10v7z"></path></g>
<g id="vaadin:layout"><path d="M0 0v16h16v-16h-16zM1 3h4v12h-4v-12zM15 15h-9v-12h9v12z"></path></g>
<g id="vaadin:level-down-bold"><path d="M9 16l4-7h-3v-9h-7l2 3h2v6h-3z"></path></g>
<g id="vaadin:level-down"><path d="M5 1h6v11h2l-3 3-3-3h2v-9h-6z"></path></g>
<g id="vaadin:level-left-bold"><path d="M0 7l7-4v3h9v7l-3-2v-2h-6v3z"></path></g>
<g id="vaadin:level-left"><path d="M15 12v-6h-11v-2l-3 3 3 3v-2h9v6z"></path></g>
<g id="vaadin:level-right-bold"><path d="M16 7l-7-4v3h-9v7l3-2v-2h6v3z"></path></g>
<g id="vaadin:level-right"><path d="M1 12v-6h11v-2l3 3-3 3v-2h-9v6z"></path></g>
<g id="vaadin:level-up-bold"><path d="M9 0l4 7h-3v9h-7l2-3h2v-6h-3z"></path></g>
<g id="vaadin:level-up"><path d="M11 15h-6v-11h-2l3-3 3 3h-2v9h6z"></path></g>
<g id="vaadin:lifebuoy"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM4 8c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.2-1.8 4-4 4s-4-1.8-4-4zM12.6 9.8c0.3-0.5 0.4-1.2 0.4-1.8s-0.1-1.3-0.4-1.8l1.5-1.5c0.6 1 0.9 2.1 0.9 3.3s-0.3 2.3-0.8 3.3l-1.6-1.5zM11.3 1.8l-1.5 1.6c-0.5-0.3-1.2-0.4-1.8-0.4s-1.3 0.1-1.8 0.4l-1.5-1.6c1-0.5 2.1-0.8 3.3-0.8s2.3 0.3 3.3 0.8zM1.8 4.7l1.5 1.5c-0.2 0.5-0.3 1.2-0.3 1.8s0.1 1.3 0.4 1.8l-1.5 1.5c-0.6-1-0.9-2.1-0.9-3.3s0.3-2.3 0.8-3.3zM4.7 14.2l1.5-1.5c0.5 0.2 1.2 0.3 1.8 0.3s1.3-0.1 1.8-0.4l1.5 1.5c-1 0.6-2.1 0.9-3.3 0.9s-2.3-0.3-3.3-0.8z"></path></g>
<g id="vaadin:lightbulb"><path d="M8 0c-2.761 0-5 2.239-5 5 0.013 1.672 0.878 3.138 2.182 3.989l0.818 2.011c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.41c0.342 0.55 0.915 0.929 1.581 0.999 0.684-0.071 1.258-0.449 1.594-0.99l0.415-0.009c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5l0.8-2c1.322-0.862 2.187-2.328 2.2-3.998 0-2.763-2.239-5.002-5-5.002zM10.25 8.21l-0.25 0.17-0.11 0.29-0.89 2.14c-0.042 0.111-0.147 0.189-0.27 0.19h-1.51c-0.103-0.020-0.186-0.093-0.219-0.188l-0.871-2.142-0.13-0.29-0.25-0.18c-1.045-0.7-1.729-1.868-1.75-3.197-0-2.212 1.791-4.003 4-4.003s4 1.791 4 4c-0.017 1.336-0.702 2.509-1.736 3.201z"></path><path d="M10.29 3c-0.574-0.612-1.387-0.995-2.289-1l-0.001 1c0.585 0.002 1.115 0.238 1.5 0.62 0.278 0.386 0.459 0.858 0.499 1.37l1.001 0.009c-0.045-0.756-0.305-1.443-0.718-2.011z"></path></g>
<g id="vaadin:line-bar-chart"><path d="M5 11h3v5h-3v-5z"></path><path d="M1 14h3v2h-3v-2z"></path><path d="M13 12h3v4h-3v-4z"></path><path d="M9 9h3v7h-3v-7z"></path><path d="M16 0.070l-5.68 4.97-5.47-1.7-4.85 3.76v1.9l5.15-4 5.53 1.72 5.32-4.66v-1.99z"></path></g>
<g id="vaadin:line-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M9 8l-3-3-4 4v2l4-4 3 3 7-7v-2z"></path></g>
<g id="vaadin:line-h"><path d="M0 7h16v1h-16v-1z"></path></g>
<g id="vaadin:line-v"><path d="M8 0h1v16h-1v-16z"></path></g>
<g id="vaadin:lines-list"><path d="M0 1h3v2h-3v-2z"></path><path d="M0 5h3v2h-3v-2z"></path><path d="M0 9h3v2h-3v-2z"></path><path d="M0 13h3v2h-3v-2z"></path><path d="M4 1h12v2h-12v-2z"></path><path d="M4 5h12v2h-12v-2z"></path><path d="M4 9h12v2h-12v-2z"></path><path d="M4 13h12v2h-12v-2z"></path></g>
<g id="vaadin:lines"><path d="M0 1h16v2h-16v-2z"></path><path d="M0 5h16v2h-16v-2z"></path><path d="M0 9h16v2h-16v-2z"></path><path d="M0 13h16v2h-16v-2z"></path></g>
<g id="vaadin:link"><path d="M14.9 1.1c-1.4-1.4-3.7-1.4-5.1 0l-4.4 4.3c-1.4 1.5-1.4 3.7 0 5.2 0.1 0.1 0.3 0.2 0.4 0.3l1.5-1.5c-0.1-0.1-0.3-0.2-0.4-0.3-0.6-0.6-0.6-1.6 0-2.2l4.4-4.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-1.3 1.3c0.4 0.8 0.5 1.7 0.4 2.5l2.3-2.3c1.5-1.4 1.5-3.7 0-5.1z"></path><path d="M10.2 5.1l-1.5 1.5c0 0 0.3 0.2 0.4 0.3 0.6 0.6 0.6 1.6 0 2.2l-4.4 4.4c-0.6 0.6-1.6 0.6-2.2 0s-0.6-1.6 0-2.2l1.3-1.3c-0.4-0.8-0.1-1.3-0.4-2.5l-2.3 2.3c-1.4 1.4-1.4 3.7 0 5.1s3.7 1.4 5.1 0l4.4-4.4c1.4-1.4 1.4-3.7 0-5.1-0.2-0.1-0.4-0.3-0.4-0.3z"></path></g>
<g id="vaadin:list-ol"><path d="M4 0h12v4h-12v-4z"></path><path d="M4 6h12v4h-12v-4z"></path><path d="M4 12h12v4h-12v-4z"></path><path d="M1 0l-0.9 0.5 0.2 0.7 0.7-0.3v3.1h1v-4z"></path><path d="M2.2 13.9c0.3-0.2 0.5-0.5 0.5-0.8 0-0.5-0.4-1-1.3-1-0.5 0-1 0.1-1.2 0.3h-0.1l0.2 0.8 0.1-0.1c0.1-0.1 0.4-0.2 0.7-0.2s0.4 0.1 0.4 0.3c0 0.4-0.5 0.4-0.6 0.4h-0.4v0.7h0.4c0.3 0 0.6 0.1 0.6 0.4 0 0.2-0.2 0.4-0.6 0.4s-0.7-0.2-0.8-0.2l-0.1-0.1v0.9h0.1c0.2 0.2 0.6 0.3 1.1 0.3 1 0 1.6-0.5 1.6-1.2 0-0.4-0.2-0.8-0.6-0.9z"></path><path d="M0.1 6.4l0.3 1c0 0 0.7-0.6 1.2-0.3 1.1 0.8-1.6 2.4-1.6 2.4v0.5h3v-1h-1.2c0.6-0.5 1.2-1.2 1-1.9-0.5-1.9-2.7-0.7-2.7-0.7z"></path></g>
<g id="vaadin:list-select"><path d="M1 0h12v2h-12v-2z"></path><path d="M1 8h13v2h-13v-2z"></path><path d="M1 11h11v2h-11v-2z"></path><path d="M1 14h14v2h-14v-2z"></path><path d="M0 3v4h16v-4h-16zM11 6h-10v-2h10v2z"></path></g>
<g id="vaadin:list-ul"><path d="M0 1h3v3h-3v-3z"></path><path d="M0 6h3v3h-3v-3z"></path><path d="M0 11h3v3h-3v-3z"></path><path d="M5 1h11v3h-11v-3z"></path><path d="M5 6h11v3h-11v-3z"></path><path d="M5 11h11v3h-11v-3z"></path></g>
<g id="vaadin:list"><path d="M0 0h4v3h-4v-3z"></path><path d="M0 4h4v3h-4v-3z"></path><path d="M0 12h4v3h-4v-3z"></path><path d="M0 8h4v3h-4v-3z"></path><path d="M5 0h11v3h-11v-3z"></path><path d="M5 4h11v3h-11v-3z"></path><path d="M5 12h11v3h-11v-3z"></path><path d="M5 8h11v3h-11v-3z"></path></g>
<g id="vaadin:location-arrow-circle-o"><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path><path d="M2 9l10-5-5 10v-5z"></path></g>
<g id="vaadin:location-arrow-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 14v-5h-5l10-5-5 10z"></path></g>
<g id="vaadin:location-arrow"><path d="M0 9l16-9-9 16v-7z"></path></g>
<g id="vaadin:lock"><path d="M12 8v-3.1c0-2.2-1.6-3.9-3.8-3.9h-0.3c-2.1 0-3.9 1.7-3.9 3.9v3.1h-1l0.1 5c0 0-0.1 3 4.9 3s5-3 5-3v-5h-1zM9 14h-1v-2c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1v3zM10 8h-4v-3.1c0-1.1 0.9-1.9 1.9-1.9h0.3c1 0 1.8 0.8 1.8 1.9v3.1z"></path></g>
<g id="vaadin:magic"><path d="M0 5h3v1h-3v-1z"></path><path d="M5 0h1v3h-1v-3z"></path><path d="M6 11h-1v-2.5l1 1z"></path><path d="M11 6h-1.5l-1-1h2.5z"></path><path d="M3.131 7.161l0.707 0.707-2.97 2.97-0.707-0.707 2.97-2.97z"></path><path d="M10.131 0.161l0.707 0.707-2.97 2.97-0.707-0.707 2.97-2.97z"></path><path d="M0.836 0.199l3.465 3.465-0.707 0.707-3.465-3.465 0.707-0.707z"></path><path d="M6.1 4.1l-2.1 2 9.8 9.9 2.2-2.1-9.9-9.8zM6.1 5.5l2.4 2.5-0.6 0.6-2.5-2.5 0.7-0.6z"></path></g>
<g id="vaadin:magnet"><path d="M11 0h5v4h-5v-4z"></path><path d="M11 5v3c0 1.6-1.4 3-3 3s-3-1.4-3-3v-3h-5v3c0 4.4 3.6 8 8 8s8-3.6 8-8v-3h-5z"></path><path d="M0 0h5v4h-5v-4z"></path></g>
<g id="vaadin:mailbox"><path d="M13 1h-10l-3 9v5h16v-5l-3-9zM11 10v2h-6v-2h-3.9l2.7-8h8.6l2.7 8h-4.1z"></path></g>
<g id="vaadin:male"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M12.79 7.32l-2.6-2.63c-0.421-0.426-1.004-0.69-1.65-0.69h-1.070c-0 0-0 0-0.001 0-0.648 0-1.235 0.264-1.659 0.69l-2.6 2.63c-0.216 0.129-0.358 0.362-0.358 0.628 0 0.403 0.327 0.73 0.73 0.73 0.266 0 0.499-0.142 0.626-0.355l1.792-1.793v9.47h1.5v-5h1v5h1.5v-9.47l1.75 1.8c0.135 0.175 0.344 0.287 0.58 0.287 0.403 0 0.73-0.327 0.73-0.73 0-0.228-0.105-0.432-0.269-0.566z"></path></g>
<g id="vaadin:map-marker"><path d="M8 0c-2.8 0-5 2.2-5 5s4 11 5 11c1 0 5-8.2 5-11s-2.2-5-5-5zM8 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"></path></g>
<g id="vaadin:margin-bottom"><path d="M0 0v14h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-13h-16zM15 12h-14v-11h14v11z"></path><path d="M0 15h1v1h-1v-1z"></path><path d="M1 14h1v1h-1v-1z"></path><path d="M2 15h1v1h-1v-1z"></path><path d="M3 14h1v1h-1v-1z"></path><path d="M4 15h1v1h-1v-1z"></path><path d="M5 14h1v1h-1v-1z"></path><path d="M6 15h1v1h-1v-1z"></path><path d="M7 14h1v1h-1v-1z"></path><path d="M8 15h1v1h-1v-1z"></path><path d="M9 14h1v1h-1v-1z"></path><path d="M10 15h1v1h-1v-1z"></path><path d="M11 14h1v1h-1v-1z"></path><path d="M12 15h1v1h-1v-1z"></path><path d="M13 14h1v1h-1v-1z"></path><path d="M14 15h1v1h-1v-1z"></path><path d="M15 14h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-left"><path d="M2 0v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h13v-16h-14zM15 15h-11v-14h11v14z"></path><path d="M0 0h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-right"><path d="M14 2v-1h-1v-1h-13v16h14v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1zM12 15h-11v-14h11v14z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-top"><path d="M15 2v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v13h16v-14h-1zM15 15h-14v-11h14v11z"></path><path d="M15 0h1v1h-1v-1z"></path><path d="M14 1h1v1h-1v-1z"></path><path d="M13 0h1v1h-1v-1z"></path><path d="M12 1h1v1h-1v-1z"></path><path d="M11 0h1v1h-1v-1z"></path><path d="M10 1h1v1h-1v-1z"></path><path d="M9 0h1v1h-1v-1z"></path><path d="M8 1h1v1h-1v-1z"></path><path d="M7 0h1v1h-1v-1z"></path><path d="M6 1h1v1h-1v-1z"></path><path d="M5 0h1v1h-1v-1z"></path><path d="M4 1h1v1h-1v-1z"></path><path d="M3 0h1v1h-1v-1z"></path><path d="M2 1h1v1h-1v-1z"></path><path d="M1 0h1v1h-1v-1z"></path><path d="M0 1h1v1h-1v-1z"></path></g>
<g id="vaadin:margin"><path d="M0 0h1v1h-1v-1z"></path><path d="M2 0h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M4 0h1v1h-1v-1z"></path><path d="M3 1h1v1h-1v-1z"></path><path d="M5 1h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M6 0h1v1h-1v-1z"></path><path d="M8 0h1v1h-1v-1z"></path><path d="M7 1h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M10 0h1v1h-1v-1z"></path><path d="M9 1h1v1h-1v-1z"></path><path d="M11 1h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M12 0h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path><path d="M13 1h1v1h-1v-1z"></path><path d="M13 2h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1zM12 12h-8v-8h8v8z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path></g>
<g id="vaadin:medal"><path d="M10 12.2c-0.3 0-0.5-0.1-0.8-0.2l-1.2-0.5-1.2 0.5c-0.2 0.1-0.5 0.2-0.8 0.2-0.2 0-0.3 0-0.5-0.1l-0.5 3.9 3-2 3 2-0.6-3.9c-0.1 0.1-0.3 0.1-0.4 0.1z"></path><path d="M12.9 5.9c-0.1-0.2-0.1-0.5 0-0.7l0.6-1.2c0.2-0.4 0-0.9-0.5-1.1l-1.3-0.5c-0.2-0.1-0.4-0.3-0.5-0.5l-0.5-1.3c-0.1-0.4-0.4-0.6-0.7-0.6-0.1 0-0.3 0-0.4 0.1l-1.3 0.6c-0.1 0-0.2 0-0.3 0s-0.2 0-0.3-0.1l-1.3-0.5c-0.1-0.1-0.3-0.1-0.4-0.1-0.3 0-0.6 0.2-0.8 0.5l-0.5 1.4c0 0.2-0.2 0.4-0.4 0.5l-1.4 0.5c-0.4 0.1-0.6 0.6-0.4 1.1l0.6 1.3c0.1 0.2 0.1 0.5 0 0.7l-0.6 1.2c-0.2 0.4 0 0.9 0.5 1.1l1.3 0.5c0.2 0.1 0.4 0.3 0.5 0.5l0.5 1.3c0.1 0.4 0.4 0.6 0.7 0.6 0.1 0 0.2 0 0.3-0.1l1.3-0.6c0.1 0 0.2-0.1 0.3-0.1s0.2 0 0.3 0.1l1.3 0.6c0.1 0.1 0.2 0.1 0.3 0.1 0.3 0 0.6-0.2 0.8-0.5l0.5-1.3c0.1-0.2 0.3-0.4 0.5-0.5l1.3-0.5c0.4-0.2 0.7-0.7 0.5-1.1l-0.5-1.4zM8 9.6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4c0 2.2-1.8 4-4 4z"></path><path d="M11 5.6c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path></g>
<g id="vaadin:megaphone"><path d="M15.5 5.4l-0.5-0.4v-4c0-0.6-0.4-1-1-1s-1 0.4-1 1v0.5c-2 0.9-5 2.5-8 2.5h-2.5c-1.4 0-2.5 1.2-2.5 2.5 0 0.9 0.5 1.7 1.2 2.1l1.1 5.9c0 0.3 0.3 0.5 0.7 0.5 0.1 0 0.1 0 0.2 0l3.6-0.7c0.4-0.1 0.6-0.4 0.5-0.7-0.3-0.6-0.8-1.5-1.2-1.8-0.2-0.1-0.5-0.9-0.7-1.8h0.6v-0.9c2.7 0.3 6 1.6 7 2.4v0.5c0 0.6 0.4 1 1 1s1-0.4 1-1v-4l0.4-0.3c0.4-0.3 0.6-0.7 0.6-1.1v-0.2c0-0.4-0.2-0.7-0.5-1zM2 5h3v1h-3v-1zM5.6 12.6c0.1 0 0.3 0.3 0.5 0.7l-2.8 0.7-1-5h1.9c0.2 1.3 0.6 3.2 1.4 3.6zM13 10.3c-1.6-0.8-4.4-2-7-2.3v-3c2.6-0.3 5.4-1.4 7-2.3v7.6z"></path></g>
<g id="vaadin:meh-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M4 10h8v1h-8v-1z"></path></g>
<g id="vaadin:menu"><path d="M0 1h16v3h-16v-3z"></path><path d="M0 6h16v3h-16v-3z"></path><path d="M0 11h16v3h-16v-3z"></path></g>
<g id="vaadin:microphone"><path d="M8 10v0c-1.7 0-3-1.3-3-3v-4c0-1.6 1.3-3 3-3v0c1.6 0 3 1.3 3 3v4c0 1.6-1.4 3-3 3z"></path><path d="M12 5v2.5c0 1.9-1.8 3.5-3.8 3.5h-0.4c-2 0-3.8-1.6-3.8-3.5v-2.5c-0.6 0-1 0.4-1 1v1.5c0 2.2 1.8 4.1 4 4.4v2.1c-3 0-2.5 2-2.5 2h7c0 0 0.5-2-2.5-2v-2.1c2.2-0.4 4-2.2 4-4.4v-1.5c0-0.6-0.4-1-1-1z"></path></g>
<g id="vaadin:minus-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M3 7h10v2h-10v-2z"></path></g>
<g id="vaadin:minus-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13 9h-10v-2h10v2z"></path></g>
<g id="vaadin:minus-square-o"><path d="M4 7h8v2h-8v-2z"></path><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:minus"><path d="M2 7h12v2h-12v-2z"></path></g>
<g id="vaadin:mobile-browser"><path d="M16 0h-13v5h-3v11h7v-3h9v-13zM6 1h9v1h-9v-1zM4 1h1v1h-1v-1zM4 15h-1v-1h1v1zM6 13h-5v-7h5v7zM15 12h-8v-7h-3v-2h11v9z"></path></g>
<g id="vaadin:mobile-retro"><path d="M11 0h-1v2h-6v14h7v-16zM6 14h-1v-1h1v1zM6 12h-1v-1h1v1zM6 10h-1v-1h1v1zM8 14h-1v-1h1v1zM8 12h-1v-1h1v1zM8 10h-1v-1h1v1zM10 14h-1v-1h1v1zM10 12h-1v-1h1v1zM10 10h-1v-1h1v1zM10 8h-5v-4h5v4z"></path></g>
<g id="vaadin:mobile"><path d="M4 1v14h8v-14h-8zM9 14h-2v-1h2v1zM11 12h-6v-9h6v9z"></path></g>
<g id="vaadin:modal-list"><path d="M3 6h2v1h-2v-1z"></path><path d="M6 6h7v1h-7v-1z"></path><path d="M3 8h2v1h-2v-1z"></path><path d="M6 8h7v1h-7v-1z"></path><path d="M3 10h2v1h-2v-1z"></path><path d="M6 10h7v1h-7v-1z"></path><path d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:modal"><path d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:money-deposit"><path d="M8 16l-2-3h1v-2h2v2h1l-2 3z"></path><path d="M15 1v8h-14v-8h14zM16 0h-16v10h16v-10z"></path><path d="M8 2c1.657 0 3 1.343 3 3s-1.343 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 5c0-1.657 1.343-3 3-3h-5v1h-1v4h1v1h5c-1.657 0-3-1.343-3-3z"></path></g>
<g id="vaadin:money-exchange"><path d="M16 14l-3 2v-1h-4.75l2-2h2.75v-1l3 2z"></path><path d="M0 2l3-2v1h4.75l-2 2h-2.75v1l-3-2z"></path><path d="M9.74 0l-9.74 9.74 6.26 6.26 9.74-9.74zM1.39 9.74l8.35-8.35 4.87 4.87-8.35 8.35z"></path><path d="M4.17 9.74l-0.7 0.7 2.090 2.090 0.7-0.7 0.74 0.69 2.74-2.78c-0.445 0.445-1.060 0.721-1.74 0.721-1.359 0-2.461-1.102-2.461-2.461 0-0.68 0.275-1.295 0.721-1.74l-2.78 2.74z"></path><path d="M12.52 5.57l-2.090-2.090-0.7 0.7-0.73-0.7-2.74 2.78c0.445-0.445 1.060-0.721 1.74-0.721 1.359 0 2.461 1.102 2.461 2.461 0 0.68-0.275 1.295-0.721 1.74l2.78-2.74-0.7-0.7z"></path></g>
<g id="vaadin:money-withdraw"><path d="M8 0l2 3h-1v2h-2v-2h-1l2-3z"></path><path d="M15 7v8h-14v-8h14zM16 6h-16v10h16v-10z"></path><path d="M8 8c1.657 0 3 1.343 3 3s-1.343 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 11c0-1.657 1.343-3 3-3h-5v1h-1v4h1v1h5c-1.657 0-3-1.343-3-3z"></path></g>
<g id="vaadin:money"><path d="M15 4v8h-14v-8h14zM16 3h-16v10h16v-10z"></path><path d="M8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 8c0-1.7 1.3-3 3-3h-5v1h-1v4h1v1h5c-1.7 0-3-1.3-3-3z"></path></g>
<g id="vaadin:moon-o"><path d="M13.2 11.9c-4.5 0-8.1-3.6-8.1-8.1 0-1.4 0.3-2.7 0.9-3.8-3.4 0.9-6 4.1-6 7.9 0 4.5 3.6 8.1 8.1 8.1 3.1 0 5.8-1.8 7.2-4.4-0.6 0.2-1.3 0.3-2.1 0.3zM8.1 15c-3.9 0-7.1-3.2-7.1-7.1 0-2.5 1.3-4.7 3.3-6-0.2 0.6-0.2 1.2-0.2 1.9 0 5 4.1 9.1 9.1 9.2-1.4 1.2-3.2 2-5.1 2z"></path></g>
<g id="vaadin:moon"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 15c-3.9 0-7-3.1-7-7 0-2.4 1.2-4.6 3.2-5.9-0.1 0.6-0.2 1.3-0.2 1.9 0 4.9 4 8.9 8.9 9-1.3 1.3-3 2-4.9 2z"></path></g>
<g id="vaadin:morning"><path d="M14 10l-1.58-1.18 0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 10c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:movie"><path d="M12 7v-3h-12v9h12v-3l4 2v-7l-4 2zM9 11h-7v-5h7v5z"></path><path d="M5 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M8 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:music"><path d="M4 3v9.4c-0.4-0.2-0.9-0.4-1.5-0.4-1.4 0-2.5 0.9-2.5 2s1.1 2 2.5 2 2.5-0.9 2.5-2v-7.3l7-2.3v5.1c-0.4-0.3-0.9-0.5-1.5-0.5-1.4 0-2.5 0.9-2.5 2s1.1 2 2.5 2 2.5-0.9 2.5-2v-11l-9 3z"></path></g>
<g id="vaadin:mute"><path d="M15.2 0l-4.2 4.2v-1.2c0-1.7-1.3-3-3-3s-3 1.3-3 3v4c0 0.9 0.4 1.7 1 2.2l-0.8 0.8c-0.7-0.6-1.2-1.5-1.2-2.5v-2.5c-0.6 0-1 0.4-1 1v1.5c0 1.3 0.6 2.4 1.5 3.2l-4.5 4.6v0.7h0.7l15.3-15.4v-0.6h-0.8z"></path><path d="M12.5 5.1l-0.5 0.5v1.9c0 1.9-1.8 3.5-3.8 3.5h-0.4c-0.3 0-0.6-0.1-0.9-0.1l-0.9 0.7c0.3 0.1 0.6 0.2 1 0.3v2.1c-3 0-2.5 2-2.5 2h7c0 0 0.5-2-2.5-2v-2.1c2.2-0.4 4-2.2 4-4.4v-1.5c0-0.4-0.2-0.7-0.5-0.9z"></path><path d="M11 7v-0.4l-3.3 3.4c0.1 0 0.2 0 0.3 0 1.7 0 3-1.4 3-3z"></path></g>
<g id="vaadin:native-button"><path d="M15 12h-14c-0.6 0-1-0.4-1-1v-6c0-0.6 0.4-1 1-1h14c0.6 0 1 0.4 1 1v6c0 0.6-0.4 1-1 1z"></path></g>
<g id="vaadin:newspaper"><path d="M2 4h11v4h-11v-4z"></path><path d="M2 2h11v1h-11v-1z"></path><path d="M8 13h3v1h-3v-1z"></path><path d="M8 11h5v1h-5v-1z"></path><path d="M8 9h5v1h-5v-1z"></path><path d="M2 13h5v1h-5v-1z"></path><path d="M2 11h5v1h-5v-1z"></path><path d="M2 9h5v1h-5v-1z"></path><path d="M15 2v-2h-15v14.5c0 0.828 0.672 1.5 1.5 1.5h13c0.828 0 1.5-0.672 1.5-1.5v-12.5h-1zM1.5 15c-0.276 0-0.5-0.224-0.5-0.5v-13.5h13v12.5c0 1.5 1 1.5 1 1.5h-13.5z"></path></g>
<g id="vaadin:notebook"><path d="M2 0v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v2h12v-15.88h-12zM3.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 10c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM12 6h-6v-3h6v3z"></path></g>
<g id="vaadin:nurse"><path d="M15.2 12c-0.658-1.414-2.067-2.376-3.701-2.376-0.077 0-0.154 0.002-0.23 0.006l-3.269 3.9-3.28-3.9c-0.049-0.002-0.106-0.003-0.163-0.003-1.648 0-3.072 0.958-3.746 2.348-0.422 0.9-0.707 1.917-0.808 2.988l1.997 0.037v1h12v-1h2c-0.104-1.107-0.388-2.124-0.824-3.057z"></path><path d="M6.57 8.73c-0.038 0.374-0.322 0.671-0.685 0.729l2.115 2.541 2.12-2.52c-0.368-0.059-0.652-0.356-0.69-0.727-0-0.613 0.8-0.413 1.43-1.453 0-0.030 2.88-7.3-2.86-7.3s-2.86 7.27-2.86 7.27c0.63 1.050 1.44 0.85 1.43 1.46z"></path></g>
<g id="vaadin:office"><path d="M14 15v-11h-3v-3h-9v14h-2v1h7v-3h2v3h7v-1h-2zM6 11h-2v-2h2v2zM6 8h-2v-2h2v2zM6 5h-2v-2h2v2zM9 11h-2v-2h2v2zM9 8h-2v-2h2v2zM9 5h-2v-2h2v2zM13 11h-2v-2h2v2zM13 8h-2v-2h2v2z"></path></g>
<g id="vaadin:open-book"><path d="M15 4.7v-0.7c-1.159-1.163-2.734-1.91-4.484-1.999-0.112-0.012-0.222-0.018-0.334-0.018-0.874 0-1.657 0.394-2.179 1.013-0.556-0.617-1.357-1.007-2.249-1.007-0.090 0-0.178 0.004-0.266 0.012-1.754 0.089-3.33 0.836-4.488 1.999l-0 0.7-1 0.3v10l6.7-1.4 0.3 0.4h2l0.3-0.4 6.7 1.4v-10zM5.48 11.31c-1.275 0.037-2.467 0.358-3.526 0.902l0.046-7.792c0.885-0.835 2.066-1.365 3.369-1.42 0.806 0.054 1.534 0.303 2.159 0.701l-0.019 7.869c-0.555-0.166-1.193-0.262-1.854-0.262-0.062 0-0.124 0.001-0.185 0.003zM14 12.19c-1.013-0.522-2.205-0.843-3.468-0.88-0.056-0.001-0.108-0.002-0.161-0.002-0.66 0-1.297 0.096-1.899 0.274l0.047-7.902c0.601-0.381 1.322-0.627 2.096-0.679 1.324 0.055 2.501 0.586 3.386 1.422l-0.003 7.768z"></path></g>
<g id="vaadin:option-a"><path d="M12.5 10h-1.5v-4h1.5c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5c-1.381 0-2.5 1.119-2.5 2.5v1.5h-4v-1.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 1.381 1.119 2.5 2.5 2.5h1.5v4h-1.5c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5c1.381 0 2.5-1.119 2.5-2.5v-1.5h4v1.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM11 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5h-1.5v-1.5zM5 12.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5h1.5v1.5zM5 5h-1.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5v1.5zM10 10h-4v-4h4v4zM12.5 14c-0.828 0-1.5-0.672-1.5-1.5v-1.5h1.5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z"></path></g>
<g id="vaadin:option"><path d="M4 11c0 0.552 0.448 1 1 1s1-0.448 1-1v-1h-1c-0.552 0-1 0.448-1 1z"></path><path d="M0 0v16h16v-16h-16zM11 9c1.105 0 2 0.895 2 2s-0.895 2-2 2c-1.105 0-2-0.895-2-2v-1h-2v1c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2h1v-2h-1c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2v1h2v-1c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2h-1v2h1z"></path><path d="M12 5c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h1c0.552 0 1-0.448 1-1z"></path><path d="M5 4c-0.552 0-1 0.448-1 1s0.448 1 1 1h1v-1c0-0.552-0.448-1-1-1z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M10 11c0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.552-0.448-1-1-1h-1v1z"></path></g>
<g id="vaadin:options"><path d="M5 3.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M3.5 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM3.5 6c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path><path d="M3.5 8c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zM3.5 14c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path><path d="M8 2h8v3h-8v-3z"></path><path d="M8 10h8v3h-8v-3z"></path></g>
<g id="vaadin:orientation"><path d="M11 2.1c2 0 3 1.3 3 2.9h-1l1.5 2 1.5-2h-1c0-2.2-2-3.9-4-3.9v-1.1l-2 1.5 2 1.5v-0.9z"></path><path d="M9 9h6v6h-7v-15h-8v16h16v-8h-7v1zM7 8h-1v1h1v6h-6v-14h6v7z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path></g>
<g id="vaadin:out"><path d="M3.5 8c0.3 0 0.5 0.2 0.5 0.5v2c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-2c0-0.3 0.2-0.5 0.5-0.5v0zM3.5 7v0c-0.8 0-1.5 0.7-1.5 1.5v2c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v-2c0-0.8-0.7-1.5-1.5-1.5v0z"></path><path d="M8 7v3.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3.5h-1v3.5c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v-3.5h-1z"></path><path d="M13 7h-3v1h1v4h1v-4h1z"></path><path d="M15 6v-1h-2.4l-3.7-3c0.1-0.2 0.1-0.3 0.1-0.5 0-0.8-0.7-1.5-1.5-1.5s-1.5 0.7-1.5 1.5c0 0.2 0 0.3 0.1 0.5l-3.7 3h-2.4v9h1v1h15v-9h-1zM6.7 2.8c0.3 0.1 0.5 0.2 0.8 0.2s0.5-0.1 0.8-0.2l2.7 2.2h-7l2.7-2.2zM14 13h-13v-7h13v7z"></path></g>
<g id="vaadin:outbox"><path d="M6 5v6h4v-6h2l-4-5-4 5z"></path><path d="M13 2h-2l0.9 1h0.4l2.6 8h-3.9v2h-6v-2h-3.9l2.6-8h0.4l0.9-1h-2l-3 9v5h16v-5z"></path></g>
<g id="vaadin:package"><path d="M8 0l-8 2v10l8 4 8-4v-10l-8-2zM8 1l2.1 0.5-5.9 1.9-2.3-0.8 6.1-1.6zM8 14.9l-7-3.5v-8.1l3 1v3.4l1 0.3v-3.3l3 1v9.2zM8.5 4.8l-2.7-0.9 6.2-1.9 2.4 0.6-5.9 2.2z"></path></g>
<g id="vaadin:padding-bottom"><path d="M16 16v-16h-16v16h16zM1 13h1v-1h-1v-11h14v12h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1z"></path><path d="M12 13h1v1h-1v-1z"></path><path d="M13 12h1v1h-1v-1z"></path><path d="M11 12h1v1h-1v-1z"></path><path d="M9 12h1v1h-1v-1z"></path><path d="M10 13h1v1h-1v-1z"></path><path d="M8 13h1v1h-1v-1z"></path><path d="M6 13h1v1h-1v-1z"></path><path d="M7 12h1v1h-1v-1z"></path><path d="M5 12h1v1h-1v-1z"></path><path d="M3 12h1v1h-1v-1z"></path><path d="M4 13h1v1h-1v-1z"></path><path d="M2 13h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-left"><path d="M0 16h16v-16h-16v16zM3 1v1h1v-1h11v14h-12v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h1z"></path><path d="M2 12h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M3 11h1v1h-1v-1z"></path><path d="M3 9h1v1h-1v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path><path d="M3 7h1v1h-1v-1z"></path><path d="M3 5h1v1h-1v-1z"></path><path d="M3 3h1v1h-1v-1z"></path><path d="M2 4h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-right"><path d="M16 0h-16v16h16v-16zM13 15v-1h-1v1h-11v-14h12v1h1v-1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M12 2h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-top"><path d="M0 0v16h16v-16h-16zM15 3h-1v1h1v11h-14v-12h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1z"></path><path d="M3 2h1v1h-1v-1z"></path><path d="M2 3h1v1h-1v-1z"></path><path d="M4 3h1v1h-1v-1z"></path><path d="M6 3h1v1h-1v-1z"></path><path d="M5 2h1v1h-1v-1z"></path><path d="M7 2h1v1h-1v-1z"></path><path d="M9 2h1v1h-1v-1z"></path><path d="M8 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M12 3h1v1h-1v-1z"></path><path d="M11 2h1v1h-1v-1z"></path><path d="M13 2h1v1h-1v-1z"></path></g>
<g id="vaadin:padding"><path d="M0 0v16h16v-16h-16zM15 3h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1z"></path><path d="M3 2h1v1h-1v-1z"></path><path d="M4 3h1v1h-1v-1z"></path><path d="M6 3h1v1h-1v-1z"></path><path d="M5 2h1v1h-1v-1z"></path><path d="M7 2h1v1h-1v-1z"></path><path d="M9 2h1v1h-1v-1z"></path><path d="M8 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M12 3h1v1h-1v-1z"></path><path d="M11 2h1v1h-1v-1z"></path><path d="M13 2h1v1h-1v-1z"></path><path d="M12 5h1v1h-1v-1z"></path><path d="M13 4h1v1h-1v-1z"></path><path d="M12 7h1v1h-1v-1z"></path><path d="M13 6h1v1h-1v-1z"></path><path d="M12 9h1v1h-1v-1z"></path><path d="M13 8h1v1h-1v-1z"></path><path d="M12 11h1v1h-1v-1z"></path><path d="M13 10h1v1h-1v-1z"></path><path d="M12 13h1v1h-1v-1z"></path><path d="M13 12h1v1h-1v-1z"></path><path d="M2 3h1v1h-1v-1z"></path><path d="M3 4h1v1h-1v-1z"></path><path d="M2 5h1v1h-1v-1z"></path><path d="M3 6h1v1h-1v-1z"></path><path d="M2 7h1v1h-1v-1z"></path><path d="M3 8h1v1h-1v-1z"></path><path d="M2 9h1v1h-1v-1z"></path><path d="M3 10h1v1h-1v-1z"></path><path d="M2 11h1v1h-1v-1z"></path><path d="M2 13h1v1h-1v-1z"></path><path d="M3 12h1v1h-1v-1z"></path><path d="M4 11h1v1h-1v-1z"></path><path d="M4 13h1v1h-1v-1z"></path><path d="M5 12h1v1h-1v-1z"></path><path d="M6 13h1v1h-1v-1z"></path><path d="M7 12h1v1h-1v-1z"></path><path d="M9 12h1v1h-1v-1z"></path><path d="M8 13h1v1h-1v-1z"></path><path d="M11 12h1v1h-1v-1z"></path><path d="M10 13h1v1h-1v-1z"></path></g>
<g id="vaadin:paint-roll"><path d="M16 6.9v-4.9h-2v-2h-13v1h-1v3h1v1h13v-2h1v3.1l-8 1v1.9h-1v0.9c0 0 0.5 0 0.5 0.9s-0.5 0.6-0.5 1.5v2.8c0 0 0 0.9 1.5 0.9s1.5-0.9 1.5-0.9v-2.8c0-0.9-0.5-0.7-0.5-1.5s0.5-0.9 0.5-0.9v-0.9h-1v-1.1l8-1z"></path></g>
<g id="vaadin:paintbrush"><path d="M5.6 11.6l-1.2-1.2c-0.8-0.2-2-0.1-2.7 1-0.8 1.1-0.3 2.8-1.7 4.6 0 0 3.5 0 4.8-1.3 1.2-1.2 1.2-2.2 1-3l-0.2-0.1z"></path><path d="M5.8 8.1c-0.2 0.3-0.5 0.7-0.7 1 0 0.2-0.1 0.3-0.2 0.4l1.5 1.5c0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.7-0.4 1-0.7 0.4 0 0.6-0.2 0.8-0.4l-2.2-2.2c-0.2 0.2-0.4 0.4-0.6 0.7z"></path><path d="M15.8 0.2c-0.3-0.3-0.7-0.3-1-0.1 0 0-3 2.5-5.9 5.1-0.4 0.4-0.7 0.7-1.1 1-0.2 0.2-0.4 0.4-0.6 0.5l2.1 2.1c0.2-0.2 0.4-0.4 0.5-0.7 0.3-0.4 0.6-0.7 0.9-1.1 2.5-3 5.1-5.9 5.1-5.9 0.3-0.2 0.3-0.6 0-0.9z"></path></g>
<g id="vaadin:palette"><path d="M8.25 0c-6.38 0-9.11 7.38-8.010 9.92 0.82 1.89 2.62 0.080 3.34 1 1.88 2.46-2.11 3.81 0.090 4.68 2.59 1.060 12.33 0.4 12.33-8.53 0-2.69-1.34-7.070-7.75-7.070zM4.47 9c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM6 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5c-0.011 0-0.021-0-0.032-0-0.814-0.017-1.468-0.682-1.468-1.5 0-0 0-0 0-0zM8.47 14c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 11c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 6c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0z"></path></g>
<g id="vaadin:panel"><path d="M0 0v16h16v-16h-16zM13 15h-12v-12h12v12zM15 15h-1v-1h1v1zM15 13h-1v-8h1v8zM15 4h-1v-1h1v1z"></path></g>
<g id="vaadin:paperclip"><path d="M2.7 15.3c-0.7 0-1.4-0.3-1.9-0.8-0.9-0.9-1.2-2.5 0-3.7l8.9-8.9c1.4-1.4 3.8-1.4 5.2 0s1.4 3.8 0 5.2l-7.4 7.4c-0.2 0.2-0.5 0.2-0.7 0s-0.2-0.5 0-0.7l7.4-7.4c1-1 1-2.7 0-3.7s-2.7-1-3.7 0l-8.9 8.9c-0.8 0.8-0.6 1.7 0 2.2 0.6 0.6 1.5 0.8 2.2 0l8.9-8.9c0.2-0.2 0.2-0.5 0-0.7s-0.5-0.2-0.7 0l-7.4 7.4c-0.2 0.2-0.5 0.2-0.7 0s-0.2-0.5 0-0.7l7.4-7.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-8.9 8.9c-0.6 0.4-1.3 0.7-1.9 0.7z"></path></g>
<g id="vaadin:paperplane-o"><path d="M16 0l-16 8 4.7 1.6 0.3 5.4 2.5-2.8 2.5 3.8 6-16zM7.5 10.4l4.3-5.9-6.2 4.3-3-1 11.6-5.8-4.5 11.8-2.2-3.4z"></path></g>
<g id="vaadin:paperplane"><path d="M0 8l4.9 1.4h0.1v-0.1l7.1-5.3-1.1 1.2-6.2 6.6 0.2 3.2 2.9-3.2 2.1 4.2 6-16z"></path></g>
<g id="vaadin:paragraph"><path d="M5.5 0c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h2.5v7h2v-14h1v14h2v-14h2v-2h-9.5z"></path></g>
<g id="vaadin:password"><path d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z"></path><path d="M6 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M9 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M12 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:paste"><path d="M13 4h-3v-4h-10v14h6v2h10v-9l-3-3zM3 1h4v1h-4v-1zM15 15h-8v-10h5v3h3v7zM13 7v-2l2 2h-2z"></path></g>
<g id="vaadin:pause"><path d="M0 1h7v14h-7v-14z"></path><path d="M9 1h7v14h-7v-14z"></path></g>
<g id="vaadin:pencil"><path d="M1 11.9l-1 4.1 4.1-1 9.2-9.2-3.1-3.1-9.2 9.2zM1.5 15l-0.4-0.5 0.4-2 2 2-2 0.5zM10.9 4.4l-8.1 8-0.6-0.6 8.1-8 0.6 0.6z"></path><path d="M15.3 0.7c-1.1-1.1-2.6-0.5-2.6-0.5l-1.5 1.5 3.1 3.1 1.5-1.5c0-0.1 0.6-1.5-0.5-2.6zM13.4 1.6l-0.5-0.5c0.6-0.6 1.1-0.1 1.1-0.1l-0.6 0.6z"></path></g>
<g id="vaadin:phone-landline"><path d="M15.88 3.86l-0.61-1.31c-0.155-0.326-0.443-0.568-0.792-0.658-1.938-0.528-4.161-0.851-6.453-0.891-2.342 0.041-4.565 0.363-6.687 0.934-0.165 0.048-0.453 0.29-0.605 0.609l-0.613 1.317c-0.075 0.152-0.119 0.331-0.12 0.52v0.87c-0.001 0.012-0.001 0.026-0.001 0.041 0 0.392 0.318 0.71 0.71 0.71 0.011 0 0.022-0 0.033-0.001l2.518 0c0.412-0.010 0.742-0.346 0.742-0.76 0-0.018-0.001-0.035-0.002-0.053l0-0.838c-0-0.004-0-0.008-0-0.012 0-0.229 0.119-0.43 0.298-0.546 0.947-0.508 2.069-0.806 3.26-0.806 0.156 0 0.31 0.005 0.464 0.015 0.122-0.011 0.288-0.017 0.456-0.017 1.178 0 2.287 0.291 3.261 0.805 0.143 0.099 0.262 0.3 0.262 0.529 0 0.004-0 0.009-0 0.013l0 0.859c-0.001 0.015-0.002 0.033-0.002 0.050 0 0.413 0.33 0.75 0.741 0.76l2.521 0c0.009 0 0.020 0.001 0.031 0.001 0.392 0 0.71-0.318 0.71-0.71 0-0.014-0-0.029-0.001-0.043l0-0.868c-0.001-0.189-0.045-0.368-0.123-0.527z"></path><path d="M12 8.3c-0.624-0.797-1.001-1.815-1.001-2.92 0-0.028 0-0.056 0.001-0.084l-0-0.296h-1v1h-4v-1h-1v0.33c0 0.024 0.001 0.052 0.001 0.080 0 1.105-0.377 2.122-1.009 2.93l-2.992 3.66v3h14v-3zM8 13c-1.657 0-3-1.343-3-3s1.343-3 3-3c1.657 0 3 1.343 3 3s-1.343 3-3 3z"></path><path d="M10 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:phone"><path d="M12.2 10c-1.1-0.1-1.7 1.4-2.5 1.8-1.3 0.7-3.7-1.8-3.7-1.8s-2.5-2.4-1.9-3.7c0.5-0.8 2-1.4 1.9-2.5-0.1-1-2.3-4.6-3.4-3.6-2.4 2.2-2.6 3.1-2.6 4.9-0.1 3.1 3.9 7 3.9 7 0.4 0.4 3.9 4 7 3.9 1.8 0 2.7-0.2 4.9-2.6 1-1.1-2.5-3.3-3.6-3.4z"></path></g>
<g id="vaadin:picture"><path d="M16 14h-16v-12h16v12zM1 13h14v-10h-14v10z"></path><path d="M2 10v2h12v-1c0 0 0.2-1.7-2-2-1.9-0.3-2.2 0.6-3.8 0.6-1.1 0-0.9-1.6-3.2-1.6-1.7 0-3 2-3 2z"></path><path d="M13 6c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:pie-bar-chart"><path d="M5 11h3v5h-3v-5z"></path><path d="M1 14h3v2h-3v-2z"></path><path d="M13 12h3v4h-3v-4z"></path><path d="M9 9h3v7h-3v-7z"></path><path d="M5 0c-2.761 0-5 2.239-5 5s2.239 5 5 5c2.761 0 5-2.239 5-5s-2.239-5-5-5zM5 9c-2.209 0-4-1.791-4-4s1.791-4 4-4v4h4c0 2.209-1.791 4-4 4z"></path></g>
<g id="vaadin:pie-chart"><path d="M9 1c3.2 0.2 5.7 2.8 6 6h-6v-6zM8.5 0c-0.2 0-0.3 0-0.5 0v8h8c0-0.2 0-0.3 0-0.5 0-4.1-3.4-7.5-7.5-7.5v0z"></path><path d="M7 9v-8c-3.9 0.3-7 3.5-7 7.5 0 4.1 3.4 7.5 7.5 7.5 4 0 7.2-3.1 7.5-7h-8z"></path></g>
<g id="vaadin:piggy-bank-coin"><path d="M15.93 7.75c-0.061-0.2-0.165-0.371-0.3-0.51-0.105-0.113-0.241-0.197-0.394-0.238 0.074 0.117 0.141 0.252 0.191 0.396 0.056 0.147 0.092 0.304 0.103 0.467 0.008 0.067 0.012 0.138 0.012 0.21s-0.004 0.143-0.012 0.214c-0.035-0.115-0.083-0.208-0.142-0.292-0.123-0.166-0.288-0.299-0.48-0.383-0.119-0.053-0.248-0.082-0.384-0.082-0.346 0-0.648 0.186-0.811 0.464-0.050 0.082-0.090 0.171-0.12 0.266-1.182-1.968-3.309-3.271-5.741-3.271-0.124 0-0.247 0.003-0.369 0.010-0.763 0.001-1.517 0.11-2.231 0.313-0.062-0.434-0.632-1.314-3.252-1.314l0.8 2.51c-0.507 0.411-0.927 0.905-1.247 1.465l-1.553 0.025s-0.17 4 1 4h0.54c0.379 0.638 0.868 1.171 1.445 1.589l0.015 2.411h1.080c1.31 0 1.92 0 1.92-0.75v-0.39c0.451 0.088 0.97 0.139 1.5 0.139s1.049-0.051 1.551-0.147l-0.051 0.398c0 0.75 0.62 0.75 1.94 0.75h1.060v-2.39c0.932-0.651 1.613-1.605 1.903-2.717 0.057-0.027 0.114-0.024 0.172-0.024s0.115-0.003 0.172-0.010c0.251-0.046 0.48-0.144 0.679-0.283 0.266-0.188 0.474-0.454 0.591-0.765 0.028-0.093 0.049-0.191 0.063-0.292l0.001-0.010c0.221-0.262 0.372-0.59 0.419-0.951 0.012-0.084 0.019-0.171 0.019-0.259 0-0.197-0.032-0.386-0.091-0.563zM3.51 7.75c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75zM5.88 7c-0.046 0.015-0.099 0.024-0.154 0.024-0.194 0-0.362-0.11-0.445-0.271-0.013-0.038-0.019-0.078-0.019-0.12 0-0.19 0.136-0.348 0.315-0.383 0.571-0.141 1.224-0.221 1.896-0.221 0.038 0 0.075 0 0.113 0.001 0.026-0 0.064-0.001 0.101-0.001 0.672 0 1.324 0.080 1.949 0.232 0.126 0.024 0.262 0.182 0.262 0.372 0 0.042-0.007 0.082-0.019 0.119-0.070 0.129-0.197 0.223-0.346 0.247l-0.153 0c-0.512-0.127-1.101-0.2-1.706-0.2-0.016 0-0.031 0-0.047 0-0.011-0-0.026-0-0.042-0-0.605 0-1.193 0.073-1.756 0.211zM14.58 9.93c-0.13 0.095-0.285 0.165-0.453 0.199l-0.127 0.001s0-0.13 0-0.13 0-0.21 0-0.31c0.165 0.125 0.374 0.2 0.6 0.2 0.007 0 0.014-0 0.021-0zM14.66 9.25c-0.018 0.003-0.040 0.004-0.061 0.004-0.176 0-0.327-0.103-0.398-0.252-0.044-0.084-0.069-0.18-0.069-0.283s0.025-0.199 0.070-0.283c0.059-0.082 0.157-0.138 0.269-0.138 0.059 0 0.113 0.015 0.161 0.042 0.181 0.070 0.308 0.244 0.308 0.448 0 0 0 0.001 0 0.001 0.009 0.062 0.014 0.133 0.014 0.205s-0.005 0.143-0.015 0.213c-0.066 0.012-0.144 0.024-0.224 0.024-0.019 0-0.039-0.001-0.058-0.002z"></path><path d="M8 3h-1v-0.17h0.25v-1.090h-0.25l0.55-0.55h0.2v1.64h0.25v0.17z"></path><path d="M7.5 0.75c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5zM7.5 0c-1.243 0-2.25 1.007-2.25 2.25s1.007 2.25 2.25 2.25c1.243 0 2.25-1.007 2.25-2.25s-1.007-2.25-2.25-2.25v0z"></path></g>
<g id="vaadin:piggy-bank"><path d="M15.93 5.75c-0.061-0.2-0.165-0.371-0.3-0.51-0.105-0.113-0.241-0.197-0.394-0.238 0.074 0.117 0.141 0.252 0.191 0.396 0.056 0.147 0.092 0.304 0.103 0.467 0.008 0.067 0.012 0.138 0.012 0.21s-0.004 0.143-0.012 0.214c-0.035-0.115-0.083-0.208-0.142-0.292-0.123-0.166-0.288-0.299-0.48-0.383-0.119-0.053-0.248-0.082-0.384-0.082-0.346 0-0.648 0.186-0.811 0.464-0.050 0.082-0.090 0.171-0.12 0.266-1.182-1.968-3.309-3.271-5.741-3.271-0.124 0-0.247 0.003-0.369 0.010-0.763 0.001-1.517 0.11-2.231 0.313-0.062-0.434-0.632-1.314-3.252-1.314l0.8 2.51c-0.507 0.411-0.927 0.905-1.247 1.465l-1.553 0.025s-0.17 4 1 4h0.54c0.379 0.638 0.868 1.171 1.445 1.589l0.015 2.41h1.080c1.31 0 1.92 0 1.92-0.75v-0.39c0.451 0.088 0.97 0.139 1.5 0.139s1.049-0.051 1.551-0.147l-0.051 0.398c0 0.75 0.62 0.75 1.94 0.75h1.060v-2.39c0.932-0.651 1.613-1.605 1.903-2.717 0.057-0.027 0.114-0.024 0.172-0.024s0.115-0.003 0.172-0.010c0.251-0.046 0.48-0.144 0.679-0.283 0.266-0.188 0.474-0.454 0.591-0.765 0.028-0.093 0.049-0.191 0.063-0.292l0.001-0.010c0.221-0.262 0.372-0.59 0.419-0.951 0.012-0.084 0.019-0.171 0.019-0.259 0-0.197-0.032-0.386-0.091-0.563zM3.51 5.75c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75zM5.88 5c-0.046 0.015-0.099 0.024-0.154 0.024-0.194 0-0.362-0.11-0.445-0.271-0.013-0.038-0.019-0.078-0.019-0.12 0-0.19 0.136-0.348 0.315-0.383 0.571-0.141 1.224-0.221 1.896-0.221 0.038 0 0.075 0 0.113 0.001 0.026-0 0.064-0.001 0.101-0.001 0.672 0 1.324 0.080 1.949 0.232 0.126 0.024 0.262 0.182 0.262 0.372 0 0.042-0.007 0.082-0.019 0.119-0.070 0.129-0.197 0.223-0.346 0.247l-0.153 0c-0.512-0.127-1.101-0.2-1.706-0.2-0.016 0-0.031 0-0.047 0-0.011-0-0.026-0-0.042-0-0.605 0-1.193 0.073-1.756 0.211zM14.58 7.93c-0.13 0.095-0.285 0.165-0.453 0.199l-0.127 0.011s0-0.14 0-0.14 0-0.21 0-0.31c0.165 0.125 0.374 0.2 0.6 0.2 0.007 0 0.014-0 0.021-0zM14.66 7.25c-0.018 0.003-0.040 0.004-0.061 0.004-0.176 0-0.327-0.103-0.398-0.252-0.044-0.084-0.069-0.18-0.069-0.283s0.025-0.199 0.070-0.283c0.059-0.082 0.157-0.138 0.269-0.138 0.059 0 0.113 0.015 0.161 0.042 0.181 0.070 0.308 0.244 0.308 0.448 0 0 0 0.001 0 0.001 0.009 0.062 0.014 0.133 0.014 0.205s-0.005 0.143-0.015 0.213c-0.066 0.012-0.144 0.024-0.224 0.024-0.019 0-0.039-0.001-0.058-0.002z"></path></g>
<g id="vaadin:pill"><path d="M14.8 1.4l-0.2-0.2c-0.7-0.8-1.8-1.2-2.8-1.2s-2.1 0.4-2.9 1.2l-7.7 7.7c-1.6 1.6-1.6 4.1 0 5.7l0.2 0.2c0.7 0.8 1.8 1.2 2.8 1.2s2.1-0.4 2.9-1.2l7.8-7.8c1.5-1.5 1.5-4.1-0.1-5.6zM14.1 6.4l-3.9 3.9-3.5-3.6-3.8 3.8c-1.1 1.1-1.1 2.5-1 3.5v0c-1.2-1.2-1.2-3.1 0-4.3l7.8-7.8c0.5-0.6 1.3-0.9 2.1-0.9s1.6 0.3 2.2 0.9l0.2 0.2c0.5 0.5 0.8 1.3 0.8 2.1s-0.3 1.6-0.9 2.2z"></path></g>
<g id="vaadin:pills"><path d="M3.5 8l6.3-6.3c0.4-0.4 1-0.7 1.7-0.7s1.3 0.3 1.8 0.7c1 1 1 2.6 0 3.5l-2.8 2.8h1.4l2-2c1.4-1.4 1.4-3.6 0-4.9-0.7-0.7-1.6-1-2.5-1s-1.7 0.2-2.4 0.9l-6.3 6.4c-0.3 0.2-0.5 0.5-0.7 0.9 0.5-0.2 1-0.3 1.5-0.3z"></path><path d="M7.3 5.6l-2.4 2.4h4.7z"></path><path d="M12.5 9h-9c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5h9c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5zM12.5 15h-4.5v-4h-4.5c-1.1 0-2 0.6-2.5 1.2 0.2-1.2 1.2-2.2 2.5-2.2h9c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:pin-post"><path d="M15 4v-1h-6c0-1.69 1-2 1-2v-1h-5v1s1 0.31 1 2h-6v12h2v1h14v-12h-1zM14 14h-13v-10h4v1h2v2h1v-2h2v-1h4v10z"></path></g>
<g id="vaadin:pin"><path d="M11 6.5v-5.5h1v-1h-8v1h1v5.5c0 0-2 1.5-2 3.5 0 0.5 1.9 0.7 4 0.7v2.2c0 0.7 0.2 1.4 0.5 2.1l0.5 1 0.5-1c0.3-0.6 0.5-1.3 0.5-2.1v-2.2c2.1 0 4-0.3 4-0.7 0-2-2-3.5-2-3.5zM7 6.6c0 0-0.5 0.3-1.6 1.4-1 1-1.5 1.9-1.5 1.9s0.1-1 0.8-1.9c0.9-1.1 1.3-1.4 1.3-1.4v-5.6h1v5.6z"></path></g>
<g id="vaadin:play-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6 4v8l6-4z"></path></g>
<g id="vaadin:play-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6 12v-8l6 4-6 4z"></path></g>
<g id="vaadin:play"><path d="M2 1v14l12-7z"></path></g>
<g id="vaadin:plug"><path d="M14.7 3.1c-0.4-0.4-1-0.4-1.4 0l-2.8 2.8-1.5-1.4 2.8-2.8c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-2.8 2.8-1.4-1.4-1.4 1.4 0.7 0.7-1.4 1.4c-1.4 1.4-1.5 3.5-0.5 5.1-1.7 1.5-2.6 3.8-2.6 5.7h2c0-1.3 0.4-3.2 2.1-4.4 1.5 0.8 3.4 0.5 4.6-0.7l1.4-1.4 0.7 0.7 1.4-1.4-1.4-1.4 2.8-2.8c0.5-0.5 0.5-1.1 0.1-1.5z"></path></g>
<g id="vaadin:plus-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M13 7h-4v-4h-2v4h-4v2h4v4h2v-4h4z"></path></g>
<g id="vaadin:plus-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13 9h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z"></path></g>
<g id="vaadin:plus-minus"><path d="M10 7h6v2h-6v-2z"></path><path d="M4 5h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path><path d="M6 2l3 12h1l-3-12z"></path></g>
<g id="vaadin:plus-square-o"><path d="M12 7h-3v-3h-2v3h-3v2h3v3h2v-3h3z"></path><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:plus"><path d="M14 7h-5v-5h-2v5h-5v2h5v5h2v-5h5v-2z"></path></g>
<g id="vaadin:pointer"><path d="M12.6 5c-0.2 0-0.5 0-0.6 0 0-0.2-0.2-0.6-0.4-0.8s-0.6-0.4-1.1-0.4c-0.2 0-0.4 0-0.6 0.1-0.1-0.2-0.2-0.3-0.3-0.5-0.2-0.2-0.5-0.4-1.1-0.4-0.2 0-0.4 0-0.5 0.1v-1.7c0-0.6-0.4-1.4-1.4-1.4-0.4 0-0.8 0.2-1.1 0.4-0.5 0.6-0.5 1.4-0.5 1.4v4.3c-0.6 0.1-1.1 0.3-1.4 0.6-0.6 0.7-0.6 1.6-0.6 2.8 0 0.2 0 0.5 0 0.7 0 1.4 0.7 2.1 1.4 2.8l0.3 0.4c1.3 1.2 2.4 1.6 5.1 1.6 2.9 0 4.2-1.6 4.2-5.1v-2.5c0-0.7-0.2-2.1-1.4-2.4zM13 7.4v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.3-4.3-1.3-0.1-0.1-0.2-0.2-0.4-0.4-0.7-0.8-1.1-1.2-1.1-2.2 0-0.2 0-0.5 0-0.7 0-1 0-1.7 0.3-2.1 0.1-0.1 0.4-0.2 0.7-0.2v0.5l-0.3 1.5c0 0.1 0 0.1 0.1 0.2s0.2 0 0.2 0l1-1.2c0-0.1 0-0.2 0-0.2v-6.2c0-0.1 0-0.5 0.2-0.7 0.1 0 0.2-0.1 0.4-0.1 0.3 0 0.4 0.3 0.4 0.4v3.1c0 0 0 0 0 0v1.2c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-1.3c0 0 0 0 0 0 0-0.1 0.1-0.5 0.5-0.5 0.3 0 0.5 0.1 0.5 0.4v1.3c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-0.7c0-0.1 0.1-0.3 0.5-0.3 0.2 0 0.3 0.1 0.3 0.1 0.2 0.1 0.2 0.4 0.2 0.4v0.8c0 0.3 0.2 0.5 0.4 0.5 0.3 0 0.5-0.1 0.5-0.4 0-0.1 0.1-0.2 0.2-0.3 0 0 0.1 0 0.2 0 0.6 0.2 0.7 1.2 0.7 1.5 0-0.1 0-0.1 0 0z"></path></g>
<g id="vaadin:power-off"><path d="M10 2.3v3.3c1.2 0.7 2 2 2 3.4 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.5 0.8-2.8 2-3.4v-3.3c-2.9 0.9-5 3.5-5 6.7 0 3.9 3.1 7 7 7s7-3.1 7-7c0-3.2-2.1-5.8-5-6.7z"></path><path d="M7 1h2v7h-2v-7z"></path></g>
<g id="vaadin:presentation"><path d="M16 1h-7v-1h-2v1h-7v11h5l-2 4h2.2l2-4h1.5l2 4h2.3l-2-4h5v-11zM15 11h-14v-9h14v9z"></path><path d="M6 4v5l4-2.5z"></path></g>
<g id="vaadin:print"><path d="M0 10v4h2v2h12v-2h2v-4h-16zM13 15h-10v-3h10v3z"></path><path d="M12 6v-4l-2.7-2h-5.3v6h-4v3h16v-3h-4zM9 1l1.3 1h-1.3v-1zM11 7h-6v-6h3v2h3v4zM15 8h-1v-1h1v1z"></path></g>
<g id="vaadin:progressbar"><path d="M0 5v6h16v-6h-16zM15 10h-14v-4h14v4z"></path><path d="M2 7h7v2h-7v-2z"></path></g>
<g id="vaadin:puzzle-piece"><path d="M14.9 0.9c-1.1-1-2.5-1.3-3.1-0.4-0.7 1.1 0.5 1.7-0.3 2.5-0.5 0.6-2-0.8-2-0.8l-0.8-0.8-1.4 1.4c-0.6 0.7-2.1 1.5-2.6 1.1-0.7-0.6 0.1-1.8-0.5-2.6-0.7-1-2.1-0.8-3 0.3-1 1.1-1.4 2.4-0.5 3 1.1 0.7 1.9-0.3 2.7 0.5 0.4 0.4-0.2 1.7-0.5 2.1l-2.3 2.3 6.5 6.5 1.7-1.7c0.7-0.7 1.5-2 1.1-2.4-0.6-0.7-1.7 0.1-2.5-0.4-1-0.7-0.8-2 0.3-3s2.5-1.3 3.1-0.4c0.7 1.1-0.4 1.8 0.4 2.6 0.4 0.4 1.6-0.2 2-0.6l2.1-2.1-1.1-1.1c-0.6-0.6-1.9-2-1.4-2.5 0.6-0.7 1.7 0.2 2.5-0.4 0.9-0.8 0.6-2.1-0.4-3.1z"></path></g>
<g id="vaadin:pyramid-chart"><path d="M10.29 5l-2.29-4-2.29 4h4.58z"></path><path d="M2.29 11l-2.29 4h16l-2.29-4h-11.42z"></path><path d="M13.14 10l-2.28-4h-5.72l-2.28 4h10.28z"></path></g>
<g id="vaadin:qrcode"><path d="M6 0h-6v6h6v-6zM5 5h-4v-4h4v4z"></path><path d="M2 2h2v2h-2v-2z"></path><path d="M0 16h6v-6h-6v6zM1 11h4v4h-4v-4z"></path><path d="M2 12h2v2h-2v-2z"></path><path d="M10 0v6h6v-6h-6zM15 5h-4v-4h4v4z"></path><path d="M12 2h2v2h-2v-2z"></path><path d="M2 7h-2v2h3v-1h-1z"></path><path d="M7 9h2v2h-2v-2z"></path><path d="M3 7h2v1h-2v-1z"></path><path d="M9 12h-2v1h1v1h1v-1z"></path><path d="M6 7v1h-1v1h2v-2z"></path><path d="M8 4h1v2h-1v-2z"></path><path d="M9 8v1h2v-2h-3v1z"></path><path d="M7 6h1v1h-1v-1z"></path><path d="M9 14h2v2h-2v-2z"></path><path d="M7 14h1v2h-1v-2z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M9 3v-2h-1v-1h-1v4h1v-1z"></path><path d="M12 14h1v2h-1v-2z"></path><path d="M12 12h2v1h-2v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M14 10v1h1v1h1v-2h-1z"></path><path d="M15 13h-1v3h2v-2h-1z"></path><path d="M10 10v1h3v-2h-2v1z"></path><path d="M12 7v1h2v1h2v-2h-2z"></path></g>
<g id="vaadin:question-circle-o"><path d="M9 10h-2c0-2 1.2-2.6 2-3 0.3-0.1 0.5-0.2 0.7-0.4 0.1-0.1 0.3-0.3 0.1-0.7-0.2-0.5-0.8-1-1.7-1-1.4 0-1.6 1.2-1.7 1.5l-2-0.3c0.1-1.1 1-3.2 3.6-3.2 1.6 0 3 0.9 3.6 2.2 0.4 1.1 0.2 2.2-0.6 3-0.4 0.4-0.8 0.6-1.2 0.7-0.6 0.4-0.8 0.2-0.8 1.2z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6.9 11h2v2h-2v-2z"></path></g>
<g id="vaadin:question-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8.9 13h-2v-2h2v2zM11 8.1c-0.4 0.4-0.8 0.6-1.2 0.7-0.6 0.4-0.8 0.2-0.8 1.2h-2c0-2 1.2-2.6 2-3 0.3-0.1 0.5-0.2 0.7-0.4 0.1-0.1 0.3-0.3 0.1-0.7-0.2-0.5-0.8-1-1.7-1-1.4 0-1.6 1.2-1.7 1.5l-2-0.3c0.1-1.1 1-3.2 3.6-3.2 1.6 0 3 0.9 3.6 2.2 0.4 1.1 0.2 2.2-0.6 3z"></path></g>
<g id="vaadin:question"><path d="M9 11h-3c0-3 1.6-4 2.7-4.6 0.4-0.2 0.7-0.4 0.9-0.6 0.5-0.5 0.3-1.2 0.2-1.4-0.3-0.7-1-1.4-2.3-1.4-2.1 0-2.5 1.9-2.5 2.3l-3-0.4c0.2-1.7 1.7-4.9 5.5-4.9 2.3 0 4.3 1.3 5.1 3.2 0.7 1.7 0.4 3.5-0.8 4.7-0.5 0.5-1.1 0.8-1.6 1.1-0.9 0.5-1.2 1-1.2 2z"></path><path d="M9.5 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:quote-left"><path d="M7 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path><path d="M16 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path></g>
<g id="vaadin:quote-right"><path d="M9 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path><path d="M0 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path></g>
<g id="vaadin:random"><path d="M13 12h-2c-1 0-1.7-1.2-2.4-2.7-0.3 0.7-0.6 1.5-1 2.3 0.8 1.4 1.8 2.4 3.4 2.4h2v2l3-3-3-3v2z"></path><path d="M5.4 6.6c0.3-0.7 0.6-1.5 1-2.2-0.8-1.4-1.9-2.4-3.4-2.4h-3v2h3c1 0 1.7 1.2 2.4 2.6z"></path><path d="M16 3l-3-3v2h-2c-2.7 0-3.9 3-5 5.7-0.8 2.1-1.7 4.3-3 4.3h-3v2h3c2.6 0 3.8-2.8 4.9-5.6 0.9-2.2 1.8-4.4 3.1-4.4h2v2l3-3z"></path></g>
<g id="vaadin:raster-lower-left"><path d="M15 7h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M11 7h1v1h-1v-1z"></path><path d="M9 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M11 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M5 13h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M6 12h1v1h-1v-1z"></path><path d="M4 12h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M5 11h1v1h-1v-1z"></path><path d="M6 10h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M9 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M8 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M11 11h1v1h-1v-1z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M10 10h1v1h-1v-1z"></path><path d="M8 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M11 9h1v1h-1v-1z"></path><path d="M9 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path></g>
<g id="vaadin:raster"><path d="M7 7h1v1h-1v-1z"></path><path d="M5 7h1v1h-1v-1z"></path><path d="M3 7h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M6 6h1v1h-1v-1z"></path><path d="M4 6h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M7 5h1v1h-1v-1z"></path><path d="M5 5h1v1h-1v-1z"></path><path d="M3 5h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M6 4h1v1h-1v-1z"></path><path d="M4 4h1v1h-1v-1z"></path><path d="M2 4h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M7 3h1v1h-1v-1z"></path><path d="M5 3h1v1h-1v-1z"></path><path d="M3 3h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M6 2h1v1h-1v-1z"></path><path d="M4 2h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M7 1h1v1h-1v-1z"></path><path d="M5 1h1v1h-1v-1z"></path><path d="M3 1h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M6 0h1v1h-1v-1z"></path><path d="M4 0h1v1h-1v-1z"></path><path d="M2 0h1v1h-1v-1z"></path><path d="M0 0h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M11 7h1v1h-1v-1z"></path><path d="M9 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M8 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M11 5h1v1h-1v-1z"></path><path d="M9 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M10 4h1v1h-1v-1z"></path><path d="M8 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M11 3h1v1h-1v-1z"></path><path d="M9 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M12 2h1v1h-1v-1z"></path><path d="M10 2h1v1h-1v-1z"></path><path d="M8 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M13 1h1v1h-1v-1z"></path><path d="M11 1h1v1h-1v-1z"></path><path d="M9 1h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path><path d="M12 0h1v1h-1v-1z"></path><path d="M10 0h1v1h-1v-1z"></path><path d="M8 0h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M5 13h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M6 12h1v1h-1v-1z"></path><path d="M4 12h1v1h-1v-1z"></path><path d="M2 12h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M5 11h1v1h-1v-1z"></path><path d="M3 11h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M6 10h1v1h-1v-1z"></path><path d="M4 10h1v1h-1v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M5 9h1v1h-1v-1z"></path><path d="M3 9h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M6 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M9 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M8 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M11 11h1v1h-1v-1z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M10 10h1v1h-1v-1z"></path><path d="M8 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M11 9h1v1h-1v-1z"></path><path d="M9 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path></g>
<g id="vaadin:records"><path d="M4 9h4v2h-4v-2z"></path><path d="M16 2h-1v-2h-10v2h-2v1.25l-0.6 0.75h-1.4v1.75l-1 1.25v9h12l4-5v-9zM2 5h8v2h-8v-2zM11 15h-10v-7h10v7zM12 7h-1v-3h-7v-1h8v4zM14 4.5l-1 1.25v-3.75h-7v-1h8v3.5z"></path></g>
<g id="vaadin:recycle"><path d="M8 3.1l1.4 2.2-1.6 1.1 1.3 0.3 2.8 0.6 0.6-2.7 0.4-1.4-1.8 1.1-2-3.3h-2.2l-2.6 4.3 1.7 1z"></path><path d="M16 12l-2.7-4.3-1.7 1 2 3.3h-2.6v-2l-3 3 3 3v-2h3.7z"></path><path d="M2.4 12v0l1.4-2.3 1.7 1.1-0.9-4.2-2.8 0.7-1.3 0.3 1.6 1-2.1 3.4 1.3 2h5.7v-2z"></path></g>
<g id="vaadin:refresh"><path d="M2.6 5.6c0.9-2.1 3-3.6 5.4-3.6 3 0 5.4 2.2 5.9 5h2c-0.5-3.9-3.8-7-7.9-7-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.4-1.4z"></path><path d="M16 9h-4.1l1.5 1.4c-0.9 2.1-3 3.6-5.5 3.6-2.9 0-5.4-2.2-5.9-5h-2c0.5 3.9 3.9 7 7.9 7 3 0 5.6-1.7 7-4.1l1.1 1.1v-4z"></path></g>
<g id="vaadin:reply-all"><path d="M16 8c0-5-4.9-5-4.9-5h-2.1v-3l-6 6 6 6v-3h2.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"></path><path d="M0 6l6 6v-1.5l-4.5-4.5 4.5-4.5v-1.5z"></path></g>
<g id="vaadin:reply"><path d="M16 8c0-5-4.9-5-4.9-5h-5.1v-3l-6 6 6 6v-3h5.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"></path></g>
<g id="vaadin:resize-h"><path d="M0 7h16v2h-16v-2z"></path><path d="M7 6h2v-3h2l-3-3-3 3h2z"></path><path d="M9 10h-2v3h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:resize-v"><path d="M7 0h2v16h-2v-16z"></path><path d="M3 5l-3 3 3 3v-2h3v-2h-3z"></path><path d="M16 8l-3-3v2h-3v2h3v2z"></path></g>
<g id="vaadin:retweet"><path d="M2 1h12v5h2l-3 3-3-3h2v-3h-8v2h-2z"></path><path d="M14 14h-12v-5h-2l3-3 3 3h-2v3h8v-2h2z"></path></g>
<g id="vaadin:rhombus"><path d="M8 0l-8 8 8 8 8-8-8-8zM2 8l6-6 6 6-6 6-6-6z"></path></g>
<g id="vaadin:road-branch"><path d="M16 4h-16v3h3.2l3.8 3.6c1.6 1.5 3.6 2.4 5.8 2.4h3.2v-3h-3.2c-1.4 0-2.7-0.5-3.7-1.5l-1.6-1.5h8.5v-3z"></path></g>
<g id="vaadin:road-branches"><path d="M16 4v-3h-16v3h1.7l7.7 9.5c1.3 1.6 3.1 2.5 5 2.5h1.6v-3h-1.5c-1 0-1.9-0.5-2.7-1.4l-1.3-1.6h5.5v-3h-8l-2.4-3h10.4z"></path></g>
<g id="vaadin:road-split"><path d="M14 13v-1c0-0.2 0-4.1-2.8-5.4-2.2-1-2.2-3.5-2.2-3.6v-3h-2v3c0 0.1 0 2.6-2.2 3.6-2.8 1.3-2.8 5.2-2.8 5.4v1h-2l3 3 3-3h-2v-1c0 0 0-2.8 1.7-3.6 1.1-0.5 1.8-1.3 2.3-2 0.5 0.8 1.2 1.5 2.3 2 1.7 0.8 1.7 3.6 1.7 3.6v1h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:road"><path d="M9 11v4h7l-4-14h-3v3h-2v-3h-3l-4 14h7v-4h2zM7 6h2v3h-2v-3z"></path></g>
<g id="vaadin:rocket"><path d="M16 0c0 0-3.5-0.4-6.7 2.8-1.6 1.5-2.9 3.5-3.9 5.3l-2.5-0.6-1.6 1.6 2.8 1.4c-0.3 0.6-0.4 1-0.4 1l0.8 0.8c0 0 0.4-0.2 1-0.4l1.4 2.8 1.6-1.6-0.5-2.5c1.7-1 3.8-2.3 5.3-3.8 3.1-3.2 2.7-6.8 2.7-6.8zM12.8 4.8c-0.4 0.4-1.1 0.4-1.6 0-0.4-0.4-0.4-1.1 0-1.6 0.4-0.4 1.1-0.4 1.6 0 0.4 0.4 0.4 1.1 0 1.6z"></path><path d="M4 14.2c-0.8 0.8-2.6 0.4-2.6 0.4s-0.4-1.8 0.4-2.6c0.8-0.8 1.5-0.9 1.5-0.9s-1.3-0.3-2.1 0.6c-1.6 1.6-1 4.2-1 4.2s2.6 0.6 4.2-1c0.9-0.9 0.6-2.2 0.6-2.2s-0.2 0.7-1 1.5z"></path></g>
<g id="vaadin:rotate-left"><path d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path></g>
<g id="vaadin:rotate-right"><path d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"></path></g>
<g id="vaadin:rss-square"><path d="M0 0v16h16v-16h-16zM3.6 14c-0.9 0-1.6-0.7-1.6-1.6s0.7-1.6 1.6-1.6 1.6 0.7 1.6 1.6-0.6 1.6-1.6 1.6zM7.6 14c0-3.1-2.5-5.6-5.6-5.6v-2.4c4.4 0 8 3.6 8 8h-2.4zM11.6 14c0-5.3-4.3-9.6-9.6-9.6v-2.4c6.6 0 12 5.4 12 12h-2.4z"></path></g>
<g id="vaadin:rss"><path d="M4.4 13.8c0 1.215-0.985 2.2-2.2 2.2s-2.2-0.985-2.2-2.2c0-1.215 0.985-2.2 2.2-2.2s2.2 0.985 2.2 2.2z"></path><path d="M10.6 16h-3.1c0-4.1-3.4-7.5-7.5-7.5v0-3.1c5.9 0 10.6 4.7 10.6 10.6z"></path><path d="M12.8 16c0-7.1-5.7-12.8-12.8-12.8v-3.2c8.8 0 16 7.2 16 16h-3.2z"></path></g>
<g id="vaadin:safe-lock"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM11.13 14.25l-0.37-0.9-0.92 0.38 0.37 0.9c-0.659 0.23-1.419 0.363-2.21 0.363s-1.551-0.133-2.259-0.378l0.419-0.885-0.92-0.38-0.37 0.9c-1.355-0.69-2.43-1.765-3.102-3.080l0.882-0.41-0.38-0.93-0.9 0.37c-0.23-0.659-0.363-1.419-0.363-2.21s0.133-1.551 0.378-2.259l0.885 0.419 0.38-0.92-0.9-0.37c0.691-1.351 1.766-2.423 3.080-3.092l0.41 0.882 0.92-0.38-0.37-0.9c0.659-0.23 1.419-0.363 2.21-0.363s1.551 0.133 2.259 0.378l-0.419 0.885 0.92 0.38 0.37-0.9c1.355 0.69 2.43 1.765 3.102 3.080l-0.882 0.41 0.38 0.92 0.9-0.37c0.23 0.659 0.363 1.419 0.363 2.21s-0.133 1.551-0.378 2.259l-0.885-0.419-0.38 0.92 0.9 0.37c-0.69 1.355-1.765 2.43-3.080 3.102z"></path><path d="M10.36 3.62l-1.16 2.79c-0.329-0.253-0.746-0.407-1.199-0.41h0.279l1.15-2.77c-0.426-0.14-0.917-0.223-1.427-0.23-0.023-0-0.047-0-0.071-0-2.795 0-5.060 2.265-5.060 5.060s2.265 5.060 5.060 5.060c2.795 0 5.060-2.265 5.060-5.060 0-1.904-1.052-3.563-2.606-4.426z"></path></g>
<g id="vaadin:safe"><path d="M1 0v16h3v-1h8v1h3v-16h-14zM14 10h-1v-5h1v5zM14 3h-1v-1h-10v11h10v-1h1v2h-12v-13h12v2zM8.5 7.5c0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2 2 0.9 2 2z"></path><path d="M7.5 7.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:scale-unbalance"><path d="M15.81 9l-2.47-4.93 0.83-0.15c0.239-0.044 0.418-0.251 0.418-0.5 0-0.281-0.227-0.508-0.508-0.508-0.032 0-0.063 0.003-0.093 0.009l-0.777 0.14c-0.993-0.755-2.25-1.21-3.613-1.21-0.21 0-0.418 0.011-0.623 0.032-0.036-0.5-0.457-0.882-0.967-0.882-0.003 0-0.005 0-0.008 0-0.552 0-1 0.448-1 1v0.2c-1.714 0.336-3.151 1.327-4.066 2.697l-0.754 0.153c-0.257 0.024-0.457 0.239-0.457 0.5 0 0.277 0.225 0.502 0.502 0.502 0.016 0 0.032-0.001 0.047-0.002l0.088 0 0.35-0.050-2.52 5h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19l-2.56-5.12h0.1c0.172-0.031 0.311-0.144 0.379-0.297 0.021-0.093 0.701-1.583 3.271-2.363v10.78h-1v1h-2v1h8v-1h-2v-1h-1v-11.12c0.201-0.031 0.434-0.049 0.67-0.049 1.152 0 2.205 0.419 3.016 1.114l-0.006-0.005-2.49 5.060h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19zM5 11h-4l2-3.94zM11 9l2-3.94 2 3.94h-4z"></path></g>
<g id="vaadin:scale"><path d="M15.81 10l-2.5-5h0.69c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.79c-1.056-1.145-2.541-1.881-4.198-1.95l-0.012-0.050c0-0.552-0.448-1-1-1s-1 0.448-1 1v0.050c-1.681 0.073-3.178 0.807-4.247 1.947l-0.753 0.003c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.69l-2.5 5h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19l-2.55-5.090c0.064-0.039 0.118-0.089 0.159-0.148 0.873-1.019 2.148-1.669 3.575-1.702l0.006 10.94h-1v1h-2v1h8v-1h-2v-1h-1v-10.94c1.418 0.030 2.679 0.682 3.524 1.693 0.053 0.084 0.117 0.145 0.193 0.186l-2.527 5.061h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19zM5 10h-4l2-3.94zM11 10l2-3.94 2 3.94h-4z"></path></g>
<g id="vaadin:scatter-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M5 11c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M8 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M14 5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 10c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:scissors"><path d="M16 3.1c0 0-2.1-1.1-3.5-1-0.3 0-0.5 0.1-0.7 0.2l-4.3 3.4-1.8-1.5c0.1-0.3 0.2-0.6 0.3-1 0.1-1.8-1.4-3.4-3.3-3.2-1.2 0.1-2.3 1-2.6 2.2-0.3 1.3 0.2 2.5 1.2 3.2l3.3 2.6-3.3 2.6c-1 0.7-1.5 1.9-1.2 3.2 0.3 1.2 1.4 2 2.6 2.2 1.9 0.2 3.4-1.4 3.2-3.2 0-0.3-0.1-0.7-0.3-1l1.8-1.5 4.3 3.4c0.2 0.1 0.4 0.2 0.7 0.2 1.4 0.1 3.5-1 3.5-1l-5.7-4.9 5.8-4.9zM2.8 4.6c-0.9-0.1-1.6-0.9-1.5-1.8s0.9-1.6 1.8-1.5c0.9 0.1 1.6 0.9 1.5 1.8 0 0.9-0.9 1.6-1.8 1.5zM3.1 14.7c-0.9 0.1-1.7-0.6-1.8-1.5s0.6-1.7 1.5-1.8c0.9-0.1 1.7 0.6 1.8 1.5s-0.6 1.7-1.5 1.8zM12.4 3.2c0 0 0.1 0 0.2 0 0.4 0 0.9 0.1 1.4 0.2l-6.8 5.7-0.9-1.1 6.1-4.8zM14 12.6c-0.5 0.2-1 0.3-1.4 0.2-0.1 0-0.2 0-0.2 0l-4-3.2 1-0.9 4.6 3.9z"></path></g>
<g id="vaadin:screwdriver"><path d="M8 10.8l0.9-0.8-0.9-0.9 5.7-5.7 1.2-0.4 1.1-2.2-0.7-0.7-2.3 1-0.5 1.2-5.6 5.7-0.9-0.9-0.8 0.9c0 0 0.8 0.6-0.1 1.5-0.5 0.5-1.3-0.1-2.8 1.4-0.5 0.5-2.1 2.1-2.1 2.1s-0.6 1 0.6 2.2 2.2 0.6 2.2 0.6 1.6-1.6 2.1-2.1c1.4-1.4 0.9-2.3 1.3-2.7 0.9-0.9 1.6-0.2 1.6-0.2zM4.9 10.4l0.7 0.7-3.8 3.8-0.7-0.7z"></path></g>
<g id="vaadin:search-minus"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path><path d="M3 5h6v2h-6v-2z"></path></g>
<g id="vaadin:search-plus"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path><path d="M7 3h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path></g>
<g id="vaadin:search"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path></g>
<g id="vaadin:select"><path d="M15 4h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1zM12 9l-2-2h4l-2 2z"></path></g>
<g id="vaadin:server"><path d="M3 5v3h10v-3h-10zM7 7h-3v-1h3v1z"></path><path d="M3 4h10l-2-4h-6z"></path><path d="M3 12h10v-3h-10v3zM11 10h1v1h-1v-1zM9 10h1v1h-1v-1z"></path><path d="M3 16h10v-3h-10v3zM4 14h3v1h-3v-1z"></path></g>
<g id="vaadin:share-square"><path d="M11 3h-3.6c0 0-4.4-0.2-4.4 4.3 0 3.5 2 6.7 2 6.7s-0.4-7 2.3-7h3.7v3l5-5-5-5v3z"></path><path d="M14 9v6h-13v-13h9v-1h-10v15h15v-8z"></path></g>
<g id="vaadin:share"><path d="M10 3h-5.1c0 0-4.9 0-4.9 5 0 3.9 3 8 3 8s-1.7-7 1.8-7h5.2v3l6-6-6-6v3z"></path></g>
<g id="vaadin:shield"><path d="M1 0c0 0 0 3.2 0 7 0 5.6 7 9 7 9s7-3.4 7-9c0-3.8 0-7 0-7h-14zM14 7c0 4.2-4.6 7.1-6 7.9v-13.9h6v6z"></path></g>
<g id="vaadin:shift-arrow"><path d="M8 2l-7 7h4v5h6v-5h4zM10 8v5h-4v-5h-2.5l4.5-4.58 4.5 4.58h-2.5z"></path></g>
<g id="vaadin:shift"><path d="M0 2v12h16v-12h-16zM6 8v3h-2v-3h-2l3-3 3 3h-2z"></path></g>
<g id="vaadin:shop"><path d="M0 15h16v1h-16v-1z"></path><path d="M0 0v6c0.005 0.732 0.401 1.37 0.991 1.715l0.009 6.285h9v-5h3v5h2v-6.28c0.599-0.35 0.995-0.988 1-1.719v-6.001h-16zM4 2h2v4c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4zM2 7c-0.552 0-1-0.448-1-1v-4h2v4c0 0.552-0.448 1-1 1zM8 12h-5v-3h5v3zM9 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4zM12 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4zM15 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4z"></path></g>
<g id="vaadin:sign-in-alt"><path d="M0 0h2v16h-2v-16z"></path><path d="M3 10h8v3l5-5-5-5v3h-8z"></path></g>
<g id="vaadin:sign-in"><path d="M7 1v2l1 1v-2h7v12h-7v-2l-1 1v2h9v-14z"></path><path d="M10 8l-5-4v2h-5v4h5v2z"></path></g>
<g id="vaadin:sign-out-alt"><path d="M14 0h2v16h-2v-16z"></path><path d="M8 6h-8v4h8v3l5-5-5-5z"></path></g>
<g id="vaadin:sign-out"><path d="M9 4v-3h-9v14h9v-3h-1v2h-7v-12h7v2z"></path><path d="M16 8l-5-4v2h-5v4h5v2z"></path></g>
<g id="vaadin:signal"><path d="M6.9 13.2l1.1 1.1 1.1-1.1c-0.3-0.3-0.7-0.5-1.1-0.5s-0.9 0.2-1.1 0.5z"></path><path d="M8 4.6c2.7 0 5.1 1.1 6.9 2.8l1.1-1.1c-2-2-4.9-3.3-8-3.3s-6 1.3-8 3.3l1.1 1.1c1.8-1.7 4.2-2.8 6.9-2.8z"></path><path d="M2.3 8.6l1.1 1.1c1.2-1.1 2.8-1.8 4.6-1.8s3.4 0.7 4.6 1.9l1.1-1.1c-1.4-1.6-3.5-2.5-5.7-2.5s-4.3 0.9-5.7 2.4z"></path><path d="M4.6 10.9l1.1 1.1c0.6-0.6 1.4-0.9 2.3-0.9s1.7 0.4 2.3 0.9l1.1-1.1c-0.8-0.9-2.1-1.4-3.4-1.4s-2.6 0.5-3.4 1.4z"></path></g>
<g id="vaadin:sitemap"><path d="M14.5 12v-4.5h-6v-3.5h1.5v-4h-4v4h1.5v3.5h-6v4.5h-1.5v4h4v-4h-1.5v-3.5h5v3.5h-1.5v4h4v-4h-1.5v-3.5h5v3.5h-1.5v4h4v-4z"></path></g>
<g id="vaadin:slider"><path d="M16 6h-3.6c-0.7-1.2-2-2-3.4-2s-2.8 0.8-3.4 2h-5.6v4h5.6c0.7 1.2 2 2 3.4 2s2.8-0.8 3.4-2h3.6v-4zM1 9v-2h4.1c0 0.3-0.1 0.7-0.1 1s0.1 0.7 0.1 1h-4.1zM9 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3c0 1.7-1.3 3-3 3z"></path></g>
<g id="vaadin:sliders"><path d="M7 0h2v3h-2v-3z"></path><path d="M6 4v3h1v9h2v-9h1v-3z"></path><path d="M2 0h2v8h-2v-8z"></path><path d="M1 9v3h1v4h2v-4h1v-3z"></path><path d="M12 0h2v10h-2v-10z"></path><path d="M11 11v3h1v2h2v-2h1v-3z"></path></g>
<g id="vaadin:smiley-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M8 13.2c-2 0-3.8-1.2-4.6-3.1l0.9-0.4c0.6 1.5 2.1 2.4 3.7 2.4s3.1-1 3.7-2.4l0.9 0.4c-0.8 2-2.6 3.1-4.6 3.1z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:sort"><path d="M11 7h-6l3-4z"></path><path d="M5 9h6l-3 4z"></path></g>
<g id="vaadin:sound-disable"><path d="M4 5h-4v6h4l5 4v-14z"></path><path d="M15.9 5.6l-0.8-0.7-2.3 2.4-2.4-2.4-0.8 0.7 2.4 2.4-2.4 2.4 0.8 0.7 2.4-2.4 2.3 2.4 0.8-0.7-2.4-2.4z"></path></g>
<g id="vaadin:spark-line"><path d="M14 6c-1.105 0-2 0.895-2 2 0 0.060 0 0.11 0 0.16l-0.81 0.25-2.3-3.48-1.73 4.32-1.16-5.81-2.3 4.78-1.64-1.31-2.060 1.090v1.080l1.94-1 2.11 1.7 1.56-3.22 1.23 6.19 2.27-5.68 1.68 2.52 1.55-0.48c0.364 0.54 0.973 0.89 1.664 0.89 1.105 0 2-0.895 2-2s-0.895-2-2-2c-0.001 0-0.003 0-0.004 0zM14 9c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:specialist"><path d="M4.1 8c0.2 0.6 0.3 1.1 0.3 1.1 0.8 1.3 1.8 1.1 1.8 1.8 0 0.3-0.2 0.6-0.5 0.7l2.3 1.8 2.3-1.7c-0.3-0.2-0.5-0.4-0.5-0.7 0-0.8 1-0.5 1.8-1.8 0 0 0.2-0.4 0.3-1.1v0c0.3-1.1 0.6-3.1 0.5-4.1h-1.5c0-0.3 0.1-0.6 0.1-1h1.1c-0.3-1.4-1-2-2.2-2.3-0.5-0.4-1.2-0.7-1.9-0.7s-1.4 0.3-1.9 0.7c-1.2 0.3-1.8 0.9-2.2 2.3h1.1c0 0.4 0.1 0.7 0.2 1h-1.6c-0.1 1 0.2 3 0.5 4v0zM11.2 8.5c-0.1 0.1-0.2 0.2-0.3 0.3l-0.5 0.6c-0.4 0.5-0.8 0.8-1.4 0.9l-0.4 0.1c-0.4 0.1-0.9 0.1-1.4 0l-0.4-0.1c-0.6-0.2-1.1-0.5-1.5-1.1l-0.2-0.4c-0.1-0.1-0.2-0.2-0.3-0.3l-0.7-0.5 3.1-0.9c0.5-0.1 1-0.2 1.5 0l3.2 0.9-0.7 0.5zM6 3c0-1.1 0.9-2 2-2s2 0.9 2 2c0 1.1-0.9 2-2 2s-2-0.9-2-2z"></path><path d="M15.5 14.2c-1.3-2.4-2.6-2-3.9-2.2 0 0 0 0-0.1 0l-3.5 2.6-3.5-2.6c0 0 0 0-0.1 0-1.4 0.1-2.6-0.2-3.9 2.2-0.2 0.4-0.4 1.1-0.5 1.8h16c-0.1-0.7-0.3-1.4-0.5-1.8z"></path></g>
<g id="vaadin:spinner-arc"><path d="M15 8c0 3.9-3.1 7-7 7s-7-3-7-7h-1c0 4 3.6 8 8 8s8-3.6 8-8h-1z"></path></g>
<g id="vaadin:spinner-third"><path d="M12.9 3.1c1.3 1.2 2.1 3 2.1 4.9 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-1.9 0.8-3.7 2.1-4.9l-0.8-0.8c-1.4 1.5-2.3 3.5-2.3 5.7 0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.2-0.9-4.2-2.3-5.7l-0.8 0.8z"></path></g>
<g id="vaadin:spinner"><path d="M9.9 0.2l-0.2 1c3 0.8 5.3 3.5 5.3 6.8 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-3.3 2.3-6 5.3-6.8l-0.2-1c-3.5 0.9-6.1 4.1-6.1 7.8 0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.7-2.6-6.9-6.1-7.8z"></path></g>
<g id="vaadin:spline-area-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M10 7c-2 0-2.080-1-4-1-2.34 0-4 3-4 3v5h14v-12c-2 0-3.86 5-6 5z"></path></g>
<g id="vaadin:spline-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M12 5c-0.69 1-1.41 2-2 2-0.026 0.001-0.056 0.001-0.087 0.001-0.601 0-1.164-0.16-1.65-0.44-0.623-0.35-1.387-0.562-2.2-0.562-0.022 0-0.045 0-0.067 0-1.6 0.116-3.009 0.864-3.991 1.993l-0.006 2.347c0.77-1.12 2.32-2.84 4-2.84 0.014-0 0.031-0 0.048-0 0.579 0 1.121 0.156 1.587 0.428 0.643 0.358 1.429 0.573 2.264 0.573 0.035 0 0.071-0 0.106-0.001 1.395 0 2.335-1.32 3.245-2.6s1.75-2.4 2.75-2.4v-1.5c-1.81 0-3 1.61-4 3z"></path></g>
<g id="vaadin:split-h"><path d="M0 1v14h16v-14h-16zM1 4h6.5v10h-6.5v-10zM15 14h-6.5v-10h6.5v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:split-v"><path d="M0 1v14h16v-14h-16zM14 2h1v1h-1v-1zM15 4v4.5h-14v-4.5h14zM1 14v-4.5h14v4.5h-14z"></path></g>
<g id="vaadin:split"><path d="M0 11h6v5h-6v-5z"></path><path d="M11 10v-2l-0.64 0.64c-0.851-0.81-1.38-1.952-1.38-3.217 0-0.149 0.007-0.296 0.022-0.441l1.999 0.018v-5h-6v5h2c0.013 0.127 0.020 0.274 0.020 0.423 0 1.265-0.529 2.407-1.378 3.216l-0.642-0.638v2h2l-0.65-0.65c1.028-0.991 1.667-2.38 1.667-3.919 0-0.152-0.006-0.302-0.018-0.45-0.010 0.149-0.016 0.299-0.016 0.45 0 1.539 0.639 2.928 1.665 3.917l-0.648 0.652h2z"></path><path d="M10 11h6v5h-6v-5z"></path></g>
<g id="vaadin:spoon"><path d="M10.5 4.8c0-1.8-0.9-4.8-3-4.8s-3 3-3 4.8c0 1.5 0.8 2.8 2.2 3.1-0.5 1.6-0.7 4.6-0.7 4.6v2c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-2c0-0.6-0.2-3.2-0.7-4.6 1.4-0.3 2.2-1.6 2.2-3.1z"></path></g>
<g id="vaadin:square-shadow"><path d="M14 2v-2h-14v14h2v2h14v-14h-2zM13 13h-12v-12h12v12z"></path></g>
<g id="vaadin:star-half-left-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM8 11.8v-9.1l1.8 3.6 4 0.6-2.9 2.8 0.7 4-3.6-1.9z"></path></g>
<g id="vaadin:star-half-left"><path d="M5.6 5.4l-5.5 0.8 3.9 3.8-0.9 5.5 4.9-2.6v-12.5z"></path></g>
<g id="vaadin:star-half-right-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM4.4 13.7l0.7-4-2.9-2.8 4-0.6 1.8-3.6v9.1l-3.6 1.9z"></path></g>
<g id="vaadin:star-half-right"><path d="M10.5 5.4l5.5 0.8-4 3.8 0.9 5.5-4.9-2.6v-12.5z"></path></g>
<g id="vaadin:star-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM8 11.8l-3.6 1.9 0.7-4-2.9-2.8 4-0.6 1.8-3.6 1.8 3.6 4 0.6-2.9 2.8 0.7 4-3.6-1.9z"></path></g>
<g id="vaadin:star"><path d="M12.9 15.4l-4.9-2.6-4.9 2.6 0.9-5.4-4-3.9 5.5-0.8 2.4-5 2.4 5 5.5 0.8-3.8 3.9 0.9 5.4z"></path></g>
<g id="vaadin:start-cog"><path d="M4 0v6h1.7l0.2 0.7 0.2 0.6c0 0 0.1 0 0.1 0l1.2-0.6 1.8 1.8-0.6 1.2c0 0 0 0.1 0 0.1l0.6 0.2 0.7 0.2v0.2l6.1-3.4-12-7z"></path><path d="M4.5 10.5c-0.2 0-0.4 0.1-0.5 0.2-0.3 0.2-0.5 0.5-0.5 0.8s0.2 0.7 0.5 0.8c0.1 0.1 0.3 0.2 0.5 0.2 0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path><path d="M9 12v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.3 0.3-0.6 0.4-0.9l1.1-0.3zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:step-backward"><path d="M14 15v-14l-10 7z"></path><path d="M2 1h2v14h-2v-14z"></path></g>
<g id="vaadin:step-forward"><path d="M2 1v14l10-7z"></path><path d="M12 1h2v14h-2v-14z"></path></g>
<g id="vaadin:stethoscope"><path d="M5.7 15.2c0.3 0.3 1 0.8 1.8 0.8 2.7 0 3.3-2 3.4-3.6 0.2-2.3 0.8-2.2 1.1-2.2 0.7 0 0.9 0.4 0.9 1.1-0.6 0.4-1 1-1 1.7 0 1.1 0.9 2 2 2s2-0.9 2-2-0.9-2-2-2c-0.1 0-0.1 0-0.2 0-0.2-0.9-0.7-1.8-1.8-1.8-1.6 0-2 1.4-2.1 2.9-0.1 2.1-0.8 2.9-2.3 2.9-0.4 0-0.8-0.2-1-0.4-0.6-0.5-0.5-2.3-0.5-2.3 2 0 4-1.8 4.7-4.8l-0.2-0.1c0.3-1.2 0.5-2.6 0.5-3.6 0-1.1-0.3-1.9-1-2.5s-1.5-0.8-2.1-0.8c-0.2-0.3-0.5-0.5-0.9-0.5-0.5 0-1 0.4-1 1s0.4 1 1 1c0.4 0 0.7-0.2 0.8-0.5 0.5 0 1 0.2 1.5 0.6s0.7 0.9 0.7 1.7c0 0.9-0.2 2.2-0.5 3.5l-0.2-0.1c-0.3 1.1-1.3 3.6-3.3 3.6h-1c-2 0-3-2.5-3.3-3.6l-0.2 0.1c-0.3-1.3-0.5-2.6-0.5-3.5 0-0.8 0.2-1.3 0.7-1.7 0.4-0.4 1-0.5 1.5-0.6 0.1 0.3 0.4 0.5 0.8 0.5 0.6 0 1-0.4 1-1s-0.4-1-1-1c-0.4 0-0.7 0.2-0.9 0.5-0.6 0-1.4 0.2-2.1 0.8s-1 1.4-1 2.5c0 1 0.2 2.4 0.5 3.7l-0.2 0.1c0.7 2.9 2.7 4.7 4.7 4.7 0 0-0.1 2.2 0.7 2.9zM14 14c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1-0.5 1-1 1z"></path></g>
<g id="vaadin:stock"><path d="M12 6v-6h-8v6h-4v7h16v-7h-4zM7 12h-6v-5h2v1h2v-1h2v5zM5 6v-5h2v1h2v-1h2v5h-6zM15 12h-6v-5h2v1h2v-1h2v5z"></path><path d="M0 16h3v-1h10v1h3v-2h-16v2z"></path></g>
<g id="vaadin:stop-cog"><path d="M1 0v7.2l0.5-0.5 1.2 0.6c0 0 0.1 0 0.1 0l0.2-0.6 0.3-0.7h2.4l0.2 0.7 0.2 0.6c0 0 0.1 0 0.1 0l1.2-0.6 1.8 1.8-0.6 1.2c0 0 0 0.1 0 0.1l0.6 0.2 0.7 0.2v2.4l-0.7 0.2-0.6 0.2c0 0 0 0.1 0 0.1l0.6 1.2-0.4 0.7h7.2v-15h-15z"></path><path d="M5.5 11.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M7.9 12.4l1.1-0.4v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.2 0.3-0.5 0.4-0.8zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:stop"><path d="M1 1h14v14h-14v-14z"></path></g>
<g id="vaadin:stopwatch"><path d="M8.5 8.14v-3.64h-1v3.64c-0.301 0.176-0.5 0.498-0.5 0.866 0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.368-0.199-0.69-0.495-0.863z"></path><path d="M8 2c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7s-3.134-7-7-7zM8 14.5c-3.038 0-5.5-2.462-5.5-5.5s2.462-5.5 5.5-5.5c3.038 0 5.5 2.462 5.5 5.5-0.006 3.035-2.465 5.494-5.499 5.5z"></path><path d="M6 0h4v1.5h-4v-1.5z"></path><path d="M0.005 4.438l2.713-2.939 1.102 1.017-2.713 2.939-1.102-1.017z"></path><path d="M12.186 2.519l1.102-1.017 2.713 2.939-1.102 1.017-2.713-2.939z"></path></g>
<g id="vaadin:storage"><path d="M16 4l-8.060-4-7.94 4v1h1v11h2v-9h10v9h2v-11h1v-1zM4 6v-1h2v1h-2zM7 6v-1h2v1h-2zM10 6v-1h2v1h-2z"></path><path d="M6 9h-1v-1h-1v3h3v-3h-1v1z"></path><path d="M6 13h-1v-1h-1v3h3v-3h-1v1z"></path><path d="M10 13h-1v-1h-1v3h3v-3h-1v1z"></path></g>
<g id="vaadin:strikethrough"><path d="M10.5 7c-0.5-0.3-1-0.5-1.4-0.7-2-0.9-2.1-1.1-2-1.9s0.4-1 0.6-1.2c0.9-0.5 2.8-0.1 3.5 0.2l1.1-2.8c-0.4-0.2-3.7-1.4-6.1 0-0.8 0.5-1.9 1.5-2.1 3.4-0.2 1.3 0.1 2.3 0.7 3h-4.8v1h16v-1h-5.5z"></path><path d="M7.7 9c0 0 0.1 0 0.1 0.1 2 0.9 2.4 1.2 2.2 2.5-0.2 0.9-0.5 1.1-0.8 1.3-1.1 0.6-3.3 0-4.4-0.5l-1.2 2.6c0.3 0.1 2.3 1 4.5 1 0.9 0 1.8-0.2 2.6-0.6 0.9-0.5 2-1.4 2.4-3.4 0.2-1.3 0-2.3-0.4-3.1h-5z"></path></g>
<g id="vaadin:subscript"><path d="M16 15v1h-4v-1c0 0 3.3-1.6 2.6-3.2-0.5-1.1-2-0.2-2-0.2l-0.5-0.9c0 0 1.9-1.4 3.1-0.2 2.4 2.3-1.4 4.5-1.4 4.5h2.2z"></path><path d="M12 3h-3.4l-2.6 3-2.6-3h-3.4l4.3 5-4.3 5h3.4l2.6-3 2.6 3h3.4l-4.3-5z"></path></g>
<g id="vaadin:suitcase"><path d="M11 3v-2h-6v2h-5v12h16v-12h-5zM4 14h-1v-10h1v10zM10 3h-4v-1h4v1zM13 14h-1v-10h1v10z"></path></g>
<g id="vaadin:sun-down"><path d="M10 3h-1v-2h-2v2h-1l2 3 2-3z"></path><path d="M14 13l-1.58-1.18 0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 13c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:sun-o"><path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6zM8 13c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"></path></g>
<g id="vaadin:sun-rise"><path d="M6 4h1v2h2v-2h1l-2-3-2 3z"></path><path d="M12.42 11.82l0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 13c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:superscript"><path d="M16 5v1h-4v-1c0 0 3.3-1.6 2.6-3.2-0.5-1.1-2-0.2-2-0.2l-0.5-0.9c0 0 1.9-1.4 3.1-0.2 2.4 2.3-1.4 4.5-1.4 4.5h2.2z"></path><path d="M12 3h-3.4l-2.6 3-2.6-3h-3.4l4.3 5-4.3 5h3.4l2.6-3 2.6 3h3.4l-4.3-5z"></path></g>
<g id="vaadin:sword"><path d="M15.8 0.5l-0.1-0.2-0.2-0.1c-0.1 0-2.5-0.8-4.2 0.9l-6.7 6.6c-0.9-0.6-1.7-1.2-1.8-1l-0.4 0.3c-0.2 0.2 0.9 1.7 1.8 2.7l-2.5 3.4c-0.3-0.3-0.8-0.3-1.1 0l-0.3 0.3c-0.3 0.3-0.3 0.8 0 1.1l1 1c0.3 0.3 0.8 0.3 1.1 0l0.3-0.3c0.3-0.3 0.3-0.8 0-1.1v0l3.5-2.5c1 0.9 2.5 2 2.7 1.8l0.4-0.4c0.1-0.1-0.4-1-1.1-1.8l6.7-6.7c1.7-1.5 0.9-3.9 0.9-4zM7.7 10.5l-0.8-0.8 6.2-6.9-6.9 6.2-0.7-0.7 6.5-6.5c1-1 2.3-0.8 2.9-0.7 0.1 0.6 0.3 1.9-0.7 2.8l-6.5 6.6z"></path></g>
<g id="vaadin:tab-a"><path d="M9 10h-9v-4h9v-2l5 4-5 4v-2z"></path><path d="M14 4h2v8h-2v-8z"></path></g>
<g id="vaadin:tab"><path d="M0 2v12h16v-12h-16zM13 11h-1v-3l-3 3v-2h-6v-2h6v-2l3 3v-3h1v6z"></path></g>
<g id="vaadin:table"><path d="M0 1v15h16v-15h-16zM5 15h-4v-2h4v2zM5 12h-4v-2h4v2zM5 9h-4v-2h4v2zM5 6h-4v-2h4v2zM10 15h-4v-2h4v2zM10 12h-4v-2h4v2zM10 9h-4v-2h4v2zM10 6h-4v-2h4v2zM15 15h-4v-2h4v2zM15 12h-4v-2h4v2zM15 9h-4v-2h4v2zM15 6h-4v-2h4v2z"></path></g>
<g id="vaadin:tablet"><path d="M0 2v12h16v-12h-16zM13 13h-11v-10h11v10zM15 9h-1v-2h1v2z"></path></g>
<g id="vaadin:tabs"><path d="M14 4v-2h-14v12h16v-10h-2zM10 3h3v1h-3v-1zM6 3h3v1h-3v-1zM15 13h-14v-10h4v2h10v8z"></path></g>
<g id="vaadin:tag"><path d="M8 1h-7v7l7 7 7-7zM3.75 5c-0.69 0-1.25-0.56-1.25-1.25s0.56-1.25 1.25-1.25c0.69 0 1.25 0.56 1.25 1.25s-0.56 1.25-1.25 1.25z"></path></g>
<g id="vaadin:tags"><path d="M9 2h-1.5l7 7-5.3 5.2 0.8 0.8 6-6z"></path><path d="M6 2h-6v6l7 7 6-6-7-7zM2.8 6c-0.7 0-1.3-0.6-1.3-1.2s0.6-1.2 1.2-1.2 1.3 0.5 1.3 1.2-0.6 1.2-1.2 1.2z"></path></g>
<g id="vaadin:tasks"><path d="M6 0h10v4h-10v-4z"></path><path d="M6 6h10v4h-10v-4z"></path><path d="M6 12h10v4h-10v-4z"></path><path d="M3 1v2h-2v-2h2zM4 0h-4v4h4v-4z"></path><path d="M3 13v2h-2v-2h2zM4 12h-4v4h4v-4z"></path><path d="M5.3 5.9l-0.6-0.8-0.9 0.9h-3.8v4h4v-2.8l1.3-1.3zM2.7 7l-0.7 0.7-0.8-0.7h1.5zM1 8.2l0.9 0.8h-0.9v-0.8zM3 9h-0.9l0.9-0.9v0.9z"></path></g>
<g id="vaadin:taxi"><path d="M15 6.1l-1.4-2.9c-0.4-0.7-1.1-1.2-2-1.2h-0.6v-1.3c0-0.4-0.3-0.7-0.7-0.7h-4.6c-0.4 0-0.7 0.3-0.7 0.7v1.3h-0.7c-0.8 0-1.6 0.5-1.9 1.2l-1.4 2.9c-0.6 0.1-1 0.6-1 1.1v3.5c0 0.6 0 1.1 1 1.2v2c0 0.6 0.4 1.1 1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-1.9h8v1.9c0 0.6 0.4 1.1 1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-2c1-0.1 1-0.6 1-1.2v-3.5c0-0.5-0.4-1-1-1.1zM4 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8zM10 11h-4v-1h4v1zM2.1 6l1.2-2.4c0.2-0.4 0.6-0.6 1-0.6h7.4c0.4 0 0.8 0.2 1 0.6l1.2 2.4h-11.8zM15 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8z"></path></g>
<g id="vaadin:teeth"><path d="M4.6 7.6c-0.1 0.1-0.5 0.4-1.6 0.4 1.1 0 1.5 0.3 1.6 0.4 0.2-0.2 0.6-0.4 1.5-0.4-0.9 0-1.3-0.2-1.5-0.4z"></path><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c4.4 0 8-3.6 8-8s-3.6-8-8-8zM13.1 11.6c-1 0-1.4-0.8-1.6-1.6-0.2 0.9-0.6 2-1.8 2-1.1 0-1.5-1.1-1.7-2-0.2 1-0.6 2-1.7 2s-1.6-1.1-1.8-2c-0.2 0.8-0.6 1.6-1.6 1.6-2 0-1.9-3-1.9-3s0.2-0.6 1.7-0.6c-1.5 0-1.7-0.5-1.7-0.5s-0.1-3 1.9-3c1 0 1.4 0.8 1.6 1.6 0.2-0.9 0.6-2 1.8-2 1.1-0.1 1.5 1 1.7 1.9 0.2-1 0.6-2 1.7-2s1.6 1.1 1.8 2c0.2-0.8 0.6-1.6 1.6-1.6 2 0 1.9 3 1.9 3s-0.3 0.6-1.8 0.6c-1.2 0-1.6-0.3-1.8-0.4-0.2 0.2-0.7 0.4-1.6 0.4-1.2 0-1.6-0.2-1.8-0.4-0.1 0.1-0.6 0.4-1.6 0.4 1 0 1.4 0.3 1.6 0.4 0.2-0.2 0.6-0.4 1.8-0.4 1 0 1.4 0.2 1.7 0.4 0-0.1 0.5-0.4 1.7-0.4 1.5 0 1.8 0.6 1.8 0.6s0.1 3-1.9 3z"></path></g>
<g id="vaadin:terminal"><path d="M6 12h9v1h-9v-1z"></path><path d="M1.1 13h1.2l3.7-5-3.7-5h-1.3l3.8 5z"></path></g>
<g id="vaadin:text-height"><path d="M15 3h1l-1.5-3-1.5 3h1v10h-1l1.5 3 1.5-3h-1z"></path><path d="M1 0v3h4v13h3v-13h4v-3z"></path></g>
<g id="vaadin:text-input"><path d="M2 2h1v4h-1v-4z"></path><path d="M1 0c-0.6 0-1 0.4-1 1v14c0 0.6 0.4 1 1 1h15v-16h-15zM13 15h-12v-14h12v14zM15 15v0h-1v-1h1v1zM15 13h-1v-10h1v10zM15 2h-1v-1h1v1z"></path></g>
<g id="vaadin:text-label"><path d="M12.5 4.9c-1.4 0-2.5 0.8-2.6 0.9l1.2 1.6c0 0 0.7-0.5 1.4-0.5 1.4 0 1.5 1.2 1.5 1.6-0.4-0.1-1.1-0.3-2-0.1-1.4 0.3-2.8 2-2.1 3.9 0.7 1.8 3.1 2.1 4.1 0.6v1h2v-5.3c0-2.7-1.9-3.7-3.5-3.7zM11.5 11.4c-0.1-1.9 1.5-1.9 2.5-1.8v1c0 1.2-2.3 2.3-2.5 0.8z"></path><path d="M6.9 14h2.1l-3.2-12h-2.7l-3.1 12h2.1l1-4h2.7l1.1 4zM3.6 8l0.8-3.2 0.9 3.2h-1.7z"></path></g>
<g id="vaadin:text-width"><path d="M15 14.5l-3-1.5v1h-9v-1l-3 1.5 3 1.5v-1h9v1z"></path><path d="M0 0v3h6v9h3v-9h6v-3z"></path></g>
<g id="vaadin:thin-square"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:thumbs-down-o"><path d="M15.6 7.3c0.1-0.3 0.3-0.7 0.2-1.2 0-0.6-0.3-1.1-0.5-1.3 0.1-0.3 0.1-0.6 0-1.1s-0.4-0.8-0.6-1c0.1-0.3 0.1-0.8-0.3-1.4-0.4-1-1.2-1.3-3.6-1.3-1.7 0-3.3 0.8-4.6 1.5-0.4 0.2-1 0.5-1.2 0.5v0h-5v9h5v-0.9l2.7 2.7 1 2.8c0.2 0.2 0.4 0.4 0.8 0.4h0.1c0 0 0 0 0 0 0.5 0 2-0.1 2.4-1.9 0.2-0.9-0.1-2.2-0.5-3.1h2.3c0.7-0.1 2.1-0.6 2.2-2.1 0-0.7-0.2-1.3-0.4-1.6zM2.5 7.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1zM13.8 10h-2.5c-0.3 0-0.5 0.1-0.7 0.4-0.2 0.2-0.2 0.5-0.1 0.8 0.5 1.2 0.7 2.2 0.6 2.8-0.2 0.9-0.9 1.1-1.4 1.1l-1-2.7c0-0.1-0.1-0.2-0.2-0.3l-2.9-2.9c-0.1-0.1-0.3-0.2-0.5-0.2h-0.1v-6c0.4 0 0.8-0.2 1.7-0.6 1.1-0.6 2.7-1.4 4.1-1.4 2.5 0 2.7 0.4 2.9 0.7 0.3 0.5 0.1 0.9 0.1 0.9l-0.2 0.4 0.4 0.3c0 0 0.4 0.2 0.5 0.7 0.1 0.4 0 0.7 0 0.7l-0.3 0.3 0.3 0.3c0 0 0.4 0.3 0.4 0.9 0 0.5-0.2 0.7-0.2 0.7l-0.4 0.3 0.4 0.4c0 0 0.4 0.4 0.3 1.2 0 1.1-1.1 1.2-1.2 1.2z"></path></g>
<g id="vaadin:thumbs-down"><path d="M15.6 7.8c0 0 0.5 0.5 0.4 1.6 0 1.5-1.6 1.6-1.6 1.6h-2.4c-0.2 0-0.3 0.2-0.3 0.4 0.3 0.7 0.8 2.1 0.6 3.1-0.3 1.4-1.5 1.5-1.9 1.5-0.1 0-0.2-0.1-0.2-0.2l-1-2.8c0 0 0-0.1-0.1-0.1l-2.6-2.8c-0.1-0.1-0.2-0.1-0.3-0.1h-0.2v-7h0.2c0.7 0 3.2-2 5.4-2s2.7 0.3 3.1 1c0.4 0.7 0.1 1.3 0.1 1.3s0.5 0.3 0.6 1c0.1 0.7-0.1 1.1-0.1 1.1s0.5 0.4 0.5 1.2c0.1 0.9-0.2 1.2-0.2 1.2z"></path><path d="M0 11h5v-8h-5v8zM2.5 7.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1z"></path></g>
<g id="vaadin:thumbs-up-o"><path d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z"></path></g>
<g id="vaadin:thumbs-up"><path d="M15.6 8.2c0 0 0.5-0.5 0.4-1.6 0-1.5-1.6-1.6-1.6-1.6h-2.4c-0.2 0-0.3-0.2-0.3-0.4 0.3-0.7 0.8-2.1 0.6-3.1-0.3-1.4-1.5-1.5-1.9-1.5-0.1 0-0.2 0.1-0.2 0.2l-1 2.8c0 0 0 0.1-0.1 0.1l-2.6 2.8c-0.1 0.1-0.2 0.1-0.3 0.1h-0.2v7h0.2c0.7 0 3.2 2 5.4 2s2.7-0.3 3.1-1c0.4-0.7 0.1-1.3 0.1-1.3s0.5-0.3 0.6-1c0.1-0.7-0.1-1.1-0.1-1.1s0.5-0.4 0.5-1.2c0.1-0.9-0.2-1.2-0.2-1.2z"></path><path d="M0 14h5v-8h-5v8zM2.5 10.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1z"></path></g>
<g id="vaadin:ticket"><path d="M14 3h-12c0 1.1-0.9 2-2 2v6c1.1 0 2 0.9 2 2h12c0-1.1 0.9-2 2-2v0-6c-1.1 0-2-0.9-2-2zM13 12h-10v-8h10v8z"></path><path d="M4 5h8v6h-8v-6z"></path></g>
<g id="vaadin:time-backward"><path d="M8 4h-1v5h4v-1h-3z"></path><path d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path></g>
<g id="vaadin:time-forward"><path d="M8 4h-1v5h4v-1h-3z"></path><path d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"></path></g>
<g id="vaadin:timer"><path d="M9.060 9.060c0.271-0.271 0.439-0.646 0.439-1.060s-0.168-0.789-0.439-1.060c-0.59-0.59-6.72-4.6-6.72-4.6s4 6.13 4.59 6.72c0.272 0.274 0.649 0.444 1.065 0.444s0.793-0.17 1.065-0.444z"></path><path d="M8 0v3h1v-1.41c3.153 0.495 5.536 3.192 5.536 6.445 0 3.601-2.919 6.52-6.52 6.52s-6.52-2.919-6.52-6.52c0-1.256 0.355-2.428 0.97-3.423l-0.916-1.322c-0.958 1.303-1.533 2.939-1.533 4.71 0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8-0.006 0-0.012 0-0.017 0z"></path></g>
<g id="vaadin:toolbox"><path d="M0 8h6v2h4v-2h6v6h-16z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M11 4v-2h-6v2h-5v3h6v-1h4v1h6v-3h-5zM6 4v-1h4v1h-4z"></path></g>
<g id="vaadin:tools"><path d="M10.3 8.2l-0.9 0.9 0.9 0.9-1.2 1.2 4.3 4.3c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1l-5.2-5.2zM14.2 15c-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 0.5-0.3 0.8-0.8 0.8z"></path><path d="M3.6 8l0.9-0.6 1.5-1.7 0.9 0.9 0.9-0.9-0.1-0.1c0.2-0.5 0.3-1 0.3-1.6 0-2.2-1.8-4-4-4-0.6 0-1.1 0.1-1.6 0.3l2.9 2.9-2.1 2.1-2.9-2.9c-0.2 0.5-0.3 1-0.3 1.6 0 2.1 1.6 3.7 3.6 4z"></path><path d="M8 10.8l0.9-0.8-0.9-0.9 5.7-5.7 1.2-0.4 1.1-2.2-0.7-0.7-2.3 1-0.5 1.2-5.6 5.7-0.9-0.9-0.8 0.9c0 0 0.8 0.6-0.1 1.5-0.5 0.5-1.3-0.1-2.8 1.4-0.5 0.5-2.1 2.1-2.1 2.1s-0.6 1 0.6 2.2 2.2 0.6 2.2 0.6 1.6-1.6 2.1-2.1c1.4-1.4 0.9-2.3 1.3-2.7 0.9-0.9 1.6-0.2 1.6-0.2zM4.9 10.4l0.7 0.7-3.8 3.8-0.7-0.7z"></path></g>
<g id="vaadin:tooth"><path d="M11.3 16c-1.2 0-1.7-3.9-1.7-4.1-0.1-1.3-1-2.1-1.6-2.2-0.6 0-1.4 0.9-1.6 2.2 0 0.2-0.5 4.1-1.7 4.1s-1.8-4.4-1.9-4.4c-0.2-1.4 0.1-3.4 0.2-4-0.4-1.2-1.8-5.6-0.5-7 0.5-0.4 1.1-0.6 1.9-0.6 0.6 0 1.3 0.1 2 0.3 0.6 0.1 1.1 0.2 1.6 0.2s1-0.1 1.6-0.2c0.7-0.2 1.4-0.3 2-0.3 0.8 0 1.4 0.2 1.8 0.7 1.3 1.4-0.1 5.8-0.5 7 0.1 0.5 0.4 2.5 0.2 3.9 0.1 0-0.5 4.4-1.8 4.4zM8 8.7c1.3 0.1 2.4 1.4 2.6 3.1 0.1 1.2 0.5 2.4 0.7 2.9 0.3-0.6 0.7-2.1 0.9-3.3 0.2-1.4-0.2-3.7-0.2-3.7v-0.2c0.7-2.1 1.4-5.3 0.8-6.1-0.3-0.3-0.7-0.4-1.2-0.4s-1.2 0.1-1.8 0.3c-0.6 0.1-1.2 0.2-1.8 0.2s-1.2-0.1-1.8-0.2c-0.6-0.2-1.3-0.3-1.8-0.3s-0.9 0.1-1.1 0.4c-0.7 0.7 0 4 0.8 6.1v0.2c0 0-0.4 2.3-0.2 3.7 0.2 1.2 0.6 2.7 0.9 3.3 0.2-0.6 0.6-1.7 0.7-2.9 0.1-1.6 1.2-3 2.5-3.1z"></path></g>
<g id="vaadin:touch"><path d="M12.62 6c-0.093-0.023-0.2-0.036-0.31-0.036s-0.217 0.013-0.319 0.038c-0.045-0.33-0.192-0.616-0.402-0.843-0.257-0.259-0.614-0.42-1.008-0.42-0.018 0-0.036 0-0.053 0.001-0-0-0.004-0-0.007-0-0.22 0-0.43 0.044-0.621 0.124-0.062-0.183-0.163-0.336-0.29-0.464-0.261-0.25-0.617-0.403-1.008-0.403-0.036 0-0.072 0.001-0.107 0.004l0.005-0c0.315-0.414 0.505-0.938 0.505-1.506 0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 0.813 0.388 1.535 0.989 1.992l0.006 2.664c-0.554 0.015-1.054 0.233-1.432 0.581-0.568 0.619-0.568 1.579-0.568 2.779 0 0.23 0 0.47 0 0.72 0.032 1.127 0.573 2.121 1.402 2.764l0.358 0.356c1.24 1.27 2.38 1.65 5.020 1.65 2.88 0 4.22-1.61 4.22-5.060v-2.51c0-0.77-0.22-2.12-1.38-2.43zM13 8.35v2.59c0 3.37-1.29 4.060-3.22 4.060-2.6 0-3.4-0.39-4.3-1.33l-0.36-0.37c-0.657-0.468-1.088-1.215-1.12-2.065-0-0.265-0-0.505-0-0.735-0.033-0.178-0.053-0.383-0.053-0.592 0-0.538 0.126-1.047 0.351-1.498 0.186-0.132 0.431-0.228 0.698-0.24l0.003 0.7v-0.22l-0.34 1.5c-0.010 0.022-0.016 0.048-0.016 0.075 0 0.103 0.083 0.186 0.186 0.186 0.075 0 0.14-0.045 0.17-0.11l1-1.211c0.003-0.014 0.005-0.029 0.005-0.045s-0.002-0.031-0.005-0.046l0-5.609c-0-0.012-0.001-0.026-0.001-0.039 0-0.256 0.083-0.492 0.223-0.684 0.091-0.096 0.223-0.158 0.369-0.158 0.010 0 0.020 0 0.030 0.001-0.001-0-0.001-0-0.001-0 0.21 0 0.38 0.17 0.38 0.38 0 0.004-0 0.007-0 0.011l0 3.869c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.32c0.010-0.251 0.217-0.451 0.47-0.451 0.011 0 0.021 0 0.032 0.001 0.023-0.005 0.051-0.008 0.079-0.008 0.232 0 0.42 0.188 0.42 0.42 0 0.010-0 0.020-0.001 0.029l0 1.329c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.64c0.034-0.218 0.22-0.383 0.445-0.383 0.019 0 0.038 0.001 0.057 0.004 0.013-0.002 0.030-0.003 0.047-0.003 0.112 0 0.214 0.043 0.291 0.113 0.1 0.129 0.16 0.294 0.16 0.473 0 0.006-0 0.012-0 0.017l0 0.819c0.003 0.252 0.193 0.459 0.438 0.49 0.021 0.003 0.043 0.004 0.066 0.004 0.241 0 0.442-0.166 0.496-0.39 0.026-0.112 0.082-0.204 0.16-0.273 0.033-0.015 0.071-0.024 0.111-0.024s0.078 0.009 0.112 0.024c0.38 0.249 0.628 0.674 0.628 1.157 0 0.057-0.003 0.113-0.010 0.169l0.001-0.007z"></path></g>
<g id="vaadin:train"><path d="M13 11.2v-7.4c0-1-0.8-1.8-1.8-1.8h-2.2v-1h2v-1h-6v1h2v1h-2.2c-1 0-1.8 0.8-1.8 1.8v7.4c0 1 0.8 1.8 1.8 1.8h0.2l-0.7 1h-1.3v1h0.7l-0.7 1h2l0.6-1h4.9l0.6 1h2l-0.7-1h0.6v-1h-1.3l-0.7-1h0.2c1 0 1.8-0.8 1.8-1.8zM4 3.9c0-0.5 0.4-0.9 0.9-0.9h6.1c0.6 0 1 0.4 1 0.9v2.1c0 0.6-0.4 1-0.9 1h-6.2c-0.5 0-0.9-0.4-0.9-0.9v-2.2zM4 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1zM9.9 14h-3.8l0.6-1h2.6l0.6 1zM10 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1z"></path></g>
<g id="vaadin:trash"><path d="M13 3s0-0.51-2-0.8v-0.7c-0.017-0.832-0.695-1.5-1.53-1.5-0 0-0 0-0 0h-3c-0.815 0.017-1.47 0.682-1.47 1.5 0 0 0 0 0 0v0.7c-0.765 0.068-1.452 0.359-2.007 0.806l-0.993-0.006v1h12v-1h-1zM6 1.5c0.005-0.274 0.226-0.495 0.499-0.5l3.001-0c0 0 0.001 0 0.001 0 0.282 0 0.513 0.22 0.529 0.499l0 0.561c-0.353-0.042-0.763-0.065-1.178-0.065-0.117 0-0.233 0.002-0.349 0.006-0.553-0-2.063-0-2.503 0.070v-0.57z"></path><path d="M2 5v1h1v9c1.234 0.631 2.692 1 4.236 1 0.002 0 0.003 0 0.005 0h1.52c0.001 0 0.003 0 0.004 0 1.544 0 3.002-0.369 4.289-1.025l-0.054-8.975h1v-1h-12zM6 13.92q-0.51-0.060-1-0.17v-6.75h1v6.92zM9 14h-2v-7h2v7zM11 13.72c-0.267 0.070-0.606 0.136-0.95 0.184l-0.050-6.904h1v6.72z"></path></g>
<g id="vaadin:tree-table"><path d="M6 10v-2h-2v-1h1v-2h-3v2h1v6h3v-2h-2v-1z"></path><path d="M0 0v16h16v-16h-16zM7 15h-6v-12h6v12zM11 15h-3v-12h3v12zM15 15h-3v-12h3v12z"></path></g>
<g id="vaadin:trending-down"><path d="M16 14h-4l1.29-1.29-4.29-4.3-3 3-6-6v-2.82l6 6 3-3 5.71 5.7 1.28-1.29 0.010 4z"></path></g>
<g id="vaadin:trending-up"><path d="M16 2h-4l1.29 1.29-4.29 4.3-3-3-6 6v2.82l6-6 3 3 5.71-5.7 1.28 1.29 0.010-4z"></path></g>
<g id="vaadin:trophy"><path d="M11.7 8c4.2-0.3 4.3-2.7 4.3-5h-3v-3h-10v3h-3c0 2.3 0.1 4.7 4.3 5 0.9 1.4 2.1 2 2.7 2v4c-3 0-3 2-3 2h8c0 0 0-2-3-2v-4c0.6 0 1.8-0.6 2.7-2zM13 4h2c-0.1 1.6-0.4 2.7-2.7 2.9 0.3-0.8 0.6-1.7 0.7-2.9zM1 4h2c0.1 1.2 0.4 2.1 0.7 2.9-2.2-0.2-2.6-1.3-2.7-2.9zM4.5 6.1c-0.5-1.7-0.5-3.1-0.5-3.1v-2h1v2c0 0 0 1.7 0.4 3.1 0.5 1.7 1.6 2.9 1.6 2.9s-1.8-0.2-2.5-2.9z"></path></g>
<g id="vaadin:truck"><path d="M6 3h10v7h-10v-7z"></path><path d="M15 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M13 11c1.3 0 2.4 0.8 2.8 2h0.2v-2h-3z"></path><path d="M5 5h-4l-1 4v4h1.2c0.4-1.2 1.5-2 2.8-2s2.4 0.8 2.8 2h3.4c0.4-1.2 1.5-2 2.8-2h-8v-6zM4 9h-3l0.8-3h2.2v3z"></path><path d="M6 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:twin-col-select"><path d="M0 2v12h16v-12h-16zM7 13h-6v-10h6v10zM15 13h-6v-10h6v10z"></path><path d="M10 4h4v1h-4v-1z"></path><path d="M2 4h4v1h-4v-1z"></path><path d="M2 6h4v1h-4v-1z"></path><path d="M2 8h4v1h-4v-1z"></path></g>
<g id="vaadin:twitter-square"><path d="M0 0v16h16v-16h-16zM12.8 5.6c0 0.1 0 0.2 0 0.3 0 3.3-2.5 7-7 7-1.4 0-2.7-0.4-3.8-1.1 0.2 0 0.4 0 0.6 0 1.2 0 2.2-0.4 3.1-1.1-1.1 0-2-0.7-2.3-1.7 0.2 0 0.3 0 0.5 0s0.4 0 0.6-0.1c-1.1-0.2-2-1.2-2-2.4 0 0 0 0 0 0 0.3 0.2 0.7 0.3 1.1 0.3-0.7-0.4-1.1-1.2-1.1-2 0-0.5 0.1-0.9 0.3-1.2 1.2 1.5 3.1 2.4 5.1 2.5 0-0.2-0.1-0.4-0.1-0.6 0-1.4 1.1-2.5 2.5-2.5 0.7 0 1.3 0.3 1.8 0.8 0.6-0.1 1.1-0.3 1.6-0.6-0.2 0.6-0.6 1.1-1.1 1.4 0.5-0.1 1-0.2 1.4-0.4-0.3 0.6-0.7 1-1.2 1.4z"></path></g>
<g id="vaadin:twitter"><path d="M16 3c-0.6 0.3-1.2 0.4-1.9 0.5 0.7-0.4 1.2-1 1.4-1.8-0.6 0.4-1.3 0.6-2.1 0.8-0.6-0.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 0.3 0 0.5 0.1 0.7-2.7-0.1-5.2-1.4-6.8-3.4-0.3 0.5-0.4 1-0.4 1.7 0 1.1 0.6 2.1 1.5 2.7-0.5 0-1-0.2-1.5-0.4 0 0 0 0 0 0 0 1.6 1.1 2.9 2.6 3.2-0.3 0.1-0.6 0.1-0.9 0.1-0.2 0-0.4 0-0.6-0.1 0.4 1.3 1.6 2.3 3.1 2.3-1.1 0.9-2.5 1.4-4.1 1.4-0.3 0-0.5 0-0.8 0 1.5 0.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3 0-0.1 0-0.3 0-0.4 0.7-0.5 1.3-1.1 1.7-1.8z"></path></g>
<g id="vaadin:umbrella"><path d="M5.36 0.9l-0.27-0.57c-0.083-0.197-0.275-0.333-0.499-0.333-0.1 0-0.193 0.027-0.274 0.074-0.217 0.074-0.372 0.279-0.372 0.52 0 0.087 0.020 0.169 0.056 0.242l0.319 0.577c-6.2 3.49-3.9 10.59-3.9 10.59h0.060c0.25-0.12 0.8-1.64 2.050-2.25s2.78-0.090 3-0.21l0.12-0.060c0.477-0.742 0.998-1.387 1.58-1.97l3.37 7.070c0.246 0.619 0.729 1.098 1.334 1.335 0.168 0.053 0.343 0.080 0.524 0.080 0.254 0 0.495-0.053 0.713-0.149l0.359-0.176c0.263-0.145 0.462-0.38 0.558-0.662 0.117-0.276 0.183-0.586 0.183-0.913 0-0.401-0.1-0.778-0.277-1.108-0.102-0.189-0.311-0.324-0.551-0.324-0.076 0-0.149 0.014-0.217 0.038-0.182 0.089-0.308 0.277-0.308 0.495 0 0.093 0.023 0.18 0.064 0.257s0.529 1.067-0.101 1.337-1.19-0.73-1.19-0.73l-3.42-7.060c0.372-0.043 0.803-0.067 1.24-0.067s0.868 0.024 1.292 0.072l0.068-0.065c0.25-0.12 0.8-1.64 2.050-2.25s2.78-0.090 3-0.21h0.060s-3.98-6.41-10.62-3.58zM7.36 6.36c-1.034 0.399-1.834 1.209-2.211 2.224-0.55-1.082-0.909-2.375-1.007-3.74-0.142-2.244 0.608-2.924 0.608-2.924l0.77-0.32c1.084 0.101 2.052 0.534 2.816 1.195 0.976 0.895 1.747 2.009 2.233 3.265-0.339-0.021-0.752-0.067-1.175-0.067-0.724 0-1.417 0.134-2.054 0.379z"></path></g>
<g id="vaadin:underline"><path d="M2 15h12v1h-12v-1z"></path><path d="M11 0v8.4c0 1.5-1.1 2.6-2.6 2.6h-0.8c-1.5 0-2.6-1.1-2.6-2.6v-8.4h-3v8.4c0 3.1 2.5 5.6 5.6 5.6h0.9c3.1 0 5.6-2.5 5.6-5.6v-8.4h-3.1z"></path></g>
<g id="vaadin:unlink"><path d="M8 0h1v4h-1v-4z"></path><path d="M8 12h1v4h-1v-4z"></path><path d="M7 9h-4c-0.552 0-1-0.448-1-1s0.448-1 1-1h4v-2h-4c-1.657 0-3 1.343-3 3s1.343 3 3 3h4v-2z"></path><path d="M13 5h-4v2h4c0.552 0 1 0.448 1 1s-0.448 1-1 1h-4v2h4c1.657 0 3-1.343 3-3s-1.343-3-3-3z"></path><path d="M4.51 15.44l2.49-3.44h-1.23l-2.080 2.88 0.82 0.56z"></path><path d="M12.49 15.44l-2.49-3.44h1.23l2.080 2.88-0.82 0.56z"></path><path d="M12.49 0.99l-2.49 3.010h1.23l2.080-2.66-0.82-0.35z"></path><path d="M4.51 0.99l2.49 3.010h-1.23l-2.080-2.66 0.82-0.35z"></path></g>
<g id="vaadin:unlock"><path d="M8 8v-3.1c0-2.2-1.8-3.9-3.9-3.9h-0.3c-2.2 0-3.8 1.7-3.8 3.9v2.1h2v-2.1c0-1.1 0.7-1.9 1.8-1.9h0.3c1 0 1.9 0.8 1.9 1.9v3.1h-1l0.1 5c0 0-0.1 3 4.9 3s5-3 5-3v-5h-7zM11 14h-1v-1.8c-0.6 0-1-0.6-1-1.1 0-0.6 0.4-1.1 1-1.1s1 0.4 1 0.9v3.1z"></path></g>
<g id="vaadin:upload-alt"><path d="M0 14h16v2h-16v-2z"></path><path d="M8 0l-5 5h3v8h4v-8h3z"></path></g>
<g id="vaadin:upload"><path d="M11 10v2h-6v-2h-5v6h16v-6h-5zM4 14h-2v-2h2v2z"></path><path d="M13 5l-5-5-5 5h3v6h4v-6z"></path></g>
<g id="vaadin:user-card"><path d="M15 3v10h-14v-10h14zM16 2h-16v12h16v-12z"></path><path d="M8 5h6v1h-6v-1z"></path><path d="M8 7h6v1h-6v-1z"></path><path d="M8 9h3v1h-3v-1z"></path><path d="M5.4 7h-0.4v-0.1c0.6-0.2 1-0.8 1-1.4 0-0.8-0.7-1.5-1.5-1.5s-1.5 0.7-1.5 1.5c0 0.7 0.4 1.2 1 1.4v0.1h-0.4c-0.9 0-1.6 0.7-1.6 1.6v2.4h5v-2.4c0-0.9-0.7-1.6-1.6-1.6z"></path></g>
<g id="vaadin:user-check"><path d="M7.5 14.4c-0.8-0.8-0.8-2 0-2.8s2-0.8 2.8 0l0.6 0.6 1.9-2.1c-0.7-0.4-1.3-0.4-2-0.4-0.7-0.1-1.4-0.3-1.4-0.9s0.8-0.4 1.4-1.5c0 0 2.7-7.3-2.9-7.3-5.5 0-2.8 7.3-2.8 7.3 0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h8l-1.6-1.6z"></path><path d="M12.8 16h2.1c0 0-0.1-0.9-0.2-2l-1.9 2z"></path><path d="M11 16c-0.3 0-0.5-0.1-0.7-0.3l-2-2c-0.4-0.4-0.4-1 0-1.4s1-0.4 1.4 0l1.3 1.3 3.3-3.6c0.4-0.4 1-0.4 1.4-0.1 0.4 0.4 0.4 1 0.1 1.4l-4 4.3c-0.3 0.3-0.5 0.4-0.8 0.4 0 0 0 0 0 0z"></path></g>
<g id="vaadin:user-clock"><path d="M14 13h-3v-3h1v2h2z"></path><path d="M16 12.5c0-2.5-2-4.5-4.5-4.5-0.7 0-1.4 0.2-2 0.5 0.2-0.3 0.8-0.3 1.4-1.2 0 0 2.7-7.3-2.9-7.3s-2.9 7.3-2.9 7.3c0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h10.4c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5h3.4c0 0 0-0.2 0-0.5 0.6-0.8 1.1-1.8 1.1-3z"></path></g>
<g id="vaadin:user-heart"><path d="M14.2 16h0.6c0 0 0-0.2 0-0.6l-0.6 0.6z"></path><path d="M8.6 13.9c-0.7-0.7-1-1.8-0.8-2.8s0.8-1.8 1.7-2.1c0-0.1-0.1-0.2-0.1-0.2 0-0.6 0.8-0.4 1.4-1.5 0 0 2.7-7.3-2.9-7.3-5.5 0-2.8 7.3-2.8 7.3 0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h9.6l-2.1-2.1z"></path><path d="M14.9 10.1c-0.2-0.1-0.5-0.1-0.7-0.1-0.7 0-1.3 0.6-1.7 1.1-0.4-0.5-1-1.1-1.7-1.1-0.3 0-0.5 0-0.7 0.1-1.2 0.4-1.4 2-0.5 2.9l3 2.9 3-2.9c0.8-0.9 0.5-2.5-0.7-2.9z"></path></g>
<g id="vaadin:user-star"><path d="M8.92 13.67l-1.61-1.53-1.5-1.42 2-0.29 2.25-0.32 0.29-0.57c-0.006 0-0.013 0-0.020 0-0.482 0-0.884-0.34-0.979-0.794-0.001-0.617 0.799-0.417 1.429-1.457 0.080-0.020 2.82-7.29-2.78-7.29s-2.86 7.27-2.86 7.27c0.63 1 1.44 0.85 1.43 1.45s-0.74 0.8-1.43 0.87c-1.14 0.13-2.14-0.13-3.14 1.76-0.6 1.090-0.85 4.65-0.85 4.65h7.36v-0.17z"></path><path d="M11.72 16h0.56l-0.28-0.14-0.28 0.14z"></path><path d="M12 14.73l2.47 1.27-0.47-2.69 2-1.9-2.76-0.39-1.24-2.45-1.24 2.45-2.76 0.39 2 1.9-0.47 2.69 2.47-1.27z"></path></g>
<g id="vaadin:user"><path d="M8 0c-5.6 0-2.9 7.3-2.9 7.3 0.6 1 1.4 0.8 1.4 1.5 0 0.6-0.7 0.8-1.4 0.9-1.1 0-2.1-0.2-3.1 1.6-0.6 1.1-0.9 4.7-0.9 4.7h13.7c0 0-0.3-3.6-0.8-4.7-1-1.9-2-1.6-3.1-1.7-0.7-0.1-1.4-0.3-1.4-0.9s0.8-0.4 1.4-1.5c0 0.1 2.7-7.2-2.9-7.2z"></path></g>
<g id="vaadin:users"><path d="M5.3 9.7c-0.4 0-0.9-0.2-0.9-0.6s0.5-0.3 0.9-1c0 0 1.8-4.9-1.8-4.9s-1.8 4.9-1.8 4.9c0.4 0.7 0.9 0.6 0.9 1s-0.5 0.6-0.9 0.6c-0.6 0.1-1.1 0-1.7 0.6v5.7h5c0.2-1.7 0.7-5.2 1.1-6.1 0 0 0.1-0.1 0.1-0.1-0.2-0.1-0.5-0.1-0.9-0.1z"></path><path d="M16 9.5c-0.7-0.8-1.3-0.7-2-0.8-0.5-0.1-1.1-0.2-1.1-0.7s0.6-0.3 1.1-1.2c0 0 2.1-5.9-2.2-5.9-4.4 0.1-2.3 6-2.3 6 0.5 0.8 1.1 0.7 1.1 1.1 0 0.5-0.6 0.6-1.1 0.7-0.9 0.1-1.7 0-2.5 1.5-0.4 0.9-1 5.8-1 5.8h10v-6.5z"></path></g>
<g id="vaadin:vaadin-h"><path d="M15.21 0.35c-0.436 0-0.79 0.354-0.79 0.79v0 0.46c0 0.5-0.32 0.85-1.070 0.85h-3.55c-1.61 0-1.73 1.19-1.8 1.83v0c-0.060-0.64-0.18-1.83-1.79-1.83h-3.57c-0.75 0-1.090-0.37-1.090-0.86v-0.45c0-0.006 0-0.013 0-0.020 0-0.425-0.345-0.77-0.77-0.77-0 0-0 0-0 0h0c-0 0-0 0-0 0-0.431 0-0.78 0.349-0.78 0.78 0 0.004 0 0.007 0 0.011v-0.001 1.32c0 1.54 0.7 2.31 2.34 2.31h3.66c1.090 0 1.19 0.46 1.19 0.9 0 0 0 0.090 0 0.13 0.048 0.428 0.408 0.758 0.845 0.758s0.797-0.33 0.845-0.754l0-0.004s0-0.080 0-0.13c0-0.44 0.1-0.9 1.19-0.9h3.61c1.61 0 2.32-0.77 2.32-2.31v-1.32c0-0.436-0.354-0.79-0.79-0.79v0z"></path><path d="M11.21 7.38c-0.012-0-0.026-0.001-0.040-0.001-0.453 0-0.835 0.301-0.958 0.714l-0.002 0.007-2.21 4.21-2.3-4.2c-0.122-0.425-0.507-0.731-0.963-0.731-0.013 0-0.026 0-0.039 0.001l0.002-0c-0.012-0-0.025-0.001-0.039-0.001-0.58 0-1.050 0.47-1.050 1.050 0 0.212 0.063 0.41 0.171 0.575l-0.002-0.004 3.29 6.1c0.15 0.333 0.478 0.561 0.86 0.561s0.71-0.228 0.858-0.555l0.002-0.006 3.34-6.1c0.090-0.152 0.144-0.335 0.144-0.53 0-0.58-0.47-1.050-1.050-1.050-0.005 0-0.010 0-0.014 0h0.001z"></path></g>
<g id="vaadin:vaadin-v"><path d="M5.8 7.16h-0.13c-0.44 0-0.9-0.1-0.9-1.19v-3.62c0-1.64-0.77-2.35-2.31-2.35h-1.32c-0.436 0-0.79 0.354-0.79 0.79v0c0 0.436 0.354 0.79 0.79 0.79v0h0.46c0.5 0 0.85 0.32 0.85 1.070v3.55c0 1.61 1.19 1.73 1.83 1.8v0c-0.64 0.060-1.83 0.18-1.83 1.79v3.55c0 0.75-0.37 1.090-0.86 1.090h-0.45c-0.006-0-0.013-0-0.020-0-0.425 0-0.77 0.345-0.77 0.77 0 0 0 0 0 0v-0c0 0 0 0 0 0 0 0.431 0.349 0.78 0.78 0.78 0.004 0 0.007-0 0.011-0h1.319c1.54 0 2.31-0.7 2.31-2.34v-3.59c0-1.090 0.46-1.19 0.9-1.19h0.13c0.428-0.048 0.758-0.408 0.758-0.845s-0.33-0.797-0.754-0.845l-0.004-0z"></path><path d="M15.1 7.19v0l-6.1-3.32c-0.152-0.090-0.335-0.144-0.53-0.144-0.58 0-1.050 0.47-1.050 1.050 0 0.005 0 0.010 0 0.014v-0.001c-0 0.012-0.001 0.026-0.001 0.040 0 0.453 0.301 0.835 0.714 0.958l0.007 0.002 4.21 2.26-4.24 2.25c-0.425 0.122-0.731 0.507-0.731 0.963 0 0.013 0 0.026 0.001 0.039l-0-0.002c-0 0.012-0.001 0.025-0.001 0.039 0 0.58 0.47 1.050 1.050 1.050 0.212 0 0.41-0.063 0.575-0.171l-0.004 0.002 6.1-3.29c0.333-0.15 0.561-0.478 0.561-0.86s-0.228-0.71-0.555-0.858l-0.006-0.002z"></path></g>
<g id="vaadin:viewport"><path d="M1 4h-1v-4h4v1h-3z"></path><path d="M12 1v-1h4v4h-1v-3z"></path><path d="M15 12h1v4h-4v-1h3z"></path><path d="M4 15v1h-4v-4h1v3z"></path><path d="M13 3v10h-10v-10h10zM14 2h-12v12h12v-12z"></path></g>
<g id="vaadin:vimeo-square"><path d="M0 0v16h16v-16h-16zM13.9 5.3c-0.7 3.8-4.4 7-5.5 7.7s-2.2-0.3-2.5-1.1c-0.4-0.9-1.7-5.7-2-6.1-0.4-0.3-1.4 0.5-1.4 0.5l-0.5-0.7c0 0 2-2.4 3.6-2.7s1.6 2.5 2 4.1c0.4 1.5 0.6 2.4 1 2.4 0.3 0 1-0.9 1.7-2.2s0-2.5-1.4-1.6c0.5-3.3 5.7-4.1 5-0.3z"></path></g>
<g id="vaadin:vimeo"><path d="M15.9 4.4c-0.9 5-5.9 9.3-7.4 10.3s-2.9-0.4-3.4-1.4c-0.5-1.3-2.2-7.6-2.7-8.2-0.4-0.5-1.8 0.6-1.8 0.6l-0.6-0.9c0 0 2.7-3.3 4.8-3.7 2.2-0.4 2.2 3.4 2.7 5.5 0.5 2 0.9 3.2 1.3 3.2s1.3-1.1 2.2-2.9c0.9-1.7 0-3.3-1.9-2.2 0.8-4.3 7.7-5.4 6.8-0.3z"></path></g>
<g id="vaadin:volume-down"><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume-off"><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume-up"><path d="M15 8.5c0 2.3-0.8 4.5-2 6.2l0.7 0.8c1.5-1.9 2.4-4.4 2.4-7 0-3.1-1.2-5.9-3.2-8l-0.5 1c1.6 1.8 2.6 4.3 2.6 7z"></path><path d="M11.8 2.4l-0.5 1c1.1 1.4 1.7 3.2 1.7 5.1 0 1.7-0.5 3.2-1.3 4.6l0.7 0.8c1.1-1.5 1.7-3.4 1.7-5.4-0.1-2.3-0.9-4.4-2.3-6.1z"></path><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume"><path d="M11.8 2.4l-0.5 1c1.1 1.4 1.7 3.2 1.7 5.1 0 1.7-0.5 3.2-1.3 4.6l0.7 0.8c1.1-1.5 1.7-3.4 1.7-5.4-0.1-2.3-0.9-4.4-2.3-6.1z"></path><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:wallet"><path d="M14.5 4h-12.12c-0.057 0.012-0.123 0.018-0.19 0.018-0.552 0-1-0.448-1-1 0-0.006 0-0.013 0-0.019l12.81-0.499v-1.19c0.005-0.041 0.008-0.089 0.008-0.138 0-0.652-0.528-1.18-1.18-1.18-0.049 0-0.097 0.003-0.144 0.009l-11.374 1.849c-0.771 0.289-1.31 1.020-1.31 1.877 0 0.011 0 0.023 0 0.034l-0 10.728c-0 0.003-0 0.006-0 0.010 0 0.828 0.672 1.5 1.5 1.5 0 0 0 0 0 0h13c0 0 0 0 0 0 0.828 0 1.5-0.672 1.5-1.5 0-0.004-0-0.007-0-0.011v-8.999c0-0.012 0.001-0.027 0.001-0.041 0-0.801-0.649-1.45-1.45-1.45-0.018 0-0.036 0-0.053 0.001zM13 11c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z"></path></g>
<g id="vaadin:warning"><path d="M8 1l-8 14h16l-8-14zM8 13c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM7 10v-4h2v4h-2z"></path></g>
<g id="vaadin:workplace"><path d="M11,3 L11,0 L2,0 L2,14 L0,14 L0,15 L7,15 L7,10 L9,10 L9,8 L14,8 L14,3 L11,3 Z M6,10 L4,10 L4,8 L6,8 L6,10 Z M6,7 L4,7 L4,5 L6,5 L6,7 Z M6,4 L4,4 L4,2 L6,2 L6,4 Z M9,7 L7,7 L7,5 L9,5 L9,7 Z M9,4 L7,4 L7,2 L9,2 L9,4 Z M13,7 L11,7 L11,5 L13,5 L13,7 Z M14,11 L16,11 L16,16 L8,16 L8,11 L10,11 L10,9 L14,9 L14,11 Z" fill-rule="nonzero"></path></g>
<g id="vaadin:wrench"><path d="M15.5 13.4l-7.8-7.8c0.2-0.5 0.3-1 0.3-1.6 0-2.2-1.8-4-4-4-0.6 0-1.1 0.1-1.6 0.3l2.9 2.9-2.1 2.1-2.9-2.9c-0.2 0.5-0.3 1-0.3 1.6 0 2.2 1.8 4 4 4 0.6 0 1.1-0.1 1.6-0.3l7.8 7.8c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1zM6.8 7.6l-1.4-1.4 0.9-0.9 1.4 1.4-0.9 0.9zM14.2 15c-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 0.5-0.3 0.8-0.8 0.8z"></path></g>
<g id="vaadin:youtube-square"><path d="M7.9 6c0.2 0 0.3-0.2 0.3-0.5v-1.4c0-0.3-0.1-0.5-0.3-0.5s-0.3 0.2-0.3 0.5v1.4c0 0.3 0.1 0.5 0.3 0.5z"></path><path d="M7.1 11.9c-0.1 0.2-0.3 0.3-0.4 0.3s-0.1 0-0.1-0.1c0 0 0-0.1 0-0.2v-2.5h-0.6v2.6c0 0.2 0 0.4 0.1 0.5 0.1 0.2 0.2 0.2 0.4 0.2s0.4-0.1 0.7-0.4v0.4h0.6v-3.3h-0.7v2.5z"></path><path d="M3.8 8.9h0.7v3.8h0.7v-3.8h0.7v-0.7h-2.1z"></path><path d="M9.4 9.3c-0.2 0-0.4 0.2-0.6 0.4v-1.5h-0.6v4.4h0.6v-0.3c0.2 0.2 0.4 0.4 0.6 0.4s0.4-0.1 0.5-0.4c0-0.1 0.1-0.4 0.1-0.7v-1.3c0-0.3 0-0.5-0.1-0.7-0.1-0.1-0.2-0.3-0.5-0.3zM9.4 11.7c0 0.3-0.1 0.4-0.3 0.4-0.1 0-0.2 0-0.3-0.1v-2c0.1-0.1 0.2-0.1 0.3-0.1 0.2 0 0.3 0.2 0.3 0.5v1.3z"></path><path d="M11.3 9.3c-0.3 0-0.5 0.1-0.7 0.3-0.1 0.2-0.2 0.4-0.2 0.8v1.2c0 0.4 0.1 0.6 0.2 0.8 0.2 0.2 0.4 0.3 0.7 0.3s0.6-0.1 0.7-0.4c0.1-0.1 0.1-0.2 0.1-0.4 0-0.1 0-0.2 0-0.4v-0.1h-0.6c0 0.2 0 0.4 0 0.4 0 0.2-0.1 0.2-0.3 0.2s-0.3-0.2-0.3-0.5v-0.6h1.2v-0.7c0-0.4-0.1-0.6-0.2-0.8 0 0.1-0.3-0.1-0.6-0.1zM11.6 10.6h-0.6v-0.3c0-0.3 0.1-0.5 0.3-0.5s0.3 0.2 0.3 0.5v0.3z"></path><path d="M0 0v16h16v-16h-16zM9.3 3.1h0.6v2.5c0 0.1 0 0.2 0 0.2 0 0.1 0 0.2 0.1 0.2s0.2-0.1 0.4-0.3v-2.6h0.6v3.3h-0.6v-0.3c-0.2 0.3-0.5 0.4-0.7 0.4s-0.3-0.1-0.4-0.2c0-0.1-0.1-0.3-0.1-0.5v-2.7zM7 4.2c0-0.3 0-0.6 0.2-0.8s0.4-0.3 0.7-0.3c0.3 0 0.5 0.1 0.7 0.3 0.1 0.2 0.2 0.4 0.2 0.8v1.2c0 0.4-0.1 0.6-0.2 0.8-0.2 0.2-0.4 0.3-0.7 0.3s-0.5-0.1-0.7-0.3c-0.2-0.2-0.2-0.4-0.2-0.8v-1.2zM5.3 2l0.5 1.8 0.5-1.8h0.7l-0.8 2.7v1.8h-0.7v-1.8c-0.1-0.4-0.2-0.8-0.4-1.5-0.2-0.4-0.3-0.8-0.5-1.2h0.7zM12.8 12.9c-0.1 0.5-0.6 0.9-1.1 1-1.2 0.1-2.5 0.1-3.7 0.1s-2.5 0-3.7-0.1c-0.5-0.1-1-0.4-1.1-1-0.2-0.8-0.2-1.6-0.2-2.4 0-0.7 0-1.5 0.2-2.3 0.1-0.5 0.6-0.9 1.1-1 1.2-0.1 2.5-0.1 3.7-0.1s2.5 0 3.7 0.1c0.5 0.1 1 0.4 1.1 1 0.2 0.8 0.2 1.6 0.2 2.3 0 0.8 0 1.6-0.2 2.4z"></path></g>
<g id="vaadin:youtube"><path d="M6.6 0h-0.9l-0.6 2.3-0.6-2.3h-1c0.2 0.6 0.4 1.1 0.6 1.7 0.3 0.8 0.5 1.5 0.5 1.9v2.4h0.9v-2.4l1.1-3.6zM9 4.5v-1.5c0-0.5-0.1-0.8-0.3-1.1s-0.5-0.4-0.9-0.4c-0.4 0-0.7 0.2-0.9 0.5-0.2 0.2-0.3 0.5-0.3 1v1.6c0 0.5 0.1 0.8 0.3 1 0.2 0.3 0.5 0.4 0.9 0.4s0.7-0.2 0.9-0.5c0.2-0.1 0.3-0.5 0.3-1zM8.2 4.7c0 0.4-0.1 0.6-0.4 0.6s-0.4-0.2-0.4-0.6v-1.9c0-0.4 0.1-0.6 0.4-0.6s0.4 0.2 0.4 0.6v1.9zM12 6v-4.5h-0.8v3.4c-0.2 0.3-0.3 0.4-0.5 0.4-0.1 0-0.2-0.1-0.2-0.2 0 0 0-0.1 0-0.3v-3.3h-0.8v3.5c0 0.3 0 0.5 0.1 0.7 0 0.2 0.2 0.3 0.5 0.3s0.6-0.2 0.9-0.5v0.5h0.8z"></path><path d="M12.4 10.5c-0.3 0-0.4 0.2-0.4 0.6v0.4h0.8v-0.4c0-0.4-0.1-0.6-0.4-0.6z"></path><path d="M9.5 10.5c-0.1 0-0.3 0.1-0.4 0.2v2.7c0.1 0.1 0.3 0.2 0.4 0.2 0.2 0 0.3-0.2 0.3-0.6v-1.9c0-0.4-0.1-0.6-0.3-0.6z"></path><path d="M14.4 8.3c-0.2-0.7-0.8-1.3-1.4-1.3-1.6-0.2-3.3-0.2-5-0.2s-3.3 0-5 0.2c-0.6 0-1.2 0.6-1.4 1.3-0.2 1-0.2 2.1-0.2 3.1s0 2.1 0.2 3.1c0.2 0.7 0.7 1.2 1.4 1.3 1.7 0.2 3.3 0.2 5 0.2s3.3 0 5-0.2c0.7-0.1 1.3-0.6 1.4-1.3 0.2-1 0.2-2.1 0.2-3.1s0-2.1-0.2-3.1zM5.2 9.2h-1v5.1h-0.9v-5.1h-0.9v-0.9h2.8v0.9zM7.6 14.3h-0.8v-0.5c-0.3 0.4-0.6 0.5-0.9 0.5s-0.4-0.1-0.5-0.3c0-0.1-0.1-0.3-0.1-0.7v-3.5h0.8v3.2c0 0.2 0 0.3 0 0.3 0 0.1 0.1 0.2 0.2 0.2 0.2 0 0.3-0.1 0.5-0.4v-3.3h0.8v4.5zM10.6 12.9c0 0.4 0 0.7-0.1 0.9-0.1 0.3-0.3 0.5-0.6 0.5s-0.6-0.2-0.8-0.5v0.4h-0.8v-5.9h0.8v1.9c0.3-0.3 0.5-0.5 0.8-0.5s0.5 0.2 0.6 0.5c0.1 0.2 0.1 0.5 0.1 0.9v1.8zM13.6 12.2h-1.6v0.8c0 0.4 0.1 0.6 0.4 0.6 0.2 0 0.3-0.1 0.4-0.3 0 0 0-0.2 0-0.5h0.8v0.1c0 0.3 0 0.4 0 0.5 0 0.2-0.1 0.3-0.2 0.5-0.2 0.3-0.5 0.5-1 0.5-0.4 0-0.7-0.2-1-0.5-0.2-0.2-0.3-0.6-0.3-1v-1.5c0-0.5 0.1-0.8 0.2-1 0.2-0.3 0.5-0.5 1-0.5 0.4 0 0.7 0.2 0.9 0.5 0.2 0.2 0.2 0.6 0.2 1v0.8z"></path></g>
</defs></svg>`;ho.register("vaadin",16,Pp);const Bi=({isActive:t})=>`block rounded-m p-s ${t?"bg-primary-10 text-primary":"text-body"}`;function x7(){var e;const t=((e=z7())==null?void 0:e.title)??"My App";return f0.jsxs(ef,{primarySection:"drawer",children:[f0.jsx("div",{slot:"drawer",className:"flex flex-col justify-between h-full p-m",children:f0.jsxs("header",{className:"flex flex-col gap-m",children:[f0.jsx("h1",{className:"text-l m-0 ",children:"Student System"}),f0.jsxs("nav",{children:[f0.jsx(ji,{className:Bi,to:"/students",children:"Students"}),f0.jsx(ji,{className:Bi,to:"/delete",children:"Delete Students"}),f0.jsx(ji,{className:Bi,to:"/updatestudent",children:"Update Students"})]})]})}),f0.jsx($f,{slot:"navbar","aria-label":"Menu toggle"}),f0.jsx("h2",{slot:"navbar",className:"text-l m-0",children:t}),f0.jsx(A.Suspense,{fallback:f0.jsx(Bf,{}),children:f0.jsx(a7,{})})]})}const X2=A.lazy(async()=>rh(()=>import("./StudentView-d1839ab9.js"),["./StudentView-d1839ab9.js","./ComboBox-a9fe7566.js","./Button-5674e289.js","./useSimpleRenderer-be413ac6.js"],import.meta.url)),S7=A.lazy(async()=>rh(()=>import("./Deletestudent-66d06256.js"),["./Deletestudent-66d06256.js","./Button-5674e289.js","./useSimpleRenderer-be413ac6.js"],import.meta.url)),b7=A.lazy(async()=>rh(()=>import("./updatestudent-093c7189.js"),["./updatestudent-093c7189.js","./Button-5674e289.js","./ComboBox-a9fe7566.js"],import.meta.url)),E7=[{element:f0.jsx(x7,{}),handle:{title:"Main"},children:[{path:"/",element:f0.jsx(X2,{}),handle:{title:"Students"}},{path:"/Students",element:f0.jsx(X2,{}),handle:{title:"Students"}},{path:"/updatestudent",element:f0.jsx(b7,{}),handle:{title:"Students"}},{path:"/delete",element:f0.jsx(S7,{}),handle:{title:"Students"}}]}],C7=d7(E7);function k7(){return f0.jsx(e7,{router:C7})}cu(document.getElementById("outlet")).render(A.createElement(k7));(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),a=new WeakMap,n=typeof DOMException=="object"?Error:DOMException,r=Object.defineProperty,i=Array.prototype.forEach,l=/@import.+?;?$/gm;function o(E){var T=E.replace(l,"");return T!==E&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),T.trim()}function h(E){return"isConnected"in E?E.isConnected:document.contains(E)}function s(E){return E.filter(function(T,H){return E.indexOf(T)===H})}function c(E,T){return E.filter(function(H){return T.indexOf(H)===-1})}function d(E){E.parentNode.removeChild(E)}function p(E){return E.shadowRoot||a.get(E)}var g=["addRule","deleteRule","insertRule","removeRule"],z=CSSStyleSheet,M=z.prototype;M.replace=function(){return Promise.reject(new n("Can't call replace on non-constructed CSSStyleSheets."))},M.replaceSync=function(){throw new n("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function m(E){return typeof E=="object"?b0.isPrototypeOf(E)||M.isPrototypeOf(E):!1}function v(E){return typeof E=="object"?M.isPrototypeOf(E):!1}var u=new WeakMap,f=new WeakMap,y=new WeakMap,x=new WeakMap;function k(E,T){var H=document.createElement("style");return y.get(E).set(T,H),f.get(E).push(T),H}function C(E,T){return y.get(E).get(T)}function P(E,T){y.get(E).delete(T),f.set(E,f.get(E).filter(function(H){return H!==T}))}function q(E,T){requestAnimationFrame(function(){T.textContent=u.get(E).textContent,x.get(E).forEach(function(H){return T.sheet[H.method].apply(T.sheet,H.args)})})}function F(E){if(!u.has(E))throw new TypeError("Illegal invocation")}function c0(){var E=this,T=document.createElement("style");e.body.appendChild(T),u.set(E,T),f.set(E,[]),y.set(E,new WeakMap),x.set(E,[])}var b0=c0.prototype;b0.replace=function(T){try{return this.replaceSync(T),Promise.resolve(this)}catch(H){return Promise.reject(H)}},b0.replaceSync=function(T){if(F(this),typeof T=="string"){var H=this;u.get(H).textContent=o(T),x.set(H,[]),f.get(H).forEach(function(d0){d0.isConnected()&&q(H,C(H,d0))})}},r(b0,"cssRules",{configurable:!0,enumerable:!0,get:function(){return F(this),u.get(this).sheet.cssRules}}),r(b0,"media",{configurable:!0,enumerable:!0,get:function(){return F(this),u.get(this).sheet.media}}),g.forEach(function(E){b0[E]=function(){var T=this;F(T);var H=arguments;x.get(T).push({method:E,args:H}),f.get(T).forEach(function(C0){if(C0.isConnected()){var u0=C(T,C0).sheet;u0[E].apply(u0,H)}});var d0=u.get(T).sheet;return d0[E].apply(d0,H)}}),r(c0,Symbol.hasInstance,{configurable:!0,value:m});var $0={childList:!0,subtree:!0},G0=new WeakMap;function E0(E){var T=G0.get(E);return T||(T=new z0(E),G0.set(E,T)),T}function _t(E){r(E.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return E0(this).sheets},set:function(T){E0(this).update(T)}})}function Ot(E,T){for(var H=document.createNodeIterator(E,NodeFilter.SHOW_ELEMENT,function(C0){return p(C0)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),d0=void 0;d0=H.nextNode();)T(p(d0))}var N=new WeakMap,$=new WeakMap,R=new WeakMap;function X(E,T){return T instanceof HTMLStyleElement&&$.get(E).some(function(H){return C(H,E)})}function r0(E){var T=N.get(E);return T instanceof Document?T.body:T}function xt(E){var T=document.createDocumentFragment(),H=$.get(E),d0=R.get(E),C0=r0(E);d0.disconnect(),H.forEach(function(u0){T.appendChild(C(u0,E)||k(u0,E))}),C0.insertBefore(T,null),d0.observe(C0,$0),H.forEach(function(u0){q(u0,C(u0,E))})}function z0(E){var T=this;T.sheets=[],N.set(T,E),$.set(T,[]),R.set(T,new MutationObserver(function(H,d0){if(!document){d0.disconnect();return}H.forEach(function(C0){t||i.call(C0.addedNodes,function(u0){u0 instanceof Element&&Ot(u0,function(St){E0(St).connect()})}),i.call(C0.removedNodes,function(u0){u0 instanceof Element&&(X(T,u0)&&xt(T),t||Ot(u0,function(St){E0(St).disconnect()}))})})}))}if(z0.prototype={isConnected:function(){var E=N.get(this);return E instanceof Document?E.readyState!=="loading":h(E.host)},connect:function(){var E=r0(this);R.get(this).observe(E,$0),$.get(this).length>0&&xt(this),Ot(E,function(T){E0(T).connect()})},disconnect:function(){R.get(this).disconnect()},update:function(E){var T=this,H=N.get(T)===document?"Document":"ShadowRoot";if(!Array.isArray(E))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+H+": Iterator getter is not callable.");if(!E.every(m))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+H+": Failed to convert value to 'CSSStyleSheet'");if(E.some(v))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+H+": Can't adopt non-constructed stylesheets");T.sheets=E;var d0=$.get(T),C0=s(E),u0=c(d0,C0);u0.forEach(function(St){d(C(St,T)),P(St,T)}),$.set(T,C0),T.isConnected()&&C0.length>0&&xt(T)}},window.CSSStyleSheet=c0,_t(Document),"ShadowRoot"in window){_t(ShadowRoot);var Xt=Element.prototype,ct=Xt.attachShadow;Xt.attachShadow=function(T){var H=ct.call(this,T);return T.mode==="closed"&&a.set(this,H),H}}var nt=E0(document);nt.isConnected()?nt.connect():document.addEventListener("DOMContentLoaded",nt.connect.bind(nt))})();const{toString:P7}=Object.prototype;function A7(t){return P7.call(t)==="[object RegExp]"}function T7(t,{preserve:e=!0,whitespace:a=!0,all:n}={}){if(n)throw new Error("The `all` option is no longer supported. Use the `preserve` option instead.");let r=e,i;typeof e=="function"?(r=!1,i=e):A7(e)&&(r=!1,i=c=>e.test(c));let l=!1,o="",h="",s="";for(let c=0;c<t.length;c++){if(o=t[c],t[c-1]!=="\\"&&(o==='"'||o==="'")&&(l===o?l=!1:l||(l=o)),!l&&o==="/"&&t[c+1]==="*"){const d=t[c+2]==="!";let p=c+2;for(;p<t.length;p++){if(t[p]==="*"&&t[p+1]==="/"){r&&d||i&&i(h)?s+=`/*${h}*/`:a||(t[p+2]===`
`?p++:t[p+2]+t[p+3]===`\r
`&&(p+=2)),h="";break}h+=t[p]}c=p+1;continue}s+=o}return s}const N7=CSSStyleSheet.toString().includes("document.createElement"),O7=(t,e)=>{const a=/(?:@media\s(.+?))?(?:\s{)?\@import\s*(?:url\(\s*['"]?(.+?)['"]?\s*\)|(["'])((?:\\.|[^\\])*?)\3)([^;]*);(?:})?/g;/\/\*(.|[\r\n])*?\*\//gm.exec(t)!=null&&(t=T7(t));for(var n,r=t;(n=a.exec(t))!==null;){r=r.replace(n[0],"");const i=document.createElement("link");i.rel="stylesheet",i.href=n[2]||n[4];const l=n[1]||n[5];l&&(i.media=l),e===document?document.head.appendChild(i):e.appendChild(i)}return r},R7=(t,e,a)=>(a?e.adoptedStyleSheets=[t,...e.adoptedStyleSheets]:e.adoptedStyleSheets=[...e.adoptedStyleSheets,t],()=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter(n=>n!==t)}),L7=(t,e,a)=>{const n=new CSSStyleSheet;return n.replaceSync(t),N7?R7(n,e,a):(a?e.adoptedStyleSheets.splice(0,0,n):e.adoptedStyleSheets.push(n),()=>{e.adoptedStyleSheets.splice(e.adoptedStyleSheets.indexOf(n),1)})},D7=(t,e)=>{const a=document.createElement("style");a.type="text/css",a.textContent=t;let n;if(e){const i=Array.from(document.head.childNodes).filter(l=>l.nodeType===Node.COMMENT_NODE).find(l=>l.data.trim()===e);i&&(n=i)}return document.head.insertBefore(a,n),()=>{a.remove()}},Qe=(t,e,a,n)=>{if(a===document){const i=$7(t);if(window.Vaadin.theme.injectedGlobalCss.indexOf(i)!==-1)return;window.Vaadin.theme.injectedGlobalCss.push(i)}const r=O7(t,a);return a===document?D7(r,e):L7(r,a,n)};window.Vaadin=window.Vaadin||{};window.Vaadin.theme=window.Vaadin.theme||{};window.Vaadin.theme.injectedGlobalCss=[];function J2(t){let e,a,n=2166136261;for(e=0,a=t.length;e<a;e++)n^=t.charCodeAt(e),n+=(n<<1)+(n<<4)+(n<<7)+(n<<8)+(n<<24);return("0000000"+(n>>>0).toString(16)).substr(-8)}function $7(t){let e=J2(t);return e+J2(e+t)}document["_vaadintheme_hilla-start_componentCss"]||(document["_vaadintheme_hilla-start_componentCss"]=!0);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const I7=Z`
  ${pu(ch.cssText.replace(/,\s*:host/su,""))}
`;Tt("typography",I7,!1);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Tt("color",sh);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ch=Z`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    flex-shrink: 0;
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='warning'] {
    color: var(--lumo-warning-text-color);
    background-color: var(--lumo-warning-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning'][theme~='primary'] {
    color: var(--lumo-warning-contrast-color);
    background-color: var(--lumo-warning-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] vaadin-icon {
    margin: -0.25em 0;
  }

  [theme~='badge'] vaadin-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] vaadin-icon:last-child {
    margin-right: -0.375em;
  }

  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning']:not([icon]):empty {
    background-color: var(--lumo-warning-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;wt("",Ch,{moduleId:"lumo-badge"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Tt("badge",Ch);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const F7=Z`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const U7=Z`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast {
    background-color: var(--lumo-contrast);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }

  .bg-warning {
    background-color: var(--lumo-warning-color);
  }
  .bg-warning-10 {
    background-color: var(--lumo-warning-color-10pct);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const j7=Z`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border {
    border: 1px solid;
  }
  .border-b {
    border-bottom: 1px solid;
  }
  .border-l {
    border-left: 1px solid;
  }
  .border-r {
    border-right: 1px solid;
  }
  .border-t {
    border-top: 1px solid;
  }

  /* === Border color === */
  .border-contrast-5 {
    border-color: var(--lumo-contrast-5pct);
  }
  .border-contrast-10 {
    border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-20 {
    border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-30 {
    border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-40 {
    border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-50 {
    border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-60 {
    border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-70 {
    border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-80 {
    border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-90 {
    border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast {
    border-color: var(--lumo-contrast);
  }

  .border-primary {
    border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    border-color: var(--lumo-success-color-10pct);
  }

  .border-warning {
    border-color: var(--lumo-warning-color);
  }
  .border-warning-10 {
    border-color: var(--lumo-warning-color-10pct);
  }
  .border-warning-strong {
    border-color: var(--lumo-warning-text-color);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const B7=Z`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-auto {
    flex: auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow-0 {
    flex-grow: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }

  /* === Flex shrink === */
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .flex-shrink {
    flex-shrink: 1;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const H7=Z`
  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }
  .grid {
    display: grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex {
      display: flex;
    }
    .sm\\:hidden {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .md\\:flex {
      display: flex;
    }
    .md\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex {
      display: flex;
    }
    .lg\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex {
      display: flex;
    }
    .xl\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\:hidden {
      display: none;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const V7=Z`
  /* === Box shadows === */
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const W7=Z`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Y7=Z`
  /* === Margin === */
  .m-auto {
    margin: auto;
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }

  /* === Margin (bottom) === */
  .mb-auto {
    margin-bottom: auto;
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }

  /* === Margin (end) === */
  .me-auto {
    margin-inline-end: auto;
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }

  /* === Margin (horizontal) === */
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .mx-0 {
    margin-left: 0;
    margin-right: 0;
  }
  .mx-xs {
    margin-left: var(--lumo-space-xs);
    margin-right: var(--lumo-space-xs);
  }
  .mx-s {
    margin-left: var(--lumo-space-s);
    margin-right: var(--lumo-space-s);
  }
  .mx-m {
    margin-left: var(--lumo-space-m);
    margin-right: var(--lumo-space-m);
  }
  .mx-l {
    margin-left: var(--lumo-space-l);
    margin-right: var(--lumo-space-l);
  }
  .mx-xl {
    margin-left: var(--lumo-space-xl);
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (left) === */
  .ml-auto {
    margin-left: auto;
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }

  /* === Margin (right) === */
  .mr-auto {
    margin-right: auto;
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (start) === */
  .ms-auto {
    margin-inline-start: auto;
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }

  /* === Margin (top) === */
  .mt-auto {
    margin-top: auto;
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }

  /* === Margin (vertical) === */
  .my-auto {
    margin-bottom: auto;
    margin-top: auto;
  }
  .my-0 {
    margin-bottom: 0;
    margin-top: 0;
  }
  .my-xs {
    margin-bottom: var(--lumo-space-xs);
    margin-top: var(--lumo-space-xs);
  }
  .my-s {
    margin-bottom: var(--lumo-space-s);
    margin-top: var(--lumo-space-s);
  }
  .my-m {
    margin-bottom: var(--lumo-space-m);
    margin-top: var(--lumo-space-m);
  }
  .my-l {
    margin-bottom: var(--lumo-space-l);
    margin-top: var(--lumo-space-l);
  }
  .my-xl {
    margin-bottom: var(--lumo-space-xl);
    margin-top: var(--lumo-space-xl);
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const K7=Z`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }
  .text-warning {
    color: var(--lumo-warning-text-color);
  }
  .text-warning-contrast {
    color: var(--lumo-warning-contrast-color);
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kh=Z`
${F7}
${U7}
${j7}
${V7}
${B7}
${H7}
${W7}
${Y7}
${K7}
`;wt("",kh,{moduleId:"lumo-utility"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Tt("utility",kh);const G7=Z``,Q7=t=>{const e=[];t!==document&&(e.push(Qe(ch.cssText,"",t,!0)),e.push(Qe(sh.cssText,"",t,!0)),e.push(Qe(xu.cssText,"",t,!0)),e.push(Qe(Ch.cssText,"",t,!0)),e.push(Qe(kh.cssText,"",t,!0)),e.push(Qe(G7.toString(),"",t)))},q7=Q7;q7(document);export{y7 as $,kv as A,Tt as B,ep as C,zr as D,jr as E,ma as F,Of as G,Cv as H,dp as I,T6 as J,Nf as K,V6 as L,vm as M,Y6 as N,sm as O,Ur as P,E6 as Q,w1 as R,cf as S,hh as T,R6 as U,t5 as V,zm as W,Tf as X,lp as Y,ip as Z,iv as _,Mm as a,w7 as a0,M7 as a1,Ue as a2,Fn as a3,tm as a4,X7 as a5,Fp as a6,to as a7,ym as b,pm as c,q6 as d,E2 as e,hm as f,C6 as g,Nt as h,Z as i,cm as j,Rf as k,Fr as l,W6 as m,om as n,jv as o,lm as p,rm as q,wt as r,of as s,um as t,df as u,im as v,gh as w,A as x,f0 as y,sf as z};
