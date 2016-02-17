define(['jquery', 'models/menu', 'views/menu', 'base/config'], function($, model, view, Config){
    return function(index){
        //console.log(name);
        view.show(model).then(function(view){
            $('.header , .footer').hide();
            $('.index03 [index="' + index + '"]').addClass('active');
        });
    };
});