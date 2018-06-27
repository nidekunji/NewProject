
cc.Class({
    extends: cc.Component,

    properties: {
        playerScore: cc.Label,
        robotScore:cc.Label,
    },

    init: function (game) {
        this.game = game;
        this._playerScore = 0;
        this._robotScore = 0;
    },
    
    // 用户增加分数
    addScore: function(){
        this._playerScore += 1;
        this._updateScore();
    },
    // 更新用户分数
    _updateScore: function(){
        this.playerScore.string = this._playerScore; 
    },

     // 更新机器人分数
     _updateRobotScore: function(){
        this.robotScore.string = this._robotScore; 
    },

    //增加机器人分数
    addRobotScore: function(){
        this._robotScore +=1;
        this._updateRobotScore(); 
    },
});
