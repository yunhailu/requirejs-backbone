define(['jquery', 'underscore', 'css!styles/slider.css'], function($, _){
    function Slider(el, pos, data, seconds){
        this.$el = $(el);
        this.$pos = $(pos);
        this.data = data.concat(data[0]);
        this.index = 0;
        this.length = this.data.length;
        this.timer = null;
        this.seconds = seconds || 5;
    }
    Slider.prototype = {
        constructor: Slider,
        init: function(fn){
            var _this = this;
            require(['text!../templates/slider.html'], function(doc){
                var tmpl = _.template(doc);
                _this.$el.html(tmpl({data: _this.data}));
                _this.$el.find('#sliders').css({width: _this.length * 100 + '%'});
                _this.$el.find('#sliders li').css({width: 100 / _this.length + '%'});
                _this.loop(fn);
                _this.setText();
                _this.setPos();
            });
        },
        move: function(fn){
            if(this.$el.attr('isActive') == 'true') return;
            this.$el.attr('isActive', 'true');
            this.index += 1;
            var _this = this;
            if(this.index == this.length){
                this.index = 1;
                this.$el.find('#sliders').css({'margin-left': '0%'});
            }
            this.$el.find('#sliders').animate({'margin-left': '-' + _this.index * 100 + '%'}, '500', function(){
                _this.$el.attr('isActive', 'false');
                _this.setPos();
                _this.setText();
            });
            fn && fn(this.index);
        },
        loop: function(fn){
            var _this = this;
            this.timer = setInterval(function(){
                _this.move(fn);
            }, _this.seconds * 1000);
        },
        setText: function(){
            var _this = this;
            this.$el.find('.headText').html(_this.data[_this.index].headText);
        },
        setPos: function(){
            var _this = this;
            this.$el.find('.btns li').removeClass('active');
            this.$el.find('.btns li[index="'+ ((_this.index == _this.length - 1) ? 0 : _this.index) +'"]').addClass('active');
        }
    };

    return Slider;
});