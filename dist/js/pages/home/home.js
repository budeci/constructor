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
            height: '96px',
            width: link_width,
            marginTop: '0px'
          }, "fast");
          jQuery(this).prev('.tessera_base').stop().animate({
            height: '96px',
            width: width_prev,
            marginTop: '0px'
          }, "fast");
          jQuery(this).next().stop().animate({
            height: '96px',
            width: width_next,
            marginTop: '0px'
          }, "fast");
          jQuery(this).find('.tesserabracciale').stop().animate({
            height: '134px',
            width: tessera_width,
            top: tes_top,
            left: tes_left * link_mol
          }, 'fast');
          jQuery(this).next().find('.tesserabracciale').stop().animate({
            height: '134px',
            width: width_tessera_next,
            top: tes_top,
            left: tes_left * next_mol
          }, 'fast');
          jQuery(this).prev().find('.tesserabracciale').stop().animate({
            height: '134px',
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
            height: '96px',
            width: link_width,
            marginTop: '0px'
          }, "fast");
          jQuery(this).parent().find('.tesserabracciale').stop().animate({
            height: '134px',
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
                    RimuoviDouble(j, this, true);
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
              height: '96px',
              width: link_width,
              marginTop: '0px'
            }, 'fast');
            jQuery(this).parent().find('.tesserabracciale').stop().animate({
              height: '134px',
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
              if (ContaTessere() >= NumeroMinimoLink) {
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
            RimuoviTessera(jQuery(ui.item), false);
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
          helper: 'clone',
          zIndex: 100,
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
  }]);

  return Constructor;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2VzL2hvbWUvaG9tZS5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvaG9tZS9tb2R1bGVzL2NvbnN0cnVjdG9yLmpzIl0sIm5hbWVzIjpbIkhvbWVWaWV3IiwiaW5pdCIsIkNvbnN0cnVjdG9yIiwiaXNNb2JpbGUiLCJDaGVja0lzTW9iaWxlIiwiSW50ZXJ2YWxsb0hvdmVyIiwiQnJhY2NpYWxlWm9vbSIsIkZpbHRyb0FwZXJ0byIsIlByaW1vQWNjZXNzbyIsIkxhY2Npb0JyYWNjaWFsZSIsImRldGFpbF92aXNpYmxlIiwiUmljZXJjYUF0dGl2YSIsIlNvcnRTdGFydCIsImxhcmdoZXp6YSIsImpRdWVyeSIsIndpbmRvdyIsIndpZHRoIiwiRmlsdHJpVEMiLCJEZWxheVRvdWNoIiwicGFnaW5hdXJsIiwiQ29udHJvbGxhTWluaW1vTkxpbmsiLCJPZmZzZXRUb29sVGlwIiwiQXJySW5jaXNpb25pIiwiQXJyYXkiLCJTY3JvbGxCYXIiLCJtdXN0QmVCbG9ja2VkIiwiZXZlbnRzIiwiUmVmcmVzaFNsaWRlRmlsdHJpIiwiaW5pdERlZmF1bHQiLCJkb2N1bWVudCIsImNyZWF0ZUV2ZW50IiwiZSIsInNlbGYiLCJ0ZXNfdG9wIiwidGVzX2xlZnQiLCJ0ZXNfdG9wMSIsInRlc19sZWZ0MSIsInRlc190b3BfbyIsInRlc19sZWZ0X28iLCJtb3VzZWVudGVyIiwiZWxlbSIsInNldFRpbWVvdXQiLCJWaXN1YWxpenphSG92ZXIiLCJtb3VzZWxlYXZlIiwiRHJhZ0luQ29yc28iLCJoaWRlIiwiY2xlYXJUaW1lb3V0Iiwib24iLCJzaXplIiwiaW5uZXJXaWR0aCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwidWx3aWR0aCIsInhwb3MiLCJzZXRYUG9zIiwiZmFkZUluIiwiZmFkZU91dCIsImVsZW1lbnQiLCJmaW5kIiwiaXMiLCJNb3N0cmFUb29saXBJbmNpc2lvbmUiLCJsaW5rX3dpZHRoIiwidGVzc2VyYV93aWR0aCIsIndpZHRoX25leHQiLCJ3aWR0aF90ZXNzZXJhX25leHQiLCJ3aWR0aF9wcmV2Iiwid2lkdGhfdGVzc2VyYV9wcmV2IiwibGlua19tb2wiLCJuZXh0X21vbCIsInByZXZfbW9sIiwibWVub19sZWZ0IiwibWVub190b3AiLCJhdHRyIiwicHJldiIsIm5leHQiLCJzdG9wIiwiYW5pbWF0ZSIsIm1hcmdpblRvcCIsInRvcCIsImxlZnQiLCJqIiwiT2JqQnJhY2NpYWxlIiwiY29kIiwiTW9zdHJhRGV0dGFnbGlvT3ZlciIsImRyb3BwYWJsZSIsImFjY2VwdCIsInRvbGVyYW5jZSIsImFjdGl2ZUNsYXNzIiwib3ZlciIsImV2ZW50IiwidWkiLCJwYXJlbnQiLCJvdXQiLCJkcm9wIiwic25hbWUiLCJkcmFnZ2FibGUiLCJpbWdza3UiLCJza3UiLCJzY29kX2ludCIsImZwcmljZSIsImRvdWJsZSIsImluY2lzaWJsZSIsInJpZ2hlX2luYyIsIm1heF9jaGFyIiwic290dHJhaWJhc2UiLCJwYXJzZUludCIsIm1vbF9sZWZ0IiwiTnJMaW5rIiwiZGJsIiwiUmltdW92aURvdWJsZSIsImFkZENsYXNzIiwicmVwbGFjZSIsImNzcyIsIm9iamRvdWJsZSIsImlkIiwicHJpY2UiLCJuYW1lIiwiaW1nIiwiY29kX2ludCIsIkFnZ2l1bmdpRG91YmxlIiwiTnJMaW5rQmFzZSIsIkFnZ2lvcm5hT2JqQnJhY2NpYWxlIiwiQ29udGFUZXNzZXJlIiwiTnVtZXJvTWluaW1vTGluayIsInJlbW92ZUNsYXNzIiwiTW9zdHJhRm9ybUluY2lzaW9uZSIsInBvc2l6IiwicG9zaXRpb24iLCJzY3JlZW5fdyIsImRldGFpbF93IiwiYmdpbWciLCJub21lIiwibWF0ZXJpYWxlIiwic3RyaHRtbCIsIkdldFByaWNlSHRtbCIsImh0bWwiLCJzaG93IiwiZmluYWxfcHJpY2UiLCJzdHJjbGFzcyIsInZwcmljZSIsInBhcnNlRmxvYXQiLCJ2ZmluYWxfcHJpY2UiLCJQdWxzYW50ZUFjcXVpc3RhIiwiaHRtbHByaWNlIiwiaHRtbGZpbmFsX3ByaWNlIiwiRGlzcGxheUN1cnJlbmN5IiwiU2ltYm9sb1ZhbHV0YSIsInZhbG9yZSIsIk1hdGgiLCJyb3VuZCIsInRvRml4ZWQiLCJ0ZXh0IiwicmVwbGFjZUFsbCIsImxhcmdoIiwibnJfbGkiLCJlYWNoIiwiaW5kZXgiLCJ0b3VjaENhcm91c2VsIiwic2Nyb2xsYmFyIiwicGFnaW5nTmF2Q29udHJvbHMiLCJkaXJlY3Rpb25OYXYiLCJzY3JvbGxUb0xhc3QiLCJkYXRhIiwiZ29UbyIsInNvcnRhYmxlIiwiaGFuZGxlIiwib3BhY2l0eSIsImFwcGVuZFRvIiwiaGVscGVyIiwiZGVsYXkiLCJkaXNhYmxlZCIsImFjdGl2YXRlIiwic3RhcnQiLCJpdGVtIiwiaW5jaXNpb24iLCJ1cGRhdGUiLCJ1bmJpbmQiLCJvbmUiLCJjb25zb2xlIiwibG9nIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiZGVhY3RpdmF0ZSIsImRpZmYiLCJhYnMiLCJvcmlnaW5hbFBvc2l0aW9uIiwiUmltdW92aVRlc3NlcmEiLCJpdGVtRmFsbGJhY2tXaWR0aCIsImRyYWdVc2luZ01vdXNlIiwiQWdnaW9ybmFUcmlnZ2VyVGVzc2VyZSIsImpzdGVsbGEiLCJ3cGFyZW50IiwiZm9udCIsImwyIiwibDEiLCJjb250YWlubWVudCIsInJldmVydCIsInpJbmRleCIsIkNoaXVkaUJhcnJhUmllcGlsb2dvIiwic3dpcGUiLCJzd2lwZVVwIiwiZGlyZWN0aW9uIiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsImZpbmdlckNvdW50IiwiZmluZ2VyRGF0YSIsInNjcm9sbFRvcCIsInN3aXBlRG93biIsImFsbG93UGFnZVNjcm9sbCIsIk1vc3RyYVRvb2x0aXBJbmNpc2lvbmUiLCJUaXBvQnJhY2NpYWxlIiwicGVyZmVjdFNjcm9sbGJhciIsIlNLSU5VUkwiLCJwbmd0ZXNzZXJhIiwiYWRkY2xhc3MiLCJiZ2ltYWdl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Q0FBZ0JrQyxNQUFoQixHQUF5Qm5CLElBQXpCLENBQThCLFFBQTlCLENBQWI7QUFDQSxVQUFJZ0osTUFBTSxHQUFHN00sTUFBTSxDQUFDOEMsT0FBRCxDQUFOLENBQWdCa0MsTUFBaEIsR0FBeUJqQixJQUF6QixHQUFnQ0YsSUFBaEMsQ0FBcUMsUUFBckMsQ0FBYjs7QUFDQSxVQUFJN0QsTUFBTSxDQUFDLFdBQVc2TSxNQUFaLENBQU4sQ0FBMEJoSixJQUExQixDQUErQixRQUEvQixLQUE0QyxHQUFoRCxFQUFxRDtBQUNqRHFDLHFCQUFhLENBQUMyRyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsQ0FBYjtBQUNIOztBQUNEN00sWUFBTSxDQUFDOEMsT0FBRCxDQUFOLENBQWdCa0MsTUFBaEIsR0FBeUJqQixJQUF6QixHQUFnQ2hDLElBQWhDO0FBQ0EvQixZQUFNLENBQUMsV0FBVzZNLE1BQVosQ0FBTixDQUEwQmpELFFBQTFCLENBQW1DLFdBQVdnRCxNQUE5QztBQUNBNU0sWUFBTSxDQUFDOEMsT0FBRCxDQUFOLENBQWdCa0MsTUFBaEIsR0FBeUJqQyxJQUF6QixDQUE4QixnQkFBOUIsRUFBZ0RzRCxHQUFoRCxDQUFvRCxPQUFwRCxFQUE2RCxNQUE3RDs7QUFDQSxVQUFLUixXQUFELElBQWtCdkIsWUFBWSxDQUFDdUksTUFBRCxDQUFaLENBQXFCdEksR0FBckIsSUFBNEIsRUFBbEQsRUFBdUQ7QUFDbkRzQyxrQkFBVTtBQUNiOztBQUNEdkMsa0JBQVksQ0FBQ3VJLE1BQUQsQ0FBWixDQUFxQnRHLEVBQXJCLEdBQTBCbEMsQ0FBMUI7QUFDQUMsa0JBQVksQ0FBQ3VJLE1BQUQsQ0FBWixDQUFxQnRJLEdBQXJCLEdBQTJCLFFBQTNCO0FBQ0giLCJmaWxlIjoianMvcGFnZXMvaG9tZS9ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL3BhZ2VzL2hvbWUvaG9tZS5lbnRyeS5qc1wiKTtcbiIsImltcG9ydCBDb25zdHJ1Y3RvciBmcm9tICcuL21vZHVsZXMvY29uc3RydWN0b3InO1xyXG5cclxuY2xhc3MgSG9tZVZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIG5ldyBDb25zdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG59XHJcbm5ldyBIb21lVmlldygpOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0cnVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaXNNb2JpbGUgPSB0aGlzLkNoZWNrSXNNb2JpbGUoKTsgLy9pbml0aWF0ZSBhcyBmYWxzZVxyXG4gICAgICAgIC8vIEphdmFTY3JpcHQgRG9jdW1lbnRcclxuICAgICAgICBsZXQgSW50ZXJ2YWxsb0hvdmVyO1xyXG4gICAgICAgIGxldCBCcmFjY2lhbGVab29tO1xyXG4gICAgICAgIGxldCBGaWx0cm9BcGVydG8gPSBmYWxzZTtcclxuICAgICAgICBsZXQgUHJpbW9BY2Nlc3NvID0gdHJ1ZTtcclxuICAgICAgICBsZXQgTGFjY2lvQnJhY2NpYWxlID0gJyc7XHJcbiAgICAgICAgbGV0IGRldGFpbF92aXNpYmxlID0gJyc7XHJcbiAgICAgICAgbGV0IFJpY2VyY2FBdHRpdmEgPSBmYWxzZTtcclxuICAgICAgICBsZXQgU29ydFN0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICBsZXQgbGFyZ2hlenphID0galF1ZXJ5KHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICBsZXQgRmlsdHJpVEMgPSBudWxsO1xyXG4gICAgICAgIGxldCBEZWxheVRvdWNoID0gMDtcclxuICAgICAgICBsZXQgcGFnaW5hdXJsID0gJyc7XHJcbiAgICAgICAgbGV0IENvbnRyb2xsYU1pbmltb05MaW5rID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IE9mZnNldFRvb2xUaXAgPSAtMjA7XHJcbiAgICAgICAgbGV0IEFyckluY2lzaW9uaSA9IEFycmF5KCk7XHJcbiAgICAgICAgbGV0IFNjcm9sbEJhciA9IGZhbHNlO1xyXG4gICAgICAgIC8vIENvbnRyb2xsbyBjYXJpY2FtZW50aVxyXG4gICAgICAgIGxldCBtdXN0QmVCbG9ja2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICAgICAgLy8gdGhpcy5TZXR0YVBvc2l6aW9uaVRlc3NlcmUoXCJiaWdcIik7XHJcbiAgICAgICAgdGhpcy5SZWZyZXNoU2xpZGVGaWx0cmkoKTtcclxuICAgICAgICB0aGlzLmluaXREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBDaGVja0lzTW9iaWxlKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiVG91Y2hFdmVudFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zdCBpc01vYmlsZSA9IHNlbGYuaXNNb2JpbGU7XHJcbiAgICAgICAgdmFyIHRlc190b3AgPSAtMTM7XHJcbiAgICAgICAgdmFyIHRlc19sZWZ0ID0gLTMwO1xyXG4gICAgICAgIHZhciB0ZXNfdG9wMSA9IC0xNDtcclxuICAgICAgICB2YXIgdGVzX2xlZnQxID0gLTM1O1xyXG4gICAgICAgIHZhciB0ZXNfdG9wX28gPSAtMTY7XHJcbiAgICAgICAgdmFyIHRlc19sZWZ0X28gPSAtMzU7XHJcbiAgICAgICAgalF1ZXJ5KCcudGVzc2VyYScpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgIC8vaWYgKCFEcmFnSW5Db3Jzbykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW0gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5JbnRlcnZhbGxvSG92ZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuVmlzdWFsaXp6YUhvdmVyKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgalF1ZXJ5KCcjdGVzc2VyYV9kZXRhaWwnKS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIWlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIURyYWdJbkNvcnNvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjdGVzc2VyYV9kZXRhaWwnKS5oaWRlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLkludGVydmFsbG9Ib3Zlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBqUXVlcnkoJyNjb25mX3pvb20nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHNpemUgPSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB1bHdpZHRoID0galF1ZXJ5KCcjYnJhY2NpYWxlX3pvb20gdWwnKS53aWR0aCgpO1xyXG4gICAgICAgICAgICB2YXIgeHBvcyA9IDAgLSAoKHVsd2lkdGggLSBzaXplLndpZHRoKSAvIDIpO1xyXG4gICAgICAgICAgICBzZWxmLkJyYWNjaWFsZVpvb20uc2V0WFBvcyh4cG9zKTtcclxuICAgICAgICAgICAgLy9cdEJyYWNjaWFsZVpvb20udXBkYXRlQ2Fyb3VzZWxTaXplKCk7XHJcbiAgICAgICAgICAgIC8vXHRqUXVlcnkoJyNicmFjY2lhbGVfem9vbSB1bCcpLmNzcyh7bGVmdDogJy0zMDBweCd9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNlbGYuQ2FsY29sYVJpZXBpbG9nbygpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNjb250YWluZXJfem9vbScpLmZhZGVJbigyMDApO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNjb250YWluZXJfYnJhY2NpYWxlJykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeSgnLnRlc3NlcmFfYmFzZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGpRdWVyeSh0aGlzKS5maW5kKCcuc3RlbGxhX2luY2lzaW9uZScpXHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkoZWxlbWVudCkuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKCcuc3RlbGxhX2luY2lzaW9uZScpLmZhZGVPdXQoMjAwKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuTW9zdHJhVG9vbGlwSW5jaXNpb25lKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJy5zdGVsbGFfaW5jaXNpb25lJykuZmFkZUluKDIwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCcudGVzc2VyYV9iYXNlJykubW91c2VlbnRlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCFpc01vYmlsZSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGxpbmtfd2lkdGggPSAnNjBweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVzc2VyYV93aWR0aCA9ICcxMzJweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGhfbmV4dCA9ICc1NHB4JztcclxuICAgICAgICAgICAgICAgIHZhciB3aWR0aF90ZXNzZXJhX25leHQgPSAnMTE5cHgnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoX3ByZXYgPSAnNTRweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGhfdGVzc2VyYV9wcmV2ID0gJzExOXB4JztcclxuICAgICAgICAgICAgICAgIHZhciBsaW5rX21vbCA9IDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV4dF9tb2wgPSAxO1xyXG4gICAgICAgICAgICAgICAgdmFyIHByZXZfbW9sID0gMTtcclxuICAgICAgICAgICAgICAgIHZhciBtZW5vX2xlZnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lbm9fdG9wID0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykuYXR0cignZG91YmxlJykgPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua193aWR0aCA9ICcxMjBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVzc2VyYV93aWR0aCA9ICcyNjRweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19tb2wgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbm9fbGVmdCA9IC0zO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbm9fdG9wID0gLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLnByZXYoJy50ZXNzZXJhX2Jhc2UnKS5hdHRyKCdkb3VibGUnKSA9PSAnMScpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aF9wcmV2ID0gJzEwOHB4JztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aF90ZXNzZXJhX3ByZXYgPSAnMjM4cHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZfbW9sID0gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykubmV4dCgpLmF0dHIoJ2RvdWJsZScpID09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoX25leHQgPSAnMTA4cHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoX3Rlc3NlcmFfbmV4dCA9ICcyMzhweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dF9tb2wgPSAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGxpbmtfd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnLTVweCdcclxuICAgICAgICAgICAgICAgIH0sIFwiZmFzdFwiKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCcudGVzc2VyYV9iYXNlJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhfcHJldixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICctMnB4J1xyXG4gICAgICAgICAgICAgICAgfSwgXCJmYXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTA0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aF9uZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJy0ycHgnXHJcbiAgICAgICAgICAgICAgICB9LCBcImZhc3RcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJy50ZXNzZXJhYnJhY2NpYWxlJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE2MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGVzc2VyYV93aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHRlc190b3BfbyArIG1lbm9fdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICh0ZXNfbGVmdF9vICogbGlua19tb2wpICsgbWVub19sZWZ0XHJcbiAgICAgICAgICAgICAgICB9LCAnZmFzdCcpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnByZXYoKS5maW5kKCcudGVzc2VyYWJyYWNjaWFsZScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNDVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoX3Rlc3NlcmFfcHJldixcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHRlc190b3AxLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRlc19sZWZ0MSAqIHByZXZfbW9sXHJcbiAgICAgICAgICAgICAgICB9LCAnZmFzdCcpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5maW5kKCcudGVzc2VyYWJyYWNjaWFsZScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNDVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoX3Rlc3NlcmFfbmV4dCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHRlc190b3AxLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRlc19sZWZ0MSAqIG5leHRfbW9sXHJcbiAgICAgICAgICAgICAgICB9LCAnZmFzdCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGogPSBqUXVlcnkodGhpcykuYXR0cignbnJiYXNlJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNkZXR0YWdsaW9fb3ZlcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChPYmpCcmFjY2lhbGVbal0uY29kICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5Nb3N0cmFEZXR0YWdsaW9PdmVyKGopO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNkZXR0YWdsaW9fb3ZlcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeSgnLnRlc3NlcmFfYmFzZScpLm1vdXNlbGVhdmUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaW5rX3dpZHRoID0gJzUwcHgnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3NlcmFfd2lkdGggPSAnMTEwcHgnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoX25leHQgPSAnNTBweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGhfdGVzc2VyYV9uZXh0ID0gJzExMHB4JztcclxuICAgICAgICAgICAgICAgIHZhciB3aWR0aF9wcmV2ID0gJzUwcHgnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoX3Rlc3NlcmFfcHJldiA9ICcxMTBweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlua19tb2wgPSAxO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5leHRfbW9sID0gMTtcclxuICAgICAgICAgICAgICAgIHZhciBwcmV2X21vbCA9IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLmF0dHIoJ2RvdWJsZScpID09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfd2lkdGggPSAnMTAwcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlc3NlcmFfd2lkdGggPSAnMjIwcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfbW9sID0gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykucHJldignLnRlc3NlcmFfYmFzZScpLmF0dHIoJ2RvdWJsZScpID09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoX3ByZXYgPSAnMTAwcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoX3Rlc3NlcmFfcHJldiA9ICcyMjBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldl9tb2wgPSAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeSh0aGlzKS5uZXh0KCkuYXR0cignZG91YmxlJykgPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhfbmV4dCA9ICcxMDBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhfdGVzc2VyYV9uZXh0ID0gJzIyMHB4JztcclxuICAgICAgICAgICAgICAgICAgICBuZXh0X21vbCA9IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzk2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBsaW5rX3dpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzBweCdcclxuICAgICAgICAgICAgICAgIH0sIFwiZmFzdFwiKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCcudGVzc2VyYV9iYXNlJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzk2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aF9wcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzBweCdcclxuICAgICAgICAgICAgICAgIH0sIFwiZmFzdFwiKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzk2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aF9uZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzBweCdcclxuICAgICAgICAgICAgICAgIH0sIFwiZmFzdFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuZmluZCgnLnRlc3NlcmFicmFjY2lhbGUnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTM0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0ZXNzZXJhX3dpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGVzX3RvcCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0ZXNfbGVmdCAqIGxpbmtfbW9sXHJcbiAgICAgICAgICAgICAgICB9LCAnZmFzdCcpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5maW5kKCcudGVzc2VyYWJyYWNjaWFsZScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMzRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoX3Rlc3NlcmFfbmV4dCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHRlc190b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGVzX2xlZnQgKiBuZXh0X21vbFxyXG4gICAgICAgICAgICAgICAgfSwgJ2Zhc3QnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCkuZmluZCgnLnRlc3NlcmFicmFjY2lhbGUnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTM0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aF90ZXNzZXJhX3ByZXYsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0ZXNfdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRlc19sZWZ0ICogcHJldl9tb2xcclxuICAgICAgICAgICAgICAgIH0sICdmYXN0Jyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNkZXR0YWdsaW9fb3ZlcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeShcIi5kcm9wXCIpLmRyb3BwYWJsZSh7XHJcbiAgICAgICAgICAgIGFjY2VwdDogJy5kcmFnLC50ZXNzZXJhJyxcclxuICAgICAgICAgICAgdG9sZXJhbmNlOiAnaW50ZXJzZWN0JyxcclxuICAgICAgICAgICAgYWN0aXZlQ2xhc3M6ICdkcmFnLWFjdGl2ZScsXHJcbiAgICAgICAgICAgIG92ZXI6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpbmtfd2lkdGggPSAnNjBweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVzc2VyYV93aWR0aCA9ICcxMzJweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlua19tb2wgPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5hdHRyKCdkb3VibGUnKSA9PSAnMScpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX3dpZHRoID0gJzEyMHB4JztcclxuICAgICAgICAgICAgICAgICAgICB0ZXNzZXJhX3dpZHRoID0gJzI2NHB4JztcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX21vbCA9IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzExNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogbGlua193aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICctNXB4J1xyXG4gICAgICAgICAgICAgICAgfSwgXCJmYXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmZpbmQoJy50ZXNzZXJhYnJhY2NpYWxlJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE2MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGVzc2VyYV93aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHRlc190b3BfbyxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0ZXNfbGVmdF9vICogbGlua19tb2xcclxuICAgICAgICAgICAgICAgIH0sICdmYXN0Jyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG91dDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlua193aWR0aCA9ICc1MHB4JztcclxuICAgICAgICAgICAgICAgIHZhciB0ZXNzZXJhX3dpZHRoID0gJzExMHB4JztcclxuICAgICAgICAgICAgICAgIHZhciBsaW5rX21vbCA9IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmF0dHIoJ2RvdWJsZScpID09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfd2lkdGggPSAnMTAwcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlc3NlcmFfd2lkdGggPSAnMjIwcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfbW9sID0gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnOTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGxpbmtfd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMHB4J1xyXG4gICAgICAgICAgICAgICAgfSwgXCJmYXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmZpbmQoJy50ZXNzZXJhYnJhY2NpYWxlJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEzNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGVzc2VyYV93aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHRlc190b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGVzX2xlZnQgKiBsaW5rX21vbFxyXG4gICAgICAgICAgICAgICAgfSwgJ2Zhc3QnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZHJvcDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc25hbWUgPSBqUXVlcnkodWkuZHJhZ2dhYmxlKS5hdHRyKCdub21lJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nc2t1ID0galF1ZXJ5KHVpLmRyYWdnYWJsZSkuYXR0cignaW1nc2t1Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2t1ID0galF1ZXJ5KHVpLmRyYWdnYWJsZSkuYXR0cignc2t1Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NvZF9pbnQgPSBqUXVlcnkodWkuZHJhZ2dhYmxlKS5hdHRyKCdjb2RfaW50Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZnByaWNlID0galF1ZXJ5KHVpLmRyYWdnYWJsZSkuYXR0cignZnByaWNlJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZG91YmxlID0galF1ZXJ5KHVpLmRyYWdnYWJsZSkuYXR0cignZG91YmxlJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5jaXNpYmxlID0galF1ZXJ5KHVpLmRyYWdnYWJsZSkuYXR0cignaW5jaXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmlnaGVfaW5jID0galF1ZXJ5KHVpLmRyYWdnYWJsZSkuYXR0cigncmlnaGVfaW5jJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4X2NoYXIgPSBqUXVlcnkodWkuZHJhZ2dhYmxlKS5hdHRyKCdtYXhfY2hhcicpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNvdHRyYWliYXNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlua193aWR0aCA9ICc1MHB4JztcclxuICAgICAgICAgICAgICAgIHZhciB0ZXNzZXJhX3dpZHRoID0gJzExMHB4JztcclxuICAgICAgICAgICAgICAgIHZhciBqID0gcGFyc2VJbnQoalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmF0dHIoJ25yYmFzZScpKTtcclxuICAgICAgICAgICAgICAgIHZhciBtb2xfbGVmdCA9IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGRvdWJsZSA9PSAwKSB8fCAoaiA8IE5yTGluayAtIDEpIHx8IChPYmpCcmFjY2lhbGVbal0uZGJsID09IDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICgnYmlnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjbGFzc2ljJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb3VibGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykucGFyZW50KCkuYXR0cignZG91YmxlJykgPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJpbXVvdmlEb3VibGUoaiwgdGhpcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygndGVzc2VyYV9iYXNlX2xpbmtfZG91YmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmF0dHIoJ2RvdWJsZScsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua193aWR0aCA9ICcxMDBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzc2VyYV93aWR0aCA9ICcyMjBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9sX2xlZnQgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmF0dHIoJ2RvdWJsZScpID09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSaW11b3ZpRG91YmxlKGosIHRoaXMsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ3Rlc3NlcmFfYmFzZV9saW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3R0cmFpYmFzZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYmlnJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygndGVzc2VyYV9iYXNlX2xpbmtfYmlnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3R0cmFpYmFzZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWJic2hvcnQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtYmJsb25nJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygndGVzc2VyYV9iYXNlX21iYl9kcm9wJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2VpbWlhJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygndGVzc2VyYV9iYXNlX3NlaW1pYV9kcm9wJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ3NrdSA9IGltZ3NrdS5yZXBsYWNlKHNrdSwgJ2ZfJyArIHNrdSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ3Rlc3NlcmFfYmFzZV9jdWJpYW1vX2Ryb3AnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmZpbmQoXCIudGVzc2VyYWJyYWNjaWFsZVwiKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKCcgKyBpbWdza3UgKyAnKScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzk2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbGlua193aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sICdmYXN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmZpbmQoJy50ZXNzZXJhYnJhY2NpYWxlJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMzRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0ZXNzZXJhX3dpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHRlc190b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRlc19sZWZ0ICogbW9sX2xlZnRcclxuICAgICAgICAgICAgICAgICAgICB9LCBcImZhc3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnByZXYoKS5jc3MoJ3otaW5kZXgnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLm5leHQoKS5jc3MoJ3otaW5kZXgnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmNzcygnei1pbmRleCcsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjdGVzc2VyYV9kZXRhaWwnKS5oaWRlKDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG91YmxlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZG91YmxlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Q6IHNrdSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBmcHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBzbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZzogaW1nc2t1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kX2ludDogc2NvZF9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYmw6IGRvdWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLkFnZ2l1bmdpRG91YmxlKGosIG9iamRvdWJsZSwgdGhpcywgc290dHJhaWJhc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoc290dHJhaWJhc2UpICYmIChPYmpCcmFjY2lhbGVbal0uY29kID09ICcnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTnJMaW5rQmFzZS0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iakJyYWNjaWFsZVtqXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kOiBza3UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogZnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogc25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWc6IGltZ3NrdSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZF9pbnQ6IHNjb2RfaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGJsOiBkb3VibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5BZ2dpb3JuYU9iakJyYWNjaWFsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbGYuQ2FsY29sYVJpZXBpbG9nbygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNkaXZfaG92ZXInKS5mYWRlT3V0KDIwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuQ29udHJvbGxhTWluaW1vTkxpbmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKENvbnRhVGVzc2VyZSgpID49IE51bWVyb01pbmltb0xpbmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2FjcXVpc3RhX2JyYWNjaWFsZScpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNtX2FjcXVpc3RhX2ZpeGVkJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI21fcmllcGlsb2dvX2JhZycpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNtX2J0bl9hY3F1aXN0YScpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNhY3F1aXN0YV9icmFjY2lhbGUnKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNtX2FjcXVpc3RhX2ZpeGVkJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjbV9yaWVwaWxvZ29fYmFnJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjbV9idG5fYWNxdWlzdGEnKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5jaXNpYmxlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTW9zdHJhRm9ybUluY2lzaW9uZShqLCByaWdoZV9pbmMsIG1heF9jaGFyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBEcmFnSW5Db3JzbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBWaXN1YWxpenphSG92ZXIoZWxlbSkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBwb3NpeiA9IGpRdWVyeShlbGVtKS5wb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBzY3JlZW5fdyA9IGpRdWVyeSgnI2NvbnRhaW5lcl90ZXNzZXJlJykud2lkdGgoKTtcclxuICAgICAgICB2YXIgZGV0YWlsX3cgPSBqUXVlcnkoJyN0ZXNzZXJhX2RldGFpbCcpLndpZHRoKCk7XHJcbiAgICAgICAgaWYgKHNjcmVlbl93IDwgKHBvc2l6LmxlZnQgKyBkZXRhaWxfdykpIHtcclxuICAgICAgICAgICAgcG9zaXoubGVmdCA9IHNjcmVlbl93IC0gZGV0YWlsX3cgLSAxMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpRdWVyeSgnI3Rlc3NlcmFfZGV0YWlsJykuY3NzKHtcclxuICAgICAgICAgICAgbGVmdDogKHBvc2l6LmxlZnQgLSAyNCksXHJcbiAgICAgICAgICAgIHRvcDogKHBvc2l6LnRvcClcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgYmdpbWcgPSBqUXVlcnkoZWxlbSkuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyk7XHJcbiAgICAgICAgdmFyIHNrdSA9IGpRdWVyeShlbGVtKS5hdHRyKCdza3UnKTtcclxuICAgICAgICB2YXIgY29kX2ludCA9IGpRdWVyeShlbGVtKS5hdHRyKCdjb2RfaW50Jyk7XHJcbiAgICAgICAgdmFyIGltZ3NrdSA9IGpRdWVyeShlbGVtKS5hdHRyKCdpbWdza3UnKTtcclxuICAgICAgICB2YXIgbm9tZSA9IGpRdWVyeShlbGVtKS5hdHRyKCdub21lJyk7XHJcbiAgICAgICAgdmFyIG1hdGVyaWFsZSA9IGpRdWVyeShlbGVtKS5hdHRyKCdtYXRlcmlhbGUnKTtcclxuICAgICAgICB2YXIgcHJpY2UgPSBqUXVlcnkoZWxlbSkuYXR0cigncHJpY2UnKTtcclxuICAgICAgICB2YXIgZnByaWNlID0galF1ZXJ5KGVsZW0pLmF0dHIoJ2ZwcmljZScpO1xyXG4gICAgICAgIHZhciBkb3VibGUgPSBqUXVlcnkoZWxlbSkuYXR0cignZG91YmxlJyk7XHJcbiAgICAgICAgdmFyIGluY2lzaWJsZSA9IGpRdWVyeShlbGVtKS5hdHRyKCdpbmNpc2libGUnKTtcclxuICAgICAgICB2YXIgcmlnaGVfaW5jID0galF1ZXJ5KGVsZW0pLmF0dHIoJ3JpZ2hlX2luYycpO1xyXG4gICAgICAgIHZhciBtYXhfY2hhciA9IGpRdWVyeShlbGVtKS5hdHRyKCdtYXhfY2hhcicpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmNzcygnbWFyZ2luLXRvcCcsICcwcHgnKTtcclxuICAgICAgICBqUXVlcnkoJyNpbWdkZXRhaWwnKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBiZ2ltZyk7XHJcbiAgICAgICAgalF1ZXJ5KCcjaW1nZGV0YWlsJykuYXR0cignc2t1Jywgc2t1KTtcclxuICAgICAgICBqUXVlcnkoJyNpbWdkZXRhaWwnKS5hdHRyKCdjb2RfaW50JywgY29kX2ludCk7XHJcbiAgICAgICAgalF1ZXJ5KCcjaW1nZGV0YWlsJykuYXR0cignaW1nc2t1JywgaW1nc2t1KTtcclxuICAgICAgICBqUXVlcnkoJyNpbWdkZXRhaWwnKS5hdHRyKCdmcHJpY2UnLCBmcHJpY2UpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmF0dHIoJ3ByaWNlJywgcHJpY2UpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmF0dHIoJ25vbWUnLCBub21lKTtcclxuICAgICAgICBqUXVlcnkoJyNpbWdkZXRhaWwnKS5hdHRyKCdtYXRlcmlhbGUnLCBtYXRlcmlhbGUpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmF0dHIoJ2RvdWJsZScsIGRvdWJsZSk7XHJcbiAgICAgICAgalF1ZXJ5KCcjaW1nZGV0YWlsJykuYXR0cignaW5jaXNpYmxlJywgaW5jaXNpYmxlKTtcclxuICAgICAgICBqUXVlcnkoJyNpbWdkZXRhaWwnKS5hdHRyKCdyaWdoZV9pbmMnLCByaWdoZV9pbmMpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmF0dHIoJ21heF9jaGFyJywgbWF4X2NoYXIpO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHN0cmh0bWwgPSAnPHNwYW4gY2xhc3M9XCJ0aXRvbG9kZXRhaWxcIj4nICsgbm9tZSArICc8L3NwYW4+PGJyPic7XHJcbiAgICAgICAgLy9zdHJodG1sICs9IG1hdGVyaWFsZSArICc8YnI+JztcclxuICAgICAgICBzdHJodG1sICs9IHNlbGYuR2V0UHJpY2VIdG1sKHByaWNlLCBmcHJpY2UsICdwcmljZWRldGFpbCcpO1xyXG5cclxuICAgICAgICBqUXVlcnkoJyN0ZXh0ZGV0YWlsJykuaHRtbChzdHJodG1sKTtcclxuICAgICAgICBqUXVlcnkoJyN0ZXNzZXJhX2RldGFpbCcpLnNob3coMCk7XHJcbiAgICAgICAgLy9qUXVlcnkoJyNkaXZfaG92ZXInKS5mYWRlSW4oMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRQcmljZUh0bWwocHJpY2UsIGZpbmFsX3ByaWNlLCBzdHJjbGFzcykge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciB2cHJpY2UgPSBwYXJzZUZsb2F0KHByaWNlKTtcclxuICAgICAgICB2YXIgdmZpbmFsX3ByaWNlID0gcGFyc2VGbG9hdChmaW5hbF9wcmljZSk7XHJcblxyXG4gICAgICAgIGlmICghUHVsc2FudGVBY3F1aXN0YSkge1xyXG4gICAgICAgICAgICBzdHJjbGFzcyArPSAnIG5vcHJpY2UnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGh0bWxwcmljZSA9ICcnO1xyXG4gICAgICAgIHZhciBodG1sZmluYWxfcHJpY2UgPSAnJztcclxuICAgICAgICBpZiAodnByaWNlICE9IHZmaW5hbF9wcmljZSkge1xyXG4gICAgICAgICAgICBodG1sZmluYWxfcHJpY2UgPSAnPHAgY2xhc3M9XCJvbGQtcHJpY2VcIj48c3BhbiBjbGFzcz1cInByaWNlXCI+JyArIHNlbGYuRGlzcGxheUN1cnJlbmN5KHZwcmljZSkgKyAnICcgKyBTaW1ib2xvVmFsdXRhICsgJyA8L3NwYW4+PC9wPic7XHJcbiAgICAgICAgICAgIGh0bWxwcmljZSA9ICc8ZGl2IGNsYXNzPVwiJyArIHN0cmNsYXNzICsgJ1wiPicgKyBodG1sZmluYWxfcHJpY2UgKyBzZWxmLkRpc3BsYXlDdXJyZW5jeSh2ZmluYWxfcHJpY2UpICsgJyAnICsgU2ltYm9sb1ZhbHV0YSArICc8L2Rpdj4nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGh0bWxwcmljZSA9ICc8ZGl2IGNsYXNzPVwiJyArIHN0cmNsYXNzICsgJ1wiPicgKyBodG1sZmluYWxfcHJpY2UgKyBzZWxmLkRpc3BsYXlDdXJyZW5jeSh2cHJpY2UpICsgJyAnICsgU2ltYm9sb1ZhbHV0YSArICc8L2Rpdj4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaHRtbHByaWNlO1xyXG4gICAgfVxyXG4gICAgRGlzcGxheUN1cnJlbmN5KHZhbG9yZSkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KE1hdGgucm91bmQodmFsb3JlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcclxuICAgIH1cclxuXHJcbiAgICBlc2NfcXVvdCh0ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZUFsbCgnXCInLCAnJnF1b3Q7Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgUmVmcmVzaFNsaWRlRmlsdHJpKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBzaXplID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBsYXJnaCA9IDA7XHJcbiAgICAgICAgdmFyIG5yX2xpID0gMDtcclxuICAgICAgICBqUXVlcnkoJyNmaWx0cmlfYXR0aXZpIC50b3VjaGNhcm91c2VsIHVsIGxpJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICBsYXJnaCArPSBqUXVlcnkodGhpcykud2lkdGgoKTtcclxuICAgICAgICAgICAgbnJfbGkrKztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGxhcmdoID4gc2l6ZS53aWR0aCkge1xyXG4gICAgICAgICAgICBzZWxmLkZpbHRyaVRDID0galF1ZXJ5KCcjZmlsdHJpX2F0dGl2aSAudG91Y2hjYXJvdXNlbCcpLnRvdWNoQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBhZ2luZ05hdkNvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbk5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb0xhc3Q6IHRydWVcclxuICAgICAgICAgICAgfSkuZGF0YSgndG91Y2hDYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNmaWx0cmlfYXR0aXZpIC50b3VjaGNhcm91c2VsIHVsJykud2lkdGgobGFyZ2ggKyAxMCk7XHJcbiAgICAgICAgICAgIEZpbHRyaVRDLmdvVG8obnJfbGkpOyAvL2xpX3Z1b3RvO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGYuRmlsdHJpVEMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGluaXREZWZhdWx0KCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGpRdWVyeSgnI2JyYWNjaWFsZScpLnNvcnRhYmxlKHtcclxuICAgICAgICAgICAgaGFuZGxlOiAnLmhhbmRsZXRlc3NlcmEnLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICAgICAgICAgIGFwcGVuZFRvOiAnYm9keScsXHJcbiAgICAgICAgICAgIGhlbHBlcjogJ29yaWdpbmFsJyxcclxuICAgICAgICAgICAgZGVsYXk6IHNlbGYuRGVsYXlUb3VjaCxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLCAvLyghaXNNb2JpbGUpLFxyXG4gICAgICAgICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGFydDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLlNvcnRTdGFydCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodWkuaXRlbSkuZmluZCgnLnN0ZWxsYV9pbmNpc2lvbmUnKS5mYWRlT3V0KDIwMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KCcjdG9vbHRpcF9pbmNpc2lvbmUnKS5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjdG9vbHRpcF9pbmNpc2lvbmUnKS5mYWRlT3V0KDIwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5Tb3J0U3RhcnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHZhciBqID0galF1ZXJ5KHVpLml0ZW0pLmF0dHIoJ25yYmFzZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iakJyYWNjaWFsZVtqXS5pbmNpc2lvbiA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYmFzZV8nICsgaikuZmluZCgnLnN0ZWxsYV9pbmNpc2lvbmUnKS5mYWRlSW4oMjAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGpRdWVyeSh1aS5pdGVtKS5wcmV2KCkuY3NzKCd6LWluZGV4JywgJycpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHVpLml0ZW0pLm5leHQoKS5jc3MoJ3otaW5kZXgnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodWkuaXRlbSkuY3NzKCd6LWluZGV4JywgJzEnKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuQWdnaW9ybmFPYmpCcmFjY2lhbGUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcclxuICAgICAgICAgICAgICAgIHVpLml0ZW0udW5iaW5kKFwiY2xpY2tcIik7XHJcbiAgICAgICAgICAgICAgICB1aS5pdGVtLm9uZShcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbmUtdGltZS1jbGlja1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0galF1ZXJ5KHRoaXMpLmZpbmQoJy5zdGVsbGFfaW5jaXNpb25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqUXVlcnkoZWxlbWVudCkuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKCcuc3RlbGxhX2luY2lzaW9uZScpLmZhZGVPdXQoMjAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuTW9zdHJhVG9vbGlwSW5jaXNpb25lKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJy5zdGVsbGFfaW5jaXNpb25lJykuZmFkZUluKDIwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG4gICAgICAgICAgICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICBqUXVlcnkoXCIjYnJhY2NpYWxlXCIpLnNvcnRhYmxlKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGlmZiA9IE1hdGguYWJzKHVpLm9yaWdpbmFsUG9zaXRpb24udG9wIC0gdWkucG9zaXRpb24udG9wKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaWZmID4gNjApIHtcclxuICAgICAgICAgICAgICAgICAgICBSaW11b3ZpVGVzc2VyYShqUXVlcnkodWkuaXRlbSksIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBzaXplID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBqUXVlcnkoJyNicmFjY2lhbGVfem9vbScpLndpZHRoKHNpemUud2lkdGgpO1xyXG4gICAgICAgIHNlbGYuQnJhY2NpYWxlWm9vbSA9IGpRdWVyeSgnI2JyYWNjaWFsZV96b29tJykudG91Y2hDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGl0ZW1GYWxsYmFja1dpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgIHNjcm9sbGJhcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGRyYWdVc2luZ01vdXNlOiBmYWxzZVxyXG4gICAgICAgIH0pLmRhdGEoXCJ0b3VjaENhcm91c2VsXCIpO1xyXG4gICAgICAgIHNlbGYuQWdnaW9ybmFUcmlnZ2VyVGVzc2VyZSgpO1xyXG4gICAgfVxyXG4gICAgTW9zdHJhVG9vbGlwSW5jaXNpb25lKGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBpZiAoalF1ZXJ5KCcjdG9vbHRpcF9pbmNpc2lvbmUnKS5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgIHZhciBqc3RlbGxhID0galF1ZXJ5KCcjdG9vbHRpcF9pbmNpc2lvbmUnKS5hdHRyKCducmJhc2UnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjYmFzZV8nICsganN0ZWxsYSkuZmluZCgnLnN0ZWxsYV9pbmNpc2lvbmUnKS5mYWRlSW4oMjAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGogPSBqUXVlcnkoZWxlbWVudCkucGFyZW50KCkuYXR0cignbnJiYXNlJyk7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0galF1ZXJ5KGVsZW1lbnQpLnBhcmVudCgpLnBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIHdwYXJlbnQgPSBqUXVlcnkoZWxlbWVudCkucGFyZW50KCkud2lkdGgoKTtcclxuICAgICAgICB2YXIgbGVmdCA9IHBvc2l0aW9uLmxlZnQgKyAoKHdwYXJlbnQgLSBqUXVlcnkoJyN0b29sdGlwX2luY2lzaW9uZScpLndpZHRoKCkpIC8gMikgKyBzZWxmLk9mZnNldFRvb2xUaXA7XHJcbiAgICAgICAgalF1ZXJ5KCcjdG9vbHRpcF9pbmNpc2lvbmUnKS5hdHRyKCducmJhc2UnLCBqKTtcclxuICAgICAgICBqUXVlcnkoJyN0b29sdGlwX2luY2lzaW9uZScpLmNzcyhcImZvbnQtZmFtaWx5XCIsIFwiJ1wiICsgT2JqQnJhY2NpYWxlW2pdLmZvbnQgKyBcIicsIHNhbnMtc2VyaWZcIik7XHJcbiAgICAgICAgalF1ZXJ5KCcjdG9vbHRpcF9pbmNpc2lvbmUnKS5jc3MoJ2xlZnQnLCBsZWZ0KTtcclxuICAgICAgICB2YXIgc3RyaHRtbCA9ICc8ZGl2IGNsYXNzPVwidGV4dGNvbnRhaW5lclwiPic7XHJcbiAgICAgICAgaWYgKE9iakJyYWNjaWFsZVtqXS5sMiA9PSAnJykge1xyXG4gICAgICAgICAgICBzdHJodG1sICs9ICc8ZGl2IGNsYXNzPVwiaW5uZXJcIj4nICsgT2JqQnJhY2NpYWxlW2pdLmwxICsgJzwvZGl2Pic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyaHRtbCArPSAnPGRpdiBjbGFzcz1cImlubmVyXCI+JyArIE9iakJyYWNjaWFsZVtqXS5sMSArICc8YnI+JyArIE9iakJyYWNjaWFsZVtqXS5sMiArICc8L2Rpdj4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHJodG1sICs9ICc8L2Rpdj4nO1xyXG4gICAgICAgIGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykuaHRtbChzdHJodG1sKTtcclxuICAgICAgICBqUXVlcnkoJyN0b29sdGlwX2luY2lzaW9uZScpLmZhZGVJbigyMDApO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5mYWRlT3V0KDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgQWdnaW9ybmFUcmlnZ2VyVGVzc2VyZSgpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zdCBpc01vYmlsZSA9IHNlbGYuaXNNb2JpbGU7XHJcbiAgICAgICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi50ZXNzZXJhXCIpLmRyYWdnYWJsZSh7XHJcbiAgICAgICAgICAgICAgICBjb250YWlubWVudDogJ2RvY3VtZW50JyxcclxuICAgICAgICAgICAgICAgIHJldmVydDogJ2ludmFsaWQnLFxyXG4gICAgICAgICAgICAgICAgaGVscGVyOiAnY2xvbmUnLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlOiAnZGl2LmRyYWcnLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiAxMDAsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICAgICAgICAgICAgICBkZWxheTogc2VsZi5EZWxheVRvdWNoLFxyXG4gICAgICAgICAgICAgICAgYXBwZW5kVG86ICdib2R5JyxcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiBmdW5jdGlvbihldmVudCwgdWkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLkNoaXVkaUJhcnJhUmllcGlsb2dvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgRHJhZ0luQ29yc28gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIERyYWdJbkNvcnNvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGpRdWVyeSgnLmRyYWcnKS5zd2lwZSh7XHJcbiAgICAgICAgICAgICAgICBzd2lwZVVwOiBmdW5jdGlvbihldmVudCwgZGlyZWN0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24sIGZpbmdlckNvdW50LCBmaW5nZXJEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGR1cmF0aW9uIDwgc2VsZi5EZWxheVRvdWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogalF1ZXJ5KHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAoMi41ICogZGlzdGFuY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCwgJ3N3aW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN3aXBlRG93bjogZnVuY3Rpb24oZXZlbnQsIGRpcmVjdGlvbiwgZGlzdGFuY2UsIGR1cmF0aW9uLCBmaW5nZXJDb3VudCwgZmluZ2VyRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkdXJhdGlvbiA8IHNlbGYuRGVsYXlUb3VjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IGpRdWVyeSh3aW5kb3cpLnNjcm9sbFRvcCgpIC0gKDIuNSAqIGRpc3RhbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDAsICdzd2luZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhbGxvd1BhZ2VTY3JvbGw6IFwiYXV0b1wiXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoXCIuZHJhZ1wiKS5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbm1lbnQ6ICdkb2N1bWVudCcsXHJcbiAgICAgICAgICAgICAgICByZXZlcnQ6ICdpbnZhbGlkJyxcclxuICAgICAgICAgICAgICAgIGhlbHBlcjogJ2Nsb25lJyxcclxuICAgICAgICAgICAgICAgIHpJbmRleDogMTAwLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICAgICAgICAgICAgYXBwZW5kVG86ICdib2R5JyxcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiBmdW5jdGlvbihldmVudCwgdWkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLkNoaXVkaUJhcnJhUmllcGlsb2dvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgRHJhZ0luQ29yc28gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIERyYWdJbkNvcnNvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjdGVzc2VyYV9kZXRhaWwnKS5oaWRlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2NvbmZfc3VnZ2VyaW1lbnRvJykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpRdWVyeSgnLnRlc3NlcmEnKS5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIWlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIURyYWdJbkNvcnNvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuSW50ZXJ2YWxsb0hvdmVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5WaXN1YWxpenphSG92ZXIoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoJyN0ZXNzZXJhX2RldGFpbCcpLm1vdXNlbGVhdmUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghRHJhZ0luQ29yc28pIHtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyN0ZXNzZXJhX2RldGFpbCcpLmhpZGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuSW50ZXJ2YWxsb0hvdmVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoJy5zdGVsbGFfaW5jaXNpb25lJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIE1vc3RyYVRvb2x0aXBJbmNpc2lvbmUodGhpcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBqID0galF1ZXJ5KHRoaXMpLmF0dHIoJ25yYmFzZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBqKS5maW5kKCcuc3RlbGxhX2luY2lzaW9uZScpLmZhZGVJbigyMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qXHJcblx0IGpRdWVyeSgnI2Rpdl9ob3ZlcicpLm1vdXNlZW50ZXIoZnVuY3Rpb24gKCkge1xyXG5cdCBpZiAoIURyYWdJbkNvcnNvKSB7XHJcblx0IGlmIChqUXVlcnkoJyN0ZXNzZXJhX2RldGFpbDpob3ZlcicpLmxlbmd0aCA9PSAwKSB7XHJcblx0IGpRdWVyeSgnI2Rpdl9ob3ZlcicpLmZhZGVPdXQoMjAwKTtcclxuXHQgY2xlYXJUaW1lb3V0KHNlbGYuSW50ZXJ2YWxsb0hvdmVyKTtcclxuXHQgfVxyXG5cdCB9XHJcblx0IH0pO1xyXG5cdCAqL1xyXG4gICAgfVxyXG4gICAgU2V0dGFQb3NpemlvbmlUZXNzZXJlKFRpcG9CcmFjY2lhbGUpIHtcclxuICAgICAgICBzd2l0Y2ggKFRpcG9CcmFjY2lhbGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnY2xhc3NpYyc6XHJcbiAgICAgICAgICAgICAgICB0ZXNfdG9wID0gLTIzO1xyXG4gICAgICAgICAgICAgICAgdGVzX2xlZnQgPSAtMzA7XHJcbiAgICAgICAgICAgICAgICB0ZXNfdG9wMSA9IC0yNTtcclxuICAgICAgICAgICAgICAgIHRlc19sZWZ0MSA9IC0zMztcclxuICAgICAgICAgICAgICAgIHRlc190b3BfbyA9IC0yNjtcclxuICAgICAgICAgICAgICAgIHRlc19sZWZ0X28gPSAtMzU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYmlnJzpcclxuICAgICAgICAgICAgICAgIHRlc190b3AgPSAtMTM7XHJcbiAgICAgICAgICAgICAgICB0ZXNfbGVmdCA9IC0zMDtcclxuICAgICAgICAgICAgICAgIHRlc190b3AxID0gLTE0O1xyXG4gICAgICAgICAgICAgICAgdGVzX2xlZnQxID0gLTM1O1xyXG4gICAgICAgICAgICAgICAgdGVzX3RvcF9vID0gLTE2O1xyXG4gICAgICAgICAgICAgICAgdGVzX2xlZnRfbyA9IC0zNTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtYmJzaG9ydCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ21iYmxvbmcnOlxyXG4gICAgICAgICAgICAgICAgdGVzX3RvcCA9IC0yNDtcclxuICAgICAgICAgICAgICAgIHRlc19sZWZ0ID0gLTMxO1xyXG4gICAgICAgICAgICAgICAgdGVzX3RvcDEgPSAtMjY7XHJcbiAgICAgICAgICAgICAgICB0ZXNfbGVmdDEgPSAtMzM7XHJcbiAgICAgICAgICAgICAgICB0ZXNfdG9wX28gPSAtMjg7XHJcbiAgICAgICAgICAgICAgICB0ZXNfbGVmdF9vID0gLTM3O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NlaW1pYSc6XHJcbiAgICAgICAgICAgICAgICB0ZXNfdG9wID0gNjtcclxuICAgICAgICAgICAgICAgIHRlc19sZWZ0ID0gLTMxO1xyXG4gICAgICAgICAgICAgICAgdGVzX3RvcDEgPSA4O1xyXG4gICAgICAgICAgICAgICAgdGVzX2xlZnQxID0gLTMzO1xyXG4gICAgICAgICAgICAgICAgdGVzX3RvcF9vID0gMTA7XHJcbiAgICAgICAgICAgICAgICB0ZXNfbGVmdF9vID0gLTM3O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0ZXNfdG9wID0gLTI0O1xyXG4gICAgICAgICAgICAgICAgdGVzX2xlZnQgPSAtMzE7XHJcbiAgICAgICAgICAgICAgICB0ZXNfdG9wMSA9IC0yNjtcclxuICAgICAgICAgICAgICAgIHRlc19sZWZ0MSA9IC0zMztcclxuICAgICAgICAgICAgICAgIHRlc190b3BfbyA9IC0yODtcclxuICAgICAgICAgICAgICAgIHRlc19sZWZ0X28gPSAtMzc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBDaGl1ZGlCYXJyYVJpZXBpbG9nbygpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBpZiAoc2VsZi5TY3JvbGxCYXIpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjcmllcGlsb2dvX3Rlc3NlcmUnKS5wZXJmZWN0U2Nyb2xsYmFyKCdkZXN0cm95Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGpRdWVyeSgnI3JpZXBpbG9nb190ZXNzZXJlJykuaGlkZSgyMDApO1xyXG4gICAgICAgIC8valF1ZXJ5KFwiI3JpZV90b3RcIikuaGlkZSgwKTtcclxuICAgICAgICBqUXVlcnkoJyNyaWVwaWxvZ29fYnJhY2NpYWxlJykuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybCgnICsgU0tJTlVSTCArICcvaW1nL2JncmllcGlsb2dvLnBuZyknKTtcclxuICAgIH1cclxuICAgIE1vc3RyYURldHRhZ2xpb092ZXIoaikge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBwbmd0ZXNzZXJhID0gJ3Rlc3NlcmFfYmFzZV9kcmFnJztcclxuICAgICAgICB2YXIgYWRkY2xhc3MgPSAnJztcclxuICAgICAgICBzd2l0Y2ggKCdiaWcnKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NsYXNzaWMnOlxyXG4gICAgICAgICAgICAgICAgcG5ndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqQnJhY2NpYWxlW2pdLmRibCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG5ndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZ19kb3VibGUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JpZyc6XHJcbiAgICAgICAgICAgICAgICBwbmd0ZXNzZXJhID0gJ3Rlc3NlcmFfYmFzZV9kcmFnX2JpZyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ21iYnNob3J0JzpcclxuICAgICAgICAgICAgY2FzZSAnbWJibG9uZyc6XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNkZXR0YWdsaW9fb3ZlciAucmllX3Rlc19pbWcnKS5hZGRDbGFzcygnbm9wZW5kZW50aScpO1xyXG4gICAgICAgICAgICAgICAgcG5ndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZ19tYmInO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdzZWltaWEnOlxyXG4gICAgICAgICAgICAgICAgcG5ndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZ19zZWltaWEnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjZGV0dGFnbGlvX292ZXIgLnJpZV90ZXNfaW1nJykuYWRkQ2xhc3MoJ25vcGVuZGVudGknKTtcclxuICAgICAgICAgICAgICAgIHBuZ3Rlc3NlcmEgPSAndGVzc2VyYV9iYXNlX2RyYWdfY3ViaWFtbyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBiZ2ltYWdlID0gJ3VybCgnICsgT2JqQnJhY2NpYWxlW2pdLmltZyArICcpLCB1cmwoJyArIFNLSU5VUkwgKyAnaW1nLycgKyBwbmd0ZXNzZXJhICsgJy5wbmcpJztcclxuICAgICAgICBqUXVlcnkoJyNkZXR0YWdsaW9fb3ZlciAucmllX3Rlc19pbWcnKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBiZ2ltYWdlKTtcclxuICAgICAgICB2YXIgc3RyaHRtbCA9IE9iakJyYWNjaWFsZVtqXS5uYW1lICsgJzxicj4nXHJcbiAgICAgICAgc3RyaHRtbCArPSBzZWxmLkdldFByaWNlSHRtbChPYmpCcmFjY2lhbGVbal0ucHJpY2UsIE9iakJyYWNjaWFsZVtqXS5wcmljZSwgJ3ByaWNlZGV0YWlsJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcjZGV0dGFnbGlvX292ZXIgLnRlc3RvJykuaHRtbChzdHJodG1sKTtcclxuICAgICAgICBqUXVlcnkoJyNkZXR0YWdsaW9fb3ZlcicpLnNob3coKTtcclxuICAgIH1cclxuICAgIEFnZ2lvcm5hT2JqQnJhY2NpYWxlKCkge1xyXG4gICAgICAgIGpRdWVyeSgnI2JyYWNjaWFsZSAudGVzc2VyYV9iYXNlJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICAgICAgICB2YXIgaiA9IHBhcnNlSW50KGpRdWVyeSh0aGlzKS5hdHRyKCducmJhc2UnKSk7XHJcbiAgICAgICAgICAgIE9iakJyYWNjaWFsZVtqXS5pZCA9IGluZGV4O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgQWdnaXVuZ2lEb3VibGUoaiwgb2JqZG91YmxlLCBlbGVtZW50LCBzb3R0cmFpYmFzZSkge1xyXG4gICAgICAgIGlmICgoc290dHJhaWJhc2UpICYmIChPYmpCcmFjY2lhbGVbal0uY29kID09ICcnKSkge1xyXG4gICAgICAgICAgICBOckxpbmtCYXNlLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iakJyYWNjaWFsZVtqXSA9IG9iamRvdWJsZTtcclxuICAgICAgICB2YXIgaWR0aGlzID0galF1ZXJ5KGVsZW1lbnQpLnBhcmVudCgpLmF0dHIoJ25yYmFzZScpO1xyXG4gICAgICAgIHZhciBpZG5leHQgPSBqUXVlcnkoZWxlbWVudCkucGFyZW50KCkubmV4dCgpLmF0dHIoJ25yYmFzZScpO1xyXG4gICAgICAgIGlmIChqUXVlcnkoJyNiYXNlXycgKyBpZG5leHQpLmF0dHIoJ2RvdWJsZScpID09ICcxJykge1xyXG4gICAgICAgICAgICBSaW11b3ZpRG91YmxlKGlkbmV4dCwgbnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGpRdWVyeShlbGVtZW50KS5wYXJlbnQoKS5uZXh0KCkuaGlkZSgpO1xyXG4gICAgICAgIGpRdWVyeSgnI2Jhc2VfJyArIGlkbmV4dCkuYXBwZW5kVG8oJyNiYXNlXycgKyBpZHRoaXMpO1xyXG4gICAgICAgIGpRdWVyeShlbGVtZW50KS5wYXJlbnQoKS5maW5kKCcuaGFuZGxldGVzc2VyYScpLmNzcygnd2lkdGgnLCAnOTJweCcpO1xyXG4gICAgICAgIGlmICgoc290dHJhaWJhc2UpICYmIChPYmpCcmFjY2lhbGVbaWRuZXh0XS5jb2QgPT0gJycpKSB7XHJcbiAgICAgICAgICAgIE5yTGlua0Jhc2UtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqQnJhY2NpYWxlW2lkbmV4dF0uaWQgPSBqO1xyXG4gICAgICAgIE9iakJyYWNjaWFsZVtpZG5leHRdLmNvZCA9ICdkb3VibGUnO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==