define(['backbone', 'base/config', 'local/local'], function(Backbone, config, local){
    var language = local.common.current_language;
    local = local.app;
    var App = Backbone.Model.extend({
        defaults:{
            name: 'app page',
            cdnPath: config.cdnPath,
            local: local,
            language: language,
            appSlider: [{
                src: config.cdnPath + language + '/app_01.jpg',
                title: local.get_notifications,
                cxt: [local.get_notifications_1, local.get_notifications_2, local.get_notifications_3, local.get_notifications_4]
            },{
                src: config.cdnPath + language + '/app_02.jpg',
                title: local.check_amber_status,
                cxt: [local.check_status_1, local.check_status_2, local.check_status_3, local.check_status_4]
            },{
                src: config.cdnPath + language + '/app_03.jpg',
                title: local.track_amber,
                cxt: local.available_app_store_mobile
            }]
        }
    });

    return App;
});