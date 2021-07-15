export default class points{
    constructor() {
        this.highScore = 0;
        this.levelSetter = 0;
    }
    setStart(){
        this.linesCleared = 0;
        this.linesCompleted = 0;
        this.combo = 0;
        this.gameSpeed = 1000;
        this.totalPoints = 0;
        this.level = 0;
        this.drop = 0;    }
    comboEnded(){
        this.linesCleared > 0 ? this.combo=this.combo: this.combo=0 ;
    }
    scoredPoints(sound){
        switch(this.linesCleared){
            case 1:
                this.totalPoints = this.totalPoints + (40*(this.level + 1))+50*(this.combo - 1)*(this.level + 1) + this.drop*2;
                sound.line.play();
                break;
            case 2:
                this.totalPoints = this.totalPoints + (100*(this.level + 1))+50*(this.combo - 1)*(this.level + 1) + this.drop*2;
                sound.double.play();
                break;
            case 3:
                this.totalPoints = this.totalPoints + (130*(this.level + 1))+50*(this.combo - 1)*(this.level + 1) + this.drop*2;
                sound.triple.play();
                break;
            case 4:
                this.totalPoints = this.totalPoints + (1200*(this.level + 1))+50*(this.combo - 1)*(this.level + 1) + this.drop*2;
                sound.quad.play();
                break;
        }
        if(this.highScore<this.totalPoints){
            this.highScore=this.totalPoints
        }
    }
    gameLevel(){
        this.level = Math.floor(this.linesCompleted / 10) + this.levelSetter;
        this.gameSpeed = 1000 / (1 + this.level * 0.333);
    }
}