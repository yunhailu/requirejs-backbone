define(['base/view', 'models/header'], function(view, model){
    var header = {
        show: function(){
            return view.createView({
                name: 'header',
                model: model,
                events: {
                    'click .headMenu': function(e){
                        //console.log('show menu!');
                        var index = $(e.currentTarget).attr('index');
                        location.hash = 'menu/' + index;
                    }
                },
                element: '.header'
            });
        }
    };
    return header;
});