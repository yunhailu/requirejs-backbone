define(['base/view', 'base/video'], function(view, Video){
    var setup = {
        show: function(model){
            return view.createView({
                name: 'setup',
                model: model,
                events: {
                    'click .setup .playBtn': function(){
                        var video = new Video({
                            url: 'http://alicdn1.cleargrass.com/videos/Amber_Twining_1080.mp4',
                            loadImage: 'setupVideo.jpg'
                        });
                        video.init();
                    }
                },
                element: '.container'
            });
        }
    };
    return setup;
});