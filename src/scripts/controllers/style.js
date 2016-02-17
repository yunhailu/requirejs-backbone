define(['models/style', 'views/style', 'base/slider', 'base/config', 'base/video', 'BlockUI'], function(model, view, Slider, Config, Video){
    return function(){
        //console.log('style controller!', arguments);
        view.show(model).then(function(view){
            //console.log('view === ', view, view.model.get('dailySlider'));
            var dailySlider = new Slider('#dailySlider', '#dailySlider .btns', view.model.get('dailySlider'), Config.sliderSeconds);
            dailySlider.init();

            var amberSlider = new Slider('#amberSlider', '#amberSlider .btns', view.model.get('amberSlider'), Config.sliderSeconds);
            amberSlider.init();

        });
    };
});