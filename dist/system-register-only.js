/*
 * SystemJS v0.19.11
 */
!function(e){function t(e,t){var n;return e instanceof Error?(n=new Error(e.message,e.fileName,e.lineNumber),g?(n.message=e.message+"\n	"+t,n.stack=e.stack):(n.message=e.message,n.stack=e.stack+"\n	"+t)):n=e+"\n	"+t,n}function n(e,n,r){try{new Function(e).call(r)}catch(a){throw t(a,"Evaluating "+n)}}function r(){}function a(t){this._loader={loaderObj:this,loads:[],modules:{},importPromises:{},moduleRecords:{}},w(this,"global",{get:function(){return e}})}function o(){a.call(this),this.paths={}}function i(e,t){var n,r="",a=0;for(var o in e){var i=o.split("*");if(i.length>2)throw new TypeError("Only one wildcard in a path is permitted");if(1==i.length){if(t==o){r=o;break}}else{var d=i[0].length;d>=a&&t.substr(0,i[0].length)==i[0]&&t.substr(t.length-i[1].length)==i[1]&&(a=d,r=o,n=t.substr(i[0].length,t.length-i[1].length-i[0].length))}}var s=e[r];return"string"==typeof n&&(s=s.replace("*",n)),s}function d(){}function s(){o.call(this),P.call(this)}function l(){}function u(e,t){s.prototype[e]=t(s.prototype[e]||function(){})}function c(e){P=e(P||function(){})}function f(e){for(var t=[],n=[],r=0,a=e.length;a>r;r++){var o=b.call(t,e[r]);-1===o?(t.push(e[r]),n.push([r])):n[o].push(r)}return{names:t,indices:n}}function m(e){var t={};if("object"==typeof e||"function"==typeof e)if(O){var n;for(var r in e)(n=Object.getOwnPropertyDescriptor(e,r))&&w(t,r,n)}else{var a=e&&e.hasOwnProperty;for(var r in e)(!a||e.hasOwnProperty(r))&&(t[r]=e[r])}return t["default"]=e,w(t,"__useDefault",{value:!0}),t}function p(e){var t=e.match(R);return t&&"System.register"==e.substr(t[0].length,15)}function h(){return{name:null,deps:null,originalIndices:null,declare:null,execute:null,executingRequire:!1,declarative:!1,normalizedDeps:null,groupIndex:null,evaluated:!1,module:null,esModule:null,esmExports:!1}}var v="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,g="undefined"!=typeof window&&"undefined"!=typeof document,y="undefined"!=typeof process&&"undefined"!=typeof process.platform&&!!process.platform.match(/^win/);e.console||(e.console={assert:function(){}});var w,b=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1};!function(){try{Object.defineProperty({},"a",{})&&(w=Object.defineProperty)}catch(e){w=function(e,t,n){try{e[t]=n.value||n.get.call(e)}catch(r){}}}}();var x;if("undefined"!=typeof document&&document.getElementsByTagName){if(x=document.baseURI,!x){var E=document.getElementsByTagName("base");x=E[0]&&E[0].href||window.location.href}x=x.split("#")[0].split("?")[0],x=x.substr(0,x.lastIndexOf("/")+1)}else if("undefined"!=typeof process&&process.cwd)x="file://"+(y?"/":"")+process.cwd()+"/",y&&(x=x.replace(/\\/g,"/"));else{if("undefined"==typeof location)throw new TypeError("No environment baseURI");x=e.location.href}var S=e.URLPolyfill||e.URL;w(r.prototype,"toString",{value:function(){return"Module"}}),function(){function o(e){return{status:"loading",name:e,linkSets:[],dependencies:[],metadata:{}}}function i(e,t,n){return new Promise(c({step:n.address?"fetch":"locate",loader:e,moduleName:t,moduleMetadata:n&&n.metadata||{},moduleSource:n.source,moduleAddress:n.address}))}function d(e,t,n,r){return new Promise(function(a,o){a(e.loaderObj.normalize(t,n,r))}).then(function(t){var n;if(e.modules[t])return n=o(t),n.status="linked",n.module=e.modules[t],n;for(var r=0,a=e.loads.length;a>r;r++)if(n=e.loads[r],n.name==t)return n;return n=o(t),e.loads.push(n),s(e,n),n})}function s(e,t){l(e,t,Promise.resolve().then(function(){return e.loaderObj.locate({name:t.name,metadata:t.metadata})}))}function l(e,t,n){u(e,t,n.then(function(n){return"loading"==t.status?(t.address=n,e.loaderObj.fetch({name:t.name,metadata:t.metadata,address:n})):void 0}))}function u(t,r,a){a.then(function(a){return"loading"==r.status?Promise.resolve(t.loaderObj.translate({name:r.name,metadata:r.metadata,address:r.address,source:a})).then(function(e){return r.source=e,t.loaderObj.instantiate({name:r.name,metadata:r.metadata,address:r.address,source:e})}).then(function(a){if(void 0===a)return r.address=r.address||"<Anonymous Module "+ ++P+">",r.isDeclarative=!0,k.call(t.loaderObj,r).then(function(t){var a=e.System,o=a.register;a.register=function(e,t,n){"string"!=typeof e&&(n=t,t=e),r.declare=n,r.depsList=t},n(t,r.address,{}),a.register=o});if("object"!=typeof a)throw TypeError("Invalid instantiate return value");r.depsList=a.deps||[],r.execute=a.execute,r.isDeclarative=!1}).then(function(){r.dependencies=[];for(var e=r.depsList,n=[],a=0,o=e.length;o>a;a++)(function(e,a){n.push(d(t,e,r.name,r.address).then(function(t){if(r.dependencies[a]={key:e,value:t.name},"linked"!=t.status)for(var n=r.linkSets.concat([]),o=0,i=n.length;i>o;o++)m(n[o],t)}))})(e[a],a);return Promise.all(n)}).then(function(){r.status="loaded";for(var e=r.linkSets.concat([]),t=0,n=e.length;n>t;t++)h(e[t],r)}):void 0})["catch"](function(e){r.status="failed",r.exception=e;for(var t=r.linkSets.concat([]),n=0,a=t.length;a>n;n++)v(t[n],r,e)})}function c(e){return function(t,n){var r=e.loader,a=e.moduleName,i=e.step;if(r.modules[a])throw new TypeError('"'+a+'" already exists in the module table');for(var d,c=0,m=r.loads.length;m>c;c++)if(r.loads[c].name==a&&(d=r.loads[c],"translate"!=i||d.source||(d.address=e.moduleAddress,u(r,d,Promise.resolve(e.moduleSource))),d.linkSets.length&&d.linkSets[0].loads[0].name==d.name))return d.linkSets[0].done.then(function(){t(d)});var p=d||o(a);p.metadata=e.moduleMetadata;var h=f(r,p);r.loads.push(p),t(h.done),"locate"==i?s(r,p):"fetch"==i?l(r,p,Promise.resolve(e.moduleAddress)):(p.address=e.moduleAddress,u(r,p,Promise.resolve(e.moduleSource)))}}function f(e,t){var n={loader:e,loads:[],startingLoad:t,loadingCount:0};return n.done=new Promise(function(e,t){n.resolve=e,n.reject=t}),m(n,t),n}function m(e,t){if("failed"!=t.status){for(var n=0,r=e.loads.length;r>n;n++)if(e.loads[n]==t)return;e.loads.push(t),t.linkSets.push(e),"loaded"!=t.status&&e.loadingCount++;for(var a=e.loader,n=0,r=t.dependencies.length;r>n;n++)if(t.dependencies[n]){var o=t.dependencies[n].value;if(!a.modules[o])for(var i=0,d=a.loads.length;d>i;i++)if(a.loads[i].name==o){m(e,a.loads[i]);break}}}}function p(e){var t=!1;try{E(e,function(n,r){v(e,n,r),t=!0})}catch(n){v(e,null,n),t=!0}return t}function h(e,t){if(e.loadingCount--,!(e.loadingCount>0)){var n=e.startingLoad;if(e.loader.loaderObj.execute===!1){for(var r=[].concat(e.loads),a=0,o=r.length;o>a;a++){var t=r[a];t.module=t.isDeclarative?{name:t.name,module:O({}),evaluated:!0}:{module:O({})},t.status="linked",g(e.loader,t)}return e.resolve(n)}var i=p(e);i||e.resolve(n)}}function v(e,n,r){var a=e.loader;e:if(n)if(e.loads[0].name==n.name)r=t(r,"Error loading "+n.name);else{for(var o=0;o<e.loads.length;o++)for(var i=e.loads[o],d=0;d<i.dependencies.length;d++){var s=i.dependencies[d];if(s.value==n.name){r=t(r,"Error loading "+n.name+' as "'+s.key+'" from '+i.name);break e}}r=t(r,"Error loading "+n.name+" from "+e.loads[0].name)}else r=t(r,"Error linking "+e.loads[0].name);for(var l=e.loads.concat([]),o=0,u=l.length;u>o;o++){var n=l[o];a.loaderObj.failed=a.loaderObj.failed||[],-1==b.call(a.loaderObj.failed,n)&&a.loaderObj.failed.push(n);var c=b.call(n.linkSets,e);if(n.linkSets.splice(c,1),0==n.linkSets.length){var f=b.call(e.loader.loads,n);-1!=f&&e.loader.loads.splice(f,1)}}e.reject(r)}function g(e,t){if(e.loaderObj.trace){e.loaderObj.loads||(e.loaderObj.loads={});var n={};t.dependencies.forEach(function(e){n[e.key]=e.value}),e.loaderObj.loads[t.name]={name:t.name,deps:t.dependencies.map(function(e){return e.key}),depMap:n,address:t.address,metadata:t.metadata,source:t.source,kind:t.isDeclarative?"declarative":"dynamic"}}t.name&&(e.modules[t.name]=t.module);var r=b.call(e.loads,t);-1!=r&&e.loads.splice(r,1);for(var a=0,o=t.linkSets.length;o>a;a++)r=b.call(t.linkSets[a].loads,t),-1!=r&&t.linkSets[a].loads.splice(r,1);t.linkSets.splice(0,t.linkSets.length)}function y(e,t,n){try{var a=t.execute()}catch(o){return void n(t,o)}return a&&a instanceof r?a:void n(t,new TypeError("Execution must define a Module instance"))}function x(e,t,n){var r=e._loader.importPromises;return r[t]=n.then(function(e){return r[t]=void 0,e},function(e){throw r[t]=void 0,e})}function E(e,t){var n=e.loader;if(e.loads.length)for(var r=e.loads.concat([]),a=0;a<r.length;a++){var o=r[a],i=y(e,o,t);if(!i)return;o.module={name:o.name,module:i},o.status="linked",g(n,o)}}function S(e,t){return t.module.module}function _(){}function k(){throw new TypeError("ES6 transpilation is only provided in the dev module loader build.")}var P=0;a.prototype={constructor:a,define:function(e,t,n){if(this._loader.importPromises[e])throw new TypeError("Module is already loading.");return x(this,e,new Promise(c({step:"translate",loader:this._loader,moduleName:e,moduleMetadata:n&&n.metadata||{},moduleSource:t,moduleAddress:n&&n.address})))},"delete":function(e){var t=this._loader;return delete t.importPromises[e],delete t.moduleRecords[e],t.modules[e]?delete t.modules[e]:!1},get:function(e){return this._loader.modules[e]?(_(this._loader.modules[e],[],this),this._loader.modules[e].module):void 0},has:function(e){return!!this._loader.modules[e]},"import":function(e,t,n){"object"==typeof t&&(t=t.name);var r=this;return Promise.resolve(r.normalize(e,t)).then(function(e){var t=r._loader;return t.modules[e]?(_(t.modules[e],[],t._loader),t.modules[e].module):t.importPromises[e]||x(r,e,i(t,e,{}).then(function(n){return delete t.importPromises[e],S(t,n)}))})},load:function(e){var t=this._loader;return t.modules[e]?Promise.resolve():t.importPromises[e]||x(this,e,new Promise(c({step:"locate",loader:t,moduleName:e,moduleMetadata:{},moduleSource:void 0,moduleAddress:void 0})).then(function(){delete t.importPromises[e]}))},module:function(e,t){var n=o();n.address=t&&t.address;var r=f(this._loader,n),a=Promise.resolve(e),i=this._loader,d=r.done.then(function(){return S(i,n)});return u(i,n,a),d},newModule:function(e){if("object"!=typeof e)throw new TypeError("Expected object");var t=new r,n=[];if(Object.getOwnPropertyNames&&null!=e)n=Object.getOwnPropertyNames(e);else for(var a in e)n.push(a);for(var o=0;o<n.length;o++)(function(n){w(t,n,{configurable:!1,enumerable:!0,get:function(){return e[n]}})})(n[o]);return t},set:function(e,t){if(!(t instanceof r))throw new TypeError("Loader.set("+e+", module) must be a module");this._loader.modules[e]={module:t}},normalize:function(e,t,n){return e},locate:function(e){return e.name},fetch:function(e){},translate:function(e){return e.source},instantiate:function(e){}};var O=a.prototype.newModule}();var _;d.prototype=a.prototype,o.prototype=new d;var k=/^([^\/]+:\/\/|\/)/;o.prototype.normalize=function(e,t,n){return e=e.match(k)||"."==e[0]?new S(e,t||x).href:new S(i(this.paths,e)||e,x).href},o.prototype.locate=function(e){return e.name},o.prototype.instantiate=function(t){var r=this;return Promise.resolve(r.normalize(r.transpiler)).then(function(a){return t.address===a?{deps:[],execute:function(){var a=e.System,o=e.Reflect.Loader;return n("(function(require,exports,module){"+t.source+"})();",t.address,e),e.System=a,e.Reflect.Loader=o,r.newModule({"default":e[r.transpiler],__useDefault:!0})}}:void 0})},l.prototype=o.prototype,s.prototype=new l,s.prototype.constructor=s,s.prototype.instantiate=function(){};var P,O=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(j){O=!1}!function(){function t(){if(o&&"interactive"===o.script.readyState)return o.load;for(var e=0;e<s.length;e++)if("interactive"==s[e].script.readyState)return o=s[e],o.load}function n(e,t){return new Promise(function(e,n){t.metadata.integrity&&n(new Error("Subresource integrity checking is not supported in web workers.")),i=t;try{importScripts(t.address)}catch(r){i=null,n(r)}i=null,t.metadata.entry||n(new Error(t.address+" did not call System.register or AMD define")),e("")})}if("undefined"!=typeof document)var r=document.getElementsByTagName("head")[0];var a,o,i=null,d=r&&function(){var e=document.createElement("script"),t="undefined"!=typeof opera&&"[object Opera]"===opera.toString();return e.attachEvent&&!(e.attachEvent.toString&&e.attachEvent.toString().indexOf("[native code")<0)&&!t}(),s=[],l=0,c=[];u("pushRegister_",function(e){return function(n){return e.call(this,n)?!1:(i?this.reduceRegister_(i,n):d?this.reduceRegister_(t(),n):l?c.push(n):this.reduceRegister_(null,n),!0)}}),u("fetch",function(t){return function(i){var u=this;return i.metadata.scriptLoad&&(g||v)?v?n(u,i):new Promise(function(t,n){function f(e){if(!h.readyState||"loaded"==h.readyState||"complete"==h.readyState){if(l--,i.metadata.entry||c.length){if(!d){for(var r=0;r<c.length;r++)u.reduceRegister_(i,c[r]);c=[]}}else u.reduceRegister_(i);p(),i.metadata.entry||i.metadata.bundle||n(new Error(i.name+" did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.")),t("")}}function m(e){p(),n(new Error("Unable to load script "+i.address))}function p(){if(e.System=a,h.detachEvent){h.detachEvent("onreadystatechange",f);for(var t=0;t<s.length;t++)s[t].script==h&&(o&&o.script==h&&(o=null),s.splice(t,1))}else h.removeEventListener("load",f,!1),h.removeEventListener("error",m,!1);r.removeChild(h)}var h=document.createElement("script");h.async=!0,i.metadata.integrity&&h.setAttribute("integrity",i.metadata.integrity),d?(h.attachEvent("onreadystatechange",f),s.push({script:h,load:i})):(h.addEventListener("load",f,!1),h.addEventListener("error",m,!1)),l++,a=e.System,h.src=i.address,r.appendChild(h)}):t.call(this,i)}})}();var R=/^\s*(\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;!function(){function t(e,n,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==b.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var a=0,o=e.normalizedDeps.length;o>a;a++){var i=e.normalizedDeps[a],d=n.defined[i];if(d&&!d.evaluated){var s=e.groupIndex+(d.declarative!=e.declarative);if(null===d.groupIndex||d.groupIndex<s){if(null!==d.groupIndex&&(r[d.groupIndex].splice(b.call(r[d.groupIndex],d),1),0==r[d.groupIndex].length))throw new Error("Mixed dependency cycle detected");d.groupIndex=s}t(d,n,r)}}}}function n(e,n){var r=n.defined[e];if(!r.module){r.groupIndex=0;var a=[];t(r,n,a);for(var i=!!r.declarative==a.length%2,s=a.length-1;s>=0;s--){for(var l=a[s],u=0;u<l.length;u++){var c=l[u];i?o(c,n):d(c,n)}i=!i}}}function r(){}function a(e,t){return t[e]||(t[e]={name:e,dependencies:[],exports:new r,importers:[]})}function o(t,n){if(!t.module){var r=n._loader.moduleRecords,i=t.module=a(t.name,r),d=t.module.exports,s=t.declare.call(e,function(e,t){if(i.locked=!0,"object"==typeof e)for(var n in e)d[n]=e[n];else d[e]=t;for(var r=0,a=i.importers.length;a>r;r++){var o=i.importers[r];if(!o.locked){var s=b.call(o.dependencies,i);o.setters[s](d)}}return i.locked=!1,t},t.name);if(i.setters=s.setters,i.execute=s.execute,!i.setters||!i.execute)throw new TypeError("Invalid System.register form for "+t.name);for(var l=0,u=t.normalizedDeps.length;u>l;l++){var c,f=t.normalizedDeps[l],m=n.defined[f],p=r[f];p?c=p.exports:m&&!m.declarative?c=m.esModule:m?(o(m,n),p=m.module,c=p.exports):c=n.get(f),p&&p.importers?(p.importers.push(i),i.dependencies.push(p)):i.dependencies.push(null);for(var h=t.originalIndices[l],v=0,g=h.length;g>v;++v){var y=h[v];i.setters[y]&&i.setters[y](c)}}}}function i(e,t){var n,r=t.defined[e];if(r)r.declarative?l(e,[],t):r.evaluated||d(r,t),n=r.module.exports;else if(n=t.get(e),!n)throw new Error("Unable to load dependency "+e+".");return(!r||r.declarative)&&n&&n.__useDefault?n["default"]:n}function d(t,n){if(!t.module){var r={},a=t.module={exports:r,id:t.name};if(!t.executingRequire)for(var o=0,s=t.normalizedDeps.length;s>o;o++){var l=t.normalizedDeps[o],u=n.defined[l];u&&d(u,n)}t.evaluated=!0;var c=t.execute.call(e,function(e){for(var r=0,a=t.deps.length;a>r;r++)if(t.deps[r]==e)return i(t.normalizedDeps[r],n);throw new Error("Module "+e+" not declared as a dependency.")},r,a);c&&(a.exports=c),r=a.exports,r&&r.__esModule?t.esModule=r:t.esmExports&&r!==e?t.esModule=m(r):t.esModule={"default":r}}}function l(t,n,r){var a=r.defined[t];if(a&&!a.evaluated&&a.declarative){n.push(t);for(var o=0,i=a.normalizedDeps.length;i>o;o++){var d=a.normalizedDeps[o];-1==b.call(n,d)&&(r.defined[d]?l(d,n,r):r.get(d))}a.evaluated||(a.evaluated=!0,a.module.execute.call(e))}}s.prototype.register=function(e,t,n){if("string"!=typeof e&&(n=t,t=e,e=null),"boolean"==typeof n)return this.registerDynamic.apply(this,arguments);var r=h();r.name=e&&(this.decanonicalize||this.normalize).call(this,e),r.declarative=!0,r.deps=t,r.declare=n,this.pushRegister_({amd:!1,entry:r})},s.prototype.registerDynamic=function(e,t,n,r){"string"!=typeof e&&(r=n,n=t,t=e,e=null);var a=h();a.name=e&&(this.decanonicalize||this.normalize).call(this,e),a.deps=t,a.execute=r,a.executingRequire=n,this.pushRegister_({amd:!1,entry:a})},u("reduceRegister_",function(){return function(e,t){if(t){var n=t.entry,r=e&&e.metadata;if(n.name&&(n.name in this.defined||(this.defined[n.name]=n),r&&(r.bundle=!0)),!n.name||e&&n.name==e.name){if(!r)throw new TypeError("Unexpected anonymous System.register call.");if(r.entry)throw"register"==r.format?new Error("Multiple anonymous System.register calls in module "+e.name+". If loading a bundle, ensure all the System.register calls are named."):new Error("Module "+e.name+" interpreted as "+r.format+" module format, but called System.register.");r.format||(r.format="register"),r.entry=n}}}}),c(function(e){return function(){e.call(this),this.defined={},this._loader.moduleRecords={}}}),w(r,"toString",{value:function(){return"Module"}}),u("delete",function(e){return function(t){return delete this._loader.moduleRecords[t],delete this.defined[t],e.call(this,t)}}),u("fetch",function(e){return function(t){return this.defined[t.name]?(t.metadata.format="defined",""):("register"!=t.metadata.format||t.metadata.authorization||t.metadata.scriptLoad===!1||(t.metadata.scriptLoad=!0),t.metadata.deps=t.metadata.deps||[],e.call(this,t))}}),u("translate",function(e){return function(t){return t.metadata.deps=t.metadata.deps||[],Promise.resolve(e.call(this,t)).then(function(e){return("register"==t.metadata.format||!t.metadata.format&&p(t.source))&&(t.metadata.format="register"),e})}}),u("instantiate",function(e){return function(t){"detect"==t.metadata.format&&(t.metadata.format=void 0),e.call(this,t);var r,a=this;if(a.defined[t.name])r=a.defined[t.name],r.declarative||(r.deps=r.deps.concat(t.metadata.deps));else if(t.metadata.entry)r=t.metadata.entry,r.deps=r.deps.concat(t.metadata.deps);else if(!(a.builder&&t.metadata.bundle||"register"!=t.metadata.format&&"esm"!=t.metadata.format&&"es6"!=t.metadata.format)){if("undefined"!=typeof __exec&&__exec.call(a,t),!t.metadata.entry&&!t.metadata.bundle)throw new Error(t.name+" detected as "+t.metadata.format+" but didn't execute.");r=t.metadata.entry,r&&t.metadata.deps&&(r.deps=r.deps.concat(t.metadata.deps))}r||(r=h(),r.deps=t.metadata.deps,r.execute=function(){}),a.defined[t.name]=r;var o=f(r.deps);r.deps=o.names,r.originalIndices=o.indices,r.name=t.name,r.esmExports=t.metadata.esmExports!==!1;for(var i=[],d=0,s=r.deps.length;s>d;d++)i.push(Promise.resolve(a.normalize(r.deps[d],t.name)));return Promise.all(i).then(function(e){return r.normalizedDeps=e,{deps:r.deps,execute:function(){return n(t.name,a),l(t.name,[],a),a.defined[t.name]=void 0,a.newModule(r.declarative?r.module.exports:r.esModule)}}})}})}(),function(){c(function(e){return function(){e.call(this),this.bundles={},this._loader.loadedBundles={}}}),u("locate",function(e){return function(t){var n=this;if(!(t.name in n.defined))for(var r in n.bundles)if(-1!=n.bundles[r].indexOf(t.name))return n["import"](r).then(function(){return e.call(n,t)});return e.call(n,t)}})}(),c(function(e){return function(){e.apply(this,arguments),this.has("@@amd-helpers")&&this.get("@@amd-helpers").createDefine()}}),u("fetch",function(e){return function(t){return t.metadata.scriptLoad=!0,e.call(this,t)}}),_=new s,e.SystemJS=_,_.version="0.19.11 Register Only","object"==typeof exports&&(module.exports=a),e.Reflect=e.Reflect||{},e.Reflect.Loader=e.Reflect.Loader||a,e.Reflect.global=e.Reflect.global||e,e.LoaderPolyfill=a,_||(_=new o,_.constructor=o),"object"==typeof exports&&(module.exports=_),e.System=_}("undefined"!=typeof self?self:global);
//# sourceMappingURL=system-register-only.js.map
