define(['base/util', 'local/amber_text_en', 'local/amber_text_zh_CN'], function(utils, en, zh_CN){

    var local = utils.cookie.get('lang') || 'en';

    return local == 'en' ? en : zh_CN;
    //return zh_CN;

});
