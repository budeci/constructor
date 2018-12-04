// JavaScript Document
var IntervalloHover;
var FiltroAperto = false;
var PrimoAccesso = true;
var LaccioBracciale = '';
var detail_visible = '';
var RicercaAttiva = false;
var larghezza = jQuery(window).width();
var FiltriTC = null;
var DelayTouch = 0;
var paginaurl = '';
var ControllaMinimoNLink = false;
var OffsetToolTip = -20;
var ArrIncisioni = Array();

// Controllo caricamenti
var mustBeBlocked = false;

var isMobile = false; //initiate as false

jQuery.loadScript = function(url, callback) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: false
    });
}

function CheckIsMobile() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

isMobile = CheckIsMobile();

if (isMobile) {
    jQuery(document).bind("mobileinit", function() {
        jQuery.event.special.tap.tapholdThreshold = 500;
    });

    jQuery('#logoimage').attr('src', SKINURL + 'img/logo/Nomination_logo_sticky.svg');
    jQuery('#logoimage').css('max-height', '50px');

    jQuery('.detail_scelta_base.base1').show(0);
    jQuery('.detail_scelta_base.base2').show(0);
    jQuery('.detail_scelta_base.base3').show(0);
    jQuery('.detail_scelta_base.base4').show(0);
    jQuery('.conf_pulsante.conferma').hide();
    jQuery('#filtro_clear').hide();
    jQuery('#sfondo_filtri').addClass('noshadow');
    //jQuery.loadScript(jQueryMobileSrc);
    //jQuery.loadScript(TouchPunchSrc);
    jQuery.loadScript(TouchSwipeSrc);
    DelayTouch = 300;
    OffsetToolTip = -6;
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

jQuery.fn.exists = function() {
    return this.length !== 0;
}

jQuery(document).ready(function() {
    paginaurl = window.location.href;

    if (!PulsanteAcquista) {
        jQuery('#m_acquista_fixed').html('<div class="storelocator">&nbsp;&nbsp;&nbsp;' + btn_store_locator + '</div>');
        jQuery('#m_acquista_fixed').addClass('pinstore');
        jQuery('#m_riepilogo_bag').addClass('pinstore');
        jQuery('#m_sub_totale').css('bottom', '0px');
        jQuery('.btn_pre').addClass('noprice');
        jQuery('.pricedetail').addClass('noprice');
        jQuery('.details_dati').addClass('noprice');
        jQuery("#m_sub_totale").hide();
        jQuery('#acquista_bracciale').removeClass('disable');
        jQuery('#m_acquista_fixed').removeClass('disable');
        jQuery('#m_btn_acquista').removeClass('disable');
        jQuery('#m_riepilogo_bag').removeClass('disable');
    }

    if (isMobile) {
        jQuery(window).on("orientationchange", function(event) {
            var size = {
                width: window.innerWidth || document.body.clientWidth,
                height: window.innerHeight || document.body.clientHeight
            };
            if (event.orientation == 'landscape') {
                if (size.width < 1024) {
                    jQuery('#m_landscape').show();
                }
            } else {
                jQuery('#m_landscape').hide();
            }
        });
    }

    if (filtroautomatico) {
        VisualizzaLoading();
    }

    jQuery('#active_riepilogo_bracciale').on('click', function() {
        if (jQuery('#riepilogo_tessere').is(':visible')) {
            ChiudiBarraRiepilogo();
        } else {
            ApriBarraRiepilogo();
        }
    });

    jQuery('.btn_filtro.btn_mat').on('click', function(event) {
        var target = jQuery(event.target);
        if (!target.is('div')) {
            return
        }

        if (FiltroMobile(1100)) {
            if (!jQuery(this).find('#filtro_materiali').exists()) {
                jQuery(this).append(jQuery('#filtro_materiali'));
            }

            if (jQuery('#filtro_materiali').is(':visible')) {
                jQuery(this).removeClass('aperto');
                jQuery(this).attr('style', 'display: block');
                var altezza = jQuery('#step3').height() - jQuery('#filtro_materiali').height() - 62;
                jQuery('#step3').css('min-height', altezza + 'px');
            } else {
                jQuery('.btn_filtro.aperto').attr('style', 'display: block');
                jQuery('.btn_filtro.aperto').removeClass('aperto');
                jQuery('#step3').css('min-height', '350px');
                jQuery(this).height(62 + jQuery('#filtro_materiali').height());
                var altezza = 62 + jQuery('#step3').height() + jQuery('#filtro_materiali').height();
                jQuery('#step3').css('min-height', altezza + 'px');
                jQuery(this).addClass('aperto');
            }
        } else {
            if (!jQuery('#barra_filtro #filtro_materiali').exists()) {
                jQuery('#barra_filtro').append(jQuery('#filtro_materiali'));
            }
            if (jQuery('#filtro_materiali').is(':visible')) {
                jQuery(this).removeClass('aperto');
            } else {
                jQuery(this).addClass('aperto');
            }
        }

        if (jQuery('#filtro_materiali').is(':visible')) {
            if (!FiltroMobile(1100)) {
                ChiudiSfondoFiltri();
            }
            jQuery('#filtro_materiali').hide(200);
        } else {
            ApriSfondoFiltri('#filtro_materiali');
            var position = jQuery(this).position();
            jQuery('.popup_filtro').hide(200);
            jQuery('#filtro_materiali').css('left', position.left + 'px');
            jQuery('#filtro_materiali').show(200);
        }
    });

    jQuery('.btn_filtro.btn_pie').on('click', function(event) {
        var target = jQuery(event.target);
        if (!target.is('div')) {
            return
        }

        if (FiltroMobile(1100)) {
            if (!jQuery(this).find('#filtro_pietre').exists()) {
                jQuery(this).append(jQuery('#filtro_pietre'));
            }

            if (jQuery('#filtro_pietre').is(':visible')) {
                jQuery(this).removeClass('aperto');
                jQuery(this).attr('style', 'display: block');
                var altezza = jQuery('#step3').height() - jQuery('#filtro_pietre').height() - 62;
                jQuery('#step3').css('min-height', altezza + 'px');
            } else {
                jQuery('.btn_filtro.aperto').attr('style', 'display: block');
                jQuery('.btn_filtro.aperto').removeClass('aperto');
                jQuery('#step3').css('min-height', '350px');
                var altezza = 62 + jQuery('#step3').height() + jQuery('#filtro_pietre').height();
                jQuery('#step3').css('min-height', altezza + 'px');
                jQuery(this).height(62 + jQuery('#filtro_pietre').height());
                jQuery(this).addClass('aperto');
            }
        } else {
            if (!jQuery('#barra_filtro #filtro_pietre').exists()) {
                jQuery('#barra_filtro').append(jQuery('#filtro_pietre'));
            }
            if (jQuery('#filtro_pietre').is(':visible')) {
                jQuery(this).removeClass('aperto');
            } else {
                jQuery(this).addClass('aperto');
            }
        }

        if (jQuery('#filtro_pietre').is(':visible')) {
            if (!FiltroMobile(1100)) {
                ChiudiSfondoFiltri();
            }
            jQuery('#filtro_pietre').hide(200);
        } else {
            ApriSfondoFiltri('#filtro_pietre');
            var position = jQuery(this).position();
            jQuery('.popup_filtro').hide(200);
            jQuery('#filtro_pietre').css('left', position.left + 'px');
            jQuery('#filtro_pietre').show(200);
        }
    });

    jQuery('.btn_filtro.btn_pre').on('click', function(event) {
        var target = jQuery(event.target);
        if (!target.is('div')) {
            return;
        }

        if (FiltroMobile(1100)) {
            if (!jQuery(this).find('#filtro_prezzo').exists()) {
                jQuery(this).append(jQuery('#filtro_prezzo'));
            }

            if (jQuery('#filtro_prezzo').is(':visible')) {
                jQuery(this).removeClass('aperto');
                jQuery(this).attr('style', 'display: block');
                var altezza = jQuery('#step3').height() - 80;
                jQuery('#step3').css('min-height', altezza + 'px');
            } else {
                jQuery('.btn_filtro.aperto').attr('style', 'display: block');
                jQuery('.btn_filtro.aperto').removeClass('aperto');
                jQuery('#step3').css('min-height', '350px');
                var altezza = 80 + jQuery('#step3').height();
                jQuery('#step3').css('min-height', altezza + 'px');
                jQuery(this).height(80);
                jQuery(this).addClass('aperto');
            }
        } else {
            if (!jQuery('#barra_filtro #filtro_prezzo').exists()) {
                jQuery('#barra_filtro').append(jQuery('#filtro_prezzo'));
            }
            if (jQuery('#filtro_prezzo').is(':visible')) {
                jQuery(this).removeClass('aperto');
            } else {
                jQuery(this).addClass('aperto');
            }
        }

        if (jQuery('#filtro_prezzo').is(':visible')) {
            if (!FiltroMobile(1100)) {
                ChiudiSfondoFiltri();
            }
            jQuery('#filtro_prezzo').hide(200);
        } else {
            ApriSfondoFiltri('#filtro_prezzo');
            var position = jQuery(this).position();
            jQuery('.popup_filtro').hide(200);
            jQuery('#filtro_prezzo').css('left', position.left + 'px');
            jQuery('#filtro_prezzo').show(200);
        }
    });

    jQuery('.btn_filtro.btn_occ').on('click', function(event) {
        var target = jQuery(event.target);
        if (!target.is('div')) {
            return;
        }

        if (FiltroMobile(1100)) {
            if (!jQuery(this).find('#filtro_occasioni').exists()) {
                jQuery(this).append(jQuery('#filtro_occasioni'));
            }

            if (jQuery('#filtro_occasioni').is(':visible')) {
                jQuery(this).removeClass('aperto');
                jQuery(this).attr('style', 'display: block');
                var altezza = jQuery('#step3').height() - jQuery('#filtro_occasioni').height() - 62;
                jQuery('#step3').css('min-height', altezza + 'px');
            } else {
                jQuery('.btn_filtro.aperto').attr('style', 'display: block');
                jQuery('.btn_filtro.aperto').removeClass('aperto');
                jQuery('#step3').css('min-height', '350px');
                jQuery(this).height(62 + jQuery('#filtro_occasioni').height());
                var altezza = 62 + jQuery('#step3').height() + jQuery('#filtro_occasioni').height();
                jQuery('#step3').css('min-height', altezza + 'px');
                jQuery(this).addClass('aperto');
            }
        } else {
            if (!jQuery('#barra_filtro #filtro_occasioni').exists()) {
                jQuery('#barra_filtro').append(jQuery('#filtro_occasioni'));
            }
            if (jQuery('#filtro_occasioni').is(':visible')) {
                jQuery(this).removeClass('aperto');
            } else {
                jQuery(this).addClass('aperto');
            }
        }

        if (jQuery('#filtro_occasioni').is(':visible')) {
            if (!FiltroMobile(1100)) {
                ChiudiSfondoFiltri();
            }
            jQuery('#filtro_occasioni').hide(200);
        } else {
            ApriSfondoFiltri('#filtro_occasioni');
            var position = jQuery(this).position();
            jQuery('.popup_filtro').hide(200);
            jQuery('#filtro_occasioni').css('left', position.left + 'px');
            jQuery('#filtro_occasioni').show(200);
        }
    });

    jQuery('.btn_filtro.btn_tem').on('click', function(event) {
        var target = jQuery(event.target);
        if (!target.is('div')) {
            return;
        }

        if (FiltroMobile(1100)) {
            if (!jQuery(this).find('#filtro_tema').exists()) {
                jQuery(this).append(jQuery('#filtro_tema'));
            }

            if (jQuery('#filtro_tema').is(':visible')) {
                jQuery(this).removeClass('aperto');
                jQuery(this).attr('style', 'display: block');
                var altezza = jQuery('#step3').height() - jQuery('#filtro_tema').height() - 62;
                jQuery('#step3').css('min-height', altezza + 'px');
            } else {
                jQuery('.btn_filtro.aperto').attr('style', 'display: block');
                jQuery('.btn_filtro.aperto').removeClass('aperto');
                jQuery('#step3').css('min-height', '350px');
                jQuery(this).height(62 + jQuery('#filtro_tema').height());
                var altezza = 62 + jQuery('#step3').height() + jQuery('#filtro_tema').height();
                jQuery('#step3').css('min-height', altezza + 'px');
                jQuery(this).addClass('aperto');
            }
        } else {
            if (!jQuery('#barra_filtro #filtro_tema').exists()) {
                jQuery('#barra_filtro').append(jQuery('#filtro_tema'));
            }
            if (jQuery('#filtro_tema').is(':visible')) {
                jQuery(this).removeClass('aperto');
            } else {
                jQuery(this).addClass('aperto');
            }
        }

        if (jQuery('#filtro_tema').is(':visible')) {
            if (!FiltroMobile(1100)) {
                ChiudiSfondoFiltri();
            }
            jQuery('#filtro_tema').hide(200);
        } else {
            ApriSfondoFiltri('#filtro_tema');
            var position = jQuery(this).position();
            jQuery('.popup_filtro').hide(200);
            jQuery('#filtro_tema').css('left', position.left + 'px');
            jQuery('#filtro_tema').show(200);
        }
    });

    jQuery('.btn_filtro.btn_spe').on('click', function(event) {
        var target = jQuery(event.target);
        if (!target.is('div')) {
            return;
        }

        if (FiltroMobile(1100)) {
            if (!jQuery(this).find('#filtro_special').exists()) {
                jQuery(this).append(jQuery('#filtro_special'));
            }

            if (jQuery('#filtro_special').is(':visible')) {
                jQuery(this).removeClass('aperto');
                jQuery(this).attr('style', 'display: block');
                var altezza = jQuery('#step3').height() - jQuery('#filtro_special').height() - 62;
                jQuery('#step3').css('min-height', altezza + 'px');
            } else {
                jQuery('.btn_filtro.aperto').attr('style', 'display: block');
                jQuery('.btn_filtro.aperto').removeClass('aperto');
                jQuery('#step3').css('min-height', '350px');
                jQuery(this).height(62 + jQuery('#filtro_special').height());
                var altezza = 62 + jQuery('#step3').height() + jQuery('#filtro_special').height();
                jQuery('#step3').css('min-height', altezza + 'px');
                jQuery(this).addClass('aperto');
            }
        } else {
            if (!jQuery('#barra_filtro #filtro_special').exists()) {
                jQuery('#barra_filtro').append(jQuery('#filtro_special'));
            }
            if (jQuery('#filtro_special').is(':visible')) {
                jQuery(this).removeClass('aperto');
            } else {
                jQuery(this).addClass('aperto');
            }
        }

        if (jQuery('#filtro_special').is(':visible')) {
            if (!FiltroMobile(1100)) {
                ChiudiSfondoFiltri();
            }
            jQuery('#filtro_special').hide(200);
        } else {
            ApriSfondoFiltri('#filtro_special');
            var position = jQuery(this).position();
            jQuery('.popup_filtro').hide(200);
            jQuery('#filtro_special').css('left', position.left + 'px');
            jQuery('#filtro_special').show(200);
        }
    });

    if ((!insertlink) || (!StepFinale)) {
        CaricaBasiBracciali();
    }

    CaricaFiltri();

    if (isMobile) {
        jQuery('body').bind('touchmove', function(e) {
            FixedBracciale();
        });
    } else {
        jQuery(window).scroll(function() {
            FixedBracciale();
        });
    }

    jQuery('#dettaglio_over .x_dettaglio').on('click', function() {
        jQuery('#dettaglio_over').hide();
    });

    jQuery('#conf_help').on('click', function() {

    });

    jQuery('#filtro_close').on('click', function() {
        if (jQuery('#filtro_materiali').is(':visible')) {
            jQuery('#filtro_materiali').hide(200);
            jQuery('.btn_filtro.btn_mat').removeClass('aperto');
            jQuery('.btn_filtro.btn_mat').removeAttr("style");
        }
        if (jQuery('#filtro_pietre').is(':visible')) {
            jQuery('#filtro_pietre').hide(200);
            jQuery('.btn_filtro.btn_pie').removeClass('aperto');
            jQuery('.btn_filtro.btn_pie').removeAttr("style");
        }
        if (jQuery('#filtro_occasioni').is(':visible')) {
            jQuery('#filtro_occasioni').hide(200);
            jQuery('.btn_filtro.btn_occ').removeClass('aperto');
            jQuery('.btn_filtro.btn_occ').removeAttr("style");
        }
        if (jQuery('#filtro_tema').is(':visible')) {
            jQuery('#filtro_tema').hide(200);
            jQuery('.btn_filtro.btn_tem').removeClass('aperto');
            jQuery('.btn_filtro.btn_tem').removeAttr("style");
        }
        if (jQuery('#filtro_special').is(':visible')) {
            jQuery('#filtro_special').hide(200);
            jQuery('.btn_filtro.btn_spe').removeClass('aperto');
            jQuery('.btn_filtro.btn_spe').removeAttr("style");
        }

        ChiudiSfondoFiltri();
    });

    jQuery('#zoom_close').on('click', function() {
        jQuery('#container_zoom').fadeOut(200);
        jQuery('#container_bracciale').fadeIn(200);
    });

    jQuery('#conf_suggerimento .msg_close').on('click', function() {
        jQuery('#conf_suggerimento').fadeOut(200);
    });

    jQuery('#m_guida .msg_close').on('click', function() {
        jQuery('#m_guida').fadeOut(200);
    });

    jQuery('#m_guida').on('click', function() {
        jQuery('#m_guida').fadeOut(200);
    });

    jQuery('#filtro_clear').on('click', function() {
        ClearFiltri();
    });

    jQuery('#m_active_riepilogo_bracciale').on('click', function() {
        jQuery('#mobile_overlay').show();
        jQuery('#m_riepilogo_tessere').show();
        if (ScrollBarMobile) {
            jQuery('#m_elenco_tessere').perfectScrollbar({
                minScrollbarLength: 70,
                maxScrollbarLength: 70,
                suppressScrollX: true,
                useKeyboard: false,
                wheelPropagation: true,
            });
        }
    });

    jQuery('#m_close_rie_tes').on('click', function() {
        jQuery('#mobile_overlay').hide();
        jQuery('#m_riepilogo_tessere').hide();
        if (ScrollBar) {
            jQuery('#m_elenco_tessere').perfectScrollbar('destroy');
        }
    });

    jQuery('#m_riepilogo_bracciale .azioni').on('click', function() {
        jQuery('#mobile_overlay').show();
        jQuery('#m_azioni').show();
    });

    jQuery('#m_close_azioni').on('click', function() {
        jQuery('#mobile_overlay').hide();
        jQuery('#m_azioni').hide();
    });

    jQuery('.btn_filtro_mobile').on('click', function(event) {
        if (jQuery('.btn_filtro.btn_mat').is(':visible')) {
            ChiudiSfondoFiltri();
            jQuery('.btn_filtro_mobile').removeClass('aperto');
        } else {
            jQuery('#ricerca').removeClass('aperto');
            NascondiRicerca('');
            jQuery('body').scrollTop(140);
            ApriFiltroMobile(200);
        }
    });

    jQuery('#ricerca').on('click', function() {
        if (FiltroMobile(1430)) {
            if (jQuery('#result_ricerca').is(':visible')) {
                jQuery('#ricerca').removeClass('aperto');
                NascondiRicerca('');
            } else {
                jQuery('.btn_filtro_mobile').removeClass('aperto');
                ChiudiSfondoFiltri();
                jQuery('#ricerca').addClass('aperto');
                VisualizzaRicerca();
                jQuery('#inputricerca_mobile').focus();
            }
        }
    });

    jQuery('#mbracciale_right').on('click', function(event) {
        var size = {
            width: window.innerWidth || document.body.clientWidth,
            height: window.innerHeight || document.body.clientHeight
        };

        var left = parseInt(jQuery('#bracciale').css('margin-left'));
        var offset = (-1 * left) + size.width;
        var largh = jQuery('#bracciale').width();
        if (offset <= largh) {
            jQuery('#mbracciale_left').show();
            var mleft = left - (size.width - 80);
            offset = (-1 * mleft) + size.width;
            if (offset > largh) {
                jQuery('#mbracciale_right').hide();
            }
            jQuery('#bracciale').animate({
                'margin-left': mleft,
                easing: 'easeInOutCubic'
            }, 300);
        } else {
            jQuery('#mbracciale_right').hide();
        }
    });

    jQuery('#mbracciale_left').on('click', function(event) {
        var size = {
            width: window.innerWidth || document.body.clientWidth,
            height: window.innerHeight || document.body.clientHeight
        };

        var left = parseInt(jQuery('#bracciale').css('margin-left'));
        if (left <= 0) {
            jQuery('#mbracciale_right').show();
            var mleft = left + (size.width - 80);
            if (mleft > 0) {
                jQuery('#mbracciale_left').hide();
            }

            jQuery('#bracciale').animate({
                'margin-left': mleft,
                easing: 'easeInOutCubic'
            }, 300);
        } else {
            jQuery('#mbracciale_left').hide();
        }
    });

    jQuery('#CorpoMessaggio .button_annulla').on('click', function(event) {
        jQuery('#MessaggioAvvertimento').fadeOut(200);
    });

    jQuery('#messaggio_close').on('click', function(event) {
        jQuery('#MessaggioAvvertimento').fadeOut(200);
    });

    jQuery('#CorpoMessaggio .button_conferma').on('click', function(event) {
        jQuery('#MessaggioAvvertimento').fadeOut(200);
        var action = jQuery('#CorpoMessaggio .button_conferma').attr('action');
        if (action == 'pagina') {
            PrimoAccesso = true;
            ControllaMinimoNLink = ConfStoreMinimoNLink;
            jQuery('#acquista_bracciale').addClass('disable');
            jQuery('#m_acquista_fixed').addClass('disable');
            jQuery('#m_riepilogo_bag').addClass('disable');
            jQuery('#m_btn_acquista').addClass('disable');

            var currentState = history.state;
            if (currentState == 'step2') {
                window.history.go(-1);
            } else {
                window.history.go(-2);
            }
            StepFinale = false;
            jQuery('#m_acquista_fixed').hide();
        }
        if (action == 'salva') {
            CreaProdottoMagento('save');
        }
        if (action == 'email') {
            CreaProdottoMagento('mail');
        }
    });

    jQuery('#fixed_bracciale').on('swipeleft', function() {
        jQuery('#mbracciale_right').click();
    });

    jQuery('#fixed_bracciale').on('swiperight', function() {
        jQuery('#mbracciale_left').click();
    });

    if (!isMobile) {
        jQuery('.scelta_materiale.classic').mouseenter(function() {
            jQuery('.imgbase1').hide();
            if (jQuery(this).hasClass('acciaio')) {
                jQuery('#imgclassic_acciaio').show();
                jQuery('#text_materiale_sx').html(color_acciaio);
                jQuery('.detail_scelta_base.base1 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseClassic[0]) + SimboloValuta);
            }

            if (jQuery(this).hasClass('oro')) {
                jQuery('#imgclassic_oro').show();
                jQuery('#text_materiale_sx').html(color_oro);
                jQuery('.detail_scelta_base.base1 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseClassic[1]) + SimboloValuta);
            }

            if (jQuery(this).hasClass('rosa')) {
                jQuery('#imgclassic_rosa').show();
                jQuery('#text_materiale_sx').html(color_ororosa);
                jQuery('.detail_scelta_base.base1 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseClassic[2]) + SimboloValuta);
            }

            if (jQuery(this).hasClass('dark')) {
                jQuery('#imgclassic_dark').show();
                jQuery('#text_materiale_sx').html(color_dark);
                jQuery('.detail_scelta_base.base1 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseClassic[3]) + SimboloValuta);
            }
        });

        jQuery('.scelta_materiale.classic').mouseleave(function() {
            jQuery('.imgbase1').hide();
            var materiale = jQuery('.conf_pulsante.personalizza.composable.base1').attr('materiale');
            jQuery('#imgclassic_' + materiale).show();

            switch (materiale) {
                case 'acciaio':
                    jQuery('#text_materiale_sx').html(color_acciaio);
                    jQuery('.detail_scelta_base.base1 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseClassic[0]) + SimboloValuta);
                    break;
                case 'oro':
                    jQuery('#text_materiale_sx').html(color_oro);
                    jQuery('.detail_scelta_base.base1 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseClassic[1]) + SimboloValuta);
                    break;
                case 'rosa':
                    jQuery('#text_materiale_sx').html(color_ororosa);
                    jQuery('.detail_scelta_base.base1 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseClassic[2]) + SimboloValuta);
                    break;
                case 'dark':
                    jQuery('#text_materiale_sx').html(color_dark);
                    jQuery('.detail_scelta_base.base1 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseClassic[3]) + SimboloValuta);
                    break;
            }

        });
    }

    jQuery('.scelta_materiale.classic').on('click', function() {
        jQuery('.scelta_materiale.classic').removeClass('acciaio-over');
        jQuery('.scelta_materiale.classic').removeClass('oro-over');
        jQuery('.scelta_materiale.classic').removeClass('rosa-over');
        jQuery('.scelta_materiale.classic').removeClass('dark-over');
        jQuery('.imgbase1').hide();

        if (jQuery(this).hasClass('acciaio')) {
            jQuery('.conf_pulsante.personalizza.composable.base1').attr('materiale', 'acciaio');
            jQuery(this).addClass('acciaio-over');
            jQuery('#text_materiale_sx').html(color_acciaio);
            jQuery('#imgclassic_acciaio').show();
            jQuery('.detail_scelta_base.base1 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseClassic[0]) + SimboloValuta);
        }

        if (jQuery(this).hasClass('oro')) {
            jQuery('.conf_pulsante.personalizza.composable.base1').attr('materiale', 'oro');
            jQuery(this).addClass('oro-over');
            jQuery('#text_materiale_sx').html(color_oro);
            jQuery('#imgclassic_oro').show();
            jQuery('.detail_scelta_base.base1 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseClassic[1]) + SimboloValuta);
        }
        if (jQuery(this).hasClass('rosa')) {
            jQuery('.conf_pulsante.personalizza.composable.base1').attr('materiale', 'rosa');
            jQuery(this).addClass('rosa-over');
            jQuery('#text_materiale_sx').html(color_ororosa);
            jQuery('#imgclassic_rosa').show();
            jQuery('.detail_scelta_base.base1 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseClassic[2]) + SimboloValuta);
        }
        if (jQuery(this).hasClass('dark')) {
            jQuery('.conf_pulsante.personalizza.composable.base1').attr('materiale', 'dark');
            jQuery(this).addClass('dark-over');
            jQuery('#text_materiale_sx').html(color_dark);
            jQuery('#imgclassic_dark').show();
            jQuery('.detail_scelta_base.base1 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseClassic[3]) + SimboloValuta);
        }
    });

    if (!isMobile) {
        jQuery('.scelta_materiale.big').mouseenter(function() {
            jQuery('.imgbase2').hide();
            if (jQuery(this).hasClass('acciaio')) {
                jQuery('#text_materiale_dx').html(color_acciaio);
                jQuery('#imgbig_acciaio').show();
                jQuery('.detail_scelta_base.base2 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseBig[0]) + SimboloValuta);
            }
            if (jQuery(this).hasClass('oro')) {
                jQuery('#text_materiale_dx').html(color_oro);
                jQuery('#imgbig_oro').show();
                jQuery('.detail_scelta_base.base2 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseBig[1]) + SimboloValuta);
            }
            if (jQuery(this).hasClass('rosa')) {
                jQuery('#text_materiale_dx').html(color_ororosa);
                jQuery('#imgbig_rosa').show();
                jQuery('.detail_scelta_base.base2 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseBig[2]) + SimboloValuta);
            }
            if (jQuery(this).hasClass('dark')) {
                jQuery('#text_materiale_dx').html(color_dark);
                jQuery('#imgbig_dark').show();
                jQuery('.detail_scelta_base.base2 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseBig[3]) + SimboloValuta);
            }
        });

        jQuery('.scelta_materiale.big').mouseleave(function() {
            jQuery('.imgbase2').hide();
            var materiale = jQuery('.conf_pulsante.personalizza.composable.base2').attr('materiale');
            jQuery('#imgbig_' + materiale).show();

            switch (materiale) {
                case 'acciaio':
                    jQuery('#text_materiale_dx').html(color_acciaio);
                    jQuery('.detail_scelta_base.base2 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseBig[0]) + SimboloValuta);
                    break;
                case 'oro':
                    jQuery('#text_materiale_dx').html(color_oro);
                    jQuery('.detail_scelta_base.base2 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseBig[1]) + SimboloValuta);
                    break;
                case 'rosa':
                    jQuery('#text_materiale_dx').html(color_ororosa);
                    jQuery('.detail_scelta_base.base2 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseBig[2]) + SimboloValuta);
                    break;
                case 'dark':
                    jQuery('#text_materiale_dx').html(color_dark);
                    jQuery('.detail_scelta_base.base2 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseBig[3]) + SimboloValuta);
                    break;
            }
        });
    }

    jQuery('.scelta_materiale.big').on('click', function() {
        jQuery('.scelta_materiale.big').removeClass('acciaio-over');
        jQuery('.scelta_materiale.big').removeClass('oro-over');
        jQuery('.scelta_materiale.big').removeClass('rosa-over');
        jQuery('.scelta_materiale.big').removeClass('dark-over');
        jQuery('.imgbase2').hide();

        if (jQuery(this).hasClass('acciaio')) {
            jQuery('.conf_pulsante.personalizza.composable.base2').attr('materiale', 'acciaio');
            jQuery(this).addClass('acciaio-over');
            jQuery('#text_materiale_dx').html(color_acciaio);
            jQuery('#imgbig_acciaio').show();
            jQuery('.detail_scelta_base.base2 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseBig[0]) + SimboloValuta);
        }
        if (jQuery(this).hasClass('oro')) {
            jQuery('.conf_pulsante.personalizza.composable.base2').attr('materiale', 'oro');
            jQuery(this).addClass('oro-over');
            jQuery('#text_materiale_dx').html(color_oro);
            jQuery('#imgbig_oro').show();
            jQuery('.detail_scelta_base.base2 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseBig[1]) + SimboloValuta);
        }
        if (jQuery(this).hasClass('rosa')) {
            jQuery('.conf_pulsante.personalizza.composable.base2').attr('materiale', 'rosa');
            jQuery(this).addClass('rosa-over');
            jQuery('#text_materiale_dx').html(color_ororosa);
            jQuery('#imgbig_rosa').show();
            jQuery('.detail_scelta_base.base2 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseBig[2]) + SimboloValuta);
        }
        if (jQuery(this).hasClass('dark')) {
            jQuery('.conf_pulsante.personalizza.composable.base2').attr('materiale', 'dark');
            jQuery(this).addClass('dark-over');
            jQuery('#text_materiale_dx').html(color_dark);
            jQuery('#imgbig_dark').show();
            jQuery('.detail_scelta_base.base2 .details_dati span').html(str_da + ' ' + DisplayCurrency(CostoBaseBig[3]) + SimboloValuta);
        }
    });
    if (!isMobile) {
        jQuery('.scelta_base.sx').mouseenter(function() {
            jQuery('.detail_scelta_base.base1').fadeIn(600);
            jQuery("#SceltaBase1").animate({
                top: "-2px"
            }, 600);
        });

        jQuery('.scelta_base.dx').mouseenter(function() {
            jQuery('.detail_scelta_base.base2').fadeIn(600);
            jQuery("#SceltaBase2").animate({
                top: "-2px"
            }, 600);
        });

        jQuery('.scelta_base.sx').mouseleave(function() {
            jQuery('.detail_scelta_base.base1').fadeOut(200);
            jQuery("#SceltaBase1").animate({
                top: "2px"
            }, 200);
        });

        jQuery('.scelta_base.dx').mouseleave(function() {
            jQuery('.detail_scelta_base.base2').fadeOut(200);
            jQuery("#SceltaBase2").animate({
                top: "2px"
            }, 200);
        });

        jQuery('.scelta_base.sx1').mouseenter(function() {
            jQuery('.detail_scelta_base.base3').fadeIn(600);
            jQuery("#SceltaBase3").animate({
                top: "-2px"
            }, 600);
        });

        jQuery('.scelta_base.dx1').mouseenter(function() {
            jQuery('.detail_scelta_base.base4').fadeIn(600);
            jQuery("#SceltaBase4").animate({
                top: "-2px"
            }, 600);
        });

        jQuery('.scelta_base.sx1').mouseleave(function() {
            jQuery('.detail_scelta_base.base3').fadeOut(200);
            jQuery("#SceltaBase3").animate({
                top: "2px"
            }, 200);
        });

        jQuery('.scelta_base.dx1').mouseleave(function() {
            jQuery('.detail_scelta_base.base4').fadeOut(200);
            jQuery("#SceltaBase4").animate({
                top: "2px"
            }, 200);
        });
    }

    jQuery('#close_ricerca').on('click', function(event) {
        jQuery('#inputricerca').val('');
        jQuery('#close_ricerca').hide(200);
        jQuery('#result_ricerca').hide(200);
        CaricaLink();
    });

    window.addEventListener('popstate', function(e) {
        if (e.state == null) {
            if (StepFinale) {
                MessaggioCambiaPagina();
            } else {
                StepFinale = false;
                jQuery('#step3').fadeOut(200);
                jQuery('#step2').fadeOut(200);
                jQuery('#step1').fadeIn(200);
                if (isMobile) {
                    jQuery('body').scrollTop(0);
                }
            }
        } else {
            if (e.state == 'step2') {
                if (StepFinale) {
                    MessaggioCambiaPagina();
                } else {
                    jQuery('#step2').fadeIn(200);
                    jQuery('#step1').fadeOut(200);
                    jQuery('#step3').fadeOut(200);
                }
            } else if (e.state == 'step3') {
                jQuery('#step2').fadeOut(200);
                jQuery('#step1').fadeOut(200);
                jQuery('#step3').fadeIn(200);
            }
        }
    });

    jQuery('#inputricerca_mobile').on('focusout', function(e) {
        window.scrollTo(0, 0)
    });

    jQuery('#select_font').on('change', function() {
        var selez = jQuery(this).val();
        switch (selez) {
            case '1':
                jQuery('#FormIncisione .product-custom-option.inputtext').css('font-family', 'Baskerville, sans-serif');
                jQuery('#FormIncisione .conferma .testo').css('font-family', 'Baskerville, sans-serif');
                break;
            case '2':
                jQuery('#FormIncisione .product-custom-option.inputtext').css('font-family', 'CygnetRound, sans-serif');
                jQuery('#FormIncisione .conferma .testo').css('font-family', 'CygnetRound, sans-serif');
                break;
            case '3':
                jQuery('#FormIncisione .product-custom-option.inputtext').css('font-family', 'Montserrat, sans-serif');
                jQuery('#FormIncisione .conferma .testo').css('font-family', 'Montserrat, sans-serif');
                break;
            default:
                jQuery('#FormIncisione .product-custom-option.inputtext').css('font-family', 'seleziona, sans-serif');
                jQuery('#FormIncisione .conferma .testo').css('font-family', 'seleziona, sans-serif');
                break;
        }
    });

    jQuery('#FormIncisione .button_confermafont').on('click', function() {
        var selez_font = jQuery('#select_font').val();
        var text_l1 = jQuery('#FormIncisione .line-1').val();
        var text_l2 = jQuery('#FormIncisione .line-2').val();
        var j = parseInt(jQuery('#FormIncisione').attr('nlink'));
        jQuery('#base_' + j).find('.stella_incisione').show();
        var continua = true;
        if (selez_font == '') {
            jQuery('#select_font').next('.validation-advice').show();
            continua = false;
        } else {
            jQuery('#select_font').next('.validation-advice').hide();
        }

        if ((text_l1 == '') && (text_l2 == '')) {
            jQuery('#FormIncisione .line-2').next('.validation-advice').show();
            continua = false;
        } else {
            jQuery('#FormIncisione .line-2').next('.validation-advice').hide();
        }

        if (continua) {
            jQuery('#FormIncisione .testo_linea1').text(text_l1);
            jQuery('#FormIncisione .testo_linea2').text(text_l2);

            jQuery('#FormIncisione .seleziona_incisione').hide();
            jQuery('#FormIncisione .button_confermafont').hide();

            jQuery('#FormIncisione .conferma').show();
            jQuery('#FormIncisione .button_continua').show();

            ObjBracciale[j].incision = 1;
            var prezzo = parseFloat(ObjBracciale[j].price) + PrezzoIncisione;
            ObjBracciale[j].price = prezzo.toFixed(2);
            CalcolaRiepilogo();
            switch (selez_font) {
                case '1':
                    ObjBracciale[j].font = 'Baskerville';
                    break;
                case '2':
                    ObjBracciale[j].font = 'CygnetRound';
                    break;
                case '3':
                    ObjBracciale[j].font = 'Montserrat';
                    break;
            }

            ObjBracciale[j].l1 = text_l1;
            ObjBracciale[j].l2 = text_l2;

        }
    });

    jQuery('#FormIncisione .conferma .validation-advice').on('click', function() {
        var j = parseInt(jQuery('#FormIncisione').attr('nlink'));
        jQuery('#FormIncisione .seleziona_incisione').show();
        jQuery('#FormIncisione .conferma').hide();
        jQuery('#FormIncisione .button_confermafont').show();
        jQuery('#FormIncisione .button_continua').hide();

        jQuery('#base_' + j).find('.stella_incisione').hide();

        var prezzo = parseFloat(ObjBracciale[j].price) - PrezzoIncisione;
        ObjBracciale[j].price = prezzo.toFixed(2);
        ObjBracciale[j].incision = 0;

        ObjBracciale[j].font = '';
        ObjBracciale[j].l1 = '';
        ObjBracciale[j].l2 = '';
    });

    jQuery('#FormIncisione .reset-input-text').on('click', function() {
        var linea = jQuery(this).attr('line');
        jQuery('#FormIncisione .inputtext.line-' + linea).val('');
    });

    jQuery('#FormIncisione .button_continua').on('click', function() {
        jQuery('#FormIncisione').hide();
        InitSelezioneIncisione();
    });

    jQuery('#FormIncisione .finestra_close').on('click', function() {
        var chiudi = false;
        if (jQuery('#FormIncisione .button_confermafont').is(":visible")) {
            var res = confirm(str_alert_lose_incision);
            if (res == true) {
                var j = parseInt(jQuery('#FormIncisione').attr('nlink'));
                jQuery('#base_' + j).find('.stella_incisione').hide();
                CalcolaRiepilogo();
                chiudi = true;
            }
        } else {
            chiudi = true;
        }

        if (chiudi == true) {
            jQuery('#FormIncisione').hide();
            InitSelezioneIncisione();
        }
    });



});

function InitSelezioneIncisione() {
    jQuery('#select_font').val('');
    jQuery('#FormIncisione .line-1').val('');
    jQuery('#FormIncisione .line-2').val('');
    jQuery('#FormIncisione .product-custom-option.inputtext').css('font-family', '');

    jQuery('#FormIncisione .seleziona_incisione').show();
    jQuery('#FormIncisione .conferma').hide();
    jQuery('#FormIncisione .button_confermafont').show();
    jQuery('#FormIncisione .button_continua').hide();

    var strrep = jQuery('#FormIncisione .true-label').attr('strreplace');
    if (strrep != '') {
        jQuery('#FormIncisione .true-label').attr('strreplace', '');
        var strhtml = jQuery('#FormIncisione .true-label').html();
        var reshtml = strhtml.replace(strrep, '7');
        jQuery('#FormIncisione .true-label').html(reshtml);
    }
}

function ApriFiltroMobile(effect) {
    jQuery('.btn_filtro').show(effect);
    jQuery('#container_tessere').hide(0);
    ApriSfondoFiltri('.btn_filtro_mobile');
    jQuery('.btn_filtro_mobile').addClass('aperto');
    jQuery('#conf_filtro').hide();
}

function RefreshSlideFiltri() {
    var size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
    }

    var largh = 0;
    var nr_li = 0;
    jQuery('#filtri_attivi .touchcarousel ul li').each(function(index, element) {
        largh += jQuery(this).width();
        nr_li++;
    });

    if (largh > size.width) {
        FiltriTC = jQuery('#filtri_attivi .touchcarousel').touchCarousel({
            scrollbar: false,
            pagingNavControls: false,
            directionNav: false,
            scrollToLast: true
        }).data('touchCarousel');
        jQuery('#filtri_attivi .touchcarousel ul').width(largh + 10);
        FiltriTC.goTo(nr_li); //li_vuoto;
    } else {
        FiltriTC = null;
    }
}

function ApplicaFiltroAutomatico() {
    var strhtml = '';
    var conta = 0;
    var fil_att = '';
    jQuery.each(arr_mat, function(index, value) {
        selector = jQuery('.chkborder input[idattr="' + value + '"]');
        selector.attr('checked', 'checked');
        text = jQuery("label[for='" + selector.attr('id') + "']").text();
        conta++;
        fil_att = '#' + value + '#';
        strhtml += '<li class="touchcarousel-item " iddiv="act_' + selector.attr('id') + '"><div class="btn_filtro_act" id="act_' + selector.attr('id') + '" >' + text;
        strhtml += '<div class="active_btn_filtro"></div></div></li>';
    });
    if (conta > 0) {
        jQuery('#filtri_attivi').attr('mat', fil_att);
        jQuery('.btn_filtro.btn_mat').attr('count', conta);
        var testo = jQuery('.btn_filtro.btn_mat .nomefiltro').text();
        var pos = testo.search(' \\(');
        if (pos >= 0) testo = testo.substring(0, pos);
        testo = testo + ' (' + conta + ')';
        jQuery('.btn_filtro.btn_mat .nomefiltro').text(testo);
    }

    conta = 0;
    fil_att = '';
    jQuery.each(arr_pie, function(index, value) {
        selector = jQuery('.chkborder input[idattr="' + value + '"]');
        selector.attr('checked', 'checked');
        text = jQuery("label[for='" + selector.attr('id') + "']").text();
        conta++;
        fil_att = '#' + value + '#';
        strhtml += '<li class="touchcarousel-item " iddiv="act_' + selector.attr('id') + '"><div class="btn_filtro_act" id="act_' + selector.attr('id') + '" >' + text;
        strhtml += '<div class="active_btn_filtro"></div></div></li>';
    });
    if (conta > 0) {
        jQuery('#filtri_attivi').attr('pie', fil_att);
        jQuery('.btn_filtro.btn_pie').attr('count', conta);
        testo = jQuery('.btn_filtro.btn_pie .nomefiltro').text();
        pos = testo.search(' \\(');
        if (pos >= 0) testo = testo.substring(0, pos);
        testo = testo + ' (' + conta + ')';
        jQuery('.btn_filtro.btn_pie .nomefiltro').text(testo);
    }

    conta = 0;
    fil_att = '';
    jQuery.each(arr_occ, function(index, value) {
        selector = jQuery('.chkborder input[idattr="' + value + '"]');
        selector.attr('checked', 'checked');
        text = jQuery("label[for='" + selector.attr('id') + "']").text();
        conta++;
        fil_att = '#' + value + '#';
        strhtml += '<li class="touchcarousel-item" iddiv="act_' + selector.attr('id') + '"><div class="btn_filtro_act" id="act_' + selector.attr('id') + '" >' + text;
        strhtml += '<div class="active_btn_filtro"></div></div></li>';
    });

    if (conta > 0) {
        jQuery('#filtri_attivi').attr('occ', fil_att);
        jQuery('.btn_filtro.btn_occ').attr('count', conta);
        testo = jQuery('.btn_filtro.btn_occ .nomefiltro').text();
        pos = testo.search(' \\(');
        if (pos >= 0) testo = testo.substring(0, pos);
        testo = testo + ' (' + conta + ')';
        jQuery('.btn_filtro.btn_occ .nomefiltro').text(testo);
    }

    conta = 0;
    fil_att = '';
    jQuery.each(arr_tem, function(index, value) {
        selector = jQuery('.chkborder input[idattr="' + value + '"]');
        selector.attr('checked', 'checked');
        text = jQuery("label[for='" + selector.attr('id') + "']").text();
        conta++;
        fil_att = '#' + value + '#';
        strhtml += '<li class="touchcarousel-item " iddiv="act_' + selector.attr('id') + '"><div class="btn_filtro_act" id="act_' + selector.attr('id') + '" >' + text;
        strhtml += '<div class="active_btn_filtro"></div></div></li>';
    });
    if (conta > 0) {
        jQuery('#filtri_attivi').attr('tem', fil_att);
        jQuery('.btn_filtro.btn_tem').attr('count', conta);
        testo = jQuery('.btn_filtro.btn_tem .nomefiltro').text();
        pos = testo.search(' \\(');
        if (pos >= 0) testo = testo.substring(0, pos);
        testo = testo + ' (' + conta + ')';
        jQuery('.btn_filtro.btn_tem .nomefiltro').text(testo);
    }

    conta = 0;
    fil_att = '';
    jQuery.each(arr_spe, function(index, value) {
        selector = jQuery('.chkborder input[idattr="' + value + '"]');
        selector.attr('checked', 'checked');
        text = jQuery("label[for='" + selector.attr('id') + "']").text();
        conta++;
        fil_att = '#' + value + '#';
        strhtml += '<li class="touchcarousel-item " iddiv="act_' + selector.attr('id') + '"><div class="btn_filtro_act" id="act_' + selector.attr('id') + '" >' + text;
        strhtml += '<div class="active_btn_filtro"></div></div></li>';
    });
    if (conta > 0) {
        jQuery('#filtri_attivi').attr('spe', fil_att);
        jQuery('.btn_filtro.btn_spe').attr('count', conta);
        testo = jQuery('.btn_filtro.btn_spe .nomefiltro').text();
        pos = testo.search(' \\(');
        if (pos >= 0) testo = testo.substring(0, pos);
        testo = testo + ' (' + conta + ')';
        jQuery('.btn_filtro.btn_spe .nomefiltro').text(testo);
    }

    var size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
    }

    jQuery('#filtri_attivi').append('<div class="touchcarousel minimal-light pizza1"><ul class="touchcarousel-container"></ul></div>');
    jQuery('#filtri_attivi .touchcarousel ul').append(strhtml);
    jQuery('#filtri_attivi .touchcarousel').width(size.width);
    jQuery('#filtri_attivi .touchcarousel').height(39);

    RefreshSlideFiltri();

    jQuery('#filtri_attivi .touchcarousel ul li').on('click', function() {
        RimuoviFiltro(jQuery(this).attr('iddiv'), 1);
        jQuery(this).remove();
        RefreshSlideFiltri();
    });

    jQuery('.btn_filtro_act').on('click', function() {
        RimuoviFiltro(jQuery(this).attr('id'), 1);
    });

    jQuery('.active_btn_filtro').on('click', function() {
        RimuoviFiltro(jQuery(this).parent().attr('id'), 1);
    });

    if (strhtml != '') {
        ApriBarraFiltro();
        FiltroAttivo = true;
    }

    if (insertlink) {
        PrezzoTesseraBase(true, MaterialeBracciale);
        SettaPosizioniTessere();
    }

    if (StepFinale) {
        PrezzoTesseraBase(false, MaterialeBracciale);
        ComponiBaseBracciale();
        SettaPosizioniTessere();
        CaricaLink();
        var bgurl_aperto = 'url(' + bgurl_scelto.replace(MaterialeBracciale, 'a_' + MaterialeBracciale) + ')';
        switch (TipoBracciale) {
            case 'mbbshort':
                jQuery('#bracciale.base_mybonbons').css('background-image', bgurl_aperto);
                jQuery('#zoombg_mbb').css('background-image', bgurl_aperto);
                jQuery('#crea_bracciale div').html(str_mbb_short);
                jQuery('#m_back').html(str_mbb_short);
                break;
            case 'mbblong':
                jQuery('#bracciale.base_mybonbons').css('background-image', bgurl_aperto);
                jQuery('#zoombg_mbb').css('background-image', bgurl_aperto);
                jQuery('#crea_bracciale div').html(str_mbb_long);
                jQuery('#m_back').html(str_mbb_long);
                break;
            case 'cub_cla':
                jQuery('#bracciale.base_cubiamo').css('background-image', bgurl_aperto);
                jQuery('#zoombg_cubiamo').css('background-image', bgurl_aperto);
                jQuery('#crea_bracciale div').html(str_cub_classic);
                jQuery('#m_back').html(str_cub_classic);
                break;
            case 'cub_big_double':
                jQuery('#bracciale.base_cubiamo').addClass('basso centra bigshort');
                jQuery('#bracciale.base_cubiamo').css('background-image', bgurl_aperto);
                jQuery('#zoombg_cubiamo').css('background-image', bgurl_aperto);
                jQuery('#crea_bracciale div').html(str_cub_big_short);
                jQuery('#m_back').html(str_cub_classic);
                break;
            case 'cub_big':
                jQuery('#bracciale.base_cubiamo').css('background-image', bgurl_aperto);
                jQuery('#zoombg_cubiamo').css('background-image', bgurl_aperto);
                jQuery('#crea_bracciale div').html(str_cub_big_long);
                jQuery('#m_back').html(str_cub_big_long);
                break;
            case 'cub_cla_arg':
                jQuery('#bracciale.base_cubiamo').addClass('basso centra');
                jQuery('#bracciale.base_cubiamo').css('background-image', bgurl_aperto);
                jQuery('#zoombg_cubiamo').css('background-image', bgurl_aperto);
                jQuery('#crea_bracciale div').html(str_cub_arg);
                jQuery('#m_back').html(str_cub_arg);
                break;
            case 'seimia':
                jQuery('#bracciale.base_seimia').css('background-image', bgurl_aperto);
                jQuery('#zoombg_seimia').css('background-image', bgurl_aperto);
                //                jQuery('#crea_bracciale').html(str_seimia);
                break;
        }
    } else {
        switch (TipoBracciale) {
            case 'big':
                var bgurl = jQuery('#imgbig_' + MaterialeBracciale).css('background-image');
                jQuery('#imgbig').css('background-image', bgurl);
                jQuery('.scelta_base.sx').hide();
                break;
            case 'classic':
                var bgurl = jQuery('#imgclassic_' + MaterialeBracciale).css('background-image');
                jQuery('#imgclassic').css('background-image', bgurl);

                jQuery('.scelta_base.dx').hide();
                jQuery('.scelta_base.sx').css('margin-right', '0px');
                break;
            case 'cub_cla':
            case 'cub_cla_arg':
                jQuery('.scelta_base.dx').hide();
                jQuery('.scelta_base.sx1').hide();
                jQuery('.scelta_base.dx1').css('margin-top', '84px');
                break;

            case 'cub_big_double':
            case 'cub_big':
                jQuery('.scelta_base.sx').hide();
                jQuery('.scelta_base.dx1').hide();
                break;
        }

        NascondiLoading();
    }
}

function MessaggioSalva() {
    jQuery('#CorpoMessaggio .messaggio').html(avv_salva);
    jQuery('#CorpoMessaggio .button_annulla').html(btn_rimani);
    jQuery('#CorpoMessaggio .button_conferma').html(btn_salva);
    jQuery('#CorpoMessaggio .button_conferma').attr('action', 'salva');
    jQuery('#CorpoMessaggio .button_conferma').show();
    jQuery('#CorpoMessaggio .button_annulla').show();
    jQuery('#CorpoMessaggio').removeClass('CorpoMessaggioEmail');
    jQuery('#MessaggioAvvertimento').fadeIn(200);
}

function MessaggioCambiaPagina() {
    jQuery('#CorpoMessaggio .messaggio').html(avv_cambio_pagina);
    jQuery('#CorpoMessaggio .button_annulla').html(btn_rimani);
    jQuery('#CorpoMessaggio .button_conferma').html(btn_abbandona);
    jQuery('#CorpoMessaggio .button_conferma').attr('action', 'pagina');
    jQuery('#CorpoMessaggio .button_conferma').show();
    jQuery('#CorpoMessaggio .button_annulla').show();
    jQuery('#CorpoMessaggio').removeClass('CorpoMessaggioEmail');
    jQuery('#MessaggioAvvertimento').fadeIn(200);
}

function MessaggioWishList() {
    jQuery('#CorpoMessaggio .messaggio').html(avv_wishlist);
    jQuery('#CorpoMessaggio .button_conferma').html('OK');
    jQuery('#CorpoMessaggio .button_conferma').attr('action', 'chiudi');
    jQuery('#CorpoMessaggio .button_conferma').show();
    jQuery('#CorpoMessaggio .button_annulla').hide();
    jQuery('#CorpoMessaggio').removeClass('CorpoMessaggioEmail');
    jQuery('#MessaggioAvvertimento').fadeIn(200);
}

function MessaggioSelezionaMisura() {
    jQuery('#CorpoMessaggio .messaggio').html(avv_misura);
    jQuery('#CorpoMessaggio .button_conferma').html('OK');
    jQuery('#CorpoMessaggio .button_conferma').attr('action', 'chiudi');
    jQuery('#CorpoMessaggio .button_conferma').show();
    jQuery('#CorpoMessaggio .button_annulla').hide();
    jQuery('#CorpoMessaggio').removeClass('CorpoMessaggioEmail');
    jQuery('#MessaggioAvvertimento').fadeIn(200);
}

function MessaggioEmail() {
    var strhtml = str_invia_mail_amico + '<br>';
    strhtml += '<input type="text" class="inputemail" id="nomefrom" placeholder="' + str_il_tuo_nome + '" /><br>';
    strhtml += '<input type="text" class="inputemail" id="emailfrom" placeholder="' + str_la_tua_mail + '" /><br>';
    strhtml += '<input type="text" class="inputemail" id="emailto" placeholder="' + str_mail_destinatario + '"/>'
    jQuery('#CorpoMessaggio .messaggio').html(strhtml);
    jQuery('#CorpoMessaggio .button_conferma').html(str_send_email);
    jQuery('#CorpoMessaggio .button_conferma').attr('action', 'email');
    jQuery('#CorpoMessaggio .button_conferma').show();
    jQuery('#CorpoMessaggio .button_annulla').hide();
    jQuery('#CorpoMessaggio').addClass('CorpoMessaggioEmail');
    jQuery('#MessaggioAvvertimento').fadeIn(200);
}

function MessaggioMailInviata() {
    jQuery('#CorpoMessaggio .messaggio').html(avv_email);
    jQuery('#CorpoMessaggio .button_conferma').html('OK');
    jQuery('#CorpoMessaggio .button_conferma').attr('action', 'chiudi');
    jQuery('#CorpoMessaggio .button_conferma').show();
    jQuery('#CorpoMessaggio .button_annulla').hide();
    jQuery('#CorpoMessaggio').removeClass('CorpoMessaggioEmail');
    jQuery('#MessaggioAvvertimento').fadeIn(200);
}


function MessaggioZeroLink(nr) {
    switch (TipoBracciale) {
        case 'classic':
        case 'big':
            if (!ControllaMinimoNLink) {
                jQuery('#CorpoMessaggio .messaggio').html(avv_zerolink);
            } else {
                jQuery('#CorpoMessaggio .messaggio').html(avv_almeno2link);
            }
            break;
        case 'mbbshort':
        case 'mbblong':
            if (!ControllaMinimoNLink) {
                jQuery('#CorpoMessaggio .messaggio').html(avv_zerocharm);
            } else {
                jQuery('#CorpoMessaggio .messaggio').html(avv_almeno2charm);
            }
            break;
        case 'cub_cla':
        case 'cub_big_double':
        case 'cub_big':
        case 'cub_cla_arg':
            if (!ControllaMinimoNLink) {
                jQuery('#CorpoMessaggio .messaggio').html(avv_zerocubi);
            } else {
                jQuery('#CorpoMessaggio .messaggio').html(avv_almeno2cubi);
            }
            break;
    }

    jQuery('#CorpoMessaggio .button_conferma').html('OK');
    jQuery('#CorpoMessaggio .button_conferma').attr('action', 'chiudi');
    jQuery('#CorpoMessaggio .button_conferma').show();
    jQuery('#CorpoMessaggio .button_annulla').hide();
    jQuery('#MessaggioAvvertimento').fadeIn(200);
}

var gia_fixed = false;

function FixedBracciale() {
    if ((StepFinale) && (!FiltroAperto)) {
        var alt_fix = 340;
        if (FiltroMobile(480)) {
            alt_fix = 260;
        }

        var altezza = jQuery(window).scrollTop();

        if (altezza > 140) {
            if (!gia_fixed) {
                jQuery('#header').hide(0);
                jQuery('#fixed_bracciale').css({
                    position: 'fixed',
                    'z-index': '99'
                });
                jQuery('#fixed_bracciale').css({
                    'height': alt_fix + 'px',
                    'margin-top': '-40px'
                });
                jQuery('#bracciale_zoom').addClass('fixed');
                jQuery('#zoombg').addClass('fixed');
                jQuery('#zoombg_mbb').addClass('fixed');
                jQuery('#zoombg_cubiamo').addClass('fixed');
                jQuery('#zoom_close').addClass('fixed');
                gia_fixed = true;
                if (isMobile) {
                    jQuery('#m_acquista_fixed').hide();
                    jQuery('#m_riepilogo_bag').show();
                }
            }
        } else {
            if (gia_fixed) {
                jQuery('#header').show(0);
                jQuery('#fixed_bracciale').css({
                    position: 'absolute',
                    'z-index': ''
                });
                jQuery('#fixed_bracciale').css({
                    'height': alt_fix + 'px',
                    'margin-top': '0px'
                });

                jQuery('#bracciale_zoom').removeClass('fixed');
                jQuery('#zoombg').removeClass('fixed');
                jQuery('#zoombg_mbb').removeClass('fixed');
                jQuery('#zoombg_cubiamo').removeClass('fixed');
                jQuery('#zoom_close').removeClass('fixed');
                gia_fixed = false;
                if (isMobile) {
                    jQuery('#m_acquista_fixed').show();
                    jQuery('#m_riepilogo_bag').hide();
                }
            }
        }
    } else if (FiltroAperto) {
        if ((isMobile) && (gia_fixed)) {
            jQuery('#fixed_bracciale').css({
                position: 'absolute',
                'z-index': ''
            });
            jQuery('#fixed_bracciale').css({
                'height': alt_fix + 'px',
                'margin-top': '0px'
            });

            jQuery('#fixed_bracciale').css({
                position: 'absolute',
                'z-index': ''
            });
            jQuery('#bracciale_zoom').removeClass('fixed');
            jQuery('#zoombg').removeClass('fixed');
            jQuery('#zoombg_mbb').removeClass('fixed');
            jQuery('#zoombg_cubiamo').removeClass('fixed');
            jQuery('#zoom_close').removeClass('fixed');
            gia_fixed = false;
        } else {
            if (!isMobile) {
                var altezza = jQuery('#fixed_bracciale').height() + jQuery('#sfondo_filtri').height();
                jQuery('#fixed_bracciale').css({
                    'height': altezza + 'px'
                });
            }
        }
    }
}

function PersonalizzaClassic() {
    jQuery('.conf_pulsante.personalizza.composable.base1').click();
}

function PersonalizzaBig() {
    jQuery('.conf_pulsante.personalizza.composable.base2').click();
}

function PersonalizzaMyBonBonsShort() {
    jQuery('.conf_pulsante.personalizza.mybonbons.base1').click();
}

function PersonalizzaMyBonBonsLong() {
    jQuery('.conf_pulsante.personalizza.mybonbons.base2').click();
}

function PersonalizzaCubiamo1() {
    jQuery('.conf_pulsante.personalizza.cubiamo.base1').click();
}

function PersonalizzaCubiamo2() {
    jQuery('.conf_pulsante.personalizza.cubiamo.base2').click();
}

function PersonalizzaCubiamo3() {
    jQuery('.conf_pulsante.personalizza.cubiamo.base3').click();
}

function PersonalizzaCubiamo4() {
    jQuery('.conf_pulsante.personalizza.cubiamo.base4').click();
}

jQuery('.conf_pulsante.personalizza.composable').on('click', function() {
    StepFinale = false;
    if (jQuery(this).hasClass('base1')) {
        TipoBracciale = 'classic';
        MaterialeBracciale = jQuery(this).attr('materiale');
        jQuery('#step2 .conf_title').html('CLASSIC');
        jQuery('#crea_bracciale div').html(str_com_classic);
        key_type = str_com_classic;
        key_color = jQuery('#text_materiale_sx').text();
        jQuery('#m_back').html(str_com_classic);
        bgurl_scelto = jQuery('#imgclassic_' + MaterialeBracciale).css('background-image');
        jQuery('#imgclassic').css('background-image', bgurl_scelto);
        jQuery('#imgclassic').show();
        jQuery('#imgbig').hide();
    } else {
        TipoBracciale = 'big';
        MaterialeBracciale = jQuery(this).attr('materiale');
        jQuery('#step2 .conf_title').html('BIG');
        jQuery('#crea_bracciale div').html(str_com_big);
        key_type = str_com_big;
        key_color = jQuery('#text_materiale_dx').text();
        jQuery('#m_back').html(str_com_big);
        bgurl_scelto = jQuery('#imgbig_' + MaterialeBracciale).css('background-image');
        jQuery('#imgbig').css('background-image', bgurl_scelto);
        jQuery('#imgclassic').hide();
        jQuery('#imgbig').show();

        //MODIFICA MATTEO
        ConfStoreMinimoNLink = false;
    }
    NrLink = 0;

    PrezzoTesseraBase(false, '');
    SettaPosizioniTessere();

    jQuery('.conf_misure').removeClass('misure_select');
    jQuery('#step1').fadeOut(200);
    jQuery('#step2').fadeIn(200);

    history.pushState('step2', 'step2', paginaurl);
    if (isMobile) {
        jQuery('body').scrollTop(0);
    }
});

var bgurl_scelto = '';
var TextBracciale = '';

jQuery('.conf_pulsante.personalizza.mybonbons').on('click', function() {
    if (jQuery(this).hasClass('base1')) {
        TipoBracciale = 'mbbshort';
        MaterialeBracciale = jQuery('.imgbase1_scelta.selected').attr('sku');
        TextBracciale = jQuery('.imgbase1_scelta.selected').attr('descr') + jQuery('.imgbase1_scelta.selected').attr('color').replace(str_colore, ' ');
        bgurl_scelto = jQuery('.imgbase1_scelta.selected').css('background-image');
        var bgurl_aperto = bgurl_scelto.replace('c_' + MaterialeBracciale, 'a_' + MaterialeBracciale);
        jQuery('#bracciale.base_mybonbons').css('background-image', bgurl_aperto);
        jQuery('#zoombg_mbb').css('background-image', bgurl_aperto);
        jQuery('#crea_bracciale div').html(str_mbb_short);
        key_type = str_mbb_short;
        key_color = jQuery('#text_materiale_1').text();
        jQuery('#m_back').html(str_mbb_short);
        CostoTBase = PrezzoLaccio[1];
    } else {
        TipoBracciale = 'mbblong';
        MaterialeBracciale = jQuery('.imgbase2_scelta.selected').attr('sku');
        TextBracciale = jQuery('.imgbase2_scelta.selected').attr('descr') + jQuery('.imgbase2_scelta.selected').attr('color').replace(str_colore, ' ');
        bgurl_scelto = jQuery('.imgbase2_scelta.selected').css('background-image');
        var bgurl_aperto = bgurl_scelto.replace('c_' + MaterialeBracciale, 'a_' + MaterialeBracciale);
        jQuery('#bracciale.base_mybonbons').css('background-image', bgurl_aperto);
        jQuery('#zoombg_mbb').css('background-image', bgurl_aperto);
        jQuery('#crea_bracciale div').html(str_mbb_long);
        key_type = str_mbb_long;
        key_color = jQuery('#text_materiale_2').text();
        jQuery('#m_back').html(str_mbb_long);
        CostoTBase = PrezzoLaccio[2];
    }

    if ((isMobile) && (!filtroautomatico)) {
        ApriFiltroMobile(0);
    }

    ComponiBaseBracciale();
    SettaPosizioniTessere();

    jQuery('#step2').css('margin-bottom', '300px');
    jQuery('#step1').fadeOut(200);
    jQuery('#step2').fadeIn(200);
    if (isMobile) {
        jQuery('body').scrollTop(0);
    }
    history.pushState('step2', 'step2', paginaurl);
    StepFinale = true;
});

jQuery('.conf_pulsante.personalizza.cubiamo').on('click', function() {
    var nextstep = 3;
    if (jQuery(this).hasClass('base1')) {
        TipoBracciale = 'cub_cla';
        MaterialeBracciale = jQuery('.imgbase1_scelta.selected').attr('sku');
        TextBracciale = jQuery('.imgbase1_scelta.selected').attr('descr') + jQuery('.imgbase1_scelta.selected').attr('color').replace(str_colore, ' ');
        bgurl_scelto = jQuery('.imgbase1_scelta.selected').css('background-image');
        var bgurl_aperto = bgurl_scelto.replace('c_' + MaterialeBracciale, 'a_' + MaterialeBracciale);
        jQuery('#bracciale.base_cubiamo').removeClass('basso centra');
        jQuery('#bracciale.base_cubiamo').removeClass('bigshort');
        jQuery('#bracciale.base_cubiamo').css('background-image', bgurl_aperto);
        jQuery('#zoombg_cubiamo').css('background-image', bgurl_aperto);
        jQuery('#crea_bracciale div').html(str_cub_classic);
        key_type = str_cub_classic;
        key_color = jQuery('#text_materiale_1').text();
        jQuery('#m_back').html(str_cub_classic);
        CostoTBase = PrezzoLaccio[1];
        if ((isMobile) && (!filtroautomatico)) {
            ApriFiltroMobile(0);
        }
        ComponiBaseBracciale();
        StepFinale = true;
    } else if (jQuery(this).hasClass('base2')) {
        TipoBracciale = 'cub_big_double';
        MaterialeBracciale = jQuery('.imgbase2_scelta.selected').attr('sku');
        TextBracciale = jQuery('.imgbase2_scelta.selected').attr('descr') + jQuery('.imgbase2_scelta.selected').attr('color').replace(str_colore, ' ');
        bgurl_scelto = jQuery('.imgbase2_scelta.selected').css('background-image');
        jQuery('#imgcubiamo_big').css('background-image', bgurl_scelto);
        var bgurl_aperto = bgurl_scelto.replace('c_' + MaterialeBracciale, 'a_' + MaterialeBracciale);
        jQuery('#bracciale.base_cubiamo').addClass('basso centra bigshort');
        jQuery('#bracciale.base_cubiamo').css('background-image', bgurl_aperto);
        jQuery('#zoombg_cubiamo').css('background-image', bgurl_aperto);
        jQuery('#crea_bracciale div').html(str_cub_big_short);
        jQuery('#m_back').html(str_cub_big_short);
        key_type = str_cub_big_short;
        key_color = jQuery('#text_materiale_2').text();
        jQuery('#misure_cubiamo_cla').hide();
        jQuery('#misure_cubiamo_big').show();

        jQuery('#cub_mis_big_1').attr('sku', tag_big_cub[MaterialeBracciale]['18_cm']);
        jQuery('#cub_mis_big_2').attr('sku', tag_big_cub[MaterialeBracciale]['20_cm']);

        CostoTBase = PrezzoLaccio[2];
        nextstep = 2;
        StepFinale = false;
    } else if (jQuery(this).hasClass('base3')) {
        TipoBracciale = 'cub_big';
        MaterialeBracciale = jQuery('.imgbase3_scelta.selected').attr('sku');
        TextBracciale = jQuery('.imgbase3_scelta.selected').attr('descr') + jQuery('.imgbase3_scelta.selected').attr('color').replace(str_colore, ' ');
        bgurl_scelto = jQuery('.imgbase3_scelta.selected').css('background-image');
        var bgurl_aperto = bgurl_scelto.replace('c_' + MaterialeBracciale, 'a_' + MaterialeBracciale);
        jQuery('#bracciale.base_cubiamo').removeClass('basso centra');
        jQuery('#bracciale.base_cubiamo').removeClass('bigshort');
        jQuery('#bracciale.base_cubiamo').css('background-image', bgurl_aperto);
        jQuery('#zoombg_cubiamo').css('background-image', bgurl_aperto);
        jQuery('#crea_bracciale div').html(str_cub_big_long);
        key_type = str_cub_big_long;
        key_color = jQuery('#text_materiale_3').text();
        jQuery('#m_back').html(str_cub_big_long);
        CostoTBase = PrezzoLaccio[3];
        if ((isMobile) && (!filtroautomatico)) {
            ApriFiltroMobile(0);
        }
        ComponiBaseBracciale();
        StepFinale = true;
    } else if (jQuery(this).hasClass('base4')) {
        TipoBracciale = 'cub_cla_arg';
        MaterialeBracciale = jQuery('.imgbase4_scelta.selected').attr('sku');
        TextBracciale = jQuery('.imgbase4_scelta.selected').attr('descr') + jQuery('.imgbase4_scelta.selected').attr('color').replace(str_colore, ' ');
        bgurl_scelto = jQuery('.imgbase4_scelta.selected').css('background-image');
        jQuery('#imgcubiamo_cla').css('background-image', bgurl_scelto);
        var bgurl_aperto = bgurl_scelto.replace('c_' + MaterialeBracciale, 'a_' + MaterialeBracciale);
        jQuery('#bracciale.base_cubiamo').removeClass('bigshort');
        jQuery('#bracciale.base_cubiamo').addClass('basso centra');
        jQuery('#bracciale.base_cubiamo').css('background-image', bgurl_aperto);
        jQuery('#zoombg_cubiamo').css('background-image', bgurl_aperto);
        jQuery('#crea_bracciale div').html(str_cub_arg);
        key_type = str_cub_arg;
        key_color = jQuery('#text_materiale_4').text();
        jQuery('#m_back').html(str_cub_arg);
        jQuery('#misure_cubiamo_cla').show();
        jQuery('#misure_cubiamo_big').hide();

        jQuery('#cub_mis_1').attr('sku', tag_cla_cub[MaterialeBracciale]['17_cm']);
        jQuery('#cub_mis_2').attr('sku', tag_cla_cub[MaterialeBracciale]['19_cm']);
        jQuery('#cub_mis_3').attr('sku', tag_cla_cub[MaterialeBracciale]['20_cm']);

        CostoTBase = PrezzoLaccio[4];
        nextstep = 2;
        StepFinale = false;
    }

    SettaPosizioniTessere();

    jQuery('#step1').fadeOut(200);
    jQuery('#step' + nextstep).fadeIn(200);
    history.pushState('step' + nextstep, 'step' + nextstep, paginaurl);
});

jQuery('#cambia_base').on('click', function() {
    MessaggioCambiaPagina();
});

jQuery('#m_back').on('click', function() {
    MessaggioCambiaPagina();
});

jQuery('#conf_back').on('click', function() {
    window.history.back();
});

jQuery('.conf_misure').on('click', function() {
    NrLink = parseInt(jQuery(this).attr('nrlink'));
    var attrsku = jQuery(this).attr('sku');

    if (typeof attrsku !== typeof undefined && attrsku !== false) {
        LaccioBracciale = attrsku;
        MaterialeBracciale = LaccioBracciale;
    }

    jQuery('.conf_misure').removeClass('misure_select');
    jQuery(this).addClass('misure_select');

    if (isMobile) {
        jQuery('.conf_pulsante.conferma').click();
    }
});

jQuery('.conf_pulsante.conferma').mouseenter(function() {
    if (NrLink == 0) {
        jQuery('.conf_pulsante.conferma').addClass('conferma_alert');
        var bottom = jQuery('#step2').height() - jQuery('.conf_pulsante.conferma').position().top + 33;
        jQuery('.container-bubble').css('bottom', bottom + 'px');
        jQuery('.container-bubble').show();
    }
});

jQuery('.conf_pulsante.conferma').mouseleave(function() {
    if (NrLink == 0) {
        jQuery('.conf_pulsante.conferma').removeClass('conferma_alert');
        jQuery('.container-bubble').hide();
    }
});

jQuery('.conf_pulsante.conferma').on('click', function() {
    if (NrLink == 0) {
        var bottom = jQuery('#step2').height() - jQuery('.conf_pulsante.conferma').position().top + 33;
        jQuery('.container-bubble').css('bottom', bottom + 'px');
        jQuery('.conf_pulsante.conferma').addClass('conferma_alert');
        jQuery('.container-bubble').show(200);
    } else {
        key_size = jQuery('.conf_misure.misure_select b').text() + ' - ' + jQuery('.conf_misure.misure_select span').text();
        if ((isMobile) && (!filtroautomatico)) {
            ApriFiltroMobile(0);
        }
        ComponiBaseBracciale();

        jQuery('#step2').fadeOut(200);
        jQuery('#step3').fadeIn(200);
        if (isMobile) {
            jQuery('body').scrollTop(0);
        }
        /*
		 setTimeout(function(){
		 jQuery('#conf_suggerimento').fadeOut(200);
		 }, 3000);
		 */

        history.pushState('step3', 'step3', paginaurl);
        StepFinale = true;
    }
});

function PrezzoTesseraBase(vasync, sku_def) {
    VisualizzaLoading();
    mustBeBlocked = true;
    if (filtroautomatico) {
        ChiamataPrezzoTesseraBase(vasync, sku_def)
    } else {
        setTimeout(ChiamataPrezzoTesseraBase(vasync, sku_def), 300);
    }
}

function ChiamataPrezzoTesseraBase(vasync, sku_def) {
    var skubase = sku_def;
    var par_type = '';
    var tmp_key_type = '';
    var tmp_key_color = '';
    switch (TipoBracciale) {
        case 'classic':
            tmp_key_type = str_com_classic;
            switch (MaterialeBracciale) {
                case 'acciaio':
                    ControllaMinimoNLink = ConfStoreMinimoNLink;
                    skubase = sku_cla_acciaio;
                    break
                case 'oro':
                    ControllaMinimoNLink = false;
                    PromoBaseGratis = false;
                    skubase = sku_cla_oro;
                    break
                case 'rosa':
                    ControllaMinimoNLink = false;
                    PromoBaseGratis = false;
                    skubase = sku_cla_rosa;
                    break
                case 'dark':
                    ControllaMinimoNLink = false;
                    PromoBaseGratis = false;
                    skubase = sku_cla_dark;
                    break
            }
            break;

        case 'big':
            tmp_key_type = str_com_big;
            switch (MaterialeBracciale) {
                case 'acciaio':
                    ControllaMinimoNLink = ConfStoreMinimoNLink;
                    skubase = sku_big_acciaio;
                    PromoBaseGratis = false;
                    break
                case 'oro':
                    ControllaMinimoNLink = false;
                    PromoBaseGratis = false;
                    skubase = sku_big_oro;
                    break
                case 'rosa':
                    ControllaMinimoNLink = false;
                    PromoBaseGratis = false;
                    skubase = sku_big_rosa;
                    break
                case 'dark':
                    ControllaMinimoNLink = false;
                    PromoBaseGratis = false;
                    skubase = sku_big_dark;
                    break
            }
            break;
        case 'cub_cla':
            tmp_key_type = str_cub_classic;
            ControllaMinimoNLink = false;
            PromoBaseGratis = false;
            if (TipoBracciale.search('_big') >= 0) {
                par_type = '&type=' + IDTypeBig;
            } else {
                par_type = '&type=' + IDTypeClassic;
            }
            break;
        case 'cub_big':
            tmp_key_type = str_cub_big_long;
            ControllaMinimoNLink = false;
            PromoBaseGratis = false;
            if (TipoBracciale.search('_big') >= 0) {
                par_type = '&type=' + IDTypeBig;
            } else {
                par_type = '&type=' + IDTypeClassic;
            }
            break;
        case 'cub_big_double':
            tmp_key_type = str_cub_big_short;
            ControllaMinimoNLink = false;
            PromoBaseGratis = false;
            if (TipoBracciale.search('_big') >= 0) {
                par_type = '&type=' + IDTypeBig;
            } else {
                par_type = '&type=' + IDTypeClassic;
            }
            break;
        case 'cub_cla_arg':
            tmp_key_type = str_cub_arg;
            ControllaMinimoNLink = false;
            PromoBaseGratis = false;
            if (TipoBracciale.search('_big') >= 0) {
                par_type = '&type=' + IDTypeBig;
            } else {
                par_type = '&type=' + IDTypeClassic;
            }
            break;

        case 'mbbshort':
            tmp_key_type = str_mbb_short;
            ControllaMinimoNLink = false;
            PromoBaseGratis = false;
            break;

        case 'mbblong':
            tmp_key_type = str_mbb_long;
            ControllaMinimoNLink = false;
            PromoBaseGratis = false;
            break;

        case 'seimia':
            tmp_key_type = str_seimia;
            tmp_key_color = '';
            ControllaMinimoNLink = false;
            PromoBaseGratis = false;
            break;

        default:
            ControllaMinimoNLink = false;
            PromoBaseGratis = false;
            break;
    }

    strUrl = URLMAGENTO + 'getprodotticonfiguratore/?idcat=' + IDCategoria + '&sku=' + skubase + '&base=1' + par_type;
    jQuery.ajax({
        url: strUrl,
        dataType: 'json',
        async: vasync,
        success: function(data) {
            var endLine = data.length;
            if (data.length == 0) {
                mustBeBlocked = false;
                NascondiLoading();
            } else {
                jQuery.each(data, function(i, riga) {
                    CostoTBase = riga.final_price;
                    TextBracciale = riga.name;
                    bgurl_scelto = riga.img;
                    tmp_key_color = riga.color;
                    if (i + 1 >= endLine) {
                        mustBeBlocked = false;
                        NascondiLoading();
                    }
                });
            }

            if (filtroautomatico) {
                if (key_type == '') key_type = tmp_key_type;
                if (key_color == '') {
                    key_color = tmp_key_color;
                    switch (TipoBracciale) {
                        case 'classic':
                        case 'big':
                            tmp_key_type = str_com_big;
                            switch (MaterialeBracciale) {
                                case 'acciaio':
                                    key_color = color_acciaio;
                                    break
                                case 'oro':
                                    key_color = color_oro;
                                    break
                                case 'rosa':
                                    key_color = color_rosa;
                                    break
                                case 'dark':
                                    key_color = color_dark;
                                    break
                            }
                            break;
                        default:
                            break;
                    }
                }

                CalcolaRiepilogo();
                NascondiLoading();
            } else {
                NascondiLoading();
            }
        }
    });
}

var tes_top;
var tes_top1
var tes_left;
var tes_left1;
var tes_top_o;
var tes_left_o;

function SettaPosizioniTessere() {
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

var SortStart = false;

function ComponiBaseBracciale() {
    var size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
    }

    if (isMobile) {
        jQuery('#m_acquista_fixed').show();
    }

    var addclass = 'tessera_base';
    var classtessera = 'tessera_base';
    var addclasszoom = '';

    var brac_larg = 0;
    var sfuma = '';
    var margin_left = 0;
    switch (TipoBracciale) {
        case 'classic':
        case 'big':
            if (TipoBracciale == 'big') addclass += '_big';
            if (MaterialeBracciale != 'acciaio') addclass += '_' + MaterialeBracciale;
            if (addclass == 'tessera_base') addclass = '';
            brac_larg = (NrLink * 47) + 38;

            NrLinkBase = NrLink;
            margin_left = 42;
            break;

        case 'mbbshort':
        case 'mbblong':
            addclass = 'tessera_base_mbb';
            NrLink = 10;
            brac_larg = 1019;
            NrLinkBase = 1;
            sfuma = '<div id="sfuma_bordo"></div>';
            margin_left = 42;
            break;
        case 'seimia':
            addclass = 'tessera_base_seimia';
            NrLink = 10;
            brac_larg = 1019;
            NrLinkBase = 1;
            margin_left = 22;
            break;
        case 'cub_big_double':
            jQuery('#bracciale_zoom .touchcarousel-container').css('top', '10px');
            addclass = 'tessera_base_cubiamo_bigdouble';
            addclasszoom = 'basso bigshort';
            NrLink = 10;
            brac_larg = 1019;
            NrLinkBase = 1;
            margin_left = -80;
            break;
        case 'cub_cla_arg':
            addclasszoom = 'basso argento';
            addclass = 'tessera_base_cubiamo';
            NrLink = 10;
            brac_larg = 1019;
            NrLinkBase = 1;
            margin_left = 42;
            break;
        case 'cub_big':
            jQuery('#bracciale_zoom .touchcarousel-container').css('top', '10px');
            addclasszoom = 'big';
            addclass = 'tessera_base_cubiamo_big';
            NrLink = 10;
            brac_larg = 1019;
            NrLinkBase = 1;
            sfuma = '<div id="sfuma_bordo"></div>';
            margin_left = 42;
            break;
        case 'cub_cla':
            sfuma = '<div id="sfuma_bordo"></div>';
            margin_left = 42;
        default:
            addclass = 'tessera_base_cubiamo';
            NrLink = 10;
            brac_larg = 1019;
            NrLinkBase = 1;
            break;
    }

    jQuery('#bracciale').width(brac_larg);
    if (FiltroMobile(760)) {
        jQuery('#bracciale').css('margin-left', margin_left + 'px');
        jQuery('#mbracciale_right').show();
        jQuery('#mbracciale_left').hide();
    } else {
        var marg = (size.width - brac_larg) / 2;
        jQuery('#bracciale').css('margin-left', marg + 'px');
    }

    jQuery('#zoombg_cubiamo').removeClass('basso');
    jQuery('#zoombg_cubiamo').removeClass('bigshort');
    jQuery('#zoombg_cubiamo').removeClass('bigshort');
    if (addclasszoom != '') {
        jQuery('#zoombg_cubiamo').addClass(addclasszoom);
    }

    jQuery('#bracciale').html(sfuma);
    jQuery('#bracciale').append('<div id="tooltip_incisione">linea1<br>linea2</div>');
    jQuery('#bracciale_zoom ul').html('');
    jQuery('#bracciale_zoom ul').append('<li class="tessera_vuota touchcarousel-item "></li>');
    for (j = 0; j < NrLink; j++) {
        var strhtml = '<div id="base_' + j + '" nrbase="' + j + '" class="' + classtessera + ' ' + addclass + ' ">';
        strhtml += '<div class="stella_incisione"></div>';
        strhtml += '<div class="tesserabracciale"></div><div class="handletessera drop"></div></div>';
        jQuery('#bracciale').append(strhtml);
        switch (TipoBracciale) {
            case 'classic':
                strhtml = '<li id="basezoom_' + j + '" class="tessera_basezoom ' + addclass + ' touchcarousel-item ">';
                strhtml += '<div class="tesserabraccialezoom"></div></li>';
                break;

            case 'big':
                strhtml = '<li id="basezoom_' + j + '" class="tessera_basezoom_big ' + addclass + ' touchcarousel-item ">';
                strhtml += '<div class="tesserabraccialezoom_big"></div></li>';
                break;

            case 'mbbshort':
            case 'mbblong':
                strhtml = '<li id="basezoom_' + j + '" class="tessera_basezoom_mbb ' + addclass + ' touchcarousel-item ">';
                strhtml += '<div class="tesserabraccialezoom_mbb"></div></li>';
                break;
            case 'cub_big_double':
                strhtml = '<li id="basezoom_' + j + '" class="tessera_basezoom_cubiamo_bigdouble ' + addclass + ' touchcarousel-item " >';
                strhtml += '<div class="tesserabraccialezoom_cubiamo"></div></li>';
                break;
            case 'seimia':
                strhtml = '<li id="basezoom_' + j + '" class="tessera_basezoom_seimia ' + addclass + ' touchcarousel-item ">';
                strhtml += '<div class="tesserabraccialezoom_seimia"></div></li>';
                break;
            default:
                strhtml = '<li id="basezoom_' + j + '" class="tessera_basezoom_cubiamo ' + addclass + ' touchcarousel-item ">';
                strhtml += '<div class="tesserabraccialezoom_cubiamo"></div></li>';
                break;
        }
        jQuery('#bracciale_zoom ul').append(strhtml);
        ObjBracciale[j] = {
            id: j,
            cod: '',
            price: 0,
            name: '',
            img: '',
            cod_int: '',
            dbl: 0,
            incision: 0,
            font: '',
            l1: '',
            l2: ''
        };
    }
    jQuery('#bracciale_zoom ul').append('<li class="tessera_vuota touchcarousel-item "></li>');

    CalcolaRiepilogo();

    var size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
    };

    jQuery('#bracciale_zoom').width(size.width);
    BraccialeZoom = jQuery('#bracciale_zoom').touchCarousel({
        itemFallbackWidth: 100,
        scrollbar: false,
        dragUsingMouse: false
    }).data("touchCarousel");

    jQuery('#bracciale').sortable({
        handle: '.handletessera',
        opacity: 0.6,
        appendTo: 'body',
        helper: 'original',
        delay: DelayTouch,
        disabled: false, //(!isMobile),
        activate: function(event, ui) {

        },
        start: function(event, ui) {
            SortStart = true;
            jQuery(ui.item).find('.stella_incisione').fadeOut(200);
            if (jQuery('#tooltip_incisione').is(":visible")) {
                jQuery('#tooltip_incisione').fadeOut(200);
            }
        },
        stop: function(event, ui) {
            SortStart = false;
            var j = jQuery(ui.item).attr('nrbase');
            if (ObjBracciale[j].incision == 1) {
                jQuery('#base_' + j).find('.stella_incisione').fadeIn(200);
            }
            jQuery(ui.item).prev().css('z-index', '');
            jQuery(ui.item).next().css('z-index', '');
            jQuery(ui.item).css('z-index', '1');
            AggiornaObjBracciale();
        },
        update: function(event, ui) {
            ui.item.unbind("click");
            ui.item.one("click", function(event) {
                console.log("one-time-click");
                event.stopImmediatePropagation();
                jQuery(this).on('click', function() {
                    var element = jQuery(this).find('.stella_incisione');
                    if (jQuery(element).is(':visible')) {
                        jQuery(this).find('.stella_incisione').fadeOut(200);
                        MostraToolipIncisione(element);
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
        deactivate: function(event, ui) {
            var diff = Math.abs(ui.originalPosition.top - ui.position.top);
            if (diff > 60) {
                RimuoviTessera(jQuery(ui.item), false);
            }
        }
    });

    if (isMobile) {

        jQuery("#bracciale").swipe({
            swipeLeft: function(event, direction, distance, duration, fingerCount, fingerData) {
                if ((!SortStart) && (duration < 350)) {
                    jQuery('#mbracciale_right').click();
                }
            },
            swipeRight: function(event, direction, distance, duration, fingerCount, fingerData) {
                if ((!SortStart) && (duration < 350)) {
                    jQuery('#mbracciale_left').click();
                }
            }
        });

    }

    /*
	 jQuery('#container_bracciale').doubletap(function(){
	 if (isMobile) {
	 jQuery('#conf_zoom').click();
	 }
	 });
	 */

    jQuery('.tessera_base').on('click', function() {
        var element = jQuery(this).find('.stella_incisione')
        if (jQuery(element).is(':visible')) {
            jQuery(this).find('.stella_incisione').fadeOut(200);
            MostraToolipIncisione(element);
        } else if (jQuery('#tooltip_incisione').is(':visible')) {
            jQuery('#tooltip_incisione').fadeOut(200);
            jQuery(this).find('.stella_incisione').fadeIn(200);
        }
    });

    jQuery('.tessera_base').mouseenter(function() {
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
                left: (tes_left_o * link_mol) + meno_left
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
            if (ObjBracciale[j].cod != '') {
                MostraDettaglioOver(j);
            } else {
                jQuery('#dettaglio_over').hide();
            }
        }
    });

    jQuery('.tessera_base').mouseleave(function() {
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

    CaricaLink();

    jQuery(".drop").droppable({
        accept: '.drag,.tessera',
        tolerance: 'intersect',
        activeClass: 'drag-active',
        over: function(event, ui) {
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
        out: function(event, ui) {
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
        drop: function(event, ui) {
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
            if ((double == 0) || (j < NrLink - 1) || (ObjBracciale[j].dbl == 1)) {
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
                    AggiungiDouble(j, objdouble, this, sottraibase);
                } else {
                    if ((sottraibase) && (ObjBracciale[j].cod == '')) {
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
                AggiornaObjBracciale();
                CalcolaRiepilogo();

                jQuery('#div_hover').fadeOut(200);
                if (ControllaMinimoNLink) {
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

    if (insertlink) {
        PresetLink();
    }
}

function MostraFormIncisione(j, righe_inc, max_char) {
    jQuery('#FormIncisione').attr('nlink', j);
    // FIX PER BUG POSITION FIXED SU SAFARI iOS
    if (jQuery('#FormIncisione').css('position') == 'absolute') {
        var csstop = jQuery(document).scrollTop() + 50;
        jQuery('#FormIncisione .finestraincisione').css('top', csstop + 'px');
    }
    // FINE FIX
    jQuery("#FormIncisione .input-text.line-1").attr('maxlength', max_char);
    jQuery("#FormIncisione .input-text.line-2").attr('maxlength', max_char);
    var strhtml = jQuery('#FormIncisione .true-label').html();
    var reshtml = strhtml.replace('7', max_char);
    jQuery('#FormIncisione .true-label').html(reshtml);
    jQuery('#FormIncisione .true-label').attr('strreplace', max_char);

    switch (righe_inc) {
        case '1':
            jQuery('#FormIncisione .input-box.riga2').hide();
            jQuery('#FormIncisione .input-box.riga1').css('top', '10px');
            jQuery('#FormIncisione .finestraincisione').css('height', '320px');
            break;
        case '2':
            jQuery('#FormIncisione .input-box.riga2').show();
            jQuery('#FormIncisione .input-box.riga1').css('top', '0px');
            jQuery('#FormIncisione .finestraincisione').css('height', '380px');
            break;
    }

    jQuery('#FormIncisione').show();
}

function AggiungiDouble(j, objdouble, element, sottraibase) {
    if ((sottraibase) && (ObjBracciale[j].cod == '')) {
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
    if ((sottraibase) && (ObjBracciale[idnext].cod == '')) {
        NrLinkBase--;
    }
    ObjBracciale[idnext].id = j;
    ObjBracciale[idnext].cod = 'double';
}

function RimuoviDouble(j, element, sottraibase) {
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

function PresetLink() {
    var skubase = '';
    switch (TipoBracciale) {
        case 'classic':
            switch (MaterialeBracciale) {
                case 'acciaio':
                    ControllaMinimoNLink = ConfStoreMinimoNLink;
                    skubase = sku_cla_acciaio;
                    break
                case 'oro':
                    ControllaMinimoNLink = false;
                    PromoBaseGratis = false;
                    skubase = sku_cla_oro;
                    break
                case 'rosa':
                    ControllaMinimoNLink = false;
                    PromoBaseGratis = false;
                    skubase = sku_cla_rosa;
                    break
                case 'dark':
                    ControllaMinimoNLink = false;
                    PromoBaseGratis = false;
                    skubase = sku_cla_dark;
                    break
            }
            break;

        case 'big':
            switch (MaterialeBracciale) {
                case 'acciaio':
                    ControllaMinimoNLink = ConfStoreMinimoNLink;
                    PromoBaseGratis = false;
                    skubase = sku_big_acciaio;
                    break
                case 'oro':
                    ControllaMinimoNLink = false;
                    PromoBaseGratis = false;
                    skubase = sku_big_oro;
                    break
                case 'rosa':
                    ControllaMinimoNLink = false;
                    PromoBaseGratis = false;
                    skubase = sku_big_rosa;
                    break
                case 'dark':
                    ControllaMinimoNLink = false;
                    PromoBaseGratis = false;
                    skubase = sku_big_dark;
                    break
            }
            break;

        default:
            ControllaMinimoNLink = false;
            PromoBaseGratis = false;
            break;
    }

    var elencosku = '';
    var indicesku = '';
    var arrsku = Array();
    var numerolink = 0;

    jQuery.each(arr_link, function(index, value) {
        arr = value.split(';');
        if (arr[0] != skubase) {
            numerolink++;
            if (elencosku == '') {
                elencosku = arr[0];
                indicesku = (arr[1] - 1);
                arrsku[arr[1] - 1] = arr[0];
            } else {
                elencosku += '-' + arr[0];
                indicesku += '-' + (arr[1] - 1);
                arrsku[arr[1] - 1] = arr[0];
            }
        }
    });

    if (ControllaMinimoNLink) {
        if (numerolink >= 2) {
            jQuery('#acquista_bracciale').removeClass('disable');
            jQuery('#m_acquista_fixed').removeClass('disable');
            jQuery('#m_riepilogo_bag').removeClass('disable');
            jQuery('#m_btn_acquista').removeClass('disable');
        }
    } else if (numerolink > 0) {
        jQuery('#acquista_bracciale').removeClass('disable');
        jQuery('#m_acquista_fixed').removeClass('disable');
        jQuery('#m_riepilogo_bag').removeClass('disable');
        jQuery('#m_btn_acquista').removeClass('disable');
    }

    var idtipo = 0;
    switch (TipoBracciale) {
        case 'classic':
            idtipo = IDTypeClassic;
            break;

        case 'big':
            idtipo = IDTypeBig;
            break;

        case 'mbbshort':
        case 'mbblong':
            idtipo = '';
            break;

        case 'cub_cla':
        case 'cub_cla_arg':
            idtipo = IDTypeClassic;
            break;

        case 'cub_big':
        case 'cub_big_double':
            idtipo = IDTypeBig;
            break;

        case 'seimia':
            idtipo = '';
            break;
    }

    var almenounodouble = false;
    var strUrl = URLMAGENTO + 'getprodotticonfiguratore/?sku=' + elencosku + '&idcat=' + IDCategoria + '&type=' + idtipo;
    jQuery.ajax({
        url: strUrl,
        dataType: 'json',
        async: false,
        success: function(data) {
            jQuery.each(data, function(i, riga) {
                if (riga.double == 1) {
                    almenounodouble = true;
                }
                var j = arrsku.indexOf(riga.sku);
                while (j >= 0) {
                    if (riga.incisione == 1) {
                        var objinc = {
                            id: j,
                            righe_inc: riga.righe_inc,
                            max_char: riga.max_char
                        }
                        ArrIncisioni.push(objinc);
                    }
                    ObjBracciale[j] = {
                        id: j,
                        cod: riga.sku,
                        price: riga.final_price,
                        name: riga.name,
                        img: riga.img,
                        cod_int: riga.cod_int,
                        dbl: riga.double,
                        incision: riga.incisione,
                        font: riga.font,
                        l1: riga.text1,
                        l2: riga.text2
                    };
                    switch (TipoBracciale) {
                        case 'classic':
                            jQuery('#base_' + j).addClass('tessera_base_link');
                            NrLinkBase--;
                            break;
                        case 'big':
                            jQuery('#base_' + j).addClass('tessera_base_link_big');
                            NrLinkBase--;
                            break;
                        case 'mbbshort':
                        case 'mbblong':
                            jQuery('#base_' + j).addClass('tessera_base_mbb_drop');
                            break;
                        case 'seimia':
                            jQuery('#base_' + j).addClass('tessera_base_seimia_drop');
                            break;
                        default:
                            riga.img = riga.img.replace(riga.sku, 'f_' + riga.sku);
                            jQuery('#base_' + j).addClass('tessera_base_cubiamo_drop');
                            break;
                    }
                    jQuery('#base_' + j).find(".tesserabracciale").css('background-image', 'url(' + riga.img + ')');
                    jQuery('#base_' + j).find('.tesserabracciale').css('top', tes_top);
                    arrsku[j] = '';
                    j = arrsku.indexOf(riga.sku);
                }
            });
        }
    });

    if (almenounodouble) {
        ControllaDoublePreset();
    }

    CalcolaRiepilogo();
}

function ControllaDoublePreset() {
    var link_width = '100px';
    var tessera_width = '220px';
    jQuery('#bracciale .tessera_base').each(function(index) {
        var j = parseInt(jQuery(this).attr('nrbase'));
        if (ObjBracciale[j].dbl == 1) {
            jQuery(this).attr('double', '1');
            jQuery(this).removeClass('tessera_base_link');
            jQuery(this).addClass('tessera_base_link_double');
            NrLinkBase--;
            var idnext = jQuery(this).next().attr('nrbase');
            jQuery(this).next().hide();
            jQuery('#base_' + idnext).appendTo('#base_' + j);
            //jQuery(this).css('width', link_width);
            jQuery(this).css({
                height: '96px',
                width: link_width,
                marginTop: '0px'
            });
            jQuery(this).find('.tesserabracciale').css({
                height: '134px',
                width: tessera_width,
                top: tes_top,
                left: tes_left * 2
            });

            //jQuery(this).find('.tesserabracciale').css('width', tessera_width);
            jQuery(this).find('.handletessera').css('width', '92px');
            ObjBracciale[idnext].id = j;
            ObjBracciale[idnext].cod = 'double';
        }
    });
}

function AggiornaObjBracciale() {
    jQuery('#bracciale .tessera_base').each(function(index) {
        var j = parseInt(jQuery(this).attr('nrbase'));
        ObjBracciale[j].id = index;
    });
}

function MostraDettaglioOver(j) {
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
    var strhtml = ObjBracciale[j].name + '<br>'
    strhtml += GetPriceHtml(ObjBracciale[j].price, ObjBracciale[j].price, 'pricedetail');
    jQuery('#dettaglio_over .testo').html(strhtml);
    jQuery('#dettaglio_over').show();
}

jQuery('#conf_zoom').on('click', function() {
    var size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
    }

    var ulwidth = jQuery('#bracciale_zoom ul').width();
    var xpos = 0 - ((ulwidth - size.width) / 2);
    BraccialeZoom.setXPos(xpos);
    //	BraccialeZoom.updateCarouselSize();
    //	jQuery('#bracciale_zoom ul').css({left: '-300px'});

    CalcolaRiepilogo();
    jQuery('#container_zoom').fadeIn(200);
    jQuery('#container_bracciale').fadeOut(200);
});

jQuery('#filler_zoom').on('click', function() {
    jQuery('#zoom_close').click();
});

jQuery('#container_zoom').mousemove(function(event) {
    var size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
    }

    var ulwidth = jQuery('#bracciale_zoom ul').width();
    var wd_tes = jQuery('.tessera_vuota').width();
    var wd_test = ulwidth - (4 * wd_tes);
    if (wd_test > size.width) {
        var offset = (ulwidth - size.width) / 2;
        var xmeta = 0 - offset;
        var meta = size.width / 2;
        var ratio = offset / meta;
        var xpos = 0;
        xpos = xmeta + ((event.pageX - meta) * ratio);

        BraccialeZoom.setXPos(xpos);
    }
});

jQuery('#conf_help').on('click', function() {
    jQuery('#box_help').show(200);
});

jQuery('#box_help .close_box').on('click', function() {
    jQuery('#box_help').hide(200);
});

jQuery('#box_help .act_box_close').on('click', function() {
    jQuery('#box_help').hide(200);
});

jQuery('#conf_share').on('click', function() {
    jQuery('#box_social').show(200);
});

jQuery('#box_social .close_box').on('click', function() {
    jQuery('#box_social').hide(200);
});

jQuery('#box_social .act_box_close').on('click', function() {
    jQuery('#box_social').hide(200);
});

function FiltroMobile(width) {
    if (larghezza > width) {
        return false;
    } else {
        return true;
    }
}

var PrezzoLaccio = Array();

function ComponiSceltaBase(nr, data, addclass) {
    var TC;
    jQuery('#BasiLacci' + nr).html('');
    var almenouno = false;
    var arr_sku18 = new Array();
    jQuery.each(data, function(i, riga) {
        almenouno = true;
        PrezzoLaccio[nr] = riga.final_price;
        jQuery('#SceltaBase' + nr + ' .buttons_scelta_materiale_lacci ul').html('');
        jQuery('.detail_scelta_base.base' + nr + ' .details_dati span').html(str_da + ' ' + riga.final_price + SimboloValuta);
        var strhtml = '';
        var strhtmldiv = '';
        var primo = true;
        var conta = 1;
        jQuery.each(riga.childs, function(i, child) {
            var stile = '';
            var classe = '';
            var classeli = ''
            if (!primo) {
                stile = ' display: none; ';
            } else {
                jQuery('#text_materiale_' + nr).html(str_colore + child.color);
                classe = 'selected';
                classeli = 'scelta_materiale_lacci_act';
                primo = false;
            }
            var idimg = 'img_ids' + nr + '_' + conta;

            strhtmldiv += '<div id="' + idimg + '" style="' + stile + ' background-image: url(' + child.img + ');" class="imgbase' + nr + '_scelta ' + addclass + ' ' + classe + '" color="' + str_colore + child.color + '" sku="' + child.sku + '" descr="' + riga.name + '"></div>'
            if (child.imgsw != '') {
                strhtml += '<li class="scelta_materiale_lacci ' + classeli + ' touchcarousel-item "><div class="div_img img' + nr + '" style="background-image: url(' + MEDIAURL + child.imgsw + ');" idimg="' + idimg + '" color="' + child.color + '"></div></li>';
            }

            var chsku = child.sku;
            tag_big_cub[chsku] = {};
            tag_cla_cub[chsku] = {};
            var tot18 = 0;
            var j = 0;
            jQuery.each(child.taglie, function(i, otaglia) {
                if (nr == 2) {
                    if (TipoBracciale.substr(0, 4) == 'cub_') {
                        if (otaglia.taglia == '18_cm') {
                            arr_sku18.push(otaglia.sku);
                            tot18++;
                        } else {
                            chsku = arr_sku18[j - tot18];
                        }
                    }
                    tag_big_cub[chsku][otaglia.taglia] = otaglia.sku;
                } else if (nr == 4) {
                    tag_cla_cub[chsku][otaglia.taglia] = otaglia.sku;
                }
                j++;
            });
            conta++;
        });
        jQuery('#BasiLacci' + nr).html(strhtmldiv);
        jQuery('#SceltaBase' + nr + ' .buttons_scelta_materiale_lacci ul').html(strhtml);
        jQuery('#SceltaBase' + nr + ' .buttons_scelta_materiale_lacci').height(46);
        if (conta > 4) {
            jQuery('#SceltaBase' + nr + ' .buttons_scelta_materiale_lacci').width(230);
            TC = jQuery('#SceltaBase' + nr + ' .buttons_scelta_materiale_lacci').touchCarousel({
                scrollbar: false,
                pagingNavControls: false,
                directionNav: false,
                itemsPerMove: 5
            }).data('touchCarousel');
        } else {
            jQuery('#SceltaBase' + nr + ' .buttons_scelta_materiale_lacci').width(conta * 46);
            var vleft = (378 - (conta * 46)) / 2;
            jQuery('#SceltaBase' + nr + ' .buttons_scelta_materiale_lacci').css('left', vleft + 'px');
            jQuery('#SceltaBase' + nr + ' .freccianext').hide();
            jQuery('#SceltaBase' + nr + ' .frecciaback').hide();
        }
    });

    if (!almenouno) {
        jQuery('#SceltaBase' + nr).parent().hide();
    }
    return TC;
}

var tag_cla_cub = {};
var tag_big_cub = {};

var CostoBaseClassic = Array();
var CostoBaseBig = Array();
var NrLinkCalcolo = 15;

function CaricaBasiBracciali() {
    VisualizzaLoading();
    setTimeout(function() {
        if (IDCategoria == 6) {
            var elencosku = sku_cla_acciaio + '-' + sku_cla_oro + '-' + sku_cla_rosa + '-' + sku_cla_dark;
            var strUrl = URLMAGENTO + 'getprodotticonfiguratore/?sku=' + elencosku + '&idcat=' + IDCategoria + '&base=1';
            jQuery.ajax({
                url: strUrl,
                dataType: 'json',
                async: false,
                success: function(data) {
                    //SceltaBase1TC = ComponiSceltaBase(1, data, '');
                    jQuery.each(data, function(i, riga) {
                        fprice = NrLinkCalcolo * riga.final_price;
                        CostoBaseClassic.push(fprice);
                        if (i == 0) {
                            jQuery('.detail_scelta_base.base1 .details_dati span').html(str_da + ' ' + DisplayCurrency(fprice) + SimboloValuta);
                        }
                    });
                }
            });
            elencosku = sku_big_acciaio + '-' + sku_big_oro + '-' + sku_big_rosa + '-' + sku_big_dark;
            strUrl = URLMAGENTO + 'getprodotticonfiguratore/?sku=' + elencosku + '&idcat=' + IDCategoria + '&base=1';;
            jQuery.ajax({
                url: strUrl,
                dataType: 'json',
                async: false,
                success: function(data) {
                    //SceltaBase2TC = ComponiSceltaBase(2, data, '');
                    jQuery.each(data, function(i, riga) {
                        fprice = NrLinkCalcolo * riga.final_price
                        CostoBaseBig.push(fprice);
                        if (i == 0) {
                            jQuery('.detail_scelta_base.base2 .details_dati span').html(str_da + ' ' + DisplayCurrency(fprice) + SimboloValuta);
                        }
                    });
                }
            });
            NascondiLoading();
            //AggiornaTriggerSceltaMateriali();
        }
        if (IDCategoria == 75) {
            VisualizzaLoading();
            var strUrl = URLMAGENTO + 'getprodotticonfiguratore/?sku=065088&idcat=' + IDCategoria + '&base=1';
            jQuery.ajax({
                url: strUrl,
                dataType: 'json',
                async: false,
                success: function(data) {
                    SceltaBase1TC = ComponiSceltaBase(1, data, 'short');
                }
            });
            var strUrl = URLMAGENTO + 'getprodotticonfiguratore/?sku=065089&idcat=' + IDCategoria + '&base=1';;
            jQuery.ajax({
                url: strUrl,
                dataType: 'json',
                async: false,
                success: function(data) {
                    SceltaBase2TC = ComponiSceltaBase(2, data, '');
                }
            });
            NascondiLoading();
            AggiornaTriggerSceltaMateriali();
        }
        if (IDCategoria == 17) {
            VisualizzaLoading();
            var strUrl = URLMAGENTO + 'getprodotticonfiguratore/?sku=160000&idcat=' + IDCategoria + '&type=' + IDTypeClassic + '&base=1';
            jQuery.ajax({
                url: strUrl,
                dataType: 'json',
                async: false,
                success: function(data) {
                    SceltaBase1TC = ComponiSceltaBase(1, data, 'short');
                }
            });
            var strUrl = URLMAGENTO + 'getprodotticonfiguratore/?sku=160002&idcat=' + IDCategoria + '&type=' + IDTypeBig + '&base=1';
            jQuery.ajax({
                url: strUrl,
                dataType: 'json',
                async: false,
                success: function(data) {
                    SceltaBase2TC = ComponiSceltaBase(2, data, 'short');
                }
            });
            var strUrl = URLMAGENTO + 'getprodotticonfiguratore/?sku=160001&idcat=' + IDCategoria + '&type=' + IDTypeBig + '&base=1';
            jQuery.ajax({
                url: strUrl,
                dataType: 'json',
                async: false,
                success: function(data) {
                    SceltaBase3TC = ComponiSceltaBase(3, data, '');
                }
            });
            var strUrl = URLMAGENTO + 'getprodotticonfiguratore/?sku=160100&idcat=' + IDCategoria + '&type=' + IDTypeClassic + '&base=1';
            jQuery.ajax({
                url: strUrl,
                dataType: 'json',
                async: false,
                success: function(data) {
                    SceltaBase4TC = ComponiSceltaBase(4, data, 'short');
                }
            });
            NascondiLoading();
            AggiornaTriggerSceltaMateriali();
        }
    }, 300);
}

function AggiornaTriggerSceltaMateriali() {

    jQuery('.scelta_materiale_lacci .div_img').mouseenter(function() {
        if (jQuery(this).hasClass('img1')) {
            jQuery('.imgbase1_scelta').hide();
            var idimg = jQuery(this).attr('idimg');
            jQuery('#' + idimg).show();
            var colore = jQuery(this).attr('color');
            jQuery('#text_materiale_1').html(str_colore + colore);
        }
        if (jQuery(this).hasClass('img2')) {
            jQuery('.imgbase2_scelta').hide();
            var idimg = jQuery(this).attr('idimg');
            jQuery('#' + idimg).show();
            var colore = jQuery(this).attr('color');
            jQuery('#text_materiale_2').html(str_colore + colore);
        }
        if (jQuery(this).hasClass('img3')) {
            jQuery('.imgbase3_scelta').hide();
            var idimg = jQuery(this).attr('idimg');
            jQuery('#' + idimg).show();
            var colore = jQuery(this).attr('color');
            jQuery('#text_materiale_3').html(str_colore + colore);
        }
        if (jQuery(this).hasClass('img4')) {
            jQuery('.imgbase4_scelta').hide();
            var idimg = jQuery(this).attr('idimg');
            jQuery('#' + idimg).show();
            var colore = jQuery(this).attr('color');
            jQuery('#text_materiale_4').html(str_colore + colore);
        }
    });

    jQuery('.scelta_materiale_lacci .div_img').mouseleave(function() {
        if (jQuery(this).hasClass('img1')) {
            jQuery('.imgbase1_scelta').hide();
            jQuery('.imgbase1_scelta.selected').show();
            var strcolore = jQuery('.imgbase1_scelta.selected').attr('color');
            jQuery('#text_materiale_1').html(strcolore);
        }
        if (jQuery(this).hasClass('img2')) {
            jQuery('.imgbase2_scelta').hide();
            jQuery('.imgbase2_scelta.selected').show();
            var strcolore = jQuery('.imgbase2_scelta.selected').attr('color');
            jQuery('#text_materiale_2').html(strcolore);
        }
        if (jQuery(this).hasClass('img3')) {
            jQuery('.imgbase3_scelta').hide();
            jQuery('.imgbase3_scelta.selected').show();
            var strcolore = jQuery('.imgbase3_scelta.selected').attr('color');
            jQuery('#text_materiale_3').html(strcolore);
        }
        if (jQuery(this).hasClass('img4')) {
            jQuery('.imgbase4_scelta').hide();
            jQuery('.imgbase4_scelta.selected').show();
            var strcolore = jQuery('.imgbase4_scelta.selected').attr('color');
            jQuery('#text_materiale_4').html(strcolore);
        }
    });

    jQuery('.scelta_materiale_lacci .div_img').on('click tap', function() {
        if (jQuery(this).hasClass('img1')) {
            jQuery('#SceltaBase1 .scelta_materiale_lacci.scelta_materiale_lacci_act').removeClass('scelta_materiale_lacci_act');
            jQuery(this).parent().addClass('scelta_materiale_lacci_act');
            jQuery('.imgbase1_scelta.selected').removeClass('selected');
            var idimg = jQuery(this).attr('idimg');
            jQuery('#' + idimg).addClass('selected');
        }
        if (jQuery(this).hasClass('img2')) {
            jQuery('#SceltaBase2 .scelta_materiale_lacci.scelta_materiale_lacci_act').removeClass('scelta_materiale_lacci_act');
            jQuery(this).parent().addClass('scelta_materiale_lacci_act');
            jQuery('.imgbase2_scelta.selected').removeClass('selected');
            var idimg = jQuery(this).attr('idimg');
            jQuery('#' + idimg).addClass('selected');
        }
        if (jQuery(this).hasClass('img3')) {
            jQuery('#SceltaBase3 .scelta_materiale_lacci.scelta_materiale_lacci_act').removeClass('scelta_materiale_lacci_act');
            jQuery(this).parent().addClass('scelta_materiale_lacci_act');
            jQuery('.imgbase3_scelta.selected').removeClass('selected');
            var idimg = jQuery(this).attr('idimg');
            jQuery('#' + idimg).addClass('selected');
        }
        if (jQuery(this).hasClass('img4')) {
            jQuery('#SceltaBase4 .scelta_materiale_lacci.scelta_materiale_lacci_act').removeClass('scelta_materiale_lacci_act');
            jQuery(this).parent().addClass('scelta_materiale_lacci_act');
            jQuery('.imgbase4_scelta.selected').removeClass('selected');
            var idimg = jQuery(this).attr('idimg');
            jQuery('#' + idimg).addClass('selected');
        }
    });
}

jQuery('#SceltaBase1 .frecciaback').on('click', function(event) {
    SceltaBase1TC.prev();
});

jQuery('#SceltaBase1 .freccianext').on('click', function(event) {
    SceltaBase1TC.next();
});

jQuery('#SceltaBase2 .frecciaback').on('click', function(event) {
    SceltaBase2TC.prev();
});

jQuery('#SceltaBase2 .freccianext').on('click', function(event) {
    SceltaBase2TC.next();
});

jQuery('#SceltaBase3 .frecciaback').on('click', function(event) {
    SceltaBase3TC.prev();
});

jQuery('#SceltaBase3 .freccianext').on('click', function(event) {
    SceltaBase3TC.next();
});

jQuery('#SceltaBase4 .frecciaback').on('click', function(event) {
    SceltaBase4TC.prev();
});

jQuery('#SceltaBase4 .freccianext').on('click', function(event) {
    SceltaBase4TC.next();
});

function CaricaFiltri() {
    var val_async = !filtroautomatico;
    var strUrl = URLMAGENTO + 'getprodotticonfiguratore/?option=materiale&idcat=' + IDCategoria;
    jQuery.ajax({
        url: strUrl,
        dataType: 'json',
        async: val_async,
        success: function(data) {
            jQuery('#filtro_materiali').html('');
            var strhtml = '';
            var j = 0;
            strhtml += '<div class="div_filtri">';
            jQuery.each(data, function(i, riga) {
                var strid = riga.value.replaceAll(' ', '_').toLowerCase();
                strhtml += '<div class="chkborder"><input type="checkbox" id="mat_' + strid.replace("'", "") + '" idattr="' + riga.id + '" ><label for="mat_' + strid.replace("'", "") + '">' + riga.value + '</label></div>';
                j++;
            });
            strhtml += '</div>';
            if (j > 0) {
                jQuery('#filtro_materiali').append(strhtml);
                AggiungiTriggerFiltro('#filtro_materiali');
            } else {
                jQuery('.btn_filtro.btn_mat').hide();
            }
        }
    });

    strUrl = URLMAGENTO + 'getprodotticonfiguratore/?option=pietre&idcat=' + IDCategoria;
    jQuery.ajax({
        url: strUrl,
        dataType: 'json',
        async: val_async,
        success: function(data) {
            jQuery('#filtro_pietre').html('');
            var strhtml = '';
            var j = 0;
            strhtml += '<div class="div_filtri">';
            jQuery.each(data, function(i, riga) {
                var strid = riga.value.replaceAll(' ', '_').toLowerCase();
                strhtml += '<div class="chkborder"><input type="checkbox" id="pie_' + strid.replace("'", "") + '" idattr="' + riga.id + '" ><label for="pie_' + strid.replace("'", "") + '">' + riga.value + '</label></div>';
                j++;
            });
            strhtml += '</div>';
            if (j > 0) {
                jQuery('#filtro_pietre').append(strhtml);
                AggiungiTriggerFiltro('#filtro_pietre');
            } else {
                jQuery('.btn_filtro.btn_pie').hide();
            }
        }
    });

    strUrl = URLMAGENTO + 'getprodotticonfiguratore/?option=occasione&idcat=' + IDCategoria;
    jQuery.ajax({
        url: strUrl,
        dataType: 'json',
        async: val_async,
        success: function(data) {
            jQuery('#filtro_occasioni').html('');
            var strhtml = '';
            var j = 0;
            strhtml += '<div class="div_filtri">';
            jQuery.each(data, function(i, riga) {
                var strid = riga.value.replaceAll(' ', '_').toLowerCase();
                strhtml += '<div class="chkborder"><input type="checkbox" id="occ_' + strid.replace("'", "") + '" idattr="' + riga.id + '" ><label for="occ_' + strid.replace("'", "") + '">' + riga.value + '</label></div>';
                j++;
            });
            strhtml += '</div>';
            if (j > 0) {
                jQuery('#filtro_occasioni').append(strhtml);
                AggiungiTriggerFiltro('#filtro_occasioni');
            } else {
                jQuery('.btn_filtro.btn_occ').hide();
            }
        }
    });

    strUrl = URLMAGENTO + 'getprodotticonfiguratore/?option=tema&idcat=' + IDCategoria;
    jQuery.ajax({
        url: strUrl,
        dataType: 'json',
        async: val_async,
        success: function(data) {
            jQuery('#filtro_tema').html('');
            var strhtml = '';
            var j = 0;
            strhtml += '<div class="div_filtri">';
            jQuery.each(data, function(i, riga) {
                strid = riga.value.replaceAll(' ', '_').toLowerCase();
                strhtml += '<div class="chkborder"><input type="checkbox" id="tem_' + strid.replace("'", "") + '" idattr="' + riga.id + '" ><label for="tem_' + strid.replace("'", "") + '">' + riga.value + '</label></div>';
                j++;
            });
            strhtml += '</div>';
            if (j > 0) {
                jQuery('#filtro_tema').append(strhtml);
                AggiungiTriggerFiltro('#filtro_tema');
            } else {
                jQuery('.btn_filtro.btn_tem').hide();
            }
        }
    });

    strUrl = URLMAGENTO + 'getprodotticonfiguratore/?option=special_edition&idcat=' + IDCategoria;
    jQuery.ajax({
        url: strUrl,
        dataType: 'json',
        async: val_async,
        success: function(data) {
            jQuery('#filtro_special').html('');
            var strhtml = '';
            var j = 0;
            strhtml += '<div class="div_filtri">';
            jQuery.each(data, function(i, riga) {
                var strid = riga.value.replaceAll(' ', '_').toLowerCase();
                strhtml += '<div class="chkborder"><input type="checkbox" id="spe_' + strid.replace("'", "") + '" idattr="' + riga.id + '" ><label for="spe_' + strid.replace("'", "") + '">' + riga.value + '</label></div>';
                j++;
            });
            strhtml += '</div>';
            if (j > 0) {
                jQuery('#filtro_special').append(strhtml);
                AggiungiTriggerFiltro('#filtro_special');
            } else {
                jQuery('.btn_filtro.btn_spe').hide();
            }
        }
    });

    jQuery('#pre_range').uislider({
        range: true,
        min: 0,
        max: prezzofiltro,
        step: 25,
        values: [0, prezzofiltro],
        slide: function(event, ui) {
            jQuery('.prize_from').text(SimboloValuta + ' ' + ui.values[0]);
            jQuery('.prize_to').text(SimboloValuta + ' ' + ui.values[1]);
        },
        stop: function(event, ui) {
            var min = jQuery(this).uislider('option', 'min');
            var max = jQuery(this).uislider('option', 'max');
            if ((min != ui.values[0]) || (max != ui.values[1])) {
                var stringa = SimboloValuta + ' ' + ui.values[0] + ' - ' + SimboloValuta + ' ' + ui.values[1];
                jQuery('#act_pre_range').remove();
                AggiungiFiltro('pre_range', stringa, ui.values[0], ui.values[1]);
                jQuery('#act_pre_range .active_btn_filtro').on('click', function() {
                    jQuery(this).parent().id;
                    RimuoviFiltro('act_pre_range', 0);
                });
                ChiudiSfondoFiltri();
            } else {
                jQuery('.prize_from').text(SimboloValuta + ' ' + min);
                jQuery('.prize_to').text(SimboloValuta + ' ' + max);
                RimuoviFiltro('act_' + jQuery(this).attr('id'), 0);
            }
        }
    });

    if (filtroautomatico) {
        ApplicaFiltroAutomatico();
    }
}

function AggiungiTriggerFiltro(id) {
    if (!isMobile) {
        if (jQuery(id + '.popup_filtro .div_filtri').children().length > 12) {
            jQuery(id + '.popup_filtro').perfectScrollbar({
                minScrollbarLength: 70,
                maxScrollbarLength: 70,
                suppressScrollX: true,
                useKeyboard: false,
                wheelPropagation: true,
            });
        }
    } else {
        jQuery(id + '.popup_filtro').perfectScrollbar({
            minScrollbarLength: 70,
            maxScrollbarLength: 70,
            suppressScrollX: true,
            useKeyboard: false,
            wheelPropagation: true,
        });
    }
    /*
	 if (isMobile) {
	 jQuery(id + ' .chkborder').on('click', function(event) {
	 event.stopPropagation();
	 jQuery(this).find('input:checkbox').click();
	 });
	 }
	 */

    jQuery(id + ' input:checkbox').on('click', function(event) {
        event.stopPropagation();

        if (jQuery(this).is(':checked')) {
            var label = jQuery("label[for='" + this.id + "']");
            AggiungiFiltro(this.id, label.text());

            jQuery('#filtri_attivi .touchcarousel ul li').on('click', function() {
                RimuoviFiltro(jQuery(this).attr('iddiv'), 1);
                jQuery(this).remove();
                RefreshSlideFiltri();
            });

            jQuery('#act_' + this.id).on('click', function() {
                RimuoviFiltro(jQuery(this).attr('id'), 1);
            });

            jQuery('#act_' + this.id + ' .active_btn_filtro').on('click', function() {
                jQuery(this).parent().id;
                RimuoviFiltro(jQuery(this).parent().attr('id'), 1);
            });
        } else {
            var idselect = 'act_' + this.id;
            RimuoviFiltro(idselect, 0);
        }
        jQuery('#filtro_close').click();
    });
}

function InserisciTessera(riga) {

    var pngtessera = 'tessera_base_drag';
    switch (TipoBracciale) {
        case 'classic':
            pngtessera = 'tessera_base_drag';
            if (riga.double == 1) {
                pngtessera = 'tessera_base_drag_double';
            }
            break;
        case 'big':
            pngtessera = 'tessera_base_drag_big';
            break;
        case 'mbbshort':
        case 'mbblong':
            pngtessera = 'tessera_base_drag_mbb';
            break;
        default:
            pngtessera = 'tessera_base_drag_cubiamo';
            break;
    }

    strhtml = '<div id="link_' + riga.sku + '" class="tessera" sku="' + riga.sku + '" imgsku="' + riga.img + '" cod_int="' + riga.cod_int + '"';
    strhtml += ' nome="' + esc_quot(riga.name) + '" materiale="' + riga.materiale + '" price="' + riga.price + '" fprice="' + riga.final_price + '"';
    strhtml += ' double="' + riga.double + '" incisible="' + riga.incisione + '" righe_inc="' + riga.righe_inc + '" max_char="' + riga.max_char + '" style="background-image: url(' + riga.img + '), url(' + SKINURL + 'img/' + pngtessera + '.png);" >';
    if (isMobile) {
        strhtml += '<div class="draghandle drag"></div>';
    }
    strhtml += '</div>';
    jQuery('#tessere').append(strhtml);
}

function AggiornaTriggerTessere() {
    if (isMobile) {
        jQuery(".tessera").draggable({
            containment: 'document',
            revert: 'invalid',
            helper: 'clone',
            handle: 'div.drag',
            zIndex: 100,
            opacity: 0.6,
            delay: DelayTouch,
            appendTo: 'body',
            start: function(event, ui) {
                ChiudiBarraRiepilogo();
                DragInCorso = true;
            },
            stop: function() {
                DragInCorso = false;
            }
        });


        jQuery('.drag').swipe({
            swipeUp: function(event, direction, distance, duration, fingerCount, fingerData) {
                if (duration < DelayTouch) {
                    jQuery('html, body').stop().animate({
                        scrollTop: jQuery(window).scrollTop() + (2.5 * distance)
                    }, 500, 'swing');
                }
            },
            swipeDown: function(event, direction, distance, duration, fingerCount, fingerData) {
                if (duration < DelayTouch) {
                    jQuery('html, body').stop().animate({
                        scrollTop: jQuery(window).scrollTop() - (2.5 * distance)
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
            start: function(event, ui) {
                ChiudiBarraRiepilogo();
                DragInCorso = true;
            },
            stop: function() {
                DragInCorso = false;
                jQuery('#tessera_detail').hide(0);
                jQuery('#conf_suggerimento').fadeOut(200);
            }
        });
    }

    jQuery('.tessera').mouseenter(function() {
        if (!isMobile) {
            if (!DragInCorso) {
                var elem = this;
                IntervalloHover = setTimeout(function() {
                    VisualizzaHover(elem);
                }, 100);
            }
        }
    });

    jQuery('#tessera_detail').mouseleave(function() {
        if (!isMobile) {
            if (!DragInCorso) {
                jQuery('#tessera_detail').hide(0);
                clearTimeout(IntervalloHover);
            }
        }
    });

    jQuery('.stella_incisione').on('click', function() {
        MostraTooltipIncisione(this);
    });

    jQuery('#tooltip_incisione').on('click', function() {
        var j = jQuery(this).attr('nrbase');
        jQuery(this).fadeOut(200);
        jQuery('#base_' + j).find('.stella_incisione').fadeIn(200);
    });
    /*
	 jQuery('#div_hover').mouseenter(function () {
	 if (!DragInCorso) {
	 if (jQuery('#tessera_detail:hover').length == 0) {
	 jQuery('#div_hover').fadeOut(200);
	 clearTimeout(IntervalloHover);
	 }
	 }
	 });
	 */
}

function MostraToolipIncisione(element) {
    if (jQuery('#tooltip_incisione').is(":visible")) {
        var jstella = jQuery('#tooltip_incisione').attr('nrbase');
        jQuery('#base_' + jstella).find('.stella_incisione').fadeIn(200);
    }
    var j = jQuery(element).parent().attr('nrbase');
    var position = jQuery(element).parent().position();
    var wparent = jQuery(element).parent().width();
    var left = position.left + ((wparent - jQuery('#tooltip_incisione').width()) / 2) + OffsetToolTip;
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

function CaricaLink() {
    var str_mat = jQuery('#filtri_attivi').attr('mat');
    var str_pie = jQuery('#filtri_attivi').attr('pie');
    var str_pre = jQuery('#filtri_attivi').attr('pre');
    var str_occ = jQuery('#filtri_attivi').attr('occ');
    var str_tem = jQuery('#filtri_attivi').attr('tem');
    var str_spe = jQuery('#filtri_attivi').attr('spe');

    var str_ord = jQuery('#ordina_per').val();

    str_mat = str_mat.substring(1, str_mat.length - 1);
    str_pie = str_pie.substring(1, str_pie.length - 1);
    str_pre = str_pre.substring(1, str_pre.length - 1).trim();
    str_occ = str_occ.substring(1, str_occ.length - 1);
    str_tem = str_tem.substring(1, str_tem.length - 1);
    str_spe = str_spe.substring(1, str_spe.length - 1);

    str_mat = str_mat.split('##').join('-');
    str_pie = str_pie.split('##').join('-');
    str_occ = str_occ.split('##').join('-');
    str_tem = str_tem.split('##').join('-');
    str_spe = str_spe.split('##').join('-');

    var min = jQuery('#pre_range').uislider('option', 'min');
    var max = jQuery('#pre_range').uislider('option', 'max');
    var arr_pre = str_pre.split('-');
    var minprice = min;
    var maxprice = max;
    if (arr_pre.length == 2) {
        minprice = arr_pre[0];
        maxprice = arr_pre[1];
    }

    var idtipo = 0;
    switch (TipoBracciale) {
        case 'classic':
            idtipo = IDTypeClassic;
            break;

        case 'big':
            idtipo = IDTypeBig;
            break;

        case 'mbbshort':
        case 'mbblong':
            idtipo = '';
            break;

        case 'seimia':
            idtipo = '';
            break;

        case 'cub_cla':
        case 'cub_cla_arg':
            idtipo = IDTypeClassic;
            break;

        case 'cub_big':
        case 'cub_big_double':
            idtipo = IDTypeBig;
            break;
    }

    VisualizzaLoading();
    var strUrl = URLMAGENTO + 'getprodotticonfiguratore/?idcat=' + IDCategoria + '&type_code_identifier=' + TipoBracciale + '&type=' + idtipo + '&mat=' + str_mat + '&pie=' + str_pie + '&occ=' + str_occ + '&tem=' + str_tem + '&spe=' + str_spe + '&minprice= ' + minprice + '&maxprice=' + maxprice + '&ord=' + str_ord;
    jQuery.ajax({
        url: strUrl,
        dataType: 'json',
        async: true,
        success: function(data) {

            jQuery('#tessere').html('');
            var strhtml = '';
            jQuery.each(data, function(i, riga) {
                InserisciTessera(riga);
            });

            AggiornaTriggerTessere();
            NascondiLoading();

            if (PrimoAccesso) {
                PrimoAccesso = false;
                if (FiltroMobile(1100)) {
                    jQuery('#m_guida').fadeIn(200);
                    /*
				 setTimeout(function(){
				 jQuery('#m_guida').fadeOut(200);
				 }, 3000);
				 */
                } else {
                    jQuery('#conf_suggerimento').fadeIn(200);
                    /*
				 setTimeout(function(){
				 jQuery('#conf_suggerimento').fadeOut(200);
				 }, 3000);
				 */
                }

                if (ArrIncisioni.length > 0) {
                    MostraFormIncisione(ArrIncisioni[0].id, ArrIncisioni[0].righe_inc, ArrIncisioni[0].max_char);
                }
            } else {
                var alt_fil = 0;
                if (jQuery('#filtri_attivi').is(':visible')) {
                    alt_fil = jQuery('#filtri_attivi').height();
                }

                jQuery('html, body').animate({
                    scrollTop: jQuery('#tessere').offset().top - jQuery('#fixed_bracciale').height() - alt_fil
                }, 'fast');
            }
        }
    });
}

function VisualizzaHover(elem) {
    var posiz = jQuery(elem).position();
    var screen_w = jQuery('#container_tessere').width();
    var detail_w = jQuery('#tessera_detail').width();
    if (screen_w < (posiz.left + detail_w)) {
        posiz.left = screen_w - detail_w - 10;
    }

    jQuery('#tessera_detail').css({
        left: (posiz.left - 24),
        top: (posiz.top)
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

    if (TipoBracciale.search('cub_big') >= 0) {
        jQuery('#imgdetail').css('margin-top', '15px');
    } else {
        jQuery('#imgdetail').css('margin-top', '0px');
    }
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


    var strhtml = '<span class="titolodetail">' + nome + '</span><br>';
    //strhtml += materiale + '<br>';
    strhtml += GetPriceHtml(price, fprice, 'pricedetail');

    jQuery('#textdetail').html(strhtml);
    jQuery('#tessera_detail').show(0);
    //jQuery('#div_hover').fadeIn(200);
}

function GetPriceHtml(price, final_price, strclass) {
    var vprice = parseFloat(price);
    var vfinal_price = parseFloat(final_price);

    if (!PulsanteAcquista) {
        strclass += ' noprice';
    }

    var htmlprice = '';
    var htmlfinal_price = '';
    if (vprice != vfinal_price) {
        htmlfinal_price = '<p class="old-price"><span class="price">' + DisplayCurrency(vprice) + ' ' + SimboloValuta + ' </span></p>';
        htmlprice = '<div class="' + strclass + '">' + htmlfinal_price + DisplayCurrency(vfinal_price) + ' ' + SimboloValuta + '</div>';
    } else {
        htmlprice = '<div class="' + strclass + '">' + htmlfinal_price + DisplayCurrency(vprice) + ' ' + SimboloValuta + '</div>';
    }
    return htmlprice;
}

function VisualizzaRicerca() {
    var size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
    }

    var altezza = size.height - jQuery('#fixed_bracciale').height();
    if (FiltroMobile(1430)) {
        altezza = 50;
        /*
		 if (altezza < 350) {
		 altezza = 350;
		 }
		 */
        jQuery('#conf_filtro').show();
        jQuery('#container_tessere').css('margin-top', '40px');
    }
    jQuery('#result_ricerca').height(altezza);

    jQuery('#result_ricerca').show(200);
}

function NascondiRicerca(sku) {
    jQuery('#result_ricerca').hide(200);
    if (isMobile) {
        jQuery('#container_tessere').css('margin-top', '0px');
    }

    if (sku != '') {
        jQuery('#tessere .tessera').each(function(index) {
            var skutes = parseInt(jQuery(this).attr('sku'));
            if (skutes != sku) {
                jQuery(this).hide();
            }
        });
    }
}

function RicercaNome(input) {
    var LimiteRicerca = 10;
    if (isMobile) {
        LimiteRicerca = 20;
    }
    var idtipo = 0;
    switch (TipoBracciale) {
        case 'classic':
            idtipo = IDTypeClassic;
            break;

        case 'big':
            idtipo = IDTypeBig;
            break;

        case 'mbbshort':
        case 'mbblong':
            idtipo = '';
            break;

        case 'cub_cla':
        case 'cub_cla_arg':
            idtipo = IDTypeClassic;
            break;

        case 'cub_big':
        case 'cub_big_double':
            idtipo = IDTypeBig;
            break;
    }

    var ricerca = jQuery(input).val();
    if (ricerca.length >= 3) {
        RicercaAttiva = true;
        jQuery('#tessera_detail').hide();
        if (!jQuery('#result_ricerca').is(':visible')) {
            jQuery('#result_ricerca').show(200);
            jQuery('#close_ricerca').show();
        }

        VisualizzaLoading();
        var strUrl = URLMAGENTO + 'getprodotticonfiguratore/?idcat=' + IDCategoria + '&type_code_identifier=' + TipoBracciale + '&type=' + idtipo + '&search=' + ricerca;
        jQuery.ajax({
            url: strUrl,
            dataType: 'json',
            async: true,
            success: function(data) {
                jQuery('#result_ricerca span').html('');
                jQuery('#tessere').html('');
                var conta = 0;
                jQuery.each(data, function(i, riga) {
                    var lcase = riga.name.toLowerCase();
                    var pos = lcase.search(ricerca);
                    var output = riga.name;
                    var sku = riga.sku;
                    if (pos >= 0) {
                        var pos1 = pos + ricerca.length;
                        output = [riga.name.slice(0, pos1), '</b>', riga.name.slice(pos1)].join('');
                        output = [output.slice(0, pos), '<b>', output.slice(pos)].join('');
                    }
                    if (!FiltroMobile(1430)) {
                        if (conta < LimiteRicerca) {
                            var strhtml = '<div class="riga_ricerca" onclick="NascondiRicerca(\'' + sku + '\');">' + output + '</div>';
                            jQuery('#result_ricerca span').append(strhtml);
                        }
                    }
                    InserisciTessera(riga);
                    conta++;
                });

                if (isMobile) {
                    //var strhtml = '<div style="width: 100%; height: 60px"></div>';
                    //jQuery('#result_ricerca span').append(strhtml);
                }

                AggiornaTriggerTessere();
                NascondiLoading();
            }
        });
    } else {
        if (!FiltroMobile(1430)) {
            if (jQuery('#result_ricerca').is(':visible')) {
                jQuery('#result_ricerca').hide(200);
            }
        }
        if (RicercaAttiva) {
            CaricaLink();
        }
        RicercaAttiva = false;
    }
}

function ApriSfondoFiltri(elemento) {
    altezza = 39 + jQuery(elemento).height();
    if (FiltroMobile(1100)) {
        altezza = altezza + 380;
    }
    jQuery('#sfondo_filtri').height(altezza);
    jQuery('#barra_filtri').height(altezza);

    FiltroAperto = true;
    FixedBracciale();
    jQuery('#sfondo_filtri').show(200);
    jQuery('#tessera_detail').hide(0);
}

function ChiudiSfondoFiltri() {
    FiltroAperto = false;
    FixedBracciale();
    jQuery('#barra_filtri').height(49);
    jQuery('#sfondo_filtri').hide(200);
    jQuery('#container_tessere').show(0);
    jQuery('.btn_filtro.btn_pre').removeClass('aperto');
    jQuery('#filtro_prezzo').hide();
    if (FiltroMobile(1100)) {
        jQuery('.btn_filtro.btn_pre').css('height', '62px');
        jQuery('.btn_filtro_mobile').removeClass('aperto');
        jQuery('#conf_filtro').show();
        jQuery('.btn_filtro').each(function() {
            if (!jQuery(this).hasClass('btn_ord')) {
                jQuery(this).hide();
            }
        });
    }
}

function ApriBarraFiltro() {
    if (!FiltroMobile(1100)) {
        if (jQuery('#barra_filtro').height() < 50) {
            jQuery('#barra_filtro').animate({
                height: "78px"
            }, 200);
            jQuery('#filtri_attivi').show(200);
            jQuery('#conf_filtro').animate({
                top: "379px"
            }, 200);
        }
    } else {
        if (jQuery('#barra_filtro').height() < 50) {
            jQuery('#barra_filtro').animate({
                height: "88px"
            }, 200);
            jQuery('#filtri_attivi').show(200);
            if (isMobile) {
                var size = {
                    width: window.innerWidth || document.body.clientWidth,
                    height: window.innerHeight || document.body.clientHeight
                };
                var conftop = 320;
                if ((size.width >= 600) && (size.width <= 1024)) {
                    conftop = 380;
                }
                jQuery('#conf_filtro').animate({
                    top: conftop + "px"
                }, 200);
            } else {
                jQuery('#conf_filtro').animate({
                    top: "389px"
                }, 200);
            }
        }
    }
}

function ChiudiBarraFiltro() {
    if (!FiltroMobile(1100)) {
        jQuery('#barra_filtro').animate({
            height: "39px"
        }, 200);
        jQuery('#filtri_attivi').hide(200);
        jQuery('#conf_filtro').animate({
            top: "340px"
        }, 200);
    } else {
        jQuery('#barra_filtro').animate({
            height: "49px"
        }, 200);
        jQuery('#filtri_attivi').hide(200);
        jQuery('#conf_filtro').animate({
            top: "350px"
        }, 200);
    }
}

var ScrollBar = false;
var ScrollBarMobile = false;

function CalcolaRiepilogo() {
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

    if ((TipoBracciale != 'classic') && (TipoBracciale != 'big')) {
        var bgimage = 'background-image: ' + bgurl_scelto.replace(/"/g, '') + '; background-position: top center ';
        strhtml = '<div class="rie_tes">';
        strhtml += '<div class="rie_tes_img" style=" ' + bgimage + '"></div>';
        strhtml += TextBracciale + '<br><span class="text13gray">' + str_codice + MaterialeBracciale;
        if (PulsanteAcquista) {
            strhtml += '<br>1 x ' + SimboloValuta + ' ' + DisplayCurrency(CostoTBase);
        }
        strhtml += '</span>';
        strhtml += '<div>';
        jQuery('#riepilogo_tessere').append(strhtml);
        jQuery('#m_elenco_tessere').append(strhtml);
        nrbracciale = 1;
    }

    jQuery('#bracciale .tessera_base').each(function(index) {
        var j = parseInt(jQuery(this).attr('nrbase'));
        jQuery('#basezoom_' + z).show();
        if ((ObjBracciale[j].cod != '') && (ObjBracciale[j].cod != 'double')) {
            var bgtessera = pngtessera;
            if (ObjBracciale[j].dbl == 1) {
                bgtessera = 'tessera_base_drag_double';
            }
            var bgimage = 'background-image: url(' + ObjBracciale[j].img + '), url(' + SKINURL + 'img/' + bgtessera + '.png)';
            strhtml = '<div class="rie_tes">';
            strhtml += '<div class="rie_tes_img" style=" ' + bgimage + '"></div>';
            strhtml += ObjBracciale[j].name + '<br><span class="text13gray">' + str_codice + ObjBracciale[j].cod_int + '<br>' + str_posizione + (index + 1);
            if (PulsanteAcquista) {
                strhtml += '<br>1 x ' + SimboloValuta + ' ' + DisplayCurrency(ObjBracciale[j].price);
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
                    var sku = ObjBracciale[j].cod;
                    //imgsku = imgsku.replace(sku, 'f_' + sku);
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
    var totale = (NrLinkBase * CostoTBase) + TotLink;
    var totbase = (NrLinkBase * CostoTBase);
    if ((ControllaMinimoNLink) && (ContaTessere() >= NumeroMinimoLink)) {
        totale = TotLink;
        totbase = 0;
    }

    if ((PromoBaseGratis) && (TotLink >= PrezzoBaseGratis)) {
        totale = TotLink;
        totbase = 0;
    }

    var testo = str_base + ' ' + SimboloValuta + ' ' + DisplayCurrency(totbase) + ' + ' + nr + ' ' + strlink + ' ' + SimboloValuta + ' ' + DisplayCurrency(TotLink) + ' = <b>' + SimboloValuta + ' ' + DisplayCurrency(totale) + '</b>'
    if (!PulsanteAcquista) {
        testo = str_basebracciale + ' + ' + nr + ' ' + strlink + ' ';
    }
    jQuery("#rie_tot").html(testo);
    testo = '<b>' + SimboloValuta + ' ' + DisplayCurrency(totale) + '</b>';
    if (!PulsanteAcquista) {
        testo = '<b>' + nr + ' ' + strlink + '</b>';
    }

    jQuery("#m_rie_tot").html(testo);
    jQuery("#m_price_sub").html(SimboloValuta + ' ' + DisplayCurrency(totale));

    jQuery('.x_tessera').on('click', function() {
        var id = jQuery(this);
        RimuoviTessera(id, false);
    });

    var altezza = (nr + nrbracciale) * 92;
    if (altezza > 276) {
        altezza = 276;
        ScrollBar = true;
    } else {
        ScrollBar = false;
    }
    jQuery('#riepilogo_tessere').height(altezza);
    var size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
    }

    var altezzadisp = size.height - 65;
    //jQuery('#m_riepilogo_tessere').height(altezzadisp);
    altezza = altezzadisp - 140;
    jQuery('#m_elenco_tessere').height(altezza);
    altezza = (nr + nrbracciale) * 102;
    if (altezza > (altezzadisp - 140)) {
        jQuery('#m_elenco_tessere').css('max-height', altezza + 'px');
        ScrollBarMobile = true;
    } else {
        ScrollBarMobile = false;
    }
}

function ApriBarraRiepilogo() {
    CalcolaRiepilogo();

    if (ScrollBar) {
        jQuery('#riepilogo_tessere').perfectScrollbar({
            minScrollbarLength: 70,
            maxScrollbarLength: 70,
            suppressScrollX: true,
            useKeyboard: false,
            wheelPropagation: true,
        });
    }
    jQuery('#riepilogo_tessere').show(200);
    //jQuery("#rie_tot").show(0);
    jQuery('#riepilogo_bracciale').css('background-image', 'url(' + SKINURL + '/img/bgriepilogo_open.png)');

}

function ChiudiBarraRiepilogo() {
    if (ScrollBar) {
        jQuery('#riepilogo_tessere').perfectScrollbar('destroy');
    }
    jQuery('#riepilogo_tessere').hide(200);
    //jQuery("#rie_tot").hide(0);
    jQuery('#riepilogo_bracciale').css('background-image', 'url(' + SKINURL + '/img/bgriepilogo.png)');
}

function RimuoviTessera(id, silent) {
    var j = 0;
    if (jQuery(id).hasClass('x_tessera')) {
        j = jQuery(id).attr('nrtes');
        var idpar = jQuery(this).parent();
        jQuery(idpar).remove();
    } else {
        j = jQuery(id).attr('nrbase');
    }

    if (jQuery('#base_' + j).attr('double') == '1') {
        RimuoviDouble(j, null, true);
    }

    ObjBracciale[j] = {
        id: j,
        cod: '',
        price: 0,
        name: '',
        img: '',
        cod_int: ''
    };
    if ((TipoBracciale == 'classic') || (TipoBracciale == 'big')) {
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

    if (!silent) CalcolaRiepilogo(true);
    if ((ContaTessere() == 0) && (PulsanteAcquista)) {
        jQuery('#acquista_bracciale').addClass('disable');
        jQuery('#m_btn_acquista').addClass('disable');
        jQuery('#m_acquista_fixed').addClass('disable');
        jQuery('#m_riepilogo_bag').addClass('disable');
    } else if ((ControllaMinimoNLink) && (ContaTessere() < NumeroMinimoLink) && (PulsanteAcquista)) {
        jQuery('#acquista_bracciale').addClass('disable');
        jQuery('#m_btn_acquista').addClass('disable');
        jQuery('#m_acquista_fixed').addClass('disable');
        jQuery('#m_riepilogo_bag').addClass('disable');
    }
}

var FiltriAttivi = false;

function AggiungiFiltro(id, text, pmin, pmax) {
    var size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
    };

    var min = jQuery('#pre_range').uislider('option', 'min');
    var max = jQuery('#pre_range').uislider('option', 'max');

    pmin = pmin || min;
    pmax = pmax || max;

    var sel_fil = 'btn_' + id.substr(0, 3);
    ApriBarraFiltro();
    var conta = parseInt(jQuery('.btn_filtro.' + sel_fil).attr('count'));

    var values = Array();
    var aggiungidiv = true;
    if (sel_fil != 'btn_pre') {
        conta++;
        jQuery('.btn_filtro.' + sel_fil).attr('count', conta);
        var testo = jQuery('.btn_filtro.' + sel_fil + ' .nomefiltro').text();

        var pos = testo.search(' \\(');
        if (pos >= 0) testo = testo.substring(0, pos);
        testo = testo + ' (' + conta + ')';
        jQuery('.btn_filtro.' + sel_fil + ' .nomefiltro').text(testo);
    } else {
        values = jQuery('#' + id).uislider('values');
        if (conta > 0) aggiungidiv = false;
        conta = 1;
    }

    if (!aggiungidiv) {
        jQuery('#act_' + id).remove();
    }

    var strhtml = '<li class="touchcarousel-item filterActive" iddiv="act_' + id + '"><div id="act_' + id + '" class="btn_filtro_act" >' + text;
    strhtml += '<div class="active_btn_filtro "></div></div></li>';
    if ((FiltriTC != null) || (FiltriAttivi)) {
        jQuery('#li_vuoto').remove();
        jQuery('#filtri_attivi .touchcarousel ul li.last').removeClass('last');
        var html = jQuery('#filtri_attivi ul').html();
        jQuery('#filtri_attivi .touchcarousel').remove();
    }
    jQuery('#filtri_attivi').append('<div class="touchcarousel minimal-light contentFilter"><ul class="touchcarousel-container"></ul></div>');
    jQuery('#filtri_attivi .touchcarousel ul').append(html);
    jQuery('#filtri_attivi .touchcarousel ul').append(strhtml);
    jQuery('#filtri_attivi .touchcarousel').width(size.width);
    jQuery('#filtri_attivi .touchcarousel').height(39);

    RefreshSlideFiltri();

    var idattr = id.substring(0, 3);
    var strattr = '';
    var value = '';
    if (sel_fil != 'btn_pre') {
        value = jQuery('#' + id).attr('idattr');
        strattr = jQuery('#filtri_attivi').attr(idattr) + '#' + value + '#';
    } else {
        value = pmin + '-' + pmax;
        strattr = '#' + value + '#';
    }
    jQuery('#filtri_attivi').attr(idattr, strattr);

    FiltriAttivi = true;
    CaricaLink();

}

function RimuoviFiltro(id, uncheck) {
    var idchk = id.substring(4);
    var idpar = 'btn_' + id.substr(4, 3);
    var conta = parseInt(jQuery('.btn_filtro.' + idpar).attr('count'));

    conta--;
    jQuery('.btn_filtro.' + idpar).attr('count', conta);
    var testo = jQuery('.btn_filtro.' + idpar + ' .nomefiltro').text();
    var pos = testo.search(' \\(');
    if (pos >= 0) testo = testo.substring(0, pos);

    if (conta > 0) {
        testo = testo + ' (' + conta + ')';
    }
    jQuery('.btn_filtro.' + idpar + ' .nomefiltro').text(testo);

    if (uncheck == 1) {
        jQuery('#' + idchk).prop('checked', false);
    } else {
        jQuery('#filtri_attivi .touchcarousel ul li[iddiv="' + id + '"]').remove();
    }

    var idattr = idchk.substring(0, 3);
    var strattr = '';
    if (idchk == 'pre_range') {
        var min = jQuery('#' + idchk).uislider('option', 'min');
        var max = jQuery('#' + idchk).uislider('option', 'max');
        jQuery('.prize_from').text(SimboloValuta + ' ' + min);
        jQuery('.prize_to').text(SimboloValuta + ' ' + max);
        jQuery('#' + idchk).uislider('option', 'values', [min, max]);
        jQuery('#amount').html(fil_prezzo + min + " - " + SimboloValuta + " " + max);
        strattr = '';
    } else {
        var value = jQuery('#' + idchk).attr('idattr');
        strattr = jQuery('#filtri_attivi').attr(idattr);
        strattr = strattr.replace('#' + value + '#', '');
    }

    jQuery('#' + id).remove();

    jQuery('#filtri_attivi').attr(idattr, strattr);
    var test_filtri = jQuery('#filtri_attivi').attr('mat');
    test_filtri += jQuery('#filtri_attivi').attr('pie');
    test_filtri += jQuery('#filtri_attivi').attr('occ');
    test_filtri += jQuery('#filtri_attivi').attr('tem');
    test_filtri += jQuery('#filtri_attivi').attr('pre');
    if (test_filtri == '') {
        jQuery(".contentFilter").remove()
        FiltriAttivi = false;
        ChiudiBarraFiltro();
    }

    CaricaLink();
}

function ClearFiltri() {
    jQuery('.btn_filtro_act').remove();
    jQuery('#filtri_attivi').attr('mat', '');
    jQuery('#filtri_attivi').attr('pie', '');
    jQuery('#filtri_attivi').attr('tem', '');
    jQuery('#filtri_attivi').attr('pre', '');
    jQuery('#filtri_attivi').attr('spe', '');

    jQuery('.btn_filtro').each(function() {
        var testo = jQuery(this).text();
        var pos = testo.search(' \\(');
        if (pos >= 0) {
            testo = testo.substring(0, pos);
            jQuery(this).find('.nomefiltro').text(testo);
        }
        jQuery(this).attr('count', '0');
    });

    jQuery('#filtro_materiali').find('input[type=checkbox]').prop('checked', false);
    jQuery('#filtro_pietre').find('input[type=checkbox]').prop('checked', false);
    jQuery('#filtro_occasioni').find('input[type=checkbox]').prop('checked', false);
    jQuery('#filtro_tema').find('input[type=checkbox]').prop('checked', false);
    jQuery('#filtro_special').find('input[type=checkbox]').prop('checked', false);

    ChiudiBarraFiltro();
    CaricaLink();
}

jQuery('#acquista_bracciale').on('click', function() {
    if (PulsanteAcquista) {
        CreaProdottoMagento('cart');
    } else {
        window.location = url_store_locator + '/';
    }
});

jQuery('#m_btn_acquista').on('click', function() {
    jQuery('#mobile_overlay').hide();
    jQuery('#m_riepilogo_tessere').hide();
    if (PulsanteAcquista) {
        CreaProdottoMagento('cart');
    } else {
        window.location = url_store_locator + '/';
    }
});

jQuery('#m_acquista_fixed').on('click', function() {
    if (PulsanteAcquista) {
        CreaProdottoMagento('cart');
    } else {
        window.location = url_store_locator + '/';
    }
});

jQuery('#m_riepilogo_bag').on('click', function() {
    if (PulsanteAcquista) {
        CreaProdottoMagento('cart');
    } else {
        window.location = url_store_locator + '/';
    }
});


jQuery('.fa.fa-facebook.cursor_pointer').on('click', function(event) {
    jQuery('#m_azioni').hide();
    jQuery('#mobile_overlay').hide();
    CreaProdottoMagento('fb');
    return false;
});

jQuery('.fa.fa-twitter.cursor_pointer').on('click', function(event) {
    jQuery('#m_azioni').hide();
    jQuery('#mobile_overlay').hide();
    CreaProdottoMagento('tw');
    return false;
});

jQuery('.fa.fa-pinterest-p.cursor_pointer').on('click', function(event) {
    jQuery('#m_azioni').hide();
    jQuery('#mobile_overlay').hide();
    CreaProdottoMagento('pt');
    return false;
});

jQuery('.fa.fa-envelope.cursor_pointer').on('click', function(event) {
    jQuery('#m_azioni').hide();
    jQuery('#mobile_overlay').hide();
    CondividiBracciale('em');
    return false;
});

jQuery('#conf_save').on('click', function() {
    MessaggioSalva();
});

jQuery('#m_save').on('click', function() {
    MessaggioSalva();
});

function ContaTessere() {
    var nrtessere = 0;
    for (var j = 0; j < NrLink; j++) {
        if (typeof ObjBracciale[j] !== 'undefined') {
            if ((ObjBracciale[j].cod != '') && (ObjBracciale[j].cod != 'double')) {
                nrtessere++;
            }
        }
    }
    return nrtessere;
}

function CreaProdottoMagento(action) {
    AggiornaObjBracciale();
    if (ContaTessere() == 0) {
        MessaggioZeroLink(1);
    } else if ((ControllaMinimoNLink) && (ContaTessere() < NumeroMinimoLink)) {
        MessaggioZeroLink(2);
    } else {
        var tipo = 0;
        var skubase = '';
        var nrimage = 3;

        var social_title = '';
        var social_url = window.location.href;
        var social_media = '';
        switch (TipoBracciale) {
            case 'classic':
                tipo = 1;
                social_title = str_create_your + ' ' + str_com_classic;
                social_media = 'https://www.nomination.com/media/wysiwyg/Pagine/crea_bracciale/love.jpg';
                switch (MaterialeBracciale) {
                    case 'acciaio':
                        skubase = sku_cla_acciaio;
                        break
                    case 'oro':
                        skubase = sku_cla_oro;
                        break
                    case 'rosa':
                        skubase = sku_cla_rosa;
                        break
                    case 'dark':
                        skubase = sku_cla_dark;
                        break
                }
                break;

            case 'big':
                tipo = 2;
                social_title = str_create_your + ' ' + str_com_big;
                social_media = 'https://www.nomination.com/media/wysiwyg/Pagine/crea_bracciale/love.jpg';
                switch (MaterialeBracciale) {
                    case 'acciaio':
                        skubase = sku_big_acciaio;
                        break
                    case 'oro':
                        skubase = sku_big_oro;
                        break
                    case 'rosa':
                        skubase = sku_big_rosa;
                        break
                    case 'dark':
                        skubase = sku_big_dark;
                        break
                }
                break;

            case 'cub_cla':
                social_title = str_create_your + ' ' + str_cub_classic;
                social_media = 'https://www.nomination.com/media/wysiwyg/Pagine/crea_bracciale/cubiamo.jpg';
                tipo = 3;
                nrimage = 1;
                break;

            case 'cub_cla_arg':
                social_title = str_create_your + ' ' + str_cub_arg;
                social_media = 'https://www.nomination.com/media/wysiwyg/Pagine/crea_bracciale/cubiamo.jpg';
                tipo = 31;
                nrimage = 1;
                break;

            case 'cub_big':
                social_title = str_create_your + ' ' + str_cub_arg;
                social_media = 'https://www.nomination.com/media/wysiwyg/Pagine/crea_bracciale/cubiamo.jpg';
                tipo = 4;
                nrimage = 1;
                break;

            case 'cub_big_double':
                social_title = str_create_your + ' ' + str_cub_big_short;
                social_media = 'https://www.nomination.com/media/wysiwyg/Pagine/crea_bracciale/cubiamo.jpg';
                tipo = 41;
                nrimage = 1;
                break;

            case 'mbbshort':
                social_title = str_create_your + ' ' + str_mbb_short;
                social_media = 'https://www.nomination.com/media/content/images/myBonBons.jpg';
                tipo = 5;
                nrimage = 1;
                break;

            case 'mbblong':
                social_title = str_create_your + ' ' + str_mbb_long;
                social_media = 'https://www.nomination.com/media/content/images/myBonBons.jpg';
                tipo = 5;
                nrimage = 1;
                break;

            case 'seimia':
                social_title = str_create_your + ' ' + str_seimia;
                social_media = 'https://www.nomination.com/media/content/images/seimia.jpg';
                tipo = 6;
                nrimage = 1;
                break;
        }

        var arraysku = Array(NrLink);
        var arraydouble = Array();
        var elencoincisioni = '';
        var TotLink = 0;
        var strincisione = '';
        for (var j = 0; j < NrLink; j++) {
            if (ObjBracciale[j].cod != 'double') {
                if (ObjBracciale[j].cod != '') {
                    arraysku[ObjBracciale[j].id] = ObjBracciale[j].cod;
                    if (ObjBracciale[j].dbl == 1) {
                        arraydouble.push(ObjBracciale[j].id);
                    }
                } else {
                    arraysku[ObjBracciale[j].id] = skubase;
                }
                TotLink += parseFloat(ObjBracciale[j].price);
            } else {
                arraysku[ObjBracciale[j].id] = '';
            }

            if (ObjBracciale[j].incision == 1) {
                strincisione = ObjBracciale[j].id + '|' + ObjBracciale[j].font + '|' + ObjBracciale[j].l1 + '|' + ObjBracciale[j].l2;
                elencoincisioni += strincisione + ';';
            }
        }

        //RIPETO IL CICLO PER RIORDINARE TESSERE
        var elencosku = '';
        var NrLinkBase = 1;
        var elencoimg = '';
        var elencodouble = '';
        var conta = 0;
        if ((TipoBracciale == 'classic') || (TipoBracciale == 'big')) {
            NrLinkBase = NrLink;
        }

        for (var j = 0; j < NrLink; j++) {
            if (arraysku[j] != '') {
                elencosku += arraysku[j] + ';';
                if (arraysku[j] != skubase) {
                    if ((TipoBracciale == 'classic') || (TipoBracciale == 'big')) {
                        NrLinkBase--;
                        if (arraydouble.indexOf(j) >= 0) {
                            NrLinkBase--;
                        }
                    }
                    if (conta < nrimage) {
                        elencoimg += arraysku[j] + '-';
                        if (arraydouble.indexOf(j) >= 0) {
                            elencodouble += 1 + ';';
                            conta++;
                        } else {
                            elencodouble += 0 + ';';
                        }
                        conta++;
                    }
                }
            }
        }

        elencosku = elencosku.slice(0, -1);
        if (elencoimg != '') {
            elencoimg = elencoimg.slice(0, -1);
        }

        if (elencodouble != '') {
            elencodouble = elencodouble.slice(0, -1);
        }

        if (elencoincisioni != '') {
            elencoincisioni = elencoincisioni.slice(0, -1);
        }

        var pre_base = (NrLinkBase * CostoTBase);
        var totale = (NrLinkBase * CostoTBase) + TotLink;

        if ((PromoBaseGratis) && (TotLink >= PrezzoBaseGratis)) {
            totale = TotLink;
            pre_base = 0;
        }

        if (LaccioBracciale == '') LaccioBracciale = MaterialeBracciale;
        var infobracciale = TipoBracciale + ';' + MaterialeBracciale + ';' + NrLink;

        var from = '';
        var mailto = '';
        var nomefrom = '';
        if (action == 'mail') {
            nomefrom = jQuery('#nomefrom').val();
            from = jQuery('#emailfrom').val();
            mailto = jQuery('#emailto').val();
        }

        var paginacorrente = location.pathname;
        var indice = paginacorrente.lastIndexOf('/');
        if (indice == paginacorrente.length - 1) {
            paginacorrente = paginacorrente.slice(0, -1);
            indice = paginacorrente.lastIndexOf('/');
        }
        paginacorrente = paginacorrente.substring(indice + 1);


        var previousProductId = (function() {
            var request = {};
            var pairs = window.location.search.slice(1).split('&');
            for (var i = 0; i < pairs.length; i++) {
                if (!pairs[i])
                    continue;
                var pair = pairs[i].split('=');
                request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
            }
            return request;
        })();

        if (key_color == false) {
            key_color = '';
        }

        var strUrl = URLMAGENTO + 'product_configurator/?sku=' + elencosku + '&img=' + elencoimg + '&tipo=' + tipo + '&mat=' + MaterialeBracciale + '&laccio=' + LaccioBracciale + '&pre_base=' + pre_base + '&price=' + totale + '&key_type=' + key_type + '&key_color=' + key_color + '&key_size=' + key_size + '&info=' + infobracciale + '&page=' + paginacorrente + '&nomefrom=' + nomefrom + '&from=' + from + '&to=' + mailto + '&save=' + action + '&orig_bundle_id=' + previousProductId.idbundle;

        if (elencodouble != '') {
            strUrl += '&double=' + elencodouble;
        }

        if (elencoincisioni != '') {
            strUrl += '&incisioni=' + elencoincisioni;
        }

        if (previousProductId["modify"] && previousProductId["modify"] == "yes") {
            if (previousProductId["idbundle"] && previousProductId["idbundle"] != "") {
                strUrl += "&previous_product_id=" + previousProductId["idbundle"];
            }
        }

        VisualizzaLoading();
        setTimeout(function() {
            var sincro = true;
            if ((action != 'cart') && (action != 'save')) {
                sincro = false;
            }
            jQuery.ajax({
                url: strUrl,
                dataType: 'json',
                async: sincro,
                success: function(data) {

                    var size = {
                        width: window.innerWidth || document.body.clientWidth,
                        height: window.innerHeight || document.body.clientHeight
                    };

                    var top = (size.height - 400) / 2;
                    var left = (size.width - 600) / 2;

                    jQuery.each(data, function(i, riga) {
                        if (riga.id != 0) {
                            switch (action) {
                                case 'cart':
                                    var url = riga.form.url;
                                    var formString = riga.form.form;

                                    jQuery("#product_addtocart_form").html(formString);
                                    jQuery("#product_addtocart_form").attr("action", url);

                                    jQuery.ajax({
                                        type: "POST",
                                        url: jQuery("#product_addtocart_form").attr("action"),
                                        data: jQuery("#product_addtocart_form").serialize() + "&isAjax=1",
                                        async: true,
                                        dataType: 'json',

                                        timeout: 10000,
                                        success: function(success) {
                                            NascondiLoading();
                                            window.location = URLMAGENTO + 'checkout/cart/';
                                        },
                                        error: function(errore) {
                                            console.log(errore);
                                            NascondiLoading();
                                            window.location = URLMAGENTO + 'checkout/cart/';
                                        }
                                    });
                                    break;

                                case 'save':
                                    NascondiLoading();
                                    if (riga.wish.logged == 0) {
                                        var wishurl = URLMAGENTO + 'product_configurator/?id=' + riga.wish.id + '&save=save';
                                        jQuery('#conf_wishlist').attr('href', riga.wish);
                                        jQuery('.conf_composable').attr('wishurl', wishurl);
                                        jQuery('#conf_wishlist')[0].click();
                                    } else {
                                        if (jQuery('.topbar-link.wishlist span').length) {
                                            var nwish = parseInt(jQuery('.topbar-link.wishlist span').text());
                                            nwish++;
                                            jQuery('.topbar-link.wishlist span').text(nwish);
                                        } else {
                                            jQuery('.topbar-link.wishlist a').append('<span class="topbar-count">1</span>');
                                        }

                                        var mq = window.matchMedia("(min-width: 991px)");
                                        if (!mq.matches) {
                                            // MOSTRA LA NOTIFICA
                                            jQuery("#site-overlay").css("z-index", "10000");
                                            toastr.options.onHidden = function() {
                                                jQuery("#site-overlay").css("z-index", "").fadeOut(toastr.options.fadeOut, function() {
                                                    jQuery("#site-overlay").css("display", "");
                                                });
                                            }
                                            toastr.success(window.avv_wishlist);
                                        }
                                    }
                                    break;
                                case 'mail':
                                    NascondiLoading();
                                    MessaggioMailInviata();
                                    break;
                            }
                        } else {
                            alert('error!');
                        }
                    });
                }
            });
        }, 300);

        if ((action != 'cart') && (action != 'save') && (action != 'mail')) {
            addthis.toolbox(".addthis_toolbox", null, {
                title: social_title,
                description: social_title,
                url: social_url,
                media: social_media
            })
            NascondiLoading();
            CondividiBracciale(action);
        }
    }
}

function CondividiBracciale(social) {
    switch (social) {
        case 'fb':
            jQuery('.addthis_button_facebook').click();
            break;

        case 'tw':
            jQuery('.addthis_button_twitter').click();
            break;

        case 'pt':
            jQuery('.addthis_button_pinterest_share').click();
            break;

        case 'em':
            MessaggioEmail();
            break;
    }
}

function VisualizzaLoading() {
    jQuery('#site-overlay').addClass("tm-visible");
    jQuery('#site-overlay').css("z-index", "10000");
    jQuery('#site-overlay').show();
    jQuery('#site-overlay img').show();
}

function NascondiLoading() {
    if (!mustBeBlocked) {
        jQuery('#site-overlay').removeClass("tm-visible");
        jQuery('#site-overlay').css("z-index", "");
        jQuery('#site-overlay').hide();
        jQuery('#site-overlay img').hide();
    }
}

(function(jQuery) {
    // Determine if we on iPhone or iPad
    var isiOS = false;
    var agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf('iphone') >= 0 || agent.indexOf('ipad') >= 0) {
        isiOS = true;
    }

    jQuery.fn.doubletap = function(onDoubleTapCallback, onTapCallback, delay) {
        var eventName, action;
        delay = delay == null ? 500 : delay;
        eventName = isiOS == true ? 'touchend' : 'click';

        jQuery(this).bind(eventName, function(event) {
            var now = new Date().getTime();
            var lastTouch = jQuery(this).data('lastTouch') || now + 1 /** the first time this will make delta a negative number */ ;
            var delta = now - lastTouch;
            clearTimeout(action);
            if (delta < 500 && delta > 0) {
                if (onDoubleTapCallback != null && typeof onDoubleTapCallback == 'function') {
                    event.preventDefault();
                    onDoubleTapCallback(event);
                }
            } else {
                jQuery(this).data('lastTouch', now);
                action = setTimeout(function(evt) {
                    if (onTapCallback != null && typeof onTapCallback == 'function') {
                        onTapCallback(evt);
                    }
                    clearTimeout(action); // clear the timeout
                }, delay, [event]);
            }
            jQuery(this).data('lastTouch', now);
        });
    };
})(jQuery);

function DisplayCurrency(valore) {
    return parseFloat(Math.round(valore * 100) / 100).toFixed(2);
}

function esc_quot(text) {
    return text.replaceAll('"', '&quot;');
}