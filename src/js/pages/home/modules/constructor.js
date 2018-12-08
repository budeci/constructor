export default class Constructor {
    constructor() {
        this.isMobile = this.CheckIsMobile(); //initiate as false
        // JavaScript Document
        let IntervalloHover;
        let BraccialeZoom;
        let FiltroAperto = false;
        let PrimoAccesso = true;
        let LaccioBracciale = '';
        let detail_visible = '';
        let RicercaAttiva = false;
        let SortStart = true;
        let larghezza = jQuery(window).width();
        let FiltriTC = null;
        let DelayTouch = 0;
        let paginaurl = '';
        let ControllaMinimoNLink = false;
        let OffsetToolTip = -20;
        let ArrIncisioni = Array();
        let ScrollBar = false;
        // Controllo caricamenti
        let mustBeBlocked = false;
        this.init();
    }
    init() {
        this.events();
        // this.SettaPosizioniTessere("big");
        this.RefreshSlideFiltri();
        this.initDefault();
    }
    CheckIsMobile() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }

    events() {
        const self = this;
        const isMobile = self.isMobile;
        var tes_top = -13;
        var tes_left = -30;
        var tes_top1 = -14;
        var tes_left1 = -35;
        var tes_top_o = -16;
        var tes_left_o = -35;
        jQuery('.tessera').mouseenter(function() {
            if (!isMobile) {
                //if (!DragInCorso) {
                var elem = this;
                self.IntervalloHover = setTimeout(function() {
                    self.VisualizzaHover(elem);
                }, 100);
                //}
            }
        });
        jQuery('#tessera_detail').mouseleave(function() {
            if (!isMobile) {
                if (!DragInCorso) {
                    jQuery('#tessera_detail').hide(0);
                    clearTimeout(self.IntervalloHover);
                }
            }
        });
        jQuery('#conf_zoom').on('click', function() {
            var size = {
                width: window.innerWidth || document.body.clientWidth,
                height: window.innerHeight || document.body.clientHeight
            }

            var ulwidth = jQuery('#bracciale_zoom ul').width();
            var xpos = 0 - ((ulwidth - size.width) / 2);
            self.BraccialeZoom.setXPos(xpos);
            //	BraccialeZoom.updateCarouselSize();
            //	jQuery('#bracciale_zoom ul').css({left: '-300px'});

            // self.CalcolaRiepilogo();
            jQuery('#container_zoom').fadeIn(200);
            jQuery('#container_bracciale').fadeOut(200);
        });
        jQuery('.tessera_base').on('click', function() {
            var element = jQuery(this).find('.stella_incisione')
            if (jQuery(element).is(':visible')) {
                jQuery(this).find('.stella_incisione').fadeOut(200);
                self.MostraToolipIncisione(element);
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
                jQuery('#dettaglio_over').hide();
                if (ObjBracciale[j].cod != '') {
                    self.MostraDettaglioOver(j);
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
                    self.AggiornaObjBracciale();
                    // self.CalcolaRiepilogo();

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
    VisualizzaHover(elem) {
        const self = this;
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


        var strhtml = '<span class="titolodetail">' + nome + '</span><br>';
        //strhtml += materiale + '<br>';
        strhtml += self.GetPriceHtml(price, fprice, 'pricedetail');

        jQuery('#textdetail').html(strhtml);
        jQuery('#tessera_detail').show(0);
        //jQuery('#div_hover').fadeIn(200);
    }

    GetPriceHtml(price, final_price, strclass) {
        const self = this;
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
    DisplayCurrency(valore) {
        return parseFloat(Math.round(valore * 100) / 100).toFixed(2);
    }

    esc_quot(text) {
        return text.replaceAll('"', '&quot;');
    }

    RefreshSlideFiltri() {
        const self = this;
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
    initDefault() {
        const self = this;
        jQuery('#bracciale').sortable({
            handle: '.handletessera',
            opacity: 0.6,
            appendTo: 'body',
            helper: 'original',
            delay: self.DelayTouch,
            disabled: false, //(!isMobile),
            activate: function(event, ui) {

            },
            start: function(event, ui) {
                self.SortStart = true;
                jQuery(ui.item).find('.stella_incisione').fadeOut(200);
                if (jQuery('#tooltip_incisione').is(":visible")) {
                    jQuery('#tooltip_incisione').fadeOut(200);
                }
            },
            stop: function(event, ui) {
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
            update: function(event, ui) {
                ui.item.unbind("click");
                ui.item.one("click", function(event) {
                    console.log("one-time-click");
                    event.stopImmediatePropagation();
                    jQuery(this).on('click', function() {
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
            deactivate: function(event, ui) {
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
    MostraToolipIncisione(element) {
        const self = this;
        if (jQuery('#tooltip_incisione').is(":visible")) {
            var jstella = jQuery('#tooltip_incisione').attr('nrbase');
            jQuery('#base_' + jstella).find('.stella_incisione').fadeIn(200);
        }
        var j = jQuery(element).parent().attr('nrbase');
        var position = jQuery(element).parent().position();
        var wparent = jQuery(element).parent().width();
        var left = position.left + ((wparent - jQuery('#tooltip_incisione').width()) / 2) + self.OffsetToolTip;
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

    AggiornaTriggerTessere() {
        const self = this;
        const isMobile = self.isMobile;
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
                start: function(event, ui) {
                    self.ChiudiBarraRiepilogo();
                    DragInCorso = true;
                },
                stop: function() {
                    DragInCorso = false;
                }
            });


            jQuery('.drag').swipe({
                swipeUp: function(event, direction, distance, duration, fingerCount, fingerData) {
                    if (duration < self.DelayTouch) {
                        jQuery('html, body').stop().animate({
                            scrollTop: jQuery(window).scrollTop() + (2.5 * distance)
                        }, 500, 'swing');
                    }
                },
                swipeDown: function(event, direction, distance, duration, fingerCount, fingerData) {
                    if (duration < self.DelayTouch) {
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
                // handle: 'div.drag',
                helper: 'clone',
                scroll: false,
                zIndex: '100',
                opacity: 0.6,
                appendTo: 'body',
                start: function(event, ui) {
                    self.ChiudiBarraRiepilogo();
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
                    self.IntervalloHover = setTimeout(function() {
                        self.VisualizzaHover(elem);
                    }, 100);
                }
            }
        });

        jQuery('#tessera_detail').mouseleave(function() {
            if (!isMobile) {
                if (!DragInCorso) {
                    jQuery('#tessera_detail').hide(0);
                    clearTimeout(self.IntervalloHover);
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
	 clearTimeout(self.IntervalloHover);
	 }
	 }
	 });
	 */
    }
    SettaPosizioniTessere(TipoBracciale) {
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
    ChiudiBarraRiepilogo() {
        const self = this;
        if (self.ScrollBar) {
            jQuery('#riepilogo_tessere').perfectScrollbar('destroy');
        }
        jQuery('#riepilogo_tessere').hide(200);
        //jQuery("#rie_tot").hide(0);
        jQuery('#riepilogo_bracciale').css('background-image', 'url(' + SKINURL + '/img/bgriepilogo.png)');
    }
    MostraDettaglioOver(j) {
        const self = this;
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
        var strhtml = ObjBracciale[j].name + '<br>'
        strhtml += self.GetPriceHtml(ObjBracciale[j].price, ObjBracciale[j].price, 'pricedetail');
        jQuery('#dettaglio_over .testo').html(strhtml);
        jQuery('#dettaglio_over').show();
    }
    AggiornaObjBracciale() {
        jQuery('#bracciale .tessera_base').each(function(index) {
            var j = parseInt(jQuery(this).attr('nrbase'));
            ObjBracciale[j].id = index;
        });
    }
    AggiungiDouble(j, objdouble, element, sottraibase) {
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
    RimuoviDouble(j, element, sottraibase) {
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
    RimuoviTessera(id, silent) {
        const self = this;
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

        if (!silent) self.CalcolaRiepilogo(true);
        if ((self.ContaTessere() == 0) && (PulsanteAcquista)) {
            jQuery('#acquista_bracciale').addClass('disable');
            jQuery('#m_btn_acquista').addClass('disable');
            jQuery('#m_acquista_fixed').addClass('disable');
            jQuery('#m_riepilogo_bag').addClass('disable');
        } else if ((self.ControllaMinimoNLink) && (self.ContaTessere() < NumeroMinimoLink) && (PulsanteAcquista)) {
            jQuery('#acquista_bracciale').addClass('disable');
            jQuery('#m_btn_acquista').addClass('disable');
            jQuery('#m_acquista_fixed').addClass('disable');
            jQuery('#m_riepilogo_bag').addClass('disable');
        }
    }
    RimuoviDouble(j, element, sottraibase) {
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
    CalcolaRiepilogo() {
        const self = this;
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

        if ((TipoBracciale != 'classic') && (TipoBracciale != 'big')) {
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
        if ((self.ControllaMinimoNLink) && (self.ContaTessere() >= NumeroMinimoLink)) {
            totale = TotLink;
            totbase = 0;
        }

        if ((PromoBaseGratis) && (TotLink >= PrezzoBaseGratis)) {
            totale = TotLink;
            totbase = 0;
        }

        var testo = str_base + ' ' + SimboloValuta + ' ' + self.DisplayCurrency(totbase) + ' + ' + nr + ' ' + strlink + ' ' + SimboloValuta + ' ' + self.DisplayCurrency(TotLink) + ' = <b>' + SimboloValuta + ' ' + self.DisplayCurrency(totale) + '</b>'
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

        jQuery('.x_tessera').on('click', function() {
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
        }

        var altezzadisp = size.height - 65;
        //jQuery('#m_riepilogo_tessere').height(altezzadisp);
        altezza = altezzadisp - 140;
        jQuery('#m_elenco_tessere').height(altezza);
        altezza = (nr + nrbracciale) * 102;
        var ScrollBarMobile = false;
        if (altezza > (altezzadisp - 140)) {
            jQuery('#m_elenco_tessere').css('max-height', altezza + 'px');
            ScrollBarMobile = true;
        }
    }
    ContaTessere() {
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
}
