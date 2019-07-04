'use strict';
module.exports = function() {
    let randy = Math.floor(Math.random() *1000001);
    return function(){
        return randy;
    }
};