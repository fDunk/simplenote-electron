(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1265:function(t,e,r){"use strict";r.r(e),r.d(e,"convertModificationDates",(function(){return m}));var n=r(76),o=r(607),i=r(33);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=y(t);if(e){var o=y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function p(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(r,t);var e=f(r);function r(t,n){var c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),b(l(c=e.call(this)),"importNotes",(function(t){var e=new o.a(c.addNote);if(Object(i.isEmpty)(t))c.emit("status","error","No file to import.");else{var r=t[0];if(Object(i.endsWith)(r.name.toLowerCase(),".json"))if(r.size>5e6)c.emit("status","error","File should be less than 5 MB.");else{var n=new FileReader;n.onload=function(t){var r=t.target.result;if(r){var n=JSON.parse(r),o=n.activeNotes.length+n.trashedNotes.length,i={activeNotes:m(n.activeNotes),trashedNotes:m(n.trashedNotes)};e.importNotes(i,c.options).then((function(){c.emit("status","complete",o)}))}else c.emit("status","error","File was empty.")},n.readAsText(r)}else c.emit("status","error",'File name does not end in ".json".')}})),c.addNote=t,c.options=n,c}return r}(n.EventEmitter);function m(t){return t.map((function(t){var e=t.lastModified,r=a(t,["lastModified"]),n=r.modificationDate||e;n&&isNaN(n)&&(n=new Date(n).getTime()/1e3);var o=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},r);return n&&(o.modificationDate=n),o}))}e.default=d},607:function(t,e,r){"use strict";var n=r(76),o=r(33);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=l(t);if(e){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}function f(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=["content","creationDate","deleted","markdown","modificationDate","pinned","tags"],d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(r,t);var e=s(r);function r(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),y(p(n=e.call(this)),"importNote",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.isTrashed,i=void 0!==r&&r,c=e.isMarkdown,a=void 0!==c&&c,u=Object(o.pick)(t,b);u.publishURL="",u.shareURL="",u.deleted=i,u.tags=Object(o.get)(u,"tags",[]),u.systemTags=Object(o.get)(u,"systemTags",[]),u.pinned&&(u.systemTags.push("pinned"),delete u.pinned),(u.markdown||a)&&(u.systemTags.push("markdown"),delete u.markdown),u.creationDate&&isNaN(u.creationDate)&&(u.creationDate=new Date(u.creationDate).getTime()/1e3),u.creationDate=u.creationDate||u.modificationDate||Date.now(),u.modificationDate=u.modificationDate||u.creationDate||Date.now(),Object.prototype.hasOwnProperty.call(u,"content")||(u.content=""),u.tags&&u.tags.map((function(t){Object(o.isEmpty)(t)})),n.addNote(u)})),y(p(n),"importNotes",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;if(Object(o.isEmpty)(t))n.emit("status","error","No notes to import.");else{if(t.activeNotes||t.trashedNotes){var r=Object(o.get)(t,"activeNotes",[]).map((function(t){return n.importNote(t,e)})),i=Object(o.get)(t,"trashedNotes",[]).map((function(t){return n.importNote(t,a(a({},e),{},{isTrashed:!0}))}));return Promise.all(r.concat(i))}n.emit("status","error","Invalid import format: No active or trashed notes found.")}})),n.addNote=t,n}return r}(n.EventEmitter);e.a=d}}]);