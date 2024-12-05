var Vu=Object.defineProperty;var ju=(n,e,t)=>e in n?Vu(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var fe=(n,e,t)=>ju(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const Xn=class Xn{static getCookie(e){const r=`; ${document.cookie}`.split(`; ${e}=`),i=r.pop();return i?r.length===2?i.split(";").shift():null:!1}static setCookie(e,t,r,i){var o="";if(r){var s=new Date;s.setTime(s.getTime()+r*24*60*60*1e3),o="; expires="+s.toUTCString()}document.cookie=e+"="+(t||"")+o+"; path=/; domain="+i,localStorage.setItem("sessionToken",t)}static createTrack(e,t){const r=document.createElement("a");r.classList.add("track"),r.href=`/track/${e.ID}`,r.setAttribute("data-track-link-value",`/users/${e.releaseAuthor.authorUsername}`),r.setAttribute("data-track-pfpimg-value",e.releaseAuthor.authorAvatar??"https://cdn.clippsly.com/brand_assets/icons/default-artist.png"),r.setAttribute("data-track-coverimg-value",e.ArtCover??"https://cdn.clippsly.com/brand_assets/icons/default-artist.png");const i=document.createElement("div");i.classList.add("track-cover"),i.classList.add("skeleton-load-bg");const o=document.createElement("img");o.role="presentation",o.alt="",o.src=e.ArtCover,o.loading=t?"eager":"lazy",o.fetchPriority="high",o.classList.add("skeleton-load-fg"),o.setAttribute("data-global-target","skelimg"),i.append(o);const s=document.createElement("div");s.classList.add("track-metadata");const a=document.createElement("a");a.classList.add("avatar"),a.classList.add("skeleton-load-bg"),a.tabIndex=0,a.href=`/users/${e.releaseAuthor.authorUsername}`;const l=document.createElement("img");l.role="presentation",l.alt="",l.src=e.releaseAuthor.authorAvatar??"https://cdn.clippsly.com/brand_assets/icons/default-artist.png",l.loading="eager",l.fetchPriority="low",l.setAttribute("data-global-target","skelimg"),l.classList.add("skeleton-load-fg"),a.append(l);const c=document.createElement("div");c.classList.add("track-info");const u=document.createElement("span");u.classList.add("track-name"),u.textContent=e.Title;const d=document.createElement("a");d.tabIndex=-1,d.href=`/users/${e.releaseAuthor.authorUsername}`,d.classList.add("artist-name"),d.classList.add("subtitle-hyperlink");const p=document.createElement("span");if(p.textContent=e.releaseAuthor.authorDisplay,d.append(p),e.releaseAuthor.authorVerified){const h=document.createElement("div");h.classList.add("icon"),h.classList.add("brand"),h.title="Verified",h.innerHTML=Xn.verifiedBadgeHTML,d.append(h)}return c.append(u,d),s.append(a,c),r.append(i,s),r}static createSkeletonTrack(){const e=document.createElement("div");e.classList.add("track"),e.classList.add("skeleton");const t=document.createElement("div");t.classList.add("track-cover"),t.classList.add("skeleton-load-bg");const r=document.createElement("div");r.classList.add("track-metadata");const i=document.createElement("div");i.classList.add("avatar"),i.classList.add("skeleton-load-bg");const o=document.createElement("div");o.classList.add("track-info");const s=document.createElement("span");s.classList.add("skeleton-load-bg"),s.textContent="wwwwwwwwwww";const a=document.createElement("span");return a.classList.add("skeleton-load-bg"),a.textContent="wwwwwww",o.append(s,a),r.append(i,o),e.append(t,r),e}static setDocTitle(e){document.title=e+" | Clippsly"}};fe(Xn,"pageNames",{balance:"Balance",cliptivity:"Cliptivity",error:"Error",home:"Home",login:"Log In",moderated:"Not Approved",register:"Sign Up",search:"Search",settings:"Settings",track:"Track",upload:"Create",user:"User"}),fe(Xn,"verifiedBadgeHTML",'<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5ZM7.35355 4.10355C7.54882 3.90829 7.54882 3.59171 7.35355 3.39645C7.15829 3.20118 6.84171 3.20118 6.64645 3.39645L4.5 5.54289L3.35355 4.39645C3.15829 4.20118 2.84171 4.20118 2.64645 4.39645C2.45118 4.59171 2.45118 4.90829 2.64645 5.10355L4.14645 6.60355C4.34171 6.79882 4.65829 6.79882 4.85355 6.60355L7.35355 4.10355Z" fill="currentColor"/></svg>');let ne=Xn;class qu{constructor(e,t,r){this.eventTarget=e,this.eventName=t,this.eventOptions=r,this.unorderedBindings=new Set}connect(){this.eventTarget.addEventListener(this.eventName,this,this.eventOptions)}disconnect(){this.eventTarget.removeEventListener(this.eventName,this,this.eventOptions)}bindingConnected(e){this.unorderedBindings.add(e)}bindingDisconnected(e){this.unorderedBindings.delete(e)}handleEvent(e){const t=Uu(e);for(const r of this.bindings){if(t.immediatePropagationStopped)break;r.handleEvent(t)}}hasBindings(){return this.unorderedBindings.size>0}get bindings(){return Array.from(this.unorderedBindings).sort((e,t)=>{const r=e.index,i=t.index;return r<i?-1:r>i?1:0})}}function Uu(n){if("immediatePropagationStopped"in n)return n;{const{stopImmediatePropagation:e}=n;return Object.assign(n,{immediatePropagationStopped:!1,stopImmediatePropagation(){this.immediatePropagationStopped=!0,e.call(this)}})}}class Ku{constructor(e){this.application=e,this.eventListenerMaps=new Map,this.started=!1}start(){this.started||(this.started=!0,this.eventListeners.forEach(e=>e.connect()))}stop(){this.started&&(this.started=!1,this.eventListeners.forEach(e=>e.disconnect()))}get eventListeners(){return Array.from(this.eventListenerMaps.values()).reduce((e,t)=>e.concat(Array.from(t.values())),[])}bindingConnected(e){this.fetchEventListenerForBinding(e).bindingConnected(e)}bindingDisconnected(e,t=!1){this.fetchEventListenerForBinding(e).bindingDisconnected(e),t&&this.clearEventListenersForBinding(e)}handleError(e,t,r={}){this.application.handleError(e,`Error ${t}`,r)}clearEventListenersForBinding(e){const t=this.fetchEventListenerForBinding(e);t.hasBindings()||(t.disconnect(),this.removeMappedEventListenerFor(e))}removeMappedEventListenerFor(e){const{eventTarget:t,eventName:r,eventOptions:i}=e,o=this.fetchEventListenerMapForEventTarget(t),s=this.cacheKey(r,i);o.delete(s),o.size==0&&this.eventListenerMaps.delete(t)}fetchEventListenerForBinding(e){const{eventTarget:t,eventName:r,eventOptions:i}=e;return this.fetchEventListener(t,r,i)}fetchEventListener(e,t,r){const i=this.fetchEventListenerMapForEventTarget(e),o=this.cacheKey(t,r);let s=i.get(o);return s||(s=this.createEventListener(e,t,r),i.set(o,s)),s}createEventListener(e,t,r){const i=new qu(e,t,r);return this.started&&i.connect(),i}fetchEventListenerMapForEventTarget(e){let t=this.eventListenerMaps.get(e);return t||(t=new Map,this.eventListenerMaps.set(e,t)),t}cacheKey(e,t){const r=[e];return Object.keys(t).sort().forEach(i=>{r.push(`${t[i]?"":"!"}${i}`)}),r.join(":")}}const Wu={stop({event:n,value:e}){return e&&n.stopPropagation(),!0},prevent({event:n,value:e}){return e&&n.preventDefault(),!0},self({event:n,value:e,element:t}){return e?t===n.target:!0}},Gu=/^(?:(?:([^.]+?)\+)?(.+?)(?:\.(.+?))?(?:@(window|document))?->)?(.+?)(?:#([^:]+?))(?::(.+))?$/;function Xu(n){const t=n.trim().match(Gu)||[];let r=t[2],i=t[3];return i&&!["keydown","keyup","keypress"].includes(r)&&(r+=`.${i}`,i=""),{eventTarget:Qu(t[4]),eventName:r,eventOptions:t[7]?Yu(t[7]):{},identifier:t[5],methodName:t[6],keyFilter:t[1]||i}}function Qu(n){if(n=="window")return window;if(n=="document")return document}function Yu(n){return n.split(":").reduce((e,t)=>Object.assign(e,{[t.replace(/^!/,"")]:!/^!/.test(t)}),{})}function Zu(n){if(n==window)return"window";if(n==document)return"document"}function vo(n){return n.replace(/(?:[_-])([a-z0-9])/g,(e,t)=>t.toUpperCase())}function Ni(n){return vo(n.replace(/--/g,"-").replace(/__/g,"_"))}function nr(n){return n.charAt(0).toUpperCase()+n.slice(1)}function al(n){return n.replace(/([A-Z])/g,(e,t)=>`-${t.toLowerCase()}`)}function Ju(n){return n.match(/[^\s]+/g)||[]}function cs(n){return n!=null}function Li(n,e){return Object.prototype.hasOwnProperty.call(n,e)}const us=["meta","ctrl","alt","shift"];class ed{constructor(e,t,r,i){this.element=e,this.index=t,this.eventTarget=r.eventTarget||e,this.eventName=r.eventName||td(e)||pr("missing event name"),this.eventOptions=r.eventOptions||{},this.identifier=r.identifier||pr("missing identifier"),this.methodName=r.methodName||pr("missing method name"),this.keyFilter=r.keyFilter||"",this.schema=i}static forToken(e,t){return new this(e.element,e.index,Xu(e.content),t)}toString(){const e=this.keyFilter?`.${this.keyFilter}`:"",t=this.eventTargetName?`@${this.eventTargetName}`:"";return`${this.eventName}${e}${t}->${this.identifier}#${this.methodName}`}shouldIgnoreKeyboardEvent(e){if(!this.keyFilter)return!1;const t=this.keyFilter.split("+");if(this.keyFilterDissatisfied(e,t))return!0;const r=t.filter(i=>!us.includes(i))[0];return r?(Li(this.keyMappings,r)||pr(`contains unknown key filter: ${this.keyFilter}`),this.keyMappings[r].toLowerCase()!==e.key.toLowerCase()):!1}shouldIgnoreMouseEvent(e){if(!this.keyFilter)return!1;const t=[this.keyFilter];return!!this.keyFilterDissatisfied(e,t)}get params(){const e={},t=new RegExp(`^data-${this.identifier}-(.+)-param$`,"i");for(const{name:r,value:i}of Array.from(this.element.attributes)){const o=r.match(t),s=o&&o[1];s&&(e[vo(s)]=nd(i))}return e}get eventTargetName(){return Zu(this.eventTarget)}get keyMappings(){return this.schema.keyMappings}keyFilterDissatisfied(e,t){const[r,i,o,s]=us.map(a=>t.includes(a));return e.metaKey!==r||e.ctrlKey!==i||e.altKey!==o||e.shiftKey!==s}}const ds={a:()=>"click",button:()=>"click",form:()=>"submit",details:()=>"toggle",input:n=>n.getAttribute("type")=="submit"?"click":"input",select:()=>"change",textarea:()=>"input"};function td(n){const e=n.tagName.toLowerCase();if(e in ds)return ds[e](n)}function pr(n){throw new Error(n)}function nd(n){try{return JSON.parse(n)}catch{return n}}let rd=class{constructor(e,t){this.context=e,this.action=t}get index(){return this.action.index}get eventTarget(){return this.action.eventTarget}get eventOptions(){return this.action.eventOptions}get identifier(){return this.context.identifier}handleEvent(e){const t=this.prepareActionEvent(e);this.willBeInvokedByEvent(e)&&this.applyEventModifiers(t)&&this.invokeWithEvent(t)}get eventName(){return this.action.eventName}get method(){const e=this.controller[this.methodName];if(typeof e=="function")return e;throw new Error(`Action "${this.action}" references undefined method "${this.methodName}"`)}applyEventModifiers(e){const{element:t}=this.action,{actionDescriptorFilters:r}=this.context.application,{controller:i}=this.context;let o=!0;for(const[s,a]of Object.entries(this.eventOptions))if(s in r){const l=r[s];o=o&&l({name:s,value:a,event:e,element:t,controller:i})}else continue;return o}prepareActionEvent(e){return Object.assign(e,{params:this.action.params})}invokeWithEvent(e){const{target:t,currentTarget:r}=e;try{this.method.call(this.controller,e),this.context.logDebugActivity(this.methodName,{event:e,target:t,currentTarget:r,action:this.methodName})}catch(i){const{identifier:o,controller:s,element:a,index:l}=this,c={identifier:o,controller:s,element:a,index:l,event:e};this.context.handleError(i,`invoking action "${this.action}"`,c)}}willBeInvokedByEvent(e){const t=e.target;return e instanceof KeyboardEvent&&this.action.shouldIgnoreKeyboardEvent(e)||e instanceof MouseEvent&&this.action.shouldIgnoreMouseEvent(e)?!1:this.element===t?!0:t instanceof Element&&this.element.contains(t)?this.scope.containsElement(t):this.scope.containsElement(this.action.element)}get controller(){return this.context.controller}get methodName(){return this.action.methodName}get element(){return this.scope.element}get scope(){return this.context.scope}};class ll{constructor(e,t){this.mutationObserverInit={attributes:!0,childList:!0,subtree:!0},this.element=e,this.started=!1,this.delegate=t,this.elements=new Set,this.mutationObserver=new MutationObserver(r=>this.processMutations(r))}start(){this.started||(this.started=!0,this.mutationObserver.observe(this.element,this.mutationObserverInit),this.refresh())}pause(e){this.started&&(this.mutationObserver.disconnect(),this.started=!1),e(),this.started||(this.mutationObserver.observe(this.element,this.mutationObserverInit),this.started=!0)}stop(){this.started&&(this.mutationObserver.takeRecords(),this.mutationObserver.disconnect(),this.started=!1)}refresh(){if(this.started){const e=new Set(this.matchElementsInTree());for(const t of Array.from(this.elements))e.has(t)||this.removeElement(t);for(const t of Array.from(e))this.addElement(t)}}processMutations(e){if(this.started)for(const t of e)this.processMutation(t)}processMutation(e){e.type=="attributes"?this.processAttributeChange(e.target,e.attributeName):e.type=="childList"&&(this.processRemovedNodes(e.removedNodes),this.processAddedNodes(e.addedNodes))}processAttributeChange(e,t){this.elements.has(e)?this.delegate.elementAttributeChanged&&this.matchElement(e)?this.delegate.elementAttributeChanged(e,t):this.removeElement(e):this.matchElement(e)&&this.addElement(e)}processRemovedNodes(e){for(const t of Array.from(e)){const r=this.elementFromNode(t);r&&this.processTree(r,this.removeElement)}}processAddedNodes(e){for(const t of Array.from(e)){const r=this.elementFromNode(t);r&&this.elementIsActive(r)&&this.processTree(r,this.addElement)}}matchElement(e){return this.delegate.matchElement(e)}matchElementsInTree(e=this.element){return this.delegate.matchElementsInTree(e)}processTree(e,t){for(const r of this.matchElementsInTree(e))t.call(this,r)}elementFromNode(e){if(e.nodeType==Node.ELEMENT_NODE)return e}elementIsActive(e){return e.isConnected!=this.element.isConnected?!1:this.element.contains(e)}addElement(e){this.elements.has(e)||this.elementIsActive(e)&&(this.elements.add(e),this.delegate.elementMatched&&this.delegate.elementMatched(e))}removeElement(e){this.elements.has(e)&&(this.elements.delete(e),this.delegate.elementUnmatched&&this.delegate.elementUnmatched(e))}}class cl{constructor(e,t,r){this.attributeName=t,this.delegate=r,this.elementObserver=new ll(e,this)}get element(){return this.elementObserver.element}get selector(){return`[${this.attributeName}]`}start(){this.elementObserver.start()}pause(e){this.elementObserver.pause(e)}stop(){this.elementObserver.stop()}refresh(){this.elementObserver.refresh()}get started(){return this.elementObserver.started}matchElement(e){return e.hasAttribute(this.attributeName)}matchElementsInTree(e){const t=this.matchElement(e)?[e]:[],r=Array.from(e.querySelectorAll(this.selector));return t.concat(r)}elementMatched(e){this.delegate.elementMatchedAttribute&&this.delegate.elementMatchedAttribute(e,this.attributeName)}elementUnmatched(e){this.delegate.elementUnmatchedAttribute&&this.delegate.elementUnmatchedAttribute(e,this.attributeName)}elementAttributeChanged(e,t){this.delegate.elementAttributeValueChanged&&this.attributeName==t&&this.delegate.elementAttributeValueChanged(e,t)}}function id(n,e,t){ul(n,e).add(t)}function od(n,e,t){ul(n,e).delete(t),sd(n,e)}function ul(n,e){let t=n.get(e);return t||(t=new Set,n.set(e,t)),t}function sd(n,e){const t=n.get(e);t!=null&&t.size==0&&n.delete(e)}class Kt{constructor(){this.valuesByKey=new Map}get keys(){return Array.from(this.valuesByKey.keys())}get values(){return Array.from(this.valuesByKey.values()).reduce((t,r)=>t.concat(Array.from(r)),[])}get size(){return Array.from(this.valuesByKey.values()).reduce((t,r)=>t+r.size,0)}add(e,t){id(this.valuesByKey,e,t)}delete(e,t){od(this.valuesByKey,e,t)}has(e,t){const r=this.valuesByKey.get(e);return r!=null&&r.has(t)}hasKey(e){return this.valuesByKey.has(e)}hasValue(e){return Array.from(this.valuesByKey.values()).some(r=>r.has(e))}getValuesForKey(e){const t=this.valuesByKey.get(e);return t?Array.from(t):[]}getKeysForValue(e){return Array.from(this.valuesByKey).filter(([t,r])=>r.has(e)).map(([t,r])=>t)}}class ad{constructor(e,t,r,i){this._selector=t,this.details=i,this.elementObserver=new ll(e,this),this.delegate=r,this.matchesByElement=new Kt}get started(){return this.elementObserver.started}get selector(){return this._selector}set selector(e){this._selector=e,this.refresh()}start(){this.elementObserver.start()}pause(e){this.elementObserver.pause(e)}stop(){this.elementObserver.stop()}refresh(){this.elementObserver.refresh()}get element(){return this.elementObserver.element}matchElement(e){const{selector:t}=this;if(t){const r=e.matches(t);return this.delegate.selectorMatchElement?r&&this.delegate.selectorMatchElement(e,this.details):r}else return!1}matchElementsInTree(e){const{selector:t}=this;if(t){const r=this.matchElement(e)?[e]:[],i=Array.from(e.querySelectorAll(t)).filter(o=>this.matchElement(o));return r.concat(i)}else return[]}elementMatched(e){const{selector:t}=this;t&&this.selectorMatched(e,t)}elementUnmatched(e){const t=this.matchesByElement.getKeysForValue(e);for(const r of t)this.selectorUnmatched(e,r)}elementAttributeChanged(e,t){const{selector:r}=this;if(r){const i=this.matchElement(e),o=this.matchesByElement.has(r,e);i&&!o?this.selectorMatched(e,r):!i&&o&&this.selectorUnmatched(e,r)}}selectorMatched(e,t){this.delegate.selectorMatched(e,t,this.details),this.matchesByElement.add(t,e)}selectorUnmatched(e,t){this.delegate.selectorUnmatched(e,t,this.details),this.matchesByElement.delete(t,e)}}class ld{constructor(e,t){this.element=e,this.delegate=t,this.started=!1,this.stringMap=new Map,this.mutationObserver=new MutationObserver(r=>this.processMutations(r))}start(){this.started||(this.started=!0,this.mutationObserver.observe(this.element,{attributes:!0,attributeOldValue:!0}),this.refresh())}stop(){this.started&&(this.mutationObserver.takeRecords(),this.mutationObserver.disconnect(),this.started=!1)}refresh(){if(this.started)for(const e of this.knownAttributeNames)this.refreshAttribute(e,null)}processMutations(e){if(this.started)for(const t of e)this.processMutation(t)}processMutation(e){const t=e.attributeName;t&&this.refreshAttribute(t,e.oldValue)}refreshAttribute(e,t){const r=this.delegate.getStringMapKeyForAttribute(e);if(r!=null){this.stringMap.has(e)||this.stringMapKeyAdded(r,e);const i=this.element.getAttribute(e);if(this.stringMap.get(e)!=i&&this.stringMapValueChanged(i,r,t),i==null){const o=this.stringMap.get(e);this.stringMap.delete(e),o&&this.stringMapKeyRemoved(r,e,o)}else this.stringMap.set(e,i)}}stringMapKeyAdded(e,t){this.delegate.stringMapKeyAdded&&this.delegate.stringMapKeyAdded(e,t)}stringMapValueChanged(e,t,r){this.delegate.stringMapValueChanged&&this.delegate.stringMapValueChanged(e,t,r)}stringMapKeyRemoved(e,t,r){this.delegate.stringMapKeyRemoved&&this.delegate.stringMapKeyRemoved(e,t,r)}get knownAttributeNames(){return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)))}get currentAttributeNames(){return Array.from(this.element.attributes).map(e=>e.name)}get recordedAttributeNames(){return Array.from(this.stringMap.keys())}}class dl{constructor(e,t,r){this.attributeObserver=new cl(e,t,this),this.delegate=r,this.tokensByElement=new Kt}get started(){return this.attributeObserver.started}start(){this.attributeObserver.start()}pause(e){this.attributeObserver.pause(e)}stop(){this.attributeObserver.stop()}refresh(){this.attributeObserver.refresh()}get element(){return this.attributeObserver.element}get attributeName(){return this.attributeObserver.attributeName}elementMatchedAttribute(e){this.tokensMatched(this.readTokensForElement(e))}elementAttributeValueChanged(e){const[t,r]=this.refreshTokensForElement(e);this.tokensUnmatched(t),this.tokensMatched(r)}elementUnmatchedAttribute(e){this.tokensUnmatched(this.tokensByElement.getValuesForKey(e))}tokensMatched(e){e.forEach(t=>this.tokenMatched(t))}tokensUnmatched(e){e.forEach(t=>this.tokenUnmatched(t))}tokenMatched(e){this.delegate.tokenMatched(e),this.tokensByElement.add(e.element,e)}tokenUnmatched(e){this.delegate.tokenUnmatched(e),this.tokensByElement.delete(e.element,e)}refreshTokensForElement(e){const t=this.tokensByElement.getValuesForKey(e),r=this.readTokensForElement(e),i=ud(t,r).findIndex(([o,s])=>!dd(o,s));return i==-1?[[],[]]:[t.slice(i),r.slice(i)]}readTokensForElement(e){const t=this.attributeName,r=e.getAttribute(t)||"";return cd(r,e,t)}}function cd(n,e,t){return n.trim().split(/\s+/).filter(r=>r.length).map((r,i)=>({element:e,attributeName:t,content:r,index:i}))}function ud(n,e){const t=Math.max(n.length,e.length);return Array.from({length:t},(r,i)=>[n[i],e[i]])}function dd(n,e){return n&&e&&n.index==e.index&&n.content==e.content}class hl{constructor(e,t,r){this.tokenListObserver=new dl(e,t,this),this.delegate=r,this.parseResultsByToken=new WeakMap,this.valuesByTokenByElement=new WeakMap}get started(){return this.tokenListObserver.started}start(){this.tokenListObserver.start()}stop(){this.tokenListObserver.stop()}refresh(){this.tokenListObserver.refresh()}get element(){return this.tokenListObserver.element}get attributeName(){return this.tokenListObserver.attributeName}tokenMatched(e){const{element:t}=e,{value:r}=this.fetchParseResultForToken(e);r&&(this.fetchValuesByTokenForElement(t).set(e,r),this.delegate.elementMatchedValue(t,r))}tokenUnmatched(e){const{element:t}=e,{value:r}=this.fetchParseResultForToken(e);r&&(this.fetchValuesByTokenForElement(t).delete(e),this.delegate.elementUnmatchedValue(t,r))}fetchParseResultForToken(e){let t=this.parseResultsByToken.get(e);return t||(t=this.parseToken(e),this.parseResultsByToken.set(e,t)),t}fetchValuesByTokenForElement(e){let t=this.valuesByTokenByElement.get(e);return t||(t=new Map,this.valuesByTokenByElement.set(e,t)),t}parseToken(e){try{return{value:this.delegate.parseValueForToken(e)}}catch(t){return{error:t}}}}class hd{constructor(e,t){this.context=e,this.delegate=t,this.bindingsByAction=new Map}start(){this.valueListObserver||(this.valueListObserver=new hl(this.element,this.actionAttribute,this),this.valueListObserver.start())}stop(){this.valueListObserver&&(this.valueListObserver.stop(),delete this.valueListObserver,this.disconnectAllActions())}get element(){return this.context.element}get identifier(){return this.context.identifier}get actionAttribute(){return this.schema.actionAttribute}get schema(){return this.context.schema}get bindings(){return Array.from(this.bindingsByAction.values())}connectAction(e){const t=new rd(this.context,e);this.bindingsByAction.set(e,t),this.delegate.bindingConnected(t)}disconnectAction(e){const t=this.bindingsByAction.get(e);t&&(this.bindingsByAction.delete(e),this.delegate.bindingDisconnected(t))}disconnectAllActions(){this.bindings.forEach(e=>this.delegate.bindingDisconnected(e,!0)),this.bindingsByAction.clear()}parseValueForToken(e){const t=ed.forToken(e,this.schema);if(t.identifier==this.identifier)return t}elementMatchedValue(e,t){this.connectAction(t)}elementUnmatchedValue(e,t){this.disconnectAction(t)}}class pd{constructor(e,t){this.context=e,this.receiver=t,this.stringMapObserver=new ld(this.element,this),this.valueDescriptorMap=this.controller.valueDescriptorMap}start(){this.stringMapObserver.start(),this.invokeChangedCallbacksForDefaultValues()}stop(){this.stringMapObserver.stop()}get element(){return this.context.element}get controller(){return this.context.controller}getStringMapKeyForAttribute(e){if(e in this.valueDescriptorMap)return this.valueDescriptorMap[e].name}stringMapKeyAdded(e,t){const r=this.valueDescriptorMap[t];this.hasValue(e)||this.invokeChangedCallback(e,r.writer(this.receiver[e]),r.writer(r.defaultValue))}stringMapValueChanged(e,t,r){const i=this.valueDescriptorNameMap[t];e!==null&&(r===null&&(r=i.writer(i.defaultValue)),this.invokeChangedCallback(t,e,r))}stringMapKeyRemoved(e,t,r){const i=this.valueDescriptorNameMap[e];this.hasValue(e)?this.invokeChangedCallback(e,i.writer(this.receiver[e]),r):this.invokeChangedCallback(e,i.writer(i.defaultValue),r)}invokeChangedCallbacksForDefaultValues(){for(const{key:e,name:t,defaultValue:r,writer:i}of this.valueDescriptors)r!=null&&!this.controller.data.has(e)&&this.invokeChangedCallback(t,i(r),void 0)}invokeChangedCallback(e,t,r){const i=`${e}Changed`,o=this.receiver[i];if(typeof o=="function"){const s=this.valueDescriptorNameMap[e];try{const a=s.reader(t);let l=r;r&&(l=s.reader(r)),o.call(this.receiver,a,l)}catch(a){throw a instanceof TypeError&&(a.message=`Stimulus Value "${this.context.identifier}.${s.name}" - ${a.message}`),a}}}get valueDescriptors(){const{valueDescriptorMap:e}=this;return Object.keys(e).map(t=>e[t])}get valueDescriptorNameMap(){const e={};return Object.keys(this.valueDescriptorMap).forEach(t=>{const r=this.valueDescriptorMap[t];e[r.name]=r}),e}hasValue(e){const t=this.valueDescriptorNameMap[e],r=`has${nr(t.name)}`;return this.receiver[r]}}class fd{constructor(e,t){this.context=e,this.delegate=t,this.targetsByName=new Kt}start(){this.tokenListObserver||(this.tokenListObserver=new dl(this.element,this.attributeName,this),this.tokenListObserver.start())}stop(){this.tokenListObserver&&(this.disconnectAllTargets(),this.tokenListObserver.stop(),delete this.tokenListObserver)}tokenMatched({element:e,content:t}){this.scope.containsElement(e)&&this.connectTarget(e,t)}tokenUnmatched({element:e,content:t}){this.disconnectTarget(e,t)}connectTarget(e,t){var r;this.targetsByName.has(t,e)||(this.targetsByName.add(t,e),(r=this.tokenListObserver)===null||r===void 0||r.pause(()=>this.delegate.targetConnected(e,t)))}disconnectTarget(e,t){var r;this.targetsByName.has(t,e)&&(this.targetsByName.delete(t,e),(r=this.tokenListObserver)===null||r===void 0||r.pause(()=>this.delegate.targetDisconnected(e,t)))}disconnectAllTargets(){for(const e of this.targetsByName.keys)for(const t of this.targetsByName.getValuesForKey(e))this.disconnectTarget(t,e)}get attributeName(){return`data-${this.context.identifier}-target`}get element(){return this.context.element}get scope(){return this.context.scope}}function rr(n,e){const t=pl(n);return Array.from(t.reduce((r,i)=>(md(i,e).forEach(o=>r.add(o)),r),new Set))}function gd(n,e){return pl(n).reduce((r,i)=>(r.push(...bd(i,e)),r),[])}function pl(n){const e=[];for(;n;)e.push(n),n=Object.getPrototypeOf(n);return e.reverse()}function md(n,e){const t=n[e];return Array.isArray(t)?t:[]}function bd(n,e){const t=n[e];return t?Object.keys(t).map(r=>[r,t[r]]):[]}class vd{constructor(e,t){this.started=!1,this.context=e,this.delegate=t,this.outletsByName=new Kt,this.outletElementsByName=new Kt,this.selectorObserverMap=new Map,this.attributeObserverMap=new Map}start(){this.started||(this.outletDefinitions.forEach(e=>{this.setupSelectorObserverForOutlet(e),this.setupAttributeObserverForOutlet(e)}),this.started=!0,this.dependentContexts.forEach(e=>e.refresh()))}refresh(){this.selectorObserverMap.forEach(e=>e.refresh()),this.attributeObserverMap.forEach(e=>e.refresh())}stop(){this.started&&(this.started=!1,this.disconnectAllOutlets(),this.stopSelectorObservers(),this.stopAttributeObservers())}stopSelectorObservers(){this.selectorObserverMap.size>0&&(this.selectorObserverMap.forEach(e=>e.stop()),this.selectorObserverMap.clear())}stopAttributeObservers(){this.attributeObserverMap.size>0&&(this.attributeObserverMap.forEach(e=>e.stop()),this.attributeObserverMap.clear())}selectorMatched(e,t,{outletName:r}){const i=this.getOutlet(e,r);i&&this.connectOutlet(i,e,r)}selectorUnmatched(e,t,{outletName:r}){const i=this.getOutletFromMap(e,r);i&&this.disconnectOutlet(i,e,r)}selectorMatchElement(e,{outletName:t}){const r=this.selector(t),i=this.hasOutlet(e,t),o=e.matches(`[${this.schema.controllerAttribute}~=${t}]`);return r?i&&o&&e.matches(r):!1}elementMatchedAttribute(e,t){const r=this.getOutletNameFromOutletAttributeName(t);r&&this.updateSelectorObserverForOutlet(r)}elementAttributeValueChanged(e,t){const r=this.getOutletNameFromOutletAttributeName(t);r&&this.updateSelectorObserverForOutlet(r)}elementUnmatchedAttribute(e,t){const r=this.getOutletNameFromOutletAttributeName(t);r&&this.updateSelectorObserverForOutlet(r)}connectOutlet(e,t,r){var i;this.outletElementsByName.has(r,t)||(this.outletsByName.add(r,e),this.outletElementsByName.add(r,t),(i=this.selectorObserverMap.get(r))===null||i===void 0||i.pause(()=>this.delegate.outletConnected(e,t,r)))}disconnectOutlet(e,t,r){var i;this.outletElementsByName.has(r,t)&&(this.outletsByName.delete(r,e),this.outletElementsByName.delete(r,t),(i=this.selectorObserverMap.get(r))===null||i===void 0||i.pause(()=>this.delegate.outletDisconnected(e,t,r)))}disconnectAllOutlets(){for(const e of this.outletElementsByName.keys)for(const t of this.outletElementsByName.getValuesForKey(e))for(const r of this.outletsByName.getValuesForKey(e))this.disconnectOutlet(r,t,e)}updateSelectorObserverForOutlet(e){const t=this.selectorObserverMap.get(e);t&&(t.selector=this.selector(e))}setupSelectorObserverForOutlet(e){const t=this.selector(e),r=new ad(document.body,t,this,{outletName:e});this.selectorObserverMap.set(e,r),r.start()}setupAttributeObserverForOutlet(e){const t=this.attributeNameForOutletName(e),r=new cl(this.scope.element,t,this);this.attributeObserverMap.set(e,r),r.start()}selector(e){return this.scope.outlets.getSelectorForOutletName(e)}attributeNameForOutletName(e){return this.scope.schema.outletAttributeForScope(this.identifier,e)}getOutletNameFromOutletAttributeName(e){return this.outletDefinitions.find(t=>this.attributeNameForOutletName(t)===e)}get outletDependencies(){const e=new Kt;return this.router.modules.forEach(t=>{const r=t.definition.controllerConstructor;rr(r,"outlets").forEach(o=>e.add(o,t.identifier))}),e}get outletDefinitions(){return this.outletDependencies.getKeysForValue(this.identifier)}get dependentControllerIdentifiers(){return this.outletDependencies.getValuesForKey(this.identifier)}get dependentContexts(){const e=this.dependentControllerIdentifiers;return this.router.contexts.filter(t=>e.includes(t.identifier))}hasOutlet(e,t){return!!this.getOutlet(e,t)||!!this.getOutletFromMap(e,t)}getOutlet(e,t){return this.application.getControllerForElementAndIdentifier(e,t)}getOutletFromMap(e,t){return this.outletsByName.getValuesForKey(t).find(r=>r.element===e)}get scope(){return this.context.scope}get schema(){return this.context.schema}get identifier(){return this.context.identifier}get application(){return this.context.application}get router(){return this.application.router}}class yd{constructor(e,t){this.logDebugActivity=(r,i={})=>{const{identifier:o,controller:s,element:a}=this;i=Object.assign({identifier:o,controller:s,element:a},i),this.application.logDebugActivity(this.identifier,r,i)},this.module=e,this.scope=t,this.controller=new e.controllerConstructor(this),this.bindingObserver=new hd(this,this.dispatcher),this.valueObserver=new pd(this,this.controller),this.targetObserver=new fd(this,this),this.outletObserver=new vd(this,this);try{this.controller.initialize(),this.logDebugActivity("initialize")}catch(r){this.handleError(r,"initializing controller")}}connect(){this.bindingObserver.start(),this.valueObserver.start(),this.targetObserver.start(),this.outletObserver.start();try{this.controller.connect(),this.logDebugActivity("connect")}catch(e){this.handleError(e,"connecting controller")}}refresh(){this.outletObserver.refresh()}disconnect(){try{this.controller.disconnect(),this.logDebugActivity("disconnect")}catch(e){this.handleError(e,"disconnecting controller")}this.outletObserver.stop(),this.targetObserver.stop(),this.valueObserver.stop(),this.bindingObserver.stop()}get application(){return this.module.application}get identifier(){return this.module.identifier}get schema(){return this.application.schema}get dispatcher(){return this.application.dispatcher}get element(){return this.scope.element}get parentElement(){return this.element.parentElement}handleError(e,t,r={}){const{identifier:i,controller:o,element:s}=this;r=Object.assign({identifier:i,controller:o,element:s},r),this.application.handleError(e,`Error ${t}`,r)}targetConnected(e,t){this.invokeControllerMethod(`${t}TargetConnected`,e)}targetDisconnected(e,t){this.invokeControllerMethod(`${t}TargetDisconnected`,e)}outletConnected(e,t,r){this.invokeControllerMethod(`${Ni(r)}OutletConnected`,e,t)}outletDisconnected(e,t,r){this.invokeControllerMethod(`${Ni(r)}OutletDisconnected`,e,t)}invokeControllerMethod(e,...t){const r=this.controller;typeof r[e]=="function"&&r[e](...t)}}function wd(n){return kd(n,xd(n))}function kd(n,e){const t=Ed(n),r=$d(n.prototype,e);return Object.defineProperties(t.prototype,r),t}function xd(n){return rr(n,"blessings").reduce((t,r)=>{const i=r(n);for(const o in i){const s=t[o]||{};t[o]=Object.assign(s,i[o])}return t},{})}function $d(n,e){return Cd(e).reduce((t,r)=>{const i=Sd(n,e,r);return i&&Object.assign(t,{[r]:i}),t},{})}function Sd(n,e,t){const r=Object.getOwnPropertyDescriptor(n,t);if(!(r&&"value"in r)){const o=Object.getOwnPropertyDescriptor(e,t).value;return r&&(o.get=r.get||o.get,o.set=r.set||o.set),o}}const Cd=typeof Object.getOwnPropertySymbols=="function"?n=>[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)]:Object.getOwnPropertyNames,Ed=(()=>{function n(t){function r(){return Reflect.construct(t,arguments,new.target)}return r.prototype=Object.create(t.prototype,{constructor:{value:r}}),Reflect.setPrototypeOf(r,t),r}function e(){const r=n(function(){this.a.call(this)});return r.prototype.a=function(){},new r}try{return e(),n}catch{return r=>class extends r{}}})();function Ad(n){return{identifier:n.identifier,controllerConstructor:wd(n.controllerConstructor)}}class Td{constructor(e,t){this.application=e,this.definition=Ad(t),this.contextsByScope=new WeakMap,this.connectedContexts=new Set}get identifier(){return this.definition.identifier}get controllerConstructor(){return this.definition.controllerConstructor}get contexts(){return Array.from(this.connectedContexts)}connectContextForScope(e){const t=this.fetchContextForScope(e);this.connectedContexts.add(t),t.connect()}disconnectContextForScope(e){const t=this.contextsByScope.get(e);t&&(this.connectedContexts.delete(t),t.disconnect())}fetchContextForScope(e){let t=this.contextsByScope.get(e);return t||(t=new yd(this,e),this.contextsByScope.set(e,t)),t}}class Id{constructor(e){this.scope=e}has(e){return this.data.has(this.getDataKey(e))}get(e){return this.getAll(e)[0]}getAll(e){const t=this.data.get(this.getDataKey(e))||"";return Ju(t)}getAttributeName(e){return this.data.getAttributeNameForKey(this.getDataKey(e))}getDataKey(e){return`${e}-class`}get data(){return this.scope.data}}class Bd{constructor(e){this.scope=e}get element(){return this.scope.element}get identifier(){return this.scope.identifier}get(e){const t=this.getAttributeNameForKey(e);return this.element.getAttribute(t)}set(e,t){const r=this.getAttributeNameForKey(e);return this.element.setAttribute(r,t),this.get(e)}has(e){const t=this.getAttributeNameForKey(e);return this.element.hasAttribute(t)}delete(e){if(this.has(e)){const t=this.getAttributeNameForKey(e);return this.element.removeAttribute(t),!0}else return!1}getAttributeNameForKey(e){return`data-${this.identifier}-${al(e)}`}}class Od{constructor(e){this.warnedKeysByObject=new WeakMap,this.logger=e}warn(e,t,r){let i=this.warnedKeysByObject.get(e);i||(i=new Set,this.warnedKeysByObject.set(e,i)),i.has(t)||(i.add(t),this.logger.warn(r,e))}}function Di(n,e){return`[${n}~="${e}"]`}class zd{constructor(e){this.scope=e}get element(){return this.scope.element}get identifier(){return this.scope.identifier}get schema(){return this.scope.schema}has(e){return this.find(e)!=null}find(...e){return e.reduce((t,r)=>t||this.findTarget(r)||this.findLegacyTarget(r),void 0)}findAll(...e){return e.reduce((t,r)=>[...t,...this.findAllTargets(r),...this.findAllLegacyTargets(r)],[])}findTarget(e){const t=this.getSelectorForTargetName(e);return this.scope.findElement(t)}findAllTargets(e){const t=this.getSelectorForTargetName(e);return this.scope.findAllElements(t)}getSelectorForTargetName(e){const t=this.schema.targetAttributeForScope(this.identifier);return Di(t,e)}findLegacyTarget(e){const t=this.getLegacySelectorForTargetName(e);return this.deprecate(this.scope.findElement(t),e)}findAllLegacyTargets(e){const t=this.getLegacySelectorForTargetName(e);return this.scope.findAllElements(t).map(r=>this.deprecate(r,e))}getLegacySelectorForTargetName(e){const t=`${this.identifier}.${e}`;return Di(this.schema.targetAttribute,t)}deprecate(e,t){if(e){const{identifier:r}=this,i=this.schema.targetAttribute,o=this.schema.targetAttributeForScope(r);this.guide.warn(e,`target:${t}`,`Please replace ${i}="${r}.${t}" with ${o}="${t}". The ${i} attribute is deprecated and will be removed in a future version of Stimulus.`)}return e}get guide(){return this.scope.guide}}class Pd{constructor(e,t){this.scope=e,this.controllerElement=t}get element(){return this.scope.element}get identifier(){return this.scope.identifier}get schema(){return this.scope.schema}has(e){return this.find(e)!=null}find(...e){return e.reduce((t,r)=>t||this.findOutlet(r),void 0)}findAll(...e){return e.reduce((t,r)=>[...t,...this.findAllOutlets(r)],[])}getSelectorForOutletName(e){const t=this.schema.outletAttributeForScope(this.identifier,e);return this.controllerElement.getAttribute(t)}findOutlet(e){const t=this.getSelectorForOutletName(e);if(t)return this.findElement(t,e)}findAllOutlets(e){const t=this.getSelectorForOutletName(e);return t?this.findAllElements(t,e):[]}findElement(e,t){return this.scope.queryElements(e).filter(i=>this.matchesElement(i,e,t))[0]}findAllElements(e,t){return this.scope.queryElements(e).filter(i=>this.matchesElement(i,e,t))}matchesElement(e,t,r){const i=e.getAttribute(this.scope.schema.controllerAttribute)||"";return e.matches(t)&&i.split(" ").includes(r)}}class yo{constructor(e,t,r,i){this.targets=new zd(this),this.classes=new Id(this),this.data=new Bd(this),this.containsElement=o=>o.closest(this.controllerSelector)===this.element,this.schema=e,this.element=t,this.identifier=r,this.guide=new Od(i),this.outlets=new Pd(this.documentScope,t)}findElement(e){return this.element.matches(e)?this.element:this.queryElements(e).find(this.containsElement)}findAllElements(e){return[...this.element.matches(e)?[this.element]:[],...this.queryElements(e).filter(this.containsElement)]}queryElements(e){return Array.from(this.element.querySelectorAll(e))}get controllerSelector(){return Di(this.schema.controllerAttribute,this.identifier)}get isDocumentScope(){return this.element===document.documentElement}get documentScope(){return this.isDocumentScope?this:new yo(this.schema,document.documentElement,this.identifier,this.guide.logger)}}class Fd{constructor(e,t,r){this.element=e,this.schema=t,this.delegate=r,this.valueListObserver=new hl(this.element,this.controllerAttribute,this),this.scopesByIdentifierByElement=new WeakMap,this.scopeReferenceCounts=new WeakMap}start(){this.valueListObserver.start()}stop(){this.valueListObserver.stop()}get controllerAttribute(){return this.schema.controllerAttribute}parseValueForToken(e){const{element:t,content:r}=e;return this.parseValueForElementAndIdentifier(t,r)}parseValueForElementAndIdentifier(e,t){const r=this.fetchScopesByIdentifierForElement(e);let i=r.get(t);return i||(i=this.delegate.createScopeForElementAndIdentifier(e,t),r.set(t,i)),i}elementMatchedValue(e,t){const r=(this.scopeReferenceCounts.get(t)||0)+1;this.scopeReferenceCounts.set(t,r),r==1&&this.delegate.scopeConnected(t)}elementUnmatchedValue(e,t){const r=this.scopeReferenceCounts.get(t);r&&(this.scopeReferenceCounts.set(t,r-1),r==1&&this.delegate.scopeDisconnected(t))}fetchScopesByIdentifierForElement(e){let t=this.scopesByIdentifierByElement.get(e);return t||(t=new Map,this.scopesByIdentifierByElement.set(e,t)),t}}class Md{constructor(e){this.application=e,this.scopeObserver=new Fd(this.element,this.schema,this),this.scopesByIdentifier=new Kt,this.modulesByIdentifier=new Map}get element(){return this.application.element}get schema(){return this.application.schema}get logger(){return this.application.logger}get controllerAttribute(){return this.schema.controllerAttribute}get modules(){return Array.from(this.modulesByIdentifier.values())}get contexts(){return this.modules.reduce((e,t)=>e.concat(t.contexts),[])}start(){this.scopeObserver.start()}stop(){this.scopeObserver.stop()}loadDefinition(e){this.unloadIdentifier(e.identifier);const t=new Td(this.application,e);this.connectModule(t);const r=e.controllerConstructor.afterLoad;r&&r.call(e.controllerConstructor,e.identifier,this.application)}unloadIdentifier(e){const t=this.modulesByIdentifier.get(e);t&&this.disconnectModule(t)}getContextForElementAndIdentifier(e,t){const r=this.modulesByIdentifier.get(t);if(r)return r.contexts.find(i=>i.element==e)}proposeToConnectScopeForElementAndIdentifier(e,t){const r=this.scopeObserver.parseValueForElementAndIdentifier(e,t);r?this.scopeObserver.elementMatchedValue(r.element,r):console.error(`Couldn't find or create scope for identifier: "${t}" and element:`,e)}handleError(e,t,r){this.application.handleError(e,t,r)}createScopeForElementAndIdentifier(e,t){return new yo(this.schema,e,t,this.logger)}scopeConnected(e){this.scopesByIdentifier.add(e.identifier,e);const t=this.modulesByIdentifier.get(e.identifier);t&&t.connectContextForScope(e)}scopeDisconnected(e){this.scopesByIdentifier.delete(e.identifier,e);const t=this.modulesByIdentifier.get(e.identifier);t&&t.disconnectContextForScope(e)}connectModule(e){this.modulesByIdentifier.set(e.identifier,e),this.scopesByIdentifier.getValuesForKey(e.identifier).forEach(r=>e.connectContextForScope(r))}disconnectModule(e){this.modulesByIdentifier.delete(e.identifier),this.scopesByIdentifier.getValuesForKey(e.identifier).forEach(r=>e.disconnectContextForScope(r))}}const Nd={controllerAttribute:"data-controller",actionAttribute:"data-action",targetAttribute:"data-target",targetAttributeForScope:n=>`data-${n}-target`,outletAttributeForScope:(n,e)=>`data-${n}-${e}-outlet`,keyMappings:Object.assign(Object.assign({enter:"Enter",tab:"Tab",esc:"Escape",space:" ",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",home:"Home",end:"End",page_up:"PageUp",page_down:"PageDown"},hs("abcdefghijklmnopqrstuvwxyz".split("").map(n=>[n,n]))),hs("0123456789".split("").map(n=>[n,n])))};function hs(n){return n.reduce((e,[t,r])=>Object.assign(Object.assign({},e),{[t]:r}),{})}class Ld{constructor(e=document.documentElement,t=Nd){this.logger=console,this.debug=!1,this.logDebugActivity=(r,i,o={})=>{this.debug&&this.logFormattedMessage(r,i,o)},this.element=e,this.schema=t,this.dispatcher=new Ku(this),this.router=new Md(this),this.actionDescriptorFilters=Object.assign({},Wu)}static start(e,t){const r=new this(e,t);return r.start(),r}async start(){await Dd(),this.logDebugActivity("application","starting"),this.dispatcher.start(),this.router.start(),this.logDebugActivity("application","start")}stop(){this.logDebugActivity("application","stopping"),this.dispatcher.stop(),this.router.stop(),this.logDebugActivity("application","stop")}register(e,t){this.load({identifier:e,controllerConstructor:t})}registerActionOption(e,t){this.actionDescriptorFilters[e]=t}load(e,...t){(Array.isArray(e)?e:[e,...t]).forEach(i=>{i.controllerConstructor.shouldLoad&&this.router.loadDefinition(i)})}unload(e,...t){(Array.isArray(e)?e:[e,...t]).forEach(i=>this.router.unloadIdentifier(i))}get controllers(){return this.router.contexts.map(e=>e.controller)}getControllerForElementAndIdentifier(e,t){const r=this.router.getContextForElementAndIdentifier(e,t);return r?r.controller:null}handleError(e,t,r){var i;this.logger.error(`%s

%o

%o`,t,e,r),(i=window.onerror)===null||i===void 0||i.call(window,t,"",0,0,e)}logFormattedMessage(e,t,r={}){r=Object.assign({application:this},r),this.logger.groupCollapsed(`${e} #${t}`),this.logger.log("details:",Object.assign({},r)),this.logger.groupEnd()}}function Dd(){return new Promise(n=>{document.readyState=="loading"?document.addEventListener("DOMContentLoaded",()=>n()):n()})}function _d(n){return rr(n,"classes").reduce((t,r)=>Object.assign(t,Rd(r)),{})}function Rd(n){return{[`${n}Class`]:{get(){const{classes:e}=this;if(e.has(n))return e.get(n);{const t=e.getAttributeName(n);throw new Error(`Missing attribute "${t}"`)}}},[`${n}Classes`]:{get(){return this.classes.getAll(n)}},[`has${nr(n)}Class`]:{get(){return this.classes.has(n)}}}}function Hd(n){return rr(n,"outlets").reduce((t,r)=>Object.assign(t,Vd(r)),{})}function ps(n,e,t){return n.application.getControllerForElementAndIdentifier(e,t)}function fs(n,e,t){let r=ps(n,e,t);if(r||(n.application.router.proposeToConnectScopeForElementAndIdentifier(e,t),r=ps(n,e,t),r))return r}function Vd(n){const e=Ni(n);return{[`${e}Outlet`]:{get(){const t=this.outlets.find(n),r=this.outlets.getSelectorForOutletName(n);if(t){const i=fs(this,t,n);if(i)return i;throw new Error(`The provided outlet element is missing an outlet controller "${n}" instance for host controller "${this.identifier}"`)}throw new Error(`Missing outlet element "${n}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${r}".`)}},[`${e}Outlets`]:{get(){const t=this.outlets.findAll(n);return t.length>0?t.map(r=>{const i=fs(this,r,n);if(i)return i;console.warn(`The provided outlet element is missing an outlet controller "${n}" instance for host controller "${this.identifier}"`,r)}).filter(r=>r):[]}},[`${e}OutletElement`]:{get(){const t=this.outlets.find(n),r=this.outlets.getSelectorForOutletName(n);if(t)return t;throw new Error(`Missing outlet element "${n}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${r}".`)}},[`${e}OutletElements`]:{get(){return this.outlets.findAll(n)}},[`has${nr(e)}Outlet`]:{get(){return this.outlets.has(n)}}}}function jd(n){return rr(n,"targets").reduce((t,r)=>Object.assign(t,qd(r)),{})}function qd(n){return{[`${n}Target`]:{get(){const e=this.targets.find(n);if(e)return e;throw new Error(`Missing target element "${n}" for "${this.identifier}" controller`)}},[`${n}Targets`]:{get(){return this.targets.findAll(n)}},[`has${nr(n)}Target`]:{get(){return this.targets.has(n)}}}}function Ud(n){const e=gd(n,"values"),t={valueDescriptorMap:{get(){return e.reduce((r,i)=>{const o=fl(i,this.identifier),s=this.data.getAttributeNameForKey(o.key);return Object.assign(r,{[s]:o})},{})}}};return e.reduce((r,i)=>Object.assign(r,Kd(i)),t)}function Kd(n,e){const t=fl(n,e),{key:r,name:i,reader:o,writer:s}=t;return{[i]:{get(){const a=this.data.get(r);return a!==null?o(a):t.defaultValue},set(a){a===void 0?this.data.delete(r):this.data.set(r,s(a))}},[`has${nr(i)}`]:{get(){return this.data.has(r)||t.hasCustomDefaultValue}}}}function fl([n,e],t){return Qd({controller:t,token:n,typeDefinition:e})}function Or(n){switch(n){case Array:return"array";case Boolean:return"boolean";case Number:return"number";case Object:return"object";case String:return"string"}}function Qn(n){switch(typeof n){case"boolean":return"boolean";case"number":return"number";case"string":return"string"}if(Array.isArray(n))return"array";if(Object.prototype.toString.call(n)==="[object Object]")return"object"}function Wd(n){const{controller:e,token:t,typeObject:r}=n,i=cs(r.type),o=cs(r.default),s=i&&o,a=i&&!o,l=!i&&o,c=Or(r.type),u=Qn(n.typeObject.default);if(a)return c;if(l)return u;if(c!==u){const d=e?`${e}.${t}`:t;throw new Error(`The specified default value for the Stimulus Value "${d}" must match the defined type "${c}". The provided default value of "${r.default}" is of type "${u}".`)}if(s)return c}function Gd(n){const{controller:e,token:t,typeDefinition:r}=n,o=Wd({controller:e,token:t,typeObject:r}),s=Qn(r),a=Or(r),l=o||s||a;if(l)return l;const c=e?`${e}.${r}`:t;throw new Error(`Unknown value type "${c}" for "${t}" value`)}function Xd(n){const e=Or(n);if(e)return gs[e];const t=Li(n,"default"),r=Li(n,"type"),i=n;if(t)return i.default;if(r){const{type:o}=i,s=Or(o);if(s)return gs[s]}return n}function Qd(n){const{token:e,typeDefinition:t}=n,r=`${al(e)}-value`,i=Gd(n);return{type:i,key:r,name:vo(r),get defaultValue(){return Xd(t)},get hasCustomDefaultValue(){return Qn(t)!==void 0},reader:Yd[i],writer:ms[i]||ms.default}}const gs={get array(){return[]},boolean:!1,number:0,get object(){return{}},string:""},Yd={array(n){const e=JSON.parse(n);if(!Array.isArray(e))throw new TypeError(`expected value of type "array" but instead got value "${n}" of type "${Qn(e)}"`);return e},boolean(n){return!(n=="0"||String(n).toLowerCase()=="false")},number(n){return Number(n.replace(/_/g,""))},object(n){const e=JSON.parse(n);if(e===null||typeof e!="object"||Array.isArray(e))throw new TypeError(`expected value of type "object" but instead got value "${n}" of type "${Qn(e)}"`);return e},string(n){return n}},ms={default:Zd,array:bs,object:bs};function bs(n){return JSON.stringify(n)}function Zd(n){return`${n}`}class Fe{constructor(e){this.context=e}static get shouldLoad(){return!0}static afterLoad(e,t){}get application(){return this.context.application}get scope(){return this.context.scope}get element(){return this.scope.element}get identifier(){return this.scope.identifier}get targets(){return this.scope.targets}get outlets(){return this.scope.outlets}get classes(){return this.scope.classes}get data(){return this.scope.data}initialize(){}connect(){}disconnect(){}dispatch(e,{target:t=this.element,detail:r={},prefix:i=this.identifier,bubbles:o=!0,cancelable:s=!0}={}){const a=i?`${i}:${e}`:e,l=new CustomEvent(a,{detail:r,bubbles:o,cancelable:s});return t.dispatchEvent(l),l}}Fe.blessings=[_d,jd,Ud,Hd];Fe.targets=[];Fe.outlets=[];Fe.values={};const Jd=`
    <div class="side-align" data-controller="home" aria-hidden="true">
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
`,eh=`
    <div class="sideAlign userpage" data-controller="user" aria-hidden="true">
        <div class="userpage-account">
            <div class="userpage-bannerContainer">
                <img alt="User banner"
                    role="presentation"
                    aria-hidden="true"
                    class="skeleton-load-fg"
                    data-global-target="skelimg"
                    data-user-target="userBanner" />
            </div>
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
                    <fluent-text class="skeleton-load-bg text" data-user-target="loading" size="600" weight="semibold" nowrap="true" data-user-target="userDisplayContainer">
                        <span style="color: #FFFFFF" data-user-target="userDisplay">
                            Display Name
                        </span>
                    </fluent-text>
                    <fluent-text class="skeleton-load-bg text" data-user-target="loading" size="400" weight="semibold" nowrap="true">
                        <span style="color: #D6D6D6" data-user-target="userHandle">
                            @username
                        </span>
                    </fluent-text>
                    <p class="userpage-description skeleton-load-bg text" data-user-target="loading userDescription">
                        Description
                    </p>
                    <div class="userpage-badges" data-user-target="userBadges"> </div>
                </div>
            </div>
        </div>
        <div class="track-list" data-user-target="trackList"></div>
    </div>
`,th=`
    <div class="trackpage" data-controller="track" aria-hidden="true">
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
                                    <div data-track-target="artistVerified" hidden class="icon brand" title="Verified"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5ZM7.35355 4.10355C7.54882 3.90829 7.54882 3.59171 7.35355 3.39645C7.15829 3.20118 6.84171 3.20118 6.64645 3.39645L4.5 5.54289L3.35355 4.39645C3.15829 4.20118 2.84171 4.20118 2.64645 4.39645C2.45118 4.59171 2.45118 4.90829 2.64645 5.10355L4.14645 6.60355C4.34171 6.79882 4.65829 6.79882 4.85355 6.60355L7.35355 4.10355Z" fill="currentColor"></path></svg></div>
                                </span>
                            </div>
                        </a>
                    </div>
                    <span data-track-target="trackDescription trackLoading" class="trackpage-description skeleton-load-bg">
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu viverra curae ullamcorper pharetra luctus faucibus natoque ultricies sollicitudin. Leo purus auctor congue dis tellus maecenas; dictum ac. Netus in et efficitur nam curabitur.
                    </span>
                    <fluent-button>Open Dialog</fluent-button>
                    <fluent-dialog id="dialog-default">
                    <fluent-dialog-body>
                        <fluent-button slot="action" appearance="primary">
                        Close Dialog
                        </fluent-button>

                        <p>
                        The dialog component is a window overlaid on either the primary window or
                        another dialog window. Windows under a modal dialog are inert.
                        </p>
                        <p>
                        That is, users cannot interact with content outside an active dialog
                        window.
                        </p>

                        <div slot="title">Default Dialog</div>
                    </fluent-dialog-body>
                    </fluent-dialog>
                    <fluent-button appearance="primary" size="large">
                        <svg slot="start" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.60846 4.61507C7.1087 4.34314 6.5 4.70491 6.5 5.27386V18.7262C6.5 19.2951 7.1087 19.6569 7.60846 19.385L19.97 12.6588C20.4921 12.3747 20.4921 11.6253 19.97 11.3412L7.60846 4.61507ZM5 5.27386C5 3.56701 6.82609 2.4817 8.32538 3.29749L20.687 10.0236C22.2531 10.8758 22.2531 13.1242 20.687 13.9764L8.32538 20.7025C6.82609 21.5183 5 20.433 5 18.7262V5.27386Z" fill="currentColor"/>
                        </svg>
                        Play
                    </fluent-button>
                </div>
            </div>
            <div class="comments-section" hidden>
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
        <div class="more-from-author">
            <h2>More from Author</h2>
            <div
                data-track-target="moreFromArtist"
                class="track-carousel"
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
`,nh=`
    <div class="searchpage" data-controller="search" aria-hidden="true">
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
        `,rh=`
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
                    Clipcoins can be used for uploading tracks, commenting on others' tracks, changing your username, or activating Clippsly Plus membership to unlock additional benefits.
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
        </div>`,ih=`
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
    `,oh=`
<div class="middle-float mt-5">
    <h1>Settings (not working)</h1>
    <div class="col-md-6 offset-md-3">
        <h2 class="text-center">Change Username</h2>
        <form id="username-settings-form">
            <div class="form-group">
                <label for="new_username">New username</label>
                <input type="text" class="form-control" id="new_username" required>
            </div>
            <fluent-button type="submit" id="submitUsername" class="login-btn default">Change (500 Clipcoins)</fluent-button>
        </form>
    </div>

    <div class="col-md-6 offset-md-3">
        <h2 class="text-center">Change Display Name</h2>
        <form id="displayname-settings-form">
            <div class="form-group">
                <label for="new_displayname">New display name</label>
                <input type="text" class="form-control" id="new_displayname" required>
            </div>
            <fluent-button type="submit" id="submitDisplayname" class="login-btn default">Change</fluent-button>
        </form>
    </div>

    <div class="col-md-6 offset-md-3">
        <h2 class="text-center">Change Description</h2>
        <form id="description-settings-form">
            <div class="form-group">
                <label for="new_displayname">New description</label>
                <textarea class="form-control" id="new_description" required></textarea>
            </div>
            <fluent-button type="submit" id="submitDescription" class="login-btn default">Change</fluent-button>
        </form>
    </div>

    <div class="col-md-6 offset-md-3">
        <h2 class="text-center">Change Avatar</h2>
        <form id="avatar-settings-form">
            <div class="form-group">
                <label for="new_avatar">New avatar</label>
                <input type="file" class="form-control" id="new_avatar" accept=".png,.jpg,.jpeg" required>
            </div>
            <fluent-button type="submit" id="submitAvatar" class="login-btn default">Change</fluent-button>
        </form>
    </div>

    <div class="col-md-6 offset-md-3">
        <h2 class="text-center">Change Banner</h2>
        <form id="banner-settings-form">
            <div class="form-group">
                <label for="new_banner">New banner</label>
                <input type="file" class="form-control" id="new_banner" required>
            </div>
            <fluent-button type="submit" id="submitBanner" class="login-btn default">Change</fluent-button>
        </form>
    </div>

    <h2 class="text-center">Connections</h2>
    <fluent-button class="login-btn youtube">
        youtuve
    </fluent-button>
    <fluent-button class="login-btn twitch">
        twitch
    </fluent-button>
    <fluent-button class="login-btn roblox">
        rbx
    </fluent-button>
    <fluent-button class="login-btn soundcloud">
        soundclout
    </fluent-button>
    <fluent-button class="login-btn discord">
        discord
    </fluent-button>
</div>
`,vn=class vn extends Fe{connect(){vn.loadPage(location.pathname+location.search),document.addEventListener("click",this.documentClick),window.addEventListener("popstate",e=>{e.preventDefault(),vn.loadPage(location.pathname+location.search)})}documentClick(e){if(!e.target)return!1;const t=e.target.closest("a");if(!t)return!1;e.preventDefault();const r=t.getAttribute("href")||"";if(r==null)return;t.getAttribute("data-global-target")=="open-external"?window.open(r):vn.loadPage(r)}skelimgTargetConnected(e){const t=e.parentElement;t&&(e.addEventListener("load",()=>{e.classList.add("loaded"),t.classList.remove("skeleton-load-bg")}),e.addEventListener("error",()=>{e.classList.remove("loaded"),t.classList.add("skeleton-load-error"),t.classList.remove("skeleton-load-bg")}))}openExternalTargetConnected(e){const t=e.getAttribute("href")||"";t&&e.addEventListener("click",()=>{window.open(t)})}removeonloadTargetConnected(e){e.remove()}static loadPage(e){var t,r,i,o;if(history.pushState(null,"",e),e==="/")ne.setDocTitle(ne.pageNames.home),Dt.innerHTML=Jd;else if(e.startsWith("/users/")){Dt.innerHTML=eh;const s=e.split("/users/")[1];(t=document.querySelector(".userpage"))==null||t.setAttribute("data-user-id-value",s)}else if(e.startsWith("/track/")){Dt.innerHTML=th;const s=e.split("/track/")[1];(r=document.querySelector(".trackpage"))==null||r.setAttribute("data-track-id-value",s)}else if(e.startsWith("/search")){Dt.innerHTML=nh;const s=e.split("?query=")[1];(i=document.querySelector(".searchpage"))==null||i.setAttribute("data-search-query-value",s)}else if(e.startsWith("/error")){Dt.innerHTML=ih;const s=e.split("?code=")[1];(o=document.querySelector(".error-page"))==null||o.setAttribute("data-error-code-value",s)}else e.startsWith("/upload")||(e.startsWith("/balance")?Dt.innerHTML=rh:e.startsWith("/cliptivity")||e==="/login"||e.startsWith("/login")||(e.startsWith("/settings")?Dt.innerHTML=oh:e==="/register"||e.startsWith("/register")||e.startsWith("/not-approved")))}};fe(vn,"targets",["skelimg","removeonload","openExternal"]);let Bt=vn;const Dt=document.getElementById("app"),sh="https://api.clippsly.com/endpoints/functions/home-page";class gl extends Fe{async connect(){try{const e=await fetch(sh).then(t=>t.json());if(this.latestTarget){this.latestTarget.innerHTML="";let t=0;e.latestTracks.forEach(r=>{t++,t>6?this.latestTarget.append(ne.createTrack(r,!1)):this.latestTarget.append(ne.createTrack(r,!0))})}if(this.recommendedTarget){this.recommendedTarget.innerHTML="";let t=0;e.randomTracks.forEach(r=>{t++,t>6?this.recommendedTarget.append(ne.createTrack(r,!1)):this.recommendedTarget.append(ne.createTrack(r,!0))})}}catch(e){console.error(e)}this.element.ariaHidden="false"}}fe(gl,"targets",["latest","recommended"]);const Dn=ne.getCookie("CLIPSESSIONTOKEN"),ah="https://api.clippsly.com/endpoints/data/current-session";class ml extends Fe{async connect(){if(this.pfpTarget.style.cursor="pointer",this.pfpTarget.title=Dn&&"Account and more"||"Log in and more",!Dn){this.handleInvalidSession();return}const e=await fetch(ah,{method:"GET",headers:{Authorization:`Bearer ${Dn}`}}).then(t=>{if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return t.json()}).catch(()=>{this.handleInvalidSession()});this.pfpImgTarget.src=e.avatar||"https://cdn.clippsly.com/brand_assets/icons/default-artist.png",vs(Dn),setInterval(()=>{vs(Dn)},4*60*1e3)}handleInvalidSession(){this.pfpImgTarget.src="https://cdn.clippsly.com/brand_assets/icons/default-artist.png"}}fe(ml,"targets",["pfp","pfpImg","pfpContainer"]);async function vs(n){const e="https://api.clippsly.com/endpoints/data/pulse";try{const t=await fetch(e,{method:"POST",headers:{Authorization:`Bearer ${n}`}});if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`)}catch(t){console.error("Error pinging the server:",t)}}const lh=ne.getCookie("CLIPSESSIONTOKEN"),ch="https://api.clippsly.com/endpoints/functions/search-results?query=";class _i extends Fe{async connect(){console.log(this.queryValue);const e=await fetch(ch+this.queryValue,{method:"GET",headers:{Authorization:`Bearer ${lh}`}}).then(t=>t.json()).catch(t=>Bt.loadPage("/error?code="+(t.status|404)));e.users||e.tracks,this.usersTarget.innerHTML="",this.tracksTarget.innerHTML="";for(let t=0;t<e.users.length;t++){const r=e.users[t],i=document.createElement("a");i.classList.add("user"),i.href=`/users/${r.authorUsername}`;const o=document.createElement("div");o.classList.add("avatar"),o.classList.add("skeleton-load-bg"),o.tabIndex=-1;const s=document.createElement("img");s.role="presentation",s.alt="",s.src=r.authorAvatar||"https://cdn.clippsly.com/brand_assets/icons/default-artist.png",s.loading="eager",s.fetchPriority="low",s.setAttribute("data-global-target","skelimg"),s.classList.add("skeleton-load-fg"),o.append(s);const a=document.createElement("div");a.classList.add("user-details");const l=document.createElement("span");l.classList.add("displayname"),l.textContent=r.authorDisplay;const c=document.createElement("span");c.classList.add("username"),c.classList.add("subtitle-hyperlink");const u=document.createElement("span");if(u.textContent=r.authorUsername,c.append(u),r.authorVerified){const d=document.createElement("div");d.classList.add("icon"),d.title="Verified",d.innerHTML=ne.verifiedBadgeHTML,c.append(d)}a.append(l,c),i.append(o,a),this.usersTarget.append(i)}for(let t=0;t<e.tracks.length;t++){const r=e.tracks[t];this.tracksTarget.append(ne.createTrack({ID:r.releaseID,Title:r.releaseName,Artist:0,Genre:r.releaseGenre||"Unknown",ArtCover:r.additionalData.releaseCoverArt,Audio:r.additionalData.audioFile,Description:r.additionalData.releaseDescription,commentsOff:r.commentsOff,isModerated:!1,isExplicit:!1,isProtected:!1,isUnderReview:!1,isArtificiallyGenerated:!1,audio_duration:r.additionalData.audioDuration,releaseDate:r.additionalData.premiereDate,releaseAuthor:r.releaseAuthor},!0)),this.element.ariaHidden="false"}}email(){console.log("IMPLEMENT ME!")}}fe(_i,"targets",["users","tracks"]),fe(_i,"values",{query:String});class bl extends Fe{connect(){const e=(location.pathname+location.search).split("?query=")[1];e&&(this.queryTarget.value=e)}search(){location.href="/search?query="+this.query}showAutocomplete(){this.results.showPopover()}hideAutocomplete(){this.results.hidePopover()}async autocomplete(){const e=this.query;if(e.length>0){const t="https://api.clippsly.com/endpoints/functions/search-suggestions?query="+e,r=await fetch(t,{method:"GET"});if(!r.ok)throw new Error(`Response status: ${r.status}`);const i=await r.json();this.showAutocomplete(),this.results.innerHTML="",i.forEach(s=>{const a=document.createElement("a");a.href="/search?query="+s,a.classList.add("menu-item-hyperlink");const l=document.createElement("fluent-menu-item");l.setAttribute("data-action","click->searchbar#searchAutocompleteQuery"),l.textContent=s,a.append(l),this.results.append(a)})}else this.results.innerHTML=""}async searchAutocompleteQuery(e){const t=e.target.textContent;this.queryTarget.value=t||"",await this.autocomplete(),this.hideAutocomplete()}get query(){return this.queryTarget.value}get results(){return this.resultsTarget}}fe(bl,"targets",["query","results"]);const uh={400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found",500:"Internal Server",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout"},dh={400:"The server could not understand the request due to invalid syntax.",401:"The client must authenticate itself to get the requested response.",403:"The client does not have access rights to the content.",404:"The server can not find the requested resource.",500:"The server has encountered a situation it doesn't know how to handle.",502:"The server was acting as a gateway or proxy and received an invalid response from the upstream server.",503:"The server is not ready to handle the request.",504:"The server was acting as a gateway or proxy and did not receive a timely response from the upstream server."};class Ri extends Fe{async connect(){const e=uh[this.codeValue]||"Unknown Error",t=dh[this.codeValue]||"An unknown error occured.";ne.setDocTitle(ne.pageNames.error.concat(" ",this.codeValue.toString()," ",e)),this.nameTarget.textContent=`Error ${this.codeValue}: ${e}`,this.descriptionTarget.textContent=t}navigatePrevPage(){history.back()}}fe(Ri,"targets",["name","description"]),fe(Ri,"values",{code:Number});function m(n,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(o=(i<3?s(o):i>3?s(e,t,o):s(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o}let Cr;const ys="fast-kernel";try{if(document.currentScript)Cr=document.currentScript.getAttribute(ys);else{const n=document.getElementsByTagName("script");Cr=n[n.length-1].getAttribute(ys)}}catch{Cr="isolate"}let Wt;switch(Cr){case"share":Wt=Object.freeze({updateQueue:1,observable:2,contextEvent:3,elementRegistry:4});break;case"share-v2":Wt=Object.freeze({updateQueue:1.2,observable:2.2,contextEvent:3.2,elementRegistry:4.2});break;default:const n=`-${Math.random().toString(36).substring(2,8)}`;Wt=Object.freeze({updateQueue:`1.2${n}`,observable:`2.2${n}`,contextEvent:`3.2${n}`,elementRegistry:`4.2${n}`});break}const Tn=n=>typeof n=="function",bt=n=>typeof n=="string",hh=()=>{};var vi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ph(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}(function(){if(!(typeof globalThis<"u"))if(typeof vi<"u")vi.globalThis=vi;else if(typeof self<"u")self.globalThis=self;else if(typeof window<"u")window.globalThis=window;else{const e=new Function("return this")();e.globalThis=e}})();const vl={configurable:!1,enumerable:!1,writable:!1};globalThis.FAST===void 0&&Reflect.defineProperty(globalThis,"FAST",Object.assign({value:Object.create(null)},vl));const me=globalThis.FAST;if(me.getById===void 0){const n=Object.create(null);Reflect.defineProperty(me,"getById",Object.assign({value(e,t){let r=n[e];return r===void 0&&(r=t?n[e]=t():null),r}},vl))}me.error===void 0&&Object.assign(me,{warn(){},error(n){return new Error(`Error ${n}`)},addMessages(){}});const fh=Object.freeze([]);function wo(){const n=new Map;return Object.freeze({register(e){return n.has(e.type)?!1:(n.set(e.type,e),!0)},getByType(e){return n.get(e)},getForInstance(e){if(e!=null)return n.get(e.constructor)}})}function yl(){const n=new WeakMap;return function(e){let t=n.get(e);if(t===void 0){let r=Reflect.getPrototypeOf(e);for(;t===void 0&&r!==null;)t=n.get(r),r=Reflect.getPrototypeOf(r);t=t===void 0?[]:t.slice(0),n.set(e,t)}return t}}function rn(n){n.prototype.toJSON=hh}const le=Object.freeze({none:0,attribute:1,booleanAttribute:2,property:3,content:4,tokenList:5,event:6}),ws=n=>n,gh=globalThis.trustedTypes?globalThis.trustedTypes.createPolicy("fast-html",{createHTML:ws}):{createHTML:ws};let Er=Object.freeze({createHTML(n){return gh.createHTML(n)},protect(n,e,t,r){return r}});const mh=Er,$n=Object.freeze({get policy(){return Er},setPolicy(n){if(Er!==mh)throw me.error(1201);Er=n},setAttribute(n,e,t){t==null?n.removeAttribute(e):n.setAttribute(e,t)},setBooleanAttribute(n,e,t){t?n.setAttribute(e,""):n.removeAttribute(e)}}),Gt=me.getById(Wt.updateQueue,()=>{const n=[],e=[],t=globalThis.requestAnimationFrame;let r=!0;function i(){if(e.length)throw e.shift()}function o(l){try{l.call()}catch(c){if(r)e.push(c),setTimeout(i,0);else throw n.length=0,c}}function s(){let c=0;for(;c<n.length;)if(o(n[c]),c++,c>1024){for(let u=0,d=n.length-c;u<d;u++)n[u]=n[u+c];n.length-=c,c=0}n.length=0}function a(l){n.push(l),n.length<2&&(r?t(s):s())}return Object.freeze({enqueue:a,next:()=>new Promise(a),process:s,setMode:l=>r=l})});class Hi{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.subject=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){const t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const r=t.indexOf(e);r!==-1&&t.splice(r,1)}}notify(e){const t=this.spillover,r=this.subject;if(t===void 0){const i=this.sub1,o=this.sub2;i!==void 0&&i.handleChange(r,e),o!==void 0&&o.handleChange(r,e)}else for(let i=0,o=t.length;i<o;++i)t[i].handleChange(r,e)}}class wl{constructor(e){this.subscribers={},this.subjectSubscribers=null,this.subject=e}notify(e){var t,r;(t=this.subscribers[e])===null||t===void 0||t.notify(e),(r=this.subjectSubscribers)===null||r===void 0||r.notify(e)}subscribe(e,t){var r,i;let o;t?o=(r=this.subscribers[t])!==null&&r!==void 0?r:this.subscribers[t]=new Hi(this.subject):o=(i=this.subjectSubscribers)!==null&&i!==void 0?i:this.subjectSubscribers=new Hi(this.subject),o.subscribe(e)}unsubscribe(e,t){var r,i;t?(r=this.subscribers[t])===null||r===void 0||r.unsubscribe(e):(i=this.subjectSubscribers)===null||i===void 0||i.unsubscribe(e)}}const Qr=Object.freeze({unknown:void 0,coupled:1}),D=me.getById(Wt.observable,()=>{const n=Gt.enqueue,e=/(:|&&|\|\||if|\?\.)/,t=new WeakMap;let r,i=c=>{throw me.error(1101)};function o(c){var u;let d=(u=c.$fastController)!==null&&u!==void 0?u:t.get(c);return d===void 0&&(Array.isArray(c)?d=i(c):t.set(c,d=new wl(c))),d}const s=yl();class a{constructor(u){this.name=u,this.field=`_${u}`,this.callback=`${u}Changed`}getValue(u){return r!==void 0&&r.watch(u,this.name),u[this.field]}setValue(u,d){const p=this.field,h=u[p];if(h!==d){u[p]=d;const x=u[this.callback];Tn(x)&&x.call(u,h,d),o(u).notify(this.name)}}}class l extends Hi{constructor(u,d,p=!1){super(u,d),this.expression=u,this.isVolatileBinding=p,this.needsRefresh=!0,this.needsQueue=!0,this.isAsync=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}setMode(u){this.isAsync=this.needsQueue=u}bind(u){this.controller=u;const d=this.observe(u.source,u.context);return!u.isBound&&this.requiresUnbind(u)&&u.onUnbind(this),d}requiresUnbind(u){return u.sourceLifetime!==Qr.coupled||this.first!==this.last||this.first.propertySource!==u.source}unbind(u){this.dispose()}observe(u,d){this.needsRefresh&&this.last!==null&&this.dispose();const p=r;r=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let h;try{h=this.expression(u,d)}finally{r=p}return h}disconnect(){this.dispose()}dispose(){if(this.last!==null){let u=this.first;for(;u!==void 0;)u.notifier.unsubscribe(this,u.propertyName),u=u.next;this.last=null,this.needsRefresh=this.needsQueue=this.isAsync}}watch(u,d){const p=this.last,h=o(u),x=p===null?this.first:{};if(x.propertySource=u,x.propertyName=d,x.notifier=h,h.subscribe(this,d),p!==null){if(!this.needsRefresh){let C;r=void 0,C=p.propertySource[p.propertyName],r=this,u===C&&(this.needsRefresh=!0)}p.next=x}this.last=x}handleChange(){this.needsQueue?(this.needsQueue=!1,n(this)):this.isAsync||this.call()}call(){this.last!==null&&(this.needsQueue=this.isAsync,this.notify(this))}*records(){let u=this.first;for(;u!==void 0;)yield u,u=u.next}}return rn(l),Object.freeze({setArrayObserverFactory(c){i=c},getNotifier:o,track(c,u){r&&r.watch(c,u)},trackVolatile(){r&&(r.needsRefresh=!0)},notify(c,u){o(c).notify(u)},defineProperty(c,u){bt(u)&&(u=new a(u)),s(c).push(u),Reflect.defineProperty(c,u.name,{enumerable:!0,get(){return u.getValue(this)},set(d){u.setValue(this,d)}})},getAccessors:s,binding(c,u,d=this.isVolatileBinding(c)){return new l(c,u,d)},isVolatileBinding(c){return e.test(c.toString())}})});function Ee(n,e){D.defineProperty(n,e)}const ks=me.getById(Wt.contextEvent,()=>{let n=null;return{get(){return n},set(e){n=e}}}),Yn=Object.freeze({default:{index:0,length:0,get event(){return Yn.getEvent()},eventDetail(){return this.event.detail},eventTarget(){return this.event.target}},getEvent(){return ks.get()},setEvent(n){ks.set(n)}});class Yr{constructor(e,t,r=!1){this.evaluate=e,this.policy=t,this.isVolatile=r}}class bh extends Yr{createObserver(e){return D.binding(this.evaluate,e,this.isVolatile)}}function ko(n,e,t=D.isVolatileBinding(n)){return new bh(n,e,t)}class kl extends Yr{createObserver(){return this}bind(e){return this.evaluate(e.source,e.context)}}rn(kl);function xl(n,e){return new kl(n,e)}let xs;function $l(n){return n.map(e=>e instanceof $e?$l(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}class $e{constructor(e){this.styles=e,this.targets=new WeakSet,this._strategy=null,this.behaviors=e.map(t=>t instanceof $e?t.behaviors:null).reduce((t,r)=>r===null?t:t===null?r:t.concat(r),null)}get strategy(){return this._strategy===null&&this.withStrategy(xs),this._strategy}addStylesTo(e){this.strategy.addStylesTo(e),this.targets.add(e)}removeStylesFrom(e){this.strategy.removeStylesFrom(e),this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}withStrategy(e){return this._strategy=new e($l(this.styles)),this}static setDefaultStrategy(e){xs=e}static normalize(e){return e===void 0?void 0:Array.isArray(e)?new $e(e):e instanceof $e?e:new $e([e])}}$e.supportsAdoptedStyleSheets=Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype;const yi=wo(),xo=Object.freeze({getForInstance:yi.getForInstance,getByType:yi.getByType,define(n){return yi.register({type:n}),n}});function wi(n,e,t){e.source.style.setProperty(n.targetAspect,t.bind(e))}class Vi{constructor(e,t){this.dataBinding=e,this.targetAspect=t}createCSS(e){return e(this),`var(${this.targetAspect})`}addedCallback(e){var t;const r=e.source;if(!r.$cssBindings){r.$cssBindings=new Map;const o=r.setAttribute;r.setAttribute=(s,a)=>{o.call(r,s,a),s==="style"&&r.$cssBindings.forEach((l,c)=>wi(c,l.controller,l.observer))}}const i=(t=e[this.targetAspect])!==null&&t!==void 0?t:e[this.targetAspect]=this.dataBinding.createObserver(this,this);i.controller=e,e.source.$cssBindings.set(this,{controller:e,observer:i})}connectedCallback(e){wi(this,e,e[this.targetAspect])}removedCallback(e){e.source.$cssBindings&&e.source.$cssBindings.delete(this)}handleChange(e,t){wi(this,t.controller,t)}}xo.define(Vi);const vh=`${Math.random().toString(36).substring(2,8)}`;let yh=0;const $s=()=>`--v${vh}${++yh}`;function Sl(n,e){const t=[];let r="";const i=[],o=s=>{i.push(s)};for(let s=0,a=n.length-1;s<a;++s){r+=n[s];let l=e[s];Tn(l)?l=new Vi(ko(l),$s()).createCSS(o):l instanceof Yr?l=new Vi(l,$s()).createCSS(o):xo.getForInstance(l)!==void 0&&(l=l.createCSS(o)),l instanceof $e||l instanceof CSSStyleSheet?(r.trim()!==""&&(t.push(r),r=""),t.push(l)):r+=l}return r+=n[n.length-1],r.trim()!==""&&t.push(r),{styles:t,behaviors:i}}const N=(n,...e)=>{const{styles:t,behaviors:r}=Sl(n,e),i=new $e(t);return r.length?i.withBehaviors(...r):i};class Cl{constructor(e,t){this.behaviors=t,this.css="";const r=e.reduce((i,o)=>(bt(o)?this.css+=o:i.push(o),i),[]);r.length&&(this.styles=new $e(r))}createCSS(e){return this.behaviors.forEach(e),this.styles&&e(this),this.css}addedCallback(e){e.addStyles(this.styles)}removedCallback(e){e.removeStyles(this.styles)}}xo.define(Cl);N.partial=(n,...e)=>{const{styles:t,behaviors:r}=Sl(n,e);return new Cl(t,r)};const Ss=/fe-b\$\$start\$\$(\d+)\$\$(.+)\$\$fe-b/,Cs=/fe-b\$\$end\$\$(\d+)\$\$(.+)\$\$fe-b/,Es=/fe-repeat\$\$start\$\$(\d+)\$\$fe-repeat/,As=/fe-repeat\$\$end\$\$(\d+)\$\$fe-repeat/,Ts=/^(?:.{0,1000})fe-eb\$\$start\$\$(.+?)\$\$fe-eb/,Is=/fe-eb\$\$end\$\$(.{0,1000})\$\$fe-eb(?:.{0,1000})$/;function Bs(n){return n&&n.nodeType===Node.COMMENT_NODE}const nt=Object.freeze({attributeMarkerName:"data-fe-b",attributeBindingSeparator:" ",contentBindingStartMarker(n,e){return`fe-b$$start$$${n}$$${e}$$fe-b`},contentBindingEndMarker(n,e){return`fe-b$$end$$${n}$$${e}$$fe-b`},repeatStartMarker(n){return`fe-repeat$$start$$${n}$$fe-repeat`},repeatEndMarker(n){return`fe-repeat$$end$$${n}$$fe-repeat`},isContentBindingStartMarker(n){return Ss.test(n)},isContentBindingEndMarker(n){return Cs.test(n)},isRepeatViewStartMarker(n){return Es.test(n)},isRepeatViewEndMarker(n){return As.test(n)},isElementBoundaryStartMarker(n){return Bs(n)&&Ts.test(n.data.trim())},isElementBoundaryEndMarker(n){return Bs(n)&&Is.test(n.data)},parseAttributeBinding(n){const e=n.getAttribute(this.attributeMarkerName);return e===null?e:e.split(this.attributeBindingSeparator).map(t=>parseInt(t))},parseContentBindingStartMarker(n){return Ps(Ss,n)},parseContentBindingEndMarker(n){return Ps(Cs,n)},parseRepeatStartMarker(n){return Os(Es,n)},parseRepeatEndMarker(n){return Os(As,n)},parseElementBoundaryStartMarker(n){return zs(Ts,n.trim())},parseElementBoundaryEndMarker(n){return zs(Is,n)}});function Os(n,e){const t=n.exec(e);return t===null?t:parseInt(t[1])}function zs(n,e){const t=n.exec(e);return t===null?t:t[1]}function Ps(n,e){const t=n.exec(e);return t===null?t:[parseInt(t[1]),t[2]]}const zr=Symbol.for("fe-hydration");function Pr(n){return n[zr]===zr}const $o=`fast-${Math.random().toString(36).substring(2,8)}`,Ar=`${$o}{`,jn=`}${$o}`,wh=jn.length;let kh=0;const So=()=>`${$o}-${++kh}`,El=Object.freeze({interpolation:n=>`${Ar}${n}${jn}`,attribute:n=>`${So()}="${Ar}${n}${jn}"`,comment:n=>`<!--${Ar}${n}${jn}-->`}),Zr=Object.freeze({parse(n,e){const t=n.split(Ar);if(t.length===1)return null;const r=[];for(let i=0,o=t.length;i<o;++i){const s=t[i],a=s.indexOf(jn);let l;if(a===-1)l=s;else{const c=s.substring(0,a);r.push(e[c]),l=s.substring(a+wh)}l!==""&&r.push(l)}return r}}),ki=wo(),ot=Object.freeze({getForInstance:ki.getForInstance,getByType:ki.getByType,define(n,e){return e=e||{},e.type=n,ki.register(e),n},assignAspect(n,e){if(!e){n.aspectType=le.content;return}switch(n.sourceAspect=e,e[0]){case":":n.targetAspect=e.substring(1),n.aspectType=n.targetAspect==="classList"?le.tokenList:le.property;break;case"?":n.targetAspect=e.substring(1),n.aspectType=le.booleanAttribute;break;case"@":n.targetAspect=e.substring(1),n.aspectType=le.event;break;default:n.targetAspect=e,n.aspectType=le.attribute;break}}});class Co{constructor(e){this.options=e}createHTML(e){return El.attribute(e(this))}createBehavior(){return this}}rn(Co);class Al extends Error{constructor(e,t,r){super(e),this.factories=t,this.node=r}}function Eo(n){return n.nodeType===Node.COMMENT_NODE}function Tl(n){return n.nodeType===Node.TEXT_NODE}function Il(n,e){const t=document.createRange();return t.setStart(n,0),t.setEnd(e,Eo(e)||Tl(e)?e.data.length:e.childNodes.length),t}function xh(n){return n instanceof DocumentFragment&&"mode"in n}function $h(n,e,t){const r=Il(n,e),i=r.commonAncestorContainer,o=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT+NodeFilter.SHOW_COMMENT+NodeFilter.SHOW_TEXT,{acceptNode(c){return r.comparePoint(c,0)===0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),s={},a={};let l=o.currentNode=n;for(;l!==null;){switch(l.nodeType){case Node.ELEMENT_NODE:{Sh(l,t,s);break}case Node.COMMENT_NODE:{Ch(l,o,t,s,a);break}}l=o.nextNode()}return r.detach(),{targets:s,boundaries:a}}function Sh(n,e,t){const r=nt.parseAttributeBinding(n);if(r!==null){for(const i of r){if(!e[i])throw new Al(`HydrationView was unable to successfully target factory on ${n.nodeName} inside ${n.getRootNode().host.nodeName}. This likely indicates a template mismatch between SSR rendering and hydration.`,e,n);Fr(e[i],n,t)}n.removeAttribute(nt.attributeMarkerName)}}function Ch(n,e,t,r,i){if(nt.isElementBoundaryStartMarker(n)){Eh(n,e);return}if(nt.isContentBindingStartMarker(n.data)){const o=nt.parseContentBindingStartMarker(n.data);if(o===null)return;const[s,a]=o,l=t[s],c=[];let u=e.nextSibling();n.data="";const d=u;for(;u!==null;){if(Eo(u)){const p=nt.parseContentBindingEndMarker(u.data);if(p&&p[1]===a)break}c.push(u),u=e.nextSibling()}if(u===null){const p=n.getRootNode();throw new Error(`Error hydrating Comment node inside "${xh(p)?p.host.nodeName:p.nodeName}".`)}if(u.data="",c.length===1&&Tl(c[0]))Fr(l,c[0],r);else{u!==d&&u.previousSibling!==null&&(i[l.targetNodeId]={first:d,last:u.previousSibling});const p=u.parentNode.insertBefore(document.createTextNode(""),u);Fr(l,p,r)}}}function Eh(n,e){const t=nt.parseElementBoundaryStartMarker(n.data);let r=e.nextSibling();for(;r!==null;){if(Eo(r)){const i=nt.parseElementBoundaryEndMarker(r.data);if(i&&i===t)break}r=e.nextSibling()}}function Fr(n,e,t){if(n.targetNodeId===void 0)throw new Error("Factory could not be target to the node");t[n.targetNodeId]=e}var Bl;function ji(n,e){const t=n.parentNode;let r=n,i;for(;r!==e;){if(i=r.nextSibling,!i)throw new Error(`Unmatched first/last child inside "${e.getRootNode().host.nodeName}".`);t.removeChild(r),r=i}t.removeChild(e)}class Ol{constructor(){this.index=0,this.length=0}get event(){return Yn.getEvent()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}eventDetail(){return this.event.detail}eventTarget(){return this.event.target}}class Jr extends Ol{constructor(e,t,r){super(),this.fragment=e,this.factories=t,this.targets=r,this.behaviors=null,this.unbindables=[],this.source=null,this.isBound=!1,this.sourceLifetime=Qr.unknown,this.context=this,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const r=e.parentNode;let i=this.firstChild,o;for(;i!==t;)o=i.nextSibling,r.insertBefore(i,e),i=o;r.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let r=this.firstChild,i;for(;r!==t;)i=r.nextSibling,e.appendChild(r),r=i;e.appendChild(t)}dispose(){ji(this.firstChild,this.lastChild),this.unbind()}onUnbind(e){this.unbindables.push(e)}bind(e,t=this){if(this.source===e)return;let r=this.behaviors;if(r===null){this.source=e,this.context=t,this.behaviors=r=new Array(this.factories.length);const i=this.factories;for(let o=0,s=i.length;o<s;++o){const a=i[o].createBehavior();a.bind(this),r[o]=a}}else{this.source!==null&&this.evaluateUnbindables(),this.isBound=!1,this.source=e,this.context=t;for(let i=0,o=r.length;i<o;++i)r[i].bind(this)}this.isBound=!0}unbind(){!this.isBound||this.source===null||(this.evaluateUnbindables(),this.source=null,this.context=this,this.isBound=!1)}evaluateUnbindables(){const e=this.unbindables;for(let t=0,r=e.length;t<r;++t)e[t].unbind(this);e.length=0}static disposeContiguousBatch(e){if(e.length!==0){ji(e[0].firstChild,e[e.length-1].lastChild);for(let t=0,r=e.length;t<r;++t)e[t].unbind()}}}rn(Jr);D.defineProperty(Jr.prototype,"index");D.defineProperty(Jr.prototype,"length");const fn={unhydrated:"unhydrated",hydrating:"hydrating",hydrated:"hydrated"};class Ah extends Error{constructor(e,t,r,i){super(e),this.factory=t,this.fragment=r,this.templateString=i}}class Th extends Ol{constructor(e,t,r,i){super(),this.firstChild=e,this.lastChild=t,this.sourceTemplate=r,this.hostBindingTarget=i,this[Bl]=zr,this.context=this,this.source=null,this.isBound=!1,this.sourceLifetime=Qr.unknown,this.unbindables=[],this.fragment=null,this.behaviors=null,this._hydrationStage=fn.unhydrated,this._bindingViewBoundaries={},this._targets={},this.factories=r.compile().factories}get hydrationStage(){return this._hydrationStage}get targets(){return this._targets}get bindingViewBoundaries(){return this._bindingViewBoundaries}insertBefore(e){if(this.fragment!==null)if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const r=e.parentNode;let i=this.firstChild,o;for(;i!==t;)o=i.nextSibling,r.insertBefore(i,e),i=o;r.insertBefore(t,e)}}appendTo(e){this.fragment!==null&&e.appendChild(this.fragment)}remove(){const e=this.fragment||(this.fragment=document.createDocumentFragment()),t=this.lastChild;let r=this.firstChild,i;for(;r!==t;){if(i=r.nextSibling,!i)throw new Error(`Unmatched first/last child inside "${t.getRootNode().host.nodeName}".`);e.appendChild(r),r=i}e.appendChild(t)}bind(e,t=this){var r,i;if(this.hydrationStage!==fn.hydrated&&(this._hydrationStage=fn.hydrating),this.source===e)return;let o=this.behaviors;if(o===null){this.source=e,this.context=t;try{const{targets:a,boundaries:l}=$h(this.firstChild,this.lastChild,this.factories);this._targets=a,this._bindingViewBoundaries=l}catch(a){if(a instanceof Al){let l=this.sourceTemplate.html;typeof l!="string"&&(l=l.innerHTML),a.templateString=l}throw a}this.behaviors=o=new Array(this.factories.length);const s=this.factories;for(let a=0,l=s.length;a<l;++a){const c=s[a];if(c.targetNodeId==="h"&&this.hostBindingTarget&&Fr(c,this.hostBindingTarget,this._targets),c.targetNodeId in this.targets){const u=c.createBehavior();u.bind(this),o[a]=u}else{let u=this.sourceTemplate.html;throw typeof u!="string"&&(u=u.innerHTML),new Ah(`HydrationView was unable to successfully target bindings inside "${(i=((r=this.firstChild)===null||r===void 0?void 0:r.getRootNode()).host)===null||i===void 0?void 0:i.nodeName}".`,c,Il(this.firstChild,this.lastChild).cloneContents(),u)}}}else{this.source!==null&&this.evaluateUnbindables(),this.isBound=!1,this.source=e,this.context=t;for(let s=0,a=o.length;s<a;++s)o[s].bind(this)}this.isBound=!0,this._hydrationStage=fn.hydrated}unbind(){!this.isBound||this.source===null||(this.evaluateUnbindables(),this.source=null,this.context=this,this.isBound=!1)}dispose(){ji(this.firstChild,this.lastChild),this.unbind()}onUnbind(e){this.unbindables.push(e)}evaluateUnbindables(){const e=this.unbindables;for(let t=0,r=e.length;t<r;++t)e[t].unbind(this);e.length=0}}Bl=zr;rn(Th);function Ih(n){return n.create!==void 0}function Bh(n,e,t,r){if(t==null&&(t=""),Ih(t)){n.textContent="";let i=n.$fastView;if(i===void 0)if(Pr(r)&&Pr(t)&&r.bindingViewBoundaries[this.targetNodeId]!==void 0&&r.hydrationStage!==fn.hydrated){const o=r.bindingViewBoundaries[this.targetNodeId];i=t.hydrate(o.first,o.last)}else i=t.create();else n.$fastTemplate!==t&&(i.isComposed&&(i.remove(),i.unbind()),i=t.create());i.isComposed?i.needsBindOnly&&(i.needsBindOnly=!1,i.bind(r.source,r.context)):(i.isComposed=!0,i.bind(r.source,r.context),i.insertBefore(n),n.$fastView=i,n.$fastTemplate=t)}else{const i=n.$fastView;i!==void 0&&i.isComposed&&(i.isComposed=!1,i.remove(),i.needsBindOnly?i.needsBindOnly=!1:i.unbind()),n.textContent=t}}function Oh(n,e,t){var r;const i=`${this.id}-t`,o=(r=n[i])!==null&&r!==void 0?r:n[i]={v:0,cv:Object.create(null)},s=o.cv;let a=o.v;const l=n[e];if(t!=null&&t.length){const c=t.split(/\s+/);for(let u=0,d=c.length;u<d;++u){const p=c[u];p!==""&&(s[p]=a,l.add(p))}}if(o.v=a+1,a!==0){a-=1;for(const c in s)s[c]===a&&l.remove(c)}}const zh={[le.attribute]:$n.setAttribute,[le.booleanAttribute]:$n.setBooleanAttribute,[le.property]:(n,e,t)=>n[e]=t,[le.content]:Bh,[le.tokenList]:Oh,[le.event]:()=>{}};class yn{constructor(e){this.dataBinding=e,this.updateTarget=null,this.aspectType=le.content}createHTML(e){return El.interpolation(e(this))}createBehavior(){var e;if(this.updateTarget===null){const t=zh[this.aspectType],r=(e=this.dataBinding.policy)!==null&&e!==void 0?e:this.policy;if(!t)throw me.error(1205);this.data=`${this.id}-d`,this.updateTarget=r.protect(this.targetTagName,this.aspectType,this.targetAspect,t)}return this}bind(e){var t;const r=e.targets[this.targetNodeId],i=Pr(e)&&e.hydrationStage&&e.hydrationStage!==fn.hydrated;switch(this.aspectType){case le.event:r[this.data]=e,r.addEventListener(this.targetAspect,this,this.dataBinding.options);break;case le.content:e.onUnbind(this);default:const o=(t=r[this.data])!==null&&t!==void 0?t:r[this.data]=this.dataBinding.createObserver(this,this);if(o.target=r,o.controller=e,i&&(this.aspectType===le.attribute||this.aspectType===le.booleanAttribute)){o.bind(e);break}this.updateTarget(r,this.targetAspect,o.bind(e),e);break}}unbind(e){const r=e.targets[this.targetNodeId].$fastView;r!==void 0&&r.isComposed&&(r.unbind(),r.needsBindOnly=!0)}handleEvent(e){const t=e.currentTarget[this.data];if(t.isBound){Yn.setEvent(e);const r=this.dataBinding.evaluate(t.source,t.context);Yn.setEvent(null),r!==!0&&e.preventDefault()}}handleChange(e,t){const r=t.target,i=t.controller;this.updateTarget(r,this.targetAspect,t.bind(i),i)}}ot.define(yn,{aspected:!0});const zl=(n,e)=>`${n}.${e}`,Fs={},Ye={index:0,node:null};function Ms(n){n.startsWith("fast-")||me.warn(1204,{name:n})}const Ph=new Proxy(document.createElement("div"),{get(n,e){Ms(e);const t=Reflect.get(n,e);return Tn(t)?t.bind(n):t},set(n,e,t){return Ms(e),Reflect.set(n,e,t)}});class Fh{constructor(e,t,r){this.fragment=e,this.directives=t,this.policy=r,this.proto=null,this.nodeIds=new Set,this.descriptors={},this.factories=[]}addFactory(e,t,r,i,o){var s,a;this.nodeIds.has(r)||(this.nodeIds.add(r),this.addTargetDescriptor(t,r,i)),e.id=(s=e.id)!==null&&s!==void 0?s:So(),e.targetNodeId=r,e.targetTagName=o,e.policy=(a=e.policy)!==null&&a!==void 0?a:this.policy,this.factories.push(e)}freeze(){return this.proto=Object.create(null,this.descriptors),this}addTargetDescriptor(e,t,r){const i=this.descriptors;if(t==="r"||t==="h"||i[t])return;if(!i[e]){const s=e.lastIndexOf("."),a=e.substring(0,s),l=parseInt(e.substring(s+1));this.addTargetDescriptor(a,e,l)}let o=Fs[t];if(!o){const s=`_${t}`;Fs[t]=o={get(){var a;return(a=this[s])!==null&&a!==void 0?a:this[s]=this[e].childNodes[r]}}}i[t]=o}createView(e){const t=this.fragment.cloneNode(!0),r=Object.create(this.proto);r.r=t,r.h=e??Ph;for(const i of this.nodeIds)r[i];return new Jr(t,this.factories,r)}}function Pl(n,e,t,r,i,o=!1){const s=t.attributes,a=n.directives;for(let l=0,c=s.length;l<c;++l){const u=s[l],d=u.value,p=Zr.parse(d,a);let h=null;p===null?o&&(h=new yn(xl(()=>d,n.policy)),ot.assignAspect(h,u.name)):h=Ao.aggregate(p,n.policy),h!==null&&(t.removeAttributeNode(u),l--,c--,n.addFactory(h,e,r,i,t.tagName))}}function Mh(n,e,t,r,i){const o=Zr.parse(e.textContent,n.directives);if(o===null)return Ye.node=e.nextSibling,Ye.index=i+1,Ye;let s,a=s=e;for(let l=0,c=o.length;l<c;++l){const u=o[l];l!==0&&(i++,r=zl(t,i),s=a.parentNode.insertBefore(document.createTextNode(""),a.nextSibling)),bt(u)?s.textContent=u:(s.textContent=" ",ot.assignAspect(u),n.addFactory(u,t,r,i,null)),a=s}return Ye.index=i+1,Ye.node=a.nextSibling,Ye}function Fl(n,e,t){let r=0,i=e.firstChild;for(;i;){const o=Nh(n,t,i,r);i=o.node,r=o.index}}function Nh(n,e,t,r){const i=zl(e,r);switch(t.nodeType){case 1:Pl(n,e,t,i,r),Fl(n,t,i);break;case 3:return Mh(n,t,e,i,r);case 8:const o=Zr.parse(t.data,n.directives);o!==null&&n.addFactory(Ao.aggregate(o),e,i,r,null);break}return Ye.index=r+1,Ye.node=t.nextSibling,Ye}function Lh(n,e){return n&&n.nodeType==8&&Zr.parse(n.data,e)!==null}const Ns="TEMPLATE",Ao={compile(n,e,t=$n.policy){let r;if(bt(n)){r=document.createElement(Ns),r.innerHTML=t.createHTML(n);const s=r.content.firstElementChild;s!==null&&s.tagName===Ns&&(r=s)}else r=n;!r.content.firstChild&&!r.content.lastChild&&r.content.appendChild(document.createComment(""));const i=document.adoptNode(r.content),o=new Fh(i,e,t);return Pl(o,"",r,"h",0,!0),(Lh(i.firstChild,e)||i.childNodes.length===1&&Object.keys(e).length>0)&&i.insertBefore(document.createComment(""),i.firstChild),Fl(o,i,"r"),Ye.node=null,o.freeze()},setDefaultStrategy(n){this.compile=n},aggregate(n,e=$n.policy){if(n.length===1)return n[0];let t,r=!1,i;const o=n.length,s=n.map(c=>bt(c)?()=>c:(t=c.sourceAspect||t,r=r||c.dataBinding.isVolatile,i=i||c.dataBinding.policy,c.dataBinding.evaluate)),a=(c,u)=>{let d="";for(let p=0;p<o;++p)d+=s[p](c,u);return d},l=new yn(ko(a,i??e,r));return ot.assignAspect(l,t),l}},Dh=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,_h=Object.create(null);class Yt{constructor(e,t=_h){this.html=e,this.factories=t}createHTML(e){const t=this.factories;for(const r in t)e(t[r]);return this.html}}Yt.empty=new Yt("");ot.define(Yt);function Rh(n,e,t,r=ot.getForInstance(n)){if(r.aspected){const i=Dh.exec(e);i!==null&&ot.assignAspect(n,i[2])}return n.createHTML(t)}class ei{constructor(e,t={},r){this.policy=r,this.result=null,this.html=e,this.factories=t}compile(){return this.result===null&&(this.result=Ao.compile(this.html,this.factories,this.policy)),this.result}create(e){return this.compile().createView(e)}inline(){return new Yt(bt(this.html)?this.html:this.html.innerHTML,this.factories)}withPolicy(e){if(this.result)throw me.error(1208);if(this.policy)throw me.error(1207);return this.policy=e,this}render(e,t,r){const i=this.create(r);return i.bind(e),i.appendTo(t),i}static create(e,t,r){let i="";const o=Object.create(null),s=a=>{var l;const c=(l=a.id)!==null&&l!==void 0?l:a.id=So();return o[c]=a,c};for(let a=0,l=e.length-1;a<l;++a){const c=e[a];let u=t[a],d;if(i+=c,Tn(u))u=new yn(ko(u));else if(u instanceof Yr)u=new yn(u);else if(!(d=ot.getForInstance(u))){const p=u;u=new yn(xl(()=>p))}i+=Rh(u,c,s,d)}return new ei(i+e[e.length-1],o,r)}}rn(ei);const j=(n,...e)=>{if(Array.isArray(n)&&Array.isArray(n.raw))return ei.create(n,e);throw me.error(1206)};j.partial=n=>new Yt(n);class Ml extends Co{bind(e){e.source[this.options]=e.targets[this.targetNodeId]}}ot.define(Ml);const st=n=>new Ml(n),Hh=n=>n.nodeType===1,qi=n=>n?e=>e.nodeType===1&&e.matches(n):Hh;class Vh extends Co{get id(){return this._id}set id(e){this._id=e,this._controllerProperty=`${e}-c`}bind(e){const t=e.targets[this.targetNodeId];t[this._controllerProperty]=e,this.updateTarget(e.source,this.computeNodes(t)),this.observe(t),e.onUnbind(this)}unbind(e){const t=e.targets[this.targetNodeId];this.updateTarget(e.source,fh),this.disconnect(t),t[this._controllerProperty]=null}getSource(e){return e[this._controllerProperty].source}updateTarget(e,t){e[this.options.property]=t}computeNodes(e){let t=this.getNodes(e);return"filter"in this.options&&(t=t.filter(this.options.filter)),t}}const Ls="slotchange";class Nl extends Vh{observe(e){e.addEventListener(Ls,this)}disconnect(e){e.removeEventListener(Ls,this)}getNodes(e){return e.assignedNodes(this.options)}handleEvent(e){const t=e.currentTarget;this.updateTarget(this.getSource(t),this.computeNodes(t))}}ot.define(Nl);function at(n){return bt(n)&&(n={property:n}),new Nl(n)}const Ds="boolean",_s="reflect",Mr=Object.freeze({locate:yl()}),jh={toView(n){return n?"true":"false"},fromView(n){return!(n==null||n==="false"||n===!1||n===0)}};function Rs(n){if(n==null)return null;const e=n*1;return isNaN(e)?null:e}const Pt={toView(n){const e=Rs(n);return e&&e.toString()},fromView:Rs};class Nr{constructor(e,t,r=t.toLowerCase(),i=_s,o){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=r,this.mode=i,this.converter=o,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,i===Ds&&o===void 0&&(this.converter=jh)}setValue(e,t){const r=e[this.fieldName],i=this.converter;i!==void 0&&(t=i.fromView(t)),r!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](r,t),e.$fastController.notify(this.name))}getValue(e){return D.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,r=this.guards;r.has(e)||t==="fromView"||Gt.enqueue(()=>{r.add(e);const i=e[this.fieldName];switch(t){case _s:const o=this.converter;$n.setAttribute(e,this.attribute,o!==void 0?o.toView(i):i);break;case Ds:$n.setBooleanAttribute(e,this.attribute,i);break}r.delete(e)})}static collect(e,...t){const r=[];t.push(Mr.locate(e));for(let i=0,o=t.length;i<o;++i){const s=t[i];if(s!==void 0)for(let a=0,l=s.length;a<l;++a){const c=s[a];bt(c)?r.push(new Nr(e,c)):r.push(new Nr(e,c.property,c.attribute,c.mode,c.converter))}}return r}}function y(n,e){let t;function r(i,o){arguments.length>1&&(t.property=o),Mr.locate(i.constructor).push(t)}if(arguments.length>1){t={},r(n,e);return}return t=n===void 0?{}:n,r}const Hs={mode:"open"},Vs={},js=new Set,Lr=me.getById(Wt.elementRegistry,()=>wo());class Ke{constructor(e,t=e.definition){var r;this.platformDefined=!1,bt(t)&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template,this.registry=(r=t.registry)!==null&&r!==void 0?r:customElements;const i=e.prototype,o=Nr.collect(e,t.attributes),s=new Array(o.length),a={},l={};for(let c=0,u=o.length;c<u;++c){const d=o[c];s[c]=d.attribute,a[d.name]=d,l[d.attribute]=d,D.defineProperty(i,d)}Reflect.defineProperty(e,"observedAttributes",{value:s,enumerable:!0}),this.attributes=o,this.propertyLookup=a,this.attributeLookup=l,this.shadowOptions=t.shadowOptions===void 0?Hs:t.shadowOptions===null?void 0:Object.assign(Object.assign({},Hs),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?Vs:Object.assign(Object.assign({},Vs),t.elementOptions),this.styles=$e.normalize(t.styles),Lr.register(this)}get isDefined(){return this.platformDefined}define(e=this.registry){const t=this.type;return e.get(this.name)||(this.platformDefined=!0,e.define(this.name,t,this.elementOptions)),this}static compose(e,t){return js.has(e)||Lr.getByType(e)?new Ke(class extends e{},t):new Ke(e,t)}static registerBaseType(e){js.add(e)}}Ke.getByType=Lr.getByType;Ke.getForInstance=Lr.getForInstance;class qh extends MutationObserver{constructor(e){function t(r){this.callback.call(null,r.filter(i=>this.observedNodes.has(i.target)))}super(t),this.callback=e,this.observedNodes=new Set}observe(e,t){this.observedNodes.add(e),super.observe(e,t)}unobserve(e){this.observedNodes.delete(e),this.observedNodes.size<1&&this.disconnect()}}const Uh={bubbles:!0,composed:!0,cancelable:!0},Tr="isConnected",Ll=new WeakMap;function qn(n){var e,t;return(t=(e=n.shadowRoot)!==null&&e!==void 0?e:Ll.get(n))!==null&&t!==void 0?t:null}let qs;class Sn extends wl{constructor(e,t){super(e),this.boundObservables=null,this.needsInitialization=!0,this.hasExistingShadowRoot=!1,this._template=null,this.stage=3,this.guardBehaviorConnection=!1,this.behaviors=null,this.behaviorsConnected=!1,this._mainStyles=null,this.$fastController=this,this.view=null,this.source=e,this.definition=t;const r=t.shadowOptions;if(r!==void 0){let o=e.shadowRoot;o?this.hasExistingShadowRoot=!0:(o=e.attachShadow(r),r.mode==="closed"&&Ll.set(e,o))}const i=D.getAccessors(e);if(i.length>0){const o=this.boundObservables=Object.create(null);for(let s=0,a=i.length;s<a;++s){const l=i[s].name,c=e[l];c!==void 0&&(delete e[l],o[l]=c)}}}get isConnected(){return D.track(this,Tr),this.stage===1}get context(){var e,t;return(t=(e=this.view)===null||e===void 0?void 0:e.context)!==null&&t!==void 0?t:Yn.default}get isBound(){var e,t;return(t=(e=this.view)===null||e===void 0?void 0:e.isBound)!==null&&t!==void 0?t:!1}get sourceLifetime(){var e;return(e=this.view)===null||e===void 0?void 0:e.sourceLifetime}get template(){var e;if(this._template===null){const t=this.definition;this.source.resolveTemplate?this._template=this.source.resolveTemplate():t.template&&(this._template=(e=t.template)!==null&&e!==void 0?e:null)}return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get mainStyles(){var e;if(this._mainStyles===null){const t=this.definition;this.source.resolveStyles?this._mainStyles=this.source.resolveStyles():t.styles&&(this._mainStyles=(e=t.styles)!==null&&e!==void 0?e:null)}return this._mainStyles}set mainStyles(e){this._mainStyles!==e&&(this._mainStyles!==null&&this.removeStyles(this._mainStyles),this._mainStyles=e,this.needsInitialization||this.addStyles(e))}onUnbind(e){var t;(t=this.view)===null||t===void 0||t.onUnbind(e)}addBehavior(e){var t,r;const i=(t=this.behaviors)!==null&&t!==void 0?t:this.behaviors=new Map,o=(r=i.get(e))!==null&&r!==void 0?r:0;o===0?(i.set(e,1),e.addedCallback&&e.addedCallback(this),e.connectedCallback&&!this.guardBehaviorConnection&&(this.stage===1||this.stage===0)&&e.connectedCallback(this)):i.set(e,o+1)}removeBehavior(e,t=!1){const r=this.behaviors;if(r===null)return;const i=r.get(e);i!==void 0&&(i===1||t?(r.delete(e),e.disconnectedCallback&&this.stage!==3&&e.disconnectedCallback(this),e.removedCallback&&e.removedCallback(this)):r.set(e,i-1))}addStyles(e){var t;if(!e)return;const r=this.source;if(e instanceof HTMLElement)((t=qn(r))!==null&&t!==void 0?t:this.source).append(e);else if(!e.isAttachedTo(r)){const i=e.behaviors;if(e.addStylesTo(r),i!==null)for(let o=0,s=i.length;o<s;++o)this.addBehavior(i[o])}}removeStyles(e){var t;if(!e)return;const r=this.source;if(e instanceof HTMLElement)((t=qn(r))!==null&&t!==void 0?t:r).removeChild(e);else if(e.isAttachedTo(r)){const i=e.behaviors;if(e.removeStylesFrom(r),i!==null)for(let o=0,s=i.length;o<s;++o)this.removeBehavior(i[o])}}connect(){this.stage===3&&(this.stage=0,this.bindObservables(),this.connectBehaviors(),this.needsInitialization?(this.renderTemplate(this.template),this.addStyles(this.mainStyles),this.needsInitialization=!1):this.view!==null&&this.view.bind(this.source),this.stage=1,D.notify(this,Tr))}bindObservables(){if(this.boundObservables!==null){const e=this.source,t=this.boundObservables,r=Object.keys(t);for(let i=0,o=r.length;i<o;++i){const s=r[i];e[s]=t[s]}this.boundObservables=null}}connectBehaviors(){if(this.behaviorsConnected===!1){const e=this.behaviors;if(e!==null){this.guardBehaviorConnection=!0;for(const t of e.keys())t.connectedCallback&&t.connectedCallback(this);this.guardBehaviorConnection=!1}this.behaviorsConnected=!0}}disconnectBehaviors(){if(this.behaviorsConnected===!0){const e=this.behaviors;if(e!==null)for(const t of e.keys())t.disconnectedCallback&&t.disconnectedCallback(this);this.behaviorsConnected=!1}}disconnect(){this.stage===1&&(this.stage=2,D.notify(this,Tr),this.view!==null&&this.view.unbind(),this.disconnectBehaviors(),this.stage=3)}onAttributeChangedCallback(e,t,r){const i=this.definition.attributeLookup[e];i!==void 0&&i.onAttributeChangedCallback(this.source,r)}emit(e,t,r){return this.stage===1?this.source.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Uh),r))):!1}renderTemplate(e){var t;const r=this.source,i=(t=qn(r))!==null&&t!==void 0?t:r;if(this.view!==null)this.view.dispose(),this.view=null;else if(!this.needsInitialization||this.hasExistingShadowRoot){this.hasExistingShadowRoot=!1;for(let o=i.firstChild;o!==null;o=i.firstChild)i.removeChild(o)}e&&(this.view=e.render(r,i,r),this.view.sourceLifetime=Qr.coupled)}static forCustomElement(e){const t=e.$fastController;if(t!==void 0)return t;const r=Ke.getForInstance(e);if(r===void 0)throw me.error(1401);return e.$fastController=new qs(e,r)}static setStrategy(e){qs=e}}rn(Sn);Sn.setStrategy(Sn);function Dr(n){var e;return"adoptedStyleSheets"in n?n:(e=qn(n))!==null&&e!==void 0?e:n.getRootNode()}class ti{constructor(e){const t=ti.styleSheetCache;this.sheets=e.map(r=>{if(r instanceof CSSStyleSheet)return r;let i=t.get(r);return i===void 0&&(i=new CSSStyleSheet,i.replaceSync(r),t.set(r,i)),i})}addStylesTo(e){Dl(Dr(e),this.sheets)}removeStylesFrom(e){_l(Dr(e),this.sheets)}}ti.styleSheetCache=new Map;let Kh=0;const Wh=()=>`fast-${++Kh}`;function Us(n){return n===document?document.body:n}class Gh{constructor(e){this.styles=e,this.styleClass=Wh()}addStylesTo(e){e=Us(Dr(e));const t=this.styles,r=this.styleClass;for(let i=0;i<t.length;i++){const o=document.createElement("style");o.innerHTML=t[i],o.className=r,e.append(o)}}removeStylesFrom(e){e=Us(Dr(e));const t=e.querySelectorAll(`.${this.styleClass}`);for(let r=0,i=t.length;r<i;++r)e.removeChild(t[r])}}let Dl=(n,e)=>{n.adoptedStyleSheets=[...n.adoptedStyleSheets,...e]},_l=(n,e)=>{n.adoptedStyleSheets=n.adoptedStyleSheets.filter(t=>e.indexOf(t)===-1)};if($e.supportsAdoptedStyleSheets){try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Dl=(n,e)=>{n.adoptedStyleSheets.push(...e)},_l=(n,e)=>{for(const t of e){const r=n.adoptedStyleSheets.indexOf(t);r!==-1&&n.adoptedStyleSheets.splice(r,1)}}}catch{}$e.setDefaultStrategy(ti)}else $e.setDefaultStrategy(Gh);const Ks="defer-hydration",Ws="needs-hydration";class Ut extends Sn{static hydrationObserverHandler(e){for(const t of e)Ut.hydrationObserver.unobserve(t.target),t.target.$fastController.connect()}connect(){var e,t;if(this.needsHydration===void 0&&(this.needsHydration=this.source.getAttribute(Ws)!==null),this.source.hasAttribute(Ks)){Ut.hydrationObserver.observe(this.source,{attributeFilter:[Ks]});return}if(!this.needsHydration){super.connect();return}if(this.stage!==3)return;this.stage=0,this.bindObservables(),this.connectBehaviors();const r=this.source,i=(e=qn(r))!==null&&e!==void 0?e:r;if(this.template)if(Pr(this.template)){let o=i.firstChild,s=i.lastChild;r.shadowRoot===null&&(nt.isElementBoundaryStartMarker(o)&&(o.data="",o=o.nextSibling),nt.isElementBoundaryEndMarker(s)&&(s.data="",s=s.previousSibling)),this.view=this.template.hydrate(o,s,r),(t=this.view)===null||t===void 0||t.bind(this.source)}else this.renderTemplate(this.template);this.addStyles(this.mainStyles),this.stage=1,this.source.removeAttribute(Ws),this.needsInitialization=this.needsHydration=!1,D.notify(this,Tr)}disconnect(){super.disconnect(),Ut.hydrationObserver.unobserve(this.source)}static install(){Sn.setStrategy(Ut)}}Ut.hydrationObserver=new qh(Ut.hydrationObserverHandler);function Rl(n){const e=class extends n{constructor(){super(),Sn.forCustomElement(this)}$emit(t,r,i){return this.$fastController.emit(t,r,i)}connectedCallback(){this.$fastController.connect()}disconnectedCallback(){this.$fastController.disconnect()}attributeChangedCallback(t,r,i){this.$fastController.onAttributeChangedCallback(t,r,i)}};return Ke.registerBaseType(e),e}function Xh(n,e){return Tn(n)?Ke.compose(n,e):Ke.compose(this,n)}function Qh(n,e){return Tn(n)?Ke.compose(n,e).define().type:Ke.compose(this,n).define().type}function Yh(n){return Rl(n)}const he=Object.assign(Rl(HTMLElement),{from:Yh,define:Qh,compose:Xh}),Zh={horizontal:"horizontal",vertical:"vertical"};function Gs(...n){return n.every(e=>e instanceof HTMLElement)}const Hl="ArrowDown",Vl="ArrowLeft",jl="ArrowRight",ql="ArrowUp",Ul="End",ni="Enter",Jh="Escape",Kl="Home",To=" ",ep="Tab";var _r;(function(n){n.ltr="ltr",n.rtl="rtl"})(_r||(_r={}));function tp(n,e,t){return t<n?e:t>e?n:t}let np=0;function Wl(n=""){return`${n}${np++}`}const rp=n=>{var e;return((e=n.closest("[dir]"))===null||e===void 0?void 0:e.dir)==="rtl"?_r.rtl:_r.ltr};function Zt(n){return n?typeof n=="string"?new Yt(n):"inline"in n?n.inline():n:Yt.empty}const Ui=n=>{var e;return n.nodeType!==Node.TEXT_NODE||!!(!((e=n.nodeValue)===null||e===void 0)&&e.trim().length)},ip=":host([hidden]){display:none}";function ye(n){return`${ip}:host{display:${n}}`}class op{constructor(e){this.listenerCache=new WeakMap,this.query=e}connectedCallback(e){const{query:t}=this;let r=this.listenerCache.get(e);r||(r=this.constructListener(e),this.listenerCache.set(e,r)),r.bind(t)(),t.addEventListener("change",r)}disconnectedCallback(e){const t=this.listenerCache.get(e);t&&this.query.removeEventListener("change",t)}}class ir extends op{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new ir(e,t)}constructListener(e){let t=!1;const r=this.styles;return function(){const{matches:o}=this;o&&!t?(e.addStyles(r),t=o):!o&&t&&(e.removeStyles(r),t=o)}}removedCallback(e){e.removeStyles(this.styles)}}const Ft=ir.with(window.matchMedia("(forced-colors)"));ir.with(window.matchMedia("(prefers-color-scheme: dark)"));ir.with(window.matchMedia("(prefers-color-scheme: light)"));class on{}function In(n){return j` <slot name="end" ${st("end")}>${Zt(n.end)}</slot> `.inline()}function sn(n){return j` <slot name="start" ${st("start")}>${Zt(n.start)}</slot> `.inline()}function an(n,...e){const t=Mr.locate(n);e.forEach(r=>{Object.getOwnPropertyNames(r.prototype).forEach(o=>{o!=="constructor"&&Object.defineProperty(n.prototype,o,Object.getOwnPropertyDescriptor(r.prototype,o))}),Mr.locate(r).forEach(o=>t.push(o))})}const Gl=CSS.supports("selector(:state(g))"),Xs=new Map;function b(n){var e;return(e=Xs.get(n))!==null&&e!==void 0?e:Xs.set(n,Gl?`:state(${n})`:`[state--${n}]`).get(n)}function Z(n,e,t){if(e){if(!Gl){n.shadowRoot.host.toggleAttribute(`state--${e}`,t);return}if(t??!n.states.has(e)){n.states.add(e);return}n.states.delete(e)}}const xi=new WeakMap;function Io(n,e){if(!n||!e)return!1;if(xi.has(n))return xi.get(n).has(e);const t=new Set(Object.values(n));return xi.set(n,t),t.has(e)}function K(n,e="",t="",r,i=""){Z(n,`${i}${e}`,!1),(!r||Io(r,t))&&Z(n,`${i}${t}`,!0)}const sp={small:"small",medium:"medium",large:"large",extraLarge:"extra-large"},ap={start:"start",end:"end"};class mt extends he{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.headinglevel=2,this.expanded=!1,this.disabled=!1,this.id=Wl("accordion-")}expandedChanged(e,t){Z(this.elementInternals,"expanded",t)}disabledChanged(e,t){Z(this.elementInternals,"disabled",t)}}m([y({attribute:"heading-level",mode:"fromView",converter:Pt})],mt.prototype,"headinglevel",void 0);m([y({mode:"boolean"})],mt.prototype,"expanded",void 0);m([y({mode:"boolean"})],mt.prototype,"disabled",void 0);m([y],mt.prototype,"id",void 0);class or extends mt{constructor(){super(...arguments),this.block=!1}sizeChanged(e,t){K(this.elementInternals,e,t,sp)}markerPositionChanged(e,t){K(this.elementInternals,e,t,ap,"align-")}blockChanged(e,t){Z(this.elementInternals,"block",t)}}m([y],or.prototype,"size",void 0);m([y({attribute:"marker-position"})],or.prototype,"markerPosition",void 0);m([y({mode:"boolean"})],or.prototype,"block",void 0);an(or,on);const _t=b("align-end");b("align-start");const lp=b("anchor"),Qs=b("auto-resize");b("bad-input");const cp=b("beige"),Rr=b("block"),up=b("blue"),dp=b("bold");b("bordered");const hp=b("brand"),pp=b("brass"),fp=b("brown"),gp=b("center"),Ys=b("checked"),Zs=b("circular"),mp=b("cornflower"),bp=b("cranberry");b("custom-error");const ri=b("danger"),vp=b("dark-green"),yp=b("dark-red"),Be=b("disabled"),Js=b("display-shadow");b("dot");const wp=b("end");b("error");const Rt=b("expanded"),Hr=b("extra-large"),Vr=b("extra-small"),gn=b("filled-darker"),mn=b("filled-lighter");b("fit-center");b("fit-contain");b("fit-cover");b("fit-none");b("focus-visible");const kp=b("forest"),gt=b("ghost"),xp=b("gold"),$p=b("grape");b("has-message");const Sp=b("huge"),_n=b("icon"),ii=b("important");b("indeterminate");const oi=b("informative");b("inline");b("inset");const ea=b("inverted"),Cp=b("italic"),Ep=b("justify"),ce=b("large"),Ap=b("lavender"),Tp=b("light-teal"),Ip=b("lilac"),Bp=b("magenta"),Op=b("marigold"),zp=b("medium"),Pp=b("mink"),Fp=b("monospace");b("multiline");const Mp=b("navy");b("neutral");const ta=b("nowrap"),Np=b("numeric"),xe=b("outline");b("pattern-mismatch");const Lp=b("peach"),Dp=b("pink"),_p=b("platinum"),Rp=b("plum");b("pressed");const At=b("primary"),Hp=b("pumpkin"),Vp=b("purple");b("range-overflow");b("range-underflow");const jp=b("red"),qp=b("resize-both"),Up=b("resize-horizontal"),Kp=b("resize-vertical"),fr=b("rounded"),Wp=b("royal-blue"),Gp=b("seafoam"),Xp=b("semibold"),si=b("severe");b("shadow");const Qp=b("size-1000"),Yp=b("size-100"),Zp=b("size-200"),Jp=b("size-400"),ef=b("size-500"),tf=b("size-600"),nf=b("size-700"),rf=b("size-800"),of=b("size-900"),ue=b("small"),Ki=b("square"),sf=b("steel");b("step-mismatch");const na=b("strikethrough");b("strong");const gr=b("submenu"),Oe=b("subtle"),ai=b("success"),af=b("teal"),$t=b("tint"),jr=b("tiny");b("too-long");b("too-short");const jt=b("transparent"),ra=b("truncate");b("type-mismatch");const qt=b("underline"),lf=b("user-invalid");b("valid");b("value-missing");const we=b("vertical"),li=b("warning"),Se="var(--colorNeutralForeground1)",Xl="var(--colorNeutralForeground1Hover)",cf="var(--colorNeutralForeground1Pressed)",Zn="var(--colorNeutralForeground2)",Ql="var(--colorNeutralForeground2Hover)",Yl="var(--colorNeutralForeground2Pressed)",ia="var(--colorNeutralForeground2BrandHover)",oa="var(--colorNeutralForeground2BrandPressed)",rt="var(--colorNeutralForeground3)",Zl="var(--colorNeutralForeground4)",ve="var(--colorNeutralForegroundDisabled)",uf="var(--colorCompoundBrandForeground1Hover)",df="var(--colorCompoundBrandForeground1Pressed)",Xt="var(--colorNeutralForegroundOnBrand)",Bo="var(--colorNeutralForegroundInverted)",Jl="var(--colorNeutralForegroundStaticInverted)",ec="var(--colorBrandForeground1)",hf="var(--colorBrandForeground2)",pf="var(--colorNeutralForeground1Static)",ge="var(--colorNeutralBackground1)",tc="var(--colorNeutralBackground1Hover)",ff="var(--colorNeutralBackground1Pressed)",gf="var(--colorNeutralBackground1Selected)",Wi="var(--colorNeutralBackground3)",mf="var(--colorNeutralBackground4)",bf="var(--colorNeutralBackground5)",vf="var(--colorNeutralBackground6)",nc="var(--colorNeutralBackgroundInverted)",yf="var(--colorSubtleBackground)",rc="var(--colorSubtleBackgroundHover)",Gi="var(--colorSubtleBackgroundPressed)",it="var(--colorTransparentBackground)",sa="var(--colorTransparentBackgroundHover)",aa="var(--colorTransparentBackgroundPressed)",ic="var(--colorNeutralBackgroundDisabled)",wf="var(--colorBackgroundOverlay)",oc="var(--colorBrandBackground)",kf="var(--colorBrandBackgroundHover)",xf="var(--colorBrandBackgroundPressed)",la="var(--colorBrandBackgroundStatic)",$f="var(--colorBrandBackground2)",qr="var(--colorNeutralStrokeAccessible)",Xi="var(--colorNeutralStrokeAccessibleHover)",Qi="var(--colorNeutralStrokeAccessiblePressed)",Jn="var(--colorNeutralStroke1)",ci="var(--colorNeutralStroke1Hover)",Oo="var(--colorNeutralStroke1Pressed)",Yi="var(--colorNeutralStroke2)",Sf="var(--colorNeutralStrokeOnBrand2)",Cf="var(--colorBrandStroke1)",sc="var(--colorBrandStroke2)",zo="var(--colorCompoundBrandStroke)",Ef="var(--colorCompoundBrandStrokePressed)",Ur="var(--colorNeutralStrokeDisabled)",Jt="var(--colorTransparentStroke)",ca="var(--colorTransparentStrokeInteractive)",ac="var(--colorStrokeFocus1)",er="var(--colorStrokeFocus2)",Af="var(--colorPaletteRedBackground1)",Tf="var(--colorPaletteRedBackground2)",If="var(--colorPaletteRedBackground3)",Bf="var(--colorPaletteRedBorder1)",Zi="var(--colorPaletteRedBorder2)",Of="var(--colorPaletteRedForeground1)",zf="var(--colorPaletteRedForeground2)",lc="var(--colorPaletteRedForeground3)",Pf="var(--colorPaletteGreenBackground1)",Ff="var(--colorPaletteGreenBackground3)",Mf="var(--colorPaletteGreenBorder2)",Nf="var(--colorPaletteGreenForeground1)",Lf="var(--colorPaletteGreenForeground2)",Df="var(--colorPaletteGreenForeground3)",_f="var(--colorPaletteDarkOrangeBackground1)",Rf="var(--colorPaletteDarkOrangeBackground3)",Hf="var(--colorPaletteDarkOrangeBorder1)",Vf="var(--colorPaletteDarkOrangeForeground1)",cc="var(--colorPaletteDarkOrangeForeground3)",jf="var(--colorPaletteYellowBackground1)",qf="var(--colorPaletteYellowBackground3)",Uf="var(--colorPaletteYellowBorder1)",Po="var(--colorPaletteYellowForeground2)",Kf="var(--colorPaletteMarigoldBackground2)",Wf="var(--colorPaletteMarigoldForeground2)",Gf="var(--colorPaletteAnchorBackground2)",Xf="var(--colorPaletteAnchorForeground2)",Qf="var(--colorPaletteBeigeBackground2)",Yf="var(--colorPaletteBeigeForeground2)",Zf="var(--colorPaletteBlueBackground2)",Jf="var(--colorPaletteBlueForeground2)",eg="var(--colorPaletteBrassBackground2)",tg="var(--colorPaletteBrassForeground2)",ng="var(--colorPaletteBrownBackground2)",rg="var(--colorPaletteBrownForeground2)",ig="var(--colorPaletteCornflowerBackground2)",og="var(--colorPaletteCornflowerForeground2)",sg="var(--colorPaletteCranberryBackground2)",ag="var(--colorPaletteCranberryForeground2)",lg="var(--colorPaletteDarkGreenBackground2)",cg="var(--colorPaletteDarkGreenForeground2)",ug="var(--colorPaletteDarkRedBackground2)",dg="var(--colorPaletteDarkRedForeground2)",hg="var(--colorPaletteForestBackground2)",pg="var(--colorPaletteForestForeground2)",fg="var(--colorPaletteGoldBackground2)",gg="var(--colorPaletteGoldForeground2)",mg="var(--colorPaletteGrapeBackground2)",bg="var(--colorPaletteGrapeForeground2)",vg="var(--colorPaletteLavenderBackground2)",yg="var(--colorPaletteLavenderForeground2)",wg="var(--colorPaletteLightTealBackground2)",kg="var(--colorPaletteLightTealForeground2)",xg="var(--colorPaletteLilacBackground2)",$g="var(--colorPaletteLilacForeground2)",Sg="var(--colorPaletteMagentaBackground2)",Cg="var(--colorPaletteMagentaForeground2)",Eg="var(--colorPaletteMinkBackground2)",Ag="var(--colorPaletteMinkForeground2)",Tg="var(--colorPaletteNavyBackground2)",Ig="var(--colorPaletteNavyForeground2)",Bg="var(--colorPalettePeachBackground2)",Og="var(--colorPalettePeachForeground2)",zg="var(--colorPalettePinkBackground2)",Pg="var(--colorPalettePinkForeground2)",Fg="var(--colorPalettePlatinumBackground2)",Mg="var(--colorPalettePlatinumForeground2)",Ng="var(--colorPalettePlumBackground2)",Lg="var(--colorPalettePlumForeground2)",Dg="var(--colorPalettePumpkinBackground2)",_g="var(--colorPalettePumpkinForeground2)",Rg="var(--colorPalettePurpleBackground2)",Hg="var(--colorPalettePurpleForeground2)",Vg="var(--colorPaletteRoyalBlueBackground2)",jg="var(--colorPaletteRoyalBlueForeground2)",qg="var(--colorPaletteSeafoamBackground2)",Ug="var(--colorPaletteSeafoamForeground2)",Kg="var(--colorPaletteSteelBackground2)",Wg="var(--colorPaletteSteelForeground2)",Gg="var(--colorPaletteTealBackground2)",Xg="var(--colorPaletteTealForeground2)",uc="var(--borderRadiusNone)",Cn="var(--borderRadiusSmall)",de="var(--borderRadiusMedium)",dc="var(--borderRadiusLarge)",hc="var(--borderRadiusXLarge)",en="var(--borderRadiusCircular)",Pe="var(--fontFamilyBase)",Qg="var(--fontFamilyMonospace)",Yg="var(--fontFamilyNumeric)",Fo="var(--fontSizeBase100)",lt="var(--fontSizeBase200)",De="var(--fontSizeBase300)",Ot="var(--fontSizeBase400)",sr="var(--fontSizeBase500)",Mo="var(--fontSizeBase600)",Zg="var(--fontSizeHero700)",Jg="var(--fontSizeHero800)",em="var(--fontSizeHero900)",tm="var(--fontSizeHero1000)",Le="var(--fontWeightRegular)",nm="var(--fontWeightMedium)",tn="var(--fontWeightSemibold)",rm="var(--fontWeightBold)",pc="var(--lineHeightBase100)",vt="var(--lineHeightBase200)",We="var(--lineHeightBase300)",Bn="var(--lineHeightBase400)",No="var(--lineHeightBase500)",im="var(--lineHeightBase600)",om="var(--lineHeightHero700)",sm="var(--lineHeightHero800)",am="var(--lineHeightHero900)",lm="var(--lineHeightHero1000)",Lo="var(--shadow2)",fc="var(--shadow4)",cm="var(--shadow8)",gc="var(--shadow16)",um="var(--shadow28)",dm="var(--shadow64)",Ne="var(--strokeWidthThin)",Qt="var(--strokeWidthThick)",Je="var(--strokeWidthThicker)",Ji="var(--strokeWidthThickest)",Ue="var(--spacingHorizontalXXS)",En="var(--spacingHorizontalXS)",nn="var(--spacingHorizontalSNudge)",Un="var(--spacingHorizontalS)",It="var(--spacingHorizontalMNudge)",Tt="var(--spacingHorizontalM)",hm="var(--spacingHorizontalL)",pm="var(--spacingHorizontalXXL)",fm="var(--spacingVerticalXXS)",eo="var(--spacingVerticalXS)",to="var(--spacingVerticalSNudge)",Ze="var(--spacingVerticalS)",gm="var(--spacingVerticalMNudge)",mc="var(--spacingVerticalL)",Rn="var(--spacingVerticalXXL)",bc="var(--durationUltraFast)",no="var(--durationFaster)",vc="var(--durationNormal)",mm="var(--durationGentle)",bm="var(--durationSlow)",ua="var(--durationSlower)",mr="var(--durationUltraSlow)",vm="var(--curveAccelerateMax)",ui="var(--curveAccelerateMid)",ym="var(--curveAccelerateMin)",yc="var(--curveDecelerateMax)",di="var(--curveDecelerateMid)",wm="var(--curveDecelerateMin)",km="var(--curveEasyEaseMax)",Do="var(--curveEasyEase)",wc="var(--curveLinear)",xm=N`
  ${ye("block")}

  :host {
    max-width: fit-content;
    contain: content;
  }

  .heading {
    height: 44px;
    display: grid;
    position: relative;
    padding-inline: ${Tt} ${It};
    border-radius: ${de};
    font-family: ${Pe};
    font-size: ${De};
    font-weight: ${Le};
    line-height: ${We};
    grid-template-columns: auto auto 1fr auto;
  }

  .button {
    appearance: none;
    background: ${it};
    border: none;
    box-sizing: border-box;
    color: ${Se};
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
    border-radius: ${Cn};
  }

  :where(.default-marker-collapsed, .default-marker-expanded),
  ::slotted(:is([slot='marker-collapsed'], [slot='marker-expanded'])) {
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    position: relative;
    height: 100%;
    padding-inline-end: ${Un};
    grid-column: 1 / span 1;
    grid-row: 1;
  }

  .content {
    margin: 0 ${Tt};
  }

  ::slotted([slot='start']) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: ${Un};
    grid-column: 2 / span 1;
    grid-row: 1;
  }

  button:focus-visible::after {
    content: '';
    position: absolute;
    inset: 0px;
    cursor: pointer;
    border-radius: ${Cn};
    outline: none;
    border: 2px solid ${ac};
    box-shadow: inset 0 0 0 1px ${er};
  }

  /* --- Disabled attr styles --- */

  :host(${Be}) .button {
    color: ${ve};
  }

  :host(${Be}) svg {
    filter: invert(89%) sepia(0%) saturate(569%) hue-rotate(155deg) brightness(88%) contrast(87%);
  }

  /* --- Expanded attr styles --- */

  :host(${Rt}) .content {
    display: block;
  }

  :host(${Rt}) .default-marker-collapsed,
  :host(${Rt}) ::slotted([slot='marker-collapsed']),
  :host(:not(${Rt})) :is(.default-marker-expanded, .content),
  :host(:not(${Rt})) ::slotted([slot='marker-expanded']) {
    display: none;
  }

  :host(${Rt}) ::slotted([slot='marker-expanded']),
  :host(:not(${Rt})) ::slotted([slot='marker-collapsed']) {
    display: flex;
  }

  /* --- Appearance attr styles --- */

  .heading {
    font-size: ${De};
    line-height: ${We};
  }

  :host(${ue}) .heading {
    font-size: ${lt};
    line-height: ${vt};
  }

  :host(${ce}) .heading {
    font-size: ${Ot};
    line-height: ${Bn};
  }

  :host(${Hr}) .heading {
    font-size: ${sr};
    line-height: ${No};
  }

  /* --- marker-position attr styles --- */

  :host(${_t}) :slotted([slot='start']) {
    grid-column: 1 / span 1;
  }

  :host(${_t}) :is(.default-marker-collapsed, .default-marker-expanded) {
    grid-column: 4 / span 1;
    padding-inline-start: ${Un};
    padding-inline-end: 0;
  }

  :host(${_t}) .button {
    grid-column: 2 / span 3;
  }

  /* --- Block attr styles --- */

  :host([block]) {
    max-width: 100%;
  }

  :host(${_t}) .heading {
    grid-template-columns: auto auto 28px;
    padding-inline: ${Tt};
  }

  :host(${_t}:has([slot='start'])) .heading {
    padding-inline: ${It} ${Tt};
  }

  :host(${Rr}${_t}) .heading {
    grid-template-columns: auto 1fr;
  }

  :host(${_t}) :is(.default-marker-collapsed, .default-marker-expanded) {
    grid-column: 5 / span 1;
  }
`,z=Object.freeze({prefix:"fluent",shadowRootMode:"open",registry:customElements}),$m=j.partial(`<svg
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
</svg>`),Sm=j.partial(`<svg
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
</svg>`);function Cm(n={}){return j`
    <div class="heading" part="heading" role="heading" aria-level="${e=>e.headinglevel}">
      <button
        class="button"
        part="button"
        ${st("expandbutton")}
        ?disabled="${e=>e.disabled?"true":void 0}"
        aria-expanded="${e=>e.expanded}"
        aria-controls="${e=>e.id}-panel"
        id="${e=>e.id}"
      >
        <slot name="heading"></slot>
      </button>
      ${sn(n)}
      <slot name="marker-expanded"> ${Zt(n.expandedIcon)} </slot>
      <slot name="marker-collapsed"> ${Zt(n.collapsedIcon)} </slot>
    </div>
    <div class="content" part="content" id="${e=>e.id}-panel" role="region" aria-labelledby="${e=>e.id}">
      <slot></slot>
    </div>
  `}const Em=Cm({collapsedIcon:$m,expandedIcon:Sm}),Am=or.compose({name:`${z.prefix}-accordion-item`,template:Em,styles:xm}),$i={single:"single",multi:"multi"};class _o extends he{constructor(){super(...arguments),this.expandmode=$i.multi,this.activeItemIndex=0,this.setItems=()=>{if(this.slottedAccordionItems.length===0)return;const e=Array.from(this.children);if(this.removeItemListeners(e),e.forEach(t=>D.getNotifier(t).subscribe(this,"disabled")),this.accordionItems=e.filter(t=>!t.hasAttribute("disabled")),this.accordionItems.forEach((t,r)=>{t instanceof mt&&(t.addEventListener("click",this.expandedChangedHandler),D.getNotifier(t).subscribe(this,"expanded"))}),this.isSingleExpandMode()){const t=this.findExpandedItem();this.setSingleExpandMode(t)}},this.removeItemListeners=e=>{e.forEach((t,r)=>{D.getNotifier(t).unsubscribe(this,"disabled"),D.getNotifier(t).unsubscribe(this,"expanded"),t.removeEventListener("click",this.expandedChangedHandler)})},this.expandedChangedHandler=e=>{const t=e.target;t instanceof mt&&(this.isSingleExpandMode()?this.setSingleExpandMode(t):(t.expanded=!t.expanded,this.activeItemIndex=this.accordionItems.indexOf(t)),this.$emit("change"))}}expandmodeChanged(e,t){if(!this.$fastController.isConnected)return;const r=this.findExpandedItem();if(r){if(t===$i.single){this.setSingleExpandMode(r);return}r==null||r.expandbutton.removeAttribute("aria-disabled")}}slottedAccordionItemsChanged(e,t){this.$fastController.isConnected&&this.setItems()}handleChange(e,t){t==="disabled"?this.setItems():t==="expanded"&&e.expanded&&this.isSingleExpandMode()&&this.setSingleExpandMode(e)}findExpandedItem(){var e;return this.accordionItems.length===0?null:(e=this.accordionItems.find(t=>t instanceof mt&&t.expanded))!==null&&e!==void 0?e:this.accordionItems[0]}isSingleExpandMode(){return this.expandmode===$i.single}setSingleExpandMode(e){if(this.accordionItems.length===0)return;const t=Array.from(this.accordionItems);this.activeItemIndex=t.indexOf(e),t.forEach((r,i)=>{r instanceof mt&&(this.activeItemIndex===i?(r.expanded=!0,r.expandbutton.setAttribute("aria-disabled","true")):(r.expanded=!1,r.hasAttribute("disabled")||r.expandbutton.removeAttribute("aria-disabled")))})}}m([y({attribute:"expand-mode"})],_o.prototype,"expandmode",void 0);m([Ee],_o.prototype,"slottedAccordionItems",void 0);function Tm(){return j`
    <template>
      <slot ${at({property:"slottedAccordionItems",filter:qi()})}></slot>
    </template>
  `}const Im=Tm(),Bm=N`
  ${ye("flex")}

  :host {
    flex-direction: column;
    width: 100%;
    contain: content;
  }
`,Om=_o.compose({name:`${z.prefix}-accordion`,template:Im,styles:Bm}),kc={primary:"primary",outline:"outline",subtle:"subtle",transparent:"transparent"},xc={circular:"circular",rounded:"rounded",square:"square"},$c={small:"small",medium:"medium",large:"large"},br={submit:"submit",reset:"reset",button:"button"},zm=kc,Pm=xc,Fm=$c,Mm={download:"download",href:"href",hreflang:"hreflang",ping:"ping",referrerpolicy:"referrerpolicy",rel:"rel",target:"target",type:"type"};class yt extends he{constructor(){super(),this.isMac=navigator.userAgent.includes("Mac"),this.elementInternals=this.attachInternals(),this.internalProxyAnchor=this.createProxyElement(),this.elementInternals.role="link"}connectedCallback(){super.connectedCallback(),D.getNotifier(this).subscribe(this),Object.keys(this.$fastController.definition.attributeLookup).forEach(e=>{this.handleChange(this,e)}),this.append(this.internalProxyAnchor)}disconnectedCallback(){super.disconnectedCallback(),D.getNotifier(this).unsubscribe(this)}handleChange(e,t){var r;if(t in Mm){const i=(r=this.$fastController.definition.attributeLookup[t])===null||r===void 0?void 0:r.attribute;i&&this.handleProxyAttributeChange(i,this[t])}}clickHandler(e){if(this.href){const t=this.isMac?e.metaKey:e.ctrlKey;this.handleNavigation(t)}return!0}keydownHandler(e){if(this.href&&e.key===ni){const t=this.isMac&&e.metaKey||e.ctrlKey;this.handleNavigation(t);return}return!0}handleNavigation(e){e?window.open(this.href,"_blank"):this.internalProxyAnchor.click()}handleProxyAttributeChange(e,t){t?this.internalProxyAnchor.setAttribute(e,t):this.internalProxyAnchor.removeAttribute(e)}createProxyElement(){var e;const t=(e=this.internalProxyAnchor)!==null&&e!==void 0?e:document.createElement("a");return t.ariaHidden="true",t.tabIndex=-1,t}}m([y],yt.prototype,"download",void 0);m([y],yt.prototype,"href",void 0);m([y],yt.prototype,"hreflang",void 0);m([y],yt.prototype,"ping",void 0);m([y],yt.prototype,"referrerpolicy",void 0);m([y],yt.prototype,"rel",void 0);m([y],yt.prototype,"target",void 0);m([y],yt.prototype,"type",void 0);class On extends yt{constructor(){super(...arguments),this.iconOnly=!1}appearanceChanged(e,t){K(this.elementInternals,e,t,zm)}shapeChanged(e,t){K(this.elementInternals,e,t,Pm)}sizeChanged(e,t){K(this.elementInternals,e,t,Fm)}iconOnlyChanged(e,t){Z(this.elementInternals,"icon",!!t)}}m([y],On.prototype,"appearance",void 0);m([y],On.prototype,"shape",void 0);m([y],On.prototype,"size",void 0);m([y({attribute:"icon-only",mode:"boolean"})],On.prototype,"iconOnly",void 0);an(On,on);const Nm=/[\(\[\{][^\)\]\}]*[\)\]\}]/g,Lm=/[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g,Dm=/^\d+[\d\s]*(:?ext|x|)\s*\d+$/i,_m=/\s+/g,Rm=/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;function Hm(n,e,t){let r="";const i=n.split(" ");return i.length!==0&&(r+=i[0].charAt(0).toUpperCase()),t||(i.length===2?r+=i[1].charAt(0).toUpperCase():i.length===3&&(r+=i[2].charAt(0).toUpperCase())),e&&r.length>1?r.charAt(1)+r.charAt(0):r}function Vm(n){return n=n.replace(Nm,""),n=n.replace(Lm,""),n=n.replace(_m," "),n=n.trim(),n}function jm(n,e,t){return!n||(n=Vm(n),Rm.test(n)||!(t!=null&&t.allowPhoneInitials)&&Dm.test(n))?"":Hm(n,e,t==null?void 0:t.firstInitialOnly)}const Sc={darkRed:"dark-red",cranberry:"cranberry",red:"red",pumpkin:"pumpkin",peach:"peach",marigold:"marigold",gold:"gold",brass:"brass",brown:"brown",forest:"forest",seafoam:"seafoam",darkGreen:"dark-green",lightTeal:"light-teal",teal:"teal",steel:"steel",blue:"blue",royalBlue:"royal-blue",cornflower:"cornflower",navy:"navy",lavender:"lavender",purple:"purple",grape:"grape",lilac:"lilac",pink:"pink",magenta:"magenta",plum:"plum",beige:"beige",mink:"mink",platinum:"platinum",anchor:"anchor"},da={neutral:"neutral",brand:"brand",colorful:"colorful",...Sc};class hi extends he{constructor(){super(),this.elementInternals=this.attachInternals(),this.elementInternals.role="img"}}m([y],hi.prototype,"name",void 0);m([y],hi.prototype,"initials",void 0);m([y],hi.prototype,"active",void 0);class ct extends hi{handleChange(e,t){switch(t){case"color":case"colorId":this.generateColor();break}}generateInitials(){var e,t;if(!this.name&&!this.initials)return;const r=(e=this.size)!==null&&e!==void 0?e:32;return(t=this.initials)!==null&&t!==void 0?t:jm(this.name,window.getComputedStyle(this).direction==="rtl",{firstInitialOnly:r<=16})}generateColor(){var e,t;const r=this.color===da.colorful,i=this.currentColor;this.currentColor=r&&this.colorId?this.colorId:r?ct.colors[qm((e=this.name)!==null&&e!==void 0?e:"")%ct.colors.length]:(t=this.color)!==null&&t!==void 0?t:da.neutral,K(this.elementInternals,i,this.currentColor)}connectedCallback(){super.connectedCallback(),D.getNotifier(this).subscribe(this),this.generateColor()}disconnectedCallback(){super.disconnectedCallback(),D.getNotifier(this).unsubscribe(this)}}ct.colors=Object.values(Sc);m([y],ct.prototype,"shape",void 0);m([y],ct.prototype,"appearance",void 0);m([y({converter:Pt})],ct.prototype,"size",void 0);m([y],ct.prototype,"color",void 0);m([y({attribute:"color-id"})],ct.prototype,"colorId",void 0);const qm=n=>{let e=0;for(let t=n.length-1;t>=0;t--){const r=n.charCodeAt(t),i=t%8;e^=(r<<i)+(r>>8-i)}return e},Um=j`<svg
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
</svg>`;function Km(){return j`
    <slot>${n=>n.name||n.initials?n.generateInitials():Um}</slot>
    <slot name="badge"></slot>
  `}const Wm=Km(),St={fastOutSlowInMax:yc,fastOutSlowInMid:di,fastOutSlowInMin:wm,slowOutFastInMax:vm,slowOutFastInMid:ui,slowOutFastInMin:ym,fastEase:km,normalEase:Do,nullEasing:wc},Gm=N`
  ${ye("inline-flex")} :host {
    position: relative;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    font-family: ${Pe};
    font-weight: ${tn};
    font-size: ${De};
    border-radius: ${en};
    color: ${rt};
    background-color: ${vf};
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
    border-radius: ${en};
  }

  ::slotted([slot='badge']) {
    position: absolute;
    bottom: 0;
    right: 0;
    box-shadow: 0 0 0 ${Ne}) ${ge};
  }

  :host([size='64']) ::slotted([slot='badge']),
  :host([size='72']) ::slotted([slot='badge']),
  :host([size='96']) ::slotted([slot='badge']),
  :host([size='120']) ::slotted([slot='badge']),
  :host([size='128']) ::slotted([slot='badge']) {
    box-shadow: 0 0 0 ${Qt}) ${ge};
  }

  :host([size='16']),
  :host([size='20']),
  :host([size='24']) {
    font-size: ${Fo};
    font-weight: ${Le};
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
    font-size: ${lt};
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
    font-size: ${Ot};
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
    font-size: ${sr};
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
    font-size: ${Mo};
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
    border-radius: ${de};
  }

  :host([shape='square'][size='20']),
  :host([shape='square'][size='24']) {
    border-radius: ${Cn};
  }

  :host([shape='square'][size='56']),
  :host([shape='square'][size='64']),
  :host([shape='square'][size='72']) {
    border-radius: ${dc};
  }
  :host([shape='square'][size='96']),
  :host([shape='square'][size='120']),
  :host([shape='square'][size='128']) {
    border-radius: ${hc};
  }

  :host(${hp}) {
    color: ${Jl};
    background-color: ${la};
  }

  :host(${yp}) {
    color: ${dg};
    background-color: ${ug};
  }

  :host(${bp}) {
    color: ${ag};
    background-color: ${sg};
  }

  :host(${jp}) {
    color: ${zf};
    background-color: ${Tf};
  }

  :host(${Hp}) {
    color: ${_g};
    background-color: ${Dg};
  }

  :host(${Lp}) {
    color: ${Og};
    background-color: ${Bg};
  }

  :host(${Op}) {
    color: ${Wf};
    background-color: ${Kf};
  }

  :host(${xp}) {
    color: ${gg};
    background-color: ${fg};
  }

  :host(${pp}) {
    color: ${tg};
    background-color: ${eg};
  }

  :host(${fp}) {
    color: ${rg};
    background-color: ${ng};
  }

  :host(${kp}) {
    color: ${pg};
    background-color: ${hg};
  }

  :host(${Gp}) {
    color: ${Ug};
    background-color: ${qg};
  }

  :host(${vp}) {
    color: ${cg};
    background-color: ${lg};
  }

  :host(${Tp}) {
    color: ${kg};
    background-color: ${wg};
  }

  :host(${af}) {
    color: ${Xg};
    background-color: ${Gg};
  }

  :host(${sf}) {
    color: ${Wg};
    background-color: ${Kg};
  }

  :host(${up}) {
    color: ${Jf};
    background-color: ${Zf};
  }

  :host(${Wp}) {
    color: ${jg};
    background-color: ${Vg};
  }

  :host(${mp}) {
    color: ${og};
    background-color: ${ig};
  }

  :host(${Mp}) {
    color: ${Ig};
    background-color: ${Tg};
  }

  :host(${Ap}) {
    color: ${yg};
    background-color: ${vg};
  }

  :host(${Vp}) {
    color: ${Hg};
    background-color: ${Rg};
  }

  :host(${$p}) {
    color: ${bg};
    background-color: ${mg};
  }

  :host(${Ip}) {
    color: ${$g};
    background-color: ${xg};
  }

  :host(${Dp}) {
    color: ${Pg};
    background-color: ${zg};
  }

  :host(${Bp}) {
    color: ${Cg};
    background-color: ${Sg};
  }

  :host(${Rp}) {
    color: ${Lg};
    background-color: ${Ng};
  }

  :host(${cp}) {
    color: ${Yf};
    background-color: ${Qf};
  }

  :host(${Pp}) {
    color: ${Ag};
    background-color: ${Eg};
  }

  :host(${_p}) {
    color: ${Mg};
    background-color: ${Fg};
  }

  :host(${lp}) {
    color: ${Xf};
    background-color: ${Gf};
  }

  :host([active]) {
    /* Work-around for text pixel snapping at the end of the animation */
    transform: perspective(1px);
    transition-property: transform, opacity;
    transition-duration: ${mr}, ${no};
    transition-delay: ${St.fastEase}, ${St.nullEasing};
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
    transition-duration: ${mr}), ${ua};
    transition-delay: ${St.fastEase}), ${St.nullEasing});
  }
  :host([active])::before {
    box-shadow: ${cm};
    border-style: solid;
    border-color: ${la};
  }

  :host([active][appearance='shadow'])::before {
    border-style: none;
    border-color: none;
  }

  :host([active]:not([appearance='shadow']))::before {
    margin: calc(-2 * ${Qt});
    border-width: ${Qt};
  }

  :host([size='56'][active]:not([appearance='shadow']))::before,
  :host([size='64'][active]:not([appearance='shadow']))::before {
    margin: calc(-2 * ${Je});
    border-width: ${Je};
  }

  :host([size='72'][active]:not([appearance='shadow']))::before,
  :host([size='96'][active]:not([appearance='shadow']))::before,
  :host([size='120'][active]:not([appearance='shadow']))::before,
  :host([size='128'][active]:not([appearance='shadow']))::before {
    margin: calc(-2 * ${Ji});
    border-width: ${Ji};
  }

  :host([size='20'][active][appearance])::before,
  :host([size='24'][active][appearance])::before,
  :host([size='28'][active][appearance])::before {
    box-shadow: ${fc};
  }

  :host([size='56'][active][appearance])::before,
  :host([size='64'][active][appearance])::before {
    box-shadow: ${gc};
  }

  :host([size='72'][active][appearance])::before,
  :host([size='96'][active][appearance])::before,
  :host([size='120'][active][appearance])::before,
  :host([size='128'][active][appearance])::before {
    box-shadow: ${um};
  }

  :host([active][appearance='ring'])::before {
    box-shadow: none;
  }

  :host([active='inactive']) {
    opacity: 0.8;
    transform: scale(0.875);
    transition-property: transform, opacity;
    transition-duration: ${mr}, ${no};
    transition-delay: ${St.fastOutSlowInMin}, ${St.nullEasing};
  }

  :host([active='inactive'])::before {
    margin: 0;
    opacity: 0;
    transition-property: margin, opacity;
    transition-duration: ${mr}, ${ua};
    transition-delay: ${St.fastOutSlowInMin}, ${St.nullEasing};
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
`,Xm=ct.compose({name:`${z.prefix}-avatar`,template:Wm,styles:Gm}),ha={filled:"filled",ghost:"ghost",outline:"outline",tint:"tint"},pa={brand:"brand",danger:"danger",important:"important",informative:"informative",severe:"severe",subtle:"subtle",success:"success",warning:"warning"},Qm={circular:"circular",rounded:"rounded",square:"square"},Ym={tiny:"tiny",extraSmall:"extra-small",small:"small",medium:"medium",large:"large",extraLarge:"extra-large"};class zn extends he{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.appearance=ha.filled,this.color=pa.brand}appearanceChanged(e,t){K(this.elementInternals,e,t,ha)}colorChanged(e,t){K(this.elementInternals,e,t,pa)}shapeChanged(e,t){K(this.elementInternals,e,t,Qm)}sizeChanged(e,t){K(this.elementInternals,e,t,Ym)}}m([y],zn.prototype,"appearance",void 0);m([y],zn.prototype,"color",void 0);m([y],zn.prototype,"shape",void 0);m([y],zn.prototype,"size",void 0);an(zn,on);function Zm(n={}){return j`
    ${sn(n)}
    <slot>${Zt(n.defaultContent)}</slot>
    ${In(n)}
  `}const Jm=Zm(),eb=N.partial`
  ${ye("inline-flex")} :host {
    position: relative;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    font-family: ${Pe};
    font-weight: ${tn};
    font-size: ${lt};
    line-height: ${vt};
    min-width: 20px;
    height: 20px;
    padding-inline: calc(${En} + ${Ue});
    border-radius: ${en};
    border-color: ${Jt};
    background-color: ${oc};
    color: ${Xt};
    contain: content;
  }

  ::slotted(svg) {
    font-size: 12px;
  }

  :host(:not(${gt}))::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-style: solid;
    border-width: ${Ne};
    border-color: inherit;
    border-radius: inherit;
  }
`,tb=N.partial`
  :host(${jr}) {
    width: 6px;
    height: 6px;
    font-size: 4px;
    line-height: 4px;
    padding-inline: 0;
    min-width: unset;
  }
  :host(${jr}) ::slotted(svg) {
    font-size: 6px;
  }
  :host(${Vr}) {
    width: 10px;
    height: 10px;
    font-size: 6px;
    line-height: 6px;
    padding-inline: 0;
    min-width: unset;
  }
  :host(${Vr}) ::slotted(svg) {
    font-size: 10px;
  }
  :host(${ue}) {
    min-width: 16px;
    height: 16px;
    font-size: ${Fo};
    line-height: ${pc};
    padding-inline: calc(${Ue} + ${Ue});
  }
  :host(${ue}) ::slotted(svg) {
    font-size: 12px;
  }
  :host(${ce}) {
    min-width: 24px;
    height: 24px;
    font-size: ${lt};
    line-height: ${vt};
    padding-inline: calc(${En} + ${Ue});
  }
  :host(${ce}) ::slotted(svg) {
    font-size: 16px;
  }
  :host(${Hr}) {
    min-width: 32px;
    height: 32px;
    font-size: ${lt};
    line-height: ${vt};
    padding-inline: calc(${nn} + ${Ue});
  }
  :host(${Hr}) ::slotted(svg) {
    font-size: 20px;
  }
`,nb=N.partial`
  :host(${ri}) {
    background-color: ${If};
    color: ${Xt};
  }

  :host(${ii}) {
    background-color: ${Se};
    color: ${ge};
  }

  :host(${oi}) {
    background-color: ${bf};
    color: ${rt};
  }

  :host(${si}) {
    background-color: ${Rf};
    color: ${Xt};
  }

  :host(${Oe}) {
    background-color: ${ge};
    color: ${Se};
  }

  :host(${ai}) {
    background-color: ${Ff};
    color: ${Xt};
  }

  :host(${li}) {
    background-color: ${qf};
    color: ${pf};
  }
`,rb=N.partial`
  :host(${gt}) {
    color: ${ec};
    background-color: initial;
  }

  :host(${gt}${ri}) {
    color: ${lc};
  }

  :host(${gt}${ii}) {
    color: ${Se};
  }

  :host(${gt}${oi}) {
    color: ${rt};
  }

  :host(${gt}${si}) {
    color: ${cc};
  }

  :host(${gt}${Oe}) {
    color: ${Bo};
  }

  :host(${gt}${ai}) {
    color: ${Df};
  }

  :host(${gt}${li}) {
    color: ${Po};
  }
`,ib=N.partial`
  :host(${xe}) {
    border-color: currentColor;
    color: ${ec};
    background-color: initial;
  }

  :host(${xe}${ri}) {
    color: ${lc};
  }

  :host(${xe}${ii}) {
    color: ${rt};
    border-color: ${qr};
  }

  :host(${xe}${oi}) {
    color: ${rt};
    border-color: ${Yi};
  }

  :host(${xe}${si}) {
    color: ${cc};
  }

  :host(${xe}${Oe}) {
    color: ${Jl};
  }

  :host(${xe}${ai}) {
    color: ${Lf};
  }

  :host(${xe}${li}) {
    color: ${Po};
  }
`,ob=N.partial`
  :host(${$t}) {
    background-color: ${$f};
    color: ${hf};
    border-color: ${sc};
  }

  :host(${$t}${ri}) {
    background-color: ${Af};
    color: ${Of};
    border-color: ${Bf};
  }

  :host(${$t}${ii}) {
    background-color: ${rt};
    color: ${ge};
    border-color: ${Jt};
  }

  :host(${$t}${oi}) {
    background-color: ${mf};
    color: ${rt};
    border-color: ${Yi};
  }

  :host(${$t}${si}) {
    background-color: ${_f};
    color: ${Vf};
    border-color: ${Hf};
  }

  :host(${$t}${Oe}) {
    background-color: ${ge};
    color: ${rt};
    border-color: ${Yi};
  }

  :host(${$t}${ai}) {
    background-color: ${Pf};
    color: ${Nf};
    border-color: ${Mf};
  }

  :host(${$t}${li}) {
    background-color: ${jf};
    color: ${Po};
    border-color: ${Uf};
  }
`,sb=N`
  :host(${Ki}) {
    border-radius: ${uc};
  }

  :host(${fr}) {
    border-radius: ${de};
  }

  :host(${fr}${jr}),
  :host(${fr}${Vr}),
  :host(${fr}${ue}) {
    border-radius: ${Cn};
  }

  ${tb}
  ${nb}
  ${rb}
  ${ib}
  ${ob}
  ${eb}
`.withBehaviors(Ft(N`
    :host,
    :host([appearance='outline']),
    :host([appearance='tint']) {
      border-color: CanvasText;
    }
  `)),ab=zn.compose({name:`${z.prefix}-badge`,template:Jm,styles:sb});class be extends he{disabledFocusableChanged(e,t){this.$fastController.isConnected&&(this.elementInternals.ariaDisabled=`${!!t}`)}get form(){return this.elementInternals.form}get labels(){return Object.freeze(Array.from(this.elementInternals.labels))}typeChanged(e,t){var r,i,o;t!==br.submit&&((r=this.formSubmissionFallbackControl)===null||r===void 0||r.remove(),(o=(i=this.shadowRoot)===null||i===void 0?void 0:i.querySelector('slot[name="internal"]'))===null||o===void 0||o.remove())}clickHandler(e){if(e&&this.disabledFocusable){e.stopImmediatePropagation();return}return this.press(),!0}connectedCallback(){super.connectedCallback(),this.elementInternals.ariaDisabled=`${!!this.disabledFocusable}`}constructor(){super(),this.disabledFocusable=!1,this.tabIndex=0,this.elementInternals=this.attachInternals(),this.elementInternals.role="button"}createAndInsertFormSubmissionFallbackControl(){var e,t,r,i,o,s,a,l;const c=(e=this.formSubmissionFallbackControlSlot)!==null&&e!==void 0?e:document.createElement("slot");c.setAttribute("name","internal"),(t=this.shadowRoot)===null||t===void 0||t.appendChild(c),this.formSubmissionFallbackControlSlot=c;const u=(r=this.formSubmissionFallbackControl)!==null&&r!==void 0?r:document.createElement("button");u.style.display="none",u.setAttribute("type","submit"),u.setAttribute("slot","internal"),this.formNoValidate&&u.toggleAttribute("formnovalidate",!0),!((i=this.elementInternals.form)===null||i===void 0)&&i.id&&u.setAttribute("form",this.elementInternals.form.id),this.name&&u.setAttribute("name",this.name),this.value&&u.setAttribute("value",this.value),this.formAction&&u.setAttribute("formaction",(o=this.formAction)!==null&&o!==void 0?o:""),this.formEnctype&&u.setAttribute("formenctype",(s=this.formEnctype)!==null&&s!==void 0?s:""),this.formMethod&&u.setAttribute("formmethod",(a=this.formMethod)!==null&&a!==void 0?a:""),this.formTarget&&u.setAttribute("formtarget",(l=this.formTarget)!==null&&l!==void 0?l:""),this.append(u),this.formSubmissionFallbackControl=u}formDisabledCallback(e){this.disabled=e}keypressHandler(e){if(e&&this.disabledFocusable){e.stopImmediatePropagation();return}if(e.key===ni||e.key===To){this.click();return}return!0}press(){switch(this.type){case br.reset:{this.resetForm();break}case br.submit:{this.submitForm();break}}}resetForm(){var e;(e=this.elementInternals.form)===null||e===void 0||e.reset()}submitForm(){var e;if(!(!this.elementInternals.form||this.disabled||this.type!==br.submit)){if(!this.name&&!this.formAction&&!this.formEnctype&&!this.form&&!this.formMethod&&!this.formNoValidate&&!this.formTarget){this.elementInternals.form.requestSubmit();return}try{this.elementInternals.setFormValue((e=this.value)!==null&&e!==void 0?e:""),this.elementInternals.form.requestSubmit(this)}catch{this.createAndInsertFormSubmissionFallbackControl(),this.elementInternals.setFormValue(null),this.elementInternals.form.requestSubmit(this.formSubmissionFallbackControl)}}}}be.formAssociated=!0;m([y({mode:"boolean"})],be.prototype,"autofocus",void 0);m([Ee],be.prototype,"defaultSlottedContent",void 0);m([y({mode:"boolean"})],be.prototype,"disabled",void 0);m([y({attribute:"disabled-focusable",mode:"boolean"})],be.prototype,"disabledFocusable",void 0);m([y({attribute:"tabindex",mode:"fromView",converter:Pt})],be.prototype,"tabIndex",void 0);m([y({attribute:"formaction"})],be.prototype,"formAction",void 0);m([y({attribute:"form"})],be.prototype,"formAttribute",void 0);m([y({attribute:"formenctype"})],be.prototype,"formEnctype",void 0);m([y({attribute:"formmethod"})],be.prototype,"formMethod",void 0);m([y({attribute:"formnovalidate",mode:"boolean"})],be.prototype,"formNoValidate",void 0);m([y({attribute:"formtarget"})],be.prototype,"formTarget",void 0);m([y],be.prototype,"name",void 0);m([y],be.prototype,"type",void 0);m([y],be.prototype,"value",void 0);class ln extends be{constructor(){super(...arguments),this.iconOnly=!1}appearanceChanged(e,t){K(this.elementInternals,e,t,kc)}shapeChanged(e,t){K(this.elementInternals,e,t,xc)}sizeChanged(e,t){K(this.elementInternals,e,t,$c)}iconOnlyChanged(e,t){Z(this.elementInternals,"icon",t)}}m([y],ln.prototype,"appearance",void 0);m([y],ln.prototype,"shape",void 0);m([y],ln.prototype,"size",void 0);m([y({attribute:"icon-only",mode:"boolean"})],ln.prototype,"iconOnly",void 0);an(ln,on);const Cc=N`
  ${ye("inline-flex")}

  :host {
    --icon-spacing: ${nn};
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
    background-color: ${ge};
    color: ${Se};
    border: ${Ne} solid ${Jn};
    padding: 0 ${Tt};
    min-width: 96px;
    border-radius: ${de};
    font-size: ${De};
    font-family: ${Pe};
    font-weight: ${tn};
    line-height: ${We};
    transition-duration: ${no};
    transition-property: background, border, color;
    transition-timing-function: ${Do};
    cursor: pointer;
    user-select: none;
  }

  .content {
    display: inherit;
  }

  :host(:hover) {
    background-color: ${tc};
    color: ${Xl};
    border-color: ${ci};
  }

  :host(:hover:active) {
    background-color: ${ff};
    border-color: ${Oo};
    color: ${cf};
    outline-style: none;
  }

  :host(:focus-visible) {
    border-color: ${Jt};
    outline: ${Qt} solid ${Jt};
    box-shadow: ${fc}, 0 0 0 2px ${er};
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

  :host(:not(${_n})) :is([slot='end'], :host(:not(${_n}))::slotted([slot='end'])) {
    margin-inline-start: var(--icon-spacing);
  }

  :host(${_n}) {
    min-width: 32px;
    max-width: 32px;
  }

  :host(${ue}) {
    --icon-spacing: ${En};
    min-height: 24px;
    min-width: 64px;
    padding: 0 ${Un};
    border-radius: ${Cn};
    font-size: ${lt};
    line-height: ${vt};
    font-weight: ${Le};
  }

  :host(${ue}${_n}) {
    min-width: 24px;
    max-width: 24px;
  }

  :host(${ce}) {
    min-height: 40px;
    border-radius: ${dc};
    padding: 0 ${hm};
    font-size: ${Ot};
    line-height: ${Bn};
  }

  :host(${ce}${_n}) {
    min-width: 40px;
    max-width: 40px;
  }

  :host(${ce}) ::slotted(svg) {
    font-size: 24px;
    height: 24px;
    width: 24px;
  }

  :host(:is(${Zs}, ${Zs}:focus-visible)) {
    border-radius: ${en};
  }

  :host(:is(${Ki}, ${Ki}:focus-visible)) {
    border-radius: ${uc};
  }

  :host(${At}) {
    background-color: ${oc};
    color: ${Xt};
    border-color: transparent;
  }

  :host(${At}:hover) {
    background-color: ${kf};
  }

  :host(${At}:is(:hover, :hover:active)) {
    border-color: transparent;
    color: ${Xt};
  }

  :host(${At}:hover:active) {
    background-color: ${xf};
  }

  :host(${At}:focus-visible) {
    border-color: ${Xt};
    box-shadow: ${Lo}, 0 0 0 2px ${er};
  }

  :host(${xe}) {
    background-color: ${it};
  }

  :host(${xe}:hover) {
    background-color: ${sa};
  }

  :host(${xe}:hover:active) {
    background-color: ${aa};
  }

  :host(${Oe}) {
    background-color: ${yf};
    color: ${Zn};
    border-color: transparent;
  }

  :host(${Oe}:hover) {
    background-color: ${rc};
    color: ${Ql};
    border-color: transparent;
  }

  :host(${Oe}:hover:active) {
    background-color: ${Gi};
    color: ${Yl};
    border-color: transparent;
  }

  :host(${Oe}:hover) ::slotted(svg) {
    fill: ${ia};
  }

  :host(${Oe}:hover:active) ::slotted(svg) {
    fill: ${oa};
  }

  :host(${jt}) {
    background-color: ${it};
    color: ${Zn};
  }

  :host(${jt}:hover) {
    background-color: ${sa};
    color: ${ia};
  }

  :host(${jt}:hover:active) {
    background-color: ${aa};
    color: ${oa};
  }

  :host(:is(${jt}, ${jt}:is(:hover, :active))) {
    border-color: transparent;
  }
`,Ec=N`
  ${Cc}

  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable])),
  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable]):hover),
  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable]):hover:active) {
    background-color: ${ic};
    border-color: ${Ur};
    color: ${ve};
    cursor: not-allowed;
  }

  :host(${At}:is(:disabled, [disabled-focusable])),
  :host(${At}:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
  }

  :host(${xe}:is(:disabled, [disabled-focusable])),
  :host(${xe}:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    background-color: ${it};
  }

  :host(${Oe}:is(:disabled, [disabled-focusable])),
  :host(${Oe}:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    background-color: ${it};
    border-color: transparent;
  }

  :host(${jt}:is(:disabled, [disabled-focusable])),
  :host(${jt}:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
    background-color: ${it};
  }
`.withBehaviors(Ft(N`
    :host {
      background-color: ButtonFace;
      color: ButtonText;
    }

    :host(:is(:hover, :focus-visible)) {
      border-color: Highlight !important;
    }

    :host(${At}:not(:is(:hover, :focus-visible))) {
      background-color: Highlight;
      color: HighlightText;
      forced-color-adjust: none;
    }

    :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable])) {
      background-color: ButtonFace;
      color: GrayText;
      border-color: ButtonText;
    }
  `));function Ac(n={}){return j`
    <template
      tabindex="${e=>{var t;return e.disabled?null:(t=e.tabIndex)!==null&&t!==void 0?t:0}}"
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @keypress="${(e,t)=>e.keypressHandler(t.event)}"
    >
      ${sn(n)}
      <span class="content" part="content">
        <slot ${at("defaultSlottedContent")}></slot>
      </span>
      ${In(n)}
    </template>
  `}const lb=Ac(),cb=ln.compose({name:`${z.prefix}-button`,template:lb,styles:Ec}),et={modal:"modal",nonModal:"non-modal",alert:"alert"};class ar extends he{constructor(){super(...arguments),this.type=et.modal,this.emitBeforeToggle=()=>{this.$emit("beforetoggle",{oldState:this.dialog.open?"open":"closed",newState:this.dialog.open?"closed":"open"})},this.emitToggle=()=>{this.$emit("toggle",{oldState:this.dialog.open?"closed":"open",newState:this.dialog.open?"open":"closed"})}}show(){Gt.enqueue(()=>{this.emitBeforeToggle(),this.type===et.alert||this.type===et.modal?this.dialog.showModal():this.type===et.nonModal&&this.dialog.show(),this.emitToggle()})}hide(){this.emitBeforeToggle(),this.dialog.close(),this.emitToggle()}clickHandler(e){return e.preventDefault(),this.dialog.open&&this.type!==et.alert&&e.target===this.dialog&&this.hide(),!0}}m([Ee],ar.prototype,"dialog",void 0);m([y({attribute:"aria-describedby"})],ar.prototype,"ariaDescribedby",void 0);m([y({attribute:"aria-labelledby"})],ar.prototype,"ariaLabelledby",void 0);m([y],ar.prototype,"type",void 0);const ub=j`
  <dialog
    role="${n=>n.type===et.alert?"alertdialog":"dialog"}"
    type="${n=>n.type}"
    class="dialog"
    part="dialog"
    aria-modal="${n=>n.type===et.modal||n.type===et.alert?"true":void 0}"
    aria-describedby="${n=>n.ariaDescribedby}"
    aria-labelledby="${n=>n.ariaLabelledby}"
    aria-label="${n=>n.ariaLabel}"
    @click="${(n,e)=>n.clickHandler(e.event)}"
    @cancel="${(n,e)=>n.type===et.alert?e.event.preventDefault():n.hide()}"
    ${st("dialog")}
  >
    <slot></slot>
  </dialog>
`,db=N`
  @layer base {
    :host {
      --dialog-backdrop: ${wf};
      --dialog-starting-scale: 0.85;
    }

    ::backdrop {
      background: var(--dialog-backdrop, rgba(0, 0, 0, 0.4));
    }

    dialog {
      background: ${ge};
      border-radius: ${hc};
      border: none;
      box-shadow: ${dm};
      color: ${Se};
      max-height: calc(-48px + 100vh);
      padding: 0;
      width: 100%;
      max-width: 600px;
    }

    :host([type='non-modal']) dialog {
      inset: 0;
      position: fixed;
      z-index: 2;
      overflow: auto;
    }
  }

  @layer animations {
    /* Disable animations for reduced motion */
    @media (prefers-reduced-motion: no-preference) {
      dialog,
      ::backdrop {
        transition: display allow-discrete, opacity, overlay allow-discrete, scale;
        transition-duration: ${mm};
        transition-timing-function: ${di};
        /* Set opacity to 0 when closed */
        opacity: 0;
      }
      ::backdrop {
        transition-timing-function: ${wc};
      }

      /* Set opacity to 1 when open */
      [open],
      [open]::backdrop {
        opacity: 1;
      }

      /* Exit styles for dialog */
      dialog:not([open]) {
        /* Make small when leaving */
        scale: var(--dialog-starting-scale);
        /* Faster leaving the stage then entering */
        transition-timing-function: ${ui};
      }
    }

    @starting-style {
      [open],
      [open]::backdrop {
        opacity: 0;
      }

      dialog {
        scale: var(--dialog-starting-scale);
      }
    }
  }
`.withBehaviors(Ft(N`
    @layer base {
      dialog {
        border: ${Ne} solid ${Jt};
      }
    }
  `)),hb=ar.compose({name:`${z.prefix}-dialog`,template:ub,styles:db});class Tc extends he{constructor(){super(...arguments),this.noTitleAction=!1}}m([y({mode:"boolean",attribute:"no-title-action"})],Tc.prototype,"noTitleAction",void 0);const pb=j.partial(`
  <svg
    fill="currentColor"
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m4.09 4.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L10 9.29l5.15-5.14a.5.5 0 0 1 .63-.06l.07.06c.18.17.2.44.06.63l-.06.07L10.71 10l5.14 5.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L10 10.71l-5.15 5.14a.5.5 0 0 1-.63.06l-.07-.06a.5.5 0 0 1-.06-.63l.06-.07L9.29 10 4.15 4.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"
      fill="currentColor"
    ></path>
  </svg>`),fb=j`
  <div class="title" part="title">
    <slot name="title"></slot>
    <slot name="title-action">
      <fluent-button
        ?hidden=${n=>{var e;return n.noTitleAction||((e=n.parentNode)===null||e===void 0?void 0:e.type)===et.alert}}
        tabindex="0"
        part="title-action"
        class="title-action"
        appearance="transparent"
        icon-only
        @click=${n=>{var e;return(e=n.parentNode)===null||e===void 0?void 0:e.hide()}}
        ${st("defaultTitleAction")}
      >
        ${pb}
      </fluent-button>
    </slot>
  </div>
  <div class="content" part="content"><slot></slot></div>
  <div class="actions" part="actions"><slot name="action"></slot></div>
`,gb=N`
  ${ye("grid")}

  :host {
    background: ${ge};
    box-sizing: border-box;
    gap: ${Ze};
    padding: ${Rn} ${pm};
    container: dialog-body / inline-size;
  }

  .title {
    box-sizing: border-box;
    align-items: flex-start;
    background: ${ge};
    color: ${Se};
    column-gap: 8px;
    display: flex;
    font-family: ${Pe};
    font-size: ${sr};
    font-weight: ${tn};
    inset-block-start: 0;
    justify-content: space-between;
    line-height: ${No};
    margin-block-end: calc(${Ze} * -1);
    margin-block-start: calc(${Rn} * -1);
    padding-block-end: ${Ze};
    padding-block-start: ${Rn};
    position: sticky;
    z-index: 1;
  }

  .content {
    box-sizing: border-box;
    color: ${Se};
    font-family: ${Pe};
    font-size: ${De};
    font-weight: ${Le};
    line-height: ${We};
    min-height: 32px;
  }

  .actions {
    box-sizing: border-box;
    background: ${ge};
    display: flex;
    flex-direction: column;
    gap: ${Ze};
    inset-block-end: 0;
    margin-block-end: calc(${Rn} * -1);
    padding-block-end: ${Rn};
    padding-block-start: ${mc};
    position: sticky;
    z-index: 2;
  }

  /* Hide slots if nothing is slotted to remove grid gap */
  :not(:has(:is([slot='title'], [slot='title-action']))) .title:not(:has(.title-action)),
  :not(:has([slot='action'])) .actions {
    display: none;
  }

  @container (min-width: 480px) {
    .actions {
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      margin-block-start: calc(${Ze} * -1);
      padding-block-start: ${Ze};
    }
  }
`,mb=Tc.compose({name:`${z.prefix}-dialog-body`,template:fb,styles:gb}),bb=N`
  ${Cc}

  ::slotted(a) {
    position: absolute;
    inset: 0;
  }
`.withBehaviors(Ft(N`
    :host {
      border-color: LinkText;
      color: LinkText;
    }
  `));function vb(n={}){return j`
    <template
      tabindex="0"
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
    >
      ${sn(n)}
      <span class="content" part="content">
        <slot></slot>
      </span>
      ${In(n)}
    </template>
  `}const yb=vb(),wb=On.compose({name:`${z.prefix}-anchor-button`,template:yb,styles:bb});class kb extends ln{}const xb=Ac({end:j.partial(`
    <svg slot="end" fill="currentColor" aria-hidden="true" width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.85 7.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 8.35a.5.5 0 1 1 .7-.7L10 12.8l5.15-5.16c.2-.2.5-.2.7 0Z" fill="currentColor"></path>
    </svg>
  `)}),$b=kb.compose({name:`${z.prefix}-menu-button`,template:xb,styles:Ec}),ae={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"};ae.menuitem+"",ae.menuitemcheckbox+"",ae.menuitemradio+"";const Sb=()=>n=>n.nodeType===1&&n.elementInternals.role==="menu";class Ge extends he{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.role=ae.menuitem,this.checked=!1,this.handleMenuItemKeyDown=e=>{var t,r,i,o;if(e.defaultPrevented)return!1;switch(e.key){case ni:case To:return this.invoke(),!1;case jl:return this.disabled||((t=this.submenu)===null||t===void 0||t.togglePopover(!0),(r=this.submenu)===null||r===void 0||r.focus()),!1;case Vl:return!((i=this.parentElement)===null||i===void 0)&&i.hasAttribute("popover")&&(this.parentElement.togglePopover(!1),(o=this.parentElement.parentElement)===null||o===void 0||o.focus()),!1}return!0},this.handleMenuItemClick=e=>(e.defaultPrevented||this.disabled||this.invoke(),!1),this.handleMouseOver=e=>{var t;return this.disabled||(t=this.submenu)===null||t===void 0||t.togglePopover(!0),!1},this.handleMouseOut=e=>{var t;return this.contains(document.activeElement)||(t=this.submenu)===null||t===void 0||t.togglePopover(!1),!1},this.toggleHandler=e=>{e instanceof ToggleEvent&&e.newState==="open"&&(this.setAttribute("tabindex","-1"),this.elementInternals.ariaExpanded="true",this.setSubmenuPosition()),e instanceof ToggleEvent&&e.newState==="closed"&&(this.elementInternals.ariaExpanded="false",this.setAttribute("tabindex","0"))},this.invoke=()=>{if(!this.disabled)switch(this.role){case ae.menuitemcheckbox:this.checked=!this.checked;break;case ae.menuitem:if(this.submenu){this.submenu.togglePopover(!0),this.submenu.focus();break}this.$emit("change");break;case ae.menuitemradio:this.checked||(this.checked=!0);break}},this.setSubmenuPosition=()=>{if(!CSS.supports("anchor-name","--anchor")&&this.submenu){const e=this.getBoundingClientRect(),t=this.submenu.getBoundingClientRect(),r=getComputedStyle(this).direction==="ltr"?"right":"left";if(e.width+t.width>window.innerWidth*.75){this.submenu.style.translate="0 -100%";return}if(e[r]+t.width>window.innerWidth){this.submenu.style.translate="-100% 0";return}this.submenu.style.translate=`${e.width-8}px 0`}}}disabledChanged(e,t){this.elementInternals.ariaDisabled=t?`${t}`:null,Z(this.elementInternals,"disabled",t)}roleChanged(e,t){this.elementInternals.role=t??ae.menuitem}checkedChanged(e,t){const r=this.role!==ae.menuitem;this.elementInternals.ariaChecked=r?`${!!t}`:null,Z(this.elementInternals,"checked",r?t:!1),this.$fastController.isConnected&&this.$emit("change",t,{bubbles:!0})}slottedSubmenuChanged(e,t){var r;(r=this.submenu)===null||r===void 0||r.removeEventListener("toggle",this.toggleHandler),t.length?(this.submenu=t[0],this.submenu.toggleAttribute("popover",!0),this.submenu.addEventListener("toggle",this.toggleHandler),this.elementInternals.ariaHasPopup="menu",Z(this.elementInternals,"submenu",!0)):(this.elementInternals.ariaHasPopup=null,Z(this.elementInternals,"submenu",!1))}connectedCallback(){var e;super.connectedCallback(),this.elementInternals.role=(e=this.role)!==null&&e!==void 0?e:ae.menuitem,this.elementInternals.ariaChecked=this.role!==ae.menuitem?`${!!this.checked}`:null}}m([y({mode:"boolean"})],Ge.prototype,"disabled",void 0);m([y],Ge.prototype,"role",void 0);m([y({mode:"boolean"})],Ge.prototype,"checked",void 0);m([y({mode:"boolean"})],Ge.prototype,"hidden",void 0);m([Ee],Ge.prototype,"slottedSubmenu",void 0);m([Ee],Ge.prototype,"submenu",void 0);an(Ge,on);const Cb=N`
  ${ye("grid")}

  :host {
    --indent: 0;
    align-items: center;
    background: ${ge};
    border-radius: ${de};
    color: ${Zn};
    contain: layout;
    cursor: pointer;
    /* Prevent shrinking of MenuItems when max-height is applied to MenuList */
    flex-shrink: 0;
    font: ${Le} ${De} / ${We} ${Pe};
    grid-gap: 4px;
    grid-template-columns: 20px 20px auto 20px;
    height: 32px;
    overflow: visible;
    padding: 0 10px;
  }

  :host(:hover) {
    background: ${tc};
    color: ${Ql};
  }

  :host(:active) {
    background-color: ${gf};
    color: ${Yl};
  }

  :host(:active) ::slotted([slot='start']) {
    color: ${df};
  }

  :host(${Be}) {
    background-color: ${ic};
    color: ${ve};
  }

  :host(${Be}) ::slotted([slot='start']),
  :host(${Be}) ::slotted([slot='end']) {
    color: ${ve};
  }

  :host(:focus-visible) {
    border-radius: ${de};
    outline: 2px solid ${er};
  }

  .content {
    white-space: nowrap;
    flex-grow: 1;
    grid-column: auto / span 2;
    padding: 0 2px;
  }

  :host(:not(${Ys})) .indicator,
  :host(:not(${Ys})) ::slotted([slot='indicator']),
  :host(:not(${gr})) .submenu-glyph,
  :host(:not(${gr})) ::slotted([slot='submenu-glyph']) {
    display: none;
  }

  ::slotted([slot='end']) {
    color: ${rt};
    font: ${Le} ${lt} / ${vt} ${Pe};
    white-space: nowrap;
  }

  :host([data-indent='1']) {
    --indent: 1;
  }

  :host([data-indent='2']) {
    --indent: 2;
    grid-template-columns: 20px 20px auto auto;
  }

  :host(${gr}) {
    grid-template-columns: 20px auto auto 20px;
  }

  :host([data-indent='2']${gr}) {
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
`.withBehaviors(Ft(N`
    :host(${Be}),
    :host(${Be}) ::slotted([slot='start']),
    :host(${Be}) ::slotted([slot='end']) {
      color: GrayText;
    }
  `)),Eb=j.partial('<svg class="indicator" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.05 3.49c.28.3.27.77-.04 1.06l-7.93 7.47A.85.85 0 014.9 12L2.22 9.28a.75.75 0 111.06-1.06l2.24 2.27 7.47-7.04a.75.75 0 011.06.04z" fill="currentColor"></path></svg>'),Ab=j.partial('<svg class="submenu-glyph" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.74 3.2a.75.75 0 00-.04 1.06L9.23 8 5.7 11.74a.75.75 0 101.1 1.02l4-4.25a.75.75 0 000-1.02l-4-4.25a.75.75 0 00-1.06-.04z" fill="currentColor"></path></svg>');function Tb(n={}){return j`
    <template
      @keydown="${(e,t)=>e.handleMenuItemKeyDown(t.event)}"
      @click="${(e,t)=>e.handleMenuItemClick(t.event)}"
      @mouseover="${(e,t)=>e.handleMouseOver(t.event)}"
      @mouseout="${(e,t)=>e.handleMouseOut(t.event)}"
      @toggle="${(e,t)=>e.toggleHandler(t.event)}"
    >
      <slot name="indicator"> ${Zt(n.indicator)} </slot>
      ${sn(n)}
      <div part="content" class="content">
        <slot></slot>
      </div>
      ${In(n)}
      <slot name="submenu-glyph"> ${Zt(n.submenuGlyph)} </slot>
      <slot name="submenu" ${at({property:"slottedSubmenu",filter:Sb()})}></slot>
    </template>
  `}const Ib=Tb({indicator:Eb,submenuGlyph:Ab}),Bb=Ge.compose({name:`${z.prefix}-menu-item`,template:Ib,styles:Cb});class An extends he{itemsChanged(e,t){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}constructor(){super(),this.elementInternals=this.attachInternals(),this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&Gs(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=e=>{if(!this.contains(e.relatedTarget)&&this.menuItems!==void 0){const t=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[t].setAttribute("tabindex","0"),this.focusIndex=t}},this.handleItemFocus=e=>{const t=e.target;this.menuItems!==void 0&&t!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(t),t.setAttribute("tabindex","0"))},this.changedMenuItemHandler=e=>{if(this.menuItems===void 0)return;const t=e.target,r=this.menuItems.indexOf(t);if(r!==-1&&t.role==="menuitemradio"&&t.checked===!0){for(let o=r-1;o>=0;--o){const s=this.menuItems[o],a=s.getAttribute("role");if(a===ae.menuitemradio&&(s.checked=!1),a==="separator")break}const i=this.menuItems.length-1;for(let o=r+1;o<=i;++o){const s=this.menuItems[o],a=s.getAttribute("role");if(a===ae.menuitemradio&&(s.checked=!1),a==="separator")break}}},this.isMenuItemElement=e=>e instanceof Ge||Gs(e)&&e.getAttribute("role")in An.focusableElementRoles,this.isFocusableElement=e=>this.isMenuItemElement(e),this.elementInternals.role="menu"}connectedCallback(){super.connectedCallback(),Gt.enqueue(()=>{this.setItems()}),this.addEventListener("change",this.changedMenuItemHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changedMenuItemHandler)}focus(){this.setFocus(0,1)}handleMenuKeyDown(e){if(!(e.defaultPrevented||this.menuItems===void 0))switch(e.key){case Hl:this.setFocus(this.focusIndex+1,1);return;case ql:this.setFocus(this.focusIndex-1,-1);return;case Ul:this.setFocus(this.menuItems.length-1,-1);return;case Kl:this.setFocus(0,1);return;default:return!0}}removeItemListeners(e=this.items){e.forEach(t=>{t.removeEventListener("focus",this.handleItemFocus),D.getNotifier(t).unsubscribe(this,"hidden")})}static elementIndent(e){const t=e.getAttribute("role"),r=e.querySelector("[slot=start]");return t&&t!==ae.menuitem?r?2:1:r?1:0}setItems(){var e;const t=Array.from(this.children);this.removeItemListeners(t),t.forEach(a=>D.getNotifier(a).subscribe(this,"hidden"));const r=t.filter(a=>!a.hasAttribute("hidden"));this.menuItems=r;const i=this.menuItems.filter(this.isMenuItemElement);i.length&&(this.focusIndex=0),i.forEach((a,l)=>{a.setAttribute("tabindex",l===0?"0":"-1"),a.addEventListener("focus",this.handleItemFocus)});const o=(e=this.menuItems)===null||e===void 0?void 0:e.filter(this.isMenuItemElement),s=o==null?void 0:o.reduce((a,l)=>{const c=An.elementIndent(l);return Math.max(a,c)},0);o==null||o.forEach(a=>{a instanceof Ge&&a.setAttribute("data-indent",`${s}`)})}handleChange(e,t){t==="hidden"&&this.setItems()}setFocus(e,t){if(this.menuItems!==void 0)for(;e>=0&&e<this.menuItems.length;){const r=this.menuItems[e];if(this.isFocusableElement(r)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=e,r.setAttribute("tabindex","0"),r.focus();break}e+=t}}}An.focusableElementRoles=ae;m([Ee],An.prototype,"items",void 0);function Ob(){return j`
    <template
      slot="${n=>n.slot?n.slot:n.isNestedMenu()?"submenu":void 0}"
      @keydown="${(n,e)=>n.handleMenuKeyDown(e.event)}"
      @focusout="${(n,e)=>n.handleFocusOut(e.event)}"
    >
      <slot ${at("items")}></slot>
    </template>
  `}const zb=Ob(),Pb=N`
  ${ye("flex")}

  :host {
    flex-direction: column;
    height: fit-content;
    max-width: 300px;
    min-width: 160px;
    width: auto;
    background-color: ${ge};
    border: 1px solid ${Jt};
    border-radius: ${de};
    box-shadow: ${gc};
    padding: 4px;
    row-gap: 2px;
  }
`,Fb=An.compose({name:`${z.prefix}-menu-list`,template:zb,styles:Pb});class wt extends he{constructor(){super(...arguments),this.slottedMenuList=[],this.slottedTriggers=[],this._open=!1,this.toggleMenu=()=>{var e;(e=this._menuList)===null||e===void 0||e.togglePopover(!this._open)},this.closeMenu=e=>{var t;(e==null?void 0:e.target)instanceof Ge&&(e.target.getAttribute("role")===ae.menuitemcheckbox||e.target.getAttribute("role")===ae.menuitemradio)||((t=this._menuList)===null||t===void 0||t.togglePopover(!1),this.closeOnScroll&&document.removeEventListener("scroll",this.closeMenu))},this.openMenu=e=>{var t;(t=this._menuList)===null||t===void 0||t.togglePopover(!0),e&&this.openOnContext&&e.preventDefault(),this.closeOnScroll&&document.addEventListener("scroll",this.closeMenu)},this.toggleHandler=e=>{var t;if(e.type==="toggle"&&e.newState){const r=e.newState==="open";(t=this._trigger)===null||t===void 0||t.setAttribute("aria-expanded",`${r}`),this._open=r,this.focusMenuList()}},this.triggerKeydownHandler=e=>{if(e.defaultPrevented)return;switch(e.key){case To:case ni:e.preventDefault(),this.toggleMenu();break;default:return!0}},this.documentClickHandler=e=>{e.composedPath().some(t=>t===this._trigger||t===this._menuList)||this.closeMenu()}}connectedCallback(){super.connectedCallback(),Gt.enqueue(()=>this.setComponent())}disconnectedCallback(){super.disconnectedCallback(),this.removeListeners()}setComponent(){this.$fastController.isConnected&&this.slottedMenuList.length&&this.slottedTriggers.length&&(this._trigger=this.slottedTriggers[0],this._menuList=this.slottedMenuList[0],this._trigger.setAttribute("aria-haspopup","true"),this._trigger.setAttribute("aria-expanded",`${this._open}`),this._menuList.setAttribute("popover",this.openOnContext?"manual":""),this.addListeners())}focusMenuList(){Gt.enqueue(()=>{this._menuList.focus()})}focusTrigger(){Gt.enqueue(()=>{this._trigger.focus()})}openOnHoverChanged(e,t){var r,i;t?(r=this._trigger)===null||r===void 0||r.addEventListener("mouseover",this.openMenu):(i=this._trigger)===null||i===void 0||i.removeEventListener("mouseover",this.openMenu)}persistOnItemClickChanged(e,t){var r,i;t?(i=this._menuList)===null||i===void 0||i.removeEventListener("change",this.closeMenu):(r=this._menuList)===null||r===void 0||r.addEventListener("change",this.closeMenu)}openOnContextChanged(e,t){var r,i;t?(r=this._trigger)===null||r===void 0||r.addEventListener("contextmenu",this.openMenu):(i=this._trigger)===null||i===void 0||i.removeEventListener("contextmenu",this.openMenu)}closeOnScrollChanged(e,t){t?document.addEventListener("scroll",this.closeMenu):document.removeEventListener("scroll",this.closeMenu)}addListeners(){var e,t,r,i,o,s;(e=this._menuList)===null||e===void 0||e.addEventListener("toggle",this.toggleHandler),(t=this._trigger)===null||t===void 0||t.addEventListener("keydown",this.triggerKeydownHandler),this.persistOnItemClick||(r=this._menuList)===null||r===void 0||r.addEventListener("change",this.closeMenu),this.openOnHover?(i=this._trigger)===null||i===void 0||i.addEventListener("mouseover",this.openMenu):this.openOnContext?((o=this._trigger)===null||o===void 0||o.addEventListener("contextmenu",this.openMenu),document.addEventListener("click",this.documentClickHandler)):(s=this._trigger)===null||s===void 0||s.addEventListener("click",this.toggleMenu)}removeListeners(){var e,t,r,i,o,s;(e=this._menuList)===null||e===void 0||e.removeEventListener("toggle",this.toggleHandler),(t=this._trigger)===null||t===void 0||t.removeEventListener("keydown",this.triggerKeydownHandler),this.persistOnItemClick||(r=this._menuList)===null||r===void 0||r.removeEventListener("change",this.closeMenu),this.openOnHover&&((i=this._trigger)===null||i===void 0||i.removeEventListener("mouseover",this.openMenu)),this.openOnContext?((o=this._trigger)===null||o===void 0||o.removeEventListener("contextmenu",this.openMenu),document.removeEventListener("click",this.documentClickHandler)):(s=this._trigger)===null||s===void 0||s.removeEventListener("click",this.toggleMenu)}menuKeydownHandler(e){if(e.defaultPrevented)return;switch(e.key){case Jh:e.preventDefault(),this._open&&(this.closeMenu(),this.focusTrigger());break;case ep:if(this._open&&this.closeMenu(),e.shiftKey&&e.composedPath()[0]!==this._trigger&&e.composedPath()[0].assignedSlot!==this.primaryAction)this.focusTrigger();else if(e.shiftKey)return!0;default:return!0}}}m([y({attribute:"open-on-hover",mode:"boolean"})],wt.prototype,"openOnHover",void 0);m([y({attribute:"open-on-context",mode:"boolean"})],wt.prototype,"openOnContext",void 0);m([y({attribute:"close-on-scroll",mode:"boolean"})],wt.prototype,"closeOnScroll",void 0);m([y({attribute:"persist-on-item-click",mode:"boolean"})],wt.prototype,"persistOnItemClick",void 0);m([y({mode:"boolean"})],wt.prototype,"split",void 0);m([Ee],wt.prototype,"slottedMenuList",void 0);m([Ee],wt.prototype,"slottedTriggers",void 0);m([Ee],wt.prototype,"primaryAction",void 0);function Mb(){return j`
    <template
      ?open-on-hover="${n=>n.openOnHover}"
      ?open-on-context="${n=>n.openOnContext}"
      ?close-on-scroll="${n=>n.closeOnScroll}"
      ?persist-on-item-click="${n=>n.persistOnItemClick}"
      @keydown="${(n,e)=>n.menuKeydownHandler(e.event)}"
    >
      <slot name="primary-action" ${st("primaryAction")}></slot>
      <slot name="trigger" ${at({property:"slottedTriggers",filter:qi()})}></slot>
      <slot ${at({property:"slottedMenuList",filter:qi()})}></slot>
    </template>
  `}const Nb=Mb(),Lb=N`
  ${ye("inline-block")}

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
    border-inline-end: ${Ne} solid ${Jn};
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  /* Keeps focus visible visuals above trigger slot*/
  :host([split]) ::slotted([slot='primary-action']:focus-visible) {
    z-index: 1;
  }

  :host([split]) ::slotted([slot='primary-action'][appearance='primary']) {
    border-inline-end: ${Ne} solid white;
  }

  :host([split]) ::slotted([slot='trigger']) {
    border-inline-start: 0;
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }
`,Db=wt.compose({name:`${z.prefix}-menu`,template:Nb,styles:Lb}),_b={primary:"primary",inverted:"inverted"},Rb={tiny:"tiny",extraSmall:"extra-small",small:"small",medium:"medium",large:"large",extraLarge:"extra-large",huge:"huge"};class Hb extends he{constructor(){super(),this.elementInternals=this.attachInternals(),this.elementInternals.role="progressbar"}}class Ro extends Hb{sizeChanged(e,t){K(this.elementInternals,e,t,Rb)}appearanceChanged(e,t){K(this.elementInternals,e,t,_b)}}m([y],Ro.prototype,"size",void 0);m([y],Ro.prototype,"appearance",void 0);const Vb=j`
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
`,jb=N`
  ${ye("inline-flex")}

  :host {
    --duration: 1.5s;
    --indicatorSize: ${Je};
    --size: 32px;
    height: var(--size);
    width: var(--size);
    contain: strict;
    content-visibility: auto;
  }

  :host(${jr}) {
    --indicatorSize: ${Qt};
    --size: 20px;
  }
  :host(${Vr}) {
    --indicatorSize: ${Qt};
    --size: 24px;
  }
  :host(${ue}) {
    --indicatorSize: ${Qt};
    --size: 28px;
  }
  :host(${ce}) {
    --indicatorSize: ${Je};
    --size: 36px;
  }
  :host(${Hr}) {
    --indicatorSize: ${Je};
    --size: 40px;
  }
  :host(${Sp}) {
    --indicatorSize: ${Ji};
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
    animation: none var(--duration) infinite ${Do};
  }

  .progress {
    animation-timing-function: linear;
    animation-name: spin-linear;
  }

  .background {
    border: var(--indicatorSize) solid ${sc};
    border-radius: 50%;
  }

  :host(${ea}) .background {
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
    color: ${Cf};
    box-sizing: border-box;
    border-radius: 50%;
    border: var(--indicatorSize) solid transparent;
    border-block-start-color: currentcolor;
    border-inline-end-color: currentcolor;
  }

  :host(${ea}) .indicator {
    color: ${Sf};
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
`.withBehaviors(Ft(N`
    .background {
      display: none;
    }
    .indicator {
      border-color: Canvas;
      border-block-start-color: Highlight;
      border-inline-end-color: Highlight;
    }
  `)),qb=Ro.compose({name:`${z.prefix}-spinner`,template:Vb,styles:jb});class Ho extends he{connectedCallback(){super.connectedCallback(),this.styles!==void 0&&this.$fastController.removeStyles(this.styles),this.styles=N`
      :host {
        --textContent: '${this.textContent}';
      }
    `,this.$fastController.addStyles(this.styles)}}m([y({mode:"boolean"})],Ho.prototype,"disabled",void 0);an(Ho,on);function Ub(n={}){return j`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
      ${sn(n)}
      <span class="tab-content"><slot></slot></span>
      ${In(n)}
    </template>
  `}const Kb=Ub({}),Wb=N`
  ${ye("inline-flex")}

  :host {
    position: relative;
    flex-direction: column;
    cursor: pointer;
    box-sizing: border-box;
    justify-content: center;
    line-height: ${We};
    font-family: ${Pe};
    font-size: ${De};
    color: ${Zn};
    fill: currentcolor;
    grid-row: 1;
    padding: ${Tt} ${It};
    border-radius: ${de};
  }
  :host .tab-content {
    display: inline-flex;
    flex-direction: column;
    padding: 0 2px;
  }

  :host([aria-selected='true']) {
    color: ${Se};
    font-weight: ${tn};
  }

  /* adds hidden textContent to prevent shifting ui on bold / unbolding of text */
  :host .tab-content::after {
    content: var(--textContent);
    visibility: hidden;
    height: 0;
    line-height: ${We};
    font-weight: ${tn};
  }

  :host([aria-selected='true'])::after {
    background-color: ${zo};
    border-radius: ${en};
    content: '';
    inset: 0;
    position: absolute;
    z-index: 2;
  }

  :host([aria-selected='false']:hover)::after {
    background-color: ${ci};
    border-radius: ${en};
    content: '';
    inset: 0;
    position: absolute;
    z-index: 1;
  }

  :host([aria-selected='true'][disabled])::after {
    background-color: ${ve};
  }

  ::slotted([slot='start']),
  ::slotted([slot='end']) {
    display: flex;
  }
  ::slotted([slot='start']) {
    margin-inline-end: 11px;
  }
  ::slotted([slot='end']) {
    margin-inline-start: 11px;
  }
  :host([disabled]) {
    cursor: not-allowed;
    fill: ${ve};
    color: ${ve};
  }

  :host([disabled]:hover)::after {
    background-color: unset;
  }

  :host(:focus) {
    outline: none;
  }

  :host(:focus-visible) {
    border-radius: ${Cn};
    box-shadow: 0 0 0 3px ${er};
    outline: 1px solid ${ac};
  }
`.withBehaviors(Ft(N`
    :host([aria-selected='true'])::after {
      background-color: Highlight;
    }
  `)),Gb=Ho.compose({name:`${z.prefix}-tab`,template:Kb,styles:Wb}),Xb=n=>n.getAttribute("aria-disabled")==="true",Qb=n=>n.hasAttribute("hidden"),vr=n=>!Xb(n)&&!Qb(n),fa={subtle:"subtle",transparent:"transparent"},Yb={small:"small",medium:"medium",large:"large"},bn=Zh;class lr extends he{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.disabled=!1,this.orientation=bn.horizontal,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.change=()=>{this.$emit("change",this.activetab)},this.handleTabClick=e=>{const t=e.currentTarget;t.nodeType===Node.ELEMENT_NODE&&vr(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{const t=rp(this);switch(e.key){case Vl:if(!this.isHorizontal())return;e.preventDefault(),this.adjust(t==="ltr"?-1:1);break;case jl:if(!this.isHorizontal())return;e.preventDefault(),this.adjust(t==="ltr"?1:-1);break;case ql:if(this.isHorizontal())return;e.preventDefault(),this.adjust(-1);break;case Hl:if(this.isHorizontal())return;e.preventDefault(),this.adjust(1);break;case Kl:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case Ul:e.preventDefault(),this.adjust(this.tabs.filter(r=>vr(r)).length-this.activeTabIndex-1);break}}}disabledChanged(e,t){Z(this.elementInternals,"disabled",t)}orientationChanged(e,t){this.elementInternals.ariaOrientation=t??bn.horizontal,K(this.elementInternals,e,t,bn),this.$fastController.isConnected&&this.setTabs()}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length>0&&(this.prevActiveTabIndex=this.tabs.findIndex(r=>r.id===e),this.setTabs())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length>0&&(this.tabIds=this.getTabIds(),this.setTabs())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}setTabs(){this.activeTabIndex=this.getActiveIndex(),this.tabs.forEach((e,t)=>{if(e.slot==="tab"){const r=this.activeTabIndex===t&&vr(e),i=this.tabIds[t];e.setAttribute("id",i),e.setAttribute("aria-selected",r?"true":"false"),e.addEventListener("click",this.handleTabClick),e.addEventListener("keydown",this.handleTabKeyDown),e.setAttribute("tabindex",r&&!this.disabled?"0":"-1"),r&&(this.activetab=e,this.activeid=i),this.change()}})}getTabIds(){return this.tabs.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`tab-${Wl()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===bn.horizontal}adjust(e){const t=this.tabs.filter(s=>vr(s)),r=t.indexOf(this.activetab),i=tp(0,t.length-1,r+e),o=this.tabs.indexOf(t[i]);o>-1&&this.activateTabByIndex(this.tabs,o)}activateTabByIndex(e,t){const r=e[t];this.activetab=r,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,r.focus(),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.activeTabIndex=this.getActiveIndex()}}m([y({mode:"boolean"})],lr.prototype,"disabled",void 0);m([y],lr.prototype,"orientation",void 0);m([y],lr.prototype,"activeid",void 0);m([Ee],lr.prototype,"tabs",void 0);class Vo extends lr{constructor(){super(...arguments),this.activeTabData={x:0,y:0,height:0,width:0},this.previousActiveTabData={x:0,y:0,height:0,width:0},this.activeTabOffset=0,this.activeTabScale=1,this.appearance=fa.transparent}appearanceChanged(e,t){K(this.elementInternals,e,t,fa)}sizeChanged(e,t){K(this.elementInternals,e,t,Yb)}calculateAnimationProperties(e){this.activeTabOffset=this.getTabPosition(e),this.activeTabScale=this.getTabScale(e)}getTabPosition(e){return this.orientation===bn.horizontal?this.previousActiveTabData.x-(e.getBoundingClientRect().x-this.getBoundingClientRect().x):this.previousActiveTabData.y-(e.getBoundingClientRect().y-this.getBoundingClientRect().y)}getTabScale(e){return this.orientation===bn.horizontal?this.previousActiveTabData.width/e.getBoundingClientRect().width:this.previousActiveTabData.height/e.getBoundingClientRect().height}applyUpdatedCSSValues(e){this.calculateAnimationProperties(e),this.setAnimationVars()}animationLoop(e){e.setAttribute("data-animate","false"),this.applyUpdatedCSSValues(e),this.previousActiveTabData=this.activeTabData,this.applyUpdatedCSSValues(e),e.setAttribute("data-animate","true")}setTabData(){var e,t,r,i;if(this.tabs&&this.tabs.length>0){const o=this.tabs,s=this.activetab||o[0],a=s==null?void 0:s.getBoundingClientRect(),l=this.getBoundingClientRect();this.activeTabData={x:a.x-l.x,y:a.y-l.y,height:a.height,width:a.width},((e=this.previousActiveTabData)===null||e===void 0?void 0:e.x)!==((t=this.activeTabData)===null||t===void 0?void 0:t.x)&&((r=this.previousActiveTabData)===null||r===void 0?void 0:r.y)!==((i=this.activeTabData)===null||i===void 0?void 0:i.y)&&(this.previousActiveTabData=this.activeTabData)}}setAnimationVars(){this.style.setProperty("--tabIndicatorOffset",`${this.activeTabOffset}px`),this.style.setProperty("--tabIndicatorScale",`${this.activeTabScale}`)}activeidChanged(e,t){super.activeidChanged(e,t),this.setTabData(),this.activetab&&this.animationLoop(this.activetab)}tabsChanged(){super.tabsChanged(),this.setTabData(),this.activetab&&this.animationLoop(this.activetab)}}m([y],Vo.prototype,"appearance",void 0);m([y],Vo.prototype,"size",void 0);const Zb=j`
  <template role="tablist">
    <slot name="tab" ${at("tabs")}></slot>
  </template>
`,Jb=N`
  ${ye("flex")}

  :host {
    --tabPaddingInline: inherit;
    --tabPaddingBlock: inherit;
    --tabIndicatorInsetInline: 0;
    --tabIndicatorInsetBlock: 0;
    box-sizing: border-box;
    color: ${Zn};
    flex-direction: row;
  }

  :host(${we}) {
    flex-direction: column;
  }

  :host ::slotted([role='tab']) {
    align-items: flex-start;
  }

  /* indicator animation  */
  :host ::slotted([slot='tab'][data-animate='true'])::after {
    transition-property: transform;
    transition-duration: ${bm};
    transition-timing-function: ${yc};
  }

  :host ::slotted([slot='tab'])::after {
    height: ${Je};
    margin-block-start: auto;
    transform-origin: left;
    transform: translateX(var(--tabIndicatorOffset)) scaleX(var(--tabIndicatorScale));
  }

  :host(${we}) ::slotted([slot='tab'])::after {
    width: ${Je};
    height: unset;
    margin-block-start: unset;
    transform-origin: top;
    transform: translateY(var(--tabIndicatorOffset)) scaleY(var(--tabIndicatorScale));
  }

  /* ::before adds a secondary indicator placeholder that appears right after click on the active tab */
  :host ::slotted([slot='tab'])::before {
    height: ${Je};
    border-radius: ${en};
    content: '';
    inset-inline: var(--tabIndicatorInsetInline);
    inset-block: var(--tabIndicatorInsetBlock);
    position: absolute;
    margin-top: auto;
  }

  :host ::slotted([slot='tab'])::before {
    inset-inline: var(--tabIndicatorInsetInline);
    inset-block: var(--tabIndicatorInsetBlock);
  }

  :host ::slotted([slot='tab'][aria-selected='true'])::before {
    background-color: ${ve};
  }

  :host ::slotted([slot='tab'][aria-selected='false']:hover)::after {
    height: ${Je};
    margin-block-start: auto;
    transform-origin: left;
  }

  :host(${we}) ::slotted([slot='tab'])::before,
  :host(${we}) ::slotted([slot='tab'][aria-selected='false']:hover)::after {
    height: unset;
    width: ${Je};
    margin-inline-end: auto;
    transform-origin: top;
  }

  :host(:where(${ue}, ${ce})) ::slotted([slot='tab']) {
    padding-inline: var(--tabPaddingInline);
    padding-block: var(--tabPaddingBlock);
  }

  :host(${ue}) ::slotted([slot='tab']) {
    --tabPaddingBlock: ${to};
    --tabPaddingInline: ${nn};
    font-size: ${De};
    line-height: ${We};
  }

  :host(${ce}) ::slotted([slot='tab']) {
    --tabPaddingBlock: ${mc};
    --tabPaddingInline: ${It};
    font-size: ${Ot};
    line-height: ${Bn};
  }

  /* horizontal spacing for indicator */
  :host ::slotted([slot='tab'])::after,
  :host ::slotted([slot='tab'])::before,
  :host ::slotted([slot='tab']:hover)::after {
    inset-inline: var(--tabIndicatorInsetInline);
  }

  :host ::slotted([slot='tab']) {
    --tabIndicatorInsetInline: ${It};
  }

  :host(${ue}) ::slotted([slot='tab']) {
    --tabIndicatorInsetInline: ${nn};
  }

  :host(${ce}) ::slotted([slot='tab']) {
    --tabIndicatorInsetInline: ${It};
  }

  :host(${we}) ::slotted([slot='tab']) {
    padding-block: var(--tabPaddingBlock);
  }

  :host(${we}) ::slotted([slot='tab']) {
    --tabPaddingBlock: ${Ze};
  }

  :host(${we}${ue}) ::slotted([slot='tab']) {
    --tabPaddingBlock: ${fm};
  }

  :host(${we}${ce}) ::slotted([slot='tab']) {
    --tabPaddingBlock: ${Ze};
  }

  :host(${we}) ::slotted([slot='tab'])::after,
  :host(${we}) ::slotted([slot='tab'])::before,
  :host(${we}) ::slotted([slot='tab']:hover)::after {
    inset-inline: 0;
    inset-block: var(--tabIndicatorInsetBlock);
  }

  :host(${we}) {
    --tabIndicatorInsetBlock: ${Ze};
  }

  :host(${we}${ue}) {
    --tabIndicatorInsetBlock: ${to};
  }

  :host(${we}${ce}) {
    --tabIndicatorInsetBlock: ${gm};
  }

  /* disabled styles */
  :host(${Be}) {
    cursor: not-allowed;
    color: ${ve};
  }

  :host(${Be}) ::slotted([slot='tab']) {
    pointer-events: none;
    cursor: not-allowed;
    color: ${ve};
  }

  :host(${Be}) ::slotted([slot='tab']:after) {
    background-color: ${ve};
  }

  :host(${Be}) ::slotted([slot='tab'][aria-selected='true'])::after {
    background-color: ${ve};
  }

  :host(${Be}) ::slotted([slot='tab']:hover):before {
    content: unset;
  }

  :host(${Oe}) ::slotted([slot='tab']:hover) {
    background-color: ${rc};
    color: ${Xl};
    fill: ${uf};
  }

  :host(${Oe}) ::slotted([slot='tab']:active) {
    background-color: ${Gi};
    fill: ${Gi};
    color: ${Se};
  }
`,ev=Vo.compose({name:`${z.prefix}-tablist`,template:Zb,styles:Jb}),tv={small:"small",medium:"medium",large:"large"},Kn={outline:"outline",filledLighter:"filled-lighter",filledDarker:"filled-darker"},nv=[Kn.filledLighter,Kn.filledDarker],yr={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};class ie extends he{defaultSlottedNodesChanged(){const e=this.getContent();this.defaultValue=e,this.value=e}labelSlottedNodesChanged(){this.labelEl&&(this.labelEl.hidden=!this.labelSlottedNodes.length),this.labelSlottedNodes.forEach(e=>{e.disabled=this.disabled,e.required=this.required})}autoResizeChanged(){this.maybeCreateAutoSizerEl(),Z(this.elementInternals,"auto-resize",this.autoResize)}disabledChanged(){this.setDisabledSideEffect(this.disabled)}get form(){return this.elementInternals.form}get labels(){return this.elementInternals.labels}readOnlyChanged(){this.elementInternals.ariaReadOnly=`${!!this.readOnly}`}requiredChanged(){var e;this.elementInternals.ariaRequired=`${!!this.required}`,!((e=this.labelSlottedNodes)===null||e===void 0)&&e.length&&this.labelSlottedNodes.forEach(t=>t.required=this.required)}resizeChanged(e,t){K(this.elementInternals,e,t,yr,"resize-"),Z(this.elementInternals,"resize",Io(yr,t)&&t!==yr.none)}get textLength(){return this.controlEl.textLength}get type(){return"textarea"}get validity(){return this.elementInternals.validity}get validationMessage(){return this.elementInternals.validationMessage||this.controlEl.validationMessage}get willValidate(){return this.elementInternals.willValidate}get defaultValue(){var e,t;return(t=(e=this.controlEl)===null||e===void 0?void 0:e.defaultValue)!==null&&t!==void 0?t:this.preConnectControlEl.defaultValue}set defaultValue(e){var t;const r=(t=this.controlEl)!==null&&t!==void 0?t:this.preConnectControlEl;r.defaultValue=e,this.controlEl&&!this.userInteracted&&(this.controlEl.value=e)}get value(){var e,t;return(t=(e=this.controlEl)===null||e===void 0?void 0:e.value)!==null&&t!==void 0?t:this.preConnectControlEl.value}set value(e){var t;const r=(t=this.controlEl)!==null&&t!==void 0?t:this.preConnectControlEl;r.value=e,this.setFormValue(e),this.setValidity()}constructor(){super(),this.elementInternals=this.attachInternals(),this.userInteracted=!1,this.preConnectControlEl=document.createElement("textarea"),this.autoResize=!1,this.disabled=!1,this.displayShadow=!1,this.readOnly=!1,this.required=!1,this.resize=yr.none,this.spellcheck=!1}connectedCallback(){super.connectedCallback(),this.setDefaultValue(),this.maybeCreateAutoSizerEl(),this.bindEvents(),this.observeControlElAttrs()}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.autoSizerObserver)===null||e===void 0||e.disconnect(),(t=this.controlElAttrObserver)===null||t===void 0||t.disconnect()}formResetCallback(){this.value=this.defaultValue}formDisabledCallback(e){this.setDisabledSideEffect(e),this.setValidity()}setFormValue(e,t){this.elementInternals.setFormValue(e,e??t)}checkValidity(){return this.elementInternals.checkValidity()}reportValidity(){return this.elementInternals.reportValidity()}setCustomValidity(e){this.elementInternals.setValidity({customError:!!e},e?e.toString():void 0),this.reportValidity()}setValidity(e,t,r){this.$fastController.isConnected&&(this.disabled||this.readOnly?this.elementInternals.setValidity({}):this.elementInternals.setValidity(e??this.controlEl.validity,t??this.controlEl.validationMessage,r??this.controlEl),this.userInteracted&&this.toggleUserValidityState())}select(){this.controlEl.select()}setDefaultValue(){this.defaultValue=this.innerHTML.trim()||this.preConnectControlEl.defaultValue||"",this.value=this.preConnectControlEl.value||this.defaultValue,this.setFormValue(this.value),this.setValidity(),this.preConnectControlEl=null}bindEvents(){this.controlEl.addEventListener("input",()=>this.userInteracted=!0,{once:!0})}getContent(){return this.defaultSlottedNodes.map(e=>{switch(e.nodeType){case Node.ELEMENT_NODE:return e.outerHTML;case Node.TEXT_NODE:return e.textContent.trim();default:return""}}).join("")||""}observeControlElAttrs(){this.controlElAttrObserver=new MutationObserver(()=>{this.setValidity()}),this.controlElAttrObserver.observe(this.controlEl,{attributes:!0,attributeFilter:["disabled","required","readonly","maxlength","minlength"]})}setDisabledSideEffect(e){var t;this.elementInternals.ariaDisabled=`${e}`,this.controlEl&&(this.controlEl.disabled=e),!((t=this.labelSlottedNodes)===null||t===void 0)&&t.length&&this.labelSlottedNodes.forEach(r=>r.disabled=this.disabled)}toggleUserValidityState(){Z(this.elementInternals,"user-invalid",!this.validity.valid),Z(this.elementInternals,"user-valid",this.validity.valid)}maybeCreateAutoSizerEl(){var e,t;if(!CSS.supports("field-sizing: content")){if(!this.autoResize){(e=this.autoSizerEl)===null||e===void 0||e.remove(),(t=this.autoSizerObserver)===null||t===void 0||t.disconnect();return}this.autoSizerEl||(this.autoSizerEl=document.createElement("div"),this.autoSizerEl.classList.add("auto-sizer"),this.autoSizerEl.ariaHidden="true"),this.shadowRoot.prepend(this.autoSizerEl),this.autoSizerObserver||(this.autoSizerObserver=new ResizeObserver((r,i)=>{var o;const s=window.getComputedStyle(this).writingMode.startsWith("horizontal")?"height":"width";this.style.getPropertyValue(s)!==""&&((o=this.autoSizerEl)===null||o===void 0||o.remove(),i.disconnect())})),this.autoSizerObserver.observe(this)}}handleControlInput(){this.autoResize&&this.autoSizerEl&&(this.autoSizerEl.textContent=this.value+" "),this.setFormValue(this.value),this.setValidity()}handleControlChange(){this.toggleUserValidityState(),this.$emit("change")}handleControlSelect(){this.$emit("select")}}ie.formAssociated=!0;m([Ee],ie.prototype,"defaultSlottedNodes",void 0);m([Ee],ie.prototype,"labelSlottedNodes",void 0);m([y],ie.prototype,"autocomplete",void 0);m([y({attribute:"auto-resize",mode:"boolean"})],ie.prototype,"autoResize",void 0);m([y({attribute:"dirname"})],ie.prototype,"dirName",void 0);m([y({mode:"boolean"})],ie.prototype,"disabled",void 0);m([y({attribute:"display-shadow",mode:"boolean"})],ie.prototype,"displayShadow",void 0);m([y({attribute:"form"})],ie.prototype,"initialForm",void 0);m([y({attribute:"maxlength",converter:Pt})],ie.prototype,"maxLength",void 0);m([y({attribute:"minlength",converter:Pt})],ie.prototype,"minLength",void 0);m([y],ie.prototype,"name",void 0);m([y],ie.prototype,"placeholder",void 0);m([y({attribute:"readonly",mode:"boolean"})],ie.prototype,"readOnly",void 0);m([y({mode:"boolean"})],ie.prototype,"required",void 0);m([y({mode:"fromView"})],ie.prototype,"resize",void 0);m([y({mode:"boolean"})],ie.prototype,"spellcheck",void 0);class pi extends ie{constructor(){super(...arguments),this.appearance=Kn.outline,this.block=!1}labelSlottedNodesChanged(){super.labelSlottedNodesChanged(),this.labelSlottedNodes.forEach(e=>{e.size=this.size})}appearanceChanged(e,t){Z(this.elementInternals,e,!1),Io(Kn,t)?Z(this.elementInternals,t,!0):this.appearance=Kn.outline}blockChanged(){Z(this.elementInternals,"block",this.block)}sizeChanged(e,t){K(this.elementInternals,e,t,tv)}handleChange(e,t){switch(t){case"size":this.labelSlottedNodes.forEach(r=>{r.size=this.size});break;case"appearance":case"displayShadow":this.maybeDisplayShadow();break}}connectedCallback(){super.connectedCallback(),this.maybeDisplayShadow(),D.getNotifier(this).subscribe(this,"appearance"),D.getNotifier(this).subscribe(this,"displayShadow"),D.getNotifier(this).subscribe(this,"size")}disconnectedCallback(){super.disconnectedCallback(),D.getNotifier(this).unsubscribe(this,"appearance"),D.getNotifier(this).unsubscribe(this,"displayShadow"),D.getNotifier(this).unsubscribe(this,"size")}maybeDisplayShadow(){Z(this.elementInternals,"display-shadow",this.displayShadow&&nv.includes(this.appearance))}}m([y({mode:"fromView"})],pi.prototype,"appearance",void 0);m([y({mode:"boolean"})],pi.prototype,"block",void 0);m([y],pi.prototype,"size",void 0);const rv=N`
  ${ye("inline-block")}

  :host {
    /* typography */
    --font-size: ${De};
    --line-height: ${We};

    /* layout */
    --padding-inline: ${It};
    --padding-block: ${to};
    --min-block-size: 52px;
    --block-size: var(--min-block-size);
    --inline-size: 18rem;
    --border-width: ${Ne};
    --control-padding-inline: ${Ue};

    /* colors */
    --color: ${Se};
    --background-color: ${ge};
    --border-color: ${Jn};
    --border-block-end-color: ${qr};
    --placeholder-color: ${Zl};
    --focus-indicator-color: ${zo};

    /* elevations */
    --box-shadow: none;

    /* others */
    --contain-size: size;
    --resize: none;

    color: var(--color);
    font-family: ${Pe};
    font-size: var(--font-size);
    font-weight: ${Le};
    line-height: var(--line-height);
    position: relative;
  }

  :host(:hover) {
    --border-color: ${ci};
    --border-block-end-color: ${Xi};
  }

  :host(:active) {
    --border-color: ${Oo};
    --border-block-end-color: ${Qi};
  }

  :host(:focus-within) {
    outline: none;
  }

  :host(${Rr}:not([hidden])) {
    display: block;
  }

  :host(${ue}) {
    --font-size: ${lt};
    --line-height: ${vt};
    --min-block-size: 40px;
    --padding-block: ${eo};
    --padding-inline: ${nn};
    --control-padding-inline: ${Ue};
  }

  :host(${ce}) {
    --font-size: ${Ot};
    --line-height: ${Bn};
    --min-block-size: 64px;
    --padding-block: ${Ze};
    --padding-inline: ${Tt};
    --control-padding-inline: ${nn};
  }

  :host(${qp}:not(:disabled)) {
    --resize: both;
  }

  :host(${Up}:not(:disabled)) {
    --resize: horizontal;
  }

  :host(${Kp}:not(:disabled)) {
    --resize: vertical;
  }

  :host(${Qs}) {
    --block-size: auto;
    --contain-size: inline-size;
  }

  :host(${gn}) {
    --background-color: ${Wi};
    --border-color: var(--background-color);
    --border-block-end-color: var(--border-color);
  }

  :host(${mn}) {
    --border-color: var(--background-color);
    --border-block-end-color: var(--border-color);
  }

  :host(${gn}${Js}),
  :host(${mn}${Js}) {
    --box-shadow: ${Lo};
  }

  :host(${lf}) {
    --border-color: ${Zi};
    --border-block-end-color: ${Zi};
  }

  :host(:disabled) {
    --color: ${ve};
    --background-color: ${it};
    --border-color: ${Ur};
    --border-block-end-color: var(--border-color);
    --box-shadow: none;
    --placeholder-color: ${ve};

    cursor: no-drop;
    user-select: none;
  }

  .root {
    background-color: var(--background-color);
    border: var(--border-width) solid var(--border-color);
    border-block-end-color: var(--border-block-end-color);
    border-radius: ${de};
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

  :host(${Rr}) .root {
    inline-size: auto;
  }

  .root::after {
    border-bottom: 2px solid var(--focus-indicator-color);
    border-radius: 0 0 ${de} ${de};
    box-sizing: border-box;
    clip-path: inset(calc(100% - 2px) 1px 0px);
    content: '';
    height: max(2px, ${de});
    inset: auto -1px 0;
    position: absolute;
    transform: scaleX(0);
    transition-delay: ${ui};
    transition-duration: ${bc};
    transition-property: transform;
  }

  :host(:focus-within) .root::after {
    transform: scaleX(1);
    transition-property: transform;
    transition-duration: ${vc};
    transition-delay: ${di};
  }

  :host([readonly]) .root::after,
  :host(:disabled) .root::after {
    content: none;
  }

  label {
    color: var(--color);
    display: flex;
    inline-size: fit-content;
    padding-block-end: ${eo};
    padding-inline-end: ${En};
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

  :host(${Qs}) .auto-sizer {
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
    color: ${Bo};
    background-color: ${nc};
  }
`.withBehaviors(Ft(N`
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
  `));function iv(){return j`
    <template>
      <label ${st("labelEl")} for="control" part="label">
        <slot
          name="label"
          ${at({property:"labelSlottedNodes",filter:Ui})}
        ></slot>
      </label>
      <div class="root" part="root">
        <textarea
          ${st("controlEl")}
          id="control"
          class="control"
          part="control"
          ?required="${n=>n.required}"
          ?disabled="${n=>n.disabled}"
          ?readonly="${n=>n.readOnly}"
          ?spellcheck="${n=>n.spellcheck}"
          autocomplete="${n=>n.autocomplete}"
          maxlength="${n=>n.maxLength}"
          minlength="${n=>n.minLength}"
          placeholder="${n=>n.placeholder}"
          @change="${n=>n.handleControlChange()}"
          @select="${n=>n.handleControlSelect()}"
          @input="${n=>n.handleControlInput()}"
        ></textarea>
      </div>
      <div hidden>
        <slot
          ${at({property:"defaultSlottedNodes",filter:Ui})}
        ></slot>
      </div>
    </template>
  `}const ov=iv(),sv=pi.compose({name:`${z.prefix}-textarea`,template:ov,styles:rv,shadowOptions:{delegatesFocus:!0}}),av={small:"small",medium:"medium",large:"large"},lv={outline:"outline",underline:"underline",filledLighter:"filled-lighter",filledDarker:"filled-darker"},cv={email:"email",password:"password",tel:"tel",text:"text",url:"url"},uv=["date","datetime-local","email","month","number","password","search","tel","text","time","url","week"];class Y extends he{constructor(){super(...arguments),this.type=cv.text,this._value=this.initialValue,this.dirtyValue=!1,this.elementInternals=this.attachInternals()}defaultSlottedNodesChanged(e,t){this.$fastController.isConnected&&(this.controlLabel.hidden=!(t!=null&&t.length))}initialValueChanged(){this.dirtyValue||(this.value=this.initialValue)}readOnlyChanged(){this.$fastController.isConnected&&(this.elementInternals.ariaReadOnly=`${!!this.readOnly}`)}requiredChanged(e,t){this.$fastController.isConnected&&(this.elementInternals.ariaRequired=`${!!t}`)}get validity(){return this.elementInternals.validity}get validationMessage(){return this.elementInternals.validationMessage||this.control.validationMessage}get value(){return D.track(this,"value"),this._value}set value(e){this._value=e,this.$fastController.isConnected&&(this.control.value=e,this.setFormValue(e),this.setValidity(),D.notify(this,"value"))}get willValidate(){return this.elementInternals.willValidate}get form(){return this.elementInternals.form}beforeinputHandler(e){return e.inputType==="insertLineBreak"&&this.implicitSubmit(),!0}changeHandler(e){return this.setValidity(),this.$emit("change",e,{bubbles:!0,composed:!0}),!0}checkValidity(){return this.elementInternals.checkValidity()}clickHandler(e){var t;return e.target===this&&((t=this.control)===null||t===void 0||t.click()),!0}connectedCallback(){super.connectedCallback(),this.setFormValue(this.value),this.setValidity()}focusinHandler(e){var t;return e.target===this&&((t=this.control)===null||t===void 0||t.focus()),!0}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}implicitSubmit(){if(!this.elementInternals.form)return;if(this.elementInternals.form.elements.length===1){this.elementInternals.form.requestSubmit();return}const e=[...this.elementInternals.form.elements],t=e.find(i=>i.getAttribute("type")==="submit");if(t){t.click();return}e.filter(i=>{var o;return uv.includes((o=i.getAttribute("type"))!==null&&o!==void 0?o:"")}).length>1||this.elementInternals.form.requestSubmit()}inputHandler(e){return this.dirtyValue=!0,this.value=this.control.value,!0}keydownHandler(e){return e.key==="Enter"&&this.implicitSubmit(),!0}select(){this.control.select(),this.$emit("select")}setCustomValidity(e){this.elementInternals.setValidity({customError:!0},e),this.reportValidity()}reportValidity(){return this.elementInternals.reportValidity()}setFormValue(e,t){this.elementInternals.setFormValue(e,e??t)}setValidity(e=this.control.validity,t=this.validationMessage,r=this.control){if(this.$fastController.isConnected){if(this.disabled){this.elementInternals.setValidity({});return}this.elementInternals.setValidity(e,t,r)}}}Y.formAssociated=!0;m([y],Y.prototype,"autocomplete",void 0);m([y({mode:"boolean"})],Y.prototype,"autofocus",void 0);m([Ee],Y.prototype,"defaultSlottedNodes",void 0);m([y],Y.prototype,"dirname",void 0);m([y({mode:"boolean"})],Y.prototype,"disabled",void 0);m([y({attribute:"form"})],Y.prototype,"formAttribute",void 0);m([y({attribute:"value",mode:"fromView"})],Y.prototype,"initialValue",void 0);m([y],Y.prototype,"list",void 0);m([y({converter:Pt})],Y.prototype,"maxlength",void 0);m([y({converter:Pt})],Y.prototype,"minlength",void 0);m([y({mode:"boolean"})],Y.prototype,"multiple",void 0);m([y],Y.prototype,"name",void 0);m([y],Y.prototype,"pattern",void 0);m([y],Y.prototype,"placeholder",void 0);m([y({attribute:"readonly",mode:"boolean"})],Y.prototype,"readOnly",void 0);m([y({mode:"boolean"})],Y.prototype,"required",void 0);m([y({converter:Pt})],Y.prototype,"size",void 0);m([y({converter:{fromView:n=>typeof n=="string"?["true",""].includes(n.trim().toLowerCase()):null,toView:n=>n.toString()}})],Y.prototype,"spellcheck",void 0);m([y],Y.prototype,"type",void 0);m([Ee],Y.prototype,"controlLabel",void 0);class fi extends Y{appearanceChanged(e,t){K(this.elementInternals,e,t,lv)}controlSizeChanged(e,t){K(this.elementInternals,e,t,av)}}m([y],fi.prototype,"appearance",void 0);m([y({attribute:"control-size"})],fi.prototype,"controlSize",void 0);an(fi,on);const dv=N`
  ${ye("block")}

  :host {
    font-family: ${Pe};
    font-size: ${De};
    font-weight: ${Le};
    line-height: ${We};
    max-width: 400px;
  }
  .label {
    display: flex;
    color: ${Se};
    padding-bottom: ${eo};
    flex-shrink: 0;
    padding-inline-end: ${En};
  }

  .label[hidden],
  :host(:empty) .label {
    display: none;
  }

  .root {
    align-items: center;
    background-color: ${ge};
    border: ${Ne} solid ${Jn};
    border-bottom-color: ${qr};
    border-radius: ${de};
    box-sizing: border-box;
    height: 32px;
    display: inline-flex;
    flex-direction: row;
    gap: ${Ue};
    padding: 0 ${It};
    position: relative;
    width: 100%;
  }

  :has(.control:user-invalid) {
    border-color: ${Zi};
  }

  .root::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: -1px;
    bottom: 0px;
    right: -1px;
    height: max(2px, ${de});
    border-radius: 0 0 ${de} ${de};
    border-bottom: 2px solid ${zo};
    clip-path: inset(calc(100% - 2px) 1px 0px);
    transform: scaleX(0);
    transition-property: transform;
    transition-duration: ${bc};
    transition-delay: ${ui};
  }
  .control {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: ${Se};
    border-radius: ${de};
    background: ${it};
    font-family: ${Pe};
    font-weight: ${Le};
    font-size: ${De};
    border: none;
    vertical-align: center;
  }
  .control:focus-visible {
    outline: 0;
    border: 0;
  }
  .control::placeholder {
    color: ${Zl};
  }
  :host ::slotted([slot='start']),
  :host ::slotted([slot='end']) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${rt};
    font-size: ${sr};
  }
  :host ::slotted([slot='start']) {
    padding-right: ${Ue};
  }
  :host ::slotted([slot='end']) {
    padding-left: ${Ue};
    gap: ${En};
  }
  :host(:hover) .root {
    border-color: ${ci};
    border-bottom-color: ${Xi};
  }
  :host(:active) .root {
    border-color: ${Oo};
  }
  :host(:focus-within) .root {
    outline: transparent solid 2px;
    border-bottom: 0;
  }
  :host(:focus-within) .root::after {
    transform: scaleX(1);
    transition-property: transform;
    transition-duration: ${vc};
    transition-delay: ${di};
  }
  :host(:focus-within:active) .root:after {
    border-bottom-color: ${Ef};
  }
  :host(${xe}:focus-within) .root {
    border: ${Ne} solid ${Jn};
  }
  :host(:focus-within) .control {
    color: ${Se};
  }
  :host([disabled]) .root {
    background: ${it};
    border: ${Ne} solid ${Ur};
  }
  :host([disabled]) .control::placeholder,
  :host([disabled]) ::slotted([slot='start']),
  :host([disabled]) ::slotted([slot='end']) {
    color: ${ve};
  }
  ::selection {
    color: ${Bo};
    background-color: ${nc};
  }
  :host(${ue}) .control {
    font-size: ${lt};
    font-weight: ${Le};
    line-height: ${vt};
  }
  :host(${ue}) .root {
    height: 24px;
    gap: ${Ue};
    padding: 0 ${nn};
  }
  :host(${ue}) ::slotted([slot='start']),
  :host(${ue}) ::slotted([slot='end']) {
    font-size: ${Ot};
  }
  :host(${ce}) .control {
    font-size: ${Ot};
    font-weight: ${Le};
    line-height: ${Bn};
  }
  :host(${ce}) .root {
    height: 40px;
    gap: ${Un};
    padding: 0 ${Tt};
  }
  :host(${ce}) ::slotted([slot='start']),
  :host(${ce}) ::slotted([slot='end']) {
    font-size: ${Mo};
  }
  :host(${qt}) .root {
    background: ${it};
    border: 0;
    border-radius: 0;
    border-bottom: ${Ne} solid ${qr};
  }
  :host(${qt}:hover) .root {
    border-bottom-color: ${Xi};
  }
  :host(${qt}:active) .root {
    border-bottom-color: ${Qi};
  }
  :host(${qt}:focus-within) .root {
    border: 0;
    border-bottom-color: ${Qi};
  }
  :host(${qt}[disabled]) .root {
    border-bottom-color: ${Ur};
  }
  :host(${mn}) .root,
  :host(${gn}) .root {
    border: ${Ne} solid ${Jt};
    box-shadow: ${Lo};
  }
  :host(${mn}) .root {
    background: ${ge};
  }
  :host(${gn}) .root {
    background: ${Wi};
  }
  :host(${mn}:hover) .root,
  :host(${gn}:hover) .root {
    border-color: ${ca};
  }
  :host(${mn}:active) .root,
  :host(${gn}:active) .root {
    border-color: ${ca};
    background: ${Wi};
  }
`;function hv(n={}){return j`
    <template
      @beforeinput="${(e,t)=>e.beforeinputHandler(t.event)}"
      @focusin="${(e,t)=>e.focusinHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
    >
      <label part="label" for="control" class="label" ${st("controlLabel")}>
        <slot
          ${at({property:"defaultSlottedNodes",filter:Ui})}
        ></slot>
      </label>
      <div class="root" part="root">
        ${sn(n)}
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
          ${st("control")}
        />
        ${In(n)}
      </div>
    </template>
  `}const pv=hv(),fv=fi.compose({name:`${z.prefix}-text-input`,template:pv,styles:dv,shadowOptions:{delegatesFocus:!0}}),gv={_100:"100",_200:"200",_300:"300",_400:"400",_500:"500",_600:"600",_700:"700",_800:"800",_900:"900",_1000:"1000"},mv={base:"base",numeric:"numeric",monospace:"monospace"},bv={medium:"medium",regular:"regular",semibold:"semibold",bold:"bold"},vv={start:"start",end:"end",center:"center",justify:"justify"};class Xe extends he{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.nowrap=!1,this.truncate=!1,this.italic=!1,this.underline=!1,this.strikethrough=!1,this.block=!1}sizeChanged(e,t){K(this.elementInternals,e,t,gv,"size-")}fontChanged(e,t){K(this.elementInternals,e,t,mv)}weightChanged(e,t){K(this.elementInternals,e,t,bv)}alignChanged(e,t){K(this.elementInternals,e,t,vv)}connectedCallback(){super.connectedCallback(),D.getNotifier(this).subscribe(this),Object.keys(this.$fastController.definition.attributeLookup).forEach(e=>{this.handleChange(this,e)})}disconnectedCallback(){super.disconnectedCallback(),D.getNotifier(this).unsubscribe(this)}handleChange(e,t){switch(t){case"nowrap":case"truncate":case"italic":case"underline":case"strikethrough":case"block":Z(this.elementInternals,t,!!this[t]);break}}}m([y({mode:"boolean"})],Xe.prototype,"nowrap",void 0);m([y({mode:"boolean"})],Xe.prototype,"truncate",void 0);m([y({mode:"boolean"})],Xe.prototype,"italic",void 0);m([y({mode:"boolean"})],Xe.prototype,"underline",void 0);m([y({mode:"boolean"})],Xe.prototype,"strikethrough",void 0);m([y({mode:"boolean"})],Xe.prototype,"block",void 0);m([y],Xe.prototype,"size",void 0);m([y],Xe.prototype,"font",void 0);m([y],Xe.prototype,"weight",void 0);m([y],Xe.prototype,"align",void 0);const yv=j`<slot></slot>`,wv=N`
  ${ye("inline")}

  :host {
    contain: content;
    font-family: ${Pe};
    font-size: ${De};
    line-height: ${We};
    font-weight: ${Le};
    text-align: start;
  }

  :host(${ta}),
  :host(${ta}) ::slotted(*) {
    white-space: nowrap;
    overflow: hidden;
  }
  :host(${ra}),
  :host(${ra}) ::slotted(*) {
    text-overflow: ellipsis;
  }
  :host(${Rr}) {
    display: block;
  }
  :host(${Cp}) {
    font-style: italic;
  }
  :host(${qt}) {
    text-decoration-line: underline;
  }
  :host(${na}) {
    text-decoration-line: line-through;
  }
  :host(${qt}${na}) {
    text-decoration-line: line-through underline;
  }
  :host(${Yp}) {
    font-size: ${Fo};
    line-height: ${pc};
  }
  :host(${Zp}) {
    font-size: ${lt};
    line-height: ${vt};
  }
  :host(${Jp}) {
    font-size: ${Ot};
    line-height: ${Bn};
  }
  :host(${ef}) {
    font-size: ${sr};
    line-height: ${No};
  }
  :host(${tf}) {
    font-size: ${Mo};
    line-height: ${im};
  }
  :host(${nf}) {
    font-size: ${Zg};
    line-height: ${om};
  }
  :host(${rf}) {
    font-size: ${Jg};
    line-height: ${sm};
  }
  :host(${of}) {
    font-size: ${em};
    line-height: ${am};
  }
  :host(${Qp}) {
    font-size: ${tm};
    line-height: ${lm};
  }
  :host(${Fp}) {
    font-family: ${Qg};
  }
  :host(${Np}) {
    font-family: ${Yg};
  }
  :host(${zp}) {
    font-weight: ${nm};
  }
  :host(${Xp}) {
    font-weight: ${tn};
  }
  :host(${dp}) {
    font-weight: ${rm};
  }
  :host(${gp}) {
    text-align: center;
  }
  :host(${wp}) {
    text-align: end;
  }
  :host(${Ep}) {
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
`,kv=Xe.compose({name:`${z.prefix}-text`,template:yv,styles:wv}),xv=ne.getCookie("CLIPSESSIONTOKEN"),$v="https://api.clippsly.com/endpoints/data/track?id=";class ro extends Fe{async connect(){var r;const e=await fetch($v+this.idValue.toString(),{method:"GET",headers:{Authorization:`Bearer ${xv}`}}).then(i=>i.json()).catch(i=>Bt.loadPage("/error?code="+(i.status|404)));this.trackNameTarget.textContent=e.releaseName,this.explicitIconTarget.hidden=!e.isExplicit,this.aiMusicIconTarget.hidden=!e.isArtificiallyGenerated,this.artistPfpTarget.src=e.releaseAuthor.authorAvatar,this.artistDisplayTarget.textContent=e.releaseAuthor.authorDisplay,this.artistVerifiedTarget.hidden=!e.releaseAuthor.authorVerified,this.artistUsernameTarget.textContent=e.releaseAuthor.authorUsername,this.artistLinkTarget.href=`/users/${e.releaseAuthor.authorUsername}`,this.trackDurationTarget.textContent=e.additionalData.audioDuration,this.trackDescriptionTarget.textContent=e.additionalData.releaseDescription||"No description provided.",this.trackCoverTarget.src=e.additionalData.releaseCoverArt;const t=this.trackCoverTarget.cloneNode(!1);t.classList.add("backlight"),(r=this.trackCoverTarget.parentNode)==null||r.append(t),this.trackLoadingTargets.forEach(i=>{i.classList.remove("skeleton-load-bg")}),await this.loadMoreFromArtist(e.releaseAuthor.authorUsername),this.element.ariaHidden="false"}async loadMoreFromArtist(e){fetch(`https://api.clippsly.com/endpoints/data/track?username=${e}`).then(t=>t.json()).then(t=>{t.sort((i,o)=>o.releaseID-i.releaseID);const r=this.moreFromArtistTarget;r.innerHTML="",t.slice(0,6).forEach(i=>{r.append(ne.createTrack({ID:i.releaseID,Title:i.releaseName,Artist:0,Genre:"Unknown",ArtCover:i.additionalData.releaseCoverArt,Audio:"https://cdn.clippsly.com/submissions/audio/bc44279d62fac0a8e56a956c91dc94d8f0e86d17.mp3",Description:i.additionalData.releaseDescription||"",commentsOff:!1,isModerated:!1,isExplicit:!1,isProtected:!1,isUnderReview:!1,isArtificiallyGenerated:!1,audio_duration:i.additionalData.audioDuration,releaseDate:i.additionalData.premiereDate||0,releaseAuthor:{authorUsername:i.releaseAuthor.authorUsername||"FIXME",authorDisplay:i.releaseAuthor.authorDisplay,authorAvatar:i.releaseAuthor.authorAvatar,authorVerified:i.releaseAuthor.authorVerified}},!0))})}).catch(()=>{this.moreFromArtistTarget.innerHTML="<p>Could not load tracks from this author.</p>"})}}fe(ro,"targets",["trackCover","trackName","explicitIcon","aiMusicIcon","trackDuration","artistPfp","artistDisplay","artistVerified","artistUsername","artistLink","trackDescription","moreFromArtist","trackLoading"]),fe(ro,"values",{id:Number});const Sv={};function jo(n,e){const t=Sv,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return Ic(n,r,i)}function Ic(n,e,t){if(Cv(n)){if("value"in n)return n.type==="html"&&!t?"":n.value;if(e&&"alt"in n&&n.alt)return n.alt;if("children"in n)return ga(n.children,e,t)}return Array.isArray(n)?ga(n,e,t):""}function ga(n,e,t){const r=[];let i=-1;for(;++i<n.length;)r[i]=Ic(n[i],e,t);return r.join("")}function Cv(n){return!!(n&&typeof n=="object")}const ma=document.createElement("i");function qo(n){const e="&"+n+";";ma.innerHTML=e;const t=ma.textContent;return t.charCodeAt(t.length-1)===59&&n!=="semi"||t===e?!1:t}function ut(n,e,t,r){const i=n.length;let o=0,s;if(e<0?e=-e>i?0:i+e:e=e>i?i:e,t=t>0?t:0,r.length<1e4)s=Array.from(r),s.unshift(e,t),n.splice(...s);else for(t&&n.splice(e,t);o<r.length;)s=r.slice(o,o+1e4),s.unshift(e,0),n.splice(...s),o+=1e4,e+=1e4}function Me(n,e){return n.length>0?(ut(n,n.length,0,e),n):e}const ba={}.hasOwnProperty;function Ev(n){const e={};let t=-1;for(;++t<n.length;)Av(e,n[t]);return e}function Av(n,e){let t;for(t in e){const i=(ba.call(n,t)?n[t]:void 0)||(n[t]={}),o=e[t];let s;if(o)for(s in o){ba.call(i,s)||(i[s]=[]);const a=o[s];Tv(i[s],Array.isArray(a)?a:a?[a]:[])}}}function Tv(n,e){let t=-1;const r=[];for(;++t<e.length;)(e[t].add==="after"?n:r).push(e[t]);ut(n,0,0,r)}function Bc(n,e){const t=Number.parseInt(n,e);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function wn(n){return n.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const tt=Mt(/[A-Za-z]/),ze=Mt(/[\dA-Za-z]/),Iv=Mt(/[#-'*+\--9=?A-Z^-~]/);function io(n){return n!==null&&(n<32||n===127)}const oo=Mt(/\d/),Bv=Mt(/[\dA-Fa-f]/),Ov=Mt(/[!-/:-@[-`{-~]/);function I(n){return n!==null&&n<-2}function Ce(n){return n!==null&&(n<0||n===32)}function _(n){return n===-2||n===-1||n===32}const zv=Mt(new RegExp("\\p{P}|\\p{S}","u")),Pv=Mt(/\s/);function Mt(n){return e;function e(t){return t!==null&&t>-1&&n.test(String.fromCharCode(t))}}function Pn(n){const e=[];let t=-1,r=0,i=0;for(;++t<n.length;){const o=n.charCodeAt(t);let s="";if(o===37&&ze(n.charCodeAt(t+1))&&ze(n.charCodeAt(t+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const a=n.charCodeAt(t+1);o<56320&&a>56319&&a<57344?(s=String.fromCharCode(o,a),i=1):s="�"}else s=String.fromCharCode(o);s&&(e.push(n.slice(r,t),encodeURIComponent(s)),r=t+i+1,s=""),i&&(t+=i,i=0)}return e.join("")+n.slice(r)}function U(n,e,t,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(l){return _(l)?(n.enter(t),a(l)):e(l)}function a(l){return _(l)&&o++<i?(n.consume(l),a):(n.exit(t),e(l))}}const Fv={tokenize:Mv};function Mv(n){const e=n.attempt(this.parser.constructs.contentInitial,r,i);let t;return e;function r(a){if(a===null){n.consume(a);return}return n.enter("lineEnding"),n.consume(a),n.exit("lineEnding"),U(n,e,"linePrefix")}function i(a){return n.enter("paragraph"),o(a)}function o(a){const l=n.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=l),t=l,s(a)}function s(a){if(a===null){n.exit("chunkText"),n.exit("paragraph"),n.consume(a);return}return I(a)?(n.consume(a),n.exit("chunkText"),o):(n.consume(a),s)}}const Nv={tokenize:Lv},va={tokenize:Dv};function Lv(n){const e=this,t=[];let r=0,i,o,s;return a;function a(E){if(r<t.length){const G=t[r];return e.containerState=G[1],n.attempt(G[0].continuation,l,c)(E)}return c(E)}function l(E){if(r++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,i&&F();const G=e.events.length;let Q=G,w;for(;Q--;)if(e.events[Q][0]==="exit"&&e.events[Q][1].type==="chunkFlow"){w=e.events[Q][1].end;break}$(r);let R=G;for(;R<e.events.length;)e.events[R][1].end={...w},R++;return ut(e.events,Q+1,0,e.events.slice(G)),e.events.length=R,c(E)}return a(E)}function c(E){if(r===t.length){if(!i)return p(E);if(i.currentConstruct&&i.currentConstruct.concrete)return x(E);e.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return e.containerState={},n.check(va,u,d)(E)}function u(E){return i&&F(),$(r),p(E)}function d(E){return e.parser.lazy[e.now().line]=r!==t.length,s=e.now().offset,x(E)}function p(E){return e.containerState={},n.attempt(va,h,x)(E)}function h(E){return r++,t.push([e.currentConstruct,e.containerState]),p(E)}function x(E){if(E===null){i&&F(),$(0),n.consume(E);return}return i=i||e.parser.flow(e.now()),n.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),C(E)}function C(E){if(E===null){P(n.exit("chunkFlow"),!0),$(0),n.consume(E);return}return I(E)?(n.consume(E),P(n.exit("chunkFlow")),r=0,e.interrupt=void 0,a):(n.consume(E),C)}function P(E,G){const Q=e.sliceStream(E);if(G&&Q.push(null),E.previous=o,o&&(o.next=E),o=E,i.defineSkip(E.start),i.write(Q),e.parser.lazy[E.start.line]){let w=i.events.length;for(;w--;)if(i.events[w][1].start.offset<s&&(!i.events[w][1].end||i.events[w][1].end.offset>s))return;const R=e.events.length;let J=R,H,W;for(;J--;)if(e.events[J][0]==="exit"&&e.events[J][1].type==="chunkFlow"){if(H){W=e.events[J][1].end;break}H=!0}for($(r),w=R;w<e.events.length;)e.events[w][1].end={...W},w++;ut(e.events,J+1,0,e.events.slice(R)),e.events.length=w}}function $(E){let G=t.length;for(;G-- >E;){const Q=t[G];e.containerState=Q[1],Q[0].exit.call(e,n)}t.length=E}function F(){i.write([null]),o=void 0,i=void 0,e.containerState._closeFlow=void 0}}function Dv(n,e,t){return U(n,n.attempt(this.parser.constructs.document,e,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Kr(n){if(n===null||Ce(n)||Pv(n))return 1;if(zv(n))return 2}function Uo(n,e,t){const r=[];let i=-1;for(;++i<n.length;){const o=n[i].resolveAll;o&&!r.includes(o)&&(e=o(e,t),r.push(o))}return e}const so={name:"attention",resolveAll:_v,tokenize:Rv};function _v(n,e){let t=-1,r,i,o,s,a,l,c,u;for(;++t<n.length;)if(n[t][0]==="enter"&&n[t][1].type==="attentionSequence"&&n[t][1]._close){for(r=t;r--;)if(n[r][0]==="exit"&&n[r][1].type==="attentionSequence"&&n[r][1]._open&&e.sliceSerialize(n[r][1]).charCodeAt(0)===e.sliceSerialize(n[t][1]).charCodeAt(0)){if((n[r][1]._close||n[t][1]._open)&&(n[t][1].end.offset-n[t][1].start.offset)%3&&!((n[r][1].end.offset-n[r][1].start.offset+n[t][1].end.offset-n[t][1].start.offset)%3))continue;l=n[r][1].end.offset-n[r][1].start.offset>1&&n[t][1].end.offset-n[t][1].start.offset>1?2:1;const d={...n[r][1].end},p={...n[t][1].start};ya(d,-l),ya(p,l),s={type:l>1?"strongSequence":"emphasisSequence",start:d,end:{...n[r][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...n[t][1].start},end:p},o={type:l>1?"strongText":"emphasisText",start:{...n[r][1].end},end:{...n[t][1].start}},i={type:l>1?"strong":"emphasis",start:{...s.start},end:{...a.end}},n[r][1].end={...s.start},n[t][1].start={...a.end},c=[],n[r][1].end.offset-n[r][1].start.offset&&(c=Me(c,[["enter",n[r][1],e],["exit",n[r][1],e]])),c=Me(c,[["enter",i,e],["enter",s,e],["exit",s,e],["enter",o,e]]),c=Me(c,Uo(e.parser.constructs.insideSpan.null,n.slice(r+1,t),e)),c=Me(c,[["exit",o,e],["enter",a,e],["exit",a,e],["exit",i,e]]),n[t][1].end.offset-n[t][1].start.offset?(u=2,c=Me(c,[["enter",n[t][1],e],["exit",n[t][1],e]])):u=0,ut(n,r-1,t-r+3,c),t=r+c.length-u-2;break}}for(t=-1;++t<n.length;)n[t][1].type==="attentionSequence"&&(n[t][1].type="data");return n}function Rv(n,e){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Kr(r);let o;return s;function s(l){return o=l,n.enter("attentionSequence"),a(l)}function a(l){if(l===o)return n.consume(l),a;const c=n.exit("attentionSequence"),u=Kr(l),d=!u||u===2&&i||t.includes(l),p=!i||i===2&&u||t.includes(r);return c._open=!!(o===42?d:d&&(i||!p)),c._close=!!(o===42?p:p&&(u||!d)),e(l)}}function ya(n,e){n.column+=e,n.offset+=e,n._bufferIndex+=e}const Hv={name:"autolink",tokenize:Vv};function Vv(n,e,t){let r=0;return i;function i(h){return n.enter("autolink"),n.enter("autolinkMarker"),n.consume(h),n.exit("autolinkMarker"),n.enter("autolinkProtocol"),o}function o(h){return tt(h)?(n.consume(h),s):h===64?t(h):c(h)}function s(h){return h===43||h===45||h===46||ze(h)?(r=1,a(h)):c(h)}function a(h){return h===58?(n.consume(h),r=0,l):(h===43||h===45||h===46||ze(h))&&r++<32?(n.consume(h),a):(r=0,c(h))}function l(h){return h===62?(n.exit("autolinkProtocol"),n.enter("autolinkMarker"),n.consume(h),n.exit("autolinkMarker"),n.exit("autolink"),e):h===null||h===32||h===60||io(h)?t(h):(n.consume(h),l)}function c(h){return h===64?(n.consume(h),u):Iv(h)?(n.consume(h),c):t(h)}function u(h){return ze(h)?d(h):t(h)}function d(h){return h===46?(n.consume(h),r=0,u):h===62?(n.exit("autolinkProtocol").type="autolinkEmail",n.enter("autolinkMarker"),n.consume(h),n.exit("autolinkMarker"),n.exit("autolink"),e):p(h)}function p(h){if((h===45||ze(h))&&r++<63){const x=h===45?p:d;return n.consume(h),x}return t(h)}}const gi={partial:!0,tokenize:jv};function jv(n,e,t){return r;function r(o){return _(o)?U(n,i,"linePrefix")(o):i(o)}function i(o){return o===null||I(o)?e(o):t(o)}}const Oc={continuation:{tokenize:Uv},exit:Kv,name:"blockQuote",tokenize:qv};function qv(n,e,t){const r=this;return i;function i(s){if(s===62){const a=r.containerState;return a.open||(n.enter("blockQuote",{_container:!0}),a.open=!0),n.enter("blockQuotePrefix"),n.enter("blockQuoteMarker"),n.consume(s),n.exit("blockQuoteMarker"),o}return t(s)}function o(s){return _(s)?(n.enter("blockQuotePrefixWhitespace"),n.consume(s),n.exit("blockQuotePrefixWhitespace"),n.exit("blockQuotePrefix"),e):(n.exit("blockQuotePrefix"),e(s))}}function Uv(n,e,t){const r=this;return i;function i(s){return _(s)?U(n,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return n.attempt(Oc,e,t)(s)}}function Kv(n){n.exit("blockQuote")}const zc={name:"characterEscape",tokenize:Wv};function Wv(n,e,t){return r;function r(o){return n.enter("characterEscape"),n.enter("escapeMarker"),n.consume(o),n.exit("escapeMarker"),i}function i(o){return Ov(o)?(n.enter("characterEscapeValue"),n.consume(o),n.exit("characterEscapeValue"),n.exit("characterEscape"),e):t(o)}}const Pc={name:"characterReference",tokenize:Gv};function Gv(n,e,t){const r=this;let i=0,o,s;return a;function a(d){return n.enter("characterReference"),n.enter("characterReferenceMarker"),n.consume(d),n.exit("characterReferenceMarker"),l}function l(d){return d===35?(n.enter("characterReferenceMarkerNumeric"),n.consume(d),n.exit("characterReferenceMarkerNumeric"),c):(n.enter("characterReferenceValue"),o=31,s=ze,u(d))}function c(d){return d===88||d===120?(n.enter("characterReferenceMarkerHexadecimal"),n.consume(d),n.exit("characterReferenceMarkerHexadecimal"),n.enter("characterReferenceValue"),o=6,s=Bv,u):(n.enter("characterReferenceValue"),o=7,s=oo,u(d))}function u(d){if(d===59&&i){const p=n.exit("characterReferenceValue");return s===ze&&!qo(r.sliceSerialize(p))?t(d):(n.enter("characterReferenceMarker"),n.consume(d),n.exit("characterReferenceMarker"),n.exit("characterReference"),e)}return s(d)&&i++<o?(n.consume(d),u):t(d)}}const wa={partial:!0,tokenize:Qv},ka={concrete:!0,name:"codeFenced",tokenize:Xv};function Xv(n,e,t){const r=this,i={partial:!0,tokenize:Q};let o=0,s=0,a;return l;function l(w){return c(w)}function c(w){const R=r.events[r.events.length-1];return o=R&&R[1].type==="linePrefix"?R[2].sliceSerialize(R[1],!0).length:0,a=w,n.enter("codeFenced"),n.enter("codeFencedFence"),n.enter("codeFencedFenceSequence"),u(w)}function u(w){return w===a?(s++,n.consume(w),u):s<3?t(w):(n.exit("codeFencedFenceSequence"),_(w)?U(n,d,"whitespace")(w):d(w))}function d(w){return w===null||I(w)?(n.exit("codeFencedFence"),r.interrupt?e(w):n.check(wa,C,G)(w)):(n.enter("codeFencedFenceInfo"),n.enter("chunkString",{contentType:"string"}),p(w))}function p(w){return w===null||I(w)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),d(w)):_(w)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),U(n,h,"whitespace")(w)):w===96&&w===a?t(w):(n.consume(w),p)}function h(w){return w===null||I(w)?d(w):(n.enter("codeFencedFenceMeta"),n.enter("chunkString",{contentType:"string"}),x(w))}function x(w){return w===null||I(w)?(n.exit("chunkString"),n.exit("codeFencedFenceMeta"),d(w)):w===96&&w===a?t(w):(n.consume(w),x)}function C(w){return n.attempt(i,G,P)(w)}function P(w){return n.enter("lineEnding"),n.consume(w),n.exit("lineEnding"),$}function $(w){return o>0&&_(w)?U(n,F,"linePrefix",o+1)(w):F(w)}function F(w){return w===null||I(w)?n.check(wa,C,G)(w):(n.enter("codeFlowValue"),E(w))}function E(w){return w===null||I(w)?(n.exit("codeFlowValue"),F(w)):(n.consume(w),E)}function G(w){return n.exit("codeFenced"),e(w)}function Q(w,R,J){let H=0;return W;function W(L){return w.enter("lineEnding"),w.consume(L),w.exit("lineEnding"),T}function T(L){return w.enter("codeFencedFence"),_(L)?U(w,A,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(L):A(L)}function A(L){return L===a?(w.enter("codeFencedFenceSequence"),X(L)):J(L)}function X(L){return L===a?(H++,w.consume(L),X):H>=s?(w.exit("codeFencedFenceSequence"),_(L)?U(w,ee,"whitespace")(L):ee(L)):J(L)}function ee(L){return L===null||I(L)?(w.exit("codeFencedFence"),R(L)):J(L)}}}function Qv(n,e,t){const r=this;return i;function i(s){return s===null?t(s):(n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),o)}function o(s){return r.parser.lazy[r.now().line]?t(s):e(s)}}const Si={name:"codeIndented",tokenize:Zv},Yv={partial:!0,tokenize:Jv};function Zv(n,e,t){const r=this;return i;function i(c){return n.enter("codeIndented"),U(n,o,"linePrefix",5)(c)}function o(c){const u=r.events[r.events.length-1];return u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?s(c):t(c)}function s(c){return c===null?l(c):I(c)?n.attempt(Yv,s,l)(c):(n.enter("codeFlowValue"),a(c))}function a(c){return c===null||I(c)?(n.exit("codeFlowValue"),s(c)):(n.consume(c),a)}function l(c){return n.exit("codeIndented"),e(c)}}function Jv(n,e,t){const r=this;return i;function i(s){return r.parser.lazy[r.now().line]?t(s):I(s)?(n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),i):U(n,o,"linePrefix",5)(s)}function o(s){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(s):I(s)?i(s):t(s)}}const ey={name:"codeText",previous:ny,resolve:ty,tokenize:ry};function ty(n){let e=n.length-4,t=3,r,i;if((n[t][1].type==="lineEnding"||n[t][1].type==="space")&&(n[e][1].type==="lineEnding"||n[e][1].type==="space")){for(r=t;++r<e;)if(n[r][1].type==="codeTextData"){n[t][1].type="codeTextPadding",n[e][1].type="codeTextPadding",t+=2,e-=2;break}}for(r=t-1,e++;++r<=e;)i===void 0?r!==e&&n[r][1].type!=="lineEnding"&&(i=r):(r===e||n[r][1].type==="lineEnding")&&(n[i][1].type="codeTextData",r!==i+2&&(n[i][1].end=n[r-1][1].end,n.splice(i+2,r-i-2),e-=r-i-2,r=i+2),i=void 0);return n}function ny(n){return n!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ry(n,e,t){let r=0,i,o;return s;function s(d){return n.enter("codeText"),n.enter("codeTextSequence"),a(d)}function a(d){return d===96?(n.consume(d),r++,a):(n.exit("codeTextSequence"),l(d))}function l(d){return d===null?t(d):d===32?(n.enter("space"),n.consume(d),n.exit("space"),l):d===96?(o=n.enter("codeTextSequence"),i=0,u(d)):I(d)?(n.enter("lineEnding"),n.consume(d),n.exit("lineEnding"),l):(n.enter("codeTextData"),c(d))}function c(d){return d===null||d===32||d===96||I(d)?(n.exit("codeTextData"),l(d)):(n.consume(d),c)}function u(d){return d===96?(n.consume(d),i++,u):i===r?(n.exit("codeTextSequence"),n.exit("codeText"),e(d)):(o.type="codeTextData",c(d))}}class iy{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(e,r):e>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(e,t,r){const i=t||0;this.setCursor(Math.trunc(e));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Hn(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),Hn(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Hn(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const t=this.left.splice(e,Number.POSITIVE_INFINITY);Hn(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);Hn(this.left,t.reverse())}}}function Hn(n,e){let t=0;if(e.length<1e4)n.push(...e);else for(;t<e.length;)n.push(...e.slice(t,t+1e4)),t+=1e4}function Fc(n){const e={};let t=-1,r,i,o,s,a,l,c;const u=new iy(n);for(;++t<u.length;){for(;t in e;)t=e[t];if(r=u.get(t),t&&r[1].type==="chunkFlow"&&u.get(t-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,o=0,o<l.length&&l[o][1].type==="lineEndingBlank"&&(o+=2),o<l.length&&l[o][1].type==="content"))for(;++o<l.length&&l[o][1].type!=="content";)l[o][1].type==="chunkText"&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(e,oy(u,t)),t=e[t],c=!0);else if(r[1]._container){for(o=t,i=void 0;o--&&(s=u.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank");)s[0]==="enter"&&(i&&(u.get(i)[1].type="lineEndingBlank"),s[1].type="lineEnding",i=o);i&&(r[1].end={...u.get(i)[1].start},a=u.slice(i,t),a.unshift(r),u.splice(i,t-i+1,a))}}return ut(n,0,Number.POSITIVE_INFINITY,u.slice(0)),!c}function oy(n,e){const t=n.get(e)[1],r=n.get(e)[2];let i=e-1;const o=[],s=t._tokenizer||r.parser[t.contentType](t.start),a=s.events,l=[],c={};let u,d,p=-1,h=t,x=0,C=0;const P=[C];for(;h;){for(;n.get(++i)[1]!==h;);o.push(i),h._tokenizer||(u=r.sliceStream(h),h.next||u.push(null),d&&s.defineSkip(h.start),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(u),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),d=h,h=h.next}for(h=t;++p<a.length;)a[p][0]==="exit"&&a[p-1][0]==="enter"&&a[p][1].type===a[p-1][1].type&&a[p][1].start.line!==a[p][1].end.line&&(C=p+1,P.push(C),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(s.events=[],h?(h._tokenizer=void 0,h.previous=void 0):P.pop(),p=P.length;p--;){const $=a.slice(P[p],P[p+1]),F=o.pop();l.push([F,F+$.length-1]),n.splice(F,2,$)}for(l.reverse(),p=-1;++p<l.length;)c[x+l[p][0]]=x+l[p][1],x+=l[p][1]-l[p][0]-1;return c}const sy={resolve:ly,tokenize:cy},ay={partial:!0,tokenize:uy};function ly(n){return Fc(n),n}function cy(n,e){let t;return r;function r(a){return n.enter("content"),t=n.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):I(a)?n.check(ay,s,o)(a):(n.consume(a),i)}function o(a){return n.exit("chunkContent"),n.exit("content"),e(a)}function s(a){return n.consume(a),n.exit("chunkContent"),t.next=n.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function uy(n,e,t){const r=this;return i;function i(s){return n.exit("chunkContent"),n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),U(n,o,"linePrefix")}function o(s){if(s===null||I(s))return t(s);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(s):n.interrupt(r.parser.constructs.flow,t,e)(s)}}function Mc(n,e,t,r,i,o,s,a,l){const c=l||Number.POSITIVE_INFINITY;let u=0;return d;function d($){return $===60?(n.enter(r),n.enter(i),n.enter(o),n.consume($),n.exit(o),p):$===null||$===32||$===41||io($)?t($):(n.enter(r),n.enter(s),n.enter(a),n.enter("chunkString",{contentType:"string"}),C($))}function p($){return $===62?(n.enter(o),n.consume($),n.exit(o),n.exit(i),n.exit(r),e):(n.enter(a),n.enter("chunkString",{contentType:"string"}),h($))}function h($){return $===62?(n.exit("chunkString"),n.exit(a),p($)):$===null||$===60||I($)?t($):(n.consume($),$===92?x:h)}function x($){return $===60||$===62||$===92?(n.consume($),h):h($)}function C($){return!u&&($===null||$===41||Ce($))?(n.exit("chunkString"),n.exit(a),n.exit(s),n.exit(r),e($)):u<c&&$===40?(n.consume($),u++,C):$===41?(n.consume($),u--,C):$===null||$===32||$===40||io($)?t($):(n.consume($),$===92?P:C)}function P($){return $===40||$===41||$===92?(n.consume($),C):C($)}}function Nc(n,e,t,r,i,o){const s=this;let a=0,l;return c;function c(h){return n.enter(r),n.enter(i),n.consume(h),n.exit(i),n.enter(o),u}function u(h){return a>999||h===null||h===91||h===93&&!l||h===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?t(h):h===93?(n.exit(o),n.enter(i),n.consume(h),n.exit(i),n.exit(r),e):I(h)?(n.enter("lineEnding"),n.consume(h),n.exit("lineEnding"),u):(n.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===null||h===91||h===93||I(h)||a++>999?(n.exit("chunkString"),u(h)):(n.consume(h),l||(l=!_(h)),h===92?p:d)}function p(h){return h===91||h===92||h===93?(n.consume(h),a++,d):d(h)}}function Lc(n,e,t,r,i,o){let s;return a;function a(p){return p===34||p===39||p===40?(n.enter(r),n.enter(i),n.consume(p),n.exit(i),s=p===40?41:p,l):t(p)}function l(p){return p===s?(n.enter(i),n.consume(p),n.exit(i),n.exit(r),e):(n.enter(o),c(p))}function c(p){return p===s?(n.exit(o),l(s)):p===null?t(p):I(p)?(n.enter("lineEnding"),n.consume(p),n.exit("lineEnding"),U(n,c,"linePrefix")):(n.enter("chunkString",{contentType:"string"}),u(p))}function u(p){return p===s||p===null||I(p)?(n.exit("chunkString"),c(p)):(n.consume(p),p===92?d:u)}function d(p){return p===s||p===92?(n.consume(p),u):u(p)}}function Wn(n,e){let t;return r;function r(i){return I(i)?(n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),t=!0,r):_(i)?U(n,r,t?"linePrefix":"lineSuffix")(i):e(i)}}const dy={name:"definition",tokenize:py},hy={partial:!0,tokenize:fy};function py(n,e,t){const r=this;let i;return o;function o(h){return n.enter("definition"),s(h)}function s(h){return Nc.call(r,n,a,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function a(h){return i=wn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(n.enter("definitionMarker"),n.consume(h),n.exit("definitionMarker"),l):t(h)}function l(h){return Ce(h)?Wn(n,c)(h):c(h)}function c(h){return Mc(n,u,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function u(h){return n.attempt(hy,d,d)(h)}function d(h){return _(h)?U(n,p,"whitespace")(h):p(h)}function p(h){return h===null||I(h)?(n.exit("definition"),r.parser.defined.push(i),e(h)):t(h)}}function fy(n,e,t){return r;function r(a){return Ce(a)?Wn(n,i)(a):t(a)}function i(a){return Lc(n,o,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return _(a)?U(n,s,"whitespace")(a):s(a)}function s(a){return a===null||I(a)?e(a):t(a)}}const gy={name:"hardBreakEscape",tokenize:my};function my(n,e,t){return r;function r(o){return n.enter("hardBreakEscape"),n.consume(o),i}function i(o){return I(o)?(n.exit("hardBreakEscape"),e(o)):t(o)}}const by={name:"headingAtx",resolve:vy,tokenize:yy};function vy(n,e){let t=n.length-2,r=3,i,o;return n[r][1].type==="whitespace"&&(r+=2),t-2>r&&n[t][1].type==="whitespace"&&(t-=2),n[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&n[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(i={type:"atxHeadingText",start:n[r][1].start,end:n[t][1].end},o={type:"chunkText",start:n[r][1].start,end:n[t][1].end,contentType:"text"},ut(n,r,t-r+1,[["enter",i,e],["enter",o,e],["exit",o,e],["exit",i,e]])),n}function yy(n,e,t){let r=0;return i;function i(u){return n.enter("atxHeading"),o(u)}function o(u){return n.enter("atxHeadingSequence"),s(u)}function s(u){return u===35&&r++<6?(n.consume(u),s):u===null||Ce(u)?(n.exit("atxHeadingSequence"),a(u)):t(u)}function a(u){return u===35?(n.enter("atxHeadingSequence"),l(u)):u===null||I(u)?(n.exit("atxHeading"),e(u)):_(u)?U(n,a,"whitespace")(u):(n.enter("atxHeadingText"),c(u))}function l(u){return u===35?(n.consume(u),l):(n.exit("atxHeadingSequence"),a(u))}function c(u){return u===null||u===35||Ce(u)?(n.exit("atxHeadingText"),a(u)):(n.consume(u),c)}}const wy=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],xa=["pre","script","style","textarea"],ky={concrete:!0,name:"htmlFlow",resolveTo:Sy,tokenize:Cy},xy={partial:!0,tokenize:Ay},$y={partial:!0,tokenize:Ey};function Sy(n){let e=n.length;for(;e--&&!(n[e][0]==="enter"&&n[e][1].type==="htmlFlow"););return e>1&&n[e-2][1].type==="linePrefix"&&(n[e][1].start=n[e-2][1].start,n[e+1][1].start=n[e-2][1].start,n.splice(e-2,2)),n}function Cy(n,e,t){const r=this;let i,o,s,a,l;return c;function c(g){return u(g)}function u(g){return n.enter("htmlFlow"),n.enter("htmlFlowData"),n.consume(g),d}function d(g){return g===33?(n.consume(g),p):g===47?(n.consume(g),o=!0,C):g===63?(n.consume(g),i=3,r.interrupt?e:f):tt(g)?(n.consume(g),s=String.fromCharCode(g),P):t(g)}function p(g){return g===45?(n.consume(g),i=2,h):g===91?(n.consume(g),i=5,a=0,x):tt(g)?(n.consume(g),i=4,r.interrupt?e:f):t(g)}function h(g){return g===45?(n.consume(g),r.interrupt?e:f):t(g)}function x(g){const Ve="CDATA[";return g===Ve.charCodeAt(a++)?(n.consume(g),a===Ve.length?r.interrupt?e:A:x):t(g)}function C(g){return tt(g)?(n.consume(g),s=String.fromCharCode(g),P):t(g)}function P(g){if(g===null||g===47||g===62||Ce(g)){const Ve=g===47,Nt=s.toLowerCase();return!Ve&&!o&&xa.includes(Nt)?(i=1,r.interrupt?e(g):A(g)):wy.includes(s.toLowerCase())?(i=6,Ve?(n.consume(g),$):r.interrupt?e(g):A(g)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(g):o?F(g):E(g))}return g===45||ze(g)?(n.consume(g),s+=String.fromCharCode(g),P):t(g)}function $(g){return g===62?(n.consume(g),r.interrupt?e:A):t(g)}function F(g){return _(g)?(n.consume(g),F):W(g)}function E(g){return g===47?(n.consume(g),W):g===58||g===95||tt(g)?(n.consume(g),G):_(g)?(n.consume(g),E):W(g)}function G(g){return g===45||g===46||g===58||g===95||ze(g)?(n.consume(g),G):Q(g)}function Q(g){return g===61?(n.consume(g),w):_(g)?(n.consume(g),Q):E(g)}function w(g){return g===null||g===60||g===61||g===62||g===96?t(g):g===34||g===39?(n.consume(g),l=g,R):_(g)?(n.consume(g),w):J(g)}function R(g){return g===l?(n.consume(g),l=null,H):g===null||I(g)?t(g):(n.consume(g),R)}function J(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||Ce(g)?Q(g):(n.consume(g),J)}function H(g){return g===47||g===62||_(g)?E(g):t(g)}function W(g){return g===62?(n.consume(g),T):t(g)}function T(g){return g===null||I(g)?A(g):_(g)?(n.consume(g),T):t(g)}function A(g){return g===45&&i===2?(n.consume(g),pe):g===60&&i===1?(n.consume(g),oe):g===62&&i===4?(n.consume(g),He):g===63&&i===3?(n.consume(g),f):g===93&&i===5?(n.consume(g),dt):I(g)&&(i===6||i===7)?(n.exit("htmlFlowData"),n.check(xy,ht,X)(g)):g===null||I(g)?(n.exit("htmlFlowData"),X(g)):(n.consume(g),A)}function X(g){return n.check($y,ee,ht)(g)}function ee(g){return n.enter("lineEnding"),n.consume(g),n.exit("lineEnding"),L}function L(g){return g===null||I(g)?X(g):(n.enter("htmlFlowData"),A(g))}function pe(g){return g===45?(n.consume(g),f):A(g)}function oe(g){return g===47?(n.consume(g),s="",Re):A(g)}function Re(g){if(g===62){const Ve=s.toLowerCase();return xa.includes(Ve)?(n.consume(g),He):A(g)}return tt(g)&&s.length<8?(n.consume(g),s+=String.fromCharCode(g),Re):A(g)}function dt(g){return g===93?(n.consume(g),f):A(g)}function f(g){return g===62?(n.consume(g),He):g===45&&i===2?(n.consume(g),f):A(g)}function He(g){return g===null||I(g)?(n.exit("htmlFlowData"),ht(g)):(n.consume(g),He)}function ht(g){return n.exit("htmlFlow"),e(g)}}function Ey(n,e,t){const r=this;return i;function i(s){return I(s)?(n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),o):t(s)}function o(s){return r.parser.lazy[r.now().line]?t(s):e(s)}}function Ay(n,e,t){return r;function r(i){return n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),n.attempt(gi,e,t)}}const Ty={name:"htmlText",tokenize:Iy};function Iy(n,e,t){const r=this;let i,o,s;return a;function a(f){return n.enter("htmlText"),n.enter("htmlTextData"),n.consume(f),l}function l(f){return f===33?(n.consume(f),c):f===47?(n.consume(f),Q):f===63?(n.consume(f),E):tt(f)?(n.consume(f),J):t(f)}function c(f){return f===45?(n.consume(f),u):f===91?(n.consume(f),o=0,x):tt(f)?(n.consume(f),F):t(f)}function u(f){return f===45?(n.consume(f),h):t(f)}function d(f){return f===null?t(f):f===45?(n.consume(f),p):I(f)?(s=d,oe(f)):(n.consume(f),d)}function p(f){return f===45?(n.consume(f),h):d(f)}function h(f){return f===62?pe(f):f===45?p(f):d(f)}function x(f){const He="CDATA[";return f===He.charCodeAt(o++)?(n.consume(f),o===He.length?C:x):t(f)}function C(f){return f===null?t(f):f===93?(n.consume(f),P):I(f)?(s=C,oe(f)):(n.consume(f),C)}function P(f){return f===93?(n.consume(f),$):C(f)}function $(f){return f===62?pe(f):f===93?(n.consume(f),$):C(f)}function F(f){return f===null||f===62?pe(f):I(f)?(s=F,oe(f)):(n.consume(f),F)}function E(f){return f===null?t(f):f===63?(n.consume(f),G):I(f)?(s=E,oe(f)):(n.consume(f),E)}function G(f){return f===62?pe(f):E(f)}function Q(f){return tt(f)?(n.consume(f),w):t(f)}function w(f){return f===45||ze(f)?(n.consume(f),w):R(f)}function R(f){return I(f)?(s=R,oe(f)):_(f)?(n.consume(f),R):pe(f)}function J(f){return f===45||ze(f)?(n.consume(f),J):f===47||f===62||Ce(f)?H(f):t(f)}function H(f){return f===47?(n.consume(f),pe):f===58||f===95||tt(f)?(n.consume(f),W):I(f)?(s=H,oe(f)):_(f)?(n.consume(f),H):pe(f)}function W(f){return f===45||f===46||f===58||f===95||ze(f)?(n.consume(f),W):T(f)}function T(f){return f===61?(n.consume(f),A):I(f)?(s=T,oe(f)):_(f)?(n.consume(f),T):H(f)}function A(f){return f===null||f===60||f===61||f===62||f===96?t(f):f===34||f===39?(n.consume(f),i=f,X):I(f)?(s=A,oe(f)):_(f)?(n.consume(f),A):(n.consume(f),ee)}function X(f){return f===i?(n.consume(f),i=void 0,L):f===null?t(f):I(f)?(s=X,oe(f)):(n.consume(f),X)}function ee(f){return f===null||f===34||f===39||f===60||f===61||f===96?t(f):f===47||f===62||Ce(f)?H(f):(n.consume(f),ee)}function L(f){return f===47||f===62||Ce(f)?H(f):t(f)}function pe(f){return f===62?(n.consume(f),n.exit("htmlTextData"),n.exit("htmlText"),e):t(f)}function oe(f){return n.exit("htmlTextData"),n.enter("lineEnding"),n.consume(f),n.exit("lineEnding"),Re}function Re(f){return _(f)?U(n,dt,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):dt(f)}function dt(f){return n.enter("htmlTextData"),s(f)}}const Ko={name:"labelEnd",resolveAll:Py,resolveTo:Fy,tokenize:My},By={tokenize:Ny},Oy={tokenize:Ly},zy={tokenize:Dy};function Py(n){let e=-1;const t=[];for(;++e<n.length;){const r=n[e][1];if(t.push(n[e]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",e+=i}}return n.length!==t.length&&ut(n,0,n.length,t),n}function Fy(n,e){let t=n.length,r=0,i,o,s,a;for(;t--;)if(i=n[t][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;n[t][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(s){if(n[t][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=t,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(s=t);const l={type:n[o][1].type==="labelLink"?"link":"image",start:{...n[o][1].start},end:{...n[n.length-1][1].end}},c={type:"label",start:{...n[o][1].start},end:{...n[s][1].end}},u={type:"labelText",start:{...n[o+r+2][1].end},end:{...n[s-2][1].start}};return a=[["enter",l,e],["enter",c,e]],a=Me(a,n.slice(o+1,o+r+3)),a=Me(a,[["enter",u,e]]),a=Me(a,Uo(e.parser.constructs.insideSpan.null,n.slice(o+r+4,s-3),e)),a=Me(a,[["exit",u,e],n[s-2],n[s-1],["exit",c,e]]),a=Me(a,n.slice(s+1)),a=Me(a,[["exit",l,e]]),ut(n,o,n.length,a),n}function My(n,e,t){const r=this;let i=r.events.length,o,s;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(p){return o?o._inactive?d(p):(s=r.parser.defined.includes(wn(r.sliceSerialize({start:o.end,end:r.now()}))),n.enter("labelEnd"),n.enter("labelMarker"),n.consume(p),n.exit("labelMarker"),n.exit("labelEnd"),l):t(p)}function l(p){return p===40?n.attempt(By,u,s?u:d)(p):p===91?n.attempt(Oy,u,s?c:d)(p):s?u(p):d(p)}function c(p){return n.attempt(zy,u,d)(p)}function u(p){return e(p)}function d(p){return o._balanced=!0,t(p)}}function Ny(n,e,t){return r;function r(d){return n.enter("resource"),n.enter("resourceMarker"),n.consume(d),n.exit("resourceMarker"),i}function i(d){return Ce(d)?Wn(n,o)(d):o(d)}function o(d){return d===41?u(d):Mc(n,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function s(d){return Ce(d)?Wn(n,l)(d):u(d)}function a(d){return t(d)}function l(d){return d===34||d===39||d===40?Lc(n,c,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):u(d)}function c(d){return Ce(d)?Wn(n,u)(d):u(d)}function u(d){return d===41?(n.enter("resourceMarker"),n.consume(d),n.exit("resourceMarker"),n.exit("resource"),e):t(d)}}function Ly(n,e,t){const r=this;return i;function i(a){return Nc.call(r,n,o,s,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(wn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?e(a):t(a)}function s(a){return t(a)}}function Dy(n,e,t){return r;function r(o){return n.enter("reference"),n.enter("referenceMarker"),n.consume(o),n.exit("referenceMarker"),i}function i(o){return o===93?(n.enter("referenceMarker"),n.consume(o),n.exit("referenceMarker"),n.exit("reference"),e):t(o)}}const _y={name:"labelStartImage",resolveAll:Ko.resolveAll,tokenize:Ry};function Ry(n,e,t){const r=this;return i;function i(a){return n.enter("labelImage"),n.enter("labelImageMarker"),n.consume(a),n.exit("labelImageMarker"),o}function o(a){return a===91?(n.enter("labelMarker"),n.consume(a),n.exit("labelMarker"),n.exit("labelImage"),s):t(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(a):e(a)}}const Hy={name:"labelStartLink",resolveAll:Ko.resolveAll,tokenize:Vy};function Vy(n,e,t){const r=this;return i;function i(s){return n.enter("labelLink"),n.enter("labelMarker"),n.consume(s),n.exit("labelMarker"),n.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(s):e(s)}}const Ci={name:"lineEnding",tokenize:jy};function jy(n,e){return t;function t(r){return n.enter("lineEnding"),n.consume(r),n.exit("lineEnding"),U(n,e,"linePrefix")}}const Ir={name:"thematicBreak",tokenize:qy};function qy(n,e,t){let r=0,i;return o;function o(c){return n.enter("thematicBreak"),s(c)}function s(c){return i=c,a(c)}function a(c){return c===i?(n.enter("thematicBreakSequence"),l(c)):r>=3&&(c===null||I(c))?(n.exit("thematicBreak"),e(c)):t(c)}function l(c){return c===i?(n.consume(c),r++,l):(n.exit("thematicBreakSequence"),_(c)?U(n,a,"whitespace")(c):a(c))}}const ke={continuation:{tokenize:Gy},exit:Qy,name:"list",tokenize:Wy},Uy={partial:!0,tokenize:Yy},Ky={partial:!0,tokenize:Xy};function Wy(n,e,t){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,s=0;return a;function a(h){const x=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:oo(h)){if(r.containerState.type||(r.containerState.type=x,n.enter(x,{_container:!0})),x==="listUnordered")return n.enter("listItemPrefix"),h===42||h===45?n.check(Ir,t,c)(h):c(h);if(!r.interrupt||h===49)return n.enter("listItemPrefix"),n.enter("listItemValue"),l(h)}return t(h)}function l(h){return oo(h)&&++s<10?(n.consume(h),l):(!r.interrupt||s<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(n.exit("listItemValue"),c(h)):t(h)}function c(h){return n.enter("listItemMarker"),n.consume(h),n.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,n.check(gi,r.interrupt?t:u,n.attempt(Uy,p,d))}function u(h){return r.containerState.initialBlankLine=!0,o++,p(h)}function d(h){return _(h)?(n.enter("listItemPrefixWhitespace"),n.consume(h),n.exit("listItemPrefixWhitespace"),p):t(h)}function p(h){return r.containerState.size=o+r.sliceSerialize(n.exit("listItemPrefix"),!0).length,e(h)}}function Gy(n,e,t){const r=this;return r.containerState._closeFlow=void 0,n.check(gi,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,U(n,e,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!_(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,s(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,n.attempt(Ky,e,s)(a))}function s(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,U(n,n.attempt(ke,e,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Xy(n,e,t){const r=this;return U(n,i,"listItemIndent",r.containerState.size+1);function i(o){const s=r.events[r.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===r.containerState.size?e(o):t(o)}}function Qy(n){n.exit(this.containerState.type)}function Yy(n,e,t){const r=this;return U(n,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const s=r.events[r.events.length-1];return!_(o)&&s&&s[1].type==="listItemPrefixWhitespace"?e(o):t(o)}}const $a={name:"setextUnderline",resolveTo:Zy,tokenize:Jy};function Zy(n,e){let t=n.length,r,i,o;for(;t--;)if(n[t][0]==="enter"){if(n[t][1].type==="content"){r=t;break}n[t][1].type==="paragraph"&&(i=t)}else n[t][1].type==="content"&&n.splice(t,1),!o&&n[t][1].type==="definition"&&(o=t);const s={type:"setextHeading",start:{...n[i][1].start},end:{...n[n.length-1][1].end}};return n[i][1].type="setextHeadingText",o?(n.splice(i,0,["enter",s,e]),n.splice(o+1,0,["exit",n[r][1],e]),n[r][1].end={...n[o][1].end}):n[r][1]=s,n.push(["exit",s,e]),n}function Jy(n,e,t){const r=this;let i;return o;function o(c){let u=r.events.length,d;for(;u--;)if(r.events[u][1].type!=="lineEnding"&&r.events[u][1].type!=="linePrefix"&&r.events[u][1].type!=="content"){d=r.events[u][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||d)?(n.enter("setextHeadingLine"),i=c,s(c)):t(c)}function s(c){return n.enter("setextHeadingLineSequence"),a(c)}function a(c){return c===i?(n.consume(c),a):(n.exit("setextHeadingLineSequence"),_(c)?U(n,l,"lineSuffix")(c):l(c))}function l(c){return c===null||I(c)?(n.exit("setextHeadingLine"),e(c)):t(c)}}const ew={tokenize:tw};function tw(n){const e=this,t=n.attempt(gi,r,n.attempt(this.parser.constructs.flowInitial,i,U(n,n.attempt(this.parser.constructs.flow,i,n.attempt(sy,i)),"linePrefix")));return t;function r(o){if(o===null){n.consume(o);return}return n.enter("lineEndingBlank"),n.consume(o),n.exit("lineEndingBlank"),e.currentConstruct=void 0,t}function i(o){if(o===null){n.consume(o);return}return n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),e.currentConstruct=void 0,t}}const nw={resolveAll:_c()},rw=Dc("string"),iw=Dc("text");function Dc(n){return{resolveAll:_c(n==="text"?ow:void 0),tokenize:e};function e(t){const r=this,i=this.parser.constructs[n],o=t.attempt(i,s,a);return s;function s(u){return c(u)?o(u):a(u)}function a(u){if(u===null){t.consume(u);return}return t.enter("data"),t.consume(u),l}function l(u){return c(u)?(t.exit("data"),o(u)):(t.consume(u),l)}function c(u){if(u===null)return!0;const d=i[u];let p=-1;if(d)for(;++p<d.length;){const h=d[p];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function _c(n){return e;function e(t,r){let i=-1,o;for(;++i<=t.length;)o===void 0?t[i]&&t[i][1].type==="data"&&(o=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==o+2&&(t[o][1].end=t[i-1][1].end,t.splice(o+2,i-o-2),i=o+2),o=void 0);return n?n(t,r):t}}function ow(n,e){let t=0;for(;++t<=n.length;)if((t===n.length||n[t][1].type==="lineEnding")&&n[t-1][1].type==="data"){const r=n[t-1][1],i=e.sliceStream(r);let o=i.length,s=-1,a=0,l;for(;o--;){const c=i[o];if(typeof c=="string"){for(s=c.length;c.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(c===-2)l=!0,a++;else if(c!==-1){o++;break}}if(a){const c={type:t===n.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:r.start._bufferIndex+s,_index:r.start._index+o,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(n.splice(t,0,["enter",c,e],["exit",c,e]),t+=2)}t++}return n}const sw={42:ke,43:ke,45:ke,48:ke,49:ke,50:ke,51:ke,52:ke,53:ke,54:ke,55:ke,56:ke,57:ke,62:Oc},aw={91:dy},lw={[-2]:Si,[-1]:Si,32:Si},cw={35:by,42:Ir,45:[$a,Ir],60:ky,61:$a,95:Ir,96:ka,126:ka},uw={38:Pc,92:zc},dw={[-5]:Ci,[-4]:Ci,[-3]:Ci,33:_y,38:Pc,42:so,60:[Hv,Ty],91:Hy,92:[gy,zc],93:Ko,95:so,96:ey},hw={null:[so,nw]},pw={null:[42,95]},fw={null:[]},gw=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:pw,contentInitial:aw,disable:fw,document:sw,flow:cw,flowInitial:lw,insideSpan:hw,string:uw,text:dw},Symbol.toStringTag,{value:"Module"}));function mw(n,e,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},o=[];let s=[],a=[];const l={attempt:R(Q),check:R(w),consume:F,enter:E,exit:G,interrupt:R(w,{interrupt:!0})},c={code:null,containerState:{},defineSkip:C,events:[],now:x,parser:n,previous:null,sliceSerialize:p,sliceStream:h,write:d};let u=e.tokenize.call(c,l);return e.resolveAll&&o.push(e),c;function d(T){return s=Me(s,T),P(),s[s.length-1]!==null?[]:(J(e,0),c.events=Uo(o,c.events,c),c.events)}function p(T,A){return vw(h(T),A)}function h(T){return bw(s,T)}function x(){const{_bufferIndex:T,_index:A,line:X,column:ee,offset:L}=r;return{_bufferIndex:T,_index:A,line:X,column:ee,offset:L}}function C(T){i[T.line]=T.column,W()}function P(){let T;for(;r._index<s.length;){const A=s[r._index];if(typeof A=="string")for(T=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===T&&r._bufferIndex<A.length;)$(A.charCodeAt(r._bufferIndex));else $(A)}}function $(T){u=u(T)}function F(T){I(T)?(r.line++,r.column=1,r.offset+=T===-3?2:1,W()):T!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=T}function E(T,A){const X=A||{};return X.type=T,X.start=x(),c.events.push(["enter",X,c]),a.push(X),X}function G(T){const A=a.pop();return A.end=x(),c.events.push(["exit",A,c]),A}function Q(T,A){J(T,A.from)}function w(T,A){A.restore()}function R(T,A){return X;function X(ee,L,pe){let oe,Re,dt,f;return Array.isArray(ee)?ht(ee):"tokenize"in ee?ht([ee]):He(ee);function He(se){return Mn;function Mn(xt){const un=xt!==null&&se[xt],dn=xt!==null&&se.null,hr=[...Array.isArray(un)?un:un?[un]:[],...Array.isArray(dn)?dn:dn?[dn]:[]];return ht(hr)(xt)}}function ht(se){return oe=se,Re=0,se.length===0?pe:g(se[Re])}function g(se){return Mn;function Mn(xt){return f=H(),dt=se,se.partial||(c.currentConstruct=se),se.name&&c.parser.constructs.disable.null.includes(se.name)?Nt():se.tokenize.call(A?Object.assign(Object.create(c),A):c,l,Ve,Nt)(xt)}}function Ve(se){return T(dt,f),L}function Nt(se){return f.restore(),++Re<oe.length?g(oe[Re]):pe}}}function J(T,A){T.resolveAll&&!o.includes(T)&&o.push(T),T.resolve&&ut(c.events,A,c.events.length-A,T.resolve(c.events.slice(A),c)),T.resolveTo&&(c.events=T.resolveTo(c.events,c))}function H(){const T=x(),A=c.previous,X=c.currentConstruct,ee=c.events.length,L=Array.from(a);return{from:ee,restore:pe};function pe(){r=T,c.previous=A,c.currentConstruct=X,c.events.length=ee,a=L,W()}}function W(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function bw(n,e){const t=e.start._index,r=e.start._bufferIndex,i=e.end._index,o=e.end._bufferIndex;let s;if(t===i)s=[n[t].slice(r,o)];else{if(s=n.slice(t,i),r>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(r):s.shift()}o>0&&s.push(n[i].slice(0,o))}return s}function vw(n,e){let t=-1;const r=[];let i;for(;++t<n.length;){const o=n[t];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=e?" ":"	";break}case-1:{if(!e&&i)continue;s=" ";break}default:s=String.fromCharCode(o)}i=o===-2,r.push(s)}return r.join("")}function yw(n){const r={constructs:Ev([gw,...(n||{}).extensions||[]]),content:i(Fv),defined:[],document:i(Nv),flow:i(ew),lazy:{},string:i(rw),text:i(iw)};return r;function i(o){return s;function s(a){return mw(r,o,a)}}}function ww(n){for(;!Fc(n););return n}const Sa=/[\0\t\n\r]/g;function kw(){let n=1,e="",t=!0,r;return i;function i(o,s,a){const l=[];let c,u,d,p,h;for(o=e+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),d=0,e="",t&&(o.charCodeAt(0)===65279&&d++,t=void 0);d<o.length;){if(Sa.lastIndex=d,c=Sa.exec(o),p=c&&c.index!==void 0?c.index:o.length,h=o.charCodeAt(p),!c){e=o.slice(d);break}if(h===10&&d===p&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),d<p&&(l.push(o.slice(d,p)),n+=p-d),h){case 0:{l.push(65533),n++;break}case 9:{for(u=Math.ceil(n/4)*4,l.push(-2);n++<u;)l.push(-1);break}case 10:{l.push(-4),n=1;break}default:r=!0,n=1}d=p+1}return a&&(r&&l.push(-5),e&&l.push(e),l.push(null)),l}}const xw=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Rc(n){return n.replace(xw,$w)}function $w(n,e,t){if(e)return e;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),o=i===120||i===88;return Bc(t.slice(o?2:1),o?16:10)}return qo(t)||n}function Gn(n){return!n||typeof n!="object"?"":"position"in n||"type"in n?Ca(n.position):"start"in n||"end"in n?Ca(n):"line"in n||"column"in n?ao(n):""}function ao(n){return Ea(n&&n.line)+":"+Ea(n&&n.column)}function Ca(n){return ao(n&&n.start)+"-"+ao(n&&n.end)}function Ea(n){return n&&typeof n=="number"?n:1}const Hc={}.hasOwnProperty;function Sw(n,e,t){return typeof e!="string"&&(t=e,e=void 0),Cw(t)(ww(yw(t).document().write(kw()(n,e,!0))))}function Cw(n){const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(as),autolinkProtocol:H,autolinkEmail:H,atxHeading:o(is),blockQuote:o(dn),characterEscape:H,characterReference:H,codeFenced:o(hr),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(hr,s),codeText:o(Pu,s),codeTextData:H,data:H,codeFlowValue:H,definition:o(Fu),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(Mu),hardBreakEscape:o(os),hardBreakTrailing:o(os),htmlFlow:o(ss,s),htmlFlowData:H,htmlText:o(ss,s),htmlTextData:H,image:o(Nu),label:s,link:o(as),listItem:o(Lu),listItemValue:p,listOrdered:o(ls,d),listUnordered:o(ls),paragraph:o(Du),reference:g,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(is),strong:o(_u),thematicBreak:o(Hu)},exit:{atxHeading:l(),atxHeadingSequence:Q,autolink:l(),autolinkEmail:un,autolinkProtocol:xt,blockQuote:l(),characterEscapeValue:W,characterReferenceMarkerHexadecimal:Nt,characterReferenceMarkerNumeric:Nt,characterReferenceValue:se,characterReference:Mn,codeFenced:l(P),codeFencedFence:C,codeFencedFenceInfo:h,codeFencedFenceMeta:x,codeFlowValue:W,codeIndented:l($),codeText:l(L),codeTextData:W,data:W,definition:l(),definitionDestinationString:G,definitionLabelString:F,definitionTitleString:E,emphasis:l(),hardBreakEscape:l(A),hardBreakTrailing:l(A),htmlFlow:l(X),htmlFlowData:W,htmlText:l(ee),htmlTextData:W,image:l(oe),label:dt,labelText:Re,lineEnding:T,link:l(pe),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:Ve,resourceDestinationString:f,resourceTitleString:He,resource:ht,setextHeading:l(J),setextHeadingLineSequence:R,setextHeadingText:w,strong:l(),thematicBreak:l()}};Vc(e,(n||{}).mdastExtensions||[]);const t={};return r;function r(v){let S={type:"root",children:[]};const B={stack:[S],tokenStack:[],config:e,enter:a,exit:c,buffer:s,resume:u,data:t},M=[];let V=-1;for(;++V<v.length;)if(v[V][1].type==="listOrdered"||v[V][1].type==="listUnordered")if(v[V][0]==="enter")M.push(V);else{const je=M.pop();V=i(v,je,V)}for(V=-1;++V<v.length;){const je=e[v[V][0]];Hc.call(je,v[V][1].type)&&je[v[V][1].type].call(Object.assign({sliceSerialize:v[V][2].sliceSerialize},B),v[V][1])}if(B.tokenStack.length>0){const je=B.tokenStack[B.tokenStack.length-1];(je[1]||Aa).call(B,void 0,je[0])}for(S.position={start:Ct(v.length>0?v[0][1].start:{line:1,column:1,offset:0}),end:Ct(v.length>0?v[v.length-2][1].end:{line:1,column:1,offset:0})},V=-1;++V<e.transforms.length;)S=e.transforms[V](S)||S;return S}function i(v,S,B){let M=S-1,V=-1,je=!1,Lt,pt,Nn,Ln;for(;++M<=B;){const Te=v[M];switch(Te[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Te[0]==="enter"?V++:V--,Ln=void 0;break}case"lineEndingBlank":{Te[0]==="enter"&&(Lt&&!Ln&&!V&&!Nn&&(Nn=M),Ln=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ln=void 0}if(!V&&Te[0]==="enter"&&Te[1].type==="listItemPrefix"||V===-1&&Te[0]==="exit"&&(Te[1].type==="listUnordered"||Te[1].type==="listOrdered")){if(Lt){let hn=M;for(pt=void 0;hn--;){const ft=v[hn];if(ft[1].type==="lineEnding"||ft[1].type==="lineEndingBlank"){if(ft[0]==="exit")continue;pt&&(v[pt][1].type="lineEndingBlank",je=!0),ft[1].type="lineEnding",pt=hn}else if(!(ft[1].type==="linePrefix"||ft[1].type==="blockQuotePrefix"||ft[1].type==="blockQuotePrefixWhitespace"||ft[1].type==="blockQuoteMarker"||ft[1].type==="listItemIndent"))break}Nn&&(!pt||Nn<pt)&&(Lt._spread=!0),Lt.end=Object.assign({},pt?v[pt][1].start:Te[1].end),v.splice(pt||M,0,["exit",Lt,Te[2]]),M++,B++}if(Te[1].type==="listItemPrefix"){const hn={type:"listItem",_spread:!1,start:Object.assign({},Te[1].start),end:void 0};Lt=hn,v.splice(M,0,["enter",hn,Te[2]]),M++,B++,Nn=void 0,Ln=!0}}}return v[S][1]._spread=je,B}function o(v,S){return B;function B(M){a.call(this,v(M),M),S&&S.call(this,M)}}function s(){this.stack.push({type:"fragment",children:[]})}function a(v,S,B){this.stack[this.stack.length-1].children.push(v),this.stack.push(v),this.tokenStack.push([S,B||void 0]),v.position={start:Ct(S.start),end:void 0}}function l(v){return S;function S(B){v&&v.call(this,B),c.call(this,B)}}function c(v,S){const B=this.stack.pop(),M=this.tokenStack.pop();if(M)M[0].type!==v.type&&(S?S.call(this,v,M[0]):(M[1]||Aa).call(this,v,M[0]));else throw new Error("Cannot close `"+v.type+"` ("+Gn({start:v.start,end:v.end})+"): it’s not open");B.position.end=Ct(v.end)}function u(){return jo(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function p(v){if(this.data.expectingFirstListItemValue){const S=this.stack[this.stack.length-2];S.start=Number.parseInt(this.sliceSerialize(v),10),this.data.expectingFirstListItemValue=void 0}}function h(){const v=this.resume(),S=this.stack[this.stack.length-1];S.lang=v}function x(){const v=this.resume(),S=this.stack[this.stack.length-1];S.meta=v}function C(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function P(){const v=this.resume(),S=this.stack[this.stack.length-1];S.value=v.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function $(){const v=this.resume(),S=this.stack[this.stack.length-1];S.value=v.replace(/(\r?\n|\r)$/g,"")}function F(v){const S=this.resume(),B=this.stack[this.stack.length-1];B.label=S,B.identifier=wn(this.sliceSerialize(v)).toLowerCase()}function E(){const v=this.resume(),S=this.stack[this.stack.length-1];S.title=v}function G(){const v=this.resume(),S=this.stack[this.stack.length-1];S.url=v}function Q(v){const S=this.stack[this.stack.length-1];if(!S.depth){const B=this.sliceSerialize(v).length;S.depth=B}}function w(){this.data.setextHeadingSlurpLineEnding=!0}function R(v){const S=this.stack[this.stack.length-1];S.depth=this.sliceSerialize(v).codePointAt(0)===61?1:2}function J(){this.data.setextHeadingSlurpLineEnding=void 0}function H(v){const B=this.stack[this.stack.length-1].children;let M=B[B.length-1];(!M||M.type!=="text")&&(M=Ru(),M.position={start:Ct(v.start),end:void 0},B.push(M)),this.stack.push(M)}function W(v){const S=this.stack.pop();S.value+=this.sliceSerialize(v),S.position.end=Ct(v.end)}function T(v){const S=this.stack[this.stack.length-1];if(this.data.atHardBreak){const B=S.children[S.children.length-1];B.position.end=Ct(v.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(S.type)&&(H.call(this,v),W.call(this,v))}function A(){this.data.atHardBreak=!0}function X(){const v=this.resume(),S=this.stack[this.stack.length-1];S.value=v}function ee(){const v=this.resume(),S=this.stack[this.stack.length-1];S.value=v}function L(){const v=this.resume(),S=this.stack[this.stack.length-1];S.value=v}function pe(){const v=this.stack[this.stack.length-1];if(this.data.inReference){const S=this.data.referenceType||"shortcut";v.type+="Reference",v.referenceType=S,delete v.url,delete v.title}else delete v.identifier,delete v.label;this.data.referenceType=void 0}function oe(){const v=this.stack[this.stack.length-1];if(this.data.inReference){const S=this.data.referenceType||"shortcut";v.type+="Reference",v.referenceType=S,delete v.url,delete v.title}else delete v.identifier,delete v.label;this.data.referenceType=void 0}function Re(v){const S=this.sliceSerialize(v),B=this.stack[this.stack.length-2];B.label=Rc(S),B.identifier=wn(S).toLowerCase()}function dt(){const v=this.stack[this.stack.length-1],S=this.resume(),B=this.stack[this.stack.length-1];if(this.data.inReference=!0,B.type==="link"){const M=v.children;B.children=M}else B.alt=S}function f(){const v=this.resume(),S=this.stack[this.stack.length-1];S.url=v}function He(){const v=this.resume(),S=this.stack[this.stack.length-1];S.title=v}function ht(){this.data.inReference=void 0}function g(){this.data.referenceType="collapsed"}function Ve(v){const S=this.resume(),B=this.stack[this.stack.length-1];B.label=S,B.identifier=wn(this.sliceSerialize(v)).toLowerCase(),this.data.referenceType="full"}function Nt(v){this.data.characterReferenceType=v.type}function se(v){const S=this.sliceSerialize(v),B=this.data.characterReferenceType;let M;B?(M=Bc(S,B==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):M=qo(S);const V=this.stack[this.stack.length-1];V.value+=M}function Mn(v){const S=this.stack.pop();S.position.end=Ct(v.end)}function xt(v){W.call(this,v);const S=this.stack[this.stack.length-1];S.url=this.sliceSerialize(v)}function un(v){W.call(this,v);const S=this.stack[this.stack.length-1];S.url="mailto:"+this.sliceSerialize(v)}function dn(){return{type:"blockquote",children:[]}}function hr(){return{type:"code",lang:null,meta:null,value:""}}function Pu(){return{type:"inlineCode",value:""}}function Fu(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Mu(){return{type:"emphasis",children:[]}}function is(){return{type:"heading",depth:0,children:[]}}function os(){return{type:"break"}}function ss(){return{type:"html",value:""}}function Nu(){return{type:"image",title:null,url:"",alt:null}}function as(){return{type:"link",title:null,url:"",children:[]}}function ls(v){return{type:"list",ordered:v.type==="listOrdered",start:null,spread:v._spread,children:[]}}function Lu(v){return{type:"listItem",spread:v._spread,checked:null,children:[]}}function Du(){return{type:"paragraph",children:[]}}function _u(){return{type:"strong",children:[]}}function Ru(){return{type:"text",value:""}}function Hu(){return{type:"thematicBreak"}}}function Ct(n){return{line:n.line,column:n.column,offset:n.offset}}function Vc(n,e){let t=-1;for(;++t<e.length;){const r=e[t];Array.isArray(r)?Vc(n,r):Ew(n,r)}}function Ew(n,e){let t;for(t in e)if(Hc.call(e,t))switch(t){case"canContainEols":{const r=e[t];r&&n[t].push(...r);break}case"transforms":{const r=e[t];r&&n[t].push(...r);break}case"enter":case"exit":{const r=e[t];r&&Object.assign(n[t],r);break}}}function Aa(n,e){throw n?new Error("Cannot close `"+n.type+"` ("+Gn({start:n.start,end:n.end})+"): a different token (`"+e.type+"`, "+Gn({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+Gn({start:e.start,end:e.end})+") is still open")}function Aw(n){const e=this;e.parser=t;function t(r){return Sw(r,{...e.data("settings"),...n,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})}}const Ta={}.hasOwnProperty;function jc(n,e){const t=e||{};function r(i,...o){let s=r.invalid;const a=r.handlers;if(i&&Ta.call(i,n)){const l=String(i[n]);s=Ta.call(a,l)?a[l]:r.unknown}if(s)return s.call(this,i,...o)}return r.handlers=t.handlers||{},r.invalid=t.invalid,r.unknown=t.unknown,r}const Tw={}.hasOwnProperty;function qc(n,e){let t=-1,r;if(e.extensions)for(;++t<e.extensions.length;)qc(n,e.extensions[t]);for(r in e)if(Tw.call(e,r))switch(r){case"extensions":break;case"unsafe":{Ia(n[r],e[r]);break}case"join":{Ia(n[r],e[r]);break}case"handlers":{Iw(n[r],e[r]);break}default:n.options[r]=e[r]}return n}function Ia(n,e){e&&n.push(...e)}function Iw(n,e){e&&Object.assign(n,e)}function Bw(n,e,t,r){const i=t.enter("blockquote"),o=t.createTracker(r);o.move("> "),o.shift(2);const s=t.indentLines(t.containerFlow(n,o.current()),Ow);return i(),s}function Ow(n,e,t){return">"+(t?"":" ")+n}function Uc(n,e){return Ba(n,e.inConstruct,!0)&&!Ba(n,e.notInConstruct,!1)}function Ba(n,e,t){if(typeof e=="string"&&(e=[e]),!e||e.length===0)return t;let r=-1;for(;++r<e.length;)if(n.includes(e[r]))return!0;return!1}function Oa(n,e,t,r){let i=-1;for(;++i<t.unsafe.length;)if(t.unsafe[i].character===`
`&&Uc(t.stack,t.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function zw(n,e){const t=String(n);let r=t.indexOf(e),i=r,o=0,s=0;if(typeof e!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++o>s&&(s=o):o=1,i=r+e.length,r=t.indexOf(e,i);return s}function lo(n,e){return!!(e.options.fences===!1&&n.value&&!n.lang&&/[^ \r\n]/.test(n.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(n.value))}function Pw(n){const e=n.options.fence||"`";if(e!=="`"&&e!=="~")throw new Error("Cannot serialize code with `"+e+"` for `options.fence`, expected `` ` `` or `~`");return e}function Fw(n,e,t,r){const i=Pw(t),o=n.value||"",s=i==="`"?"GraveAccent":"Tilde";if(lo(n,t)){const d=t.enter("codeIndented"),p=t.indentLines(o,Mw);return d(),p}const a=t.createTracker(r),l=i.repeat(Math.max(zw(o,i)+1,3)),c=t.enter("codeFenced");let u=a.move(l);if(n.lang){const d=t.enter(`codeFencedLang${s}`);u+=a.move(t.safe(n.lang,{before:u,after:" ",encode:["`"],...a.current()})),d()}if(n.lang&&n.meta){const d=t.enter(`codeFencedMeta${s}`);u+=a.move(" "),u+=a.move(t.safe(n.meta,{before:u,after:`
`,encode:["`"],...a.current()})),d()}return u+=a.move(`
`),o&&(u+=a.move(o+`
`)),u+=a.move(l),c(),u}function Mw(n,e,t){return(t?"":"    ")+n}function Wo(n){const e=n.options.quote||'"';if(e!=='"'&&e!=="'")throw new Error("Cannot serialize title with `"+e+"` for `options.quote`, expected `\"`, or `'`");return e}function Nw(n,e,t,r){const i=Wo(t),o=i==='"'?"Quote":"Apostrophe",s=t.enter("definition");let a=t.enter("label");const l=t.createTracker(r);let c=l.move("[");return c+=l.move(t.safe(t.associationId(n),{before:c,after:"]",...l.current()})),c+=l.move("]: "),a(),!n.url||/[\0- \u007F]/.test(n.url)?(a=t.enter("destinationLiteral"),c+=l.move("<"),c+=l.move(t.safe(n.url,{before:c,after:">",...l.current()})),c+=l.move(">")):(a=t.enter("destinationRaw"),c+=l.move(t.safe(n.url,{before:c,after:n.title?" ":`
`,...l.current()}))),a(),n.title&&(a=t.enter(`title${o}`),c+=l.move(" "+i),c+=l.move(t.safe(n.title,{before:c,after:i,...l.current()})),c+=l.move(i),a()),s(),c}function Lw(n){const e=n.options.emphasis||"*";if(e!=="*"&&e!=="_")throw new Error("Cannot serialize emphasis with `"+e+"` for `options.emphasis`, expected `*`, or `_`");return e}function zt(n){return"&#x"+n.toString(16).toUpperCase()+";"}function Wr(n,e,t){const r=Kr(n),i=Kr(e);return r===void 0?i===void 0?t==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Kc.peek=Dw;function Kc(n,e,t,r){const i=Lw(t),o=t.enter("emphasis"),s=t.createTracker(r),a=s.move(i);let l=s.move(t.containerPhrasing(n,{after:i,before:a,...s.current()}));const c=l.charCodeAt(0),u=Wr(r.before.charCodeAt(r.before.length-1),c,i);u.inside&&(l=zt(c)+l.slice(1));const d=l.charCodeAt(l.length-1),p=Wr(r.after.charCodeAt(0),d,i);p.inside&&(l=l.slice(0,-1)+zt(d));const h=s.move(i);return o(),t.attentionEncodeSurroundingInfo={after:p.outside,before:u.outside},a+l+h}function Dw(n,e,t){return t.options.emphasis||"*"}const Go=function(n){if(n==null)return Vw;if(typeof n=="function")return mi(n);if(typeof n=="object")return Array.isArray(n)?_w(n):Rw(n);if(typeof n=="string")return Hw(n);throw new Error("Expected function, string, or object as test")};function _w(n){const e=[];let t=-1;for(;++t<n.length;)e[t]=Go(n[t]);return mi(r);function r(...i){let o=-1;for(;++o<e.length;)if(e[o].apply(this,i))return!0;return!1}}function Rw(n){const e=n;return mi(t);function t(r){const i=r;let o;for(o in n)if(i[o]!==e[o])return!1;return!0}}function Hw(n){return mi(e);function e(t){return t&&t.type===n}}function mi(n){return e;function e(t,r,i){return!!(jw(t)&&n.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function Vw(){return!0}function jw(n){return n!==null&&typeof n=="object"&&"type"in n}const Wc=[],qw=!0,co=!1,Uw="skip";function Kw(n,e,t,r){let i;typeof e=="function"&&typeof t!="function"?(r=t,t=e):i=e;const o=Go(i),s=r?-1:1;a(n,void 0,[])();function a(l,c,u){const d=l&&typeof l=="object"?l:{};if(typeof d.type=="string"){const h=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(l.type+(h?"<"+h+">":""))+")"})}return p;function p(){let h=Wc,x,C,P;if((!e||o(l,c,u[u.length-1]||void 0))&&(h=Ww(t(l,u)),h[0]===co))return h;if("children"in l&&l.children){const $=l;if($.children&&h[0]!==Uw)for(C=(r?$.children.length:-1)+s,P=u.concat($);C>-1&&C<$.children.length;){const F=$.children[C];if(x=a(F,C,P)(),x[0]===co)return x;C=typeof x[1]=="number"?x[1]:C+s}}return h}}}function Ww(n){return Array.isArray(n)?n:typeof n=="number"?[qw,n]:n==null?Wc:[n]}function Gc(n,e,t,r){let i,o,s;typeof e=="function"&&typeof t!="function"?(o=void 0,s=e,i=t):(o=e,s=t,i=r),Kw(n,o,a,i);function a(l,c){const u=c[c.length-1],d=u?u.children.indexOf(l):void 0;return s(l,d,u)}}function Xc(n,e){let t=!1;return Gc(n,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return t=!0,co}),!!((!n.depth||n.depth<3)&&jo(n)&&(e.options.setext||t))}function Gw(n,e,t,r){const i=Math.max(Math.min(6,n.depth||1),1),o=t.createTracker(r);if(Xc(n,t)){const u=t.enter("headingSetext"),d=t.enter("phrasing"),p=t.containerPhrasing(n,{...o.current(),before:`
`,after:`
`});return d(),u(),p+`
`+(i===1?"=":"-").repeat(p.length-(Math.max(p.lastIndexOf("\r"),p.lastIndexOf(`
`))+1))}const s="#".repeat(i),a=t.enter("headingAtx"),l=t.enter("phrasing");o.move(s+" ");let c=t.containerPhrasing(n,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(c)&&(c=zt(c.charCodeAt(0))+c.slice(1)),c=c?s+" "+c:s,t.options.closeAtx&&(c+=" "+s),l(),a(),c}Qc.peek=Xw;function Qc(n){return n.value||""}function Xw(){return"<"}Yc.peek=Qw;function Yc(n,e,t,r){const i=Wo(t),o=i==='"'?"Quote":"Apostrophe",s=t.enter("image");let a=t.enter("label");const l=t.createTracker(r);let c=l.move("![");return c+=l.move(t.safe(n.alt,{before:c,after:"]",...l.current()})),c+=l.move("]("),a(),!n.url&&n.title||/[\0- \u007F]/.test(n.url)?(a=t.enter("destinationLiteral"),c+=l.move("<"),c+=l.move(t.safe(n.url,{before:c,after:">",...l.current()})),c+=l.move(">")):(a=t.enter("destinationRaw"),c+=l.move(t.safe(n.url,{before:c,after:n.title?" ":")",...l.current()}))),a(),n.title&&(a=t.enter(`title${o}`),c+=l.move(" "+i),c+=l.move(t.safe(n.title,{before:c,after:i,...l.current()})),c+=l.move(i),a()),c+=l.move(")"),s(),c}function Qw(){return"!"}Zc.peek=Yw;function Zc(n,e,t,r){const i=n.referenceType,o=t.enter("imageReference");let s=t.enter("label");const a=t.createTracker(r);let l=a.move("![");const c=t.safe(n.alt,{before:l,after:"]",...a.current()});l+=a.move(c+"]["),s();const u=t.stack;t.stack=[],s=t.enter("reference");const d=t.safe(t.associationId(n),{before:l,after:"]",...a.current()});return s(),t.stack=u,o(),i==="full"||!c||c!==d?l+=a.move(d+"]"):i==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function Yw(){return"!"}Jc.peek=Zw;function Jc(n,e,t){let r=n.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<t.unsafe.length;){const s=t.unsafe[o],a=t.compilePattern(s);let l;if(s.atBreak)for(;l=a.exec(r);){let c=l.index;r.charCodeAt(c)===10&&r.charCodeAt(c-1)===13&&c--,r=r.slice(0,c)+" "+r.slice(l.index+1)}}return i+r+i}function Zw(){return"`"}function eu(n,e){const t=jo(n);return!!(!e.options.resourceLink&&n.url&&!n.title&&n.children&&n.children.length===1&&n.children[0].type==="text"&&(t===n.url||"mailto:"+t===n.url)&&/^[a-z][a-z+.-]+:/i.test(n.url)&&!/[\0- <>\u007F]/.test(n.url))}tu.peek=Jw;function tu(n,e,t,r){const i=Wo(t),o=i==='"'?"Quote":"Apostrophe",s=t.createTracker(r);let a,l;if(eu(n,t)){const u=t.stack;t.stack=[],a=t.enter("autolink");let d=s.move("<");return d+=s.move(t.containerPhrasing(n,{before:d,after:">",...s.current()})),d+=s.move(">"),a(),t.stack=u,d}a=t.enter("link"),l=t.enter("label");let c=s.move("[");return c+=s.move(t.containerPhrasing(n,{before:c,after:"](",...s.current()})),c+=s.move("]("),l(),!n.url&&n.title||/[\0- \u007F]/.test(n.url)?(l=t.enter("destinationLiteral"),c+=s.move("<"),c+=s.move(t.safe(n.url,{before:c,after:">",...s.current()})),c+=s.move(">")):(l=t.enter("destinationRaw"),c+=s.move(t.safe(n.url,{before:c,after:n.title?" ":")",...s.current()}))),l(),n.title&&(l=t.enter(`title${o}`),c+=s.move(" "+i),c+=s.move(t.safe(n.title,{before:c,after:i,...s.current()})),c+=s.move(i),l()),c+=s.move(")"),a(),c}function Jw(n,e,t){return eu(n,t)?"<":"["}nu.peek=ek;function nu(n,e,t,r){const i=n.referenceType,o=t.enter("linkReference");let s=t.enter("label");const a=t.createTracker(r);let l=a.move("[");const c=t.containerPhrasing(n,{before:l,after:"]",...a.current()});l+=a.move(c+"]["),s();const u=t.stack;t.stack=[],s=t.enter("reference");const d=t.safe(t.associationId(n),{before:l,after:"]",...a.current()});return s(),t.stack=u,o(),i==="full"||!c||c!==d?l+=a.move(d+"]"):i==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function ek(){return"["}function Xo(n){const e=n.options.bullet||"*";if(e!=="*"&&e!=="+"&&e!=="-")throw new Error("Cannot serialize items with `"+e+"` for `options.bullet`, expected `*`, `+`, or `-`");return e}function tk(n){const e=Xo(n),t=n.options.bulletOther;if(!t)return e==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===e)throw new Error("Expected `bullet` (`"+e+"`) and `bulletOther` (`"+t+"`) to be different");return t}function nk(n){const e=n.options.bulletOrdered||".";if(e!=="."&&e!==")")throw new Error("Cannot serialize items with `"+e+"` for `options.bulletOrdered`, expected `.` or `)`");return e}function ru(n){const e=n.options.rule||"*";if(e!=="*"&&e!=="-"&&e!=="_")throw new Error("Cannot serialize rules with `"+e+"` for `options.rule`, expected `*`, `-`, or `_`");return e}function rk(n,e,t,r){const i=t.enter("list"),o=t.bulletCurrent;let s=n.ordered?nk(t):Xo(t);const a=n.ordered?s==="."?")":".":tk(t);let l=e&&t.bulletLastUsed?s===t.bulletLastUsed:!1;if(!n.ordered){const u=n.children?n.children[0]:void 0;if((s==="*"||s==="-")&&u&&(!u.children||!u.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(l=!0),ru(t)===s&&u){let d=-1;for(;++d<n.children.length;){const p=n.children[d];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(s=a),t.bulletCurrent=s;const c=t.containerFlow(n,r);return t.bulletLastUsed=s,t.bulletCurrent=o,i(),c}function ik(n){const e=n.options.listItemIndent||"one";if(e!=="tab"&&e!=="one"&&e!=="mixed")throw new Error("Cannot serialize items with `"+e+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return e}function ok(n,e,t,r){const i=ik(t);let o=t.bulletCurrent||Xo(t);e&&e.type==="list"&&e.ordered&&(o=(typeof e.start=="number"&&e.start>-1?e.start:1)+(t.options.incrementListMarker===!1?0:e.children.indexOf(n))+o);let s=o.length+1;(i==="tab"||i==="mixed"&&(e&&e.type==="list"&&e.spread||n.spread))&&(s=Math.ceil(s/4)*4);const a=t.createTracker(r);a.move(o+" ".repeat(s-o.length)),a.shift(s);const l=t.enter("listItem"),c=t.indentLines(t.containerFlow(n,a.current()),u);return l(),c;function u(d,p,h){return p?(h?"":" ".repeat(s))+d:(h?o:o+" ".repeat(s-o.length))+d}}function sk(n,e,t,r){const i=t.enter("paragraph"),o=t.enter("phrasing"),s=t.containerPhrasing(n,r);return o(),i(),s}const ak=Go(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function lk(n,e,t,r){return(n.children.some(function(s){return ak(s)})?t.containerPhrasing:t.containerFlow).call(t,n,r)}function ck(n){const e=n.options.strong||"*";if(e!=="*"&&e!=="_")throw new Error("Cannot serialize strong with `"+e+"` for `options.strong`, expected `*`, or `_`");return e}iu.peek=uk;function iu(n,e,t,r){const i=ck(t),o=t.enter("strong"),s=t.createTracker(r),a=s.move(i+i);let l=s.move(t.containerPhrasing(n,{after:i,before:a,...s.current()}));const c=l.charCodeAt(0),u=Wr(r.before.charCodeAt(r.before.length-1),c,i);u.inside&&(l=zt(c)+l.slice(1));const d=l.charCodeAt(l.length-1),p=Wr(r.after.charCodeAt(0),d,i);p.inside&&(l=l.slice(0,-1)+zt(d));const h=s.move(i+i);return o(),t.attentionEncodeSurroundingInfo={after:p.outside,before:u.outside},a+l+h}function uk(n,e,t){return t.options.strong||"*"}function dk(n,e,t,r){return t.safe(n.value,r)}function hk(n){const e=n.options.ruleRepetition||3;if(e<3)throw new Error("Cannot serialize rules with repetition `"+e+"` for `options.ruleRepetition`, expected `3` or more");return e}function pk(n,e,t){const r=(ru(t)+(t.options.ruleSpaces?" ":"")).repeat(hk(t));return t.options.ruleSpaces?r.slice(0,-1):r}const fk={blockquote:Bw,break:Oa,code:Fw,definition:Nw,emphasis:Kc,hardBreak:Oa,heading:Gw,html:Qc,image:Yc,imageReference:Zc,inlineCode:Jc,link:tu,linkReference:nu,list:rk,listItem:ok,paragraph:sk,root:lk,strong:iu,text:dk,thematicBreak:pk},gk=[mk];function mk(n,e,t,r){if(e.type==="code"&&lo(e,r)&&(n.type==="list"||n.type===e.type&&lo(n,r)))return!1;if("spread"in t&&typeof t.spread=="boolean")return n.type==="paragraph"&&(n.type===e.type||e.type==="definition"||e.type==="heading"&&Xc(e,r))?void 0:t.spread?1:0}const Ht=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"],bk=[{character:"	",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",before:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"\r",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:`
`,inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:" ",after:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",before:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"!",after:"\\[",inConstruct:"phrasing",notInConstruct:Ht},{character:'"',inConstruct:"titleQuote"},{atBreak:!0,character:"#"},{character:"#",inConstruct:"headingAtx",after:`(?:[\r
]|$)`},{character:"&",after:"[#A-Za-z]",inConstruct:"phrasing"},{character:"'",inConstruct:"titleApostrophe"},{character:"(",inConstruct:"destinationRaw"},{before:"\\]",character:"(",inConstruct:"phrasing",notInConstruct:Ht},{atBreak:!0,before:"\\d+",character:")"},{character:")",inConstruct:"destinationRaw"},{atBreak:!0,character:"*",after:`(?:[ 	\r
*])`},{character:"*",inConstruct:"phrasing",notInConstruct:Ht},{atBreak:!0,character:"+",after:`(?:[ 	\r
])`},{atBreak:!0,character:"-",after:`(?:[ 	\r
-])`},{atBreak:!0,before:"\\d+",character:".",after:`(?:[ 	\r
]|$)`},{atBreak:!0,character:"<",after:"[!/?A-Za-z]"},{character:"<",after:"[!/?A-Za-z]",inConstruct:"phrasing",notInConstruct:Ht},{character:"<",inConstruct:"destinationLiteral"},{atBreak:!0,character:"="},{atBreak:!0,character:">"},{character:">",inConstruct:"destinationLiteral"},{atBreak:!0,character:"["},{character:"[",inConstruct:"phrasing",notInConstruct:Ht},{character:"[",inConstruct:["label","reference"]},{character:"\\",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"]",inConstruct:["label","reference"]},{atBreak:!0,character:"_"},{character:"_",inConstruct:"phrasing",notInConstruct:Ht},{atBreak:!0,character:"`"},{character:"`",inConstruct:["codeFencedLangGraveAccent","codeFencedMetaGraveAccent"]},{character:"`",inConstruct:"phrasing",notInConstruct:Ht},{atBreak:!0,character:"~"}];function vk(n){return n.label||!n.identifier?n.label||"":Rc(n.identifier)}function yk(n){if(!n._compiled){const e=(n.atBreak?"[\\r\\n][\\t ]*":"")+(n.before?"(?:"+n.before+")":"");n._compiled=new RegExp((e?"("+e+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(n.character)?"\\":"")+n.character+(n.after?"(?:"+n.after+")":""),"g")}return n._compiled}function wk(n,e,t){const r=e.indexStack,i=n.children||[],o=[];let s=-1,a=t.before,l;r.push(-1);let c=e.createTracker(t);for(;++s<i.length;){const u=i[s];let d;if(r[r.length-1]=s,s+1<i.length){let x=e.handle.handlers[i[s+1].type];x&&x.peek&&(x=x.peek),d=x?x(i[s+1],n,e,{before:"",after:"",...c.current()}).charAt(0):""}else d=t.after;o.length>0&&(a==="\r"||a===`
`)&&u.type==="html"&&(o[o.length-1]=o[o.length-1].replace(/(\r?\n|\r)$/," "),a=" ",c=e.createTracker(t),c.move(o.join("")));let p=e.handle(u,n,e,{...c.current(),after:d,before:a});l&&l===p.slice(0,1)&&(p=zt(l.charCodeAt(0))+p.slice(1));const h=e.attentionEncodeSurroundingInfo;e.attentionEncodeSurroundingInfo=void 0,l=void 0,h&&(o.length>0&&h.before&&a===o[o.length-1].slice(-1)&&(o[o.length-1]=o[o.length-1].slice(0,-1)+zt(a.charCodeAt(0))),h.after&&(l=d)),c.move(p),o.push(p),a=p.slice(-1)}return r.pop(),o.join("")}function kk(n,e,t){const r=e.indexStack,i=n.children||[],o=e.createTracker(t),s=[];let a=-1;for(r.push(-1);++a<i.length;){const l=i[a];r[r.length-1]=a,s.push(o.move(e.handle(l,n,e,{before:`
`,after:`
`,...o.current()}))),l.type!=="list"&&(e.bulletLastUsed=void 0),a<i.length-1&&s.push(o.move(xk(l,i[a+1],n,e)))}return r.pop(),s.join("")}function xk(n,e,t,r){let i=r.join.length;for(;i--;){const o=r.join[i](n,e,t,r);if(o===!0||o===1)break;if(typeof o=="number")return`
`.repeat(1+o);if(o===!1)return`

<!---->

`}return`

`}const $k=/\r?\n|\r/g;function Sk(n,e){const t=[];let r=0,i=0,o;for(;o=$k.exec(n);)s(n.slice(r,o.index)),t.push(o[0]),r=o.index+o[0].length,i++;return s(n.slice(r)),t.join("");function s(a){t.push(e(a,i,!a))}}function Ck(n,e,t){const r=(t.before||"")+(e||"")+(t.after||""),i=[],o=[],s={};let a=-1;for(;++a<n.unsafe.length;){const u=n.unsafe[a];if(!Uc(n.stack,u))continue;const d=n.compilePattern(u);let p;for(;p=d.exec(r);){const h="before"in u||!!u.atBreak,x="after"in u,C=p.index+(h?p[1].length:0);i.includes(C)?(s[C].before&&!h&&(s[C].before=!1),s[C].after&&!x&&(s[C].after=!1)):(i.push(C),s[C]={before:h,after:x})}}i.sort(Ek);let l=t.before?t.before.length:0;const c=r.length-(t.after?t.after.length:0);for(a=-1;++a<i.length;){const u=i[a];u<l||u>=c||u+1<c&&i[a+1]===u+1&&s[u].after&&!s[u+1].before&&!s[u+1].after||i[a-1]===u-1&&s[u].before&&!s[u-1].before&&!s[u-1].after||(l!==u&&o.push(za(r.slice(l,u),"\\")),l=u,/[!-/:-@[-`{-~]/.test(r.charAt(u))&&(!t.encode||!t.encode.includes(r.charAt(u)))?o.push("\\"):(o.push(zt(r.charCodeAt(u))),l++))}return o.push(za(r.slice(l,c),t.after)),o.join("")}function Ek(n,e){return n-e}function za(n,e){const t=/\\(?=[!-/:-@[-`{-~])/g,r=[],i=[],o=n+e;let s=-1,a=0,l;for(;l=t.exec(o);)r.push(l.index);for(;++s<r.length;)a!==r[s]&&i.push(n.slice(a,r[s])),i.push("\\"),a=r[s];return i.push(n.slice(a)),i.join("")}function Ak(n){const e=n||{},t=e.now||{};let r=e.lineShift||0,i=t.line||1,o=t.column||1;return{move:l,current:s,shift:a};function s(){return{now:{line:i,column:o},lineShift:r}}function a(c){r+=c}function l(c){const u=c||"",d=u.split(/\r?\n|\r/g),p=d[d.length-1];return i+=d.length-1,o=d.length===1?o+p.length:1+p.length+r,u}}function Tk(n,e){const t=e||{},r={associationId:vk,containerPhrasing:zk,containerFlow:Pk,createTracker:Ak,compilePattern:yk,enter:o,handlers:{...fk},handle:void 0,indentLines:Sk,indexStack:[],join:[...gk],options:{},safe:Fk,stack:[],unsafe:[...bk]};qc(r,t),r.options.tightDefinitions&&r.join.push(Ok),r.handle=jc("type",{invalid:Ik,unknown:Bk,handlers:r.handlers});let i=r.handle(n,void 0,r,{before:`
`,after:`
`,now:{line:1,column:1},lineShift:0});return i&&i.charCodeAt(i.length-1)!==10&&i.charCodeAt(i.length-1)!==13&&(i+=`
`),i;function o(s){return r.stack.push(s),a;function a(){r.stack.pop()}}}function Ik(n){throw new Error("Cannot handle value `"+n+"`, expected node")}function Bk(n){const e=n;throw new Error("Cannot handle unknown node `"+e.type+"`")}function Ok(n,e){if(n.type==="definition"&&n.type===e.type)return 0}function zk(n,e){return wk(n,this,e)}function Pk(n,e){return kk(n,this,e)}function Fk(n,e){return Ck(this,n,e)}function Mk(n){const e=this;e.compiler=t;function t(r){return Tk(r,{...e.data("settings"),...n,extensions:e.data("toMarkdownExtensions")||[]})}}function Pa(n){if(n)throw n}var Br=Object.prototype.hasOwnProperty,ou=Object.prototype.toString,Fa=Object.defineProperty,Ma=Object.getOwnPropertyDescriptor,Na=function(e){return typeof Array.isArray=="function"?Array.isArray(e):ou.call(e)==="[object Array]"},La=function(e){if(!e||ou.call(e)!=="[object Object]")return!1;var t=Br.call(e,"constructor"),r=e.constructor&&e.constructor.prototype&&Br.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!t&&!r)return!1;var i;for(i in e);return typeof i>"u"||Br.call(e,i)},Da=function(e,t){Fa&&t.name==="__proto__"?Fa(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},_a=function(e,t){if(t==="__proto__")if(Br.call(e,t)){if(Ma)return Ma(e,t).value}else return;return e[t]},Nk=function n(){var e,t,r,i,o,s,a=arguments[0],l=1,c=arguments.length,u=!1;for(typeof a=="boolean"&&(u=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<c;++l)if(e=arguments[l],e!=null)for(t in e)r=_a(a,t),i=_a(e,t),a!==i&&(u&&i&&(La(i)||(o=Na(i)))?(o?(o=!1,s=r&&Na(r)?r:[]):s=r&&La(r)?r:{},Da(a,{name:t,newValue:n(u,s,i)})):typeof i<"u"&&Da(a,{name:t,newValue:i}));return a};const Ei=ph(Nk);function uo(n){if(typeof n!="object"||n===null)return!1;const e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function Lk(){const n=[],e={run:t,use:r};return e;function t(...i){let o=-1;const s=i.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...i);function a(l,...c){const u=n[++o];let d=-1;if(l){s(l);return}for(;++d<i.length;)(c[d]===null||c[d]===void 0)&&(c[d]=i[d]);i=c,u?Dk(u,a)(...c):s(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return n.push(i),e}}function Dk(n,e){let t;return r;function r(...s){const a=n.length>s.length;let l;a&&s.push(i);try{l=n.apply(this,s)}catch(c){const u=c;if(a&&t)throw u;return i(u)}a||(l&&l.then&&typeof l.then=="function"?l.then(o,i):l instanceof Error?i(l):o(l))}function i(s,...a){t||(t=!0,e(s,...a))}function o(s){i(null,s)}}class Ae extends Error{constructor(e,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",o={},s=!1;if(t&&("line"in t&&"column"in t?o={place:t}:"start"in t&&"end"in t?o={place:t}:"type"in t?o={ancestors:[t],place:t.position}:o={...t}),typeof e=="string"?i=e:!o.cause&&e&&(s=!0,i=e.message,o.cause=e),!o.ruleId&&!o.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?o.ruleId=r:(o.source=r.slice(0,l),o.ruleId=r.slice(l+1))}if(!o.place&&o.ancestors&&o.ancestors){const l=o.ancestors[o.ancestors.length-1];l&&(o.place=l.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=i,this.line=a?a.line:void 0,this.name=Gn(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual,this.expected,this.note,this.url}}Ae.prototype.file="";Ae.prototype.name="";Ae.prototype.reason="";Ae.prototype.message="";Ae.prototype.stack="";Ae.prototype.column=void 0;Ae.prototype.line=void 0;Ae.prototype.ancestors=void 0;Ae.prototype.cause=void 0;Ae.prototype.fatal=void 0;Ae.prototype.place=void 0;Ae.prototype.ruleId=void 0;Ae.prototype.source=void 0;const Qe={basename:_k,dirname:Rk,extname:Hk,join:Vk,sep:"/"};function _k(n,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');cr(n);let t=0,r=-1,i=n.length,o;if(e===void 0||e.length===0||e.length>n.length){for(;i--;)if(n.codePointAt(i)===47){if(o){t=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":n.slice(t,r)}if(e===n)return"";let s=-1,a=e.length-1;for(;i--;)if(n.codePointAt(i)===47){if(o){t=i+1;break}}else s<0&&(o=!0,s=i+1),a>-1&&(n.codePointAt(i)===e.codePointAt(a--)?a<0&&(r=i):(a=-1,r=s));return t===r?r=s:r<0&&(r=n.length),n.slice(t,r)}function Rk(n){if(cr(n),n.length===0)return".";let e=-1,t=n.length,r;for(;--t;)if(n.codePointAt(t)===47){if(r){e=t;break}}else r||(r=!0);return e<0?n.codePointAt(0)===47?"/":".":e===1&&n.codePointAt(0)===47?"//":n.slice(0,e)}function Hk(n){cr(n);let e=n.length,t=-1,r=0,i=-1,o=0,s;for(;e--;){const a=n.codePointAt(e);if(a===47){if(s){r=e+1;break}continue}t<0&&(s=!0,t=e+1),a===46?i<0?i=e:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||t<0||o===0||o===1&&i===t-1&&i===r+1?"":n.slice(i,t)}function Vk(...n){let e=-1,t;for(;++e<n.length;)cr(n[e]),n[e]&&(t=t===void 0?n[e]:t+"/"+n[e]);return t===void 0?".":jk(t)}function jk(n){cr(n);const e=n.codePointAt(0)===47;let t=qk(n,!e);return t.length===0&&!e&&(t="."),t.length>0&&n.codePointAt(n.length-1)===47&&(t+="/"),e?"/"+t:t}function qk(n,e){let t="",r=0,i=-1,o=0,s=-1,a,l;for(;++s<=n.length;){if(s<n.length)a=n.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(i===s-1||o===1))if(i!==s-1&&o===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(l=t.lastIndexOf("/"),l!==t.length-1){l<0?(t="",r=0):(t=t.slice(0,l),r=t.length-1-t.lastIndexOf("/")),i=s,o=0;continue}}else if(t.length>0){t="",r=0,i=s,o=0;continue}}e&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+n.slice(i+1,s):t=n.slice(i+1,s),r=s-i-1;i=s,o=0}else a===46&&o>-1?o++:o=-1}return t}function cr(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}const Uk={cwd:Kk};function Kk(){return"/"}function ho(n){return!!(n!==null&&typeof n=="object"&&"href"in n&&n.href&&"protocol"in n&&n.protocol&&n.auth===void 0)}function Wk(n){if(typeof n=="string")n=new URL(n);else if(!ho(n)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+n+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(n.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return Gk(n)}function Gk(n){if(n.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const e=n.pathname;let t=-1;for(;++t<e.length;)if(e.codePointAt(t)===37&&e.codePointAt(t+1)===50){const r=e.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(e)}const Ai=["history","path","basename","stem","extname","dirname"];class Xk{constructor(e){let t;e?ho(e)?t={path:e}:typeof e=="string"||Qk(e)?t={value:e}:t=e:t={},this.cwd="cwd"in t?"":Uk.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Ai.length;){const o=Ai[r];o in t&&t[o]!==void 0&&t[o]!==null&&(this[o]=o==="history"?[...t[o]]:t[o])}let i;for(i in t)Ai.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?Qe.basename(this.path):void 0}set basename(e){Ii(e,"basename"),Ti(e,"basename"),this.path=Qe.join(this.dirname||"",e)}get dirname(){return typeof this.path=="string"?Qe.dirname(this.path):void 0}set dirname(e){Ra(this.basename,"dirname"),this.path=Qe.join(e||"",this.basename)}get extname(){return typeof this.path=="string"?Qe.extname(this.path):void 0}set extname(e){if(Ti(e,"extname"),Ra(this.dirname,"extname"),e){if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Qe.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){ho(e)&&(e=Wk(e)),Ii(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path=="string"?Qe.basename(this.path,this.extname):void 0}set stem(e){Ii(e,"stem"),Ti(e,"stem"),this.path=Qe.join(this.dirname||"",e+(this.extname||""))}fail(e,t,r){const i=this.message(e,t,r);throw i.fatal=!0,i}info(e,t,r){const i=this.message(e,t,r);return i.fatal=void 0,i}message(e,t,r){const i=new Ae(e,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(e){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)}}function Ti(n,e){if(n&&n.includes(Qe.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+Qe.sep+"`")}function Ii(n,e){if(!n)throw new Error("`"+e+"` cannot be empty")}function Ra(n,e){if(!n)throw new Error("Setting `"+e+"` requires `path` to be set too")}function Qk(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const Yk=function(n){const r=this.constructor.prototype,i=r[n],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},Zk={}.hasOwnProperty;class Qo extends Yk{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Lk()}copy(){const e=new Qo;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];e.use(...r)}return e.data(Ei(!0,{},this.namespace)),e}data(e,t){return typeof e=="string"?arguments.length===2?(zi("data",this.frozen),this.namespace[e]=t,this):Zk.call(this.namespace,e)&&this.namespace[e]||void 0:e?(zi("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(e,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const t=wr(e),r=this.parser||this.Parser;return Bi("parse",r),r(String(t),t)}process(e,t){const r=this;return this.freeze(),Bi("process",this.parser||this.Parser),Oi("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(o,s){const a=wr(e),l=r.parse(a);r.run(l,a,function(u,d,p){if(u||!d||!p)return c(u);const h=d,x=r.stringify(h,p);t0(x)?p.value=x:p.result=x,c(u,p)});function c(u,d){u||!d?s(u):o?o(d):t(void 0,d)}}}processSync(e){let t=!1,r;return this.freeze(),Bi("processSync",this.parser||this.Parser),Oi("processSync",this.compiler||this.Compiler),this.process(e,i),Va("processSync","process",t),r;function i(o,s){t=!0,Pa(o),r=s}}run(e,t,r){Ha(e),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?o(void 0,r):new Promise(o);function o(s,a){const l=wr(t);i.run(e,l,c);function c(u,d,p){const h=d||e;u?a(u):s?s(h):r(void 0,h,p)}}}runSync(e,t){let r=!1,i;return this.run(e,t,o),Va("runSync","run",r),i;function o(s,a){Pa(s),i=a,r=!0}}stringify(e,t){this.freeze();const r=wr(t),i=this.compiler||this.Compiler;return Oi("stringify",i),Ha(e),i(e,r)}use(e,...t){const r=this.attachers,i=this.namespace;if(zi("use",this.frozen),e!=null)if(typeof e=="function")l(e,t);else if(typeof e=="object")Array.isArray(e)?a(e):s(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function o(c){if(typeof c=="function")l(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[u,...d]=c;l(u,d)}else s(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function s(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(c.plugins),c.settings&&(i.settings=Ei(!0,i.settings,c.settings))}function a(c){let u=-1;if(c!=null)if(Array.isArray(c))for(;++u<c.length;){const d=c[u];o(d)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function l(c,u){let d=-1,p=-1;for(;++d<r.length;)if(r[d][0]===c){p=d;break}if(p===-1)r.push([c,...u]);else if(u.length>0){let[h,...x]=u;const C=r[p][1];uo(C)&&uo(h)&&(h=Ei(!0,C,h)),r[p]=[c,h,...x]}}}}const Jk=new Qo().freeze();function Bi(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `parser`")}function Oi(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `compiler`")}function zi(n,e){if(e)throw new Error("Cannot call `"+n+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Ha(n){if(!uo(n)||typeof n.type!="string")throw new TypeError("Expected node, got `"+n+"`")}function Va(n,e,t){if(!t)throw new Error("`"+n+"` finished async. Use `"+e+"` instead")}function wr(n){return e0(n)?n:new Xk(n)}function e0(n){return!!(n&&typeof n=="object"&&"message"in n&&"messages"in n)}function t0(n){return typeof n=="string"||n0(n)}function n0(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const r0=Jk().use(Aw).use(Mk).freeze(),su=-1,bi=0,Gr=1,Xr=2,Yo=3,Zo=4,Jo=5,es=6,au=7,lu=8,ja=typeof self=="object"?self:globalThis,i0=(n,e)=>{const t=(i,o)=>(n.set(o,i),i),r=i=>{if(n.has(i))return n.get(i);const[o,s]=e[i];switch(o){case bi:case su:return t(s,i);case Gr:{const a=t([],i);for(const l of s)a.push(r(l));return a}case Xr:{const a=t({},i);for(const[l,c]of s)a[r(l)]=r(c);return a}case Yo:return t(new Date(s),i);case Zo:{const{source:a,flags:l}=s;return t(new RegExp(a,l),i)}case Jo:{const a=t(new Map,i);for(const[l,c]of s)a.set(r(l),r(c));return a}case es:{const a=t(new Set,i);for(const l of s)a.add(r(l));return a}case au:{const{name:a,message:l}=s;return t(new ja[a](l),i)}case lu:return t(BigInt(s),i);case"BigInt":return t(Object(BigInt(s)),i)}return t(new ja[o](s),i)};return r},qa=n=>i0(new Map,n)(0),pn="",{toString:o0}={},{keys:s0}=Object,Vn=n=>{const e=typeof n;if(e!=="object"||!n)return[bi,e];const t=o0.call(n).slice(8,-1);switch(t){case"Array":return[Gr,pn];case"Object":return[Xr,pn];case"Date":return[Yo,pn];case"RegExp":return[Zo,pn];case"Map":return[Jo,pn];case"Set":return[es,pn]}return t.includes("Array")?[Gr,t]:t.includes("Error")?[au,t]:[Xr,t]},kr=([n,e])=>n===bi&&(e==="function"||e==="symbol"),a0=(n,e,t,r)=>{const i=(s,a)=>{const l=r.push(s)-1;return t.set(a,l),l},o=s=>{if(t.has(s))return t.get(s);let[a,l]=Vn(s);switch(a){case bi:{let u=s;switch(l){case"bigint":a=lu,u=s.toString();break;case"function":case"symbol":if(n)throw new TypeError("unable to serialize "+l);u=null;break;case"undefined":return i([su],s)}return i([a,u],s)}case Gr:{if(l)return i([l,[...s]],s);const u=[],d=i([a,u],s);for(const p of s)u.push(o(p));return d}case Xr:{if(l)switch(l){case"BigInt":return i([l,s.toString()],s);case"Boolean":case"Number":case"String":return i([l,s.valueOf()],s)}if(e&&"toJSON"in s)return o(s.toJSON());const u=[],d=i([a,u],s);for(const p of s0(s))(n||!kr(Vn(s[p])))&&u.push([o(p),o(s[p])]);return d}case Yo:return i([a,s.toISOString()],s);case Zo:{const{source:u,flags:d}=s;return i([a,{source:u,flags:d}],s)}case Jo:{const u=[],d=i([a,u],s);for(const[p,h]of s)(n||!(kr(Vn(p))||kr(Vn(h))))&&u.push([o(p),o(h)]);return d}case es:{const u=[],d=i([a,u],s);for(const p of s)(n||!kr(Vn(p)))&&u.push(o(p));return d}}const{message:c}=s;return i([a,{name:l,message:c}],s)};return o},Ua=(n,{json:e,lossy:t}={})=>{const r=[];return a0(!(e||t),!!e,new Map,r)(n),r},tr=typeof structuredClone=="function"?(n,e)=>e&&("json"in e||"lossy"in e)?qa(Ua(n,e)):structuredClone(n):(n,e)=>qa(Ua(n,e)),cu=du("end"),uu=du("start");function du(n){return e;function e(t){const r=t&&t.position&&t.position[n]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function hu(n){const e=uu(n),t=cu(n);if(e&&t)return{start:e,end:t}}const Vt=["ariaDescribedBy","ariaLabel","ariaLabelledBy"],Ka={ancestors:{tbody:["table"],td:["table"],th:["table"],thead:["table"],tfoot:["table"],tr:["table"]},attributes:{a:[...Vt,"dataFootnoteBackref","dataFootnoteRef",["className","data-footnote-backref"],"href"],blockquote:["cite"],code:[["className",/^language-./]],del:["cite"],div:["itemScope","itemType"],dl:[...Vt],h2:[["className","sr-only"]],img:[...Vt,"longDesc","src"],input:[["disabled",!0],["type","checkbox"]],ins:["cite"],li:[["className","task-list-item"]],ol:[...Vt,["className","contains-task-list"]],q:["cite"],section:["dataFootnotes",["className","footnotes"]],source:["srcSet"],summary:[...Vt],table:[...Vt],ul:[...Vt,["className","contains-task-list"]],"*":["abbr","accept","acceptCharset","accessKey","action","align","alt","axis","border","cellPadding","cellSpacing","char","charOff","charSet","checked","clear","colSpan","color","cols","compact","coords","dateTime","dir","encType","frame","hSpace","headers","height","hrefLang","htmlFor","id","isMap","itemProp","label","lang","maxLength","media","method","multiple","name","noHref","noShade","noWrap","open","prompt","readOnly","rev","rowSpan","rows","rules","scope","selected","shape","size","span","start","summary","tabIndex","title","useMap","vAlign","value","width"]},clobber:["ariaDescribedBy","ariaLabelledBy","id","name"],clobberPrefix:"user-content-",protocols:{cite:["http","https"],href:["http","https","irc","ircs","mailto","xmpp"],longDesc:["http","https"],src:["http","https"]},required:{input:{disabled:!0,type:"checkbox"}},strip:["script"],tagNames:["a","b","blockquote","br","code","dd","del","details","div","dl","dt","em","h1","h2","h3","h4","h5","h6","hr","i","img","input","ins","kbd","li","ol","p","picture","pre","q","rp","rt","ruby","s","samp","section","source","span","strike","strong","sub","summary","sup","table","tbody","td","tfoot","th","thead","tr","tt","ul","var"]},Et={}.hasOwnProperty;function l0(n,e){let t={type:"root",children:[]};const r={schema:e?{...Ka,...e}:Ka,stack:[]},i=pu(r,n);return i&&(Array.isArray(i)?i.length===1?t=i[0]:t.children=i:t=i),t}function pu(n,e){if(e&&typeof e=="object"){const t=e;switch(typeof t.type=="string"?t.type:""){case"comment":return c0(n,t);case"doctype":return u0(n,t);case"element":return d0(n,t);case"root":return h0(n,t);case"text":return p0(n,t)}}}function c0(n,e){if(n.schema.allowComments){const t=typeof e.value=="string"?e.value:"",r=t.indexOf("-->"),o={type:"comment",value:r<0?t:t.slice(0,r)};return ur(o,e),o}}function u0(n,e){if(n.schema.allowDoctypes){const t={type:"doctype"};return ur(t,e),t}}function d0(n,e){const t=typeof e.tagName=="string"?e.tagName:"";n.stack.push(t);const r=fu(n,e.children),i=f0(n,e.properties);n.stack.pop();let o=!1;if(t&&t!=="*"&&(!n.schema.tagNames||n.schema.tagNames.includes(t))&&(o=!0,n.schema.ancestors&&Et.call(n.schema.ancestors,t))){const a=n.schema.ancestors[t];let l=-1;for(o=!1;++l<a.length;)n.stack.includes(a[l])&&(o=!0)}if(!o)return n.schema.strip&&!n.schema.strip.includes(t)?r:void 0;const s={type:"element",tagName:t,properties:i,children:r};return ur(s,e),s}function h0(n,e){const r={type:"root",children:fu(n,e.children)};return ur(r,e),r}function p0(n,e){const r={type:"text",value:typeof e.value=="string"?e.value:""};return ur(r,e),r}function fu(n,e){const t=[];if(Array.isArray(e)){const r=e;let i=-1;for(;++i<r.length;){const o=pu(n,r[i]);o&&(Array.isArray(o)?t.push(...o):t.push(o))}}return t}function f0(n,e){const t=n.stack[n.stack.length-1],r=n.schema.attributes,i=n.schema.required,o=r&&Et.call(r,t)?r[t]:void 0,s=r&&Et.call(r,"*")?r["*"]:void 0,a=e&&typeof e=="object"?e:{},l={};let c;for(c in a)if(Et.call(a,c)){const u=a[c];let d=Wa(n,Ga(o,c),c,u);d==null&&(d=Wa(n,Ga(s,c),c,u)),d!=null&&(l[c]=d)}if(i&&Et.call(i,t)){const u=i[t];for(c in u)Et.call(u,c)&&!Et.call(l,c)&&(l[c]=u[c])}return l}function Wa(n,e,t,r){return e?Array.isArray(r)?g0(n,e,t,r):gu(n,e,t,r):void 0}function g0(n,e,t,r){let i=-1;const o=[];for(;++i<r.length;){const s=gu(n,e,t,r[i]);(typeof s=="number"||typeof s=="string")&&o.push(s)}return o}function gu(n,e,t,r){if(!(typeof r!="boolean"&&typeof r!="number"&&typeof r!="string")&&m0(n,t,r)){if(typeof e=="object"&&e.length>1){let i=!1,o=0;for(;++o<e.length;){const s=e[o];if(s&&typeof s=="object"&&"flags"in s){if(s.test(String(r))){i=!0;break}}else if(s===r){i=!0;break}}if(!i)return}return n.schema.clobber&&n.schema.clobberPrefix&&n.schema.clobber.includes(t)?n.schema.clobberPrefix+r:r}}function m0(n,e,t){const r=n.schema.protocols&&Et.call(n.schema.protocols,e)?n.schema.protocols[e]:void 0;if(!r||r.length===0)return!0;const i=String(t),o=i.indexOf(":"),s=i.indexOf("?"),a=i.indexOf("#"),l=i.indexOf("/");if(o<0||l>-1&&o>l||s>-1&&o>s||a>-1&&o>a)return!0;let c=-1;for(;++c<r.length;){const u=r[c];if(o===u.length&&i.slice(0,u.length)===u)return!0}return!1}function ur(n,e){const t=hu(e);e.data&&(n.data=tr(e.data)),t&&(n.position=t)}function Ga(n,e){let t,r=-1;if(n)for(;++r<n.length;){const i=n[r],o=typeof i=="string"?i:i[0];if(o===e)return i;o==="data*"&&(t=i)}if(e.length>4&&e.slice(0,4).toLowerCase()==="data")return t}function b0(n,e){const t={type:"element",tagName:"blockquote",properties:{},children:n.wrap(n.all(e),!0)};return n.patch(e,t),n.applyData(e,t)}function v0(n,e){const t={type:"element",tagName:"br",properties:{},children:[]};return n.patch(e,t),[n.applyData(e,t),{type:"text",value:`
`}]}function y0(n,e){const t=e.value?e.value+`
`:"",r={};e.lang&&(r.className=["language-"+e.lang]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return e.meta&&(i.data={meta:e.meta}),n.patch(e,i),i=n.applyData(e,i),i={type:"element",tagName:"pre",properties:{},children:[i]},n.patch(e,i),i}function w0(n,e){const t={type:"element",tagName:"del",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function k0(n,e){const t={type:"element",tagName:"em",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function x0(n,e){const t=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",r=String(e.identifier).toUpperCase(),i=Pn(r.toLowerCase()),o=n.footnoteOrder.indexOf(r);let s,a=n.footnoteCounts.get(r);a===void 0?(a=0,n.footnoteOrder.push(r),s=n.footnoteOrder.length):s=o+1,a+=1,n.footnoteCounts.set(r,a);const l={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};n.patch(e,l);const c={type:"element",tagName:"sup",properties:{},children:[l]};return n.patch(e,c),n.applyData(e,c)}function $0(n,e){const t={type:"element",tagName:"h"+e.depth,properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function S0(n,e){if(n.options.allowDangerousHtml){const t={type:"raw",value:e.value};return n.patch(e,t),n.applyData(e,t)}}function mu(n,e){const t=e.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+r}];const i=n.all(e),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const s=i[i.length-1];return s&&s.type==="text"?s.value+=r:i.push({type:"text",value:r}),i}function C0(n,e){const t=String(e.identifier).toUpperCase(),r=n.definitionById.get(t);if(!r)return mu(n,e);const i={src:Pn(r.url||""),alt:e.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return n.patch(e,o),n.applyData(e,o)}function E0(n,e){const t={src:Pn(e.url)};e.alt!==null&&e.alt!==void 0&&(t.alt=e.alt),e.title!==null&&e.title!==void 0&&(t.title=e.title);const r={type:"element",tagName:"img",properties:t,children:[]};return n.patch(e,r),n.applyData(e,r)}function A0(n,e){const t={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};n.patch(e,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return n.patch(e,r),n.applyData(e,r)}function T0(n,e){const t=String(e.identifier).toUpperCase(),r=n.definitionById.get(t);if(!r)return mu(n,e);const i={href:Pn(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:n.all(e)};return n.patch(e,o),n.applyData(e,o)}function I0(n,e){const t={href:Pn(e.url)};e.title!==null&&e.title!==void 0&&(t.title=e.title);const r={type:"element",tagName:"a",properties:t,children:n.all(e)};return n.patch(e,r),n.applyData(e,r)}function B0(n,e,t){const r=n.all(e),i=t?O0(t):bu(e),o={},s=[];if(typeof e.checked=="boolean"){const u=r[0];let d;u&&u.type==="element"&&u.tagName==="p"?d=u:(d={type:"element",tagName:"p",properties:{},children:[]},r.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const u=r[a];(i||a!==0||u.type!=="element"||u.tagName!=="p")&&s.push({type:"text",value:`
`}),u.type==="element"&&u.tagName==="p"&&!i?s.push(...u.children):s.push(u)}const l=r[r.length-1];l&&(i||l.type!=="element"||l.tagName!=="p")&&s.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:o,children:s};return n.patch(e,c),n.applyData(e,c)}function O0(n){let e=!1;if(n.type==="list"){e=n.spread||!1;const t=n.children;let r=-1;for(;!e&&++r<t.length;)e=bu(t[r])}return e}function bu(n){const e=n.spread;return e??n.children.length>1}function z0(n,e){const t={},r=n.all(e);let i=-1;for(typeof e.start=="number"&&e.start!==1&&(t.start=e.start);++i<r.length;){const s=r[i];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const o={type:"element",tagName:e.ordered?"ol":"ul",properties:t,children:n.wrap(r,!0)};return n.patch(e,o),n.applyData(e,o)}function P0(n,e){const t={type:"element",tagName:"p",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function F0(n,e){const t={type:"root",children:n.wrap(n.all(e))};return n.patch(e,t),n.applyData(e,t)}function M0(n,e){const t={type:"element",tagName:"strong",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function N0(n,e){const t=n.all(e),r=t.shift(),i=[];if(r){const s={type:"element",tagName:"thead",properties:{},children:n.wrap([r],!0)};n.patch(e.children[0],s),i.push(s)}if(t.length>0){const s={type:"element",tagName:"tbody",properties:{},children:n.wrap(t,!0)},a=uu(e.children[1]),l=cu(e.children[e.children.length-1]);a&&l&&(s.position={start:a,end:l}),i.push(s)}const o={type:"element",tagName:"table",properties:{},children:n.wrap(i,!0)};return n.patch(e,o),n.applyData(e,o)}function L0(n,e,t){const r=t?t.children:void 0,o=(r?r.indexOf(e):1)===0?"th":"td",s=t&&t.type==="table"?t.align:void 0,a=s?s.length:e.children.length;let l=-1;const c=[];for(;++l<a;){const d=e.children[l],p={},h=s?s[l]:void 0;h&&(p.align=h);let x={type:"element",tagName:o,properties:p,children:[]};d&&(x.children=n.all(d),n.patch(d,x),x=n.applyData(d,x)),c.push(x)}const u={type:"element",tagName:"tr",properties:{},children:n.wrap(c,!0)};return n.patch(e,u),n.applyData(e,u)}function D0(n,e){const t={type:"element",tagName:"td",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}const Xa=9,Qa=32;function _0(n){const e=String(n),t=/\r?\n|\r/g;let r=t.exec(e),i=0;const o=[];for(;r;)o.push(Ya(e.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(e);return o.push(Ya(e.slice(i),i>0,!1)),o.join("")}function Ya(n,e,t){let r=0,i=n.length;if(e){let o=n.codePointAt(r);for(;o===Xa||o===Qa;)r++,o=n.codePointAt(r)}if(t){let o=n.codePointAt(i-1);for(;o===Xa||o===Qa;)i--,o=n.codePointAt(i-1)}return i>r?n.slice(r,i):""}function R0(n,e){const t={type:"text",value:_0(String(e.value))};return n.patch(e,t),n.applyData(e,t)}function H0(n,e){const t={type:"element",tagName:"hr",properties:{},children:[]};return n.patch(e,t),n.applyData(e,t)}const V0={blockquote:b0,break:v0,code:y0,delete:w0,emphasis:k0,footnoteReference:x0,heading:$0,html:S0,imageReference:C0,image:E0,inlineCode:A0,linkReference:T0,link:I0,listItem:B0,list:z0,paragraph:P0,root:F0,strong:M0,table:N0,tableCell:D0,tableRow:L0,text:R0,thematicBreak:H0,toml:xr,yaml:xr,definition:xr,footnoteDefinition:xr};function xr(){}function j0(n,e){const t=[{type:"text",value:"↩"}];return e>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),t}function q0(n,e){return"Back to reference "+(n+1)+(e>1?"-"+e:"")}function U0(n){const e=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",t=n.options.footnoteBackContent||j0,r=n.options.footnoteBackLabel||q0,i=n.options.footnoteLabel||"Footnotes",o=n.options.footnoteLabelTagName||"h2",s=n.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<n.footnoteOrder.length;){const c=n.footnoteById.get(n.footnoteOrder[l]);if(!c)continue;const u=n.all(c),d=String(c.identifier).toUpperCase(),p=Pn(d.toLowerCase());let h=0;const x=[],C=n.footnoteCounts.get(d);for(;C!==void 0&&++h<=C;){x.length>0&&x.push({type:"text",value:" "});let F=typeof t=="string"?t:t(l,h);typeof F=="string"&&(F={type:"text",value:F}),x.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+p+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,h),className:["data-footnote-backref"]},children:Array.isArray(F)?F:[F]})}const P=u[u.length-1];if(P&&P.type==="element"&&P.tagName==="p"){const F=P.children[P.children.length-1];F&&F.type==="text"?F.value+=" ":P.children.push({type:"text",value:" "}),P.children.push(...x)}else u.push(...x);const $={type:"element",tagName:"li",properties:{id:e+"fn-"+p},children:n.wrap(u,!0)};n.patch(c,$),a.push($)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...tr(s),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:n.wrap(a,!0)},{type:"text",value:`
`}]}}const po={}.hasOwnProperty,K0={};function W0(n,e){const t=e||K0,r=new Map,i=new Map,o=new Map,s={...V0,...t.handlers},a={all:c,applyData:X0,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:s,one:l,options:t,patch:G0,wrap:Y0};return Gc(n,function(u){if(u.type==="definition"||u.type==="footnoteDefinition"){const d=u.type==="definition"?r:i,p=String(u.identifier).toUpperCase();d.has(p)||d.set(p,u)}}),a;function l(u,d){const p=u.type,h=a.handlers[p];if(po.call(a.handlers,p)&&h)return h(a,u,d);if(a.options.passThrough&&a.options.passThrough.includes(p)){if("children"in u){const{children:C,...P}=u,$=tr(P);return $.children=a.all(u),$}return tr(u)}return(a.options.unknownHandler||Q0)(a,u,d)}function c(u){const d=[];if("children"in u){const p=u.children;let h=-1;for(;++h<p.length;){const x=a.one(p[h],u);if(x){if(h&&p[h-1].type==="break"&&(!Array.isArray(x)&&x.type==="text"&&(x.value=Za(x.value)),!Array.isArray(x)&&x.type==="element")){const C=x.children[0];C&&C.type==="text"&&(C.value=Za(C.value))}Array.isArray(x)?d.push(...x):d.push(x)}}}return d}}function G0(n,e){n.position&&(e.position=hu(n))}function X0(n,e){let t=e;if(n&&n.data){const r=n.data.hName,i=n.data.hChildren,o=n.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const s="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:s}}t.type==="element"&&o&&Object.assign(t.properties,tr(o)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function Q0(n,e){const t=e.data||{},r="value"in e&&!(po.call(t,"hProperties")||po.call(t,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:n.all(e)};return n.patch(e,r),n.applyData(e,r)}function Y0(n,e){const t=[];let r=-1;for(e&&t.push({type:"text",value:`
`});++r<n.length;)r&&t.push({type:"text",value:`
`}),t.push(n[r]);return e&&n.length>0&&t.push({type:"text",value:`
`}),t}function Za(n){let e=0,t=n.charCodeAt(e);for(;t===9||t===32;)e++,t=n.charCodeAt(e);return n.slice(e)}function Z0(n,e){const t=W0(n,e),r=t.one(n,void 0),i=U0(t),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}const J0=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"];class dr{constructor(e,t,r){this.property=e,this.normal=t,r&&(this.space=r)}}dr.prototype.property={};dr.prototype.normal={};dr.prototype.space=null;function vu(n,e){const t={},r={};let i=-1;for(;++i<n.length;)Object.assign(t,n[i].property),Object.assign(r,n[i].normal);return new dr(t,r,e)}function fo(n){return n.toLowerCase()}class _e{constructor(e,t){this.property=e,this.attribute=t}}_e.prototype.space=null;_e.prototype.boolean=!1;_e.prototype.booleanish=!1;_e.prototype.overloadedBoolean=!1;_e.prototype.number=!1;_e.prototype.commaSeparated=!1;_e.prototype.spaceSeparated=!1;_e.prototype.commaOrSpaceSeparated=!1;_e.prototype.mustUseProperty=!1;_e.prototype.defined=!1;let ex=0;const O=cn(),te=cn(),yu=cn(),k=cn(),q=cn(),kn=cn(),Ie=cn();function cn(){return 2**++ex}const go=Object.freeze(Object.defineProperty({__proto__:null,boolean:O,booleanish:te,commaOrSpaceSeparated:Ie,commaSeparated:kn,number:k,overloadedBoolean:yu,spaceSeparated:q},Symbol.toStringTag,{value:"Module"})),Pi=Object.keys(go);class ts extends _e{constructor(e,t,r,i){let o=-1;if(super(e,t),Ja(this,"space",i),typeof r=="number")for(;++o<Pi.length;){const s=Pi[o];Ja(this,Pi[o],(r&go[s])===go[s])}}}ts.prototype.defined=!0;function Ja(n,e,t){t&&(n[e]=t)}const tx={}.hasOwnProperty;function Fn(n){const e={},t={};let r;for(r in n.properties)if(tx.call(n.properties,r)){const i=n.properties[r],o=new ts(r,n.transform(n.attributes||{},r),i,n.space);n.mustUseProperty&&n.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),e[r]=o,t[fo(r)]=r,t[fo(o.attribute)]=r}return new dr(e,t,n.space)}const wu=Fn({space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),ku=Fn({space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function xu(n,e){return e in n?n[e]:e}function $u(n,e){return xu(n,e.toLowerCase())}const Su=Fn({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:$u,properties:{xmlns:null,xmlnsXLink:null}}),Cu=Fn({transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:te,ariaAutoComplete:null,ariaBusy:te,ariaChecked:te,ariaColCount:k,ariaColIndex:k,ariaColSpan:k,ariaControls:q,ariaCurrent:null,ariaDescribedBy:q,ariaDetails:null,ariaDisabled:te,ariaDropEffect:q,ariaErrorMessage:null,ariaExpanded:te,ariaFlowTo:q,ariaGrabbed:te,ariaHasPopup:null,ariaHidden:te,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:q,ariaLevel:k,ariaLive:null,ariaModal:te,ariaMultiLine:te,ariaMultiSelectable:te,ariaOrientation:null,ariaOwns:q,ariaPlaceholder:null,ariaPosInSet:k,ariaPressed:te,ariaReadOnly:te,ariaRelevant:null,ariaRequired:te,ariaRoleDescription:q,ariaRowCount:k,ariaRowIndex:k,ariaRowSpan:k,ariaSelected:te,ariaSetSize:k,ariaSort:null,ariaValueMax:k,ariaValueMin:k,ariaValueNow:k,ariaValueText:null,role:null}}),nx=Fn({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:$u,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:kn,acceptCharset:q,accessKey:q,action:null,allow:null,allowFullScreen:O,allowPaymentRequest:O,allowUserMedia:O,alt:null,as:null,async:O,autoCapitalize:null,autoComplete:q,autoFocus:O,autoPlay:O,blocking:q,capture:null,charSet:null,checked:O,cite:null,className:q,cols:k,colSpan:null,content:null,contentEditable:te,controls:O,controlsList:q,coords:k|kn,crossOrigin:null,data:null,dateTime:null,decoding:null,default:O,defer:O,dir:null,dirName:null,disabled:O,download:yu,draggable:te,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:O,formTarget:null,headers:q,height:k,hidden:O,high:k,href:null,hrefLang:null,htmlFor:q,httpEquiv:q,id:null,imageSizes:null,imageSrcSet:null,inert:O,inputMode:null,integrity:null,is:null,isMap:O,itemId:null,itemProp:q,itemRef:q,itemScope:O,itemType:q,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:O,low:k,manifest:null,max:null,maxLength:k,media:null,method:null,min:null,minLength:k,multiple:O,muted:O,name:null,nonce:null,noModule:O,noValidate:O,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:O,optimum:k,pattern:null,ping:q,placeholder:null,playsInline:O,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:O,referrerPolicy:null,rel:q,required:O,reversed:O,rows:k,rowSpan:k,sandbox:q,scope:null,scoped:O,seamless:O,selected:O,shadowRootClonable:O,shadowRootDelegatesFocus:O,shadowRootMode:null,shape:null,size:k,sizes:null,slot:null,span:k,spellCheck:te,src:null,srcDoc:null,srcLang:null,srcSet:null,start:k,step:null,style:null,tabIndex:k,target:null,title:null,translate:null,type:null,typeMustMatch:O,useMap:null,value:te,width:k,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:q,axis:null,background:null,bgColor:null,border:k,borderColor:null,bottomMargin:k,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:O,declare:O,event:null,face:null,frame:null,frameBorder:null,hSpace:k,leftMargin:k,link:null,longDesc:null,lowSrc:null,marginHeight:k,marginWidth:k,noResize:O,noHref:O,noShade:O,noWrap:O,object:null,profile:null,prompt:null,rev:null,rightMargin:k,rules:null,scheme:null,scrolling:te,standby:null,summary:null,text:null,topMargin:k,valueType:null,version:null,vAlign:null,vLink:null,vSpace:k,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:O,disableRemotePlayback:O,prefix:null,property:null,results:k,security:null,unselectable:null}}),rx=Fn({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:xu,properties:{about:Ie,accentHeight:k,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:k,amplitude:k,arabicForm:null,ascent:k,attributeName:null,attributeType:null,azimuth:k,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:k,by:null,calcMode:null,capHeight:k,className:q,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:k,diffuseConstant:k,direction:null,display:null,dur:null,divisor:k,dominantBaseline:null,download:O,dx:null,dy:null,edgeMode:null,editable:null,elevation:k,enableBackground:null,end:null,event:null,exponent:k,externalResourcesRequired:null,fill:null,fillOpacity:k,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:kn,g2:kn,glyphName:kn,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:k,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:k,horizOriginX:k,horizOriginY:k,id:null,ideographic:k,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:k,k,k1:k,k2:k,k3:k,k4:k,kernelMatrix:Ie,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:k,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:k,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:k,overlineThickness:k,paintOrder:null,panose1:null,path:null,pathLength:k,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:q,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:k,pointsAtY:k,pointsAtZ:k,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ie,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ie,rev:Ie,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ie,requiredFeatures:Ie,requiredFonts:Ie,requiredFormats:Ie,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:k,specularExponent:k,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:k,strikethroughThickness:k,string:null,stroke:null,strokeDashArray:Ie,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:k,strokeOpacity:k,strokeWidth:null,style:null,surfaceScale:k,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ie,tabIndex:k,tableValues:null,target:null,targetX:k,targetY:k,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ie,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:k,underlineThickness:k,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:k,values:null,vAlphabetic:k,vMathematical:k,vectorEffect:null,vHanging:k,vIdeographic:k,version:null,vertAdvY:k,vertOriginX:k,vertOriginY:k,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:k,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),ix=/^data[-\w.:]+$/i,el=/-[a-z]/g,ox=/[A-Z]/g;function sx(n,e){const t=fo(e);let r=e,i=_e;if(t in n.normal)return n.property[n.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&ix.test(e)){if(e.charAt(4)==="-"){const o=e.slice(5).replace(el,lx);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=e.slice(4);if(!el.test(o)){let s=o.replace(ox,ax);s.charAt(0)!=="-"&&(s="-"+s),e="data"+s}}i=ts}return new i(r,e)}function ax(n){return"-"+n.toLowerCase()}function lx(n){return n.charAt(1).toUpperCase()}const cx=vu([ku,wu,Su,Cu,nx],"html"),Eu=vu([ku,wu,Su,Cu,rx],"svg"),ux=/["&'<>`]/g,dx=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,hx=/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,px=/[|\\{}()[\]^$+*?.]/g,tl=new WeakMap;function fx(n,e){if(n=n.replace(e.subset?gx(e.subset):ux,r),e.subset||e.escapeOnly)return n;return n.replace(dx,t).replace(hx,r);function t(i,o,s){return e.format((i.charCodeAt(0)-55296)*1024+i.charCodeAt(1)-56320+65536,s.charCodeAt(o+2),e)}function r(i,o,s){return e.format(i.charCodeAt(0),s.charCodeAt(o+1),e)}}function gx(n){let e=tl.get(n);return e||(e=mx(n),tl.set(n,e)),e}function mx(n){const e=[];let t=-1;for(;++t<n.length;)e.push(n[t].replace(px,"\\$&"));return new RegExp("(?:"+e.join("|")+")","g")}const bx=/[\dA-Fa-f]/;function vx(n,e,t){const r="&#x"+n.toString(16).toUpperCase();return t&&e&&!bx.test(String.fromCharCode(e))?r:r+";"}const yx=/\d/;function wx(n,e,t){const r="&#"+String(n);return t&&e&&!yx.test(String.fromCharCode(e))?r:r+";"}const kx=["AElig","AMP","Aacute","Acirc","Agrave","Aring","Atilde","Auml","COPY","Ccedil","ETH","Eacute","Ecirc","Egrave","Euml","GT","Iacute","Icirc","Igrave","Iuml","LT","Ntilde","Oacute","Ocirc","Ograve","Oslash","Otilde","Ouml","QUOT","REG","THORN","Uacute","Ucirc","Ugrave","Uuml","Yacute","aacute","acirc","acute","aelig","agrave","amp","aring","atilde","auml","brvbar","ccedil","cedil","cent","copy","curren","deg","divide","eacute","ecirc","egrave","eth","euml","frac12","frac14","frac34","gt","iacute","icirc","iexcl","igrave","iquest","iuml","laquo","lt","macr","micro","middot","nbsp","not","ntilde","oacute","ocirc","ograve","ordf","ordm","oslash","otilde","ouml","para","plusmn","pound","quot","raquo","reg","sect","shy","sup1","sup2","sup3","szlig","thorn","times","uacute","ucirc","ugrave","uml","uuml","yacute","yen","yuml"],Fi={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",quot:'"',amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"},xx=["cent","copy","divide","gt","lt","not","para","times"],Au={}.hasOwnProperty,mo={};let $r;for($r in Fi)Au.call(Fi,$r)&&(mo[Fi[$r]]=$r);const $x=/[^\dA-Za-z]/;function Sx(n,e,t,r){const i=String.fromCharCode(n);if(Au.call(mo,i)){const o=mo[i],s="&"+o;return t&&kx.includes(o)&&!xx.includes(o)&&(!r||e&&e!==61&&$x.test(String.fromCharCode(e)))?s:s+";"}return""}function Cx(n,e,t){let r=vx(n,e,t.omitOptionalSemicolons),i;if((t.useNamedReferences||t.useShortestReferences)&&(i=Sx(n,e,t.omitOptionalSemicolons,t.attribute)),(t.useShortestReferences||!i)&&t.useShortestReferences){const o=wx(n,e,t.omitOptionalSemicolons);o.length<r.length&&(r=o)}return i&&(!t.useShortestReferences||i.length<r.length)?i:r}function xn(n,e){return fx(n,Object.assign({format:Cx},e))}const Ex=/^>|^->|<!--|-->|--!>|<!-$/g,Ax=[">"],Tx=["<",">"];function Ix(n,e,t,r){return r.settings.bogusComments?"<?"+xn(n.value,Object.assign({},r.settings.characterReferences,{subset:Ax}))+">":"<!--"+n.value.replace(Ex,i)+"-->";function i(o){return xn(o,Object.assign({},r.settings.characterReferences,{subset:Tx}))}}function Bx(n,e,t,r){return"<!"+(r.settings.upperDoctype?"DOCTYPE":"doctype")+(r.settings.tightDoctype?"":" ")+"html>"}function nl(n,e){const t=String(n);if(typeof e!="string")throw new TypeError("Expected character");let r=0,i=t.indexOf(e);for(;i!==-1;)r++,i=t.indexOf(e,i+e.length);return r}function Ox(n,e){const t=e||{};return(n[n.length-1]===""?[...n,""]:n).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}function zx(n){return n.join(" ").trim()}const Px=/[ \t\n\f\r]/g;function ns(n){return typeof n=="object"?n.type==="text"?rl(n.value):!1:rl(n)}function rl(n){return n.replace(Px,"")===""}const re=Iu(1),Tu=Iu(-1),Fx=[];function Iu(n){return e;function e(t,r,i){const o=t?t.children:Fx;let s=(r||0)+n,a=o[s];if(!i)for(;a&&ns(a);)s+=n,a=o[s];return a}}const Mx={}.hasOwnProperty;function Bu(n){return e;function e(t,r,i){return Mx.call(n,t.tagName)&&n[t.tagName](t,r,i)}}const rs=Bu({body:Lx,caption:Mi,colgroup:Mi,dd:Hx,dt:Rx,head:Mi,html:Nx,li:_x,optgroup:Vx,option:jx,p:Dx,rp:il,rt:il,tbody:Ux,td:ol,tfoot:Kx,th:ol,thead:qx,tr:Wx});function Mi(n,e,t){const r=re(t,e,!0);return!r||r.type!=="comment"&&!(r.type==="text"&&ns(r.value.charAt(0)))}function Nx(n,e,t){const r=re(t,e);return!r||r.type!=="comment"}function Lx(n,e,t){const r=re(t,e);return!r||r.type!=="comment"}function Dx(n,e,t){const r=re(t,e);return r?r.type==="element"&&(r.tagName==="address"||r.tagName==="article"||r.tagName==="aside"||r.tagName==="blockquote"||r.tagName==="details"||r.tagName==="div"||r.tagName==="dl"||r.tagName==="fieldset"||r.tagName==="figcaption"||r.tagName==="figure"||r.tagName==="footer"||r.tagName==="form"||r.tagName==="h1"||r.tagName==="h2"||r.tagName==="h3"||r.tagName==="h4"||r.tagName==="h5"||r.tagName==="h6"||r.tagName==="header"||r.tagName==="hgroup"||r.tagName==="hr"||r.tagName==="main"||r.tagName==="menu"||r.tagName==="nav"||r.tagName==="ol"||r.tagName==="p"||r.tagName==="pre"||r.tagName==="section"||r.tagName==="table"||r.tagName==="ul"):!t||!(t.type==="element"&&(t.tagName==="a"||t.tagName==="audio"||t.tagName==="del"||t.tagName==="ins"||t.tagName==="map"||t.tagName==="noscript"||t.tagName==="video"))}function _x(n,e,t){const r=re(t,e);return!r||r.type==="element"&&r.tagName==="li"}function Rx(n,e,t){const r=re(t,e);return!!(r&&r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd"))}function Hx(n,e,t){const r=re(t,e);return!r||r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd")}function il(n,e,t){const r=re(t,e);return!r||r.type==="element"&&(r.tagName==="rp"||r.tagName==="rt")}function Vx(n,e,t){const r=re(t,e);return!r||r.type==="element"&&r.tagName==="optgroup"}function jx(n,e,t){const r=re(t,e);return!r||r.type==="element"&&(r.tagName==="option"||r.tagName==="optgroup")}function qx(n,e,t){const r=re(t,e);return!!(r&&r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot"))}function Ux(n,e,t){const r=re(t,e);return!r||r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot")}function Kx(n,e,t){return!re(t,e)}function Wx(n,e,t){const r=re(t,e);return!r||r.type==="element"&&r.tagName==="tr"}function ol(n,e,t){const r=re(t,e);return!r||r.type==="element"&&(r.tagName==="td"||r.tagName==="th")}const Gx=Bu({body:Yx,colgroup:Zx,head:Qx,html:Xx,tbody:Jx});function Xx(n){const e=re(n,-1);return!e||e.type!=="comment"}function Qx(n){const e=new Set;for(const r of n.children)if(r.type==="element"&&(r.tagName==="base"||r.tagName==="title")){if(e.has(r.tagName))return!1;e.add(r.tagName)}const t=n.children[0];return!t||t.type==="element"}function Yx(n){const e=re(n,-1,!0);return!e||e.type!=="comment"&&!(e.type==="text"&&ns(e.value.charAt(0)))&&!(e.type==="element"&&(e.tagName==="meta"||e.tagName==="link"||e.tagName==="script"||e.tagName==="style"||e.tagName==="template"))}function Zx(n,e,t){const r=Tu(t,e),i=re(n,-1,!0);return t&&r&&r.type==="element"&&r.tagName==="colgroup"&&rs(r,t.children.indexOf(r),t)?!1:!!(i&&i.type==="element"&&i.tagName==="col")}function Jx(n,e,t){const r=Tu(t,e),i=re(n,-1);return t&&r&&r.type==="element"&&(r.tagName==="thead"||r.tagName==="tbody")&&rs(r,t.children.indexOf(r),t)?!1:!!(i&&i.type==="element"&&i.tagName==="tr")}const Sr={name:[[`	
\f\r &/=>`.split(""),`	
\f\r "&'/=>\``.split("")],[`\0	
\f\r "&'/<=>`.split(""),`\0	
\f\r "&'/<=>\``.split("")]],unquoted:[[`	
\f\r &>`.split(""),`\0	
\f\r "&'<=>\``.split("")],[`\0	
\f\r "&'<=>\``.split(""),`\0	
\f\r "&'<=>\``.split("")]],single:[["&'".split(""),"\"&'`".split("")],["\0&'".split(""),"\0\"&'`".split("")]],double:[['"&'.split(""),"\"&'`".split("")],['\0"&'.split(""),"\0\"&'`".split("")]]};function e1(n,e,t,r){const i=r.schema,o=i.space==="svg"?!1:r.settings.omitOptionalTags;let s=i.space==="svg"?r.settings.closeEmptyElements:r.settings.voids.includes(n.tagName.toLowerCase());const a=[];let l;i.space==="html"&&n.tagName==="svg"&&(r.schema=Eu);const c=t1(r,n.properties),u=r.all(i.space==="html"&&n.tagName==="template"?n.content:n);return r.schema=i,u&&(s=!1),(c||!o||!Gx(n,e,t))&&(a.push("<",n.tagName,c?" "+c:""),s&&(i.space==="svg"||r.settings.closeSelfClosing)&&(l=c.charAt(c.length-1),(!r.settings.tightSelfClosing||l==="/"||l&&l!=='"'&&l!=="'")&&a.push(" "),a.push("/")),a.push(">")),a.push(u),!s&&(!o||!rs(n,e,t))&&a.push("</"+n.tagName+">"),a.join("")}function t1(n,e){const t=[];let r=-1,i;if(e){for(i in e)if(e[i]!==null&&e[i]!==void 0){const o=n1(n,i,e[i]);o&&t.push(o)}}for(;++r<t.length;){const o=n.settings.tightAttributes?t[r].charAt(t[r].length-1):void 0;r!==t.length-1&&o!=='"'&&o!=="'"&&(t[r]+=" ")}return t.join("")}function n1(n,e,t){const r=sx(n.schema,e),i=n.settings.allowParseErrors&&n.schema.space==="html"?0:1,o=n.settings.allowDangerousCharacters?0:1;let s=n.quote,a;if(r.overloadedBoolean&&(t===r.attribute||t==="")?t=!0:(r.boolean||r.overloadedBoolean&&typeof t!="string")&&(t=!!t),t==null||t===!1||typeof t=="number"&&Number.isNaN(t))return"";const l=xn(r.attribute,Object.assign({},n.settings.characterReferences,{subset:Sr.name[i][o]}));return t===!0||(t=Array.isArray(t)?(r.commaSeparated?Ox:zx)(t,{padLeft:!n.settings.tightCommaSeparatedLists}):String(t),n.settings.collapseEmptyAttributes&&!t)?l:(n.settings.preferUnquoted&&(a=xn(t,Object.assign({},n.settings.characterReferences,{attribute:!0,subset:Sr.unquoted[i][o]}))),a!==t&&(n.settings.quoteSmart&&nl(t,s)>nl(t,n.alternative)&&(s=n.alternative),a=s+xn(t,Object.assign({},n.settings.characterReferences,{subset:(s==="'"?Sr.single:Sr.double)[i][o],attribute:!0}))+s),l+(a&&"="+a))}const r1=["<","&"];function Ou(n,e,t,r){return t&&t.type==="element"&&(t.tagName==="script"||t.tagName==="style")?n.value:xn(n.value,Object.assign({},r.settings.characterReferences,{subset:r1}))}function i1(n,e,t,r){return r.settings.allowDangerousHtml?n.value:Ou(n,e,t,r)}function o1(n,e,t,r){return r.all(n)}const s1=jc("type",{invalid:a1,unknown:l1,handlers:{comment:Ix,doctype:Bx,element:e1,raw:i1,root:o1,text:Ou}});function a1(n){throw new Error("Expected node, not `"+n+"`")}function l1(n){const e=n;throw new Error("Cannot compile unknown node `"+e.type+"`")}const c1={},u1={},d1=[];function h1(n,e){const t=e||c1,r=t.quote||'"',i=r==='"'?"'":'"';if(r!=='"'&&r!=="'")throw new Error("Invalid quote `"+r+"`, expected `'` or `\"`");return{one:p1,all:f1,settings:{omitOptionalTags:t.omitOptionalTags||!1,allowParseErrors:t.allowParseErrors||!1,allowDangerousCharacters:t.allowDangerousCharacters||!1,quoteSmart:t.quoteSmart||!1,preferUnquoted:t.preferUnquoted||!1,tightAttributes:t.tightAttributes||!1,upperDoctype:t.upperDoctype||!1,tightDoctype:t.tightDoctype||!1,bogusComments:t.bogusComments||!1,tightCommaSeparatedLists:t.tightCommaSeparatedLists||!1,tightSelfClosing:t.tightSelfClosing||!1,collapseEmptyAttributes:t.collapseEmptyAttributes||!1,allowDangerousHtml:t.allowDangerousHtml||!1,voids:t.voids||J0,characterReferences:t.characterReferences||u1,closeSelfClosing:t.closeSelfClosing||!1,closeEmptyElements:t.closeEmptyElements||!1},schema:t.space==="svg"?Eu:cx,quote:r,alternative:i}.one(Array.isArray(n)?{type:"root",children:n}:n,void 0,void 0)}function p1(n,e,t){return s1(n,e,t,this)}function f1(n){const e=[],t=n&&n.children||d1;let r=-1;for(;++r<t.length;)e[r]=this.one(t[r],r,n);return e.join("")}const g1={};function m1(n){const e=this,{handlers:t,sanitize:r,...i}=n||g1;let o=!1,s;typeof r=="boolean"?o=!r:r&&(s=r),e.compiler=a;function a(l,c){const u=Z0(l,{handlers:t,allowDangerousHtml:o}),d=o?u:l0(u,s),p=h1(d,{...i,allowDangerousHtml:o});return c.extname&&(c.extname=".html"),l&&l.type==="root"&&p&&/[^\r\n]/.test(p.charAt(p.length-1))?p+`
`:p}}const sl=ne.getCookie("CLIPSESSIONTOKEN"),b1="https://api.clippsly.com/endpoints/data/user?username=",qe=class qe extends Fe{async connect(){const e=await fetch(b1+this.idValue.toString(),{method:"GET",headers:{Authorization:`Bearer ${sl}`}}).then(r=>r.json()).catch(r=>Bt.loadPage("/error?code="+(r.status|404)));if(ne.setDocTitle(e.displayName),this.userBannerTarget.src=e.banner,this.userPfpTarget.src=e.avatar,this.userDisplayTarget.textContent=e.displayName,this.userHandleTarget.textContent="@"+e.name,e.status.isVerified){const r=document.createElement("div");r.classList.add("icon"),r.classList.add("brand"),r.title="Verified",r.innerHTML=ne.verifiedBadgeHTML,this.userDisplayTarget.append(r)}const t=await r0().use(m1).process(e.description||"No description provided").then(r=>String(r));this.userDescriptionTarget.innerHTML=t,e.status.isAdmin&&this.userBadgesTarget.append(qe.createBadge("Clippsly Team","https://cdn.clippsly.com/brand_assets/badges/version_5/Moderators.png","https://support.clippsly.com/knowledgebase.php?article=7")),e.status.isFeedback&&this.userBadgesTarget.append(qe.createBadge("Feedback","https://cdn.clippsly.com/brand_assets/badges/version_5/Contributor.png","https://support.clippsly.com/knowledgebase.php?article=4")),e.status.isPlus&&this.userBadgesTarget.append(qe.createBadge("Plus","https://cdn.clippsly.com/brand_assets/badges/version_5/Plus.png")),e.connections.roblox&&this.userBadgesTarget.append(qe.createBadge("Roblox","https://cdn.clippsly.com/brand_assets/connection_icons/roblox-connection.png",`https://roblox.com/users/${e.connections.roblox}/profile`,!0)),e.connections.youtube&&this.userBadgesTarget.append(qe.createBadge("YouTube","https://cdn.clippsly.com/brand_assets/connection_icons/youtube-connection.png",`https://youtube.com/${e.connections.youtube}`,!0)),e.connections.soundcloud&&this.userBadgesTarget.append(qe.createBadge("SoundCloud","https://cdn.clippsly.com/brand_assets/connection_icons/soundcloud-connection.png",`https://soundcloud.com/${e.connections.soundcloud}`,!0)),e.connections.twitch&&this.userBadgesTarget.append(qe.createBadge("Twitch","https://cdn.clippsly.com/brand_assets/connection_icons/twitch-connection.png","https://twitch.tv/"+e.connections.twitch,!0)),this.loadingTargets.forEach(r=>{r.classList.remove("skeleton-load-bg")}),await this.loadUserTracks(),this.element.ariaHidden="false"}async loadUserTracks(){const e=await fetch("https://api.clippsly.com/endpoints/data/track?username="+this.idValue.toString(),{method:"GET",headers:{Authorization:`Bearer ${sl}`}}).then(t=>t.json()).catch(t=>Bt.loadPage("/error?code="+(t.status|404)));for(let t=0;t<e.length;t++){const r=e[t];this.trackListTarget.append(ne.createTrack({ID:r.releaseID,Title:r.releaseName,Artist:0,Genre:r.releaseGenre||"Unknown",ArtCover:r.additionalData.releaseCoverArt,Audio:r.additionalData.audioFile,Description:r.additionalData.releaseDescription,commentsOff:r.commentsOff,isModerated:!1,isExplicit:!1,isProtected:!1,isUnderReview:!1,isArtificiallyGenerated:!1,audio_duration:r.additionalData.audioDuration,releaseDate:r.additionalData.premiereDate,releaseAuthor:r.releaseAuthor},!0))}}static createBadge(e,t,r,i){const o=document.createElement("a");r&&(o.href=r),o.tabIndex=0,o.title=e,o.classList.add("userpage-badge"),o.setAttribute("data-global-target","openExternal");const s=document.createElement("img");return s.ariaHidden="true",s.role="presentation",s.alt="",s.src=t,s.draggable=!1,i&&(s.style.transform="scale(0.85)"),o.append(s),o}};fe(qe,"targets",["userBanner","userPfp","userStatus","userDisplay","userHandle","userDescription","userBadges","trackList","loading"]),fe(qe,"values",{id:String});let bo=qe;const v1={"home-tab":"/","search-tab":"/search?query=cat","explore-tab":"/","cliptivity-tab":"/cliptivity","settings-tab":"/settings"};class zu extends Fe{connect(){console.log(this.element)}change(e){var r;const t=(r=e.target.activetab)==null?void 0:r.id;t&&Bt.loadPage(v1[t])}}fe(zu,"targets",["tablist"]);wb.define(z.registry);cb.define(z.registry);Om.define(z.registry);Am.define(z.registry);fv.define(z.registry);sv.define(z.registry);qb.define(z.registry);Xm.define(z.registry);ab.define(z.registry);Db.define(z.registry);Fb.define(z.registry);Bb.define(z.registry);$b.define(z.registry);kv.define(z.registry);hb.define(z.registry);mb.define(z.registry);Gb.define(z.registry);ev.define(z.registry);const kt=Ld.start();kt.register("global",Bt);kt.register("header",ml);kt.register("sidebar",zu);kt.register("search",_i);kt.register("searchbar",bl);kt.register("track",ro);kt.register("user",bo);kt.register("error",Ri);kt.register("home",gl);
