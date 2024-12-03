var Tn=Object.defineProperty;var Mn=(o,e,t)=>e in o?Tn(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var O=(o,e,t)=>Mn(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const dt=class dt{static getCookie(e){const s=`; ${document.cookie}`.split(`; ${e}=`),r=s.pop();return r?s.length===2?r.split(";").shift():null:!1}static setCookie(e,t,s,r){var n="";if(s){var i=new Date;i.setTime(i.getTime()+s*24*60*60*1e3),n="; expires="+i.toUTCString()}document.cookie=e+"="+(t||"")+n+"; path=/; domain="+r,localStorage.setItem("sessionToken",t)}static createTrack(e,t){const s=document.createElement("a");s.classList.add("track"),s.href=`/track/${e.ID}`,s.setAttribute("data-track-link-value",`/users/${e.releaseAuthor.authorUsername}`),s.setAttribute("data-track-pfpimg-value",e.releaseAuthor.authorAvatar??"https://cdn.clippsly.com/brand_assets/icons/default-artist.png"),s.setAttribute("data-track-coverimg-value",e.ArtCover??"https://cdn.clippsly.com/brand_assets/icons/default-artist.png");const r=document.createElement("div");r.classList.add("track-cover"),r.classList.add("skeleton-load-bg");const n=document.createElement("img");n.role="presentation",n.alt="",n.src=e.ArtCover,n.loading=t?"eager":"lazy",n.fetchPriority="high",n.classList.add("skeleton-load-fg"),n.setAttribute("data-global-target","skelimg"),r.append(n);const i=document.createElement("div");i.classList.add("track-metadata");const a=document.createElement("a");a.classList.add("avatar"),a.classList.add("skeleton-load-bg"),a.tabIndex=0,a.href=`/users/${e.releaseAuthor.authorUsername}`;const c=document.createElement("img");c.role="presentation",c.alt="",c.src=e.releaseAuthor.authorAvatar??"https://cdn.clippsly.com/brand_assets/icons/default-artist.png",c.loading="eager",c.fetchPriority="low",c.setAttribute("data-global-target","skelimg"),c.classList.add("skeleton-load-fg"),a.append(c);const u=document.createElement("div");u.classList.add("track-info");const l=document.createElement("span");l.classList.add("track-name"),l.textContent=e.Title;const g=document.createElement("a");g.tabIndex=-1,g.href=`/users/${e.releaseAuthor.authorUsername}`,g.classList.add("artist-name");const f=document.createElement("span");if(f.textContent=e.releaseAuthor.authorDisplay,g.append(f),e.releaseAuthor.authorVerified){const $=document.createElement("div");$.classList.add("icon"),$.classList.add("brand"),$.title="Verified",$.innerHTML=dt.verifiedBadgeHTML,g.append($)}return u.append(l,g),i.append(a,u),s.append(r,i),s}static createSkeletonTrack(){const e=document.createElement("div");e.classList.add("track"),e.classList.add("skeleton");const t=document.createElement("div");t.classList.add("track-cover"),t.classList.add("skeleton-load-bg");const s=document.createElement("div");s.classList.add("track-metadata");const r=document.createElement("div");r.classList.add("avatar"),r.classList.add("skeleton-load-bg");const n=document.createElement("div");n.classList.add("track-info");const i=document.createElement("span");i.classList.add("skeleton-load-bg"),i.textContent="wwwwwwwwwww";const a=document.createElement("span");return a.classList.add("skeleton-load-bg"),a.textContent="wwwwwww",n.append(i,a),s.append(r,n),e.append(t,s),e}static setDocTitle(e){document.title=e+" | Clippsly"}};O(dt,"pageNames",{balance:"Balance",cliptivity:"Cliptivity",error:"Error",home:"Home",login:"Log In",moderated:"Not Approved",register:"Sign Up",search:"Search",settings:"Settings",track:"Track",upload:"Create",user:"User"}),O(dt,"verifiedBadgeHTML",'<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5ZM7.35355 4.10355C7.54882 3.90829 7.54882 3.59171 7.35355 3.39645C7.15829 3.20118 6.84171 3.20118 6.64645 3.39645L4.5 5.54289L3.35355 4.39645C3.15829 4.20118 2.84171 4.20118 2.64645 4.39645C2.45118 4.59171 2.45118 4.90829 2.64645 5.10355L4.14645 6.60355C4.34171 6.79882 4.65829 6.79882 4.85355 6.60355L7.35355 4.10355Z" fill="currentColor"/></svg>');let x=dt;class On{constructor(e,t,s){this.eventTarget=e,this.eventName=t,this.eventOptions=s,this.unorderedBindings=new Set}connect(){this.eventTarget.addEventListener(this.eventName,this,this.eventOptions)}disconnect(){this.eventTarget.removeEventListener(this.eventName,this,this.eventOptions)}bindingConnected(e){this.unorderedBindings.add(e)}bindingDisconnected(e){this.unorderedBindings.delete(e)}handleEvent(e){const t=Fn(e);for(const s of this.bindings){if(t.immediatePropagationStopped)break;s.handleEvent(t)}}hasBindings(){return this.unorderedBindings.size>0}get bindings(){return Array.from(this.unorderedBindings).sort((e,t)=>{const s=e.index,r=t.index;return s<r?-1:s>r?1:0})}}function Fn(o){if("immediatePropagationStopped"in o)return o;{const{stopImmediatePropagation:e}=o;return Object.assign(o,{immediatePropagationStopped:!1,stopImmediatePropagation(){this.immediatePropagationStopped=!0,e.call(this)}})}}class In{constructor(e){this.application=e,this.eventListenerMaps=new Map,this.started=!1}start(){this.started||(this.started=!0,this.eventListeners.forEach(e=>e.connect()))}stop(){this.started&&(this.started=!1,this.eventListeners.forEach(e=>e.disconnect()))}get eventListeners(){return Array.from(this.eventListenerMaps.values()).reduce((e,t)=>e.concat(Array.from(t.values())),[])}bindingConnected(e){this.fetchEventListenerForBinding(e).bindingConnected(e)}bindingDisconnected(e,t=!1){this.fetchEventListenerForBinding(e).bindingDisconnected(e),t&&this.clearEventListenersForBinding(e)}handleError(e,t,s={}){this.application.handleError(e,`Error ${t}`,s)}clearEventListenersForBinding(e){const t=this.fetchEventListenerForBinding(e);t.hasBindings()||(t.disconnect(),this.removeMappedEventListenerFor(e))}removeMappedEventListenerFor(e){const{eventTarget:t,eventName:s,eventOptions:r}=e,n=this.fetchEventListenerMapForEventTarget(t),i=this.cacheKey(s,r);n.delete(i),n.size==0&&this.eventListenerMaps.delete(t)}fetchEventListenerForBinding(e){const{eventTarget:t,eventName:s,eventOptions:r}=e;return this.fetchEventListener(t,s,r)}fetchEventListener(e,t,s){const r=this.fetchEventListenerMapForEventTarget(e),n=this.cacheKey(t,s);let i=r.get(n);return i||(i=this.createEventListener(e,t,s),r.set(n,i)),i}createEventListener(e,t,s){const r=new On(e,t,s);return this.started&&r.connect(),r}fetchEventListenerMapForEventTarget(e){let t=this.eventListenerMaps.get(e);return t||(t=new Map,this.eventListenerMaps.set(e,t)),t}cacheKey(e,t){const s=[e];return Object.keys(t).sort().forEach(r=>{s.push(`${t[r]?"":"!"}${r}`)}),s.join(":")}}const zn={stop({event:o,value:e}){return e&&o.stopPropagation(),!0},prevent({event:o,value:e}){return e&&o.preventDefault(),!0},self({event:o,value:e,element:t}){return e?t===o.target:!0}},Nn=/^(?:(?:([^.]+?)\+)?(.+?)(?:\.(.+?))?(?:@(window|document))?->)?(.+?)(?:#([^:]+?))(?::(.+))?$/;function Ln(o){const t=o.trim().match(Nn)||[];let s=t[2],r=t[3];return r&&!["keydown","keyup","keypress"].includes(s)&&(s+=`.${r}`,r=""),{eventTarget:Pn(t[4]),eventName:s,eventOptions:t[7]?Dn(t[7]):{},identifier:t[5],methodName:t[6],keyFilter:t[1]||r}}function Pn(o){if(o=="window")return window;if(o=="document")return document}function Dn(o){return o.split(":").reduce((e,t)=>Object.assign(e,{[t.replace(/^!/,"")]:!/^!/.test(t)}),{})}function Vn(o){if(o==window)return"window";if(o==document)return"document"}function Hs(o){return o.replace(/(?:[_-])([a-z0-9])/g,(e,t)=>t.toUpperCase())}function ws(o){return Hs(o.replace(/--/g,"-").replace(/__/g,"_"))}function vt(o){return o.charAt(0).toUpperCase()+o.slice(1)}function wr(o){return o.replace(/([A-Z])/g,(e,t)=>`-${t.toLowerCase()}`)}function _n(o){return o.match(/[^\s]+/g)||[]}function po(o){return o!=null}function ks(o,e){return Object.prototype.hasOwnProperty.call(o,e)}const go=["meta","ctrl","alt","shift"];class Hn{constructor(e,t,s,r){this.element=e,this.index=t,this.eventTarget=s.eventTarget||e,this.eventName=s.eventName||Rn(e)||$t("missing event name"),this.eventOptions=s.eventOptions||{},this.identifier=s.identifier||$t("missing identifier"),this.methodName=s.methodName||$t("missing method name"),this.keyFilter=s.keyFilter||"",this.schema=r}static forToken(e,t){return new this(e.element,e.index,Ln(e.content),t)}toString(){const e=this.keyFilter?`.${this.keyFilter}`:"",t=this.eventTargetName?`@${this.eventTargetName}`:"";return`${this.eventName}${e}${t}->${this.identifier}#${this.methodName}`}shouldIgnoreKeyboardEvent(e){if(!this.keyFilter)return!1;const t=this.keyFilter.split("+");if(this.keyFilterDissatisfied(e,t))return!0;const s=t.filter(r=>!go.includes(r))[0];return s?(ks(this.keyMappings,s)||$t(`contains unknown key filter: ${this.keyFilter}`),this.keyMappings[s].toLowerCase()!==e.key.toLowerCase()):!1}shouldIgnoreMouseEvent(e){if(!this.keyFilter)return!1;const t=[this.keyFilter];return!!this.keyFilterDissatisfied(e,t)}get params(){const e={},t=new RegExp(`^data-${this.identifier}-(.+)-param$`,"i");for(const{name:s,value:r}of Array.from(this.element.attributes)){const n=s.match(t),i=n&&n[1];i&&(e[Hs(i)]=jn(r))}return e}get eventTargetName(){return Vn(this.eventTarget)}get keyMappings(){return this.schema.keyMappings}keyFilterDissatisfied(e,t){const[s,r,n,i]=go.map(a=>t.includes(a));return e.metaKey!==s||e.ctrlKey!==r||e.altKey!==n||e.shiftKey!==i}}const fo={a:()=>"click",button:()=>"click",form:()=>"submit",details:()=>"toggle",input:o=>o.getAttribute("type")=="submit"?"click":"input",select:()=>"change",textarea:()=>"input"};function Rn(o){const e=o.tagName.toLowerCase();if(e in fo)return fo[e](o)}function $t(o){throw new Error(o)}function jn(o){try{return JSON.parse(o)}catch{return o}}let qn=class{constructor(e,t){this.context=e,this.action=t}get index(){return this.action.index}get eventTarget(){return this.action.eventTarget}get eventOptions(){return this.action.eventOptions}get identifier(){return this.context.identifier}handleEvent(e){const t=this.prepareActionEvent(e);this.willBeInvokedByEvent(e)&&this.applyEventModifiers(t)&&this.invokeWithEvent(t)}get eventName(){return this.action.eventName}get method(){const e=this.controller[this.methodName];if(typeof e=="function")return e;throw new Error(`Action "${this.action}" references undefined method "${this.methodName}"`)}applyEventModifiers(e){const{element:t}=this.action,{actionDescriptorFilters:s}=this.context.application,{controller:r}=this.context;let n=!0;for(const[i,a]of Object.entries(this.eventOptions))if(i in s){const c=s[i];n=n&&c({name:i,value:a,event:e,element:t,controller:r})}else continue;return n}prepareActionEvent(e){return Object.assign(e,{params:this.action.params})}invokeWithEvent(e){const{target:t,currentTarget:s}=e;try{this.method.call(this.controller,e),this.context.logDebugActivity(this.methodName,{event:e,target:t,currentTarget:s,action:this.methodName})}catch(r){const{identifier:n,controller:i,element:a,index:c}=this,u={identifier:n,controller:i,element:a,index:c,event:e};this.context.handleError(r,`invoking action "${this.action}"`,u)}}willBeInvokedByEvent(e){const t=e.target;return e instanceof KeyboardEvent&&this.action.shouldIgnoreKeyboardEvent(e)||e instanceof MouseEvent&&this.action.shouldIgnoreMouseEvent(e)?!1:this.element===t?!0:t instanceof Element&&this.element.contains(t)?this.scope.containsElement(t):this.scope.containsElement(this.action.element)}get controller(){return this.context.controller}get methodName(){return this.action.methodName}get element(){return this.scope.element}get scope(){return this.context.scope}};class kr{constructor(e,t){this.mutationObserverInit={attributes:!0,childList:!0,subtree:!0},this.element=e,this.started=!1,this.delegate=t,this.elements=new Set,this.mutationObserver=new MutationObserver(s=>this.processMutations(s))}start(){this.started||(this.started=!0,this.mutationObserver.observe(this.element,this.mutationObserverInit),this.refresh())}pause(e){this.started&&(this.mutationObserver.disconnect(),this.started=!1),e(),this.started||(this.mutationObserver.observe(this.element,this.mutationObserverInit),this.started=!0)}stop(){this.started&&(this.mutationObserver.takeRecords(),this.mutationObserver.disconnect(),this.started=!1)}refresh(){if(this.started){const e=new Set(this.matchElementsInTree());for(const t of Array.from(this.elements))e.has(t)||this.removeElement(t);for(const t of Array.from(e))this.addElement(t)}}processMutations(e){if(this.started)for(const t of e)this.processMutation(t)}processMutation(e){e.type=="attributes"?this.processAttributeChange(e.target,e.attributeName):e.type=="childList"&&(this.processRemovedNodes(e.removedNodes),this.processAddedNodes(e.addedNodes))}processAttributeChange(e,t){this.elements.has(e)?this.delegate.elementAttributeChanged&&this.matchElement(e)?this.delegate.elementAttributeChanged(e,t):this.removeElement(e):this.matchElement(e)&&this.addElement(e)}processRemovedNodes(e){for(const t of Array.from(e)){const s=this.elementFromNode(t);s&&this.processTree(s,this.removeElement)}}processAddedNodes(e){for(const t of Array.from(e)){const s=this.elementFromNode(t);s&&this.elementIsActive(s)&&this.processTree(s,this.addElement)}}matchElement(e){return this.delegate.matchElement(e)}matchElementsInTree(e=this.element){return this.delegate.matchElementsInTree(e)}processTree(e,t){for(const s of this.matchElementsInTree(e))t.call(this,s)}elementFromNode(e){if(e.nodeType==Node.ELEMENT_NODE)return e}elementIsActive(e){return e.isConnected!=this.element.isConnected?!1:this.element.contains(e)}addElement(e){this.elements.has(e)||this.elementIsActive(e)&&(this.elements.add(e),this.delegate.elementMatched&&this.delegate.elementMatched(e))}removeElement(e){this.elements.has(e)&&(this.elements.delete(e),this.delegate.elementUnmatched&&this.delegate.elementUnmatched(e))}}class yr{constructor(e,t,s){this.attributeName=t,this.delegate=s,this.elementObserver=new kr(e,this)}get element(){return this.elementObserver.element}get selector(){return`[${this.attributeName}]`}start(){this.elementObserver.start()}pause(e){this.elementObserver.pause(e)}stop(){this.elementObserver.stop()}refresh(){this.elementObserver.refresh()}get started(){return this.elementObserver.started}matchElement(e){return e.hasAttribute(this.attributeName)}matchElementsInTree(e){const t=this.matchElement(e)?[e]:[],s=Array.from(e.querySelectorAll(this.selector));return t.concat(s)}elementMatched(e){this.delegate.elementMatchedAttribute&&this.delegate.elementMatchedAttribute(e,this.attributeName)}elementUnmatched(e){this.delegate.elementUnmatchedAttribute&&this.delegate.elementUnmatchedAttribute(e,this.attributeName)}elementAttributeChanged(e,t){this.delegate.elementAttributeValueChanged&&this.attributeName==t&&this.delegate.elementAttributeValueChanged(e,t)}}function Un(o,e,t){$r(o,e).add(t)}function Kn(o,e,t){$r(o,e).delete(t),Wn(o,e)}function $r(o,e){let t=o.get(e);return t||(t=new Set,o.set(e,t)),t}function Wn(o,e){const t=o.get(e);t!=null&&t.size==0&&o.delete(e)}class Ae{constructor(){this.valuesByKey=new Map}get keys(){return Array.from(this.valuesByKey.keys())}get values(){return Array.from(this.valuesByKey.values()).reduce((t,s)=>t.concat(Array.from(s)),[])}get size(){return Array.from(this.valuesByKey.values()).reduce((t,s)=>t+s.size,0)}add(e,t){Un(this.valuesByKey,e,t)}delete(e,t){Kn(this.valuesByKey,e,t)}has(e,t){const s=this.valuesByKey.get(e);return s!=null&&s.has(t)}hasKey(e){return this.valuesByKey.has(e)}hasValue(e){return Array.from(this.valuesByKey.values()).some(s=>s.has(e))}getValuesForKey(e){const t=this.valuesByKey.get(e);return t?Array.from(t):[]}getKeysForValue(e){return Array.from(this.valuesByKey).filter(([t,s])=>s.has(e)).map(([t,s])=>t)}}class Gn{constructor(e,t,s,r){this._selector=t,this.details=r,this.elementObserver=new kr(e,this),this.delegate=s,this.matchesByElement=new Ae}get started(){return this.elementObserver.started}get selector(){return this._selector}set selector(e){this._selector=e,this.refresh()}start(){this.elementObserver.start()}pause(e){this.elementObserver.pause(e)}stop(){this.elementObserver.stop()}refresh(){this.elementObserver.refresh()}get element(){return this.elementObserver.element}matchElement(e){const{selector:t}=this;if(t){const s=e.matches(t);return this.delegate.selectorMatchElement?s&&this.delegate.selectorMatchElement(e,this.details):s}else return!1}matchElementsInTree(e){const{selector:t}=this;if(t){const s=this.matchElement(e)?[e]:[],r=Array.from(e.querySelectorAll(t)).filter(n=>this.matchElement(n));return s.concat(r)}else return[]}elementMatched(e){const{selector:t}=this;t&&this.selectorMatched(e,t)}elementUnmatched(e){const t=this.matchesByElement.getKeysForValue(e);for(const s of t)this.selectorUnmatched(e,s)}elementAttributeChanged(e,t){const{selector:s}=this;if(s){const r=this.matchElement(e),n=this.matchesByElement.has(s,e);r&&!n?this.selectorMatched(e,s):!r&&n&&this.selectorUnmatched(e,s)}}selectorMatched(e,t){this.delegate.selectorMatched(e,t,this.details),this.matchesByElement.add(t,e)}selectorUnmatched(e,t){this.delegate.selectorUnmatched(e,t,this.details),this.matchesByElement.delete(t,e)}}class Xn{constructor(e,t){this.element=e,this.delegate=t,this.started=!1,this.stringMap=new Map,this.mutationObserver=new MutationObserver(s=>this.processMutations(s))}start(){this.started||(this.started=!0,this.mutationObserver.observe(this.element,{attributes:!0,attributeOldValue:!0}),this.refresh())}stop(){this.started&&(this.mutationObserver.takeRecords(),this.mutationObserver.disconnect(),this.started=!1)}refresh(){if(this.started)for(const e of this.knownAttributeNames)this.refreshAttribute(e,null)}processMutations(e){if(this.started)for(const t of e)this.processMutation(t)}processMutation(e){const t=e.attributeName;t&&this.refreshAttribute(t,e.oldValue)}refreshAttribute(e,t){const s=this.delegate.getStringMapKeyForAttribute(e);if(s!=null){this.stringMap.has(e)||this.stringMapKeyAdded(s,e);const r=this.element.getAttribute(e);if(this.stringMap.get(e)!=r&&this.stringMapValueChanged(r,s,t),r==null){const n=this.stringMap.get(e);this.stringMap.delete(e),n&&this.stringMapKeyRemoved(s,e,n)}else this.stringMap.set(e,r)}}stringMapKeyAdded(e,t){this.delegate.stringMapKeyAdded&&this.delegate.stringMapKeyAdded(e,t)}stringMapValueChanged(e,t,s){this.delegate.stringMapValueChanged&&this.delegate.stringMapValueChanged(e,t,s)}stringMapKeyRemoved(e,t,s){this.delegate.stringMapKeyRemoved&&this.delegate.stringMapKeyRemoved(e,t,s)}get knownAttributeNames(){return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)))}get currentAttributeNames(){return Array.from(this.element.attributes).map(e=>e.name)}get recordedAttributeNames(){return Array.from(this.stringMap.keys())}}class xr{constructor(e,t,s){this.attributeObserver=new yr(e,t,this),this.delegate=s,this.tokensByElement=new Ae}get started(){return this.attributeObserver.started}start(){this.attributeObserver.start()}pause(e){this.attributeObserver.pause(e)}stop(){this.attributeObserver.stop()}refresh(){this.attributeObserver.refresh()}get element(){return this.attributeObserver.element}get attributeName(){return this.attributeObserver.attributeName}elementMatchedAttribute(e){this.tokensMatched(this.readTokensForElement(e))}elementAttributeValueChanged(e){const[t,s]=this.refreshTokensForElement(e);this.tokensUnmatched(t),this.tokensMatched(s)}elementUnmatchedAttribute(e){this.tokensUnmatched(this.tokensByElement.getValuesForKey(e))}tokensMatched(e){e.forEach(t=>this.tokenMatched(t))}tokensUnmatched(e){e.forEach(t=>this.tokenUnmatched(t))}tokenMatched(e){this.delegate.tokenMatched(e),this.tokensByElement.add(e.element,e)}tokenUnmatched(e){this.delegate.tokenUnmatched(e),this.tokensByElement.delete(e.element,e)}refreshTokensForElement(e){const t=this.tokensByElement.getValuesForKey(e),s=this.readTokensForElement(e),r=Qn(t,s).findIndex(([n,i])=>!Yn(n,i));return r==-1?[[],[]]:[t.slice(r),s.slice(r)]}readTokensForElement(e){const t=this.attributeName,s=e.getAttribute(t)||"";return Zn(s,e,t)}}function Zn(o,e,t){return o.trim().split(/\s+/).filter(s=>s.length).map((s,r)=>({element:e,attributeName:t,content:s,index:r}))}function Qn(o,e){const t=Math.max(o.length,e.length);return Array.from({length:t},(s,r)=>[o[r],e[r]])}function Yn(o,e){return o&&e&&o.index==e.index&&o.content==e.content}class Sr{constructor(e,t,s){this.tokenListObserver=new xr(e,t,this),this.delegate=s,this.parseResultsByToken=new WeakMap,this.valuesByTokenByElement=new WeakMap}get started(){return this.tokenListObserver.started}start(){this.tokenListObserver.start()}stop(){this.tokenListObserver.stop()}refresh(){this.tokenListObserver.refresh()}get element(){return this.tokenListObserver.element}get attributeName(){return this.tokenListObserver.attributeName}tokenMatched(e){const{element:t}=e,{value:s}=this.fetchParseResultForToken(e);s&&(this.fetchValuesByTokenForElement(t).set(e,s),this.delegate.elementMatchedValue(t,s))}tokenUnmatched(e){const{element:t}=e,{value:s}=this.fetchParseResultForToken(e);s&&(this.fetchValuesByTokenForElement(t).delete(e),this.delegate.elementUnmatchedValue(t,s))}fetchParseResultForToken(e){let t=this.parseResultsByToken.get(e);return t||(t=this.parseToken(e),this.parseResultsByToken.set(e,t)),t}fetchValuesByTokenForElement(e){let t=this.valuesByTokenByElement.get(e);return t||(t=new Map,this.valuesByTokenByElement.set(e,t)),t}parseToken(e){try{return{value:this.delegate.parseValueForToken(e)}}catch(t){return{error:t}}}}class Jn{constructor(e,t){this.context=e,this.delegate=t,this.bindingsByAction=new Map}start(){this.valueListObserver||(this.valueListObserver=new Sr(this.element,this.actionAttribute,this),this.valueListObserver.start())}stop(){this.valueListObserver&&(this.valueListObserver.stop(),delete this.valueListObserver,this.disconnectAllActions())}get element(){return this.context.element}get identifier(){return this.context.identifier}get actionAttribute(){return this.schema.actionAttribute}get schema(){return this.context.schema}get bindings(){return Array.from(this.bindingsByAction.values())}connectAction(e){const t=new qn(this.context,e);this.bindingsByAction.set(e,t),this.delegate.bindingConnected(t)}disconnectAction(e){const t=this.bindingsByAction.get(e);t&&(this.bindingsByAction.delete(e),this.delegate.bindingDisconnected(t))}disconnectAllActions(){this.bindings.forEach(e=>this.delegate.bindingDisconnected(e,!0)),this.bindingsByAction.clear()}parseValueForToken(e){const t=Hn.forToken(e,this.schema);if(t.identifier==this.identifier)return t}elementMatchedValue(e,t){this.connectAction(t)}elementUnmatchedValue(e,t){this.disconnectAction(t)}}class ei{constructor(e,t){this.context=e,this.receiver=t,this.stringMapObserver=new Xn(this.element,this),this.valueDescriptorMap=this.controller.valueDescriptorMap}start(){this.stringMapObserver.start(),this.invokeChangedCallbacksForDefaultValues()}stop(){this.stringMapObserver.stop()}get element(){return this.context.element}get controller(){return this.context.controller}getStringMapKeyForAttribute(e){if(e in this.valueDescriptorMap)return this.valueDescriptorMap[e].name}stringMapKeyAdded(e,t){const s=this.valueDescriptorMap[t];this.hasValue(e)||this.invokeChangedCallback(e,s.writer(this.receiver[e]),s.writer(s.defaultValue))}stringMapValueChanged(e,t,s){const r=this.valueDescriptorNameMap[t];e!==null&&(s===null&&(s=r.writer(r.defaultValue)),this.invokeChangedCallback(t,e,s))}stringMapKeyRemoved(e,t,s){const r=this.valueDescriptorNameMap[e];this.hasValue(e)?this.invokeChangedCallback(e,r.writer(this.receiver[e]),s):this.invokeChangedCallback(e,r.writer(r.defaultValue),s)}invokeChangedCallbacksForDefaultValues(){for(const{key:e,name:t,defaultValue:s,writer:r}of this.valueDescriptors)s!=null&&!this.controller.data.has(e)&&this.invokeChangedCallback(t,r(s),void 0)}invokeChangedCallback(e,t,s){const r=`${e}Changed`,n=this.receiver[r];if(typeof n=="function"){const i=this.valueDescriptorNameMap[e];try{const a=i.reader(t);let c=s;s&&(c=i.reader(s)),n.call(this.receiver,a,c)}catch(a){throw a instanceof TypeError&&(a.message=`Stimulus Value "${this.context.identifier}.${i.name}" - ${a.message}`),a}}}get valueDescriptors(){const{valueDescriptorMap:e}=this;return Object.keys(e).map(t=>e[t])}get valueDescriptorNameMap(){const e={};return Object.keys(this.valueDescriptorMap).forEach(t=>{const s=this.valueDescriptorMap[t];e[s.name]=s}),e}hasValue(e){const t=this.valueDescriptorNameMap[e],s=`has${vt(t.name)}`;return this.receiver[s]}}class ti{constructor(e,t){this.context=e,this.delegate=t,this.targetsByName=new Ae}start(){this.tokenListObserver||(this.tokenListObserver=new xr(this.element,this.attributeName,this),this.tokenListObserver.start())}stop(){this.tokenListObserver&&(this.disconnectAllTargets(),this.tokenListObserver.stop(),delete this.tokenListObserver)}tokenMatched({element:e,content:t}){this.scope.containsElement(e)&&this.connectTarget(e,t)}tokenUnmatched({element:e,content:t}){this.disconnectTarget(e,t)}connectTarget(e,t){var s;this.targetsByName.has(t,e)||(this.targetsByName.add(t,e),(s=this.tokenListObserver)===null||s===void 0||s.pause(()=>this.delegate.targetConnected(e,t)))}disconnectTarget(e,t){var s;this.targetsByName.has(t,e)&&(this.targetsByName.delete(t,e),(s=this.tokenListObserver)===null||s===void 0||s.pause(()=>this.delegate.targetDisconnected(e,t)))}disconnectAllTargets(){for(const e of this.targetsByName.keys)for(const t of this.targetsByName.getValuesForKey(e))this.disconnectTarget(t,e)}get attributeName(){return`data-${this.context.identifier}-target`}get element(){return this.context.element}get scope(){return this.context.scope}}function mt(o,e){const t=Cr(o);return Array.from(t.reduce((s,r)=>(oi(r,e).forEach(n=>s.add(n)),s),new Set))}function si(o,e){return Cr(o).reduce((s,r)=>(s.push(...ri(r,e)),s),[])}function Cr(o){const e=[];for(;o;)e.push(o),o=Object.getPrototypeOf(o);return e.reverse()}function oi(o,e){const t=o[e];return Array.isArray(t)?t:[]}function ri(o,e){const t=o[e];return t?Object.keys(t).map(s=>[s,t[s]]):[]}class ni{constructor(e,t){this.started=!1,this.context=e,this.delegate=t,this.outletsByName=new Ae,this.outletElementsByName=new Ae,this.selectorObserverMap=new Map,this.attributeObserverMap=new Map}start(){this.started||(this.outletDefinitions.forEach(e=>{this.setupSelectorObserverForOutlet(e),this.setupAttributeObserverForOutlet(e)}),this.started=!0,this.dependentContexts.forEach(e=>e.refresh()))}refresh(){this.selectorObserverMap.forEach(e=>e.refresh()),this.attributeObserverMap.forEach(e=>e.refresh())}stop(){this.started&&(this.started=!1,this.disconnectAllOutlets(),this.stopSelectorObservers(),this.stopAttributeObservers())}stopSelectorObservers(){this.selectorObserverMap.size>0&&(this.selectorObserverMap.forEach(e=>e.stop()),this.selectorObserverMap.clear())}stopAttributeObservers(){this.attributeObserverMap.size>0&&(this.attributeObserverMap.forEach(e=>e.stop()),this.attributeObserverMap.clear())}selectorMatched(e,t,{outletName:s}){const r=this.getOutlet(e,s);r&&this.connectOutlet(r,e,s)}selectorUnmatched(e,t,{outletName:s}){const r=this.getOutletFromMap(e,s);r&&this.disconnectOutlet(r,e,s)}selectorMatchElement(e,{outletName:t}){const s=this.selector(t),r=this.hasOutlet(e,t),n=e.matches(`[${this.schema.controllerAttribute}~=${t}]`);return s?r&&n&&e.matches(s):!1}elementMatchedAttribute(e,t){const s=this.getOutletNameFromOutletAttributeName(t);s&&this.updateSelectorObserverForOutlet(s)}elementAttributeValueChanged(e,t){const s=this.getOutletNameFromOutletAttributeName(t);s&&this.updateSelectorObserverForOutlet(s)}elementUnmatchedAttribute(e,t){const s=this.getOutletNameFromOutletAttributeName(t);s&&this.updateSelectorObserverForOutlet(s)}connectOutlet(e,t,s){var r;this.outletElementsByName.has(s,t)||(this.outletsByName.add(s,e),this.outletElementsByName.add(s,t),(r=this.selectorObserverMap.get(s))===null||r===void 0||r.pause(()=>this.delegate.outletConnected(e,t,s)))}disconnectOutlet(e,t,s){var r;this.outletElementsByName.has(s,t)&&(this.outletsByName.delete(s,e),this.outletElementsByName.delete(s,t),(r=this.selectorObserverMap.get(s))===null||r===void 0||r.pause(()=>this.delegate.outletDisconnected(e,t,s)))}disconnectAllOutlets(){for(const e of this.outletElementsByName.keys)for(const t of this.outletElementsByName.getValuesForKey(e))for(const s of this.outletsByName.getValuesForKey(e))this.disconnectOutlet(s,t,e)}updateSelectorObserverForOutlet(e){const t=this.selectorObserverMap.get(e);t&&(t.selector=this.selector(e))}setupSelectorObserverForOutlet(e){const t=this.selector(e),s=new Gn(document.body,t,this,{outletName:e});this.selectorObserverMap.set(e,s),s.start()}setupAttributeObserverForOutlet(e){const t=this.attributeNameForOutletName(e),s=new yr(this.scope.element,t,this);this.attributeObserverMap.set(e,s),s.start()}selector(e){return this.scope.outlets.getSelectorForOutletName(e)}attributeNameForOutletName(e){return this.scope.schema.outletAttributeForScope(this.identifier,e)}getOutletNameFromOutletAttributeName(e){return this.outletDefinitions.find(t=>this.attributeNameForOutletName(t)===e)}get outletDependencies(){const e=new Ae;return this.router.modules.forEach(t=>{const s=t.definition.controllerConstructor;mt(s,"outlets").forEach(n=>e.add(n,t.identifier))}),e}get outletDefinitions(){return this.outletDependencies.getKeysForValue(this.identifier)}get dependentControllerIdentifiers(){return this.outletDependencies.getValuesForKey(this.identifier)}get dependentContexts(){const e=this.dependentControllerIdentifiers;return this.router.contexts.filter(t=>e.includes(t.identifier))}hasOutlet(e,t){return!!this.getOutlet(e,t)||!!this.getOutletFromMap(e,t)}getOutlet(e,t){return this.application.getControllerForElementAndIdentifier(e,t)}getOutletFromMap(e,t){return this.outletsByName.getValuesForKey(t).find(s=>s.element===e)}get scope(){return this.context.scope}get schema(){return this.context.schema}get identifier(){return this.context.identifier}get application(){return this.context.application}get router(){return this.application.router}}class ii{constructor(e,t){this.logDebugActivity=(s,r={})=>{const{identifier:n,controller:i,element:a}=this;r=Object.assign({identifier:n,controller:i,element:a},r),this.application.logDebugActivity(this.identifier,s,r)},this.module=e,this.scope=t,this.controller=new e.controllerConstructor(this),this.bindingObserver=new Jn(this,this.dispatcher),this.valueObserver=new ei(this,this.controller),this.targetObserver=new ti(this,this),this.outletObserver=new ni(this,this);try{this.controller.initialize(),this.logDebugActivity("initialize")}catch(s){this.handleError(s,"initializing controller")}}connect(){this.bindingObserver.start(),this.valueObserver.start(),this.targetObserver.start(),this.outletObserver.start();try{this.controller.connect(),this.logDebugActivity("connect")}catch(e){this.handleError(e,"connecting controller")}}refresh(){this.outletObserver.refresh()}disconnect(){try{this.controller.disconnect(),this.logDebugActivity("disconnect")}catch(e){this.handleError(e,"disconnecting controller")}this.outletObserver.stop(),this.targetObserver.stop(),this.valueObserver.stop(),this.bindingObserver.stop()}get application(){return this.module.application}get identifier(){return this.module.identifier}get schema(){return this.application.schema}get dispatcher(){return this.application.dispatcher}get element(){return this.scope.element}get parentElement(){return this.element.parentElement}handleError(e,t,s={}){const{identifier:r,controller:n,element:i}=this;s=Object.assign({identifier:r,controller:n,element:i},s),this.application.handleError(e,`Error ${t}`,s)}targetConnected(e,t){this.invokeControllerMethod(`${t}TargetConnected`,e)}targetDisconnected(e,t){this.invokeControllerMethod(`${t}TargetDisconnected`,e)}outletConnected(e,t,s){this.invokeControllerMethod(`${ws(s)}OutletConnected`,e,t)}outletDisconnected(e,t,s){this.invokeControllerMethod(`${ws(s)}OutletDisconnected`,e,t)}invokeControllerMethod(e,...t){const s=this.controller;typeof s[e]=="function"&&s[e](...t)}}function ai(o){return li(o,ci(o))}function li(o,e){const t=pi(o),s=di(o.prototype,e);return Object.defineProperties(t.prototype,s),t}function ci(o){return mt(o,"blessings").reduce((t,s)=>{const r=s(o);for(const n in r){const i=t[n]||{};t[n]=Object.assign(i,r[n])}return t},{})}function di(o,e){return ui(e).reduce((t,s)=>{const r=hi(o,e,s);return r&&Object.assign(t,{[s]:r}),t},{})}function hi(o,e,t){const s=Object.getOwnPropertyDescriptor(o,t);if(!(s&&"value"in s)){const n=Object.getOwnPropertyDescriptor(e,t).value;return s&&(n.get=s.get||n.get,n.set=s.set||n.set),n}}const ui=typeof Object.getOwnPropertySymbols=="function"?o=>[...Object.getOwnPropertyNames(o),...Object.getOwnPropertySymbols(o)]:Object.getOwnPropertyNames,pi=(()=>{function o(t){function s(){return Reflect.construct(t,arguments,new.target)}return s.prototype=Object.create(t.prototype,{constructor:{value:s}}),Reflect.setPrototypeOf(s,t),s}function e(){const s=o(function(){this.a.call(this)});return s.prototype.a=function(){},new s}try{return e(),o}catch{return s=>class extends s{}}})();function gi(o){return{identifier:o.identifier,controllerConstructor:ai(o.controllerConstructor)}}class fi{constructor(e,t){this.application=e,this.definition=gi(t),this.contextsByScope=new WeakMap,this.connectedContexts=new Set}get identifier(){return this.definition.identifier}get controllerConstructor(){return this.definition.controllerConstructor}get contexts(){return Array.from(this.connectedContexts)}connectContextForScope(e){const t=this.fetchContextForScope(e);this.connectedContexts.add(t),t.connect()}disconnectContextForScope(e){const t=this.contextsByScope.get(e);t&&(this.connectedContexts.delete(t),t.disconnect())}fetchContextForScope(e){let t=this.contextsByScope.get(e);return t||(t=new ii(this,e),this.contextsByScope.set(e,t)),t}}class vi{constructor(e){this.scope=e}has(e){return this.data.has(this.getDataKey(e))}get(e){return this.getAll(e)[0]}getAll(e){const t=this.data.get(this.getDataKey(e))||"";return _n(t)}getAttributeName(e){return this.data.getAttributeNameForKey(this.getDataKey(e))}getDataKey(e){return`${e}-class`}get data(){return this.scope.data}}class mi{constructor(e){this.scope=e}get element(){return this.scope.element}get identifier(){return this.scope.identifier}get(e){const t=this.getAttributeNameForKey(e);return this.element.getAttribute(t)}set(e,t){const s=this.getAttributeNameForKey(e);return this.element.setAttribute(s,t),this.get(e)}has(e){const t=this.getAttributeNameForKey(e);return this.element.hasAttribute(t)}delete(e){if(this.has(e)){const t=this.getAttributeNameForKey(e);return this.element.removeAttribute(t),!0}else return!1}getAttributeNameForKey(e){return`data-${this.identifier}-${wr(e)}`}}class bi{constructor(e){this.warnedKeysByObject=new WeakMap,this.logger=e}warn(e,t,s){let r=this.warnedKeysByObject.get(e);r||(r=new Set,this.warnedKeysByObject.set(e,r)),r.has(t)||(r.add(t),this.logger.warn(s,e))}}function ys(o,e){return`[${o}~="${e}"]`}class wi{constructor(e){this.scope=e}get element(){return this.scope.element}get identifier(){return this.scope.identifier}get schema(){return this.scope.schema}has(e){return this.find(e)!=null}find(...e){return e.reduce((t,s)=>t||this.findTarget(s)||this.findLegacyTarget(s),void 0)}findAll(...e){return e.reduce((t,s)=>[...t,...this.findAllTargets(s),...this.findAllLegacyTargets(s)],[])}findTarget(e){const t=this.getSelectorForTargetName(e);return this.scope.findElement(t)}findAllTargets(e){const t=this.getSelectorForTargetName(e);return this.scope.findAllElements(t)}getSelectorForTargetName(e){const t=this.schema.targetAttributeForScope(this.identifier);return ys(t,e)}findLegacyTarget(e){const t=this.getLegacySelectorForTargetName(e);return this.deprecate(this.scope.findElement(t),e)}findAllLegacyTargets(e){const t=this.getLegacySelectorForTargetName(e);return this.scope.findAllElements(t).map(s=>this.deprecate(s,e))}getLegacySelectorForTargetName(e){const t=`${this.identifier}.${e}`;return ys(this.schema.targetAttribute,t)}deprecate(e,t){if(e){const{identifier:s}=this,r=this.schema.targetAttribute,n=this.schema.targetAttributeForScope(s);this.guide.warn(e,`target:${t}`,`Please replace ${r}="${s}.${t}" with ${n}="${t}". The ${r} attribute is deprecated and will be removed in a future version of Stimulus.`)}return e}get guide(){return this.scope.guide}}class ki{constructor(e,t){this.scope=e,this.controllerElement=t}get element(){return this.scope.element}get identifier(){return this.scope.identifier}get schema(){return this.scope.schema}has(e){return this.find(e)!=null}find(...e){return e.reduce((t,s)=>t||this.findOutlet(s),void 0)}findAll(...e){return e.reduce((t,s)=>[...t,...this.findAllOutlets(s)],[])}getSelectorForOutletName(e){const t=this.schema.outletAttributeForScope(this.identifier,e);return this.controllerElement.getAttribute(t)}findOutlet(e){const t=this.getSelectorForOutletName(e);if(t)return this.findElement(t,e)}findAllOutlets(e){const t=this.getSelectorForOutletName(e);return t?this.findAllElements(t,e):[]}findElement(e,t){return this.scope.queryElements(e).filter(r=>this.matchesElement(r,e,t))[0]}findAllElements(e,t){return this.scope.queryElements(e).filter(r=>this.matchesElement(r,e,t))}matchesElement(e,t,s){const r=e.getAttribute(this.scope.schema.controllerAttribute)||"";return e.matches(t)&&r.split(" ").includes(s)}}class Rs{constructor(e,t,s,r){this.targets=new wi(this),this.classes=new vi(this),this.data=new mi(this),this.containsElement=n=>n.closest(this.controllerSelector)===this.element,this.schema=e,this.element=t,this.identifier=s,this.guide=new bi(r),this.outlets=new ki(this.documentScope,t)}findElement(e){return this.element.matches(e)?this.element:this.queryElements(e).find(this.containsElement)}findAllElements(e){return[...this.element.matches(e)?[this.element]:[],...this.queryElements(e).filter(this.containsElement)]}queryElements(e){return Array.from(this.element.querySelectorAll(e))}get controllerSelector(){return ys(this.schema.controllerAttribute,this.identifier)}get isDocumentScope(){return this.element===document.documentElement}get documentScope(){return this.isDocumentScope?this:new Rs(this.schema,document.documentElement,this.identifier,this.guide.logger)}}class yi{constructor(e,t,s){this.element=e,this.schema=t,this.delegate=s,this.valueListObserver=new Sr(this.element,this.controllerAttribute,this),this.scopesByIdentifierByElement=new WeakMap,this.scopeReferenceCounts=new WeakMap}start(){this.valueListObserver.start()}stop(){this.valueListObserver.stop()}get controllerAttribute(){return this.schema.controllerAttribute}parseValueForToken(e){const{element:t,content:s}=e;return this.parseValueForElementAndIdentifier(t,s)}parseValueForElementAndIdentifier(e,t){const s=this.fetchScopesByIdentifierForElement(e);let r=s.get(t);return r||(r=this.delegate.createScopeForElementAndIdentifier(e,t),s.set(t,r)),r}elementMatchedValue(e,t){const s=(this.scopeReferenceCounts.get(t)||0)+1;this.scopeReferenceCounts.set(t,s),s==1&&this.delegate.scopeConnected(t)}elementUnmatchedValue(e,t){const s=this.scopeReferenceCounts.get(t);s&&(this.scopeReferenceCounts.set(t,s-1),s==1&&this.delegate.scopeDisconnected(t))}fetchScopesByIdentifierForElement(e){let t=this.scopesByIdentifierByElement.get(e);return t||(t=new Map,this.scopesByIdentifierByElement.set(e,t)),t}}class $i{constructor(e){this.application=e,this.scopeObserver=new yi(this.element,this.schema,this),this.scopesByIdentifier=new Ae,this.modulesByIdentifier=new Map}get element(){return this.application.element}get schema(){return this.application.schema}get logger(){return this.application.logger}get controllerAttribute(){return this.schema.controllerAttribute}get modules(){return Array.from(this.modulesByIdentifier.values())}get contexts(){return this.modules.reduce((e,t)=>e.concat(t.contexts),[])}start(){this.scopeObserver.start()}stop(){this.scopeObserver.stop()}loadDefinition(e){this.unloadIdentifier(e.identifier);const t=new fi(this.application,e);this.connectModule(t);const s=e.controllerConstructor.afterLoad;s&&s.call(e.controllerConstructor,e.identifier,this.application)}unloadIdentifier(e){const t=this.modulesByIdentifier.get(e);t&&this.disconnectModule(t)}getContextForElementAndIdentifier(e,t){const s=this.modulesByIdentifier.get(t);if(s)return s.contexts.find(r=>r.element==e)}proposeToConnectScopeForElementAndIdentifier(e,t){const s=this.scopeObserver.parseValueForElementAndIdentifier(e,t);s?this.scopeObserver.elementMatchedValue(s.element,s):console.error(`Couldn't find or create scope for identifier: "${t}" and element:`,e)}handleError(e,t,s){this.application.handleError(e,t,s)}createScopeForElementAndIdentifier(e,t){return new Rs(this.schema,e,t,this.logger)}scopeConnected(e){this.scopesByIdentifier.add(e.identifier,e);const t=this.modulesByIdentifier.get(e.identifier);t&&t.connectContextForScope(e)}scopeDisconnected(e){this.scopesByIdentifier.delete(e.identifier,e);const t=this.modulesByIdentifier.get(e.identifier);t&&t.disconnectContextForScope(e)}connectModule(e){this.modulesByIdentifier.set(e.identifier,e),this.scopesByIdentifier.getValuesForKey(e.identifier).forEach(s=>e.connectContextForScope(s))}disconnectModule(e){this.modulesByIdentifier.delete(e.identifier),this.scopesByIdentifier.getValuesForKey(e.identifier).forEach(s=>e.disconnectContextForScope(s))}}const xi={controllerAttribute:"data-controller",actionAttribute:"data-action",targetAttribute:"data-target",targetAttributeForScope:o=>`data-${o}-target`,outletAttributeForScope:(o,e)=>`data-${o}-${e}-outlet`,keyMappings:Object.assign(Object.assign({enter:"Enter",tab:"Tab",esc:"Escape",space:" ",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",home:"Home",end:"End",page_up:"PageUp",page_down:"PageDown"},vo("abcdefghijklmnopqrstuvwxyz".split("").map(o=>[o,o]))),vo("0123456789".split("").map(o=>[o,o])))};function vo(o){return o.reduce((e,[t,s])=>Object.assign(Object.assign({},e),{[t]:s}),{})}class Si{constructor(e=document.documentElement,t=xi){this.logger=console,this.debug=!1,this.logDebugActivity=(s,r,n={})=>{this.debug&&this.logFormattedMessage(s,r,n)},this.element=e,this.schema=t,this.dispatcher=new In(this),this.router=new $i(this),this.actionDescriptorFilters=Object.assign({},zn)}static start(e,t){const s=new this(e,t);return s.start(),s}async start(){await Ci(),this.logDebugActivity("application","starting"),this.dispatcher.start(),this.router.start(),this.logDebugActivity("application","start")}stop(){this.logDebugActivity("application","stopping"),this.dispatcher.stop(),this.router.stop(),this.logDebugActivity("application","stop")}register(e,t){this.load({identifier:e,controllerConstructor:t})}registerActionOption(e,t){this.actionDescriptorFilters[e]=t}load(e,...t){(Array.isArray(e)?e:[e,...t]).forEach(r=>{r.controllerConstructor.shouldLoad&&this.router.loadDefinition(r)})}unload(e,...t){(Array.isArray(e)?e:[e,...t]).forEach(r=>this.router.unloadIdentifier(r))}get controllers(){return this.router.contexts.map(e=>e.controller)}getControllerForElementAndIdentifier(e,t){const s=this.router.getContextForElementAndIdentifier(e,t);return s?s.controller:null}handleError(e,t,s){var r;this.logger.error(`%s

%o

%o`,t,e,s),(r=window.onerror)===null||r===void 0||r.call(window,t,"",0,0,e)}logFormattedMessage(e,t,s={}){s=Object.assign({application:this},s),this.logger.groupCollapsed(`${e} #${t}`),this.logger.log("details:",Object.assign({},s)),this.logger.groupEnd()}}function Ci(){return new Promise(o=>{document.readyState=="loading"?document.addEventListener("DOMContentLoaded",()=>o()):o()})}function Ei(o){return mt(o,"classes").reduce((t,s)=>Object.assign(t,Ai(s)),{})}function Ai(o){return{[`${o}Class`]:{get(){const{classes:e}=this;if(e.has(o))return e.get(o);{const t=e.getAttributeName(o);throw new Error(`Missing attribute "${t}"`)}}},[`${o}Classes`]:{get(){return this.classes.getAll(o)}},[`has${vt(o)}Class`]:{get(){return this.classes.has(o)}}}}function Bi(o){return mt(o,"outlets").reduce((t,s)=>Object.assign(t,Ti(s)),{})}function mo(o,e,t){return o.application.getControllerForElementAndIdentifier(e,t)}function bo(o,e,t){let s=mo(o,e,t);if(s||(o.application.router.proposeToConnectScopeForElementAndIdentifier(e,t),s=mo(o,e,t),s))return s}function Ti(o){const e=ws(o);return{[`${e}Outlet`]:{get(){const t=this.outlets.find(o),s=this.outlets.getSelectorForOutletName(o);if(t){const r=bo(this,t,o);if(r)return r;throw new Error(`The provided outlet element is missing an outlet controller "${o}" instance for host controller "${this.identifier}"`)}throw new Error(`Missing outlet element "${o}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${s}".`)}},[`${e}Outlets`]:{get(){const t=this.outlets.findAll(o);return t.length>0?t.map(s=>{const r=bo(this,s,o);if(r)return r;console.warn(`The provided outlet element is missing an outlet controller "${o}" instance for host controller "${this.identifier}"`,s)}).filter(s=>s):[]}},[`${e}OutletElement`]:{get(){const t=this.outlets.find(o),s=this.outlets.getSelectorForOutletName(o);if(t)return t;throw new Error(`Missing outlet element "${o}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${s}".`)}},[`${e}OutletElements`]:{get(){return this.outlets.findAll(o)}},[`has${vt(e)}Outlet`]:{get(){return this.outlets.has(o)}}}}function Mi(o){return mt(o,"targets").reduce((t,s)=>Object.assign(t,Oi(s)),{})}function Oi(o){return{[`${o}Target`]:{get(){const e=this.targets.find(o);if(e)return e;throw new Error(`Missing target element "${o}" for "${this.identifier}" controller`)}},[`${o}Targets`]:{get(){return this.targets.findAll(o)}},[`has${vt(o)}Target`]:{get(){return this.targets.has(o)}}}}function Fi(o){const e=si(o,"values"),t={valueDescriptorMap:{get(){return e.reduce((s,r)=>{const n=Er(r,this.identifier),i=this.data.getAttributeNameForKey(n.key);return Object.assign(s,{[i]:n})},{})}}};return e.reduce((s,r)=>Object.assign(s,Ii(r)),t)}function Ii(o,e){const t=Er(o,e),{key:s,name:r,reader:n,writer:i}=t;return{[r]:{get(){const a=this.data.get(s);return a!==null?n(a):t.defaultValue},set(a){a===void 0?this.data.delete(s):this.data.set(s,i(a))}},[`has${vt(r)}`]:{get(){return this.data.has(s)||t.hasCustomDefaultValue}}}}function Er([o,e],t){return Pi({controller:t,token:o,typeDefinition:e})}function Ft(o){switch(o){case Array:return"array";case Boolean:return"boolean";case Number:return"number";case Object:return"object";case String:return"string"}}function ht(o){switch(typeof o){case"boolean":return"boolean";case"number":return"number";case"string":return"string"}if(Array.isArray(o))return"array";if(Object.prototype.toString.call(o)==="[object Object]")return"object"}function zi(o){const{controller:e,token:t,typeObject:s}=o,r=po(s.type),n=po(s.default),i=r&&n,a=r&&!n,c=!r&&n,u=Ft(s.type),l=ht(o.typeObject.default);if(a)return u;if(c)return l;if(u!==l){const g=e?`${e}.${t}`:t;throw new Error(`The specified default value for the Stimulus Value "${g}" must match the defined type "${u}". The provided default value of "${s.default}" is of type "${l}".`)}if(i)return u}function Ni(o){const{controller:e,token:t,typeDefinition:s}=o,n=zi({controller:e,token:t,typeObject:s}),i=ht(s),a=Ft(s),c=n||i||a;if(c)return c;const u=e?`${e}.${s}`:t;throw new Error(`Unknown value type "${u}" for "${t}" value`)}function Li(o){const e=Ft(o);if(e)return wo[e];const t=ks(o,"default"),s=ks(o,"type"),r=o;if(t)return r.default;if(s){const{type:n}=r,i=Ft(n);if(i)return wo[i]}return o}function Pi(o){const{token:e,typeDefinition:t}=o,s=`${wr(e)}-value`,r=Ni(o);return{type:r,key:s,name:Hs(s),get defaultValue(){return Li(t)},get hasCustomDefaultValue(){return ht(t)!==void 0},reader:Di[r],writer:ko[r]||ko.default}}const wo={get array(){return[]},boolean:!1,number:0,get object(){return{}},string:""},Di={array(o){const e=JSON.parse(o);if(!Array.isArray(e))throw new TypeError(`expected value of type "array" but instead got value "${o}" of type "${ht(e)}"`);return e},boolean(o){return!(o=="0"||String(o).toLowerCase()=="false")},number(o){return Number(o.replace(/_/g,""))},object(o){const e=JSON.parse(o);if(e===null||typeof e!="object"||Array.isArray(e))throw new TypeError(`expected value of type "object" but instead got value "${o}" of type "${ht(e)}"`);return e},string(o){return o}},ko={default:Vi,array:yo,object:yo};function yo(o){return JSON.stringify(o)}function Vi(o){return`${o}`}class D{constructor(e){this.context=e}static get shouldLoad(){return!0}static afterLoad(e,t){}get application(){return this.context.application}get scope(){return this.context.scope}get element(){return this.scope.element}get identifier(){return this.scope.identifier}get targets(){return this.scope.targets}get outlets(){return this.scope.outlets}get classes(){return this.scope.classes}get data(){return this.scope.data}initialize(){}connect(){}disconnect(){}dispatch(e,{target:t=this.element,detail:s={},prefix:r=this.identifier,bubbles:n=!0,cancelable:i=!0}={}){const a=r?`${r}:${e}`:e,c=new CustomEvent(a,{detail:s,bubbles:n,cancelable:i});return t.dispatchEvent(c),c}}D.blessings=[Ei,Mi,Fi,Bi];D.targets=[];D.outlets=[];D.values={};const _i=`
    <div class="side-align" data-controller="home">
        <h2>Latest Tracks</h2>
        <div data-home-target="latest" class="track-carousel">
        <!-- Skeleton -->
        <div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div><div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div><div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div><div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div>
        </div>
        
        <h2>Recommended Tracks</h2>
        <div data-home-target="recommended" class="track-list">
        <!-- Skeleton -->
        <div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div><div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div><div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div><div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div><div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div><div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div><div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div><div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div><div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div><div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div><div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div><div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div><div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div><div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div><div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div><div class="track skeleton"><div class="track-cover skeleton-load-bg"></div><div class="track-metadata"><div class="avatar skeleton-load-bg"></div><div class="track-info"><span class="skeleton-load-bg text">wwwwwwwwwww</span><span class="skeleton-load-bg text">wwwwwww</span></div></div></div>
        </div>
    </div>
`,Hi=`
    <div class="sideAlign userpage" data-controller="user">
        <div class="userpage-account">
            <div class="userpage-accountInfo">
                <fluent-avatar class="skeleton-load-bg" size="120">
                    <img
                        alt=""
                        role="presentation"
                        aria-hidden="true"
                        class="skeleton-load-fg"
                        data-global-target="skelimg"
                        data-user-target="userPfp"
                    />
                    <fluent-badge
                        slot="badge"
                        appearance="ghost"
                        color="important"
                        shape="circular"
                        size="extra-large"
                        data-user-target="userStatus"
                    >
                        <!-- Icon go here -->
                    </fluent-badge>
                </fluent-avatar>
                <div>
                    <!-- Lock colours -->
                    <fluent-text size="600" weight="semibold" nowrap="true" data-user-target="userDisplayContainer">
                        <span style="color: #FFFFFF" data-user-target="userDisplay">
                            Display Name
                        </span>
                    </fluent-text>
                    <fluent-text size="400" weight="semibold" nowrap="true">
                        <span style="color: #D6D6D6" data-user-target="userHandle">
                            @username
                        </span>
                    </fluent-text>
                    <fluent-text size="200" weight="regular" nowrap="true">
                        <p class="userpage-description" data-user-target="userDescription">
                            Description
                        </p>
                    </fluent-text>
                    <div class="userpage-badges" data-user-target="userBadges">
                    </div>
                </div>
            </div>
            <img alt="User banner"
                role="presentation"
                aria-hidden="true"
                class="skeleton-load-fg"
                data-global-target="skelimg"
                data-user-target="userBanner" />
        </div>
        <div class="track-list" data-user-target="trackList"></div>
    </div>
`,Ri=`
    <div class="trackpage" data-controller="track">
        <div>
            <div class="trackpage-info">
                <div class="track-cover skeleton-load-bg">
                    <img
                        data-global-target="skelimg"
                        class="skeleton-load-fg"
                        role="presentation"
                        alt=""
                        loading="eager"
                        fetchPriority="high"
                        width="250"
                        height="250"
                        data-track-target="trackCover"
                    />
                </div>
                <div class="trackpage-info-content">
                    <div class="trackpage-basic-info">
                        <h1 data-track-target="trackLoading" class="trackpage-name skeleton-load-bg text">
                            <span data-track-target="trackName">Track name</span>
                            <div>
                                <div class="icon" hidden data-track-target="explicitIcon">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.5 6C2.5 4.067 4.067 2.5 6 2.5H14C15.933 2.5 17.5 4.067 17.5 6V14C17.5 15.933 15.933 17.5 14 17.5H6C4.067 17.5 2.5 15.933 2.5 14V6ZM13.5 13.3527C13.5 12.7191 12.9864 12.2055 12.3527 12.2055H9.54047C9.26433 12.2055 9.04047 11.9816 9.04047 11.7055V11.599C9.04047 11.3229 9.26433 11.099 9.54047 11.099H11.8201C12.4537 11.099 12.9674 10.5854 12.9674 9.95174C12.9674 9.31812 12.4537 8.80447 11.8201 8.80447H9.54047C9.26755 8.80447 9.04047 8.57888 9.04047 8.2995C9.04047 8.02013 9.26755 7.79454 9.54047 7.79454H12.1386C12.7723 7.79454 13.2859 7.28089 13.2859 6.64727C13.2859 6.01365 12.7723 5.5 12.1386 5.5H8C7.17157 5.5 6.5 6.17157 6.5 7V13C6.5 13.8284 7.17157 14.5 8 14.5H12.3527C12.9864 14.5 13.5 13.9864 13.5 13.3527Z"
                                            fill="#242424"
                                        />
                                    </svg>
                                </div>
                                <div class="icon" hidden data-track-target="aiMusicIcon">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.0718 10.9992V11.4968C10.9388 11.4498 10.7958 11.4243 10.6468 11.4243C9.94263 11.4243 9.37181 11.9951 9.37181 12.6992C9.37181 14.8393 10.8093 16.6427 12.7717 17.1979V17.3741C12.7717 17.4025 12.7726 17.4308 12.7745 17.4588C11.8949 17.687 10.9017 17.8 9.79679 17.8C7.34079 17.8 5.43785 17.2419 4.10945 16.0998C3.40514 15.4943 3 14.6117 3 13.6828V12.9117C3 11.8554 3.85623 10.9992 4.91244 10.9992H11.0718Z"
                                            fill="#242424"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M15.3216 7.03569C14.9352 6.85213 14.5029 6.74941 14.0467 6.74941C12.4037 6.74941 11.0718 8.08133 11.0718 9.72432V9.72821H6.1844C5.12818 9.72821 4.27195 8.87198 4.27195 7.81577V3.98698C4.27195 2.93076 5.12818 2.07453 6.1844 2.07453L9.15892 2.0741L9.15959 1.43747C9.15959 1.11474 9.39942 0.848019 9.71057 0.805807L9.79707 0.799988C10.1198 0.799988 10.3865 1.03981 10.4287 1.35097L10.4346 1.43747L10.4339 2.0741L13.4092 2.07453C14.4654 2.07453 15.3216 2.93076 15.3216 3.98698V7.03569ZM6.82188 5.68632C6.82188 5.09987 7.29729 4.62446 7.88374 4.62446C8.4702 4.62446 8.94561 5.09987 8.94561 5.68632C8.94561 6.27277 8.4702 6.74819 7.88374 6.74819C7.29729 6.74819 6.82188 6.27277 6.82188 5.68632ZM10.6406 5.68632C10.6406 5.09987 11.116 4.62446 11.7025 4.62446C12.2889 4.62446 12.7643 5.09987 12.7643 5.68632C12.7643 6.27277 12.2889 6.74819 11.7025 6.74819C11.116 6.74819 10.6406 6.27277 10.6406 5.68632Z"
                                            fill="#242424"
                                        />
                                        <path
                                            d="M14.0467 7.59937C12.8731 7.59937 11.9217 8.55074 11.9217 9.72431V12.6992C11.9217 13.8728 12.8731 14.8242 14.0467 14.8242C15.2202 14.8242 16.1716 13.8728 16.1716 12.6992V9.72431C16.1716 8.55074 15.2202 7.59937 14.0467 7.59937ZM10.6468 12.2742C10.8815 12.2742 11.0718 12.4645 11.0718 12.6992C11.0718 14.3422 12.4037 15.6741 14.0467 15.6741C15.6897 15.6741 17.0216 14.3422 17.0216 12.6992C17.0216 12.4645 17.2119 12.2742 17.4466 12.2742C17.6813 12.2742 17.8716 12.4645 17.8716 12.6992C17.8716 14.668 16.3841 16.2894 14.4717 16.5008V17.3741C14.4717 17.6088 14.2814 17.7991 14.0467 17.7991C13.812 17.7991 13.6217 17.6088 13.6217 17.3741V16.5008C11.7093 16.2894 10.2218 14.668 10.2218 12.6992C10.2218 12.4645 10.4121 12.2742 10.6468 12.2742Z"
                                            fill="#242424"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </h1>
                        <span data-track-target="trackDuration trackLoading" class="trackpage-duration skeleton-load-bg text">00:00:00</span>
                        <a data-track-target="artistLink" class="trackpage-artist" href="">
                            <div
                                data-track-target="trackLoading"
                                class="avatar skeleton-load-bg "
                                tabindex="-1"
                                ><img
                                    role="presentation"
                                    alt=""
                                    loading="eager"
                                    fetchpriority="high"
                                    class="skeleton-load-fg"
                                    data-global-target="skelimg"
                                    data-track-target="artistPfp"
                            /></div>
                            <div>
                                <span class="displayname skeleton-load-bg text" data-track-target="artistDisplay trackLoading">
                                    displayname
                                </span>
                                <span data-track-target="trackLoading" class="artist-name skeleton-load-bg text">
                                    <span data-track-target="artistUsername">@wwwwww</span>
                                    <div data-track-target="artistVerified" hidden class="icon" title="Verified"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5ZM7.35355 4.10355C7.54882 3.90829 7.54882 3.59171 7.35355 3.39645C7.15829 3.20118 6.84171 3.20118 6.64645 3.39645L4.5 5.54289L3.35355 4.39645C3.15829 4.20118 2.84171 4.20118 2.64645 4.39645C2.45118 4.59171 2.45118 4.90829 2.64645 5.10355L4.14645 6.60355C4.34171 6.79882 4.65829 6.79882 4.85355 6.60355L7.35355 4.10355Z" fill="currentColor"></path></svg></div>
                                </span>
                            </div>
                        </a>
                    </div>
                    <span data-track-target="trackDescription trackLoading" class="trackpage-description skeleton-load-bg">
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu viverra curae ullamcorper pharetra luctus faucibus natoque ultricies sollicitudin. Leo purus auctor congue dis tellus maecenas; dictum ac. Netus in et efficitur nam curabitur.
                    </span>
                    <fluent-button appearance="primary" size="large">
                        <svg slot="start" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.60846 4.61507C7.1087 4.34314 6.5 4.70491 6.5 5.27386V18.7262C6.5 19.2951 7.1087 19.6569 7.60846 19.385L19.97 12.6588C20.4921 12.3747 20.4921 11.6253 19.97 11.3412L7.60846 4.61507ZM5 5.27386C5 3.56701 6.82609 2.4817 8.32538 3.29749L20.687 10.0236C22.2531 10.8758 22.2531 13.1242 20.687 13.9764L8.32538 20.7025C6.82609 21.5183 5 20.433 5 18.7262V5.27386Z" fill="currentColor"/>
                        </svg>
                        Play
                    </fluent-button>
                </div>
            </div>
            <div class="comments-section" id="comments-section">
                <div class="comment-input-container">
                    <fluent-avatar size="36"></fluent-avatar>
                    <fluent-textarea
                        appearance="outline"
                        name="Comment input box"
                        type="text"
                        placeholder="Add a comment..."
                        auto-resize="true"
                    >
                    </fluent-textarea>
                    <fluent-button appearance="primary"
                        >Post</fluent-button
                    >
                </div>
                <fluent-spinner size="huge"></fluent-spinner>
            </div>
        </div>
        <div>
            <div
                data-track-target="moreFromArtist"
                class="more-from-author track-carousel"
                id="more-from-author"
            >
                <!-- Skeleton * 6 -->
                <div class="track skeleton">
                    <div
                        class="track-cover skeleton-load-bg"
                    ></div>
                    <div class="track-metadata">
                        <div
                            class="avatar skeleton-load-bg"
                        ></div>
                        <div class="track-info">
                            <span class="skeleton-load-bg text"
                                >wwwwwwwwwww</span
                            ><span class="skeleton-load-bg text"
                                >wwwwwww</span
                            >
                        </div>
                    </div>
                </div>
                <div class="track skeleton">
                    <div
                        class="track-cover skeleton-load-bg"
                    ></div>
                    <div class="track-metadata">
                        <div
                            class="avatar skeleton-load-bg"
                        ></div>
                        <div class="track-info">
                            <span class="skeleton-load-bg text"
                                >wwwwwwwwwww</span
                            ><span class="skeleton-load-bg text"
                                >wwwwwww</span
                            >
                        </div>
                    </div>
                </div>
                <div class="track skeleton">
                    <div
                        class="track-cover skeleton-load-bg"
                    ></div>
                    <div class="track-metadata">
                        <div
                            class="avatar skeleton-load-bg"
                        ></div>
                        <div class="track-info">
                            <span class="skeleton-load-bg text"
                                >wwwwwwwwwww</span
                            ><span class="skeleton-load-bg text"
                                >wwwwwww</span
                            >
                        </div>
                    </div>
                </div>
                <div class="track skeleton">
                    <div
                        class="track-cover skeleton-load-bg"
                    ></div>
                    <div class="track-metadata">
                        <div
                            class="avatar skeleton-load-bg"
                        ></div>
                        <div class="track-info">
                            <span class="skeleton-load-bg text"
                                >wwwwwwwwwww</span
                            ><span class="skeleton-load-bg text"
                                >wwwwwww</span
                            >
                        </div>
                    </div>
                </div>
                <div class="track skeleton">
                    <div
                        class="track-cover skeleton-load-bg"
                    ></div>
                    <div class="track-metadata">
                        <div
                            class="avatar skeleton-load-bg"
                        ></div>
                        <div class="track-info">
                            <span class="skeleton-load-bg text"
                                >wwwwwwwwwww</span
                            ><span class="skeleton-load-bg text"
                                >wwwwwww</span
                            >
                        </div>
                    </div>
                </div>
                <div class="track skeleton">
                    <div
                        class="track-cover skeleton-load-bg"
                    ></div>
                    <div class="track-metadata">
                        <div
                            class="avatar skeleton-load-bg"
                        ></div>
                        <div class="track-info">
                            <span class="skeleton-load-bg text"
                                >wwwwwwwwwww</span
                            ><span class="skeleton-load-bg text"
                                >wwwwwww</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`,ji=`
    <div class="search-results" data-controller="search">
        <div class="user-list" data-search-target="users">
            <!-- Skeleton -->
            <div class="user skeleton"
                ><div class="avatar skeleton-load-bg" tabindex="-1">
                </div>
                <div class="user-details">
                    <span class="displayname skeleton-load-bg text">wwwwwwww</span>
                    <span class="username skeleton-load-bg text"><span>wwwwww</span></span>
                </div>
            </div>
            <div class="user skeleton"
                ><div class="avatar skeleton-load-bg" tabindex="-1">
                </div>
                <div class="user-details">
                    <span class="displayname skeleton-load-bg text">wwwwwwww</span>
                    <span class="username skeleton-load-bg text"><span>wwwwww</span></span>
                </div>
            </div>
            <div class="user skeleton"
                ><div class="avatar skeleton-load-bg" tabindex="-1">
                </div>
                <div class="user-details">
                    <span class="displayname skeleton-load-bg text">wwwwwwww</span>
                    <span class="username skeleton-load-bg text"><span>wwwwww</span></span>
                </div>
            </div>
            <div class="user skeleton"
                ><div class="avatar skeleton-load-bg" tabindex="-1">
                </div>
                <div class="user-details">
                    <span class="displayname skeleton-load-bg text">wwwwwwww</span>
                    <span class="username skeleton-load-bg text"><span>wwwwww</span></span>
                </div>
            </div>
            <div class="user skeleton"
                ><div class="avatar skeleton-load-bg" tabindex="-1">
                </div>
                <div class="user-details">
                    <span class="displayname skeleton-load-bg text">wwwwwwww</span>
                    <span class="username skeleton-load-bg text"><span>wwwwww</span></span>
                </div>
            </div>
            <div class="user skeleton"
                ><div class="avatar skeleton-load-bg" tabindex="-1">
                </div>
                <div class="user-details">
                    <span class="displayname skeleton-load-bg text">wwwwwwww</span>
                    <span class="username skeleton-load-bg text"><span>wwwwww</span></span>
                </div>
            </div>

            <div class="user skeleton"
                ><div class="avatar skeleton-load-bg" tabindex="-1">
                </div>
                <div class="user-details">
                    <span class="displayname skeleton-load-bg text">wwwwwwww</span>
                    <span class="username skeleton-load-bg text"><span>wwwwww</span></span>
                </div>
            </div>
            <div class="user skeleton"
                ><div class="avatar skeleton-load-bg" tabindex="-1">
                </div>
                <div class="user-details">
                    <span class="displayname skeleton-load-bg text">wwwwwwww</span>
                    <span class="username skeleton-load-bg text"><span>wwwwww</span></span>
                </div>
            </div>
            <div class="user skeleton"
                ><div class="avatar skeleton-load-bg" tabindex="-1">
                </div>
                <div class="user-details">
                    <span class="displayname skeleton-load-bg text">wwwwwwww</span>
                    <span class="username skeleton-load-bg text"><span>wwwwww</span></span>
                </div>
            </div>
            <!-- End skeleton -->
        </div>
        <div class="track-list" data-search-target="tracks">
            <!-- Skeleton -->
            <div class="track skeleton">
                <div class="track-cover skeleton-load-bg"></div>
                <div class="track-metadata">
                    <div class="avatar skeleton-load-bg"></div>
                    <div class="track-info">
                        <span class="skeleton-load-bg text">wwwwwwwwwww</span
                        ><span class="skeleton-load-bg text">wwwwwww</span>
                    </div>
                </div>
            </div>
            <div class="track skeleton">
                <div class="track-cover skeleton-load-bg"></div>
                <div class="track-metadata">
                    <div class="avatar skeleton-load-bg"></div>
                    <div class="track-info">
                        <span class="skeleton-load-bg text">wwwwwwwwwww</span
                        ><span class="skeleton-load-bg text">wwwwwww</span>
                    </div>
                </div>
            </div>
            <div class="track skeleton">
                <div class="track-cover skeleton-load-bg"></div>
                <div class="track-metadata">
                    <div class="avatar skeleton-load-bg"></div>
                    <div class="track-info">
                        <span class="skeleton-load-bg text">wwwwwwwwwww</span
                        ><span class="skeleton-load-bg text">wwwwwww</span>
                    </div>
                </div>
            </div>
            <div class="track skeleton">
                <div class="track-cover skeleton-load-bg"></div>
                <div class="track-metadata">
                    <div class="avatar skeleton-load-bg"></div>
                    <div class="track-info">
                        <span class="skeleton-load-bg text">wwwwwwwwwww</span
                        ><span class="skeleton-load-bg text">wwwwwww</span>
                    </div>
                </div>
            </div>
            <div class="track skeleton">
                <div class="track-cover skeleton-load-bg"></div>
                <div class="track-metadata">
                    <div class="avatar skeleton-load-bg"></div>
                    <div class="track-info">
                        <span class="skeleton-load-bg text">wwwwwwwwwww</span
                        ><span class="skeleton-load-bg text">wwwwwww</span>
                    </div>
                </div>
            </div>
            <div class="track skeleton">
                <div class="track-cover skeleton-load-bg"></div>
                <div class="track-metadata">
                    <div class="avatar skeleton-load-bg"></div>
                    <div class="track-info">
                        <span class="skeleton-load-bg text">wwwwwwwwwww</span
                        ><span class="skeleton-load-bg text">wwwwwww</span>
                    </div>
                </div>
            </div>
            <div class="track skeleton">
                <div class="track-cover skeleton-load-bg"></div>
                <div class="track-metadata">
                    <div class="avatar skeleton-load-bg"></div>
                    <div class="track-info">
                        <span class="skeleton-load-bg text">wwwwwwwwwww</span
                        ><span class="skeleton-load-bg text">wwwwwww</span>
                    </div>
                </div>
            </div>
            <div class="track skeleton">
                <div class="track-cover skeleton-load-bg"></div>
                <div class="track-metadata">
                    <div class="avatar skeleton-load-bg"></div>
                    <div class="track-info">
                        <span class="skeleton-load-bg text">wwwwwwwwwww</span
                        ><span class="skeleton-load-bg text">wwwwwww</span>
                    </div>
                </div>
            </div>
            <div class="track skeleton">
                <div class="track-cover skeleton-load-bg"></div>
                <div class="track-metadata">
                    <div class="avatar skeleton-load-bg"></div>
                    <div class="track-info">
                        <span class="skeleton-load-bg text">wwwwwwwwwww</span
                        ><span class="skeleton-load-bg text">wwwwwww</span>
                    </div>
                </div>
            </div>
            <div class="track skeleton">
                <div class="track-cover skeleton-load-bg"></div>
                <div class="track-metadata">
                    <div class="avatar skeleton-load-bg"></div>
                    <div class="track-info">
                        <span class="skeleton-load-bg text">wwwwwwwwwww</span
                        ><span class="skeleton-load-bg text">wwwwwww</span>
                    </div>
                </div>
            </div>
            <div class="track skeleton">
                <div class="track-cover skeleton-load-bg"></div>
                <div class="track-metadata">
                    <div class="avatar skeleton-load-bg"></div>
                    <div class="track-info">
                        <span class="skeleton-load-bg text">wwwwwwwwwww</span
                        ><span class="skeleton-load-bg text">wwwwwww</span>
                    </div>
                </div>
            </div>
            <div class="track skeleton">
                <div class="track-cover skeleton-load-bg"></div>
                <div class="track-metadata">
                    <div class="avatar skeleton-load-bg"></div>
                    <div class="track-info">
                        <span class="skeleton-load-bg text">wwwwwwwwwww</span
                        ><span class="skeleton-load-bg text">wwwwwww</span>
                    </div>
                </div>
            </div>
            <div class="track skeleton">
                <div class="track-cover skeleton-load-bg"></div>
                <div class="track-metadata">
                    <div class="avatar skeleton-load-bg"></div>
                    <div class="track-info">
                        <span class="skeleton-load-bg text">wwwwwwwwwww</span
                        ><span class="skeleton-load-bg text">wwwwwww</span>
                    </div>
                </div>
            </div>
            <div class="track skeleton">
                <div class="track-cover skeleton-load-bg"></div>
                <div class="track-metadata">
                    <div class="avatar skeleton-load-bg"></div>
                    <div class="track-info">
                        <span class="skeleton-load-bg text">wwwwwwwwwww</span
                        ><span class="skeleton-load-bg text">wwwwwww</span>
                    </div>
                </div>
            </div>
            <!-- End skeleton -->
        </div>
    </div>
        `,qi=`
    <div class="middle-float">
        <h2>Account Balance</h2>
        <p><strong>Current Clipcoins:</strong> <span id="current-balance"></span> coins</p>
        <p><strong>Daily Clipcoins Available In:</strong> <span id="next-balance-time"></span></p>
        <fieldset id="membership-status-field">
            <legend>Clippsly Plus Membership</legend>
            <p><strong>Status:</strong> <span id="membership-status"></span></p>
            <p id="membership-details" style="display: none;">
                <strong>Started:</strong> <span id="membership-started"></span><br>
                <strong>Ending In:</strong> <span id="membership-ending"></span>
            </p>
            <fluent-button appearance="primary" id="membership-button">Button</fluent-button>
        </fieldset>

        <div class="container my-5">
            <h3 class="mb-4">FAQ</h3>

            <!-- Clipcoins Section -->
            <fluent-accordion expand-mode="single">
                <fluent-accordion-item>
                    <span slot="heading">
                        What are Clipcoins?
                    </span>
                    Clipcoins are virtual currency used on Clippsly. They can be earned through daily logins or receiving comments on your tracks. These coins are essential for various features within the platform.
                </fluent-accordion-item>

                <fluent-accordion-item>
                    <span slot="heading">
                        How can I get Clipcoins?
                    </span>
                    You can earn Clipcoins daily by logging in or by receiving comments on your tracks. They are awarded automatically, and you can collect them every day!
                </fluent-accordion-item>

                <fluent-accordion-item>
                    <span slot="heading">
                        What can I use Clipcoins for?
                    </span>
                    Clipcoins can be used for uploading tracks, commenting on othersâ€™ tracks, changing your username, or activating Clippsly Plus membership to unlock additional benefits.
                </fluent-accordion-item>

                <!-- Clippsly Plus Section -->
                <fluent-accordion-item>
                    <span slot="heading">
                        What is Clippsly Plus?
                    </span>
                    Clippsly Plus is a premium membership program that you can unlock with your Clipcoins. It offers several benefits, such as increased daily Clipcoin rewards and reduced costs for uploading tracks.
                </fluent-accordion-item>

                <fluent-accordion-item>
                    <span slot="heading">
                        How do I get a Clippsly Plus membership?
                    </span>
                    Clippsly Plus is available for redemption using your Clipcoins. To activate it, simply use your earned coins, and you'll enjoy the perks of the membership.
                </fluent-accordion-item>

                <fluent-accordion-item>
                    <span slot="heading">
                        What are the perks of Clippsly Plus?
                    </span>
                    With Clippsly Plus, you will receive a daily increase in Clipcoin rewards (from 20 to 25 coins). The cost for uploading tracks is reduced from 20 to 15 coins, and you can comment freely without using your Clipcoins, and the Plus badge on your profile.
                </fluent-accordion-item>
            </fluent-accordion>
        </div>`,Ui=`
        <div class="middle-float error-page" data-controller="error">
            <h1 data-error-target="name">Error ---: </h1>
            <p data-error-target="description"></p>
            <div class="button-bar">
                <fluent-button
                    appearance=""
                    data-action="click->error#navigatePrevPage">
                    Try again
                </fluent-button>
                <fluent-anchor-button
                    appearance="primary"
                    href="/"
                >
                    Back to Home
                </fluent-anchor-button>
            </div>
        </div>
    `,Re=class Re extends D{connect(){Re.loadPage(location.pathname+location.search),document.addEventListener("click",this.documentClick),window.addEventListener("popstate",e=>{e.preventDefault(),Re.loadPage(location.pathname+location.search)})}documentClick(e){if(!e.target)return!1;const t=e.target.closest("a");if(!t)return!1;e.preventDefault();const s=t.getAttribute("href")||"";if(s==null)return;t.getAttribute("data-global-target")=="open-external"?window.open(s):Re.loadPage(s)}skelimgTargetConnected(e){const t=e.parentElement;t&&(e.addEventListener("load",()=>{e.classList.add("loaded"),t.classList.remove("skeleton-load-bg")}),e.addEventListener("error",()=>{e.classList.remove("loaded"),t.classList.add("skeleton-load-error"),t.classList.remove("skeleton-load-bg")}))}openExternalTargetConnected(e){const t=e.getAttribute("href")||"";t&&e.addEventListener("click",()=>{window.open(t)})}removeonloadTargetConnected(e){e.remove()}static loadPage(e){var t,s,r,n;if(console.log(e),history.pushState(null,"",e),e==="/")x.setDocTitle(x.pageNames.home),De.innerHTML=_i;else if(e.startsWith("/users/")){De.innerHTML=Hi;const i=e.split("/users/")[1];(t=document.querySelector(".userpage"))==null||t.setAttribute("data-user-id-value",i)}else if(e.startsWith("/track/")){De.innerHTML=Ri;const i=e.split("/track/")[1];(s=document.querySelector(".trackpage"))==null||s.setAttribute("data-track-id-value",i)}else if(e.startsWith("/search")){De.innerHTML=ji;const i=e.split("?query=")[1];(r=document.querySelector(".search-results"))==null||r.setAttribute("data-search-query-value",i)}else if(e.startsWith("/error")){De.innerHTML=Ui;const i=e.split("?code=")[1];(n=document.querySelector(".error-page"))==null||n.setAttribute("data-error-code-value",i)}else e.startsWith("/upload")||(e.startsWith("/balance")?De.innerHTML=qi:e.startsWith("/cliptivity")||e==="/login"||e.startsWith("/login")||e.startsWith("/settings")||e==="/register"||e.startsWith("/register")||e.startsWith("/not-approved"))}};O(Re,"targets",["skelimg","removeonload","openExternal"]);let me=Re;const De=document.getElementById("app"),Ki="https://api.clippsly.com/endpoints/functions/home-page";class Ar extends D{async connect(){try{const e=await fetch(Ki).then(t=>t.json());if(this.latestTarget){this.latestTarget.innerHTML="";let t=0;e.latestTracks.forEach(s=>{t++,t>6?this.latestTarget.append(x.createTrack(s,!1)):this.latestTarget.append(x.createTrack(s,!0))})}if(this.recommendedTarget){this.recommendedTarget.innerHTML="";let t=0;e.randomTracks.forEach(s=>{t++,t>6?this.recommendedTarget.append(x.createTrack(s,!1)):this.recommendedTarget.append(x.createTrack(s,!0))})}}catch(e){console.error(e)}}}O(Ar,"targets",["latest","recommended"]);const rt=x.getCookie("CLIPSESSIONTOKEN"),Wi="https://api.clippsly.com/endpoints/data/current-session",Gi={Authorization:`Bearer ${rt}`};class Br extends D{async connect(){if(this.pfpTarget.style.cursor="pointer",this.pfpTarget.title=rt&&"Account and more"||"Log in and more",!rt){this.handleInvalidSession();return}const e=await fetch(Wi,{method:"GET",headers:Gi}).then(t=>{if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return t.json()}).catch(()=>{this.handleInvalidSession()});this.pfpImgTarget.src=e.avatar||"https://cdn.clippsly.com/brand_assets/icons/default-artist.png",$o(rt),setInterval(()=>{$o(rt)},4*60*1e3)}handleInvalidSession(){this.pfpImgTarget.src="https://cdn.clippsly.com/brand_assets/icons/default-artist.png"}}O(Br,"targets",["pfp","pfpImg","pfpContainer"]);async function $o(o){const e="https://api.clippsly.com/endpoints/data/pulse",t={Authorization:`Bearer ${o}`};try{const s=await fetch(e,{method:"POST",headers:t});if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`)}catch(s){console.error("Error pinging the server:",s)}}const Xi=x.getCookie("CLIPSESSIONTOKEN"),Zi="https://api.clippsly.com/endpoints/functions/search-results?query=";class $s extends D{async connect(){const e=await fetch(Zi+this.queryValue,{method:"GET",headers:{Authorization:`Bearer ${Xi}`}}).then(t=>t.json()).catch(t=>me.loadPage("/error?code="+(t.status|404)));e.users||e.tracks||me.loadPage("/error?code=404"),this.usersTarget.innerHTML="",this.tracksTarget.innerHTML="";for(let t=0;t<e.users.length;t++){const s=e.users[t],r=document.createElement("a");r.classList.add("user"),r.href=`/users/${s.authorUsername}`;const n=document.createElement("div");n.classList.add("avatar"),n.classList.add("skeleton-load-bg"),n.tabIndex=-1;const i=document.createElement("img");i.role="presentation",i.alt="",i.src=s.authorAvatar||"https://cdn.clippsly.com/brand_assets/icons/default-artist.png",i.loading="eager",i.fetchPriority="low",i.setAttribute("data-global-target","skelimg"),i.classList.add("skeleton-load-fg"),n.append(i);const a=document.createElement("div");a.classList.add("user-details");const c=document.createElement("span");c.classList.add("displayname"),c.textContent=s.authorDisplay;const u=document.createElement("span");u.classList.add("username");const l=document.createElement("span");if(l.textContent=s.authorUsername,s.authorVerified){const g=document.createElement("div");g.classList.add("icon"),g.title="Verified",g.innerHTML=x.verifiedBadgeHTML,u.append(g)}u.append(l),a.append(c,u),r.append(n,a),this.usersTarget.append(r)}for(let t=0;t<e.tracks.length;t++){const s=e.tracks[t];this.tracksTarget.append(x.createTrack({ID:s.releaseID,Title:s.releaseName,Artist:0,Genre:s.releaseGenre||"Unknown",ArtCover:s.additionalData.releaseCoverArt,Audio:s.additionalData.audioFile,Description:s.additionalData.releaseDescription,commentsOff:s.commentsOff,isModerated:!1,isExplicit:!1,isProtected:!1,isUnderReview:!1,isArtificiallyGenerated:!1,audio_duration:s.additionalData.audioDuration,releaseDate:s.additionalData.premiereDate,releaseAuthor:s.releaseAuthor},!0))}}email(){console.log("IMPLEMENT ME!")}}O($s,"targets",["users","tracks"]),O($s,"values",{query:String});class Tr extends D{connect(){const e=(location.pathname+location.search).split("?query=")[1];e&&(this.queryTarget.value=e)}search(){location.href="/search?query="+this.query}showAutocomplete(){this.results.showPopover()}hideAutocomplete(){this.results.hidePopover()}async autocomplete(){const e=this.query;if(e.length>0){const t="https://api.clippsly.com/endpoints/functions/search-suggestions?query="+e,s=await fetch(t,{method:"GET"});if(!s.ok)throw new Error(`Response status: ${s.status}`);const r=await s.json();this.showAutocomplete(),this.results.innerHTML="",r.forEach(i=>{const a=document.createElement("a");a.href=""+i,a.classList.add("menu-item-hyperlink");const c=document.createElement("fluent-menu-item");c.setAttribute("data-action","click->searchbar#searchAutocompleteQuery"),c.textContent=i,a.append(c),this.results.append(a)})}else this.results.innerHTML=""}async searchAutocompleteQuery(e){const t=e.target.textContent;console.log(t),this.queryTarget.value=t||"",window.location.assign("/search?query="+t),await this.autocomplete(),this.hideAutocomplete()}get query(){return this.queryTarget.value}get results(){return this.resultsTarget}}O(Tr,"targets",["query","results"]);const Qi={400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found",500:"Internal Server",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout"},Yi={400:"The server could not understand the request due to invalid syntax.",401:"The client must authenticate itself to get the requested response.",403:"The client does not have access rights to the content.",404:"The server can not find the requested resource.",500:"The server has encountered a situation it doesn't know how to handle.",502:"The server was acting as a gateway or proxy and received an invalid response from the upstream server.",503:"The server is not ready to handle the request.",504:"The server was acting as a gateway or proxy and did not receive a timely response from the upstream server."};class xs extends D{async connect(){const e=Qi[this.codeValue]||"Unknown Error",t=Yi[this.codeValue]||"An unknown error occured.";x.setDocTitle(x.pageNames.error.concat(" ",this.codeValue.toString()," ",e)),this.nameTarget.textContent=`Error ${this.codeValue}: ${e}`,this.descriptionTarget.textContent=t}navigatePrevPage(){history.back()}}O(xs,"targets",["name","description"]),O(xs,"values",{code:Number});function h(o,e,t,s){var r=arguments.length,n=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,s);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(n=(r<3?i(n):r>3?i(e,t,n):i(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n}let Bt;const xo="fast-kernel";try{if(document.currentScript)Bt=document.currentScript.getAttribute(xo);else{const o=document.getElementsByTagName("script");Bt=o[o.length-1].getAttribute(xo)}}catch{Bt="isolate"}let Be;switch(Bt){case"share":Be=Object.freeze({updateQueue:1,observable:2,contextEvent:3,elementRegistry:4});break;case"share-v2":Be=Object.freeze({updateQueue:1.2,observable:2.2,contextEvent:3.2,elementRegistry:4.2});break;default:const o=`-${Math.random().toString(36).substring(2,8)}`;Be=Object.freeze({updateQueue:`1.2${o}`,observable:`2.2${o}`,contextEvent:`3.2${o}`,elementRegistry:`4.2${o}`});break}const Ze=o=>typeof o=="function",ie=o=>typeof o=="string",Ji=()=>{};var ps=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){if(!(typeof globalThis<"u"))if(typeof ps<"u")ps.globalThis=ps;else if(typeof self<"u")self.globalThis=self;else if(typeof window<"u")window.globalThis=window;else{const e=new Function("return this")();e.globalThis=e}})();const Mr={configurable:!1,enumerable:!1,writable:!1};globalThis.FAST===void 0&&Reflect.defineProperty(globalThis,"FAST",Object.assign({value:Object.create(null)},Mr));const T=globalThis.FAST;if(T.getById===void 0){const o=Object.create(null);Reflect.defineProperty(T,"getById",Object.assign({value(e,t){let s=o[e];return s===void 0&&(s=t?o[e]=t():null),s}},Mr))}T.error===void 0&&Object.assign(T,{warn(){},error(o){return new Error(`Error ${o}`)},addMessages(){}});const ea=Object.freeze([]);function js(){const o=new Map;return Object.freeze({register(e){return o.has(e.type)?!1:(o.set(e.type,e),!0)},getByType(e){return o.get(e)},getForInstance(e){if(e!=null)return o.get(e.constructor)}})}function Or(){const o=new WeakMap;return function(e){let t=o.get(e);if(t===void 0){let s=Reflect.getPrototypeOf(e);for(;t===void 0&&s!==null;)t=o.get(s),s=Reflect.getPrototypeOf(s);t=t===void 0?[]:t.slice(0),o.set(e,t)}return t}}function Le(o){o.prototype.toJSON=Ji}const A=Object.freeze({none:0,attribute:1,booleanAttribute:2,property:3,content:4,tokenList:5,event:6}),So=o=>o,ta=globalThis.trustedTypes?globalThis.trustedTypes.createPolicy("fast-html",{createHTML:So}):{createHTML:So};let Tt=Object.freeze({createHTML(o){return ta.createHTML(o)},protect(o,e,t,s){return s}});const sa=Tt,Ue=Object.freeze({get policy(){return Tt},setPolicy(o){if(Tt!==sa)throw T.error(1201);Tt=o},setAttribute(o,e,t){t==null?o.removeAttribute(e):o.setAttribute(e,t)},setBooleanAttribute(o,e,t){t?o.setAttribute(e,""):o.removeAttribute(e)}}),je=T.getById(Be.updateQueue,()=>{const o=[],e=[],t=globalThis.requestAnimationFrame;let s=!0;function r(){if(e.length)throw e.shift()}function n(c){try{c.call()}catch(u){if(s)e.push(u),setTimeout(r,0);else throw o.length=0,u}}function i(){let u=0;for(;u<o.length;)if(n(o[u]),u++,u>1024){for(let l=0,g=o.length-u;l<g;l++)o[l]=o[l+u];o.length-=u,u=0}o.length=0}function a(c){o.push(c),o.length<2&&(s?t(i):i())}return Object.freeze({enqueue:a,next:()=>new Promise(a),process:i,setMode:c=>s=c})});class Ss{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.subject=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){const t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const s=t.indexOf(e);s!==-1&&t.splice(s,1)}}notify(e){const t=this.spillover,s=this.subject;if(t===void 0){const r=this.sub1,n=this.sub2;r!==void 0&&r.handleChange(s,e),n!==void 0&&n.handleChange(s,e)}else for(let r=0,n=t.length;r<n;++r)t[r].handleChange(s,e)}}class Fr{constructor(e){this.subscribers={},this.subjectSubscribers=null,this.subject=e}notify(e){var t,s;(t=this.subscribers[e])===null||t===void 0||t.notify(e),(s=this.subjectSubscribers)===null||s===void 0||s.notify(e)}subscribe(e,t){var s,r;let n;t?n=(s=this.subscribers[t])!==null&&s!==void 0?s:this.subscribers[t]=new Ss(this.subject):n=(r=this.subjectSubscribers)!==null&&r!==void 0?r:this.subjectSubscribers=new Ss(this.subject),n.subscribe(e)}unsubscribe(e,t){var s,r;t?(s=this.subscribers[t])===null||s===void 0||s.unsubscribe(e):(r=this.subjectSubscribers)===null||r===void 0||r.unsubscribe(e)}}const Xt=Object.freeze({unknown:void 0,coupled:1}),v=T.getById(Be.observable,()=>{const o=je.enqueue,e=/(:|&&|\|\||if|\?\.)/,t=new WeakMap;let s,r=u=>{throw T.error(1101)};function n(u){var l;let g=(l=u.$fastController)!==null&&l!==void 0?l:t.get(u);return g===void 0&&(Array.isArray(u)?g=r(u):t.set(u,g=new Fr(u))),g}const i=Or();class a{constructor(l){this.name=l,this.field=`_${l}`,this.callback=`${l}Changed`}getValue(l){return s!==void 0&&s.watch(l,this.name),l[this.field]}setValue(l,g){const f=this.field,$=l[f];if($!==g){l[f]=g;const ue=l[this.callback];Ze(ue)&&ue.call(l,$,g),n(l).notify(this.name)}}}class c extends Ss{constructor(l,g,f=!1){super(l,g),this.expression=l,this.isVolatileBinding=f,this.needsRefresh=!0,this.needsQueue=!0,this.isAsync=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}setMode(l){this.isAsync=this.needsQueue=l}bind(l){this.controller=l;const g=this.observe(l.source,l.context);return!l.isBound&&this.requiresUnbind(l)&&l.onUnbind(this),g}requiresUnbind(l){return l.sourceLifetime!==Xt.coupled||this.first!==this.last||this.first.propertySource!==l.source}unbind(l){this.dispose()}observe(l,g){this.needsRefresh&&this.last!==null&&this.dispose();const f=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let $;try{$=this.expression(l,g)}finally{s=f}return $}disconnect(){this.dispose()}dispose(){if(this.last!==null){let l=this.first;for(;l!==void 0;)l.notifier.unsubscribe(this,l.propertyName),l=l.next;this.last=null,this.needsRefresh=this.needsQueue=this.isAsync}}watch(l,g){const f=this.last,$=n(l),ue=f===null?this.first:{};if(ue.propertySource=l,ue.propertyName=g,ue.notifier=$,$.subscribe(this,g),f!==null){if(!this.needsRefresh){let uo;s=void 0,uo=f.propertySource[f.propertyName],s=this,l===uo&&(this.needsRefresh=!0)}f.next=ue}this.last=ue}handleChange(){this.needsQueue?(this.needsQueue=!1,o(this)):this.isAsync||this.call()}call(){this.last!==null&&(this.needsQueue=this.isAsync,this.notify(this))}*records(){let l=this.first;for(;l!==void 0;)yield l,l=l.next}}return Le(c),Object.freeze({setArrayObserverFactory(u){r=u},getNotifier:n,track(u,l){s&&s.watch(u,l)},trackVolatile(){s&&(s.needsRefresh=!0)},notify(u,l){n(u).notify(l)},defineProperty(u,l){ie(l)&&(l=new a(l)),i(u).push(l),Reflect.defineProperty(u,l.name,{enumerable:!0,get(){return l.getValue(this)},set(g){l.setValue(this,g)}})},getAccessors:i,binding(u,l,g=this.isVolatileBinding(u)){return new c(u,l,g)},isVolatileBinding(u){return e.test(u.toString())}})});function V(o,e){v.defineProperty(o,e)}const Co=T.getById(Be.contextEvent,()=>{let o=null;return{get(){return o},set(e){o=e}}}),ut=Object.freeze({default:{index:0,length:0,get event(){return ut.getEvent()},eventDetail(){return this.event.detail},eventTarget(){return this.event.target}},getEvent(){return Co.get()},setEvent(o){Co.set(o)}});class Zt{constructor(e,t,s=!1){this.evaluate=e,this.policy=t,this.isVolatile=s}}class oa extends Zt{createObserver(e){return v.binding(this.evaluate,e,this.isVolatile)}}function qs(o,e,t=v.isVolatileBinding(o)){return new oa(o,e,t)}class Ir extends Zt{createObserver(){return this}bind(e){return this.evaluate(e.source,e.context)}}Le(Ir);function zr(o,e){return new Ir(o,e)}let Eo;function Nr(o){return o.map(e=>e instanceof I?Nr(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}class I{constructor(e){this.styles=e,this.targets=new WeakSet,this._strategy=null,this.behaviors=e.map(t=>t instanceof I?t.behaviors:null).reduce((t,s)=>s===null?t:t===null?s:t.concat(s),null)}get strategy(){return this._strategy===null&&this.withStrategy(Eo),this._strategy}addStylesTo(e){this.strategy.addStylesTo(e),this.targets.add(e)}removeStylesFrom(e){this.strategy.removeStylesFrom(e),this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}withStrategy(e){return this._strategy=new e(Nr(this.styles)),this}static setDefaultStrategy(e){Eo=e}static normalize(e){return e===void 0?void 0:Array.isArray(e)?new I(e):e instanceof I?e:new I([e])}}I.supportsAdoptedStyleSheets=Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype;const gs=js(),Us=Object.freeze({getForInstance:gs.getForInstance,getByType:gs.getByType,define(o){return gs.register({type:o}),o}});function fs(o,e,t){e.source.style.setProperty(o.targetAspect,t.bind(e))}class Cs{constructor(e,t){this.dataBinding=e,this.targetAspect=t}createCSS(e){return e(this),`var(${this.targetAspect})`}addedCallback(e){var t;const s=e.source;if(!s.$cssBindings){s.$cssBindings=new Map;const n=s.setAttribute;s.setAttribute=(i,a)=>{n.call(s,i,a),i==="style"&&s.$cssBindings.forEach((c,u)=>fs(u,c.controller,c.observer))}}const r=(t=e[this.targetAspect])!==null&&t!==void 0?t:e[this.targetAspect]=this.dataBinding.createObserver(this,this);r.controller=e,e.source.$cssBindings.set(this,{controller:e,observer:r})}connectedCallback(e){fs(this,e,e[this.targetAspect])}removedCallback(e){e.source.$cssBindings&&e.source.$cssBindings.delete(this)}handleChange(e,t){fs(this,t.controller,t)}}Us.define(Cs);const ra=`${Math.random().toString(36).substring(2,8)}`;let na=0;const Ao=()=>`--v${ra}${++na}`;function Lr(o,e){const t=[];let s="";const r=[],n=i=>{r.push(i)};for(let i=0,a=o.length-1;i<a;++i){s+=o[i];let c=e[i];Ze(c)?c=new Cs(qs(c),Ao()).createCSS(n):c instanceof Zt?c=new Cs(c,Ao()).createCSS(n):Us.getForInstance(c)!==void 0&&(c=c.createCSS(n)),c instanceof I||c instanceof CSSStyleSheet?(s.trim()!==""&&(t.push(s),s=""),t.push(c)):s+=c}return s+=o[o.length-1],s.trim()!==""&&t.push(s),{styles:t,behaviors:r}}const b=(o,...e)=>{const{styles:t,behaviors:s}=Lr(o,e),r=new I(t);return s.length?r.withBehaviors(...s):r};class Pr{constructor(e,t){this.behaviors=t,this.css="";const s=e.reduce((r,n)=>(ie(n)?this.css+=n:r.push(n),r),[]);s.length&&(this.styles=new I(s))}createCSS(e){return this.behaviors.forEach(e),this.styles&&e(this),this.css}addedCallback(e){e.addStyles(this.styles)}removedCallback(e){e.removeStyles(this.styles)}}Us.define(Pr);b.partial=(o,...e)=>{const{styles:t,behaviors:s}=Lr(o,e);return new Pr(t,s)};const Bo=/fe-b\$\$start\$\$(\d+)\$\$(.+)\$\$fe-b/,To=/fe-b\$\$end\$\$(\d+)\$\$(.+)\$\$fe-b/,Mo=/fe-repeat\$\$start\$\$(\d+)\$\$fe-repeat/,Oo=/fe-repeat\$\$end\$\$(\d+)\$\$fe-repeat/,Fo=/^(?:.{0,1000})fe-eb\$\$start\$\$(.+?)\$\$fe-eb/,Io=/fe-eb\$\$end\$\$(.{0,1000})\$\$fe-eb(?:.{0,1000})$/;function zo(o){return o&&o.nodeType===Node.COMMENT_NODE}const Z=Object.freeze({attributeMarkerName:"data-fe-b",attributeBindingSeparator:" ",contentBindingStartMarker(o,e){return`fe-b$$start$$${o}$$${e}$$fe-b`},contentBindingEndMarker(o,e){return`fe-b$$end$$${o}$$${e}$$fe-b`},repeatStartMarker(o){return`fe-repeat$$start$$${o}$$fe-repeat`},repeatEndMarker(o){return`fe-repeat$$end$$${o}$$fe-repeat`},isContentBindingStartMarker(o){return Bo.test(o)},isContentBindingEndMarker(o){return To.test(o)},isRepeatViewStartMarker(o){return Mo.test(o)},isRepeatViewEndMarker(o){return Oo.test(o)},isElementBoundaryStartMarker(o){return zo(o)&&Fo.test(o.data.trim())},isElementBoundaryEndMarker(o){return zo(o)&&Io.test(o.data)},parseAttributeBinding(o){const e=o.getAttribute(this.attributeMarkerName);return e===null?e:e.split(this.attributeBindingSeparator).map(t=>parseInt(t))},parseContentBindingStartMarker(o){return Po(Bo,o)},parseContentBindingEndMarker(o){return Po(To,o)},parseRepeatStartMarker(o){return No(Mo,o)},parseRepeatEndMarker(o){return No(Oo,o)},parseElementBoundaryStartMarker(o){return Lo(Fo,o.trim())},parseElementBoundaryEndMarker(o){return Lo(Io,o)}});function No(o,e){const t=o.exec(e);return t===null?t:parseInt(t[1])}function Lo(o,e){const t=o.exec(e);return t===null?t:t[1]}function Po(o,e){const t=o.exec(e);return t===null?t:[parseInt(t[1]),t[2]]}const It=Symbol.for("fe-hydration");function zt(o){return o[It]===It}const Ks=`fast-${Math.random().toString(36).substring(2,8)}`,Mt=`${Ks}{`,nt=`}${Ks}`,ia=nt.length;let aa=0;const Ws=()=>`${Ks}-${++aa}`,Dr=Object.freeze({interpolation:o=>`${Mt}${o}${nt}`,attribute:o=>`${Ws()}="${Mt}${o}${nt}"`,comment:o=>`<!--${Mt}${o}${nt}-->`}),Qt=Object.freeze({parse(o,e){const t=o.split(Mt);if(t.length===1)return null;const s=[];for(let r=0,n=t.length;r<n;++r){const i=t[r],a=i.indexOf(nt);let c;if(a===-1)c=i;else{const u=i.substring(0,a);s.push(e[u]),c=i.substring(a+ia)}c!==""&&s.push(c)}return s}}),vs=js(),J=Object.freeze({getForInstance:vs.getForInstance,getByType:vs.getByType,define(o,e){return e=e||{},e.type=o,vs.register(e),o},assignAspect(o,e){if(!e){o.aspectType=A.content;return}switch(o.sourceAspect=e,e[0]){case":":o.targetAspect=e.substring(1),o.aspectType=o.targetAspect==="classList"?A.tokenList:A.property;break;case"?":o.targetAspect=e.substring(1),o.aspectType=A.booleanAttribute;break;case"@":o.targetAspect=e.substring(1),o.aspectType=A.event;break;default:o.targetAspect=e,o.aspectType=A.attribute;break}}});class Gs{constructor(e){this.options=e}createHTML(e){return Dr.attribute(e(this))}createBehavior(){return this}}Le(Gs);class Vr extends Error{constructor(e,t,s){super(e),this.factories=t,this.node=s}}function Xs(o){return o.nodeType===Node.COMMENT_NODE}function _r(o){return o.nodeType===Node.TEXT_NODE}function Hr(o,e){const t=document.createRange();return t.setStart(o,0),t.setEnd(e,Xs(e)||_r(e)?e.data.length:e.childNodes.length),t}function la(o){return o instanceof DocumentFragment&&"mode"in o}function ca(o,e,t){const s=Hr(o,e),r=s.commonAncestorContainer,n=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT+NodeFilter.SHOW_COMMENT+NodeFilter.SHOW_TEXT,{acceptNode(u){return s.comparePoint(u,0)===0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i={},a={};let c=n.currentNode=o;for(;c!==null;){switch(c.nodeType){case Node.ELEMENT_NODE:{da(c,t,i);break}case Node.COMMENT_NODE:{ha(c,n,t,i,a);break}}c=n.nextNode()}return s.detach(),{targets:i,boundaries:a}}function da(o,e,t){const s=Z.parseAttributeBinding(o);if(s!==null){for(const r of s){if(!e[r])throw new Vr(`HydrationView was unable to successfully target factory on ${o.nodeName} inside ${o.getRootNode().host.nodeName}. This likely indicates a template mismatch between SSR rendering and hydration.`,e,o);Nt(e[r],o,t)}o.removeAttribute(Z.attributeMarkerName)}}function ha(o,e,t,s,r){if(Z.isElementBoundaryStartMarker(o)){ua(o,e);return}if(Z.isContentBindingStartMarker(o.data)){const n=Z.parseContentBindingStartMarker(o.data);if(n===null)return;const[i,a]=n,c=t[i],u=[];let l=e.nextSibling();o.data="";const g=l;for(;l!==null;){if(Xs(l)){const f=Z.parseContentBindingEndMarker(l.data);if(f&&f[1]===a)break}u.push(l),l=e.nextSibling()}if(l===null){const f=o.getRootNode();throw new Error(`Error hydrating Comment node inside "${la(f)?f.host.nodeName:f.nodeName}".`)}if(l.data="",u.length===1&&_r(u[0]))Nt(c,u[0],s);else{l!==g&&l.previousSibling!==null&&(r[c.targetNodeId]={first:g,last:l.previousSibling});const f=l.parentNode.insertBefore(document.createTextNode(""),l);Nt(c,f,s)}}}function ua(o,e){const t=Z.parseElementBoundaryStartMarker(o.data);let s=e.nextSibling();for(;s!==null;){if(Xs(s)){const r=Z.parseElementBoundaryEndMarker(s.data);if(r&&r===t)break}s=e.nextSibling()}}function Nt(o,e,t){if(o.targetNodeId===void 0)throw new Error("Factory could not be target to the node");t[o.targetNodeId]=e}var Rr;function Es(o,e){const t=o.parentNode;let s=o,r;for(;s!==e;){if(r=s.nextSibling,!r)throw new Error(`Unmatched first/last child inside "${e.getRootNode().host.nodeName}".`);t.removeChild(s),s=r}t.removeChild(e)}class jr{constructor(){this.index=0,this.length=0}get event(){return ut.getEvent()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}eventDetail(){return this.event.detail}eventTarget(){return this.event.target}}class Yt extends jr{constructor(e,t,s){super(),this.fragment=e,this.factories=t,this.targets=s,this.behaviors=null,this.unbindables=[],this.source=null,this.isBound=!1,this.sourceLifetime=Xt.unknown,this.context=this,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const s=e.parentNode;let r=this.firstChild,n;for(;r!==t;)n=r.nextSibling,s.insertBefore(r,e),r=n;s.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let s=this.firstChild,r;for(;s!==t;)r=s.nextSibling,e.appendChild(s),s=r;e.appendChild(t)}dispose(){Es(this.firstChild,this.lastChild),this.unbind()}onUnbind(e){this.unbindables.push(e)}bind(e,t=this){if(this.source===e)return;let s=this.behaviors;if(s===null){this.source=e,this.context=t,this.behaviors=s=new Array(this.factories.length);const r=this.factories;for(let n=0,i=r.length;n<i;++n){const a=r[n].createBehavior();a.bind(this),s[n]=a}}else{this.source!==null&&this.evaluateUnbindables(),this.isBound=!1,this.source=e,this.context=t;for(let r=0,n=s.length;r<n;++r)s[r].bind(this)}this.isBound=!0}unbind(){!this.isBound||this.source===null||(this.evaluateUnbindables(),this.source=null,this.context=this,this.isBound=!1)}evaluateUnbindables(){const e=this.unbindables;for(let t=0,s=e.length;t<s;++t)e[t].unbind(this);e.length=0}static disposeContiguousBatch(e){if(e.length!==0){Es(e[0].firstChild,e[e.length-1].lastChild);for(let t=0,s=e.length;t<s;++t)e[t].unbind()}}}Le(Yt);v.defineProperty(Yt.prototype,"index");v.defineProperty(Yt.prototype,"length");const Ve={unhydrated:"unhydrated",hydrating:"hydrating",hydrated:"hydrated"};class pa extends Error{constructor(e,t,s,r){super(e),this.factory=t,this.fragment=s,this.templateString=r}}class ga extends jr{constructor(e,t,s,r){super(),this.firstChild=e,this.lastChild=t,this.sourceTemplate=s,this.hostBindingTarget=r,this[Rr]=It,this.context=this,this.source=null,this.isBound=!1,this.sourceLifetime=Xt.unknown,this.unbindables=[],this.fragment=null,this.behaviors=null,this._hydrationStage=Ve.unhydrated,this._bindingViewBoundaries={},this._targets={},this.factories=s.compile().factories}get hydrationStage(){return this._hydrationStage}get targets(){return this._targets}get bindingViewBoundaries(){return this._bindingViewBoundaries}insertBefore(e){if(this.fragment!==null)if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const s=e.parentNode;let r=this.firstChild,n;for(;r!==t;)n=r.nextSibling,s.insertBefore(r,e),r=n;s.insertBefore(t,e)}}appendTo(e){this.fragment!==null&&e.appendChild(this.fragment)}remove(){const e=this.fragment||(this.fragment=document.createDocumentFragment()),t=this.lastChild;let s=this.firstChild,r;for(;s!==t;){if(r=s.nextSibling,!r)throw new Error(`Unmatched first/last child inside "${t.getRootNode().host.nodeName}".`);e.appendChild(s),s=r}e.appendChild(t)}bind(e,t=this){var s,r;if(this.hydrationStage!==Ve.hydrated&&(this._hydrationStage=Ve.hydrating),this.source===e)return;let n=this.behaviors;if(n===null){this.source=e,this.context=t;try{const{targets:a,boundaries:c}=ca(this.firstChild,this.lastChild,this.factories);this._targets=a,this._bindingViewBoundaries=c}catch(a){if(a instanceof Vr){let c=this.sourceTemplate.html;typeof c!="string"&&(c=c.innerHTML),a.templateString=c}throw a}this.behaviors=n=new Array(this.factories.length);const i=this.factories;for(let a=0,c=i.length;a<c;++a){const u=i[a];if(u.targetNodeId==="h"&&this.hostBindingTarget&&Nt(u,this.hostBindingTarget,this._targets),u.targetNodeId in this.targets){const l=u.createBehavior();l.bind(this),n[a]=l}else{let l=this.sourceTemplate.html;throw typeof l!="string"&&(l=l.innerHTML),new pa(`HydrationView was unable to successfully target bindings inside "${(r=((s=this.firstChild)===null||s===void 0?void 0:s.getRootNode()).host)===null||r===void 0?void 0:r.nodeName}".`,u,Hr(this.firstChild,this.lastChild).cloneContents(),l)}}}else{this.source!==null&&this.evaluateUnbindables(),this.isBound=!1,this.source=e,this.context=t;for(let i=0,a=n.length;i<a;++i)n[i].bind(this)}this.isBound=!0,this._hydrationStage=Ve.hydrated}unbind(){!this.isBound||this.source===null||(this.evaluateUnbindables(),this.source=null,this.context=this,this.isBound=!1)}dispose(){Es(this.firstChild,this.lastChild),this.unbind()}onUnbind(e){this.unbindables.push(e)}evaluateUnbindables(){const e=this.unbindables;for(let t=0,s=e.length;t<s;++t)e[t].unbind(this);e.length=0}}Rr=It;Le(ga);function fa(o){return o.create!==void 0}function va(o,e,t,s){if(t==null&&(t=""),fa(t)){o.textContent="";let r=o.$fastView;if(r===void 0)if(zt(s)&&zt(t)&&s.bindingViewBoundaries[this.targetNodeId]!==void 0&&s.hydrationStage!==Ve.hydrated){const n=s.bindingViewBoundaries[this.targetNodeId];r=t.hydrate(n.first,n.last)}else r=t.create();else o.$fastTemplate!==t&&(r.isComposed&&(r.remove(),r.unbind()),r=t.create());r.isComposed?r.needsBindOnly&&(r.needsBindOnly=!1,r.bind(s.source,s.context)):(r.isComposed=!0,r.bind(s.source,s.context),r.insertBefore(o),o.$fastView=r,o.$fastTemplate=t)}else{const r=o.$fastView;r!==void 0&&r.isComposed&&(r.isComposed=!1,r.remove(),r.needsBindOnly?r.needsBindOnly=!1:r.unbind()),o.textContent=t}}function ma(o,e,t){var s;const r=`${this.id}-t`,n=(s=o[r])!==null&&s!==void 0?s:o[r]={v:0,cv:Object.create(null)},i=n.cv;let a=n.v;const c=o[e];if(t!=null&&t.length){const u=t.split(/\s+/);for(let l=0,g=u.length;l<g;++l){const f=u[l];f!==""&&(i[f]=a,c.add(f))}}if(n.v=a+1,a!==0){a-=1;for(const u in i)i[u]===a&&c.remove(u)}}const ba={[A.attribute]:Ue.setAttribute,[A.booleanAttribute]:Ue.setBooleanAttribute,[A.property]:(o,e,t)=>o[e]=t,[A.content]:va,[A.tokenList]:ma,[A.event]:()=>{}};class qe{constructor(e){this.dataBinding=e,this.updateTarget=null,this.aspectType=A.content}createHTML(e){return Dr.interpolation(e(this))}createBehavior(){var e;if(this.updateTarget===null){const t=ba[this.aspectType],s=(e=this.dataBinding.policy)!==null&&e!==void 0?e:this.policy;if(!t)throw T.error(1205);this.data=`${this.id}-d`,this.updateTarget=s.protect(this.targetTagName,this.aspectType,this.targetAspect,t)}return this}bind(e){var t;const s=e.targets[this.targetNodeId],r=zt(e)&&e.hydrationStage&&e.hydrationStage!==Ve.hydrated;switch(this.aspectType){case A.event:s[this.data]=e,s.addEventListener(this.targetAspect,this,this.dataBinding.options);break;case A.content:e.onUnbind(this);default:const n=(t=s[this.data])!==null&&t!==void 0?t:s[this.data]=this.dataBinding.createObserver(this,this);if(n.target=s,n.controller=e,r&&(this.aspectType===A.attribute||this.aspectType===A.booleanAttribute)){n.bind(e);break}this.updateTarget(s,this.targetAspect,n.bind(e),e);break}}unbind(e){const s=e.targets[this.targetNodeId].$fastView;s!==void 0&&s.isComposed&&(s.unbind(),s.needsBindOnly=!0)}handleEvent(e){const t=e.currentTarget[this.data];if(t.isBound){ut.setEvent(e);const s=this.dataBinding.evaluate(t.source,t.context);ut.setEvent(null),s!==!0&&e.preventDefault()}}handleChange(e,t){const s=t.target,r=t.controller;this.updateTarget(s,this.targetAspect,t.bind(r),r)}}J.define(qe,{aspected:!0});const qr=(o,e)=>`${o}.${e}`,Do={},X={index:0,node:null};function Vo(o){o.startsWith("fast-")||T.warn(1204,{name:o})}const wa=new Proxy(document.createElement("div"),{get(o,e){Vo(e);const t=Reflect.get(o,e);return Ze(t)?t.bind(o):t},set(o,e,t){return Vo(e),Reflect.set(o,e,t)}});class ka{constructor(e,t,s){this.fragment=e,this.directives=t,this.policy=s,this.proto=null,this.nodeIds=new Set,this.descriptors={},this.factories=[]}addFactory(e,t,s,r,n){var i,a;this.nodeIds.has(s)||(this.nodeIds.add(s),this.addTargetDescriptor(t,s,r)),e.id=(i=e.id)!==null&&i!==void 0?i:Ws(),e.targetNodeId=s,e.targetTagName=n,e.policy=(a=e.policy)!==null&&a!==void 0?a:this.policy,this.factories.push(e)}freeze(){return this.proto=Object.create(null,this.descriptors),this}addTargetDescriptor(e,t,s){const r=this.descriptors;if(t==="r"||t==="h"||r[t])return;if(!r[e]){const i=e.lastIndexOf("."),a=e.substring(0,i),c=parseInt(e.substring(i+1));this.addTargetDescriptor(a,e,c)}let n=Do[t];if(!n){const i=`_${t}`;Do[t]=n={get(){var a;return(a=this[i])!==null&&a!==void 0?a:this[i]=this[e].childNodes[s]}}}r[t]=n}createView(e){const t=this.fragment.cloneNode(!0),s=Object.create(this.proto);s.r=t,s.h=e??wa;for(const r of this.nodeIds)s[r];return new Yt(t,this.factories,s)}}function Ur(o,e,t,s,r,n=!1){const i=t.attributes,a=o.directives;for(let c=0,u=i.length;c<u;++c){const l=i[c],g=l.value,f=Qt.parse(g,a);let $=null;f===null?n&&($=new qe(zr(()=>g,o.policy)),J.assignAspect($,l.name)):$=Zs.aggregate(f,o.policy),$!==null&&(t.removeAttributeNode(l),c--,u--,o.addFactory($,e,s,r,t.tagName))}}function ya(o,e,t,s,r){const n=Qt.parse(e.textContent,o.directives);if(n===null)return X.node=e.nextSibling,X.index=r+1,X;let i,a=i=e;for(let c=0,u=n.length;c<u;++c){const l=n[c];c!==0&&(r++,s=qr(t,r),i=a.parentNode.insertBefore(document.createTextNode(""),a.nextSibling)),ie(l)?i.textContent=l:(i.textContent=" ",J.assignAspect(l),o.addFactory(l,t,s,r,null)),a=i}return X.index=r+1,X.node=a.nextSibling,X}function Kr(o,e,t){let s=0,r=e.firstChild;for(;r;){const n=$a(o,t,r,s);r=n.node,s=n.index}}function $a(o,e,t,s){const r=qr(e,s);switch(t.nodeType){case 1:Ur(o,e,t,r,s),Kr(o,t,r);break;case 3:return ya(o,t,e,r,s);case 8:const n=Qt.parse(t.data,o.directives);n!==null&&o.addFactory(Zs.aggregate(n),e,r,s,null);break}return X.index=s+1,X.node=t.nextSibling,X}function xa(o,e){return o&&o.nodeType==8&&Qt.parse(o.data,e)!==null}const _o="TEMPLATE",Zs={compile(o,e,t=Ue.policy){let s;if(ie(o)){s=document.createElement(_o),s.innerHTML=t.createHTML(o);const i=s.content.firstElementChild;i!==null&&i.tagName===_o&&(s=i)}else s=o;!s.content.firstChild&&!s.content.lastChild&&s.content.appendChild(document.createComment(""));const r=document.adoptNode(s.content),n=new ka(r,e,t);return Ur(n,"",s,"h",0,!0),(xa(r.firstChild,e)||r.childNodes.length===1&&Object.keys(e).length>0)&&r.insertBefore(document.createComment(""),r.firstChild),Kr(n,r,"r"),X.node=null,n.freeze()},setDefaultStrategy(o){this.compile=o},aggregate(o,e=Ue.policy){if(o.length===1)return o[0];let t,s=!1,r;const n=o.length,i=o.map(u=>ie(u)?()=>u:(t=u.sourceAspect||t,s=s||u.dataBinding.isVolatile,r=r||u.dataBinding.policy,u.dataBinding.evaluate)),a=(u,l)=>{let g="";for(let f=0;f<n;++f)g+=i[f](u,l);return g},c=new qe(qs(a,r??e,s));return J.assignAspect(c,t),c}},Sa=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,Ca=Object.create(null);class Oe{constructor(e,t=Ca){this.html=e,this.factories=t}createHTML(e){const t=this.factories;for(const s in t)e(t[s]);return this.html}}Oe.empty=new Oe("");J.define(Oe);function Ea(o,e,t,s=J.getForInstance(o)){if(s.aspected){const r=Sa.exec(e);r!==null&&J.assignAspect(o,r[2])}return o.createHTML(t)}class Jt{constructor(e,t={},s){this.policy=s,this.result=null,this.html=e,this.factories=t}compile(){return this.result===null&&(this.result=Zs.compile(this.html,this.factories,this.policy)),this.result}create(e){return this.compile().createView(e)}inline(){return new Oe(ie(this.html)?this.html:this.html.innerHTML,this.factories)}withPolicy(e){if(this.result)throw T.error(1208);if(this.policy)throw T.error(1207);return this.policy=e,this}render(e,t,s){const r=this.create(s);return r.bind(e),r.appendTo(t),r}static create(e,t,s){let r="";const n=Object.create(null),i=a=>{var c;const u=(c=a.id)!==null&&c!==void 0?c:a.id=Ws();return n[u]=a,u};for(let a=0,c=e.length-1;a<c;++a){const u=e[a];let l=t[a],g;if(r+=u,Ze(l))l=new qe(qs(l));else if(l instanceof Zt)l=new qe(l);else if(!(g=J.getForInstance(l))){const f=l;l=new qe(zr(()=>f))}r+=Ea(l,u,i,g)}return new Jt(r+e[e.length-1],n,s)}}Le(Jt);const k=(o,...e)=>{if(Array.isArray(o)&&Array.isArray(o.raw))return Jt.create(o,e);throw T.error(1206)};k.partial=o=>new Oe(o);class Wr extends Gs{bind(e){e.source[this.options]=e.targets[this.targetNodeId]}}J.define(Wr);const be=o=>new Wr(o),Aa=o=>o.nodeType===1,As=o=>Aa;class Ba extends Gs{get id(){return this._id}set id(e){this._id=e,this._controllerProperty=`${e}-c`}bind(e){const t=e.targets[this.targetNodeId];t[this._controllerProperty]=e,this.updateTarget(e.source,this.computeNodes(t)),this.observe(t),e.onUnbind(this)}unbind(e){const t=e.targets[this.targetNodeId];this.updateTarget(e.source,ea),this.disconnect(t),t[this._controllerProperty]=null}getSource(e){return e[this._controllerProperty].source}updateTarget(e,t){e[this.options.property]=t}computeNodes(e){let t=this.getNodes(e);return"filter"in this.options&&(t=t.filter(this.options.filter)),t}}const Ho="slotchange";class Gr extends Ba{observe(e){e.addEventListener(Ho,this)}disconnect(e){e.removeEventListener(Ho,this)}getNodes(e){return e.assignedNodes(this.options)}handleEvent(e){const t=e.currentTarget;this.updateTarget(this.getSource(t),this.computeNodes(t))}}J.define(Gr);function ae(o){return ie(o)&&(o={property:o}),new Gr(o)}const Ro="boolean",jo="reflect",Lt=Object.freeze({locate:Or()}),Ta={toView(o){return o?"true":"false"},fromView(o){return!(o==null||o==="false"||o===!1||o===0)}};function qo(o){if(o==null)return null;const e=o*1;return isNaN(e)?null:e}const we={toView(o){const e=qo(o);return e&&e.toString()},fromView:qo};class Pt{constructor(e,t,s=t.toLowerCase(),r=jo,n){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=s,this.mode=r,this.converter=n,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,r===Ro&&n===void 0&&(this.converter=Ta)}setValue(e,t){const s=e[this.fieldName],r=this.converter;r!==void 0&&(t=r.fromView(t)),s!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](s,t),e.$fastController.notify(this.name))}getValue(e){return v.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,s=this.guards;s.has(e)||t==="fromView"||je.enqueue(()=>{s.add(e);const r=e[this.fieldName];switch(t){case jo:const n=this.converter;Ue.setAttribute(e,this.attribute,n!==void 0?n.toView(r):r);break;case Ro:Ue.setBooleanAttribute(e,this.attribute,r);break}s.delete(e)})}static collect(e,...t){const s=[];t.push(Lt.locate(e));for(let r=0,n=t.length;r<n;++r){const i=t[r];if(i!==void 0)for(let a=0,c=i.length;a<c;++a){const u=i[a];ie(u)?s.push(new Pt(e,u)):s.push(new Pt(e,u.property,u.attribute,u.mode,u.converter))}}return s}}function p(o,e){let t;function s(r,n){arguments.length>1&&(t.property=n),Lt.locate(r.constructor).push(t)}if(arguments.length>1){t={},s(o,e);return}return t=o===void 0?{}:o,s}const Uo={mode:"open"},Ko={},Wo=new Set,Dt=T.getById(Be.elementRegistry,()=>js());class K{constructor(e,t=e.definition){var s;this.platformDefined=!1,ie(t)&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template,this.registry=(s=t.registry)!==null&&s!==void 0?s:customElements;const r=e.prototype,n=Pt.collect(e,t.attributes),i=new Array(n.length),a={},c={};for(let u=0,l=n.length;u<l;++u){const g=n[u];i[u]=g.attribute,a[g.name]=g,c[g.attribute]=g,v.defineProperty(r,g)}Reflect.defineProperty(e,"observedAttributes",{value:i,enumerable:!0}),this.attributes=n,this.propertyLookup=a,this.attributeLookup=c,this.shadowOptions=t.shadowOptions===void 0?Uo:t.shadowOptions===null?void 0:Object.assign(Object.assign({},Uo),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?Ko:Object.assign(Object.assign({},Ko),t.elementOptions),this.styles=I.normalize(t.styles),Dt.register(this)}get isDefined(){return this.platformDefined}define(e=this.registry){const t=this.type;return e.get(this.name)||(this.platformDefined=!0,e.define(this.name,t,this.elementOptions)),this}static compose(e,t){return Wo.has(e)||Dt.getByType(e)?new K(class extends e{},t):new K(e,t)}static registerBaseType(e){Wo.add(e)}}K.getByType=Dt.getByType;K.getForInstance=Dt.getForInstance;class Ma extends MutationObserver{constructor(e){function t(s){this.callback.call(null,s.filter(r=>this.observedNodes.has(r.target)))}super(t),this.callback=e,this.observedNodes=new Set}observe(e,t){this.observedNodes.add(e),super.observe(e,t)}unobserve(e){this.observedNodes.delete(e),this.observedNodes.size<1&&this.disconnect()}}const Oa={bubbles:!0,composed:!0,cancelable:!0},Ot="isConnected",Xr=new WeakMap;function it(o){var e,t;return(t=(e=o.shadowRoot)!==null&&e!==void 0?e:Xr.get(o))!==null&&t!==void 0?t:null}let Go;class Ke extends Fr{constructor(e,t){super(e),this.boundObservables=null,this.needsInitialization=!0,this.hasExistingShadowRoot=!1,this._template=null,this.stage=3,this.guardBehaviorConnection=!1,this.behaviors=null,this.behaviorsConnected=!1,this._mainStyles=null,this.$fastController=this,this.view=null,this.source=e,this.definition=t;const s=t.shadowOptions;if(s!==void 0){let n=e.shadowRoot;n?this.hasExistingShadowRoot=!0:(n=e.attachShadow(s),s.mode==="closed"&&Xr.set(e,n))}const r=v.getAccessors(e);if(r.length>0){const n=this.boundObservables=Object.create(null);for(let i=0,a=r.length;i<a;++i){const c=r[i].name,u=e[c];u!==void 0&&(delete e[c],n[c]=u)}}}get isConnected(){return v.track(this,Ot),this.stage===1}get context(){var e,t;return(t=(e=this.view)===null||e===void 0?void 0:e.context)!==null&&t!==void 0?t:ut.default}get isBound(){var e,t;return(t=(e=this.view)===null||e===void 0?void 0:e.isBound)!==null&&t!==void 0?t:!1}get sourceLifetime(){var e;return(e=this.view)===null||e===void 0?void 0:e.sourceLifetime}get template(){var e;if(this._template===null){const t=this.definition;this.source.resolveTemplate?this._template=this.source.resolveTemplate():t.template&&(this._template=(e=t.template)!==null&&e!==void 0?e:null)}return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get mainStyles(){var e;if(this._mainStyles===null){const t=this.definition;this.source.resolveStyles?this._mainStyles=this.source.resolveStyles():t.styles&&(this._mainStyles=(e=t.styles)!==null&&e!==void 0?e:null)}return this._mainStyles}set mainStyles(e){this._mainStyles!==e&&(this._mainStyles!==null&&this.removeStyles(this._mainStyles),this._mainStyles=e,this.needsInitialization||this.addStyles(e))}onUnbind(e){var t;(t=this.view)===null||t===void 0||t.onUnbind(e)}addBehavior(e){var t,s;const r=(t=this.behaviors)!==null&&t!==void 0?t:this.behaviors=new Map,n=(s=r.get(e))!==null&&s!==void 0?s:0;n===0?(r.set(e,1),e.addedCallback&&e.addedCallback(this),e.connectedCallback&&!this.guardBehaviorConnection&&(this.stage===1||this.stage===0)&&e.connectedCallback(this)):r.set(e,n+1)}removeBehavior(e,t=!1){const s=this.behaviors;if(s===null)return;const r=s.get(e);r!==void 0&&(r===1||t?(s.delete(e),e.disconnectedCallback&&this.stage!==3&&e.disconnectedCallback(this),e.removedCallback&&e.removedCallback(this)):s.set(e,r-1))}addStyles(e){var t;if(!e)return;const s=this.source;if(e instanceof HTMLElement)((t=it(s))!==null&&t!==void 0?t:this.source).append(e);else if(!e.isAttachedTo(s)){const r=e.behaviors;if(e.addStylesTo(s),r!==null)for(let n=0,i=r.length;n<i;++n)this.addBehavior(r[n])}}removeStyles(e){var t;if(!e)return;const s=this.source;if(e instanceof HTMLElement)((t=it(s))!==null&&t!==void 0?t:s).removeChild(e);else if(e.isAttachedTo(s)){const r=e.behaviors;if(e.removeStylesFrom(s),r!==null)for(let n=0,i=r.length;n<i;++n)this.removeBehavior(r[n])}}connect(){this.stage===3&&(this.stage=0,this.bindObservables(),this.connectBehaviors(),this.needsInitialization?(this.renderTemplate(this.template),this.addStyles(this.mainStyles),this.needsInitialization=!1):this.view!==null&&this.view.bind(this.source),this.stage=1,v.notify(this,Ot))}bindObservables(){if(this.boundObservables!==null){const e=this.source,t=this.boundObservables,s=Object.keys(t);for(let r=0,n=s.length;r<n;++r){const i=s[r];e[i]=t[i]}this.boundObservables=null}}connectBehaviors(){if(this.behaviorsConnected===!1){const e=this.behaviors;if(e!==null){this.guardBehaviorConnection=!0;for(const t of e.keys())t.connectedCallback&&t.connectedCallback(this);this.guardBehaviorConnection=!1}this.behaviorsConnected=!0}}disconnectBehaviors(){if(this.behaviorsConnected===!0){const e=this.behaviors;if(e!==null)for(const t of e.keys())t.disconnectedCallback&&t.disconnectedCallback(this);this.behaviorsConnected=!1}}disconnect(){this.stage===1&&(this.stage=2,v.notify(this,Ot),this.view!==null&&this.view.unbind(),this.disconnectBehaviors(),this.stage=3)}onAttributeChangedCallback(e,t,s){const r=this.definition.attributeLookup[e];r!==void 0&&r.onAttributeChangedCallback(this.source,s)}emit(e,t,s){return this.stage===1?this.source.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Oa),s))):!1}renderTemplate(e){var t;const s=this.source,r=(t=it(s))!==null&&t!==void 0?t:s;if(this.view!==null)this.view.dispose(),this.view=null;else if(!this.needsInitialization||this.hasExistingShadowRoot){this.hasExistingShadowRoot=!1;for(let n=r.firstChild;n!==null;n=r.firstChild)r.removeChild(n)}e&&(this.view=e.render(s,r,s),this.view.sourceLifetime=Xt.coupled)}static forCustomElement(e){const t=e.$fastController;if(t!==void 0)return t;const s=K.getForInstance(e);if(s===void 0)throw T.error(1401);return e.$fastController=new Go(e,s)}static setStrategy(e){Go=e}}Le(Ke);Ke.setStrategy(Ke);function Vt(o){var e;return"adoptedStyleSheets"in o?o:(e=it(o))!==null&&e!==void 0?e:o.getRootNode()}class es{constructor(e){const t=es.styleSheetCache;this.sheets=e.map(s=>{if(s instanceof CSSStyleSheet)return s;let r=t.get(s);return r===void 0&&(r=new CSSStyleSheet,r.replaceSync(s),t.set(s,r)),r})}addStylesTo(e){Zr(Vt(e),this.sheets)}removeStylesFrom(e){Qr(Vt(e),this.sheets)}}es.styleSheetCache=new Map;let Fa=0;const Ia=()=>`fast-${++Fa}`;function Xo(o){return o===document?document.body:o}class za{constructor(e){this.styles=e,this.styleClass=Ia()}addStylesTo(e){e=Xo(Vt(e));const t=this.styles,s=this.styleClass;for(let r=0;r<t.length;r++){const n=document.createElement("style");n.innerHTML=t[r],n.className=s,e.append(n)}}removeStylesFrom(e){e=Xo(Vt(e));const t=e.querySelectorAll(`.${this.styleClass}`);for(let s=0,r=t.length;s<r;++s)e.removeChild(t[s])}}let Zr=(o,e)=>{o.adoptedStyleSheets=[...o.adoptedStyleSheets,...e]},Qr=(o,e)=>{o.adoptedStyleSheets=o.adoptedStyleSheets.filter(t=>e.indexOf(t)===-1)};if(I.supportsAdoptedStyleSheets){try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Zr=(o,e)=>{o.adoptedStyleSheets.push(...e)},Qr=(o,e)=>{for(const t of e){const s=o.adoptedStyleSheets.indexOf(t);s!==-1&&o.adoptedStyleSheets.splice(s,1)}}}catch{}I.setDefaultStrategy(es)}else I.setDefaultStrategy(za);const Zo="defer-hydration",Qo="needs-hydration";class Ce extends Ke{static hydrationObserverHandler(e){for(const t of e)Ce.hydrationObserver.unobserve(t.target),t.target.$fastController.connect()}connect(){var e,t;if(this.needsHydration===void 0&&(this.needsHydration=this.source.getAttribute(Qo)!==null),this.source.hasAttribute(Zo)){Ce.hydrationObserver.observe(this.source,{attributeFilter:[Zo]});return}if(!this.needsHydration){super.connect();return}if(this.stage!==3)return;this.stage=0,this.bindObservables(),this.connectBehaviors();const s=this.source,r=(e=it(s))!==null&&e!==void 0?e:s;if(this.template)if(zt(this.template)){let n=r.firstChild,i=r.lastChild;s.shadowRoot===null&&(Z.isElementBoundaryStartMarker(n)&&(n.data="",n=n.nextSibling),Z.isElementBoundaryEndMarker(i)&&(i.data="",i=i.previousSibling)),this.view=this.template.hydrate(n,i,s),(t=this.view)===null||t===void 0||t.bind(this.source)}else this.renderTemplate(this.template);this.addStyles(this.mainStyles),this.stage=1,this.source.removeAttribute(Qo),this.needsInitialization=this.needsHydration=!1,v.notify(this,Ot)}disconnect(){super.disconnect(),Ce.hydrationObserver.unobserve(this.source)}static install(){Ke.setStrategy(Ce)}}Ce.hydrationObserver=new Ma(Ce.hydrationObserverHandler);function Yr(o){const e=class extends o{constructor(){super(),Ke.forCustomElement(this)}$emit(t,s,r){return this.$fastController.emit(t,s,r)}connectedCallback(){this.$fastController.connect()}disconnectedCallback(){this.$fastController.disconnect()}attributeChangedCallback(t,s,r){this.$fastController.onAttributeChangedCallback(t,s,r)}};return K.registerBaseType(e),e}function Na(o,e){return Ze(o)?K.compose(o,e):K.compose(this,o)}function La(o,e){return Ze(o)?K.compose(o,e).define().type:K.compose(this,o).define().type}function Pa(o){return Yr(o)}const z=Object.assign(Yr(HTMLElement),{from:Pa,define:La,compose:Na});function Yo(...o){return o.every(e=>e instanceof HTMLElement)}const Da="ArrowDown",Va="ArrowLeft",_a="ArrowRight",Ha="ArrowUp",Ra="End",ts="Enter",ja="Escape",qa="Home",Qs=" ",Ua="Tab";let Ka=0;function Wa(o=""){return`${o}${Ka++}`}function Fe(o){return o?typeof o=="string"?new Oe(o):"inline"in o?o.inline():o:Oe.empty}const Bs=o=>{var e;return o.nodeType!==Node.TEXT_NODE||!!(!((e=o.nodeValue)===null||e===void 0)&&e.trim().length)},Ga=":host([hidden]){display:none}";function _(o){return`${Ga}:host{display:${o}}`}class Xa{constructor(e){this.listenerCache=new WeakMap,this.query=e}connectedCallback(e){const{query:t}=this;let s=this.listenerCache.get(e);s||(s=this.constructListener(e),this.listenerCache.set(e,s)),s.bind(t)(),t.addEventListener("change",s)}disconnectedCallback(e){const t=this.listenerCache.get(e);t&&this.query.removeEventListener("change",t)}}class bt extends Xa{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new bt(e,t)}constructListener(e){let t=!1;const s=this.styles;return function(){const{matches:n}=this;n&&!t?(e.addStyles(s),t=n):!n&&t&&(e.removeStyles(s),t=n)}}removedCallback(e){e.removeStyles(this.styles)}}const Qe=bt.with(window.matchMedia("(forced-colors)"));bt.with(window.matchMedia("(prefers-color-scheme: dark)"));bt.with(window.matchMedia("(prefers-color-scheme: light)"));class Ye{}function wt(o){return k` <slot name="end" ${be("end")}>${Fe(o.end)}</slot> `.inline()}function Je(o){return k` <slot name="start" ${be("start")}>${Fe(o.start)}</slot> `.inline()}function et(o,...e){const t=Lt.locate(o);e.forEach(s=>{Object.getOwnPropertyNames(s.prototype).forEach(n=>{n!=="constructor"&&Object.defineProperty(o.prototype,n,Object.getOwnPropertyDescriptor(s.prototype,n))}),Lt.locate(s).forEach(n=>t.push(n))})}const Jr=CSS.supports("selector(:state(g))"),Jo=new Map;function d(o){var e;return(e=Jo.get(o))!==null&&e!==void 0?e:Jo.set(o,Jr?`:state(${o})`:`[state--${o}]`).get(o)}function S(o,e,t){if(e){if(!Jr){o.shadowRoot.host.toggleAttribute(`state--${e}`,t);return}if(t??!o.states.has(e)){o.states.add(e);return}o.states.delete(e)}}const ms=new WeakMap;function Ys(o,e){if(!o||!e)return!1;if(ms.has(o))return ms.get(o).has(e);const t=new Set(Object.values(o));return ms.set(o,t),t.has(e)}function w(o,e="",t="",s,r=""){S(o,`${r}${e}`,!1),(!s||Ys(s,t))&&S(o,`${r}${t}`,!0)}const Za={small:"small",medium:"medium",large:"large",extraLarge:"extra-large"},Qa={start:"start",end:"end"};class re extends z{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.headinglevel=2,this.expanded=!1,this.disabled=!1,this.id=Wa("accordion-")}expandedChanged(e,t){S(this.elementInternals,"expanded",t)}disabledChanged(e,t){S(this.elementInternals,"disabled",t)}}h([p({attribute:"heading-level",mode:"fromView",converter:we})],re.prototype,"headinglevel",void 0);h([p({mode:"boolean"})],re.prototype,"expanded",void 0);h([p({mode:"boolean"})],re.prototype,"disabled",void 0);h([p],re.prototype,"id",void 0);class kt extends re{constructor(){super(...arguments),this.block=!1}sizeChanged(e,t){w(this.elementInternals,e,t,Za)}markerPositionChanged(e,t){w(this.elementInternals,e,t,Qa,"align-")}blockChanged(e,t){S(this.elementInternals,"block",t)}}h([p],kt.prototype,"size",void 0);h([p({attribute:"marker-position"})],kt.prototype,"markerPosition",void 0);h([p({mode:"boolean"})],kt.prototype,"block",void 0);et(kt,Ye);const ye=d("align-end");d("align-start");const Ya=d("anchor"),er=d("auto-resize");d("bad-input");const Ja=d("beige"),_t=d("block"),el=d("blue"),tl=d("bold");d("bordered");const sl=d("brand"),ol=d("brass"),rl=d("brown"),nl=d("center"),tr=d("checked"),sr=d("circular"),il=d("cornflower"),al=d("cranberry");d("custom-error");const ss=d("danger"),ll=d("dark-green"),cl=d("dark-red"),fe=d("disabled"),or=d("display-shadow");d("dot");const dl=d("end");d("error");const $e=d("expanded"),Ht=d("extra-large"),Rt=d("extra-small"),_e=d("filled-darker"),He=d("filled-lighter");d("fit-center");d("fit-contain");d("fit-cover");d("fit-none");d("focus-visible");const hl=d("forest"),oe=d("ghost"),ul=d("gold"),pl=d("grape");d("has-message");const gl=d("huge"),ot=d("icon"),os=d("important");d("indeterminate");const rs=d("informative");d("inline");d("inset");const rr=d("inverted"),fl=d("italic"),vl=d("justify"),N=d("large"),ml=d("lavender"),bl=d("light-teal"),wl=d("lilac"),kl=d("magenta"),yl=d("marigold"),$l=d("medium"),xl=d("mink"),Sl=d("monospace");d("multiline");const Cl=d("navy");d("neutral");const nr=d("nowrap"),El=d("numeric"),F=d("outline");d("pattern-mismatch");const Al=d("peach"),Bl=d("pink"),Tl=d("platinum"),Ml=d("plum");d("pressed");const ve=d("primary"),Ol=d("pumpkin"),Fl=d("purple");d("range-overflow");d("range-underflow");const Il=d("red"),zl=d("resize-both"),Nl=d("resize-horizontal"),Ll=d("resize-vertical"),xt=d("rounded"),Pl=d("royal-blue"),Dl=d("seafoam"),Vl=d("semibold"),ns=d("severe");d("shadow");const _l=d("size-1000"),Hl=d("size-100"),Rl=d("size-200"),jl=d("size-400"),ql=d("size-500"),Ul=d("size-600"),Kl=d("size-700"),Wl=d("size-800"),Gl=d("size-900"),L=d("small"),Ts=d("square"),Xl=d("steel");d("step-mismatch");const ir=d("strikethrough");d("strong");const St=d("submenu"),R=d("subtle"),is=d("success"),Zl=d("teal"),pe=d("tint"),jt=d("tiny");d("too-long");d("too-short");const xe=d("transparent"),ar=d("truncate");d("type-mismatch");const Se=d("underline"),Ql=d("user-invalid");d("valid");d("value-missing");d("vertical");const as=d("warning"),ne="var(--colorNeutralForeground1)",Yl="var(--colorNeutralForeground1Hover)",Jl="var(--colorNeutralForeground1Pressed)",Ms="var(--colorNeutralForeground2)",en="var(--colorNeutralForeground2Hover)",tn="var(--colorNeutralForeground2Pressed)",lr="var(--colorNeutralForeground2BrandHover)",cr="var(--colorNeutralForeground2BrandPressed)",Q="var(--colorNeutralForeground3)",sn="var(--colorNeutralForeground4)",Ie="var(--colorNeutralForegroundDisabled)",ec="var(--colorCompoundBrandForeground1Pressed)",Te="var(--colorNeutralForegroundOnBrand)",Js="var(--colorNeutralForegroundInverted)",on="var(--colorNeutralForegroundStaticInverted)",rn="var(--colorBrandForeground1)",tc="var(--colorBrandForeground2)",sc="var(--colorNeutralForeground1Static)",P="var(--colorNeutralBackground1)",nn="var(--colorNeutralBackground1Hover)",oc="var(--colorNeutralBackground1Pressed)",rc="var(--colorNeutralBackground1Selected)",Os="var(--colorNeutralBackground3)",nc="var(--colorNeutralBackground4)",ic="var(--colorNeutralBackground5)",ac="var(--colorNeutralBackground6)",an="var(--colorNeutralBackgroundInverted)",lc="var(--colorSubtleBackground)",cc="var(--colorSubtleBackgroundHover)",dc="var(--colorSubtleBackgroundPressed)",Y="var(--colorTransparentBackground)",dr="var(--colorTransparentBackgroundHover)",hr="var(--colorTransparentBackgroundPressed)",ln="var(--colorNeutralBackgroundDisabled)",cn="var(--colorBrandBackground)",hc="var(--colorBrandBackgroundHover)",uc="var(--colorBrandBackgroundPressed)",ur="var(--colorBrandBackgroundStatic)",pc="var(--colorBrandBackground2)",qt="var(--colorNeutralStrokeAccessible)",Fs="var(--colorNeutralStrokeAccessibleHover)",Is="var(--colorNeutralStrokeAccessiblePressed)",pt="var(--colorNeutralStroke1)",eo="var(--colorNeutralStroke1Hover)",to="var(--colorNeutralStroke1Pressed)",zs="var(--colorNeutralStroke2)",gc="var(--colorNeutralStrokeOnBrand2)",fc="var(--colorBrandStroke1)",dn="var(--colorBrandStroke2)",hn="var(--colorCompoundBrandStroke)",vc="var(--colorCompoundBrandStrokePressed)",Ut="var(--colorNeutralStrokeDisabled)",We="var(--colorTransparentStroke)",pr="var(--colorTransparentStrokeInteractive)",mc="var(--colorStrokeFocus1)",Kt="var(--colorStrokeFocus2)",bc="var(--colorPaletteRedBackground1)",wc="var(--colorPaletteRedBackground2)",kc="var(--colorPaletteRedBackground3)",yc="var(--colorPaletteRedBorder1)",Ns="var(--colorPaletteRedBorder2)",$c="var(--colorPaletteRedForeground1)",xc="var(--colorPaletteRedForeground2)",un="var(--colorPaletteRedForeground3)",Sc="var(--colorPaletteGreenBackground1)",Cc="var(--colorPaletteGreenBackground3)",Ec="var(--colorPaletteGreenBorder2)",Ac="var(--colorPaletteGreenForeground1)",Bc="var(--colorPaletteGreenForeground2)",Tc="var(--colorPaletteGreenForeground3)",Mc="var(--colorPaletteDarkOrangeBackground1)",Oc="var(--colorPaletteDarkOrangeBackground3)",Fc="var(--colorPaletteDarkOrangeBorder1)",Ic="var(--colorPaletteDarkOrangeForeground1)",pn="var(--colorPaletteDarkOrangeForeground3)",zc="var(--colorPaletteYellowBackground1)",Nc="var(--colorPaletteYellowBackground3)",Lc="var(--colorPaletteYellowBorder1)",so="var(--colorPaletteYellowForeground2)",Pc="var(--colorPaletteMarigoldBackground2)",Dc="var(--colorPaletteMarigoldForeground2)",Vc="var(--colorPaletteAnchorBackground2)",_c="var(--colorPaletteAnchorForeground2)",Hc="var(--colorPaletteBeigeBackground2)",Rc="var(--colorPaletteBeigeForeground2)",jc="var(--colorPaletteBlueBackground2)",qc="var(--colorPaletteBlueForeground2)",Uc="var(--colorPaletteBrassBackground2)",Kc="var(--colorPaletteBrassForeground2)",Wc="var(--colorPaletteBrownBackground2)",Gc="var(--colorPaletteBrownForeground2)",Xc="var(--colorPaletteCornflowerBackground2)",Zc="var(--colorPaletteCornflowerForeground2)",Qc="var(--colorPaletteCranberryBackground2)",Yc="var(--colorPaletteCranberryForeground2)",Jc="var(--colorPaletteDarkGreenBackground2)",ed="var(--colorPaletteDarkGreenForeground2)",td="var(--colorPaletteDarkRedBackground2)",sd="var(--colorPaletteDarkRedForeground2)",od="var(--colorPaletteForestBackground2)",rd="var(--colorPaletteForestForeground2)",nd="var(--colorPaletteGoldBackground2)",id="var(--colorPaletteGoldForeground2)",ad="var(--colorPaletteGrapeBackground2)",ld="var(--colorPaletteGrapeForeground2)",cd="var(--colorPaletteLavenderBackground2)",dd="var(--colorPaletteLavenderForeground2)",hd="var(--colorPaletteLightTealBackground2)",ud="var(--colorPaletteLightTealForeground2)",pd="var(--colorPaletteLilacBackground2)",gd="var(--colorPaletteLilacForeground2)",fd="var(--colorPaletteMagentaBackground2)",vd="var(--colorPaletteMagentaForeground2)",md="var(--colorPaletteMinkBackground2)",bd="var(--colorPaletteMinkForeground2)",wd="var(--colorPaletteNavyBackground2)",kd="var(--colorPaletteNavyForeground2)",yd="var(--colorPalettePeachBackground2)",$d="var(--colorPalettePeachForeground2)",xd="var(--colorPalettePinkBackground2)",Sd="var(--colorPalettePinkForeground2)",Cd="var(--colorPalettePlatinumBackground2)",Ed="var(--colorPalettePlatinumForeground2)",Ad="var(--colorPalettePlumBackground2)",Bd="var(--colorPalettePlumForeground2)",Td="var(--colorPalettePumpkinBackground2)",Md="var(--colorPalettePumpkinForeground2)",Od="var(--colorPalettePurpleBackground2)",Fd="var(--colorPalettePurpleForeground2)",Id="var(--colorPaletteRoyalBlueBackground2)",zd="var(--colorPaletteRoyalBlueForeground2)",Nd="var(--colorPaletteSeafoamBackground2)",Ld="var(--colorPaletteSeafoamForeground2)",Pd="var(--colorPaletteSteelBackground2)",Dd="var(--colorPaletteSteelForeground2)",Vd="var(--colorPaletteTealBackground2)",_d="var(--colorPaletteTealForeground2)",gn="var(--borderRadiusNone)",gt="var(--borderRadiusSmall)",B="var(--borderRadiusMedium)",fn="var(--borderRadiusLarge)",Hd="var(--borderRadiusXLarge)",Wt="var(--borderRadiusCircular)",ee="var(--fontFamilyBase)",Rd="var(--fontFamilyMonospace)",jd="var(--fontFamilyNumeric)",oo="var(--fontSizeBase100)",te="var(--fontSizeBase200)",le="var(--fontSizeBase300)",ze="var(--fontSizeBase400)",ls="var(--fontSizeBase500)",ro="var(--fontSizeBase600)",qd="var(--fontSizeHero700)",Ud="var(--fontSizeHero800)",Kd="var(--fontSizeHero900)",Wd="var(--fontSizeHero1000)",q="var(--fontWeightRegular)",Gd="var(--fontWeightMedium)",cs="var(--fontWeightSemibold)",Xd="var(--fontWeightBold)",vn="var(--lineHeightBase100)",ce="var(--lineHeightBase200)",Ne="var(--lineHeightBase300)",yt="var(--lineHeightBase400)",mn="var(--lineHeightBase500)",Zd="var(--lineHeightBase600)",Qd="var(--lineHeightHero700)",Yd="var(--lineHeightHero800)",Jd="var(--lineHeightHero900)",eh="var(--lineHeightHero1000)",no="var(--shadow2)",bn="var(--shadow4)",th="var(--shadow8)",wn="var(--shadow16)",sh="var(--shadow28)",j="var(--strokeWidthThin)",Me="var(--strokeWidthThick)",at="var(--strokeWidthThicker)",Ls="var(--strokeWidthThickest)",U="var(--spacingHorizontalXXS)",Ge="var(--spacingHorizontalXS)",ft="var(--spacingHorizontalSNudge)",lt="var(--spacingHorizontalS)",Gt="var(--spacingHorizontalMNudge)",Ee="var(--spacingHorizontalM)",oh="var(--spacingHorizontalL)",Ps="var(--spacingVerticalXS)",rh="var(--spacingVerticalSNudge)",nh="var(--spacingVerticalS)",kn="var(--durationUltraFast)",Ds="var(--durationFaster)",yn="var(--durationNormal)",gr="var(--durationSlower)",Ct="var(--durationUltraSlow)",ih="var(--curveAccelerateMax)",io="var(--curveAccelerateMid)",ah="var(--curveAccelerateMin)",lh="var(--curveDecelerateMax)",ao="var(--curveDecelerateMid)",ch="var(--curveDecelerateMin)",dh="var(--curveEasyEaseMax)",lo="var(--curveEasyEase)",hh="var(--curveLinear)",uh=b`
  ${_("block")}

  :host {
    max-width: fit-content;
    contain: content;
  }

  .heading {
    height: 44px;
    display: grid;
    position: relative;
    padding-inline: ${Ee} ${Gt};
    border-radius: ${B};
    font-family: ${ee};
    font-size: ${le};
    font-weight: ${q};
    line-height: ${Ne};
    grid-template-columns: auto auto 1fr auto;
  }

  .button {
    appearance: none;
    background: ${Y};
    border: none;
    box-sizing: border-box;
    color: ${ne};
    cursor: pointer;
    font: inherit;
    grid-column: auto / span 2;
    grid-row: 1;
    height: 44px;
    outline: none;
    padding: 0;
    text-align: start;
  }

  .button::before {
    content: '';
    position: absolute;
    inset: 0px;
    cursor: pointer;
    border-radius: ${gt};
  }

  :where(.default-marker-collapsed, .default-marker-expanded),
  ::slotted(:is([slot='marker-collapsed'], [slot='marker-expanded'])) {
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    position: relative;
    height: 100%;
    padding-inline-end: ${lt};
    grid-column: 1 / span 1;
    grid-row: 1;
  }

  .content {
    margin: 0 ${Ee};
  }

  ::slotted([slot='start']) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: ${lt};
    grid-column: 2 / span 1;
    grid-row: 1;
  }

  button:focus-visible::after {
    content: '';
    position: absolute;
    inset: 0px;
    cursor: pointer;
    border-radius: ${gt};
    outline: none;
    border: 2px solid ${mc};
    box-shadow: inset 0 0 0 1px ${Kt};
  }

  /* --- Disabled attr styles --- */

  :host(${fe}) .button {
    color: ${Ie};
  }

  :host(${fe}) svg {
    filter: invert(89%) sepia(0%) saturate(569%) hue-rotate(155deg) brightness(88%) contrast(87%);
  }

  /* --- Expanded attr styles --- */

  :host(${$e}) .content {
    display: block;
  }

  :host(${$e}) .default-marker-collapsed,
  :host(${$e}) ::slotted([slot='marker-collapsed']),
  :host(:not(${$e})) :is(.default-marker-expanded, .content),
  :host(:not(${$e})) ::slotted([slot='marker-expanded']) {
    display: none;
  }

  :host(${$e}) ::slotted([slot='marker-expanded']),
  :host(:not(${$e})) ::slotted([slot='marker-collapsed']) {
    display: flex;
  }

  /* --- Appearance attr styles --- */

  .heading {
    font-size: ${le};
    line-height: ${Ne};
  }

  :host(${L}) .heading {
    font-size: ${te};
    line-height: ${ce};
  }

  :host(${N}) .heading {
    font-size: ${ze};
    line-height: ${yt};
  }

  :host(${Ht}) .heading {
    font-size: ${ls};
    line-height: ${mn};
  }

  /* --- marker-position attr styles --- */

  :host(${ye}) :slotted([slot='start']) {
    grid-column: 1 / span 1;
  }

  :host(${ye}) :is(.default-marker-collapsed, .default-marker-expanded) {
    grid-column: 4 / span 1;
    padding-inline-start: ${lt};
    padding-inline-end: 0;
  }

  :host(${ye}) .button {
    grid-column: 2 / span 3;
  }

  /* --- Block attr styles --- */

  :host([block]) {
    max-width: 100%;
  }

  :host(${ye}) .heading {
    grid-template-columns: auto auto 28px;
    padding-inline: ${Ee};
  }

  :host(${ye}:has([slot='start'])) .heading {
    padding-inline: ${Gt} ${Ee};
  }

  :host(${_t}${ye}) .heading {
    grid-template-columns: auto 1fr;
  }

  :host(${ye}) :is(.default-marker-collapsed, .default-marker-expanded) {
    grid-column: 5 / span 1;
  }
`,m=Object.freeze({prefix:"fluent",shadowRootMode:"open",registry:customElements}),ph=k.partial(`<svg
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="default-marker-collapsed"
  aria-hidden="true"
>
  <path
    d="M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z"
    fill="currentColor"
  />
</svg>`),gh=k.partial(`<svg
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="default-marker-expanded"
  aria-hidden="true"
>
  <path
    d="M15.794 7.73271C16.0797 8.03263 16.0681 8.50737 15.7682 8.79306L10.5178 13.7944C10.2281 14.0703 9.77285 14.0703 9.48318 13.7944L4.23271 8.79306C3.93279 8.50737 3.92125 8.03263 4.20694 7.73271C4.49264 7.43279 4.96737 7.42125 5.26729 7.70694L10.0005 12.2155L14.7336 7.70694C15.0336 7.42125 15.5083 7.43279 15.794 7.73271Z"
    fill="currentColor"
  />
</svg>`);function fh(o={}){return k`
    <div class="heading" part="heading" role="heading" aria-level="${e=>e.headinglevel}">
      <button
        class="button"
        part="button"
        ${be("expandbutton")}
        ?disabled="${e=>e.disabled?"true":void 0}"
        aria-expanded="${e=>e.expanded}"
        aria-controls="${e=>e.id}-panel"
        id="${e=>e.id}"
      >
        <slot name="heading"></slot>
      </button>
      ${Je(o)}
      <slot name="marker-expanded"> ${Fe(o.expandedIcon)} </slot>
      <slot name="marker-collapsed"> ${Fe(o.collapsedIcon)} </slot>
    </div>
    <div class="content" part="content" id="${e=>e.id}-panel" role="region" aria-labelledby="${e=>e.id}">
      <slot></slot>
    </div>
  `}const vh=fh({collapsedIcon:ph,expandedIcon:gh}),mh=kt.compose({name:`${m.prefix}-accordion-item`,template:vh,styles:uh}),bs={single:"single",multi:"multi"};class co extends z{constructor(){super(...arguments),this.expandmode=bs.multi,this.activeItemIndex=0,this.setItems=()=>{if(this.slottedAccordionItems.length===0)return;const e=Array.from(this.children);if(this.removeItemListeners(e),e.forEach(t=>v.getNotifier(t).subscribe(this,"disabled")),this.accordionItems=e.filter(t=>!t.hasAttribute("disabled")),this.accordionItems.forEach((t,s)=>{t instanceof re&&(t.addEventListener("click",this.expandedChangedHandler),v.getNotifier(t).subscribe(this,"expanded"))}),this.isSingleExpandMode()){const t=this.findExpandedItem();this.setSingleExpandMode(t)}},this.removeItemListeners=e=>{e.forEach((t,s)=>{v.getNotifier(t).unsubscribe(this,"disabled"),v.getNotifier(t).unsubscribe(this,"expanded"),t.removeEventListener("click",this.expandedChangedHandler)})},this.expandedChangedHandler=e=>{const t=e.target;t instanceof re&&(this.isSingleExpandMode()?this.setSingleExpandMode(t):(t.expanded=!t.expanded,this.activeItemIndex=this.accordionItems.indexOf(t)),this.$emit("change"))}}expandmodeChanged(e,t){if(!this.$fastController.isConnected)return;const s=this.findExpandedItem();if(s){if(t===bs.single){this.setSingleExpandMode(s);return}s==null||s.expandbutton.removeAttribute("aria-disabled")}}slottedAccordionItemsChanged(e,t){this.$fastController.isConnected&&this.setItems()}handleChange(e,t){t==="disabled"?this.setItems():t==="expanded"&&e.expanded&&this.isSingleExpandMode()&&this.setSingleExpandMode(e)}findExpandedItem(){var e;return this.accordionItems.length===0?null:(e=this.accordionItems.find(t=>t instanceof re&&t.expanded))!==null&&e!==void 0?e:this.accordionItems[0]}isSingleExpandMode(){return this.expandmode===bs.single}setSingleExpandMode(e){if(this.accordionItems.length===0)return;const t=Array.from(this.accordionItems);this.activeItemIndex=t.indexOf(e),t.forEach((s,r)=>{s instanceof re&&(this.activeItemIndex===r?(s.expanded=!0,s.expandbutton.setAttribute("aria-disabled","true")):(s.expanded=!1,s.hasAttribute("disabled")||s.expandbutton.removeAttribute("aria-disabled")))})}}h([p({attribute:"expand-mode"})],co.prototype,"expandmode",void 0);h([V],co.prototype,"slottedAccordionItems",void 0);function bh(){return k`
    <template>
      <slot ${ae({property:"slottedAccordionItems",filter:As()})}></slot>
    </template>
  `}const wh=bh(),kh=b`
  ${_("flex")}

  :host {
    flex-direction: column;
    width: 100%;
    contain: content;
  }
`,yh=co.compose({name:`${m.prefix}-accordion`,template:wh,styles:kh}),$n={primary:"primary",outline:"outline",subtle:"subtle",transparent:"transparent"},xn={circular:"circular",rounded:"rounded",square:"square"},Sn={small:"small",medium:"medium",large:"large"},Et={submit:"submit",reset:"reset",button:"button"},$h=$n,xh=xn,Sh=Sn,Ch={download:"download",href:"href",hreflang:"hreflang",ping:"ping",referrerpolicy:"referrerpolicy",rel:"rel",target:"target",type:"type"};class de extends z{constructor(){super(),this.isMac=navigator.userAgent.includes("Mac"),this.elementInternals=this.attachInternals(),this.internalProxyAnchor=this.createProxyElement(),this.elementInternals.role="link"}connectedCallback(){super.connectedCallback(),v.getNotifier(this).subscribe(this),Object.keys(this.$fastController.definition.attributeLookup).forEach(e=>{this.handleChange(this,e)}),this.append(this.internalProxyAnchor)}disconnectedCallback(){super.disconnectedCallback(),v.getNotifier(this).unsubscribe(this)}handleChange(e,t){var s;if(t in Ch){const r=(s=this.$fastController.definition.attributeLookup[t])===null||s===void 0?void 0:s.attribute;r&&this.handleProxyAttributeChange(r,this[t])}}clickHandler(e){if(this.href){const t=this.isMac?e.metaKey:e.ctrlKey;this.handleNavigation(t)}return!0}keydownHandler(e){if(this.href&&e.key===ts){const t=this.isMac&&e.metaKey||e.ctrlKey;this.handleNavigation(t);return}return!0}handleNavigation(e){e?window.open(this.href,"_blank"):this.internalProxyAnchor.click()}handleProxyAttributeChange(e,t){t?this.internalProxyAnchor.setAttribute(e,t):this.internalProxyAnchor.removeAttribute(e)}createProxyElement(){var e;const t=(e=this.internalProxyAnchor)!==null&&e!==void 0?e:document.createElement("a");return t.ariaHidden="true",t.tabIndex=-1,t}}h([p],de.prototype,"download",void 0);h([p],de.prototype,"href",void 0);h([p],de.prototype,"hreflang",void 0);h([p],de.prototype,"ping",void 0);h([p],de.prototype,"referrerpolicy",void 0);h([p],de.prototype,"rel",void 0);h([p],de.prototype,"target",void 0);h([p],de.prototype,"type",void 0);class tt extends de{constructor(){super(...arguments),this.iconOnly=!1}appearanceChanged(e,t){w(this.elementInternals,e,t,$h)}shapeChanged(e,t){w(this.elementInternals,e,t,xh)}sizeChanged(e,t){w(this.elementInternals,e,t,Sh)}iconOnlyChanged(e,t){S(this.elementInternals,"icon",!!t)}}h([p],tt.prototype,"appearance",void 0);h([p],tt.prototype,"shape",void 0);h([p],tt.prototype,"size",void 0);h([p({attribute:"icon-only",mode:"boolean"})],tt.prototype,"iconOnly",void 0);et(tt,Ye);const Eh=/[\(\[\{][^\)\]\}]*[\)\]\}]/g,Ah=/[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g,Bh=/^\d+[\d\s]*(:?ext|x|)\s*\d+$/i,Th=/\s+/g,Mh=/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;function Oh(o,e,t){let s="";const r=o.split(" ");return r.length!==0&&(s+=r[0].charAt(0).toUpperCase()),t||(r.length===2?s+=r[1].charAt(0).toUpperCase():r.length===3&&(s+=r[2].charAt(0).toUpperCase())),e&&s.length>1?s.charAt(1)+s.charAt(0):s}function Fh(o){return o=o.replace(Eh,""),o=o.replace(Ah,""),o=o.replace(Th," "),o=o.trim(),o}function Ih(o,e,t){return!o||(o=Fh(o),Mh.test(o)||!(t!=null&&t.allowPhoneInitials)&&Bh.test(o))?"":Oh(o,e,t==null?void 0:t.firstInitialOnly)}const Cn={darkRed:"dark-red",cranberry:"cranberry",red:"red",pumpkin:"pumpkin",peach:"peach",marigold:"marigold",gold:"gold",brass:"brass",brown:"brown",forest:"forest",seafoam:"seafoam",darkGreen:"dark-green",lightTeal:"light-teal",teal:"teal",steel:"steel",blue:"blue",royalBlue:"royal-blue",cornflower:"cornflower",navy:"navy",lavender:"lavender",purple:"purple",grape:"grape",lilac:"lilac",pink:"pink",magenta:"magenta",plum:"plum",beige:"beige",mink:"mink",platinum:"platinum",anchor:"anchor"},fr={neutral:"neutral",brand:"brand",colorful:"colorful",...Cn};class ds extends z{constructor(){super(),this.elementInternals=this.attachInternals(),this.elementInternals.role="img"}}h([p],ds.prototype,"name",void 0);h([p],ds.prototype,"initials",void 0);h([p],ds.prototype,"active",void 0);class se extends ds{handleChange(e,t){switch(t){case"color":case"colorId":this.generateColor();break}}generateInitials(){var e,t;if(!this.name&&!this.initials)return;const s=(e=this.size)!==null&&e!==void 0?e:32;return(t=this.initials)!==null&&t!==void 0?t:Ih(this.name,window.getComputedStyle(this).direction==="rtl",{firstInitialOnly:s<=16})}generateColor(){var e,t;const s=this.color===fr.colorful,r=this.currentColor;this.currentColor=s&&this.colorId?this.colorId:s?se.colors[zh((e=this.name)!==null&&e!==void 0?e:"")%se.colors.length]:(t=this.color)!==null&&t!==void 0?t:fr.neutral,w(this.elementInternals,r,this.currentColor)}connectedCallback(){super.connectedCallback(),v.getNotifier(this).subscribe(this),this.generateColor()}disconnectedCallback(){super.disconnectedCallback(),v.getNotifier(this).unsubscribe(this)}}se.colors=Object.values(Cn);h([p],se.prototype,"shape",void 0);h([p],se.prototype,"appearance",void 0);h([p({converter:we})],se.prototype,"size",void 0);h([p],se.prototype,"color",void 0);h([p({attribute:"color-id"})],se.prototype,"colorId",void 0);const zh=o=>{let e=0;for(let t=o.length-1;t>=0;t--){const s=o.charCodeAt(t),r=t%8;e^=(s<<r)+(s>>8-r)}return e},Nh=k`<svg
  width="1em"
  height="1em"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
  class="default-icon"
  fill="currentcolor"
  aria-hidden="true"
>
  <path
    d="M10 2a4 4 0 100 8 4 4 0 000-8zM7 6a3 3 0 116 0 3 3 0 01-6 0zm-2 5a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0010 18c1.85 0 3.58-.39 4.87-1.2A4.35 4.35 0 0017 13a2 2 0 00-2-2H5zm-1 2a1 1 0 011-1h10a1 1 0 011 1c0 1.3-.62 2.28-1.67 2.95A8.16 8.16 0 0110 17a8.16 8.16 0 01-4.33-1.05A3.36 3.36 0 014 13z"
  ></path>
</svg>`;function Lh(){return k`
    <slot>${o=>o.name||o.initials?o.generateInitials():Nh}</slot>
    <slot name="badge"></slot>
  `}const Ph=Lh(),ge={fastOutSlowInMax:lh,fastOutSlowInMid:ao,fastOutSlowInMin:ch,slowOutFastInMax:ih,slowOutFastInMid:io,slowOutFastInMin:ah,fastEase:dh,normalEase:lo,nullEasing:hh},Dh=b`
  ${_("inline-flex")} :host {
    position: relative;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    font-family: ${ee};
    font-weight: ${cs};
    font-size: ${le};
    border-radius: ${Wt};
    color: ${Q};
    background-color: ${ac};
    contain: layout style;
  }

  .default-icon,
  ::slotted(svg) {
    width: 20px;
    height: 20px;
    font-size: 20px;
  }

  ::slotted(img) {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: ${Wt};
  }

  ::slotted([slot='badge']) {
    position: absolute;
    bottom: 0;
    right: 0;
    box-shadow: 0 0 0 ${j}) ${P};
  }

  :host([size='64']) ::slotted([slot='badge']),
  :host([size='72']) ::slotted([slot='badge']),
  :host([size='96']) ::slotted([slot='badge']),
  :host([size='120']) ::slotted([slot='badge']),
  :host([size='128']) ::slotted([slot='badge']) {
    box-shadow: 0 0 0 ${Me}) ${P};
  }

  :host([size='16']),
  :host([size='20']),
  :host([size='24']) {
    font-size: ${oo};
    font-weight: ${q};
  }

  :host([size='16']) {
    width: 16px;
    height: 16px;
  }

  :host([size='20']) {
    width: 20px;
    height: 20px;
  }

  :host([size='24']) {
    width: 24px;
    height: 24px;
  }

  :host([size='16']) .default-icon,
  :host([size='16']) ::slotted(svg) {
    width: 12px;
    height: 12px;
    font-size: 12px;
  }

  :host([size='20']) .default-icon,
  :host([size='24']) .default-icon,
  :host([size='20']) ::slotted(svg),
  :host([size='24']) ::slotted(svg) {
    width: 16px;
    height: 16px;
    font-size: 16px;
  }

  :host([size='28']) {
    width: 28px;
    height: 28px;
    font-size: ${te};
  }

  :host([size='36']) {
    width: 36px;
    height: 36px;
  }

  :host([size='40']) {
    width: 40px;
    height: 40px;
  }

  :host([size='48']),
  :host([size='56']) {
    font-size: ${ze};
  }

  :host([size='48']) {
    width: 48px;
    height: 48px;
  }

  :host([size='48']) .default-icon,
  :host([size='48']) ::slotted(svg) {
    width: 24px;
    height: 24px;
    font-size: 24px;
  }

  :host([size='56']) {
    width: 56px;
    height: 56px;
  }

  :host([size='56']) .default-icon,
  :host([size='56']) ::slotted(svg) {
    width: 28px;
    height: 28px;
    font-size: 28px;
  }

  :host([size='64']),
  :host([size='72']),
  :host([size='96']) {
    font-size: ${ls};
  }

  :host([size='64']) .default-icon,
  :host([size='72']) .default-icon,
  :host([size='64']) ::slotted(svg),
  :host([size='72']) ::slotted(svg) {
    width: 32px;
    height: 32px;
    font-size: 32px;
  }

  :host([size='64']) {
    width: 64px;
    height: 64px;
  }

  :host([size='72']) {
    width: 72px;
    height: 72px;
  }

  :host([size='96']) {
    width: 96px;
    height: 96px;
  }

  :host([size='96']) .default-icon,
  :host([size='120']) .default-icon,
  :host([size='128']) .default-icon,
  :host([size='96']) ::slotted(svg),
  :host([size='120']) ::slotted(svg),
  :host([size='128']) ::slotted(svg) {
    width: 48px;
    height: 48px;
    font-size: 48px;
  }

  :host([size='120']),
  :host([size='128']) {
    font-size: ${ro};
  }

  :host([size='120']) {
    width: 120px;
    height: 120px;
  }

  :host([size='128']) {
    width: 128px;
    height: 128px;
  }

  :host([shape='square']) {
    border-radius: ${B};
  }

  :host([shape='square'][size='20']),
  :host([shape='square'][size='24']) {
    border-radius: ${gt};
  }

  :host([shape='square'][size='56']),
  :host([shape='square'][size='64']),
  :host([shape='square'][size='72']) {
    border-radius: ${fn};
  }
  :host([shape='square'][size='96']),
  :host([shape='square'][size='120']),
  :host([shape='square'][size='128']) {
    border-radius: ${Hd};
  }

  :host(${sl}) {
    color: ${on};
    background-color: ${ur};
  }

  :host(${cl}) {
    color: ${sd};
    background-color: ${td};
  }

  :host(${al}) {
    color: ${Yc};
    background-color: ${Qc};
  }

  :host(${Il}) {
    color: ${xc};
    background-color: ${wc};
  }

  :host(${Ol}) {
    color: ${Md};
    background-color: ${Td};
  }

  :host(${Al}) {
    color: ${$d};
    background-color: ${yd};
  }

  :host(${yl}) {
    color: ${Dc};
    background-color: ${Pc};
  }

  :host(${ul}) {
    color: ${id};
    background-color: ${nd};
  }

  :host(${ol}) {
    color: ${Kc};
    background-color: ${Uc};
  }

  :host(${rl}) {
    color: ${Gc};
    background-color: ${Wc};
  }

  :host(${hl}) {
    color: ${rd};
    background-color: ${od};
  }

  :host(${Dl}) {
    color: ${Ld};
    background-color: ${Nd};
  }

  :host(${ll}) {
    color: ${ed};
    background-color: ${Jc};
  }

  :host(${bl}) {
    color: ${ud};
    background-color: ${hd};
  }

  :host(${Zl}) {
    color: ${_d};
    background-color: ${Vd};
  }

  :host(${Xl}) {
    color: ${Dd};
    background-color: ${Pd};
  }

  :host(${el}) {
    color: ${qc};
    background-color: ${jc};
  }

  :host(${Pl}) {
    color: ${zd};
    background-color: ${Id};
  }

  :host(${il}) {
    color: ${Zc};
    background-color: ${Xc};
  }

  :host(${Cl}) {
    color: ${kd};
    background-color: ${wd};
  }

  :host(${ml}) {
    color: ${dd};
    background-color: ${cd};
  }

  :host(${Fl}) {
    color: ${Fd};
    background-color: ${Od};
  }

  :host(${pl}) {
    color: ${ld};
    background-color: ${ad};
  }

  :host(${wl}) {
    color: ${gd};
    background-color: ${pd};
  }

  :host(${Bl}) {
    color: ${Sd};
    background-color: ${xd};
  }

  :host(${kl}) {
    color: ${vd};
    background-color: ${fd};
  }

  :host(${Ml}) {
    color: ${Bd};
    background-color: ${Ad};
  }

  :host(${Ja}) {
    color: ${Rc};
    background-color: ${Hc};
  }

  :host(${xl}) {
    color: ${bd};
    background-color: ${md};
  }

  :host(${Tl}) {
    color: ${Ed};
    background-color: ${Cd};
  }

  :host(${Ya}) {
    color: ${_c};
    background-color: ${Vc};
  }

  :host([active]) {
    /* Work-around for text pixel snapping at the end of the animation */
    transform: perspective(1px);
    transition-property: transform, opacity;
    transition-duration: ${Ct}, ${Ds};
    transition-delay: ${ge.fastEase}, ${ge.nullEasing};
  }

  :host([active])::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: inherit;
    transition-property: margin, opacity;
    transition-duration: ${Ct}), ${gr};
    transition-delay: ${ge.fastEase}), ${ge.nullEasing});
  }
  :host([active])::before {
    box-shadow: ${th};
    border-style: solid;
    border-color: ${ur};
  }

  :host([active][appearance='shadow'])::before {
    border-style: none;
    border-color: none;
  }

  :host([active]:not([appearance='shadow']))::before {
    margin: calc(-2 * ${Me});
    border-width: ${Me};
  }

  :host([size='56'][active]:not([appearance='shadow']))::before,
  :host([size='64'][active]:not([appearance='shadow']))::before {
    margin: calc(-2 * ${at});
    border-width: ${at};
  }

  :host([size='72'][active]:not([appearance='shadow']))::before,
  :host([size='96'][active]:not([appearance='shadow']))::before,
  :host([size='120'][active]:not([appearance='shadow']))::before,
  :host([size='128'][active]:not([appearance='shadow']))::before {
    margin: calc(-2 * ${Ls});
    border-width: ${Ls};
  }

  :host([size='20'][active][appearance])::before,
  :host([size='24'][active][appearance])::before,
  :host([size='28'][active][appearance])::before {
    box-shadow: ${bn};
  }

  :host([size='56'][active][appearance])::before,
  :host([size='64'][active][appearance])::before {
    box-shadow: ${wn};
  }

  :host([size='72'][active][appearance])::before,
  :host([size='96'][active][appearance])::before,
  :host([size='120'][active][appearance])::before,
  :host([size='128'][active][appearance])::before {
    box-shadow: ${sh};
  }

  :host([active][appearance='ring'])::before {
    box-shadow: none;
  }

  :host([active='inactive']) {
    opacity: 0.8;
    transform: scale(0.875);
    transition-property: transform, opacity;
    transition-duration: ${Ct}, ${Ds};
    transition-delay: ${ge.fastOutSlowInMin}, ${ge.nullEasing};
  }

  :host([active='inactive'])::before {
    margin: 0;
    opacity: 0;
    transition-property: margin, opacity;
    transition-duration: ${Ct}, ${gr};
    transition-delay: ${ge.fastOutSlowInMin}, ${ge.nullEasing};
  }

  @media screen and (prefers-reduced-motion: reduce) {
    :host([active]) {
      transition-duration: 0.01ms;
    }

    :host([active])::before {
      transition-duration: 0.01ms;
      transition-delay: 0.01ms;
    }
  }
`,Vh=se.compose({name:`${m.prefix}-avatar`,template:Ph,styles:Dh}),vr={filled:"filled",ghost:"ghost",outline:"outline",tint:"tint"},mr={brand:"brand",danger:"danger",important:"important",informative:"informative",severe:"severe",subtle:"subtle",success:"success",warning:"warning"},_h={circular:"circular",rounded:"rounded",square:"square"},Hh={tiny:"tiny",extraSmall:"extra-small",small:"small",medium:"medium",large:"large",extraLarge:"extra-large"};class st extends z{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.appearance=vr.filled,this.color=mr.brand}appearanceChanged(e,t){w(this.elementInternals,e,t,vr)}colorChanged(e,t){w(this.elementInternals,e,t,mr)}shapeChanged(e,t){w(this.elementInternals,e,t,_h)}sizeChanged(e,t){w(this.elementInternals,e,t,Hh)}}h([p],st.prototype,"appearance",void 0);h([p],st.prototype,"color",void 0);h([p],st.prototype,"shape",void 0);h([p],st.prototype,"size",void 0);et(st,Ye);function Rh(o={}){return k`
    ${Je(o)}
    <slot>${Fe(o.defaultContent)}</slot>
    ${wt(o)}
  `}const jh=Rh(),qh=b.partial`
  ${_("inline-flex")} :host {
    position: relative;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    font-family: ${ee};
    font-weight: ${cs};
    font-size: ${te};
    line-height: ${ce};
    min-width: 20px;
    height: 20px;
    padding-inline: calc(${Ge} + ${U});
    border-radius: ${Wt};
    border-color: ${We};
    background-color: ${cn};
    color: ${Te};
    contain: content;
  }

  ::slotted(svg) {
    font-size: 12px;
  }

  :host(:not(${oe}))::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-style: solid;
    border-width: ${j};
    border-color: inherit;
    border-radius: inherit;
  }
`,Uh=b.partial`
  :host(${jt}) {
    width: 6px;
    height: 6px;
    font-size: 4px;
    line-height: 4px;
    padding-inline: 0;
    min-width: unset;
  }
  :host(${jt}) ::slotted(svg) {
    font-size: 6px;
  }
  :host(${Rt}) {
    width: 10px;
    height: 10px;
    font-size: 6px;
    line-height: 6px;
    padding-inline: 0;
    min-width: unset;
  }
  :host(${Rt}) ::slotted(svg) {
    font-size: 10px;
  }
  :host(${L}) {
    min-width: 16px;
    height: 16px;
    font-size: ${oo};
    line-height: ${vn};
    padding-inline: calc(${U} + ${U});
  }
  :host(${L}) ::slotted(svg) {
    font-size: 12px;
  }
  :host(${N}) {
    min-width: 24px;
    height: 24px;
    font-size: ${te};
    line-height: ${ce};
    padding-inline: calc(${Ge} + ${U});
  }
  :host(${N}) ::slotted(svg) {
    font-size: 16px;
  }
  :host(${Ht}) {
    min-width: 32px;
    height: 32px;
    font-size: ${te};
    line-height: ${ce};
    padding-inline: calc(${ft} + ${U});
  }
  :host(${Ht}) ::slotted(svg) {
    font-size: 20px;
  }
`,Kh=b.partial`
  :host(${ss}) {
    background-color: ${kc};
    color: ${Te};
  }

  :host(${os}) {
    background-color: ${ne};
    color: ${P};
  }

  :host(${rs}) {
    background-color: ${ic};
    color: ${Q};
  }

  :host(${ns}) {
    background-color: ${Oc};
    color: ${Te};
  }

  :host(${R}) {
    background-color: ${P};
    color: ${ne};
  }

  :host(${is}) {
    background-color: ${Cc};
    color: ${Te};
  }

  :host(${as}) {
    background-color: ${Nc};
    color: ${sc};
  }
`,Wh=b.partial`
  :host(${oe}) {
    color: ${rn};
    background-color: initial;
  }

  :host(${oe}${ss}) {
    color: ${un};
  }

  :host(${oe}${os}) {
    color: ${ne};
  }

  :host(${oe}${rs}) {
    color: ${Q};
  }

  :host(${oe}${ns}) {
    color: ${pn};
  }

  :host(${oe}${R}) {
    color: ${Js};
  }

  :host(${oe}${is}) {
    color: ${Tc};
  }

  :host(${oe}${as}) {
    color: ${so};
  }
`,Gh=b.partial`
  :host(${F}) {
    border-color: currentColor;
    color: ${rn};
    background-color: initial;
  }

  :host(${F}${ss}) {
    color: ${un};
  }

  :host(${F}${os}) {
    color: ${Q};
    border-color: ${qt};
  }

  :host(${F}${rs}) {
    color: ${Q};
    border-color: ${zs};
  }

  :host(${F}${ns}) {
    color: ${pn};
  }

  :host(${F}${R}) {
    color: ${on};
  }

  :host(${F}${is}) {
    color: ${Bc};
  }

  :host(${F}${as}) {
    color: ${so};
  }
`,Xh=b.partial`
  :host(${pe}) {
    background-color: ${pc};
    color: ${tc};
    border-color: ${dn};
  }

  :host(${pe}${ss}) {
    background-color: ${bc};
    color: ${$c};
    border-color: ${yc};
  }

  :host(${pe}${os}) {
    background-color: ${Q};
    color: ${P};
    border-color: ${We};
  }

  :host(${pe}${rs}) {
    background-color: ${nc};
    color: ${Q};
    border-color: ${zs};
  }

  :host(${pe}${ns}) {
    background-color: ${Mc};
    color: ${Ic};
    border-color: ${Fc};
  }

  :host(${pe}${R}) {
    background-color: ${P};
    color: ${Q};
    border-color: ${zs};
  }

  :host(${pe}${is}) {
    background-color: ${Sc};
    color: ${Ac};
    border-color: ${Ec};
  }

  :host(${pe}${as}) {
    background-color: ${zc};
    color: ${so};
    border-color: ${Lc};
  }
`,Zh=b`
  :host(${Ts}) {
    border-radius: ${gn};
  }

  :host(${xt}) {
    border-radius: ${B};
  }

  :host(${xt}${jt}),
  :host(${xt}${Rt}),
  :host(${xt}${L}) {
    border-radius: ${gt};
  }

  ${Uh}
  ${Kh}
  ${Wh}
  ${Gh}
  ${Xh}
  ${qh}
`.withBehaviors(Qe(b`
    :host,
    :host([appearance='outline']),
    :host([appearance='tint']) {
      border-color: CanvasText;
    }
  `)),Qh=st.compose({name:`${m.prefix}-badge`,template:jh,styles:Zh});class M extends z{disabledFocusableChanged(e,t){this.$fastController.isConnected&&(this.elementInternals.ariaDisabled=`${!!t}`)}get form(){return this.elementInternals.form}get labels(){return Object.freeze(Array.from(this.elementInternals.labels))}typeChanged(e,t){var s,r,n;t!==Et.submit&&((s=this.formSubmissionFallbackControl)===null||s===void 0||s.remove(),(n=(r=this.shadowRoot)===null||r===void 0?void 0:r.querySelector('slot[name="internal"]'))===null||n===void 0||n.remove())}clickHandler(e){if(e&&this.disabledFocusable){e.stopImmediatePropagation();return}return this.press(),!0}connectedCallback(){super.connectedCallback(),this.elementInternals.ariaDisabled=`${!!this.disabledFocusable}`}constructor(){super(),this.disabledFocusable=!1,this.tabIndex=0,this.elementInternals=this.attachInternals(),this.elementInternals.role="button"}createAndInsertFormSubmissionFallbackControl(){var e,t,s,r,n,i,a,c;const u=(e=this.formSubmissionFallbackControlSlot)!==null&&e!==void 0?e:document.createElement("slot");u.setAttribute("name","internal"),(t=this.shadowRoot)===null||t===void 0||t.appendChild(u),this.formSubmissionFallbackControlSlot=u;const l=(s=this.formSubmissionFallbackControl)!==null&&s!==void 0?s:document.createElement("button");l.style.display="none",l.setAttribute("type","submit"),l.setAttribute("slot","internal"),this.formNoValidate&&l.toggleAttribute("formnovalidate",!0),!((r=this.elementInternals.form)===null||r===void 0)&&r.id&&l.setAttribute("form",this.elementInternals.form.id),this.name&&l.setAttribute("name",this.name),this.value&&l.setAttribute("value",this.value),this.formAction&&l.setAttribute("formaction",(n=this.formAction)!==null&&n!==void 0?n:""),this.formEnctype&&l.setAttribute("formenctype",(i=this.formEnctype)!==null&&i!==void 0?i:""),this.formMethod&&l.setAttribute("formmethod",(a=this.formMethod)!==null&&a!==void 0?a:""),this.formTarget&&l.setAttribute("formtarget",(c=this.formTarget)!==null&&c!==void 0?c:""),this.append(l),this.formSubmissionFallbackControl=l}formDisabledCallback(e){this.disabled=e}keypressHandler(e){if(e&&this.disabledFocusable){e.stopImmediatePropagation();return}if(e.key===ts||e.key===Qs){this.click();return}return!0}press(){switch(this.type){case Et.reset:{this.resetForm();break}case Et.submit:{this.submitForm();break}}}resetForm(){var e;(e=this.elementInternals.form)===null||e===void 0||e.reset()}submitForm(){var e;if(!(!this.elementInternals.form||this.disabled||this.type!==Et.submit)){if(!this.name&&!this.formAction&&!this.formEnctype&&!this.form&&!this.formMethod&&!this.formNoValidate&&!this.formTarget){this.elementInternals.form.requestSubmit();return}try{this.elementInternals.setFormValue((e=this.value)!==null&&e!==void 0?e:""),this.elementInternals.form.requestSubmit(this)}catch{this.createAndInsertFormSubmissionFallbackControl(),this.elementInternals.setFormValue(null),this.elementInternals.form.requestSubmit(this.formSubmissionFallbackControl)}}}}M.formAssociated=!0;h([p({mode:"boolean"})],M.prototype,"autofocus",void 0);h([V],M.prototype,"defaultSlottedContent",void 0);h([p({mode:"boolean"})],M.prototype,"disabled",void 0);h([p({attribute:"disabled-focusable",mode:"boolean"})],M.prototype,"disabledFocusable",void 0);h([p({attribute:"tabindex",mode:"fromView",converter:we})],M.prototype,"tabIndex",void 0);h([p({attribute:"formaction"})],M.prototype,"formAction",void 0);h([p({attribute:"form"})],M.prototype,"formAttribute",void 0);h([p({attribute:"formenctype"})],M.prototype,"formEnctype",void 0);h([p({attribute:"formmethod"})],M.prototype,"formMethod",void 0);h([p({attribute:"formnovalidate",mode:"boolean"})],M.prototype,"formNoValidate",void 0);h([p({attribute:"formtarget"})],M.prototype,"formTarget",void 0);h([p],M.prototype,"name",void 0);h([p],M.prototype,"type",void 0);h([p],M.prototype,"value",void 0);class Pe extends M{constructor(){super(...arguments),this.iconOnly=!1}appearanceChanged(e,t){w(this.elementInternals,e,t,$n)}shapeChanged(e,t){w(this.elementInternals,e,t,xn)}sizeChanged(e,t){w(this.elementInternals,e,t,Sn)}iconOnlyChanged(e,t){S(this.elementInternals,"icon",t)}}h([p],Pe.prototype,"appearance",void 0);h([p],Pe.prototype,"shape",void 0);h([p],Pe.prototype,"size",void 0);h([p({attribute:"icon-only",mode:"boolean"})],Pe.prototype,"iconOnly",void 0);et(Pe,Ye);const En=b`
  ${_("inline-flex")}

  :host {
    --icon-spacing: ${ft};
    position: relative;
    contain: layout style;
    vertical-align: middle;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    text-align: center;
    text-decoration-line: none;
    margin: 0;
    min-height: 32px;
    outline-style: none;
    background-color: ${P};
    color: ${ne};
    border: ${j} solid ${pt};
    padding: 0 ${Ee};
    min-width: 96px;
    border-radius: ${B};
    font-size: ${le};
    font-family: ${ee};
    font-weight: ${cs};
    line-height: ${Ne};
    transition-duration: ${Ds};
    transition-property: background, border, color;
    transition-timing-function: ${lo};
    cursor: pointer;
    user-select: none;
  }

  .content {
    display: inherit;
  }

  :host(:hover) {
    background-color: ${nn};
    color: ${Yl};
    border-color: ${eo};
  }

  :host(:hover:active) {
    background-color: ${oc};
    border-color: ${to};
    color: ${Jl};
    outline-style: none;
  }

  :host(:focus-visible) {
    border-color: ${We};
    outline: ${Me} solid ${We};
    box-shadow: ${bn}, 0 0 0 2px ${Kt};
  }

  @media screen and (prefers-reduced-motion: reduce) {
    :host {
      transition-duration: 0.01ms;
    }
  }

  ::slotted(svg) {
    font-size: 20px;
    height: 20px;
    width: 20px;
    fill: currentColor;
  }

  :is([slot='start'], ::slotted([slot='start'])) {
    margin-inline-end: var(--icon-spacing);
  }

  :is([slot='end'], ::slotted([slot='end'])) {
    flex-shrink: 0;
  }

  :host(:not(${ot})) :is([slot='end'], :host(:not(${ot}))::slotted([slot='end'])) {
    margin-inline-start: var(--icon-spacing);
  }

  :host(${ot}) {
    min-width: 32px;
    max-width: 32px;
  }

  :host(${L}) {
    --icon-spacing: ${Ge};
    min-height: 24px;
    min-width: 64px;
    padding: 0 ${lt};
    border-radius: ${gt};
    font-size: ${te};
    line-height: ${ce};
    font-weight: ${q};
  }

  :host(${L}${ot}) {
    min-width: 24px;
    max-width: 24px;
  }

  :host(${N}) {
    min-height: 40px;
    border-radius: ${fn};
    padding: 0 ${oh};
    font-size: ${ze};
    line-height: ${yt};
  }

  :host(${N}${ot}) {
    min-width: 40px;
    max-width: 40px;
  }

  :host(${N}) ::slotted(svg) {
    font-size: 24px;
    height: 24px;
    width: 24px;
  }

  :host(:is(${sr}, ${sr}:focus-visible)) {
    border-radius: ${Wt};
  }

  :host(:is(${Ts}, ${Ts}:focus-visible)) {
    border-radius: ${gn};
  }

  :host(${ve}) {
    background-color: ${cn};
    color: ${Te};
    border-color: transparent;
  }

  :host(${ve}:hover) {
    background-color: ${hc};
  }

  :host(${ve}:is(:hover, :hover:active)) {
    border-color: transparent;
    color: ${Te};
  }

  :host(${ve}:hover:active) {
    background-color: ${uc};
  }

  :host(${ve}:focus-visible) {
    border-color: ${Te};
    box-shadow: ${no}, 0 0 0 2px ${Kt};
  }

  :host(${F}) {
    background-color: ${Y};
  }

  :host(${F}:hover) {
    background-color: ${dr};
  }

  :host(${F}:hover:active) {
    background-color: ${hr};
  }

  :host(${R}) {
    background-color: ${lc};
    color: ${Ms};
    border-color: transparent;
  }

  :host(${R}:hover) {
    background-color: ${cc};
    color: ${en};
    border-color: transparent;
  }

  :host(${R}:hover:active) {
    background-color: ${dc};
    color: ${tn};
    border-color: transparent;
  }

  :host(${R}:hover) ::slotted(svg) {
    fill: ${lr};
  }

  :host(${R}:hover:active) ::slotted(svg) {
    fill: ${cr};
  }

  :host(${xe}) {
    background-color: ${Y};
    color: ${Ms};
  }

  :host(${xe}:hover) {
    background-color: ${dr};
    color: ${lr};
  }

  :host(${xe}:hover:active) {
    background-color: ${hr};
    color: ${cr};
  }

  :host(:is(${xe}, ${xe}:is(:hover, :active))) {
    border-color: transparent;
  }
`,An=b`
  ${En}

  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable])),
  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable]):hover),
  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable]):hover:active) {
    background-color: ${ln};
    border-color: ${Ut};
    color: ${Ie};
    cursor: not-allowed;
  }

  :host(${ve}:is(:disabled, [disabled-focusable])),
  :host(${ve}:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
  }

  :host(${F}:is(:disabled, [disabled-focusable])),
  :host(${F}:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    background-color: ${Y};
  }

  :host(${R}:is(:disabled, [disabled-focusable])),
  :host(${R}:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    background-color: ${Y};
    border-color: transparent;
  }

  :host(${xe}:is(:disabled, [disabled-focusable])),
  :host(${xe}:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
    background-color: ${Y};
  }
`.withBehaviors(Qe(b`
    :host {
      background-color: ButtonFace;
      color: ButtonText;
    }

    :host(:is(:hover, :focus-visible)) {
      border-color: Highlight !important;
    }

    :host(${ve}:not(:is(:hover, :focus-visible))) {
      background-color: Highlight;
      color: HighlightText;
      forced-color-adjust: none;
    }

    :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable])) {
      background-color: ButtonFace;
      color: GrayText;
      border-color: ButtonText;
    }
  `));function Bn(o={}){return k`
    <template
      tabindex="${e=>{var t;return e.disabled?null:(t=e.tabIndex)!==null&&t!==void 0?t:0}}"
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @keypress="${(e,t)=>e.keypressHandler(t.event)}"
    >
      ${Je(o)}
      <span class="content" part="content">
        <slot ${ae("defaultSlottedContent")}></slot>
      </span>
      ${wt(o)}
    </template>
  `}const Yh=Bn(),Jh=Pe.compose({name:`${m.prefix}-button`,template:Yh,styles:An}),eu=b`
  ${En}

  ::slotted(a) {
    position: absolute;
    inset: 0;
  }
`.withBehaviors(Qe(b`
    :host {
      border-color: LinkText;
      color: LinkText;
    }
  `));function tu(o={}){return k`
    <template
      tabindex="0"
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
    >
      ${Je(o)}
      <span class="content" part="content">
        <slot></slot>
      </span>
      ${wt(o)}
    </template>
  `}const su=tu(),ou=tt.compose({name:`${m.prefix}-anchor-button`,template:su,styles:eu});class ru extends Pe{}const nu=Bn({end:k.partial(`
    <svg slot="end" fill="currentColor" aria-hidden="true" width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.85 7.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 8.35a.5.5 0 1 1 .7-.7L10 12.8l5.15-5.16c.2-.2.5-.2.7 0Z" fill="currentColor"></path>
    </svg>
  `)}),iu=ru.compose({name:`${m.prefix}-menu-button`,template:nu,styles:An}),E={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"};E.menuitem+"",E.menuitemcheckbox+"",E.menuitemradio+"";const au=()=>o=>o.nodeType===1&&o.elementInternals.role==="menu";class W extends z{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.role=E.menuitem,this.checked=!1,this.handleMenuItemKeyDown=e=>{var t,s,r,n;if(e.defaultPrevented)return!1;switch(e.key){case ts:case Qs:return this.invoke(),!1;case _a:return this.disabled||((t=this.submenu)===null||t===void 0||t.togglePopover(!0),(s=this.submenu)===null||s===void 0||s.focus()),!1;case Va:return!((r=this.parentElement)===null||r===void 0)&&r.hasAttribute("popover")&&(this.parentElement.togglePopover(!1),(n=this.parentElement.parentElement)===null||n===void 0||n.focus()),!1}return!0},this.handleMenuItemClick=e=>(e.defaultPrevented||this.disabled||this.invoke(),!1),this.handleMouseOver=e=>{var t;return this.disabled||(t=this.submenu)===null||t===void 0||t.togglePopover(!0),!1},this.handleMouseOut=e=>{var t;return this.contains(document.activeElement)||(t=this.submenu)===null||t===void 0||t.togglePopover(!1),!1},this.toggleHandler=e=>{e instanceof ToggleEvent&&e.newState==="open"&&(this.setAttribute("tabindex","-1"),this.elementInternals.ariaExpanded="true",this.setSubmenuPosition()),e instanceof ToggleEvent&&e.newState==="closed"&&(this.elementInternals.ariaExpanded="false",this.setAttribute("tabindex","0"))},this.invoke=()=>{if(!this.disabled)switch(this.role){case E.menuitemcheckbox:this.checked=!this.checked;break;case E.menuitem:if(this.submenu){this.submenu.togglePopover(!0),this.submenu.focus();break}this.$emit("change");break;case E.menuitemradio:this.checked||(this.checked=!0);break}},this.setSubmenuPosition=()=>{if(!CSS.supports("anchor-name","--anchor")&&this.submenu){const e=this.getBoundingClientRect(),t=this.submenu.getBoundingClientRect(),s=getComputedStyle(this).direction==="ltr"?"right":"left";if(e.width+t.width>window.innerWidth*.75){this.submenu.style.translate="0 -100%";return}if(e[s]+t.width>window.innerWidth){this.submenu.style.translate="-100% 0";return}this.submenu.style.translate=`${e.width-8}px 0`}}}disabledChanged(e,t){this.elementInternals.ariaDisabled=t?`${t}`:null,S(this.elementInternals,"disabled",t)}roleChanged(e,t){this.elementInternals.role=t??E.menuitem}checkedChanged(e,t){const s=this.role!==E.menuitem;this.elementInternals.ariaChecked=s?`${!!t}`:null,S(this.elementInternals,"checked",s?t:!1),this.$fastController.isConnected&&this.$emit("change",t,{bubbles:!0})}slottedSubmenuChanged(e,t){var s;(s=this.submenu)===null||s===void 0||s.removeEventListener("toggle",this.toggleHandler),t.length?(this.submenu=t[0],this.submenu.toggleAttribute("popover",!0),this.submenu.addEventListener("toggle",this.toggleHandler),this.elementInternals.ariaHasPopup="menu",S(this.elementInternals,"submenu",!0)):(this.elementInternals.ariaHasPopup=null,S(this.elementInternals,"submenu",!1))}connectedCallback(){var e;super.connectedCallback(),this.elementInternals.role=(e=this.role)!==null&&e!==void 0?e:E.menuitem,this.elementInternals.ariaChecked=this.role!==E.menuitem?`${!!this.checked}`:null}}h([p({mode:"boolean"})],W.prototype,"disabled",void 0);h([p],W.prototype,"role",void 0);h([p({mode:"boolean"})],W.prototype,"checked",void 0);h([p({mode:"boolean"})],W.prototype,"hidden",void 0);h([V],W.prototype,"slottedSubmenu",void 0);h([V],W.prototype,"submenu",void 0);et(W,Ye);const lu=b`
  ${_("grid")}

  :host {
    --indent: 0;
    align-items: center;
    background: ${P};
    border-radius: ${B};
    color: ${Ms};
    contain: layout;
    cursor: pointer;
    /* Prevent shrinking of MenuItems when max-height is applied to MenuList */
    flex-shrink: 0;
    font: ${q} ${le} / ${Ne} ${ee};
    grid-gap: 4px;
    grid-template-columns: 20px 20px auto 20px;
    height: 32px;
    overflow: visible;
    padding: 0 10px;
  }

  :host(:hover) {
    background: ${nn};
    color: ${en};
  }

  :host(:active) {
    background-color: ${rc};
    color: ${tn};
  }

  :host(:active) ::slotted([slot='start']) {
    color: ${ec};
  }

  :host(${fe}) {
    background-color: ${ln};
    color: ${Ie};
  }

  :host(${fe}) ::slotted([slot='start']),
  :host(${fe}) ::slotted([slot='end']) {
    color: ${Ie};
  }

  :host(:focus-visible) {
    border-radius: ${B};
    outline: 2px solid ${Kt};
  }

  .content {
    white-space: nowrap;
    flex-grow: 1;
    grid-column: auto / span 2;
    padding: 0 2px;
  }

  :host(:not(${tr})) .indicator,
  :host(:not(${tr})) ::slotted([slot='indicator']),
  :host(:not(${St})) .submenu-glyph,
  :host(:not(${St})) ::slotted([slot='submenu-glyph']) {
    display: none;
  }

  ::slotted([slot='end']) {
    color: ${Q};
    font: ${q} ${te} / ${ce} ${ee};
    white-space: nowrap;
  }

  :host([data-indent='1']) {
    --indent: 1;
  }

  :host([data-indent='2']) {
    --indent: 2;
    grid-template-columns: 20px 20px auto auto;
  }

  :host(${St}) {
    grid-template-columns: 20px auto auto 20px;
  }

  :host([data-indent='2']${St}) {
    grid-template-columns: 20px 20px auto auto 20px;
  }

  .indicator,
  ::slotted([slot='indicator']) {
    grid-column: 1 / span 1;
    width: 20px;
  }

  ::slotted([slot='start']) {
    display: inline-flex;
    grid-column: calc(var(--indent)) / span 1;
  }

  .content {
    grid-column: calc(var(--indent) + 1) / span 1;
  }

  ::slotted([slot='end']) {
    grid-column: calc(var(--indent) + 2) / span 1;
    justify-self: end;
  }

  .submenu-glyph,
  ::slotted([slot='submenu-glyph']) {
    grid-column: -2 / span 1;
    justify-self: end;
  }

  @layer popover {
    :host {
      anchor-name: --menu-trigger;
      position: relative;
    }

    ::slotted([popover]) {
      margin: 0;
      max-height: var(--menu-max-height, auto);
      position: absolute;
      position-anchor: --menu-trigger;
      position-area: inline-end span-block-end;
      position-try-fallbacks: flip-inline;
      z-index: 1;
    }

    ::slotted([popover]:not(:popover-open)) {
      display: none;
    }

    ::slotted([popover]:popover-open) {
      inset: unset;
    }

    /* Fallback for no anchor-positioning */
    @supports not (anchor-name: --menu-trigger) {
      ::slotted([popover]) {
        align-self: start;
      }
    }
  }
`.withBehaviors(Qe(b`
    :host(${fe}),
    :host(${fe}) ::slotted([slot='start']),
    :host(${fe}) ::slotted([slot='end']) {
      color: GrayText;
    }
  `)),cu=k.partial('<svg class="indicator" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.05 3.49c.28.3.27.77-.04 1.06l-7.93 7.47A.85.85 0 014.9 12L2.22 9.28a.75.75 0 111.06-1.06l2.24 2.27 7.47-7.04a.75.75 0 011.06.04z" fill="currentColor"></path></svg>'),du=k.partial('<svg class="submenu-glyph" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.74 3.2a.75.75 0 00-.04 1.06L9.23 8 5.7 11.74a.75.75 0 101.1 1.02l4-4.25a.75.75 0 000-1.02l-4-4.25a.75.75 0 00-1.06-.04z" fill="currentColor"></path></svg>');function hu(o={}){return k`
    <template
      @keydown="${(e,t)=>e.handleMenuItemKeyDown(t.event)}"
      @click="${(e,t)=>e.handleMenuItemClick(t.event)}"
      @mouseover="${(e,t)=>e.handleMouseOver(t.event)}"
      @mouseout="${(e,t)=>e.handleMouseOut(t.event)}"
      @toggle="${(e,t)=>e.toggleHandler(t.event)}"
    >
      <slot name="indicator"> ${Fe(o.indicator)} </slot>
      ${Je(o)}
      <div part="content" class="content">
        <slot></slot>
      </div>
      ${wt(o)}
      <slot name="submenu-glyph"> ${Fe(o.submenuGlyph)} </slot>
      <slot name="submenu" ${ae({property:"slottedSubmenu",filter:au()})}></slot>
    </template>
  `}const uu=hu({indicator:cu,submenuGlyph:du}),pu=W.compose({name:`${m.prefix}-menu-item`,template:uu,styles:lu});class Xe extends z{itemsChanged(e,t){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}constructor(){super(),this.elementInternals=this.attachInternals(),this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&Yo(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=e=>{if(!this.contains(e.relatedTarget)&&this.menuItems!==void 0){const t=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[t].setAttribute("tabindex","0"),this.focusIndex=t}},this.handleItemFocus=e=>{const t=e.target;this.menuItems!==void 0&&t!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(t),t.setAttribute("tabindex","0"))},this.changedMenuItemHandler=e=>{if(this.menuItems===void 0)return;const t=e.target,s=this.menuItems.indexOf(t);if(s!==-1&&t.role==="menuitemradio"&&t.checked===!0){for(let n=s-1;n>=0;--n){const i=this.menuItems[n],a=i.getAttribute("role");if(a===E.menuitemradio&&(i.checked=!1),a==="separator")break}const r=this.menuItems.length-1;for(let n=s+1;n<=r;++n){const i=this.menuItems[n],a=i.getAttribute("role");if(a===E.menuitemradio&&(i.checked=!1),a==="separator")break}}},this.isMenuItemElement=e=>e instanceof W||Yo(e)&&e.getAttribute("role")in Xe.focusableElementRoles,this.isFocusableElement=e=>this.isMenuItemElement(e),this.elementInternals.role="menu"}connectedCallback(){super.connectedCallback(),je.enqueue(()=>{this.setItems()}),this.addEventListener("change",this.changedMenuItemHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changedMenuItemHandler)}focus(){this.setFocus(0,1)}handleMenuKeyDown(e){if(!(e.defaultPrevented||this.menuItems===void 0))switch(e.key){case Da:this.setFocus(this.focusIndex+1,1);return;case Ha:this.setFocus(this.focusIndex-1,-1);return;case Ra:this.setFocus(this.menuItems.length-1,-1);return;case qa:this.setFocus(0,1);return;default:return!0}}removeItemListeners(e=this.items){e.forEach(t=>{t.removeEventListener("focus",this.handleItemFocus),v.getNotifier(t).unsubscribe(this,"hidden")})}static elementIndent(e){const t=e.getAttribute("role"),s=e.querySelector("[slot=start]");return t&&t!==E.menuitem?s?2:1:s?1:0}setItems(){var e;const t=Array.from(this.children);this.removeItemListeners(t),t.forEach(a=>v.getNotifier(a).subscribe(this,"hidden"));const s=t.filter(a=>!a.hasAttribute("hidden"));this.menuItems=s;const r=this.menuItems.filter(this.isMenuItemElement);r.length&&(this.focusIndex=0),r.forEach((a,c)=>{a.setAttribute("tabindex",c===0?"0":"-1"),a.addEventListener("focus",this.handleItemFocus)});const n=(e=this.menuItems)===null||e===void 0?void 0:e.filter(this.isMenuItemElement),i=n==null?void 0:n.reduce((a,c)=>{const u=Xe.elementIndent(c);return Math.max(a,u)},0);n==null||n.forEach(a=>{a instanceof W&&a.setAttribute("data-indent",`${i}`)})}handleChange(e,t){t==="hidden"&&this.setItems()}setFocus(e,t){if(this.menuItems!==void 0)for(;e>=0&&e<this.menuItems.length;){const s=this.menuItems[e];if(this.isFocusableElement(s)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=e,s.setAttribute("tabindex","0"),s.focus();break}e+=t}}}Xe.focusableElementRoles=E;h([V],Xe.prototype,"items",void 0);function gu(){return k`
    <template
      slot="${o=>o.slot?o.slot:o.isNestedMenu()?"submenu":void 0}"
      @keydown="${(o,e)=>o.handleMenuKeyDown(e.event)}"
      @focusout="${(o,e)=>o.handleFocusOut(e.event)}"
    >
      <slot ${ae("items")}></slot>
    </template>
  `}const fu=gu(),vu=b`
  ${_("flex")}

  :host {
    flex-direction: column;
    height: fit-content;
    max-width: 300px;
    min-width: 160px;
    width: auto;
    background-color: ${P};
    border: 1px solid ${We};
    border-radius: ${B};
    box-shadow: ${wn};
    padding: 4px;
    row-gap: 2px;
  }
`,mu=Xe.compose({name:`${m.prefix}-menu-list`,template:fu,styles:vu});class he extends z{constructor(){super(...arguments),this.slottedMenuList=[],this.slottedTriggers=[],this._open=!1,this.toggleMenu=()=>{var e;(e=this._menuList)===null||e===void 0||e.togglePopover(!this._open)},this.closeMenu=e=>{var t;(e==null?void 0:e.target)instanceof W&&(e.target.getAttribute("role")===E.menuitemcheckbox||e.target.getAttribute("role")===E.menuitemradio)||((t=this._menuList)===null||t===void 0||t.togglePopover(!1),this.closeOnScroll&&document.removeEventListener("scroll",this.closeMenu))},this.openMenu=e=>{var t;(t=this._menuList)===null||t===void 0||t.togglePopover(!0),e&&this.openOnContext&&e.preventDefault(),this.closeOnScroll&&document.addEventListener("scroll",this.closeMenu)},this.toggleHandler=e=>{var t;if(e.type==="toggle"&&e.newState){const s=e.newState==="open";(t=this._trigger)===null||t===void 0||t.setAttribute("aria-expanded",`${s}`),this._open=s,this.focusMenuList()}},this.triggerKeydownHandler=e=>{if(e.defaultPrevented)return;switch(e.key){case Qs:case ts:e.preventDefault(),this.toggleMenu();break;default:return!0}},this.documentClickHandler=e=>{e.composedPath().some(t=>t===this._trigger||t===this._menuList)||this.closeMenu()}}connectedCallback(){super.connectedCallback(),je.enqueue(()=>this.setComponent())}disconnectedCallback(){super.disconnectedCallback(),this.removeListeners()}setComponent(){this.$fastController.isConnected&&this.slottedMenuList.length&&this.slottedTriggers.length&&(this._trigger=this.slottedTriggers[0],this._menuList=this.slottedMenuList[0],this._trigger.setAttribute("aria-haspopup","true"),this._trigger.setAttribute("aria-expanded",`${this._open}`),this._menuList.setAttribute("popover",this.openOnContext?"manual":""),this.addListeners())}focusMenuList(){je.enqueue(()=>{this._menuList.focus()})}focusTrigger(){je.enqueue(()=>{this._trigger.focus()})}openOnHoverChanged(e,t){var s,r;t?(s=this._trigger)===null||s===void 0||s.addEventListener("mouseover",this.openMenu):(r=this._trigger)===null||r===void 0||r.removeEventListener("mouseover",this.openMenu)}persistOnItemClickChanged(e,t){var s,r;t?(r=this._menuList)===null||r===void 0||r.removeEventListener("change",this.closeMenu):(s=this._menuList)===null||s===void 0||s.addEventListener("change",this.closeMenu)}openOnContextChanged(e,t){var s,r;t?(s=this._trigger)===null||s===void 0||s.addEventListener("contextmenu",this.openMenu):(r=this._trigger)===null||r===void 0||r.removeEventListener("contextmenu",this.openMenu)}closeOnScrollChanged(e,t){t?document.addEventListener("scroll",this.closeMenu):document.removeEventListener("scroll",this.closeMenu)}addListeners(){var e,t,s,r,n,i;(e=this._menuList)===null||e===void 0||e.addEventListener("toggle",this.toggleHandler),(t=this._trigger)===null||t===void 0||t.addEventListener("keydown",this.triggerKeydownHandler),this.persistOnItemClick||(s=this._menuList)===null||s===void 0||s.addEventListener("change",this.closeMenu),this.openOnHover?(r=this._trigger)===null||r===void 0||r.addEventListener("mouseover",this.openMenu):this.openOnContext?((n=this._trigger)===null||n===void 0||n.addEventListener("contextmenu",this.openMenu),document.addEventListener("click",this.documentClickHandler)):(i=this._trigger)===null||i===void 0||i.addEventListener("click",this.toggleMenu)}removeListeners(){var e,t,s,r,n,i;(e=this._menuList)===null||e===void 0||e.removeEventListener("toggle",this.toggleHandler),(t=this._trigger)===null||t===void 0||t.removeEventListener("keydown",this.triggerKeydownHandler),this.persistOnItemClick||(s=this._menuList)===null||s===void 0||s.removeEventListener("change",this.closeMenu),this.openOnHover&&((r=this._trigger)===null||r===void 0||r.removeEventListener("mouseover",this.openMenu)),this.openOnContext?((n=this._trigger)===null||n===void 0||n.removeEventListener("contextmenu",this.openMenu),document.removeEventListener("click",this.documentClickHandler)):(i=this._trigger)===null||i===void 0||i.removeEventListener("click",this.toggleMenu)}menuKeydownHandler(e){if(e.defaultPrevented)return;switch(e.key){case ja:e.preventDefault(),this._open&&(this.closeMenu(),this.focusTrigger());break;case Ua:if(this._open&&this.closeMenu(),e.shiftKey&&e.composedPath()[0]!==this._trigger&&e.composedPath()[0].assignedSlot!==this.primaryAction)this.focusTrigger();else if(e.shiftKey)return!0;default:return!0}}}h([p({attribute:"open-on-hover",mode:"boolean"})],he.prototype,"openOnHover",void 0);h([p({attribute:"open-on-context",mode:"boolean"})],he.prototype,"openOnContext",void 0);h([p({attribute:"close-on-scroll",mode:"boolean"})],he.prototype,"closeOnScroll",void 0);h([p({attribute:"persist-on-item-click",mode:"boolean"})],he.prototype,"persistOnItemClick",void 0);h([p({mode:"boolean"})],he.prototype,"split",void 0);h([V],he.prototype,"slottedMenuList",void 0);h([V],he.prototype,"slottedTriggers",void 0);h([V],he.prototype,"primaryAction",void 0);function bu(){return k`
    <template
      ?open-on-hover="${o=>o.openOnHover}"
      ?open-on-context="${o=>o.openOnContext}"
      ?close-on-scroll="${o=>o.closeOnScroll}"
      ?persist-on-item-click="${o=>o.persistOnItemClick}"
      @keydown="${(o,e)=>o.menuKeydownHandler(e.event)}"
    >
      <slot name="primary-action" ${be("primaryAction")}></slot>
      <slot name="trigger" ${ae({property:"slottedTriggers",filter:As()})}></slot>
      <slot ${ae({property:"slottedMenuList",filter:As()})}></slot>
    </template>
  `}const wu=bu(),ku=b`
  ${_("inline-block")}

  ::slotted([slot='trigger']) {
    anchor-name: --menu-trigger;
  }

  ::slotted([popover]) {
    margin: 0;
    max-height: var(--menu-max-height, auto);
    position-anchor: --menu-trigger;
    position-area: block-end span-inline-end;
    position-try-fallbacks: flip-block;
    position: absolute;
    z-index: 1;
  }

  :host([split]) ::slotted([popover]) {
    position-area: block-end span-inline-start;
  }

  ::slotted([popover]:popover-open) {
    inset: unset;
  }

  ::slotted([popover]:not(:popover-open)) {
    display: none;
  }

  :host([split]) {
    display: inline-flex;
  }

  :host([split]) ::slotted([slot='primary-action']) {
    border-inline-end: ${j} solid ${pt};
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  /* Keeps focus visible visuals above trigger slot*/
  :host([split]) ::slotted([slot='primary-action']:focus-visible) {
    z-index: 1;
  }

  :host([split]) ::slotted([slot='primary-action'][appearance='primary']) {
    border-inline-end: ${j} solid white;
  }

  :host([split]) ::slotted([slot='trigger']) {
    border-inline-start: 0;
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }
`,yu=he.compose({name:`${m.prefix}-menu`,template:wu,styles:ku}),$u={primary:"primary",inverted:"inverted"},xu={tiny:"tiny",extraSmall:"extra-small",small:"small",medium:"medium",large:"large",extraLarge:"extra-large",huge:"huge"};class Su extends z{constructor(){super(),this.elementInternals=this.attachInternals(),this.elementInternals.role="progressbar"}}class ho extends Su{sizeChanged(e,t){w(this.elementInternals,e,t,xu)}appearanceChanged(e,t){w(this.elementInternals,e,t,$u)}}h([p],ho.prototype,"size",void 0);h([p],ho.prototype,"appearance",void 0);const Cu=k`
  <slot name="indicator">
    <div class="background"></div>
    <div class="progress">
      <div class="spinner">
        <div class="start">
          <div class="indicator"></div>
        </div>
        <div class="end">
          <div class="indicator"></div>
        </div>
      </div>
    </div>
  </slot>
`,Eu=b`
  ${_("inline-flex")}

  :host {
    --duration: 1.5s;
    --indicatorSize: ${at};
    --size: 32px;
    height: var(--size);
    width: var(--size);
    contain: strict;
    content-visibility: auto;
  }

  :host(${jt}) {
    --indicatorSize: ${Me};
    --size: 20px;
  }
  :host(${Rt}) {
    --indicatorSize: ${Me};
    --size: 24px;
  }
  :host(${L}) {
    --indicatorSize: ${Me};
    --size: 28px;
  }
  :host(${N}) {
    --indicatorSize: ${at};
    --size: 36px;
  }
  :host(${Ht}) {
    --indicatorSize: ${at};
    --size: 40px;
  }
  :host(${gl}) {
    --indicatorSize: ${Ls};
    --size: 44px;
  }

  .progress,
  .background,
  .spinner,
  .start,
  .end,
  .indicator {
    position: absolute;
    inset: 0;
  }

  .progress,
  .spinner,
  .indicator {
    animation: none var(--duration) infinite ${lo};
  }

  .progress {
    animation-timing-function: linear;
    animation-name: spin-linear;
  }

  .background {
    border: var(--indicatorSize) solid ${dn};
    border-radius: 50%;
  }

  :host(${rr}) .background {
    border-color: rgba(255, 255, 255, 0.2);
  }

  .spinner {
    animation-name: spin-swing;
  }

  .start {
    overflow: hidden;
    inset-inline-end: 50%;
  }

  .end {
    overflow: hidden;
    inset-inline-start: 50%;
  }

  .indicator {
    color: ${fc};
    box-sizing: border-box;
    border-radius: 50%;
    border: var(--indicatorSize) solid transparent;
    border-block-start-color: currentcolor;
    border-inline-end-color: currentcolor;
  }

  :host(${rr}) .indicator {
    color: ${gc};
  }

  .start .indicator {
    rotate: 135deg; /* Starts 9 o'clock */
    inset: 0 -100% 0 0;
    animation-name: spin-start;
  }

  .end .indicator {
    rotate: 135deg; /* Ends at 3 o'clock */
    inset: 0 0 0 -100%;
    animation-name: spin-end;
  }

  @keyframes spin-linear {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-swing {
    0% {
      transform: rotate(-135deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(225deg);
    }
  }

  @keyframes spin-start {
    0%,
    100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-80deg);
    }
  }

  @keyframes spin-end {
    0%,
    100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(70deg);
    }
  }
`.withBehaviors(Qe(b`
    .background {
      display: none;
    }
    .indicator {
      border-color: Canvas;
      border-block-start-color: Highlight;
      border-inline-end-color: Highlight;
    }
  `)),Au=ho.compose({name:`${m.prefix}-spinner`,template:Cu,styles:Eu}),Bu={small:"small",medium:"medium",large:"large"},ct={outline:"outline",filledLighter:"filled-lighter",filledDarker:"filled-darker"},Tu=[ct.filledLighter,ct.filledDarker],At={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};class C extends z{defaultSlottedNodesChanged(){const e=this.getContent();this.defaultValue=e,this.value=e}labelSlottedNodesChanged(){this.labelEl&&(this.labelEl.hidden=!this.labelSlottedNodes.length),this.labelSlottedNodes.forEach(e=>{e.disabled=this.disabled,e.required=this.required})}autoResizeChanged(){this.maybeCreateAutoSizerEl(),S(this.elementInternals,"auto-resize",this.autoResize)}disabledChanged(){this.setDisabledSideEffect(this.disabled)}get form(){return this.elementInternals.form}get labels(){return this.elementInternals.labels}readOnlyChanged(){this.elementInternals.ariaReadOnly=`${!!this.readOnly}`}requiredChanged(){var e;this.elementInternals.ariaRequired=`${!!this.required}`,!((e=this.labelSlottedNodes)===null||e===void 0)&&e.length&&this.labelSlottedNodes.forEach(t=>t.required=this.required)}resizeChanged(e,t){w(this.elementInternals,e,t,At,"resize-"),S(this.elementInternals,"resize",Ys(At,t)&&t!==At.none)}get textLength(){return this.controlEl.textLength}get type(){return"textarea"}get validity(){return this.elementInternals.validity}get validationMessage(){return this.elementInternals.validationMessage||this.controlEl.validationMessage}get willValidate(){return this.elementInternals.willValidate}get defaultValue(){var e,t;return(t=(e=this.controlEl)===null||e===void 0?void 0:e.defaultValue)!==null&&t!==void 0?t:this.preConnectControlEl.defaultValue}set defaultValue(e){var t;const s=(t=this.controlEl)!==null&&t!==void 0?t:this.preConnectControlEl;s.defaultValue=e,this.controlEl&&!this.userInteracted&&(this.controlEl.value=e)}get value(){var e,t;return(t=(e=this.controlEl)===null||e===void 0?void 0:e.value)!==null&&t!==void 0?t:this.preConnectControlEl.value}set value(e){var t;const s=(t=this.controlEl)!==null&&t!==void 0?t:this.preConnectControlEl;s.value=e,this.setFormValue(e),this.setValidity()}constructor(){super(),this.elementInternals=this.attachInternals(),this.userInteracted=!1,this.preConnectControlEl=document.createElement("textarea"),this.autoResize=!1,this.disabled=!1,this.displayShadow=!1,this.readOnly=!1,this.required=!1,this.resize=At.none,this.spellcheck=!1}connectedCallback(){super.connectedCallback(),this.setDefaultValue(),this.maybeCreateAutoSizerEl(),this.bindEvents(),this.observeControlElAttrs()}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.autoSizerObserver)===null||e===void 0||e.disconnect(),(t=this.controlElAttrObserver)===null||t===void 0||t.disconnect()}formResetCallback(){this.value=this.defaultValue}formDisabledCallback(e){this.setDisabledSideEffect(e),this.setValidity()}setFormValue(e,t){this.elementInternals.setFormValue(e,e??t)}checkValidity(){return this.elementInternals.checkValidity()}reportValidity(){return this.elementInternals.reportValidity()}setCustomValidity(e){this.elementInternals.setValidity({customError:!!e},e?e.toString():void 0),this.reportValidity()}setValidity(e,t,s){this.$fastController.isConnected&&(this.disabled||this.readOnly?this.elementInternals.setValidity({}):this.elementInternals.setValidity(e??this.controlEl.validity,t??this.controlEl.validationMessage,s??this.controlEl),this.userInteracted&&this.toggleUserValidityState())}select(){this.controlEl.select()}setDefaultValue(){this.defaultValue=this.innerHTML.trim()||this.preConnectControlEl.defaultValue||"",this.value=this.preConnectControlEl.value||this.defaultValue,this.setFormValue(this.value),this.setValidity(),this.preConnectControlEl=null}bindEvents(){this.controlEl.addEventListener("input",()=>this.userInteracted=!0,{once:!0})}getContent(){return this.defaultSlottedNodes.map(e=>{switch(e.nodeType){case Node.ELEMENT_NODE:return e.outerHTML;case Node.TEXT_NODE:return e.textContent.trim();default:return""}}).join("")||""}observeControlElAttrs(){this.controlElAttrObserver=new MutationObserver(()=>{this.setValidity()}),this.controlElAttrObserver.observe(this.controlEl,{attributes:!0,attributeFilter:["disabled","required","readonly","maxlength","minlength"]})}setDisabledSideEffect(e){var t;this.elementInternals.ariaDisabled=`${e}`,this.controlEl&&(this.controlEl.disabled=e),!((t=this.labelSlottedNodes)===null||t===void 0)&&t.length&&this.labelSlottedNodes.forEach(s=>s.disabled=this.disabled)}toggleUserValidityState(){S(this.elementInternals,"user-invalid",!this.validity.valid),S(this.elementInternals,"user-valid",this.validity.valid)}maybeCreateAutoSizerEl(){var e,t;if(!CSS.supports("field-sizing: content")){if(!this.autoResize){(e=this.autoSizerEl)===null||e===void 0||e.remove(),(t=this.autoSizerObserver)===null||t===void 0||t.disconnect();return}this.autoSizerEl||(this.autoSizerEl=document.createElement("div"),this.autoSizerEl.classList.add("auto-sizer"),this.autoSizerEl.ariaHidden="true"),this.shadowRoot.prepend(this.autoSizerEl),this.autoSizerObserver||(this.autoSizerObserver=new ResizeObserver((s,r)=>{var n;const i=window.getComputedStyle(this).writingMode.startsWith("horizontal")?"height":"width";this.style.getPropertyValue(i)!==""&&((n=this.autoSizerEl)===null||n===void 0||n.remove(),r.disconnect())})),this.autoSizerObserver.observe(this)}}handleControlInput(){this.autoResize&&this.autoSizerEl&&(this.autoSizerEl.textContent=this.value+" "),this.setFormValue(this.value),this.setValidity()}handleControlChange(){this.toggleUserValidityState(),this.$emit("change")}handleControlSelect(){this.$emit("select")}}C.formAssociated=!0;h([V],C.prototype,"defaultSlottedNodes",void 0);h([V],C.prototype,"labelSlottedNodes",void 0);h([p],C.prototype,"autocomplete",void 0);h([p({attribute:"auto-resize",mode:"boolean"})],C.prototype,"autoResize",void 0);h([p({attribute:"dirname"})],C.prototype,"dirName",void 0);h([p({mode:"boolean"})],C.prototype,"disabled",void 0);h([p({attribute:"display-shadow",mode:"boolean"})],C.prototype,"displayShadow",void 0);h([p({attribute:"form"})],C.prototype,"initialForm",void 0);h([p({attribute:"maxlength",converter:we})],C.prototype,"maxLength",void 0);h([p({attribute:"minlength",converter:we})],C.prototype,"minLength",void 0);h([p],C.prototype,"name",void 0);h([p],C.prototype,"placeholder",void 0);h([p({attribute:"readonly",mode:"boolean"})],C.prototype,"readOnly",void 0);h([p({mode:"boolean"})],C.prototype,"required",void 0);h([p({mode:"fromView"})],C.prototype,"resize",void 0);h([p({mode:"boolean"})],C.prototype,"spellcheck",void 0);class hs extends C{constructor(){super(...arguments),this.appearance=ct.outline,this.block=!1}labelSlottedNodesChanged(){super.labelSlottedNodesChanged(),this.labelSlottedNodes.forEach(e=>{e.size=this.size})}appearanceChanged(e,t){S(this.elementInternals,e,!1),Ys(ct,t)?S(this.elementInternals,t,!0):this.appearance=ct.outline}blockChanged(){S(this.elementInternals,"block",this.block)}sizeChanged(e,t){w(this.elementInternals,e,t,Bu)}handleChange(e,t){switch(t){case"size":this.labelSlottedNodes.forEach(s=>{s.size=this.size});break;case"appearance":case"displayShadow":this.maybeDisplayShadow();break}}connectedCallback(){super.connectedCallback(),this.maybeDisplayShadow(),v.getNotifier(this).subscribe(this,"appearance"),v.getNotifier(this).subscribe(this,"displayShadow"),v.getNotifier(this).subscribe(this,"size")}disconnectedCallback(){super.disconnectedCallback(),v.getNotifier(this).unsubscribe(this,"appearance"),v.getNotifier(this).unsubscribe(this,"displayShadow"),v.getNotifier(this).unsubscribe(this,"size")}maybeDisplayShadow(){S(this.elementInternals,"display-shadow",this.displayShadow&&Tu.includes(this.appearance))}}h([p({mode:"fromView"})],hs.prototype,"appearance",void 0);h([p({mode:"boolean"})],hs.prototype,"block",void 0);h([p],hs.prototype,"size",void 0);const Mu=b`
  ${_("inline-block")}

  :host {
    /* typography */
    --font-size: ${le};
    --line-height: ${Ne};

    /* layout */
    --padding-inline: ${Gt};
    --padding-block: ${rh};
    --min-block-size: 52px;
    --block-size: var(--min-block-size);
    --inline-size: 18rem;
    --border-width: ${j};
    --control-padding-inline: ${U};

    /* colors */
    --color: ${ne};
    --background-color: ${P};
    --border-color: ${pt};
    --border-block-end-color: ${qt};
    --placeholder-color: ${sn};
    --focus-indicator-color: ${hn};

    /* elevations */
    --box-shadow: none;

    /* others */
    --contain-size: size;
    --resize: none;

    color: var(--color);
    font-family: ${ee};
    font-size: var(--font-size);
    font-weight: ${q};
    line-height: var(--line-height);
    position: relative;
  }

  :host(:hover) {
    --border-color: ${eo};
    --border-block-end-color: ${Fs};
  }

  :host(:active) {
    --border-color: ${to};
    --border-block-end-color: ${Is};
  }

  :host(:focus-within) {
    outline: none;
  }

  :host(${_t}:not([hidden])) {
    display: block;
  }

  :host(${L}) {
    --font-size: ${te};
    --line-height: ${ce};
    --min-block-size: 40px;
    --padding-block: ${Ps};
    --padding-inline: ${ft};
    --control-padding-inline: ${U};
  }

  :host(${N}) {
    --font-size: ${ze};
    --line-height: ${yt};
    --min-block-size: 64px;
    --padding-block: ${nh};
    --padding-inline: ${Ee};
    --control-padding-inline: ${ft};
  }

  :host(${zl}:not(:disabled)) {
    --resize: both;
  }

  :host(${Nl}:not(:disabled)) {
    --resize: horizontal;
  }

  :host(${Ll}:not(:disabled)) {
    --resize: vertical;
  }

  :host(${er}) {
    --block-size: auto;
    --contain-size: inline-size;
  }

  :host(${_e}) {
    --background-color: ${Os};
    --border-color: var(--background-color);
    --border-block-end-color: var(--border-color);
  }

  :host(${He}) {
    --border-color: var(--background-color);
    --border-block-end-color: var(--border-color);
  }

  :host(${_e}${or}),
  :host(${He}${or}) {
    --box-shadow: ${no};
  }

  :host(${Ql}) {
    --border-color: ${Ns};
    --border-block-end-color: ${Ns};
  }

  :host(:disabled) {
    --color: ${Ie};
    --background-color: ${Y};
    --border-color: ${Ut};
    --border-block-end-color: var(--border-color);
    --box-shadow: none;
    --placeholder-color: ${Ie};

    cursor: no-drop;
    user-select: none;
  }

  .root {
    background-color: var(--background-color);
    border: var(--border-width) solid var(--border-color);
    border-block-end-color: var(--border-block-end-color);
    border-radius: ${B};
    box-sizing: border-box;
    box-shadow: var(--box-shadow);
    contain: paint layout style var(--contain-size);
    display: grid;
    grid-template: 1fr / 1fr;
    inline-size: var(--inline-size);
    min-block-size: var(--min-block-size);
    block-size: var(--block-size);
    overflow: hidden;
    padding: var(--padding-block) var(--padding-inline);
    position: relative;
    resize: var(--resize);
  }

  :host(${_t}) .root {
    inline-size: auto;
  }

  .root::after {
    border-bottom: 2px solid var(--focus-indicator-color);
    border-radius: 0 0 ${B} ${B};
    box-sizing: border-box;
    clip-path: inset(calc(100% - 2px) 1px 0px);
    content: '';
    height: max(2px, ${B});
    inset: auto -1px 0;
    position: absolute;
    transform: scaleX(0);
    transition-delay: ${io};
    transition-duration: ${kn};
    transition-property: transform;
  }

  :host(:focus-within) .root::after {
    transform: scaleX(1);
    transition-property: transform;
    transition-duration: ${yn};
    transition-delay: ${ao};
  }

  :host([readonly]) .root::after,
  :host(:disabled) .root::after {
    content: none;
  }

  label {
    color: var(--color);
    display: flex;
    inline-size: fit-content;
    padding-block-end: ${Ps};
    padding-inline-end: ${Ge};
  }

  :host(:empty) label,
  label[hidden] {
    display: none;
  }

  .auto-sizer,
  .control {
    box-sizing: border-box;
    font: inherit;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    letter-space: inherit;
    padding: 0 var(--control-padding-inline);
  }

  .auto-sizer {
    display: none;
    padding-block-end: 2px; /* avoid scroll bar in Firefox */
    pointer-events: none;
    visibility: hidden;
    white-space: pre-wrap;
  }

  :host(${er}) .auto-sizer {
    display: block;
  }

  .control {
    appearance: none;
    background-color: transparent;
    border: 0;
    color: inherit;
    field-sizing: content;
    max-block-size: 100%;
    outline: 0;
    resize: none;
    text-align: inherit;
  }

  .control:disabled {
    cursor: inherit;
  }

  .control::placeholder {
    color: var(--placeholder-color);
  }

  ::selection {
    color: ${Js};
    background-color: ${an};
  }
`.withBehaviors(Qe(b`
    :host {
      --border-color: FieldText;
      --border-block-end-color: FieldText;
      --focus-indicator-color: Highlight;
      --placeholder-color: FieldText;
    }

    :host(:hover),
    :host(:active),
    :host(:focus-within) {
      --border-color: Highlight;
      --border-block-end-color: Highlight;
    }

    :host(:disabled) {
      --color: GrayText;
      --border-color: GrayText;
      --border-block-end-color: GrayText;
      --placeholder-color: GrayText;
    }
  `));function Ou(){return k`
    <template>
      <label ${be("labelEl")} for="control" part="label">
        <slot
          name="label"
          ${ae({property:"labelSlottedNodes",filter:Bs})}
        ></slot>
      </label>
      <div class="root" part="root">
        <textarea
          ${be("controlEl")}
          id="control"
          class="control"
          part="control"
          ?required="${o=>o.required}"
          ?disabled="${o=>o.disabled}"
          ?readonly="${o=>o.readOnly}"
          ?spellcheck="${o=>o.spellcheck}"
          autocomplete="${o=>o.autocomplete}"
          maxlength="${o=>o.maxLength}"
          minlength="${o=>o.minLength}"
          placeholder="${o=>o.placeholder}"
          @change="${o=>o.handleControlChange()}"
          @select="${o=>o.handleControlSelect()}"
          @input="${o=>o.handleControlInput()}"
        ></textarea>
      </div>
      <div hidden>
        <slot
          ${ae({property:"defaultSlottedNodes",filter:Bs})}
        ></slot>
      </div>
    </template>
  `}const Fu=Ou(),Iu=hs.compose({name:`${m.prefix}-textarea`,template:Fu,styles:Mu,shadowOptions:{delegatesFocus:!0}}),zu={small:"small",medium:"medium",large:"large"},Nu={outline:"outline",underline:"underline",filledLighter:"filled-lighter",filledDarker:"filled-darker"},Lu={email:"email",password:"password",tel:"tel",text:"text",url:"url"},Pu=["date","datetime-local","email","month","number","password","search","tel","text","time","url","week"];class y extends z{constructor(){super(...arguments),this.type=Lu.text,this._value=this.initialValue,this.dirtyValue=!1,this.elementInternals=this.attachInternals()}defaultSlottedNodesChanged(e,t){this.$fastController.isConnected&&(this.controlLabel.hidden=!(t!=null&&t.length))}initialValueChanged(){this.dirtyValue||(this.value=this.initialValue)}readOnlyChanged(){this.$fastController.isConnected&&(this.elementInternals.ariaReadOnly=`${!!this.readOnly}`)}requiredChanged(e,t){this.$fastController.isConnected&&(this.elementInternals.ariaRequired=`${!!t}`)}get validity(){return this.elementInternals.validity}get validationMessage(){return this.elementInternals.validationMessage||this.control.validationMessage}get value(){return v.track(this,"value"),this._value}set value(e){this._value=e,this.$fastController.isConnected&&(this.control.value=e,this.setFormValue(e),this.setValidity(),v.notify(this,"value"))}get willValidate(){return this.elementInternals.willValidate}get form(){return this.elementInternals.form}beforeinputHandler(e){return e.inputType==="insertLineBreak"&&this.implicitSubmit(),!0}changeHandler(e){return this.setValidity(),this.$emit("change",e,{bubbles:!0,composed:!0}),!0}checkValidity(){return this.elementInternals.checkValidity()}clickHandler(e){var t;return e.target===this&&((t=this.control)===null||t===void 0||t.click()),!0}connectedCallback(){super.connectedCallback(),this.setFormValue(this.value),this.setValidity()}focusinHandler(e){var t;return e.target===this&&((t=this.control)===null||t===void 0||t.focus()),!0}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}implicitSubmit(){if(!this.elementInternals.form)return;if(this.elementInternals.form.elements.length===1){this.elementInternals.form.requestSubmit();return}const e=[...this.elementInternals.form.elements],t=e.find(r=>r.getAttribute("type")==="submit");if(t){t.click();return}e.filter(r=>{var n;return Pu.includes((n=r.getAttribute("type"))!==null&&n!==void 0?n:"")}).length>1||this.elementInternals.form.requestSubmit()}inputHandler(e){return this.dirtyValue=!0,this.value=this.control.value,!0}keydownHandler(e){return e.key==="Enter"&&this.implicitSubmit(),!0}select(){this.control.select(),this.$emit("select")}setCustomValidity(e){this.elementInternals.setValidity({customError:!0},e),this.reportValidity()}reportValidity(){return this.elementInternals.reportValidity()}setFormValue(e,t){this.elementInternals.setFormValue(e,e??t)}setValidity(e=this.control.validity,t=this.validationMessage,s=this.control){if(this.$fastController.isConnected){if(this.disabled){this.elementInternals.setValidity({});return}this.elementInternals.setValidity(e,t,s)}}}y.formAssociated=!0;h([p],y.prototype,"autocomplete",void 0);h([p({mode:"boolean"})],y.prototype,"autofocus",void 0);h([V],y.prototype,"defaultSlottedNodes",void 0);h([p],y.prototype,"dirname",void 0);h([p({mode:"boolean"})],y.prototype,"disabled",void 0);h([p({attribute:"form"})],y.prototype,"formAttribute",void 0);h([p({attribute:"value",mode:"fromView"})],y.prototype,"initialValue",void 0);h([p],y.prototype,"list",void 0);h([p({converter:we})],y.prototype,"maxlength",void 0);h([p({converter:we})],y.prototype,"minlength",void 0);h([p({mode:"boolean"})],y.prototype,"multiple",void 0);h([p],y.prototype,"name",void 0);h([p],y.prototype,"pattern",void 0);h([p],y.prototype,"placeholder",void 0);h([p({attribute:"readonly",mode:"boolean"})],y.prototype,"readOnly",void 0);h([p({mode:"boolean"})],y.prototype,"required",void 0);h([p({converter:we})],y.prototype,"size",void 0);h([p({converter:{fromView:o=>typeof o=="string"?["true",""].includes(o.trim().toLowerCase()):null,toView:o=>o.toString()}})],y.prototype,"spellcheck",void 0);h([p],y.prototype,"type",void 0);h([V],y.prototype,"controlLabel",void 0);class us extends y{appearanceChanged(e,t){w(this.elementInternals,e,t,Nu)}controlSizeChanged(e,t){w(this.elementInternals,e,t,zu)}}h([p],us.prototype,"appearance",void 0);h([p({attribute:"control-size"})],us.prototype,"controlSize",void 0);et(us,Ye);const Du=b`
  ${_("block")}

  :host {
    font-family: ${ee};
    font-size: ${le};
    font-weight: ${q};
    line-height: ${Ne};
    max-width: 400px;
  }
  .label {
    display: flex;
    color: ${ne};
    padding-bottom: ${Ps};
    flex-shrink: 0;
    padding-inline-end: ${Ge};
  }

  .label[hidden],
  :host(:empty) .label {
    display: none;
  }

  .root {
    align-items: center;
    background-color: ${P};
    border: ${j} solid ${pt};
    border-bottom-color: ${qt};
    border-radius: ${B};
    box-sizing: border-box;
    height: 32px;
    display: inline-flex;
    flex-direction: row;
    gap: ${U};
    padding: 0 ${Gt};
    position: relative;
    width: 100%;
  }

  :has(.control:user-invalid) {
    border-color: ${Ns};
  }

  .root::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: -1px;
    bottom: 0px;
    right: -1px;
    height: max(2px, ${B});
    border-radius: 0 0 ${B} ${B};
    border-bottom: 2px solid ${hn};
    clip-path: inset(calc(100% - 2px) 1px 0px);
    transform: scaleX(0);
    transition-property: transform;
    transition-duration: ${kn};
    transition-delay: ${io};
  }
  .control {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: ${ne};
    border-radius: ${B};
    background: ${Y};
    font-family: ${ee};
    font-weight: ${q};
    font-size: ${le};
    border: none;
    vertical-align: center;
  }
  .control:focus-visible {
    outline: 0;
    border: 0;
  }
  .control::placeholder {
    color: ${sn};
  }
  :host ::slotted([slot='start']),
  :host ::slotted([slot='end']) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Q};
    font-size: ${ls};
  }
  :host ::slotted([slot='start']) {
    padding-right: ${U};
  }
  :host ::slotted([slot='end']) {
    padding-left: ${U};
    gap: ${Ge};
  }
  :host(:hover) .root {
    border-color: ${eo};
    border-bottom-color: ${Fs};
  }
  :host(:active) .root {
    border-color: ${to};
  }
  :host(:focus-within) .root {
    outline: transparent solid 2px;
    border-bottom: 0;
  }
  :host(:focus-within) .root::after {
    transform: scaleX(1);
    transition-property: transform;
    transition-duration: ${yn};
    transition-delay: ${ao};
  }
  :host(:focus-within:active) .root:after {
    border-bottom-color: ${vc};
  }
  :host(${F}:focus-within) .root {
    border: ${j} solid ${pt};
  }
  :host(:focus-within) .control {
    color: ${ne};
  }
  :host([disabled]) .root {
    background: ${Y};
    border: ${j} solid ${Ut};
  }
  :host([disabled]) .control::placeholder,
  :host([disabled]) ::slotted([slot='start']),
  :host([disabled]) ::slotted([slot='end']) {
    color: ${Ie};
  }
  ::selection {
    color: ${Js};
    background-color: ${an};
  }
  :host(${L}) .control {
    font-size: ${te};
    font-weight: ${q};
    line-height: ${ce};
  }
  :host(${L}) .root {
    height: 24px;
    gap: ${U};
    padding: 0 ${ft};
  }
  :host(${L}) ::slotted([slot='start']),
  :host(${L}) ::slotted([slot='end']) {
    font-size: ${ze};
  }
  :host(${N}) .control {
    font-size: ${ze};
    font-weight: ${q};
    line-height: ${yt};
  }
  :host(${N}) .root {
    height: 40px;
    gap: ${lt};
    padding: 0 ${Ee};
  }
  :host(${N}) ::slotted([slot='start']),
  :host(${N}) ::slotted([slot='end']) {
    font-size: ${ro};
  }
  :host(${Se}) .root {
    background: ${Y};
    border: 0;
    border-radius: 0;
    border-bottom: ${j} solid ${qt};
  }
  :host(${Se}:hover) .root {
    border-bottom-color: ${Fs};
  }
  :host(${Se}:active) .root {
    border-bottom-color: ${Is};
  }
  :host(${Se}:focus-within) .root {
    border: 0;
    border-bottom-color: ${Is};
  }
  :host(${Se}[disabled]) .root {
    border-bottom-color: ${Ut};
  }
  :host(${He}) .root,
  :host(${_e}) .root {
    border: ${j} solid ${We};
    box-shadow: ${no};
  }
  :host(${He}) .root {
    background: ${P};
  }
  :host(${_e}) .root {
    background: ${Os};
  }
  :host(${He}:hover) .root,
  :host(${_e}:hover) .root {
    border-color: ${pr};
  }
  :host(${He}:active) .root,
  :host(${_e}:active) .root {
    border-color: ${pr};
    background: ${Os};
  }
`;function Vu(o={}){return k`
    <template
      @beforeinput="${(e,t)=>e.beforeinputHandler(t.event)}"
      @focusin="${(e,t)=>e.focusinHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
    >
      <label part="label" for="control" class="label" ${be("controlLabel")}>
        <slot
          ${ae({property:"defaultSlottedNodes",filter:Bs})}
        ></slot>
      </label>
      <div class="root" part="root">
        ${Je(o)}
        <input
          class="control"
          part="control"
          id="control"
          @change="${(e,t)=>e.changeHandler(t.event)}"
          @input="${(e,t)=>e.inputHandler(t.event)}"
          ?autofocus="${e=>e.autofocus}"
          autocomplete="${e=>e.autocomplete}"
          ?disabled="${e=>e.disabled}"
          list="${e=>e.list}"
          maxlength="${e=>e.maxlength}"
          minlength="${e=>e.minlength}"
          ?multiple="${e=>e.multiple}"
          name="${e=>e.name}"
          pattern="${e=>e.pattern}"
          placeholder="${e=>e.placeholder}"
          ?readonly="${e=>e.readOnly}"
          ?required="${e=>e.required}"
          size="${e=>e.size}"
          spellcheck="${e=>e.spellcheck}"
          type="${e=>e.type}"
          value="${e=>e.initialValue}"
          ${be("control")}
        />
        ${wt(o)}
      </div>
    </template>
  `}const _u=Vu(),Hu=us.compose({name:`${m.prefix}-text-input`,template:_u,styles:Du,shadowOptions:{delegatesFocus:!0}}),Ru={_100:"100",_200:"200",_300:"300",_400:"400",_500:"500",_600:"600",_700:"700",_800:"800",_900:"900",_1000:"1000"},ju={base:"base",numeric:"numeric",monospace:"monospace"},qu={medium:"medium",regular:"regular",semibold:"semibold",bold:"bold"},Uu={start:"start",end:"end",center:"center",justify:"justify"};class G extends z{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.nowrap=!1,this.truncate=!1,this.italic=!1,this.underline=!1,this.strikethrough=!1,this.block=!1}sizeChanged(e,t){w(this.elementInternals,e,t,Ru,"size-")}fontChanged(e,t){w(this.elementInternals,e,t,ju)}weightChanged(e,t){w(this.elementInternals,e,t,qu)}alignChanged(e,t){w(this.elementInternals,e,t,Uu)}connectedCallback(){super.connectedCallback(),v.getNotifier(this).subscribe(this),Object.keys(this.$fastController.definition.attributeLookup).forEach(e=>{this.handleChange(this,e)})}disconnectedCallback(){super.disconnectedCallback(),v.getNotifier(this).unsubscribe(this)}handleChange(e,t){switch(t){case"nowrap":case"truncate":case"italic":case"underline":case"strikethrough":case"block":S(this.elementInternals,t,!!this[t]);break}}}h([p({mode:"boolean"})],G.prototype,"nowrap",void 0);h([p({mode:"boolean"})],G.prototype,"truncate",void 0);h([p({mode:"boolean"})],G.prototype,"italic",void 0);h([p({mode:"boolean"})],G.prototype,"underline",void 0);h([p({mode:"boolean"})],G.prototype,"strikethrough",void 0);h([p({mode:"boolean"})],G.prototype,"block",void 0);h([p],G.prototype,"size",void 0);h([p],G.prototype,"font",void 0);h([p],G.prototype,"weight",void 0);h([p],G.prototype,"align",void 0);const Ku=k`<slot></slot>`,Wu=b`
  ${_("inline")}

  :host {
    contain: content;
    font-family: ${ee};
    font-size: ${le};
    line-height: ${Ne};
    font-weight: ${q};
    text-align: start;
  }

  :host(${nr}),
  :host(${nr}) ::slotted(*) {
    white-space: nowrap;
    overflow: hidden;
  }
  :host(${ar}),
  :host(${ar}) ::slotted(*) {
    text-overflow: ellipsis;
  }
  :host(${_t}) {
    display: block;
  }
  :host(${fl}) {
    font-style: italic;
  }
  :host(${Se}) {
    text-decoration-line: underline;
  }
  :host(${ir}) {
    text-decoration-line: line-through;
  }
  :host(${Se}${ir}) {
    text-decoration-line: line-through underline;
  }
  :host(${Hl}) {
    font-size: ${oo};
    line-height: ${vn};
  }
  :host(${Rl}) {
    font-size: ${te};
    line-height: ${ce};
  }
  :host(${jl}) {
    font-size: ${ze};
    line-height: ${yt};
  }
  :host(${ql}) {
    font-size: ${ls};
    line-height: ${mn};
  }
  :host(${Ul}) {
    font-size: ${ro};
    line-height: ${Zd};
  }
  :host(${Kl}) {
    font-size: ${qd};
    line-height: ${Qd};
  }
  :host(${Wl}) {
    font-size: ${Ud};
    line-height: ${Yd};
  }
  :host(${Gl}) {
    font-size: ${Kd};
    line-height: ${Jd};
  }
  :host(${_l}) {
    font-size: ${Wd};
    line-height: ${eh};
  }
  :host(${Sl}) {
    font-family: ${Rd};
  }
  :host(${El}) {
    font-family: ${jd};
  }
  :host(${$l}) {
    font-weight: ${Gd};
  }
  :host(${Vl}) {
    font-weight: ${cs};
  }
  :host(${tl}) {
    font-weight: ${Xd};
  }
  :host(${nl}) {
    text-align: center;
  }
  :host(${dl}) {
    text-align: end;
  }
  :host(${vl}) {
    text-align: justify;
  }

  ::slotted(*) {
    font: inherit;
    line-height: inherit;
    text-decoration-line: inherit;
    text-align: inherit;
    text-decoration-line: inherit;
    margin: 0;
  }
`,Gu=G.compose({name:`${m.prefix}-text`,template:Ku,styles:Wu}),Xu=x.getCookie("CLIPSESSIONTOKEN"),Zu="https://api.clippsly.com/endpoints/data/track?id=";class Vs extends D{async connect(){var s;const e=await fetch(Zu+this.idValue.toString(),{headers:{method:"GET",Authorization:`Bearer ${Xu}`}}).then(r=>r.json()).catch(r=>me.loadPage("/error?code="+(r.status|404)));this.trackNameTarget.textContent=e.releaseName,this.explicitIconTarget.hidden=!e.isExplicit,this.aiMusicIconTarget.hidden=!e.isArtificiallyGenerated,this.artistPfpTarget.src=e.releaseAuthor.authorAvatar,this.artistDisplayTarget.textContent=e.releaseAuthor.authorDisplay,this.artistVerifiedTarget.hidden=!e.releaseAuthor.authorVerified,this.artistUsernameTarget.textContent=e.releaseAuthor.authorUsername,this.artistLinkTarget.href=`/users/${e.releaseAuthor.authorUsername}`,this.trackDurationTarget.textContent=e.additionalData.audioDuration,this.trackDescriptionTarget.textContent=e.additionalData.releaseDescription||"No description provided.",this.trackCoverTarget.src=e.additionalData.releaseCoverArt;const t=this.trackCoverTarget.cloneNode(!1);t.classList.add("backlight"),(s=this.trackCoverTarget.parentNode)==null||s.append(t),this.trackLoadingTargets.forEach(r=>{r.classList.remove("skeleton-load-bg")}),this.loadMoreFromArtist(e.releaseAuthor.authorUsername)}async loadMoreFromArtist(e){fetch(`https://api.clippsly.com/endpoints/data/track?username=${e}`).then(t=>t.json()).then(t=>{t.sort((r,n)=>n.releaseID-r.releaseID);const s=this.moreFromArtistTarget;s.innerHTML="",t.slice(0,6).forEach(r=>{s.append(x.createTrack({ID:r.releaseID,Title:r.releaseName,Artist:0,Genre:"Unknown",ArtCover:r.additionalData.releaseCoverArt,Audio:"https://cdn.clippsly.com/submissions/audio/bc44279d62fac0a8e56a956c91dc94d8f0e86d17.mp3",Description:r.additionalData.releaseDescription||"",commentsOff:!1,isModerated:!1,isExplicit:!1,isProtected:!1,isUnderReview:!1,isArtificiallyGenerated:!1,audio_duration:r.additionalData.audioDuration,releaseDate:r.additionalData.premiereDate||0,releaseAuthor:{authorUsername:r.releaseAuthor.authorUsername||"FIXME",authorDisplay:r.releaseAuthor.authorDisplay,authorAvatar:r.releaseAuthor.authorAvatar,authorVerified:r.releaseAuthor.authorVerified}},!0))})}).catch(()=>{this.moreFromArtistTarget.innerHTML="<p>Could not load tracks from this author.</p>"})}}O(Vs,"targets",["trackCover","trackName","explicitIcon","aiMusicIcon","trackDuration","artistPfp","artistDisplay","artistVerified","artistUsername","artistLink","trackDescription","moreFromArtist","trackLoading"]),O(Vs,"values",{id:Number});const br=x.getCookie("CLIPSESSIONTOKEN"),Qu="https://api.clippsly.com/endpoints/data/user?username=",H=class H extends D{async connect(){const e=await fetch(Qu+this.idValue.toString(),{headers:{method:"GET",Authorization:`Bearer ${br}`}}).then(t=>t.json()).catch(t=>me.loadPage("/error?code="+(t.status|404)));if(x.setDocTitle(e.displayName),this.userBannerTarget.src=e.banner,this.userPfpTarget.src=e.avatar,this.userDisplayTarget.textContent=e.displayName,this.userHandleTarget.textContent="@"+e.name,e.status.isVerified){const t=document.createElement("div");t.classList.add("icon"),t.classList.add("brand"),t.title="Verified",t.innerHTML=x.verifiedBadgeHTML,this.userDisplayTarget.append(t)}this.userDescriptionTarget.textContent=e.description||"No description provided",e.status.isAdmin&&this.userBadgesTarget.append(H.createBadge("Clippsly Team","https://cdn.clippsly.com/brand_assets/badges/version_5/Moderators.png","https://support.clippsly.com/knowledgebase.php?article=7")),e.status.isFeedback&&this.userBadgesTarget.append(H.createBadge("Feedback","https://cdn.clippsly.com/brand_assets/badges/version_5/Contributor.png","https://support.clippsly.com/knowledgebase.php?article=4")),e.status.isPlus&&this.userBadgesTarget.append(H.createBadge("Plus","https://cdn.clippsly.com/brand_assets/badges/version_5/Plus.png")),e.connections.roblox&&this.userBadgesTarget.append(H.createBadge("Roblox","https://cdn.clippsly.com/brand_assets/connection_icons/roblox-connection.png",`https://roblox.com/users/${e.connections.roblox}/profile`,!0)),e.connections.youtube&&this.userBadgesTarget.append(H.createBadge("YouTube","https://cdn.clippsly.com/brand_assets/connection_icons/youtube-connection.png",`https://youtube.com/${e.connections.youtube}`,!0)),e.connections.soundcloud&&this.userBadgesTarget.append(H.createBadge("SoundCloud","https://cdn.clippsly.com/brand_assets/connection_icons/soundcloud-connection.png",`https://soundcloud.com/${e.connections.soundcloud}`,!0)),e.connections.twitch&&this.userBadgesTarget.append(H.createBadge("Twitch","https://cdn.clippsly.com/brand_assets/connection_icons/twitch-connection.png","https://twitch.tv/"+e.connections.twitch,!0)),this.loadingTargets.forEach(t=>{t.classList.remove("skeleton-load-bg")}),this.loadUserTracks()}async loadUserTracks(){const e=await fetch("https://api.clippsly.com/endpoints/data/track?username="+this.idValue.toString(),{headers:{method:"GET",Authorization:`Bearer ${br}`}}).then(t=>t.json()).catch(t=>me.loadPage("/error?code="+(t.status|404)));for(let t=0;t<e.length;t++){const s=e[t];this.trackListTarget.append(x.createTrack({ID:s.releaseID,Title:s.releaseName,Artist:0,Genre:s.releaseGenre||"Unknown",ArtCover:s.additionalData.releaseCoverArt,Audio:s.additionalData.audioFile,Description:s.additionalData.releaseDescription,commentsOff:s.commentsOff,isModerated:!1,isExplicit:!1,isProtected:!1,isUnderReview:!1,isArtificiallyGenerated:!1,audio_duration:s.additionalData.audioDuration,releaseDate:s.additionalData.premiereDate,releaseAuthor:s.releaseAuthor},!0))}}static createBadge(e,t,s,r){const n=document.createElement("a");s&&(n.href=s),n.tabIndex=0,n.title=e,n.classList.add("userpage-badge"),n.setAttribute("data-global-target","openExternal");const i=document.createElement("img");return i.ariaHidden="true",i.role="presentation",i.alt="",i.src=t,i.draggable=!1,r&&(i.style.transform="scale(0.85)"),n.append(i),n}};O(H,"targets",["userBanner","userPfp","userStatus","userDisplay","userHandle","userDescription","userBadges","trackList","loading"]),O(H,"values",{id:String});let _s=H;ou.define(m.registry);Jh.define(m.registry);yh.define(m.registry);mh.define(m.registry);Hu.define(m.registry);Iu.define(m.registry);Au.define(m.registry);Vh.define(m.registry);Qh.define(m.registry);yu.define(m.registry);mu.define(m.registry);pu.define(m.registry);iu.define(m.registry);Gu.define(m.registry);const ke=Si.start();ke.register("global",me);ke.register("header",Br);ke.register("search",$s);ke.register("searchbar",Tr);ke.register("track",Vs);ke.register("user",_s);ke.register("error",xs);ke.register("home",Ar);
