'use strict';

//Declare App level modules
angular.module( 'PRIDEWelcome' )
    .directive( 'mainNewsCard', function ()
    {
        return{
            restrict: 'E',
            scope: {
                news:'='
            },
            templateUrl: 'app/components/mainnews/mainnews.tmpl.html'
        };
    } );