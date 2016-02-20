(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Calc = {
  sum: function sum(x, y) {
    return x + y;
  },
  sub: function sub(x, y) {
    return x - y;
  },
  mult: function mult(x, y) {
    return x * y;
  }
};

module.exports = Calc;

},{}],2:[function(require,module,exports){
"use strict";

var _calc = require("./calc");

var _calc2 = _interopRequireDefault(_calc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("hola mundo 3");
console.log("suma", _calc2.default.sum(2, 3));
console.log("mult", _calc2.default.mult(2, 3));
console.log("sub", _calc2.default.sub(2, 3));

},{"./calc":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9jYWxjLmpzIiwianMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sT0FBTztBQUNYLE9BQUssYUFBQyxDQUFELEVBQUcsQ0FBSDtXQUFTLElBQUUsQ0FBRjtHQUFUO0FBQ0wsb0JBQUksR0FBRSxHQUFHO0FBQ1AsV0FBTyxJQUFFLENBQUYsQ0FEQTtHQUZFO0FBS1gsc0JBQUssR0FBRSxHQUFHO0FBQ1IsV0FBTyxJQUFFLENBQUYsQ0FEQztHQUxDO0NBQVA7O0FBVU4sT0FBTyxPQUFQLEdBQWlCLElBQWpCOzs7Ozs7Ozs7OztBQ1JBLFFBQVEsR0FBUixDQUFZLGNBQVo7QUFDQSxRQUFRLEdBQVIsQ0FBWSxNQUFaLEVBQW1CLGVBQUssR0FBTCxDQUFTLENBQVQsRUFBVyxDQUFYLENBQW5CO0FBQ0EsUUFBUSxHQUFSLENBQVksTUFBWixFQUFtQixlQUFLLElBQUwsQ0FBVSxDQUFWLEVBQVksQ0FBWixDQUFuQjtBQUNBLFFBQVEsR0FBUixDQUFZLEtBQVosRUFBa0IsZUFBSyxHQUFMLENBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBbEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgQ2FsYyA9IHtcbiAgc3VtOiAoeCx5KSA9PiB4K3ksXG4gIHN1Yih4LHkpIHtcbiAgICByZXR1cm4geC15O1xuICB9LFxuICBtdWx0KHgseSkge1xuICAgIHJldHVybiB4Knk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYWxjOyIsImltcG9ydCBDYWxjIGZyb20gJy4vY2FsYyc7XG5cbmNvbnNvbGUubG9nKFwiaG9sYSBtdW5kbyAzXCIpO1xuY29uc29sZS5sb2coXCJzdW1hXCIsQ2FsYy5zdW0oMiwzKSk7XG5jb25zb2xlLmxvZyhcIm11bHRcIixDYWxjLm11bHQoMiwzKSk7XG5jb25zb2xlLmxvZyhcInN1YlwiLENhbGMuc3ViKDIsMykpOyJdfQ==
