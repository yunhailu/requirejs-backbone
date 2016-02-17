define(['backbone', 'base/config', 'local/local'], function(Backbone, config, local){
    local = local.common;
    var Header = Backbone.Model.extend({
        defaults:{
            name: 'page header',
            cdnPath: config.cdnPath,
            local: local
        }
    });

    return Header;
});