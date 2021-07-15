export const gameOverView = () => {
    const canvas = document.getElementById("stage");
    const ctx = canvas.getContext("2d");
    ctx.font = "26px EightBit";
    ctx.fillStyle = "White";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", canvas.width/2, canvas.height/2);
    ctx.strokeText("GAME OVER", canvas.width/2, canvas.height/2);
};

export const reservePieceView = (img, code, shift, isMain) => {
    let canvas;
    if(isMain === 1) {
        if (shift) {
            canvas = document.getElementById('reservePiece');
        } else {
            canvas = document.getElementById(`nextPiece`);
        }
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (code === 0) {
            ctx.drawImage(img.lineBlock, 14, 53, 100, 25);
        } else if (code === 1) {
            ctx.drawImage(img.lBlock, 30, 39, 75, 50);
        } else if (code === 2) {
            ctx.drawImage(img.jBlock, 30, 39, 75, 50);
        } else if (code === 3) {
            ctx.drawImage(img.sBlock, 30, 39, 75, 50);
        } else if (code === 4) {
            ctx.drawImage(img.zBlock, 30, 39, 75, 50);
        } else if (code === 5) {
            ctx.drawImage(img.tBlock, 30, 39, 75, 50);
        } else if (code === 6) {
            ctx.drawImage(img.squareBlock, 42, 39, 50, 50);
        }
    } else {
        canvas = document.getElementById(`nextPiece${isMain}`);
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (code === 0) {
            ctx.drawImage(img.lineBlock, 8, 30, 57, 14);
        } else if (code === 1) {
            ctx.drawImage(img.lBlock, 17, 22, 43, 29);
        } else if (code === 2) {
            ctx.drawImage(img.jBlock, 17, 22, 43, 29);
        } else if (code === 3) {
            ctx.drawImage(img.sBlock, 17, 22, 43, 29);
        } else if (code === 4) {
            ctx.drawImage(img.zBlock, 17, 22, 43, 29);
        } else if (code === 5) {
            ctx.drawImage(img.tBlock, 17, 22, 43, 29);
        } else if (code === 6) {
            ctx.drawImage(img.squareBlock, 24, 22, 29, 29);
        }
    }
};

export const showScoreAndLevel = (points) =>{
    document.querySelector('#points').textContent = points.totalPoints;
    document.querySelector('#gameLevel').textContent = points.level;
    document.querySelector('#linesCleared').textContent = points.linesCompleted;
    document.querySelector('#highScore').textContent = points.highScore;
    document.querySelector('#highScoreMenu').textContent = `High Score: ${points.highScore}`;
};


export const clearPieceView = () => {
    let canvas;
    canvas = document.getElementById('reservePiece');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas = document.getElementById('nextPiece');
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

export const hideShowUi = (state) => {
    if(state ==='game'){
        document.querySelector('.menu').style.display = 'none';
        document.querySelector('.game').style.display = 'grid';
        document.querySelector('.keyBind').style.display = 'none';
    } else if (state ==='menu') {
        document.querySelector('.menu').style.display = 'grid';
        document.querySelector('.game').style.display = 'none';
        document.querySelector('.keyBind').style.display = 'none';
    } else if (state ==='set') {
        document.querySelector('.menu').style.display = 'none';
        document.querySelector('.game').style.display = 'none';
        document.querySelector('.keyBind').style.display = 'grid';
    }
};

export const displaySetLevel = (points) => {
    document.querySelector('#levelSet').textContent = points.levelSetter;
};
