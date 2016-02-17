define(['backbone', 'base/config', 'local/local'], function(Backbone, config, local){
    local = local.specifications;
    var Specifications = Backbone.Model.extend({
        defaults:{
            name: 'specifications page',
            cdnPath: config.cdnPath,
            local: local,
            data: [{
                title: local.power_in,
                text: local.power_in_data
            },{
                title: local.power_out_1,
                text: local.power_out_1_data
            },{
                title: local.power_out_2,
                text: local.power_out_2_data
            },{
                title: local.battery,
                text: local.battery_data
            },{
                title: local.dimensions,
                text: local.dimensions_data
            },{
                title: local.weight,
                text: local.weight_data
            },{
                title: local.material,
                text: local.material_data
            }]
        }
    });

    return Specifications;
});