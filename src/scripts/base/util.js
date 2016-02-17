define(function(){
    var Utils = {
        cookie: {
            get: function(name){
                var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
                if(arr = document.cookie.match(reg)){
                    return unescape(arr[2]);
                } else {
                    return null;
                }
            },
            set: function(name, value){
                var Days = 30;
                var exp = new Date();
                exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
                document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
            },
            del: function(name) {
                var exp = new Date();
                exp.setTime(exp.getTime() - 1);
                var cval = this.get(name);
                if(cval != null)
                    document.cookie = name + "="+cval+";expires="+exp.toGMTString();
            }
        }
    };
    return Utils;
});