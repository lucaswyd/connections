!function(){try{var r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[n]="e79cc844-a143-4703-9a28-e78430f58b6f",r._sentryDebugIdIdentifier="sentry-dbid-e79cc844-a143-4703-9a28-e78430f58b6f")}catch(r){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"6afc97fed267d1e7c4fa7d705ae92c2a20610740"},(self.webpackChunk_xwords_phoenix=self.webpackChunk_xwords_phoenix||[]).push([[7670],{7670:function(r,n,e){e.d(n,{MT:function(){return c},UY:function(){return d},md:function(){return l},qC:function(){return a}});var t=e(9677);function o(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var f="function"==typeof Symbol&&Symbol.observable||"@@observable",i=function(){return Math.random().toString(36).substring(7).split("").join(".")},u={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function c(r,n,e){var t;if("function"==typeof n&&"function"==typeof e||"function"==typeof e&&"function"==typeof arguments[3])throw new Error(o(0));if("function"==typeof n&&void 0===e&&(e=n,n=void 0),void 0!==e){if("function"!=typeof e)throw new Error(o(1));return e(c)(r,n)}if("function"!=typeof r)throw new Error(o(2));var i=r,d=n,a=[],l=a,p=!1;function s(){l===a&&(l=a.slice())}function y(){if(p)throw new Error(o(3));return d}function w(r){if("function"!=typeof r)throw new Error(o(4));if(p)throw new Error(o(5));var n=!0;return s(),l.push(r),function(){if(n){if(p)throw new Error(o(6));n=!1,s();var e=l.indexOf(r);l.splice(e,1),a=null}}}function h(r){if(!function(r){if("object"!=typeof r||null===r)return!1;for(var n=r;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(r)===n}(r))throw new Error(o(7));if(void 0===r.type)throw new Error(o(8));if(p)throw new Error(o(9));try{p=!0,d=i(d,r)}finally{p=!1}for(var n=a=l,e=0;e<n.length;e++)(0,n[e])();return r}return h({type:u.INIT}),(t={dispatch:h,subscribe:w,getState:y,replaceReducer:function(r){if("function"!=typeof r)throw new Error(o(10));i=r,h({type:u.REPLACE})}})[f]=function(){var r,n=w;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(o(11));function e(){r.next&&r.next(y())}return e(),{unsubscribe:n(e)}}})[f]=function(){return this},r},t}function d(r){for(var n=Object.keys(r),e={},t=0;t<n.length;t++){var f=n[t];"function"==typeof r[f]&&(e[f]=r[f])}var i,c=Object.keys(e);try{!function(r){Object.keys(r).forEach((function(n){var e=r[n];if(void 0===e(void 0,{type:u.INIT}))throw new Error(o(12));if(void 0===e(void 0,{type:u.PROBE_UNKNOWN_ACTION()}))throw new Error(o(13))}))}(e)}catch(r){i=r}return function(r,n){if(void 0===r&&(r={}),i)throw i;for(var t=!1,f={},u=0;u<c.length;u++){var d=c[u],a=e[d],l=r[d],p=a(l,n);if(void 0===p)throw n&&n.type,new Error(o(14));f[d]=p,t=t||p!==l}return(t=t||c.length!==Object.keys(r).length)?f:r}}function a(){for(var r=arguments.length,n=new Array(r),e=0;e<r;e++)n[e]=arguments[e];return 0===n.length?function(r){return r}:1===n.length?n[0]:n.reduce((function(r,n){return function(){return r(n.apply(void 0,arguments))}}))}function l(){for(var r=arguments.length,n=new Array(r),e=0;e<r;e++)n[e]=arguments[e];return function(r){return function(){var e=r.apply(void 0,arguments),f=function(){throw new Error(o(15))},i={getState:e.getState,dispatch:function(){return f.apply(void 0,arguments)}},u=n.map((function(r){return r(i)}));return f=a.apply(void 0,u)(e.dispatch),(0,t.Z)((0,t.Z)({},e),{},{dispatch:f})}}}}}]);
//# sourceMappingURL=7670.1234dd5a9bf12c9ff8f7.js.map