var path = require('path');
var mcss = require('mcss');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
    const callback = this.callback;
    const options = loaderUtils.getOptions(this);

    mcss(options).translate(source).done(function(text) {
        callback(null, text);
    }).fail(function(err) {
        callback(err);
    });

}