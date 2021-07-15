export default class Movement {
    constructor() {
        this.sqSize = 25
    }

    fallMovement(pos) {
        pos.yA = pos.yA + 1;
        pos.yB = pos.yB + 1;
        pos.yC = pos.yC + 1;
        pos.yD = pos.yD + 1;
        return pos;
    }

    inputMovement(pos, direction, key) {
        if (direction === key.right) {
            pos.xA = pos.xA + 1;
            pos.xB = pos.xB + 1;
            pos.xC = pos.xC + 1;
            pos.xD = pos.xD + 1;
        } else if (direction === key.left) {
            pos.xA = pos.xA - 1;
            pos.xB = pos.xB - 1;
            pos.xC = pos.xC - 1;
            pos.xD = pos.xD - 1;
        } else if (direction === key.softDrop) {
            pos.yA = pos.yA + 1;
            pos.yB = pos.yB + 1;
            pos.yC = pos.yC + 1;
            pos.yD = pos.yD + 1;
        }
        return pos;
    }

    instantDrop(pos, matrix, isGraph, points) {
        let dropA = 0;
        let dropB = 0;
        let dropC = 0;
        let dropD = 0;
        for (let i = 0; i < 25; i++) {
            if (i > pos.yA && matrix[pos.xA][i].includes('block') || matrix[pos.xA][i].includes('bottom')) {
                dropA > i || dropA === 0 ? dropA = i : i = i;
            }
            if (i > pos.yB && matrix[pos.xB][i].includes('block') || matrix[pos.xB][i].includes('bottom')) {
                dropB > i || dropB === 0 ? dropB = i : i = i;
            }
            if (i > pos.yC && matrix[pos.xC][i].includes('block') || matrix[pos.xC][i].includes('bottom')) {
                dropC > i || dropC === 0 ? dropC = i : i = i;
            }
            if (i > pos.yD && matrix[pos.xD][i].includes('block') || matrix[pos.xD][i].includes('bottom')) {
                dropD > i || dropD === 0 ? dropD = i : i = i;
            }
        }
        const drops = Math.min(dropA - pos.yA - 1, dropB - pos.yB - 1, dropC - pos.yC - 1, dropD - pos.yD - 1);

        //pixel based
        if (isGraph) {
            pos.graphA = pos.getYAPixels() + drops * 25;
            pos.graphB = pos.getYBPixels() + drops * 25;
            pos.graphC = pos.getYCPixels() + drops * 25;
            pos.graphD = pos.getYDPixels() + drops * 25;
        } else {
            points.drop = drops;
            pos.yA = pos.yA + drops;
            pos.yB = pos.yB + drops;
            pos.yC = pos.yC + drops;
            pos.yD = pos.yD + drops;
        }
        return pos;
    }

    leftRotation(pos) {
        let A;
        pos.posState === 1 || pos.posState === 2 ? A = 1 : A = -1;
        if (pos.type === 'line') {
            switch (pos.posState) {
                case 1: case 3:
                    pos.xA = pos.xA +  A;
                    pos.yA = pos.yA + 2 * A;
                    pos.yB = pos.yB + A;
                    pos.xC = pos.xC - A;
                    pos.xD = pos.xD - 2 * A;
                    pos.yD = pos.yD - A;
                    pos.posState++;
                    return pos;
                case 2: case 4:
                    pos.xA = pos.xA + 2 *A;
                    pos.yA = pos.yA - A;
                    pos.xB = pos.xB + A;
                    pos.yC = pos.yC + A;
                    pos.xD = pos.xD - A;
                    pos.yD = pos.yD + 2 *A;
                    pos.posState === 4 ? pos.posState = 1 : pos.posState++;
                    return pos;
            }
        } else if (pos.type === 'l') {
            switch (pos.posState) {
                case 1: case 3:

                    pos.xA = pos.xA - 2 * A;
                    pos.xB = pos.xB - A;
                    pos.yB = pos.yB - A;
                    pos.xD = pos.xD + A;
                    pos.yD = pos.yD + A;
                    pos.posState++;
                    return pos;
                case 2: case 4:
                    pos.yA = pos.yA + 2 * A;
                    pos.xB = pos.xB - A;
                    pos.yB = pos.yB + A;
                    pos.xD = pos.xD + A;
                    pos.yD = pos.yD - A;
                    pos.posState === 4 ? pos.posState = 1 : pos.posState++;
                    return pos;
            }
        } else if (pos.type === 'j') {
            switch (pos.posState) {
                case 1: case 3:
                    pos.yA = pos.yA + 2 * A;
                    pos.xB = pos.xB + A;
                    pos.yB = pos.yB + A;
                    pos.xD = pos.xD - A;
                    pos.yD = pos.yD - A;
                    pos.posState++;
                    return pos;
                case 2: case 4:
                    pos.xA = pos.xA + 2 * A;
                    pos.xB = pos.xB + A;
                    pos.yB = pos.yB - A;
                    pos.xD = pos.xD - A;
                    pos.yD = pos.yD + A;
                    pos.posState === 4 ? pos.posState = 1 : pos.posState++;
                    return pos;
            }
        } else if (pos.type === 's') {
            switch (pos.posState) {
                case 1: case 3:
                    pos.xA = pos.xA - 2 * A;
                    pos.xB = pos.xB - A;
                    pos.yB = pos.yB + A;
                    pos.xD = pos.xD + A;
                    pos.yD = pos.yD + A;
                    pos.posState++;
                    return pos;
                case 2: case 4:
                    pos.yA = pos.yA + 2 * A;
                    pos.xB = pos.xB + A;
                    pos.yB = pos.yB + A;
                    pos.xD = pos.xD + A;
                    pos.yD = pos.yD - A;
                    pos.posState === 4 ? pos.posState = 1 : pos.posState++;
                    return pos;
            }
        } else if (pos.type === 'z') {
            switch (pos.posState) {
                case 1: case 3:
                    pos.yA = pos.yA + 2 * A;
                    pos.xB = pos.xB - A;
                    pos.yB = pos.yB + A;
                    pos.xD = pos.xD - A;
                    pos.yD = pos.yD - A;
                    pos.posState++;
                    return pos;
                case 2: case 4:
                    pos.xA = pos.xA + 2 * A;
                    pos.xB = pos.xB + A;
                    pos.yB = pos.yB + A;
                    pos.xD = pos.xD - A;
                    pos.yD = pos.yD + A;
                    pos.posState === 4 ? pos.posState = 1 : pos.posState++;
                    return pos;
            }
        } else if (pos.type === 't') {
            switch (pos.posState) {
                case 1: case 3:
                    pos.xA = pos.xA - A;
                    pos.yA = pos.yA + A;
                    pos.xB = pos.xB + A;
                    pos.yB = pos.yB + A;
                    pos.xD = pos.xD - A;
                    pos.yD = pos.yD - A;
                    pos.posState++;
                    return pos;
                case 2: case 4:
                    pos.xA = pos.xA + A;
                    pos.yA = pos.yA + A;
                    pos.xB = pos.xB + A;
                    pos.yB = pos.yB - A;
                    pos.xD = pos.xD - A;
                    pos.yD = pos.yD + A;
                    pos.posState === 4 ? pos.posState = 1 : pos.posState++;
                    return pos;
            }
        }
    }
}
export const getSqSize = () => {
    return 25
    };

