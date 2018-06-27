
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
      }
    },
    
 onLoad () {
     
 },



    start () {

       




        //   this.schedule(function(){
        //     this.ballx=this.football.x;
        //     this.bally=this.football.y;
     
        //     if(this.bally<-155||this.bally<0){
        //         console.log("今天就叫你见识一下什么叫做绝望");
        //         this.robotx=4;
        //         this.roboty=229;
     
        //     }
        //     else if(this.bally>30){
        //         this.robotx=this.ballx;
        //         this.roboty=this.bally+30;
        //     };
        //     this.node.x=this.robotx;
        //     this.node.y=this.roboty;
        // },2);

      
  
        // this.footballPostion=this.football.getPosition();
        // console.log("足球的位置："+this.footballPostion);
        // this.enemyPostion=this.node.getPosition(); 
        // console.log("守门员的位置："+this.enemyPostion);
        // this.dir=cc.pSub(this.enemyPostion,this.footballPostion);
        // console.log("距离："+this.dir);
        // this.len=cc.pLength(this.dir);
        // console.log("转换为长度:"+this.len);
        // 

       

      
        // // console.log("球的速度："+this.footballSpeed);
       
       
        // // // 获取移动速度
        //  if(this.len<300){
           
        //     var sx = this.vx * dt;
        //     var sy = this.vy * dt;
    
        //     this.node.x += sx;
        //     this.node.y += sy;

        //     console.log("进入范围准备防守");
        //     // this.footballPostion=this.node.getPosition();
        //    var action = cc.moveTo(100,cc.p(400,this.node.y));
        //  // 执行动作
        //  this.node.runAction(action);
        //     // this.enemy.runAction(fin);
        //     console.log("拦住球");}

        //     if(this.football.y<-155){
        //         this.node.x=4;
        //         this.node.y=299;
        //     }

        
    // 让节点左右来回移动
    // var seq = cc.repeatForever(
    //     cc.sequence(
    //         cc.moveBy(2, 200, 0),
    //         cc.moveBy(2, -200, 0)
    //     ));
    // this.node.runAction(seq);

   
        // this.ballx=this.football.x/2;
        // this.bally=2*this.football.y;

        // console.log("x的坐标 ："+this.football.x);
        // console.log("足球的y坐标 ："+this.football.y);
        //  console.log("足球的x坐标 ："+this.football.x*-1);
        //  console.log("足球的y坐标 ："+this.football.y*-1);
      

        //  if(this.football.x<1){
        //     this.robotx=4;
        //     this.roboty=229;
        //    console.log("未过半场，防守员不动");
        //  }

        //  if(this.football.y>0&&this.football.y<115){
        //     // this.robotx=this.ballx;
        //     // this.roboty=this.bally;
        //     // console.log("过了半场，准备防守！！！！！！！！！！");

             
        //     var seq =   cc.sequence(
        //                 cc.moveBy(4,this.ballx, this.bally),
        //                 cc.moveBy(4,4, -229)
        //             );
        //             this.node.runAction(seq);

        //  }
        
        //  this.node.x=this.robotx;
        //  this.node.y=this.roboty;
      
//    // 创建一个移动动作
// var action = cc.moveTo(2, 100, 100);
// // 执行动作
// node.runAction(action);
       
      
   

    

    },

     update (dt) {

        var Allscore=this.score.string;
        this.footballVelocity=this.football.getComponent(cc.RigidBody).linearVelocity;
        console.log("足球的速度 ：" + this.footballVelocity);
        if(this.footballVelocity < 100 || this.footballVelocity < -100){
            console.log("足球龟速运转中 ："+this.footballVelocity);
        }

        //第一道防线,
        if(Allscore<2||Allscore==2){
            console.log("时间还很多....让你蹦跶蹦跶");
            this.node.stopAction(this.chuizhi);
            //近似垂直的情况
            if(this.football.x>-80&&this.football.x<80){
                console.log("近似垂直的情况 ：");
                this.chuizhi =  cc.moveTo(0.3,0,100);
                 this.node.runAction( this.chuizhi); 
             }
            

             //超过第一条绿色防线
             if(this.football.y>100&&this.football.y<150){
                 console.log("进入防守区域");
                 this.node.stopAction(this.left);
                 this.node.stopAction(this.right);
               
            //如果足球从左边进攻   
             if(this.football.x<0){
                console.log("进入防守左边区域，准备防守！");
                       this.left = cc.moveTo(0.5,-80,229);
                         this.node.runAction( this.left); 
             }

             //如果足球从右边进攻   
             if(this.football.x>0){
                 this.right = cc.moveTo(0.5,80,229);
                 this.node.runAction(this.right);
             }  
             }

        }

        //第二道防线
        if(Allscore>2){
            console.log("认真的狮子....让你蹦跶蹦跶");
            
            //近似垂直的情况
            if(this.football.x>-80&&this.football.x<80&&this.football.y>0&&this.football.y<225){
                this.chuizhi =  cc.moveTo(0.5,10,150);
                 this.node.runAction( this.chuizhi); 
             }
             this.node.stopAction(this.chuizhi);

             //进入防守区域
             if(this.football.y>100&&this.football.y<150){
                 console.log("进入防守区域");
                 this.node.stopAction(this.left);
                 this.node.stopAction(this.right);
               
              //左边 
             if(this.football.x<0){
                console.log("进入防守左边区域，准备防守！");
                       this.left = cc.moveTo(0.3,-130,220),
                         this.node.runAction( this.left); 
             }

             //右边
             if(this.football.x>0){
                 this.right =  cc.moveTo(0.3,130,220),
                 this.node.runAction(this.right);
             }
                
             }

        }


        //如果足球位于防守员的后面超过三秒,把它挡回去
        if(this.football.y>229){
            console.log("足球位于防守员后面");
            var time=1;
            time=time+dt;
            if(time>2){
                    console.log("反击反击反击反击");
                  this.node.x=this.football.x;
                  this.node.y=this.football.y+20;

            }
            
           
            
        }




        //设置防守员的位置限制在场内

    //     var robotx = this.node.x;
    //     var roboty = this.node.y;
       
      
    //    if(robotx < -181||robotx > 181){robotx = this.node.x; console.log("防守员的限制！" + robotx);}
    // //    if(roboty < 10){roboty = this.node.y; console.log("防守员的限制！" + roboty);}

    //    this.node.x = this.robotx;
    //    this.node.y = this.roboty;





        
       
       
     },

});
