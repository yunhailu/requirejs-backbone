define(['models/specifications', 'views/specifications'], function(model, view){
    return function(){
        view.show(model);
    };
});