sap.ui.define(
    ["sap/suite/ui/generic/template/lib/AppComponent"],
    function (Component) {
        "use strict";

        return Component.extend("com.pg.btp.zordersei5400.Component", {
            metadata: {
                manifest: "json"
            },

            init: function(){
                var myHeaders = new Headers();
                myHeaders.append('pragma','no-cache');
                myHeaders.append('cache-control','no-cache');

                var myInit = {
                    method: 'GET',
                    headers: myHeaders } 

                var myRequest = new Request("/dc818db9-4ce3-4d45-b0ba-d963210177df.comsapecmreuse.comsapecmreusedocumentTable/manifest.json?sap-language=EN");
                fetch(myRequest, myInit);
                myRequest = new Request("/dc818db9-4ce3-4d45-b0ba-d963210177df.comsapecmreuse.comsapecmreusedocumentTable/Component.js");
                fetch(myRequest, myInit);
            }
        });
    }
);