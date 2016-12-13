'use strict';

//Declare App level modules
angular.module( 'PRIDEWelcome' )
    .factory( 'quickLinkList', function ($http)
    { 
        return {
            get: function ()
            {
                return $http.get( '/sampledata/rightnav/pridequicklinks.json' );
            },
            toggleSelectSection: function ( linkopts )
            {
                self.openedSection = ( self.openedSection === linkopts ? null : linkopts );
            },
            isSectionSelected: function ( linkopts )
            {
                return self.openedSection === linkopts;
            }
        }
    } );