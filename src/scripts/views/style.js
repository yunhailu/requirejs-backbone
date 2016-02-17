define(['jquery', 'base/view', 'base/video', 'base/config'], function($, view, Video, Config){
    var style = {
        show: function(model){
            return view.createView({
                name: 'style',
                model: model,
                events: {
                    'click .stylePage .playBtn img': function(){
                        var video = new Video({
                            url: 'http://alicdn1.cleargrass.com/videos/Amber_1080.mp4',
                            loadImage: 'video-img.jpg'
                        });
                        video.init();
                    }
                }
            });
        }
    };
    return style;
});