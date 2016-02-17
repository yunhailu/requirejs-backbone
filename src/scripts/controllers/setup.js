define(['models/setup', 'views/setup'], function(model, view){
    return function(){
        view.show(model);
    };
});