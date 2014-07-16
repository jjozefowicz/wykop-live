define([
    'jquery',
    'underscore',
    'backbone',
    'text!tpl/mainFeedView.html'
], function($, _, Backbone, mainFeedView) {

    return Backbone.View.extend({

        render: function() {
            this.$el.html(_.template(mainFeedView));
        }
    });

});