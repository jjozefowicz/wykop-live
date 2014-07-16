define([
    'jquery',
    'underscore',
    'backbone',
    'app/views/mainFeed'
], function ($, _, Backbone, mainFeedView){

    var AppRouter =  Backbone.Router.extend({
        routes: {
            '': 'index',
            'entry:entry': 'entry',
            '*tag': 'tag'
        },

        index: function() {
            var options = {
                el: $('#items')
            };
            var view = new mainFeedView(options);
            view.render();
        },
        entry: function(entry) {
            console.log('entry: ' + entry);
        },
        tag: function(tag) {
            console.log('tag: ' + tag);
        }
    });

    var initialize = function() {
        var router = new AppRouter();
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});