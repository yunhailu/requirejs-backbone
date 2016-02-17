define(['jquery', 'underscore', 'base/view', 'base/config', 'BlockUI', 'css!styles/video.css'], function($, _, view, Config){
    function Video(opts){
        this.url = opts.url;
        this.loadImage = opts.loadImage;
    }
    Video.prototype = {
        constructor: Video,
        init: function(){
            var dfd = $.Deferred();
            var that = this;

            require(['text!../templates/video.html'], function(tmpl){
                var View = Backbone.View.extend({
                    url: that.url,
                    template: _.template(tmpl),
                    events: null,
                    initialize: function() {
                        this.render();
                    },
                    bind: function(){
                        $('body').one('click', '.player .closePlayer', $.unblockUI);
                    },
                    render: function() {
                        var _this = this;
                        $.blockUI({
                            message: _this.template({opts: that, cdnPath: Config.cdnPath}),
                            css: {
                                left: 0,
                                top: 0,
                                width: '100%',
                                height: '200rem',
                                border: 'none',
                                background: 'transparents'
                            },
                            bindEvents: true
                        });
                        _this.bind();
                        return _this;
                    },
                    close: function(){
                        $.unblockUI();
                    },
                    el: '#videoPlayer'
                });

                var view = new View();
                dfd.resolve(view);
            });
            return dfd.promise();
        }
    };

    return Video;
});