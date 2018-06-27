cc.Class({
    extends: cc.Component,
   
    properties: {
       
    },
    onLoad() {
    },
    start() {
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            cc.director.loadScene("firendRinkList");
        }, this.node);
    },
    

   

  
  
});
