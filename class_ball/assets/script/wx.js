
cc.Class({
    extends: cc.Component,

    properties: {
        nickName: {
            default: null,
            type: cc.Label
        },
        imgUrl:{
            type:cc.Sprite,
            default:null,
        },
       
    },

    // use this for initialization
    onLoad: function () {
      
    },

  


    on_show_dlg_click: function() {
        this.dlg.show_dlg();
    },


    start : function(){


       var setImageUrl = function (node, url) {
            if (url != null && url != "") {
                cc.loader.load({
                    url: url,//路径
                    type: 'png',//类型
                }, (err, tex) => {
                    if (err) {
    
                    } else {
                        let oldWidth = node.width;
                        node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
                        node.scale = oldWidth / node.width;//大小
                        console.log("输出图片");
                    }
                });
            }
    }



        var func1 = (nickName) =>{
            this.nickName.string = nickName;
        }

        var func2=(avatarUrl) =>{
            setImageUrl(this.imgUrl, avatarUrl);
        }
        
        this.scheduleOnce(function(){
            window.wx.login({
                success: function () {
                    console.log("获取授权成功，开始获取用户信息");


                    //发起网络请求
                    
            window.wx.getUserInfo(
                      {
                        success:function(res) {
                          this.userInfo=res.userInfo;
                          this.nickName=this.userInfo.nickName;
                          this.avatarUrl=this.userInfo.avatarUrl;

                          func1(this.userInfo.nickName);
                          func2(this.userInfo.avatarUrl);
                        },
                        fail:function(res) {
                            reject(res)
                            console.log("获取信息失败");
                        }
                        
                      }
                  );


                },
                fail : function(){
                    console.log("登录失败！");
                }
              })
        },1)


    },
   
   
    update: function (dt) {

    },
});