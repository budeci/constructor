export default class Constructor {
    constructor() {
        this.isMobile = this.CheckIsMobile(); //initiate as false
        this.init();
    }
    init() {
        this.events();
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
        let IntervalloHover;
        jQuery('.tessera').mouseenter(function() {
            if (!isMobile) {
                //if (!DragInCorso) {
                var elem = this;
                IntervalloHover = setTimeout(function() {
                    self.VisualizzaHover(elem);
                }, 100);
                //}
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
}