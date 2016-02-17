define(['backbone', 'base/config', 'local/local'], function(Backbone, config, local){
    local = local.common;
    var Header = Backbone.Model.extend({
        defaults:{
            name: 'page footer',
            cdnPath: config.cdnPath,
            local: local
        }
    });

    return Header;
});