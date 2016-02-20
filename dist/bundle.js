(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Calc = {
  sum: function(x,y) {
    return x+y;
  },
  sub: function(x,y) {
    return x-y;
  },
  mult: function(x,y) {
    return x*y;
  }
}

module.exports = Calc;
},{}],2:[function(require,module,exports){
var Calc = require('./calc');
console.log("hola mundo 3");

console.log("suma",Calc.sum(2,3));
console.log("mult",Calc.mult(2,3));
console.log("sub",Calc.sub(2,3));
},{"./calc":1}]},{},[2]);
