define(['backbone', 'base/config', 'local/local'], function(Backbone, config, local){
    local = local.style;
    var Style = Backbone.Model.extend({
        defaults:{
            name: 'style page',
            cdnPath: config.cdnPath,
            local: local,
            dailySlider: [{
                src: config.cdnPath + 'index-bg04-a.jpg',
                headText: local.no_messy_wires
            },{
                src: config.cdnPath + 'index-bg04-b.jpg',
                headText: local.at_night
            },{
                src: config.cdnPath + 'index-bg04-c.jpg',
                headText: local.during_daytime
            },{
                src: config.cdnPath + 'index-bg04-d.jpg',
                headText: local.when_take_break
            }],
            amberSlider: [{
                src: config.cdnPath + 'index-07-01.jpg',
                headText: local.look_at_amber
            },{
                src: config.cdnPath + 'index-07-02.jpg',
                headText: local.look_at_amber
            },{
                src: config.cdnPath + 'index-07-03.jpg',
                headText: local.look_at_amber
            },{
                src: config.cdnPath + 'index-07-04.jpg',
                headText: local.look_at_amber
            }]
        }
    });

    return Style;
});