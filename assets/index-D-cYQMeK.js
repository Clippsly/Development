var Nu=Object.defineProperty;var Du=(n,e,t)=>e in n?Nu(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ce=(n,e,t)=>Du(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const Xn=class Xn{static getCookie(e){const r=`; ${document.cookie}`.split(`; ${e}=`),i=r.pop();if(i&&r.length===2)return i.split(";").shift()}static setCookie(e,t,r,i){var o="";if(r){var s=new Date;s.setTime(s.getTime()+r*24*60*60*1e3),o="; expires="+s.toUTCString()}document.cookie=e+"="+(t||"")+o+"; path=/; domain="+i,localStorage.setItem("sessionToken",t)}static formatTimestamp(e){return new Date(e*1e3).toLocaleString()}static createTrack(e,t){const r=document.createElement("a");r.classList.add("track"),r.href=`/track/${e.ID}`,r.setAttribute("data-track-link-value",`/users/${e.releaseAuthor.authorUsername}`),r.setAttribute("data-track-pfpimg-value",e.releaseAuthor.authorAvatar??"https://cdn.clippsly.com/brand_assets/icons/default-artist.png"),r.setAttribute("data-track-coverimg-value",e.ArtCover??"https://cdn.clippsly.com/brand_assets/icons/default-artist.png");const i=document.createElement("div");i.classList.add("track-cover"),i.classList.add("skeleton-load-bg");const o=document.createElement("img");o.role="presentation",o.alt="",o.src=e.ArtCover,o.loading=t?"eager":"lazy",o.fetchPriority="high",o.classList.add("skeleton-load-fg"),o.setAttribute("data-global-target","skelimg"),i.append(o);const s=document.createElement("div");s.classList.add("track-metadata");const a=document.createElement("a");a.classList.add("avatar"),a.classList.add("skeleton-load-bg"),a.tabIndex=0,a.href=`/users/${e.releaseAuthor.authorUsername}`;const l=document.createElement("img");l.role="presentation",l.alt="",l.src=e.releaseAuthor.authorAvatar??"https://cdn.clippsly.com/brand_assets/icons/default-artist.png",l.loading="eager",l.fetchPriority="low",l.setAttribute("data-global-target","skelimg"),l.classList.add("skeleton-load-fg"),a.append(l);const c=document.createElement("div");c.classList.add("track-info");const u=document.createElement("span");u.classList.add("track-name"),u.textContent=e.Title;const d=document.createElement("a");d.tabIndex=-1,d.href=`/users/${e.releaseAuthor.authorUsername}`,d.classList.add("artist-name"),d.classList.add("subtitle-hyperlink");const p=document.createElement("span");if(p.textContent=e.releaseAuthor.authorDisplay,d.append(p),e.releaseAuthor.authorVerified){const h=document.createElement("div");h.classList.add("icon"),h.classList.add("brand"),h.title="Verified",h.innerHTML=Xn.verifiedBadgeHTML,d.append(h)}return c.append(u,d),s.append(a,c),r.append(i,s),r}static createSkeletonTrack(){const e=document.createElement("div");e.classList.add("track"),e.classList.add("skeleton");const t=document.createElement("div");t.classList.add("track-cover"),t.classList.add("skeleton-load-bg");const r=document.createElement("div");r.classList.add("track-metadata");const i=document.createElement("div");i.classList.add("avatar"),i.classList.add("skeleton-load-bg");const o=document.createElement("div");o.classList.add("track-info");const s=document.createElement("span");s.classList.add("skeleton-load-bg"),s.textContent="wwwwwwwwwww";const a=document.createElement("span");return a.classList.add("skeleton-load-bg"),a.textContent="wwwwwww",o.append(s,a),r.append(i,o),e.append(t,r),e}static setDocTitle(e){document.title=e+" | Clippsly"}};ce(Xn,"pageNames",{balance:"Balance",cliptivity:"Cliptivity",error:"Error",home:"Home",login:"Log In",moderated:"Not Approved",register:"Sign Up",search:"Search",settings:"Settings",track:"Track",upload:"Create",user:"User"}),ce(Xn,"verifiedBadgeHTML",'<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5ZM7.35355 4.10355C7.54882 3.90829 7.54882 3.59171 7.35355 3.39645C7.15829 3.20118 6.84171 3.20118 6.64645 3.39645L4.5 5.54289L3.35355 4.39645C3.15829 4.20118 2.84171 4.20118 2.64645 4.39645C2.45118 4.59171 2.45118 4.90829 2.64645 5.10355L4.14645 6.60355C4.34171 6.79882 4.65829 6.79882 4.85355 6.60355L7.35355 4.10355Z" fill="currentColor"/></svg>');let D=Xn;class _u{constructor(e,t,r){this.eventTarget=e,this.eventName=t,this.eventOptions=r,this.unorderedBindings=new Set}connect(){this.eventTarget.addEventListener(this.eventName,this,this.eventOptions)}disconnect(){this.eventTarget.removeEventListener(this.eventName,this,this.eventOptions)}bindingConnected(e){this.unorderedBindings.add(e)}bindingDisconnected(e){this.unorderedBindings.delete(e)}handleEvent(e){const t=Ru(e);for(const r of this.bindings){if(t.immediatePropagationStopped)break;r.handleEvent(t)}}hasBindings(){return this.unorderedBindings.size>0}get bindings(){return Array.from(this.unorderedBindings).sort((e,t)=>{const r=e.index,i=t.index;return r<i?-1:r>i?1:0})}}function Ru(n){if("immediatePropagationStopped"in n)return n;{const{stopImmediatePropagation:e}=n;return Object.assign(n,{immediatePropagationStopped:!1,stopImmediatePropagation(){this.immediatePropagationStopped=!0,e.call(this)}})}}class Vu{constructor(e){this.application=e,this.eventListenerMaps=new Map,this.started=!1}start(){this.started||(this.started=!0,this.eventListeners.forEach(e=>e.connect()))}stop(){this.started&&(this.started=!1,this.eventListeners.forEach(e=>e.disconnect()))}get eventListeners(){return Array.from(this.eventListenerMaps.values()).reduce((e,t)=>e.concat(Array.from(t.values())),[])}bindingConnected(e){this.fetchEventListenerForBinding(e).bindingConnected(e)}bindingDisconnected(e,t=!1){this.fetchEventListenerForBinding(e).bindingDisconnected(e),t&&this.clearEventListenersForBinding(e)}handleError(e,t,r={}){this.application.handleError(e,`Error ${t}`,r)}clearEventListenersForBinding(e){const t=this.fetchEventListenerForBinding(e);t.hasBindings()||(t.disconnect(),this.removeMappedEventListenerFor(e))}removeMappedEventListenerFor(e){const{eventTarget:t,eventName:r,eventOptions:i}=e,o=this.fetchEventListenerMapForEventTarget(t),s=this.cacheKey(r,i);o.delete(s),o.size==0&&this.eventListenerMaps.delete(t)}fetchEventListenerForBinding(e){const{eventTarget:t,eventName:r,eventOptions:i}=e;return this.fetchEventListener(t,r,i)}fetchEventListener(e,t,r){const i=this.fetchEventListenerMapForEventTarget(e),o=this.cacheKey(t,r);let s=i.get(o);return s||(s=this.createEventListener(e,t,r),i.set(o,s)),s}createEventListener(e,t,r){const i=new _u(e,t,r);return this.started&&i.connect(),i}fetchEventListenerMapForEventTarget(e){let t=this.eventListenerMaps.get(e);return t||(t=new Map,this.eventListenerMaps.set(e,t)),t}cacheKey(e,t){const r=[e];return Object.keys(t).sort().forEach(i=>{r.push(`${t[i]?"":"!"}${i}`)}),r.join(":")}}const Hu={stop({event:n,value:e}){return e&&n.stopPropagation(),!0},prevent({event:n,value:e}){return e&&n.preventDefault(),!0},self({event:n,value:e,element:t}){return e?t===n.target:!0}},ju=/^(?:(?:([^.]+?)\+)?(.+?)(?:\.(.+?))?(?:@(window|document))?->)?(.+?)(?:#([^:]+?))(?::(.+))?$/;function qu(n){const t=n.trim().match(ju)||[];let r=t[2],i=t[3];return i&&!["keydown","keyup","keypress"].includes(r)&&(r+=`.${i}`,i=""),{eventTarget:Uu(t[4]),eventName:r,eventOptions:t[7]?Ku(t[7]):{},identifier:t[5],methodName:t[6],keyFilter:t[1]||i}}function Uu(n){if(n=="window")return window;if(n=="document")return document}function Ku(n){return n.split(":").reduce((e,t)=>Object.assign(e,{[t.replace(/^!/,"")]:!/^!/.test(t)}),{})}function Wu(n){if(n==window)return"window";if(n==document)return"document"}function Eo(n){return n.replace(/(?:[_-])([a-z0-9])/g,(e,t)=>t.toUpperCase())}function Ui(n){return Eo(n.replace(/--/g,"-").replace(/__/g,"_"))}function rr(n){return n.charAt(0).toUpperCase()+n.slice(1)}function hl(n){return n.replace(/([A-Z])/g,(e,t)=>`-${t.toLowerCase()}`)}function Gu(n){return n.match(/[^\s]+/g)||[]}function vs(n){return n!=null}function Ki(n,e){return Object.prototype.hasOwnProperty.call(n,e)}const ys=["meta","ctrl","alt","shift"];class Qu{constructor(e,t,r,i){this.element=e,this.index=t,this.eventTarget=r.eventTarget||e,this.eventName=r.eventName||Xu(e)||yr("missing event name"),this.eventOptions=r.eventOptions||{},this.identifier=r.identifier||yr("missing identifier"),this.methodName=r.methodName||yr("missing method name"),this.keyFilter=r.keyFilter||"",this.schema=i}static forToken(e,t){return new this(e.element,e.index,qu(e.content),t)}toString(){const e=this.keyFilter?`.${this.keyFilter}`:"",t=this.eventTargetName?`@${this.eventTargetName}`:"";return`${this.eventName}${e}${t}->${this.identifier}#${this.methodName}`}shouldIgnoreKeyboardEvent(e){if(!this.keyFilter)return!1;const t=this.keyFilter.split("+");if(this.keyFilterDissatisfied(e,t))return!0;const r=t.filter(i=>!ys.includes(i))[0];return r?(Ki(this.keyMappings,r)||yr(`contains unknown key filter: ${this.keyFilter}`),this.keyMappings[r].toLowerCase()!==e.key.toLowerCase()):!1}shouldIgnoreMouseEvent(e){if(!this.keyFilter)return!1;const t=[this.keyFilter];return!!this.keyFilterDissatisfied(e,t)}get params(){const e={},t=new RegExp(`^data-${this.identifier}-(.+)-param$`,"i");for(const{name:r,value:i}of Array.from(this.element.attributes)){const o=r.match(t),s=o&&o[1];s&&(e[Eo(s)]=Zu(i))}return e}get eventTargetName(){return Wu(this.eventTarget)}get keyMappings(){return this.schema.keyMappings}keyFilterDissatisfied(e,t){const[r,i,o,s]=ys.map(a=>t.includes(a));return e.metaKey!==r||e.ctrlKey!==i||e.altKey!==o||e.shiftKey!==s}}const ks={a:()=>"click",button:()=>"click",form:()=>"submit",details:()=>"toggle",input:n=>n.getAttribute("type")=="submit"?"click":"input",select:()=>"change",textarea:()=>"input"};function Xu(n){const e=n.tagName.toLowerCase();if(e in ks)return ks[e](n)}function yr(n){throw new Error(n)}function Zu(n){try{return JSON.parse(n)}catch{return n}}let Yu=class{constructor(e,t){this.context=e,this.action=t}get index(){return this.action.index}get eventTarget(){return this.action.eventTarget}get eventOptions(){return this.action.eventOptions}get identifier(){return this.context.identifier}handleEvent(e){const t=this.prepareActionEvent(e);this.willBeInvokedByEvent(e)&&this.applyEventModifiers(t)&&this.invokeWithEvent(t)}get eventName(){return this.action.eventName}get method(){const e=this.controller[this.methodName];if(typeof e=="function")return e;throw new Error(`Action "${this.action}" references undefined method "${this.methodName}"`)}applyEventModifiers(e){const{element:t}=this.action,{actionDescriptorFilters:r}=this.context.application,{controller:i}=this.context;let o=!0;for(const[s,a]of Object.entries(this.eventOptions))if(s in r){const l=r[s];o=o&&l({name:s,value:a,event:e,element:t,controller:i})}else continue;return o}prepareActionEvent(e){return Object.assign(e,{params:this.action.params})}invokeWithEvent(e){const{target:t,currentTarget:r}=e;try{this.method.call(this.controller,e),this.context.logDebugActivity(this.methodName,{event:e,target:t,currentTarget:r,action:this.methodName})}catch(i){const{identifier:o,controller:s,element:a,index:l}=this,c={identifier:o,controller:s,element:a,index:l,event:e};this.context.handleError(i,`invoking action "${this.action}"`,c)}}willBeInvokedByEvent(e){const t=e.target;return e instanceof KeyboardEvent&&this.action.shouldIgnoreKeyboardEvent(e)||e instanceof MouseEvent&&this.action.shouldIgnoreMouseEvent(e)?!1:this.element===t?!0:t instanceof Element&&this.element.contains(t)?this.scope.containsElement(t):this.scope.containsElement(this.action.element)}get controller(){return this.context.controller}get methodName(){return this.action.methodName}get element(){return this.scope.element}get scope(){return this.context.scope}};class pl{constructor(e,t){this.mutationObserverInit={attributes:!0,childList:!0,subtree:!0},this.element=e,this.started=!1,this.delegate=t,this.elements=new Set,this.mutationObserver=new MutationObserver(r=>this.processMutations(r))}start(){this.started||(this.started=!0,this.mutationObserver.observe(this.element,this.mutationObserverInit),this.refresh())}pause(e){this.started&&(this.mutationObserver.disconnect(),this.started=!1),e(),this.started||(this.mutationObserver.observe(this.element,this.mutationObserverInit),this.started=!0)}stop(){this.started&&(this.mutationObserver.takeRecords(),this.mutationObserver.disconnect(),this.started=!1)}refresh(){if(this.started){const e=new Set(this.matchElementsInTree());for(const t of Array.from(this.elements))e.has(t)||this.removeElement(t);for(const t of Array.from(e))this.addElement(t)}}processMutations(e){if(this.started)for(const t of e)this.processMutation(t)}processMutation(e){e.type=="attributes"?this.processAttributeChange(e.target,e.attributeName):e.type=="childList"&&(this.processRemovedNodes(e.removedNodes),this.processAddedNodes(e.addedNodes))}processAttributeChange(e,t){this.elements.has(e)?this.delegate.elementAttributeChanged&&this.matchElement(e)?this.delegate.elementAttributeChanged(e,t):this.removeElement(e):this.matchElement(e)&&this.addElement(e)}processRemovedNodes(e){for(const t of Array.from(e)){const r=this.elementFromNode(t);r&&this.processTree(r,this.removeElement)}}processAddedNodes(e){for(const t of Array.from(e)){const r=this.elementFromNode(t);r&&this.elementIsActive(r)&&this.processTree(r,this.addElement)}}matchElement(e){return this.delegate.matchElement(e)}matchElementsInTree(e=this.element){return this.delegate.matchElementsInTree(e)}processTree(e,t){for(const r of this.matchElementsInTree(e))t.call(this,r)}elementFromNode(e){if(e.nodeType==Node.ELEMENT_NODE)return e}elementIsActive(e){return e.isConnected!=this.element.isConnected?!1:this.element.contains(e)}addElement(e){this.elements.has(e)||this.elementIsActive(e)&&(this.elements.add(e),this.delegate.elementMatched&&this.delegate.elementMatched(e))}removeElement(e){this.elements.has(e)&&(this.elements.delete(e),this.delegate.elementUnmatched&&this.delegate.elementUnmatched(e))}}class fl{constructor(e,t,r){this.attributeName=t,this.delegate=r,this.elementObserver=new pl(e,this)}get element(){return this.elementObserver.element}get selector(){return`[${this.attributeName}]`}start(){this.elementObserver.start()}pause(e){this.elementObserver.pause(e)}stop(){this.elementObserver.stop()}refresh(){this.elementObserver.refresh()}get started(){return this.elementObserver.started}matchElement(e){return e.hasAttribute(this.attributeName)}matchElementsInTree(e){const t=this.matchElement(e)?[e]:[],r=Array.from(e.querySelectorAll(this.selector));return t.concat(r)}elementMatched(e){this.delegate.elementMatchedAttribute&&this.delegate.elementMatchedAttribute(e,this.attributeName)}elementUnmatched(e){this.delegate.elementUnmatchedAttribute&&this.delegate.elementUnmatchedAttribute(e,this.attributeName)}elementAttributeChanged(e,t){this.delegate.elementAttributeValueChanged&&this.attributeName==t&&this.delegate.elementAttributeValueChanged(e,t)}}function Ju(n,e,t){gl(n,e).add(t)}function ed(n,e,t){gl(n,e).delete(t),td(n,e)}function gl(n,e){let t=n.get(e);return t||(t=new Set,n.set(e,t)),t}function td(n,e){const t=n.get(e);t!=null&&t.size==0&&n.delete(e)}class Zt{constructor(){this.valuesByKey=new Map}get keys(){return Array.from(this.valuesByKey.keys())}get values(){return Array.from(this.valuesByKey.values()).reduce((t,r)=>t.concat(Array.from(r)),[])}get size(){return Array.from(this.valuesByKey.values()).reduce((t,r)=>t+r.size,0)}add(e,t){Ju(this.valuesByKey,e,t)}delete(e,t){ed(this.valuesByKey,e,t)}has(e,t){const r=this.valuesByKey.get(e);return r!=null&&r.has(t)}hasKey(e){return this.valuesByKey.has(e)}hasValue(e){return Array.from(this.valuesByKey.values()).some(r=>r.has(e))}getValuesForKey(e){const t=this.valuesByKey.get(e);return t?Array.from(t):[]}getKeysForValue(e){return Array.from(this.valuesByKey).filter(([t,r])=>r.has(e)).map(([t,r])=>t)}}class nd{constructor(e,t,r,i){this._selector=t,this.details=i,this.elementObserver=new pl(e,this),this.delegate=r,this.matchesByElement=new Zt}get started(){return this.elementObserver.started}get selector(){return this._selector}set selector(e){this._selector=e,this.refresh()}start(){this.elementObserver.start()}pause(e){this.elementObserver.pause(e)}stop(){this.elementObserver.stop()}refresh(){this.elementObserver.refresh()}get element(){return this.elementObserver.element}matchElement(e){const{selector:t}=this;if(t){const r=e.matches(t);return this.delegate.selectorMatchElement?r&&this.delegate.selectorMatchElement(e,this.details):r}else return!1}matchElementsInTree(e){const{selector:t}=this;if(t){const r=this.matchElement(e)?[e]:[],i=Array.from(e.querySelectorAll(t)).filter(o=>this.matchElement(o));return r.concat(i)}else return[]}elementMatched(e){const{selector:t}=this;t&&this.selectorMatched(e,t)}elementUnmatched(e){const t=this.matchesByElement.getKeysForValue(e);for(const r of t)this.selectorUnmatched(e,r)}elementAttributeChanged(e,t){const{selector:r}=this;if(r){const i=this.matchElement(e),o=this.matchesByElement.has(r,e);i&&!o?this.selectorMatched(e,r):!i&&o&&this.selectorUnmatched(e,r)}}selectorMatched(e,t){this.delegate.selectorMatched(e,t,this.details),this.matchesByElement.add(t,e)}selectorUnmatched(e,t){this.delegate.selectorUnmatched(e,t,this.details),this.matchesByElement.delete(t,e)}}class rd{constructor(e,t){this.element=e,this.delegate=t,this.started=!1,this.stringMap=new Map,this.mutationObserver=new MutationObserver(r=>this.processMutations(r))}start(){this.started||(this.started=!0,this.mutationObserver.observe(this.element,{attributes:!0,attributeOldValue:!0}),this.refresh())}stop(){this.started&&(this.mutationObserver.takeRecords(),this.mutationObserver.disconnect(),this.started=!1)}refresh(){if(this.started)for(const e of this.knownAttributeNames)this.refreshAttribute(e,null)}processMutations(e){if(this.started)for(const t of e)this.processMutation(t)}processMutation(e){const t=e.attributeName;t&&this.refreshAttribute(t,e.oldValue)}refreshAttribute(e,t){const r=this.delegate.getStringMapKeyForAttribute(e);if(r!=null){this.stringMap.has(e)||this.stringMapKeyAdded(r,e);const i=this.element.getAttribute(e);if(this.stringMap.get(e)!=i&&this.stringMapValueChanged(i,r,t),i==null){const o=this.stringMap.get(e);this.stringMap.delete(e),o&&this.stringMapKeyRemoved(r,e,o)}else this.stringMap.set(e,i)}}stringMapKeyAdded(e,t){this.delegate.stringMapKeyAdded&&this.delegate.stringMapKeyAdded(e,t)}stringMapValueChanged(e,t,r){this.delegate.stringMapValueChanged&&this.delegate.stringMapValueChanged(e,t,r)}stringMapKeyRemoved(e,t,r){this.delegate.stringMapKeyRemoved&&this.delegate.stringMapKeyRemoved(e,t,r)}get knownAttributeNames(){return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)))}get currentAttributeNames(){return Array.from(this.element.attributes).map(e=>e.name)}get recordedAttributeNames(){return Array.from(this.stringMap.keys())}}class ml{constructor(e,t,r){this.attributeObserver=new fl(e,t,this),this.delegate=r,this.tokensByElement=new Zt}get started(){return this.attributeObserver.started}start(){this.attributeObserver.start()}pause(e){this.attributeObserver.pause(e)}stop(){this.attributeObserver.stop()}refresh(){this.attributeObserver.refresh()}get element(){return this.attributeObserver.element}get attributeName(){return this.attributeObserver.attributeName}elementMatchedAttribute(e){this.tokensMatched(this.readTokensForElement(e))}elementAttributeValueChanged(e){const[t,r]=this.refreshTokensForElement(e);this.tokensUnmatched(t),this.tokensMatched(r)}elementUnmatchedAttribute(e){this.tokensUnmatched(this.tokensByElement.getValuesForKey(e))}tokensMatched(e){e.forEach(t=>this.tokenMatched(t))}tokensUnmatched(e){e.forEach(t=>this.tokenUnmatched(t))}tokenMatched(e){this.delegate.tokenMatched(e),this.tokensByElement.add(e.element,e)}tokenUnmatched(e){this.delegate.tokenUnmatched(e),this.tokensByElement.delete(e.element,e)}refreshTokensForElement(e){const t=this.tokensByElement.getValuesForKey(e),r=this.readTokensForElement(e),i=od(t,r).findIndex(([o,s])=>!sd(o,s));return i==-1?[[],[]]:[t.slice(i),r.slice(i)]}readTokensForElement(e){const t=this.attributeName,r=e.getAttribute(t)||"";return id(r,e,t)}}function id(n,e,t){return n.trim().split(/\s+/).filter(r=>r.length).map((r,i)=>({element:e,attributeName:t,content:r,index:i}))}function od(n,e){const t=Math.max(n.length,e.length);return Array.from({length:t},(r,i)=>[n[i],e[i]])}function sd(n,e){return n&&e&&n.index==e.index&&n.content==e.content}class bl{constructor(e,t,r){this.tokenListObserver=new ml(e,t,this),this.delegate=r,this.parseResultsByToken=new WeakMap,this.valuesByTokenByElement=new WeakMap}get started(){return this.tokenListObserver.started}start(){this.tokenListObserver.start()}stop(){this.tokenListObserver.stop()}refresh(){this.tokenListObserver.refresh()}get element(){return this.tokenListObserver.element}get attributeName(){return this.tokenListObserver.attributeName}tokenMatched(e){const{element:t}=e,{value:r}=this.fetchParseResultForToken(e);r&&(this.fetchValuesByTokenForElement(t).set(e,r),this.delegate.elementMatchedValue(t,r))}tokenUnmatched(e){const{element:t}=e,{value:r}=this.fetchParseResultForToken(e);r&&(this.fetchValuesByTokenForElement(t).delete(e),this.delegate.elementUnmatchedValue(t,r))}fetchParseResultForToken(e){let t=this.parseResultsByToken.get(e);return t||(t=this.parseToken(e),this.parseResultsByToken.set(e,t)),t}fetchValuesByTokenForElement(e){let t=this.valuesByTokenByElement.get(e);return t||(t=new Map,this.valuesByTokenByElement.set(e,t)),t}parseToken(e){try{return{value:this.delegate.parseValueForToken(e)}}catch(t){return{error:t}}}}class ad{constructor(e,t){this.context=e,this.delegate=t,this.bindingsByAction=new Map}start(){this.valueListObserver||(this.valueListObserver=new bl(this.element,this.actionAttribute,this),this.valueListObserver.start())}stop(){this.valueListObserver&&(this.valueListObserver.stop(),delete this.valueListObserver,this.disconnectAllActions())}get element(){return this.context.element}get identifier(){return this.context.identifier}get actionAttribute(){return this.schema.actionAttribute}get schema(){return this.context.schema}get bindings(){return Array.from(this.bindingsByAction.values())}connectAction(e){const t=new Yu(this.context,e);this.bindingsByAction.set(e,t),this.delegate.bindingConnected(t)}disconnectAction(e){const t=this.bindingsByAction.get(e);t&&(this.bindingsByAction.delete(e),this.delegate.bindingDisconnected(t))}disconnectAllActions(){this.bindings.forEach(e=>this.delegate.bindingDisconnected(e,!0)),this.bindingsByAction.clear()}parseValueForToken(e){const t=Qu.forToken(e,this.schema);if(t.identifier==this.identifier)return t}elementMatchedValue(e,t){this.connectAction(t)}elementUnmatchedValue(e,t){this.disconnectAction(t)}}class ld{constructor(e,t){this.context=e,this.receiver=t,this.stringMapObserver=new rd(this.element,this),this.valueDescriptorMap=this.controller.valueDescriptorMap}start(){this.stringMapObserver.start(),this.invokeChangedCallbacksForDefaultValues()}stop(){this.stringMapObserver.stop()}get element(){return this.context.element}get controller(){return this.context.controller}getStringMapKeyForAttribute(e){if(e in this.valueDescriptorMap)return this.valueDescriptorMap[e].name}stringMapKeyAdded(e,t){const r=this.valueDescriptorMap[t];this.hasValue(e)||this.invokeChangedCallback(e,r.writer(this.receiver[e]),r.writer(r.defaultValue))}stringMapValueChanged(e,t,r){const i=this.valueDescriptorNameMap[t];e!==null&&(r===null&&(r=i.writer(i.defaultValue)),this.invokeChangedCallback(t,e,r))}stringMapKeyRemoved(e,t,r){const i=this.valueDescriptorNameMap[e];this.hasValue(e)?this.invokeChangedCallback(e,i.writer(this.receiver[e]),r):this.invokeChangedCallback(e,i.writer(i.defaultValue),r)}invokeChangedCallbacksForDefaultValues(){for(const{key:e,name:t,defaultValue:r,writer:i}of this.valueDescriptors)r!=null&&!this.controller.data.has(e)&&this.invokeChangedCallback(t,i(r),void 0)}invokeChangedCallback(e,t,r){const i=`${e}Changed`,o=this.receiver[i];if(typeof o=="function"){const s=this.valueDescriptorNameMap[e];try{const a=s.reader(t);let l=r;r&&(l=s.reader(r)),o.call(this.receiver,a,l)}catch(a){throw a instanceof TypeError&&(a.message=`Stimulus Value "${this.context.identifier}.${s.name}" - ${a.message}`),a}}}get valueDescriptors(){const{valueDescriptorMap:e}=this;return Object.keys(e).map(t=>e[t])}get valueDescriptorNameMap(){const e={};return Object.keys(this.valueDescriptorMap).forEach(t=>{const r=this.valueDescriptorMap[t];e[r.name]=r}),e}hasValue(e){const t=this.valueDescriptorNameMap[e],r=`has${rr(t.name)}`;return this.receiver[r]}}class cd{constructor(e,t){this.context=e,this.delegate=t,this.targetsByName=new Zt}start(){this.tokenListObserver||(this.tokenListObserver=new ml(this.element,this.attributeName,this),this.tokenListObserver.start())}stop(){this.tokenListObserver&&(this.disconnectAllTargets(),this.tokenListObserver.stop(),delete this.tokenListObserver)}tokenMatched({element:e,content:t}){this.scope.containsElement(e)&&this.connectTarget(e,t)}tokenUnmatched({element:e,content:t}){this.disconnectTarget(e,t)}connectTarget(e,t){var r;this.targetsByName.has(t,e)||(this.targetsByName.add(t,e),(r=this.tokenListObserver)===null||r===void 0||r.pause(()=>this.delegate.targetConnected(e,t)))}disconnectTarget(e,t){var r;this.targetsByName.has(t,e)&&(this.targetsByName.delete(t,e),(r=this.tokenListObserver)===null||r===void 0||r.pause(()=>this.delegate.targetDisconnected(e,t)))}disconnectAllTargets(){for(const e of this.targetsByName.keys)for(const t of this.targetsByName.getValuesForKey(e))this.disconnectTarget(t,e)}get attributeName(){return`data-${this.context.identifier}-target`}get element(){return this.context.element}get scope(){return this.context.scope}}function ir(n,e){const t=vl(n);return Array.from(t.reduce((r,i)=>(dd(i,e).forEach(o=>r.add(o)),r),new Set))}function ud(n,e){return vl(n).reduce((r,i)=>(r.push(...hd(i,e)),r),[])}function vl(n){const e=[];for(;n;)e.push(n),n=Object.getPrototypeOf(n);return e.reverse()}function dd(n,e){const t=n[e];return Array.isArray(t)?t:[]}function hd(n,e){const t=n[e];return t?Object.keys(t).map(r=>[r,t[r]]):[]}class pd{constructor(e,t){this.started=!1,this.context=e,this.delegate=t,this.outletsByName=new Zt,this.outletElementsByName=new Zt,this.selectorObserverMap=new Map,this.attributeObserverMap=new Map}start(){this.started||(this.outletDefinitions.forEach(e=>{this.setupSelectorObserverForOutlet(e),this.setupAttributeObserverForOutlet(e)}),this.started=!0,this.dependentContexts.forEach(e=>e.refresh()))}refresh(){this.selectorObserverMap.forEach(e=>e.refresh()),this.attributeObserverMap.forEach(e=>e.refresh())}stop(){this.started&&(this.started=!1,this.disconnectAllOutlets(),this.stopSelectorObservers(),this.stopAttributeObservers())}stopSelectorObservers(){this.selectorObserverMap.size>0&&(this.selectorObserverMap.forEach(e=>e.stop()),this.selectorObserverMap.clear())}stopAttributeObservers(){this.attributeObserverMap.size>0&&(this.attributeObserverMap.forEach(e=>e.stop()),this.attributeObserverMap.clear())}selectorMatched(e,t,{outletName:r}){const i=this.getOutlet(e,r);i&&this.connectOutlet(i,e,r)}selectorUnmatched(e,t,{outletName:r}){const i=this.getOutletFromMap(e,r);i&&this.disconnectOutlet(i,e,r)}selectorMatchElement(e,{outletName:t}){const r=this.selector(t),i=this.hasOutlet(e,t),o=e.matches(`[${this.schema.controllerAttribute}~=${t}]`);return r?i&&o&&e.matches(r):!1}elementMatchedAttribute(e,t){const r=this.getOutletNameFromOutletAttributeName(t);r&&this.updateSelectorObserverForOutlet(r)}elementAttributeValueChanged(e,t){const r=this.getOutletNameFromOutletAttributeName(t);r&&this.updateSelectorObserverForOutlet(r)}elementUnmatchedAttribute(e,t){const r=this.getOutletNameFromOutletAttributeName(t);r&&this.updateSelectorObserverForOutlet(r)}connectOutlet(e,t,r){var i;this.outletElementsByName.has(r,t)||(this.outletsByName.add(r,e),this.outletElementsByName.add(r,t),(i=this.selectorObserverMap.get(r))===null||i===void 0||i.pause(()=>this.delegate.outletConnected(e,t,r)))}disconnectOutlet(e,t,r){var i;this.outletElementsByName.has(r,t)&&(this.outletsByName.delete(r,e),this.outletElementsByName.delete(r,t),(i=this.selectorObserverMap.get(r))===null||i===void 0||i.pause(()=>this.delegate.outletDisconnected(e,t,r)))}disconnectAllOutlets(){for(const e of this.outletElementsByName.keys)for(const t of this.outletElementsByName.getValuesForKey(e))for(const r of this.outletsByName.getValuesForKey(e))this.disconnectOutlet(r,t,e)}updateSelectorObserverForOutlet(e){const t=this.selectorObserverMap.get(e);t&&(t.selector=this.selector(e))}setupSelectorObserverForOutlet(e){const t=this.selector(e),r=new nd(document.body,t,this,{outletName:e});this.selectorObserverMap.set(e,r),r.start()}setupAttributeObserverForOutlet(e){const t=this.attributeNameForOutletName(e),r=new fl(this.scope.element,t,this);this.attributeObserverMap.set(e,r),r.start()}selector(e){return this.scope.outlets.getSelectorForOutletName(e)}attributeNameForOutletName(e){return this.scope.schema.outletAttributeForScope(this.identifier,e)}getOutletNameFromOutletAttributeName(e){return this.outletDefinitions.find(t=>this.attributeNameForOutletName(t)===e)}get outletDependencies(){const e=new Zt;return this.router.modules.forEach(t=>{const r=t.definition.controllerConstructor;ir(r,"outlets").forEach(o=>e.add(o,t.identifier))}),e}get outletDefinitions(){return this.outletDependencies.getKeysForValue(this.identifier)}get dependentControllerIdentifiers(){return this.outletDependencies.getValuesForKey(this.identifier)}get dependentContexts(){const e=this.dependentControllerIdentifiers;return this.router.contexts.filter(t=>e.includes(t.identifier))}hasOutlet(e,t){return!!this.getOutlet(e,t)||!!this.getOutletFromMap(e,t)}getOutlet(e,t){return this.application.getControllerForElementAndIdentifier(e,t)}getOutletFromMap(e,t){return this.outletsByName.getValuesForKey(t).find(r=>r.element===e)}get scope(){return this.context.scope}get schema(){return this.context.schema}get identifier(){return this.context.identifier}get application(){return this.context.application}get router(){return this.application.router}}class fd{constructor(e,t){this.logDebugActivity=(r,i={})=>{const{identifier:o,controller:s,element:a}=this;i=Object.assign({identifier:o,controller:s,element:a},i),this.application.logDebugActivity(this.identifier,r,i)},this.module=e,this.scope=t,this.controller=new e.controllerConstructor(this),this.bindingObserver=new ad(this,this.dispatcher),this.valueObserver=new ld(this,this.controller),this.targetObserver=new cd(this,this),this.outletObserver=new pd(this,this);try{this.controller.initialize(),this.logDebugActivity("initialize")}catch(r){this.handleError(r,"initializing controller")}}connect(){this.bindingObserver.start(),this.valueObserver.start(),this.targetObserver.start(),this.outletObserver.start();try{this.controller.connect(),this.logDebugActivity("connect")}catch(e){this.handleError(e,"connecting controller")}}refresh(){this.outletObserver.refresh()}disconnect(){try{this.controller.disconnect(),this.logDebugActivity("disconnect")}catch(e){this.handleError(e,"disconnecting controller")}this.outletObserver.stop(),this.targetObserver.stop(),this.valueObserver.stop(),this.bindingObserver.stop()}get application(){return this.module.application}get identifier(){return this.module.identifier}get schema(){return this.application.schema}get dispatcher(){return this.application.dispatcher}get element(){return this.scope.element}get parentElement(){return this.element.parentElement}handleError(e,t,r={}){const{identifier:i,controller:o,element:s}=this;r=Object.assign({identifier:i,controller:o,element:s},r),this.application.handleError(e,`Error ${t}`,r)}targetConnected(e,t){this.invokeControllerMethod(`${t}TargetConnected`,e)}targetDisconnected(e,t){this.invokeControllerMethod(`${t}TargetDisconnected`,e)}outletConnected(e,t,r){this.invokeControllerMethod(`${Ui(r)}OutletConnected`,e,t)}outletDisconnected(e,t,r){this.invokeControllerMethod(`${Ui(r)}OutletDisconnected`,e,t)}invokeControllerMethod(e,...t){const r=this.controller;typeof r[e]=="function"&&r[e](...t)}}function gd(n){return md(n,bd(n))}function md(n,e){const t=wd(n),r=vd(n.prototype,e);return Object.defineProperties(t.prototype,r),t}function bd(n){return ir(n,"blessings").reduce((t,r)=>{const i=r(n);for(const o in i){const s=t[o]||{};t[o]=Object.assign(s,i[o])}return t},{})}function vd(n,e){return kd(e).reduce((t,r)=>{const i=yd(n,e,r);return i&&Object.assign(t,{[r]:i}),t},{})}function yd(n,e,t){const r=Object.getOwnPropertyDescriptor(n,t);if(!(r&&"value"in r)){const o=Object.getOwnPropertyDescriptor(e,t).value;return r&&(o.get=r.get||o.get,o.set=r.set||o.set),o}}const kd=typeof Object.getOwnPropertySymbols=="function"?n=>[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)]:Object.getOwnPropertyNames,wd=(()=>{function n(t){function r(){return Reflect.construct(t,arguments,new.target)}return r.prototype=Object.create(t.prototype,{constructor:{value:r}}),Reflect.setPrototypeOf(r,t),r}function e(){const r=n(function(){this.a.call(this)});return r.prototype.a=function(){},new r}try{return e(),n}catch{return r=>class extends r{}}})();function xd(n){return{identifier:n.identifier,controllerConstructor:gd(n.controllerConstructor)}}class $d{constructor(e,t){this.application=e,this.definition=xd(t),this.contextsByScope=new WeakMap,this.connectedContexts=new Set}get identifier(){return this.definition.identifier}get controllerConstructor(){return this.definition.controllerConstructor}get contexts(){return Array.from(this.connectedContexts)}connectContextForScope(e){const t=this.fetchContextForScope(e);this.connectedContexts.add(t),t.connect()}disconnectContextForScope(e){const t=this.contextsByScope.get(e);t&&(this.connectedContexts.delete(t),t.disconnect())}fetchContextForScope(e){let t=this.contextsByScope.get(e);return t||(t=new fd(this,e),this.contextsByScope.set(e,t)),t}}class Cd{constructor(e){this.scope=e}has(e){return this.data.has(this.getDataKey(e))}get(e){return this.getAll(e)[0]}getAll(e){const t=this.data.get(this.getDataKey(e))||"";return Gu(t)}getAttributeName(e){return this.data.getAttributeNameForKey(this.getDataKey(e))}getDataKey(e){return`${e}-class`}get data(){return this.scope.data}}class Sd{constructor(e){this.scope=e}get element(){return this.scope.element}get identifier(){return this.scope.identifier}get(e){const t=this.getAttributeNameForKey(e);return this.element.getAttribute(t)}set(e,t){const r=this.getAttributeNameForKey(e);return this.element.setAttribute(r,t),this.get(e)}has(e){const t=this.getAttributeNameForKey(e);return this.element.hasAttribute(t)}delete(e){if(this.has(e)){const t=this.getAttributeNameForKey(e);return this.element.removeAttribute(t),!0}else return!1}getAttributeNameForKey(e){return`data-${this.identifier}-${hl(e)}`}}class Ed{constructor(e){this.warnedKeysByObject=new WeakMap,this.logger=e}warn(e,t,r){let i=this.warnedKeysByObject.get(e);i||(i=new Set,this.warnedKeysByObject.set(e,i)),i.has(t)||(i.add(t),this.logger.warn(r,e))}}function Wi(n,e){return`[${n}~="${e}"]`}class Ad{constructor(e){this.scope=e}get element(){return this.scope.element}get identifier(){return this.scope.identifier}get schema(){return this.scope.schema}has(e){return this.find(e)!=null}find(...e){return e.reduce((t,r)=>t||this.findTarget(r)||this.findLegacyTarget(r),void 0)}findAll(...e){return e.reduce((t,r)=>[...t,...this.findAllTargets(r),...this.findAllLegacyTargets(r)],[])}findTarget(e){const t=this.getSelectorForTargetName(e);return this.scope.findElement(t)}findAllTargets(e){const t=this.getSelectorForTargetName(e);return this.scope.findAllElements(t)}getSelectorForTargetName(e){const t=this.schema.targetAttributeForScope(this.identifier);return Wi(t,e)}findLegacyTarget(e){const t=this.getLegacySelectorForTargetName(e);return this.deprecate(this.scope.findElement(t),e)}findAllLegacyTargets(e){const t=this.getLegacySelectorForTargetName(e);return this.scope.findAllElements(t).map(r=>this.deprecate(r,e))}getLegacySelectorForTargetName(e){const t=`${this.identifier}.${e}`;return Wi(this.schema.targetAttribute,t)}deprecate(e,t){if(e){const{identifier:r}=this,i=this.schema.targetAttribute,o=this.schema.targetAttributeForScope(r);this.guide.warn(e,`target:${t}`,`Please replace ${i}="${r}.${t}" with ${o}="${t}". The ${i} attribute is deprecated and will be removed in a future version of Stimulus.`)}return e}get guide(){return this.scope.guide}}class Td{constructor(e,t){this.scope=e,this.controllerElement=t}get element(){return this.scope.element}get identifier(){return this.scope.identifier}get schema(){return this.scope.schema}has(e){return this.find(e)!=null}find(...e){return e.reduce((t,r)=>t||this.findOutlet(r),void 0)}findAll(...e){return e.reduce((t,r)=>[...t,...this.findAllOutlets(r)],[])}getSelectorForOutletName(e){const t=this.schema.outletAttributeForScope(this.identifier,e);return this.controllerElement.getAttribute(t)}findOutlet(e){const t=this.getSelectorForOutletName(e);if(t)return this.findElement(t,e)}findAllOutlets(e){const t=this.getSelectorForOutletName(e);return t?this.findAllElements(t,e):[]}findElement(e,t){return this.scope.queryElements(e).filter(i=>this.matchesElement(i,e,t))[0]}findAllElements(e,t){return this.scope.queryElements(e).filter(i=>this.matchesElement(i,e,t))}matchesElement(e,t,r){const i=e.getAttribute(this.scope.schema.controllerAttribute)||"";return e.matches(t)&&i.split(" ").includes(r)}}class Ao{constructor(e,t,r,i){this.targets=new Ad(this),this.classes=new Cd(this),this.data=new Sd(this),this.containsElement=o=>o.closest(this.controllerSelector)===this.element,this.schema=e,this.element=t,this.identifier=r,this.guide=new Ed(i),this.outlets=new Td(this.documentScope,t)}findElement(e){return this.element.matches(e)?this.element:this.queryElements(e).find(this.containsElement)}findAllElements(e){return[...this.element.matches(e)?[this.element]:[],...this.queryElements(e).filter(this.containsElement)]}queryElements(e){return Array.from(this.element.querySelectorAll(e))}get controllerSelector(){return Wi(this.schema.controllerAttribute,this.identifier)}get isDocumentScope(){return this.element===document.documentElement}get documentScope(){return this.isDocumentScope?this:new Ao(this.schema,document.documentElement,this.identifier,this.guide.logger)}}class Id{constructor(e,t,r){this.element=e,this.schema=t,this.delegate=r,this.valueListObserver=new bl(this.element,this.controllerAttribute,this),this.scopesByIdentifierByElement=new WeakMap,this.scopeReferenceCounts=new WeakMap}start(){this.valueListObserver.start()}stop(){this.valueListObserver.stop()}get controllerAttribute(){return this.schema.controllerAttribute}parseValueForToken(e){const{element:t,content:r}=e;return this.parseValueForElementAndIdentifier(t,r)}parseValueForElementAndIdentifier(e,t){const r=this.fetchScopesByIdentifierForElement(e);let i=r.get(t);return i||(i=this.delegate.createScopeForElementAndIdentifier(e,t),r.set(t,i)),i}elementMatchedValue(e,t){const r=(this.scopeReferenceCounts.get(t)||0)+1;this.scopeReferenceCounts.set(t,r),r==1&&this.delegate.scopeConnected(t)}elementUnmatchedValue(e,t){const r=this.scopeReferenceCounts.get(t);r&&(this.scopeReferenceCounts.set(t,r-1),r==1&&this.delegate.scopeDisconnected(t))}fetchScopesByIdentifierForElement(e){let t=this.scopesByIdentifierByElement.get(e);return t||(t=new Map,this.scopesByIdentifierByElement.set(e,t)),t}}class Bd{constructor(e){this.application=e,this.scopeObserver=new Id(this.element,this.schema,this),this.scopesByIdentifier=new Zt,this.modulesByIdentifier=new Map}get element(){return this.application.element}get schema(){return this.application.schema}get logger(){return this.application.logger}get controllerAttribute(){return this.schema.controllerAttribute}get modules(){return Array.from(this.modulesByIdentifier.values())}get contexts(){return this.modules.reduce((e,t)=>e.concat(t.contexts),[])}start(){this.scopeObserver.start()}stop(){this.scopeObserver.stop()}loadDefinition(e){this.unloadIdentifier(e.identifier);const t=new $d(this.application,e);this.connectModule(t);const r=e.controllerConstructor.afterLoad;r&&r.call(e.controllerConstructor,e.identifier,this.application)}unloadIdentifier(e){const t=this.modulesByIdentifier.get(e);t&&this.disconnectModule(t)}getContextForElementAndIdentifier(e,t){const r=this.modulesByIdentifier.get(t);if(r)return r.contexts.find(i=>i.element==e)}proposeToConnectScopeForElementAndIdentifier(e,t){const r=this.scopeObserver.parseValueForElementAndIdentifier(e,t);r?this.scopeObserver.elementMatchedValue(r.element,r):console.error(`Couldn't find or create scope for identifier: "${t}" and element:`,e)}handleError(e,t,r){this.application.handleError(e,t,r)}createScopeForElementAndIdentifier(e,t){return new Ao(this.schema,e,t,this.logger)}scopeConnected(e){this.scopesByIdentifier.add(e.identifier,e);const t=this.modulesByIdentifier.get(e.identifier);t&&t.connectContextForScope(e)}scopeDisconnected(e){this.scopesByIdentifier.delete(e.identifier,e);const t=this.modulesByIdentifier.get(e.identifier);t&&t.disconnectContextForScope(e)}connectModule(e){this.modulesByIdentifier.set(e.identifier,e),this.scopesByIdentifier.getValuesForKey(e.identifier).forEach(r=>e.connectContextForScope(r))}disconnectModule(e){this.modulesByIdentifier.delete(e.identifier),this.scopesByIdentifier.getValuesForKey(e.identifier).forEach(r=>e.disconnectContextForScope(r))}}const Od={controllerAttribute:"data-controller",actionAttribute:"data-action",targetAttribute:"data-target",targetAttributeForScope:n=>`data-${n}-target`,outletAttributeForScope:(n,e)=>`data-${n}-${e}-outlet`,keyMappings:Object.assign(Object.assign({enter:"Enter",tab:"Tab",esc:"Escape",space:" ",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",home:"Home",end:"End",page_up:"PageUp",page_down:"PageDown"},ws("abcdefghijklmnopqrstuvwxyz".split("").map(n=>[n,n]))),ws("0123456789".split("").map(n=>[n,n])))};function ws(n){return n.reduce((e,[t,r])=>Object.assign(Object.assign({},e),{[t]:r}),{})}class Md{constructor(e=document.documentElement,t=Od){this.logger=console,this.debug=!1,this.logDebugActivity=(r,i,o={})=>{this.debug&&this.logFormattedMessage(r,i,o)},this.element=e,this.schema=t,this.dispatcher=new Vu(this),this.router=new Bd(this),this.actionDescriptorFilters=Object.assign({},Hu)}static start(e,t){const r=new this(e,t);return r.start(),r}async start(){await zd(),this.logDebugActivity("application","starting"),this.dispatcher.start(),this.router.start(),this.logDebugActivity("application","start")}stop(){this.logDebugActivity("application","stopping"),this.dispatcher.stop(),this.router.stop(),this.logDebugActivity("application","stop")}register(e,t){this.load({identifier:e,controllerConstructor:t})}registerActionOption(e,t){this.actionDescriptorFilters[e]=t}load(e,...t){(Array.isArray(e)?e:[e,...t]).forEach(i=>{i.controllerConstructor.shouldLoad&&this.router.loadDefinition(i)})}unload(e,...t){(Array.isArray(e)?e:[e,...t]).forEach(i=>this.router.unloadIdentifier(i))}get controllers(){return this.router.contexts.map(e=>e.controller)}getControllerForElementAndIdentifier(e,t){const r=this.router.getContextForElementAndIdentifier(e,t);return r?r.controller:null}handleError(e,t,r){var i;this.logger.error(`%s

%o

%o`,t,e,r),(i=window.onerror)===null||i===void 0||i.call(window,t,"",0,0,e)}logFormattedMessage(e,t,r={}){r=Object.assign({application:this},r),this.logger.groupCollapsed(`${e} #${t}`),this.logger.log("details:",Object.assign({},r)),this.logger.groupEnd()}}function zd(){return new Promise(n=>{document.readyState=="loading"?document.addEventListener("DOMContentLoaded",()=>n()):n()})}function Ld(n){return ir(n,"classes").reduce((t,r)=>Object.assign(t,Pd(r)),{})}function Pd(n){return{[`${n}Class`]:{get(){const{classes:e}=this;if(e.has(n))return e.get(n);{const t=e.getAttributeName(n);throw new Error(`Missing attribute "${t}"`)}}},[`${n}Classes`]:{get(){return this.classes.getAll(n)}},[`has${rr(n)}Class`]:{get(){return this.classes.has(n)}}}}function Fd(n){return ir(n,"outlets").reduce((t,r)=>Object.assign(t,Nd(r)),{})}function xs(n,e,t){return n.application.getControllerForElementAndIdentifier(e,t)}function $s(n,e,t){let r=xs(n,e,t);if(r||(n.application.router.proposeToConnectScopeForElementAndIdentifier(e,t),r=xs(n,e,t),r))return r}function Nd(n){const e=Ui(n);return{[`${e}Outlet`]:{get(){const t=this.outlets.find(n),r=this.outlets.getSelectorForOutletName(n);if(t){const i=$s(this,t,n);if(i)return i;throw new Error(`The provided outlet element is missing an outlet controller "${n}" instance for host controller "${this.identifier}"`)}throw new Error(`Missing outlet element "${n}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${r}".`)}},[`${e}Outlets`]:{get(){const t=this.outlets.findAll(n);return t.length>0?t.map(r=>{const i=$s(this,r,n);if(i)return i;console.warn(`The provided outlet element is missing an outlet controller "${n}" instance for host controller "${this.identifier}"`,r)}).filter(r=>r):[]}},[`${e}OutletElement`]:{get(){const t=this.outlets.find(n),r=this.outlets.getSelectorForOutletName(n);if(t)return t;throw new Error(`Missing outlet element "${n}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${r}".`)}},[`${e}OutletElements`]:{get(){return this.outlets.findAll(n)}},[`has${rr(e)}Outlet`]:{get(){return this.outlets.has(n)}}}}function Dd(n){return ir(n,"targets").reduce((t,r)=>Object.assign(t,_d(r)),{})}function _d(n){return{[`${n}Target`]:{get(){const e=this.targets.find(n);if(e)return e;throw new Error(`Missing target element "${n}" for "${this.identifier}" controller`)}},[`${n}Targets`]:{get(){return this.targets.findAll(n)}},[`has${rr(n)}Target`]:{get(){return this.targets.has(n)}}}}function Rd(n){const e=ud(n,"values"),t={valueDescriptorMap:{get(){return e.reduce((r,i)=>{const o=yl(i,this.identifier),s=this.data.getAttributeNameForKey(o.key);return Object.assign(r,{[s]:o})},{})}}};return e.reduce((r,i)=>Object.assign(r,Vd(i)),t)}function Vd(n,e){const t=yl(n,e),{key:r,name:i,reader:o,writer:s}=t;return{[i]:{get(){const a=this.data.get(r);return a!==null?o(a):t.defaultValue},set(a){a===void 0?this.data.delete(r):this.data.set(r,s(a))}},[`has${rr(i)}`]:{get(){return this.data.has(r)||t.hasCustomDefaultValue}}}}function yl([n,e],t){return Ud({controller:t,token:n,typeDefinition:e})}function Fr(n){switch(n){case Array:return"array";case Boolean:return"boolean";case Number:return"number";case Object:return"object";case String:return"string"}}function Zn(n){switch(typeof n){case"boolean":return"boolean";case"number":return"number";case"string":return"string"}if(Array.isArray(n))return"array";if(Object.prototype.toString.call(n)==="[object Object]")return"object"}function Hd(n){const{controller:e,token:t,typeObject:r}=n,i=vs(r.type),o=vs(r.default),s=i&&o,a=i&&!o,l=!i&&o,c=Fr(r.type),u=Zn(n.typeObject.default);if(a)return c;if(l)return u;if(c!==u){const d=e?`${e}.${t}`:t;throw new Error(`The specified default value for the Stimulus Value "${d}" must match the defined type "${c}". The provided default value of "${r.default}" is of type "${u}".`)}if(s)return c}function jd(n){const{controller:e,token:t,typeDefinition:r}=n,o=Hd({controller:e,token:t,typeObject:r}),s=Zn(r),a=Fr(r),l=o||s||a;if(l)return l;const c=e?`${e}.${r}`:t;throw new Error(`Unknown value type "${c}" for "${t}" value`)}function qd(n){const e=Fr(n);if(e)return Cs[e];const t=Ki(n,"default"),r=Ki(n,"type"),i=n;if(t)return i.default;if(r){const{type:o}=i,s=Fr(o);if(s)return Cs[s]}return n}function Ud(n){const{token:e,typeDefinition:t}=n,r=`${hl(e)}-value`,i=jd(n);return{type:i,key:r,name:Eo(r),get defaultValue(){return qd(t)},get hasCustomDefaultValue(){return Zn(t)!==void 0},reader:Kd[i],writer:Ss[i]||Ss.default}}const Cs={get array(){return[]},boolean:!1,number:0,get object(){return{}},string:""},Kd={array(n){const e=JSON.parse(n);if(!Array.isArray(e))throw new TypeError(`expected value of type "array" but instead got value "${n}" of type "${Zn(e)}"`);return e},boolean(n){return!(n=="0"||String(n).toLowerCase()=="false")},number(n){return Number(n.replace(/_/g,""))},object(n){const e=JSON.parse(n);if(e===null||typeof e!="object"||Array.isArray(e))throw new TypeError(`expected value of type "object" but instead got value "${n}" of type "${Zn(e)}"`);return e},string(n){return n}},Ss={default:Wd,array:Es,object:Es};function Es(n){return JSON.stringify(n)}function Wd(n){return`${n}`}class Se{constructor(e){this.context=e}static get shouldLoad(){return!0}static afterLoad(e,t){}get application(){return this.context.application}get scope(){return this.context.scope}get element(){return this.scope.element}get identifier(){return this.scope.identifier}get targets(){return this.scope.targets}get outlets(){return this.scope.outlets}get classes(){return this.scope.classes}get data(){return this.scope.data}initialize(){}connect(){}disconnect(){}dispatch(e,{target:t=this.element,detail:r={},prefix:i=this.identifier,bubbles:o=!0,cancelable:s=!0}={}){const a=i?`${i}:${e}`:e,l=new CustomEvent(a,{detail:r,bubbles:o,cancelable:s});return t.dispatchEvent(l),l}}Se.blessings=[Ld,Dd,Rd,Fd];Se.targets=[];Se.outlets=[];Se.values={};const Gd=`
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
`,Qd=`
    <div class="sideAlign userpage" data-controller="user" aria-hidden="true">
        <div class="userpage-account">
            <div class="userpage-bannerContainer skeleton-load-bg">
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
                    <p class="userpage-description skeleton-load-bg text" data-action="click->user#expandDescription" data-user-target="loading">
                        <span data-user-target="userDescription">
                            Description
                        </span>
                        <button data-action="click->user#expandDescription" class="inline">
                            <fluent-text size="200" weight="bold">
                                ...more
                            </fluent-text>
                        </button>
                    </p>
                    <fluent-dialog data-user-target="userDescriptionDialog">
                        <fluent-dialog-body>
                            <p data-user-target="userDescriptionDialogContent"></p>
                            <div slot="title">Description</div>
                        </fluent-dialog-body>
                    </fluent-dialog>
                    <div class="userpage-badges" data-user-target="userBadges"> </div>
                </div>
            </div>
        </div>
        <div class="track-list" data-user-target="trackList">
            <fluent-spinner size="huge"></fluent-spinner>
        </div>
    </div>
`,Xd=`
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
                    <p class="trackpage-description skeleton-load-bg text" data-action="click->track#expandDescription" data-track-target="trackLoading">
                        <span data-track-target="description">
                            Description
                        </span>
                        <button data-action="click->track#expandDescription" class="inline">
                            <fluent-text size="200" weight="bold">
                                ...more
                            </fluent-text>
                        </button>
                    </p>

                    <fluent-button appearance="primary" size="large">
                        <svg slot="start" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.60846 4.61507C7.1087 4.34314 6.5 4.70491 6.5 5.27386V18.7262C6.5 19.2951 7.1087 19.6569 7.60846 19.385L19.97 12.6588C20.4921 12.3747 20.4921 11.6253 19.97 11.3412L7.60846 4.61507ZM5 5.27386C5 3.56701 6.82609 2.4817 8.32538 3.29749L20.687 10.0236C22.2531 10.8758 22.2531 13.1242 20.687 13.9764L8.32538 20.7025C6.82609 21.5183 5 20.433 5 18.7262V5.27386Z" fill="currentColor"/>
                        </svg>
                        Play
                    </fluent-button>
                </div>
            </div>
            <fluent-dialog data-track-target="descriptionDialog">
                <fluent-dialog-body>
                    <p data-track-target="descriptionDialogContent"></p>
                    <div slot="title">Description</div>
                </fluent-dialog-body>
            </fluent-dialog>
            <div class="comments-section">
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
`,Zd=`
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
        `,Yd=`
    <div class="searchpage" data-controller="search">
        <h1>Search page landing page Demo</h1>
        <div class="search-bar" data-controller="searchbar">
            <fluent-text-input
                appearance="filled-lighter"
                name="Search"
                type="text"
                control-size="medium"
                placeholder="Hey friend, wanna search something?"
                autocomplete="no"
                data-searchbar-target="query"
                data-action="input->searchbar#autocomplete click->searchbar#showAutocomplete"
                style="anchor-name: --search-bar"
            >
            </fluent-text-input>

            <fluent-button
                appearance="primary"
                data-action="click->searchbar#search"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 10C4.5 6.96243 6.96243 4.5 10 4.5C13.0376 4.5 15.5 6.96243 15.5 10C15.5 13.0376 13.0376 15.5 10 15.5C6.96243 15.5 4.5 13.0376 4.5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.6628 17 13.1902 16.4202 14.3911 15.4518L19.7197 20.7803C20.0126 21.0732 20.4874 21.0732 20.7803 20.7803C21.0732 20.4874 21.0732 20.0126 20.7803 19.7197L15.4518 14.3911C16.4202 13.1902 17 11.6628 17 10C17 6.13401 13.866 3 10 3Z" fill="currentColor"/>
                </svg>
                Search
            </fluent-button>
            <fluent-menu-list
                hidden
                class="search-results"
                data-searchbar-target="results"
            ></fluent-menu-list>
        </div>
    </div>
        `,Jd=`
    <div class="middle-float" data-controller="balance">
        <h2>Clipcoins (temp ui)</h2>

        coins amount

        <span data-balance-target="currentBalance"></span>

        <fluent-button shape="circular" icon-only data-action="click->balance#openFaq">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C9.23579 4 7 6.23579 7 9C7 9.41421 7.33579 9.75 7.75 9.75C8.16421 9.75 8.5 9.41421 8.5 9C8.5 7.06421 10.0642 5.5 12 5.5C13.9358 5.5 15.5 7.06421 15.5 9C15.5 9.85178 15.2785 10.4195 14.9711 10.8595C14.6472 11.3232 14.2043 11.6827 13.6694 12.0917C13.624 12.1264 13.578 12.1615 13.5313 12.1969C12.5209 12.9651 11.25 13.9312 11.25 16V16.25C11.25 16.6642 11.5858 17 12 17C12.4142 17 12.75 16.6642 12.75 16.25V16C12.75 14.6827 13.464 14.1369 14.5353 13.3179L14.5806 13.2833C15.1082 12.8798 15.7278 12.3955 16.2008 11.7186C16.6902 11.018 17 10.1482 17 9C17 6.23579 14.7642 4 12 4ZM12 21C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21Z" fill="currentColor"/>
            </svg>
        </fluent-button>

        <fluent-dialog data-balance-target="faqDialog">
            <fluent-dialog-body>
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
                <div slot="title">FAQ</div>
            </fluent-dialog-body>
        </fluent-dialog>`,eh=`
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
    `,th=`
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
`,nh=`
<div class="side-align cliptivitypage" data-controller="cliptivity">
    <h1>Cliptivity</h1>
    <div class="cliptivitypage-pagination" data-cliptivity-target="pagination">
        <fluent-button disabled size="large" appearance="subtle" icon-only type="button" data-action="click->cliptivity#previous" data-cliptivity-target="previous">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3.5C3 3.22386 3.22386 3 3.5 3C3.77614 3 4 3.22386 4 3.5V16.5C4 16.7761 3.77614 17 3.5 17C3.22386 17 3 16.7761 3 16.5V3.5ZM16.9998 4.25211C16.9998 3.25186 15.8834 2.65676 15.053 3.21436L6.55376 8.92144C5.81927 9.41464 5.81554 10.4938 6.54659 10.9921L15.0458 16.785C15.8756 17.3505 16.9998 16.7562 16.9998 15.7521V4.25211ZM15.6105 4.04456C15.7766 3.93304 15.9998 4.05206 15.9998 4.25211V15.7521C15.9998 15.9529 15.775 16.0717 15.609 15.9586L7.10979 10.1658C6.96358 10.0661 6.96432 9.85028 7.11122 9.75165L15.6105 4.04456Z" fill="currentColor"/>
            </svg>
        </fluent-button>
        <fluent-text-input data-action="focusout->cliptivity#goto" data-cliptivity-target="paginationCurrent" appearance="filled-darker" name="Page number" pattern="^[0-9]*$" type="text" value></fluent-text-input>
        <span data-cliptivity-target="paginationTotal">of --</span>
        <fluent-button disabled size="large" appearance="subtle" icon-only type="button" data-action="click->cliptivity#next" data-cliptivity-target="next">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 3.5C17 3.22386 16.7762 3 16.5 3C16.2239 3 16 3.22386 16 3.5V16.5C16 16.7761 16.2239 17 16.5 17C16.7762 17 17 16.7761 17 16.5V3.5ZM3.00018 4.25211C3.00018 3.25186 4.1166 2.65676 4.94701 3.21436L13.4463 8.92144C14.1808 9.41464 14.1845 10.4938 13.4534 10.9921L4.95418 16.785C4.1244 17.3505 3.00018 16.7562 3.00018 15.7521V4.25211ZM4.38955 4.04456C4.22347 3.93304 4.00018 4.05206 4.00018 4.25211V15.7521C4.00018 15.9529 4.22503 16.0717 4.39098 15.9586L12.8902 10.1658C13.0365 10.0661 13.0357 9.85028 12.8888 9.75165L4.38955 4.04456Z" fill="currentColor"/>
            </svg>
        </fluent-button>
    </div>
    <ul class="cliptivitypage-list" data-cliptivity-target="list">
        <fluent-spinner size="huge"></fluent-spinner>
    </ul>
</div>
`,rh=`
<div class="middle-float">
    <form id="submission-form" class="form-backport" method="POST" enctype="multipart/form-data">
        <h1>Upload (Beta) broken D: >o<</h1>
        <fluent-accordion>
            <fluent-accordion-item>
                <span slot="heading">Release Settings</span>
                <div class="form-group">
                    <label for="artcover">Art Cover (.png, .jpg) *</label>
                    <input type="file" class="form-control" id="artcover" name="artCover" accept=".png,.jpg" required>
                    <img id="preview" src="#" alt="Preview" class="img-fluid mt-2 upload-preview-image" style="display:none;">
                </div>
                <div class="form-group">
                    <label for="release_date">Release Date *</label>
                    <input type="date" class="form-control" id="release_date" name="uploadReleaseDate" required>
                </div>
                <div class="form-group">
                    <label for="comments_enabled">Comments enabled</label>
                    <fluent-switch></fluent-switch>
                </div>
            </fluent-accordion-item>

            <fluent-accordion-item>
                <span slot="heading">Track Selection</span>
                <div id="tracks-section">
                    <fluent-button type="button" appearance="primary" id="add-track-btn">Add Track</fluent-button>
                    <div id="tracks-container"></div>
                </div>
            </fluent-accordion-item>
        </fluent-accordion>

        <hr />

        <h2>Acknowledgements <span class="text-danger">*</span></h2>
        <div class="acknowledgements">
            <label>
                <fluent-checkbox required></fluent-checkbox>
                <span>
                    This release is in accordance with the <b><a data-global-target="openExternal" inline class="hyperlink" href="https://clippsly.com/terms-of-use">Clippsly Terms of Use</a></b>.
                </span>
            </label>
            <label>
                <fluent-checkbox required></fluent-checkbox>
                <span>
                    If any <b>copyrighted content</b> is found in your release your <b class="text-danger">account will be terminated</b>.
                </span>
            </label>
            <label>
                <fluent-checkbox required></fluent-checkbox>
                <span>
                    This will upload your tracks to the <b>Clippsly</b> platform, and <b>not to Roblox</b>.
                </span>
            </label>
        </div>

        <fluent-button type="submit" class="btn-secondary">Submit</fluent-button>
    </form>

    <div class="upload-loading-overlay" style="display: none;">
        <div class="upload-loading-spinner"></div>
    </div>
</div>`,Si=D.getCookie("CLIPSESSIONTOKEN"),Lt=class Lt extends Se{connect(){Lt.loadPage(location.pathname+location.search),document.addEventListener("click",this.documentClick),window.addEventListener("popstate",e=>{e.preventDefault();const t=e.state;Lt.loadPage(t.url,!0)}),Si&&(Lt.pingServer(Si),setInterval(()=>{Lt.pingServer(Si)},4*60*1e3))}static async pingServer(e){const t="https://api.clippsly.com/endpoints/data/pulse";try{const r=await fetch(t,{method:"POST",headers:{Authorization:`Bearer ${e}`}});if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`)}catch(r){console.error("Error pinging the server:",r)}}documentClick(e){if(!e.target)return!1;const t=e.target.closest("a");if(!t)return!1;e.preventDefault();const r=t.getAttribute("href");if(!r)return;t.getAttribute("data-global-target")=="open-external"||!r.startsWith("/")?window.open(r):Lt.loadPage(r)}skelimgTargetConnected(e){const t=e.parentElement;t&&(e.addEventListener("load",()=>{e.classList.add("loaded"),t.classList.remove("skeleton-load-bg")}),e.addEventListener("error",()=>{e.classList.remove("loaded"),t.classList.add("skeleton-load-error"),t.classList.remove("skeleton-load-bg")}))}openExternalTargetConnected(e){const t=e.getAttribute("href");t&&e.addEventListener("click",()=>{window.open(t)})}removeonloadTargetConnected(e){e.remove()}static loadPage(e,t){var r,i,o,s,a;if(t||history.pushState({url:e},"",e),e==="/")D.setDocTitle(D.pageNames.home),Ze.innerHTML=Gd;else if(e.startsWith("/users/")){Ze.innerHTML=Qd;const l=e.split("/users/")[1];(r=document.querySelector(".userpage"))==null||r.setAttribute("data-user-id-value",l)}else if(e.startsWith("/track/")){Ze.innerHTML=Xd;const l=e.split("/track/")[1];(i=document.querySelector(".trackpage"))==null||i.setAttribute("data-track-id-value",l)}else if(e.startsWith("/search")){const l=e.split("?query=")[1];l?Ze.innerHTML=Zd:Ze.innerHTML=Yd,(o=document.querySelector(".searchpage"))==null||o.setAttribute("data-search-query-value",l||"")}else if(e.startsWith("/error")){Ze.innerHTML=eh;const l=e.split("?code=")[1];(s=document.querySelector(".error-page"))==null||s.setAttribute("data-error-code-value",l)}else if(e.startsWith("/upload"))D.setDocTitle(D.pageNames.upload),Ze.innerHTML=rh;else if(e.startsWith("/balance"))D.setDocTitle(D.pageNames.balance),Ze.innerHTML=Jd;else if(e.startsWith("/cliptivity")){D.setDocTitle(D.pageNames.cliptivity);const l=e.split("?page=")[1];Ze.innerHTML=nh,(a=document.querySelector(".cliptivitypage"))==null||a.setAttribute("data-cliptivity-page-value",l)}else e==="/login"||e.startsWith("/login")||(e.startsWith("/settings")?(D.setDocTitle(D.pageNames.settings),Ze.innerHTML=th):e==="/register"||e.startsWith("/register")||e.startsWith("/not-approved"))}};ce(Lt,"targets",["skelimg","removeonload","openExternal"]);let be=Lt;const Ze=document.getElementById("app"),ih="https://api.clippsly.com/endpoints/functions/home-page";class kl extends Se{async connect(){try{const e=await fetch(ih).then(t=>t.json());if(this.latestTarget){this.latestTarget.innerHTML="";let t=0;e.latestTracks.forEach(r=>{t++,t>6?this.latestTarget.append(D.createTrack(r,!1)):this.latestTarget.append(D.createTrack(r,!0))})}if(this.recommendedTarget){this.recommendedTarget.innerHTML="";let t=0;e.randomTracks.forEach(r=>{t++,t>6?this.recommendedTarget.append(D.createTrack(r,!1)):this.recommendedTarget.append(D.createTrack(r,!0))})}}catch(e){console.error(e)}this.element.ariaHidden="false"}}ce(kl,"targets",["latest","recommended"]);const oh=D.getCookie("CLIPSESSIONTOKEN"),sh="https://api.clippsly.com/endpoints/data/current-session";class ah extends Se{async connect(){const e=await fetch(sh,{method:"GET",headers:{Authorization:`Bearer ${oh}`}}).then(t=>t.json());e.avatar?this.element.src=e.avatar:this.element.src=""}}const lh=D.getCookie("CLIPSESSIONTOKEN"),ch="https://api.clippsly.com/endpoints/functions/search-results?query=";class Gi extends Se{async connect(){var r;if(!this.queryValue)return;const e=await fetch(ch+this.queryValue,{method:"GET",headers:{Authorization:`Bearer ${lh}`}}).then(i=>i.json()).catch(i=>be.loadPage("/error?code="+(i.status|404)));e.users||e.tracks||be.loadPage("/error?code=404"),this.usersTarget.innerHTML="",this.tracksTarget.innerHTML="",e.users.length+e.tracks.length<=0&&(this.usersTarget.innerHTML="<h1>No results found :(</h1>");const t=document.createElement("fluent-anchor-button");t.textContent="Go back to the main searching Page",t.setAttribute("href","/search"),(r=this.element.firstChild)==null||r.before(t);for(let i=0;i<e.users.length;i++){const o=e.users[i],s=document.createElement("a");s.classList.add("user"),s.href=`/users/${o.authorUsername}`;const a=document.createElement("div");a.classList.add("avatar"),a.classList.add("skeleton-load-bg"),a.tabIndex=-1;const l=document.createElement("img");l.role="presentation",l.alt="",l.src=o.authorAvatar||"https://cdn.clippsly.com/brand_assets/icons/default-artist.png",l.loading="eager",l.fetchPriority="low",l.setAttribute("data-global-target","skelimg"),l.classList.add("skeleton-load-fg"),a.append(l);const c=document.createElement("div");c.classList.add("user-details");const u=document.createElement("span");u.classList.add("displayname"),u.textContent=o.authorDisplay;const d=document.createElement("span");d.classList.add("username"),d.classList.add("subtitle-hyperlink");const p=document.createElement("span");if(p.textContent=o.authorUsername,d.append(p),o.authorVerified){const h=document.createElement("div");h.classList.add("icon"),h.title="Verified",h.innerHTML=D.verifiedBadgeHTML,d.append(h)}c.append(u,d),s.append(a,c),this.usersTarget.append(s)}for(let i=0;i<e.tracks.length;i++){const o=e.tracks[i];this.tracksTarget.append(D.createTrack({ID:o.releaseID,Title:o.releaseName,Artist:0,Genre:o.releaseGenre||"Unknown",ArtCover:o.additionalData.releaseCoverArt,Audio:o.additionalData.audioFile,Description:o.additionalData.releaseDescription,commentsOff:o.commentsOff,isModerated:!1,isExplicit:!1,isProtected:!1,isUnderReview:!1,isArtificiallyGenerated:!1,audio_duration:o.additionalData.audioDuration,releaseDate:o.additionalData.premiereDate,releaseAuthor:o.releaseAuthor},!0))}this.element.ariaHidden="false"}}ce(Gi,"targets",["users","tracks"]),ce(Gi,"values",{query:String});class wl extends Se{connect(){const e=(location.pathname+location.search).split("?query=")[1];e&&(this.queryTarget.value=e)}search(){be.loadPage("/search?query="+this.query)}showAutocomplete(){this.results.hidden=!1}hideAutocomplete(){this.results.hidden=!0}async autocomplete(){const e=this.query;if(e.length>0){const t="https://api.clippsly.com/endpoints/functions/search-suggestions?query="+e,r=await fetch(t,{method:"GET"});if(!r.ok)throw new Error(`Response status: ${r.status}`);const i=await r.json();this.showAutocomplete(),this.results.innerHTML="",i.forEach(s=>{const a=document.createElement("a");a.href="/search?query="+s,a.classList.add("menu-item-hyperlink");const l=document.createElement("fluent-menu-item");l.setAttribute("data-action","click->searchbar#searchAutocompleteQuery"),l.textContent=s,a.append(l),this.results.append(a)})}else this.results.innerHTML=""}async searchAutocompleteQuery(e){const t=e.target.textContent;this.queryTarget.value=t||"",await this.autocomplete(),this.hideAutocomplete()}get query(){return this.queryTarget.value}get results(){return this.resultsTarget}}ce(wl,"targets",["query","results"]);const uh={400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found",500:"Internal Server",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout"},dh={400:"The server could not understand the request due to invalid syntax.",401:"The client must authenticate itself to get the requested response.",403:"The client does not have access rights to the content.",404:"The server can not find the requested resource.",500:"The server has encountered a situation it doesn't know how to handle.",502:"The server was acting as a gateway or proxy and received an invalid response from the upstream server.",503:"The server is not ready to handle the request.",504:"The server was acting as a gateway or proxy and did not receive a timely response from the upstream server."};class Qi extends Se{async connect(){const e=uh[this.codeValue]||"Unknown Error",t=dh[this.codeValue]||"An unknown error occured.";D.setDocTitle(D.pageNames.error.concat(" ",this.codeValue.toString()," ",e)),this.nameTarget.textContent=`Error ${this.codeValue}: ${e}`,this.descriptionTarget.textContent=t}navigatePrevPage(){history.back()}}ce(Qi,"targets",["name","description"]),ce(Qi,"values",{code:Number});function m(n,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(o=(i<3?s(o):i>3?s(e,t,o):s(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o}let Br;const As="fast-kernel";try{if(document.currentScript)Br=document.currentScript.getAttribute(As);else{const n=document.getElementsByTagName("script");Br=n[n.length-1].getAttribute(As)}}catch{Br="isolate"}let Yt;switch(Br){case"share":Yt=Object.freeze({updateQueue:1,observable:2,contextEvent:3,elementRegistry:4});break;case"share-v2":Yt=Object.freeze({updateQueue:1.2,observable:2.2,contextEvent:3.2,elementRegistry:4.2});break;default:const n=`-${Math.random().toString(36).substring(2,8)}`;Yt=Object.freeze({updateQueue:`1.2${n}`,observable:`2.2${n}`,contextEvent:`3.2${n}`,elementRegistry:`4.2${n}`});break}const Tn=n=>typeof n=="function",wt=n=>typeof n=="string",hh=()=>{};var Ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ph(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}(function(){if(!(typeof globalThis<"u"))if(typeof Ei<"u")Ei.globalThis=Ei;else if(typeof self<"u")self.globalThis=self;else if(typeof window<"u")window.globalThis=window;else{const e=new Function("return this")();e.globalThis=e}})();const xl={configurable:!1,enumerable:!1,writable:!1};globalThis.FAST===void 0&&Reflect.defineProperty(globalThis,"FAST",Object.assign({value:Object.create(null)},xl));const ge=globalThis.FAST;if(ge.getById===void 0){const n=Object.create(null);Reflect.defineProperty(ge,"getById",Object.assign({value(e,t){let r=n[e];return r===void 0&&(r=t?n[e]=t():null),r}},xl))}ge.error===void 0&&Object.assign(ge,{warn(){},error(n){return new Error(`Error ${n}`)},addMessages(){}});const fh=Object.freeze([]);function To(){const n=new Map;return Object.freeze({register(e){return n.has(e.type)?!1:(n.set(e.type,e),!0)},getByType(e){return n.get(e)},getForInstance(e){if(e!=null)return n.get(e.constructor)}})}function $l(){const n=new WeakMap;return function(e){let t=n.get(e);if(t===void 0){let r=Reflect.getPrototypeOf(e);for(;t===void 0&&r!==null;)t=n.get(r),r=Reflect.getPrototypeOf(r);t=t===void 0?[]:t.slice(0),n.set(e,t)}return t}}function on(n){n.prototype.toJSON=hh}const de=Object.freeze({none:0,attribute:1,booleanAttribute:2,property:3,content:4,tokenList:5,event:6}),Ts=n=>n,gh=globalThis.trustedTypes?globalThis.trustedTypes.createPolicy("fast-html",{createHTML:Ts}):{createHTML:Ts};let Or=Object.freeze({createHTML(n){return gh.createHTML(n)},protect(n,e,t,r){return r}});const mh=Or,kn=Object.freeze({get policy(){return Or},setPolicy(n){if(Or!==mh)throw ge.error(1201);Or=n},setAttribute(n,e,t){t==null?n.removeAttribute(e):n.setAttribute(e,t)},setBooleanAttribute(n,e,t){t?n.setAttribute(e,""):n.removeAttribute(e)}}),Jt=ge.getById(Yt.updateQueue,()=>{const n=[],e=[],t=globalThis.requestAnimationFrame;let r=!0;function i(){if(e.length)throw e.shift()}function o(l){try{l.call()}catch(c){if(r)e.push(c),setTimeout(i,0);else throw n.length=0,c}}function s(){let c=0;for(;c<n.length;)if(o(n[c]),c++,c>1024){for(let u=0,d=n.length-c;u<d;u++)n[u]=n[u+c];n.length-=c,c=0}n.length=0}function a(l){n.push(l),n.length<2&&(r?t(s):s())}return Object.freeze({enqueue:a,next:()=>new Promise(a),process:s,setMode:l=>r=l})});class Xi{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.subject=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){const t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const r=t.indexOf(e);r!==-1&&t.splice(r,1)}}notify(e){const t=this.spillover,r=this.subject;if(t===void 0){const i=this.sub1,o=this.sub2;i!==void 0&&i.handleChange(r,e),o!==void 0&&o.handleChange(r,e)}else for(let i=0,o=t.length;i<o;++i)t[i].handleChange(r,e)}}class Cl{constructor(e){this.subscribers={},this.subjectSubscribers=null,this.subject=e}notify(e){var t,r;(t=this.subscribers[e])===null||t===void 0||t.notify(e),(r=this.subjectSubscribers)===null||r===void 0||r.notify(e)}subscribe(e,t){var r,i;let o;t?o=(r=this.subscribers[t])!==null&&r!==void 0?r:this.subscribers[t]=new Xi(this.subject):o=(i=this.subjectSubscribers)!==null&&i!==void 0?i:this.subjectSubscribers=new Xi(this.subject),o.subscribe(e)}unsubscribe(e,t){var r,i;t?(r=this.subscribers[t])===null||r===void 0||r.unsubscribe(e):(i=this.subjectSubscribers)===null||i===void 0||i.unsubscribe(e)}}const ni=Object.freeze({unknown:void 0,coupled:1}),z=ge.getById(Yt.observable,()=>{const n=Jt.enqueue,e=/(:|&&|\|\||if|\?\.)/,t=new WeakMap;let r,i=c=>{throw ge.error(1101)};function o(c){var u;let d=(u=c.$fastController)!==null&&u!==void 0?u:t.get(c);return d===void 0&&(Array.isArray(c)?d=i(c):t.set(c,d=new Cl(c))),d}const s=$l();class a{constructor(u){this.name=u,this.field=`_${u}`,this.callback=`${u}Changed`}getValue(u){return r!==void 0&&r.watch(u,this.name),u[this.field]}setValue(u,d){const p=this.field,h=u[p];if(h!==d){u[p]=d;const x=u[this.callback];Tn(x)&&x.call(u,h,d),o(u).notify(this.name)}}}class l extends Xi{constructor(u,d,p=!1){super(u,d),this.expression=u,this.isVolatileBinding=p,this.needsRefresh=!0,this.needsQueue=!0,this.isAsync=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}setMode(u){this.isAsync=this.needsQueue=u}bind(u){this.controller=u;const d=this.observe(u.source,u.context);return!u.isBound&&this.requiresUnbind(u)&&u.onUnbind(this),d}requiresUnbind(u){return u.sourceLifetime!==ni.coupled||this.first!==this.last||this.first.propertySource!==u.source}unbind(u){this.dispose()}observe(u,d){this.needsRefresh&&this.last!==null&&this.dispose();const p=r;r=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let h;try{h=this.expression(u,d)}finally{r=p}return h}disconnect(){this.dispose()}dispose(){if(this.last!==null){let u=this.first;for(;u!==void 0;)u.notifier.unsubscribe(this,u.propertyName),u=u.next;this.last=null,this.needsRefresh=this.needsQueue=this.isAsync}}watch(u,d){const p=this.last,h=o(u),x=p===null?this.first:{};if(x.propertySource=u,x.propertyName=d,x.notifier=h,h.subscribe(this,d),p!==null){if(!this.needsRefresh){let S;r=void 0,S=p.propertySource[p.propertyName],r=this,u===S&&(this.needsRefresh=!0)}p.next=x}this.last=x}handleChange(){this.needsQueue?(this.needsQueue=!1,n(this)):this.isAsync||this.call()}call(){this.last!==null&&(this.needsQueue=this.isAsync,this.notify(this))}*records(){let u=this.first;for(;u!==void 0;)yield u,u=u.next}}return on(l),Object.freeze({setArrayObserverFactory(c){i=c},getNotifier:o,track(c,u){r&&r.watch(c,u)},trackVolatile(){r&&(r.needsRefresh=!0)},notify(c,u){o(c).notify(u)},defineProperty(c,u){wt(u)&&(u=new a(u)),s(c).push(u),Reflect.defineProperty(c,u.name,{enumerable:!0,get(){return u.getValue(this)},set(d){u.setValue(this,d)}})},getAccessors:s,binding(c,u,d=this.isVolatileBinding(c)){return new l(c,u,d)},isVolatileBinding(c){return e.test(c.toString())}})});function ye(n,e){z.defineProperty(n,e)}const Is=ge.getById(Yt.contextEvent,()=>{let n=null;return{get(){return n},set(e){n=e}}}),Yn=Object.freeze({default:{index:0,length:0,get event(){return Yn.getEvent()},eventDetail(){return this.event.detail},eventTarget(){return this.event.target}},getEvent(){return Is.get()},setEvent(n){Is.set(n)}});class ri{constructor(e,t,r=!1){this.evaluate=e,this.policy=t,this.isVolatile=r}}class bh extends ri{createObserver(e){return z.binding(this.evaluate,e,this.isVolatile)}}function Io(n,e,t=z.isVolatileBinding(n)){return new bh(n,e,t)}class Sl extends ri{createObserver(){return this}bind(e){return this.evaluate(e.source,e.context)}}on(Sl);function El(n,e){return new Sl(n,e)}let Bs;function Al(n){return n.map(e=>e instanceof $e?Al(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}class $e{constructor(e){this.styles=e,this.targets=new WeakSet,this._strategy=null,this.behaviors=e.map(t=>t instanceof $e?t.behaviors:null).reduce((t,r)=>r===null?t:t===null?r:t.concat(r),null)}get strategy(){return this._strategy===null&&this.withStrategy(Bs),this._strategy}addStylesTo(e){this.strategy.addStylesTo(e),this.targets.add(e)}removeStylesFrom(e){this.strategy.removeStylesFrom(e),this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}withStrategy(e){return this._strategy=new e(Al(this.styles)),this}static setDefaultStrategy(e){Bs=e}static normalize(e){return e===void 0?void 0:Array.isArray(e)?new $e(e):e instanceof $e?e:new $e([e])}}$e.supportsAdoptedStyleSheets=Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype;const Ai=To(),Bo=Object.freeze({getForInstance:Ai.getForInstance,getByType:Ai.getByType,define(n){return Ai.register({type:n}),n}});function Ti(n,e,t){e.source.style.setProperty(n.targetAspect,t.bind(e))}class Zi{constructor(e,t){this.dataBinding=e,this.targetAspect=t}createCSS(e){return e(this),`var(${this.targetAspect})`}addedCallback(e){var t;const r=e.source;if(!r.$cssBindings){r.$cssBindings=new Map;const o=r.setAttribute;r.setAttribute=(s,a)=>{o.call(r,s,a),s==="style"&&r.$cssBindings.forEach((l,c)=>Ti(c,l.controller,l.observer))}}const i=(t=e[this.targetAspect])!==null&&t!==void 0?t:e[this.targetAspect]=this.dataBinding.createObserver(this,this);i.controller=e,e.source.$cssBindings.set(this,{controller:e,observer:i})}connectedCallback(e){Ti(this,e,e[this.targetAspect])}removedCallback(e){e.source.$cssBindings&&e.source.$cssBindings.delete(this)}handleChange(e,t){Ti(this,t.controller,t)}}Bo.define(Zi);const vh=`${Math.random().toString(36).substring(2,8)}`;let yh=0;const Os=()=>`--v${vh}${++yh}`;function Tl(n,e){const t=[];let r="";const i=[],o=s=>{i.push(s)};for(let s=0,a=n.length-1;s<a;++s){r+=n[s];let l=e[s];Tn(l)?l=new Zi(Io(l),Os()).createCSS(o):l instanceof ri?l=new Zi(l,Os()).createCSS(o):Bo.getForInstance(l)!==void 0&&(l=l.createCSS(o)),l instanceof $e||l instanceof CSSStyleSheet?(r.trim()!==""&&(t.push(r),r=""),t.push(l)):r+=l}return r+=n[n.length-1],r.trim()!==""&&t.push(r),{styles:t,behaviors:i}}const N=(n,...e)=>{const{styles:t,behaviors:r}=Tl(n,e),i=new $e(t);return r.length?i.withBehaviors(...r):i};class Il{constructor(e,t){this.behaviors=t,this.css="";const r=e.reduce((i,o)=>(wt(o)?this.css+=o:i.push(o),i),[]);r.length&&(this.styles=new $e(r))}createCSS(e){return this.behaviors.forEach(e),this.styles&&e(this),this.css}addedCallback(e){e.addStyles(this.styles)}removedCallback(e){e.removeStyles(this.styles)}}Bo.define(Il);N.partial=(n,...e)=>{const{styles:t,behaviors:r}=Tl(n,e);return new Il(t,r)};const Ms=/fe-b\$\$start\$\$(\d+)\$\$(.+)\$\$fe-b/,zs=/fe-b\$\$end\$\$(\d+)\$\$(.+)\$\$fe-b/,Ls=/fe-repeat\$\$start\$\$(\d+)\$\$fe-repeat/,Ps=/fe-repeat\$\$end\$\$(\d+)\$\$fe-repeat/,Fs=/^(?:.{0,1000})fe-eb\$\$start\$\$(.+?)\$\$fe-eb/,Ns=/fe-eb\$\$end\$\$(.{0,1000})\$\$fe-eb(?:.{0,1000})$/;function Ds(n){return n&&n.nodeType===Node.COMMENT_NODE}const nt=Object.freeze({attributeMarkerName:"data-fe-b",attributeBindingSeparator:" ",contentBindingStartMarker(n,e){return`fe-b$$start$$${n}$$${e}$$fe-b`},contentBindingEndMarker(n,e){return`fe-b$$end$$${n}$$${e}$$fe-b`},repeatStartMarker(n){return`fe-repeat$$start$$${n}$$fe-repeat`},repeatEndMarker(n){return`fe-repeat$$end$$${n}$$fe-repeat`},isContentBindingStartMarker(n){return Ms.test(n)},isContentBindingEndMarker(n){return zs.test(n)},isRepeatViewStartMarker(n){return Ls.test(n)},isRepeatViewEndMarker(n){return Ps.test(n)},isElementBoundaryStartMarker(n){return Ds(n)&&Fs.test(n.data.trim())},isElementBoundaryEndMarker(n){return Ds(n)&&Ns.test(n.data)},parseAttributeBinding(n){const e=n.getAttribute(this.attributeMarkerName);return e===null?e:e.split(this.attributeBindingSeparator).map(t=>parseInt(t))},parseContentBindingStartMarker(n){return Vs(Ms,n)},parseContentBindingEndMarker(n){return Vs(zs,n)},parseRepeatStartMarker(n){return _s(Ls,n)},parseRepeatEndMarker(n){return _s(Ps,n)},parseElementBoundaryStartMarker(n){return Rs(Fs,n.trim())},parseElementBoundaryEndMarker(n){return Rs(Ns,n)}});function _s(n,e){const t=n.exec(e);return t===null?t:parseInt(t[1])}function Rs(n,e){const t=n.exec(e);return t===null?t:t[1]}function Vs(n,e){const t=n.exec(e);return t===null?t:[parseInt(t[1]),t[2]]}const Nr=Symbol.for("fe-hydration");function Dr(n){return n[Nr]===Nr}const Oo=`fast-${Math.random().toString(36).substring(2,8)}`,Mr=`${Oo}{`,qn=`}${Oo}`,kh=qn.length;let wh=0;const Mo=()=>`${Oo}-${++wh}`,Bl=Object.freeze({interpolation:n=>`${Mr}${n}${qn}`,attribute:n=>`${Mo()}="${Mr}${n}${qn}"`,comment:n=>`<!--${Mr}${n}${qn}-->`}),ii=Object.freeze({parse(n,e){const t=n.split(Mr);if(t.length===1)return null;const r=[];for(let i=0,o=t.length;i<o;++i){const s=t[i],a=s.indexOf(qn);let l;if(a===-1)l=s;else{const c=s.substring(0,a);r.push(e[c]),l=s.substring(a+kh)}l!==""&&r.push(l)}return r}}),Ii=To(),rt=Object.freeze({getForInstance:Ii.getForInstance,getByType:Ii.getByType,define(n,e){return e=e||{},e.type=n,Ii.register(e),n},assignAspect(n,e){if(!e){n.aspectType=de.content;return}switch(n.sourceAspect=e,e[0]){case":":n.targetAspect=e.substring(1),n.aspectType=n.targetAspect==="classList"?de.tokenList:de.property;break;case"?":n.targetAspect=e.substring(1),n.aspectType=de.booleanAttribute;break;case"@":n.targetAspect=e.substring(1),n.aspectType=de.event;break;default:n.targetAspect=e,n.aspectType=de.attribute;break}}});class zo{constructor(e){this.options=e}createHTML(e){return Bl.attribute(e(this))}createBehavior(){return this}}on(zo);class Ol extends Error{constructor(e,t,r){super(e),this.factories=t,this.node=r}}function Lo(n){return n.nodeType===Node.COMMENT_NODE}function Ml(n){return n.nodeType===Node.TEXT_NODE}function zl(n,e){const t=document.createRange();return t.setStart(n,0),t.setEnd(e,Lo(e)||Ml(e)?e.data.length:e.childNodes.length),t}function xh(n){return n instanceof DocumentFragment&&"mode"in n}function $h(n,e,t){const r=zl(n,e),i=r.commonAncestorContainer,o=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT+NodeFilter.SHOW_COMMENT+NodeFilter.SHOW_TEXT,{acceptNode(c){return r.comparePoint(c,0)===0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),s={},a={};let l=o.currentNode=n;for(;l!==null;){switch(l.nodeType){case Node.ELEMENT_NODE:{Ch(l,t,s);break}case Node.COMMENT_NODE:{Sh(l,o,t,s,a);break}}l=o.nextNode()}return r.detach(),{targets:s,boundaries:a}}function Ch(n,e,t){const r=nt.parseAttributeBinding(n);if(r!==null){for(const i of r){if(!e[i])throw new Ol(`HydrationView was unable to successfully target factory on ${n.nodeName} inside ${n.getRootNode().host.nodeName}. This likely indicates a template mismatch between SSR rendering and hydration.`,e,n);_r(e[i],n,t)}n.removeAttribute(nt.attributeMarkerName)}}function Sh(n,e,t,r,i){if(nt.isElementBoundaryStartMarker(n)){Eh(n,e);return}if(nt.isContentBindingStartMarker(n.data)){const o=nt.parseContentBindingStartMarker(n.data);if(o===null)return;const[s,a]=o,l=t[s],c=[];let u=e.nextSibling();n.data="";const d=u;for(;u!==null;){if(Lo(u)){const p=nt.parseContentBindingEndMarker(u.data);if(p&&p[1]===a)break}c.push(u),u=e.nextSibling()}if(u===null){const p=n.getRootNode();throw new Error(`Error hydrating Comment node inside "${xh(p)?p.host.nodeName:p.nodeName}".`)}if(u.data="",c.length===1&&Ml(c[0]))_r(l,c[0],r);else{u!==d&&u.previousSibling!==null&&(i[l.targetNodeId]={first:d,last:u.previousSibling});const p=u.parentNode.insertBefore(document.createTextNode(""),u);_r(l,p,r)}}}function Eh(n,e){const t=nt.parseElementBoundaryStartMarker(n.data);let r=e.nextSibling();for(;r!==null;){if(Lo(r)){const i=nt.parseElementBoundaryEndMarker(r.data);if(i&&i===t)break}r=e.nextSibling()}}function _r(n,e,t){if(n.targetNodeId===void 0)throw new Error("Factory could not be target to the node");t[n.targetNodeId]=e}var Ll;function Yi(n,e){const t=n.parentNode;let r=n,i;for(;r!==e;){if(i=r.nextSibling,!i)throw new Error(`Unmatched first/last child inside "${e.getRootNode().host.nodeName}".`);t.removeChild(r),r=i}t.removeChild(e)}class Pl{constructor(){this.index=0,this.length=0}get event(){return Yn.getEvent()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}eventDetail(){return this.event.detail}eventTarget(){return this.event.target}}class oi extends Pl{constructor(e,t,r){super(),this.fragment=e,this.factories=t,this.targets=r,this.behaviors=null,this.unbindables=[],this.source=null,this.isBound=!1,this.sourceLifetime=ni.unknown,this.context=this,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const r=e.parentNode;let i=this.firstChild,o;for(;i!==t;)o=i.nextSibling,r.insertBefore(i,e),i=o;r.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let r=this.firstChild,i;for(;r!==t;)i=r.nextSibling,e.appendChild(r),r=i;e.appendChild(t)}dispose(){Yi(this.firstChild,this.lastChild),this.unbind()}onUnbind(e){this.unbindables.push(e)}bind(e,t=this){if(this.source===e)return;let r=this.behaviors;if(r===null){this.source=e,this.context=t,this.behaviors=r=new Array(this.factories.length);const i=this.factories;for(let o=0,s=i.length;o<s;++o){const a=i[o].createBehavior();a.bind(this),r[o]=a}}else{this.source!==null&&this.evaluateUnbindables(),this.isBound=!1,this.source=e,this.context=t;for(let i=0,o=r.length;i<o;++i)r[i].bind(this)}this.isBound=!0}unbind(){!this.isBound||this.source===null||(this.evaluateUnbindables(),this.source=null,this.context=this,this.isBound=!1)}evaluateUnbindables(){const e=this.unbindables;for(let t=0,r=e.length;t<r;++t)e[t].unbind(this);e.length=0}static disposeContiguousBatch(e){if(e.length!==0){Yi(e[0].firstChild,e[e.length-1].lastChild);for(let t=0,r=e.length;t<r;++t)e[t].unbind()}}}on(oi);z.defineProperty(oi.prototype,"index");z.defineProperty(oi.prototype,"length");const pn={unhydrated:"unhydrated",hydrating:"hydrating",hydrated:"hydrated"};class Ah extends Error{constructor(e,t,r,i){super(e),this.factory=t,this.fragment=r,this.templateString=i}}class Th extends Pl{constructor(e,t,r,i){super(),this.firstChild=e,this.lastChild=t,this.sourceTemplate=r,this.hostBindingTarget=i,this[Ll]=Nr,this.context=this,this.source=null,this.isBound=!1,this.sourceLifetime=ni.unknown,this.unbindables=[],this.fragment=null,this.behaviors=null,this._hydrationStage=pn.unhydrated,this._bindingViewBoundaries={},this._targets={},this.factories=r.compile().factories}get hydrationStage(){return this._hydrationStage}get targets(){return this._targets}get bindingViewBoundaries(){return this._bindingViewBoundaries}insertBefore(e){if(this.fragment!==null)if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const r=e.parentNode;let i=this.firstChild,o;for(;i!==t;)o=i.nextSibling,r.insertBefore(i,e),i=o;r.insertBefore(t,e)}}appendTo(e){this.fragment!==null&&e.appendChild(this.fragment)}remove(){const e=this.fragment||(this.fragment=document.createDocumentFragment()),t=this.lastChild;let r=this.firstChild,i;for(;r!==t;){if(i=r.nextSibling,!i)throw new Error(`Unmatched first/last child inside "${t.getRootNode().host.nodeName}".`);e.appendChild(r),r=i}e.appendChild(t)}bind(e,t=this){var r,i;if(this.hydrationStage!==pn.hydrated&&(this._hydrationStage=pn.hydrating),this.source===e)return;let o=this.behaviors;if(o===null){this.source=e,this.context=t;try{const{targets:a,boundaries:l}=$h(this.firstChild,this.lastChild,this.factories);this._targets=a,this._bindingViewBoundaries=l}catch(a){if(a instanceof Ol){let l=this.sourceTemplate.html;typeof l!="string"&&(l=l.innerHTML),a.templateString=l}throw a}this.behaviors=o=new Array(this.factories.length);const s=this.factories;for(let a=0,l=s.length;a<l;++a){const c=s[a];if(c.targetNodeId==="h"&&this.hostBindingTarget&&_r(c,this.hostBindingTarget,this._targets),c.targetNodeId in this.targets){const u=c.createBehavior();u.bind(this),o[a]=u}else{let u=this.sourceTemplate.html;throw typeof u!="string"&&(u=u.innerHTML),new Ah(`HydrationView was unable to successfully target bindings inside "${(i=((r=this.firstChild)===null||r===void 0?void 0:r.getRootNode()).host)===null||i===void 0?void 0:i.nodeName}".`,c,zl(this.firstChild,this.lastChild).cloneContents(),u)}}}else{this.source!==null&&this.evaluateUnbindables(),this.isBound=!1,this.source=e,this.context=t;for(let s=0,a=o.length;s<a;++s)o[s].bind(this)}this.isBound=!0,this._hydrationStage=pn.hydrated}unbind(){!this.isBound||this.source===null||(this.evaluateUnbindables(),this.source=null,this.context=this,this.isBound=!1)}dispose(){Yi(this.firstChild,this.lastChild),this.unbind()}onUnbind(e){this.unbindables.push(e)}evaluateUnbindables(){const e=this.unbindables;for(let t=0,r=e.length;t<r;++t)e[t].unbind(this);e.length=0}}Ll=Nr;on(Th);function Ih(n){return n.create!==void 0}function Bh(n,e,t,r){if(t==null&&(t=""),Ih(t)){n.textContent="";let i=n.$fastView;if(i===void 0)if(Dr(r)&&Dr(t)&&r.bindingViewBoundaries[this.targetNodeId]!==void 0&&r.hydrationStage!==pn.hydrated){const o=r.bindingViewBoundaries[this.targetNodeId];i=t.hydrate(o.first,o.last)}else i=t.create();else n.$fastTemplate!==t&&(i.isComposed&&(i.remove(),i.unbind()),i=t.create());i.isComposed?i.needsBindOnly&&(i.needsBindOnly=!1,i.bind(r.source,r.context)):(i.isComposed=!0,i.bind(r.source,r.context),i.insertBefore(n),n.$fastView=i,n.$fastTemplate=t)}else{const i=n.$fastView;i!==void 0&&i.isComposed&&(i.isComposed=!1,i.remove(),i.needsBindOnly?i.needsBindOnly=!1:i.unbind()),n.textContent=t}}function Oh(n,e,t){var r;const i=`${this.id}-t`,o=(r=n[i])!==null&&r!==void 0?r:n[i]={v:0,cv:Object.create(null)},s=o.cv;let a=o.v;const l=n[e];if(t!=null&&t.length){const c=t.split(/\s+/);for(let u=0,d=c.length;u<d;++u){const p=c[u];p!==""&&(s[p]=a,l.add(p))}}if(o.v=a+1,a!==0){a-=1;for(const c in s)s[c]===a&&l.remove(c)}}const Mh={[de.attribute]:kn.setAttribute,[de.booleanAttribute]:kn.setBooleanAttribute,[de.property]:(n,e,t)=>n[e]=t,[de.content]:Bh,[de.tokenList]:Oh,[de.event]:()=>{}};class mn{constructor(e){this.dataBinding=e,this.updateTarget=null,this.aspectType=de.content}createHTML(e){return Bl.interpolation(e(this))}createBehavior(){var e;if(this.updateTarget===null){const t=Mh[this.aspectType],r=(e=this.dataBinding.policy)!==null&&e!==void 0?e:this.policy;if(!t)throw ge.error(1205);this.data=`${this.id}-d`,this.updateTarget=r.protect(this.targetTagName,this.aspectType,this.targetAspect,t)}return this}bind(e){var t;const r=e.targets[this.targetNodeId],i=Dr(e)&&e.hydrationStage&&e.hydrationStage!==pn.hydrated;switch(this.aspectType){case de.event:r[this.data]=e,r.addEventListener(this.targetAspect,this,this.dataBinding.options);break;case de.content:e.onUnbind(this);default:const o=(t=r[this.data])!==null&&t!==void 0?t:r[this.data]=this.dataBinding.createObserver(this,this);if(o.target=r,o.controller=e,i&&(this.aspectType===de.attribute||this.aspectType===de.booleanAttribute)){o.bind(e);break}this.updateTarget(r,this.targetAspect,o.bind(e),e);break}}unbind(e){const r=e.targets[this.targetNodeId].$fastView;r!==void 0&&r.isComposed&&(r.unbind(),r.needsBindOnly=!0)}handleEvent(e){const t=e.currentTarget[this.data];if(t.isBound){Yn.setEvent(e);const r=this.dataBinding.evaluate(t.source,t.context);Yn.setEvent(null),r!==!0&&e.preventDefault()}}handleChange(e,t){const r=t.target,i=t.controller;this.updateTarget(r,this.targetAspect,t.bind(i),i)}}rt.define(mn,{aspected:!0});const Fl=(n,e)=>`${n}.${e}`,Hs={},Je={index:0,node:null};function js(n){n.startsWith("fast-")||ge.warn(1204,{name:n})}const zh=new Proxy(document.createElement("div"),{get(n,e){js(e);const t=Reflect.get(n,e);return Tn(t)?t.bind(n):t},set(n,e,t){return js(e),Reflect.set(n,e,t)}});class Lh{constructor(e,t,r){this.fragment=e,this.directives=t,this.policy=r,this.proto=null,this.nodeIds=new Set,this.descriptors={},this.factories=[]}addFactory(e,t,r,i,o){var s,a;this.nodeIds.has(r)||(this.nodeIds.add(r),this.addTargetDescriptor(t,r,i)),e.id=(s=e.id)!==null&&s!==void 0?s:Mo(),e.targetNodeId=r,e.targetTagName=o,e.policy=(a=e.policy)!==null&&a!==void 0?a:this.policy,this.factories.push(e)}freeze(){return this.proto=Object.create(null,this.descriptors),this}addTargetDescriptor(e,t,r){const i=this.descriptors;if(t==="r"||t==="h"||i[t])return;if(!i[e]){const s=e.lastIndexOf("."),a=e.substring(0,s),l=parseInt(e.substring(s+1));this.addTargetDescriptor(a,e,l)}let o=Hs[t];if(!o){const s=`_${t}`;Hs[t]=o={get(){var a;return(a=this[s])!==null&&a!==void 0?a:this[s]=this[e].childNodes[r]}}}i[t]=o}createView(e){const t=this.fragment.cloneNode(!0),r=Object.create(this.proto);r.r=t,r.h=e??zh;for(const i of this.nodeIds)r[i];return new oi(t,this.factories,r)}}function Nl(n,e,t,r,i,o=!1){const s=t.attributes,a=n.directives;for(let l=0,c=s.length;l<c;++l){const u=s[l],d=u.value,p=ii.parse(d,a);let h=null;p===null?o&&(h=new mn(El(()=>d,n.policy)),rt.assignAspect(h,u.name)):h=Po.aggregate(p,n.policy),h!==null&&(t.removeAttributeNode(u),l--,c--,n.addFactory(h,e,r,i,t.tagName))}}function Ph(n,e,t,r,i){const o=ii.parse(e.textContent,n.directives);if(o===null)return Je.node=e.nextSibling,Je.index=i+1,Je;let s,a=s=e;for(let l=0,c=o.length;l<c;++l){const u=o[l];l!==0&&(i++,r=Fl(t,i),s=a.parentNode.insertBefore(document.createTextNode(""),a.nextSibling)),wt(u)?s.textContent=u:(s.textContent=" ",rt.assignAspect(u),n.addFactory(u,t,r,i,null)),a=s}return Je.index=i+1,Je.node=a.nextSibling,Je}function Dl(n,e,t){let r=0,i=e.firstChild;for(;i;){const o=Fh(n,t,i,r);i=o.node,r=o.index}}function Fh(n,e,t,r){const i=Fl(e,r);switch(t.nodeType){case 1:Nl(n,e,t,i,r),Dl(n,t,i);break;case 3:return Ph(n,t,e,i,r);case 8:const o=ii.parse(t.data,n.directives);o!==null&&n.addFactory(Po.aggregate(o),e,i,r,null);break}return Je.index=r+1,Je.node=t.nextSibling,Je}function Nh(n,e){return n&&n.nodeType==8&&ii.parse(n.data,e)!==null}const qs="TEMPLATE",Po={compile(n,e,t=kn.policy){let r;if(wt(n)){r=document.createElement(qs),r.innerHTML=t.createHTML(n);const s=r.content.firstElementChild;s!==null&&s.tagName===qs&&(r=s)}else r=n;!r.content.firstChild&&!r.content.lastChild&&r.content.appendChild(document.createComment(""));const i=document.adoptNode(r.content),o=new Lh(i,e,t);return Nl(o,"",r,"h",0,!0),(Nh(i.firstChild,e)||i.childNodes.length===1&&Object.keys(e).length>0)&&i.insertBefore(document.createComment(""),i.firstChild),Dl(o,i,"r"),Je.node=null,o.freeze()},setDefaultStrategy(n){this.compile=n},aggregate(n,e=kn.policy){if(n.length===1)return n[0];let t,r=!1,i;const o=n.length,s=n.map(c=>wt(c)?()=>c:(t=c.sourceAspect||t,r=r||c.dataBinding.isVolatile,i=i||c.dataBinding.policy,c.dataBinding.evaluate)),a=(c,u)=>{let d="";for(let p=0;p<o;++p)d+=s[p](c,u);return d},l=new mn(Io(a,i??e,r));return rt.assignAspect(l,t),l}},Dh=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,_h=Object.create(null);class tn{constructor(e,t=_h){this.html=e,this.factories=t}createHTML(e){const t=this.factories;for(const r in t)e(t[r]);return this.html}}tn.empty=new tn("");rt.define(tn);function Rh(n,e,t,r=rt.getForInstance(n)){if(r.aspected){const i=Dh.exec(e);i!==null&&rt.assignAspect(n,i[2])}return n.createHTML(t)}class si{constructor(e,t={},r){this.policy=r,this.result=null,this.html=e,this.factories=t}compile(){return this.result===null&&(this.result=Po.compile(this.html,this.factories,this.policy)),this.result}create(e){return this.compile().createView(e)}inline(){return new tn(wt(this.html)?this.html:this.html.innerHTML,this.factories)}withPolicy(e){if(this.result)throw ge.error(1208);if(this.policy)throw ge.error(1207);return this.policy=e,this}render(e,t,r){const i=this.create(r);return i.bind(e),i.appendTo(t),i}static create(e,t,r){let i="";const o=Object.create(null),s=a=>{var l;const c=(l=a.id)!==null&&l!==void 0?l:a.id=Mo();return o[c]=a,c};for(let a=0,l=e.length-1;a<l;++a){const c=e[a];let u=t[a],d;if(i+=c,Tn(u))u=new mn(Io(u));else if(u instanceof ri)u=new mn(u);else if(!(d=rt.getForInstance(u))){const p=u;u=new mn(El(()=>p))}i+=Rh(u,c,s,d)}return new si(i+e[e.length-1],o,r)}}on(si);const V=(n,...e)=>{if(Array.isArray(n)&&Array.isArray(n.raw))return si.create(n,e);throw ge.error(1206)};V.partial=n=>new tn(n);class _l extends zo{bind(e){e.source[this.options]=e.targets[this.targetNodeId]}}rt.define(_l);const it=n=>new _l(n),Vh=n=>n.nodeType===1,Ji=n=>Vh;class Hh extends zo{get id(){return this._id}set id(e){this._id=e,this._controllerProperty=`${e}-c`}bind(e){const t=e.targets[this.targetNodeId];t[this._controllerProperty]=e,this.updateTarget(e.source,this.computeNodes(t)),this.observe(t),e.onUnbind(this)}unbind(e){const t=e.targets[this.targetNodeId];this.updateTarget(e.source,fh),this.disconnect(t),t[this._controllerProperty]=null}getSource(e){return e[this._controllerProperty].source}updateTarget(e,t){e[this.options.property]=t}computeNodes(e){let t=this.getNodes(e);return"filter"in this.options&&(t=t.filter(this.options.filter)),t}}const Us="slotchange";class Rl extends Hh{observe(e){e.addEventListener(Us,this)}disconnect(e){e.removeEventListener(Us,this)}getNodes(e){return e.assignedNodes(this.options)}handleEvent(e){const t=e.currentTarget;this.updateTarget(this.getSource(t),this.computeNodes(t))}}rt.define(Rl);function xt(n){return wt(n)&&(n={property:n}),new Rl(n)}const Ks="boolean",Ws="reflect",Rr=Object.freeze({locate:$l()}),jh={toView(n){return n?"true":"false"},fromView(n){return!(n==null||n==="false"||n===!1||n===0)}};function Gs(n){if(n==null)return null;const e=n*1;return isNaN(e)?null:e}const _t={toView(n){const e=Gs(n);return e&&e.toString()},fromView:Gs};class Vr{constructor(e,t,r=t.toLowerCase(),i=Ws,o){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=r,this.mode=i,this.converter=o,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,i===Ks&&o===void 0&&(this.converter=jh)}setValue(e,t){const r=e[this.fieldName],i=this.converter;i!==void 0&&(t=i.fromView(t)),r!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](r,t),e.$fastController.notify(this.name))}getValue(e){return z.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,r=this.guards;r.has(e)||t==="fromView"||Jt.enqueue(()=>{r.add(e);const i=e[this.fieldName];switch(t){case Ws:const o=this.converter;kn.setAttribute(e,this.attribute,o!==void 0?o.toView(i):i);break;case Ks:kn.setBooleanAttribute(e,this.attribute,i);break}r.delete(e)})}static collect(e,...t){const r=[];t.push(Rr.locate(e));for(let i=0,o=t.length;i<o;++i){const s=t[i];if(s!==void 0)for(let a=0,l=s.length;a<l;++a){const c=s[a];wt(c)?r.push(new Vr(e,c)):r.push(new Vr(e,c.property,c.attribute,c.mode,c.converter))}}return r}}function b(n,e){let t;function r(i,o){arguments.length>1&&(t.property=o),Rr.locate(i.constructor).push(t)}if(arguments.length>1){t={},r(n,e);return}return t=n===void 0?{}:n,r}const Qs={mode:"open"},Xs={},Zs=new Set,Hr=ge.getById(Yt.elementRegistry,()=>To());class Ke{constructor(e,t=e.definition){var r;this.platformDefined=!1,wt(t)&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template,this.registry=(r=t.registry)!==null&&r!==void 0?r:customElements;const i=e.prototype,o=Vr.collect(e,t.attributes),s=new Array(o.length),a={},l={};for(let c=0,u=o.length;c<u;++c){const d=o[c];s[c]=d.attribute,a[d.name]=d,l[d.attribute]=d,z.defineProperty(i,d)}Reflect.defineProperty(e,"observedAttributes",{value:s,enumerable:!0}),this.attributes=o,this.propertyLookup=a,this.attributeLookup=l,this.shadowOptions=t.shadowOptions===void 0?Qs:t.shadowOptions===null?void 0:Object.assign(Object.assign({},Qs),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?Xs:Object.assign(Object.assign({},Xs),t.elementOptions),this.styles=$e.normalize(t.styles),Hr.register(this)}get isDefined(){return this.platformDefined}define(e=this.registry){const t=this.type;return e.get(this.name)||(this.platformDefined=!0,e.define(this.name,t,this.elementOptions)),this}static compose(e,t){return Zs.has(e)||Hr.getByType(e)?new Ke(class extends e{},t):new Ke(e,t)}static registerBaseType(e){Zs.add(e)}}Ke.getByType=Hr.getByType;Ke.getForInstance=Hr.getForInstance;class qh extends MutationObserver{constructor(e){function t(r){this.callback.call(null,r.filter(i=>this.observedNodes.has(i.target)))}super(t),this.callback=e,this.observedNodes=new Set}observe(e,t){this.observedNodes.add(e),super.observe(e,t)}unobserve(e){this.observedNodes.delete(e),this.observedNodes.size<1&&this.disconnect()}}const Uh={bubbles:!0,composed:!0,cancelable:!0},zr="isConnected",Vl=new WeakMap;function Un(n){var e,t;return(t=(e=n.shadowRoot)!==null&&e!==void 0?e:Vl.get(n))!==null&&t!==void 0?t:null}let Ys;class wn extends Cl{constructor(e,t){super(e),this.boundObservables=null,this.needsInitialization=!0,this.hasExistingShadowRoot=!1,this._template=null,this.stage=3,this.guardBehaviorConnection=!1,this.behaviors=null,this.behaviorsConnected=!1,this._mainStyles=null,this.$fastController=this,this.view=null,this.source=e,this.definition=t;const r=t.shadowOptions;if(r!==void 0){let o=e.shadowRoot;o?this.hasExistingShadowRoot=!0:(o=e.attachShadow(r),r.mode==="closed"&&Vl.set(e,o))}const i=z.getAccessors(e);if(i.length>0){const o=this.boundObservables=Object.create(null);for(let s=0,a=i.length;s<a;++s){const l=i[s].name,c=e[l];c!==void 0&&(delete e[l],o[l]=c)}}}get isConnected(){return z.track(this,zr),this.stage===1}get context(){var e,t;return(t=(e=this.view)===null||e===void 0?void 0:e.context)!==null&&t!==void 0?t:Yn.default}get isBound(){var e,t;return(t=(e=this.view)===null||e===void 0?void 0:e.isBound)!==null&&t!==void 0?t:!1}get sourceLifetime(){var e;return(e=this.view)===null||e===void 0?void 0:e.sourceLifetime}get template(){var e;if(this._template===null){const t=this.definition;this.source.resolveTemplate?this._template=this.source.resolveTemplate():t.template&&(this._template=(e=t.template)!==null&&e!==void 0?e:null)}return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get mainStyles(){var e;if(this._mainStyles===null){const t=this.definition;this.source.resolveStyles?this._mainStyles=this.source.resolveStyles():t.styles&&(this._mainStyles=(e=t.styles)!==null&&e!==void 0?e:null)}return this._mainStyles}set mainStyles(e){this._mainStyles!==e&&(this._mainStyles!==null&&this.removeStyles(this._mainStyles),this._mainStyles=e,this.needsInitialization||this.addStyles(e))}onUnbind(e){var t;(t=this.view)===null||t===void 0||t.onUnbind(e)}addBehavior(e){var t,r;const i=(t=this.behaviors)!==null&&t!==void 0?t:this.behaviors=new Map,o=(r=i.get(e))!==null&&r!==void 0?r:0;o===0?(i.set(e,1),e.addedCallback&&e.addedCallback(this),e.connectedCallback&&!this.guardBehaviorConnection&&(this.stage===1||this.stage===0)&&e.connectedCallback(this)):i.set(e,o+1)}removeBehavior(e,t=!1){const r=this.behaviors;if(r===null)return;const i=r.get(e);i!==void 0&&(i===1||t?(r.delete(e),e.disconnectedCallback&&this.stage!==3&&e.disconnectedCallback(this),e.removedCallback&&e.removedCallback(this)):r.set(e,i-1))}addStyles(e){var t;if(!e)return;const r=this.source;if(e instanceof HTMLElement)((t=Un(r))!==null&&t!==void 0?t:this.source).append(e);else if(!e.isAttachedTo(r)){const i=e.behaviors;if(e.addStylesTo(r),i!==null)for(let o=0,s=i.length;o<s;++o)this.addBehavior(i[o])}}removeStyles(e){var t;if(!e)return;const r=this.source;if(e instanceof HTMLElement)((t=Un(r))!==null&&t!==void 0?t:r).removeChild(e);else if(e.isAttachedTo(r)){const i=e.behaviors;if(e.removeStylesFrom(r),i!==null)for(let o=0,s=i.length;o<s;++o)this.removeBehavior(i[o])}}connect(){this.stage===3&&(this.stage=0,this.bindObservables(),this.connectBehaviors(),this.needsInitialization?(this.renderTemplate(this.template),this.addStyles(this.mainStyles),this.needsInitialization=!1):this.view!==null&&this.view.bind(this.source),this.stage=1,z.notify(this,zr))}bindObservables(){if(this.boundObservables!==null){const e=this.source,t=this.boundObservables,r=Object.keys(t);for(let i=0,o=r.length;i<o;++i){const s=r[i];e[s]=t[s]}this.boundObservables=null}}connectBehaviors(){if(this.behaviorsConnected===!1){const e=this.behaviors;if(e!==null){this.guardBehaviorConnection=!0;for(const t of e.keys())t.connectedCallback&&t.connectedCallback(this);this.guardBehaviorConnection=!1}this.behaviorsConnected=!0}}disconnectBehaviors(){if(this.behaviorsConnected===!0){const e=this.behaviors;if(e!==null)for(const t of e.keys())t.disconnectedCallback&&t.disconnectedCallback(this);this.behaviorsConnected=!1}}disconnect(){this.stage===1&&(this.stage=2,z.notify(this,zr),this.view!==null&&this.view.unbind(),this.disconnectBehaviors(),this.stage=3)}onAttributeChangedCallback(e,t,r){const i=this.definition.attributeLookup[e];i!==void 0&&i.onAttributeChangedCallback(this.source,r)}emit(e,t,r){return this.stage===1?this.source.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Uh),r))):!1}renderTemplate(e){var t;const r=this.source,i=(t=Un(r))!==null&&t!==void 0?t:r;if(this.view!==null)this.view.dispose(),this.view=null;else if(!this.needsInitialization||this.hasExistingShadowRoot){this.hasExistingShadowRoot=!1;for(let o=i.firstChild;o!==null;o=i.firstChild)i.removeChild(o)}e&&(this.view=e.render(r,i,r),this.view.sourceLifetime=ni.coupled)}static forCustomElement(e){const t=e.$fastController;if(t!==void 0)return t;const r=Ke.getForInstance(e);if(r===void 0)throw ge.error(1401);return e.$fastController=new Ys(e,r)}static setStrategy(e){Ys=e}}on(wn);wn.setStrategy(wn);function jr(n){var e;return"adoptedStyleSheets"in n?n:(e=Un(n))!==null&&e!==void 0?e:n.getRootNode()}class ai{constructor(e){const t=ai.styleSheetCache;this.sheets=e.map(r=>{if(r instanceof CSSStyleSheet)return r;let i=t.get(r);return i===void 0&&(i=new CSSStyleSheet,i.replaceSync(r),t.set(r,i)),i})}addStylesTo(e){Hl(jr(e),this.sheets)}removeStylesFrom(e){jl(jr(e),this.sheets)}}ai.styleSheetCache=new Map;let Kh=0;const Wh=()=>`fast-${++Kh}`;function Js(n){return n===document?document.body:n}class Gh{constructor(e){this.styles=e,this.styleClass=Wh()}addStylesTo(e){e=Js(jr(e));const t=this.styles,r=this.styleClass;for(let i=0;i<t.length;i++){const o=document.createElement("style");o.innerHTML=t[i],o.className=r,e.append(o)}}removeStylesFrom(e){e=Js(jr(e));const t=e.querySelectorAll(`.${this.styleClass}`);for(let r=0,i=t.length;r<i;++r)e.removeChild(t[r])}}let Hl=(n,e)=>{n.adoptedStyleSheets=[...n.adoptedStyleSheets,...e]},jl=(n,e)=>{n.adoptedStyleSheets=n.adoptedStyleSheets.filter(t=>e.indexOf(t)===-1)};if($e.supportsAdoptedStyleSheets){try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Hl=(n,e)=>{n.adoptedStyleSheets.push(...e)},jl=(n,e)=>{for(const t of e){const r=n.adoptedStyleSheets.indexOf(t);r!==-1&&n.adoptedStyleSheets.splice(r,1)}}}catch{}$e.setDefaultStrategy(ai)}else $e.setDefaultStrategy(Gh);const ea="defer-hydration",ta="needs-hydration";class Xt extends wn{static hydrationObserverHandler(e){for(const t of e)Xt.hydrationObserver.unobserve(t.target),t.target.$fastController.connect()}connect(){var e,t;if(this.needsHydration===void 0&&(this.needsHydration=this.source.getAttribute(ta)!==null),this.source.hasAttribute(ea)){Xt.hydrationObserver.observe(this.source,{attributeFilter:[ea]});return}if(!this.needsHydration){super.connect();return}if(this.stage!==3)return;this.stage=0,this.bindObservables(),this.connectBehaviors();const r=this.source,i=(e=Un(r))!==null&&e!==void 0?e:r;if(this.template)if(Dr(this.template)){let o=i.firstChild,s=i.lastChild;r.shadowRoot===null&&(nt.isElementBoundaryStartMarker(o)&&(o.data="",o=o.nextSibling),nt.isElementBoundaryEndMarker(s)&&(s.data="",s=s.previousSibling)),this.view=this.template.hydrate(o,s,r),(t=this.view)===null||t===void 0||t.bind(this.source)}else this.renderTemplate(this.template);this.addStyles(this.mainStyles),this.stage=1,this.source.removeAttribute(ta),this.needsInitialization=this.needsHydration=!1,z.notify(this,zr)}disconnect(){super.disconnect(),Xt.hydrationObserver.unobserve(this.source)}static install(){wn.setStrategy(Xt)}}Xt.hydrationObserver=new qh(Xt.hydrationObserverHandler);function ql(n){const e=class extends n{constructor(){super(),wn.forCustomElement(this)}$emit(t,r,i){return this.$fastController.emit(t,r,i)}connectedCallback(){this.$fastController.connect()}disconnectedCallback(){this.$fastController.disconnect()}attributeChangedCallback(t,r,i){this.$fastController.onAttributeChangedCallback(t,r,i)}};return Ke.registerBaseType(e),e}function Qh(n,e){return Tn(n)?Ke.compose(n,e):Ke.compose(this,n)}function Xh(n,e){return Tn(n)?Ke.compose(n,e).define().type:Ke.compose(this,n).define().type}function Zh(n){return ql(n)}const pe=Object.assign(ql(HTMLElement),{from:Zh,define:Xh,compose:Qh});function na(...n){return n.every(e=>e instanceof HTMLElement)}const Yh="ArrowDown",Jh="ArrowLeft",ep="ArrowRight",tp="ArrowUp",np="End",li="Enter",rp="Escape",ip="Home",Fo=" ",op="Tab";let sp=0;function ap(n=""){return`${n}${sp++}`}function ot(n){return n?typeof n=="string"?new tn(n):"inline"in n?n.inline():n:tn.empty}const eo=n=>{var e;return n.nodeType!==Node.TEXT_NODE||!!(!((e=n.nodeValue)===null||e===void 0)&&e.trim().length)},lp=":host([hidden]){display:none}";function ke(n){return`${lp}:host{display:${n}}`}class cp{constructor(e){this.listenerCache=new WeakMap,this.query=e}connectedCallback(e){const{query:t}=this;let r=this.listenerCache.get(e);r||(r=this.constructListener(e),this.listenerCache.set(e,r)),r.bind(t)(),t.addEventListener("change",r)}disconnectedCallback(e){const t=this.listenerCache.get(e);t&&this.query.removeEventListener("change",t)}}class or extends cp{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new or(e,t)}constructListener(e){let t=!1;const r=this.styles;return function(){const{matches:o}=this;o&&!t?(e.addStyles(r),t=o):!o&&t&&(e.removeStyles(r),t=o)}}removedCallback(e){e.removeStyles(this.styles)}}const Ct=or.with(window.matchMedia("(forced-colors)"));or.with(window.matchMedia("(prefers-color-scheme: dark)"));or.with(window.matchMedia("(prefers-color-scheme: light)"));class In{}function sr(n){return V` <slot name="end" ${it("end")}>${ot(n.end)}</slot> `.inline()}function Bn(n){return V` <slot name="start" ${it("start")}>${ot(n.start)}</slot> `.inline()}function On(n,...e){const t=Rr.locate(n);e.forEach(r=>{Object.getOwnPropertyNames(r.prototype).forEach(o=>{o!=="constructor"&&Object.defineProperty(n.prototype,o,Object.getOwnPropertyDescriptor(r.prototype,o))}),Rr.locate(r).forEach(o=>t.push(o))})}const Ul=CSS.supports("selector(:state(g))"),ra=new Map;function v(n){var e;return(e=ra.get(n))!==null&&e!==void 0?e:ra.set(n,Ul?`:state(${n})`:`[state--${n}]`).get(n)}function J(n,e,t){if(e){if(!Ul){n.shadowRoot.host.toggleAttribute(`state--${e}`,t);return}if(t??!n.states.has(e)){n.states.add(e);return}n.states.delete(e)}}const Bi=new WeakMap;function No(n,e){if(!n||!e)return!1;if(Bi.has(n))return Bi.get(n).has(e);const t=new Set(Object.values(n));return Bi.set(n,t),t.has(e)}function j(n,e="",t="",r,i=""){J(n,`${i}${e}`,!1),(!r||No(r,t))&&J(n,`${i}${t}`,!0)}const up={small:"small",medium:"medium",large:"large",extraLarge:"extra-large"},dp={start:"start",end:"end"};class bt extends pe{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.headinglevel=2,this.expanded=!1,this.disabled=!1,this.id=ap("accordion-")}expandedChanged(e,t){J(this.elementInternals,"expanded",t)}disabledChanged(e,t){J(this.elementInternals,"disabled",t)}}m([b({attribute:"heading-level",mode:"fromView",converter:_t})],bt.prototype,"headinglevel",void 0);m([b({mode:"boolean"})],bt.prototype,"expanded",void 0);m([b({mode:"boolean"})],bt.prototype,"disabled",void 0);m([b],bt.prototype,"id",void 0);class ar extends bt{constructor(){super(...arguments),this.block=!1}sizeChanged(e,t){j(this.elementInternals,e,t,up)}markerPositionChanged(e,t){j(this.elementInternals,e,t,dp,"align-")}blockChanged(e,t){J(this.elementInternals,"block",t)}}m([b],ar.prototype,"size",void 0);m([b({attribute:"marker-position"})],ar.prototype,"markerPosition",void 0);m([b({mode:"boolean"})],ar.prototype,"block",void 0);On(ar,In);const jt=v("align-end");v("align-start");const hp=v("anchor"),ia=v("auto-resize");v("bad-input");const pp=v("beige"),qr=v("block"),fp=v("blue"),gp=v("bold");v("bordered");const mp=v("brand"),bp=v("brass"),vp=v("brown"),yp=v("center"),K=v("checked"),Ur=v("circular"),kp=v("cornflower"),wp=v("cranberry");v("custom-error");const ci=v("danger"),xp=v("dark-green"),$p=v("dark-red"),Ot=v("disabled"),oa=v("display-shadow");v("dot");const Cp=v("end"),Sp=v("error"),qt=v("expanded"),Kr=v("extra-large"),Wr=v("extra-small"),fn=v("filled-darker"),gn=v("filled-lighter");v("fit-center");v("fit-contain");v("fit-cover");v("fit-none");v("focus-visible");const Ep=v("forest"),mt=v("ghost"),Ap=v("gold"),Tp=v("grape");v("has-message");const Ip=v("huge"),_n=v("icon"),ui=v("important"),Ut=v("indeterminate"),di=v("informative");v("inline");v("inset");const sa=v("inverted"),Bp=v("italic"),Op=v("justify"),ve=v("large"),Mp=v("lavender"),zp=v("light-teal"),Lp=v("lilac"),Pp=v("magenta"),Fp=v("marigold"),Np=v("medium"),Dp=v("mink"),_p=v("monospace"),Rn=v("multiline"),Rp=v("navy");v("neutral");const aa=v("nowrap"),Vp=v("numeric"),xe=v("outline");v("pattern-mismatch");const Hp=v("peach"),jp=v("pink"),qp=v("platinum"),Up=v("plum");v("pressed");const Pt=v("primary"),Kp=v("pumpkin"),Wp=v("purple");v("range-overflow");v("range-underflow");const Gp=v("red"),Qp=v("resize-both"),Xp=v("resize-horizontal"),Zp=v("resize-vertical"),kr=v("rounded"),Yp=v("royal-blue"),Jp=v("seafoam"),ef=v("semibold"),hi=v("severe");v("shadow");const tf=v("size-1000"),nf=v("size-100"),rf=v("size-200"),of=v("size-400"),sf=v("size-500"),af=v("size-600"),lf=v("size-700"),cf=v("size-800"),uf=v("size-900"),ze=v("small"),Gr=v("square"),df=v("steel");v("step-mismatch");const la=v("strikethrough");v("strong");const wr=v("submenu"),qe=v("subtle"),lr=v("success"),hf=v("teal"),Tt=v("tint"),Qr=v("tiny");v("too-long");v("too-short");const Gt=v("transparent"),ca=v("truncate");v("type-mismatch");const Qt=v("underline"),pf=v("user-invalid");v("valid");v("value-missing");v("vertical");const cr=v("warning"),Fe="var(--colorNeutralForeground1)",ff="var(--colorNeutralForeground1Hover)",gf="var(--colorNeutralForeground1Pressed)",to="var(--colorNeutralForeground2)",Kl="var(--colorNeutralForeground2Hover)",Wl="var(--colorNeutralForeground2Pressed)",ua="var(--colorNeutralForeground2BrandHover)",da="var(--colorNeutralForeground2BrandPressed)",Ne="var(--colorNeutralForeground3)",mf="var(--colorNeutralForeground3Hover)",bf="var(--colorNeutralForeground3Pressed)",Gl="var(--colorNeutralForeground4)",$t="var(--colorNeutralForegroundDisabled)",vf="var(--colorCompoundBrandForeground1Pressed)",en="var(--colorNeutralForegroundOnBrand)",ur="var(--colorNeutralForegroundInverted)",yf="var(--colorNeutralForegroundInvertedHover)",kf="var(--colorNeutralForegroundInvertedPressed)",Ql="var(--colorNeutralForegroundStaticInverted)",Xl="var(--colorBrandForeground1)",wf="var(--colorBrandForeground2)",xf="var(--colorNeutralForeground1Static)",he="var(--colorNeutralBackground1)",Zl="var(--colorNeutralBackground1Hover)",$f="var(--colorNeutralBackground1Pressed)",Cf="var(--colorNeutralBackground1Selected)",Xr="var(--colorNeutralBackground3)",Sf="var(--colorNeutralBackground4)",Ef="var(--colorNeutralBackground5)",Af="var(--colorNeutralBackground6)",Yl="var(--colorNeutralBackgroundInverted)",Tf="var(--colorSubtleBackground)",If="var(--colorSubtleBackgroundHover)",Bf="var(--colorSubtleBackgroundPressed)",Ue="var(--colorTransparentBackground)",ha="var(--colorTransparentBackgroundHover)",pa="var(--colorTransparentBackgroundPressed)",pi="var(--colorNeutralBackgroundDisabled)",Of="var(--colorBackgroundOverlay)",Jl="var(--colorBrandBackground)",Mf="var(--colorBrandBackgroundHover)",zf="var(--colorBrandBackgroundPressed)",no="var(--colorCompoundBrandBackground)",ro="var(--colorCompoundBrandBackgroundHover)",io="var(--colorCompoundBrandBackgroundPressed)",fa="var(--colorBrandBackgroundStatic)",Lf="var(--colorBrandBackground2)",xn="var(--colorNeutralStrokeAccessible)",Jn="var(--colorNeutralStrokeAccessibleHover)",er="var(--colorNeutralStrokeAccessiblePressed)",$n="var(--colorNeutralStroke1)",Do="var(--colorNeutralStroke1Hover)",_o="var(--colorNeutralStroke1Pressed)",oo="var(--colorNeutralStroke2)",Pf="var(--colorNeutralStrokeOnBrand2)",Ff="var(--colorBrandStroke1)",ec="var(--colorBrandStroke2)",Ro="var(--colorCompoundBrandStroke)",Nf="var(--colorCompoundBrandStrokeHover)",tc="var(--colorCompoundBrandStrokePressed)",yt="var(--colorNeutralStrokeDisabled)",st="var(--colorTransparentStroke)",ga="var(--colorTransparentStrokeInteractive)",Df="var(--colorStrokeFocus1)",Cn="var(--colorStrokeFocus2)",nc="var(--colorPaletteRedBackground1)",_f="var(--colorPaletteRedBackground2)",Rf="var(--colorPaletteRedBackground3)",rc="var(--colorPaletteRedBorder1)",so="var(--colorPaletteRedBorder2)",Vf="var(--colorPaletteRedForeground1)",Hf="var(--colorPaletteRedForeground2)",ic="var(--colorPaletteRedForeground3)",oc="var(--colorPaletteGreenBackground1)",jf="var(--colorPaletteGreenBackground3)",qf="var(--colorPaletteGreenBorder1)",Uf="var(--colorPaletteGreenBorder2)",Kf="var(--colorPaletteGreenForeground1)",Wf="var(--colorPaletteGreenForeground2)",Gf="var(--colorPaletteGreenForeground3)",sc="var(--colorPaletteDarkOrangeBackground1)",Qf="var(--colorPaletteDarkOrangeBackground3)",ac="var(--colorPaletteDarkOrangeBorder1)",Xf="var(--colorPaletteDarkOrangeForeground1)",lc="var(--colorPaletteDarkOrangeForeground3)",Zf="var(--colorPaletteYellowBackground1)",Yf="var(--colorPaletteYellowBackground3)",Jf="var(--colorPaletteYellowBorder1)",Vo="var(--colorPaletteYellowForeground2)",eg="var(--colorPaletteMarigoldBackground2)",tg="var(--colorPaletteMarigoldForeground2)",ng="var(--colorPaletteAnchorBackground2)",rg="var(--colorPaletteAnchorForeground2)",ig="var(--colorPaletteBeigeBackground2)",og="var(--colorPaletteBeigeForeground2)",sg="var(--colorPaletteBlueBackground2)",ag="var(--colorPaletteBlueForeground2)",lg="var(--colorPaletteBrassBackground2)",cg="var(--colorPaletteBrassForeground2)",ug="var(--colorPaletteBrownBackground2)",dg="var(--colorPaletteBrownForeground2)",hg="var(--colorPaletteCornflowerBackground2)",pg="var(--colorPaletteCornflowerForeground2)",fg="var(--colorPaletteCranberryBackground2)",gg="var(--colorPaletteCranberryForeground2)",mg="var(--colorPaletteDarkGreenBackground2)",bg="var(--colorPaletteDarkGreenForeground2)",vg="var(--colorPaletteDarkRedBackground2)",yg="var(--colorPaletteDarkRedForeground2)",kg="var(--colorPaletteForestBackground2)",wg="var(--colorPaletteForestForeground2)",xg="var(--colorPaletteGoldBackground2)",$g="var(--colorPaletteGoldForeground2)",Cg="var(--colorPaletteGrapeBackground2)",Sg="var(--colorPaletteGrapeForeground2)",Eg="var(--colorPaletteLavenderBackground2)",Ag="var(--colorPaletteLavenderForeground2)",Tg="var(--colorPaletteLightTealBackground2)",Ig="var(--colorPaletteLightTealForeground2)",Bg="var(--colorPaletteLilacBackground2)",Og="var(--colorPaletteLilacForeground2)",Mg="var(--colorPaletteMagentaBackground2)",zg="var(--colorPaletteMagentaForeground2)",Lg="var(--colorPaletteMinkBackground2)",Pg="var(--colorPaletteMinkForeground2)",Fg="var(--colorPaletteNavyBackground2)",Ng="var(--colorPaletteNavyForeground2)",Dg="var(--colorPalettePeachBackground2)",_g="var(--colorPalettePeachForeground2)",Rg="var(--colorPalettePinkBackground2)",Vg="var(--colorPalettePinkForeground2)",Hg="var(--colorPalettePlatinumBackground2)",jg="var(--colorPalettePlatinumForeground2)",qg="var(--colorPalettePlumBackground2)",Ug="var(--colorPalettePlumForeground2)",Kg="var(--colorPalettePumpkinBackground2)",Wg="var(--colorPalettePumpkinForeground2)",Gg="var(--colorPalettePurpleBackground2)",Qg="var(--colorPalettePurpleForeground2)",Xg="var(--colorPaletteRoyalBlueBackground2)",Zg="var(--colorPaletteRoyalBlueForeground2)",Yg="var(--colorPaletteSeafoamBackground2)",Jg="var(--colorPaletteSeafoamForeground2)",em="var(--colorPaletteSteelBackground2)",tm="var(--colorPaletteSteelForeground2)",nm="var(--colorPaletteTealBackground2)",rm="var(--colorPaletteTealForeground2)",cc="var(--borderRadiusNone)",nn="var(--borderRadiusSmall)",oe="var(--borderRadiusMedium)",uc="var(--borderRadiusLarge)",dc="var(--borderRadiusXLarge)",Sn="var(--borderRadiusCircular)",Oe="var(--fontFamilyBase)",im="var(--fontFamilyMonospace)",om="var(--fontFamilyNumeric)",Ho="var(--fontSizeBase100)",We="var(--fontSizeBase200)",at="var(--fontSizeBase300)",rn="var(--fontSizeBase400)",dr="var(--fontSizeBase500)",jo="var(--fontSizeBase600)",sm="var(--fontSizeHero700)",am="var(--fontSizeHero800)",lm="var(--fontSizeHero900)",cm="var(--fontSizeHero1000)",Le="var(--fontWeightRegular)",um="var(--fontWeightMedium)",hr="var(--fontWeightSemibold)",dm="var(--fontWeightBold)",hc="var(--lineHeightBase100)",lt="var(--lineHeightBase200)",Nt="var(--lineHeightBase300)",pr="var(--lineHeightBase400)",qo="var(--lineHeightBase500)",hm="var(--lineHeightBase600)",pm="var(--lineHeightHero700)",fm="var(--lineHeightHero800)",gm="var(--lineHeightHero900)",mm="var(--lineHeightHero1000)",Uo="var(--shadow2)",Ko="var(--shadow4)",bm="var(--shadow8)",pc="var(--shadow16)",vm="var(--shadow28)",ym="var(--shadow64)",Ie="var(--strokeWidthThin)",kt="var(--strokeWidthThick)",Kn="var(--strokeWidthThicker)",ao="var(--strokeWidthThickest)",Pe="var(--spacingHorizontalXXS)",En="var(--spacingHorizontalXS)",tr="var(--spacingHorizontalSNudge)",Ft="var(--spacingHorizontalS)",Zr="var(--spacingHorizontalMNudge)",vt="var(--spacingHorizontalM)",km="var(--spacingHorizontalL)",wm="var(--spacingHorizontalXXL)",lo="var(--spacingVerticalXS)",xm="var(--spacingVerticalSNudge)",Mt="var(--spacingVerticalS)",Oi="var(--spacingVerticalMNudge)",$m="var(--spacingVerticalL)",Vn="var(--spacingVerticalXXL)",fc="var(--durationUltraFast)",co="var(--durationFaster)",Wo="var(--durationNormal)",Cm="var(--durationGentle)",ma="var(--durationSlower)",xr="var(--durationUltraSlow)",Sm="var(--curveAccelerateMax)",fi="var(--curveAccelerateMid)",Em="var(--curveAccelerateMin)",Am="var(--curveDecelerateMax)",gi="var(--curveDecelerateMid)",Tm="var(--curveDecelerateMin)",Im="var(--curveEasyEaseMax)",mi="var(--curveEasyEase)",gc="var(--curveLinear)",Bm=N`
  ${ke("block")}

  :host {
    max-width: fit-content;
    contain: content;
  }

  .heading {
    height: 44px;
    display: grid;
    position: relative;
    padding-inline: ${vt} ${Zr};
    border-radius: ${oe};
    font-family: ${Oe};
    font-size: ${at};
    font-weight: ${Le};
    line-height: ${Nt};
    grid-template-columns: auto auto 1fr auto;
  }

  .button {
    appearance: none;
    background: ${Ue};
    border: none;
    box-sizing: border-box;
    color: ${Fe};
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
    border-radius: ${nn};
  }

  :where(.default-marker-collapsed, .default-marker-expanded),
  ::slotted(:is([slot='marker-collapsed'], [slot='marker-expanded'])) {
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    position: relative;
    height: 100%;
    padding-inline-end: ${Ft};
    grid-column: 1 / span 1;
    grid-row: 1;
  }

  .content {
    margin: 0 ${vt};
  }

  ::slotted([slot='start']) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: ${Ft};
    grid-column: 2 / span 1;
    grid-row: 1;
  }

  button:focus-visible::after {
    content: '';
    position: absolute;
    inset: 0px;
    cursor: pointer;
    border-radius: ${nn};
    outline: none;
    border: 2px solid ${Df};
    box-shadow: inset 0 0 0 1px ${Cn};
  }

  /* --- Disabled attr styles --- */

  :host(${Ot}) .button {
    color: ${$t};
  }

  :host(${Ot}) svg {
    filter: invert(89%) sepia(0%) saturate(569%) hue-rotate(155deg) brightness(88%) contrast(87%);
  }

  /* --- Expanded attr styles --- */

  :host(${qt}) .content {
    display: block;
  }

  :host(${qt}) .default-marker-collapsed,
  :host(${qt}) ::slotted([slot='marker-collapsed']),
  :host(:not(${qt})) :is(.default-marker-expanded, .content),
  :host(:not(${qt})) ::slotted([slot='marker-expanded']) {
    display: none;
  }

  :host(${qt}) ::slotted([slot='marker-expanded']),
  :host(:not(${qt})) ::slotted([slot='marker-collapsed']) {
    display: flex;
  }

  /* --- Appearance attr styles --- */

  .heading {
    font-size: ${at};
    line-height: ${Nt};
  }

  :host(${ze}) .heading {
    font-size: ${We};
    line-height: ${lt};
  }

  :host(${ve}) .heading {
    font-size: ${rn};
    line-height: ${pr};
  }

  :host(${Kr}) .heading {
    font-size: ${dr};
    line-height: ${qo};
  }

  /* --- marker-position attr styles --- */

  :host(${jt}) :slotted([slot='start']) {
    grid-column: 1 / span 1;
  }

  :host(${jt}) :is(.default-marker-collapsed, .default-marker-expanded) {
    grid-column: 4 / span 1;
    padding-inline-start: ${Ft};
    padding-inline-end: 0;
  }

  :host(${jt}) .button {
    grid-column: 2 / span 3;
  }

  /* --- Block attr styles --- */

  :host([block]) {
    max-width: 100%;
  }

  :host(${jt}) .heading {
    grid-template-columns: auto auto 28px;
    padding-inline: ${vt};
  }

  :host(${jt}:has([slot='start'])) .heading {
    padding-inline: ${Zr} ${vt};
  }

  :host(${qr}${jt}) .heading {
    grid-template-columns: auto 1fr;
  }

  :host(${jt}) :is(.default-marker-collapsed, .default-marker-expanded) {
    grid-column: 5 / span 1;
  }
`,M=Object.freeze({prefix:"fluent",shadowRootMode:"open",registry:customElements}),Om=V.partial(`<svg
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
</svg>`),Mm=V.partial(`<svg
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
</svg>`);function zm(n={}){return V`
    <div class="heading" part="heading" role="heading" aria-level="${e=>e.headinglevel}">
      <button
        class="button"
        part="button"
        ${it("expandbutton")}
        ?disabled="${e=>e.disabled?"true":void 0}"
        aria-expanded="${e=>e.expanded}"
        aria-controls="${e=>e.id}-panel"
        id="${e=>e.id}"
      >
        <slot name="heading"></slot>
      </button>
      ${Bn(n)}
      <slot name="marker-expanded"> ${ot(n.expandedIcon)} </slot>
      <slot name="marker-collapsed"> ${ot(n.collapsedIcon)} </slot>
    </div>
    <div class="content" part="content" id="${e=>e.id}-panel" role="region" aria-labelledby="${e=>e.id}">
      <slot></slot>
    </div>
  `}const Lm=zm({collapsedIcon:Om,expandedIcon:Mm}),Pm=ar.compose({name:`${M.prefix}-accordion-item`,template:Lm,styles:Bm}),Mi={single:"single",multi:"multi"};class Go extends pe{constructor(){super(...arguments),this.expandmode=Mi.multi,this.activeItemIndex=0,this.setItems=()=>{if(this.slottedAccordionItems.length===0)return;const e=Array.from(this.children);if(this.removeItemListeners(e),e.forEach(t=>z.getNotifier(t).subscribe(this,"disabled")),this.accordionItems=e.filter(t=>!t.hasAttribute("disabled")),this.accordionItems.forEach((t,r)=>{t instanceof bt&&(t.addEventListener("click",this.expandedChangedHandler),z.getNotifier(t).subscribe(this,"expanded"))}),this.isSingleExpandMode()){const t=this.findExpandedItem();this.setSingleExpandMode(t)}},this.removeItemListeners=e=>{e.forEach((t,r)=>{z.getNotifier(t).unsubscribe(this,"disabled"),z.getNotifier(t).unsubscribe(this,"expanded"),t.removeEventListener("click",this.expandedChangedHandler)})},this.expandedChangedHandler=e=>{const t=e.target;t instanceof bt&&(this.isSingleExpandMode()?this.setSingleExpandMode(t):(t.expanded=!t.expanded,this.activeItemIndex=this.accordionItems.indexOf(t)),this.$emit("change"))}}expandmodeChanged(e,t){if(!this.$fastController.isConnected)return;const r=this.findExpandedItem();if(r){if(t===Mi.single){this.setSingleExpandMode(r);return}r==null||r.expandbutton.removeAttribute("aria-disabled")}}slottedAccordionItemsChanged(e,t){this.$fastController.isConnected&&this.setItems()}handleChange(e,t){t==="disabled"?this.setItems():t==="expanded"&&e.expanded&&this.isSingleExpandMode()&&this.setSingleExpandMode(e)}findExpandedItem(){var e;return this.accordionItems.length===0?null:(e=this.accordionItems.find(t=>t instanceof bt&&t.expanded))!==null&&e!==void 0?e:this.accordionItems[0]}isSingleExpandMode(){return this.expandmode===Mi.single}setSingleExpandMode(e){if(this.accordionItems.length===0)return;const t=Array.from(this.accordionItems);this.activeItemIndex=t.indexOf(e),t.forEach((r,i)=>{r instanceof bt&&(this.activeItemIndex===i?(r.expanded=!0,r.expandbutton.setAttribute("aria-disabled","true")):(r.expanded=!1,r.hasAttribute("disabled")||r.expandbutton.removeAttribute("aria-disabled")))})}}m([b({attribute:"expand-mode"})],Go.prototype,"expandmode",void 0);m([ye],Go.prototype,"slottedAccordionItems",void 0);function Fm(){return V`
    <template>
      <slot ${xt({property:"slottedAccordionItems",filter:Ji()})}></slot>
    </template>
  `}const Nm=Fm(),Dm=N`
  ${ke("flex")}

  :host {
    flex-direction: column;
    width: 100%;
    contain: content;
  }
`,_m=Go.compose({name:`${M.prefix}-accordion`,template:Nm,styles:Dm}),mc={primary:"primary",outline:"outline",subtle:"subtle",transparent:"transparent"},bc={circular:"circular",rounded:"rounded",square:"square"},vc={small:"small",medium:"medium",large:"large"},$r={submit:"submit",reset:"reset",button:"button"},Rm=mc,Vm=bc,Hm=vc,jm={download:"download",href:"href",hreflang:"hreflang",ping:"ping",referrerpolicy:"referrerpolicy",rel:"rel",target:"target",type:"type"};class St extends pe{constructor(){super(),this.isMac=navigator.userAgent.includes("Mac"),this.elementInternals=this.attachInternals(),this.internalProxyAnchor=this.createProxyElement(),this.elementInternals.role="link"}connectedCallback(){super.connectedCallback(),z.getNotifier(this).subscribe(this),Object.keys(this.$fastController.definition.attributeLookup).forEach(e=>{this.handleChange(this,e)}),this.append(this.internalProxyAnchor)}disconnectedCallback(){super.disconnectedCallback(),z.getNotifier(this).unsubscribe(this)}handleChange(e,t){var r;if(t in jm){const i=(r=this.$fastController.definition.attributeLookup[t])===null||r===void 0?void 0:r.attribute;i&&this.handleProxyAttributeChange(i,this[t])}}clickHandler(e){if(this.href){const t=this.isMac?e.metaKey:e.ctrlKey;this.handleNavigation(t)}return!0}keydownHandler(e){if(this.href&&e.key===li){const t=this.isMac&&e.metaKey||e.ctrlKey;this.handleNavigation(t);return}return!0}handleNavigation(e){e?window.open(this.href,"_blank"):this.internalProxyAnchor.click()}handleProxyAttributeChange(e,t){t?this.internalProxyAnchor.setAttribute(e,t):this.internalProxyAnchor.removeAttribute(e)}createProxyElement(){var e;const t=(e=this.internalProxyAnchor)!==null&&e!==void 0?e:document.createElement("a");return t.ariaHidden="true",t.tabIndex=-1,t}}m([b],St.prototype,"download",void 0);m([b],St.prototype,"href",void 0);m([b],St.prototype,"hreflang",void 0);m([b],St.prototype,"ping",void 0);m([b],St.prototype,"referrerpolicy",void 0);m([b],St.prototype,"rel",void 0);m([b],St.prototype,"target",void 0);m([b],St.prototype,"type",void 0);class Mn extends St{constructor(){super(...arguments),this.iconOnly=!1}appearanceChanged(e,t){j(this.elementInternals,e,t,Rm)}shapeChanged(e,t){j(this.elementInternals,e,t,Vm)}sizeChanged(e,t){j(this.elementInternals,e,t,Hm)}iconOnlyChanged(e,t){J(this.elementInternals,"icon",!!t)}}m([b],Mn.prototype,"appearance",void 0);m([b],Mn.prototype,"shape",void 0);m([b],Mn.prototype,"size",void 0);m([b({attribute:"icon-only",mode:"boolean"})],Mn.prototype,"iconOnly",void 0);On(Mn,In);const qm=/[\(\[\{][^\)\]\}]*[\)\]\}]/g,Um=/[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g,Km=/^\d+[\d\s]*(:?ext|x|)\s*\d+$/i,Wm=/\s+/g,Gm=/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;function Qm(n,e,t){let r="";const i=n.split(" ");return i.length!==0&&(r+=i[0].charAt(0).toUpperCase()),t||(i.length===2?r+=i[1].charAt(0).toUpperCase():i.length===3&&(r+=i[2].charAt(0).toUpperCase())),e&&r.length>1?r.charAt(1)+r.charAt(0):r}function Xm(n){return n=n.replace(qm,""),n=n.replace(Um,""),n=n.replace(Wm," "),n=n.trim(),n}function Zm(n,e,t){return!n||(n=Xm(n),Gm.test(n)||!(t!=null&&t.allowPhoneInitials)&&Km.test(n))?"":Qm(n,e,t==null?void 0:t.firstInitialOnly)}const yc={darkRed:"dark-red",cranberry:"cranberry",red:"red",pumpkin:"pumpkin",peach:"peach",marigold:"marigold",gold:"gold",brass:"brass",brown:"brown",forest:"forest",seafoam:"seafoam",darkGreen:"dark-green",lightTeal:"light-teal",teal:"teal",steel:"steel",blue:"blue",royalBlue:"royal-blue",cornflower:"cornflower",navy:"navy",lavender:"lavender",purple:"purple",grape:"grape",lilac:"lilac",pink:"pink",magenta:"magenta",plum:"plum",beige:"beige",mink:"mink",platinum:"platinum",anchor:"anchor"},ba={neutral:"neutral",brand:"brand",colorful:"colorful",...yc};class bi extends pe{constructor(){super(),this.elementInternals=this.attachInternals(),this.elementInternals.role="img"}}m([b],bi.prototype,"name",void 0);m([b],bi.prototype,"initials",void 0);m([b],bi.prototype,"active",void 0);class ct extends bi{handleChange(e,t){switch(t){case"color":case"colorId":this.generateColor();break}}generateInitials(){var e,t;if(!this.name&&!this.initials)return;const r=(e=this.size)!==null&&e!==void 0?e:32;return(t=this.initials)!==null&&t!==void 0?t:Zm(this.name,window.getComputedStyle(this).direction==="rtl",{firstInitialOnly:r<=16})}generateColor(){var e,t;const r=this.color===ba.colorful,i=this.currentColor;this.currentColor=r&&this.colorId?this.colorId:r?ct.colors[Ym((e=this.name)!==null&&e!==void 0?e:"")%ct.colors.length]:(t=this.color)!==null&&t!==void 0?t:ba.neutral,j(this.elementInternals,i,this.currentColor)}connectedCallback(){super.connectedCallback(),z.getNotifier(this).subscribe(this),this.generateColor()}disconnectedCallback(){super.disconnectedCallback(),z.getNotifier(this).unsubscribe(this)}}ct.colors=Object.values(yc);m([b],ct.prototype,"shape",void 0);m([b],ct.prototype,"appearance",void 0);m([b({converter:_t})],ct.prototype,"size",void 0);m([b],ct.prototype,"color",void 0);m([b({attribute:"color-id"})],ct.prototype,"colorId",void 0);const Ym=n=>{let e=0;for(let t=n.length-1;t>=0;t--){const r=n.charCodeAt(t),i=t%8;e^=(r<<i)+(r>>8-i)}return e},Jm=V`<svg
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
</svg>`;function eb(){return V`
    <slot>${n=>n.name||n.initials?n.generateInitials():Jm}</slot>
    <slot name="badge"></slot>
  `}const tb=eb(),It={fastOutSlowInMax:Am,fastOutSlowInMid:gi,fastOutSlowInMin:Tm,slowOutFastInMax:Sm,slowOutFastInMid:fi,slowOutFastInMin:Em,fastEase:Im,normalEase:mi,nullEasing:gc},nb=N`
  ${ke("inline-flex")} :host {
    position: relative;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    font-family: ${Oe};
    font-weight: ${hr};
    font-size: ${at};
    border-radius: ${Sn};
    color: ${Ne};
    background-color: ${Af};
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
    border-radius: ${Sn};
  }

  ::slotted([slot='badge']) {
    position: absolute;
    bottom: 0;
    right: 0;
    box-shadow: 0 0 0 ${Ie}) ${he};
  }

  :host([size='64']) ::slotted([slot='badge']),
  :host([size='72']) ::slotted([slot='badge']),
  :host([size='96']) ::slotted([slot='badge']),
  :host([size='120']) ::slotted([slot='badge']),
  :host([size='128']) ::slotted([slot='badge']) {
    box-shadow: 0 0 0 ${kt}) ${he};
  }

  :host([size='16']),
  :host([size='20']),
  :host([size='24']) {
    font-size: ${Ho};
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
    font-size: ${We};
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
    font-size: ${rn};
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
    font-size: ${dr};
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
    font-size: ${jo};
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
    border-radius: ${oe};
  }

  :host([shape='square'][size='20']),
  :host([shape='square'][size='24']) {
    border-radius: ${nn};
  }

  :host([shape='square'][size='56']),
  :host([shape='square'][size='64']),
  :host([shape='square'][size='72']) {
    border-radius: ${uc};
  }
  :host([shape='square'][size='96']),
  :host([shape='square'][size='120']),
  :host([shape='square'][size='128']) {
    border-radius: ${dc};
  }

  :host(${mp}) {
    color: ${Ql};
    background-color: ${fa};
  }

  :host(${$p}) {
    color: ${yg};
    background-color: ${vg};
  }

  :host(${wp}) {
    color: ${gg};
    background-color: ${fg};
  }

  :host(${Gp}) {
    color: ${Hf};
    background-color: ${_f};
  }

  :host(${Kp}) {
    color: ${Wg};
    background-color: ${Kg};
  }

  :host(${Hp}) {
    color: ${_g};
    background-color: ${Dg};
  }

  :host(${Fp}) {
    color: ${tg};
    background-color: ${eg};
  }

  :host(${Ap}) {
    color: ${$g};
    background-color: ${xg};
  }

  :host(${bp}) {
    color: ${cg};
    background-color: ${lg};
  }

  :host(${vp}) {
    color: ${dg};
    background-color: ${ug};
  }

  :host(${Ep}) {
    color: ${wg};
    background-color: ${kg};
  }

  :host(${Jp}) {
    color: ${Jg};
    background-color: ${Yg};
  }

  :host(${xp}) {
    color: ${bg};
    background-color: ${mg};
  }

  :host(${zp}) {
    color: ${Ig};
    background-color: ${Tg};
  }

  :host(${hf}) {
    color: ${rm};
    background-color: ${nm};
  }

  :host(${df}) {
    color: ${tm};
    background-color: ${em};
  }

  :host(${fp}) {
    color: ${ag};
    background-color: ${sg};
  }

  :host(${Yp}) {
    color: ${Zg};
    background-color: ${Xg};
  }

  :host(${kp}) {
    color: ${pg};
    background-color: ${hg};
  }

  :host(${Rp}) {
    color: ${Ng};
    background-color: ${Fg};
  }

  :host(${Mp}) {
    color: ${Ag};
    background-color: ${Eg};
  }

  :host(${Wp}) {
    color: ${Qg};
    background-color: ${Gg};
  }

  :host(${Tp}) {
    color: ${Sg};
    background-color: ${Cg};
  }

  :host(${Lp}) {
    color: ${Og};
    background-color: ${Bg};
  }

  :host(${jp}) {
    color: ${Vg};
    background-color: ${Rg};
  }

  :host(${Pp}) {
    color: ${zg};
    background-color: ${Mg};
  }

  :host(${Up}) {
    color: ${Ug};
    background-color: ${qg};
  }

  :host(${pp}) {
    color: ${og};
    background-color: ${ig};
  }

  :host(${Dp}) {
    color: ${Pg};
    background-color: ${Lg};
  }

  :host(${qp}) {
    color: ${jg};
    background-color: ${Hg};
  }

  :host(${hp}) {
    color: ${rg};
    background-color: ${ng};
  }

  :host([active]) {
    /* Work-around for text pixel snapping at the end of the animation */
    transform: perspective(1px);
    transition-property: transform, opacity;
    transition-duration: ${xr}, ${co};
    transition-delay: ${It.fastEase}, ${It.nullEasing};
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
    transition-duration: ${xr}), ${ma};
    transition-delay: ${It.fastEase}), ${It.nullEasing});
  }
  :host([active])::before {
    box-shadow: ${bm};
    border-style: solid;
    border-color: ${fa};
  }

  :host([active][appearance='shadow'])::before {
    border-style: none;
    border-color: none;
  }

  :host([active]:not([appearance='shadow']))::before {
    margin: calc(-2 * ${kt});
    border-width: ${kt};
  }

  :host([size='56'][active]:not([appearance='shadow']))::before,
  :host([size='64'][active]:not([appearance='shadow']))::before {
    margin: calc(-2 * ${Kn});
    border-width: ${Kn};
  }

  :host([size='72'][active]:not([appearance='shadow']))::before,
  :host([size='96'][active]:not([appearance='shadow']))::before,
  :host([size='120'][active]:not([appearance='shadow']))::before,
  :host([size='128'][active]:not([appearance='shadow']))::before {
    margin: calc(-2 * ${ao});
    border-width: ${ao};
  }

  :host([size='20'][active][appearance])::before,
  :host([size='24'][active][appearance])::before,
  :host([size='28'][active][appearance])::before {
    box-shadow: ${Ko};
  }

  :host([size='56'][active][appearance])::before,
  :host([size='64'][active][appearance])::before {
    box-shadow: ${pc};
  }

  :host([size='72'][active][appearance])::before,
  :host([size='96'][active][appearance])::before,
  :host([size='120'][active][appearance])::before,
  :host([size='128'][active][appearance])::before {
    box-shadow: ${vm};
  }

  :host([active][appearance='ring'])::before {
    box-shadow: none;
  }

  :host([active='inactive']) {
    opacity: 0.8;
    transform: scale(0.875);
    transition-property: transform, opacity;
    transition-duration: ${xr}, ${co};
    transition-delay: ${It.fastOutSlowInMin}, ${It.nullEasing};
  }

  :host([active='inactive'])::before {
    margin: 0;
    opacity: 0;
    transition-property: margin, opacity;
    transition-duration: ${xr}, ${ma};
    transition-delay: ${It.fastOutSlowInMin}, ${It.nullEasing};
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
`,rb=ct.compose({name:`${M.prefix}-avatar`,template:tb,styles:nb}),va={filled:"filled",ghost:"ghost",outline:"outline",tint:"tint"},ya={brand:"brand",danger:"danger",important:"important",informative:"informative",severe:"severe",subtle:"subtle",success:"success",warning:"warning"},ib={circular:"circular",rounded:"rounded",square:"square"},ob={tiny:"tiny",extraSmall:"extra-small",small:"small",medium:"medium",large:"large",extraLarge:"extra-large"};class zn extends pe{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.appearance=va.filled,this.color=ya.brand}appearanceChanged(e,t){j(this.elementInternals,e,t,va)}colorChanged(e,t){j(this.elementInternals,e,t,ya)}shapeChanged(e,t){j(this.elementInternals,e,t,ib)}sizeChanged(e,t){j(this.elementInternals,e,t,ob)}}m([b],zn.prototype,"appearance",void 0);m([b],zn.prototype,"color",void 0);m([b],zn.prototype,"shape",void 0);m([b],zn.prototype,"size",void 0);On(zn,In);function sb(n={}){return V`
    ${Bn(n)}
    <slot>${ot(n.defaultContent)}</slot>
    ${sr(n)}
  `}const ab=sb(),lb=N.partial`
  ${ke("inline-flex")} :host {
    position: relative;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    font-family: ${Oe};
    font-weight: ${hr};
    font-size: ${We};
    line-height: ${lt};
    min-width: 20px;
    height: 20px;
    padding-inline: calc(${En} + ${Pe});
    border-radius: ${Sn};
    border-color: ${st};
    background-color: ${Jl};
    color: ${en};
    contain: content;
  }

  ::slotted(svg) {
    font-size: 12px;
  }

  :host(:not(${mt}))::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-style: solid;
    border-width: ${Ie};
    border-color: inherit;
    border-radius: inherit;
  }
`,cb=N.partial`
  :host(${Qr}) {
    width: 6px;
    height: 6px;
    font-size: 4px;
    line-height: 4px;
    padding-inline: 0;
    min-width: unset;
  }
  :host(${Qr}) ::slotted(svg) {
    font-size: 6px;
  }
  :host(${Wr}) {
    width: 10px;
    height: 10px;
    font-size: 6px;
    line-height: 6px;
    padding-inline: 0;
    min-width: unset;
  }
  :host(${Wr}) ::slotted(svg) {
    font-size: 10px;
  }
  :host(${ze}) {
    min-width: 16px;
    height: 16px;
    font-size: ${Ho};
    line-height: ${hc};
    padding-inline: calc(${Pe} + ${Pe});
  }
  :host(${ze}) ::slotted(svg) {
    font-size: 12px;
  }
  :host(${ve}) {
    min-width: 24px;
    height: 24px;
    font-size: ${We};
    line-height: ${lt};
    padding-inline: calc(${En} + ${Pe});
  }
  :host(${ve}) ::slotted(svg) {
    font-size: 16px;
  }
  :host(${Kr}) {
    min-width: 32px;
    height: 32px;
    font-size: ${We};
    line-height: ${lt};
    padding-inline: calc(${tr} + ${Pe});
  }
  :host(${Kr}) ::slotted(svg) {
    font-size: 20px;
  }
`,ub=N.partial`
  :host(${ci}) {
    background-color: ${Rf};
    color: ${en};
  }

  :host(${ui}) {
    background-color: ${Fe};
    color: ${he};
  }

  :host(${di}) {
    background-color: ${Ef};
    color: ${Ne};
  }

  :host(${hi}) {
    background-color: ${Qf};
    color: ${en};
  }

  :host(${qe}) {
    background-color: ${he};
    color: ${Fe};
  }

  :host(${lr}) {
    background-color: ${jf};
    color: ${en};
  }

  :host(${cr}) {
    background-color: ${Yf};
    color: ${xf};
  }
`,db=N.partial`
  :host(${mt}) {
    color: ${Xl};
    background-color: initial;
  }

  :host(${mt}${ci}) {
    color: ${ic};
  }

  :host(${mt}${ui}) {
    color: ${Fe};
  }

  :host(${mt}${di}) {
    color: ${Ne};
  }

  :host(${mt}${hi}) {
    color: ${lc};
  }

  :host(${mt}${qe}) {
    color: ${ur};
  }

  :host(${mt}${lr}) {
    color: ${Gf};
  }

  :host(${mt}${cr}) {
    color: ${Vo};
  }
`,hb=N.partial`
  :host(${xe}) {
    border-color: currentColor;
    color: ${Xl};
    background-color: initial;
  }

  :host(${xe}${ci}) {
    color: ${ic};
  }

  :host(${xe}${ui}) {
    color: ${Ne};
    border-color: ${xn};
  }

  :host(${xe}${di}) {
    color: ${Ne};
    border-color: ${oo};
  }

  :host(${xe}${hi}) {
    color: ${lc};
  }

  :host(${xe}${qe}) {
    color: ${Ql};
  }

  :host(${xe}${lr}) {
    color: ${Wf};
  }

  :host(${xe}${cr}) {
    color: ${Vo};
  }
`,pb=N.partial`
  :host(${Tt}) {
    background-color: ${Lf};
    color: ${wf};
    border-color: ${ec};
  }

  :host(${Tt}${ci}) {
    background-color: ${nc};
    color: ${Vf};
    border-color: ${rc};
  }

  :host(${Tt}${ui}) {
    background-color: ${Ne};
    color: ${he};
    border-color: ${st};
  }

  :host(${Tt}${di}) {
    background-color: ${Sf};
    color: ${Ne};
    border-color: ${oo};
  }

  :host(${Tt}${hi}) {
    background-color: ${sc};
    color: ${Xf};
    border-color: ${ac};
  }

  :host(${Tt}${qe}) {
    background-color: ${he};
    color: ${Ne};
    border-color: ${oo};
  }

  :host(${Tt}${lr}) {
    background-color: ${oc};
    color: ${Kf};
    border-color: ${Uf};
  }

  :host(${Tt}${cr}) {
    background-color: ${Zf};
    color: ${Vo};
    border-color: ${Jf};
  }
`,fb=N`
  :host(${Gr}) {
    border-radius: ${cc};
  }

  :host(${kr}) {
    border-radius: ${oe};
  }

  :host(${kr}${Qr}),
  :host(${kr}${Wr}),
  :host(${kr}${ze}) {
    border-radius: ${nn};
  }

  ${cb}
  ${ub}
  ${db}
  ${hb}
  ${pb}
  ${lb}
`.withBehaviors(Ct(N`
    :host,
    :host([appearance='outline']),
    :host([appearance='tint']) {
      border-color: CanvasText;
    }
  `)),gb=zn.compose({name:`${M.prefix}-badge`,template:ab,styles:fb});class me extends pe{disabledFocusableChanged(e,t){this.$fastController.isConnected&&(this.elementInternals.ariaDisabled=`${!!t}`)}get form(){return this.elementInternals.form}get labels(){return Object.freeze(Array.from(this.elementInternals.labels))}typeChanged(e,t){var r,i,o;t!==$r.submit&&((r=this.formSubmissionFallbackControl)===null||r===void 0||r.remove(),(o=(i=this.shadowRoot)===null||i===void 0?void 0:i.querySelector('slot[name="internal"]'))===null||o===void 0||o.remove())}clickHandler(e){if(e&&this.disabledFocusable){e.stopImmediatePropagation();return}return this.press(),!0}connectedCallback(){super.connectedCallback(),this.elementInternals.ariaDisabled=`${!!this.disabledFocusable}`}constructor(){super(),this.disabledFocusable=!1,this.tabIndex=0,this.elementInternals=this.attachInternals(),this.elementInternals.role="button"}createAndInsertFormSubmissionFallbackControl(){var e,t,r,i,o,s,a,l;const c=(e=this.formSubmissionFallbackControlSlot)!==null&&e!==void 0?e:document.createElement("slot");c.setAttribute("name","internal"),(t=this.shadowRoot)===null||t===void 0||t.appendChild(c),this.formSubmissionFallbackControlSlot=c;const u=(r=this.formSubmissionFallbackControl)!==null&&r!==void 0?r:document.createElement("button");u.style.display="none",u.setAttribute("type","submit"),u.setAttribute("slot","internal"),this.formNoValidate&&u.toggleAttribute("formnovalidate",!0),!((i=this.elementInternals.form)===null||i===void 0)&&i.id&&u.setAttribute("form",this.elementInternals.form.id),this.name&&u.setAttribute("name",this.name),this.value&&u.setAttribute("value",this.value),this.formAction&&u.setAttribute("formaction",(o=this.formAction)!==null&&o!==void 0?o:""),this.formEnctype&&u.setAttribute("formenctype",(s=this.formEnctype)!==null&&s!==void 0?s:""),this.formMethod&&u.setAttribute("formmethod",(a=this.formMethod)!==null&&a!==void 0?a:""),this.formTarget&&u.setAttribute("formtarget",(l=this.formTarget)!==null&&l!==void 0?l:""),this.append(u),this.formSubmissionFallbackControl=u}formDisabledCallback(e){this.disabled=e}keypressHandler(e){if(e&&this.disabledFocusable){e.stopImmediatePropagation();return}if(e.key===li||e.key===Fo){this.click();return}return!0}press(){switch(this.type){case $r.reset:{this.resetForm();break}case $r.submit:{this.submitForm();break}}}resetForm(){var e;(e=this.elementInternals.form)===null||e===void 0||e.reset()}submitForm(){var e;if(!(!this.elementInternals.form||this.disabled||this.type!==$r.submit)){if(!this.name&&!this.formAction&&!this.formEnctype&&!this.form&&!this.formMethod&&!this.formNoValidate&&!this.formTarget){this.elementInternals.form.requestSubmit();return}try{this.elementInternals.setFormValue((e=this.value)!==null&&e!==void 0?e:""),this.elementInternals.form.requestSubmit(this)}catch{this.createAndInsertFormSubmissionFallbackControl(),this.elementInternals.setFormValue(null),this.elementInternals.form.requestSubmit(this.formSubmissionFallbackControl)}}}}me.formAssociated=!0;m([b({mode:"boolean"})],me.prototype,"autofocus",void 0);m([ye],me.prototype,"defaultSlottedContent",void 0);m([b({mode:"boolean"})],me.prototype,"disabled",void 0);m([b({attribute:"disabled-focusable",mode:"boolean"})],me.prototype,"disabledFocusable",void 0);m([b({attribute:"tabindex",mode:"fromView",converter:_t})],me.prototype,"tabIndex",void 0);m([b({attribute:"formaction"})],me.prototype,"formAction",void 0);m([b({attribute:"form"})],me.prototype,"formAttribute",void 0);m([b({attribute:"formenctype"})],me.prototype,"formEnctype",void 0);m([b({attribute:"formmethod"})],me.prototype,"formMethod",void 0);m([b({attribute:"formnovalidate",mode:"boolean"})],me.prototype,"formNoValidate",void 0);m([b({attribute:"formtarget"})],me.prototype,"formTarget",void 0);m([b],me.prototype,"name",void 0);m([b],me.prototype,"type",void 0);m([b],me.prototype,"value",void 0);class sn extends me{constructor(){super(...arguments),this.iconOnly=!1}appearanceChanged(e,t){j(this.elementInternals,e,t,mc)}shapeChanged(e,t){j(this.elementInternals,e,t,bc)}sizeChanged(e,t){j(this.elementInternals,e,t,vc)}iconOnlyChanged(e,t){J(this.elementInternals,"icon",t)}}m([b],sn.prototype,"appearance",void 0);m([b],sn.prototype,"shape",void 0);m([b],sn.prototype,"size",void 0);m([b({attribute:"icon-only",mode:"boolean"})],sn.prototype,"iconOnly",void 0);On(sn,In);const kc=N`
  ${ke("inline-flex")}

  :host {
    --icon-spacing: ${tr};
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
    background-color: ${he};
    color: ${Fe};
    border: ${Ie} solid ${$n};
    padding: 0 ${vt};
    min-width: 96px;
    border-radius: ${oe};
    font-size: ${at};
    font-family: ${Oe};
    font-weight: ${hr};
    line-height: ${Nt};
    transition-duration: ${co};
    transition-property: background, border, color;
    transition-timing-function: ${mi};
    cursor: pointer;
    user-select: none;
  }

  .content {
    display: inherit;
  }

  :host(:hover) {
    background-color: ${Zl};
    color: ${ff};
    border-color: ${Do};
  }

  :host(:hover:active) {
    background-color: ${$f};
    border-color: ${_o};
    color: ${gf};
    outline-style: none;
  }

  :host(:focus-visible) {
    border-color: ${st};
    outline: ${kt} solid ${st};
    box-shadow: ${Ko}, 0 0 0 2px ${Cn};
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

  :host(${ze}) {
    --icon-spacing: ${En};
    min-height: 24px;
    min-width: 64px;
    padding: 0 ${Ft};
    border-radius: ${nn};
    font-size: ${We};
    line-height: ${lt};
    font-weight: ${Le};
  }

  :host(${ze}${_n}) {
    min-width: 24px;
    max-width: 24px;
  }

  :host(${ve}) {
    min-height: 40px;
    border-radius: ${uc};
    padding: 0 ${km};
    font-size: ${rn};
    line-height: ${pr};
  }

  :host(${ve}${_n}) {
    min-width: 40px;
    max-width: 40px;
  }

  :host(${ve}) ::slotted(svg) {
    font-size: 24px;
    height: 24px;
    width: 24px;
  }

  :host(:is(${Ur}, ${Ur}:focus-visible)) {
    border-radius: ${Sn};
  }

  :host(:is(${Gr}, ${Gr}:focus-visible)) {
    border-radius: ${cc};
  }

  :host(${Pt}) {
    background-color: ${Jl};
    color: ${en};
    border-color: transparent;
  }

  :host(${Pt}:hover) {
    background-color: ${Mf};
  }

  :host(${Pt}:is(:hover, :hover:active)) {
    border-color: transparent;
    color: ${en};
  }

  :host(${Pt}:hover:active) {
    background-color: ${zf};
  }

  :host(${Pt}:focus-visible) {
    border-color: ${en};
    box-shadow: ${Uo}, 0 0 0 2px ${Cn};
  }

  :host(${xe}) {
    background-color: ${Ue};
  }

  :host(${xe}:hover) {
    background-color: ${ha};
  }

  :host(${xe}:hover:active) {
    background-color: ${pa};
  }

  :host(${qe}) {
    background-color: ${Tf};
    color: ${to};
    border-color: transparent;
  }

  :host(${qe}:hover) {
    background-color: ${If};
    color: ${Kl};
    border-color: transparent;
  }

  :host(${qe}:hover:active) {
    background-color: ${Bf};
    color: ${Wl};
    border-color: transparent;
  }

  :host(${qe}:hover) ::slotted(svg) {
    fill: ${ua};
  }

  :host(${qe}:hover:active) ::slotted(svg) {
    fill: ${da};
  }

  :host(${Gt}) {
    background-color: ${Ue};
    color: ${to};
  }

  :host(${Gt}:hover) {
    background-color: ${ha};
    color: ${ua};
  }

  :host(${Gt}:hover:active) {
    background-color: ${pa};
    color: ${da};
  }

  :host(:is(${Gt}, ${Gt}:is(:hover, :active))) {
    border-color: transparent;
  }
`,wc=N`
  ${kc}

  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable])),
  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable]):hover),
  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable]):hover:active) {
    background-color: ${pi};
    border-color: ${yt};
    color: ${$t};
    cursor: not-allowed;
  }

  :host(${Pt}:is(:disabled, [disabled-focusable])),
  :host(${Pt}:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
  }

  :host(${xe}:is(:disabled, [disabled-focusable])),
  :host(${xe}:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    background-color: ${Ue};
  }

  :host(${qe}:is(:disabled, [disabled-focusable])),
  :host(${qe}:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    background-color: ${Ue};
    border-color: transparent;
  }

  :host(${Gt}:is(:disabled, [disabled-focusable])),
  :host(${Gt}:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
    background-color: ${Ue};
  }
`.withBehaviors(Ct(N`
    :host {
      background-color: ButtonFace;
      color: ButtonText;
    }

    :host(:is(:hover, :focus-visible)) {
      border-color: Highlight !important;
    }

    :host(${Pt}:not(:is(:hover, :focus-visible))) {
      background-color: Highlight;
      color: HighlightText;
      forced-color-adjust: none;
    }

    :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable])) {
      background-color: ButtonFace;
      color: GrayText;
      border-color: ButtonText;
    }
  `));function xc(n={}){return V`
    <template
      tabindex="${e=>{var t;return e.disabled?null:(t=e.tabIndex)!==null&&t!==void 0?t:0}}"
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @keypress="${(e,t)=>e.keypressHandler(t.event)}"
    >
      ${Bn(n)}
      <span class="content" part="content">
        <slot ${xt("defaultSlottedContent")}></slot>
      </span>
      ${sr(n)}
    </template>
  `}const mb=xc(),bb=sn.compose({name:`${M.prefix}-button`,template:mb,styles:wc}),vb={circular:"circular",square:"square"},yb={medium:"medium",large:"large"};class Qe extends pe{constructor(){super(...arguments),this.initialValue="on",this.dirtyChecked=!1,this.elementInternals=this.attachInternals(),this._validationFallbackMessage="",this._value=this.initialValue}get checked(){return z.track(this,"checked"),!!this._checked}set checked(e){this._checked=e,this.setFormValue(e?this.value:null),this.setValidity(),this.setAriaChecked(),J(this.elementInternals,"checked",e),z.notify(this,"checked")}disabledChanged(e,t){this.elementInternals.ariaDisabled=this.disabled?"true":"false",J(this.elementInternals,"disabled",this.disabled)}disabledAttributeChanged(e,t){this.disabled=!!t}initialCheckedChanged(e,t){this.dirtyChecked||(this.checked=!!t)}initialValueChanged(e,t){this._value=t}requiredChanged(e,t){this.$fastController.isConnected&&(this.setValidity(),this.elementInternals.ariaRequired=this.required?"true":"false")}get form(){return this.elementInternals.form}get labels(){return Object.freeze(Array.from(this.elementInternals.labels))}get validationMessage(){if(this.elementInternals.validationMessage)return this.elementInternals.validationMessage;if(!this._validationFallbackMessage){const e=document.createElement("input");e.type="checkbox",e.required=!0,e.checked=!1,this._validationFallbackMessage=e.validationMessage}return this._validationFallbackMessage}get validity(){return this.elementInternals.validity}get value(){return z.track(this,"value"),this._value}set value(e){this._value=e,this.$fastController.isConnected&&(this.setFormValue(e),this.setValidity(),z.notify(this,"value"))}get willValidate(){return this.elementInternals.willValidate}checkValidity(){return this.elementInternals.checkValidity()}clickHandler(e){if(this.disabled)return;this.dirtyChecked=!0;const t=this.checked;return this.toggleChecked(),t!==this.checked&&(this.$emit("change"),this.$emit("input")),!0}connectedCallback(){super.connectedCallback(),this.setAriaChecked(),this.setValidity()}inputHandler(e){return this.setFormValue(this.value),this.setValidity(),!0}keydownHandler(e){if(e.key!==" ")return!0}keyupHandler(e){if(e.key!==" ")return!0;this.click()}formResetCallback(){var e;this.checked=(e=this.initialChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1,this.setValidity()}reportValidity(){return this.elementInternals.reportValidity()}setAriaChecked(e=this.checked){this.elementInternals.ariaChecked=e?"true":"false"}setFormValue(e,t){this.elementInternals.setFormValue(e,e??t)}setCustomValidity(e){this.elementInternals.setValidity({customError:!0},e),this.setValidity()}setValidity(e,t,r){if(this.$fastController.isConnected){if(this.disabled||!this.required){this.elementInternals.setValidity({});return}this.elementInternals.setValidity({valueMissing:!!this.required&&!this.checked,...e},t??this.validationMessage,r)}}toggleChecked(e=!this.checked){this.checked=e}}Qe.formAssociated=!0;m([b({mode:"boolean"})],Qe.prototype,"autofocus",void 0);m([ye],Qe.prototype,"disabled",void 0);m([b({attribute:"disabled",mode:"boolean"})],Qe.prototype,"disabledAttribute",void 0);m([b({attribute:"form"})],Qe.prototype,"formAttribute",void 0);m([b({attribute:"checked",mode:"boolean"})],Qe.prototype,"initialChecked",void 0);m([b({attribute:"value",mode:"fromView"})],Qe.prototype,"initialValue",void 0);m([b],Qe.prototype,"name",void 0);m([b({mode:"boolean"})],Qe.prototype,"required",void 0);class vi extends Qe{indeterminateChanged(e,t){this.setAriaChecked(),J(this.elementInternals,"indeterminate",t)}shapeChanged(e,t){j(this.elementInternals,e,t,vb)}sizeChanged(e,t){j(this.elementInternals,e,t,yb)}constructor(){super(),this.elementInternals.role="checkbox"}setAriaChecked(e=this.checked){if(this.indeterminate){this.elementInternals.ariaChecked="mixed";return}super.setAriaChecked(e)}toggleChecked(e=!this.checked){this.indeterminate=!1,super.toggleChecked(e)}}m([ye],vi.prototype,"indeterminate",void 0);m([b],vi.prototype,"shape",void 0);m([b],vi.prototype,"size",void 0);const kb=N`
  ${ke("inline-flex")}

  :host {
    --size: 16px;
    background-color: ${he};
    border-radius: ${nn};
    border: ${Ie} solid ${xn};
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    width: var(--size);
  }

  :host,
  .indeterminate-indicator,
  .checked-indicator {
    aspect-ratio: 1;
  }

  :host(:hover) {
    border-color: ${Jn};
  }

  :host(:active) {
    border-color: ${er};
  }

  :host(${K}:hover) {
    background-color: ${ro};
    border-color: ${Nf};
  }

  :host(${K}:active) {
    background-color: ${io};
    border-color: ${tc};
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:not([slot='input']))::after {
    content: '';
    position: absolute;
    inset: -8px;
    box-sizing: border-box;
    outline: none;
    border: ${kt} solid ${st};
    border-radius: ${oe};
  }

  :host(:not([slot='input']):focus-visible)::after {
    border-color: ${Cn};
  }

  .indeterminate-indicator,
  .checked-indicator {
    color: ${ur};
    inset: 0;
    margin: auto;
    position: absolute;
  }

  ::slotted([slot='checked-indicator']),
  .checked-indicator {
    fill: currentColor;
    display: inline-flex;
    flex: 1 0 auto;
    width: 12px;
  }

  :host(:not(${K})) *:is(::slotted([slot='checked-indicator']), .checked-indicator) {
    display: none;
  }

  :host(${K}),
  :host(${Ut}) {
    border-color: ${Ro};
  }

  :host(${K}),
  :host(${Ut}) .indeterminate-indicator {
    background-color: ${no};
  }

  :host(${Ut}) .indeterminate-indicator {
    border-radius: ${nn};
    position: absolute;
    width: calc(var(--size) / 2);
    inset: 0;
  }

  :host(${ve}) {
    --size: 20px;
  }

  :host(${ve}) ::slotted([slot='checked-indicator']),
  :host(${ve}) .checked-indicator {
    width: 16px;
  }

  :host(${Ur}),
  :host(${Ur}) .indeterminate-indicator {
    border-radius: ${Sn};
  }

  :host([disabled]),
  :host([disabled]${K}) {
    background-color: ${pi};
    border-color: ${yt};
  }

  :host([disabled]) {
    cursor: unset;
  }

  :host([disabled]${Ut}) .indeterminate-indicator {
    background-color: ${yt};
  }

  :host([disabled]${K}) .checked-indicator {
    color: ${yt};
  }
`.withBehaviors(Ct(N`
    :host {
      border-color: FieldText;
    }

    :host(:not([slot='input']:focus-visible))::after {
      border-color: Canvas;
    }

    :host(:not([disabled]):hover),
    :host(${K}:not([disabled]):hover),
    :host(:not([slot='input']):focus-visible)::after {
      border-color: Highlight;
    }

    .indeterminate-indicator,
    .checked-indicator {
      color: HighlightText;
    }

    :host(${K}),
    :host(${Ut}) .indeterminate-indicator {
      background-color: FieldText;
    }

    :host(${K}:not([disabled]):hover),
    :host(${Ut}:not([disabled]):hover) .indeterminate-indicator {
      background-color: Highlight;
    }

    :host([disabled]) {
      border-color: GrayText;
    }

    :host([disabled]${Ut}) .indeterminate-indicator {
      background-color: GrayText;
    }

    :host([disabled]),
    :host([disabled]${K}) .checked-indicator {
      color: GrayText;
    }
  `)),wb=V.partial(`
    <svg
        fill="currentColor"
        aria-hidden="true"
        class="checked-indicator"
        width="1em"
        height="1em"
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg">
            <path d="M9.76 3.2c.3.29.32.76.04 1.06l-4.25 4.5a.75.75 0 0 1-1.08.02L2.22 6.53a.75.75 0 0 1 1.06-1.06l1.7 1.7L8.7 3.24a.75.75 0 0 1 1.06-.04Z" fill="currentColor"></path>
    </svg>
`),xb=V.partial(`
    <span class="indeterminate-indicator"></span>
`);function $b(n={}){return V`
    <template
      tabindex="${e=>e.disabled?void 0:0}"
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @input="${(e,t)=>e.inputHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
      @keyup="${(e,t)=>e.keyupHandler(t.event)}"
    >
      <slot name="checked-indicator">${ot(n.checkedIndicator)}</slot>
      <slot name="indeterminate-indicator">${ot(n.indeterminateIndicator)}</slot>
    </template>
  `}const Cb=$b({checkedIndicator:wb,indeterminateIndicator:xb}),Sb=vi.compose({name:`${M.prefix}-checkbox`,template:Cb,styles:kb}),et={modal:"modal",nonModal:"non-modal",alert:"alert"};class fr extends pe{constructor(){super(...arguments),this.type=et.modal,this.emitBeforeToggle=()=>{this.$emit("beforetoggle",{oldState:this.dialog.open?"open":"closed",newState:this.dialog.open?"closed":"open"})},this.emitToggle=()=>{this.$emit("toggle",{oldState:this.dialog.open?"closed":"open",newState:this.dialog.open?"open":"closed"})}}show(){Jt.enqueue(()=>{this.emitBeforeToggle(),this.type===et.alert||this.type===et.modal?this.dialog.showModal():this.type===et.nonModal&&this.dialog.show(),this.emitToggle()})}hide(){this.emitBeforeToggle(),this.dialog.close(),this.emitToggle()}clickHandler(e){return e.preventDefault(),this.dialog.open&&this.type!==et.alert&&e.target===this.dialog&&this.hide(),!0}}m([ye],fr.prototype,"dialog",void 0);m([b({attribute:"aria-describedby"})],fr.prototype,"ariaDescribedby",void 0);m([b({attribute:"aria-labelledby"})],fr.prototype,"ariaLabelledby",void 0);m([b],fr.prototype,"type",void 0);const Eb=V`
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
    ${it("dialog")}
  >
    <slot></slot>
  </dialog>
`,Ab=N`
  @layer base {
    :host {
      --dialog-backdrop: ${Of};
      --dialog-starting-scale: 0.85;
    }

    ::backdrop {
      background: var(--dialog-backdrop, rgba(0, 0, 0, 0.4));
    }

    dialog {
      background: ${he};
      border-radius: ${dc};
      border: none;
      box-shadow: ${ym};
      color: ${Fe};
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
        transition-duration: ${Cm};
        transition-timing-function: ${gi};
        /* Set opacity to 0 when closed */
        opacity: 0;
      }
      ::backdrop {
        transition-timing-function: ${gc};
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
        transition-timing-function: ${fi};
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
`.withBehaviors(Ct(N`
    @layer base {
      dialog {
        border: ${Ie} solid ${st};
      }
    }
  `)),Tb=fr.compose({name:`${M.prefix}-dialog`,template:Eb,styles:Ab});class $c extends pe{constructor(){super(...arguments),this.noTitleAction=!1}}m([b({mode:"boolean",attribute:"no-title-action"})],$c.prototype,"noTitleAction",void 0);const Ib=V.partial(`
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
  </svg>`),Bb=V`
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
        ${it("defaultTitleAction")}
      >
        ${Ib}
      </fluent-button>
    </slot>
  </div>
  <div class="content" part="content"><slot></slot></div>
  <div class="actions" part="actions"><slot name="action"></slot></div>
`,Ob=N`
  ${ke("grid")}

  :host {
    background: ${he};
    box-sizing: border-box;
    gap: ${Mt};
    padding: ${Vn} ${wm};
    container: dialog-body / inline-size;
  }

  .title {
    box-sizing: border-box;
    align-items: flex-start;
    background: ${he};
    color: ${Fe};
    column-gap: 8px;
    display: flex;
    font-family: ${Oe};
    font-size: ${dr};
    font-weight: ${hr};
    inset-block-start: 0;
    justify-content: space-between;
    line-height: ${qo};
    margin-block-end: calc(${Mt} * -1);
    margin-block-start: calc(${Vn} * -1);
    padding-block-end: ${Mt};
    padding-block-start: ${Vn};
    position: sticky;
    z-index: 1;
  }

  .content {
    box-sizing: border-box;
    color: ${Fe};
    font-family: ${Oe};
    font-size: ${at};
    font-weight: ${Le};
    line-height: ${Nt};
    min-height: 32px;
  }

  .actions {
    box-sizing: border-box;
    background: ${he};
    display: flex;
    flex-direction: column;
    gap: ${Mt};
    inset-block-end: 0;
    margin-block-end: calc(${Vn} * -1);
    padding-block-end: ${Vn};
    padding-block-start: ${$m};
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
      margin-block-start: calc(${Mt} * -1);
      padding-block-start: ${Mt};
    }
  }
`,Mb=$c.compose({name:`${M.prefix}-dialog-body`,template:Bb,styles:Ob}),zb=N`
  ${kc}

  ::slotted(a) {
    position: absolute;
    inset: 0;
  }
`.withBehaviors(Ct(N`
    :host {
      border-color: LinkText;
      color: LinkText;
    }
  `));function Lb(n={}){return V`
    <template
      tabindex="0"
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
    >
      ${Bn(n)}
      <span class="content" part="content">
        <slot></slot>
      </span>
      ${sr(n)}
    </template>
  `}const Pb=Lb(),Fb=Mn.compose({name:`${M.prefix}-anchor-button`,template:Pb,styles:zb}),Nb={multiline:"multiline",singleline:"singleline"},Db={rounded:"rounded",square:"square"},_b={success:"success",warning:"warning",error:"error",info:"info"};class yi extends pe{constructor(){super(),this.elementInternals=this.attachInternals(),this.dismissMessageBar=()=>{this.$emit("dismiss",{})},this.elementInternals.role="status"}shapeChanged(e,t){j(this.elementInternals,e,t,Db)}layoutChanged(e,t){j(this.elementInternals,e,t,Nb)}intentChanged(e,t){j(this.elementInternals,e,t,_b)}}m([b],yi.prototype,"shape",void 0);m([b],yi.prototype,"layout",void 0);m([b],yi.prototype,"intent",void 0);const Rb=N`
  :host {
    display: grid;
    box-sizing: border-box;
    font-family: ${Oe};
    font-size: ${We};
    line-height: ${lt};
    width: 100%;
    background: ${Xr};
    border: 1px solid ${$n};
    padding-inline: ${vt};
    border-radius: ${oe};
    min-height: 36px;
    align-items: center;
    grid-template: 'icon body actions dismiss' / auto 1fr auto auto;
    contain: layout style paint;
  }

  :host(${Gr}) {
    border-radius: 0;
  }

  :host(${lr}) {
    background-color: ${oc};
    border-color: ${qf};
  }

  :host(${cr}) {
    background-color: ${sc};
    border-color: ${ac};
  }

  :host(${Sp}) {
    background-color: ${nc};
    border-color: ${rc};
  }

  :host(${Rn}) {
    grid-template-areas:
      'icon body dismiss'
      'actions actions actions';
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto 1fr;
    padding-block: ${Oi};
    padding-inline: ${vt};
  }

  .content {
    grid-area: body;
    max-width: 520px;
    padding-block: ${Oi};
    padding-inline: 0;
  }

  :host(${Rn}) .content {
    padding: 0;
  }

  ::slotted([slot='icon']) {
    display: flex;
    grid-area: icon;
    flex-direction: column;
    align-items: center;
    color: ${Ne};
    margin-inline-end: ${Ft};
  }

  :host(${Rn}) ::slotted([slot='icon']) {
    align-items: start;
    height: 100%;
  }

  ::slotted([slot='dismiss']) {
    grid-area: dismiss;
  }

  .actions {
    grid-area: actions;
    display: flex;
    justify-self: end;
    margin-inline-end: ${Ft};
    gap: ${Ft};
  }

  :host(${Rn}) .actions {
    margin-block-start: ${Oi};
    margin-inline-end: 0;
  }

  :host(${Rn}) ::slotted([slot='dismiss']) {
    align-items: start;
    height: 100%;
    padding-block-start: ${Mt};
  }

  ::slotted(*) {
    font-size: inherit;
  }
`;function Vb(){return V`
    <slot name="icon"></slot>
    <div class="content">
      <slot></slot>
    </div>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
    <slot name="dismiss"></slot>
  `}const Hb=Vb(),jb=yi.compose({name:`${M.prefix}-message-bar`,template:Hb,styles:Rb,shadowOptions:{mode:M.shadowRootMode}});class qb extends sn{}const Ub=xc({end:V.partial(`
    <svg slot="end" fill="currentColor" aria-hidden="true" width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.85 7.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 8.35a.5.5 0 1 1 .7-.7L10 12.8l5.15-5.16c.2-.2.5-.2.7 0Z" fill="currentColor"></path>
    </svg>
  `)}),Kb=qb.compose({name:`${M.prefix}-menu-button`,template:Ub,styles:wc}),ue={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"};ue.menuitem+"",ue.menuitemcheckbox+"",ue.menuitemradio+"";const Wb=()=>n=>n.nodeType===1&&n.elementInternals.role==="menu";class Ge extends pe{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.role=ue.menuitem,this.checked=!1,this.handleMenuItemKeyDown=e=>{var t,r,i,o;if(e.defaultPrevented)return!1;switch(e.key){case li:case Fo:return this.invoke(),!1;case ep:return this.disabled||((t=this.submenu)===null||t===void 0||t.togglePopover(!0),(r=this.submenu)===null||r===void 0||r.focus()),!1;case Jh:return!((i=this.parentElement)===null||i===void 0)&&i.hasAttribute("popover")&&(this.parentElement.togglePopover(!1),(o=this.parentElement.parentElement)===null||o===void 0||o.focus()),!1}return!0},this.handleMenuItemClick=e=>(e.defaultPrevented||this.disabled||this.invoke(),!1),this.handleMouseOver=e=>{var t;return this.disabled||(t=this.submenu)===null||t===void 0||t.togglePopover(!0),!1},this.handleMouseOut=e=>{var t;return this.contains(document.activeElement)||(t=this.submenu)===null||t===void 0||t.togglePopover(!1),!1},this.toggleHandler=e=>{e instanceof ToggleEvent&&e.newState==="open"&&(this.setAttribute("tabindex","-1"),this.elementInternals.ariaExpanded="true",this.setSubmenuPosition()),e instanceof ToggleEvent&&e.newState==="closed"&&(this.elementInternals.ariaExpanded="false",this.setAttribute("tabindex","0"))},this.invoke=()=>{if(!this.disabled)switch(this.role){case ue.menuitemcheckbox:this.checked=!this.checked;break;case ue.menuitem:if(this.submenu){this.submenu.togglePopover(!0),this.submenu.focus();break}this.$emit("change");break;case ue.menuitemradio:this.checked||(this.checked=!0);break}},this.setSubmenuPosition=()=>{if(!CSS.supports("anchor-name","--anchor")&&this.submenu){const e=this.getBoundingClientRect(),t=this.submenu.getBoundingClientRect(),r=getComputedStyle(this).direction==="ltr"?"right":"left";if(e.width+t.width>window.innerWidth*.75){this.submenu.style.translate="0 -100%";return}if(e[r]+t.width>window.innerWidth){this.submenu.style.translate="-100% 0";return}this.submenu.style.translate=`${e.width-8}px 0`}}}disabledChanged(e,t){this.elementInternals.ariaDisabled=t?`${t}`:null,J(this.elementInternals,"disabled",t)}roleChanged(e,t){this.elementInternals.role=t??ue.menuitem}checkedChanged(e,t){const r=this.role!==ue.menuitem;this.elementInternals.ariaChecked=r?`${!!t}`:null,J(this.elementInternals,"checked",r?t:!1),this.$fastController.isConnected&&this.$emit("change",t,{bubbles:!0})}slottedSubmenuChanged(e,t){var r;(r=this.submenu)===null||r===void 0||r.removeEventListener("toggle",this.toggleHandler),t.length?(this.submenu=t[0],this.submenu.toggleAttribute("popover",!0),this.submenu.addEventListener("toggle",this.toggleHandler),this.elementInternals.ariaHasPopup="menu",J(this.elementInternals,"submenu",!0)):(this.elementInternals.ariaHasPopup=null,J(this.elementInternals,"submenu",!1))}connectedCallback(){var e;super.connectedCallback(),this.elementInternals.role=(e=this.role)!==null&&e!==void 0?e:ue.menuitem,this.elementInternals.ariaChecked=this.role!==ue.menuitem?`${!!this.checked}`:null}}m([b({mode:"boolean"})],Ge.prototype,"disabled",void 0);m([b],Ge.prototype,"role",void 0);m([b({mode:"boolean"})],Ge.prototype,"checked",void 0);m([b({mode:"boolean"})],Ge.prototype,"hidden",void 0);m([ye],Ge.prototype,"slottedSubmenu",void 0);m([ye],Ge.prototype,"submenu",void 0);On(Ge,In);const Gb=N`
  ${ke("grid")}

  :host {
    --indent: 0;
    align-items: center;
    background: ${he};
    border-radius: ${oe};
    color: ${to};
    contain: layout;
    cursor: pointer;
    /* Prevent shrinking of MenuItems when max-height is applied to MenuList */
    flex-shrink: 0;
    font: ${Le} ${at} / ${Nt} ${Oe};
    grid-gap: 4px;
    grid-template-columns: 20px 20px auto 20px;
    height: 32px;
    overflow: visible;
    padding: 0 10px;
  }

  :host(:hover) {
    background: ${Zl};
    color: ${Kl};
  }

  :host(:active) {
    background-color: ${Cf};
    color: ${Wl};
  }

  :host(:active) ::slotted([slot='start']) {
    color: ${vf};
  }

  :host(${Ot}) {
    background-color: ${pi};
    color: ${$t};
  }

  :host(${Ot}) ::slotted([slot='start']),
  :host(${Ot}) ::slotted([slot='end']) {
    color: ${$t};
  }

  :host(:focus-visible) {
    border-radius: ${oe};
    outline: 2px solid ${Cn};
  }

  .content {
    white-space: nowrap;
    flex-grow: 1;
    grid-column: auto / span 2;
    padding: 0 2px;
  }

  :host(:not(${K})) .indicator,
  :host(:not(${K})) ::slotted([slot='indicator']),
  :host(:not(${wr})) .submenu-glyph,
  :host(:not(${wr})) ::slotted([slot='submenu-glyph']) {
    display: none;
  }

  ::slotted([slot='end']) {
    color: ${Ne};
    font: ${Le} ${We} / ${lt} ${Oe};
    white-space: nowrap;
  }

  :host([data-indent='1']) {
    --indent: 1;
  }

  :host([data-indent='2']) {
    --indent: 2;
    grid-template-columns: 20px 20px auto auto;
  }

  :host(${wr}) {
    grid-template-columns: 20px auto auto 20px;
  }

  :host([data-indent='2']${wr}) {
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
`.withBehaviors(Ct(N`
    :host(${Ot}),
    :host(${Ot}) ::slotted([slot='start']),
    :host(${Ot}) ::slotted([slot='end']) {
      color: GrayText;
    }
  `)),Qb=V.partial('<svg class="indicator" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.05 3.49c.28.3.27.77-.04 1.06l-7.93 7.47A.85.85 0 014.9 12L2.22 9.28a.75.75 0 111.06-1.06l2.24 2.27 7.47-7.04a.75.75 0 011.06.04z" fill="currentColor"></path></svg>'),Xb=V.partial('<svg class="submenu-glyph" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.74 3.2a.75.75 0 00-.04 1.06L9.23 8 5.7 11.74a.75.75 0 101.1 1.02l4-4.25a.75.75 0 000-1.02l-4-4.25a.75.75 0 00-1.06-.04z" fill="currentColor"></path></svg>');function Zb(n={}){return V`
    <template
      @keydown="${(e,t)=>e.handleMenuItemKeyDown(t.event)}"
      @click="${(e,t)=>e.handleMenuItemClick(t.event)}"
      @mouseover="${(e,t)=>e.handleMouseOver(t.event)}"
      @mouseout="${(e,t)=>e.handleMouseOut(t.event)}"
      @toggle="${(e,t)=>e.toggleHandler(t.event)}"
    >
      <slot name="indicator"> ${ot(n.indicator)} </slot>
      ${Bn(n)}
      <div part="content" class="content">
        <slot></slot>
      </div>
      ${sr(n)}
      <slot name="submenu-glyph"> ${ot(n.submenuGlyph)} </slot>
      <slot name="submenu" ${xt({property:"slottedSubmenu",filter:Wb()})}></slot>
    </template>
  `}const Yb=Zb({indicator:Qb,submenuGlyph:Xb}),Jb=Ge.compose({name:`${M.prefix}-menu-item`,template:Yb,styles:Gb});class An extends pe{itemsChanged(e,t){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}constructor(){super(),this.elementInternals=this.attachInternals(),this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&na(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=e=>{if(!this.contains(e.relatedTarget)&&this.menuItems!==void 0){const t=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[t].setAttribute("tabindex","0"),this.focusIndex=t}},this.handleItemFocus=e=>{const t=e.target;this.menuItems!==void 0&&t!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(t),t.setAttribute("tabindex","0"))},this.changedMenuItemHandler=e=>{if(this.menuItems===void 0)return;const t=e.target,r=this.menuItems.indexOf(t);if(r!==-1&&t.role==="menuitemradio"&&t.checked===!0){for(let o=r-1;o>=0;--o){const s=this.menuItems[o],a=s.getAttribute("role");if(a===ue.menuitemradio&&(s.checked=!1),a==="separator")break}const i=this.menuItems.length-1;for(let o=r+1;o<=i;++o){const s=this.menuItems[o],a=s.getAttribute("role");if(a===ue.menuitemradio&&(s.checked=!1),a==="separator")break}}},this.isMenuItemElement=e=>e instanceof Ge||na(e)&&e.getAttribute("role")in An.focusableElementRoles,this.isFocusableElement=e=>this.isMenuItemElement(e),this.elementInternals.role="menu"}connectedCallback(){super.connectedCallback(),Jt.enqueue(()=>{this.setItems()}),this.addEventListener("change",this.changedMenuItemHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changedMenuItemHandler)}focus(){this.setFocus(0,1)}handleMenuKeyDown(e){if(!(e.defaultPrevented||this.menuItems===void 0))switch(e.key){case Yh:this.setFocus(this.focusIndex+1,1);return;case tp:this.setFocus(this.focusIndex-1,-1);return;case np:this.setFocus(this.menuItems.length-1,-1);return;case ip:this.setFocus(0,1);return;default:return!0}}removeItemListeners(e=this.items){e.forEach(t=>{t.removeEventListener("focus",this.handleItemFocus),z.getNotifier(t).unsubscribe(this,"hidden")})}static elementIndent(e){const t=e.getAttribute("role"),r=e.querySelector("[slot=start]");return t&&t!==ue.menuitem?r?2:1:r?1:0}setItems(){var e;const t=Array.from(this.children);this.removeItemListeners(t),t.forEach(a=>z.getNotifier(a).subscribe(this,"hidden"));const r=t.filter(a=>!a.hasAttribute("hidden"));this.menuItems=r;const i=this.menuItems.filter(this.isMenuItemElement);i.length&&(this.focusIndex=0),i.forEach((a,l)=>{a.setAttribute("tabindex",l===0?"0":"-1"),a.addEventListener("focus",this.handleItemFocus)});const o=(e=this.menuItems)===null||e===void 0?void 0:e.filter(this.isMenuItemElement),s=o==null?void 0:o.reduce((a,l)=>{const c=An.elementIndent(l);return Math.max(a,c)},0);o==null||o.forEach(a=>{a instanceof Ge&&a.setAttribute("data-indent",`${s}`)})}handleChange(e,t){t==="hidden"&&this.setItems()}setFocus(e,t){if(this.menuItems!==void 0)for(;e>=0&&e<this.menuItems.length;){const r=this.menuItems[e];if(this.isFocusableElement(r)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=e,r.setAttribute("tabindex","0"),r.focus();break}e+=t}}}An.focusableElementRoles=ue;m([ye],An.prototype,"items",void 0);function ev(){return V`
    <template
      slot="${n=>n.slot?n.slot:n.isNestedMenu()?"submenu":void 0}"
      @keydown="${(n,e)=>n.handleMenuKeyDown(e.event)}"
      @focusout="${(n,e)=>n.handleFocusOut(e.event)}"
    >
      <slot ${xt("items")}></slot>
    </template>
  `}const tv=ev(),nv=N`
  ${ke("flex")}

  :host {
    flex-direction: column;
    height: fit-content;
    max-width: 300px;
    min-width: 160px;
    width: auto;
    background-color: ${he};
    border: 1px solid ${st};
    border-radius: ${oe};
    box-shadow: ${pc};
    padding: 4px;
    row-gap: 2px;
  }
`,rv=An.compose({name:`${M.prefix}-menu-list`,template:tv,styles:nv});class Et extends pe{constructor(){super(...arguments),this.slottedMenuList=[],this.slottedTriggers=[],this._open=!1,this.toggleMenu=()=>{var e;(e=this._menuList)===null||e===void 0||e.togglePopover(!this._open)},this.closeMenu=e=>{var t;(e==null?void 0:e.target)instanceof Ge&&(e.target.getAttribute("role")===ue.menuitemcheckbox||e.target.getAttribute("role")===ue.menuitemradio)||((t=this._menuList)===null||t===void 0||t.togglePopover(!1),this.closeOnScroll&&document.removeEventListener("scroll",this.closeMenu))},this.openMenu=e=>{var t;(t=this._menuList)===null||t===void 0||t.togglePopover(!0),e&&this.openOnContext&&e.preventDefault(),this.closeOnScroll&&document.addEventListener("scroll",this.closeMenu)},this.toggleHandler=e=>{var t;if(e.type==="toggle"&&e.newState){const r=e.newState==="open";(t=this._trigger)===null||t===void 0||t.setAttribute("aria-expanded",`${r}`),this._open=r,this.focusMenuList()}},this.triggerKeydownHandler=e=>{if(e.defaultPrevented)return;switch(e.key){case Fo:case li:e.preventDefault(),this.toggleMenu();break;default:return!0}},this.documentClickHandler=e=>{e.composedPath().some(t=>t===this._trigger||t===this._menuList)||this.closeMenu()}}connectedCallback(){super.connectedCallback(),Jt.enqueue(()=>this.setComponent())}disconnectedCallback(){super.disconnectedCallback(),this.removeListeners()}setComponent(){this.$fastController.isConnected&&this.slottedMenuList.length&&this.slottedTriggers.length&&(this._trigger=this.slottedTriggers[0],this._menuList=this.slottedMenuList[0],this._trigger.setAttribute("aria-haspopup","true"),this._trigger.setAttribute("aria-expanded",`${this._open}`),this._menuList.setAttribute("popover",this.openOnContext?"manual":""),this.addListeners())}focusMenuList(){Jt.enqueue(()=>{this._menuList.focus()})}focusTrigger(){Jt.enqueue(()=>{this._trigger.focus()})}openOnHoverChanged(e,t){var r,i;t?(r=this._trigger)===null||r===void 0||r.addEventListener("mouseover",this.openMenu):(i=this._trigger)===null||i===void 0||i.removeEventListener("mouseover",this.openMenu)}persistOnItemClickChanged(e,t){var r,i;t?(i=this._menuList)===null||i===void 0||i.removeEventListener("change",this.closeMenu):(r=this._menuList)===null||r===void 0||r.addEventListener("change",this.closeMenu)}openOnContextChanged(e,t){var r,i;t?(r=this._trigger)===null||r===void 0||r.addEventListener("contextmenu",this.openMenu):(i=this._trigger)===null||i===void 0||i.removeEventListener("contextmenu",this.openMenu)}closeOnScrollChanged(e,t){t?document.addEventListener("scroll",this.closeMenu):document.removeEventListener("scroll",this.closeMenu)}addListeners(){var e,t,r,i,o,s;(e=this._menuList)===null||e===void 0||e.addEventListener("toggle",this.toggleHandler),(t=this._trigger)===null||t===void 0||t.addEventListener("keydown",this.triggerKeydownHandler),this.persistOnItemClick||(r=this._menuList)===null||r===void 0||r.addEventListener("change",this.closeMenu),this.openOnHover?(i=this._trigger)===null||i===void 0||i.addEventListener("mouseover",this.openMenu):this.openOnContext?((o=this._trigger)===null||o===void 0||o.addEventListener("contextmenu",this.openMenu),document.addEventListener("click",this.documentClickHandler)):(s=this._trigger)===null||s===void 0||s.addEventListener("click",this.toggleMenu)}removeListeners(){var e,t,r,i,o,s;(e=this._menuList)===null||e===void 0||e.removeEventListener("toggle",this.toggleHandler),(t=this._trigger)===null||t===void 0||t.removeEventListener("keydown",this.triggerKeydownHandler),this.persistOnItemClick||(r=this._menuList)===null||r===void 0||r.removeEventListener("change",this.closeMenu),this.openOnHover&&((i=this._trigger)===null||i===void 0||i.removeEventListener("mouseover",this.openMenu)),this.openOnContext?((o=this._trigger)===null||o===void 0||o.removeEventListener("contextmenu",this.openMenu),document.removeEventListener("click",this.documentClickHandler)):(s=this._trigger)===null||s===void 0||s.removeEventListener("click",this.toggleMenu)}menuKeydownHandler(e){if(e.defaultPrevented)return;switch(e.key){case rp:e.preventDefault(),this._open&&(this.closeMenu(),this.focusTrigger());break;case op:if(this._open&&this.closeMenu(),e.shiftKey&&e.composedPath()[0]!==this._trigger&&e.composedPath()[0].assignedSlot!==this.primaryAction)this.focusTrigger();else if(e.shiftKey)return!0;default:return!0}}}m([b({attribute:"open-on-hover",mode:"boolean"})],Et.prototype,"openOnHover",void 0);m([b({attribute:"open-on-context",mode:"boolean"})],Et.prototype,"openOnContext",void 0);m([b({attribute:"close-on-scroll",mode:"boolean"})],Et.prototype,"closeOnScroll",void 0);m([b({attribute:"persist-on-item-click",mode:"boolean"})],Et.prototype,"persistOnItemClick",void 0);m([b({mode:"boolean"})],Et.prototype,"split",void 0);m([ye],Et.prototype,"slottedMenuList",void 0);m([ye],Et.prototype,"slottedTriggers",void 0);m([ye],Et.prototype,"primaryAction",void 0);function iv(){return V`
    <template
      ?open-on-hover="${n=>n.openOnHover}"
      ?open-on-context="${n=>n.openOnContext}"
      ?close-on-scroll="${n=>n.closeOnScroll}"
      ?persist-on-item-click="${n=>n.persistOnItemClick}"
      @keydown="${(n,e)=>n.menuKeydownHandler(e.event)}"
    >
      <slot name="primary-action" ${it("primaryAction")}></slot>
      <slot name="trigger" ${xt({property:"slottedTriggers",filter:Ji()})}></slot>
      <slot ${xt({property:"slottedMenuList",filter:Ji()})}></slot>
    </template>
  `}const ov=iv(),sv=N`
  ${ke("inline-block")}

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
    border-inline-end: ${Ie} solid ${$n};
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  /* Keeps focus visible visuals above trigger slot*/
  :host([split]) ::slotted([slot='primary-action']:focus-visible) {
    z-index: 1;
  }

  :host([split]) ::slotted([slot='primary-action'][appearance='primary']) {
    border-inline-end: ${Ie} solid white;
  }

  :host([split]) ::slotted([slot='trigger']) {
    border-inline-start: 0;
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }
`,av=Et.compose({name:`${M.prefix}-menu`,template:ov,styles:sv}),lv={primary:"primary",inverted:"inverted"},cv={tiny:"tiny",extraSmall:"extra-small",small:"small",medium:"medium",large:"large",extraLarge:"extra-large",huge:"huge"};class uv extends pe{constructor(){super(),this.elementInternals=this.attachInternals(),this.elementInternals.role="progressbar"}}class Qo extends uv{sizeChanged(e,t){j(this.elementInternals,e,t,cv)}appearanceChanged(e,t){j(this.elementInternals,e,t,lv)}}m([b],Qo.prototype,"size",void 0);m([b],Qo.prototype,"appearance",void 0);const dv=V`
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
`,hv=N`
  ${ke("inline-flex")}

  :host {
    --duration: 1.5s;
    --indicatorSize: ${Kn};
    --size: 32px;
    height: var(--size);
    width: var(--size);
    contain: strict;
    content-visibility: auto;
  }

  :host(${Qr}) {
    --indicatorSize: ${kt};
    --size: 20px;
  }
  :host(${Wr}) {
    --indicatorSize: ${kt};
    --size: 24px;
  }
  :host(${ze}) {
    --indicatorSize: ${kt};
    --size: 28px;
  }
  :host(${ve}) {
    --indicatorSize: ${Kn};
    --size: 36px;
  }
  :host(${Kr}) {
    --indicatorSize: ${Kn};
    --size: 40px;
  }
  :host(${Ip}) {
    --indicatorSize: ${ao};
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
    animation: none var(--duration) infinite ${mi};
  }

  .progress {
    animation-timing-function: linear;
    animation-name: spin-linear;
  }

  .background {
    border: var(--indicatorSize) solid ${ec};
    border-radius: 50%;
  }

  :host(${sa}) .background {
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
    color: ${Ff};
    box-sizing: border-box;
    border-radius: 50%;
    border: var(--indicatorSize) solid transparent;
    border-block-start-color: currentcolor;
    border-inline-end-color: currentcolor;
  }

  :host(${sa}) .indicator {
    color: ${Pf};
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
`.withBehaviors(Ct(N`
    .background {
      display: none;
    }
    .indicator {
      border-color: Canvas;
      border-block-start-color: Highlight;
      border-inline-end-color: Highlight;
    }
  `)),pv=Qo.compose({name:`${M.prefix}-spinner`,template:dv,styles:hv});class fv extends Qe{constructor(){super(),this.elementInternals.role="switch"}}function gv(n={}){return V`
    <template
      tabindex="${e=>e.disabled?void 0:0}"
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @input="${(e,t)=>e.inputHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
      @keyup="${(e,t)=>e.keyupHandler(t.event)}"
    >
      <slot name="switch">${ot(n.switch)}</slot>
    </template>
  `}const mv=gv({switch:'<span class="checked-indicator" part="checked-indicator"></span>'}),bv=N`
  ${ke("inline-flex")}

  :host {
    box-sizing: border-box;
    align-items: center;
    flex-direction: row;
    outline: none;
    user-select: none;
    contain: content;
    padding: 0 ${Pe};
    width: 40px;
    height: 20px;
    background-color: ${Ue};
    border: 1px solid ${xn};
    border-radius: ${Sn};
    cursor: pointer;
  }

  :host(:hover) {
    background: none;
    border-color: ${Jn};
  }
  :host(:active) {
    border-color: ${er};
  }
  :host(:disabled),
  :host([readonly]) {
    border: 1px solid ${yt};
    background-color: none;
    pointer: default;
  }
  :host(${K}) {
    background: ${no};
    border-color: ${no};
  }
  :host(${K}:hover) {
    background: ${ro};
    border-color: ${ro};
  }
  :host(${K}:active) {
    background: ${io};
    border-color: ${io};
  }
  :host(${K}:disabled) {
    background: ${pi};
    border-color: ${yt};
  }
  .checked-indicator {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    margin-inline-start: 0;
    background-color: ${Ne};
    transition-duration: ${Wo};
    transition-timing-function: ${mi};
    transition-property: margin-inline-start;
  }
  :host(${K}) .checked-indicator {
    background-color: ${ur};
    margin-inline-start: calc(100% - 14px);
  }
  :host(${K}:hover) .checked-indicator {
    background: ${yf};
  }
  :host(${K}:active) .checked-indicator {
    background: ${kf};
  }
  :host(:hover) .checked-indicator {
    background-color: ${mf};
  }
  :host(:active) .checked-indicator {
    background-color: ${bf};
  }
  :host(:disabled) .checked-indicator,
  :host([readonly]) .checked-indicator {
    background: ${$t};
  }
  :host(${K}:disabled) .checked-indicator {
    background: ${$t};
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:not([slot='input']):focus-visible) {
    border-color: ${st};
    outline: ${kt} solid ${st};
    box-shadow: ${Ko}, 0 0 0 2px ${Cn};
  }
`.withBehaviors(Ct(N`
    :host {
      border-color: InactiveBorder;
    }
    :host(${K}),
    :host(${K}:active),
    :host(${K}:hover) {
      background: Highlight;
      border-color: Highlight;
    }
    .checked-indicator,
    :host(:hover) .checked-indicator,
    :host(:active) .checked-indicator {
      background-color: ActiveCaption;
    }
    :host(${K}) .checked-indicator,
    :host(${K}:hover) .checked-indicator,
    :host(${K}:active) .checked-indicator {
      background-color: ButtonFace;
    }
  `)),vv=fv.compose({name:`${M.prefix}-switch`,template:mv,styles:bv}),yv={small:"small",medium:"medium",large:"large"},Wn={outline:"outline",filledLighter:"filled-lighter",filledDarker:"filled-darker"},kv=[Wn.filledLighter,Wn.filledDarker],Cr={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};class se extends pe{defaultSlottedNodesChanged(){const e=this.getContent();this.defaultValue=e,this.value=e}labelSlottedNodesChanged(){this.labelEl&&(this.labelEl.hidden=!this.labelSlottedNodes.length),this.labelSlottedNodes.forEach(e=>{e.disabled=this.disabled,e.required=this.required})}autoResizeChanged(){this.maybeCreateAutoSizerEl(),J(this.elementInternals,"auto-resize",this.autoResize)}disabledChanged(){this.setDisabledSideEffect(this.disabled)}get form(){return this.elementInternals.form}get labels(){return this.elementInternals.labels}readOnlyChanged(){this.elementInternals.ariaReadOnly=`${!!this.readOnly}`}requiredChanged(){var e;this.elementInternals.ariaRequired=`${!!this.required}`,!((e=this.labelSlottedNodes)===null||e===void 0)&&e.length&&this.labelSlottedNodes.forEach(t=>t.required=this.required)}resizeChanged(e,t){j(this.elementInternals,e,t,Cr,"resize-"),J(this.elementInternals,"resize",No(Cr,t)&&t!==Cr.none)}get textLength(){return this.controlEl.textLength}get type(){return"textarea"}get validity(){return this.elementInternals.validity}get validationMessage(){return this.elementInternals.validationMessage||this.controlEl.validationMessage}get willValidate(){return this.elementInternals.willValidate}get defaultValue(){var e,t;return(t=(e=this.controlEl)===null||e===void 0?void 0:e.defaultValue)!==null&&t!==void 0?t:this.preConnectControlEl.defaultValue}set defaultValue(e){var t;const r=(t=this.controlEl)!==null&&t!==void 0?t:this.preConnectControlEl;r.defaultValue=e,this.controlEl&&!this.userInteracted&&(this.controlEl.value=e)}get value(){var e,t;return(t=(e=this.controlEl)===null||e===void 0?void 0:e.value)!==null&&t!==void 0?t:this.preConnectControlEl.value}set value(e){var t;const r=(t=this.controlEl)!==null&&t!==void 0?t:this.preConnectControlEl;r.value=e,this.setFormValue(e),this.setValidity()}constructor(){super(),this.elementInternals=this.attachInternals(),this.userInteracted=!1,this.preConnectControlEl=document.createElement("textarea"),this.autoResize=!1,this.disabled=!1,this.displayShadow=!1,this.readOnly=!1,this.required=!1,this.resize=Cr.none,this.spellcheck=!1}connectedCallback(){super.connectedCallback(),this.setDefaultValue(),this.maybeCreateAutoSizerEl(),this.bindEvents(),this.observeControlElAttrs()}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.autoSizerObserver)===null||e===void 0||e.disconnect(),(t=this.controlElAttrObserver)===null||t===void 0||t.disconnect()}formResetCallback(){this.value=this.defaultValue}formDisabledCallback(e){this.setDisabledSideEffect(e),this.setValidity()}setFormValue(e,t){this.elementInternals.setFormValue(e,e??t)}checkValidity(){return this.elementInternals.checkValidity()}reportValidity(){return this.elementInternals.reportValidity()}setCustomValidity(e){this.elementInternals.setValidity({customError:!!e},e?e.toString():void 0),this.reportValidity()}setValidity(e,t,r){this.$fastController.isConnected&&(this.disabled||this.readOnly?this.elementInternals.setValidity({}):this.elementInternals.setValidity(e??this.controlEl.validity,t??this.controlEl.validationMessage,r??this.controlEl),this.userInteracted&&this.toggleUserValidityState())}select(){this.controlEl.select()}setDefaultValue(){this.defaultValue=this.innerHTML.trim()||this.preConnectControlEl.defaultValue||"",this.value=this.preConnectControlEl.value||this.defaultValue,this.setFormValue(this.value),this.setValidity(),this.preConnectControlEl=null}bindEvents(){this.controlEl.addEventListener("input",()=>this.userInteracted=!0,{once:!0})}getContent(){return this.defaultSlottedNodes.map(e=>{switch(e.nodeType){case Node.ELEMENT_NODE:return e.outerHTML;case Node.TEXT_NODE:return e.textContent.trim();default:return""}}).join("")||""}observeControlElAttrs(){this.controlElAttrObserver=new MutationObserver(()=>{this.setValidity()}),this.controlElAttrObserver.observe(this.controlEl,{attributes:!0,attributeFilter:["disabled","required","readonly","maxlength","minlength"]})}setDisabledSideEffect(e){var t;this.elementInternals.ariaDisabled=`${e}`,this.controlEl&&(this.controlEl.disabled=e),!((t=this.labelSlottedNodes)===null||t===void 0)&&t.length&&this.labelSlottedNodes.forEach(r=>r.disabled=this.disabled)}toggleUserValidityState(){J(this.elementInternals,"user-invalid",!this.validity.valid),J(this.elementInternals,"user-valid",this.validity.valid)}maybeCreateAutoSizerEl(){var e,t;if(!CSS.supports("field-sizing: content")){if(!this.autoResize){(e=this.autoSizerEl)===null||e===void 0||e.remove(),(t=this.autoSizerObserver)===null||t===void 0||t.disconnect();return}this.autoSizerEl||(this.autoSizerEl=document.createElement("div"),this.autoSizerEl.classList.add("auto-sizer"),this.autoSizerEl.ariaHidden="true"),this.shadowRoot.prepend(this.autoSizerEl),this.autoSizerObserver||(this.autoSizerObserver=new ResizeObserver((r,i)=>{var o;const s=window.getComputedStyle(this).writingMode.startsWith("horizontal")?"height":"width";this.style.getPropertyValue(s)!==""&&((o=this.autoSizerEl)===null||o===void 0||o.remove(),i.disconnect())})),this.autoSizerObserver.observe(this)}}handleControlInput(){this.autoResize&&this.autoSizerEl&&(this.autoSizerEl.textContent=this.value+" "),this.setFormValue(this.value),this.setValidity()}handleControlChange(){this.toggleUserValidityState(),this.$emit("change")}handleControlSelect(){this.$emit("select")}}se.formAssociated=!0;m([ye],se.prototype,"defaultSlottedNodes",void 0);m([ye],se.prototype,"labelSlottedNodes",void 0);m([b],se.prototype,"autocomplete",void 0);m([b({attribute:"auto-resize",mode:"boolean"})],se.prototype,"autoResize",void 0);m([b({attribute:"dirname"})],se.prototype,"dirName",void 0);m([b({mode:"boolean"})],se.prototype,"disabled",void 0);m([b({attribute:"display-shadow",mode:"boolean"})],se.prototype,"displayShadow",void 0);m([b({attribute:"form"})],se.prototype,"initialForm",void 0);m([b({attribute:"maxlength",converter:_t})],se.prototype,"maxLength",void 0);m([b({attribute:"minlength",converter:_t})],se.prototype,"minLength",void 0);m([b],se.prototype,"name",void 0);m([b],se.prototype,"placeholder",void 0);m([b({attribute:"readonly",mode:"boolean"})],se.prototype,"readOnly",void 0);m([b({mode:"boolean"})],se.prototype,"required",void 0);m([b({mode:"fromView"})],se.prototype,"resize",void 0);m([b({mode:"boolean"})],se.prototype,"spellcheck",void 0);class ki extends se{constructor(){super(...arguments),this.appearance=Wn.outline,this.block=!1}labelSlottedNodesChanged(){super.labelSlottedNodesChanged(),this.labelSlottedNodes.forEach(e=>{e.size=this.size})}appearanceChanged(e,t){J(this.elementInternals,e,!1),No(Wn,t)?J(this.elementInternals,t,!0):this.appearance=Wn.outline}blockChanged(){J(this.elementInternals,"block",this.block)}sizeChanged(e,t){j(this.elementInternals,e,t,yv)}handleChange(e,t){switch(t){case"size":this.labelSlottedNodes.forEach(r=>{r.size=this.size});break;case"appearance":case"displayShadow":this.maybeDisplayShadow();break}}connectedCallback(){super.connectedCallback(),this.maybeDisplayShadow(),z.getNotifier(this).subscribe(this,"appearance"),z.getNotifier(this).subscribe(this,"displayShadow"),z.getNotifier(this).subscribe(this,"size")}disconnectedCallback(){super.disconnectedCallback(),z.getNotifier(this).unsubscribe(this,"appearance"),z.getNotifier(this).unsubscribe(this,"displayShadow"),z.getNotifier(this).unsubscribe(this,"size")}maybeDisplayShadow(){J(this.elementInternals,"display-shadow",this.displayShadow&&kv.includes(this.appearance))}}m([b({mode:"fromView"})],ki.prototype,"appearance",void 0);m([b({mode:"boolean"})],ki.prototype,"block",void 0);m([b],ki.prototype,"size",void 0);const wv=N`
  ${ke("inline-block")}

  :host {
    /* typography */
    --font-size: ${at};
    --line-height: ${Nt};

    /* layout */
    --padding-inline: ${Zr};
    --padding-block: ${xm};
    --min-block-size: 52px;
    --block-size: var(--min-block-size);
    --inline-size: 18rem;
    --border-width: ${Ie};
    --control-padding-inline: ${Pe};

    /* colors */
    --color: ${Fe};
    --background-color: ${he};
    --border-color: ${$n};
    --border-block-end-color: ${xn};
    --placeholder-color: ${Gl};
    --focus-indicator-color: ${Ro};

    /* elevations */
    --box-shadow: none;

    /* others */
    --contain-size: size;
    --resize: none;

    color: var(--color);
    font-family: ${Oe};
    font-size: var(--font-size);
    font-weight: ${Le};
    line-height: var(--line-height);
    position: relative;
  }

  :host(:hover) {
    --border-color: ${Do};
    --border-block-end-color: ${Jn};
  }

  :host(:active) {
    --border-color: ${_o};
    --border-block-end-color: ${er};
  }

  :host(:focus-within) {
    outline: none;
  }

  :host(${qr}:not([hidden])) {
    display: block;
  }

  :host(${ze}) {
    --font-size: ${We};
    --line-height: ${lt};
    --min-block-size: 40px;
    --padding-block: ${lo};
    --padding-inline: ${tr};
    --control-padding-inline: ${Pe};
  }

  :host(${ve}) {
    --font-size: ${rn};
    --line-height: ${pr};
    --min-block-size: 64px;
    --padding-block: ${Mt};
    --padding-inline: ${vt};
    --control-padding-inline: ${tr};
  }

  :host(${Qp}:not(:disabled)) {
    --resize: both;
  }

  :host(${Xp}:not(:disabled)) {
    --resize: horizontal;
  }

  :host(${Zp}:not(:disabled)) {
    --resize: vertical;
  }

  :host(${ia}) {
    --block-size: auto;
    --contain-size: inline-size;
  }

  :host(${fn}) {
    --background-color: ${Xr};
    --border-color: var(--background-color);
    --border-block-end-color: var(--border-color);
  }

  :host(${gn}) {
    --border-color: var(--background-color);
    --border-block-end-color: var(--border-color);
  }

  :host(${fn}${oa}),
  :host(${gn}${oa}) {
    --box-shadow: ${Uo};
  }

  :host(${pf}) {
    --border-color: ${so};
    --border-block-end-color: ${so};
  }

  :host(:disabled) {
    --color: ${$t};
    --background-color: ${Ue};
    --border-color: ${yt};
    --border-block-end-color: var(--border-color);
    --box-shadow: none;
    --placeholder-color: ${$t};

    cursor: no-drop;
    user-select: none;
  }

  .root {
    background-color: var(--background-color);
    border: var(--border-width) solid var(--border-color);
    border-block-end-color: var(--border-block-end-color);
    border-radius: ${oe};
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

  :host(${qr}) .root {
    inline-size: auto;
  }

  .root::after {
    border-bottom: 2px solid var(--focus-indicator-color);
    border-radius: 0 0 ${oe} ${oe};
    box-sizing: border-box;
    clip-path: inset(calc(100% - 2px) 1px 0px);
    content: '';
    height: max(2px, ${oe});
    inset: auto -1px 0;
    position: absolute;
    transform: scaleX(0);
    transition-delay: ${fi};
    transition-duration: ${fc};
    transition-property: transform;
  }

  :host(:focus-within) .root::after {
    transform: scaleX(1);
    transition-property: transform;
    transition-duration: ${Wo};
    transition-delay: ${gi};
  }

  :host([readonly]) .root::after,
  :host(:disabled) .root::after {
    content: none;
  }

  label {
    color: var(--color);
    display: flex;
    inline-size: fit-content;
    padding-block-end: ${lo};
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

  :host(${ia}) .auto-sizer {
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
    color: ${ur};
    background-color: ${Yl};
  }
`.withBehaviors(Ct(N`
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
  `));function xv(){return V`
    <template>
      <label ${it("labelEl")} for="control" part="label">
        <slot
          name="label"
          ${xt({property:"labelSlottedNodes",filter:eo})}
        ></slot>
      </label>
      <div class="root" part="root">
        <textarea
          ${it("controlEl")}
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
          ${xt({property:"defaultSlottedNodes",filter:eo})}
        ></slot>
      </div>
    </template>
  `}const $v=xv(),Cv=ki.compose({name:`${M.prefix}-textarea`,template:$v,styles:wv,shadowOptions:{delegatesFocus:!0}}),Sv={small:"small",medium:"medium",large:"large"},Ev={outline:"outline",underline:"underline",filledLighter:"filled-lighter",filledDarker:"filled-darker"},Av={email:"email",password:"password",tel:"tel",text:"text",url:"url"},Tv=["date","datetime-local","email","month","number","password","search","tel","text","time","url","week"];class ee extends pe{constructor(){super(...arguments),this.type=Av.text,this._value=this.initialValue,this.dirtyValue=!1,this.elementInternals=this.attachInternals()}defaultSlottedNodesChanged(e,t){this.$fastController.isConnected&&(this.controlLabel.hidden=!(t!=null&&t.length))}initialValueChanged(){this.dirtyValue||(this.value=this.initialValue)}readOnlyChanged(){this.$fastController.isConnected&&(this.elementInternals.ariaReadOnly=`${!!this.readOnly}`)}requiredChanged(e,t){this.$fastController.isConnected&&(this.elementInternals.ariaRequired=`${!!t}`)}get validity(){return this.elementInternals.validity}get validationMessage(){return this.elementInternals.validationMessage||this.control.validationMessage}get value(){return z.track(this,"value"),this._value}set value(e){this._value=e,this.$fastController.isConnected&&(this.control.value=e,this.setFormValue(e),this.setValidity(),z.notify(this,"value"))}get willValidate(){return this.elementInternals.willValidate}get form(){return this.elementInternals.form}beforeinputHandler(e){return e.inputType==="insertLineBreak"&&this.implicitSubmit(),!0}changeHandler(e){return this.setValidity(),this.$emit("change",e,{bubbles:!0,composed:!0}),!0}checkValidity(){return this.elementInternals.checkValidity()}clickHandler(e){var t;return e.target===this&&((t=this.control)===null||t===void 0||t.click()),!0}connectedCallback(){super.connectedCallback(),this.setFormValue(this.value),this.setValidity()}focusinHandler(e){var t;return e.target===this&&((t=this.control)===null||t===void 0||t.focus()),!0}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}implicitSubmit(){if(!this.elementInternals.form)return;if(this.elementInternals.form.elements.length===1){this.elementInternals.form.requestSubmit();return}const e=[...this.elementInternals.form.elements],t=e.find(i=>i.getAttribute("type")==="submit");if(t){t.click();return}e.filter(i=>{var o;return Tv.includes((o=i.getAttribute("type"))!==null&&o!==void 0?o:"")}).length>1||this.elementInternals.form.requestSubmit()}inputHandler(e){return this.dirtyValue=!0,this.value=this.control.value,!0}keydownHandler(e){return e.key==="Enter"&&this.implicitSubmit(),!0}select(){this.control.select(),this.$emit("select")}setCustomValidity(e){this.elementInternals.setValidity({customError:!0},e),this.reportValidity()}reportValidity(){return this.elementInternals.reportValidity()}setFormValue(e,t){this.elementInternals.setFormValue(e,e??t)}setValidity(e=this.control.validity,t=this.validationMessage,r=this.control){if(this.$fastController.isConnected){if(this.disabled){this.elementInternals.setValidity({});return}this.elementInternals.setValidity(e,t,r)}}}ee.formAssociated=!0;m([b],ee.prototype,"autocomplete",void 0);m([b({mode:"boolean"})],ee.prototype,"autofocus",void 0);m([ye],ee.prototype,"defaultSlottedNodes",void 0);m([b],ee.prototype,"dirname",void 0);m([b({mode:"boolean"})],ee.prototype,"disabled",void 0);m([b({attribute:"form"})],ee.prototype,"formAttribute",void 0);m([b({attribute:"value",mode:"fromView"})],ee.prototype,"initialValue",void 0);m([b],ee.prototype,"list",void 0);m([b({converter:_t})],ee.prototype,"maxlength",void 0);m([b({converter:_t})],ee.prototype,"minlength",void 0);m([b({mode:"boolean"})],ee.prototype,"multiple",void 0);m([b],ee.prototype,"name",void 0);m([b],ee.prototype,"pattern",void 0);m([b],ee.prototype,"placeholder",void 0);m([b({attribute:"readonly",mode:"boolean"})],ee.prototype,"readOnly",void 0);m([b({mode:"boolean"})],ee.prototype,"required",void 0);m([b({converter:_t})],ee.prototype,"size",void 0);m([b({converter:{fromView:n=>typeof n=="string"?["true",""].includes(n.trim().toLowerCase()):null,toView:n=>n.toString()}})],ee.prototype,"spellcheck",void 0);m([b],ee.prototype,"type",void 0);m([ye],ee.prototype,"controlLabel",void 0);class wi extends ee{appearanceChanged(e,t){j(this.elementInternals,e,t,Ev)}controlSizeChanged(e,t){j(this.elementInternals,e,t,Sv)}}m([b],wi.prototype,"appearance",void 0);m([b({attribute:"control-size"})],wi.prototype,"controlSize",void 0);On(wi,In);const Iv=N`
  ${ke("block")}

  :host {
    font-family: ${Oe};
    font-size: ${at};
    font-weight: ${Le};
    line-height: ${Nt};
    max-width: 400px;
  }
  .label {
    display: flex;
    color: ${Fe};
    padding-bottom: ${lo};
    flex-shrink: 0;
    padding-inline-end: ${En};
  }

  .label[hidden],
  :host(:empty) .label {
    display: none;
  }

  .root {
    align-items: center;
    background-color: ${he};
    border: ${Ie} solid ${$n};
    border-bottom-color: ${xn};
    border-radius: ${oe};
    box-sizing: border-box;
    height: 32px;
    display: inline-flex;
    flex-direction: row;
    gap: ${Pe};
    padding: 0 ${Zr};
    position: relative;
    width: 100%;
  }

  :has(.control:user-invalid) {
    border-color: ${so};
  }

  .root::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: -1px;
    bottom: 0px;
    right: -1px;
    height: max(2px, ${oe});
    border-radius: 0 0 ${oe} ${oe};
    border-bottom: 2px solid ${Ro};
    clip-path: inset(calc(100% - 2px) 1px 0px);
    transform: scaleX(0);
    transition-property: transform;
    transition-duration: ${fc};
    transition-delay: ${fi};
  }
  .control {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: ${Fe};
    border-radius: ${oe};
    background: ${Ue};
    font-family: ${Oe};
    font-weight: ${Le};
    font-size: ${at};
    border: none;
    vertical-align: center;
  }
  .control:focus-visible {
    outline: 0;
    border: 0;
  }
  .control::placeholder {
    color: ${Gl};
  }
  :host ::slotted([slot='start']),
  :host ::slotted([slot='end']) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Ne};
    font-size: ${dr};
  }
  :host ::slotted([slot='start']) {
    padding-right: ${Pe};
  }
  :host ::slotted([slot='end']) {
    padding-left: ${Pe};
    gap: ${En};
  }
  :host(:hover) .root {
    border-color: ${Do};
    border-bottom-color: ${Jn};
  }
  :host(:active) .root {
    border-color: ${_o};
  }
  :host(:focus-within) .root {
    outline: transparent solid 2px;
    border-bottom: 0;
  }
  :host(:focus-within) .root::after {
    transform: scaleX(1);
    transition-property: transform;
    transition-duration: ${Wo};
    transition-delay: ${gi};
  }
  :host(:focus-within:active) .root:after {
    border-bottom-color: ${tc};
  }
  :host(${xe}:focus-within) .root {
    border: ${Ie} solid ${$n};
  }
  :host(:focus-within) .control {
    color: ${Fe};
  }
  :host([disabled]) .root {
    background: ${Ue};
    border: ${Ie} solid ${yt};
  }
  :host([disabled]) .control::placeholder,
  :host([disabled]) ::slotted([slot='start']),
  :host([disabled]) ::slotted([slot='end']) {
    color: ${$t};
  }
  ::selection {
    color: ${ur};
    background-color: ${Yl};
  }
  :host(${ze}) .control {
    font-size: ${We};
    font-weight: ${Le};
    line-height: ${lt};
  }
  :host(${ze}) .root {
    height: 24px;
    gap: ${Pe};
    padding: 0 ${tr};
  }
  :host(${ze}) ::slotted([slot='start']),
  :host(${ze}) ::slotted([slot='end']) {
    font-size: ${rn};
  }
  :host(${ve}) .control {
    font-size: ${rn};
    font-weight: ${Le};
    line-height: ${pr};
  }
  :host(${ve}) .root {
    height: 40px;
    gap: ${Ft};
    padding: 0 ${vt};
  }
  :host(${ve}) ::slotted([slot='start']),
  :host(${ve}) ::slotted([slot='end']) {
    font-size: ${jo};
  }
  :host(${Qt}) .root {
    background: ${Ue};
    border: 0;
    border-radius: 0;
    border-bottom: ${Ie} solid ${xn};
  }
  :host(${Qt}:hover) .root {
    border-bottom-color: ${Jn};
  }
  :host(${Qt}:active) .root {
    border-bottom-color: ${er};
  }
  :host(${Qt}:focus-within) .root {
    border: 0;
    border-bottom-color: ${er};
  }
  :host(${Qt}[disabled]) .root {
    border-bottom-color: ${yt};
  }
  :host(${gn}) .root,
  :host(${fn}) .root {
    border: ${Ie} solid ${st};
    box-shadow: ${Uo};
  }
  :host(${gn}) .root {
    background: ${he};
  }
  :host(${fn}) .root {
    background: ${Xr};
  }
  :host(${gn}:hover) .root,
  :host(${fn}:hover) .root {
    border-color: ${ga};
  }
  :host(${gn}:active) .root,
  :host(${fn}:active) .root {
    border-color: ${ga};
    background: ${Xr};
  }
`;function Bv(n={}){return V`
    <template
      @beforeinput="${(e,t)=>e.beforeinputHandler(t.event)}"
      @focusin="${(e,t)=>e.focusinHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
    >
      <label part="label" for="control" class="label" ${it("controlLabel")}>
        <slot
          ${xt({property:"defaultSlottedNodes",filter:eo})}
        ></slot>
      </label>
      <div class="root" part="root">
        ${Bn(n)}
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
          ${it("control")}
        />
        ${sr(n)}
      </div>
    </template>
  `}const Ov=Bv(),Mv=wi.compose({name:`${M.prefix}-text-input`,template:Ov,styles:Iv,shadowOptions:{delegatesFocus:!0}}),zv={_100:"100",_200:"200",_300:"300",_400:"400",_500:"500",_600:"600",_700:"700",_800:"800",_900:"900",_1000:"1000"},Lv={base:"base",numeric:"numeric",monospace:"monospace"},Pv={medium:"medium",regular:"regular",semibold:"semibold",bold:"bold"},Fv={start:"start",end:"end",center:"center",justify:"justify"};class Xe extends pe{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.nowrap=!1,this.truncate=!1,this.italic=!1,this.underline=!1,this.strikethrough=!1,this.block=!1}sizeChanged(e,t){j(this.elementInternals,e,t,zv,"size-")}fontChanged(e,t){j(this.elementInternals,e,t,Lv)}weightChanged(e,t){j(this.elementInternals,e,t,Pv)}alignChanged(e,t){j(this.elementInternals,e,t,Fv)}connectedCallback(){super.connectedCallback(),z.getNotifier(this).subscribe(this),Object.keys(this.$fastController.definition.attributeLookup).forEach(e=>{this.handleChange(this,e)})}disconnectedCallback(){super.disconnectedCallback(),z.getNotifier(this).unsubscribe(this)}handleChange(e,t){switch(t){case"nowrap":case"truncate":case"italic":case"underline":case"strikethrough":case"block":J(this.elementInternals,t,!!this[t]);break}}}m([b({mode:"boolean"})],Xe.prototype,"nowrap",void 0);m([b({mode:"boolean"})],Xe.prototype,"truncate",void 0);m([b({mode:"boolean"})],Xe.prototype,"italic",void 0);m([b({mode:"boolean"})],Xe.prototype,"underline",void 0);m([b({mode:"boolean"})],Xe.prototype,"strikethrough",void 0);m([b({mode:"boolean"})],Xe.prototype,"block",void 0);m([b],Xe.prototype,"size",void 0);m([b],Xe.prototype,"font",void 0);m([b],Xe.prototype,"weight",void 0);m([b],Xe.prototype,"align",void 0);const Nv=V`<slot></slot>`,Dv=N`
  ${ke("inline")}

  :host {
    contain: content;
    font-family: ${Oe};
    font-size: ${at};
    line-height: ${Nt};
    font-weight: ${Le};
    text-align: start;
  }

  :host(${aa}),
  :host(${aa}) ::slotted(*) {
    white-space: nowrap;
    overflow: hidden;
  }
  :host(${ca}),
  :host(${ca}) ::slotted(*) {
    text-overflow: ellipsis;
  }
  :host(${qr}) {
    display: block;
  }
  :host(${Bp}) {
    font-style: italic;
  }
  :host(${Qt}) {
    text-decoration-line: underline;
  }
  :host(${la}) {
    text-decoration-line: line-through;
  }
  :host(${Qt}${la}) {
    text-decoration-line: line-through underline;
  }
  :host(${nf}) {
    font-size: ${Ho};
    line-height: ${hc};
  }
  :host(${rf}) {
    font-size: ${We};
    line-height: ${lt};
  }
  :host(${of}) {
    font-size: ${rn};
    line-height: ${pr};
  }
  :host(${sf}) {
    font-size: ${dr};
    line-height: ${qo};
  }
  :host(${af}) {
    font-size: ${jo};
    line-height: ${hm};
  }
  :host(${lf}) {
    font-size: ${sm};
    line-height: ${pm};
  }
  :host(${cf}) {
    font-size: ${am};
    line-height: ${fm};
  }
  :host(${uf}) {
    font-size: ${lm};
    line-height: ${gm};
  }
  :host(${tf}) {
    font-size: ${cm};
    line-height: ${mm};
  }
  :host(${_p}) {
    font-family: ${im};
  }
  :host(${Vp}) {
    font-family: ${om};
  }
  :host(${Np}) {
    font-weight: ${um};
  }
  :host(${ef}) {
    font-weight: ${hr};
  }
  :host(${gp}) {
    font-weight: ${dm};
  }
  :host(${yp}) {
    text-align: center;
  }
  :host(${Cp}) {
    text-align: end;
  }
  :host(${Op}) {
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
`,_v=Xe.compose({name:`${M.prefix}-text`,template:Nv,styles:Dv}),Rv={};function Xo(n,e){const t=Rv,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return Cc(n,r,i)}function Cc(n,e,t){if(Vv(n)){if("value"in n)return n.type==="html"&&!t?"":n.value;if(e&&"alt"in n&&n.alt)return n.alt;if("children"in n)return ka(n.children,e,t)}return Array.isArray(n)?ka(n,e,t):""}function ka(n,e,t){const r=[];let i=-1;for(;++i<n.length;)r[i]=Cc(n[i],e,t);return r.join("")}function Vv(n){return!!(n&&typeof n=="object")}const wa=document.createElement("i");function Zo(n){const e="&"+n+";";wa.innerHTML=e;const t=wa.textContent;return t.charCodeAt(t.length-1)===59&&n!=="semi"||t===e?!1:t}function ut(n,e,t,r){const i=n.length;let o=0,s;if(e<0?e=-e>i?0:i+e:e=e>i?i:e,t=t>0?t:0,r.length<1e4)s=Array.from(r),s.unshift(e,t),n.splice(...s);else for(t&&n.splice(e,t);o<r.length;)s=r.slice(o,o+1e4),s.unshift(e,0),n.splice(...s),o+=1e4,e+=1e4}function Me(n,e){return n.length>0?(ut(n,n.length,0,e),n):e}const xa={}.hasOwnProperty;function Hv(n){const e={};let t=-1;for(;++t<n.length;)jv(e,n[t]);return e}function jv(n,e){let t;for(t in e){const i=(xa.call(n,t)?n[t]:void 0)||(n[t]={}),o=e[t];let s;if(o)for(s in o){xa.call(i,s)||(i[s]=[]);const a=o[s];qv(i[s],Array.isArray(a)?a:a?[a]:[])}}}function qv(n,e){let t=-1;const r=[];for(;++t<e.length;)(e[t].add==="after"?n:r).push(e[t]);ut(n,0,0,r)}function Sc(n,e){const t=Number.parseInt(n,e);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function bn(n){return n.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const tt=Rt(/[A-Za-z]/),Be=Rt(/[\dA-Za-z]/),Uv=Rt(/[#-'*+\--9=?A-Z^-~]/);function uo(n){return n!==null&&(n<32||n===127)}const ho=Rt(/\d/),Kv=Rt(/[\dA-Fa-f]/),Wv=Rt(/[!-/:-@[-`{-~]/);function I(n){return n!==null&&n<-2}function Ce(n){return n!==null&&(n<0||n===32)}function R(n){return n===-2||n===-1||n===32}const Gv=Rt(new RegExp("\\p{P}|\\p{S}","u")),Qv=Rt(/\s/);function Rt(n){return e;function e(t){return t!==null&&t>-1&&n.test(String.fromCharCode(t))}}function Ln(n){const e=[];let t=-1,r=0,i=0;for(;++t<n.length;){const o=n.charCodeAt(t);let s="";if(o===37&&Be(n.charCodeAt(t+1))&&Be(n.charCodeAt(t+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const a=n.charCodeAt(t+1);o<56320&&a>56319&&a<57344?(s=String.fromCharCode(o,a),i=1):s="�"}else s=String.fromCharCode(o);s&&(e.push(n.slice(r,t),encodeURIComponent(s)),r=t+i+1,s=""),i&&(t+=i,i=0)}return e.join("")+n.slice(r)}function G(n,e,t,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(l){return R(l)?(n.enter(t),a(l)):e(l)}function a(l){return R(l)&&o++<i?(n.consume(l),a):(n.exit(t),e(l))}}const Xv={tokenize:Zv};function Zv(n){const e=n.attempt(this.parser.constructs.contentInitial,r,i);let t;return e;function r(a){if(a===null){n.consume(a);return}return n.enter("lineEnding"),n.consume(a),n.exit("lineEnding"),G(n,e,"linePrefix")}function i(a){return n.enter("paragraph"),o(a)}function o(a){const l=n.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=l),t=l,s(a)}function s(a){if(a===null){n.exit("chunkText"),n.exit("paragraph"),n.consume(a);return}return I(a)?(n.consume(a),n.exit("chunkText"),o):(n.consume(a),s)}}const Yv={tokenize:Jv},$a={tokenize:ey};function Jv(n){const e=this,t=[];let r=0,i,o,s;return a;function a(E){if(r<t.length){const X=t[r];return e.containerState=X[1],n.attempt(X[0].continuation,l,c)(E)}return c(E)}function l(E){if(r++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,i&&P();const X=e.events.length;let Y=X,k;for(;Y--;)if(e.events[Y][0]==="exit"&&e.events[Y][1].type==="chunkFlow"){k=e.events[Y][1].end;break}$(r);let H=X;for(;H<e.events.length;)e.events[H][1].end={...k},H++;return ut(e.events,Y+1,0,e.events.slice(X)),e.events.length=H,c(E)}return a(E)}function c(E){if(r===t.length){if(!i)return p(E);if(i.currentConstruct&&i.currentConstruct.concrete)return x(E);e.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return e.containerState={},n.check($a,u,d)(E)}function u(E){return i&&P(),$(r),p(E)}function d(E){return e.parser.lazy[e.now().line]=r!==t.length,s=e.now().offset,x(E)}function p(E){return e.containerState={},n.attempt($a,h,x)(E)}function h(E){return r++,t.push([e.currentConstruct,e.containerState]),p(E)}function x(E){if(E===null){i&&P(),$(0),n.consume(E);return}return i=i||e.parser.flow(e.now()),n.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),S(E)}function S(E){if(E===null){L(n.exit("chunkFlow"),!0),$(0),n.consume(E);return}return I(E)?(n.consume(E),L(n.exit("chunkFlow")),r=0,e.interrupt=void 0,a):(n.consume(E),S)}function L(E,X){const Y=e.sliceStream(E);if(X&&Y.push(null),E.previous=o,o&&(o.next=E),o=E,i.defineSkip(E.start),i.write(Y),e.parser.lazy[E.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<s&&(!i.events[k][1].end||i.events[k][1].end.offset>s))return;const H=e.events.length;let te=H,q,Q;for(;te--;)if(e.events[te][0]==="exit"&&e.events[te][1].type==="chunkFlow"){if(q){Q=e.events[te][1].end;break}q=!0}for($(r),k=H;k<e.events.length;)e.events[k][1].end={...Q},k++;ut(e.events,te+1,0,e.events.slice(H)),e.events.length=k}}function $(E){let X=t.length;for(;X-- >E;){const Y=t[X];e.containerState=Y[1],Y[0].exit.call(e,n)}t.length=E}function P(){i.write([null]),o=void 0,i=void 0,e.containerState._closeFlow=void 0}}function ey(n,e,t){return G(n,n.attempt(this.parser.constructs.document,e,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Yr(n){if(n===null||Ce(n)||Qv(n))return 1;if(Gv(n))return 2}function Yo(n,e,t){const r=[];let i=-1;for(;++i<n.length;){const o=n[i].resolveAll;o&&!r.includes(o)&&(e=o(e,t),r.push(o))}return e}const po={name:"attention",resolveAll:ty,tokenize:ny};function ty(n,e){let t=-1,r,i,o,s,a,l,c,u;for(;++t<n.length;)if(n[t][0]==="enter"&&n[t][1].type==="attentionSequence"&&n[t][1]._close){for(r=t;r--;)if(n[r][0]==="exit"&&n[r][1].type==="attentionSequence"&&n[r][1]._open&&e.sliceSerialize(n[r][1]).charCodeAt(0)===e.sliceSerialize(n[t][1]).charCodeAt(0)){if((n[r][1]._close||n[t][1]._open)&&(n[t][1].end.offset-n[t][1].start.offset)%3&&!((n[r][1].end.offset-n[r][1].start.offset+n[t][1].end.offset-n[t][1].start.offset)%3))continue;l=n[r][1].end.offset-n[r][1].start.offset>1&&n[t][1].end.offset-n[t][1].start.offset>1?2:1;const d={...n[r][1].end},p={...n[t][1].start};Ca(d,-l),Ca(p,l),s={type:l>1?"strongSequence":"emphasisSequence",start:d,end:{...n[r][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...n[t][1].start},end:p},o={type:l>1?"strongText":"emphasisText",start:{...n[r][1].end},end:{...n[t][1].start}},i={type:l>1?"strong":"emphasis",start:{...s.start},end:{...a.end}},n[r][1].end={...s.start},n[t][1].start={...a.end},c=[],n[r][1].end.offset-n[r][1].start.offset&&(c=Me(c,[["enter",n[r][1],e],["exit",n[r][1],e]])),c=Me(c,[["enter",i,e],["enter",s,e],["exit",s,e],["enter",o,e]]),c=Me(c,Yo(e.parser.constructs.insideSpan.null,n.slice(r+1,t),e)),c=Me(c,[["exit",o,e],["enter",a,e],["exit",a,e],["exit",i,e]]),n[t][1].end.offset-n[t][1].start.offset?(u=2,c=Me(c,[["enter",n[t][1],e],["exit",n[t][1],e]])):u=0,ut(n,r-1,t-r+3,c),t=r+c.length-u-2;break}}for(t=-1;++t<n.length;)n[t][1].type==="attentionSequence"&&(n[t][1].type="data");return n}function ny(n,e){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Yr(r);let o;return s;function s(l){return o=l,n.enter("attentionSequence"),a(l)}function a(l){if(l===o)return n.consume(l),a;const c=n.exit("attentionSequence"),u=Yr(l),d=!u||u===2&&i||t.includes(l),p=!i||i===2&&u||t.includes(r);return c._open=!!(o===42?d:d&&(i||!p)),c._close=!!(o===42?p:p&&(u||!d)),e(l)}}function Ca(n,e){n.column+=e,n.offset+=e,n._bufferIndex+=e}const ry={name:"autolink",tokenize:iy};function iy(n,e,t){let r=0;return i;function i(h){return n.enter("autolink"),n.enter("autolinkMarker"),n.consume(h),n.exit("autolinkMarker"),n.enter("autolinkProtocol"),o}function o(h){return tt(h)?(n.consume(h),s):h===64?t(h):c(h)}function s(h){return h===43||h===45||h===46||Be(h)?(r=1,a(h)):c(h)}function a(h){return h===58?(n.consume(h),r=0,l):(h===43||h===45||h===46||Be(h))&&r++<32?(n.consume(h),a):(r=0,c(h))}function l(h){return h===62?(n.exit("autolinkProtocol"),n.enter("autolinkMarker"),n.consume(h),n.exit("autolinkMarker"),n.exit("autolink"),e):h===null||h===32||h===60||uo(h)?t(h):(n.consume(h),l)}function c(h){return h===64?(n.consume(h),u):Uv(h)?(n.consume(h),c):t(h)}function u(h){return Be(h)?d(h):t(h)}function d(h){return h===46?(n.consume(h),r=0,u):h===62?(n.exit("autolinkProtocol").type="autolinkEmail",n.enter("autolinkMarker"),n.consume(h),n.exit("autolinkMarker"),n.exit("autolink"),e):p(h)}function p(h){if((h===45||Be(h))&&r++<63){const x=h===45?p:d;return n.consume(h),x}return t(h)}}const xi={partial:!0,tokenize:oy};function oy(n,e,t){return r;function r(o){return R(o)?G(n,i,"linePrefix")(o):i(o)}function i(o){return o===null||I(o)?e(o):t(o)}}const Ec={continuation:{tokenize:ay},exit:ly,name:"blockQuote",tokenize:sy};function sy(n,e,t){const r=this;return i;function i(s){if(s===62){const a=r.containerState;return a.open||(n.enter("blockQuote",{_container:!0}),a.open=!0),n.enter("blockQuotePrefix"),n.enter("blockQuoteMarker"),n.consume(s),n.exit("blockQuoteMarker"),o}return t(s)}function o(s){return R(s)?(n.enter("blockQuotePrefixWhitespace"),n.consume(s),n.exit("blockQuotePrefixWhitespace"),n.exit("blockQuotePrefix"),e):(n.exit("blockQuotePrefix"),e(s))}}function ay(n,e,t){const r=this;return i;function i(s){return R(s)?G(n,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return n.attempt(Ec,e,t)(s)}}function ly(n){n.exit("blockQuote")}const Ac={name:"characterEscape",tokenize:cy};function cy(n,e,t){return r;function r(o){return n.enter("characterEscape"),n.enter("escapeMarker"),n.consume(o),n.exit("escapeMarker"),i}function i(o){return Wv(o)?(n.enter("characterEscapeValue"),n.consume(o),n.exit("characterEscapeValue"),n.exit("characterEscape"),e):t(o)}}const Tc={name:"characterReference",tokenize:uy};function uy(n,e,t){const r=this;let i=0,o,s;return a;function a(d){return n.enter("characterReference"),n.enter("characterReferenceMarker"),n.consume(d),n.exit("characterReferenceMarker"),l}function l(d){return d===35?(n.enter("characterReferenceMarkerNumeric"),n.consume(d),n.exit("characterReferenceMarkerNumeric"),c):(n.enter("characterReferenceValue"),o=31,s=Be,u(d))}function c(d){return d===88||d===120?(n.enter("characterReferenceMarkerHexadecimal"),n.consume(d),n.exit("characterReferenceMarkerHexadecimal"),n.enter("characterReferenceValue"),o=6,s=Kv,u):(n.enter("characterReferenceValue"),o=7,s=ho,u(d))}function u(d){if(d===59&&i){const p=n.exit("characterReferenceValue");return s===Be&&!Zo(r.sliceSerialize(p))?t(d):(n.enter("characterReferenceMarker"),n.consume(d),n.exit("characterReferenceMarker"),n.exit("characterReference"),e)}return s(d)&&i++<o?(n.consume(d),u):t(d)}}const Sa={partial:!0,tokenize:hy},Ea={concrete:!0,name:"codeFenced",tokenize:dy};function dy(n,e,t){const r=this,i={partial:!0,tokenize:Y};let o=0,s=0,a;return l;function l(k){return c(k)}function c(k){const H=r.events[r.events.length-1];return o=H&&H[1].type==="linePrefix"?H[2].sliceSerialize(H[1],!0).length:0,a=k,n.enter("codeFenced"),n.enter("codeFencedFence"),n.enter("codeFencedFenceSequence"),u(k)}function u(k){return k===a?(s++,n.consume(k),u):s<3?t(k):(n.exit("codeFencedFenceSequence"),R(k)?G(n,d,"whitespace")(k):d(k))}function d(k){return k===null||I(k)?(n.exit("codeFencedFence"),r.interrupt?e(k):n.check(Sa,S,X)(k)):(n.enter("codeFencedFenceInfo"),n.enter("chunkString",{contentType:"string"}),p(k))}function p(k){return k===null||I(k)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),d(k)):R(k)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),G(n,h,"whitespace")(k)):k===96&&k===a?t(k):(n.consume(k),p)}function h(k){return k===null||I(k)?d(k):(n.enter("codeFencedFenceMeta"),n.enter("chunkString",{contentType:"string"}),x(k))}function x(k){return k===null||I(k)?(n.exit("chunkString"),n.exit("codeFencedFenceMeta"),d(k)):k===96&&k===a?t(k):(n.consume(k),x)}function S(k){return n.attempt(i,X,L)(k)}function L(k){return n.enter("lineEnding"),n.consume(k),n.exit("lineEnding"),$}function $(k){return o>0&&R(k)?G(n,P,"linePrefix",o+1)(k):P(k)}function P(k){return k===null||I(k)?n.check(Sa,S,X)(k):(n.enter("codeFlowValue"),E(k))}function E(k){return k===null||I(k)?(n.exit("codeFlowValue"),P(k)):(n.consume(k),E)}function X(k){return n.exit("codeFenced"),e(k)}function Y(k,H,te){let q=0;return Q;function Q(_){return k.enter("lineEnding"),k.consume(_),k.exit("lineEnding"),T}function T(_){return k.enter("codeFencedFence"),R(_)?G(k,A,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(_):A(_)}function A(_){return _===a?(k.enter("codeFencedFenceSequence"),Z(_)):te(_)}function Z(_){return _===a?(q++,k.consume(_),Z):q>=s?(k.exit("codeFencedFenceSequence"),R(_)?G(k,ne,"whitespace")(_):ne(_)):te(_)}function ne(_){return _===null||I(_)?(k.exit("codeFencedFence"),H(_)):te(_)}}}function hy(n,e,t){const r=this;return i;function i(s){return s===null?t(s):(n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),o)}function o(s){return r.parser.lazy[r.now().line]?t(s):e(s)}}const zi={name:"codeIndented",tokenize:fy},py={partial:!0,tokenize:gy};function fy(n,e,t){const r=this;return i;function i(c){return n.enter("codeIndented"),G(n,o,"linePrefix",5)(c)}function o(c){const u=r.events[r.events.length-1];return u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?s(c):t(c)}function s(c){return c===null?l(c):I(c)?n.attempt(py,s,l)(c):(n.enter("codeFlowValue"),a(c))}function a(c){return c===null||I(c)?(n.exit("codeFlowValue"),s(c)):(n.consume(c),a)}function l(c){return n.exit("codeIndented"),e(c)}}function gy(n,e,t){const r=this;return i;function i(s){return r.parser.lazy[r.now().line]?t(s):I(s)?(n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),i):G(n,o,"linePrefix",5)(s)}function o(s){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(s):I(s)?i(s):t(s)}}const my={name:"codeText",previous:vy,resolve:by,tokenize:yy};function by(n){let e=n.length-4,t=3,r,i;if((n[t][1].type==="lineEnding"||n[t][1].type==="space")&&(n[e][1].type==="lineEnding"||n[e][1].type==="space")){for(r=t;++r<e;)if(n[r][1].type==="codeTextData"){n[t][1].type="codeTextPadding",n[e][1].type="codeTextPadding",t+=2,e-=2;break}}for(r=t-1,e++;++r<=e;)i===void 0?r!==e&&n[r][1].type!=="lineEnding"&&(i=r):(r===e||n[r][1].type==="lineEnding")&&(n[i][1].type="codeTextData",r!==i+2&&(n[i][1].end=n[r-1][1].end,n.splice(i+2,r-i-2),e-=r-i-2,r=i+2),i=void 0);return n}function vy(n){return n!==96||this.events[this.events.length-1][1].type==="characterEscape"}function yy(n,e,t){let r=0,i,o;return s;function s(d){return n.enter("codeText"),n.enter("codeTextSequence"),a(d)}function a(d){return d===96?(n.consume(d),r++,a):(n.exit("codeTextSequence"),l(d))}function l(d){return d===null?t(d):d===32?(n.enter("space"),n.consume(d),n.exit("space"),l):d===96?(o=n.enter("codeTextSequence"),i=0,u(d)):I(d)?(n.enter("lineEnding"),n.consume(d),n.exit("lineEnding"),l):(n.enter("codeTextData"),c(d))}function c(d){return d===null||d===32||d===96||I(d)?(n.exit("codeTextData"),l(d)):(n.consume(d),c)}function u(d){return d===96?(n.consume(d),i++,u):i===r?(n.exit("codeTextSequence"),n.exit("codeText"),e(d)):(o.type="codeTextData",c(d))}}class ky{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(e,r):e>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(e,t,r){const i=t||0;this.setCursor(Math.trunc(e));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Hn(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),Hn(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Hn(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const t=this.left.splice(e,Number.POSITIVE_INFINITY);Hn(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);Hn(this.left,t.reverse())}}}function Hn(n,e){let t=0;if(e.length<1e4)n.push(...e);else for(;t<e.length;)n.push(...e.slice(t,t+1e4)),t+=1e4}function Ic(n){const e={};let t=-1,r,i,o,s,a,l,c;const u=new ky(n);for(;++t<u.length;){for(;t in e;)t=e[t];if(r=u.get(t),t&&r[1].type==="chunkFlow"&&u.get(t-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,o=0,o<l.length&&l[o][1].type==="lineEndingBlank"&&(o+=2),o<l.length&&l[o][1].type==="content"))for(;++o<l.length&&l[o][1].type!=="content";)l[o][1].type==="chunkText"&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(e,wy(u,t)),t=e[t],c=!0);else if(r[1]._container){for(o=t,i=void 0;o--&&(s=u.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank");)s[0]==="enter"&&(i&&(u.get(i)[1].type="lineEndingBlank"),s[1].type="lineEnding",i=o);i&&(r[1].end={...u.get(i)[1].start},a=u.slice(i,t),a.unshift(r),u.splice(i,t-i+1,a))}}return ut(n,0,Number.POSITIVE_INFINITY,u.slice(0)),!c}function wy(n,e){const t=n.get(e)[1],r=n.get(e)[2];let i=e-1;const o=[],s=t._tokenizer||r.parser[t.contentType](t.start),a=s.events,l=[],c={};let u,d,p=-1,h=t,x=0,S=0;const L=[S];for(;h;){for(;n.get(++i)[1]!==h;);o.push(i),h._tokenizer||(u=r.sliceStream(h),h.next||u.push(null),d&&s.defineSkip(h.start),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(u),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),d=h,h=h.next}for(h=t;++p<a.length;)a[p][0]==="exit"&&a[p-1][0]==="enter"&&a[p][1].type===a[p-1][1].type&&a[p][1].start.line!==a[p][1].end.line&&(S=p+1,L.push(S),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(s.events=[],h?(h._tokenizer=void 0,h.previous=void 0):L.pop(),p=L.length;p--;){const $=a.slice(L[p],L[p+1]),P=o.pop();l.push([P,P+$.length-1]),n.splice(P,2,$)}for(l.reverse(),p=-1;++p<l.length;)c[x+l[p][0]]=x+l[p][1],x+=l[p][1]-l[p][0]-1;return c}const xy={resolve:Cy,tokenize:Sy},$y={partial:!0,tokenize:Ey};function Cy(n){return Ic(n),n}function Sy(n,e){let t;return r;function r(a){return n.enter("content"),t=n.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):I(a)?n.check($y,s,o)(a):(n.consume(a),i)}function o(a){return n.exit("chunkContent"),n.exit("content"),e(a)}function s(a){return n.consume(a),n.exit("chunkContent"),t.next=n.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function Ey(n,e,t){const r=this;return i;function i(s){return n.exit("chunkContent"),n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),G(n,o,"linePrefix")}function o(s){if(s===null||I(s))return t(s);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(s):n.interrupt(r.parser.constructs.flow,t,e)(s)}}function Bc(n,e,t,r,i,o,s,a,l){const c=l||Number.POSITIVE_INFINITY;let u=0;return d;function d($){return $===60?(n.enter(r),n.enter(i),n.enter(o),n.consume($),n.exit(o),p):$===null||$===32||$===41||uo($)?t($):(n.enter(r),n.enter(s),n.enter(a),n.enter("chunkString",{contentType:"string"}),S($))}function p($){return $===62?(n.enter(o),n.consume($),n.exit(o),n.exit(i),n.exit(r),e):(n.enter(a),n.enter("chunkString",{contentType:"string"}),h($))}function h($){return $===62?(n.exit("chunkString"),n.exit(a),p($)):$===null||$===60||I($)?t($):(n.consume($),$===92?x:h)}function x($){return $===60||$===62||$===92?(n.consume($),h):h($)}function S($){return!u&&($===null||$===41||Ce($))?(n.exit("chunkString"),n.exit(a),n.exit(s),n.exit(r),e($)):u<c&&$===40?(n.consume($),u++,S):$===41?(n.consume($),u--,S):$===null||$===32||$===40||uo($)?t($):(n.consume($),$===92?L:S)}function L($){return $===40||$===41||$===92?(n.consume($),S):S($)}}function Oc(n,e,t,r,i,o){const s=this;let a=0,l;return c;function c(h){return n.enter(r),n.enter(i),n.consume(h),n.exit(i),n.enter(o),u}function u(h){return a>999||h===null||h===91||h===93&&!l||h===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?t(h):h===93?(n.exit(o),n.enter(i),n.consume(h),n.exit(i),n.exit(r),e):I(h)?(n.enter("lineEnding"),n.consume(h),n.exit("lineEnding"),u):(n.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===null||h===91||h===93||I(h)||a++>999?(n.exit("chunkString"),u(h)):(n.consume(h),l||(l=!R(h)),h===92?p:d)}function p(h){return h===91||h===92||h===93?(n.consume(h),a++,d):d(h)}}function Mc(n,e,t,r,i,o){let s;return a;function a(p){return p===34||p===39||p===40?(n.enter(r),n.enter(i),n.consume(p),n.exit(i),s=p===40?41:p,l):t(p)}function l(p){return p===s?(n.enter(i),n.consume(p),n.exit(i),n.exit(r),e):(n.enter(o),c(p))}function c(p){return p===s?(n.exit(o),l(s)):p===null?t(p):I(p)?(n.enter("lineEnding"),n.consume(p),n.exit("lineEnding"),G(n,c,"linePrefix")):(n.enter("chunkString",{contentType:"string"}),u(p))}function u(p){return p===s||p===null||I(p)?(n.exit("chunkString"),c(p)):(n.consume(p),p===92?d:u)}function d(p){return p===s||p===92?(n.consume(p),u):u(p)}}function Gn(n,e){let t;return r;function r(i){return I(i)?(n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),t=!0,r):R(i)?G(n,r,t?"linePrefix":"lineSuffix")(i):e(i)}}const Ay={name:"definition",tokenize:Iy},Ty={partial:!0,tokenize:By};function Iy(n,e,t){const r=this;let i;return o;function o(h){return n.enter("definition"),s(h)}function s(h){return Oc.call(r,n,a,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function a(h){return i=bn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(n.enter("definitionMarker"),n.consume(h),n.exit("definitionMarker"),l):t(h)}function l(h){return Ce(h)?Gn(n,c)(h):c(h)}function c(h){return Bc(n,u,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function u(h){return n.attempt(Ty,d,d)(h)}function d(h){return R(h)?G(n,p,"whitespace")(h):p(h)}function p(h){return h===null||I(h)?(n.exit("definition"),r.parser.defined.push(i),e(h)):t(h)}}function By(n,e,t){return r;function r(a){return Ce(a)?Gn(n,i)(a):t(a)}function i(a){return Mc(n,o,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return R(a)?G(n,s,"whitespace")(a):s(a)}function s(a){return a===null||I(a)?e(a):t(a)}}const Oy={name:"hardBreakEscape",tokenize:My};function My(n,e,t){return r;function r(o){return n.enter("hardBreakEscape"),n.consume(o),i}function i(o){return I(o)?(n.exit("hardBreakEscape"),e(o)):t(o)}}const zy={name:"headingAtx",resolve:Ly,tokenize:Py};function Ly(n,e){let t=n.length-2,r=3,i,o;return n[r][1].type==="whitespace"&&(r+=2),t-2>r&&n[t][1].type==="whitespace"&&(t-=2),n[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&n[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(i={type:"atxHeadingText",start:n[r][1].start,end:n[t][1].end},o={type:"chunkText",start:n[r][1].start,end:n[t][1].end,contentType:"text"},ut(n,r,t-r+1,[["enter",i,e],["enter",o,e],["exit",o,e],["exit",i,e]])),n}function Py(n,e,t){let r=0;return i;function i(u){return n.enter("atxHeading"),o(u)}function o(u){return n.enter("atxHeadingSequence"),s(u)}function s(u){return u===35&&r++<6?(n.consume(u),s):u===null||Ce(u)?(n.exit("atxHeadingSequence"),a(u)):t(u)}function a(u){return u===35?(n.enter("atxHeadingSequence"),l(u)):u===null||I(u)?(n.exit("atxHeading"),e(u)):R(u)?G(n,a,"whitespace")(u):(n.enter("atxHeadingText"),c(u))}function l(u){return u===35?(n.consume(u),l):(n.exit("atxHeadingSequence"),a(u))}function c(u){return u===null||u===35||Ce(u)?(n.exit("atxHeadingText"),a(u)):(n.consume(u),c)}}const Fy=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Aa=["pre","script","style","textarea"],Ny={concrete:!0,name:"htmlFlow",resolveTo:Ry,tokenize:Vy},Dy={partial:!0,tokenize:jy},_y={partial:!0,tokenize:Hy};function Ry(n){let e=n.length;for(;e--&&!(n[e][0]==="enter"&&n[e][1].type==="htmlFlow"););return e>1&&n[e-2][1].type==="linePrefix"&&(n[e][1].start=n[e-2][1].start,n[e+1][1].start=n[e-2][1].start,n.splice(e-2,2)),n}function Vy(n,e,t){const r=this;let i,o,s,a,l;return c;function c(g){return u(g)}function u(g){return n.enter("htmlFlow"),n.enter("htmlFlowData"),n.consume(g),d}function d(g){return g===33?(n.consume(g),p):g===47?(n.consume(g),o=!0,S):g===63?(n.consume(g),i=3,r.interrupt?e:f):tt(g)?(n.consume(g),s=String.fromCharCode(g),L):t(g)}function p(g){return g===45?(n.consume(g),i=2,h):g===91?(n.consume(g),i=5,a=0,x):tt(g)?(n.consume(g),i=4,r.interrupt?e:f):t(g)}function h(g){return g===45?(n.consume(g),r.interrupt?e:f):t(g)}function x(g){const Ve="CDATA[";return g===Ve.charCodeAt(a++)?(n.consume(g),a===Ve.length?r.interrupt?e:A:x):t(g)}function S(g){return tt(g)?(n.consume(g),s=String.fromCharCode(g),L):t(g)}function L(g){if(g===null||g===47||g===62||Ce(g)){const Ve=g===47,Vt=s.toLowerCase();return!Ve&&!o&&Aa.includes(Vt)?(i=1,r.interrupt?e(g):A(g)):Fy.includes(s.toLowerCase())?(i=6,Ve?(n.consume(g),$):r.interrupt?e(g):A(g)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(g):o?P(g):E(g))}return g===45||Be(g)?(n.consume(g),s+=String.fromCharCode(g),L):t(g)}function $(g){return g===62?(n.consume(g),r.interrupt?e:A):t(g)}function P(g){return R(g)?(n.consume(g),P):Q(g)}function E(g){return g===47?(n.consume(g),Q):g===58||g===95||tt(g)?(n.consume(g),X):R(g)?(n.consume(g),E):Q(g)}function X(g){return g===45||g===46||g===58||g===95||Be(g)?(n.consume(g),X):Y(g)}function Y(g){return g===61?(n.consume(g),k):R(g)?(n.consume(g),Y):E(g)}function k(g){return g===null||g===60||g===61||g===62||g===96?t(g):g===34||g===39?(n.consume(g),l=g,H):R(g)?(n.consume(g),k):te(g)}function H(g){return g===l?(n.consume(g),l=null,q):g===null||I(g)?t(g):(n.consume(g),H)}function te(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||Ce(g)?Y(g):(n.consume(g),te)}function q(g){return g===47||g===62||R(g)?E(g):t(g)}function Q(g){return g===62?(n.consume(g),T):t(g)}function T(g){return g===null||I(g)?A(g):R(g)?(n.consume(g),T):t(g)}function A(g){return g===45&&i===2?(n.consume(g),fe):g===60&&i===1?(n.consume(g),ae):g===62&&i===4?(n.consume(g),Re):g===63&&i===3?(n.consume(g),f):g===93&&i===5?(n.consume(g),ht):I(g)&&(i===6||i===7)?(n.exit("htmlFlowData"),n.check(Dy,pt,Z)(g)):g===null||I(g)?(n.exit("htmlFlowData"),Z(g)):(n.consume(g),A)}function Z(g){return n.check(_y,ne,pt)(g)}function ne(g){return n.enter("lineEnding"),n.consume(g),n.exit("lineEnding"),_}function _(g){return g===null||I(g)?Z(g):(n.enter("htmlFlowData"),A(g))}function fe(g){return g===45?(n.consume(g),f):A(g)}function ae(g){return g===47?(n.consume(g),s="",_e):A(g)}function _e(g){if(g===62){const Ve=s.toLowerCase();return Aa.includes(Ve)?(n.consume(g),Re):A(g)}return tt(g)&&s.length<8?(n.consume(g),s+=String.fromCharCode(g),_e):A(g)}function ht(g){return g===93?(n.consume(g),f):A(g)}function f(g){return g===62?(n.consume(g),Re):g===45&&i===2?(n.consume(g),f):A(g)}function Re(g){return g===null||I(g)?(n.exit("htmlFlowData"),pt(g)):(n.consume(g),Re)}function pt(g){return n.exit("htmlFlow"),e(g)}}function Hy(n,e,t){const r=this;return i;function i(s){return I(s)?(n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),o):t(s)}function o(s){return r.parser.lazy[r.now().line]?t(s):e(s)}}function jy(n,e,t){return r;function r(i){return n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),n.attempt(xi,e,t)}}const qy={name:"htmlText",tokenize:Uy};function Uy(n,e,t){const r=this;let i,o,s;return a;function a(f){return n.enter("htmlText"),n.enter("htmlTextData"),n.consume(f),l}function l(f){return f===33?(n.consume(f),c):f===47?(n.consume(f),Y):f===63?(n.consume(f),E):tt(f)?(n.consume(f),te):t(f)}function c(f){return f===45?(n.consume(f),u):f===91?(n.consume(f),o=0,x):tt(f)?(n.consume(f),P):t(f)}function u(f){return f===45?(n.consume(f),h):t(f)}function d(f){return f===null?t(f):f===45?(n.consume(f),p):I(f)?(s=d,ae(f)):(n.consume(f),d)}function p(f){return f===45?(n.consume(f),h):d(f)}function h(f){return f===62?fe(f):f===45?p(f):d(f)}function x(f){const Re="CDATA[";return f===Re.charCodeAt(o++)?(n.consume(f),o===Re.length?S:x):t(f)}function S(f){return f===null?t(f):f===93?(n.consume(f),L):I(f)?(s=S,ae(f)):(n.consume(f),S)}function L(f){return f===93?(n.consume(f),$):S(f)}function $(f){return f===62?fe(f):f===93?(n.consume(f),$):S(f)}function P(f){return f===null||f===62?fe(f):I(f)?(s=P,ae(f)):(n.consume(f),P)}function E(f){return f===null?t(f):f===63?(n.consume(f),X):I(f)?(s=E,ae(f)):(n.consume(f),E)}function X(f){return f===62?fe(f):E(f)}function Y(f){return tt(f)?(n.consume(f),k):t(f)}function k(f){return f===45||Be(f)?(n.consume(f),k):H(f)}function H(f){return I(f)?(s=H,ae(f)):R(f)?(n.consume(f),H):fe(f)}function te(f){return f===45||Be(f)?(n.consume(f),te):f===47||f===62||Ce(f)?q(f):t(f)}function q(f){return f===47?(n.consume(f),fe):f===58||f===95||tt(f)?(n.consume(f),Q):I(f)?(s=q,ae(f)):R(f)?(n.consume(f),q):fe(f)}function Q(f){return f===45||f===46||f===58||f===95||Be(f)?(n.consume(f),Q):T(f)}function T(f){return f===61?(n.consume(f),A):I(f)?(s=T,ae(f)):R(f)?(n.consume(f),T):q(f)}function A(f){return f===null||f===60||f===61||f===62||f===96?t(f):f===34||f===39?(n.consume(f),i=f,Z):I(f)?(s=A,ae(f)):R(f)?(n.consume(f),A):(n.consume(f),ne)}function Z(f){return f===i?(n.consume(f),i=void 0,_):f===null?t(f):I(f)?(s=Z,ae(f)):(n.consume(f),Z)}function ne(f){return f===null||f===34||f===39||f===60||f===61||f===96?t(f):f===47||f===62||Ce(f)?q(f):(n.consume(f),ne)}function _(f){return f===47||f===62||Ce(f)?q(f):t(f)}function fe(f){return f===62?(n.consume(f),n.exit("htmlTextData"),n.exit("htmlText"),e):t(f)}function ae(f){return n.exit("htmlTextData"),n.enter("lineEnding"),n.consume(f),n.exit("lineEnding"),_e}function _e(f){return R(f)?G(n,ht,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):ht(f)}function ht(f){return n.enter("htmlTextData"),s(f)}}const Jo={name:"labelEnd",resolveAll:Qy,resolveTo:Xy,tokenize:Zy},Ky={tokenize:Yy},Wy={tokenize:Jy},Gy={tokenize:ek};function Qy(n){let e=-1;const t=[];for(;++e<n.length;){const r=n[e][1];if(t.push(n[e]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",e+=i}}return n.length!==t.length&&ut(n,0,n.length,t),n}function Xy(n,e){let t=n.length,r=0,i,o,s,a;for(;t--;)if(i=n[t][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;n[t][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(s){if(n[t][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=t,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(s=t);const l={type:n[o][1].type==="labelLink"?"link":"image",start:{...n[o][1].start},end:{...n[n.length-1][1].end}},c={type:"label",start:{...n[o][1].start},end:{...n[s][1].end}},u={type:"labelText",start:{...n[o+r+2][1].end},end:{...n[s-2][1].start}};return a=[["enter",l,e],["enter",c,e]],a=Me(a,n.slice(o+1,o+r+3)),a=Me(a,[["enter",u,e]]),a=Me(a,Yo(e.parser.constructs.insideSpan.null,n.slice(o+r+4,s-3),e)),a=Me(a,[["exit",u,e],n[s-2],n[s-1],["exit",c,e]]),a=Me(a,n.slice(s+1)),a=Me(a,[["exit",l,e]]),ut(n,o,n.length,a),n}function Zy(n,e,t){const r=this;let i=r.events.length,o,s;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(p){return o?o._inactive?d(p):(s=r.parser.defined.includes(bn(r.sliceSerialize({start:o.end,end:r.now()}))),n.enter("labelEnd"),n.enter("labelMarker"),n.consume(p),n.exit("labelMarker"),n.exit("labelEnd"),l):t(p)}function l(p){return p===40?n.attempt(Ky,u,s?u:d)(p):p===91?n.attempt(Wy,u,s?c:d)(p):s?u(p):d(p)}function c(p){return n.attempt(Gy,u,d)(p)}function u(p){return e(p)}function d(p){return o._balanced=!0,t(p)}}function Yy(n,e,t){return r;function r(d){return n.enter("resource"),n.enter("resourceMarker"),n.consume(d),n.exit("resourceMarker"),i}function i(d){return Ce(d)?Gn(n,o)(d):o(d)}function o(d){return d===41?u(d):Bc(n,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function s(d){return Ce(d)?Gn(n,l)(d):u(d)}function a(d){return t(d)}function l(d){return d===34||d===39||d===40?Mc(n,c,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):u(d)}function c(d){return Ce(d)?Gn(n,u)(d):u(d)}function u(d){return d===41?(n.enter("resourceMarker"),n.consume(d),n.exit("resourceMarker"),n.exit("resource"),e):t(d)}}function Jy(n,e,t){const r=this;return i;function i(a){return Oc.call(r,n,o,s,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(bn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?e(a):t(a)}function s(a){return t(a)}}function ek(n,e,t){return r;function r(o){return n.enter("reference"),n.enter("referenceMarker"),n.consume(o),n.exit("referenceMarker"),i}function i(o){return o===93?(n.enter("referenceMarker"),n.consume(o),n.exit("referenceMarker"),n.exit("reference"),e):t(o)}}const tk={name:"labelStartImage",resolveAll:Jo.resolveAll,tokenize:nk};function nk(n,e,t){const r=this;return i;function i(a){return n.enter("labelImage"),n.enter("labelImageMarker"),n.consume(a),n.exit("labelImageMarker"),o}function o(a){return a===91?(n.enter("labelMarker"),n.consume(a),n.exit("labelMarker"),n.exit("labelImage"),s):t(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(a):e(a)}}const rk={name:"labelStartLink",resolveAll:Jo.resolveAll,tokenize:ik};function ik(n,e,t){const r=this;return i;function i(s){return n.enter("labelLink"),n.enter("labelMarker"),n.consume(s),n.exit("labelMarker"),n.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(s):e(s)}}const Li={name:"lineEnding",tokenize:ok};function ok(n,e){return t;function t(r){return n.enter("lineEnding"),n.consume(r),n.exit("lineEnding"),G(n,e,"linePrefix")}}const Lr={name:"thematicBreak",tokenize:sk};function sk(n,e,t){let r=0,i;return o;function o(c){return n.enter("thematicBreak"),s(c)}function s(c){return i=c,a(c)}function a(c){return c===i?(n.enter("thematicBreakSequence"),l(c)):r>=3&&(c===null||I(c))?(n.exit("thematicBreak"),e(c)):t(c)}function l(c){return c===i?(n.consume(c),r++,l):(n.exit("thematicBreakSequence"),R(c)?G(n,a,"whitespace")(c):a(c))}}const we={continuation:{tokenize:uk},exit:hk,name:"list",tokenize:ck},ak={partial:!0,tokenize:pk},lk={partial:!0,tokenize:dk};function ck(n,e,t){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,s=0;return a;function a(h){const x=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:ho(h)){if(r.containerState.type||(r.containerState.type=x,n.enter(x,{_container:!0})),x==="listUnordered")return n.enter("listItemPrefix"),h===42||h===45?n.check(Lr,t,c)(h):c(h);if(!r.interrupt||h===49)return n.enter("listItemPrefix"),n.enter("listItemValue"),l(h)}return t(h)}function l(h){return ho(h)&&++s<10?(n.consume(h),l):(!r.interrupt||s<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(n.exit("listItemValue"),c(h)):t(h)}function c(h){return n.enter("listItemMarker"),n.consume(h),n.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,n.check(xi,r.interrupt?t:u,n.attempt(ak,p,d))}function u(h){return r.containerState.initialBlankLine=!0,o++,p(h)}function d(h){return R(h)?(n.enter("listItemPrefixWhitespace"),n.consume(h),n.exit("listItemPrefixWhitespace"),p):t(h)}function p(h){return r.containerState.size=o+r.sliceSerialize(n.exit("listItemPrefix"),!0).length,e(h)}}function uk(n,e,t){const r=this;return r.containerState._closeFlow=void 0,n.check(xi,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,G(n,e,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!R(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,s(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,n.attempt(lk,e,s)(a))}function s(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,G(n,n.attempt(we,e,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function dk(n,e,t){const r=this;return G(n,i,"listItemIndent",r.containerState.size+1);function i(o){const s=r.events[r.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===r.containerState.size?e(o):t(o)}}function hk(n){n.exit(this.containerState.type)}function pk(n,e,t){const r=this;return G(n,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const s=r.events[r.events.length-1];return!R(o)&&s&&s[1].type==="listItemPrefixWhitespace"?e(o):t(o)}}const Ta={name:"setextUnderline",resolveTo:fk,tokenize:gk};function fk(n,e){let t=n.length,r,i,o;for(;t--;)if(n[t][0]==="enter"){if(n[t][1].type==="content"){r=t;break}n[t][1].type==="paragraph"&&(i=t)}else n[t][1].type==="content"&&n.splice(t,1),!o&&n[t][1].type==="definition"&&(o=t);const s={type:"setextHeading",start:{...n[i][1].start},end:{...n[n.length-1][1].end}};return n[i][1].type="setextHeadingText",o?(n.splice(i,0,["enter",s,e]),n.splice(o+1,0,["exit",n[r][1],e]),n[r][1].end={...n[o][1].end}):n[r][1]=s,n.push(["exit",s,e]),n}function gk(n,e,t){const r=this;let i;return o;function o(c){let u=r.events.length,d;for(;u--;)if(r.events[u][1].type!=="lineEnding"&&r.events[u][1].type!=="linePrefix"&&r.events[u][1].type!=="content"){d=r.events[u][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||d)?(n.enter("setextHeadingLine"),i=c,s(c)):t(c)}function s(c){return n.enter("setextHeadingLineSequence"),a(c)}function a(c){return c===i?(n.consume(c),a):(n.exit("setextHeadingLineSequence"),R(c)?G(n,l,"lineSuffix")(c):l(c))}function l(c){return c===null||I(c)?(n.exit("setextHeadingLine"),e(c)):t(c)}}const mk={tokenize:bk};function bk(n){const e=this,t=n.attempt(xi,r,n.attempt(this.parser.constructs.flowInitial,i,G(n,n.attempt(this.parser.constructs.flow,i,n.attempt(xy,i)),"linePrefix")));return t;function r(o){if(o===null){n.consume(o);return}return n.enter("lineEndingBlank"),n.consume(o),n.exit("lineEndingBlank"),e.currentConstruct=void 0,t}function i(o){if(o===null){n.consume(o);return}return n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),e.currentConstruct=void 0,t}}const vk={resolveAll:Lc()},yk=zc("string"),kk=zc("text");function zc(n){return{resolveAll:Lc(n==="text"?wk:void 0),tokenize:e};function e(t){const r=this,i=this.parser.constructs[n],o=t.attempt(i,s,a);return s;function s(u){return c(u)?o(u):a(u)}function a(u){if(u===null){t.consume(u);return}return t.enter("data"),t.consume(u),l}function l(u){return c(u)?(t.exit("data"),o(u)):(t.consume(u),l)}function c(u){if(u===null)return!0;const d=i[u];let p=-1;if(d)for(;++p<d.length;){const h=d[p];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Lc(n){return e;function e(t,r){let i=-1,o;for(;++i<=t.length;)o===void 0?t[i]&&t[i][1].type==="data"&&(o=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==o+2&&(t[o][1].end=t[i-1][1].end,t.splice(o+2,i-o-2),i=o+2),o=void 0);return n?n(t,r):t}}function wk(n,e){let t=0;for(;++t<=n.length;)if((t===n.length||n[t][1].type==="lineEnding")&&n[t-1][1].type==="data"){const r=n[t-1][1],i=e.sliceStream(r);let o=i.length,s=-1,a=0,l;for(;o--;){const c=i[o];if(typeof c=="string"){for(s=c.length;c.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(c===-2)l=!0,a++;else if(c!==-1){o++;break}}if(a){const c={type:t===n.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:r.start._bufferIndex+s,_index:r.start._index+o,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(n.splice(t,0,["enter",c,e],["exit",c,e]),t+=2)}t++}return n}const xk={42:we,43:we,45:we,48:we,49:we,50:we,51:we,52:we,53:we,54:we,55:we,56:we,57:we,62:Ec},$k={91:Ay},Ck={[-2]:zi,[-1]:zi,32:zi},Sk={35:zy,42:Lr,45:[Ta,Lr],60:Ny,61:Ta,95:Lr,96:Ea,126:Ea},Ek={38:Tc,92:Ac},Ak={[-5]:Li,[-4]:Li,[-3]:Li,33:tk,38:Tc,42:po,60:[ry,qy],91:rk,92:[Oy,Ac],93:Jo,95:po,96:my},Tk={null:[po,vk]},Ik={null:[42,95]},Bk={null:[]},Ok=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Ik,contentInitial:$k,disable:Bk,document:xk,flow:Sk,flowInitial:Ck,insideSpan:Tk,string:Ek,text:Ak},Symbol.toStringTag,{value:"Module"}));function Mk(n,e,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},o=[];let s=[],a=[];const l={attempt:H(Y),check:H(k),consume:P,enter:E,exit:X,interrupt:H(k,{interrupt:!0})},c={code:null,containerState:{},defineSkip:S,events:[],now:x,parser:n,previous:null,sliceSerialize:p,sliceStream:h,write:d};let u=e.tokenize.call(c,l);return e.resolveAll&&o.push(e),c;function d(T){return s=Me(s,T),L(),s[s.length-1]!==null?[]:(te(e,0),c.events=Yo(o,c.events,c),c.events)}function p(T,A){return Lk(h(T),A)}function h(T){return zk(s,T)}function x(){const{_bufferIndex:T,_index:A,line:Z,column:ne,offset:_}=r;return{_bufferIndex:T,_index:A,line:Z,column:ne,offset:_}}function S(T){i[T.line]=T.column,Q()}function L(){let T;for(;r._index<s.length;){const A=s[r._index];if(typeof A=="string")for(T=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===T&&r._bufferIndex<A.length;)$(A.charCodeAt(r._bufferIndex));else $(A)}}function $(T){u=u(T)}function P(T){I(T)?(r.line++,r.column=1,r.offset+=T===-3?2:1,Q()):T!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=T}function E(T,A){const Z=A||{};return Z.type=T,Z.start=x(),c.events.push(["enter",Z,c]),a.push(Z),Z}function X(T){const A=a.pop();return A.end=x(),c.events.push(["exit",A,c]),A}function Y(T,A){te(T,A.from)}function k(T,A){A.restore()}function H(T,A){return Z;function Z(ne,_,fe){let ae,_e,ht,f;return Array.isArray(ne)?pt(ne):"tokenize"in ne?pt([ne]):Re(ne);function Re(le){return Fn;function Fn(At){const ln=At!==null&&le[At],cn=At!==null&&le.null,vr=[...Array.isArray(ln)?ln:ln?[ln]:[],...Array.isArray(cn)?cn:cn?[cn]:[]];return pt(vr)(At)}}function pt(le){return ae=le,_e=0,le.length===0?fe:g(le[_e])}function g(le){return Fn;function Fn(At){return f=q(),ht=le,le.partial||(c.currentConstruct=le),le.name&&c.parser.constructs.disable.null.includes(le.name)?Vt():le.tokenize.call(A?Object.assign(Object.create(c),A):c,l,Ve,Vt)(At)}}function Ve(le){return T(ht,f),_}function Vt(le){return f.restore(),++_e<ae.length?g(ae[_e]):fe}}}function te(T,A){T.resolveAll&&!o.includes(T)&&o.push(T),T.resolve&&ut(c.events,A,c.events.length-A,T.resolve(c.events.slice(A),c)),T.resolveTo&&(c.events=T.resolveTo(c.events,c))}function q(){const T=x(),A=c.previous,Z=c.currentConstruct,ne=c.events.length,_=Array.from(a);return{from:ne,restore:fe};function fe(){r=T,c.previous=A,c.currentConstruct=Z,c.events.length=ne,a=_,Q()}}function Q(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function zk(n,e){const t=e.start._index,r=e.start._bufferIndex,i=e.end._index,o=e.end._bufferIndex;let s;if(t===i)s=[n[t].slice(r,o)];else{if(s=n.slice(t,i),r>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(r):s.shift()}o>0&&s.push(n[i].slice(0,o))}return s}function Lk(n,e){let t=-1;const r=[];let i;for(;++t<n.length;){const o=n[t];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=e?" ":"	";break}case-1:{if(!e&&i)continue;s=" ";break}default:s=String.fromCharCode(o)}i=o===-2,r.push(s)}return r.join("")}function Pk(n){const r={constructs:Hv([Ok,...(n||{}).extensions||[]]),content:i(Xv),defined:[],document:i(Yv),flow:i(mk),lazy:{},string:i(yk),text:i(kk)};return r;function i(o){return s;function s(a){return Mk(r,o,a)}}}function Fk(n){for(;!Ic(n););return n}const Ia=/[\0\t\n\r]/g;function Nk(){let n=1,e="",t=!0,r;return i;function i(o,s,a){const l=[];let c,u,d,p,h;for(o=e+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),d=0,e="",t&&(o.charCodeAt(0)===65279&&d++,t=void 0);d<o.length;){if(Ia.lastIndex=d,c=Ia.exec(o),p=c&&c.index!==void 0?c.index:o.length,h=o.charCodeAt(p),!c){e=o.slice(d);break}if(h===10&&d===p&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),d<p&&(l.push(o.slice(d,p)),n+=p-d),h){case 0:{l.push(65533),n++;break}case 9:{for(u=Math.ceil(n/4)*4,l.push(-2);n++<u;)l.push(-1);break}case 10:{l.push(-4),n=1;break}default:r=!0,n=1}d=p+1}return a&&(r&&l.push(-5),e&&l.push(e),l.push(null)),l}}const Dk=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Pc(n){return n.replace(Dk,_k)}function _k(n,e,t){if(e)return e;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),o=i===120||i===88;return Sc(t.slice(o?2:1),o?16:10)}return Zo(t)||n}function Qn(n){return!n||typeof n!="object"?"":"position"in n||"type"in n?Ba(n.position):"start"in n||"end"in n?Ba(n):"line"in n||"column"in n?fo(n):""}function fo(n){return Oa(n&&n.line)+":"+Oa(n&&n.column)}function Ba(n){return fo(n&&n.start)+"-"+fo(n&&n.end)}function Oa(n){return n&&typeof n=="number"?n:1}const Fc={}.hasOwnProperty;function Rk(n,e,t){return typeof e!="string"&&(t=e,e=void 0),Vk(t)(Fk(Pk(t).document().write(Nk()(n,e,!0))))}function Vk(n){const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(ms),autolinkProtocol:q,autolinkEmail:q,atxHeading:o(ps),blockQuote:o(cn),characterEscape:q,characterReference:q,codeFenced:o(vr),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(vr,s),codeText:o(Tu,s),codeTextData:q,data:q,codeFlowValue:q,definition:o(Iu),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(Bu),hardBreakEscape:o(fs),hardBreakTrailing:o(fs),htmlFlow:o(gs,s),htmlFlowData:q,htmlText:o(gs,s),htmlTextData:q,image:o(Ou),label:s,link:o(ms),listItem:o(Mu),listItemValue:p,listOrdered:o(bs,d),listUnordered:o(bs),paragraph:o(zu),reference:g,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(ps),strong:o(Lu),thematicBreak:o(Fu)},exit:{atxHeading:l(),atxHeadingSequence:Y,autolink:l(),autolinkEmail:ln,autolinkProtocol:At,blockQuote:l(),characterEscapeValue:Q,characterReferenceMarkerHexadecimal:Vt,characterReferenceMarkerNumeric:Vt,characterReferenceValue:le,characterReference:Fn,codeFenced:l(L),codeFencedFence:S,codeFencedFenceInfo:h,codeFencedFenceMeta:x,codeFlowValue:Q,codeIndented:l($),codeText:l(_),codeTextData:Q,data:Q,definition:l(),definitionDestinationString:X,definitionLabelString:P,definitionTitleString:E,emphasis:l(),hardBreakEscape:l(A),hardBreakTrailing:l(A),htmlFlow:l(Z),htmlFlowData:Q,htmlText:l(ne),htmlTextData:Q,image:l(ae),label:ht,labelText:_e,lineEnding:T,link:l(fe),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:Ve,resourceDestinationString:f,resourceTitleString:Re,resource:pt,setextHeading:l(te),setextHeadingLineSequence:H,setextHeadingText:k,strong:l(),thematicBreak:l()}};Nc(e,(n||{}).mdastExtensions||[]);const t={};return r;function r(y){let C={type:"root",children:[]};const B={stack:[C],tokenStack:[],config:e,enter:a,exit:c,buffer:s,resume:u,data:t},F=[];let U=-1;for(;++U<y.length;)if(y[U][1].type==="listOrdered"||y[U][1].type==="listUnordered")if(y[U][0]==="enter")F.push(U);else{const He=F.pop();U=i(y,He,U)}for(U=-1;++U<y.length;){const He=e[y[U][0]];Fc.call(He,y[U][1].type)&&He[y[U][1].type].call(Object.assign({sliceSerialize:y[U][2].sliceSerialize},B),y[U][1])}if(B.tokenStack.length>0){const He=B.tokenStack[B.tokenStack.length-1];(He[1]||Ma).call(B,void 0,He[0])}for(C.position={start:Bt(y.length>0?y[0][1].start:{line:1,column:1,offset:0}),end:Bt(y.length>0?y[y.length-2][1].end:{line:1,column:1,offset:0})},U=-1;++U<e.transforms.length;)C=e.transforms[U](C)||C;return C}function i(y,C,B){let F=C-1,U=-1,He=!1,Ht,ft,Nn,Dn;for(;++F<=B;){const Ae=y[F];switch(Ae[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ae[0]==="enter"?U++:U--,Dn=void 0;break}case"lineEndingBlank":{Ae[0]==="enter"&&(Ht&&!Dn&&!U&&!Nn&&(Nn=F),Dn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Dn=void 0}if(!U&&Ae[0]==="enter"&&Ae[1].type==="listItemPrefix"||U===-1&&Ae[0]==="exit"&&(Ae[1].type==="listUnordered"||Ae[1].type==="listOrdered")){if(Ht){let un=F;for(ft=void 0;un--;){const gt=y[un];if(gt[1].type==="lineEnding"||gt[1].type==="lineEndingBlank"){if(gt[0]==="exit")continue;ft&&(y[ft][1].type="lineEndingBlank",He=!0),gt[1].type="lineEnding",ft=un}else if(!(gt[1].type==="linePrefix"||gt[1].type==="blockQuotePrefix"||gt[1].type==="blockQuotePrefixWhitespace"||gt[1].type==="blockQuoteMarker"||gt[1].type==="listItemIndent"))break}Nn&&(!ft||Nn<ft)&&(Ht._spread=!0),Ht.end=Object.assign({},ft?y[ft][1].start:Ae[1].end),y.splice(ft||F,0,["exit",Ht,Ae[2]]),F++,B++}if(Ae[1].type==="listItemPrefix"){const un={type:"listItem",_spread:!1,start:Object.assign({},Ae[1].start),end:void 0};Ht=un,y.splice(F,0,["enter",un,Ae[2]]),F++,B++,Nn=void 0,Dn=!0}}}return y[C][1]._spread=He,B}function o(y,C){return B;function B(F){a.call(this,y(F),F),C&&C.call(this,F)}}function s(){this.stack.push({type:"fragment",children:[]})}function a(y,C,B){this.stack[this.stack.length-1].children.push(y),this.stack.push(y),this.tokenStack.push([C,B||void 0]),y.position={start:Bt(C.start),end:void 0}}function l(y){return C;function C(B){y&&y.call(this,B),c.call(this,B)}}function c(y,C){const B=this.stack.pop(),F=this.tokenStack.pop();if(F)F[0].type!==y.type&&(C?C.call(this,y,F[0]):(F[1]||Ma).call(this,y,F[0]));else throw new Error("Cannot close `"+y.type+"` ("+Qn({start:y.start,end:y.end})+"): it’s not open");B.position.end=Bt(y.end)}function u(){return Xo(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function p(y){if(this.data.expectingFirstListItemValue){const C=this.stack[this.stack.length-2];C.start=Number.parseInt(this.sliceSerialize(y),10),this.data.expectingFirstListItemValue=void 0}}function h(){const y=this.resume(),C=this.stack[this.stack.length-1];C.lang=y}function x(){const y=this.resume(),C=this.stack[this.stack.length-1];C.meta=y}function S(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function L(){const y=this.resume(),C=this.stack[this.stack.length-1];C.value=y.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function $(){const y=this.resume(),C=this.stack[this.stack.length-1];C.value=y.replace(/(\r?\n|\r)$/g,"")}function P(y){const C=this.resume(),B=this.stack[this.stack.length-1];B.label=C,B.identifier=bn(this.sliceSerialize(y)).toLowerCase()}function E(){const y=this.resume(),C=this.stack[this.stack.length-1];C.title=y}function X(){const y=this.resume(),C=this.stack[this.stack.length-1];C.url=y}function Y(y){const C=this.stack[this.stack.length-1];if(!C.depth){const B=this.sliceSerialize(y).length;C.depth=B}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function H(y){const C=this.stack[this.stack.length-1];C.depth=this.sliceSerialize(y).codePointAt(0)===61?1:2}function te(){this.data.setextHeadingSlurpLineEnding=void 0}function q(y){const B=this.stack[this.stack.length-1].children;let F=B[B.length-1];(!F||F.type!=="text")&&(F=Pu(),F.position={start:Bt(y.start),end:void 0},B.push(F)),this.stack.push(F)}function Q(y){const C=this.stack.pop();C.value+=this.sliceSerialize(y),C.position.end=Bt(y.end)}function T(y){const C=this.stack[this.stack.length-1];if(this.data.atHardBreak){const B=C.children[C.children.length-1];B.position.end=Bt(y.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(C.type)&&(q.call(this,y),Q.call(this,y))}function A(){this.data.atHardBreak=!0}function Z(){const y=this.resume(),C=this.stack[this.stack.length-1];C.value=y}function ne(){const y=this.resume(),C=this.stack[this.stack.length-1];C.value=y}function _(){const y=this.resume(),C=this.stack[this.stack.length-1];C.value=y}function fe(){const y=this.stack[this.stack.length-1];if(this.data.inReference){const C=this.data.referenceType||"shortcut";y.type+="Reference",y.referenceType=C,delete y.url,delete y.title}else delete y.identifier,delete y.label;this.data.referenceType=void 0}function ae(){const y=this.stack[this.stack.length-1];if(this.data.inReference){const C=this.data.referenceType||"shortcut";y.type+="Reference",y.referenceType=C,delete y.url,delete y.title}else delete y.identifier,delete y.label;this.data.referenceType=void 0}function _e(y){const C=this.sliceSerialize(y),B=this.stack[this.stack.length-2];B.label=Pc(C),B.identifier=bn(C).toLowerCase()}function ht(){const y=this.stack[this.stack.length-1],C=this.resume(),B=this.stack[this.stack.length-1];if(this.data.inReference=!0,B.type==="link"){const F=y.children;B.children=F}else B.alt=C}function f(){const y=this.resume(),C=this.stack[this.stack.length-1];C.url=y}function Re(){const y=this.resume(),C=this.stack[this.stack.length-1];C.title=y}function pt(){this.data.inReference=void 0}function g(){this.data.referenceType="collapsed"}function Ve(y){const C=this.resume(),B=this.stack[this.stack.length-1];B.label=C,B.identifier=bn(this.sliceSerialize(y)).toLowerCase(),this.data.referenceType="full"}function Vt(y){this.data.characterReferenceType=y.type}function le(y){const C=this.sliceSerialize(y),B=this.data.characterReferenceType;let F;B?(F=Sc(C,B==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):F=Zo(C);const U=this.stack[this.stack.length-1];U.value+=F}function Fn(y){const C=this.stack.pop();C.position.end=Bt(y.end)}function At(y){Q.call(this,y);const C=this.stack[this.stack.length-1];C.url=this.sliceSerialize(y)}function ln(y){Q.call(this,y);const C=this.stack[this.stack.length-1];C.url="mailto:"+this.sliceSerialize(y)}function cn(){return{type:"blockquote",children:[]}}function vr(){return{type:"code",lang:null,meta:null,value:""}}function Tu(){return{type:"inlineCode",value:""}}function Iu(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Bu(){return{type:"emphasis",children:[]}}function ps(){return{type:"heading",depth:0,children:[]}}function fs(){return{type:"break"}}function gs(){return{type:"html",value:""}}function Ou(){return{type:"image",title:null,url:"",alt:null}}function ms(){return{type:"link",title:null,url:"",children:[]}}function bs(y){return{type:"list",ordered:y.type==="listOrdered",start:null,spread:y._spread,children:[]}}function Mu(y){return{type:"listItem",spread:y._spread,checked:null,children:[]}}function zu(){return{type:"paragraph",children:[]}}function Lu(){return{type:"strong",children:[]}}function Pu(){return{type:"text",value:""}}function Fu(){return{type:"thematicBreak"}}}function Bt(n){return{line:n.line,column:n.column,offset:n.offset}}function Nc(n,e){let t=-1;for(;++t<e.length;){const r=e[t];Array.isArray(r)?Nc(n,r):Hk(n,r)}}function Hk(n,e){let t;for(t in e)if(Fc.call(e,t))switch(t){case"canContainEols":{const r=e[t];r&&n[t].push(...r);break}case"transforms":{const r=e[t];r&&n[t].push(...r);break}case"enter":case"exit":{const r=e[t];r&&Object.assign(n[t],r);break}}}function Ma(n,e){throw n?new Error("Cannot close `"+n.type+"` ("+Qn({start:n.start,end:n.end})+"): a different token (`"+e.type+"`, "+Qn({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+Qn({start:e.start,end:e.end})+") is still open")}function jk(n){const e=this;e.parser=t;function t(r){return Rk(r,{...e.data("settings"),...n,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})}}const za={}.hasOwnProperty;function Dc(n,e){const t=e||{};function r(i,...o){let s=r.invalid;const a=r.handlers;if(i&&za.call(i,n)){const l=String(i[n]);s=za.call(a,l)?a[l]:r.unknown}if(s)return s.call(this,i,...o)}return r.handlers=t.handlers||{},r.invalid=t.invalid,r.unknown=t.unknown,r}const qk={}.hasOwnProperty;function _c(n,e){let t=-1,r;if(e.extensions)for(;++t<e.extensions.length;)_c(n,e.extensions[t]);for(r in e)if(qk.call(e,r))switch(r){case"extensions":break;case"unsafe":{La(n[r],e[r]);break}case"join":{La(n[r],e[r]);break}case"handlers":{Uk(n[r],e[r]);break}default:n.options[r]=e[r]}return n}function La(n,e){e&&n.push(...e)}function Uk(n,e){e&&Object.assign(n,e)}function Kk(n,e,t,r){const i=t.enter("blockquote"),o=t.createTracker(r);o.move("> "),o.shift(2);const s=t.indentLines(t.containerFlow(n,o.current()),Wk);return i(),s}function Wk(n,e,t){return">"+(t?"":" ")+n}function Rc(n,e){return Pa(n,e.inConstruct,!0)&&!Pa(n,e.notInConstruct,!1)}function Pa(n,e,t){if(typeof e=="string"&&(e=[e]),!e||e.length===0)return t;let r=-1;for(;++r<e.length;)if(n.includes(e[r]))return!0;return!1}function Fa(n,e,t,r){let i=-1;for(;++i<t.unsafe.length;)if(t.unsafe[i].character===`
`&&Rc(t.stack,t.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function Gk(n,e){const t=String(n);let r=t.indexOf(e),i=r,o=0,s=0;if(typeof e!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++o>s&&(s=o):o=1,i=r+e.length,r=t.indexOf(e,i);return s}function go(n,e){return!!(e.options.fences===!1&&n.value&&!n.lang&&/[^ \r\n]/.test(n.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(n.value))}function Qk(n){const e=n.options.fence||"`";if(e!=="`"&&e!=="~")throw new Error("Cannot serialize code with `"+e+"` for `options.fence`, expected `` ` `` or `~`");return e}function Xk(n,e,t,r){const i=Qk(t),o=n.value||"",s=i==="`"?"GraveAccent":"Tilde";if(go(n,t)){const d=t.enter("codeIndented"),p=t.indentLines(o,Zk);return d(),p}const a=t.createTracker(r),l=i.repeat(Math.max(Gk(o,i)+1,3)),c=t.enter("codeFenced");let u=a.move(l);if(n.lang){const d=t.enter(`codeFencedLang${s}`);u+=a.move(t.safe(n.lang,{before:u,after:" ",encode:["`"],...a.current()})),d()}if(n.lang&&n.meta){const d=t.enter(`codeFencedMeta${s}`);u+=a.move(" "),u+=a.move(t.safe(n.meta,{before:u,after:`
`,encode:["`"],...a.current()})),d()}return u+=a.move(`
`),o&&(u+=a.move(o+`
`)),u+=a.move(l),c(),u}function Zk(n,e,t){return(t?"":"    ")+n}function es(n){const e=n.options.quote||'"';if(e!=='"'&&e!=="'")throw new Error("Cannot serialize title with `"+e+"` for `options.quote`, expected `\"`, or `'`");return e}function Yk(n,e,t,r){const i=es(t),o=i==='"'?"Quote":"Apostrophe",s=t.enter("definition");let a=t.enter("label");const l=t.createTracker(r);let c=l.move("[");return c+=l.move(t.safe(t.associationId(n),{before:c,after:"]",...l.current()})),c+=l.move("]: "),a(),!n.url||/[\0- \u007F]/.test(n.url)?(a=t.enter("destinationLiteral"),c+=l.move("<"),c+=l.move(t.safe(n.url,{before:c,after:">",...l.current()})),c+=l.move(">")):(a=t.enter("destinationRaw"),c+=l.move(t.safe(n.url,{before:c,after:n.title?" ":`
`,...l.current()}))),a(),n.title&&(a=t.enter(`title${o}`),c+=l.move(" "+i),c+=l.move(t.safe(n.title,{before:c,after:i,...l.current()})),c+=l.move(i),a()),s(),c}function Jk(n){const e=n.options.emphasis||"*";if(e!=="*"&&e!=="_")throw new Error("Cannot serialize emphasis with `"+e+"` for `options.emphasis`, expected `*`, or `_`");return e}function Dt(n){return"&#x"+n.toString(16).toUpperCase()+";"}function Jr(n,e,t){const r=Yr(n),i=Yr(e);return r===void 0?i===void 0?t==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Vc.peek=ew;function Vc(n,e,t,r){const i=Jk(t),o=t.enter("emphasis"),s=t.createTracker(r),a=s.move(i);let l=s.move(t.containerPhrasing(n,{after:i,before:a,...s.current()}));const c=l.charCodeAt(0),u=Jr(r.before.charCodeAt(r.before.length-1),c,i);u.inside&&(l=Dt(c)+l.slice(1));const d=l.charCodeAt(l.length-1),p=Jr(r.after.charCodeAt(0),d,i);p.inside&&(l=l.slice(0,-1)+Dt(d));const h=s.move(i);return o(),t.attentionEncodeSurroundingInfo={after:p.outside,before:u.outside},a+l+h}function ew(n,e,t){return t.options.emphasis||"*"}const ts=function(n){if(n==null)return iw;if(typeof n=="function")return $i(n);if(typeof n=="object")return Array.isArray(n)?tw(n):nw(n);if(typeof n=="string")return rw(n);throw new Error("Expected function, string, or object as test")};function tw(n){const e=[];let t=-1;for(;++t<n.length;)e[t]=ts(n[t]);return $i(r);function r(...i){let o=-1;for(;++o<e.length;)if(e[o].apply(this,i))return!0;return!1}}function nw(n){const e=n;return $i(t);function t(r){const i=r;let o;for(o in n)if(i[o]!==e[o])return!1;return!0}}function rw(n){return $i(e);function e(t){return t&&t.type===n}}function $i(n){return e;function e(t,r,i){return!!(ow(t)&&n.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function iw(){return!0}function ow(n){return n!==null&&typeof n=="object"&&"type"in n}const Hc=[],sw=!0,mo=!1,aw="skip";function lw(n,e,t,r){let i;typeof e=="function"&&typeof t!="function"?(r=t,t=e):i=e;const o=ts(i),s=r?-1:1;a(n,void 0,[])();function a(l,c,u){const d=l&&typeof l=="object"?l:{};if(typeof d.type=="string"){const h=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(l.type+(h?"<"+h+">":""))+")"})}return p;function p(){let h=Hc,x,S,L;if((!e||o(l,c,u[u.length-1]||void 0))&&(h=cw(t(l,u)),h[0]===mo))return h;if("children"in l&&l.children){const $=l;if($.children&&h[0]!==aw)for(S=(r?$.children.length:-1)+s,L=u.concat($);S>-1&&S<$.children.length;){const P=$.children[S];if(x=a(P,S,L)(),x[0]===mo)return x;S=typeof x[1]=="number"?x[1]:S+s}}return h}}}function cw(n){return Array.isArray(n)?n:typeof n=="number"?[sw,n]:n==null?Hc:[n]}function jc(n,e,t,r){let i,o,s;typeof e=="function"&&typeof t!="function"?(o=void 0,s=e,i=t):(o=e,s=t,i=r),lw(n,o,a,i);function a(l,c){const u=c[c.length-1],d=u?u.children.indexOf(l):void 0;return s(l,d,u)}}function qc(n,e){let t=!1;return jc(n,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return t=!0,mo}),!!((!n.depth||n.depth<3)&&Xo(n)&&(e.options.setext||t))}function uw(n,e,t,r){const i=Math.max(Math.min(6,n.depth||1),1),o=t.createTracker(r);if(qc(n,t)){const u=t.enter("headingSetext"),d=t.enter("phrasing"),p=t.containerPhrasing(n,{...o.current(),before:`
`,after:`
`});return d(),u(),p+`
`+(i===1?"=":"-").repeat(p.length-(Math.max(p.lastIndexOf("\r"),p.lastIndexOf(`
`))+1))}const s="#".repeat(i),a=t.enter("headingAtx"),l=t.enter("phrasing");o.move(s+" ");let c=t.containerPhrasing(n,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(c)&&(c=Dt(c.charCodeAt(0))+c.slice(1)),c=c?s+" "+c:s,t.options.closeAtx&&(c+=" "+s),l(),a(),c}Uc.peek=dw;function Uc(n){return n.value||""}function dw(){return"<"}Kc.peek=hw;function Kc(n,e,t,r){const i=es(t),o=i==='"'?"Quote":"Apostrophe",s=t.enter("image");let a=t.enter("label");const l=t.createTracker(r);let c=l.move("![");return c+=l.move(t.safe(n.alt,{before:c,after:"]",...l.current()})),c+=l.move("]("),a(),!n.url&&n.title||/[\0- \u007F]/.test(n.url)?(a=t.enter("destinationLiteral"),c+=l.move("<"),c+=l.move(t.safe(n.url,{before:c,after:">",...l.current()})),c+=l.move(">")):(a=t.enter("destinationRaw"),c+=l.move(t.safe(n.url,{before:c,after:n.title?" ":")",...l.current()}))),a(),n.title&&(a=t.enter(`title${o}`),c+=l.move(" "+i),c+=l.move(t.safe(n.title,{before:c,after:i,...l.current()})),c+=l.move(i),a()),c+=l.move(")"),s(),c}function hw(){return"!"}Wc.peek=pw;function Wc(n,e,t,r){const i=n.referenceType,o=t.enter("imageReference");let s=t.enter("label");const a=t.createTracker(r);let l=a.move("![");const c=t.safe(n.alt,{before:l,after:"]",...a.current()});l+=a.move(c+"]["),s();const u=t.stack;t.stack=[],s=t.enter("reference");const d=t.safe(t.associationId(n),{before:l,after:"]",...a.current()});return s(),t.stack=u,o(),i==="full"||!c||c!==d?l+=a.move(d+"]"):i==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function pw(){return"!"}Gc.peek=fw;function Gc(n,e,t){let r=n.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<t.unsafe.length;){const s=t.unsafe[o],a=t.compilePattern(s);let l;if(s.atBreak)for(;l=a.exec(r);){let c=l.index;r.charCodeAt(c)===10&&r.charCodeAt(c-1)===13&&c--,r=r.slice(0,c)+" "+r.slice(l.index+1)}}return i+r+i}function fw(){return"`"}function Qc(n,e){const t=Xo(n);return!!(!e.options.resourceLink&&n.url&&!n.title&&n.children&&n.children.length===1&&n.children[0].type==="text"&&(t===n.url||"mailto:"+t===n.url)&&/^[a-z][a-z+.-]+:/i.test(n.url)&&!/[\0- <>\u007F]/.test(n.url))}Xc.peek=gw;function Xc(n,e,t,r){const i=es(t),o=i==='"'?"Quote":"Apostrophe",s=t.createTracker(r);let a,l;if(Qc(n,t)){const u=t.stack;t.stack=[],a=t.enter("autolink");let d=s.move("<");return d+=s.move(t.containerPhrasing(n,{before:d,after:">",...s.current()})),d+=s.move(">"),a(),t.stack=u,d}a=t.enter("link"),l=t.enter("label");let c=s.move("[");return c+=s.move(t.containerPhrasing(n,{before:c,after:"](",...s.current()})),c+=s.move("]("),l(),!n.url&&n.title||/[\0- \u007F]/.test(n.url)?(l=t.enter("destinationLiteral"),c+=s.move("<"),c+=s.move(t.safe(n.url,{before:c,after:">",...s.current()})),c+=s.move(">")):(l=t.enter("destinationRaw"),c+=s.move(t.safe(n.url,{before:c,after:n.title?" ":")",...s.current()}))),l(),n.title&&(l=t.enter(`title${o}`),c+=s.move(" "+i),c+=s.move(t.safe(n.title,{before:c,after:i,...s.current()})),c+=s.move(i),l()),c+=s.move(")"),a(),c}function gw(n,e,t){return Qc(n,t)?"<":"["}Zc.peek=mw;function Zc(n,e,t,r){const i=n.referenceType,o=t.enter("linkReference");let s=t.enter("label");const a=t.createTracker(r);let l=a.move("[");const c=t.containerPhrasing(n,{before:l,after:"]",...a.current()});l+=a.move(c+"]["),s();const u=t.stack;t.stack=[],s=t.enter("reference");const d=t.safe(t.associationId(n),{before:l,after:"]",...a.current()});return s(),t.stack=u,o(),i==="full"||!c||c!==d?l+=a.move(d+"]"):i==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function mw(){return"["}function ns(n){const e=n.options.bullet||"*";if(e!=="*"&&e!=="+"&&e!=="-")throw new Error("Cannot serialize items with `"+e+"` for `options.bullet`, expected `*`, `+`, or `-`");return e}function bw(n){const e=ns(n),t=n.options.bulletOther;if(!t)return e==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===e)throw new Error("Expected `bullet` (`"+e+"`) and `bulletOther` (`"+t+"`) to be different");return t}function vw(n){const e=n.options.bulletOrdered||".";if(e!=="."&&e!==")")throw new Error("Cannot serialize items with `"+e+"` for `options.bulletOrdered`, expected `.` or `)`");return e}function Yc(n){const e=n.options.rule||"*";if(e!=="*"&&e!=="-"&&e!=="_")throw new Error("Cannot serialize rules with `"+e+"` for `options.rule`, expected `*`, `-`, or `_`");return e}function yw(n,e,t,r){const i=t.enter("list"),o=t.bulletCurrent;let s=n.ordered?vw(t):ns(t);const a=n.ordered?s==="."?")":".":bw(t);let l=e&&t.bulletLastUsed?s===t.bulletLastUsed:!1;if(!n.ordered){const u=n.children?n.children[0]:void 0;if((s==="*"||s==="-")&&u&&(!u.children||!u.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(l=!0),Yc(t)===s&&u){let d=-1;for(;++d<n.children.length;){const p=n.children[d];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(s=a),t.bulletCurrent=s;const c=t.containerFlow(n,r);return t.bulletLastUsed=s,t.bulletCurrent=o,i(),c}function kw(n){const e=n.options.listItemIndent||"one";if(e!=="tab"&&e!=="one"&&e!=="mixed")throw new Error("Cannot serialize items with `"+e+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return e}function ww(n,e,t,r){const i=kw(t);let o=t.bulletCurrent||ns(t);e&&e.type==="list"&&e.ordered&&(o=(typeof e.start=="number"&&e.start>-1?e.start:1)+(t.options.incrementListMarker===!1?0:e.children.indexOf(n))+o);let s=o.length+1;(i==="tab"||i==="mixed"&&(e&&e.type==="list"&&e.spread||n.spread))&&(s=Math.ceil(s/4)*4);const a=t.createTracker(r);a.move(o+" ".repeat(s-o.length)),a.shift(s);const l=t.enter("listItem"),c=t.indentLines(t.containerFlow(n,a.current()),u);return l(),c;function u(d,p,h){return p?(h?"":" ".repeat(s))+d:(h?o:o+" ".repeat(s-o.length))+d}}function xw(n,e,t,r){const i=t.enter("paragraph"),o=t.enter("phrasing"),s=t.containerPhrasing(n,r);return o(),i(),s}const $w=ts(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function Cw(n,e,t,r){return(n.children.some(function(s){return $w(s)})?t.containerPhrasing:t.containerFlow).call(t,n,r)}function Sw(n){const e=n.options.strong||"*";if(e!=="*"&&e!=="_")throw new Error("Cannot serialize strong with `"+e+"` for `options.strong`, expected `*`, or `_`");return e}Jc.peek=Ew;function Jc(n,e,t,r){const i=Sw(t),o=t.enter("strong"),s=t.createTracker(r),a=s.move(i+i);let l=s.move(t.containerPhrasing(n,{after:i,before:a,...s.current()}));const c=l.charCodeAt(0),u=Jr(r.before.charCodeAt(r.before.length-1),c,i);u.inside&&(l=Dt(c)+l.slice(1));const d=l.charCodeAt(l.length-1),p=Jr(r.after.charCodeAt(0),d,i);p.inside&&(l=l.slice(0,-1)+Dt(d));const h=s.move(i+i);return o(),t.attentionEncodeSurroundingInfo={after:p.outside,before:u.outside},a+l+h}function Ew(n,e,t){return t.options.strong||"*"}function Aw(n,e,t,r){return t.safe(n.value,r)}function Tw(n){const e=n.options.ruleRepetition||3;if(e<3)throw new Error("Cannot serialize rules with repetition `"+e+"` for `options.ruleRepetition`, expected `3` or more");return e}function Iw(n,e,t){const r=(Yc(t)+(t.options.ruleSpaces?" ":"")).repeat(Tw(t));return t.options.ruleSpaces?r.slice(0,-1):r}const Bw={blockquote:Kk,break:Fa,code:Xk,definition:Yk,emphasis:Vc,hardBreak:Fa,heading:uw,html:Uc,image:Kc,imageReference:Wc,inlineCode:Gc,link:Xc,linkReference:Zc,list:yw,listItem:ww,paragraph:xw,root:Cw,strong:Jc,text:Aw,thematicBreak:Iw},Ow=[Mw];function Mw(n,e,t,r){if(e.type==="code"&&go(e,r)&&(n.type==="list"||n.type===e.type&&go(n,r)))return!1;if("spread"in t&&typeof t.spread=="boolean")return n.type==="paragraph"&&(n.type===e.type||e.type==="definition"||e.type==="heading"&&qc(e,r))?void 0:t.spread?1:0}const Kt=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"],zw=[{character:"	",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",before:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"\r",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:`
`,inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:" ",after:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",before:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"!",after:"\\[",inConstruct:"phrasing",notInConstruct:Kt},{character:'"',inConstruct:"titleQuote"},{atBreak:!0,character:"#"},{character:"#",inConstruct:"headingAtx",after:`(?:[\r
]|$)`},{character:"&",after:"[#A-Za-z]",inConstruct:"phrasing"},{character:"'",inConstruct:"titleApostrophe"},{character:"(",inConstruct:"destinationRaw"},{before:"\\]",character:"(",inConstruct:"phrasing",notInConstruct:Kt},{atBreak:!0,before:"\\d+",character:")"},{character:")",inConstruct:"destinationRaw"},{atBreak:!0,character:"*",after:`(?:[ 	\r
*])`},{character:"*",inConstruct:"phrasing",notInConstruct:Kt},{atBreak:!0,character:"+",after:`(?:[ 	\r
])`},{atBreak:!0,character:"-",after:`(?:[ 	\r
-])`},{atBreak:!0,before:"\\d+",character:".",after:`(?:[ 	\r
]|$)`},{atBreak:!0,character:"<",after:"[!/?A-Za-z]"},{character:"<",after:"[!/?A-Za-z]",inConstruct:"phrasing",notInConstruct:Kt},{character:"<",inConstruct:"destinationLiteral"},{atBreak:!0,character:"="},{atBreak:!0,character:">"},{character:">",inConstruct:"destinationLiteral"},{atBreak:!0,character:"["},{character:"[",inConstruct:"phrasing",notInConstruct:Kt},{character:"[",inConstruct:["label","reference"]},{character:"\\",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"]",inConstruct:["label","reference"]},{atBreak:!0,character:"_"},{character:"_",inConstruct:"phrasing",notInConstruct:Kt},{atBreak:!0,character:"`"},{character:"`",inConstruct:["codeFencedLangGraveAccent","codeFencedMetaGraveAccent"]},{character:"`",inConstruct:"phrasing",notInConstruct:Kt},{atBreak:!0,character:"~"}];function Lw(n){return n.label||!n.identifier?n.label||"":Pc(n.identifier)}function Pw(n){if(!n._compiled){const e=(n.atBreak?"[\\r\\n][\\t ]*":"")+(n.before?"(?:"+n.before+")":"");n._compiled=new RegExp((e?"("+e+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(n.character)?"\\":"")+n.character+(n.after?"(?:"+n.after+")":""),"g")}return n._compiled}function Fw(n,e,t){const r=e.indexStack,i=n.children||[],o=[];let s=-1,a=t.before,l;r.push(-1);let c=e.createTracker(t);for(;++s<i.length;){const u=i[s];let d;if(r[r.length-1]=s,s+1<i.length){let x=e.handle.handlers[i[s+1].type];x&&x.peek&&(x=x.peek),d=x?x(i[s+1],n,e,{before:"",after:"",...c.current()}).charAt(0):""}else d=t.after;o.length>0&&(a==="\r"||a===`
`)&&u.type==="html"&&(o[o.length-1]=o[o.length-1].replace(/(\r?\n|\r)$/," "),a=" ",c=e.createTracker(t),c.move(o.join("")));let p=e.handle(u,n,e,{...c.current(),after:d,before:a});l&&l===p.slice(0,1)&&(p=Dt(l.charCodeAt(0))+p.slice(1));const h=e.attentionEncodeSurroundingInfo;e.attentionEncodeSurroundingInfo=void 0,l=void 0,h&&(o.length>0&&h.before&&a===o[o.length-1].slice(-1)&&(o[o.length-1]=o[o.length-1].slice(0,-1)+Dt(a.charCodeAt(0))),h.after&&(l=d)),c.move(p),o.push(p),a=p.slice(-1)}return r.pop(),o.join("")}function Nw(n,e,t){const r=e.indexStack,i=n.children||[],o=e.createTracker(t),s=[];let a=-1;for(r.push(-1);++a<i.length;){const l=i[a];r[r.length-1]=a,s.push(o.move(e.handle(l,n,e,{before:`
`,after:`
`,...o.current()}))),l.type!=="list"&&(e.bulletLastUsed=void 0),a<i.length-1&&s.push(o.move(Dw(l,i[a+1],n,e)))}return r.pop(),s.join("")}function Dw(n,e,t,r){let i=r.join.length;for(;i--;){const o=r.join[i](n,e,t,r);if(o===!0||o===1)break;if(typeof o=="number")return`
`.repeat(1+o);if(o===!1)return`

<!---->

`}return`

`}const _w=/\r?\n|\r/g;function Rw(n,e){const t=[];let r=0,i=0,o;for(;o=_w.exec(n);)s(n.slice(r,o.index)),t.push(o[0]),r=o.index+o[0].length,i++;return s(n.slice(r)),t.join("");function s(a){t.push(e(a,i,!a))}}function Vw(n,e,t){const r=(t.before||"")+(e||"")+(t.after||""),i=[],o=[],s={};let a=-1;for(;++a<n.unsafe.length;){const u=n.unsafe[a];if(!Rc(n.stack,u))continue;const d=n.compilePattern(u);let p;for(;p=d.exec(r);){const h="before"in u||!!u.atBreak,x="after"in u,S=p.index+(h?p[1].length:0);i.includes(S)?(s[S].before&&!h&&(s[S].before=!1),s[S].after&&!x&&(s[S].after=!1)):(i.push(S),s[S]={before:h,after:x})}}i.sort(Hw);let l=t.before?t.before.length:0;const c=r.length-(t.after?t.after.length:0);for(a=-1;++a<i.length;){const u=i[a];u<l||u>=c||u+1<c&&i[a+1]===u+1&&s[u].after&&!s[u+1].before&&!s[u+1].after||i[a-1]===u-1&&s[u].before&&!s[u-1].before&&!s[u-1].after||(l!==u&&o.push(Na(r.slice(l,u),"\\")),l=u,/[!-/:-@[-`{-~]/.test(r.charAt(u))&&(!t.encode||!t.encode.includes(r.charAt(u)))?o.push("\\"):(o.push(Dt(r.charCodeAt(u))),l++))}return o.push(Na(r.slice(l,c),t.after)),o.join("")}function Hw(n,e){return n-e}function Na(n,e){const t=/\\(?=[!-/:-@[-`{-~])/g,r=[],i=[],o=n+e;let s=-1,a=0,l;for(;l=t.exec(o);)r.push(l.index);for(;++s<r.length;)a!==r[s]&&i.push(n.slice(a,r[s])),i.push("\\"),a=r[s];return i.push(n.slice(a)),i.join("")}function jw(n){const e=n||{},t=e.now||{};let r=e.lineShift||0,i=t.line||1,o=t.column||1;return{move:l,current:s,shift:a};function s(){return{now:{line:i,column:o},lineShift:r}}function a(c){r+=c}function l(c){const u=c||"",d=u.split(/\r?\n|\r/g),p=d[d.length-1];return i+=d.length-1,o=d.length===1?o+p.length:1+p.length+r,u}}function qw(n,e){const t=e||{},r={associationId:Lw,containerPhrasing:Gw,containerFlow:Qw,createTracker:jw,compilePattern:Pw,enter:o,handlers:{...Bw},handle:void 0,indentLines:Rw,indexStack:[],join:[...Ow],options:{},safe:Xw,stack:[],unsafe:[...zw]};_c(r,t),r.options.tightDefinitions&&r.join.push(Ww),r.handle=Dc("type",{invalid:Uw,unknown:Kw,handlers:r.handlers});let i=r.handle(n,void 0,r,{before:`
`,after:`
`,now:{line:1,column:1},lineShift:0});return i&&i.charCodeAt(i.length-1)!==10&&i.charCodeAt(i.length-1)!==13&&(i+=`
`),i;function o(s){return r.stack.push(s),a;function a(){r.stack.pop()}}}function Uw(n){throw new Error("Cannot handle value `"+n+"`, expected node")}function Kw(n){const e=n;throw new Error("Cannot handle unknown node `"+e.type+"`")}function Ww(n,e){if(n.type==="definition"&&n.type===e.type)return 0}function Gw(n,e){return Fw(n,this,e)}function Qw(n,e){return Nw(n,this,e)}function Xw(n,e){return Vw(this,n,e)}function Zw(n){const e=this;e.compiler=t;function t(r){return qw(r,{...e.data("settings"),...n,extensions:e.data("toMarkdownExtensions")||[]})}}function Da(n){if(n)throw n}var Pr=Object.prototype.hasOwnProperty,eu=Object.prototype.toString,_a=Object.defineProperty,Ra=Object.getOwnPropertyDescriptor,Va=function(e){return typeof Array.isArray=="function"?Array.isArray(e):eu.call(e)==="[object Array]"},Ha=function(e){if(!e||eu.call(e)!=="[object Object]")return!1;var t=Pr.call(e,"constructor"),r=e.constructor&&e.constructor.prototype&&Pr.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!t&&!r)return!1;var i;for(i in e);return typeof i>"u"||Pr.call(e,i)},ja=function(e,t){_a&&t.name==="__proto__"?_a(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},qa=function(e,t){if(t==="__proto__")if(Pr.call(e,t)){if(Ra)return Ra(e,t).value}else return;return e[t]},Yw=function n(){var e,t,r,i,o,s,a=arguments[0],l=1,c=arguments.length,u=!1;for(typeof a=="boolean"&&(u=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<c;++l)if(e=arguments[l],e!=null)for(t in e)r=qa(a,t),i=qa(e,t),a!==i&&(u&&i&&(Ha(i)||(o=Va(i)))?(o?(o=!1,s=r&&Va(r)?r:[]):s=r&&Ha(r)?r:{},ja(a,{name:t,newValue:n(u,s,i)})):typeof i<"u"&&ja(a,{name:t,newValue:i}));return a};const Pi=ph(Yw);function bo(n){if(typeof n!="object"||n===null)return!1;const e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function Jw(){const n=[],e={run:t,use:r};return e;function t(...i){let o=-1;const s=i.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...i);function a(l,...c){const u=n[++o];let d=-1;if(l){s(l);return}for(;++d<i.length;)(c[d]===null||c[d]===void 0)&&(c[d]=i[d]);i=c,u?e0(u,a)(...c):s(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return n.push(i),e}}function e0(n,e){let t;return r;function r(...s){const a=n.length>s.length;let l;a&&s.push(i);try{l=n.apply(this,s)}catch(c){const u=c;if(a&&t)throw u;return i(u)}a||(l&&l.then&&typeof l.then=="function"?l.then(o,i):l instanceof Error?i(l):o(l))}function i(s,...a){t||(t=!0,e(s,...a))}function o(s){i(null,s)}}class Ee extends Error{constructor(e,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",o={},s=!1;if(t&&("line"in t&&"column"in t?o={place:t}:"start"in t&&"end"in t?o={place:t}:"type"in t?o={ancestors:[t],place:t.position}:o={...t}),typeof e=="string"?i=e:!o.cause&&e&&(s=!0,i=e.message,o.cause=e),!o.ruleId&&!o.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?o.ruleId=r:(o.source=r.slice(0,l),o.ruleId=r.slice(l+1))}if(!o.place&&o.ancestors&&o.ancestors){const l=o.ancestors[o.ancestors.length-1];l&&(o.place=l.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=i,this.line=a?a.line:void 0,this.name=Qn(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual,this.expected,this.note,this.url}}Ee.prototype.file="";Ee.prototype.name="";Ee.prototype.reason="";Ee.prototype.message="";Ee.prototype.stack="";Ee.prototype.column=void 0;Ee.prototype.line=void 0;Ee.prototype.ancestors=void 0;Ee.prototype.cause=void 0;Ee.prototype.fatal=void 0;Ee.prototype.place=void 0;Ee.prototype.ruleId=void 0;Ee.prototype.source=void 0;const Ye={basename:t0,dirname:n0,extname:r0,join:i0,sep:"/"};function t0(n,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');gr(n);let t=0,r=-1,i=n.length,o;if(e===void 0||e.length===0||e.length>n.length){for(;i--;)if(n.codePointAt(i)===47){if(o){t=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":n.slice(t,r)}if(e===n)return"";let s=-1,a=e.length-1;for(;i--;)if(n.codePointAt(i)===47){if(o){t=i+1;break}}else s<0&&(o=!0,s=i+1),a>-1&&(n.codePointAt(i)===e.codePointAt(a--)?a<0&&(r=i):(a=-1,r=s));return t===r?r=s:r<0&&(r=n.length),n.slice(t,r)}function n0(n){if(gr(n),n.length===0)return".";let e=-1,t=n.length,r;for(;--t;)if(n.codePointAt(t)===47){if(r){e=t;break}}else r||(r=!0);return e<0?n.codePointAt(0)===47?"/":".":e===1&&n.codePointAt(0)===47?"//":n.slice(0,e)}function r0(n){gr(n);let e=n.length,t=-1,r=0,i=-1,o=0,s;for(;e--;){const a=n.codePointAt(e);if(a===47){if(s){r=e+1;break}continue}t<0&&(s=!0,t=e+1),a===46?i<0?i=e:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||t<0||o===0||o===1&&i===t-1&&i===r+1?"":n.slice(i,t)}function i0(...n){let e=-1,t;for(;++e<n.length;)gr(n[e]),n[e]&&(t=t===void 0?n[e]:t+"/"+n[e]);return t===void 0?".":o0(t)}function o0(n){gr(n);const e=n.codePointAt(0)===47;let t=s0(n,!e);return t.length===0&&!e&&(t="."),t.length>0&&n.codePointAt(n.length-1)===47&&(t+="/"),e?"/"+t:t}function s0(n,e){let t="",r=0,i=-1,o=0,s=-1,a,l;for(;++s<=n.length;){if(s<n.length)a=n.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(i===s-1||o===1))if(i!==s-1&&o===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(l=t.lastIndexOf("/"),l!==t.length-1){l<0?(t="",r=0):(t=t.slice(0,l),r=t.length-1-t.lastIndexOf("/")),i=s,o=0;continue}}else if(t.length>0){t="",r=0,i=s,o=0;continue}}e&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+n.slice(i+1,s):t=n.slice(i+1,s),r=s-i-1;i=s,o=0}else a===46&&o>-1?o++:o=-1}return t}function gr(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}const a0={cwd:l0};function l0(){return"/"}function vo(n){return!!(n!==null&&typeof n=="object"&&"href"in n&&n.href&&"protocol"in n&&n.protocol&&n.auth===void 0)}function c0(n){if(typeof n=="string")n=new URL(n);else if(!vo(n)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+n+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(n.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return u0(n)}function u0(n){if(n.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const e=n.pathname;let t=-1;for(;++t<e.length;)if(e.codePointAt(t)===37&&e.codePointAt(t+1)===50){const r=e.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(e)}const Fi=["history","path","basename","stem","extname","dirname"];class d0{constructor(e){let t;e?vo(e)?t={path:e}:typeof e=="string"||h0(e)?t={value:e}:t=e:t={},this.cwd="cwd"in t?"":a0.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Fi.length;){const o=Fi[r];o in t&&t[o]!==void 0&&t[o]!==null&&(this[o]=o==="history"?[...t[o]]:t[o])}let i;for(i in t)Fi.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?Ye.basename(this.path):void 0}set basename(e){Di(e,"basename"),Ni(e,"basename"),this.path=Ye.join(this.dirname||"",e)}get dirname(){return typeof this.path=="string"?Ye.dirname(this.path):void 0}set dirname(e){Ua(this.basename,"dirname"),this.path=Ye.join(e||"",this.basename)}get extname(){return typeof this.path=="string"?Ye.extname(this.path):void 0}set extname(e){if(Ni(e,"extname"),Ua(this.dirname,"extname"),e){if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ye.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){vo(e)&&(e=c0(e)),Di(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path=="string"?Ye.basename(this.path,this.extname):void 0}set stem(e){Di(e,"stem"),Ni(e,"stem"),this.path=Ye.join(this.dirname||"",e+(this.extname||""))}fail(e,t,r){const i=this.message(e,t,r);throw i.fatal=!0,i}info(e,t,r){const i=this.message(e,t,r);return i.fatal=void 0,i}message(e,t,r){const i=new Ee(e,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(e){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)}}function Ni(n,e){if(n&&n.includes(Ye.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+Ye.sep+"`")}function Di(n,e){if(!n)throw new Error("`"+e+"` cannot be empty")}function Ua(n,e){if(!n)throw new Error("Setting `"+e+"` requires `path` to be set too")}function h0(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const p0=function(n){const r=this.constructor.prototype,i=r[n],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},f0={}.hasOwnProperty;class rs extends p0{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Jw()}copy(){const e=new rs;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];e.use(...r)}return e.data(Pi(!0,{},this.namespace)),e}data(e,t){return typeof e=="string"?arguments.length===2?(Vi("data",this.frozen),this.namespace[e]=t,this):f0.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Vi("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(e,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const t=Sr(e),r=this.parser||this.Parser;return _i("parse",r),r(String(t),t)}process(e,t){const r=this;return this.freeze(),_i("process",this.parser||this.Parser),Ri("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(o,s){const a=Sr(e),l=r.parse(a);r.run(l,a,function(u,d,p){if(u||!d||!p)return c(u);const h=d,x=r.stringify(h,p);b0(x)?p.value=x:p.result=x,c(u,p)});function c(u,d){u||!d?s(u):o?o(d):t(void 0,d)}}}processSync(e){let t=!1,r;return this.freeze(),_i("processSync",this.parser||this.Parser),Ri("processSync",this.compiler||this.Compiler),this.process(e,i),Wa("processSync","process",t),r;function i(o,s){t=!0,Da(o),r=s}}run(e,t,r){Ka(e),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?o(void 0,r):new Promise(o);function o(s,a){const l=Sr(t);i.run(e,l,c);function c(u,d,p){const h=d||e;u?a(u):s?s(h):r(void 0,h,p)}}}runSync(e,t){let r=!1,i;return this.run(e,t,o),Wa("runSync","run",r),i;function o(s,a){Da(s),i=a,r=!0}}stringify(e,t){this.freeze();const r=Sr(t),i=this.compiler||this.Compiler;return Ri("stringify",i),Ka(e),i(e,r)}use(e,...t){const r=this.attachers,i=this.namespace;if(Vi("use",this.frozen),e!=null)if(typeof e=="function")l(e,t);else if(typeof e=="object")Array.isArray(e)?a(e):s(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function o(c){if(typeof c=="function")l(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[u,...d]=c;l(u,d)}else s(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function s(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(c.plugins),c.settings&&(i.settings=Pi(!0,i.settings,c.settings))}function a(c){let u=-1;if(c!=null)if(Array.isArray(c))for(;++u<c.length;){const d=c[u];o(d)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function l(c,u){let d=-1,p=-1;for(;++d<r.length;)if(r[d][0]===c){p=d;break}if(p===-1)r.push([c,...u]);else if(u.length>0){let[h,...x]=u;const S=r[p][1];bo(S)&&bo(h)&&(h=Pi(!0,S,h)),r[p]=[c,h,...x]}}}}const g0=new rs().freeze();function _i(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `parser`")}function Ri(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `compiler`")}function Vi(n,e){if(e)throw new Error("Cannot call `"+n+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Ka(n){if(!bo(n)||typeof n.type!="string")throw new TypeError("Expected node, got `"+n+"`")}function Wa(n,e,t){if(!t)throw new Error("`"+n+"` finished async. Use `"+e+"` instead")}function Sr(n){return m0(n)?n:new d0(n)}function m0(n){return!!(n&&typeof n=="object"&&"message"in n&&"messages"in n)}function b0(n){return typeof n=="string"||v0(n)}function v0(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const is=g0().use(jk).use(Zw).freeze(),tu=-1,Ci=0,ei=1,ti=2,os=3,ss=4,as=5,ls=6,nu=7,ru=8,Ga=typeof self=="object"?self:globalThis,y0=(n,e)=>{const t=(i,o)=>(n.set(o,i),i),r=i=>{if(n.has(i))return n.get(i);const[o,s]=e[i];switch(o){case Ci:case tu:return t(s,i);case ei:{const a=t([],i);for(const l of s)a.push(r(l));return a}case ti:{const a=t({},i);for(const[l,c]of s)a[r(l)]=r(c);return a}case os:return t(new Date(s),i);case ss:{const{source:a,flags:l}=s;return t(new RegExp(a,l),i)}case as:{const a=t(new Map,i);for(const[l,c]of s)a.set(r(l),r(c));return a}case ls:{const a=t(new Set,i);for(const l of s)a.add(r(l));return a}case nu:{const{name:a,message:l}=s;return t(new Ga[a](l),i)}case ru:return t(BigInt(s),i);case"BigInt":return t(Object(BigInt(s)),i)}return t(new Ga[o](s),i)};return r},Qa=n=>y0(new Map,n)(0),dn="",{toString:k0}={},{keys:w0}=Object,jn=n=>{const e=typeof n;if(e!=="object"||!n)return[Ci,e];const t=k0.call(n).slice(8,-1);switch(t){case"Array":return[ei,dn];case"Object":return[ti,dn];case"Date":return[os,dn];case"RegExp":return[ss,dn];case"Map":return[as,dn];case"Set":return[ls,dn]}return t.includes("Array")?[ei,t]:t.includes("Error")?[nu,t]:[ti,t]},Er=([n,e])=>n===Ci&&(e==="function"||e==="symbol"),x0=(n,e,t,r)=>{const i=(s,a)=>{const l=r.push(s)-1;return t.set(a,l),l},o=s=>{if(t.has(s))return t.get(s);let[a,l]=jn(s);switch(a){case Ci:{let u=s;switch(l){case"bigint":a=ru,u=s.toString();break;case"function":case"symbol":if(n)throw new TypeError("unable to serialize "+l);u=null;break;case"undefined":return i([tu],s)}return i([a,u],s)}case ei:{if(l)return i([l,[...s]],s);const u=[],d=i([a,u],s);for(const p of s)u.push(o(p));return d}case ti:{if(l)switch(l){case"BigInt":return i([l,s.toString()],s);case"Boolean":case"Number":case"String":return i([l,s.valueOf()],s)}if(e&&"toJSON"in s)return o(s.toJSON());const u=[],d=i([a,u],s);for(const p of w0(s))(n||!Er(jn(s[p])))&&u.push([o(p),o(s[p])]);return d}case os:return i([a,s.toISOString()],s);case ss:{const{source:u,flags:d}=s;return i([a,{source:u,flags:d}],s)}case as:{const u=[],d=i([a,u],s);for(const[p,h]of s)(n||!(Er(jn(p))||Er(jn(h))))&&u.push([o(p),o(h)]);return d}case ls:{const u=[],d=i([a,u],s);for(const p of s)(n||!Er(jn(p)))&&u.push(o(p));return d}}const{message:c}=s;return i([a,{name:l,message:c}],s)};return o},Xa=(n,{json:e,lossy:t}={})=>{const r=[];return x0(!(e||t),!!e,new Map,r)(n),r},nr=typeof structuredClone=="function"?(n,e)=>e&&("json"in e||"lossy"in e)?Qa(Xa(n,e)):structuredClone(n):(n,e)=>Qa(Xa(n,e)),iu=su("end"),ou=su("start");function su(n){return e;function e(t){const r=t&&t.position&&t.position[n]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function au(n){const e=ou(n),t=iu(n);if(e&&t)return{start:e,end:t}}const Wt=["ariaDescribedBy","ariaLabel","ariaLabelledBy"],Za={ancestors:{tbody:["table"],td:["table"],th:["table"],thead:["table"],tfoot:["table"],tr:["table"]},attributes:{a:[...Wt,"dataFootnoteBackref","dataFootnoteRef",["className","data-footnote-backref"],"href"],blockquote:["cite"],code:[["className",/^language-./]],del:["cite"],div:["itemScope","itemType"],dl:[...Wt],h2:[["className","sr-only"]],img:[...Wt,"longDesc","src"],input:[["disabled",!0],["type","checkbox"]],ins:["cite"],li:[["className","task-list-item"]],ol:[...Wt,["className","contains-task-list"]],q:["cite"],section:["dataFootnotes",["className","footnotes"]],source:["srcSet"],summary:[...Wt],table:[...Wt],ul:[...Wt,["className","contains-task-list"]],"*":["abbr","accept","acceptCharset","accessKey","action","align","alt","axis","border","cellPadding","cellSpacing","char","charOff","charSet","checked","clear","colSpan","color","cols","compact","coords","dateTime","dir","encType","frame","hSpace","headers","height","hrefLang","htmlFor","id","isMap","itemProp","label","lang","maxLength","media","method","multiple","name","noHref","noShade","noWrap","open","prompt","readOnly","rev","rowSpan","rows","rules","scope","selected","shape","size","span","start","summary","tabIndex","title","useMap","vAlign","value","width"]},clobber:["ariaDescribedBy","ariaLabelledBy","id","name"],clobberPrefix:"user-content-",protocols:{cite:["http","https"],href:["http","https","irc","ircs","mailto","xmpp"],longDesc:["http","https"],src:["http","https"]},required:{input:{disabled:!0,type:"checkbox"}},strip:["script"],tagNames:["a","b","blockquote","br","code","dd","del","details","div","dl","dt","em","h1","h2","h3","h4","h5","h6","hr","i","img","input","ins","kbd","li","ol","p","picture","pre","q","rp","rt","ruby","s","samp","section","source","span","strike","strong","sub","summary","sup","table","tbody","td","tfoot","th","thead","tr","tt","ul","var"]},zt={}.hasOwnProperty;function $0(n,e){let t={type:"root",children:[]};const r={schema:e?{...Za,...e}:Za,stack:[]},i=lu(r,n);return i&&(Array.isArray(i)?i.length===1?t=i[0]:t.children=i:t=i),t}function lu(n,e){if(e&&typeof e=="object"){const t=e;switch(typeof t.type=="string"?t.type:""){case"comment":return C0(n,t);case"doctype":return S0(n,t);case"element":return E0(n,t);case"root":return A0(n,t);case"text":return T0(n,t)}}}function C0(n,e){if(n.schema.allowComments){const t=typeof e.value=="string"?e.value:"",r=t.indexOf("-->"),o={type:"comment",value:r<0?t:t.slice(0,r)};return mr(o,e),o}}function S0(n,e){if(n.schema.allowDoctypes){const t={type:"doctype"};return mr(t,e),t}}function E0(n,e){const t=typeof e.tagName=="string"?e.tagName:"";n.stack.push(t);const r=cu(n,e.children),i=I0(n,e.properties);n.stack.pop();let o=!1;if(t&&t!=="*"&&(!n.schema.tagNames||n.schema.tagNames.includes(t))&&(o=!0,n.schema.ancestors&&zt.call(n.schema.ancestors,t))){const a=n.schema.ancestors[t];let l=-1;for(o=!1;++l<a.length;)n.stack.includes(a[l])&&(o=!0)}if(!o)return n.schema.strip&&!n.schema.strip.includes(t)?r:void 0;const s={type:"element",tagName:t,properties:i,children:r};return mr(s,e),s}function A0(n,e){const r={type:"root",children:cu(n,e.children)};return mr(r,e),r}function T0(n,e){const r={type:"text",value:typeof e.value=="string"?e.value:""};return mr(r,e),r}function cu(n,e){const t=[];if(Array.isArray(e)){const r=e;let i=-1;for(;++i<r.length;){const o=lu(n,r[i]);o&&(Array.isArray(o)?t.push(...o):t.push(o))}}return t}function I0(n,e){const t=n.stack[n.stack.length-1],r=n.schema.attributes,i=n.schema.required,o=r&&zt.call(r,t)?r[t]:void 0,s=r&&zt.call(r,"*")?r["*"]:void 0,a=e&&typeof e=="object"?e:{},l={};let c;for(c in a)if(zt.call(a,c)){const u=a[c];let d=Ya(n,Ja(o,c),c,u);d==null&&(d=Ya(n,Ja(s,c),c,u)),d!=null&&(l[c]=d)}if(i&&zt.call(i,t)){const u=i[t];for(c in u)zt.call(u,c)&&!zt.call(l,c)&&(l[c]=u[c])}return l}function Ya(n,e,t,r){return e?Array.isArray(r)?B0(n,e,t,r):uu(n,e,t,r):void 0}function B0(n,e,t,r){let i=-1;const o=[];for(;++i<r.length;){const s=uu(n,e,t,r[i]);(typeof s=="number"||typeof s=="string")&&o.push(s)}return o}function uu(n,e,t,r){if(!(typeof r!="boolean"&&typeof r!="number"&&typeof r!="string")&&O0(n,t,r)){if(typeof e=="object"&&e.length>1){let i=!1,o=0;for(;++o<e.length;){const s=e[o];if(s&&typeof s=="object"&&"flags"in s){if(s.test(String(r))){i=!0;break}}else if(s===r){i=!0;break}}if(!i)return}return n.schema.clobber&&n.schema.clobberPrefix&&n.schema.clobber.includes(t)?n.schema.clobberPrefix+r:r}}function O0(n,e,t){const r=n.schema.protocols&&zt.call(n.schema.protocols,e)?n.schema.protocols[e]:void 0;if(!r||r.length===0)return!0;const i=String(t),o=i.indexOf(":"),s=i.indexOf("?"),a=i.indexOf("#"),l=i.indexOf("/");if(o<0||l>-1&&o>l||s>-1&&o>s||a>-1&&o>a)return!0;let c=-1;for(;++c<r.length;){const u=r[c];if(o===u.length&&i.slice(0,u.length)===u)return!0}return!1}function mr(n,e){const t=au(e);e.data&&(n.data=nr(e.data)),t&&(n.position=t)}function Ja(n,e){let t,r=-1;if(n)for(;++r<n.length;){const i=n[r],o=typeof i=="string"?i:i[0];if(o===e)return i;o==="data*"&&(t=i)}if(e.length>4&&e.slice(0,4).toLowerCase()==="data")return t}function M0(n,e){const t={type:"element",tagName:"blockquote",properties:{},children:n.wrap(n.all(e),!0)};return n.patch(e,t),n.applyData(e,t)}function z0(n,e){const t={type:"element",tagName:"br",properties:{},children:[]};return n.patch(e,t),[n.applyData(e,t),{type:"text",value:`
`}]}function L0(n,e){const t=e.value?e.value+`
`:"",r={};e.lang&&(r.className=["language-"+e.lang]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return e.meta&&(i.data={meta:e.meta}),n.patch(e,i),i=n.applyData(e,i),i={type:"element",tagName:"pre",properties:{},children:[i]},n.patch(e,i),i}function P0(n,e){const t={type:"element",tagName:"del",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function F0(n,e){const t={type:"element",tagName:"em",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function N0(n,e){const t=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",r=String(e.identifier).toUpperCase(),i=Ln(r.toLowerCase()),o=n.footnoteOrder.indexOf(r);let s,a=n.footnoteCounts.get(r);a===void 0?(a=0,n.footnoteOrder.push(r),s=n.footnoteOrder.length):s=o+1,a+=1,n.footnoteCounts.set(r,a);const l={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};n.patch(e,l);const c={type:"element",tagName:"sup",properties:{},children:[l]};return n.patch(e,c),n.applyData(e,c)}function D0(n,e){const t={type:"element",tagName:"h"+e.depth,properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function _0(n,e){if(n.options.allowDangerousHtml){const t={type:"raw",value:e.value};return n.patch(e,t),n.applyData(e,t)}}function du(n,e){const t=e.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+r}];const i=n.all(e),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const s=i[i.length-1];return s&&s.type==="text"?s.value+=r:i.push({type:"text",value:r}),i}function R0(n,e){const t=String(e.identifier).toUpperCase(),r=n.definitionById.get(t);if(!r)return du(n,e);const i={src:Ln(r.url||""),alt:e.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return n.patch(e,o),n.applyData(e,o)}function V0(n,e){const t={src:Ln(e.url)};e.alt!==null&&e.alt!==void 0&&(t.alt=e.alt),e.title!==null&&e.title!==void 0&&(t.title=e.title);const r={type:"element",tagName:"img",properties:t,children:[]};return n.patch(e,r),n.applyData(e,r)}function H0(n,e){const t={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};n.patch(e,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return n.patch(e,r),n.applyData(e,r)}function j0(n,e){const t=String(e.identifier).toUpperCase(),r=n.definitionById.get(t);if(!r)return du(n,e);const i={href:Ln(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:n.all(e)};return n.patch(e,o),n.applyData(e,o)}function q0(n,e){const t={href:Ln(e.url)};e.title!==null&&e.title!==void 0&&(t.title=e.title);const r={type:"element",tagName:"a",properties:t,children:n.all(e)};return n.patch(e,r),n.applyData(e,r)}function U0(n,e,t){const r=n.all(e),i=t?K0(t):hu(e),o={},s=[];if(typeof e.checked=="boolean"){const u=r[0];let d;u&&u.type==="element"&&u.tagName==="p"?d=u:(d={type:"element",tagName:"p",properties:{},children:[]},r.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const u=r[a];(i||a!==0||u.type!=="element"||u.tagName!=="p")&&s.push({type:"text",value:`
`}),u.type==="element"&&u.tagName==="p"&&!i?s.push(...u.children):s.push(u)}const l=r[r.length-1];l&&(i||l.type!=="element"||l.tagName!=="p")&&s.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:o,children:s};return n.patch(e,c),n.applyData(e,c)}function K0(n){let e=!1;if(n.type==="list"){e=n.spread||!1;const t=n.children;let r=-1;for(;!e&&++r<t.length;)e=hu(t[r])}return e}function hu(n){const e=n.spread;return e??n.children.length>1}function W0(n,e){const t={},r=n.all(e);let i=-1;for(typeof e.start=="number"&&e.start!==1&&(t.start=e.start);++i<r.length;){const s=r[i];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const o={type:"element",tagName:e.ordered?"ol":"ul",properties:t,children:n.wrap(r,!0)};return n.patch(e,o),n.applyData(e,o)}function G0(n,e){const t={type:"element",tagName:"p",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function Q0(n,e){const t={type:"root",children:n.wrap(n.all(e))};return n.patch(e,t),n.applyData(e,t)}function X0(n,e){const t={type:"element",tagName:"strong",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function Z0(n,e){const t=n.all(e),r=t.shift(),i=[];if(r){const s={type:"element",tagName:"thead",properties:{},children:n.wrap([r],!0)};n.patch(e.children[0],s),i.push(s)}if(t.length>0){const s={type:"element",tagName:"tbody",properties:{},children:n.wrap(t,!0)},a=ou(e.children[1]),l=iu(e.children[e.children.length-1]);a&&l&&(s.position={start:a,end:l}),i.push(s)}const o={type:"element",tagName:"table",properties:{},children:n.wrap(i,!0)};return n.patch(e,o),n.applyData(e,o)}function Y0(n,e,t){const r=t?t.children:void 0,o=(r?r.indexOf(e):1)===0?"th":"td",s=t&&t.type==="table"?t.align:void 0,a=s?s.length:e.children.length;let l=-1;const c=[];for(;++l<a;){const d=e.children[l],p={},h=s?s[l]:void 0;h&&(p.align=h);let x={type:"element",tagName:o,properties:p,children:[]};d&&(x.children=n.all(d),n.patch(d,x),x=n.applyData(d,x)),c.push(x)}const u={type:"element",tagName:"tr",properties:{},children:n.wrap(c,!0)};return n.patch(e,u),n.applyData(e,u)}function J0(n,e){const t={type:"element",tagName:"td",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}const el=9,tl=32;function e1(n){const e=String(n),t=/\r?\n|\r/g;let r=t.exec(e),i=0;const o=[];for(;r;)o.push(nl(e.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(e);return o.push(nl(e.slice(i),i>0,!1)),o.join("")}function nl(n,e,t){let r=0,i=n.length;if(e){let o=n.codePointAt(r);for(;o===el||o===tl;)r++,o=n.codePointAt(r)}if(t){let o=n.codePointAt(i-1);for(;o===el||o===tl;)i--,o=n.codePointAt(i-1)}return i>r?n.slice(r,i):""}function t1(n,e){const t={type:"text",value:e1(String(e.value))};return n.patch(e,t),n.applyData(e,t)}function n1(n,e){const t={type:"element",tagName:"hr",properties:{},children:[]};return n.patch(e,t),n.applyData(e,t)}const r1={blockquote:M0,break:z0,code:L0,delete:P0,emphasis:F0,footnoteReference:N0,heading:D0,html:_0,imageReference:R0,image:V0,inlineCode:H0,linkReference:j0,link:q0,listItem:U0,list:W0,paragraph:G0,root:Q0,strong:X0,table:Z0,tableCell:J0,tableRow:Y0,text:t1,thematicBreak:n1,toml:Ar,yaml:Ar,definition:Ar,footnoteDefinition:Ar};function Ar(){}function i1(n,e){const t=[{type:"text",value:"↩"}];return e>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),t}function o1(n,e){return"Back to reference "+(n+1)+(e>1?"-"+e:"")}function s1(n){const e=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",t=n.options.footnoteBackContent||i1,r=n.options.footnoteBackLabel||o1,i=n.options.footnoteLabel||"Footnotes",o=n.options.footnoteLabelTagName||"h2",s=n.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<n.footnoteOrder.length;){const c=n.footnoteById.get(n.footnoteOrder[l]);if(!c)continue;const u=n.all(c),d=String(c.identifier).toUpperCase(),p=Ln(d.toLowerCase());let h=0;const x=[],S=n.footnoteCounts.get(d);for(;S!==void 0&&++h<=S;){x.length>0&&x.push({type:"text",value:" "});let P=typeof t=="string"?t:t(l,h);typeof P=="string"&&(P={type:"text",value:P}),x.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+p+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,h),className:["data-footnote-backref"]},children:Array.isArray(P)?P:[P]})}const L=u[u.length-1];if(L&&L.type==="element"&&L.tagName==="p"){const P=L.children[L.children.length-1];P&&P.type==="text"?P.value+=" ":L.children.push({type:"text",value:" "}),L.children.push(...x)}else u.push(...x);const $={type:"element",tagName:"li",properties:{id:e+"fn-"+p},children:n.wrap(u,!0)};n.patch(c,$),a.push($)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...nr(s),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:n.wrap(a,!0)},{type:"text",value:`
`}]}}const yo={}.hasOwnProperty,a1={};function l1(n,e){const t=e||a1,r=new Map,i=new Map,o=new Map,s={...r1,...t.handlers},a={all:c,applyData:u1,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:s,one:l,options:t,patch:c1,wrap:h1};return jc(n,function(u){if(u.type==="definition"||u.type==="footnoteDefinition"){const d=u.type==="definition"?r:i,p=String(u.identifier).toUpperCase();d.has(p)||d.set(p,u)}}),a;function l(u,d){const p=u.type,h=a.handlers[p];if(yo.call(a.handlers,p)&&h)return h(a,u,d);if(a.options.passThrough&&a.options.passThrough.includes(p)){if("children"in u){const{children:S,...L}=u,$=nr(L);return $.children=a.all(u),$}return nr(u)}return(a.options.unknownHandler||d1)(a,u,d)}function c(u){const d=[];if("children"in u){const p=u.children;let h=-1;for(;++h<p.length;){const x=a.one(p[h],u);if(x){if(h&&p[h-1].type==="break"&&(!Array.isArray(x)&&x.type==="text"&&(x.value=rl(x.value)),!Array.isArray(x)&&x.type==="element")){const S=x.children[0];S&&S.type==="text"&&(S.value=rl(S.value))}Array.isArray(x)?d.push(...x):d.push(x)}}}return d}}function c1(n,e){n.position&&(e.position=au(n))}function u1(n,e){let t=e;if(n&&n.data){const r=n.data.hName,i=n.data.hChildren,o=n.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const s="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:s}}t.type==="element"&&o&&Object.assign(t.properties,nr(o)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function d1(n,e){const t=e.data||{},r="value"in e&&!(yo.call(t,"hProperties")||yo.call(t,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:n.all(e)};return n.patch(e,r),n.applyData(e,r)}function h1(n,e){const t=[];let r=-1;for(e&&t.push({type:"text",value:`
`});++r<n.length;)r&&t.push({type:"text",value:`
`}),t.push(n[r]);return e&&n.length>0&&t.push({type:"text",value:`
`}),t}function rl(n){let e=0,t=n.charCodeAt(e);for(;t===9||t===32;)e++,t=n.charCodeAt(e);return n.slice(e)}function p1(n,e){const t=l1(n,e),r=t.one(n,void 0),i=s1(t),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}const f1=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"];class br{constructor(e,t,r){this.property=e,this.normal=t,r&&(this.space=r)}}br.prototype.property={};br.prototype.normal={};br.prototype.space=null;function pu(n,e){const t={},r={};let i=-1;for(;++i<n.length;)Object.assign(t,n[i].property),Object.assign(r,n[i].normal);return new br(t,r,e)}function ko(n){return n.toLowerCase()}class De{constructor(e,t){this.property=e,this.attribute=t}}De.prototype.space=null;De.prototype.boolean=!1;De.prototype.booleanish=!1;De.prototype.overloadedBoolean=!1;De.prototype.number=!1;De.prototype.commaSeparated=!1;De.prototype.spaceSeparated=!1;De.prototype.commaOrSpaceSeparated=!1;De.prototype.mustUseProperty=!1;De.prototype.defined=!1;let g1=0;const O=an(),re=an(),fu=an(),w=an(),W=an(),vn=an(),Te=an();function an(){return 2**++g1}const wo=Object.freeze(Object.defineProperty({__proto__:null,boolean:O,booleanish:re,commaOrSpaceSeparated:Te,commaSeparated:vn,number:w,overloadedBoolean:fu,spaceSeparated:W},Symbol.toStringTag,{value:"Module"})),Hi=Object.keys(wo);class cs extends De{constructor(e,t,r,i){let o=-1;if(super(e,t),il(this,"space",i),typeof r=="number")for(;++o<Hi.length;){const s=Hi[o];il(this,Hi[o],(r&wo[s])===wo[s])}}}cs.prototype.defined=!0;function il(n,e,t){t&&(n[e]=t)}const m1={}.hasOwnProperty;function Pn(n){const e={},t={};let r;for(r in n.properties)if(m1.call(n.properties,r)){const i=n.properties[r],o=new cs(r,n.transform(n.attributes||{},r),i,n.space);n.mustUseProperty&&n.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),e[r]=o,t[ko(r)]=r,t[ko(o.attribute)]=r}return new br(e,t,n.space)}const gu=Pn({space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),mu=Pn({space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function bu(n,e){return e in n?n[e]:e}function vu(n,e){return bu(n,e.toLowerCase())}const yu=Pn({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:vu,properties:{xmlns:null,xmlnsXLink:null}}),ku=Pn({transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:re,ariaAutoComplete:null,ariaBusy:re,ariaChecked:re,ariaColCount:w,ariaColIndex:w,ariaColSpan:w,ariaControls:W,ariaCurrent:null,ariaDescribedBy:W,ariaDetails:null,ariaDisabled:re,ariaDropEffect:W,ariaErrorMessage:null,ariaExpanded:re,ariaFlowTo:W,ariaGrabbed:re,ariaHasPopup:null,ariaHidden:re,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:W,ariaLevel:w,ariaLive:null,ariaModal:re,ariaMultiLine:re,ariaMultiSelectable:re,ariaOrientation:null,ariaOwns:W,ariaPlaceholder:null,ariaPosInSet:w,ariaPressed:re,ariaReadOnly:re,ariaRelevant:null,ariaRequired:re,ariaRoleDescription:W,ariaRowCount:w,ariaRowIndex:w,ariaRowSpan:w,ariaSelected:re,ariaSetSize:w,ariaSort:null,ariaValueMax:w,ariaValueMin:w,ariaValueNow:w,ariaValueText:null,role:null}}),b1=Pn({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:vu,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:vn,acceptCharset:W,accessKey:W,action:null,allow:null,allowFullScreen:O,allowPaymentRequest:O,allowUserMedia:O,alt:null,as:null,async:O,autoCapitalize:null,autoComplete:W,autoFocus:O,autoPlay:O,blocking:W,capture:null,charSet:null,checked:O,cite:null,className:W,cols:w,colSpan:null,content:null,contentEditable:re,controls:O,controlsList:W,coords:w|vn,crossOrigin:null,data:null,dateTime:null,decoding:null,default:O,defer:O,dir:null,dirName:null,disabled:O,download:fu,draggable:re,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:O,formTarget:null,headers:W,height:w,hidden:O,high:w,href:null,hrefLang:null,htmlFor:W,httpEquiv:W,id:null,imageSizes:null,imageSrcSet:null,inert:O,inputMode:null,integrity:null,is:null,isMap:O,itemId:null,itemProp:W,itemRef:W,itemScope:O,itemType:W,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:O,low:w,manifest:null,max:null,maxLength:w,media:null,method:null,min:null,minLength:w,multiple:O,muted:O,name:null,nonce:null,noModule:O,noValidate:O,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:O,optimum:w,pattern:null,ping:W,placeholder:null,playsInline:O,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:O,referrerPolicy:null,rel:W,required:O,reversed:O,rows:w,rowSpan:w,sandbox:W,scope:null,scoped:O,seamless:O,selected:O,shadowRootClonable:O,shadowRootDelegatesFocus:O,shadowRootMode:null,shape:null,size:w,sizes:null,slot:null,span:w,spellCheck:re,src:null,srcDoc:null,srcLang:null,srcSet:null,start:w,step:null,style:null,tabIndex:w,target:null,title:null,translate:null,type:null,typeMustMatch:O,useMap:null,value:re,width:w,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:W,axis:null,background:null,bgColor:null,border:w,borderColor:null,bottomMargin:w,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:O,declare:O,event:null,face:null,frame:null,frameBorder:null,hSpace:w,leftMargin:w,link:null,longDesc:null,lowSrc:null,marginHeight:w,marginWidth:w,noResize:O,noHref:O,noShade:O,noWrap:O,object:null,profile:null,prompt:null,rev:null,rightMargin:w,rules:null,scheme:null,scrolling:re,standby:null,summary:null,text:null,topMargin:w,valueType:null,version:null,vAlign:null,vLink:null,vSpace:w,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:O,disableRemotePlayback:O,prefix:null,property:null,results:w,security:null,unselectable:null}}),v1=Pn({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:bu,properties:{about:Te,accentHeight:w,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:w,amplitude:w,arabicForm:null,ascent:w,attributeName:null,attributeType:null,azimuth:w,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:w,by:null,calcMode:null,capHeight:w,className:W,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:w,diffuseConstant:w,direction:null,display:null,dur:null,divisor:w,dominantBaseline:null,download:O,dx:null,dy:null,edgeMode:null,editable:null,elevation:w,enableBackground:null,end:null,event:null,exponent:w,externalResourcesRequired:null,fill:null,fillOpacity:w,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:vn,g2:vn,glyphName:vn,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:w,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:w,horizOriginX:w,horizOriginY:w,id:null,ideographic:w,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:w,k:w,k1:w,k2:w,k3:w,k4:w,kernelMatrix:Te,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:w,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:w,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:w,overlineThickness:w,paintOrder:null,panose1:null,path:null,pathLength:w,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:W,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:w,pointsAtY:w,pointsAtZ:w,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Te,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Te,rev:Te,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Te,requiredFeatures:Te,requiredFonts:Te,requiredFormats:Te,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:w,specularExponent:w,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:w,strikethroughThickness:w,string:null,stroke:null,strokeDashArray:Te,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:w,strokeOpacity:w,strokeWidth:null,style:null,surfaceScale:w,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Te,tabIndex:w,tableValues:null,target:null,targetX:w,targetY:w,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Te,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:w,underlineThickness:w,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:w,values:null,vAlphabetic:w,vMathematical:w,vectorEffect:null,vHanging:w,vIdeographic:w,version:null,vertAdvY:w,vertOriginX:w,vertOriginY:w,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:w,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),y1=/^data[-\w.:]+$/i,ol=/-[a-z]/g,k1=/[A-Z]/g;function w1(n,e){const t=ko(e);let r=e,i=De;if(t in n.normal)return n.property[n.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&y1.test(e)){if(e.charAt(4)==="-"){const o=e.slice(5).replace(ol,$1);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=e.slice(4);if(!ol.test(o)){let s=o.replace(k1,x1);s.charAt(0)!=="-"&&(s="-"+s),e="data"+s}}i=cs}return new i(r,e)}function x1(n){return"-"+n.toLowerCase()}function $1(n){return n.charAt(1).toUpperCase()}const C1=pu([mu,gu,yu,ku,b1],"html"),wu=pu([mu,gu,yu,ku,v1],"svg"),S1=/["&'<>`]/g,E1=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,A1=/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,T1=/[|\\{}()[\]^$+*?.]/g,sl=new WeakMap;function I1(n,e){if(n=n.replace(e.subset?B1(e.subset):S1,r),e.subset||e.escapeOnly)return n;return n.replace(E1,t).replace(A1,r);function t(i,o,s){return e.format((i.charCodeAt(0)-55296)*1024+i.charCodeAt(1)-56320+65536,s.charCodeAt(o+2),e)}function r(i,o,s){return e.format(i.charCodeAt(0),s.charCodeAt(o+1),e)}}function B1(n){let e=sl.get(n);return e||(e=O1(n),sl.set(n,e)),e}function O1(n){const e=[];let t=-1;for(;++t<n.length;)e.push(n[t].replace(T1,"\\$&"));return new RegExp("(?:"+e.join("|")+")","g")}const M1=/[\dA-Fa-f]/;function z1(n,e,t){const r="&#x"+n.toString(16).toUpperCase();return t&&e&&!M1.test(String.fromCharCode(e))?r:r+";"}const L1=/\d/;function P1(n,e,t){const r="&#"+String(n);return t&&e&&!L1.test(String.fromCharCode(e))?r:r+";"}const F1=["AElig","AMP","Aacute","Acirc","Agrave","Aring","Atilde","Auml","COPY","Ccedil","ETH","Eacute","Ecirc","Egrave","Euml","GT","Iacute","Icirc","Igrave","Iuml","LT","Ntilde","Oacute","Ocirc","Ograve","Oslash","Otilde","Ouml","QUOT","REG","THORN","Uacute","Ucirc","Ugrave","Uuml","Yacute","aacute","acirc","acute","aelig","agrave","amp","aring","atilde","auml","brvbar","ccedil","cedil","cent","copy","curren","deg","divide","eacute","ecirc","egrave","eth","euml","frac12","frac14","frac34","gt","iacute","icirc","iexcl","igrave","iquest","iuml","laquo","lt","macr","micro","middot","nbsp","not","ntilde","oacute","ocirc","ograve","ordf","ordm","oslash","otilde","ouml","para","plusmn","pound","quot","raquo","reg","sect","shy","sup1","sup2","sup3","szlig","thorn","times","uacute","ucirc","ugrave","uml","uuml","yacute","yen","yuml"],ji={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",quot:'"',amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"},N1=["cent","copy","divide","gt","lt","not","para","times"],xu={}.hasOwnProperty,xo={};let Tr;for(Tr in ji)xu.call(ji,Tr)&&(xo[ji[Tr]]=Tr);const D1=/[^\dA-Za-z]/;function _1(n,e,t,r){const i=String.fromCharCode(n);if(xu.call(xo,i)){const o=xo[i],s="&"+o;return t&&F1.includes(o)&&!N1.includes(o)&&(!r||e&&e!==61&&D1.test(String.fromCharCode(e)))?s:s+";"}return""}function R1(n,e,t){let r=z1(n,e,t.omitOptionalSemicolons),i;if((t.useNamedReferences||t.useShortestReferences)&&(i=_1(n,e,t.omitOptionalSemicolons,t.attribute)),(t.useShortestReferences||!i)&&t.useShortestReferences){const o=P1(n,e,t.omitOptionalSemicolons);o.length<r.length&&(r=o)}return i&&(!t.useShortestReferences||i.length<r.length)?i:r}function yn(n,e){return I1(n,Object.assign({format:R1},e))}const V1=/^>|^->|<!--|-->|--!>|<!-$/g,H1=[">"],j1=["<",">"];function q1(n,e,t,r){return r.settings.bogusComments?"<?"+yn(n.value,Object.assign({},r.settings.characterReferences,{subset:H1}))+">":"<!--"+n.value.replace(V1,i)+"-->";function i(o){return yn(o,Object.assign({},r.settings.characterReferences,{subset:j1}))}}function U1(n,e,t,r){return"<!"+(r.settings.upperDoctype?"DOCTYPE":"doctype")+(r.settings.tightDoctype?"":" ")+"html>"}function al(n,e){const t=String(n);if(typeof e!="string")throw new TypeError("Expected character");let r=0,i=t.indexOf(e);for(;i!==-1;)r++,i=t.indexOf(e,i+e.length);return r}function K1(n,e){const t=e||{};return(n[n.length-1]===""?[...n,""]:n).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}function W1(n){return n.join(" ").trim()}const G1=/[ \t\n\f\r]/g;function us(n){return typeof n=="object"?n.type==="text"?ll(n.value):!1:ll(n)}function ll(n){return n.replace(G1,"")===""}const ie=Cu(1),$u=Cu(-1),Q1=[];function Cu(n){return e;function e(t,r,i){const o=t?t.children:Q1;let s=(r||0)+n,a=o[s];if(!i)for(;a&&us(a);)s+=n,a=o[s];return a}}const X1={}.hasOwnProperty;function Su(n){return e;function e(t,r,i){return X1.call(n,t.tagName)&&n[t.tagName](t,r,i)}}const ds=Su({body:Y1,caption:qi,colgroup:qi,dd:nx,dt:tx,head:qi,html:Z1,li:ex,optgroup:rx,option:ix,p:J1,rp:cl,rt:cl,tbody:sx,td:ul,tfoot:ax,th:ul,thead:ox,tr:lx});function qi(n,e,t){const r=ie(t,e,!0);return!r||r.type!=="comment"&&!(r.type==="text"&&us(r.value.charAt(0)))}function Z1(n,e,t){const r=ie(t,e);return!r||r.type!=="comment"}function Y1(n,e,t){const r=ie(t,e);return!r||r.type!=="comment"}function J1(n,e,t){const r=ie(t,e);return r?r.type==="element"&&(r.tagName==="address"||r.tagName==="article"||r.tagName==="aside"||r.tagName==="blockquote"||r.tagName==="details"||r.tagName==="div"||r.tagName==="dl"||r.tagName==="fieldset"||r.tagName==="figcaption"||r.tagName==="figure"||r.tagName==="footer"||r.tagName==="form"||r.tagName==="h1"||r.tagName==="h2"||r.tagName==="h3"||r.tagName==="h4"||r.tagName==="h5"||r.tagName==="h6"||r.tagName==="header"||r.tagName==="hgroup"||r.tagName==="hr"||r.tagName==="main"||r.tagName==="menu"||r.tagName==="nav"||r.tagName==="ol"||r.tagName==="p"||r.tagName==="pre"||r.tagName==="section"||r.tagName==="table"||r.tagName==="ul"):!t||!(t.type==="element"&&(t.tagName==="a"||t.tagName==="audio"||t.tagName==="del"||t.tagName==="ins"||t.tagName==="map"||t.tagName==="noscript"||t.tagName==="video"))}function ex(n,e,t){const r=ie(t,e);return!r||r.type==="element"&&r.tagName==="li"}function tx(n,e,t){const r=ie(t,e);return!!(r&&r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd"))}function nx(n,e,t){const r=ie(t,e);return!r||r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd")}function cl(n,e,t){const r=ie(t,e);return!r||r.type==="element"&&(r.tagName==="rp"||r.tagName==="rt")}function rx(n,e,t){const r=ie(t,e);return!r||r.type==="element"&&r.tagName==="optgroup"}function ix(n,e,t){const r=ie(t,e);return!r||r.type==="element"&&(r.tagName==="option"||r.tagName==="optgroup")}function ox(n,e,t){const r=ie(t,e);return!!(r&&r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot"))}function sx(n,e,t){const r=ie(t,e);return!r||r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot")}function ax(n,e,t){return!ie(t,e)}function lx(n,e,t){const r=ie(t,e);return!r||r.type==="element"&&r.tagName==="tr"}function ul(n,e,t){const r=ie(t,e);return!r||r.type==="element"&&(r.tagName==="td"||r.tagName==="th")}const cx=Su({body:hx,colgroup:px,head:dx,html:ux,tbody:fx});function ux(n){const e=ie(n,-1);return!e||e.type!=="comment"}function dx(n){const e=new Set;for(const r of n.children)if(r.type==="element"&&(r.tagName==="base"||r.tagName==="title")){if(e.has(r.tagName))return!1;e.add(r.tagName)}const t=n.children[0];return!t||t.type==="element"}function hx(n){const e=ie(n,-1,!0);return!e||e.type!=="comment"&&!(e.type==="text"&&us(e.value.charAt(0)))&&!(e.type==="element"&&(e.tagName==="meta"||e.tagName==="link"||e.tagName==="script"||e.tagName==="style"||e.tagName==="template"))}function px(n,e,t){const r=$u(t,e),i=ie(n,-1,!0);return t&&r&&r.type==="element"&&r.tagName==="colgroup"&&ds(r,t.children.indexOf(r),t)?!1:!!(i&&i.type==="element"&&i.tagName==="col")}function fx(n,e,t){const r=$u(t,e),i=ie(n,-1);return t&&r&&r.type==="element"&&(r.tagName==="thead"||r.tagName==="tbody")&&ds(r,t.children.indexOf(r),t)?!1:!!(i&&i.type==="element"&&i.tagName==="tr")}const Ir={name:[[`	
\f\r &/=>`.split(""),`	
\f\r "&'/=>\``.split("")],[`\0	
\f\r "&'/<=>`.split(""),`\0	
\f\r "&'/<=>\``.split("")]],unquoted:[[`	
\f\r &>`.split(""),`\0	
\f\r "&'<=>\``.split("")],[`\0	
\f\r "&'<=>\``.split(""),`\0	
\f\r "&'<=>\``.split("")]],single:[["&'".split(""),"\"&'`".split("")],["\0&'".split(""),"\0\"&'`".split("")]],double:[['"&'.split(""),"\"&'`".split("")],['\0"&'.split(""),"\0\"&'`".split("")]]};function gx(n,e,t,r){const i=r.schema,o=i.space==="svg"?!1:r.settings.omitOptionalTags;let s=i.space==="svg"?r.settings.closeEmptyElements:r.settings.voids.includes(n.tagName.toLowerCase());const a=[];let l;i.space==="html"&&n.tagName==="svg"&&(r.schema=wu);const c=mx(r,n.properties),u=r.all(i.space==="html"&&n.tagName==="template"?n.content:n);return r.schema=i,u&&(s=!1),(c||!o||!cx(n,e,t))&&(a.push("<",n.tagName,c?" "+c:""),s&&(i.space==="svg"||r.settings.closeSelfClosing)&&(l=c.charAt(c.length-1),(!r.settings.tightSelfClosing||l==="/"||l&&l!=='"'&&l!=="'")&&a.push(" "),a.push("/")),a.push(">")),a.push(u),!s&&(!o||!ds(n,e,t))&&a.push("</"+n.tagName+">"),a.join("")}function mx(n,e){const t=[];let r=-1,i;if(e){for(i in e)if(e[i]!==null&&e[i]!==void 0){const o=bx(n,i,e[i]);o&&t.push(o)}}for(;++r<t.length;){const o=n.settings.tightAttributes?t[r].charAt(t[r].length-1):void 0;r!==t.length-1&&o!=='"'&&o!=="'"&&(t[r]+=" ")}return t.join("")}function bx(n,e,t){const r=w1(n.schema,e),i=n.settings.allowParseErrors&&n.schema.space==="html"?0:1,o=n.settings.allowDangerousCharacters?0:1;let s=n.quote,a;if(r.overloadedBoolean&&(t===r.attribute||t==="")?t=!0:(r.boolean||r.overloadedBoolean&&typeof t!="string")&&(t=!!t),t==null||t===!1||typeof t=="number"&&Number.isNaN(t))return"";const l=yn(r.attribute,Object.assign({},n.settings.characterReferences,{subset:Ir.name[i][o]}));return t===!0||(t=Array.isArray(t)?(r.commaSeparated?K1:W1)(t,{padLeft:!n.settings.tightCommaSeparatedLists}):String(t),n.settings.collapseEmptyAttributes&&!t)?l:(n.settings.preferUnquoted&&(a=yn(t,Object.assign({},n.settings.characterReferences,{attribute:!0,subset:Ir.unquoted[i][o]}))),a!==t&&(n.settings.quoteSmart&&al(t,s)>al(t,n.alternative)&&(s=n.alternative),a=s+yn(t,Object.assign({},n.settings.characterReferences,{subset:(s==="'"?Ir.single:Ir.double)[i][o],attribute:!0}))+s),l+(a&&"="+a))}const vx=["<","&"];function Eu(n,e,t,r){return t&&t.type==="element"&&(t.tagName==="script"||t.tagName==="style")?n.value:yn(n.value,Object.assign({},r.settings.characterReferences,{subset:vx}))}function yx(n,e,t,r){return r.settings.allowDangerousHtml?n.value:Eu(n,e,t,r)}function kx(n,e,t,r){return r.all(n)}const wx=Dc("type",{invalid:xx,unknown:$x,handlers:{comment:q1,doctype:U1,element:gx,raw:yx,root:kx,text:Eu}});function xx(n){throw new Error("Expected node, not `"+n+"`")}function $x(n){const e=n;throw new Error("Cannot compile unknown node `"+e.type+"`")}const Cx={},Sx={},Ex=[];function Ax(n,e){const t=e||Cx,r=t.quote||'"',i=r==='"'?"'":'"';if(r!=='"'&&r!=="'")throw new Error("Invalid quote `"+r+"`, expected `'` or `\"`");return{one:Tx,all:Ix,settings:{omitOptionalTags:t.omitOptionalTags||!1,allowParseErrors:t.allowParseErrors||!1,allowDangerousCharacters:t.allowDangerousCharacters||!1,quoteSmart:t.quoteSmart||!1,preferUnquoted:t.preferUnquoted||!1,tightAttributes:t.tightAttributes||!1,upperDoctype:t.upperDoctype||!1,tightDoctype:t.tightDoctype||!1,bogusComments:t.bogusComments||!1,tightCommaSeparatedLists:t.tightCommaSeparatedLists||!1,tightSelfClosing:t.tightSelfClosing||!1,collapseEmptyAttributes:t.collapseEmptyAttributes||!1,allowDangerousHtml:t.allowDangerousHtml||!1,voids:t.voids||f1,characterReferences:t.characterReferences||Sx,closeSelfClosing:t.closeSelfClosing||!1,closeEmptyElements:t.closeEmptyElements||!1},schema:t.space==="svg"?wu:C1,quote:r,alternative:i}.one(Array.isArray(n)?{type:"root",children:n}:n,void 0,void 0)}function Tx(n,e,t){return wx(n,e,t,this)}function Ix(n){const e=[],t=n&&n.children||Ex;let r=-1;for(;++r<t.length;)e[r]=this.one(t[r],r,n);return e.join("")}const Bx={};function hs(n){const e=this,{handlers:t,sanitize:r,...i}=n||Bx;let o=!1,s;typeof r=="boolean"?o=!r:r&&(s=r),e.compiler=a;function a(l,c){const u=p1(l,{handlers:t,allowDangerousHtml:o}),d=o?u:$0(u,s),p=Ax(d,{...i,allowDangerousHtml:o});return c.extname&&(c.extname=".html"),l&&l.type==="root"&&p&&/[^\r\n]/.test(p.charAt(p.length-1))?p+`
`:p}}const Ox=D.getCookie("CLIPSESSIONTOKEN"),Mx="https://api.clippsly.com/endpoints/data/track?id=";class $o extends Se{async connect(){var i,o;const e=await fetch(Mx+this.idValue.toString(),{method:"GET",headers:{Authorization:`Bearer ${Ox}`}}).then(s=>s.json()).catch(s=>be.loadPage("/error?code="+(s.status|404)));D.setDocTitle(e.releaseName),this.description=await is().use(hs).process(e.additionalData.releaseDescription||"No description provided").then(s=>String(s)),this.trackNameTarget.textContent=e.releaseName,this.explicitIconTarget.hidden=!e.isExplicit,this.aiMusicIconTarget.hidden=!e.isArtificiallyGenerated,this.artistPfpTarget.src=e.releaseAuthor.authorAvatar,this.artistDisplayTarget.textContent=e.releaseAuthor.authorDisplay,this.artistVerifiedTarget.hidden=!e.releaseAuthor.authorVerified,this.artistUsernameTarget.textContent=e.releaseAuthor.authorUsername,this.artistLinkTarget.href=`/users/${e.releaseAuthor.authorUsername}`,this.trackDurationTarget.textContent=e.additionalData.audioDuration,this.descriptionTarget.innerHTML=this.description,this.trackCoverTarget.src=e.additionalData.releaseCoverArt;const t=this.trackCoverTarget.cloneNode(!1);t.classList.add("backlight"),(i=this.trackCoverTarget.parentNode)==null||i.append(t);const r=this.trackCoverTarget.cloneNode(!1);r.classList.add("backdrop"),(o=this.trackCoverTarget.parentNode)==null||o.append(r),this.trackLoadingTargets.forEach(s=>{s.classList.remove("skeleton-load-bg")}),await this.loadMoreFromArtist(e.releaseAuthor.authorUsername),this.element.ariaHidden="false"}expandDescription(e){e.preventDefault(),this.descriptionDialogContentTarget.innerHTML=this.description,this.descriptionDialogTarget.show()}async loadMoreFromArtist(e){fetch(`https://api.clippsly.com/endpoints/data/track?username=${e}`).then(t=>t.json()).then(t=>{t.sort((i,o)=>o.releaseID-i.releaseID);const r=this.moreFromArtistTarget;r.innerHTML="",t.slice(0,6).forEach(i=>{r.append(D.createTrack({ID:i.releaseID,Title:i.releaseName,Artist:0,Genre:"Unknown",ArtCover:i.additionalData.releaseCoverArt,Audio:"https://cdn.clippsly.com/submissions/audio/bc44279d62fac0a8e56a956c91dc94d8f0e86d17.mp3",Description:i.additionalData.releaseDescription||"",commentsOff:!1,isModerated:!1,isExplicit:!1,isProtected:!1,isUnderReview:!1,isArtificiallyGenerated:!1,audio_duration:i.additionalData.audioDuration,releaseDate:i.additionalData.premiereDate||0,releaseAuthor:{authorUsername:i.releaseAuthor.authorUsername||"FIXME",authorDisplay:i.releaseAuthor.authorDisplay,authorAvatar:i.releaseAuthor.authorAvatar,authorVerified:i.releaseAuthor.authorVerified}},!0))})}).catch(()=>{this.moreFromArtistTarget.innerHTML="<p>Could not load tracks from this author.</p>"})}}ce($o,"targets",["trackCover","trackName","explicitIcon","aiMusicIcon","trackDuration","artistPfp","artistDisplay","artistVerified","artistUsername","artistLink","description","descriptionDialog","descriptionDialogContent","moreFromArtist","trackLoading"]),ce($o,"values",{id:Number});const dl=D.getCookie("CLIPSESSIONTOKEN"),zx="https://api.clippsly.com/endpoints/data/user?username=",je=class je extends Se{async connect(){const e=await fetch(zx+this.idValue.toString(),{method:"GET",headers:{Authorization:`Bearer ${dl}`}}).then(t=>(t.ok||be.loadPage("/error?code="+(t.status|404)),t)).then(t=>t.json());if(D.setDocTitle(e.displayName),this.description=await is().use(hs).process(e.description||"No description provided").then(t=>String(t)),this.userBannerTarget.src=e.banner,this.userPfpTarget.src=e.avatar,this.userDisplayTarget.textContent=e.displayName,this.userHandleTarget.textContent="@"+e.name,e.status.isVerified){const t=document.createElement("div");t.classList.add("icon"),t.classList.add("brand"),t.title="Verified",t.innerHTML=D.verifiedBadgeHTML,this.userDisplayTarget.append(t)}this.userDescriptionTarget.innerHTML=this.description,e.status.isAdmin&&this.userBadgesTarget.append(je.createBadge("Clippsly Team","https://cdn.clippsly.com/brand_assets/badges/version_5/Moderators.png","https://support.clippsly.com/knowledgebase.php?article=7")),e.status.isFeedback&&this.userBadgesTarget.append(je.createBadge("Feedback","https://cdn.clippsly.com/brand_assets/badges/version_5/Contributor.png","https://support.clippsly.com/knowledgebase.php?article=4")),e.status.isPlus&&this.userBadgesTarget.append(je.createBadge("Plus","https://cdn.clippsly.com/brand_assets/badges/version_5/Plus.png")),e.connections.roblox&&this.userBadgesTarget.append(je.createBadge("Roblox","https://cdn.clippsly.com/brand_assets/connection_icons/roblox-connection.png",`https://roblox.com/users/${e.connections.roblox}/profile`,!0)),e.connections.youtube&&this.userBadgesTarget.append(je.createBadge("YouTube","https://cdn.clippsly.com/brand_assets/connection_icons/youtube-connection.png",`https://youtube.com/${e.connections.youtube}`,!0)),e.connections.soundcloud&&this.userBadgesTarget.append(je.createBadge("SoundCloud","https://cdn.clippsly.com/brand_assets/connection_icons/soundcloud-connection.png",`https://soundcloud.com/${e.connections.soundcloud}`,!0)),e.connections.twitch&&this.userBadgesTarget.append(je.createBadge("Twitch","https://cdn.clippsly.com/brand_assets/connection_icons/twitch-connection.png","https://twitch.tv/"+e.connections.twitch,!0)),this.loadingTargets.forEach(t=>{t.classList.remove("skeleton-load-bg")}),await this.loadUserTracks(),this.element.ariaHidden="false"}expandDescription(e){e.preventDefault(),this.userDescriptionDialogContentTarget.innerHTML=this.description,this.userDescriptionDialogTarget.show()}async loadUserTracks(){const e=await fetch("https://api.clippsly.com/endpoints/data/track?username="+this.idValue.toString(),{method:"GET",headers:{Authorization:`Bearer ${dl}`}}).then(t=>t.json()).catch(t=>be.loadPage("/error?code="+(t.status|404)));this.trackListTarget.innerHTML="";for(let t=0;t<e.length;t++){const r=e[t];this.trackListTarget.append(D.createTrack({ID:r.releaseID,Title:r.releaseName,Artist:0,Genre:r.releaseGenre||"Unknown",ArtCover:r.additionalData.releaseCoverArt,Audio:r.additionalData.audioFile,Description:r.additionalData.releaseDescription,commentsOff:r.commentsOff,isModerated:!1,isExplicit:!1,isProtected:!1,isUnderReview:!1,isArtificiallyGenerated:!1,audio_duration:r.additionalData.audioDuration,releaseDate:r.additionalData.premiereDate,releaseAuthor:r.releaseAuthor},!0))}}static createBadge(e,t,r,i){const o=document.createElement("a");r&&(o.href=r),o.tabIndex=0,o.title=e,o.classList.add("userpage-badge"),o.setAttribute("data-global-target","openExternal");const s=document.createElement("img");return s.ariaHidden="true",s.role="presentation",s.alt="",s.src=t,s.draggable=!1,i&&(s.style.transform="scale(0.85)"),o.append(s),o}};ce(je,"targets",["userBanner","userPfp","userStatus","userDisplay","userHandle","userDescription","userDescriptionDialog","userDescriptionDialogContent","userBadges","trackList","loading"]),ce(je,"values",{id:String});let Co=je;const Lx="https://api.clippsly.com/endpoints/functions/cliptivity?page=",Px=D.getCookie("CLIPSESSIONTOKEN"),hn="/cliptivity";class So extends Se{async connect(){this.pageValue=this.pageValue||1,history.replaceState({url:`${hn}?page=${this.pageValue}`},"",`${hn}?page=${this.pageValue}`),this.paginationCurrentTarget.value=String(this.pageValue),this.networkData=await fetch(Lx+this.pageValue.toString(),{method:"GET",headers:{Authorization:`Bearer ${Px}`}}).then(e=>e.json()).catch(e=>be.loadPage("/error?code="+(e.status|404))),this.listTarget.innerHTML="",this.networkData.pagination||be.loadPage(hn),this.paginationTotalTarget.innerText="of "+this.networkData.pagination.totalPages,this.paginationTarget.hidden=!1,this.previousTarget.disabled=!this.networkData.pagination.hasPrevious,this.nextTarget.disabled=!this.networkData.pagination.hasNext;for(let e=0;e<this.networkData.actionList.length;e++){const t=this.networkData.actionList[e],r=this.createActionItem(t);r.style.animationDelay=e*25+"ms",this.listTarget.append(r)}}previous(){be.loadPage(`${hn}?page=${this.networkData.pagination.currentPage-1}`)}next(){be.loadPage(`${hn}?page=${this.networkData.pagination.currentPage+1}`)}goto(){be.loadPage(`${hn}?page=${this.paginationCurrentTarget.value}`)}createActionItem(e){const t=document.createElement("li"),r=document.createElement("a");r.classList.add("avatar"),r.classList.add("skeleton-load-bg"),r.tabIndex=0,r.href=`/users/${e.userInfo.userUsername}`;const i=document.createElement("img");i.role="presentation",i.alt="",i.src=e.userInfo.userAvatar??"https://cdn.clippsly.com/brand_assets/icons/default-artist.png",i.loading="eager",i.fetchPriority="high",i.setAttribute("data-global-target","skelimg"),i.classList.add("skeleton-load-fg"),r.append(i);const o=document.createElement("div"),s=document.createElement("div");s.classList.add("cliptivitypage-inlinedata"),s.classList.add("subtitle-hyperlink");const a=document.createElement("a");a.tabIndex=-1,a.href=`/users/${e.userInfo.userUsername}`,a.classList.add("artist-name");const l=document.createElement("span");l.textContent=e.userInfo.userDisplay,l.classList.add("hyperlink-text");const c=document.createElement("span");if(c.textContent="@"+e.userInfo.userUsername,c.classList.add("subtitle-hyperlink"),a.append(l),e.userInfo.userVerified){const p=document.createElement("div");p.classList.add("icon"),p.classList.add("brand"),p.title="Verified",p.innerHTML=D.verifiedBadgeHTML,a.append(p)}a.append(c);const u=document.createElement("span");u.textContent=D.formatTimestamp(e.actionTime),s.append(a,u);const d=document.createElement("p");return is().use(hs).process(e.actionDescription||"No description provided").then(p=>String(p)).then(p=>d.innerHTML=p),o.append(s,d),t.append(r,o),t}}ce(So,"targets",["list","pagination","paginationCurrent","paginationTotal","previous","next"]),ce(So,"values",{page:Number});const Fx="https://api.clippsly.com/endpoints/data/economy",Nx=D.getCookie("CLIPSESSIONTOKEN");class Au extends Se{async connect(){this.networkData=await fetch(Fx,{method:"GET",headers:{Authorization:`Bearer ${Nx}`}}).then(e=>e.json()).catch(()=>be.loadPage("/login"))}openFaq(){this.faqDialogTarget.show()}}ce(Au,"targets",["currentBalance","faqDialog"]);Fb.define(M.registry);bb.define(M.registry);_m.define(M.registry);Pm.define(M.registry);Mv.define(M.registry);Cv.define(M.registry);Sb.define(M.registry);vv.define(M.registry);pv.define(M.registry);rb.define(M.registry);gb.define(M.registry);av.define(M.registry);rv.define(M.registry);Jb.define(M.registry);Kb.define(M.registry);_v.define(M.registry);Tb.define(M.registry);Mb.define(M.registry);jb.define(M.registry);const dt=Md.start();dt.register("global",be);dt.register("selfpfp",ah);dt.register("balance",Au);dt.register("search",Gi);dt.register("searchbar",wl);dt.register("track",$o);dt.register("user",Co);dt.register("cliptivity",So);dt.register("error",Qi);dt.register("home",kl);
