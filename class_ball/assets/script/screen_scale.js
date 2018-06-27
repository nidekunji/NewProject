// var popup_dlg = require("popup_dlg");
cc.Class({
    extends: cc.Component,

    properties: {
        // dlg: {
        //     type: popup_dlg,
        //     default: null,
        // },
    },

  


    start () {
    
        var width = cc.director.getWinSize().width;
        var height = cc.director.getWinSize().height;
        console.log(width, height);
        if (width < 640) { // ipad ;
          
            this.node.scale = 0.9;            
        }
        else {
            console.log(width, height);
        } 
    },
    // on_show_dlg_click: function() {
    //     this.dlg.show_dlg();
    // },


   


});
