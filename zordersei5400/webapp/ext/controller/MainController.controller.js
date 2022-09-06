sap.ui.define([], function(ControllerExtension, Icon) {
    "use strict";
    return ControllerExtension.extend("com.pg.btp.zorders00.ext.controller.MainController", {
        override:{
            onInit: function(){
                alert('I am eslint error!');
                if (true) {
                    console.log('Me');
                }
            }
        }
    });
});