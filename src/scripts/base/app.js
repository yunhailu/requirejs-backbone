define(['jquery', 'backbone','base/router', 'base/view', 'views/viewport', 'base/config'], function($, Backbone, Routers, view, viewport, Config) {
    return {
        init : function(){
            //配置路由
            var Router = Backbone.Router.extend({
                routes: {
                    'style': Routers.router("style"),
                    'setup': Routers.router("setup"),
                    'charging': Routers.router("charging"),
                    'specifications': Routers.router("specifications"),
                    'app': Routers.router("app"),
                    '*defaultAction': Routers.router("defaultAction")
                }
            });

            var router = new Router();
            router.on('route', function (route, params) {
                //这里route是路由对应的方法名
                console.log('hash change', arguments);

                var hash = location.hash.substr(1);
                var title = (function(hash){
                    var map = Config.map;
                    if(map[hash]){
                        return map[hash];
                    }
                    return null;
                })(hash);

                $('.header .title').html(title);
                $('.header .menu').attr({index: Config.order[hash]});
            });

            //初始化viewport界面
            viewport.init(function(){
                Backbone.history.start({pushstate:true});
            });
        }
    };
});	