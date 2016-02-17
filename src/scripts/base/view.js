/*
 * @param options参数
 *  name:   模版名（./templates/*.html）
 *  style:  样式名（./less/*.less）
 *  model:  模型名（./scripts/models/*.js）
 *  events: 模版事件绑定（json对象）
 *  element: 父级容器（dom选择器）
 * */

define(['jquery','underscore', 'backbone'], function($, _, Backbone){
    var View = {
        createView : function(opts){
            var dfd = $.Deferred();

            var config = [
                'text!../templates/' + opts.name + '.html'
                //,'css!styles/' + (opts.style || opts.name) + '.css'
            ];
            if(opts.style){
                var styles = _.map(opts.style, function(item, index){
                    return 'css!styles/' + item + '.css'
                });
            } else {
                var styles = ['css!styles/' + opts.name + '.css'];
            }
            config = config.concat(styles);


            require(config, function(tmpl){
                Model = opts.model || Backbone.Model.extend({});
                events = opts.events || {};
                element = opts.element || '.container' ;

                var View = Backbone.View.extend({
                    template: _.template(tmpl),
                    events: events,
                    initialize: function() {
                        //this.$el.off();
                        this.listenTo(this.model, "change", this.render);
                        this.render();
                    },
                    render: function() {
                        var _this = this;
                        _this.$el.html(_this.template(_this.model.toJSON()));
                        return _this;
                    },
                    el: element
                });

                var model = new Model();
                var view = new View({model: model});
                dfd.resolve(view);
            });

            return dfd.promise();
        }
    };

    return View;
});