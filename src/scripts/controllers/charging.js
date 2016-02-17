define(['models/charging', 'views/charging'], function(model, view){
    return function(){
        view.show(model);
    };
});