export default class StageMatrix {
    constructor() {
        this.stageMatrix = [];
    }
    setMatrix() {for (let i = 0; i < 12; i++) {
        this.stageMatrix[i] = [];
        for (let j = 0; j < 25; j++) {
            if(i === 0 || i === 11) {
                this.stageMatrix[i][j] = 'wall'
            } else if (j === 24) {
                this.stageMatrix[i][j] = 'bottom';
            } else {
                this.stageMatrix[i][j] = '0';
            }
        }
    }}

    loadPosition(piece) {
        this.stageMatrix[piece.xA][piece.yA] = `1 ${piece.color}`;
        this.stageMatrix[piece.xB][piece.yB] = `1 ${piece.color}`;
        this.stageMatrix[piece.xC][piece.yC] = `1 ${piece.color}`;
        this.stageMatrix[piece.xD][piece.yD] = `1 ${piece.color}`;
    }

    erasePosition(piece) {
        this.stageMatrix[piece.xA][piece.yA] = '0';
        this.stageMatrix[piece.xB][piece.yB] = '0';
        this.stageMatrix[piece.xC][piece.yC] = '0';
        this.stageMatrix[piece.xD][piece.yD] = '0';
    }

    lineCompletion(matrix,points) {
        let completedLines = [];
        let lines = [];
        points.linesCleared = 0;
        //This is to check what lines are completed
        for (let j = 24; j > 4; j--) {
            let line = 0;
            for (let i = 1; i < 11; i++) {
                if (matrix[i][j].includes('block') && line < 10) {
                    line++;
                }
                if(line === 10) {
                    completedLines.push(j);
                    points.linesCleared++;
                    points.linesCompleted++;
                }
            }
        }
        points.comboEnded();
        //If there are completed lines, this creates an array to store the new order of lines. Completed lines are given a value of 0 and then they are sorted
        if(completedLines.length !== 0) {
            //Create an array to represent the rows
            for (let l = 0; l < 25; l++) {
                lines [l] = l;
            }

            //Check what rows are complete, and then are given the value of 0
            completedLines.map(el => {
                for(let m = 0; m < 25; m++) {
                    if (m === el) {
                        lines[m] = 0;
                    }
                }
            });

            //Sets the rows that have a value of 0 to the top and then the rows with values are dropped down
            lines.sort((a,b) => a - b);

            //Updates the matrix ordered by the rows
            for (let o = 24; o > 4; o--) {
                for (let n = 0; n < 11; n++) {
                    matrix[n][o] = matrix [n][lines[o]]
                }
            }
            points.combo++
        }
    }

    isGameOver(matrix,sound){
        let gameOver = false;
        for (let p = 1; p < 11; p++) {
            if(matrix[p][3].includes('block')){
                sound.backgroundMusic.stop();
                sound.gameOver.play();
                gameOver = true
            }
        }
        return gameOver

    }
}
