cc.Class({
    extends: cc.Component,
    
    properties: {

    allScore: {
    type: cc.Node,
    default: null,
    },
    win:{
    type:cc.Node,
    default:null,
    },
    
    failed:{
    type:cc.Node,
    default:null,
    },
    flat:{
    type:cc.Node,
    default:null, 
    }
    
    },
    
    onLoad: function () {
    this.node.active = false;
    },
    init: function () {
    this.node.active = false;
    },
    
    win_match: function () {
    this.node.active = true;
    this.failed.active = false;
    this.flat.active = false;
    },
    flat_match: function () {
    this.node.active = true;
    this.failed.active = false;
    this.win.active = false;
    },
    failed_match: function () {
    this.node.active = true;
    this.win.active = false;
    this.flat.active = false;
    },
    allScore_show: function (score) {
    this.allScore.getChildByName("Label").getComponent(cc.Label).string = score;
    },
    look: function () {
    cc.director.loadScene("look");
    },
    catch: function () {
    cc.director.loadScene("catch");
    },

    share: function () {
    var addx = function () {
    Global.x = Global.x + 1; 
    Global.shareX = Global.x;
    console.log(Global.x+"Global.x");
    console.log(Global.shareX+"Global.shareX");
    console.log("分享加积分！！！");
    };
    wx.showShareMenu(true);
    
    window.wx.shareAppMessage({
    title: "系兄弟，就来踢我！",
    imageUrl:'https://blockchain4.applinzi.com/remote/res/raw-assets/NewFolder/share.jpg',
    success(res){
    addx(); 
    look2();
    },
    fail(res){
    console.log("转发失败!!!")
    } 
    });
    },
    
    
    });
    