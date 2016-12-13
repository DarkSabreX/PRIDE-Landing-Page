'use strict';

//Declare App level modules
angular.module( 'PRIDEWelcome' )
    .factory( 'secondaryNewsCardData', function ($http)
    { 
        return {
            get: function ()
            {
                return $http.get( '/sampledata/secondarynews/pridesecondarynews.json' );
            }
        }
    } );