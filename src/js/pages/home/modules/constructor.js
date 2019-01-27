import {
    orderBy
} from 'lodash';

export default class Constructor {
    constructor() {
        // JavaScript Document
        this.init();
    }
    init() {
        this.events();
    }

    events() {
        const self = this;
        const dimension = self.SettaPosizioniTessere();

        $('.tessera_base').mouseenter(function() {
            var link_width = '65px';
            var tessera_width = '55px';
            var width_next = '65px';
            var width_tessera_next = '55px';
            var width_prev = '65px';
            var width_tessera_prev = '55px';
            $(this).stop().animate({
                width: link_width,
            }, "fast");
            $(this).prev('.tessera_base').stop().animate({
                width: width_prev,
            }, "fast");
            $(this).next('.tessera_base').stop().animate({
                width: width_next,
            }, "fast");
            $(this).find('.tesserabracciale').stop().animate({
                height: '55px',
                width: tessera_width,
                top: dimension.tes_top_o,
                left: dimension.tes_left_o
            }, 'fast');
            $(this).prev('.tessera_base').find('.tesserabracciale').stop().animate({
                height: '55px',
                width: width_tessera_prev,
                top: dimension.tes_top1,
                left: dimension.tes_left1
            }, 'fast');
            $(this).next('.tessera_base').find('.tesserabracciale').stop().animate({
                height: '55px',
                width: width_tessera_next,
                top: dimension.tes_top1,
                left: dimension.tes_left1
            }, 'fast');

        });
        $('.tessera_base').mouseleave(function() {
            var link_width = '60px';
            var tessera_width = '50px';
            var width_next = '60px';
            var width_tessera_next = '50px';
            var width_prev = '60px';
            var width_tessera_prev = '50px';
            $(this).stop().animate({
                width: link_width,
            }, "fast");
            $(this).prev('.tessera_base').stop().animate({
                width: width_prev,
            }, "fast");
            $(this).next('.tessera_base').stop().animate({
                width: width_next,
            }, "fast");

            $(this).find('.tesserabracciale').stop().animate({
                height: '50px',
                width: tessera_width,
                top: dimension.tes_top,
                left: dimension.tes_left
            }, 'fast');
            $(this).next().find('.tesserabracciale').stop().animate({
                height: '50px',
                width: width_tessera_next,
                top: dimension.tes_top,
                left: dimension.tes_left
            }, 'fast');
            $(this).prev().find('.tesserabracciale').stop().animate({
                height: '50px',
                width: width_tessera_prev,
                top: dimension.tes_top,
                left: dimension.tes_left
            }, 'fast');

        });

        $(".drag").draggable({
            containment: 'document',
            revert: 'invalid',
            // handle: 'div.drag',
            helper: 'clone',
            scroll: false,
            zIndex: '100',
            opacity: 0.6,
            appendTo: 'body',
            start: function(event, ui) {},
            stop: function() {}
        });

        $(".drop").droppable({
            accept: '.drag,.tessera',
            tolerance: 'intersect',
            activeClass: 'drag-active',
            over: function(event, ui) {
                var link_width = '65px';
                var tessera_width = '55px';
                $(this).parent().stop().animate({
                    //height: '65px',
                    width: link_width,
                }, "fast");
                $(this).parent().find('.tesserabracciale').stop().animate({
                    height: '55px',
                    width: tessera_width,
                    top: dimension.tes_top_o,
                    left: dimension.tes_left_o
                }, 'fast');
            },
            out: function(event, ui) {
                var link_width = '50px';
                var tessera_width = '110px';
                var link_mol = 1;
                $(this).parent().stop().animate({
                    //height: '50px',
                    width: '60px',
                }, "fast");
                $(this).parent().find('.tesserabracciale').stop().animate({
                    height: '50px',
                    width: '50px',
                    top: dimension.tes_top,
                    left: dimension.tes_left
                }, 'fast');
            },
            drop: function(event, ui) {
                var name = $(ui.draggable).attr('name');
                var imgsku = $(ui.draggable).children('img').attr('src');
                var code = $(ui.draggable).attr('code');
                var price = $(ui.draggable).attr('price');
                var link_width = '60px';
                var j = parseInt($(this).parent().attr('nrbase'));

                $(this).parent().find(".tesserabracciale").css('background-image', 'url(' + imgsku + ')');
                $(this).parent().stop().animate({
                    //height: '50px',
                    width: link_width,
                }, 'fast');
                $(this).parent().find('.tesserabracciale').stop().animate({
                    //height: '50px',
                    width: '50px',
                    top: dimension.tes_top,
                    left: dimension.tes_left
                }, "fast");
                $(this).parent().prev().css('z-index', '');
                $(this).parent().next().css('z-index', '');
                $(this).parent().css('z-index', '1');
                const res = ObjBracciale.filter(item => item.position != j);
                res.push({
                    position: j,
                    code: code,
                    price: price,
                    name: name,
                    img: imgsku,
                });
                ObjBracciale = res;
                self.SortObjBracciale();

                return false;
            }
        });

        $('#bracciale').sortable({
            handle: '.handletessera',
            opacity: 0.6,
            appendTo: 'body',
            helper: 'original',
            delay: 0,
            disabled: false, //(!isMobile),
            activate: function(event, ui) {

            },
            start: function(event, ui) {},
            stop: function(event, ui) {
                var j = $(ui.item).attr('nrbase');
                $(ui.item).prev().css('z-index', '');
                $(ui.item).next().css('z-index', '');
                $(ui.item).css('z-index', '1');
                $('.tessera_base').mouseleave();
            },
            update: function(event, ui) {
                ui.item.unbind("click");
                ui.item.one("click", function(event) {
                    console.log("one-time-click");
                    event.stopImmediatePropagation();
                });
            },
            deactivate: function(event, ui) {
                var diff = Math.abs(ui.originalPosition.top - ui.position.top);
                if (diff > 60) {
                    self.RimuoviTessera($(ui.item));
                }
            }
        });
    }

    SettaPosizioniTessere() {
        return {
            tes_top: 5,
            tes_left: 5,
            tes_top1: 5,
            tes_left1: 5,
            tes_top_o: 5,
            tes_left_o: 5,
        };
    }
    RimuoviTessera(id) {
        const self = this;
        var j = $(id).attr('nrbase');
        ObjBracciale = ObjBracciale.filter(item => item.position != j);
        $('#base_' + j).find('.tesserabracciale').css('background-image', 'none');
        self.SortObjBracciale();
    }

    SortObjBracciale() {
        const res = ObjBracciale.map(item => {
            const idx = $(`#base_${item.position}`).index();
            return {
                position: idx,
                ...item
            }
        });
        ObjBracciale = orderBy(res, 'position', 'asc');

        // $('#bracciale .tessera_base').each(function(index) {
        //     var j = parseInt($(this).attr('nrbase'));
        //     ObjBracciale[j].id = index;
        // });
    }

    CheckIsMobile() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }
}