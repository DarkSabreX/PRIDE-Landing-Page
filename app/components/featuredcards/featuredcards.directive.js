'use strict';

//Declare App level modules
angular.module( 'PRIDEWelcome' )
    .directive( 'featuredCards', function ()
    {
        return{
            restrict: 'E',
            scope: {
                featured:'='
            },
            templateUrl: 'app/components/featuredcards/featuredcards.tmpl.html'
        };
    } );