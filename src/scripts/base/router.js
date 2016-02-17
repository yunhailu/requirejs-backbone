define(['backbone', 'base/view', 'jquery'], function(Backbone, View, $){
    var Router = {

        //路由初始化可以做一些事
        initialize: function () {

        },

        router: function(hash) {
            return (function(name){

                var url = 'scripts/controllers/' + name + '.js';

                return function(){
                    var _args = arguments;
                    require([url], function (controller) {
                        controller.apply(null, _args);
                    });
                };

            })(hash);
        }

    };

    return Router;    //这里必须的，让路由表执行
});