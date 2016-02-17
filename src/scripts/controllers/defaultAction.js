define(['jquery', 'underscore'], function($, _){
    var defaultRouter = function(){
        location.hash = 'style';
    }

    return function(hash){
        console.log('defaultAction controller!' );

        if(!hash){
            defaultRouter();
            return;
        }

        var hashArr = hash.split('/');

        require(['scripts/controllers/' + hashArr[0] + '.js'], function(controller){
            if(controller){
                var args = _.filter(hashArr, function(item, index){
                    return index > 0;
                });
                controller.apply(null, args);
            }
        }, function(){
            defaultRouter();
            return ;
        });
    };
});