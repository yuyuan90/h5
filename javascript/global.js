var GLOBALSIZE;
var objectPrototype = Object.prototype;
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend( jQuery.easing,
    {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c*(t/=d)*t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c *(t/=d)*(t-2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c*(t/=d)*t*t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    });
$.extend(jQuery,{
    packing : function(elems)
    {
        if(elems instanceof $)
        {
            return elems;
        }
        else if($.isArray(elems) || elems.nodeType)
        {
            return $(elems);
        }
        else if($.isString(elems))
        {
            if(elems.indexOf('#')>=0 || elems.indexOf('.')>0)
            {
                return $(elems);
            }
            else
            {
                return $('#'+elems);
            }
        }
        else
        {
            return $([]);
        }
    },
    isArray : function(value)
    {
        return objectPrototype.toString.apply(value) === '[object Array]';
    },
    isString : function(value)
    {
        return typeof value === 'string';
    },
    isEmpty : function(value)
    {
        return (value === null) || (value === undefined) || ((core.isArray(value) && !value.length));
    },
    isFunction: function(value) {
        return objectPrototype.toString.apply(value) === '[object Function]';
    },
    isObject: function(value) {
        return !!value && !value.tagName && objectPrototype.toString.call(value) === '[object Object]';
    },
    appendEmByWidth: function() {
        var screenW = document.body.clientWidth,
            style = document.createElement('style'),
            size = (screenW / 720) * 24,
            styles = 'body{font-size:' + size + 'px;}';
        GLOBALSIZE = size;
        (document.getElementsByTagName("head")[0] || document.body).appendChild(style);
        if (style.styleSheet) {
            style.styleSheet.cssText = styles;
        }
        else {
            style.appendChild(document.createTextNode(styles));
        }
    }
});
$(document).ready(function(){
    $.appendEmByWidth();
    var screenW = document.body.clientWidth;
    var screenH = document.documentElement.clientHeight;
    $('#jsshow .item').css('width',screenW+'px');
    $('#jsshow').css({
        'height':screenH+'px',
        'width':screenW+'px'
    });
});


var MobileDrag = function () { };
$.extend(MobileDrag, {
    options: [],
    //初始化OPTION对象
    initOption: function (obj, i, callback) {
        //滑动对象
        var o = {};
        o.draging = false;
        o.target = $.packing(obj);
        //拖拽对象
        o.drager = o.target.find('.con');
        //鼠标onmousedown的起始位置
        o.startX = 0;
        o.upX = 0;
        o.marginLeft = 0;
        o.callback = callback;
        MobileDrag.options[i] = o;
    },
    //创建OPTION对象的值 this=event
    createOption: function (e, i) {
        var pageX = e.touches[0].pageX;
        //初始化 鼠标点击的位置
        MobileDrag.options[i].draging = true;
        MobileDrag.options[i].marginLeft = parseInt(MobileDrag.options[i].drager.css('margin-left'));
        MobileDrag.options[i].startX = pageX;
    },
    //清除OPTION对象的值
    clearOption: function (e, i) {
        $(document).scroll(function () { return false; });
        var pageX = e.changedTouches[0].pageX;
        if (pageX == MobileDrag.options[i].startX) return;

        MobileDrag.options[i].upX = pageX;
        if ($.isFunction(MobileDrag.options[i].callback)) {
            MobileDrag.options[i].callback.call(MobileDrag.options[i]);
        }
        MobileDrag.options[i].draging = false;
        MobileDrag.options[i].startX = 0;
        MobileDrag.options[i].upX = 0;


    },
    //水平移动
    horMove: function (e, i) {
        var o = MobileDrag.options[i],
            pageX = e.touches[0].pageX,
            thisX = pageX,
            left = thisX - o.startX,
            marginLeft = MobileDrag.options[i].marginLeft + left;
        o.drager.css('margin-left', marginLeft);
    }
});
$.extend(MobileDrag.prototype, {
    create: function (obj, callback) {
        $.packing(obj).each(function (i) {
            //this.dragI = i;
            MobileDrag.initOption(this, i, callback);
                //touchstart,
            this.addEventListener('touchstart', function (e) {
                MobileDrag.createOption(e, i);
            }, false);
            //touchmove,
            this.addEventListener('touchmove', function (e) {
                e.preventDefault();
                var o = MobileDrag.options[i];
                if (o && o.draging != false) {
                    MobileDrag.horMove(e, i);
                }
            }, false);
            //touchend,
            this.addEventListener('touchend', function (e) {
                MobileDrag.clearOption(e, i);
            });
        });
    }
});
jQuery(document).ready(function () {
    jQuery('#jsshow div.item').each(function(){
        $(this).clone().appendTo(document.getElementById('jscon'));
    });
    var imgs = jQuery('#jsshow div.item'),
        contents = jQuery('#jsshow div.item > div.content'),
        banner = jQuery('#jsshow'),
        container = banner.find('div.con'),
        len = imgs.length/2,
        index = 0,
        imgwidth = banner.width();
    var mydrag = new MobileDrag();
    mydrag.create('#jsshow', function () {
        var drager = this.drager,
            startX = this.startX,
            upX = this.upX,
            marginLeft = parseInt(drager.css('margin-left')),
            width = imgwidth,
            maxLeft = -width * (len - 1),
            moveDirection;
        if (startX < upX) {
            moveDirection = 'right';
        }
        else {
            moveDirection = 'left';
        }

        //第一个 禁止右拖拽
        if (index == 0 && moveDirection == 'right') {
            drager.animate({
                'margin-left': 0
            }, 'normal');
        }
        //最后一个 禁止左拖拽
     /*   else if (index == len - 1 && moveDirection == 'left') {
            drager.animate({
                'margin-left': maxLeft
            }, 'normal');
        }*/
        //普通状态，可滚动状态
        else {
            //左移
            if (moveDirection == 'left') {
                var oldindex = index;
                index++;
                drager.animate({
                    'margin-left': -width * index
                }, 'normal', function(){
                    if(index == len)
                    {
                        drager.css('margin-left',0);
                        index = 0;
                    }
                    contents.each(function(z){
                        if(z==index)
                        {
                            $(this).animate({
                                'top':'0em',
                                'opacity':'1'
                            },'slow');
                        }
                        else
                        {
                            $(this).css({
                                'top':'10em',
                                'opacity':0
                            });
                        }
                    });
                });
            }
            //右移
            else {
                index--;
                drager.animate({
                    'margin-left': -width * index
                }, 'normal',function(){
                    contents.each(function(z){
                        if(z==index)
                        {
                            $(this).animate({
                                'top':'0em',
                                'opacity':'1'
                            },'slow');
                        }
                        else
                        {
                            $(this).css({
                                'top':'10em',
                                'opacity':0
                            });
                        }
                    });
                });
            }
        }
    })

    $(document).click(function(){
        jQuery('#jsshow div.item').eq(0).prependTo(document.getElementById('jscon'));
    });

});