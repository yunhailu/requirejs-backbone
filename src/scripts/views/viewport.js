define(['jquery', 'base/view', 'views/header', 'views/footer', 'base/config'], function($, view, header, footer, Config){
    var viewport = {
        init: function(fn){
            var container = view.createView({
                name: 'viewport',
                element: '#viewport',
                style: ['bootstrap', 'reset']
            }).then(function(){
                header.show().then(function(){
                    var hash = location.hash.substr(1);
                    $('.header .headMenu').attr({index: Config.order[hash]});
                    $('.header .title').html(Config.map[hash]);
                });
                footer.show();
                fn && fn();
            });
            return container;
        }
    };

    return viewport;
});