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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

console.log("hola mundo 3");
console.log("suma", _calc2.default.sum(4, 9));
console.log("mult", _calc2.default.mult(2, 3));
console.log("sub", _calc2.default.sub(2, 3));

},{"./calc":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9jYWxjLmpzIiwianMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sT0FBTztBQUNYLE9BQUssYUFBQyxDQUFELEVBQUcsQ0FBSDtXQUFTLElBQUUsQ0FBRjtHQUFUO0FBQ0wsb0JBQUksR0FBRSxHQUFHO0FBQ1AsV0FBTyxJQUFFLENBQUYsQ0FEQTtHQUZFO0FBS1gsc0JBQUssR0FBRSxHQUFHO0FBQ1IsV0FBTyxJQUFFLENBQUYsQ0FEQztHQUxDO0NBQVA7O0FBVU4sT0FBTyxPQUFQLEdBQWlCLElBQWpCOzs7Ozs7Ozs7Ozs7O0FDUkEsUUFBQSxBQUFRLElBQVIsQUFBWTtBQUNaLFFBQUEsQUFBUSxJQUFSLEFBQVksUUFBTyxlQUFBLEFBQUssSUFBTCxBQUFTLEdBQTVCLEFBQW1CLEFBQVc7QUFDOUIsUUFBQSxBQUFRLElBQVIsQUFBWSxRQUFPLGVBQUEsQUFBSyxLQUFMLEFBQVUsR0FBN0IsQUFBbUIsQUFBWTtBQUMvQixRQUFBLEFBQVEsSUFBUixBQUFZLE9BQU0sZUFBQSxBQUFLLElBQUwsQUFBUyxHQUEzQixBQUFrQixBQUFXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IENhbGMgPSB7XG4gIHN1bTogKHgseSkgPT4geCt5LFxuICBzdWIoeCx5KSB7XG4gICAgcmV0dXJuIHgteTtcbiAgfSxcbiAgbXVsdCh4LHkpIHtcbiAgICByZXR1cm4geCp5O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FsYzsiLCJpbXBvcnQgQ2FsYyBmcm9tICcuL2NhbGMnO1xuXG5jb25zb2xlLmxvZyhcImhvbGEgbXVuZG8gM1wiKTtcbmNvbnNvbGUubG9nKFwic3VtYVwiLENhbGMuc3VtKDQsOSkpO1xuY29uc29sZS5sb2coXCJtdWx0XCIsQ2FsYy5tdWx0KDIsMykpO1xuY29uc29sZS5sb2coXCJzdWJcIixDYWxjLnN1YigyLDMpKTsiXX0=
