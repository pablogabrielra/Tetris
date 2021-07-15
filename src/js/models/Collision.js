export const checkVCollision = (piece, matrix) =>{
    if (matrix[piece.xA][piece.yA + 1].includes('bottom') || matrix[piece.xA][piece.yA + 1].includes('block')) {
        return true
    }
    if (matrix[piece.xB][piece.yB + 1].includes('bottom') || matrix[piece.xB][piece.yB + 1].includes('block')) {
        return true
    }
    if (matrix[piece.xC][piece.yC + 1].includes('bottom') || matrix[piece.xC][piece.yC + 1].includes('block')) {
        return true
    }
    if (matrix[piece.xD][piece.yD + 1].includes('bottom') || matrix[piece.xD][piece.yD + 1].includes('block')) {
        return true
    }
};


export const checkHCollision = (piece, direction, matrix, key) => {
        if(direction === key.left){
            if (matrix[piece.xA - 1][piece.yA].includes('wall') || matrix[piece.xA - 1][piece.yA].includes('block') || matrix[piece.xB - 1][piece.yB].includes('wall') || matrix[piece.xB - 1][piece.yB].includes('block') || matrix[piece.xC - 1][piece.yC].includes('wall') || matrix[piece.xC - 1][piece.yC].includes('block') || matrix[piece.xD - 1][piece.yD].includes('wall') || matrix[piece.xD - 1][piece.yD].includes('block')) {
                return true
            }
        } else if(direction === key.right) {
            if (matrix[piece.xA + 1][piece.yA].includes('wall') || matrix[piece.xA + 1][piece.yA].includes('block') || matrix[piece.xB + 1][piece.yB].includes('wall') || matrix[piece.xB + 1][piece.yB].includes('block') || matrix[piece.xC + 1][piece.yC].includes('wall') || matrix[piece.xC + 1][piece.yC].includes('block') || matrix[piece.xD + 1][piece.yD].includes('wall') || matrix[piece.xD + 1][piece.yD].includes('block')) {
                return true
            }
        }
    };


export const setPieceToBlock = (piece, matrix) => {
    matrix[piece.xA][piece.yA] = `block ${piece.color}`;
    matrix[piece.xB][piece.yB] = `block ${piece.color}`;
    matrix[piece.xC][piece.yC] = `block ${piece.color}`;
    matrix[piece.xD][piece.yD] = `block ${piece.color}`;
};

export const checkRotationCollision = (pos, matrix) =>{
    let A;
    let xA = pos.xA;
    let yA = pos.yA;
    let xB = pos.xB;
    let yB = pos.yB;
    let xC = pos.xC;
    let yC = pos.yC;
    let xD = pos.xD;
    let yD = pos.yD;
    pos.posState === 1 || pos.posState === 2 ? A = 1 : A = -1;
    if (pos.type === 'line') {
        switch (pos.posState) {
            case 1: case 3:
                xA = xA + A;
                yA = yA + 2 * A;
                yB = yB + A;
                xC = xC - A;
                xD = xD - 2 * A;
                yD = yD - A;
                break;
            case 2: case 4:
                xA = xA + 2 * A;
                yA = yA - A;
                xB = xB + A;
                yC = yC + A;
                xD = xD - A;
                yD = yD + 2 * A;
                break;
        }
    } else if (pos.type === 'l') {
        switch (pos.posState) {
            case 1: case 3:
                xA = xA - 2 * A;
                xB = xB - A;
                yB = yB - A;
                xD = xD + A;
                yD = yD + A;
                break;
            case 2:case 4:
                yA = yA + 2 * A;
                xB = xB - A;
                yB = yB + A;
                xD = xD + A;
                yD = yD - A;
                break;
        }
    } else if (pos.type === 'j') {
        switch (pos.posState) {
            case 1: case 3:
                yA = yA + 2 * A;
                xB = xB + A;
                yB = yB + A;
                xD = xD - A;
                yD = yD - A;
                break;
            case 2: case 4:
                xA = xA + 2 * A;
                xB = xB + A;
                yB = yB - A;
                xD = xD - A;
                yD = yD + A;
                break;
        }
    } else if (pos.type === 's') {
        switch (pos.posState) {
            case 1: case 3:
                xA = xA - 2 * A;
                xB = xB - A;
                yB = yB + A;
                xD = xD + A;
                yD = yD + A;
                break;
            case 2: case 4:
                yA = yA + 2 * A;
                xB = xB + A;
                yB = yB + A;
                xD = xD + A;
                yD = yD - A;
                break;
        }
    } else if (pos.type === 'z') {
        switch (pos.posState) {
            case 1: case 3:
                yA = yA + 2 * A;
                xB = xB - A;
                yB = yB + A;
                xD = xD - A;
                yD = yD - A;
                break;
            case 2: case 4:
                xA = xA + 2 * A;
                xB = xB + A;
                yB = yB + A;
                xD = xD - A;
                yD = yD + A;
                break;
        }
    } else if (pos.type === 't') {
        switch (pos.posState) {
            case 1: case 3:
                xA = xA - A;
                yA = yA + A;
                xB = xB + A;
                yB = yB + A;
                xD = xD - A;
                yD = yD - A;
                break;
            case 2: case 4:
                xA = xA + A;
                yA = yA + A;
                xB = xB + A;
                yB = yB - A;
                xD = xD - A;
                yD = yD + A;
                break;
        }
    }
    if (matrix[xA][yA].includes('block') || matrix[xA][yA].includes('bottom') || matrix[xA][yA].includes('wall') || matrix[xA][yA] === null) {
        return true
    } else if (matrix[xB][yB].includes('block') || matrix[xB][yB].includes('bottom') || matrix[xB][yB].includes('wall') || matrix[xB][yB] === null) {
        return true
    } else if (matrix[xC][yC].includes('block') || matrix[xC][yC].includes('bottom') || matrix[xC][yC].includes('wall') || matrix[xC][yC] === null) {
        return true
    } else if (matrix[xD][yD].includes('block') || matrix[xD][yD].includes('bottom') || matrix[xD][yD].includes('wall') || matrix[xD][yD] === null) {
        return true
    }

};
