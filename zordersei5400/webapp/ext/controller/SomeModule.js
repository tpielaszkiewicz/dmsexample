sap.ui.define([], function(ControllerExtension, Icon) {
    "use strict";
    return ControllerExtension.extend("com.pg.btp.zorders00.ext.utils.SomeModule", {
        override:{
            onInit: function(){
                var undefined = "hi"; //I am inline comment
                var sPath = jQuery.sap.getModulePath("com.pg.btp.zorders.Component");
            }
        }
    });
});