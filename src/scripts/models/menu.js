define(['backbone', 'base/config', 'local/local'], function(Backbone, config, local){
    local = local.common;
    var Menu = Backbone.Model.extend({
        defaults:{
            name: 'menu page',
            cdnPath: config.cdnPath,
            local: local,
            //items: [local.style, local.set_up, local.charging, local.specifications, local.app]
            items: [local.style, local.set_up, local.charging, local.specifications, local.app]
        }
    });

    return Menu;
});