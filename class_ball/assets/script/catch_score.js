
cc.Class({
    extends: cc.Component,

    properties: {
       label:{
           type:cc.Label,
           default:null,
       },
       pro:{
        type:cc.Label,
        default:null,
       },
    },

    onLoad () {
       var showScore = cc.sys.localStorage.getItem('score');
       console.log("showScore"+ showScore);
       this.label.string ="累计积分：" +showScore;
       var showProb =  cc.sys.localStorage.getItem('prob');
       this.pro.string = "胜率 ："+showProb+"%";
    },

    start () {
      
    },
});
