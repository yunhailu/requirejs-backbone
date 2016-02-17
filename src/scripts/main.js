require.config({
    paths : {
        jquery : 'vendors/jquery/jquery-1.11.3.min',
        BlockUI : 'vendors/jquery/jquery.blockUI',
        text : 'vendors/require/text',
        domReady : "vendors/require/domReady",
        css : "vendors/require/css",
        boot : "base/boot",
        local : "local",
        underscore : 'vendors/underscore',
        backbone : 'vendors/backbone',
        bootstrap : 'vendors/bootstrap.min'
    },
    shim : {
        BlockUI : {
            deps : ['jquery'],
            exports : 'BlockUI'
        },
        backbone : {
            deps : ['underscore'],
            exports : 'backbone'
        }
    },
    map: {
        '*': {
            'styles': '../styles'
        }
    },
    //urlArgs: "_ds=" + new Date().getTime(),
    deps : ['boot']
});