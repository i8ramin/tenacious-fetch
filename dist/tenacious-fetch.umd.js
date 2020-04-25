!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.tenaciousFetch=e()}(this,function(){var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};(function(e,r){var n,o,i,s,a;n=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},s=function(t){function e(){n(this,e);var t=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.aborted=!1,t.onabort=null,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"toString",value:function(){return"[object AbortSignal]"}},{key:"dispatchEvent",value:function(t){"abort"===t.type&&(this.aborted=!0,"function"==typeof this.onabort&&this.onabort.call(this,t)),function t(e,r,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,r);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,r,n)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(n):void 0}(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"dispatchEvent",this).call(this,t)}}]),e}(function(){function t(){n(this,t),this.listeners={}}return o(t,[{key:"addEventListener",value:function(t,e){t in this.listeners||(this.listeners[t]=[]),this.listeners[t].push(e)}},{key:"removeEventListener",value:function(t,e){if(t in this.listeners)for(var r=this.listeners[t],n=0,o=r.length;n<o;n++)if(r[n]===e)return void r.splice(n,1)}},{key:"dispatchEvent",value:function(t){var e=this;if(t.type in this.listeners){for(var r=function(r){setTimeout(function(){return r.call(e,t)})},n=this.listeners[t.type],o=0,i=n.length;o<i;o++)r(n[o]);return!t.defaultPrevented}}}]),t}()),a=function(){function t(){n(this,t),this.signal=new s}return o(t,[{key:"abort",value:function(){var t=void 0;try{t=new Event("abort")}catch(e){"undefined"!=typeof document?(t=document.createEvent("Event")).initEvent("abort",!1,!1):t={type:"abort",bubbles:!1,cancelable:!1}}this.signal.dispatchEvent(t)}},{key:"toString",value:function(){return"[object AbortController]"}}]),t}(),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(a.prototype[Symbol.toStringTag]="AbortController",s.prototype[Symbol.toStringTag]="AbortSignal"),function(t){t.AbortController&&!function(t){return t.navigator&&t.navigator.userAgent&&(!!(e=t.navigator.userAgent).match(/ (crios|gsa|fxios)\//i)||!(!e.match(/ Safari\//i)||!e.match(/ Version\/(12.0|12.1|11)/i)));var e}(t)||(t.AbortController=a,t.AbortSignal=s)}("undefined"!=typeof self?self:t)})(e={exports:{}},e.exports);var e,r={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(r.arrayBuffer)var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],o=ArrayBuffer.isView||function(t){return t&&n.indexOf(Object.prototype.toString.call(t))>-1};function i(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function s(t){return"string"!=typeof t&&(t=String(t)),t}function a(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r.iterable&&(e[Symbol.iterator]=function(){return e}),e}function u(t){this.map={},t instanceof u?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function f(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function c(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function l(t){var e=new FileReader,r=c(e);return e.readAsArrayBuffer(t),r}function h(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:r.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:r.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():r.arrayBuffer&&r.blob&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=h(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):r.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||o(t))?this._bodyArrayBuffer=h(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r.blob&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(l)}),this.text=function(){var t,e,r,n=f(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=c(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},r.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(t,e){t=i(t),e=s(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},u.prototype.delete=function(t){delete this.map[i(t)]},u.prototype.get=function(t){return t=i(t),this.has(t)?this.map[t]:null},u.prototype.has=function(t){return this.map.hasOwnProperty(i(t))},u.prototype.set=function(t,e){this.map[i(t)]=s(e)},u.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},u.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),a(t)},u.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),a(t)},u.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),a(t)},r.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);var d=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function p(t,e){var r,n,o=(e=e||{}).body;if(t instanceof p){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new u(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new u(e.headers)),this.method=(n=(r=e.method||this.method||"GET").toUpperCase(),d.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function m(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new u(e.headers),this.url=e.url||"",this._initBody(t)}p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},y.call(p.prototype),y.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},m.error=function(){var t=new m(null,{status:0,statusText:""});return t.type="error",t};var v=[301,302,303,307,308];m.redirect=function(t,e){if(-1===v.indexOf(e))throw new RangeError("Invalid status code");return new m(null,{status:e,headers:{location:t}})};var w=self.DOMException;try{new w}catch(t){(w=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),w.prototype.constructor=w}function g(t,e){return new Promise(function(n,o){var i=new p(t,e);if(i.signal&&i.signal.aborted)return o(new w("Aborted","AbortError"));var s=new XMLHttpRequest;function a(){s.abort()}s.onload=function(){var t,e,r={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new u,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e)};r.url="responseURL"in s?s.responseURL:r.headers.get("X-Request-URL"),n(new m("response"in s?s.response:s.responseText,r))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.onabort=function(){o(new w("Aborted","AbortError"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&r.blob&&(s.responseType="blob"),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),i.signal&&(i.signal.addEventListener("abort",a),s.onreadystatechange=function(){4===s.readyState&&i.signal.removeEventListener("abort",a)}),s.send(void 0===i._bodyInit?null:i._bodyInit)})}function E(t,e,r){return new Promise(function(n,o){function i(t,e,r,n){if(t>0){var i=function(t,e){var r=t.retryDelay,n=t.factor,o=t.retries;if(n&&"number"==typeof n&&Number.isInteger(n))return function(t,e){return Math.pow(t,e)}(n,o-e);return i=r,s=o-e,i*s;var i,s}(r,--t);r.onRetry&&"function"==typeof r.onRetry&&r.onRetry({retriesLeft:t,retryDelay:i,response:n}),setTimeout(function(){return s(e,r,t)},i)}else o(n)}function s(t,e,r){var s=e.retryStatus;(0,e.fetcher)(t,e).then(function(o){s.includes(o.status)?i(r,t,e,o):n(o)}).catch(function(n){e.retryOnFatalError?i(r,t,e,n):o(n)})}s(e,r,t)})}g.polyfill=!0,self.fetch||(self.fetch=g,self.Headers=u,self.Request=p,self.Response=m);var A=!1;return A=window&&window.fetch&&"signal"in new window.Request("")?window.fetch:g,function(t,e){void 0===t&&(t=""),void 0===e&&(e={});var r=new AbortController;if(!(e=Object.assign({retries:1,retryDelay:1e3,retryStatus:[],retryOnFatalError:!0,fetcher:A,signal:r.signal,timeout:void 0},e)).fetcher||"function"!=typeof e.fetcher)throw new Error("tenacious-fetch: No fetch implementation found. Provide a valid fetch implementation via the fetcher configuration property.");"string"!=typeof e.retryStatus&&"number"!=typeof e.retryStatus||(e.retryStatus=[Number.parseInt(e.retryStatus)]);var n=e.timeout;return n&&Number.isInteger(n)?Promise.race([E(e.retries,t,e),new Promise(function(t,e){return setTimeout(function(){r.abort(),e(new Error("tenacious-fetch: Request took longer than timeout of "+n+" ms."))},n)})]):E(e.retries,t,e)}});
//# sourceMappingURL=tenacious-fetch.umd.js.map
