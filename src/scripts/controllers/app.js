define(['models/app', 'views/app', 'base/slider', 'base/config'], function(model, view, Slider, Config){
    return function(){
        view.show(model).then(function(view){
            var data = view.model.get('appSlider');
            var appSlider = new Slider('#appSlider', '#appSlider .btns', data, Config.sliderSeconds);
            appSlider.init(function(index){
                $('.index03 .doc').hide();
                index = (index == data.length) ? 0 : index;
                $('.index03 [index="' + index + '"]').show();
            });

            $('.index03 [index="0"]').show();
        });
    };
});