'use strict';

//Declare App level modules
angular.module( 'PRIDEWelcome' )
    .controller( 'prideWelcomeController', ['$http', 'quickLinkList', 'mainNewsCardData','featuredCards','secondaryNewsCardData', function ( $http, quickLinkList, mainNewsCardData, featuredCards, secondaryNewsCardData )
    {
        var client = this;
        client.featuredPair = {};
        client.mainNews = {};
        client.secondaryNews = {};
        client.quickLinks = {};
        client.isOpen = isOpen;
        client.toggleOpen = toggleOpen;

        //Featured Cards js load
        featuredCards.get().then( function ( res )
        {
            client.featuredPair = res.data;
        } );

        //Main News Card js load
        mainNewsCardData.get().then( function ( res )
        {
            client.mainNews = res.data;
        } );

        //Secondary News Card js load
        secondaryNewsCardData.get().then( function ( res )
        {
            client.secondaryNews = res.data;
        } );

        //QuickLink js Load
        quickLinkList.get().then( function ( res )
        {
            client.quickLinks = res.data;
        } );
        
        function isOpen( linkopt )
        {
            return quickLinkList.isSectionSelected( linkopt );
        }
        function toggleOpen( linkopt )
        {
            quickLinkList.toggleSelectSection( linkopt );

        }

    } ]);