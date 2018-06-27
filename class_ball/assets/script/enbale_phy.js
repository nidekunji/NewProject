cc.Class({
    extends: cc.Component,

    properties: {
       
        is_debug: false, 
        gravity: cc.p(0, -320), 
        imgUrl:{type:cc.Sprite,default:null,},
        nickName:{type:cc.Label,default:null,},
    },

  
    onLoad: function () {
        
     wx.showShareMenu(true);
        cc.director.getPhysicsManager().enabled = true; 
       
        if (this.is_debug) { 
            var Bits = cc.PhysicsManager.DrawBits; 
            cc.director.getPhysicsManager().debugDrawFlags = Bits.e_jointBit | Bits.e_shapeBit;
        }
        else { 
            cc.director.getPhysicsManager().debugDrawFlags = 0;
        }
    
        cc.director.getPhysicsManager().gravity = this.gravity;

        if(this.imgUrl.getComponent(cc.Sprite).SpriteFrame == null){console.log("-------------" );}


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
        window.wx.getUserInfo({
        success: function (res) {
            var nickName = res.userInfo.nickName;
            var avatarUrl = res.userInfo.avatarUrl;
            func1(nickName);
            func2(avatarUrl);
        },
    });
    },
    start: function () {

       
    },

  
});
