'use strict';

//Declare App level modules
angular.module( 'PRIDEWelcome' )
    .directive( 'secondaryNewsCard', function ()
    {
        return{
            restrict: 'E',
            scope: {
                articles: '='
            },
            templateUrl: 'app/components/secondarynews/secondarynews.tmpl.html'
        };
    } );