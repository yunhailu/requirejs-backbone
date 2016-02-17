define([
    'require',
    'base/app'
], function(require, App){
    'use strict';
    require(['domReady!'], function(){
        App.init();
    });
});