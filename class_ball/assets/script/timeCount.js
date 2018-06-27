
cc.Class({
    extends: cc.Component,

    properties: {
        timeText: cc.Label,
        maxTime:60,
    },

    init: function (game) {
        this.game = game;
        this.time = this.maxTime;
        this.timeText.string = "60 : 00";
        this.counting = true;
        this.scheduleOnce(this._callback, this.maxTime);
    },

    _callback: function(){
        this.time = this.maxTime;
        this.timeText.string = '00 ：00';
        this.counting = false;
        this.unschedule(this._callback);
    },

    update (dt) {

        if (this.counting && (this.time-dt) >= 0){
            this.time -= dt;
            let text = this.time.toFixed(2)
            if(text.length === 4){
                text = '0' + text;
            }
            this.timeText.string= text.replace('.', ' : ');            
        }
    },

    start () {

    },
});
