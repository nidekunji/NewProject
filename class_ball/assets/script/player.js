cc.Class({
    extends: cc.Component,
     
    
    
    properties: {
  
       
    },
   

     onLoad () {
        
        this.node.x=0;
        this.node.y=-209;
     },

    start () {
            this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
                var delta = event.touch.getDelta();
                var playerX = this.x+ delta.x;
                var playerY = this.y+ delta.y;//触摸移动
              
               if(playerX<-189||playerX>185){playerX=this.x;}
               if(playerY<-388||playerY>-35){playerY=this.y;}

               this.x = playerX;
               this.y = playerY;
        
            }, this.node);
    },
});
