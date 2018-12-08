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
    // JavaScript Document

    var IntervalloHover;
    var BraccialeZoom;
    var FiltroAperto = false;
    var PrimoAccesso = true;
    var LaccioBracciale = '';
    var detail_visible = '';
    var RicercaAttiva = false;
    var SortStart = true;
    var larghezza = jQuery(window).width();
    var FiltriTC = null;
    var DelayTouch = 0;
    var paginaurl = '';
    var ControllaMinimoNLink = false;
    var OffsetToolTip = -20;
    var ArrIncisioni = Array();
    var ScrollBar = false; // Controllo caricamenti

    var mustBeBlocked = false;
    this.init();
  }

  _createClass(Constructor, [{
    key: "init",
    value: function init() {
      this.events(); // this.SettaPosizioniTessere("big");

      this.RefreshSlideFiltri();
      this.initDefault();
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
      var tes_top = -13;
      var tes_left = -30;
      var tes_top1 = -14;
      var tes_left1 = -35;
      var tes_top_o = -16;
      var tes_left_o = -35;
      jQuery('.tessera').mouseenter(function () {
        if (!isMobile) {
          //if (!DragInCorso) {
          var elem = this;
          self.IntervalloHover = setTimeout(function () {
            self.VisualizzaHover(elem);
          }, 100); //}
        }
      });
      jQuery('#tessera_detail').mouseleave(function () {
        if (!isMobile) {
          if (!DragInCorso) {
            jQuery('#tessera_detail').hide(0);
            clearTimeout(self.IntervalloHover);
          }
        }
      });
      jQuery('#conf_zoom').on('click', function () {
        var size = {
          width: window.innerWidth || document.body.clientWidth,
          height: window.innerHeight || document.body.clientHeight
        };
        var ulwidth = jQuery('#bracciale_zoom ul').width();
        var xpos = 0 - (ulwidth - size.width) / 2;
        self.BraccialeZoom.setXPos(xpos); //	BraccialeZoom.updateCarouselSize();
        //	jQuery('#bracciale_zoom ul').css({left: '-300px'});
        // self.CalcolaRiepilogo();

        jQuery('#container_zoom').fadeIn(200);
        jQuery('#container_bracciale').fadeOut(200);
      });
      jQuery('.tessera_base').on('click', function () {
        var element = jQuery(this).find('.stella_incisione');

        if (jQuery(element).is(':visible')) {
          jQuery(this).find('.stella_incisione').fadeOut(200);
          self.MostraToolipIncisione(element);
        } else if (jQuery('#tooltip_incisione').is(':visible')) {
          jQuery('#tooltip_incisione').fadeOut(200);
          jQuery(this).find('.stella_incisione').fadeIn(200);
        }
      });
      jQuery('.tessera_base').mouseenter(function () {
        if (!isMobile) {
          var link_width = '60px';
          var tessera_width = '132px';
          var width_next = '54px';
          var width_tessera_next = '119px';
          var width_prev = '54px';
          var width_tessera_prev = '119px';
          var link_mol = 1;
          var next_mol = 1;
          var prev_mol = 1;
          var meno_left = 0;
          var meno_top = 0;

          if (jQuery(this).attr('double') == '1') {
            link_width = '120px';
            tessera_width = '264px';
            link_mol = 2;
            meno_left = -3;
            meno_top = -1;
          }

          if (jQuery(this).prev('.tessera_base').attr('double') == '1') {
            width_prev = '108px';
            width_tessera_prev = '238px';
            prev_mol = 2;
          }

          if (jQuery(this).next().attr('double') == '1') {
            width_next = '108px';
            width_tessera_next = '238px';
            next_mol = 2;
          }

          jQuery(this).stop().animate({
            height: '116px',
            width: link_width,
            marginTop: '-5px'
          }, "fast");
          jQuery(this).prev('.tessera_base').stop().animate({
            height: '104px',
            width: width_prev,
            marginTop: '-2px'
          }, "fast");
          jQuery(this).next().stop().animate({
            height: '104px',
            width: width_next,
            marginTop: '-2px'
          }, "fast");
          jQuery(this).find('.tesserabracciale').stop().animate({
            height: '160px',
            width: tessera_width,
            top: tes_top_o + meno_top,
            left: tes_left_o * link_mol + meno_left
          }, 'fast');
          jQuery(this).prev().find('.tesserabracciale').stop().animate({
            height: '145px',
            width: width_tessera_prev,
            top: tes_top1,
            left: tes_left1 * prev_mol
          }, 'fast');
          jQuery(this).next().find('.tesserabracciale').stop().animate({
            height: '145px',
            width: width_tessera_next,
            top: tes_top1,
            left: tes_left1 * next_mol
          }, 'fast');
          var j = jQuery(this).attr('nrbase');
          jQuery('#dettaglio_over').hide();

          if (ObjBracciale[j].cod != '') {
            self.MostraDettaglioOver(j);
          } else {
            jQuery('#dettaglio_over').hide();
          }
        }
      });
      jQuery('.tessera_base').mouseleave(function () {
        if (!isMobile) {
          var link_width = '50px';
          var tessera_width = '110px';
          var width_next = '50px';
          var width_tessera_next = '110px';
          var width_prev = '50px';
          var width_tessera_prev = '110px';
          var link_mol = 1;
          var next_mol = 1;
          var prev_mol = 1;

          if (jQuery(this).attr('double') == '1') {
            link_width = '100px';
            tessera_width = '220px';
            link_mol = 2;
          }

          if (jQuery(this).prev('.tessera_base').attr('double') == '1') {
            width_prev = '100px';
            width_tessera_prev = '220px';
            prev_mol = 2;
          }

          if (jQuery(this).next().attr('double') == '1') {
            width_next = '100px';
            width_tessera_next = '220px';
            next_mol = 2;
          }

          jQuery(this).stop().animate({
            height: '50px',
            width: link_width,
            marginTop: '0px'
          }, "fast");
          jQuery(this).prev('.tessera_base').stop().animate({
            height: '50px',
            width: width_prev,
            marginTop: '0px'
          }, "fast");
          jQuery(this).next().stop().animate({
            height: '50px',
            width: width_next,
            marginTop: '0px'
          }, "fast");
          jQuery(this).find('.tesserabracciale').stop().animate({
            height: '42px',
            width: tessera_width,
            top: tes_top,
            left: tes_left * link_mol
          }, 'fast');
          jQuery(this).next().find('.tesserabracciale').stop().animate({
            height: '42px',
            width: width_tessera_next,
            top: tes_top,
            left: tes_left * next_mol
          }, 'fast');
          jQuery(this).prev().find('.tesserabracciale').stop().animate({
            height: '42px',
            width: width_tessera_prev,
            top: tes_top,
            left: tes_left * prev_mol
          }, 'fast');
          jQuery('#dettaglio_over').hide();
        }
      });
      jQuery(".drop").droppable({
        accept: '.drag,.tessera',
        tolerance: 'intersect',
        activeClass: 'drag-active',
        over: function over(event, ui) {
          var link_width = '60px';
          var tessera_width = '132px';
          var link_mol = 1;

          if (jQuery(this).parent().attr('double') == '1') {
            link_width = '120px';
            tessera_width = '264px';
            link_mol = 2;
          }

          jQuery(this).parent().stop().animate({
            height: '116px',
            width: link_width,
            marginTop: '-5px'
          }, "fast");
          jQuery(this).parent().find('.tesserabracciale').stop().animate({
            height: '160px',
            width: tessera_width,
            top: tes_top_o,
            left: tes_left_o * link_mol
          }, 'fast');
        },
        out: function out(event, ui) {
          var link_width = '50px';
          var tessera_width = '110px';
          var link_mol = 1;

          if (jQuery(this).parent().attr('double') == '1') {
            link_width = '100px';
            tessera_width = '220px';
            link_mol = 2;
          }

          jQuery(this).parent().stop().animate({
            height: '50px',
            width: link_width,
            marginTop: '0px'
          }, "fast");
          jQuery(this).parent().find('.tesserabracciale').stop().animate({
            height: '42px',
            width: tessera_width,
            top: tes_top,
            left: tes_left * link_mol
          }, 'fast');
        },
        drop: function drop(event, ui) {
          var sname = jQuery(ui.draggable).attr('nome');
          var imgsku = jQuery(ui.draggable).attr('imgsku');
          var sku = jQuery(ui.draggable).attr('sku');
          var scod_int = jQuery(ui.draggable).attr('cod_int');
          var fprice = jQuery(ui.draggable).attr('fprice');
          var double = jQuery(ui.draggable).attr('double');
          var incisible = jQuery(ui.draggable).attr('incisible');
          var righe_inc = jQuery(ui.draggable).attr('righe_inc');
          var max_char = jQuery(ui.draggable).attr('max_char');
          var sottraibase = false;
          var link_width = '50px';
          var tessera_width = '110px';
          var j = parseInt(jQuery(this).parent().attr('nrbase'));
          var mol_left = 1;

          if (double == 0 || j < NrLink - 1 || ObjBracciale[j].dbl == 1) {
            switch ('big') {
              case 'classic':
                if (double == 1) {
                  if (jQuery(this).parent().attr('double') == '1') {
                    RimuoviDouble(j, this, true);
                  }

                  jQuery(this).parent().addClass('tessera_base_link_double');
                  jQuery(this).parent().attr('double', '1');
                  link_width = '100px';
                  tessera_width = '220px';
                  mol_left = 2;
                } else {
                  if (jQuery(this).parent().attr('double') == '1') {
                    self.RimuoviDouble(j, this, true);
                  }

                  jQuery(this).parent().addClass('tessera_base_link');
                }

                sottraibase = true;
                break;

              case 'big':
                jQuery(this).parent().addClass('tessera_base_link_big');
                sottraibase = true;
                break;

              case 'mbbshort':
              case 'mbblong':
                jQuery(this).parent().addClass('tessera_base_mbb_drop');
                break;

              case 'seimia':
                jQuery(this).parent().addClass('tessera_base_seimia_drop');
                break;

              default:
                imgsku = imgsku.replace(sku, 'f_' + sku);
                jQuery(this).parent().addClass('tessera_base_cubiamo_drop');
                break;
            }

            jQuery(this).parent().find(".tesserabracciale").css('background-image', 'url(' + imgsku + ')');
            jQuery(this).parent().stop().animate({
              height: '50px',
              width: link_width,
              marginTop: '0px'
            }, 'fast');
            jQuery(this).parent().find('.tesserabracciale').stop().animate({
              height: '42px',
              width: tessera_width,
              top: tes_top,
              left: tes_left * mol_left
            }, "fast");
            jQuery(this).parent().prev().css('z-index', '');
            jQuery(this).parent().next().css('z-index', '');
            jQuery(this).parent().css('z-index', '1');
            jQuery('#tessera_detail').hide(0);

            if (double == 1) {
              objdouble = {
                id: j,
                cod: sku,
                price: fprice,
                name: sname,
                img: imgsku,
                cod_int: scod_int,
                dbl: double
              };
              self.AggiungiDouble(j, objdouble, this, sottraibase);
            } else {
              if (sottraibase && ObjBracciale[j].cod == '') {
                NrLinkBase--;
              }

              ObjBracciale[j] = {
                id: j,
                cod: sku,
                price: fprice,
                name: sname,
                img: imgsku,
                cod_int: scod_int,
                dbl: double
              };
            }

            self.AggiornaObjBracciale(); // self.CalcolaRiepilogo();

            jQuery('#div_hover').fadeOut(200);

            if (self.ControllaMinimoNLink) {
              if (self.ContaTessere() >= NumeroMinimoLink) {
                jQuery('#acquista_bracciale').removeClass('disable');
                jQuery('#m_acquista_fixed').removeClass('disable');
                jQuery('#m_riepilogo_bag').removeClass('disable');
                jQuery('#m_btn_acquista').removeClass('disable');
              }
            } else {
              jQuery('#acquista_bracciale').removeClass('disable');
              jQuery('#m_acquista_fixed').removeClass('disable');
              jQuery('#m_riepilogo_bag').removeClass('disable');
              jQuery('#m_btn_acquista').removeClass('disable');
            }

            if (incisible == 1) {
              MostraFormIncisione(j, righe_inc, max_char);
            }
          }

          DragInCorso = false;
          return false;
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
  }, {
    key: "RefreshSlideFiltri",
    value: function RefreshSlideFiltri() {
      var self = this;
      var size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
      };
      var largh = 0;
      var nr_li = 0;
      jQuery('#filtri_attivi .touchcarousel ul li').each(function (index, element) {
        largh += jQuery(this).width();
        nr_li++;
      });

      if (largh > size.width) {
        self.FiltriTC = jQuery('#filtri_attivi .touchcarousel').touchCarousel({
          scrollbar: false,
          pagingNavControls: false,
          directionNav: false,
          scrollToLast: true
        }).data('touchCarousel');
        jQuery('#filtri_attivi .touchcarousel ul').width(largh + 10);
        FiltriTC.goTo(nr_li); //li_vuoto;
      } else {
        self.FiltriTC = null;
      }
    }
  }, {
    key: "initDefault",
    value: function initDefault() {
      var self = this;
      jQuery('#bracciale').sortable({
        handle: '.handletessera',
        opacity: 0.6,
        appendTo: 'body',
        helper: 'original',
        delay: self.DelayTouch,
        disabled: false,
        //(!isMobile),
        activate: function activate(event, ui) {},
        start: function start(event, ui) {
          self.SortStart = true;
          jQuery(ui.item).find('.stella_incisione').fadeOut(200);

          if (jQuery('#tooltip_incisione').is(":visible")) {
            jQuery('#tooltip_incisione').fadeOut(200);
          }
        },
        stop: function stop(event, ui) {
          self.SortStart = false;
          var j = jQuery(ui.item).attr('nrbase');

          if (ObjBracciale[j].incision == 1) {
            jQuery('#base_' + j).find('.stella_incisione').fadeIn(200);
          }

          jQuery(ui.item).prev().css('z-index', '');
          jQuery(ui.item).next().css('z-index', '');
          jQuery(ui.item).css('z-index', '1');
          self.AggiornaObjBracciale();
        },
        update: function update(event, ui) {
          ui.item.unbind("click");
          ui.item.one("click", function (event) {
            console.log("one-time-click");
            event.stopImmediatePropagation();
            jQuery(this).on('click', function () {
              var element = jQuery(this).find('.stella_incisione');

              if (jQuery(element).is(':visible')) {
                jQuery(this).find('.stella_incisione').fadeOut(200);
                self.MostraToolipIncisione(element);
              } else if (jQuery('#tooltip_incisione').is(':visible')) {
                jQuery('#tooltip_incisione').fadeOut(200);
                jQuery(this).find('.stella_incisione').fadeIn(200);
              }
            });
          });
        },

        /*
         update: function( event, ui ) {
         if (isMobile) {
         jQuery("#bracciale").sortable('disable');
         }
         },
         */
        deactivate: function deactivate(event, ui) {
          var diff = Math.abs(ui.originalPosition.top - ui.position.top);

          if (diff > 60) {
            self.RimuoviTessera(jQuery(ui.item), false);
          }
        }
      });
      var size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
      };
      jQuery('#bracciale_zoom').width(size.width);
      self.BraccialeZoom = jQuery('#bracciale_zoom').touchCarousel({
        itemFallbackWidth: 100,
        scrollbar: false,
        dragUsingMouse: false
      }).data("touchCarousel");
      self.AggiornaTriggerTessere();
    }
  }, {
    key: "MostraToolipIncisione",
    value: function MostraToolipIncisione(element) {
      var self = this;

      if (jQuery('#tooltip_incisione').is(":visible")) {
        var jstella = jQuery('#tooltip_incisione').attr('nrbase');
        jQuery('#base_' + jstella).find('.stella_incisione').fadeIn(200);
      }

      var j = jQuery(element).parent().attr('nrbase');
      var position = jQuery(element).parent().position();
      var wparent = jQuery(element).parent().width();
      var left = position.left + (wparent - jQuery('#tooltip_incisione').width()) / 2 + self.OffsetToolTip;
      jQuery('#tooltip_incisione').attr('nrbase', j);
      jQuery('#tooltip_incisione').css("font-family", "'" + ObjBracciale[j].font + "', sans-serif");
      jQuery('#tooltip_incisione').css('left', left);
      var strhtml = '<div class="textcontainer">';

      if (ObjBracciale[j].l2 == '') {
        strhtml += '<div class="inner">' + ObjBracciale[j].l1 + '</div>';
      } else {
        strhtml += '<div class="inner">' + ObjBracciale[j].l1 + '<br>' + ObjBracciale[j].l2 + '</div>';
      }

      strhtml += '</div>';
      jQuery('#tooltip_incisione').html(strhtml);
      jQuery('#tooltip_incisione').fadeIn(200);
      jQuery(this).fadeOut(200);
    }
  }, {
    key: "AggiornaTriggerTessere",
    value: function AggiornaTriggerTessere() {
      var self = this;
      var isMobile = self.isMobile;

      if (isMobile) {
        jQuery(".tessera").draggable({
          containment: 'document',
          revert: 'invalid',
          helper: 'clone',
          handle: 'div.drag',
          zIndex: 100,
          opacity: 0.6,
          delay: self.DelayTouch,
          appendTo: 'body',
          start: function start(event, ui) {
            self.ChiudiBarraRiepilogo();
            DragInCorso = true;
          },
          stop: function stop() {
            DragInCorso = false;
          }
        });
        jQuery('.drag').swipe({
          swipeUp: function swipeUp(event, direction, distance, duration, fingerCount, fingerData) {
            if (duration < self.DelayTouch) {
              jQuery('html, body').stop().animate({
                scrollTop: jQuery(window).scrollTop() + 2.5 * distance
              }, 500, 'swing');
            }
          },
          swipeDown: function swipeDown(event, direction, distance, duration, fingerCount, fingerData) {
            if (duration < self.DelayTouch) {
              jQuery('html, body').stop().animate({
                scrollTop: jQuery(window).scrollTop() - 2.5 * distance
              }, 500, 'swing');
            }
          },
          allowPageScroll: "auto"
        });
      } else {
        jQuery(".drag").draggable({
          containment: 'document',
          revert: 'invalid',
          // handle: 'div.drag',
          helper: 'clone',
          scroll: false,
          zIndex: '100',
          opacity: 0.6,
          appendTo: 'body',
          start: function start(event, ui) {
            self.ChiudiBarraRiepilogo();
            DragInCorso = true;
          },
          stop: function stop() {
            DragInCorso = false;
            jQuery('#tessera_detail').hide(0);
            jQuery('#conf_suggerimento').fadeOut(200);
          }
        });
      }

      jQuery('.tessera').mouseenter(function () {
        if (!isMobile) {
          if (!DragInCorso) {
            var elem = this;
            self.IntervalloHover = setTimeout(function () {
              self.VisualizzaHover(elem);
            }, 100);
          }
        }
      });
      jQuery('#tessera_detail').mouseleave(function () {
        if (!isMobile) {
          if (!DragInCorso) {
            jQuery('#tessera_detail').hide(0);
            clearTimeout(self.IntervalloHover);
          }
        }
      });
      jQuery('.stella_incisione').on('click', function () {
        MostraTooltipIncisione(this);
      });
      jQuery('#tooltip_incisione').on('click', function () {
        var j = jQuery(this).attr('nrbase');
        jQuery(this).fadeOut(200);
        jQuery('#base_' + j).find('.stella_incisione').fadeIn(200);
      });
      /*
      jQuery('#div_hover').mouseenter(function () {
      if (!DragInCorso) {
      if (jQuery('#tessera_detail:hover').length == 0) {
      jQuery('#div_hover').fadeOut(200);
      clearTimeout(self.IntervalloHover);
      }
      }
      });
      */
    }
  }, {
    key: "SettaPosizioniTessere",
    value: function SettaPosizioniTessere(TipoBracciale) {
      switch (TipoBracciale) {
        case 'classic':
          tes_top = -23;
          tes_left = -30;
          tes_top1 = -25;
          tes_left1 = -33;
          tes_top_o = -26;
          tes_left_o = -35;
          break;

        case 'big':
          tes_top = -13;
          tes_left = -30;
          tes_top1 = -14;
          tes_left1 = -35;
          tes_top_o = -16;
          tes_left_o = -35;
          break;

        case 'mbbshort':
        case 'mbblong':
          tes_top = -24;
          tes_left = -31;
          tes_top1 = -26;
          tes_left1 = -33;
          tes_top_o = -28;
          tes_left_o = -37;
          break;

        case 'seimia':
          tes_top = 6;
          tes_left = -31;
          tes_top1 = 8;
          tes_left1 = -33;
          tes_top_o = 10;
          tes_left_o = -37;
          break;

        default:
          tes_top = -24;
          tes_left = -31;
          tes_top1 = -26;
          tes_left1 = -33;
          tes_top_o = -28;
          tes_left_o = -37;
          break;
      }
    }
  }, {
    key: "ChiudiBarraRiepilogo",
    value: function ChiudiBarraRiepilogo() {
      var self = this;

      if (self.ScrollBar) {
        jQuery('#riepilogo_tessere').perfectScrollbar('destroy');
      }

      jQuery('#riepilogo_tessere').hide(200); //jQuery("#rie_tot").hide(0);

      jQuery('#riepilogo_bracciale').css('background-image', 'url(' + SKINURL + '/img/bgriepilogo.png)');
    }
  }, {
    key: "MostraDettaglioOver",
    value: function MostraDettaglioOver(j) {
      var self = this;
      var pngtessera = 'tessera_base_drag';
      var addclass = '';

      switch ('big') {
        case 'classic':
          pngtessera = 'tessera_base_drag';

          if (ObjBracciale[j].dbl == 1) {
            pngtessera = 'tessera_base_drag_double';
          }

          break;

        case 'big':
          pngtessera = 'tessera_base_drag_big';
          break;

        case 'mbbshort':
        case 'mbblong':
          jQuery('#dettaglio_over .rie_tes_img').addClass('nopendenti');
          pngtessera = 'tessera_base_drag_mbb';
          break;

        case 'seimia':
          pngtessera = 'tessera_base_drag_seimia';
          break;

        default:
          jQuery('#dettaglio_over .rie_tes_img').addClass('nopendenti');
          pngtessera = 'tessera_base_drag_cubiamo';
          break;
      }

      var bgimage = 'url(' + ObjBracciale[j].img + '), url(' + SKINURL + 'img/' + pngtessera + '.png)';
      jQuery('#dettaglio_over .rie_tes_img').css('background-image', bgimage);
      var strhtml = ObjBracciale[j].name + '<br>';
      strhtml += self.GetPriceHtml(ObjBracciale[j].price, ObjBracciale[j].price, 'pricedetail');
      jQuery('#dettaglio_over .testo').html(strhtml);
      jQuery('#dettaglio_over').show();
    }
  }, {
    key: "AggiornaObjBracciale",
    value: function AggiornaObjBracciale() {
      jQuery('#bracciale .tessera_base').each(function (index) {
        var j = parseInt(jQuery(this).attr('nrbase'));
        ObjBracciale[j].id = index;
      });
    }
  }, {
    key: "AggiungiDouble",
    value: function AggiungiDouble(j, objdouble, element, sottraibase) {
      if (sottraibase && ObjBracciale[j].cod == '') {
        NrLinkBase--;
      }

      ObjBracciale[j] = objdouble;
      var idthis = jQuery(element).parent().attr('nrbase');
      var idnext = jQuery(element).parent().next().attr('nrbase');

      if (jQuery('#base_' + idnext).attr('double') == '1') {
        RimuoviDouble(idnext, null, true);
      }

      jQuery(element).parent().next().hide();
      jQuery('#base_' + idnext).appendTo('#base_' + idthis);
      jQuery(element).parent().find('.handletessera').css('width', '92px');

      if (sottraibase && ObjBracciale[idnext].cod == '') {
        NrLinkBase--;
      }

      ObjBracciale[idnext].id = j;
      ObjBracciale[idnext].cod = 'double';
    }
  }, {
    key: "RimuoviDouble",
    value: function RimuoviDouble(j, element, sottraibase) {
      var idthis;
      var idnext;

      if (element != null) {
        idthis = jQuery(element).parent().attr('nrbase');
        idnext = jQuery(element).parent().find('.tessera_base').attr('nrbase');
      } else {
        idthis = j;
        idnext = jQuery('#base_' + j).find('.tessera_base').attr('nrbase');
        jQuery('#base_' + idthis).css('width', '50px');
      }

      jQuery('#base_' + idthis).attr('double', '0');
      jQuery('#base_' + idthis).removeClass('tessera_base_link_double');
      jQuery('#base_' + idnext).insertAfter('#base_' + idthis);
      jQuery('#base_' + idnext).find('.tesserabracciale').css('background-image', 'none');
      jQuery('#base_' + idnext).find('.stella_incisione').hide();
      jQuery('#base_' + idthis).find('.stella_incisione').hide();
      jQuery('#base_' + idnext).show();
      jQuery('#base_' + idthis).parent().find('.handletessera').css('width', '46px');

      if (sottraibase) {
        NrLinkBase++;
      }

      ObjBracciale[idthis] = {
        id: j,
        cod: '',
        price: 0,
        name: '',
        img: '',
        cod_int: '',
        dbl: 0
      };
      ObjBracciale[idnext] = {
        id: j,
        cod: '',
        price: 0,
        name: '',
        img: '',
        cod_int: '',
        dbl: 0
      };
    }
  }, {
    key: "RimuoviTessera",
    value: function RimuoviTessera(id, silent) {
      var self = this;
      var j = 0;
      var TipoBracciale = 'big';

      if (jQuery(id).hasClass('x_tessera')) {
        j = jQuery(id).attr('nrtes');
        var idpar = jQuery(this).parent();
        jQuery(idpar).remove();
      } else {
        j = jQuery(id).attr('nrbase');
      }

      if (jQuery('#base_' + j).attr('double') == '1') {
        self.RimuoviDouble(j, null, true);
      }

      ObjBracciale[j] = {
        id: j,
        cod: '',
        price: 0,
        name: '',
        img: '',
        cod_int: ''
      };

      if (TipoBracciale == 'classic' || TipoBracciale == 'big') {
        NrLinkBase++;
      }

      jQuery('#base_' + j).find(' .tesserabracciale').css('background-image', 'none');

      switch (TipoBracciale) {
        case 'classic':
          jQuery('#base_' + j).removeClass('tessera_base_link');
          break;

        case 'big':
          jQuery('#base_' + j).removeClass('tessera_base_link_big');
          break;

        case 'mbbshort':
        case 'mbblong':
          jQuery('#base_' + j).removeClass('tessera_base_mbb_drop');
          break;

        case 'seimia':
          jQuery('#base_' + j).removeClass('tessera_base_seimia_drop');
          break;

        default:
          jQuery('#base_' + j).removeClass('tessera_base_cubiamo_drop');
          break;
      }

      if (!silent) self.CalcolaRiepilogo(true);

      if (self.ContaTessere() == 0 && PulsanteAcquista) {
        jQuery('#acquista_bracciale').addClass('disable');
        jQuery('#m_btn_acquista').addClass('disable');
        jQuery('#m_acquista_fixed').addClass('disable');
        jQuery('#m_riepilogo_bag').addClass('disable');
      } else if (self.ControllaMinimoNLink && self.ContaTessere() < NumeroMinimoLink && PulsanteAcquista) {
        jQuery('#acquista_bracciale').addClass('disable');
        jQuery('#m_btn_acquista').addClass('disable');
        jQuery('#m_acquista_fixed').addClass('disable');
        jQuery('#m_riepilogo_bag').addClass('disable');
      }
    }
  }, {
    key: "RimuoviDouble",
    value: function RimuoviDouble(j, element, sottraibase) {
      var idthis;
      var idnext;

      if (element != null) {
        idthis = jQuery(element).parent().attr('nrbase');
        idnext = jQuery(element).parent().find('.tessera_base').attr('nrbase');
      } else {
        idthis = j;
        idnext = jQuery('#base_' + j).find('.tessera_base').attr('nrbase');
        jQuery('#base_' + idthis).css('width', '50px');
      }

      jQuery('#base_' + idthis).attr('double', '0');
      jQuery('#base_' + idthis).removeClass('tessera_base_link_double');
      jQuery('#base_' + idnext).insertAfter('#base_' + idthis);
      jQuery('#base_' + idnext).find('.tesserabracciale').css('background-image', 'none');
      jQuery('#base_' + idnext).find('.stella_incisione').hide();
      jQuery('#base_' + idthis).find('.stella_incisione').hide();
      jQuery('#base_' + idnext).show();
      jQuery('#base_' + idthis).parent().find('.handletessera').css('width', '46px');

      if (sottraibase) {
        NrLinkBase++;
      }

      ObjBracciale[idthis] = {
        id: j,
        cod: '',
        price: 0,
        name: '',
        img: '',
        cod_int: '',
        dbl: 0
      };
      ObjBracciale[idnext] = {
        id: j,
        cod: '',
        price: 0,
        name: '',
        img: '',
        cod_int: '',
        dbl: 0
      };
    }
  }, {
    key: "CalcolaRiepilogo",
    value: function CalcolaRiepilogo() {
      var self = this;
      var strhtml = '';
      var TipoBracciale = 'big';
      jQuery('#riepilogo_tessere').html('<div class="div_riepilogo">');
      jQuery('#m_elenco_tessere').html('');
      var TotLink = 0;
      var nr = 0;
      var z = 0;
      var strlink = str_links;
      var pngtessera = 'tessera_base_drag';

      switch (TipoBracciale) {
        case 'classic':
          pngtessera = 'tessera_base_drag';
          break;

        case 'big':
          pngtessera = 'tessera_base_drag_big';
          break;

        case 'mbbshort':
        case 'mbblong':
          strlink = str_charms;
          str_basebracciale = str_bracciale;
          pngtessera = 'tessera_base_drag_mbb';
          break;

        case 'seimia':
          str_base = str_necklace;
          strlink = str_pendente;
          pngtessera = 'tessera_base_drag_seimia';
          break;

        default:
          strlink = str_cubi;
          str_basebracciale = str_bracciale;
          pngtessera = 'tessera_base_drag_cubiamo';
          break;
      }

      var nrbracciale = 0;

      if (TipoBracciale != 'classic' && TipoBracciale != 'big') {
        var bgimage = 'background-image: ' + bgurl_scelto.replace(/"/g, '') + '; background-position: top center ';
        strhtml = '<div class="rie_tes">';
        strhtml += '<div class="rie_tes_img" style=" ' + bgimage + '"></div>';
        strhtml += TextBracciale + '<br><span class="text13gray">' + str_codice + MaterialeBracciale;

        if (PulsanteAcquista) {
          strhtml += '<br>1 x ' + SimboloValuta + ' ' + self.DisplayCurrency(CostoTBase);
        }

        strhtml += '</span>';
        strhtml += '<div>';
        jQuery('#riepilogo_tessere').append(strhtml);
        jQuery('#m_elenco_tessere').append(strhtml);
        nrbracciale = 1;
      }

      jQuery('#bracciale .tessera_base').each(function (index) {
        var j = parseInt(jQuery(this).attr('nrbase'));
        jQuery('#basezoom_' + z).show();

        if (ObjBracciale[j].cod != '' && ObjBracciale[j].cod != 'double') {
          var bgtessera = pngtessera;

          if (ObjBracciale[j].dbl == 1) {
            bgtessera = 'tessera_base_drag_double';
          }

          var bgimage = 'background-image: url(' + ObjBracciale[j].img + '), url(' + SKINURL + 'img/' + bgtessera + '.png)';
          strhtml = '<div class="rie_tes">';
          strhtml += '<div class="rie_tes_img" style=" ' + bgimage + '"></div>';
          strhtml += ObjBracciale[j].name + '<br><span class="text13gray">' + str_codice + ObjBracciale[j].cod_int + '<br>' + str_posizione + (index + 1);

          if (PulsanteAcquista) {
            strhtml += '<br>1 x ' + SimboloValuta + ' ' + self.DisplayCurrency(ObjBracciale[j].price);
          }

          strhtml += '</span>';
          strhtml += '<div class="x_tessera" nrtes="' + j + '"></div><div>';
          jQuery('#riepilogo_tessere').append(strhtml);
          jQuery('#m_elenco_tessere').append(strhtml);

          switch (TipoBracciale) {
            case 'classic':
              if (ObjBracciale[j].dbl == 1) {
                jQuery('#basezoom_' + z).addClass('tessera_base_link_double');
                jQuery('#basezoom_' + z).addClass('tessera_basezoom_double');
                jQuery('#basezoom_' + z + ' .tesserabraccialezoom').css('left', '-14px');
              } else {
                jQuery('#basezoom_' + z).addClass('tessera_base_link');
                jQuery('#basezoom_' + z).removeClass('tessera_basezoom_double');
              }

              jQuery('#basezoom_' + z + ' .tesserabraccialezoom').css({
                'background-image': 'url(' + ObjBracciale[j].img + ')',
                'z-index': '9'
              });
              break;

            case 'big':
              jQuery('#basezoom_' + z).addClass('tessera_base_link_big');
              jQuery('#basezoom_' + z + ' .tesserabraccialezoom_big').css({
                'background-image': 'url(' + ObjBracciale[j].img + ')',
                'z-index': '9'
              });
              break;

            case 'mbbshort':
            case 'mbblong':
              jQuery('#basezoom_' + z).addClass('tessera_base_mbb_drop');
              jQuery('#basezoom_' + z + ' .tesserabraccialezoom_mbb').css({
                'background-image': 'url(' + ObjBracciale[j].img + ')',
                'z-index': '9'
              });
              break;

            case 'seimia':
              jQuery('#basezoom_' + z).addClass('tessera_base_seimia_drop');
              jQuery('#basezoom_' + z + ' .tesserabraccialezoom_seimia').css({
                'background-image': 'url(' + ObjBracciale[j].img + ')',
                'z-index': '9'
              });
              break;

            default:
              var imgsku = ObjBracciale[j].img;
              var sku = ObjBracciale[j].cod; //imgsku = imgsku.replace(sku, 'f_' + sku);

              jQuery('#basezoom_' + z).addClass('tessera_base_cubiamo_drop');
              jQuery('#basezoom_' + z + ' .tesserabraccialezoom_cubiamo').css({
                'background-image': 'url(' + imgsku + ')',
                'z-index': '9'
              });
              break;
          }

          TotLink += parseFloat(ObjBracciale[j].price);
          nr++;
        } else {
          if (ObjBracciale[j].cod != 'double') {
            switch (TipoBracciale) {
              case 'classic':
                jQuery('#basezoom_' + z).removeClass('tessera_base_link');
                jQuery('#basezoom_' + z).removeClass('tessera_base_link_double');
                jQuery('#basezoom_' + z).removeClass('tessera_basezoom_double');
                jQuery('#basezoom_' + z + ' .tesserabraccialezoom').css('background-image', 'none');
                break;

              case 'big':
                jQuery('#basezoom_' + z).removeClass('tessera_base_link_big');
                jQuery('#basezoom_' + z + ' .tesserabraccialezoom_big').css('background-image', 'none');
                break;

              case 'mbbshort':
              case 'mbblong':
                jQuery('#basezoom_' + z).removeClass('tessera_base_mbb_drop');
                jQuery('#basezoom_' + z + ' .tesserabraccialezoom_mbb').css('background-image', 'none');
                break;

              case 'seimia':
                jQuery('#basezoom_' + z).removeClass('tessera_base_seimia_drop');
                jQuery('#basezoom_' + z + ' .tesserabraccialezoom_seimia').css('background-image', 'none');
                break;

              default:
                jQuery('#basezoom_' + z).removeClass('tessera_base_cubiamo_drop');
                jQuery('#basezoom_' + z + ' .tesserabraccialezoom_cubiamo').css('background-image', 'none');
                break;
            }
          } else {
            jQuery('#basezoom_' + z).hide();
          }
        }

        z++;
      });
      jQuery('#riepilogo_tessere').append('</div>');
      jQuery('#riepilogo_tessere .div_riepilogo .rie_tes:last-child').css('border-bottom', '0');
      var totale = NrLinkBase * CostoTBase + TotLink;
      var totbase = NrLinkBase * CostoTBase;

      if (self.ControllaMinimoNLink && self.ContaTessere() >= NumeroMinimoLink) {
        totale = TotLink;
        totbase = 0;
      }

      if (PromoBaseGratis && TotLink >= PrezzoBaseGratis) {
        totale = TotLink;
        totbase = 0;
      }

      var testo = str_base + ' ' + SimboloValuta + ' ' + self.DisplayCurrency(totbase) + ' + ' + nr + ' ' + strlink + ' ' + SimboloValuta + ' ' + self.DisplayCurrency(TotLink) + ' = <b>' + SimboloValuta + ' ' + self.DisplayCurrency(totale) + '</b>';

      if (!PulsanteAcquista) {
        testo = str_basebracciale + ' + ' + nr + ' ' + strlink + ' ';
      }

      jQuery("#rie_tot").html(testo);
      testo = '<b>' + SimboloValuta + ' ' + self.DisplayCurrency(totale) + '</b>';

      if (!PulsanteAcquista) {
        testo = '<b>' + nr + ' ' + strlink + '</b>';
      }

      jQuery("#m_rie_tot").html(testo);
      jQuery("#m_price_sub").html(SimboloValuta + ' ' + self.DisplayCurrency(totale));
      jQuery('.x_tessera').on('click', function () {
        var id = jQuery(this);
        RimuoviTessera(id, false);
      });
      var altezza = (nr + nrbracciale) * 92;
      var ScrollBar = false;

      if (altezza > 276) {
        altezza = 276;
        ScrollBar = true;
      }

      jQuery('#riepilogo_tessere').height(altezza);
      var size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
      };
      var altezzadisp = size.height - 65; //jQuery('#m_riepilogo_tessere').height(altezzadisp);

      altezza = altezzadisp - 140;
      jQuery('#m_elenco_tessere').height(altezza);
      altezza = (nr + nrbracciale) * 102;
      var ScrollBarMobile = false;

      if (altezza > altezzadisp - 140) {
        jQuery('#m_elenco_tessere').css('max-height', altezza + 'px');
        ScrollBarMobile = true;
      }
    }
  }, {
    key: "ContaTessere",
    value: function ContaTessere() {
      var nrtessere = 0;

      for (var j = 0; j < NrLink; j++) {
        if (typeof ObjBracciale[j] !== 'undefined') {
          if (ObjBracciale[j].cod != '' && ObjBracciale[j].cod != 'double') {
            nrtessere++;
          }
        }
      }

      return nrtessere;
    }
  }]);

  return Constructor;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2VzL2hvbWUvaG9tZS5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvaG9tZS9tb2R1bGVzL2NvbnN0cnVjdG9yLmpzIl0sIm5hbWVzIjpbIkhvbWVWaWV3IiwiaW5pdCIsIkNvbnN0cnVjdG9yIiwiaXNNb2JpbGUiLCJDaGVja0lzTW9iaWxlIiwiSW50ZXJ2YWxsb0hvdmVyIiwiQnJhY2NpYWxlWm9vbSIsIkZpbHRyb0FwZXJ0byIsIlByaW1vQWNjZXNzbyIsIkxhY2Npb0JyYWNjaWFsZSIsImRldGFpbF92aXNpYmxlIiwiUmljZXJjYUF0dGl2YSIsIlNvcnRTdGFydCIsImxhcmdoZXp6YSIsImpRdWVyeSIsIndpbmRvdyIsIndpZHRoIiwiRmlsdHJpVEMiLCJEZWxheVRvdWNoIiwicGFnaW5hdXJsIiwiQ29udHJvbGxhTWluaW1vTkxpbmsiLCJPZmZzZXRUb29sVGlwIiwiQXJySW5jaXNpb25pIiwiQXJyYXkiLCJTY3JvbGxCYXIiLCJtdXN0QmVCbG9ja2VkIiwiZXZlbnRzIiwiUmVmcmVzaFNsaWRlRmlsdHJpIiwiaW5pdERlZmF1bHQiLCJkb2N1bWVudCIsImNyZWF0ZUV2ZW50IiwiZSIsInNlbGYiLCJ0ZXNfdG9wIiwidGVzX2xlZnQiLCJ0ZXNfdG9wMSIsInRlc19sZWZ0MSIsInRlc190b3BfbyIsInRlc19sZWZ0X28iLCJtb3VzZWVudGVyIiwiZWxlbSIsInNldFRpbWVvdXQiLCJWaXN1YWxpenphSG92ZXIiLCJtb3VzZWxlYXZlIiwiRHJhZ0luQ29yc28iLCJoaWRlIiwiY2xlYXJUaW1lb3V0Iiwib24iLCJzaXplIiwiaW5uZXJXaWR0aCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwidWx3aWR0aCIsInhwb3MiLCJzZXRYUG9zIiwiZmFkZUluIiwiZmFkZU91dCIsImVsZW1lbnQiLCJmaW5kIiwiaXMiLCJNb3N0cmFUb29saXBJbmNpc2lvbmUiLCJsaW5rX3dpZHRoIiwidGVzc2VyYV93aWR0aCIsIndpZHRoX25leHQiLCJ3aWR0aF90ZXNzZXJhX25leHQiLCJ3aWR0aF9wcmV2Iiwid2lkdGhfdGVzc2VyYV9wcmV2IiwibGlua19tb2wiLCJuZXh0X21vbCIsInByZXZfbW9sIiwibWVub19sZWZ0IiwibWVub190b3AiLCJhdHRyIiwicHJldiIsIm5leHQiLCJzdG9wIiwiYW5pbWF0ZSIsIm1hcmdpblRvcCIsInRvcCIsImxlZnQiLCJqIiwiT2JqQnJhY2NpYWxlIiwiY29kIiwiTW9zdHJhRGV0dGFnbGlvT3ZlciIsImRyb3BwYWJsZSIsImFjY2VwdCIsInRvbGVyYW5jZSIsImFjdGl2ZUNsYXNzIiwib3ZlciIsImV2ZW50IiwidWkiLCJwYXJlbnQiLCJvdXQiLCJkcm9wIiwic25hbWUiLCJkcmFnZ2FibGUiLCJpbWdza3UiLCJza3UiLCJzY29kX2ludCIsImZwcmljZSIsImRvdWJsZSIsImluY2lzaWJsZSIsInJpZ2hlX2luYyIsIm1heF9jaGFyIiwic290dHJhaWJhc2UiLCJwYXJzZUludCIsIm1vbF9sZWZ0IiwiTnJMaW5rIiwiZGJsIiwiUmltdW92aURvdWJsZSIsImFkZENsYXNzIiwicmVwbGFjZSIsImNzcyIsIm9iamRvdWJsZSIsImlkIiwicHJpY2UiLCJuYW1lIiwiaW1nIiwiY29kX2ludCIsIkFnZ2l1bmdpRG91YmxlIiwiTnJMaW5rQmFzZSIsIkFnZ2lvcm5hT2JqQnJhY2NpYWxlIiwiQ29udGFUZXNzZXJlIiwiTnVtZXJvTWluaW1vTGluayIsInJlbW92ZUNsYXNzIiwiTW9zdHJhRm9ybUluY2lzaW9uZSIsInBvc2l6IiwicG9zaXRpb24iLCJzY3JlZW5fdyIsImRldGFpbF93IiwiYmdpbWciLCJub21lIiwibWF0ZXJpYWxlIiwic3RyaHRtbCIsIkdldFByaWNlSHRtbCIsImh0bWwiLCJzaG93IiwiZmluYWxfcHJpY2UiLCJzdHJjbGFzcyIsInZwcmljZSIsInBhcnNlRmxvYXQiLCJ2ZmluYWxfcHJpY2UiLCJQdWxzYW50ZUFjcXVpc3RhIiwiaHRtbHByaWNlIiwiaHRtbGZpbmFsX3ByaWNlIiwiRGlzcGxheUN1cnJlbmN5IiwiU2ltYm9sb1ZhbHV0YSIsInZhbG9yZSIsIk1hdGgiLCJyb3VuZCIsInRvRml4ZWQiLCJ0ZXh0IiwicmVwbGFjZUFsbCIsImxhcmdoIiwibnJfbGkiLCJlYWNoIiwiaW5kZXgiLCJ0b3VjaENhcm91c2VsIiwic2Nyb2xsYmFyIiwicGFnaW5nTmF2Q29udHJvbHMiLCJkaXJlY3Rpb25OYXYiLCJzY3JvbGxUb0xhc3QiLCJkYXRhIiwiZ29UbyIsInNvcnRhYmxlIiwiaGFuZGxlIiwib3BhY2l0eSIsImFwcGVuZFRvIiwiaGVscGVyIiwiZGVsYXkiLCJkaXNhYmxlZCIsImFjdGl2YXRlIiwic3RhcnQiLCJpdGVtIiwiaW5jaXNpb24iLCJ1cGRhdGUiLCJ1bmJpbmQiLCJvbmUiLCJjb25zb2xlIiwibG9nIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiZGVhY3RpdmF0ZSIsImRpZmYiLCJhYnMiLCJvcmlnaW5hbFBvc2l0aW9uIiwiUmltdW92aVRlc3NlcmEiLCJpdGVtRmFsbGJhY2tXaWR0aCIsImRyYWdVc2luZ01vdXNlIiwiQWdnaW9ybmFUcmlnZ2VyVGVzc2VyZSIsImpzdGVsbGEiLCJ3cGFyZW50IiwiZm9udCIsImwyIiwibDEiLCJjb250YWlubWVudCIsInJldmVydCIsInpJbmRleCIsIkNoaXVkaUJhcnJhUmllcGlsb2dvIiwic3dpcGUiLCJzd2lwZVVwIiwiZGlyZWN0aW9uIiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsImZpbmdlckNvdW50IiwiZmluZ2VyRGF0YSIsInNjcm9sbFRvcCIsInN3aXBlRG93biIsImFsbG93UGFnZVNjcm9sbCIsInNjcm9sbCIsIk1vc3RyYVRvb2x0aXBJbmNpc2lvbmUiLCJUaXBvQnJhY2NpYWxlIiwicGVyZmVjdFNjcm9sbGJhciIsIlNLSU5VUkwiLCJwbmd0ZXNzZXJhIiwiYWRkY2xhc3MiLCJiZ2ltYWdlIiwiaWR0aGlzIiwiaWRuZXh0IiwiaW5zZXJ0QWZ0ZXIiLCJzaWxlbnQiLCJoYXNDbGFzcyIsImlkcGFyIiwicmVtb3ZlIiwiQ2FsY29sYVJpZXBpbG9nbyIsIlRvdExpbmsiLCJuciIsInoiLCJzdHJsaW5rIiwic3RyX2xpbmtzIiwic3RyX2NoYXJtcyIsInN0cl9iYXNlYnJhY2NpYWxlIiwic3RyX2JyYWNjaWFsZSIsInN0cl9iYXNlIiwic3RyX25lY2tsYWNlIiwic3RyX3BlbmRlbnRlIiwic3RyX2N1YmkiLCJucmJyYWNjaWFsZSIsImJndXJsX3NjZWx0byIsIlRleHRCcmFjY2lhbGUiLCJzdHJfY29kaWNlIiwiTWF0ZXJpYWxlQnJhY2NpYWxlIiwiQ29zdG9UQmFzZSIsImFwcGVuZCIsImJndGVzc2VyYSIsInN0cl9wb3NpemlvbmUiLCJ0b3RhbGUiLCJ0b3RiYXNlIiwiUHJvbW9CYXNlR3JhdGlzIiwiUHJlenpvQmFzZUdyYXRpcyIsInRlc3RvIiwiYWx0ZXp6YSIsImFsdGV6emFkaXNwIiwiU2Nyb2xsQmFyTW9iaWxlIiwibnJ0ZXNzZXJlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2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LFdBQS9CLEVBQTRDO0FBQ3hDLGNBQUtDLFlBQVksQ0FBQ0QsQ0FBRCxDQUFaLENBQWdCRSxHQUFoQixJQUF1QixFQUF4QixJQUFnQ0QsWUFBWSxDQUFDRCxDQUFELENBQVosQ0FBZ0JFLEdBQWhCLElBQXVCLFFBQTNELEVBQXNFO0FBQ2xFMksscUJBQVM7QUFDWjtBQUNKO0FBQ0o7O0FBQ0QsYUFBT0EsU0FBUDtBQUNIIiwiZmlsZSI6ImpzL3BhZ2VzL2hvbWUvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9wYWdlcy9ob21lL2hvbWUuZW50cnkuanNcIik7XG4iLCJpbXBvcnQgQ29uc3RydWN0b3IgZnJvbSAnLi9tb2R1bGVzL2NvbnN0cnVjdG9yJztcclxuXHJcbmNsYXNzIEhvbWVWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBuZXcgQ29uc3RydWN0b3IoKTtcclxuICAgIH1cclxufVxyXG5uZXcgSG9tZVZpZXcoKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdHJ1Y3RvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlzTW9iaWxlID0gdGhpcy5DaGVja0lzTW9iaWxlKCk7IC8vaW5pdGlhdGUgYXMgZmFsc2VcclxuICAgICAgICAvLyBKYXZhU2NyaXB0IERvY3VtZW50XHJcbiAgICAgICAgbGV0IEludGVydmFsbG9Ib3ZlcjtcclxuICAgICAgICBsZXQgQnJhY2NpYWxlWm9vbTtcclxuICAgICAgICBsZXQgRmlsdHJvQXBlcnRvID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IFByaW1vQWNjZXNzbyA9IHRydWU7XHJcbiAgICAgICAgbGV0IExhY2Npb0JyYWNjaWFsZSA9ICcnO1xyXG4gICAgICAgIGxldCBkZXRhaWxfdmlzaWJsZSA9ICcnO1xyXG4gICAgICAgIGxldCBSaWNlcmNhQXR0aXZhID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IFNvcnRTdGFydCA9IHRydWU7XHJcbiAgICAgICAgbGV0IGxhcmdoZXp6YSA9IGpRdWVyeSh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgbGV0IEZpbHRyaVRDID0gbnVsbDtcclxuICAgICAgICBsZXQgRGVsYXlUb3VjaCA9IDA7XHJcbiAgICAgICAgbGV0IHBhZ2luYXVybCA9ICcnO1xyXG4gICAgICAgIGxldCBDb250cm9sbGFNaW5pbW9OTGluayA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBPZmZzZXRUb29sVGlwID0gLTIwO1xyXG4gICAgICAgIGxldCBBcnJJbmNpc2lvbmkgPSBBcnJheSgpO1xyXG4gICAgICAgIGxldCBTY3JvbGxCYXIgPSBmYWxzZTtcclxuICAgICAgICAvLyBDb250cm9sbG8gY2FyaWNhbWVudGlcclxuICAgICAgICBsZXQgbXVzdEJlQmxvY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgICAgIC8vIHRoaXMuU2V0dGFQb3NpemlvbmlUZXNzZXJlKFwiYmlnXCIpO1xyXG4gICAgICAgIHRoaXMuUmVmcmVzaFNsaWRlRmlsdHJpKCk7XHJcbiAgICAgICAgdGhpcy5pbml0RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgQ2hlY2tJc01vYmlsZSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFdmVudChcIlRvdWNoRXZlbnRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgaXNNb2JpbGUgPSBzZWxmLmlzTW9iaWxlO1xyXG4gICAgICAgIHZhciB0ZXNfdG9wID0gLTEzO1xyXG4gICAgICAgIHZhciB0ZXNfbGVmdCA9IC0zMDtcclxuICAgICAgICB2YXIgdGVzX3RvcDEgPSAtMTQ7XHJcbiAgICAgICAgdmFyIHRlc19sZWZ0MSA9IC0zNTtcclxuICAgICAgICB2YXIgdGVzX3RvcF9vID0gLTE2O1xyXG4gICAgICAgIHZhciB0ZXNfbGVmdF9vID0gLTM1O1xyXG4gICAgICAgIGpRdWVyeSgnLnRlc3NlcmEnKS5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIWlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAvL2lmICghRHJhZ0luQ29yc28pIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHNlbGYuSW50ZXJ2YWxsb0hvdmVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLlZpc3VhbGl6emFIb3ZlcihlbGVtKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeSgnI3Rlc3NlcmFfZGV0YWlsJykubW91c2VsZWF2ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCFpc01vYmlsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFEcmFnSW5Db3Jzbykge1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI3Rlc3NlcmFfZGV0YWlsJykuaGlkZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5JbnRlcnZhbGxvSG92ZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgalF1ZXJ5KCcjY29uZl96b29tJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBzaXplID0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdWx3aWR0aCA9IGpRdWVyeSgnI2JyYWNjaWFsZV96b29tIHVsJykud2lkdGgoKTtcclxuICAgICAgICAgICAgdmFyIHhwb3MgPSAwIC0gKCh1bHdpZHRoIC0gc2l6ZS53aWR0aCkgLyAyKTtcclxuICAgICAgICAgICAgc2VsZi5CcmFjY2lhbGVab29tLnNldFhQb3MoeHBvcyk7XHJcbiAgICAgICAgICAgIC8vXHRCcmFjY2lhbGVab29tLnVwZGF0ZUNhcm91c2VsU2l6ZSgpO1xyXG4gICAgICAgICAgICAvL1x0alF1ZXJ5KCcjYnJhY2NpYWxlX3pvb20gdWwnKS5jc3Moe2xlZnQ6ICctMzAwcHgnfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBzZWxmLkNhbGNvbGFSaWVwaWxvZ28oKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjY29udGFpbmVyX3pvb20nKS5mYWRlSW4oMjAwKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjY29udGFpbmVyX2JyYWNjaWFsZScpLmZhZGVPdXQoMjAwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBqUXVlcnkoJy50ZXNzZXJhX2Jhc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBqUXVlcnkodGhpcykuZmluZCgnLnN0ZWxsYV9pbmNpc2lvbmUnKVxyXG4gICAgICAgICAgICBpZiAoalF1ZXJ5KGVsZW1lbnQpLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuZmluZCgnLnN0ZWxsYV9pbmNpc2lvbmUnKS5mYWRlT3V0KDIwMCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLk1vc3RyYVRvb2xpcEluY2lzaW9uZShlbGVtZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChqUXVlcnkoJyN0b29sdGlwX2luY2lzaW9uZScpLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyN0b29sdGlwX2luY2lzaW9uZScpLmZhZGVPdXQoMjAwKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKCcuc3RlbGxhX2luY2lzaW9uZScpLmZhZGVJbigyMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnLnRlc3NlcmFfYmFzZScpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaW5rX3dpZHRoID0gJzYwcHgnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3NlcmFfd2lkdGggPSAnMTMycHgnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoX25leHQgPSAnNTRweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGhfdGVzc2VyYV9uZXh0ID0gJzExOXB4JztcclxuICAgICAgICAgICAgICAgIHZhciB3aWR0aF9wcmV2ID0gJzU0cHgnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoX3Rlc3NlcmFfcHJldiA9ICcxMTlweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlua19tb2wgPSAxO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5leHRfbW9sID0gMTtcclxuICAgICAgICAgICAgICAgIHZhciBwcmV2X21vbCA9IDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVub19sZWZ0ID0gMDtcclxuICAgICAgICAgICAgICAgIHZhciBtZW5vX3RvcCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLmF0dHIoJ2RvdWJsZScpID09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfd2lkdGggPSAnMTIwcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlc3NlcmFfd2lkdGggPSAnMjY0cHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfbW9sID0gMjtcclxuICAgICAgICAgICAgICAgICAgICBtZW5vX2xlZnQgPSAtMztcclxuICAgICAgICAgICAgICAgICAgICBtZW5vX3RvcCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeSh0aGlzKS5wcmV2KCcudGVzc2VyYV9iYXNlJykuYXR0cignZG91YmxlJykgPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhfcHJldiA9ICcxMDhweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhfdGVzc2VyYV9wcmV2ID0gJzIzOHB4JztcclxuICAgICAgICAgICAgICAgICAgICBwcmV2X21vbCA9IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLm5leHQoKS5hdHRyKCdkb3VibGUnKSA9PSAnMScpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aF9uZXh0ID0gJzEwOHB4JztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aF90ZXNzZXJhX25leHQgPSAnMjM4cHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRfbW9sID0gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBsaW5rX3dpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJy01cHgnXHJcbiAgICAgICAgICAgICAgICB9LCBcImZhc3RcIik7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucHJldignLnRlc3NlcmFfYmFzZScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoX3ByZXYsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnLTJweCdcclxuICAgICAgICAgICAgICAgIH0sIFwiZmFzdFwiKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhfbmV4dCxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICctMnB4J1xyXG4gICAgICAgICAgICAgICAgfSwgXCJmYXN0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKCcudGVzc2VyYWJyYWNjaWFsZScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRlc3NlcmFfd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0ZXNfdG9wX28gKyBtZW5vX3RvcCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAodGVzX2xlZnRfbyAqIGxpbmtfbW9sKSArIG1lbm9fbGVmdFxyXG4gICAgICAgICAgICAgICAgfSwgJ2Zhc3QnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCkuZmluZCgnLnRlc3NlcmFicmFjY2lhbGUnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTQ1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aF90ZXNzZXJhX3ByZXYsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0ZXNfdG9wMSxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0ZXNfbGVmdDEgKiBwcmV2X21vbFxyXG4gICAgICAgICAgICAgICAgfSwgJ2Zhc3QnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkuZmluZCgnLnRlc3NlcmFicmFjY2lhbGUnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTQ1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aF90ZXNzZXJhX25leHQsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0ZXNfdG9wMSxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0ZXNfbGVmdDEgKiBuZXh0X21vbFxyXG4gICAgICAgICAgICAgICAgfSwgJ2Zhc3QnKTtcclxuICAgICAgICAgICAgICAgIHZhciBqID0galF1ZXJ5KHRoaXMpLmF0dHIoJ25yYmFzZScpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjZGV0dGFnbGlvX292ZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqQnJhY2NpYWxlW2pdLmNvZCAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuTW9zdHJhRGV0dGFnbGlvT3ZlcihqKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjZGV0dGFnbGlvX292ZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBqUXVlcnkoJy50ZXNzZXJhX2Jhc2UnKS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIWlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlua193aWR0aCA9ICc1MHB4JztcclxuICAgICAgICAgICAgICAgIHZhciB0ZXNzZXJhX3dpZHRoID0gJzExMHB4JztcclxuICAgICAgICAgICAgICAgIHZhciB3aWR0aF9uZXh0ID0gJzUwcHgnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoX3Rlc3NlcmFfbmV4dCA9ICcxMTBweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGhfcHJldiA9ICc1MHB4JztcclxuICAgICAgICAgICAgICAgIHZhciB3aWR0aF90ZXNzZXJhX3ByZXYgPSAnMTEwcHgnO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpbmtfbW9sID0gMTtcclxuICAgICAgICAgICAgICAgIHZhciBuZXh0X21vbCA9IDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJldl9tb2wgPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeSh0aGlzKS5hdHRyKCdkb3VibGUnKSA9PSAnMScpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX3dpZHRoID0gJzEwMHB4JztcclxuICAgICAgICAgICAgICAgICAgICB0ZXNzZXJhX3dpZHRoID0gJzIyMHB4JztcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX21vbCA9IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLnByZXYoJy50ZXNzZXJhX2Jhc2UnKS5hdHRyKCdkb3VibGUnKSA9PSAnMScpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aF9wcmV2ID0gJzEwMHB4JztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aF90ZXNzZXJhX3ByZXYgPSAnMjIwcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZfbW9sID0gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykubmV4dCgpLmF0dHIoJ2RvdWJsZScpID09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoX25leHQgPSAnMTAwcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoX3Rlc3NlcmFfbmV4dCA9ICcyMjBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dF9tb2wgPSAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc1MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogbGlua193aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICB9LCBcImZhc3RcIik7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucHJldignLnRlc3NlcmFfYmFzZScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc1MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhfcHJldixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICB9LCBcImZhc3RcIik7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc1MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhfbmV4dCxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICB9LCBcImZhc3RcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJy50ZXNzZXJhYnJhY2NpYWxlJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0ZXNzZXJhX3dpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGVzX3RvcCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0ZXNfbGVmdCAqIGxpbmtfbW9sXHJcbiAgICAgICAgICAgICAgICB9LCAnZmFzdCcpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5maW5kKCcudGVzc2VyYWJyYWNjaWFsZScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MnB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhfdGVzc2VyYV9uZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGVzX3RvcCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0ZXNfbGVmdCAqIG5leHRfbW9sXHJcbiAgICAgICAgICAgICAgICB9LCAnZmFzdCcpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnByZXYoKS5maW5kKCcudGVzc2VyYWJyYWNjaWFsZScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MnB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhfdGVzc2VyYV9wcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGVzX3RvcCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0ZXNfbGVmdCAqIHByZXZfbW9sXHJcbiAgICAgICAgICAgICAgICB9LCAnZmFzdCcpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjZGV0dGFnbGlvX292ZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBqUXVlcnkoXCIuZHJvcFwiKS5kcm9wcGFibGUoe1xyXG4gICAgICAgICAgICBhY2NlcHQ6ICcuZHJhZywudGVzc2VyYScsXHJcbiAgICAgICAgICAgIHRvbGVyYW5jZTogJ2ludGVyc2VjdCcsXHJcbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzOiAnZHJhZy1hY3RpdmUnLFxyXG4gICAgICAgICAgICBvdmVyOiBmdW5jdGlvbihldmVudCwgdWkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaW5rX3dpZHRoID0gJzYwcHgnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3NlcmFfd2lkdGggPSAnMTMycHgnO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpbmtfbW9sID0gMTtcclxuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykucGFyZW50KCkuYXR0cignZG91YmxlJykgPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua193aWR0aCA9ICcxMjBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVzc2VyYV93aWR0aCA9ICcyNjRweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19tb2wgPSAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGxpbmtfd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnLTVweCdcclxuICAgICAgICAgICAgICAgIH0sIFwiZmFzdFwiKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5maW5kKCcudGVzc2VyYWJyYWNjaWFsZScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRlc3NlcmFfd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0ZXNfdG9wX28sXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGVzX2xlZnRfbyAqIGxpbmtfbW9sXHJcbiAgICAgICAgICAgICAgICB9LCAnZmFzdCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvdXQ6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpbmtfd2lkdGggPSAnNTBweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVzc2VyYV93aWR0aCA9ICcxMTBweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlua19tb2wgPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5hdHRyKCdkb3VibGUnKSA9PSAnMScpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX3dpZHRoID0gJzEwMHB4JztcclxuICAgICAgICAgICAgICAgICAgICB0ZXNzZXJhX3dpZHRoID0gJzIyMHB4JztcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX21vbCA9IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBsaW5rX3dpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzBweCdcclxuICAgICAgICAgICAgICAgIH0sIFwiZmFzdFwiKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5maW5kKCcudGVzc2VyYWJyYWNjaWFsZScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MnB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGVzc2VyYV93aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHRlc190b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGVzX2xlZnQgKiBsaW5rX21vbFxyXG4gICAgICAgICAgICAgICAgfSwgJ2Zhc3QnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZHJvcDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc25hbWUgPSBqUXVlcnkodWkuZHJhZ2dhYmxlKS5hdHRyKCdub21lJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nc2t1ID0galF1ZXJ5KHVpLmRyYWdnYWJsZSkuYXR0cignaW1nc2t1Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2t1ID0galF1ZXJ5KHVpLmRyYWdnYWJsZSkuYXR0cignc2t1Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NvZF9pbnQgPSBqUXVlcnkodWkuZHJhZ2dhYmxlKS5hdHRyKCdjb2RfaW50Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZnByaWNlID0galF1ZXJ5KHVpLmRyYWdnYWJsZSkuYXR0cignZnByaWNlJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZG91YmxlID0galF1ZXJ5KHVpLmRyYWdnYWJsZSkuYXR0cignZG91YmxlJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5jaXNpYmxlID0galF1ZXJ5KHVpLmRyYWdnYWJsZSkuYXR0cignaW5jaXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmlnaGVfaW5jID0galF1ZXJ5KHVpLmRyYWdnYWJsZSkuYXR0cigncmlnaGVfaW5jJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4X2NoYXIgPSBqUXVlcnkodWkuZHJhZ2dhYmxlKS5hdHRyKCdtYXhfY2hhcicpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNvdHRyYWliYXNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlua193aWR0aCA9ICc1MHB4JztcclxuICAgICAgICAgICAgICAgIHZhciB0ZXNzZXJhX3dpZHRoID0gJzExMHB4JztcclxuICAgICAgICAgICAgICAgIHZhciBqID0gcGFyc2VJbnQoalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmF0dHIoJ25yYmFzZScpKTtcclxuICAgICAgICAgICAgICAgIHZhciBtb2xfbGVmdCA9IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGRvdWJsZSA9PSAwKSB8fCAoaiA8IE5yTGluayAtIDEpIHx8IChPYmpCcmFjY2lhbGVbal0uZGJsID09IDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICgnYmlnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjbGFzc2ljJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb3VibGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykucGFyZW50KCkuYXR0cignZG91YmxlJykgPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJpbXVvdmlEb3VibGUoaiwgdGhpcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygndGVzc2VyYV9iYXNlX2xpbmtfZG91YmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmF0dHIoJ2RvdWJsZScsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua193aWR0aCA9ICcxMDBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzc2VyYV93aWR0aCA9ICcyMjBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9sX2xlZnQgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmF0dHIoJ2RvdWJsZScpID09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLlJpbXVvdmlEb3VibGUoaiwgdGhpcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygndGVzc2VyYV9iYXNlX2xpbmsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdHRyYWliYXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdiaWcnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCd0ZXNzZXJhX2Jhc2VfbGlua19iaWcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdHRyYWliYXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtYmJzaG9ydCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ21iYmxvbmcnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCd0ZXNzZXJhX2Jhc2VfbWJiX2Ryb3AnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzZWltaWEnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCd0ZXNzZXJhX2Jhc2Vfc2VpbWlhX2Ryb3AnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nc2t1ID0gaW1nc2t1LnJlcGxhY2Uoc2t1LCAnZl8nICsgc2t1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygndGVzc2VyYV9iYXNlX2N1YmlhbW9fZHJvcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkuZmluZChcIi50ZXNzZXJhYnJhY2NpYWxlXCIpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoJyArIGltZ3NrdSArICcpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBsaW5rX3dpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgJ2Zhc3QnKTtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkuZmluZCgnLnRlc3NlcmFicmFjY2lhbGUnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGVzc2VyYV93aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB0ZXNfdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0ZXNfbGVmdCAqIG1vbF9sZWZ0XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgXCJmYXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5wcmV2KCkuY3NzKCd6LWluZGV4JywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5uZXh0KCkuY3NzKCd6LWluZGV4JywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5jc3MoJ3otaW5kZXgnLCAnMScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI3Rlc3NlcmFfZGV0YWlsJykuaGlkZSgwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvdWJsZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamRvdWJsZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kOiBza3UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogZnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogc25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWc6IGltZ3NrdSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZF9pbnQ6IHNjb2RfaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGJsOiBkb3VibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5BZ2dpdW5naURvdWJsZShqLCBvYmpkb3VibGUsIHRoaXMsIHNvdHRyYWliYXNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHNvdHRyYWliYXNlKSAmJiAoT2JqQnJhY2NpYWxlW2pdLmNvZCA9PSAnJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5yTGlua0Jhc2UtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmpCcmFjY2lhbGVbal0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZDogc2t1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGZwcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHNuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nOiBpbWdza3UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RfaW50OiBzY29kX2ludCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRibDogZG91YmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuQWdnaW9ybmFPYmpCcmFjY2lhbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZWxmLkNhbGNvbGFSaWVwaWxvZ28oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjZGl2X2hvdmVyJykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLkNvbnRyb2xsYU1pbmltb05MaW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLkNvbnRhVGVzc2VyZSgpID49IE51bWVyb01pbmltb0xpbmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2FjcXVpc3RhX2JyYWNjaWFsZScpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNtX2FjcXVpc3RhX2ZpeGVkJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI21fcmllcGlsb2dvX2JhZycpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNtX2J0bl9hY3F1aXN0YScpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNhY3F1aXN0YV9icmFjY2lhbGUnKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNtX2FjcXVpc3RhX2ZpeGVkJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjbV9yaWVwaWxvZ29fYmFnJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjbV9idG5fYWNxdWlzdGEnKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5jaXNpYmxlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTW9zdHJhRm9ybUluY2lzaW9uZShqLCByaWdoZV9pbmMsIG1heF9jaGFyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBEcmFnSW5Db3JzbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBWaXN1YWxpenphSG92ZXIoZWxlbSkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBwb3NpeiA9IGpRdWVyeShlbGVtKS5wb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBzY3JlZW5fdyA9IGpRdWVyeSgnI2NvbnRhaW5lcl90ZXNzZXJlJykud2lkdGgoKTtcclxuICAgICAgICB2YXIgZGV0YWlsX3cgPSBqUXVlcnkoJyN0ZXNzZXJhX2RldGFpbCcpLndpZHRoKCk7XHJcbiAgICAgICAgaWYgKHNjcmVlbl93IDwgKHBvc2l6LmxlZnQgKyBkZXRhaWxfdykpIHtcclxuICAgICAgICAgICAgcG9zaXoubGVmdCA9IHNjcmVlbl93IC0gZGV0YWlsX3cgLSAxMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpRdWVyeSgnI3Rlc3NlcmFfZGV0YWlsJykuY3NzKHtcclxuICAgICAgICAgICAgbGVmdDogKHBvc2l6LmxlZnQgLSAyNCksXHJcbiAgICAgICAgICAgIHRvcDogKHBvc2l6LnRvcClcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgYmdpbWcgPSBqUXVlcnkoZWxlbSkuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyk7XHJcbiAgICAgICAgdmFyIHNrdSA9IGpRdWVyeShlbGVtKS5hdHRyKCdza3UnKTtcclxuICAgICAgICB2YXIgY29kX2ludCA9IGpRdWVyeShlbGVtKS5hdHRyKCdjb2RfaW50Jyk7XHJcbiAgICAgICAgdmFyIGltZ3NrdSA9IGpRdWVyeShlbGVtKS5hdHRyKCdpbWdza3UnKTtcclxuICAgICAgICB2YXIgbm9tZSA9IGpRdWVyeShlbGVtKS5hdHRyKCdub21lJyk7XHJcbiAgICAgICAgdmFyIG1hdGVyaWFsZSA9IGpRdWVyeShlbGVtKS5hdHRyKCdtYXRlcmlhbGUnKTtcclxuICAgICAgICB2YXIgcHJpY2UgPSBqUXVlcnkoZWxlbSkuYXR0cigncHJpY2UnKTtcclxuICAgICAgICB2YXIgZnByaWNlID0galF1ZXJ5KGVsZW0pLmF0dHIoJ2ZwcmljZScpO1xyXG4gICAgICAgIHZhciBkb3VibGUgPSBqUXVlcnkoZWxlbSkuYXR0cignZG91YmxlJyk7XHJcbiAgICAgICAgdmFyIGluY2lzaWJsZSA9IGpRdWVyeShlbGVtKS5hdHRyKCdpbmNpc2libGUnKTtcclxuICAgICAgICB2YXIgcmlnaGVfaW5jID0galF1ZXJ5KGVsZW0pLmF0dHIoJ3JpZ2hlX2luYycpO1xyXG4gICAgICAgIHZhciBtYXhfY2hhciA9IGpRdWVyeShlbGVtKS5hdHRyKCdtYXhfY2hhcicpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmNzcygnbWFyZ2luLXRvcCcsICcwcHgnKTtcclxuICAgICAgICBqUXVlcnkoJyNpbWdkZXRhaWwnKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBiZ2ltZyk7XHJcbiAgICAgICAgalF1ZXJ5KCcjaW1nZGV0YWlsJykuYXR0cignc2t1Jywgc2t1KTtcclxuICAgICAgICBqUXVlcnkoJyNpbWdkZXRhaWwnKS5hdHRyKCdjb2RfaW50JywgY29kX2ludCk7XHJcbiAgICAgICAgalF1ZXJ5KCcjaW1nZGV0YWlsJykuYXR0cignaW1nc2t1JywgaW1nc2t1KTtcclxuICAgICAgICBqUXVlcnkoJyNpbWdkZXRhaWwnKS5hdHRyKCdmcHJpY2UnLCBmcHJpY2UpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmF0dHIoJ3ByaWNlJywgcHJpY2UpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmF0dHIoJ25vbWUnLCBub21lKTtcclxuICAgICAgICBqUXVlcnkoJyNpbWdkZXRhaWwnKS5hdHRyKCdtYXRlcmlhbGUnLCBtYXRlcmlhbGUpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmF0dHIoJ2RvdWJsZScsIGRvdWJsZSk7XHJcbiAgICAgICAgalF1ZXJ5KCcjaW1nZGV0YWlsJykuYXR0cignaW5jaXNpYmxlJywgaW5jaXNpYmxlKTtcclxuICAgICAgICBqUXVlcnkoJyNpbWdkZXRhaWwnKS5hdHRyKCdyaWdoZV9pbmMnLCByaWdoZV9pbmMpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmF0dHIoJ21heF9jaGFyJywgbWF4X2NoYXIpO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHN0cmh0bWwgPSAnPHNwYW4gY2xhc3M9XCJ0aXRvbG9kZXRhaWxcIj4nICsgbm9tZSArICc8L3NwYW4+PGJyPic7XHJcbiAgICAgICAgLy9zdHJodG1sICs9IG1hdGVyaWFsZSArICc8YnI+JztcclxuICAgICAgICBzdHJodG1sICs9IHNlbGYuR2V0UHJpY2VIdG1sKHByaWNlLCBmcHJpY2UsICdwcmljZWRldGFpbCcpO1xyXG5cclxuICAgICAgICBqUXVlcnkoJyN0ZXh0ZGV0YWlsJykuaHRtbChzdHJodG1sKTtcclxuICAgICAgICBqUXVlcnkoJyN0ZXNzZXJhX2RldGFpbCcpLnNob3coMCk7XHJcbiAgICAgICAgLy9qUXVlcnkoJyNkaXZfaG92ZXInKS5mYWRlSW4oMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRQcmljZUh0bWwocHJpY2UsIGZpbmFsX3ByaWNlLCBzdHJjbGFzcykge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciB2cHJpY2UgPSBwYXJzZUZsb2F0KHByaWNlKTtcclxuICAgICAgICB2YXIgdmZpbmFsX3ByaWNlID0gcGFyc2VGbG9hdChmaW5hbF9wcmljZSk7XHJcblxyXG4gICAgICAgIGlmICghUHVsc2FudGVBY3F1aXN0YSkge1xyXG4gICAgICAgICAgICBzdHJjbGFzcyArPSAnIG5vcHJpY2UnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGh0bWxwcmljZSA9ICcnO1xyXG4gICAgICAgIHZhciBodG1sZmluYWxfcHJpY2UgPSAnJztcclxuICAgICAgICBpZiAodnByaWNlICE9IHZmaW5hbF9wcmljZSkge1xyXG4gICAgICAgICAgICBodG1sZmluYWxfcHJpY2UgPSAnPHAgY2xhc3M9XCJvbGQtcHJpY2VcIj48c3BhbiBjbGFzcz1cInByaWNlXCI+JyArIHNlbGYuRGlzcGxheUN1cnJlbmN5KHZwcmljZSkgKyAnICcgKyBTaW1ib2xvVmFsdXRhICsgJyA8L3NwYW4+PC9wPic7XHJcbiAgICAgICAgICAgIGh0bWxwcmljZSA9ICc8ZGl2IGNsYXNzPVwiJyArIHN0cmNsYXNzICsgJ1wiPicgKyBodG1sZmluYWxfcHJpY2UgKyBzZWxmLkRpc3BsYXlDdXJyZW5jeSh2ZmluYWxfcHJpY2UpICsgJyAnICsgU2ltYm9sb1ZhbHV0YSArICc8L2Rpdj4nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGh0bWxwcmljZSA9ICc8ZGl2IGNsYXNzPVwiJyArIHN0cmNsYXNzICsgJ1wiPicgKyBodG1sZmluYWxfcHJpY2UgKyBzZWxmLkRpc3BsYXlDdXJyZW5jeSh2cHJpY2UpICsgJyAnICsgU2ltYm9sb1ZhbHV0YSArICc8L2Rpdj4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaHRtbHByaWNlO1xyXG4gICAgfVxyXG4gICAgRGlzcGxheUN1cnJlbmN5KHZhbG9yZSkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KE1hdGgucm91bmQodmFsb3JlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcclxuICAgIH1cclxuXHJcbiAgICBlc2NfcXVvdCh0ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZUFsbCgnXCInLCAnJnF1b3Q7Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgUmVmcmVzaFNsaWRlRmlsdHJpKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBzaXplID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBsYXJnaCA9IDA7XHJcbiAgICAgICAgdmFyIG5yX2xpID0gMDtcclxuICAgICAgICBqUXVlcnkoJyNmaWx0cmlfYXR0aXZpIC50b3VjaGNhcm91c2VsIHVsIGxpJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICBsYXJnaCArPSBqUXVlcnkodGhpcykud2lkdGgoKTtcclxuICAgICAgICAgICAgbnJfbGkrKztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGxhcmdoID4gc2l6ZS53aWR0aCkge1xyXG4gICAgICAgICAgICBzZWxmLkZpbHRyaVRDID0galF1ZXJ5KCcjZmlsdHJpX2F0dGl2aSAudG91Y2hjYXJvdXNlbCcpLnRvdWNoQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBhZ2luZ05hdkNvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbk5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb0xhc3Q6IHRydWVcclxuICAgICAgICAgICAgfSkuZGF0YSgndG91Y2hDYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNmaWx0cmlfYXR0aXZpIC50b3VjaGNhcm91c2VsIHVsJykud2lkdGgobGFyZ2ggKyAxMCk7XHJcbiAgICAgICAgICAgIEZpbHRyaVRDLmdvVG8obnJfbGkpOyAvL2xpX3Z1b3RvO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGYuRmlsdHJpVEMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGluaXREZWZhdWx0KCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGpRdWVyeSgnI2JyYWNjaWFsZScpLnNvcnRhYmxlKHtcclxuICAgICAgICAgICAgaGFuZGxlOiAnLmhhbmRsZXRlc3NlcmEnLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICAgICAgICAgIGFwcGVuZFRvOiAnYm9keScsXHJcbiAgICAgICAgICAgIGhlbHBlcjogJ29yaWdpbmFsJyxcclxuICAgICAgICAgICAgZGVsYXk6IHNlbGYuRGVsYXlUb3VjaCxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLCAvLyghaXNNb2JpbGUpLFxyXG4gICAgICAgICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGFydDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLlNvcnRTdGFydCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodWkuaXRlbSkuZmluZCgnLnN0ZWxsYV9pbmNpc2lvbmUnKS5mYWRlT3V0KDIwMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KCcjdG9vbHRpcF9pbmNpc2lvbmUnKS5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjdG9vbHRpcF9pbmNpc2lvbmUnKS5mYWRlT3V0KDIwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5Tb3J0U3RhcnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHZhciBqID0galF1ZXJ5KHVpLml0ZW0pLmF0dHIoJ25yYmFzZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iakJyYWNjaWFsZVtqXS5pbmNpc2lvbiA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYmFzZV8nICsgaikuZmluZCgnLnN0ZWxsYV9pbmNpc2lvbmUnKS5mYWRlSW4oMjAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGpRdWVyeSh1aS5pdGVtKS5wcmV2KCkuY3NzKCd6LWluZGV4JywgJycpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHVpLml0ZW0pLm5leHQoKS5jc3MoJ3otaW5kZXgnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodWkuaXRlbSkuY3NzKCd6LWluZGV4JywgJzEnKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuQWdnaW9ybmFPYmpCcmFjY2lhbGUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcclxuICAgICAgICAgICAgICAgIHVpLml0ZW0udW5iaW5kKFwiY2xpY2tcIik7XHJcbiAgICAgICAgICAgICAgICB1aS5pdGVtLm9uZShcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbmUtdGltZS1jbGlja1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0galF1ZXJ5KHRoaXMpLmZpbmQoJy5zdGVsbGFfaW5jaXNpb25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqUXVlcnkoZWxlbWVudCkuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKCcuc3RlbGxhX2luY2lzaW9uZScpLmZhZGVPdXQoMjAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuTW9zdHJhVG9vbGlwSW5jaXNpb25lKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJy5zdGVsbGFfaW5jaXNpb25lJykuZmFkZUluKDIwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG4gICAgICAgICAgICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICBqUXVlcnkoXCIjYnJhY2NpYWxlXCIpLnNvcnRhYmxlKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGlmZiA9IE1hdGguYWJzKHVpLm9yaWdpbmFsUG9zaXRpb24udG9wIC0gdWkucG9zaXRpb24udG9wKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaWZmID4gNjApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLlJpbXVvdmlUZXNzZXJhKGpRdWVyeSh1aS5pdGVtKSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHNpemUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGpRdWVyeSgnI2JyYWNjaWFsZV96b29tJykud2lkdGgoc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgc2VsZi5CcmFjY2lhbGVab29tID0galF1ZXJ5KCcjYnJhY2NpYWxlX3pvb20nKS50b3VjaENhcm91c2VsKHtcclxuICAgICAgICAgICAgaXRlbUZhbGxiYWNrV2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgc2Nyb2xsYmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgZHJhZ1VzaW5nTW91c2U6IGZhbHNlXHJcbiAgICAgICAgfSkuZGF0YShcInRvdWNoQ2Fyb3VzZWxcIik7XHJcbiAgICAgICAgc2VsZi5BZ2dpb3JuYVRyaWdnZXJUZXNzZXJlKCk7XHJcbiAgICB9XHJcbiAgICBNb3N0cmFUb29saXBJbmNpc2lvbmUoZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmIChqUXVlcnkoJyN0b29sdGlwX2luY2lzaW9uZScpLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgdmFyIGpzdGVsbGEgPSBqUXVlcnkoJyN0b29sdGlwX2luY2lzaW9uZScpLmF0dHIoJ25yYmFzZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBqc3RlbGxhKS5maW5kKCcuc3RlbGxhX2luY2lzaW9uZScpLmZhZGVJbigyMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaiA9IGpRdWVyeShlbGVtZW50KS5wYXJlbnQoKS5hdHRyKCducmJhc2UnKTtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSBqUXVlcnkoZWxlbWVudCkucGFyZW50KCkucG9zaXRpb24oKTtcclxuICAgICAgICB2YXIgd3BhcmVudCA9IGpRdWVyeShlbGVtZW50KS5wYXJlbnQoKS53aWR0aCgpO1xyXG4gICAgICAgIHZhciBsZWZ0ID0gcG9zaXRpb24ubGVmdCArICgod3BhcmVudCAtIGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykud2lkdGgoKSkgLyAyKSArIHNlbGYuT2Zmc2V0VG9vbFRpcDtcclxuICAgICAgICBqUXVlcnkoJyN0b29sdGlwX2luY2lzaW9uZScpLmF0dHIoJ25yYmFzZScsIGopO1xyXG4gICAgICAgIGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykuY3NzKFwiZm9udC1mYW1pbHlcIiwgXCInXCIgKyBPYmpCcmFjY2lhbGVbal0uZm9udCArIFwiJywgc2Fucy1zZXJpZlwiKTtcclxuICAgICAgICBqUXVlcnkoJyN0b29sdGlwX2luY2lzaW9uZScpLmNzcygnbGVmdCcsIGxlZnQpO1xyXG4gICAgICAgIHZhciBzdHJodG1sID0gJzxkaXYgY2xhc3M9XCJ0ZXh0Y29udGFpbmVyXCI+JztcclxuICAgICAgICBpZiAoT2JqQnJhY2NpYWxlW2pdLmwyID09ICcnKSB7XHJcbiAgICAgICAgICAgIHN0cmh0bWwgKz0gJzxkaXYgY2xhc3M9XCJpbm5lclwiPicgKyBPYmpCcmFjY2lhbGVbal0ubDEgKyAnPC9kaXY+JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdHJodG1sICs9ICc8ZGl2IGNsYXNzPVwiaW5uZXJcIj4nICsgT2JqQnJhY2NpYWxlW2pdLmwxICsgJzxicj4nICsgT2JqQnJhY2NpYWxlW2pdLmwyICsgJzwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0cmh0bWwgKz0gJzwvZGl2Pic7XHJcbiAgICAgICAgalF1ZXJ5KCcjdG9vbHRpcF9pbmNpc2lvbmUnKS5odG1sKHN0cmh0bWwpO1xyXG4gICAgICAgIGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykuZmFkZUluKDIwMCk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmZhZGVPdXQoMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBBZ2dpb3JuYVRyaWdnZXJUZXNzZXJlKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gc2VsZi5pc01vYmlsZTtcclxuICAgICAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLnRlc3NlcmFcIikuZHJhZ2dhYmxlKHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5tZW50OiAnZG9jdW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgcmV2ZXJ0OiAnaW52YWxpZCcsXHJcbiAgICAgICAgICAgICAgICBoZWxwZXI6ICdjbG9uZScsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGU6ICdkaXYuZHJhZycsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMCxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcclxuICAgICAgICAgICAgICAgIGRlbGF5OiBzZWxmLkRlbGF5VG91Y2gsXHJcbiAgICAgICAgICAgICAgICBhcHBlbmRUbzogJ2JvZHknLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuQ2hpdWRpQmFycmFSaWVwaWxvZ28oKTtcclxuICAgICAgICAgICAgICAgICAgICBEcmFnSW5Db3JzbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3RvcDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRHJhZ0luQ29yc28gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgalF1ZXJ5KCcuZHJhZycpLnN3aXBlKHtcclxuICAgICAgICAgICAgICAgIHN3aXBlVXA6IGZ1bmN0aW9uKGV2ZW50LCBkaXJlY3Rpb24sIGRpc3RhbmNlLCBkdXJhdGlvbiwgZmluZ2VyQ291bnQsIGZpbmdlckRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZHVyYXRpb24gPCBzZWxmLkRlbGF5VG91Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBqUXVlcnkod2luZG93KS5zY3JvbGxUb3AoKSArICgyLjUgKiBkaXN0YW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwLCAnc3dpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3dpcGVEb3duOiBmdW5jdGlvbihldmVudCwgZGlyZWN0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24sIGZpbmdlckNvdW50LCBmaW5nZXJEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGR1cmF0aW9uIDwgc2VsZi5EZWxheVRvdWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogalF1ZXJ5KHdpbmRvdykuc2Nyb2xsVG9wKCkgLSAoMi41ICogZGlzdGFuY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCwgJ3N3aW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFsbG93UGFnZVNjcm9sbDogXCJhdXRvXCJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBqUXVlcnkoXCIuZHJhZ1wiKS5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbm1lbnQ6ICdkb2N1bWVudCcsXHJcbiAgICAgICAgICAgICAgICByZXZlcnQ6ICdpbnZhbGlkJyxcclxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZTogJ2Rpdi5kcmFnJyxcclxuICAgICAgICAgICAgICAgIGhlbHBlcjogJ2Nsb25lJyxcclxuICAgICAgICAgICAgICAgIHNjcm9sbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6ICcxMDAnLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICAgICAgICAgICAgYXBwZW5kVG86ICdib2R5JyxcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiBmdW5jdGlvbihldmVudCwgdWkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLkNoaXVkaUJhcnJhUmllcGlsb2dvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgRHJhZ0luQ29yc28gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIERyYWdJbkNvcnNvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjdGVzc2VyYV9kZXRhaWwnKS5oaWRlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2NvbmZfc3VnZ2VyaW1lbnRvJykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpRdWVyeSgnLnRlc3NlcmEnKS5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIWlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIURyYWdJbkNvcnNvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuSW50ZXJ2YWxsb0hvdmVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5WaXN1YWxpenphSG92ZXIoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoJyN0ZXNzZXJhX2RldGFpbCcpLm1vdXNlbGVhdmUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghRHJhZ0luQ29yc28pIHtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyN0ZXNzZXJhX2RldGFpbCcpLmhpZGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuSW50ZXJ2YWxsb0hvdmVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoJy5zdGVsbGFfaW5jaXNpb25lJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIE1vc3RyYVRvb2x0aXBJbmNpc2lvbmUodGhpcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBqID0galF1ZXJ5KHRoaXMpLmF0dHIoJ25yYmFzZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBqKS5maW5kKCcuc3RlbGxhX2luY2lzaW9uZScpLmZhZGVJbigyMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qXHJcblx0IGpRdWVyeSgnI2Rpdl9ob3ZlcicpLm1vdXNlZW50ZXIoZnVuY3Rpb24gKCkge1xyXG5cdCBpZiAoIURyYWdJbkNvcnNvKSB7XHJcblx0IGlmIChqUXVlcnkoJyN0ZXNzZXJhX2RldGFpbDpob3ZlcicpLmxlbmd0aCA9PSAwKSB7XHJcblx0IGpRdWVyeSgnI2Rpdl9ob3ZlcicpLmZhZGVPdXQoMjAwKTtcclxuXHQgY2xlYXJUaW1lb3V0KHNlbGYuSW50ZXJ2YWxsb0hvdmVyKTtcclxuXHQgfVxyXG5cdCB9XHJcblx0IH0pO1xyXG5cdCAqL1xyXG4gICAgfVxyXG4gICAgU2V0dGFQb3NpemlvbmlUZXNzZXJlKFRpcG9CcmFjY2lhbGUpIHtcclxuICAgICAgICBzd2l0Y2ggKFRpcG9CcmFjY2lhbGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnY2xhc3NpYyc6XHJcbiAgICAgICAgICAgICAgICB0ZXNfdG9wID0gLTIzO1xyXG4gICAgICAgICAgICAgICAgdGVzX2xlZnQgPSAtMzA7XHJcbiAgICAgICAgICAgICAgICB0ZXNfdG9wMSA9IC0yNTtcclxuICAgICAgICAgICAgICAgIHRlc19sZWZ0MSA9IC0zMztcclxuICAgICAgICAgICAgICAgIHRlc190b3BfbyA9IC0yNjtcclxuICAgICAgICAgICAgICAgIHRlc19sZWZ0X28gPSAtMzU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYmlnJzpcclxuICAgICAgICAgICAgICAgIHRlc190b3AgPSAtMTM7XHJcbiAgICAgICAgICAgICAgICB0ZXNfbGVmdCA9IC0zMDtcclxuICAgICAgICAgICAgICAgIHRlc190b3AxID0gLTE0O1xyXG4gICAgICAgICAgICAgICAgdGVzX2xlZnQxID0gLTM1O1xyXG4gICAgICAgICAgICAgICAgdGVzX3RvcF9vID0gLTE2O1xyXG4gICAgICAgICAgICAgICAgdGVzX2xlZnRfbyA9IC0zNTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtYmJzaG9ydCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ21iYmxvbmcnOlxyXG4gICAgICAgICAgICAgICAgdGVzX3RvcCA9IC0yNDtcclxuICAgICAgICAgICAgICAgIHRlc19sZWZ0ID0gLTMxO1xyXG4gICAgICAgICAgICAgICAgdGVzX3RvcDEgPSAtMjY7XHJcbiAgICAgICAgICAgICAgICB0ZXNfbGVmdDEgPSAtMzM7XHJcbiAgICAgICAgICAgICAgICB0ZXNfdG9wX28gPSAtMjg7XHJcbiAgICAgICAgICAgICAgICB0ZXNfbGVmdF9vID0gLTM3O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NlaW1pYSc6XHJcbiAgICAgICAgICAgICAgICB0ZXNfdG9wID0gNjtcclxuICAgICAgICAgICAgICAgIHRlc19sZWZ0ID0gLTMxO1xyXG4gICAgICAgICAgICAgICAgdGVzX3RvcDEgPSA4O1xyXG4gICAgICAgICAgICAgICAgdGVzX2xlZnQxID0gLTMzO1xyXG4gICAgICAgICAgICAgICAgdGVzX3RvcF9vID0gMTA7XHJcbiAgICAgICAgICAgICAgICB0ZXNfbGVmdF9vID0gLTM3O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0ZXNfdG9wID0gLTI0O1xyXG4gICAgICAgICAgICAgICAgdGVzX2xlZnQgPSAtMzE7XHJcbiAgICAgICAgICAgICAgICB0ZXNfdG9wMSA9IC0yNjtcclxuICAgICAgICAgICAgICAgIHRlc19sZWZ0MSA9IC0zMztcclxuICAgICAgICAgICAgICAgIHRlc190b3BfbyA9IC0yODtcclxuICAgICAgICAgICAgICAgIHRlc19sZWZ0X28gPSAtMzc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBDaGl1ZGlCYXJyYVJpZXBpbG9nbygpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBpZiAoc2VsZi5TY3JvbGxCYXIpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjcmllcGlsb2dvX3Rlc3NlcmUnKS5wZXJmZWN0U2Nyb2xsYmFyKCdkZXN0cm95Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGpRdWVyeSgnI3JpZXBpbG9nb190ZXNzZXJlJykuaGlkZSgyMDApO1xyXG4gICAgICAgIC8valF1ZXJ5KFwiI3JpZV90b3RcIikuaGlkZSgwKTtcclxuICAgICAgICBqUXVlcnkoJyNyaWVwaWxvZ29fYnJhY2NpYWxlJykuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybCgnICsgU0tJTlVSTCArICcvaW1nL2JncmllcGlsb2dvLnBuZyknKTtcclxuICAgIH1cclxuICAgIE1vc3RyYURldHRhZ2xpb092ZXIoaikge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBwbmd0ZXNzZXJhID0gJ3Rlc3NlcmFfYmFzZV9kcmFnJztcclxuICAgICAgICB2YXIgYWRkY2xhc3MgPSAnJztcclxuICAgICAgICBzd2l0Y2ggKCdiaWcnKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NsYXNzaWMnOlxyXG4gICAgICAgICAgICAgICAgcG5ndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqQnJhY2NpYWxlW2pdLmRibCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG5ndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZ19kb3VibGUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JpZyc6XHJcbiAgICAgICAgICAgICAgICBwbmd0ZXNzZXJhID0gJ3Rlc3NlcmFfYmFzZV9kcmFnX2JpZyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ21iYnNob3J0JzpcclxuICAgICAgICAgICAgY2FzZSAnbWJibG9uZyc6XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNkZXR0YWdsaW9fb3ZlciAucmllX3Rlc19pbWcnKS5hZGRDbGFzcygnbm9wZW5kZW50aScpO1xyXG4gICAgICAgICAgICAgICAgcG5ndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZ19tYmInO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdzZWltaWEnOlxyXG4gICAgICAgICAgICAgICAgcG5ndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZ19zZWltaWEnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjZGV0dGFnbGlvX292ZXIgLnJpZV90ZXNfaW1nJykuYWRkQ2xhc3MoJ25vcGVuZGVudGknKTtcclxuICAgICAgICAgICAgICAgIHBuZ3Rlc3NlcmEgPSAndGVzc2VyYV9iYXNlX2RyYWdfY3ViaWFtbyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBiZ2ltYWdlID0gJ3VybCgnICsgT2JqQnJhY2NpYWxlW2pdLmltZyArICcpLCB1cmwoJyArIFNLSU5VUkwgKyAnaW1nLycgKyBwbmd0ZXNzZXJhICsgJy5wbmcpJztcclxuICAgICAgICBqUXVlcnkoJyNkZXR0YWdsaW9fb3ZlciAucmllX3Rlc19pbWcnKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBiZ2ltYWdlKTtcclxuICAgICAgICB2YXIgc3RyaHRtbCA9IE9iakJyYWNjaWFsZVtqXS5uYW1lICsgJzxicj4nXHJcbiAgICAgICAgc3RyaHRtbCArPSBzZWxmLkdldFByaWNlSHRtbChPYmpCcmFjY2lhbGVbal0ucHJpY2UsIE9iakJyYWNjaWFsZVtqXS5wcmljZSwgJ3ByaWNlZGV0YWlsJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcjZGV0dGFnbGlvX292ZXIgLnRlc3RvJykuaHRtbChzdHJodG1sKTtcclxuICAgICAgICBqUXVlcnkoJyNkZXR0YWdsaW9fb3ZlcicpLnNob3coKTtcclxuICAgIH1cclxuICAgIEFnZ2lvcm5hT2JqQnJhY2NpYWxlKCkge1xyXG4gICAgICAgIGpRdWVyeSgnI2JyYWNjaWFsZSAudGVzc2VyYV9iYXNlJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICAgICAgICB2YXIgaiA9IHBhcnNlSW50KGpRdWVyeSh0aGlzKS5hdHRyKCducmJhc2UnKSk7XHJcbiAgICAgICAgICAgIE9iakJyYWNjaWFsZVtqXS5pZCA9IGluZGV4O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgQWdnaXVuZ2lEb3VibGUoaiwgb2JqZG91YmxlLCBlbGVtZW50LCBzb3R0cmFpYmFzZSkge1xyXG4gICAgICAgIGlmICgoc290dHJhaWJhc2UpICYmIChPYmpCcmFjY2lhbGVbal0uY29kID09ICcnKSkge1xyXG4gICAgICAgICAgICBOckxpbmtCYXNlLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iakJyYWNjaWFsZVtqXSA9IG9iamRvdWJsZTtcclxuICAgICAgICB2YXIgaWR0aGlzID0galF1ZXJ5KGVsZW1lbnQpLnBhcmVudCgpLmF0dHIoJ25yYmFzZScpO1xyXG4gICAgICAgIHZhciBpZG5leHQgPSBqUXVlcnkoZWxlbWVudCkucGFyZW50KCkubmV4dCgpLmF0dHIoJ25yYmFzZScpO1xyXG4gICAgICAgIGlmIChqUXVlcnkoJyNiYXNlXycgKyBpZG5leHQpLmF0dHIoJ2RvdWJsZScpID09ICcxJykge1xyXG4gICAgICAgICAgICBSaW11b3ZpRG91YmxlKGlkbmV4dCwgbnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGpRdWVyeShlbGVtZW50KS5wYXJlbnQoKS5uZXh0KCkuaGlkZSgpO1xyXG4gICAgICAgIGpRdWVyeSgnI2Jhc2VfJyArIGlkbmV4dCkuYXBwZW5kVG8oJyNiYXNlXycgKyBpZHRoaXMpO1xyXG4gICAgICAgIGpRdWVyeShlbGVtZW50KS5wYXJlbnQoKS5maW5kKCcuaGFuZGxldGVzc2VyYScpLmNzcygnd2lkdGgnLCAnOTJweCcpO1xyXG4gICAgICAgIGlmICgoc290dHJhaWJhc2UpICYmIChPYmpCcmFjY2lhbGVbaWRuZXh0XS5jb2QgPT0gJycpKSB7XHJcbiAgICAgICAgICAgIE5yTGlua0Jhc2UtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqQnJhY2NpYWxlW2lkbmV4dF0uaWQgPSBqO1xyXG4gICAgICAgIE9iakJyYWNjaWFsZVtpZG5leHRdLmNvZCA9ICdkb3VibGUnO1xyXG4gICAgfVxyXG4gICAgUmltdW92aURvdWJsZShqLCBlbGVtZW50LCBzb3R0cmFpYmFzZSkge1xyXG4gICAgICAgIHZhciBpZHRoaXM7XHJcbiAgICAgICAgdmFyIGlkbmV4dDtcclxuICAgICAgICBpZiAoZWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlkdGhpcyA9IGpRdWVyeShlbGVtZW50KS5wYXJlbnQoKS5hdHRyKCducmJhc2UnKTtcclxuICAgICAgICAgICAgaWRuZXh0ID0galF1ZXJ5KGVsZW1lbnQpLnBhcmVudCgpLmZpbmQoJy50ZXNzZXJhX2Jhc2UnKS5hdHRyKCducmJhc2UnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZHRoaXMgPSBqO1xyXG4gICAgICAgICAgICBpZG5leHQgPSBqUXVlcnkoJyNiYXNlXycgKyBqKS5maW5kKCcudGVzc2VyYV9iYXNlJykuYXR0cignbnJiYXNlJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2VfJyArIGlkdGhpcykuY3NzKCd3aWR0aCcsICc1MHB4Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGpRdWVyeSgnI2Jhc2VfJyArIGlkdGhpcykuYXR0cignZG91YmxlJywgJzAnKTtcclxuICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBpZHRoaXMpLnJlbW92ZUNsYXNzKCd0ZXNzZXJhX2Jhc2VfbGlua19kb3VibGUnKTtcclxuICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBpZG5leHQpLmluc2VydEFmdGVyKCcjYmFzZV8nICsgaWR0aGlzKTtcclxuICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBpZG5leHQpLmZpbmQoJy50ZXNzZXJhYnJhY2NpYWxlJykuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ25vbmUnKTtcclxuICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBpZG5leHQpLmZpbmQoJy5zdGVsbGFfaW5jaXNpb25lJykuaGlkZSgpO1xyXG4gICAgICAgIGpRdWVyeSgnI2Jhc2VfJyArIGlkdGhpcykuZmluZCgnLnN0ZWxsYV9pbmNpc2lvbmUnKS5oaWRlKCk7XHJcbiAgICAgICAgalF1ZXJ5KCcjYmFzZV8nICsgaWRuZXh0KS5zaG93KCk7XHJcbiAgICAgICAgalF1ZXJ5KCcjYmFzZV8nICsgaWR0aGlzKS5wYXJlbnQoKS5maW5kKCcuaGFuZGxldGVzc2VyYScpLmNzcygnd2lkdGgnLCAnNDZweCcpO1xyXG4gICAgICAgIGlmIChzb3R0cmFpYmFzZSkge1xyXG4gICAgICAgICAgICBOckxpbmtCYXNlKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPYmpCcmFjY2lhbGVbaWR0aGlzXSA9IHtcclxuICAgICAgICAgICAgaWQ6IGosXHJcbiAgICAgICAgICAgIGNvZDogJycsXHJcbiAgICAgICAgICAgIHByaWNlOiAwLFxyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgaW1nOiAnJyxcclxuICAgICAgICAgICAgY29kX2ludDogJycsXHJcbiAgICAgICAgICAgIGRibDogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgT2JqQnJhY2NpYWxlW2lkbmV4dF0gPSB7XHJcbiAgICAgICAgICAgIGlkOiBqLFxyXG4gICAgICAgICAgICBjb2Q6ICcnLFxyXG4gICAgICAgICAgICBwcmljZTogMCxcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIGltZzogJycsXHJcbiAgICAgICAgICAgIGNvZF9pbnQ6ICcnLFxyXG4gICAgICAgICAgICBkYmw6IDBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgUmltdW92aVRlc3NlcmEoaWQsIHNpbGVudCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBqID0gMDtcclxuICAgICAgICB2YXIgVGlwb0JyYWNjaWFsZSA9ICdiaWcnO1xyXG4gICAgICAgIGlmIChqUXVlcnkoaWQpLmhhc0NsYXNzKCd4X3Rlc3NlcmEnKSkge1xyXG4gICAgICAgICAgICBqID0galF1ZXJ5KGlkKS5hdHRyKCducnRlcycpO1xyXG4gICAgICAgICAgICB2YXIgaWRwYXIgPSBqUXVlcnkodGhpcykucGFyZW50KCk7XHJcbiAgICAgICAgICAgIGpRdWVyeShpZHBhcikucmVtb3ZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaiA9IGpRdWVyeShpZCkuYXR0cignbnJiYXNlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoalF1ZXJ5KCcjYmFzZV8nICsgaikuYXR0cignZG91YmxlJykgPT0gJzEnKSB7XHJcbiAgICAgICAgICAgIHNlbGYuUmltdW92aURvdWJsZShqLCBudWxsLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9iakJyYWNjaWFsZVtqXSA9IHtcclxuICAgICAgICAgICAgaWQ6IGosXHJcbiAgICAgICAgICAgIGNvZDogJycsXHJcbiAgICAgICAgICAgIHByaWNlOiAwLFxyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgaW1nOiAnJyxcclxuICAgICAgICAgICAgY29kX2ludDogJydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICgoVGlwb0JyYWNjaWFsZSA9PSAnY2xhc3NpYycpIHx8IChUaXBvQnJhY2NpYWxlID09ICdiaWcnKSkge1xyXG4gICAgICAgICAgICBOckxpbmtCYXNlKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBqKS5maW5kKCcgLnRlc3NlcmFicmFjY2lhbGUnKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAnbm9uZScpO1xyXG4gICAgICAgIHN3aXRjaCAoVGlwb0JyYWNjaWFsZSkge1xyXG4gICAgICAgICAgICBjYXNlICdjbGFzc2ljJzpcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2VfJyArIGopLnJlbW92ZUNsYXNzKCd0ZXNzZXJhX2Jhc2VfbGluaycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JpZyc6XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBqKS5yZW1vdmVDbGFzcygndGVzc2VyYV9iYXNlX2xpbmtfYmlnJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbWJic2hvcnQnOlxyXG4gICAgICAgICAgICBjYXNlICdtYmJsb25nJzpcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2VfJyArIGopLnJlbW92ZUNsYXNzKCd0ZXNzZXJhX2Jhc2VfbWJiX2Ryb3AnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzZWltaWEnOlxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjYmFzZV8nICsgaikucmVtb3ZlQ2xhc3MoJ3Rlc3NlcmFfYmFzZV9zZWltaWFfZHJvcCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBqKS5yZW1vdmVDbGFzcygndGVzc2VyYV9iYXNlX2N1YmlhbW9fZHJvcCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNpbGVudCkgc2VsZi5DYWxjb2xhUmllcGlsb2dvKHRydWUpO1xyXG4gICAgICAgIGlmICgoc2VsZi5Db250YVRlc3NlcmUoKSA9PSAwKSAmJiAoUHVsc2FudGVBY3F1aXN0YSkpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjYWNxdWlzdGFfYnJhY2NpYWxlJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjbV9idG5fYWNxdWlzdGEnKS5hZGRDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNtX2FjcXVpc3RhX2ZpeGVkJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjbV9yaWVwaWxvZ29fYmFnJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKChzZWxmLkNvbnRyb2xsYU1pbmltb05MaW5rKSAmJiAoc2VsZi5Db250YVRlc3NlcmUoKSA8IE51bWVyb01pbmltb0xpbmspICYmIChQdWxzYW50ZUFjcXVpc3RhKSkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNhY3F1aXN0YV9icmFjY2lhbGUnKS5hZGRDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNtX2J0bl9hY3F1aXN0YScpLmFkZENsYXNzKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI21fYWNxdWlzdGFfZml4ZWQnKS5hZGRDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNtX3JpZXBpbG9nb19iYWcnKS5hZGRDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJpbXVvdmlEb3VibGUoaiwgZWxlbWVudCwgc290dHJhaWJhc2UpIHtcclxuICAgICAgICB2YXIgaWR0aGlzO1xyXG4gICAgICAgIHZhciBpZG5leHQ7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZHRoaXMgPSBqUXVlcnkoZWxlbWVudCkucGFyZW50KCkuYXR0cignbnJiYXNlJyk7XHJcbiAgICAgICAgICAgIGlkbmV4dCA9IGpRdWVyeShlbGVtZW50KS5wYXJlbnQoKS5maW5kKCcudGVzc2VyYV9iYXNlJykuYXR0cignbnJiYXNlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWR0aGlzID0gajtcclxuICAgICAgICAgICAgaWRuZXh0ID0galF1ZXJ5KCcjYmFzZV8nICsgaikuZmluZCgnLnRlc3NlcmFfYmFzZScpLmF0dHIoJ25yYmFzZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBpZHRoaXMpLmNzcygnd2lkdGgnLCAnNTBweCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBpZHRoaXMpLmF0dHIoJ2RvdWJsZScsICcwJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcjYmFzZV8nICsgaWR0aGlzKS5yZW1vdmVDbGFzcygndGVzc2VyYV9iYXNlX2xpbmtfZG91YmxlJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcjYmFzZV8nICsgaWRuZXh0KS5pbnNlcnRBZnRlcignI2Jhc2VfJyArIGlkdGhpcyk7XHJcbiAgICAgICAgalF1ZXJ5KCcjYmFzZV8nICsgaWRuZXh0KS5maW5kKCcudGVzc2VyYWJyYWNjaWFsZScpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICdub25lJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcjYmFzZV8nICsgaWRuZXh0KS5maW5kKCcuc3RlbGxhX2luY2lzaW9uZScpLmhpZGUoKTtcclxuICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBpZHRoaXMpLmZpbmQoJy5zdGVsbGFfaW5jaXNpb25lJykuaGlkZSgpO1xyXG4gICAgICAgIGpRdWVyeSgnI2Jhc2VfJyArIGlkbmV4dCkuc2hvdygpO1xyXG4gICAgICAgIGpRdWVyeSgnI2Jhc2VfJyArIGlkdGhpcykucGFyZW50KCkuZmluZCgnLmhhbmRsZXRlc3NlcmEnKS5jc3MoJ3dpZHRoJywgJzQ2cHgnKTtcclxuICAgICAgICBpZiAoc290dHJhaWJhc2UpIHtcclxuICAgICAgICAgICAgTnJMaW5rQmFzZSsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgT2JqQnJhY2NpYWxlW2lkdGhpc10gPSB7XHJcbiAgICAgICAgICAgIGlkOiBqLFxyXG4gICAgICAgICAgICBjb2Q6ICcnLFxyXG4gICAgICAgICAgICBwcmljZTogMCxcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIGltZzogJycsXHJcbiAgICAgICAgICAgIGNvZF9pbnQ6ICcnLFxyXG4gICAgICAgICAgICBkYmw6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIE9iakJyYWNjaWFsZVtpZG5leHRdID0ge1xyXG4gICAgICAgICAgICBpZDogaixcclxuICAgICAgICAgICAgY29kOiAnJyxcclxuICAgICAgICAgICAgcHJpY2U6IDAsXHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBpbWc6ICcnLFxyXG4gICAgICAgICAgICBjb2RfaW50OiAnJyxcclxuICAgICAgICAgICAgZGJsOiAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIENhbGNvbGFSaWVwaWxvZ28oKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHN0cmh0bWwgPSAnJztcclxuICAgICAgICB2YXIgVGlwb0JyYWNjaWFsZSA9ICdiaWcnO1xyXG4gICAgICAgIGpRdWVyeSgnI3JpZXBpbG9nb190ZXNzZXJlJykuaHRtbCgnPGRpdiBjbGFzcz1cImRpdl9yaWVwaWxvZ29cIj4nKTtcclxuICAgICAgICBqUXVlcnkoJyNtX2VsZW5jb190ZXNzZXJlJykuaHRtbCgnJyk7XHJcbiAgICAgICAgdmFyIFRvdExpbmsgPSAwO1xyXG4gICAgICAgIHZhciBuciA9IDA7XHJcbiAgICAgICAgdmFyIHogPSAwO1xyXG5cclxuICAgICAgICB2YXIgc3RybGluayA9IHN0cl9saW5rcztcclxuICAgICAgICB2YXIgcG5ndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZyc7XHJcbiAgICAgICAgc3dpdGNoIChUaXBvQnJhY2NpYWxlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NsYXNzaWMnOlxyXG4gICAgICAgICAgICAgICAgcG5ndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYmlnJzpcclxuICAgICAgICAgICAgICAgIHBuZ3Rlc3NlcmEgPSAndGVzc2VyYV9iYXNlX2RyYWdfYmlnJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbWJic2hvcnQnOlxyXG4gICAgICAgICAgICBjYXNlICdtYmJsb25nJzpcclxuICAgICAgICAgICAgICAgIHN0cmxpbmsgPSBzdHJfY2hhcm1zO1xyXG4gICAgICAgICAgICAgICAgc3RyX2Jhc2VicmFjY2lhbGUgPSBzdHJfYnJhY2NpYWxlO1xyXG4gICAgICAgICAgICAgICAgcG5ndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZ19tYmInO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdzZWltaWEnOlxyXG4gICAgICAgICAgICAgICAgc3RyX2Jhc2UgPSBzdHJfbmVja2xhY2U7XHJcbiAgICAgICAgICAgICAgICBzdHJsaW5rID0gc3RyX3BlbmRlbnRlO1xyXG4gICAgICAgICAgICAgICAgcG5ndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZ19zZWltaWEnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgc3RybGluayA9IHN0cl9jdWJpO1xyXG4gICAgICAgICAgICAgICAgc3RyX2Jhc2VicmFjY2lhbGUgPSBzdHJfYnJhY2NpYWxlO1xyXG4gICAgICAgICAgICAgICAgcG5ndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZ19jdWJpYW1vJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG5yYnJhY2NpYWxlID0gMDtcclxuXHJcbiAgICAgICAgaWYgKChUaXBvQnJhY2NpYWxlICE9ICdjbGFzc2ljJykgJiYgKFRpcG9CcmFjY2lhbGUgIT0gJ2JpZycpKSB7XHJcbiAgICAgICAgICAgIHZhciBiZ2ltYWdlID0gJ2JhY2tncm91bmQtaW1hZ2U6ICcgKyBiZ3VybF9zY2VsdG8ucmVwbGFjZSgvXCIvZywgJycpICsgJzsgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlciAnO1xyXG4gICAgICAgICAgICBzdHJodG1sID0gJzxkaXYgY2xhc3M9XCJyaWVfdGVzXCI+JztcclxuICAgICAgICAgICAgc3RyaHRtbCArPSAnPGRpdiBjbGFzcz1cInJpZV90ZXNfaW1nXCIgc3R5bGU9XCIgJyArIGJnaW1hZ2UgKyAnXCI+PC9kaXY+JztcclxuICAgICAgICAgICAgc3RyaHRtbCArPSBUZXh0QnJhY2NpYWxlICsgJzxicj48c3BhbiBjbGFzcz1cInRleHQxM2dyYXlcIj4nICsgc3RyX2NvZGljZSArIE1hdGVyaWFsZUJyYWNjaWFsZTtcclxuICAgICAgICAgICAgaWYgKFB1bHNhbnRlQWNxdWlzdGEpIHtcclxuICAgICAgICAgICAgICAgIHN0cmh0bWwgKz0gJzxicj4xIHggJyArIFNpbWJvbG9WYWx1dGEgKyAnICcgKyBzZWxmLkRpc3BsYXlDdXJyZW5jeShDb3N0b1RCYXNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdHJodG1sICs9ICc8L3NwYW4+JztcclxuICAgICAgICAgICAgc3RyaHRtbCArPSAnPGRpdj4nO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNyaWVwaWxvZ29fdGVzc2VyZScpLmFwcGVuZChzdHJodG1sKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjbV9lbGVuY29fdGVzc2VyZScpLmFwcGVuZChzdHJodG1sKTtcclxuICAgICAgICAgICAgbnJicmFjY2lhbGUgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgalF1ZXJ5KCcjYnJhY2NpYWxlIC50ZXNzZXJhX2Jhc2UnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgIHZhciBqID0gcGFyc2VJbnQoalF1ZXJ5KHRoaXMpLmF0dHIoJ25yYmFzZScpKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjYmFzZXpvb21fJyArIHopLnNob3coKTtcclxuICAgICAgICAgICAgaWYgKChPYmpCcmFjY2lhbGVbal0uY29kICE9ICcnKSAmJiAoT2JqQnJhY2NpYWxlW2pdLmNvZCAhPSAnZG91YmxlJykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBiZ3Rlc3NlcmEgPSBwbmd0ZXNzZXJhO1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iakJyYWNjaWFsZVtqXS5kYmwgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZ19kb3VibGUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGJnaW1hZ2UgPSAnYmFja2dyb3VuZC1pbWFnZTogdXJsKCcgKyBPYmpCcmFjY2lhbGVbal0uaW1nICsgJyksIHVybCgnICsgU0tJTlVSTCArICdpbWcvJyArIGJndGVzc2VyYSArICcucG5nKSc7XHJcbiAgICAgICAgICAgICAgICBzdHJodG1sID0gJzxkaXYgY2xhc3M9XCJyaWVfdGVzXCI+JztcclxuICAgICAgICAgICAgICAgIHN0cmh0bWwgKz0gJzxkaXYgY2xhc3M9XCJyaWVfdGVzX2ltZ1wiIHN0eWxlPVwiICcgKyBiZ2ltYWdlICsgJ1wiPjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICBzdHJodG1sICs9IE9iakJyYWNjaWFsZVtqXS5uYW1lICsgJzxicj48c3BhbiBjbGFzcz1cInRleHQxM2dyYXlcIj4nICsgc3RyX2NvZGljZSArIE9iakJyYWNjaWFsZVtqXS5jb2RfaW50ICsgJzxicj4nICsgc3RyX3Bvc2l6aW9uZSArIChpbmRleCArIDEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKFB1bHNhbnRlQWNxdWlzdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJodG1sICs9ICc8YnI+MSB4ICcgKyBTaW1ib2xvVmFsdXRhICsgJyAnICsgc2VsZi5EaXNwbGF5Q3VycmVuY3koT2JqQnJhY2NpYWxlW2pdLnByaWNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0cmh0bWwgKz0gJzwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgc3RyaHRtbCArPSAnPGRpdiBjbGFzcz1cInhfdGVzc2VyYVwiIG5ydGVzPVwiJyArIGogKyAnXCI+PC9kaXY+PGRpdj4nO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjcmllcGlsb2dvX3Rlc3NlcmUnKS5hcHBlbmQoc3RyaHRtbCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNtX2VsZW5jb190ZXNzZXJlJykuYXBwZW5kKHN0cmh0bWwpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKFRpcG9CcmFjY2lhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjbGFzc2ljJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iakJyYWNjaWFsZVtqXS5kYmwgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYmFzZXpvb21fJyArIHopLmFkZENsYXNzKCd0ZXNzZXJhX2Jhc2VfbGlua19kb3VibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6KS5hZGRDbGFzcygndGVzc2VyYV9iYXNlem9vbV9kb3VibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6ICsgJyAudGVzc2VyYWJyYWNjaWFsZXpvb20nKS5jc3MoJ2xlZnQnLCAnLTE0cHgnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6KS5hZGRDbGFzcygndGVzc2VyYV9iYXNlX2xpbmsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6KS5yZW1vdmVDbGFzcygndGVzc2VyYV9iYXNlem9vbV9kb3VibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeiArICcgLnRlc3NlcmFicmFjY2lhbGV6b29tJykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgT2JqQnJhY2NpYWxlW2pdLmltZyArICcpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYmlnJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYmFzZXpvb21fJyArIHopLmFkZENsYXNzKCd0ZXNzZXJhX2Jhc2VfbGlua19iaWcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYmFzZXpvb21fJyArIHogKyAnIC50ZXNzZXJhYnJhY2NpYWxlem9vbV9iaWcnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyBPYmpCcmFjY2lhbGVbal0uaW1nICsgJyknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdtYmJzaG9ydCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWJibG9uZyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6KS5hZGRDbGFzcygndGVzc2VyYV9iYXNlX21iYl9kcm9wJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6ICsgJyAudGVzc2VyYWJyYWNjaWFsZXpvb21fbWJiJykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgT2JqQnJhY2NpYWxlW2pdLmltZyArICcpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzZWltaWEnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeikuYWRkQ2xhc3MoJ3Rlc3NlcmFfYmFzZV9zZWltaWFfZHJvcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeiArICcgLnRlc3NlcmFicmFjY2lhbGV6b29tX3NlaW1pYScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArIE9iakJyYWNjaWFsZVtqXS5pbWcgKyAnKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGltZ3NrdSA9IE9iakJyYWNjaWFsZVtqXS5pbWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBza3UgPSBPYmpCcmFjY2lhbGVbal0uY29kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2ltZ3NrdSA9IGltZ3NrdS5yZXBsYWNlKHNrdSwgJ2ZfJyArIHNrdSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6KS5hZGRDbGFzcygndGVzc2VyYV9iYXNlX2N1YmlhbW9fZHJvcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeiArICcgLnRlc3NlcmFicmFjY2lhbGV6b29tX2N1YmlhbW8nKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyBpbWdza3UgKyAnKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBUb3RMaW5rICs9IHBhcnNlRmxvYXQoT2JqQnJhY2NpYWxlW2pdLnByaWNlKTtcclxuICAgICAgICAgICAgICAgIG5yKys7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqQnJhY2NpYWxlW2pdLmNvZCAhPSAnZG91YmxlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoVGlwb0JyYWNjaWFsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjbGFzc2ljJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6KS5yZW1vdmVDbGFzcygndGVzc2VyYV9iYXNlX2xpbmsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6KS5yZW1vdmVDbGFzcygndGVzc2VyYV9iYXNlX2xpbmtfZG91YmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeikucmVtb3ZlQ2xhc3MoJ3Rlc3NlcmFfYmFzZXpvb21fZG91YmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeiArICcgLnRlc3NlcmFicmFjY2lhbGV6b29tJykuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYmlnJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6KS5yZW1vdmVDbGFzcygndGVzc2VyYV9iYXNlX2xpbmtfYmlnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeiArICcgLnRlc3NlcmFicmFjY2lhbGV6b29tX2JpZycpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICdub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ21iYnNob3J0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWJibG9uZyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeikucmVtb3ZlQ2xhc3MoJ3Rlc3NlcmFfYmFzZV9tYmJfZHJvcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYmFzZXpvb21fJyArIHogKyAnIC50ZXNzZXJhYnJhY2NpYWxlem9vbV9tYmInKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlaW1pYSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeikucmVtb3ZlQ2xhc3MoJ3Rlc3NlcmFfYmFzZV9zZWltaWFfZHJvcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYmFzZXpvb21fJyArIHogKyAnIC50ZXNzZXJhYnJhY2NpYWxlem9vbV9zZWltaWEnKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeikucmVtb3ZlQ2xhc3MoJ3Rlc3NlcmFfYmFzZV9jdWJpYW1vX2Ryb3AnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6ICsgJyAudGVzc2VyYWJyYWNjaWFsZXpvb21fY3ViaWFtbycpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICdub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6KS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeisrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeSgnI3JpZXBpbG9nb190ZXNzZXJlJykuYXBwZW5kKCc8L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCcjcmllcGlsb2dvX3Rlc3NlcmUgLmRpdl9yaWVwaWxvZ28gLnJpZV90ZXM6bGFzdC1jaGlsZCcpLmNzcygnYm9yZGVyLWJvdHRvbScsICcwJyk7XHJcbiAgICAgICAgdmFyIHRvdGFsZSA9IChOckxpbmtCYXNlICogQ29zdG9UQmFzZSkgKyBUb3RMaW5rO1xyXG4gICAgICAgIHZhciB0b3RiYXNlID0gKE5yTGlua0Jhc2UgKiBDb3N0b1RCYXNlKTtcclxuICAgICAgICBpZiAoKHNlbGYuQ29udHJvbGxhTWluaW1vTkxpbmspICYmIChzZWxmLkNvbnRhVGVzc2VyZSgpID49IE51bWVyb01pbmltb0xpbmspKSB7XHJcbiAgICAgICAgICAgIHRvdGFsZSA9IFRvdExpbms7XHJcbiAgICAgICAgICAgIHRvdGJhc2UgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKChQcm9tb0Jhc2VHcmF0aXMpICYmIChUb3RMaW5rID49IFByZXp6b0Jhc2VHcmF0aXMpKSB7XHJcbiAgICAgICAgICAgIHRvdGFsZSA9IFRvdExpbms7XHJcbiAgICAgICAgICAgIHRvdGJhc2UgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHRlc3RvID0gc3RyX2Jhc2UgKyAnICcgKyBTaW1ib2xvVmFsdXRhICsgJyAnICsgc2VsZi5EaXNwbGF5Q3VycmVuY3kodG90YmFzZSkgKyAnICsgJyArIG5yICsgJyAnICsgc3RybGluayArICcgJyArIFNpbWJvbG9WYWx1dGEgKyAnICcgKyBzZWxmLkRpc3BsYXlDdXJyZW5jeShUb3RMaW5rKSArICcgPSA8Yj4nICsgU2ltYm9sb1ZhbHV0YSArICcgJyArIHNlbGYuRGlzcGxheUN1cnJlbmN5KHRvdGFsZSkgKyAnPC9iPidcclxuICAgICAgICBpZiAoIVB1bHNhbnRlQWNxdWlzdGEpIHtcclxuICAgICAgICAgICAgdGVzdG8gPSBzdHJfYmFzZWJyYWNjaWFsZSArICcgKyAnICsgbnIgKyAnICcgKyBzdHJsaW5rICsgJyAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqUXVlcnkoXCIjcmllX3RvdFwiKS5odG1sKHRlc3RvKTtcclxuICAgICAgICB0ZXN0byA9ICc8Yj4nICsgU2ltYm9sb1ZhbHV0YSArICcgJyArIHNlbGYuRGlzcGxheUN1cnJlbmN5KHRvdGFsZSkgKyAnPC9iPic7XHJcbiAgICAgICAgaWYgKCFQdWxzYW50ZUFjcXVpc3RhKSB7XHJcbiAgICAgICAgICAgIHRlc3RvID0gJzxiPicgKyBuciArICcgJyArIHN0cmxpbmsgKyAnPC9iPic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBqUXVlcnkoXCIjbV9yaWVfdG90XCIpLmh0bWwodGVzdG8pO1xyXG4gICAgICAgIGpRdWVyeShcIiNtX3ByaWNlX3N1YlwiKS5odG1sKFNpbWJvbG9WYWx1dGEgKyAnICcgKyBzZWxmLkRpc3BsYXlDdXJyZW5jeSh0b3RhbGUpKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCcueF90ZXNzZXJhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IGpRdWVyeSh0aGlzKTtcclxuICAgICAgICAgICAgUmltdW92aVRlc3NlcmEoaWQsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGFsdGV6emEgPSAobnIgKyBucmJyYWNjaWFsZSkgKiA5MjtcclxuICAgICAgICB2YXIgU2Nyb2xsQmFyID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGFsdGV6emEgPiAyNzYpIHtcclxuICAgICAgICAgICAgYWx0ZXp6YSA9IDI3NjtcclxuICAgICAgICAgICAgU2Nyb2xsQmFyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgalF1ZXJ5KCcjcmllcGlsb2dvX3Rlc3NlcmUnKS5oZWlnaHQoYWx0ZXp6YSk7XHJcbiAgICAgICAgdmFyIHNpemUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFsdGV6emFkaXNwID0gc2l6ZS5oZWlnaHQgLSA2NTtcclxuICAgICAgICAvL2pRdWVyeSgnI21fcmllcGlsb2dvX3Rlc3NlcmUnKS5oZWlnaHQoYWx0ZXp6YWRpc3ApO1xyXG4gICAgICAgIGFsdGV6emEgPSBhbHRlenphZGlzcCAtIDE0MDtcclxuICAgICAgICBqUXVlcnkoJyNtX2VsZW5jb190ZXNzZXJlJykuaGVpZ2h0KGFsdGV6emEpO1xyXG4gICAgICAgIGFsdGV6emEgPSAobnIgKyBucmJyYWNjaWFsZSkgKiAxMDI7XHJcbiAgICAgICAgdmFyIFNjcm9sbEJhck1vYmlsZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChhbHRlenphID4gKGFsdGV6emFkaXNwIC0gMTQwKSkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNtX2VsZW5jb190ZXNzZXJlJykuY3NzKCdtYXgtaGVpZ2h0JywgYWx0ZXp6YSArICdweCcpO1xyXG4gICAgICAgICAgICBTY3JvbGxCYXJNb2JpbGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIENvbnRhVGVzc2VyZSgpIHtcclxuICAgICAgICB2YXIgbnJ0ZXNzZXJlID0gMDtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IE5yTGluazsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgT2JqQnJhY2NpYWxlW2pdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKChPYmpCcmFjY2lhbGVbal0uY29kICE9ICcnKSAmJiAoT2JqQnJhY2NpYWxlW2pdLmNvZCAhPSAnZG91YmxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBucnRlc3NlcmUrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnJ0ZXNzZXJlO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=