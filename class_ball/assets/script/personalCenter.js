
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    onLoad: function () {
       
    },

    
    start () {

        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            cc.director.loadScene("personalCenter");
        }, this.node);

    },

   
});

