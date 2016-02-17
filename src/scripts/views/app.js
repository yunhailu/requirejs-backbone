define(['base/view'], function(view){
    var app = {
        show: function(model){
            return view.createView({
                name: 'app',
                model: model,
                element: '.container'
            });
        }
    };
    return app;
});