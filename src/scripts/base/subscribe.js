define(['jquery'], function($){
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

    return {
        subscribe: function(){
            var _email = $(this).parents().children(".mail").val().trim();
            if(checkEmail(_email)){
                sendSubscribe(_email, $(this));
            }else{
                $(this).closest(".mailPanel").children('#tip').show();
            }
        }
    };
});