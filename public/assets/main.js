require.config({

    baseUrl: 'assets/libs',

    paths: {
        app: '../app',
        tpl: '../tpl'
    },


    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['jquery', 'backbone', 'app/router'], function ($, Backbone, router) {
    router.initialize();
});