import {getSqSize} from "./Movement";

export default class PiecePosition {
    constructor(){
        this.l = getSqSize();
        this.h = getSqSize();
        this.graphA = 0;
        this.graphB = 0;
        this.graphC = 0;
        this.graphD = 0;
    }
    linePiece(){
        this.xA = 4;
        this.yA = 1;
        this.xB = 5;
        this.yB = 1;
        this.xC = 6;
        this.yC = 1;
        this.xD = 7;
        this.yD = 1;
        this.posState = 1;
        this.color = 'lightblue';
        this.type = 'line';
        this.code = 0;
    }
    lPiece(){
        this.xA = 6;
        this.yA = 1;
        this.xB = 6;
        this.yB = 2;
        this.xC = 5;
        this.yC = 2;
        this.xD = 4;
        this.yD = 2;
        this.posState = 1;
        this.color = 'green';
        this.type = 'l';
        this.code = 1;
    }
    jPiece(){
        this.xA = 4;
        this.yA = 1;
        this.xB = 4;
        this.yB = 2;
        this.xC = 5;
        this.yC = 2;
        this.xD = 6;
        this.yD = 2;
        this.posState = 1;
        this.color = 'blue';
        this.type = 'j';
        this.code = 2;
    }
    sPiece(){
        this.xA = 6;
        this.yA = 1;
        this.xB = 5;
        this.yB = 1;
        this.xC = 5;
        this.yC = 2;
        this.xD = 4;
        this.yD = 2;
        this.posState = 1;
        this.color = 'yellow';
        this.type = 's';
        this.code = 3;
    }
    zPiece(){
        this.xA = 4;
        this.yA = 1;
        this.xB = 5;
        this.yB = 1;
        this.xC = 5;
        this.yC = 2;
        this.xD = 6;
        this.yD = 2;
        this.posState = 1;
        this.color = 'red';
        this.type = 'z';
        this.code = 4;
    }
    tPiece(){
        this.xA = 5;
        this.yA = 1;
        this.xB = 4;
        this.yB = 2;
        this.xC = 5;
        this.yC = 2;
        this.xD = 6;
        this.yD = 2;
        this.posState = 1;
        this.color = 'purple';
        this.type = 't';
        this.code = 5;
    }
    squarePiece(){
        this.xA = 5;
        this.yA = 1;
        this.xB = 6;
        this.yB = 1;
        this.xC = 5;
        this.yC = 2;
        this.xD = 6;
        this.yD = 2;
        this.posState = 1;
        this.color = 'orange';
        this.type = 'square';
        this.code = 6;
    }

    getXAPixels(){
        return (this.xA -1) * getSqSize() ;
    }
    getYAPixels(){
        return (this.yA * getSqSize());
    }
    getXBPixels(){
        return (this.xB -1) * getSqSize() ;
    }
    getYBPixels(){
        return (this.yB * getSqSize());
    }
    getXCPixels(){
        return (this.xC -1) * getSqSize() ;
    }
    getYCPixels(){
        return (this.yC * getSqSize());
    }
    getXDPixels(){
        return (this.xD -1) * getSqSize() ;
    }
    getYDPixels(){
        return (this.yD * getSqSize());
    }



}
