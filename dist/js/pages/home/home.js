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
    var ScrollBar = false;
    var size; // Controllo caricamenti

    var mustBeBlocked = false;
    this.init();
  }

  _createClass(Constructor, [{
    key: "init",
    value: function init() {
      this.SettaPosizioniTessere(TipoBracciale);
      this.events();
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
      var dimension = self.size;
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
            top: dimension.tes_top_o + meno_top,
            left: dimension.tes_left_o * link_mol + meno_left
          }, 'fast');
          jQuery(this).prev().find('.tesserabracciale').stop().animate({
            height: '145px',
            width: width_tessera_prev,
            top: dimension.tes_top1,
            left: dimension.tes_left1 * prev_mol
          }, 'fast');
          jQuery(this).next().find('.tesserabracciale').stop().animate({
            height: '145px',
            width: width_tessera_next,
            top: dimension.tes_top1,
            left: dimension.tes_left1 * next_mol
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
            top: dimension.tes_top,
            left: dimension.tes_left * link_mol
          }, 'fast');
          jQuery(this).next().find('.tesserabracciale').stop().animate({
            height: '134px',
            width: width_tessera_next,
            top: dimension.tes_top,
            left: dimension.tes_left * next_mol
          }, 'fast');
          jQuery(this).prev().find('.tesserabracciale').stop().animate({
            height: '134px',
            width: width_tessera_prev,
            top: dimension.tes_top,
            left: dimension.tes_left * prev_mol
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
            top: dimension.tes_top_o,
            left: dimension.tes_left_o * link_mol
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
            top: dimension.tes_top,
            left: dimension.tes_left * link_mol
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
            switch (TipoBracciale) {
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
              height: '96px',
              width: link_width,
              marginTop: '0px'
            }, 'fast');
            jQuery(this).parent().find('.tesserabracciale').stop().animate({
              height: '134px',
              width: tessera_width,
              top: dimension.tes_top,
              left: dimension.tes_left * mol_left
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
      var self = this;
      var size = {
        tes_top: -24,
        tes_left: -31,
        tes_top1: -26,
        tes_left1: -33,
        tes_top_o: -28,
        tes_left_o: -37
      };

      switch (TipoBracciale) {
        case 'classic':
          size = {
            tes_top: -23,
            tes_left: -30,
            tes_top1: -25,
            tes_left1: -33,
            tes_top_o: -26,
            tes_left_o: -35
          };
          break;

        case 'big':
          size = {
            tes_top: -13,
            tes_left: -30,
            tes_top1: -14,
            tes_left1: -35,
            tes_top_o: -16,
            tes_left_o: -35
          };
          break;

        case 'mbbshort':
        case 'mbblong':
          size = {
            tes_top: -24,
            tes_left: -31,
            tes_top1: -26,
            tes_left1: -33,
            tes_top_o: -28,
            tes_left_o: -37
          };
          break;

        case 'seimia':
          size = {
            tes_top: 6,
            tes_left: -31,
            tes_top1: 8,
            tes_left1: -33,
            tes_top_o: 10,
            tes_left_o: -37
          };
          break;
      }

      self.size = size;
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

      switch (TipoBracciale) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2VzL2hvbWUvaG9tZS5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvaG9tZS9tb2R1bGVzL2NvbnN0cnVjdG9yLmpzIl0sIm5hbWVzIjpbIkhvbWVWaWV3IiwiaW5pdCIsIkNvbnN0cnVjdG9yIiwiaXNNb2JpbGUiLCJDaGVja0lzTW9iaWxlIiwiSW50ZXJ2YWxsb0hvdmVyIiwiQnJhY2NpYWxlWm9vbSIsIkZpbHRyb0FwZXJ0byIsIlByaW1vQWNjZXNzbyIsIkxhY2Npb0JyYWNjaWFsZSIsImRldGFpbF92aXNpYmxlIiwiUmljZXJjYUF0dGl2YSIsIlNvcnRTdGFydCIsImxhcmdoZXp6YSIsImpRdWVyeSIsIndpbmRvdyIsIndpZHRoIiwiRmlsdHJpVEMiLCJEZWxheVRvdWNoIiwicGFnaW5hdXJsIiwiQ29udHJvbGxhTWluaW1vTkxpbmsiLCJPZmZzZXRUb29sVGlwIiwiQXJySW5jaXNpb25pIiwiQXJyYXkiLCJTY3JvbGxCYXIiLCJzaXplIiwibXVzdEJlQmxvY2tlZCIsIlNldHRhUG9zaXppb25pVGVzc2VyZSIsIlRpcG9CcmFjY2lhbGUiLCJldmVudHMiLCJSZWZyZXNoU2xpZGVGaWx0cmkiLCJpbml0RGVmYXVsdCIsImRvY3VtZW50IiwiY3JlYXRlRXZlbnQiLCJlIiwic2VsZiIsImRpbWVuc2lvbiIsIm1vdXNlZW50ZXIiLCJlbGVtIiwic2V0VGltZW91dCIsIlZpc3VhbGl6emFIb3ZlciIsIm1vdXNlbGVhdmUiLCJEcmFnSW5Db3JzbyIsImhpZGUiLCJjbGVhclRpbWVvdXQiLCJvbiIsImlubmVyV2lkdGgiLCJib2R5IiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInVsd2lkdGgiLCJ4cG9zIiwic2V0WFBvcyIsImZhZGVJbiIsImZhZGVPdXQiLCJlbGVtZW50IiwiZmluZCIsImlzIiwiTW9zdHJhVG9vbGlwSW5jaXNpb25lIiwibGlua193aWR0aCIsInRlc3NlcmFfd2lkdGgiLCJ3aWR0aF9uZXh0Iiwid2lkdGhfdGVzc2VyYV9uZXh0Iiwid2lkdGhfcHJldiIsIndpZHRoX3Rlc3NlcmFfcHJldiIsImxpbmtfbW9sIiwibmV4dF9tb2wiLCJwcmV2X21vbCIsIm1lbm9fbGVmdCIsIm1lbm9fdG9wIiwiYXR0ciIsInByZXYiLCJuZXh0Iiwic3RvcCIsImFuaW1hdGUiLCJtYXJnaW5Ub3AiLCJ0b3AiLCJ0ZXNfdG9wX28iLCJsZWZ0IiwidGVzX2xlZnRfbyIsInRlc190b3AxIiwidGVzX2xlZnQxIiwiaiIsIk9iakJyYWNjaWFsZSIsImNvZCIsIk1vc3RyYURldHRhZ2xpb092ZXIiLCJ0ZXNfdG9wIiwidGVzX2xlZnQiLCJkcm9wcGFibGUiLCJhY2NlcHQiLCJ0b2xlcmFuY2UiLCJhY3RpdmVDbGFzcyIsIm92ZXIiLCJldmVudCIsInVpIiwicGFyZW50Iiwib3V0IiwiZHJvcCIsInNuYW1lIiwiZHJhZ2dhYmxlIiwiaW1nc2t1Iiwic2t1Iiwic2NvZF9pbnQiLCJmcHJpY2UiLCJkb3VibGUiLCJpbmNpc2libGUiLCJyaWdoZV9pbmMiLCJtYXhfY2hhciIsInNvdHRyYWliYXNlIiwicGFyc2VJbnQiLCJtb2xfbGVmdCIsIk5yTGluayIsImRibCIsIlJpbXVvdmlEb3VibGUiLCJhZGRDbGFzcyIsInJlcGxhY2UiLCJjc3MiLCJvYmpkb3VibGUiLCJpZCIsInByaWNlIiwibmFtZSIsImltZyIsImNvZF9pbnQiLCJBZ2dpdW5naURvdWJsZSIsIk5yTGlua0Jhc2UiLCJBZ2dpb3JuYU9iakJyYWNjaWFsZSIsIkNvbnRhVGVzc2VyZSIsIk51bWVyb01pbmltb0xpbmsiLCJyZW1vdmVDbGFzcyIsIk1vc3RyYUZvcm1JbmNpc2lvbmUiLCJwb3NpeiIsInBvc2l0aW9uIiwic2NyZWVuX3ciLCJkZXRhaWxfdyIsImJnaW1nIiwibm9tZSIsIm1hdGVyaWFsZSIsInN0cmh0bWwiLCJHZXRQcmljZUh0bWwiLCJodG1sIiwic2hvdyIsImZpbmFsX3ByaWNlIiwic3RyY2xhc3MiLCJ2cHJpY2UiLCJwYXJzZUZsb2F0IiwidmZpbmFsX3ByaWNlIiwiUHVsc2FudGVBY3F1aXN0YSIsImh0bWxwcmljZSIsImh0bWxmaW5hbF9wcmljZSIsIkRpc3BsYXlDdXJyZW5jeSIsIlNpbWJvbG9WYWx1dGEiLCJ2YWxvcmUiLCJNYXRoIiwicm91bmQiLCJ0b0ZpeGVkIiwidGV4dCIsInJlcGxhY2VBbGwiLCJsYXJnaCIsIm5yX2xpIiwiZWFjaCIsImluZGV4IiwidG91Y2hDYXJvdXNlbCIsInNjcm9sbGJhciIsInBhZ2luZ05hdkNvbnRyb2xzIiwiZGlyZWN0aW9uTmF2Iiwic2Nyb2xsVG9MYXN0IiwiZGF0YSIsImdvVG8iLCJzb3J0YWJsZSIsImhhbmRsZSIsIm9wYWNpdHkiLCJhcHBlbmRUbyIsImhlbHBlciIsImRlbGF5IiwiZGlzYWJsZWQiLCJhY3RpdmF0ZSIsInN0YXJ0IiwiaXRlbSIsImluY2lzaW9uIiwidXBkYXRlIiwidW5iaW5kIiwib25lIiwiY29uc29sZSIsImxvZyIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImRlYWN0aXZhdGUiLCJkaWZmIiwiYWJzIiwib3JpZ2luYWxQb3NpdGlvbiIsIlJpbXVvdmlUZXNzZXJhIiwiaXRlbUZhbGxiYWNrV2lkdGgiLCJkcmFnVXNpbmdNb3VzZSIsIkFnZ2lvcm5hVHJpZ2dlclRlc3NlcmUiLCJqc3RlbGxhIiwid3BhcmVudCIsImZvbnQiLCJsMiIsImwxIiwiY29udGFpbm1lbnQiLCJyZXZlcnQiLCJ6SW5kZXgiLCJDaGl1ZGlCYXJyYVJpZXBpbG9nbyIsInN3aXBlIiwic3dpcGVVcCIsImRpcmVjdGlvbiIsImRpc3RhbmNlIiwiZHVyYXRpb24iLCJmaW5nZXJDb3VudCIsImZpbmdlckRhdGEiLCJzY3JvbGxUb3AiLCJzd2lwZURvd24iLCJhbGxvd1BhZ2VTY3JvbGwiLCJzY3JvbGwiLCJNb3N0cmFUb29sdGlwSW5jaXNpb25lIiwicGVyZmVjdFNjcm9sbGJhciIsIlNLSU5VUkwiLCJwbmd0ZXNzZXJhIiwiYWRkY2xhc3MiLCJiZ2ltYWdlIiwiaWR0aGlzIiwiaWRuZXh0IiwiaW5zZXJ0QWZ0ZXIiLCJzaWxlbnQiLCJoYXNDbGFzcyIsImlkcGFyIiwicmVtb3ZlIiwiQ2FsY29sYVJpZXBpbG9nbyIsIlRvdExpbmsiLCJuciIsInoiLCJzdHJsaW5rIiwic3RyX2xpbmtzIiwic3RyX2NoYXJtcyIsInN0cl9iYXNlYnJhY2NpYWxlIiwic3RyX2JyYWNjaWFsZSIsInN0cl9iYXNlIiwic3RyX25lY2tsYWNlIiwic3RyX3BlbmRlbnRlIiwic3RyX2N1YmkiLCJucmJyYWNjaWFsZSIsImJndXJsX3NjZWx0byIsIlRleHRCcmFjY2lhbGUiLCJzdHJfY29kaWNlIiwiTWF0ZXJpYWxlQnJhY2NpYWxlIiwiQ29zdG9UQmFzZSIsImFwcGVuZCIsImJndGVzc2VyYSIsInN0cl9wb3NpemlvbmUiLCJ0b3RhbGUiLCJ0b3RiYXNlIiwiUHJvbW9CYXNlR3JhdGlzIiwiUHJlenpvQmFzZUdyYXRpcyIsInRlc3RvIiwiYWx0ZXp6YSIsImFsdGV6emFkaXNwIiwiU2Nyb2xsQmFyTW9iaWxlIiwibnJ0ZXNzZXJlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FB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QndHLEdBQTVCLENBQWdDLFlBQWhDLEVBQThDeUksT0FBTyxHQUFHLElBQXhEO0FBQ0FFLHVCQUFlLEdBQUcsSUFBbEI7QUFDSDtBQUNKOzs7bUNBQ2M7QUFDWCxVQUFJQyxTQUFTLEdBQUcsQ0FBaEI7O0FBQ0EsV0FBSyxJQUFJOUssQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzZCLE1BQXBCLEVBQTRCN0IsQ0FBQyxFQUE3QixFQUFpQztBQUM3QixZQUFJLE9BQU9DLFlBQVksQ0FBQ0QsQ0FBRCxDQUFuQixLQUEyQixXQUEvQixFQUE0QztBQUN4QyxjQUFLQyxZQUFZLENBQUNELENBQUQsQ0FBWixDQUFnQkUsR0FBaEIsSUFBdUIsRUFBeEIsSUFBZ0NELFlBQVksQ0FBQ0QsQ0FBRCxDQUFaLENBQWdCRSxHQUFoQixJQUF1QixRQUEzRCxFQUFzRTtBQUNsRTRLLHFCQUFTO0FBQ1o7QUFDSjtBQUNKOztBQUNELGFBQU9BLFNBQVA7QUFDSCIsImZpbGUiOiJqcy9wYWdlcy9ob21lL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvcGFnZXMvaG9tZS9ob21lLmVudHJ5LmpzXCIpO1xuIiwiaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gJy4vbW9kdWxlcy9jb25zdHJ1Y3Rvcic7XHJcblxyXG5jbGFzcyBIb21lVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgbmV3IENvbnN0cnVjdG9yKCk7XHJcbiAgICB9XHJcbn1cclxubmV3IEhvbWVWaWV3KCk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RydWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pc01vYmlsZSA9IHRoaXMuQ2hlY2tJc01vYmlsZSgpOyAvL2luaXRpYXRlIGFzIGZhbHNlXHJcbiAgICAgICAgLy8gSmF2YVNjcmlwdCBEb2N1bWVudFxyXG4gICAgICAgIGxldCBJbnRlcnZhbGxvSG92ZXI7XHJcbiAgICAgICAgbGV0IEJyYWNjaWFsZVpvb207XHJcbiAgICAgICAgbGV0IEZpbHRyb0FwZXJ0byA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBQcmltb0FjY2Vzc28gPSB0cnVlO1xyXG4gICAgICAgIGxldCBMYWNjaW9CcmFjY2lhbGUgPSAnJztcclxuICAgICAgICBsZXQgZGV0YWlsX3Zpc2libGUgPSAnJztcclxuICAgICAgICBsZXQgUmljZXJjYUF0dGl2YSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBTb3J0U3RhcnQgPSB0cnVlO1xyXG4gICAgICAgIGxldCBsYXJnaGV6emEgPSBqUXVlcnkod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgIGxldCBGaWx0cmlUQyA9IG51bGw7XHJcbiAgICAgICAgbGV0IERlbGF5VG91Y2ggPSAwO1xyXG4gICAgICAgIGxldCBwYWdpbmF1cmwgPSAnJztcclxuICAgICAgICBsZXQgQ29udHJvbGxhTWluaW1vTkxpbmsgPSBmYWxzZTtcclxuICAgICAgICBsZXQgT2Zmc2V0VG9vbFRpcCA9IC0yMDtcclxuICAgICAgICBsZXQgQXJySW5jaXNpb25pID0gQXJyYXkoKTtcclxuICAgICAgICBsZXQgU2Nyb2xsQmFyID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHNpemU7XHJcbiAgICAgICAgLy8gQ29udHJvbGxvIGNhcmljYW1lbnRpXHJcbiAgICAgICAgbGV0IG11c3RCZUJsb2NrZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5TZXR0YVBvc2l6aW9uaVRlc3NlcmUoVGlwb0JyYWNjaWFsZSk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgICAgICB0aGlzLlJlZnJlc2hTbGlkZUZpbHRyaSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIENoZWNrSXNNb2JpbGUoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJUb3VjaEV2ZW50XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gc2VsZi5pc01vYmlsZTtcclxuICAgICAgICBjb25zdCBkaW1lbnNpb24gPSBzZWxmLnNpemU7XHJcbiAgICAgICAgalF1ZXJ5KCcudGVzc2VyYScpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgIC8vaWYgKCFEcmFnSW5Db3Jzbykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW0gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5JbnRlcnZhbGxvSG92ZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuVmlzdWFsaXp6YUhvdmVyKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgalF1ZXJ5KCcjdGVzc2VyYV9kZXRhaWwnKS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIWlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIURyYWdJbkNvcnNvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjdGVzc2VyYV9kZXRhaWwnKS5oaWRlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLkludGVydmFsbG9Ib3Zlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBqUXVlcnkoJyNjb25mX3pvb20nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHNpemUgPSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB1bHdpZHRoID0galF1ZXJ5KCcjYnJhY2NpYWxlX3pvb20gdWwnKS53aWR0aCgpO1xyXG4gICAgICAgICAgICB2YXIgeHBvcyA9IDAgLSAoKHVsd2lkdGggLSBzaXplLndpZHRoKSAvIDIpO1xyXG4gICAgICAgICAgICBzZWxmLkJyYWNjaWFsZVpvb20uc2V0WFBvcyh4cG9zKTtcclxuICAgICAgICAgICAgLy9cdEJyYWNjaWFsZVpvb20udXBkYXRlQ2Fyb3VzZWxTaXplKCk7XHJcbiAgICAgICAgICAgIC8vXHRqUXVlcnkoJyNicmFjY2lhbGVfem9vbSB1bCcpLmNzcyh7bGVmdDogJy0zMDBweCd9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNlbGYuQ2FsY29sYVJpZXBpbG9nbygpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNjb250YWluZXJfem9vbScpLmZhZGVJbigyMDApO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNjb250YWluZXJfYnJhY2NpYWxlJykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeSgnLnRlc3NlcmFfYmFzZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGpRdWVyeSh0aGlzKS5maW5kKCcuc3RlbGxhX2luY2lzaW9uZScpXHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkoZWxlbWVudCkuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKCcuc3RlbGxhX2luY2lzaW9uZScpLmZhZGVPdXQoMjAwKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuTW9zdHJhVG9vbGlwSW5jaXNpb25lKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJy5zdGVsbGFfaW5jaXNpb25lJykuZmFkZUluKDIwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCcudGVzc2VyYV9iYXNlJykubW91c2VlbnRlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCFpc01vYmlsZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpbmtfd2lkdGggPSAnNjBweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVzc2VyYV93aWR0aCA9ICcxMzJweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGhfbmV4dCA9ICc1NHB4JztcclxuICAgICAgICAgICAgICAgIHZhciB3aWR0aF90ZXNzZXJhX25leHQgPSAnMTE5cHgnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoX3ByZXYgPSAnNTRweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGhfdGVzc2VyYV9wcmV2ID0gJzExOXB4JztcclxuICAgICAgICAgICAgICAgIHZhciBsaW5rX21vbCA9IDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV4dF9tb2wgPSAxO1xyXG4gICAgICAgICAgICAgICAgdmFyIHByZXZfbW9sID0gMTtcclxuICAgICAgICAgICAgICAgIHZhciBtZW5vX2xlZnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lbm9fdG9wID0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykuYXR0cignZG91YmxlJykgPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua193aWR0aCA9ICcxMjBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVzc2VyYV93aWR0aCA9ICcyNjRweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19tb2wgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbm9fbGVmdCA9IC0zO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbm9fdG9wID0gLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLnByZXYoJy50ZXNzZXJhX2Jhc2UnKS5hdHRyKCdkb3VibGUnKSA9PSAnMScpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aF9wcmV2ID0gJzEwOHB4JztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aF90ZXNzZXJhX3ByZXYgPSAnMjM4cHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZfbW9sID0gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykubmV4dCgpLmF0dHIoJ2RvdWJsZScpID09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoX25leHQgPSAnMTA4cHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoX3Rlc3NlcmFfbmV4dCA9ICcyMzhweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dF9tb2wgPSAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGxpbmtfd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnLTVweCdcclxuICAgICAgICAgICAgICAgIH0sIFwiZmFzdFwiKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCcudGVzc2VyYV9iYXNlJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhfcHJldixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICctMnB4J1xyXG4gICAgICAgICAgICAgICAgfSwgXCJmYXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLm5leHQoKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTA0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aF9uZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJy0ycHgnXHJcbiAgICAgICAgICAgICAgICB9LCBcImZhc3RcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJy50ZXNzZXJhYnJhY2NpYWxlJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE2MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGVzc2VyYV93aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IGRpbWVuc2lvbi50ZXNfdG9wX28gKyBtZW5vX3RvcCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAoZGltZW5zaW9uLnRlc19sZWZ0X28gKiBsaW5rX21vbCkgKyBtZW5vX2xlZnRcclxuICAgICAgICAgICAgICAgIH0sICdmYXN0Jyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucHJldigpLmZpbmQoJy50ZXNzZXJhYnJhY2NpYWxlJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE0NXB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhfdGVzc2VyYV9wcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogZGltZW5zaW9uLnRlc190b3AxLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGRpbWVuc2lvbi50ZXNfbGVmdDEgKiBwcmV2X21vbFxyXG4gICAgICAgICAgICAgICAgfSwgJ2Zhc3QnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkuZmluZCgnLnRlc3NlcmFicmFjY2lhbGUnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTQ1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aF90ZXNzZXJhX25leHQsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBkaW1lbnNpb24udGVzX3RvcDEsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogZGltZW5zaW9uLnRlc19sZWZ0MSAqIG5leHRfbW9sXHJcbiAgICAgICAgICAgICAgICB9LCAnZmFzdCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGogPSBqUXVlcnkodGhpcykuYXR0cignbnJiYXNlJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNkZXR0YWdsaW9fb3ZlcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChPYmpCcmFjY2lhbGVbal0uY29kICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5Nb3N0cmFEZXR0YWdsaW9PdmVyKGopO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNkZXR0YWdsaW9fb3ZlcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeSgnLnRlc3NlcmFfYmFzZScpLm1vdXNlbGVhdmUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaW5rX3dpZHRoID0gJzUwcHgnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3NlcmFfd2lkdGggPSAnMTEwcHgnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoX25leHQgPSAnNTBweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGhfdGVzc2VyYV9uZXh0ID0gJzExMHB4JztcclxuICAgICAgICAgICAgICAgIHZhciB3aWR0aF9wcmV2ID0gJzUwcHgnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoX3Rlc3NlcmFfcHJldiA9ICcxMTBweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlua19tb2wgPSAxO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5leHRfbW9sID0gMTtcclxuICAgICAgICAgICAgICAgIHZhciBwcmV2X21vbCA9IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLmF0dHIoJ2RvdWJsZScpID09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfd2lkdGggPSAnMTAwcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlc3NlcmFfd2lkdGggPSAnMjIwcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfbW9sID0gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykucHJldignLnRlc3NlcmFfYmFzZScpLmF0dHIoJ2RvdWJsZScpID09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoX3ByZXYgPSAnMTAwcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoX3Rlc3NlcmFfcHJldiA9ICcyMjBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldl9tb2wgPSAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeSh0aGlzKS5uZXh0KCkuYXR0cignZG91YmxlJykgPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhfbmV4dCA9ICcxMDBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhfdGVzc2VyYV9uZXh0ID0gJzIyMHB4JztcclxuICAgICAgICAgICAgICAgICAgICBuZXh0X21vbCA9IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzk2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBsaW5rX3dpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzBweCdcclxuICAgICAgICAgICAgICAgIH0sIFwiZmFzdFwiKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2KCcudGVzc2VyYV9iYXNlJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzk2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aF9wcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzBweCdcclxuICAgICAgICAgICAgICAgIH0sIFwiZmFzdFwiKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5uZXh0KCkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzk2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aF9uZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzBweCdcclxuICAgICAgICAgICAgICAgIH0sIFwiZmFzdFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuZmluZCgnLnRlc3NlcmFicmFjY2lhbGUnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTM0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0ZXNzZXJhX3dpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogZGltZW5zaW9uLnRlc190b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogZGltZW5zaW9uLnRlc19sZWZ0ICogbGlua19tb2xcclxuICAgICAgICAgICAgICAgIH0sICdmYXN0Jyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykubmV4dCgpLmZpbmQoJy50ZXNzZXJhYnJhY2NpYWxlJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEzNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhfdGVzc2VyYV9uZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogZGltZW5zaW9uLnRlc190b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogZGltZW5zaW9uLnRlc19sZWZ0ICogbmV4dF9tb2xcclxuICAgICAgICAgICAgICAgIH0sICdmYXN0Jyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucHJldigpLmZpbmQoJy50ZXNzZXJhYnJhY2NpYWxlJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEzNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhfdGVzc2VyYV9wcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogZGltZW5zaW9uLnRlc190b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogZGltZW5zaW9uLnRlc19sZWZ0ICogcHJldl9tb2xcclxuICAgICAgICAgICAgICAgIH0sICdmYXN0Jyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNkZXR0YWdsaW9fb3ZlcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeShcIi5kcm9wXCIpLmRyb3BwYWJsZSh7XHJcbiAgICAgICAgICAgIGFjY2VwdDogJy5kcmFnLC50ZXNzZXJhJyxcclxuICAgICAgICAgICAgdG9sZXJhbmNlOiAnaW50ZXJzZWN0JyxcclxuICAgICAgICAgICAgYWN0aXZlQ2xhc3M6ICdkcmFnLWFjdGl2ZScsXHJcbiAgICAgICAgICAgIG92ZXI6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpbmtfd2lkdGggPSAnNjBweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVzc2VyYV93aWR0aCA9ICcxMzJweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlua19tb2wgPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5hdHRyKCdkb3VibGUnKSA9PSAnMScpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX3dpZHRoID0gJzEyMHB4JztcclxuICAgICAgICAgICAgICAgICAgICB0ZXNzZXJhX3dpZHRoID0gJzI2NHB4JztcclxuICAgICAgICAgICAgICAgICAgICBsaW5rX21vbCA9IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzExNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogbGlua193aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICctNXB4J1xyXG4gICAgICAgICAgICAgICAgfSwgXCJmYXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmZpbmQoJy50ZXNzZXJhYnJhY2NpYWxlJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE2MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGVzc2VyYV93aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IGRpbWVuc2lvbi50ZXNfdG9wX28sXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogZGltZW5zaW9uLnRlc19sZWZ0X28gKiBsaW5rX21vbFxyXG4gICAgICAgICAgICAgICAgfSwgJ2Zhc3QnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3V0OiBmdW5jdGlvbihldmVudCwgdWkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaW5rX3dpZHRoID0gJzUwcHgnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3NlcmFfd2lkdGggPSAnMTEwcHgnO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpbmtfbW9sID0gMTtcclxuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykucGFyZW50KCkuYXR0cignZG91YmxlJykgPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua193aWR0aCA9ICcxMDBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVzc2VyYV93aWR0aCA9ICcyMjBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua19tb2wgPSAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc5NnB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogbGlua193aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICB9LCBcImZhc3RcIik7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkuZmluZCgnLnRlc3NlcmFicmFjY2lhbGUnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTM0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0ZXNzZXJhX3dpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogZGltZW5zaW9uLnRlc190b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogZGltZW5zaW9uLnRlc19sZWZ0ICogbGlua19tb2xcclxuICAgICAgICAgICAgICAgIH0sICdmYXN0Jyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRyb3A6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNuYW1lID0galF1ZXJ5KHVpLmRyYWdnYWJsZSkuYXR0cignbm9tZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGltZ3NrdSA9IGpRdWVyeSh1aS5kcmFnZ2FibGUpLmF0dHIoJ2ltZ3NrdScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNrdSA9IGpRdWVyeSh1aS5kcmFnZ2FibGUpLmF0dHIoJ3NrdScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjb2RfaW50ID0galF1ZXJ5KHVpLmRyYWdnYWJsZSkuYXR0cignY29kX2ludCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZwcmljZSA9IGpRdWVyeSh1aS5kcmFnZ2FibGUpLmF0dHIoJ2ZwcmljZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRvdWJsZSA9IGpRdWVyeSh1aS5kcmFnZ2FibGUpLmF0dHIoJ2RvdWJsZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGluY2lzaWJsZSA9IGpRdWVyeSh1aS5kcmFnZ2FibGUpLmF0dHIoJ2luY2lzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJpZ2hlX2luYyA9IGpRdWVyeSh1aS5kcmFnZ2FibGUpLmF0dHIoJ3JpZ2hlX2luYycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heF9jaGFyID0galF1ZXJ5KHVpLmRyYWdnYWJsZSkuYXR0cignbWF4X2NoYXInKTtcclxuICAgICAgICAgICAgICAgIHZhciBzb3R0cmFpYmFzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpbmtfd2lkdGggPSAnNTBweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVzc2VyYV93aWR0aCA9ICcxMTBweCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgaiA9IHBhcnNlSW50KGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5hdHRyKCducmJhc2UnKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW9sX2xlZnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKChkb3VibGUgPT0gMCkgfHwgKGogPCBOckxpbmsgLSAxKSB8fCAoT2JqQnJhY2NpYWxlW2pdLmRibCA9PSAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoVGlwb0JyYWNjaWFsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjbGFzc2ljJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb3VibGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykucGFyZW50KCkuYXR0cignZG91YmxlJykgPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJpbXVvdmlEb3VibGUoaiwgdGhpcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygndGVzc2VyYV9iYXNlX2xpbmtfZG91YmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmF0dHIoJ2RvdWJsZScsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua193aWR0aCA9ICcxMDBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzc2VyYV93aWR0aCA9ICcyMjBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9sX2xlZnQgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmF0dHIoJ2RvdWJsZScpID09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLlJpbXVvdmlEb3VibGUoaiwgdGhpcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygndGVzc2VyYV9iYXNlX2xpbmsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdHRyYWliYXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdiaWcnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCd0ZXNzZXJhX2Jhc2VfbGlua19iaWcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdHRyYWliYXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtYmJzaG9ydCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ21iYmxvbmcnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCd0ZXNzZXJhX2Jhc2VfbWJiX2Ryb3AnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzZWltaWEnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCd0ZXNzZXJhX2Jhc2Vfc2VpbWlhX2Ryb3AnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nc2t1ID0gaW1nc2t1LnJlcGxhY2Uoc2t1LCAnZl8nICsgc2t1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygndGVzc2VyYV9iYXNlX2N1YmlhbW9fZHJvcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkuZmluZChcIi50ZXNzZXJhYnJhY2NpYWxlXCIpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoJyArIGltZ3NrdSArICcpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnOTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBsaW5rX3dpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgJ2Zhc3QnKTtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkuZmluZCgnLnRlc3NlcmFicmFjY2lhbGUnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEzNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRlc3NlcmFfd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogZGltZW5zaW9uLnRlc190b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGRpbWVuc2lvbi50ZXNfbGVmdCAqIG1vbF9sZWZ0XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgXCJmYXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5wcmV2KCkuY3NzKCd6LWluZGV4JywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5uZXh0KCkuY3NzKCd6LWluZGV4JywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5jc3MoJ3otaW5kZXgnLCAnMScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI3Rlc3NlcmFfZGV0YWlsJykuaGlkZSgwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvdWJsZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamRvdWJsZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kOiBza3UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogZnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogc25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWc6IGltZ3NrdSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZF9pbnQ6IHNjb2RfaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGJsOiBkb3VibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5BZ2dpdW5naURvdWJsZShqLCBvYmpkb3VibGUsIHRoaXMsIHNvdHRyYWliYXNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHNvdHRyYWliYXNlKSAmJiAoT2JqQnJhY2NpYWxlW2pdLmNvZCA9PSAnJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5yTGlua0Jhc2UtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmpCcmFjY2lhbGVbal0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZDogc2t1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGZwcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHNuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nOiBpbWdza3UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RfaW50OiBzY29kX2ludCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRibDogZG91YmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuQWdnaW9ybmFPYmpCcmFjY2lhbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZWxmLkNhbGNvbGFSaWVwaWxvZ28oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjZGl2X2hvdmVyJykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLkNvbnRyb2xsYU1pbmltb05MaW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLkNvbnRhVGVzc2VyZSgpID49IE51bWVyb01pbmltb0xpbmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2FjcXVpc3RhX2JyYWNjaWFsZScpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNtX2FjcXVpc3RhX2ZpeGVkJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI21fcmllcGlsb2dvX2JhZycpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNtX2J0bl9hY3F1aXN0YScpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNhY3F1aXN0YV9icmFjY2lhbGUnKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNtX2FjcXVpc3RhX2ZpeGVkJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjbV9yaWVwaWxvZ29fYmFnJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjbV9idG5fYWNxdWlzdGEnKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5jaXNpYmxlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTW9zdHJhRm9ybUluY2lzaW9uZShqLCByaWdoZV9pbmMsIG1heF9jaGFyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBEcmFnSW5Db3JzbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBWaXN1YWxpenphSG92ZXIoZWxlbSkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBwb3NpeiA9IGpRdWVyeShlbGVtKS5wb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBzY3JlZW5fdyA9IGpRdWVyeSgnI2NvbnRhaW5lcl90ZXNzZXJlJykud2lkdGgoKTtcclxuICAgICAgICB2YXIgZGV0YWlsX3cgPSBqUXVlcnkoJyN0ZXNzZXJhX2RldGFpbCcpLndpZHRoKCk7XHJcbiAgICAgICAgaWYgKHNjcmVlbl93IDwgKHBvc2l6LmxlZnQgKyBkZXRhaWxfdykpIHtcclxuICAgICAgICAgICAgcG9zaXoubGVmdCA9IHNjcmVlbl93IC0gZGV0YWlsX3cgLSAxMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpRdWVyeSgnI3Rlc3NlcmFfZGV0YWlsJykuY3NzKHtcclxuICAgICAgICAgICAgbGVmdDogKHBvc2l6LmxlZnQgLSAyNCksXHJcbiAgICAgICAgICAgIHRvcDogKHBvc2l6LnRvcClcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgYmdpbWcgPSBqUXVlcnkoZWxlbSkuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyk7XHJcbiAgICAgICAgdmFyIHNrdSA9IGpRdWVyeShlbGVtKS5hdHRyKCdza3UnKTtcclxuICAgICAgICB2YXIgY29kX2ludCA9IGpRdWVyeShlbGVtKS5hdHRyKCdjb2RfaW50Jyk7XHJcbiAgICAgICAgdmFyIGltZ3NrdSA9IGpRdWVyeShlbGVtKS5hdHRyKCdpbWdza3UnKTtcclxuICAgICAgICB2YXIgbm9tZSA9IGpRdWVyeShlbGVtKS5hdHRyKCdub21lJyk7XHJcbiAgICAgICAgdmFyIG1hdGVyaWFsZSA9IGpRdWVyeShlbGVtKS5hdHRyKCdtYXRlcmlhbGUnKTtcclxuICAgICAgICB2YXIgcHJpY2UgPSBqUXVlcnkoZWxlbSkuYXR0cigncHJpY2UnKTtcclxuICAgICAgICB2YXIgZnByaWNlID0galF1ZXJ5KGVsZW0pLmF0dHIoJ2ZwcmljZScpO1xyXG4gICAgICAgIHZhciBkb3VibGUgPSBqUXVlcnkoZWxlbSkuYXR0cignZG91YmxlJyk7XHJcbiAgICAgICAgdmFyIGluY2lzaWJsZSA9IGpRdWVyeShlbGVtKS5hdHRyKCdpbmNpc2libGUnKTtcclxuICAgICAgICB2YXIgcmlnaGVfaW5jID0galF1ZXJ5KGVsZW0pLmF0dHIoJ3JpZ2hlX2luYycpO1xyXG4gICAgICAgIHZhciBtYXhfY2hhciA9IGpRdWVyeShlbGVtKS5hdHRyKCdtYXhfY2hhcicpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmNzcygnbWFyZ2luLXRvcCcsICcwcHgnKTtcclxuICAgICAgICBqUXVlcnkoJyNpbWdkZXRhaWwnKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBiZ2ltZyk7XHJcbiAgICAgICAgalF1ZXJ5KCcjaW1nZGV0YWlsJykuYXR0cignc2t1Jywgc2t1KTtcclxuICAgICAgICBqUXVlcnkoJyNpbWdkZXRhaWwnKS5hdHRyKCdjb2RfaW50JywgY29kX2ludCk7XHJcbiAgICAgICAgalF1ZXJ5KCcjaW1nZGV0YWlsJykuYXR0cignaW1nc2t1JywgaW1nc2t1KTtcclxuICAgICAgICBqUXVlcnkoJyNpbWdkZXRhaWwnKS5hdHRyKCdmcHJpY2UnLCBmcHJpY2UpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmF0dHIoJ3ByaWNlJywgcHJpY2UpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmF0dHIoJ25vbWUnLCBub21lKTtcclxuICAgICAgICBqUXVlcnkoJyNpbWdkZXRhaWwnKS5hdHRyKCdtYXRlcmlhbGUnLCBtYXRlcmlhbGUpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmF0dHIoJ2RvdWJsZScsIGRvdWJsZSk7XHJcbiAgICAgICAgalF1ZXJ5KCcjaW1nZGV0YWlsJykuYXR0cignaW5jaXNpYmxlJywgaW5jaXNpYmxlKTtcclxuICAgICAgICBqUXVlcnkoJyNpbWdkZXRhaWwnKS5hdHRyKCdyaWdoZV9pbmMnLCByaWdoZV9pbmMpO1xyXG4gICAgICAgIGpRdWVyeSgnI2ltZ2RldGFpbCcpLmF0dHIoJ21heF9jaGFyJywgbWF4X2NoYXIpO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHN0cmh0bWwgPSAnPHNwYW4gY2xhc3M9XCJ0aXRvbG9kZXRhaWxcIj4nICsgbm9tZSArICc8L3NwYW4+PGJyPic7XHJcbiAgICAgICAgLy9zdHJodG1sICs9IG1hdGVyaWFsZSArICc8YnI+JztcclxuICAgICAgICBzdHJodG1sICs9IHNlbGYuR2V0UHJpY2VIdG1sKHByaWNlLCBmcHJpY2UsICdwcmljZWRldGFpbCcpO1xyXG5cclxuICAgICAgICBqUXVlcnkoJyN0ZXh0ZGV0YWlsJykuaHRtbChzdHJodG1sKTtcclxuICAgICAgICBqUXVlcnkoJyN0ZXNzZXJhX2RldGFpbCcpLnNob3coMCk7XHJcbiAgICAgICAgLy9qUXVlcnkoJyNkaXZfaG92ZXInKS5mYWRlSW4oMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRQcmljZUh0bWwocHJpY2UsIGZpbmFsX3ByaWNlLCBzdHJjbGFzcykge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciB2cHJpY2UgPSBwYXJzZUZsb2F0KHByaWNlKTtcclxuICAgICAgICB2YXIgdmZpbmFsX3ByaWNlID0gcGFyc2VGbG9hdChmaW5hbF9wcmljZSk7XHJcblxyXG4gICAgICAgIGlmICghUHVsc2FudGVBY3F1aXN0YSkge1xyXG4gICAgICAgICAgICBzdHJjbGFzcyArPSAnIG5vcHJpY2UnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGh0bWxwcmljZSA9ICcnO1xyXG4gICAgICAgIHZhciBodG1sZmluYWxfcHJpY2UgPSAnJztcclxuICAgICAgICBpZiAodnByaWNlICE9IHZmaW5hbF9wcmljZSkge1xyXG4gICAgICAgICAgICBodG1sZmluYWxfcHJpY2UgPSAnPHAgY2xhc3M9XCJvbGQtcHJpY2VcIj48c3BhbiBjbGFzcz1cInByaWNlXCI+JyArIHNlbGYuRGlzcGxheUN1cnJlbmN5KHZwcmljZSkgKyAnICcgKyBTaW1ib2xvVmFsdXRhICsgJyA8L3NwYW4+PC9wPic7XHJcbiAgICAgICAgICAgIGh0bWxwcmljZSA9ICc8ZGl2IGNsYXNzPVwiJyArIHN0cmNsYXNzICsgJ1wiPicgKyBodG1sZmluYWxfcHJpY2UgKyBzZWxmLkRpc3BsYXlDdXJyZW5jeSh2ZmluYWxfcHJpY2UpICsgJyAnICsgU2ltYm9sb1ZhbHV0YSArICc8L2Rpdj4nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGh0bWxwcmljZSA9ICc8ZGl2IGNsYXNzPVwiJyArIHN0cmNsYXNzICsgJ1wiPicgKyBodG1sZmluYWxfcHJpY2UgKyBzZWxmLkRpc3BsYXlDdXJyZW5jeSh2cHJpY2UpICsgJyAnICsgU2ltYm9sb1ZhbHV0YSArICc8L2Rpdj4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaHRtbHByaWNlO1xyXG4gICAgfVxyXG4gICAgRGlzcGxheUN1cnJlbmN5KHZhbG9yZSkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KE1hdGgucm91bmQodmFsb3JlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcclxuICAgIH1cclxuXHJcbiAgICBlc2NfcXVvdCh0ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZUFsbCgnXCInLCAnJnF1b3Q7Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgUmVmcmVzaFNsaWRlRmlsdHJpKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBzaXplID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBsYXJnaCA9IDA7XHJcbiAgICAgICAgdmFyIG5yX2xpID0gMDtcclxuICAgICAgICBqUXVlcnkoJyNmaWx0cmlfYXR0aXZpIC50b3VjaGNhcm91c2VsIHVsIGxpJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICBsYXJnaCArPSBqUXVlcnkodGhpcykud2lkdGgoKTtcclxuICAgICAgICAgICAgbnJfbGkrKztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGxhcmdoID4gc2l6ZS53aWR0aCkge1xyXG4gICAgICAgICAgICBzZWxmLkZpbHRyaVRDID0galF1ZXJ5KCcjZmlsdHJpX2F0dGl2aSAudG91Y2hjYXJvdXNlbCcpLnRvdWNoQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBhZ2luZ05hdkNvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbk5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb0xhc3Q6IHRydWVcclxuICAgICAgICAgICAgfSkuZGF0YSgndG91Y2hDYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNmaWx0cmlfYXR0aXZpIC50b3VjaGNhcm91c2VsIHVsJykud2lkdGgobGFyZ2ggKyAxMCk7XHJcbiAgICAgICAgICAgIEZpbHRyaVRDLmdvVG8obnJfbGkpOyAvL2xpX3Z1b3RvO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGYuRmlsdHJpVEMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGluaXREZWZhdWx0KCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGpRdWVyeSgnI2JyYWNjaWFsZScpLnNvcnRhYmxlKHtcclxuICAgICAgICAgICAgaGFuZGxlOiAnLmhhbmRsZXRlc3NlcmEnLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICAgICAgICAgIGFwcGVuZFRvOiAnYm9keScsXHJcbiAgICAgICAgICAgIGhlbHBlcjogJ29yaWdpbmFsJyxcclxuICAgICAgICAgICAgZGVsYXk6IHNlbGYuRGVsYXlUb3VjaCxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLCAvLyghaXNNb2JpbGUpLFxyXG4gICAgICAgICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGFydDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLlNvcnRTdGFydCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodWkuaXRlbSkuZmluZCgnLnN0ZWxsYV9pbmNpc2lvbmUnKS5mYWRlT3V0KDIwMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KCcjdG9vbHRpcF9pbmNpc2lvbmUnKS5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjdG9vbHRpcF9pbmNpc2lvbmUnKS5mYWRlT3V0KDIwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5Tb3J0U3RhcnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHZhciBqID0galF1ZXJ5KHVpLml0ZW0pLmF0dHIoJ25yYmFzZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iakJyYWNjaWFsZVtqXS5pbmNpc2lvbiA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYmFzZV8nICsgaikuZmluZCgnLnN0ZWxsYV9pbmNpc2lvbmUnKS5mYWRlSW4oMjAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGpRdWVyeSh1aS5pdGVtKS5wcmV2KCkuY3NzKCd6LWluZGV4JywgJycpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHVpLml0ZW0pLm5leHQoKS5jc3MoJ3otaW5kZXgnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodWkuaXRlbSkuY3NzKCd6LWluZGV4JywgJzEnKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuQWdnaW9ybmFPYmpCcmFjY2lhbGUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcclxuICAgICAgICAgICAgICAgIHVpLml0ZW0udW5iaW5kKFwiY2xpY2tcIik7XHJcbiAgICAgICAgICAgICAgICB1aS5pdGVtLm9uZShcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbmUtdGltZS1jbGlja1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0galF1ZXJ5KHRoaXMpLmZpbmQoJy5zdGVsbGFfaW5jaXNpb25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqUXVlcnkoZWxlbWVudCkuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKCcuc3RlbGxhX2luY2lzaW9uZScpLmZhZGVPdXQoMjAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuTW9zdHJhVG9vbGlwSW5jaXNpb25lKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJy5zdGVsbGFfaW5jaXNpb25lJykuZmFkZUluKDIwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG4gICAgICAgICAgICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICBqUXVlcnkoXCIjYnJhY2NpYWxlXCIpLnNvcnRhYmxlKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGlmZiA9IE1hdGguYWJzKHVpLm9yaWdpbmFsUG9zaXRpb24udG9wIC0gdWkucG9zaXRpb24udG9wKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaWZmID4gNjApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLlJpbXVvdmlUZXNzZXJhKGpRdWVyeSh1aS5pdGVtKSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHNpemUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGpRdWVyeSgnI2JyYWNjaWFsZV96b29tJykud2lkdGgoc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgc2VsZi5CcmFjY2lhbGVab29tID0galF1ZXJ5KCcjYnJhY2NpYWxlX3pvb20nKS50b3VjaENhcm91c2VsKHtcclxuICAgICAgICAgICAgaXRlbUZhbGxiYWNrV2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgc2Nyb2xsYmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgZHJhZ1VzaW5nTW91c2U6IGZhbHNlXHJcbiAgICAgICAgfSkuZGF0YShcInRvdWNoQ2Fyb3VzZWxcIik7XHJcbiAgICAgICAgc2VsZi5BZ2dpb3JuYVRyaWdnZXJUZXNzZXJlKCk7XHJcbiAgICB9XHJcbiAgICBNb3N0cmFUb29saXBJbmNpc2lvbmUoZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmIChqUXVlcnkoJyN0b29sdGlwX2luY2lzaW9uZScpLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgdmFyIGpzdGVsbGEgPSBqUXVlcnkoJyN0b29sdGlwX2luY2lzaW9uZScpLmF0dHIoJ25yYmFzZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBqc3RlbGxhKS5maW5kKCcuc3RlbGxhX2luY2lzaW9uZScpLmZhZGVJbigyMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaiA9IGpRdWVyeShlbGVtZW50KS5wYXJlbnQoKS5hdHRyKCducmJhc2UnKTtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSBqUXVlcnkoZWxlbWVudCkucGFyZW50KCkucG9zaXRpb24oKTtcclxuICAgICAgICB2YXIgd3BhcmVudCA9IGpRdWVyeShlbGVtZW50KS5wYXJlbnQoKS53aWR0aCgpO1xyXG4gICAgICAgIHZhciBsZWZ0ID0gcG9zaXRpb24ubGVmdCArICgod3BhcmVudCAtIGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykud2lkdGgoKSkgLyAyKSArIHNlbGYuT2Zmc2V0VG9vbFRpcDtcclxuICAgICAgICBqUXVlcnkoJyN0b29sdGlwX2luY2lzaW9uZScpLmF0dHIoJ25yYmFzZScsIGopO1xyXG4gICAgICAgIGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykuY3NzKFwiZm9udC1mYW1pbHlcIiwgXCInXCIgKyBPYmpCcmFjY2lhbGVbal0uZm9udCArIFwiJywgc2Fucy1zZXJpZlwiKTtcclxuICAgICAgICBqUXVlcnkoJyN0b29sdGlwX2luY2lzaW9uZScpLmNzcygnbGVmdCcsIGxlZnQpO1xyXG4gICAgICAgIHZhciBzdHJodG1sID0gJzxkaXYgY2xhc3M9XCJ0ZXh0Y29udGFpbmVyXCI+JztcclxuICAgICAgICBpZiAoT2JqQnJhY2NpYWxlW2pdLmwyID09ICcnKSB7XHJcbiAgICAgICAgICAgIHN0cmh0bWwgKz0gJzxkaXYgY2xhc3M9XCJpbm5lclwiPicgKyBPYmpCcmFjY2lhbGVbal0ubDEgKyAnPC9kaXY+JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdHJodG1sICs9ICc8ZGl2IGNsYXNzPVwiaW5uZXJcIj4nICsgT2JqQnJhY2NpYWxlW2pdLmwxICsgJzxicj4nICsgT2JqQnJhY2NpYWxlW2pdLmwyICsgJzwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0cmh0bWwgKz0gJzwvZGl2Pic7XHJcbiAgICAgICAgalF1ZXJ5KCcjdG9vbHRpcF9pbmNpc2lvbmUnKS5odG1sKHN0cmh0bWwpO1xyXG4gICAgICAgIGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykuZmFkZUluKDIwMCk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmZhZGVPdXQoMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBBZ2dpb3JuYVRyaWdnZXJUZXNzZXJlKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gc2VsZi5pc01vYmlsZTtcclxuICAgICAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLnRlc3NlcmFcIikuZHJhZ2dhYmxlKHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5tZW50OiAnZG9jdW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgcmV2ZXJ0OiAnaW52YWxpZCcsXHJcbiAgICAgICAgICAgICAgICBoZWxwZXI6ICdjbG9uZScsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGU6ICdkaXYuZHJhZycsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMCxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcclxuICAgICAgICAgICAgICAgIGRlbGF5OiBzZWxmLkRlbGF5VG91Y2gsXHJcbiAgICAgICAgICAgICAgICBhcHBlbmRUbzogJ2JvZHknLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuQ2hpdWRpQmFycmFSaWVwaWxvZ28oKTtcclxuICAgICAgICAgICAgICAgICAgICBEcmFnSW5Db3JzbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3RvcDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRHJhZ0luQ29yc28gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgalF1ZXJ5KCcuZHJhZycpLnN3aXBlKHtcclxuICAgICAgICAgICAgICAgIHN3aXBlVXA6IGZ1bmN0aW9uKGV2ZW50LCBkaXJlY3Rpb24sIGRpc3RhbmNlLCBkdXJhdGlvbiwgZmluZ2VyQ291bnQsIGZpbmdlckRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZHVyYXRpb24gPCBzZWxmLkRlbGF5VG91Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBqUXVlcnkod2luZG93KS5zY3JvbGxUb3AoKSArICgyLjUgKiBkaXN0YW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwLCAnc3dpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3dpcGVEb3duOiBmdW5jdGlvbihldmVudCwgZGlyZWN0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24sIGZpbmdlckNvdW50LCBmaW5nZXJEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGR1cmF0aW9uIDwgc2VsZi5EZWxheVRvdWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogalF1ZXJ5KHdpbmRvdykuc2Nyb2xsVG9wKCkgLSAoMi41ICogZGlzdGFuY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCwgJ3N3aW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFsbG93UGFnZVNjcm9sbDogXCJhdXRvXCJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBqUXVlcnkoXCIuZHJhZ1wiKS5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbm1lbnQ6ICdkb2N1bWVudCcsXHJcbiAgICAgICAgICAgICAgICByZXZlcnQ6ICdpbnZhbGlkJyxcclxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZTogJ2Rpdi5kcmFnJyxcclxuICAgICAgICAgICAgICAgIGhlbHBlcjogJ2Nsb25lJyxcclxuICAgICAgICAgICAgICAgIHNjcm9sbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6ICcxMDAnLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICAgICAgICAgICAgYXBwZW5kVG86ICdib2R5JyxcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiBmdW5jdGlvbihldmVudCwgdWkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLkNoaXVkaUJhcnJhUmllcGlsb2dvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgRHJhZ0luQ29yc28gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIERyYWdJbkNvcnNvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjdGVzc2VyYV9kZXRhaWwnKS5oaWRlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2NvbmZfc3VnZ2VyaW1lbnRvJykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpRdWVyeSgnLnRlc3NlcmEnKS5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIWlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIURyYWdJbkNvcnNvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuSW50ZXJ2YWxsb0hvdmVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5WaXN1YWxpenphSG92ZXIoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoJyN0ZXNzZXJhX2RldGFpbCcpLm1vdXNlbGVhdmUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghRHJhZ0luQ29yc28pIHtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyN0ZXNzZXJhX2RldGFpbCcpLmhpZGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuSW50ZXJ2YWxsb0hvdmVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoJy5zdGVsbGFfaW5jaXNpb25lJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIE1vc3RyYVRvb2x0aXBJbmNpc2lvbmUodGhpcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnI3Rvb2x0aXBfaW5jaXNpb25lJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBqID0galF1ZXJ5KHRoaXMpLmF0dHIoJ25yYmFzZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBqKS5maW5kKCcuc3RlbGxhX2luY2lzaW9uZScpLmZhZGVJbigyMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qXHJcblx0IGpRdWVyeSgnI2Rpdl9ob3ZlcicpLm1vdXNlZW50ZXIoZnVuY3Rpb24gKCkge1xyXG5cdCBpZiAoIURyYWdJbkNvcnNvKSB7XHJcblx0IGlmIChqUXVlcnkoJyN0ZXNzZXJhX2RldGFpbDpob3ZlcicpLmxlbmd0aCA9PSAwKSB7XHJcblx0IGpRdWVyeSgnI2Rpdl9ob3ZlcicpLmZhZGVPdXQoMjAwKTtcclxuXHQgY2xlYXJUaW1lb3V0KHNlbGYuSW50ZXJ2YWxsb0hvdmVyKTtcclxuXHQgfVxyXG5cdCB9XHJcblx0IH0pO1xyXG5cdCAqL1xyXG4gICAgfVxyXG4gICAgU2V0dGFQb3NpemlvbmlUZXNzZXJlKFRpcG9CcmFjY2lhbGUpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgc2l6ZSA9IHtcclxuICAgICAgICAgICAgdGVzX3RvcDogLTI0LFxyXG4gICAgICAgICAgICB0ZXNfbGVmdDogLTMxLFxyXG4gICAgICAgICAgICB0ZXNfdG9wMTogLTI2LFxyXG4gICAgICAgICAgICB0ZXNfbGVmdDE6IC0zMyxcclxuICAgICAgICAgICAgdGVzX3RvcF9vOiAtMjgsXHJcbiAgICAgICAgICAgIHRlc19sZWZ0X286IC0zNyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN3aXRjaCAoVGlwb0JyYWNjaWFsZSkge1xyXG4gICAgICAgICAgICBjYXNlICdjbGFzc2ljJzpcclxuICAgICAgICAgICAgICAgIHNpemUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVzX3RvcDogLTIzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlc19sZWZ0OiAtMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzX3RvcDE6IC0yNSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXNfbGVmdDE6IC0zMyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXNfdG9wX286IC0yNixcclxuICAgICAgICAgICAgICAgICAgICB0ZXNfbGVmdF9vOiAtMzUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JpZyc6XHJcbiAgICAgICAgICAgICAgICBzaXplID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlc190b3A6IC0xMyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXNfbGVmdDogLTMwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlc190b3AxOiAtMTQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzX2xlZnQxOiAtMzUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzX3RvcF9vOiAtMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzX2xlZnRfbzogLTM1LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtYmJzaG9ydCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ21iYmxvbmcnOlxyXG4gICAgICAgICAgICAgICAgc2l6ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXNfdG9wOiAtMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzX2xlZnQ6IC0zMSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXNfdG9wMTogLTI2LFxyXG4gICAgICAgICAgICAgICAgICAgIHRlc19sZWZ0MTogLTMzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlc190b3BfbzogLTI4LFxyXG4gICAgICAgICAgICAgICAgICAgIHRlc19sZWZ0X286IC0zN1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzZWltaWEnOlxyXG4gICAgICAgICAgICAgICAgc2l6ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXNfdG9wOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgIHRlc19sZWZ0OiAtMzEsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzX3RvcDE6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzX2xlZnQxOiAtMzMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzX3RvcF9vOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXNfbGVmdF9vOiAtMzcsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5zaXplID0gc2l6ZTtcclxuICAgIH1cclxuICAgIENoaXVkaUJhcnJhUmllcGlsb2dvKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmIChzZWxmLlNjcm9sbEJhcikge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNyaWVwaWxvZ29fdGVzc2VyZScpLnBlcmZlY3RTY3JvbGxiYXIoJ2Rlc3Ryb3knKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgalF1ZXJ5KCcjcmllcGlsb2dvX3Rlc3NlcmUnKS5oaWRlKDIwMCk7XHJcbiAgICAgICAgLy9qUXVlcnkoXCIjcmllX3RvdFwiKS5oaWRlKDApO1xyXG4gICAgICAgIGpRdWVyeSgnI3JpZXBpbG9nb19icmFjY2lhbGUnKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKCcgKyBTS0lOVVJMICsgJy9pbWcvYmdyaWVwaWxvZ28ucG5nKScpO1xyXG4gICAgfVxyXG4gICAgTW9zdHJhRGV0dGFnbGlvT3ZlcihqKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHBuZ3Rlc3NlcmEgPSAndGVzc2VyYV9iYXNlX2RyYWcnO1xyXG4gICAgICAgIHZhciBhZGRjbGFzcyA9ICcnO1xyXG4gICAgICAgIHN3aXRjaCAoVGlwb0JyYWNjaWFsZSkge1xyXG4gICAgICAgICAgICBjYXNlICdjbGFzc2ljJzpcclxuICAgICAgICAgICAgICAgIHBuZ3Rlc3NlcmEgPSAndGVzc2VyYV9iYXNlX2RyYWcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iakJyYWNjaWFsZVtqXS5kYmwgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBuZ3Rlc3NlcmEgPSAndGVzc2VyYV9iYXNlX2RyYWdfZG91YmxlJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdiaWcnOlxyXG4gICAgICAgICAgICAgICAgcG5ndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZ19iaWcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdtYmJzaG9ydCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ21iYmxvbmcnOlxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjZGV0dGFnbGlvX292ZXIgLnJpZV90ZXNfaW1nJykuYWRkQ2xhc3MoJ25vcGVuZGVudGknKTtcclxuICAgICAgICAgICAgICAgIHBuZ3Rlc3NlcmEgPSAndGVzc2VyYV9iYXNlX2RyYWdfbWJiJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnc2VpbWlhJzpcclxuICAgICAgICAgICAgICAgIHBuZ3Rlc3NlcmEgPSAndGVzc2VyYV9iYXNlX2RyYWdfc2VpbWlhJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI2RldHRhZ2xpb19vdmVyIC5yaWVfdGVzX2ltZycpLmFkZENsYXNzKCdub3BlbmRlbnRpJyk7XHJcbiAgICAgICAgICAgICAgICBwbmd0ZXNzZXJhID0gJ3Rlc3NlcmFfYmFzZV9kcmFnX2N1YmlhbW8nO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYmdpbWFnZSA9ICd1cmwoJyArIE9iakJyYWNjaWFsZVtqXS5pbWcgKyAnKSwgdXJsKCcgKyBTS0lOVVJMICsgJ2ltZy8nICsgcG5ndGVzc2VyYSArICcucG5nKSc7XHJcbiAgICAgICAgalF1ZXJ5KCcjZGV0dGFnbGlvX292ZXIgLnJpZV90ZXNfaW1nJykuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgYmdpbWFnZSk7XHJcbiAgICAgICAgdmFyIHN0cmh0bWwgPSBPYmpCcmFjY2lhbGVbal0ubmFtZSArICc8YnI+J1xyXG4gICAgICAgIHN0cmh0bWwgKz0gc2VsZi5HZXRQcmljZUh0bWwoT2JqQnJhY2NpYWxlW2pdLnByaWNlLCBPYmpCcmFjY2lhbGVbal0ucHJpY2UsICdwcmljZWRldGFpbCcpO1xyXG4gICAgICAgIGpRdWVyeSgnI2RldHRhZ2xpb19vdmVyIC50ZXN0bycpLmh0bWwoc3RyaHRtbCk7XHJcbiAgICAgICAgalF1ZXJ5KCcjZGV0dGFnbGlvX292ZXInKS5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBBZ2dpb3JuYU9iakJyYWNjaWFsZSgpIHtcclxuICAgICAgICBqUXVlcnkoJyNicmFjY2lhbGUgLnRlc3NlcmFfYmFzZScpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgICAgICAgdmFyIGogPSBwYXJzZUludChqUXVlcnkodGhpcykuYXR0cignbnJiYXNlJykpO1xyXG4gICAgICAgICAgICBPYmpCcmFjY2lhbGVbal0uaWQgPSBpbmRleDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIEFnZ2l1bmdpRG91YmxlKGosIG9iamRvdWJsZSwgZWxlbWVudCwgc290dHJhaWJhc2UpIHtcclxuICAgICAgICBpZiAoKHNvdHRyYWliYXNlKSAmJiAoT2JqQnJhY2NpYWxlW2pdLmNvZCA9PSAnJykpIHtcclxuICAgICAgICAgICAgTnJMaW5rQmFzZS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmpCcmFjY2lhbGVbal0gPSBvYmpkb3VibGU7XHJcbiAgICAgICAgdmFyIGlkdGhpcyA9IGpRdWVyeShlbGVtZW50KS5wYXJlbnQoKS5hdHRyKCducmJhc2UnKTtcclxuICAgICAgICB2YXIgaWRuZXh0ID0galF1ZXJ5KGVsZW1lbnQpLnBhcmVudCgpLm5leHQoKS5hdHRyKCducmJhc2UnKTtcclxuICAgICAgICBpZiAoalF1ZXJ5KCcjYmFzZV8nICsgaWRuZXh0KS5hdHRyKCdkb3VibGUnKSA9PSAnMScpIHtcclxuICAgICAgICAgICAgUmltdW92aURvdWJsZShpZG5leHQsIG51bGwsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqUXVlcnkoZWxlbWVudCkucGFyZW50KCkubmV4dCgpLmhpZGUoKTtcclxuICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBpZG5leHQpLmFwcGVuZFRvKCcjYmFzZV8nICsgaWR0aGlzKTtcclxuICAgICAgICBqUXVlcnkoZWxlbWVudCkucGFyZW50KCkuZmluZCgnLmhhbmRsZXRlc3NlcmEnKS5jc3MoJ3dpZHRoJywgJzkycHgnKTtcclxuICAgICAgICBpZiAoKHNvdHRyYWliYXNlKSAmJiAoT2JqQnJhY2NpYWxlW2lkbmV4dF0uY29kID09ICcnKSkge1xyXG4gICAgICAgICAgICBOckxpbmtCYXNlLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iakJyYWNjaWFsZVtpZG5leHRdLmlkID0gajtcclxuICAgICAgICBPYmpCcmFjY2lhbGVbaWRuZXh0XS5jb2QgPSAnZG91YmxlJztcclxuICAgIH1cclxuICAgIFJpbXVvdmlEb3VibGUoaiwgZWxlbWVudCwgc290dHJhaWJhc2UpIHtcclxuICAgICAgICB2YXIgaWR0aGlzO1xyXG4gICAgICAgIHZhciBpZG5leHQ7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZHRoaXMgPSBqUXVlcnkoZWxlbWVudCkucGFyZW50KCkuYXR0cignbnJiYXNlJyk7XHJcbiAgICAgICAgICAgIGlkbmV4dCA9IGpRdWVyeShlbGVtZW50KS5wYXJlbnQoKS5maW5kKCcudGVzc2VyYV9iYXNlJykuYXR0cignbnJiYXNlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWR0aGlzID0gajtcclxuICAgICAgICAgICAgaWRuZXh0ID0galF1ZXJ5KCcjYmFzZV8nICsgaikuZmluZCgnLnRlc3NlcmFfYmFzZScpLmF0dHIoJ25yYmFzZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBpZHRoaXMpLmNzcygnd2lkdGgnLCAnNTBweCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBpZHRoaXMpLmF0dHIoJ2RvdWJsZScsICcwJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcjYmFzZV8nICsgaWR0aGlzKS5yZW1vdmVDbGFzcygndGVzc2VyYV9iYXNlX2xpbmtfZG91YmxlJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcjYmFzZV8nICsgaWRuZXh0KS5pbnNlcnRBZnRlcignI2Jhc2VfJyArIGlkdGhpcyk7XHJcbiAgICAgICAgalF1ZXJ5KCcjYmFzZV8nICsgaWRuZXh0KS5maW5kKCcudGVzc2VyYWJyYWNjaWFsZScpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICdub25lJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcjYmFzZV8nICsgaWRuZXh0KS5maW5kKCcuc3RlbGxhX2luY2lzaW9uZScpLmhpZGUoKTtcclxuICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBpZHRoaXMpLmZpbmQoJy5zdGVsbGFfaW5jaXNpb25lJykuaGlkZSgpO1xyXG4gICAgICAgIGpRdWVyeSgnI2Jhc2VfJyArIGlkbmV4dCkuc2hvdygpO1xyXG4gICAgICAgIGpRdWVyeSgnI2Jhc2VfJyArIGlkdGhpcykucGFyZW50KCkuZmluZCgnLmhhbmRsZXRlc3NlcmEnKS5jc3MoJ3dpZHRoJywgJzQ2cHgnKTtcclxuICAgICAgICBpZiAoc290dHJhaWJhc2UpIHtcclxuICAgICAgICAgICAgTnJMaW5rQmFzZSsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgT2JqQnJhY2NpYWxlW2lkdGhpc10gPSB7XHJcbiAgICAgICAgICAgIGlkOiBqLFxyXG4gICAgICAgICAgICBjb2Q6ICcnLFxyXG4gICAgICAgICAgICBwcmljZTogMCxcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIGltZzogJycsXHJcbiAgICAgICAgICAgIGNvZF9pbnQ6ICcnLFxyXG4gICAgICAgICAgICBkYmw6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIE9iakJyYWNjaWFsZVtpZG5leHRdID0ge1xyXG4gICAgICAgICAgICBpZDogaixcclxuICAgICAgICAgICAgY29kOiAnJyxcclxuICAgICAgICAgICAgcHJpY2U6IDAsXHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBpbWc6ICcnLFxyXG4gICAgICAgICAgICBjb2RfaW50OiAnJyxcclxuICAgICAgICAgICAgZGJsOiAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFJpbXVvdmlUZXNzZXJhKGlkLCBzaWxlbnQpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgaiA9IDA7XHJcbiAgICAgICAgaWYgKGpRdWVyeShpZCkuaGFzQ2xhc3MoJ3hfdGVzc2VyYScpKSB7XHJcbiAgICAgICAgICAgIGogPSBqUXVlcnkoaWQpLmF0dHIoJ25ydGVzJyk7XHJcbiAgICAgICAgICAgIHZhciBpZHBhciA9IGpRdWVyeSh0aGlzKS5wYXJlbnQoKTtcclxuICAgICAgICAgICAgalF1ZXJ5KGlkcGFyKS5yZW1vdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBqID0galF1ZXJ5KGlkKS5hdHRyKCducmJhc2UnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChqUXVlcnkoJyNiYXNlXycgKyBqKS5hdHRyKCdkb3VibGUnKSA9PSAnMScpIHtcclxuICAgICAgICAgICAgc2VsZi5SaW11b3ZpRG91YmxlKGosIG51bGwsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgT2JqQnJhY2NpYWxlW2pdID0ge1xyXG4gICAgICAgICAgICBpZDogaixcclxuICAgICAgICAgICAgY29kOiAnJyxcclxuICAgICAgICAgICAgcHJpY2U6IDAsXHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBpbWc6ICcnLFxyXG4gICAgICAgICAgICBjb2RfaW50OiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKChUaXBvQnJhY2NpYWxlID09ICdjbGFzc2ljJykgfHwgKFRpcG9CcmFjY2lhbGUgPT0gJ2JpZycpKSB7XHJcbiAgICAgICAgICAgIE5yTGlua0Jhc2UrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpRdWVyeSgnI2Jhc2VfJyArIGopLmZpbmQoJyAudGVzc2VyYWJyYWNjaWFsZScpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICdub25lJyk7XHJcbiAgICAgICAgc3dpdGNoIChUaXBvQnJhY2NpYWxlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NsYXNzaWMnOlxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjYmFzZV8nICsgaikucmVtb3ZlQ2xhc3MoJ3Rlc3NlcmFfYmFzZV9saW5rJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYmlnJzpcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2VfJyArIGopLnJlbW92ZUNsYXNzKCd0ZXNzZXJhX2Jhc2VfbGlua19iaWcnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtYmJzaG9ydCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ21iYmxvbmcnOlxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjYmFzZV8nICsgaikucmVtb3ZlQ2xhc3MoJ3Rlc3NlcmFfYmFzZV9tYmJfZHJvcCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NlaW1pYSc6XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBqKS5yZW1vdmVDbGFzcygndGVzc2VyYV9iYXNlX3NlaW1pYV9kcm9wJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2VfJyArIGopLnJlbW92ZUNsYXNzKCd0ZXNzZXJhX2Jhc2VfY3ViaWFtb19kcm9wJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2lsZW50KSBzZWxmLkNhbGNvbGFSaWVwaWxvZ28odHJ1ZSk7XHJcbiAgICAgICAgaWYgKChzZWxmLkNvbnRhVGVzc2VyZSgpID09IDApICYmIChQdWxzYW50ZUFjcXVpc3RhKSkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNhY3F1aXN0YV9icmFjY2lhbGUnKS5hZGRDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNtX2J0bl9hY3F1aXN0YScpLmFkZENsYXNzKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI21fYWNxdWlzdGFfZml4ZWQnKS5hZGRDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNtX3JpZXBpbG9nb19iYWcnKS5hZGRDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoKHNlbGYuQ29udHJvbGxhTWluaW1vTkxpbmspICYmIChzZWxmLkNvbnRhVGVzc2VyZSgpIDwgTnVtZXJvTWluaW1vTGluaykgJiYgKFB1bHNhbnRlQWNxdWlzdGEpKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI2FjcXVpc3RhX2JyYWNjaWFsZScpLmFkZENsYXNzKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI21fYnRuX2FjcXVpc3RhJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjbV9hY3F1aXN0YV9maXhlZCcpLmFkZENsYXNzKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI21fcmllcGlsb2dvX2JhZycpLmFkZENsYXNzKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUmltdW92aURvdWJsZShqLCBlbGVtZW50LCBzb3R0cmFpYmFzZSkge1xyXG4gICAgICAgIHZhciBpZHRoaXM7XHJcbiAgICAgICAgdmFyIGlkbmV4dDtcclxuICAgICAgICBpZiAoZWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlkdGhpcyA9IGpRdWVyeShlbGVtZW50KS5wYXJlbnQoKS5hdHRyKCducmJhc2UnKTtcclxuICAgICAgICAgICAgaWRuZXh0ID0galF1ZXJ5KGVsZW1lbnQpLnBhcmVudCgpLmZpbmQoJy50ZXNzZXJhX2Jhc2UnKS5hdHRyKCducmJhc2UnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZHRoaXMgPSBqO1xyXG4gICAgICAgICAgICBpZG5leHQgPSBqUXVlcnkoJyNiYXNlXycgKyBqKS5maW5kKCcudGVzc2VyYV9iYXNlJykuYXR0cignbnJiYXNlJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2VfJyArIGlkdGhpcykuY3NzKCd3aWR0aCcsICc1MHB4Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGpRdWVyeSgnI2Jhc2VfJyArIGlkdGhpcykuYXR0cignZG91YmxlJywgJzAnKTtcclxuICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBpZHRoaXMpLnJlbW92ZUNsYXNzKCd0ZXNzZXJhX2Jhc2VfbGlua19kb3VibGUnKTtcclxuICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBpZG5leHQpLmluc2VydEFmdGVyKCcjYmFzZV8nICsgaWR0aGlzKTtcclxuICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBpZG5leHQpLmZpbmQoJy50ZXNzZXJhYnJhY2NpYWxlJykuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ25vbmUnKTtcclxuICAgICAgICBqUXVlcnkoJyNiYXNlXycgKyBpZG5leHQpLmZpbmQoJy5zdGVsbGFfaW5jaXNpb25lJykuaGlkZSgpO1xyXG4gICAgICAgIGpRdWVyeSgnI2Jhc2VfJyArIGlkdGhpcykuZmluZCgnLnN0ZWxsYV9pbmNpc2lvbmUnKS5oaWRlKCk7XHJcbiAgICAgICAgalF1ZXJ5KCcjYmFzZV8nICsgaWRuZXh0KS5zaG93KCk7XHJcbiAgICAgICAgalF1ZXJ5KCcjYmFzZV8nICsgaWR0aGlzKS5wYXJlbnQoKS5maW5kKCcuaGFuZGxldGVzc2VyYScpLmNzcygnd2lkdGgnLCAnNDZweCcpO1xyXG4gICAgICAgIGlmIChzb3R0cmFpYmFzZSkge1xyXG4gICAgICAgICAgICBOckxpbmtCYXNlKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPYmpCcmFjY2lhbGVbaWR0aGlzXSA9IHtcclxuICAgICAgICAgICAgaWQ6IGosXHJcbiAgICAgICAgICAgIGNvZDogJycsXHJcbiAgICAgICAgICAgIHByaWNlOiAwLFxyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgaW1nOiAnJyxcclxuICAgICAgICAgICAgY29kX2ludDogJycsXHJcbiAgICAgICAgICAgIGRibDogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgT2JqQnJhY2NpYWxlW2lkbmV4dF0gPSB7XHJcbiAgICAgICAgICAgIGlkOiBqLFxyXG4gICAgICAgICAgICBjb2Q6ICcnLFxyXG4gICAgICAgICAgICBwcmljZTogMCxcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIGltZzogJycsXHJcbiAgICAgICAgICAgIGNvZF9pbnQ6ICcnLFxyXG4gICAgICAgICAgICBkYmw6IDBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgQ2FsY29sYVJpZXBpbG9nbygpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgc3RyaHRtbCA9ICcnO1xyXG4gICAgICAgIGpRdWVyeSgnI3JpZXBpbG9nb190ZXNzZXJlJykuaHRtbCgnPGRpdiBjbGFzcz1cImRpdl9yaWVwaWxvZ29cIj4nKTtcclxuICAgICAgICBqUXVlcnkoJyNtX2VsZW5jb190ZXNzZXJlJykuaHRtbCgnJyk7XHJcbiAgICAgICAgdmFyIFRvdExpbmsgPSAwO1xyXG4gICAgICAgIHZhciBuciA9IDA7XHJcbiAgICAgICAgdmFyIHogPSAwO1xyXG5cclxuICAgICAgICB2YXIgc3RybGluayA9IHN0cl9saW5rcztcclxuICAgICAgICB2YXIgcG5ndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZyc7XHJcbiAgICAgICAgc3dpdGNoIChUaXBvQnJhY2NpYWxlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NsYXNzaWMnOlxyXG4gICAgICAgICAgICAgICAgcG5ndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYmlnJzpcclxuICAgICAgICAgICAgICAgIHBuZ3Rlc3NlcmEgPSAndGVzc2VyYV9iYXNlX2RyYWdfYmlnJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbWJic2hvcnQnOlxyXG4gICAgICAgICAgICBjYXNlICdtYmJsb25nJzpcclxuICAgICAgICAgICAgICAgIHN0cmxpbmsgPSBzdHJfY2hhcm1zO1xyXG4gICAgICAgICAgICAgICAgc3RyX2Jhc2VicmFjY2lhbGUgPSBzdHJfYnJhY2NpYWxlO1xyXG4gICAgICAgICAgICAgICAgcG5ndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZ19tYmInO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdzZWltaWEnOlxyXG4gICAgICAgICAgICAgICAgc3RyX2Jhc2UgPSBzdHJfbmVja2xhY2U7XHJcbiAgICAgICAgICAgICAgICBzdHJsaW5rID0gc3RyX3BlbmRlbnRlO1xyXG4gICAgICAgICAgICAgICAgcG5ndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZ19zZWltaWEnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgc3RybGluayA9IHN0cl9jdWJpO1xyXG4gICAgICAgICAgICAgICAgc3RyX2Jhc2VicmFjY2lhbGUgPSBzdHJfYnJhY2NpYWxlO1xyXG4gICAgICAgICAgICAgICAgcG5ndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZ19jdWJpYW1vJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG5yYnJhY2NpYWxlID0gMDtcclxuXHJcbiAgICAgICAgaWYgKChUaXBvQnJhY2NpYWxlICE9ICdjbGFzc2ljJykgJiYgKFRpcG9CcmFjY2lhbGUgIT0gJ2JpZycpKSB7XHJcbiAgICAgICAgICAgIHZhciBiZ2ltYWdlID0gJ2JhY2tncm91bmQtaW1hZ2U6ICcgKyBiZ3VybF9zY2VsdG8ucmVwbGFjZSgvXCIvZywgJycpICsgJzsgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlciAnO1xyXG4gICAgICAgICAgICBzdHJodG1sID0gJzxkaXYgY2xhc3M9XCJyaWVfdGVzXCI+JztcclxuICAgICAgICAgICAgc3RyaHRtbCArPSAnPGRpdiBjbGFzcz1cInJpZV90ZXNfaW1nXCIgc3R5bGU9XCIgJyArIGJnaW1hZ2UgKyAnXCI+PC9kaXY+JztcclxuICAgICAgICAgICAgc3RyaHRtbCArPSBUZXh0QnJhY2NpYWxlICsgJzxicj48c3BhbiBjbGFzcz1cInRleHQxM2dyYXlcIj4nICsgc3RyX2NvZGljZSArIE1hdGVyaWFsZUJyYWNjaWFsZTtcclxuICAgICAgICAgICAgaWYgKFB1bHNhbnRlQWNxdWlzdGEpIHtcclxuICAgICAgICAgICAgICAgIHN0cmh0bWwgKz0gJzxicj4xIHggJyArIFNpbWJvbG9WYWx1dGEgKyAnICcgKyBzZWxmLkRpc3BsYXlDdXJyZW5jeShDb3N0b1RCYXNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdHJodG1sICs9ICc8L3NwYW4+JztcclxuICAgICAgICAgICAgc3RyaHRtbCArPSAnPGRpdj4nO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNyaWVwaWxvZ29fdGVzc2VyZScpLmFwcGVuZChzdHJodG1sKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjbV9lbGVuY29fdGVzc2VyZScpLmFwcGVuZChzdHJodG1sKTtcclxuICAgICAgICAgICAgbnJicmFjY2lhbGUgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgalF1ZXJ5KCcjYnJhY2NpYWxlIC50ZXNzZXJhX2Jhc2UnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgIHZhciBqID0gcGFyc2VJbnQoalF1ZXJ5KHRoaXMpLmF0dHIoJ25yYmFzZScpKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjYmFzZXpvb21fJyArIHopLnNob3coKTtcclxuICAgICAgICAgICAgaWYgKChPYmpCcmFjY2lhbGVbal0uY29kICE9ICcnKSAmJiAoT2JqQnJhY2NpYWxlW2pdLmNvZCAhPSAnZG91YmxlJykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBiZ3Rlc3NlcmEgPSBwbmd0ZXNzZXJhO1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iakJyYWNjaWFsZVtqXS5kYmwgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJndGVzc2VyYSA9ICd0ZXNzZXJhX2Jhc2VfZHJhZ19kb3VibGUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGJnaW1hZ2UgPSAnYmFja2dyb3VuZC1pbWFnZTogdXJsKCcgKyBPYmpCcmFjY2lhbGVbal0uaW1nICsgJyksIHVybCgnICsgU0tJTlVSTCArICdpbWcvJyArIGJndGVzc2VyYSArICcucG5nKSc7XHJcbiAgICAgICAgICAgICAgICBzdHJodG1sID0gJzxkaXYgY2xhc3M9XCJyaWVfdGVzXCI+JztcclxuICAgICAgICAgICAgICAgIHN0cmh0bWwgKz0gJzxkaXYgY2xhc3M9XCJyaWVfdGVzX2ltZ1wiIHN0eWxlPVwiICcgKyBiZ2ltYWdlICsgJ1wiPjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICBzdHJodG1sICs9IE9iakJyYWNjaWFsZVtqXS5uYW1lICsgJzxicj48c3BhbiBjbGFzcz1cInRleHQxM2dyYXlcIj4nICsgc3RyX2NvZGljZSArIE9iakJyYWNjaWFsZVtqXS5jb2RfaW50ICsgJzxicj4nICsgc3RyX3Bvc2l6aW9uZSArIChpbmRleCArIDEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKFB1bHNhbnRlQWNxdWlzdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJodG1sICs9ICc8YnI+MSB4ICcgKyBTaW1ib2xvVmFsdXRhICsgJyAnICsgc2VsZi5EaXNwbGF5Q3VycmVuY3koT2JqQnJhY2NpYWxlW2pdLnByaWNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0cmh0bWwgKz0gJzwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgc3RyaHRtbCArPSAnPGRpdiBjbGFzcz1cInhfdGVzc2VyYVwiIG5ydGVzPVwiJyArIGogKyAnXCI+PC9kaXY+PGRpdj4nO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjcmllcGlsb2dvX3Rlc3NlcmUnKS5hcHBlbmQoc3RyaHRtbCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNtX2VsZW5jb190ZXNzZXJlJykuYXBwZW5kKHN0cmh0bWwpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKFRpcG9CcmFjY2lhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjbGFzc2ljJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iakJyYWNjaWFsZVtqXS5kYmwgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYmFzZXpvb21fJyArIHopLmFkZENsYXNzKCd0ZXNzZXJhX2Jhc2VfbGlua19kb3VibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6KS5hZGRDbGFzcygndGVzc2VyYV9iYXNlem9vbV9kb3VibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6ICsgJyAudGVzc2VyYWJyYWNjaWFsZXpvb20nKS5jc3MoJ2xlZnQnLCAnLTE0cHgnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6KS5hZGRDbGFzcygndGVzc2VyYV9iYXNlX2xpbmsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6KS5yZW1vdmVDbGFzcygndGVzc2VyYV9iYXNlem9vbV9kb3VibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeiArICcgLnRlc3NlcmFicmFjY2lhbGV6b29tJykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgT2JqQnJhY2NpYWxlW2pdLmltZyArICcpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYmlnJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYmFzZXpvb21fJyArIHopLmFkZENsYXNzKCd0ZXNzZXJhX2Jhc2VfbGlua19iaWcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYmFzZXpvb21fJyArIHogKyAnIC50ZXNzZXJhYnJhY2NpYWxlem9vbV9iaWcnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyBPYmpCcmFjY2lhbGVbal0uaW1nICsgJyknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdtYmJzaG9ydCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWJibG9uZyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6KS5hZGRDbGFzcygndGVzc2VyYV9iYXNlX21iYl9kcm9wJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6ICsgJyAudGVzc2VyYWJyYWNjaWFsZXpvb21fbWJiJykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgT2JqQnJhY2NpYWxlW2pdLmltZyArICcpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzZWltaWEnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeikuYWRkQ2xhc3MoJ3Rlc3NlcmFfYmFzZV9zZWltaWFfZHJvcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeiArICcgLnRlc3NlcmFicmFjY2lhbGV6b29tX3NlaW1pYScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArIE9iakJyYWNjaWFsZVtqXS5pbWcgKyAnKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGltZ3NrdSA9IE9iakJyYWNjaWFsZVtqXS5pbWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBza3UgPSBPYmpCcmFjY2lhbGVbal0uY29kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2ltZ3NrdSA9IGltZ3NrdS5yZXBsYWNlKHNrdSwgJ2ZfJyArIHNrdSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6KS5hZGRDbGFzcygndGVzc2VyYV9iYXNlX2N1YmlhbW9fZHJvcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeiArICcgLnRlc3NlcmFicmFjY2lhbGV6b29tX2N1YmlhbW8nKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyBpbWdza3UgKyAnKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBUb3RMaW5rICs9IHBhcnNlRmxvYXQoT2JqQnJhY2NpYWxlW2pdLnByaWNlKTtcclxuICAgICAgICAgICAgICAgIG5yKys7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqQnJhY2NpYWxlW2pdLmNvZCAhPSAnZG91YmxlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoVGlwb0JyYWNjaWFsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjbGFzc2ljJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6KS5yZW1vdmVDbGFzcygndGVzc2VyYV9iYXNlX2xpbmsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6KS5yZW1vdmVDbGFzcygndGVzc2VyYV9iYXNlX2xpbmtfZG91YmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeikucmVtb3ZlQ2xhc3MoJ3Rlc3NlcmFfYmFzZXpvb21fZG91YmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeiArICcgLnRlc3NlcmFicmFjY2lhbGV6b29tJykuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYmlnJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6KS5yZW1vdmVDbGFzcygndGVzc2VyYV9iYXNlX2xpbmtfYmlnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeiArICcgLnRlc3NlcmFicmFjY2lhbGV6b29tX2JpZycpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICdub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ21iYnNob3J0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWJibG9uZyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeikucmVtb3ZlQ2xhc3MoJ3Rlc3NlcmFfYmFzZV9tYmJfZHJvcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYmFzZXpvb21fJyArIHogKyAnIC50ZXNzZXJhYnJhY2NpYWxlem9vbV9tYmInKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlaW1pYSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeikucmVtb3ZlQ2xhc3MoJ3Rlc3NlcmFfYmFzZV9zZWltaWFfZHJvcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYmFzZXpvb21fJyArIHogKyAnIC50ZXNzZXJhYnJhY2NpYWxlem9vbV9zZWltaWEnKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNiYXNlem9vbV8nICsgeikucmVtb3ZlQ2xhc3MoJ3Rlc3NlcmFfYmFzZV9jdWJpYW1vX2Ryb3AnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6ICsgJyAudGVzc2VyYWJyYWNjaWFsZXpvb21fY3ViaWFtbycpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICdub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2Jhc2V6b29tXycgKyB6KS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeisrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeSgnI3JpZXBpbG9nb190ZXNzZXJlJykuYXBwZW5kKCc8L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCcjcmllcGlsb2dvX3Rlc3NlcmUgLmRpdl9yaWVwaWxvZ28gLnJpZV90ZXM6bGFzdC1jaGlsZCcpLmNzcygnYm9yZGVyLWJvdHRvbScsICcwJyk7XHJcbiAgICAgICAgdmFyIHRvdGFsZSA9IChOckxpbmtCYXNlICogQ29zdG9UQmFzZSkgKyBUb3RMaW5rO1xyXG4gICAgICAgIHZhciB0b3RiYXNlID0gKE5yTGlua0Jhc2UgKiBDb3N0b1RCYXNlKTtcclxuICAgICAgICBpZiAoKHNlbGYuQ29udHJvbGxhTWluaW1vTkxpbmspICYmIChzZWxmLkNvbnRhVGVzc2VyZSgpID49IE51bWVyb01pbmltb0xpbmspKSB7XHJcbiAgICAgICAgICAgIHRvdGFsZSA9IFRvdExpbms7XHJcbiAgICAgICAgICAgIHRvdGJhc2UgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKChQcm9tb0Jhc2VHcmF0aXMpICYmIChUb3RMaW5rID49IFByZXp6b0Jhc2VHcmF0aXMpKSB7XHJcbiAgICAgICAgICAgIHRvdGFsZSA9IFRvdExpbms7XHJcbiAgICAgICAgICAgIHRvdGJhc2UgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHRlc3RvID0gc3RyX2Jhc2UgKyAnICcgKyBTaW1ib2xvVmFsdXRhICsgJyAnICsgc2VsZi5EaXNwbGF5Q3VycmVuY3kodG90YmFzZSkgKyAnICsgJyArIG5yICsgJyAnICsgc3RybGluayArICcgJyArIFNpbWJvbG9WYWx1dGEgKyAnICcgKyBzZWxmLkRpc3BsYXlDdXJyZW5jeShUb3RMaW5rKSArICcgPSA8Yj4nICsgU2ltYm9sb1ZhbHV0YSArICcgJyArIHNlbGYuRGlzcGxheUN1cnJlbmN5KHRvdGFsZSkgKyAnPC9iPidcclxuICAgICAgICBpZiAoIVB1bHNhbnRlQWNxdWlzdGEpIHtcclxuICAgICAgICAgICAgdGVzdG8gPSBzdHJfYmFzZWJyYWNjaWFsZSArICcgKyAnICsgbnIgKyAnICcgKyBzdHJsaW5rICsgJyAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqUXVlcnkoXCIjcmllX3RvdFwiKS5odG1sKHRlc3RvKTtcclxuICAgICAgICB0ZXN0byA9ICc8Yj4nICsgU2ltYm9sb1ZhbHV0YSArICcgJyArIHNlbGYuRGlzcGxheUN1cnJlbmN5KHRvdGFsZSkgKyAnPC9iPic7XHJcbiAgICAgICAgaWYgKCFQdWxzYW50ZUFjcXVpc3RhKSB7XHJcbiAgICAgICAgICAgIHRlc3RvID0gJzxiPicgKyBuciArICcgJyArIHN0cmxpbmsgKyAnPC9iPic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBqUXVlcnkoXCIjbV9yaWVfdG90XCIpLmh0bWwodGVzdG8pO1xyXG4gICAgICAgIGpRdWVyeShcIiNtX3ByaWNlX3N1YlwiKS5odG1sKFNpbWJvbG9WYWx1dGEgKyAnICcgKyBzZWxmLkRpc3BsYXlDdXJyZW5jeSh0b3RhbGUpKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCcueF90ZXNzZXJhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IGpRdWVyeSh0aGlzKTtcclxuICAgICAgICAgICAgUmltdW92aVRlc3NlcmEoaWQsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGFsdGV6emEgPSAobnIgKyBucmJyYWNjaWFsZSkgKiA5MjtcclxuICAgICAgICB2YXIgU2Nyb2xsQmFyID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGFsdGV6emEgPiAyNzYpIHtcclxuICAgICAgICAgICAgYWx0ZXp6YSA9IDI3NjtcclxuICAgICAgICAgICAgU2Nyb2xsQmFyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgalF1ZXJ5KCcjcmllcGlsb2dvX3Rlc3NlcmUnKS5oZWlnaHQoYWx0ZXp6YSk7XHJcbiAgICAgICAgdmFyIHNpemUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFsdGV6emFkaXNwID0gc2l6ZS5oZWlnaHQgLSA2NTtcclxuICAgICAgICAvL2pRdWVyeSgnI21fcmllcGlsb2dvX3Rlc3NlcmUnKS5oZWlnaHQoYWx0ZXp6YWRpc3ApO1xyXG4gICAgICAgIGFsdGV6emEgPSBhbHRlenphZGlzcCAtIDE0MDtcclxuICAgICAgICBqUXVlcnkoJyNtX2VsZW5jb190ZXNzZXJlJykuaGVpZ2h0KGFsdGV6emEpO1xyXG4gICAgICAgIGFsdGV6emEgPSAobnIgKyBucmJyYWNjaWFsZSkgKiAxMDI7XHJcbiAgICAgICAgdmFyIFNjcm9sbEJhck1vYmlsZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChhbHRlenphID4gKGFsdGV6emFkaXNwIC0gMTQwKSkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNtX2VsZW5jb190ZXNzZXJlJykuY3NzKCdtYXgtaGVpZ2h0JywgYWx0ZXp6YSArICdweCcpO1xyXG4gICAgICAgICAgICBTY3JvbGxCYXJNb2JpbGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIENvbnRhVGVzc2VyZSgpIHtcclxuICAgICAgICB2YXIgbnJ0ZXNzZXJlID0gMDtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IE5yTGluazsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgT2JqQnJhY2NpYWxlW2pdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKChPYmpCcmFjY2lhbGVbal0uY29kICE9ICcnKSAmJiAoT2JqQnJhY2NpYWxlW2pdLmNvZCAhPSAnZG91YmxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBucnRlc3NlcmUrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnJ0ZXNzZXJlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==