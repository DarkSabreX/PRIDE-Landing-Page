'use strict';

//Declare App level modules
angular.module( 'PRIDEWelcome' )
    .factory( 'mainNewsCardData', function ($http)
    { 
        return {
            get: function ()
            {
                return $http.get( '/sampledata/mainnews/pridemainnews.json' );
            }
        }
    } );