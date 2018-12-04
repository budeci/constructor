/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/pages/home/home.entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/pages/home/home.entry.js":
/*!*****************************************!*\
  !*** ./src/js/pages/home/home.entry.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/constructor */ "./src/js/pages/home/modules/constructor.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var HomeView =
/*#__PURE__*/
function () {
  function HomeView() {
    _classCallCheck(this, HomeView);

    this.init();
  }

  _createClass(HomeView, [{
    key: "init",
    value: function init() {
      new _modules_constructor__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
  }]);

  return HomeView;
}();

new HomeView();

/***/ }),

/***/ "./src/js/pages/home/modules/constructor.js":
/*!**************************************************!*\
  !*** ./src/js/pages/home/modules/constructor.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Constructor; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Constructor =
/*#__PURE__*/
function () {
  function Constructor() {
    _classCallCheck(this, Constructor);

    this.isMobile = this.CheckIsMobile(); //initiate as false

    this.init();
  }

  _createClass(Constructor, [{
    key: "init",
    value: function init() {
      this.events();
    }
  }, {
    key: "CheckIsMobile",
    value: function CheckIsMobile() {
      try {
        document.createEvent("TouchEvent");
        return true;
      } catch (e) {
        return false;
      }
    }
  }, {
    key: "events",
    value: function events() {
      var self = this;
      var isMobile = self.isMobile;
      var IntervalloHover;
      jQuery('.tessera').mouseenter(function () {
        if (!isMobile) {
          //if (!DragInCorso) {
          var elem = this;
          IntervalloHover = setTimeout(function () {
            self.VisualizzaHover(elem);
          }, 100); //}
        }
      });
      jQuery('#tessera_detail').mouseleave(function () {
        if (!isMobile) {
          if (!DragInCorso) {
            jQuery('#tessera_detail').hide(0);
            clearTimeout(IntervalloHover);
          }
        }
      });
    }
  }, {
    key: "VisualizzaHover",
    value: function VisualizzaHover(elem) {
      var self = this;
      var posiz = jQuery(elem).position();
      var screen_w = jQuery('#container_tessere').width();
      var detail_w = jQuery('#tessera_detail').width();

      if (screen_w < posiz.left + detail_w) {
        posiz.left = screen_w - detail_w - 10;
      }

      jQuery('#tessera_detail').css({
        left: posiz.left - 24,
        top: posiz.top
      });
      var bgimg = jQuery(elem).css('background-image');
      var sku = jQuery(elem).attr('sku');
      var cod_int = jQuery(elem).attr('cod_int');
      var imgsku = jQuery(elem).attr('imgsku');
      var nome = jQuery(elem).attr('nome');
      var materiale = jQuery(elem).attr('materiale');
      var price = jQuery(elem).attr('price');
      var fprice = jQuery(elem).attr('fprice');
      var double = jQuery(elem).attr('double');
      var incisible = jQuery(elem).attr('incisible');
      var righe_inc = jQuery(elem).attr('righe_inc');
      var max_char = jQuery(elem).attr('max_char');
      jQuery('#imgdetail').css('margin-top', '0px');
      jQuery('#imgdetail').css('background-image', bgimg);
      jQuery('#imgdetail').attr('sku', sku);
      jQuery('#imgdetail').attr('cod_int', cod_int);
      jQuery('#imgdetail').attr('imgsku', imgsku);
      jQuery('#imgdetail').attr('fprice', fprice);
      jQuery('#imgdetail').attr('price', price);
      jQuery('#imgdetail').attr('nome', nome);
      jQuery('#imgdetail').attr('materiale', materiale);
      jQuery('#imgdetail').attr('double', double);
      jQuery('#imgdetail').attr('incisible', incisible);
      jQuery('#imgdetail').attr('righe_inc', righe_inc);
      jQuery('#imgdetail').attr('max_char', max_char);
      var strhtml = '<span class="titolodetail">' + nome + '</span><br>'; //strhtml += materiale + '<br>';

      strhtml += self.GetPriceHtml(price, fprice, 'pricedetail');
      jQuery('#textdetail').html(strhtml);
      jQuery('#tessera_detail').show(0); //jQuery('#div_hover').fadeIn(200);
    }
  }, {
    key: "GetPriceHtml",
    value: function GetPriceHtml(price, final_price, strclass) {
      var self = this;
      var vprice = parseFloat(price);
      var vfinal_price = parseFloat(final_price);

      if (!PulsanteAcquista) {
        strclass += ' noprice';
      }

      var htmlprice = '';
      var htmlfinal_price = '';

      if (vprice != vfinal_price) {
        htmlfinal_price = '<p class="old-price"><span class="price">' + self.DisplayCurrency(vprice) + ' ' + SimboloValuta + ' </span></p>';
        htmlprice = '<div class="' + strclass + '">' + htmlfinal_price + self.DisplayCurrency(vfinal_price) + ' ' + SimboloValuta + '</div>';
      } else {
        htmlprice = '<div class="' + strclass + '">' + htmlfinal_price + self.DisplayCurrency(vprice) + ' ' + SimboloValuta + '</div>';
      }

      return htmlprice;
    }
  }, {
    key: "DisplayCurrency",
    value: function DisplayCurrency(valore) {
      return parseFloat(Math.round(valore * 100) / 100).toFixed(2);
    }
  }, {
    key: "esc_quot",
    value: function esc_quot(text) {
      return text.replaceAll('"', '&quot;');
    }
  }]);

  return Constructor;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2VzL2hvbWUvaG9tZS5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvaG9tZS9tb2R1bGVzL2NvbnN0cnVjdG9yLmpzIl0sIm5hbWVzIjpbIkhvbWVWaWV3IiwiaW5pdCIsIkNvbnN0cnVjdG9yIiwiaXNNb2JpbGUiLCJDaGVja0lzTW9iaWxlIiwiZXZlbnRzIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImUiLCJzZWxmIiwiSW50ZXJ2YWxsb0hvdmVyIiwialF1ZXJ5IiwibW91c2VlbnRlciIsImVsZW0iLCJzZXRUaW1lb3V0IiwiVmlzdWFsaXp6YUhvdmVyIiwibW91c2VsZWF2ZSIsIkRyYWdJbkNvcnNvIiwiaGlkZSIsImNsZWFyVGltZW91dCIsInBvc2l6IiwicG9zaXRpb24iLCJzY3JlZW5fdyIsIndpZHRoIiwiZGV0YWlsX3ciLCJsZWZ0IiwiY3NzIiwidG9wIiwiYmdpbWciLCJza3UiLCJhdHRyIiwiY29kX2ludCIsImltZ3NrdSIsIm5vbWUiLCJtYXRlcmlhbGUiLCJwcmljZSIsImZwcmljZSIsImRvdWJsZSIsImluY2lzaWJsZSIsInJpZ2hlX2luYyIsIm1heF9jaGFyIiwic3RyaHRtbCIsIkdldFByaWNlSHRtbCIsImh0bWwiLCJzaG93IiwiZmluYWxfcHJpY2UiLCJzdHJjbGFzcyIsInZwcmljZSIsInBhcnNlRmxvYXQiLCJ2ZmluYWxfcHJpY2UiLCJQdWxzYW50ZUFjcXVpc3RhIiwiaHRtbHByaWNlIiwiaHRtbGZpbmFsX3ByaWNlIiwiRGlzcGxheUN1cnJlbmN5IiwiU2ltYm9sb1ZhbHV0YSIsInZhbG9yZSIsIk1hdGgiLCJyb3VuZCIsInRvRml4ZWQiLCJ0ZXh0IiwicmVwbGFjZUFsbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUEwRyxRQUF0SDtBQUNIOztBQUNELGFBQU9ILFNBQVA7QUFDSDs7O29DQUNlSSxNLEVBQVE7QUFDcEIsYUFBT1AsVUFBVSxDQUFDUSxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsTUFBTSxHQUFHLEdBQXBCLElBQTJCLEdBQTVCLENBQVYsQ0FBMkNHLE9BQTNDLENBQW1ELENBQW5ELENBQVA7QUFDSDs7OzZCQUVRQyxJLEVBQU07QUFDWCxhQUFPQSxJQUFJLENBQUNDLFVBQUwsQ0FBZ0IsR0FBaEIsRUFBcUIsUUFBckIsQ0FBUDtBQUNIIiwiZmlsZSI6ImpzL3BhZ2VzL2hvbWUvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9wYWdlcy9ob21lL2hvbWUuZW50cnkuanNcIik7XG4iLCJpbXBvcnQgQ29uc3RydWN0b3IgZnJvbSAnLi9tb2R1bGVzL2NvbnN0cnVjdG9yJztcclxuXHJcbmNsYXNzIEhvbWVWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBuZXcgQ29uc3RydWN0b3IoKTtcclxuICAgIH1cclxufVxyXG5uZXcgSG9tZVZpZXcoKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdHJ1Y3RvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlzTW9iaWxlID0gdGhpcy5DaGVja0lzTW9iaWxlKCk7IC8vaW5pdGlhdGUgYXMgZmFsc2VcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuICAgIENoZWNrSXNNb2JpbGUoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJUb3VjaEV2ZW50XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gc2VsZi5pc01vYmlsZTtcclxuICAgICAgICBsZXQgSW50ZXJ2YWxsb0hvdmVyO1xyXG4gICAgICAgIGpRdWVyeSgnLnRlc3NlcmEnKS5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIWlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAvL2lmICghRHJhZ0luQ29yc28pIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtID0gdGhpcztcclxuICAgICAgICAgICAgICAgIEludGVydmFsbG9Ib3ZlciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5WaXN1YWxpenphSG92ZXIoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBqUXVlcnkoJyN0ZXNzZXJhX2RldGFpbCcpLm1vdXNlbGVhdmUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghRHJhZ0luQ29yc28pIHtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyN0ZXNzZXJhX2RldGFpbCcpLmhpZGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KEludGVydmFsbG9Ib3Zlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFZpc3VhbGl6emFIb3ZlcihlbGVtKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHBvc2l6ID0galF1ZXJ5KGVsZW0pLnBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIHNjcmVlbl93ID0galF1ZXJ5KCcjY29udGFpbmVyX3Rlc3NlcmUnKS53aWR0aCgpO1xyXG4gICAgICAgIHZhciBkZXRhaWxfdyA9IGpRdWVyeSgnI3Rlc3NlcmFfZGV0YWlsJykud2lkdGgoKTtcclxuICAgICAgICBpZiAoc2NyZWVuX3cgPCAocG9zaXoubGVmdCArIGRldGFpbF93KSkge1xyXG4gICAgICAgICAgICBwb3Npei5sZWZ0ID0gc2NyZWVuX3cgLSBkZXRhaWxfdyAtIDEwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgalF1ZXJ5KCcjdGVzc2VyYV9kZXRhaWwnKS5jc3Moe1xyXG4gICAgICAgICAgICBsZWZ0OiAocG9zaXoubGVmdCAtIDI0KSxcclxuICAgICAgICAgICAgdG9wOiAocG9zaXoudG9wKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBiZ2ltZyA9IGpRdWVyeShlbGVtKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnKTtcclxuICAgICAgICB2YXIgc2t1ID0galF1ZXJ5KGVsZW0pLmF0dHIoJ3NrdScpO1xyXG4gICAgICAgIHZhciBjb2RfaW50ID0galF1ZXJ5KGVsZW0pLmF0dHIoJ2NvZF9pbnQnKTtcclxuICAgICAgICB2YXIgaW1nc2t1ID0galF1ZXJ5KGVsZW0pLmF0dHIoJ2ltZ3NrdScpO1xyXG4gICAgICAgIHZhciBub21lID0galF1ZXJ5KGVsZW0pLmF0dHIoJ25vbWUnKTtcclxuICAgICAgICB2YXIgbWF0ZXJpYWxlID0galF1ZXJ5KGVsZW0pLmF0dHIoJ21hdGVyaWFsZScpO1xyXG4gICAgICAgIHZhciBwcmljZSA9IGpRdWVyeShlbGVtKS5hdHRyKCdwcmljZScpO1xyXG4gICAgICAgIHZhciBmcHJpY2UgPSBqUXVlcnkoZWxlbSkuYXR0cignZnByaWNlJyk7XHJcbiAgICAgICAgdmFyIGRvdWJsZSA9IGpRdWVyeShlbGVtKS5hdHRyKCdkb3VibGUnKTtcclxuICAgICAgICB2YXIgaW5jaXNpYmxlID0galF1ZXJ5KGVsZW0pLmF0dHIoJ2luY2lzaWJsZScpO1xyXG4gICAgICAgIHZhciByaWdoZV9pbmMgPSBqUXVlcnkoZWxlbSkuYXR0cigncmlnaGVfaW5jJyk7XHJcbiAgICAgICAgdmFyIG1heF9jaGFyID0galF1ZXJ5KGVsZW0pLmF0dHIoJ21heF9jaGFyJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcjaW1nZGV0YWlsJykuY3NzKCdtYXJnaW4tdG9wJywgJzBweCcpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsIGJnaW1nKTtcclxuICAgICAgICBqUXVlcnkoJyNpbWdkZXRhaWwnKS5hdHRyKCdza3UnLCBza3UpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmF0dHIoJ2NvZF9pbnQnLCBjb2RfaW50KTtcclxuICAgICAgICBqUXVlcnkoJyNpbWdkZXRhaWwnKS5hdHRyKCdpbWdza3UnLCBpbWdza3UpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmF0dHIoJ2ZwcmljZScsIGZwcmljZSk7XHJcbiAgICAgICAgalF1ZXJ5KCcjaW1nZGV0YWlsJykuYXR0cigncHJpY2UnLCBwcmljZSk7XHJcbiAgICAgICAgalF1ZXJ5KCcjaW1nZGV0YWlsJykuYXR0cignbm9tZScsIG5vbWUpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmF0dHIoJ21hdGVyaWFsZScsIG1hdGVyaWFsZSk7XHJcbiAgICAgICAgalF1ZXJ5KCcjaW1nZGV0YWlsJykuYXR0cignZG91YmxlJywgZG91YmxlKTtcclxuICAgICAgICBqUXVlcnkoJyNpbWdkZXRhaWwnKS5hdHRyKCdpbmNpc2libGUnLCBpbmNpc2libGUpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmF0dHIoJ3JpZ2hlX2luYycsIHJpZ2hlX2luYyk7XHJcbiAgICAgICAgalF1ZXJ5KCcjaW1nZGV0YWlsJykuYXR0cignbWF4X2NoYXInLCBtYXhfY2hhcik7XHJcblxyXG5cclxuICAgICAgICB2YXIgc3RyaHRtbCA9ICc8c3BhbiBjbGFzcz1cInRpdG9sb2RldGFpbFwiPicgKyBub21lICsgJzwvc3Bhbj48YnI+JztcclxuICAgICAgICAvL3N0cmh0bWwgKz0gbWF0ZXJpYWxlICsgJzxicj4nO1xyXG4gICAgICAgIHN0cmh0bWwgKz0gc2VsZi5HZXRQcmljZUh0bWwocHJpY2UsIGZwcmljZSwgJ3ByaWNlZGV0YWlsJyk7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnI3RleHRkZXRhaWwnKS5odG1sKHN0cmh0bWwpO1xyXG4gICAgICAgIGpRdWVyeSgnI3Rlc3NlcmFfZGV0YWlsJykuc2hvdygwKTtcclxuICAgICAgICAvL2pRdWVyeSgnI2Rpdl9ob3ZlcicpLmZhZGVJbigyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIEdldFByaWNlSHRtbChwcmljZSwgZmluYWxfcHJpY2UsIHN0cmNsYXNzKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHZwcmljZSA9IHBhcnNlRmxvYXQocHJpY2UpO1xyXG4gICAgICAgIHZhciB2ZmluYWxfcHJpY2UgPSBwYXJzZUZsb2F0KGZpbmFsX3ByaWNlKTtcclxuXHJcbiAgICAgICAgaWYgKCFQdWxzYW50ZUFjcXVpc3RhKSB7XHJcbiAgICAgICAgICAgIHN0cmNsYXNzICs9ICcgbm9wcmljZSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaHRtbHByaWNlID0gJyc7XHJcbiAgICAgICAgdmFyIGh0bWxmaW5hbF9wcmljZSA9ICcnO1xyXG4gICAgICAgIGlmICh2cHJpY2UgIT0gdmZpbmFsX3ByaWNlKSB7XHJcbiAgICAgICAgICAgIGh0bWxmaW5hbF9wcmljZSA9ICc8cCBjbGFzcz1cIm9sZC1wcmljZVwiPjxzcGFuIGNsYXNzPVwicHJpY2VcIj4nICsgc2VsZi5EaXNwbGF5Q3VycmVuY3kodnByaWNlKSArICcgJyArIFNpbWJvbG9WYWx1dGEgKyAnIDwvc3Bhbj48L3A+JztcclxuICAgICAgICAgICAgaHRtbHByaWNlID0gJzxkaXYgY2xhc3M9XCInICsgc3RyY2xhc3MgKyAnXCI+JyArIGh0bWxmaW5hbF9wcmljZSArIHNlbGYuRGlzcGxheUN1cnJlbmN5KHZmaW5hbF9wcmljZSkgKyAnICcgKyBTaW1ib2xvVmFsdXRhICsgJzwvZGl2Pic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaHRtbHByaWNlID0gJzxkaXYgY2xhc3M9XCInICsgc3RyY2xhc3MgKyAnXCI+JyArIGh0bWxmaW5hbF9wcmljZSArIHNlbGYuRGlzcGxheUN1cnJlbmN5KHZwcmljZSkgKyAnICcgKyBTaW1ib2xvVmFsdXRhICsgJzwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBodG1scHJpY2U7XHJcbiAgICB9XHJcbiAgICBEaXNwbGF5Q3VycmVuY3kodmFsb3JlKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoTWF0aC5yb3VuZCh2YWxvcmUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xyXG4gICAgfVxyXG5cclxuICAgIGVzY19xdW90KHRleHQpIHtcclxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlQWxsKCdcIicsICcmcXVvdDsnKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=