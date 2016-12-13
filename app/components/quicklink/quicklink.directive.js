'use strict';

//Declare App level modules
angular.module( 'PRIDEWelcome' )
    .directive( 'quickLink', function ()
    {
        return {
            restrict: 'E',
            scope: {
                linkopt: '='
            },
            templateUrl: 'app/components/quicklink/quicklink.tmpl.html'
        };
    } );