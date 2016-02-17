define(['backbone', 'base/config', 'local/local'], function(Backbone, config, local){
    local = local["set-up"];
    var Setup = Backbone.Model.extend({
        defaults:{
            name: 'setup page',
            cdnPath: config.cdnPath,
            local: local,
            components: [{
                image: 'set-up-01.jpg',
                text: local.use_watch_cable
            }, {
                image: 'set-up-02.jpg',
                text: local.set_up_2
            }, {
                image: 'index-07-03.jpg',
                text: local.set_up_3
            }]
        }
    });

    return Setup;
});