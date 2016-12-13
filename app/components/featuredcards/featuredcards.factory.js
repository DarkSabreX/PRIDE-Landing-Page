'use strict';

//Declare App level modules
angular.module( 'PRIDEWelcome' )
    .factory( 'featuredCards', function ($http)
    { 
        return {
            get: function ()
            {
                return $http.get( '/sampledata/featuredcards/pridefeaturedcontent.json' );
            }
        }
    } );