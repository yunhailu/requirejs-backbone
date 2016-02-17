define(['base/view', 'base/util', 'models/footer'], function(view, Util, model){
    var footer = {
        show: function(){
            return view.createView({
                name: 'footer',
                model: model,
                events: {
                    'click  .lang': function(e){
                        var lang = $(e.currentTarget).html();
                        if(lang == 'English'){
                            Util.cookie.set('lang', 'en');
                        } else if(lang == '中文'){
                            Util.cookie.set('lang', 'zh_CN');
                        }
                        //window.location.href = location.href;
                        location.reload();
                    }
                },
                element: '.footer'
            });
        }
    };
    return footer;
});