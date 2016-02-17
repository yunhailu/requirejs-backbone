define(['jquery', 'base/view', 'base/config', 'base/util'], function($, view, Config, Util){
    var goto = function(i){
        for(var key in Config.order){
            if(Config.order[key] == i){
                location.hash = key;
                $('.header , .footer').show();
                break;
            }
        }
    };

    var checkEmail = function(email){
        var reg = /\w{1,}([\-\+\.]\w{1,}){0,}@\w{1,}([\-\.]\w{1,}){0,}\.\w{1,}([\-\.]\w{1,}){0,}/
        //var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
        return reg.test(email);
    };
    var sendSubscribe = function(email, el){
        var url = "/subscribe",
            params = {
                email: email,
                catalog: 'Amber.Mobile'
            };
        $.ajax({
            url:url,
            type:"post",
            timeout:4000,
            data:params,
            dataType: "json",
            success:function(d){
                if( d.code == 0 ){
                    var $mailPanel = el.closest(".mailPanel");
                    $mailPanel.find('.mail-box').hide();
                    $mailPanel.find('#tip').hide();
                    $mailPanel.find('#success').show();
                }else{
                    alert(d.msg);
                }
            },
            error:function() {
                alert("Something wrong");
            }
        })
    }

    var menu = {
        show: function(model){
            return view.createView({
                name: 'menu',
                model: model,
                events: {
                    'click .close': function(e){
                        var i = $('ul .active').attr('index');
                        goto(i);
                    },
                    'click .index03 li': function(e){
                        var i = $(e.currentTarget).attr('index');
                        $('.header .headMenu').attr({index: i});
                        goto(i);
                    },
                    'click .language': function(e){
                        var lang = $(e.currentTarget).html();
                        if(lang == 'English'){
                            Util.cookie.set('lang', 'en');
                        } else if(lang == '中文'){
                            Util.cookie.set('lang', 'zh_CN');
                        }
                        location.reload();
                    },
                    'click .mail-box .submit': function(e){
                        //e.defaultPrevented();
                        var _email = $(e.currentTarget).parents().children(".mail").val().trim();
                        if(checkEmail(_email)){
                            sendSubscribe(_email, $(e.currentTarget));
                        }else{
                            $(e.currentTarget).closest(".mailPanel").children('#tip').show();
                        }
                    }
                },
                element: '.container'
            });
        }
    };
    return menu;
});