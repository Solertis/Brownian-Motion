/** @license MIT License (c) copyright 2011-2013 original author or authors */

(function(e){e(["require","./when"],function(e){var t,n;return t=e("./when"),n=Array.prototype.slice,function(r){var i=function(e,t){return i=function(e,t){return t(e)},t.apply(null,e)};return t.all(n.call(arguments,1)).then(function(e){return t.reduce(r,function(e,t){return i(e,t)},e)})}})})(typeof define=="function"&&define.amd?define:function(e){module.exports=e(require)});