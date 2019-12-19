// ==UserScript==
// @name         无尽的饼干-自动收集奖励饼干
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://orteil.dashnet.org/cookieclicker/
// @grant        none
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function(){
        var childerns = $('#shimmers').children()
        if(childerns.length > 0) {
            var count = 0;
            console.log('发现饼干!')
            $.each(childerns, function(i, obj){
                $(obj).click();
                console.log('点击饼干');
                console.log(obj);
                count ++;
            });
            console.log('一共点击了' + count + '次饼干!')
        }
    }, 1000);
})();
