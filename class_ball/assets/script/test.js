

cc.Class({
    extends: cc.Component,

    properties: {
        football:{
            type:cc.Node,
            default:null,
        },
        score:{
            type:cc.Label,
            default:null,
        },
        count:1,
        zhen:(1/60)
    },

   
    onLoad () {
    },

    start () {

    },


    shoot: function(proX,proY) {
        this.action =  cc.sequence(cc.moveTo(4 * this.zhen, proX, proY+10), cc.moveTo(30 * this.zhen, 0, 229));
        this.node.runAction(this.action); 
    },

    update (dt) {

        var Allscore=this.score.string;
        this.footballVelocity=this.football.getComponent(cc.RigidBody).linearVelocity;
       
        var speedX = this.football.getComponent(cc.RigidBody).linearVelocity.x;
        var speedY = this.football.getComponent(cc.RigidBody).linearVelocity.y;
        var x = this.football.x;
        var y = this.football.y;
        var abs = Math.sqrt( x*x + y*y);

        var absY = Math.abs(speedY);
        var src = this.node.getPosition();
        var dst = this.football.getPosition();
        var dir = cc.pSub(dst, src);
        var len = cc.pLength(dir);
      
        if( len < 210 && this.football.y > 23 && (this.count % 30)==0) {

            var enemyX = this.node.x;
            var enemyY = this.node.y;
            if(enemyX < -179){enemyX = -179; this.node.x = enemyX;}
            if(enemyX > 179){enemyX = 179; this.node.x = enemyX;}
            if(enemyY < 2){ enemyY = 2; this.node.y = enemyY;}
            if(enemyY >314){enemyY = 314; this.node.y = enemyY;}
            this.node.x = enemyX;
            this.node.y = enemyY;

            

            var x = this.football.x;
            var y = this.football.y;

            var speedX = this.football.getComponent(cc.RigidBody).linearVelocity.x;
            var speedY = this.football.getComponent(cc.RigidBody).linearVelocity.y;

            var xPrime = this.football.x + speedX * 4 * this.zhen; //两帧后的位置
            var yPrime = this.football.y + speedY * 4 * this.zhen;//两帧后的位置
            this.shoot(xPrime,yPrime);
        }
        this.count +=1;
        
       
          
            
      
      
      


    
    },
});
