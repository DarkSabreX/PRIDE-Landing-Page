'use strict';

//Declare App level modules
angular.module( 'PRIDEWelcome' )
    .controller( 'accessLevelController', function ()
    {
        var level = this;
        
        level.permissionLevels = "user", "admin", "superadmin";
        level.projectList = "ALPS", "VZ", "XM", "COMCAST";
        level.pageOptions = {    
            userLevels:['user','admin','superadmin'],
            projectList:['ALPS', 'VZ','XM','COMCAST','SPRINT']
        }

        level.currentAccess = { permission: '', project: ''};
    } );