define(['backbone', 'base/config', 'local/local'], function(Backbone, config, local){
    local = local.charging;
    var Charging = Backbone.Model.extend({
        defaults:{
            name: 'charging page',
            cdnPath: config.cdnPath,
            local: local,
            components: [{
                image: 'charging_01.png',
                title: local.charge_amber,
                text: local.plug_usb_cable + '<br>' + local.takes_3_hours
            }, {
                image: 'charging_02.png',
                title: local.charge_watch,
                text: local.put_watch_in + '<br>' + local.takes_1_5_hours
            }, {
                image: 'charging_03.png',
                title: local.charge_iphone,
                text: local.plug_lighting_cable + '<br>' + local.takes_2_5_hours
            }]
        }
    });

    return Charging;
});