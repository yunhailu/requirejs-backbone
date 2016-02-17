define(['base/view'], function(view){
    var charging = {
        show: function(model){
            return view.createView({
                name: 'specifications',
                model: model,
                element: '.container'
            });
        }
    };
    return charging;
});