import{r as O,i as I,a as pe,b as ge,D as m,c as me,d as $e,P as S,e as Le,f as Me,t as $,F as le,m as U,g as Ne,h as Qe,j as te,E as oe,T as se,C as be,k as Je,l as N,n as Xe,o as Ce,p as et,q as Ae,s as tt,u as Ge,v as it,w as q,R as K,x as D,y as f,z as rt,A as ot,B as st,G as nt,S as at}from"./indexhtml-d5fffb38.js";import{V as lt,u as ve,o as dt,P as ht,O as ct,a as ut,C as _t,F as ft}from"./ComboBox-a9fe7566.js";import{p as ke,O as pt,f as ye,u as gt,a as T,k as Z,T as Q,B as mt,s as bt,S as vt}from"./Button-5674e289.js";import{u as de}from"./useSimpleRenderer-be413ac6.js";O("vaadin-grid",I`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--lumo-base-color);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: default;
      padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='last-row'][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content) {
      font-weight: 400;
    }

    [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    [part~='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part~='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='even-row'] [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='even-row'] [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
    }

    :host([theme~='compact']) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function L(a){return a.__cells||Array.from(a.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'))}function b(a,r){[...a.children].forEach(r)}function M(a,r){L(a).forEach(r),a.__detailsCell&&r(a.__detailsCell)}function Ct(a,r,e){let t=1;a.forEach(i=>{t%10===0&&(t+=1),i._order=e+t*r,t+=1})}function ne(a,r,e){switch(typeof e){case"boolean":a.toggleAttribute(r,e);break;case"string":a.setAttribute(r,e);break;default:a.removeAttribute(r);break}}function E(a,r,e){r||r===""?pe(a,"part",e):ge(a,"part",e)}function w(a,r,e){a.forEach(t=>{E(t,e,r)})}function Y(a,r){const e=L(a);Object.entries(r).forEach(([t,i])=>{ne(a,t,i);const o=`${t}-row`;E(a,i,o),w(e,`${o}-cell`,i)})}function xe(a,r){const e=L(a);Object.entries(r).forEach(([t,i])=>{const o=a.getAttribute(t);if(ne(a,t,i),o){const s=`${t}-${o}-row`;E(a,!1,s),w(e,`${s}-cell`,!1)}if(i){const s=`${t}-${i}-row`;E(a,i,s),w(e,`${s}-cell`,i)}})}function F(a,r,e,t,i){ne(a,r,e),i&&E(a,!1,i),E(a,e,t||`${r}-cell`)}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const At=a=>class extends a{static get properties(){return{resizable:{type:Boolean,value(){if(this.localName==="vaadin-grid-column-group")return;const e=this.parentNode;return e&&e.localName==="vaadin-grid-column-group"&&e.resizable||!1}},frozen:{type:Boolean,value:!1},frozenToEnd:{type:Boolean,value:!1},hidden:{type:Boolean,value:!1},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_bodyContentHidden:{type:Boolean,value:!1},_firstFrozenToEnd:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:Function,_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)"},footerRenderer:Function,_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)"},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, _cells.*, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this._grid&&this._allCells.forEach(e=>{e._content.parentNode||this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}ready(){super.ready(),ke(this)}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/u.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(t=>{t.style.flexGrow=e})}_orderChanged(e){this._allCells.forEach(t=>{t.style.order=e})}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(t=>{t.style.width=e})}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(t=>{F(t,"frozen",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",e),this._allCells.forEach(t=>{this._grid&&t.parentElement===this._grid.$.sizer||F(t,"frozen-to-end",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(t=>{F(t,"last-frozen",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_firstFrozenToEndChanged(e){this._allCells.forEach(t=>{this._grid&&t.parentElement===this._grid.$.sizer||F(t,"first-frozen-to-end",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=e)}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,t=>t.toUpperCase())}_reorderStatusChanged(e){const t=this.__previousReorderStatus,i=t?`reorder-${t}-cell`:"",o=`reorder-${e}-cell`;this._allCells.forEach(s=>{F(s,"reorder-status",e,o,i)}),this.__previousReorderStatus=e}_resizableChanged(e,t){e===void 0||t===void 0||t&&[t].concat(this._emptyCells).forEach(i=>{if(i){const o=i.querySelector('[part~="resize-handle"]');if(o&&i.removeChild(o),e){const s=document.createElement("div");s.setAttribute("part","resize-handle"),i.appendChild(s)}}})}_textAlignChanged(e){if(e===void 0)return;if(["start","end","center"].indexOf(e)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let t;getComputedStyle(this._grid).direction==="ltr"?e==="start"?t="left":e==="end"&&(t="right"):e==="start"?t="right":e==="end"&&(t="left"),this._allCells.forEach(i=>{i._content.style.textAlign=e,getComputedStyle(i._content).textAlign!==e&&(i._content.style.textAlign=t)})}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(e===!0&&this._allCells.forEach(t=>{t._content.parentNode&&t._content.parentNode.removeChild(t._content)}),this._grid._debouncerHiddenChanged=m.debounce(this._grid._debouncerHiddenChanged,me,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,t,i){const o=[t._content,this];i&&i.item&&o.push(i),e.apply(this,o)}__renderCellsContent(e,t){this.hidden||!this._grid||t.forEach(i=>{if(!i.parentElement)return;const o=this._grid.__getRowModel(i.parentElement);e&&(i._renderer!==e&&this._clearCellContent(i),i._renderer=e,(o.item||e===this._headerRenderer||e===this._footerRenderer)&&this._runRenderer(e,i,o))})}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,t){!t||!e||(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onHeaderRendererOrBindingChanged(e,t,...i){this._renderHeaderCellContent(e,t)}_renderBodyCellsContent(e,t){!t||!e||this.__renderCellsContent(e,t)}_onRendererOrBindingChanged(e,t,...i){this._renderBodyCellsContent(e,t)}_renderFooterCellContent(e,t){!t||!e||(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onFooterRendererOrBindingChanged(e,t){this._renderFooterCellContent(e,t)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,t,{item:i}){this.path&&this.__setTextContent(e,this.get(this.path,i))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,t){return e||(t!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}};class ie extends At($e(S)){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)"},path:{type:String},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:Array}}}customElements.define(ie.is,ie);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-grid",I`
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: flex;
      flex-direction: column;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    #scroller {
      display: flex;
      flex-direction: column;
      min-height: 100%;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([all-rows-visible]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([all-rows-visible]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    :host([all-rows-visible]) #items {
      min-height: 1px;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~='row'] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      visibility: hidden;
    }

    [column-rendering='lazy'] [part~='body-cell']:not([frozen]):not([frozen-to-end]) {
      transform: translateX(var(--_grid-lazy-columns-start));
    }

    #items [part~='row'] {
      position: absolute;
    }

    #items [part~='row']:empty {
      height: 100%;
    }

    [part~='cell']:not([part~='details-cell']) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~='cell'] > [tabindex] {
      display: flex;
      align-items: inherit;
      outline: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    [part~='details-cell'] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen],
    [frozen-to-end] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~='resize-handle'],
    #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~='reorder-ghost'] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Resizing styles */
    [part~='resize-handle'] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~='resize-handle']::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~='resize-handle']::before,
    [last-frozen] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    [frozen-to-end] [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    [frozen-to-end] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    [first-frozen-to-end] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
    }

    [first-frozen-to-end] {
      margin-inline-start: auto;
    }

    /* Hide resize handle if scrolled to end */
    :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
      display: none;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~='details-cell'] {
      display: none !important;
    }

    #sizer [part~='cell'][hidden] {
      display: none !important;
    }

    #sizer [part~='cell'] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~='cell']::before {
      content: '-';
    }

    #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir='rtl']) #items,
    :host([dir='rtl']) #header,
    :host([dir='rtl']) #footer {
      left: auto;
    }

    :host([dir='rtl']) [part~='reorder-ghost'] {
      left: auto;
      right: 0;
    }

    :host([dir='rtl']) [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [part~='resize-handle']::before {
      transform: translateX(50%);
    }

    :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
    :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
      right: 0;
      left: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
      right: 0;
      left: auto;
    }

    @media (forced-colors: active) {
      [part~='selected-row'] [part~='first-column-cell']::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        border: 2px solid;
      }

      [part~='focused-cell']::before {
        outline: 2px solid !important;
        outline-offset: -1px;
      }
    }
  `,{moduleId:"vaadin-grid-styles"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yt=a=>class extends a{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(e){return e.filter(t=>t.some(i=>i.headerRenderer||i.path||i.header)).length}_a11yGetFooterRowCount(e){return e.filter(t=>t.some(i=>i.headerRenderer)).length}_a11yUpdateGridSize(e,t){if(e===void 0||t===void 0)return;const i=t[t.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(t)+this._a11yGetFooterRowCount(t)),this.$.table.setAttribute("aria-colcount",i&&i.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){b(this.$.header,(e,t)=>{e.setAttribute("aria-rowindex",t+1)})}_a11yUpdateFooterRows(){b(this.$.footer,(e,t)=>{e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+t+1)})}_a11yUpdateRowRowindex(e,t){e.setAttribute("aria-rowindex",t+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",!!t),M(e,i=>{i.setAttribute("aria-selected",!!t)})}_a11yUpdateRowExpanded(e){this.__isRowExpandable(e)?e.setAttribute("aria-expanded","false"):this.__isRowCollapsible(e)?e.setAttribute("aria-expanded","true"):e.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(e,t){t>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",t+1):e.removeAttribute("aria-level")}_a11ySetRowDetailsCell(e,t){M(e,i=>{i!==t&&i.setAttribute("aria-controls",t.id)})}_a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let t=e.parentNode;for(;t&&t.localName!=="vaadin-grid-cell-content";)t=t.parentNode;t&&t.assignedSlot&&t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xt=a=>{if(!a.parentNode)return!1;const e=Array.from(a.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, a[href], area[href]")).filter(t=>{const i=t.getAttribute("part");return!(i&&i.includes("body-cell"))}).includes(a);return!a.disabled&&e&&a.offsetParent&&getComputedStyle(a).visibility!=="hidden"},wt=a=>class extends a{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){const t=e.detail.model,i=t?t.item:null;i&&(this.activeItem=this._itemsEqual(this.activeItem,i)?null:i)}_onClick(e){if(e.defaultPrevented)return;const t=e.composedPath(),i=t[t.indexOf(this.$.table)-3];if(!i||i.getAttribute("part").indexOf("details-cell")>-1)return;const o=i._content,s=this.getRootNode().activeElement;!o.contains(s)&&!this._isFocusable(e.target)&&!(e.target instanceof HTMLLabelElement)&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(i.parentElement)}}))}_isFocusable(e){return xt(e)}};function P(a,r){return a.split(".").reduce((e,t)=>e[t],r)}function we(a,r,e){if(e.length===0)return!1;let t=!0;return a.forEach(({path:i})=>{if(!i||i.indexOf(".")===-1)return;const o=i.replace(/\.[^.]*$/u,"");P(o,e[0])===void 0&&(console.warn(`Path "${i}" used for ${r} does not exist in all of the items, ${r} is disabled.`),t=!1)}),t}function re(a){return[void 0,null].indexOf(a)>=0?"":isNaN(a)?a.toString():a}function Ee(a,r){return a=re(a),r=re(r),a<r?-1:a>r?1:0}function Et(a,r){return a.sort((e,t)=>r.map(i=>i.direction==="asc"?Ee(P(i.path,e),P(i.path,t)):i.direction==="desc"?Ee(P(i.path,t),P(i.path,e)):0).reduce((i,o)=>i!==0?i:o,0))}function It(a,r){return a.filter(e=>r.every(t=>{const i=re(P(t.path,e)),o=re(t.value).toString().toLowerCase();return i.toString().toLowerCase().includes(o)}))}const St=a=>(r,e)=>{let t=a?[...a]:[];r.filters&&we(r.filters,"filtering",t)&&(t=It(t,r.filters)),Array.isArray(r.sortOrders)&&r.sortOrders.length&&we(r.sortOrders,"sorting",t)&&(t=Et(t,r.sortOrders));const i=Math.min(t.length,r.pageSize),o=r.page*i,s=o+i,n=t.slice(o,s);e(n,t.length)};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rt=a=>class extends a{static get properties(){return{items:Array}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*, _filters, _sorters)"]}__setArrayDataProvider(e){const t=St(this.items);t.__items=e,this.setProperties({_arrayDataProvider:t,size:e.length,dataProvider:t})}__dataProviderOrItemsChanged(e,t,i){i&&(this._arrayDataProvider?e!==this._arrayDataProvider?this.setProperties({_arrayDataProvider:void 0,items:void 0}):t?this._arrayDataProvider.__items===t?(this.clearCache(),this.size=this._effectiveSize):this.__setArrayDataProvider(t):(this.setProperties({_arrayDataProvider:void 0,dataProvider:void 0,size:0}),this.clearCache()):t&&this.__setArrayDataProvider(t))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zt=a=>class extends a{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),Le(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&(e.preventDefault(),Me||this._onTrackEnd())}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if(e.detail.state==="start"){const t=e.composedPath(),i=t[t.indexOf(this.$.header)-2];if(!i||!i._content||i._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else e.detail.state==="track"?this._onTrack(e):e.detail.state==="end"&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const t=e.composedPath&&e.composedPath();if(t&&t.some(o=>o.hasAttribute&&o.hasAttribute("draggable")))return;const i=this._cellFromPoint(e.detail.x,e.detail.y);if(!(!i||!i.getAttribute("part").includes("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=i._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(i),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const t=this._cellFromPoint(e.detail.x,e.detail.y);if(!t)return;const i=this._getTargetColumn(t,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,i)&&this._isSwappableByPosition(i,e.detail.x)){const o=this._columnTree.findIndex(d=>d.includes(i)),s=this._getColumnsInOrder(o),n=s.indexOf(this._draggedColumn),l=s.indexOf(i),c=n<l?1:-1;for(let d=n;d!==l;d+=c)this._swapColumnOrders(this._draggedColumn,s[d+c])}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(e=this._columnTree.length-1){return this._columnTree[e].filter(t=>!t.hidden).sort((t,i)=>t._order-i._order)}_cellFromPoint(e=0,t=0){this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const i=this.shadowRoot.elementFromPoint(e,t);if(this.$.scroller.toggleAttribute("no-content-pointer-events",!1),i&&i._column)return i}_updateGhostPosition(e,t){const i=this._reorderGhost.getBoundingClientRect(),o=e-i.width/2,s=t-i.height/2,n=parseInt(this._reorderGhost._left||0),l=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=n-(i.left-o),this._reorderGhost._top=l-(i.top-s),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const t=this._reorderGhost;t.textContent=e._content.innerText;const i=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(o=>{t.style[o]=i[o]}),t}_updateOrders(e){e!==void 0&&(e[0].forEach(t=>{t._order=0}),Ct(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,t){b(e.parentNode,i=>{/column/u.test(i.localName)&&this._isSwapAllowed(i,e)&&(i._reorderStatus=t)})}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(e,t){if(e&&t){const i=e!==t,o=e.parentElement===t.parentElement,s=e.frozen&&t.frozen||e.frozenToEnd&&t.frozenToEnd||!e.frozen&&!e.frozenToEnd&&!t.frozen&&!t.frozenToEnd;return i&&o&&s}}_isSwappableByPosition(e,t){const i=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(n=>e.contains(n._column)),o=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),s=i.getBoundingClientRect();return s.left>o.left?t>s.right-o.width:t<s.left+o.width}_swapColumnOrders(e,t){[e._order,t._order]=[t._order,e._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(e,t){if(e&&t){let i=e._column;for(;i.parentElement!==t.parentElement&&i!==this;)i=i.parentElement;return i.parentElement===t.parentElement?i:e._column}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tt=a=>class extends a{ready(){super.ready();const e=this.$.scroller;Le(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",t=>e.hasAttribute("column-resizing")&&t.preventDefault()),e.addEventListener("contextmenu",t=>t.target.getAttribute("part")==="resize-handle"&&t.preventDefault()),e.addEventListener("mousedown",t=>t.target.getAttribute("part")==="resize-handle"&&t.preventDefault())}_onHeaderTrack(e){const t=e.target;if(t.getAttribute("part")==="resize-handle"){let o=t.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);o.localName==="vaadin-grid-column-group";)o=o._childColumns.slice(0).sort((h,u)=>h._order-u._order).filter(h=>!h.hidden).pop();const s=this.__isRTL,n=e.detail.x,l=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),c=l.find(h=>h._column===o);if(c.offsetWidth){const h=getComputedStyle(c._content),u=10+parseInt(h.paddingLeft)+parseInt(h.paddingRight)+parseInt(h.borderLeftWidth)+parseInt(h.borderRightWidth)+parseInt(h.marginLeft)+parseInt(h.marginRight);let p;const v=c.offsetWidth,A=c.getBoundingClientRect();c.hasAttribute("frozen-to-end")?p=v+(s?n-A.right:A.left-n):p=v+(s?A.left-n:n-A.right),o.width=`${Math.max(u,p)}px`,o.flexGrow=0}l.sort((h,u)=>h._column._order-u._column._order).forEach((h,u,p)=>{u<p.indexOf(c)&&(h._column.width=`${h.offsetWidth}px`,h._column.flexGrow=0)});const d=this._frozenToEndCells[0];if(d&&this.$.table.scrollWidth>this.$.table.offsetWidth){const h=d.getBoundingClientRect(),u=n-(s?h.right:h.left);(s&&u<=0||!s&&u>=0)&&(this.$.table.scrollLeft+=u)}e.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:o}}))),this._resizeHandler()}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ie=class He{constructor(r,e,t){this.grid=r,this.parentCache=e,this.parentItem=t,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return!!(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(r=>this.itemCaches[r].isLoading())[0])}getItemForIndex(r){const{cache:e,scaledIndex:t}=this.getCacheAndIndex(r);return e.items[t]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((r,e)=>{const t=this.itemCaches[e];return t.updateSize(),r+t.effectiveSize},0):0}ensureSubCacheForScaledIndex(r){if(!this.itemCaches[r]){const e=new He(this.grid,this,this.items[r]);this.itemCaches[r]=e,this.grid._loadPage(0,e)}}getCacheAndIndex(r){let e=r;for(const[t,i]of Object.entries(this.itemCaches)){const o=Number(t);if(e<=o)return{cache:this,scaledIndex:e};if(e<=o+i.effectiveSize)return i.getCacheAndIndex(e-o-1);e-=i.effectiveSize}return{cache:this,scaledIndex:e}}getFlatIndex(r){const e=Math.max(0,Math.min(this.size-1,r));return Object.entries(this.itemCaches).reduce((t,[i,o])=>e>Number(i)?t+o.effectiveSize:t,e)}},Ft=a=>class extends a{static get properties(){return{size:{type:Number,notify:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value(){return new Ie(this)}},_hasData:{type:Boolean,value:!1},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged"},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems.*)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(e){const t=e-this._cache.size;this._cache.size+=t,this._cache.effectiveSize+=t,this._effectiveSize=this._cache.effectiveSize}__itemHasChildrenPathChanged(e,t){!t&&e==="children"||this.requestContentUpdate()}_getItem(e,t){if(e>=this._effectiveSize)return;t.index=e;const{cache:i,scaledIndex:o}=this._cache.getCacheAndIndex(e),s=i.items[o];s?(this.__updateLoading(t,!1),this._updateItem(t,s),this._isExpanded(s)&&i.ensureSubCacheForScaledIndex(o)):(this.__updateLoading(t,!0),this._loadPage(this._getPageForIndex(o),i))}__updateLoading(e,t){const i=L(e);ne(e,"loading",t),w(i,"loading-row-cell",t)}getItemId(e){return this.itemIdPath?this.get(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this.__updateVisibleRows()}__computeExpandedKeys(e,t){const i=t.base||[],o=new Set;return i.forEach(s=>{o.add(this.getItemId(s))}),o}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter(t=>!this._itemsEqual(t,e)))}_getIndexLevel(e){let{cache:t}=this._cache.getCacheAndIndex(e),i=0;for(;t.parentCache;)t=t.parentCache,i+=1;return i}_loadPage(e,t){if(!t.pendingRequests[e]&&this.dataProvider){this._setLoading(!0),t.pendingRequests[e]=!0;const i={page:e,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:t.parentItem};this.dataProvider(i,(o,s)=>{s!==void 0?t.size=s:i.parentItem&&(t.size=o.length),o.forEach((n,l)=>{const c=e*this.pageSize+l;t.items[c]=n}),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this._getVisibleRows().forEach(n=>{const{cache:l,scaledIndex:c}=this._cache.getCacheAndIndex(n.index),d=l.items[c];d&&this._isExpanded(d)&&l.ensureSubCacheForScaledIndex(c)}),this._hasData=!0,delete t.pendingRequests[e],this._debouncerApplyCachedData=m.debounce(this._debouncerApplyCachedData,$.after(0),()=>{this._setLoading(!1),this._getVisibleRows().forEach(n=>{this._cache.getItemForIndex(n.index)&&this._getItem(n.index,n)}),this.__scrollToPendingIndexes()}),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this._onDataProviderPageLoaded()})}}_onDataProviderPageLoaded(){}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){this._cache=new Ie(this),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this.__updateVisibleRows(),this._effectiveSize||this._loadPage(0,this._cache)}_pageSizeChanged(e,t){t!==void 0&&e!==t&&this.clearCache()}_checkSize(){this.size===void 0&&this._effectiveSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(e,t){t!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=m.debounce(this._debouncerCheckSize,$.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){let i=-1;return t.forEach((o,s)=>{this._itemsEqual(o,e)&&(i=s)}),i}scrollToIndex(...e){let t;for(;t!==(t=this.__getGlobalFlatIndex(e));)this._scrollToFlatIndex(t);(this._cache.isLoading()||!this.clientHeight)&&(this.__pendingScrollToIndexes=e)}__getGlobalFlatIndex([e,...t],i=this._cache,o=0){e===1/0&&(e=i.size-1);const s=i.getFlatIndex(e),n=i.itemCaches[e];return n&&n.effectiveSize&&t.length?this.__getGlobalFlatIndex(t,n,o+s+1):o+s}__scrollToPendingIndexes(){if(this.__pendingScrollToIndexes&&this.$.items.children.length){const e=this.__pendingScrollToIndexes;delete this.__pendingScrollToIndexes,this.scrollToIndex(...e)}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const k={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},x={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},Dt=!("draggable"in document.createElement("div")),Ot=a=>class extends a{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}_onDragStart(e){if(this.rowsDraggable){let t=e.target;if(t.localName==="vaadin-grid-cell-content"&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const n=t.style.transform;t.style.top=/translateY\((.*)\)/u.exec(n)[1],t.style.transform="none",requestAnimationFrame(()=>{t.style.top="",t.style.transform=n})}const i=t.getBoundingClientRect();Dt?e.dataTransfer.setDragImage(t):e.dataTransfer.setDragImage(t,e.clientX-i.left,e.clientY-i.top);let o=[t];this._isSelected(t._item)&&(o=this.__getViewportRows().filter(n=>this._isSelected(n._item)).filter(n=>!this.dragFilter||this.dragFilter(this.__getRowModel(n)))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(o)),Y(t,{dragstart:o.length>1?`${o.length}`:""}),this.style.setProperty("--_grid-drag-start-x",`${e.clientX-i.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${e.clientY-i.top+10}px`),requestAnimationFrame(()=>{Y(t,{dragstart:!1}),this.style.setProperty("--_grid-drag-start-x",""),this.style.setProperty("--_grid-drag-start-y","")});const s=new CustomEvent("grid-dragstart",{detail:{draggedItems:o.map(n=>n._item),setDragData:(n,l)=>e.dataTransfer.setData(n,l),setDraggedItemsCount:n=>t.setAttribute("dragstart",n)}});s.originalEvent=e,this.dispatchEvent(s)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();const t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let t=e.composedPath().find(i=>i.localName==="tr");if(!this._effectiveSize||this.dropMode===k.ON_GRID)this._dropLocation=x.EMPTY;else if(!t||t.parentNode!==this.$.items){if(t)return;if(this.dropMode===k.BETWEEN||this.dropMode===k.ON_TOP_OR_BETWEEN)t=Array.from(this.$.items.children).filter(i=>!i.hidden).pop(),this._dropLocation=x.BELOW;else return}else{const i=t.getBoundingClientRect();if(this._dropLocation=x.ON_TOP,this.dropMode===k.BETWEEN){const o=e.clientY-i.top<i.bottom-e.clientY;this._dropLocation=o?x.ABOVE:x.BELOW}else this.dropMode===k.ON_TOP_OR_BETWEEN&&(e.clientY-i.top<i.height/3?this._dropLocation=x.ABOVE:e.clientY-i.top>i.height/3*2&&(this._dropLocation=x.BELOW))}if(t&&t.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation(),e.preventDefault(),this._dropLocation===x.EMPTY?this.toggleAttribute("dragover",!0):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&xe(t,{dragover:this._dropLocation})):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const t=this.$.header.getBoundingClientRect().bottom,i=this.$.footer.getBoundingClientRect().top,o=t-e+this.__dndAutoScrollThreshold,s=e-i+this.__dndAutoScrollThreshold;let n=0;if(s>0?n=s*2:o>0&&(n=-o*2),n){const l=this.$.table.scrollTop;if(this.$.table.scrollTop+=n,l!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(i=>{const o=i.getBoundingClientRect();return o.bottom>e&&o.top<t})}_clearDragStyles(){this.removeAttribute("dragover"),b(this.$.items,e=>{xe(e,{dragover:null})})}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(o=>({type:o,data:e.dataTransfer.getData(o)}));this._clearDragStyles();const i=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});i.originalEvent=e,this.dispatchEvent(i)}}__formatDefaultTransferData(e){return e.map(t=>Array.from(t.children).filter(i=>!i.hidden&&i.getAttribute("part").indexOf("details-cell")===-1).sort((i,o)=>i._column._order>o._column._order?1:-1).map(i=>i._content.textContent.trim()).filter(i=>i).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){b(this.$.items,e=>{e.hidden||this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,t){const i=this.loading||e.hasAttribute("loading"),o=!this.rowsDraggable||i||this.dragFilter&&!this.dragFilter(t),s=!this.dropMode||i||this.dropFilter&&!this.dropFilter(t);M(e,n=>{o?n._content.removeAttribute("draggable"):n._content.setAttribute("draggable",!0)}),Y(e,{"drag-disabled":!!o,"drop-disabled":!!s})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ve(a,r){if(!a||!r||a.length!==r.length)return!1;for(let e=0,t=a.length;e<t;e++)if(a[e]instanceof Array&&r[e]instanceof Array){if(!Ve(a[e],r[e]))return!1}else if(a[e]!==r[e])return!1;return!0}const Pt=a=>class extends a{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){return e.some(t=>t.localName==="vaadin-grid-column-group")}_getChildColumns(e){return le.getFlattenedNodes(e).filter(this._isColumnElement)}_flattenColumnGroups(e){return e.map(t=>t.localName==="vaadin-grid-column-group"?this._getChildColumns(t):[t]).reduce((t,i)=>t.concat(i),[])}_getColumnTree(){const e=le.getFlattenedNodes(this).filter(this._isColumnElement),t=[e];let i=e;for(;this._hasColumnGroups(i);)i=this._flattenColumnGroups(i),t.push(i);return t}_debounceUpdateColumnTree(){this.__updateColumnTreeDebouncer=m.debounce(this.__updateColumnTreeDebouncer,U,()=>this._updateColumnTree())}_updateColumnTree(){const e=this._getColumnTree();Ve(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new le(this,e=>{const t=i=>i.filter(this._isColumnElement).length>0;if(t(e.addedNodes)||t(e.removedNodes)){const i=e.removedNodes.flatMap(s=>s._allCells),o=s=>i.filter(n=>n&&n._content.contains(s)).length;this.__removeSorters(this._sorters.filter(o)),this.__removeFilters(this._filters.filter(o)),this._debounceUpdateColumnTree()}this._debouncerCheckImports=m.debounce(this._debouncerCheckImports,$.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{const t=this.querySelector(e);t&&!(t instanceof S)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((t,i)=>t._column._order-i._column._order).forEach((t,i,o)=>{F(t,"first-column",i===0),F(t,"last-column",i===o.length-1)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bt=a=>class extends a{getEventContext(e){const t={},i=e.__composedPath||e.composedPath(),o=i[i.indexOf(this.$.table)-3];return o&&(t.section=["body","header","footer","details"].find(s=>o.getAttribute("part").indexOf(s)>-1),o._column&&(t.column=o._column),(t.section==="body"||t.section==="details")&&Object.assign(t,this.__getRowModel(o.parentElement))),t}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $t=a=>class extends a{static get properties(){return{_filters:{type:Array,value:()=>[]}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){e.length!==0&&(this._filters=this._filters.filter(t=>e.indexOf(t)<0),this.__applyFilters())}__addFilter(e){this._filters.indexOf(e)===-1&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lt=a=>class extends a{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged"},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(t=>{const i=this[t];if(e){const o=i&&i.parentElement;this.__isCell(i)?this[t]=o:this.__isCell(o)&&(this[t]=o.parentElement)}else if(!e&&this.__isRow(i)){const o=i.firstElementChild;this[t]=o._focusButton||o}})}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_focusedCellChanged(e,t){t&&ge(t,"part","focused-cell"),e&&pe(e,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const e=this.shadowRoot.activeElement===this._itemsFocusable;this._getVisibleRows().forEach(t=>{if(t.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=t;else{let i=this._itemsFocusable.parentElement,o=this._itemsFocusable;if(i){this.__isCell(i)&&(o=i,i=i.parentElement);const s=[...i.children].indexOf(o);this._itemsFocusable=this.__getFocusable(t,t.children[s])}}}),e&&this._itemsFocusable.focus()}_onKeyDown(e){const t=e.key;let i;switch(t){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":i="Navigation";break;case"Enter":case"Escape":case"F2":i="Interaction";break;case"Tab":i="Tab";break;case" ":i="Space";break}this._detectInteracting(e),this.interacting&&i!=="Interaction"&&(i=void 0),i&&this[`_on${i}KeyDown`](e,t)}_ensureScrolledToIndex(e){[...this.$.items.children].find(i=>i.index===e)?this.__scrollIntoViewport(e):this.scrollToIndex(e)}__isRowExpandable(e){if(this.itemHasChildrenPath){const t=e._item;return t&&this.get(this.itemHasChildrenPath,t)&&!this._isExpanded(t)}}__isRowCollapsible(e){return this._isExpanded(e._item)}__isDetailsCell(e){return e.matches('[part~="details-cell"]')}__isCell(e){return e instanceof HTMLTableCellElement}__isRow(e){return e instanceof HTMLTableRowElement}__getIndexOfChildElement(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}_onNavigationKeyDown(e,t){e.preventDefault();const i=this._lastVisibleIndex-this._firstVisibleIndex-1,o=this.__isRTL;let s=0,n=0;switch(t){case"ArrowRight":s=o?-1:1;break;case"ArrowLeft":s=o?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?n=-1/0:s=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?n=1/0:s=1/0;break;case"ArrowDown":n=1;break;case"ArrowUp":n=-1;break;case"PageDown":n=i;break;case"PageUp":n=-i;break}const l=e.composedPath().find(u=>this.__isRow(u)),c=e.composedPath().find(u=>this.__isCell(u));if(this.__rowFocusMode&&!l||!this.__rowFocusMode&&!c)return;const d=o?"ArrowLeft":"ArrowRight",h=o?"ArrowRight":"ArrowLeft";if(t===d){if(this.__rowFocusMode){if(this.__isRowExpandable(l)){this.expandItem(l._item);return}this.__rowFocusMode=!1,this._onCellNavigation(l.firstElementChild,0,0);return}}else if(t===h)if(this.__rowFocusMode){if(this.__isRowCollapsible(l)){this.collapseItem(l._item);return}}else{const u=[...l.children].sort((p,v)=>p._order-v._order);if(c===u[0]||this.__isDetailsCell(c)){this.__rowFocusMode=!0,this._onRowNavigation(l,0);return}}this.__rowFocusMode?this._onRowNavigation(l,n):this._onCellNavigation(c,s,n)}_onRowNavigation(e,t){const{dstRow:i}=this.__navigateRows(t,e);i&&i.focus()}__getIndexInGroup(e,t){return e.parentNode===this.$.items?t!==void 0?t:e.index:this.__getIndexOfChildElement(e)}__navigateRows(e,t,i){const o=this.__getIndexInGroup(t,this._focusedItemIndex),s=t.parentNode,n=(s===this.$.items?this._effectiveSize:s.children.length)-1;let l=Math.max(0,Math.min(o+e,n));if(s!==this.$.items){if(l>o)for(;l<n&&s.children[l].hidden;)l+=1;else if(l<o)for(;l>0&&s.children[l].hidden;)l-=1;return this.toggleAttribute("navigating",!0),{dstRow:s.children[l]}}let c=!1;if(i){const d=this.__isDetailsCell(i);if(s===this.$.items){const h=t._item,u=this._cache.getItemForIndex(l);d?c=e===0:c=e===1&&this._isDetailsOpened(h)||e===-1&&l!==o&&this._isDetailsOpened(u),c!==d&&(e===1&&c||e===-1&&!c)&&(l=o)}}return this._ensureScrolledToIndex(l),this._focusedItemIndex=l,this.toggleAttribute("navigating",!0),{dstRow:[...s.children].find(d=>!d.hidden&&d.index===l),dstIsRowDetails:c}}_onCellNavigation(e,t,i){const o=e.parentNode,{dstRow:s,dstIsRowDetails:n}=this.__navigateRows(i,o,e);if(!s)return;let l=this.__getIndexOfChildElement(e);this.$.items.contains(e)&&(l=[...this.$.sizer.children].findIndex(u=>u._column===e._column));const c=this.__isDetailsCell(e),d=o.parentNode,h=this.__getIndexInGroup(o,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(c?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(d,h).filter(u=>!u.hidden)[l]._order),n)[...s.children].find(p=>this.__isDetailsCell(p)).focus();else{const u=this.__getIndexInGroup(s,this._focusedItemIndex),p=this._getColumns(d,u).filter(g=>!g.hidden),v=p.map(g=>g._order).sort((g,z)=>g-z),A=v.length-1,R=v.indexOf(v.slice(0).sort((g,z)=>Math.abs(g-this._focusedColumnOrder)-Math.abs(z-this._focusedColumnOrder))[0]),G=i===0&&c?R:Math.max(0,Math.min(R+t,A));G!==R&&(this._focusedColumnOrder=void 0);const y=p.reduce((g,z,Ze)=>(g[z._order]=Ze,g),{})[v[G]];let C;if(this.$.items.contains(e)){const g=this.$.sizer.children[y];this._lazyColumns&&(this.__isColumnInViewport(g._column)||g.scrollIntoView(),this.__updateColumnsBodyContentHidden(),this.__updateHorizontalScrollPosition()),C=[...s.children].find(z=>z._column===g._column),this._scrollHorizontallyToCell(C)}else C=s.children[y],this._scrollHorizontallyToCell(C);C.focus()}}_onInteractionKeyDown(e,t){const i=e.composedPath()[0],o=i.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(i.type);let s;switch(t){case"Enter":s=this.interacting?!o:!0;break;case"Escape":s=!1;break;case"F2":s=!this.interacting;break}const{cell:n}=this._getGridEventLocation(e);if(this.interacting!==s&&n!==null)if(s){const l=n._content.querySelector("[focus-target]")||[...n._content.querySelectorAll("*")].find(c=>this._isFocusable(c));l&&(e.preventDefault(),l.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,n.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);t==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(e,t){const i=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let o=i.indexOf(e);for(o+=t;o>=0&&o<=i.length-1;){let n=i[o];if(n&&!this.__rowFocusMode&&(n=i[o].parentNode),!n||n.hidden)o+=t;else break}let s=i[o];if(s&&s._column&&!this.__isColumnInViewport(s._column)){const n=this._getColumnsInOrder().find(l=>this.__isColumnInViewport(l));if(n)if(s===this._headerFocusable)s=n._headerCell;else if(s===this._itemsFocusable){const l=s._column._cells.indexOf(s);s=n._cells[l]}else s===this._footerFocusable&&(s=n._footerCell)}return s}_onTabKeyDown(e){const t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(t){if(e.stopPropagation(),t===this.$.table)this.$.table.focus();else if(t===this.$.focusexit)this.$.focusexit.focus();else if(t===this._itemsFocusable){let i=t;const o=this.__isRow(t)?t:t.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),o.index!==this._focusedItemIndex&&this.__isCell(t)){const s=Array.from(o.children).indexOf(this._itemsFocusable),n=Array.from(this.$.items.children).find(l=>!l.hidden&&l.index===this._focusedItemIndex);n&&(i=n.children[s])}e.preventDefault(),i.focus()}else e.preventDefault(),t.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(e){e.preventDefault();const t=e.composedPath()[0],i=this.__isRow(t);(i||!t._content||!t._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(i?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(i?t:t.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/u.test(e.key)||this.interacting)return;e.preventDefault();const t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){const i=this.hasAttribute("navigating");t._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:e.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",i)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);const t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(e){const{section:t,cell:i,row:o}=this._getGridEventLocation(e);if(!(!i&&!this.__rowFocusMode)){if(this._detectInteracting(e),t&&(i||o))if(this._activeRowGroup=t,this.$.header===t?this._headerFocusable=this.__getFocusable(o,i):this.$.items===t?this._itemsFocusable=this.__getFocusable(o,i):this.$.footer===t&&(this._footerFocusable=this.__getFocusable(o,i)),i){const s=this.getEventContext(e);i.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:s}})),this._focusedCell=i._focusButton||i,Ne()&&e.target===i&&this._showTooltip(e)}else this._focusedCell=null;this._detectFocusedItemIndex(e)}}__getFocusable(e,t){return this.__rowFocusMode?e:t._focusButton||t}_detectInteracting(e){const t=e.composedPath().some(i=>i.localName==="vaadin-grid-cell-content");this._setInteracting(t),this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(e){const{section:t,row:i}=this._getGridEventLocation(e);t===this.$.items&&(this._focusedItemIndex=i.index)}_updateGridSectionFocusTarget(e){if(!e)return;const t=this._getGridSectionFromFocusTarget(e),i=this.interacting&&t===this._activeRowGroup;e.tabIndex=i?-1:0}_preventScrollerRotatingCellFocus(e,t){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),t===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(e,t){let i=this._columnTree.length-1;return e===this.$.header?i=t:e===this.$.footer&&(i=this._columnTree.length-1-t),this._columnTree[i]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(["header","footer"].forEach(e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){const t=[...this.$[e].children].find(o=>o.offsetHeight),i=t?[...t.children].find(o=>!o.hidden):null;t&&i&&(this[`_${e}Focusable`]=this.__getFocusable(t,i))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const e=this.__getFirstVisibleItem(),t=e?[...e.children].find(i=>!i.hidden):null;t&&e&&(delete this._focusedColumnOrder,this._itemsFocusable=this.__getFocusable(e,t))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end")||this.__isDetailsCell(e))return;const t=e.getBoundingClientRect(),i=e.parentNode,o=Array.from(i.children).indexOf(e),s=this.$.table.getBoundingClientRect();let n=s.left,l=s.right;for(let c=o-1;c>=0;c--){const d=i.children[c];if(!(d.hasAttribute("hidden")||this.__isDetailsCell(d))&&(d.hasAttribute("frozen")||d.hasAttribute("frozen-to-end"))){n=d.getBoundingClientRect().right;break}}for(let c=o+1;c<i.children.length;c++){const d=i.children[c];if(!(d.hasAttribute("hidden")||this.__isDetailsCell(d))&&(d.hasAttribute("frozen")||d.hasAttribute("frozen-to-end"))){l=d.getBoundingClientRect().left;break}}t.left<n&&(this.$.table.scrollLeft+=Math.round(t.left-n)),t.right>l&&(this.$.table.scrollLeft+=Math.round(t.right-l))}_getGridEventLocation(e){const t=e.composedPath(),i=t.indexOf(this.$.table),o=i>=1?t[i-1]:null,s=i>=2?t[i-2]:null,n=i>=3?t[i-3]:null;return{section:o,row:s,cell:n}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mt=a=>class extends a{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[]},rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(e=>{e.forEach(({target:t})=>{this._updateDetailsCellHeight(t.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(e){e&&this._columnTree&&b(this.$.items,t=>{if(!t.querySelector("[part~=details-cell]")){this._updateRow(t,this._columnTree[this._columnTree.length-1]);const i=this._isDetailsOpened(t._item);this._toggleDetailsCell(t,i)}})}_detailsOpenedItemsChanged(e,t){e.path==="detailsOpenedItems.length"||!e.value||b(this.$.items,i=>{if(i.hasAttribute("details-opened")){this._updateItem(i,i._item);return}t&&this._isDetailsOpened(i._item)&&this._updateItem(i,i._item)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,t){const i=e.querySelector('[part~="details-cell"]');i&&(i.hidden=!t,!i.hidden&&this.rowDetailsRenderer&&(i._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){const t=e.querySelector('[part~="details-cell"]');t&&(t.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${t.offsetHeight}px`))}_updateDetailsCellHeights(){b(this.$.items,e=>{this._updateDetailsCellHeight(e)})}_isDetailsOpened(e){return this.detailsOpenedItems&&this._getItemIndexInArray(e,this.detailsOpenedItems)!==-1}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(t=>!this._itemsEqual(t,e)))}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ae=document.createElement("div");ae.style.position="fixed";ae.style.clip="rect(0px, 0px, 0px, 0px)";ae.setAttribute("aria-live","polite");document.body.appendChild(ae);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Se(a,r){const{scrollLeft:e}=a;return r!=="rtl"?e:a.scrollWidth-a.clientWidth+e}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const J=new ResizeObserver(a=>{setTimeout(()=>{a.forEach(r=>{r.target.resizables?r.target.resizables.forEach(e=>{e._onResize(r.contentRect)}):r.target._onResize(r.contentRect)})})}),Nt=Qe(a=>class extends a{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),J.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,J.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),J.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const t=e.resizables;t&&(t.delete(this),t.size===0&&J.unobserve(e)),this.__parent=null}}_onResize(e){}});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Re={SCROLLING:500,UPDATE_CONTENT_VISIBILITY:100},Gt=a=>class extends Nt(a){static get properties(){return{columnRendering:{type:String,value:"eager"},_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}static get observers(){return["__columnRenderingChanged(_columnTree, columnRendering)"]}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}get _lazyColumns(){return this.columnRendering==="lazy"}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",e=>{const t=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[t-1]}),this.$.items.addEventListener("focusout",()=>{this._rowWithFocusedElement=void 0}),this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){if(this._updateOverflow(),this.__updateHorizontalScrollPosition(),this._firefox){const e=!te(this);e&&this.__previousVisible===!1&&(this._scrollTop=this.__memorizedScrollTop||0),this.__previousVisible=e}}_scrollToFlatIndex(e){e=Math.min(this._effectiveSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e),this.__scrollIntoViewport(e)}__scrollIntoViewport(e){const t=[...this.$.items.children].find(i=>i.index===e);if(t){const i=t.getBoundingClientRect(),o=this.$.footer.getBoundingClientRect().top,s=this.$.header.getBoundingClientRect().bottom;i.bottom>o?this.$.table.scrollTop+=i.bottom-o:i.top<s&&(this.$.table.scrollTop-=s-i.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=m.debounce(this._debounceScrolling,$.after(Re.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow(),this._debounceColumnContentVisibility=m.debounce(this._debounceColumnContentVisibility,$.after(Re.UPDATE_CONTENT_VISIBILITY),()=>{this._lazyColumns&&this.__cachedScrollLeft!==this._scrollLeft&&(this.__cachedScrollLeft=this._scrollLeft,this.__updateColumnsBodyContentHidden())}),this._firefox&&!te(this)&&this.__previousVisible!==!1&&(this.__memorizedScrollTop=this._scrollTop)}__updateColumnsBodyContentHidden(){if(!this._columnTree)return;const e=this._getColumnsInOrder();if(!e[0]||!e[0]._sizerCell)return;let t=!1;if(e.forEach(i=>{const o=this._lazyColumns&&!this.__isColumnInViewport(i);i._bodyContentHidden!==o&&(t=!0,i._cells.forEach(s=>{if(s!==i._sizerCell){if(o)s.remove();else if(s.__parentRow){const n=[...s.__parentRow.children].find(l=>e.indexOf(l._column)>e.indexOf(i));s.__parentRow.insertBefore(s,n)}}})),i._bodyContentHidden=o}),t&&this._frozenCellsChanged(),this._lazyColumns){const i=[...e].reverse().find(n=>n.frozen),o=this.__getColumnEnd(i),s=e.find(n=>!n.frozen&&!n._bodyContentHidden);this.__lazyColumnsStart=this.__getColumnStart(s)-o,this.$.items.style.setProperty("--_grid-lazy-columns-start",`${this.__lazyColumnsStart}px`),this._resetKeyboardNavigation()}}__getColumnEnd(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?0:e._sizerCell.offsetWidth):this.__isRTL?this.$.table.clientWidth:0}__getColumnStart(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?e._sizerCell.offsetWidth:0):this.__isRTL?this.$.table.clientWidth:0}__isColumnInViewport(e){return e.frozen||e.frozenToEnd?!0:e._sizerCell.offsetLeft+e._sizerCell.offsetWidth>=this._scrollLeft&&e._sizerCell.offsetLeft<=this._scrollLeft+this.clientWidth}__columnRenderingChanged(e,t){t==="eager"?this.$.scroller.removeAttribute("column-rendering"):this.$.scroller.setAttribute("column-rendering",t),this.__updateColumnsBodyContentHidden()}_updateOverflow(){this._debounceOverflow=m.debounce(this._debounceOverflow,me,()=>{this.__doUpdateOverflow()})}__doUpdateOverflow(){let e="";const t=this.$.table;t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom"),t.scrollTop>0&&(e+=" top");const i=Se(t,this.getAttribute("dir"));i>0&&(e+=" start"),i<t.scrollWidth-t.clientWidth&&(e+=" end"),this.__isRTL&&(e=e.replace(/start|end/giu,s=>s==="start"?"end":"start")),t.scrollLeft<t.scrollWidth-t.clientWidth&&(e+=" right"),t.scrollLeft>0&&(e+=" left");const o=e.trim();o.length>0&&this.getAttribute("overflow")!==o?this.setAttribute("overflow",o):o.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}_frozenCellsChanged(){this._debouncerCacheElements=m.debounce(this._debouncerCacheElements,U,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(e=>{e.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=m.debounce(this.__debounceUpdateFrozenColumn,U,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((o,s)=>o._order-s._order);let t,i;for(let o=0;o<e.length;o++){const s=e[o];s._lastFrozen=!1,s._firstFrozenToEnd=!1,i===void 0&&s.frozenToEnd&&!s.hidden&&(i=o),s.frozen&&!s.hidden&&(t=o)}t!==void 0&&(e[t]._lastFrozen=!0),i!==void 0&&(e[i]._firstFrozenToEnd=!0),this.__updateColumnsBodyContentHidden()}__updateHorizontalScrollPosition(){if(!this._columnTree)return;const e=this.$.table.scrollWidth,t=this.$.table.clientWidth,i=Math.max(0,this.$.table.scrollLeft),o=Se(this.$.table,this.getAttribute("dir")),s=`translate(${-i}px, 0)`;this.$.header.style.transform=s,this.$.footer.style.transform=s,this.$.items.style.transform=s;const n=this.__isRTL?o+t-e:i,l=`translate(${n}px, 0)`;this._frozenCells.forEach(u=>{u.style.transform=l});const c=this.__isRTL?o:i+t-e,d=`translate(${c}px, 0)`;let h=d;if(this._lazyColumns){const u=this._getColumnsInOrder(),p=[...u].reverse().find(_=>!_.frozenToEnd&&!_._bodyContentHidden),v=this.__getColumnEnd(p),A=u.find(_=>_.frozenToEnd),R=this.__getColumnStart(A);h=`translate(${c+(R-v)+this.__lazyColumnsStart}px, 0)`}this._frozenToEndCells.forEach(u=>{this.$.items.contains(u)?u.style.transform=h:u.style.transform=d}),this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-n}px`)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kt=a=>class extends a{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems.*)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems.*)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter(t=>!this._itemsEqual(t,e)))}_toggleItem(e){this._isSelected(e)?this.deselectItem(e):this.selectItem(e)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(e,t){const i=t.base||[],o=new Set;return i.forEach(s=>{o.add(this.getItemId(s))}),o}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let ze="prepend";const Ht=a=>class extends a{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>ze},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(e){ze=["append","prepend"].includes(e)?e:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const t=e.target;e.stopPropagation(),t._grid=this,this.__updateSorter(t,e.detail.shiftClick,e.detail.fromSorterClick),this.__applySorters()}__removeSorters(e){e.length!==0&&(this._sorters=this._sorters.filter(t=>e.indexOf(t)<0),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((e,t)=>{e._order=this._sorters.length>1?t:null})}__appendSorter(e){e.direction?this._sorters.includes(e)||this._sorters.push(e):this._removeArrayItem(this._sorters,e),this.__updateSortOrders()}__prependSorter(e){this._removeArrayItem(this._sorters,e),e.direction&&this._sorters.unshift(e),this.__updateSortOrders()}__updateSorter(e,t,i){if(!(!e.direction&&this._sorters.indexOf(e)===-1)){if(e._order=null,this.multiSort&&(!this.multiSortOnShiftClick||!i)||this.multiSortOnShiftClick&&t)this.multiSortPriority==="append"?this.__appendSorter(e):this.__prependSorter(e);else if(e.direction||this.multiSortOnShiftClick){const o=this._sorters.filter(s=>s!==e);this._sorters=e.direction?[e]:[],o.forEach(s=>{s._order=null,s.direction=null})}}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(e=>({path:e.path,direction:e.direction}))}_removeArrayItem(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vt=a=>class extends a{static get properties(){return{cellClassNameGenerator:Function,cellPartNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)","__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellClassNames(){b(this.$.items,e=>{!e.hidden&&!e.hasAttribute("loading")&&this._generateCellClassNames(e,this.__getRowModel(e))})}generateCellPartNames(){b(this.$.items,e=>{!e.hidden&&!e.hasAttribute("loading")&&this._generateCellPartNames(e,this.__getRowModel(e))})}_generateCellClassNames(e,t){M(e,i=>{if(i.__generatedClasses&&i.__generatedClasses.forEach(o=>i.classList.remove(o)),this.cellClassNameGenerator){const o=this.cellClassNameGenerator(i._column,t);i.__generatedClasses=o&&o.split(" ").filter(s=>s.length>0),i.__generatedClasses&&i.__generatedClasses.forEach(s=>i.classList.add(s))}})}_generateCellPartNames(e,t){M(e,i=>{if(i.__generatedParts&&i.__generatedParts.forEach(o=>{E(i,null,o)}),this.cellPartNameGenerator){const o=this.cellPartNameGenerator(i._column,t);i.__generatedParts=o&&o.split(" ").filter(s=>s.length>0),i.__generatedParts&&i.__generatedParts.forEach(s=>{E(i,!0,s)})}})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let he=class extends oe(se(Ft(Rt(Pt(wt(Gt(kt(Ht(Mt(Lt(yt($t(zt(Tt(be(Bt(Ot(Vt(Je(S)))))))))))))))))))){static get template(){return N`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)","_effectiveSizeChanged(_effectiveSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:Xe},_ios:{type:Boolean,value:Ce},_firefox:{type:Boolean,value:et},_android:{type:Boolean,value:Ae},_touchDevice:{type:Boolean,value:Me},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},__pendingRecalculateColumnWidths:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}get _firstVisibleIndex(){const r=this.__getFirstVisibleItem();return r?r.index:void 0}get _lastVisibleIndex(){const r=this.__getLastVisibleItem();return r?r.index:void 0}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getVisibleRows().find(r=>this._isInViewport(r))}__getLastVisibleItem(){return this._getVisibleRows().reverse().find(r=>this._isInViewport(r))}_isInViewport(r){const e=this.$.table.getBoundingClientRect(),t=r.getBoundingClientRect(),i=this.$.header.getBoundingClientRect().height,o=this.$.footer.getBoundingClientRect().height;return t.bottom>e.top+i&&t.top<e.bottom-o}_getVisibleRows(){return Array.from(this.$.items.children).filter(r=>!r.hidden).sort((r,e)=>r.index-e.index)}_getRowContainingNode(r){const e=tt("vaadin-grid-cell-content",r);return e?e.assignedSlot.parentElement.parentElement:void 0}_isItemAssignedToRow(r,e){const t=this.__getRowModel(e);return this.getItemId(r)===this.getItemId(t.item)}ready(){super.ready(),this.__virtualizer=new lt({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>{this.__updateFooterPositioning(),this.__updateColumnsBodyContentHidden(),this.__tryToRecalculateColumnWidthsIfPending()})).observe(this.$.table),ke(this),this._tooltipController=new Ge(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0)}__getBodyCellCoordinates(r){if(this.$.items.contains(r)&&r.localName==="td")return{item:r.parentElement._item,column:r._column}}__focusBodyCell({item:r,column:e}){const t=this._getVisibleRows().find(o=>o._item===r),i=t&&[...t.children].find(o=>o._column===e);i&&i.focus()}_focusFirstVisibleRow(){const r=this.__getFirstVisibleItem();this.__rowFocusMode=!0,r.focus()}_effectiveSizeChanged(r,e,t,i){if(e&&t&&i){const o=this.shadowRoot.activeElement,s=this.__getBodyCellCoordinates(o),n=e.size||0;e.size=r,e.update(n-1,n-1),r<n&&e.update(r-1,r-1),s&&o.parentElement.hidden&&this.__focusBodyCell(s),this._resetKeyboardNavigation()}}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(r=>r.clientHeight).length}__getIntrinsicWidth(r){return this.__intrinsicWidthCache.has(r)||this.__calculateAndCacheIntrinsicWidths([r]),this.__intrinsicWidthCache.get(r)}__getDistributedWidth(r,e){if(r==null||r===this)return 0;const t=Math.max(this.__getIntrinsicWidth(r),this.__getDistributedWidth(r.parentElement,r));if(!e)return t;const i=r,o=t,s=i._visibleChildColumns.map(d=>this.__getIntrinsicWidth(d)).reduce((d,h)=>d+h,0),n=Math.max(0,o-s),c=this.__getIntrinsicWidth(e)/s*n;return this.__getIntrinsicWidth(e)+c}_recalculateColumnWidths(r){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(i=>{i.__debounceUpdateHeaderFooterRowVisibility&&i.__debounceUpdateHeaderFooterRowVisibility.flush()}),this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush(),this.__intrinsicWidthCache=new Map;const e=this._firstVisibleIndex,t=this._lastVisibleIndex;this.__viewportRowsCache=this._getVisibleRows().filter(i=>i.index>=e&&i.index<=t),this.__calculateAndCacheIntrinsicWidths(r),r.forEach(i=>{i.width=`${this.__getDistributedWidth(i)}px`})}__setVisibleCellContentAutoWidth(r,e){r._allCells.filter(t=>this.$.items.contains(t)?this.__viewportRowsCache.includes(t.parentElement):!0).forEach(t=>{t.__measuringAutoWidth=e,t._content.style.width=e?"auto":"",t._content.style.position=e?"absolute":""})}__getAutoWidthCellsMaxWidth(r){return r._allCells.reduce((e,t)=>t.__measuringAutoWidth?Math.max(e,t._content.offsetWidth+1):e,0)}__calculateAndCacheIntrinsicWidths(r){r.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!0)),r.forEach(e=>{const t=this.__getAutoWidthCellsMaxWidth(e);this.__intrinsicWidthCache.set(e,t)}),r.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!1))}recalculateColumnWidths(){if(!this._columnTree)return;if(te(this)||this._cache.isLoading()){this.__pendingRecalculateColumnWidths=!0;return}const r=this._getColumns().filter(e=>!e.hidden&&e.autoWidth);this._recalculateColumnWidths(r)}__tryToRecalculateColumnWidthsIfPending(){this.__pendingRecalculateColumnWidths&&!te(this)&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this.__pendingRecalculateColumnWidths=!1,this.recalculateColumnWidths())}_onDataProviderPageLoaded(){super._onDataProviderPageLoaded(),this.__tryToRecalculateColumnWidthsIfPending()}_createScrollerRows(r){const e=[];for(let t=0;t<r;t++){const i=document.createElement("tr");i.setAttribute("part","row"),i.setAttribute("role","row"),i.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(i,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(i)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(t=>t.isConnected&&t.notifyPath&&t.notifyPath("_cells.*",t._cells)),this.__afterCreateScrollerRowsDebouncer=m.debounce(this.__afterCreateScrollerRowsDebouncer,me,()=>{this._afterScroll(),this.__tryToRecalculateColumnWidthsIfPending()}),e}_createCell(r,e){const i=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,o=document.createElement("vaadin-grid-cell-content");o.setAttribute("slot",i);const s=document.createElement(r);s.id=i.replace("-content-","-"),s.setAttribute("role",r==="td"?"gridcell":"columnheader"),!Ae&&!Ce&&(s.addEventListener("mouseenter",l=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(l)}),s.addEventListener("mouseleave",()=>{this._hideTooltip()}),s.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));const n=document.createElement("slot");if(n.setAttribute("name",i),e&&e._focusButtonMode){const l=document.createElement("div");l.setAttribute("role","button"),l.setAttribute("tabindex","-1"),s.appendChild(l),s._focusButton=l,s.focus=function(){s._focusButton.focus()},l.appendChild(n)}else s.setAttribute("tabindex","-1"),s.appendChild(n);return s._content=o,o.addEventListener("mousedown",()=>{if(it){const l=c=>{const d=o.contains(this.getRootNode().activeElement),h=c.composedPath().includes(o);!d&&h&&s.focus(),document.removeEventListener("mouseup",l,!0)};document.addEventListener("mouseup",l,!0)}else setTimeout(()=>{o.contains(this.getRootNode().activeElement)||s.focus()})}),s}_updateRow(r,e,t="body",i=!1,o=!1){const s=document.createDocumentFragment();M(r,n=>{n._vacant=!0}),r.innerHTML="",t==="body"&&(r.__cells=[],r.__detailsCell=null),e.filter(n=>!n.hidden).forEach((n,l,c)=>{let d;if(t==="body"){if(n._cells||(n._cells=[]),d=n._cells.find(h=>h._vacant),d||(d=this._createCell("td",n),n._cells.push(d)),d.setAttribute("part","cell body-cell"),d.__parentRow=r,r.__cells.push(d),n._bodyContentHidden||r.appendChild(d),r===this.$.sizer&&(n._sizerCell=d),l===c.length-1&&this.rowDetailsRenderer){this._detailsCells||(this._detailsCells=[]);const h=this._detailsCells.find(u=>u._vacant)||this._createCell("td");this._detailsCells.indexOf(h)===-1&&this._detailsCells.push(h),h._content.parentElement||s.appendChild(h._content),this._configureDetailsCell(h),r.appendChild(h),r.__detailsCell=h,this._a11ySetRowDetailsCell(r,h),h._vacant=!1}n.notifyPath&&!o&&n.notifyPath("_cells.*",n._cells)}else{const h=t==="header"?"th":"td";i||n.localName==="vaadin-grid-column-group"?(d=n[`_${t}Cell`]||this._createCell(h),d._column=n,r.appendChild(d),n[`_${t}Cell`]=d):(n._emptyCells||(n._emptyCells=[]),d=n._emptyCells.find(u=>u._vacant)||this._createCell(h),d._column=n,r.appendChild(d),n._emptyCells.indexOf(d)===-1&&n._emptyCells.push(d)),d.setAttribute("part",`cell ${t}-cell`)}d._content.parentElement||s.appendChild(d._content),d._vacant=!1,d._column=n}),t!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(r),this.appendChild(s),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(r)}__debounceUpdateHeaderFooterRowVisibility(r){r.__debounceUpdateHeaderFooterRowVisibility=m.debounce(r.__debounceUpdateHeaderFooterRowVisibility,U,()=>this.__updateHeaderFooterRowVisibility(r))}__updateHeaderFooterRowVisibility(r){if(!r)return;const e=Array.from(r.children).filter(t=>{const i=t._column;if(i._emptyCells&&i._emptyCells.indexOf(t)>-1)return!1;if(r.parentElement===this.$.header){if(i.headerRenderer)return!0;if(i.header===null)return!1;if(i.path||i.header!==void 0)return!0}else if(i.footerRenderer)return!0;return!1});r.hidden!==!e.length&&(r.hidden=!e.length),this._resetKeyboardNavigation()}_updateScrollerItem(r,e){this._preventScrollerRotatingCellFocus(r,e),this._columnTree&&(this._updateRowOrderParts(r,e),this._a11yUpdateRowRowindex(r,e),this._getItem(e,r))}_columnTreeChanged(r){this._renderColumnTree(r),this.recalculateColumnWidths(),this.__updateColumnsBodyContentHidden()}_updateRowOrderParts(r,e=r.index){Y(r,{first:e===0,last:e===this._effectiveSize-1,odd:e%2!==0,even:e%2===0})}_updateRowStateParts(r,{expanded:e,selected:t,detailsOpened:i}){Y(r,{expanded:e,selected:t,"details-opened":i})}_renderColumnTree(r){for(b(this.$.items,e=>{this._updateRow(e,r[r.length-1],"body",!1,!0);const t=this.__getRowModel(e);this._updateRowOrderParts(e),this._updateRowStateParts(e,t),this._filterDragAndDrop(e,t)});this.$.header.children.length<r.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.header.appendChild(e);const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),t.setAttribute("tabindex","-1"),this.$.footer.appendChild(t)}for(;this.$.header.children.length>r.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);b(this.$.header,(e,t,i)=>{this._updateRow(e,r[t],"header",t===r.length-1);const o=L(e);w(o,"first-header-row-cell",t===0),w(o,"last-header-row-cell",t===i.length-1)}),b(this.$.footer,(e,t,i)=>{this._updateRow(e,r[r.length-1-t],"footer",t===0);const o=L(e);w(o,"first-footer-row-cell",t===0),w(o,"last-footer-row-cell",t===i.length-1)}),this._updateRow(this.$.sizer,r[r.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning(),this.generateCellClassNames(),this.generateCellPartNames()}__updateFooterPositioning(){this._firefox&&parseFloat(navigator.userAgent.match(/Firefox\/(\d{2,3}.\d)/u)[1])<99&&(this.$.items.style.paddingBottom=0,this.allRowsVisible||(this.$.items.style.paddingBottom=`${this.$.footer.offsetHeight}px`))}_updateItem(r,e){r._item=e;const t=this.__getRowModel(r);this._toggleDetailsCell(r,t.detailsOpened),this._a11yUpdateRowLevel(r,t.level),this._a11yUpdateRowSelected(r,t.selected),this._updateRowStateParts(r,t),this._generateCellClassNames(r,t),this._generateCellPartNames(r,t),this._filterDragAndDrop(r,t),b(r,i=>{if(i._renderer){const o=i._column||this;i._renderer.call(o,i._content,o,t)}}),this._updateDetailsCellHeight(r),this._a11yUpdateRowExpanded(r,t.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateFooterPositioning(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(r){r.animationName.indexOf("vaadin-grid-appear")===0&&(r.stopPropagation(),this.__tryToRecalculateColumnWidthsIfPending(),requestAnimationFrame(()=>{this.__scrollToPendingIndexes()}))}__getRowModel(r){return{index:r.index,item:r._item,level:this._getIndexLevel(r.index),expanded:this._isExpanded(r._item),selected:this._isSelected(r._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(r._item)}}_showTooltip(r){const e=this._tooltipController.node;e&&e.isConnected&&(this._tooltipController.setTarget(r.target),this._tooltipController.setContext(this.getEventContext(r)),e._stateController.open({focus:r.type==="focusin",hover:r.type==="mouseenter"}))}_hideTooltip(r){const e=this._tooltipController.node;e&&e._stateController.close(r)}requestContentUpdate(){this._columnTree&&(this._columnTree.forEach(r=>{r.forEach(e=>{e._renderHeaderAndFooter&&e._renderHeaderAndFooter()})}),this.__updateVisibleRows())}__updateVisibleRows(r,e){this.__virtualizer&&this.__virtualizer.update(r,e)}};customElements.define(he.is,he);const Wt={onActiveItemChanged:"active-item-changed",onCellActivate:"cell-activate",onColumnResize:"column-resize",onExpandedItemsChanged:"expanded-items-changed",onLoadingChanged:"loading-changed",onSelectedItemsChanged:"selected-items-changed",onCellFocus:"cell-focus",onColumnReorder:"column-reorder",onGridDragend:"grid-dragend",onGridDragstart:"grid-dragstart",onGridDrop:"grid-drop",onSizeChanged:"size-changed",onDataProviderChanged:"data-provider-changed"},jt=q({elementClass:he,events:Wt,react:K,tagName:"vaadin-grid"});function Yt(a,r){const[e,t]=ve(a.rowDetailsRenderer);return f.jsxs(jt,{...a,ref:r,rowDetailsRenderer:t,children:[a.children,e]})}const Ut=D.forwardRef(Yt),qt=I`
  :host {
    --vaadin-tooltip-offset-top: var(--lumo-space-xs);
    --vaadin-tooltip-offset-bottom: var(--lumo-space-xs);
    --vaadin-tooltip-offset-start: var(--lumo-space-xs);
    --vaadin-tooltip-offset-end: var(--lumo-space-xs);
  }

  [part='overlay'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) var(--lumo-space-s);
  }
`;O("vaadin-tooltip-overlay",[dt,qt],{moduleId:"lumo-tooltip-overlay"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-tooltip-overlay",I`
    :host {
      z-index: 1100;
    }

    [part='overlay'] {
      max-width: 40ch;
    }

    :host([position^='top'][top-aligned]) [part='overlay'],
    :host([position^='bottom'][top-aligned]) [part='overlay'] {
      margin-top: var(--vaadin-tooltip-offset-top, 0);
    }

    :host([position^='top'][bottom-aligned]) [part='overlay'],
    :host([position^='bottom'][bottom-aligned]) [part='overlay'] {
      margin-bottom: var(--vaadin-tooltip-offset-bottom, 0);
    }

    :host([position^='start'][start-aligned]) [part='overlay'],
    :host([position^='end'][start-aligned]) [part='overlay'] {
      margin-inline-start: var(--vaadin-tooltip-offset-start, 0);
    }

    :host([position^='start'][end-aligned]) [part='overlay'],
    :host([position^='end'][end-aligned]) [part='overlay'] {
      margin-inline-end: var(--vaadin-tooltip-offset-end, 0);
    }

    @media (forced-colors: active) {
      [part='overlay'] {
        outline: 1px dashed;
      }
    }
  `,{moduleId:"vaadin-tooltip-overlay-styles"});let H;class Te extends ht(ct){static get is(){return"vaadin-tooltip-overlay"}static get template(){return H||(H=super.template.cloneNode(!0),H.content.querySelector('[part~="overlay"]').removeAttribute("tabindex"),H.content.querySelector('[part~="content"]').innerHTML="<slot></slot>"),H}static get properties(){return{position:{type:String,reflectToAttribute:!0}}}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}requestContentUpdate(){if(super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()===""),this.positionTarget&&this.owner){const r=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(e=>{this.style.setProperty(`--vaadin-tooltip-offset-${e}`,r.getPropertyValue(`--vaadin-tooltip-offset-${e}`))})}}_updatePosition(){if(super._updatePosition(),!!this.positionTarget){if(this.position==="bottom"||this.position==="top"){const r=this.positionTarget.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect(),t=r.width/2-e.width/2;if(this.style.left){const i=e.left+t;i>0&&(this.style.left=`${i}px`)}if(this.style.right){const i=parseFloat(this.style.right)+t;i>0&&(this.style.right=`${i}px`)}}if(this.position==="start"||this.position==="end"){const r=this.positionTarget.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect(),t=r.height/2-e.height/2;this.style.top=`${e.top+t}px`}}}}customElements.define(Te.is,Te);/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const B=500;let We=B,je=B,Ye=B;const X=new Set;let V=!1,W=null,j=null;class Kt{constructor(r){this.host=r}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const r=this.host;return r.focusDelay!=null&&r.focusDelay>0?r.focusDelay:We}get hoverDelay(){const r=this.host;return r.hoverDelay!=null&&r.hoverDelay>0?r.hoverDelay:je}get hideDelay(){const r=this.host;return r.hideDelay!=null&&r.hideDelay>0?r.hideDelay:Ye}open(r={immediate:!1}){const{immediate:e,hover:t,focus:i}=r,o=t&&this.hoverDelay>0,s=i&&this.focusDelay>0;!e&&(o||s)&&!this.__closeTimeout?this.__warmupTooltip(s):this.__showTooltip()}close(r){!r&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),V&&(this.__abortCooldown(),this.__scheduleCooldown())}_isOpened(){return this.host[this.openedProp]}_setOpened(r){this.host[this.openedProp]=r}__flushClosingTooltips(){X.forEach(r=>{r._stateController.close(!0),X.delete(r)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),V=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(r){this._isOpened()||(V?this.__showTooltip():this.__scheduleWarmUp(r))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null)}__abortCooldown(){j&&(clearTimeout(j),j=null)}__abortWarmUp(){W&&(clearTimeout(W),W=null)}__scheduleClose(){this._isOpened()&&(X.add(this.host),this.__closeTimeout=setTimeout(()=>{X.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){j=setTimeout(()=>{j=null,V=!1},this.hideDelay)}__scheduleWarmUp(r){const e=r?this.focusDelay:this.hoverDelay;W=setTimeout(()=>{W=null,V=!0,this.__showTooltip()},e)}}class Fe extends pt(ot(oe(S))){static get is(){return"vaadin-tooltip"}static get template(){return N`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-tooltip-overlay
        id="[[_uniqueId]]"
        role="tooltip"
        renderer="[[_renderer]]"
        theme$="[[_theme]]"
        opened="[[__computeOpened(manual, opened, _autoOpened, _isConnected)]]"
        position-target="[[target]]"
        position="[[__effectivePosition]]"
        no-horizontal-overlap$="[[__computeNoHorizontalOverlap(__effectivePosition)]]"
        no-vertical-overlap$="[[__computeNoVerticalOverlap(__effectivePosition)]]"
        horizontal-align="[[__computeHorizontalAlign(__effectivePosition)]]"
        vertical-align="[[__computeVerticalAlign(__effectivePosition)]]"
        on-mouseleave="__onOverlayMouseLeave"
        modeless
      ></vaadin-tooltip-overlay>
    `}static get properties(){return{context:{type:Object,value:()=>({})},focusDelay:{type:Number},for:{type:String,observer:"__forChanged"},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1},opened:{type:Boolean,value:!1},position:{type:String},shouldShow:{type:Object,value:()=>(r,e)=>!0},target:{type:Object,observer:"__targetChanged"},text:{type:String,observer:"__textChanged"},generator:{type:Object},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged"},_position:{type:String,value:"bottom"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"},__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)"]}static setDefaultFocusDelay(r){We=r!=null&&r>=0?r:B}static setDefaultHideDelay(r){Ye=r!=null&&r>=0?r:B}static setDefaultHoverDelay(r){je=r!=null&&r>=0?r:B}constructor(){super(),this._uniqueId=`vaadin-tooltip-${rt()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(r=>{r.forEach(e=>this.__onTargetVisibilityChange(e.isIntersecting))},{threshold:0}),this._stateController=new Kt(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}__computeHorizontalAlign(r){return["top-end","bottom-end","start-top","start","start-bottom"].includes(r)?"end":"start"}__computeNoHorizontalOverlap(r){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(r)}__computeNoVerticalOverlap(r){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(r)}__computeVerticalAlign(r){return["top-start","top-end","top","start-bottom","end-bottom"].includes(r)?"bottom":"top"}__computeOpened(r,e,t,i){return i&&(r?e:t)}__computePosition(r,e){return r||e}__tooltipRenderer(r){r.textContent=typeof this.generator=="function"?this.generator(this.context):this.text}__autoOpenedChanged(r,e){r?document.addEventListener("keydown",this.__onKeyDown,!0):e&&document.removeEventListener("keydown",this.__onKeyDown,!0)}__forChanged(r){r&&(this.__setTargetByIdDebouncer=m.debounce(this.__setTargetByIdDebouncer,U,()=>this.__setTargetById(r)))}__setTargetById(r){if(!this.isConnected)return;const e=this.getRootNode().getElementById(r);e?this.target=e:console.warn(`No element with id="${r}" found to show tooltip.`)}__targetChanged(r,e){e&&(e.removeEventListener("mouseenter",this.__onMouseEnter),e.removeEventListener("mouseleave",this.__onMouseLeave),e.removeEventListener("focusin",this.__onFocusin),e.removeEventListener("focusout",this.__onFocusout),e.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(e),ge(e,"aria-describedby",this._uniqueId)),r&&(r.addEventListener("mouseenter",this.__onMouseEnter),r.addEventListener("mouseleave",this.__onMouseLeave),r.addEventListener("focusin",this.__onFocusin),r.addEventListener("focusout",this.__onFocusout),r.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(r)}),pe(r,"aria-describedby",this._uniqueId))}__onFocusin(r){this.manual||Ne()&&(this.target.contains(r.relatedTarget)||this.__isShouldShow()&&(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0})))}__onFocusout(r){this.manual||this.target.contains(r.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(r){r.key==="Escape"&&(r.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this._stateController.close(!0)}__onMouseEnter(){this.manual||this.__isShouldShow()&&(this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0})))}__onMouseLeave(r){r.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseLeave(r){r.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(r){const e=this.__isTargetHidden;if(this.__isTargetHidden=!r,e&&r&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!r&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(r,e){this._overlayElement&&(r||e)&&this._overlayElement.requestContentUpdate()}__generatorChanged(r,e,t){r&&((e!==this.__oldTextGenerator||t!==this.__oldContext)&&r.requestContentUpdate(),this.__oldTextGenerator=e,this.__oldContext=t)}}customElements.define(Fe.is,Fe);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zt=I`
  :host {
    --vaadin-user-color-0: #df0b92;
    --vaadin-user-color-1: #650acc;
    --vaadin-user-color-2: #097faa;
    --vaadin-user-color-3: #ad6200;
    --vaadin-user-color-4: #bf16f3;
    --vaadin-user-color-5: #084391;
    --vaadin-user-color-6: #078836;
  }

  [theme~='dark'] {
    --vaadin-user-color-0: #ff66c7;
    --vaadin-user-color-1: #9d8aff;
    --vaadin-user-color-2: #8aff66;
    --vaadin-user-color-3: #ffbd66;
    --vaadin-user-color-4: #dc6bff;
    --vaadin-user-color-5: #66fffa;
    --vaadin-user-color-6: #e6ff66;
  }
`;st("user-color-props",Zt);const Ue=document.createElement("style");Ue.textContent="html { --vaadin-avatar-size: var(--lumo-size-m); }";document.head.appendChild(Ue);O("vaadin-avatar",I`
    :host {
      color: var(--lumo-secondary-text-color);
      background-color: var(--lumo-contrast-10pct);
      border-radius: 50%;
      outline: none;
      cursor: default;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([has-color-index]) {
      color: var(--lumo-base-color);
    }

    :host([focus-ring]) {
      border-color: var(--lumo-primary-color-50pct);
    }

    [part='icon'],
    [part='abbr'] {
      fill: currentColor;
    }

    [part='abbr'] {
      font-family: var(--lumo-font-family);
      font-size: 2.4375em;
      font-weight: 500;
    }

    :host([theme~='xlarge']) [part='abbr'] {
      font-size: 2.5em;
    }

    :host([theme~='large']) [part='abbr'] {
      font-size: 2.375em;
    }

    :host([theme~='small']) [part='abbr'] {
      font-size: 2.75em;
    }

    :host([theme~='xsmall']) [part='abbr'] {
      font-size: 3em;
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar"});/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qe=document.createElement("template");qe.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-avatar-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQAAAsAAAAABnwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUmEY21hcAAAAYgAAABLAAABcOspwa1nbHlmAAAB1AAAAEUAAABMYO4o1WhlYWQAAAIcAAAALgAAADYYaAmGaGhlYQAAAkwAAAAdAAAAJAZsA1VobXR4AAACbAAAAAgAAAAIA+gAAGxvY2EAAAJ0AAAABgAAAAYAJgAAbWF4cAAAAnwAAAAeAAAAIAEOACFuYW1lAAACnAAAAUIAAAKavFDYrHBvc3QAAAPgAAAAHQAAAC52hGZ4eJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGT8wjiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+YmQO+p/FEMUcxDANKMwIkgMADiUMJQB4nGNgYGBlYGBgBmIdIGZhYGAMYWBkAAE/oCgjWJyZgQsszsKgBFbDAhJ/xfj/P4wE8lnAJAMjG8Mo4AGTMlAeOKwgmIERADU0CX0AeJxjYGIAAmYJpkgGHgYRBgZGJT1GEztGIzlGET5GKEuU8YuSpZKSpQuI+LfLv21emz9jHJQPJP7dsUywsEiwBACG8g9CAAAAeJxjYGRgYADicIOnh+P5bb4ycDO/AIow3JZ4rIJMM0swRQIpDgYmEA8AKwgJOwAAeJxjYGRgYA76nwUkXzAAAbMEAyMDKmACAE2GAskAAAAAAAAAA+gAAAAAAAAAJgAAeJxjYGRgYGBiEAViBjCLgYELCBkY/oP5DAAKuwEwAAB4nI2Qu07DMBSG//SGaCWEhMSAGDx1QU0vYyemdmDrUDEhuamTpkriyHEj9RF4B56Bh2Bg5mmY+8d4Qh3qo9jf+c45thQAt/hGgGYFuHN7s1q4YvbHbdKD5w555LmLAZ499+hfPPfxhDfPA/p33hB0rmmG+PDcwg2+PLfpfzx3yL+eu7gPHj33MAxmnvtYB6+eB/SftZTbtBjJWlppRmmki2qlkkMmzZnKGbVWpkp1Iabh5Ex1qQplpFVbsTmKqk5m1sYiNjoXC11YlWValEbvVWTDnbXlfDyOvQ8jnaOGZGyRouCfky63/AyzFBE0fYUVFBIckLnKZTOXda15s+GZulxgihCTC2eXnC3cfFNV7BfY4Mi9eT3BjNYiZh6zRyMnLdxs050xNE3panuaiD7Ezk2VmGPMiP/1h+71/ATcWYAhAAB4nGNgYoAALgbsgImRiZGZgaW0OLWIgQEACl4B2QAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(qe.content);/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let ce=class extends nt(oe(se(be(S)))){static get template(){return N`
      <style>
        :host {
          display: inline-block;
          flex: none;
          border-radius: 50%;
          overflow: hidden;
          height: var(--vaadin-avatar-size, 64px);
          width: var(--vaadin-avatar-size, 64px);
          border: var(--vaadin-avatar-outline-width) solid transparent;
          margin: calc(var(--vaadin-avatar-outline-width) * -1);
          background-clip: content-box;
          --vaadin-avatar-outline-width: 2px;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        [part='icon'] {
          font-size: 5.6em;
        }

        [part='abbr'] {
          font-size: 2.2em;
        }

        [part='icon'] > text {
          font-family: 'vaadin-avatar-icons';
        }

        :host([hidden]) {
          display: none !important;
        }

        svg[hidden] {
          display: none !important;
        }

        :host([has-color-index]) {
          position: relative;
          background-color: var(--vaadin-avatar-user-color);
        }

        :host([has-color-index])::before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 0 2px var(--vaadin-avatar-user-color);
        }
      </style>
      <img hidden$="[[!__imgVisible]]" src$="[[img]]" aria-hidden="true" on-error="__onImageLoadError" />
      <svg
        part="icon"
        hidden$="[[!__iconVisible]]"
        id="avatar-icon"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">&#xea01;</text>
      </svg>
      <svg
        part="abbr"
        hidden$="[[!__abbrVisible]]"
        id="avatar-abbr"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">[[abbr]]</text>
      </svg>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-avatar"}static get properties(){return{img:{type:String,reflectToAttribute:!0,observer:"__imgChanged"},abbr:{type:String,reflectToAttribute:!0},name:{type:String,reflectToAttribute:!0},colorIndex:{type:Number,observer:"__colorIndexChanged"},i18n:{type:Object,value:()=>({anonymous:"anonymous"})},withTooltip:{type:Boolean,value:!1,observer:"__withTooltipChanged"},__imgVisible:Boolean,__iconVisible:Boolean,__abbrVisible:Boolean,__tooltipNode:Object}}static get observers(){return["__imgOrAbbrOrNameChanged(img, abbr, name)","__i18nChanged(i18n.*)","__tooltipChanged(__tooltipNode, name, abbr)"]}ready(){super.ready(),this.__updateVisibility(),this.hasAttribute("role")||this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this._tooltipController=new Ge(this),this.addController(this._tooltipController),!this.name&&!this.abbr&&this.__setTooltip()}__colorIndexChanged(r){if(r!=null){const e=`--vaadin-user-color-${r}`;!!getComputedStyle(document.documentElement).getPropertyValue(e)?(this.setAttribute("has-color-index",""),this.style.setProperty("--vaadin-avatar-user-color",`var(${e})`)):(this.removeAttribute("has-color-index"),console.warn(`The CSS property --vaadin-user-color-${r} is not defined`))}else this.removeAttribute("has-color-index")}__imgChanged(){this.__imgFailedToLoad=!1}__imgOrAbbrOrNameChanged(r,e,t){this.__updateVisibility(),!(e&&e!==this.__generatedAbbr)&&(t?this.abbr=this.__generatedAbbr=t.split(" ").map(i=>i.charAt(0)).join(""):this.abbr=void 0)}__tooltipChanged(r,e,t){r&&(t&&t!==this.__generatedAbbr?this.__setTooltip(e?`${e} (${t})`:t):this.__setTooltip(e))}__withTooltipChanged(r,e){if(r){const t=document.createElement("vaadin-tooltip");t.setAttribute("slot","tooltip"),this.appendChild(t),this.__tooltipNode=t}else e&&(this.__tooltipNode.target=null,this.__tooltipNode.remove(),this.__tooltipNode=null)}__i18nChanged(r){r.base&&r.base.anonymous&&(this.__oldAnonymous&&this.__tooltipNode&&this.__tooltipNode.text===this.__oldAnonymous&&this.__setTooltip(),this.__oldAnonymous=r.base.anonymous)}__updateVisibility(){this.__imgVisible=!!this.img&&!this.__imgFailedToLoad,this.__abbrVisible=!this.__imgVisible&&!!this.abbr,this.__iconVisible=!this.__imgVisible&&!this.abbr}__setTooltip(r){const e=this.__tooltipNode;e&&(e.text=r||this.i18n.anonymous)}__onImageLoadError(){this.img&&(console.warn(`<vaadin-avatar> The specified image could not be loaded: ${this.img}`),this.__imgFailedToLoad=!0,this.__updateVisibility())}};customElements.define(ce.is,ce);const Qt={},Jt=q({elementClass:ce,events:Qt,react:K,tagName:"vaadin-avatar"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class De extends be(S){static get template(){return N`
      <style>
        :host {
          display: inline-flex;
          max-width: 100%;
        }

        ::slotted(*) {
          width: 100%;
          box-sizing: border-box;
        }
      </style>
      <slot></slot>
    `}static get is(){return"vaadin-grid-filter"}static get properties(){return{path:String,value:{type:String,notify:!0},_textField:{type:Object}}}static get observers(){return["_filterChanged(path, value, _textField)"]}ready(){super.ready(),this._filterController=new at(this,"","vaadin-text-field",{initializer:r=>{r.addEventListener("value-changed",e=>{this.value=e.detail.value}),this._textField=r}}),this.addController(this._filterController)}_filterChanged(r,e,t){r===void 0||e===void 0||!t||this._previousValue===void 0&&e===""||(t.value=e,this._previousValue=e,this._debouncerFilterChanged=m.debounce(this._debouncerFilterChanged,$.after(200),()=>{this.dispatchEvent(new CustomEvent("filter-changed",{bubbles:!0}))}))}focus(){this._textField&&this._textField.focus()}}customElements.define(De.is,De);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let ue=class extends ie{static get is(){return"vaadin-grid-filter-column"}static get properties(){return{path:String,header:String}}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, _filterValue)"]}constructor(){super(),this.__boundOnFilterValueChanged=this.__onFilterValueChanged.bind(this)}_defaultHeaderRenderer(r,e){let t=r.firstElementChild,i=t?t.firstElementChild:void 0;t||(t=document.createElement("vaadin-grid-filter"),i=document.createElement("vaadin-text-field"),i.setAttribute("theme","small"),i.setAttribute("style","max-width: 100%;"),i.setAttribute("focus-target",""),i.addEventListener("value-changed",this.__boundOnFilterValueChanged),t.appendChild(i),r.appendChild(t)),t.path=this.path,t.value=this._filterValue,i.__rendererValue=this._filterValue,i.value=this._filterValue,i.label=this.__getHeader(this.header,this.path)}_computeHeaderRenderer(){return this._defaultHeaderRenderer}__onFilterValueChanged(r){r.detail.value!==r.target.__rendererValue&&(this._filterValue=r.detail.value)}__getHeader(r,e){if(r)return r;if(e)return this._generateHeader(e)}};customElements.define(ue.is,ue);const Xt={},ei=q({elementClass:ue,events:Xt,react:K,tagName:"vaadin-grid-filter-column"});function ti(a,r){const[e,t]=de(a.footerRenderer),[i,o]=ve(a.renderer??a.children);return f.jsxs(ei,{...a,footerRenderer:t,ref:r,renderer:o,children:[e,i]})}const Oe=D.forwardRef(ti),ii=I`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;O("vaadin-horizontal-layout",ii,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let _e=class extends oe(se(S)){static get template(){return N`
      <style>
        :host {
          display: flex;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-horizontal-layout"}};customElements.define(_e.is,_e);const ri={},Pe=q({elementClass:_e,events:ri,react:K,tagName:"vaadin-horizontal-layout"});O("vaadin-grid-sorter",I`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--lumo-primary-text-color);
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ke=document.createElement("template");Ke.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Ke.content);class Be extends se($e(S)){static get template(){return N`
      <style>
        :host {
          display: inline-flex;
          cursor: pointer;
          max-width: 100%;
        }

        [part='content'] {
          flex: 1 1 auto;
        }

        [part='indicators'] {
          position: relative;
          align-self: center;
          flex: none;
        }

        [part='order'] {
          display: inline;
          vertical-align: super;
        }

        [part='indicators']::before {
          font-family: 'vaadin-grid-sorter-icons';
          display: inline-block;
        }

        :host(:not([direction])) [part='indicators']::before {
          content: '\\e901';
        }

        :host([direction='asc']) [part='indicators']::before {
          content: '\\e900';
        }

        :host([direction='desc']) [part='indicators']::before {
          content: '\\e902';
        }
      </style>

      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null},_order:{type:Number,value:null},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,!this.parentNode&&this._grid&&this._grid.__removeSorters([this])}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(r,e){e!==!1&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){this.path===void 0||this.direction===void 0||!this._isConnected||(this.dispatchEvent(new CustomEvent("sorter-changed",{detail:{shiftClick:!!this._shiftClick,fromSorterClick:!!this._fromSorterClick},bubbles:!0,composed:!0})),this._fromSorterClick=!1,this._shiftClick=!1)}_getDisplayOrder(r){return r===null?"":r+1}_onClick(r){if(r.defaultPrevented)return;const e=this.getRootNode().activeElement;this!==e&&this.contains(e)||(r.preventDefault(),this._shiftClick=r.shiftKey,this._fromSorterClick=!0,this.direction==="asc"?this.direction="desc":this.direction==="desc"?this.direction=null:this.direction="asc")}}customElements.define(Be.is,Be);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let fe=class extends ie{static get is(){return"vaadin-grid-sort-column"}static get properties(){return{path:String,direction:{type:String,notify:!0}}}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, direction)"]}constructor(){super(),this.__boundOnDirectionChanged=this.__onDirectionChanged.bind(this)}_defaultHeaderRenderer(r,e){let t=r.firstElementChild;t||(t=document.createElement("vaadin-grid-sorter"),t.addEventListener("direction-changed",this.__boundOnDirectionChanged),r.appendChild(t)),t.path=this.path,t.__rendererDirection=this.direction,t.direction=this.direction,t.textContent=this.__getHeader(this.header,this.path)}_computeHeaderRenderer(){return this._defaultHeaderRenderer}__onDirectionChanged(r){r.detail.value!==r.target.__rendererDirection&&(this.direction=r.detail.value)}__getHeader(r,e){if(r)return r;if(e)return this._generateHeader(e)}};customElements.define(fe.is,fe);const oi={onDirectionChanged:"direction-changed"},si=q({elementClass:fe,events:oi,react:K,tagName:"vaadin-grid-sort-column"});function ni(a,r){const[e,t]=de(a.headerRenderer),[i,o]=de(a.footerRenderer),[s,n]=ve(a.renderer??a.children);return f.jsxs(si,{...a,footerRenderer:o,headerRenderer:t,ref:r,renderer:n,children:[e,i,s]})}const ee=D.forwardRef(ni);function Pi(){const[a,r]=D.useState([]),[e,t]=D.useState(!1);D.useEffect(()=>{ye().then(_=>{console.log(_),r(_.map((y,C)=>({...y,displayName:`${y.StudentName} ${y.Studentsurname}`,colorIndex:C})))}).catch(_=>{console.error("Error fetching data:",_)})},[]);const{model:i,submit:o,field:s,invalid:n,errors:l,required:c}=gt(vt,{onSubmit:async _=>{t(!0);try{await bt(_.StudentName,_.Studentsurname,_.Studentage,_.grade,_.availablility,_.course)}catch{}finally{t(!1),ye().then(y=>{console.log(y),r(y.map((C,g)=>({...C,displayName:`${C.StudentName} ${C.Studentsurname}`,colorIndex:g})))})}}}),d=["Software Engineering","Web Development","DevOPS","Data Engineering"],h=({item:_})=>f.jsxs(Pe,{style:{alignItems:"center"},theme:"spacing",children:[f.jsx(Jt,{img:_.StudentName,name:_.StudentName}),f.jsx("span",{theme:"badge",children:_.StudentName})]});let u=!0;const p=_=>f.jsx("span",{theme:`badge ${_.availablility===u?"success":"error"}`,children:_.availablility}),v=T(i.studentcode),A=T(i.StudentName),R=T(i.Studentsurname);T(i.Studentage),T(i.grade),T(i.availablility);const G=T(i.course);return D.useEffect(()=>{v.addValidator(new Z({message:"Please enter student code!"})),A.addValidator(new Z({message:"Please enter a student name"})),R.addValidator(new Z({message:"Please enter a student surname"})),G.addValidator(new Z({message:"Please enter a student course"}))},[]),f.jsx("div",{children:f.jsx(f.Fragment,{children:f.jsxs(Pe,{theme:"spacing padding",className:"height-4xl",style:{justifyContent:"center"},children:[f.jsxs(Ut,{items:a,theme:"wrap-cell-content",children:[f.jsx(Oe,{placeholder:"Search",header:"Search Name",path:"displayName",flexGrow:0,width:"200px",children:h}),f.jsx(Oe,{path:"studentcode",placeholder:"Search ",header:"Search By Code"}),f.jsx(ee,{path:"StudentName",header:"Names"}),f.jsx(ee,{path:"Studentsurname",header:"Surnames"}),f.jsx(ee,{path:"course",header:"Courses"}),f.jsx(ee,{header:"Present",autoWidth:!0,children:({item:_})=>p(_)})]}),f.jsxs(ut,{theme:"spacing padding",children:[f.jsx(Q,{required:!0,label:"Student name",...s(i.StudentName)}),f.jsx(Q,{label:"Student surname",...s(i.Studentsurname)}),f.jsx(Q,{label:"Student Age",...s(i.Studentage)}),f.jsx(Q,{label:"Student Grade",...s(i.grade)}),f.jsx(_t,{label:"Availability",...s(i.availablility)}),f.jsx(ft,{allowCustomValue:!0,label:"Student course",...s(i.course),helperText:"Select or type a browser",items:d}),f.jsx(mt,{theme:"primary",onClick:o,disabled:n||e,children:"Save"})]})]})})})}export{Pi as default};
